var p = Object.defineProperty;
var v = (l, e, t) => e in l ? p(l, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[e] = t;
var u = (l, e, t) => v(l, typeof e != "symbol" ? e + "" : e, t);
class B {
  constructor({ el: e, type: t = "primary", text: i = "" }) {
    if (this.root = document.querySelector(e), this.type = t, this.text = i, this._loading = !1, !this.root) throw "没有传入dom";
    this.init();
  }
  get loading() {
    return this._loading;
  }
  set loading(e) {
    e ? this.el.classList.add("loading") : this.el.classList.remove("loading"), this._loading = e;
  }
  init() {
    const e = document.createElement("section");
    e.className = "cui-button " + this.type, e.innerHTML = this.text + "<i></i>", this.root.appendChild(e), this.el = e;
  }
}
const w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAc5SURBVHic7VpbbBRVGP7+WVZuSxwq4JPJJD4golAIEYgI08RCvHDTBxIxUB4xJhRtE3xqm5iIxXRLiNeXlqC+GEPhDTBhSSAYA+ySKPXWsL65oGYLFUu3c34fdnZ3ZnZmzszuLDZxv4e5nTPz//83//nOnDMHaKKJJppoookm/q+gB2FkXfo9LY54q4jxJghuBVhlsMbMKsAAc56BPDEyAGfZmL4+GcdIZlVvvtG+NYyAdemkFn9I6CxoL8A6M8MMFrZjcPHQPK9cYwCcAnDq/gSGM22NISNyAvTRpGYI6jGD1sxAzKDhQYCjvEIAuHieJ8bg1D3laNRERErAxtFjPWDRwcxaOWgzMFkG2OtX6jiIyTN48Mrad/ui8jkSAvTRpCYQOw+G5vZ2rYG4BSnLgCoSwZkCGzsz6w9n6/VdqfcB+o1jO5hmpQHSAHhQSuUCclwtH5HPu3CWMVpnsZJefelQR2iHHaiLAP2nD3tYoZPMUM089kDpzfmUs0+5WxlBVYiG1lx8pzOgu66omQD9x486AfQWfalsyyDniV9rIxDZ8sFR7JcdnFxz6VCPv7d+lmuAPvpxBxQeKrXXSluGi8A1QAPYKZIMGLzz6sb+kYYToI9+rCHGaZhpX3KQnc7bApH3Ah7fAdLus2Jb5I2CsirTFk4YwzeBGJ0ESLVeYsvWHQ3QgCrbpCpxcd7HiCtCEaD/8mkPgFbn9f9SA8i+1VZf6gqlB4EJ0G8mVQB2xWXrznbieOHsrOU4tqS681bAPQNcbBebAnW0nu/U3KOoRvAMEIkDBNhSv/SqqPrEgYi/AzxsEwAwNCUeD5wFgQjQbw6pxOzZ384MDbBYENCDZsGsIJWU6akOdgifFQSAza3jouUE8CaBQIRyMyjdumfhJrzy8DoAwNf5yzj+Z7XGWW2XTRJriCk6gGFpbLIKAMCkbDc7KkeBdRetBnQv3oY9C3UklDlIKHOwt6UNe1vafG2zpYxAe4PEJiVAvzmkAqwD5KLO1l10GtC9aBu2LKjqbPCqut7XNtnLAjUDeQYYhR3Fg2Dt0LtGMA3oXrQVWxaslLrlZrvaQqyaRQekBChEpjfB+mLHRcuJ/Duge9FWbPYJ/uv8ZV/bTgtKjDf5GC3WkVUAk2YeNFQDuh55GZsTKzzdOHMnjeN/WURQogHFHdWfAUylL7/GaYA0+LsZ9N9yjHPkGoDieMUf0m6QwKqsjVvLd89fi+3zipyN/H0NX9y9DD8N6Gp5GZsTT3s++8zdDPpzJwPZrrbAmueNJoJ0gyaLcg14bf4z2J1Yi4QyGwllNl5fsB5vqVvgpQFdLS/Jg781EmYs4OG7N+RNwNKwZBqwY151k2uft9wkwf6WulpeRLsk+CO3Tzmd8LRtfbZvh+OAlAAiMqehA2qAC9rnLUf/ol1I0GwQzODnewd/9u51HLl92uqEi2PVtqs0AJBOocszAJwtHXnXKW5H/sl41lkx+zG8v3gX3l74AtrnP+VZ7/rkb+j/47T9YtixQAVSAuRjAUY5A7xIKH2JfznxHR5VFuD5uU+61ns8vgSPx5d4mhqbyqE391W1peJAwde2y2gEROT9RkwEaAIwHxLsO2Bg/Bt8c++G7LFVGJvKoev3E5gQk/XNB1gORDl7vSElQLC4UDwK/h0wcOcczoUgYWwqh67c55gQ990r1KoBBq7LbMu7wYIoZ4AX3FpgcvxsIBLGpnLozn2BCWPSu1LNGiCks8RSAlLL9mcBStUyFhgYP4Nz937wvG9s6ha6b32JCXE/qjlBm+uZtsH6ewEAYMHHax0LDOTdSagEPwm3+QC7nfAawOBTPiGVEWhGCIaRQlzJEkOzqzPMyQeLBrt0FgP5M8gZ42ifuxwAcO7e9zgxftESGJn3eaS6Wy/gYrsyI4Q8psVwkND8xqg26L9+NkTMHdafE6U3Z/szVCoL+YMj9J8h230O2+Dea8990BckruCzwgWjD4ysW1FU8wGutwJhNSAvpqeP+hizITABqWX7s0yOScYI5wMi0wCFB4OIXwmBm0AJ+s+f3AQcS19mxL9BBsCZqxv6V4WJJ/y/QYPbALYx7PklbqshKa/7vwDnjYKy08eIK0ITkFq2PwvGPuu1maABLJSDYf8MAzUukEgtfWMEoN6ZogHM4uC1jYeHAwdgQc0rRFJL9/cBfBCI/r9A9e2+Y4Heaxv6BwO6XYW61gilnnhzkFjsY0L+gWsAI8/AzivPHg7U33shdC/gBn00qTHNOsmCW8Msb7H2Avb6HusEK/dlCzDaolgmFwkBJWwcPdrDAp0Aq41YIwTmrCAennELJa3Q00lVPKQcYBadbBIB1P0dkCUhUvc51pdZ35uN0t/ICShBTyfVQlx0ENN2QOg1jgVSgnE8ZiD1bcSBl9AwAqzQ00l1CoUdFKOVLFgDuBWAChaqGWweQJaLi6IzBk9fUArINCroJppoookmmmiiCQD4F0m6QbbpYTRsAAAAAElFTkSuQmCC", f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAATwSURBVHic7Zo/TFtHHMe/9zDGMJjnIUOkRjJVl4ohxJ2gQ4AslTIAqpQOHUIk9rxstheShXgLlTpGwlG6NBJKGCLRIYFEChkqgjOkU1UsJVKlduCRARtj7tfBz8SFPN/v3r8g5X1G+3d3v9/37t6797sfEBMTExMTE/O5IqIYhPL5LIQYAXARwAiEMAFkAZiOiQ0iG0JUQFQF0WvU64/E4qIdtm+hCUD5fBaGMQ6iqxBi3FsntA5gBbVaOSwxAhfACXwewDhasxwENoBF7O39FLQQgQpAxeI8gFkEF/hxbACLYmHhVlAdBiKAM+trCC/w41Qg5Ywolap+OzL8dkCFwjQMYwvRBQ8AIzCMLcrnZ/125EsAKhbnIcRDfHiaR4kJw1iiQsHy04nnLUCFggUh7vgZPEBuen0ueBKA8vlZGMaSl7ahQTQjbt9+pNtMWwDngbeFT7Psu2FDygu6D0b9Z4BhfKo9r8J03kRaaAngvOdHdAeJkKzjIxv2FiDLMjEwsI3TOfudVCHlBHcrJNjdDgxch0bwjdFJHHzzLQCgd/MFki+fsoc6/GII+xOXQYMZ9Lz9C8m1xzDes0/A7aP4NY4xawXozn5jdBKNsUv/+y3x5hVSq8ue2ordHQzc/xliv84ZHtBYBbxnQH//LDRmvz3znTSHc6h/9333drmxE8EDAA1mIM+c5Q4PtFbBOMeQ+xCc0hndjW4iHAznsD9xOYhhWhBd5ZgpBSDLMnW/53s3X7j+9zERDoZz2O+yOsTuDnrebeu4AAgxTvl8VmWmXgGp1LTeyEDy5VP0vHV3uFMETvD9D+7quuA0FspXtloAIc57GTu18guMf/52/b85nEPtyhwreI03wHEuqgw4AmS9jCz26y3nu4hweG5I3d578ADj0KYWgMjzyY8jgmu7X30HDyf52hXOCvB18tMV4Sj4f/VEcyGrMuC8Bn0ffdkiNJtBBg8wfPedEuNC6QxoMNPdKJFA86uvo3HIgSOA7zS0PHMWtR/mQH0ppW1j7BIao5N+h2yj9J0jQNWPBzrBtwlMBKIABGB04oZMm6hN/agVfJtARBCiojLhrABlJx9Dpk3Ursx13ffJ579B7O64/u9bBKKqyoQjwDPdcTnB960uI/n7c/Q/uKsU4SA3putCC6LXKhPOFtBeAQ0nmeFG3+oyet+8ajnw3maJ4GUboV5XZomVAohSqerc0rI5PPel63+dwR85oRCB+lK6+QCAaJ1zkco7BwhxT2dst0CSG09OBH/kiEIEjWxQmxWOEU8AKdeh8TrsW3t84rfkxhNlXtBNhN7NDd3ToY1arcwx5GeFi8UltK6+Wci0iYNcKzWW+PMPrYSGTJtoDucg0xn0vNt2XTVdYF+V8QWI/grcKzb29oa4hRTsbwEnw1r26FSULOpUkejfDRaL2zi9q6AiFhYu6DTQ/xqUcgIBfCCFgA0pZ3QbaQvgnAtYty6RIuUNLyUznvIBzj38TS9tQ4HohiiVyl6a+iqSOiVVIp6rQ4AAqsScapE7iP7W2AbRNS9VIZ0EWSb3ENHVDmhdgXcjjEJJC+GthiqA8qkrlOzEuUq/jmCFqAJYh5S3gpj1TsIrlrYs07lWn/JVLC3EPUi5HnTgbaIpl7csE6nUNIQ4DyGyIGqXzH8olweqTv6xAuAZiCphBR0TExMTExMTAwD/Aa6f+A3Mn/p1AAAAAElFTkSuQmCC";
class C {
  constructor(e) {
    const {
      count: t = 5,
      success_icon: i = w,
      error_icon: s = f
    } = e || {};
    if (this.MAX = t, this.seed = 0, this.pool = {}, t > 7)
      throw "超出气泡最大限制";
    this.MessageElement || (this.MessageElement = document.createElement("secition"), this.MessageElement.className = "cui-message", document.body.appendChild(this.MessageElement)), this.success_icon = i, this.error_icon = s, this.init();
  }
  init() {
    let e = document.createElement("img");
    e.src = this.success_icon;
    let t = document.createElement("img");
    t.src = this.error_icon, e.remove(), t.remove();
  }
  render(e, t) {
    this.seed += 1;
    const i = document.createElement("div");
    i.className = `cui-message-item ${"seed" + this.seed}`, i.innerHTML = `<div class="icon" style="background: url(${e});"></div>
            <div class="text">
							<p>${t}</p>
						</div>`, this.pool[this.seed] = {
      el: i,
      status: -1,
      show: !1,
      seed: this.seed
    };
    const s = this.pool[this.seed];
    s.el.addEventListener("animationend", () => {
      var n;
      if (s.status += 1, s.status === 1) {
        delete this.pool[s.seed], (n = document.querySelector(".seed" + s.seed)) == null || n.remove();
        const a = Object.values(this.pool).find((r) => !r.show);
        a && (this.MessageElement.appendChild(a.el), this.pool[a.seed].show = !0);
      }
    }), Object.keys(this.pool).length <= this.MAX && (this.MessageElement.appendChild(i), this.pool[this.seed].show = !0);
  }
  success(e) {
    this.render(this.success_icon, e);
  }
  error(e) {
    this.render(this.error_icon, e);
  }
}
const o = class o {
  constructor(e) {
    this.seed = 0, this.initInstance(e), this.init();
  }
  static create(e) {
    if (!o.instance)
      o.instance = new o({ ...e, visable: !0 });
    else {
      for (const t in o.instance)
        ["seed", "el"].includes(t) || delete o.instance[t];
      o.instance.initInstance({ ...e, visable: !0 });
    }
    return o.instance.add();
  }
  static cancel(e) {
    o.instance.el.classList.remove("enter");
    const t = () => {
      o.instance.seed = 0, o.instance.el.innerHTML = "", o.instance.el.removeEventListener("transitionend", t), e && e();
    };
    o.instance.el.addEventListener("transitionend", t);
  }
  init() {
    this.el = document.createElement("section"), this.el.className = "cui-modal", document.body.appendChild(this.el);
  }
  initInstance(e) {
    const {
      width: t = 400,
      height: i = 360,
      html: s = "",
      className: n = "",
      cb: a,
      visable: r = !1,
      effectNum: h = (g) => g + "px"
    } = e;
    this.w = h(t), this.h = h(i), this.html = s, this.className = n, this.cb = a, this.visable = r, r || this.add();
  }
  async add() {
    await this.remove();
    const e = document.createElement("div");
    e.className = "cui-modal-bg";
    const t = document.createElement("div");
    t.className = "cui-modal-wrapper " + this.className, t.style.width = this.w, t.style.height = this.h, t.style.top = "50%", t.style.left = "50%", t.innerHTML = this.html, this.el.appendChild(e), this.el.appendChild(t), this.seed = 1, requestAnimationFrame(() => {
      this.cb && this.cb(), this.visable && this.el.classList.add("enter");
    });
  }
  remove() {
    return new Promise((e) => {
      if (!this.seed) {
        e();
        return;
      }
      o.cancel(() => {
        requestAnimationFrame(() => {
          e();
        });
      });
    });
  }
  show() {
    this.el.classList.add("enter");
  }
  hide() {
    return new Promise((e) => {
      this.el.classList.remove("enter");
      const t = () => {
        this.el.removeEventListener("transitionend", t), requestAnimationFrame(() => {
          e();
        });
      };
      this.el.addEventListener("transitionend", t);
    });
  }
};
u(o, "instance", null);
let m = o, A = "history";
class L {
  constructor({
    el: e,
    type: t = "hash",
    map: i = [],
    nav: s = {},
    transitionEnd: n = () => {
    },
    animation: a = !0,
    notfound: r = () => 404
  }) {
    this.root = document.querySelector(e), this.type = t, this.pool = [""], this.routerMap = [...i], this.nav = s, this.transitionEnd = n, this.notfound = r, this.animation = a, this._init = !1, this.init();
  }
  renderNav() {
    const { el: e, render: t } = this.nav, i = document.querySelector(e);
    if (!e)
      throw "没有传入nav el";
    let s = "";
    this.routerMap.forEach((n) => {
      typeof t == "function" ? s += t(n) : s += `<div route-link>${n.name}</div>`;
    }), i.innerHTML = s;
  }
  get map() {
    return this.routerMap;
  }
  set map(e) {
    this.routerMap = [...e], this.init();
  }
  init() {
    this.renderNav();
    let e = {};
    this.navItem = document.querySelectorAll("[route-link]"), this.navItem.forEach((t, i) => {
      const { path: s, component: n } = this.routerMap[i];
      e[s] = {
        render: n,
        el: t,
        index: i
      }, t.addEventListener("click", () => {
        this.routeGo(s);
      });
    }), this.routerMapData = e, this.route(), this.type === A ? window.addEventListener("popstate", this.route.bind(this)) : window.addEventListener("hashchange", this.route.bind(this));
  }
  routeGo(e) {
    var s, n;
    const [t, i] = this.pool;
    i !== e && ((n = this.navItem[(s = this.routerMapData[i]) == null ? void 0 : s.index]) == null || n.classList.remove("active"), this.type === A ? (window.history.replaceState(null, `page ${e}`, e || "/"), this.route()) : window.location.href = "#" + e);
  }
  route() {
    var a, r;
    const e = this.type === A ? window.location.pathname : window.location.hash.substr(1);
    let t = "";
    e && (t = e.replace("/", ""));
    let { render: i, index: s } = this.routerMapData[t] || {};
    this.pool.push(t), this.pool.length > 2 && this.pool.shift(), i || (i = this.notfound);
    const n = (a = this.routerMapData[this.pool[0]]) == null ? void 0 : a.index;
    this.root.style.setProperty("--level", n > s ? -1 : 1), this.animation ? this.createEffectDom(i) : this.root.innerHTML = i(), this.transitionEnd(t), (r = this.navItem[s]) == null || r.classList.add("active"), this._init = !0;
  }
  createEffectDom(e) {
    clearTimeout(this.timer);
    let t;
    const i = (a) => {
      const r = document.createElement("div");
      return r.className = "cui_route_page " + (this._init ? a : " init"), r.innerHTML = a === "enter" ? e() : "", r;
    }, [s, n] = this.root.children;
    n ? (t = n, t.className = "cui_route_page leave", this.root.removeChild(s)) : (s ? (t = s, t.className = "cui_route_page leave") : t = i("leave"), this.root.appendChild(t)), this.root.appendChild(i("enter")), this.timer = setTimeout(() => {
      this.root.removeChild(t);
    }, 3e3);
  }
}
let c = 0;
const d = {};
class I {
  constructor(e) {
    if (typeof e != "object")
      throw "params error";
    this.locales = e, this.localesKey = Object.keys(this.locales), this._lang = this.localesKey[0];
  }
  getTranslations(e) {
    return (t, i = "p") => {
      c += 1;
      const s = {};
      return this.localesKey.forEach((n) => {
        s[n] = this.locales[n][e][t];
      }), d[c] = s, `<${i} data-locale="${c}">${s[this._lang] || ""}</${i}>`;
    };
  }
  get lang() {
    return this._lang;
  }
  set lang(e) {
    let t = this.localesKey.includes(e) ? e : this.localesKey[0];
    this._lang = t;
    const i = document.querySelectorAll("[data-locale-preset]");
    i.length && i.forEach((s) => {
      c += 1;
      const n = {}, a = s.innerText, r = s.getAttribute("data-locale-preset");
      Object.keys(this.locales).forEach((h) => {
        n[h] = this.locales[h][r][a];
      }), d[c] = n, s.setAttribute("data-locale", c), s.removeAttribute("data-locale-preset");
    }), localStorage.setItem("lang", t), this.render();
  }
  render() {
    document.querySelectorAll("[data-locale]").forEach((e) => {
      const t = e.getAttribute("data-locale");
      if (!t)
        throw "no data-locale key";
      e.innerText = d[t][this.lang] || "";
    });
  }
  unload() {
    Object.keys(d).forEach((e) => delete d[e]), c = 0, localStorage.removeItem("lang");
  }
}
export {
  B as Button,
  I as Locale,
  C as Message,
  m as Modal,
  L as Route
};
