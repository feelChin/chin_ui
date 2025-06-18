let seed = 0;
const pool = {};

export default class Locale {
	constructor(locales) {
		if (typeof locales !== "object") {
			throw "params error";
		}

		this.locales = locales;
		this._lang = Object.keys(locales)[0];
	}

	getTranslations(key) {
		return (str, tag = "p") => {
			seed += 1;

			let obj = {};
			Object.keys(this.locales).forEach((el) => {
				obj[el] = this.locales[el][key][str];
			});

			pool[seed] = obj;

			return `<${tag} data-locale="${seed}">${obj[this._lang] || ""}</${tag}>`;
		};
	}

	get lang() {
		return this._lang;
	}

	set lang(v) {
		localStorage.setItem("lang", v);
		this._lang = v;
		this.render();
	}

	render() {
		document.querySelectorAll("[data-locale]").forEach((el) => {
			const key = el.getAttribute("data-locale");

			el.innerText = pool[key][this.lang] || "";
		});
	}

	unload() {
		Object.keys(pool).forEach((key) => delete pool[key]);
		seed = 0;
		localStorage.removeItem("lang");
	}
}
