let seed = 0;
const pool = {};

export default class Locale {
	constructor(locales) {
		if (typeof locales !== "object") {
			throw "params error";
		}

		this.locales = locales;
		this.localesKey = Object.keys(this.locales);
		this._lang = this.localesKey[0];
	}

	getTranslations(key) {
		return (str, tag = "p", type = "text") => {
			seed += 1;
			const obj = {};

			this.localesKey.forEach((el) => {
				obj[el] = this.locales[el][key][str];
			});

			pool[seed] = obj;

			if (tag === "input") {
				return `<input type="${type}" data-locale="${seed}" placeholder="${
					obj[this._lang] || ""
				}" />`;
			}

			return `<${tag} data-locale="${seed}">${obj[this._lang] || ""}</${tag}>`;
		};
	}

	get lang() {
		return this._lang;
	}

	set lang(v) {
		let value = this.localesKey.includes(v) ? v : this.localesKey[0];

		this._lang = value;

		//预设国际化
		const presetDom = document.querySelectorAll("[data-locale-preset]");
		if (!!presetDom.length) {
			presetDom.forEach((item) => {
				seed += 1;
				const presetObj = {};
				const text = item.placeholder || item.innerText;
				const presetKey = item.getAttribute("data-locale-preset");

				Object.keys(this.locales).forEach((el) => {
					presetObj[el] = this.locales[el][presetKey][text];
				});

				pool[seed] = presetObj;
				item.setAttribute("data-locale", seed);
				item.removeAttribute("data-locale-preset");
			});
		}

		localStorage.setItem("lang", value);
		this.render();
	}

	render() {
		document.querySelectorAll("[data-locale]").forEach((el) => {
			const key = el.getAttribute("data-locale");
			if (!key) {
				throw "no data-locale key";
			}

			const value = pool[key][this.lang] || "";

			if (el.innerText) el.innerText = value;
			if (el.placeholder) el.placeholder = value;
		});
	}

	unload() {
		Object.keys(pool).forEach((key) => delete pool[key]);
		seed = 0;
		localStorage.removeItem("lang");
	}
}
