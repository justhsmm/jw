/*!
   IStream version 8.6.3
   Copyright (c) 2018, IStream, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.6.3/notice.txt
*/
window.jwplayer = function(t) {
    function e(e) { for (var n, i, o = e[0], u = e[1], a = 0, s = []; a < o.length; a++) i = o[a], r[i] && s.push(r[i][0]), r[i] = 0; for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]); for (c && c(e); s.length;) s.shift()() }
    var n = {},
        r = { 17: 0 };

    function i(e) { if (n[e]) return n[e].exports; var r = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports }
    i.e = function(t) {
        var e = [],
            n = r[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var o = new Promise(function(e, i) { n = r[t] = [e, i] });
                e.push(n[2] = o);
                var u = document.getElementsByTagName("head")[0],
                    a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 55, i.nc && a.setAttribute("nonce", i.nc), a.src = i.p + "" + ({ 0: "related", 1: "provider.html5", 2: "jwplayer.controls", 3: "polyfills.intersection-observer", 4: "jwplayer.core", 5: "jwplayer.core.controls", 6: "jwplayer.core.controls.polyfills", 7: "jwplayer.core.controls.html5", 8: "jwplayer.core.controls.polyfills.html5", 9: "provider.flash", 10: "provider.hlsjs", 11: "provider.shaka", 12: "polyfills.webvtt", 13: "jwplayer.vr", 14: "provider.airplay", 15: "provider.cast", 16: "vttparser" }[t] || t) + ".js";
                var c = setTimeout(function() { s({ type: "timeout", target: a }) }, 55e3);

                function s(e) {
                    a.onerror = a.onload = null, clearTimeout(c);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src,
                                u = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
                            u.type = i, u.request = o, n[1](u)
                        }
                        r[t] = void 0
                    }
                }
                a.onerror = a.onload = s, u.appendChild(a)
            }
        return Promise.all(e)
    }, i.m = t, i.c = n, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n }) }, i.r = function(t) { Object.defineProperty(t, "__esModule", { value: !0 }) }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i.oe = function(t) { throw console.error(t), t };
    var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [],
        u = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var a = 0; a < o.length; a++) e(o[a]);
    var c = u;
    return i(i.s = 60)
}([function(t, e, n) {
    "use strict";
    n.d(e, "i", function() { return C }), n.d(e, "A", function() { return x }), n.d(e, "F", function() { return S }), n.d(e, "l", function() { return _ }), n.d(e, "k", function() { return N }), n.d(e, "a", function() { return I }), n.d(e, "b", function() { return L }), n.d(e, "G", function() { return D }), n.d(e, "n", function() { return V }), n.d(e, "H", function() { return Q }), n.d(e, "e", function() { return W }), n.d(e, "J", function() { return U }), n.d(e, "m", function() { return J }), n.d(e, "h", function() { return K }), n.d(e, "p", function() { return Y }), n.d(e, "c", function() { return $ }), n.d(e, "C", function() { return et }), n.d(e, "I", function() { return it }), n.d(e, "q", function() { return at }), n.d(e, "g", function() { return ct }), n.d(e, "j", function() { return st }), n.d(e, "D", function() { return lt }), n.d(e, "w", function() { return dt }), n.d(e, "t", function() { return gt }), n.d(e, "v", function() { return mt }), n.d(e, "x", function() { return bt }), n.d(e, "s", function() { return yt }), n.d(e, "u", function() { return jt }), n.d(e, "r", function() { return wt }), n.d(e, "y", function() { return Ot }), n.d(e, "o", function() { return kt }), n.d(e, "d", function() { return xt }), n.d(e, "E", function() { return Pt }), n.d(e, "B", function() { return St }), n.d(e, "z", function() { return Et });
    var r = n(16),
        i = {},
        o = Array.prototype,
        u = Object.prototype,
        a = Function.prototype,
        c = o.slice,
        s = o.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        d = o.map,
        p = o.reduce,
        h = o.forEach,
        v = o.filter,
        g = o.every,
        m = o.some,
        b = o.indexOf,
        y = Array.isArray,
        j = Object.keys,
        w = a.bind,
        O = window.isFinite,
        C = function(t, e, n) {
            var r = void 0,
                o = void 0;
            if (null == t) return t;
            if (h && t.forEach === h) t.forEach(e, n);
            else if (t.length === +t.length) {
                for (r = 0, o = t.length; r < o; r++)
                    if (e.call(n, t[r], r, t) === i) return
            } else {
                var u = ot(t);
                for (r = 0, o = u.length; r < o; r++)
                    if (e.call(n, t[u[r]], u[r], t) === i) return
            }
            return t
        },
        k = C,
        x = function(t, e, n) { var r = []; return null == t ? r : d && t.map === d ? t.map(e, n) : (C(t, function(t, i, o) { r.push(e.call(n, t, i, o)) }), r) },
        P = x,
        S = function(t, e, n, r) { var i = arguments.length > 2; if (null == t && (t = []), p && t.reduce === p) return r && (e = $(e, r)), i ? t.reduce(e, n) : t.reduce(e); if (C(t, function(t, o, u) { i ? n = e.call(r, n, t, o, u) : (n = t, i = !0) }), !i) throw new TypeError("Reduce of empty array with no initial value"); return n },
        T = S,
        E = S,
        _ = function(t, e, n) { var r = void 0; return L(t, function(t, i, o) { if (e.call(n, t, i, o)) return r = t, !0 }), r },
        A = _,
        N = function(t, e, n) { var r = []; return null == t ? r : v && t.filter === v ? t.filter(e, n) : (C(t, function(t, i, o) { e.call(n, t, i, o) && r.push(t) }), r) },
        M = N,
        I = function(t, e, n) { e || (e = kt); var r = !0; return null == t ? r : g && t.every === g ? t.every(e, n) : (C(t, function(t, o, u) { if (!(r = r && e.call(n, t, o, u))) return i }), !!r) },
        F = I,
        L = function(t, e, n) { e || (e = kt); var r = !1; return null == t ? r : m && t.some === m ? t.some(e, n) : (C(t, function(t, o, u) { if (r || (r = e.call(n, t, o, u))) return i }), !!r) },
        R = L,
        D = function(t) { return null == t ? 0 : t.length === +t.length ? t.length : ot(t).length },
        B = function(t, e) { var n = void 0; return function() { return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n } },
        z = function(t) { return null == t ? kt : gt(t) ? t : Pt(t) },
        q = function(t) {
            return function(e, n, r) {
                var i = {};
                return n = z(n), C(e, function(o, u) {
                    var a = n.call(r, o, u, e);
                    t(i, a, o)
                }), i
            }
        },
        V = q(function(t, e, n) { Ct(t, e) ? t[e].push(n) : t[e] = [n] }),
        X = q(function(t, e, n) { t[e] = n }),
        Q = function(t, e, n, r) {
            for (var i = (n = z(n)).call(r, e), o = 0, u = t.length; o < u;) {
                var a = o + u >>> 1;
                n.call(r, t[a]) < i ? o = a + 1 : u = a
            }
            return o
        },
        W = function(t, e) { return null != t && (t.length !== +t.length && (t = ut(t)), Y(t, e) >= 0) },
        H = W,
        U = function(t, e) { return N(t, St(e)) },
        J = function(t, e) { return _(t, St(e)) },
        K = function(t) { var e = s.apply(o, c.call(arguments, 1)); return N(t, function(t) { return !W(e, t) }) },
        Y = function(t, e, n) {
            if (null == t) return -1;
            var r = 0,
                i = t.length;
            if (n) {
                if ("number" != typeof n) return t[r = Q(t, e)] === e ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (b && t.indexOf === b) return t.indexOf(e, n);
            for (; r < i; r++)
                if (t[r] === e) return r;
            return -1
        },
        G = function() {},
        $ = function(t, e) {
            var n = void 0,
                r = void 0;
            if (w && t.bind === w) return w.apply(t, c.call(arguments, 1));
            if (!gt(t)) throw new TypeError;
            return n = c.call(arguments, 2), r = function() {
                if (!(this instanceof r)) return t.apply(e, n.concat(c.call(arguments)));
                G.prototype = t.prototype;
                var i = new G;
                G.prototype = null;
                var o = t.apply(i, n.concat(c.call(arguments)));
                return Object(o) === o ? o : i
            }
        },
        Z = function(t) { var e = c.call(arguments, 1); return function() { for (var n = 0, r = e.slice(), i = 0, o = r.length; i < o; i++) Ct(r[i], "partial") && (r[i] = arguments[n++]); for (; n < arguments.length;) r.push(arguments[n++]); return t.apply(this, r) } },
        tt = Z(B, 2),
        et = function(t, e) {
            var n = {};
            return e || (e = kt),
                function() { var r = e.apply(this, arguments); return Ct(n, r) ? n[r] : n[r] = t.apply(this, arguments) }
        },
        nt = function(t, e) { var n = c.call(arguments, 2); return setTimeout(function() { return t.apply(null, n) }, e) },
        rt = Z(nt, { partial: Z }, 1),
        it = function(t, e, n) {
            var r = void 0,
                i = void 0,
                o = void 0,
                u = null,
                a = 0;
            n || (n = {});
            var c = function() { a = !1 === n.leading ? 0 : Tt(), u = null, o = t.apply(r, i), r = i = null };
            return function() { a || !1 !== n.leading || (a = Tt); var s = e - (Tt - a); return r = this, i = arguments, s <= 0 ? (clearTimeout(u), u = null, a = Tt, o = t.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)), o }
        },
        ot = function(t) { if (!dt(t)) return []; if (j) return j(t); var e = []; for (var n in t) Ct(t, n) && e.push(n); return e },
        ut = function(t) { for (var e = ot(t), n = ot.length, r = Array(n), i = 0; i < n; i++) r[i] = t[e[i]]; return r },
        at = function(t) { for (var e = {}, n = ot(t), r = 0, i = n.length; r < i; r++) e[t[n[r]]] = n[r]; return e },
        ct = function(t) {
            return C(c.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        },
        st = Object.assign || function(t) {
            return C(c.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }), t
        },
        lt = function(t) {
            var e = {},
                n = s.apply(o, c.call(arguments, 1));
            return C(n, function(n) { n in t && (e[n] = t[n]) }), e
        },
        ft = y || function(t) { return "[object Array]" == l.call(t) },
        dt = function(t) { return t === Object(t) },
        pt = [];
    C(["Function", "String", "Number", "Date", "RegExp"], function(t) { pt[t] = function(e) { return l.call(e) == "[object " + t + "]" } }), pt.Function = function(t) { return "function" == typeof t };
    var ht = pt.Date,
        vt = pt.RegExp,
        gt = pt.Function,
        mt = pt.Number,
        bt = pt.String,
        yt = function(t) { return O(t) && !jt(parseFloat(t)) },
        jt = function(t) { return mt(t) && t != +t },
        wt = function(t) { return !0 === t || !1 === t || "[object Boolean]" == l.call(t) },
        Ot = function(t) { return void 0 === t },
        Ct = function(t, e) { return f.call(t, e) },
        kt = function(t) { return t },
        xt = function(t) { return function() { return t } },
        Pt = function(t) { return function(e) { return e[t] } },
        St = function(t) {
            return function(e) {
                if (e === t) return !0;
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            }
        },
        Tt = r.a,
        Et = function(t) { return mt(t) && !jt(t) };
    e.f = {
        after: function(t, e) { return function() { if (--t < 1) return e.apply(this, arguments) } },
        all: I,
        any: L,
        before: B,
        bind: $,
        clone: function(t) { return dt(t) ? ft(t) ? t.slice() : st({}, t) : t },
        collect: P,
        compact: function(t) { return N(t, kt) },
        constant: xt,
        contains: W,
        defaults: ct,
        defer: rt,
        delay: nt,
        detect: A,
        difference: K,
        each: C,
        every: F,
        extend: st,
        filter: N,
        find: _,
        findWhere: J,
        foldl: T,
        forEach: k,
        groupBy: V,
        has: Ct,
        identity: kt,
        include: H,
        indexBy: X,
        indexOf: Y,
        inject: E,
        invert: at,
        isArray: ft,
        isBoolean: wt,
        isDate: ht,
        isFinite: yt,
        isFunction: gt,
        isNaN: jt,
        isNull: function(t) { return null === t },
        isNumber: mt,
        isObject: dt,
        isRegExp: vt,
        isString: bt,
        isUndefined: Ot,
        isValidNumber: Et,
        keys: ot,
        last: function(t, e, n) { if (null != t) return null == e || n ? t[t.length - 1] : c.call(t, Math.max(t.length - e, 0)) },
        map: x,
        matches: St,
        max: function(t, e, n) {
            if (!e && ft(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            var r = -1 / 0,
                i = -1 / 0;
            return C(t, function(t, o, u) {
                var a = e ? e.call(n, t, o, u) : t;
                a > i && (r = t, i = a)
            }), r
        },
        memoize: et,
        now: Tt,
        omit: function(t) {
            var e = {},
                n = s.apply(o, c.call(arguments, 1));
            for (var r in t) W(n, r) || (e[r] = t[r]);
            return e
        },
        once: tt,
        partial: Z,
        pick: lt,
        pluck: function(t, e) { return x(t, Pt(e)) },
        property: Pt,
        propertyOf: function(t) { return null == t ? function() {} : function(e) { return t[e] } },
        reduce: S,
        reject: function(t, e, n) { return N(t, function(t, r, i) { return !e.call(n, t, r, i) }, n) },
        result: function(t, e) { if (null != t) { var n = t[e]; return gt(n) ? n.call(t) : n } },
        select: M,
        size: D,
        some: R,
        sortedIndex: Q,
        throttle: it,
        where: U,
        without: function(t) { return K(t, c.call(arguments, 1)) }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "y", function() { return o }), n.d(e, "x", function() { return u }), n.d(e, "w", function() { return a }), n.d(e, "t", function() { return c }), n.d(e, "u", function() { return s }), n.d(e, "a", function() { return l }), n.d(e, "c", function() { return f }), n.d(e, "v", function() { return d }), n.d(e, "d", function() { return p }), n.d(e, "h", function() { return h }), n.d(e, "e", function() { return v }), n.d(e, "k", function() { return g }), n.d(e, "i", function() { return m }), n.d(e, "j", function() { return b }), n.d(e, "b", function() { return x }), n.d(e, "f", function() { return P }), n.d(e, "g", function() { return S }), n.d(e, "o", function() { return T }), n.d(e, "l", function() { return E }), n.d(e, "m", function() { return _ }), n.d(e, "n", function() { return A }), n.d(e, "p", function() { return N }), n.d(e, "q", function() { return M }), n.d(e, "r", function() { return I }), n.d(e, "s", function() { return F }), n.d(e, "A", function() { return L }), n.d(e, "z", function() { return R }), n.d(e, "B", function() { return D });
    var r = n(0),
        i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }();
    var o = 1e5,
        u = 100001,
        a = 100002,
        c = 101e3,
        s = 102e3,
        l = 200001,
        f = 202e3,
        d = 104e3,
        p = 203e3,
        h = 203640,
        v = 204e3,
        g = 210001,
        m = 21e4,
        b = 214e3,
        y = 303200,
        j = 303210,
        w = 303212,
        O = 303213,
        C = 303220,
        k = 303230,
        x = 306e3,
        P = 308e3,
        S = 308640,
        T = "cantPlayVideo",
        E = "badConnection",
        _ = "cantLoadPlayer",
        A = "cantPlayInBrowser",
        N = "liveStreamDown",
        M = "protectedContent",
        I = "technicalError",
        F = function() {
            function t(e, n) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.code = Object(r.z)(n) ? n : 0, this.sourceError = i, e && (this.key = e) }
            return i(t, null, [{
                key: "logMessage",
                value: function(t) {
                    var e = t % 1e3,
                        n = Math.floor((t - e) / 1e3),
                        r = t;
                    return e >= 400 && e < 600 && (r = n + "400-" + n + "599"), "FastPlayer " + (t > 299999 && t < 4e5 ? "Warning" : "Error") + " " + t + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
                }
            }]), t
        }();

    function L(t, e, n) { return n instanceof F && n.code ? n : new F(t, e, n) }

    function R(t, e) { var n = L(I, e, t); return n.code = (t && t.code || 0) + e, n }

    function D(t) {
        var e = t.name,
            n = t.message;
        switch (e) {
            case "AbortError":
                return /pause/.test(n) ? O : /load/.test(n) ? w : j;
            case "NotAllowedError":
                return C;
            case "NotSupportedError":
                return k;
            default:
                return y
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() { return o }), n.d(e, "d", function() { return u }), n.d(e, "i", function() { return a }), n.d(e, "a", function() { return c }), n.d(e, "b", function() { return s }), n.d(e, "f", function() { return l }), n.d(e, "c", function() { return f }), n.d(e, "e", function() { return d }), n.d(e, "g", function() { return p });
    var r = n(0),
        i = window.parseFloat;

    function o(t) { return t.replace(/^\s+|\s+$/g, "") }

    function u(t, e, n) { for (t = "" + t, n = n || "0"; t.length < e;) t = n + t; return t }

    function a(t, e) {
        for (var n = t.attributes, r = 0; r < n.length; r++)
            if (n[r].name && n[r].name.toLowerCase() === e.toLowerCase()) return n[r].value.toString();
        return ""
    }

    function c(t) { if (!t || "rtmp" === t.substr(0, 4)) return ""; var e = /[(,]format=(m3u8|mpd)-/i.exec(t); return e ? e[1] : (t = t.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : void 0 }

    function s(t) {
        var e = (t / 60 | 0) % 60,
            n = t % 60;
        return u(t / 3600 | 0, 2) + ":" + u(e, 2) + ":" + u(n.toFixed(3), 6)
    }

    function l(t, e) {
        if (!t) return 0;
        if (Object(r.z)(t)) return t;
        var n = t.replace(",", "."),
            o = n.slice(-1),
            u = n.split(":"),
            a = u.length,
            c = 0;
        if ("s" === o) c = i(n);
        else if ("m" === o) c = 60 * i(n);
        else if ("h" === o) c = 3600 * i(n);
        else if (a > 1) {
            var s = a - 1;
            4 === a && (e && (c = i(u[s]) / e), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
        } else c = i(n);
        return Object(r.z)(c) ? c : 0
    }

    function f(t, e, n) { if (Object(r.x)(t) && "%" === t.slice(-1)) { var o = i(t); return e && Object(r.z)(e) && Object(r.z)(o) ? e * o / 100 : null } return l(t, n) }

    function d(t, e) { return t.map(function(t) { return e + t }) }

    function p(t, e) { return t.map(function(t) { return t + e }) }
}, function(t, e, n) {
    "use strict";
    n.d(e, "Ja", function() { return r }), n.d(e, "Ma", function() { return i }), n.d(e, "Ka", function() { return o }), n.d(e, "Oa", function() { return u }), n.d(e, "Pa", function() { return a }), n.d(e, "La", function() { return c }), n.d(e, "Na", function() { return s }), n.d(e, "Qa", function() { return l }), n.d(e, "s", function() { return f }), n.d(e, "u", function() { return d }), n.d(e, "t", function() { return p }), n.d(e, "n", function() { return h }), n.d(e, "q", function() { return v }), n.d(e, "Ra", function() { return g }), n.d(e, "r", function() { return m }), n.d(e, "Y", function() { return b }), n.d(e, "V", function() { return y }), n.d(e, "v", function() { return j }), n.d(e, "X", function() { return w }), n.d(e, "w", function() { return O }), n.d(e, "Ta", function() { return C }), n.d(e, "a", function() { return k }), n.d(e, "b", function() { return x }), n.d(e, "c", function() { return P }), n.d(e, "d", function() { return S }), n.d(e, "e", function() { return T }), n.d(e, "h", function() { return E }), n.d(e, "F", function() { return _ }), n.d(e, "Ga", function() { return A }), n.d(e, "P", function() { return N }), n.d(e, "C", function() { return M }), n.d(e, "B", function() { return I }), n.d(e, "E", function() { return F }), n.d(e, "p", function() { return L }), n.d(e, "Ba", function() { return R }), n.d(e, "m", function() { return D }), n.d(e, "G", function() { return B }), n.d(e, "H", function() { return z }), n.d(e, "M", function() { return q }), n.d(e, "N", function() { return V }), n.d(e, "Q", function() { return X }), n.d(e, "Ia", function() { return Q }), n.d(e, "Aa", function() { return W }), n.d(e, "D", function() { return H }), n.d(e, "R", function() { return U }), n.d(e, "O", function() { return J }), n.d(e, "S", function() { return K }), n.d(e, "U", function() { return Y }), n.d(e, "L", function() { return G }), n.d(e, "K", function() { return $ }), n.d(e, "I", function() { return Z }), n.d(e, "J", function() { return tt }), n.d(e, "T", function() { return et }), n.d(e, "o", function() { return nt }), n.d(e, "y", function() { return rt }), n.d(e, "Ha", function() { return it }), n.d(e, "Ca", function() { return ot }), n.d(e, "Da", function() { return ut }), n.d(e, "f", function() { return at }), n.d(e, "g", function() { return ct }), n.d(e, "Z", function() { return st }), n.d(e, "A", function() { return lt }), n.d(e, "l", function() { return ft }), n.d(e, "k", function() { return dt }), n.d(e, "Ea", function() { return pt }), n.d(e, "Fa", function() { return ht }), n.d(e, "Sa", function() { return vt }), n.d(e, "z", function() { return gt }), n.d(e, "j", function() { return mt }), n.d(e, "W", function() { return bt }), n.d(e, "i", function() { return yt }), n.d(e, "x", function() { return jt });
    var r = "buffering",
        i = "idle",
        o = "complete",
        u = "paused",
        a = "playing",
        c = "error",
        s = "loading",
        l = "stalled",
        f = "drag",
        d = "dragStart",
        p = "dragEnd",
        h = "click",
        v = "doubleClick",
        g = "tap",
        m = "doubleTap",
        b = "over",
        y = "move",
        j = "enter",
        w = "out",
        O = c,
        C = "warning",
        k = "adClick",
        x = "adPause",
        P = "adPlay",
        S = "adSkipped",
        T = "adTime",
        E = "autostartNotAllowed",
        _ = o,
        A = "ready",
        N = "seek",
        M = "beforePlay",
        I = "beforeComplete",
        F = "bufferFull",
        L = "displayClick",
        R = "playlistComplete",
        D = "cast",
        B = "mediaError",
        z = "firstFrame",
        q = "playAttempt",
        V = "playAttemptFailed",
        X = "seeked",
        Q = "setupError",
        W = "state",
        H = "bufferChange",
        U = "time",
        J = "ratechange",
        K = "mediaType",
        Y = "volume",
        G = "mute",
        $ = "meta",
        Z = "levels",
        tt = "levelsChanged",
        et = "visualQuality",
        nt = "controls",
        rt = "fullscreen",
        it = "resize",
        ot = "playlistItem",
        ut = "playlist",
        at = "audioTracks",
        ct = "audioTrackChanged",
        st = "playbackRateChanged",
        lt = "logoClick",
        ft = "captionsList",
        dt = "captionsChanged",
        pt = "providerChanged",
        ht = "providerFirstFrame",
        vt = "userAction",
        gt = "instreamClick",
        mt = "breakpoint",
        bt = "fullscreenchange",
        yt = "bandwidthEstimate",
        jt = "float"
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() { return i }), n.d(e, "d", function() { return o }), n.d(e, "a", function() { return u }), n.d(e, "c", function() { return a });
    var r = n(2);

    function i(t) { var e = ""; return t && (t.localName ? e = t.localName : t.baseName && (e = t.baseName)), e }

    function o(t) { var e = ""; return t && (t.textContent ? e = Object(r.h)(t.textContent) : t.text && (e = Object(r.h)(t.text))), e }

    function u(t, e) { return t.childNodes[e] }

    function a(t) { return t.childNodes ? t.childNodes.length : 0 }
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() { return o }), n.d(e, "d", function() { return u }), n.d(e, "b", function() { return a }), n.d(e, "e", function() { return c }), n.d(e, "f", function() { return s });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        i = [].slice;

    function o(t, e, n) { if (!f(this, "on", t, [e, n]) || !e) return this; var r = this._events || (this._events = {}); return (r[t] || (r[t] = [])).push({ callback: e, context: n }), this }

    function u(t, e, n) {
        if (!f(this, "once", t, [e, n]) || !e) return this;
        var r = 0,
            i = this,
            o = function n() { r++ || (i.off(t, n), e.apply(this, arguments)) };
        return o._callback = e, this.on(t, o, n)
    }

    function a(t, e, n) {
        if (!this._events || !f(this, "off", t, [e, n])) return this;
        if (!t && !e && !n) return delete this._events, this;
        for (var r = t ? [t] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
            t = r[i];
            var u = this._events[t];
            if (u) {
                var a = this._events[t] = [];
                if (e || n)
                    for (var c = 0, s = u.length; c < s; c++) {
                        var l = u[c];
                        (e && e !== l.callback && e !== l.callback._callback || n && n !== l.context) && a.push(l)
                    }
                a.length || delete this._events[t]
            }
        }
        return this
    }

    function c(t) {
        if (!this._events) return this;
        var e = i.call(arguments, 1);
        if (!f(this, "trigger", t, e)) return this;
        var n = this._events[t],
            r = this._events.all;
        return n && d(n, e, this), r && d(r, arguments, this), this
    }

    function s(t) {
        if (!this._events) return this;
        var e = i.call(arguments, 1);
        if (!f(this, "trigger", t, e)) return this;
        var n = this._events[t],
            r = this._events.all;
        return n && d(n, e, this, t), r && d(r, arguments, this, t), this
    }
    var l = /\s+/;

    function f(t, e, n, i) { if (!n) return !0; if ("object" === (void 0 === n ? "undefined" : r(n))) { for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && t[e].apply(t, [o, n[o]].concat(i)); return !1 } if (l.test(n)) { for (var u = n.split(l), a = 0, c = u.length; a < c; a++) t[e].apply(t, [u[a]].concat(i)); return !1 } return !0 }

    function d(t, e, n, r) { for (var i = -1, o = t.length; ++i < o;) { var u = t[i]; if (r) try { u.callback.apply(u.context || n, e) } catch (t) { console.log('Error in "' + r + '" event handler:', t) } else u.callback.apply(u.context || n, e) } }
    e.a = { on: o, once: u, off: a, trigger: c }
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() { return u }), n.d(e, "f", function() { return a }), n.d(e, "l", function() { return s }), n.d(e, "k", function() { return l }), n.d(e, "p", function() { return f }), n.d(e, "g", function() { return d }), n.d(e, "e", function() { return p }), n.d(e, "n", function() { return h }), n.d(e, "d", function() { return v }), n.d(e, "i", function() { return g }), n.d(e, "q", function() { return m }), n.d(e, "j", function() { return b }), n.d(e, "c", function() { return y }), n.d(e, "b", function() { return j }), n.d(e, "o", function() { return w }), n.d(e, "m", function() { return O }), n.d(e, "a", function() { return C });
    var r = navigator.userAgent;

    function i(t) { return null !== r.match(t) }

    function o(t) { return function() { return i(t) } }

    function u() { var t = C(); return !!(t && t >= 18) }
    var a = o(/gecko\//i),
        c = o(/trident\/.+rv:\s*11/i),
        s = o(/iP(hone|od)/i),
        l = o(/iPad/i),
        f = o(/Macintosh/i),
        d = o(/FBAV/i);

    function p() { return i(/\sEdge\/\d+/i) }

    function h() { return i(/msie/i) }

    function v() { return i(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !p() && !i(/UCBrowser/i) }

    function g() { return p() || c() || h() }

    function m() { return i(/safari/i) && !i(/(?:Chrome|CriOS|chromium|android|phantom)/i) }

    function b() { return i(/iP(hone|ad|od)/i) }

    function y() { return !(i(/chrome\/[123456789]/i) && !i(/chrome\/18/i) && !a()) && j() }

    function j() { return i(/Android/i) && !i(/Windows Phone/i) }

    function w() { return b() || j() || i(/Windows Phone/i) }

    function O() { try { return window.self !== window.top } catch (t) { return !0 } }

    function C() {
        if (j()) return 0;
        var t = navigator.plugins,
            e = void 0;
        if (t && (e = t["Shockwave Flash"]) && e.description) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) { try { if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, ".")) } catch (t) { return 0 } return e }
        return 0
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(6);

    function i(t, e) { if (t && t.length > e) return t[e] }
    var o = n(0);
    n.d(e, "Browser", function() { return a }), n.d(e, "OS", function() { return c }), n.d(e, "Features", function() { return s });
    var u = navigator.userAgent;
    var a = {},
        c = {},
        s = {};
    Object.defineProperties(a, {
        androidNative: { get: Object(o.C)(r.c), enumerable: !0 },
        chrome: { get: Object(o.C)(r.d), enumerable: !0 },
        edge: { get: Object(o.C)(r.e), enumerable: !0 },
        facebook: { get: Object(o.C)(r.g), enumerable: !0 },
        firefox: { get: Object(o.C)(r.f), enumerable: !0 },
        ie: { get: Object(o.C)(r.i), enumerable: !0 },
        msie: { get: Object(o.C)(r.n), enumerable: !0 },
        safari: { get: Object(o.C)(r.q), enumerable: !0 },
        version: {
            get: Object(o.C)(function(t, e) {
                var n = void 0,
                    r = void 0,
                    i = void 0,
                    o = void 0;
                return t.chrome ? n = -1 !== e.indexOf("Chrome") ? e.substring(e.indexOf("Chrome") + 7) : e.substring(e.indexOf("CriOS") + 6) : t.safari ? n = e.substring(e.indexOf("Version") + 8) : t.firefox ? n = e.substring(e.indexOf("Firefox") + 8) : t.edge ? n = e.substring(e.indexOf("Edge") + 5) : t.ie && (-1 !== e.indexOf("rv:") ? n = e.substring(e.indexOf("rv:") + 3) : -1 !== e.indexOf("MSIE") && (n = e.substring(e.indexOf("MSIE") + 5))), n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), { version: n, major: r, minor: i }
            }.bind(void 0, a, u)),
            enumerable: !0
        }
    }), Object.defineProperties(c, {
        android: { get: Object(o.C)(r.b), enumerable: !0 },
        iOS: { get: Object(o.C)(r.j), enumerable: !0 },
        mobile: { get: Object(o.C)(r.o), enumerable: !0 },
        mac: { get: Object(o.C)(r.p), enumerable: !0 },
        iPad: { get: Object(o.C)(r.k), enumerable: !0 },
        iPhone: { get: Object(o.C)(r.l), enumerable: !0 },
        windows: { get: Object(o.C)(function() { return u.indexOf("Windows") > -1 }), enumerable: !0 },
        version: {
            get: Object(o.C)(function(t, e) {
                var n = void 0,
                    r = void 0,
                    o = void 0;
                if (t.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(e), 1)) {
                    case "6.1":
                        n = "7.0";
                        break;
                    case "6.2":
                        n = "8.0";
                        break;
                    case "6.3":
                        n = "8.1"
                } else t.android ? n = i(/Android ([._\d]+)/.exec(e), 1) : t.iOS ? n = i(/OS ([._\d]+)/.exec(e), 1) : t.mac && (n = i(/Mac OS X (10[._\d]+)/.exec(e), 1));
                if (n) {
                    r = parseInt(n, 10);
                    var u = n.split(/[._]/);
                    u && (o = parseInt(u[1], 10))
                }
                return { version: n, major: r, minor: o }
            }.bind(void 0, c, u)),
            enumerable: !0
        }
    }), Object.defineProperties(s, {
        flash: { get: Object(o.C)(r.h), enumerable: !0 },
        flashVersion: { get: Object(o.C)(r.a), enumerable: !0 },
        iframe: { get: Object(o.C)(r.m), enumerable: !0 },
        passiveEvents: {
            get: Object(o.C)(function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", { get: function() { return t = !0 } });
                    window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
                } catch (t) {}
                return t
            }),
            enumerable: !0
        },
        backgroundLoading: { get: Object(o.C)(function() { return !(c.iOS || a.safari) }), enumerable: !0 }
    })
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return l }), n.d(e, "d", function() { return f }), n.d(e, "b", function() { return d }), n.d(e, "c", function() { return p });
    var r = n(28),
        i = n(29),
        o = n(15),
        u = n(14),
        a = n(38),
        c = n(1),
        s = null,
        l = {};

    function f(t) {
        return s || (s = function(t) {
            var e = t.get("controls"),
                s = h(),
                f = function(t, e) {
                    var n = t.get("playlist");
                    if (Array.isArray(n) && n.length)
                        for (var u = Object(i.c)(Object(r.a)(n[0]), t), a = 0; a < u.length; a++)
                            for (var c = u[a], s = t.getProviders(), l = 0; l < o.a.length; l++) { var f = o.a[l]; if (s.providerSupports(f, c)) return f.name === e }
                    return !1
                }(t, "html5");
            if (e && s && f) return function() { var t = n.e(8).then(function(t) { n(36); var e = n(20).default; return a.a.controls = n(21).default, Object(u.a)(n(128).default), e }.bind(null, n)).catch(d(c.t + 105)); return l.html5 = t, t }();
            if (e && f) return function() { var t = n.e(7).then(function(t) { var e = n(20).default; return a.a.controls = n(21).default, Object(u.a)(n(128).default), e }.bind(null, n)).catch(d(c.t + 104)); return l.html5 = t, t }();
            if (e && s) return n.e(6).then(function(t) { n(36); var e = n(20).default; return a.a.controls = n(21).default, e }.bind(null, n)).catch(d(c.t + 103));
            if (e) return n.e(5).then(function(t) { var e = n(20).default; return a.a.controls = n(21).default, e }.bind(null, n)).catch(d(c.t + 102));
            return (h() ? n.e(3).then(function(t) { return n(36) }.bind(null, n)).catch(d(c.t + 120)) : Promise.resolve()).then(function() { return n.e(4).then(function(t) { return n(20).default }.bind(null, n)).catch(d(c.t + 101)) })
        }(t)), s
    }

    function d(t, e) { return function() { throw new c.s(c.m, t, e) } }

    function p(t, e) { return function() { throw new c.s(null, t, e) } }

    function h() { var t = window.IntersectionObserverEntry; return !(t && "IntersectionObserver" in window && "intersectionRatio" in t.prototype) }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "exists", function() { return i }), n.d(e, "isHTTPS", function() { return o }), n.d(e, "isRtmp", function() { return u }), n.d(e, "isYouTube", function() { return a }), n.d(e, "typeOf", function() { return c }), n.d(e, "isDeepKeyCompliant", function() { return s });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };

    function i(t) {
        switch (void 0 === t ? "undefined" : r(t)) {
            case "string":
                return t.length > 0;
            case "object":
                return null !== t;
            case "undefined":
                return !1;
            default:
                return !0
        }
    }

    function o() { return "https:" === window.location.protocol }

    function u(t, e) { return 0 === t.indexOf("rtmp:") || "rtmp" === e }

    function a(t, e) { return "youtube" === e || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t) }

    function c(t) { if (null === t) return "null"; var e = void 0 === t ? "undefined" : r(t); return "object" === e && Array.isArray(t) ? "array" : e }

    function s(t, e, n) {
        var i = Object.keys(t);
        return Object.keys(e).length >= i.length && i.every(function(i) {
            var o = t[i],
                u = e[i];
            return o && "object" === (void 0 === o ? "undefined" : r(o)) ? !(!u || "object" !== (void 0 === u ? "undefined" : r(u))) && s(o, u, n) : n(i, t)
        })
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "h", function() { return o }), n.d(e, "e", function() { return u }), n.d(e, "o", function() { return a }), n.d(e, "d", function() { return l }), n.d(e, "a", function() { return f }), n.d(e, "l", function() { return d }), n.d(e, "m", function() { return p }), n.d(e, "p", function() { return h }), n.d(e, "n", function() { return v }), n.d(e, "g", function() { return g }), n.d(e, "b", function() { return m }), n.d(e, "f", function() { return b }), n.d(e, "c", function() { return y }), n.d(e, "j", function() { return j }), n.d(e, "i", function() { return w }), n.d(e, "k", function() { return O });
    var r = n(2),
        i = n(0);

    function o(t, e) { return t.classList.contains(e) }

    function u(t) { var e = document.createElement("div"); return e.innerHTML = t, e.firstChild }

    function a(t) { return t + (t.toString().indexOf("%") > 0 ? "" : "px") }

    function c(t) { return Object(i.x)(t.className) ? t.className.split(" ") : [] }

    function s(t, e) { e = Object(r.h)(e), t.className !== e && (t.className = e) }

    function l(t) { return t.classList ? t.classList : c(t) }

    function f(t, e) {
        var n = c(t);
        (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) { Object(i.e)(n, t) || n.push(t) }), s(t, n.join(" "))
    }

    function d(t, e) {
        var n = c(t),
            r = Array.isArray(e) ? e : e.split(" ");
        s(t, Object(i.h)(n, r).join(" "))
    }

    function p(t, e, n) {
        var r = t.className || "";
        e.test(r) ? r = r.replace(e, n) : n && (r += " " + n), s(t, r)
    }

    function h(t, e, n) {
        var r = o(t, e);
        (n = Object(i.r)(n) ? n : !r) !== r && (n ? f(t, e) : d(t, e))
    }

    function v(t, e, n) { t.setAttribute(e, n) }

    function g(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }

    function m(t) {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e)
    }

    function b(t) { t && g(t) }

    function y(t) {
        var e = { left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0 };
        if (!t || !document.body.contains(t)) return e;
        var n = t.getBoundingClientRect(),
            r = window.pageYOffset,
            i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (e.left = n.left + i, e.right = n.right + i, e.top = n.top + r, e.bottom = n.bottom + r, e.width = n.right - n.left, e.height = n.bottom - n.top, e) : e
    }

    function j(t, e) { t.insertBefore(e, t.firstChild) }

    function w(t) { return t.nextElementSibling }

    function O(t) { return t.previousElementSibling }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "getAbsolutePath", function() { return o }), n.d(e, "isAbsolutePath", function() { return u }), n.d(e, "parseXML", function() { return c }), n.d(e, "serialize", function() { return s }), n.d(e, "parseDimension", function() { return l }), n.d(e, "timeFormat", function() { return f });
    var r = n(9),
        i = n(0);

    function o(t, e) {
        if (Object(r.exists)(e) || (e = document.location.href), Object(r.exists)(t)) {
            if (u(t)) return t;
            var n = e.substring(0, e.indexOf("://") + 3),
                i = e.substring(n.length, e.indexOf("/", n.length + 1)),
                o = void 0;
            if (0 === t.indexOf("/")) o = t.split("/");
            else {
                var a = e.split("?")[0];
                o = (a = a.substring(n.length + i.length + 1, a.lastIndexOf("/"))).split("/").concat(t.split("/"))
            }
            for (var c = [], s = 0; s < o.length; s++) o[s] && Object(r.exists)(o[s]) && "." !== o[s] && (".." === o[s] ? c.pop() : c.push(o[s]));
            return n + i + "/" + c.join("/")
        }
    }

    function u(t) { return /^(?:(?:https?|file):)?\/\//.test(t) }

    function a(t) { return Object(i.b)(t, function(t) { return "parsererror" === t.nodeName }) }

    function c(t) {
        var e = null;
        try {
            (a((e = (new window.DOMParser).parseFromString(t, "text/xml")).childNodes) || e.childNodes && a(e.childNodes[0].childNodes)) && (e = null)
        } catch (t) {}
        return e
    }

    function s(t) { if (void 0 === t) return null; if ("string" == typeof t && t.length < 6) { var e = t.toLowerCase(); if ("true" === e) return !0; if ("false" === e) return !1; if (!Object(i.u)(Number(t)) && !Object(i.u)(parseFloat(t))) return Number(t) } return t }

    function l(t) { return "string" == typeof t ? "" === t ? 0 : t.lastIndexOf("%") > -1 ? t : parseInt(t.replace("px", ""), 10) : t }

    function f(t, e) {
        if (t <= 0 && !e || Object(i.u)(parseInt(t))) return "00:00";
        var n = t < 0 ? "-" : "";
        t = Math.abs(t);
        var r = Math.floor(t / 3600),
            o = Math.floor((t - 3600 * r) / 60),
            u = Math.floor(t % 60);
        return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() { return i }), n.d(e, "c", function() { return o }), n.d(e, "a", function() { return u });
    var r = n(0),
        i = function(t) { return t.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2") };

    function o(t) {
        var e = 305e3;
        if (!t) return e;
        switch (i(t)) {
            case "jwpsrv":
                e = 305001;
                break;
            case "googima":
                e = 305002;
                break;
            case "vast":
                e = 305003;
                break;
            case "freewheel":
                e = 305004;
                break;
            case "dai":
                e = 305005;
                break;
            case "gapro":
                e = 305006
        }
        return e
    }

    function u(t, e, n) {
        var i = t.name,
            o = document.createElement("div");
        o.id = n.id + "_" + i, o.className = "jw-plugin jw-reset";
        var u = Object(r.j)({}, e),
            a = t.getNewInstance(n, u, o);
        return n.addPlugin(i, a), a
    }
}, function(t, e, n) {
    "use strict";
    e.a = []
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return a });
    var r = n(34),
        i = n(15),
        o = n(55),
        u = n(0);

    function a(t) {
        var e = t.getName().name;
        if (!r.a[e]) {
            if (!Object(u.l)(i.a, Object(u.B)({ name: e }))) {
                if (!Object(u.t)(t.supports)) throw new Error("Tried to register a provider with an invalid object");
                i.a.unshift({ name: e, supports: t.supports })
            }
            Object(u.g)(t.prototype, o.a), r.a[e] = t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(32),
        i = n(7),
        o = n(17),
        u = n(0),
        a = n(9),
        c = n(37),
        s = Object(u.l)(r.a, Object(u.B)({ name: "html5" })),
        l = s.supports;

    function f(t) { var e = window.MediaSource; return Object(u.a)(t, function(t) { return !!e && !!e.isTypeSupported && e.isTypeSupported(t) }) }
    s.supports = function(t, e) { var n = l.apply(this, arguments); if (n && t.drm && "hls" === t.type) { var r = Object(o.a)(e)("drm"); if (r && t.drm.fairplay) { var i = window.WebKitMediaKeys; return i && i.isTypeSupported && i.isTypeSupported("com.apple.fps.1_0", "video/mp4") } return r } return n }, r.a.push({ name: "shaka", supports: function(t) { return !(t.drm && !Object(c.a)(t.drm)) && (!(!window.HTMLVideoElement || !window.MediaSource) && (f(t.mediaTypes) && ("dash" === t.type || "mpd" === t.type || (t.file || "").indexOf("mpd-time-csf") > -1))) } }), r.a.splice(0, 0, {
        name: "hlsjs",
        supports: function(t) {
            if (t.drm) return !1;
            var e = t.file.indexOf(".m3u8") > -1,
                n = "hls" === t.type || "m3u8" === t.type;
            if (!e && !n) return !1;
            var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major,
                o = i.OS.android && !1 === t.hlsjsdefault,
                u = i.Browser.safari && !!t.safarihlsjs;
            return f(t.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']) && (r || u) && !o
        }
    }), r.a.push({ name: "flash", supports: function(t) { if (!i.Features.flash || t.drm) return !1; var e = t.type; return "hls" === e || "m3u8" === e || !Object(a.isRtmp)(t.file, e) && ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(e) > -1 } }), e.a = r.a
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return r });
    var r = Date.now || function() { return (new Date).getTime() }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return h });
    var r = "free",
        i = "starter",
        o = "business",
        u = "premium",
        a = "enterprise",
        c = "developer",
        s = "platinum",
        l = "ads",
        f = "unlimited",
        d = "trial",
        p = "invalid";

    function h(t) { var e = { setup: [r, i, o, u, a, c, l, f, d, s], drm: [a, c, l, f, d], ads: [l, f, d, s, a, c], jwpsrv: [r, i, o, u, a, c, l, d, s, p], discovery: [l, a, c, d, f] }; return function(n) { return e[n] && e[n].indexOf(t) > -1 } }
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "getScriptPath", function() { return i }), n.d(e, "repo", function() { return o }), n.d(e, "versionCheck", function() { return u }), n.d(e, "loadFrom", function() { return a });
    var r = n(31),
        i = function(t) { for (var e = document.getElementsByTagName("script"), n = 0; n < e.length; n++) { var r = e[n].src; if (r) { var i = r.lastIndexOf("/" + t); if (i >= 0) return r.substr(0, i + 1) } } return "" },
        o = function() { var t = "//ssl.p.jwpcdn.com/player/v/8.6.3/"; return "" + ("file:" === window.location.protocol ? "https:" : "") + t },
        u = function(t) {
            var e = ("0" + t).split(/\W/),
                n = r.a.split(/\W/),
                i = parseFloat(e[0]),
                o = parseFloat(n[0]);
            return !(i > o) && !(i === o && parseFloat("0" + e[1]) > parseFloat(n[1]))
        },
        a = function() { return o() }
}, function(t, e, n) {
    "use strict";
    n.d(e, "d", function() { return p }), n.d(e, "b", function() { return h }), n.d(e, "e", function() { return g }), n.d(e, "g", function() { return b }), n.d(e, "c", function() { return y }), n.d(e, "f", function() { return j }), n.d(e, "h", function() { return w }), n.d(e, "a", function() { return O });
    var r = n(0),
        i = n(6),
        o = n(27),
        u = n(9),
        a = n(39),
        c = {},
        s = { zh: "Chinese", nl: "Dutch", en: "English", fr: "French", de: "German", it: "Italian", ja: "Japanese", pt: "Portuguese", ru: "Russian", es: "Spanish", el: "Greek" },
        l = Object(r.q)(s);

    function f(t) {
        var e = d(t),
            n = e.indexOf("_");
        return -1 === n ? e : e.substring(0, n)
    }

    function d(t) { return t.toLowerCase().replace("-", "_") }

    function p(t) { if (t) return 3 === t.length ? t : s[f(t)] || t }

    function h(t) { return l[t] || "" }

    function v(t) { var e = t.querySelector("html"); return e ? e.getAttribute("lang") : null }

    function g() {
        var t = v(document);
        if (!t && Object(i.m)()) try { t = v(window.top.document) } catch (t) {}
        return t || navigator.language || "en"
    }
    var m = ["ar", "da", "de", "es", "fr", "it", "ja", "nl", "no", "pt", "ro", "sv", "tr", "zh"];

    function b(t) { return m.indexOf(f(t)) >= 0 }

    function y(t, e, n) { return e = function(t) { return Object.keys(t).reduce(function(e, n) { return e[d(n)] = t[n], e }, {}) }(e), Object(r.j)({}, t, e[f(n)], e[d(n)]) }

    function j(t) { return Object(u.isDeepKeyCompliant)(a.a, t, function(t, e) { return "string" == typeof e[t] }) }

    function w(t, e) {
        var n = c[e];
        if (!n) {
            var r = t + "translations/" + f(e) + ".json";
            c[e] = n = new Promise(function(t, n) { Object(o.a)({ url: r, oncomplete: t, onerror: function(t, r, i, o) { c[e] = null, n(o) }, responseType: "json" }) })
        }
        return n
    }

    function O(t, e) { var n = Object(r.j)({}, t, e); return C(n, "errors", t, e), C(n, "related", t, e), C(n, "sharing", t, e), C(n, "advertising", t, e), n }

    function C(t, e, n, i) { t[e] = Object(r.j)({}, n[e], i[e]) }
}, , , function(t, e, n) {
    "use strict";
    e.a = { debug: !1 }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return a }), n.d(e, "b", function() { return c }), n.d(e, "d", function() { return s }), n.d(e, "e", function() { return d }), n.d(e, "c", function() { return h });
    var r = n(2),
        i = n(41),
        o = n.n(i),
        u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        a = o.a.clear;

    function c(t, e, n, r) {
        n = n || "all-players";
        var i = "";
        if ("object" === (void 0 === e ? "undefined" : u(e))) {
            var a = document.createElement("div");
            s(a, e);
            var c = a.style.cssText;
            Object.prototype.hasOwnProperty.call(e, "content") && c && (c = c + ' content: "' + e.content + '";'), r && c && (c = c.replace(/;/g, " !important;")), i = "{" + c + "}"
        } else "string" == typeof e && (i = e);
        "" !== i && "{}" !== i ? o.a.style([
            [t, t + i]
        ], n) : o.a.clear(n, t)
    }

    function s(t, e) {
        if (void 0 !== t && null !== t) {
            void 0 === t.length && (t = [t]);
            var n = void 0,
                r = {};
            for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = f(n, e[n]));
            for (var i = 0; i < t.length; i++) {
                var o = t[i],
                    u = void 0;
                if (void 0 !== o && null !== o)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
            }
        }
    }

    function l(t) { t = t.split("-"); for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].slice(1); return t.join("") }

    function f(t, e) { return "" === e || void 0 === e || null === e ? "" : "string" == typeof e && isNaN(e) ? /png|gif|jpe?g/i.test(e) && e.indexOf("url") < 0 ? "url(" + e + ")" : e : 0 === e || "z-index" === t || "opacity" === t ? "" + e : /color/i.test(t) ? "#" + Object(r.d)(e.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(e) + "px" }

    function d(t, e) { s(t, { transform: e, webkitTransform: e, msTransform: e, mozTransform: e, oTransform: e }) }
    var p = void 0;

    function h(t, e) {
        var n = "rgb",
            r = void 0 !== e && 100 !== e;
        if (r && (n += "a"), !p) {
            var i = document.createElement("canvas");
            i.height = 1, i.width = 1, p = i.getContext("2d")
        }
        t ? isNaN(parseInt(t, 16)) || (t = "#" + t) : t = "#000000", p.clearRect(0, 0, 1, 1), p.fillStyle = t, p.fillRect(0, 0, 1, 1);
        var o = p.getImageData(0, 0, 1, 1).data;
        return n += "(" + o[0] + ", " + o[1] + ", " + o[2], r && (n += ", " + e / 100), n + ")"
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(5),
        o = n(3),
        u = {},
        a = 45e3,
        c = 2,
        s = 3;

    function l(t) { var e = document.createElement("link"); return e.type = "text/css", e.rel = "stylesheet", e.href = t, e }

    function f(t) { var e = document.createElement("script"); return e.type = "text/javascript", e.charset = "utf-8", e.async = !0, e.timeout = a, e.src = t, e }
    var d = function(t, e) {
        var n = this,
            r = 0;

        function i(t) { r = c, n.trigger(o.w, t).off() }

        function d(t) { r = s, n.trigger(o.Ka, t).off() }
        this.getStatus = function() { return r }, this.load = function() {
            var n = u[t];
            return 0 !== r ? n : (n && n.then(d).catch(i), r = 1, n = new Promise(function(n, r) {
                var o = (e ? l : f)(t),
                    u = function() { o.onerror = o.onload = null, clearTimeout(s) },
                    c = function(t) { u(), i(t), r(t) },
                    s = setTimeout(function() { c(new Error("Network timeout " + t)) }, a);
                o.onerror = function() { c(new Error("Failed to load " + t)) }, o.onload = function(t) { u(), d(t), n(t) };
                var p = document.getElementsByTagName("head")[0] || document.documentElement;
                p.insertBefore(o, p.firstChild)
            }), u[t] = n, n)
        }
    };
    Object(r.j)(d.prototype, i.a), e.a = d
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(12),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        u = function() { this.load = function(t, e, n, u) { return n && "object" === (void 0 === n ? "undefined" : o(n)) ? Promise.all(Object.keys(n).filter(function(t) { return t }).map(function(o) { var a = n[o]; return e.setupPlugin(o).then(function(e) { if (!u.attributes._destroyed) return Object(i.a)(e, a, t) }).catch(function(t) { return e.removePlugin(o), t.code ? t : new r.s(null, Object(i.c)(o), t) }) })) : Promise.resolve() } },
        a = n(48),
        c = n(47),
        s = {},
        l = function() {},
        f = l.prototype;
    f.setupPlugin = function(t) { var e = this.getPlugin(t); return e ? (e.url !== t && Object(c.a)('JW Plugin "' + Object(i.b)(t) + '" already loaded from "' + e.url + '". Ignoring "' + t + '."'), e.promise) : this.addPlugin(t).load() }, f.addPlugin = function(t) {
        var e = Object(i.b)(t),
            n = s[e];
        return n || (n = new a.a(t), s[e] = n), n
    }, f.getPlugin = function(t) { return s[Object(i.b)(t)] }, f.removePlugin = function(t) { delete s[Object(i.b)(t)] }, f.getPlugins = function() { return s };
    var d = l;
    n.d(e, "b", function() { return h }), n.d(e, "a", function() { return v });
    var p = new d,
        h = function(t, e, n) {
            var r = p.addPlugin(t);
            r.js || r.registerPlugin(t, e, n)
        };

    function v(t, e) { var n = t.get("plugins"); return window.jwplayerPluginJsonp = h, (t.pluginLoader = t.pluginLoader || new u).load(e, p, n, t).then(function(e) { if (!t.attributes._destroyed) return delete window.jwplayerPluginJsonp, e }) }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return a });
    var r = n(46),
        i = n(17),
        o = n(44),
        u = n(1),
        a = 100013;
    e.b = function(t) {
        var e = void 0,
            n = void 0,
            c = void 0;
        try {
            var s = Object(r.a)(t || "", Object(o.a)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
            if ("pro" === (e = s[0]) && (e = "premium"), Object(i.a)(e)("setup") || (e = "invalid"), s.length > 2) {
                n = s[1];
                var l = parseInt(s[2]);
                l > 0 && (c = new Date).setTime(l)
            }
        } catch (t) { e = "invalid" }
        this.edition = function() { return e }, this.token = function() { return n }, this.expiration = function() { return c }, this.duration = function() { return c ? c.getTime() - (new Date).getTime() : 0 }, this.error = function() { var r = void 0; return void 0 === t ? r = 100011 : "invalid" !== e && n ? this.duration() < 0 && (r = a) : r = 100012, r ? new u.s(u.m, r) : null }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return g });
    var r = n(0),
        i = n(11),
        o = n(1),
        u = 1,
        a = 2,
        c = 3,
        s = 4,
        l = 5,
        f = 6,
        d = 601,
        p = 602,
        h = 611,
        v = function() {};

    function g(t, e, n, d) {
        t === Object(t) && (t = (d = t).url);
        var j = void 0,
            w = Object(r.j)({ xhr: null, url: t, withCredentials: !1, retryWithoutCredentials: !1, timeout: 6e4, timeoutId: -1, oncomplete: e || v, onerror: n || v, mimeType: d && !d.responseType ? "text/xml" : "", requireValidXML: !1, responseType: d && d.plainText ? "text" : "", useDomParser: !1, requestFilter: null }, d),
            O = function(t, e) {
                return function(t, n) {
                    var i = t.currentTarget || e.xhr;
                    if (clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials) {
                        m(i);
                        var u = Object(r.j)({}, e, { xhr: null, withCredentials: !1, retryWithoutCredentials: !1 });
                        g(u)
                    } else !n && i.status >= 400 && i.status < 600 && (n = i.status), b(e, n ? o.o : o.r, n || f, t)
                }
            }(0, w);
        if ("XMLHttpRequest" in window) {
            if (j = w.xhr = w.xhr || new window.XMLHttpRequest, "function" == typeof w.requestFilter) {
                var C = void 0;
                try { C = w.requestFilter({ url: t, xhr: j }) } catch (t) { return O(t, l), j }
                C && "open" in C && "send" in C && (j = w.xhr = C)
            }
            j.onreadystatechange = function(t) {
                return function(e) {
                    var n = e.currentTarget || t.xhr;
                    if (4 === n.readyState) {
                        if (clearTimeout(t.timeoutId), n.status >= 400) return void b(t, o.o, n.status < 600 ? n.status : f);
                        if (200 === n.status) return function(t) {
                            return function(e) {
                                var n = e.currentTarget || t.xhr;
                                if (clearTimeout(t.timeoutId), t.responseType) {
                                    if ("json" === t.responseType) return function(t, e) {
                                        if (!t.response || "string" == typeof t.response && '"' !== t.responseText.substr(1)) try { t = Object(r.j)({}, t, { response: JSON.parse(t.responseText) }) } catch (t) { return void b(e, o.o, h, t) }
                                        return e.oncomplete(t)
                                    }(n, t)
                                } else {
                                    var u = n.responseXML,
                                        a = void 0;
                                    if (u) try { a = u.firstChild } catch (t) {}
                                    if (u && a) return y(n, u, t);
                                    if (t.useDomParser && n.responseText && !u && (u = Object(i.parseXML)(n.responseText)) && u.firstChild) return y(n, u, t);
                                    if (t.requireValidXML) return void b(t, o.o, p)
                                }
                                t.oncomplete(n)
                            }
                        }(t)(e)
                    }
                }
            }(w), j.onerror = O, "overrideMimeType" in j ? w.mimeType && j.overrideMimeType(w.mimeType) : w.useDomParser = !0;
            try { t = t.replace(/#.*$/, ""), j.open("GET", t, !0) } catch (t) { return O(t, c), j }
            if (w.responseType) try { j.responseType = w.responseType } catch (t) {}
            w.timeout && (w.timeoutId = setTimeout(function() { m(j), b(w, o.r, u) }, w.timeout), j.onabort = function() { clearTimeout(w.timeoutId) });
            try { w.withCredentials && "withCredentials" in j && (j.withCredentials = !0), j.send() } catch (t) { O(t, s) }
            return j
        }
        b(w, o.r, a)
    }

    function m(t) { t.onload = null, t.onprogress = null, t.onreadystatechange = null, t.onerror = null, "abort" in t && t.abort() }

    function b(t, e, n, r) { t.onerror(e, t.url, t.xhr, new o.s(e, n, r)) }

    function y(t, e, n) {
        var i = e.documentElement;
        if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return t.responseXML || (t = Object(r.j)({}, t, { responseXML: e })), n.oncomplete(t);
        b(n, o.o, d)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(33),
        o = function(t) { if (t && t.file) return Object(r.j)({}, { kind: "captions", default: !1 }, t) },
        u = Array.isArray;
    e.a = function(t) {
        u((t = t || {}).tracks) || delete t.tracks;
        var e = Object(r.j)({}, { sources: [], tracks: [], minDvrWindow: 120, dvrSeekLimit: 25 }, t);
        e.dvrSeekLimit < 5 && (e.dvrSeekLimit = 5), e.sources !== Object(e.sources) || u(e.sources) || (e.sources = [Object(i.a)(e.sources)]), u(e.sources) && 0 !== e.sources.length || (t.levels ? e.sources = t.levels : e.sources = [Object(i.a)(t)]);
        for (var n = 0; n < e.sources.length; n++) {
            var a = e.sources[n];
            if (a) {
                var c = a.default;
                a.default = !!c && "true" === c.toString(), e.sources[n].label || (e.sources[n].label = n.toString()), e.sources[n] = Object(i.a)(e.sources[n])
            }
        }
        return e.sources = e.sources.filter(function(t) { return !!t }), u(e.tracks) || (e.tracks = []), u(e.captions) && (e.tracks = e.tracks.concat(e.captions), delete e.captions), e.tracks = e.tracks.map(o).filter(function(t) { return !!t }), e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = { none: !0, metadata: !0, auto: !0 };

    function o(t, e) { return i[t] ? t : i[e] ? e : "metadata" }
    var u = n(28),
        a = n(33),
        c = n(42),
        s = n(1);
    n.d(e, "b", function() { return l }), n.d(e, "e", function() { return f }), n.d(e, "d", function() { return d }), n.d(e, "c", function() { return p });

    function l(t, e, n) { return delete Object(r.j)({}, n).playlist, t.map(function(t) { return d(e, t, n) }).filter(function(t) { return !!t }) }

    function f(t) { if (!Array.isArray(t) || 0 === t.length) throw new s.s(s.o, 630) }

    function d(t, e, n) {
        var i = t.getProviders(),
            u = t.get("preload"),
            a = Object(r.j)({}, e);
        if (a.preload = o(e.preload, u), a.allSources = h(e, t), a.sources = v(a.allSources, i), a.sources.length) return a.file = a.sources[0].file, a.feedData = n, a
    }
    var p = function(t, e) { return v(h(t, e), e.getProviders()) };

    function h(t, e) {
        var n = e.attributes,
            r = t.sources,
            i = t.allSources,
            u = t.preload,
            c = t.drm,
            s = g(t.withCredentials, n.withCredentials);
        return (i || r).map(function(t) {
            if (t !== Object(t)) return null;
            m(t, n, "androidhls"), m(t, n, "hlsjsdefault"), m(t, n, "safarihlsjs"), t.preload = o(t.preload, u);
            var e = t.drm || c || n.drm;
            e && (t.drm = e);
            var r = g(t.withCredentials, s);
            return void 0 !== r && (t.withCredentials = r), Object(a.a)(t)
        }).filter(function(t) { return !!t })
    }

    function v(t, e) {
        e && e.choose || (e = new c.a);
        var n = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = e.choose(r),
                    o = i.providerToCheck;
                if (o) return { type: r.type, provider: o }
            }
            return null
        }(t, e);
        if (!n) return [];
        var r = n.provider,
            i = n.type;
        return t.filter(function(t) { return t.type === i && e.providerSupports(r, t) })
    }

    function g(t, e) { return void 0 === t ? e : t }

    function m(t, e, n) { n in e && (t[n] = e[n]) }
    e.a = function(t) { return (Array.isArray(t) ? t : [t]).map(u.a) }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(16),
        o = window.performance || { timing: {} },
        u = o.timing.navigationStart || Object(i.a)();

    function a() { return u + o.now() }
    "now" in o || (o.now = function() { return Object(i.a)() - u });
    e.a = function() {
        var t = {},
            e = {},
            n = {},
            i = {};
        return {
            start: function(e) { t[e] = a(), n[e] = n[e] + 1 || 1 },
            end: function(n) {
                if (t[n]) {
                    var r = a() - t[n];
                    delete t[n], e[n] = e[n] + r || r
                }
            },
            dump: function() {
                var o = Object(r.j)({}, e);
                for (var u in t)
                    if (Object.prototype.hasOwnProperty.call(t, u)) {
                        var c = a() - t[u];
                        o[u] = o[u] + c || c
                    }
                return { counts: Object(r.j)({}, n), sums: o, events: Object(r.j)({}, i) }
            },
            tick: function(t) { i[t] = a() },
            clear: function(t) { delete i[t] },
            between: function(t, e) { return i[e] && i[t] ? i[e] - i[t] : null }
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return r });
    var r = "8.6.3+commercial_v8-6-3.296.commercial.e487997.hlsjs..jwplayer.fed47a0.dai.f0547f4.freewheel.c703482.googima.1978508.vast.7fd4f53.analytics.0a43e0e.gapro.f664e4e.related.3e21944"
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() { return c });
    var r = n(59),
        i = n(9),
        o = n(40),
        u = { aac: "audio/mp4", mp4: "video/mp4", f4v: "video/mp4", m4v: "video/mp4", mov: "video/mp4", mp3: "audio/mpeg", mpeg: "audio/mpeg", ogv: "video/ogg", ogg: "video/ogg", oga: "video/ogg", vorbis: "video/ogg", webm: "video/webm", f4a: "video/aac", m3u8: "application/vnd.apple.mpegurl", m3u: "application/vnd.apple.mpegurl", hls: "application/vnd.apple.mpegurl" },
        a = [{ name: "html5", supports: c }];

    function c(t) {
        if (!1 === Object(r.a)(t)) return !1;
        if (!o.a.canPlayType) return !1;
        var e = t.file,
            n = t.type;
        if (Object(i.isRtmp)(e, n)) return !1;
        var a = t.mimeType || u[n];
        if (!a) return !1;
        var c = t.mediaTypes;
        return c && c.length && (a = [a].concat(c.slice()).join("; ")), !!o.a.canPlayType(a)
    }
    e.a = a
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(9),
        o = n(2);
    e.a = function(t) {
        if (t && t.file) {
            var e = Object(r.j)({}, { default: !1 }, t);
            e.file = Object(o.h)("" + e.file);
            var n = /^[^/]+\/(?:x-)?([^/]+)$/;
            if (n.test(e.type) && (e.mimeType = e.type, e.type = e.type.replace(n, "$1")), Object(i.isYouTube)(e.file) ? e.type = "youtube" : Object(i.isRtmp)(e.file) ? e.type = "rtmp" : e.type || (e.type = Object(o.a)(e.file)), e.type) {
                switch (e.type) {
                    case "m3u8":
                    case "vnd.apple.mpegurl":
                        e.type = "hls";
                        break;
                    case "dash+xml":
                        e.type = "dash";
                        break;
                    case "m4a":
                        e.type = "aac";
                        break;
                    case "smil":
                        e.type = "rtmp"
                }
                return Object.keys(e).forEach(function(t) { "" === e[t] && delete e[t] }), e
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    e.a = {}
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() { return x });
    var r = n(7),
        i = n(3),
        o = n(51),
        u = n(16),
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
        c = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
        }(),
        s = function t(e, n, r) { null === e && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, n); if (void 0 === i) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : t(o, n, r) } if ("value" in i) return i.value; var u = i.get; return void 0 !== u ? u.call(r) : void 0 };
    var l = "ontouchstart" in window,
        f = "PointerEvent" in window && !r.OS.android,
        d = !(f || l && r.OS.mobile),
        p = "window",
        h = r.Features.passiveEvents,
        v = !!h && { passive: !0 },
        g = 6,
        m = 300,
        b = 500,
        y = void 0,
        j = function(t) {
            function e(t, n) {
                ! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e);
                var r = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)),
                    i = !(n = n || {}).preventScrolling;
                return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleTap = !1, r.el = t, r.handlers = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId = null, r.startX = 0, r.startY = 0, r
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(e, o["a"]), c(e, [{ key: "on", value: function(t, n, r) { return O(t) && (this.handlers[t] || k[t](this)), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "on", this).call(this, t, n, r) } }, {
                key: "off",
                value: function(t, n, r) {
                    var i = this;
                    if (O(t)) S(this, t);
                    else if (!t) {
                        var o = this.handlers;
                        Object.keys(o).forEach(function(t) { S(i, t) })
                    }
                    return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "off", this).call(this, t, n, r)
                }
            }, { key: "destroy", value: function() { this.off(), f && T(this), this.el = null } }]), e
        }();
    e.a = j;
    var w = /\s+/;

    function O(t) { return t && !(w.test(t) || "object" === (void 0 === t ? "undefined" : a(t))) }

    function C(t) {
        if (!t.handlers.init) {
            var e = t.el,
                n = t.passive,
                r = !!h && { passive: n },
                o = function(i) {
                    if (! function(t) { if ("which" in t) return 3 === t.which; if ("button" in t) return 2 === t.button; return !1 }(i)) {
                        var o = i.target,
                            s = i.type;
                        if (!t.directSelect || o === e) {
                            var l = A(i),
                                f = l.pageX,
                                d = l.pageY;
                            if (t.dragged = !1, t.lastStart = Object(u.a)(), t.startX = f, t.startY = d, S(t, p), "pointerdown" === s && i.isPrimary) {
                                if (!n) {
                                    var h = i.pointerId;
                                    t.pointerId = h, e.setPointerCapture(h)
                                }
                                P(t, p, "pointermove", a, r), P(t, p, "pointercancel", c), P(t, p, "pointerup", c)
                            } else "mousedown" === s ? (P(t, p, "mousemove", a, r), P(t, p, "mouseup", c)) : "touchstart" === s && (P(t, p, "touchmove", a, r), P(t, p, "touchcancel", c), P(t, p, "touchend", c), n || N(i))
                        }
                    }
                },
                a = function(e) {
                    if (t.dragged) _(t, i.s, e);
                    else {
                        var r = A(e),
                            o = r.pageX,
                            u = r.pageY,
                            a = o - t.startX,
                            c = u - t.startY;
                        a * a + c * c > g * g && (_(t, i.u, e), t.dragged = !0, _(t, i.s, e))
                    }
                    n || "touchmove" !== e.type || N(e)
                },
                c = function(n) {
                    if (clearTimeout(y), T(t), S(t, p), t.dragged) t.dragged = !1, _(t, i.t, n);
                    else if (-1 === n.type.indexOf("cancel") && e.contains(n.target)) {
                        if (Object(u.a)() - t.lastStart > b) return;
                        var r = "pointerup" === n.type || "pointercancel" === n.type,
                            o = "mouseup" === n.type || r && "mouse" === n.pointerType;
                        ! function(t, e, n) {
                            if (t.enableDoubleTap)
                                if (Object(u.a)() - t.lastClick < m) {
                                    var r = n ? i.q : i.r;
                                    _(t, r, e), t.lastClick = 0
                                } else t.lastClick = Object(u.a)()
                        }(t, n, o), o ? _(t, i.n, n) : (_(t, i.Ra, n), "touchend" !== n.type || h || N(n))
                    }
                };
            f ? P(t, "init", "pointerdown", o, r) : (d && P(t, "init", "mousedown", o, r), P(t, "init", "touchstart", o, r))
        }
    }
    var k = {
        drag: function(t) { C(t) },
        dragStart: function(t) { C(t) },
        dragEnd: function(t) { C(t) },
        click: function(t) { C(t) },
        tap: function(t) { C(t) },
        doubleTap: function(t) { t.enableDoubleTap = !0, C(t) },
        doubleClick: function(t) { t.enableDoubleTap = !0, C(t) },
        longPress: function(t) {
            if (r.OS.iOS) {
                var e = function() { clearTimeout(y) };
                P(t, "longPress", "touchstart", function(n) { e(), y = setTimeout(function() { _(t, "longPress", n) }, b) }), P(t, "longPress", "touchmove", e), P(t, "longPress", "touchcancel", e), P(t, "longPress", "touchend", e)
            } else t.el.oncontextmenu = function(e) { return _(t, "longPress", e), !1 }
        },
        focus: function(t) { P(t, "focus", "focus", function(e) { E(t, "focus", e) }) },
        blur: function(t) { P(t, "blur", "blur", function(e) { E(t, "blur", e) }) },
        over: function(t) {
            (f || d) && P(t, i.Y, f ? "pointerover" : "mouseover", function(e) { "touch" !== e.pointerType && _(t, i.Y, e) })
        },
        out: function(t) {
            if (f) {
                var e = t.el;
                P(t, i.X, "pointerout", function(n) {
                    if ("touch" !== n.pointerType && "x" in n) {
                        var r = document.elementFromPoint(n.x, n.y);
                        e.contains(r) || _(t, i.X, n)
                    }
                })
            } else d && P(t, i.X, "mouseout", function(e) { _(t, i.X, e) })
        },
        move: function(t) {
            (f || d) && P(t, i.V, f ? "pointermove" : "mousemove", function(e) { "touch" !== e.pointerType && _(t, i.V, e) })
        },
        enter: function(t) { P(t, i.v, "keydown", function(e) { "Enter" !== e.key && 13 !== e.keyCode || (e.stopPropagation(), E(t, i.v, e)) }) },
        gesture: function(t) {
            var e = function(e) { return _(t, "gesture", e) };
            P(t, "gesture", "click", e), P(t, "gesture", "keydown", e)
        }
    };

    function x(t) { var e = t.ownerDocument || t; return e.defaultView || e.parentWindow || window }

    function P(t, e, n, r, i) {
        var o = t.handlers[e];
        if (o || (o = t.handlers[e] = {}), o[n]) throw new Error(e + " " + n + " already registered");
        o[n] = r;
        var u = t.el;
        (e === p ? x(u) : u).addEventListener(n, r, i || v)
    }

    function S(t, e) {
        var n = t.el,
            r = t.handlers,
            i = e === p ? x(n) : n,
            o = r[e];
        o && (Object.keys(o).forEach(function(t) { i.removeEventListener(t, o[t]) }), r[e] = null)
    }

    function T(t) {
        var e = t.el;
        null !== t.pointerId && (e.releasePointerCapture(t.pointerId), t.pointerId = null)
    }

    function E(t, e, n) {
        var r = t.el,
            i = n.target;
        t.trigger(e, { type: e, sourceEvent: n, currentTarget: r, target: i })
    }

    function _(t, e, n) {
        var r = function(t, e, n) {
            var r = e.target,
                i = e.touches,
                o = e.changedTouches,
                u = e.pointerType,
                a = void 0;
            i || o ? (a = i && i.length ? i[0] : o[0], u = u || "touch") : (a = e, u = u || "mouse");
            var c = a,
                s = c.pageX,
                l = c.pageY;
            return { type: t, pointerType: u, pageX: s, pageY: l, sourceEvent: e, currentTarget: n, target: r }
        }(e, n, t.el);
        t.trigger(e, r)
    }

    function A(t) { return 0 === t.type.indexOf("touch") ? (t.originalEvent || t).changedTouches[0] : t }

    function N(t) { t.preventDefault && t.preventDefault() }
}, , function(t, e, n) {
    "use strict";
    n.d(e, "b", function() { return c }), n.d(e, "d", function() { return s }), n.d(e, "c", function() { return l }), n.d(e, "a", function() { return f });
    var r = n(17),
        i = [{ configName: "clearkey", keyName: "org.w3.clearkey" }, { configName: "widevine", keyName: "com.widevine.alpha" }, { configName: "playready", keyName: "com.microsoft.playready" }],
        o = [],
        u = {},
        a = void 0;

    function c(t) { return t.some(function(t) { return !!t.drm || t.sources.some(function(t) { return !!t.drm }) }) }

    function s(t) {
        return a || ((navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(r.a)(t)("drm") ? (i.forEach(function(t) {
            var e = function(t, e) {
                return navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(t, e) : new Promise(function(e, n) {
                    var r = void 0;
                    try { r = new window.MSMediaKeys(t) } catch (t) { return void n(t) }
                    e(r)
                })
            }(t.keyName, [{ initDataTypes: ["cenc"], videoCapabilities: [{ contentType: 'video/mp4;codecs="avc1.4d401e"' }], audioCapabilities: [{ contentType: 'audio/mp4;codecs="mp4a.40.2"' }] }]).then(function() { u[t.configName] = !0 }).catch(function() { u[t.configName] = !1 });
            o.push(e)
        }), a = Promise.all(o)) : Promise.resolve())
    }

    function l(t) { return u[t] }

    function f(t) { if (a) return Object.keys(t).some(function(t) { return l(t) }) }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return o }), n.d(e, "b", function() { return u });
    var r = n(8),
        i = null,
        o = {};

    function u() { return i || (i = n.e(2).then(function(t) { var e = n(21).default; return o.controls = e, e }.bind(null, n)).catch(function() { i = null, Object(r.c)(301130)() })), i }
}, function(t, e, n) {
    "use strict";
    e.a = { advertising: { admessage: "This ad will end in xx", cuetext: "Advertisement", loadingAd: "Loading ad", podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ", skipmessage: "Skip ad in xx", skiptext: "Skip", displayHeading: "Advertisement" }, airplay: "AirPlay", audioTracks: "Audio Tracks", auto: "Auto", buffer: "Loading", cast: "Chromecast", cc: "Closed Captions", close: "Close", errors: { badConnection: "Không thể phát video này do sự cố với kết nối Internet của bạn.", cantLoadPlayer: "Xin lỗi, trình phát video không tải được.", cantPlayInBrowser: "Không thể phát video trong trình duyệt này.", cantPlayVideo: "Không thể phát tệp video này.", errorCode: "Error Code", liveStreamDown: "Luồng trực tiếp bị gián đoạn hoặc đã kết thúc.", protectedContent: "Đã xảy ra sự cố khi cung cấp quyền truy cập vào nội dung được bảo vệ.", technicalError: "Không thể phát video này do lỗi kỹ thuật." }, fullscreen: "Toàn Màn Hình", hd: "Chất Lượng", liveBroadcast: "Live", logo: "Logo", next: "Next", nextUp: "Next Up", notLive: "Not Live", off: "Off", pause: "Pause", play: "Play", playback: "Play", playbackRates: "Playback Rates", player: "Video Player", playlist: "Playlist", poweredBy: "Trình Phát :", prev: "Previous", related: { autoplaymessage: "Next up in xx", heading: "More Videos" }, replay: "Replay", rewind: "Tua lui 10 giây", forward: "Tua tới 10 giây", settings: "Cài Đặt", sharing: { copied: "Copied", email: "Email", embed: "Embed", heading: "Share", link: "Link" }, slider: "Seek Slider", stop: "Stop", videoInfo: "Thông Tin Video", volume: "Volume", volumeSlider: "Volume Slider" }
}, function(t, e, n) {
    "use strict";
    var r = document.createElement("video");
    e.a = r
}, function(t, e) {
    var n = {},
        r = {},
        i = function(t) { var e; return function() { return void 0 === e && (e = t.apply(this, arguments)), e } }(function() { return document.head || document.getElementsByTagName("head")[0] });

    function o(t) {
        var e = document.createElement("style");
        return e.type = "text/css", e.setAttribute("data-jwplayer-id", t),
            function(t) { i().appendChild(t) }(e), e
    }

    function u(t, e) {
        var n, i, u, a = r[t];
        a || (a = r[t] = { element: o(t), counter: 0 });
        var s = a.counter++;
        return n = a.element, u = function() { c(n, s, "") }, (i = function(t) { c(n, s, t) })(e.css),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media) return;
                    i((e = t).css)
                } else u()
            }
    }
    t.exports = {
        style: function(t, e) {
            ! function(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r],
                        o = (n[t] || {})[i.id];
                    if (o) { for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]); for (; a < i.parts.length; a++) o.parts.push(u(t, i.parts[a])) } else {
                        for (var c = [], a = 0; a < i.parts.length; a++) c.push(u(t, i.parts[a]));
                        n[t] = n[t] || {}, n[t][i.id] = { id: i.id, parts: c }
                    }
                }
            }(e, function(t) {
                for (var e = [], n = {}, r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = i[0],
                        u = i[1],
                        a = i[2],
                        c = { css: u, media: a };
                    n[o] ? n[o].parts.push(c) : e.push(n[o] = { id: o, parts: [c] })
                }
                return e
            }(t))
        },
        clear: function(t, e) {
            var r = n[t];
            if (!r) return;
            if (e) {
                var i = r[e];
                if (i)
                    for (var o = 0; o < i.parts.length; o += 1) i.parts[o]();
                return
            }
            for (var u = Object.keys(r), a = 0; a < u.length; a += 1)
                for (var c = r[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
            delete n[t]
        }
    };
    var a = function() { var t = []; return function(e, n) { return t[e] = n, t.filter(Boolean).join("\n") } }();

    function c(t, e, n) {
        if (t.styleSheet) t.styleSheet.cssText = a(e, n);
        else {
            var r = document.createTextNode(n),
                i = t.childNodes[e];
            i ? t.replaceChild(r, i) : t.appendChild(r)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(15),
        o = n(14),
        u = n(34),
        a = n(8);

    function c(t) { this.config = t || {} }
    var s = { html5: function() { return n.e(1).then(function(t) { var e = n(128).default; return Object(o.a)(e), e }.bind(null, n)).catch(Object(a.b)(152)) } };
    Object(r.j)(c.prototype, {
        load: function(t) {
            var e = s[t],
                n = function() { return Promise.reject(new Error("Failed to load media")) };
            return e ? e().then(function() { var e = u.a[t]; return e || n() }) : n()
        },
        providerSupports: function(t, e) { return t.supports(e) },
        choose: function(t) {
            if (t === Object(t))
                for (var e = i.a.length, n = 0; n < e; n++) { var r = i.a[n]; if (this.providerSupports(r, t)) return { priority: e - n - 1, name: r.name, type: t.type, providerToCheck: r, provider: u.a[r.name] } }
            return {}
        }
    });
    var l = c,
        f = void 0;
    Object(r.j)(s, { shaka: function() { return n.e(11).then(function(t) { var e = n(147).default; return Object(o.a)(e), e }.bind(null, n)).catch(Object(a.b)(154)) }, hlsjs: function() { return n.e(10).then(function(t) { var e = n(148).default; return e.setEdition && e.setEdition(f), Object(o.a)(e), e }.bind(null, n)).catch(Object(a.b)(153)) }, flash: function() { return n.e(9).then(function(t) { var e = n(145).default; return Object(o.a)(e), e }.bind(null, n)).catch(Object(a.b)(151)) } }), l.prototype.providerSupports = function(t, e) { return f = this.config.edition, t.supports(e, f) };
    e.a = l
}, function(t, e, n) {
    "use strict";
    var r = function(t, e, n, r) { var i = r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : ""; return '<div id="' + t + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + t + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + t + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + t + '"] .jw-error-text{color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset">' + (e || "") + '<span class="jw-break jw-reset"></span>' + i + "</div></div></div></div>" },
        i = n(10),
        o = n(23);

    function u(t, e) {
        var n = e.message,
            u = e.code,
            a = r(t.get("id"), n, t.get("localization").errors.errorCode, u),
            c = t.get("width"),
            s = t.get("height"),
            l = Object(i.e)(a);
        return Object(o.d)(l, { width: c.toString().indexOf("%") > 0 ? c : c + "px", height: s.toString().indexOf("%") > 0 ? s : s + "px" }), l
    }
    n.d(e, "a", function() { return u })
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return r });
    var r = window.atob
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(2);

    function o(t) { for (var e = [], n = 0; n < Object(r.c)(t); n++) { var i = t.childNodes[n]; "jwplayer" === i.prefix && "mediatypes" === Object(r.b)(i).toLowerCase() && e.push(Object(r.d)(i)) } return e }
    var u = function t(e, n) {
            var u = [];

            function a(t) { var e = { zh: "Chinese", nl: "Dutch", en: "English", fr: "French", de: "German", it: "Italian", ja: "Japanese", pt: "Portuguese", ru: "Russian", es: "Spanish" }; return e[t] ? e[t] : t }
            for (var c = 0; c < Object(r.c)(e); c++) {
                var s = e.childNodes[c];
                if ("media" === s.prefix) {
                    if (!Object(r.b)(s)) continue;
                    switch (Object(r.b)(s).toLowerCase()) {
                        case "content":
                            if (Object(i.i)(s, "duration") && (n.duration = Object(i.f)(Object(i.i)(s, "duration"))), Object(i.i)(s, "url")) {
                                n.sources || (n.sources = []);
                                var l = { file: Object(i.i)(s, "url"), type: Object(i.i)(s, "type"), width: Object(i.i)(s, "width"), label: Object(i.i)(s, "label") },
                                    f = o(s);
                                f.length && (l.mediaTypes = f), n.sources.push(l)
                            }
                            Object(r.c)(s) > 0 && (n = t(s, n));
                            break;
                        case "title":
                            n.title = Object(r.d)(s);
                            break;
                        case "description":
                            n.description = Object(r.d)(s);
                            break;
                        case "guid":
                            n.mediaid = Object(r.d)(s);
                            break;
                        case "thumbnail":
                            n.image || (n.image = Object(i.i)(s, "url"));
                            break;
                        case "group":
                            t(s, n);
                            break;
                        case "subtitle":
                            var d = {};
                            d.file = Object(i.i)(s, "url"), d.kind = "captions", Object(i.i)(s, "lang").length > 0 && (d.label = a(Object(i.i)(s, "lang"))), u.push(d)
                    }
                }
            }
            n.hasOwnProperty("tracks") || (n.tracks = []);
            for (var p = 0; p < u.length; p++) n.tracks.push(u[p]);
            return n
        },
        a = n(11),
        c = function(t, e) {
            for (var n = "default", o = [], u = [], c = 0; c < t.childNodes.length; c++) {
                var s = t.childNodes[c];
                if ("jwplayer" === s.prefix) { var l = Object(r.b)(s); "source" === l ? (delete e.sources, o.push({ file: Object(i.i)(s, "file"), default: Object(i.i)(s, n), label: Object(i.i)(s, "label"), type: Object(i.i)(s, "type") })) : "track" === l ? (delete e.tracks, u.push({ file: Object(i.i)(s, "file"), default: Object(i.i)(s, n), kind: Object(i.i)(s, "kind"), label: Object(i.i)(s, "label") })) : (e[l] = Object(a.serialize)(Object(r.d)(s)), "file" === l && e.sources && delete e.sources) }
                e.file || (e.file = e.link)
            }
            if (o.length) { e.sources = []; for (var f = 0; f < o.length; f++) o[f].file.length > 0 && (o[f][n] = "true" === o[f][n], o[f].label.length || delete o[f].label, e.sources.push(o[f])) }
            if (u.length) { e.tracks = []; for (var d = 0; d < u.length; d++) u[d].file.length > 0 && (u[d][n] = "true" === u[d][n], u[d].kind = u[d].kind.length ? u[d].kind : "captions", u[d].label.length || delete u[d].label, e.tracks.push(u[d])) }
            return e
        },
        s = n(28);

    function l(t) {
        var e = [];
        e.feedData = {};
        for (var n = 0; n < Object(r.c)(t); n++) {
            var i = Object(r.a)(t, n);
            if ("channel" === Object(r.b)(i).toLowerCase())
                for (var o = 0; o < Object(r.c)(i); o++) {
                    var u = Object(r.a)(i, o),
                        a = Object(r.b)(u).toLowerCase();
                    "item" === a ? e.push(f(u)) : a && (e.feedData[a] = Object(r.d)(u))
                }
        }
        return e
    }

    function f(t) {
        for (var e = {}, n = 0; n < t.childNodes.length; n++) {
            var o = t.childNodes[n],
                a = Object(r.b)(o);
            if (a) switch (a.toLowerCase()) {
                case "enclosure":
                    e.file = Object(i.i)(o, "url");
                    break;
                case "title":
                    e.title = Object(r.d)(o);
                    break;
                case "guid":
                    e.mediaid = Object(r.d)(o);
                    break;
                case "pubdate":
                    e.date = Object(r.d)(o);
                    break;
                case "description":
                    e.description = Object(r.d)(o);
                    break;
                case "link":
                    e.link = Object(r.d)(o);
                    break;
                case "category":
                    e.tags ? e.tags += Object(r.d)(o) : e.tags = Object(r.d)(o)
            }
        }
        return new s.a(c(t, u(t, e)))
    }
    n.d(e, "a", function() { return l })
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return o });
    var r = n(44);

    function i(t) { for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24); return e }

    function o(t, e) {
        if (t = String(t), e = String(e), 0 === t.length) return "";
        for (var n = i(Object(r.a)(t)), o = i(function(t) { return unescape(encodeURIComponent(t)) }(e).slice(0, 16)), u = n.length, a = n[u - 1], c = n[0], s = void 0, l = void 0, f = 2654435769 * Math.floor(6 + 52 / u); f;) {
            l = f >>> 2 & 3;
            for (var d = u - 1; d >= 0; d--) s = ((a = n[d > 0 ? d - 1 : u - 1]) >>> 5 ^ c << 2) + (c >>> 3 ^ a << 4) ^ (f ^ c) + (o[3 & d ^ l] ^ a), c = n[d] -= s;
            f -= 2654435769
        }
        return function(t) { try { return decodeURIComponent(escape(t)) } catch (e) { return t } }(function(t) { for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255); return e.join("") }(n).replace(/\0+$/, ""))
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return r });
    var r = "function" == typeof console.log ? console.log.bind(console) : function() {}
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(24),
        o = n(11),
        u = n(2),
        a = n(1),
        c = n(12),
        s = 0,
        l = 1,
        f = function(t) {
            if ("string" == typeof t) {
                var e = (t = t.split("?")[0]).indexOf("://");
                if (e > 0) return s;
                var n = t.indexOf("/"),
                    r = Object(u.a)(t);
                return !(e < 0 && n < 0) || r && isNaN(r) ? l : 2
            }
        };
    var d = function(t) { this.url = t, this.promise_ = null };
    Object.defineProperties(d.prototype, { promise: { get: function() { return this.promise_ || this.load() }, set: function() {} } }), Object(r.j)(d.prototype, {
        load: function() {
            var t = this,
                e = this.promise_;
            if (!e) {
                if (2 === f(this.url)) e = Promise.resolve(this);
                else {
                    var n = new i.a(function(t) {
                        switch (f(t)) {
                            case s:
                                return t;
                            case l:
                                return Object(o.getAbsolutePath)(t, window.location.href)
                        }
                    }(this.url));
                    this.loader = n, e = n.load().then(function() { return t })
                }
                this.promise_ = e
            }
            return e
        },
        registerPlugin: function(t, e, n) { this.name = t, this.target = e, this.js = n },
        getNewInstance: function(t, e, n) {
            var r = this.js;
            if ("function" != typeof r) throw new a.s(null, Object(c.c)(this.url) + 100);
            var i = new r(t, e, n);
            return i.addToPlayer = function() {
                var e = t.getContainer().querySelector(".jw-overlays");
                e && (n.left = e.style.left, n.top = e.style.top, e.appendChild(n), i.displayArea = e)
            }, i.resizeHandler = function() {
                var t = i.displayArea;
                t && i.resize(t.clientWidth, t.clientHeight)
            }, i
        }
    }), e.a = d
}, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() { return r }), n.d(e, "a", function() { return i });
    var r = { audioMode: !1, flashBlocked: !1, item: 0, itemMeta: {}, playbackRate: 1, playRejected: !1, state: n(3).Ma, itemReady: !1, controlsEnabled: !1 },
        i = { position: 0, duration: 0, buffer: 0, currentTime: 0 }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return r });
    var r = function(t, e, n) { return Math.max(Math.min(t, n), e) }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(5);
    var o = function t() {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t) };
    e.a = o, o.prototype = Object(r.j)({}, i.a)
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = {
            on: r.a.on,
            once: r.a.once,
            off: r.a.off,
            trigger: r.a.trigger,
            get: function(t) { return this.attributes = this.attributes || {}, this.attributes[t] },
            set: function(t, e) {
                if (this.attributes = this.attributes || {}, this.attributes[t] !== e) {
                    var n = this.attributes[t];
                    this.attributes[t] = e, this.trigger("change:" + t, this, e, n)
                }
            },
            clone: function() {
                var t = {},
                    e = this.attributes;
                if (e)
                    for (var n in e) t[n] = e[n];
                return t
            },
            change: function(t, e, n) { this.on("change:" + t, e, n); var r = this.get(t); return e.call(n, this, r, r), this }
        };
    e.a = i
}, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() { return r }), n.d(e, "b", function() { return i }), n.d(e, "a", function() { return o });
    var r = 4,
        i = 2,
        o = 1
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        var r = [],
            i = {};

        function o() {
            for (; r.length > 0;) {
                var e = r.shift(),
                    n = e.command,
                    o = e.args;
                (i[n] || t[n]).apply(t, o)
            }
        }
        e.forEach(function(e) {
            var u = t[e];
            i[e] = u, t[e] = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                n() ? r.push({ command: e, args: t }) : (o(), u && u.apply(this, t))
            }
        }), Object.defineProperty(this, "queue", { enumerable: !0, get: function() { return r } }), this.flush = o, this.empty = function() { r.length = 0 }, this.off = function() {
            e.forEach(function(e) {
                var n = i[e];
                n && (t[e] = n, delete i[e])
            })
        }, this.destroy = function() { this.off(), this.empty() }
    }
    n.d(e, "a", function() { return r })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = function() {},
        o = function() { return !1 },
        u = { name: "default" },
        a = {
            supports: o,
            play: i,
            pause: i,
            preload: i,
            load: i,
            stop: i,
            volume: i,
            mute: i,
            seek: i,
            resize: i,
            remove: i,
            destroy: i,
            eventsOn_: i,
            eventsOff_: i,
            setVisibility: i,
            setFullscreen: i,
            getFullscreen: o,
            supportsFullscreen: o,
            getContainer: i,
            setContainer: i,
            getName: function() { return u },
            getQualityLevels: i,
            getCurrentQuality: i,
            setCurrentQuality: i,
            getAudioTracks: i,
            getCurrentAudioTrack: i,
            setCurrentAudioTrack: i,
            getSeekRange: function() { return { start: 0, end: this.getDuration() } },
            setPlaybackRate: i,
            getPlaybackRate: function() { return 1 },
            getBandwidthEstimate: function() { return null },
            setControls: i,
            attachMedia: i,
            detachMedia: i,
            init: i,
            setState: function(t) { this.state = t, this.trigger(r.Aa, { newstate: t }) },
            sendMediaType: function(t) {
                var e = t[0],
                    n = e.type,
                    i = e.mimeType,
                    o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
                this.trigger(r.S, { mediaType: o ? "audio" : "video" })
            }
        };
    e.a = a
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(54),
        o = n(18),
        u = n(11),
        a = n(7),
        c = n(39),
        s = n(19),
        l = { autostart: !1, bandwidthEstimate: null, bitrateSelection: null, castAvailable: !1, controls: !0, defaultPlaybackRate: 1, displaydescription: !0, displaytitle: !0, displayPlaybackLabel: !1, height: 360, intl: {}, language: "en", liveTimeout: null, localization: c.a, mute: !1, nextUpDisplay: !0, playbackRateControls: !1, playbackRates: [.5, 1, 1.25, 1.5, 2], renderCaptionsNatively: !1, repeat: !1, stretching: "uniform", volume: 90, width: 640 };

    function f(t) { return t.slice && "px" === t.slice(-2) && (t = t.slice(0, -2)), t }

    function d(t, e, n) {
        var r = t[n] || e[n];
        r && (t[n] = r)
    }
    var p = function(t, e) {
            var i = Object(r.j)({}, (window.jwplayer || {}).defaults, e, t);
            ! function(t) {
                var e = t.advertising,
                    n = t.related,
                    i = t.sharing,
                    o = t.abouttext,
                    u = Object(r.j)({}, t.localization);
                e && (u.advertising = u.advertising || {}, d(u.advertising, e, "admessage"), d(u.advertising, e, "cuetext"), d(u.advertising, e, "loadingAd"), d(u.advertising, e, "podmessage"), d(u.advertising, e, "skipmessage"), d(u.advertising, e, "skiptext")), "string" == typeof u.related ? u.related = { heading: u.related } : u.related = u.related || {}, n && d(u.related, n, "autoplaymessage"), i && (u.sharing = u.sharing || {}, d(u.sharing, i, "heading"), d(u.sharing, i, "copied")), o && d(u, t, "abouttext");
                var a = u.close || u.nextUpClose;
                a && (u.close = a), t.localization = u
            }(i),
            function(t) { Object.keys(t).forEach(function(e) { "id" !== e && (t[e] = Object(u.serialize)(t[e])) }) }(i);
            var p = i.forceLocalizationDefaults ? l.language : Object(s.e)(),
                h = i.localization,
                v = i.intl;
            i.localization = Object(s.a)(c.a, Object(s.c)(h, v || {}, p));
            var g = Object(r.j)({}, l, i);
            "." === g.base && (g.base = Object(o.getScriptPath)("jwplayer.js")), g.base = (g.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), n.p = g.base, g.width = f(g.width), g.height = f(g.height), g.aspectratio = function(t, e) {
                if (-1 === e.toString().indexOf("%")) return 0;
                if ("string" != typeof t || !t) return 0;
                if (/^\d*\.?\d+%$/.test(t)) return t;
                var n = t.indexOf(":");
                if (-1 === n) return 0;
                var r = parseFloat(t.substr(0, n)),
                    i = parseFloat(t.substr(n + 1));
                return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
            }(g.aspectratio, g.width), g.volume = Object(r.z)(g.volume) ? Math.min(Math.max(0, g.volume), 100) : l.volume, g.mute = !!g.mute, g.language = p;
            var m = g.playbackRateControls;
            if (m) {
                var b = g.playbackRates;
                Array.isArray(m) && (b = m), (b = b.filter(function(t) { return Object(r.v)(t) && t >= .25 && t <= 4 }).map(function(t) { return Math.round(100 * t) / 100 })).indexOf(1) < 0 && b.push(1), b.sort(), g.playbackRateControls = !0, g.playbackRates = b
            }(!g.playbackRateControls || g.playbackRates.indexOf(g.defaultPlaybackRate) < 0) && (g.defaultPlaybackRate = 1), g.playbackRate = g.defaultPlaybackRate, g.aspectratio || delete g.aspectratio;
            var y = g.playlist;
            if (y) Array.isArray(y.playlist) && (g.feedData = y, g.playlist = y.playlist);
            else {
                var j = Object(r.D)(g, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "duration"]);
                g.playlist = [j]
            }
            g.qualityLabels = g.qualityLabels || g.hlslabels, delete g.duration;
            var w = g.liveTimeout;
            null !== w && (Object(r.z)(w) ? 0 !== w && (w = Math.max(30, w)) : w = null, g.liveTimeout = w);
            var O = parseFloat(g.bandwidthEstimate),
                C = parseFloat(g.bitrateSelection);
            return g.bandwidthEstimate = Object(r.z)(O) ? O : function(t) { var e = parseFloat(t); return Object(r.z)(e) ? Math.max(e, 1) : l.bandwidthEstimate }(g.defaultBandwidthEstimate), g.bitrateSelection = Object(r.z)(C) ? C : l.bitrateSelection, g.backgroundLoading = Object(r.r)(g.backgroundLoading) ? g.backgroundLoading : a.Features.backgroundLoading, g
        },
        h = n(26),
        v = n(17),
        g = "__CONTEXTUAL__";

    function m(t) {
        var e = "file:" === window.location.protocol ? "https:" : "",
            n = { jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.6.3/jwpsrv.js", dai: "//ssl.p.jwpcdn.com/player/plugins/dai/v/0.4.4/dai.js", vast: "//ssl.p.jwpcdn.com/player/plugins/vast/v/8.4.14/vast.js", googima: "//ssl.p.jwpcdn.com/player/plugins/googima/v/8.5.6/googima.js", freewheel: "//ssl.p.jwpcdn.com/player/plugins/freewheel/v/2.1.14/freewheel.js", related: "//ssl.p.jwpcdn.com/player/plugins/related/v/7.1.3/related.js", gapro: "//ssl.p.jwpcdn.com/player/plugins/gapro/v/2.1.3/gapro.js" }[t];
        return n ? e + n : ""
    }

    function b(t, e, n) { e && (t[e.client || m(n)] = e, delete e.client) }
    var y = function(t, e) {
            var i = p(t, e),
                u = i.key || window.jwplayer && window.jwplayer.key,
                a = new h.b(u),
                c = a.edition();
            if (i.key = u, i.edition = c, i.error = a.error(), "unlimited" === c) {
                var s = Object(o.getScriptPath)("jwplayer.js");
                if (!s) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                n.p = s
            }
            return i.flashplayer = function(t) { var e = t.flashplayer; return e || (e = (Object(o.getScriptPath)("jwplayer.js") || t.base) + "jwplayer.flash.swf"), "http:" === window.location.protocol && (e = e.replace(/^https/, "http")), e }(i), i.plugins = function(t) {
                    var e = Object(r.j)({}, t.plugins),
                        n = t.edition,
                        i = Object(v.a)(n);
                    if (i("ads")) {
                        var o = Object(r.j)({}, t.advertising),
                            u = o.client;
                        if (u) {
                            var a = m(u) || u;
                            e[a] = o, delete o.client
                        }
                    }
                    if (i("jwpsrv")) {
                        var c = t.analytics;
                        c !== Object(c) && (c = {}), b(e, c, "jwpsrv")
                    }
                    return b(e, t.ga, "gapro"), e
                }(i), i.ab && (i.ab = function(t) { var e = t.ab; return e.clone && (e = e.clone()), Object.keys(e.tests).forEach(function(n) { e.tests[n].forEach(function(e) { e.addConfig && e.addConfig(t, e.selection) }) }), e }(i)),
                function(t) { return !!Object(r.x)(t) && t.indexOf(g) > -1 }(i.playlist) && (i.playlist = function(t, e) {
                    var n = function(t) { var e = t.querySelector('meta[property="og:title"]'); if (e) return e.getAttribute("content") }(t),
                        r = (t.querySelector("title") || {}).textContent,
                        i = encodeURIComponent(n || r || "");
                    return e.replace(g, i)
                }(document, i.playlist), i.contextual = !0), i
        },
        j = n(8),
        w = n(25),
        O = n(3),
        C = n(58),
        k = n(29),
        x = n(24),
        P = n(1);

    function S(t) {
        var e = t.get("playlist");
        return new Promise(function(n, r) {
            if ("string" != typeof e) { var i = t.get("feedData") || {}; return T(t, e, i), n() }
            var o = new C.a;
            o.on(O.Da, function(e) {
                var r = e.playlist;
                delete e.playlist, T(t, r, e), n()
            }), o.on(O.w, function(e) { T(t, [], {}), r(Object(P.z)(e, P.u)) }), o.load(e)
        })
    }

    function T(t, e, n) {
        var r = t.attributes;
        r.playlist = Object(k.a)(e), r.feedData = n
    }

    function E(t) { return t.attributes._destroyed }
    var _ = n(37),
        A = n(48),
        N = n(12),
        M = 301129;

    function I(t) {
        return L(t) ? Promise.resolve() : S(t).then(function() { if (t.get("drm") || Object(_.b)(t.get("playlist"))) return Object(_.d)(t.get("edition")) }).then(function() {
            return function(t) {
                return S(t).then(function() {
                    if (!E(t)) {
                        var e = Object(k.b)(t.get("playlist"), t);
                        t.attributes.playlist = e;
                        try { Object(k.e)(e) } catch (t) { throw t.code += P.u, t }
                        var n = t.getProviders(),
                            r = n.choose(e[0].sources[0]),
                            i = r.provider,
                            o = r.name;
                        return "function" == typeof i ? i : j.a.html5 && "html5" === o ? j.a.html5 : n.load(o).catch(function(t) { throw Object(P.z)(t, P.v) })
                    }
                })
            }(t)
        })
    }

    function F(t, e) {
        var r = [function(t) {
            var e = t.attributes,
                n = e.error;
            if (n && n.code === h.a) {
                var r = e.pid,
                    i = e.ph,
                    o = new h.b(e.key);
                if (i > 0 && i < 4 && r && o.duration() > -7776e6) {
                    var u = new x.a("//content.jwplatform.com/libraries/" + r + ".js");
                    return u.load().then(function() {
                        var t = window.jwplayer.defaults.key,
                            n = new h.b(t);
                        n.error() || n.token() !== o.token() || (e.key = t, e.edition = n.edition(), e.error = n.error())
                    }).catch(function() {})
                }
            }
            return Promise.resolve()
        }(t)];
        return L(t) || r.push(function(t, e) {
            var r = t.get("related"),
                i = Object(v.a)(t.get("edition")),
                o = r === Object(r) && i("discovery");
            if (!1 !== t.get("controls") || o) {
                var u = !1 !== t.get("visualplaylist") || o;
                return o || (r = { disableRelated: !0 }), r.showButton = u, n.e(0).then(function(i) {
                    if (!t.attributes._destroyed) {
                        var o = new A.a;
                        o.name = "related", o.js = n(149).default, Object(N.a)(o, r, e)
                    }
                }.bind(null, n)).catch(Object(j.b)(M)).catch(function(t) { return t })
            }
            return Promise.resolve()
        }(t, e), Promise.resolve()), Promise.all(r)
    }

    function L(t) { var e = t.get("advertising"); return !(!e || !e.outstream) }
    var R = function(t) {
            var e = t.get("skin") ? t.get("skin").url : void 0;
            if ("string" == typeof e && ! function(t) {
                    for (var e = document.styleSheets, n = 0, r = e.length; n < r; n++)
                        if (e[n].href === t) return !0;
                    return !1
                }(e)) return new x.a(e, !0).load().catch(function(t) { return t });
            return Promise.resolve()
        },
        D = function(t) {
            var e = t.attributes,
                n = e.language,
                r = e.base,
                i = e.setupConfig,
                o = e.intl,
                u = Object(s.c)(i.localization, o, n);
            return !Object(s.g)(n) || Object(s.f)(u) ? Promise.resolve() : new Promise(function(i) {
                return Object(s.h)(r, n).then(function(n) {
                    var r = n.response;
                    if (!E(t)) {
                        if (!r) throw new P.s(null, P.g);
                        e.localization = Object(s.a)(r, u), i()
                    }
                }).catch(function(t) { i(t.code === P.g ? t : Object(P.z)(t, P.f)) })
            })
        };
    var B = function(t) {
            var e = void 0;
            this.start = function(n) {
                var r = Object(w.a)(t, n),
                    i = Promise.all([Object(j.d)(t), r, I(t), F(t, n), R(t), D(t)]),
                    o = new Promise(function(t, n) {
                        e = setTimeout(function() { n(new P.s(P.m, P.x)) }, 6e4);
                        var r = function() { clearTimeout(e), setTimeout(t, 6e4) };
                        i.then(r).catch(r)
                    });
                return Promise.race([i, o]).catch(function(t) { var e = function() { throw t }; return r.then(e).catch(e) }).then(function(t) { return function(t) { if (!t || !t.length) return { core: null, warnings: [] }; var e = t.reduce(function(t, e) { return t.concat(e) }, []).filter(function(t) { return t && t.code }); return { core: t[0], warnings: e } }(t) })
            }, this.destroy = function() { clearTimeout(e), t.set("_destroyed", !0), t = null }
        },
        z = n(42),
        q = n(30),
        V = n(22),
        X = { removeItem: function() {} };
    try { X = window.localStorage || X } catch (t) {}

    function Q(t, e) { this.namespace = t, this.items = e }
    Object(r.j)(Q.prototype, {
        getAllItems: function() { var t = this; return this.items.reduce(function(e, n) { var r = X[t.namespace + "." + n]; return r && (e[n] = Object(u.serialize)(r)), e }, {}) },
        track: function(t) {
            var e = this;
            this.items.forEach(function(n) { t.on("change:" + n, function(t, r) { try { X[e.namespace + "." + n] = r } catch (t) { V.a.debug && console.error(t) } }) })
        },
        clear: function() {
            var t = this;
            this.items.forEach(function(e) { X.removeItem(t.namespace + "." + e) })
        }
    });
    var W = Q,
        H = n(52),
        U = n(49),
        J = n(5),
        K = n(43),
        Y = n(53);

    function G(t) { t.src || t.load() }

    function $() { var t = document.createElement("video"); return t.className = "jw-video jw-reset", t.setAttribute("tabindex", "-1"), t.setAttribute("disableRemotePlayback", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("playsinline", ""), t }
    var Z = n(57),
        tt = n(35);
    n.d(e, "b", function() { return ot });
    var et = function() {};
    Object(r.j)(et.prototype, H.a);
    var nt = function(t) { this._events = {}, this.modelShim = new et, this.modelShim._qoeItem = new q.a, this.mediaShim = {}, this.setup = new B(this.modelShim), this.currentContainer = this.originalContainer = t, this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "setCues", "setPlaylistItem", "resize", "setCaptions", "setControls"], function() { return !0 }) };

    function rt(t, e) { e && e.code && (e.sourceError && console.error(e.sourceError), console.error(P.s.logMessage(e.code))) }

    function it(t) { t && t.code && console.warn(P.s.logMessage(t.code)) }

    function ot(t, e) {
        if (!document.body.contains(t.currentContainer)) {
            var n = document.getElementById(t.get("id"));
            n && (t.currentContainer = n)
        }
        t.currentContainer.parentElement && t.currentContainer.parentElement.replaceChild(e, t.currentContainer), t.currentContainer = e
    }
    Object(r.j)(nt.prototype, {
        on: J.a.on,
        once: J.a.once,
        off: J.a.off,
        trigger: J.a.trigger,
        init: function(t, e) {
            var n = this,
                i = this.modelShim,
                o = new W("jwplayer", ["volume", "mute", "captionLabel", "bandwidthEstimate", "bitrateSelection", "qualityLabel"]),
                u = o && o.getAllItems();
            i.attributes = i.attributes || {}, Object(r.j)(this.mediaShim, U.a);
            var a = t,
                c = y(Object(r.j)({}, t), u);
            c.id = e.id, c.setupConfig = a, Object(r.j)(i.attributes, c, U.b), i.getProviders = function() { return new z.a(c) }, i.setProvider = function() {};
            var s = function() {
                for (var t = Y.c, e = [], n = [], r = 0; r < t; r++) {
                    var i = $();
                    e.push(i), n.push(i), G(i)
                }
                var o = n.shift(),
                    u = n.shift(),
                    a = !1;
                return {
                    primed: function() { return a },
                    prime: function() { e.forEach(G), a = !0 },
                    played: function() { a = !0 },
                    getPrimedElement: function() { return n.length ? n.shift() : null },
                    getAdElement: function() { return o },
                    getTestElement: function() { return u },
                    clean: function(t) { if (t.src) { t.removeAttribute("src"); try { t.load() } catch (t) {} } },
                    recycle: function(t) { t && !n.some(function(e) { return e === t }) && (this.clean(t), n.push(t)) },
                    syncVolume: function(t) {
                        var n = Math.min(Math.max(0, t / 100), 1);
                        e.forEach(function(t) { t.volume = n })
                    },
                    syncMute: function(t) { e.forEach(function(e) { e.muted = t }) }
                }
            }();
            i.get("backgroundLoading") || (s = Object(Z.a)(s.getPrimedElement(), s));
            var l = new tt.a(Object(tt.b)(this.originalContainer)).once("gesture", function() { s.prime(), n.preload(), l.destroy() });
            return i.on("change:errorEvent", rt), this.setup.start(e).then(function(t) {
                var u = t.core;
                if (!u) throw Object(P.z)(null, P.w);
                if (n.setup) {
                    n.on(O.Ta, it), t.warnings.forEach(function(t) { n.trigger(O.Ta, t) });
                    var a = n.modelShim.clone();
                    if (a.error) throw a.error;
                    var c = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(), Object(r.j)(n, u.prototype), n.setup(a, e, n.originalContainer, n._events, c, s);
                    var l = n._model;
                    return i.off("change:errorEvent", rt), l.on("change:errorEvent", rt), o.track(l), n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch(function(t) { throw Object(P.z)(t, P.u) })
                }
            }).then(function() { n.setup && n.playerReady() }).catch(function(t) {
                n.setup && function(t, e, n) {
                    Promise.resolve().then(function() {
                        var r = Object(P.A)(P.r, P.y, n),
                            i = t._model || t.modelShim;
                        r.message = r.message || i.get("localization").errors[r.key], delete r.key;
                        var o = i.get("contextual");
                        if (!o) {
                            var u = Object(K.a)(t, r);
                            K.a.cloneIcon && u.querySelector(".jw-icon").appendChild(K.a.cloneIcon("error")), ot(t, u)
                        }
                        i.set("errorEvent", r), i.set("state", O.La), t.trigger(O.Ia, r), o && e.remove()
                    })
                }(n, e, t)
            })
        },
        playerDestroy: function() { this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.currentContainer !== this.originalContainer && ot(this, this.originalContainer), this.off(), this._events = this._model = this.modelShim = this.apiQueue = this.setup = null },
        getContainer: function() { return this.currentContainer },
        get: function(t) { if (this.modelShim) return t in this.mediaShim ? this.mediaShim[t] : this.modelShim.get(t) },
        getItemQoe: function() { return this.modelShim._qoeItem },
        getConfig: function() { return Object(r.j)({}, this.modelShim.attributes, this.mediaShim) },
        getCurrentCaptions: function() { return this.get("captionsIndex") },
        getWidth: function() { return this.get("containerWidth") },
        getHeight: function() { return this.get("containerHeight") },
        getMute: function() { return this.get("mute") },
        getProvider: function() { return this.get("provider") },
        getState: function() { return this.get("state") },
        getAudioTracks: function() { return null },
        getCaptionsList: function() { return null },
        getQualityLevels: function() { return null },
        getVisualQuality: function() { return null },
        getCurrentQuality: function() { return -1 },
        getCurrentAudioTrack: function() { return -1 },
        getSafeRegion: function() { return { x: 0, y: 0, width: 0, height: 0 } },
        isBeforeComplete: function() { return !1 },
        isBeforePlay: function() { return !1 },
        createInstream: function() { return null },
        skipAd: function() {},
        attachMedia: function() {},
        detachMedia: function() { return null }
    });
    e.a = nt
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return i });
    var r = n(0);

    function i(t, e) { return Object(r.j)({}, e, { prime: function() { t.src || t.load() }, getPrimedElement: function() { return t }, clean: function() { e.clean(t) }, recycle: function() { e.clean(t) } }) }
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = n(3),
        o = n(4),
        u = n(45),
        a = n(27),
        c = n(5),
        s = n(1);
    e.a = function() {
        var t = Object(r.j)(this, c.a);

        function e(e) {
            try {
                var a = e.responseXML ? e.responseXML.childNodes : null,
                    c = "",
                    l = void 0;
                if (a) {
                    for (var f = 0; f < a.length && 8 === (c = a[f]).nodeType; f++);
                    if ("xml" === Object(o.b)(c) && (c = c.nextSibling), "rss" === Object(o.b)(c)) {
                        var d = Object(u.a)(c);
                        l = Object(r.j)({ playlist: d }, d.feedData)
                    }
                }
                if (!l) try {
                    var p = JSON.parse(e.responseText);
                    if (Array.isArray(p)) l = { playlist: p };
                    else {
                        if (!Array.isArray(p.playlist)) throw Error("Playlist is not an array");
                        l = p
                    }
                } catch (t) { throw new s.s(s.o, 621, t) }
                t.trigger(i.Da, l)
            } catch (t) { n(t) }
        }

        function n(e) { e.code || (e = new s.s(s.o, 0)), t.trigger(i.w, e) }
        this.load = function(t) { Object(a.a)(t, e, function(t, e, r, i) { n(i) }) }, this.destroy = function() { this.off() }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() { return i });
    var r = n(7);

    function i(t) { return "hls" === t.type && r.OS.android ? !1 !== t.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version) >= 4.4) : null }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
        i = setTimeout;

    function o() {}

    function u(t) {
        if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
    }

    function a(t, e) {
        for (; 3 === t._state;) t = t._value;
        0 !== t._state ? (t._handled = !0, u._immediateFn(function() {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null !== n) {
                var r;
                try { r = n(t._value) } catch (t) { return void s(e.promise, t) }
                c(e.promise, r)
            } else(1 === t._state ? c : s)(e.promise, t._value)
        })) : t._deferreds.push(e)
    }

    function c(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if (e instanceof u) return t._state = 3, t._value = e, void l(t); if ("function" == typeof n) return void f(function(t, e) { return function() { t.apply(e, arguments) } }(n, e), t) }
            t._state = 1, t._value = e, l(t)
        } catch (e) { s(t, e) }
    }

    function s(t, e) { t._state = 2, t._value = e, l(t) }

    function l(t) {
        2 === t._state && 0 === t._deferreds.length && u._immediateFn(function() { t._handled || u._unhandledRejectionFn(t._value) });
        for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
        t._deferreds = null
    }

    function f(t, e) {
        var n = !1;
        try { t(function(t) { n || (n = !0, c(e, t)) }, function(t) { n || (n = !0, s(e, t)) }) } catch (t) {
            if (n) return;
            n = !0, s(e, t)
        }
    }
    u.prototype.catch = function(t) { return this.then(null, t) }, u.prototype.then = function(t, e) { var n = new this.constructor(o); return a(this, new function(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n }(t, e, n)), n }, u.prototype.finally = function(t) { var e = this.constructor; return this.then(function(n) { return e.resolve(t()).then(function() { return n }) }, function(n) { return e.resolve(t()).then(function() { return e.reject(n) }) }) }, u.all = function(t) {
        return new u(function(e, n) {
            if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(t);
            if (0 === r.length) return e([]);
            var i = r.length;

            function o(t, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) { var a = u.then; if ("function" == typeof a) return void a.call(u, function(e) { o(t, e) }, n) }
                    r[t] = u, 0 == --i && e(r)
                } catch (t) { n(t) }
            }
            for (var u = 0; u < r.length; u++) o(u, r[u])
        })
    }, u.resolve = function(t) { return t && "object" == typeof t && t.constructor === u ? t : new u(function(e) { e(t) }) }, u.reject = function(t) { return new u(function(e, n) { n(t) }) }, u.race = function(t) { return new u(function(e, n) { for (var r = 0, i = t.length; r < i; r++) t[r].then(e, n) }) }, u._immediateFn = "function" == typeof setImmediate && function(t) { setImmediate(t) } || function(t) { i(t, 0) }, u._unhandledRejectionFn = function(t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t) };
    var d = u;
    window.Promise || (window.Promise = d);
    var p = n(18),
        h = n(13),
        v = n(15),
        g = n(14),
        m = { availableProviders: v.a, registerProvider: g.a },
        b = n(25);
    m.registerPlugin = function(t, e, n) { "jwpsrv" !== t && Object(b.b)(t, e, n) };
    var y = m,
        j = n(31),
        w = n(22),
        O = n(7),
        C = n(56),
        k = n(3),
        x = n(30),
        P = n(5),
        S = n(9),
        T = n(11),
        E = n(2);

    function _(t, e) { this.name = t, this.message = e.message || e.toString(), this.error = e }
    var A = n(6),
        N = n(10),
        M = n(23),
        I = n(27),
        F = n(50),
        L = n(47);
    var R = Object(r.j)({}, T, S, p, {
            addClass: N.a,
            hasClass: N.h,
            removeClass: N.l,
            replaceClass: N.m,
            toggleClass: N.p,
            classList: N.d,
            styleDimension: N.o,
            createElement: N.e,
            emptyElement: N.g,
            addStyleSheet: N.b,
            bounds: N.c,
            css: M.b,
            clearCss: M.a,
            style: M.d,
            transform: M.e,
            getRgba: M.c,
            ajax: I.a,
            crossdomain: function(t) {
                var e = document.createElement("a"),
                    n = document.createElement("a");
                e.href = location.href;
                try { return n.href = t, n.href = n.href, e.protocol + "//" + e.host != n.protocol + "//" + n.host } catch (t) {}
                return !0
            },
            tryCatch: function(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []; if (w.a.debug) return t.apply(e || this, n); try { return t.apply(e || this, n) } catch (e) { return new _(t.name, e) } },
            Error: _,
            Timer: x.a,
            log: L.a,
            between: F.a,
            foreach: function(t, e) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) },
            flashVersion: A.a,
            isIframe: A.m,
            indexOf: r.p,
            trim: E.h,
            pad: E.d,
            extension: E.a,
            hms: E.b,
            seconds: E.f,
            prefix: E.e,
            suffix: E.g,
            noop: function() {}
        }),
        D = 0;

    function B(t, e) { var n = new C.a(e); return n.on(k.Ga, function(e) { t._qoe.tick("ready"), e.setupTime = t._qoe.between("setup", "ready") }), n.on("all", function(e, n) { t.trigger(e, n) }), n }

    function z(t, e) {
        var n = t.plugins;
        Object.keys(n).forEach(function(t) { delete n[t] }), e.get("setupConfig") && t.trigger("remove"), t.off(), e.playerDestroy(), e.getContainer().removeAttribute("data-jwplayer-id")
    }

    function q(t) {
        var e = ++D,
            n = t.id || "player-" + e,
            i = new x.a,
            o = {},
            u = B(this, t);
        i.tick("init"), t.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, { id: { get: function() { return n } }, uniqueId: { get: function() { return e } }, plugins: { get: function() { return o } }, _qoe: { get: function() { return i } }, version: { get: function() { return j.a } }, Events: { get: function() { return P.a } }, utils: { get: function() { return R } }, _: { get: function() { return r.f } } }), Object(r.j)(this, {
            _events: {},
            setup: function(e) { return i.clear("ready"), i.tick("setup"), z(this, u), (u = B(this, t)).init(e, this), this.on(e.events, null, this) },
            remove: function() {
                return function(t) {
                    for (var e = h.a.length; e--;)
                        if (h.a[e].uniqueId === t.uniqueId) { h.a.splice(e, 1); break }
                }(this), z(this, u), this
            },
            qoe: function() { var t = u.getItemQoe(); return { setupTime: this._qoe.between("setup", "ready"), firstFrame: t.getFirstFrame ? t.getFirstFrame() : null, player: this._qoe.dump(), item: t.dump() } },
            getAudioTracks: function() { return u.getAudioTracks() },
            getBuffer: function() { return u.get("buffer") },
            getCaptions: function() { return u.get("captions") },
            getCaptionsList: function() { return u.getCaptionsList() },
            getConfig: function() { return u.getConfig() },
            getContainer: function() { return u.getContainer() },
            getControls: function() { return u.get("controls") },
            getCurrentAudioTrack: function() { return u.getCurrentAudioTrack() },
            getCurrentCaptions: function() { return u.getCurrentCaptions() },
            getCurrentQuality: function() { return u.getCurrentQuality() },
            getCurrentTime: function() { return u.get("currentTime") },
            getDuration: function() { return u.get("duration") },
            getEnvironment: function() { return O },
            getFullscreen: function() { return u.get("fullscreen") },
            getHeight: function() { return u.getHeight() },
            getItemMeta: function() { return u.get("itemMeta") || {} },
            getMute: function() { return u.getMute() },
            getPlaybackRate: function() { return u.get("playbackRate") },
            getPlaylist: function() { return u.get("playlist") },
            getPlaylistIndex: function() { return u.get("item") },
            getPlaylistItem: function(t) { if (!R.exists(t)) return u.get("playlistItem"); var e = this.getPlaylist(); return e ? e[t] : null },
            getPosition: function() { return u.get("position") },
            getProvider: function() { return u.getProvider() },
            getQualityLevels: function() { return u.getQualityLevels() },
            getSafeRegion: function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return u.getSafeRegion(t) },
            getState: function() { return u.getState() },
            getStretching: function() { return u.get("stretching") },
            getViewable: function() { return u.get("viewable") },
            getVisualQuality: function() { return u.getVisualQuality() },
            getVolume: function() { return u.get("volume") },
            getWidth: function() { return u.getWidth() },
            setCaptions: function(t) { return u.setCaptions(t), this },
            setConfig: function(t) { return u.setConfig(t), this },
            setControls: function(t) { return u.setControls(t), this },
            setCurrentAudioTrack: function(t) { u.setCurrentAudioTrack(t) },
            setCurrentCaptions: function(t) { u.setCurrentCaptions(t) },
            setCurrentQuality: function(t) { u.setCurrentQuality(t) },
            setFullscreen: function(t) { return u.setFullscreen(t), this },
            setMute: function(t) { return u.setMute(t), this },
            setPlaybackRate: function(t) { return u.setPlaybackRate(t), this },
            setPlaylistItem: function(t, e) { return u.setPlaylistItem(t, e), this },
            setCues: function(t) { return u.setCues(t), this },
            setVolume: function(t) { return u.setVolume(t), this },
            load: function(t, e) { return u.load(t, e), this },
            play: function(t) { return u.play(t), this },
            pause: function(t) { return u.pause(t), this },
            playToggle: function(t) {
                switch (this.getState()) {
                    case k.Pa:
                    case k.Ja:
                        return this.pause(t);
                    default:
                        return this.play(t)
                }
            },
            seek: function(t, e) { return u.seek(t, e), this },
            playlistItem: function(t, e) { return u.playlistItem(t, e), this },
            playlistNext: function(t) { return u.playlistNext(t), this },
            playlistPrev: function(t) { return u.playlistPrev(t), this },
            next: function(t) { return u.next(t), this },
            castToggle: function() { return u.castToggle(), this },
            createInstream: function() { return u.createInstream() },
            skipAd: function() { return u.skipAd(), this },
            stop: function() { return u.stop(), this },
            resize: function(t, e) { return u.resize(t, e), this },
            addButton: function(t, e, n, r, i) { return u.addButton(t, e, n, r, i), this },
            removeButton: function(t) { return u.removeButton(t), this },
            attachMedia: function() { return u.attachMedia(), this },
            detachMedia: function() { return u.detachMedia(), this },
            isBeforeComplete: function() { return u.isBeforeComplete() },
            isBeforePlay: function() { return u.isBeforePlay() }
        })
    }
    Object(r.j)(q.prototype, { on: function(t, e, n) { return P.c.call(this, t, e, n) }, once: function(t, e, n) { return P.d.call(this, t, e, n) }, off: function(t, e, n) { return P.b.call(this, t, e, n) }, trigger: function(t, e) { return (e = r.f.isObject(e) ? Object(r.j)({}, e) : {}).type = t, w.a.debug ? P.e.call(this, t, e) : P.f.call(this, t, e) }, getPlugin: function(t) { return this.plugins[t] }, addPlugin: function(t, e) { this.plugins[t] = e, this.on("ready", e.addToPlayer), e.resize && this.on("resize", e.resizeHandler) }, registerPlugin: function(t, e, n) { Object(b.b)(t, e, n) }, getAdBlock: function() { return !1 }, playAd: function(t) {}, pauseAd: function(t) {} }), n.p = Object(p.loadFrom)();
    var V = function(t) {
        var e = void 0,
            n = void 0;
        if (t ? "string" == typeof t ? (e = X(t)) || (n = document.getElementById(t)) : "number" == typeof t ? e = h.a[t] : t.nodeType && (e = X((n = t).id || n.getAttribute("data-jwplayer-id"))) : e = h.a[0], e) return e;
        if (n) { var r = new q(n); return h.a.push(r), r }
        return { registerPlugin: b.b }
    };

    function X(t) {
        for (var e = 0; e < h.a.length; e++)
            if (h.a[e].id === t) return h.a[e];
        return null
    }
    Object.defineProperties(V, { api: { get: function() { return y }, set: function() {} }, version: { get: function() { return j.a }, set: function() {} }, debug: { get: function() { return w.a.debug }, set: function(t) { w.a.debug = !!t } } });
    var Q = V,
        W = n(35),
        H = n(26),
        U = n(24),
        J = n(46),
        K = n(45),
        Y = n(40),
        G = r.f.extend,
        $ = {};
    $.api = y, $._ = r.f, $.version = "8.6.3+commercial_v8-6-3.296.commercial.e487997.hlsjs..jwplayer.fed47a0.dai.f0547f4.freewheel.c703482.googima.1978508.vast.7fd4f53.analytics.0a43e0e.gapro.f664e4e.related.3e21944", $.utils = Object(r.j)(R, { key: H.b, extend: G, scriptloader: U.a, rssparser: { parse: K.a }, tea: J.a, UI: W.a }), $.utils.css.style = $.utils.style, $.vid = Y.a;
    var Z = $,
        tt = window;
    Object(r.j)(Q, Z), "function" == typeof tt.define && tt.define.amd && tt.define([], function() { return Q });
    var et = Q;
    tt.jwplayer && (et = tt.jwplayer);
    e.default = et
}]).default;