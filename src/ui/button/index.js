import "./index.scss";

export default class Button {
	constructor({ el, type = "primary", text = "" }) {
		this.root = document.querySelector(el);
		this.type = type;
		this.text = text;
		this._loading = false;

		if (!this.root) throw "没有传入dom";

		this.init();
	}

	get loading() {
		return this._loading;
	}

	set loading(v) {
		if (v) {
			this.el.classList.add("loading");
		} else {
			this.el.classList.remove("loading");
		}
		this._loading = v;
	}

	init() {
		const section = document.createElement("section");

		section.className = "cui-button " + this.type;
		section.innerHTML = this.text + "<i></i>";

		this.root.appendChild(section);

		this.el = section;
	}
}
