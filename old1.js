<script>
	!(function (e, n, t, i, o, r) {
    	function a(e) {
        	if ("number" != typeof e) return e;
        	var n = new Date();
        	return new Date(n.getTime() + 1e3 * e);
    	}
    	var c = 4e3,
        	s = "xnpe_async_hide";
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
        	var i = t.createElement(n);
        	i.src = e;
        	var o = t.getElementsByTagName(n)[0];
        	return o.parentNode.insertBefore(i, o), i;
    	}
    	function u(e) {
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
        	])),
        	(o[n].notifications = p(["isAvailable", "isSubscribed", "subscribe", "unsubscribe"])),
        	(o[n]["snippetVersion"] = "v2.5.0"),
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
            	if (e.new_experiments) {
                	!0 === e.new_experiments && (e.new_experiments = {});
                	var l,
                    	f = e.new_experiments.hide_class || s,
                    	_ = e.new_experiments.timeout || c,
                    	d = encodeURIComponent(r.location.href.split("#")[0]);
                	e.cookies &&
                    	e.cookies.expires &&
                    	("number" == typeof e.cookies.expires || u(e.cookies.expires)
                        	? (l = a(e.cookies.expires))
                        	: e.cookies.expires.tracking && ("number" == typeof e.cookies.expires.tracking || u(e.cookies.expires.tracking)) && (l = a(e.cookies.expires.tracking))),
                    	l && l < new Date() && (l = void 0);
                	var x = e.target + "/webxp/" + n + "/" + r[t].sign + "/modifications.min.js?http-referer=" + d + "&timeout=" + _ + "ms" + (l ? "&cookie-expires=" + Math.floor(l.getTime() / 1e3) : "");
                	"sync" === e.new_experiments.mode && r.localStorage.getItem("__exponea__sync_modifications__")
                    	? (function (e, n, t, i, o) {
                          	(t[o][n] = "<" + n + ' src="' + e + '"></' + n + ">"),
                              	i.writeln(t[o][n]),
                              	i.writeln("<" + n + ">!" + o + ".init && document.writeln(" + o + "." + n + '.replace("/' + n + '/", "/' + n + '-async/").replace("><", " async><"))</' + n + ">");
                      	})(x, n, r, p, t)
                    	: (function (e, n, t, i, o, r, a, c) {
                          	r.documentElement.classList.add(e);
                          	var s = m(t, i, r);
                          	function p() {
                              	o[c].init || m(t.replace("/" + i + "/", "/" + i + "-async/"), i, r);
                          	}
                          	function u() {
                              	r.documentElement.classList.remove(e);
                          	}
                          	(s.onload = p), (s.onerror = p), o.setTimeout(u, n), (o[a]._revealPage = u);
                      	})(f, _, x, n, r, p, o, t);
            	}
        	})(r, t, i, 0, n, o, e),
        	(function (e, n, t) {
            	var i;
            	(null === (i = t.experimental) || void 0 === i ? void 0 : i.non_personalized_weblayers) && e[n]._preInitialize(t),
                	(e[n].start = function (i) {
                    	i &&
                        	Object.keys(i).forEach(function (e) {
                            	return (t[e] = i[e]);
                        	}),
                        	e[n].initialize(t);
                	});
        	})(o, n, r);
	})(document, "exponea", "script", "webxpClient", window, {
    	target: "https://api-samokat.exponea.com",
    	token: "d601f5fe-c6ff-11ed-ba8c-ee7ddf983def",
    	// replace with current customer ID or leave commented out for an anonymous customer
    	// customer: window.currentUserId,
    	track: {
        	visits: true,
        	google_analytics: false,
    	},
	});
	exponea.start();
</script>