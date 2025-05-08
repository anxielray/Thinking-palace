"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[588], {
    1544: function(e, t, a) {
        a.r(t),
        a.d(t, {
            default: function() {
                return l
            },
            useSupabase: function() {
                return s
            }
        });
        var n = a(3955)
          , i = a(3266)
          , o = a(6008)
          , r = a(2310);
        let c = (0,
        r.createContext)(void 0);
        function l(e) {
            let {children: t} = e
              , [a] = (0,
            r.useState)( () => (0,
            i.createPagesBrowserClient)())
              , l = (0,
            o.useRouter)();
            return (0,
            r.useEffect)( () => {
                let {data: {subscription: e}} = a.auth.onAuthStateChange(e => {
                    "SIGNED_IN" === e && l.refresh()
                }
                );
                return () => {
                    e.unsubscribe()
                }
            }
            , [l, a]),
            (0,
            n.jsx)(c.Provider, {
                value: {
                    supabase: a
                },
                children: (0,
                n.jsx)(n.Fragment, {
                    children: t
                })
            })
        }
        let s = () => {
            let e = (0,
            r.useContext)(c);
            if (void 0 === e)
                throw Error("useSupabase must be used inside SupabaseProvider");
            return e
        }
    },
    5311: function(e, t, a) {
        var n = a(3955);
        let i = e => {
            let {color: t} = e;
            return (0,
            n.jsx)("div", {
                className: "flex fixed justify-center flex-col gap-[20px] items-center text-center h-[100dvh] w-[100dvw] top-0 left-0\n      text-[22px] font-medium z-[101] ".concat("black" === t ? "bg-black" : "bg-white"),
                children: (0,
                n.jsx)("div", {
                    className: "loader ".concat("black" === t ? "loader-white" : "loader-black")
                })
            })
        }
        ;
        t.Z = i
    },
    9957: function(e, t, a) {
        a.d(t, {
            n: function() {
                return s
            }
        });
        var n = a(3955)
          , i = a(1698)
          , o = a(4490)
          , r = a(5846)
          , c = a.n(r);
        let l = {
            footer1: d
        }
          , s = (e, t, a, n, i, r) => {
            let c = l[e.type];
            return c(e, t, a, (0,
            o.r5)(n), i, r)
        }
        ;
        async function d(e, t, a, o, r, l) {
            var s;
            let d = {
                external_bg: "".concat(o.bg.main),
                svg: "".concat(o.text.v3),
                title1_text: "".concat(o.text.main),
                description1_text: "".concat(o.text.v2),
                title2_text: "".concat(o.text.v2),
                link: "".concat(o.text.v2, " ").concat(o.hover.text.v1, " ").concat(o.active.text.v1),
                copyright_text: "".concat(o.text.v2)
            };
            return (0,
            n.jsx)("div", {
                id: "footer",
                className: "".concat(d.external_bg, " ").concat(o.font_family, " p-4 sm:pt-10 lg:p-12 border-t-[1px] border-solid border-gray-600"),
                children: (0,
                n.jsx)("footer", {
                    className: "mx-auto max-w-screen-2xl px-4 md:px-8",
                    children: (0,
                    n.jsxs)("div", {
                        className: "mb-16 flex flex-col md:flex-row md:gap-12 gap-4 pt-10 lg:gap-8 lg:pt-12",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "col-span-full lg:col-span-2",
                            children: [(0,
                            n.jsx)("div", {
                                className: "mb-4 lg:-mt-2",
                                children: (0,
                                n.jsxs)(c(), {
                                    href: a,
                                    className: "".concat(d.title1_text, " inline-flex items-center gap-2 text-xl font-bold md:text-2xl"),
                                    "aria-label": "logo",
                                    children: [l && (0,
                                    n.jsx)("img", {
                                        src: l,
                                        alt: "",
                                        className: "w-[40px] rounded-lg flex-1"
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "max-w-[700px]",
                                        children: t.title
                                    })]
                                })
                            }), (0,
                            n.jsx)("p", {
                                className: "".concat(d.description1_text, " max-w-[500px] mb-6 sm:pr-8"),
                                children: e.description
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            children: [(0,
                            n.jsx)("div", {
                                className: "".concat(d.title2_text, " mb-4 font-bold tracking-widest"),
                                children: e.navName ? e.navName : "Navigation"
                            }), (0,
                            n.jsx)("nav", {
                                className: "flex flex-col gap-4",
                                children: null === (s = t.navItems) || void 0 === s ? void 0 : s.map(e => (0,
                                n.jsx)("div", {
                                    children: (0,
                                    n.jsx)(c(), {
                                        href: "/" === a ? e.link : "".concat(a, "/").concat(e.link),
                                        className: "".concat(d.link, " transition duration-100"),
                                        children: (0,
                                        i.f)(e.name)
                                    })
                                }, "".concat(e.link)))
                            })]
                        })]
                    })
                })
            })
        }
    },
    1883: function(e, t, a) {
        a.d(t, {
            v: function() {
                return s
            }
        });
        var n = a(3955)
          , i = a(1698)
          , o = a(4490)
          , r = a(5846)
          , c = a.n(r);
        let l = {
            header1: d
        }
          , s = (e, t, a, n) => {
            let i = l[e.type];
            return i(e, (0,
            o.r5)(t), a, n)
        }
        ;
        async function d(e, t, a, o) {
            var r;
            let l = () => {
                let e = document.getElementById("navbar-collapse-with-animation");
                e && e.classList.toggle("hidden")
            }
              , s = {
                external_bg: "".concat(t.bg.main),
                title1_text: "".concat(t.text.main),
                button1: "\n      ".concat(t.border.v1, "\n      ").concat(t.text.v3, "\n      ").concat(t.hover.border.v1, "\n    "),
                link: "".concat(t.text.main, " ").concat(t.hover.text.v1),
                button: "".concat(t.text.main, " ").concat(t.hover.text.v1),
                svg: "".concat(t.text.main, " ").concat(t.hover.text.v1)
            };
            return (0,
            n.jsx)("header", {
                id: "header",
                className: "".concat(t.font_family, " min-h-[60px] flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full ").concat(s.external_bg, " text-sm py-3 sm:py-0 border-b-[1px] border-solid border-gray-600"),
                children: (0,
                n.jsxs)("nav", {
                    className: "relative max-w-screen-2xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8",
                    "aria-label": "Global",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center justify-between flex-grow-1",
                        children: [(0,
                        n.jsxs)(c(), {
                            className: "flex text-xl gap-2 items-center justify-center font-semibold ".concat(s.title1_text),
                            href: a,
                            "aria-label": "Brand",
                            children: [o && (0,
                            n.jsx)("img", {
                                src: o,
                                alt: "",
                                className: "w-[40px] rounded-lg flex-1"
                            }), (0,
                            n.jsx)("span", {
                                className: "text-[16px] md:text-[20px] leading-none",
                                children: e.title
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "sm:hidden",
                            children: (0,
                            n.jsxs)("button", {
                                type: "button",
                                onClick: l,
                                className: "hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border ".concat(s.button1, " disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1"),
                                "data-hs-collapse": "#navbar-collapse-with-animation",
                                "aria-controls": "navbar-collapse-with-animation",
                                "aria-label": "Toggle navigation",
                                children: [(0,
                                n.jsxs)("svg", {
                                    className: "hs-collapse-open:hidden flex-shrink-0 size-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0,
                                    n.jsx)("line", {
                                        x1: "3",
                                        x2: "21",
                                        y1: "6",
                                        y2: "6"
                                    }), (0,
                                    n.jsx)("line", {
                                        x1: "3",
                                        x2: "21",
                                        y1: "12",
                                        y2: "12"
                                    }), (0,
                                    n.jsx)("line", {
                                        x1: "3",
                                        x2: "21",
                                        y1: "18",
                                        y2: "18"
                                    })]
                                }), (0,
                                n.jsxs)("svg", {
                                    className: "hs-collapse-open:block hidden flex-shrink-0 size-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [(0,
                                    n.jsx)("path", {
                                        d: "M18 6 6 18"
                                    }), (0,
                                    n.jsx)("path", {
                                        d: "m6 6 12 12"
                                    })]
                                })]
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        id: "navbar-collapse-with-animation",
                        className: "hs-collapse hidden overflow-hidden transition-all duration-300 sm:block",
                        children: (0,
                        n.jsx)("div", {
                            className: "flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7",
                            children: null === (r = e.navItems) || void 0 === r ? void 0 : r.map(e => (0,
                            n.jsx)(c(), {
                                className: "font-medium ".concat(s.link, " sm:py-6"),
                                href: "/" === a ? e.link : "".concat(a, "/").concat(e.link),
                                children: (0,
                                i.f)(e.name)
                            }, e.link))
                        })
                    })]
                })
            })
        }
    },
    9434: function(e, t, a) {
        a.d(t, {
            H: function() {
                return en
            }
        });
        var n = a(3955)
          , i = a(4490)
          , o = a(5846)
          , r = a.n(o);
        let c = {
            banner1: s,
            banner2: d,
            banner3: x
        }
          , l = (e, t) => {
            let a = c[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function s(e, t) {
            var a;
            let i = {
                external_bg: "".concat(t.from.main, " ").concat(t.via.main, " ").concat(t.to.main),
                title1_text: "".concat(t.text.v1),
                description1_text: "".concat(t.text.v1),
                button1: "\n      ".concat(t.border.main, "\n      ").concat(t.bg.main, "\n      ").concat(t.text.v2, "\n      ").concat(t.hover.text.v1, "\n    ")
            };
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "bg-gradient-to-r ".concat(i.external_bg, " ").concat(t.font_family),
                children: (0,
                n.jsx)("div", {
                    className: "px-4 py-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto",
                    children: (0,
                    n.jsxs)("div", {
                        className: "grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "text-center md:text-start",
                            children: [(0,
                            n.jsx)("p", {
                                className: "text-xs ".concat(i.title1_text, " uppercase tracking-wider"),
                                children: e.title
                            }), (0,
                            n.jsx)("p", {
                                className: "mt-1 ".concat(i.description1_text, " font-medium"),
                                children: e.description
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: "mt-3 text-center md:text-start md:flex md:justify-end md:items-center",
                            children: (0,
                            n.jsx)(r(), {
                                className: "".concat(i.button1, " py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1"),
                                href: null !== (a = e.buttonLink) && void 0 !== a ? a : window.location.href,
                                children: e.buttonName
                            })
                        })]
                    })
                })
            })
        }
        async function d(e, t) {
            var a;
            let i = {
                external_bg: "".concat(t.bg.v1),
                title1_text: "".concat(t.text.v1),
                button1: "".concat(t.hover.text.main),
                button2: "".concat(t.text.v1, " ").concat(t.hover.text.main)
            };
            return (0,
            n.jsx)("div", {
                id: "banner",
                className: "hs-removing:-translate-y-full ".concat(i.external_bg, " ").concat(t.font_family),
                children: (0,
                n.jsx)("div", {
                    className: "px-4 py-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto",
                    children: (0,
                    n.jsx)("div", {
                        className: "flex items-center",
                        children: (0,
                        n.jsxs)("p", {
                            className: "".concat(i.title1_text),
                            children: [e.title, "\xa0", (0,
                            n.jsx)(r(), {
                                className: "decoration-2 underline font-medium ".concat(i.button1, " dark:focus:outline-none dark:focus:ring-1"),
                                href: null !== (a = e.buttonLink) && void 0 !== a ? a : window.location.href,
                                children: e.buttonName
                            })]
                        })
                    })
                })
            })
        }
        async function x(e, t) {
            let a = {
                external_bg: "".concat(t.bg.v1),
                title1_text: "".concat(t.text.v1),
                button1: "".concat(t.text.v1)
            };
            return (0,
            n.jsx)("div", {
                className: "w-full py-4 ".concat(t.font_family, " ").concat(a.external_bg, " bg-[url('https://preline.co/assets/svg/examples/abstract-1.svg')] bg-no-repeat bg-cover bg-center text-center"),
                children: (0,
                n.jsx)("p", {
                    className: "me-2 inline-block ".concat(a.title1_text),
                    children: e.title
                })
            })
        }
        let m = {
            faq1: v,
            faq2: p
        }
          , g = (e, t) => {
            let a = m[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function v(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                title1_text: "".concat(t.text.main),
                form_divide: "".concat(t.divide.main),
                svg_text: "".concat(t.text.v2),
                title2_text: "".concat(t.text.v3),
                description2_text: "".concat(t.text.v2)
            };
            return (0,
            n.jsxs)("div", {
                id: e.id,
                className: "mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ".concat(t.font_family, " ").concat(a.external_bg),
                children: [(0,
                n.jsx)("div", {
                    className: "max-w-2xl mx-auto mb-10 lg:mb-14",
                    children: (0,
                    n.jsx)("h2", {
                        className: "text-2xl font-bold md:text-4xl md:leading-tight ".concat(a.title1_text),
                        children: e.title
                    })
                }), (0,
                n.jsx)("div", {
                    className: "max-w-2xl mx-auto divide-y ".concat(a.form_divide),
                    children: e.points.map( (e, t) => (0,
                    n.jsx)("div", {
                        className: "py-8 first:pt-0 last:pb-0",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex gap-x-5",
                            children: [(0,
                            n.jsxs)("svg", {
                                className: "flex-shrink-0 mt-1 size-6 ".concat(a.svg_text),
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [(0,
                                n.jsx)("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }), (0,
                                n.jsx)("path", {
                                    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                }), (0,
                                n.jsx)("path", {
                                    d: "M12 17h.01"
                                })]
                            }), (0,
                            n.jsxs)("div", {
                                children: [(0,
                                n.jsx)("h3", {
                                    className: "md:text-lg font-semibold ".concat(a.title2_text),
                                    children: e.title
                                }), (0,
                                n.jsx)("p", {
                                    className: "mt-1 ".concat(a.description2_text),
                                    children: e.description
                                })]
                            })]
                        })
                    }, "".concat(e.title, "_").concat(t)))
                })]
            })
        }
        async function p(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                title1: "".concat(t.text.main),
                title2: "".concat(t.bg.main, " ").concat(t.text.v1),
                title2_text2: "".concat(t.text.v2),
                description2_text: "".concat(t.text.v2)
            };
            return (0,
            n.jsxs)("div", {
                id: e.id,
                className: "".concat(a.external_bg, " ").concat(t.font_family, " px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"),
                children: [(0,
                n.jsx)("div", {
                    className: "max-w-2xl mx-auto text-center mb-10 lg:mb-14",
                    children: (0,
                    n.jsx)("h2", {
                        className: "text-2xl font-bold md:text-3xl md:leading-tight ".concat(a.title1),
                        children: e.title
                    })
                }), (0,
                n.jsx)("div", {
                    className: "max-w-5xl mx-auto",
                    children: (0,
                    n.jsx)("div", {
                        className: "grid sm:grid-cols-2 gap-6 md:gap-12",
                        children: e.points.map( (e, t) => (0,
                        n.jsxs)("div", {
                            className: "".concat(a.title2),
                            children: [(0,
                            n.jsx)("h3", {
                                className: "text-lg font-semibold ".concat(a.title2_text2),
                                children: e.title
                            }), (0,
                            n.jsx)("p", {
                                className: "mt-2 ".concat(a.description2_text, " dark:text-gray-400"),
                                children: e.description
                            })]
                        }, "".concat(e.title, "_").concat(t)))
                    })
                })]
            })
        }
        let h = "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          , b = async e => {
            try {
                var t, a, n, i, o, r;
                let c = await fetch("https://api.pexels.com/v1/search?query=".concat(e, "&orientation=landscape"), {
                    method: "GET",
                    headers: {
                        Authorization: "NTARkwWyUvsMWz5sR19As9xoxEWX59gwbfKIbuNe40YUWd3XzlWRpOlg"
                    }
                });
                if (!c.ok)
                    throw Error("Error when get from image from Pexels API");
                let l = await c.json();
                if (.5 > Math.random() && l.photos.length > 1)
                    return null !== (o = null !== (i = null === (a = l.photos[1]) || void 0 === a ? void 0 : a.src.original) && void 0 !== i ? i : null === (n = l.photos[0]) || void 0 === n ? void 0 : n.src.original) && void 0 !== o ? o : h;
                return null !== (r = null === (t = l.photos[0]) || void 0 === t ? void 0 : t.src.original) && void 0 !== r ? r : h
            } catch (e) {
                return console.error("Error when get from image from Pexels API:", e),
                h
            }
        }
        ;
        async function u(e) {
            return e.includes("pexels.com") || e.includes("yralcgckodgemrozhvhn.supabase.co") || e.includes("r2.dev") ? e : await b(e)
        }
        let f = {
            features2: w,
            features3: j
        }
          , y = (e, t) => {
            let a = f[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function w(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                title1: "".concat(t.text.main),
                button: "".concat(t.hover.bg.main),
                svg: "".concat(t.text.main),
                title2: "".concat(t.text.main),
                description2: "".concat(t.text.v2),
                img_bg: "".concat(t.shadow.main),
                svg2_text: "".concat(t.text.v3),
                bgColor: "".concat(t.bg.v2)
            }
              , i = await u(e.imagePrompt);
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ".concat(t.font_family, " ").concat(a.external_bg),
                children: (0,
                n.jsx)("div", {
                    className: "relative bg-".concat(a.external_bg, " max-w-screen-2xl m-auto"),
                    children: (0,
                    n.jsxs)("div", {
                        className: "relative flex w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 ".concat(e.isReverse ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"),
                        children: [(0,
                        n.jsxs)("div", {
                            className: "mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 w-full lg:w-1/2 ",
                            children: [(0,
                            n.jsx)("h2", {
                                className: "text-2xl ".concat(a.title1, " font-bold sm:text-3xl"),
                                children: e.title
                            }), (0,
                            n.jsx)("nav", {
                                className: "grid lg:gap-10 mt-5 md:mt-10 gap-5",
                                "aria-label": "Tabs",
                                role: "tablist",
                                children: e.points.map( (e, t) => (0,
                                n.jsx)("button", {
                                    type: "button",
                                    className: "".concat(a.button, " hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start p-4 md:p-5 rounded-xl dark:focus:outline-none dark:focus:ring-1 active"),
                                    id: "tabs-with-card-item-1",
                                    "data-hs-tab": "#tabs-with-card-1",
                                    "aria-controls": "tabs-with-card-1",
                                    role: "tab",
                                    children: (0,
                                    n.jsx)("span", {
                                        className: "flex",
                                        children: (0,
                                        n.jsxs)("span", {
                                            className: "grow",
                                            children: [(0,
                                            n.jsx)("span", {
                                                className: "block text-lg font-semibold ".concat(a.title2),
                                                children: e.title
                                            }), (0,
                                            n.jsx)("span", {
                                                className: "block mt-1 ".concat(a.description2),
                                                children: e.description
                                            })]
                                        })
                                    })
                                }, "".concat(e.title, "_").concat(t)))
                            })]
                        }), (0,
                        n.jsx)("div", {
                            className: " w-full lg:w-1/2",
                            children: (0,
                            n.jsx)("div", {
                                className: "relative w-full",
                                children: (0,
                                n.jsx)("div", {
                                    children: (0,
                                    n.jsx)("div", {
                                        id: "tabs-with-card-1",
                                        className: "tabpanel",
                                        "aria-labelledby": "tabs-with-card-item-1",
                                        children: (0,
                                        n.jsx)("img", {
                                            className: "shadow-xl ".concat(a.img_bg, " max-h-[550px] rounded-xl dark:shadow-gray-900/[.2]"),
                                            src: i,
                                            alt: "Image Description"
                                        })
                                    })
                                })
                            })
                        })]
                    })
                })
            })
        }
        async function j(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                internal_bg: "".concat(t.bg.main),
                title1_text: "".concat(t.text.main),
                description1_text: "".concat(t.text.v2),
                svg_bg: "".concat(t.bg.v1),
                svg_text1: "".concat(t.text.v1),
                svg_text2: "".concat(t.text.v1),
                title2_text1: "".concat(t.text.v2),
                title2_text2: "".concat(t.text.main)
            }
              , i = await u(e.imagePrompt);
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ".concat(t.font_family, " ").concat(a.external_bg),
                children: (0,
                n.jsxs)("div", {
                    className: "max-w-screen-2xl justify-center mx-auto flex md:items-center gap-11 md:gap-12 xl:gap-32 ".concat(e.isReverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"),
                    children: [(0,
                    n.jsx)("div", {
                        children: (0,
                        n.jsx)("img", {
                            className: "rounded-xl max-h-[450px]",
                            src: i,
                            alt: "Image Description"
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "mt-2 ".concat(a.internal_bg),
                        children: (0,
                        n.jsxs)("div", {
                            className: "space-y-6 sm:space-y-8",
                            children: [(0,
                            n.jsx)("div", {
                                className: "space-y-2 md:space-y-4",
                                children: (0,
                                n.jsx)("h2", {
                                    className: "font-bold text-3xl lg:text-4xl ".concat(a.title1_text),
                                    children: e.title
                                })
                            }), (0,
                            n.jsx)("ul", {
                                role: "list",
                                className: "space-y-2 sm:space-y-4",
                                children: e.points.map( (e, t) => (0,
                                n.jsxs)("li", {
                                    className: "flex space-x-3",
                                    children: [(0,
                                    n.jsx)("span", {
                                        className: "mt-0.5 size-5 flex justify-center items-center rounded-full ".concat(a.svg_bg, " ").concat(a.svg_text1),
                                        children: (0,
                                        n.jsx)("svg", {
                                            className: "flex-shrink-0 size-3.5 ".concat(a.svg_text2),
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0,
                                            n.jsx)("polyline", {
                                                points: "20 6 9 17 4 12"
                                            })
                                        })
                                    }), (0,
                                    n.jsx)("span", {
                                        className: "text-sm sm:text-base ".concat(a.title2_text1),
                                        children: (0,
                                        n.jsx)("span", {
                                            className: "font-bold ".concat(a.title2_text2),
                                            children: e.title
                                        })
                                    })]
                                }, "".concat(e.title, "_").concat(t)))
                            })]
                        })
                    })]
                })
            })
        }
        let k = {
            hero3: _,
            hero8: C
        }
          , N = (e, t) => {
            let a = k[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function _(e, t) {
            var a;
            let i = {
                external_bg: "".concat(t.bg.main),
                internal_bg: "".concat(t.bg.v2),
                subtitle_text: "".concat(t.text.v3),
                title_text: "".concat(t.text.main),
                button1: "\n      ".concat(t.bg.v1, "\n      ").concat(t.text.v1, "\n      ").concat(t.hover.bg.v1, "\n      ").concat(t.active.bg.v1, "\n    "),
                button2: "\n      ".concat(t.bg.v4, "\n      ").concat(t.text.v2, "\n      ").concat(t.hover.bg.main, "\n      ").concat(t.active.bg.v1, "\n    ")
            }
              , o = await u(e.imagePrompt);
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(i.external_bg, " ").concat(t.font_family, " pb-6 sm:pb-8 lg:pb-12"),
                children: (0,
                n.jsxs)("div", {
                    className: "mx-auto max-w-screen-2xl px-4 md:px-8",
                    children: [(0,
                    n.jsx)("div", {
                        className: "py-4"
                    }), (0,
                    n.jsxs)("section", {
                        className: "min-h-96 relative md:grid md:grid-cols-2 md:items-center md:gap-6 xl:gap-16 overflow-hidden py-12 px-4 md:p-10 xl:p-12 rounded-lg",
                        children: [(0,
                        n.jsx)("div", {
                            className: "flex flex-col justify-between ".concat(e.isReverse ? "order-2" : ""),
                            children: (0,
                            n.jsxs)("div", {
                                className: "sm:text-center lg:py-12 lg:text-left xl:py-24",
                                children: [(0,
                                n.jsx)("p", {
                                    className: "".concat(i.subtitle_text, " mb-4 font-semibold md:mb-6 md:text-lg xl:text-xl"),
                                    children: e.subtitle
                                }), (0,
                                n.jsx)("h1", {
                                    className: "".concat(i.title_text, " mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-4xl"),
                                    children: e.title
                                }), e.button1 && (0,
                                n.jsx)("div", {
                                    className: "flex",
                                    children: (0,
                                    n.jsx)(r(), {
                                        className: "inline-flex ".concat(i.button1, " border-0 py-2 px-6 focus:outline-none rounded text-lg"),
                                        href: null !== (a = e.button1Link) && void 0 !== a ? a : window.location.href,
                                        children: e.button1
                                    })
                                })]
                            })
                        }), (0,
                        n.jsx)("div", {
                            children: (0,
                            n.jsx)("img", {
                                src: o,
                                loading: "lazy",
                                alt: "",
                                className: "h-full w-full object-cover object-center rounded-lg shadow-lg"
                            })
                        })]
                    })]
                })
            })
        }
        async function C(e, t) {
            var a;
            let i = {
                external_text: "".concat(t.text.main),
                title_text: "".concat(t.text.main),
                button1: "\n      ".concat(t.text.v4, "\n      ").concat(t.bg.v1, "\n      ").concat(t.hover.bg.v2, "\n    "),
                button2: "\n      ".concat(t.text.main, "\n      ").concat(t.bg.main, "\n      ").concat(t.hover.bg.main, "\n    ")
            }
              , o = await u(e.imagePrompt);
            return (0,
            n.jsx)("section", {
                id: e.id,
                className: "".concat(t.text.v4, " ").concat(t.font_family),
                style: {
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('".concat(o, "')"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%"
                },
                children: (0,
                n.jsx)("div", {
                    className: "container max-w-screen-2xl mx-auto flex px-5 py-24 pt-64 md:flex-row flex-col items-center",
                    children: (0,
                    n.jsxs)("div", {
                        className: "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ".concat(e.isReverse ? "md:items-end" : ""),
                        children: [(0,
                        n.jsx)("h1", {
                            className: "title-font sm:text-4xl text-3xl mb-4 font-medium ".concat(t.text.v4),
                            children: e.title
                        }), (0,
                        n.jsx)("p", {
                            className: "mb-8 leading-relaxed",
                            children: e.subtitle
                        }), e.button1 && (0,
                        n.jsx)("div", {
                            className: "flex justify-center",
                            children: (0,
                            n.jsx)(r(), {
                                className: "inline-flex ".concat(i.button1, " border-0 py-2 px-6 focus:outline-none rounded text-lg"),
                                href: null !== (a = e.button1Link) && void 0 !== a ? a : window.location.href,
                                children: e.button1
                            })
                        })]
                    })
                })
            })
        }
        let L = {
            pricing4: M
        }
          , T = (e, t) => {
            let a = L[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function M(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                svg_text: "".concat(t.text.v3),
                title1_text: "".concat(t.text.v2),
                title2_text: "".concat(t.text.v2),
                checkMark_text: "".concat(t.bg.v2),
                title3_text: "".concat(t.text.v2),
                title4_text: "".concat(t.text.v2),
                span3_text: "".concat(t.text.v2),
                span_text: "".concat(t.text.v2),
                price_text1: "".concat(t.text.v2),
                price_text2: "".concat(t.text.v2),
                button2: "\n      ".concat(t.bg.v4, "\n      ").concat(t.text.v2, "\n      ").concat(t.hover.bg.v3, "\n      ").concat(t.active.bg.main, "\n    "),
                plan2_border: "".concat(t.border.main),
                span2_text: "".concat(t.text.v1),
                span2_bg: "".concat(t.bg.v1),
                button3: "\n      ".concat(t.bg.v1, " \n      ").concat(t.text.v1, " \n      ").concat(t.hover.bg.v2, " \n      ").concat(t.active.bg.main),
                button4: "\n      ".concat(t.bg.v4, " \n      ").concat(t.text.v2, " \n      ").concat(t.hover.bg.v3, " \n      ").concat(t.active.bg.main, "\n    ")
            }
              , i = (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-6 w-6 shrink-0 ".concat(a.svg_text),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0,
                    n.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M5 13l4 4L19 7"
                    })
                })
            });
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(a.external_bg, " ").concat(t.font_family, " py-6 sm:py-8 lg:py-12"),
                children: (0,
                n.jsxs)("div", {
                    className: "mx-auto max-w-screen-xl px-4 md:px-8",
                    children: [(0,
                    n.jsx)("h2", {
                        className: "mb-4 text-center text-2xl font-bold ".concat(a.title1_text, " md:mb-8 lg:text-3xl xl:mb-12"),
                        children: e.title
                    }), (0,
                    n.jsx)("div", {
                        className: "mb-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8",
                        children: e.prices.map( (e, t) => (0,
                        n.jsxs)("div", {
                            className: "flex flex-col space-y-4",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "flex flex-col gap-4 rounded-lg border p-4 pt-6",
                                children: [(0,
                                n.jsx)("h3", {
                                    className: "text-center text-2xl font-semibold ".concat(a.title2_text),
                                    children: e.priceTitle
                                }), (0,
                                n.jsx)("div", {
                                    className: "flex items-end justify-center gap-1",
                                    children: (0,
                                    n.jsx)("span", {
                                        className: "text-4xl font-bold ".concat(a.price_text1),
                                        children: e.price
                                    })
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "flex-1 space-y-3 rounded-lg ".concat(a.checkMark_text, " px-4 py-6"),
                                children: e.benefits.map( (e, t) => (0,
                                n.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [i, (0,
                                    n.jsx)("span", {
                                        className: "".concat(a.span_text),
                                        children: e
                                    })]
                                }, "".concat(e, "_").concat(t)))
                            })]
                        }, "".concat(e.priceTitle, "_").concat(t)))
                    })]
                })
            })
        }
        var B = a(1698);
        let P = {
            form1: H
        }
          , S = (e, t, a) => {
            let n = P[e.type];
            return n(e, (0,
            i.r5)(t), a)
        }
          , z = e => {
            let t = Object.entries(e)
              , a = t.map(e => {
                let[t,a] = e;
                return "<p><strong>".concat(t.charAt(0).toUpperCase() + t.slice(1), ":</strong> ").concat(a, "</p>")
            }
            ).join("");
            return "\n    <h1>New message from your website</h1>\n    ".concat(a, "\n  ")
        }
        ;
        async function H(e, t, a) {
            let i = {
                external_bg: "".concat(t.bg.main),
                title1_text: "".concat(t.text.main),
                description1_text: "".concat(t.text.v2),
                label_text: "".concat(t.text.v2),
                input: "".concat(t.bg.main, " ").concat(t.text.v2, " ").concat(t.ring.main),
                button: "\n    ".concat(t.text.v1, "\n    ").concat(t.bg.v1, "\n    ").concat(t.hover.bg.v2, "\n    ").concat(t.active.bg.v1),
                help_text: "".concat(t.text.v2),
                link: "\n      ".concat(t.hover.text.v1, "\n      ").concat(t.active.text.v1, "\n    ")
            }
              , o = async t => {
                if (t.preventDefault(),
                !a)
                    return;
                let n = document.querySelector("#send-button")
                  , i = n.innerHTML;
                t.currentTarget.disabled = !0,
                t.currentTarget.innerText = "Sending Message...";
                let o = {};
                e.inputs.forEach(e => {
                    if ("textarea" === e.inputType) {
                        let t = document.querySelector('textarea[name="'.concat(e.inputName, '-for"]'));
                        t && (o[e.inputName] = t.value)
                    } else {
                        let t = document.querySelector('input[name="'.concat(e.inputName, '-for"]'));
                        t && (o[e.inputName] = t.value)
                    }
                }
                );
                let r = z(o);
                try {
                    let e = await fetch("".concat("https://pyxl.ai", "/api/send-mail"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            to: a,
                            subject: "Form from Pyxl.ai",
                            text: "Form from Pyxl.ai",
                            html: r
                        })
                    });
                    await e.text(),
                    n.innerHTML = "The form was submitted.",
                    setTimeout( () => {
                        n.disabled = !1,
                        n.innerHTML = i
                    }
                    , 2e3)
                } catch (e) {
                    n.innerHTML = "Error while sending.",
                    setTimeout( () => {
                        n.innerHTML = i,
                        n.disabled = !1
                    }
                    , 2e3),
                    console.error("Error when send mail:", e)
                }
            }
            ;
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(i.external_bg, " ").concat(t.font_family, " px-4 py-10 sm:px-6 lg:px-8 lg:py-14 "),
                children: (0,
                n.jsxs)("div", {
                    className: "mx-auto max-w-screen-2xl px-4 md:px-8",
                    children: [(0,
                    n.jsx)("div", {
                        className: "mb-10 md:mb-16",
                        children: (0,
                        n.jsx)("h2", {
                            className: "mb-4 text-center text-2xl font-bold ".concat(i.title1_text, " md:mb-6 lg:text-3xl"),
                            children: e.title
                        })
                    }), (0,
                    n.jsxs)("form", {
                        className: "mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2",
                        children: [e.inputs.map( (e, t) => "textarea" === e.inputType ? (0,
                        n.jsxs)("div", {
                            className: "sm:col-span-2",
                            children: [(0,
                            n.jsx)("label", {
                                htmlFor: "message",
                                className: "mb-2 inline-block text-sm ".concat(i.label_text, " sm:text-base"),
                                children: e.inputName
                            }), (0,
                            n.jsx)("textarea", {
                                name: "".concat(e.inputName, "-for"),
                                className: "h-64 w-full rounded border ".concat(i.input, " px-3 py-2 outline-none transition duration-100 focus:ring")
                            })]
                        }, "".concat(e.inputName, "_").concat(t)) : (0,
                        n.jsxs)("div", {
                            children: [(0,
                            n.jsx)("label", {
                                htmlFor: "".concat(e.inputName, "-for"),
                                className: "mb-2 inline-block text-sm ".concat(i.label_text, " sm:text-base"),
                                children: (0,
                                B.f)(e.inputName)
                            }), (0,
                            n.jsx)("input", {
                                name: "".concat(e.inputName, "-for"),
                                className: "w-full rounded border ".concat(i.input, " px-3 py-2 outline-none transition duration-100 focus:ring")
                            })]
                        }, "".concat(e.inputName, "_").concat(t))), (0,
                        n.jsx)("div", {
                            className: "flex items-center justify-between sm:col-span-2",
                            children: (0,
                            n.jsx)("button", {
                                id: "send-button",
                                onClick: e => void o(e),
                                className: "".concat(i.button, " disabled:bg-gray-400 inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold outline-none transition duration-100 focus-visible:ring md:text-base"),
                                children: e.sendButtonName
                            })
                        })]
                    })]
                })
            })
        }
        let A = async e => {
            if ("" === e)
                return [{
                    type: "empty",
                    answer: "Empty Address"
                }];
            let t = V(e);
            if (!t)
                return [{
                    type: "text",
                    answer: e
                }];
            if (t.startsWith("https://maps.app.goo.gl"))
                try {
                    let a = await fetch("/api/resolve-googlemaps-link", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            extractedLink: t
                        })
                    });
                    if (200 === a.status) {
                        let {longLink: n} = await a.json();
                        return [{
                            type: "link",
                            answer: null != n ? n : ""
                        }, {
                            type: "text",
                            answer: e.replace(t, "").trim().replace(/:$/, "").trim()
                        }]
                    }
                } catch (e) {
                    console.error(e)
                }
            for (let e of ["https://maps.google.com", "https://www.google.com"])
                if (t.startsWith(e))
                    return [{
                        type: "link",
                        answer: t
                    }];
            return [{
                type: "text",
                answer: e.replace(t, "").trim()
            }]
        }
          , V = e => {
            let t = e.match(/https?:\/\/[^\s]+/g);
            return t ? t[0] : null
        }
          , W = {
            tel: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                className: "h-6 w-6",
                children: (0,
                n.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                })
            }),
            address: (0,
            n.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "w-6 h-6",
                children: [(0,
                n.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                }), (0,
                n.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                })]
            }),
            email: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "w-6 h-6",
                children: (0,
                n.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                })
            }),
            name: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "currentColor",
                className: "w-6 h-6",
                children: (0,
                n.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                })
            }),
            facebook: (0,
            n.jsxs)("svg", {
                className: "w-6 h-6",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("g", {
                    children: (0,
                    n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z",
                        fill: "white"
                    })
                })]
            }),
            instagram: (0,
            n.jsxs)("svg", {
                className: "w-[35px] h-[35px] flex-shrink-0",
                fill: "#ffffff",
                viewBox: "0 0 32 32",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsxs)("g", {
                    id: "SVGRepo_iconCarrier",
                    children: [(0,
                    n.jsx)("path", {
                        d: "M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"
                    }), (0,
                    n.jsx)("path", {
                        d: "M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"
                    })]
                })]
            }),
            linkedin: (0,
            n.jsxs)("svg", {
                className: "w-[30px] h-[30px] flex-shrink-0",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("g", {
                    id: "SVGRepo_iconCarrier",
                    children: (0,
                    n.jsx)("path", {
                        fill: "#ffffff",
                        d: "M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                    })
                })]
            }),
            telegram: (0,
            n.jsxs)("svg", {
                className: "w-[30px] h-[30px] flex-shrink-0",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("g", {
                    id: "SVGRepo_iconCarrier",
                    children: (0,
                    n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z",
                        fill: "#ffffff"
                    })
                })]
            }),
            tiktok: (0,
            n.jsxs)("svg", {
                className: "w-[30px] h-[30px] flex-shrink-0",
                fill: "#ffffff",
                viewBox: "0 0 32 32",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsxs)("g", {
                    id: "SVGRepo_iconCarrier",
                    children: [(0,
                    n.jsx)("title", {
                        children: "tiktok"
                    }), (0,
                    n.jsx)("path", {
                        d: "M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"
                    })]
                })]
            }),
            twitter: (0,
            n.jsx)("svg", {
                className: "w-[25px] h-[25px] flex-shrink-0 textWhite",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                version: "1.1",
                children: (0,
                n.jsx)("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    fill: "white"
                })
            }),
            whatsapp: (0,
            n.jsxs)("svg", {
                className: "w-[30px] h-[30px] flex-shrink-0",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsxs)("g", {
                    id: "SVGRepo_iconCarrier",
                    children: [(0,
                    n.jsx)("path", {
                        d: "M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z",
                        fill: "#ffffff"
                    }), (0,
                    n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z",
                        fill: "#ffffff"
                    })]
                })]
            }),
            youtube: (0,
            n.jsxs)("svg", {
                className: "w-[30px] h-[30px] flex-shrink-0",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("g", {
                    strokeWidth: "0"
                }), (0,
                n.jsx)("g", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsxs)("g", {
                    id: "SVGRepo_iconCarrier",
                    children: [(0,
                    n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z",
                        fill: "#ffffff"
                    }), (0,
                    n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z",
                        fill: "#ffffff"
                    })]
                })]
            })
        }
          , I = {
            contact1: R
        }
          , q = (e, t) => {
            let a = I[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function R(e, t) {
            var a, i, o, c, l;
            let s = {
                external_bg: "".concat(t.bg.main),
                title1_text: "".concat(t.text.main),
                title2_text: "".concat(t.text.v2),
                description1_text: "".concat(t.text.v1),
                button: "\n    ".concat(t.text.v1, "\n    ").concat(t.bg.v1)
            }
              , d = (await Promise.all([null !== (c = null === (a = e.contactsInfos.find(e => "address" === e.type)) || void 0 === a ? void 0 : a.text) && void 0 !== c ? c : "", null !== (l = e.mapLink) && void 0 !== l ? l : ""].map(async e => await A(e)))).flat()
              , x = null === (i = d.find(e => "text" === e.type && e.answer)) || void 0 === i ? void 0 : i.answer
              , m = null === (o = d.find(e => "link" === e.type && e.answer)) || void 0 === o ? void 0 : o.answer;
            return !m && x && (m = "https://maps.google.com/maps?q=".concat(null == x ? void 0 : x.replaceAll(" ", ","))),
            (0,
            n.jsx)("div", {
                id: e.id,
                className: "mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14  ".concat(s.external_bg, "  ").concat(t.font_family),
                children: (0,
                n.jsx)("section", {
                    className: "max-w-screen-2xl mx-auto",
                    children: (0,
                    n.jsx)("div", {
                        className: "block rounded-lg",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex w-full items-center gap-20 justify-center xl:flex-nowrap flex-wrap ".concat(e.isReverse ? "flex-row-reverse" : ""),
                            children: [!0 === e.displayMap && (0,
                            n.jsx)("div", {
                                className: "w-full lg:w-1/2",
                                children: (0,
                                n.jsx)("div", {
                                    className: "h-[400px] w-full",
                                    children: (0,
                                    n.jsx)("iframe", {
                                        src: m ? m + "&z=13&ie=UTF8&iwloc=&output=embed" : "https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed",
                                        className: "left-0 top-0 h-full w-full rounded-lg",
                                        allowFullScreen: !0
                                    })
                                })
                            }), (0,
                            n.jsxs)("div", {
                                className: "w-full ".concat(!0 !== e.displayMap ? "lg:w-3/4" : "lg:w-1/2", " "),
                                children: [(0,
                                n.jsx)("h2", {
                                    className: "font-bold text-3xl lg:text-4xl ".concat(s.title1_text, " mb-10"),
                                    children: e.title ? e.title : "Contacts"
                                }), (0,
                                n.jsx)("div", {
                                    className: "flex flex-wrap md:pb-0 lg:pt-0",
                                    children: e.contactsInfos.map( (t, a) => (0,
                                    n.jsx)("div", {
                                        className: "mb-12 shrink-0 grow-0 basis-auto px-3 ".concat(!0 !== e.displayMap ? "sm:w-[49%] w-full" : "w-full"),
                                        children: (0,
                                        n.jsxs)("div", {
                                            className: "flex items-start",
                                            children: [(0,
                                            n.jsx)("div", {
                                                className: "shrink-0",
                                                children: (0,
                                                n.jsx)("div", {
                                                    className: "flex w-[60px] h-[60px] items-center justify-center rounded-md p-4 ".concat(s.button),
                                                    children: W[t.type]
                                                })
                                            }), (0,
                                            n.jsxs)("div", {
                                                className: "ml-6 shrink-0",
                                                children: [(0,
                                                n.jsx)("p", {
                                                    className: "".concat(s.title2_text),
                                                    children: t.title ? t.title : (0,
                                                    B.f)(t.type)
                                                }), t.link ? (0,
                                                n.jsx)(r(), {
                                                    className: "mb-2 max-w-[180px] sm:max-w-[250px] underline hover:no-underline font-bold ".concat(s.title1_text),
                                                    href: t.link,
                                                    children: "address" === t.type && x || t.text
                                                }) : (0,
                                                n.jsx)("p", {
                                                    className: "mb-2 max-w-[180px] sm:max-w-[250px] font-bold ".concat(s.title1_text),
                                                    children: "address" === t.type && x || t.text
                                                })]
                                            })]
                                        })
                                    }, a))
                                })]
                            })]
                        })
                    })
                })
            })
        }
        let E = {
            blog1: Z
        }
          , U = (e, t) => {
            let a = E[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function Z(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                title1_text: "".concat(t.text.main),
                title2_text: "".concat(t.text.v2),
                description1_text: "".concat(t.text.v1),
                button: "\n    ".concat(t.text.v1, "\n    ").concat(t.bg.v1)
            };
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto  ".concat(a.external_bg, "  ").concat(t.font_family),
                children: (0,
                n.jsx)("div", {
                    className: "grid lg:grid-cols-2 lg:gap-y-16 max-w-screen-2xl gap-10 mx-auto",
                    children: e.items.map( (e, t) => (0,
                    n.jsx)("div", {
                        children: e.link ? (0,
                        n.jsx)(r(), {
                            href: e.link,
                            children: (0,
                            n.jsxs)("div", {
                                className: "group rounded-xl overflow-hidden sm:flex cursor-pointer",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44",
                                    children: (0,
                                    n.jsx)("img", {
                                        className: "group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl",
                                        src: e.imagePrompt,
                                        alt: "Image Description"
                                    })
                                }), (0,
                                n.jsxs)("div", {
                                    className: "grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0",
                                    children: [(0,
                                    n.jsx)("h3", {
                                        className: "text-xl font-semibold  ".concat(a.title1_text),
                                        children: e.name
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "mt-3  ".concat(a.title2_text),
                                        children: e.description
                                    })]
                                })]
                            })
                        }) : (0,
                        n.jsx)("div", {
                            className: "group rounded-xl overflow-hidden",
                            children: (0,
                            n.jsxs)("div", {
                                className: "sm:flex",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44",
                                    children: (0,
                                    n.jsx)("img", {
                                        className: "group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl",
                                        src: e.imagePrompt,
                                        alt: "Image Description"
                                    })
                                }), (0,
                                n.jsxs)("div", {
                                    className: "grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0",
                                    children: [(0,
                                    n.jsx)("h3", {
                                        className: "text-xl font-semibold  ".concat(a.title1_text),
                                        children: e.name
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "mt-3  ".concat(a.title2_text),
                                        children: e.description
                                    })]
                                })]
                            })
                        })
                    }, t))
                })
            })
        }
        let D = {
            video1: G
        }
          , F = (e, t) => {
            let a = D[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function G(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                internal_bg: "".concat(t.bg.v2),
                description1_text: "".concat(t.text.v2),
                title_text: "".concat(t.text.main)
            };
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(a.external_bg, " ").concat(t.font_family, " px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"),
                children: (0,
                n.jsxs)("div", {
                    className: "max-w-screen-2xl flex items-center justify-center mx-auto flex-col gap-4",
                    children: [(0,
                    n.jsx)("p", {
                        className: "text-2xl font-bold ".concat(a.title_text),
                        children: e.title
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full lg:w-3/4",
                        children: [(0,
                        n.jsx)("div", {
                            className: "relative aspect-video w-full overflow-hidden",
                            children: (0,
                            n.jsx)("iframe", {
                                className: "embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full",
                                src: e.link,
                                allowFullScreen: !0,
                                "data-gtm-yt-inspected-2340190_699": "true",
                                id: e.id + "-video"
                            })
                        }), e.description && (0,
                        n.jsx)("p", {
                            className: "mt-3 ".concat(a.description1_text),
                            children: e.description
                        })]
                    })]
                })
            })
        }
        let O = {
            carousel1: Y
        }
          , $ = (e, t) => {
            let a = O[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function Y(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                internal_bg: "".concat(t.bg.v2),
                description1_text: "".concat(t.text.v2),
                title_text: "".concat(t.text.main)
            }
              , i = () => {
                let t = document.getElementById("slider")
                  , a = parseInt(t.getAttribute("data-current-index"), 10)
                  , n = a === e.carouselItems.length - 1
                  , i = n ? 0 : a + 1;
                t.style.transform = "translateX(-".concat(100 * i, "%)"),
                t.setAttribute("data-current-index", String(i))
            }
              , o = () => {
                let t = document.getElementById("slider")
                  , a = parseInt(t.getAttribute("data-current-index"), 10)
                  , n = 0 === a ? e.carouselItems.length - 1 : a - 1;
                t.style.transform = "translateX(-".concat(100 * n, "%)"),
                t.setAttribute("data-current-index", String(n))
            }
            ;
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(a.external_bg, " ").concat(t.font_family, " px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"),
                children: (0,
                n.jsxs)("div", {
                    className: "max-w-screen-2xl flex items-center justify-center mx-auto flex-col gap-4",
                    children: [(0,
                    n.jsx)("p", {
                        className: "text-2xl font-bold ".concat(a.title_text),
                        children: e.title
                    }), (0,
                    n.jsxs)("div", {
                        className: "w-full lg:w-3/4 aspect-video",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "relative w-full aspect-video rounded-lg overflow-hidden ".concat(a.description1_text),
                            children: [(0,
                            n.jsx)("button", {
                                className: "absolute rounded-lg top-0 left-0 z-30 h-[100%] bg-black w-15 opacity-60",
                                onClick: o,
                                children: (0,
                                n.jsxs)("svg", {
                                    width: "40px",
                                    height: "40px",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    stroke: "#ffffff",
                                    strokeWidth: "0.00024000000000000003",
                                    transform: "rotate(0)",
                                    children: [(0,
                                    n.jsx)("g", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0,
                                    n.jsx)("g", {
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z",
                                            fill: "#ffffff"
                                        })
                                    })]
                                })
                            }), (0,
                            n.jsx)("div", {
                                id: "slider",
                                "data-current-index": "0",
                                style: {
                                    transition: "transform 0.5s ease-in-out",
                                    whiteSpace: "nowrap"
                                },
                                className: "w-full aspect-video",
                                children: e.carouselItems.map( (e, t) => (0,
                                n.jsxs)("div", {
                                    className: "w-full h-[100%] aspect-video inline-block relative",
                                    children: [(0,
                                    n.jsx)("img", {
                                        src: e.imagePrompt,
                                        alt: "Slide ".concat(t + 1),
                                        className: "w-full h-[100%] object-cover"
                                    }), e.text && (0,
                                    n.jsx)("div", {
                                        className: "absolute bottom-0 flex rounded-lg items-center justify-center right-0 h-[40px] w-full bg-black w-15 z-50",
                                        children: (0,
                                        n.jsx)("p", {
                                            className: "text-white",
                                            children: e.text
                                        })
                                    })]
                                }, t))
                            }), (0,
                            n.jsx)("button", {
                                className: "absolute top-0 right-0 z-30 rounded-lg h-[100%] bg-black w-15 opacity-60",
                                onClick: i,
                                children: (0,
                                n.jsxs)("svg", {
                                    width: "40px",
                                    height: "40px",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    stroke: "#ffffff",
                                    strokeWidth: "0.00024000000000000003",
                                    transform: "rotate(180)",
                                    children: [(0,
                                    n.jsx)("g", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), (0,
                                    n.jsx)("g", {
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z",
                                            fill: "#ffffff"
                                        })
                                    })]
                                })
                            })]
                        }), e.description && (0,
                        n.jsx)("p", {
                            className: "mt-3 ".concat(a.description1_text),
                            children: e.description
                        })]
                    })]
                })
            })
        }
        let X = {
            catalog1: Q
        }
          , J = (e, t) => {
            let a = X[e.type];
            return a(e, (0,
            i.r5)(t))
        }
        ;
        async function Q(e, t) {
            var a;
            let i = {
                external_bg: "".concat(t.bg.main),
                internal_bg: "".concat(t.bg.v2),
                description1_text: "".concat(t.text.v2),
                price_text: "".concat(t.text.v3),
                title_text: "".concat(t.text.main),
                button1: "\n      ".concat(t.text.v4, "\n      ").concat(t.bg.v1, "\n      ").concat(t.hover.bg.v2, "\n    ")
            };
            return window && (window.onclick = function(e) {
                let t = document.querySelectorAll('[id^="modal-"]');
                t.forEach(t => {
                    e.target == t && (t.style.display = "none")
                }
                )
            }
            ),
            (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(i.external_bg, " ").concat(t.font_family, " px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"),
                children: (0,
                n.jsxs)("div", {
                    className: "max-w-screen-2xl flex items-center justify-center mx-auto flex-col gap-4",
                    children: [(0,
                    n.jsxs)("div", {
                        children: [(0,
                        n.jsx)("h2", {
                            className: "text-2xl font-bold tracking-tight text-gray-900 ".concat(i.title_text),
                            children: e.title
                        }), (0,
                        n.jsx)("div", {
                            className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                            children: e.catalogItems.map(t => (0,
                            n.jsxs)("div", {
                                className: "group relative cursor-pointer",
                                onClick: () => (function(e, t) {
                                    let a = document.getElementById("modal-".concat(t))
                                      , n = a.querySelector(".modal-content");
                                    n.innerHTML = '\n      <img src="'.concat(e.imagePrompt, '" alt="" class="rounded-lg max-h-[500px]" style="max-width: 500px;">\n      <div class="flex flex-col items-center flex-grow">\n        <h2>').concat(e.name, "</h2>\n        <p>").concat(e.price, '</p>\n        <p class="self-start mt-3">').concat(e.description ? e.description : "", "</p>\n      </div>\n    "),
                                    a.style.display = "block"
                                }
                                )(t, e.id),
                                children: [(0,
                                n.jsx)("div", {
                                    className: "aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",
                                    children: (0,
                                    n.jsx)("img", {
                                        src: t.imagePrompt,
                                        alt: "",
                                        className: "h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    })
                                }), (0,
                                n.jsxs)("div", {
                                    className: "mt-4 flex justify-between",
                                    children: [(0,
                                    n.jsxs)("div", {
                                        children: [(0,
                                        n.jsx)("h3", {
                                            className: "text-sm ".concat(i.title_text),
                                            children: t.name
                                        }), t.description && (0,
                                        n.jsx)("p", {
                                            className: "mt-1 text-sm ".concat(i.description1_text),
                                            children: t.description
                                        })]
                                    }), (0,
                                    n.jsx)("p", {
                                        className: "font-medium text-base ".concat(i.price_text),
                                        children: t.price
                                    })]
                                })]
                            }, t.name + Math.random()))
                        }), e.button && (0,
                        n.jsx)("div", {
                            className: "flex mt-4",
                            children: (0,
                            n.jsx)(r(), {
                                className: "inline-flex ".concat(i.button1, " border-0 py-2 px-6 focus:outline-none rounded text-lg"),
                                href: null !== (a = e.buttonLink) && void 0 !== a ? a : window.location.href,
                                children: e.button
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        id: "modal-".concat(e.id),
                        className: "fixed z-100 left-0 top-0 w-[100%] h-[100%] bg-black bg-opacity-90 flex items-center justify-center",
                        style: {
                            display: "none"
                        },
                        children: (0,
                        n.jsx)("div", {
                            className: "modal-content flex gap-3 bg-white rounded-lg border-solid border-2 border-gray-300 my-[10%] mx-auto max-w-[800px] p-8"
                        })
                    })]
                })
            })
        }
        let K = {
            donation1: et
        }
          , ee = (e, t) => {
            let a = K[e.type];
            return a ? a(e, (0,
            i.r5)(t)) : (console.error("Donation type ".concat(e.type, " not found")),
            null)
        }
        ;
        async function et(e, t) {
            let a = {
                external_bg: "".concat(t.bg.main),
                internal_bg: "".concat(t.bg.v2),
                description1_text: "".concat(t.text.v2),
                price_text: "".concat(t.text.v3),
                title_text: "".concat(t.text.main),
                button1: "".concat(t.text.v4, " ").concat(t.bg.v1, " ").concat(t.hover.bg.v2),
                button2: "".concat(t.bg.v2, " ").concat(t.text.main, " ").concat(t.hover.bg.v2, " ").concat(t.active.bg.v1)
            }
              , i = (e, t) => {
                let n = document.querySelectorAll(".buttons_for_donate")
                  , i = document.querySelector("#donate_button");
                i && (i.href = t.link);
                let o = document.querySelector("#donate_button_count");
                o && (o.innerHTML = t.text),
                n.forEach( (t, n) => {
                    n === e ? t.className = "buttons_for_donate p-4 min-w-[80px] rounded-3xl ".concat(a.button1) : t.className = "buttons_for_donate p-4 min-w-[80px] rounded-3xl ".concat(a.button2)
                }
                )
            }
            ;
            return (0,
            n.jsx)("div", {
                id: e.id,
                className: "".concat(a.external_bg, " ").concat(t.font_family, " px-4 py-10 sm:px-6 lg:px-8 lg:py-14"),
                children: (0,
                n.jsxs)("div", {
                    className: "flex mx-auto max-w-screen-2xl flex-col sm:flex-row",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-4 sm:w-1/2 w-full sm:pr-[50px] sm:items-end items-start sm:border-r-[1px] sm:border-r-solid sm:border-r-gray-400 sm:border-b-0 border-b-[1px] border-b-solid border-b-gray-400 sm:py-10 p-4",
                        children: [e.title && (0,
                        n.jsx)("h3", {
                            className: "text-3xl ".concat(a.title_text),
                            children: e.title
                        }), e.description && (0,
                        n.jsx)("p", {
                            className: "text-base ".concat(a.description1_text),
                            children: e.description
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-5 sm:w-1/2 w-full sm:pl-[50px] sm:py-10 p-4",
                        children: [e.amountText && (0,
                        n.jsx)("p", {
                            className: "text-xl ".concat(a.title_text),
                            children: e.amountText
                        }), (0,
                        n.jsx)("div", {
                            className: "flex flex-row flex-wrap gap-5 max-w-[400px]",
                            children: e.points.map( (e, t) => (0,
                            n.jsx)("button", {
                                onClick: () => i(t, e),
                                className: "buttons_for_donate p-4 min-w-[80px] rounded-3xl ".concat(0 === t ? "".concat(a.button1) : "".concat(a.button2)),
                                children: e.text
                            }, e.text + Math.random().toString()))
                        }), (0,
                        n.jsxs)("a", {
                            id: "donate_button",
                            className: "".concat(a.button1, " rounded-lg p-4 min-w-[200px] max-w-[500px] text-center text-2xl sm:mt-[30px] mt-[20px]"),
                            href: e.points[0].link,
                            children: [e.buttonText, " (", (0,
                            n.jsx)("span", {
                                id: "donate_button_count",
                                children: e.points[0].text
                            }), ")"]
                        })]
                    })]
                })
            })
        }
        let ea = {
            banner: l,
            faq: g,
            features: y,
            hero: N,
            pricing: T,
            contacts: q,
            blog: U,
            video: F,
            carousel: $,
            catalog: J,
            donation: ee
        };
        async function en(e, t, a, n) {
            let i = null;
            if ("form" === e)
                i = await S(t, a, n);
            else {
                let n = ea[e];
                n && (i = await n(t, a))
            }
            return i
        }
    },
    1698: function(e, t, a) {
        a.d(t, {
            f: function() {
                return n
            }
        });
        function n(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
    },
    465: function(e, t, a) {
        a.d(t, {
            C: function() {
                return i
            }
        });
        var n = a(8051);
        function i(e) {
            return e.map(e => {
                if (null === e.blocks)
                    return e;
                let t = [];
                return e.blocks.hero && t.push({
                    ...e.blocks.hero,
                    id: "hero-".concat((0,
                    n.B)(6)),
                    blockType: "hero"
                }),
                e.blocks.banner && t.push({
                    ...e.blocks.banner,
                    id: "banner-".concat((0,
                    n.B)(6)),
                    blockType: "banner"
                }),
                e.blocks.blog && t.push({
                    ...e.blocks.blog,
                    id: "blog-".concat((0,
                    n.B)(6)),
                    blockType: "blog"
                }),
                e.blocks.contacts && t.push({
                    ...e.blocks.contacts,
                    id: "contacts-".concat((0,
                    n.B)(6)),
                    blockType: "contacts"
                }),
                e.blocks.faq && t.push({
                    ...e.blocks.faq,
                    id: "faq-".concat((0,
                    n.B)(6)),
                    blockType: "faq"
                }),
                e.blocks.form && t.push({
                    ...e.blocks.form,
                    id: "form-".concat((0,
                    n.B)(6)),
                    blockType: "form"
                }),
                e.blocks.pricing && t.push({
                    ...e.blocks.pricing,
                    id: "pricing-".concat((0,
                    n.B)(6)),
                    blockType: "pricing"
                }),
                e.blocks.features && t.push({
                    ...e.blocks.features,
                    id: "features-".concat((0,
                    n.B)(6)),
                    blockType: "features"
                }),
                {
                    ...e,
                    blocks: null,
                    blocksArr: t
                }
            }
            )
        }
    },
    8051: function(e, t, a) {
        a.d(t, {
            B: function() {
                return i
            }
        });
        var n = a(5842);
        let i = e => (0,
        n.kP)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", e)()
    },
    2045: function(e, t, a) {
        a.d(t, {
            B3: function() {
                return o
            },
            Hk: function() {
                return i
            },
            Nu: function() {
                return l
            },
            Ys: function() {
                return s
            },
            fk: function() {
                return c
            }
        });
        var n = a(8051);
        let i = [{
            name: "facebook",
            link: "https://www.facebook.com/",
            id: (0,
            n.B)(6)
        }, {
            name: "instagram",
            link: "https://www.instagram.com/",
            id: (0,
            n.B)(6)
        }, {
            name: "youtube",
            link: "https://www.youtube.com/",
            id: (0,
            n.B)(6)
        }]
          , o = {
            mainColor: "dark_orange",
            secondColor: "orange"
        }
          , r = {
            hero: {
                id: "hero-",
                blockType: "hero",
                type: "hero8",
                title: "Welcome to Our Website!",
                subtitle: "Explore our services and products",
                button1: "Learn More",
                button1Link: "/",
                imagePrompt: "dynamic/welcome-image"
            },
            banner: {
                id: "banner-",
                blockType: "banner",
                type: "banner1",
                title: "Special Offer!",
                description: "Check out our limited-time promotions and special discounts.",
                buttonName: "Shop Now",
                buttonLink: "/"
            },
            form: {
                id: "form-",
                blockType: "form",
                type: "form1",
                title: "Sign Up for Updates",
                inputs: [{
                    inputName: "email",
                    inputType: "email"
                }, {
                    inputName: "name",
                    inputType: "text"
                }],
                sendButtonName: "Subscribe"
            },
            faq: {
                id: "faq-",
                blockType: "faq",
                type: "faq1",
                title: "Frequently Asked Questions",
                points: [{
                    title: "How to order?",
                    description: "Visit our product page, select items, and checkout."
                }, {
                    title: "Payment methods",
                    description: "We accept all major credit cards and PayPal."
                }]
            },
            features: {
                id: "features-",
                blockType: "features",
                type: "features2",
                imagePrompt: "innovative/solutions-image",
                title: "Our Features",
                points: [{
                    title: "Quality Assurance",
                    description: "High-quality standards for all our products."
                }, {
                    title: "24/7 Support",
                    description: "Around the clock support for all your needs."
                }]
            },
            pricing: {
                id: "pricing-",
                blockType: "pricing",
                type: "pricing4",
                title: "Pricing Plans",
                prices: [{
                    price: "19.99 $",
                    priceTitle: "Basic",
                    benefits: ["1 website", "100 GB storage", "Basic support"]
                }, {
                    price: "49.99 $",
                    priceTitle: "Premium",
                    benefits: ["5 websites", "500 GB storage", "Priority support"]
                }, {
                    price: "79.99 $",
                    priceTitle: "Super",
                    benefits: ["10 websites", "1000 GB storage", "Priority support"]
                }]
            },
            contacts: {
                id: "contacts-",
                blockType: "contacts",
                type: "contact1",
                contactsInfos: [{
                    type: "email",
                    text: "contact@example.com"
                }, {
                    type: "tel",
                    text: "+1234567890"
                }],
                mapLink: "https://maps.example.com/location"
            },
            blog: {
                id: "blog-",
                blockType: "blog",
                type: "blog1",
                items: [{
                    name: "The Future of Technology",
                    description: "An in-depth look at upcoming trends in technology and how they will reshape the world.",
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg"
                }, {
                    name: "Health and Wellness",
                    description: "Exploring new wellness techniques and health tips for a better lifestyle.",
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg"
                }, {
                    name: "Sustainable Living",
                    description: "Tips on reducing your environmental footprint and living a sustainable life.",
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg"
                }, {
                    name: "Sustainable Living",
                    description: "Tips on reducing your environmental footprint and living a sustainable life.",
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg"
                }]
            },
            video: {
                blockType: "video",
                id: "video-",
                title: "Video",
                description: "Video example",
                link: "https://www.youtube.com/embed/vlDzYIIOYmM?si=cuL_wJXg7dF3H_l7",
                type: "video1"
            },
            carousel: {
                blockType: "carousel",
                id: "carousel-",
                title: "Carousel",
                description: "Carousel example",
                type: "carousel1",
                carouselItems: [{
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg",
                    text: "1 text"
                }, {
                    imagePrompt: "/blocks/examples/video.jpg",
                    text: "2 text"
                }, {
                    imagePrompt: "/blocks/examples/contacts.jpg",
                    text: "3 text"
                }]
            },
            catalog: {
                blockType: "catalog",
                id: "catalog-",
                title: "Catalog",
                type: "catalog1",
                catalogItems: [{
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg",
                    price: "20$",
                    name: "BMW",
                    description: "car"
                }, {
                    imagePrompt: "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg",
                    price: "30$",
                    name: "Audi",
                    description: "car"
                }, {
                    imagePrompt: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg",
                    price: "40$",
                    name: "VW",
                    description: "car"
                }, {
                    imagePrompt: "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg",
                    price: "50$",
                    name: "Ford",
                    description: "car"
                }]
            },
            donation: {
                blockType: "donation",
                id: "donation-",
                buttonText: "Donate",
                description: "Donations description",
                title: "Donations",
                amountText: "Choose amount:",
                points: [{
                    link: "https://stripe.com/",
                    text: "5$"
                }, {
                    link: "https://stripe.com/",
                    text: "10$"
                }, {
                    link: "https://stripe.com/",
                    text: "Your amount"
                }],
                type: "donation1"
            }
        }
          , c = [{
            name: "hero",
            imageUrl: "/blocks/examples_hero.jpg"
        }, {
            name: "banner",
            imageUrl: "/blocks/examples_banner.jpg"
        }, {
            name: "form",
            imageUrl: "/blocks/examples_form.jpg"
        }, {
            name: "faq",
            imageUrl: "/blocks/examples_faq.jpg"
        }, {
            name: "features",
            imageUrl: "/blocks/examples_features.jpg"
        }, {
            name: "donation",
            imageUrl: "/blocks/examples_donation.jpg"
        }, {
            name: "carousel",
            imageUrl: "/blocks/examples_carousel.jpg"
        }, {
            name: "catalog",
            imageUrl: "/blocks/examples_catalog.jpg"
        }, {
            name: "video",
            imageUrl: "/blocks/examples_video.jpg"
        }, {
            name: "pricing",
            imageUrl: "/blocks/examples_pricing.jpg"
        }, {
            name: "contacts",
            imageUrl: "/blocks/examples_contacts.jpg"
        }, {
            name: "blog",
            imageUrl: "/blocks/examples_blog.jpg"
        }]
          , l = e => {
            let t = {
                ...r[e],
                id: e + "-" + (0,
                n.B)(6)
            };
            return t
        }
          , s = {
            acceptButton: "Accept",
            declineButton: "Decline",
            description: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept" you consent to our use of cookies. To learn more about how we use cookies and how you can manage them, please visit our Privacy Policy.',
            title: "Cookie Preferences"
        }
    },
    4490: function(e, t, a) {
        a.d(t, {
            BN: function() {
                return i
            },
            r5: function() {
                return n
            }
        });
        let n = e => i[e]
          , i = {
            purple: {
                font_family: "font-classic",
                from: {
                    main: "from-indigo-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-white",
                    v1: "bg-indigo-500",
                    v2: "bg-gray-100",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-indigo-300"
                },
                text: {
                    main: "text-black",
                    v1: "text-white",
                    v2: "text-gray-500",
                    v3: "text-indigo-500",
                    v4: "text-indigo-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-indigo-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-200"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-indigo-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-indigo-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-indigo-500"
                    },
                    bg: {
                        main: "hover:bg-gray-300",
                        v1: "hover:bg-indigo-500",
                        v2: "hover:bg-indigo-600",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-indigo-500"
                    }
                }
            },
            dark_purple: {
                font_family: "font-classic",
                from: {
                    main: "from-indigo-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-black",
                    v1: "bg-indigo-500",
                    v2: "bg-gray-900",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-indigo-300"
                },
                text: {
                    main: "text-white",
                    v1: "text-white",
                    v2: "text-gray-400",
                    v3: "text-indigo-500",
                    v4: "text-indigo-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-indigo-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-800"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-indigo-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-indigo-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-indigo-500"
                    },
                    bg: {
                        main: "hover:bg-gray-800",
                        v1: "hover:bg-indigo-500",
                        v2: "hover:bg-indigo-700",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-indigo-500"
                    }
                }
            },
            pink: {
                font_family: "font-clean",
                from: {
                    main: "from-fuchsia-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-white",
                    v1: "bg-fuchsia-500",
                    v2: "bg-gray-100",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-fuchsia-300"
                },
                text: {
                    main: "text-black",
                    v1: "text-white",
                    v2: "text-gray-500",
                    v3: "text-fuchsia-500",
                    v4: "text-fuchsia-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-fuchsia-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-200"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-fuchsia-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-fuchsia-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-fuchsia-500"
                    },
                    bg: {
                        main: "hover:bg-gray-300",
                        v1: "hover:bg-fuchsia-500",
                        v2: "hover:bg-fuchsia-600",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-fuchsia-500"
                    }
                }
            },
            dark_pink: {
                font_family: "font-clean",
                from: {
                    main: "from-fuchsia-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-black",
                    v1: "bg-fuchsia-500",
                    v2: "bg-gray-900",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-fuchsia-300"
                },
                text: {
                    main: "text-white",
                    v1: "text-white",
                    v2: "text-gray-400",
                    v3: "text-fuchsia-500",
                    v4: "text-fuchsia-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-fuchsia-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-800"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-fuchsia-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-fuchsia-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-fuchsia-500"
                    },
                    bg: {
                        main: "hover:bg-gray-800",
                        v1: "hover:bg-fuchsia-500",
                        v2: "hover:bg-fuchsia-700",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-fuchsia-500"
                    }
                }
            },
            orange: {
                font_family: "font-energetic",
                from: {
                    main: "from-orange-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-white",
                    v1: "bg-orange-500",
                    v2: "bg-gray-100",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-orange-300"
                },
                text: {
                    main: "text-black",
                    v1: "text-white",
                    v2: "text-gray-500",
                    v3: "text-orange-500",
                    v4: "text-orange-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-orange-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-200"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-orange-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-orange-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-orange-500"
                    },
                    bg: {
                        main: "hover:bg-gray-300",
                        v1: "hover:bg-orange-500",
                        v2: "hover:bg-orange-600",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-orange-500"
                    }
                }
            },
            dark_orange: {
                font_family: "font-energetic",
                from: {
                    main: "from-orange-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-black",
                    v1: "bg-orange-500",
                    v2: "bg-gray-900",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-orange-300"
                },
                text: {
                    main: "text-white",
                    v1: "text-white",
                    v2: "text-gray-400",
                    v3: "text-orange-500",
                    v4: "text-orange-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-orange-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-800"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-orange-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-orange-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-orange-500"
                    },
                    bg: {
                        main: "hover:bg-gray-800",
                        v1: "hover:bg-orange-500",
                        v2: "hover:bg-orange-700",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-orange-500"
                    }
                }
            },
            green: {
                font_family: "font-forest",
                from: {
                    main: "from-green-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-white",
                    v1: "bg-green-500",
                    v2: "bg-gray-100",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-green-300"
                },
                text: {
                    main: "text-black",
                    v1: "text-white",
                    v2: "text-gray-500",
                    v3: "text-green-500",
                    v4: "text-green-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-green-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-200"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-green-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-green-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-green-500"
                    },
                    bg: {
                        main: "hover:bg-gray-300",
                        v1: "hover:bg-green-500",
                        v2: "hover:bg-green-600",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-green-500"
                    }
                }
            },
            dark_green: {
                font_family: "font-forest",
                from: {
                    main: "from-green-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-black",
                    v1: "bg-green-500",
                    v2: "bg-gray-900",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-green-300"
                },
                text: {
                    main: "text-white",
                    v1: "text-white",
                    v2: "text-gray-400",
                    v3: "text-green-500",
                    v4: "text-green-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-green-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-800"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-green-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-green-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-green-500"
                    },
                    bg: {
                        main: "hover:bg-gray-800",
                        v1: "hover:bg-green-500",
                        v2: "hover:bg-green-700",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-green-500"
                    }
                }
            },
            blue: {
                font_family: "font-ocean",
                from: {
                    main: "from-blue-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-white",
                    v1: "bg-blue-500",
                    v2: "bg-gray-100",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-blue-300"
                },
                text: {
                    main: "text-black",
                    v1: "text-white",
                    v2: "text-gray-500",
                    v3: "text-blue-500",
                    v4: "text-blue-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-blue-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-200"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-blue-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-blue-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-blue-500"
                    },
                    bg: {
                        main: "hover:bg-gray-300",
                        v1: "hover:bg-blue-500",
                        v2: "hover:bg-blue-600",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-blue-500"
                    }
                }
            },
            dark_blue: {
                font_family: "font-ocean",
                from: {
                    main: "from-blue-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-black",
                    v1: "bg-blue-500",
                    v2: "bg-gray-900",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-blue-300"
                },
                text: {
                    main: "text-white",
                    v1: "text-white",
                    v2: "text-gray-400",
                    v3: "text-blue-500",
                    v4: "text-blue-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-blue-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-800"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-blue-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-blue-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-blue-500"
                    },
                    bg: {
                        main: "hover:bg-gray-800",
                        v1: "hover:bg-blue-500",
                        v2: "hover:bg-blue-700",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-blue-500"
                    }
                }
            },
            yellow: {
                font_family: "font-safari",
                from: {
                    main: "from-yellow-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-white",
                    v1: "bg-yellow-500",
                    v2: "bg-gray-100",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-yellow-300"
                },
                text: {
                    main: "text-black",
                    v1: "text-white",
                    v2: "text-gray-500",
                    v3: "text-yellow-500",
                    v4: "text-yellow-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-yellow-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-200"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-yellow-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-yellow-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-yellow-500"
                    },
                    bg: {
                        main: "hover:bg-gray-300",
                        v1: "hover:bg-yellow-500",
                        v2: "hover:bg-yellow-600",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-yellow-500"
                    }
                }
            },
            dark_yellow: {
                font_family: "font-safari",
                from: {
                    main: "from-yellow-500"
                },
                via: {
                    main: "via-white"
                },
                to: {
                    main: "to-violet-400"
                },
                bg: {
                    main: "bg-black",
                    v1: "bg-yellow-500",
                    v2: "bg-gray-900",
                    v3: "bg-gray-800",
                    v4: "bg-gray-300"
                },
                ring: {
                    main: "ring-yellow-300"
                },
                text: {
                    main: "text-white",
                    v1: "text-white",
                    v2: "text-gray-400",
                    v3: "text-yellow-500",
                    v4: "text-yellow-100"
                },
                border: {
                    main: "border-gray-300",
                    v1: "border-yellow-500"
                },
                divide: {
                    main: "divide-gray-300"
                },
                shadow: {
                    main: "shadow-gray-800"
                },
                active: {
                    text: {
                        main: "",
                        v1: "active:text-yellow-600"
                    },
                    bg: {
                        main: "active:text-gray-700",
                        v1: "active:bg-yellow-700"
                    }
                },
                hover: {
                    text: {
                        main: "hover:text-gray-300",
                        v1: "hover:text-yellow-500"
                    },
                    bg: {
                        main: "hover:bg-gray-800",
                        v1: "hover:bg-yellow-500",
                        v2: "hover:bg-yellow-700",
                        v3: "hover:bg-gray-200"
                    },
                    border: {
                        main: "",
                        v1: "hover:border-yellow-500"
                    }
                }
            }
        };
        Object.keys(i)
    },
    6290: function(e, t, a) {
        a.d(t, {
            f: function() {
                return n
            }
        });
        function n(e, t, a, n) {
            let i = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
            switch (t) {
            case "solid":
            default:
                return e.mainColor;
            case "zebra":
                return a % 2 == 0 ? e.mainColor : e.secondColor;
            case "first-last":
                if (!i || 0 === a || n)
                    return e.secondColor;
                return e.mainColor
            }
        }
    }
}]);
