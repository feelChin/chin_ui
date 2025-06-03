import "./index.scss";

export default class Modal {
	constructor(props) {
		this.seed = 0;

		this.initInstance(props);
		this.init();
	}

	static instance = null;

	static create(params) {
		if (!Modal.instance) {
			Modal.instance = new Modal({ ...params, visable: true });
		} else {
			for (const key in Modal.instance) {
				if (!["seed", "el"].includes(key)) {
					delete Modal.instance[key];
				}
			}

			Modal.instance.initInstance({ ...params, visable: true });
		}

		return Modal.instance.add();
	}

	static cancel(cb) {
		Modal.instance.el.classList.remove("enter");

		const leave = () => {
			Modal.instance.seed = 0;
			Modal.instance.el.innerHTML = "";
			Modal.instance.el.removeEventListener("transitionend", leave);
			cb && cb();
		};

		Modal.instance.el.addEventListener("transitionend", leave);
	}

	init() {
		this.el = document.createElement("section");
		this.el.className = "cui-modal";

		document.body.appendChild(this.el);
	}

	initInstance(props) {
		const {
			width = 400,
			height = 360,
			html = "",
			className = "",
			cb,
			visable = false,
			effectNum = (num) => num + "px",
		} = props;

		this.w = effectNum(width);
		this.h = effectNum(height);
		this.html = html;
		this.className = className;
		this.cb = cb;
		this.visable = visable;

		if (!visable) {
			this.add();
		}
	}

	async add() {
		await this.remove();

		const div_bg = document.createElement("div");
		div_bg.className = "cui-modal-bg";

		const div_wrapper = document.createElement("div");
		div_wrapper.className = "cui-modal-wrapper " + this.className;
		div_wrapper.style.width = this.w;
		div_wrapper.style.height = this.h;
		div_wrapper.style.top = "50%";
		div_wrapper.style.left = "50%";
		div_wrapper.innerHTML = this.html;

		this.el.appendChild(div_bg);
		this.el.appendChild(div_wrapper);

		this.seed = 1;

		requestAnimationFrame(() => {
			this.cb && this.cb();
			if (this.visable) this.el.classList.add("enter");
		});
	}

	remove() {
		return new Promise((resolve) => {
			if (!this.seed) {
				resolve();
				return;
			}

			Modal.cancel(() => {
				requestAnimationFrame(() => {
					resolve();
				});
			});
		});
	}

	show() {
		this.el.classList.add("enter");
	}

	hide() {
		return new Promise((resolve) => {
			this.el.classList.remove("enter");

			const leave = () => {
				this.el.removeEventListener("transitionend", leave);
				requestAnimationFrame(() => {
					resolve();
				});
			};

			this.el.addEventListener("transitionend", leave);
		});
	}
}
