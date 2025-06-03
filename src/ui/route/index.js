import "./index.scss";

let HISTORY = "history";

export default class Route {
	constructor({
		el,
		type = "hash",
		map = [],
		nav = {},
		transitionEnd = () => {},
		animation = true,
		notfound = () => {
			return 404;
		},
	}) {
		this.root = document.querySelector(el);
		this.type = type;
		this.pool = [""];
		this.routerMap = [...map];
		this.nav = nav;
		this.transitionEnd = transitionEnd;
		this.notfound = notfound;
		this.animation = animation;
		this._init = false;

		this.init();
	}

	renderNav() {
		const { el, render } = this.nav;

		const nav = document.querySelector(el);

		if (!el) {
			throw "没有传入nav el";
		}

		let html = "";

		this.routerMap.forEach((el) => {
			if (typeof render === "function") {
				html += render(el);
			} else {
				html += `<div route-link>${el.name}</div>`;
			}
		});

		nav.innerHTML = html;
	}

	get map() {
		return this.routerMap;
	}

	set map(v) {
		this.routerMap = [...v];

		this.init();
	}

	init() {
		this.renderNav();

		let routerMapData = {};

		this.navItem = document.querySelectorAll("[route-link]");

		this.navItem.forEach((item, index) => {
			const { path, component } = this.routerMap[index];

			routerMapData[path] = {
				render: component,
				el: item,
				index,
			};

			item.addEventListener("click", () => {
				this.routeGo(path);
			});
		});

		this.routerMapData = routerMapData;

		this.route();

		this.type === HISTORY
			? window.addEventListener("popstate", this.route.bind(this))
			: window.addEventListener("hashchange", this.route.bind(this));
	}

	routeGo(pathName) {
		const [_, now] = this.pool;

		if (now === pathName) return;

		this.navItem[this.routerMapData[now]?.index]?.classList.remove("active");

		if (this.type === HISTORY) {
			window.history.replaceState(null, `page ${pathName}`, pathName || "/");

			this.route();
		} else {
			window.location.href = "#" + pathName;
		}
	}

	route() {
		const pathName =
			this.type === HISTORY
				? window.location.pathname
				: window.location.hash.substr(1);

		let name = "";
		if (pathName) {
			name = pathName.replace("/", "");
		}

		let { render, index } = this.routerMapData[name] || {};

		this.pool.push(name);
		if (this.pool.length > 2) {
			this.pool.shift();
		}

		if (!render) {
			render = this.notfound;
		}

		const prev_index = this.routerMapData[this.pool[0]]?.index;
		this.root.style.setProperty("--level", prev_index > index ? -1 : 1);

		if (this.animation) {
			this.createEffectDom(render);
		} else {
			this.root.innerHTML = render();
		}
		this.transitionEnd(name);

		this.navItem[index]?.classList.add("active");

		this._init = true;
	}

	createEffectDom(render) {
		clearTimeout(this.timer);

		let leave_div;

		const createDiv = (type) => {
			const div = document.createElement("div");
			div.className = "cui_route_page " + (this._init ? type : " init");
			div.innerHTML = type === "enter" ? render() : "";
			return div;
		};

		const [prve_leave, prev_enter] = this.root.children;

		if (prev_enter) {
			leave_div = prev_enter;
			leave_div.className = "cui_route_page leave";
			this.root.removeChild(prve_leave);
		} else {
			leave_div = createDiv("leave");
			this.root.appendChild(leave_div);
		}

		this.root.appendChild(createDiv("enter"));

		this.timer = setTimeout(() => {
			this.root.removeChild(leave_div);
		}, 3000);
	}
}
