// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ol = factory();
    }
}(this, function() {
    var OPENLAYERS = {};
    var l, ba = ba || {},
        ca = this;

    function m(b) {
        return void 0 !== b
    }

    function u(b, c, d) {
        b = b.split(".");
        d = d || ca;
        b[0] in d || !d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());) !b.length && m(c) ? d[e] = c : d[e] ? d = d[e] : d = d[e] = {}
    }

    function da() {}

    function ea(b) {
        b.ja = function() {
            return b.Rd ? b.Rd : b.Rd = new b
        }
    }

    function ha(b) {
        var c = typeof b;
        if ("object" == c)
            if (b) {
                if (b instanceof Array) return "array";
                if (b instanceof Object) return c;
                var d = Object.prototype.toString.call(b);
                if ("[object Window]" == d) return "object";
                if ("[object Array]" == d || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == c && "undefined" == typeof b.call) return "object";
        return c
    }

    function ia(b) {
        return null === b
    }

    function ja(b) {
        return "array" == ha(b)
    }

    function ka(b) {
        var c = ha(b);
        return "array" == c || "object" == c && "number" == typeof b.length
    }

    function ma(b) {
        return "string" == typeof b
    }

    function na(b) {
        return "number" == typeof b
    }

    function oa(b) {
        return "function" == ha(b)
    }

    function pa(b) {
        var c = typeof b;
        return "object" == c && null != b || "function" == c
    }

    function v(b) {
        return b[qa] || (b[qa] = ++ra)
    }
    var qa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ra = 0;

    function sa(b, c, d) {
        return b.call.apply(b.bind, arguments)
    }

    function ta(b, c, d) {
        if (!b) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function() {
            return b.apply(c, arguments)
        }
    }

    function ua(b, c, d) {
        ua = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ta;
        return ua.apply(null, arguments)
    }

    function va(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    }
    var wa = Date.now || function() {
        return +new Date
    };

    function A(b, c) {
        function d() {}
        d.prototype = c.prototype;
        b.H = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.Wi = function(b, d, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return c.prototype[d].apply(b, h)
        }
    };
    var xa;
    var ya;
    var za = String.prototype.trim ? function(b) {
        return b.trim()
    } : function(b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Aa(b) {
        if (!Ba.test(b)) return b; - 1 != b.indexOf("&") && (b = b.replace(Ca, "&amp;")); - 1 != b.indexOf("<") && (b = b.replace(Da, "&lt;")); - 1 != b.indexOf(">") && (b = b.replace(Ea, "&gt;")); - 1 != b.indexOf('"') && (b = b.replace(Fa, "&quot;")); - 1 != b.indexOf("'") && (b = b.replace(Ga, "&#39;")); - 1 != b.indexOf("\x00") && (b = b.replace(Ha, "&#0;"));
        return b
    }
    var Ca = /&/g,
        Da = /</g,
        Ea = />/g,
        Fa = /"/g,
        Ga = /'/g,
        Ha = /\x00/g,
        Ba = /[\x00&<>"']/;

    function Ia(b) {
        b = m(void 0) ? b.toFixed(void 0) : String(b);
        var c = b.indexOf("."); - 1 == c && (c = b.length);
        c = Math.max(0, 2 - c);
        return Array(c + 1).join("0") + b
    }

    function Ka(b, c) {
        for (var d = 0, e = za(String(b)).split("."), f = za(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var k = e[h] || "",
                n = f[h] || "",
                p = RegExp("(\\d*)(\\D*)", "g"),
                q = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = p.exec(k) || ["", "", ""],
                    s = q.exec(n) || ["", "", ""];
                if (0 == r[0].length && 0 == s[0].length) break;
                d = La(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || La(0 == r[2].length, 0 == s[2].length) || La(r[2], s[2])
            } while (0 == d)
        }
        return d
    }

    function La(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    };
    var Ma = Array.prototype;

    function Na(b, c) {
        return Ma.indexOf.call(b, c, void 0)
    }

    function Oa(b, c, d) {
        Ma.forEach.call(b, c, d)
    }

    function Pa(b, c) {
        return Ma.filter.call(b, c, void 0)
    }

    function Ra(b, c, d) {
        return Ma.map.call(b, c, d)
    }

    function Sa(b) {
        var c;
        a: {
            c = Ta;
            for (var d = b.length, e = ma(b) ? b.split("") : b, f = 0; f < d; f++)
                if (f in e && c.call(void 0, e[f], f, b)) {
                    c = f;
                    break a
                }
            c = -1
        }
        return 0 > c ? null : ma(b) ? b.charAt(c) : b[c]
    }

    function Ua(b, c) {
        return 0 <= Na(b, c)
    }

    function Va(b, c) {
        var d = Na(b, c),
            e;
        (e = 0 <= d) && Ma.splice.call(b, d, 1);
        return e
    }

    function Wa(b) {
        return Ma.concat.apply(Ma, arguments)
    }

    function Xa(b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            return d
        }
        return []
    }

    function Ya(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (ka(e)) {
                var f = b.length || 0,
                    g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++) b[f + h] = e[h]
            } else b.push(e)
        }
    }

    function Za(b, c, d, e) {
        Ma.splice.apply(b, $a(arguments, 1))
    }

    function $a(b, c, d) {
        return 2 >= arguments.length ? Ma.slice.call(b, c) : Ma.slice.call(b, c, d)
    }

    function ab(b, c) {
        b.sort(c || bb)
    }

    function db(b, c) {
        if (!ka(b) || !ka(c) || b.length != c.length) return !1;
        for (var d = b.length, e = eb, f = 0; f < d; f++)
            if (!e(b[f], c[f])) return !1;
        return !0
    }

    function bb(b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    }

    function eb(b, c) {
        return b === c
    };
    var fb;
    a: {
        var gb = ca.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                fb = hb;
                break a
            }
        }
        fb = ""
    }

    function ib(b) {
        return -1 != fb.indexOf(b)
    };

    function jb(b, c, d) {
        for (var e in b) c.call(d, b[e], e, b)
    }

    function kb(b, c) {
        for (var d in b)
            if (c.call(void 0, b[d], d, b)) return !0;
        return !1
    }

    function lb(b) {
        var c = 0,
            d;
        for (d in b) c++;
        return c
    }

    function mb(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = b[e];
        return c
    }

    function nb(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = e;
        return c
    }

    function ob(b, c) {
        return c in b
    }

    function pb(b, c) {
        for (var d in b)
            if (b[d] == c) return !0;
        return !1
    }

    function qb(b, c) {
        for (var d in b)
            if (c.call(void 0, b[d], d, b)) return d
    }

    function rb(b) {
        for (var c in b) return !1;
        return !0
    }

    function sb(b) {
        for (var c in b) delete b[c]
    }

    function tb(b, c) {
        c in b && delete b[c]
    }

    function ub(b, c, d) {
        return c in b ? b[c] : d
    }

    function vb(b, c) {
        var d = [];
        return c in b ? b[c] : b[c] = d
    }

    function wb(b) {
        var c = {},
            d;
        for (d in b) c[d] = b[d];
        return c
    }
    var xb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function yb(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) b[d] = e[d];
            for (var g = 0; g < xb.length; g++) d = xb[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    }

    function zb(b) {
        var c = arguments.length;
        if (1 == c && ja(arguments[0])) return zb.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
        return d
    };
    var Ab = ib("Opera") || ib("OPR"),
        Bb = ib("Trident") || ib("MSIE"),
        Cb = ib("Gecko") && -1 == fb.toLowerCase().indexOf("webkit") && !(ib("Trident") || ib("MSIE")),
        Db = -1 != fb.toLowerCase().indexOf("webkit"),
        Eb = ib("Macintosh"),
        Fb = ib("Windows"),
        Gb = ib("Linux") || ib("CrOS");

    function Hb() {
        var b = ca.document;
        return b ? b.documentMode : void 0
    }
    var Ib = function() {
            var b = "",
                c;
            if (Ab && ca.opera) return b = ca.opera.version, oa(b) ? b() : b;
            Cb ? c = /rv\:([^\);]+)(\)|;)/ : Bb ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Db && (c = /WebKit\/(\S+)/);
            c && (b = (b = c.exec(fb)) ? b[1] : "");
            return Bb && (c = Hb(), c > parseFloat(b)) ? String(c) : b
        }(),
        Jb = {};

    function Kb(b) {
        return Jb[b] || (Jb[b] = 0 <= Ka(Ib, b))
    }
    var Lb = ca.document,
        Mb = Lb && Bb ? Hb() || ("CSS1Compat" == Lb.compatMode ? parseInt(Ib, 10) : 5) : void 0;
    var Nb = "https:" === ca.location.protocol,
        Ob = Bb && !Kb("9.0") && "" !== Ib;

    function Pb(b, c, d) {
        return Math.min(Math.max(b, c), d)
    }

    function Qb(b, c) {
        var d = b % c;
        return 0 > d * c ? d + c : d
    }

    function Rb(b, c, d) {
        return b + d * (c - b)
    }

    function Sb(b) {
        return b * Math.PI / 180
    };

    function Tb(b) {
        return function(c) {
            if (m(c)) return [Pb(c[0], b[0], b[2]), Pb(c[1], b[1], b[3])]
        }
    }

    function Ub(b) {
        return b
    };

    function Vb(b, c, d) {
        var e = b.length;
        if (b[0] <= c) return 0;
        if (!(c <= b[e - 1]))
            if (0 < d)
                for (d = 1; d < e; ++d) {
                    if (b[d] < c) return d - 1
                } else if (0 > d)
                    for (d = 1; d < e; ++d) {
                        if (b[d] <= c) return d
                    } else
                        for (d = 1; d < e; ++d) {
                            if (b[d] == c) return d;
                            if (b[d] < c) return b[d - 1] - c < c - b[d] ? d - 1 : d
                        }
                return e - 1
    };

    function Wb(b) {
        return function(c, d, e) {
            if (m(c)) return c = Vb(b, c, e), c = Pb(c + d, 0, b.length - 1), b[c]
        }
    }

    function Xb(b, c, d) {
        return function(e, f, g) {
            if (m(e)) return g = 0 < g ? 0 : 0 > g ? 1 : .5, e = Math.floor(Math.log(c / e) / Math.log(b) + g), f = Math.max(e + f, 0), m(d) && (f = Math.min(f, d)), c / Math.pow(b, f)
        }
    };

    function Yb(b) {
        if (m(b)) return 0
    }

    function Zb(b, c) {
        if (m(b)) return b + c
    }

    function $b(b) {
        var c = 2 * Math.PI / b;
        return function(b, e) {
            if (m(b)) return b = Math.floor((b + e) / c + .5) * c
        }
    }

    function ac() {
        var b = Sb(5);
        return function(c, d) {
            if (m(c)) return Math.abs(c + d) <= b ? 0 : c + d
        }
    };

    function bc(b, c, d) {
        this.center = b;
        this.resolution = c;
        this.rotation = d
    };
    var cc = !Bb || Bb && 9 <= Mb,
        dc = !Bb || Bb && 9 <= Mb,
        ec = Bb && !Kb("9");
    !Db || Kb("528");
    Cb && Kb("1.9b") || Bb && Kb("8") || Ab && Kb("9.5") || Db && Kb("528");
    Cb && !Kb("8") || Bb && Kb("9");

    function fc() {
        0 != gc && (hc[v(this)] = this);
        this.C = this.C;
        this.D = this.D
    }
    var gc = 0,
        hc = {};
    fc.prototype.C = !1;
    fc.prototype.Tc = function() {
        if (!this.C && (this.C = !0, this.B(), 0 != gc)) {
            var b = v(this);
            delete hc[b]
        }
    };

    function ic(b, c) {
        var d = va(jc, c);
        b.C ? d.call(void 0) : (b.D || (b.D = []), b.D.push(m(void 0) ? ua(d, void 0) : d))
    }
    fc.prototype.B = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function jc(b) {
        b && "function" == typeof b.Tc && b.Tc()
    };

    function kc(b, c) {
        this.type = b;
        this.b = this.target = c;
        this.i = !1;
        this.Be = !0
    }
    kc.prototype.lb = function() {
        this.i = !0
    };
    kc.prototype.preventDefault = function() {
        this.Be = !1
    };

    function lc(b) {
        b.lb()
    }

    function mc(b) {
        b.preventDefault()
    };
    var nc = Bb ? "focusout" : "DOMFocusOut";

    function oc(b) {
        oc[" "](b);
        return b
    }
    oc[" "] = da;

    function pc(b, c) {
        kc.call(this, b ? b.type : "");
        this.relatedTarget = this.b = this.target = null;
        this.k = this.e = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.C = this.d = this.c = this.g = !1;
        this.state = null;
        this.f = !1;
        this.a = null;
        b && qc(this, b, c)
    }
    A(pc, kc);
    var rc = [1, 4, 2];

    function qc(b, c, d) {
        b.a = c;
        var e = b.type = c.type;
        b.target = c.target || c.srcElement;
        b.b = d;
        if (d = c.relatedTarget) {
            if (Cb) {
                var f;
                a: {
                    try {
                        oc(d.nodeName);
                        f = !0;
                        break a
                    } catch (g) {}
                    f = !1
                }
                f || (d = null)
            }
        } else "mouseover" == e ? d = c.fromElement : "mouseout" == e && (d = c.toElement);
        b.relatedTarget = d;
        Object.defineProperties ? Object.defineProperties(b, {
            offsetX: {
                configurable: !0,
                enumerable: !0,
                get: b.Kd,
                set: b.ui
            },
            offsetY: {
                configurable: !0,
                enumerable: !0,
                get: b.Ld,
                set: b.vi
            }
        }) : (b.offsetX = b.Kd(), b.offsetY = b.Ld());
        b.clientX = void 0 !== c.clientX ? c.clientX :
            c.pageX;
        b.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
        b.screenX = c.screenX || 0;
        b.screenY = c.screenY || 0;
        b.button = c.button;
        b.e = c.keyCode || 0;
        b.k = c.charCode || ("keypress" == e ? c.keyCode : 0);
        b.g = c.ctrlKey;
        b.c = c.altKey;
        b.d = c.shiftKey;
        b.C = c.metaKey;
        b.f = Eb ? c.metaKey : c.ctrlKey;
        b.state = c.state;
        c.defaultPrevented && b.preventDefault()
    }

    function sc(b) {
        return (cc ? 0 == b.a.button : "click" == b.type ? !0 : !!(b.a.button & rc[0])) && !(Db && Eb && b.g)
    }
    l = pc.prototype;
    l.lb = function() {
        pc.H.lb.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    l.preventDefault = function() {
        pc.H.preventDefault.call(this);
        var b = this.a;
        if (b.preventDefault) b.preventDefault();
        else if (b.returnValue = !1, ec) try {
            if (b.ctrlKey || 112 <= b.keyCode && 123 >= b.keyCode) b.keyCode = -1
        } catch (c) {}
    };
    l.Rf = function() {
        return this.a
    };
    l.Kd = function() {
        return Db || void 0 !== this.a.offsetX ? this.a.offsetX : this.a.layerX
    };
    l.ui = function(b) {
        Object.defineProperties(this, {
            offsetX: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: b
            }
        })
    };
    l.Ld = function() {
        return Db || void 0 !== this.a.offsetY ? this.a.offsetY : this.a.layerY
    };
    l.vi = function(b) {
        Object.defineProperties(this, {
            offsetY: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: b
            }
        })
    };
    var tc = "closure_listenable_" + (1E6 * Math.random() | 0);

    function uc(b) {
        return !(!b || !b[tc])
    }
    var vc = 0;

    function wc(b, c, d, e, f) {
        this.Za = b;
        this.a = null;
        this.src = c;
        this.type = d;
        this.tb = !!e;
        this.kc = f;
        this.key = ++vc;
        this.sb = this.Yb = !1
    }

    function xc(b) {
        b.sb = !0;
        b.Za = null;
        b.a = null;
        b.src = null;
        b.kc = null
    };

    function yc(b) {
        this.src = b;
        this.a = {};
        this.c = 0
    }
    yc.prototype.add = function(b, c, d, e, f) {
        var g = b.toString();
        b = this.a[g];
        b || (b = this.a[g] = [], this.c++);
        var h = zc(b, c, e, f); - 1 < h ? (c = b[h], d || (c.Yb = !1)) : (c = new wc(c, this.src, g, !!e, f), c.Yb = d, b.push(c));
        return c
    };
    yc.prototype.remove = function(b, c, d, e) {
        b = b.toString();
        if (!(b in this.a)) return !1;
        var f = this.a[b];
        c = zc(f, c, d, e);
        return -1 < c ? (xc(f[c]), Ma.splice.call(f, c, 1), 0 == f.length && (delete this.a[b], this.c--), !0) : !1
    };

    function Ac(b, c) {
        var d = c.type;
        if (!(d in b.a)) return !1;
        var e = Va(b.a[d], c);
        e && (xc(c), 0 == b.a[d].length && (delete b.a[d], b.c--));
        return e
    }

    function Bc(b, c, d, e, f) {
        b = b.a[c.toString()];
        c = -1;
        b && (c = zc(b, d, e, f));
        return -1 < c ? b[c] : null
    }

    function Cc(b, c, d) {
        var e = m(c),
            f = e ? c.toString() : "",
            g = m(d);
        return kb(b.a, function(b) {
            for (var c = 0; c < b.length; ++c)
                if (!(e && b[c].type != f || g && b[c].tb != d)) return !0;
            return !1
        })
    }

    function zc(b, c, d, e) {
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (!g.sb && g.Za == c && g.tb == !!d && g.kc == e) return f
        }
        return -1
    };
    var Dc = "closure_lm_" + (1E6 * Math.random() | 0),
        Ec = {},
        Fc = 0;

    function C(b, c, d, e, f) {
        if (ja(c)) {
            for (var g = 0; g < c.length; g++) C(b, c[g], d, e, f);
            return null
        }
        d = Gc(d);
        return uc(b) ? b.Ya(c, d, e, f) : Hc(b, c, d, !1, e, f)
    }

    function Hc(b, c, d, e, f, g) {
        if (!c) throw Error("Invalid event type");
        var h = !!f,
            k = Ic(b);
        k || (b[Dc] = k = new yc(b));
        d = k.add(c, d, e, f, g);
        if (d.a) return d;
        e = Jc();
        d.a = e;
        e.src = b;
        e.Za = d;
        b.addEventListener ? b.addEventListener(c.toString(), e, h) : b.attachEvent(Kc(c.toString()), e);
        Fc++;
        return d
    }

    function Jc() {
        var b = Lc,
            c = dc ? function(d) {
                return b.call(c.src, c.Za, d)
            } : function(d) {
                d = b.call(c.src, c.Za, d);
                if (!d) return d
            };
        return c
    }

    function Nc(b, c, d, e, f) {
        if (ja(c)) {
            for (var g = 0; g < c.length; g++) Nc(b, c[g], d, e, f);
            return null
        }
        d = Gc(d);
        return uc(b) ? b.ua.add(String(c), d, !0, e, f) : Hc(b, c, d, !0, e, f)
    }

    function Oc(b, c, d, e, f) {
        if (ja(c))
            for (var g = 0; g < c.length; g++) Oc(b, c[g], d, e, f);
        else d = Gc(d), uc(b) ? b.od(c, d, e, f) : b && (b = Ic(b)) && (c = Bc(b, c, d, !!e, f)) && Pc(c)
    }

    function Pc(b) {
        if (na(b) || !b || b.sb) return !1;
        var c = b.src;
        if (uc(c)) return Ac(c.ua, b);
        var d = b.type,
            e = b.a;
        c.removeEventListener ? c.removeEventListener(d, e, b.tb) : c.detachEvent && c.detachEvent(Kc(d), e);
        Fc--;
        (d = Ic(c)) ? (Ac(d, b), 0 == d.c && (d.src = null, c[Dc] = null)) : xc(b);
        return !0
    }

    function Kc(b) {
        return b in Ec ? Ec[b] : Ec[b] = "on" + b
    }

    function Qc(b, c, d, e) {
        var f = !0;
        if (b = Ic(b))
            if (c = b.a[c.toString()])
                for (c = c.concat(), b = 0; b < c.length; b++) {
                    var g = c[b];
                    g && g.tb == d && !g.sb && (g = Rc(g, e), f = f && !1 !== g)
                }
            return f
    }

    function Rc(b, c) {
        var d = b.Za,
            e = b.kc || b.src;
        b.Yb && Pc(b);
        return d.call(e, c)
    }

    function Lc(b, c) {
        if (b.sb) return !0;
        if (!dc) {
            var d;
            if (!(d = c)) a: {
                d = ["window", "event"];
                for (var e = ca, f; f = d.shift();)
                    if (null != e[f]) e = e[f];
                    else {
                        d = null;
                        break a
                    }
                d = e
            }
            f = d;
            d = new pc(f, this);
            e = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var g = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (h) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (g = d.b; g; g = g.parentNode) f.push(g);
                for (var g = b.type, k = f.length - 1; !d.i && 0 <= k; k--) {
                    d.b = f[k];
                    var n = Qc(f[k], g, !0, d),
                        e = e && n
                }
                for (k = 0; !d.i && k < f.length; k++) d.b = f[k],
                n =
                Qc(f[k], g, !1, d),
                e = e && n
            }
            return e
        }
        return Rc(b, new pc(c, this))
    }

    function Ic(b) {
        b = b[Dc];
        return b instanceof yc ? b : null
    }
    var Sc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Gc(b) {
        if (oa(b)) return b;
        b[Sc] || (b[Sc] = function(c) {
            return b.handleEvent(c)
        });
        return b[Sc]
    };

    function Tc(b) {
        return function() {
            return b
        }
    }
    var Uc = Tc(!1),
        Vc = Tc(!0);

    function Wc(b) {
        return b
    }

    function Xc(b) {
        var c;
        c = c || 0;
        return function() {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    }

    function Yc(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b, f = 0; f < d; f++) b = c[f].apply(this, arguments);
            return b
        }
    }

    function Zc(b) {
        var c = arguments,
            d = c.length;
        return function() {
            for (var b = 0; b < d; b++)
                if (!c[b].apply(this, arguments)) return !1;
            return !0
        }
    };

    function $c() {
        fc.call(this);
        this.ua = new yc(this);
        this.lf = this;
        this.ia = null
    }
    A($c, fc);
    $c.prototype[tc] = !0;
    l = $c.prototype;
    l.addEventListener = function(b, c, d, e) {
        C(this, b, c, d, e)
    };
    l.removeEventListener = function(b, c, d, e) {
        Oc(this, b, c, d, e)
    };
    l.dispatchEvent = function(b) {
        var c, d = this.ia;
        if (d)
            for (c = []; d; d = d.ia) c.push(d);
        var d = this.lf,
            e = b.type || b;
        if (ma(b)) b = new kc(b, d);
        else if (b instanceof kc) b.target = b.target || d;
        else {
            var f = b;
            b = new kc(e, d);
            yb(b, f)
        }
        var f = !0,
            g;
        if (c)
            for (var h = c.length - 1; !b.i && 0 <= h; h--) g = b.b = c[h], f = ad(g, e, !0, b) && f;
        b.i || (g = b.b = d, f = ad(g, e, !0, b) && f, b.i || (f = ad(g, e, !1, b) && f));
        if (c)
            for (h = 0; !b.i && h < c.length; h++) g = b.b = c[h], f = ad(g, e, !1, b) && f;
        return f
    };
    l.B = function() {
        $c.H.B.call(this);
        if (this.ua) {
            var b = this.ua,
                c = 0,
                d;
            for (d in b.a) {
                for (var e = b.a[d], f = 0; f < e.length; f++) ++c, xc(e[f]);
                delete b.a[d];
                b.c--
            }
        }
        this.ia = null
    };
    l.Ya = function(b, c, d, e) {
        return this.ua.add(String(b), c, !1, d, e)
    };
    l.od = function(b, c, d, e) {
        return this.ua.remove(String(b), c, d, e)
    };

    function ad(b, c, d, e) {
        c = b.ua.a[String(c)];
        if (!c) return !0;
        c = c.concat();
        for (var f = !0, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h && !h.sb && h.tb == d) {
                var k = h.Za,
                    n = h.kc || h.src;
                h.Yb && Ac(b.ua, h);
                f = !1 !== k.call(n, e) && f
            }
        }
        return f && 0 != e.Be
    }

    function bd(b, c, d) {
        return Cc(b.ua, m(c) ? String(c) : void 0, d)
    };

    function cd() {
        $c.call(this);
        this.c = 0
    }
    A(cd, $c);
    l = cd.prototype;
    l.r = function() {
        ++this.c;
        this.dispatchEvent("change")
    };
    l.da = function() {
        return this.c
    };
    l.N = function(b, c, d) {
        return C(this, b, c, !1, d)
    };
    l.fa = function(b, c, d) {
        return Nc(this, b, c, !1, d)
    };
    l.ha = function(b, c, d) {
        Oc(this, b, c, !1, d)
    };
    l.Z = function(b) {
        Pc(b)
    };

    function dd(b, c, d) {
        kc.call(this, b);
        this.key = c;
        this.oldValue = d
    }
    A(dd, kc);

    function ed(b, c, d, e) {
        this.source = b;
        this.target = c;
        this.b = d;
        this.c = e;
        this.d = this.a = Wc
    }
    ed.prototype.transform = function(b, c) {
        var d = fd(this.source, this.b);
        this.a = b;
        this.d = c;
        gd(this.source, this.b, d)
    };

    function hd(b) {
        cd.call(this);
        v(this);
        this.i = {};
        this.q = {};
        this.T = {};
        m(b) && this.U(b)
    }
    A(hd, cd);
    var id = {},
        jd = {},
        kd = {};

    function ld(b) {
        return id.hasOwnProperty(b) ? id[b] : id[b] = "change:" + b
    }

    function fd(b, c) {
        var d = jd.hasOwnProperty(c) ? jd[c] : jd[c] = "get" + (String(c.charAt(0)).toUpperCase() + String(c.substr(1)).toLowerCase()),
            d = b[d];
        return m(d) ? d.call(b) : b.get(c)
    }
    l = hd.prototype;
    l.zd = function(b, c, d) {
        d = d || b;
        this.Ec(b);
        var e = ld(d);
        this.T[b] = C(c, e, function(c) {
            gd(this, b, c.oldValue)
        }, void 0, this);
        c = new ed(this, c, b, d);
        this.q[b] = c;
        gd(this, b, this.i[b]);
        return c
    };
    l.get = function(b) {
        var c, d = this.q;
        d.hasOwnProperty(b) ? (b = d[b], c = fd(b.target, b.c), c = b.d(c)) : this.i.hasOwnProperty(b) && (c = this.i[b]);
        return c
    };
    l.ca = function() {
        var b = this.q,
            c;
        if (rb(this.i)) {
            if (rb(b)) return [];
            c = b
        } else if (rb(b)) c = this.i;
        else {
            c = {};
            for (var d in this.i) c[d] = !0;
            for (d in b) c[d] = !0
        }
        return nb(c)
    };
    l.Ea = function() {
        var b = {},
            c;
        for (c in this.i) b[c] = this.i[c];
        for (c in this.q) b[c] = this.get(c);
        return b
    };

    function gd(b, c, d) {
        var e;
        e = ld(c);
        b.dispatchEvent(new dd(e, c, d));
        b.dispatchEvent(new dd("propertychange", c, d))
    }
    l.set = function(b, c) {
        var d = this.q;
        if (d.hasOwnProperty(b)) {
            var e = d[b];
            c = e.a(c);
            var d = e.target,
                e = e.c,
                f = c,
                g = kd.hasOwnProperty(e) ? kd[e] : kd[e] = "set" + (String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()),
                g = d[g];
            m(g) ? g.call(d, f) : d.set(e, f)
        } else d = this.i[b], this.i[b] = c, gd(this, b, d)
    };
    l.U = function(b) {
        for (var c in b) this.set(c, b[c])
    };
    l.Ec = function(b) {
        var c = this.T,
            d = c[b];
        d && (delete c[b], Pc(d), c = this.get(b), delete this.q[b], this.i[b] = c)
    };
    l.Le = function() {
        for (var b in this.T) this.Ec(b)
    };

    function md(b, c) {
        b[0] += c[0];
        b[1] += c[1]
    }

    function nd(b, c) {
        var d = Qb(b + 180, 360) - 180,
            e = Math.abs(Math.round(3600 * d));
        return Math.floor(e / 3600) + "\u00b0 " + Math.floor(e / 60 % 60) + "\u2032 " + Math.floor(e % 60) + "\u2033 " + c.charAt(0 > d ? 1 : 0)
    }

    function od(b, c) {
        var d = Math.cos(c),
            e = Math.sin(c),
            f = b[1] * d + b[0] * e;
        b[0] = b[0] * d - b[1] * e;
        b[1] = f
    };

    function pd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
    }
    pd.prototype.a = 4;
    pd.prototype.set = function(b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++) this[c + d] = b[d]
    };
    pd.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (pd.BYTES_PER_ELEMENT = 4, pd.prototype.BYTES_PER_ELEMENT = pd.prototype.a, pd.prototype.set = pd.prototype.set, pd.prototype.toString = pd.prototype.toString, u("Float32Array", pd, void 0));

    function qd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
    }
    qd.prototype.a = 8;
    qd.prototype.set = function(b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++) this[c + d] = b[d]
    };
    qd.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            qd.BYTES_PER_ELEMENT = 8
        } catch (rd) {}
        qd.prototype.BYTES_PER_ELEMENT = qd.prototype.a;
        qd.prototype.set = qd.prototype.set;
        qd.prototype.toString = qd.prototype.toString;
        u("Float64Array", qd, void 0)
    };

    function sd(b, c, d, e, f) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f
    };

    function td() {
        var b = Array(16);
        ud(b, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return b
    }

    function vd() {
        var b = Array(16);
        ud(b, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return b
    }

    function ud(b, c, d, e, f, g, h, k, n, p, q, r, s, t, x, y, z) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f;
        b[4] = g;
        b[5] = h;
        b[6] = k;
        b[7] = n;
        b[8] = p;
        b[9] = q;
        b[10] = r;
        b[11] = s;
        b[12] = t;
        b[13] = x;
        b[14] = y;
        b[15] = z
    }

    function wd(b, c) {
        b[0] = c[0];
        b[1] = c[1];
        b[2] = c[2];
        b[3] = c[3];
        b[4] = c[4];
        b[5] = c[5];
        b[6] = c[6];
        b[7] = c[7];
        b[8] = c[8];
        b[9] = c[9];
        b[10] = c[10];
        b[11] = c[11];
        b[12] = c[12];
        b[13] = c[13];
        b[14] = c[14];
        b[15] = c[15]
    }

    function xd(b) {
        b[0] = 1;
        b[1] = 0;
        b[2] = 0;
        b[3] = 0;
        b[4] = 0;
        b[5] = 1;
        b[6] = 0;
        b[7] = 0;
        b[8] = 0;
        b[9] = 0;
        b[10] = 1;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1
    }

    function yd(b, c, d) {
        var e = b[0],
            f = b[1],
            g = b[2],
            h = b[3],
            k = b[4],
            n = b[5],
            p = b[6],
            q = b[7],
            r = b[8],
            s = b[9],
            t = b[10],
            x = b[11],
            y = b[12],
            z = b[13],
            B = b[14];
        b = b[15];
        var w = c[0],
            K = c[1],
            H = c[2],
            D = c[3],
            J = c[4],
            T = c[5],
            $ = c[6],
            L = c[7],
            aa = c[8],
            la = c[9],
            ga = c[10],
            fa = c[11],
            Qa = c[12],
            cb = c[13],
            Ja = c[14];
        c = c[15];
        d[0] = e * w + k * K + r * H + y * D;
        d[1] = f * w + n * K + s * H + z * D;
        d[2] = g * w + p * K + t * H + B * D;
        d[3] = h * w + q * K + x * H + b * D;
        d[4] = e * J + k * T + r * $ + y * L;
        d[5] = f * J + n * T + s * $ + z * L;
        d[6] = g * J + p * T + t * $ + B * L;
        d[7] = h * J + q * T + x * $ + b * L;
        d[8] = e * aa + k * la + r * ga + y * fa;
        d[9] = f * aa + n * la + s * ga + z * fa;
        d[10] = g * aa + p *
            la + t * ga + B * fa;
        d[11] = h * aa + q * la + x * ga + b * fa;
        d[12] = e * Qa + k * cb + r * Ja + y * c;
        d[13] = f * Qa + n * cb + s * Ja + z * c;
        d[14] = g * Qa + p * cb + t * Ja + B * c;
        d[15] = h * Qa + q * cb + x * Ja + b * c
    }

    function zd(b, c, d) {
        var e = b[1] * c + b[5] * d + 0 * b[9] + b[13],
            f = b[2] * c + b[6] * d + 0 * b[10] + b[14],
            g = b[3] * c + b[7] * d + 0 * b[11] + b[15];
        b[12] = b[0] * c + b[4] * d + 0 * b[8] + b[12];
        b[13] = e;
        b[14] = f;
        b[15] = g
    }

    function Ad(b, c, d) {
        ud(b, b[0] * c, b[1] * c, b[2] * c, b[3] * c, b[4] * d, b[5] * d, b[6] * d, b[7] * d, 1 * b[8], 1 * b[9], 1 * b[10], 1 * b[11], b[12], b[13], b[14], b[15])
    }

    function Bd(b, c) {
        var d = b[0],
            e = b[1],
            f = b[2],
            g = b[3],
            h = b[4],
            k = b[5],
            n = b[6],
            p = b[7],
            q = Math.cos(c),
            r = Math.sin(c);
        b[0] = d * q + h * r;
        b[1] = e * q + k * r;
        b[2] = f * q + n * r;
        b[3] = g * q + p * r;
        b[4] = d * -r + h * q;
        b[5] = e * -r + k * q;
        b[6] = f * -r + n * q;
        b[7] = g * -r + p * q
    }
    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);

    function Cd(b, c) {
        var d = Math.min.apply(null, b),
            e = Math.min.apply(null, c),
            f = Math.max.apply(null, b),
            g = Math.max.apply(null, c);
        return Dd(d, e, f, g, void 0)
    }

    function Ed(b, c, d) {
        return m(d) ? (d[0] = b[0] - c, d[1] = b[1] - c, d[2] = b[2] + c, d[3] = b[3] + c, d) : [b[0] - c, b[1] - c, b[2] + c, b[3] + c]
    }

    function Fd(b, c) {
        return m(c) ? (c[0] = b[0], c[1] = b[1], c[2] = b[2], c[3] = b[3], c) : b.slice()
    }

    function Gd(b, c, d) {
        c = c < b[0] ? b[0] - c : b[2] < c ? c - b[2] : 0;
        b = d < b[1] ? b[1] - d : b[3] < d ? d - b[3] : 0;
        return c * c + b * b
    }

    function Hd(b, c) {
        return b[0] <= c[0] && c[2] <= b[2] && b[1] <= c[1] && c[3] <= b[3]
    }

    function Id(b, c, d) {
        return b[0] <= c && c <= b[2] && b[1] <= d && d <= b[3]
    }

    function Jd(b, c) {
        var d = b[1],
            e = b[2],
            f = b[3],
            g = c[0],
            h = c[1],
            k = 0;
        g < b[0] ? k = k | 16 : g > e && (k = k | 4);
        h < d ? k |= 8 : h > f && (k |= 2);
        0 === k && (k = 1);
        return k
    }

    function Kd() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Dd(b, c, d, e, f) {
        return m(f) ? (f[0] = b, f[1] = c, f[2] = d, f[3] = e, f) : [b, c, d, e]
    }

    function Ld(b, c) {
        var d = b[0],
            e = b[1];
        return Dd(d, e, d, e, c)
    }

    function Md(b, c) {
        return b[0] == c[0] && b[2] == c[2] && b[1] == c[1] && b[3] == c[3]
    }

    function Nd(b, c) {
        c[0] < b[0] && (b[0] = c[0]);
        c[0] > b[2] && (b[2] = c[0]);
        c[1] < b[1] && (b[1] = c[1]);
        c[1] > b[3] && (b[3] = c[1])
    }

    function Od(b, c, d, e, f) {
        for (; d < e; d += f) {
            var g = b,
                h = c[d],
                k = c[d + 1];
            g[0] = Math.min(g[0], h);
            g[1] = Math.min(g[1], k);
            g[2] = Math.max(g[2], h);
            g[3] = Math.max(g[3], k)
        }
        return b
    }

    function Pd(b, c) {
        var d;
        return (d = c.call(void 0, [b[0], b[1]])) || (d = c.call(void 0, [b[2], b[1]])) || (d = c.call(void 0, [b[2], b[3]])) ? d : (d = c.call(void 0, Qd(b))) ? d : !1
    }

    function Rd(b) {
        return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]
    }

    function Sd(b, c) {
        var d;
        "bottom-left" === c ? d = [b[0], b[1]] : "bottom-right" === c ? d = [b[2], b[1]] : "top-left" === c ? d = Qd(b) : "top-right" === c && (d = [b[2], b[3]]);
        return d
    }

    function Td(b, c, d, e) {
        var f = c * e[0] / 2;
        e = c * e[1] / 2;
        c = Math.cos(d);
        d = Math.sin(d);
        f = [-f, -f, f, f];
        e = [-e, e, -e, e];
        var g, h, k;
        for (g = 0; 4 > g; ++g) h = f[g], k = e[g], f[g] = b[0] + h * c - k * d, e[g] = b[1] + h * d + k * c;
        return Cd(f, e)
    }

    function Ud(b) {
        return b[3] - b[1]
    }

    function Vd(b, c) {
        var d = m(void 0) ? void 0 : Kd();
        Wd(b, c) && (d[0] = b[0] > c[0] ? b[0] : c[0], d[1] = b[1] > c[1] ? b[1] : c[1], d[2] = b[2] < c[2] ? b[2] : c[2], d[3] = b[3] < c[3] ? b[3] : c[3]);
        return d
    }

    function Qd(b) {
        return [b[0], b[3]]
    }

    function Wd(b, c) {
        return b[0] <= c[2] && b[2] >= c[0] && b[1] <= c[3] && b[3] >= c[1]
    }

    function Xd(b) {
        return b[2] < b[0] || b[3] < b[1]
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
    */
    function Yd(b) {
        this.radius = b
    }

    function Zd(b, c) {
        var d = Sb(b[1]),
            e = Sb(c[1]),
            f = (e - d) / 2,
            g = Sb(c[0] - b[0]) / 2,
            d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
        return 2 * ae.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    }
    Yd.prototype.offset = function(b, c, d) {
        var e = Sb(b[1]);
        c /= this.radius;
        var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
        return [180 * (Sb(b[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI]
    };
    var ae = new Yd(6370997);
    var be = {};
    be.degrees = 2 * Math.PI * ae.radius / 360;
    be.ft = .3048;
    be.m = 1;
    be["us-ft"] = 1200 / 3937;

    function ce(b) {
        this.a = b.code;
        this.c = b.units;
        this.b = m(b.extent) ? b.extent : null;
        this.g = m(b.worldExtent) ? b.worldExtent : null;
        this.d = m(b.axisOrientation) ? b.axisOrientation : "enu";
        this.e = m(b.global) ? b.global : !1;
        this.f = m(b.getPointResolution) ? b.getPointResolution : this.bg;
        this.i = null;
        if ("function" == typeof proj4) {
            var c = b.code,
                d = proj4.defs(c);
            if (m(d)) {
                m(d.axis) && !m(b.axisOrientation) && (this.d = d.axis);
                m(b.units) || (b = d.units, !m(b) && m(d.to_meter) && (b = d.to_meter.toString(), be[b] = d.to_meter), this.c = b);
                b = de;
                var e,
                    f;
                for (e in b) f = proj4.defs(e), m(f) && (b = ee(e), f === d ? fe([b, this]) : (f = proj4(e, c), ge(b, this, f.forward, f.inverse)))
            }
        }
    }
    l = ce.prototype;
    l.Sf = function() {
        return this.a
    };
    l.wh = function() {
        return this.b
    };
    l.xh = function() {
        return this.c
    };
    l.Yc = function() {
        return be[this.c]
    };
    l.gg = function() {
        return this.g
    };

    function he(b) {
        return b.d
    }
    l.yh = function() {
        return this.e
    };
    l.si = function(b) {
        this.e = b
    };
    l.zh = function(b) {
        this.b = b
    };
    l.wi = function(b) {
        this.g = b
    };
    l.ri = function(b) {
        this.f = b
    };
    l.bg = function(b, c) {
        if ("degrees" == this.c) return b;
        var d = ie(this, ee("EPSG:4326")),
            e = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2],
            e = d(e, e, 2),
            d = (Zd(e.slice(0, 2), e.slice(2, 4)) + Zd(e.slice(4, 6), e.slice(6, 8))) / 2,
            e = this.Yc();
        m(e) && (d /= e);
        return d
    };
    l.getPointResolution = function(b, c) {
        return this.f(b, c)
    };
    var de = {},
        je = {};

    function fe(b) {
        ke(b);
        Oa(b, function(c) {
            Oa(b, function(b) {
                c !== b && le(c, b, me)
            })
        })
    }

    function ne() {
        var b = oe,
            c = pe,
            d = qe;
        Oa(re, function(e) {
            Oa(b, function(b) {
                le(e, b, c);
                le(b, e, d)
            })
        })
    }

    function se(b) {
        de[b.a] = b;
        le(b, b, me)
    }

    function ke(b) {
        var c = [];
        Oa(b, function(b) {
            c.push(se(b))
        })
    }

    function te(b) {
        return null != b ? ma(b) ? ee(b) : b : ee("EPSG:3857")
    }

    function le(b, c, d) {
        b = b.a;
        c = c.a;
        b in je || (je[b] = {});
        je[b][c] = d
    }

    function ge(b, c, d, e) {
        b = ee(b);
        c = ee(c);
        le(b, c, ue(d));
        le(c, b, ue(e))
    }

    function ue(b) {
        return function(c, d, e) {
            var f = c.length;
            e = m(e) ? e : 2;
            d = m(d) ? d : Array(f);
            var g, h;
            for (h = 0; h < f; h += e)
                for (g = b([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g) d[h + g] = c[h + g];
            return d
        }
    }

    function ee(b) {
        var c;
        b instanceof ce ? c = b : ma(b) ? (c = de[b], !m(c) && "function" == typeof proj4 && m(proj4.defs(b)) && (c = new ce({
            code: b
        }), se(c))) : c = null;
        return c
    }

    function ve(b, c) {
        var d = ee(b),
            e = ee(c);
        return ie(d, e)
    }

    function ie(b, c) {
        var d = b.a,
            e = c.a,
            f;
        d in je && e in je[d] && (f = je[d][e]);
        m(f) || (f = we);
        return f
    }

    function we(b, c) {
        if (m(c) && b !== c) {
            for (var d = 0, e = b.length; d < e; ++d) c[d] = b[d];
            b = c
        }
        return b
    }

    function me(b, c) {
        var d;
        if (m(c)) {
            d = 0;
            for (var e = b.length; d < e; ++d) c[d] = b[d];
            d = c
        } else d = b.slice();
        return d
    }

    function xe(b, c, d) {
        c = ve(c, d);
        b = [b[0], b[1], b[0], b[3], b[2], b[1], b[2], b[3]];
        c(b, b, 2);
        return Cd([b[0], b[2], b[4], b[6]], [b[1], b[3], b[5], b[7]])
    };

    function ye(b) {
        hd.call(this);
        b = m(b) ? b : {};
        this.p = [0, 0];
        var c = {};
        c.center = m(b.center) ? b.center : null;
        this.s = te(b.projection);
        var d, e, f, g = m(b.minZoom) ? b.minZoom : 0;
        d = m(b.maxZoom) ? b.maxZoom : 28;
        var h = m(b.zoomFactor) ? b.zoomFactor : 2;
        if (m(b.resolutions)) d = b.resolutions, e = d[0], f = d[d.length - 1], d = Wb(d);
        else {
            e = te(b.projection);
            f = e.b;
            var k = (null === f ? 360 * be.degrees / be[e.c] : Math.max(f[2] - f[0], Ud(f))) / 256 / Math.pow(2, 0),
                n = k / Math.pow(2, 28);
            e = b.maxResolution;
            m(e) ? g = 0 : e = k / Math.pow(h, g);
            f = b.minResolution;
            m(f) || (f = m(b.maxZoom) ?
                m(b.maxResolution) ? e / Math.pow(h, d) : k / Math.pow(h, d) : n);
            d = g + Math.floor(Math.log(e / f) / Math.log(h));
            f = e / Math.pow(h, d - g);
            d = Xb(h, e, d - g)
        }
        this.k = e;
        this.n = f;
        this.o = g;
        g = m(b.extent) ? Tb(b.extent) : Ub;
        (m(b.enableRotation) ? b.enableRotation : 1) ? (e = b.constrainRotation, e = m(e) && !0 !== e ? !1 === e ? Zb : na(e) ? $b(e) : Zb : ac()) : e = Yb;
        this.g = new bc(g, d, e);
        m(b.resolution) ? c.resolution = b.resolution : m(b.zoom) && (c.resolution = this.constrainResolution(this.k, b.zoom - this.o));
        c.rotation = m(b.rotation) ? b.rotation : 0;
        this.U(c)
    }
    A(ye, hd);
    ye.prototype.constrainResolution = function(b, c, d) {
        return this.g.resolution(b, c || 0, d || 0)
    };
    ye.prototype.constrainRotation = function(b, c) {
        return this.g.rotation(b, c || 0)
    };
    ye.prototype.a = function() {
        return this.get("center")
    };
    ye.prototype.getCenter = ye.prototype.a;
    ye.prototype.t = function(b) {
        var c = this.a(),
            d = this.b();
        return [c[0] - d * b[0] / 2, c[1] - d * b[1] / 2, c[0] + d * b[0] / 2, c[1] + d * b[1] / 2]
    };
    ye.prototype.J = function() {
        return this.s
    };
    ye.prototype.b = function() {
        return this.get("resolution")
    };
    ye.prototype.getResolution = ye.prototype.b;

    function ze(b) {
        var c = b.k,
            d = Math.log(c / b.n) / Math.log(2);
        return function(b) {
            return c / Math.pow(2, b * d)
        }
    }
    ye.prototype.e = function() {
        return this.get("rotation")
    };
    ye.prototype.getRotation = ye.prototype.e;

    function Ae(b) {
        var c = b.k,
            d = Math.log(c / b.n) / Math.log(2);
        return function(b) {
            return Math.log(c / b) / Math.log(2) / d
        }
    }

    function Be(b) {
        var c = b.a(),
            d = b.s,
            e = b.b();
        b = b.e();
        return {
            center: c.slice(),
            projection: m(d) ? d : null,
            resolution: e,
            rotation: b
        }
    }
    ye.prototype.v = function() {
        var b, c = this.b();
        if (m(c)) {
            var d, e = 0;
            do {
                d = this.constrainResolution(this.k, e);
                if (d == c) {
                    b = e;
                    break
                }++e
            } while (d > this.n)
        }
        return m(b) ? this.o + b : b
    };
    ye.prototype.u = function(b, c) {
        if (!Xd(b)) {
            this.d(Rd(b));
            var d = Math.max((b[2] - b[0]) / c[0], Ud(b) / c[1]),
                e = this.constrainResolution(d, 0, 0);
            e < d && (e = this.constrainResolution(e, -1, 0));
            this.f(e)
        }
    };
    ye.prototype.rotate = function(b, c) {
        if (m(c)) {
            var d, e = this.a();
            m(e) && (d = [e[0] - c[0], e[1] - c[1]], od(d, b - this.e()), md(d, c));
            this.d(d)
        }
        this.l(b)
    };
    ye.prototype.d = function(b) {
        this.set("center", b)
    };
    ye.prototype.setCenter = ye.prototype.d;

    function Ce(b, c) {
        b.p[1] += c
    }
    ye.prototype.f = function(b) {
        this.set("resolution", b)
    };
    ye.prototype.setResolution = ye.prototype.f;
    ye.prototype.l = function(b) {
        this.set("rotation", b)
    };
    ye.prototype.setRotation = ye.prototype.l;
    ye.prototype.K = function(b) {
        b = this.constrainResolution(this.k, b - this.o, 0);
        this.f(b)
    };

    function De(b) {
        return 1 - Math.pow(1 - b, 3)
    };

    function Ee(b) {
        return 3 * b * b - 2 * b * b * b
    }

    function Fe(b) {
        return b
    };

    function Ge(b) {
        var c = b.source,
            d = m(b.start) ? b.start : wa(),
            e = c[0],
            f = c[1],
            g = m(b.duration) ? b.duration : 1E3,
            h = m(b.easing) ? b.easing : Ee;
        return function(b, c) {
            if (c.time < d) return c.animate = !0, c.viewHints[0] += 1, !0;
            if (c.time < d + g) {
                var p = 1 - h((c.time - d) / g),
                    q = e - c.viewState.center[0],
                    r = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += p * q;
                c.viewState.center[1] += p * r;
                c.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function He(b) {
        var c = m(b.rotation) ? b.rotation : 0,
            d = m(b.start) ? b.start : wa(),
            e = m(b.duration) ? b.duration : 1E3,
            f = m(b.easing) ? b.easing : Ee,
            g = m(b.anchor) ? b.anchor : null;
        return function(b, k) {
            if (k.time < d) return k.animate = !0, k.viewHints[0] += 1, !0;
            if (k.time < d + e) {
                var n = 1 - f((k.time - d) / e),
                    n = (c - k.viewState.rotation) * n;
                k.animate = !0;
                k.viewState.rotation += n;
                if (null !== g) {
                    var p = k.viewState.center;
                    p[0] -= g[0];
                    p[1] -= g[1];
                    od(p, n);
                    md(p, g)
                }
                k.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function Ie(b) {
        var c = b.resolution,
            d = m(b.start) ? b.start : wa(),
            e = m(b.duration) ? b.duration : 1E3,
            f = m(b.easing) ? b.easing : Ee;
        return function(b, h) {
            if (h.time < d) return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = 1 - f((h.time - d) / e),
                    n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    };

    function Je(b, c, d, e) {
        return m(e) ? (e[0] = b, e[1] = c, e[2] = d, e) : [b, c, d]
    }

    function Ke(b, c, d) {
        return b + "/" + c + "/" + d
    }

    function Le(b) {
        return Ke(b[0], b[1], b[2])
    };

    function Me(b, c, d, e) {
        this.a = b;
        this.d = c;
        this.b = d;
        this.c = e
    }

    function Ne(b, c, d, e, f) {
        return m(f) ? (f.a = b, f.d = c, f.b = d, f.c = e, f) : new Me(b, c, d, e)
    }
    Me.prototype.contains = function(b) {
        return Oe(this, b[1], b[2])
    };

    function Oe(b, c, d) {
        return b.a <= c && c <= b.d && b.b <= d && d <= b.c
    }

    function Pe(b, c) {
        return b.a == c.a && b.b == c.b && b.d == c.d && b.c == c.c
    }

    function Qe(b) {
        return b.d - b.a + 1
    }

    function Re(b, c) {
        return b.a <= c.d && b.d >= c.a && b.b <= c.c && b.c >= c.b
    };

    function Se(b) {
        this.c = b.html;
        this.a = m(b.tileRanges) ? b.tileRanges : null
    };
    var Te = !Bb || Bb && 9 <= Mb;
    !Cb && !Bb || Bb && Bb && 9 <= Mb || Cb && Kb("1.9.1");
    Bb && Kb("9");
    zb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    zb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    zb("embed", "iframe", "link", "object", "script", "style", "template");

    function Ue(b, c) {
        this.x = m(b) ? b : 0;
        this.y = m(c) ? c : 0
    }
    l = Ue.prototype;
    l.clone = function() {
        return new Ue(this.x, this.y)
    };
    l.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function(b, c) {
        var d = na(c) ? c : b;
        this.x *= b;
        this.y *= d;
        return this
    };

    function Ve(b, c) {
        this.width = b;
        this.height = c
    }
    l = Ve.prototype;
    l.clone = function() {
        return new Ve(this.width, this.height)
    };
    l.R = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(b, c) {
        var d = na(c) ? c : b;
        this.width *= b;
        this.height *= d;
        return this
    };

    function We(b) {
        return b ? new Xe(Ye(b)) : ya || (ya = new Xe)
    }

    function Ze(b) {
        var c = document;
        return ma(b) ? c.getElementById(b) : b
    }

    function $e(b, c) {
        jb(c, function(c, e) {
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : e in af ? b.setAttribute(af[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? b.setAttribute(e, c) : b[e] = c
        })
    }
    var af = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function bf(b) {
        b = b.document.documentElement;
        return new Ve(b.clientWidth, b.clientHeight)
    }

    function cf(b, c, d) {
        var e = arguments,
            f = document,
            g = e[0],
            h = e[1];
        if (!Te && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', Aa(h.name), '"');
            if (h.type) {
                g.push(' type="', Aa(h.type), '"');
                var k = {};
                yb(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = f.createElement(g);
        h && (ma(h) ? g.className = h : ja(h) ? g.className = h.join(" ") : $e(g, h));
        2 < e.length && df(f, g, e, 2);
        return g
    }

    function df(b, c, d, e) {
        function f(d) {
            d && c.appendChild(ma(d) ? b.createTextNode(d) : d)
        }
        for (; e < d.length; e++) {
            var g = d[e];
            !ka(g) || pa(g) && 0 < g.nodeType ? f(g) : Oa(ef(g) ? Xa(g) : g, f)
        }
    }

    function ff(b) {
        return document.createElement(b)
    }

    function gf(b, c) {
        df(Ye(b), b, arguments, 1)
    }

    function hf(b) {
        for (var c; c = b.firstChild;) b.removeChild(c)
    }

    function jf(b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    }

    function kf(b) {
        b && b.parentNode && b.parentNode.removeChild(b)
    }

    function lf(b) {
        if (void 0 != b.firstElementChild) b = b.firstElementChild;
        else
            for (b = b.firstChild; b && 1 != b.nodeType;) b = b.nextSibling;
        return b
    }

    function Ye(b) {
        return 9 == b.nodeType ? b : b.ownerDocument || b.document
    }

    function ef(b) {
        if (b && "number" == typeof b.length) {
            if (pa(b)) return "function" == typeof b.item || "string" == typeof b.item;
            if (oa(b)) return "function" == typeof b.item
        }
        return !1
    }

    function Xe(b) {
        this.a = b || ca.document || document
    }

    function mf(b) {
        var c = b.a;
        b = Db ? c.body || c.documentElement : c.documentElement;
        c = c.parentWindow || c.defaultView;
        return Bb && Kb("10") && c.pageYOffset != b.scrollTop ? new Ue(b.scrollLeft, b.scrollTop) : new Ue(c.pageXOffset || b.scrollLeft, c.pageYOffset || b.scrollTop)
    }
    Xe.prototype.appendChild = function(b, c) {
        b.appendChild(c)
    };
    Xe.prototype.contains = function(b, c) {
        if (b.contains && 1 == c.nodeType) return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition) return b == c || Boolean(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;) c = c.parentNode;
        return c == b
    };

    function nf(b, c) {
        var d = ff("CANVAS");
        m(b) && (d.width = b);
        m(c) && (d.height = c);
        return d.getContext("2d")
    }
    var of = function() {
            var b;
            return function() {
                if (!m(b))
                    if (ca.getComputedStyle) {
                        var c = ff("P"),
                            d, e = {
                                webkitTransform: "-webkit-transform",
                                OTransform: "-o-transform",
                                msTransform: "-ms-transform",
                                MozTransform: "-moz-transform",
                                transform: "transform"
                            };
                        document.body.appendChild(c);
                        for (var f in e) f in c.style && (c.style[f] = "translate(1px,1px)", d = ca.getComputedStyle(c).getPropertyValue(e[f]));
                        kf(c);
                        b = d && "none" !== d
                    } else b = !1;
                return b
            }
        }(),
        pf = function() {
            var b;
            return function() {
                if (!m(b))
                    if (ca.getComputedStyle) {
                        var c = ff("P"),
                            d, e = {
                                webkitTransform: "-webkit-transform",
                                OTransform: "-o-transform",
                                msTransform: "-ms-transform",
                                MozTransform: "-moz-transform",
                                transform: "transform"
                            };
                        document.body.appendChild(c);
                        for (var f in e) f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = ca.getComputedStyle(c).getPropertyValue(e[f]));
                        kf(c);
                        b = d && "none" !== d
                    } else b = !1;
                return b
            }
        }();

    function qf(b, c) {
        var d = b.style;
        d.WebkitTransform = c;
        d.MozTransform = c;
        d.a = c;
        d.msTransform = c;
        d.transform = c;
        Bb && !Ob && (b.style.transformOrigin = "0 0")
    }

    function rf(b, c) {
        var d;
        if (pf()) {
            if (m(6)) {
                var e = Array(16);
                for (d = 0; 16 > d; ++d) e[d] = c[d].toFixed(6);
                d = e.join(",")
            } else d = c.join(",");
            qf(b, "matrix3d(" + d + ")")
        } else if (of()) {
            e = [c[0], c[1], c[4], c[5], c[12], c[13]];
            if (m(6)) {
                var f = Array(6);
                for (d = 0; 6 > d; ++d) f[d] = e[d].toFixed(6);
                d = f.join(",")
            } else d = e.join(",");
            qf(b, "matrix(" + d + ")")
        } else b.style.left = Math.round(c[12]) + "px", b.style.top = Math.round(c[13]) + "px"
    };
    var sf = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function tf(b, c) {
        var d, e, f = sf.length;
        for (e = 0; e < f; ++e) try {
            if (d = b.getContext(sf[e], c), null !== d) return d
        } catch (g) {}
        return null
    };
    var uf, vf = ca.devicePixelRatio || 1,
        wf = "ArrayBuffer" in ca,
        xf = !1,
        yf = function() {
            if (!("HTMLCanvasElement" in ca)) return !1;
            try {
                var b = nf();
                if (null === b) return !1;
                m(b.setLineDash) && (xf = !0);
                return !0
            } catch (c) {
                return !1
            }
        }(),
        zf = "geolocation" in ca.navigator,
        Af = "ontouchstart" in ca,
        Bf = "PointerEvent" in ca,
        Cf = !!ca.navigator.msPointerEnabled,
        Df = !1,
        Ef = [];
    if ("WebGLRenderingContext" in ca) try {
        var Ff = ff("CANVAS"),
            Gf = tf(Ff, {
                Pf: !0
            });
        null !== Gf && (Df = !0, Ef = Gf.getSupportedExtensions())
    } catch (Hf) {}
    uf = Df;
    xa = Ef;

    function If(b, c, d) {
        kc.call(this, b, d);
        this.element = c
    }
    A(If, kc);

    function Jf(b) {
        hd.call(this);
        this.a = m(b) ? b : [];
        Kf(this)
    }
    A(Jf, hd);
    l = Jf.prototype;
    l.clear = function() {
        for (; 0 < this.get("length");) this.pop()
    };
    l.bd = function(b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; ++c) this.push(b[c]);
        return this
    };
    l.forEach = function(b, c) {
        Oa(this.a, b, c)
    };
    l.item = function(b) {
        return this.a[b]
    };
    l.pop = function() {
        return Lf(this, this.get("length") - 1)
    };
    l.push = function(b) {
        var c = this.a.length;
        Za(this.a, c, 0, b);
        Kf(this);
        this.dispatchEvent(new If("add", b, this));
        return c
    };
    l.remove = function(b) {
        var c = this.a,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d)
            if (c[d] === b) return Lf(this, d)
    };

    function Lf(b, c) {
        var d = b.a[c];
        Ma.splice.call(b.a, c, 1);
        Kf(b);
        b.dispatchEvent(new If("remove", d, b));
        return d
    }

    function Kf(b) {
        b.set("length", b.a.length)
    };
    var Mf = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Nf = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
        Of = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

    function Qf(b) {
        if (!ma(b)) {
            var c = b[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = b[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = b[2];
            e != (e | 0) && (e = e + .5 | 0);
            b = "rgba(" + c + "," + d + "," + e + "," + b[3] + ")"
        }
        return b
    }
    var Sf = function() {
        var b = {},
            c = 0;
        return function(d) {
            var e;
            if (b.hasOwnProperty(d)) e = b[d];
            else {
                if (1024 <= c) {
                    e = 0;
                    for (var f in b) 0 === (e++ & 3) && (delete b[f], --c)
                }
                var g, h;
                Mf.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = Of.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = Rf(e, e)) : (h = Nf.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]),
                    e = [e, f, g, 1], e = Rf(e, e)) : e = void 0;
                b[d] = e;
                ++c
            }
            return e
        }
    }();

    function Rf(b, c) {
        var d = m(c) ? c : [];
        d[0] = Pb(b[0] + .5 | 0, 0, 255);
        d[1] = Pb(b[1] + .5 | 0, 0, 255);
        d[2] = Pb(b[2] + .5 | 0, 0, 255);
        d[3] = Pb(b[3], 0, 1);
        return d
    };

    function Tf() {
        this.f = td();
        this.c = void 0;
        this.a = td();
        this.d = void 0;
        this.b = td();
        this.i = void 0;
        this.e = td();
        this.k = void 0;
        this.g = td()
    }

    function Uf(b, c, d, e, f) {
        var g = !1;
        m(c) && c !== b.c && (g = b.a, xd(g), g[12] = c, g[13] = c, g[14] = c, g[15] = 1, b.c = c, g = !0);
        if (m(d) && d !== b.d) {
            g = b.b;
            xd(g);
            g[0] = d;
            g[5] = d;
            g[10] = d;
            g[15] = 1;
            var h = -.5 * d + .5;
            g[12] = h;
            g[13] = h;
            g[14] = h;
            g[15] = 1;
            b.d = d;
            g = !0
        }
        m(e) && e !== b.i && (g = Math.cos(e), h = Math.sin(e), ud(b.e, .213 + .787 * g - .213 * h, .213 - .213 * g + .143 * h, .213 - .213 * g - .787 * h, 0, .715 - .715 * g - .715 * h, .715 + .285 * g + .14 * h, .715 - .715 * g + .715 * h, 0, .072 - .072 * g + .928 * h, .072 - .072 * g - .283 * h, .072 + .928 * g + .072 * h, 0, 0, 0, 0, 1), b.i = e, g = !0);
        m(f) && f !== b.k && (ud(b.g, .213 + .787 *
            f, .213 - .213 * f, .213 - .213 * f, 0, .715 - .715 * f, .715 + .285 * f, .715 - .715 * f, 0, .072 - .072 * f, .072 - .072 * f, .072 + .928 * f, 0, 0, 0, 0, 1), b.k = f, g = !0);
        g && (g = b.f, xd(g), m(d) && yd(g, b.b, g), m(c) && yd(g, b.a, g), m(f) && yd(g, b.g, g), m(e) && yd(g, b.e, g));
        return b.f
    };

    function Vf(b) {
        if (b.classList) return b.classList;
        b = b.className;
        return ma(b) && b.match(/\S+/g) || []
    }

    function Wf(b, c) {
        return b.classList ? b.classList.contains(c) : Ua(Vf(b), c)
    }

    function Xf(b, c) {
        b.classList ? b.classList.add(c) : Wf(b, c) || (b.className += 0 < b.className.length ? " " + c : c)
    }

    function Yf(b, c) {
        b.classList ? b.classList.remove(c) : Wf(b, c) && (b.className = Pa(Vf(b), function(b) {
            return b != c
        }).join(" "))
    };

    function Zf(b, c, d, e) {
        this.top = b;
        this.right = c;
        this.bottom = d;
        this.left = e
    }
    l = Zf.prototype;
    l.clone = function() {
        return new Zf(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function(b) {
        return this && b ? b instanceof Zf ? b.left >= this.left && b.right <= this.right && b.top >= this.top && b.bottom <= this.bottom : b.x >= this.left && b.x <= this.right && b.y >= this.top && b.y <= this.bottom : !1
    };
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    l.scale = function(b, c) {
        var d = na(c) ? c : b;
        this.left *= b;
        this.right *= b;
        this.top *= d;
        this.bottom *= d;
        return this
    };

    function $f(b, c, d, e) {
        this.left = b;
        this.top = c;
        this.width = d;
        this.height = e
    }
    l = $f.prototype;
    l.clone = function() {
        return new $f(this.left, this.top, this.width, this.height)
    };
    l.contains = function(b) {
        return b instanceof $f ? this.left <= b.left && this.left + this.width >= b.left + b.width && this.top <= b.top && this.top + this.height >= b.top + b.height : b.x >= this.left && b.x <= this.left + this.width && b.y >= this.top && b.y <= this.top + this.height
    };

    function ag(b, c) {
        var d = c.x < b.left ? b.left - c.x : Math.max(c.x - (b.left + b.width), 0),
            e = c.y < b.top ? b.top - c.y : Math.max(c.y - (b.top + b.height), 0);
        return d * d + e * e
    }
    l.distance = function(b) {
        return Math.sqrt(ag(this, b))
    };
    l.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(b, c) {
        var d = na(c) ? c : b;
        this.left *= b;
        this.width *= b;
        this.top *= d;
        this.height *= d;
        return this
    };

    function bg(b, c) {
        var d = Ye(b);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(b, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
    }

    function cg(b, c) {
        return bg(b, c) || (b.currentStyle ? b.currentStyle[c] : null) || b.style && b.style[c]
    }

    function dg(b, c, d) {
        var e;
        c instanceof Ue ? (e = c.x, c = c.y) : (e = c, c = d);
        b.style.left = eg(e);
        b.style.top = eg(c)
    }

    function fg(b) {
        var c;
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        Bb && b.ownerDocument.body && (b = b.ownerDocument, c.left -= b.documentElement.clientLeft + b.body.clientLeft, c.top -= b.documentElement.clientTop + b.body.clientTop);
        return c
    }

    function gg(b) {
        if (1 == b.nodeType) return b = fg(b), new Ue(b.left, b.top);
        var c = oa(b.Rf),
            d = b;
        b.targetTouches && b.targetTouches.length ? d = b.targetTouches[0] : c && b.a.targetTouches && b.a.targetTouches.length && (d = b.a.targetTouches[0]);
        return new Ue(d.clientX, d.clientY)
    }

    function eg(b) {
        "number" == typeof b && (b = b + "px");
        return b
    }

    function hg(b) {
        var c = ig;
        if ("none" != cg(b, "display")) return c(b);
        var d = b.style,
            e = d.display,
            f = d.visibility,
            g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        b = c(b);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return b
    }

    function ig(b) {
        var c = b.offsetWidth,
            d = b.offsetHeight,
            e = Db && !c && !d;
        return m(c) && !e || !b.getBoundingClientRect ? new Ve(c, d) : (b = fg(b), new Ve(b.right - b.left, b.bottom - b.top))
    }

    function jg(b, c) {
        b.style.display = c ? "" : "none"
    }

    function kg(b, c, d, e) {
        if (/^\d+px?$/.test(c)) return parseInt(c, 10);
        var f = b.style[d],
            g = b.runtimeStyle[d];
        b.runtimeStyle[d] = b.currentStyle[d];
        b.style[d] = c;
        c = b.style[e];
        b.style[d] = f;
        b.runtimeStyle[d] = g;
        return c
    }

    function lg(b, c) {
        var d = b.currentStyle ? b.currentStyle[c] : null;
        return d ? kg(b, d, "left", "pixelLeft") : 0
    }

    function mg(b, c) {
        if (Bb) {
            var d = lg(b, c + "Left"),
                e = lg(b, c + "Right"),
                f = lg(b, c + "Top"),
                g = lg(b, c + "Bottom");
            return new Zf(f, e, g, d)
        }
        d = bg(b, c + "Left");
        e = bg(b, c + "Right");
        f = bg(b, c + "Top");
        g = bg(b, c + "Bottom");
        return new Zf(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d))
    }
    var ng = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function og(b, c) {
        if ("none" == (b.currentStyle ? b.currentStyle[c + "Style"] : null)) return 0;
        var d = b.currentStyle ? b.currentStyle[c + "Width"] : null;
        return d in ng ? ng[d] : kg(b, d, "left", "pixelLeft")
    };

    function pg(b, c, d) {
        kc.call(this, b);
        this.map = c;
        this.frameState = m(d) ? d : null
    }
    A(pg, kc);

    function qg(b) {
        hd.call(this);
        this.element = m(b.element) ? b.element : null;
        this.a = this.s = null;
        this.f = [];
        this.render = m(b.render) ? b.render : da;
        m(b.target) && (this.s = Ze(b.target))
    }
    A(qg, hd);
    qg.prototype.B = function() {
        kf(this.element);
        qg.H.B.call(this)
    };
    qg.prototype.setMap = function(b) {
        null === this.a || kf(this.element);
        0 != this.f.length && (Oa(this.f, Pc), this.f.length = 0);
        this.a = b;
        null !== this.a && ((null === this.s ? b.s : this.s).appendChild(this.element), this.render !== da && this.f.push(C(b, "postrender", this.render, !1, this)), b.render())
    };

    function rg() {
        this.b = 0;
        this.d = {};
        this.c = this.a = null
    }
    l = rg.prototype;
    l.clear = function() {
        this.b = 0;
        this.d = {};
        this.c = this.a = null
    };

    function sg(b, c) {
        return b.d.hasOwnProperty(c)
    }
    l.forEach = function(b, c) {
        for (var d = this.a; null !== d;) b.call(c, d.ib, d.nc, this), d = d.ra
    };
    l.get = function(b) {
        b = this.d[b];
        if (b === this.c) return b.ib;
        b === this.a ? (this.a = this.a.ra, this.a.Ma = null) : (b.ra.Ma = b.Ma, b.Ma.ra = b.ra);
        b.ra = null;
        b.Ma = this.c;
        this.c = this.c.ra = b;
        return b.ib
    };
    l.Ua = function() {
        return this.b
    };
    l.ca = function() {
        var b = Array(this.b),
            c = 0,
            d;
        for (d = this.c; null !== d; d = d.Ma) b[c++] = d.nc;
        return b
    };
    l.va = function() {
        var b = Array(this.b),
            c = 0,
            d;
        for (d = this.c; null !== d; d = d.Ma) b[c++] = d.ib;
        return b
    };
    l.pop = function() {
        var b = this.a;
        delete this.d[b.nc];
        null !== b.ra && (b.ra.Ma = null);
        this.a = b.ra;
        null === this.a && (this.c = null);
        --this.b;
        return b.ib
    };
    l.set = function(b, c) {
        var d = {
            nc: b,
            ra: null,
            Ma: this.c,
            ib: c
        };
        null === this.c ? this.a = d : this.c.ra = d;
        this.c = d;
        this.d[b] = d;
        ++this.b
    };

    function tg(b) {
        rg.call(this);
        this.e = m(b) ? b : 2048
    }
    A(tg, rg);

    function ug(b) {
        return b.Ua() > b.e
    };

    function vg(b, c) {
        $c.call(this);
        this.a = b;
        this.state = c
    }
    A(vg, $c);
    vg.prototype.Fa = function() {
        return v(this).toString()
    };

    function wg(b) {
        hd.call(this);
        this.k = ee(b.projection);
        this.p = m(b.attributions) ? b.attributions : null;
        this.M = b.logo;
        this.l = m(b.state) ? b.state : "ready"
    }
    A(wg, hd);
    wg.prototype.s = da;
    wg.prototype.u = function() {
        return this.k
    };
    wg.prototype.ba = function() {
        return this.l
    };

    function xg(b) {
        this.minZoom = m(b.minZoom) ? b.minZoom : 0;
        this.a = b.resolutions;
        this.maxZoom = this.a.length - 1;
        this.f = m(b.origin) ? b.origin : null;
        this.g = null;
        m(b.origins) && (this.g = b.origins);
        this.d = null;
        m(b.tileSizes) && (this.d = b.tileSizes);
        this.k = m(b.tileSize) ? b.tileSize : null === this.d ? 256 : void 0;
        this.e = null;
        m(b.widths) && (this.e = b.widths)
    }
    var yg = [0, 0, 0];
    xg.prototype.i = function() {
        return Wc
    };
    xg.prototype.c = function(b, c, d, e, f) {
        f = zg(this, b, f);
        for (b = b[0] - 1; b >= this.minZoom;) {
            if (c.call(d, b, Ag(this, f, b, e))) return !0;
            --b
        }
        return !1
    };

    function Bg(b, c) {
        return null === b.f ? b.g[c] : b.f
    }
    xg.prototype.b = function(b, c, d) {
        return b[0] < this.maxZoom ? (d = zg(this, b, d), Ag(this, d, b[0] + 1, c)) : null
    };

    function Cg(b, c, d, e) {
        Dg(b, c[0], c[1], d, !1, yg);
        var f = yg[1],
            g = yg[2];
        Dg(b, c[2], c[3], d, !0, yg);
        return Ne(f, yg[1], g, yg[2], e)
    }

    function Ag(b, c, d, e) {
        return Cg(b, c, b.a[d], e)
    }

    function Eg(b, c) {
        var d = Bg(b, c[0]),
            e = b.a[c[0]],
            f = Fg(b, c[0]);
        return [d[0] + (c[1] + .5) * f * e, d[1] + (c[2] + .5) * f * e]
    }

    function zg(b, c, d) {
        var e = Bg(b, c[0]),
            f = b.a[c[0]];
        b = Fg(b, c[0]);
        var g = e[0] + c[1] * b * f;
        c = e[1] + c[2] * b * f;
        return Dd(g, c, g + b * f, c + b * f, d)
    }

    function Dg(b, c, d, e, f, g) {
        var h = Gg(b, e),
            k = e / b.a[h],
            n = Bg(b, h);
        b = Fg(b, h);
        c = k * (c - n[0]) / (e * b);
        d = k * (d - n[1]) / (e * b);
        f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
        return Je(h, c, d, g)
    }

    function Hg(b, c, d) {
        d = Ag(b, Ig(d), c);
        b = Jg(b, c);
        m(b) || (b = Qe(d));
        return Ne(0, b - 1, 0, d.c - d.b + 1, void 0)
    }

    function Fg(b, c) {
        return m(b.k) ? b.k : b.d[c]
    }

    function Jg(b, c) {
        if (null !== b.e) return b.e[c]
    }

    function Gg(b, c) {
        var d = Vb(b.a, c, 0);
        return Pb(d, b.minZoom, b.maxZoom)
    }

    function Kg(b) {
        var c = b.i;
        if (null === c) {
            for (var c = Ig(b), d = m(void 0) ? void 0 : 256, e = m(void 0) ? void 0 : "bottom-left", f = Lg(c, void 0, d), g = Array(f.length), h = c[2] - c[0], k = f.length - 1; 0 <= k; --k) g[k] = h / d / f[k];
            c = new xg({
                origin: Sd(c, e),
                resolutions: f,
                tileSize: d,
                widths: g
            });
            b.i = c
        }
        return c
    }

    function Lg(b, c, d) {
        c = m(c) ? c : 42;
        d = m(d) ? d : 256;
        b = Math.max((b[2] - b[0]) / d, Ud(b) / d);
        c += 1;
        d = Array(c);
        for (var e = 0; e < c; ++e) d[e] = b / Math.pow(2, e);
        return d
    }

    function Ig(b) {
        b = ee(b);
        var c = b.b;
        null === c && (b = 180 * be.degrees / b.Yc(), c = Dd(-b, -b, b, b));
        return c
    };

    function Mg(b) {
        wg.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state
        });
        this.P = m(b.opaque) ? b.opaque : !1;
        this.V = m(b.tilePixelRatio) ? b.tilePixelRatio : 1;
        this.tileGrid = m(b.tileGrid) ? b.tileGrid : null;
        this.a = new tg;
        this.K = b.wrapX
    }
    A(Mg, wg);

    function Ng(b, c, d, e) {
        for (var f = !0, g, h, k = d.a; k <= d.d; ++k)
            for (var n = d.b; n <= d.c; ++n) g = b.Db(c, k, n), h = !1, sg(b.a, g) && (g = b.a.get(g), (h = 2 === g.state) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }
    Mg.prototype.dc = function() {
        return 0
    };
    Mg.prototype.Db = Ke;

    function Og(b, c) {
        return null === b.tileGrid ? Kg(c) : b.tileGrid
    }
    Mg.prototype.Fb = function(b, c, d) {
        return Fg(Og(this, d), b) * this.V
    };
    Mg.prototype.J = da;

    function Pg(b, c) {
        kc.call(this, b);
        this.tile = c
    }
    A(Pg, kc);

    function Qg(b) {
        b = m(b) ? b : {};
        this.p = ff("UL");
        this.k = ff("LI");
        this.p.appendChild(this.k);
        jg(this.k, !1);
        this.e = m(b.collapsed) ? b.collapsed : !0;
        this.g = m(b.collapsible) ? b.collapsible : !0;
        this.g || (this.e = !1);
        var c = m(b.className) ? b.className : "ol-attribution",
            d = m(b.tipLabel) ? b.tipLabel : "Attributions",
            e = m(b.collapseLabel) ? b.collapseLabel : "\u00bb";
        this.n = ma(e) ? cf("SPAN", {}, e) : e;
        e = m(b.label) ? b.label : "i";
        this.o = ma(e) ? cf("SPAN", {}, e) : e;
        d = cf("BUTTON", {
            type: "button",
            title: d
        }, this.g && !this.e ? this.n : this.o);
        C(d, "click",
            this.u, !1, this);
        C(d, ["mouseout", nc], function() {
            this.blur()
        }, !1);
        c = cf("DIV", c + " ol-unselectable ol-control" + (this.e && this.g ? " ol-collapsed" : "") + (this.g ? "" : " ol-uncollapsible"), this.p, d);
        qg.call(this, {
            element: c,
            render: m(b.render) ? b.render : Rg,
            target: b.target
        });
        this.l = !0;
        this.d = {};
        this.b = {};
        this.t = {}
    }
    A(Qg, qg);

    function Rg(b) {
        b = b.frameState;
        if (null === b) this.l && (jg(this.element, !1), this.l = !1);
        else {
            var c, d, e, f, g, h, k, n, p, q, r, s = b.layerStatesArray,
                t = wb(b.attributions),
                x = {},
                y = b.viewState.projection;
            d = 0;
            for (c = s.length; d < c; d++)
                if (h = s[d].layer.a(), null !== h && (q = v(h).toString(), p = h.p, null !== p))
                    for (e = 0, f = p.length; e < f; e++)
                        if (k = p[e], n = v(k).toString(), !(n in t)) {
                            g = b.usedTiles[q];
                            if (m(g)) {
                                var z = Og(h, y);
                                a: {
                                    r = k;
                                    var B = y;
                                    if (null === r.a) r = !0;
                                    else {
                                        var w = void 0,
                                            K = void 0,
                                            H = void 0,
                                            D = void 0;
                                        for (D in g)
                                            if (D in r.a)
                                                for (var H = g[D], J,
                                                        w = 0, K = r.a[D].length; w < K; ++w) {
                                                    J = r.a[D][w];
                                                    if (Re(J, H)) {
                                                        r = !0;
                                                        break a
                                                    }
                                                    var T = Hg(z, parseInt(D, 10), B),
                                                        $ = Qe(T);
                                                    if (H.a < T.a || H.d > T.d)
                                                        if (Re(J, new Me(Qb(H.a, $), Qb(H.d, $), H.b, H.c)) || Qe(H) > $ && Re(J, T)) {
                                                            r = !0;
                                                            break a
                                                        }
                                                }
                                            r = !1
                                    }
                                }
                            } else r = !1;
                            r ? (n in x && delete x[n], t[n] = k) : x[n] = k
                        }
            c = [t, x];
            d = c[0];
            c = c[1];
            for (var L in this.d) L in d ? (this.b[L] || (jg(this.d[L], !0), this.b[L] = !0), delete d[L]) : L in c ? (this.b[L] && (jg(this.d[L], !1), delete this.b[L]), delete c[L]) : (kf(this.d[L]), delete this.d[L], delete this.b[L]);
            for (L in d) e = ff("LI"),
                e.innerHTML = d[L].c, this.p.appendChild(e), this.d[L] = e, this.b[L] = !0;
            for (L in c) e = ff("LI"), e.innerHTML = c[L].c, jg(e, !1), this.p.appendChild(e), this.d[L] = e;
            L = !rb(this.b) || !rb(b.logos);
            this.l != L && (jg(this.element, L), this.l = L);
            L && rb(this.b) ? Xf(this.element, "ol-logo-only") : Yf(this.element, "ol-logo-only");
            var aa;
            b = b.logos;
            L = this.t;
            for (aa in L) aa in b || (kf(L[aa]), delete L[aa]);
            for (var la in b) la in L || (aa = new Image, aa.src = la, d = b[la], "" === d ? d = aa : (d = cf("A", {
                    href: d
                }), d.appendChild(aa)), this.k.appendChild(d), L[la] =
                d);
            jg(this.k, !rb(b))
        }
    }
    Qg.prototype.u = function(b) {
        b.preventDefault();
        b = this.element;
        Wf(b, "ol-collapsed") ? Yf(b, "ol-collapsed") : Xf(b, "ol-collapsed");
        if (this.e) {
            b = this.o;
            var c = b.parentNode;
            c && c.replaceChild(this.n, b)
        } else b = this.n, (c = b.parentNode) && c.replaceChild(this.o, b);
        this.e = !this.e
    };

    function Sg(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-rotate",
            d = m(b.label) ? b.label : "\u21e7";
        this.b = null;
        ma(d) ? this.b = cf("SPAN", "ol-compass", d) : (this.b = d, Xf(this.b, "ol-compass"));
        d = cf("BUTTON", {
            "class": c + "-reset",
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Reset rotation"
        }, this.b);
        C(d, "click", Sg.prototype.k, !1, this);
        C(d, ["mouseout", nc], function() {
            this.blur()
        }, !1);
        c = cf("DIV", c + " ol-unselectable ol-control", d);
        qg.call(this, {
            element: c,
            render: m(b.render) ? b.render : Tg,
            target: b.target
        });
        this.e =
            m(b.duration) ? b.duration : 250;
        this.d = m(b.autoHide) ? b.autoHide : !0;
        this.g = void 0;
        this.d && Xf(this.element, "ol-hidden")
    }
    A(Sg, qg);
    Sg.prototype.k = function(b) {
        b.preventDefault();
        b = this.a;
        var c = b.a();
        if (null !== c) {
            for (var d = c.e(); d < -Math.PI;) d += 2 * Math.PI;
            for (; d > Math.PI;) d -= 2 * Math.PI;
            m(d) && (0 < this.e && b.pa(He({
                rotation: d,
                duration: this.e,
                easing: De
            })), c.l(0))
        }
    };

    function Tg(b) {
        b = b.frameState;
        if (null !== b) {
            b = b.viewState.rotation;
            if (b != this.g) {
                var c = "rotate(" + 180 * b / Math.PI + "deg)";
                if (this.d) {
                    var d = this.element;
                    0 === b ? Xf(d, "ol-hidden") : Yf(d, "ol-hidden")
                }
                this.b.style.msTransform = c;
                this.b.style.webkitTransform = c;
                this.b.style.transform = c
            }
            this.g = b
        }
    };

    function Ug(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-zoom",
            d = m(b.delta) ? b.delta : 1,
            e = m(b.zoomOutLabel) ? b.zoomOutLabel : "\u2212",
            f = m(b.zoomOutTipLabel) ? b.zoomOutTipLabel : "Zoom out",
            g = cf("BUTTON", {
                "class": c + "-in",
                type: "button",
                title: m(b.zoomInTipLabel) ? b.zoomInTipLabel : "Zoom in"
            }, m(b.zoomInLabel) ? b.zoomInLabel : "+");
        C(g, "click", va(Ug.prototype.d, d), !1, this);
        C(g, ["mouseout", nc], function() {
            this.blur()
        }, !1);
        e = cf("BUTTON", {
            "class": c + "-out",
            type: "button",
            title: f
        }, e);
        C(e, "click", va(Ug.prototype.d, -d), !1, this);
        C(e, ["mouseout", nc], function() {
            this.blur()
        }, !1);
        c = cf("DIV", c + " ol-unselectable ol-control", g, e);
        qg.call(this, {
            element: c,
            target: b.target
        });
        this.b = m(b.duration) ? b.duration : 250
    }
    A(Ug, qg);
    Ug.prototype.d = function(b, c) {
        c.preventDefault();
        var d = this.a,
            e = d.a();
        if (null !== e) {
            var f = e.b();
            m(f) && (0 < this.b && d.pa(Ie({
                resolution: f,
                duration: this.b,
                easing: De
            })), d = e.constrainResolution(f, b), e.f(d))
        }
    };

    function Vg(b) {
        b = m(b) ? b : {};
        var c = new Jf;
        (m(b.zoom) ? b.zoom : 1) && c.push(new Ug(b.zoomOptions));
        (m(b.rotate) ? b.rotate : 1) && c.push(new Sg(b.rotateOptions));
        (m(b.attribution) ? b.attribution : 1) && c.push(new Qg(b.attributionOptions));
        return c
    };

    function Wg(b) {
        b = m(b) ? b : {};
        var c = cf("DIV", m(b.className) ? b.className : "ol-mouse-position");
        qg.call(this, {
            element: c,
            render: m(b.render) ? b.render : Xg,
            target: b.target
        });
        C(this, ld("projection"), this.u, !1, this);
        m(b.coordinateFormat) && this.n(b.coordinateFormat);
        m(b.projection) && this.p(ee(b.projection));
        this.v = m(b.undefinedHTML) ? b.undefinedHTML : "";
        this.g = c.innerHTML;
        this.e = this.d = this.b = null
    }
    A(Wg, qg);

    function Xg(b) {
        b = b.frameState;
        null === b ? this.b = null : this.b != b.viewState.projection && (this.b = b.viewState.projection, this.d = null);
        Yg(this, this.e)
    }
    Wg.prototype.u = function() {
        this.d = null
    };
    Wg.prototype.k = function() {
        return this.get("coordinateFormat")
    };
    Wg.prototype.getCoordinateFormat = Wg.prototype.k;
    Wg.prototype.l = function() {
        return this.get("projection")
    };
    Wg.prototype.getProjection = Wg.prototype.l;
    Wg.prototype.o = function(b) {
        this.e = Zg(this.a, b.a);
        Yg(this, this.e)
    };
    Wg.prototype.t = function() {
        Yg(this, null);
        this.e = null
    };
    Wg.prototype.setMap = function(b) {
        Wg.H.setMap.call(this, b);
        null !== b && (b = b.b, this.f.push(C(b, "mousemove", this.o, !1, this), C(b, "mouseout", this.t, !1, this)))
    };
    Wg.prototype.n = function(b) {
        this.set("coordinateFormat", b)
    };
    Wg.prototype.setCoordinateFormat = Wg.prototype.n;
    Wg.prototype.p = function(b) {
        this.set("projection", b)
    };
    Wg.prototype.setProjection = Wg.prototype.p;

    function Yg(b, c) {
        var d = b.v;
        if (null !== c && null !== b.b) {
            if (null === b.d) {
                var e = b.l();
                b.d = m(e) ? ie(b.b, e) : we
            }
            e = b.a.e(c);
            null !== e && (b.d(e, e), d = b.k(), d = m(d) ? d(e) : e.toString())
        }
        m(b.g) && d == b.g || (b.element.innerHTML = d, b.g = d)
    };

    function $g(b, c, d) {
        fc.call(this);
        this.d = b;
        this.b = d;
        this.a = c || window;
        this.c = ua(this.Mf, this)
    }
    A($g, fc);
    l = $g.prototype;
    l.qa = null;
    l.pd = !1;
    l.start = function() {
        ah(this);
        this.pd = !1;
        var b = bh(this),
            c = ch(this);
        b && !c && this.a.mozRequestAnimationFrame ? (this.qa = C(this.a, "MozBeforePaint", this.c), this.a.mozRequestAnimationFrame(null), this.pd = !0) : this.qa = b && c ? b.call(this.a, this.c) : this.a.setTimeout(Xc(this.c), 20)
    };

    function ah(b) {
        if (null != b.qa) {
            var c = bh(b),
                d = ch(b);
            c && !d && b.a.mozRequestAnimationFrame ? Pc(b.qa) : c && d ? d.call(b.a, b.qa) : b.a.clearTimeout(b.qa)
        }
        b.qa = null
    }
    l.Mf = function() {
        this.pd && this.qa && Pc(this.qa);
        this.qa = null;
        this.d.call(this.b, wa())
    };
    l.B = function() {
        ah(this);
        $g.H.B.call(this)
    };

    function bh(b) {
        b = b.a;
        return b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || null
    }

    function ch(b) {
        b = b.a;
        return b.cancelAnimationFrame || b.cancelRequestAnimationFrame || b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || null
    };
    var dh;

    function eh() {
        var b = ca.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function() {
            var b = document.createElement("iframe");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow,
                b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(),
                e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
                b = ua(function(b) {
                    if (("*" == e || b.origin == e) && b.data == d) this.port1.onmessage()
                }, this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !ib("Trident") && !ib("MSIE")) {
            var c = new b,
                d = {},
                e = d;
            c.port1.onmessage = function() {
                if (m(d.next)) {
                    d = d.next;
                    var b = d.Ad;
                    d.Ad = null;
                    b()
                }
            };
            return function(b) {
                e.next = {
                    Ad: b
                };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(b) {
            var c = document.createElement("script");
            c.onreadystatechange = function() {
                c.onreadystatechange =
                    null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function(b) {
            ca.setTimeout(b, 0)
        }
    };

    function fh(b) {
        if ("function" == typeof b.va) return b.va();
        if (ma(b)) return b.split("");
        if (ka(b)) {
            for (var c = [], d = b.length, e = 0; e < d; e++) c.push(b[e]);
            return c
        }
        return mb(b)
    }

    function gh(b, c) {
        if ("function" == typeof b.forEach) b.forEach(c, void 0);
        else if (ka(b) || ma(b)) Oa(b, c, void 0);
        else {
            var d;
            if ("function" == typeof b.ca) d = b.ca();
            else if ("function" != typeof b.va)
                if (ka(b) || ma(b)) {
                    d = [];
                    for (var e = b.length, f = 0; f < e; f++) d.push(f)
                } else d = nb(b);
            else d = void 0;
            for (var e = fh(b), f = e.length, g = 0; g < f; g++) c.call(void 0, e[g], d && d[g], b)
        }
    };

    function hh(b, c) {
        this.c = {};
        this.a = [];
        this.b = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2) throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (b) {
            b instanceof hh ? (d = b.ca(), e = b.va()) : (d = nb(b), e = mb(b));
            for (var f = 0; f < d.length; f++) this.set(d[f], e[f])
        }
    }
    l = hh.prototype;
    l.Ua = function() {
        return this.b
    };
    l.va = function() {
        ih(this);
        for (var b = [], c = 0; c < this.a.length; c++) b.push(this.c[this.a[c]]);
        return b
    };
    l.ca = function() {
        ih(this);
        return this.a.concat()
    };
    l.R = function() {
        return 0 == this.b
    };
    l.clear = function() {
        this.c = {};
        this.b = this.a.length = 0
    };
    l.remove = function(b) {
        return jh(this.c, b) ? (delete this.c[b], this.b--, this.a.length > 2 * this.b && ih(this), !0) : !1
    };

    function ih(b) {
        if (b.b != b.a.length) {
            for (var c = 0, d = 0; c < b.a.length;) {
                var e = b.a[c];
                jh(b.c, e) && (b.a[d++] = e);
                c++
            }
            b.a.length = d
        }
        if (b.b != b.a.length) {
            for (var f = {}, d = c = 0; c < b.a.length;) e = b.a[c], jh(f, e) || (b.a[d++] = e, f[e] = 1), c++;
            b.a.length = d
        }
    }
    l.get = function(b, c) {
        return jh(this.c, b) ? this.c[b] : c
    };
    l.set = function(b, c) {
        jh(this.c, b) || (this.b++, this.a.push(b));
        this.c[b] = c
    };
    l.forEach = function(b, c) {
        for (var d = this.ca(), e = 0; e < d.length; e++) {
            var f = d[e],
                g = this.get(f);
            b.call(c, g, f, this)
        }
    };
    l.clone = function() {
        return new hh(this)
    };

    function jh(b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    };

    function kh() {
        this.a = wa()
    }
    new kh;
    kh.prototype.set = function(b) {
        this.a = b
    };
    kh.prototype.get = function() {
        return this.a
    };

    function lh(b) {
        $c.call(this);
        this.Pb = b || window;
        this.pc = C(this.Pb, "resize", this.Eg, !1, this);
        this.hc = bf(this.Pb || window)
    }
    A(lh, $c);
    l = lh.prototype;
    l.pc = null;
    l.Pb = null;
    l.hc = null;
    l.B = function() {
        lh.H.B.call(this);
        this.pc && (Pc(this.pc), this.pc = null);
        this.hc = this.Pb = null
    };
    l.Eg = function() {
        var b = bf(this.Pb || window),
            c = this.hc;
        b == c || b && c && b.width == c.width && b.height == c.height || (this.hc = b, this.dispatchEvent("resize"))
    };

    function mh(b, c, d, e, f) {
        if (!(Bb || Db && Kb("525"))) return !0;
        if (Eb && f) return nh(b);
        if (f && !e) return !1;
        na(c) && (c = oh(c));
        if (!d && (17 == c || 18 == c || Eb && 91 == c)) return !1;
        if (Db && e && d) switch (b) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (Bb && e && c == b) return !1;
        switch (b) {
            case 13:
                return !0;
            case 27:
                return !Db
        }
        return nh(b)
    }

    function nh(b) {
        if (48 <= b && 57 >= b || 96 <= b && 106 >= b || 65 <= b && 90 >= b || Db && 0 == b) return !0;
        switch (b) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function oh(b) {
        if (Cb) b = ph(b);
        else if (Eb && Db) a: switch (b) {
            case 93:
                b = 91;
                break a
        }
        return b
    }

    function ph(b) {
        switch (b) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return b
        }
    };

    function qh(b, c) {
        $c.call(this);
        b && sh(this, b, c)
    }
    A(qh, $c);
    l = qh.prototype;
    l.I = null;
    l.lc = null;
    l.$c = null;
    l.mc = null;
    l.ka = -1;
    l.Ja = -1;
    l.Oc = !1;
    var th = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        uh = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        vh = Bb || Db && Kb("525"),
        wh = Eb && Cb;
    qh.prototype.a = function(b) {
        Db && (17 == this.ka && !b.g || 18 == this.ka && !b.c || Eb && 91 == this.ka && !b.C) && (this.Ja = this.ka = -1); - 1 == this.ka && (b.g && 17 != b.e ? this.ka = 17 : b.c && 18 != b.e ? this.ka = 18 : b.C && 91 != b.e && (this.ka = 91));
        vh && !mh(b.e, this.ka, b.d, b.g, b.c) ? this.handleEvent(b) : (this.Ja = oh(b.e), wh && (this.Oc = b.c))
    };
    qh.prototype.c = function(b) {
        this.Ja = this.ka = -1;
        this.Oc = b.c
    };
    qh.prototype.handleEvent = function(b) {
        var c = b.a,
            d, e, f = c.altKey;
        Bb && "keypress" == b.type ? (d = this.Ja, e = 13 != d && 27 != d ? c.keyCode : 0) : Db && "keypress" == b.type ? (d = this.Ja, e = 0 <= c.charCode && 63232 > c.charCode && nh(d) ? c.charCode : 0) : Ab ? (d = this.Ja, e = nh(d) ? c.keyCode : 0) : (d = c.keyCode || this.Ja, e = c.charCode || 0, wh && (f = this.Oc), Eb && 63 == e && 224 == d && (d = 191));
        var g = d = oh(d),
            h = c.keyIdentifier;
        d ? 63232 <= d && d in th ? g = th[d] : 25 == d && b.d && (g = 9) : h && h in uh && (g = uh[h]);
        this.ka = g;
        b = new xh(g, e, 0, c);
        b.c = f;
        this.dispatchEvent(b)
    };

    function sh(b, c, d) {
        b.mc && yh(b);
        b.I = c;
        b.lc = C(b.I, "keypress", b, d);
        b.$c = C(b.I, "keydown", b.a, d, b);
        b.mc = C(b.I, "keyup", b.c, d, b)
    }

    function yh(b) {
        b.lc && (Pc(b.lc), Pc(b.$c), Pc(b.mc), b.lc = null, b.$c = null, b.mc = null);
        b.I = null;
        b.ka = -1;
        b.Ja = -1
    }
    qh.prototype.B = function() {
        qh.H.B.call(this);
        yh(this)
    };

    function xh(b, c, d, e) {
        pc.call(this, e);
        this.type = "key";
        this.e = b;
        this.k = c
    }
    A(xh, pc);

    function zh(b, c) {
        $c.call(this);
        var d = this.I = b;
        (d = pa(d) && 1 == d.nodeType ? this.I : this.I ? this.I.body : null) && cg(d, "direction");
        this.a = C(this.I, Cb ? "DOMMouseScroll" : "mousewheel", this, c)
    }
    A(zh, $c);
    zh.prototype.handleEvent = function(b) {
        var c = 0,
            d = 0,
            e = 0;
        b = b.a;
        if ("mousewheel" == b.type) {
            d = 1;
            if (Bb || Db && (Fb || Kb("532.0"))) d = 40;
            e = Ah(-b.wheelDelta, d);
            m(b.wheelDeltaX) ? (c = Ah(-b.wheelDeltaX, d), d = Ah(-b.wheelDeltaY, d)) : d = e
        } else e = b.detail, 100 < e ? e = 3 : -100 > e && (e = -3), m(b.axis) && b.axis === b.HORIZONTAL_AXIS ? c = e : d = e;
        na(this.c) && Pb(c, -this.c, this.c);
        na(this.b) && (d = Pb(d, -this.b, this.b));
        c = new Bh(e, b, 0, d);
        this.dispatchEvent(c)
    };

    function Ah(b, c) {
        return Db && (Eb || Gb) && 0 != b % c ? b : b / c
    }
    zh.prototype.B = function() {
        zh.H.B.call(this);
        Pc(this.a);
        this.a = null
    };

    function Bh(b, c, d, e) {
        pc.call(this, c);
        this.type = "mousewheel";
        this.detail = b;
        this.D = e
    }
    A(Bh, pc);

    function Ch(b, c, d) {
        kc.call(this, b);
        this.a = c;
        b = m(d) ? d : {};
        this.buttons = Dh(b);
        this.pressure = Eh(b, this.buttons);
        this.bubbles = ub(b, "bubbles", !1);
        this.cancelable = ub(b, "cancelable", !1);
        this.view = ub(b, "view", null);
        this.detail = ub(b, "detail", null);
        this.screenX = ub(b, "screenX", 0);
        this.screenY = ub(b, "screenY", 0);
        this.clientX = ub(b, "clientX", 0);
        this.clientY = ub(b, "clientY", 0);
        this.button = ub(b, "button", 0);
        this.relatedTarget = ub(b, "relatedTarget", null);
        this.pointerId = ub(b, "pointerId", 0);
        this.width = ub(b, "width", 0);
        this.height =
            ub(b, "height", 0);
        this.pointerType = ub(b, "pointerType", "");
        this.isPrimary = ub(b, "isPrimary", !1);
        c.preventDefault && (this.preventDefault = function() {
            c.preventDefault()
        })
    }
    A(Ch, kc);

    function Dh(b) {
        if (b.buttons || Fh) b = b.buttons;
        else switch (b.which) {
            case 1:
                b = 1;
                break;
            case 2:
                b = 4;
                break;
            case 3:
                b = 2;
                break;
            default:
                b = 0
        }
        return b
    }

    function Eh(b, c) {
        var d = 0;
        b.pressure ? d = b.pressure : d = c ? .5 : 0;
        return d
    }
    var Fh = !1;
    try {
        Fh = 1 === (new MouseEvent("click", {
            buttons: 1
        })).buttons
    } catch (Gh) {};

    function Hh(b, c) {
        this.a = b;
        this.e = c
    };

    function Ih(b) {
        Hh.call(this, b, {
            mousedown: this.Ng,
            mousemove: this.Og,
            mouseup: this.Rg,
            mouseover: this.Qg,
            mouseout: this.Pg
        });
        this.c = b.c;
        this.b = []
    }
    A(Ih, Hh);

    function Jh(b, c) {
        for (var d = b.b, e = c.clientX, f = c.clientY, g = 0, h = d.length, k; g < h && (k = d[g]); g++) {
            var n = Math.abs(f - k[1]);
            if (25 >= Math.abs(e - k[0]) && 25 >= n) return !0
        }
        return !1
    }

    function Kh(b) {
        var c = Lh(b, b.a),
            d = c.preventDefault;
        c.preventDefault = function() {
            b.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }
    l = Ih.prototype;
    l.Ng = function(b) {
        if (!Jh(this, b)) {
            if ((1).toString() in this.c) {
                var c = Kh(b);
                Mh(this.a, Nh, c, b);
                tb(this.c, (1).toString())
            }
            c = Kh(b);
            this.c[(1).toString()] = b;
            Mh(this.a, Oh, c, b)
        }
    };
    l.Og = function(b) {
        if (!Jh(this, b)) {
            var c = Kh(b);
            Mh(this.a, Ph, c, b)
        }
    };
    l.Rg = function(b) {
        if (!Jh(this, b)) {
            var c = this.c[(1).toString()];
            c && c.button === b.button && (c = Kh(b), Mh(this.a, Qh, c, b), tb(this.c, (1).toString()))
        }
    };
    l.Qg = function(b) {
        if (!Jh(this, b)) {
            var c = Kh(b);
            Rh(this.a, c, b)
        }
    };
    l.Pg = function(b) {
        if (!Jh(this, b)) {
            var c = Kh(b);
            Sh(this.a, c, b)
        }
    };

    function Th(b) {
        Hh.call(this, b, {
            MSPointerDown: this.Wg,
            MSPointerMove: this.Xg,
            MSPointerUp: this.$g,
            MSPointerOut: this.Yg,
            MSPointerOver: this.Zg,
            MSPointerCancel: this.Vg,
            MSGotPointerCapture: this.Tg,
            MSLostPointerCapture: this.Ug
        });
        this.c = b.c;
        this.b = ["", "unavailable", "touch", "pen", "mouse"]
    }
    A(Th, Hh);

    function Uh(b, c) {
        var d = c;
        na(c.a.pointerType) && (d = Lh(c, c.a), d.pointerType = b.b[c.a.pointerType]);
        return d
    }
    l = Th.prototype;
    l.Wg = function(b) {
        this.c[b.a.pointerId] = b;
        var c = Uh(this, b);
        Mh(this.a, Oh, c, b)
    };
    l.Xg = function(b) {
        var c = Uh(this, b);
        Mh(this.a, Ph, c, b)
    };
    l.$g = function(b) {
        var c = Uh(this, b);
        Mh(this.a, Qh, c, b);
        tb(this.c, b.a.pointerId)
    };
    l.Yg = function(b) {
        var c = Uh(this, b);
        Sh(this.a, c, b)
    };
    l.Zg = function(b) {
        var c = Uh(this, b);
        Rh(this.a, c, b)
    };
    l.Vg = function(b) {
        var c = Uh(this, b);
        Mh(this.a, Nh, c, b);
        tb(this.c, b.a.pointerId)
    };
    l.Ug = function(b) {
        this.a.dispatchEvent(new Ch("lostpointercapture", b, b.a))
    };
    l.Tg = function(b) {
        this.a.dispatchEvent(new Ch("gotpointercapture", b, b.a))
    };

    function Vh(b) {
        Hh.call(this, b, {
            pointerdown: this.Oh,
            pointermove: this.Ph,
            pointerup: this.Sh,
            pointerout: this.Qh,
            pointerover: this.Rh,
            pointercancel: this.Nh,
            gotpointercapture: this.hg,
            lostpointercapture: this.Mg
        })
    }
    A(Vh, Hh);
    l = Vh.prototype;
    l.Oh = function(b) {
        Wh(this.a, b)
    };
    l.Ph = function(b) {
        Wh(this.a, b)
    };
    l.Sh = function(b) {
        Wh(this.a, b)
    };
    l.Qh = function(b) {
        Wh(this.a, b)
    };
    l.Rh = function(b) {
        Wh(this.a, b)
    };
    l.Nh = function(b) {
        Wh(this.a, b)
    };
    l.Mg = function(b) {
        Wh(this.a, b)
    };
    l.hg = function(b) {
        Wh(this.a, b)
    };

    function Xh(b, c) {
        Hh.call(this, b, {
            touchstart: this.Ci,
            touchmove: this.Bi,
            touchend: this.Ai,
            touchcancel: this.zi
        });
        this.c = b.c;
        this.f = c;
        this.b = void 0;
        this.i = 0;
        this.d = void 0
    }
    A(Xh, Hh);
    l = Xh.prototype;
    l.Ae = function() {
        this.i = 0;
        this.d = void 0
    };

    function Yh(b, c, d) {
        c = Lh(c, d);
        c.pointerId = d.identifier + 2;
        c.bubbles = !0;
        c.cancelable = !0;
        c.detail = b.i;
        c.button = 0;
        c.buttons = 1;
        c.width = d.webkitRadiusX || d.radiusX || 0;
        c.height = d.webkitRadiusY || d.radiusY || 0;
        c.pressure = d.webkitForce || d.force || .5;
        c.isPrimary = b.b === d.identifier;
        c.pointerType = "touch";
        c.clientX = d.clientX;
        c.clientY = d.clientY;
        c.screenX = d.screenX;
        c.screenY = d.screenY;
        return c
    }

    function Zh(b, c, d) {
        function e() {
            c.preventDefault()
        }
        var f = Array.prototype.slice.call(c.a.changedTouches),
            g = f.length,
            h, k;
        for (h = 0; h < g; ++h) k = Yh(b, c, f[h]), k.preventDefault = e, d.call(b, c, k)
    }
    l.Ci = function(b) {
        var c = b.a.touches,
            d = nb(this.c),
            e = d.length;
        if (e >= c.length) {
            var f = [],
                g, h, k;
            for (g = 0; g < e; ++g) {
                h = d[g];
                k = this.c[h];
                var n;
                if (!(n = 1 == h)) a: {
                    n = c.length;
                    for (var p = void 0, q = 0; q < n; q++)
                        if (p = c[q], p.identifier === h - 2) {
                            n = !0;
                            break a
                        }
                    n = !1
                }
                n || f.push(k.eb)
            }
            for (g = 0; g < f.length; ++g) this.Pc(b, f[g])
        }
        c = lb(this.c);
        if (0 === c || 1 === c && (1).toString() in this.c) this.b = b.a.changedTouches[0].identifier, m(this.d) && ca.clearTimeout(this.d);
        $h(this, b);
        this.i++;
        Zh(this, b, this.Jh)
    };
    l.Jh = function(b, c) {
        this.c[c.pointerId] = {
            target: c.target,
            eb: c,
            me: c.target
        };
        var d = this.a;
        c.bubbles = !0;
        Mh(d, ai, c, b);
        d = this.a;
        c.bubbles = !1;
        Mh(d, bi, c, b);
        Mh(this.a, Oh, c, b)
    };
    l.Bi = function(b) {
        b.preventDefault();
        Zh(this, b, this.Sg)
    };
    l.Sg = function(b, c) {
        var d = this.c[c.pointerId];
        if (d) {
            var e = d.eb,
                f = d.me;
            Mh(this.a, Ph, c, b);
            e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (Sh(this.a, e, b), Rh(this.a, c, b)) : (c.target = f, c.relatedTarget = null, this.Pc(b, c)));
            d.eb = c;
            d.me = c.target
        }
    };
    l.Ai = function(b) {
        $h(this, b);
        Zh(this, b, this.Di)
    };
    l.Di = function(b, c) {
        Mh(this.a, Qh, c, b);
        this.a.eb(c, b);
        var d = this.a;
        c.bubbles = !1;
        Mh(d, ci, c, b);
        tb(this.c, c.pointerId);
        c.isPrimary && (this.b = void 0, this.d = ca.setTimeout(ua(this.Ae, this), 200))
    };
    l.zi = function(b) {
        Zh(this, b, this.Pc)
    };
    l.Pc = function(b, c) {
        Mh(this.a, Nh, c, b);
        this.a.eb(c, b);
        var d = this.a;
        c.bubbles = !1;
        Mh(d, ci, c, b);
        tb(this.c, c.pointerId);
        c.isPrimary && (this.b = void 0, this.d = ca.setTimeout(ua(this.Ae, this), 200))
    };

    function $h(b, c) {
        var d = b.f.b,
            e = c.a.changedTouches[0];
        if (b.b === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            ca.setTimeout(function() {
                Va(d, f)
            }, 2500)
        }
    };

    function di(b) {
        $c.call(this);
        this.I = b;
        this.c = {};
        this.b = {};
        this.a = [];
        Bf ? ei(this, new Vh(this)) : Cf ? ei(this, new Th(this)) : (b = new Ih(this), ei(this, b), Af && ei(this, new Xh(this, b)));
        b = this.a.length;
        for (var c, d = 0; d < b; d++) c = this.a[d], fi(this, nb(c.e))
    }
    A(di, $c);

    function ei(b, c) {
        var d = nb(c.e);
        d && (Oa(d, function(b) {
            var d = c.e[b];
            d && (this.b[b] = ua(d, c))
        }, b), b.a.push(c))
    }
    di.prototype.d = function(b) {
        var c = this.b[b.type];
        c && c(b)
    };

    function fi(b, c) {
        Oa(c, function(b) {
            C(this.I, b, this.d, !1, this)
        }, b)
    }

    function gi(b, c) {
        Oa(c, function(b) {
            Oc(this.I, b, this.d, !1, this)
        }, b)
    }

    function Lh(b, c) {
        for (var d = {}, e, f = 0, g = hi.length; f < g; f++) e = hi[f][0], d[e] = b[e] || c[e] || hi[f][1];
        return d
    }
    di.prototype.eb = function(b, c) {
        b.bubbles = !0;
        Mh(this, ii, b, c)
    };

    function Sh(b, c, d) {
        b.eb(c, d);
        c.target.contains(c.relatedTarget) || (c.bubbles = !1, Mh(b, ci, c, d))
    }

    function Rh(b, c, d) {
        c.bubbles = !0;
        Mh(b, ai, c, d);
        c.target.contains(c.relatedTarget) || (c.bubbles = !1, Mh(b, bi, c, d))
    }

    function Mh(b, c, d, e) {
        b.dispatchEvent(new Ch(c, e, d))
    }

    function Wh(b, c) {
        b.dispatchEvent(new Ch(c.type, c, c.a))
    }
    di.prototype.B = function() {
        for (var b = this.a.length, c, d = 0; d < b; d++) c = this.a[d], gi(this, nb(c.e));
        di.H.B.call(this)
    };
    var Ph = "pointermove",
        Oh = "pointerdown",
        Qh = "pointerup",
        ai = "pointerover",
        ii = "pointerout",
        bi = "pointerenter",
        ci = "pointerleave",
        Nh = "pointercancel",
        hi = [
            ["bubbles", !1],
            ["cancelable", !1],
            ["view", null],
            ["detail", null],
            ["screenX", 0],
            ["screenY", 0],
            ["clientX", 0],
            ["clientY", 0],
            ["ctrlKey", !1],
            ["altKey", !1],
            ["shiftKey", !1],
            ["metaKey", !1],
            ["button", 0],
            ["relatedTarget", null],
            ["buttons", 0],
            ["pointerId", 0],
            ["width", 0],
            ["height", 0],
            ["pressure", 0],
            ["tiltX", 0],
            ["tiltY", 0],
            ["pointerType", ""],
            ["hwTimestamp", 0],
            ["isPrimary", !1],
            ["type", ""],
            ["target", null],
            ["currentTarget", null],
            ["which", 0]
        ];

    function ji(b, c, d, e, f) {
        pg.call(this, b, c, f);
        this.a = d;
        this.originalEvent = d.a;
        this.pixel = Zg(c, this.originalEvent);
        this.coordinate = c.e(this.pixel);
        this.dragging = m(e) ? e : !1
    }
    A(ji, pg);
    ji.prototype.preventDefault = function() {
        ji.H.preventDefault.call(this);
        this.a.preventDefault()
    };
    ji.prototype.lb = function() {
        ji.H.lb.call(this);
        this.a.lb()
    };

    function ki(b, c, d, e, f) {
        ji.call(this, b, c, d.a, e, f);
        this.c = d
    }
    A(ki, ji);

    function li(b) {
        $c.call(this);
        this.b = b;
        this.i = 0;
        this.f = !1;
        this.c = this.g = this.d = null;
        b = this.b.b;
        this.l = 0;
        this.q = {};
        this.e = new di(b);
        this.a = null;
        this.g = C(this.e, Oh, this.Ag, !1, this);
        this.k = C(this.e, Ph, this.ii, !1, this)
    }
    A(li, $c);

    function mi(b, c) {
        var d;
        d = new ki(ni, b.b, c);
        b.dispatchEvent(d);
        0 !== b.i ? (ca.clearTimeout(b.i), b.i = 0, d = new ki(oi, b.b, c), b.dispatchEvent(d)) : b.i = ca.setTimeout(ua(function() {
            this.i = 0;
            var b = new ki(pi, this.b, c);
            this.dispatchEvent(b)
        }, b), 250)
    }

    function qi(b, c) {
        c.type == ri || c.type == si ? delete b.q[c.pointerId] : c.type == ti && (b.q[c.pointerId] = !0);
        b.l = lb(b.q)
    }
    l = li.prototype;
    l.Qd = function(b) {
        qi(this, b);
        var c = new ki(ri, this.b, b);
        this.dispatchEvent(c);
        !this.f && 0 === b.button && mi(this, this.c);
        0 === this.l && (Oa(this.d, Pc), this.d = null, this.f = !1, this.c = null, jc(this.a), this.a = null)
    };
    l.Ag = function(b) {
        qi(this, b);
        var c = new ki(ti, this.b, b);
        this.dispatchEvent(c);
        this.c = b;
        null === this.d && (this.a = new di(document), this.d = [C(this.a, ui, this.oh, !1, this), C(this.a, ri, this.Qd, !1, this), C(this.e, si, this.Qd, !1, this)])
    };
    l.oh = function(b) {
        if (b.clientX != this.c.clientX || b.clientY != this.c.clientY) {
            this.f = !0;
            var c = new ki(vi, this.b, b, this.f);
            this.dispatchEvent(c)
        }
        b.preventDefault()
    };
    l.ii = function(b) {
        this.dispatchEvent(new ki(b.type, this.b, b, null !== this.c && (b.clientX != this.c.clientX || b.clientY != this.c.clientY)))
    };
    l.B = function() {
        null !== this.k && (Pc(this.k), this.k = null);
        null !== this.g && (Pc(this.g), this.g = null);
        null !== this.d && (Oa(this.d, Pc), this.d = null);
        null !== this.a && (jc(this.a), this.a = null);
        null !== this.e && (jc(this.e), this.e = null);
        li.H.B.call(this)
    };
    var pi = "singleclick",
        ni = "click",
        oi = "dblclick",
        vi = "pointerdrag",
        ui = "pointermove",
        ti = "pointerdown",
        ri = "pointerup",
        si = "pointercancel",
        wi = {
            Ui: pi,
            Ji: ni,
            Ki: oi,
            Ni: vi,
            Qi: ui,
            Mi: ti,
            Ti: ri,
            Si: "pointerover",
            Ri: "pointerout",
            Oi: "pointerenter",
            Pi: "pointerleave",
            Li: si
        };

    function E(b) {
        hd.call(this);
        var c = wb(b);
        c.brightness = m(b.brightness) ? b.brightness : 0;
        c.contrast = m(b.contrast) ? b.contrast : 1;
        c.hue = m(b.hue) ? b.hue : 0;
        c.opacity = m(b.opacity) ? b.opacity : 1;
        c.saturation = m(b.saturation) ? b.saturation : 1;
        c.visible = m(b.visible) ? b.visible : !0;
        c.maxResolution = m(b.maxResolution) ? b.maxResolution : Infinity;
        c.minResolution = m(b.minResolution) ? b.minResolution : 0;
        this.U(c)
    }
    A(E, hd);
    E.prototype.n = function() {
        return this.get("brightness")
    };
    E.prototype.getBrightness = E.prototype.n;
    E.prototype.o = function() {
        return this.get("contrast")
    };
    E.prototype.getContrast = E.prototype.o;
    E.prototype.s = function() {
        return this.get("hue")
    };
    E.prototype.getHue = E.prototype.s;

    function xi(b) {
        var c = b.n(),
            d = b.o(),
            e = b.s(),
            f = b.K(),
            g = b.v(),
            h = b.k(),
            k = b.e(),
            n = b.J(),
            p = b.t(),
            q = b.u();
        return {
            layer: b,
            brightness: Pb(c, -1, 1),
            contrast: Math.max(d, 0),
            hue: e,
            opacity: Pb(f, 0, 1),
            saturation: Math.max(g, 0),
            l: h,
            visible: k,
            extent: n,
            maxResolution: p,
            minResolution: Math.max(q, 0)
        }
    }
    E.prototype.J = function() {
        return this.get("extent")
    };
    E.prototype.getExtent = E.prototype.J;
    E.prototype.t = function() {
        return this.get("maxResolution")
    };
    E.prototype.getMaxResolution = E.prototype.t;
    E.prototype.u = function() {
        return this.get("minResolution")
    };
    E.prototype.getMinResolution = E.prototype.u;
    E.prototype.K = function() {
        return this.get("opacity")
    };
    E.prototype.getOpacity = E.prototype.K;
    E.prototype.v = function() {
        return this.get("saturation")
    };
    E.prototype.getSaturation = E.prototype.v;
    E.prototype.e = function() {
        return this.get("visible")
    };
    E.prototype.getVisible = E.prototype.e;
    E.prototype.za = function(b) {
        this.set("brightness", b)
    };
    E.prototype.setBrightness = E.prototype.za;
    E.prototype.Ha = function(b) {
        this.set("contrast", b)
    };
    E.prototype.setContrast = E.prototype.Ha;
    E.prototype.jb = function(b) {
        this.set("hue", b)
    };
    E.prototype.setHue = E.prototype.jb;
    E.prototype.$ = function(b) {
        this.set("extent", b)
    };
    E.prototype.setExtent = E.prototype.$;
    E.prototype.Tb = function(b) {
        this.set("maxResolution", b)
    };
    E.prototype.setMaxResolution = E.prototype.Tb;
    E.prototype.Ub = function(b) {
        this.set("minResolution", b)
    };
    E.prototype.setMinResolution = E.prototype.Ub;
    E.prototype.aa = function(b) {
        this.set("opacity", b)
    };
    E.prototype.setOpacity = E.prototype.aa;
    E.prototype.Lc = function(b) {
        this.set("saturation", b)
    };
    E.prototype.setSaturation = E.prototype.Lc;
    E.prototype.Mc = function(b) {
        this.set("visible", b)
    };
    E.prototype.setVisible = E.prototype.Mc;

    function yi(b) {
        var c = wb(b);
        delete c.source;
        E.call(this, c);
        this.f = null;
        C(this, ld("source"), this.V, !1, this);
        this.P(m(b.source) ? b.source : null)
    }
    A(yi, E);

    function zi(b, c) {
        return b.visible && c >= b.minResolution && c < b.maxResolution
    }
    yi.prototype.g = function(b) {
        b = m(b) ? b : [];
        b.push(xi(this));
        return b
    };
    yi.prototype.a = function() {
        var b = this.get("source");
        return m(b) ? b : null
    };
    yi.prototype.getSource = yi.prototype.a;
    yi.prototype.k = function() {
        var b = this.a();
        return null === b ? "undefined" : b.l
    };
    yi.prototype.ba = function() {
        this.r()
    };
    yi.prototype.V = function() {
        null !== this.f && (Pc(this.f), this.f = null);
        var b = this.a();
        null !== b && (this.f = C(b, "change", this.ba, !1, this));
        this.r()
    };
    yi.prototype.P = function(b) {
        this.set("source", b)
    };
    yi.prototype.setSource = yi.prototype.P;

    function Ai(b, c, d, e, f) {
        $c.call(this);
        this.d = f;
        this.extent = b;
        this.e = d;
        this.resolution = c;
        this.state = e
    }
    A(Ai, $c);

    function Bi(b, c, d, e, f, g, h, k) {
        xd(b);
        0 === c && 0 === d || zd(b, c, d);
        1 == e && 1 == f || Ad(b, e, f);
        0 !== g && Bd(b, g);
        0 === h && 0 === k || zd(b, h, k);
        return b
    }

    function Ci(b, c) {
        return b[0] == c[0] && b[1] == c[1] && b[4] == c[4] && b[5] == c[5] && b[12] == c[12] && b[13] == c[13]
    }

    function Di(b, c, d) {
        var e = b[1],
            f = b[5],
            g = b[13],
            h = c[0];
        c = c[1];
        d[0] = b[0] * h + b[4] * c + b[12];
        d[1] = e * h + f * c + g;
        return d
    };

    function Ei(b) {
        cd.call(this);
        this.a = b
    }
    A(Ei, cd);
    Ei.prototype.La = da;
    Ei.prototype.i = function(b, c) {
        return function(d, e) {
            return Ng(b, d, e, function(b) {
                c[d] || (c[d] = {});
                c[d][b.a.toString()] = b
            })
        }
    };
    Ei.prototype.J = function(b) {
        2 === b.target.state && Fi(this)
    };

    function Gi(b, c) {
        var d = c.state;
        2 != d && 3 != d && C(c, "change", b.J, !1, b);
        0 == d && (c.load(), d = c.state);
        return 2 == d
    }

    function Fi(b) {
        var c = b.a;
        c.e() && "ready" == c.k() && b.r()
    }

    function Hi(b, c) {
        ug(c.a) && b.postRenderFunctions.push(va(function(b, c, f) {
            c = v(b).toString();
            b = b.a;
            f = f.usedTiles[c];
            for (var g; ug(b) && !(c = b.a.ib, g = c.a[0].toString(), g in f && f[g].contains(c.a));) b.pop().Tc()
        }, c))
    }

    function Ii(b, c) {
        if (null != c) {
            var d, e, f;
            e = 0;
            for (f = c.length; e < f; ++e) d = c[e], b[v(d).toString()] = d
        }
    }

    function Ji(b, c) {
        var d = c.M;
        m(d) && (ma(d) ? b.logos[d] = "" : pa(d) && (b.logos[d.src] = d.href))
    }

    function Ki(b, c, d, e) {
        c = v(c).toString();
        d = d.toString();
        c in b ? d in b[c] ? (b = b[c][d], e.a < b.a && (b.a = e.a), e.d > b.d && (b.d = e.d), e.b < b.b && (b.b = e.b), e.c > b.c && (b.c = e.c)) : b[c][d] = e : (b[c] = {}, b[c][d] = e)
    }

    function Li(b, c, d) {
        return [c * (Math.round(b[0] / c) + d[0] % 2 / 2), c * (Math.round(b[1] / c) + d[1] % 2 / 2)]
    }

    function Mi(b, c, d, e, f, g, h, k, n, p) {
        var q = v(c).toString();
        q in b.wantedTiles || (b.wantedTiles[q] = {});
        var r = b.wantedTiles[q];
        b = b.tileQueue;
        var s = d.minZoom,
            t, x, y, z, B, w;
        for (w = h; w >= s; --w)
            for (x = Ag(d, g, w, x), y = d.a[w], z = x.a; z <= x.d; ++z)
                for (B = x.b; B <= x.c; ++B) h - w <= k ? (t = Ni(c, w, z, B, e, f), 0 == t.state && (r[Le(t.a)] = !0, t.Fa() in b.b || Oi(b, [t, q, Eg(d, t.a), y])), m(n) && n.call(p, t)) : c.J(w, z, B)
    };

    function Pi(b) {
        this.k = b.opacity;
        this.C = b.rotateWithView;
        this.f = b.rotation;
        this.g = b.scale;
        this.n = b.snapToPixel
    };

    function Qi(b) {
        b = m(b) ? b : {};
        this.e = m(b.anchor) ? b.anchor : [.5, .5];
        this.d = null;
        this.c = m(b.anchorOrigin) ? b.anchorOrigin : "top-left";
        this.D = m(b.anchorXUnits) ? b.anchorXUnits : "fraction";
        this.q = m(b.anchorYUnits) ? b.anchorYUnits : "fraction";
        var c = m(b.crossOrigin) ? b.crossOrigin : null,
            d = m(b.img) ? b.img : null,
            e = b.src;
        m(e) && 0 !== e.length || null === d || (e = d.src);
        var f = m(b.src) ? 0 : 2,
            g = Ri.ja(),
            h = g.get(e, c);
        null === h && (h = new Si(d, e, c, f), g.set(e, c, h));
        this.a = h;
        this.p = m(b.offset) ? b.offset : [0, 0];
        this.b = m(b.offsetOrigin) ? b.offsetOrigin :
            "top-left";
        this.i = null;
        this.l = m(b.size) ? b.size : null;
        Pi.call(this, {
            opacity: m(b.opacity) ? b.opacity : 1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: m(b.scale) ? b.scale : 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0,
            rotateWithView: m(b.rotateWithView) ? b.rotateWithView : !1
        })
    }
    A(Qi, Pi);
    l = Qi.prototype;
    l.Bb = function() {
        if (null !== this.d) return this.d;
        var b = this.e,
            c = this.cb();
        if ("fraction" == this.D || "fraction" == this.q) {
            if (null === c) return null;
            b = this.e.slice();
            "fraction" == this.D && (b[0] *= c[0]);
            "fraction" == this.q && (b[1] *= c[1])
        }
        if ("top-left" != this.c) {
            if (null === c) return null;
            b === this.e && (b = this.e.slice());
            if ("top-right" == this.c || "bottom-right" == this.c) b[0] = -b[0] + c[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c) b[1] = -b[1] + c[1]
        }
        return this.d = b
    };
    l.tc = function() {
        return this.a.a
    };
    l.Xc = function() {
        return this.a.c
    };
    l.uc = function() {
        return this.a.b
    };
    l.dd = function() {
        var b = this.a;
        if (null === b.e)
            if (b.g) {
                var c = b.c[0],
                    d = b.c[1],
                    e = nf(c, d);
                e.fillRect(0, 0, c, d);
                b.e = e.canvas
            } else b.e = b.a;
        return b.e
    };
    l.Jb = function() {
        if (null !== this.i) return this.i;
        var b = this.p;
        if ("top-left" != this.b) {
            var c = this.cb(),
                d = this.a.c;
            if (null === c || null === d) return null;
            b = b.slice();
            if ("top-right" == this.b || "bottom-right" == this.b) b[0] = d[0] - c[0] - b[0];
            if ("bottom-left" == this.b || "bottom-right" == this.b) b[1] = d[1] - c[1] - b[1]
        }
        return this.i = b
    };
    l.cb = function() {
        return null === this.l ? this.a.c : this.l
    };
    l.Td = function(b, c) {
        return C(this.a, "change", b, !1, c)
    };
    l.load = function() {
        this.a.load()
    };
    l.Me = function(b, c) {
        Oc(this.a, "change", b, !1, c)
    };

    function Si(b, c, d, e) {
        $c.call(this);
        this.e = null;
        this.a = null === b ? new Image : b;
        null !== d && (this.a.crossOrigin = d);
        this.d = null;
        this.b = e;
        this.c = null;
        this.i = c;
        this.g = !1
    }
    A(Si, $c);
    Si.prototype.f = function() {
        this.b = 3;
        Oa(this.d, Pc);
        this.d = null;
        this.dispatchEvent("change")
    };
    Si.prototype.k = function() {
        this.b = 2;
        this.c = [this.a.width, this.a.height];
        Oa(this.d, Pc);
        this.d = null;
        var b = nf(1, 1);
        b.drawImage(this.a, 0, 0);
        try {
            b.getImageData(0, 0, 1, 1)
        } catch (c) {
            this.g = !0
        }
        this.dispatchEvent("change")
    };
    Si.prototype.load = function() {
        if (0 == this.b) {
            this.b = 1;
            this.d = [Nc(this.a, "error", this.f, !1, this), Nc(this.a, "load", this.k, !1, this)];
            try {
                this.a.src = this.i
            } catch (b) {
                this.f()
            }
        }
    };

    function Ri() {
        this.a = {};
        this.c = 0
    }
    ea(Ri);
    Ri.prototype.clear = function() {
        this.a = {};
        this.c = 0
    };
    Ri.prototype.get = function(b, c) {
        var d = c + ":" + b;
        return d in this.a ? this.a[d] : null
    };
    Ri.prototype.set = function(b, c, d) {
        this.a[c + ":" + b] = d;
        ++this.c
    };

    function Ti(b, c) {
        fc.call(this);
        this.f = c;
        this.i = null;
        this.b = {};
        this.l = {}
    }
    A(Ti, fc);

    function Ui(b) {
        var c = b.viewState,
            d = b.coordinateToPixelMatrix;
        Bi(d, b.size[0] / 2, b.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
        b = b.pixelToCoordinateMatrix;
        var c = d[0],
            e = d[1],
            f = d[2],
            g = d[3],
            h = d[4],
            k = d[5],
            n = d[6],
            p = d[7],
            q = d[8],
            r = d[9],
            s = d[10],
            t = d[11],
            x = d[12],
            y = d[13],
            z = d[14],
            d = d[15],
            B = c * k - e * h,
            w = c * n - f * h,
            K = c * p - g * h,
            H = e * n - f * k,
            D = e * p - g * k,
            J = f * p - g * n,
            T = q * y - r * x,
            $ = q * z - s * x,
            L = q * d - t * x,
            aa = r * z - s * y,
            la = r * d - t * y,
            ga = s * d - t * z,
            fa = B * ga - w * la + K * aa + H * L - D * $ + J * T;
        0 != fa && (fa = 1 / fa, b[0] = (k * ga - n * la + p * aa) *
            fa, b[1] = (-e * ga + f * la - g * aa) * fa, b[2] = (y * J - z * D + d * H) * fa, b[3] = (-r * J + s * D - t * H) * fa, b[4] = (-h * ga + n * L - p * $) * fa, b[5] = (c * ga - f * L + g * $) * fa, b[6] = (-x * J + z * K - d * w) * fa, b[7] = (q * J - s * K + t * w) * fa, b[8] = (h * la - k * L + p * T) * fa, b[9] = (-c * la + e * L - g * T) * fa, b[10] = (x * D - y * K + d * B) * fa, b[11] = (-q * D + r * K - t * B) * fa, b[12] = (-h * aa + k * $ - n * T) * fa, b[13] = (c * aa - e * $ + f * T) * fa, b[14] = (-x * H + y * w - z * B) * fa, b[15] = (q * H - r * w + s * B) * fa)
    }
    l = Ti.prototype;
    l.B = function() {
        jb(this.b, jc);
        Ti.H.B.call(this)
    };

    function Vi() {
        var b = Ri.ja();
        if (32 < b.c) {
            var c = 0,
                d, e;
            for (d in b.a) {
                e = b.a[d];
                var f;
                if (f = 0 === (c++ & 3)) uc(e) ? e = bd(e, void 0, void 0) : (e = Ic(e), e = !!e && Cc(e, void 0, void 0)), f = !e;
                f && (delete b.a[d], --b.c)
            }
        }
    }
    l.ie = function(b, c, d, e, f, g) {
        var h, k = c.viewState,
            n = k.resolution,
            k = k.rotation;
        if (null !== this.i) {
            var p = {};
            if (h = this.i.b(b, n, k, {}, function(b) {
                    var c = v(b).toString();
                    if (!(c in p)) return p[c] = !0, d.call(e, b, null)
                })) return h
        }
        var k = c.layerStatesArray,
            q;
        for (q = k.length - 1; 0 <= q; --q) {
            h = k[q];
            var r = h.layer;
            if (zi(h, n) && f.call(g, r) && (h = Wi(this, r).La(b, c, d, e))) return h
        }
    };

    function Wi(b, c) {
        var d = v(c).toString();
        if (d in b.b) return b.b[d];
        var e = b.Sc(c);
        b.b[d] = e;
        b.l[d] = C(e, "change", b.tg, !1, b);
        return e
    }
    l.tg = function() {
        this.f.render()
    };
    l.Bc = da;
    l.ni = function(b, c) {
        for (var d in this.b)
            if (!(null !== c && d in c.layerStates)) {
                var e = d,
                    f = this.b[e];
                delete this.b[e];
                Pc(this.l[e]);
                delete this.l[e];
                jc(f)
            }
    };

    function Xi(b, c) {
        for (var d in b.b)
            if (!(d in c.layerStates)) {
                c.postRenderFunctions.push(ua(b.ni, b));
                break
            }
    };

    function Yi(b, c) {
        this.i = b;
        this.e = c;
        this.a = [];
        this.c = [];
        this.b = {}
    }
    Yi.prototype.clear = function() {
        this.a.length = 0;
        this.c.length = 0;
        sb(this.b)
    };

    function Zi(b) {
        var c = b.a,
            d = b.c,
            e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), $i(b, 0));
        c = b.e(e);
        delete b.b[c];
        return e
    }

    function Oi(b, c) {
        var d = b.i(c);
        Infinity != d && (b.a.push(c), b.c.push(d), b.b[b.e(c)] = !0, aj(b, 0, b.a.length - 1))
    }
    Yi.prototype.Ua = function() {
        return this.a.length
    };
    Yi.prototype.R = function() {
        return 0 === this.a.length
    };

    function $i(b, c) {
        for (var d = b.a, e = b.c, f = d.length, g = d[c], h = e[c], k = c; c < f >> 1;) {
            var n = 2 * c + 1,
                p = 2 * c + 2,
                n = p < f && e[p] < e[n] ? p : n;
            d[c] = d[n];
            e[c] = e[n];
            c = n
        }
        d[c] = g;
        e[c] = h;
        aj(b, k, c)
    }

    function aj(b, c, d) {
        var e = b.a;
        b = b.c;
        for (var f = e[d], g = b[d]; d > c;) {
            var h = d - 1 >> 1;
            if (b[h] > g) e[d] = e[h], b[d] = b[h], d = h;
            else break
        }
        e[d] = f;
        b[d] = g
    }

    function bj(b) {
        var c = b.i,
            d = b.a,
            e = b.c,
            f = 0,
            g = d.length,
            h, k, n;
        for (k = 0; k < g; ++k) h = d[k], n = c(h), Infinity == n ? delete b.b[b.e(h)] : (e[f] = n, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (b.a.length >> 1) - 1; 0 <= c; c--) $i(b, c)
    };

    function cj(b, c) {
        Yi.call(this, function(c) {
            return b.apply(null, c)
        }, function(b) {
            return b[0].Fa()
        });
        this.g = c;
        this.d = 0
    }
    A(cj, Yi);
    cj.prototype.f = function(b) {
        b = b.target.state;
        if (2 === b || 3 === b || 4 === b) --this.d, this.g()
    };

    function dj() {
        this.a = [];
        this.c = this.b = 0
    }

    function ej(b, c) {
        var d = b.c,
            e = .05 - d,
            f = Math.log(.05 / b.c) / -.005;
        return Ge({
            source: c,
            duration: f,
            easing: function(b) {
                return d * (Math.exp(-.005 * b * f) - 1) / e
            }
        })
    };

    function fj(b) {
        hd.call(this);
        this.p = null;
        this.O(!0);
        this.handleEvent = b.handleEvent
    }
    A(fj, hd);
    fj.prototype.t = function() {
        return this.get("active")
    };
    fj.prototype.getActive = fj.prototype.t;
    fj.prototype.O = function(b) {
        this.set("active", b)
    };
    fj.prototype.setActive = fj.prototype.O;
    fj.prototype.setMap = function(b) {
        this.p = b
    };

    function gj(b, c, d, e, f) {
        if (null != d) {
            var g = c.e(),
                h = c.a();
            m(g) && m(h) && m(f) && 0 < f && (b.pa(He({
                rotation: g,
                duration: f,
                easing: De
            })), m(e) && b.pa(Ge({
                source: h,
                duration: f,
                easing: De
            })));
            c.rotate(d, e)
        }
    }

    function hj(b, c, d, e, f) {
        var g = c.b();
        d = c.constrainResolution(g, d, 0);
        ij(b, c, d, e, f)
    }

    function ij(b, c, d, e, f) {
        if (null != d) {
            var g = c.b(),
                h = c.a();
            m(g) && m(h) && m(f) && 0 < f && (b.pa(Ie({
                resolution: g,
                duration: f,
                easing: De
            })), m(e) && b.pa(Ge({
                source: h,
                duration: f,
                easing: De
            })));
            if (null != e) {
                var k;
                b = c.a();
                f = c.b();
                m(b) && m(f) && (k = [e[0] - d * (e[0] - b[0]) / f, e[1] - d * (e[1] - b[1]) / f]);
                c.d(k)
            }
            c.f(d)
        }
    };

    function jj(b) {
        b = m(b) ? b : {};
        this.a = m(b.delta) ? b.delta : 1;
        fj.call(this, {
            handleEvent: kj
        });
        this.b = m(b.duration) ? b.duration : 250
    }
    A(jj, fj);

    function kj(b) {
        var c = !1,
            d = b.a;
        if (b.type == oi) {
            var c = b.map,
                e = b.coordinate,
                d = d.d ? -this.a : this.a,
                f = c.a();
            hj(c, f, d, e, this.b);
            b.preventDefault();
            c = !0
        }
        return !c
    };

    function lj(b) {
        b = b.a;
        return b.c && !b.f && b.d
    }

    function mj(b) {
        return "pointermove" == b.type
    }

    function nj(b) {
        return b.type == pi
    }

    function oj(b) {
        b = b.a;
        return !b.c && !b.f && !b.d
    }

    function pj(b) {
        b = b.a;
        return !b.c && !b.f && b.d
    }

    function qj(b) {
        b = b.a.target.tagName;
        return "INPUT" !== b && "SELECT" !== b && "TEXTAREA" !== b
    }

    function rj(b) {
        return 1 == b.c.pointerId
    };

    function sj(b) {
        b = m(b) ? b : {};
        fj.call(this, {
            handleEvent: m(b.handleEvent) ? b.handleEvent : tj
        });
        this.V = m(b.handleDownEvent) ? b.handleDownEvent : Uc;
        this.$ = m(b.handleDragEvent) ? b.handleDragEvent : da;
        this.aa = m(b.handleMoveEvent) ? b.handleMoveEvent : da;
        this.ba = m(b.handleUpEvent) ? b.handleUpEvent : Uc;
        this.l = !1;
        this.o = {};
        this.b = []
    }
    A(sj, fj);

    function uj(b) {
        for (var c = b.length, d = 0, e = 0, f = 0; f < c; f++) d += b[f].clientX, e += b[f].clientY;
        return [d / c, e / c]
    }

    function tj(b) {
        if (!(b instanceof ki)) return !0;
        var c = !1,
            d = b.type;
        if (d === ti || d === vi || d === ri) d = b.c, b.type == ri ? delete this.o[d.pointerId] : b.type == ti ? this.o[d.pointerId] = d : d.pointerId in this.o && (this.o[d.pointerId] = d), this.b = mb(this.o);
        this.l && (b.type == vi ? this.$(b) : b.type == ri && (this.l = this.ba(b)));
        b.type == ti ? (this.l = b = this.V(b), c = this.n(b)) : b.type == ui && this.aa(b);
        return !c
    }
    sj.prototype.n = Wc;

    function vj(b) {
        sj.call(this, {
            handleDownEvent: wj,
            handleDragEvent: xj,
            handleUpEvent: yj
        });
        b = m(b) ? b : {};
        this.a = b.kinetic;
        this.d = this.e = null;
        this.g = m(b.condition) ? b.condition : oj;
        this.f = !1
    }
    A(vj, sj);

    function xj(b) {
        var c = uj(this.b);
        this.a && this.a.a.push(c[0], c[1], wa());
        if (null !== this.d) {
            var d = this.d[0] - c[0],
                e = c[1] - this.d[1];
            b = b.map;
            var f = b.a(),
                g = Be(f),
                e = d = [d, e],
                h = g.resolution;
            e[0] *= h;
            e[1] *= h;
            od(d, g.rotation);
            md(d, g.center);
            d = f.g.center(d);
            b.render();
            f.d(d)
        }
        this.d = c
    }

    function yj(b) {
        b = b.map;
        var c = b.a();
        if (0 === this.b.length) {
            var d;
            if (d = !this.f && this.a)
                if (d = this.a, 6 > d.a.length) d = !1;
                else {
                    var e = wa() - 100,
                        f = d.a.length - 3;
                    if (d.a[f + 2] < e) d = !1;
                    else {
                        for (var g = f - 3; 0 < g && d.a[g + 2] > e;) g -= 3;
                        var e = d.a[f + 2] - d.a[g + 2],
                            h = d.a[f] - d.a[g],
                            f = d.a[f + 1] - d.a[g + 1];
                        d.b = Math.atan2(f, h);
                        d.c = Math.sqrt(h * h + f * f) / e;
                        d = .05 < d.c
                    }
                }
            d && (d = (.05 - this.a.c) / -.005, f = this.a.b, g = c.a(), this.e = ej(this.a, g), b.pa(this.e), g = zj(b, g), d = b.e([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.g.center(d), c.d(d));
            Ce(c, -1);
            b.render();
            return !1
        }
        this.d = null;
        return !0
    }

    function wj(b) {
        if (0 < this.b.length && this.g(b)) {
            var c = b.map,
                d = c.a();
            this.d = null;
            this.l || Ce(d, 1);
            c.render();
            null !== this.e && Va(c.t, this.e) && (d.d(b.frameState.viewState.center), this.e = null);
            this.a && (b = this.a, b.a.length = 0, b.b = 0, b.c = 0);
            this.f = 1 < this.b.length;
            return !0
        }
        return !1
    }
    vj.prototype.n = Uc;

    function Aj(b) {
        b = m(b) ? b : {};
        sj.call(this, {
            handleDownEvent: Bj,
            handleDragEvent: Cj,
            handleUpEvent: Dj
        });
        this.d = m(b.condition) ? b.condition : lj;
        this.a = void 0
    }
    A(Aj, sj);

    function Cj(b) {
        if (rj(b)) {
            var c = b.map,
                d = c.f();
            b = b.pixel;
            d = Math.atan2(d[1] / 2 - b[1], b[0] - d[0] / 2);
            if (m(this.a)) {
                b = d - this.a;
                var e = c.a(),
                    f = e.e();
                c.render();
                gj(c, e, f - b)
            }
            this.a = d
        }
    }

    function Dj(b) {
        if (!rj(b)) return !0;
        b = b.map;
        var c = b.a();
        Ce(c, -1);
        var d = c.e(),
            d = c.constrainRotation(d, 0);
        gj(b, c, d, void 0, 250);
        return !1
    }

    function Bj(b) {
        return rj(b) && sc(b.a) && this.d(b) ? (b = b.map, Ce(b.a(), 1), b.render(), this.a = void 0, !0) : !1
    }
    Aj.prototype.n = Uc;

    function Ej() {
        cd.call(this);
        this.p = Kd();
        this.n = -1;
        this.g = {};
        this.l = this.k = 0
    }
    A(Ej, cd);
    Ej.prototype.f = function(b, c) {
        var d = m(c) ? c : [NaN, NaN];
        this.ta(b[0], b[1], d, Infinity);
        return d
    };
    Ej.prototype.$a = Uc;
    Ej.prototype.d = function(b) {
        this.n != this.c && (this.p = this.Zb(this.p), this.n = this.c);
        var c = this.p;
        m(b) ? (b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3]) : b = c;
        return b
    };
    Ej.prototype.transform = function(b, c) {
        this.W(ve(b, c));
        return this
    };

    function Fj(b, c, d, e, f, g) {
        var h = f[0],
            k = f[1],
            n = f[4],
            p = f[5],
            q = f[12];
        f = f[13];
        for (var r = m(g) ? g : [], s = 0; c < d; c += e) {
            var t = b[c],
                x = b[c + 1];
            r[s++] = h * t + n * x + q;
            r[s++] = k * t + p * x + f
        }
        m(g) && r.length != s && (r.length = s);
        return r
    };

    function F() {
        Ej.call(this);
        this.b = "XY";
        this.a = 2;
        this.j = null
    }
    A(F, Ej);

    function Gj(b) {
        if ("XY" == b) return 2;
        if ("XYZ" == b || "XYM" == b) return 3;
        if ("XYZM" == b) return 4
    }
    l = F.prototype;
    l.$a = Uc;
    l.Zb = function(b) {
        var c = this.j,
            d = this.j.length,
            e = this.a;
        b = Dd(Infinity, Infinity, -Infinity, -Infinity, b);
        return Od(b, c, 0, d, e)
    };
    l.Ba = function() {
        return this.j.slice(0, this.a)
    };
    l.Ca = function() {
        return this.j.slice(this.j.length - this.a)
    };
    l.Da = function() {
        return this.b
    };
    l.Zc = function(b) {
        this.l != this.c && (sb(this.g), this.k = 0, this.l = this.c);
        if (0 > b || 0 !== this.k && b <= this.k) return this;
        var c = b.toString();
        if (this.g.hasOwnProperty(c)) return this.g[c];
        var d = this.kb(b);
        if (d.j.length < this.j.length) return this.g[c] = d;
        this.k = b;
        return this
    };
    l.kb = function() {
        return this
    };

    function Hj(b, c, d) {
        b.a = Gj(c);
        b.b = c;
        b.j = d
    }

    function Ij(b, c, d, e) {
        if (m(c)) d = Gj(c);
        else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    b.b = "XY";
                    b.a = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        b.b = c;
        b.a = d
    }
    l.W = function(b) {
        null !== this.j && (b(this.j, this.j, this.a), this.r())
    };
    l.ea = function(b, c) {
        var d = this.j;
        if (null !== d) {
            var e = d.length,
                f = this.a,
                g = m(d) ? d : [],
                h = 0,
                k, n;
            for (k = 0; k < e; k += f)
                for (g[h++] = d[k] + b, g[h++] = d[k + 1] + c, n = k + 2; n < k + f; ++n) g[h++] = d[n];
            m(d) && g.length != h && (g.length = h);
            this.r()
        }
    };

    function Jj(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e) var k = b[c],
            n = b[c + 1],
            f = f + (h * k - g * n),
            g = k,
            h = n;
        return f / 2
    }

    function Kj(b, c, d, e) {
        var f = 0,
            g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
                f = f + Jj(b, c, k, e);
            c = k
        }
        return f
    };

    function Lj(b, c, d, e) {
        b = d - b;
        c = e - c;
        return b * b + c * c
    };

    function Mj(b, c, d, e, f, g, h) {
        var k = b[c],
            n = b[c + 1],
            p = b[d] - k,
            q = b[d + 1] - n;
        if (0 !== p || 0 !== q)
            if (g = ((f - k) * p + (g - n) * q) / (p * p + q * q), 1 < g) c = d;
            else if (0 < g) {
            for (f = 0; f < e; ++f) h[f] = Rb(b[c + f], b[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f) h[f] = b[c + f];
        h.length = e
    }

    function Nj(b, c, d, e, f) {
        var g = b[c],
            h = b[c + 1];
        for (c += e; c < d; c += e) {
            var k = b[c],
                n = b[c + 1],
                g = Lj(g, h, k, n);
            g > f && (f = g);
            g = k;
            h = n
        }
        return f
    }

    function Oj(b, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g];
            f = Nj(b, c, k, e, f);
            c = k
        }
        return f
    }

    function Pj(b, c, d, e, f, g, h, k, n, p, q) {
        if (c == d) return p;
        var r;
        if (0 === f) {
            r = Lj(h, k, b[c], b[c + 1]);
            if (r < p) {
                for (q = 0; q < e; ++q) n[q] = b[c + q];
                n.length = e;
                return r
            }
            return p
        }
        for (var s = m(q) ? q : [NaN, NaN], t = c + e; t < d;)
            if (Mj(b, t - e, t, e, h, k, s), r = Lj(h, k, s[0], s[1]), r < p) {
                p = r;
                for (q = 0; q < e; ++q) n[q] = s[q];
                n.length = e;
                t += e
            } else t += e * Math.max((Math.sqrt(r) - Math.sqrt(p)) / f | 0, 1);
        if (g && (Mj(b, d - e, c, e, h, k, s), r = Lj(h, k, s[0], s[1]), r < p)) {
            p = r;
            for (q = 0; q < e; ++q) n[q] = s[q];
            n.length = e
        }
        return p
    }

    function Qj(b, c, d, e, f, g, h, k, n, p, q) {
        q = m(q) ? q : [NaN, NaN];
        var r, s;
        r = 0;
        for (s = d.length; r < s; ++r) {
            var t = d[r];
            p = Pj(b, c, t, e, f, g, h, k, n, p, q);
            c = t
        }
        return p
    };

    function Rj(b, c) {
        var d = 0,
            e, f;
        e = 0;
        for (f = c.length; e < f; ++e) b[d++] = c[e];
        return d
    }

    function Sj(b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f],
                k;
            for (k = 0; k < e; ++k) b[c++] = h[k]
        }
        return c
    }

    function Tj(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0,
            h, k;
        h = 0;
        for (k = d.length; h < k; ++h) c = Sj(b, c, d[h], e), f[g++] = c;
        f.length = g;
        return f
    };

    function Uj(b, c, d, e, f) {
        f = m(f) ? f : [];
        for (var g = 0; c < d; c += e) f[g++] = b.slice(c, c + e);
        f.length = g;
        return f
    }

    function Vj(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0,
            h, k;
        h = 0;
        for (k = d.length; h < k; ++h) {
            var n = d[h];
            f[g++] = Uj(b, c, n, e, f[g]);
            c = n
        }
        f.length = g;
        return f
    };

    function Wj(b, c, d, e, f, g, h) {
        var k = (d - c) / e;
        if (3 > k) {
            for (; c < d; c += e) g[h++] = b[c], g[h++] = b[c + 1];
            return h
        }
        var n = Array(k);
        n[0] = 1;
        n[k - 1] = 1;
        d = [c, d - e];
        for (var p = 0, q; 0 < d.length;) {
            var r = d.pop(),
                s = d.pop(),
                t = 0,
                x = b[s],
                y = b[s + 1],
                z = b[r],
                B = b[r + 1];
            for (q = s + e; q < r; q += e) {
                var w;
                w = b[q];
                var K = b[q + 1],
                    H = x,
                    D = y,
                    J = z - H,
                    T = B - D;
                if (0 !== J || 0 !== T) {
                    var $ = ((w - H) * J + (K - D) * T) / (J * J + T * T);
                    1 < $ ? (H = z, D = B) : 0 < $ && (H += J * $, D += T * $)
                }
                w = Lj(w, K, H, D);
                w > t && (p = q, t = w)
            }
            t > f && (n[(p - c) / e] = 1, s + e < p && d.push(s, p), p + e < r && d.push(p, r))
        }
        for (q = 0; q < k; ++q) n[q] && (g[h++] = b[c + q *
            e], g[h++] = b[c + q * e + 1]);
        return h
    }

    function Xj(b, c, d, e, f, g, h, k) {
        var n, p;
        n = 0;
        for (p = d.length; n < p; ++n) {
            var q = d[n];
            a: {
                var r = b,
                    s = q,
                    t = e,
                    x = f,
                    y = g;
                if (c != s) {
                    var z = x * Math.round(r[c] / x),
                        B = x * Math.round(r[c + 1] / x);
                    c += t;
                    y[h++] = z;
                    y[h++] = B;
                    var w = void 0,
                        K = void 0;
                    do
                        if (w = x * Math.round(r[c] / x), K = x * Math.round(r[c + 1] / x), c += t, c == s) {
                            y[h++] = w;
                            y[h++] = K;
                            break a
                        }
                    while (w == z && K == B);
                    for (; c < s;) {
                        var H, D;
                        H = x * Math.round(r[c] / x);
                        D = x * Math.round(r[c + 1] / x);
                        c += t;
                        if (H != w || D != K) {
                            var J = w - z,
                                T = K - B,
                                $ = H - z,
                                L = D - B;
                            J * L == T * $ && (0 > J && $ < J || J == $ || 0 < J && $ > J) && (0 > T && L < T || T == L || 0 < T && L > T) || (y[h++] =
                                w, y[h++] = K, z = w, B = K);
                            w = H;
                            K = D
                        }
                    }
                    y[h++] = w;
                    y[h++] = K
                }
            }
            k.push(h);
            c = q
        }
        return h
    };

    function Yj(b, c) {
        F.call(this);
        this.e = this.q = -1;
        this.be(b, c)
    }
    A(Yj, F);
    l = Yj.prototype;
    l.clone = function() {
        var b = new Yj(null);
        Zj(b, this.b, this.j.slice());
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        this.e != this.c && (this.q = Math.sqrt(Nj(this.j, 0, this.j.length, this.a, 0)), this.e = this.c);
        return Pj(this.j, 0, this.j.length, this.a, this.q, !0, b, c, d, e)
    };
    l.sh = function() {
        return Jj(this.j, 0, this.j.length, this.a)
    };
    l.ma = function() {
        return Uj(this.j, 0, this.j.length, this.a)
    };
    l.kb = function(b) {
        var c = [];
        c.length = Wj(this.j, 0, this.j.length, this.a, b, c, 0);
        b = new Yj(null);
        Zj(b, "XY", c);
        return b
    };
    l.A = function() {
        return "LinearRing"
    };
    l.be = function(b, c) {
        null === b ? Zj(this, "XY", null) : (Ij(this, c, b, 1), null === this.j && (this.j = []), this.j.length = Sj(this.j, 0, b, this.a), this.r())
    };

    function Zj(b, c, d) {
        Hj(b, c, d);
        b.r()
    };

    function G(b, c) {
        F.call(this);
        this.Hb(b, c)
    }
    A(G, F);
    l = G.prototype;
    l.clone = function() {
        var b = new G(null);
        ak(b, this.b, this.j.slice());
        return b
    };
    l.ta = function(b, c, d, e) {
        var f = this.j;
        b = Lj(b, c, f[0], f[1]);
        if (b < e) {
            e = this.a;
            for (c = 0; c < e; ++c) d[c] = f[c];
            d.length = e;
            return b
        }
        return e
    };
    l.wa = function() {
        return null === this.j ? [] : this.j.slice()
    };
    l.Zb = function(b) {
        return Ld(this.j, b)
    };
    l.A = function() {
        return "Point"
    };
    l.Q = function(b) {
        return Id(b, this.j[0], this.j[1])
    };
    l.Hb = function(b, c) {
        null === b ? ak(this, "XY", null) : (Ij(this, c, b, 0), null === this.j && (this.j = []), this.j.length = Rj(this.j, b), this.r())
    };

    function ak(b, c, d) {
        Hj(b, c, d);
        b.r()
    };

    function bk(b, c, d, e, f) {
        return !Pd(f, function(f) {
            return !ck(b, c, d, e, f[0], f[1])
        })
    }

    function ck(b, c, d, e, f, g) {
        for (var h = !1, k = b[d - e], n = b[d - e + 1]; c < d; c += e) {
            var p = b[c],
                q = b[c + 1];
            n > g != q > g && f < (p - k) * (g - n) / (q - n) + k && (h = !h);
            k = p;
            n = q
        }
        return h
    }

    function dk(b, c, d, e, f, g) {
        if (0 === d.length || !ck(b, c, d[0], e, f, g)) return !1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c)
            if (ck(b, d[c - 1], d[c], e, f, g)) return !1;
        return !0
    };

    function fk(b, c, d, e, f, g, h) {
        var k, n, p, q, r, s = f[g + 1],
            t = [],
            x = d[0];
        p = b[x - e];
        r = b[x - e + 1];
        for (k = c; k < x; k += e) {
            q = b[k];
            n = b[k + 1];
            if (s <= r && n <= s || r <= s && s <= n) p = (s - r) / (n - r) * (q - p) + p, t.push(p);
            p = q;
            r = n
        }
        x = NaN;
        r = -Infinity;
        t.sort();
        p = t[0];
        k = 1;
        for (n = t.length; k < n; ++k) {
            q = t[k];
            var y = Math.abs(q - p);
            y > r && (p = (p + q) / 2, dk(b, c, d, e, p, s) && (x = p, r = y));
            p = q
        }
        isNaN(x) && (x = f[g]);
        return m(h) ? (h.push(x, s), h) : [x, s]
    };

    function gk(b, c, d, e, f, g) {
        for (var h = [b[c], b[c + 1]], k = [], n; c + e < d; c += e) {
            k[0] = b[c + e];
            k[1] = b[c + e + 1];
            if (n = f.call(g, h, k)) return n;
            h[0] = k[0];
            h[1] = k[1]
        }
        return !1
    };

    function hk(b, c, d, e, f) {
        var g = Od(Kd(), b, c, d, e);
        return Wd(f, g) ? Hd(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : gk(b, c, d, e, function(b, c) {
            var d = !1,
                e = Jd(f, b),
                g = Jd(f, c);
            if (1 === e || 1 === g) d = !0;
            else {
                var r = f[0],
                    s = f[1],
                    t = f[2],
                    x = f[3],
                    y = c[0],
                    z = c[1],
                    B = (z - b[1]) / (y - b[0]);
                g & 2 && !(e & 2) ? (s = y - (z - x) / B, d = s >= r && s <= t) : g & 4 && !(e & 4) ? (r = z - (y - t) * B, d = r >= s && r <= x) : g & 8 && !(e & 8) ? (s = y - (z - s) / B, d = s >= r && s <= t) : g & 16 && !(e & 16) && (r = z - (y - r) * B, d = r >= s && r <= x)
            }
            return d
        }) : !1
    }

    function ik(b, c, d, e, f) {
        var g = d[0];
        if (!(hk(b, c, g, e, f) || ck(b, c, g, e, f[0], f[1]) || ck(b, c, g, e, f[0], f[3]) || ck(b, c, g, e, f[2], f[1]) || ck(b, c, g, e, f[2], f[3]))) return !1;
        if (1 === d.length) return !0;
        c = 1;
        for (g = d.length; c < g; ++c)
            if (bk(b, d[c - 1], d[c], e, f)) return !1;
        return !0
    };

    function jk(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e) var k = b[c],
            n = b[c + 1],
            f = f + (k - g) * (n + h),
            g = k,
            h = n;
        return 0 < f
    }

    function kk(b, c, d, e) {
        var f = 0;
        e = m(e) ? e : !1;
        var g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g],
                f = jk(b, f, k, d);
            if (0 === g) {
                if (e && f || !e && !f) return !1
            } else if (e && !f || !e && f) return !1;
            f = k
        }
        return !0
    }

    function lk(b, c, d, e, f) {
        f = m(f) ? f : !1;
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
                n = jk(b, c, k, e);
            if (0 === g ? f && n || !f && !n : f && !n || !f && n)
                for (var n = b, p = k, q = e; c < p - q;) {
                    var r;
                    for (r = 0; r < q; ++r) {
                        var s = n[c + r];
                        n[c + r] = n[p - q + r];
                        n[p - q + r] = s
                    }
                    c += q;
                    p -= q
                }
            c = k
        }
        return c
    }

    function mk(b, c, d, e) {
        var f = 0,
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) f = lk(b, f, c[g], d, e);
        return f
    };

    function I(b, c) {
        F.call(this);
        this.e = [];
        this.o = -1;
        this.s = null;
        this.v = this.t = this.u = -1;
        this.q = null;
        this.Ib(b, c)
    }
    A(I, F);
    l = I.prototype;
    l.Jf = function(b) {
        null === this.j ? this.j = b.j.slice() : Ya(this.j, b.j);
        this.e.push(this.j.length);
        this.r()
    };
    l.clone = function() {
        var b = new I(null);
        nk(b, this.b, this.j.slice(), this.e.slice());
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        this.t != this.c && (this.u = Math.sqrt(Oj(this.j, 0, this.e, this.a, 0)), this.t = this.c);
        return Qj(this.j, 0, this.e, this.a, this.u, !0, b, c, d, e)
    };
    l.$a = function(b, c) {
        return dk(ok(this), 0, this.e, this.a, b, c)
    };
    l.vh = function() {
        return Kj(ok(this), 0, this.e, this.a)
    };
    l.qc = function(b) {
        var c;
        m(b) ? (c = ok(this).slice(), lk(c, 0, this.e, this.a, b)) : c = this.j;
        return Vj(c, 0, this.e, this.a)
    };

    function pk(b) {
        if (b.o != b.c) {
            var c = Rd(b.d());
            b.s = fk(ok(b), 0, b.e, b.a, c, 0);
            b.o = b.c
        }
        return b.s
    }
    l.Wf = function() {
        return new G(pk(this))
    };
    l.$f = function() {
        return this.e.length
    };
    l.Zf = function(b) {
        if (0 > b || this.e.length <= b) return null;
        var c = new Yj(null);
        Zj(c, this.b, this.j.slice(0 === b ? 0 : this.e[b - 1], this.e[b]));
        return c
    };
    l.ec = function() {
        var b = this.b,
            c = this.j,
            d = this.e,
            e = [],
            f = 0,
            g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
                n = new Yj(null);
            Zj(n, b, c.slice(f, k));
            e.push(n);
            f = k
        }
        return e
    };

    function ok(b) {
        if (b.v != b.c) {
            var c = b.j;
            kk(c, b.e, b.a) ? b.q = c : (b.q = c.slice(), b.q.length = lk(b.q, 0, b.e, b.a));
            b.v = b.c
        }
        return b.q
    }
    l.kb = function(b) {
        var c = [],
            d = [];
        c.length = Xj(this.j, 0, this.e, this.a, Math.sqrt(b), c, 0, d);
        b = new I(null);
        nk(b, "XY", c, d);
        return b
    };
    l.A = function() {
        return "Polygon"
    };
    l.Q = function(b) {
        return ik(ok(this), 0, this.e, this.a, b)
    };
    l.Ib = function(b, c) {
        if (null === b) nk(this, "XY", null, this.e);
        else {
            Ij(this, c, b, 2);
            null === this.j && (this.j = []);
            var d = Tj(this.j, 0, b, this.a, this.e);
            this.j.length = 0 === d.length ? 0 : d[d.length - 1];
            this.r()
        }
    };

    function nk(b, c, d, e) {
        Hj(b, c, d);
        b.e = e;
        b.r()
    }

    function qk(b, c, d, e) {
        var f = m(e) ? e : 32;
        e = [];
        var g;
        for (g = 0; g < f; ++g) Ya(e, b.offset(c, d, 2 * Math.PI * g / f));
        e.push(e[0], e[1]);
        b = new I(null);
        nk(b, "XY", e, [e.length]);
        return b
    };

    function rk(b, c, d, e, f, g, h) {
        kc.call(this, b, c);
        this.vectorContext = d;
        this.a = e;
        this.frameState = f;
        this.context = g;
        this.glContext = h
    }
    A(rk, kc);

    function sk(b) {
        this.b = this.c = this.e = this.d = this.a = null;
        this.i = b
    }
    A(sk, fc);

    function tk(b) {
        var c = b.e,
            d = b.c;
        b = Ra([c, [c[0], d[1]], d, [d[0], c[1]]], b.a.e, b.a);
        b[4] = b[0].slice();
        return new I([b])
    }
    sk.prototype.B = function() {
        this.setMap(null)
    };
    sk.prototype.f = function(b) {
        var c = this.b,
            d = this.i;
        b.vectorContext.Dd(Infinity, function(b) {
            b.Ga(d.e, d.b);
            b.ya(d.c);
            b.Ab(c, null)
        })
    };
    sk.prototype.G = function() {
        return this.b
    };

    function uk(b) {
        null === b.a || null === b.e || null === b.c || b.a.render()
    }
    sk.prototype.setMap = function(b) {
        null !== this.d && (Pc(this.d), this.d = null, this.a.render(), this.a = null);
        this.a = b;
        null !== this.a && (this.d = C(b, "postcompose", this.f, !1, this), uk(this))
    };

    function vk(b, c) {
        kc.call(this, b);
        this.coordinate = c
    }
    A(vk, kc);

    function wk(b) {
        sj.call(this, {
            handleDownEvent: xk,
            handleDragEvent: yk,
            handleUpEvent: zk
        });
        b = m(b) ? b : {};
        this.d = new sk(m(b.style) ? b.style : null);
        this.a = null;
        this.f = m(b.condition) ? b.condition : Vc
    }
    A(wk, sj);

    function yk(b) {
        if (rj(b)) {
            var c = this.d;
            b = b.pixel;
            c.e = this.a;
            c.c = b;
            c.b = tk(c);
            uk(c)
        }
    }
    wk.prototype.G = function() {
        return this.d.G()
    };
    wk.prototype.e = da;

    function zk(b) {
        if (!rj(b)) return !0;
        this.d.setMap(null);
        var c = b.pixel[0] - this.a[0],
            d = b.pixel[1] - this.a[1];
        64 <= c * c + d * d && (this.e(b), this.dispatchEvent(new vk("boxend", b.coordinate)));
        return !1
    }

    function xk(b) {
        if (rj(b) && sc(b.a) && this.f(b)) {
            this.a = b.pixel;
            this.d.setMap(b.map);
            var c = this.d,
                d = this.a;
            c.e = this.a;
            c.c = d;
            c.b = tk(c);
            uk(c);
            this.dispatchEvent(new vk("boxstart", b.coordinate));
            return !0
        }
        return !1
    };

    function Ak() {
        this.c = -1
    };

    function Bk() {
        this.c = -1;
        this.c = 64;
        this.a = Array(4);
        this.e = Array(this.c);
        this.d = this.b = 0;
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.d = this.b = 0
    }
    A(Bk, Ak);

    function Ck(b, c, d) {
        d || (d = 0);
        var e = Array(16);
        if (ma(c))
            for (var f = 0; 16 > f; ++f) e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24;
        else
            for (f = 0; 16 > f; ++f) e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
        c = b.a[0];
        d = b.a[1];
        var f = b.a[2],
            g = b.a[3],
            h = 0,
            h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^
            c)) + e[3] + 3250441966 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f +
            (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
        c = d + (h << 5 & 4294967295 |
            h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
        d = f + (h << 20 & 4294967295 |
            h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
        f = g + (h << 14 & 4294967295 |
            h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^
            c ^ d) + e[7] + 4139469664 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
        c = d +
            (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
        b.a[0] = b.a[0] + c & 4294967295;
        b.a[1] = b.a[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
        b.a[2] = b.a[2] + f & 4294967295;
        b.a[3] = b.a[3] + g & 4294967295
    }

    function Dk(b, c) {
        var d;
        m(d) || (d = c.length);
        for (var e = d - b.c, f = b.e, g = b.b, h = 0; h < d;) {
            if (0 == g)
                for (; h <= e;) Ck(b, c, h), h += b.c;
            if (ma(c))
                for (; h < d;) {
                    if (f[g++] = c.charCodeAt(h++), g == b.c) {
                        Ck(b, f);
                        g = 0;
                        break
                    }
                } else
                    for (; h < d;)
                        if (f[g++] = c[h++], g == b.c) {
                            Ck(b, f);
                            g = 0;
                            break
                        }
        }
        b.b = g;
        b.d += d
    };

    function Ek(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.d = b.lineCap;
        this.b = m(b.lineDash) ? b.lineDash : null;
        this.e = b.lineJoin;
        this.i = b.miterLimit;
        this.c = b.width;
        this.f = void 0
    }
    Ek.prototype.Cb = function() {
        if (!m(this.f)) {
            var b = "s" + (null === this.a ? "-" : Qf(this.a)) + "," + (m(this.d) ? this.d.toString() : "-") + "," + (null === this.b ? "-" : this.b.toString()) + "," + (m(this.e) ? this.e : "-") + "," + (m(this.i) ? this.i.toString() : "-") + "," + (m(this.c) ? this.c.toString() : "-"),
                c = new Bk;
            Dk(c, b);
            var d = Array((56 > c.b ? c.c : 2 * c.c) - c.b);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b) d[b] = 0;
            for (var e = 8 * c.d, b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
            Dk(c, d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)
                for (var f = 0; 32 > f; f += 8) d[e++] = c.a[b] >>> f & 255;
            if (8192 > d.length) c = String.fromCharCode.apply(null, d);
            else
                for (c = "", b = 0; b < d.length; b += 8192) c += String.fromCharCode.apply(null, $a(d, b, b + 8192));
            this.f = c
        }
        return this.f
    };
    var Fk = [0, 0, 0, 1],
        Gk = [],
        Hk = [0, 0, 0, 1];

    function Ik(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.c = void 0
    }
    Ik.prototype.Cb = function() {
        m(this.c) || (this.c = "f" + (null === this.a ? "-" : Qf(this.a)));
        return this.c
    };

    function Jk(b) {
        b = m(b) ? b : {};
        this.i = this.a = this.d = null;
        this.e = m(b.fill) ? b.fill : null;
        this.c = m(b.stroke) ? b.stroke : null;
        this.b = b.radius;
        this.l = [0, 0];
        this.q = this.p = this.D = null;
        var c = b.atlasManager,
            d, e = null,
            f, g = 0;
        null !== this.c && (f = Qf(this.c.a), g = this.c.c, m(g) || (g = 1), e = this.c.b, xf || (e = null));
        var h = 2 * (this.b + g) + 1;
        f = {
            strokeStyle: f,
            Ie: g,
            size: h,
            lineDash: e
        };
        m(c) ? (h = Math.round(h), (e = null === this.e) && (d = ua(this.Ed, this, f)), g = this.Cb(), f = c.add(g, h, h, ua(this.Fd, this, f), d), this.a = f.image, this.l = [f.offsetX, f.offsetY],
            d = f.image.width, this.i = e ? f.Xi : this.a) : (this.a = ff("CANVAS"), this.a.height = h, this.a.width = h, d = h = this.a.width, c = this.a.getContext("2d"), this.Fd(f, c, 0, 0), null === this.e ? (c = this.i = ff("CANVAS"), c.height = f.size, c.width = f.size, c = c.getContext("2d"), this.Ed(f, c, 0, 0)) : this.i = this.a);
        this.D = [h / 2, h / 2];
        this.p = [h, h];
        this.q = [d, d];
        Pi.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }
    A(Jk, Pi);
    l = Jk.prototype;
    l.Bb = function() {
        return this.D
    };
    l.dd = function() {
        return this.i
    };
    l.tc = function() {
        return this.a
    };
    l.uc = function() {
        return 2
    };
    l.Xc = function() {
        return this.q
    };
    l.Jb = function() {
        return this.l
    };
    l.cb = function() {
        return this.p
    };
    l.Td = da;
    l.load = da;
    l.Me = da;
    l.Fd = function(b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.b, 0, 2 * Math.PI, !0);
        null !== this.e && (c.fillStyle = Qf(this.e.a), c.fill());
        null !== this.c && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.Ie, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.Ed = function(b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.b, 0, 2 * Math.PI, !0);
        c.fillStyle = Fk;
        c.fill();
        null !== this.c && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.Ie, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.Cb = function() {
        var b = null === this.c ? "-" : this.c.Cb(),
            c = null === this.e ? "-" : this.e.Cb();
        if (null === this.d || b != this.d[1] || c != this.d[2] || this.b != this.d[3]) this.d = ["c" + b + c + (m(this.b) ? this.b.toString() : "-"), b, c, this.b];
        return this.d[0]
    };

    function Kk(b) {
        b = m(b) ? b : {};
        this.f = null;
        this.d = Lk;
        m(b.geometry) && Mk(this, b.geometry);
        this.e = m(b.fill) ? b.fill : null;
        this.i = m(b.image) ? b.image : null;
        this.b = m(b.stroke) ? b.stroke : null;
        this.c = m(b.text) ? b.text : null;
        this.a = b.zIndex
    }
    Kk.prototype.G = function() {
        return this.f
    };
    Kk.prototype.g = function() {
        return this.i
    };

    function Mk(b, c) {
        oa(c) ? b.d = c : ma(c) ? b.d = function(b) {
            return b.get(c)
        } : null === c ? b.d = Lk : m(c) && (b.d = function() {
            return c
        });
        b.f = c
    }

    function Nk(b) {
        oa(b) || (b = ja(b) ? b : [b], b = Tc(b));
        return b
    }

    function Ok() {
        var b = new Ik({
                color: "rgba(255,255,255,0.4)"
            }),
            c = new Ek({
                color: "#3399CC",
                width: 1.25
            }),
            d = [new Kk({
                image: new Jk({
                    fill: b,
                    stroke: c,
                    radius: 5
                }),
                fill: b,
                stroke: c
            })];
        Ok = function() {
            return d
        };
        return d
    }

    function Pk() {
        var b = {},
            c = [255, 255, 255, 1],
            d = [0, 153, 255, 1];
        b.Polygon = [new Kk({
            fill: new Ik({
                color: [255, 255, 255, .5]
            })
        })];
        b.MultiPolygon = b.Polygon;
        b.LineString = [new Kk({
            stroke: new Ek({
                color: c,
                width: 5
            })
        }), new Kk({
            stroke: new Ek({
                color: d,
                width: 3
            })
        })];
        b.MultiLineString = b.LineString;
        b.Circle = b.Polygon.concat(b.LineString);
        b.Point = [new Kk({
            image: new Jk({
                radius: 6,
                fill: new Ik({
                    color: d
                }),
                stroke: new Ek({
                    color: c,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        })];
        b.MultiPoint = b.Point;
        b.GeometryCollection = b.Polygon.concat(b.Point);
        return b
    }

    function Lk(b) {
        return b.G()
    };

    function Qk(b) {
        var c = m(b) ? b : {};
        b = m(c.condition) ? c.condition : pj;
        c = m(c.style) ? c.style : new Kk({
            stroke: new Ek({
                color: [0, 0, 255, 1]
            })
        });
        wk.call(this, {
            condition: b,
            style: c
        })
    }
    A(Qk, wk);
    Qk.prototype.e = function() {
        var b = this.p,
            c = b.a(),
            d = this.G().d(),
            e = Rd(d),
            f = b.f(),
            d = Math.max((d[2] - d[0]) / f[0], Ud(d) / f[1]),
            d = c.constrainResolution(d, 0, void 0);
        ij(b, c, d, e, 200)
    };

    function Rk(b) {
        fj.call(this, {
            handleEvent: Sk
        });
        b = m(b) ? b : {};
        this.a = m(b.condition) ? b.condition : Zc(oj, qj);
        this.b = m(b.pixelDelta) ? b.pixelDelta : 128
    }
    A(Rk, fj);

    function Sk(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.e;
            if (this.a(b) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = b.map,
                    c = e.a(),
                    f = Be(c),
                    g = f.resolution * this.b,
                    h = 0,
                    k = 0;
                40 == d ? k = -g : 37 == d ? h = -g : 39 == d ? h = g : k = g;
                d = [h, k];
                od(d, f.rotation);
                f = c.a();
                m(f) && (m(100) && e.pa(Ge({
                    source: f,
                    duration: 100,
                    easing: Fe
                })), e = c.g.center([f[0] + d[0], f[1] + d[1]]), c.d(e));
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };

    function Tk(b) {
        fj.call(this, {
            handleEvent: Uk
        });
        b = m(b) ? b : {};
        this.b = m(b.condition) ? b.condition : qj;
        this.a = m(b.delta) ? b.delta : 1;
        this.d = m(b.duration) ? b.duration : 100
    }
    A(Tk, fj);

    function Uk(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.k;
            if (this.b(b) && (43 == d || 45 == d)) {
                c = b.map;
                d = 43 == d ? this.a : -this.a;
                c.render();
                var e = c.a();
                hj(c, e, d, void 0, this.d);
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };

    function Vk(b) {
        fj.call(this, {
            handleEvent: Wk
        });
        b = m(b) ? b : {};
        this.a = 0;
        this.g = m(b.duration) ? b.duration : 250;
        this.d = null;
        this.e = this.b = void 0
    }
    A(Vk, fj);

    function Wk(b) {
        var c = !1;
        if ("mousewheel" == b.type) {
            var c = b.map,
                d = b.a;
            this.d = b.coordinate;
            this.a += d.D;
            m(this.b) || (this.b = wa());
            d = Math.max(80 - (wa() - this.b), 0);
            ca.clearTimeout(this.e);
            this.e = ca.setTimeout(ua(this.f, this, c), d);
            b.preventDefault();
            c = !0
        }
        return !c
    }
    Vk.prototype.f = function(b) {
        var c = Pb(this.a, -1, 1),
            d = b.a();
        b.render();
        hj(b, d, -c, this.d, this.g);
        this.a = 0;
        this.d = null;
        this.e = this.b = void 0
    };

    function Xk(b) {
        sj.call(this, {
            handleDownEvent: Yk,
            handleDragEvent: Zk,
            handleUpEvent: $k
        });
        b = m(b) ? b : {};
        this.d = null;
        this.e = void 0;
        this.a = !1;
        this.f = 0;
        this.g = m(b.threshold) ? b.threshold : .3
    }
    A(Xk, sj);

    function Zk(b) {
        var c = 0,
            d = this.b[0],
            e = this.b[1],
            d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
        m(this.e) && (c = d - this.e, this.f += c, !this.a && Math.abs(this.f) > this.g && (this.a = !0));
        this.e = d;
        b = b.map;
        d = gg(b.b);
        e = uj(this.b);
        e[0] -= d.x;
        e[1] -= d.y;
        this.d = b.e(e);
        this.a && (d = b.a(), e = d.e(), b.render(), gj(b, d, e + c, this.d))
    }

    function $k(b) {
        if (2 > this.b.length) {
            b = b.map;
            var c = b.a();
            Ce(c, -1);
            if (this.a) {
                var d = c.e(),
                    e = this.d,
                    d = c.constrainRotation(d, 0);
                gj(b, c, d, e, 250)
            }
            return !1
        }
        return !0
    }

    function Yk(b) {
        return 2 <= this.b.length ? (b = b.map, this.d = null, this.e = void 0, this.a = !1, this.f = 0, this.l || Ce(b.a(), 1), b.render(), !0) : !1
    }
    Xk.prototype.n = Uc;

    function al(b) {
        sj.call(this, {
            handleDownEvent: bl,
            handleDragEvent: cl,
            handleUpEvent: dl
        });
        b = m(b) ? b : {};
        this.d = null;
        this.f = m(b.duration) ? b.duration : 400;
        this.a = void 0;
        this.e = 1
    }
    A(al, sj);

    function cl(b) {
        var c = 1,
            d = this.b[0],
            e = this.b[1],
            f = d.clientX - e.clientX,
            d = d.clientY - e.clientY,
            f = Math.sqrt(f * f + d * d);
        m(this.a) && (c = this.a / f);
        this.a = f;
        1 != c && (this.e = c);
        b = b.map;
        var f = b.a(),
            d = f.b(),
            e = gg(b.b),
            g = uj(this.b);
        g[0] -= e.x;
        g[1] -= e.y;
        this.d = b.e(g);
        b.render();
        ij(b, f, d * c, this.d)
    }

    function dl(b) {
        if (2 > this.b.length) {
            b = b.map;
            var c = b.a();
            Ce(c, -1);
            var d = c.b(),
                e = this.d,
                f = this.f,
                d = c.constrainResolution(d, 0, this.e - 1);
            ij(b, c, d, e, f);
            return !1
        }
        return !0
    }

    function bl(b) {
        return 2 <= this.b.length ? (b = b.map, this.d = null, this.a = void 0, this.e = 1, this.l || Ce(b.a(), 1), b.render(), !0) : !1
    }
    al.prototype.n = Uc;

    function el(b) {
        var c = m(b) ? b : {};
        b = wb(c);
        delete b.layers;
        c = c.layers;
        E.call(this, b);
        this.a = null;
        C(this, ld("layers"), this.vg, !1, this);
        null != c ? ja(c) && (c = new Jf(c.slice())) : c = new Jf;
        this.b(c)
    }
    A(el, E);
    l = el.prototype;
    l.Od = function() {
        this.e() && this.r()
    };
    l.vg = function() {
        null !== this.a && (Oa(mb(this.a), Pc), this.a = null);
        var b = this.qb();
        if (null != b) {
            this.a = {
                add: C(b, "add", this.ug, !1, this),
                remove: C(b, "remove", this.wg, !1, this)
            };
            var b = b.a,
                c, d, e;
            c = 0;
            for (d = b.length; c < d; c++) e = b[c], this.a[v(e).toString()] = C(e, ["propertychange", "change"], this.Od, !1, this)
        }
        this.r()
    };
    l.ug = function(b) {
        b = b.element;
        this.a[v(b).toString()] = C(b, ["propertychange", "change"], this.Od, !1, this);
        this.r()
    };
    l.wg = function(b) {
        b = v(b.element).toString();
        Pc(this.a[b]);
        delete this.a[b];
        this.r()
    };
    l.qb = function() {
        return this.get("layers")
    };
    el.prototype.getLayers = el.prototype.qb;
    el.prototype.b = function(b) {
        this.set("layers", b)
    };
    el.prototype.setLayers = el.prototype.b;
    el.prototype.g = function(b) {
        var c = m(b) ? b : [],
            d = c.length;
        this.qb().forEach(function(b) {
            b.g(c)
        });
        b = xi(this);
        var e, f;
        for (e = c.length; d < e; d++) f = c[d], f.brightness = Pb(f.brightness + b.brightness, -1, 1), f.contrast *= b.contrast, f.hue += b.hue, f.opacity *= b.opacity, f.saturation *= b.saturation, f.visible = f.visible && b.visible, f.maxResolution = Math.min(f.maxResolution, b.maxResolution), f.minResolution = Math.max(f.minResolution, b.minResolution), m(b.extent) && (f.extent = m(f.extent) ? Vd(f.extent, b.extent) : b.extent);
        return c
    };
    el.prototype.k = function() {
        return "ready"
    };

    function fl(b) {
        ce.call(this, {
            code: b,
            units: "m",
            extent: gl,
            global: !0,
            worldExtent: hl
        })
    }
    A(fl, ce);
    fl.prototype.getPointResolution = function(b, c) {
        var d = c[1] / 6378137;
        return b / ((Math.exp(d) + Math.exp(-d)) / 2)
    };
    var il = 6378137 * Math.PI,
        gl = [-il, -il, il, il],
        hl = [-180, -85, 180, 85],
        oe = Ra("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "), function(b) {
            return new fl(b)
        });

    function pe(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 6378137 * Math.PI * b[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (b[f + 1] + 90) / 360));
        return c
    }

    function qe(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 180 * b[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(b[f + 1] / 6378137)) / Math.PI - 90;
        return c
    };

    function jl(b, c) {
        ce.call(this, {
            code: b,
            units: "degrees",
            extent: kl,
            axisOrientation: c,
            global: !0,
            worldExtent: kl
        })
    }
    A(jl, ce);
    jl.prototype.getPointResolution = function(b) {
        return b
    };
    var kl = [-180, -90, 180, 90],
        re = [new jl("CRS:84"), new jl("EPSG:4326", "neu"), new jl("urn:ogc:def:crs:EPSG::4326", "neu"), new jl("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new jl("urn:ogc:def:crs:OGC:1.3:CRS84"), new jl("urn:ogc:def:crs:OGC:2:84"), new jl("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new jl("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function ll() {
        fe(oe);
        fe(re);
        ne()
    };

    function ml(b) {
        yi.call(this, m(b) ? b : {})
    }
    A(ml, yi);

    function nl(b) {
        b = m(b) ? b : {};
        var c = wb(b);
        delete c.preload;
        delete c.useInterimTilesOnError;
        yi.call(this, c);
        this.p(m(b.preload) ? b.preload : 0);
        this.M(m(b.useInterimTilesOnError) ? b.useInterimTilesOnError : !0)
    }
    A(nl, yi);
    nl.prototype.b = function() {
        return this.get("preload")
    };
    nl.prototype.getPreload = nl.prototype.b;
    nl.prototype.p = function(b) {
        this.set("preload", b)
    };
    nl.prototype.setPreload = nl.prototype.p;
    nl.prototype.d = function() {
        return this.get("useInterimTilesOnError")
    };
    nl.prototype.getUseInterimTilesOnError = nl.prototype.d;
    nl.prototype.M = function(b) {
        this.set("useInterimTilesOnError", b)
    };
    nl.prototype.setUseInterimTilesOnError = nl.prototype.M;

    function pl(b) {
        b = m(b) ? b : {};
        var c = wb(b);
        delete c.style;
        delete c.renderBuffer;
        delete c.updateWhileAnimating;
        yi.call(this, c);
        this.d = m(b.renderBuffer) ? b.renderBuffer : 100;
        this.M = null;
        this.b = void 0;
        this.O(b.style);
        this.p = m(b.updateWhileAnimating) ? b.updateWhileAnimating : !1
    }
    A(pl, yi);
    pl.prototype.O = function(b) {
        this.M = m(b) ? b : Ok;
        this.b = null === b ? void 0 : Nk(this.M);
        this.r()
    };

    function ql(b, c, d, e, f) {
        this.q = {};
        this.b = b;
        this.p = c;
        this.f = d;
        this.o = e;
        this.Ha = f;
        this.e = this.a = this.c = this.K = this.ia = this.J = null;
        this.O = this.M = this.D = this.u = this.t = this.s = 0;
        this.P = !1;
        this.i = this.V = 0;
        this.$ = !1;
        this.v = 0;
        this.d = "";
        this.k = this.n = this.ba = this.aa = 0;
        this.T = this.C = this.g = null;
        this.l = [];
        this.za = td()
    }

    function rl(b, c, d) {
        if (null !== b.e) {
            c = Fj(c, 0, d, 2, b.o, b.l);
            d = b.b;
            var e = b.za,
                f = d.globalAlpha;
            1 != b.D && (d.globalAlpha = f * b.D);
            var g = b.V;
            b.P && (g += b.Ha);
            var h, k;
            h = 0;
            for (k = c.length; h < k; h += 2) {
                var n = c[h] - b.s,
                    p = c[h + 1] - b.t;
                b.$ && (n = n + .5 | 0, p = p + .5 | 0);
                if (0 !== g || 1 != b.i) {
                    var q = n + b.s,
                        r = p + b.t;
                    Bi(e, q, r, b.i, b.i, g, -q, -r);
                    d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
                }
                d.drawImage(b.e, b.M, b.O, b.v, b.u, n, p, b.v, b.u)
            }
            0 === g && 1 == b.i || d.setTransform(1, 0, 0, 1, 0, 0);
            1 != b.D && (d.globalAlpha = f)
        }
    }

    function sl(b, c, d, e) {
        var f = 0;
        if (null !== b.T && "" !== b.d) {
            null === b.g || tl(b, b.g);
            null === b.C || ul(b, b.C);
            var g = b.T,
                h = b.b,
                k = b.K;
            null === k ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, b.K = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            }) : (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline));
            c = Fj(c, f, d, e, b.o, b.l);
            for (g = b.b; f < d; f += e) {
                h = c[f] + b.aa;
                k = c[f + 1] + b.ba;
                if (0 !== b.n || 1 != b.k) {
                    var n = Bi(b.za, h, k, b.k, b.k, b.n, -h, -k);
                    g.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                }
                null === b.C || g.strokeText(b.d, h, k);
                null === b.g || g.fillText(b.d, h, k)
            }
            0 === b.n && 1 == b.k || g.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function vl(b, c, d, e, f, g) {
        var h = b.b;
        b = Fj(c, d, e, f, b.o, b.l);
        h.moveTo(b[0], b[1]);
        for (c = 2; c < b.length; c += 2) h.lineTo(b[c], b[c + 1]);
        g && h.lineTo(b[0], b[1]);
        return e
    }

    function wl(b, c, d, e, f) {
        var g = b.b,
            h, k;
        h = 0;
        for (k = e.length; h < k; ++h) d = vl(b, c, d, e[h], f, !0), g.closePath();
        return d
    }
    l = ql.prototype;
    l.Dd = function(b, c) {
        var d = b.toString(),
            e = this.q[d];
        m(e) ? e.push(c) : this.q[d] = [c]
    };
    l.$b = function(b) {
        if (Wd(this.f, b.d())) {
            if (null !== this.c || null !== this.a) {
                null === this.c || tl(this, this.c);
                null === this.a || ul(this, this.a);
                var c;
                c = b.j;
                c = null === c ? null : Fj(c, 0, c.length, b.a, this.o, this.l);
                var d = c[2] - c[0],
                    e = c[3] - c[1],
                    d = Math.sqrt(d * d + e * e),
                    e = this.b;
                e.beginPath();
                e.arc(c[0], c[1], d, 0, 2 * Math.PI);
                null === this.c || e.fill();
                null === this.a || e.stroke()
            }
            "" !== this.d && sl(this, b.Gb(), 2, 2)
        }
    };
    l.Uc = function(b, c) {
        var d = b.i,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e];
            xl[g.A()].call(this, g, c)
        }
    };
    l.Sa = function(b) {
        var c = b.j;
        b = b.a;
        null === this.e || rl(this, c, c.length);
        "" !== this.d && sl(this, c, c.length, b)
    };
    l.Ra = function(b) {
        var c = b.j;
        b = b.a;
        null === this.e || rl(this, c, c.length);
        "" !== this.d && sl(this, c, c.length, b)
    };
    l.ac = function(b) {
        if (Wd(this.f, b.d())) {
            if (null !== this.a) {
                ul(this, this.a);
                var c = this.b,
                    d = b.j;
                c.beginPath();
                vl(this, d, 0, d.length, b.a, !1);
                c.stroke()
            }
            "" !== this.d && (b = yl(b), sl(this, b, 2, 2))
        }
    };
    l.bc = function(b) {
        var c = b.d();
        if (Wd(this.f, c)) {
            if (null !== this.a) {
                ul(this, this.a);
                var c = this.b,
                    d = b.j,
                    e = 0,
                    f = b.e,
                    g = b.a;
                c.beginPath();
                var h, k;
                h = 0;
                for (k = f.length; h < k; ++h) e = vl(this, d, e, f[h], g, !1);
                c.stroke()
            }
            "" !== this.d && (b = zl(b), sl(this, b, b.length, 2))
        }
    };
    l.Ab = function(b) {
        if (Wd(this.f, b.d())) {
            if (null !== this.a || null !== this.c) {
                null === this.c || tl(this, this.c);
                null === this.a || ul(this, this.a);
                var c = this.b;
                c.beginPath();
                wl(this, ok(b), 0, b.e, b.a);
                null === this.c || c.fill();
                null === this.a || c.stroke()
            }
            "" !== this.d && (b = pk(b), sl(this, b, 2, 2))
        }
    };
    l.cc = function(b) {
        if (Wd(this.f, b.d())) {
            if (null !== this.a || null !== this.c) {
                null === this.c || tl(this, this.c);
                null === this.a || ul(this, this.a);
                var c = this.b,
                    d = Al(b),
                    e = 0,
                    f = b.e,
                    g = b.a,
                    h, k;
                h = 0;
                for (k = f.length; h < k; ++h) {
                    var n = f[h];
                    c.beginPath();
                    e = wl(this, d, e, n, g);
                    null === this.c || c.fill();
                    null === this.a || c.stroke()
                }
            }
            "" !== this.d && (b = Bl(b), sl(this, b, b.length, 2))
        }
    };

    function Cl(b) {
        var c = Ra(nb(b.q), Number);
        ab(c);
        var d, e, f, g, h;
        d = 0;
        for (e = c.length; d < e; ++d)
            for (f = b.q[c[d].toString()], g = 0, h = f.length; g < h; ++g) f[g](b)
    }

    function tl(b, c) {
        var d = b.b,
            e = b.J;
        null === e ? (d.fillStyle = c.fillStyle, b.J = {
            fillStyle: c.fillStyle
        }) : e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle)
    }

    function ul(b, c) {
        var d = b.b,
            e = b.ia;
        null === e ? (d.lineCap = c.lineCap, xf && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, b.ia = {
            lineCap: c.lineCap,
            lineDash: c.lineDash,
            lineJoin: c.lineJoin,
            lineWidth: c.lineWidth,
            miterLimit: c.miterLimit,
            strokeStyle: c.strokeStyle
        }) : (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), xf && !db(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin =
            c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle))
    }
    l.Ga = function(b, c) {
        if (null === b) this.c = null;
        else {
            var d = b.a;
            this.c = {
                fillStyle: Qf(null === d ? Fk : d)
            }
        }
        if (null === c) this.a = null;
        else {
            var d = c.a,
                e = c.d,
                f = c.b,
                g = c.e,
                h = c.c,
                k = c.i;
            this.a = {
                lineCap: m(e) ? e : "round",
                lineDash: null != f ? f : Gk,
                lineJoin: m(g) ? g : "round",
                lineWidth: this.p * (m(h) ? h : 1),
                miterLimit: m(k) ? k : 10,
                strokeStyle: Qf(null === d ? Hk : d)
            }
        }
    };
    l.gb = function(b) {
        if (null === b) this.e = null;
        else {
            var c = b.Bb(),
                d = b.tc(1),
                e = b.Jb(),
                f = b.cb();
            this.s = c[0];
            this.t = c[1];
            this.u = f[1];
            this.e = d;
            this.D = b.k;
            this.M = e[0];
            this.O = e[1];
            this.P = b.C;
            this.V = b.f;
            this.i = b.g;
            this.$ = b.n;
            this.v = f[0]
        }
    };
    l.ya = function(b) {
        if (null === b) this.d = "";
        else {
            var c = b.a;
            null === c ? this.g = null : (c = c.a, this.g = {
                fillStyle: Qf(null === c ? Fk : c)
            });
            var d = b.g;
            if (null === d) this.C = null;
            else {
                var c = d.a,
                    e = d.d,
                    f = d.b,
                    g = d.e,
                    h = d.c,
                    d = d.i;
                this.C = {
                    lineCap: m(e) ? e : "round",
                    lineDash: null != f ? f : Gk,
                    lineJoin: m(g) ? g : "round",
                    lineWidth: m(h) ? h : 1,
                    miterLimit: m(d) ? d : 10,
                    strokeStyle: Qf(null === c ? Hk : c)
                }
            }
            var c = b.d,
                e = b.e,
                f = b.i,
                g = b.f,
                h = b.c,
                d = b.b,
                k = b.k;
            b = b.C;
            this.T = {
                font: m(c) ? c : "10px sans-serif",
                textAlign: m(k) ? k : "center",
                textBaseline: m(b) ? b : "middle"
            };
            this.d = m(d) ?
                d : "";
            this.aa = m(e) ? this.p * e : 0;
            this.ba = m(f) ? this.p * f : 0;
            this.n = m(g) ? g : 0;
            this.k = this.p * (m(h) ? h : 1)
        }
    };
    var xl = {
        Point: ql.prototype.Sa,
        LineString: ql.prototype.ac,
        Polygon: ql.prototype.Ab,
        MultiPoint: ql.prototype.Ra,
        MultiLineString: ql.prototype.bc,
        MultiPolygon: ql.prototype.cc,
        GeometryCollection: ql.prototype.Uc,
        Circle: ql.prototype.$b
    };
    var Dl = ["Polygon", "LineString", "Image", "Text"];

    function El(b, c, d) {
        this.K = b;
        this.v = c;
        this.d = null;
        this.e = 0;
        this.resolution = d;
        this.t = this.s = null;
        this.c = [];
        this.coordinates = [];
        this.J = td();
        this.a = [];
        this.T = [];
        this.ia = td()
    }

    function Fl(b, c, d, e, f, g) {
        var h = b.coordinates.length,
            k = b.Wc(),
            n = [c[d], c[d + 1]],
            p = [NaN, NaN],
            q = !0,
            r, s, t;
        for (r = d + f; r < e; r += f) p[0] = c[r], p[1] = c[r + 1], t = Jd(k, p), t !== s ? (q && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]), b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : 1 === t ? (b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : q = !0, n[0] = p[0], n[1] = p[1], s = t;
        r === d + f && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]);
        g && (b.coordinates[h++] = c[d], b.coordinates[h++] = c[d + 1]);
        return h
    }

    function Gl(b, c) {
        b.s = [0, c, 0];
        b.c.push(b.s);
        b.t = [0, c, 0];
        b.a.push(b.t)
    }

    function Hl(b, c, d, e, f, g, h, k, n) {
        var p;
        Ci(e, b.J) ? p = b.T : (p = Fj(b.coordinates, 0, b.coordinates.length, 2, e, b.T), wd(b.J, e));
        e = 0;
        var q = h.length,
            r = 0,
            s;
        for (b = b.ia; e < q;) {
            var t = h[e],
                x, y, z, B;
            switch (t[0]) {
                case 0:
                    r = t[1];
                    s = v(r).toString();
                    m(g[s]) ? e = t[2] : m(n) && !Wd(n, r.G().d()) ? e = t[2] : ++e;
                    break;
                case 1:
                    c.beginPath();
                    ++e;
                    break;
                case 2:
                    r = t[1];
                    s = p[r];
                    var w = p[r + 1],
                        K = p[r + 2] - s,
                        r = p[r + 3] - w;
                    c.arc(s, w, Math.sqrt(K * K + r * r), 0, 2 * Math.PI, !0);
                    ++e;
                    break;
                case 3:
                    c.closePath();
                    ++e;
                    break;
                case 4:
                    r = t[1];
                    s = t[2];
                    x = t[3];
                    z = t[4] * d;
                    var H = t[5] * d,
                        D =
                        t[6];
                    y = t[7];
                    var J = t[8],
                        T = t[9],
                        w = t[11],
                        K = t[12],
                        $ = t[13],
                        L = t[14];
                    for (t[10] && (w += f); r < s; r += 2) {
                        t = p[r] - z;
                        B = p[r + 1] - H;
                        $ && (t = t + .5 | 0, B = B + .5 | 0);
                        if (1 != K || 0 !== w) {
                            var aa = t + z,
                                la = B + H;
                            Bi(b, aa, la, K, K, w, -aa, -la);
                            c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13])
                        }
                        aa = c.globalAlpha;
                        1 != y && (c.globalAlpha = aa * y);
                        c.drawImage(x, J, T, L, D, t, B, L * d, D * d);
                        1 != y && (c.globalAlpha = aa);
                        1 == K && 0 === w || c.setTransform(1, 0, 0, 1, 0, 0)
                    }++e;
                    break;
                case 5:
                    r = t[1];
                    s = t[2];
                    z = t[3];
                    H = t[4] * d;
                    D = t[5] * d;
                    w = t[6];
                    K = t[7] * d;
                    x = t[8];
                    for (y = t[9]; r < s; r += 2) {
                        t = p[r] + H;
                        B = p[r +
                            1] + D;
                        if (1 != K || 0 !== w) Bi(b, t, B, K, K, w, -t, -B), c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13]);
                        y && c.strokeText(z, t, B);
                        x && c.fillText(z, t, B);
                        1 == K && 0 === w || c.setTransform(1, 0, 0, 1, 0, 0)
                    }++e;
                    break;
                case 6:
                    if (m(k) && (r = t[1], r = k(r))) return r;
                    ++e;
                    break;
                case 7:
                    c.fill();
                    ++e;
                    break;
                case 8:
                    r = t[1];
                    s = t[2];
                    c.moveTo(p[r], p[r + 1]);
                    for (r += 2; r < s; r += 2) c.lineTo(p[r], p[r + 1]);
                    ++e;
                    break;
                case 9:
                    c.fillStyle = t[1];
                    ++e;
                    break;
                case 10:
                    r = m(t[7]) ? t[7] : !0;
                    s = t[2];
                    c.strokeStyle = t[1];
                    c.lineWidth = r ? s * d : s;
                    c.lineCap = t[3];
                    c.lineJoin = t[4];
                    c.miterLimit =
                        t[5];
                    xf && c.setLineDash(t[6]);
                    ++e;
                    break;
                case 11:
                    c.font = t[1];
                    c.textAlign = t[2];
                    c.textBaseline = t[3];
                    ++e;
                    break;
                case 12:
                    c.stroke();
                    ++e;
                    break;
                default:
                    ++e
            }
        }
    }
    El.prototype.bb = function(b, c, d, e, f) {
        Hl(this, b, c, d, e, f, this.c, void 0)
    };

    function Il(b) {
        var c = b.a;
        c.reverse();
        var d, e = c.length,
            f, g, h = -1;
        for (d = 0; d < e; ++d)
            if (f = c[d], g = f[0], 6 == g) h = d;
            else if (0 == g) {
            f[2] = d;
            f = b.a;
            for (g = d; h < g;) {
                var k = f[h];
                f[h] = f[g];
                f[g] = k;
                ++h;
                --g
            }
            h = -1
        }
    }

    function Jl(b, c) {
        b.s[2] = b.c.length;
        b.s = null;
        b.t[2] = b.a.length;
        b.t = null;
        var d = [6, c];
        b.c.push(d);
        b.a.push(d)
    }
    El.prototype.Ka = da;
    El.prototype.Wc = function() {
        return this.v
    };

    function Kl(b, c, d) {
        El.call(this, b, c, d);
        this.g = this.u = null;
        this.o = this.n = this.p = this.l = this.q = this.D = this.C = this.k = this.f = this.i = this.b = void 0
    }
    A(Kl, El);
    Kl.prototype.Sa = function(b, c) {
        if (null !== this.g) {
            Gl(this, c);
            var d = b.j,
                e = this.coordinates.length,
                d = Fl(this, d, 0, d.length, b.a, !1);
            this.c.push([4, e, d, this.g, this.b, this.i, this.f, this.k, this.C, this.D, this.q, this.l, this.p, this.n, this.o]);
            this.a.push([4, e, d, this.u, this.b, this.i, this.f, this.k, this.C, this.D, this.q, this.l, this.p, this.n, this.o]);
            Jl(this, c)
        }
    };
    Kl.prototype.Ra = function(b, c) {
        if (null !== this.g) {
            Gl(this, c);
            var d = b.j,
                e = this.coordinates.length,
                d = Fl(this, d, 0, d.length, b.a, !1);
            this.c.push([4, e, d, this.g, this.b, this.i, this.f, this.k, this.C, this.D, this.q, this.l, this.p, this.n, this.o]);
            this.a.push([4, e, d, this.u, this.b, this.i, this.f, this.k, this.C, this.D, this.q, this.l, this.p, this.n, this.o]);
            Jl(this, c)
        }
    };
    Kl.prototype.Ka = function() {
        Il(this);
        this.i = this.b = void 0;
        this.g = this.u = null;
        this.o = this.n = this.l = this.q = this.D = this.C = this.k = this.p = this.f = void 0
    };
    Kl.prototype.gb = function(b) {
        var c = b.Bb(),
            d = b.cb(),
            e = b.dd(1),
            f = b.tc(1),
            g = b.Jb();
        this.b = c[0];
        this.i = c[1];
        this.u = e;
        this.g = f;
        this.f = d[1];
        this.k = b.k;
        this.C = g[0];
        this.D = g[1];
        this.q = b.C;
        this.l = b.f;
        this.p = b.g;
        this.n = b.n;
        this.o = d[0]
    };

    function Ll(b, c, d) {
        El.call(this, b, c, d);
        this.b = {
            zb: void 0,
            ub: void 0,
            vb: null,
            wb: void 0,
            xb: void 0,
            yb: void 0,
            ad: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    A(Ll, El);

    function Ml(b, c, d, e, f) {
        var g = b.coordinates.length;
        c = Fl(b, c, d, e, f, !1);
        g = [8, g, c];
        b.c.push(g);
        b.a.push(g);
        return e
    }
    l = Ll.prototype;
    l.Wc = function() {
        null === this.d && (this.d = Fd(this.v), 0 < this.e && Ed(this.d, this.resolution * (this.e + 1) / 2, this.d));
        return this.d
    };

    function Nl(b) {
        var c = b.b,
            d = c.strokeStyle,
            e = c.lineCap,
            f = c.lineDash,
            g = c.lineJoin,
            h = c.lineWidth,
            k = c.miterLimit;
        c.zb == d && c.ub == e && db(c.vb, f) && c.wb == g && c.xb == h && c.yb == k || (c.ad != b.coordinates.length && (b.c.push([12]), c.ad = b.coordinates.length), b.c.push([10, d, h, e, g, k, f], [1]), c.zb = d, c.ub = e, c.vb = f, c.wb = g, c.xb = h, c.yb = k)
    }
    l.ac = function(b, c) {
        var d = this.b,
            e = d.lineWidth;
        m(d.strokeStyle) && m(e) && (Nl(this), Gl(this, c), this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = b.j, Ml(this, d, 0, d.length, b.a), this.a.push([12]), Jl(this, c))
    };
    l.bc = function(b, c) {
        var d = this.b,
            e = d.lineWidth;
        if (m(d.strokeStyle) && m(e)) {
            Nl(this);
            Gl(this, c);
            this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
            var d = b.e,
                e = b.j,
                f = b.a,
                g = 0,
                h, k;
            h = 0;
            for (k = d.length; h < k; ++h) g = Ml(this, e, g, d[h], f);
            this.a.push([12]);
            Jl(this, c)
        }
    };
    l.Ka = function() {
        this.b.ad != this.coordinates.length && this.c.push([12]);
        Il(this);
        this.b = null
    };
    l.Ga = function(b, c) {
        var d = c.a;
        this.b.strokeStyle = Qf(null === d ? Hk : d);
        d = c.d;
        this.b.lineCap = m(d) ? d : "round";
        d = c.b;
        this.b.lineDash = null === d ? Gk : d;
        d = c.e;
        this.b.lineJoin = m(d) ? d : "round";
        d = c.c;
        this.b.lineWidth = m(d) ? d : 1;
        d = c.i;
        this.b.miterLimit = m(d) ? d : 10;
        this.b.lineWidth > this.e && (this.e = this.b.lineWidth, this.d = null)
    };

    function Ol(b, c, d) {
        El.call(this, b, c, d);
        this.b = {
            Bd: void 0,
            zb: void 0,
            ub: void 0,
            vb: null,
            wb: void 0,
            xb: void 0,
            yb: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    A(Ol, El);

    function Pl(b, c, d, e, f) {
        var g = b.b,
            h = [1];
        b.c.push(h);
        b.a.push(h);
        var k, h = 0;
        for (k = e.length; h < k; ++h) {
            var n = e[h],
                p = b.coordinates.length;
            d = Fl(b, c, d, n, f, !0);
            d = [8, p, d];
            p = [3];
            b.c.push(d, p);
            b.a.push(d, p);
            d = n
        }
        c = [7];
        b.a.push(c);
        m(g.fillStyle) && b.c.push(c);
        m(g.strokeStyle) && (g = [12], b.c.push(g), b.a.push(g));
        return d
    }
    l = Ol.prototype;
    l.$b = function(b, c) {
        var d = this.b,
            e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Ql(this);
            Gl(this, c);
            this.a.push([9, Qf(Fk)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var f = b.j,
                e = this.coordinates.length;
            Fl(this, f, 0, f.length, b.a, !1);
            f = [1];
            e = [2, e];
            this.c.push(f, e);
            this.a.push(f, e);
            e = [7];
            this.a.push(e);
            m(d.fillStyle) && this.c.push(e);
            m(d.strokeStyle) && (d = [12], this.c.push(d), this.a.push(d));
            Jl(this, c)
        }
    };
    l.Ab = function(b, c) {
        var d = this.b,
            e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) Ql(this), Gl(this, c), this.a.push([9, Qf(Fk)]), m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = b.e, e = ok(b), Pl(this, e, 0, d, b.a), Jl(this, c)
    };
    l.cc = function(b, c) {
        var d = this.b,
            e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Ql(this);
            Gl(this, c);
            this.a.push([9, Qf(Fk)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var d = b.e,
                e = Al(b),
                f = b.a,
                g = 0,
                h, k;
            h = 0;
            for (k = d.length; h < k; ++h) g = Pl(this, e, g, d[h], f);
            Jl(this, c)
        }
    };
    l.Ka = function() {
        Il(this);
        this.b = null;
        var b = this.K;
        if (0 !== b) {
            var c = this.coordinates,
                d, e;
            d = 0;
            for (e = c.length; d < e; ++d) c[d] = b * Math.round(c[d] / b)
        }
    };
    l.Wc = function() {
        null === this.d && (this.d = Fd(this.v), 0 < this.e && Ed(this.d, this.resolution * (this.e + 1) / 2, this.d));
        return this.d
    };
    l.Ga = function(b, c) {
        var d = this.b;
        if (null === b) d.fillStyle = void 0;
        else {
            var e = b.a;
            d.fillStyle = Qf(null === e ? Fk : e)
        }
        null === c ? (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0) : (e = c.a, d.strokeStyle = Qf(null === e ? Hk : e), e = c.d, d.lineCap = m(e) ? e : "round", e = c.b, d.lineDash = null === e ? Gk : e.slice(), e = c.e, d.lineJoin = m(e) ? e : "round", e = c.c, d.lineWidth = m(e) ? e : 1, e = c.i, d.miterLimit = m(e) ? e : 10, d.lineWidth > this.e && (this.e = d.lineWidth, this.d = null))
    };

    function Ql(b) {
        var c = b.b,
            d = c.fillStyle,
            e = c.strokeStyle,
            f = c.lineCap,
            g = c.lineDash,
            h = c.lineJoin,
            k = c.lineWidth,
            n = c.miterLimit;
        m(d) && c.Bd != d && (b.c.push([9, d]), c.Bd = c.fillStyle);
        !m(e) || c.zb == e && c.ub == f && c.vb == g && c.wb == h && c.xb == k && c.yb == n || (b.c.push([10, e, k, f, h, n, g]), c.zb = e, c.ub = f, c.vb = g, c.wb = h, c.xb = k, c.yb = n)
    }

    function Rl(b, c, d) {
        El.call(this, b, c, d);
        this.n = this.p = this.l = null;
        this.g = "";
        this.q = this.D = this.C = this.k = 0;
        this.f = this.i = this.b = null
    }
    A(Rl, El);
    Rl.prototype.Ia = function(b, c, d, e, f, g) {
        if ("" !== this.g && null !== this.f && (null !== this.b || null !== this.i)) {
            if (null !== this.b) {
                f = this.b;
                var h = this.l;
                if (null === h || h.fillStyle != f.fillStyle) {
                    var k = [9, f.fillStyle];
                    this.c.push(k);
                    this.a.push(k);
                    null === h ? this.l = {
                        fillStyle: f.fillStyle
                    } : h.fillStyle = f.fillStyle
                }
            }
            null !== this.i && (f = this.i, h = this.p, null === h || h.lineCap != f.lineCap || h.lineDash != f.lineDash || h.lineJoin != f.lineJoin || h.lineWidth != f.lineWidth || h.miterLimit != f.miterLimit || h.strokeStyle != f.strokeStyle) && (k = [10,
                f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1
            ], this.c.push(k), this.a.push(k), null === h ? this.p = {
                lineCap: f.lineCap,
                lineDash: f.lineDash,
                lineJoin: f.lineJoin,
                lineWidth: f.lineWidth,
                miterLimit: f.miterLimit,
                strokeStyle: f.strokeStyle
            } : (h.lineCap = f.lineCap, h.lineDash = f.lineDash, h.lineJoin = f.lineJoin, h.lineWidth = f.lineWidth, h.miterLimit = f.miterLimit, h.strokeStyle = f.strokeStyle));
            f = this.f;
            h = this.n;
            if (null === h || h.font != f.font || h.textAlign != f.textAlign || h.textBaseline != f.textBaseline) k = [11, f.font, f.textAlign, f.textBaseline], this.c.push(k), this.a.push(k), null === h ? this.n = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            } : (h.font = f.font, h.textAlign = f.textAlign, h.textBaseline = f.textBaseline);
            Gl(this, g);
            f = this.coordinates.length;
            b = Fl(this, b, c, d, e, !1);
            b = [5, f, b, this.g, this.k, this.C, this.D, this.q, null !== this.b, null !== this.i];
            this.c.push(b);
            this.a.push(b);
            Jl(this, g)
        }
    };
    Rl.prototype.ya = function(b) {
        if (null === b) this.g = "";
        else {
            var c = b.a;
            null === c ? this.b = null : (c = c.a, c = Qf(null === c ? Fk : c), null === this.b ? this.b = {
                fillStyle: c
            } : this.b.fillStyle = c);
            var d = b.g;
            if (null === d) this.i = null;
            else {
                var c = d.a,
                    e = d.d,
                    f = d.b,
                    g = d.e,
                    h = d.c,
                    d = d.i,
                    e = m(e) ? e : "round",
                    f = null != f ? f.slice() : Gk,
                    g = m(g) ? g : "round",
                    h = m(h) ? h : 1,
                    d = m(d) ? d : 10,
                    c = Qf(null === c ? Hk : c);
                if (null === this.i) this.i = {
                    lineCap: e,
                    lineDash: f,
                    lineJoin: g,
                    lineWidth: h,
                    miterLimit: d,
                    strokeStyle: c
                };
                else {
                    var k = this.i;
                    k.lineCap = e;
                    k.lineDash = f;
                    k.lineJoin = g;
                    k.lineWidth =
                        h;
                    k.miterLimit = d;
                    k.strokeStyle = c
                }
            }
            var n = b.d,
                c = b.e,
                e = b.i,
                f = b.f,
                h = b.c,
                d = b.b,
                g = b.k,
                k = b.C;
            b = m(n) ? n : "10px sans-serif";
            g = m(g) ? g : "center";
            k = m(k) ? k : "middle";
            null === this.f ? this.f = {
                font: b,
                textAlign: g,
                textBaseline: k
            } : (n = this.f, n.font = b, n.textAlign = g, n.textBaseline = k);
            this.g = m(d) ? d : "";
            this.k = m(c) ? c : 0;
            this.C = m(e) ? e : 0;
            this.D = m(f) ? f : 0;
            this.q = m(h) ? h : 1
        }
    };

    function Sl(b, c, d, e) {
        this.k = b;
        this.d = c;
        this.g = d;
        this.e = e;
        this.c = {};
        this.i = nf(1, 1);
        this.f = td()
    }

    function Tl(b) {
        for (var c in b.c) {
            var d = b.c[c],
                e;
            for (e in d) d[e].Ka()
        }
    }
    Sl.prototype.b = function(b, c, d, e, f) {
        var g = this.f;
        Bi(g, .5, .5, 1 / c, -1 / c, -d, -b[0], -b[1]);
        var h = this.i;
        h.clearRect(0, 0, 1, 1);
        var k;
        m(this.e) && (k = Kd(), Nd(k, b), Ed(k, c * this.e, k));
        return Ul(this, h, g, d, e, function(b) {
            if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
                if (b = f(b)) return b;
                h.clearRect(0, 0, 1, 1)
            }
        }, k)
    };
    Sl.prototype.a = function(b, c) {
        var d = m(b) ? b.toString() : "0",
            e = this.c[d];
        m(e) || (e = {}, this.c[d] = e);
        d = e[c];
        m(d) || (d = new Vl[c](this.k, this.d, this.g), e[c] = d);
        return d
    };
    Sl.prototype.R = function() {
        return rb(this.c)
    };

    function Wl(b, c, d, e, f, g) {
        var h = Ra(nb(b.c), Number);
        ab(h);
        var k = b.d,
            n = k[0],
            p = k[1],
            q = k[2],
            k = k[3],
            n = [n, p, n, k, q, k, q, p];
        Fj(n, 0, 8, 2, e, n);
        c.save();
        c.beginPath();
        c.moveTo(n[0], n[1]);
        c.lineTo(n[2], n[3]);
        c.lineTo(n[4], n[5]);
        c.lineTo(n[6], n[7]);
        c.closePath();
        c.clip();
        for (var r, s, n = 0, p = h.length; n < p; ++n)
            for (r = b.c[h[n].toString()], q = 0, k = Dl.length; q < k; ++q) s = r[Dl[q]], m(s) && s.bb(c, d, e, f, g);
        c.restore()
    }

    function Ul(b, c, d, e, f, g, h) {
        var k = Ra(nb(b.c), Number);
        ab(k, function(b, c) {
            return c - b
        });
        var n, p, q, r, s;
        n = 0;
        for (p = k.length; n < p; ++n)
            for (r = b.c[k[n].toString()], q = Dl.length - 1; 0 <= q; --q)
                if (s = r[Dl[q]], m(s) && (s = Hl(s, c, 1, d, e, f, s.a, g, h))) return s
    }
    var Vl = {
        Image: Kl,
        LineString: Ll,
        Polygon: Ol,
        Text: Rl
    };

    function Xl(b) {
        Ei.call(this, b);
        this.u = td()
    }
    A(Xl, Ei);
    Xl.prototype.l = function(b, c, d) {
        Yl(this, "precompose", d, b, void 0);
        var e = this.p();
        if (null !== e) {
            var f = c.extent,
                g = m(f);
            if (g) {
                var h = b.pixelRatio,
                    k = Qd(f),
                    n = [f[2], f[3]],
                    p = [f[2], f[1]],
                    f = [f[0], f[1]];
                Di(b.coordinateToPixelMatrix, k, k);
                Di(b.coordinateToPixelMatrix, n, n);
                Di(b.coordinateToPixelMatrix, p, p);
                Di(b.coordinateToPixelMatrix, f, f);
                d.save();
                d.beginPath();
                d.moveTo(k[0] * h, k[1] * h);
                d.lineTo(n[0] * h, n[1] * h);
                d.lineTo(p[0] * h, p[1] * h);
                d.lineTo(f[0] * h, f[1] * h);
                d.clip()
            }
            h = this.q();
            k = d.globalAlpha;
            d.globalAlpha = c.opacity;
            0 === b.viewState.rotation ? (c = h[13], n = e.width * h[0], p = e.height * h[5], d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(c), Math.round(n), Math.round(p))) : (d.setTransform(h[0], h[1], h[4], h[5], h[12], h[13]), d.drawImage(e, 0, 0), d.setTransform(1, 0, 0, 1, 0, 0));
            d.globalAlpha = k;
            g && d.restore()
        }
        Yl(this, "postcompose", d, b, void 0)
    };

    function Yl(b, c, d, e, f) {
        var g = b.a;
        bd(g, c) && (b = m(f) ? f : Zl(b, e), b = new ql(d, e.pixelRatio, e.extent, b, e.viewState.rotation), g.dispatchEvent(new rk(c, g, b, null, e, d, null)), Cl(b))
    }

    function Zl(b, c) {
        var d = c.viewState,
            e = c.pixelRatio;
        return Bi(b.u, e * c.size[0] / 2, e * c.size[1] / 2, e / d.resolution, -e / d.resolution, -d.rotation, -d.center[0], -d.center[1])
    }
    var $l = function() {
        var b = null,
            c = null;
        return function(d) {
            if (null === b) {
                b = nf(1, 1);
                c = b.createImageData(1, 1);
                var e = c.data;
                e[0] = 42;
                e[1] = 84;
                e[2] = 126;
                e[3] = 255
            }
            var e = b.canvas,
                f = d[0] <= e.width && d[1] <= e.height;
            f || (e.width = d[0], e.height = d[1], e = d[0] - 1, d = d[1] - 1, b.putImageData(c, e, d), d = b.getImageData(e, d, 1, 1), f = db(c.data, d.data));
            return f
        }
    }();

    function am(b, c, d) {
        F.call(this);
        this.Ce(b, m(c) ? c : 0, d)
    }
    A(am, F);
    l = am.prototype;
    l.clone = function() {
        var b = new am(null);
        Hj(b, this.b, this.j.slice());
        b.r();
        return b
    };
    l.ta = function(b, c, d, e) {
        var f = this.j;
        b -= f[0];
        var g = c - f[1];
        c = b * b + g * g;
        if (c < e) {
            if (0 === c)
                for (e = 0; e < this.a; ++e) d[e] = f[e];
            else
                for (e = this.$d() / Math.sqrt(c), d[0] = f[0] + e * b, d[1] = f[1] + e * g, e = 2; e < this.a; ++e) d[e] = f[e];
            d.length = this.a;
            return c
        }
        return e
    };
    l.$a = function(b, c) {
        var d = this.j,
            e = b - d[0],
            d = c - d[1];
        return e * e + d * d <= bm(this)
    };
    l.Gb = function() {
        return this.j.slice(0, this.a)
    };
    l.Zb = function(b) {
        var c = this.j,
            d = c[this.a] - c[0];
        return Dd(c[0] - d, c[1] - d, c[0] + d, c[1] + d, b)
    };
    l.$d = function() {
        return Math.sqrt(bm(this))
    };

    function bm(b) {
        var c = b.j[b.a] - b.j[0];
        b = b.j[b.a + 1] - b.j[1];
        return c * c + b * b
    }
    l.A = function() {
        return "Circle"
    };
    l.qh = function(b) {
        var c = this.a,
            d = b.slice();
        d[c] = d[0] + (this.j[c] - this.j[0]);
        var e;
        for (e = 1; e < c; ++e) d[c + e] = b[e];
        Hj(this, this.b, d);
        this.r()
    };
    l.Ce = function(b, c, d) {
        if (null === b) Hj(this, "XY", null);
        else {
            Ij(this, d, b, 0);
            null === this.j && (this.j = []);
            d = this.j;
            b = Rj(d, b);
            d[b++] = d[0] + c;
            var e;
            c = 1;
            for (e = this.a; c < e; ++c) d[b++] = d[c];
            d.length = b
        }
        this.r()
    };
    l.Fe = function(b) {
        this.j[this.a] = this.j[0] + b;
        this.r()
    };

    function cm(b) {
        Ej.call(this);
        this.i = m(b) ? b : null;
        dm(this)
    }
    A(cm, Ej);

    function em(b) {
        var c = [],
            d, e;
        d = 0;
        for (e = b.length; d < e; ++d) c.push(b[d].clone());
        return c
    }

    function fm(b) {
        var c, d;
        if (null !== b.i)
            for (c = 0, d = b.i.length; c < d; ++c) Oc(b.i[c], "change", b.r, !1, b)
    }

    function dm(b) {
        var c, d;
        if (null !== b.i)
            for (c = 0, d = b.i.length; c < d; ++c) C(b.i[c], "change", b.r, !1, b)
    }
    l = cm.prototype;
    l.clone = function() {
        var b = new cm(null);
        b.Ee(this.i);
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        var f = this.i,
            g, h;
        g = 0;
        for (h = f.length; g < h; ++g) e = f[g].ta(b, c, d, e);
        return e
    };
    l.$a = function(b, c) {
        var d = this.i,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e)
            if (d[e].$a(b, c)) return !0;
        return !1
    };
    l.Zb = function(b) {
        Dd(Infinity, Infinity, -Infinity, -Infinity, b);
        for (var c = this.i, d = 0, e = c.length; d < e; ++d) {
            var f = b,
                g = c[d].d();
            g[0] < f[0] && (f[0] = g[0]);
            g[2] > f[2] && (f[2] = g[2]);
            g[1] < f[1] && (f[1] = g[1]);
            g[3] > f[3] && (f[3] = g[3])
        }
        return b
    };
    l.Jd = function() {
        return em(this.i)
    };
    l.Zc = function(b) {
        this.l != this.c && (sb(this.g), this.k = 0, this.l = this.c);
        if (0 > b || 0 !== this.k && b < this.k) return this;
        var c = b.toString();
        if (this.g.hasOwnProperty(c)) return this.g[c];
        var d = [],
            e = this.i,
            f = !1,
            g, h;
        g = 0;
        for (h = e.length; g < h; ++g) {
            var k = e[g],
                n = k.Zc(b);
            d.push(n);
            n !== k && (f = !0)
        }
        if (f) return b = new cm(null), fm(b), b.i = d, dm(b), b.r(), this.g[c] = b;
        this.k = b;
        return this
    };
    l.A = function() {
        return "GeometryCollection"
    };
    l.Q = function(b) {
        var c = this.i,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d)
            if (c[d].Q(b)) return !0;
        return !1
    };
    l.R = function() {
        return 0 == this.i.length
    };
    l.Ee = function(b) {
        b = em(b);
        fm(this);
        this.i = b;
        dm(this);
        this.r()
    };
    l.W = function(b) {
        var c = this.i,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d) c[d].W(b);
        this.r()
    };
    l.ea = function(b, c) {
        var d = this.i,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) d[e].ea(b, c);
        this.r()
    };
    l.B = function() {
        fm(this);
        cm.H.B.call(this)
    };

    function gm(b, c, d, e, f) {
        var g = NaN,
            h = NaN,
            k = (d - c) / e;
        if (0 !== k)
            if (1 == k) g = b[c], h = b[c + 1];
            else if (2 == k) g = .5 * b[c] + .5 * b[c + e], h = .5 * b[c + 1] + .5 * b[c + e + 1];
        else {
            var h = b[c],
                k = b[c + 1],
                n = 0,
                g = [0],
                p;
            for (p = c + e; p < d; p += e) {
                var q = b[p],
                    r = b[p + 1],
                    n = n + Math.sqrt((q - h) * (q - h) + (r - k) * (r - k));
                g.push(n);
                h = q;
                k = r
            }
            d = .5 * n;
            for (var s, h = bb, k = 0, n = g.length; k < n;) p = k + n >> 1, q = h(d, g[p]), 0 < q ? k = p + 1 : (n = p, s = !q);
            s = s ? k : ~k;
            0 > s ? (d = (d - g[-s - 2]) / (g[-s - 1] - g[-s - 2]), c += (-s - 2) * e, g = Rb(b[c], b[c + e], d), h = Rb(b[c + 1], b[c + e + 1], d)) : (g = b[c + s * e], h = b[c + s * e + 1])
        }
        return null != f ?
            (f[0] = g, f[1] = h, f) : [g, h]
    }

    function hm(b, c, d, e, f, g) {
        if (d == c) return null;
        if (f < b[c + e - 1]) return g ? (d = b.slice(c, c + e), d[e - 1] = f, d) : null;
        if (b[d - 1] < f) return g ? (d = b.slice(d - e, d), d[e - 1] = f, d) : null;
        if (f == b[c + e - 1]) return b.slice(c, c + e);
        c /= e;
        for (d /= e; c < d;) g = c + d >> 1, f < b[(g + 1) * e - 1] ? d = g : c = g + 1;
        d = b[c * e - 1];
        if (f == d) return b.slice((c - 1) * e, (c - 1) * e + e);
        g = (f - d) / (b[(c + 1) * e - 1] - d);
        d = [];
        var h;
        for (h = 0; h < e - 1; ++h) d.push(Rb(b[(c - 1) * e + h], b[c * e + h], g));
        d.push(f);
        return d
    }

    function im(b, c, d, e, f, g) {
        var h = 0;
        if (g) return hm(b, h, c[c.length - 1], d, e, f);
        if (e < b[d - 1]) return f ? (b = b.slice(0, d), b[d - 1] = e, b) : null;
        if (b[b.length - 1] < e) return f ? (b = b.slice(b.length - d), b[d - 1] = e, b) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var k = c[f];
            if (h != k) {
                if (e < b[h + d - 1]) break;
                if (e <= b[k - 1]) return hm(b, h, k, d, e, !1);
                h = k
            }
        }
        return null
    };

    function M(b, c) {
        F.call(this);
        this.e = null;
        this.o = this.s = this.q = -1;
        this.ab(b, c)
    }
    A(M, F);
    l = M.prototype;
    l.Hf = function(b) {
        null === this.j ? this.j = b.slice() : Ya(this.j, b);
        this.r()
    };
    l.clone = function() {
        var b = new M(null);
        jm(b, this.b, this.j.slice());
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        this.o != this.c && (this.s = Math.sqrt(Nj(this.j, 0, this.j.length, this.a, 0)), this.o = this.c);
        return Pj(this.j, 0, this.j.length, this.a, this.s, !1, b, c, d, e)
    };
    l.Qf = function(b, c) {
        return gk(this.j, 0, this.j.length, this.a, b, c)
    };
    l.rh = function(b, c) {
        return "XYM" != this.b && "XYZM" != this.b ? null : hm(this.j, 0, this.j.length, this.a, b, m(c) ? c : !1)
    };
    l.ma = function() {
        return Uj(this.j, 0, this.j.length, this.a)
    };
    l.ae = function() {
        var b = this.j,
            c = this.a,
            d = b[0],
            e = b[1],
            f = 0,
            g;
        for (g = 0 + c; g < this.j.length; g += c) var h = b[g],
            k = b[g + 1],
            f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)),
            d = h,
            e = k;
        return f
    };

    function yl(b) {
        b.q != b.c && (b.e = gm(b.j, 0, b.j.length, b.a, b.e), b.q = b.c);
        return b.e
    }
    l.kb = function(b) {
        var c = [];
        c.length = Wj(this.j, 0, this.j.length, this.a, b, c, 0);
        b = new M(null);
        jm(b, "XY", c);
        return b
    };
    l.A = function() {
        return "LineString"
    };
    l.Q = function(b) {
        return hk(this.j, 0, this.j.length, this.a, b)
    };
    l.ab = function(b, c) {
        null === b ? jm(this, "XY", null) : (Ij(this, c, b, 1), null === this.j && (this.j = []), this.j.length = Sj(this.j, 0, b, this.a), this.r())
    };

    function jm(b, c, d) {
        Hj(b, c, d);
        b.r()
    };

    function N(b, c) {
        F.call(this);
        this.e = [];
        this.q = this.o = -1;
        this.de(b, c)
    }
    A(N, F);
    l = N.prototype;
    l.If = function(b) {
        null === this.j ? this.j = b.j.slice() : Ya(this.j, b.j.slice());
        this.e.push(this.j.length);
        this.r()
    };
    l.clone = function() {
        var b = new N(null);
        km(b, this.b, this.j.slice(), this.e.slice());
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        this.q != this.c && (this.o = Math.sqrt(Oj(this.j, 0, this.e, this.a, 0)), this.q = this.c);
        return Qj(this.j, 0, this.e, this.a, this.o, !1, b, c, d, e)
    };
    l.th = function(b, c, d) {
        return "XYM" != this.b && "XYZM" != this.b || 0 === this.j.length ? null : im(this.j, this.e, this.a, b, m(c) ? c : !1, m(d) ? d : !1)
    };
    l.ce = function() {
        return Vj(this.j, 0, this.e, this.a)
    };
    l.Yf = function(b) {
        if (0 > b || this.e.length <= b) return null;
        var c = new M(null);
        jm(c, this.b, this.j.slice(0 === b ? 0 : this.e[b - 1], this.e[b]));
        return c
    };
    l.Eb = function() {
        var b = this.j,
            c = this.e,
            d = this.b,
            e = [],
            f = 0,
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g],
                n = new M(null);
            jm(n, d, b.slice(f, k));
            e.push(n);
            f = k
        }
        return e
    };

    function zl(b) {
        var c = [],
            d = b.j,
            e = 0,
            f = b.e;
        b = b.a;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var k = f[g],
                e = gm(d, e, k, b);
            Ya(c, e);
            e = k
        }
        return c
    }
    l.kb = function(b) {
        var c = [],
            d = [],
            e = this.j,
            f = this.e,
            g = this.a,
            h = 0,
            k = 0,
            n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n],
                k = Wj(e, h, q, g, b, c, k);
            d.push(k);
            h = q
        }
        c.length = k;
        b = new N(null);
        km(b, "XY", c, d);
        return b
    };
    l.A = function() {
        return "MultiLineString"
    };
    l.Q = function(b) {
        a: {
            var c = this.j,
                d = this.e,
                e = this.a,
                f = 0,
                g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                if (hk(c, f, d[g], e, b)) {
                    b = !0;
                    break a
                }
                f = d[g]
            }
            b = !1
        }
        return b
    };
    l.de = function(b, c) {
        if (null === b) km(this, "XY", null, this.e);
        else {
            Ij(this, c, b, 2);
            null === this.j && (this.j = []);
            var d = Tj(this.j, 0, b, this.a, this.e);
            this.j.length = 0 === d.length ? 0 : d[d.length - 1];
            this.r()
        }
    };

    function km(b, c, d, e) {
        Hj(b, c, d);
        b.e = e;
        b.r()
    }

    function lm(b, c) {
        var d = "XY",
            e = [],
            f = [],
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g];
            0 === g && (d = k.b);
            Ya(e, k.j);
            f.push(e.length)
        }
        km(b, d, e, f)
    };

    function O(b, c) {
        F.call(this);
        this.fe(b, c)
    }
    A(O, F);
    l = O.prototype;
    l.Kf = function(b) {
        null === this.j ? this.j = b.j.slice() : Ya(this.j, b.j);
        this.r()
    };
    l.clone = function() {
        var b = new O(null);
        Hj(b, this.b, this.j.slice());
        b.r();
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        var f = this.j,
            g = this.a,
            h, k, n;
        h = 0;
        for (k = f.length; h < k; h += g)
            if (n = Lj(b, c, f[h], f[h + 1]), n < e) {
                e = n;
                for (n = 0; n < g; ++n) d[n] = f[h + n];
                d.length = g
            }
        return e
    };
    l.ee = function() {
        return Uj(this.j, 0, this.j.length, this.a)
    };
    l.ag = function(b) {
        var c = null === this.j ? 0 : this.j.length / this.a;
        if (0 > b || c <= b) return null;
        c = new G(null);
        ak(c, this.b, this.j.slice(b * this.a, (b + 1) * this.a));
        return c
    };
    l.fc = function() {
        var b = this.j,
            c = this.b,
            d = this.a,
            e = [],
            f, g;
        f = 0;
        for (g = b.length; f < g; f += d) {
            var h = new G(null);
            ak(h, c, b.slice(f, f + d));
            e.push(h)
        }
        return e
    };
    l.A = function() {
        return "MultiPoint"
    };
    l.Q = function(b) {
        var c = this.j,
            d = this.a,
            e, f, g, h;
        e = 0;
        for (f = c.length; e < f; e += d)
            if (g = c[e], h = c[e + 1], Id(b, g, h)) return !0;
        return !1
    };
    l.fe = function(b, c) {
        null === b ? Hj(this, "XY", null) : (Ij(this, c, b, 1), null === this.j && (this.j = []), this.j.length = Sj(this.j, 0, b, this.a));
        this.r()
    };

    function P(b, c) {
        F.call(this);
        this.e = [];
        this.o = -1;
        this.s = null;
        this.v = this.t = this.u = -1;
        this.q = null;
        this.he(b, c)
    }
    A(P, F);
    l = P.prototype;
    l.Lf = function(b) {
        if (null === this.j) this.j = b.j.slice(), b = b.e.slice(), this.e.push();
        else {
            var c = this.j.length;
            Ya(this.j, b.j);
            b = b.e.slice();
            var d, e;
            d = 0;
            for (e = b.length; d < e; ++d) b[d] += c
        }
        this.e.push(b);
        this.r()
    };
    l.clone = function() {
        var b = new P(null);
        mm(b, this.b, this.j.slice(), this.e.slice());
        return b
    };
    l.ta = function(b, c, d, e) {
        if (e < Gd(this.d(), b, c)) return e;
        if (this.t != this.c) {
            var f = this.e,
                g = 0,
                h = 0,
                k, n;
            k = 0;
            for (n = f.length; k < n; ++k) var p = f[k],
                h = Oj(this.j, g, p, this.a, h),
                g = p[p.length - 1];
            this.u = Math.sqrt(h);
            this.t = this.c
        }
        f = Al(this);
        g = this.e;
        h = this.a;
        k = this.u;
        n = 0;
        var p = m(void 0) ? void 0 : [NaN, NaN],
            q, r;
        q = 0;
        for (r = g.length; q < r; ++q) {
            var s = g[q];
            e = Qj(f, n, s, h, k, !0, b, c, d, e, p);
            n = s[s.length - 1]
        }
        return e
    };
    l.$a = function(b, c) {
        var d;
        a: {
            d = Al(this);
            var e = this.e,
                f = 0;
            if (0 !== e.length) {
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var k = e[g];
                    if (dk(d, f, k, this.a, b, c)) {
                        d = !0;
                        break a
                    }
                    f = k[k.length - 1]
                }
            }
            d = !1
        }
        return d
    };
    l.uh = function() {
        var b = Al(this),
            c = this.e,
            d = 0,
            e = 0,
            f, g;
        f = 0;
        for (g = c.length; f < g; ++f) var h = c[f],
            e = e + Kj(b, d, h, this.a),
            d = h[h.length - 1];
        return e
    };
    l.ge = function(b) {
        var c;
        m(b) ? (c = Al(this).slice(), mk(c, this.e, this.a, b)) : c = this.j;
        b = c;
        c = this.e;
        var d = this.a,
            e = 0,
            f = m(void 0) ? void 0 : [],
            g = 0,
            h, k;
        h = 0;
        for (k = c.length; h < k; ++h) {
            var n = c[h];
            f[g++] = Vj(b, e, n, d, f[g]);
            e = n[n.length - 1]
        }
        f.length = g;
        return f
    };

    function Bl(b) {
        if (b.o != b.c) {
            var c = b.j,
                d = b.e,
                e = b.a,
                f = 0,
                g = [],
                h, k, n = Kd();
            h = 0;
            for (k = d.length; h < k; ++h) {
                var p = d[h],
                    n = Od(Dd(Infinity, Infinity, -Infinity, -Infinity, void 0), c, f, p[0], e);
                g.push((n[0] + n[2]) / 2, (n[1] + n[3]) / 2);
                f = p[p.length - 1]
            }
            c = Al(b);
            d = b.e;
            e = b.a;
            f = 0;
            h = [];
            k = 0;
            for (n = d.length; k < n; ++k) p = d[k], h = fk(c, f, p, e, g, 2 * k, h), f = p[p.length - 1];
            b.s = h;
            b.o = b.c
        }
        return b.s
    }
    l.Xf = function() {
        var b = new O(null),
            c = Bl(this).slice();
        Hj(b, "XY", c);
        b.r();
        return b
    };

    function Al(b) {
        if (b.v != b.c) {
            var c = b.j,
                d;
            a: {
                d = b.e;
                var e, f;
                e = 0;
                for (f = d.length; e < f; ++e)
                    if (!kk(c, d[e], b.a, void 0)) {
                        d = !1;
                        break a
                    }
                d = !0
            }
            d ? b.q = c : (b.q = c.slice(), b.q.length = mk(b.q, b.e, b.a));
            b.v = b.c
        }
        return b.q
    }
    l.kb = function(b) {
        var c = [],
            d = [],
            e = this.j,
            f = this.e,
            g = this.a;
        b = Math.sqrt(b);
        var h = 0,
            k = 0,
            n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n],
                r = [],
                k = Xj(e, h, q, g, b, c, k, r);
            d.push(r);
            h = q[q.length - 1]
        }
        c.length = k;
        e = new P(null);
        mm(e, "XY", c, d);
        return e
    };
    l.cg = function(b) {
        if (0 > b || this.e.length <= b) return null;
        var c;
        0 === b ? c = 0 : (c = this.e[b - 1], c = c[c.length - 1]);
        b = this.e[b].slice();
        var d = b[b.length - 1];
        if (0 !== c) {
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e) b[e] -= c
        }
        e = new I(null);
        nk(e, this.b, this.j.slice(c, d), b);
        return e
    };
    l.gc = function() {
        var b = this.b,
            c = this.j,
            d = this.e,
            e = [],
            f = 0,
            g, h, k, n;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var p = d[g].slice(),
                q = p[p.length - 1];
            if (0 !== f)
                for (k = 0, n = p.length; k < n; ++k) p[k] -= f;
            k = new I(null);
            nk(k, b, c.slice(f, q), p);
            e.push(k);
            f = q
        }
        return e
    };
    l.A = function() {
        return "MultiPolygon"
    };
    l.Q = function(b) {
        a: {
            var c = Al(this),
                d = this.e,
                e = this.a,
                f = 0,
                g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var k = d[g];
                if (ik(c, f, k, e, b)) {
                    b = !0;
                    break a
                }
                f = k[k.length - 1]
            }
            b = !1
        }
        return b
    };
    l.he = function(b, c) {
        if (null === b) mm(this, "XY", null, this.e);
        else {
            Ij(this, c, b, 3);
            null === this.j && (this.j = []);
            var d = this.j,
                e = this.a,
                f = this.e,
                g = 0,
                f = m(f) ? f : [],
                h = 0,
                k, n;
            k = 0;
            for (n = b.length; k < n; ++k) g = Tj(d, g, b[k], e, f[h]), f[h++] = g, g = g[g.length - 1];
            f.length = h;
            0 === f.length ? this.j.length = 0 : (d = f[f.length - 1], this.j.length = 0 === d.length ? 0 : d[d.length - 1]);
            this.r()
        }
    };

    function mm(b, c, d, e) {
        Hj(b, c, d);
        b.e = e;
        b.r()
    }

    function nm(b, c) {
        var d = "XY",
            e = [],
            f = [],
            g, h, k;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var n = c[g];
            0 === g && (d = n.b);
            var p = e.length;
            k = n.e;
            var q, r;
            q = 0;
            for (r = k.length; q < r; ++q) k[q] += p;
            Ya(e, n.j);
            f.push(k)
        }
        mm(b, d, e, f)
    };

    function om(b, c) {
        return v(b) - v(c)
    }

    function pm(b, c) {
        var d = .5 * b / c;
        return d * d
    }

    function qm(b, c, d, e, f, g) {
        var h = !1,
            k, n;
        k = d.i;
        null !== k && (n = k.uc(), 2 == n || 3 == n ? k.Me(f, g) : (0 == n && k.load(), k.Td(f, g), h = !0));
        f = (0, d.d)(c);
        null != f && (e = f.Zc(e), (0, rm[e.A()])(b, e, d, c));
        return h
    }
    var rm = {
        Point: function(b, c, d, e) {
            var f = d.i;
            if (null !== f) {
                if (2 != f.uc()) return;
                var g = b.a(d.a, "Image");
                g.gb(f);
                g.Sa(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f), b.Ia(c.wa(), 0, 2, 2, c, e))
        },
        LineString: function(b, c, d, e) {
            var f = d.b;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.Ga(null, f);
                g.ac(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f), b.Ia(yl(c), 0, 2, 2, c, e))
        },
        Polygon: function(b, c, d, e) {
            var f = d.e,
                g = d.b;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.Ga(f, g);
                h.Ab(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f),
                b.Ia(pk(c), 0, 2, 2, c, e))
        },
        MultiPoint: function(b, c, d, e) {
            var f = d.i;
            if (null !== f) {
                if (2 != f.uc()) return;
                var g = b.a(d.a, "Image");
                g.gb(f);
                g.Ra(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f), d = c.j, b.Ia(d, 0, d.length, c.a, c, e))
        },
        MultiLineString: function(b, c, d, e) {
            var f = d.b;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.Ga(null, f);
                g.bc(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f), d = zl(c), b.Ia(d, 0, d.length, 2, c, e))
        },
        MultiPolygon: function(b, c, d, e) {
            var f = d.e,
                g = d.b;
            if (null !== g || null !== f) {
                var h = b.a(d.a, "Polygon");
                h.Ga(f,
                    g);
                h.cc(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f), d = Bl(c), b.Ia(d, 0, d.length, 2, c, e))
        },
        GeometryCollection: function(b, c, d, e) {
            c = c.i;
            var f, g;
            f = 0;
            for (g = c.length; f < g; ++f)(0, rm[c[f].A()])(b, c[f], d, e)
        },
        Circle: function(b, c, d, e) {
            var f = d.e,
                g = d.b;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.Ga(f, g);
                h.$b(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.ya(f), b.Ia(c.Gb(), 0, 2, 2, c, e))
        }
    };

    function sm(b) {
        wg.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state
        });
        this.f = m(b.resolutions) ? b.resolutions : null
    }
    A(sm, wg);
    sm.prototype.K = function(b) {
        b = b.target;
        switch (b.state) {
            case 1:
                this.dispatchEvent(new tm(um, b));
                break;
            case 2:
                this.dispatchEvent(new tm(vm, b));
                break;
            case 3:
                this.dispatchEvent(new tm(wm, b))
        }
    };

    function xm(b, c) {
        ym(b).src = c
    }

    function tm(b, c) {
        kc.call(this, b);
        this.image = c
    }
    A(tm, kc);
    var um = "imageloadstart",
        vm = "imageloadend",
        wm = "imageloaderror";
    var zm;
    (function() {
        var b = {
            Gd: {}
        };
        (function() {
            function c(b, d) {
                if (!(this instanceof c)) return new c(b, d);
                this.Nc = Math.max(4, b || 9);
                this.xd = Math.max(2, Math.ceil(.4 * this.Nc));
                d && this.Bf(d);
                this.clear()
            }

            function d(b, c) {
                b.bbox = e(b, 0, b.children.length, c)
            }

            function e(b, c, d, e) {
                for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++) h = b.children[c], f(g, b.Y ? e(h) : h.bbox);
                return g
            }

            function f(b, c) {
                b[0] = Math.min(b[0], c[0]);
                b[1] = Math.min(b[1], c[1]);
                b[2] = Math.max(b[2], c[2]);
                b[3] = Math.max(b[3], c[3])
            }

            function g(b, c) {
                return b.bbox[0] -
                    c.bbox[0]
            }

            function h(b, c) {
                return b.bbox[1] - c.bbox[1]
            }

            function k(b) {
                return (b[2] - b[0]) * (b[3] - b[1])
            }

            function n(b) {
                return b[2] - b[0] + (b[3] - b[1])
            }

            function p(b, c) {
                return b[0] <= c[0] && b[1] <= c[1] && c[2] <= b[2] && c[3] <= b[3]
            }

            function q(b, c) {
                return c[0] <= b[2] && c[1] <= b[3] && c[2] >= b[0] && c[3] >= b[1]
            }

            function r(b, c, d, e, f) {
                for (var g = [c, d], h; g.length;) d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, s(b, c, d, h, f), g.push(c, h, h, d))
            }

            function s(b, c, d, e, f) {
                for (var g, h, k, n, p; d > c;) {
                    600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g),
                        n = .5 * Math.exp(2 * k / 3), p = .5 * Math.sqrt(k * n * (g - n) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * n / g + p)), h = Math.min(d, Math.floor(e + (g - h) * n / g + p)), s(b, k, h, e, f));
                    g = b[e];
                    h = c;
                    n = d;
                    t(b, c, e);
                    for (0 < f(b[d], g) && t(b, c, d); h < n;) {
                        t(b, h, n);
                        h++;
                        for (n--; 0 > f(b[h], g);) h++;
                        for (; 0 < f(b[n], g);) n--
                    }
                    0 === f(b[c], g) ? t(b, c, n) : (n++, t(b, n, d));
                    n <= e && (c = n + 1);
                    e <= n && (d = n - 1)
                }
            }

            function t(b, c, d) {
                var e = b[c];
                b[c] = b[d];
                b[d] = e
            }
            c.prototype = {
                all: function() {
                    return this.td(this.data, [])
                },
                search: function(b) {
                    var c = this.data,
                        d = [],
                        e = this.ga;
                    if (!q(b, c.bbox)) return d;
                    for (var f = [], g, h, k, n; c;) {
                        g = 0;
                        for (h = c.children.length; g < h; g++) k = c.children[g], n = c.Y ? e(k) : k.bbox, q(b, n) && (c.Y ? d.push(k) : p(b, n) ? this.td(k, d) : f.push(k));
                        c = f.pop()
                    }
                    return d
                },
                load: function(b) {
                    if (!b || !b.length) return this;
                    if (b.length < this.xd) {
                        for (var c = 0, d = b.length; c < d; c++) this.Xa(b[c]);
                        return this
                    }
                    b = this.vd(b.slice(), 0, b.length - 1, 0);
                    this.data.children.length ? this.data.height === b.height ? this.yd(this.data, b) : (this.data.height < b.height && (c = this.data, this.data = b, b = c), this.wd(b, this.data.height - b.height - 1, !0)) :
                        this.data = b;
                    return this
                },
                Xa: function(b) {
                    b && this.wd(b, this.data.height - 1);
                    return this
                },
                clear: function() {
                    this.data = {
                        children: [],
                        height: 1,
                        bbox: [Infinity, Infinity, -Infinity, -Infinity],
                        Y: !0
                    };
                    return this
                },
                remove: function(b) {
                    if (!b) return this;
                    for (var c = this.data, d = this.ga(b), e = [], f = [], g, h, k, n; c || e.length;) {
                        c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), n = !0);
                        if (c.Y && (k = c.children.indexOf(b), -1 !== k)) {
                            c.children.splice(k, 1);
                            e.push(c);
                            this.Af(e);
                            break
                        }
                        n || c.Y || !p(c.bbox, d) ? h ? (g++, c = h.children[g], n = !1) : c = null : (e.push(c),
                            f.push(g), g = 0, h = c, c = c.children[0])
                    }
                    return this
                },
                ga: function(b) {
                    return b
                },
                Qc: function(b, c) {
                    return b[0] - c[0]
                },
                Rc: function(b, c) {
                    return b[1] - c[1]
                },
                toJSON: function() {
                    return this.data
                },
                td: function(b, c) {
                    for (var d = []; b;) b.Y ? c.push.apply(c, b.children) : d.push.apply(d, b.children), b = d.pop();
                    return c
                },
                vd: function(b, c, e, f) {
                    var g = e - c + 1,
                        h = this.Nc,
                        k;
                    if (g <= h) return k = {
                        children: b.slice(c, e + 1),
                        height: 1,
                        bbox: null,
                        Y: !0
                    }, d(k, this.ga), k;
                    f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
                    k = {
                        children: [],
                        height: f,
                        bbox: null
                    };
                    var g = Math.ceil(g / h),
                        h = g * Math.ceil(Math.sqrt(h)),
                        n, p, q;
                    for (r(b, c, e, h, this.Qc); c <= e; c += h)
                        for (p = Math.min(c + h - 1, e), r(b, c, p, g, this.Rc), n = c; n <= p; n += g) q = Math.min(n + g - 1, p), k.children.push(this.vd(b, n, q, f - 1));
                    d(k, this.ga);
                    return k
                },
                zf: function(b, c, d, e) {
                    for (var f, g, h, n, p, q, r, s;;) {
                        e.push(c);
                        if (c.Y || e.length - 1 === d) break;
                        r = s = Infinity;
                        f = 0;
                        for (g = c.children.length; f < g; f++) {
                            h = c.children[f];
                            p = k(h.bbox);
                            q = b;
                            var t = h.bbox;
                            q = (Math.max(t[2], q[2]) - Math.min(t[0], q[0])) * (Math.max(t[3], q[3]) - Math.min(t[1],
                                q[1])) - p;
                            q < s ? (s = q, r = p < r ? p : r, n = h) : q === s && p < r && (r = p, n = h)
                        }
                        c = n
                    }
                    return c
                },
                wd: function(b, c, d) {
                    var e = this.ga;
                    d = d ? b.bbox : e(b);
                    var e = [],
                        g = this.zf(d, this.data, c, e);
                    g.children.push(b);
                    for (f(g.bbox, d); 0 <= c;)
                        if (e[c].children.length > this.Nc) this.Cf(e, c), c--;
                        else break;
                    this.wf(d, e, c)
                },
                Cf: function(b, c) {
                    var e = b[c],
                        f = e.children.length,
                        g = this.xd;
                    this.xf(e, g, f);
                    f = {
                        children: e.children.splice(this.yf(e, g, f)),
                        height: e.height
                    };
                    e.Y && (f.Y = !0);
                    d(e, this.ga);
                    d(f, this.ga);
                    c ? b[c - 1].children.push(f) : this.yd(e, f)
                },
                yd: function(b,
                    c) {
                    this.data = {
                        children: [b, c],
                        height: b.height + 1
                    };
                    d(this.data, this.ga)
                },
                yf: function(b, c, d) {
                    var f, g, h, n, p, q, r;
                    p = q = Infinity;
                    for (f = c; f <= d - c; f++) {
                        g = e(b, 0, f, this.ga);
                        h = e(b, f, d, this.ga);
                        var s = g,
                            t = h;
                        n = Math.max(s[0], t[0]);
                        var aa = Math.max(s[1], t[1]),
                            la = Math.min(s[2], t[2]),
                            s = Math.min(s[3], t[3]);
                        n = Math.max(0, la - n) * Math.max(0, s - aa);
                        g = k(g) + k(h);
                        n < p ? (p = n, r = f, q = g < q ? g : q) : n === p && g < q && (q = g, r = f)
                    }
                    return r
                },
                xf: function(b, c, d) {
                    var e = b.Y ? this.Qc : g,
                        f = b.Y ? this.Rc : h,
                        k = this.ud(b, c, d, e);
                    c = this.ud(b, c, d, f);
                    k < c && b.children.sort(e)
                },
                ud: function(b, c, d, g) {
                    b.children.sort(g);
                    g = this.ga;
                    var h = e(b, 0, c, g),
                        k = e(b, d - c, d, g),
                        p = n(h) + n(k),
                        q, r;
                    for (q = c; q < d - c; q++) r = b.children[q], f(h, b.Y ? g(r) : r.bbox), p += n(h);
                    for (q = d - c - 1; q >= c; q--) r = b.children[q], f(k, b.Y ? g(r) : r.bbox), p += n(k);
                    return p
                },
                wf: function(b, c, d) {
                    for (; 0 <= d; d--) f(c[d].bbox, b)
                },
                Af: function(b) {
                    for (var c = b.length - 1, e; 0 <= c; c--) 0 === b[c].children.length ? 0 < c ? (e = b[c - 1].children, e.splice(e.indexOf(b[c]), 1)) : this.clear() : d(b[c], this.ga)
                },
                Bf: function(b) {
                    var c = ["return a", " - b", ";"];
                    this.Qc = new Function("a",
                        "b", c.join(b[0]));
                    this.Rc = new Function("a", "b", c.join(b[1]));
                    this.ga = new Function("a", "return [a" + b.join(", a") + "];")
                }
            };
            "function" === typeof define && define.Vi ? define("rbush", function() {
                return c
            }) : "undefined" !== typeof b ? b.Gd = c : "undefined" !== typeof self ? self.a = c : window.a = c
        })();
        zm = b.Gd
    })();

    function Am(b) {
        this.c = zm(b);
        this.a = {}
    }
    l = Am.prototype;
    l.Xa = function(b, c) {
        var d = [b[0], b[1], b[2], b[3], c];
        this.c.Xa(d);
        this.a[v(c)] = d
    };
    l.load = function(b, c) {
        for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
            var g = b[e],
                h = c[e],
                g = [g[0], g[1], g[2], g[3], h];
            d[e] = g;
            this.a[v(h)] = g
        }
        this.c.load(d)
    };
    l.remove = function(b) {
        b = v(b);
        var c = this.a[b];
        tb(this.a, b);
        return null !== this.c.remove(c)
    };

    function Bm(b) {
        b = b.c.all();
        return Ra(b, function(b) {
            return b[4]
        })
    }

    function Cm(b, c) {
        var d = b.c.search(c);
        return Ra(d, function(b) {
            return b[4]
        })
    }
    l.forEach = function(b, c) {
        return Dm(Bm(this), b, c)
    };

    function Em(b, c, d, e) {
        return Dm(Cm(b, c), d, e)
    }

    function Dm(b, c, d) {
        for (var e, f = 0, g = b.length; f < g && !(e = c.call(d, b[f])); f++);
        return e
    }
    l.R = function() {
        return rb(this.a)
    };
    l.clear = function() {
        this.c.clear();
        this.a = {}
    };

    function Fm(b) {
        b = m(b) ? b : {};
        wg.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0
        });
        this.a = new Am;
        this.b = {};
        this.d = {};
        this.f = {};
        this.g = {};
        m(b.features) && this.sa(b.features)
    }
    A(Fm, wg);

    function Gm(b, c, d) {
        b.g[c] = [C(d, "change", b.ke, !1, b), C(d, "propertychange", b.ke, !1, b)]
    }

    function Hm(b, c, d) {
        var e = d.a;
        m(e) ? b.d[e.toString()] = d : b.f[c] = d
    }
    l = Fm.prototype;
    l.Wb = function(b) {
        this.sa(b);
        this.r()
    };
    l.sa = function(b) {
        var c, d, e, f, g = [],
            h = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            f = b[d];
            c = v(f).toString();
            Gm(this, c, f);
            var k = f.G();
            null != k ? (c = k.d(), g.push(c), h.push(f)) : this.b[c] = f
        }
        this.a.load(g, h);
        d = 0;
        for (e = b.length; d < e; d++) f = b[d], c = v(f).toString(), Hm(this, c, f), this.dispatchEvent(new Im("addfeature", f))
    };
    l.clear = function(b) {
        if (b) {
            for (var c in this.g) Oa(this.g[c], Pc);
            this.g = {};
            this.d = {};
            this.f = {}
        } else b = this.ji, this.a.forEach(b, this), jb(this.b, b, this);
        this.a.clear();
        this.b = {};
        this.dispatchEvent(new Im("clear"));
        this.r()
    };
    l.Hd = function(b, c) {
        return this.a.forEach(b, c)
    };

    function Jm(b, c, d) {
        Km(b, [c[0], c[1], c[0], c[1]], function(b) {
            if (b.G().$a(c[0], c[1])) return d.call(void 0, b)
        })
    }

    function Km(b, c, d, e) {
        Em(b.a, c, d, e)
    }

    function Lm(b, c, d, e) {
        Km(b, c, d, e)
    }
    l.sc = function() {
        var b = Bm(this.a);
        rb(this.b) || Ya(b, mb(this.b));
        return b
    };
    l.Tf = function(b) {
        var c = [];
        Jm(this, b, function(b) {
            c.push(b)
        });
        return c
    };
    l.rc = function() {
        return this.a.c.data.bbox
    };
    l.ke = function(b) {
        b = b.target;
        var c = v(b).toString(),
            d = b.G();
        if (null != d)
            if (d = d.d(), c in this.b) delete this.b[c], this.a.Xa(d, b);
            else {
                var e = this.a,
                    f = v(b);
                Md(e.a[f].slice(0, 4), d) || (e.remove(b), e.Xa(d, b))
            } else c in this.b || (this.a.remove(b), this.b[c] = b);
        d = b.a;
        m(d) ? (d = d.toString(), c in this.f ? (delete this.f[c], this.d[d] = b) : this.d[d] !== b && (Mm(this, b), this.d[d] = b)) : c in this.f || (Mm(this, b), this.f[c] = b);
        this.r();
        this.dispatchEvent(new Im("changefeature", b))
    };
    l.R = function() {
        return this.a.R() && rb(this.b)
    };
    l.ob = da;
    l.ji = function(b) {
        var c = v(b).toString();
        Oa(this.g[c], Pc);
        delete this.g[c];
        var d = b.a;
        m(d) ? delete this.d[d.toString()] : delete this.f[c];
        this.dispatchEvent(new Im("removefeature", b))
    };

    function Mm(b, c) {
        for (var d in b.d)
            if (b.d[d] === c) {
                delete b.d[d];
                break
            }
    }

    function Im(b, c) {
        kc.call(this, b);
        this.feature = c
    }
    A(Im, kc);

    function Nm(b) {
        Xl.call(this, b);
        this.b = null;
        this.d = td()
    }
    A(Nm, Xl);
    Nm.prototype.La = function(b, c, d, e) {
        var f = this.a;
        return f.a().s(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(b) {
            return d.call(e, b, f)
        })
    };
    Nm.prototype.p = function() {
        return null === this.b ? null : ym(this.b)
    };
    Nm.prototype.q = function() {
        return this.d
    };
    Nm.prototype.k = function(b, c) {
        var d = b.pixelRatio,
            e = b.viewState,
            f = e.center,
            g = e.resolution,
            h = e.rotation,
            k, n = this.a.a(),
            p = b.viewHints;
        k = b.extent;
        m(c.extent) && (k = Vd(k, c.extent));
        p[0] || p[1] || Xd(k) || (e = e.projection, p = n.k, null === p || (e = p), k = Om(n, k, g, d, e), null !== k && Gi(this, k) && (this.b = k));
        if (null !== this.b) {
            k = this.b;
            var e = k.extent,
                p = k.resolution,
                q = k.e,
                g = d * p / (g * q);
            Bi(this.d, d * b.size[0] / 2, d * b.size[1] / 2, g, g, h, q * (e[0] - f[0]) / p, q * (f[1] - e[3]) / p);
            Ii(b.attributions, k.d);
            Ji(b, n)
        }
        return !0
    };

    function Pm(b) {
        Xl.call(this, b);
        this.b = this.e = null;
        this.g = !1;
        this.n = null;
        this.o = td();
        this.t = this.s = NaN;
        this.f = this.d = null
    }
    A(Pm, Xl);
    Pm.prototype.p = function() {
        return this.e
    };
    Pm.prototype.q = function() {
        return this.o
    };
    Pm.prototype.k = function(b, c) {
        var d = b.pixelRatio,
            e = b.viewState,
            f = e.projection,
            g = this.a,
            h = g.a(),
            k = Og(h, f),
            n = h.dc(),
            p = Gg(k, e.resolution),
            q = h.Fb(p, b.pixelRatio, f),
            r = k.a[p],
            s = r / (q / Fg(k, p)),
            t = e.center,
            x;
        r == e.resolution ? (t = Li(t, r, b.size), x = Td(t, r, e.rotation, b.size)) : x = b.extent;
        m(c.extent) && (x = Vd(x, c.extent));
        if (Xd(x)) return !1;
        var y = Cg(k, x, r),
            z = q * Qe(y),
            B = q * (y.c - y.b + 1),
            w, K;
        null === this.e ? (K = nf(z, B), this.e = K.canvas, this.b = [z, B], this.n = K, this.g = !$l(this.b)) : (w = this.e, K = this.n, this.b[0] < z || this.b[1] < B || this.t !==
            q || this.g && (this.b[0] > z || this.b[1] > B) ? (w.width = z, w.height = B, this.b = [z, B], this.g = !$l(this.b), this.d = null) : (z = this.b[0], B = this.b[1], (w = p != this.s) || (w = this.d, w = !(w.a <= y.a && y.d <= w.d && w.b <= y.b && y.c <= w.c)), w && (this.d = null)));
        var H, D;
        null === this.d ? (z /= q, B /= q, H = y.a - Math.floor((z - Qe(y)) / 2), D = y.b - Math.floor((B - (y.c - y.b + 1)) / 2), this.s = p, this.t = q, this.d = new Me(H, H + z - 1, D, D + B - 1), this.f = Array(z * B), B = this.d) : (B = this.d, z = Qe(B));
        w = {};
        w[p] = {};
        var J = [],
            T = this.i(h, w),
            $ = g.d(),
            L = Kd(),
            aa = new Me(0, 0, 0, 0),
            la, ga, fa;
        for (D = y.a; D <=
            y.d; ++D)
            for (fa = y.b; fa <= y.c; ++fa) ga = Ni(h, p, D, fa, d, f), H = ga.state, 2 == H || 4 == H || 3 == H && !$ ? w[p][Le(ga.a)] = ga : (la = k.c(ga.a, T, null, aa, L), la || (J.push(ga), la = k.b(ga.a, aa, L), null === la || T(p + 1, la)));
        T = 0;
        for (la = J.length; T < la; ++T) ga = J[T], D = q * (ga.a[1] - B.a), fa = q * (B.c - ga.a[2]), K.clearRect(D, fa, q, q);
        J = Ra(nb(w), Number);
        ab(J);
        var Qa = h.P,
            cb = Qd(zg(k, [p, B.a, B.c], L)),
            Ja, Mc, rh, Pf, $d, ek, T = 0;
        for (la = J.length; T < la; ++T)
            if (Ja = J[T], q = h.Fb(Ja, d, f), Pf = w[Ja], Ja == p)
                for (rh in Pf) ga = Pf[rh], Mc = (ga.a[2] - B.b) * z + (ga.a[1] - B.a), this.f[Mc] != ga &&
                    (D = q * (ga.a[1] - B.a), fa = q * (B.c - ga.a[2]), H = ga.state, 4 != H && (3 != H || $) && Qa || K.clearRect(D, fa, q, q), 2 == H && K.drawImage(Qm(ga), n, n, q, q, D, fa, q, q), this.f[Mc] = ga);
            else
                for (rh in Ja = k.a[Ja] / r, Pf)
                    for (ga = Pf[rh], Mc = zg(k, ga.a, L), D = (Mc[0] - cb[0]) / s, fa = (cb[1] - Mc[3]) / s, ek = Ja * q, $d = Ja * q, H = ga.state, 4 != H && Qa || K.clearRect(D, fa, ek, $d), 2 == H && K.drawImage(Qm(ga), n, n, q, q, D, fa, ek, $d), ga = Ag(k, Mc, p, aa), H = Math.max(ga.a, B.a), fa = Math.min(ga.d, B.d), D = Math.max(ga.b, B.b), ga = Math.min(ga.c, B.c); H <= fa; ++H)
                        for ($d = D; $d <= ga; ++$d) Mc = ($d - B.b) * z +
                            (H - B.a), this.f[Mc] = void 0;
        Ki(b.usedTiles, h, p, y);
        Mi(b, h, k, d, f, x, p, g.b());
        Hi(b, h);
        Ji(b, h);
        Bi(this.o, d * b.size[0] / 2, d * b.size[1] / 2, d * s / e.resolution, d * s / e.resolution, e.rotation, (cb[0] - t[0]) / s, (t[1] - cb[1]) / s);
        return !0
    };

    function Rm(b) {
        Xl.call(this, b);
        this.d = !1;
        this.o = -1;
        this.n = NaN;
        this.f = Kd();
        this.b = this.g = null;
        this.e = nf()
    }
    A(Rm, Xl);
    Rm.prototype.l = function(b, c, d) {
        var e = Zl(this, b);
        Yl(this, "precompose", d, b, e);
        var f = this.b;
        if (null !== f && !f.R()) {
            var g;
            bd(this.a, "render") ? (this.e.canvas.width = d.canvas.width, this.e.canvas.height = d.canvas.height, g = this.e) : g = d;
            var h = g.globalAlpha;
            g.globalAlpha = c.opacity;
            Wl(f, g, b.pixelRatio, e, b.viewState.rotation, b.skippedFeatureUids);
            g != d && (Yl(this, "render", g, b, e), d.drawImage(g.canvas, 0, 0));
            g.globalAlpha = h
        }
        Yl(this, "postcompose", d, b, e)
    };
    Rm.prototype.La = function(b, c, d, e) {
        if (null !== this.b) {
            var f = this.a,
                g = {};
            return this.b.b(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(b) {
                var c = v(b).toString();
                if (!(c in g)) return g[c] = !0, d.call(e, b, f)
            })
        }
    };
    Rm.prototype.s = function() {
        Fi(this)
    };
    Rm.prototype.k = function(b) {
        function c(b) {
            var c;
            m(b.d) ? c = b.d.call(b, k) : m(d.b) && (c = (0, d.b)(b, k));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e) g = qm(q, b, c[e], pm(k, n), this.s, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }
        var d = this.a,
            e = d.a();
        Ii(b.attributions, e.p);
        Ji(b, e);
        if (!this.d && (!d.p && b.viewHints[0] || b.viewHints[1])) return !0;
        var f = b.extent,
            g = b.viewState,
            h = g.projection,
            k = g.resolution,
            n = b.pixelRatio;
        b = d.c;
        var p = d.d,
            g = d.get("renderOrder");
        m(g) || (g = om);
        f = Ed(f, p * k);
        if (!this.d && this.n == k &&
            this.o == b && this.g == g && Hd(this.f, f)) return !0;
        jc(this.b);
        this.b = null;
        this.d = !1;
        var q = new Sl(.5 * k / n, f, k, d.d);
        e.ob(f, k, h);
        if (null === g) Km(e, f, c, this);
        else {
            var r = [];
            Lm(e, f, function(b) {
                r.push(b)
            }, this);
            ab(r, g);
            Oa(r, c, this)
        }
        Tl(q);
        this.n = k;
        this.o = b;
        this.g = g;
        this.f = f;
        this.b = q;
        return !0
    };

    function Sm(b, c) {
        Ti.call(this, 0, c);
        this.d = nf();
        this.a = this.d.canvas;
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        jf(b, this.a, 0);
        this.c = !0;
        this.e = td()
    }
    A(Sm, Ti);
    Sm.prototype.Sc = function(b) {
        return b instanceof ml ? new Nm(b) : b instanceof nl ? new Pm(b) : b instanceof pl ? new Rm(b) : null
    };

    function Tm(b, c, d) {
        var e = b.f,
            f = b.d;
        if (bd(e, c)) {
            var g = d.extent,
                h = d.pixelRatio,
                k = d.viewState,
                n = k.resolution,
                p = k.rotation;
            Bi(b.e, b.a.width / 2, b.a.height / 2, h / n, -h / n, -p, -k.center[0], -k.center[1]);
            k = new Sl(.5 * n / h, g, n);
            g = new ql(f, h, g, b.e, p);
            e.dispatchEvent(new rk(c, e, g, k, d, f, null));
            Tl(k);
            k.R() || Wl(k, f, h, b.e, p, {});
            Cl(g);
            b.i = k
        }
    }
    Sm.prototype.A = function() {
        return "canvas"
    };
    Sm.prototype.Bc = function(b) {
        if (null === b) this.c && (jg(this.a, !1), this.c = !1);
        else {
            var c = this.d,
                d = b.size[0] * b.pixelRatio,
                e = b.size[1] * b.pixelRatio;
            this.a.width != d || this.a.height != e ? (this.a.width = d, this.a.height = e) : c.clearRect(0, 0, this.a.width, this.a.height);
            Ui(b);
            Tm(this, "precompose", b);
            var d = b.layerStatesArray,
                e = b.viewState.resolution,
                f, g, h, k;
            f = 0;
            for (g = d.length; f < g; ++f) k = d[f], h = k.layer, h = Wi(this, h), zi(k, e) && "ready" == k.l && h.k(b, k) && h.l(b, k, c);
            Tm(this, "postcompose", b);
            this.c || (jg(this.a, !0), this.c = !0);
            Xi(this, b);
            b.postRenderFunctions.push(Vi)
        }
    };

    function Um(b, c) {
        Ei.call(this, b);
        this.target = c
    }
    A(Um, Ei);
    Um.prototype.e = da;
    Um.prototype.k = da;

    function Vm(b) {
        var c = ff("DIV");
        c.style.position = "absolute";
        Um.call(this, b, c);
        this.b = null;
        this.d = vd()
    }
    A(Vm, Um);
    Vm.prototype.La = function(b, c, d, e) {
        var f = this.a;
        return f.a().s(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(b) {
            return d.call(e, b, f)
        })
    };
    Vm.prototype.e = function() {
        hf(this.target);
        this.b = null
    };
    Vm.prototype.f = function(b, c) {
        var d = b.viewState,
            e = d.center,
            f = d.resolution,
            g = d.rotation,
            h = this.b,
            k = this.a.a(),
            n = b.viewHints,
            p = b.extent;
        m(c.extent) && (p = Vd(p, c.extent));
        n[0] || n[1] || Xd(p) || (d = d.projection, n = k.k, null === n || (d = n), p = Om(k, p, f, b.pixelRatio, d), null === p || Gi(this, p) && (h = p));
        null !== h && (d = h.extent, n = h.resolution, p = td(), Bi(p, b.size[0] / 2, b.size[1] / 2, n / f, n / f, g, (d[0] - e[0]) / n, (e[1] - d[3]) / n), h != this.b && (e = ym(h, this), e.style.maxWidth = "none", e.style.position = "absolute", hf(this.target), this.target.appendChild(e),
            this.b = h), Ci(p, this.d) || (rf(this.target, p), wd(this.d, p)), Ii(b.attributions, h.d), Ji(b, k));
        return !0
    };

    function Wm(b) {
        var c = ff("DIV");
        c.style.position = "absolute";
        Um.call(this, b, c);
        this.d = !0;
        this.q = 1;
        this.g = 0;
        this.b = {}
    }
    A(Wm, Um);
    Wm.prototype.e = function() {
        hf(this.target);
        this.g = 0
    };
    Wm.prototype.f = function(b, c) {
        if (!c.visible) return this.d && (jg(this.target, !1), this.d = !1), !0;
        var d = b.pixelRatio,
            e = b.viewState,
            f = e.projection,
            g = this.a,
            h = g.a(),
            k = Og(h, f),
            n = h.dc(),
            p = Gg(k, e.resolution),
            q = k.a[p],
            r = e.center,
            s;
        q == e.resolution ? (r = Li(r, q, b.size), s = Td(r, q, e.rotation, b.size)) : s = b.extent;
        m(c.extent) && (s = Vd(s, c.extent));
        var q = Cg(k, s, q),
            t = {};
        t[p] = {};
        var x = this.i(h, t),
            y = g.d(),
            z = Kd(),
            B = new Me(0, 0, 0, 0),
            w, K, H, D;
        for (H = q.a; H <= q.d; ++H)
            for (D = q.b; D <= q.c; ++D) w = Ni(h, p, H, D, d, f), K = w.state, 2 == K ? t[p][Le(w.a)] =
                w : 4 == K || 3 == K && !y || (K = k.c(w.a, x, null, B, z), K || (w = k.b(w.a, B, z), null === w || x(p + 1, w)));
        var J;
        if (this.g != h.c) {
            for (J in this.b) y = this.b[+J], kf(y.target);
            this.b = {};
            this.g = h.c
        }
        z = Ra(nb(t), Number);
        ab(z);
        var x = {},
            T;
        H = 0;
        for (D = z.length; H < D; ++H) {
            J = z[H];
            J in this.b ? y = this.b[J] : (y = Dg(k, r[0], r[1], k.a[J], !1, void 0), y = new Xm(k, y), x[J] = !0, this.b[J] = y);
            J = t[J];
            for (T in J) {
                w = y;
                K = J[T];
                var $ = n,
                    L = K.a,
                    aa = L[0],
                    la = L[1],
                    ga = L[2],
                    L = Le(L);
                if (!(L in w.c)) {
                    var aa = Fg(w.e, aa),
                        fa = Qm(K, w),
                        Qa = fa.style;
                    Qa.maxWidth = "none";
                    var cb = void 0,
                        Ja =
                        void 0;
                    0 < $ ? (cb = ff("DIV"), Ja = cb.style, Ja.overflow = "hidden", Ja.width = aa + "px", Ja.height = aa + "px", Qa.position = "absolute", Qa.left = -$ + "px", Qa.top = -$ + "px", Qa.width = aa + 2 * $ + "px", Qa.height = aa + 2 * $ + "px", cb.appendChild(fa)) : (Qa.width = aa + "px", Qa.height = aa + "px", cb = fa, Ja = Qa);
                    Ja.position = "absolute";
                    Ja.left = (la - w.b[1]) * aa + "px";
                    Ja.top = (w.b[2] - ga) * aa + "px";
                    null === w.a && (w.a = document.createDocumentFragment());
                    w.a.appendChild(cb);
                    w.c[L] = K
                }
            }
            null !== y.a && (y.target.appendChild(y.a), y.a = null)
        }
        n = Ra(nb(this.b), Number);
        ab(n);
        H = td();
        T = 0;
        for (z = n.length; T < z; ++T)
            if (J = n[T], y = this.b[J], J in t)
                if (w = y.f, D = y.i, Bi(H, b.size[0] / 2, b.size[1] / 2, w / e.resolution, w / e.resolution, e.rotation, (D[0] - r[0]) / w, (r[1] - D[1]) / w), D = y, w = H, Ci(w, D.d) || (rf(D.target, w), wd(D.d, w)), J in x) {
                    for (--J; 0 <= J; --J)
                        if (J in this.b) {
                            D = this.b[J].target;
                            D.parentNode && D.parentNode.insertBefore(y.target, D.nextSibling);
                            break
                        }
                    0 > J && jf(this.target, y.target, 0)
                } else {
                    if (!b.viewHints[0] && !b.viewHints[1]) {
                        K = Ag(y.e, s, y.b[0], B);
                        J = [];
                        w = D = void 0;
                        for (w in y.c) D = y.c[w], K.contains(D.a) || J.push(D);
                        $ = K = void 0;
                        K = 0;
                        for ($ = J.length; K < $; ++K) D = J[K], w = Le(D.a), kf(Qm(D, y)), delete y.c[w]
                    }
                } else kf(y.target), delete this.b[J];
        c.opacity != this.q && (this.q = this.target.style.opacity = c.opacity);
        c.visible && !this.d && (jg(this.target, !0), this.d = !0);
        Ki(b.usedTiles, h, p, q);
        Mi(b, h, k, d, f, s, p, g.b());
        Hi(b, h);
        Ji(b, h);
        return !0
    };

    function Xm(b, c) {
        this.target = ff("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.e = b;
        this.b = c;
        this.i = Qd(zg(b, c));
        this.f = b.a[c[0]];
        this.c = {};
        this.a = null;
        this.d = vd()
    };

    function Ym(b) {
        this.g = nf();
        var c = this.g.canvas;
        c.style.maxWidth = "none";
        c.style.position = "absolute";
        Um.call(this, b, c);
        this.d = !1;
        this.n = -1;
        this.p = NaN;
        this.q = Kd();
        this.b = this.l = null;
        this.s = td();
        this.o = td()
    }
    A(Ym, Um);
    Ym.prototype.k = function(b, c) {
        var d = b.viewState,
            e = d.center,
            f = d.rotation,
            g = d.resolution,
            d = b.pixelRatio,
            h = b.size[0],
            k = b.size[1],
            n = h * d,
            p = k * d,
            e = Bi(this.s, d * h / 2, d * k / 2, d / g, -d / g, -f, -e[0], -e[1]),
            g = this.g;
        g.canvas.width = n;
        g.canvas.height = p;
        h = Bi(this.o, 0, 0, 1 / d, 1 / d, 0, -(n - h) / 2 * d, -(p - k) / 2 * d);
        rf(g.canvas, h);
        Zm(this, "precompose", b, e);
        h = this.b;
        null === h || h.R() || (g.globalAlpha = c.opacity, Wl(h, g, d, e, f, b.skippedFeatureUids), Zm(this, "render", b, e));
        Zm(this, "postcompose", b, e)
    };

    function Zm(b, c, d, e) {
        var f = b.g;
        b = b.a;
        bd(b, c) && (e = new ql(f, d.pixelRatio, d.extent, e, d.viewState.rotation), b.dispatchEvent(new rk(c, b, e, null, d, f, null)), Cl(e))
    }
    Ym.prototype.La = function(b, c, d, e) {
        if (null !== this.b) {
            var f = this.a,
                g = {};
            return this.b.b(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(b) {
                var c = v(b).toString();
                if (!(c in g)) return g[c] = !0, d.call(e, b, f)
            })
        }
    };
    Ym.prototype.t = function() {
        Fi(this)
    };
    Ym.prototype.f = function(b) {
        function c(b) {
            var c;
            m(b.d) ? c = b.d.call(b, k) : m(d.b) && (c = (0, d.b)(b, k));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e) g = qm(q, b, c[e], pm(k, n), this.t, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }
        var d = this.a,
            e = d.a();
        Ii(b.attributions, e.p);
        Ji(b, e);
        if (!this.d && (!d.p && b.viewHints[0] || b.viewHints[1])) return !0;
        var f = b.extent,
            g = b.viewState,
            h = g.projection,
            k = g.resolution,
            n = b.pixelRatio;
        b = d.c;
        var p = d.d,
            g = d.get("renderOrder");
        m(g) || (g = om);
        f = Ed(f, p * k);
        if (!this.d && this.p == k &&
            this.n == b && this.l == g && Hd(this.q, f)) return !0;
        jc(this.b);
        this.b = null;
        this.d = !1;
        var q = new Sl(.5 * k / n, f, k, d.d);
        e.ob(f, k, h);
        if (null === g) Km(e, f, c, this);
        else {
            var r = [];
            Lm(e, f, function(b) {
                r.push(b)
            }, this);
            ab(r, g);
            Oa(r, c, this)
        }
        Tl(q);
        this.p = k;
        this.n = b;
        this.l = g;
        this.q = f;
        this.b = q;
        return !0
    };

    function $m(b, c) {
        Ti.call(this, 0, c);
        this.c = null;
        this.c = nf();
        var d = this.c.canvas;
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.className = "ol-unselectable";
        jf(b, d, 0);
        this.e = td();
        this.a = ff("DIV");
        this.a.className = "ol-unselectable";
        d = this.a.style;
        d.position = "absolute";
        d.width = "100%";
        d.height = "100%";
        C(this.a, "touchstart", mc);
        jf(b, this.a, 0);
        this.d = !0
    }
    A($m, Ti);
    $m.prototype.B = function() {
        kf(this.a);
        $m.H.B.call(this)
    };
    $m.prototype.Sc = function(b) {
        if (b instanceof ml) b = new Vm(b);
        else if (b instanceof nl) b = new Wm(b);
        else if (b instanceof pl) b = new Ym(b);
        else return null;
        return b
    };

    function an(b, c, d) {
        var e = b.f;
        if (bd(e, c)) {
            var f = d.extent,
                g = d.pixelRatio,
                h = d.viewState,
                k = h.resolution,
                n = h.rotation,
                p = b.c,
                q = p.canvas;
            Bi(b.e, q.width / 2, q.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            h = new ql(p, g, f, b.e, n);
            f = new Sl(.5 * k / g, f, k);
            e.dispatchEvent(new rk(c, e, h, f, d, p, null));
            Tl(f);
            f.R() || Wl(f, p, g, b.e, n, {});
            Cl(h);
            b.i = f
        }
    }
    $m.prototype.A = function() {
        return "dom"
    };
    $m.prototype.Bc = function(b) {
        if (null === b) this.d && (jg(this.a, !1), this.d = !1);
        else {
            var c;
            c = function(b, c) {
                jf(this.a, b, c)
            };
            var d = this.f;
            if (bd(d, "precompose") || bd(d, "postcompose")) {
                var d = this.c.canvas,
                    e = b.pixelRatio;
                d.width = b.size[0] * e;
                d.height = b.size[1] * e
            }
            an(this, "precompose", b);
            var d = b.layerStatesArray,
                f, g, h, e = 0;
            for (f = d.length; e < f; ++e) h = d[e], g = h.layer, g = Wi(this, g), c.call(this, g.target, e), "ready" == h.l ? g.f(b, h) && g.k(b, h) : g.e();
            c = b.layerStates;
            for (var k in this.b) k in c || (g = this.b[k], kf(g.target));
            this.d ||
                (jg(this.a, !0), this.d = !0);
            Ui(b);
            Xi(this, b);
            b.postRenderFunctions.push(Vi);
            an(this, "postcompose", b)
        }
    };

    function bn(b) {
        this.a = b
    }

    function cn(b) {
        this.a = b
    }
    A(cn, bn);
    cn.prototype.A = function() {
        return 35632
    };

    function dn(b) {
        this.a = b
    }
    A(dn, bn);
    dn.prototype.A = function() {
        return 35633
    };

    function en() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform mat4 k;uniform float l;uniform sampler2D m;void main(void){vec4 texColor=texture2D(m,a);float alpha=texColor.a*b*l;if(alpha==0.0){discard;}gl_FragColor.a=alpha;gl_FragColor.rgb=(k*vec4(texColor.rgb,1.)).rgb;}"
    }
    A(en, cn);
    ea(en);

    function fn() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }
    A(fn, dn);
    ea(fn);

    function gn(b, c) {
        this.C = b.getUniformLocation(c, "k");
        this.g = b.getUniformLocation(c, "j");
        this.k = b.getUniformLocation(c, "i");
        this.i = b.getUniformLocation(c, "l");
        this.f = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.c = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.b = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    };

    function hn() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    A(hn, cn);
    ea(hn);

    function jn() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }
    A(jn, dn);
    ea(jn);

    function kn(b, c) {
        this.g = b.getUniformLocation(c, "j");
        this.k = b.getUniformLocation(c, "i");
        this.i = b.getUniformLocation(c, "k");
        this.f = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.c = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.b = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    };

    function ln(b) {
        this.a = m(b) ? b : [];
        this.c = m(void 0) ? void 0 : 35044
    };

    function mn(b, c) {
        this.q = b;
        this.a = c;
        this.c = {};
        this.i = {};
        this.e = {};
        this.g = this.k = this.d = this.f = null;
        (this.b = Ua(xa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        C(this.q, "webglcontextlost", this.l, !1, this);
        C(this.q, "webglcontextrestored", this.p, !1, this)
    }

    function nn(b, c, d) {
        var e = b.a,
            f = d.a,
            g = v(d);
        if (g in b.c) e.bindBuffer(c, b.c[g].buffer);
        else {
            var h = e.createBuffer();
            e.bindBuffer(c, h);
            var k;
            34962 == c ? k = new Float32Array(f) : 34963 == c && (k = b.b ? new Uint32Array(f) : new Uint16Array(f));
            e.bufferData(c, k, d.c);
            b.c[g] = {
                b: d,
                buffer: h
            }
        }
    }

    function on(b, c) {
        var d = b.a,
            e = v(c),
            f = b.c[e];
        d.isContextLost() || d.deleteBuffer(f.buffer);
        delete b.c[e]
    }
    mn.prototype.B = function() {
        var b = this.a;
        b.isContextLost() || (jb(this.c, function(c) {
            b.deleteBuffer(c.buffer)
        }), jb(this.e, function(c) {
            b.deleteProgram(c)
        }), jb(this.i, function(c) {
            b.deleteShader(c)
        }), b.deleteFramebuffer(this.d), b.deleteRenderbuffer(this.g), b.deleteTexture(this.k))
    };

    function pn(b) {
        if (null === b.d) {
            var c = b.a,
                d = c.createFramebuffer();
            c.bindFramebuffer(c.FRAMEBUFFER, d);
            var e = qn(c, 1, 1),
                f = c.createRenderbuffer();
            c.bindRenderbuffer(c.RENDERBUFFER, f);
            c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, 1, 1);
            c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, e, 0);
            c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, f);
            c.bindTexture(c.TEXTURE_2D, null);
            c.bindRenderbuffer(c.RENDERBUFFER, null);
            c.bindFramebuffer(c.FRAMEBUFFER, null);
            b.d = d;
            b.k = e;
            b.g = f
        }
        return b.d
    }

    function rn(b, c) {
        var d = v(c);
        if (d in b.i) return b.i[d];
        var e = b.a,
            f = e.createShader(c.A());
        e.shaderSource(f, c.a);
        e.compileShader(f);
        return b.i[d] = f
    }

    function sn(b, c, d) {
        var e = v(c) + "/" + v(d);
        if (e in b.e) return b.e[e];
        var f = b.a,
            g = f.createProgram();
        f.attachShader(g, rn(b, c));
        f.attachShader(g, rn(b, d));
        f.linkProgram(g);
        return b.e[e] = g
    }
    mn.prototype.l = function() {
        sb(this.c);
        sb(this.i);
        sb(this.e);
        this.g = this.k = this.d = this.f = null
    };
    mn.prototype.p = function() {};

    function tn(b, c) {
        if (c == b.f) return !1;
        b.a.useProgram(c);
        b.f = c;
        return !0
    }

    function un(b, c, d) {
        var e = b.createTexture();
        b.bindTexture(b.TEXTURE_2D, e);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
        m(c) && b.texParameteri(3553, 10242, c);
        m(d) && b.texParameteri(3553, 10243, d);
        return e
    }

    function qn(b, c, d) {
        var e = un(b, void 0, void 0);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, c, d, 0, b.RGBA, b.UNSIGNED_BYTE, null);
        return e
    }

    function vn(b, c) {
        var d = un(b, 33071, 33071);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, c);
        return d
    };

    function wn(b, c) {
        this.p = this.l = void 0;
        this.aa = new Tf;
        this.k = Rd(c);
        this.q = [];
        this.i = [];
        this.s = void 0;
        this.e = [];
        this.d = [];
        this.u = this.t = void 0;
        this.c = [];
        this.o = this.n = this.g = null;
        this.v = void 0;
        this.V = vd();
        this.$ = vd();
        this.J = this.T = void 0;
        this.ba = vd();
        this.M = this.K = this.ia = void 0;
        this.P = [];
        this.f = [];
        this.a = [];
        this.D = null;
        this.b = [];
        this.C = [];
        this.O = void 0
    }

    function xn(b, c) {
        var d = b.D,
            e = b.g,
            f = b.P,
            g = b.f,
            h = c.a;
        return function() {
            if (!h.isContextLost()) {
                var b, n;
                b = 0;
                for (n = f.length; b < n; ++b) h.deleteTexture(f[b]);
                b = 0;
                for (n = g.length; b < n; ++b) h.deleteTexture(g[b])
            }
            on(c, d);
            on(c, e)
        }
    }

    function yn(b, c, d, e) {
        var f = b.l,
            g = b.p,
            h = b.s,
            k = b.t,
            n = b.u,
            p = b.v,
            q = b.T,
            r = b.J,
            s = b.ia ? 1 : 0,
            t = b.K,
            x = b.M,
            y = b.O,
            z = Math.cos(t),
            t = Math.sin(t),
            B = b.c.length,
            w = b.a.length,
            K, H, D, J, T, $;
        for (K = 0; K < d; K += e) T = c[K] - b.k[0], $ = c[K + 1] - b.k[1], H = w / 8, D = -x * f, J = -x * (h - g), b.a[w++] = T, b.a[w++] = $, b.a[w++] = D * z - J * t, b.a[w++] = D * t + J * z, b.a[w++] = q / n, b.a[w++] = (r + h) / k, b.a[w++] = p, b.a[w++] = s, D = x * (y - f), J = -x * (h - g), b.a[w++] = T, b.a[w++] = $, b.a[w++] = D * z - J * t, b.a[w++] = D * t + J * z, b.a[w++] = (q + y) / n, b.a[w++] = (r + h) / k, b.a[w++] = p, b.a[w++] = s, D = x * (y - f), J = x * g, b.a[w++] =
            T, b.a[w++] = $, b.a[w++] = D * z - J * t, b.a[w++] = D * t + J * z, b.a[w++] = (q + y) / n, b.a[w++] = r / k, b.a[w++] = p, b.a[w++] = s, D = -x * f, J = x * g, b.a[w++] = T, b.a[w++] = $, b.a[w++] = D * z - J * t, b.a[w++] = D * t + J * z, b.a[w++] = q / n, b.a[w++] = r / k, b.a[w++] = p, b.a[w++] = s, b.c[B++] = H, b.c[B++] = H + 1, b.c[B++] = H + 2, b.c[B++] = H, b.c[B++] = H + 2, b.c[B++] = H + 3
    }
    l = wn.prototype;
    l.Ra = function(b, c) {
        this.b.push(this.c.length);
        this.C.push(c);
        var d = b.j;
        yn(this, d, d.length, b.a)
    };
    l.Sa = function(b, c) {
        this.b.push(this.c.length);
        this.C.push(c);
        var d = b.j;
        yn(this, d, d.length, b.a)
    };
    l.Ka = function(b) {
        var c = b.a;
        this.q.push(this.c.length);
        this.i.push(this.c.length);
        this.D = new ln(this.a);
        nn(b, 34962, this.D);
        this.g = new ln(this.c);
        nn(b, 34963, this.g);
        b = {};
        zn(this.P, this.e, b, c);
        zn(this.f, this.d, b, c);
        this.s = this.p = this.l = void 0;
        this.d = this.e = null;
        this.u = this.t = void 0;
        this.c = null;
        this.M = this.K = this.ia = this.J = this.T = this.v = void 0;
        this.a = null;
        this.O = void 0
    };

    function zn(b, c, d, e) {
        var f, g, h, k = c.length;
        for (h = 0; h < k; ++h) f = c[h], g = v(f).toString(), g in d ? f = d[g] : (f = vn(e, f), d[g] = f), b[h] = f
    }
    l.bb = function(b, c, d, e, f, g, h, k, n, p, q, r, s, t, x) {
        g = b.a;
        nn(b, 34962, this.D);
        nn(b, 34963, this.g);
        var y = k || 1 != n || p || 1 != q,
            z, B;
        y ? (z = en.ja(), B = fn.ja()) : (z = hn.ja(), B = jn.ja());
        B = sn(b, z, B);
        y ? null === this.n ? this.n = z = new gn(g, B) : z = this.n : null === this.o ? this.o = z = new kn(g, B) : z = this.o;
        tn(b, B);
        g.enableVertexAttribArray(z.d);
        g.vertexAttribPointer(z.d, 2, 5126, !1, 32, 0);
        g.enableVertexAttribArray(z.a);
        g.vertexAttribPointer(z.a, 2, 5126, !1, 32, 8);
        g.enableVertexAttribArray(z.e);
        g.vertexAttribPointer(z.e, 2, 5126, !1, 32, 16);
        g.enableVertexAttribArray(z.c);
        g.vertexAttribPointer(z.c, 1, 5126, !1, 32, 24);
        g.enableVertexAttribArray(z.b);
        g.vertexAttribPointer(z.b, 1, 5126, !1, 32, 28);
        B = this.ba;
        Bi(B, 0, 0, 2 / (d * f[0]), 2 / (d * f[1]), -e, -(c[0] - this.k[0]), -(c[1] - this.k[1]));
        c = this.$;
        d = 2 / f[0];
        f = 2 / f[1];
        xd(c);
        c[0] = d;
        c[5] = f;
        c[10] = 1;
        c[15] = 1;
        f = this.V;
        xd(f);
        0 !== e && Bd(f, -e);
        g.uniformMatrix4fv(z.f, !1, B);
        g.uniformMatrix4fv(z.k, !1, c);
        g.uniformMatrix4fv(z.g, !1, f);
        g.uniform1f(z.i, h);
        y && g.uniformMatrix4fv(z.C, !1, Uf(this.aa, k, n, p, q));
        var w;
        if (m(s)) {
            if (t) a: {
                e = b.b ? 5125 : 5123;
                b = b.b ? 4 : 2;
                p = this.b.length -
                    1;
                for (h = this.f.length - 1; 0 <= h; --h)
                    for (g.bindTexture(3553, this.f[h]), k = 0 < h ? this.i[h - 1] : 0, q = this.i[h]; 0 <= p && this.b[p] >= k;) {
                        n = this.b[p];
                        t = this.C[p];
                        w = v(t).toString();
                        if (!m(r[w]) && (!m(x) || Wd(x, t.G().d())) && (g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), g.drawElements(4, q - n, e, n * b), q = s(t))) {
                            r = q;
                            break a
                        }
                        q = n;
                        p--
                    }
                r = void 0
            } else g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), An(this, g, b, r, this.f, this.i), r = (r = s(null)) ? r : void 0;
            w = r
        } else An(this, g, b, r, this.P, this.q);
        g.disableVertexAttribArray(z.d);
        g.disableVertexAttribArray(z.a);
        g.disableVertexAttribArray(z.e);
        g.disableVertexAttribArray(z.c);
        g.disableVertexAttribArray(z.b);
        return w
    };

    function An(b, c, d, e, f, g) {
        var h = d.b ? 5125 : 5123;
        d = d.b ? 4 : 2;
        if (rb(e)) {
            var k;
            b = 0;
            e = f.length;
            for (k = 0; b < e; ++b) {
                c.bindTexture(3553, f[b]);
                var n = g[b];
                c.drawElements(4, n - k, h, k * d);
                k = n
            }
        } else {
            k = 0;
            var p, n = 0;
            for (p = f.length; n < p; ++n) {
                c.bindTexture(3553, f[n]);
                for (var q = 0 < n ? g[n - 1] : 0, r = g[n], s = q; k < b.b.length && b.b[k] <= r;) {
                    var t = v(b.C[k]).toString();
                    m(e[t]) ? (s !== q && c.drawElements(4, q - s, h, s * d), q = s = k === b.b.length - 1 ? r : b.b[k + 1]) : q = k === b.b.length - 1 ? r : b.b[k + 1];
                    k++
                }
                s !== q && c.drawElements(4, q - s, h, s * d)
            }
        }
    }
    l.gb = function(b) {
        var c = b.Bb(),
            d = b.tc(1),
            e = b.Xc(),
            f = b.dd(1),
            g = b.k,
            h = b.Jb(),
            k = b.C,
            n = b.f,
            p = b.cb();
        b = b.g;
        var q;
        0 === this.e.length ? this.e.push(d) : (q = this.e[this.e.length - 1], v(q) != v(d) && (this.q.push(this.c.length), this.e.push(d)));
        0 === this.d.length ? this.d.push(f) : (q = this.d[this.d.length - 1], v(q) != v(f) && (this.i.push(this.c.length), this.d.push(f)));
        this.l = c[0];
        this.p = c[1];
        this.s = p[1];
        this.t = e[1];
        this.u = e[0];
        this.v = g;
        this.T = h[0];
        this.J = h[1];
        this.K = n;
        this.ia = k;
        this.M = b;
        this.O = p[0]
    };

    function Bn(b, c, d) {
        this.e = c;
        this.i = b;
        this.d = d;
        this.c = {}
    }

    function Cn(b, c) {
        var d = [],
            e;
        for (e in b.c) d.push(xn(b.c[e], c));
        return Yc.apply(null, d)
    }

    function Dn(b, c) {
        for (var d in b.c) b.c[d].Ka(c)
    }
    Bn.prototype.a = function(b, c) {
        var d = this.c[c];
        m(d) || (d = new En[c](this.i, this.e), this.c[c] = d);
        return d
    };
    Bn.prototype.R = function() {
        return rb(this.c)
    };

    function Fn(b, c, d, e, f, g, h, k, n, p, q, r, s, t) {
        var x = Gn,
            y, z;
        for (y = Dl.length - 1; 0 <= y; --y)
            if (z = b.c[Dl[y]], m(z) && (z = z.bb(c, d, e, f, x, g, h, k, n, p, q, r, s, !0, t))) return z
    }
    Bn.prototype.b = function(b, c, d, e, f, g, h, k, n, p, q, r, s, t) {
        var x = c.a;
        x.bindFramebuffer(x.FRAMEBUFFER, pn(c));
        var y;
        m(this.d) && (y = Ed(Ld(b), e * this.d));
        return Fn(this, c, b, e, f, h, k, n, p, q, r, s, function(b) {
            var c = new Uint8Array(4);
            x.readPixels(0, 0, 1, 1, x.RGBA, x.UNSIGNED_BYTE, c);
            if (0 < c[3] && (b = t(b))) return b
        }, y)
    };
    var En = {
            Image: wn
        },
        Gn = [1, 1];

    function Hn(b, c, d, e, f, g, h) {
        this.c = b;
        this.e = c;
        this.b = g;
        this.i = h;
        this.k = f;
        this.g = e;
        this.f = d;
        this.d = null;
        this.a = {}
    }
    l = Hn.prototype;
    l.Dd = function(b, c) {
        var d = b.toString(),
            e = this.a[d];
        m(e) ? e.push(c) : this.a[d] = [c]
    };
    l.$b = function() {};
    l.Uc = function(b, c) {
        var d = b.i,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e],
                h = In[g.A()];
            h && h.call(this, g, c)
        }
    };
    l.Sa = function(b, c) {
        var d = this.c,
            e = (new Bn(1, this.b)).a(0, "Image");
        e.gb(this.d);
        e.Sa(b, c);
        e.Ka(d);
        e.bb(this.c, this.e, this.f, this.g, this.k, this.b, this.i, 1, 0, 1, 0, 1, {});
        xn(e, d)()
    };
    l.ac = function() {};
    l.bc = function() {};
    l.Ra = function(b, c) {
        var d = this.c,
            e = (new Bn(1, this.b)).a(0, "Image");
        e.gb(this.d);
        e.Ra(b, c);
        e.Ka(d);
        e.bb(this.c, this.e, this.f, this.g, this.k, this.b, this.i, 1, 0, 1, 0, 1, {});
        xn(e, d)()
    };
    l.cc = function() {};
    l.Ab = function() {};
    l.Ia = function() {};
    l.Ga = function() {};
    l.gb = function(b) {
        this.d = b
    };
    l.ya = function() {};
    var In = {
        Point: Hn.prototype.Sa,
        MultiPoint: Hn.prototype.Ra,
        GeometryCollection: Hn.prototype.Uc
    };

    function Jn() {
        this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}"
    }
    A(Jn, cn);
    ea(Jn);

    function Kn() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    A(Kn, dn);
    ea(Kn);

    function Ln(b, c) {
        this.f = b.getUniformLocation(c, "f");
        this.b = b.getUniformLocation(c, "g");
        this.d = b.getUniformLocation(c, "e");
        this.i = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "b");
        this.c = b.getAttribLocation(c, "c")
    };

    function Mn() {
        this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }
    A(Mn, cn);
    ea(Mn);

    function Nn() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    A(Nn, dn);
    ea(Nn);

    function On(b, c) {
        this.b = b.getUniformLocation(c, "f");
        this.d = b.getUniformLocation(c, "e");
        this.i = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "g");
        this.a = b.getAttribLocation(c, "b");
        this.c = b.getAttribLocation(c, "c")
    };

    function Pn(b, c) {
        Ei.call(this, c);
        this.d = b;
        this.T = new ln([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.f = this.oa = null;
        this.g = void 0;
        this.o = td();
        this.v = vd();
        this.K = new Tf;
        this.l = this.q = null
    }
    A(Pn, Ei);

    function Qn(b, c, d) {
        var e = b.d.d;
        if (m(b.g) && b.g == d) e.bindFramebuffer(36160, b.f);
        else {
            c.postRenderFunctions.push(va(function(b, c, d) {
                b.isContextLost() || (b.deleteFramebuffer(c), b.deleteTexture(d))
            }, e, b.f, b.oa));
            c = qn(e, d, d);
            var f = e.createFramebuffer();
            e.bindFramebuffer(36160, f);
            e.framebufferTexture2D(36160, 36064, 3553, c, 0);
            b.oa = c;
            b.f = f;
            b.g = d
        }
    }
    Pn.prototype.je = function(b, c, d) {
        Rn(this, "precompose", d, b);
        nn(d, 34962, this.T);
        var e = d.a,
            f = c.brightness || 1 != c.contrast || c.hue || 1 != c.saturation,
            g, h;
        f ? (g = Jn.ja(), h = Kn.ja()) : (g = Mn.ja(), h = Nn.ja());
        g = sn(d, g, h);
        f ? null === this.q ? this.q = h = new Ln(e, g) : h = this.q : null === this.l ? this.l = h = new On(e, g) : h = this.l;
        tn(d, g) && (e.enableVertexAttribArray(h.a), e.vertexAttribPointer(h.a, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(h.c), e.vertexAttribPointer(h.c, 2, 5126, !1, 16, 8), e.uniform1i(h.e, 0));
        e.uniformMatrix4fv(h.i, !1, this.o);
        e.uniformMatrix4fv(h.d, !1, this.v);
        f && e.uniformMatrix4fv(h.f, !1, Uf(this.K, c.brightness, c.contrast, c.hue, c.saturation));
        e.uniform1f(h.b, c.opacity);
        e.bindTexture(3553, this.oa);
        e.drawArrays(5, 0, 4);
        Rn(this, "postcompose", d, b)
    };

    function Rn(b, c, d, e) {
        b = b.a;
        if (bd(b, c)) {
            var f = e.viewState;
            b.dispatchEvent(new rk(c, b, new Hn(d, f.center, f.resolution, f.rotation, e.size, e.extent, e.pixelRatio), null, e, null, d))
        }
    }
    Pn.prototype.p = function() {
        this.f = this.oa = null;
        this.g = void 0
    };

    function Sn(b, c) {
        Pn.call(this, b, c);
        this.b = null
    }
    A(Sn, Pn);

    function Tn(b, c) {
        var d = ym(c);
        return vn(b.d.d, d)
    }
    Sn.prototype.La = function(b, c, d, e) {
        var f = this.a;
        return f.a().s(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function(b) {
            return d.call(e, b, f)
        })
    };
    Sn.prototype.cd = function(b, c) {
        var d = this.d.d,
            e = b.viewState,
            f = e.center,
            g = e.resolution,
            h = e.rotation,
            k = this.b,
            n = this.oa,
            p = this.a.a(),
            q = b.viewHints,
            r = b.extent;
        m(c.extent) && (r = Vd(r, c.extent));
        q[0] || q[1] || Xd(r) || (e = e.projection, q = p.k, null === q || (e = q), r = Om(p, r, g, b.pixelRatio, e), null !== r && Gi(this, r) && (k = r, n = Tn(this, r), null === this.oa || b.postRenderFunctions.push(va(function(b, c) {
            b.isContextLost() || b.deleteTexture(c)
        }, d, this.oa))));
        null !== k && (d = this.d.e.q, Un(this, d.width, d.height, f, g, h, k.extent), f = this.o, xd(f),
            Ad(f, 1, -1), zd(f, 0, -1), this.b = k, this.oa = n, Ii(b.attributions, k.d), Ji(b, p));
        return !0
    };

    function Un(b, c, d, e, f, g, h) {
        c *= f;
        d *= f;
        b = b.v;
        xd(b);
        Ad(b, 2 / c, 2 / d);
        Bd(b, -g);
        zd(b, h[0] - e[0], h[1] - e[1]);
        Ad(b, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        zd(b, 1, 1)
    };

    function Vn() {
        this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }
    A(Vn, cn);
    ea(Vn);

    function Wn() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }
    A(Wn, dn);
    ea(Wn);

    function Xn(b, c) {
        this.b = b.getUniformLocation(c, "e");
        this.d = b.getUniformLocation(c, "d");
        this.a = b.getAttribLocation(c, "b");
        this.c = b.getAttribLocation(c, "c")
    };

    function Yn(b, c) {
        Pn.call(this, b, c);
        this.t = Vn.ja();
        this.u = Wn.ja();
        this.b = null;
        this.s = new ln([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.n = this.e = null;
        this.k = -1
    }
    A(Yn, Pn);
    Yn.prototype.B = function() {
        on(this.d.e, this.s);
        Yn.H.B.call(this)
    };
    Yn.prototype.i = function(b, c) {
        var d = this.d;
        return function(e, f) {
            return Ng(b, e, f, function(b) {
                var f = sg(d.c, b.Fa());
                f && (c[e] || (c[e] = {}), c[e][b.a.toString()] = b);
                return f
            })
        }
    };
    Yn.prototype.p = function() {
        Yn.H.p.call(this);
        this.b = null
    };
    Yn.prototype.cd = function(b, c, d) {
        var e = this.d,
            f = d.a,
            g = b.viewState,
            h = g.projection,
            k = this.a,
            n = k.a(),
            p = Og(n, h),
            q = Gg(p, g.resolution),
            r = p.a[q],
            s = n.Fb(q, b.pixelRatio, h),
            t = s / Fg(p, q),
            x = r / t,
            y = n.dc(),
            z = g.center,
            B;
        r == g.resolution ? (z = Li(z, r, b.size), B = Td(z, r, g.rotation, b.size)) : B = b.extent;
        r = Cg(p, B, r);
        if (null !== this.e && Pe(this.e, r) && this.k == n.c) x = this.n;
        else {
            var w = [Qe(r), r.c - r.b + 1],
                w = Math.max(w[0] * s, w[1] * s),
                K = Math.pow(2, Math.ceil(Math.log(w) / Math.LN2)),
                w = x * K,
                H = Bg(p, q),
                D = H[0] + r.a * s * x,
                x = H[1] + r.b * s * x,
                x = [D, x, D + w, x +
                    w
                ];
            Qn(this, b, K);
            f.viewport(0, 0, K, K);
            f.clearColor(0, 0, 0, 0);
            f.clear(16384);
            f.disable(3042);
            K = sn(d, this.t, this.u);
            tn(d, K);
            null === this.b && (this.b = new Xn(f, K));
            nn(d, 34962, this.s);
            f.enableVertexAttribArray(this.b.a);
            f.vertexAttribPointer(this.b.a, 2, 5126, !1, 16, 0);
            f.enableVertexAttribArray(this.b.c);
            f.vertexAttribPointer(this.b.c, 2, 5126, !1, 16, 8);
            f.uniform1i(this.b.b, 0);
            d = {};
            d[q] = {};
            var J = this.i(n, d),
                T = k.d(),
                K = !0,
                D = Kd(),
                $ = new Me(0, 0, 0, 0),
                L, aa, la;
            for (aa = r.a; aa <= r.d; ++aa)
                for (la = r.b; la <= r.c; ++la) {
                    H = Ni(n, q, aa,
                        la, t, h);
                    if (m(c.extent) && (L = zg(p, H.a, D), !Wd(L, c.extent))) continue;
                    L = H.state;
                    if (2 == L) {
                        if (sg(e.c, H.Fa())) {
                            d[q][Le(H.a)] = H;
                            continue
                        }
                    } else if (4 == L || 3 == L && !T) continue;
                    K = !1;
                    L = p.c(H.a, J, null, $, D);
                    L || (H = p.b(H.a, $, D), null === H || J(q + 1, H))
                }
            c = Ra(nb(d), Number);
            ab(c);
            for (var J = new Float32Array(4), ga, fa, Qa, T = 0, $ = c.length; T < $; ++T)
                for (ga in fa = d[c[T]], fa) H = fa[ga], L = zg(p, H.a, D), aa = 2 * (L[2] - L[0]) / w, la = 2 * (L[3] - L[1]) / w, Qa = 2 * (L[0] - x[0]) / w - 1, L = 2 * (L[1] - x[1]) / w - 1, sd(J, aa, la, Qa, L), f.uniform4fv(this.b.d, J), Zn(e, H, s, y * t), f.drawArrays(5,
                    0, 4);
            K ? (this.e = r, this.n = x, this.k = n.c) : (this.n = this.e = null, this.k = -1, b.animate = !0)
        }
        Ki(b.usedTiles, n, q, r);
        var cb = e.k;
        Mi(b, n, p, t, h, B, q, k.b(), function(b) {
            var c;
            (c = 2 != b.state || sg(e.c, b.Fa())) || (c = b.Fa() in cb.b);
            c || Oi(cb, [b, Eg(p, b.a), p.a[b.a[0]], s, y * t])
        }, this);
        Hi(b, n);
        Ji(b, n);
        f = this.o;
        xd(f);
        zd(f, (z[0] - x[0]) / (x[2] - x[0]), (z[1] - x[1]) / (x[3] - x[1]));
        0 !== g.rotation && Bd(f, g.rotation);
        Ad(f, b.size[0] * g.resolution / (x[2] - x[0]), b.size[1] * g.resolution / (x[3] - x[1]));
        zd(f, -.5, -.5);
        return !0
    };

    function $n(b, c) {
        Pn.call(this, b, c);
        this.e = !1;
        this.u = -1;
        this.t = NaN;
        this.n = Kd();
        this.k = this.b = this.s = null
    }
    A($n, Pn);
    l = $n.prototype;
    l.je = function(b, c, d) {
        this.k = c;
        var e = b.viewState,
            f = this.b;
        if (null !== f && !f.R()) {
            var g = e.center,
                h = e.resolution,
                e = e.rotation,
                k = b.size,
                n = b.pixelRatio,
                p = c.opacity,
                q = c.brightness,
                r = c.contrast,
                s = c.hue;
            c = c.saturation;
            b = b.skippedFeatureUids;
            var t, x, y;
            t = 0;
            for (x = Dl.length; t < x; ++t) y = f.c[Dl[t]], m(y) && y.bb(d, g, h, e, k, n, p, q, r, s, c, b, void 0, !1)
        }
    };
    l.B = function() {
        var b = this.b;
        null !== b && (Cn(b, this.d.e)(), this.b = null);
        $n.H.B.call(this)
    };
    l.La = function(b, c, d, e) {
        if (null !== this.b && null !== this.k) {
            var f = c.viewState,
                g = this.a,
                h = this.k,
                k = {};
            return this.b.b(b, this.d.e, f.center, f.resolution, f.rotation, c.size, c.pixelRatio, h.opacity, h.brightness, h.contrast, h.hue, h.saturation, c.skippedFeatureUids, function(b) {
                var c = v(b).toString();
                if (!(c in k)) return k[c] = !0, d.call(e, b, g)
            })
        }
    };
    l.Ch = function() {
        Fi(this)
    };
    l.cd = function(b, c, d) {
        function e(b) {
            var c;
            m(b.d) ? c = b.d.call(b, n) : m(f.b) && (c = (0, f.b)(b, n));
            if (null != c) {
                if (null != c) {
                    var d, e, g = !1;
                    d = 0;
                    for (e = c.length; d < e; ++d) g = qm(s, b, c[d], pm(n, p), this.Ch, this) || g;
                    b = g
                } else b = !1;
                this.e = this.e || b
            }
        }
        var f = this.a;
        c = f.a();
        Ii(b.attributions, c.p);
        Ji(b, c);
        if (!this.e && (!f.p && b.viewHints[0] || b.viewHints[1])) return !0;
        var g = b.extent,
            h = b.viewState,
            k = h.projection,
            n = h.resolution,
            p = b.pixelRatio,
            h = f.c,
            q = f.d,
            r = f.get("renderOrder");
        m(r) || (r = om);
        g = Ed(g, q * n);
        if (!this.e && this.t == n && this.u ==
            h && this.s == r && Hd(this.n, g)) return !0;
        null === this.b || b.postRenderFunctions.push(Cn(this.b, d));
        this.e = !1;
        var s = new Bn(.5 * n / p, g, f.d);
        c.ob(g, n, k);
        if (null === r) Km(c, g, e, this);
        else {
            var t = [];
            Lm(c, g, function(b) {
                t.push(b)
            }, this);
            ab(t, r);
            Oa(t, e, this)
        }
        Dn(s, d);
        this.t = n;
        this.u = h;
        this.s = r;
        this.n = g;
        this.b = s;
        return !0
    };

    function ao(b, c) {
        Ti.call(this, 0, c);
        this.a = ff("CANVAS");
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        jf(b, this.a, 0);
        this.n = 0;
        this.o = nf();
        this.q = !0;
        this.d = tf(this.a, {
            antialias: !0,
            depth: !1,
            Pf: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.e = new mn(this.a, this.d);
        C(this.a, "webglcontextlost", this.Ah, !1, this);
        C(this.a, "webglcontextrestored", this.Bh, !1, this);
        this.c = new rg;
        this.p = null;
        this.k = new Yi(ua(function(b) {
            var c = b[1];
            b = b[2];
            var f = c[0] - this.p[0],
                c = c[1] - this.p[1];
            return 65536 * Math.log(b) + Math.sqrt(f * f + c * c) / b
        }, this), function(b) {
            return b[0].Fa()
        });
        this.s = ua(function() {
            if (!this.k.R()) {
                bj(this.k);
                var b = Zi(this.k);
                Zn(this, b[0], b[3], b[4])
            }
        }, this);
        this.g = 0;
        bo(this)
    }
    A(ao, Ti);

    function Zn(b, c, d, e) {
        var f = b.d,
            g = c.Fa();
        if (sg(b.c, g)) b = b.c.get(g), f.bindTexture(3553, b.oa), 9729 != b.Ud && (f.texParameteri(3553, 10240, 9729), b.Ud = 9729), 9729 != b.Vd && (f.texParameteri(3553, 10240, 9729), b.Vd = 9729);
        else {
            var h = f.createTexture();
            f.bindTexture(3553, h);
            if (0 < e) {
                var k = b.o.canvas,
                    n = b.o;
                b.n != d ? (k.width = d, k.height = d, b.n = d) : n.clearRect(0, 0, d, d);
                n.drawImage(Qm(c), e, e, d, d, 0, 0, d, d);
                f.texImage2D(3553, 0, 6408, 6408, 5121, k)
            } else f.texImage2D(3553, 0, 6408, 6408, 5121, Qm(c));
            f.texParameteri(3553, 10240, 9729);
            f.texParameteri(3553,
                10241, 9729);
            f.texParameteri(3553, 10242, 33071);
            f.texParameteri(3553, 10243, 33071);
            b.c.set(g, {
                oa: h,
                Ud: 9729,
                Vd: 9729
            })
        }
    }
    l = ao.prototype;
    l.Sc = function(b) {
        return b instanceof ml ? new Sn(this, b) : b instanceof nl ? new Yn(this, b) : b instanceof pl ? new $n(this, b) : null
    };

    function co(b, c, d) {
        var e = b.f;
        if (bd(e, c)) {
            var f = b.e,
                g = d.extent,
                h = d.size,
                k = d.viewState,
                n = d.pixelRatio,
                p = k.resolution,
                q = k.center,
                r = k.rotation,
                k = new Hn(f, q, p, r, h, g, n),
                g = new Bn(.5 * p / n, g);
            e.dispatchEvent(new rk(c, e, k, g, d, null, f));
            Dn(g, f);
            if (!g.R()) {
                var s = eo;
                c = s.opacity;
                d = s.brightness;
                var e = s.contrast,
                    t = s.hue,
                    s = s.saturation,
                    x = {},
                    y, z, B;
                y = 0;
                for (z = Dl.length; y < z; ++y) B = g.c[Dl[y]], m(B) && B.bb(f, q, p, r, h, n, c, d, e, t, s, x, void 0, !1)
            }
            Cn(g, f)();
            f = Ra(nb(k.a), Number);
            ab(f);
            h = 0;
            for (n = f.length; h < n; ++h)
                for (p = k.a[f[h].toString()],
                    q = 0, r = p.length; q < r; ++q) p[q](k);
            b.i = g
        }
    }
    l.B = function() {
        var b = this.d;
        b.isContextLost() || this.c.forEach(function(c) {
            null === c || b.deleteTexture(c.oa)
        });
        jc(this.e);
        ao.H.B.call(this)
    };
    l.Nf = function(b, c) {
        for (var d = this.d, e; 1024 < this.c.Ua() - this.g;) {
            e = this.c.a.ib;
            if (null === e)
                if (+this.c.a.nc == c.index) break;
                else --this.g;
            else d.deleteTexture(e.oa);
            this.c.pop()
        }
    };
    l.A = function() {
        return "webgl"
    };
    l.Ah = function(b) {
        b.preventDefault();
        this.c.clear();
        this.g = 0;
        jb(this.b, function(b) {
            b.p()
        })
    };
    l.Bh = function() {
        bo(this);
        this.f.render()
    };

    function bo(b) {
        b = b.d;
        b.activeTexture(33984);
        b.blendFuncSeparate(770, 771, 1, 771);
        b.disable(2884);
        b.disable(2929);
        b.disable(3089);
        b.disable(2960)
    }
    l.Bc = function(b) {
        var c = this.e,
            d = this.d;
        if (d.isContextLost()) return !1;
        if (null === b) return this.q && (jg(this.a, !1), this.q = !1), !1;
        this.p = b.focus;
        this.c.set((-b.index).toString(), null);
        ++this.g;
        var e = [],
            f = b.layerStatesArray,
            g = b.viewState.resolution,
            h, k, n, p;
        h = 0;
        for (k = f.length; h < k; ++h) p = f[h], zi(p, g) && "ready" == p.l && (n = Wi(this, p.layer), n.cd(b, p, c) && e.push(p));
        f = b.size[0] * b.pixelRatio;
        g = b.size[1] * b.pixelRatio;
        if (this.a.width != f || this.a.height != g) this.a.width = f, this.a.height = g;
        d.bindFramebuffer(36160, null);
        d.clearColor(0,
            0, 0, 0);
        d.clear(16384);
        d.enable(3042);
        d.viewport(0, 0, this.a.width, this.a.height);
        co(this, "precompose", b);
        h = 0;
        for (k = e.length; h < k; ++h) p = e[h], n = Wi(this, p.layer), n.je(b, p, c);
        this.q || (jg(this.a, !0), this.q = !0);
        Ui(b);
        1024 < this.c.Ua() - this.g && b.postRenderFunctions.push(ua(this.Nf, this));
        this.k.R() || (b.postRenderFunctions.push(this.s), b.animate = !0);
        co(this, "postcompose", b);
        Xi(this, b);
        b.postRenderFunctions.push(Vi)
    };
    l.ie = function(b, c, d, e, f, g) {
        var h;
        if (this.d.isContextLost()) return !1;
        var k = this.e,
            n = c.viewState;
        if (null !== this.i) {
            var p = {},
                q = eo;
            if (h = this.i.b(b, k, n.center, n.resolution, n.rotation, c.size, c.pixelRatio, q.opacity, q.brightness, q.contrast, q.hue, q.saturation, {}, function(b) {
                    var c = v(b).toString();
                    if (!(c in p)) return p[c] = !0, d.call(e, b, null)
                })) return h
        }
        k = c.layerStatesArray;
        for (q = k.length - 1; 0 <= q; --q) {
            h = k[q];
            var r = h.layer;
            if (zi(h, n.resolution) && f.call(g, r) && (h = Wi(this, r).La(b, c, d, e))) return h
        }
    };
    var eo = {
        opacity: 1,
        brightness: 0,
        contrast: 1,
        hue: 0,
        saturation: 1
    };
    var fo = ["canvas", "webgl", "dom"];

    function Q(b) {
        hd.call(this);
        var c = go(b);
        this.qf = m(b.loadTilesWhileAnimating) ? b.loadTilesWhileAnimating : !1;
        this.rf = m(b.loadTilesWhileInteracting) ? b.loadTilesWhileInteracting : !1;
        this.tf = m(b.pixelRatio) ? b.pixelRatio : vf;
        this.sf = c.logos;
        this.v = new $g(this.oi, void 0, this);
        ic(this, this.v);
        this.Lc = td();
        this.vf = td();
        this.Mc = 0;
        this.d = null;
        this.za = Kd();
        this.l = this.u = null;
        this.b = cf("DIV", "ol-viewport");
        this.b.style.position = "relative";
        this.b.style.overflow = "hidden";
        this.b.style.width = "100%";
        this.b.style.height =
            "100%";
        this.b.style.msTouchAction = "none";
        Af && (this.b.className = "ol-touch");
        this.aa = cf("DIV", "ol-overlaycontainer");
        this.b.appendChild(this.aa);
        this.s = cf("DIV", "ol-overlaycontainer-stopevent");
        C(this.s, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown", ti, Cb ? "DOMMouseScroll" : "mousewheel"], lc);
        this.b.appendChild(this.s);
        b = new li(this);
        C(b, mb(wi), this.Pd, !1, this);
        ic(this, b);
        this.V = c.keyboardEventTarget;
        this.o = new qh;
        C(this.o, "key", this.Nd, !1, this);
        ic(this, this.o);
        b = new zh(this.b);
        C(b, "mousewheel",
            this.Nd, !1, this);
        ic(this, b);
        this.n = c.controls;
        this.k = c.interactions;
        this.p = c.overlays;
        this.K = new c.pi(this.b, this);
        ic(this, this.K);
        this.Ub = new lh;
        ic(this, this.Ub);
        C(this.Ub, "resize", this.P, !1, this);
        this.J = null;
        this.t = [];
        this.ba = [];
        this.jb = new cj(ua(this.dg, this), ua(this.ph, this));
        this.O = {};
        C(this, ld("layergroup"), this.qg, !1, this);
        C(this, ld("view"), this.Ig, !1, this);
        C(this, ld("size"), this.Fg, !1, this);
        C(this, ld("target"), this.Gg, !1, this);
        this.U(c.Ei);
        this.n.forEach(function(b) {
            b.setMap(this)
        }, this);
        C(this.n, "add", function(b) {
            b.element.setMap(this)
        }, !1, this);
        C(this.n, "remove", function(b) {
            b.element.setMap(null)
        }, !1, this);
        this.k.forEach(function(b) {
            b.setMap(this)
        }, this);
        C(this.k, "add", function(b) {
            b.element.setMap(this)
        }, !1, this);
        C(this.k, "remove", function(b) {
            b.element.setMap(null)
        }, !1, this);
        this.p.forEach(function(b) {
            b.setMap(this)
        }, this);
        C(this.p, "add", function(b) {
            b.element.setMap(this)
        }, !1, this);
        C(this.p, "remove", function(b) {
            b.element.setMap(null)
        }, !1, this)
    }
    A(Q, hd);
    l = Q.prototype;
    l.Df = function(b) {
        this.n.push(b)
    };
    l.Ef = function(b) {
        this.k.push(b)
    };
    l.Ff = function(b) {
        this.g().qb().push(b)
    };
    l.Gf = function(b) {
        this.p.push(b)
    };
    l.pa = function(b) {
        this.render();
        Array.prototype.push.apply(this.t, arguments)
    };
    l.B = function() {
        kf(this.b);
        Q.H.B.call(this)
    };
    l.Vc = function(b, c, d, e, f) {
        if (null !== this.d) return b = this.e(b), this.K.ie(b, this.d, c, m(d) ? d : null, m(e) ? e : Vc, m(f) ? f : null)
    };

    function Zg(b, c) {
        if (m(c.changedTouches)) {
            var d = c.changedTouches[0],
                e = gg(b.b);
            return [d.clientX - e.x, d.clientY - e.y]
        }
        e = b.b;
        d = gg(c);
        e = gg(e);
        d = new Ue(d.x - e.x, d.y - e.y);
        return [d.x, d.y]
    }
    l.Zd = function() {
        return this.get("target")
    };
    Q.prototype.getTarget = Q.prototype.Zd;

    function ho(b) {
        b = b.Zd();
        return m(b) ? Ze(b) : null
    }
    Q.prototype.e = function(b) {
        var c = this.d;
        if (null === c) return null;
        b = b.slice();
        return Di(c.pixelToCoordinateMatrix, b, b)
    };
    Q.prototype.g = function() {
        return this.get("layergroup")
    };
    Q.prototype.getLayerGroup = Q.prototype.g;
    Q.prototype.$ = function() {
        return this.g().qb()
    };

    function zj(b, c) {
        var d = b.d;
        if (null === d) return null;
        var e = c.slice(0, 2);
        return Di(d.coordinateToPixelMatrix, e, e)
    }
    Q.prototype.f = function() {
        return this.get("size")
    };
    Q.prototype.getSize = Q.prototype.f;
    Q.prototype.a = function() {
        return this.get("view")
    };
    Q.prototype.getView = Q.prototype.a;
    l = Q.prototype;
    l.fg = function() {
        return this.b
    };
    l.dg = function(b, c, d, e) {
        var f = this.d;
        if (!(null !== f && c in f.wantedTiles && f.wantedTiles[c][Le(b.a)])) return Infinity;
        b = d[0] - f.focus[0];
        d = d[1] - f.focus[1];
        return 65536 * Math.log(e) + Math.sqrt(b * b + d * d) / e
    };
    l.Nd = function(b, c) {
        var d = new ji(c || b.type, this, b);
        this.Pd(d)
    };
    l.Pd = function(b) {
        if (null !== this.d) {
            this.J = b.coordinate;
            b.frameState = this.d;
            var c = this.k.a,
                d;
            if (!1 !== this.dispatchEvent(b))
                for (d = c.length - 1; 0 <= d; d--) {
                    var e = c[d];
                    if (e.t() && !e.handleEvent(b)) break
                }
        }
    };
    l.Dg = function() {
        var b = this.d,
            c = this.jb;
        if (!c.R()) {
            var d = 16,
                e = d,
                f = 0;
            null !== b && (f = b.viewHints, f[0] && (d = this.qf ? 8 : 0, e = 2), f[1] && (d = this.rf ? 8 : 0, e = 2), f = lb(b.wantedTiles));
            d *= f;
            e *= f;
            if (c.d < d) {
                bj(c);
                d = Math.min(d - c.d, e, c.Ua());
                for (e = 0; e < d; ++e) f = Zi(c)[0], C(f, "change", c.f, !1, c), f.load();
                c.d += d
            }
        }
        c = this.ba;
        d = 0;
        for (e = c.length; d < e; ++d) c[d](this, b);
        c.length = 0
    };
    l.Fg = function() {
        this.render()
    };
    l.Gg = function() {
        var b = ho(this);
        yh(this.o);
        null === b ? kf(this.b) : (b.appendChild(this.b), sh(this.o, null === this.V ? b : this.V));
        this.P()
    };
    l.ph = function() {
        this.render()
    };
    l.Jg = function() {
        this.render()
    };
    l.Ig = function() {
        null !== this.u && (Pc(this.u), this.u = null);
        var b = this.a();
        null !== b && (this.u = C(b, "propertychange", this.Jg, !1, this));
        this.render()
    };
    l.rg = function() {
        this.render()
    };
    l.sg = function() {
        this.render()
    };
    l.qg = function() {
        if (null !== this.l) {
            for (var b = this.l.length, c = 0; c < b; ++c) Pc(this.l[c]);
            this.l = null
        }
        b = this.g();
        null != b && (this.l = [C(b, "propertychange", this.sg, !1, this), C(b, "change", this.rg, !1, this)]);
        this.render()
    };
    l.render = function() {
        null != this.v.qa || this.v.start()
    };
    l.ki = function(b) {
        var c;
        m(this.k.remove(b)) && (c = b);
        return c
    };
    l.li = function(b) {
        return this.g().qb().remove(b)
    };
    l.mi = function(b) {
        if (m(this.p.remove(b))) return b
    };
    l.oi = function(b) {
        var c, d, e, f = this.f(),
            g = this.a(),
            h = null;
        if (c = m(f) && 0 < f[0] && 0 < f[1] && null !== g) c = null != g.a() && m(g.b());
        if (c) {
            var h = g.p.slice(),
                k = this.g().g(),
                n = {};
            c = 0;
            for (d = k.length; c < d; ++c) n[v(k[c].layer)] = k[c];
            e = Be(g);
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.Lc,
                extent: null,
                focus: null === this.J ? e.center : this.J,
                index: this.Mc++,
                layerStates: n,
                layerStatesArray: k,
                logos: wb(this.sf),
                pixelRatio: this.tf,
                pixelToCoordinateMatrix: this.vf,
                postRenderFunctions: [],
                size: f,
                skippedFeatureUids: this.O,
                tileQueue: this.jb,
                time: b,
                usedTiles: {},
                viewState: e,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (null !== h) {
            b = this.t;
            c = f = 0;
            for (d = b.length; c < d; ++c) g = b[c], g(this, h) && (b[f++] = g);
            b.length = f;
            h.extent = Td(e.center, e.resolution, e.rotation, h.size)
        }
        this.d = h;
        this.K.Bc(h);
        null !== h && (h.animate && this.render(), Array.prototype.push.apply(this.ba, h.postRenderFunctions), 0 !== this.t.length || h.viewHints[0] || h.viewHints[1] || Md(h.extent, this.za) || (this.dispatchEvent(new pg("moveend", this, h)), Fd(h.extent, this.za)));
        this.dispatchEvent(new pg("postrender",
            this, h));
        c = e = this.Dg;
        this && (c = ua(e, this));
        !oa(ca.setImmediate) || ca.Window && ca.Window.prototype.setImmediate == ca.setImmediate ? (dh || (dh = eh()), dh(c)) : ca.setImmediate(c)
    };
    l.ti = function(b) {
        this.set("layergroup", b)
    };
    Q.prototype.setLayerGroup = Q.prototype.ti;
    Q.prototype.M = function(b) {
        this.set("size", b)
    };
    Q.prototype.setSize = Q.prototype.M;
    Q.prototype.uf = function(b) {
        this.set("target", b)
    };
    Q.prototype.setTarget = Q.prototype.uf;
    Q.prototype.Xe = function(b) {
        this.set("view", b)
    };
    Q.prototype.setView = Q.prototype.Xe;
    Q.prototype.Ha = function(b) {
        b = v(b).toString();
        this.O[b] = !0;
        this.render()
    };
    Q.prototype.P = function() {
        var b = ho(this);
        if (null === b) this.M(void 0);
        else {
            var c = Ye(b),
                d = Bb && b.currentStyle,
                e;
            if (e = d) We(c), e = !0;
            if (e && "auto" != d.width && "auto" != d.height && !d.boxSizing) c = kg(b, d.width, "width", "pixelWidth"), b = kg(b, d.height, "height", "pixelHeight"), b = new Ve(c, b);
            else {
                d = new Ve(b.offsetWidth, b.offsetHeight);
                c = mg(b, "padding");
                if (!Bb || Bb && 9 <= Mb) e = bg(b, "borderLeftWidth"), f = bg(b, "borderRightWidth"), g = bg(b, "borderTopWidth"), b = bg(b, "borderBottomWidth"), b = new Zf(parseFloat(g), parseFloat(f), parseFloat(b),
                    parseFloat(e));
                else {
                    e = og(b, "borderLeft");
                    var f = og(b, "borderRight"),
                        g = og(b, "borderTop"),
                        b = og(b, "borderBottom"),
                        b = new Zf(g, f, b, e)
                }
                b = new Ve(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom)
            }
            this.M([b.width, b.height])
        }
    };
    Q.prototype.Tb = function(b) {
        b = v(b).toString();
        delete this.O[b];
        this.render()
    };

    function go(b) {
        var c = null;
        m(b.keyboardEventTarget) && (c = ma(b.keyboardEventTarget) ? document.getElementById(b.keyboardEventTarget) : b.keyboardEventTarget);
        var d = {},
            e = {};
        if (!m(b.logo) || "boolean" == typeof b.logo && b.logo) e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "http://openlayers.org/";
        else {
            var f = b.logo;
            ma(f) ? e[f] = "" : pa(f) && (e[f.src] = f.href)
        }
        f = b.layers instanceof el ? b.layers : new el({
            layers: b.layers
        });
        d.layergroup = f;
        d.target = b.target;
        d.view = m(b.view) ? b.view : new ye;
        var f = Ti,
            g;
        m(b.renderer) ? ja(b.renderer) ? g = b.renderer : ma(b.renderer) && (g = [b.renderer]) : g = fo;
        var h, k;
        h = 0;
        for (k = g.length; h < k; ++h) {
            var n = g[h];
            if ("canvas" == n) {
                if (yf) {
                    f = Sm;
                    break
                }
            } else if ("dom" == n) {
                f = $m;
                break
            } else if ("webgl" == n && uf) {
                f = ao;
                break
            }
        }
        var p;
        m(b.controls) ? p = ja(b.controls) ? new Jf(b.controls.slice()) :
            b.controls : p = Vg();
        if (m(b.interactions)) g = ja(b.interactions) ? new Jf(b.interactions.slice()) : b.interactions;
        else {
            g = m(void 0) ? void 0 : {};
            h = new Jf;
            k = new dj;
            (m(g.altShiftDragRotate) ? g.altShiftDragRotate : 1) && h.push(new Aj);
            (m(g.doubleClickZoom) ? g.doubleClickZoom : 1) && h.push(new jj({
                delta: g.zoomDelta,
                duration: g.zoomDuration
            }));
            (m(g.dragPan) ? g.dragPan : 1) && h.push(new vj({
                kinetic: k
            }));
            (m(g.pinchRotate) ? g.pinchRotate : 1) && h.push(new Xk);
            (m(g.pinchZoom) ? g.pinchZoom : 1) && h.push(new al({
                duration: g.zoomDuration
            }));
            if (m(g.keyboard) ? g.keyboard : 1) h.push(new Rk), h.push(new Tk({
                delta: g.zoomDelta,
                duration: g.zoomDuration
            }));
            (m(g.mouseWheelZoom) ? g.mouseWheelZoom : 1) && h.push(new Vk({
                duration: g.zoomDuration
            }));
            (m(g.shiftDragZoom) ? g.shiftDragZoom : 1) && h.push(new Qk);
            g = h
        }
        b = m(b.overlays) ? ja(b.overlays) ? new Jf(b.overlays.slice()) : b.overlays : new Jf;
        return {
            controls: p,
            interactions: g,
            keyboardEventTarget: c,
            logos: e,
            overlays: b,
            pi: f,
            Ei: d
        }
    }
    ll();

    function io(b) {
        hd.call(this);
        this.u = m(b.insertFirst) ? b.insertFirst : !0;
        this.v = m(b.stopEvent) ? b.stopEvent : !0;
        this.I = cf("DIV", {
            "class": "ol-overlay-container"
        });
        this.I.style.position = "absolute";
        this.t = m(b.autoPan) ? b.autoPan : !1;
        this.e = m(b.autoPanAnimation) ? b.autoPanAnimation : {};
        this.s = m(b.autoPanMargin) ? b.autoPanMargin : 20;
        this.a = {
            Xb: "",
            oc: "",
            Cc: "",
            Dc: "",
            visible: !0
        };
        this.b = null;
        C(this, ld("element"), this.mg, !1, this);
        C(this, ld("map"), this.xg, !1, this);
        C(this, ld("offset"), this.zg, !1, this);
        C(this, ld("position"),
            this.Bg, !1, this);
        C(this, ld("positioning"), this.Cg, !1, this);
        m(b.element) && this.De(b.element);
        this.p(m(b.offset) ? b.offset : [0, 0]);
        this.o(m(b.positioning) ? b.positioning : "top-left");
        m(b.position) && this.n(b.position)
    }
    A(io, hd);
    io.prototype.f = function() {
        return this.get("element")
    };
    io.prototype.getElement = io.prototype.f;
    io.prototype.d = function() {
        return this.get("map")
    };
    io.prototype.getMap = io.prototype.d;
    io.prototype.g = function() {
        return this.get("offset")
    };
    io.prototype.getOffset = io.prototype.g;
    io.prototype.l = function() {
        return this.get("position")
    };
    io.prototype.getPosition = io.prototype.l;
    io.prototype.k = function() {
        return this.get("positioning")
    };
    io.prototype.getPositioning = io.prototype.k;
    l = io.prototype;
    l.mg = function() {
        hf(this.I);
        var b = this.f();
        null != b && gf(this.I, b)
    };
    l.xg = function() {
        null !== this.b && (kf(this.I), Pc(this.b), this.b = null);
        var b = this.d();
        null != b && (this.b = C(b, "postrender", this.render, !1, this), jo(this), b = this.v ? b.s : b.aa, this.u ? jf(b, this.I, 0) : gf(b, this.I))
    };
    l.render = function() {
        jo(this)
    };
    l.zg = function() {
        jo(this)
    };
    l.Bg = function() {
        jo(this);
        if (m(this.get("position")) && this.t) {
            var b = this.d();
            if (m(b) && !ia(ho(b))) {
                var c = ko(ho(b), b.f()),
                    d = this.f(),
                    e = d.offsetWidth,
                    f = d.currentStyle || window.getComputedStyle(d),
                    e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)),
                    f = d.offsetHeight,
                    g = d.currentStyle || window.getComputedStyle(d),
                    f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)),
                    h = ko(d, [e, f]),
                    d = this.s;
                Hd(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d : 0 > f && (c[0] = Math.abs(f) + d), 0 >
                    g ? c[1] = g - d : 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = b.a().a(), e = zj(b, d), c = [e[0] + c[0], e[1] + c[1]], null !== this.e && (this.e.source = d, b.pa(Ge(this.e))), b.a().d(b.e(c)))
            }
        }
    };
    l.Cg = function() {
        jo(this)
    };
    l.De = function(b) {
        this.set("element", b)
    };
    io.prototype.setElement = io.prototype.De;
    io.prototype.setMap = function(b) {
        this.set("map", b)
    };
    io.prototype.setMap = io.prototype.setMap;
    io.prototype.p = function(b) {
        this.set("offset", b)
    };
    io.prototype.setOffset = io.prototype.p;
    io.prototype.n = function(b) {
        this.set("position", b)
    };
    io.prototype.setPosition = io.prototype.n;

    function ko(b, c) {
        var d = Ye(b);
        cg(b, "position");
        var e = new Ue(0, 0),
            f;
        f = d ? Ye(d) : document;
        var g;
        (g = !Bb || Bb && 9 <= Mb) || (We(f), g = !0);
        b != (g ? f.documentElement : f.body) && (f = fg(b), d = mf(We(d)), e.x = f.left + d.x, e.y = f.top + d.y);
        return [e.x, e.y, e.x + c[0], e.y + c[1]]
    }
    io.prototype.o = function(b) {
        this.set("positioning", b)
    };
    io.prototype.setPositioning = io.prototype.o;

    function jo(b) {
        var c = b.d(),
            d = b.l();
        if (m(c) && null !== c.d && m(d)) {
            var d = zj(c, d),
                e = c.f(),
                c = b.I.style,
                f = b.g(),
                g = b.k(),
                h = f[0],
                f = f[1];
            if ("bottom-right" == g || "center-right" == g || "top-right" == g) "" !== b.a.oc && (b.a.oc = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", b.a.Cc != h && (b.a.Cc = c.right = h);
            else {
                "" !== b.a.Cc && (b.a.Cc = c.right = "");
                if ("bottom-center" == g || "center-center" == g || "top-center" == g) h -= hg(b.I).width / 2;
                h = Math.round(d[0] + h) + "px";
                b.a.oc != h && (b.a.oc = c.left = h)
            }
            if ("bottom-left" == g || "bottom-center" == g || "bottom-right" ==
                g) "" !== b.a.Dc && (b.a.Dc = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", b.a.Xb != d && (b.a.Xb = c.bottom = d);
            else {
                "" !== b.a.Xb && (b.a.Xb = c.bottom = "");
                if ("center-left" == g || "center-center" == g || "center-right" == g) f -= hg(b.I).height / 2;
                d = Math.round(d[1] + f) + "px";
                b.a.Dc != d && (b.a.Dc = c.top = d)
            }
            b.a.visible || (jg(b.I, !0), b.a.visible = !0)
        } else b.a.visible && (jg(b.I, !1), b.a.visible = !1)
    };

    function lo(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-scale-line";
        this.e = cf("DIV", c + "-inner");
        this.I = cf("DIV", c + " ol-unselectable", this.e);
        this.k = null;
        this.g = m(b.minWidth) ? b.minWidth : 64;
        this.b = !1;
        this.n = void 0;
        this.l = "";
        this.d = null;
        qg.call(this, {
            element: this.I,
            render: m(b.render) ? b.render : mo,
            target: b.target
        });
        C(this, ld("units"), this.t, !1, this);
        this.o(b.units || "metric")
    }
    A(lo, qg);
    var no = [1, 2, 5];
    lo.prototype.p = function() {
        return this.get("units")
    };
    lo.prototype.getUnits = lo.prototype.p;

    function mo(b) {
        b = b.frameState;
        null === b ? this.k = null : this.k = b.viewState;
        oo(this)
    }
    lo.prototype.t = function() {
        oo(this)
    };
    lo.prototype.o = function(b) {
        this.set("units", b)
    };
    lo.prototype.setUnits = lo.prototype.o;

    function oo(b) {
        var c = b.k;
        if (null === c) b.b && (jg(b.I, !1), b.b = !1);
        else {
            var d = c.center,
                e = c.projection,
                c = e.getPointResolution(c.resolution, d),
                f = e.c,
                g = b.p();
            "degrees" != f || "metric" != g && "imperial" != g && "us" != g && "nautical" != g ? "degrees" != f && "degrees" == g ? (null === b.d && (b.d = ie(e, ee("EPSG:4326"))), d = Math.cos(Sb(b.d(d)[1])), e = ae.radius, e /= be[f], c *= 180 / (Math.PI * d * e)) : b.d = null : (b.d = null, d = Math.cos(Sb(d[1])), c *= Math.PI * d * ae.radius / 180);
            d = b.g * c;
            f = "";
            "degrees" == g ? d < 1 / 60 ? (f = "\u2033", c *= 3600) : 1 > d ? (f = "\u2032", c *= 60) : f = "\u00b0" :
                "imperial" == g ? .9144 > d ? (f = "in", c /= .0254) : 1609.344 > d ? (f = "ft", c /= .3048) : (f = "mi", c /= 1609.344) : "nautical" == g ? (c /= 1852, f = "nm") : "metric" == g ? 1 > d ? (f = "mm", c *= 1E3) : 1E3 > d ? f = "m" : (f = "km", c /= 1E3) : "us" == g && (.9144 > d ? (f = "in", c *= 39.37) : 1609.344 > d ? (f = "ft", c /= .30480061) : (f = "mi", c /= 1609.3472));
            for (d = 3 * Math.floor(Math.log(b.g * c) / Math.log(10));;) {
                e = no[d % 3] * Math.pow(10, Math.floor(d / 3));
                g = Math.round(e / c);
                if (isNaN(g)) {
                    jg(b.I, !1);
                    b.b = !1;
                    return
                }
                if (g >= b.g) break;
                ++d
            }
            c = e + " " + f;
            b.l != c && (b.e.innerHTML = c, b.l = c);
            b.n != g && (b.e.style.width =
                g + "px", b.n = g);
            b.b || (jg(b.I, !0), b.b = !0)
        }
    };

    function po(b) {
        fc.call(this);
        this.c = b;
        this.a = {}
    }
    A(po, fc);
    var qo = [];
    po.prototype.Ya = function(b, c, d, e) {
        ja(c) || (c && (qo[0] = c.toString()), c = qo);
        for (var f = 0; f < c.length; f++) {
            var g = C(b, c[f], d || this.handleEvent, e || !1, this.c || this);
            if (!g) break;
            this.a[g.key] = g
        }
        return this
    };
    po.prototype.od = function(b, c, d, e, f) {
        if (ja(c))
            for (var g = 0; g < c.length; g++) this.od(b, c[g], d, e, f);
        else d = d || this.handleEvent, f = f || this.c || this, d = Gc(d), e = !!e, c = uc(b) ? Bc(b.ua, String(c), d, e, f) : b ? (b = Ic(b)) ? Bc(b, c, d, e, f) : null : null, c && (Pc(c), delete this.a[c.key]);
        return this
    };

    function ro(b) {
        jb(b.a, Pc);
        b.a = {}
    }
    po.prototype.B = function() {
        po.H.B.call(this);
        ro(this)
    };
    po.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function so(b, c, d) {
        $c.call(this);
        this.target = b;
        this.handle = c || b;
        this.a = d || new $f(NaN, NaN, NaN, NaN);
        this.b = Ye(b);
        this.c = new po(this);
        ic(this, this.c);
        C(this.handle, ["touchstart", "mousedown"], this.Md, !1, this)
    }
    A(so, $c);
    var to = Bb || Cb && Kb("1.9.3");
    l = so.prototype;
    l.clientX = 0;
    l.clientY = 0;
    l.screenX = 0;
    l.screenY = 0;
    l.Ge = 0;
    l.He = 0;
    l.mb = 0;
    l.nb = 0;
    l.Wa = !1;
    l.B = function() {
        so.H.B.call(this);
        Oc(this.handle, ["touchstart", "mousedown"], this.Md, !1, this);
        ro(this.c);
        to && this.b.releaseCapture();
        this.handle = this.target = null
    };
    l.Md = function(b) {
        var c = "mousedown" == b.type;
        if (this.Wa || c && !sc(b)) this.dispatchEvent("earlycancel");
        else if (uo(b), this.dispatchEvent(new vo("start", this, b.clientX, b.clientY))) {
            this.Wa = !0;
            b.preventDefault();
            var c = this.b,
                d = c.documentElement,
                e = !to;
            this.c.Ya(c, ["touchmove", "mousemove"], this.yg, e);
            this.c.Ya(c, ["touchend", "mouseup"], this.ic, e);
            to ? (d.setCapture(!1), this.c.Ya(d, "losecapture", this.ic)) : this.c.Ya(c ? c.parentWindow || c.defaultView : window, "blur", this.ic);
            this.e && this.c.Ya(this.e, "scroll", this.Hh,
                e);
            this.clientX = this.Ge = b.clientX;
            this.clientY = this.He = b.clientY;
            this.screenX = b.screenX;
            this.screenY = b.screenY;
            this.mb = this.target.offsetLeft;
            this.nb = this.target.offsetTop;
            this.d = mf(We(this.b));
            wa()
        }
    };
    l.ic = function(b) {
        ro(this.c);
        to && this.b.releaseCapture();
        if (this.Wa) {
            uo(b);
            this.Wa = !1;
            var c = wo(this, this.mb),
                d = xo(this, this.nb);
            this.dispatchEvent(new vo("end", this, b.clientX, b.clientY, 0, c, d))
        } else this.dispatchEvent("earlycancel")
    };

    function uo(b) {
        var c = b.type;
        "touchstart" == c || "touchmove" == c ? qc(b, b.a.targetTouches[0], b.b) : "touchend" != c && "touchcancel" != c || qc(b, b.a.changedTouches[0], b.b)
    }
    l.yg = function(b) {
        uo(b);
        var c = 1 * (b.clientX - this.clientX),
            d = b.clientY - this.clientY;
        this.clientX = b.clientX;
        this.clientY = b.clientY;
        this.screenX = b.screenX;
        this.screenY = b.screenY;
        if (!this.Wa) {
            var e = this.Ge - this.clientX,
                f = this.He - this.clientY;
            if (0 < e * e + f * f)
                if (this.dispatchEvent(new vo("start", this, b.clientX, b.clientY))) this.Wa = !0;
                else {
                    this.C || this.ic(b);
                    return
                }
        }
        d = yo(this, c, d);
        c = d.x;
        d = d.y;
        this.Wa && this.dispatchEvent(new vo("beforedrag", this, b.clientX, b.clientY, 0, c, d)) && (zo(this, b, c, d), b.preventDefault())
    };

    function yo(b, c, d) {
        var e = mf(We(b.b));
        c += e.x - b.d.x;
        d += e.y - b.d.y;
        b.d = e;
        b.mb += c;
        b.nb += d;
        c = wo(b, b.mb);
        b = xo(b, b.nb);
        return new Ue(c, b)
    }
    l.Hh = function(b) {
        var c = yo(this, 0, 0);
        b.clientX = this.clientX;
        b.clientY = this.clientY;
        zo(this, b, c.x, c.y)
    };

    function zo(b, c, d, e) {
        b.target.style.left = d + "px";
        b.target.style.top = e + "px";
        b.dispatchEvent(new vo("drag", b, c.clientX, c.clientY, 0, d, e))
    }

    function wo(b, c) {
        var d = b.a,
            e = isNaN(d.left) ? null : d.left,
            d = isNaN(d.width) ? 0 : d.width;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }

    function xo(b, c) {
        var d = b.a,
            e = isNaN(d.top) ? null : d.top,
            d = isNaN(d.height) ? 0 : d.height;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }

    function vo(b, c, d, e, f, g, h) {
        kc.call(this, b);
        this.clientX = d;
        this.clientY = e;
        this.left = m(g) ? g : c.mb;
        this.top = m(h) ? h : c.nb
    }
    A(vo, kc);

    function Ao(b) {
        b = m(b) ? b : {};
        this.d = void 0;
        this.e = Bo;
        this.g = null;
        this.k = !1;
        var c = m(b.className) ? b.className : "ol-zoomslider",
            d = cf("DIV", [c + "-thumb", "ol-unselectable"]),
            c = cf("DIV", [c, "ol-unselectable", "ol-control"], d);
        this.b = new so(d);
        ic(this, this.b);
        C(this.b, "start", this.lg, !1, this);
        C(this.b, "drag", this.jg, !1, this);
        C(this.b, "end", this.kg, !1, this);
        C(c, "click", this.ig, !1, this);
        C(d, "click", lc);
        qg.call(this, {
            element: c,
            render: m(b.render) ? b.render : Co
        })
    }
    A(Ao, qg);
    var Bo = 0;
    l = Ao.prototype;
    l.setMap = function(b) {
        Ao.H.setMap.call(this, b);
        null === b || b.render()
    };

    function Co(b) {
        if (null !== b.frameState) {
            if (!this.k) {
                var c = this.element,
                    d = hg(c),
                    e = lf(c),
                    c = mg(e, "margin"),
                    f = new Ve(e.offsetWidth, e.offsetHeight),
                    e = f.width + c.right + c.left,
                    c = f.height + c.top + c.bottom;
                this.g = [e, c];
                e = d.width - e;
                c = d.height - c;
                d.width > d.height ? (this.e = 1, d = new $f(0, 0, e, 0)) : (this.e = Bo, d = new $f(0, 0, 0, c));
                this.b.a = d || new $f(NaN, NaN, NaN, NaN);
                this.k = !0
            }
            b = b.frameState.viewState.resolution;
            b !== this.d && (this.d = b, b = 1 - Ae(this.a.a())(b), d = this.b, c = lf(this.element), 1 == this.e ? dg(c, d.a.left + d.a.width * b) : dg(c,
                d.a.left, d.a.top + d.a.height * b))
        }
    }
    l.ig = function(b) {
        var c = this.a,
            d = c.a(),
            e = d.b();
        c.pa(Ie({
            resolution: e,
            duration: 200,
            easing: De
        }));
        b = Do(this, b.offsetX - this.g[0] / 2, b.offsetY - this.g[1] / 2);
        b = Eo(this, b);
        d.f(d.constrainResolution(b))
    };
    l.lg = function() {
        Ce(this.a.a(), 1)
    };
    l.jg = function(b) {
        b = Do(this, b.left, b.top);
        this.d = Eo(this, b);
        this.a.a().f(this.d)
    };
    l.kg = function() {
        var b = this.a,
            c = b.a();
        Ce(c, -1);
        b.pa(Ie({
            resolution: this.d,
            duration: 200,
            easing: De
        }));
        b = c.constrainResolution(this.d);
        c.f(b)
    };

    function Do(b, c, d) {
        var e = b.b.a;
        return Pb(1 === b.e ? (c - e.left) / e.width : (d - e.top) / e.height, 0, 1)
    }

    function Eo(b, c) {
        return ze(b.a.a())(1 - c)
    };

    function R(b) {
        hd.call(this);
        this.a = void 0;
        this.b = "geometry";
        this.k = null;
        this.d = void 0;
        this.g = null;
        C(this, ld(this.b), this.jc, !1, this);
        m(b) && (b instanceof Ej || null === b ? this.la(b) : this.U(b))
    }
    A(R, hd);
    R.prototype.clone = function() {
        var b = new R(this.Ea());
        b.f(this.b);
        var c = this.G();
        null != c && b.la(c.clone());
        c = this.k;
        null === c || b.l(c);
        return b
    };
    R.prototype.G = function() {
        return this.get(this.b)
    };
    R.prototype.getGeometry = R.prototype.G;
    l = R.prototype;
    l.Vf = function() {
        return this.a
    };
    l.Uf = function() {
        return this.b
    };
    l.jh = function() {
        return this.k
    };
    l.kh = function() {
        return this.d
    };
    l.pg = function() {
        this.r()
    };
    l.jc = function() {
        null !== this.g && (Pc(this.g), this.g = null);
        var b = this.G();
        null != b && (this.g = C(b, "change", this.pg, !1, this), this.r())
    };
    l.la = function(b) {
        this.set(this.b, b)
    };
    R.prototype.setGeometry = R.prototype.la;
    R.prototype.l = function(b) {
        this.k = b;
        null === b ? b = void 0 : oa(b) || (b = ja(b) ? b : [b], b = Tc(b));
        this.d = b;
        this.r()
    };
    R.prototype.e = function(b) {
        this.a = b;
        this.r()
    };
    R.prototype.f = function(b) {
        Oc(this, ld(this.b), this.jc, !1, this);
        this.b = b;
        C(this, ld(this.b), this.jc, !1, this);
        this.jc()
    };

    function Fo(b) {
        b = m(b) ? b : {};
        this.f = this.e = this.d = this.c = this.b = this.a = null;
        this.i = void 0;
        this.Yd(m(b.style) ? b.style : Ok);
        m(b.features) ? ja(b.features) ? this.Nb(new Jf(b.features.slice())) : this.Nb(b.features) : this.Nb(new Jf);
        m(b.map) && this.setMap(b.map)
    }
    l = Fo.prototype;
    l.ah = function(b) {
        this.a.push(b)
    };
    l.bh = function() {
        return this.a
    };
    l.dh = function() {
        return this.d
    };
    l.Xd = function() {
        Go(this)
    };
    l.ng = function(b) {
        b = b.element;
        this.c[v(b).toString()] = C(b, "change", this.Xd, !1, this);
        Go(this)
    };
    l.og = function(b) {
        b = v(b.element).toString();
        Pc(this.c[b]);
        delete this.c[b];
        Go(this)
    };
    l.gh = function() {
        Go(this)
    };
    l.hh = function(b) {
        if (null !== this.a) {
            var c = this.i;
            m(c) || (c = Ok);
            var d = b.a;
            b = b.frameState;
            var e = b.viewState.resolution,
                f = pm(e, b.pixelRatio),
                g, h, k, n;
            this.a.forEach(function(b) {
                n = b.d;
                k = m(n) ? n.call(b, e) : c(b, e);
                if (null != k)
                    for (h = k.length, g = 0; g < h; ++g) qm(d, b, k[g], f, this.gh, this)
            }, this)
        }
    };
    l.ih = function(b) {
        this.a.remove(b)
    };

    function Go(b) {
        null === b.d || b.d.render()
    }
    l.Nb = function(b) {
        null !== this.b && (Oa(this.b, Pc), this.b = null);
        null !== this.c && (Oa(mb(this.c), Pc), this.c = null);
        this.a = b;
        null !== b && (this.b = [C(b, "add", this.ng, !1, this), C(b, "remove", this.og, !1, this)], this.c = {}, b.forEach(function(b) {
            this.c[v(b).toString()] = C(b, "change", this.Xd, !1, this)
        }, this));
        Go(this)
    };
    l.setMap = function(b) {
        null !== this.e && (Pc(this.e), this.e = null);
        Go(this);
        this.d = b;
        null !== b && (this.e = C(b, "postcompose", this.hh, !1, this), b.render())
    };
    l.Yd = function(b) {
        this.f = b;
        this.i = Nk(b);
        Go(this)
    };
    l.eh = function() {
        return this.f
    };
    l.fh = function() {
        return this.i
    };

    function Ho() {
        this.defaultDataProjection = null
    }

    function Io(b, c, d) {
        var e;
        m(d) && (e = {
            dataProjection: m(d.dataProjection) ? d.dataProjection : b.na(c),
            featureProjection: d.featureProjection
        });
        return Jo(b, e)
    }

    function Jo(b, c) {
        var d;
        m(c) && (d = {
            featureProjection: c.featureProjection,
            dataProjection: null != c.dataProjection ? c.dataProjection : b.defaultDataProjection,
            rightHanded: c.rightHanded
        });
        return d
    }

    function Ko(b, c, d) {
        var e = m(d) ? ee(d.featureProjection) : null;
        d = m(d) ? ee(d.dataProjection) : null;
        return null === e || null === d || e === d || (e.c != d.c ? 0 : ie(e, d) === me) ? b : b instanceof Ej ? (c ? b.clone() : b).transform(c ? e : d, c ? d : e) : xe(c ? b.slice() : b, c ? e : d, c ? d : e)
    };

    function Lo(b) {
        b = String(b);
        if (/^\s*$/.test(b) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + b + ")")
        } catch (c) {}
        throw Error("Invalid JSON string: " + b);
    }

    function Mo(b) {
        var c = [];
        No(new Oo, b, c);
        return c.join("")
    }

    function Oo() {}

    function No(b, c, d) {
        switch (typeof c) {
            case "string":
                Po(c, d);
                break;
            case "number":
                d.push(isFinite(c) && !isNaN(c) ? c : "null");
                break;
            case "boolean":
                d.push(c);
                break;
            case "undefined":
                d.push("null");
                break;
            case "object":
                if (null == c) {
                    d.push("null");
                    break
                }
                if (ja(c)) {
                    var e = c.length;
                    d.push("[");
                    for (var f = "", g = 0; g < e; g++) d.push(f), No(b, c[g], d), f = ",";
                    d.push("]");
                    break
                }
                d.push("{");
                e = "";
                for (f in c) Object.prototype.hasOwnProperty.call(c, f) && (g = c[f], "function" != typeof g && (d.push(e), Po(f, d), d.push(":"), No(b, g, d), e = ","));
                d.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof c);
        }
    }
    var Qo = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Ro = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function Po(b, c) {
        c.push('"', b.replace(Ro, function(b) {
            if (b in Qo) return Qo[b];
            var c = b.charCodeAt(0),
                f = "\\u";
            16 > c ? f += "000" : 256 > c ? f += "00" : 4096 > c && (f += "0");
            return Qo[b] = f + c.toString(16)
        }), '"')
    };

    function So() {
        this.defaultDataProjection = null
    }
    A(So, Ho);

    function To(b) {
        return pa(b) ? b : ma(b) ? (b = Lo(b), m(b) ? b : null) : null
    }
    l = So.prototype;
    l.A = function() {
        return "json"
    };
    l.Na = function(b, c) {
        return Uo(this, To(b), Io(this, b, c))
    };
    l.S = function(b, c) {
        return this.b(To(b), Io(this, b, c))
    };
    l.Lb = function(b, c) {
        var d = To(b),
            e = Io(this, b, c);
        return Vo(d, e)
    };
    l.na = function(b) {
        b = To(b).crs;
        return null != b ? "name" == b.type ? ee(b.properties.name) : "EPSG" == b.type ? ee("EPSG:" + b.properties.code) : null : this.defaultDataProjection
    };
    l.Gc = function(b, c) {
        return Mo(this.a(b, c))
    };
    l.Qa = function(b, c) {
        return Mo(this.d(b, c))
    };
    l.Qb = function(b, c) {
        return Mo(this.e(b, c))
    };

    function Wo(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326");
        this.c = b.geometryName
    }
    A(Wo, So);

    function Vo(b, c) {
        return null === b ? null : Ko((0, Xo[b.type])(b), !1, c)
    }

    function Yo(b, c) {
        return (0, Zo[b.A()])(Ko(b, !0, c), c)
    }
    var Xo = {
            Point: function(b) {
                return new G(b.coordinates)
            },
            LineString: function(b) {
                return new M(b.coordinates)
            },
            Polygon: function(b) {
                return new I(b.coordinates)
            },
            MultiPoint: function(b) {
                return new O(b.coordinates)
            },
            MultiLineString: function(b) {
                return new N(b.coordinates)
            },
            MultiPolygon: function(b) {
                return new P(b.coordinates)
            },
            GeometryCollection: function(b, c) {
                var d = Ra(b.geometries, function(b) {
                    return Vo(b, c)
                });
                return new cm(d)
            }
        },
        Zo = {
            Point: function(b) {
                return {
                    type: "Point",
                    coordinates: b.wa()
                }
            },
            LineString: function(b) {
                return {
                    type: "LineString",
                    coordinates: b.ma()
                }
            },
            Polygon: function(b, c) {
                var d;
                m(c) && (d = c.rightHanded);
                return {
                    type: "Polygon",
                    coordinates: b.qc(d)
                }
            },
            MultiPoint: function(b) {
                return {
                    type: "MultiPoint",
                    coordinates: b.ee()
                }
            },
            MultiLineString: function(b) {
                return {
                    type: "MultiLineString",
                    coordinates: b.ce()
                }
            },
            MultiPolygon: function(b, c) {
                var d;
                m(c) && (d = c.rightHanded);
                return {
                    type: "MultiPolygon",
                    coordinates: b.ge(d)
                }
            },
            GeometryCollection: function(b, c) {
                return {
                    type: "GeometryCollection",
                    geometries: Ra(b.i, function(b) {
                        return Yo(b, c)
                    })
                }
            },
            Circle: function() {
                return {
                    type: "GeometryCollection",
                    geometries: []
                }
            }
        };

    function Uo(b, c, d) {
        d = Vo(c.geometry, d);
        var e = new R;
        m(b.c) && e.f(b.c);
        e.la(d);
        m(c.id) && e.e(c.id);
        m(c.properties) && e.U(c.properties);
        return e
    }
    Wo.prototype.b = function(b, c) {
        if ("Feature" == b.type) return [Uo(this, b, c)];
        if ("FeatureCollection" == b.type) {
            var d = [],
                e = b.features,
                f, g;
            f = 0;
            for (g = e.length; f < g; ++f) d.push(Uo(this, e[f], c));
            return d
        }
        return []
    };
    Wo.prototype.a = function(b, c) {
        c = Jo(this, c);
        var d = {
                type: "Feature"
            },
            e = b.a;
        null != e && (d.id = e);
        e = b.G();
        null != e && (d.geometry = Yo(e, c));
        e = b.Ea();
        tb(e, b.b);
        d.properties = rb(e) ? null : e;
        return d
    };
    Wo.prototype.d = function(b, c) {
        c = Jo(this, c);
        var d = [],
            e, f;
        e = 0;
        for (f = b.length; e < f; ++e) d.push(this.a(b[e], c));
        return {
            type: "FeatureCollection",
            features: d
        }
    };
    Wo.prototype.e = function(b, c) {
        return Yo(b, Jo(this, c))
    };

    function $o(b) {
        if ("undefined" != typeof XMLSerializer) return (new XMLSerializer).serializeToString(b);
        if (b = b.xml) return b;
        throw Error("Your browser does not support serializing XML documents");
    };
    var ap;
    a: if (document.implementation && document.implementation.createDocument) ap = document.implementation.createDocument("", "", null);
        else {
            if ("undefined" != typeof ActiveXObject) {
                var bp = new ActiveXObject("MSXML2.DOMDocument");
                if (bp) {
                    bp.resolveExternals = !1;
                    bp.validateOnParse = !1;
                    try {
                        bp.setProperty("ProhibitDTD", !0), bp.setProperty("MaxXMLSize", 2048), bp.setProperty("MaxElementDepth", 256)
                    } catch (cp) {}
                }
                if (bp) {
                    ap = bp;
                    break a
                }
            }
            throw Error("Your browser does not support creating new documents");
        }
    var dp = ap;

    function ep(b, c) {
        return dp.createElementNS(b, c)
    }

    function fp(b, c) {
        null === b && (b = "");
        return dp.createNode(1, c, b)
    }
    var gp = document.implementation && document.implementation.createDocument ? ep : fp;

    function hp(b) {
        return ip(b, !1, []).join("")
    }

    function ip(b, c, d) {
        if (4 == b.nodeType || 3 == b.nodeType) c ? d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(b.nodeValue);
        else
            for (b = b.firstChild; null !== b; b = b.nextSibling) ip(b, c, d);
        return d
    }

    function jp(b) {
        return b.localName
    }

    function kp(b) {
        var c = b.localName;
        return m(c) ? c : b.baseName
    }
    var lp = Bb ? kp : jp;

    function mp(b) {
        return b instanceof Document
    }

    function np(b) {
        return pa(b) && 9 == b.nodeType
    }
    var op = Bb ? np : mp;

    function pp(b) {
        return b instanceof Node
    }

    function qp(b) {
        return pa(b) && m(b.nodeType)
    }
    var rp = Bb ? qp : pp;

    function sp(b, c, d) {
        return b.getAttributeNS(c, d) || ""
    }

    function tp(b, c, d) {
        var e = "";
        b = up(b, c, d);
        m(b) && (e = b.nodeValue);
        return e
    }
    var vp = document.implementation && document.implementation.createDocument ? sp : tp;

    function wp(b, c, d) {
        return b.getAttributeNodeNS(c, d)
    }

    function xp(b, c, d) {
        var e = null;
        b = b.attributes;
        for (var f, g, h = 0, k = b.length; h < k; ++h)
            if (f = b[h], f.namespaceURI == c && (g = f.prefix ? f.prefix + ":" + d : d, g == f.nodeName)) {
                e = f;
                break
            }
        return e
    }
    var up = document.implementation && document.implementation.createDocument ? wp : xp;

    function yp(b, c, d, e) {
        b.setAttributeNS(c, d, e)
    }

    function zp(b, c, d, e) {
        null === c ? b.setAttribute(d, e) : (c = b.ownerDocument.createNode(2, d, c), c.nodeValue = e, b.setAttributeNode(c))
    }
    var Ap = document.implementation && document.implementation.createDocument ? yp : zp;

    function Bp(b) {
        return (new DOMParser).parseFromString(b, "application/xml")
    }

    function Cp(b, c) {
        return function(d, e) {
            var f = b.call(c, d, e);
            m(f) && Ya(e[e.length - 1], f)
        }
    }

    function Dp(b, c) {
        return function(d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && e[e.length - 1].push(f)
        }
    }

    function Ep(b, c) {
        return function(d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && (e[e.length - 1] = f)
        }
    }

    function Fp(b) {
        return function(c, d) {
            var e = b.call(m(void 0) ? void 0 : this, c, d);
            m(e) && vb(d[d.length - 1], m(void 0) ? void 0 : c.localName).push(e)
        }
    }

    function S(b, c) {
        return function(d, e) {
            var f = b.call(m(void 0) ? void 0 : this, d, e);
            m(f) && (e[e.length - 1][m(c) ? c : d.localName] = f)
        }
    }

    function U(b, c, d) {
        return Gp(b, c, d)
    }

    function V(b, c) {
        return function(d, e, f) {
            b.call(m(c) ? c : this, d, e, f);
            f[f.length - 1].node.appendChild(d)
        }
    }

    function Hp(b) {
        var c, d;
        return function(e, f, g) {
            if (!m(c)) {
                c = {};
                var h = {};
                h[e.localName] = b;
                c[e.namespaceURI] = h;
                d = Ip(e.localName)
            }
            Jp(c, d, f, g)
        }
    }

    function Ip(b, c) {
        return function(d, e, f) {
            d = e[e.length - 1].node;
            e = b;
            m(e) || (e = f);
            f = c;
            m(c) || (f = d.namespaceURI);
            return gp(f, e)
        }
    }
    var Kp = Ip();

    function Lp(b, c) {
        for (var d = c.length, e = Array(d), f = 0; f < d; ++f) e[f] = b[c[f]];
        return e
    }

    function Gp(b, c, d) {
        d = m(d) ? d : {};
        var e, f;
        e = 0;
        for (f = b.length; e < f; ++e) d[b[e]] = c;
        return d
    }

    function Mp(b, c, d, e) {
        for (c = c.firstElementChild; null !== c; c = c.nextElementSibling) {
            var f = b[c.namespaceURI];
            m(f) && (f = f[c.localName], m(f) && f.call(e, c, d))
        }
    }

    function W(b, c, d, e, f) {
        e.push(b);
        Mp(c, d, e, f);
        return e.pop()
    }

    function Jp(b, c, d, e, f, g) {
        for (var h = (m(f) ? f : d).length, k, n, p = 0; p < h; ++p) k = d[p], m(k) && (n = c.call(g, k, e, m(f) ? f[p] : void 0), m(n) && b[n.namespaceURI][n.localName].call(g, n, k, e))
    }

    function Np(b, c, d, e, f, g, h) {
        f.push(b);
        Jp(c, d, e, f, g, h);
        f.pop()
    };

    function Op() {
        this.defaultDataProjection = null
    }
    A(Op, Ho);
    l = Op.prototype;
    l.A = function() {
        return "xml"
    };
    l.Na = function(b, c) {
        if (op(b)) return Pp(this, b, c);
        if (rp(b)) return this.se(b, c);
        if (ma(b)) {
            var d = Bp(b);
            return Pp(this, d, c)
        }
        return null
    };

    function Pp(b, c, d) {
        b = Qp(b, c, d);
        return 0 < b.length ? b[0] : null
    }
    l.S = function(b, c) {
        if (op(b)) return Qp(this, b, c);
        if (rp(b)) return this.Oa(b, c);
        if (ma(b)) {
            var d = Bp(b);
            return Qp(this, d, c)
        }
        return []
    };

    function Qp(b, c, d) {
        var e = [];
        for (c = c.firstChild; null !== c; c = c.nextSibling) 1 == c.nodeType && Ya(e, b.Oa(c, d));
        return e
    }
    l.Lb = function(b, c) {
        if (op(b)) return this.C(b, c);
        if (rp(b)) {
            var d = this.xc(b, [Io(this, b, m(c) ? c : {})]);
            return m(d) ? d : null
        }
        return ma(b) ? (d = Bp(b), this.C(d, c)) : null
    };
    l.na = function(b) {
        return op(b) ? this.md(b) : rp(b) ? this.Ac(b) : ma(b) ? (b = Bp(b), this.md(b)) : null
    };
    l.md = function() {
        return this.defaultDataProjection
    };
    l.Ac = function() {
        return this.defaultDataProjection
    };
    l.Gc = function(b, c) {
        var d = this.q(b, c);
        return $o(d)
    };
    l.Qa = function(b, c) {
        var d = this.a(b, c);
        return $o(d)
    };
    l.Qb = function(b, c) {
        var d = this.k(b, c);
        return $o(d)
    };

    function Rp(b) {
        b = m(b) ? b : {};
        this.featureType = b.featureType;
        this.featureNS = b.featureNS;
        this.srsName = b.srsName;
        this.schemaLocation = "";
        this.c = {};
        this.c["http://www.opengis.net/gml"] = {
            featureMember: Ep(Rp.prototype.vc),
            featureMembers: Ep(Rp.prototype.vc)
        };
        this.defaultDataProjection = null
    }
    A(Rp, Op);
    l = Rp.prototype;
    l.vc = function(b, c) {
        var d = lp(b),
            e;
        if ("FeatureCollection" == d) e = W(null, this.c, b, c, this);
        else if ("featureMembers" == d || "featureMember" == d) {
            var f = c[0],
                g = f.featureType;
            e = f.featureNS;
            var h, k;
            if (!m(g) && null != b.childNodes) {
                g = [];
                e = {};
                h = 0;
                for (k = b.childNodes.length; h < k; ++h) {
                    var n = b.childNodes[h];
                    if (1 === n.nodeType) {
                        var p = n.nodeName.split(":").pop();
                        if (-1 === Na(g, p)) {
                            var q;
                            pb(e, n.namespaceURI) ? q = qb(e, function(b) {
                                return b === n.namespaceURI
                            }) : (q = "p" + lb(e), e[q] = n.namespaceURI);
                            g.push(q + ":" + p)
                        }
                    }
                }
                f.featureType = g;
                f.featureNS =
                    e
            }
            ma(e) && (h = e, e = {}, e.p0 = h);
            var f = {},
                g = ja(g) ? g : [g],
                r;
            for (r in e) {
                p = {};
                h = 0;
                for (k = g.length; h < k; ++h)(-1 === g[h].indexOf(":") ? "p0" : g[h].split(":")[0]) === r && (p[g[h].split(":").pop()] = "featureMembers" == d ? Dp(this.hd, this) : Ep(this.hd, this));
                f[e[r]] = p
            }
            e = W([], f, b, c)
        }
        m(e) || (e = []);
        return e
    };
    l.xc = function(b, c) {
        var d = c[0];
        d.srsName = b.firstElementChild.getAttribute("srsName");
        var e = W(null, this.sd, b, c, this);
        if (null != e) return Ko(e, !1, d)
    };
    l.hd = function(b, c) {
        var d, e = b.getAttribute("fid") || vp(b, "http://www.opengis.net/gml", "id"),
            f = {},
            g;
        for (d = b.firstElementChild; null !== d; d = d.nextElementSibling) {
            var h = lp(d);
            if (0 === d.childNodes.length || 1 === d.childNodes.length && 3 === d.firstChild.nodeType) {
                var k = hp(d);
                /^[\s\xa0]*$/.test(k) && (k = void 0);
                f[h] = k
            } else "boundedBy" !== h && (g = h), f[h] = this.xc(d, c)
        }
        d = new R(f);
        m(g) && d.f(g);
        e && d.e(e);
        return d
    };
    l.ye = function(b, c) {
        var d = this.wc(b, c);
        if (null != d) {
            var e = new G(null);
            ak(e, "XYZ", d);
            return e
        }
    };
    l.we = function(b, c) {
        var d = W([], this.ef, b, c, this);
        if (m(d)) return new O(d)
    };
    l.ve = function(b, c) {
        var d = W([], this.df, b, c, this);
        if (m(d)) {
            var e = new N(null);
            lm(e, d);
            return e
        }
    };
    l.xe = function(b, c) {
        var d = W([], this.ff, b, c, this);
        if (m(d)) {
            var e = new P(null);
            nm(e, d);
            return e
        }
    };
    l.ne = function(b, c) {
        Mp(this.jf, b, c, this)
    };
    l.Sd = function(b, c) {
        Mp(this.bf, b, c, this)
    };
    l.oe = function(b, c) {
        Mp(this.kf, b, c, this)
    };
    l.yc = function(b, c) {
        var d = this.wc(b, c);
        if (null != d) {
            var e = new M(null);
            jm(e, "XYZ", d);
            return e
        }
    };
    l.Xh = function(b, c) {
        var d = W(null, this.Sb, b, c, this);
        if (null != d) return d
    };
    l.ue = function(b, c) {
        var d = this.wc(b, c);
        if (m(d)) {
            var e = new Yj(null);
            Zj(e, "XYZ", d);
            return e
        }
    };
    l.zc = function(b, c) {
        var d = W([null], this.Kc, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new I(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) Ya(f, d[h]), g.push(f.length);
            nk(e, "XYZ", f, g);
            return e
        }
    };
    l.wc = function(b, c) {
        return W(null, this.Sb, b, c, this)
    };
    l.ef = Object({
        "http://www.opengis.net/gml": {
            pointMember: Dp(Rp.prototype.ne),
            pointMembers: Dp(Rp.prototype.ne)
        }
    });
    l.df = Object({
        "http://www.opengis.net/gml": {
            lineStringMember: Dp(Rp.prototype.Sd),
            lineStringMembers: Dp(Rp.prototype.Sd)
        }
    });
    l.ff = Object({
        "http://www.opengis.net/gml": {
            polygonMember: Dp(Rp.prototype.oe),
            polygonMembers: Dp(Rp.prototype.oe)
        }
    });
    l.jf = Object({
        "http://www.opengis.net/gml": {
            Point: Dp(Rp.prototype.wc)
        }
    });
    l.bf = Object({
        "http://www.opengis.net/gml": {
            LineString: Dp(Rp.prototype.yc)
        }
    });
    l.kf = Object({
        "http://www.opengis.net/gml": {
            Polygon: Dp(Rp.prototype.zc)
        }
    });
    l.Vb = Object({
        "http://www.opengis.net/gml": {
            LinearRing: Ep(Rp.prototype.Xh)
        }
    });
    l.Oa = function(b, c) {
        var d = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        m(c) && yb(d, Io(this, b, c));
        return this.vc(b, [d])
    };
    l.Ac = function(b) {
        return ee(m(this.D) ? this.D : b.firstElementChild.getAttribute("srsName"))
    };

    function Sp(b) {
        b = hp(b);
        return Tp(b)
    }

    function Tp(b) {
        if (b = /^\s*(true|1)|(false|0)\s*$/.exec(b)) return m(b[1]) || !1
    }

    function Up(b) {
        b = hp(b);
        if (b = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)) {
            var c = Date.UTC(parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10), parseInt(b[4], 10), parseInt(b[5], 10), parseInt(b[6], 10)) / 1E3;
            if ("Z" != b[7]) {
                var d = "-" == b[8] ? -1 : 1,
                    c = c + 60 * d * parseInt(b[9], 10);
                m(b[10]) && (c += 3600 * d * parseInt(b[10], 10))
            }
            return c
        }
    }

    function Vp(b) {
        b = hp(b);
        return Wp(b)
    }

    function Wp(b) {
        if (b = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b)) return parseFloat(b[1])
    }

    function Xp(b) {
        b = hp(b);
        return Yp(b)
    }

    function Yp(b) {
        if (b = /^\s*(\d+)\s*$/.exec(b)) return parseInt(b[1], 10)
    }

    function X(b) {
        b = hp(b);
        return za(b)
    }

    function Zp(b, c) {
        $p(b, c ? "1" : "0")
    }

    function aq(b, c) {
        b.appendChild(dp.createTextNode(c.toPrecision()))
    }

    function bq(b, c) {
        b.appendChild(dp.createTextNode(c.toString()))
    }

    function $p(b, c) {
        b.appendChild(dp.createTextNode(c))
    };

    function Y(b) {
        b = m(b) ? b : {};
        Rp.call(this, b);
        this.g = m(b.surface) ? b.surface : !1;
        this.e = m(b.curve) ? b.curve : !1;
        this.i = m(b.multiCurve) ? b.multiCurve : !0;
        this.f = m(b.multiSurface) ? b.multiSurface : !0;
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }
    A(Y, Rp);
    l = Y.prototype;
    l.$h = function(b, c) {
        var d = W([], this.cf, b, c, this);
        if (m(d)) {
            var e = new N(null);
            lm(e, d);
            return e
        }
    };
    l.ai = function(b, c) {
        var d = W([], this.gf, b, c, this);
        if (m(d)) {
            var e = new P(null);
            nm(e, d);
            return e
        }
    };
    l.Cd = function(b, c) {
        Mp(this.Ze, b, c, this)
    };
    l.Je = function(b, c) {
        Mp(this.of, b, c, this)
    };
    l.di = function(b, c) {
        return W([null], this.hf, b, c, this)
    };
    l.fi = function(b, c) {
        return W([null], this.nf, b, c, this)
    };
    l.ei = function(b, c) {
        return W([null], this.Kc, b, c, this)
    };
    l.Zh = function(b, c) {
        return W([null], this.Sb, b, c, this)
    };
    l.Lg = function(b, c) {
        var d = W(void 0, this.Vb, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    l.Of = function(b, c) {
        var d = W(void 0, this.Vb, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    l.ze = function(b, c) {
        var d = W([null], this.pf, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new I(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) Ya(f, d[h]), g.push(f.length);
            nk(e, "XYZ", f, g);
            return e
        }
    };
    l.qe = function(b, c) {
        var d = W([null], this.$e, b, c, this);
        if (m(d)) {
            var e = new M(null);
            jm(e, "XYZ", d);
            return e
        }
    };
    l.Wh = function(b, c) {
        var d = W([null], this.af, b, c, this);
        return Dd(d[1][0], d[1][1], d[2][0], d[2][1])
    };
    l.Yh = function(b, c) {
        for (var d = hp(b), e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, f = [], g; g = e.exec(d);) f.push(parseFloat(g[1])), d = d.substr(g[0].length);
        if ("" === d) {
            d = c[0].srsName;
            e = "enu";
            null === d || (e = he(ee(d)));
            if ("neu" === e)
                for (d = 0, e = f.length; d < e; d += 3) g = f[d], f[d] = f[d + 1], f[d + 1] = g;
            d = f.length;
            2 == d && f.push(0);
            return 0 === d ? void 0 : f
        }
    };
    l.kd = function(b, c) {
        var d = hp(b).replace(/^\s*|\s*$/g, ""),
            e = c[0].srsName,
            f = b.parentNode.getAttribute("srsDimension"),
            g = "enu";
        null === e || (g = he(ee(e)));
        d = d.split(/\s+/);
        e = 2;
        ia(b.getAttribute("srsDimension")) ? ia(b.getAttribute("dimension")) ? null === f || (e = Yp(f)) : e = Yp(b.getAttribute("dimension")) : e = Yp(b.getAttribute("srsDimension"));
        for (var h, k, n = [], p = 0, q = d.length; p < q; p += e) f = parseFloat(d[p]), h = parseFloat(d[p + 1]), k = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, k) : n.push(h, f, k);
        return n
    };
    l.Sb = Object({
        "http://www.opengis.net/gml": {
            pos: Ep(Y.prototype.Yh),
            posList: Ep(Y.prototype.kd)
        }
    });
    l.Kc = Object({
        "http://www.opengis.net/gml": {
            interior: Y.prototype.Lg,
            exterior: Y.prototype.Of
        }
    });
    l.sd = Object({
        "http://www.opengis.net/gml": {
            Point: Ep(Rp.prototype.ye),
            MultiPoint: Ep(Rp.prototype.we),
            LineString: Ep(Rp.prototype.yc),
            MultiLineString: Ep(Rp.prototype.ve),
            LinearRing: Ep(Rp.prototype.ue),
            Polygon: Ep(Rp.prototype.zc),
            MultiPolygon: Ep(Rp.prototype.xe),
            Surface: Ep(Y.prototype.ze),
            MultiSurface: Ep(Y.prototype.ai),
            Curve: Ep(Y.prototype.qe),
            MultiCurve: Ep(Y.prototype.$h),
            Envelope: Ep(Y.prototype.Wh)
        }
    });
    l.cf = Object({
        "http://www.opengis.net/gml": {
            curveMember: Dp(Y.prototype.Cd),
            curveMembers: Dp(Y.prototype.Cd)
        }
    });
    l.gf = Object({
        "http://www.opengis.net/gml": {
            surfaceMember: Dp(Y.prototype.Je),
            surfaceMembers: Dp(Y.prototype.Je)
        }
    });
    l.Ze = Object({
        "http://www.opengis.net/gml": {
            LineString: Dp(Rp.prototype.yc),
            Curve: Dp(Y.prototype.qe)
        }
    });
    l.of = Object({
        "http://www.opengis.net/gml": {
            Polygon: Dp(Rp.prototype.zc),
            Surface: Dp(Y.prototype.ze)
        }
    });
    l.pf = Object({
        "http://www.opengis.net/gml": {
            patches: Ep(Y.prototype.di)
        }
    });
    l.$e = Object({
        "http://www.opengis.net/gml": {
            segments: Ep(Y.prototype.fi)
        }
    });
    l.af = Object({
        "http://www.opengis.net/gml": {
            lowerCorner: Dp(Y.prototype.kd),
            upperCorner: Dp(Y.prototype.kd)
        }
    });
    l.hf = Object({
        "http://www.opengis.net/gml": {
            PolygonPatch: Ep(Y.prototype.ei)
        }
    });
    l.nf = Object({
        "http://www.opengis.net/gml": {
            LineStringSegment: Ep(Y.prototype.Zh)
        }
    });

    function cq(b, c, d) {
        d = d[d.length - 1].srsName;
        c = c.ma();
        for (var e = c.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = c[h];
            var k = h,
                n = "enu";
            null != d && (n = he(ee(d)));
            f[k] = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0]
        }
        $p(b, f.join(" "))
    }
    l.Ue = function(b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        e = gp(b.namespaceURI, "pos");
        b.appendChild(e);
        d = d[d.length - 1].srsName;
        b = "enu";
        null != d && (b = he(ee(d)));
        c = c.wa();
        $p(e, "en" === b.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0])
    };
    var dq = {
        "http://www.opengis.net/gml": {
            lowerCorner: V($p),
            upperCorner: V($p)
        }
    };
    l = Y.prototype;
    l.Gi = function(b, c, d) {
        var e = d[d.length - 1].srsName;
        m(e) && b.setAttribute("srsName", e);
        Np({
            node: b
        }, dq, Kp, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this)
    };
    l.Re = function(b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        e = gp(b.namespaceURI, "posList");
        b.appendChild(e);
        cq(e, c, d)
    };
    l.mf = function(b, c) {
        var d = c[c.length - 1],
            e = d.node,
            f = d.exteriorWritten;
        m(f) || (d.exteriorWritten = !0);
        return gp(e.namespaceURI, m(f) ? "interior" : "exterior")
    };
    l.Jc = function(b, c, d) {
        var e = d[d.length - 1].srsName;
        "PolygonPatch" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "Polygon" === b.nodeName || "PolygonPatch" === b.nodeName ? (c = c.ec(), Np({
            node: b,
            srsName: e
        }, eq, this.mf, c, d, void 0, this)) : "Surface" === b.nodeName && (e = gp(b.namespaceURI, "patches"), b.appendChild(e), b = gp(e.namespaceURI, "PolygonPatch"), e.appendChild(b), this.Jc(b, c, d))
    };
    l.Fc = function(b, c, d) {
        var e = d[d.length - 1].srsName;
        "LineStringSegment" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "LineString" === b.nodeName || "LineStringSegment" === b.nodeName ? (e = gp(b.namespaceURI, "posList"), b.appendChild(e), cq(e, c, d)) : "Curve" === b.nodeName && (e = gp(b.namespaceURI, "segments"), b.appendChild(e), b = gp(e.namespaceURI, "LineStringSegment"), e.appendChild(b), this.Fc(b, c, d))
    };
    l.Te = function(b, c, d) {
        var e = d[d.length - 1],
            f = e.srsName,
            e = e.surface;
        null != f && b.setAttribute("srsName", f);
        c = c.gc();
        Np({
            node: b,
            srsName: f,
            surface: e
        }, fq, this.d, c, d, void 0, this)
    };
    l.Hi = function(b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        c = c.fc();
        Np({
            node: b,
            srsName: e
        }, gq, Ip("pointMember"), c, d, void 0, this)
    };
    l.Se = function(b, c, d) {
        var e = d[d.length - 1],
            f = e.srsName,
            e = e.curve;
        null != f && b.setAttribute("srsName", f);
        c = c.Eb();
        Np({
            node: b,
            srsName: f,
            curve: e
        }, hq, this.d, c, d, void 0, this)
    };
    l.Ve = function(b, c, d) {
        var e = gp(b.namespaceURI, "LinearRing");
        b.appendChild(e);
        this.Re(e, c, d)
    };
    l.We = function(b, c, d) {
        var e = this.b(c, d);
        m(e) && (b.appendChild(e), this.Jc(e, c, d))
    };
    l.Ii = function(b, c, d) {
        var e = gp(b.namespaceURI, "Point");
        b.appendChild(e);
        this.Ue(e, c, d)
    };
    l.Qe = function(b, c, d) {
        var e = this.b(c, d);
        m(e) && (b.appendChild(e), this.Fc(e, c, d))
    };
    l.Ic = function(b, c, d) {
        var e = d[d.length - 1],
            f = wb(e);
        f.node = b;
        var g;
        ja(c) ? m(e.dataProjection) ? g = xe(c, e.featureProjection, e.dataProjection) : g = c : g = Ko(c, !0, e);
        Np(f, iq, this.b, [g], d, void 0, this)
    };
    l.Oe = function(b, c, d) {
        var e = c.a;
        m(e) && b.setAttribute("fid", e);
        var e = d[d.length - 1],
            f = e.featureNS,
            g = c.b;
        m(e.fb) || (e.fb = {}, e.fb[f] = {});
        var h = c.Ea();
        c = [];
        var k = [],
            n;
        for (n in h) {
            var p = h[n];
            null !== p && (c.push(n), k.push(p), n == g ? n in e.fb[f] || (e.fb[f][n] = V(this.Ic, this)) : n in e.fb[f] || (e.fb[f][n] = V($p)))
        }
        n = wb(e);
        n.node = b;
        Np(n, e.fb, Ip(void 0, f), k, d, c)
    };
    var fq = {
            "http://www.opengis.net/gml": {
                surfaceMember: V(Y.prototype.We),
                polygonMember: V(Y.prototype.We)
            }
        },
        gq = {
            "http://www.opengis.net/gml": {
                pointMember: V(Y.prototype.Ii)
            }
        },
        hq = {
            "http://www.opengis.net/gml": {
                lineStringMember: V(Y.prototype.Qe),
                curveMember: V(Y.prototype.Qe)
            }
        },
        eq = {
            "http://www.opengis.net/gml": {
                exterior: V(Y.prototype.Ve),
                interior: V(Y.prototype.Ve)
            }
        },
        iq = {
            "http://www.opengis.net/gml": {
                Curve: V(Y.prototype.Fc),
                MultiCurve: V(Y.prototype.Se),
                Point: V(Y.prototype.Ue),
                MultiPoint: V(Y.prototype.Hi),
                LineString: V(Y.prototype.Fc),
                MultiLineString: V(Y.prototype.Se),
                LinearRing: V(Y.prototype.Re),
                Polygon: V(Y.prototype.Jc),
                MultiPolygon: V(Y.prototype.Te),
                Surface: V(Y.prototype.Jc),
                MultiSurface: V(Y.prototype.Te),
                Envelope: V(Y.prototype.Gi)
            }
        },
        jq = {
            MultiLineString: "lineStringMember",
            MultiCurve: "curveMember",
            MultiPolygon: "polygonMember",
            MultiSurface: "surfaceMember"
        };
    Y.prototype.d = function(b, c) {
        return gp("http://www.opengis.net/gml", jq[c[c.length - 1].node.nodeName])
    };
    Y.prototype.b = function(b, c) {
        var d = c[c.length - 1],
            e = d.multiSurface,
            f = d.surface,
            g = d.curve,
            d = d.multiCurve,
            h;
        ja(b) ? h = "Envelope" : (h = b.A(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface" : "Polygon" === h && !0 === f ? h = "Surface" : "LineString" === h && !0 === g ? h = "Curve" : "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
        return gp("http://www.opengis.net/gml", h)
    };
    Y.prototype.k = function(b, c) {
        c = Jo(this, c);
        var d = gp("http://www.opengis.net/gml", "geom"),
            e = {
                node: d,
                srsName: this.srsName,
                curve: this.e,
                surface: this.g,
                multiSurface: this.f,
                multiCurve: this.i
            };
        m(c) && yb(e, c);
        this.Ic(d, b, [e]);
        return d
    };
    Y.prototype.a = function(b, c) {
        c = Jo(this, c);
        var d = gp("http://www.opengis.net/gml", "featureMembers");
        Ap(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var e = {
            srsName: this.srsName,
            curve: this.e,
            surface: this.g,
            multiSurface: this.f,
            multiCurve: this.i,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        m(c) && yb(e, c);
        var e = [e],
            f = e[e.length - 1],
            g = f.featureType,
            h = f.featureNS,
            k = {};
        k[h] = {};
        k[h][g] = V(this.Oe, this);
        f = wb(f);
        f.node = d;
        Np(f, k, Ip(g, h), b, e);
        return d
    };

    function kq(b) {
        b = m(b) ? b : {};
        Rp.call(this, b);
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }
    A(kq, Rp);
    l = kq.prototype;
    l.te = function(b, c) {
        var d = hp(b).replace(/^\s*|\s*$/g, ""),
            e = c[0].srsName,
            f = b.parentNode.getAttribute("srsDimension"),
            g = "enu";
        null === e || (g = he(ee(e)));
        d = d.split(/[\s,]+/);
        e = 2;
        ia(b.getAttribute("srsDimension")) ? ia(b.getAttribute("dimension")) ? null === f || (e = Yp(f)) : e = Yp(b.getAttribute("dimension")) : e = Yp(b.getAttribute("srsDimension"));
        for (var h, k, n = [], p = 0, q = d.length; p < q; p += e) f = parseFloat(d[p]), h = parseFloat(d[p + 1]), k = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, k) : n.push(h, f, k);
        return n
    };
    l.Vh = function(b, c) {
        var d = W([null], this.Ye, b, c, this);
        return Dd(d[1][0], d[1][1], d[1][3], d[1][4])
    };
    l.Kg = function(b, c) {
        var d = W(void 0, this.Vb, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    l.Ih = function(b, c) {
        var d = W(void 0, this.Vb, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    l.Sb = Object({
        "http://www.opengis.net/gml": {
            coordinates: Ep(kq.prototype.te)
        }
    });
    l.Kc = Object({
        "http://www.opengis.net/gml": {
            innerBoundaryIs: kq.prototype.Kg,
            outerBoundaryIs: kq.prototype.Ih
        }
    });
    l.Ye = Object({
        "http://www.opengis.net/gml": {
            coordinates: Dp(kq.prototype.te)
        }
    });
    l.sd = Object({
        "http://www.opengis.net/gml": {
            Point: Ep(Rp.prototype.ye),
            MultiPoint: Ep(Rp.prototype.we),
            LineString: Ep(Rp.prototype.yc),
            MultiLineString: Ep(Rp.prototype.ve),
            LinearRing: Ep(Rp.prototype.ue),
            Polygon: Ep(Rp.prototype.zc),
            MultiPolygon: Ep(Rp.prototype.xe),
            Box: Ep(kq.prototype.Vh)
        }
    });

    function lq(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee("EPSG:4326");
        this.c = b.readExtensions
    }
    A(lq, Op);
    var mq = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function nq(b, c, d) {
        b.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (b.push(d.ele), tb(d, "ele")) : b.push(0);
        "time" in d ? (b.push(d.time), tb(d, "time")) : b.push(0);
        return b
    }

    function oq(b, c) {
        var d = c[c.length - 1],
            e = b.getAttribute("href");
        null === e || (d.link = e);
        Mp(pq, b, c)
    }

    function qq(b, c) {
        c[c.length - 1].extensionsNode_ = b
    }

    function rq(b, c) {
        var d = c[0],
            e = W({
                flatCoordinates: []
            }, sq, b, c);
        if (m(e)) {
            var f = e.flatCoordinates;
            tb(e, "flatCoordinates");
            var g = new M(null);
            jm(g, "XYZM", f);
            Ko(g, !1, d);
            d = new R(g);
            d.U(e);
            return d
        }
    }

    function tq(b, c) {
        var d = c[0],
            e = W({
                flatCoordinates: [],
                ends: []
            }, uq, b, c);
        if (m(e)) {
            var f = e.flatCoordinates;
            tb(e, "flatCoordinates");
            var g = e.ends;
            tb(e, "ends");
            var h = new N(null);
            km(h, "XYZM", f, g);
            Ko(h, !1, d);
            d = new R(h);
            d.U(e);
            return d
        }
    }

    function vq(b, c) {
        var d = c[0],
            e = W({}, wq, b, c);
        if (m(e)) {
            var f = nq([], b, e),
                f = new G(f, "XYZM");
            Ko(f, !1, d);
            d = new R(f);
            d.U(e);
            return d
        }
    }
    var xq = {
            rte: rq,
            trk: tq,
            wpt: vq
        },
        yq = U(mq, {
            rte: Dp(rq),
            trk: Dp(tq),
            wpt: Dp(vq)
        }),
        pq = U(mq, {
            text: S(X, "linkText"),
            type: S(X, "linkType")
        }),
        sq = U(mq, {
            name: S(X),
            cmt: S(X),
            desc: S(X),
            src: S(X),
            link: oq,
            number: S(Xp),
            extensions: qq,
            type: S(X),
            rtept: function(b, c) {
                var d = W({}, zq, b, c);
                m(d) && nq(c[c.length - 1].flatCoordinates, b, d)
            }
        }),
        zq = U(mq, {
            ele: S(Vp),
            time: S(Up)
        }),
        uq = U(mq, {
            name: S(X),
            cmt: S(X),
            desc: S(X),
            src: S(X),
            link: oq,
            number: S(Xp),
            type: S(X),
            extensions: qq,
            trkseg: function(b, c) {
                var d = c[c.length - 1];
                Mp(Aq, b, c);
                d.ends.push(d.flatCoordinates.length)
            }
        }),
        Aq = U(mq, {
            trkpt: function(b, c) {
                var d = W({}, Bq, b, c);
                m(d) && nq(c[c.length - 1].flatCoordinates, b, d)
            }
        }),
        Bq = U(mq, {
            ele: S(Vp),
            time: S(Up)
        }),
        wq = U(mq, {
            ele: S(Vp),
            time: S(Up),
            magvar: S(Vp),
            geoidheight: S(Vp),
            name: S(X),
            cmt: S(X),
            desc: S(X),
            src: S(X),
            link: oq,
            sym: S(X),
            type: S(X),
            fix: S(X),
            sat: S(Xp),
            hdop: S(Vp),
            vdop: S(Vp),
            pdop: S(Vp),
            ageofdgpsdata: S(Vp),
            dgpsid: S(Xp),
            extensions: qq
        });

    function Cq(b, c) {
        null === c && (c = []);
        for (var d = 0, e = c.length; d < e; ++d) {
            var f = c[d];
            if (m(b.c)) {
                var g = f.get("extensionsNode_") || null;
                b.c(f, g)
            }
            f.set("extensionsNode_", void 0)
        }
    }
    lq.prototype.se = function(b, c) {
        if (!Ua(mq, b.namespaceURI)) return null;
        var d = xq[b.localName];
        if (!m(d)) return null;
        d = d(b, [Io(this, b, c)]);
        if (!m(d)) return null;
        Cq(this, [d]);
        return d
    };
    lq.prototype.Oa = function(b, c) {
        if (!Ua(mq, b.namespaceURI)) return [];
        if ("gpx" == b.localName) {
            var d = W([], yq, b, [Io(this, b, c)]);
            if (m(d)) return Cq(this, d), d
        }
        return []
    };

    function Dq(b, c, d) {
        b.setAttribute("href", c);
        c = d[d.length - 1].properties;
        Np({
            node: b
        }, Eq, Kp, [c.linkText, c.linkType], d, Fq)
    }

    function Gq(b, c, d) {
        var e = d[d.length - 1],
            f = e.node.namespaceURI,
            g = e.properties;
        Ap(b, null, "lat", c[1]);
        Ap(b, null, "lon", c[0]);
        switch (e.geometryLayout) {
            case "XYZM":
                0 !== c[3] && (g.time = c[3]);
            case "XYZ":
                0 !== c[2] && (g.ele = c[2]);
                break;
            case "XYM":
                0 !== c[2] && (g.time = c[2])
        }
        c = Hq[f];
        e = Lp(g, c);
        Np({
            node: b,
            properties: g
        }, Iq, Kp, e, d, c)
    }
    var Fq = ["text", "type"],
        Eq = Gp(mq, {
            text: V($p),
            type: V($p)
        }),
        Jq = Gp(mq, "name cmt desc src link number type rtept".split(" ")),
        Kq = Gp(mq, {
            name: V($p),
            cmt: V($p),
            desc: V($p),
            src: V($p),
            link: V(Dq),
            number: V(bq),
            type: V($p),
            rtept: Hp(V(Gq))
        }),
        Lq = Gp(mq, "name cmt desc src link number type trkseg".split(" ")),
        Oq = Gp(mq, {
            name: V($p),
            cmt: V($p),
            desc: V($p),
            src: V($p),
            link: V(Dq),
            number: V(bq),
            type: V($p),
            trkseg: Hp(V(function(b, c, d) {
                Np({
                    node: b,
                    geometryLayout: c.b,
                    properties: {}
                }, Mq, Nq, c.ma(), d)
            }))
        }),
        Nq = Ip("trkpt"),
        Mq = Gp(mq, {
            trkpt: V(Gq)
        }),
        Hq = Gp(mq, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
        Iq = Gp(mq, {
            ele: V(aq),
            time: V(function(b, c) {
                var d = new Date(1E3 * c),
                    d = d.getUTCFullYear() + "-" + Ia(d.getUTCMonth() + 1) + "-" + Ia(d.getUTCDate()) + "T" + Ia(d.getUTCHours()) + ":" + Ia(d.getUTCMinutes()) + ":" + Ia(d.getUTCSeconds()) + "Z";
                b.appendChild(dp.createTextNode(d))
            }),
            magvar: V(aq),
            geoidheight: V(aq),
            name: V($p),
            cmt: V($p),
            desc: V($p),
            src: V($p),
            link: V(Dq),
            sym: V($p),
            type: V($p),
            fix: V($p),
            sat: V(bq),
            hdop: V(aq),
            vdop: V(aq),
            pdop: V(aq),
            ageofdgpsdata: V(aq),
            dgpsid: V(bq)
        }),
        Pq = {
            Point: "wpt",
            LineString: "rte",
            MultiLineString: "trk"
        };

    function Qq(b, c) {
        var d = b.G();
        if (m(d)) return gp(c[c.length - 1].node.namespaceURI, Pq[d.A()])
    }
    var Rq = Gp(mq, {
        rte: V(function(b, c, d) {
            var e = d[0],
                f = c.Ea();
            b = {
                node: b,
                properties: f
            };
            c = c.G();
            m(c) && (c = Ko(c, !0, e), b.geometryLayout = c.b, f.rtept = c.ma());
            e = Jq[d[d.length - 1].node.namespaceURI];
            f = Lp(f, e);
            Np(b, Kq, Kp, f, d, e)
        }),
        trk: V(function(b, c, d) {
            var e = d[0],
                f = c.Ea();
            b = {
                node: b,
                properties: f
            };
            c = c.G();
            m(c) && (c = Ko(c, !0, e), f.trkseg = c.Eb());
            e = Lq[d[d.length - 1].node.namespaceURI];
            f = Lp(f, e);
            Np(b, Oq, Kp, f, d, e)
        }),
        wpt: V(function(b, c, d) {
            var e = d[0],
                f = d[d.length - 1];
            f.properties = c.Ea();
            c = c.G();
            m(c) && (c = Ko(c, !0, e), f.geometryLayout =
                c.b, Gq(b, c.wa(), d))
        })
    });
    lq.prototype.a = function(b, c) {
        c = Jo(this, c);
        var d = gp("http://www.topografix.com/GPX/1/1", "gpx");
        Np({
            node: d
        }, Rq, Qq, b, [c]);
        return d
    };

    function Sq(b) {
        b = Tq(b);
        return Ra(b, function(b) {
            return b.b.substring(b.c, b.a)
        })
    }

    function Uq(b, c, d) {
        this.b = b;
        this.c = c;
        this.a = d
    }

    function Tq(b) {
        for (var c = RegExp("\r\n|\r|\n", "g"), d = 0, e, f = []; e = c.exec(b);) d = new Uq(b, d, e.index), f.push(d), d = c.lastIndex;
        d < b.length && (d = new Uq(b, d, b.length), f.push(d));
        return f
    };

    function Vq() {
        this.defaultDataProjection = null
    }
    A(Vq, Ho);
    l = Vq.prototype;
    l.A = function() {
        return "text"
    };
    l.Na = function(b, c) {
        return this.Kb(ma(b) ? b : "", Jo(this, c))
    };
    l.S = function(b, c) {
        return this.jd(ma(b) ? b : "", Jo(this, c))
    };
    l.Lb = function(b, c) {
        return this.Mb(ma(b) ? b : "", Jo(this, c))
    };
    l.na = function() {
        return this.defaultDataProjection
    };
    l.Gc = function(b, c) {
        return this.Hc(b, Jo(this, c))
    };
    l.Qa = function(b, c) {
        return this.Pe(b, Jo(this, c))
    };
    l.Qb = function(b, c) {
        return this.Rb(b, Jo(this, c))
    };

    function Wq(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee("EPSG:4326");
        this.a = m(b.altitudeMode) ? b.altitudeMode : "none"
    }
    A(Wq, Vq);
    var Xq = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        Yq = /^H.([A-Z]{3}).*?:(.*)/,
        Zq = /^HFDTE(\d{2})(\d{2})(\d{2})/;
    Wq.prototype.Kb = function(b, c) {
        var d = this.a,
            e = Sq(b),
            f = {},
            g = [],
            h = 2E3,
            k = 0,
            n = 1,
            p, q;
        p = 0;
        for (q = e.length; p < q; ++p) {
            var r = e[p],
                s;
            if ("B" == r.charAt(0)) {
                if (s = Xq.exec(r)) {
                    var r = parseInt(s[1], 10),
                        t = parseInt(s[2], 10),
                        x = parseInt(s[3], 10),
                        y = parseInt(s[4], 10) + parseInt(s[5], 10) / 6E4;
                    "S" == s[6] && (y = -y);
                    var z = parseInt(s[7], 10) + parseInt(s[8], 10) / 6E4;
                    "W" == s[9] && (z = -z);
                    g.push(z, y);
                    "none" != d && g.push("gps" == d ? parseInt(s[11], 10) : "barometric" == d ? parseInt(s[12], 10) : 0);
                    g.push(Date.UTC(h, k, n, r, t, x) / 1E3)
                }
            } else if ("H" == r.charAt(0))
                if (s =
                    Zq.exec(r)) n = parseInt(s[1], 10), k = parseInt(s[2], 10) - 1, h = 2E3 + parseInt(s[3], 10);
                else if (s = Yq.exec(r)) f[s[1]] = za(s[2]), Zq.exec(r)
        }
        if (0 === g.length) return null;
        e = new M(null);
        jm(e, "none" == d ? "XYM" : "XYZM", g);
        d = new R(Ko(e, !1, c));
        d.U(f);
        return d
    };
    Wq.prototype.jd = function(b, c) {
        var d = this.Kb(b, c);
        return null === d ? [] : [d]
    };
    var $q = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function ar(b) {
        if (br) {
            br = !1;
            var c = ca.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = ar(d)[3] || null) ? decodeURI(d) : d) && d != c.hostname) throw br = !0, Error();
            }
        }
        return b.match($q)
    }
    var br = Db;

    function cr(b, c) {
        for (var d = b.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].indexOf("="),
                g = null,
                h = null;
            0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
            c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
        }
    }

    function dr(b) {
        if (b[1]) {
            var c = b[0],
                d = c.indexOf("#");
            0 <= d && (b.push(c.substr(d)), b[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? b[1] = "?" : d == c.length - 1 && (b[1] = void 0)
        }
        return b.join("")
    }

    function er(b, c, d) {
        if (ja(c))
            for (var e = 0; e < c.length; e++) er(b, String(c[e]), d);
        else null != c && d.push("&", b, "" === c ? "" : "=", encodeURIComponent(String(c)))
    }

    function fr(b, c) {
        for (var d in c) er(d, c[d], b);
        return b
    };

    function gr(b, c) {
        var d;
        b instanceof gr ? (this.Va = m(c) ? c : b.Va, hr(this, b.Pa), this.hb = b.hb, this.Aa = b.Aa, ir(this, b.rb), this.xa = b.xa, jr(this, b.a.clone()), this.Ta = b.Ta) : b && (d = ar(String(b))) ? (this.Va = !!c, hr(this, d[1] || "", !0), this.hb = kr(d[2] || ""), this.Aa = kr(d[3] || "", !0), ir(this, d[4]), this.xa = kr(d[5] || "", !0), jr(this, d[6] || "", !0), this.Ta = kr(d[7] || "")) : (this.Va = !!c, this.a = new lr(null, 0, this.Va))
    }
    l = gr.prototype;
    l.Pa = "";
    l.hb = "";
    l.Aa = "";
    l.rb = null;
    l.xa = "";
    l.Ta = "";
    l.Va = !1;
    l.toString = function() {
        var b = [],
            c = this.Pa;
        c && b.push(mr(c, nr, !0), ":");
        if (c = this.Aa) {
            b.push("//");
            var d = this.hb;
            d && b.push(mr(d, nr, !0), "@");
            b.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            c = this.rb;
            null != c && b.push(":", String(c))
        }
        if (c = this.xa) this.Aa && "/" != c.charAt(0) && b.push("/"), b.push(mr(c, "/" == c.charAt(0) ? or : pr, !0));
        (c = this.a.toString()) && b.push("?", c);
        (c = this.Ta) && b.push("#", mr(c, qr));
        return b.join("")
    };
    l.clone = function() {
        return new gr(this)
    };

    function hr(b, c, d) {
        b.Pa = d ? kr(c, !0) : c;
        b.Pa && (b.Pa = b.Pa.replace(/:$/, ""))
    }

    function ir(b, c) {
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
            b.rb = c
        } else b.rb = null
    }

    function jr(b, c, d) {
        c instanceof lr ? (b.a = c, rr(b.a, b.Va)) : (d || (c = mr(c, sr)), b.a = new lr(c, 0, b.Va))
    }

    function tr(b) {
        return b instanceof gr ? b.clone() : new gr(b, void 0)
    }

    function ur(b, c) {
        b instanceof gr || (b = tr(b));
        c instanceof gr || (c = tr(c));
        var d = b,
            e = c,
            f = d.clone(),
            g = !!e.Pa;
        g ? hr(f, e.Pa) : g = !!e.hb;
        g ? f.hb = e.hb : g = !!e.Aa;
        g ? f.Aa = e.Aa : g = null != e.rb;
        var h = e.xa;
        if (g) ir(f, e.rb);
        else if (g = !!e.xa)
            if ("/" != h.charAt(0) && (d.Aa && !d.xa ? h = "/" + h : (d = f.xa.lastIndexOf("/"), -1 != d && (h = f.xa.substr(0, d + 1) + h))), d = h, ".." == d || "." == d) h = "";
            else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
            for (var h = 0 == d.lastIndexOf("/", 0), d = d.split("/"), k = [], n = 0; n < d.length;) {
                var p = d[n++];
                "." == p ? h && n == d.length && k.push("") :
                    ".." == p ? ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), h && n == d.length && k.push("")) : (k.push(p), h = !0)
            }
            h = k.join("/")
        } else h = d;
        g ? f.xa = h : g = "" !== e.a.toString();
        g ? jr(f, kr(e.a.toString())) : g = !!e.Ta;
        g && (f.Ta = e.Ta);
        return f
    }

    function kr(b, c) {
        return b ? c ? decodeURI(b) : decodeURIComponent(b) : ""
    }

    function mr(b, c, d) {
        return ma(b) ? (b = encodeURI(b).replace(c, vr), d && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b) : null
    }

    function vr(b) {
        b = b.charCodeAt(0);
        return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
    }
    var nr = /[#\/\?@]/g,
        pr = /[\#\?:]/g,
        or = /[\#\?]/g,
        sr = /[\#\?@]/g,
        qr = /#/g;

    function lr(b, c, d) {
        this.a = b || null;
        this.c = !!d
    }

    function wr(b) {
        b.L || (b.L = new hh, b.X = 0, b.a && cr(b.a, function(c, d) {
            b.add(decodeURIComponent(c.replace(/\+/g, " ")), d)
        }))
    }
    l = lr.prototype;
    l.L = null;
    l.X = null;
    l.Ua = function() {
        wr(this);
        return this.X
    };
    l.add = function(b, c) {
        wr(this);
        this.a = null;
        b = xr(this, b);
        var d = this.L.get(b);
        d || this.L.set(b, d = []);
        d.push(c);
        this.X++;
        return this
    };
    l.remove = function(b) {
        wr(this);
        b = xr(this, b);
        return jh(this.L.c, b) ? (this.a = null, this.X -= this.L.get(b).length, this.L.remove(b)) : !1
    };
    l.clear = function() {
        this.L = this.a = null;
        this.X = 0
    };
    l.R = function() {
        wr(this);
        return 0 == this.X
    };

    function yr(b, c) {
        wr(b);
        c = xr(b, c);
        return jh(b.L.c, c)
    }
    l.ca = function() {
        wr(this);
        for (var b = this.L.va(), c = this.L.ca(), d = [], e = 0; e < c.length; e++)
            for (var f = b[e], g = 0; g < f.length; g++) d.push(c[e]);
        return d
    };
    l.va = function(b) {
        wr(this);
        var c = [];
        if (ma(b)) yr(this, b) && (c = Wa(c, this.L.get(xr(this, b))));
        else {
            b = this.L.va();
            for (var d = 0; d < b.length; d++) c = Wa(c, b[d])
        }
        return c
    };
    l.set = function(b, c) {
        wr(this);
        this.a = null;
        b = xr(this, b);
        yr(this, b) && (this.X -= this.L.get(b).length);
        this.L.set(b, [c]);
        this.X++;
        return this
    };
    l.get = function(b, c) {
        var d = b ? this.va(b) : [];
        return 0 < d.length ? String(d[0]) : c
    };
    l.toString = function() {
        if (this.a) return this.a;
        if (!this.L) return "";
        for (var b = [], c = this.L.ca(), d = 0; d < c.length; d++)
            for (var e = c[d], f = encodeURIComponent(String(e)), e = this.va(e), g = 0; g < e.length; g++) {
                var h = f;
                "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
                b.push(h)
            }
        return this.a = b.join("&")
    };
    l.clone = function() {
        var b = new lr;
        b.a = this.a;
        this.L && (b.L = this.L.clone(), b.X = this.X);
        return b
    };

    function xr(b, c) {
        var d = String(c);
        b.c && (d = d.toLowerCase());
        return d
    }

    function rr(b, c) {
        c && !b.c && (wr(b), b.a = null, b.L.forEach(function(b, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), this.remove(f), 0 < b.length && (this.a = null, this.L.set(xr(this, f), Xa(b)), this.X += b.length))
        }, b));
        b.c = c
    };

    function zr(b) {
        b = m(b) ? b : {};
        this.d = b.font;
        this.f = b.rotation;
        this.c = b.scale;
        this.b = b.text;
        this.k = b.textAlign;
        this.C = b.textBaseline;
        this.a = m(b.fill) ? b.fill : null;
        this.g = m(b.stroke) ? b.stroke : null;
        this.e = m(b.offsetX) ? b.offsetX : 0;
        this.i = m(b.offsetY) ? b.offsetY : 0
    };

    function Ar(b) {
        function c(b) {
            return ja(b) ? b : ma(b) ? (!(b in e) && "#" + b in e && (b = "#" + b), c(e[b])) : d
        }
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee("EPSG:4326");
        var d = m(b.defaultStyle) ? b.defaultStyle : Br,
            e = {};
        this.b = m(b.extractStyles) ? b.extractStyles : !0;
        this.c = e;
        this.d = function() {
            var b = this.get("Style");
            if (m(b)) return b;
            b = this.get("styleUrl");
            return m(b) ? c(b) : d
        }
    }
    A(Ar, Op);
    var Cr = ["http://www.google.com/kml/ext/2.2"],
        Dr = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        Er = [255, 255, 255, 1],
        Fr = new Ik({
            color: Er
        }),
        Gr = [20, 2],
        Hr = [64, 64],
        Ir = new Qi({
            anchor: Gr,
            anchorOrigin: "bottom-left",
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            crossOrigin: "anonymous",
            rotation: 0,
            scale: .5,
            size: Hr,
            src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
        }),
        Jr = new Ek({
            color: Er,
            width: 1
        }),
        Kr = new zr({
            font: "normal 16px Helvetica",
            fill: Fr,
            stroke: Jr,
            scale: 1
        }),
        Br = [new Kk({
            fill: Fr,
            image: Ir,
            text: Kr,
            stroke: Jr,
            zIndex: 0
        })],
        Lr = {
            fraction: "fraction",
            pixels: "pixels"
        };

    function Mr(b) {
        b = hp(b);
        if (b = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b)) return b = b[1], [parseInt(b.substr(6, 2), 16), parseInt(b.substr(4, 2), 16), parseInt(b.substr(2, 2), 16), parseInt(b.substr(0, 2), 16) / 255]
    }

    function Nr(b) {
        b = hp(b);
        for (var c = [], d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, e; e = d.exec(b);) c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0), b = b.substr(e[0].length);
        return "" !== b ? void 0 : c
    }

    function Or(b) {
        var c = hp(b);
        return null != b.baseURI ? ur(b.baseURI, za(c)).toString() : za(c)
    }

    function Pr(b) {
        b = Vp(b);
        if (m(b)) return Math.sqrt(b)
    }

    function Qr(b, c) {
        return W(null, Rr, b, c)
    }

    function Sr(b, c) {
        var d = W({
            j: [],
            Ne: []
        }, Tr, b, c);
        if (m(d)) {
            var e = d.j,
                d = d.Ne,
                f, g;
            f = 0;
            for (g = Math.min(e.length, d.length); f < g; ++f) e[4 * f + 3] = d[f];
            d = new M(null);
            jm(d, "XYZM", e);
            return d
        }
    }

    function Ur(b, c) {
        var d = W(null, Vr, b, c);
        if (m(d)) {
            var e = new M(null);
            jm(e, "XYZ", d);
            return e
        }
    }

    function Wr(b, c) {
        var d = W(null, Vr, b, c);
        if (m(d)) {
            var e = new I(null);
            nk(e, "XYZ", d, [d.length]);
            return e
        }
    }

    function Xr(b, c) {
        var d = W([], Yr, b, c);
        if (!m(d)) return null;
        if (0 === d.length) return new cm(d);
        var e = !0,
            f = d[0].A(),
            g, h, k;
        h = 1;
        for (k = d.length; h < k; ++h)
            if (g = d[h], g.A() != f) {
                e = !1;
                break
            }
        if (e) {
            if ("Point" == f) {
                g = d[0];
                e = g.b;
                f = g.j;
                h = 1;
                for (k = d.length; h < k; ++h) g = d[h], Ya(f, g.j);
                d = new O(null);
                Hj(d, e, f);
                d.r();
                return d
            }
            return "LineString" == f ? (g = new N(null), lm(g, d), g) : "Polygon" == f ? (g = new P(null), nm(g, d), g) : "GeometryCollection" == f ? new cm(d) : null
        }
        return new cm(d)
    }

    function Zr(b, c) {
        var d = W(null, Vr, b, c);
        if (null != d) {
            var e = new G(null);
            ak(e, "XYZ", d);
            return e
        }
    }

    function $r(b, c) {
        var d = W([null], as, b, c);
        if (null != d && null !== d[0]) {
            var e = new I(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) Ya(f, d[h]), g.push(f.length);
            nk(e, "XYZ", f, g);
            return e
        }
    }

    function bs(b, c) {
        var d = W({}, cs, b, c);
        if (!m(d)) return null;
        var e = ub(d, "fillStyle", Fr),
            f = d.fill;
        m(f) && !f && (e = null);
        var f = ub(d, "imageStyle", Ir),
            g = ub(d, "textStyle", Kr),
            h = ub(d, "strokeStyle", Jr),
            d = d.outline;
        m(d) && !d && (h = null);
        return [new Kk({
            fill: e,
            image: f,
            stroke: h,
            text: g,
            zIndex: void 0
        })]
    }

    function ds(b, c) {
        Mp(es, b, c)
    }
    var fs = U(Dr, {
            value: Ep(X)
        }),
        es = U(Dr, {
            Data: function(b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = W(void 0, fs, b, c);
                    m(e) && (c[c.length - 1][d] = e)
                }
            },
            SchemaData: function(b, c) {
                Mp(gs, b, c)
            }
        }),
        Rr = U(Dr, {
            coordinates: Ep(Nr)
        }),
        as = U(Dr, {
            innerBoundaryIs: function(b, c) {
                var d = W(void 0, hs, b, c);
                m(d) && c[c.length - 1].push(d)
            },
            outerBoundaryIs: function(b, c) {
                var d = W(void 0, is, b, c);
                m(d) && (c[c.length - 1][0] = d)
            }
        }),
        Tr = U(Dr, {
            when: function(b, c) {
                var d = c[c.length - 1].Ne,
                    e = hp(b);
                if (e = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
                    var f =
                        Date.UTC(parseInt(e[1], 10), m(e[3]) ? parseInt(e[3], 10) - 1 : 0, m(e[5]) ? parseInt(e[5], 10) : 1, m(e[7]) ? parseInt(e[7], 10) : 0, m(e[8]) ? parseInt(e[8], 10) : 0, m(e[9]) ? parseInt(e[9], 10) : 0);
                    if (m(e[10]) && "Z" != e[10]) {
                        var g = "-" == e[11] ? -1 : 1,
                            f = f + 60 * g * parseInt(e[12], 10);
                        m(e[13]) && (f += 3600 * g * parseInt(e[13], 10))
                    }
                    d.push(f)
                } else d.push(0)
            }
        }, U(Cr, {
            coord: function(b, c) {
                var d = c[c.length - 1].j,
                    e = hp(b);
                (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ?
                d.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), 0): d.push(0, 0, 0, 0)
            }
        })),
        Vr = U(Dr, {
            coordinates: Ep(Nr)
        }),
        js = U(Dr, {
            href: S(Or)
        }, U(Cr, {
            x: S(Vp),
            y: S(Vp),
            w: S(Vp),
            h: S(Vp)
        })),
        ks = U(Dr, {
            Icon: S(function(b, c) {
                var d = W({}, js, b, c);
                return m(d) ? d : null
            }),
            heading: S(Vp),
            hotSpot: S(function(b) {
                var c = b.getAttribute("xunits"),
                    d = b.getAttribute("yunits");
                return {
                    x: parseFloat(b.getAttribute("x")),
                    qd: Lr[c],
                    y: parseFloat(b.getAttribute("y")),
                    rd: Lr[d]
                }
            }),
            scale: S(Pr)
        }),
        hs = U(Dr, {
            LinearRing: Ep(Qr)
        }),
        ls = U(Dr, {
            color: S(Mr),
            scale: S(Pr)
        }),
        ms = U(Dr, {
            color: S(Mr),
            width: S(Vp)
        }),
        Yr = U(Dr, {
            LineString: Dp(Ur),
            LinearRing: Dp(Wr),
            MultiGeometry: Dp(Xr),
            Point: Dp(Zr),
            Polygon: Dp($r)
        }),
        ns = U(Cr, {
            Track: Dp(Sr)
        }),
        ps = U(Dr, {
            ExtendedData: ds,
            Link: function(b, c) {
                Mp(os, b, c)
            },
            address: S(X),
            description: S(X),
            name: S(X),
            open: S(Sp),
            phoneNumber: S(X),
            visibility: S(Sp)
        }),
        os = U(Dr, {
            href: S(Or)
        }),
        is = U(Dr, {
            LinearRing: Ep(Qr)
        }),
        qs = U(Dr, {
            Style: S(bs),
            key: S(X),
            styleUrl: S(function(b) {
                var c = za(hp(b));
                return null != b.baseURI ? ur(b.baseURI, c).toString() : c
            })
        }),
        ss = U(Dr, {
            ExtendedData: ds,
            MultiGeometry: S(Xr,
                "geometry"),
            LineString: S(Ur, "geometry"),
            LinearRing: S(Wr, "geometry"),
            Point: S(Zr, "geometry"),
            Polygon: S($r, "geometry"),
            Style: S(bs),
            StyleMap: function(b, c) {
                var d = W(void 0, rs, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    ja(d) ? e.Style = d : ma(d) && (e.styleUrl = d)
                }
            },
            address: S(X),
            description: S(X),
            name: S(X),
            open: S(Sp),
            phoneNumber: S(X),
            styleUrl: S(Or),
            visibility: S(Sp)
        }, U(Cr, {
            MultiTrack: S(function(b, c) {
                var d = W([], ns, b, c);
                if (m(d)) {
                    var e = new N(null);
                    lm(e, d);
                    return e
                }
            }, "geometry"),
            Track: S(Sr, "geometry")
        })),
        ts = U(Dr, {
            color: S(Mr),
            fill: S(Sp),
            outline: S(Sp)
        }),
        gs = U(Dr, {
            SimpleData: function(b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = X(b);
                    c[c.length - 1][d] = e
                }
            }
        }),
        cs = U(Dr, {
            IconStyle: function(b, c) {
                var d = W({}, ks, b, c);
                if (m(d)) {
                    var e = c[c.length - 1],
                        f = ub(d, "Icon", {}),
                        g;
                    g = f.href;
                    g = m(g) ? g : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                    var h, k, n, p = d.hotSpot;
                    m(p) ? (h = [p.x, p.y], k = p.qd, n = p.rd) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = Gr, n = k = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) &&
                        (h = [.5, 0], n = k = "fraction");
                    var q, p = f.x,
                        r = f.y;
                    m(p) && m(r) && (q = [p, r]);
                    var s, p = f.w,
                        f = f.h;
                    m(p) && m(f) && (s = [p, f]);
                    var t, f = d.heading;
                    m(f) && (t = Sb(f));
                    d = d.scale;
                    "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (s = Hr);
                    h = new Qi({
                        anchor: h,
                        anchorOrigin: "bottom-left",
                        anchorXUnits: k,
                        anchorYUnits: n,
                        crossOrigin: "anonymous",
                        offset: q,
                        offsetOrigin: "bottom-left",
                        rotation: t,
                        scale: d,
                        size: s,
                        src: g
                    });
                    e.imageStyle = h
                }
            },
            LabelStyle: function(b, c) {
                var d = W({}, ls, b, c);
                m(d) && (c[c.length - 1].textStyle = new zr({
                    fill: new Ik({
                        color: ub(d,
                            "color", Er)
                    }),
                    scale: d.scale
                }))
            },
            LineStyle: function(b, c) {
                var d = W({}, ms, b, c);
                m(d) && (c[c.length - 1].strokeStyle = new Ek({
                    color: ub(d, "color", Er),
                    width: ub(d, "width", 1)
                }))
            },
            PolyStyle: function(b, c) {
                var d = W({}, ts, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    e.fillStyle = new Ik({
                        color: ub(d, "color", Er)
                    });
                    var f = d.fill;
                    m(f) && (e.fill = f);
                    d = d.outline;
                    m(d) && (e.outline = d)
                }
            }
        }),
        rs = U(Dr, {
            Pair: function(b, c) {
                var d = W({}, qs, b, c);
                if (m(d)) {
                    var e = d.key;
                    m(e) && "normal" == e && (e = d.styleUrl, m(e) && (c[c.length - 1] = e), d = d.Style, m(d) && (c[c.length -
                        1] = d))
                }
            }
        });
    l = Ar.prototype;
    l.re = function(b, c) {
        lp(b);
        var d = U(Dr, {
                Folder: Cp(this.re, this),
                Placemark: Dp(this.ld, this),
                Style: ua(this.hi, this),
                StyleMap: ua(this.gi, this)
            }),
            d = W([], d, b, c, this);
        if (m(d)) return d
    };
    l.ld = function(b, c) {
        var d = W({
            geometry: null
        }, ss, b, c);
        if (m(d)) {
            var e = new R,
                f = b.getAttribute("id");
            null === f || e.e(f);
            f = c[0];
            null != d.geometry && Ko(d.geometry, !1, f);
            e.U(d);
            this.b && e.l(this.d);
            return e
        }
    };
    l.hi = function(b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = bs(b, c);
            m(e) && (d = null != b.baseURI ? ur(b.baseURI, "#" + d).toString() : "#" + d, this.c[d] = e)
        }
    };
    l.gi = function(b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = W(void 0, rs, b, c);
            m(e) && (d = null != b.baseURI ? ur(b.baseURI, "#" + d).toString() : "#" + d, this.c[d] = e)
        }
    };
    l.se = function(b, c) {
        if (!Ua(Dr, b.namespaceURI)) return null;
        var d = this.ld(b, [Io(this, b, c)]);
        return m(d) ? d : null
    };
    l.Oa = function(b, c) {
        if (!Ua(Dr, b.namespaceURI)) return [];
        var d;
        d = lp(b);
        if ("Document" == d || "Folder" == d) return d = this.re(b, [Io(this, b, c)]), m(d) ? d : [];
        if ("Placemark" == d) return d = this.ld(b, [Io(this, b, c)]), m(d) ? [d] : [];
        if ("kml" == d) {
            d = [];
            var e;
            for (e = b.firstElementChild; null !== e; e = e.nextElementSibling) {
                var f = this.Oa(e, c);
                m(f) && Ya(d, f)
            }
            return d
        }
        return []
    };
    l.bi = function(b) {
        if (op(b)) return us(this, b);
        if (rp(b)) return vs(this, b);
        if (ma(b)) return b = Bp(b), us(this, b)
    };

    function us(b, c) {
        var d;
        for (d = c.firstChild; null !== d; d = d.nextSibling)
            if (1 == d.nodeType) {
                var e = vs(b, d);
                if (m(e)) return e
            }
    }

    function vs(b, c) {
        var d;
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)
            if (Ua(Dr, d.namespaceURI) && "name" == d.localName) return X(d);
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling) {
            var e = lp(d);
            if (Ua(Dr, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = vs(b, d), m(e))) return e
        }
    }
    l.ci = function(b) {
        var c = [];
        op(b) ? Ya(c, ws(this, b)) : rp(b) ? Ya(c, xs(this, b)) : ma(b) && (b = Bp(b), Ya(c, ws(this, b)));
        return c
    };

    function ws(b, c) {
        var d, e = [];
        for (d = c.firstChild; null !== d; d = d.nextSibling) 1 == d.nodeType && Ya(e, xs(b, d));
        return e
    }

    function xs(b, c) {
        var d, e = [];
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)
            if (Ua(Dr, d.namespaceURI) && "NetworkLink" == d.localName) {
                var f = W({}, ps, d, []);
                e.push(f)
            }
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling) f = lp(d), !Ua(Dr, d.namespaceURI) || "Document" != f && "Folder" != f && "kml" != f || Ya(e, xs(b, d));
        return e
    }

    function ys(b, c) {
        var d;
        d = ja(c) ? c : Sf(c);
        d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]];
        var e;
        for (e = 0; 4 > e; ++e) {
            var f = parseInt(d[e], 10).toString(16);
            d[e] = 1 == f.length ? "0" + f : f
        }
        $p(b, d.join(""))
    }

    function zs(b, c, d) {
        Np({
            node: b
        }, As, Bs, [c], d)
    }

    function Cs(b, c, d) {
        var e = {
            node: b
        };
        null != c.a && b.setAttribute("id", c.a);
        b = c.Ea();
        var f = c.d;
        m(f) && (f = f.call(c, 0), null !== f && 0 < f.length && (b.Style = f[0], f = f[0].c, null === f || (b.name = f.b)));
        f = Ds[d[d.length - 1].node.namespaceURI];
        b = Lp(b, f);
        Np(e, Es, Kp, b, d, f);
        b = d[0];
        c = c.G();
        null != c && (c = Ko(c, !0, b));
        Np(e, Es, Fs, [c], d)
    }

    function Gs(b, c, d) {
        var e = c.j;
        b = {
            node: b
        };
        b.layout = c.b;
        b.stride = c.a;
        Np(b, Hs, Is, [e], d)
    }

    function Js(b, c, d) {
        c = c.ec();
        var e = c.shift();
        b = {
            node: b
        };
        Np(b, Ks, Ls, c, d);
        Np(b, Ks, Ms, [e], d)
    }

    function Ns(b, c) {
        aq(b, c * c)
    }
    var Os = Gp(Dr, ["Document", "Placemark"]),
        Rs = Gp(Dr, {
            Document: V(function(b, c, d) {
                Np({
                    node: b
                }, Ps, Qs, c, d)
            }),
            Placemark: V(Cs)
        }),
        Ps = Gp(Dr, {
            Placemark: V(Cs)
        }),
        Ss = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry"
        },
        Ts = Gp(Dr, ["href"], Gp(Cr, ["x", "y", "w", "h"])),
        Us = Gp(Dr, {
            href: V($p)
        }, Gp(Cr, {
            x: V(aq),
            y: V(aq),
            w: V(aq),
            h: V(aq)
        })),
        Vs = Gp(Dr, ["scale", "heading", "Icon", "hotSpot"]),
        Xs = Gp(Dr, {
            Icon: V(function(b,
                c, d) {
                b = {
                    node: b
                };
                var e = Ts[d[d.length - 1].node.namespaceURI],
                    f = Lp(c, e);
                Np(b, Us, Kp, f, d, e);
                e = Ts[Cr[0]];
                f = Lp(c, e);
                Np(b, Us, Ws, f, d, e)
            }),
            heading: V(aq),
            hotSpot: V(function(b, c) {
                b.setAttribute("x", c.x);
                b.setAttribute("y", c.y);
                b.setAttribute("xunits", c.qd);
                b.setAttribute("yunits", c.rd)
            }),
            scale: V(Ns)
        }),
        Ys = Gp(Dr, ["color", "scale"]),
        Zs = Gp(Dr, {
            color: V(ys),
            scale: V(Ns)
        }),
        $s = Gp(Dr, ["color", "width"]),
        at = Gp(Dr, {
            color: V(ys),
            width: V(aq)
        }),
        As = Gp(Dr, {
            LinearRing: V(Gs)
        }),
        bt = Gp(Dr, {
            LineString: V(Gs),
            Point: V(Gs),
            Polygon: V(Js)
        }),
        Ds = Gp(Dr, "name open visibility address phoneNumber description styleUrl Style".split(" ")),
        Es = Gp(Dr, {
            MultiGeometry: V(function(b, c, d) {
                b = {
                    node: b
                };
                var e = c.A(),
                    f, g;
                "MultiPoint" == e ? (f = c.fc(), g = ct) : "MultiLineString" == e ? (f = c.Eb(), g = dt) : "MultiPolygon" == e && (f = c.gc(), g = et);
                Np(b, bt, g, f, d)
            }),
            LineString: V(Gs),
            LinearRing: V(Gs),
            Point: V(Gs),
            Polygon: V(Js),
            Style: V(function(b, c, d) {
                b = {
                    node: b
                };
                var e = {},
                    f = c.e,
                    g = c.b,
                    h = c.i;
                c = c.c;
                null === h || (e.IconStyle = h);
                null === c || (e.LabelStyle = c);
                null === g || (e.LineStyle = g);
                null === f || (e.PolyStyle =
                    f);
                c = ft[d[d.length - 1].node.namespaceURI];
                e = Lp(e, c);
                Np(b, gt, Kp, e, d, c)
            }),
            address: V($p),
            description: V($p),
            name: V($p),
            open: V(Zp),
            phoneNumber: V($p),
            styleUrl: V($p),
            visibility: V(Zp)
        }),
        Hs = Gp(Dr, {
            coordinates: V(function(b, c, d) {
                d = d[d.length - 1];
                var e = d.layout;
                d = d.stride;
                var f;
                "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
                var g, h = c.length,
                    k = "";
                if (0 < h) {
                    k += c[0];
                    for (e = 1; e < f; ++e) k += "," + c[e];
                    for (g = d; g < h; g += d)
                        for (k += " " + c[g], e = 1; e < f; ++e) k += "," + c[g + e]
                }
                $p(b, k)
            })
        }),
        Ks = Gp(Dr, {
            outerBoundaryIs: V(zs),
            innerBoundaryIs: V(zs)
        }),
        ht = Gp(Dr, {
            color: V(ys)
        }),
        ft = Gp(Dr, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
        gt = Gp(Dr, {
            IconStyle: V(function(b, c, d) {
                b = {
                    node: b
                };
                var e = {},
                    f = c.cb(),
                    g = c.Xc(),
                    h = {
                        href: c.a.i
                    };
                if (null !== f) {
                    h.w = f[0];
                    h.h = f[1];
                    var k = c.Bb(),
                        n = c.Jb();
                    null !== n && null !== g && 0 !== n[0] && n[1] !== f[1] && (h.x = n[0], h.y = g[1] - (n[1] + f[1]));
                    null === k || 0 === k[0] || k[1] === f[1] || (e.hotSpot = {
                        x: k[0],
                        qd: "pixels",
                        y: f[1] - k[1],
                        rd: "pixels"
                    })
                }
                e.Icon = h;
                f = c.g;
                1 !== f && (e.scale = f);
                c = c.f;
                0 !== c && (e.heading = c);
                c = Vs[d[d.length - 1].node.namespaceURI];
                e = Lp(e, c);
                Np(b, Xs, Kp, e, d, c)
            }),
            LabelStyle: V(function(b, c, d) {
                b = {
                    node: b
                };
                var e = {},
                    f = c.a;
                null === f || (e.color = f.a);
                c = c.c;
                m(c) && 1 !== c && (e.scale = c);
                c = Ys[d[d.length - 1].node.namespaceURI];
                e = Lp(e, c);
                Np(b, Zs, Kp, e, d, c)
            }),
            LineStyle: V(function(b, c, d) {
                b = {
                    node: b
                };
                var e = $s[d[d.length - 1].node.namespaceURI];
                c = Lp({
                    color: c.a,
                    width: c.c
                }, e);
                Np(b, at, Kp, c, d, e)
            }),
            PolyStyle: V(function(b, c, d) {
                Np({
                    node: b
                }, ht, it, [c.a], d)
            })
        });

    function Ws(b, c, d) {
        return gp(Cr[0], "gx:" + d)
    }

    function Qs(b, c) {
        return gp(c[c.length - 1].node.namespaceURI, "Placemark")
    }

    function Fs(b, c) {
        if (null != b) return gp(c[c.length - 1].node.namespaceURI, Ss[b.A()])
    }
    var it = Ip("color"),
        Is = Ip("coordinates"),
        Ls = Ip("innerBoundaryIs"),
        ct = Ip("Point"),
        dt = Ip("LineString"),
        Bs = Ip("LinearRing"),
        et = Ip("Polygon"),
        Ms = Ip("outerBoundaryIs");
    Ar.prototype.a = function(b, c) {
        c = Jo(this, c);
        var d = gp(Dr[4], "kml");
        Ap(d, "http://www.w3.org/2000/xmlns/", "xmlns:gx", Cr[0]);
        Ap(d, "http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        Ap(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var e = {
                node: d
            },
            f = {};
        1 < b.length ? f.Document = b : 1 == b.length && (f.Placemark = b[0]);
        var g = Os[d.namespaceURI],
            f = Lp(f, g);
        Np(e, Rs, Kp, f, [c], g);
        return d
    };

    function jt() {
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee("EPSG:4326")
    }
    A(jt, Op);

    function kt(b, c) {
        c[c.length - 1].Ob[b.getAttribute("k")] = b.getAttribute("v")
    }
    var lt = [null],
        mt = U(lt, {
            nd: function(b, c) {
                c[c.length - 1].pb.push(b.getAttribute("ref"))
            },
            tag: kt
        }),
        ot = U(lt, {
            node: function(b, c) {
                var d = c[0],
                    e = c[c.length - 1],
                    f = b.getAttribute("id"),
                    g = [parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat"))];
                e.Wd[f] = g;
                var h = W({
                    Ob: {}
                }, nt, b, c);
                rb(h.Ob) || (g = new G(g), Ko(g, !1, d), d = new R(g), d.e(f), d.U(h.Ob), e.features.push(d))
            },
            way: function(b, c) {
                for (var d = c[0], e = b.getAttribute("id"), f = W({
                        pb: [],
                        Ob: {}
                    }, mt, b, c), g = c[c.length - 1], h = [], k = 0, n = f.pb.length; k < n; k++) Ya(h, g.Wd[f.pb[k]]);
                f.pb[0] == f.pb[f.pb.length - 1] ? (k = new I(null), nk(k, "XY", h, [h.length])) : (k = new M(null), jm(k, "XY", h));
                Ko(k, !1, d);
                d = new R(k);
                d.e(e);
                d.U(f.Ob);
                g.features.push(d)
            }
        }),
        nt = U(lt, {
            tag: kt
        });
    jt.prototype.Oa = function(b, c) {
        var d = Io(this, b, c);
        return "osm" == b.localName && (d = W({
            Wd: {},
            features: []
        }, ot, b, [d]), m(d.features)) ? d.features : []
    };

    function pt(b) {
        return b.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };

    function qt() {}
    qt.prototype.b = function(b) {
        return op(b) ? this.c(b) : rp(b) ? this.a(b) : ma(b) ? (b = Bp(b), this.c(b)) : null
    };

    function rt() {}
    A(rt, qt);
    rt.prototype.c = function(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)
            if (1 == b.nodeType) return this.a(b);
        return null
    };
    rt.prototype.a = function(b) {
        b = W({}, st, b, []);
        return m(b) ? b : null
    };
    var tt = [null, "http://www.opengis.net/ows/1.1"],
        st = U(tt, {
            ServiceIdentification: S(function(b, c) {
                return W({}, ut, b, c)
            }),
            ServiceProvider: S(function(b, c) {
                return W({}, vt, b, c)
            }),
            OperationsMetadata: S(function(b, c) {
                return W({}, wt, b, c)
            })
        }),
        xt = U(tt, {
            DeliveryPoint: S(X),
            City: S(X),
            AdministrativeArea: S(X),
            PostalCode: S(X),
            Country: S(X),
            ElectronicMailAddress: S(X)
        }),
        yt = U(tt, {
            Value: Fp(function(b) {
                return X(b)
            })
        }),
        zt = U(tt, {
            AllowedValues: S(function(b, c) {
                return W({}, yt, b, c)
            })
        }),
        Bt = U(tt, {
            Phone: S(function(b, c) {
                return W({},
                    At, b, c)
            }),
            Address: S(function(b, c) {
                return W({}, xt, b, c)
            })
        }),
        Dt = U(tt, {
            HTTP: S(function(b, c) {
                return W({}, Ct, b, c)
            })
        }),
        Ct = U(tt, {
            Get: Fp(function(b, c) {
                var d = pt(b);
                return m(d) ? W({
                    href: d
                }, Et, b, c) : void 0
            }),
            Post: void 0
        }),
        Ft = U(tt, {
            DCP: S(function(b, c) {
                return W({}, Dt, b, c)
            })
        }),
        wt = U(tt, {
            Operation: function(b, c) {
                var d = b.getAttribute("name"),
                    e = W({}, Ft, b, c);
                m(e) && (c[c.length - 1][d] = e)
            }
        }),
        At = U(tt, {
            Voice: S(X),
            Facsimile: S(X)
        }),
        Et = U(tt, {
            Constraint: Fp(function(b, c) {
                var d = b.getAttribute("name");
                return m(d) ? W({
                        name: d
                    }, zt, b, c) :
                    void 0
            })
        }),
        Gt = U(tt, {
            IndividualName: S(X),
            PositionName: S(X),
            ContactInfo: S(function(b, c) {
                return W({}, Bt, b, c)
            })
        }),
        ut = U(tt, {
            Title: S(X),
            ServiceTypeVersion: S(X),
            ServiceType: S(X)
        }),
        vt = U(tt, {
            ProviderName: S(X),
            ProviderSite: S(pt),
            ServiceContact: S(function(b, c) {
                return W({}, Gt, b, c)
            })
        });

    function Ht(b, c, d, e) {
        var f;
        m(e) ? f = m(void 0) ? void 0 : 0 : (e = [], f = 0);
        var g, h;
        for (g = 0; g < c;)
            for (h = b[g++], e[f++] = b[g++], e[f++] = h, h = 2; h < d; ++h) e[f++] = b[g++];
        e.length = f
    };

    function It(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee("EPSG:4326");
        this.a = m(b.factor) ? b.factor : 1E5;
        this.c = m(b.geometryLayout) ? b.geometryLayout : "XY"
    }
    A(It, Vq);

    function Jt(b, c, d) {
        d = m(d) ? d : 1E5;
        var e, f = Array(c);
        for (e = 0; e < c; ++e) f[e] = 0;
        var g, h;
        g = 0;
        for (h = b.length; g < h;)
            for (e = 0; e < c; ++e, ++g) {
                var k = b[g],
                    n = k - f[e];
                f[e] = k;
                b[g] = n
            }
        return Kt(b, d)
    }

    function Lt(b, c, d) {
        var e = m(d) ? d : 1E5,
            f = Array(c);
        for (d = 0; d < c; ++d) f[d] = 0;
        b = Mt(b, e);
        var g, e = 0;
        for (g = b.length; e < g;)
            for (d = 0; d < c; ++d, ++e) f[d] += b[e], b[e] = f[d];
        return b
    }

    function Kt(b, c) {
        var d = m(c) ? c : 1E5,
            e, f;
        e = 0;
        for (f = b.length; e < f; ++e) b[e] = Math.round(b[e] * d);
        d = 0;
        for (e = b.length; d < e; ++d) f = b[d], b[d] = 0 > f ? ~(f << 1) : f << 1;
        d = "";
        e = 0;
        for (f = b.length; e < f; ++e) {
            for (var g = b[e], h = void 0, k = ""; 32 <= g;) h = (32 | g & 31) + 63, k += String.fromCharCode(h), g >>= 5;
            h = g + 63;
            k += String.fromCharCode(h);
            d += k
        }
        return d
    }

    function Mt(b, c) {
        var d = m(c) ? c : 1E5,
            e = [],
            f = 0,
            g = 0,
            h, k;
        h = 0;
        for (k = b.length; h < k; ++h) {
            var n = b.charCodeAt(h) - 63,
                f = f | (n & 31) << g;
            32 > n ? (e.push(f), g = f = 0) : g += 5
        }
        f = 0;
        for (g = e.length; f < g; ++f) h = e[f], e[f] = h & 1 ? ~(h >> 1) : h >> 1;
        f = 0;
        for (g = e.length; f < g; ++f) e[f] /= d;
        return e
    }
    l = It.prototype;
    l.Kb = function(b, c) {
        var d = this.Mb(b, c);
        return new R(d)
    };
    l.jd = function(b, c) {
        return [this.Kb(b, c)]
    };
    l.Mb = function(b, c) {
        var d = Gj(this.c),
            e = Lt(b, d, this.a);
        Ht(e, e.length, d, e);
        d = Uj(e, 0, e.length, d);
        return Ko(new M(d, this.c), !1, Jo(this, c))
    };
    l.Hc = function(b, c) {
        var d = b.G();
        return null != d ? this.Rb(d, c) : ""
    };
    l.Pe = function(b, c) {
        return this.Hc(b[0], c)
    };
    l.Rb = function(b, c) {
        b = Ko(b, !0, Jo(this, c));
        var d = b.j,
            e = b.a;
        Ht(d, d.length, e, d);
        return Jt(d, e, this.a)
    };

    function Nt(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = ee(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326")
    }
    A(Nt, So);

    function Ot(b, c) {
        var d = [],
            e, f, g, h;
        g = 0;
        for (h = b.length; g < h; ++g) e = b[g], 0 < g && d.pop(), 0 <= e ? f = c[e] : f = c[~e].slice().reverse(), d.push.apply(d, f);
        e = 0;
        for (f = d.length; e < f; ++e) d[e] = d[e].slice();
        return d
    }

    function Pt(b, c, d, e, f) {
        b = b.geometries;
        var g = [],
            h, k;
        h = 0;
        for (k = b.length; h < k; ++h) g[h] = Qt(b[h], c, d, e, f);
        return g
    }

    function Qt(b, c, d, e, f) {
        var g = b.type,
            h = Rt[g];
        c = "Point" === g || "MultiPoint" === g ? h(b, d, e) : h(b, c);
        d = new R;
        d.la(Ko(c, !1, f));
        m(b.id) && d.e(b.id);
        m(b.properties) && d.U(b.properties);
        return d
    }
    Nt.prototype.b = function(b, c) {
        if ("Topology" == b.type) {
            var d, e = null,
                f = null;
            m(b.transform) && (d = b.transform, e = d.scale, f = d.translate);
            var g = b.arcs;
            if (m(d)) {
                d = e;
                var h = f,
                    k, n;
                k = 0;
                for (n = g.length; k < n; ++k)
                    for (var p = g[k], q = d, r = h, s = 0, t = 0, x = void 0, y = void 0, z = void 0, y = 0, z = p.length; y < z; ++y) x = p[y], s += x[0], t += x[1], x[0] = s, x[1] = t, St(x, q, r)
            }
            d = [];
            h = mb(b.objects);
            k = 0;
            for (n = h.length; k < n; ++k) "GeometryCollection" === h[k].type ? (p = h[k], d.push.apply(d, Pt(p, g, e, f, c))) : (p = h[k], d.push(Qt(p, g, e, f, c)));
            return d
        }
        return []
    };

    function St(b, c, d) {
        b[0] = b[0] * c[0] + d[0];
        b[1] = b[1] * c[1] + d[1]
    }
    Nt.prototype.na = function() {
        return this.defaultDataProjection
    };
    var Rt = {
        Point: function(b, c, d) {
            b = b.coordinates;
            null === c || null === d || St(b, c, d);
            return new G(b)
        },
        LineString: function(b, c) {
            var d = Ot(b.arcs, c);
            return new M(d)
        },
        Polygon: function(b, c) {
            var d = [],
                e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e) d[e] = Ot(b.arcs[e], c);
            return new I(d)
        },
        MultiPoint: function(b, c, d) {
            b = b.coordinates;
            var e, f;
            if (null !== c && null !== d)
                for (e = 0, f = b.length; e < f; ++e) St(b[e], c, d);
            return new O(b)
        },
        MultiLineString: function(b, c) {
            var d = [],
                e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e) d[e] = Ot(b.arcs[e], c);
            return new N(d)
        },
        MultiPolygon: function(b, c) {
            var d = [],
                e, f, g, h, k, n;
            k = 0;
            for (n = b.arcs.length; k < n; ++k) {
                e = b.arcs[k];
                f = [];
                g = 0;
                for (h = e.length; g < h; ++g) f[g] = Ot(e[g], c);
                d[k] = f
            }
            return new P(d)
        }
    };

    function Tt(b) {
        b = m(b) ? b : {};
        this.e = b.featureType;
        this.b = b.featureNS;
        this.c = m(b.gmlFormat) ? b.gmlFormat : new Y;
        this.d = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        this.defaultDataProjection = null
    }
    A(Tt, Op);
    Tt.prototype.Oa = function(b, c) {
        var d = {
            featureType: this.e,
            featureNS: this.b
        };
        yb(d, Io(this, b, m(c) ? c : {}));
        d = [d];
        this.c.c["http://www.opengis.net/gml"].featureMember = Dp(Rp.prototype.vc);
        d = W([], this.c.c, b, d, this.c);
        m(d) || (d = []);
        return d
    };
    Tt.prototype.f = function(b) {
        if (op(b)) return Ut(b);
        if (rp(b)) return W({}, Vt, b, []);
        if (ma(b)) return b = Bp(b), Ut(b)
    };
    Tt.prototype.i = function(b) {
        if (op(b)) return Wt(this, b);
        if (rp(b)) return Xt(this, b);
        if (ma(b)) return b = Bp(b), Wt(this, b)
    };

    function Wt(b, c) {
        for (var d = c.firstChild; null !== d; d = d.nextSibling)
            if (1 == d.nodeType) return Xt(b, d)
    }
    var Yt = {
        "http://www.opengis.net/gml": {
            boundedBy: S(Rp.prototype.xc, "bounds")
        }
    };

    function Xt(b, c) {
        var d = {},
            e = Yp(c.getAttribute("numberOfFeatures"));
        d.numberOfFeatures = e;
        return W(d, Yt, c, [], b.c)
    }
    var Zt = {
            "http://www.opengis.net/wfs": {
                totalInserted: S(Xp),
                totalUpdated: S(Xp),
                totalDeleted: S(Xp)
            }
        },
        $t = {
            "http://www.opengis.net/ogc": {
                FeatureId: Dp(function(b) {
                    return b.getAttribute("fid")
                })
            }
        },
        au = {
            "http://www.opengis.net/wfs": {
                Feature: function(b, c) {
                    Mp($t, b, c)
                }
            }
        },
        Vt = {
            "http://www.opengis.net/wfs": {
                TransactionSummary: S(function(b, c) {
                    return W({}, Zt, b, c)
                }, "transactionSummary"),
                InsertResults: S(function(b, c) {
                    return W([], au, b, c)
                }, "insertIds")
            }
        };

    function Ut(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)
            if (1 == b.nodeType) return W({}, Vt, b, [])
    }
    var bu = {
        "http://www.opengis.net/wfs": {
            PropertyName: V($p)
        }
    };

    function cu(b, c) {
        var d = gp("http://www.opengis.net/ogc", "Filter"),
            e = gp("http://www.opengis.net/ogc", "FeatureId");
        d.appendChild(e);
        e.setAttribute("fid", c);
        b.appendChild(d)
    }
    var du = {
            "http://www.opengis.net/wfs": {
                Insert: V(function(b, c, d) {
                    var e = d[d.length - 1],
                        e = gp(e.featureNS, e.featureType);
                    b.appendChild(e);
                    Y.prototype.Oe(e, c, d)
                }),
                Update: V(function(b, c, d) {
                    var e = d[d.length - 1],
                        f = e.featureType,
                        g = e.featurePrefix,
                        g = m(g) ? g : "feature",
                        h = e.featureNS;
                    b.setAttribute("typeName", g + ":" + f);
                    Ap(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
                    f = c.a;
                    if (m(f)) {
                        for (var g = c.ca(), h = [], k = 0, n = g.length; k < n; k++) {
                            var p = c.get(g[k]);
                            m(p) && h.push({
                                name: g[k],
                                value: p
                            })
                        }
                        Np({
                                node: b,
                                srsName: e.srsName
                            }, du, Ip("Property"),
                            h, d);
                        cu(b, f)
                    }
                }),
                Delete: V(function(b, c, d) {
                    var e = d[d.length - 1];
                    d = e.featureType;
                    var f = e.featurePrefix,
                        f = m(f) ? f : "feature",
                        e = e.featureNS;
                    b.setAttribute("typeName", f + ":" + d);
                    Ap(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
                    c = c.a;
                    m(c) && cu(b, c)
                }),
                Property: V(function(b, c, d) {
                    var e = gp("http://www.opengis.net/wfs", "Name");
                    b.appendChild(e);
                    $p(e, c.name);
                    null != c.value && (e = gp("http://www.opengis.net/wfs", "Value"), b.appendChild(e), c.value instanceof Ej ? Y.prototype.Ic(e, c.value, d) : $p(e, c.value))
                }),
                Native: V(function(b,
                    c) {
                    m(c.Fi) && b.setAttribute("vendorId", c.Fi);
                    m(c.qi) && b.setAttribute("safeToIgnore", c.qi);
                    m(c.value) && $p(b, c.value)
                })
            }
        },
        eu = {
            "http://www.opengis.net/wfs": {
                Query: V(function(b, c, d) {
                    var e = d[d.length - 1],
                        f = e.featurePrefix,
                        g = e.featureNS,
                        h = e.propertyNames,
                        k = e.srsName;
                    b.setAttribute("typeName", (m(f) ? f + ":" : "") + c);
                    m(k) && b.setAttribute("srsName", k);
                    m(g) && Ap(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                    c = wb(e);
                    c.node = b;
                    Np(c, bu, Ip("PropertyName"), h, d);
                    e = e.bbox;
                    m(e) && (h = gp("http://www.opengis.net/ogc", "Filter"),
                        c = d[d.length - 1].geometryName, f = gp("http://www.opengis.net/ogc", "BBOX"), h.appendChild(f), g = gp("http://www.opengis.net/ogc", "PropertyName"), $p(g, c), f.appendChild(g), Y.prototype.Ic(f, e, d), b.appendChild(h))
                })
            }
        };
    Tt.prototype.g = function(b) {
        var c = gp("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        m(b) && (m(b.handle) && c.setAttribute("handle", b.handle), m(b.outputFormat) && c.setAttribute("outputFormat", b.outputFormat), m(b.maxFeatures) && c.setAttribute("maxFeatures", b.maxFeatures), m(b.resultType) && c.setAttribute("resultType", b.resultType), m(b.xi) && c.setAttribute("startIndex", b.xi), m(b.count) && c.setAttribute("count", b.count));
        Ap(c, "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:schemaLocation", this.d);
        var d = b.featureTypes;
        b = [{
            node: c,
            srsName: b.srsName,
            featureNS: m(b.featureNS) ? b.featureNS : this.b,
            featurePrefix: b.featurePrefix,
            geometryName: b.geometryName,
            bbox: b.bbox,
            pe: m(b.pe) ? b.pe : []
        }];
        var e = wb(b[b.length - 1]);
        e.node = c;
        Np(e, eu, Ip("Query"), d, b);
        return c
    };
    Tt.prototype.D = function(b, c, d, e) {
        var f = [],
            g = gp("http://www.opengis.net/wfs", "Transaction");
        g.setAttribute("service", "WFS");
        g.setAttribute("version", "1.1.0");
        var h, k;
        m(e) && (h = m(e.gmlOptions) ? e.gmlOptions : {}, m(e.handle) && g.setAttribute("handle", e.handle));
        Ap(g, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.d);
        null != b && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, yb(k, h), Np(k, du, Ip("Insert"), b, f));
        null != c && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, yb(k, h), Np(k, du, Ip("Update"), c, f));
        null != d && Np({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, du, Ip("Delete"), d, f);
        m(e.nativeElements) && Np({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, du, Ip("Native"), e.nativeElements, f);
        return g
    };
    Tt.prototype.md = function(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)
            if (1 == b.nodeType) return this.Ac(b);
        return null
    };
    Tt.prototype.Ac = function(b) {
        if (null != b.firstElementChild && null != b.firstElementChild.firstElementChild)
            for (b = b.firstElementChild.firstElementChild, b = b.firstElementChild; null !== b; b = b.nextElementSibling)
                if (0 !== b.childNodes.length && (1 !== b.childNodes.length || 3 !== b.firstChild.nodeType)) {
                    var c = [{}];
                    this.c.xc(b, c);
                    return ee(c.pop().srsName)
                }
        return null
    };

    function fu(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = m(b.splitCollection) ? b.splitCollection : !1
    }
    A(fu, Vq);

    function gu(b) {
        b = b.wa();
        return 0 == b.length ? "" : b[0] + " " + b[1]
    }

    function hu(b) {
        b = b.ma();
        for (var c = [], d = 0, e = b.length; d < e; ++d) c.push(b[d][0] + " " + b[d][1]);
        return c.join(",")
    }

    function iu(b) {
        var c = [];
        b = b.ec();
        for (var d = 0, e = b.length; d < e; ++d) c.push("(" + hu(b[d]) + ")");
        return c.join(",")
    }

    function ju(b) {
        var c = b.A();
        b = (0, ku[c])(b);
        c = c.toUpperCase();
        return 0 === b.length ? c + " EMPTY" : c + "(" + b + ")"
    }
    var ku = {
        Point: gu,
        LineString: hu,
        Polygon: iu,
        MultiPoint: function(b) {
            var c = [];
            b = b.fc();
            for (var d = 0, e = b.length; d < e; ++d) c.push("(" + gu(b[d]) + ")");
            return c.join(",")
        },
        MultiLineString: function(b) {
            var c = [];
            b = b.Eb();
            for (var d = 0, e = b.length; d < e; ++d) c.push("(" + hu(b[d]) + ")");
            return c.join(",")
        },
        MultiPolygon: function(b) {
            var c = [];
            b = b.gc();
            for (var d = 0, e = b.length; d < e; ++d) c.push("(" + iu(b[d]) + ")");
            return c.join(",")
        },
        GeometryCollection: function(b) {
            var c = [];
            b = b.Jd();
            for (var d = 0, e = b.length; d < e; ++d) c.push(ju(b[d]));
            return c.join(",")
        }
    };
    l = fu.prototype;
    l.Kb = function(b, c) {
        var d = this.Mb(b, c);
        if (m(d)) {
            var e = new R;
            e.la(d);
            return e
        }
        return null
    };
    l.jd = function(b, c) {
        var d = [],
            e = this.Mb(b, c);
        this.a && "GeometryCollection" == e.A() ? d = e.i : d = [e];
        for (var f = [], g = 0, h = d.length; g < h; ++g) e = new R, e.la(d[g]), f.push(e);
        return f
    };
    l.Mb = function(b, c) {
        var d;
        d = new lu(new mu(b));
        d.a = nu(d.c);
        d = ou(d);
        return m(d) ? Ko(d, !1, c) : null
    };
    l.Hc = function(b, c) {
        var d = b.G();
        return m(d) ? this.Rb(d, c) : ""
    };
    l.Pe = function(b, c) {
        if (1 == b.length) return this.Hc(b[0], c);
        for (var d = [], e = 0, f = b.length; e < f; ++e) d.push(b[e].G());
        d = new cm(d);
        return this.Rb(d, c)
    };
    l.Rb = function(b, c) {
        return ju(Ko(b, !0, c))
    };

    function mu(b) {
        this.c = b;
        this.a = -1
    }

    function pu(b, c) {
        var d = m(c) ? c : !1;
        return "0" <= b && "9" >= b || "." == b && !d
    }

    function nu(b) {
        var c = b.c.charAt(++b.a),
            d = {
                position: b.a,
                value: c
            };
        if ("(" == c) d.type = 2;
        else if ("," == c) d.type = 5;
        else if (")" == c) d.type = 3;
        else if (pu(c) || "-" == c) {
            d.type = 4;
            var e, c = b.a,
                f = !1;
            do "." == e && (f = !0), e = b.c.charAt(++b.a); while (pu(e, f));
            b = parseFloat(b.c.substring(c, b.a--));
            d.value = b
        } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
            d.type = 1;
            c = b.a;
            do e = b.c.charAt(++b.a); while ("a" <= e && "z" >= e || "A" <= e && "Z" >= e);
            b = b.c.substring(c, b.a--).toUpperCase();
            d.value = b
        } else {
            if (" " == c || "\t" == c || "\r" == c || "\n" == c) return nu(b);
            if ("" ===
                c) d.type = 6;
            else throw Error("Unexpected character: " + c);
        }
        return d
    }

    function lu(b) {
        this.c = b
    }
    l = lu.prototype;
    l.match = function(b) {
        if (b = this.a.type == b) this.a = nu(this.c);
        return b
    };

    function ou(b) {
        var c = b.a;
        if (b.match(1)) {
            var d = c.value;
            if ("GEOMETRYCOLLECTION" == d) {
                a: {
                    if (b.match(2)) {
                        c = [];
                        do c.push(ou(b)); while (b.match(5));
                        if (b.match(3)) {
                            b = c;
                            break a
                        }
                    } else if (qu(b)) {
                        b = [];
                        break a
                    }
                    throw Error(ru(b));
                }
                return new cm(b)
            }
            var e = su[d],
                c = tu[d];
            if (!m(e) || !m(c)) throw Error("Invalid geometry type: " + d);
            b = e.call(b);
            return new c(b)
        }
        throw Error(ru(b));
    }
    l.fd = function() {
        if (this.match(2)) {
            var b = uu(this);
            if (this.match(3)) return b
        } else if (qu(this)) return null;
        throw Error(ru(this));
    };
    l.ed = function() {
        if (this.match(2)) {
            var b = vu(this);
            if (this.match(3)) return b
        } else if (qu(this)) return [];
        throw Error(ru(this));
    };
    l.gd = function() {
        if (this.match(2)) {
            var b = wu(this);
            if (this.match(3)) return b
        } else if (qu(this)) return [];
        throw Error(ru(this));
    };
    l.Lh = function() {
        if (this.match(2)) {
            var b;
            if (2 == this.a.type)
                for (b = [this.fd()]; this.match(5);) b.push(this.fd());
            else b = vu(this);
            if (this.match(3)) return b
        } else if (qu(this)) return [];
        throw Error(ru(this));
    };
    l.Kh = function() {
        if (this.match(2)) {
            var b = wu(this);
            if (this.match(3)) return b
        } else if (qu(this)) return [];
        throw Error(ru(this));
    };
    l.Mh = function() {
        if (this.match(2)) {
            for (var b = [this.gd()]; this.match(5);) b.push(this.gd());
            if (this.match(3)) return b
        } else if (qu(this)) return [];
        throw Error(ru(this));
    };

    function uu(b) {
        for (var c = [], d = 0; 2 > d; ++d) {
            var e = b.a;
            if (b.match(4)) c.push(e.value);
            else break
        }
        if (2 == c.length) return c;
        throw Error(ru(b));
    }

    function vu(b) {
        for (var c = [uu(b)]; b.match(5);) c.push(uu(b));
        return c
    }

    function wu(b) {
        for (var c = [b.ed()]; b.match(5);) c.push(b.ed());
        return c
    }

    function qu(b) {
        var c = 1 == b.a.type && "EMPTY" == b.a.value;
        c && (b.a = nu(b.c));
        return c
    }

    function ru(b) {
        return "Unexpected `" + b.a.value + "` at position " + b.a.position + " in `" + b.c.c + "`"
    }
    var tu = {
            POINT: G,
            LINESTRING: M,
            POLYGON: I,
            MULTIPOINT: O,
            MULTILINESTRING: N,
            MULTIPOLYGON: P
        },
        su = {
            POINT: lu.prototype.fd,
            LINESTRING: lu.prototype.ed,
            POLYGON: lu.prototype.gd,
            MULTIPOINT: lu.prototype.Lh,
            MULTILINESTRING: lu.prototype.Kh,
            MULTIPOLYGON: lu.prototype.Mh
        };

    function xu() {
        this.version = void 0
    }
    A(xu, qt);
    xu.prototype.c = function(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)
            if (1 == b.nodeType) return this.a(b);
        return null
    };
    xu.prototype.a = function(b) {
        this.version = za(b.getAttribute("version"));
        b = W({
            version: this.version
        }, yu, b, []);
        return m(b) ? b : null
    };

    function zu(b, c) {
        return W({}, Au, b, c)
    }

    function Bu(b, c) {
        return W({}, Cu, b, c)
    }

    function Du(b, c) {
        var d = zu(b, c);
        if (m(d)) {
            var e = [Yp(b.getAttribute("width")), Yp(b.getAttribute("height"))];
            d.size = e;
            return d
        }
    }

    function Eu(b, c) {
        return W([], Fu, b, c)
    }
    var Gu = [null, "http://www.opengis.net/wms"],
        yu = U(Gu, {
            Service: S(function(b, c) {
                return W({}, Hu, b, c)
            }),
            Capability: S(function(b, c) {
                return W({}, Iu, b, c)
            })
        }),
        Iu = U(Gu, {
            Request: S(function(b, c) {
                return W({}, Ju, b, c)
            }),
            Exception: S(function(b, c) {
                return W([], Ku, b, c)
            }),
            Layer: S(function(b, c) {
                return W({}, Lu, b, c)
            })
        }),
        Hu = U(Gu, {
            Name: S(X),
            Title: S(X),
            Abstract: S(X),
            KeywordList: S(Eu),
            OnlineResource: S(pt),
            ContactInformation: S(function(b, c) {
                return W({}, Mu, b, c)
            }),
            Fees: S(X),
            AccessConstraints: S(X),
            LayerLimit: S(Xp),
            MaxWidth: S(Xp),
            MaxHeight: S(Xp)
        }),
        Mu = U(Gu, {
            ContactPersonPrimary: S(function(b, c) {
                return W({}, Nu, b, c)
            }),
            ContactPosition: S(X),
            ContactAddress: S(function(b, c) {
                return W({}, Ou, b, c)
            }),
            ContactVoiceTelephone: S(X),
            ContactFacsimileTelephone: S(X),
            ContactElectronicMailAddress: S(X)
        }),
        Nu = U(Gu, {
            ContactPerson: S(X),
            ContactOrganization: S(X)
        }),
        Ou = U(Gu, {
            AddressType: S(X),
            Address: S(X),
            City: S(X),
            StateOrProvince: S(X),
            PostCode: S(X),
            Country: S(X)
        }),
        Ku = U(Gu, {
            Format: Dp(X)
        }),
        Lu = U(Gu, {
            Name: S(X),
            Title: S(X),
            Abstract: S(X),
            KeywordList: S(Eu),
            CRS: Fp(X),
            EX_GeographicBoundingBox: S(function(b, c) {
                var d = W({}, Pu, b, c);
                if (m(d)) {
                    var e = d.westBoundLongitude,
                        f = d.southBoundLatitude,
                        g = d.eastBoundLongitude,
                        d = d.northBoundLatitude;
                    return m(e) && m(f) && m(g) && m(d) ? [e, f, g, d] : void 0
                }
            }),
            BoundingBox: Fp(function(b) {
                var c = [Wp(b.getAttribute("minx")), Wp(b.getAttribute("miny")), Wp(b.getAttribute("maxx")), Wp(b.getAttribute("maxy"))],
                    d = [Wp(b.getAttribute("resx")), Wp(b.getAttribute("resy"))];
                return {
                    crs: b.getAttribute("CRS"),
                    extent: c,
                    res: d
                }
            }),
            Dimension: Fp(function(b) {
                return {
                    name: b.getAttribute("name"),
                    units: b.getAttribute("units"),
                    unitSymbol: b.getAttribute("unitSymbol"),
                    "default": b.getAttribute("default"),
                    multipleValues: Tp(b.getAttribute("multipleValues")),
                    nearestValue: Tp(b.getAttribute("nearestValue")),
                    current: Tp(b.getAttribute("current")),
                    values: X(b)
                }
            }),
            Attribution: S(function(b, c) {
                return W({}, Qu, b, c)
            }),
            AuthorityURL: Fp(function(b, c) {
                var d = zu(b, c);
                if (m(d)) return d.name = b.getAttribute("name"), d
            }),
            Identifier: Fp(X),
            MetadataURL: Fp(function(b, c) {
                var d = zu(b, c);
                if (m(d)) return d.type = b.getAttribute("type"),
                    d
            }),
            DataURL: Fp(zu),
            FeatureListURL: Fp(zu),
            Style: Fp(function(b, c) {
                return W({}, Ru, b, c)
            }),
            MinScaleDenominator: S(Vp),
            MaxScaleDenominator: S(Vp),
            Layer: Fp(function(b, c) {
                var d = c[c.length - 1],
                    e = W({}, Lu, b, c);
                if (m(e)) {
                    var f = Tp(b.getAttribute("queryable"));
                    m(f) || (f = d.queryable);
                    e.queryable = m(f) ? f : !1;
                    f = Yp(b.getAttribute("cascaded"));
                    m(f) || (f = d.cascaded);
                    e.cascaded = f;
                    f = Tp(b.getAttribute("opaque"));
                    m(f) || (f = d.opaque);
                    e.opaque = m(f) ? f : !1;
                    f = Tp(b.getAttribute("noSubsets"));
                    m(f) || (f = d.noSubsets);
                    e.noSubsets = m(f) ? f : !1;
                    f = Wp(b.getAttribute("fixedWidth"));
                    m(f) || (f = d.fixedWidth);
                    e.fixedWidth = f;
                    f = Wp(b.getAttribute("fixedHeight"));
                    m(f) || (f = d.fixedHeight);
                    e.fixedHeight = f;
                    Oa(["Style", "CRS", "AuthorityURL"], function(b) {
                        var c = d[b];
                        if (m(c)) {
                            var f = vb(e, b),
                                f = f.concat(c);
                            e[b] = f
                        }
                    });
                    Oa("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "), function(b) {
                        m(e[b]) || (e[b] = d[b])
                    });
                    return e
                }
            })
        }),
        Qu = U(Gu, {
            Title: S(X),
            OnlineResource: S(pt),
            LogoURL: S(Du)
        }),
        Pu = U(Gu, {
            westBoundLongitude: S(Vp),
            eastBoundLongitude: S(Vp),
            southBoundLatitude: S(Vp),
            northBoundLatitude: S(Vp)
        }),
        Ju = U(Gu, {
            GetCapabilities: S(Bu),
            GetMap: S(Bu),
            GetFeatureInfo: S(Bu)
        }),
        Cu = U(Gu, {
            Format: Fp(X),
            DCPType: Fp(function(b, c) {
                return W({}, Su, b, c)
            })
        }),
        Su = U(Gu, {
            HTTP: S(function(b, c) {
                return W({}, Tu, b, c)
            })
        }),
        Tu = U(Gu, {
            Get: S(zu),
            Post: S(zu)
        }),
        Ru = U(Gu, {
            Name: S(X),
            Title: S(X),
            Abstract: S(X),
            LegendURL: Fp(Du),
            StyleSheetURL: S(zu),
            StyleURL: S(zu)
        }),
        Au = U(Gu, {
            Format: S(X),
            OnlineResource: S(pt)
        }),
        Fu = U(Gu, {
            Keyword: Dp(X)
        });

    function Uu() {
        this.b = "http://mapserver.gis.umn.edu/mapserver";
        this.c = new kq;
        this.defaultDataProjection = null
    }
    A(Uu, Op);

    function Vu(b, c, d) {
        c.namespaceURI = b.b;
        var e = lp(c),
            f = [];
        if (0 === c.childNodes.length) return f;
        "msGMLOutput" == e && Oa(c.childNodes, function(b) {
            if (1 === b.nodeType) {
                var c = d[0],
                    e = b.localName,
                    n = RegExp,
                    p;
                p = "_layer".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
                n = new n(p, "");
                e = e.replace(n, "") + "_feature";
                c.featureType = e;
                c.featureNS = this.b;
                n = {};
                n[e] = Dp(this.c.hd, this.c);
                c = U([c.featureNS, null], n);
                b.namespaceURI = this.b;
                b = W([], c, b, d, this.c);
                m(b) && Ya(f, b)
            }
        }, b);
        "FeatureCollection" == e && (b = W([],
            b.c.c, c, [{}], b.c), m(b) && (f = b));
        return f
    }
    Uu.prototype.Oa = function(b, c) {
        var d = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        m(c) && yb(d, Io(this, b, c));
        return Vu(this, b, [d])
    };

    function Wu() {
        this.d = new rt
    }
    A(Wu, qt);
    Wu.prototype.c = function(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)
            if (1 == b.nodeType) return this.a(b);
        return null
    };
    Wu.prototype.a = function(b) {
        this.version = za(b.getAttribute("version"));
        var c = this.d.a(b);
        if (!m(c)) return null;
        c.version = this.version;
        c = W(c, Xu, b, []);
        return m(c) ? c : null
    };

    function Yu(b) {
        var c = X(b).split(" ");
        if (m(c) && 2 == c.length) return b = +c[0], c = +c[1], isNaN(b) || isNaN(c) ? void 0 : [b, c]
    }
    var Zu = [null, "http://www.opengis.net/wmts/1.0"],
        $u = [null, "http://www.opengis.net/ows/1.1"],
        Xu = U(Zu, {
            Contents: S(function(b, c) {
                return W({}, av, b, c)
            })
        }),
        av = U(Zu, {
            Layer: Fp(function(b, c) {
                return W({}, bv, b, c)
            }),
            TileMatrixSet: Fp(function(b, c) {
                return W({}, cv, b, c)
            })
        }),
        bv = U(Zu, {
            Style: Fp(function(b, c) {
                var d = W({}, dv, b, c);
                if (m(d)) {
                    var e = "true" === b.getAttribute("isDefault");
                    d.isDefault = e;
                    return d
                }
            }),
            Format: Fp(X),
            TileMatrixSetLink: Fp(function(b, c) {
                return W({}, ev, b, c)
            }),
            ResourceURL: Fp(function(b) {
                var c = b.getAttribute("format"),
                    d = b.getAttribute("template");
                b = b.getAttribute("resourceType");
                var e = {};
                m(c) && (e.format = c);
                m(d) && (e.template = d);
                m(b) && (e.resourceType = b);
                return e
            })
        }, U($u, {
            Title: S(X),
            Abstract: S(X),
            WGS84BoundingBox: S(function(b, c) {
                var d = W([], fv, b, c);
                if (2 != d.length) d = void 0;
                else {
                    for (var e = Kd(), f = 0, g = d.length; f < g; ++f) Nd(e, d[f]);
                    d = e
                }
                return d
            }),
            Identifier: S(X)
        })),
        dv = U(Zu, {
            LegendURL: Fp(function(b) {
                var c = {};
                c.format = b.getAttribute("format");
                c.href = pt(b);
                return c
            })
        }, U($u, {
            Title: S(X),
            Identifier: S(X)
        })),
        ev = U(Zu, {
            TileMatrixSet: S(X)
        }),
        fv = U($u, {
            LowerCorner: Dp(Yu),
            UpperCorner: Dp(Yu)
        }),
        cv = U(Zu, {
            WellKnownScaleSet: S(X),
            TileMatrix: Fp(function(b, c) {
                return W({}, gv, b, c)
            })
        }, U($u, {
            SupportedCRS: S(X),
            Identifier: S(X)
        })),
        gv = U(Zu, {
            TopLeftCorner: S(Yu),
            ScaleDenominator: S(Vp),
            TileWidth: S(Xp),
            TileHeight: S(Xp),
            MatrixWidth: S(Xp),
            MatrixHeight: S(Xp)
        }, U($u, {
            Identifier: S(X)
        }));
    var hv = new Yd(6378137);

    function Z(b) {
        hd.call(this);
        b = m(b) ? b : {};
        this.a = null;
        this.e = we;
        this.d = void 0;
        C(this, ld("projection"), this.lh, !1, this);
        C(this, ld("tracking"), this.Hg, !1, this);
        m(b.projection) && this.l(ee(b.projection));
        m(b.trackingOptions) && this.p(b.trackingOptions);
        this.b(m(b.tracking) ? b.tracking : !1)
    }
    A(Z, hd);
    l = Z.prototype;
    l.B = function() {
        this.b(!1);
        Z.H.B.call(this)
    };
    l.lh = function() {
        var b = this.k();
        null != b && (this.e = ie(ee("EPSG:4326"), b), null === this.a || this.set("position", this.e(this.a)))
    };
    l.Hg = function() {
        if (zf) {
            var b = this.f();
            b && !m(this.d) ? this.d = ca.navigator.geolocation.watchPosition(ua(this.Th, this), ua(this.Uh, this), this.g()) : !b && m(this.d) && (ca.navigator.geolocation.clearWatch(this.d), this.d = void 0)
        }
    };
    l.Th = function(b) {
        b = b.coords;
        this.set("accuracy", b.accuracy);
        this.set("altitude", null === b.altitude ? void 0 : b.altitude);
        this.set("altitudeAccuracy", null === b.altitudeAccuracy ? void 0 : b.altitudeAccuracy);
        this.set("heading", null === b.heading ? void 0 : Sb(b.heading));
        null === this.a ? this.a = [b.longitude, b.latitude] : (this.a[0] = b.longitude, this.a[1] = b.latitude);
        var c = this.e(this.a);
        this.set("position", c);
        this.set("speed", null === b.speed ? void 0 : b.speed);
        b = qk(hv, this.a, b.accuracy);
        b.W(this.e);
        this.set("accuracyGeometry",
            b);
        this.r()
    };
    l.Uh = function(b) {
        b.type = "error";
        this.b(!1);
        this.dispatchEvent(b)
    };
    l.Id = function() {
        return this.get("accuracy")
    };
    Z.prototype.getAccuracy = Z.prototype.Id;
    Z.prototype.n = function() {
        return this.get("accuracyGeometry") || null
    };
    Z.prototype.getAccuracyGeometry = Z.prototype.n;
    Z.prototype.o = function() {
        return this.get("altitude")
    };
    Z.prototype.getAltitude = Z.prototype.o;
    Z.prototype.s = function() {
        return this.get("altitudeAccuracy")
    };
    Z.prototype.getAltitudeAccuracy = Z.prototype.s;
    Z.prototype.t = function() {
        return this.get("heading")
    };
    Z.prototype.getHeading = Z.prototype.t;
    Z.prototype.v = function() {
        return this.get("position")
    };
    Z.prototype.getPosition = Z.prototype.v;
    Z.prototype.k = function() {
        return this.get("projection")
    };
    Z.prototype.getProjection = Z.prototype.k;
    Z.prototype.u = function() {
        return this.get("speed")
    };
    Z.prototype.getSpeed = Z.prototype.u;
    Z.prototype.f = function() {
        return this.get("tracking")
    };
    Z.prototype.getTracking = Z.prototype.f;
    Z.prototype.g = function() {
        return this.get("trackingOptions")
    };
    Z.prototype.getTrackingOptions = Z.prototype.g;
    Z.prototype.l = function(b) {
        this.set("projection", b)
    };
    Z.prototype.setProjection = Z.prototype.l;
    Z.prototype.b = function(b) {
        this.set("tracking", b)
    };
    Z.prototype.setTracking = Z.prototype.b;
    Z.prototype.p = function(b) {
        this.set("trackingOptions", b)
    };
    Z.prototype.setTrackingOptions = Z.prototype.p;

    function iv(b, c, d, e, f, g, h) {
        Ai.call(this, b, c, d, 0, e);
        this.f = f;
        this.a = new Image;
        null !== g && (this.a.crossOrigin = g);
        this.b = {};
        this.c = null;
        this.state = 0;
        this.i = h
    }
    A(iv, Ai);

    function ym(b, c) {
        if (m(c)) {
            var d, e = v(c);
            if (e in b.b) return b.b[e];
            d = rb(b.b) ? b.a : b.a.cloneNode(!1);
            return b.b[e] = d
        }
        return b.a
    }
    iv.prototype.g = function() {
        this.state = 3;
        Oa(this.c, Pc);
        this.c = null;
        this.dispatchEvent("change")
    };
    iv.prototype.k = function() {
        m(this.resolution) || (this.resolution = Ud(this.extent) / this.a.height);
        this.state = 2;
        Oa(this.c, Pc);
        this.c = null;
        this.dispatchEvent("change")
    };
    iv.prototype.load = function() {
        0 == this.state && (this.state = 1, this.dispatchEvent("change"), this.c = [Nc(this.a, "error", this.g, !1, this), Nc(this.a, "load", this.k, !1, this)], this.i(this, this.f))
    };

    function jv(b, c, d, e, f) {
        vg.call(this, b, c);
        this.e = d;
        this.c = new Image;
        null !== e && (this.c.crossOrigin = e);
        this.b = {};
        this.d = null;
        this.i = f
    }
    A(jv, vg);
    l = jv.prototype;
    l.B = function() {
        1 == this.state && kv(this);
        jv.H.B.call(this)
    };

    function Qm(b, c) {
        if (m(c)) {
            var d, e = v(c);
            if (e in b.b) return b.b[e];
            d = rb(b.b) ? b.c : b.c.cloneNode(!1);
            return b.b[e] = d
        }
        return b.c
    }
    l.Fa = function() {
        return this.e
    };
    l.mh = function() {
        this.state = 3;
        kv(this);
        this.dispatchEvent("change")
    };
    l.nh = function() {
        this.state = this.c.naturalWidth && this.c.naturalHeight ? 2 : 4;
        kv(this);
        this.dispatchEvent("change")
    };
    l.load = function() {
        0 == this.state && (this.state = 1, this.dispatchEvent("change"), this.d = [Nc(this.c, "error", this.mh, !1, this), Nc(this.c, "load", this.nh, !1, this)], this.i(this, this.e))
    };

    function kv(b) {
        Oa(b.d, Pc);
        b.d = null
    };

    function lv(b, c) {
        kc.call(this, b);
        this.feature = c
    }
    A(lv, kc);

    function mv(b) {
        sj.call(this, {
            handleDownEvent: nv,
            handleEvent: ov,
            handleUpEvent: pv
        });
        this.v = null;
        this.M = m(b.source) ? b.source : null;
        this.J = m(b.features) ? b.features : null;
        this.jb = m(b.snapTolerance) ? b.snapTolerance : 12;
        this.za = m(b.minPointsPerRing) ? b.minPointsPerRing : 3;
        var c = this.s = b.type,
            d;
        "Point" === c || "MultiPoint" === c ? d = qv : "LineString" === c || "MultiLineString" === c ? d = rv : "Polygon" === c || "MultiPolygon" === c ? d = sv : "Circle" === c && (d = tv);
        this.a = d;
        this.d = this.g = this.k = this.e = this.f = null;
        this.u = new Fo({
            style: m(b.style) ?
                b.style : uv()
        });
        this.K = b.geometryName;
        this.Ha = m(b.condition) ? b.condition : oj;
        C(this, ld("active"), this.P, !1, this)
    }
    A(mv, sj);

    function uv() {
        var b = Pk();
        return function(c) {
            return b[c.G().A()]
        }
    }
    mv.prototype.setMap = function(b) {
        mv.H.setMap.call(this, b);
        this.P()
    };

    function ov(b) {
        var c = !0;
        b.type === ui ? c = vv(this, b) : b.type === oi && (c = !1);
        return tj.call(this, b) && c
    }

    function nv(b) {
        return this.Ha(b) ? (this.v = b.pixel, !0) : !1
    }

    function pv(b) {
        var c = this.v,
            d = b.pixel,
            e = c[0] - d[0],
            c = c[1] - d[1],
            d = !0;
        if (4 >= e * e + c * c) {
            vv(this, b);
            if (null === this.f) wv(this, b);
            else if (this.a === qv || this.a === tv && null !== this.f || xv(this, b)) {
                b = yv(this);
                var f, e = b.G();
                this.a === qv ? f = e.wa() : this.a === rv ? (f = e.ma(), f.pop(), e.ab(f)) : this.a === sv && (this.d[0].pop(), this.d[0].push(this.d[0][0]), e.Ib(this.d), f = e.qc());
                "MultiPoint" === this.s ? b.la(new O([f])) : "MultiLineString" === this.s ? b.la(new N([f])) : "MultiPolygon" === this.s && b.la(new P([f]));
                null === this.J || this.J.push(b);
                null !== this.M && (f = this.M, e = v(b).toString(), Gm(f, e, b), c = b.G(), null != c ? (c = c.d(), f.a.Xa(c, b)) : f.b[e] = b, Hm(f, e, b), f.dispatchEvent(new Im("addfeature", b)), f.r());
                this.dispatchEvent(new lv("drawend", b))
            } else f = b.coordinate, b = this.e.G(), this.a === rv ? (this.f = f.slice(), e = b.ma(), e.push(f.slice()), b.ab(e)) : this.a === sv && (this.d[0].push(f.slice()), b.Ib(this.d)), zv(this);
            d = !1
        }
        return d
    }

    function vv(b, c) {
        if (b.a === qv && null === b.f) wv(b, c);
        else if (null === b.f) {
            var d = c.coordinate.slice();
            null === b.k ? (b.k = new R(new G(d)), zv(b)) : b.k.G().Hb(d)
        } else {
            var d = c.coordinate,
                e = b.e.G(),
                f, g;
            b.a === qv ? (g = e.wa(), g[0] = d[0], g[1] = d[1], e.Hb(g)) : (b.a === rv ? f = e.ma() : b.a === sv ? f = b.d[0] : b.a === tv && (f = e.Gb()), xv(b, c) && (d = b.f.slice()), b.k.G().Hb(d), g = f[f.length - 1], g[0] = d[0], g[1] = d[1], b.a === rv ? e.ab(f) : b.a === sv ? (g = b.g.G(), g.ab(f), e.Ib(b.d)) : b.a === tv && (g = b.g.G(), g.ab([e.Gb(), d]), e.Fe(g.ae())));
            zv(b)
        }
        return !0
    }

    function xv(b, c) {
        var d = !1;
        if (null !== b.e) {
            var e = b.e.G(),
                f = !1,
                g = [b.f];
            b.a === rv ? f = 2 < e.ma().length : b.a === sv && (f = e.qc()[0].length > b.za, g = [b.d[0][0], b.d[0][b.d[0].length - 2]]);
            if (f)
                for (var e = c.map, f = 0, h = g.length; f < h; f++) {
                    var k = g[f],
                        n = zj(e, k),
                        p = c.pixel,
                        d = p[0] - n[0],
                        n = p[1] - n[1];
                    if (d = Math.sqrt(d * d + n * n) <= b.jb) {
                        b.f = k;
                        break
                    }
                }
        }
        return d
    }

    function wv(b, c) {
        var d = c.coordinate;
        b.f = d;
        var e;
        b.a === qv ? e = new G(d.slice()) : b.a === rv ? e = new M([d.slice(), d.slice()]) : b.a === sv ? (b.g = new R(new M([d.slice(), d.slice()])), b.d = [
            [d.slice(), d.slice()]
        ], e = new I(b.d)) : b.a === tv && (e = new am(d.slice(), 0), b.g = new R(new M([d.slice(), d.slice()])));
        b.e = new R;
        m(b.K) && b.e.f(b.K);
        b.e.la(e);
        zv(b);
        b.dispatchEvent(new lv("drawstart", b.e))
    }

    function yv(b) {
        b.f = null;
        var c = b.e;
        null !== c && (b.e = null, b.k = null, b.g = null, b.u.a.clear());
        return c
    }
    mv.prototype.n = Uc;

    function zv(b) {
        var c = [];
        null === b.e || c.push(b.e);
        null === b.g || c.push(b.g);
        null === b.k || c.push(b.k);
        b.u.Nb(new Jf(c))
    }
    mv.prototype.P = function() {
        var b = this.p,
            c = this.t();
        null !== b && c || yv(this);
        this.u.setMap(c ? b : null)
    };
    var qv = "Point",
        rv = "LineString",
        sv = "Polygon",
        tv = "Circle";

    function Av(b, c, d) {
        kc.call(this, b);
        this.selected = c;
        this.deselected = d
    }
    A(Av, kc);

    function Bv(b) {
        fj.call(this, {
            handleEvent: Cv
        });
        b = m(b) ? b : {};
        this.g = m(b.condition) ? b.condition : nj;
        this.d = m(b.addCondition) ? b.addCondition : Uc;
        this.l = m(b.removeCondition) ? b.removeCondition : Uc;
        this.o = m(b.toggleCondition) ? b.toggleCondition : pj;
        this.f = m(b.multi) ? b.multi : !1;
        var c;
        if (m(b.layers))
            if (oa(b.layers)) c = b.layers;
            else {
                var d = b.layers;
                c = function(b) {
                    return Ua(d, b)
                }
            } else c = Vc;
        this.b = c;
        this.a = new Fo({
            style: m(b.style) ? b.style : Dv()
        });
        b = this.a.a;
        C(b, "add", this.e, !1, this);
        C(b, "remove", this.n, !1, this)
    }
    A(Bv, fj);
    Bv.prototype.k = function() {
        return this.a.a
    };

    function Cv(b) {
        if (!this.g(b)) return !0;
        var c = this.d(b),
            d = this.l(b),
            e = this.o(b),
            f = b.map,
            g = this.a.a,
            h = [],
            k = [],
            n = !1;
        if (c || d || e) {
            f.Vc(b.pixel, function(b) {
                -1 == Na(g.a, b) ? (c || e) && k.push(b) : (d || e) && h.push(b)
            }, void 0, this.b);
            for (f = h.length - 1; 0 <= f; --f) g.remove(h[f]);
            g.bd(k);
            if (0 < k.length || 0 < h.length) n = !0
        } else f.Vc(b.pixel, function(b) {
            k.push(b);
            return !this.f
        }, this, this.b), 0 < k.length && 1 == g.get("length") && g.item(0) == k[0] || (n = !0, 0 !== g.get("length") && (h = Array.prototype.concat(g.a), g.clear()), g.bd(k));
        n && this.dispatchEvent(new Av("select",
            k, h));
        return mj(b)
    }
    Bv.prototype.setMap = function(b) {
        var c = this.p,
            d = this.a.a;
        null === c || d.forEach(c.Tb, c);
        Bv.H.setMap.call(this, b);
        this.a.setMap(b);
        null === b || d.forEach(b.Ha, b)
    };

    function Dv() {
        var b = Pk();
        Ya(b.Polygon, b.LineString);
        Ya(b.GeometryCollection, b.LineString);
        return function(c) {
            return b[c.G().A()]
        }
    }
    Bv.prototype.e = function(b) {
        b = b.element;
        var c = this.p;
        null === c || c.Ha(b)
    };
    Bv.prototype.n = function(b) {
        b = b.element;
        var c = this.p;
        null === c || c.Tb(b)
    };

    function Ev(b) {
        return [b]
    };

    function Fv(b) {
        var c = /\{z\}/g,
            d = /\{x\}/g,
            e = /\{y\}/g,
            f = /\{-y\}/g;
        return function(g) {
            return null === g ? void 0 : b.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, g[2].toString()).replace(f, function() {
                return ((1 << g[0]) - g[2] - 1).toString()
            })
        }
    }

    function Gv(b) {
        return Hv(Ra(b, Fv))
    }

    function Hv(b) {
        return 1 === b.length ? b[0] : function(c, d, e) {
            return null === c ? void 0 : b[Qb((c[1] << c[0]) + c[2], b.length)](c, d, e)
        }
    }

    function Iv() {}

    function Jv(b, c) {
        var d = [0, 0, 0];
        return function(e, f, g) {
            return null === e ? void 0 : c(b(e, g, d), f, g)
        }
    }

    function Kv(b) {
        var c = [],
            d = /\{(\d)-(\d)\}/.exec(b) || /\{([a-z])-([a-z])\}/.exec(b);
        if (d) {
            var e = d[2].charCodeAt(0),
                f;
            for (f = d[1].charCodeAt(0); f <= e; ++f) c.push(b.replace(d[0], String.fromCharCode(f)))
        } else c.push(b);
        return c
    };

    function Lv(b) {
        Mg.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            opaque: b.opaque,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0,
            tileGrid: b.tileGrid,
            tilePixelRatio: b.tilePixelRatio,
            wrapX: b.wrapX
        });
        this.tileUrlFunction = m(b.tileUrlFunction) ? b.tileUrlFunction : Iv;
        this.crossOrigin = m(b.crossOrigin) ? b.crossOrigin : null;
        this.tileLoadFunction = m(b.tileLoadFunction) ? b.tileLoadFunction : Mv;
        this.tileClass = m(b.tileClass) ? b.tileClass : jv
    }
    A(Lv, Mg);

    function Mv(b, c) {
        Qm(b).src = c
    }

    function Ni(b, c, d, e, f, g) {
        var h = b.Db(c, d, e);
        if (sg(b.a, h)) return b.a.get(h);
        c = [c, d, e];
        d = m(g) ? g : b.k;
        e = Og(b, d);
        var k;
        if (k = m(b.K)) {
            k = c[0];
            var n = Jg(e, k);
            if (m(n)) {
                var p = Kg(d);
                k = Fg(e, k) * n == Fg(p, k) * Qe(Ag(p, d.b, k))
            } else k = d.e
        }
        k ? b.K ? (k = c[0], n = c[1], d = Hg(e, k, d), n < d.a || n > d.d ? (n = Qb(n, Qe(d)), d = [k, n, c[2]]) : d = c) : (k = c[1], d = Hg(e, c[0], d), d = k < d.a || k > d.d ? null : c) : d = c;
        f = null === d ? void 0 : b.tileUrlFunction(d, f, g);
        f = new b.tileClass(c, m(f) ? 0 : 4, m(f) ? f : "", b.crossOrigin, b.tileLoadFunction);
        C(f, "change", b.O, !1, b);
        b.a.set(h, f);
        return f
    }
    Lv.prototype.O = function(b) {
        b = b.target;
        switch (b.state) {
            case 1:
                this.dispatchEvent(new Pg("tileloadstart", b));
                break;
            case 2:
                this.dispatchEvent(new Pg("tileloadend", b));
                break;
            case 3:
                this.dispatchEvent(new Pg("tileloaderror", b))
        }
    };
    Lv.prototype.e = function(b) {
        this.a.clear();
        this.tileUrlFunction = b;
        this.r()
    };
    Lv.prototype.J = function(b, c, d) {
        b = this.Db(b, c, d);
        sg(this.a, b) && this.a.get(b)
    };

    function Nv(b) {
        var c = m(b.extent) ? b.extent : gl,
            d = Lg(c, b.maxZoom, b.tileSize);
        xg.call(this, {
            minZoom: b.minZoom,
            origin: Sd(c, "top-left"),
            resolutions: d,
            tileSize: b.tileSize
        })
    }
    A(Nv, xg);
    Nv.prototype.i = function(b) {
        b = m(b) ? b : {};
        var c = this.minZoom,
            d = this.maxZoom,
            e = null;
        if (m(b.extent)) {
            var e = Array(d + 1),
                f;
            for (f = 0; f <= d; ++f) e[f] = f < c ? null : Ag(this, b.extent, f)
        }
        return function(b, f, k) {
            f = b[0];
            if (f < c || d < f) return null;
            var n = b[1];
            b = b[2];
            return b < -Math.pow(2, f) || -1 < b || null !== e && !Oe(e[f], n, b) ? null : Je(f, n, -b - 1, k)
        }
    };
    Nv.prototype.b = function(b, c) {
        if (b[0] < this.maxZoom) {
            var d = 2 * b[1],
                e = 2 * b[2];
            return Ne(d, d + 1, e, e + 1, c)
        }
        return null
    };
    Nv.prototype.c = function(b, c, d, e) {
        e = Ne(0, b[1], 0, b[2], e);
        for (b = b[0] - 1; b >= this.minZoom; --b)
            if (e.a = e.d >>= 1, e.b = e.c >>= 1, c.call(d, b, e)) return !0;
        return !1
    };

    function Ov(b) {
        Fm.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection
        });
        this.n = void 0;
        this.t = m(b.distance) ? b.distance : 20;
        this.e = [];
        this.o = b.source;
        this.o.N("change", Ov.prototype.v, this)
    }
    A(Ov, Fm);
    Ov.prototype.ob = function(b, c, d) {
        c !== this.n && (this.clear(), this.n = c, this.o.ob(b, c, d), Pv(this), this.Wb(this.e))
    };
    Ov.prototype.v = function() {
        this.clear();
        Pv(this);
        this.Wb(this.e);
        this.r()
    };

    function Pv(b) {
        if (m(b.n)) {
            b.e.length = 0;
            for (var c = Kd(), d = b.t * b.n, e = b.o.sc(), f = {}, g = 0, h = e.length; g < h; g++) {
                var k = e[g];
                ob(f, v(k).toString()) || (k = k.G().wa(), Ld(k, c), Ed(c, d, c), k = Cm(b.o.a, c), k = Pa(k, function(b) {
                    b = v(b).toString();
                    return b in f ? !1 : f[b] = !0
                }), b.e.push(Qv(k)))
            }
        }
    }

    function Qv(b) {
        for (var c = b.length, d = [0, 0], e = 0; e < c; e++) {
            var f = b[e].G().wa();
            md(d, f)
        }
        c = 1 / c;
        d[0] *= c;
        d[1] *= c;
        d = new R(new G(d));
        d.set("features", b);
        return d
    };

    function Rv(b, c, d) {
        if (oa(b)) d && (b = ua(b, d));
        else if (b && "function" == typeof b.handleEvent) b = ua(b.handleEvent, b);
        else throw Error("Invalid listener argument");
        return 2147483647 < c ? -1 : ca.setTimeout(b, c || 0)
    };

    function Sv() {}
    Sv.prototype.a = null;

    function Tv(b) {
        var c;
        (c = b.a) || (c = {}, Uv(b) && (c[0] = !0, c[1] = !0), c = b.a = c);
        return c
    };
    var Vv;

    function Wv() {}
    A(Wv, Sv);

    function Xv(b) {
        return (b = Uv(b)) ? new ActiveXObject(b) : new XMLHttpRequest
    }

    function Uv(b) {
        if (!b.c && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    return new ActiveXObject(e), b.c = e
                } catch (f) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return b.c
    }
    Vv = new Wv;

    function Yv(b) {
        $c.call(this);
        this.o = new hh;
        this.k = b || null;
        this.a = !1;
        this.g = this.F = null;
        this.e = this.p = "";
        this.c = this.l = this.d = this.q = !1;
        this.f = 0;
        this.b = null;
        this.i = Zv;
        this.n = this.s = !1
    }
    A(Yv, $c);
    var Zv = "",
        $v = /^https?$/i,
        aw = ["POST", "PUT"];
    l = Yv.prototype;
    l.send = function(b, c, d, e) {
        if (this.F) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.p + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        this.p = b;
        this.e = "";
        this.q = !1;
        this.a = !0;
        this.F = this.k ? Xv(this.k) : Xv(Vv);
        this.g = this.k ? Tv(this.k) : Tv(Vv);
        this.F.onreadystatechange = ua(this.le, this);
        try {
            this.l = !0, this.F.open(c, String(b), !0), this.l = !1
        } catch (f) {
            bw(this, f);
            return
        }
        b = d || "";
        var g = this.o.clone();
        e && gh(e, function(b, c) {
            g.set(c, b)
        });
        e = Sa(g.ca());
        d = ca.FormData && b instanceof ca.FormData;
        !Ua(aw,
            c) || e || d || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function(b, c) {
            this.F.setRequestHeader(c, b)
        }, this);
        this.i && (this.F.responseType = this.i);
        "withCredentials" in this.F && (this.F.withCredentials = this.s);
        try {
            cw(this), 0 < this.f && ((this.n = dw(this.F)) ? (this.F.timeout = this.f, this.F.ontimeout = ua(this.Ke, this)) : this.b = Rv(this.Ke, this.f, this)), this.d = !0, this.F.send(b), this.d = !1
        } catch (h) {
            bw(this, h)
        }
    };

    function dw(b) {
        return Bb && Kb(9) && na(b.timeout) && m(b.ontimeout)
    }

    function Ta(b) {
        return "content-type" == b.toLowerCase()
    }
    l.Ke = function() {
        "undefined" != typeof ba && this.F && (this.e = "Timed out after " + this.f + "ms, aborting", this.dispatchEvent("timeout"), this.F && this.a && (this.a = !1, this.c = !0, this.F.abort(), this.c = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ew(this)))
    };

    function bw(b, c) {
        b.a = !1;
        b.F && (b.c = !0, b.F.abort(), b.c = !1);
        b.e = c;
        fw(b);
        ew(b)
    }

    function fw(b) {
        b.q || (b.q = !0, b.dispatchEvent("complete"), b.dispatchEvent("error"))
    }
    l.B = function() {
        this.F && (this.a && (this.a = !1, this.c = !0, this.F.abort(), this.c = !1), ew(this, !0));
        Yv.H.B.call(this)
    };
    l.le = function() {
        this.C || (this.l || this.d || this.c ? gw(this) : this.Gh())
    };
    l.Gh = function() {
        gw(this)
    };

    function gw(b) {
        if (b.a && "undefined" != typeof ba && (!b.g[1] || 4 != hw(b) || 2 != iw(b)))
            if (b.d && 4 == hw(b)) Rv(b.le, 0, b);
            else if (b.dispatchEvent("readystatechange"), 4 == hw(b)) {
            b.a = !1;
            try {
                if (jw(b)) b.dispatchEvent("complete"), b.dispatchEvent("success");
                else {
                    var c;
                    try {
                        c = 2 < hw(b) ? b.F.statusText : ""
                    } catch (d) {
                        c = ""
                    }
                    b.e = c + " [" + iw(b) + "]";
                    fw(b)
                }
            } finally {
                ew(b)
            }
        }
    }

    function ew(b, c) {
        if (b.F) {
            cw(b);
            var d = b.F,
                e = b.g[0] ? da : null;
            b.F = null;
            b.g = null;
            c || b.dispatchEvent("ready");
            try {
                d.onreadystatechange = e
            } catch (f) {}
        }
    }

    function cw(b) {
        b.F && b.n && (b.F.ontimeout = null);
        na(b.b) && (ca.clearTimeout(b.b), b.b = null)
    }

    function jw(b) {
        var c = iw(b),
            d;
        a: switch (c) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                d = !0;
                break a;
            default:
                d = !1
        }
        if (!d) {
            if (c = 0 === c) b = ar(String(b.p))[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), c = !$v.test(b ? b.toLowerCase() : "");
            d = c
        }
        return d
    }

    function hw(b) {
        return b.F ? b.F.readyState : 0
    }

    function iw(b) {
        try {
            return 2 < hw(b) ? b.F.status : -1
        } catch (c) {
            return -1
        }
    }

    function kw(b) {
        try {
            return b.F ? b.F.responseText : ""
        } catch (c) {
            return ""
        }
    }

    function lw(b) {
        try {
            if (!b.F) return null;
            if ("response" in b.F) return b.F.response;
            switch (b.i) {
                case Zv:
                case "text":
                    return b.F.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in b.F) return b.F.mozResponseArrayBuffer
            }
            return null
        } catch (c) {
            return null
        }
    };

    function mw(b) {
        Fm.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection
        });
        this.format = b.format
    }
    A(mw, Fm);

    function nw(b, c, d, e, f) {
        var g = new Yv;
        g.i = "binary" == b.format.A() && wf ? "arraybuffer" : "text";
        C(g, "complete", function(b) {
            b = b.target;
            if (jw(b)) {
                var c = this.format.A(),
                    g;
                if ("binary" == c && wf) g = lw(b);
                else if ("json" == c) g = kw(b);
                else if ("text" == c) g = kw(b);
                else if ("xml" == c) {
                    if (!Bb) try {
                        g = b.F ? b.F.responseXML : null
                    } catch (p) {
                        g = null
                    }
                    null != g || (g = Bp(kw(b)))
                }
                null != g ? d.call(f, this.e(g)) : (this.l = "error", this.r())
            } else e.call(f);
            jc(b)
        }, !1, b);
        g.send(c)
    }
    mw.prototype.e = function(b) {
        return this.format.S(b, {
            featureProjection: this.k
        })
    };

    function ow(b) {
        mw.call(this, {
            attributions: b.attributions,
            format: b.format,
            logo: b.logo,
            projection: b.projection
        });
        m(b.arrayBuffer) && this.sa(this.e(b.arrayBuffer));
        m(b.doc) && this.sa(this.e(b.doc));
        m(b.node) && this.sa(this.e(b.node));
        m(b.object) && this.sa(this.e(b.object));
        m(b.text) && this.sa(this.e(b.text));
        if (m(b.url) || m(b.urls))
            if (this.l = "loading", this.r(), m(b.url) && nw(this, b.url, this.o, this.n, this), m(b.urls)) {
                b = b.urls;
                var c, d;
                c = 0;
                for (d = b.length; c < d; ++c) nw(this, b[c], this.o, this.n, this)
            }
    }
    A(ow, mw);
    ow.prototype.n = function() {
        this.l = "error";
        this.r()
    };
    ow.prototype.o = function(b) {
        this.sa(b);
        this.l = "ready";
        this.r()
    };

    function pw(b) {
        b = m(b) ? b : {};
        ow.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            format: new Wo({
                defaultDataProjection: b.defaultProjection
            }),
            logo: b.logo,
            object: b.object,
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    A(pw, ow);

    function qw(b) {
        b = m(b) ? b : {};
        sm.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions
        });
        this.v = m(b.crossOrigin) ? b.crossOrigin : null;
        this.e = b.url;
        this.P = m(b.imageLoadFunction) ? b.imageLoadFunction : xm;
        this.a = b.params;
        this.d = !0;
        rw(this);
        this.t = b.serverType;
        this.O = m(b.hidpi) ? b.hidpi : !0;
        this.b = null;
        this.g = [0, 0];
        this.o = 0;
        this.n = m(b.ratio) ? b.ratio : 1.5
    }
    A(qw, sm);
    var sw = [101, 101];
    qw.prototype.V = function(b, c, d, e) {
        if (m(this.e)) {
            var f = Td(b, c, 0, sw),
                g = {
                    SERVICE: "WMS",
                    VERSION: "1.3.0",
                    REQUEST: "GetFeatureInfo",
                    FORMAT: "image/png",
                    TRANSPARENT: !0,
                    QUERY_LAYERS: this.a.LAYERS
                };
            yb(g, this.a, e);
            e = Math.floor((f[3] - b[1]) / c);
            g[this.d ? "I" : "X"] = Math.floor((b[0] - f[0]) / c);
            g[this.d ? "J" : "Y"] = e;
            return tw(this, f, sw, 1, ee(d), g)
        }
    };
    qw.prototype.$ = function() {
        return this.a
    };

    function Om(b, c, d, e, f) {
        if (!m(b.e)) return null;
        null !== b.f && (d = Vb(b.f, d, 0), d = b.f[d]);
        1 == e || b.O && m(b.t) || (e = 1);
        var g = b.b;
        if (null !== g && b.o == b.c && g.resolution == d && g.e == e && Hd(g.extent, c)) return g;
        g = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetMap",
            FORMAT: "image/png",
            TRANSPARENT: !0
        };
        yb(g, b.a);
        c = c.slice();
        var h = (c[0] + c[2]) / 2,
            k = (c[1] + c[3]) / 2;
        if (1 != b.n) {
            var n = b.n * (c[2] - c[0]) / 2,
                p = b.n * Ud(c) / 2;
            c[0] = h - n;
            c[1] = k - p;
            c[2] = h + n;
            c[3] = k + p
        }
        var n = d / e,
            p = Math.ceil((c[2] - c[0]) / n),
            q = Math.ceil(Ud(c) / n);
        c[0] = h - n * p / 2;
        c[2] = h + n * p / 2;
        c[1] = k - n * q / 2;
        c[3] = k + n * q / 2;
        b.g[0] = p;
        b.g[1] = q;
        f = tw(b, c, b.g, e, f, g);
        b.b = new iv(c, d, e, b.p, f, b.v, b.P);
        b.o = b.c;
        C(b.b, "change", b.K, !1, b);
        return b.b
    }

    function tw(b, c, d, e, f, g) {
        g[b.d ? "CRS" : "SRS"] = f.a;
        "STYLES" in b.a || (g.STYLES = new String(""));
        if (1 != e) switch (b.t) {
            case "geoserver":
                g.FORMAT_OPTIONS = "dpi:" + (90 * e + .5 | 0);
                break;
            case "mapserver":
                g.MAP_RESOLUTION = 90 * e;
                break;
            case "carmentaserver":
            case "qgis":
                g.DPI = 90 * e
        }
        g.WIDTH = d[0];
        g.HEIGHT = d[1];
        d = f.d;
        var h;
        b.d && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
        g.BBOX = h.join(",");
        return dr(fr([b.e], g))
    }
    qw.prototype.J = function() {
        return this.e
    };
    qw.prototype.aa = function(b) {
        yb(this.a, b);
        rw(this);
        this.b = null;
        this.r()
    };

    function rw(b) {
        b.d = 0 <= Ka(ub(b.a, "VERSION", "1.3.0"), "1.3")
    };

    function uw(b) {
        b = m(b) ? b : {};
        ow.call(this, {
            attributions: b.attributions,
            doc: b.doc,
            format: new Ar({
                extractStyles: b.extractStyles,
                defaultStyle: b.defaultStyle
            }),
            logo: b.logo,
            node: b.node,
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    A(uw, ow);

    function vw(b) {
        var c = m(b.projection) ? b.projection : "EPSG:3857",
            d = new Nv({
                extent: Ig(c),
                maxZoom: b.maxZoom,
                tileSize: b.tileSize
            });
        Lv.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: c,
            tileGrid: d,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: Iv,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        this.d = d.i();
        m(b.tileUrlFunction) ? this.e(b.tileUrlFunction) : m(b.urls) ? this.e(Gv(b.urls)) : m(b.url) && this.e(Gv(Kv(b.url)))
    }
    A(vw, Lv);
    vw.prototype.e = function(b) {
        vw.H.e.call(this, Jv(this.d, b))
    };

    function ww(b) {
        b = m(b) ? b : {};
        var c;
        m(b.attributions) ? c = b.attributions : c = [xw];
        var d = Nb ? "https:" : "http:";
        vw.call(this, {
            attributions: c,
            crossOrigin: m(b.crossOrigin) ? b.crossOrigin : "anonymous",
            opaque: !0,
            maxZoom: m(b.maxZoom) ? b.maxZoom : 19,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : d + "//{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: b.wrapX
        })
    }
    A(ww, vw);
    var xw = new Se({
        html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
    });

    function yw(b) {
        b = m(b) ? b : {};
        var c = zw[b.layer];
        this.b = b.layer;
        var d = Nb ? "https:" : "http:";
        vw.call(this, {
            attributions: c.attributions,
            crossOrigin: "anonymous",
            logo: "//developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            opaque: !0,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : d + "//otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.b + "/{z}/{x}/{y}.jpg"
        })
    }
    A(yw, vw);
    var Aw = new Se({
            html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'
        }),
        zw = {
            osm: {
                maxZoom: 19,
                attributions: [Aw, xw]
            },
            sat: {
                maxZoom: 18,
                attributions: [Aw, new Se({
                    html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"
                })]
            },
            hyb: {
                maxZoom: 18,
                attributions: [Aw, xw]
            }
        };

    function Bw(b) {
        mw.call(this, {
            attributions: b.attributions,
            format: b.format,
            logo: b.logo,
            projection: b.projection
        });
        this.o = new Am;
        this.t = b.loader;
        this.v = m(b.strategy) ? b.strategy : Ev;
        this.n = {}
    }
    A(Bw, mw);
    Bw.prototype.sa = function(b) {
        var c = [],
            d, e;
        d = 0;
        for (e = b.length; d < e; ++d) {
            var f = b[d],
                g = f.a;
            m(g) ? g in this.n || (c.push(f), this.n[g] = !0) : c.push(f)
        }
        Bw.H.sa.call(this, c)
    };
    Bw.prototype.clear = function(b) {
        sb(this.n);
        this.o.clear();
        Bw.H.clear.call(this, b)
    };
    Bw.prototype.ob = function(b, c, d) {
        var e = this.o;
        b = this.v(b, c);
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            Em(e, h, function(b) {
                return Hd(b.extent, h)
            }) || (this.t.call(this, h, c, d), e.Xa(h, {
                extent: h.slice()
            }))
        }
    };

    function Cw(b) {
        b = m(b) ? b : {};
        var c = m(b.params) ? b.params : {};
        Lv.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            opaque: !ub(c, "TRANSPARENT", !0),
            projection: b.projection,
            tileGrid: b.tileGrid,
            tileLoadFunction: b.tileLoadFunction,
            tileUrlFunction: ua(this.yi, this),
            wrapX: b.wrapX
        });
        var d = b.urls;
        !m(d) && m(b.url) && (d = Kv(b.url));
        this.f = null != d ? d : [];
        this.g = m(b.gutter) ? b.gutter : 0;
        this.b = c;
        this.d = !0;
        this.n = b.serverType;
        this.t = m(b.hidpi) ? b.hidpi : !0;
        this.o = "";
        Dw(this);
        this.v = Kd();
        Ew(this)
    }
    A(Cw, Lv);
    l = Cw.prototype;
    l.Dh = function(b, c, d, e) {
        d = ee(d);
        var f = this.tileGrid;
        null === f && (f = Og(this, d));
        c = Dg(f, b[0], b[1], c, !1, void 0);
        if (!(f.a.length <= c[0])) {
            var g = f.a[c[0]],
                h = zg(f, c, this.v),
                f = Fg(f, c[0]),
                k = this.g;
            0 !== k && (f += 2 * k, h = Ed(h, g * k, h));
            k = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.b.LAYERS
            };
            yb(k, this.b, e);
            e = Math.floor((h[3] - b[1]) / g);
            k[this.d ? "I" : "X"] = Math.floor((b[0] - h[0]) / g);
            k[this.d ? "J" : "Y"] = e;
            return Fw(this, c, f, h, 1, d, k)
        }
    };
    l.dc = function() {
        return this.g
    };
    l.Db = function(b, c, d) {
        return this.o + Cw.H.Db.call(this, b, c, d)
    };
    l.Eh = function() {
        return this.b
    };

    function Fw(b, c, d, e, f, g, h) {
        var k = b.f;
        if (0 != k.length) {
            h.WIDTH = d;
            h.HEIGHT = d;
            h[b.d ? "CRS" : "SRS"] = g.a;
            "STYLES" in b.b || (h.STYLES = new String(""));
            if (1 != f) switch (b.n) {
                case "geoserver":
                    h.FORMAT_OPTIONS = "dpi:" + (90 * f + .5 | 0);
                    break;
                case "mapserver":
                    h.MAP_RESOLUTION = 90 * f;
                    break;
                case "carmentaserver":
                case "qgis":
                    h.DPI = 90 * f
            }
            d = g.d;
            b.d && "ne" == d.substr(0, 2) && (b = e[0], e[0] = e[1], e[1] = b, b = e[2], e[2] = e[3], e[3] = b);
            h.BBOX = e.join(",");
            return dr(fr([1 == k.length ? k[0] : k[Qb((c[1] << c[0]) + c[2], k.length)]], h))
        }
    }
    l.Fb = function(b, c, d) {
        b = Cw.H.Fb.call(this, b, c, d);
        return 1 != c && this.t && m(this.n) ? b * c + .5 | 0 : b
    };
    l.eg = function() {
        return this.f
    };

    function Dw(b) {
        var c = 0,
            d = [],
            e, f;
        e = 0;
        for (f = b.f.length; e < f; ++e) d[c++] = b.f[e];
        for (var g in b.b) d[c++] = g + "-" + b.b[g];
        b.o = d.join("#")
    }
    l.yi = function(b, c, d) {
        var e = this.tileGrid;
        null === e && (e = Og(this, d));
        if (!(e.a.length <= b[0])) {
            1 == c || this.t && m(this.n) || (c = 1);
            var f = e.a[b[0]],
                g = zg(e, b, this.v),
                e = Fg(e, b[0]),
                h = this.g;
            0 !== h && (e += 2 * h, g = Ed(g, f * h, g));
            1 != c && (e = e * c + .5 | 0);
            f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetMap",
                FORMAT: "image/png",
                TRANSPARENT: !0
            };
            yb(f, this.b);
            return Fw(this, b, e, g, c, d, f)
        }
    };
    l.Fh = function(b) {
        yb(this.b, b);
        Dw(this);
        Ew(this);
        this.r()
    };

    function Ew(b) {
        b.d = 0 <= Ka(ub(b.b, "VERSION", "1.3.0"), "1.3")
    };
    u("ol.Attribution", Se, OPENLAYERS);
    Jf.prototype.extend = Jf.prototype.bd;
    Jf.prototype.forEach = Jf.prototype.forEach;
    Jf.prototype.on = Jf.prototype.N;
    u("ol.Feature", R, OPENLAYERS);
    u("ol.Feature", R, OPENLAYERS);
    R.prototype.clone = R.prototype.clone;
    R.prototype.getGeometry = R.prototype.G;
    R.prototype.getId = R.prototype.Vf;
    R.prototype.getGeometryName = R.prototype.Uf;
    R.prototype.getStyle = R.prototype.jh;
    R.prototype.getStyleFunction = R.prototype.kh;
    R.prototype.setGeometry = R.prototype.la;
    R.prototype.setStyle = R.prototype.l;
    R.prototype.setId = R.prototype.e;
    R.prototype.setGeometryName = R.prototype.f;
    u("ol.FeatureOverlay", Fo, OPENLAYERS);
    Fo.prototype.addFeature = Fo.prototype.ah;
    Fo.prototype.getFeatures = Fo.prototype.bh;
    Fo.prototype.getMap = Fo.prototype.dh;
    Fo.prototype.removeFeature = Fo.prototype.ih;
    Fo.prototype.setFeatures = Fo.prototype.Nb;
    Fo.prototype.setMap = Fo.prototype.setMap;
    Fo.prototype.setStyle = Fo.prototype.Yd;
    Fo.prototype.getStyle = Fo.prototype.eh;
    Fo.prototype.getStyleFunction = Fo.prototype.fh;
    R.prototype.bindTo = R.prototype.zd;
    R.prototype.get = R.prototype.get;
    R.prototype.getKeys = R.prototype.ca;
    R.prototype.getProperties = R.prototype.Ea;
    R.prototype.set = R.prototype.set;
    R.prototype.setProperties = R.prototype.U;
    R.prototype.unbind = R.prototype.Ec;
    R.prototype.unbindAll = R.prototype.Le;
    R.prototype.changed = R.prototype.r;
    R.prototype.getRevision = R.prototype.da;
    R.prototype.on = R.prototype.N;
    R.prototype.once = R.prototype.fa;
    R.prototype.un = R.prototype.ha;
    R.prototype.unByKey = R.prototype.Z;
    u("ol.Geolocation", Z, OPENLAYERS);
    u("ol.Geolocation", Z, OPENLAYERS);
    Z.prototype.getAccuracy = Z.prototype.Id;
    Z.prototype.getAccuracyGeometry = Z.prototype.n;
    Z.prototype.getAltitude = Z.prototype.o;
    Z.prototype.getAltitudeAccuracy = Z.prototype.s;
    Z.prototype.getHeading = Z.prototype.t;
    Z.prototype.getPosition = Z.prototype.v;
    Z.prototype.getProjection = Z.prototype.k;
    Z.prototype.getSpeed = Z.prototype.u;
    Z.prototype.getTracking = Z.prototype.f;
    Z.prototype.getTrackingOptions = Z.prototype.g;
    Z.prototype.setProjection = Z.prototype.l;
    Z.prototype.setTracking = Z.prototype.b;
    Z.prototype.setTrackingOptions = Z.prototype.p;
    Z.prototype.bindTo = Z.prototype.zd;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.ca;
    Z.prototype.getProperties = Z.prototype.Ea;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.U;
    Z.prototype.unbind = Z.prototype.Ec;
    Z.prototype.unbindAll = Z.prototype.Le;
    Z.prototype.changed = Z.prototype.r;
    Z.prototype.getRevision = Z.prototype.da;
    Z.prototype.on = Z.prototype.N;
    Z.prototype.once = Z.prototype.fa;
    Z.prototype.un = Z.prototype.ha;
    Z.prototype.unByKey = Z.prototype.Z;
    u("ol.Map", Q, OPENLAYERS);
    Q.prototype.addControl = Q.prototype.Df;
    Q.prototype.addInteraction = Q.prototype.Ef;
    Q.prototype.addLayer = Q.prototype.Ff;
    Q.prototype.addOverlay = Q.prototype.Gf;
    Q.prototype.forEachFeatureAtPixel = Q.prototype.Vc;
    Q.prototype.getLayers = Q.prototype.$;
    Q.prototype.getLayers = Q.prototype.$;
    Q.prototype.getSize = Q.prototype.f;
    Q.prototype.getView = Q.prototype.a;
    Q.prototype.getViewport = Q.prototype.fg;
    Q.prototype.on = Q.prototype.N;
    Q.prototype.removeInteraction = Q.prototype.ki;
    Q.prototype.removeOverlay = Q.prototype.mi;
    Q.prototype.removeLayer = Q.prototype.li;
    Q.prototype.updateSize = Q.prototype.P;
    u("ol.View", ye, OPENLAYERS);
    ye.prototype.calculateExtent = ye.prototype.t;
    ye.prototype.fitExtent = ye.prototype.u;
    ye.prototype.get = ye.prototype.get;
    ye.prototype.getCenter = ye.prototype.a;
    ye.prototype.getProjection = ye.prototype.J;
    ye.prototype.getZoom = ye.prototype.v;
    ye.prototype.on = ye.prototype.N;
    ye.prototype.setCenter = ye.prototype.d;
    ye.prototype.setRotation = ye.prototype.l;
    ye.prototype.setZoom = ye.prototype.K;
    u("ol.control.MousePosition", Wg, OPENLAYERS);
    u("ol.control.ScaleLine", lo, OPENLAYERS);
    u("ol.control.ZoomSlider", Ao, OPENLAYERS);
    u("ol.control.defaults", Vg, OPENLAYERS);
    u("ol.coordinate.createStringXY", function(b) {
        return function(c) {
            return m(c) ? "{x}, {y}".replace("{x}", c[0].toFixed(b)).replace("{y}", c[1].toFixed(b)) : ""
        }
    }, OPENLAYERS);
    u("ol.coordinate.toStringHDMS", function(b) {
        return m(b) ? nd(b[1], "NS") + " " + nd(b[0], "EW") : ""
    }, OPENLAYERS);
    u("ol.events.condition.altKeyOnly", function(b) {
        b = b.a;
        return b.c && !b.f && !b.d
    }, OPENLAYERS);
    u("ol.events.condition.altShiftKeysOnly", lj, OPENLAYERS);
    u("ol.events.condition.always", Vc, OPENLAYERS);
    u("ol.events.condition.click", function(b) {
        return b.type == ni
    }, OPENLAYERS);
    u("ol.events.condition.never", Uc, OPENLAYERS);
    u("ol.events.condition.pointerMove", mj, OPENLAYERS);
    u("ol.events.condition.singleClick", nj, OPENLAYERS);
    u("ol.events.condition.noModifierKeys", oj, OPENLAYERS);
    u("ol.events.condition.platformModifierKeyOnly", function(b) {
        b = b.a;
        return !b.c && b.f && !b.d
    }, OPENLAYERS);
    u("ol.events.condition.shiftKeyOnly", pj, OPENLAYERS);
    u("ol.events.condition.targetNotEditable", qj, OPENLAYERS);
    u("ol.events.condition.mouseOnly", rj, OPENLAYERS);
    u("ol.format.Feature", Ho, OPENLAYERS);
    u("ol.format.GeoJSON", Wo, OPENLAYERS);
    Wo.prototype.readFeature = Wo.prototype.Na;
    Wo.prototype.readFeatures = Wo.prototype.S;
    Wo.prototype.readGeometry = Wo.prototype.Lb;
    Wo.prototype.readProjection = Wo.prototype.na;
    Wo.prototype.writeFeature = Wo.prototype.Gc;
    Wo.prototype.writeFeatureObject = Wo.prototype.a;
    Wo.prototype.writeFeatures = Wo.prototype.Qa;
    Wo.prototype.writeFeaturesObject = Wo.prototype.d;
    Wo.prototype.writeGeometry = Wo.prototype.Qb;
    Wo.prototype.writeGeometryObject = Wo.prototype.e;
    u("ol.format.GPX", lq, OPENLAYERS);
    lq.prototype.readFeature = lq.prototype.Na;
    lq.prototype.readFeatures = lq.prototype.S;
    lq.prototype.readProjection = lq.prototype.na;
    lq.prototype.writeFeatures = lq.prototype.Qa;
    lq.prototype.writeFeaturesNode = lq.prototype.a;
    u("ol.format.IGC", Wq, OPENLAYERS);
    Wq.prototype.readFeature = Wq.prototype.Na;
    Wq.prototype.readFeatures = Wq.prototype.S;
    Wq.prototype.readProjection = Wq.prototype.na;
    u("ol.format.KML", Ar, OPENLAYERS);
    Ar.prototype.readFeature = Ar.prototype.Na;
    Ar.prototype.readFeatures = Ar.prototype.S;
    Ar.prototype.readName = Ar.prototype.bi;
    Ar.prototype.readNetworkLinks = Ar.prototype.ci;
    Ar.prototype.readProjection = Ar.prototype.na;
    Ar.prototype.writeFeatures = Ar.prototype.Qa;
    Ar.prototype.writeFeaturesNode = Ar.prototype.a;
    u("ol.format.OSMXML", jt, OPENLAYERS);
    jt.prototype.readFeatures = jt.prototype.S;
    jt.prototype.readProjection = jt.prototype.na;
    u("ol.format.Polyline", It, OPENLAYERS);
    u("ol.format.Polyline.encodeDeltas", Jt, OPENLAYERS);
    u("ol.format.Polyline.decodeDeltas", Lt, OPENLAYERS);
    u("ol.format.Polyline.encodeFloats", Kt, OPENLAYERS);
    u("ol.format.Polyline.decodeFloats", Mt, OPENLAYERS);
    It.prototype.readFeature = It.prototype.Na;
    It.prototype.readFeatures = It.prototype.S;
    It.prototype.readGeometry = It.prototype.Lb;
    It.prototype.readProjection = It.prototype.na;
    It.prototype.writeGeometry = It.prototype.Qb;
    u("ol.format.TopoJSON", Nt, OPENLAYERS);
    Nt.prototype.readFeatures = Nt.prototype.S;
    Nt.prototype.readProjection = Nt.prototype.na;
    u("ol.format.WFS", Tt, OPENLAYERS);
    Tt.prototype.readFeatures = Tt.prototype.S;
    Tt.prototype.readTransactionResponse = Tt.prototype.f;
    Tt.prototype.readFeatureCollectionMetadata = Tt.prototype.i;
    Tt.prototype.writeGetFeature = Tt.prototype.g;
    Tt.prototype.writeTransaction = Tt.prototype.D;
    Tt.prototype.readProjection = Tt.prototype.na;
    u("ol.format.WKT", fu, OPENLAYERS);
    fu.prototype.readFeature = fu.prototype.Na;
    fu.prototype.readFeatures = fu.prototype.S;
    fu.prototype.readGeometry = fu.prototype.Lb;
    fu.prototype.writeFeature = fu.prototype.Gc;
    fu.prototype.writeFeatures = fu.prototype.Qa;
    fu.prototype.writeGeometry = fu.prototype.Qb;
    u("ol.format.WMSCapabilities", xu, OPENLAYERS);
    xu.prototype.read = xu.prototype.b;
    u("ol.format.WMSGetFeatureInfo", Uu, OPENLAYERS);
    Uu.prototype.readFeatures = Uu.prototype.S;
    u("ol.format.WMTSCapabilities", Wu, OPENLAYERS);
    Wu.prototype.read = Wu.prototype.b;
    u("ol.format.GML2", kq, OPENLAYERS);
    u("ol.format.GML3", Y, OPENLAYERS);
    Y.prototype.writeGeometryNode = Y.prototype.k;
    Y.prototype.writeFeatures = Y.prototype.Qa;
    Y.prototype.writeFeaturesNode = Y.prototype.a;
    u("ol.format.GML", Y, OPENLAYERS);
    Y.prototype.writeFeatures = Y.prototype.Qa;
    Y.prototype.writeFeaturesNode = Y.prototype.a;
    u("ol.format.GMLBase", Rp, OPENLAYERS);
    Rp.prototype.readFeatures = Rp.prototype.S;
    kq.prototype.readFeatures = kq.prototype.S;
    Y.prototype.readFeatures = Y.prototype.S;
    Y.prototype.readFeatures = Y.prototype.S;
    xu.prototype.read = xu.prototype.b;
    u("ol.geom.Circle", am, OPENLAYERS);
    am.prototype.clone = am.prototype.clone;
    am.prototype.getCenter = am.prototype.Gb;
    am.prototype.getRadius = am.prototype.$d;
    am.prototype.getType = am.prototype.A;
    am.prototype.setCenter = am.prototype.qh;
    am.prototype.setCenterAndRadius = am.prototype.Ce;
    am.prototype.setRadius = am.prototype.Fe;
    am.prototype.transform = am.prototype.transform;
    u("ol.geom.Geometry", Ej, OPENLAYERS);
    Ej.prototype.clone = Ej.prototype.clone;
    Ej.prototype.getClosestPoint = Ej.prototype.f;
    Ej.prototype.getExtent = Ej.prototype.d;
    Ej.prototype.getType = Ej.prototype.A;
    Ej.prototype.applyTransform = Ej.prototype.W;
    Ej.prototype.intersectsExtent = Ej.prototype.Q;
    Ej.prototype.translate = Ej.prototype.ea;
    Ej.prototype.transform = Ej.prototype.transform;
    u("ol.geom.GeometryCollection", cm, OPENLAYERS);
    cm.prototype.clone = cm.prototype.clone;
    cm.prototype.getGeometries = cm.prototype.Jd;
    cm.prototype.getType = cm.prototype.A;
    cm.prototype.intersectsExtent = cm.prototype.Q;
    cm.prototype.setGeometries = cm.prototype.Ee;
    cm.prototype.applyTransform = cm.prototype.W;
    cm.prototype.translate = cm.prototype.ea;
    u("ol.geom.LinearRing", Yj, OPENLAYERS);
    Yj.prototype.clone = Yj.prototype.clone;
    Yj.prototype.getArea = Yj.prototype.sh;
    Yj.prototype.getCoordinates = Yj.prototype.ma;
    Yj.prototype.getType = Yj.prototype.A;
    Yj.prototype.setCoordinates = Yj.prototype.be;
    u("ol.geom.LineString", M, OPENLAYERS);
    M.prototype.appendCoordinate = M.prototype.Hf;
    M.prototype.clone = M.prototype.clone;
    M.prototype.forEachSegment = M.prototype.Qf;
    M.prototype.getCoordinateAtM = M.prototype.rh;
    M.prototype.getCoordinates = M.prototype.ma;
    M.prototype.getLength = M.prototype.ae;
    M.prototype.getType = M.prototype.A;
    M.prototype.intersectsExtent = M.prototype.Q;
    M.prototype.setCoordinates = M.prototype.ab;
    u("ol.geom.MultiLineString", N, OPENLAYERS);
    N.prototype.appendLineString = N.prototype.If;
    N.prototype.clone = N.prototype.clone;
    N.prototype.getCoordinateAtM = N.prototype.th;
    N.prototype.getCoordinates = N.prototype.ce;
    N.prototype.getLineString = N.prototype.Yf;
    N.prototype.getLineStrings = N.prototype.Eb;
    N.prototype.getType = N.prototype.A;
    N.prototype.intersectsExtent = N.prototype.Q;
    N.prototype.setCoordinates = N.prototype.de;
    u("ol.geom.MultiPoint", O, OPENLAYERS);
    O.prototype.appendPoint = O.prototype.Kf;
    O.prototype.clone = O.prototype.clone;
    O.prototype.getCoordinates = O.prototype.ee;
    O.prototype.getPoint = O.prototype.ag;
    O.prototype.getPoints = O.prototype.fc;
    O.prototype.getType = O.prototype.A;
    O.prototype.intersectsExtent = O.prototype.Q;
    O.prototype.setCoordinates = O.prototype.fe;
    u("ol.geom.MultiPolygon", P, OPENLAYERS);
    P.prototype.appendPolygon = P.prototype.Lf;
    P.prototype.clone = P.prototype.clone;
    P.prototype.getArea = P.prototype.uh;
    P.prototype.getCoordinates = P.prototype.ge;
    P.prototype.getInteriorPoints = P.prototype.Xf;
    P.prototype.getPolygon = P.prototype.cg;
    P.prototype.getPolygons = P.prototype.gc;
    P.prototype.getType = P.prototype.A;
    P.prototype.intersectsExtent = P.prototype.Q;
    P.prototype.setCoordinates = P.prototype.he;
    u("ol.geom.Point", G, OPENLAYERS);
    G.prototype.clone = G.prototype.clone;
    G.prototype.getCoordinates = G.prototype.wa;
    G.prototype.getType = G.prototype.A;
    G.prototype.intersectsExtent = G.prototype.Q;
    G.prototype.setCoordinates = G.prototype.Hb;
    u("ol.geom.Polygon", I, OPENLAYERS);
    I.prototype.appendLinearRing = I.prototype.Jf;
    I.prototype.clone = I.prototype.clone;
    I.prototype.getArea = I.prototype.vh;
    I.prototype.getCoordinates = I.prototype.qc;
    I.prototype.getInteriorPoint = I.prototype.Wf;
    I.prototype.getLinearRingCount = I.prototype.$f;
    I.prototype.getLinearRing = I.prototype.Zf;
    I.prototype.getLinearRings = I.prototype.ec;
    I.prototype.getType = I.prototype.A;
    I.prototype.intersectsExtent = I.prototype.Q;
    I.prototype.setCoordinates = I.prototype.Ib;
    u("ol.geom.Polygon.circular", qk, OPENLAYERS);
    u("ol.geom.Polygon.fromExtent", function(b) {
        var c = b[0],
            d = b[1],
            e = b[2];
        b = b[3];
        c = [c, d, c, b, e, b, e, d, c, d];
        d = new I(null);
        nk(d, "XY", c, [c.length]);
        return d
    }, OPENLAYERS);
    u("ol.geom.SimpleGeometry", F, OPENLAYERS);
    F.prototype.getFirstCoordinate = F.prototype.Ba;
    F.prototype.getLastCoordinate = F.prototype.Ca;
    F.prototype.getLayout = F.prototype.Da;
    F.prototype.applyTransform = F.prototype.W;
    F.prototype.translate = F.prototype.ea;
    Ej.prototype.changed = Ej.prototype.r;
    Ej.prototype.getRevision = Ej.prototype.da;
    Ej.prototype.on = Ej.prototype.N;
    Ej.prototype.once = Ej.prototype.fa;
    Ej.prototype.un = Ej.prototype.ha;
    Ej.prototype.unByKey = Ej.prototype.Z;
    F.prototype.clone = F.prototype.clone;
    F.prototype.getClosestPoint = F.prototype.f;
    F.prototype.getExtent = F.prototype.d;
    F.prototype.getType = F.prototype.A;
    F.prototype.intersectsExtent = F.prototype.Q;
    F.prototype.transform = F.prototype.transform;
    F.prototype.changed = F.prototype.r;
    F.prototype.getRevision = F.prototype.da;
    F.prototype.on = F.prototype.N;
    F.prototype.once = F.prototype.fa;
    F.prototype.un = F.prototype.ha;
    F.prototype.unByKey = F.prototype.Z;
    am.prototype.getFirstCoordinate = am.prototype.Ba;
    am.prototype.getLastCoordinate = am.prototype.Ca;
    am.prototype.getLayout = am.prototype.Da;
    am.prototype.applyTransform = am.prototype.W;
    am.prototype.translate = am.prototype.ea;
    am.prototype.getClosestPoint = am.prototype.f;
    am.prototype.getExtent = am.prototype.d;
    am.prototype.intersectsExtent = am.prototype.Q;
    am.prototype.changed = am.prototype.r;
    am.prototype.getRevision = am.prototype.da;
    am.prototype.on = am.prototype.N;
    am.prototype.once = am.prototype.fa;
    am.prototype.un = am.prototype.ha;
    am.prototype.unByKey = am.prototype.Z;
    cm.prototype.getClosestPoint = cm.prototype.f;
    cm.prototype.getExtent = cm.prototype.d;
    cm.prototype.transform = cm.prototype.transform;
    cm.prototype.changed = cm.prototype.r;
    cm.prototype.getRevision = cm.prototype.da;
    cm.prototype.on = cm.prototype.N;
    cm.prototype.once = cm.prototype.fa;
    cm.prototype.un = cm.prototype.ha;
    cm.prototype.unByKey = cm.prototype.Z;
    Yj.prototype.getFirstCoordinate = Yj.prototype.Ba;
    Yj.prototype.getLastCoordinate = Yj.prototype.Ca;
    Yj.prototype.getLayout = Yj.prototype.Da;
    Yj.prototype.applyTransform = Yj.prototype.W;
    Yj.prototype.translate = Yj.prototype.ea;
    Yj.prototype.getClosestPoint = Yj.prototype.f;
    Yj.prototype.getExtent = Yj.prototype.d;
    Yj.prototype.intersectsExtent = Yj.prototype.Q;
    Yj.prototype.transform = Yj.prototype.transform;
    Yj.prototype.changed = Yj.prototype.r;
    Yj.prototype.getRevision = Yj.prototype.da;
    Yj.prototype.on = Yj.prototype.N;
    Yj.prototype.once = Yj.prototype.fa;
    Yj.prototype.un = Yj.prototype.ha;
    Yj.prototype.unByKey = Yj.prototype.Z;
    M.prototype.getFirstCoordinate = M.prototype.Ba;
    M.prototype.getLastCoordinate = M.prototype.Ca;
    M.prototype.getLayout = M.prototype.Da;
    M.prototype.applyTransform = M.prototype.W;
    M.prototype.translate = M.prototype.ea;
    M.prototype.getClosestPoint = M.prototype.f;
    M.prototype.getExtent = M.prototype.d;
    M.prototype.transform = M.prototype.transform;
    M.prototype.changed = M.prototype.r;
    M.prototype.getRevision = M.prototype.da;
    M.prototype.on = M.prototype.N;
    M.prototype.once = M.prototype.fa;
    M.prototype.un = M.prototype.ha;
    M.prototype.unByKey = M.prototype.Z;
    N.prototype.getFirstCoordinate = N.prototype.Ba;
    N.prototype.getLastCoordinate = N.prototype.Ca;
    N.prototype.getLayout = N.prototype.Da;
    N.prototype.applyTransform = N.prototype.W;
    N.prototype.translate = N.prototype.ea;
    N.prototype.getClosestPoint = N.prototype.f;
    N.prototype.getExtent = N.prototype.d;
    N.prototype.transform = N.prototype.transform;
    N.prototype.changed = N.prototype.r;
    N.prototype.getRevision = N.prototype.da;
    N.prototype.on = N.prototype.N;
    N.prototype.once = N.prototype.fa;
    N.prototype.un = N.prototype.ha;
    N.prototype.unByKey = N.prototype.Z;
    O.prototype.getFirstCoordinate = O.prototype.Ba;
    O.prototype.getLastCoordinate = O.prototype.Ca;
    O.prototype.getLayout = O.prototype.Da;
    O.prototype.applyTransform = O.prototype.W;
    O.prototype.translate = O.prototype.ea;
    O.prototype.getClosestPoint = O.prototype.f;
    O.prototype.getExtent = O.prototype.d;
    O.prototype.transform = O.prototype.transform;
    O.prototype.changed = O.prototype.r;
    O.prototype.getRevision = O.prototype.da;
    O.prototype.on = O.prototype.N;
    O.prototype.once = O.prototype.fa;
    O.prototype.un = O.prototype.ha;
    O.prototype.unByKey = O.prototype.Z;
    P.prototype.getFirstCoordinate = P.prototype.Ba;
    P.prototype.getLastCoordinate = P.prototype.Ca;
    P.prototype.getLayout = P.prototype.Da;
    P.prototype.applyTransform = P.prototype.W;
    P.prototype.translate = P.prototype.ea;
    P.prototype.getClosestPoint = P.prototype.f;
    P.prototype.getExtent = P.prototype.d;
    P.prototype.transform = P.prototype.transform;
    P.prototype.changed = P.prototype.r;
    P.prototype.getRevision = P.prototype.da;
    P.prototype.on = P.prototype.N;
    P.prototype.once = P.prototype.fa;
    P.prototype.un = P.prototype.ha;
    P.prototype.unByKey = P.prototype.Z;
    G.prototype.getFirstCoordinate = G.prototype.Ba;
    G.prototype.getLastCoordinate = G.prototype.Ca;
    G.prototype.getLayout = G.prototype.Da;
    G.prototype.applyTransform = G.prototype.W;
    G.prototype.translate = G.prototype.ea;
    G.prototype.getClosestPoint = G.prototype.f;
    G.prototype.getExtent = G.prototype.d;
    G.prototype.transform = G.prototype.transform;
    G.prototype.changed = G.prototype.r;
    G.prototype.getRevision = G.prototype.da;
    G.prototype.on = G.prototype.N;
    G.prototype.once = G.prototype.fa;
    G.prototype.un = G.prototype.ha;
    G.prototype.unByKey = G.prototype.Z;
    I.prototype.getFirstCoordinate = I.prototype.Ba;
    I.prototype.getLastCoordinate = I.prototype.Ca;
    I.prototype.getLayout = I.prototype.Da;
    I.prototype.applyTransform = I.prototype.W;
    I.prototype.translate = I.prototype.ea;
    I.prototype.getClosestPoint = I.prototype.f;
    I.prototype.getExtent = I.prototype.d;
    I.prototype.transform = I.prototype.transform;
    I.prototype.changed = I.prototype.r;
    I.prototype.getRevision = I.prototype.da;
    I.prototype.on = I.prototype.N;
    I.prototype.once = I.prototype.fa;
    I.prototype.un = I.prototype.ha;
    I.prototype.unByKey = I.prototype.Z;
    u("ol.interaction.Select", Bv, OPENLAYERS);
    u("ol.interaction.Draw", mv, OPENLAYERS);
    mv.prototype.on = mv.prototype.N;
    Bv.prototype.getFeatures = Bv.prototype.k;
    E.prototype.on = E.prototype.N;
    u("ol.layer.Image", ml, OPENLAYERS);
    ml.prototype.get = ml.prototype.get;
    ml.prototype.getSource = ml.prototype.a;
    ml.prototype.set = ml.prototype.set;
    u("ol.layer.Tile", nl, OPENLAYERS);
    nl.prototype.getSource = nl.prototype.a;
    nl.prototype.set = nl.prototype.set;
    u("ol.layer.Vector", pl, OPENLAYERS);
    pl.prototype.getSource = pl.prototype.a;
    pl.prototype.setStyle = pl.prototype.O;
    u("ol.loadingstrategy.createTile", function(b) {
        return function(c, d) {
            var e = Gg(b, d),
                f = Ag(b, c, e),
                g = [],
                e = [e, 0, 0];
            for (e[1] = f.a; e[1] <= f.d; ++e[1])
                for (e[2] = f.b; e[2] <= f.c; ++e[2]) g.push(zg(b, e));
            return g
        }
    }, OPENLAYERS);
    u("ol.proj.common.add", ll, OPENLAYERS);
    u("ol.proj.METERS_PER_UNIT", be, OPENLAYERS);
    u("ol.proj.Projection", ce, OPENLAYERS);
    ce.prototype.getCode = ce.prototype.Sf;
    ce.prototype.getExtent = ce.prototype.wh;
    ce.prototype.getUnits = ce.prototype.xh;
    ce.prototype.getMetersPerUnit = ce.prototype.Yc;
    ce.prototype.getWorldExtent = ce.prototype.gg;
    ce.prototype.isGlobal = ce.prototype.yh;
    ce.prototype.setGlobal = ce.prototype.si;
    ce.prototype.setExtent = ce.prototype.zh;
    ce.prototype.setWorldExtent = ce.prototype.wi;
    ce.prototype.setGetPointResolution = ce.prototype.ri;
    ce.prototype.getPointResolution = ce.prototype.getPointResolution;
    u("ol.proj.addEquivalentProjections", fe, OPENLAYERS);
    u("ol.proj.addProjection", se, OPENLAYERS);
    u("ol.proj.addCoordinateTransforms", ge, OPENLAYERS);
    u("ol.proj.get", ee, OPENLAYERS);
    u("ol.proj.getTransform", ve, OPENLAYERS);
    u("ol.proj.transform", function(b, c, d) {
        return ve(c, d)(b, void 0, b.length)
    }, OPENLAYERS);
    u("ol.proj.transformExtent", xe, OPENLAYERS);
    u("ol.Overlay", io, OPENLAYERS);
    u("ol.proj.Projection", ce, OPENLAYERS);
    u("ol.source.Cluster", Ov, OPENLAYERS);
    Ov.prototype.on = Ov.prototype.N;
    u("ol.source.GeoJSON", pw, OPENLAYERS);
    pw.prototype.forEachFeature = pw.prototype.Hd;
    pw.prototype.getFeatures = pw.prototype.sc;
    pw.prototype.getExtent = pw.prototype.rc;
    u("ol.source.ImageWMS", qw, OPENLAYERS);
    qw.prototype.getGetFeatureInfoUrl = qw.prototype.V;
    qw.prototype.updateParams = qw.prototype.aa;
    qw.prototype.getParams = qw.prototype.$;
    qw.prototype.getProjection = qw.prototype.u;
    qw.prototype.getUrl = qw.prototype.J;
    u("ol.source.KML", uw, OPENLAYERS);
    uw.prototype.on = uw.prototype.N;
    uw.prototype.getState = uw.prototype.ba;
    uw.prototype.getExtent = uw.prototype.rc;
    uw.prototype.unByKey = uw.prototype.Z;
    u("ol.source.MapQuest", yw, OPENLAYERS);
    u("ol.source.OSM", ww, OPENLAYERS);
    u("ol.source.TileWMS", Cw, OPENLAYERS);
    Cw.prototype.getGetFeatureInfoUrl = Cw.prototype.Dh;
    Cw.prototype.getParams = Cw.prototype.Eh;
    Cw.prototype.getProjection = Cw.prototype.u;
    Cw.prototype.getUrls = Cw.prototype.eg;
    Cw.prototype.updateParams = Cw.prototype.Fh;
    u("ol.source.Vector", Fm, OPENLAYERS);
    Fm.prototype.addFeatures = Fm.prototype.Wb;
    Fm.prototype.getFeatures = Fm.prototype.sc;
    Fm.prototype.getFeaturesAtCoordinate = Fm.prototype.Tf;
    Fm.prototype.forEachFeature = Fm.prototype.Hd;
    Fm.prototype.getExtent = Fm.prototype.rc;
    Fm.prototype.clear = Fm.prototype.clear;
    u("ol.source.ServerVector", Bw, OPENLAYERS);
    Bw.prototype.addFeatures = Bw.prototype.Wb;
    Bw.prototype.readFeatures = Bw.prototype.e;
    Bw.prototype.getFeatures = Bw.prototype.sc;
    Bw.prototype.getExtent = Bw.prototype.rc;
    u("ol.source.XYZ", vw, OPENLAYERS);
    u("ol.style.Circle", Jk, OPENLAYERS);
    u("ol.style.Fill", Ik, OPENLAYERS);
    u("ol.style.Icon", Qi, OPENLAYERS);
    Kk.prototype.getImage = Kk.prototype.g;
    u("ol.style.Stroke", Ek, OPENLAYERS);
    u("ol.style.Style", Kk, OPENLAYERS);
    u("ol.style.Text", zr, OPENLAYERS);
    u("ol.tilegrid.XYZ", Nv, OPENLAYERS);
    return OPENLAYERS.ol;
}));
