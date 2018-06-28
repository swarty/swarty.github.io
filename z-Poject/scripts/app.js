!function (e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t();
}(this, function () {
    var e = function (t, n) {
        "use strict";
        var o = Object.create(e.prototype),
            r = 0,
            i = 0,
            s = [],
            a = !1,
            l = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60);
        },
            c = window.transformProp || function () {
            var e = document.createElement("div");if (null == e.style.transform) {
                var t = ["Webkit", "Moz", "ms"];for (var n in t) if (void 0 !== e.style[t[n] + "Transform"]) return t[n] + "Transform";
            }return "transform";
        }(),
            d = function (e, t, n) {
            return e <= t ? t : e >= n ? n : e;
        };o.options = { speed: -2, center: !1, round: !0, callback: function () {} }, n && Object.keys(n).forEach(function (e) {
            o.options[e] = n[e];
        }), o.options.speed = d(o.options.speed, -10, 10), t || (t = ".rellax");var u = document.querySelectorAll(t);if (!(u.length > 0)) throw new Error("The elements you're trying to select don't exist.");o.elems = u;var f = function (e) {
            var t = e.dataset.rellaxPercentage,
                n = e.dataset.rellaxSpeed,
                r = t || o.options.center ? window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop : 0,
                s = r + e.getBoundingClientRect().top,
                a = e.clientHeight || e.offsetHeight || e.scrollHeight,
                l = t || (r - s + i) / (a + i);o.options.center && (l = .5);var c = n ? d(n, -10, 10) : o.options.speed;(t || o.options.center) && (c = d(n || o.options.speed, -5, 5));var u = p(l, c),
                f = e.style.cssText,
                m = "";if (f.indexOf("transform") >= 0) {
                var w = f.indexOf("transform"),
                    v = f.slice(w),
                    g = v.indexOf(";");m = g ? " " + v.slice(11, g).replace(/\s/g, "") : " " + v.slice(11).replace(/\s/g, "");
            }return { base: u, top: s, height: a, speed: c, style: f, transform: m };
        },
            m = function () {
            var e = r;return r = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, e != r;
        },
            p = function (e, t) {
            var n = t * (100 * (1 - e));return o.options.round ? Math.round(10 * n) / 10 : n;
        },
            w = function () {
            m() && !1 === a && v(), l(w);
        },
            v = function () {
            for (var e = 0; e < o.elems.length; e++) {
                var t = (r - s[e].top + i) / (s[e].height + i),
                    n = p(t, s[e].speed) - s[e].base,
                    a = "translate3d(0," + n + "px,0) " + s[e].transform;o.elems[e].style[c] = a;
            }o.options.callback(n);
        };return o.destroy = function () {
            for (var e = 0; e < o.elems.length; e++) o.elems[e].style.cssText = s[e].style;a = !0;
        }, function () {
            i = window.innerHeight, m();for (var e = 0; e < o.elems.length; e++) {
                var t = f(o.elems[e]);s.push(t);
            }window.addEventListener("resize", function () {
                v();
            }), w(), v();
        }(), o;
    };return e;
});
function SVGInliner(elements) {
    "use strict";

    this.elements = elements;
    this.results = {};
    this.images = [];
    this.init();
}

SVGInliner.prototype.init = function () {
    "use strict";

    this.replaceImages();
};

SVGInliner.prototype.isSVG = function (img) {
    "use strict";

    if (img.hasAttribute("src")) {
        var splits = img.getAttribute("src").split(".");

        return splits[splits.length - 1].substr(0, 3) === "svg";
    } else {
        return false;
    }
};

SVGInliner.prototype.replaceImages = function () {
    "use strict";

    for (var i = 0; i < this.elements.length; i++) {
        if (this.isSVG(this.elements[i])) {
            this.images.push(new SVGImage(this.elements[i], this));
        }
    }
};

function SVGImage(img, inliner) {
    "use strict";

    this.image = img;
    this.inliner = inliner;

    if (img !== null && typeof img !== "undefined") {
        this.image.style.display = "none";

        this.getData(function (element) {
            this.createSVG(element);
            this.injectSVG();
        }.bind(this));
    }
}

SVGImage.prototype.getData = function (cb) {
    "use strict";

    var src = this.image.getAttribute("src");

    if (typeof this.inliner.results[src] !== "undefined") {
        cb(this.inliner.results[src]);
    } else {

        this.xhr = new XMLHttpRequest();
        this.xhr.onload = function (e) {
            if (this.xhr.status === 200) {
                this.inliner.results[src] = this.xhr.responseXML;

                cb(this.xhr.responseXML);
            }
        }.bind(this);
        this.xhr.open("GET", src, true);
        this.xhr.overrideMimeType("image/svg+xml");
        this.xhr.send("");
    }
};

SVGImage.prototype.createSVG = function (element) {
    "use strict";

    this.element = element.firstChild ? element.firstChild : element;

    if (this.hasHash()) {
        this.filterSVG();
    }
};

SVGImage.prototype.cloneAttributes = function () {
    "use strict";

    var className = this.image.getAttribute("class");
    if (className !== null) {
        this.element.setAttribute("class", className);
    }

    var idName = this.image.getAttribute("id");
    if (idName !== null) {
        this.element.setAttribute("id", idName);
    }
};

SVGImage.prototype.filterSVG = function () {
    "use strict";

    var hash = this.extractHash();
    var id = hash[hash.length - 1];
    var width = 0;
    var height = 0;

    var children = this.element.getElementsByTagName("svg");
    for (var i = 0; i < children.length; i++) {
        if (children[i].getAttribute("id") === id) {
            this.element = children[i];
            this.setDefaultAttributes();
        }
    }
};

SVGImage.prototype.setDefaultAttributes = function () {
    "use strict";

    this.element.setAttribute("y", "0px");
    this.element.setAttribute("x", "0px");
    this.element.setAttribute("version", "1.1");
    this.element.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.element.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.element.setAttribute("preserveAspectRatio", "xMidYMid meet");
    this.element.setAttribute("xml:space", "preserve");
    this.element.removeAttribute("width");
    this.element.removeAttribute("height");
};

SVGImage.prototype.hasHash = function () {
    "use strict";

    return this.image.getAttribute("src").indexOf("#") !== -1;
};

SVGImage.prototype.extractHash = function () {
    "use strict";

    return this.image.getAttribute("src").split("#");
};

SVGImage.prototype.injectSVG = function () {
    "use strict";

    this.cloneAttributes();

    this.image.parentNode.replaceChild(this.element, this.image);
};

if (typeof module !== "undefined") {
    module.exports = SVGInliner;
}
document.addEventListener('DOMContentLoaded', function () {

    // logic for words drading
    if (document.querySelector('.hello')) {

        setInterval(() => {

            document.querySelector('.hello').classList.toggle('hello--change');
        }, 4000);
    }

    // svg to inline
    if (document.querySelector('.svg')) {

        new SVGInliner(document.querySelectorAll(".svg"));
    }

    // rellax
    // if (document.querySelector('.rellax')) {

    //     let rellax = new Rellax('.rellax', {
    //         center: true,
    //     });

    // }

    // inviewport
    if (document.querySelector('.js-viewport')) {

        // function is in your port
        function isInViewport(selector, addClass, descBot, descTop, mobBot, mobTop) {

            let viewport = document.querySelectorAll(selector);

            function checkPort() {

                viewport.forEach((element, index) => {

                    // calculate distanse element from sides of browser
                    let positionTop = element.getBoundingClientRect().top,
                        positionBot = element.getBoundingClientRect().bottom;

                    // console.log(positionTop, positionBot)

                    if (window.innerWidth > 767) {

                        dispersion(descBot = 300, descTop = 400);
                    } else {

                        dispersion(mobBot = 200, mobTop = 200);
                    }

                    // function calc dispersion
                    function dispersion(bottom, top) {

                        if (bottom < positionBot && positionTop < top) {
                            element.classList.add(addClass);
                        } else {
                            element.classList.remove(addClass);
                        }
                    }
                });
            }

            document.addEventListener('scroll', checkPort);
        }

        // usage is in your port
        isInViewport('.js-viewport', 'about__row--in-view-port');
        // or
        // isInViewport('.js-viewport', 'about__row--in-view-port', 400, 300, 200, 200);
    }

    // slider portfolio imgs
    if (document.querySelector('.js-display__img')) {

        $('.js-display__img').slick({
            arrows: false,
            fade: true
        });
    }

    // slider portfolio content
    if (document.querySelector('.js-display__img')) {

        $('.js-display__img').slick();
    }
});