(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[991], {
    2286: function(e, t, n) {
        "use strict";
        n.d(t, {
            LB: function() {
                return eF
            },
            g4: function() {
                return v
            },
            we: function() {
                return ev
            },
            pE: function() {
                return X
            },
            VK: function() {
                return K
            },
            Cj: function() {
                return eH
            },
            O1: function() {
                return eJ
            },
            Zj: function() {
                return eK
            },
            VT: function() {
                return j
            },
            Dy: function() {
                return A
            }
        });
        var r, l, i, o, u, a, s, c, d, f, h, g, p, v, b, y, m, w, x, D, E = n(2310), C = n(2774), M = n(4166);
        let R = {
            display: "none"
        };
        function S(e) {
            let {id: t, value: n} = e;
            return E.createElement("div", {
                id: t,
                style: R
            }, n)
        }
        function L(e) {
            let {id: t, announcement: n, ariaLiveType: r="assertive"} = e;
            return E.createElement("div", {
                id: t,
                style: {
                    position: "fixed",
                    width: 1,
                    height: 1,
                    margin: -1,
                    border: 0,
                    padding: 0,
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    clipPath: "inset(100%)",
                    whiteSpace: "nowrap"
                },
                role: "status",
                "aria-live": r,
                "aria-atomic": !0
            }, n)
        }
        let k = (0,
        E.createContext)(null)
          , O = {
            draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
        }
          , I = {
            onDragStart(e) {
                let {active: t} = e;
                return "Picked up draggable item " + t.id + "."
            },
            onDragOver(e) {
                let {active: t, over: n} = e;
                return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area."
            },
            onDragEnd(e) {
                let {active: t, over: n} = e;
                return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped."
            },
            onDragCancel(e) {
                let {active: t} = e;
                return "Dragging was cancelled. Draggable item " + t.id + " was dropped."
            }
        };
        function T(e) {
            let {announcements: t=I, container: n, hiddenTextDescribedById: r, screenReaderInstructions: l=O} = e
              , {announce: i, announcement: o} = function() {
                let[e,t] = (0,
                E.useState)("")
                  , n = (0,
                E.useCallback)(e => {
                    null != e && t(e)
                }
                , []);
                return {
                    announce: n,
                    announcement: e
                }
            }()
              , u = (0,
            M.Ld)("DndLiveRegion")
              , [a,s] = (0,
            E.useState)(!1);
            if ((0,
            E.useEffect)( () => {
                s(!0)
            }
            , []),
            !function(e) {
                let t = (0,
                E.useContext)(k);
                (0,
                E.useEffect)( () => {
                    if (!t)
                        throw Error("useDndMonitor must be used within a children of <DndContext>");
                    let n = t(e);
                    return n
                }
                , [e, t])
            }((0,
            E.useMemo)( () => ({
                onDragStart(e) {
                    let {active: n} = e;
                    i(t.onDragStart({
                        active: n
                    }))
                },
                onDragMove(e) {
                    let {active: n, over: r} = e;
                    t.onDragMove && i(t.onDragMove({
                        active: n,
                        over: r
                    }))
                },
                onDragOver(e) {
                    let {active: n, over: r} = e;
                    i(t.onDragOver({
                        active: n,
                        over: r
                    }))
                },
                onDragEnd(e) {
                    let {active: n, over: r} = e;
                    i(t.onDragEnd({
                        active: n,
                        over: r
                    }))
                },
                onDragCancel(e) {
                    let {active: n, over: r} = e;
                    i(t.onDragCancel({
                        active: n,
                        over: r
                    }))
                }
            }), [i, t])),
            !a)
                return null;
            let c = E.createElement(E.Fragment, null, E.createElement(S, {
                id: r,
                value: l.draggable
            }), E.createElement(L, {
                id: u,
                announcement: o
            }));
            return n ? (0,
            C.createPortal)(c, n) : c
        }
        function N() {}
        function j(e, t) {
            return (0,
            E.useMemo)( () => ({
                sensor: e,
                options: null != t ? t : {}
            }), [e, t])
        }
        function A() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return (0,
            E.useMemo)( () => [...t].filter(e => null != e), [...t])
        }
        (r = h || (h = {})).DragStart = "dragStart",
        r.DragMove = "dragMove",
        r.DragEnd = "dragEnd",
        r.DragCancel = "dragCancel",
        r.DragOver = "dragOver",
        r.RegisterDroppable = "registerDroppable",
        r.SetDroppableDisabled = "setDroppableDisabled",
        r.UnregisterDroppable = "unregisterDroppable";
        let z = Object.freeze({
            x: 0,
            y: 0
        });
        function B(e, t) {
            let {data: {value: n}} = e
              , {data: {value: r}} = t;
            return n - r
        }
        function P(e, t) {
            let {data: {value: n}} = e
              , {data: {value: r}} = t;
            return r - n
        }
        function F(e, t, n) {
            return void 0 === t && (t = e.left),
            void 0 === n && (n = e.top),
            {
                x: t + .5 * e.width,
                y: n + .5 * e.height
            }
        }
        let X = e => {
            let {collisionRect: t, droppableRects: n, droppableContainers: r} = e
              , l = F(t, t.left, t.top)
              , i = [];
            for (let e of r) {
                let {id: t} = e
                  , r = n.get(t);
                if (r) {
                    var o;
                    let n = Math.sqrt(Math.pow((o = F(r)).x - l.x, 2) + Math.pow(o.y - l.y, 2));
                    i.push({
                        id: t,
                        data: {
                            droppableContainer: e,
                            value: n
                        }
                    })
                }
            }
            return i.sort(B)
        }
          , U = e => {
            let {collisionRect: t, droppableRects: n, droppableContainers: r} = e
              , l = [];
            for (let e of r) {
                let {id: r} = e
                  , i = n.get(r);
                if (i) {
                    let n = function(e, t) {
                        let n = Math.max(t.top, e.top)
                          , r = Math.max(t.left, e.left)
                          , l = Math.min(t.left + t.width, e.left + e.width)
                          , i = Math.min(t.top + t.height, e.top + e.height);
                        if (r < l && n < i) {
                            let o = t.width * t.height
                              , u = e.width * e.height
                              , a = (l - r) * (i - n);
                            return Number((a / (o + u - a)).toFixed(4))
                        }
                        return 0
                    }(i, t);
                    n > 0 && l.push({
                        id: r,
                        data: {
                            droppableContainer: e,
                            value: n
                        }
                    })
                }
            }
            return l.sort(P)
        }
        ;
        function J(e, t) {
            return e && t ? {
                x: e.left - t.left,
                y: e.top - t.top
            } : z
        }
        let H = function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return n.reduce( (e, t) => ({
                ...e,
                top: e.top + 1 * t.y,
                bottom: e.bottom + 1 * t.y,
                left: e.left + 1 * t.x,
                right: e.right + 1 * t.x
            }), {
                ...e
            })
        }
          , Y = {
            ignoreTransform: !1
        };
        function K(e, t) {
            void 0 === t && (t = Y);
            let n = e.getBoundingClientRect();
            if (t.ignoreTransform) {
                let {transform: t, transformOrigin: r} = (0,
                M.Jj)(e).getComputedStyle(e);
                t && (n = function(e, t, n) {
                    let r = function(e) {
                        if (e.startsWith("matrix3d(")) {
                            let t = e.slice(9, -1).split(/, /);
                            return {
                                x: +t[12],
                                y: +t[13],
                                scaleX: +t[0],
                                scaleY: +t[5]
                            }
                        }
                        if (e.startsWith("matrix(")) {
                            let t = e.slice(7, -1).split(/, /);
                            return {
                                x: +t[4],
                                y: +t[5],
                                scaleX: +t[0],
                                scaleY: +t[3]
                            }
                        }
                        return null
                    }(t);
                    if (!r)
                        return e;
                    let {scaleX: l, scaleY: i, x: o, y: u} = r
                      , a = e.left - o - (1 - l) * parseFloat(n)
                      , s = e.top - u - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1))
                      , c = l ? e.width / l : e.width
                      , d = i ? e.height / i : e.height;
                    return {
                        width: c,
                        height: d,
                        top: s,
                        right: a + c,
                        bottom: s + d,
                        left: a
                    }
                }(n, t, r))
            }
            let {top: r, left: l, width: i, height: o, bottom: u, right: a} = n;
            return {
                top: r,
                left: l,
                width: i,
                height: o,
                bottom: u,
                right: a
            }
        }
        function q(e) {
            return K(e, {
                ignoreTransform: !0
            })
        }
        function W(e, t) {
            let n = [];
            return e ? function r(l) {
                var i;
                if (null != t && n.length >= t || !l)
                    return n;
                if ((0,
                M.qk)(l) && null != l.scrollingElement && !n.includes(l.scrollingElement))
                    return n.push(l.scrollingElement),
                    n;
                if (!(0,
                M.Re)(l) || (0,
                M.vZ)(l) || n.includes(l))
                    return n;
                let o = (0,
                M.Jj)(e).getComputedStyle(l);
                return (l !== e && function(e, t) {
                    void 0 === t && (t = (0,
                    M.Jj)(e).getComputedStyle(e));
                    let n = /(auto|scroll|overlay)/;
                    return ["overflow", "overflowX", "overflowY"].some(e => {
                        let r = t[e];
                        return "string" == typeof r && n.test(r)
                    }
                    )
                }(l, o) && n.push(l),
                void 0 === (i = o) && (i = (0,
                M.Jj)(l).getComputedStyle(l)),
                "fixed" === i.position) ? n : r(l.parentNode)
            }(e) : n
        }
        function V(e) {
            let[t] = W(e, 1);
            return null != t ? t : null
        }
        function G(e) {
            return M.Nq && e ? (0,
            M.FJ)(e) ? e : (0,
            M.UG)(e) ? (0,
            M.qk)(e) || e === (0,
            M.r3)(e).scrollingElement ? window : (0,
            M.Re)(e) ? e : null : null : null
        }
        function _(e) {
            return (0,
            M.FJ)(e) ? e.scrollX : e.scrollLeft
        }
        function $(e) {
            return (0,
            M.FJ)(e) ? e.scrollY : e.scrollTop
        }
        function Z(e) {
            return {
                x: _(e),
                y: $(e)
            }
        }
        function Q(e) {
            return !!M.Nq && !!e && e === document.scrollingElement
        }
        function ee(e) {
            let t = {
                x: 0,
                y: 0
            }
              , n = Q(e) ? {
                height: window.innerHeight,
                width: window.innerWidth
            } : {
                height: e.clientHeight,
                width: e.clientWidth
            }
              , r = {
                x: e.scrollWidth - n.width,
                y: e.scrollHeight - n.height
            }
              , l = e.scrollTop <= t.y
              , i = e.scrollLeft <= t.x
              , o = e.scrollTop >= r.y
              , u = e.scrollLeft >= r.x;
            return {
                isTop: l,
                isLeft: i,
                isBottom: o,
                isRight: u,
                maxScroll: r,
                minScroll: t
            }
        }
        (l = g || (g = {}))[l.Forward = 1] = "Forward",
        l[l.Backward = -1] = "Backward";
        let et = {
            x: .2,
            y: .2
        };
        function en(e) {
            return e.reduce( (e, t) => (0,
            M.IH)(e, Z(t)), z)
        }
        let er = [["x", ["left", "right"], function(e) {
            return e.reduce( (e, t) => e + _(t), 0)
        }
        ], ["y", ["top", "bottom"], function(e) {
            return e.reduce( (e, t) => e + $(t), 0)
        }
        ]];
        class el {
            constructor(e, t) {
                this.rect = void 0,
                this.width = void 0,
                this.height = void 0,
                this.top = void 0,
                this.bottom = void 0,
                this.right = void 0,
                this.left = void 0;
                let n = W(t)
                  , r = en(n);
                for (let[t,l,i] of (this.rect = {
                    ...e
                },
                this.width = e.width,
                this.height = e.height,
                er))
                    for (let e of l)
                        Object.defineProperty(this, e, {
                            get: () => {
                                let l = i(n)
                                  , o = r[t] - l;
                                return this.rect[e] + o
                            }
                            ,
                            enumerable: !0
                        });
                Object.defineProperty(this, "rect", {
                    enumerable: !1
                })
            }
        }
        class ei {
            constructor(e) {
                this.target = void 0,
                this.listeners = [],
                this.removeAll = () => {
                    this.listeners.forEach(e => {
                        var t;
                        return null == (t = this.target) ? void 0 : t.removeEventListener(...e)
                    }
                    )
                }
                ,
                this.target = e
            }
            add(e, t, n) {
                var r;
                null == (r = this.target) || r.addEventListener(e, t, n),
                this.listeners.push([e, t, n])
            }
        }
        function eo(e, t) {
            let n = Math.abs(e.x)
              , r = Math.abs(e.y);
            return "number" == typeof t ? Math.sqrt(n ** 2 + r ** 2) > t : "x"in t && "y"in t ? n > t.x && r > t.y : "x"in t ? n > t.x : "y"in t && r > t.y
        }
        function eu(e) {
            e.preventDefault()
        }
        function ea(e) {
            e.stopPropagation()
        }
        (i = p || (p = {})).Click = "click",
        i.DragStart = "dragstart",
        i.Keydown = "keydown",
        i.ContextMenu = "contextmenu",
        i.Resize = "resize",
        i.SelectionChange = "selectionchange",
        i.VisibilityChange = "visibilitychange",
        (o = v || (v = {})).Space = "Space",
        o.Down = "ArrowDown",
        o.Right = "ArrowRight",
        o.Left = "ArrowLeft",
        o.Up = "ArrowUp",
        o.Esc = "Escape",
        o.Enter = "Enter";
        let es = {
            start: [v.Space, v.Enter],
            cancel: [v.Esc],
            end: [v.Space, v.Enter]
        }
          , ec = (e, t) => {
            let {currentCoordinates: n} = t;
            switch (e.code) {
            case v.Right:
                return {
                    ...n,
                    x: n.x + 25
                };
            case v.Left:
                return {
                    ...n,
                    x: n.x - 25
                };
            case v.Down:
                return {
                    ...n,
                    y: n.y + 25
                };
            case v.Up:
                return {
                    ...n,
                    y: n.y - 25
                }
            }
        }
        ;
        class ed {
            constructor(e) {
                this.props = void 0,
                this.autoScrollEnabled = !1,
                this.referenceCoordinates = void 0,
                this.listeners = void 0,
                this.windowListeners = void 0,
                this.props = e;
                let {event: {target: t}} = e;
                this.props = e,
                this.listeners = new ei((0,
                M.r3)(t)),
                this.windowListeners = new ei((0,
                M.Jj)(t)),
                this.handleKeyDown = this.handleKeyDown.bind(this),
                this.handleCancel = this.handleCancel.bind(this),
                this.attach()
            }
            attach() {
                this.handleStart(),
                this.windowListeners.add(p.Resize, this.handleCancel),
                this.windowListeners.add(p.VisibilityChange, this.handleCancel),
                setTimeout( () => this.listeners.add(p.Keydown, this.handleKeyDown))
            }
            handleStart() {
                let {activeNode: e, onStart: t} = this.props
                  , n = e.node.current;
                n && function(e, t) {
                    if (void 0 === t && (t = K),
                    !e)
                        return;
                    let {top: n, left: r, bottom: l, right: i} = t(e)
                      , o = V(e);
                    o && (l <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
                        block: "center",
                        inline: "center"
                    })
                }(n),
                t(z)
            }
            handleKeyDown(e) {
                if ((0,
                M.vd)(e)) {
                    let {active: t, context: n, options: r} = this.props
                      , {keyboardCodes: l=es, coordinateGetter: i=ec, scrollBehavior: o="smooth"} = r
                      , {code: u} = e;
                    if (l.end.includes(u)) {
                        this.handleEnd(e);
                        return
                    }
                    if (l.cancel.includes(u)) {
                        this.handleCancel(e);
                        return
                    }
                    let {collisionRect: a} = n.current
                      , s = a ? {
                        x: a.left,
                        y: a.top
                    } : z;
                    this.referenceCoordinates || (this.referenceCoordinates = s);
                    let c = i(e, {
                        active: t,
                        context: n.current,
                        currentCoordinates: s
                    });
                    if (c) {
                        let t = (0,
                        M.$X)(c, s)
                          , r = {
                            x: 0,
                            y: 0
                        }
                          , {scrollableAncestors: l} = n.current;
                        for (let n of l) {
                            let l = e.code
                              , {isTop: i, isRight: u, isLeft: a, isBottom: s, maxScroll: d, minScroll: f} = ee(n)
                              , h = function(e) {
                                if (e === document.scrollingElement) {
                                    let {innerWidth: e, innerHeight: t} = window;
                                    return {
                                        top: 0,
                                        left: 0,
                                        right: e,
                                        bottom: t,
                                        width: e,
                                        height: t
                                    }
                                }
                                let {top: t, left: n, right: r, bottom: l} = e.getBoundingClientRect();
                                return {
                                    top: t,
                                    left: n,
                                    right: r,
                                    bottom: l,
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                }
                            }(n)
                              , g = {
                                x: Math.min(l === v.Right ? h.right - h.width / 2 : h.right, Math.max(l === v.Right ? h.left : h.left + h.width / 2, c.x)),
                                y: Math.min(l === v.Down ? h.bottom - h.height / 2 : h.bottom, Math.max(l === v.Down ? h.top : h.top + h.height / 2, c.y))
                            }
                              , p = l === v.Right && !u || l === v.Left && !a
                              , b = l === v.Down && !s || l === v.Up && !i;
                            if (p && g.x !== c.x) {
                                let e = n.scrollLeft + t.x
                                  , i = l === v.Right && e <= d.x || l === v.Left && e >= f.x;
                                if (i && !t.y) {
                                    n.scrollTo({
                                        left: e,
                                        behavior: o
                                    });
                                    return
                                }
                                i ? r.x = n.scrollLeft - e : r.x = l === v.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x,
                                r.x && n.scrollBy({
                                    left: -r.x,
                                    behavior: o
                                });
                                break
                            }
                            if (b && g.y !== c.y) {
                                let e = n.scrollTop + t.y
                                  , i = l === v.Down && e <= d.y || l === v.Up && e >= f.y;
                                if (i && !t.x) {
                                    n.scrollTo({
                                        top: e,
                                        behavior: o
                                    });
                                    return
                                }
                                i ? r.y = n.scrollTop - e : r.y = l === v.Down ? n.scrollTop - d.y : n.scrollTop - f.y,
                                r.y && n.scrollBy({
                                    top: -r.y,
                                    behavior: o
                                });
                                break
                            }
                        }
                        this.handleMove(e, (0,
                        M.IH)((0,
                        M.$X)(c, this.referenceCoordinates), r))
                    }
                }
            }
            handleMove(e, t) {
                let {onMove: n} = this.props;
                e.preventDefault(),
                n(t)
            }
            handleEnd(e) {
                let {onEnd: t} = this.props;
                e.preventDefault(),
                this.detach(),
                t()
            }
            handleCancel(e) {
                let {onCancel: t} = this.props;
                e.preventDefault(),
                this.detach(),
                t()
            }
            detach() {
                this.listeners.removeAll(),
                this.windowListeners.removeAll()
            }
        }
        function ef(e) {
            return !!(e && "distance"in e)
        }
        function eh(e) {
            return !!(e && "delay"in e)
        }
        ed.activators = [{
            eventName: "onKeyDown",
            handler: (e, t, n) => {
                let {keyboardCodes: r=es, onActivation: l} = t
                  , {active: i} = n
                  , {code: o} = e.nativeEvent;
                if (r.start.includes(o)) {
                    let t = i.activatorNode.current;
                    return (!t || e.target === t) && (e.preventDefault(),
                    null == l || l({
                        event: e.nativeEvent
                    }),
                    !0)
                }
                return !1
            }
        }];
        class eg {
            constructor(e, t, n) {
                var r;
                void 0 === n && (n = function(e) {
                    let {EventTarget: t} = (0,
                    M.Jj)(e);
                    return e instanceof t ? e : (0,
                    M.r3)(e)
                }(e.event.target)),
                this.props = void 0,
                this.events = void 0,
                this.autoScrollEnabled = !0,
                this.document = void 0,
                this.activated = !1,
                this.initialCoordinates = void 0,
                this.timeoutId = null,
                this.listeners = void 0,
                this.documentListeners = void 0,
                this.windowListeners = void 0,
                this.props = e,
                this.events = t;
                let {event: l} = e
                  , {target: i} = l;
                this.props = e,
                this.events = t,
                this.document = (0,
                M.r3)(i),
                this.documentListeners = new ei(this.document),
                this.listeners = new ei(n),
                this.windowListeners = new ei((0,
                M.Jj)(i)),
                this.initialCoordinates = null != (r = (0,
                M.DC)(l)) ? r : z,
                this.handleStart = this.handleStart.bind(this),
                this.handleMove = this.handleMove.bind(this),
                this.handleEnd = this.handleEnd.bind(this),
                this.handleCancel = this.handleCancel.bind(this),
                this.handleKeydown = this.handleKeydown.bind(this),
                this.removeTextSelection = this.removeTextSelection.bind(this),
                this.attach()
            }
            attach() {
                let {events: e, props: {options: {activationConstraint: t, bypassActivationConstraint: n}}} = this;
                if (this.listeners.add(e.move.name, this.handleMove, {
                    passive: !1
                }),
                this.listeners.add(e.end.name, this.handleEnd),
                this.windowListeners.add(p.Resize, this.handleCancel),
                this.windowListeners.add(p.DragStart, eu),
                this.windowListeners.add(p.VisibilityChange, this.handleCancel),
                this.windowListeners.add(p.ContextMenu, eu),
                this.documentListeners.add(p.Keydown, this.handleKeydown),
                t) {
                    if (null != n && n({
                        event: this.props.event,
                        activeNode: this.props.activeNode,
                        options: this.props.options
                    }))
                        return this.handleStart();
                    if (eh(t)) {
                        this.timeoutId = setTimeout(this.handleStart, t.delay);
                        return
                    }
                    if (ef(t))
                        return
                }
                this.handleStart()
            }
            detach() {
                this.listeners.removeAll(),
                this.windowListeners.removeAll(),
                setTimeout(this.documentListeners.removeAll, 50),
                null !== this.timeoutId && (clearTimeout(this.timeoutId),
                this.timeoutId = null)
            }
            handleStart() {
                let {initialCoordinates: e} = this
                  , {onStart: t} = this.props;
                e && (this.activated = !0,
                this.documentListeners.add(p.Click, ea, {
                    capture: !0
                }),
                this.removeTextSelection(),
                this.documentListeners.add(p.SelectionChange, this.removeTextSelection),
                t(e))
            }
            handleMove(e) {
                var t;
                let {activated: n, initialCoordinates: r, props: l} = this
                  , {onMove: i, options: {activationConstraint: o}} = l;
                if (!r)
                    return;
                let u = null != (t = (0,
                M.DC)(e)) ? t : z
                  , a = (0,
                M.$X)(r, u);
                if (!n && o) {
                    if (ef(o)) {
                        if (null != o.tolerance && eo(a, o.tolerance))
                            return this.handleCancel();
                        if (eo(a, o.distance))
                            return this.handleStart()
                    }
                    return eh(o) && eo(a, o.tolerance) ? this.handleCancel() : void 0
                }
                e.cancelable && e.preventDefault(),
                i(u)
            }
            handleEnd() {
                let {onEnd: e} = this.props;
                this.detach(),
                e()
            }
            handleCancel() {
                let {onCancel: e} = this.props;
                this.detach(),
                e()
            }
            handleKeydown(e) {
                e.code === v.Esc && this.handleCancel()
            }
            removeTextSelection() {
                var e;
                null == (e = this.document.getSelection()) || e.removeAllRanges()
            }
        }
        let ep = {
            move: {
                name: "pointermove"
            },
            end: {
                name: "pointerup"
            }
        };
        class ev extends eg {
            constructor(e) {
                let {event: t} = e
                  , n = (0,
                M.r3)(t.target);
                super(e, ep, n)
            }
        }
        ev.activators = [{
            eventName: "onPointerDown",
            handler: (e, t) => {
                let {nativeEvent: n} = e
                  , {onActivation: r} = t;
                return !!n.isPrimary && 0 === n.button && (null == r || r({
                    event: n
                }),
                !0)
            }
        }],
        (u = b || (b = {}))[u.RightClick = 2] = "RightClick",
        (a = y || (y = {}))[a.Pointer = 0] = "Pointer",
        a[a.DraggableRect = 1] = "DraggableRect",
        (s = m || (m = {}))[s.TreeOrder = 0] = "TreeOrder",
        s[s.ReversedTreeOrder = 1] = "ReversedTreeOrder";
        let eb = {
            x: {
                [g.Backward]: !1,
                [g.Forward]: !1
            },
            y: {
                [g.Backward]: !1,
                [g.Forward]: !1
            }
        };
        (c = w || (w = {}))[c.Always = 0] = "Always",
        c[c.BeforeDragging = 1] = "BeforeDragging",
        c[c.WhileDragging = 2] = "WhileDragging",
        (x || (x = {})).Optimized = "optimized";
        let ey = new Map;
        function em(e, t) {
            return (0,
            M.Gj)(n => e ? n || ("function" == typeof t ? t(e) : e) : null, [t, e])
        }
        function ew(e) {
            let {callback: t, disabled: n} = e
              , r = (0,
            M.zX)(t)
              , l = (0,
            E.useMemo)( () => {
                if (n || "undefined" == typeof window || void 0 === window.ResizeObserver)
                    return;
                let {ResizeObserver: e} = window;
                return new e(r)
            }
            , [n]);
            return (0,
            E.useEffect)( () => () => null == l ? void 0 : l.disconnect(), [l]),
            l
        }
        function ex(e) {
            return new el(K(e),e)
        }
        function eD(e, t, n) {
            void 0 === t && (t = ex);
            let[r,l] = (0,
            E.useReducer)(function(r) {
                if (!e)
                    return null;
                if (!1 === e.isConnected) {
                    var l;
                    return null != (l = null != r ? r : n) ? l : null
                }
                let i = t(e);
                return JSON.stringify(r) === JSON.stringify(i) ? r : i
            }, null)
              , i = function(e) {
                let {callback: t, disabled: n} = e
                  , r = (0,
                M.zX)(t)
                  , l = (0,
                E.useMemo)( () => {
                    if (n || "undefined" == typeof window || void 0 === window.MutationObserver)
                        return;
                    let {MutationObserver: e} = window;
                    return new e(r)
                }
                , [r, n]);
                return (0,
                E.useEffect)( () => () => null == l ? void 0 : l.disconnect(), [l]),
                l
            }({
                callback(t) {
                    if (e)
                        for (let n of t) {
                            let {type: t, target: r} = n;
                            if ("childList" === t && r instanceof HTMLElement && r.contains(e)) {
                                l();
                                break
                            }
                        }
                }
            })
              , o = ew({
                callback: l
            });
            return (0,
            M.LI)( () => {
                l(),
                e ? (null == o || o.observe(e),
                null == i || i.observe(document.body, {
                    childList: !0,
                    subtree: !0
                })) : (null == o || o.disconnect(),
                null == i || i.disconnect())
            }
            , [e]),
            r
        }
        let eE = [];
        function eC(e, t) {
            void 0 === t && (t = []);
            let n = (0,
            E.useRef)(null);
            return (0,
            E.useEffect)( () => {
                n.current = null
            }
            , t),
            (0,
            E.useEffect)( () => {
                let t = e !== z;
                t && !n.current && (n.current = e),
                !t && n.current && (n.current = null)
            }
            , [e]),
            n.current ? (0,
            M.$X)(e, n.current) : z
        }
        function eM(e) {
            return (0,
            E.useMemo)( () => e ? function(e) {
                let t = e.innerWidth
                  , n = e.innerHeight;
                return {
                    top: 0,
                    left: 0,
                    right: t,
                    bottom: n,
                    width: t,
                    height: n
                }
            }(e) : null, [e])
        }
        let eR = []
          , eS = [{
            sensor: ev,
            options: {}
        }, {
            sensor: ed,
            options: {}
        }]
          , eL = {
            current: {}
        }
          , ek = {
            draggable: {
                measure: q
            },
            droppable: {
                measure: q,
                strategy: w.WhileDragging,
                frequency: x.Optimized
            },
            dragOverlay: {
                measure: K
            }
        };
        class eO extends Map {
            get(e) {
                var t;
                return null != e && null != (t = super.get(e)) ? t : void 0
            }
            toArray() {
                return Array.from(this.values())
            }
            getEnabled() {
                return this.toArray().filter(e => {
                    let {disabled: t} = e;
                    return !t
                }
                )
            }
            getNodeFor(e) {
                var t, n;
                return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0
            }
        }
        let eI = {
            activatorEvent: null,
            active: null,
            activeNode: null,
            activeNodeRect: null,
            collisions: null,
            containerNodeRect: null,
            draggableNodes: new Map,
            droppableRects: new Map,
            droppableContainers: new eO,
            over: null,
            dragOverlay: {
                nodeRef: {
                    current: null
                },
                rect: null,
                setRef: N
            },
            scrollableAncestors: [],
            scrollableAncestorRects: [],
            measuringConfiguration: ek,
            measureDroppableContainers: N,
            windowRect: null,
            measuringScheduled: !1
        }
          , eT = {
            activatorEvent: null,
            activators: [],
            active: null,
            activeNodeRect: null,
            ariaDescribedById: {
                draggable: ""
            },
            dispatch: N,
            draggableNodes: new Map,
            over: null,
            measureDroppableContainers: N
        }
          , eN = (0,
        E.createContext)(eT)
          , ej = (0,
        E.createContext)(eI);
        function eA() {
            return {
                draggable: {
                    active: null,
                    initialCoordinates: {
                        x: 0,
                        y: 0
                    },
                    nodes: new Map,
                    translate: {
                        x: 0,
                        y: 0
                    }
                },
                droppable: {
                    containers: new eO
                }
            }
        }
        function ez(e, t) {
            switch (t.type) {
            case h.DragStart:
                return {
                    ...e,
                    draggable: {
                        ...e.draggable,
                        initialCoordinates: t.initialCoordinates,
                        active: t.active
                    }
                };
            case h.DragMove:
                if (!e.draggable.active)
                    return e;
                return {
                    ...e,
                    draggable: {
                        ...e.draggable,
                        translate: {
                            x: t.coordinates.x - e.draggable.initialCoordinates.x,
                            y: t.coordinates.y - e.draggable.initialCoordinates.y
                        }
                    }
                };
            case h.DragEnd:
            case h.DragCancel:
                return {
                    ...e,
                    draggable: {
                        ...e.draggable,
                        active: null,
                        initialCoordinates: {
                            x: 0,
                            y: 0
                        },
                        translate: {
                            x: 0,
                            y: 0
                        }
                    }
                };
            case h.RegisterDroppable:
                {
                    let {element: n} = t
                      , {id: r} = n
                      , l = new eO(e.droppable.containers);
                    return l.set(r, n),
                    {
                        ...e,
                        droppable: {
                            ...e.droppable,
                            containers: l
                        }
                    }
                }
            case h.SetDroppableDisabled:
                {
                    let {id: n, key: r, disabled: l} = t
                      , i = e.droppable.containers.get(n);
                    if (!i || r !== i.key)
                        return e;
                    let o = new eO(e.droppable.containers);
                    return o.set(n, {
                        ...i,
                        disabled: l
                    }),
                    {
                        ...e,
                        droppable: {
                            ...e.droppable,
                            containers: o
                        }
                    }
                }
            case h.UnregisterDroppable:
                {
                    let {id: n, key: r} = t
                      , l = e.droppable.containers.get(n);
                    if (!l || r !== l.key)
                        return e;
                    let i = new eO(e.droppable.containers);
                    return i.delete(n),
                    {
                        ...e,
                        droppable: {
                            ...e.droppable,
                            containers: i
                        }
                    }
                }
            default:
                return e
            }
        }
        function eB(e) {
            let {disabled: t} = e
              , {active: n, activatorEvent: r, draggableNodes: l} = (0,
            E.useContext)(eN)
              , i = (0,
            M.D9)(r)
              , o = (0,
            M.D9)(null == n ? void 0 : n.id);
            return (0,
            E.useEffect)( () => {
                if (!t && !r && i && null != o) {
                    if (!(0,
                    M.vd)(i) || document.activeElement === i.target)
                        return;
                    let e = l.get(o);
                    if (!e)
                        return;
                    let {activatorNode: t, node: n} = e;
                    (t.current || n.current) && requestAnimationFrame( () => {
                        for (let e of [t.current, n.current]) {
                            if (!e)
                                continue;
                            let t = (0,
                            M.so)(e);
                            if (t) {
                                t.focus();
                                break
                            }
                        }
                    }
                    )
                }
            }
            , [r, t, l, o, i]),
            null
        }
        let eP = (0,
        E.createContext)({
            ...z,
            scaleX: 1,
            scaleY: 1
        });
        (d = D || (D = {}))[d.Uninitialized = 0] = "Uninitialized",
        d[d.Initializing = 1] = "Initializing",
        d[d.Initialized = 2] = "Initialized";
        let eF = (0,
        E.memo)(function(e) {
            var t, n, r, l, i;
            let {id: o, accessibility: u, autoScroll: a=!0, children: s, sensors: c=eS, collisionDetection: d=U, measuring: f, modifiers: p, ...v} = e
              , b = (0,
            E.useReducer)(ez, void 0, eA)
              , [x,R] = b
              , [S,L] = function() {
                let[e] = (0,
                E.useState)( () => new Set)
                  , t = (0,
                E.useCallback)(t => (e.add(t),
                () => e.delete(t)), [e])
                  , n = (0,
                E.useCallback)(t => {
                    let {type: n, event: r} = t;
                    e.forEach(e => {
                        var t;
                        return null == (t = e[n]) ? void 0 : t.call(e, r)
                    }
                    )
                }
                , [e]);
                return [n, t]
            }()
              , [O,I] = (0,
            E.useState)(D.Uninitialized)
              , N = O === D.Initialized
              , {draggable: {active: j, nodes: A, translate: B}, droppable: {containers: P}} = x
              , F = j ? A.get(j) : null
              , X = (0,
            E.useRef)({
                initial: null,
                translated: null
            })
              , Y = (0,
            E.useMemo)( () => {
                var e;
                return null != j ? {
                    id: j,
                    data: null != (e = null == F ? void 0 : F.data) ? e : eL,
                    rect: X
                } : null
            }
            , [j, F])
              , q = (0,
            E.useRef)(null)
              , [_,$] = (0,
            E.useState)(null)
              , [er,ei] = (0,
            E.useState)(null)
              , eo = (0,
            M.Ey)(v, Object.values(v))
              , eu = (0,
            M.Ld)("DndDescribedBy", o)
              , ea = (0,
            E.useMemo)( () => P.getEnabled(), [P])
              , es = (0,
            E.useMemo)( () => ({
                draggable: {
                    ...ek.draggable,
                    ...null == f ? void 0 : f.draggable
                },
                droppable: {
                    ...ek.droppable,
                    ...null == f ? void 0 : f.droppable
                },
                dragOverlay: {
                    ...ek.dragOverlay,
                    ...null == f ? void 0 : f.dragOverlay
                }
            }), [null == f ? void 0 : f.draggable, null == f ? void 0 : f.droppable, null == f ? void 0 : f.dragOverlay])
              , {droppableRects: ec, measureDroppableContainers: ed, measuringScheduled: ef} = function(e, t) {
                let {dragging: n, dependencies: r, config: l} = t
                  , [i,o] = (0,
                E.useState)(null)
                  , {frequency: u, measure: a, strategy: s} = l
                  , c = (0,
                E.useRef)(e)
                  , d = function() {
                    switch (s) {
                    case w.Always:
                        return !1;
                    case w.BeforeDragging:
                        return n;
                    default:
                        return !n
                    }
                }()
                  , f = (0,
                M.Ey)(d)
                  , h = (0,
                E.useCallback)(function(e) {
                    void 0 === e && (e = []),
                    f.current || o(t => null === t ? e : t.concat(e.filter(e => !t.includes(e))))
                }, [f])
                  , g = (0,
                E.useRef)(null)
                  , p = (0,
                M.Gj)(t => {
                    if (d && !n)
                        return ey;
                    if (!t || t === ey || c.current !== e || null != i) {
                        let t = new Map;
                        for (let n of e) {
                            if (!n)
                                continue;
                            if (i && i.length > 0 && !i.includes(n.id) && n.rect.current) {
                                t.set(n.id, n.rect.current);
                                continue
                            }
                            let e = n.node.current
                              , r = e ? new el(a(e),e) : null;
                            n.rect.current = r,
                            r && t.set(n.id, r)
                        }
                        return t
                    }
                    return t
                }
                , [e, i, n, d, a]);
                return (0,
                E.useEffect)( () => {
                    c.current = e
                }
                , [e]),
                (0,
                E.useEffect)( () => {
                    d || h()
                }
                , [n, d]),
                (0,
                E.useEffect)( () => {
                    i && i.length > 0 && o(null)
                }
                , [JSON.stringify(i)]),
                (0,
                E.useEffect)( () => {
                    d || "number" != typeof u || null !== g.current || (g.current = setTimeout( () => {
                        h(),
                        g.current = null
                    }
                    , u))
                }
                , [u, d, h, ...r]),
                {
                    droppableRects: p,
                    measureDroppableContainers: h,
                    measuringScheduled: null != i
                }
            }(ea, {
                dragging: N,
                dependencies: [B.x, B.y],
                config: es.droppable
            })
              , eh = function(e, t) {
                let n = null !== t ? e.get(t) : void 0
                  , r = n ? n.node.current : null;
                return (0,
                M.Gj)(e => {
                    var n;
                    return null === t ? null : null != (n = null != r ? r : e) ? n : null
                }
                , [r, t])
            }(A, j)
              , eg = (0,
            E.useMemo)( () => er ? (0,
            M.DC)(er) : null, [er])
              , ep = function() {
                let e = (null == _ ? void 0 : _.autoScrollEnabled) === !1
                  , t = "object" == typeof a ? !1 === a.enabled : !1 === a
                  , n = N && !e && !t;
                return "object" == typeof a ? {
                    ...a,
                    enabled: n
                } : {
                    enabled: n
                }
            }()
              , ev = em(eh, es.draggable.measure);
            !function(e) {
                let {activeNode: t, measure: n, initialRect: r, config: l=!0} = e
                  , i = (0,
                E.useRef)(!1)
                  , {x: o, y: u} = "boolean" == typeof l ? {
                    x: l,
                    y: l
                } : l;
                (0,
                M.LI)( () => {
                    if (!o && !u || !t) {
                        i.current = !1;
                        return
                    }
                    if (i.current || !r)
                        return;
                    let e = null == t ? void 0 : t.node.current;
                    if (!e || !1 === e.isConnected)
                        return;
                    let l = n(e)
                      , a = J(l, r);
                    if (o || (a.x = 0),
                    u || (a.y = 0),
                    i.current = !0,
                    Math.abs(a.x) > 0 || Math.abs(a.y) > 0) {
                        let t = V(e);
                        t && t.scrollBy({
                            top: a.y,
                            left: a.x
                        })
                    }
                }
                , [t, o, u, r, n])
            }({
                activeNode: j ? A.get(j) : null,
                config: ep.layoutShiftCompensation,
                initialRect: ev,
                measure: es.draggable.measure
            });
            let ex = eD(eh, es.draggable.measure, ev)
              , eO = eD(eh ? eh.parentElement : null)
              , eI = (0,
            E.useRef)({
                activatorEvent: null,
                active: null,
                activeNode: eh,
                collisionRect: null,
                collisions: null,
                droppableRects: ec,
                draggableNodes: A,
                draggingNode: null,
                draggingNodeRect: null,
                droppableContainers: P,
                over: null,
                scrollableAncestors: [],
                scrollAdjustedTranslate: null
            })
              , eT = P.getNodeFor(null == (t = eI.current.over) ? void 0 : t.id)
              , eF = function(e) {
                let {measure: t} = e
                  , [n,r] = (0,
                E.useState)(null)
                  , l = (0,
                E.useCallback)(e => {
                    for (let {target: n} of e)
                        if ((0,
                        M.Re)(n)) {
                            r(e => {
                                let r = t(n);
                                return e ? {
                                    ...e,
                                    width: r.width,
                                    height: r.height
                                } : r
                            }
                            );
                            break
                        }
                }
                , [t])
                  , i = ew({
                    callback: l
                })
                  , o = (0,
                E.useCallback)(e => {
                    let n = function(e) {
                        if (!e)
                            return null;
                        if (e.children.length > 1)
                            return e;
                        let t = e.children[0];
                        return (0,
                        M.Re)(t) ? t : e
                    }(e);
                    null == i || i.disconnect(),
                    n && (null == i || i.observe(n)),
                    r(n ? t(n) : null)
                }
                , [t, i])
                  , [u,a] = (0,
                M.wm)(o);
                return (0,
                E.useMemo)( () => ({
                    nodeRef: u,
                    rect: n,
                    setRef: a
                }), [n, u, a])
            }({
                measure: es.dragOverlay.measure
            })
              , eX = null != (n = eF.nodeRef.current) ? n : eh
              , eU = N ? null != (r = eF.rect) ? r : ex : null
              , eJ = !!(eF.nodeRef.current && eF.rect)
              , eH = function(e) {
                let t = em(e);
                return J(e, t)
            }(eJ ? null : ex)
              , eY = eM(eX ? (0,
            M.Jj)(eX) : null)
              , eK = function(e) {
                let t = (0,
                E.useRef)(e)
                  , n = (0,
                M.Gj)(n => e ? n && n !== eE && e && t.current && e.parentNode === t.current.parentNode ? n : W(e) : eE, [e]);
                return (0,
                E.useEffect)( () => {
                    t.current = e
                }
                , [e]),
                n
            }(N ? null != eT ? eT : eh : null)
              , eq = function(e, t) {
                void 0 === t && (t = K);
                let[n] = e
                  , r = eM(n ? (0,
                M.Jj)(n) : null)
                  , [l,i] = (0,
                E.useReducer)(function() {
                    return e.length ? e.map(e => Q(e) ? r : new el(t(e),e)) : eR
                }, eR)
                  , o = ew({
                    callback: i
                });
                return e.length > 0 && l === eR && i(),
                (0,
                M.LI)( () => {
                    e.length ? e.forEach(e => null == o ? void 0 : o.observe(e)) : (null == o || o.disconnect(),
                    i())
                }
                , [e]),
                l
            }(eK)
              , eW = function(e, t) {
                let {transform: n, ...r} = t;
                return null != e && e.length ? e.reduce( (e, t) => t({
                    transform: e,
                    ...r
                }), n) : n
            }(p, {
                transform: {
                    x: B.x - eH.x,
                    y: B.y - eH.y,
                    scaleX: 1,
                    scaleY: 1
                },
                activatorEvent: er,
                active: Y,
                activeNodeRect: ex,
                containerNodeRect: eO,
                draggingNodeRect: eU,
                over: eI.current.over,
                overlayNodeRect: eF.rect,
                scrollableAncestors: eK,
                scrollableAncestorRects: eq,
                windowRect: eY
            })
              , eV = eg ? (0,
            M.IH)(eg, B) : null
              , eG = function(e) {
                let[t,n] = (0,
                E.useState)(null)
                  , r = (0,
                E.useRef)(e)
                  , l = (0,
                E.useCallback)(e => {
                    let t = G(e.target);
                    t && n(e => e ? (e.set(t, Z(t)),
                    new Map(e)) : null)
                }
                , []);
                return (0,
                E.useEffect)( () => {
                    let t = r.current;
                    if (e !== t) {
                        i(t);
                        let o = e.map(e => {
                            let t = G(e);
                            return t ? (t.addEventListener("scroll", l, {
                                passive: !0
                            }),
                            [t, Z(t)]) : null
                        }
                        ).filter(e => null != e);
                        n(o.length ? new Map(o) : null),
                        r.current = e
                    }
                    return () => {
                        i(e),
                        i(t)
                    }
                    ;
                    function i(e) {
                        e.forEach(e => {
                            let t = G(e);
                            null == t || t.removeEventListener("scroll", l)
                        }
                        )
                    }
                }
                , [l, e]),
                (0,
                E.useMemo)( () => e.length ? t ? Array.from(t.values()).reduce( (e, t) => (0,
                M.IH)(e, t), z) : en(e) : z, [e, t])
            }(eK)
              , e_ = eC(eG)
              , e$ = eC(eG, [ex])
              , eZ = (0,
            M.IH)(eW, e_)
              , eQ = eU ? H(eU, eW) : null
              , e0 = Y && eQ ? d({
                active: Y,
                collisionRect: eQ,
                droppableRects: ec,
                droppableContainers: ea,
                pointerCoordinates: eV
            }) : null
              , e1 = function(e, t) {
                if (!e || 0 === e.length)
                    return null;
                let[n] = e;
                return t ? n[t] : n
            }(e0, "id")
              , [e2,e4] = (0,
            E.useState)(null)
              , e5 = eJ ? eW : (0,
            M.IH)(eW, e$)
              , e3 = (i = null != (l = null == e2 ? void 0 : e2.rect) ? l : null,
            {
                ...e5,
                scaleX: i && ex ? i.width / ex.width : 1,
                scaleY: i && ex ? i.height / ex.height : 1
            })
              , e6 = (0,
            E.useCallback)( (e, t) => {
                let {sensor: n, options: r} = t;
                if (null == q.current)
                    return;
                let l = A.get(q.current);
                if (!l)
                    return;
                let i = e.nativeEvent
                  , o = new n({
                    active: q.current,
                    activeNode: l,
                    event: i,
                    options: r,
                    context: eI,
                    onStart(e) {
                        let t = q.current;
                        if (null == t)
                            return;
                        let n = A.get(t);
                        if (!n)
                            return;
                        let {onDragStart: r} = eo.current
                          , l = {
                            active: {
                                id: t,
                                data: n.data,
                                rect: X
                            }
                        };
                        (0,
                        C.unstable_batchedUpdates)( () => {
                            null == r || r(l),
                            I(D.Initializing),
                            R({
                                type: h.DragStart,
                                initialCoordinates: e,
                                active: t
                            }),
                            S({
                                type: "onDragStart",
                                event: l
                            })
                        }
                        )
                    },
                    onMove(e) {
                        R({
                            type: h.DragMove,
                            coordinates: e
                        })
                    },
                    onEnd: u(h.DragEnd),
                    onCancel: u(h.DragCancel)
                });
                function u(e) {
                    return async function() {
                        let {active: t, collisions: n, over: r, scrollAdjustedTranslate: l} = eI.current
                          , o = null;
                        if (t && l) {
                            let {cancelDrop: u} = eo.current;
                            if (o = {
                                activatorEvent: i,
                                active: t,
                                collisions: n,
                                delta: l,
                                over: r
                            },
                            e === h.DragEnd && "function" == typeof u) {
                                let t = await Promise.resolve(u(o));
                                t && (e = h.DragCancel)
                            }
                        }
                        q.current = null,
                        (0,
                        C.unstable_batchedUpdates)( () => {
                            R({
                                type: e
                            }),
                            I(D.Uninitialized),
                            e4(null),
                            $(null),
                            ei(null);
                            let t = e === h.DragEnd ? "onDragEnd" : "onDragCancel";
                            if (o) {
                                let e = eo.current[t];
                                null == e || e(o),
                                S({
                                    type: t,
                                    event: o
                                })
                            }
                        }
                        )
                    }
                }
                (0,
                C.unstable_batchedUpdates)( () => {
                    $(o),
                    ei(e.nativeEvent)
                }
                )
            }
            , [A])
              , e9 = (0,
            E.useCallback)( (e, t) => (n, r) => {
                let l = n.nativeEvent
                  , i = A.get(r);
                if (null !== q.current || !i || l.dndKit || l.defaultPrevented)
                    return;
                let o = e(n, t.options, {
                    active: i
                });
                !0 === o && (l.dndKit = {
                    capturedBy: t.sensor
                },
                q.current = r,
                e6(n, t))
            }
            , [A, e6])
              , e8 = (0,
            E.useMemo)( () => c.reduce( (e, t) => {
                let {sensor: n} = t
                  , r = n.activators.map(e => ({
                    eventName: e.eventName,
                    handler: e9(e.handler, t)
                }));
                return [...e, ...r]
            }
            , []), [c, e9]);
            (0,
            E.useEffect)( () => {
                if (!M.Nq)
                    return;
                let e = c.map(e => {
                    let {sensor: t} = e;
                    return null == t.setup ? void 0 : t.setup()
                }
                );
                return () => {
                    for (let t of e)
                        null == t || t()
                }
            }
            , c.map(e => {
                let {sensor: t} = e;
                return t
            }
            )),
            (0,
            M.LI)( () => {
                ex && O === D.Initializing && I(D.Initialized)
            }
            , [ex, O]),
            (0,
            E.useEffect)( () => {
                let {onDragMove: e} = eo.current
                  , {active: t, activatorEvent: n, collisions: r, over: l} = eI.current;
                if (!t || !n)
                    return;
                let i = {
                    active: t,
                    activatorEvent: n,
                    collisions: r,
                    delta: {
                        x: eZ.x,
                        y: eZ.y
                    },
                    over: l
                };
                (0,
                C.unstable_batchedUpdates)( () => {
                    null == e || e(i),
                    S({
                        type: "onDragMove",
                        event: i
                    })
                }
                )
            }
            , [eZ.x, eZ.y]),
            (0,
            E.useEffect)( () => {
                let {active: e, activatorEvent: t, collisions: n, droppableContainers: r, scrollAdjustedTranslate: l} = eI.current;
                if (!e || null == q.current || !t || !l)
                    return;
                let {onDragOver: i} = eo.current
                  , o = r.get(e1)
                  , u = o && o.rect.current ? {
                    id: o.id,
                    rect: o.rect.current,
                    data: o.data,
                    disabled: o.disabled
                } : null
                  , a = {
                    active: e,
                    activatorEvent: t,
                    collisions: n,
                    delta: {
                        x: l.x,
                        y: l.y
                    },
                    over: u
                };
                (0,
                C.unstable_batchedUpdates)( () => {
                    e4(u),
                    null == i || i(a),
                    S({
                        type: "onDragOver",
                        event: a
                    })
                }
                )
            }
            , [e1]),
            (0,
            M.LI)( () => {
                eI.current = {
                    activatorEvent: er,
                    active: Y,
                    activeNode: eh,
                    collisionRect: eQ,
                    collisions: e0,
                    droppableRects: ec,
                    draggableNodes: A,
                    draggingNode: eX,
                    draggingNodeRect: eU,
                    droppableContainers: P,
                    over: e2,
                    scrollableAncestors: eK,
                    scrollAdjustedTranslate: eZ
                },
                X.current = {
                    initial: eU,
                    translated: eQ
                }
            }
            , [Y, eh, e0, eQ, A, eX, eU, ec, P, e2, eK, eZ]),
            function(e) {
                let {acceleration: t, activator: n=y.Pointer, canScroll: r, draggingRect: l, enabled: i, interval: o=5, order: u=m.TreeOrder, pointerCoordinates: a, scrollableAncestors: s, scrollableAncestorRects: c, delta: d, threshold: f} = e
                  , h = function(e) {
                    let {delta: t, disabled: n} = e
                      , r = (0,
                    M.D9)(t);
                    return (0,
                    M.Gj)(e => {
                        if (n || !r || !e)
                            return eb;
                        let l = {
                            x: Math.sign(t.x - r.x),
                            y: Math.sign(t.y - r.y)
                        };
                        return {
                            x: {
                                [g.Backward]: e.x[g.Backward] || -1 === l.x,
                                [g.Forward]: e.x[g.Forward] || 1 === l.x
                            },
                            y: {
                                [g.Backward]: e.y[g.Backward] || -1 === l.y,
                                [g.Forward]: e.y[g.Forward] || 1 === l.y
                            }
                        }
                    }
                    , [n, t, r])
                }({
                    delta: d,
                    disabled: !i
                })
                  , [p,v] = (0,
                M.Yz)()
                  , b = (0,
                E.useRef)({
                    x: 0,
                    y: 0
                })
                  , w = (0,
                E.useRef)({
                    x: 0,
                    y: 0
                })
                  , x = (0,
                E.useMemo)( () => {
                    switch (n) {
                    case y.Pointer:
                        return a ? {
                            top: a.y,
                            bottom: a.y,
                            left: a.x,
                            right: a.x
                        } : null;
                    case y.DraggableRect:
                        return l
                    }
                }
                , [n, l, a])
                  , D = (0,
                E.useRef)(null)
                  , C = (0,
                E.useCallback)( () => {
                    let e = D.current;
                    if (!e)
                        return;
                    let t = b.current.x * w.current.x
                      , n = b.current.y * w.current.y;
                    e.scrollBy(t, n)
                }
                , [])
                  , R = (0,
                E.useMemo)( () => u === m.TreeOrder ? [...s].reverse() : s, [u, s]);
                (0,
                E.useEffect)( () => {
                    if (!i || !s.length || !x) {
                        v();
                        return
                    }
                    for (let e of R) {
                        if ((null == r ? void 0 : r(e)) === !1)
                            continue;
                        let n = s.indexOf(e)
                          , l = c[n];
                        if (!l)
                            continue;
                        let {direction: i, speed: u} = function(e, t, n, r, l) {
                            let {top: i, left: o, right: u, bottom: a} = n;
                            void 0 === r && (r = 10),
                            void 0 === l && (l = et);
                            let {isTop: s, isBottom: c, isLeft: d, isRight: f} = ee(e)
                              , h = {
                                x: 0,
                                y: 0
                            }
                              , p = {
                                x: 0,
                                y: 0
                            }
                              , v = {
                                height: t.height * l.y,
                                width: t.width * l.x
                            };
                            return !s && i <= t.top + v.height ? (h.y = g.Backward,
                            p.y = r * Math.abs((t.top + v.height - i) / v.height)) : !c && a >= t.bottom - v.height && (h.y = g.Forward,
                            p.y = r * Math.abs((t.bottom - v.height - a) / v.height)),
                            !f && u >= t.right - v.width ? (h.x = g.Forward,
                            p.x = r * Math.abs((t.right - v.width - u) / v.width)) : !d && o <= t.left + v.width && (h.x = g.Backward,
                            p.x = r * Math.abs((t.left + v.width - o) / v.width)),
                            {
                                direction: h,
                                speed: p
                            }
                        }(e, l, x, t, f);
                        for (let e of ["x", "y"])
                            h[e][i[e]] || (u[e] = 0,
                            i[e] = 0);
                        if (u.x > 0 || u.y > 0) {
                            v(),
                            D.current = e,
                            p(C, o),
                            b.current = u,
                            w.current = i;
                            return
                        }
                    }
                    b.current = {
                        x: 0,
                        y: 0
                    },
                    w.current = {
                        x: 0,
                        y: 0
                    },
                    v()
                }
                , [t, C, r, v, i, o, JSON.stringify(x), JSON.stringify(h), p, s, R, c, JSON.stringify(f)])
            }({
                ...ep,
                delta: B,
                draggingRect: eQ,
                pointerCoordinates: eV,
                scrollableAncestors: eK,
                scrollableAncestorRects: eq
            });
            let e7 = (0,
            E.useMemo)( () => ({
                active: Y,
                activeNode: eh,
                activeNodeRect: ex,
                activatorEvent: er,
                collisions: e0,
                containerNodeRect: eO,
                dragOverlay: eF,
                draggableNodes: A,
                droppableContainers: P,
                droppableRects: ec,
                over: e2,
                measureDroppableContainers: ed,
                scrollableAncestors: eK,
                scrollableAncestorRects: eq,
                measuringConfiguration: es,
                measuringScheduled: ef,
                windowRect: eY
            }), [Y, eh, ex, er, e0, eO, eF, A, P, ec, e2, ed, eK, eq, es, ef, eY])
              , te = (0,
            E.useMemo)( () => ({
                activatorEvent: er,
                activators: e8,
                active: Y,
                activeNodeRect: ex,
                ariaDescribedById: {
                    draggable: eu
                },
                dispatch: R,
                draggableNodes: A,
                over: e2,
                measureDroppableContainers: ed
            }), [er, e8, Y, ex, R, eu, A, e2, ed]);
            return E.createElement(k.Provider, {
                value: L
            }, E.createElement(eN.Provider, {
                value: te
            }, E.createElement(ej.Provider, {
                value: e7
            }, E.createElement(eP.Provider, {
                value: e3
            }, s)), E.createElement(eB, {
                disabled: (null == u ? void 0 : u.restoreFocus) === !1
            })), E.createElement(T, {
                ...u,
                hiddenTextDescribedById: eu
            }))
        })
          , eX = (0,
        E.createContext)(null)
          , eU = "button";
        function eJ(e) {
            let {id: t, data: n, disabled: r=!1, attributes: l} = e
              , i = (0,
            M.Ld)("Droppable")
              , {activators: o, activatorEvent: u, active: a, activeNodeRect: s, ariaDescribedById: c, draggableNodes: d, over: f} = (0,
            E.useContext)(eN)
              , {role: h=eU, roleDescription: g="draggable", tabIndex: p=0} = null != l ? l : {}
              , v = (null == a ? void 0 : a.id) === t
              , b = (0,
            E.useContext)(v ? eP : eX)
              , [y,m] = (0,
            M.wm)()
              , [w,x] = (0,
            M.wm)()
              , D = (0,
            E.useMemo)( () => o.reduce( (e, n) => {
                let {eventName: r, handler: l} = n;
                return e[r] = e => {
                    l(e, t)
                }
                ,
                e
            }
            , {}), [o, t])
              , C = (0,
            M.Ey)(n);
            (0,
            M.LI)( () => (d.set(t, {
                id: t,
                key: i,
                node: y,
                activatorNode: w,
                data: C
            }),
            () => {
                let e = d.get(t);
                e && e.key === i && d.delete(t)
            }
            ), [d, t]);
            let R = (0,
            E.useMemo)( () => ({
                role: h,
                tabIndex: p,
                "aria-disabled": r,
                "aria-pressed": !!v && h === eU || void 0,
                "aria-roledescription": g,
                "aria-describedby": c.draggable
            }), [r, h, p, v, g, c.draggable]);
            return {
                active: a,
                activatorEvent: u,
                activeNodeRect: s,
                attributes: R,
                isDragging: v,
                listeners: r ? void 0 : D,
                node: y,
                over: f,
                setNodeRef: m,
                setActivatorNodeRef: x,
                transform: b
            }
        }
        function eH() {
            return (0,
            E.useContext)(ej)
        }
        let eY = {
            timeout: 25
        };
        function eK(e) {
            let {data: t, disabled: n=!1, id: r, resizeObserverConfig: l} = e
              , i = (0,
            M.Ld)("Droppable")
              , {active: o, dispatch: u, over: a, measureDroppableContainers: s} = (0,
            E.useContext)(eN)
              , c = (0,
            E.useRef)({
                disabled: n
            })
              , d = (0,
            E.useRef)(!1)
              , f = (0,
            E.useRef)(null)
              , g = (0,
            E.useRef)(null)
              , {disabled: p, updateMeasurementsFor: v, timeout: b} = {
                ...eY,
                ...l
            }
              , y = (0,
            M.Ey)(null != v ? v : r)
              , m = (0,
            E.useCallback)( () => {
                if (!d.current) {
                    d.current = !0;
                    return
                }
                null != g.current && clearTimeout(g.current),
                g.current = setTimeout( () => {
                    s(Array.isArray(y.current) ? y.current : [y.current]),
                    g.current = null
                }
                , b)
            }
            , [b])
              , w = ew({
                callback: m,
                disabled: p || !o
            })
              , x = (0,
            E.useCallback)( (e, t) => {
                w && (t && (w.unobserve(t),
                d.current = !1),
                e && w.observe(e))
            }
            , [w])
              , [D,C] = (0,
            M.wm)(x)
              , R = (0,
            M.Ey)(t);
            return (0,
            E.useEffect)( () => {
                w && D.current && (w.disconnect(),
                d.current = !1,
                w.observe(D.current))
            }
            , [D, w]),
            (0,
            M.LI)( () => (u({
                type: h.RegisterDroppable,
                element: {
                    id: r,
                    key: i,
                    disabled: n,
                    node: D,
                    rect: f,
                    data: R
                }
            }),
            () => u({
                type: h.UnregisterDroppable,
                key: i,
                id: r
            })), [r]),
            (0,
            E.useEffect)( () => {
                n !== c.current.disabled && (u({
                    type: h.SetDroppableDisabled,
                    id: r,
                    key: i,
                    disabled: n
                }),
                c.current.disabled = n)
            }
            , [r, i, n, u]),
            {
                active: o,
                rect: f,
                isOver: (null == a ? void 0 : a.id) === r,
                node: D,
                over: a,
                setNodeRef: C
            }
        }
        f = {
            styles: {
                active: {
                    opacity: "0"
                }
            }
        },
        e => {
            let {active: t, dragOverlay: n} = e
              , r = {}
              , {styles: l, className: i} = f;
            if (null != l && l.active)
                for (let[e,n] of Object.entries(l.active))
                    void 0 !== n && (r[e] = t.node.style.getPropertyValue(e),
                    t.node.style.setProperty(e, n));
            if (null != l && l.dragOverlay)
                for (let[e,t] of Object.entries(l.dragOverlay))
                    void 0 !== t && n.node.style.setProperty(e, t);
            return null != i && i.active && t.node.classList.add(i.active),
            null != i && i.dragOverlay && n.node.classList.add(i.dragOverlay),
            function() {
                for (let[e,n] of Object.entries(r))
                    t.node.style.setProperty(e, n);
                null != i && i.active && t.node.classList.remove(i.active)
            }
        }
    },
    6087: function(e, t, n) {
        "use strict";
        n.d(t, {
            Fo: function() {
                return h
            },
            nB: function() {
                return w
            },
            qw: function() {
                return c
            }
        });
        var r = n(2310)
          , l = n(2286)
          , i = n(4166);
        function o(e, t, n) {
            let r = e.slice();
            return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]),
            r
        }
        function u(e) {
            return null !== e && e >= 0
        }
        let a = e => {
            let {rects: t, activeIndex: n, overIndex: r, index: l} = e
              , i = o(t, r, n)
              , u = t[l]
              , a = i[l];
            return a && u ? {
                x: a.left - u.left,
                y: a.top - u.top,
                scaleX: a.width / u.width,
                scaleY: a.height / u.height
            } : null
        }
          , s = {
            scaleX: 1,
            scaleY: 1
        }
          , c = e => {
            var t;
            let {activeIndex: n, activeNodeRect: r, index: l, rects: i, overIndex: o} = e
              , u = null != (t = i[n]) ? t : r;
            if (!u)
                return null;
            if (l === n) {
                let e = i[o];
                return e ? {
                    x: 0,
                    y: n < o ? e.top + e.height - (u.top + u.height) : e.top - u.top,
                    ...s
                } : null
            }
            let a = function(e, t, n) {
                let r = e[t]
                  , l = e[t - 1]
                  , i = e[t + 1];
                return r ? n < t ? l ? r.top - (l.top + l.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : l ? r.top - (l.top + l.height) : 0 : 0
            }(i, l, n);
            return l > n && l <= o ? {
                x: 0,
                y: -u.height - a,
                ...s
            } : l < n && l >= o ? {
                x: 0,
                y: u.height + a,
                ...s
            } : {
                x: 0,
                y: 0,
                ...s
            }
        }
          , d = "Sortable"
          , f = r.createContext({
            activeIndex: -1,
            containerId: d,
            disableTransforms: !1,
            items: [],
            overIndex: -1,
            useDragOverlay: !1,
            sortedRects: [],
            strategy: a,
            disabled: {
                draggable: !1,
                droppable: !1
            }
        });
        function h(e) {
            let {children: t, id: n, items: o, strategy: u=a, disabled: s=!1} = e
              , {active: c, dragOverlay: h, droppableRects: g, over: p, measureDroppableContainers: v} = (0,
            l.Cj)()
              , b = (0,
            i.Ld)(d, n)
              , y = null !== h.rect
              , m = (0,
            r.useMemo)( () => o.map(e => "object" == typeof e && "id"in e ? e.id : e), [o])
              , w = null != c
              , x = c ? m.indexOf(c.id) : -1
              , D = p ? m.indexOf(p.id) : -1
              , E = (0,
            r.useRef)(m)
              , C = !function(e, t) {
                if (e === t)
                    return !0;
                if (e.length !== t.length)
                    return !1;
                for (let n = 0; n < e.length; n++)
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }(m, E.current)
              , M = -1 !== D && -1 === x || C
              , R = "boolean" == typeof s ? {
                draggable: s,
                droppable: s
            } : s;
            (0,
            i.LI)( () => {
                C && w && v(m)
            }
            , [C, m, w, v]),
            (0,
            r.useEffect)( () => {
                E.current = m
            }
            , [m]);
            let S = (0,
            r.useMemo)( () => ({
                activeIndex: x,
                containerId: b,
                disabled: R,
                disableTransforms: M,
                items: m,
                overIndex: D,
                useDragOverlay: y,
                sortedRects: m.reduce( (e, t, n) => {
                    let r = g.get(t);
                    return r && (e[n] = r),
                    e
                }
                , Array(m.length)),
                strategy: u
            }), [x, b, R.draggable, R.droppable, M, m, D, g, y, u]);
            return r.createElement(f.Provider, {
                value: S
            }, t)
        }
        let g = e => {
            let {id: t, items: n, activeIndex: r, overIndex: l} = e;
            return o(n, r, l).indexOf(t)
        }
          , p = e => {
            let {containerId: t, isSorting: n, wasDragging: r, index: l, items: i, newIndex: o, previousItems: u, previousContainerId: a, transition: s} = e;
            return !!s && !!r && (u === i || l !== o) && (!!n || o !== l && t === a)
        }
          , v = {
            duration: 200,
            easing: "ease"
        }
          , b = "transform"
          , y = i.ux.Transition.toString({
            property: b,
            duration: 0,
            easing: "linear"
        })
          , m = {
            roleDescription: "sortable"
        };
        function w(e) {
            var t, n;
            let {animateLayoutChanges: o=p, attributes: a, disabled: s, data: c, getNewIndex: d=g, id: h, strategy: w, resizeObserverConfig: x, transition: D=v} = e
              , {items: E, containerId: C, activeIndex: M, disabled: R, disableTransforms: S, sortedRects: L, overIndex: k, useDragOverlay: O, strategy: I} = (0,
            r.useContext)(f)
              , T = "boolean" == typeof s ? {
                draggable: s,
                droppable: !1
            } : {
                draggable: null != (t = null == s ? void 0 : s.draggable) ? t : R.draggable,
                droppable: null != (n = null == s ? void 0 : s.droppable) ? n : R.droppable
            }
              , N = E.indexOf(h)
              , j = (0,
            r.useMemo)( () => ({
                sortable: {
                    containerId: C,
                    index: N,
                    items: E
                },
                ...c
            }), [C, c, N, E])
              , A = (0,
            r.useMemo)( () => E.slice(E.indexOf(h)), [E, h])
              , {rect: z, node: B, isOver: P, setNodeRef: F} = (0,
            l.Zj)({
                id: h,
                data: j,
                disabled: T.droppable,
                resizeObserverConfig: {
                    updateMeasurementsFor: A,
                    ...x
                }
            })
              , {active: X, activatorEvent: U, activeNodeRect: J, attributes: H, setNodeRef: Y, listeners: K, isDragging: q, over: W, setActivatorNodeRef: V, transform: G} = (0,
            l.O1)({
                id: h,
                data: j,
                attributes: {
                    ...m,
                    ...a
                },
                disabled: T.draggable
            })
              , _ = (0,
            i.HB)(F, Y)
              , $ = !!X
              , Z = $ && !S && u(M) && u(k)
              , Q = !O && q
              , ee = Q && Z ? G : null
              , et = Z ? null != ee ? ee : (null != w ? w : I)({
                rects: L,
                activeNodeRect: J,
                activeIndex: M,
                overIndex: k,
                index: N
            }) : null
              , en = u(M) && u(k) ? d({
                id: h,
                items: E,
                activeIndex: M,
                overIndex: k
            }) : N
              , er = null == X ? void 0 : X.id
              , el = (0,
            r.useRef)({
                activeId: er,
                items: E,
                newIndex: en,
                containerId: C
            })
              , ei = E !== el.current.items
              , eo = o({
                active: X,
                containerId: C,
                isDragging: q,
                isSorting: $,
                id: h,
                index: N,
                items: E,
                newIndex: el.current.newIndex,
                previousItems: el.current.items,
                previousContainerId: el.current.containerId,
                transition: D,
                wasDragging: null != el.current.activeId
            })
              , eu = function(e) {
                let {disabled: t, index: n, node: o, rect: u} = e
                  , [a,s] = (0,
                r.useState)(null)
                  , c = (0,
                r.useRef)(n);
                return (0,
                i.LI)( () => {
                    if (!t && n !== c.current && o.current) {
                        let e = u.current;
                        if (e) {
                            let t = (0,
                            l.VK)(o.current, {
                                ignoreTransform: !0
                            })
                              , n = {
                                x: e.left - t.left,
                                y: e.top - t.top,
                                scaleX: e.width / t.width,
                                scaleY: e.height / t.height
                            };
                            (n.x || n.y) && s(n)
                        }
                    }
                    n !== c.current && (c.current = n)
                }
                , [t, n, o, u]),
                (0,
                r.useEffect)( () => {
                    a && s(null)
                }
                , [a]),
                a
            }({
                disabled: !eo,
                index: N,
                node: B,
                rect: z
            });
            return (0,
            r.useEffect)( () => {
                $ && el.current.newIndex !== en && (el.current.newIndex = en),
                C !== el.current.containerId && (el.current.containerId = C),
                E !== el.current.items && (el.current.items = E)
            }
            , [$, en, C, E]),
            (0,
            r.useEffect)( () => {
                if (er === el.current.activeId)
                    return;
                if (er && !el.current.activeId) {
                    el.current.activeId = er;
                    return
                }
                let e = setTimeout( () => {
                    el.current.activeId = er
                }
                , 50);
                return () => clearTimeout(e)
            }
            , [er]),
            {
                active: X,
                activeIndex: M,
                attributes: H,
                data: j,
                rect: z,
                index: N,
                newIndex: en,
                items: E,
                isOver: P,
                isSorting: $,
                isDragging: q,
                listeners: K,
                node: B,
                overIndex: k,
                over: W,
                setNodeRef: _,
                setActivatorNodeRef: V,
                setDroppableNodeRef: F,
                setDraggableNodeRef: Y,
                transform: null != eu ? eu : et,
                transition: eu || ei && el.current.newIndex === N ? y : (!Q || (0,
                i.vd)(U)) && D && ($ || eo) ? i.ux.Transition.toString({
                    ...D,
                    property: b
                }) : void 0
            }
        }
        l.g4.Down,
        l.g4.Right,
        l.g4.Up,
        l.g4.Left
    },
    4166: function(e, t, n) {
        "use strict";
        n.d(t, {
            $X: function() {
                return C
            },
            D9: function() {
                return m
            },
            DC: function() {
                return R
            },
            Ey: function() {
                return v
            },
            FJ: function() {
                return o
            },
            Gj: function() {
                return b
            },
            HB: function() {
                return l
            },
            IH: function() {
                return E
            },
            Jj: function() {
                return a
            },
            LI: function() {
                return h
            },
            Ld: function() {
                return x
            },
            Nq: function() {
                return i
            },
            Re: function() {
                return c
            },
            UG: function() {
                return u
            },
            Yz: function() {
                return p
            },
            qk: function() {
                return s
            },
            r3: function() {
                return f
            },
            so: function() {
                return k
            },
            ux: function() {
                return S
            },
            vZ: function() {
                return d
            },
            vd: function() {
                return M
            },
            wm: function() {
                return y
            },
            zX: function() {
                return g
            }
        });
        var r = n(2310);
        function l() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return (0,
            r.useMemo)( () => e => {
                t.forEach(t => t(e))
            }
            , t)
        }
        let i = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
        function o(e) {
            let t = Object.prototype.toString.call(e);
            return "[object Window]" === t || "[object global]" === t
        }
        function u(e) {
            return "nodeType"in e
        }
        function a(e) {
            var t, n;
            return e ? o(e) ? e : u(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView) ? t : window : window
        }
        function s(e) {
            let {Document: t} = a(e);
            return e instanceof t
        }
        function c(e) {
            return !o(e) && e instanceof a(e).HTMLElement
        }
        function d(e) {
            return e instanceof a(e).SVGElement
        }
        function f(e) {
            return e ? o(e) ? e.document : u(e) ? s(e) ? e : c(e) || d(e) ? e.ownerDocument : document : document : document
        }
        let h = i ? r.useLayoutEffect : r.useEffect;
        function g(e) {
            let t = (0,
            r.useRef)(e);
            return h( () => {
                t.current = e
            }
            ),
            (0,
            r.useCallback)(function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return null == t.current ? void 0 : t.current(...n)
            }, [])
        }
        function p() {
            let e = (0,
            r.useRef)(null)
              , t = (0,
            r.useCallback)( (t, n) => {
                e.current = setInterval(t, n)
            }
            , [])
              , n = (0,
            r.useCallback)( () => {
                null !== e.current && (clearInterval(e.current),
                e.current = null)
            }
            , []);
            return [t, n]
        }
        function v(e, t) {
            void 0 === t && (t = [e]);
            let n = (0,
            r.useRef)(e);
            return h( () => {
                n.current !== e && (n.current = e)
            }
            , t),
            n
        }
        function b(e, t) {
            let n = (0,
            r.useRef)();
            return (0,
            r.useMemo)( () => {
                let t = e(n.current);
                return n.current = t,
                t
            }
            , [...t])
        }
        function y(e) {
            let t = g(e)
              , n = (0,
            r.useRef)(null)
              , l = (0,
            r.useCallback)(e => {
                e !== n.current && (null == t || t(e, n.current)),
                n.current = e
            }
            , []);
            return [n, l]
        }
        function m(e) {
            let t = (0,
            r.useRef)();
            return (0,
            r.useEffect)( () => {
                t.current = e
            }
            , [e]),
            t.current
        }
        let w = {};
        function x(e, t) {
            return (0,
            r.useMemo)( () => {
                if (t)
                    return t;
                let n = null == w[e] ? 0 : w[e] + 1;
                return w[e] = n,
                e + "-" + n
            }
            , [e, t])
        }
        function D(e) {
            return function(t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
                    r[l - 1] = arguments[l];
                return r.reduce( (t, n) => {
                    let r = Object.entries(n);
                    for (let[n,l] of r) {
                        let r = t[n];
                        null != r && (t[n] = r + e * l)
                    }
                    return t
                }
                , {
                    ...t
                })
            }
        }
        let E = D(1)
          , C = D(-1);
        function M(e) {
            if (!e)
                return !1;
            let {KeyboardEvent: t} = a(e.target);
            return t && e instanceof t
        }
        function R(e) {
            if (function(e) {
                if (!e)
                    return !1;
                let {TouchEvent: t} = a(e.target);
                return t && e instanceof t
            }(e)) {
                if (e.touches && e.touches.length) {
                    let {clientX: t, clientY: n} = e.touches[0];
                    return {
                        x: t,
                        y: n
                    }
                }
                if (e.changedTouches && e.changedTouches.length) {
                    let {clientX: t, clientY: n} = e.changedTouches[0];
                    return {
                        x: t,
                        y: n
                    }
                }
            }
            return "clientX"in e && "clientY"in e ? {
                x: e.clientX,
                y: e.clientY
            } : null
        }
        let S = Object.freeze({
            Translate: {
                toString(e) {
                    if (!e)
                        return;
                    let {x: t, y: n} = e;
                    return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)"
                }
            },
            Scale: {
                toString(e) {
                    if (!e)
                        return;
                    let {scaleX: t, scaleY: n} = e;
                    return "scaleX(" + t + ") scaleY(" + n + ")"
                }
            },
            Transform: {
                toString(e) {
                    if (e)
                        return [S.Translate.toString(e), S.Scale.toString(e)].join(" ")
                }
            },
            Transition: {
                toString(e) {
                    let {property: t, duration: n, easing: r} = e;
                    return t + " " + n + "ms " + r
                }
            }
        })
          , L = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
        function k(e) {
            return e.matches(L) ? e : e.querySelector(L)
        }
    },
    5846: function(e, t, n) {
        e.exports = n(414)
    },
    5842: function(e, t, n) {
        "use strict";
        n.d(t, {
            kP: function() {
                return i
            }
        });
        let r = e => crypto.getRandomValues(new Uint8Array(e))
          , l = (e, t, n) => {
            let r = (2 << Math.log(e.length - 1) / Math.LN2) - 1
              , l = -~(1.6 * r * t / e.length);
            return (i=t) => {
                let o = "";
                for (; ; ) {
                    let t = n(l)
                      , u = 0 | l;
                    for (; u--; )
                        if ((o += e[t[u] & r] || "").length === i)
                            return o
                }
            }
        }
          , i = (e, t=21) => l(e, t, r)
    }
}]);
