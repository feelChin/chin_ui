import "./index.scss";
import s_icon from "../../img/success.png";
import e_icon from "../../img/error.png";

export default class Message {
	constructor(props) {
		const {
			count = 5,
			success_icon = s_icon,
			error_icon = e_icon,
		} = props || {};

		this.MAX = count;
		this.seed = 0;
		this.pool = {};

		if (count > 7) {
			throw "超出气泡最大限制";
		}

		if (!this.MessageElement) {
			this.MessageElement = document.createElement("secition");
			this.MessageElement.className = "cui-message";
			document.body.appendChild(this.MessageElement);
		}

		this.success_icon = success_icon;
		this.error_icon = error_icon;

		this.init();
	}

	init() {
		let img_success = document.createElement("img");
		img_success.src = this.success_icon;

		let img_error = document.createElement("img");
		img_error.src = this.error_icon;

		img_success.remove();
		img_error.remove();
	}

	render(url, text) {
		this.seed += 1;
		const div = document.createElement("div");

		div.className = `cui-message-item ${"seed" + this.seed}`;
		div.innerHTML = `<div class="icon" style="background: url(${url});"></div>
            <div class="text">
							<p>${text}</p>
						</div>`;

		this.pool[this.seed] = {
			el: div,
			status: -1,
			show: false,
			seed: this.seed,
		};

		const item = this.pool[this.seed];

		item.el.addEventListener("animationend", () => {
			item.status += 1;

			if (item.status === 1) {
				delete this.pool[item.seed];

				document.querySelector(".seed" + item.seed)?.remove();
				const waitItem = Object.values(this.pool).find((item) => !item.show);

				if (waitItem) {
					this.MessageElement.appendChild(waitItem.el);
					this.pool[waitItem.seed].show = true;
				}
			}
		});

		if (Object.keys(this.pool).length <= this.MAX) {
			this.MessageElement.appendChild(div);
			this.pool[this.seed].show = true;
		}
	}

	success(text) {
		this.render(this.success_icon, text);
	}

	error(text) {
		this.render(this.error_icon, text);
	}
}
