(this["webpackJsonpmath3d-react"] = this["webpackJsonpmath3d-react"] || []).push([
    [0], {
        397: function(e, t, n) {
            e.exports = n(979)
        },
        821: function(e, t, n) {},
        834: function(e, t) {},
        836: function(e, t) {},
        857: function(e, t) {},
        859: function(e, t) {},
        888: function(e, t) {},
        889: function(e, t) {},
        978: function(e, t) {},
        979: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                a = n.n(r),
                i = n(63),
                o = n(9),
                c = n(55),
                s = n(178),
                l = n.n(s),
                u = n(14),
                d = n(242),
                p = n.n(d),
                h = n(1),
                f = n(3),
                m = n(16),
                v = n(4),
                b = n(5),
                y = n(11),
                g = n(10),
                O = n(39),
                E = n(363),
                j = n.n(E);

            function x(e, t) {
                var n = j()(e),
                    r = t * (1 - n.lightness() / 100);
                return n.lighten(r).hex()
            }

            function C() {
                var e = Object(y.a)(["\n    opacity: 0.5;\n    cursor: not-allowed;\n  "]);
                return C = function() {
                    return e
                }, e
            }

            function w() {
                var e = Object(y.a)(["\n  border: none;\n  border-radius: ", ";\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  transition-property: all;\n  background-color: ", "\n  ", "\n  ", "\n"]);
                return w = function() {
                    return e
                }, e
            }

            function k() {
                var e = Object(y.a)(["\n          background-color: ", ";\n          transition-duration: 0.1s;\n          "]);
                return k = function() {
                    return e
                }, e
            }

            function P() {
                var e = Object(y.a)(["\n      background-color: ", ";\n      &:hover {\n        background-color: ", ";\n        ", ";\n        };\n        "]);
                return P = function() {
                    return e
                }, e
            }

            function T() {
                var e = Object(y.a)(["\n      background-color: rgba(0,0,0,0.20);\n      transition-duration: 0.1s;\n      transform: translateY(1px);\n      "]);
                return T = function() {
                    return e
                }, e
            }

            function S() {
                var e = Object(y.a)(["\n  &:focus {\n    outline: none;\n    color: ", ";\n  };\n  /* by default, button darkens on hover*/\n  &:hover {\n    background-color: rgba(0,0,0,0.10);\n    font-weight:900;\n    ", ";\n    };\n    /* if lightenOnHover, then lighten background on hover */\n    ", "\n"]);
                return S = function() {
                    return e
                }, e
            }
            var A = Object(g.b)(S(), (function(e) {
                    return e.focusColor || e.theme.primary[4]
                }), (function(e) {
                    return e.pressing && Object(g.b)(T())
                }), (function(e) {
                    return e.lightenOnHover && Object(g.b)(P(), (function(e) {
                        return e.backgroundColor
                    }), (function(e) {
                        return x(e.backgroundColor, .75)
                    }), (function(e) {
                        return e.pressing && Object(g.b)(k(), (function(e) {
                            return x(e.backgroundColor, 1)
                        }))
                    }))
                })),
                R = g.c.button(w(), (function(e) {
                    return e.theme.borderRadius
                }), (function(e) {
                    return e.theme.transitionDuration
                }), (function(e) {
                    return e.theme.transitionTimingFunction
                }), (function(e) {
                    return e.backgroundColor
                }), (function(e) {
                    return !e.disabled && A
                }), (function(e) {
                    return e.disabled && Object(g.b)(C())
                })),
                I = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).state = {
                            pressing: !1
                        }, e.getRef = function(t) {
                            e.button = t
                        }, e.endPress = function() {
                            e.setState({
                                pressing: !1
                            })
                        }, e.beginPress = function() {
                            e.button.focus(), e.setState({
                                pressing: !0
                            })
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.lightenOnHover,
                                n = e.backgroundColor,
                                r = e.focusColor,
                                i = Object(c.a)(e, ["lightenOnHover", "backgroundColor", "focusColor"]);
                            if (t && !n) throw Error("lightenOnHover requires backgroundColor to be specified.");
                            return a.a.createElement(R, Object.assign({
                                onPointerDown: this.beginPress,
                                onPointerUp: this.endPress,
                                onPointerLeave: this.endPress,
                                lightenOnHover: t,
                                backgroundColor: n,
                                focusColor: r,
                                ref: this.getRef,
                                pressing: this.state.pressing,
                                disabled: this.props.disabled
                            }, i))
                        }
                    }]), n
                }(r.PureComponent);

            function V() {
                var e = Object(y.a)(["\n    margin-left: -30px;\n    padding-left: 30px;\n    & > i {\n      margin-left: -30px;\n    }\n  "]);
                return V = function() {
                    return e
                }, e
            }

            function D() {
                var e = Object(y.a)(["\n    margin-right: -30px;\n  "]);
                return D = function() {
                    return e
                }, e
            }

            function N() {
                var e = Object(y.a)(["\n  z-index:200;\n  width:30px;\n  height:30px;\n  ", ";\n  ", ";\n}\n"]);
                return N = function() {
                    return e
                }, e
            }
            I.defaultProps = {
                lightenOnHover: !1,
                disabled: !1,
                backgroundColor: "transparent"
            };
            var _ = Object(g.c)(I)(N(), (function(e) {
                    return "right" === e.side && Object(g.b)(D())
                }), (function(e) {
                    return "left" === e.side && Object(g.b)(V())
                })),
                M = {
                    left: {
                        true: "left",
                        false: "right"
                    },
                    right: {
                        true: "right",
                        false: "left"
                    }
                },
                L = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isDrawerOpen ? e.onClose : e.onOpen,
                                n = M[e.slideTo][e.isDrawerOpen];
                            return a.a.createElement(_, {
                                onClick: t,
                                side: e.side
                            }, a.a.createElement(O.a, {
                                type: n
                            }))
                        }
                    }]), n
                }(r.PureComponent),
                F = n(15),
                z = n.n(F);

            function U() {
                var e = Object(y.a)(["\n  z-index:10;\n  width: ", ";\n  position: relative;\n  background-color: ", ";\n  height:100%;\n  &.closing-or-closed.left {\n    transform: ", ";\n    transition-duration: ", ";\n    margin-right: ", ";\n  }\n  &.opening.left {\n    transform: translateX(0px);\n    transition-duration: ", ";\n    margin-right: 0;\n  }\n  &.closing-or-closed.right {\n    transform: ", ";\n    transition-duration: ", ";\n    margin-left: ", ";\n  }\n  &.opening.right {\n    transform: translateX(0px);\n    transition-duration: ", ";\n    margin-right: 0;\n  }\n"]);
                return U = function() {
                    return e
                }, e
            }
            var B = g.c.div(U(), (function(e) {
                    return e.width
                }), (function(e) {
                    return e.theme.gray[1]
                }), (function(e) {
                    return "translateX(-".concat(e.width, ")")
                }), (function(e) {
                    return e.animationSpeed
                }), (function(e) {
                    return "-".concat(e.width)
                }), (function(e) {
                    return e.animationSpeed
                }), (function(e) {
                    return "translateX(".concat(e.width, ")")
                }), (function(e) {
                    return e.animationSpeed
                }), (function(e) {
                    return "-".concat(e.width)
                }), (function(e) {
                    return e.animationSpeed
                })),
                H = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).onClose = r.props.onClose.bind(Object(m.a)(r), r.props.id, r.props.animationSpeed), r.onOpen = r.props.onOpen.bind(Object(m.a)(r), r.props.id, r.props.animationSpeed), r
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.animationSpeed,
                                n = e.width,
                                i = e.children,
                                o = e.isOpen,
                                c = e.isAnimating,
                                s = e.slideTo,
                                l = z()({
                                    opening: o && c,
                                    "closing-or-closed": !o,
                                    left: "left" === s,
                                    right: "right" === s
                                }),
                                u = "left" === s ? "right" : "left";
                            return a.a.createElement(r.Fragment, null, "left" === u && o && a.a.createElement(L, {
                                isDrawerOpen: o,
                                onOpen: this.onOpen,
                                onClose: this.onClose,
                                side: u,
                                slideTo: s
                            }), a.a.createElement(B, {
                                width: n,
                                className: l,
                                animationSpeed: t
                            }, i), "right" === u && a.a.createElement(L, {
                                isDrawerOpen: o,
                                onOpen: this.onOpen,
                                onClose: this.onClose,
                                side: u,
                                slideTo: s
                            }))
                        }
                    }]), n
                }(a.a.PureComponent);
            H.defaultProps = {
                slideTo: "left",
                animationSpeed: "1000ms"
            };
            var G = H.defaultProps.animationSpeed,
                X = function(e, t) {
                    return {
                        type: "SET_VISIBILITY",
                        payload: {
                            id: e,
                            isVisible: t
                        }
                    }
                },
                Z = function(e, t) {
                    return {
                        type: "SET_ANIMATION_STATUS",
                        payload: {
                            id: e,
                            isAnimating: t
                        }
                    }
                },
                W = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                        n = p.a.from(t);
                    return function(t) {
                        t(X(e, !1)), t(Z(e, !0)), setTimeout((function() {
                            return t(Z(e, !1))
                        }), n)
                    }
                },
                Y = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                        n = p.a.from(t);
                    return function(t) {
                        t(X(e, !0)), t(Z(e, !0)), setTimeout((function() {
                            return t(Z(e, !1))
                        }), n)
                    }
                },
                q = {
                    main: {
                        isVisible: !0,
                        isAnimating: !1,
                        width: "400px"
                    },
                    examples: {
                        isVisible: !1,
                        isAnimating: !1,
                        width: "400px"
                    }
                };
            var J = n(179),
                $ = function e(t, n) {
                    Object(h.a)(this, e), this.type = t, this.isError = null !== n && void 0 !== n, this.isError && (this.errorMsg = n)
                },
                K = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        return Object(h.a)(this, n), t.call(this, "PARSE_ERROR", e)
                    }
                    return n
                }($),
                Q = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        return Object(h.a)(this, n), t.call(this, "EVAL_ERROR", e)
                    }
                    return n
                }($),
                ee = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        return Object(h.a)(this, n), t.call(this, "RENDER_ERROR", e)
                    }
                    return n
                }($);

            function te(e, t, n) {
                return n.isError ? {
                    type: "SET_ERROR",
                    payload: {
                        id: e,
                        property: t,
                        errorData: n
                    }
                } : {
                    type: "UNSET_ERROR",
                    payload: {
                        id: e,
                        property: t,
                        errorData: n
                    }
                }
            }

            function ne(e, t, n) {
                return {
                    type: "TOGGLE_PROPERTY",
                    name: t,
                    payload: {
                        id: e,
                        property: n
                    }
                }
            }

            function re(e, t, n, r) {
                return {
                    type: "SET_PROPERTY",
                    name: t,
                    payload: {
                        id: e,
                        property: n,
                        value: r
                    }
                }
            }

            function ae(e, t, n, r, a) {
                return Object(J.batchActions)([re(e, t, n, r), te(e, n, a)], "SET_PROPERTY_AND_ERROR")
            }
            var ie = {
                controls: {
                    activeTab: "1"
                },
                examples: {
                    activeTab: "1"
                }
            };
            var oe = n(13),
                ce = n(30),
                se = function e(t) {
                    Object(h.a)(this, e), this.reducer = "mathSymbols", t.support || (t.support = "full"), Object.assign(this, t)
                },
                le = n(126),
                ue = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).state = {
                            targetUndraggable: !1
                        }, r.onPointerDown = function(e) {
                            var t = e.target,
                                a = r.rootRef.current;
                            n.isDragAllowed(a, t) || r.setState({
                                targetUndraggable: !0
                            })
                        }, r.onPointerUp = function() {
                            r.setState({
                                targetUndraggable: !1
                            })
                        }, r.rootRef = a.a.createRef(), r.onPointerDown = r.onPointerDown.bind(Object(m.a)(r)), r.onPointerUp = r.onPointerUp.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                n = e.isDragDisabled,
                                r = (e.children, Object(c.a)(e, ["id", "isDragDisabled", "children"])),
                                i = this.state.targetUndraggable;
                            return a.a.createElement("div", {
                                onPointerDown: this.onPointerDown,
                                onPointerUp: this.onPointerUp,
                                ref: this.rootRef
                            }, a.a.createElement(le.b, Object.assign({
                                key: t,
                                isDragDisabled: i || n
                            }, r), this.props.children))
                        }
                    }], [{
                        key: "isElementDraggable",
                        value: function(e) {
                            return !e.classList.contains("mq-math-mode") && (!e.classList.contains("math3d-longpressable") && !e.classList.contains("ant-slider"))
                        }
                    }, {
                        key: "isDragAllowed",
                        value: function(e, t) {
                            return e === t || !!n.isElementDraggable(t) && (null === t.parentElement || n.isDragAllowed(e, t.parentElement))
                        }
                    }]), n
                }(a.a.PureComponent);

            function de() {
                var e = Object(y.a)(['\n  &:empty {\n    ::before {\n      content: "Drag an object here to add it to this folder...";\n      // use line-height instead of padding to ensure Draggables stay aligned\n      line-height: 333%;\n    }\n    text-align: center;\n    user-select: none;\n  }\n']);
                return de = function() {
                    return e
                }, e
            }

            function pe() {
                var e = Object(y.a)(["\n  box-shadow: ", "\n"]);
                return pe = function() {
                    return e
                }, e
            }
            var he = g.c.div(pe(), (function(e) {
                    return e.isDragging ? "0 0 5px gray" : ""
                })),
                fe = g.c.div(de());

            function me(e) {
                var t = e.droppableType,
                    n = e.draggableType,
                    i = e.className,
                    o = e.style,
                    c = e.renderItem;
                return a.a.createElement(le.c, {
                    droppableId: e.droppableId,
                    isDropDisabled: e.isDropDisabled,
                    type: t
                }, (function(t, s) {
                    return a.a.createElement(fe, {
                        ref: t.innerRef,
                        className: i,
                        style: o
                    }, e.items.map((function(e, t) {
                        return function(e, t, n) {
                            return a.a.createElement(ue, Object.assign({
                                key: e.id,
                                draggableId: e.id,
                                isDragDisabled: e.isDragDisabled
                            }, n), (function(n, i) {
                                return a.a.createElement(r.Fragment, null, a.a.createElement("div", Object.assign({
                                    ref: n.innerRef
                                }, n.draggableProps, n.dragHandleProps), a.a.createElement(he, {
                                    isDragging: i.isDragging
                                }, t(e))), n.placeholder)
                            }))
                        }(e, c, {
                            index: t,
                            type: n
                        })
                    })), t.placeholder)
                }))
            }
            var ve = n(25),
                be = n.n(ve),
                ye = n(52);

            function ge(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
            var Oe = function e(t) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
                Object(h.a)(this, e), this.isInSlowMode = !1, this.isPointerDown = !1, this.isScrolling = !1, this.unbindEventListeners = function() {
                    n.canvas.removeEventListener("pointerdown", n.downHandler), n.canvas.removeEventListener("pointerup", n.enterSlowMode), n.canvas.removeEventListener("mousewheel", n.wheelHandler), n.canvas.removeEventListener("wheel", n.wheelHandler)
                }, this.slowModeCycle = Object(ye.a)(be.a.mark((function e() {
                    return be.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n.Loop.start(), e.next = 3, ge(n.slowOnTime);
                            case 3:
                                return n.isInSlowMode && n.Loop.stop(), e.next = 6, ge(n.slowOffTime);
                            case 6:
                                n.isInSlowMode && n.slowModeCycle();
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), this.downHandler = function() {
                    n.isPointerDown = !0, n.exitSlowMode()
                }, this.pointerUpHandler = function() {
                    n.isPointerDown = !1, n.enterSlowMode()
                }, this.wheelHandler = Object(ye.a)(be.a.mark((function t() {
                    return be.a.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n.exitSlowMode(), n.isScrolling = !0, t.next = 4, ge(e.scrollTime);
                            case 4:
                                n.enterSlowMode(), n.isScrolling = !1;
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), this.enterSlowMode = function() {
                    n.isInSlowMode || n.isPointerDown || n.isScrolling || (n.isInSlowMode = !0, n.slowModeCycle())
                }, this.exitSlowMode = function() {
                    n.isInSlowMode = !1, n.Loop.start()
                }, this.Loop = t.Loop, this.canvas = t.canvas, this.slowOffTime = a, this.slowOnTime = r, this.canvas.addEventListener("pointerdown", this.downHandler), this.canvas.addEventListener("pointerup", this.pointerUpHandler), this.canvas.addEventListener("mousewheel", this.wheelHandler), this.canvas.addEventListener("wheel", this.wheelHandler)
            };
            Oe.scrollTime = 3e3;
            var Ee = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).mathboxNode = e.props.mathbox, e.updateSymbol = Symbol("update marker"), e
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.loopManager = new Oe(this.mathboxNode.three)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.loopManager.unbindEventListeners()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = Object(ye.a)(be.a.mark((function e() {
                                var t;
                                return be.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Symbol("update marker"), this.updateSymbol = t, this.loopManager.exitSlowMode(), e.next = 5, ge(100);
                                        case 5:
                                            this.updateSymbol === t && this.loopManager.enterSlowMode();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.children ? r.Children.map(this.props.children, (function(t) {
                                return r.cloneElement(t, {
                                    mathboxParent: e.mathboxNode,
                                    mathbox: e.mathboxNode
                                })
                            })) : null
                        }
                    }]), n
                }(r.PureComponent),
                je = n(38),
                xe = n(24),
                Ce = n(372),
                we = n.n(Ce).a.create();
            we.import(n(472)), we.import(n(483)), we.import(n(487)), we.import(n(490)), we.import(n(518)), we.import(n(543)), we.import(n(548)), we.import(n(565)), we.import(n(572));
            var ke = we,
                Pe = 8e-4,
                Te = Pe / 2,
                Se = function(e) {
                    var t = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        var a = n.map((function(t, r) {
                            n[r] = ke.add(t, -Te);
                            var a = e.apply(void 0, n);
                            n[r] = ke.add(t, +Te);
                            var i = e.apply(void 0, n);
                            return n[r] = t, ke.divide(ke.subtract(i, a), Pe)
                        }));
                        return 1 === a.length ? a[0] : a
                    };
                    Object.defineProperty(t, "length", {
                        value: e.length
                    });
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return 0 === r.length ? t : t.apply(void 0, r)
                },
                Ae = function(e, t) {
                    var n = ke.subtract(e(t + Te), e(t - Te));
                    return ke.divide(n, ke.norm(n))
                },
                Re = function(e, t) {
                    var n = ke.subtract(Ae(e, t + Te), Ae(e, t - Te));
                    return ke.divide(n, ke.norm(n))
                },
                Ie = {
                    0: function(e) {
                        return 1
                    },
                    1: function(e) {
                        return e
                    },
                    2: function(e) {
                        return .5 * (3 * Math.pow(e, 2) - 1)
                    },
                    3: function(e) {
                        return .5 * (5 * Math.pow(e, 3) - 3 * e)
                    },
                    4: function(e) {
                        return .125 * (35 * Math.pow(e, 4) - 30 * Math.pow(e, 2) + 3)
                    }
                },
                Ve = {
                    0: {
                        0: function(e) {
                            return 1
                        }
                    },
                    1: {
                        0: Ie[1],
                        1: function(e) {
                            return -1 * Math.pow(1 - Math.pow(e, 2), .5)
                        },
                        "-1": function(e) {
                            return -.5 * Ve[1][1](e)
                        }
                    },
                    2: {
                        0: Ie[2],
                        1: function(e) {
                            return -3 * e * Math.pow(1 - Math.pow(e, 2), .5)
                        },
                        2: function(e) {
                            return 3 * (1 - Math.pow(e, 2))
                        },
                        "-1": function(e) {
                            return -1 / 6 * Ve[2][1](e)
                        },
                        "-2": function(e) {
                            return -1 / 24 * Ve[2][2](e)
                        }
                    }
                };
            var De = ke.i;
            ke.import({
                diff: Se,
                pdiff: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var a = n.pop() - 1,
                        i = n[a];
                    n[a] = ke.add(i, Te);
                    var o = e.apply(void 0, n);
                    n[a] = ke.add(i, -Te);
                    var c = e.apply(void 0, n);
                    return ke.divide(ke.subtract(o, c), Pe)
                },
                unitT: Ae,
                unitN: Re,
                unitB: function(e, t) {
                    return ke.cross(Ae(e, t), Re(e, t))
                },
                div: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var a = Se.apply(void 0, [e].concat(n));
                    return ke.trace(a)
                },
                curl: function(e, t, n, r) {
                    var a = Se(e, t, n, r),
                        i = Object(oe.a)(a, 3),
                        o = i[0],
                        c = i[1],
                        s = i[2];
                    return [c[2] - s[1], s[0] - o[2], o[1] - c[0]]
                },
                i: [1, 0, 0],
                j: [0, 1, 0],
                k: [0, 0, 1],
                I: De,
                arcsin: ke.asin,
                arccos: ke.acos,
                arctan: function(e, t) {
                    return void 0 === t ? ke.atan(e) : ke.atan2(e, t)
                },
                arcsinh: ke.asinh,
                arccosh: ke.acosh,
                arctanh: ke.atanh,
                LegendreP: function(e, t, n) {
                    if (void 0 === n) {
                        var r = Ie[t];
                        if (r) return r(e);
                        throw new Error("LegendreP not implemented for l=".concat(t))
                    }
                    if (Ve[t]) {
                        var a = Ve[t][n];
                        if (a) return a(e);
                        throw new Error("LegendreP not implemented for l=".concat(t, ", m=").concat(n))
                    }
                }
            }, {
                override: !0
            });
            var Ne = ke;

            function _e(e) {
                return !1 === e || !0 === e
            }

            function Me(e, t) {
                return e === t || e instanceof Array && t instanceof Array && (e.length === t.length && e.every((function(e, n) {
                    return Me(e, t[n])
                })))
            }

            function Le(e) {
                return "number" === typeof e
            }

            function Fe(e) {
                if (!Le(e)) throw TypeError("Expected value to be a real number, but it was an ".concat(typeof e))
            }

            function ze(e) {
                return !!Le(e) || e instanceof Ne.type.Complex
            }

            function Ue(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.real,
                    a = void 0 === r || r;
                return e instanceof Array && (e.length === t && (a ? e.every((function(e) {
                    return Le(e)
                })) : e.every((function(e) {
                    return ze(e)
                }))))
            }

            function Be(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.real,
                    a = void 0 === r || r;
                if (!Ue(e, t, {
                        real: a
                    })) {
                    var i = a ? "real " : "";
                    throw TypeError("Expected value to be a ".concat(t, "-component ").concat(i, "vector, but it is not."))
                }
            }

            function He(e, t, n) {
                if ("function" !== typeof e) throw TypeError("Expected a function, but received a ".concat(typeof e));
                if (e.length !== t) throw TypeError("Expected function to have ".concat(String(t), " inputs"));
                var r = Object(ce.a)(Array(t)).map((function() {
                        return Math.random()
                    })),
                    a = e.apply(void 0, Object(ce.a)(r));
                if (1 === n) {
                    if (ze(a)) return;
                    throw TypeError("Expected function to return a number, but it did not.")
                }
                if (n > 1) {
                    if (Ue(a, n, {
                            real: !1
                        })) return;
                    throw TypeError("Expected function to return a vector of length ".concat(n, ", but it did not."))
                }
            }

            function Ge(e, t, n) {
                try {
                    return He(e, t, n), !0
                } catch (r) {
                    return !1
                }
            }
            window.math = ke;
            var Xe = n(99),
                Ze = n.n(Xe);

            function We(e, t) {
                var n = Ze()(e, t);
                return Object.keys(n).reduce((function(e, t) {
                    return e[t] = new Set(n[t]), e
                }), {})
            }
            var Ye = [
                [],
                [
                    [0, 8, 3]
                ],
                [
                    [0, 1, 9]
                ],
                [
                    [1, 8, 3],
                    [9, 8, 1]
                ],
                [
                    [1, 2, 10]
                ],
                [
                    [0, 8, 3],
                    [1, 2, 10]
                ],
                [
                    [9, 2, 10],
                    [0, 2, 9]
                ],
                [
                    [2, 8, 3],
                    [2, 10, 8],
                    [10, 9, 8]
                ],
                [
                    [3, 11, 2]
                ],
                [
                    [0, 11, 2],
                    [8, 11, 0]
                ],
                [
                    [1, 9, 0],
                    [2, 3, 11]
                ],
                [
                    [1, 11, 2],
                    [1, 9, 11],
                    [9, 8, 11]
                ],
                [
                    [3, 10, 1],
                    [11, 10, 3]
                ],
                [
                    [0, 10, 1],
                    [0, 8, 10],
                    [8, 11, 10]
                ],
                [
                    [3, 9, 0],
                    [3, 11, 9],
                    [11, 10, 9]
                ],
                [
                    [9, 8, 10],
                    [10, 8, 11]
                ],
                [
                    [4, 7, 8]
                ],
                [
                    [4, 3, 0],
                    [7, 3, 4]
                ],
                [
                    [0, 1, 9],
                    [8, 4, 7]
                ],
                [
                    [4, 1, 9],
                    [4, 7, 1],
                    [7, 3, 1]
                ],
                [
                    [1, 2, 10],
                    [8, 4, 7]
                ],
                [
                    [3, 4, 7],
                    [3, 0, 4],
                    [1, 2, 10]
                ],
                [
                    [9, 2, 10],
                    [9, 0, 2],
                    [8, 4, 7]
                ],
                [
                    [2, 10, 9],
                    [2, 9, 7],
                    [2, 7, 3],
                    [7, 9, 4]
                ],
                [
                    [8, 4, 7],
                    [3, 11, 2]
                ],
                [
                    [11, 4, 7],
                    [11, 2, 4],
                    [2, 0, 4]
                ],
                [
                    [9, 0, 1],
                    [8, 4, 7],
                    [2, 3, 11]
                ],
                [
                    [4, 7, 11],
                    [9, 4, 11],
                    [9, 11, 2],
                    [9, 2, 1]
                ],
                [
                    [3, 10, 1],
                    [3, 11, 10],
                    [7, 8, 4]
                ],
                [
                    [1, 11, 10],
                    [1, 4, 11],
                    [1, 0, 4],
                    [7, 11, 4]
                ],
                [
                    [4, 7, 8],
                    [9, 0, 11],
                    [9, 11, 10],
                    [11, 0, 3]
                ],
                [
                    [4, 7, 11],
                    [4, 11, 9],
                    [9, 11, 10]
                ],
                [
                    [9, 5, 4]
                ],
                [
                    [9, 5, 4],
                    [0, 8, 3]
                ],
                [
                    [0, 5, 4],
                    [1, 5, 0]
                ],
                [
                    [8, 5, 4],
                    [8, 3, 5],
                    [3, 1, 5]
                ],
                [
                    [1, 2, 10],
                    [9, 5, 4]
                ],
                [
                    [3, 0, 8],
                    [1, 2, 10],
                    [4, 9, 5]
                ],
                [
                    [5, 2, 10],
                    [5, 4, 2],
                    [4, 0, 2]
                ],
                [
                    [2, 10, 5],
                    [3, 2, 5],
                    [3, 5, 4],
                    [3, 4, 8]
                ],
                [
                    [9, 5, 4],
                    [2, 3, 11]
                ],
                [
                    [0, 11, 2],
                    [0, 8, 11],
                    [4, 9, 5]
                ],
                [
                    [0, 5, 4],
                    [0, 1, 5],
                    [2, 3, 11]
                ],
                [
                    [2, 1, 5],
                    [2, 5, 8],
                    [2, 8, 11],
                    [4, 8, 5]
                ],
                [
                    [10, 3, 11],
                    [10, 1, 3],
                    [9, 5, 4]
                ],
                [
                    [4, 9, 5],
                    [0, 8, 1],
                    [8, 10, 1],
                    [8, 11, 10]
                ],
                [
                    [5, 4, 0],
                    [5, 0, 11],
                    [5, 11, 10],
                    [11, 0, 3]
                ],
                [
                    [5, 4, 8],
                    [5, 8, 10],
                    [10, 8, 11]
                ],
                [
                    [9, 7, 8],
                    [5, 7, 9]
                ],
                [
                    [9, 3, 0],
                    [9, 5, 3],
                    [5, 7, 3]
                ],
                [
                    [0, 7, 8],
                    [0, 1, 7],
                    [1, 5, 7]
                ],
                [
                    [1, 5, 3],
                    [3, 5, 7]
                ],
                [
                    [9, 7, 8],
                    [9, 5, 7],
                    [10, 1, 2]
                ],
                [
                    [10, 1, 2],
                    [9, 5, 0],
                    [5, 3, 0],
                    [5, 7, 3]
                ],
                [
                    [8, 0, 2],
                    [8, 2, 5],
                    [8, 5, 7],
                    [10, 5, 2]
                ],
                [
                    [2, 10, 5],
                    [2, 5, 3],
                    [3, 5, 7]
                ],
                [
                    [7, 9, 5],
                    [7, 8, 9],
                    [3, 11, 2]
                ],
                [
                    [9, 5, 7],
                    [9, 7, 2],
                    [9, 2, 0],
                    [2, 7, 11]
                ],
                [
                    [2, 3, 11],
                    [0, 1, 8],
                    [1, 7, 8],
                    [1, 5, 7]
                ],
                [
                    [11, 2, 1],
                    [11, 1, 7],
                    [7, 1, 5]
                ],
                [
                    [9, 5, 8],
                    [8, 5, 7],
                    [10, 1, 3],
                    [10, 3, 11]
                ],
                [
                    [5, 7, 0],
                    [5, 0, 9],
                    [7, 11, 0],
                    [1, 0, 10],
                    [11, 10, 0]
                ],
                [
                    [11, 10, 0],
                    [11, 0, 3],
                    [10, 5, 0],
                    [8, 0, 7],
                    [5, 7, 0]
                ],
                [
                    [11, 10, 5],
                    [7, 11, 5]
                ],
                [
                    [10, 6, 5]
                ],
                [
                    [0, 8, 3],
                    [5, 10, 6]
                ],
                [
                    [9, 0, 1],
                    [5, 10, 6]
                ],
                [
                    [1, 8, 3],
                    [1, 9, 8],
                    [5, 10, 6]
                ],
                [
                    [1, 6, 5],
                    [2, 6, 1]
                ],
                [
                    [1, 6, 5],
                    [1, 2, 6],
                    [3, 0, 8]
                ],
                [
                    [9, 6, 5],
                    [9, 0, 6],
                    [0, 2, 6]
                ],
                [
                    [5, 9, 8],
                    [5, 8, 2],
                    [5, 2, 6],
                    [3, 2, 8]
                ],
                [
                    [2, 3, 11],
                    [10, 6, 5]
                ],
                [
                    [11, 0, 8],
                    [11, 2, 0],
                    [10, 6, 5]
                ],
                [
                    [0, 1, 9],
                    [2, 3, 11],
                    [5, 10, 6]
                ],
                [
                    [5, 10, 6],
                    [1, 9, 2],
                    [9, 11, 2],
                    [9, 8, 11]
                ],
                [
                    [6, 3, 11],
                    [6, 5, 3],
                    [5, 1, 3]
                ],
                [
                    [0, 8, 11],
                    [0, 11, 5],
                    [0, 5, 1],
                    [5, 11, 6]
                ],
                [
                    [3, 11, 6],
                    [0, 3, 6],
                    [0, 6, 5],
                    [0, 5, 9]
                ],
                [
                    [6, 5, 9],
                    [6, 9, 11],
                    [11, 9, 8]
                ],
                [
                    [5, 10, 6],
                    [4, 7, 8]
                ],
                [
                    [4, 3, 0],
                    [4, 7, 3],
                    [6, 5, 10]
                ],
                [
                    [1, 9, 0],
                    [5, 10, 6],
                    [8, 4, 7]
                ],
                [
                    [10, 6, 5],
                    [1, 9, 7],
                    [1, 7, 3],
                    [7, 9, 4]
                ],
                [
                    [6, 1, 2],
                    [6, 5, 1],
                    [4, 7, 8]
                ],
                [
                    [1, 2, 5],
                    [5, 2, 6],
                    [3, 0, 4],
                    [3, 4, 7]
                ],
                [
                    [8, 4, 7],
                    [9, 0, 5],
                    [0, 6, 5],
                    [0, 2, 6]
                ],
                [
                    [7, 3, 9],
                    [7, 9, 4],
                    [3, 2, 9],
                    [5, 9, 6],
                    [2, 6, 9]
                ],
                [
                    [3, 11, 2],
                    [7, 8, 4],
                    [10, 6, 5]
                ],
                [
                    [5, 10, 6],
                    [4, 7, 2],
                    [4, 2, 0],
                    [2, 7, 11]
                ],
                [
                    [0, 1, 9],
                    [4, 7, 8],
                    [2, 3, 11],
                    [5, 10, 6]
                ],
                [
                    [9, 2, 1],
                    [9, 11, 2],
                    [9, 4, 11],
                    [7, 11, 4],
                    [5, 10, 6]
                ],
                [
                    [8, 4, 7],
                    [3, 11, 5],
                    [3, 5, 1],
                    [5, 11, 6]
                ],
                [
                    [5, 1, 11],
                    [5, 11, 6],
                    [1, 0, 11],
                    [7, 11, 4],
                    [0, 4, 11]
                ],
                [
                    [0, 5, 9],
                    [0, 6, 5],
                    [0, 3, 6],
                    [11, 6, 3],
                    [8, 4, 7]
                ],
                [
                    [6, 5, 9],
                    [6, 9, 11],
                    [4, 7, 9],
                    [7, 11, 9]
                ],
                [
                    [10, 4, 9],
                    [6, 4, 10]
                ],
                [
                    [4, 10, 6],
                    [4, 9, 10],
                    [0, 8, 3]
                ],
                [
                    [10, 0, 1],
                    [10, 6, 0],
                    [6, 4, 0]
                ],
                [
                    [8, 3, 1],
                    [8, 1, 6],
                    [8, 6, 4],
                    [6, 1, 10]
                ],
                [
                    [1, 4, 9],
                    [1, 2, 4],
                    [2, 6, 4]
                ],
                [
                    [3, 0, 8],
                    [1, 2, 9],
                    [2, 4, 9],
                    [2, 6, 4]
                ],
                [
                    [0, 2, 4],
                    [4, 2, 6]
                ],
                [
                    [8, 3, 2],
                    [8, 2, 4],
                    [4, 2, 6]
                ],
                [
                    [10, 4, 9],
                    [10, 6, 4],
                    [11, 2, 3]
                ],
                [
                    [0, 8, 2],
                    [2, 8, 11],
                    [4, 9, 10],
                    [4, 10, 6]
                ],
                [
                    [3, 11, 2],
                    [0, 1, 6],
                    [0, 6, 4],
                    [6, 1, 10]
                ],
                [
                    [6, 4, 1],
                    [6, 1, 10],
                    [4, 8, 1],
                    [2, 1, 11],
                    [8, 11, 1]
                ],
                [
                    [9, 6, 4],
                    [9, 3, 6],
                    [9, 1, 3],
                    [11, 6, 3]
                ],
                [
                    [8, 11, 1],
                    [8, 1, 0],
                    [11, 6, 1],
                    [9, 1, 4],
                    [6, 4, 1]
                ],
                [
                    [3, 11, 6],
                    [3, 6, 0],
                    [0, 6, 4]
                ],
                [
                    [6, 4, 8],
                    [11, 6, 8]
                ],
                [
                    [7, 10, 6],
                    [7, 8, 10],
                    [8, 9, 10]
                ],
                [
                    [0, 7, 3],
                    [0, 10, 7],
                    [0, 9, 10],
                    [6, 7, 10]
                ],
                [
                    [10, 6, 7],
                    [1, 10, 7],
                    [1, 7, 8],
                    [1, 8, 0]
                ],
                [
                    [10, 6, 7],
                    [10, 7, 1],
                    [1, 7, 3]
                ],
                [
                    [1, 2, 6],
                    [1, 6, 8],
                    [1, 8, 9],
                    [8, 6, 7]
                ],
                [
                    [2, 6, 9],
                    [2, 9, 1],
                    [6, 7, 9],
                    [0, 9, 3],
                    [7, 3, 9]
                ],
                [
                    [7, 8, 0],
                    [7, 0, 6],
                    [6, 0, 2]
                ],
                [
                    [7, 3, 2],
                    [6, 7, 2]
                ],
                [
                    [2, 3, 11],
                    [10, 6, 8],
                    [10, 8, 9],
                    [8, 6, 7]
                ],
                [
                    [2, 0, 7],
                    [2, 7, 11],
                    [0, 9, 7],
                    [6, 7, 10],
                    [9, 10, 7]
                ],
                [
                    [1, 8, 0],
                    [1, 7, 8],
                    [1, 10, 7],
                    [6, 7, 10],
                    [2, 3, 11]
                ],
                [
                    [11, 2, 1],
                    [11, 1, 7],
                    [10, 6, 1],
                    [6, 7, 1]
                ],
                [
                    [8, 9, 6],
                    [8, 6, 7],
                    [9, 1, 6],
                    [11, 6, 3],
                    [1, 3, 6]
                ],
                [
                    [0, 9, 1],
                    [11, 6, 7]
                ],
                [
                    [7, 8, 0],
                    [7, 0, 6],
                    [3, 11, 0],
                    [11, 6, 0]
                ],
                [
                    [7, 11, 6]
                ],
                [
                    [7, 6, 11]
                ],
                [
                    [3, 0, 8],
                    [11, 7, 6]
                ],
                [
                    [0, 1, 9],
                    [11, 7, 6]
                ],
                [
                    [8, 1, 9],
                    [8, 3, 1],
                    [11, 7, 6]
                ],
                [
                    [10, 1, 2],
                    [6, 11, 7]
                ],
                [
                    [1, 2, 10],
                    [3, 0, 8],
                    [6, 11, 7]
                ],
                [
                    [2, 9, 0],
                    [2, 10, 9],
                    [6, 11, 7]
                ],
                [
                    [6, 11, 7],
                    [2, 10, 3],
                    [10, 8, 3],
                    [10, 9, 8]
                ],
                [
                    [7, 2, 3],
                    [6, 2, 7]
                ],
                [
                    [7, 0, 8],
                    [7, 6, 0],
                    [6, 2, 0]
                ],
                [
                    [2, 7, 6],
                    [2, 3, 7],
                    [0, 1, 9]
                ],
                [
                    [1, 6, 2],
                    [1, 8, 6],
                    [1, 9, 8],
                    [8, 7, 6]
                ],
                [
                    [10, 7, 6],
                    [10, 1, 7],
                    [1, 3, 7]
                ],
                [
                    [10, 7, 6],
                    [1, 7, 10],
                    [1, 8, 7],
                    [1, 0, 8]
                ],
                [
                    [0, 3, 7],
                    [0, 7, 10],
                    [0, 10, 9],
                    [6, 10, 7]
                ],
                [
                    [7, 6, 10],
                    [7, 10, 8],
                    [8, 10, 9]
                ],
                [
                    [6, 8, 4],
                    [11, 8, 6]
                ],
                [
                    [3, 6, 11],
                    [3, 0, 6],
                    [0, 4, 6]
                ],
                [
                    [8, 6, 11],
                    [8, 4, 6],
                    [9, 0, 1]
                ],
                [
                    [9, 4, 6],
                    [9, 6, 3],
                    [9, 3, 1],
                    [11, 3, 6]
                ],
                [
                    [6, 8, 4],
                    [6, 11, 8],
                    [2, 10, 1]
                ],
                [
                    [1, 2, 10],
                    [3, 0, 11],
                    [0, 6, 11],
                    [0, 4, 6]
                ],
                [
                    [4, 11, 8],
                    [4, 6, 11],
                    [0, 2, 9],
                    [2, 10, 9]
                ],
                [
                    [10, 9, 3],
                    [10, 3, 2],
                    [9, 4, 3],
                    [11, 3, 6],
                    [4, 6, 3]
                ],
                [
                    [8, 2, 3],
                    [8, 4, 2],
                    [4, 6, 2]
                ],
                [
                    [0, 4, 2],
                    [4, 6, 2]
                ],
                [
                    [1, 9, 0],
                    [2, 3, 4],
                    [2, 4, 6],
                    [4, 3, 8]
                ],
                [
                    [1, 9, 4],
                    [1, 4, 2],
                    [2, 4, 6]
                ],
                [
                    [8, 1, 3],
                    [8, 6, 1],
                    [8, 4, 6],
                    [6, 10, 1]
                ],
                [
                    [10, 1, 0],
                    [10, 0, 6],
                    [6, 0, 4]
                ],
                [
                    [4, 6, 3],
                    [4, 3, 8],
                    [6, 10, 3],
                    [0, 3, 9],
                    [10, 9, 3]
                ],
                [
                    [10, 9, 4],
                    [6, 10, 4]
                ],
                [
                    [4, 9, 5],
                    [7, 6, 11]
                ],
                [
                    [0, 8, 3],
                    [4, 9, 5],
                    [11, 7, 6]
                ],
                [
                    [5, 0, 1],
                    [5, 4, 0],
                    [7, 6, 11]
                ],
                [
                    [11, 7, 6],
                    [8, 3, 4],
                    [3, 5, 4],
                    [3, 1, 5]
                ],
                [
                    [9, 5, 4],
                    [10, 1, 2],
                    [7, 6, 11]
                ],
                [
                    [6, 11, 7],
                    [1, 2, 10],
                    [0, 8, 3],
                    [4, 9, 5]
                ],
                [
                    [7, 6, 11],
                    [5, 4, 10],
                    [4, 2, 10],
                    [4, 0, 2]
                ],
                [
                    [3, 4, 8],
                    [3, 5, 4],
                    [3, 2, 5],
                    [10, 5, 2],
                    [11, 7, 6]
                ],
                [
                    [7, 2, 3],
                    [7, 6, 2],
                    [5, 4, 9]
                ],
                [
                    [9, 5, 4],
                    [0, 8, 6],
                    [0, 6, 2],
                    [6, 8, 7]
                ],
                [
                    [3, 6, 2],
                    [3, 7, 6],
                    [1, 5, 0],
                    [5, 4, 0]
                ],
                [
                    [6, 2, 8],
                    [6, 8, 7],
                    [2, 1, 8],
                    [4, 8, 5],
                    [1, 5, 8]
                ],
                [
                    [9, 5, 4],
                    [10, 1, 6],
                    [1, 7, 6],
                    [1, 3, 7]
                ],
                [
                    [1, 6, 10],
                    [1, 7, 6],
                    [1, 0, 7],
                    [8, 7, 0],
                    [9, 5, 4]
                ],
                [
                    [4, 0, 10],
                    [4, 10, 5],
                    [0, 3, 10],
                    [6, 10, 7],
                    [3, 7, 10]
                ],
                [
                    [7, 6, 10],
                    [7, 10, 8],
                    [5, 4, 10],
                    [4, 8, 10]
                ],
                [
                    [6, 9, 5],
                    [6, 11, 9],
                    [11, 8, 9]
                ],
                [
                    [3, 6, 11],
                    [0, 6, 3],
                    [0, 5, 6],
                    [0, 9, 5]
                ],
                [
                    [0, 11, 8],
                    [0, 5, 11],
                    [0, 1, 5],
                    [5, 6, 11]
                ],
                [
                    [6, 11, 3],
                    [6, 3, 5],
                    [5, 3, 1]
                ],
                [
                    [1, 2, 10],
                    [9, 5, 11],
                    [9, 11, 8],
                    [11, 5, 6]
                ],
                [
                    [0, 11, 3],
                    [0, 6, 11],
                    [0, 9, 6],
                    [5, 6, 9],
                    [1, 2, 10]
                ],
                [
                    [11, 8, 5],
                    [11, 5, 6],
                    [8, 0, 5],
                    [10, 5, 2],
                    [0, 2, 5]
                ],
                [
                    [6, 11, 3],
                    [6, 3, 5],
                    [2, 10, 3],
                    [10, 5, 3]
                ],
                [
                    [5, 8, 9],
                    [5, 2, 8],
                    [5, 6, 2],
                    [3, 8, 2]
                ],
                [
                    [9, 5, 6],
                    [9, 6, 0],
                    [0, 6, 2]
                ],
                [
                    [1, 5, 8],
                    [1, 8, 0],
                    [5, 6, 8],
                    [3, 8, 2],
                    [6, 2, 8]
                ],
                [
                    [1, 5, 6],
                    [2, 1, 6]
                ],
                [
                    [1, 3, 6],
                    [1, 6, 10],
                    [3, 8, 6],
                    [5, 6, 9],
                    [8, 9, 6]
                ],
                [
                    [10, 1, 0],
                    [10, 0, 6],
                    [9, 5, 0],
                    [5, 6, 0]
                ],
                [
                    [0, 3, 8],
                    [5, 6, 10]
                ],
                [
                    [10, 5, 6]
                ],
                [
                    [11, 5, 10],
                    [7, 5, 11]
                ],
                [
                    [11, 5, 10],
                    [11, 7, 5],
                    [8, 3, 0]
                ],
                [
                    [5, 11, 7],
                    [5, 10, 11],
                    [1, 9, 0]
                ],
                [
                    [10, 7, 5],
                    [10, 11, 7],
                    [9, 8, 1],
                    [8, 3, 1]
                ],
                [
                    [11, 1, 2],
                    [11, 7, 1],
                    [7, 5, 1]
                ],
                [
                    [0, 8, 3],
                    [1, 2, 7],
                    [1, 7, 5],
                    [7, 2, 11]
                ],
                [
                    [9, 7, 5],
                    [9, 2, 7],
                    [9, 0, 2],
                    [2, 11, 7]
                ],
                [
                    [7, 5, 2],
                    [7, 2, 11],
                    [5, 9, 2],
                    [3, 2, 8],
                    [9, 8, 2]
                ],
                [
                    [2, 5, 10],
                    [2, 3, 5],
                    [3, 7, 5]
                ],
                [
                    [8, 2, 0],
                    [8, 5, 2],
                    [8, 7, 5],
                    [10, 2, 5]
                ],
                [
                    [9, 0, 1],
                    [5, 10, 3],
                    [5, 3, 7],
                    [3, 10, 2]
                ],
                [
                    [9, 8, 2],
                    [9, 2, 1],
                    [8, 7, 2],
                    [10, 2, 5],
                    [7, 5, 2]
                ],
                [
                    [1, 3, 5],
                    [3, 7, 5]
                ],
                [
                    [0, 8, 7],
                    [0, 7, 1],
                    [1, 7, 5]
                ],
                [
                    [9, 0, 3],
                    [9, 3, 5],
                    [5, 3, 7]
                ],
                [
                    [9, 8, 7],
                    [5, 9, 7]
                ],
                [
                    [5, 8, 4],
                    [5, 10, 8],
                    [10, 11, 8]
                ],
                [
                    [5, 0, 4],
                    [5, 11, 0],
                    [5, 10, 11],
                    [11, 3, 0]
                ],
                [
                    [0, 1, 9],
                    [8, 4, 10],
                    [8, 10, 11],
                    [10, 4, 5]
                ],
                [
                    [10, 11, 4],
                    [10, 4, 5],
                    [11, 3, 4],
                    [9, 4, 1],
                    [3, 1, 4]
                ],
                [
                    [2, 5, 1],
                    [2, 8, 5],
                    [2, 11, 8],
                    [4, 5, 8]
                ],
                [
                    [0, 4, 11],
                    [0, 11, 3],
                    [4, 5, 11],
                    [2, 11, 1],
                    [5, 1, 11]
                ],
                [
                    [0, 2, 5],
                    [0, 5, 9],
                    [2, 11, 5],
                    [4, 5, 8],
                    [11, 8, 5]
                ],
                [
                    [9, 4, 5],
                    [2, 11, 3]
                ],
                [
                    [2, 5, 10],
                    [3, 5, 2],
                    [3, 4, 5],
                    [3, 8, 4]
                ],
                [
                    [5, 10, 2],
                    [5, 2, 4],
                    [4, 2, 0]
                ],
                [
                    [3, 10, 2],
                    [3, 5, 10],
                    [3, 8, 5],
                    [4, 5, 8],
                    [0, 1, 9]
                ],
                [
                    [5, 10, 2],
                    [5, 2, 4],
                    [1, 9, 2],
                    [9, 4, 2]
                ],
                [
                    [8, 4, 5],
                    [8, 5, 3],
                    [3, 5, 1]
                ],
                [
                    [0, 4, 5],
                    [1, 0, 5]
                ],
                [
                    [8, 4, 5],
                    [8, 5, 3],
                    [9, 0, 5],
                    [0, 3, 5]
                ],
                [
                    [9, 4, 5]
                ],
                [
                    [4, 11, 7],
                    [4, 9, 11],
                    [9, 10, 11]
                ],
                [
                    [0, 8, 3],
                    [4, 9, 7],
                    [9, 11, 7],
                    [9, 10, 11]
                ],
                [
                    [1, 10, 11],
                    [1, 11, 4],
                    [1, 4, 0],
                    [7, 4, 11]
                ],
                [
                    [3, 1, 4],
                    [3, 4, 8],
                    [1, 10, 4],
                    [7, 4, 11],
                    [10, 11, 4]
                ],
                [
                    [4, 11, 7],
                    [9, 11, 4],
                    [9, 2, 11],
                    [9, 1, 2]
                ],
                [
                    [9, 7, 4],
                    [9, 11, 7],
                    [9, 1, 11],
                    [2, 11, 1],
                    [0, 8, 3]
                ],
                [
                    [11, 7, 4],
                    [11, 4, 2],
                    [2, 4, 0]
                ],
                [
                    [11, 7, 4],
                    [11, 4, 2],
                    [8, 3, 4],
                    [3, 2, 4]
                ],
                [
                    [2, 9, 10],
                    [2, 7, 9],
                    [2, 3, 7],
                    [7, 4, 9]
                ],
                [
                    [9, 10, 7],
                    [9, 7, 4],
                    [10, 2, 7],
                    [8, 7, 0],
                    [2, 0, 7]
                ],
                [
                    [3, 7, 10],
                    [3, 10, 2],
                    [7, 4, 10],
                    [1, 10, 0],
                    [4, 0, 10]
                ],
                [
                    [1, 10, 2],
                    [8, 7, 4]
                ],
                [
                    [4, 9, 1],
                    [4, 1, 7],
                    [7, 1, 3]
                ],
                [
                    [4, 9, 1],
                    [4, 1, 7],
                    [0, 8, 1],
                    [8, 7, 1]
                ],
                [
                    [4, 0, 3],
                    [7, 4, 3]
                ],
                [
                    [4, 8, 7]
                ],
                [
                    [9, 10, 8],
                    [10, 11, 8]
                ],
                [
                    [3, 0, 9],
                    [3, 9, 11],
                    [11, 9, 10]
                ],
                [
                    [0, 1, 10],
                    [0, 10, 8],
                    [8, 10, 11]
                ],
                [
                    [3, 1, 10],
                    [11, 3, 10]
                ],
                [
                    [1, 2, 11],
                    [1, 11, 9],
                    [9, 11, 8]
                ],
                [
                    [3, 0, 9],
                    [3, 9, 11],
                    [1, 2, 9],
                    [2, 11, 9]
                ],
                [
                    [0, 2, 11],
                    [8, 0, 11]
                ],
                [
                    [3, 2, 11]
                ],
                [
                    [2, 3, 8],
                    [2, 8, 10],
                    [10, 8, 9]
                ],
                [
                    [9, 10, 2],
                    [0, 9, 2]
                ],
                [
                    [2, 3, 8],
                    [2, 8, 10],
                    [0, 1, 8],
                    [1, 10, 8]
                ],
                [
                    [1, 10, 2]
                ],
                [
                    [1, 3, 8],
                    [9, 1, 8]
                ],
                [
                    [0, 9, 1]
                ],
                [
                    [0, 3, 8]
                ],
                []
            ];

            function qe(e, t, n, r, a) {
                var i = (a - n) / (r - n);
                return e * (1 - i) + t * i
            }
            var Je = function() {
                function e(t, n, r, a, i, o, c, s) {
                    Object(h.a)(this, e), this.x = t, this.y = n, this.z = r, this.xStep = a, this.yStep = i, this.zStep = o, this.c = s, this.v1 = c(t, n, r), this.v2 = c(t + a, n, r), this.v4 = c(t + a, n, r + o), this.v8 = c(t, n, r + o), this.v16 = c(t, n + i, r), this.v32 = c(t + a, n + i, r), this.v64 = c(t + a, n + i, r + o), this.v128 = c(t, n + i, r + o), this.edgePoints = new Map
                }
                return Object(f.a)(e, [{
                    key: "getIndex",
                    value: function() {
                        for (var e = 0, t = [this.v1, this.v2, this.v4, this.v8, this.v16, this.v32, this.v64, this.v128], n = 0; n < t.length; n++) {
                            var r = Math.pow(2, n);
                            e += (t[n] > this.c) * r
                        }
                        return e
                    }
                }, {
                    key: "getEdgePoint",
                    value: function(e) {
                        if (this.edgePoints.has(e)) return this.edgePoints.get(e);
                        var t, n, r;
                        switch (e) {
                            case 0:
                                t = qe(this.x, this.x + this.xStep, this.v1, this.v2, this.c), n = this.y, r = this.z;
                                break;
                            case 1:
                                t = this.x + this.xStep, n = this.y, r = qe(this.z, this.z + this.zStep, this.v2, this.v4, this.c);
                                break;
                            case 2:
                                t = qe(this.x, this.x + this.xStep, this.v8, this.v4, this.c), n = this.y, r = this.z + this.zStep;
                                break;
                            case 3:
                                t = this.x, n = this.y, r = qe(this.z, this.z + this.zStep, this.v1, this.v8, this.c);
                                break;
                            case 4:
                                t = qe(this.x, this.x + this.xStep, this.v16, this.v32, this.c), n = this.y + this.yStep, r = this.z;
                                break;
                            case 5:
                                t = this.x + this.xStep, n = this.y + this.yStep, r = qe(this.z, this.z + this.zStep, this.v32, this.v64, this.c);
                                break;
                            case 6:
                                t = qe(this.x, this.x + this.xStep, this.v128, this.v64, this.c), n = this.y + this.yStep, r = this.z + this.zStep;
                                break;
                            case 7:
                                t = this.x, n = this.y + this.yStep, r = qe(this.z, this.z + this.zStep, this.v16, this.v128, this.c);
                                break;
                            case 8:
                                t = this.x, n = qe(this.y, this.y + this.yStep, this.v1, this.v16, this.c), r = this.z;
                                break;
                            case 9:
                                t = this.x + this.xStep, n = qe(this.y, this.y + this.yStep, this.v2, this.v32, this.c), r = this.z;
                                break;
                            case 10:
                                t = this.x + this.xStep, n = qe(this.y, this.y + this.yStep, this.v4, this.v64, this.c), r = this.z + this.zStep;
                                break;
                            case 11:
                                t = this.x, n = qe(this.y, this.y + this.yStep, this.v8, this.v128, this.c), r = this.z + this.zStep;
                                break;
                            default:
                                throw new Error("Edge index must be between 0 and 11")
                        }
                        return this.edgePoints.set(e, [t, n, r]), [t, n, r]
                    }
                }]), e
            }();
            var $e = ["#33FF00", "#2ecc71", "#3498db", "#9b59b6", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#808080"],
                Ke = {
                    rainbow: {
                        css: "background: linear-gradient(\n      to right,\n      hsl(360, 100%, 50%),\n      hsl(300, 100%, 50%),\n      hsl(240, 100%, 50%),\n      hsl(180, 100%, 50%),\n      hsl(120, 100%, 50%),\n      hsl(60, 100%, 50%),\n      hsl(0, 100%, 50%)\n    )\n    ",
                        func: function(e) {
                            var t = new xe.a(16777215);
                            return t.setHSL(1 - e, 1, .5), [t.r, t.g, t.b, 1]
                        }
                    },
                    bluered: {
                        css: "background: linear-gradient(to right, blue, red)",
                        func: function(e) {
                            return [e, 0, 1 - e, 1]
                        }
                    },
                    temperature: {
                        css: "background: linear-gradient(\n      to right,\n      hsl(240, 100%, 50%),\n      hsl(180, 100%, 50%),\n      hsl(120, 100%, 50%),\n      hsl(60, 100%, 50%),\n      hsl(0, 100%, 50%)\n    )\n    ",
                        func: function(e) {
                            var t = new xe.a(16777215);
                            return t.setHSL(.666 * (1 - e), 1, .5), [t.r, t.g, t.b, 1]
                        }
                    }
                },
                Qe = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).oldProps = {}, e.diffProps = {
                            added: new Set,
                            deleted: new Set,
                            unchanged: new Set,
                            updated: new Set
                        }, e.shouldComponentUpdate = function(t) {
                            e.oldProps = e.props, e.diffProps = We(e.props, t);
                            var n, r = e.diffProps,
                                a = r.added,
                                i = r.deleted,
                                o = r.updated,
                                c = r.unchanged,
                                s = Object(je.a)(o);
                            try {
                                for (s.s(); !(n = s.n()).done;) {
                                    var l = n.value;
                                    Me(e.oldProps[l], t[l]) && (o.delete(l), c.add(l))
                                }
                            } catch (u) {
                                s.e(u)
                            } finally {
                                s.f()
                            }
                            return 0 !== o.size || 0 !== a.size || 0 !== i.size
                        }, e.componentDidMount = function() {
                            if (!e.props.mathboxParent) throw ReferenceError("".concat(e.constructor.name, " called without a 'mathboxParent' property."));
                            e.mathboxNode = e.mathboxRender(e.props.mathboxParent), e.mathbox = e.props.mathbox, e.forceUpdate(), e.updateHandledProps(e.props)
                        }, e.componentWillUnmount = function() {
                            e.mathboxNode.remove()
                        }, e.renderChildren = function() {
                            return e.props.children ? r.Children.map(e.props.children, (function(t) {
                                return r.cloneElement(t, {
                                    mathboxParent: e.mathboxNode,
                                    mathbox: e.mathbox
                                })
                            })) : null
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return this.mathboxNode ? this.renderChildren() : null
                        }
                    }, {
                        key: "getNodes",
                        value: function(e) {
                            return e ? this.mathboxNode.select(e.join(", ")) : void 0
                        }
                    }, {
                        key: "updateHandledProps",
                        value: function(e) {
                            var t = this,
                                n = {
                                    dataNodes: this.getNodes(this.dataNodeNames),
                                    renderNodes: this.getNodes(this.renderNodeNames),
                                    groupNode: this.mathboxNode,
                                    root: this.mathbox
                                },
                                r = {};
                            Object.keys(e).forEach((function(e) {
                                if (t.handlers.hasOwnProperty(e)) try {
                                    var a = t.handlers[e](n, t.props, t.handlers);
                                    a && Object.keys(a).forEach((function(e) {
                                        r[e] = a[e]
                                    }))
                                } catch (i) {
                                    r[e] = i
                                }
                            })), this.props.handleErrors(r, this.props.id, e)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this,
                                t = [].concat(Object(ce.a)(this.diffProps.updated), Object(ce.a)(this.diffProps.added)).reduce((function(t, n) {
                                    return t[n] = e.props[n], t
                                }), {});
                            this.updateHandledProps(t)
                        }
                    }], [{
                        key: "defaultHandleErrors",
                        value: function(e, t, n) {
                            0 !== Object.keys(e).length && Object.keys(e).forEach((function(t) {
                                console.warn(e[t])
                            }))
                        }
                    }]), n
                }(r.Component);

            function et(e, t) {
                return function(n, r) {
                    var a = n.renderNodes;
                    return t && t(r[e]), a.set(e, r[e])
                }
            }
            Qe.defaultProps = {
                handleErrors: Qe.defaultHandleErrors
            };
            var tt = {
                    opacity: et("opacity", Fe),
                    zBias: et("zBias", Fe),
                    zIndex: et("zIndex", Fe),
                    zOrder: et("zOrder", Fe),
                    color: et("color"),
                    calculatedVisibility: function(e, t) {
                        var n = t.calculatedVisibility;
                        t.useCalculatedVisibility && (_e(n) || Le(n)) && e.groupNode.set("visible", !!n)
                    },
                    visible: function(e, t) {
                        t.useCalculatedVisibility || e.groupNode.set("visible", t.visible)
                    }
                },
                nt = {
                    size: et("size", Fe),
                    width: et("width", Fe),
                    start: et("start"),
                    end: et("end")
                },
                rt = {
                    shaded: et("shaded")
                };

            function at(e) {
                return function(t, n) {
                    var r = [].concat(Object(ce.a)(Array(e).fill("")), [n.label]);
                    t.groupNode.select("format.label").set("data", r)
                }
            }

            function it(e, t) {
                e.groupNode.select("label.label").set("visible", t.labelVisible)
            }

            function ot(e, t, n) {
                return (e - t) / (n - t)
            }
            var ct = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).dataNodeNames = ["camera"], r.renderNodeNames = null, r.handleIsOrthographic = function(e, t) {
                            var a = t.isOrthographic;
                            r.isOrthographic !== a && (a ? (n.dollyZoom(e.root, r.dollyZoomFactor), r.isOrthographic = !0) : (n.dollyZoom(e.root, 1 / r.dollyZoomFactor), r.isOrthographic = !1))
                        }, r.handleUseComputed = function(e, t) {
                            var a = t.computedPosition,
                                i = t.computedLookAt;
                            Ue(a, 3) && r.handleComputedPosition(e, t), Ue(i, 3) && n.handleComputedLookAt(e, t)
                        }, r.handleComputedPosition = function(e, t) {
                            var a, i = t.computedPosition,
                                o = t.useComputed;
                            if (Be(i, 3), o) {
                                var c = e.root,
                                    s = c.select("cartesian"),
                                    l = n.toRelativeCoords(i, s);
                                if ((a = c.three.camera.position).set.apply(a, Object(ce.a)(l)), r.isOrthographic) {
                                    var u = c.three,
                                        d = u.camera,
                                        p = u.controls;
                                    n.translateForDollyZoom(d, p, r.dollyZoomFactor)
                                }
                            }
                        }, r.mathboxRender = function(e) {
                            var t = e.group({
                                classes: ["camera"]
                            });
                            return t.camera({
                                proxy: !0
                            }), t
                        }, r.isOrthographic = !1, r.dollyZoomFactor = 50, r.handlers = {
                            relativePosition: n.handleRelativePosition,
                            relativeLookAt: n.handleRelativeLookAt,
                            isRotateEnabled: n.handleIsRotateEnabled,
                            isZoomEnabled: n.handleIsZoomEnabled,
                            isPanEnabled: n.handlePanIsPanEnabled,
                            computedPosition: r.handleComputedPosition,
                            computedLookAt: n.handleComputedLookAt,
                            useComputed: r.handleUseComputed,
                            isOrthographic: r.handleIsOrthographic
                        }, r
                    }
                    return Object(f.a)(n, null, [{
                        key: "frustumHeightAtDistance",
                        value: function(e, t) {
                            return 2 * t * Math.tan(.5 * e * Math.PI / 180)
                        }
                    }, {
                        key: "fovForHeightAndDistance",
                        value: function(e, t) {
                            return 2 * Math.atan(.5 * e / t) * 180 / Math.PI
                        }
                    }, {
                        key: "dollyZoom",
                        value: function(e, t) {
                            var r = e.three,
                                a = r.camera,
                                i = r.controls,
                                o = a.position.distanceTo(i.target),
                                c = a.fov,
                                s = n.frustumHeightAtDistance(c, o),
                                l = o * t,
                                u = n.fovForHeightAndDistance(s, l);
                            e.set("focus", e.get("focus") * t), n.translateForDollyZoom(a, i, t), a.fov = u
                        }
                    }, {
                        key: "translateForDollyZoom",
                        value: function(e, t, n) {
                            var r = e.position.distanceTo(t.target);
                            e.translateZ(r * (n - 1))
                        }
                    }, {
                        key: "handlePanIsPanEnabled",
                        value: function(e, t) {
                            e.root.three.controls.enablePan = t.isPanEnabled
                        }
                    }, {
                        key: "handleIsZoomEnabled",
                        value: function(e, t) {
                            e.root.three.controls.enableZoom = t.isZoomEnabled
                        }
                    }, {
                        key: "handleIsRotateEnabled",
                        value: function(e, t) {
                            e.root.three.controls.enableRotate = t.isRotateEnabled
                        }
                    }, {
                        key: "handleRelativePosition",
                        value: function(e, t) {
                            var n = e.dataNodes,
                                r = t.relativePosition;
                            n.set("position", r)
                        }
                    }, {
                        key: "handleRelativeLookAt",
                        value: function(e, t) {
                            var n, r = e.root,
                                a = t.relativeLookAt;
                            (n = r.three.controls.target).set.apply(n, Object(ce.a)(a))
                        }
                    }, {
                        key: "handleComputedLookAt",
                        value: function(e, t) {
                            var r, a = t.computedLookAt,
                                i = t.useComputed;
                            if (Be(a, 3), i) {
                                var o = e.root,
                                    c = o.select("cartesian"),
                                    s = n.toRelativeCoords(a, c);
                                (r = o.three.controls.target).set.apply(r, Object(ce.a)(s))
                            }
                        }
                    }, {
                        key: "toRelativeCoords",
                        value: function(e, t) {
                            var n = t.get("range"),
                                r = t.get("scale").toArray();
                            return e.map((function(e, t) {
                                var a = n[t],
                                    i = a.y,
                                    o = a.x;
                                return (2 / (i - o) * e + -(i + o) / (i - o)) * r[t]
                            }))
                        }
                    }]), n
                }(Qe),
                st = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["cartesian"], e.renderNodeNames = null, e.handlers = {}, e.mathboxRender = function(e) {
                            return e.cartesian({
                                range: [
                                    [-5, 5],
                                    [-5, 5],
                                    [-5, 5]
                                ],
                                scale: [2, 2, 1]
                            })
                        }, e
                    }
                    return n
                }(Qe);
            var lt = function(e) {
                Object(v.a)(n, e);
                var t = Object(b.a)(n);

                function n() {
                    var e;
                    Object(h.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = null, e.renderNodeNames = ["axis"], e.handlers = Object(o.a)(Object(o.a)({}, tt), {}, {
                        width: et("width"),
                        size: et("size"),
                        label: n.handleLabel,
                        labelVisible: it,
                        min: n.handleMin,
                        max: n.handleMax,
                        axis: n.handleAxis,
                        scale: n.handleScale,
                        ticksVisible: n.handleTicksVisible
                    }), e.mathboxRender = function(e) {
                        var t = e.group({
                            classes: ["axis"]
                        });
                        return t.axis().scale({
                            divide: 10,
                            nice: !0,
                            zero: !1
                        }), t.group({
                            classes: ["ticks"]
                        }).ticks({
                            width: 2
                        }).format({
                            digits: 2
                        }).label({
                            classes: ["tick-labels"]
                        }), t.group({
                            classes: ["label"]
                        }).array({
                            channels: 3,
                            live: !1
                        }).text({
                            weight: "bold"
                        }).label({
                            offset: [0, 40, 0]
                        }), t
                    }, e
                }
                return Object(f.a)(n, null, [{
                    key: "handleTicksVisible",
                    value: function(e, t) {
                        var n = e.groupNode,
                            r = t.ticksVisible;
                        n.select(".ticks").set("visible", r)
                    }
                }, {
                    key: "handleLabel",
                    value: function(e, t) {
                        e.groupNode.select(".label text").set("data", [t.label])
                    }
                }, {
                    key: "handleScale",
                    value: function(e, t) {
                        var r = t.scale,
                            a = t.axis;
                        Fe(r);
                        var i = n.getCartesian(e.renderNodes),
                            c = Object(o.a)({}, i.props.scale);
                        c[a] = r, i.set("scale", c)
                    }
                }, {
                    key: "handleAxis",
                    value: function(e, t) {
                        var n = t.axis;
                        e.renderNodes.set("axis", n), e.groupNode.select("scale").set("axis", n), "z" === n && e.groupNode.select(".ticks > label").set("offset", [20, 0, 0])
                    }
                }, {
                    key: "handleMin",
                    value: function(e, t) {
                        var r = t.min,
                            a = t.axis;
                        Fe(r);
                        var i = n.getCartesian(e.renderNodes);
                        n.setAxisEnd(i, a, r, 0)
                    }
                }, {
                    key: "handleMax",
                    value: function(e, t) {
                        var r = t.max,
                            a = t.axis;
                        Fe(r);
                        var i = n.getCartesian(e.renderNodes);
                        n.setAxisEnd(i, a, r, 1);
                        var o = function(e) {
                            var t = e.x,
                                n = void 0 === t ? 0 : t,
                                r = e.y,
                                a = void 0 === r ? 0 : r,
                                i = e.z;
                            return [n, a, void 0 === i ? 0 : i]
                        }(Object(u.a)({}, a, r));
                        e.groupNode.select(".label > array").set("data", [o])
                    }
                }, {
                    key: "copyCartesianRange",
                    value: function(e) {
                        var t = e.props.range;
                        return [
                            [t[0].x, t[0].y],
                            [t[1].x, t[1].y],
                            [t[2].x, t[2].y]
                        ]
                    }
                }, {
                    key: "setAxisEnd",
                    value: function(e, t, r, a) {
                        var i = n.copyCartesianRange(e);
                        i[n.axisMap[t]][a] = r, e.set("range", i)
                    }
                }, {
                    key: "getCartesian",
                    value: function(e) {
                        for (var t = e[0];
                            "cartesian" !== t.type;)
                            if ("root" === (t = t.parent).type) throw Error("Node type 'axis' should have 'cartesian' as an ancestor.");
                        return t
                    }
                }]), n
            }(Qe);
            lt.axisMap = {
                x: 0,
                y: 1,
                z: 2
            };
            var ut = function(e) {
                Object(v.a)(n, e);
                var t = Object(b.a)(n);

                function n() {
                    var e;
                    Object(h.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = null, e.renderNodeNames = ["grid"], e.handlers = Object(o.a)(Object(o.a)({}, tt), {}, {
                        axes: n.handleAxes,
                        width: n.handleWidth,
                        divisions: n.handleDivisions,
                        snap: n.handleSnap
                    }), e.mathboxRender = function(e) {
                        var t = e.group();
                        return t.grid(), t
                    }, e
                }
                return Object(f.a)(n, null, [{
                    key: "handleDivisions",
                    value: function(e, t) {
                        var n = t.divisions;
                        Be(n, 2), e.renderNodes.set({
                            divideX: n[0],
                            divideY: n[1]
                        })
                    }
                }, {
                    key: "handleSnap",
                    value: function(e, t) {
                        e.renderNodes.set({
                            niceX: t.snap,
                            niceY: t.snap
                        })
                    }
                }]), n
            }(Qe);
            ut.handleAxes = et("axes"), ut.handleWidth = et("width");
            var dt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["array"], e.renderNodeNames = ["point"], e.handlers = Object(o.a)(Object(o.a)({}, tt), {}, {
                            label: at(0),
                            labelVisible: it,
                            size: et("size"),
                            coords: n.handleCoords
                        }), e.mathboxRender = function(e) {
                            var t = e.group({
                                classes: ["point"]
                            });
                            return t.array({
                                items: 1,
                                channels: 3
                            }).point().format({
                                classes: ["label"],
                                weight: "bold"
                            }).label({
                                classes: ["label"],
                                offset: [0, 40, 0]
                            }), t
                        }, e
                    }
                    return Object(f.a)(n, null, [{
                        key: "handleCoords",
                        value: function(e, t) {
                            var n = t.coords,
                                r = n instanceof Array && n[0] instanceof Number ? [n] : n;
                            e.dataNodes.set("data", r)
                        }
                    }]), n
                }(Qe),
                pt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["array"], e.renderNodeNames = ["line"], e.handlers = Object(o.a)(Object(o.a)(Object(o.a)({}, tt), nt), {}, {
                            label: at(1),
                            labelVisible: it,
                            coords: n.handleCoords
                        }), e.mathboxRender = function(e) {
                            var t = e.group({
                                classes: ["line"]
                            });
                            return t.array({
                                items: 1,
                                channels: 3
                            }).line().format({
                                classes: ["label"],
                                weight: "bold"
                            }).label({
                                classes: ["label"],
                                offset: [0, 40, 0]
                            }), t
                        }, e
                    }
                    return Object(f.a)(n, null, [{
                        key: "handleCoords",
                        value: function(e, t) {
                            e.dataNodes.set("data", t.coords)
                        }
                    }]), n
                }(Qe),
                ht = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["array"], e.renderNodeNames = ["line"], e.handlers = Object(o.a)(Object(o.a)(Object(o.a)({}, tt), nt), {}, {
                            label: at(1),
                            labelVisible: it,
                            components: n.handleComponents,
                            tail: n.handleTail
                        }), e.mathboxRender = function(e) {
                            var t = e.group({
                                classes: ["vector"]
                            });
                            return t.array({
                                items: 1,
                                channels: 3
                            }).line().format({
                                classes: ["label"],
                                weight: "bold"
                            }).label({
                                classes: ["label"],
                                offset: [0, 40, 0]
                            }), t
                        }, e
                    }
                    return Object(f.a)(n, null, [{
                        key: "handleTail",
                        value: function(e, t) {
                            var r = t.tail,
                                a = t.components;
                            Be(r, 3), Ue(a, 3) && n.updateData(e, t)
                        }
                    }, {
                        key: "handleComponents",
                        value: function(e, t) {
                            var r = t.tail;
                            Be(t.components, 3), Ue(r, 3) && n.updateData(e, t)
                        }
                    }, {
                        key: "updateData",
                        value: function(e, t) {
                            var n = t.tail,
                                r = t.components,
                                a = Ne.add(n, r);
                            e.dataNodes.set("data", [n, a])
                        }
                    }]), n
                }(Qe),
                ft = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["interval"], e.renderNodeNames = ["line"], e.handlers = Object(o.a)(Object(o.a)(Object(o.a)({}, tt), nt), {}, {
                            range: n.handleRange,
                            expr: n.handleExpr,
                            samples: n.handleSamples
                        }), e.mathboxRender = function(e) {
                            var t = e.group(),
                                n = t.cartesian().interval({
                                    channels: 3,
                                    axis: 1,
                                    live: !1
                                });
                            return t.line({
                                points: n
                            }), t
                        }, e
                    }
                    return Object(f.a)(n, null, [{
                        key: "handleRange",
                        value: function(e, t) {
                            var r = t.range;
                            Be(r, 2), e.groupNode.select("cartesian").set("range", [r, [0, 1]]), n.forceUpdate(e, t)
                        }
                    }, {
                        key: "handleExpr",
                        value: function(e, t) {
                            var n = t.expr;
                            He(n, 1, 3), e.dataNodes.set("expr", (function(e, t) {
                                return e.apply(void 0, Object(ce.a)(n(t)))
                            }))
                        }
                    }, {
                        key: "handleSamples",
                        value: function(e, t) {
                            var n = t.samples;
                            Fe(n), e.dataNodes.set("width", n)
                        }
                    }, {
                        key: "forceUpdate",
                        value: function(e, t) {
                            try {
                                n.handleExpr(e, t)
                            } catch (r) {}
                        }
                    }]), n
                }(Qe),
                mt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).dataNodeNames = ["area.data"], r.renderNodeNames = ["surface"], r.handleColor = function(e, t) {
                            var n = t.color,
                                a = e.groupNode,
                                i = a.select("line"),
                                o = a.select(".colors");
                            if (Ke.hasOwnProperty(n)) return r.handleColorExpr(e, t), void i.set("color", "gray");
                            o.set("expr", (function(e) {
                                var t = new xe.a(n);
                                e(t.r, t.g, t.b, 1)
                            }));
                            var c = x(n, -.75);
                            i.set("color", c)
                        }, r.canUpdateColorExpr = function(e) {
                            var t = e.colorExpr,
                                a = e.color,
                                i = e.expr,
                                o = e.uSamples,
                                c = e.vSamples,
                                s = e.rangeU,
                                l = e.rangeV;
                            return !!Ge(t, 5, 1) && (!!Ke[a] && (!(!Le(o) || !Le(c)) && (!!r.constructor.isExprValid(i) && !!n.isRangeValid(s, l))))
                        }, r.handleColorExpr = function(e, t) {
                            var a = t.colorExpr,
                                i = t.expr,
                                o = t.rangeU,
                                c = t.rangeV;
                            if (He(a, 5, 1), r.canUpdateColorExpr(t)) {
                                var s = n.getTrueParamsFunc(o, c),
                                    l = r.constructor.transformExpr(i);
                                n.updateColorExpr(e, t, s, l)
                            }
                        }, r.handleRange = function(e, t) {
                            var a = t.rangeU,
                                i = t.rangeV,
                                o = t.expr,
                                c = e.dataNodes,
                                s = r.constructor.isExprValid(o);
                            if (!n.isRangeValid(a, i)) throw "function" === typeof a && "function" === typeof i ? new Error("Either the u-range can depend on v, OR the v-range can dependent on u, but NOT both.") : new Error("Parameter ranges must be 2-component arrays.");
                            if (s) {
                                var l = n.getTrueParamsFunc(a, i),
                                    u = r.constructor.transformExpr(o);
                                if (n.updateExpr(c, l, u), r.canUpdateColorExpr(t)) return n.updateColorExpr(e, t, l, u), {
                                    rangeU: null,
                                    rangeV: null
                                }
                            }
                        }, r.handleExpr = function(e, t) {
                            var a = t.expr,
                                i = t.rangeU,
                                o = t.rangeV;
                            r.constructor.validateExpr(a);
                            var c = e.dataNodes;
                            if (n.isRangeValid(i, o)) {
                                var s = n.getTrueParamsFunc(i, o),
                                    l = r.constructor.transformExpr(a);
                                n.updateExpr(c, s, l), r.canUpdateColorExpr(t) && n.updateColorExpr(e, t, s, l)
                            }
                        }, r.mathboxRender = function(e) {
                            var t = e.group();
                            return n.renderParametricSurface(t)
                        }, r.handlers = Object(o.a)(Object(o.a)(Object(o.a)({}, tt), rt), {}, {
                            zOrder: n.handleZOrder,
                            color: r.handleColor,
                            colorExpr: r.handleColorExpr,
                            expr: r.handleExpr,
                            rangeU: r.handleRange,
                            rangeV: r.handleRange,
                            uSamples: n.handleUSamples,
                            vSamples: n.handleVSamples,
                            gridWidth: n.handleGridWidth,
                            gridOpacity: n.handleGridOpacity,
                            gridU: n.handleGridU,
                            gridV: n.handleGridV
                        }), r
                    }
                    return Object(f.a)(n, null, [{
                        key: "handleZOrder",
                        value: function(e, t) {
                            var n = t.zOrder,
                                r = e.groupNode;
                            r.select("surface").set({
                                zOrder: n
                            }), r.select("line").set({
                                zOrder: n + .001
                            })
                        }
                    }, {
                        key: "handleGridOpacity",
                        value: function(e, t) {
                            var n = t.gridOpacity,
                                r = e.groupNode;
                            Fe(n), r.select("line").set("opacity", n)
                        }
                    }, {
                        key: "handleGridWidth",
                        value: function(e, t) {
                            var n = t.gridWidth,
                                r = e.groupNode;
                            Fe(n), r.select("line").set("width", n)
                        }
                    }, {
                        key: "handleGridU",
                        value: function(e, t) {
                            var n = t.gridU;
                            Fe(n), e.groupNode.select(".gridU resample").set("width", n)
                        }
                    }, {
                        key: "handleGridV",
                        value: function(e, t) {
                            var n = t.gridV;
                            Fe(n), e.groupNode.select(".gridV resample").set("height", n)
                        }
                    }, {
                        key: "handleUSamples",
                        value: function(e, t, r) {
                            var a = e.groupNode,
                                i = t.uSamples;
                            Fe(i);
                            var o = a.select("area"),
                                c = a.select(".colors");
                            null === o.get("width") ? (o.set("width", i), c.set("width", i)) : n.rerender(e, t, r)
                        }
                    }, {
                        key: "handleVSamples",
                        value: function(e, t, r) {
                            var a = e.groupNode,
                                i = t.vSamples;
                            Fe(i);
                            var o = a.select("area"),
                                c = a.select(".colors");
                            null === o.get("height") ? (o.set("height", i), c.set("height", i)) : n.rerender(e, t, r)
                        }
                    }, {
                        key: "updateColorExpr",
                        value: function(e, t, n, r) {
                            var a = t.color,
                                i = t.colorExpr,
                                o = t.uSamples,
                                c = t.vSamples,
                                s = e.root,
                                l = e.groupNode.select(".colors"),
                                u = s.select("cartesian")[0],
                                d = Ke[a].func,
                                p = lt.copyCartesianRange(u),
                                h = Object(oe.a)(p, 3),
                                f = Object(oe.a)(h[0], 2),
                                m = f[0],
                                v = f[1],
                                b = Object(oe.a)(h[1], 2),
                                y = b[0],
                                g = b[1],
                                O = Object(oe.a)(h[2], 2),
                                E = O[0],
                                j = O[1];
                            l.set({
                                expr: function(e, t, a) {
                                    var o = n(t, a),
                                        c = Object(oe.a)(o, 2),
                                        s = c[0],
                                        l = c[1],
                                        u = r(s, l),
                                        p = Object(oe.a)(u, 3),
                                        h = p[0],
                                        f = p[1],
                                        b = p[2],
                                        O = ot(h, m, v),
                                        x = ot(f, y, g),
                                        C = ot(b, E, j),
                                        w = i(O, x, C, s, l);
                                    e.apply(void 0, Object(ce.a)(d(w)))
                                },
                                width: o,
                                height: c
                            })
                        }
                    }, {
                        key: "isRangeValid",
                        value: function(e, t) {
                            return !(!Ue(e, 2) || !Ue(t, 2)) || (!(!Ge(e, 1, 2) || !Ue(t, 2)) || !(!Ue(e, 2) || !Ge(t, 1, 2)))
                        }
                    }, {
                        key: "isExprValid",
                        value: function(e) {
                            return Ge(e, 2, 3)
                        }
                    }, {
                        key: "validateExpr",
                        value: function(e) {
                            He(e, 2, 3)
                        }
                    }, {
                        key: "transformExpr",
                        value: function(e) {
                            return e
                        }
                    }, {
                        key: "getTrueParamsFunc",
                        value: function(e, t) {
                            if (Array.isArray(e) && Array.isArray(t)) return function(n, r) {
                                var a = e,
                                    i = t;
                                return [a[0] + n * (a[1] - a[0]), i[0] + r * (i[1] - i[0])]
                            };
                            if (Array.isArray(e) && "function" === typeof t) return function(n, r) {
                                var a = e,
                                    i = a[0] + n * (a[1] - a[0]),
                                    o = t(i);
                                return [i, o[0] + r * (o[1] - o[0])]
                            };
                            if (Array.isArray(t) && "function" === typeof e) return function(n, r) {
                                var a = t,
                                    i = a[0] + r * (a[1] - a[0]),
                                    o = e(i);
                                return [o[0] + n * (o[1] - o[0]), i]
                            };
                            throw new Error("Expected rangeV and rangeU to be (1) array, array (2)\n                       array, function, or (3) function, array. Instead, found\n                       ".concat(typeof e, " and ").concat(typeof t))
                        }
                    }, {
                        key: "updateExpr",
                        value: function(e, t, n) {
                            e.set("expr", (function(e, r, a) {
                                var i = t(r, a),
                                    o = Object(oe.a)(i, 2),
                                    c = o[0],
                                    s = o[1],
                                    l = n(c, s),
                                    u = Object(oe.a)(l, 3);
                                e(u[0], u[1], u[2])
                            }))
                        }
                    }, {
                        key: "renderParametricSurface",
                        value: function(e) {
                            var t = e.area({
                                    classes: ["data"],
                                    channels: 3,
                                    axes: [1, 2],
                                    live: !1,
                                    rangeX: [0, 1],
                                    rangeY: [0, 1]
                                }),
                                n = e.area({
                                    classes: ["colors"],
                                    channels: 4,
                                    items: 1,
                                    axes: [1, 2],
                                    live: !1,
                                    rangeX: [0, 1],
                                    rangeY: [0, 1],
                                    width: 2,
                                    height: 2
                                });
                            return e.surface({
                                points: t,
                                colors: n,
                                color: "#FFFFFF"
                            }).group({
                                classes: ["gridV"]
                            }).resample({
                                source: t
                            }).line({
                                zBias: 5
                            }).end().group({
                                classes: "gridU"
                            }).resample({
                                source: t
                            }).transpose({
                                order: "yx"
                            }).line({
                                zBias: 5
                            }).end(), e
                        }
                    }, {
                        key: "rerender",
                        value: function(e, t, r) {
                            var a = e.groupNode,
                                i = e.root;
                            a.select("area, surface, .gridU, .gridV").remove(), n.renderParametricSurface(a);
                            var o = {
                                groupNode: a,
                                root: i,
                                dataNodes: a.select("area.data"),
                                renderNodes: a.select("surface")
                            };
                            Object.keys(r).forEach((function(e) {
                                r[e](o, t, r)
                            }))
                        }
                    }]), n
                }(Qe),
                vt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, null, [{
                        key: "isExprValid",
                        value: function(e) {
                            return Ge(e, 2, 1)
                        }
                    }, {
                        key: "validateExpr",
                        value: function(e) {
                            He(e, 2, 1)
                        }
                    }, {
                        key: "transformExpr",
                        value: function(e) {
                            return function(t, n) {
                                return [t, n, e(t, n)]
                            }
                        }
                    }]), n
                }(mt),
                bt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, null, [{
                        key: "isExprValid",
                        value: function(e) {
                            return Ge(e, 2, 1)
                        }
                    }, {
                        key: "validateExpr",
                        value: function(e) {
                            He(e, 2, 1)
                        }
                    }, {
                        key: "transformExpr",
                        value: function(e) {
                            return function(t, n) {
                                return [t * Math.cos(n), t * Math.sin(n), e(t, n)]
                            }
                        }
                    }]), n
                }(mt),
                yt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["array"], e.renderNodeNames = ["strip"], e.handlers = Object(o.a)(Object(o.a)({}, tt), {}, {
                            shaded: et("shaded"),
                            lhs: n.handleLHS,
                            rhs: n.handleRHS,
                            rangeX: n.makeHandleRange("rangeX"),
                            rangeY: n.makeHandleRange("rangeY"),
                            rangeZ: n.makeHandleRange("rangeZ"),
                            samples: n.handleSamples
                        }), e.mathboxRender = function(e) {
                            var t = e.group();
                            return t.array({
                                channels: 3,
                                items: 3,
                                width: 0,
                                live: !1
                            }).strip(), t
                        }, e
                    }
                    return Object(f.a)(n, null, [{
                        key: "handleLHS",
                        value: function(e, t) {
                            He(t.lhs, 3, 1), n.updateData(e, t)
                        }
                    }, {
                        key: "handleRHS",
                        value: function(e, t) {
                            He(t.rhs, 3, 1), n.updateData(e, t)
                        }
                    }, {
                        key: "makeHandleRange",
                        value: function(e) {
                            return function(t, r) {
                                Be(r[e], 2), n.updateData(t, r)
                            }
                        }
                    }, {
                        key: "handleSamples",
                        value: function(e, t) {
                            Fe(t.samples), n.updateData(e, t)
                        }
                    }, {
                        key: "canUpdate",
                        value: function(e) {
                            var t = e.lhs,
                                n = e.rhs,
                                r = e.rangeX,
                                a = e.rangeY,
                                i = e.rangeZ,
                                o = e.samples;
                            return Ue(r, 2) && Ue(a, 2) && Ue(i, 2) && Ge(t, 3, 1) && Ge(n, 3, 1) && Le(o)
                        }
                    }, {
                        key: "updateData",
                        value: function(e, t) {
                            if (n.canUpdate(t)) {
                                var r = t.lhs,
                                    a = t.rhs,
                                    i = t.rangeX,
                                    o = t.rangeY,
                                    c = t.rangeZ,
                                    s = t.samples,
                                    l = e.dataNodes,
                                    u = function(e, t, n, r, a, i, o) {
                                        for (var c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, s = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 128, l = (t - e) / s, u = (r - n) / s, d = (i - a) / s, p = [], h = e; h < t; h += l)
                                            for (var f = n; f < r; f += u)
                                                for (var m = a; m < i; m += d)
                                                    for (var v = new Je(h, f, m, l, u, d, o, c), b = Ye[v.getIndex()], y = 0; y < b.length; y++) {
                                                        var g = b[y];
                                                        p.push([v.getEdgePoint(g[0]), v.getEdgePoint(g[1]), v.getEdgePoint(g[2])])
                                                    }
                                        return p
                                    }(i[0], i[1], o[0], o[1], c[0], c[1], (function(e, t, n) {
                                        return r(e, t, n) - a(e, t, n)
                                    }), 0, s),
                                    d = u.length;
                                if (d > 5400) throw new Error("Too many data points generated. Please decrease sample size.");
                                l.set({
                                    data: u,
                                    width: d
                                })
                            }
                        }
                    }]), n
                }(Qe),
                gt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).dataNodeNames = ["volume"], e.renderNodeNames = ["vector"], e.handlers = Object(o.a)(Object(o.a)(Object(o.a)({}, tt), nt), {}, {
                            rangeX: n.makeHandleRange("rangeX"),
                            rangeY: n.makeHandleRange("rangeY"),
                            rangeZ: n.makeHandleRange("rangeZ"),
                            samples: n.handleSamples,
                            scale: n.handleScale,
                            expr: n.handleExpr
                        }), e.mathboxRender = function(e) {
                            var t = e.group({
                                classes: ["vector-field"]
                            });
                            return n.renderVectorField(t)
                        }, e
                    }
                    return Object(f.a)(n, null, [{
                        key: "makeHandleRange",
                        value: function(e) {
                            return function(t, r) {
                                Be(r[e], 2), n.updateRangeAndExpr(t, r)
                            }
                        }
                    }, {
                        key: "handleExpr",
                        value: function(e, t) {
                            He(t.expr, 3, 3), n.updateRangeAndExpr(e, t)
                        }
                    }, {
                        key: "handleScale",
                        value: function(e, t) {
                            Le(t.scale), n.updateRangeAndExpr(e, t)
                        }
                    }, {
                        key: "canUpdateRangeAndExpr",
                        value: function(e, t, n, r, a, i) {
                            return Ue(e, 2) && Ue(t, 2) && Ue(n, 2) && Ue(a, 3) && Le(i) && Ge(r, 3, 3)
                        }
                    }, {
                        key: "updateRangeAndExpr",
                        value: function(e, t) {
                            var r = t.rangeX,
                                a = t.rangeY,
                                i = t.rangeZ,
                                o = t.expr,
                                c = t.samples,
                                s = t.scale,
                                l = e.dataNodes;
                            n.canUpdateRangeAndExpr(r, a, i, o, c, s) && l.set("expr", (function(e, t, n, l) {
                                var u = 1 === c[0] ? .5 : t,
                                    d = 1 === c[1] ? .5 : n,
                                    p = 1 === c[2] ? .5 : l,
                                    h = r[0] + u * (r[1] - r[0]),
                                    f = a[0] + d * (a[1] - a[0]),
                                    m = i[0] + p * (i[1] - i[0]);
                                e(h, f, m);
                                var v = o(h, f, m),
                                    b = Object(oe.a)(v, 3),
                                    y = b[0],
                                    g = b[1],
                                    O = b[2];
                                e(h + s * y, f + s * g, m + s * O)
                            }))
                        }
                    }, {
                        key: "renderVectorField",
                        value: function(e) {
                            return e.volume({
                                items: 2,
                                channels: 3,
                                rangeX: [0, 1],
                                rangeY: [0, 1],
                                rangeZ: [0, 1]
                            }).vector(), e
                        }
                    }, {
                        key: "rerender",
                        value: function(e, t, r) {
                            var a = e.groupNode,
                                i = e.root;
                            a.select("volume, vector").remove(), n.renderVectorField(a);
                            var o = {
                                groupNode: a,
                                root: i,
                                dataNodes: a.select("volume"),
                                renderNodes: a.select("vector")
                            };
                            Object.keys(r).forEach((function(e) {
                                r[e](o, t, r)
                            }))
                        }
                    }, {
                        key: "handleSamples",
                        value: function(e, t, r) {
                            var a = e.dataNodes,
                                i = t.samples;
                            Be(i, 3), null === a.get("width") ? a.set({
                                width: i[0],
                                height: i[1],
                                depth: i[2]
                            }) : n.rerender(e, t, r)
                        }
                    }]), n
                }(Qe);

            function Ot(e) {
                return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
            }

            function Et(e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }

            function jt(e, t, n) {
                return e.replace(new RegExp(Et(t), "g"), n)
            }

            function xt(e, t) {
                var n = e[t],
                    r = {
                        "[": "]",
                        "<": ">",
                        "(": ")",
                        "{": "}"
                    } [n];
                if (void 0 === r) throw Error("".concat(e, " does not contain an opening brace at position ").concat(t, "."));
                for (var a = 1, i = t + 1; i < e.length; i++)
                    if (e[i] === n ? a += 1 : e[i] === r && (a += -1), 0 === a) return i;
                throw Error("".concat(e, " has a brace that opens at position ").concat(t, " but does not close."))
            }
            var Ct = function() {
                    function e(t) {
                        var n = t.type,
                            r = t.description,
                            a = t.metadata,
                            i = t.uiComponent,
                            o = t.mathboxComponent,
                            c = t.support,
                            s = void 0 === c ? "full" : c;
                        Object(h.a)(this, e), this.reducer = "mathGraphics", this.type = n, this.support = s, this.uiComponent = i, this.mathboxComponent = o, this.defaultSettings = e.getDefaultSettings(n, a, r), this.computedProps = Object.keys(a).filter((function(e) {
                            return "math" === a[e].inputType
                        }))
                    }
                    return Object(f.a)(e, null, [{
                        key: "getDefaultSettings",
                        value: function(e, t, n) {
                            var r = {
                                type: e,
                                description: n || Ot(e),
                                useCalculatedVisibility: !1
                            };
                            return Object.keys(t).reduce((function(e, n) {
                                return e[n] = t[n].defaultValue, e
                            }), r)
                        }
                    }]), e
                }(),
                wt = n(373),
                kt = function e(t, n) {
                    var r = (e.canvas || (e.canvas = document.createElement("canvas"))).getContext("2d");
                    r.font = n;
                    var a = r.measureText(t);
                    return Math.floor(a.width) + 1
                };

            function Pt() {
                var e = Object(y.a)(["\n  width: ", ";\n  max-width: ", ";\n  min-height:24px;\n  resize: none;\n  border-top:none;\n  border-left: none;\n  border-right:none;\n  border-radius: 0px;\n  padding-bottom: 1px; /*MO border was appearing too small. This fixed it. I do not understand ... */\n  padding-top: 0px;\n  padding-right:2px;\n  padding-left:2px;\n  border-bottom: 1px solid ", ";\n  color: ", ";\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid ", ";\n  };\n  overflow:hidden;\n"]);
                return Pt = function() {
                    return e
                }, e
            }
            window.getTextWidth = kt;
            var Tt = Object(g.c)(wt.a)(Pt(), (function(e) {
                    return e.width
                }), (function(e) {
                    return e.maxwidth ? "".concat(e.maxwidth, "px") : "100%"
                }), (function(e) {
                    return e.theme.gray[5]
                }), (function(e) {
                    return e.theme.gray[6]
                }), (function(e) {
                    return e.theme.primary[4]
                })),
                St = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).onChange = function(t) {
                            var n = t.currentTarget.value;
                            e.props.onChange(n)
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "getWidthFromText",
                        value: function(e) {
                            var t = kt(e + " ", "14px sans-serif");
                            return "".concat(1.1 * t + 5 + 4, "px")
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getWidthFromText(this.props.value);
                            return r.createElement(Tt, {
                                rows: 1,
                                width: e,
                                maxwidth: this.props.maxwidth,
                                value: this.props.value,
                                onChange: this.onChange,
                                style: this.props.style,
                                className: this.props.className
                            })
                        }
                    }]), n
                }(r.PureComponent);

            function At() {
                var e = Object(y.a)(["\n  padding:0px;\n  margin-right: -3px;\n  margin-top: -6px;\n  min-width:25px;\n  max-width:25px;\n  height:25px;\n  position:absolute;\n  right:0;\n  top:0;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:133%;\n  color: ", ";\n"]);
                return At = function() {
                    return e
                }, e
            }
            var Rt = Object(g.c)(I)(At(), (function(e) {
                return e.theme.gray[5]
            }));

            function It(e) {
                return a.a.createElement(Rt, e, a.a.createElement(O.a, {
                    type: "close"
                }))
            }
            var Vt = {
                    borderRadius: "4px",
                    transitionDuration: "300ms",
                    transitionDurationMS: 300,
                    transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1);",
                    gray: ["#ffffff", "#fafafa", "#f5f5f5", "#e8e8e8", "#d9d9d9", "#bfbfbf", "#8c8c8c", "#595959", "#262626", "#000000"],
                    primary: ["#e6f7ff", "#bae7ff", "#91d5ff", "#69c0ff", "#40a9ff", "#1890ff", "#096dd9", "#0050b3", "#003a8c", "#002766"]
                },
                Dt = Vt;

            function Nt() {
                var e = Object(y.a)(["\n  position:relative;\n  max-width:75vw;\n"]);
                return Nt = function() {
                    return e
                }, e
            }

            function _t() {
                var e = Object(y.a)(["\n    overflow: hidden;\n  "]);
                return _t = function() {
                    return e
                }, e
            }

            function Mt() {
                var e = Object(y.a)(["\n  display:flex;\n  flex-direction:column;\n  width: calc(100% - ", ");\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 6px;\n  padding-right: 6px;\n  ", ";\n"]);
                return Mt = function() {
                    return e
                }, e
            }

            function Lt() {
                var e = Object(y.a)(["\n  width:1px;\n  height:100%;\n  background-color: ", ";\n  display:flex;\n  flex-direction:column;\n  justify-content: space-around;\n  align-items: center;\n"]);
                return Lt = function() {
                    return e
                }, e
            }

            function Ft() {
                var e = Object(y.a)(["\n    background-color: ", "\n  "]);
                return Ft = function() {
                    return e
                }, e
            }

            function zt() {
                var e = Object(y.a)(["\n  margin-bottom:-1px; /*Compensates for margin-bottom:-1px in OuterContainer*/\n  padding-top: 2px;\n  padding-bottom: 2px;\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  transition-property: background-color;\n  /* This makes fixed-width */\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  ", "\n"]);
                return zt = function() {
                    return e
                }, e
            }

            function Ut() {
                var e = Object(y.a)(["\n    transform: scale(0);\n    transform-origin: top left;\n  "]);
                return Ut = function() {
                    return e
                }, e
            }

            function Bt() {
                var e = Object(y.a)(["\n  display: inline-flex;\n  vertical-align: top; /*Removes extra space below inline element's baseline*/\n  min-width:100%;\n  max-width: ", ";\n  background-color: white;\n  margin-bottom: -2px;\n  border: 1px solid ", ";\n  transition-duration: ", ";\n  transition-timing-function: ", ";\n  transition-property: all;\n  ", ";\n  /*\n  Note:\n  - above, margin-bottom: -1px prevents double-thick borders between (Folders\n    are also mathObjects)\n  - But this causes very last MathObject in very last folder to lose its border.\n  - This is taken care of by border on SortableListOfFolders\n   */\n"]);
                return Bt = function() {
                    return e
                }, e
            }
            var Ht = g.c.span(Bt(), (function(e) {
                    return e.isActive ? "auto" : "100%"
                }), (function(e) {
                    return e.theme.gray[5]
                }), (function(e) {
                    return e.theme.transitionDuration
                }), (function(e) {
                    return e.theme.transitionTimingFunction
                }), (function(e) {
                    return e.isDeleting && Object(g.b)(Ut())
                })),
                Gt = g.c.div(zt(), "40px", (function(e) {
                    return e.theme.transitionDuration
                }), (function(e) {
                    return e.theme.transitionTimingFunction
                }), (function(e) {
                    return e.isActive && Object(g.b)(Ft(), (function(e) {
                        return e.theme.primary[1]
                    }))
                })),
                Xt = g.c.div(Lt(), (function(e) {
                    return e.theme.gray[5]
                })),
                Zt = g.c.div(Mt(), "40px", (function(e) {
                    return !e.isActive && Object(g.b)(_t())
                })),
                Wt = g.c.div(Nt()),
                Yt = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).state = {
                            isDeleting: !1,
                            parentMaxWidth: null
                        }, a.onDelete = function() {
                            var e = a.props,
                                t = e.id,
                                n = e.type,
                                r = e.parentId,
                                i = e.positionInParent;
                            a.props.setActiveObject(null), a.setState({
                                isDeleting: !0
                            }), setTimeout((function() {
                                return a.props.deleteMathObject(t, n, r, i)
                            }), Vt.transitionDurationMS)
                        }, a.onFocus = function() {
                            a.props.setActiveObject(a.props.id)
                        }, a.setProperty = a.setProperty.bind(Object(m.a)(a)), a.onEditDescription = a.onEditDescription.bind(Object(m.a)(a)), a.containerRef = Object(r.createRef)(), a
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                parentMaxWidth: this.getParentMaxWidth()
                            })
                        }
                    }, {
                        key: "getParentMaxWidth",
                        value: function() {
                            var e = this.containerRef.current;
                            return e ? e.parentElement.offsetWidth : void 0
                        }
                    }, {
                        key: "setProperty",
                        value: function(e, t) {
                            var n = this.props,
                                r = n.id,
                                a = n.type;
                            this.props.setProperty(r, a, e, t)
                        }
                    }, {
                        key: "onEditDescription",
                        value: function(e) {
                            this.setProperty("description", e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isActive,
                                n = e.sidePanelContent,
                                i = e.description,
                                o = e.children,
                                c = e.isDeleteable,
                                s = e.isFolder;
                            return a.a.createElement(r.Fragment, null, a.a.createElement(Ht, {
                                ref: this.containerRef,
                                onFocus: this.onFocus,
                                isActive: t,
                                isFolder: s,
                                isDeleting: this.state.isDeleting
                            }, a.a.createElement(Gt, {
                                isActive: t
                            }, s ? n : a.a.createElement(Xt, null, " ", n, " ")), a.a.createElement(Zt, {
                                isActive: t
                            }, a.a.createElement(Wt, null, a.a.createElement(St, {
                                maxwidth: this.state.parentMaxWidth - 70,
                                value: i,
                                onChange: this.onEditDescription,
                                isFolder: s
                            }), a.a.createElement(It, {
                                onClick: this.onDelete,
                                disabled: !c
                            })), !s && o)), s && o)
                        }
                    }]), n
                }(r.PureComponent);
            Yt.defaultProps = {
                isFolder: !1,
                showAncestry: !0,
                sidePanelContent: null
            };
            var qt = n(22);

            function Jt() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return {
                    type: "SET_ACTIVE_OBJECT",
                    payload: {
                        id: e
                    }
                }
            }

            function $t(e, t) {
                var n = function(e, t) {
                    var n = new Set;
                    return Object.keys(e).reduce((function(n, r) {
                        return e[r].includes(t) && n.add(r), n
                    }), n)
                }(e, t);
                if (n.size < 1) throw Error("".concat(t, " does not have parent"));
                if (n.size > 1) throw Error("".concat(t, " has multiple parents"));
                return Array.from(n)[0]
            }
            var Kt = "FOLDER";
            var Qt = {
                    setActiveObject: Jt,
                    deleteMathObject: function(e, t, n, r) {
                        return {
                            type: "DELETE_MATH_OBJECT",
                            name: t,
                            payload: {
                                parentId: n,
                                id: e,
                                positionInParent: r
                            }
                        }
                    },
                    setProperty: re
                },
                en = Object(qt.b)((function(e, t) {
                    var n = t.id,
                        r = e.sortableTree,
                        a = function(e, t) {
                            for (var n, r = 0, a = 0, i = [e.mathGraphics, e.mathSymbols, e.folders]; a < i.length; a++) {
                                var o = i[a];
                                o[t] && (r += 1, n = o[t])
                            }
                            if (1 !== r) throw Error("Expected ".concat(t, " to be present in exactly 1 of [mathGraphics, mathSymbols, folders] but it was present in ").concat(r));
                            return n
                        }(e, n),
                        i = function(e, t) {
                            var n = e.id,
                                r = e.type,
                                a = e.isDeleteable;
                            return void 0 !== a ? a : r !== Kt || 0 === t[n].length && 1 !== t.root.length
                        }(t, r),
                        o = $t(r, n);
                    return {
                        isActive: e.activeObject === n,
                        parentId: o,
                        isDeleteable: i,
                        positionInParent: r[o].indexOf(n),
                        description: a.description
                    }
                }), Qt)(Yt);

            function tn(e) {
                return {
                    inputType: "text",
                    defaultValue: e,
                    isPrimary: !0
                }
            }
            var nn = {
                    color: {
                        inputType: "text",
                        defaultValue: "#3090FF",
                        isPrimary: !0
                    },
                    visible: {
                        inputType: "boolean",
                        defaultValue: !0,
                        isPrimary: !0
                    },
                    opacity: {
                        inputType: "math",
                        defaultValue: "1",
                        label: "Прозрачность"
                    },
                    zIndex: {
                        inputType: "math",
                        defaultValue: "0",
                        label: "z-индекс"
                    },
                    zBias: {
                        inputType: "math",
                        defaultValue: "0",
                        label: "z-смещение"
                    },
                    calculatedVisibility: {
                        inputType: "math",
                        defaultValue: "",
                        allowEmpty: !0,
                        label: "Расчетная видимость"
                    }
                },
                rn = {
                    label: {
                        inputType: "text",
                        defaultValue: ""
                    },
                    labelVisible: {
                        inputType: "boolean",
                        defaultValue: !1,
                        label: "Видимость"
                    }
                },
                an = Object(o.a)(Object(o.a)(Object(o.a)({}, nn), rn), {
                    color: {
                        inputType: "text",
                        defaultValue: "#808080",
                        isPrimary: !0
                    },
                    min: {
                        inputType: "math",
                        defaultValue: "-5",
                        isPrimary: !0
                    },
                    max: {
                        inputType: "math",
                        defaultValue: "+5",
                        isPrimary: !0
                    },
                    axis: {
                        inputType: "text",
                        defaultValue: "x",
                        isPrimary: !0
                    },
                    scale: {
                        inputType: "math",
                        defaultValue: "1",
                        isPrimary: !0
                    },
                    labelVisible: {
                        inputType: "boolean",
                        defaultValue: !0,
                        label: "Видимость"
                    },
                    ticksVisible: {
                        inputType: "boolean",
                        defaultValue: !0,
                        label: "Видимость отметок"
                    },
                    size: {
                        inputType: "math",
                        defaultValue: "2",
                        label: "размер"
                    },
                    width: {
                        inputType: "math",
                        defaultValue: "1"
                    }
                }),
                on = Object(o.a)(Object(o.a)({}, nn), {
                    color: {
                        inputType: "text",
                        defaultValue: "#808080",
                        isPrimary: !0
                    },
                    width: {
                        inputType: "math",
                        defaultValue: "1/2",
                        label: "Ширина"
                    },
                    divisions: {
                        inputType: "math",
                        defaultValue: "\\left[10,\\ 10\\right]",
                        label: "Разделения"
                    },
                    snap: {
                        inputType: "boolean",
                        defaultValue: !1
                    }
                }),
                cn = {
                    description: tn("Точка"),
                    coords: {
                        inputType: "math",
                        defaultValue: "\\left[0,0,0\\right]",
                        isPrimary: !0
                    },
                    size: {
                        inputType: "math",
                        defaultValue: "16",
                        label: "размер"
                    }
                },
                sn = Object(o.a)(Object(o.a)(Object(o.a)({}, nn), rn), cn),
                ln = {
                    size: {
                        inputType: "math",
                        defaultValue: "6"
                    },
                    width: {
                        inputType: "math",
                        defaultValue: "4"
                    },
                    start: {
                        inputType: "boolean",
                        defaultValue: !1
                    },
                    end: {
                        inputType: "boolean",
                        defaultValue: !1
                    }
                },
                un = {
                    description: tn("Линия"),
                    coords: {
                        inputType: "math",
                        defaultValue: "\\left[\\left[1,1,1\\right], \\left[-1,1,-1\\right]\\right]",
                        isPrimary: !0
                    }
                },
                dn = Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({}, nn), rn), ln), un),
                pn = Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({}, nn), rn), ln), {
                    components: {
                        inputType: "math",
                        defaultValue: "\\left[3,2,1\\right]",
                        isPrimary: !0
                    },
                    tail: {
                        inputType: "math",
                        defaultValue: "\\left[0,0,0\\right]"
                    },
                    end: {
                        inputType: "boolean",
                        defaultValue: !0
                    }
                }),
                hn = Object(o.a)(Object(o.a)(Object(o.a)({}, nn), ln), {
                    expr: {
                        inputType: "math",
                        defaultValue: "_f(t)=\\left[\\cos\\left(t\\right),\\ \\sin\\left(t\\right),\\ t\\right]",
                        isPrimary: !0
                    },
                    range: {
                        inputType: "math",
                        defaultValue: "\\left[-2\\pi,\\ 2\\pi\\right]",
                        isPrimary: !0
                    },
                    samples: {
                        inputType: "math",
                        defaultValue: "128"
                    }
                }),
                fn = {
                    shaded: {
                        inputType: "boolean",
                        defaultValue: !0,
                        label: "Затемнения"
                    },
                    opacity: {
                        inputType: "math",
                        defaultValue: "0.75",
                        label: "Прозрачность"
                    }
                };

            function mn(e, t) {
                return {
                    uSamples: {
                        inputType: "math",
                        defaultValue: "64",
                        label: "".concat(e, " модель")
                    },
                    vSamples: {
                        inputType: "math",
                        defaultValue: "64",
                        label: "".concat(t, " модель")
                    },
                    gridU: {
                        inputType: "math",
                        defaultValue: "8",
                        label: "".concat(e, " линии сетки")
                    },
                    gridV: {
                        inputType: "math",
                        defaultValue: "8",
                        label: "".concat(t, " линии сетки")
                    }
                }
            }
            var vn = Object(o.a)({
                    expr: {
                        inputType: "math",
                        defaultValue: "_f(u,v)=\\left[v\\cdot\\cos\\left(u\\right),v\\cdot\\sin\\left(u\\right),v\\right]",
                        isPrimary: !0
                    },
                    rangeU: {
                        inputType: "math",
                        defaultValue: "\\left[-\\pi,\\ \\pi\\right]",
                        isPrimary: !0
                    },
                    rangeV: {
                        inputType: "math",
                        defaultValue: "\\left[-3, 3\\right]",
                        isPrimary: !0
                    },
                    colorExpr: {
                        isPrimary: !0,
                        inputType: "math",
                        defaultValue: "_f(X, Y, Z, u, v)=mod(Z, 1)"
                    },
                    gridOpacity: {
                        inputType: "math",
                        defaultValue: "0.5",
                        label: "Прозрачность сетки"
                    },
                    gridWidth: {
                        inputType: "math",
                        defaultValue: "2",
                        label: "Ширина сетки"
                    }
                }, mn("u", "v")),
                bn = Object(o.a)(Object(o.a)(Object(o.a)({}, nn), fn), vn),
                yn = Object(o.a)(Object(o.a)(Object(o.a)({}, bn), mn("x", "y")), {}, {
                    expr: {
                        inputType: "math",
                        defaultValue: "_f(x,y)=x^2-y^2",
                        isPrimary: !0
                    },
                    rangeU: {
                        inputType: "math",
                        defaultValue: "\\left[-2,\\ 2\\right]",
                        isPrimary: !0
                    },
                    rangeV: {
                        inputType: "math",
                        defaultValue: "\\left[-2,\\ 2\\right]",
                        isPrimary: !0
                    },
                    colorExpr: {
                        isPrimary: !0,
                        inputType: "math",
                        defaultValue: "_f(X, Y, Z, x, y)=mod(Z, 1)"
                    }
                }),
                gn = Object(o.a)(Object(o.a)(Object(o.a)({}, bn), mn("r", "\u03b8")), {}, {
                    expr: {
                        inputType: "math",
                        defaultValue: "_f(r,\\theta)=\\frac{1}{4}r^2\\cdot\\cos\\left(3\\theta\\right)",
                        isPrimary: !0
                    },
                    rangeU: {
                        inputType: "math",
                        defaultValue: "\\left[0,\\ 3\\right]",
                        isPrimary: !0
                    },
                    rangeV: {
                        inputType: "math",
                        defaultValue: "\\left[-\\pi,\\ \\pi\\right]",
                        isPrimary: !0
                    },
                    colorExpr: {
                        isPrimary: !0,
                        inputType: "math",
                        defaultValue: "_f(X, Y, Z, r, \\theta)=mod(Z, 1)"
                    }
                }),
                On = {
                    rangeX: {
                        inputType: "math",
                        defaultValue: "\\left[-5,\\ 5\\right]",
                        isPrimary: !0
                    },
                    rangeY: {
                        inputType: "math",
                        defaultValue: "\\left[-5,\\ 5\\right]",
                        isPrimary: !0
                    },
                    rangeZ: {
                        inputType: "math",
                        defaultValue: "\\left[-5,\\ 5\\right]",
                        isPrimary: !0
                    }
                },
                En = Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({}, nn), fn), On), {
                    lhs: {
                        inputType: "math",
                        defaultValue: "_f(x,y,z)=x^2+y^2",
                        isPrimary: !0
                    },
                    rhs: {
                        inputType: "math",
                        defaultValue: "_f(x,y,z)=z^2+1",
                        isPrimary: !0
                    },
                    samples: {
                        inputType: "math",
                        defaultValue: "20"
                    },
                    opacity: {
                        inputType: "math",
                        defaultValue: "1"
                    }
                }),
                jn = Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({}, nn), ln), On), {
                    expr: {
                        inputType: "math",
                        defaultValue: "_f(x,y,z)=\\frac{[y,\\ -x,\\ 0]}{\\sqrt{x^2+y^2}}",
                        isPrimary: !0
                    },
                    samples: {
                        inputType: "math",
                        defaultValue: "[10, 10, 5]"
                    },
                    scale: {
                        inputType: "math",
                        defaultValue: "1"
                    },
                    width: {
                        inputType: "math",
                        defaultValue: "2"
                    },
                    end: {
                        inputType: "boolean",
                        defaultValue: !0
                    }
                }),
                xn = {
                    isOrthographic: {
                        inputType: "boolean",
                        defaultValue: !1,
                        isPrimary: !0
                    },
                    isPanEnabled: {
                        inputType: "boolean",
                        defaultValue: !1,
                        isPrimary: !0
                    },
                    isZoomEnabled: {
                        inputType: "boolean",
                        defaultValue: !0,
                        isPrimary: !0
                    },
                    isRotateEnabled: {
                        inputType: "boolean",
                        defaultValue: !0,
                        isPrimary: !0
                    },
                    relativePosition: {
                        inputType: "numericArray",
                        defaultValue: [.5, -2, .5],
                        isPrimary: !0
                    },
                    relativeLookAt: {
                        inputType: "numericArray",
                        defaultValue: [0, 0, 0],
                        isPrimary: !0
                    },
                    computedPosition: {
                        inputType: "math",
                        defaultValue: "\\left[-6, -4, 2\\right]",
                        isPrimary: !0
                    },
                    computedLookAt: {
                        inputType: "math",
                        defaultValue: "\\left[0, 0, 0\\right]",
                        isPrimary: !0
                    },
                    useComputed: {
                        inputType: "boolean",
                        defaultValue: !1,
                        isPrimary: !0
                    }
                },
                Cn = window.MathQuill.getInterface(2),
                wn = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).state = {
                            isFocused: !1
                        }, e.onEdit = function(t) {
                            var n = e.props.onEdit;
                            n && !e.preventOnEdit && n(t)
                        }, e.onFocus = function() {
                            e.setState({
                                isFocused: !0
                            }), e.props.onFocus && e.props.onFocus()
                        }, e.onBlur = function() {
                            e.setState({
                                isFocused: !1
                            }), e.props.onBlur && e.props.onBlur()
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "getConfig",
                        value: function(e) {
                            var t = n.configKeys.filter((function(t) {
                                return e[t]
                            })).reduce((function(t, n) {
                                return t[n] = e[n], t
                            }), {});
                            return t.handlers = {}, t.handlers.edit = this.onEdit, Object.keys(n.handlerKeys).filter((function(t) {
                                return e[t]
                            })).reduce((function(t, r) {
                                var a = n.handlerKeys[r];
                                return t.handlers[a] = e[r], t
                            }), t)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.getConfig(this.props);
                            this.mathField = Cn.MathField(this.span, e), this.setLatex(this.props.latex)
                        }
                    }, {
                        key: "setLatex",
                        value: function(e) {
                            e !== this.mathField.latex() && (this.preventOnEdit = !0, this.mathField.latex(this.props.latex), this.preventOnEdit = !1)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.setLatex(this.props.latex)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = z()(this.props.className, {
                                    "mq-editable-field": !0,
                                    "mq-math-mode": !0,
                                    "mq-focused": this.state.isFocused
                                });
                            return a.a.createElement("span", {
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                style: this.props.style,
                                className: t,
                                ref: function(t) {
                                    e.span = t
                                }
                            })
                        }
                    }]), n
                }(r.PureComponent);
            wn.configKeys = ["spaceBehavesLikeTab", "leftRightIntoCmdGoes", "restrictMismatchedBrackets", "sumStartsWithNEquals", "supSubsRequireOperand", "charsThatBreakOutOfSupSub", "autoSubscriptNumerals", "autoCommands", "autoOperatorNames", "substituteTextarea"], wn.handlerKeys = {
                onEnter: "enter",
                onMoveOutOf: "moveOutOf",
                onDeleteOutOf: "deleteOutOf",
                onUpOutOf: "upOutOf",
                onSelectOutOf: "selectOutOf",
                onDownOutOf: "downOutOf"
            };
            var kn = function(e) {
                Object(v.a)(n, e);
                var t = Object(b.a)(n);

                function n() {
                    return Object(h.a)(this, n), t.apply(this, arguments)
                }
                return Object(f.a)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.staticMath = Cn.StaticMath(this.span), this.staticMath.latex(this.props.latex)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.props.latex !== this.staticMath.latex() && this.staticMath.latex(this.props.latex)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = z()(this.props.className, {
                                "mq-math-mode": !0
                            });
                        return a.a.createElement("span", {
                            style: this.props.style,
                            className: t,
                            ref: function(t) {
                                e.span = t
                            }
                        })
                    }
                }]), n
            }(r.PureComponent);

            function Pn() {
                var e = Object(y.a)(["\n  &.mq-math-mode {\n    max-width: calc(100% - 30px);\n    font-size: ", ";\n    font-weight:bolder;\n    ", ";\n  }\n"]);
                return Pn = function() {
                    return e
                }, e
            }

            function Tn() {
                var e = Object(y.a)(["\n  &.mq-editable-field.mq-math-mode {\n    flex:1;\n    max-width: 100%;\n    font-size: ", ";\n    font-weight:bolder;\n    ", ";\n    ", ";\n    ", ";\n  }\n"]);
                return Tn = function() {
                    return e
                }, e
            }

            function Sn() {
                var e = Object(y.a)(["\n  align-self:stretch;\n  display: flex;\n  align-items:center;\n  padding:2px;\n"]);
                return Sn = function() {
                    return e
                }, e
            }

            function An() {
                var e = Object(y.a)(["\n  &, &.mq-focused {\n    border-bottom-color: red;\n  }\n"]);
                return An = function() {
                    return e
                }, e
            }

            function Rn() {
                var e = Object(y.a)(["\n  border-top none;\n  border-left: none;\n  border-right: none;\n  margin-bottom:1px;\n  border-bottom-width: 1px;\n  border-bottom-color: ", ";\n  &.mq-focused {\n    box-shadow:none;\n    margin-bottom: 0px;\n    border-bottom-width: 2px;\n    border-bottom-color: ", "\n  };\n"]);
                return Rn = function() {
                    return e
                }, e
            }
            var In = Object(g.b)(Rn(), (function(e) {
                    return e.theme.gray[5]
                }), (function(e) {
                    return e.theme.primary[4]
                })),
                Vn = Object(g.b)(An()),
                Dn = Object(g.b)(Sn()),
                Nn = Object(g.c)(wn)(Tn(), (function(e) {
                    return "small" === e.size ? "100%" : "125%"
                }), In, (function(e) {
                    return e.hasError && Vn
                }), Dn);
            Nn.displayName = "MathQuillStyled";
            var _n = Object(g.c)(kn)(Pn(), (function(e) {
                    return "small" === e.size ? "100%" : "125%"
                }), Dn),
                Mn = n(110),
                Ln = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        Object(h.a)(this, e), this.name = null, this.string = t, this.tree = Ne.parse(this._preprocess(n)), this.name = this.tree.name ? this.tree.name : null, this._postprocess(r), this.dependencies = this._getDependencies(), this.eval = Object(Mn.a)(this._getEval(), this._getSubscopeEquality())
                    }
                    return Object(f.a)(e, [{
                        key: "_preprocess",
                        value: function(e) {
                            return e.reduce((function(e, t) {
                                return t(e)
                            }), this.string)
                        }
                    }, {
                        key: "_postprocess",
                        value: function(e) {
                            var t = this;
                            e.forEach((function(e) {
                                t.tree.traverse((function(t) {
                                    return e(t)
                                }))
                            }))
                        }
                    }, {
                        key: "_getDependencies",
                        value: function() {
                            var t = this,
                                n = new Set,
                                r = "AssignmentNode" === this.tree.type,
                                a = "FunctionAssignmentNode" === this.tree.type,
                                i = e._getRHS(this.tree),
                                o = "FunctionAssignmentNode" === this.tree.type ? this.tree.params : [];
                            return i.traverse((function(e) {
                                if ("SymbolNode" !== e.type && "FunctionNode" !== e.type || o.includes(e.name) || n.add(e.name), (r || a) && [].concat(Object(ce.a)(n), Object(ce.a)(o)).includes(t.tree.name)) throw Error("Cyclic Assignment Error")
                            })), n
                        }
                    }, {
                        key: "_getEval",
                        value: function() {
                            var e = this.tree.compile();
                            return function(t) {
                                var n = Object(o.a)({}, t),
                                    r = e.eval(n);
                                if (r instanceof Ne.type.DenseMatrix) return r.toArray();
                                if (r instanceof Function) {
                                    var a = function() {
                                        var e;
                                        return (e = r.length > 1 && 1 === arguments.length && Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) ? r.apply(void 0, Object(ce.a)(arguments.length <= 0 ? void 0 : arguments[0])) : r.apply(void 0, arguments)) instanceof Ne.type.DenseMatrix ? e.toArray() : e
                                    };
                                    return Object.defineProperty(a, "length", {
                                        value: r.length
                                    }), Object.defineProperty(a, "name", {
                                        value: r.name
                                    }), a
                                }
                                return r
                            }
                        }
                    }, {
                        key: "_getSubscopeEquality",
                        value: function() {
                            var e = this;
                            return function(t, n) {
                                var r, a = Object(je.a)(e.dependencies);
                                try {
                                    for (a.s(); !(r = a.n()).done;) {
                                        var i = r.value;
                                        if (void 0 === t[i] && void 0 === Ne[i]) return !1;
                                        if (t[i] !== n[i]) return !1
                                    }
                                } catch (o) {
                                    a.e(o)
                                } finally {
                                    a.f()
                                }
                                return !0
                            }
                        }
                    }], [{
                        key: "_getRHS",
                        value: function(e) {
                            return "AssignmentNode" === e.type ? e.value : "FunctionAssignmentNode" === e.type ? e.expr : e
                        }
                    }]), e
                }();

            function Fn(e, t) {
                var n, r = Object(je.a)(t);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var a = n.value;
                        e.add(a)
                    }
                } catch (i) {
                    r.e(i)
                } finally {
                    r.f()
                }
                return e
            }
            var zn, Un = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e._defaultPreprocessors,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e._defaultPostprocessors;
                    Object(h.a)(this, e), this._cache = {}, this._preprocessors = [], this._postprocessors = [], this._preprocessors = t, this._postprocessors = n
                }
                return Object(f.a)(e, [{
                    key: "parse",
                    value: function(e) {
                        void 0 === this._cache[e] && this.addToCache(e);
                        var t = this._cache[e],
                            n = t.parsed,
                            r = t.error;
                        if (n) return n;
                        throw r
                    }
                }, {
                    key: "addToCache",
                    value: function(e) {
                        try {
                            this._cache[e] = {
                                parsed: new Ln(e, this._preprocessors, this._postprocessors),
                                error: null
                            }
                        } catch (t) {
                            this._cache[e] = {
                                parsed: null,
                                error: t
                            }
                        }
                    }
                }]), e
            }();
            Un._defaultPreprocessors = [function(e) {
                var t = function e(t) {
                    var n = t.indexOf("_{");
                    if (n < 0) return t;
                    var r = n + "_{".length,
                        a = t.indexOf("}", r),
                        i = t.slice(0, n) + "_" + t.slice(r, a) + t.slice(a + 1);
                    return e(i)
                }(function e(t) {
                    var n = t.indexOf("\\frac"),
                        r = n + "\\frac".length;
                    if (n < 0) return t;
                    var a = xt(t, r),
                        i = t.slice(0, n) + t.slice(r, a + 1) + "/" + t.slice(a + 1);
                    return e(i)
                }(e));
                return [{
                    tex: "\\operatorname{re}",
                    mathjs: "re"
                }, {
                    tex: "\\operatorname{im}",
                    mathjs: "im"
                }, {
                    tex: "\\operatorname{arg}",
                    mathjs: "arg"
                }, {
                    tex: "\\operatorname{conj}",
                    mathjs: "conj"
                }, {
                    tex: "\\operatorname{diff}",
                    mathjs: "diff"
                }, {
                    tex: "\\operatorname{pdiff}",
                    mathjs: "pdiff"
                }, {
                    tex: "\\operatorname{curl}",
                    mathjs: "curl"
                }, {
                    tex: "\\operatorname{div}",
                    mathjs: "div"
                }, {
                    tex: "\\operatorname{norm}",
                    mathjs: "norm"
                }, {
                    tex: "\\operatorname{mod}",
                    mathjs: "mod"
                }, {
                    tex: "\\operatorname{abs}",
                    mathjs: "abs"
                }, {
                    tex: "\\operatorname{unitT}",
                    mathjs: "unitT"
                }, {
                    tex: "\\operatorname{unitN}",
                    mathjs: "unitN"
                }, {
                    tex: "\\operatorname{unitB}",
                    mathjs: "unitB"
                }, {
                    tex: "\\operatorname{arccosh}",
                    mathjs: "arccosh"
                }, {
                    tex: "\\operatorname{arcsinh}",
                    mathjs: "arcsinh"
                }, {
                    tex: "\\operatorname{arctanh}",
                    mathjs: "arctanh"
                }, {
                    tex: "\\cdot",
                    mathjs: " * "
                }, {
                    tex: "\\left",
                    mathjs: ""
                }, {
                    tex: "\\right",
                    mathjs: ""
                }, {
                    tex: "{",
                    mathjs: "("
                }, {
                    tex: "}",
                    mathjs: ")"
                }, {
                    tex: "~",
                    mathjs: " "
                }, {
                    tex: "\\",
                    mathjs: " "
                }].reduce((function(e, t) {
                    return jt(e, t.tex, t.mathjs)
                }), t)
            }, (zn = ["diff", "unitT", "unitN", "unitB"], function(e) {
                return zn.reduce((function(e, t) {
                    return function e(t, n) {
                        var r = (t = function(e, t) {
                            return e.replace(new RegExp("".concat(Et(t), "\\s+\\(")), "".concat(t, "(")).replace(/\)\s+\(/g, ")(")
                        }(t, n)).indexOf(n);
                        if (r < 0) return t;
                        var a = r + n.length,
                            i = xt(t, a);
                        if ("(" !== t[i + 1]) t = t.slice(0, r) + "PLACEHOLDER" + t.slice(a, t.length);
                        else {
                            var o = i + 1;
                            t = t.slice(0, r) + "PLACEHOLDER" + t.slice(a, i) + "," + t.slice(o + 1, t.length)
                        }
                        return t.indexOf(n) < 0 ? jt(t, "PLACEHOLDER", n) : e(t, n)
                    }(e, t)
                }), e)
            })], Un._defaultPostprocessors = [function(e) {
                for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                    var r = n[t],
                        a = e[r];
                    if (!Ne.hasOwnProperty(a)) throw Error("math['".concat(a, "'] does not exist. (ExpressionTree Operators can only be reassigned to functions within the math (mathjs) namespace.)"))
                }
                return function(t) {
                    "OperatorNode" === t.type && e.hasOwnProperty(t.op) && (t.fn = e[t.op])
                }
            }({
                "|": "dot",
                "&": "cross"
            })];
            var Bn = n(247),
                Hn = n.n(Bn),
                Gn = n(374),
                Xn = n.n(Gn),
                Zn = new Set(Object.keys(Ne));

            function Wn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = Kn(t, e),
                    i = qn(t, a, r),
                    c = i.evalOrder,
                    s = i.cycles,
                    l = Object.keys(s).reduce((function(e, t) {
                        var n = s[t].join(", ");
                        return e[t] = Error("Symbol ".concat(t, " has cyclic dependencies: ").concat(n)), e
                    }), {}),
                    u = {
                        scope: Object(o.a)({}, n),
                        errors: l
                    },
                    d = c.reduce((function(n, r) {
                        try {
                            n.scope[r] = e.parse(t[r]).eval(n.scope)
                        } catch (a) {
                            n.errors[r] = a
                        }
                        return n
                    }), u);
                return Yn(e, t, c, d)
            }

            function Yn(e, t, n, r) {
                return n.filter((function(e) {
                    return "function" === typeof r.scope[e]
                })).reduce((function(n, r) {
                    var a = e.parse(t[r]).dependencies,
                        i = Object(ce.a)(a).filter((function(e) {
                            return void 0 === n.scope[e]
                        }));
                    if (i.length > 0) {
                        delete n.scope[r];
                        var o = i.join(", ");
                        n.errors[r] = Error("Eval Error: Depends on undefined symbol(s) ".concat(o))
                    }
                    return n
                }), r)
            }

            function qn(e, t) {
                var n, r, a, i, o, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    s = c ? Object(ce.a)(Qn(c, t)) : Object.keys(t);
                try {
                    var l = Jn(t, s);
                    a = l.edges, r = l.isolated, n = Hn()(a), i = {}
                } catch (h) {
                    if (!h.message.startsWith("Cyclic dependency")) throw h;
                    var u = $n(t);
                    o = u.withoutCycles, i = u.cycles;
                    var d = Jn(o, s.filter((function(e) {
                        return !i.hasOwnProperty(e)
                    })));
                    a = d.edges, r = d.isolated, n = Hn()(a)
                }
                var p = [].concat(Object(ce.a)(n), Object(ce.a)(r));
                return {
                    evalOrder: p,
                    cycles: i
                }
            }

            function Jn(e, t) {
                var n = new Set,
                    r = t.reduce((function(t, r) {
                        0 === e[r].size && t.childless.push(r);
                        var a, i = Object(je.a)(e[r]);
                        try {
                            for (i.s(); !(a = i.n()).done;) {
                                var o = a.value;
                                t.edges.push([r, o]), n.add(o)
                            }
                        } catch (c) {
                            i.e(c)
                        } finally {
                            i.f()
                        }
                        return t
                    }), {
                        edges: [],
                        childless: []
                    });
                return {
                    edges: r.edges,
                    isolated: r.childless.filter((function(e) {
                        return !n.has(e)
                    }))
                }
            }

            function $n(e) {
                for (var t = new Xn.a, n = 0, r = Object.keys(e); n < r.length; n++) {
                    var a = r[n];
                    t.add(a, Object(ce.a)(e[a]))
                }
                var i = t.getStronglyConnectedComponents().filter((function(e) {
                        return e.length > 1 || e[0].successors.includes(e[0])
                    })),
                    o = {};
                i.forEach((function(e) {
                    var t = e.map((function(e) {
                        return e.name
                    }));
                    t.sort(), e.forEach((function(e) {
                        o[e.name] = t
                    }))
                }));
                var c = new Set(Object.keys(o));
                return {
                    withoutCycles: Object.keys(e).reduce((function(t, n) {
                        if (c.has(n)) return t;
                        var r = Object(ce.a)(e[n]).filter((function(e) {
                            return !c.has(e)
                        }));
                        return t[n] = new Set(r), t
                    }), {}),
                    cycles: o
                }
            }

            function Kn(e, t) {
                var n = Object.keys(e).reduce((function(e, t) {
                    return e[t] = new Set, e
                }), {});
                return Object.keys(e).reduce((function(n, r) {
                    var a = e[r],
                        i = t.parse(a).dependencies;
                    return i.forEach((function(t) {
                        Zn.has(t) && !e[t] && i.delete(t)
                    })), i.forEach((function(e) {
                        n[e] && n[e].add(r)
                    })), n
                }), n)
            }

            function Qn(e, t) {
                var n = new Set;
                return e.forEach((function(e) {
                    Fn(n, function e(t, n) {
                        var r = new Set([t]);
                        return 0 === n[t].size || n[t].forEach((function(t) {
                            Fn(r, e(t, n))
                        })), r
                    }(e, t))
                })), n
            }
            var er = function() {
                    function e(t) {
                        Object(h.a)(this, e), this._oldResult = {
                            scope: {},
                            scopeDiff: {
                                unchanged: [],
                                updated: [],
                                added: [],
                                deleted: []
                            },
                            errors: {},
                            errorsDiff: {
                                unchanged: [],
                                updated: [],
                                added: [],
                                deleted: []
                            }
                        }, this._oldSymbols = {}, this._parser = t
                    }
                    return Object(f.a)(e, [{
                        key: "evalScope",
                        value: function(t) {
                            if (t === this._oldSymbols) return this._oldResult;
                            var n = e._detectChanges(t, this._oldSymbols),
                                r = n.updatesOnly,
                                a = n.changed,
                                i = r ? this._patchScope(t, a) : this._recalculateScope(t);
                            return this._updateState(t, i), i
                        }
                    }, {
                        key: "_patchScope",
                        value: function(e, t) {
                            var n = this,
                                r = Wn(this._parser, e, this._oldResult.scope, t),
                                a = r.scope,
                                i = r.errors,
                                o = Object.keys(this._oldResult.errors).filter((function(e) {
                                    return !a[e] && !i[e]
                                })).reduce((function(e, t) {
                                    return e[t] = n._oldResult.errors[t], e
                                }), i);
                            return {
                                scope: a,
                                errors: o,
                                scopeDiff: Ze()(this._oldResult.scope, a),
                                errorsDiff: Ze()(this._oldResult.errors, o)
                            }
                        }
                    }, {
                        key: "_recalculateScope",
                        value: function(e) {
                            var t = Wn(this._parser, e),
                                n = t.scope,
                                r = t.errors;
                            return {
                                scope: n,
                                errors: r,
                                scopeDiff: Ze()(this._oldResult.scope, n),
                                errorsDiff: Ze()(this._oldResult.errors, r)
                            }
                        }
                    }, {
                        key: "_updateState",
                        value: function(e, t) {
                            this._oldSymbols = e, this._oldResult = t
                        }
                    }], [{
                        key: "_detectChanges",
                        value: function(e, t) {
                            var n = Ze()(e, t),
                                r = n.added,
                                a = n.deleted,
                                i = n.updated;
                            return {
                                updatesOnly: 0 === r.length && 0 === a.length,
                                changed: i
                            }
                        }
                    }]), e
                }(),
                tr = new Un,
                nr = new er(tr);
            window.parser = tr;
            var rr = /\s\(char.*\)/g;

            function ar(e, t) {
                try {
                    var n = e.parse("__=".concat(t)).tree;
                    return "AssignmentNode" === n.type || "FunctionAssignmentNode" === n.type ? "AssignmentNode" === n.value.type || "FunctionAssignmentNode" === n.value.type ? new K("Parse Error: Unexpected assignment") : new K(null) : new K("Parse Error: Invalid right-hand side.")
                } catch (a) {
                    var r = "Parse Error: ".concat(a.message.replace(rr, ""));
                    return new K(r)
                }
            }
            var ir = n(127);

            function or() {
                var e = Object(y.a)(["\n  min-height: 45px;\n  width: 250px;\n"]);
                return or = function() {
                    return e
                }, e
            }

            function cr() {
                var e = Object(y.a)(["\n  flex:1;\n  align-self:stretch;\n  display: flex;\n"]);
                return cr = function() {
                    return e
                }, e
            }
            var sr = g.c.div(cr()),
                lr = g.c.div(or()),
                ur = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).state = {
                            isFocused: !1,
                            isPersistentError: !1
                        }, a._containerRef = r.createRef(), a.getContainerRef = a.getContainerRef.bind(Object(m.a)(a)), a.onEdit = a.onEdit.bind(Object(m.a)(a)), a.onFocus = a.onFocus.bind(Object(m.a)(a)), a.onBlur = a.onBlur.bind(Object(m.a)(a)), a
                    }
                    return Object(f.a)(n, [{
                        key: "getContainerRef",
                        value: function() {
                            if (null === document.body) throw new Error("document.body is null.");
                            return this._containerRef.current || document.body
                        }
                    }, {
                        key: "onEdit",
                        value: function(e) {
                            var t = this.props.prefix,
                                n = e.latex(),
                                r = this.validateSelf(n);
                            this.props.onValidatedTextChange(t + n, r)
                        }
                    }, {
                        key: "onFocus",
                        value: function() {
                            this.setState({
                                isFocused: !0
                            })
                        }
                    }, {
                        key: "onBlur",
                        value: function() {
                            this.setState({
                                isFocused: !1
                            })
                        }
                    }, {
                        key: "handleErrorPersistence",
                        value: function() {
                            var e = Object(ye.a)(be.a.mark((function e(t) {
                                var n;
                                return be.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t) {
                                                e.next = 4;
                                                break
                                            }
                                            return this.setState({
                                                isPersistentError: !1
                                            }), this._errorId = null, e.abrupt("return");
                                        case 4:
                                            if (!this.state.isPersistentError) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            return n = Symbol("Error Identifier"), this._errorId = n, e.next = 10, ge(this.props.displayErrorDelay);
                                        case 10:
                                            n === this._errorId && this._errorId && this.setState({
                                                isPersistentError: !0
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "displayErrorNow",
                        value: function(e) {
                            var t = Boolean(e);
                            this._errorId = t ? Symbol("Error Identifier") : null, this.setState({
                                isPersistentError: t
                            })
                        }
                    }, {
                        key: "validateSelf",
                        value: function(e) {
                            var t = this.props,
                                r = t.validators,
                                a = t.validateAgainst,
                                i = t.parser,
                                o = t.allowEmpty;
                            return n.validate(r, i, e, a, o)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.latex,
                                t = this.validateSelf(e);
                            t.errorMsg !== this.props.errorMsg && (this.props.onValidatorAndErrorChange(t), this.handleErrorPersistence(t.errorMsg)), t.errorMsg && this.displayErrorNow(t.errorMsg), this.forceUpdate()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.validators,
                                r = t.validateAgainst,
                                a = t.latex,
                                i = t.errorMsg;
                            if (n !== e.validators || r !== e.validateAgainst) {
                                var o = this.validateSelf(a);
                                o.errorMsg !== this.props.errorMsg && (this.props.onValidatorAndErrorChange(o), this.handleErrorPersistence(o.errorMsg))
                            }
                            i !== e.errorMsg && this.handleErrorPersistence(i)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.isPersistentError,
                                n = e.isFocused;
                            return r.createElement(sr, {
                                className: this.props.className,
                                style: this.props.style,
                                ref: this._containerRef
                            }, r.createElement(ir.a, {
                                getPopupContainer: this.getContainerRef,
                                visible: t && n,
                                title: r.createElement(lr, null, this.props.errorMsg),
                                trigger: "click",
                                placement: "topLeft"
                            }), r.createElement(Nn, {
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                style: this.props.style,
                                hasError: t,
                                latex: this.props.latex,
                                onEdit: this.onEdit,
                                size: this.props.size,
                                autoCommands: "sqrt pi theta phi",
                                autoOperatorNames: "diff pdiff curl div unitT unitN unitB cosh sinh tanh arccosh arcsinh arctanh cos sin tan sec csc cot arcsin arccos arctan log ln exp mod abs norm max min re im arg conj"
                            }))
                        }
                    }], [{
                        key: "validate",
                        value: function(e, t, n, r) {
                            var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                            if (a && "" === n.trim()) return new K(null);
                            var i, o = Object(je.a)(e);
                            try {
                                for (o.s(); !(i = o.n()).done;) {
                                    var c = i.value,
                                        s = c(t, n, r);
                                    if (s.isError) return s
                                }
                            } catch (l) {
                                o.e(l)
                            } finally {
                                o.f()
                            }
                            return new K(null)
                        }
                    }]), n
                }(r.PureComponent);

            function dr(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                for (var i = 0, o = r; i < o.length; i++) {
                    var c = o[i];
                    if (c[e] && c[e][t]) return c[e][t]
                }
            }
            ur.defaultProps = {
                parser: tr,
                validators: [ar],
                displayErrorDelay: 1500,
                size: "large",
                prefix: "",
                allowEmpty: !1
            };
            var pr = n(156),
                hr = n.n(pr);

            function fr(e, t, n) {
                var r, a = Object(je.a)(e);
                try {
                    for (a.s(); !(r = a.n()).done;) {
                        var i = r.value;
                        if (i[t]) return i[t][n]
                    }
                } catch (o) {
                    a.e(o)
                } finally {
                    a.f()
                }
                throw Error("id ".concat(t, " not found in ").concat(e))
            }
            var mr = hr()((function(e, t, n) {
                    return e
                }), (function(e, t, n) {
                    return t
                }), (function(e, t, n) {
                    return n
                }), (function(e, t, n) {
                    return function(e, t, n) {
                        return new Set(Object.keys(t).filter((function(e) {
                            return e !== n
                        })).map((function(n) {
                            try {
                                return e.parse(t[n].name).name
                            } catch (r) {
                                return null
                            }
                        })).filter((function(e) {
                            return null !== e
                        })))
                    }(e, t, n)
                }))((function(e, t, n) {
                    return n
                })),
                vr = hr()((function(e, t, n) {
                    return e
                }), (function(e, t, n) {
                    return t
                }), (function(e, t, n) {
                    return n
                }), (function(e, t, n) {
                    return {
                        usedNames: mr(e, t, n),
                        latexRHS: t[n].value
                    }
                }))((function(e, t, n) {
                    return n
                })),
                br = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).onValidatedTextChange = r.onValidatedTextChange.bind(Object(m.a)(r)), r.onValidatorAndErrorChange = r.onValidatorAndErrorChange.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "onValidatedTextChange",
                        value: function(e, t) {
                            var n = this.props,
                                r = n.parentId,
                                a = n.type,
                                i = n.postProcessLaTeX,
                                o = n.field,
                                c = i(e);
                            this.props.onValidatedTextChange(r, a, o, c, t)
                        }
                    }, {
                        key: "onValidatorAndErrorChange",
                        value: function(e) {
                            var t = this.props,
                                n = t.parentId,
                                r = t.field;
                            this.props.onValidatorAndErrorChange(n, r, e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.onValidatorAndErrorChange, e.onValidatedTextChange, e.parentId, e.type, e.field),
                                r = Object(c.a)(e, ["onValidatorAndErrorChange", "onValidatedTextChange", "parentId", "type", "field"]);
                            return a.a.createElement(ur, Object.assign({}, r, {
                                field: t,
                                style: n.style,
                                validators: n.validators,
                                onValidatedTextChange: this.onValidatedTextChange,
                                onValidatorAndErrorChange: this.onValidatorAndErrorChange
                            }))
                        }
                    }]), n
                }(r.PureComponent);
            br.style = {
                flex: 0
            }, br.validators = [function(e, t) {
                try {
                    var n = e.parse("".concat(t, "=1")).tree.type;
                    return new K("AssignmentNode" === n || "FunctionAssignmentNode" === n ? null : "Parse Error: invalid symbol name.")
                } catch (a) {
                    var r = "Parse Error: ".concat(a.message.replace(rr, ""));
                    return new K(r)
                }
            }, function(e, t, n) {
                var r = n.usedNames,
                    a = e.parse(t).name;
                if (void 0 === a) throw Error("Unexpected Error: Expression ".concat(t, " does not have a name."));
                return r.has(a) ? new K("Name Error: name '".concat(a, "' is used more than once.")) : new K(null)
            }, function(e, t, n) {
                var r = n.latexRHS;
                if (!ar(e, r).isValid) return new K(null);
                try {
                    return e.parse(t + "=" + r), new K(null)
                } catch (i) {
                    var a = "Parse Error: ".concat(i.message.replace(rr, ""));
                    return new K(a)
                }
            }], br.defaultProps = {
                postProcessLaTeX: function(e) {
                    return e
                },
                field: "name"
            };
            var yr = {
                    onValidatedTextChange: ae,
                    onValidatorAndErrorChange: te
                },
                gr = Object(qt.b)((function(e, t) {
                    var n = e.mathSymbols,
                        r = e.parseErrors,
                        a = e.evalErrors,
                        i = e.renderErrors,
                        o = t.parentId;
                    return {
                        type: fr([n], o, "type"),
                        latex: t.latex ? t.latex : n[o].name,
                        errorMsg: dr(o, "name", r, a, i),
                        validateAgainst: vr(tr, n, o)
                    }
                }), yr)(br),
                Or = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).onValidatedTextChange = r.onValidatedTextChange.bind(Object(m.a)(r)), r.onValidatorAndErrorChange = r.onValidatorAndErrorChange.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "onValidatedTextChange",
                        value: function(e, t) {
                            var n = this.props,
                                r = n.parentId,
                                a = n.type,
                                i = n.postProcessLaTeX,
                                o = n.field,
                                c = i(e);
                            this.props.onValidatedTextChange(r, a, o, c, t)
                        }
                    }, {
                        key: "onValidatorAndErrorChange",
                        value: function(e) {
                            var t = this.props,
                                n = t.parentId,
                                r = t.field;
                            this.props.onValidatorAndErrorChange(n, r, e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.onValidatorAndErrorChange, e.onValidatedTextChange, e.parentId, e.type, Object(c.a)(e, ["onValidatorAndErrorChange", "onValidatedTextChange", "parentId", "type"]));
                            return r.createElement(ur, Object.assign({}, t, {
                                onValidatedTextChange: this.onValidatedTextChange,
                                onValidatorAndErrorChange: this.onValidatorAndErrorChange
                            }))
                        }
                    }]), n
                }(r.PureComponent);
            Or.defaultProps = {
                postProcessLaTeX: function(e) {
                    return e
                }
            };
            var Er = {
                    onValidatedTextChange: ae,
                    onValidatorAndErrorChange: te
                },
                jr = Object(qt.b)((function(e, t) {
                    var n = e.mathGraphics,
                        r = e.mathSymbols,
                        a = e.parseErrors,
                        i = e.evalErrors,
                        o = e.renderErrors,
                        c = t.parentId,
                        s = t.field,
                        l = t.prefix,
                        u = t.latex ? t.latex : fr([n, r], c, s),
                        d = l && u.startsWith(l) ? u.slice(l.length) : u;
                    return {
                        type: fr([n, r], c, "type"),
                        latex: d,
                        errorMsg: dr(c, s, a, i, o)
                    }
                }), Er)(Or),
                xr = Object(qt.b)((function(e, t) {
                    var n = e.mathSymbols;
                    return {
                        latex: fr([e.mathGraphics, n], t.parentId, t.field)
                    }
                }))(_n),
                Cr = a.a.createContext(),
                wr = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.errors,
                                r = t.idsByName,
                                a = t.setError,
                                i = t.errorsDiff,
                                o = t.allSymbolIds,
                                c = new Set(o),
                                s = e.idsByName;
                            i.deleted.filter((function(e) {
                                return c.has(s[e])
                            })).forEach((function(e) {
                                var t = new Q(null);
                                a(s[e], "value", t)
                            })), [].concat(Object(ce.a)(i.added), Object(ce.a)(i.updated)).forEach((function(e) {
                                var t = new Q(n[e].message);
                                a(r[e], "value", t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.scope,
                                n = e.scopeDiff;
                            return a.a.createElement(Cr.Provider, {
                                value: {
                                    scope: t,
                                    scopeDiff: n
                                }
                            }, this.props.children)
                        }
                    }]), n
                }(r.PureComponent),
                kr = Cr.Consumer;

            function Pr() {
                var e = Object(y.a)(["\n  padding-left:5px;\n  padding-right:5px;\n"]);
                return Pr = function() {
                    return e
                }, e
            }

            function Tr() {
                var e = Object(y.a)(["\n  display: flex;\n\n  align-items:center;\n"]);
                return Tr = function() {
                    return e
                }, e
            }

            function Sr() {
                var e = Object(y.a)(["\n  position:relative;\n  display:flex;\n  align-items:stretch;\n  justify-content:space-between;\n"]);
                return Sr = function() {
                    return e
                }, e
            }
            var Ar = g.c.div(Sr()),
                Rr = g.c.div(Tr()),
                Ir = g.c.span(Pr()),
                Vr = {
                    type: "VARIABLE_SLIDER",
                    name: "T",
                    value: null,
                    min: "-5",
                    max: "5",
                    description: "Переменный ползунок",
                    isAnimating: !1,
                    speedMultiplier: 1
                },
                Dr = {
                    flex: 0,
                    width: "50px"
                };

            function Nr(e) {
                return a.a.createElement(r.Fragment, null, a.a.createElement(gr, {
                    parentId: e.parentId
                }), a.a.createElement(_n, {
                    latex: "="
                }), a.a.createElement(jr, {
                    field: "value",
                    style: Dr,
                    parentId: e.parentId,
                    latex: e.valueText
                }))
            }
            var _r = n(983);

            function Mr(e, t, n) {
                return Object.keys(t).reduce((function(r, a) {
                    try {
                        var i = e.parse(t[a]);
                        try {
                            return r.evaluated[a] = i.eval(n), r
                        } catch (o) {
                            return r.evalErrors[a] = o, r
                        }
                    } catch (c) {
                        return r.parseErrors[a] = c, r
                    }
                }), {
                    evalErrors: {},
                    evaluated: {},
                    parseErrors: {}
                })
            }

            function Lr(e, t, n, r) {
                Object.keys(n).forEach((function(n) {
                    void 0 === t[n] && r(e, n, new Q(null))
                })), Object.keys(t).forEach((function(n) {
                    var a = t[n].message;
                    r(e, n, new Q(a))
                }))
            }
            var Fr = function(e) {
                Object(v.a)(n, e);
                var t = Object(b.a)(n);

                function n(e) {
                    var r;
                    return Object(h.a)(this, n), (r = t.call(this, e)).state = {
                        min: -10,
                        max: -10,
                        value: 0
                    }, r.incrementByFraction = r.incrementByFraction.bind(Object(m.a)(r)), r
                }
                return Object(f.a)(n, null, [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        var n = e.parser,
                            r = e.parentId,
                            a = e.scope,
                            i = e.ownEvalErrors,
                            c = e.setError,
                            s = Mr(n, {
                                min: e.min,
                                max: e.max,
                                value: e.value
                            }, a),
                            l = s.evaluated,
                            u = s.evalErrors;
                        Object.keys(l).forEach((function(e) {
                            "number" !== typeof l[e] && (delete l[e], u[e] = TypeError("'".concat(e, "' must be a number.")))
                        }));
                        var d = Object(o.a)(Object(o.a)({}, t), l);
                        return d.min > d.max ? (u.min = u.min || TypeError("Range Error: 'min' (".concat(d.min, ") cannot be greater than  'max' (").concat(d.max, ")")), u.max = u.max || TypeError("Range Error: 'max' (".concat(d.max, ") cannot be less than 'min' (").concat(d.min, ")")), delete d.min, delete d.max) : d.min === d.max && (u.min = u.min || TypeError("Range Error: 'min' (".concat(d.min, ") cannot equal 'max' (").concat(d.max, ")")), u.max = u.max || TypeError("Range Error: 'max' (".concat(d.max, ") cannot equal 'min' (").concat(d.min, ")")), delete d.min, delete d.max), Lr(r, u, i, c), d
                    }
                }]), Object(f.a)(n, [{
                    key: "incrementByFraction",
                    value: function(e) {
                        var t = this.state,
                            n = t.min,
                            r = t.max,
                            a = t.value + (r - n) * e;
                        a < r ? this.props.onSliderChange(a) : this.props.onSliderChange(n)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.min,
                            n = e.max,
                            r = e.value,
                            i = (n - t) / 100;
                        return a.a.createElement("div", {
                            style: {
                                flex: 1
                            }
                        }, a.a.createElement(_r.a, {
                            min: t,
                            max: n,
                            tipFormatter: null,
                            value: r,
                            step: i,
                            onChange: this.props.onSliderChange
                        }))
                    }
                }]), n
            }(r.PureComponent);
            Fr.computedProps = ["min", "max", "value"];
            var zr, Ur = n(68);

            function Br() {
                var e = Object(y.a)(["\n  border-color: ", ";\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & i {\n    color: ", ";\n    font-size:100%;\n  }\n"]);
                return Br = function() {
                    return e
                }, e
            }

            function Hr() {
                var e = Object(y.a)(["\n  display: flex;\n  flex: 1;\n  align-items:center;\n  justify-content: space-around;\n"]);
                return Hr = function() {
                    return e
                }, e
            }
            window.timers = {};
            var Gr = g.c.div(Hr()),
                Xr = Object(g.c)(Ur.a)(Br(), (function(e) {
                    return e.theme.gray[2]
                }), (function(e) {
                    return e.theme.gray[5]
                }), (function(e) {
                    return e.theme.gray[5]
                })),
                Zr = {
                    cursor: "default"
                },
                Wr = {
                    display: "flex"
                },
                Yr = [1 / 16, 1 / 8, 1 / 4, .5, 3 / 4, 1, 1.5, 2, 3, 4, 8],
                qr = (zr = {}, Object(u.a)(zr, 1 / 16, "1/16"), Object(u.a)(zr, 1 / 8, "1/8"), Object(u.a)(zr, 1 / 4, "1/4"), Object(u.a)(zr, .5, "1/2"), Object(u.a)(zr, 3 / 4, "3/4"), Object(u.a)(zr, "1", "1"), Object(u.a)(zr, "1.5", "1.5"), Object(u.a)(zr, "2", "2"), Object(u.a)(zr, "3", "3"), Object(u.a)(zr, "4", "4"), Object(u.a)(zr, "8", "8"), zr),
                Jr = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).startAnimation = r.startAnimation.bind(Object(m.a)(r)), r.stopAnimation = r.stopAnimation.bind(Object(m.a)(r)), r.incrementSpeed = r.incrementSpeed.bind(Object(m.a)(r)), r.decrementSpeed = r.decrementSpeed.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "startAnimation",
                        value: function() {
                            this.props.setProperty("isAnimating", !0);
                            var e = this.props,
                                t = e.baseAnimationDuration,
                                n = 1 / e.fps,
                                r = 1e3 * n,
                                a = n / (t / e.speedMultiplier),
                                i = this.props.incrementByFraction;
                            this._interval = setInterval((function() {
                                return i(a)
                            }), r)
                        }
                    }, {
                        key: "stopAnimation",
                        value: function() {
                            this.props.setProperty("isAnimating", !1), clearInterval(this._interval)
                        }
                    }, {
                        key: "canIncrement",
                        value: function() {
                            return this.props.speedMultiplier !== Yr[Yr.length - 1]
                        }
                    }, {
                        key: "incrementSpeed",
                        value: function() {
                            var e = Yr.indexOf(this.props.speedMultiplier),
                                t = Math.min(e + 1, Yr.length),
                                n = Yr[t];
                            this.props.setProperty("speedMultiplier", n), this.props.isAnimating && (this.stopAnimation(), this.startAnimation())
                        }
                    }, {
                        key: "canDecrement",
                        value: function() {
                            return this.props.speedMultiplier !== Yr[0]
                        }
                    }, {
                        key: "decrementSpeed",
                        value: function() {
                            var e = Yr.indexOf(this.props.speedMultiplier),
                                t = Math.max(e - 1, 0),
                                n = Yr[t];
                            this.props.setProperty("speedMultiplier", n), this.props.isAnimating && (this.stopAnimation(), this.startAnimation())
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.props.isAnimating && this.startAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearInterval(this._interval)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.speedMultiplier;
                            return a.a.createElement(Gr, null, a.a.createElement(Xr, {
                                shape: "circle",
                                size: "small",
                                value: this.props.isAnimating,
                                onClick: function(t) {
                                    "false" === t.currentTarget.value ? e.startAnimation() : e.stopAnimation()
                                }
                            }, a.a.createElement(O.a, {
                                type: this.props.isAnimating ? "pause" : "caret-right"
                            })), a.a.createElement(Ur.a.Group, {
                                size: "small",
                                style: Wr
                            }, a.a.createElement(Xr, {
                                onClick: this.decrementSpeed,
                                disabled: !this.canDecrement()
                            }, a.a.createElement(O.a, {
                                type: "backward"
                            })), a.a.createElement(Xr, {
                                disabled: !0,
                                style: Zr
                            }, qr[t], a.a.createElement(O.a, {
                                type: "close",
                                style: {
                                    fontSize: "75%"
                                }
                            })), a.a.createElement(Xr, {
                                onClick: this.incrementSpeed,
                                disabled: !this.canIncrement()
                            }, a.a.createElement(O.a, {
                                type: "forward"
                            }))), a.a.createElement(Ur.a.Group, {
                                size: "small",
                                style: Wr
                            }, a.a.createElement(Xr, {
                                onClick: function() {
                                    return e.props.incrementByFraction(-.01)
                                }
                            }, a.a.createElement(O.a, {
                                type: "minus"
                            })), a.a.createElement(Xr, {
                                onClick: function() {
                                    return e.props.incrementByFraction(.01)
                                }
                            }, a.a.createElement(O.a, {
                                type: "plus"
                            }))))
                        }
                    }]), n
                }(r.PureComponent);
            Jr.defaultProps = {
                fps: 60,
                baseAnimationDuration: 4
            };
            var $r = {
                    flex: 0
                },
                Kr = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).setProperty = r.setProperty.bind(Object(m.a)(r)), r.onSliderChange = r.onSliderChange.bind(Object(m.a)(r)), r.renderSlider = r.renderSlider.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "setProperty",
                        value: function(e, t) {
                            this.props.setProperty(this.props.id, "VARIABLE_SLIDER", e, t)
                        }
                    }, {
                        key: "onSliderChange",
                        value: function(e) {
                            var t = this.props,
                                n = t.id,
                                r = null !== t.manualValue;
                            this.props.setSliderValue(n, e, r)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.forceUpdate()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                r = e.value,
                                i = e.manualValue,
                                o = n.getLaTeX(i, r, 2);
                            return a.a.createElement(en, {
                                id: t,
                                type: "VARIABLE_SLIDER"
                            }, a.a.createElement(Ar, null, a.a.createElement(Nr, {
                                parentId: t,
                                valueText: o
                            }), this._evaluatedSlider && a.a.createElement(Jr, {
                                setProperty: this.setProperty,
                                isAnimating: this.props.isAnimating,
                                speedMultiplier: this.props.speedMultiplier,
                                incrementByFraction: this._evaluatedSlider.incrementByFraction
                            })), a.a.createElement(Ar, null, a.a.createElement(jr, {
                                parentId: t,
                                style: $r,
                                field: "min"
                            }), a.a.createElement(kr, null, this.renderSlider), a.a.createElement(jr, {
                                parentId: t,
                                style: $r,
                                field: "max"
                            })))
                        }
                    }, {
                        key: "renderSlider",
                        value: function(e) {
                            var t = this,
                                r = e.scope,
                                i = this.props,
                                o = i.manualValue,
                                c = i.value,
                                s = n.getLaTeX(o, c);
                            return a.a.createElement(Fr, {
                                ref: function(e) {
                                    t._evaluatedSlider = e
                                },
                                parentId: this.props.id,
                                value: s,
                                min: this.props.min,
                                max: this.props.max,
                                onSliderChange: this.onSliderChange,
                                scope: r,
                                parser: tr,
                                ownEvalErrors: this.props.ownEvalErrors,
                                setError: this.props.setError
                            })
                        }
                    }], [{
                        key: "getLaTeX",
                        value: function(e, t, n) {
                            return null !== e && void 0 !== e ? e : n ? t.toFixed(n) : t.toString()
                        }
                    }]), n
                }(r.PureComponent);
            Kr.defaultProps = {
                isAnimating: !1,
                fps: 30,
                baseAnimationDuration: 4,
                speedMultiplier: 1
            };
            var Qr = new se({
                type: "VARIABLE_SLIDER",
                defaultSettings: Vr,
                uiComponent: Object(qt.b)((function(e, t) {
                    var n = e.mathSymbols,
                        r = e.sliderValues,
                        a = e.evalErrors,
                        i = t.id,
                        o = n[i];
                    return {
                        name: o.name,
                        value: r[i],
                        manualValue: o.value,
                        min: o.min,
                        max: o.max,
                        ownEvalErrors: a[i],
                        isAnimating: o.isAnimating,
                        speedMultiplier: o.speedMultiplier
                    }
                }), (function(e) {
                    return {
                        setProperty: function(t, n, r, a) {
                            return e(re(t, n, r, a))
                        },
                        setError: function(t, n, r) {
                            return e(te(t, n, r))
                        },
                        setSliderValue: function(t, n, r) {
                            if (e(function(e, t) {
                                    return {
                                        type: "SET_SLIDER_VALUE",
                                        payload: {
                                            id: e,
                                            value: t
                                        }
                                    }
                                }(t, n)), r) {
                                var a = new K;
                                e(ae(t, "VARIABLE_SLIDER", "value", null, a))
                            }
                        }
                    }
                }))(Kr)
            });
            var ea = Object(Mn.a)((function(e, t, n) {
                    var r = {
                            symbols: {},
                            idsByName: {},
                            allSymbolIds: Object.keys(t)
                        },
                        a = new Set;
                    return Object.keys(t).reduce((function(r, i) {
                        var o, c = t[i],
                            s = c.name,
                            l = c.value,
                            u = c.type,
                            d = null === l && u === Qr.type ? "".concat(s, "=").concat(n[i]) : "".concat(s, "=").concat(l);
                        try {
                            o = e.parse(d).name
                        } catch (p) {
                            return r
                        }
                        return a.has(o) ? (delete r.symbols[o], delete r.idsByName[o]) : (a.add(o), r.symbols[o] = d, r.idsByName[o] = i), r
                    }), r)
                })),
                ta = {
                    setError: te
                },
                na = Object(qt.b)((function(e, t) {
                    var n = e.mathSymbols,
                        r = e.sliderValues,
                        a = ea(t.parser, n, r),
                        i = a.symbols,
                        c = a.idsByName,
                        s = a.allSymbolIds,
                        l = t.scopeEvaluator.evalScope(i);
                    return window.evaluationResult = l, Object(o.a)({
                        idsByName: c,
                        allSymbolIds: s
                    }, l)
                }), ta)(wr),
                ra = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).renderTextOutput = r.renderTextOutput.bind(Object(m.a)(r)), r.convertExponentNotation = r.convertExponentNotation.bind(Object(m.a)(r)), r.deepConvert = r.deepConvert.bind(Object(m.a)(r)), r.convertComplexExponentNotation = r.convertComplexExponentNotation.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return r.createElement(kr, null, this.renderTextOutput)
                        }
                    }, {
                        key: "convertExponentNotation",
                        value: function(e) {
                            var t = Number.parseFloat(e).toPrecision(12),
                                n = t.search(/e[+-]/);
                            if (n < 0) return Number(t);
                            var r = Number(t.slice(0, n)),
                                a = Number(t.slice(n + 1));
                            return a < -12 ? "".concat(Number(r), " \\cdot 10^{").concat(a, "}") : void 0
                        }
                    }, {
                        key: "convertComplexExponentNotation",
                        value: function(e) {
                            var t = this.convertExponentNotation(e.re),
                                n = this.convertExponentNotation(e.im);
                            return Math.abs(e.re) < Math.abs(e.im) / Math.pow(10, 12) ? "".concat(n, "i") : Math.abs(e.im) < Math.abs(e.re) / Math.pow(10, 12) ? "".concat(t) : e.im < 0 ? "".concat(t).concat(n, "i") : "".concat(t, "+").concat(n, "i")
                        }
                    }, {
                        key: "deepConvert",
                        value: function(e) {
                            var t = this;
                            return Array.isArray(e) ? e.map((function(e) {
                                return t.deepConvert(e)
                            })) : e instanceof Ne.type.Complex ? this.convertComplexExponentNotation(e) : this.convertExponentNotation(e)
                        }
                    }, {
                        key: "renderTextOutput",
                        value: function(e) {
                            var t = e.scope,
                                n = {
                                    value: this.props.latex
                                },
                                a = Mr(tr, n, t).evaluated;
                            if (a.value) {
                                var i = a.value,
                                    o = "";
                                return o = Array.isArray(i) ? JSON.stringify(this.deepConvert(i)).replace(/"/g, "").replace(/\[/g, "\\left[").replace(/]/g, "\\right]").replace(/\\\\/g, "\\") : i instanceof Ne.type.Complex ? this.convertComplexExponentNotation(i) : this.convertExponentNotation(i), r.createElement(_n, {
                                    latex: "=".concat(o)
                                })
                            }
                        }
                    }]), n
                }(r.PureComponent),
                aa = Object(qt.b)((function(e, t) {
                    return {
                        latex: fr([e.mathGraphics, e.mathSymbols], t.parentId, t.field)
                    }
                }))(ra),
                ia = n(980),
                oa = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        Object(h.a)(this, n), r = t.call(this, e);
                        var a = e.parentId,
                            i = e.type,
                            o = e.field;
                        return r.onChange = r.props.setProperty.bind(Object(m.a)(r), a, i, o), r
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.parentId, e.type, e.field, e.disabledField, e.setProperty, Object(c.a)(e, ["parentId", "type", "field", "disabledField", "setProperty"]));
                            return r.createElement(ia.a, Object.assign({
                                onChange: this.onChange
                            }, t))
                        }
                    }]), n
                }(r.PureComponent);
            oa.defaultProps = {
                disabled: !1
            };
            var ca = {
                    setProperty: re
                },
                sa = Object(qt.b)((function(e, t) {
                    var n = e.mathGraphics,
                        r = t.field,
                        a = t.parentId,
                        i = t.disabledField,
                        s = t.disabled,
                        l = Object(c.a)(t, ["field", "parentId", "disabledField", "disabled"]),
                        u = "boolean" === typeof s ? s : n[a][i];
                    return Object(o.a)({
                        checked: n[a][r],
                        type: n[a].type,
                        disabled: u
                    }, l)
                }), ca)(oa),
                la = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).onChange = function(t) {
                            var n = e.props,
                                r = n.parentId,
                                a = n.type;
                            e.props.setProperty(r, a, "isZoomEnabled", !t), e.props.setProperty(r, a, "isRotateEnabled", !t), e.props.setProperty(r, a, "isPanEnabled", !1), e.props.setProperty(r, a, "useComputed", t)
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.parentId, e.type, e.setProperty, Object(c.a)(e, ["parentId", "type", "setProperty"]));
                            return r.createElement(ia.a, Object.assign({
                                onChange: this.onChange
                            }, t))
                        }
                    }]), n
                }(r.PureComponent),
                ua = {
                    setProperty: re
                },
                da = Object(qt.b)((function(e, t) {
                    var n = e.mathGraphics,
                        r = t.parentId,
                        a = Object(c.a)(t, ["parentId"]);
                    return Object(o.a)({
                        checked: n[r].useComputed,
                        type: n[r].type
                    }, a)
                }), ua)(la);

            function pa() {
                var e = Object(y.a)(["\n  padding-left:20px;\n  padding-right:30px;\n"]);
                return pa = function() {
                    return e
                }, e
            }
            var ha = Object(g.c)(Ar)(pa()),
                fa = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props.id;
                            return a.a.createElement(en, {
                                type: "CAMERA",
                                id: e,
                                metadata: xn,
                                isDeleteable: !1
                            }, a.a.createElement(Ar, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Камера, управляемая пользователем:"))), a.a.createElement(ha, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Вращение:"), a.a.createElement(sa, {
                                parentId: e,
                                field: "isRotateEnabled",
                                disabledField: "useComputed",
                                size: "small",
                                checkedChildren: "on",
                                unCheckedChildren: "off"
                            })), a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Зум:"), a.a.createElement(sa, {
                                parentId: e,
                                field: "isZoomEnabled",
                                disabledField: "useComputed",
                                size: "small",
                                checkedChildren: "on",
                                unCheckedChildren: "off"
                            })), a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Пан:"), a.a.createElement(sa, {
                                parentId: e,
                                field: "isPanEnabled",
                                disabledField: "useComputed",
                                size: "small",
                                checkedChildren: "on",
                                unCheckedChildren: "off"
                            }))), a.a.createElement(Ar, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Компьютерная камера:"), a.a.createElement(da, {
                                parentId: e,
                                size: "small",
                                checkedChildren: "on",
                                unCheckedChildren: "off"
                            }))), a.a.createElement(ha, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Позиция:"), a.a.createElement(jr, {
                                parentId: this.props.id,
                                field: "computedPosition"
                            }))), a.a.createElement(ha, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Смотреть на:"), a.a.createElement(jr, {
                                parentId: this.props.id,
                                field: "computedLookAt"
                            }))), a.a.createElement(Ar, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Ортогональная проекция:"), a.a.createElement(sa, {
                                parentId: e,
                                field: "isOrthographic",
                                size: "small",
                                checkedChildren: "on",
                                unCheckedChildren: "off"
                            }))))
                        }
                    }]), n
                }(r.PureComponent),
                ma = new Ct({
                    type: "CAMERA",
                    metadata: xn,
                    uiComponent: fa,
                    mathboxComponent: ct
                });

            function va(e) {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            var ba = function(e) {
                Object(v.a)(n, e);
                var t = Object(b.a)(n);

                function n() {
                    var e;
                    Object(h.a)(this, n);
                    for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                    return (e = t.call.apply(t, [this].concat(a))).isLongPressing = !1, e.startingPosition = {
                        x: 0,
                        y: 0
                    }, e.onPointerUp = function(t) {
                        e.timerID && e.clearLongPressTimer();
                        var n = va(t);
                        e.isLongPressing || e.exceedDragThreshold(n) ? e.isLongPressing = !1 : e.props.onShortPress()
                    }, e.onPointerDown = function(t) {
                        e.props.primaryMouseButtonOnly && "mouse" === t.pointerType && 0 !== t.button || (e.startingPosition = va(t), e.timerID = setTimeout((function() {
                            e.isLongPressing = !0, e.props.onLongPress()
                        }), e.props.longPressTime))
                    }, e.onPointerMove = function(t) {
                        var n = va(t);
                        e.timerID && e.exceedDragThreshold(n) && e.clearLongPressTimer()
                    }, e.onPointerLeave = function() {
                        e.timerID && e.clearLongPressTimer()
                    }, e.onTouchStart = function(t) {
                        e.onPointerDown(t), t.preventDefault()
                    }, e.onTouchMove = function(t) {
                        e.onPointerMove(t)
                    }, e.onTouchEnd = function(t) {
                        e.onPointerUp(t), t.preventDefault()
                    }, e
                }
                return Object(f.a)(n, [{
                    key: "clearLongPressTimer",
                    value: function() {
                        clearTimeout(this.timerID), this.timerID = null
                    }
                }, {
                    key: "exceedDragThreshold",
                    value: function(e) {
                        return t = this.startingPosition, n = e, Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)) > this.props.dragThreshold;
                        var t, n
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.a.createElement("div", {
                            onMouseUp: this.onPointerUp,
                            onMouseDown: this.onPointerDown,
                            onMouseMove: this.onPointerMove,
                            onMouseOut: this.onPointerLeave,
                            onTouchStart: this.onTouchStart,
                            onTouchEnd: this.onTouchEnd,
                            onTouchMove: this.onTouchMove,
                            className: "math3d-longpressable"
                        }, this.props.children)
                    }
                }]), n
            }(a.a.PureComponent);
            ba.defaultProps = {
                longPressTime: 500,
                primaryMouseButtonOnly: !0,
                dragThreshold: 100
            };
            var ya = n(982),
                ga = n(981);

            function Oa() {
                var e = Object(y.a)(["\n  ", ";\n  background-color: ", ";\n  border-radius: 5px;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  &:hover {\n    border: 1px solid black;\n  }\n"]);
                return Oa = function() {
                    return e
                }, e
            }
            var Ea = g.c.div(Oa(), (function(e) {
                    return Ke[e.color] ? Ke[e.color].css : "background-color: ".concat(e.color)
                }), (function(e) {
                    return e.color
                })),
                ja = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).pickColor = function() {
                            e.props.onPickColor(e.props.color)
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(Ea, {
                                style: this.props.style,
                                className: this.props.className,
                                color: this.props.color,
                                onClick: this.pickColor
                            })
                        }
                    }]), n
                }(a.a.PureComponent);

            function xa() {
                var e = Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 30px);\n  grid-auto-rows: 30px;\n  grid-gap: 5px;\n"]);
                return xa = function() {
                    return e
                }, e
            }
            var Ca = g.c.div(xa()),
                wa = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).onPickColor = function(t) {
                            e.props.onPickColor(t)
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return a.a.createElement(Ca, null, this.props.colors.map((function(t) {
                                return a.a.createElement(ja, {
                                    color: t,
                                    onPickColor: e.onPickColor,
                                    key: t
                                })
                            })))
                        }
                    }]), n
                }(a.a.Component);
            wa.defaultProps = {
                colors: $e
            };
            var ka = ya.a.TabPane,
                Pa = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).handleVisibleChange = function(e) {
                            e || a.props.onHideColorPicker()
                        }, a._containerRef = r.createRef(), a.getContainerRef = a.getContainerRef.bind(Object(m.a)(a)), a
                    }
                    return Object(f.a)(n, [{
                        key: "getContent",
                        value: function() {
                            return this.props.extraTabs ? r.createElement(ya.a, null, r.createElement(ka, {
                                tab: "Цвета",
                                key: "colors"
                            }, r.createElement(wa, {
                                colors: this.props.colors,
                                onPickColor: this.props.onPickColor
                            })), this.props.extraTabs) : r.createElement(wa, {
                                colors: this.props.colors,
                                onPickColor: this.props.onPickColor
                            })
                        }
                    }, {
                        key: "getContainerRef",
                        value: function() {
                            if (null === document.body) throw new Error("document.body is null.");
                            return this._containerRef.current || document.body
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement("div", {
                                style: {
                                    position: "relative"
                                },
                                ref: this._containerRef
                            }, r.createElement(ga.a, {
                                placement: "right",
                                trigger: "click",
                                content: this.getContent(),
                                visible: this.props.visible,
                                onVisibleChange: this.handleVisibleChange,
                                getPopupContainer: this.getContainerRef
                            }, this.props.children))
                        }
                    }]), n
                }(r.Component);

            function Ta() {
                var e = Object(y.a)(["\n  width: 26px;\n  height: 26px;\n  border-radius: 26px;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  pointer-events:none;\n"]);
                return Ta = function() {
                    return e
                }, e
            }

            function Sa() {
                var e = Object(y.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius:30px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  cursor: pointer;\n  background-color: ", ";\n  ", ";\n"]);
                return Sa = function() {
                    return e
                }, e
            }
            var Aa = g.c.div(Sa(), (function(e) {
                    return e.color
                }), (function(e) {
                    return e.gradient
                })),
                Ra = g.c.div(Ta(), (function(e) {
                    return e.isFilled ? "rgba(0, 0, 0, 0)" : "white"
                })),
                Ia = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).state = {
                            displayColorPicker: !1
                        }, e.showColorPicker = function() {
                            e.setState({
                                displayColorPicker: !0
                            })
                        }, e.hideColorPicker = function() {
                            e.setState({
                                displayColorPicker: !1
                            })
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props.color,
                                t = Ke[e] && Ke[e].css;
                            return r.createElement(Pa, {
                                extraTabs: this.props.extraTabs,
                                colors: this.props.colors,
                                color: e,
                                visible: this.state.displayColorPicker,
                                onPickColor: this.props.onPickColor,
                                onHideColorPicker: this.hideColorPicker
                            }, r.createElement(ba, {
                                onLongPress: this.showColorPicker,
                                onShortPress: this.props.onToggleVisibility
                            }, r.createElement(Aa, {
                                color: e,
                                gradient: t
                            }, r.createElement(Ra, {
                                isFilled: this.props.isFilled
                            }))))
                        }
                    }]), n
                }(r.PureComponent),
                Va = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).onToggleVisibility = function() {
                            var t = e.props,
                                n = t.id,
                                r = t.type;
                            e.props.toggleProperty(n, r, "visible")
                        }, e.onPickColor = function(t) {
                            var n = e.props,
                                r = n.id,
                                a = n.type;
                            e.props.setProperty(r, a, "color", t)
                        }, e.renderStatusSymbol = function(t) {
                            var n, a = t.scope,
                                i = e.props,
                                o = i.calculatedVisibility,
                                c = i.useCalculatedVisibility,
                                s = i.visible,
                                l = i.parser;
                            if (c && "" !== o) try {
                                n = Boolean(l.parse(o).eval(a))
                            } catch (u) {
                                n = s
                            } else n = s;
                            return r.createElement(Ia, {
                                extraTabs: e.props.extraTabs,
                                colors: e.props.colors,
                                color: e.props.color,
                                isFilled: n,
                                onToggleVisibility: e.onToggleVisibility,
                                onPickColor: e.onPickColor
                            })
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return r.createElement(kr, null, this.renderStatusSymbol)
                        }
                    }]), n
                }(r.PureComponent);
            Va.defaultProps = {
                parser: tr
            };
            var Da = {
                    toggleProperty: ne,
                    setProperty: re
                },
                Na = Object(qt.b)((function(e, t) {
                    var n = e.mathGraphics[t.id];
                    return {
                        color: n.color,
                        visible: n.visible,
                        useCalculatedVisibility: n.useCalculatedVisibility,
                        calculatedVisibility: n.calculatedVisibility,
                        type: n.type
                    }
                }), Da)(Va);

            function _a() {
                var e = Object(y.a)(["\n  width:30px;\n  height:30px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  font-size:150%;\n  color: ", ";\n"]);
                return _a = function() {
                    return e
                }, e
            }
            var Ma = Object(g.c)(I)(_a(), (function(e) {
                return e.theme.gray[5]
            }));

            function La(e) {
                return a.a.createElement(Ma, e, a.a.createElement(O.a, {
                    type: "setting"
                }))
            }

            function Fa() {
                var e = Object(y.a)(["\n  width:30px;\n  height:30px;\n"]);
                return Fa = function() {
                    return e
                }, e
            }

            function za() {
                var e = Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);
                return za = function() {
                    return e
                }, e
            }
            var Ua = g.c.div(za()),
                Ba = Object(g.c)(I)(Fa()),
                Ha = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).state = {
                            isVisible: !1
                        }, e.handleVisibleChange = function(t) {
                            e.setState({
                                isVisible: t
                            })
                        }, e.closePopover = function() {
                            e.setState({
                                isVisible: !1
                            })
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ga.a, {
                                content: this.props.children,
                                title: a.a.createElement(Ua, null, a.a.createElement("h3", null, this.props.title), a.a.createElement(Ba, {
                                    onClick: this.closePopover
                                }, a.a.createElement(O.a, {
                                    type: "close"
                                }))),
                                trigger: "click",
                                placement: "right",
                                visible: this.state.isVisible,
                                onVisibleChange: this.handleVisibleChange
                            }, a.a.createElement(La, null))
                        }
                    }]), n
                }(r.PureComponent),
                Ga = n(984);

            function Xa() {
                var e = Object(y.a)(["\n  color: ", ";\n  justify-self: end;\n  text-align: justify;\n  direction: rtl;\n"]);
                return Xa = function() {
                    return e
                }, e
            }

            function Za() {
                var e = Object(y.a)(["\n  display: grid;\n  grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr);\n  grid-gap: 10px;\n"]);
                return Za = function() {
                    return e
                }, e
            }
            var Wa = g.c.div(Za()),
                Ya = g.c.span(Xa(), (function(e) {
                    return e.theme.gray[6]
                })),
                qa = {
                    width: 40
                },
                Ja = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).renderRow = r.renderRow.bind(Object(m.a)(r)), r.renderInput = r.renderInput.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "renderRow",
                        value: function(e) {
                            var t = e.property,
                                n = e.label,
                                a = e.inputType,
                                i = e.allowEmpty;
                            return r.createElement(r.Fragment, {
                                key: t
                            }, r.createElement(Ya, null, n), this.renderInput(t, a, i))
                        }
                    }, {
                        key: "renderInput",
                        value: function(e, t, n) {
                            var a = this;
                            switch (t) {
                                case "text":
                                    return r.createElement(Ga.a, {
                                        value: this.props.data[e],
                                        onChange: function(t) {
                                            return a.props.setProperty(e, t.currentTarget.value)
                                        }
                                    });
                                case "boolean":
                                    return r.createElement(ia.a, {
                                        style: qa,
                                        size: "small",
                                        checked: this.props.data[e],
                                        onChange: function(t) {
                                            return a.props.setProperty(e, t)
                                        }
                                    });
                                case "math":
                                    return r.createElement(jr, {
                                        size: "small",
                                        allowEmpty: n,
                                        parentId: this.props.parentId,
                                        field: e
                                    });
                                default:
                                    throw Error("Settings inputType: ".concat(t, " not recognized"))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(Wa, null, this.props.settingsList.map(this.renderRow))
                        }
                    }]), n
                }(r.PureComponent),
                $a = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).setProperty = r.setProperty.bind(Object(m.a)(r)), r
                    }
                    return Object(f.a)(n, [{
                        key: "setProperty",
                        value: function(e, t) {
                            var n = this.props.parentId,
                                r = this.props.data.type;
                            this.props.setProperty(n, r, e, t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(Ha, {
                                title: this.props.title
                            }, r.createElement(Ja, {
                                settingsList: this.props.settingsList,
                                data: this.props.data,
                                parentId: this.props.parentId,
                                setProperty: this.setProperty
                            }))
                        }
                    }]), n
                }(r.PureComponent),
                Ka = {
                    setProperty: re
                },
                Qa = Object(qt.b)((function(e, t) {
                    var n = e.mathGraphics,
                        r = e.mathSymbols,
                        a = t.parentId;
                    return {
                        data: n[a] ? n[a] : r[a]
                    }
                }), Ka)($a);

            function ei() {
                var e = Object(y.a)(["\n  /* guarantee that settings has room to display */\n  max-width: calc(100% - 30px);\n  overflow-x: ", ";\n  flex: 1;\n"]);
                return ei = function() {
                    return e
                }, e
            }
            var ti = g.c.div(ei(), (function(e) {
                    return e.showOverflow ? "visible" : "hidden"
                })),
                ni = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e, t = void 0 === this.props.settingsTitle ? "".concat(Ot(this.props.type), " Settings") : this.props.settingsTitle,
                                n = this.props.sidePanelContent || r.createElement(Na, {
                                    id: this.props.id
                                });
                            return r.createElement(en, {
                                isDeleteable: this.props.isDeleteable,
                                id: this.props.id,
                                type: this.props.type,
                                sidePanelContent: n
                            }, r.createElement(Ar, null, r.createElement(ti, {
                                showOverflow: this.props.isActive
                            }, this.props.children), r.createElement(Qa, {
                                title: t,
                                parentId: this.props.id,
                                settingsList: (e = this.props.metadata, Object.keys(e).filter((function(t) {
                                    return !e[t].isPrimary
                                })).sort().map((function(t) {
                                    var n = e[t],
                                        r = n.inputType,
                                        a = n.label;
                                    return {
                                        property: t,
                                        inputType: r,
                                        label: void 0 === a ? t : a,
                                        allowEmpty: n.allowEmpty
                                    }
                                })))
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                ri = {
                    toggleProperty: ne,
                    setProperty: re
                },
                ai = Object(qt.b)((function(e, t) {
                    var n = e.activeObject,
                        r = e.mathGraphics,
                        a = (e.parseErrors, e.evalErrors, t.id);
                    return {
                        color: r[a].color,
                        visible: r[a].visible,
                        isActive: n === a
                    }
                }), ri)(ni),
                ii = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "POINT",
                                id: this.props.id,
                                metadata: sn
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                parentId: this.props.id,
                                field: "coords"
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                oi = new Ct({
                    type: "POINT",
                    metadata: sn,
                    uiComponent: ii,
                    mathboxComponent: dt
                }),
                ci = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "LINE",
                                id: this.props.id,
                                metadata: dn
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                parentId: this.props.id,
                                field: "coords"
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                si = new Ct({
                    type: "LINE",
                    metadata: dn,
                    uiComponent: ci,
                    mathboxComponent: pt
                }),
                li = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "VECTOR",
                                id: this.props.id,
                                metadata: pn
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                parentId: this.props.id,
                                field: "components"
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                ui = new Ct({
                    type: "VECTOR",
                    metadata: pn,
                    uiComponent: li,
                    mathboxComponent: ht
                }),
                di = {
                    flex: 0
                },
                pi = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "AXIS",
                                id: this.props.id,
                                metadata: an,
                                isDeleteable: !1
                            }, a.a.createElement(Ar, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Ось:"), a.a.createElement(xr, {
                                parentId: this.props.id,
                                field: "axis"
                            })), a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Мин.:"), a.a.createElement(jr, {
                                field: "min",
                                parentId: this.props.id,
                                style: di
                            })), a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Макс.:"), a.a.createElement(jr, {
                                field: "max",
                                parentId: this.props.id,
                                style: di
                            })), a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Масшт.:"), a.a.createElement(jr, {
                                field: "scale",
                                parentId: this.props.id,
                                style: di
                            }))))
                        }
                    }]), n
                }(r.PureComponent),
                hi = new Ct({
                    type: "AXIS",
                    metadata: an,
                    uiComponent: pi,
                    mathboxComponent: lt
                });

            function fi() {
                var e = Object(y.a)(["\n  padding-left:5px;\n  padding-right:5px;\n"]);
                return fi = function() {
                    return e
                }, e
            }

            function mi() {
                var e = Object(y.a)(["\n  display: flex;\n  flex: 1;\n  align-items:center;\n"]);
                return mi = function() {
                    return e
                }, e
            }
            var vi = g.c.div(mi()),
                bi = g.c.span(fi()),
                yi = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "GRID",
                                id: this.props.id,
                                metadata: on,
                                isDeleteable: !1
                            }, a.a.createElement(Ar, null, a.a.createElement(vi, null, a.a.createElement(bi, null, "Оси:"), a.a.createElement(xr, {
                                parentId: this.props.id,
                                field: "axes"
                            }))))
                        }
                    }]), n
                }(r.PureComponent),
                gi = new Ct({
                    type: "GRID",
                    metadata: on,
                    uiComponent: yi,
                    mathboxComponent: ut
                }),
                Oi = {
                    justifyContent: "flex-end"
                },
                Ei = {
                    flex: 0
                },
                ji = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "PARAMETRIC_CURVE",
                                id: this.props.id,
                                metadata: hn
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                field: "expr",
                                prefix: "_f(t)=",
                                parentId: this.props.id
                            })), a.a.createElement(Ar, {
                                style: Oi
                            }, a.a.createElement(_n, {
                                latex: "t\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "range",
                                style: Ei
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                xi = new Ct({
                    type: "PARAMETRIC_CURVE",
                    description: "Параметрическая кривая",
                    metadata: hn,
                    uiComponent: ji,
                    mathboxComponent: ft
                });

            function Ci() {
                var e = Object(y.a)(["\n  flex:1;\n  ", ";\n  background-color: ", ";\n  height:10px;\n"]);
                return Ci = function() {
                    return e
                }, e
            }

            function wi() {
                var e = Object(y.a)(["\n  display:flex;\n  align-items:center;\n  margin:4px;\n"]);
                return wi = function() {
                    return e
                }, e
            }
            var ki = g.c.div(wi()),
                Pi = g.c.div(Ci(), (function(e) {
                    return e.gradient
                }), (function(e) {
                    return e.color
                }));

            function Ti(e) {
                var t = e.color,
                    n = Ke[t] && Ke[t].css;
                return a.a.createElement(ki, null, a.a.createElement(_n, {
                    latex: "0"
                }), a.a.createElement(Pi, {
                    gradient: n,
                    color: t
                }), a.a.createElement(_n, {
                    latex: "1"
                }))
            }
            var Si = ya.a.TabPane,
                Ai = [].concat(Object(ce.a)($e), Object(ce.a)(Object.keys(Ke)));
            var Ri = Object(qt.b)((function(e, t) {
                    return {
                        color: e.mathGraphics[t.id].color
                    }
                }))((function(e) {
                    var t = e.id,
                        n = e.color,
                        r = e.labelU,
                        i = e.labelV;
                    return a.a.createElement(Na, {
                        colors: Ai,
                        id: t,
                        extraTabs: a.a.createElement(Si, {
                            tab: "Цветовая карта",
                            key: "colorMap"
                        }, a.a.createElement(Ti, {
                            color: n
                        }), a.a.createElement("p", null, a.a.createElement(_n, {
                            latex: "f(X, Y, Z, ".concat(r, ", ").concat(i, ")=")
                        })), a.a.createElement(jr, {
                            parentId: t,
                            field: "colorExpr",
                            prefix: "_f(X, Y, Z, ".concat(r, ", ").concat(i, ")=")
                        }), a.a.createElement("p", null, "Примечание. Значения ", a.a.createElement("strong", null, "заглавных"), " букв X, Y, Z представляют собой масштабированные координаты оси и находятся в диапазоне от 0 до 1."), a.a.createElement("p", null, a.a.createElement("em", null, "Цветовая карта может выглядеть лучше если, функция ", a.a.createElement("code", null, "затемнения выключена"), ".")))
                    })
                })),
                Ii = {
                    justifyContent: "flex-end"
                },
                Vi = {
                    flex: 0
                };

            function Di(e) {
                var t = "_f(".concat(e, ")=").length;
                return function(e) {
                    try {
                        var n = tr.parse(e);
                        if ("FunctionAssignmentNode" !== n.tree.type) return e;
                        var r = n.tree.params[0],
                            a = e.slice(t);
                        return tr.parse(a).dependencies.has(r) ? e : a
                    } catch (i) {
                        return e
                    }
                }
            }

            function Ni(e, t, n, i) {
                var o = Di(n),
                    c = Di(i);
                return function(r) {
                    Object(v.a)(l, r);
                    var s = Object(b.a)(l);

                    function l() {
                        return Object(h.a)(this, l), s.apply(this, arguments)
                    }
                    return Object(f.a)(l, [{
                        key: "render",
                        value: function() {
                            var r = this.props.id;
                            return a.a.createElement(ai, {
                                type: e,
                                id: r,
                                metadata: t,
                                sidePanelContent: a.a.createElement(Ri, {
                                    id: r,
                                    labelU: n,
                                    labelV: i
                                })
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                field: "expr",
                                prefix: "_f(".concat(n, ",").concat(i, ")="),
                                parentId: r
                            })), a.a.createElement(Ar, {
                                style: Ii
                            }, a.a.createElement(_n, {
                                latex: "".concat(n, "\\in"),
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: r,
                                prefix: "_f(".concat(i, ")="),
                                postProcessLaTeX: c,
                                field: "rangeU",
                                style: Vi
                            })), a.a.createElement(Ar, {
                                style: Ii
                            }, a.a.createElement(_n, {
                                latex: "".concat(i, "\\in"),
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: r,
                                prefix: "_f(".concat(n, ")="),
                                postProcessLaTeX: o,
                                field: "rangeV",
                                style: Vi
                            })))
                        }
                    }]), l
                }(r.PureComponent)
            }
            var _i = new Ct({
                    type: "PARAMETRIC_SURFACE",
                    description: "Параметрическая поверхность",
                    metadata: bn,
                    uiComponent: Ni("PARAMETRIC_SURFACE", bn, "u", "v"),
                    mathboxComponent: mt
                }),
                Mi = new Ct({
                    type: "EXPLICIT_SURFACE",
                    description: "Явная поверхность",
                    metadata: yn,
                    uiComponent: Ni("EXPLICIT_SURFACE", yn, "x", "y"),
                    mathboxComponent: vt
                }),
                Li = new Ct({
                    type: "EXPLICIT_SURFACE_POLAR",
                    description: "Явная поверхность (полярная)",
                    metadata: gn,
                    uiComponent: Ni("EXPLICIT_SURFACE_POLAR", gn, "r", "\\theta"),
                    mathboxComponent: bt
                }),
                Fi = {
                    justifyContent: "flex-end"
                },
                zi = {
                    flex: 0
                },
                Ui = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "IMPLICIT_SURFACE",
                                id: this.props.id,
                                metadata: En
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                field: "lhs",
                                prefix: "_f(x,y,z)=",
                                parentId: this.props.id
                            }), a.a.createElement(_n, {
                                latex: "="
                            }), a.a.createElement(jr, {
                                field: "rhs",
                                prefix: "_f(x,y,z)=",
                                parentId: this.props.id
                            })), a.a.createElement(Ar, {
                                style: Fi
                            }, a.a.createElement(_n, {
                                latex: "x\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "rangeX",
                                style: zi
                            })), a.a.createElement(Ar, {
                                style: Fi
                            }, a.a.createElement(_n, {
                                latex: "y\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "rangeY",
                                style: zi
                            })), a.a.createElement(Ar, {
                                style: Fi
                            }, a.a.createElement(_n, {
                                latex: "z\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "rangeZ",
                                style: zi
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                Bi = new Ct({
                    type: "IMPLICIT_SURFACE",
                    description: "Неявная поверхность",
                    metadata: En,
                    uiComponent: Ui,
                    mathboxComponent: yt,
                    support: "experimental"
                }),
                Hi = {
                    justifyContent: "flex-end"
                },
                Gi = {
                    flex: 0
                },
                Xi = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(ai, {
                                type: "VECTOR_FIELD",
                                id: this.props.id,
                                metadata: jn
                            }, a.a.createElement(Ar, null, a.a.createElement(jr, {
                                field: "expr",
                                prefix: "_f(x,y,z)=",
                                parentId: this.props.id
                            })), a.a.createElement(Ar, {
                                style: Hi
                            }, a.a.createElement(_n, {
                                latex: "x\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "rangeX",
                                style: Gi
                            })), a.a.createElement(Ar, {
                                style: Hi
                            }, a.a.createElement(_n, {
                                latex: "y\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "rangeY",
                                style: Gi
                            })), a.a.createElement(Ar, {
                                style: Hi
                            }, a.a.createElement(_n, {
                                latex: "z\\in",
                                size: "small"
                            }), a.a.createElement(jr, {
                                size: "small",
                                parentId: this.props.id,
                                field: "rangeZ",
                                style: Gi
                            })))
                        }
                    }]), n
                }(r.PureComponent),
                Zi = new Ct({
                    type: "VECTOR_FIELD",
                    description: "Векторное поле",
                    metadata: jn,
                    uiComponent: Xi,
                    mathboxComponent: gt
                });
            var Wi, Yi = [ma, hi, gi, oi, si, ui, xi, _i, Mi, Li, Bi, Zi].reduce((function(e, t) {
                    return e[t.type] = t, e
                }), {}),
                qi = {
                    justifyContent: "flex-end"
                },
                Ji = new se({
                    type: "VARIABLE",
                    defaultSettings: {
                        type: "VARIABLE",
                        name: "f(x)",
                        value: "e^x",
                        description: "Переменная или функция"
                    },
                    uiComponent: function(e) {
                        Object(v.a)(n, e);
                        var t = Object(b.a)(n);

                        function n() {
                            return Object(h.a)(this, n), t.apply(this, arguments)
                        }
                        return Object(f.a)(n, [{
                            key: "render",
                            value: function() {
                                return a.a.createElement(en, {
                                    id: this.props.id,
                                    type: "VARIABLE"
                                }, a.a.createElement(Ar, null, a.a.createElement(gr, {
                                    parentId: this.props.id
                                }), a.a.createElement(_n, {
                                    latex: "="
                                }), a.a.createElement(jr, {
                                    field: "value",
                                    parentId: this.props.id
                                })), a.a.createElement(Ar, {
                                    style: qi
                                }, a.a.createElement(aa, {
                                    parentId: this.props.id,
                                    field: "value"
                                })))
                            }
                        }]), n
                    }(r.PureComponent)
                }),
                $i = {
                    type: "BOOLEAN_VARIABLE",
                    name: "Переключатель",
                    value: !0,
                    description: "a"
                },
                Ki = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).onChange = function(t) {
                            e.props.setProperty(e.props.id, "BOOLEAN_VARIABLE", "value", t)
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(en, {
                                id: this.props.id,
                                type: "BOOLEAN_VARIABLE"
                            }, a.a.createElement(Ar, null, a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Имя:"), a.a.createElement(gr, {
                                parentId: this.props.id
                            })), a.a.createElement(Rr, null, a.a.createElement(Ir, null, "Value:"), a.a.createElement(ia.a, {
                                checkedChildren: "On",
                                unCheckedChildren: "Off",
                                checked: this.props.value,
                                onChange: this.onChange
                            }))))
                        }
                    }]), n
                }(r.PureComponent),
                Qi = {
                    setProperty: re
                },
                eo = new se({
                    type: "BOOLEAN_VARIABLE",
                    defaultSettings: $i,
                    uiComponent: Object(qt.b)((function(e, t) {
                        return {
                            value: e.mathSymbols[t.id].value
                        }
                    }), Qi)(Ki)
                }),
                to = (Wi = {}, Object(u.a)(Wi, Ji.type, Ji), Object(u.a)(Wi, Qr.type, Qr), Object(u.a)(Wi, eo.type, eo), Wi);

            function no() {
                var e = Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition-duration: ", ";\n  &.collapsed {\n    transform: rotate(-90deg);\n  }\n"]);
                return no = function() {
                    return e
                }, e
            }

            function ro() {
                var e = Object(y.a)(["\n  padding-left: 2px;\n  padding-right: 2px;\n  width:28px;\n  height:28px;\n"]);
                return ro = function() {
                    return e
                }, e
            }
            var ao = Object(g.c)(I)(ro()),
                io = g.c.span(no(), (function(e) {
                    return "".concat(e.animationSpeed, "ms")
                }));

            function oo(e) {
                var t = e.isCollapsed ? "collapsed" : "";
                return a.a.createElement(ao, {
                    onClick: e.onToggleContentCollapsed,
                    lightenOnHover: e.lightenOnHover,
                    backgroundColor: e.backgroundColor,
                    focusColor: Vt.gray[6]
                }, a.a.createElement(io, {
                    className: t,
                    animationSpeed: e.animationSpeed
                }, a.a.createElement(O.a, {
                    type: "down"
                })))
            }
            var co = n(380),
                so = n.n(co),
                lo = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var r;
                        return Object(h.a)(this, n), (r = t.call(this, e)).onToggleContentCollapsed = r.props.onToggleContentCollapsed.bind(Object(m.a)(r), r.props.id), r
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.isCollapsed ? "collapsed" : "";
                            return a.a.createElement(en, {
                                id: e.id,
                                type: Kt,
                                isFolder: !0,
                                sidePanelContent: a.a.createElement(oo, {
                                    isCollapsed: e.isCollapsed,
                                    onToggleContentCollapsed: this.onToggleContentCollapsed,
                                    animationSpeed: e.animationSpeed,
                                    lightenOnHover: e.isActive,
                                    backgroundColor: e.isActive ? Dt.primary[1] : "white"
                                })
                            }, a.a.createElement(so.a, {
                                open: !e.isCollapsed,
                                transitionTime: e.animationSpeed,
                                overflowWhenOpen: "visible"
                            }, a.a.createElement(me, {
                                className: t,
                                droppableType: "FOLDER_ITEM",
                                draggableType: "FOLDER_ITEM",
                                isDropDisabled: e.isCollapsed || e.isDropDisabled,
                                droppableId: e.id,
                                items: e.items,
                                renderItem: po
                            })))
                        }
                    }]), n
                }(r.PureComponent);
            lo.defaultProps = {
                animationSpeed: 200,
                isDropDisabled: !1
            };
            var uo = Object(o.a)(Object(o.a)({}, to), Yi);

            function po(e) {
                var t = e.id,
                    n = e.type,
                    r = uo[n].uiComponent;
                return a.a.createElement(r, {
                    id: t
                })
            }
            var ho = new Set(["AXIS", "GRID"]),
                fo = hr()((function(e, t) {
                    return e.mathGraphics
                }), (function(e, t) {
                    return e.mathSymbols
                }), (function(e, t) {
                    return e.sortableTree[t]
                }), (function(e, t, n) {
                    return n.map((function(n) {
                        var r = function(e, t, n) {
                            if (e[n]) return e[n].type;
                            if (t[n]) return t[n].type;
                            throw Error("Folder child item ".concat(n, " is not a mathGraphic or mathSymbols variable"))
                        }(e, t, n);
                        return {
                            id: n,
                            type: r,
                            isDragDisabled: ho.has(r)
                        }
                    }))
                }))((function(e, t) {
                    return t
                })),
                mo = {
                    onToggleContentCollapsed: function(e) {
                        return ne(e, Kt, "isCollapsed")
                    }
                },
                vo = new function e(t) {
                    Object(h.a)(this, e), this.reducer = "folders", t.support || (t.support = "full"), Object.assign(this, t)
                }({
                    type: Kt,
                    defaultSettings: {
                        isCollapsed: !1,
                        isDropDisabled: !1,
                        isDragDisabled: !1,
                        description: "Папка"
                    },
                    uiComponent: Object(qt.b)((function(e, t) {
                        return {
                            items: fo(e, t.id),
                            isCollapsed: e.folders[t.id].isCollapsed,
                            isActive: e.activeObject === t.id,
                            isDropDisabled: e.folders[t.id].isDropDisabled
                        }
                    }), mo)(lo)
                }),
                bo = Object(o.a)(Object(o.a)(Object(u.a)({}, vo.type, vo), to), Yi),
                yo = bo;
            window.MathObjects = bo;
            var go = n(53),
                Oo = n.n(go);

            function Eo(e, t, n) {
                var r = Object(ce.a)(e),
                    a = r.splice(t, 1),
                    i = Object(oe.a)(a, 1)[0];
                return r.splice(n, 0, i), r
            }
            Oo.a.extend("$reOrder", (function(e, t) {
                return Eo.apply(void 0, [t].concat(Object(ce.a)(e)))
            }));
            var jo = {
                    root: []
                },
                xo = {};
            var Co = {
                    title: "Без названия",
                    versionAtCreation: "1.3.0",
                    creationDate: JSON.stringify(new Date)
                },
                wo = {};

            function ko(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wo,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = n.name,
                        a = n.type,
                        i = n.payload;
                    if (!e.has(r)) return t;
                    switch (a) {
                        case "CREATE_MATH_OBJECT":
                            var c = Object(o.a)(Object(o.a)({}, yo[r].defaultSettings), i.settings);
                            return Oo()(t, {
                                $merge: Object(u.a)({}, i.id, c)
                            });
                        case "DELETE_MATH_OBJECT":
                            return Oo()(t, {
                                $unset: [i.id]
                            });
                        case "TOGGLE_PROPERTY":
                            return Oo()(t, Object(u.a)({}, i.id, {
                                $toggle: [i.property]
                            }));
                        case "SET_PROPERTY_AND_ERROR":
                        case "SET_PROPERTY":
                            return Oo()(t, Object(u.a)({}, i.id, Object(u.a)({}, i.property, {
                                $set: i.value
                            })));
                        case "UNSET_PROPERTY":
                            return Oo()(t, Object(u.a)({}, i.id, {
                                $unset: [i.property]
                            }));
                        default:
                            return t
                    }
                }
            }
            var Po = ko(new Set([vo.type])),
                To = ko(new Set(Object.keys(to))),
                So = ko(new Set(Object.keys(Yi)));
            var Ao = new(function() {
                    function e() {
                        Object(h.a)(this, e), this._lastId = 0
                    }
                    return Object(f.a)(e, [{
                        key: "next",
                        value: function() {
                            return this._lastId += 1, String(this._lastId)
                        }
                    }, {
                        key: "setNextId",
                        value: function(e) {
                            this._lastId = e - 1
                        }
                    }]), e
                }()),
                Ro = {
                    setup: ["cameraFolder", "axes"],
                    cameraFolder: ["camera"],
                    axes: ["axis-x", "axis-y", "axis-z", "grid-xy", "grid-yz", "grid-zx"]
                },
                Io = {
                    metaData: {},
                    sortableTree: Object(o.a)(Object(o.a)({}, Ro), {}, {
                        root: ["mainFolder"],
                        mainFolder: []
                    }),
                    folders: {
                        cameraFolder: {
                            isCollapsed: !0,
                            isDropDisabled: !0,
                            isDragDisabled: !0,
                            description: "Управление камерой"
                        },
                        axes: {
                            isCollapsed: !1,
                            isDropDisabled: !0,
                            isDragDisabled: !0,
                            description: "Оси и сетки"
                        },
                        mainFolder: {
                            description: "Папка"
                        }
                    },
                    mathSymbols: {},
                    mathGraphics: {
                        camera: {
                            type: "CAMERA"
                        },
                        "axis-x": {
                            type: "AXIS",
                            label: "x"
                        },
                        "axis-y": {
                            type: "AXIS",
                            label: "y",
                            axis: "y"
                        },
                        "axis-z": {
                            type: "AXIS",
                            label: "z",
                            axis: "z",
                            scale: "1/2"
                        },
                        "grid-xy": {
                            type: "GRID",
                            axes: "xy"
                        },
                        "grid-yz": {
                            type: "GRID",
                            visible: !1,
                            axes: "yz"
                        },
                        "grid-zx": {
                            type: "GRID",
                            visible: !1,
                            axes: "zx"
                        }
                    },
                    sliders: {}
                },
                Vo = JSON.parse(JSON.stringify(Io));
            Vo.mathGraphics[1] = {
                type: "EXPLICIT_SURFACE",
                color: "rainbow"
            }, Vo.sortableTree.mainFolder.push("1");
            var Do = Io;

            function No(e) {
                return 0 === Object.keys(e).length && e.constructor === Object
            }

            function _o(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set;
                return Object.keys(e).reduce((function(r, a) {
                    return (e[a] !== t[a] || n.has(a)) && (r[a] = e[a]), r
                }), {})
            }

            function Mo(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = new Set(["type"]);
                return Object.keys(e).reduce((function(a, i) {
                    var c = e[i],
                        s = n ? Kt : c.type,
                        l = yo[s].defaultSettings,
                        u = _o(c, t[i] ? Object(o.a)(Object(o.a)({}, l), t[i]) : l, r),
                        d = n ? Object.keys(u).length > 0 : Object.keys(u).length > 1;
                    return (void 0 === t[i] || d) && (a[i] = u), a
                }), {})
            }

            function Lo(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = Object(o.a)(Object(o.a)({}, t), e);
                return Object.keys(r).reduce((function(e, a) {
                    var i = r[a],
                        c = n ? Kt : i.type,
                        s = yo[c].defaultSettings,
                        l = t[a] ? Object(o.a)(Object(o.a)({}, s), t[a]) : s;
                    return e[a] = Object(o.a)(Object(o.a)({}, l), i), e
                }), {})
            }

            function Fo(e, t) {
                var n = Mo(e, Do.folders, !0);
                return Object.fromEntries(Object.entries(n).filter((function(e) {
                    var t = Object(oe.a)(e, 2);
                    t[0];
                    return !No(t[1])
                })))
            }

            function zo(e) {
                var t = e.metadata,
                    n = e.sortableTree,
                    r = e.folders,
                    a = e.mathSymbols,
                    i = e.mathGraphics,
                    o = e.sliderValues,
                    c = Object.keys(n).reduce((function(e, t) {
                        return void 0 === Ro[t] && (e[t] = n[t]), e
                    }), {}),
                    s = new Set(["versionAtCreation"]),
                    l = {
                        metadata: _o(t, Co, s),
                        sortableTree: c,
                        folders: Fo(r),
                        mathSymbols: Mo(a, Do.mathSymbols),
                        mathGraphics: Mo(i, Do.mathGraphics),
                        sliderValues: o
                    };
                return Object.fromEntries(Object.entries(l).filter((function(e) {
                    var t = Object(oe.a)(e, 2);
                    t[0];
                    return !No(t[1])
                })))
            }

            function Uo(e) {
                var t = e.metadata,
                    n = e.sortableTree,
                    r = e.folders,
                    a = e.mathSymbols,
                    i = e.mathGraphics,
                    c = e.sliderValues,
                    s = Object(o.a)(Object(o.a)({}, Ro), n),
                    l = function(e, t, n) {
                        var r = e.root,
                            a = Object.fromEntries(r.map((function(e) {
                                return [e, {}]
                            })));
                        return Lo(Object(o.a)(Object(o.a)({}, a), t), Do.folders, !0)
                    }(s, r),
                    u = Lo(a, Do.mathSymbols),
                    d = Lo(i, Do.mathGraphics),
                    p = {
                        activeObject: null,
                        metadata: Object(o.a)(Object(o.a)({}, Co), t),
                        sortableTree: s,
                        sliderValues: c,
                        folders: l,
                        mathSymbols: u,
                        mathGraphics: d,
                        parseErrors: {},
                        evalErrors: {},
                        renderErrors: {}
                    };
                Object.keys(u).concat(Object.keys(d)).forEach((function(e) {
                    p.parseErrors[e] = {}, p.evalErrors[e] = {}, p.renderErrors[e] = {}
                }));
                var h = function(e) {
                    var t = 0;
                    return e.root.forEach((function(n) {
                        var r = parseInt(n, 10);
                        r > t && (t = r), e[n].forEach((function(e) {
                            var n = parseInt(e, 10);
                            n > t && (t = n)
                        }))
                    })), t
                }(s);
                return Ao.setNextId(h + 1), p
            }

            function Bo(e) {
                return {
                    type: "LOAD_STATE",
                    payload: {
                        state: Uo(e)
                    }
                }
            }
            var Ho = {
                    state: {}
                },
                Go = {};

            function Xo(e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Go,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        r = n.type,
                        a = n.payload,
                        i = n.name;
                    switch (r) {
                        case "SET_ERROR":
                            var o = a.id,
                                c = a.property,
                                s = a.errorData,
                                l = s.type,
                                d = s.errorMsg;
                            return e.has(l) ? Oo()(t, Object(u.a)({}, o, Object(u.a)({}, c, {
                                $set: d
                            }))) : t;
                        case "UNSET_ERROR":
                            var p = a.id,
                                h = a.property,
                                f = a.errorData.type;
                            return e.has(f) ? Oo()(t, Object(u.a)({}, p, {
                                $unset: [h]
                            })) : t;
                        case "CREATE_MATH_OBJECT":
                            var m = a.id;
                            return i === Kt ? t : Oo()(t, Object(u.a)({}, m, {
                                $set: {}
                            }));
                        case "DELETE_MATH_OBJECT":
                            var v = a.id;
                            return Oo()(t, {
                                $unset: [v]
                            });
                        default:
                            return t
                    }
                }
            }
            var Zo = Xo(new Set(["PARSE_ERROR"])),
                Wo = Xo(new Set(["EVAL_ERROR"])),
                Yo = Xo(new Set(["RENDER_ERROR"])),
                qo = Object(i.c)({
                    metadata: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Co,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "SET_TITLE":
                                var n = t.payload.title;
                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                    title: n
                                });
                            case "SET_CREATION_DATE":
                                var r = t.payload.creationDate;
                                return Object(o.a)(Object(o.a)({}, e), {}, {
                                    creationDate: r
                                });
                            default:
                                return e
                        }
                    },
                    drawers: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case "SET_VISIBILITY":
                                return Object(o.a)(Object(o.a)({}, e), {}, Object(u.a)({}, r.id, Object(o.a)(Object(o.a)({}, e[r.id]), {}, {
                                    isVisible: r.isVisible
                                })));
                            case "SET_ANIMATION_STATUS":
                                return Object(o.a)(Object(o.a)({}, e), {}, Object(u.a)({}, r.id, Object(o.a)(Object(o.a)({}, e[r.id]), {}, {
                                    isAnimating: r.isAnimating
                                })));
                            case "SET_WIDTH":
                                var a = r.id,
                                    i = r.width;
                                return Object(o.a)(Object(o.a)({}, e), {}, Object(u.a)({}, a, Object(o.a)(Object(o.a)({}, e[a]), {}, {
                                    width: i
                                })));
                            default:
                                return e
                        }
                    },
                    tabs: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case "SET_ACTIVE_TAB":
                                var a = r.id,
                                    i = r.activeTab;
                                return Object(o.a)(Object(o.a)({}, e), {}, Object(u.a)({}, a, {
                                    activeTab: i
                                }));
                            case "CREATE_MATH_OBJECT":
                                return "1" === e.controls.activeTab ? e : Object(o.a)(Object(o.a)({}, e), {}, {
                                    controls: {
                                        activeTab: "1"
                                    }
                                });
                            default:
                                return e
                        }
                    },
                    sortableTree: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload,
                            a = t.name;
                        switch (n) {
                            case "REORDER_WITHIN_DROPPABLE":
                                var i = r.source,
                                    c = r.destination;
                                return Oo()(e, Object(u.a)({}, i.droppableId, {
                                    $reOrder: [i.index, c.index]
                                }));
                            case "DRAG_TO_NEW_DROPPABLE":
                                var s, l = r.source,
                                    d = r.destination,
                                    p = r.draggableId;
                                return Oo()(e, (s = {}, Object(u.a)(s, l.droppableId, {
                                    $splice: [
                                        [l.index, 1]
                                    ]
                                }), Object(u.a)(s, d.droppableId, {
                                    $splice: [
                                        [d.index, 0, p]
                                    ]
                                }), s));
                            case "DELETE_MATH_OBJECT":
                                var h = r.parentId,
                                    f = r.positionInParent;
                                return Oo()(e, Object(u.a)({}, h, {
                                    $splice: [
                                        [f, 1]
                                    ]
                                }));
                            case "CREATE_MATH_OBJECT":
                                var m = r.parentFolderId,
                                    v = r.positionInFolder,
                                    b = r.id,
                                    y = a === vo.type ? {
                                        $merge: Object(u.a)({}, b, [])
                                    } : {};
                                return Oo()(e, Object(o.a)(Object(u.a)({}, m, {
                                    $splice: [
                                        [v, 0, b]
                                    ]
                                }), y));
                            default:
                                return e
                        }
                    },
                    folders: Po,
                    mathGraphics: function(e, t) {
                        var n = t.name,
                            r = t.type,
                            a = t.payload,
                            i = So(e, t);
                        if ("SET_PROPERTY" !== r && "TOGGLE_PROPERTY" !== r) return i;
                        var o = a.property;
                        if ("visible" === o) return Oo()(i, Object(u.a)({}, a.id, {
                            useCalculatedVisibility: {
                                $set: !1
                            }
                        }));
                        if ("calculatedVisibility" === o) return Oo()(i, Object(u.a)({}, a.id, {
                            useCalculatedVisibility: {
                                $set: !0
                            }
                        }));
                        if ("BOOLEAN_VARIABLE" === n) {
                            for (var c = 0, s = Object.keys(i); c < s.length; c++) {
                                var l = s[c];
                                "null" !== i[l].calculatedVisibility && (i[l].useCalculatedVisibility = !0)
                            }
                            return i
                        }
                        return i
                    },
                    mathSymbols: To,
                    parseErrors: Zo,
                    evalErrors: Wo,
                    renderErrors: Yo,
                    sliderValues: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xo,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case "SET_SLIDER_VALUE":
                                var a = r.id,
                                    i = r.value;
                                return Object(o.a)(Object(o.a)({}, e), {}, Object(u.a)({}, a, i));
                            case "CREATE_MATH_OBJECT":
                                if ("VARIABLE_SLIDER" !== t.name) return e;
                                var c = r.id;
                                return Object(o.a)(Object(o.a)({}, e), {}, Object(u.a)({}, c, 0));
                            default:
                                return e
                        }
                    },
                    activeObject: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case "SET_ACTIVE_OBJECT":
                                return r.id;
                            default:
                                return e
                        }
                    },
                    lastSavedState: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ho,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.type,
                            r = t.payload;
                        switch (n) {
                            case "SET_SAVED_STATE":
                                return r.state;
                            default:
                                return e
                        }
                    }
                });
            var Jo = [n(381).a],
                $o = i.d.apply(void 0, [i.a.apply(void 0, Jo)].concat([])),
                Ko = Object(i.e)(Object(J.enableBatching)((function(e, t) {
                    if ("LOAD_STATE" === t.type) {
                        e.lastSavedState;
                        var n = Object(c.a)(e, ["lastSavedState"]),
                            r = Object(o.a)(Object(o.a)({}, n), t.payload.state),
                            a = l()(r);
                        return Object(o.a)(Object(o.a)({}, r), {}, {
                            lastSavedState: a
                        })
                    }
                    return qo(e, t)
                })), Uo(Vo), $o),
                Qo = n(21);
            n(821);

            function ec() {
                var e = Object(y.a)(["\n  display:flex;\n  height:100%;\n"]);
                return ec = function() {
                    return e
                }, e
            }
            var tc = g.c.div(ec()),
                nc = {
                    onOpen: Y,
                    onClose: W
                },
                rc = Object(qt.b)((function(e, t) {
                    var n = e.drawers;
                    return {
                        isOpen: n[t.id].isVisible,
                        isAnimating: n[t.id].isAnimating,
                        width: n[t.id].width
                    }
                }), nc)(H);

            function ac() {
                var e = Object(y.a)(["\n  width:100%;\n  border-bottom: 1px solid ", ";\n"]);
                return ac = function() {
                    return e
                }, e
            }
            var ic = vo.uiComponent,
                oc = Object(g.c)(me)(ac(), (function(e) {
                    return e.theme.gray[5]
                }));

            function cc(e, t) {
                return e.map((function(e) {
                    return {
                        id: e,
                        isDragDisabled: t[e].isDragDisabled
                    }
                }))
            }
            var sc = Object(qt.b)((function(e, t) {
                    var n = e.sortableTree,
                        r = e.folders;
                    return {
                        items: cc(n[t.root], r)
                    }
                }), (function(e) {
                    return {
                        onDragEnd: function(t) {
                            var n, r;
                            if (t.destination) return t.destination.droppableId === t.source.droppableId ? e({
                                type: "REORDER_WITHIN_DROPPABLE",
                                payload: {
                                    source: (n = t).source,
                                    destination: n.destination,
                                    draggableId: n.draggableId
                                }
                            }) : e({
                                type: "DRAG_TO_NEW_DROPPABLE",
                                payload: {
                                    source: (r = t).source,
                                    destination: r.destination,
                                    draggableId: r.draggableId
                                }
                            })
                        }
                    }
                }))((function(e) {
                    return a.a.createElement(le.a, {
                        onDragEnd: e.onDragEnd
                    }, a.a.createElement(oc, {
                        droppableType: "FOLDER",
                        draggableType: "FOLDER",
                        droppableId: "root",
                        items: e.items,
                        renderItem: function(e) {
                            return a.a.createElement(ic, {
                                id: e.id
                            })
                        }
                    }))
                })),
                lc = n(987),
                uc = n(986);

            function dc() {
                var e = Object(y.a)(["\n  color: ", "\n"]);
                return dc = function() {
                    return e
                }, e
            }

            function pc() {
                var e = Object(y.a)(["\n  display:inline-block;\n  border-radius:4px; /*Same as ant-d*/\n  background: linear-gradient(\n    ", ",\n    ", "\n    );\n  &.ant-dropdown-trigger {\n    line-height: 1.5;\n    margin-top:16px;\n    margin-bottom:16px;\n    margin-right:16px;\n  };\n"]);
                return pc = function() {
                    return e
                }, e
            }

            function hc() {
                var e = Object(y.a)(["\n  font-weight: bold;\n  &.ant-btn, &.ant-btn:hover, &.ant-btn:focus {\n    padding-left: 20px;\n    padding-right:20px;\n    background-color:rgba(0,0,0,0);\n  }\n"]);
                return hc = function() {
                    return e
                }, e
            }
            var fc = Object(g.c)(Ur.a)(hc()),
                mc = g.c.div(pc(), (function(e) {
                    return e.theme.gray[1]
                }), (function(e) {
                    return e.theme.gray[4]
                })),
                vc = g.c.span(dc(), (function(e) {
                    return e.theme.gray[5]
                })),
                bc = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).handleMenuClick = function(t) {
                            var n = t.key,
                                r = Ao.next(),
                                a = n === Kt ? "root" : e.props.targetFolder,
                                i = n === Kt ? e.props.newFolderIndex : e.props.newItemIndex;
                            e.props.createMathObject(r, n, a, i), n !== Kt && e.props.setContentCollapsed(e.props.targetFolder, !1), e.props.setActiveObject(r)
                        }, e.renderMenuItem = function(e) {
                            var t = e.type,
                                n = e.description,
                                a = e.support;
                            return r.createElement(lc.a.Item, {
                                key: t
                            }, n, "experimental" === a && r.createElement(vc, null, " ", "( ", r.createElement(O.a, {
                                type: "experiment"
                            }), " Нестабильная функция)"))
                        }, e.renderMenu = function() {
                            return r.createElement(lc.a, {
                                onClick: e.handleMenuClick
                            }, e.props.menuItems.map(e.renderMenuItem))
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return r.createElement(uc.a, {
                                overlay: this.renderMenu(),
                                trigger: ["click"]
                            }, r.createElement(mc, null, r.createElement(fc, null, r.createElement(O.a, {
                                type: "plus"
                            }), "Добавить объект")))
                        }
                    }]), n
                }(r.PureComponent),
                yc = new Set(["axes", "cameraFolder"]);
            var gc = {
                    createMathObject: function(e, t, n, r) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                        return {
                            type: "CREATE_MATH_OBJECT",
                            name: t,
                            payload: {
                                parentFolderId: n,
                                positionInFolder: r,
                                id: e,
                                settings: a
                            }
                        }
                    },
                    setActiveObject: Jt,
                    setContentCollapsed: function(e, t) {
                        return re(e, Kt, "isCollapsed", t)
                    }
                },
                Oc = Object(qt.b)((function(e) {
                    var t = e.activeObject,
                        n = e.sortableTree,
                        r = n.root,
                        a = function(e, t) {
                            if (null === t) return null;
                            if (e[t]) return yc.has(t) ? null : t;
                            var n = $t(e, t);
                            return yc.has(n) ? null : n
                        }(n, t);
                    if (0 === Object.keys(r).length) throw Error("root folder requires at least 1 child");
                    var i = a || r[r.length - 1];
                    return {
                        targetFolder: i,
                        newFolderIndex: r.indexOf(i) + 1,
                        newItemIndex: n[i].includes(t) ? n[i].indexOf(t) + 1 : 0
                    }
                }), gc)(bc),
                Ec = n(393),
                jc = n(8),
                xc = n(387),
                Cc = document.getElementById("mathbox"),
                wc = Ec.a({
                    plugins: ["core", "controls", "cursor"],
                    controls: {
                        klass: xc.a
                    },
                    element: Cc,
                    camera: {
                        up: new jc.a(0, 0, 1)
                    }
                });
            wc.three.camera.position.set(1, 1, 2), wc.three.renderer.setClearColor(new xe.a(16777215), 1);
            var kc = function(e) {
                Object(v.a)(n, e);
                var t = Object(b.a)(n);

                function n(e) {
                    var r;
                    return Object(h.a)(this, n), (r = t.call(this, e)).handleRenderErrors = r.handleRenderErrors.bind(Object(m.a)(r)), r
                }
                return Object(f.a)(n, [{
                    key: "handleRenderErrors",
                    value: function(e, t, n) {
                        var r = this.props.setError;
                        Object.keys(e).filter((function(t) {
                            return null !== e[t]
                        })).forEach((function(n) {
                            var a = e[n].message;
                            r(t, n, new ee(a))
                        }));
                        var a = this.props.renderErrors;
                        Object.keys(a[t]).filter((function(e) {
                            return n.hasOwnProperty(e)
                        })).filter((function(t) {
                            return !e.hasOwnProperty(t)
                        })).forEach((function(e) {
                            r(t, e, new ee)
                        })), Object.keys(e).filter((function(e) {
                            return a[t].hasOwnProperty(e)
                        })).filter((function(t) {
                            return null === e[t]
                        })).forEach((function(e) {
                            r(t, e, new ee)
                        }))
                    }
                }, {
                    key: "renderGraphic",
                    value: function(e, t) {
                        var n = Yi[t.type].mathboxComponent,
                            r = "number" === typeof t.opacity ? 100 * (1 - t.opacity) : 0;
                        return a.a.createElement(n, Object.assign({
                            id: e,
                            key: e,
                            zOrder: r
                        }, t, {
                            handleErrors: this.handleRenderErrors
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.mathGraphics,
                            r = t.evalErrors,
                            i = t.setError;
                        return a.a.createElement(kr, null, (function(t) {
                            var c = t.scope;
                            t.scopeDiff;
                            return a.a.createElement(Ee, {
                                mathbox: wc
                            }, a.a.createElement(st, {
                                id: "rootCartesian"
                            }, e.props.order.map((function(t) {
                                var a, s = n[t],
                                    l = r[t],
                                    u = Yi[s.type].computedProps,
                                    d = (a = s, u.reduce((function(e, t) {
                                        return e[t] = a[t], e
                                    }), {})),
                                    p = Mr(tr, d, c),
                                    h = p.evaluated;
                                return Lr(t, p.evalErrors, l, i), e.renderGraphic(t, Object(o.a)(Object(o.a)({}, s), h))
                            }))))
                        }))
                    }
                }]), n
            }(r.PureComponent);

            function Pc() {
                var e = Object(y.a)(["\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 0;\n  max-width:0px;\n  padding-right: calc(100vw + 400px);\n  margin-right: -100vw;\n  position: absolute;\n  bottom:0;\n  top: 65px;\n"]);
                return Pc = function() {
                    return e
                }, e
            }

            function Tc() {
                var e = Object(y.a)(["\n  overflow-x:visible;\n  height:100%;\n  pointer-events: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 1;\n  width:100%;\n  /* The z-index means that elements overflowing from ScrollingDivInner into\n  PaddingCover still trigger the current pointer events within their\n  overflowing region */\n  z-index:10;\n"]);
                return Tc = function() {
                    return e
                }, e
            }

            function Sc() {
                var e = Object(y.a)(["\n  display:flex;\n  overflow-y: scroll;\n  padding-right: 100vw;\n  margin-right: -100vw;\n  height: 100%;\n"]);
                return Sc = function() {
                    return e
                }, e
            }
            var Ac = g.c.div(Sc()),
                Rc = g.c.div(Tc()),
                Ic = g.c.div(Pc());
            var Vc = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n(e) {
                        var a;
                        return Object(h.a)(this, n), (a = t.call(this, e)).eventNames = ["pointerdown", "pointermove", "pointerup", "pointercancel", "wheel", "mousewheel"], a.domElement = wc.three.controls.domElement, a.forwardEvent = function(e) {
                            ! function(e, t) {
                                t.stopPropagation(), t.preventDefault();
                                var n = new t.constructor(t.type, t);
                                e.dispatchEvent(n)
                            }(a.domElement, e)
                        }, a.coverRef = r.createRef(), a
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = this.coverRef.current;
                            if (null !== t) {
                                var n = {
                                    passive: !1
                                };
                                this.eventNames.forEach((function(r) {
                                    t.addEventListener(r, e.forwardEvent, n)
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this,
                                t = this.coverRef.current;
                            null !== t && this.eventNames.forEach((function(n) {
                                t.removeEventListener(n, e.forwardEvent)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.createElement(Ac, null, r.createElement(Rc, null, this.props.children), r.createElement(Ic, {
                                ref: this.coverRef
                            }))
                        }
                    }]), n
                }(r.PureComponent),
                Dc = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).onChange = function(t) {
                            e.props.setActiveTab(e.props.id, t)
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = (e.id, Object(c.a)(e, ["id"]));
                            return r.createElement(ya.a, Object.assign({}, t, {
                                onChange: this.onChange
                            }))
                        }
                    }]), n
                }(r.PureComponent),
                Nc = {
                    setActiveTab: function(e, t) {
                        return {
                            type: "SET_ACTIVE_TAB",
                            payload: {
                                activeTab: t,
                                id: e
                            }
                        }
                    }
                },
                _c = Object(qt.b)((function(e, t) {
                    return {
                        activeKey: e.tabs[t.id].activeTab
                    }
                }), Nc)(Dc),
                Mc = ya.a.TabPane;

            function Lc() {
                var e = Object(y.a)(["\n  &.ant-tabs {\n    overflow: visible;\n    height: calc(100% - ", "px);\n  }\n  & .ant-tabs-bar {\n    height: 65px;\n    margin-bottom: 0px;\n  }\n  & > .ant-tabs-content {\n    height: calc(100% - 65px);\n  }\n  & > .ant-tabs-content > ant-tabs-tabpane {\n    height: 100%;\n  }\n"]);
                return Lc = function() {
                    return e
                }, e
            }
            var Fc = new Set(["AXIS", "GRID", "CAMERA"]),
                zc = [vo.type].concat(Object(ce.a)(Object.keys(Yi).filter((function(e) {
                    return !Fc.has(e)
                })).sort()), Object(ce.a)(Object.keys(to).sort())).map((function(e) {
                    return {
                        type: e,
                        description: yo[e].defaultSettings.description,
                        support: yo[e].support
                    }
                })),
                Uc = Object(g.c)(_c)(Lc(), 48),
                Bc = function() {
                    return a.a.createElement(rc, {
                        id: "main"
                    }, a.a.createElement(Uc, {
                        id: "controls",
                        tabBarExtraContent: a.a.createElement(Oc, {
                            menuItems: zc
                        })
                    }, a.a.createElement(Mc, {
                        tab: "Главная",
                        key: "1"
                    }, a.a.createElement(Vc, null, a.a.createElement(sc, {
                        root: "root"
                    }))), a.a.createElement(Mc, {
                        tab: a.a.createElement("span", null, " Оси & ", a.a.createElement("br", null), " камера"),
                        key: "2"
                    }, a.a.createElement(Vc, null, a.a.createElement(sc, {
                        root: "setup"
                    })))))
                },
                Hc = n(125),
                Gc = n.n(Hc),
                Xc = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "resize",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                n = e.isSmall,
                                r = e.closeDrawer,
                                a = e.openDrawer,
                                i = e.setWidth;
                            n ? (r(t), i(t, "290px")) : (a(t), i(t, "400px"))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.resize()
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.resize()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(a.a.PureComponent),
                Zc = {
                    openDrawer: Y,
                    closeDrawer: W,
                    setWidth: function(e, t) {
                        return {
                            type: "SET_WIDTH",
                            payload: {
                                id: e,
                                width: t
                            }
                        }
                    }
                },
                Wc = Object(qt.b)(null, Zc)(Gc()((function(e) {
                    return {
                        isSmall: e.width < 480
                    }
                }))(Xc));

            function Yc() {
                return a.a.createElement(r.Fragment, null, a.a.createElement(Bc, null), a.a.createElement(Wc, {
                    id: "main"
                }))
            }

            function qc() {
                var e = Object(y.a)(["\n    transition-duration: 0s;\n  "]);
                return qc = function() {
                    return e
                }, e
            }

            function Jc() {
                var e = Object(y.a)(["\n  width: 100%;\n  transform: translateX(", ");\n  transition-duration: 1s;\n  & ", "\n"]);
                return Jc = function() {
                    return e
                }, e
            }
            var $c = g.c.div(Jc(), (function(e) {
                    return e.leftOffset
                }), (function(e) {
                    return !e.isAnimating && Object(g.b)(qc())
                })),
                Kc = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).assignRef = function(t) {
                            e.ref = t
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.mathboxElement;
                            e.parentNode.removeChild(e), this.ref.appendChild(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return a.a.createElement($c, {
                                leftOffset: this.props.leftOffset,
                                ref: this.assignRef
                            }, this.props.children)
                        }
                    }]), n
                }(r.PureComponent);

            function Qc(e) {
                return e.drawers.main.isAnimating
            }

            function es(e) {
                return e.drawers.main.isVisible ? "".concat(-200, "px") : "0px"
            }
            var ts = Object(qt.b)((function(e, t) {
                    return {
                        leftOffset: es(e),
                        isAnimating: Qc(e)
                    }
                }))(Kc),
                ns = {
                    setError: te
                },
                rs = Object(qt.b)((function(e) {
                    var t = e.mathGraphics;
                    return {
                        mathGraphics: t,
                        evalErrors: e.evalErrors,
                        renderErrors: e.renderErrors,
                        order: Object.keys(t)
                    }
                }), ns)(kc);

            function as() {
                var e = Object(y.a)(["\n  display:flex;\n  height:100%;\n  overflow: hidden;\n  flex: 1;\n"]);
                return as = function() {
                    return e
                }, e
            }
            var is = g.c.div(as()),
                os = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement(is, null, a.a.createElement(ts, {
                                mathboxElement: Cc
                            }, a.a.createElement(rs, null)))
                        }
                    }]), n
                }(r.PureComponent),
                cs = n(989);

            function ss(e) {
                var t = e.data;
                return a.a.createElement("ul", null, t.map((function(e, t) {
                    return a.a.createElement("li", {
                        key: t
                    }, a.a.createElement(cs.a, {
                        to: "/".concat(e.id)
                    }, e.title), e.description)
                })))
            }
            var ls = [{
                    id: "sliders_intro",
                    title: "Использование переменных ползунков"
                }, {
                    id: "sliders_plotrange",
                    title: "Использование ползунков для анимации диапазона графика"
                }, {
                    id: "color_and_visibility",
                    title: "Цвет и видимость"
                }, {
                    id: "vectors",
                    title: "Векторы"
                }, {
                    id: "labels",
                    title: "Маркировка точек, векторов и линий"
                }, {
                    id: "functions",
                    title: "Использование функций"
                }, {
                    id: "derivatives",
                    title: "diff: использование производных"
                }, {
                    id: "calculated_visibility",
                    title: "Управление видимостью нескольких объектов с помощью переключателей"
                }, {
                    id: "z_bias",
                    title: "Точная настройка видимости с помощью z-bias"
                }, {
                    id: "tnb",
                    title: "Векторы TNB для параметрических кривых"
                }, {
                    id: "animate_camera",
                    title: "Анимация положения камеры"
                }],
                us = [{
                    id: "motion",
                    title: "Движение: скорость и ускорение"
                }, {
                    id: "ruled_hyperboloid",
                    title: "Управляемый гиперболоид"
                }, {
                    id: "horizontal_revolution_washer",
                    title: "Поверхность вращения: метод шайбы (горизонтальная ось)"
                }, {
                    id: "vertical_revolution_shell_method",
                    title: "Поверхность вращения: метод оболочки (вертикальная ось)"
                }, {
                    id: "sphere_colormap",
                    title: "Цветные карты на сфере"
                }, {
                    id: "osculating_circle",
                    title: "Соприкасающийся круг"
                }],
                ds = function(e) {
                    return a.a.createElement(rc, {
                        id: "examples",
                        slideTo: "right"
                    }, a.a.createElement(_c, {
                        id: "examples"
                    }, a.a.createElement(Mc, {
                        key: "1",
                        tab: "Демонстрации функций"
                    }, a.a.createElement(ss, {
                        data: ls
                    })), a.a.createElement(Mc, {
                        key: "2",
                        tab: "Аккуратные примеры"
                    }, a.a.createElement(ss, {
                        data: us
                    }))))
                },
                ps = n(985);

            function hs(e) {
                var t = r.useState(!1),
                    n = Object(oe.a)(t, 2),
                    a = n[0],
                    i = n[1];

                function o(t) {
                    i(t), e.onVisibleChange && e.onVisibleChange(t)
                }
                return e.useModal ? r.createElement(r.Fragment, null, r.createElement(ps.a, {
                    title: e.title,
                    visible: a,
                    onCancel: function() {
                        return o(!a)
                    },
                    maskClosable: !0,
                    style: {
                        maxWidth: e.popoverMaxWidth
                    },
                    footer: [r.createElement(Ur.a, {
                        key: "ok",
                        onClick: function() {
                            return o(!a)
                        }
                    }, "OK")]
                }, e.children), r.createElement("span", {
                    onClick: function() {
                        return o(!a)
                    }
                }, e.source)) : r.createElement(ga.a, {
                    placement: e.popoverPlacement,
                    overlayStyle: {
                        maxWidth: e.popoverMaxWidth
                    },
                    title: e.title,
                    content: e.children,
                    onVisibleChange: function() {
                        return o(!a)
                    },
                    trigger: "click"
                }, e.source)
            }
            hs.defaultProps = {
                popoverPlacement: "bottomRight",
                popoverMaxWidth: "300px"
            };
            var fs = Gc()((function(e) {
                    return {
                        useModal: e.width < 570
                    }
                }))(hs),
                ms = function() {
                    var e = Object(ye.a)(be.a.mark((function e(t) {
                        return be.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", fetch("api/graph/".concat(t), {
                                        method: "GET",
                                        headers: {}
                                    }).then((function(e) {
                                        return e.json()
                                    })));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                vs = function() {
                    var e = Object(ye.a)(be.a.mark((function e(t, n) {
                        var r;
                        return be.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = {
                                        urlKey: t,
                                        dehydrated: n
                                    }, e.abrupt("return", fetch("/api/graph", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(r)
                                    }).then((function(e) {
                                        return e.json()
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                bs = n(390),
                ys = n.n(bs),
                gs = n(391),
                Os = function() {
                    return {
                        position: wc.three.camera.position.toArray(),
                        lookAt: wc.three.controls.target.toArray()
                    }
                };

            function Es() {
                var e = Object(y.a)(["\n  font-size: 125%;\n  width: 75px;\n  margin: 10px;\n  color: ", ";\n  font-weight: strong;\n  visibility: ", ";\n  animation: ", " 100ms linear;\n"]);
                return Es = function() {
                    return e
                }, e
            }

            function js() {
                var e = Object(y.a)(["\n  from { opacity: 0 }\n  to { opacity: 1 }\n"]);
                return js = function() {
                    return e
                }, e
            }

            function xs() {
                var e = Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]);
                return xs = function() {
                    return e
                }, e
            }

            function Cs() {
                var e = Object(y.a)(["\n  max-width: 300px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);
                return Cs = function() {
                    return e
                }, e
            }
            var ws = ["123456789", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNPQRSTUVWXYZ"].join(""),
                ks = g.c.div(Cs()),
                Ps = g.c.div(xs()),
                Ts = Object(g.d)(js()),
                Ss = g.c.div(Es(), (function(e) {
                    return e.theme.primary[4]
                }), (function(e) {
                    return e.isVisible ? "visible" : "hidden"
                }), (function(e) {
                    return e.isVisible ? Ts : ""
                })),
                As = {
                    margin: "10px"
                },
                Rs = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).state = {
                            id: null,
                            isCopied: !1
                        }, e.saveCameraData = function() {
                            var t = Os(),
                                n = t.position,
                                r = t.lookAt;
                            e.props.setProperty("camera", "CAMERA", "relativePosition", n), e.props.setProperty("camera", "CAMERA", "relativeLookAt", r)
                        }, e.saveGraph = function() {
                            e.saveCameraData(), e.props.setCreationDate();
                            var t = zo(e.props.getState()),
                                n = e.getId({
                                    length: 9,
                                    charset: ws
                                });
                            vs(n, t), e.setState({
                                id: n
                            }), e.dehydratedJson = JSON.stringify(t)
                        }, e.onCopy = function() {
                            e.setState({
                                isCopied: !0
                            })
                        }, e.onVisibleChange = function(t) {
                            t || e.setState({
                                isCopied: !1
                            })
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "getId",
                        value: function(e) {
                            return ys.a.generate(e)
                        }
                    }, {
                        key: "renderContent",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return a.a.createElement(fs, {
                            }, this.renderContent())
                        }
                    }]), n
                }(r.PureComponent),
                Is = {
                    setProperty: re,
                    setCreationDate: function() {
                        return {
                            type: "SET_CREATION_DATE",
                            payload: {
                                creationDate: JSON.stringify(new Date)
                            }
                        }
                    }
                },
                Vs = Object(qt.b)(null, Is)(Rs);

            function Ds() {
                var e = Object(y.a)(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"]);
                return Ds = function() {
                    return e
                }, e
            }
            var Ns = g.c.span(Ds(), (function(e) {
                return e.theme.gray[5]
            }), (function(e) {
                return "brand" === e.type ? "130%" : "115%"
            }), (function(e) {
                return "brand" === e.type ? 900 : "default"
            }));

            function _s() {
                var e = Object(y.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  margin-left:8px;\n  font-weight:bold;\n  padding-top:4px;\n"]);
                return _s = function() {
                    return e
                }, e
            }
            var Ms = Object(g.c)(St)(_s());
            var Ls = {
                    setTitle: function(e) {
                        return {
                            type: "SET_TITLE",
                            payload: {
                                title: e
                            }
                        }
                    }
                },
                Fs = Object(qt.b)((function(e) {
                    return {
                        title: e.metadata.title
                    }
                }), Ls)((function(e) {
                    return a.a.createElement(Ms, {
                        value: e.title,
                        onChange: e.setTitle
                    })
                }));

            function zs() {
                var e = Object(y.a)(["\n  font-family: courier;\n  text-decoration: underline;\n"]);
                return zs = function() {
                    return e
                }, e
            }

            function Us() {
                var e = Object(y.a)(["\n  font-size:125%;\n  padding-right:5px;\n"]);
                return Us = function() {
                    return e
                }, e
            }

            function Bs() {
                var e = Object(y.a)(["\n  max-width: 300px;\n  width:300px;\n"]);
                return Bs = function() {
                    return e
                }, e
            }

            function Hs() {
                var e = Object(y.a)(["\n  list-style-type: none;\n  padding-left:0px;\n"]);
                return Hs = function() {
                    return e
                }, e
            }
            var Gs = g.c.ul(Hs()),
                Xs = g.c.div(Bs()),
                Zs = Object(g.c)(O.a)(Us()),
                Ws = g.c.span(zs());

            function Ys() {
                return a.a.createElement(fs, {
                    title: "Создатель",
                    source: a.a.createElement("span", null, a.a.createElement(O.a, {
                        type: "question-circle",
                        style: {
                            paddingRight: "4px"
                        }
                    }), "Создатель")
                }, a.a.createElement(Xs, null, a.a.createElement("p", null, "Автором данного сайта является Дмитриев Егор."), a.a.createElement(Gs, null, a.a.createElement("li", null, a.a.createElement(Zs, {
                    type: "github"
                }), "Github: TheDivort")), a.a.createElement("li", null, a.a.createElement(Zs, {
                    type: "mail"
                }), "Email ", a.a.createElement(Ws, null, "the.egor.mur@gmail.com"))))
            }
            var qs = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        var e;
                        Object(h.a)(this, n);
                        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(a))).onClick = function() {
                            e.props.isVisible ? e.props.closeDrawer("examples") : e.props.openDrawer("examples")
                        }, e
                    }
                    return Object(f.a)(n, [{
                        key: "render",
                        value: function() {
                            return false
                        }
                    }]), n
                }(r.PureComponent),
                Js = {
                    openDrawer: Y,
                    closeDrawer: W
                },
                $s = Object(qt.b)((function(e) {
                    return {
                        isVisible: e.drawers.examples.isVisible
                    }
                }), Js)(qs);

            function Ks() {
                var e = Object(y.a)(["\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  font-size: 150%;\n"]);
                return Ks = function() {
                    return e
                }, e
            }
            var Qs = g.c.span(Ks()),
                el = {
                    display: "flex",
                    backgroundColor: Dt.gray[1],
                    borderBottom: "1px solid ".concat(Dt.gray[5])
                },
                tl = Gc()((function(e) {
                    return {
                        collapsed: e.width < 570
                    }
                }))((function(e) {
                    return e.collapsed ? r.createElement(uc.a, {
                        overlay: r.createElement(lc.a, null, e.children),
                        trigger: ["click"]
                    }, r.createElement(Ur.a, null, r.createElement(Qs, null, r.createElement(O.a, {
                        type: "menu-unfold"
                    })))) : r.createElement(lc.a, {
                        style: el,
                        mode: "horizontal"
                    }, e.children)
                }));

            function nl() {
                var e = Object(y.a)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  display:flex;\n  align-items:center;\n"]);
                return nl = function() {
                    return e
                }, e
            }

            function rl() {
                var e = Object(y.a)(["\n  background-color: ", ";\n  height: ", "px;\n  display:flex;\n  width:100%;\n  align-items:center;\n  justify-content: space-between;\n  border-bottom: 1pt solid ", ";\n"]);
                return rl = function() {
                    return e
                }, e
            }
            var al = lc.a.Item,
                il = g.c.div(rl(), (function(e) {
                    return e.theme.gray[1]
                }), 48, (function(e) {
                    return e.theme.gray[5]
                })),
                ol = g.c.div(nl()),
                cl = function() {
                    return a.a.createElement(il, null, a.a.createElement(ol, null, a.a.createElement(Ns, {
                        type: "brand"
                    }, ""), a.a.createElement(Fs, null)), a.a.createElement(ol, null, a.a.createElement(tl, null, a.a.createElement(al, null, a.a.createElement($s, null)), a.a.createElement(al, null, a.a.createElement(Vs, {
                        getState: Ko.getState
                    })), a.a.createElement(al, null, a.a.createElement(Ys, null)))))
                };
            var sl = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.graphId && this.props.loadGraphFromDb(this.props.graphId), this.props.setLastSavedState()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.props.graphId ? this.props.loadGraphFromDb(this.props.graphId) : this.props.loadDehydratedState(Do)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return a.a.createElement(tc, {
                                style: {
                                    overflow: "hidden",
                                    flexDirection: "column"
                                }
                            }, a.a.createElement(cl, null), a.a.createElement(tc, null, a.a.createElement(Yc, null), a.a.createElement(os, null), a.a.createElement(ds, null)))
                        }
                    }]), n
                }(r.PureComponent),
                ll = {
                    loadGraphFromDb: function(e) {
                        return function() {
                            var t = Object(ye.a)(be.a.mark((function t(n) {
                                var r, a, i;
                                return be.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, ms(e);
                                        case 2:
                                            if (r = t.sent, !(a = r.dehydrated)) {
                                                t.next = 9;
                                                break
                                            }
                                            return i = Bo(a), t.abrupt("return", n(i));
                                        case 9:
                                            console.group(), console.warn("Graph ".concat(e, " not found")), console.groupEnd();
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    },
                    loadDehydratedState: Bo,
                    setLastSavedState: function() {
                        return function(e, t) {
                            var n = l()(t());
                            return e({
                                type: "SET_SAVED_STATE",
                                payload: {
                                    state: n
                                }
                            })
                        }
                    }
                },
                ul = Object(qt.b)(null, ll)(sl),
                dl = n(990),
                pl = n(395),
                hl = function(e) {
                    Object(v.a)(n, e);
                    var t = Object(b.a)(n);

                    function n() {
                        return Object(h.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(f.a)(n, [{
                        key: "legacyReRoute",
                        value: function(e) {
                            var t = e.match;
                            window.location = "https://math3d.herokuapp.com/graph/".concat(t.params.id)
                        }
                    }, {
                        key: "renderGraph",
                        value: function(e) {
                            var t = e.match;
                            return a.a.createElement(ul, {
                                graphId: t.params.id
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return a.a.createElement(dl.a, null, a.a.createElement(pl.a, {
                                exact: !0,
                                path: "/graph/:id",
                                render: this.legacyReRoute
                            }), a.a.createElement(pl.a, {
                                exact: !0,
                                path: "/:id",
                                render: this.renderGraph
                            }), a.a.createElement(pl.a, {
                                exact: !0,
                                path: "/",
                                render: this.renderGraph
                            }))
                        }
                    }]), n
                }(r.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var fl = n(392),
                ml = n.n(fl);
            var vl = n(988),
                bl = n(249);
            bl.a.initialize("UA-131928751-1", {
                testMode: !1
            }), bl.a.pageview(window.location.pathname + window.location.search), window.addEventListener("beforeunload", (function(e) {
                var t = Ko.getState();
                (function(e, t) {
                    var n = new Set(["drawers", "tabs", "sliderValues", "lastSavedState", "activeObject"]);
                    return Object.keys(e).filter((function(e) {
                        return !n.has(e)
                    })).some((function(n) {
                        var r = t[n],
                            a = e[n];
                        return !ml()(a, r)
                    }))
                })(t, t.lastSavedState) && (e.preventDefault(), e.returnValue = "")
            }));
            var yl = document.querySelector("#root");
            Object(Qo.render)(a.a.createElement(qt.a, {
                store: Ko
            }, a.a.createElement(na, {
                scopeEvaluator: nr,
                parser: tr
            }, a.a.createElement(g.a, {
                theme: Dt
            }, a.a.createElement(vl.a, null, a.a.createElement(hl, null))))), yl), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [397, 1, 2]
    ]
]);
