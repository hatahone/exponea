!(function (e, n, t, i, o, r) {
    function s(e) {
        if ("number" != typeof e) return e;
        const n = new Date();
        return new Date(n.getTime() + 1e3 * e);
    }
    const c = 4e3,
        a = "xnpe_async_hide";
    function p(e) {
        return e.reduce(
            function (e, n) {
                return (
                    (e[n] = function () {
                        e._.push([n.toString(), arguments]);
                    }),
                    e
                );
            },
            { _: [] }
        );
    }
    function m(e, n, t) {
        const i = t.createElement(n);
        i.src = e;
        const o = t.getElementsByTagName(n)[0];
        return o.parentNode.insertBefore(i, o), i;
    }
    function l(e) {
        return "[object Date]" === Object.prototype.toString.call(e);
    }
    (r.target = r.target || "https://api.exponea.com"),
        (r.file_path = r.file_path || r.target + "/js/exponea.min.js"),
        (o[n] = p([
            "anonymize",
            "initialize",
            "identify",
            "getSegments",
            "update",
            "track",
            "trackLink",
            "trackEnhancedEcommerce",
            "getHtml",
            "showHtml",
            "showBanner",
            "showWebLayer",
            "ping",
            "getAbTest",
            "loadDependency",
            "getRecommendation",
            "reloadWebLayers",
            "_preInitialize",
            "_initializeConfig",
        ])),
        (o[n].notifications = p(["isAvailable", "isSubscribed", "subscribe", "unsubscribe"])),
        (o[n].segments = p(["subscribe"])),
        (o[n]["snippetVersion"] = "v3.0.0"),
        (function (e, n, t) {
            (e[n]["_" + t] = {}), (e[n]["_" + t].nowFn = Date.now), (e[n]["_" + t].snippetStartTime = e[n]["_" + t].nowFn());
        })(o, n, "performance"),
        (function (e, n, t, i, o, r) {
            e[o] = { sdk: e[i], sdkObjectName: i, skipExperiments: !!t.new_experiments, sign: t.token + "/" + (r.exec(n.cookie) || ["", "new"])[1], path: t.target };
        })(o, e, r, n, i, RegExp("__exponea_etc__" + "=([\\w-]+)")),
        (function (e, n, t) {
            m(e.file_path, n, t);
        })(r, t, e),
        (function (e, n, t, i, o, r, p) {
            if (!e.new_experiments) return;
            !0 === e.new_experiments && (e.new_experiments = {});
            const u = e.new_experiments.hide_class || a,
                _ = e.new_experiments.timeout || c,
                f = encodeURIComponent(r.location.href.split("#")[0]);
            let d;
            e.cookies &&
                e.cookies.expires &&
                ("number" == typeof e.cookies.expires || l(e.cookies.expires)
                    ? (d = s(e.cookies.expires))
                    : e.cookies.expires.tracking && ("number" == typeof e.cookies.expires.tracking || l(e.cookies.expires.tracking)) && (d = s(e.cookies.expires.tracking))),
                d && d < new Date() && (d = void 0);
            const g = e.target + "/webxp/" + n + "/" + r[t].sign + "/modifications.min.js?http-referer=" + f + "&timeout=" + _ + "ms" + (d ? "&cookie-expires=" + Math.floor(d.getTime() / 1e3) : "");
            "sync" === e.new_experiments.mode && r.localStorage.getItem("__exponea__sync_modifications__")
                ? (function (e, n, t, i, o) {
                      (t[o][n] = "<" + n + ' src="' + e + '"></' + n + ">"),
                          i.writeln(t[o][n]),
                          i.writeln("<" + n + ">!" + o + ".init && document.writeln(" + o + "." + n + '.replace("/' + n + '/", "/' + n + '-async/").replace("><", " async><"))</' + n + ">");
                  })(g, n, r, p, t)
                : (function (e, n, t, i, o, r, s, c) {
                      r.documentElement.classList.add(e);
                      const a = m(t, i, r);
                      function p() {
                          o[c].init || m(t.replace("/" + i + "/", "/" + i + "-async/"), i, r);
                      }
                      function l() {
                          r.documentElement.classList.remove(e);
                      }
                      (a.onload = p), (a.onerror = p), o.setTimeout(l, n), (o[s]._revealPage = l);
                  })(u, _, g, n, r, p, o, t);
        })(r, t, i, 0, n, o, e),
        (function (e, n, t) {
            var i;
            e[n]._initializeConfig(t),
                (null === (i = t.experimental) || void 0 === i ? void 0 : i.non_personalized_weblayers) && e[n]._preInitialize(t),
                (e[n].start = function (i) {
                    i && Object.keys(i).forEach((e) => (t[e] = i[e])), e[n].initialize(t);
                });
        })(o, n, r);
})(document, "exponea", "script", "webxpClient", window, {
    target: "https://api-samokat.exponea.com",
    token: "d601f5fe-c6ff-11ed-ba8c-ee7ddf983def",
    experimental: {
        non_personalized_weblayers: true,
    },
    // replace with current customer ID or leave commented out for an anonymous customer
    // customer: window.currentUserId,
    track: {
        google_analytics: false,
    },
});
exponea.start();