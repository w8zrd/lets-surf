(() => {
    "use strict";
    var e, t = {
            14893: (e, t, s) => {
                s.d(t, {
                    p: () => a
                });
                var i = s(89526);

                function a(e) {
                    return i.createElement("svg", {
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        className: e,
                        "aria-hidden": !0
                    }, i.createElement("path", {
                        d: "M4.09 4.22l.06-.07a.5.5 0 01.63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 01.63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 01-.63.06l-.07-.06a.5.5 0 01-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 01-.06-.63l.06-.07-.06.07z",
                        fillRule: "nonzero"
                    }))
                }
            },
            32301: (e, t, s) => {
                function i(e) {
                    ! function(e, t) {
                        if (!e) {
                            let e = "Assertion failed";
                            t && (e = e + ": " + t);
                            const s = new Error(e);
                            throw function() {
                                const e = this || self;
                                return e.traceAssertionsForTesting, e
                            }().traceAssertionsForTesting && console.warn(s.stack), s
                        }
                    }(!1, e || "Unreachable code hit")
                }
                s.d(t, {
                    P2: () => i
                })
            },
            85774: (e, t, s) => {
                s.d(t, {
                    yt: () => r
                });
                var i = s(87685);
                let a = 1;

                function o() {
                    return a++
                }
                const n = {};

                function r(e, t) {
                    const s = Array.prototype.slice.call(arguments, 1),
                        a = new i.h,
                        r = e + "_" + o();
                    return n[r] = a, /*chrome.send(e, [r].concat(s)), */ a.promise
                }
                const l = {};
                window.cr = window.cr || {}, window.cr.webUIResponse = function(e, t, s) {
                    const i = n[e];
                    delete n[e], t ? i.resolve(s) : i.reject(s)
                }, window.cr.webUIListenerCallback = function(e, t) {
                    const s = l[e];
                    if (!s) return;
                    const i = Array.prototype.slice.call(arguments, 1);
                    for (const e in s) s[e].apply(null, i)
                };
                /Mac/.test(navigator.platform), /Win/.test(navigator.platform), /Linux/.test(navigator.userAgent), /Android/.test(navigator.userAgent), /EdgiOS/.test(navigator.userAgent)
            },
            87685: (e, t, s) => {
                s.d(t, {
                    h: () => a
                });
                var i = s(32301),
                    a = class {
                        constructor() {
                            this.resolve_, this.reject_, this.isFulfilled_ = !1, this.promise_ = new Promise(((e, t) => {
                                this.resolve_ = t => {
                                    e(t), this.isFulfilled_ = !0
                                }, this.reject_ = e => {
                                    t(e), this.isFulfilled_ = !0
                                }
                            }))
                        }
                        get isFulfilled() {
                            return this.isFulfilled_
                        }
                        set isFulfilled(e) {
                            (0, i.P2)()
                        }
                        get promise() {
                            return this.promise_
                        }
                        set promise(e) {
                            (0, i.P2)()
                        }
                        get resolve() {
                            return this.resolve_
                        }
                        set resolve(e) {
                            (0, i.P2)()
                        }
                        get reject() {
                            return this.reject_
                        }
                        set reject(e) {
                            (0, i.P2)()
                        }
                    }
            },
            82870: (e, t, s) => {
                var i = s(73961),
                    a = s(89526),
                    o = s(87958),
                    n = s(82090),
                    r = s(47861),
                    l = s(6098),
                    h = s(18169),
                    c = s(34328),
                    d = s(17332),
                    p = s(48863),
                    b = s(51094),
                    g = s(46589),
                    u = s(38066),
                    m = s(14570);
                const y = {
                        toggle_toggleButton: {
                            float: (0, p.zw)("right", "left"),
                            marginInlineStart: "5px"
                        },
                        toggle_statusMessage: {
                            paddingInlineStart: "0px"
                        }
                    },
                    f = {
                        button: {
                            height: "fit-content",
                            overflow: "visible",
                            marginBottom: "16px"
                        }
                    },
                    w = {
                        button: {
                            height: "28px",
                            width: "fit-content"
                        }
                    },
                    H = {
                        settingsHamburgerMenu: {
                            display: "block",
                            marginInlineStart: "auto",
                            marginBottom: "4px",
                            backgroundColor: "transparent"
                        },
                        settingsHamburgerMenu_settingsButton: {
                            height: "20px",
                            width: "20px",
                            color: "currentColor",
                            fill: "currentColor"
                        },
                        settingsHamburgerMenu_closeButton: {
                            ...(0, m.b)(l.fn, g.k8, g.k8),
                            position: "absolute",
                            top: "0",
                            margin: "6px",
                            [(0, p.Ih)("right", "left", l.fn.direction)]: "0",
                            "& $settingsHamburgerMenu_closeButton_icon": {
                                ...(0, u.Zb)()
                            }
                        },
                        settingsHamburgerMenu_closeButton_icon: {},
                        settingsHamburgerMenu_flyout_buttonSection: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        settingsHamburgerMenu_flyout_divider: {
                            margin: "4px -16px"
                        },
                        settingsHamburgerMenu_flyout: {
                            padding: "16px"
                        },
                        settingsHamburgerMenu_flyout_label: {
                            margin: "0 0 0.5em",
                            display: "block"
                        },
                        settingsHamburgerMenu_flyout_score: {
                            marginTop: "8px",
                            display: "flex",
                            alignItems: "center"
                        },
                        settingsHamburgerMenu_flyout_scoreStar: {
                            height: "16px",
                            width: "16px",
                            color: "currentColor",
                            fill: "currentColor",
                            marginInlineEnd: "4px"
                        },
                        settingsHamburgerMenu_flyout_shareRow: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "6px 0"
                        },
                        settingsHamburgerMenu_flyout_toggleRow: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: "6px 0"
                        },
                        settingsHamburgerMenu_centered: {
                            margin: "0 auto"
                        },
                        settingsHamburgerMenu_icon: {
                            color: b.CH,
                            fill: "currentColor"
                        },
                        settingsHamburgerMenu_creditsTable: {
                            margin: "0 auto",
                            color: b.CH
                        },
                        settingsHamburgerMenu_creditsTable_specialThanks: {
                            marginTop: "8px",
                            marginBottom: "4px"
                        }
                    };
                var v = s(71388),
                    V = s(87841),
                    x = s(92588),
                    M = s(90305),
                    S = s(2483),
                    C = s(49838),
                    k = s(99683),
                    Z = s(12994),
                    T = s(73252),
                    P = s(57880),
                    E = s(18158),
                    I = s(20917),
                    L = s(98401),
                    D = s(37879),
                    _ = s(11754),
                    z = s(37834),
                    O = s(52502),
                    R = s(57481),
                    N = s(45191);
                var A = s(14893);

                function F(e) {
                    return a.createElement("svg", {
                        "aria-hidden": "true",
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        className: e
                    }, a.createElement("path", {
                        d: "M3.37 10.17a.5.5 0 00-.74.66l4 4.5c.19.22.52.23.72.02l10.5-10.5a.5.5 0 00-.7-.7L7.02 14.27l-3.65-4.1z"
                    }))
                }

                function B(e) {
                    return a.createElement("svg", {
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        className: e
                    }, a.createElement("path", {
                        d: "M8 6a.5.5 0 01.09 1H6a3 3 0 00-.2 6H8a.5.5 0 01.09 1H6a4 4 0 01-.22-8H8zm6 0a4 4 0 01.22 8H12a.5.5 0 01-.09-1H14a3 3 0 00.2-6H12a.5.5 0 01-.09-1H14zM6 9.5h8a.5.5 0 01.09 1H6a.5.5 0 01-.09-1H14 6z",
                        fillRule: "nonzero"
                    }))
                }
                var q = s(3117);

                function j(e) {
                    switch (e) {
                        case "timetrial":
                        case "SPEED":
                            return G.TimeTrial;
                        case "BUOY":
                        case "zigzag":
                            return G.ZigZag;
                        case "CLASSIC":
                        case "endless":
                        default:
                            return G.Endless
                    }
                }
                let G;
                ! function(e) {
                    e.ZigZag = "zigzag", e.Endless = "endless", e.TimeTrial = "timetrial"
                }(G || (G = {}));
                var K = s(85774);
                const U = {
                    ski: {
                        gradient: {
                            start: [244, 244, 244],
                            end: [222, 222, 222]
                        },
                        hitbox: {
                            crash: "#000000",
                            boost: "#00FF00",
                            avoid: "#FF0000"
                        },
                        boundary: [0, 0, 0, .1],
                        accent: [216, 140, 249],
                        folder: "ski"
                    },
                    surf: {
                        gradient: {
                            start: [56, 194, 238],
                            end: [46, 195, 208]
                        },
                        hitbox: {
                            crash: "#000000",
                            boost: "#00FF00",
                            avoid: "#FF0000"
                        },
                        boundary: [255, 255, 255, .2],
                        accent: [141, 249, 196],
                        folder: "surf"
                    }
                };

                function W(e) {
                    // return e in U ? e : "surf"
                    switch (e) {
                        case "surf":
                            return e in K ? e : "surf";
                        case "ski":
                            return e in K ? e : "ski";
                        default:
                            return e in K ? e : "surf"
                    }
                }
                var $ = s(27670);

                function X(e) {
                    if ("number" != typeof e) return "----";
                    let t = 14,
                        s = 8;
                    return e < 0 && (e = 3599), e >= 3600 && (t = 12, s = 10), new Date(1e3 * e).toISOString().substr(t, s)
                }

                function Y(e) {
                    navigator.clipboard.writeText(e)
                }
                class J {
                    constructor() {
                        if (this.localData = void 0, J.offline) return J.offline;
                        J.offline = this, this.loadData(), he.subscribe(this.loadData.bind(this))
                    }
                    loadData() {
                        const e = he.getState();
                        this.localData = {
                            settings: {
                                character: e.currentCharacter,
                                theme: e.theme,
                                mode: e.mode,
                                hitbox: e.highVisibilityMode,
                                gameSpeed: e.gameSpeed
                            },
                            bestScore: {
                                endless: e.endless_bestScore,
                                timetrial: e.timetrial_bestScore,
                                zigzag: e.zigzag_bestScore
                            }
                        }
                    }
                    saveData(e) {
                        he.dispatch(ne(e)), ce.saveZigZagHighScore(e.zigzag_bestScore), ce.saveEndlessHighScore(e.endless_bestScore), ce.saveTimeTrialHighScore(e.timetrial_bestScore), ce.saveGameMode(e.mode), ce.saveHighVisibilityMode(e.highVisibilityMode), ce.saveReducedSpeedMode(e.gameSpeed < ie), ce.saveDefaultCharacter(e.currentCharacter), ce.saveDefaultTheme(e.theme)
                    }
                    resetData() {
                        he.dispatch(re()), ce.resetAllStats()
                    }
                    getCommonStats(e, t) {
                        const s = se.sys.game;
                        return {
                            gameMode: e,
                            score: e === G.TimeTrial ? Math.floor(1e3 * t) : t,
                            konamiCodeUsed: s.cheat.used,
                            msftCodeUsed: s.cheat.lives,
                            edgeCodeUsed: s.cheat.boosts,
                            powerUpsUsed: s.boosts.numUsed,
                            powerUpsCollected: s.boosts.numCollected
                        }
                    }
                    storeEndlessStats() {
                        const e = se.sys.getCurrentScore(),
                            t = se.sys.session.bestScore.endless,
                            s = se.sys.game;
                        ce.recordGameEnd({
                            ...this.getCommonStats(G.Endless, e),
                            loseCondition: s.caught ? "kraken" : "lives",
                            dogCollected: s.friend
                        }), !s.cheat.used && e > t && (se.sys.session.bestScore.endless = e, s.highScore = !0, this.saveData({
                            ...he.getState(),
                            endless_bestScore: e
                        }))
                    }
                    storeTimeTrialStats() {
                        const e = se.sys.getCurrentScore(),
                            t = se.sys.session.bestScore.timetrial,
                            s = se.sys.game;
                        ce.recordGameEnd({
                            ...this.getCommonStats(G.TimeTrial, e),
                            livesCollected: s.lives.numCollected
                        }), !s.cheat.used && (e < t || t < 0) && s.finish && (se.sys.session.bestScore.timetrial = e, s.highScore = !0, this.saveData({
                            ...he.getState(),
                            timetrial_bestScore: e
                        }))
                    }
                    storeZigZagStreak() {
                        const e = se.sys.getCurrentScore(),
                            t = se.sys.session.bestScore.zigzag,
                            s = se.sys.game;
                        ce.recordGameEnd(this.getCommonStats(G.ZigZag, e)), !s.cheat.used && e > t && (se.sys.session.bestScore.zigzag = e, s.highScore = !0, this.saveData({
                            ...he.getState(),
                            zigzag_bestScore: e
                        }))
                    }
                }

                function Q() {
                    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
                }
                let ee, te;
                J.offline = void 0,
                    function(e) {
                        e.Menu = "menu", e.Play = "play", e.Pause = "pause", e.Over = "over"
                    }(ee || (ee = {})),
                    function(e) {
                        e.Keyboard = "keyboard", e.Mouse = "mouse", e.Touch = "touch", e.Xbox = "xbox", e.Ps = "ps"
                    }(te || (te = {}));
                class se {
                    constructor() {
                        if (this.session = void 0, this.game = void 0, se.sys) return se.sys;
                        se.sys = this, this.defineSessionSettings(), this.resetGameData(), he.subscribe(this.loadSessionSettings.bind(this))
                    }
                    defineSessionSettings() {
                        const e = he.getState();
                        this.session = {
                            settings: {
                                mode: e.mode,
                                theme: e.theme,
                                character: e.currentCharacter,
                                hitbox: e.highVisibilityMode,
                                gameSpeed: e.gameSpeed
                            },
                            bestScore: {
                                endless: e.endless_bestScore,
                                timetrial: e.timetrial_bestScore,
                                zigzag: e.zigzag_bestScore
                            },
                            state: ee.Menu,
                            flyoutActive: !1,
                            forcedColors: !1,
                            inputType: Q() ? te.Touch : te.Keyboard,
                            w: 0,
                            h: 0,
                            x: 0,
                            y: 0
                        }
                    }
                    saveSessionSettings() {
                        J.offline.saveData({
                            mode: this.session.settings.mode,
                            theme: this.session.settings.theme,
                            currentCharacter: this.session.settings.character,
                            highVisibilityMode: this.session.settings.hitbox,
                            gameSpeed: this.session.settings.gameSpeed,
                            endless_bestScore: this.session.bestScore.endless,
                            zigzag_bestScore: this.session.bestScore.zigzag,
                            timetrial_bestScore: this.session.bestScore.timetrial,
                            gameState: this.session.state
                        })
                    }
                    loadSessionSettings() {
                        const e = he.getState();
                        this.session.settings.mode = e.mode, this.session.settings.theme = e.theme, this.session.settings.character = e.currentCharacter, this.session.settings.hitbox = e.highVisibilityMode, this.session.settings.gameSpeed = e.gameSpeed, this.session.bestScore.endless = e.endless_bestScore, this.session.bestScore.timetrial = e.timetrial_bestScore, this.session.bestScore.zigzag = e.zigzag_bestScore
                    }
                    saveGameStats() {
                        switch (this.session.settings.mode) {
                            case G.Endless:
                                J.offline.storeEndlessStats();
                                break;
                            case G.TimeTrial:
                                J.offline.storeTimeTrialStats();
                                break;
                            case G.ZigZag:
                                J.offline.storeZigZagStreak()
                        }
                    }
                    getCurrentScore() {
                        switch (this.session.settings.mode) {
                            case G.Endless:
                                return Math.floor(this.game.dist.unit);
                            case G.TimeTrial:
                                return this.game.time.elapsed - 2 * this.game.coins;
                            case G.ZigZag:
                                return this.game.gates
                        }
                    }
                    getCurrentScoreFormatted() {
                        const e = this.getCurrentScore();
                        switch (this.session.settings.mode) {
                            case G.Endless:
                            case G.ZigZag:
                                return e.toString();
                            case G.TimeTrial:
                                return X(e)
                        }
                    }
                    getHighScore(e) {
                        switch (e) {
                            case G.Endless:
                                return Math.max(this.session.bestScore.endless, 0).toString();
                            case G.TimeTrial:
                                return X(this.session.bestScore.timetrial);
                            case G.ZigZag:
                                return Math.max(this.session.bestScore.zigzag, 0).toString()
                        }
                    }
                    resetGameData() {
                        this.game = {
                            time: {
                                loop: 0,
                                elapsed: 0,
                                scale: 0
                            },
                            dist: {
                                unit: 0,
                                x: 0,
                                y: 0
                            },
                            lives: {
                                current: 3,
                                max: 3,
                                numCollected: 0
                            },
                            boosts: {
                                current: 0,
                                max: 3,
                                numCollected: 0,
                                numUsed: 0
                            },
                            shields: {
                                current: 0,
                                max: 3
                            },
                            gates: 0,
                            coins: 0,
                            finish: !1,
                            friend: !1,
                            caught: !1,
                            highScore: !1,
                            cheat: {
                                used: !1,
                                lives: !1,
                                boosts: !1,
                                safety: !1
                            }
                        }
                    }
                    update(e) {
                        this.game.time.loop = e / 1e3, this.game.time.elapsed += this.game.time.loop, this.game.time.scale = 60 * this.game.time.loop * this.session.settings.gameSpeed
                    }
                    updateDistances(e, t) {
                        this.game.dist.x += e, this.game.dist.y += t, this.game.dist.unit += t / 10
                    }
                    rand(e, t) {
                        return Math.floor(e + (t + 1 - e) * Math.random())
                    }
                    randIndex(e) {
                        if (!Array.isArray(e)) return e;
                        return e[Math.floor(Math.random() * e.length)]
                    }
                }
                se.sys = void 0;
                const ie = 1,
                    ae = {
                        currentCharacter: le("lastSelectedPlayer"),
                        highVisibilityMode: q.p.getBoolean("highVisibilityActive"),
                        gameSpeed: q.p.getBoolean("reducedSpeedActive") ? .5 : ie,
                        mode: j(q.p.getString("lastSelectedMode")),
                        theme: W(q.p.getString("lastSelectedTheme")),
                        gameState: ee.Menu,
                        endless_bestScore: le("endlessBestScore"),
                        timetrial_bestScore: le("timetrialBestScore") < 0 ? -1 : le("timetrialBestScore") / 1e3,
                        zigzag_bestScore: le("zigzagBestScore")
                    };
                var oe;

                function ne(e) {
                    return {
                        type: oe.UPDATE_STATS,
                        ...e
                    }
                }

                function re() {
                    return {
                        type: oe.RESET_STATS,
                        endless_bestScore: -1,
                        zigzag_bestScore: -1,
                        timetrial_bestScore: -1,
                        currentCharacter: 1,
                        theme: "surf"
                    }
                }

                function le(e) {
                    return parseInt(q.p.getValue(e))
                }! function(e) {
                    e.RESET_STATS = "RESET_STATS", e.UPDATE_GAME_STATE = "UPDATE_GAME_STATE", e.UPDATE_STATS = "UPDATE_STATS"
                }(oe || (oe = {}));
                const he = (0, $.MT)((function(e = ae, t) {
                    switch (t.type) {
                        case oe.UPDATE_STATS: {
                            const s = t;
                            return {
                                ...e,
                                currentCharacter: t.currentCharacter,
                                mode: s.mode,
                                highVisibilityMode: s.highVisibilityMode,
                                gameSpeed: s.gameSpeed,
                                theme: s.theme,
                                endless_bestScore: Math.max(e.endless_bestScore, s.endless_bestScore),
                                zigzag_bestScore: Math.max(e.zigzag_bestScore, s.zigzag_bestScore),
                                timetrial_bestScore: e.timetrial_bestScore < 0 ? s.timetrial_bestScore : Math.min(e.timetrial_bestScore, s.timetrial_bestScore)
                            }
                        }
                        case oe.UPDATE_GAME_STATE:
                            return {
                                ...e, gameState: t.gameState
                            };
                        case oe.RESET_STATS:
                            return {
                                ...e, endless_bestScore: t.endless_bestScore, zigzag_bestScore: t.zigzag_bestScore, timetrial_bestScore: t.timetrial_bestScore, currentCharacter: t.currentCharacter, theme: t.theme
                            };
                        default:
                            return e
                    }
                }), ae);
                class ce {
                    static recordNewGame(e) {
                        switch (e) {
                            case G.ZigZag:
                                ce.numZigZagGames += 1;
                                break;
                            case G.Endless:
                                ce.numEndlessGames += 1;
                                break;
                            case G.TimeTrial:
                                ce.numTimeTrialGames += 1
                        }
                    }
                    static defaultStats() {
                        return {
                            endless_bestScore: -1,
                            zigzag_bestScore: -1,
                            timetrial_bestScore: -1,
                            currentCharacter: 1,
                            theme: "surf",
                            mode: "endless",
                            highVisibilityMode: false,
                            reducedSpeedMode: false
                        }
                    }
                    static async getAllStats() {
                        /* const e = await (0, K.yt)("get-stats");
                        return {
                            ...e,
                            timetrial_bestScore: e.timetrial_bestScore < 0 ? -1 : e.timetrial_bestScore / 1e3,
                            gameSpeed: e.reducedSpeedMode ? .5 : ie,
                            mode: j(e.mode),
                            theme: W(e.theme)
                        } */
                        return (
                            JSON.parse(localStorage.getItem("surfstats")) || ce.defaultStats()
                        );
                    }
                    static resetAllStats() {
                        // q.e.send("reset-stats")
                        localStorage.removeItem("surfstats")
                    }
                    static saveEndlessHighScore(e) {
                        // q.e.send("set-high-score", [G.Endless, Math.floor(e)])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            endless_bestScore: Math.floor(e)
                        })))
                    }
                    static saveZigZagHighScore(e) {
                        // q.e.send("set-high-score", [G.ZigZag, Math.floor(e)])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            zigzag_bestScore: Math.floor(e)
                        })));
                    }
                    static saveTimeTrialHighScore(e) {
                        let t = e;
                        // e > 0 && (t *= 1e3), q.e.send("set-high-score", [G.TimeTrial, Math.floor(t)])
                        e > 0 && (t *= 1e3), localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            timetrial_bestScore: Math.floor(t)
                        })))
                    }
                    static saveGameMode(e) {
                        // q.e.send("save-game-mode", [e])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            mode: e
                        })))
                    }
                    static saveHighVisibilityMode(e) {
                        // q.e.send("save-high-visibility-mode", [e])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            highVisibilityMode: e
                        })))
                    }
                    static saveReducedSpeedMode(e) {
                        // q.e.send("save-reduced-speed-mode", [e])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            reducedSpeedMode: e
                        })))
                    }
                    static saveDefaultCharacter(e) {
                        // q.e.send("save-selected-character", [e])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            currentCharacter: e
                        })))
                    }
                    static saveDefaultTheme(e) {
                        // q.e.send("save-selected-theme", [e])
                        localStorage.setItem("surfstats", JSON.stringify(Object.assign(Object.assign({}, JSON.parse(localStorage.getItem("surfstats"))), {
                            theme: e
                        })))
                    }
                    static recordUnload() {
                        const e = Math.floor(Date.now() - ce.sessionStartTime) || 0,
                            t = {
                                zigzagGamesPlayed: ce.numZigZagGames,
                                endlessGamesPlayed: ce.numEndlessGames,
                                timetrialGamesPlayed: ce.numTimeTrialGames
                            };
                        /* q.e.send("record-unload", [t, e]),*/ ce.numZigZagGames = 0, ce.numEndlessGames = 0, ce.numTimeTrialGames = 0, ce.sessionStartTime = Date.now()
                    }
                    static recordGameEnd(e) {
                        const t = {
                            ...e,
                            score: Math.floor(e.score)
                        };
                        // q.e.send("record-game-end", [t])
                    }
                    static recordSharePopup() {
                        // q.e.send("record-share-popup")
                    }
                    static recordShareClick() {
                        // q.e.send("record-share-click")
                    }
                    static startShare(e, t, s, i) {
                        // q.e.send("start-share", [e, t, s, i])
                    }
                    static async getPercentage(e, t) {
                        // return (await (0, K.yt)("get-percentage", [e, t])).percentage
                    }
                }
                ce.numTimeTrialGames = 0, ce.numEndlessGames = 0, ce.numZigZagGames = 0, ce.sessionStartTime = Date.now();
                class de {
                    constructor() {
                        if (this.legend = void 0, this.spawnSingle = void 0, this.library = void 0, de.sys) return de.sys;
                        de.sys = this, this.defineLegend(), this.defineClusters()
                    }
                    defineLegend() {
                        this.legend = {
                            wall: {
                                sw: ["sw"],
                                s: ["s"],
                                se: ["se"],
                                w: ["w"],
                                e: ["e"],
                                n: ["n"],
                                b: ["b"],
                                f1: ["f1"],
                                f2: ["f2"],
                                f3: ["f3"],
                                f: ["f1", "f2", "f3"]
                            },
                            snag: {
                                b1: ["side1", "side2"],
                                b2: ["hurdle1", "hurdle2"],
                                b3: ["vehicle1", "vehicle2"],
                                b4: ["common1", "common2", "common3", "common4", "common5"],
                                b5: ["warn1"],
                                b6: ["isle1", "isle2", "isle3"],
                                b7: ["special1", "special2", "special3", "special4"]
                            },
                            snagsml: {
                                c1: ["debris1", "debris2"],
                                c2: ["beacon1"],
                                c3: ["point1"],
                                c4: ["rare1"],
                                c5: ["decor1", "decor2", "decor3", "decor4"]
                            },
                            snagtall: {
                                t1: ["tall1", "tall2"],
                                t2: ["tall3"],
                                t3: ["tall4", "tall5", "tall6", "tall7", "tall8"]
                            },
                            spin: {
                                o: ["spin1", "spin2", "spin3", "spin4", "spin5"]
                            },
                            ramp: {
                                i1: ["ramp"]
                            },
                            lure: {
                                i2: ["lure"]
                            },
                            boost: {
                                i3: ["boost"]
                            },
                            life: {
                                i4: ["life"]
                            },
                            coin: {
                                i5: ["coin"]
                            },
                            friend: {
                                i6: ["friend"]
                            },
                            ambient: {
                                a: ["ambient1", "ambient2", "ambient3"]
                            },
                            slow: {
                                s1: ["slow1", "slow2", "slow3"]
                            },
                            bump: {
                                s2: ["bump1", "bump2", "bump3"]
                            },
                            slowbig: {
                                s3: ["slowbig1"]
                            },
                            bumpbig: {
                                s4: ["bumpbig1"]
                            },
                            spiral: {
                                s5: ["spiral1"]
                            },
                            block: {
                                m1: ["block1", "block2", "block3"]
                            },
                            blockbig: {
                                m2: ["blockbig1", "blockbig2", "blockbig3"]
                            },
                            marker: {
                                z1: ["default"]
                            },
                            guide: {
                                z2: ["default"]
                            },
                            gate: {
                                z3: [""]
                            },
                            swap: {
                                z4: [""]
                            },
                            finish: {
                                f1: ["default"]
                            },
                            checkpoint: {
                                p1: ["default"]
                            }
                        }, this.spawnSingle = {
                            snag: ["side1", "side2", "hurdle1", "hurdle2", "common1", "common2", "common3", "common4", "common5", "isle1", "isle2", "isle3", "vehicle1", "vehicle2"],
                            ambient: ["ambient1", "ambient2", "ambient3"],
                            slow: ["slow1", "slow2", "slow3"],
                            bump: ["bump1", "bump2", "bump3"],
                            slowbig: ["slowbig1"],
                            bumpbig: ["bumpbig1"],
                            spiral: ["spiral1"],
                            block: ["block1", "block2", "block3"],
                            snagsml: ["rare1", "point1", "decor1", "decor2", "decor3", "decor4"],
                            snagtall: ["tall3", "tall4", "tall5", "tall6", "tall7", "tall8"],
                            spin: ["spin1", "spin2", "spin3", "spin4", "spin5"]
                        }
                    }
                    defineClusters() {
                        this.library = {
                            endlessStarts: {
                                start1: {
                                    snagtall: [
                                        [14, 21, "t2"],
                                        [-14, 14, "t1"],
                                        [24, 6, "t1"],
                                        [-32, 6, "t1"]
                                    ],
                                    bump: [
                                        [31, 11],
                                        [-34, 22],
                                        [-12, 18],
                                        [14, 18],
                                        [28, 18],
                                        [40, 16],
                                        [22, 10],
                                        [40, 8],
                                        [-40, 4],
                                        [-42, 10],
                                        [-24, 18],
                                        [-33, 12]
                                    ],
                                    slow: [
                                        [14, 10],
                                        [-14, 10]
                                    ],
                                    snagsml: [
                                        [-12, 27, "c3"],
                                        [8, 20, "c3"],
                                        [9, 11, "c3"],
                                        [-8, 20, "c3"],
                                        [-9, 11, "c3"],
                                        [12, 27, "c3"]
                                    ],
                                    boost: [
                                        [-4, 2],
                                        [4, 2]
                                    ],
                                    slowbig: [
                                        [22, 26],
                                        [35, 21],
                                        [-20, 21],
                                        [-36, 16],
                                        [26, 2],
                                        [-26, 3]
                                    ],
                                    wall: [
                                        [36, 8, "se"],
                                        [-26, 16, "sw"],
                                        [-22, 16, "s"],
                                        [-10, 16, "se"],
                                        [10, 16, "sw"],
                                        [18, 16, "s"],
                                        [-18, 16, "f"],
                                        [14, 16, "f"],
                                        [22, 16, "f"],
                                        [26, 16, "se"],
                                        [-26, 12, "n"],
                                        [26, 12, "n"],
                                        [-36, 8, "sw"],
                                        [-24, 8, "s"],
                                        [-20, 8, "se"],
                                        [20, 8, "sw"],
                                        [32, 8, "s"],
                                        [28, 8, "f"],
                                        [-36, 4, "n"],
                                        [36, 4, "n"],
                                        [-28, 8, "f"]
                                    ],
                                    snag: [
                                        [15, 11, "b2"],
                                        [37, 12, "b1"],
                                        [41, 11, "b4"],
                                        [-31, 13, "b4"],
                                        [-22, 12, "b4"],
                                        [-40, 12, "b2"],
                                        [-17, 22, "b4"],
                                        [-22, 24, "b4"],
                                        [-32, 20, "b1"],
                                        [36, 17, "b4"],
                                        [20, 12, "b4"],
                                        [-39, 18, "b4"],
                                        [31, 14, "b4"],
                                        [18, 21, "b4"]
                                    ]
                                },
                                start2: {
                                    block: [
                                        [-28, 13]
                                    ],
                                    bump: [
                                        [-35, 7],
                                        [-12, 12],
                                        [12, 6],
                                        [32, 4],
                                        [-37, 14],
                                        [-17, 22],
                                        [-32, 23],
                                        [38, 9],
                                        [37, 14],
                                        [-12, 19]
                                    ],
                                    wall: [
                                        [34, 12, "se"],
                                        [22, 8, "s"],
                                        [14, 8, "w"],
                                        [14, 16, "se"],
                                        [30, 12, "sw"],
                                        [14, 12, "n"],
                                        [-34, 20, "sw"],
                                        [-26, 20, "s"],
                                        [-14, 16, "f"],
                                        [10, 16, "sw"],
                                        [-10, 16, "se"],
                                        [-22, 16, "w"],
                                        [-22, 20, "se"],
                                        [-30, 20, "s"],
                                        [-34, 16, "n"],
                                        [30, 8, "e"],
                                        [26, 8, "f"]
                                    ],
                                    boost: [
                                        [4, 2],
                                        [-4, 2]
                                    ],
                                    blockbig: [
                                        [-19, 8],
                                        [22, 11]
                                    ],
                                    snagtall: [
                                        [-42, 8, "t2"],
                                        [-18, 14, "t1"],
                                        [18, 6, "t1"],
                                        [-31, 6, "t3"],
                                        [-27, 8, "t3"],
                                        [28, 13, "t3"]
                                    ],
                                    slowbig: [
                                        [39, 28],
                                        [45, 16],
                                        [23, 3],
                                        [-28, 3],
                                        [-36, 28],
                                        [-20, 31],
                                        [22, 32]
                                    ],
                                    bumpbig: [
                                        [-24, 24]
                                    ],
                                    snag: [
                                        [18, 15, "b6"],
                                        [33, 15, "b4"],
                                        [-34, 11, "b6"],
                                        [-16, 19, "b1"],
                                        [28, 3, "b6"],
                                        [40, 11, "b3"],
                                        [-25, 26, "b2"],
                                        [-36, 23, "b4"],
                                        [-39, 19, "b3"],
                                        [-14, 21, "b4"],
                                        [-41, 17, "b4"],
                                        [35, 7, "b1"],
                                        [-18, 4, "b6"],
                                        [37, 17, "b4"],
                                        [-39, 8, "b4"]
                                    ],
                                    slow: [
                                        [-47, 15],
                                        [-44, 23],
                                        [42, 6],
                                        [-40, 5],
                                        [41, 22]
                                    ],
                                    snagsml: [
                                        [33, 22, "c5"],
                                        [32, 26, "c5"],
                                        [21, 20, "c5"],
                                        [30, 19, "c5"],
                                        [-12, 27, "c3"],
                                        [9, 11, "c3"],
                                        [8, 20, "c3"],
                                        [-8, 20, "c3"],
                                        [-9, 11, "c3"],
                                        [12, 27, "c3"],
                                        [26, 23, "c4"],
                                        [25, 18, "c5"]
                                    ]
                                },
                                start3: {
                                    snagtall: [
                                        [35, 7, "t3"],
                                        [-33, 4, "t3"],
                                        [-39, 17, "t3"],
                                        [-17, 20, "t3"],
                                        [21, 14, "t3"],
                                        [30, 17, "t3"]
                                    ],
                                    slowbig: [
                                        [30, 5],
                                        [37, 22],
                                        [22, 25],
                                        [-43, 25],
                                        [-28, 20]
                                    ],
                                    bump: [
                                        [13, 21],
                                        [15, 12],
                                        [-39, 13],
                                        [-32, 26],
                                        [-41, 20],
                                        [-30, 7],
                                        [43, 16]
                                    ],
                                    snag: [
                                        [17, 19, "b6"],
                                        [-17, 5, "b5"],
                                        [-41, 10, "b4"],
                                        [31, 11, "b3"],
                                        [-44, 17, "b4"],
                                        [-42, 15, "b4"],
                                        [-29, 8, "b4"],
                                        [19, 13, "b6"],
                                        [-27, 5, "b4"],
                                        [-36, 8, "b4"],
                                        [-43, 12, "b4"],
                                        [-37, 16, "b4"],
                                        [-31, 24, "b5"],
                                        [-23, 13, "b4"],
                                        [43, 18, "b1"],
                                        [-12, 20, "b6"],
                                        [-13, 9, "b4"],
                                        [-40, 7, "b6"],
                                        [-25, 7, "b4"],
                                        [27, 17, "b4"]
                                    ],
                                    bumpbig: [
                                        [-18, 12],
                                        [31, 15]
                                    ],
                                    blockbig: [
                                        [-15, 16],
                                        [23, 9]
                                    ],
                                    snagsml: [
                                        [12, 27, "c3"],
                                        [9, 11, "c3"],
                                        [-9, 11, "c3"],
                                        [-8, 20, "c3"],
                                        [8, 20, "c3"],
                                        [-12, 27, "c3"]
                                    ],
                                    slow: [
                                        [47, 14],
                                        [-48, 11],
                                        [-30, 15],
                                        [23, 20],
                                        [-22, 25]
                                    ],
                                    wall: [
                                        [38, 17, "b"]
                                    ],
                                    block: [
                                        [14, 15],
                                        [40, 11]
                                    ],
                                    lure: [
                                        [-34, 11]
                                    ],
                                    boost: [
                                        [-4, 2],
                                        [4, 2]
                                    ]
                                }
                            },
                            endlessSwap: {
                                swap: {
                                    swap: [
                                        [0, 26]
                                    ],
                                    spiral: [
                                        [2, 22],
                                        [-6, 26],
                                        [6, 30]
                                    ],
                                    block: [
                                        [-32, 24],
                                        [25, 38]
                                    ],
                                    blockbig: [
                                        [-25, 13]
                                    ],
                                    lure: [
                                        [18, 26, ["lure"]],
                                        [-2, 14, ["lure"]],
                                        [-10, 16, ["lure"]],
                                        [-16, 20, ["lure"]],
                                        [-18, 26, ["lure"]],
                                        [16, 32, ["lure"]],
                                        [10, 36, ["lure"]],
                                        [-16, 33, ["lure"]]
                                    ],
                                    slowbig: [
                                        [30, 19],
                                        [-11, 2],
                                        [-26, 42],
                                        [34, 44],
                                        [-29, 8],
                                        [20, 53],
                                        [13, 7],
                                        [-3, 51]
                                    ],
                                    bump: [
                                        [-37, 37],
                                        [15, 44],
                                        [30, 32],
                                        [-17, 15],
                                        [-30, 32],
                                        [-28, 21],
                                        [31, 39],
                                        [35, 25],
                                        [22, 47],
                                        [10, 49]
                                    ],
                                    snag: [
                                        [-33, 19, "b4"],
                                        [-23, 32, "b4"],
                                        [-29, 38, "b3"],
                                        [9, 51, "b4"],
                                        [26, 46, "b4"],
                                        [11, 3, "b5"],
                                        [-3, 5, "b4"],
                                        [-6, 10, "b4"],
                                        [-15, 11, "b4"],
                                        [29, 24, "b4"],
                                        [11, 43, "b4"],
                                        [27, 30, "b4"],
                                        [-21, 17, "b4"],
                                        [-26, 30, "b4"],
                                        [16, 47, "b4"],
                                        [-35, 15, "b6"],
                                        [-11, 5, "b4"],
                                        [-12, 9, "b6"],
                                        [35, 37, "b4"],
                                        [36, 28, "b4"],
                                        [-26, 24, "b4"],
                                        [-38, 26, "b4"],
                                        [-40, 28, "b4"],
                                        [-36, 30, "b4"],
                                        [37, 32, "b4"],
                                        [-16, 6, "b4"],
                                        [-25, 18, "b4"],
                                        [26, 34, "b4"],
                                        [-18, 8, "b4"],
                                        [2, 9, "b4"],
                                        [31, 15, "b5"],
                                        [31, 35, "b4"],
                                        [24, 43, "b4"],
                                        [5, 48, "b4"],
                                        [33, 30, "b6"],
                                        [19, 44, "b6"]
                                    ],
                                    wall: [
                                        [-33, 36, "b"]
                                    ],
                                    snagtall: [
                                        [-24, 33, "t3"],
                                        [-9, 6, "t3"],
                                        [20, 40, "t3"],
                                        [-31, 16, "t3"],
                                        [31, 26, "t3"],
                                        [25, 19, "t2"],
                                        [-20, 35, "t2"]
                                    ],
                                    slow: [
                                        [6, 17],
                                        [2, 36],
                                        [-21, 23],
                                        [14, 24],
                                        [40, 36],
                                        [-10, 32],
                                        [-8, 20],
                                        [-38, 19]
                                    ],
                                    bumpbig: [
                                        [7, 46],
                                        [-1, 8],
                                        [-29, 29]
                                    ],
                                    snagsml: [
                                        [-29, 34, "c1"],
                                        [-35, 32, "c1"],
                                        [29, 21, "c1"],
                                        [25, 23, "c1"]
                                    ]
                                }
                            },
                            endlessLives: {
                                life1: {
                                    bump: [
                                        [10, 12],
                                        [-5, 14],
                                        [0, 1]
                                    ],
                                    snag: [
                                        [17, 8, "b6"],
                                        [-1, 3, "b6"],
                                        [-16, 13, "b6"],
                                        [-11, 15, "b6"]
                                    ],
                                    slow: [
                                        [-20, 8],
                                        [-4, 6],
                                        [-3, 19],
                                        [7, 17],
                                        [12, 5]
                                    ],
                                    blockbig: [
                                        [-11, 9]
                                    ],
                                    life: [
                                        [1, 12]
                                    ],
                                    snagtall: [
                                        [-8, 16, "t3"],
                                        [-10, 4, "t3"],
                                        [-3, 0, "t3"],
                                        [14, 9, "t3"]
                                    ],
                                    slowbig: [
                                        [-19, 18]
                                    ],
                                    block: [
                                        [9, 7]
                                    ]
                                },
                                life2: {
                                    snagtall: [
                                        [-4, 0, "t3"],
                                        [-15, 6, "t3"],
                                        [-9, 15, "t3"],
                                        [10, 9, "t3"]
                                    ],
                                    bump: [
                                        [-11, 23]
                                    ],
                                    snagsml: [
                                        [-8, 20, "c1"]
                                    ],
                                    slowbig: [
                                        [7, 23],
                                        [13, 8],
                                        [-21, 20]
                                    ],
                                    slow: [
                                        [18, 15],
                                        [-22, 8],
                                        [-12, 5]
                                    ],
                                    spin: [
                                        [-4, 20]
                                    ],
                                    wall: [
                                        [-12, 20, "b"]
                                    ],
                                    life: [
                                        [-2, 13]
                                    ],
                                    blockbig: [
                                        [9, 15],
                                        [-14, 11]
                                    ],
                                    snag: [
                                        [-20, 15, "b6"],
                                        [3, 2, "b6"]
                                    ],
                                    block: [
                                        [-1, 5]
                                    ]
                                }
                            },
                            endlessFriends: {
                                friend1: {
                                    snag: [
                                        [20, 5, "b6"],
                                        [11, 15, "b1"],
                                        [-8, 14, "b4"],
                                        [6, 12, "b4"],
                                        [15, 13, "b2"]
                                    ],
                                    slow: [
                                        [-18, 3],
                                        [7, 19]
                                    ],
                                    bump: [
                                        [-10, 4],
                                        [-11, 16],
                                        [10, 13],
                                        [-15, 8]
                                    ],
                                    spin: [
                                        [4, 9]
                                    ],
                                    snagtall: [
                                        [6, 5, "t3"],
                                        [-20, 10, "t1"]
                                    ],
                                    wall: [
                                        [-12, 12, "se"],
                                        [-16, 12, "f"],
                                        [-8, 8, "se"],
                                        [-12, 8, "w"]
                                    ],
                                    blockbig: [
                                        [14, 8]
                                    ],
                                    bumpbig: [
                                        [11, 4]
                                    ],
                                    snagsml: [
                                        [-18, 15, "c1"]
                                    ],
                                    friend: [
                                        [-1, 12]
                                    ]
                                },
                                friend2: {
                                    slow: [
                                        [-11, 18],
                                        [13, 2]
                                    ],
                                    snag: [
                                        [-1, 1, "b4"],
                                        [-18, 14, "b1"],
                                        [18, 10, "b4"],
                                        [14, 6, "b4"],
                                        [8, 8, "b4"],
                                        [-10, 11, "b6"],
                                        [-7, 13, "b4"],
                                        [17, 14, "b4"]
                                    ],
                                    slowbig: [
                                        [-18, 3],
                                        [12, 19]
                                    ],
                                    bump: [
                                        [-16, 12],
                                        [15, 11],
                                        [-7, 8],
                                        [2, 2]
                                    ],
                                    snagtall: [
                                        [11, 9, "t2"],
                                        [-20, 8, "t3"]
                                    ],
                                    snagsml: [
                                        [8, 12, "c1"]
                                    ],
                                    block: [
                                        [-13, 7]
                                    ],
                                    friend: [
                                        [1, 9]
                                    ]
                                }
                            },
                            endlessBoosts: {
                                boost1: {
                                    spin: [
                                        [-15, 8]
                                    ],
                                    spiral: [
                                        [-2, 12]
                                    ],
                                    boost: [
                                        [-4, 19]
                                    ],
                                    slowbig: [
                                        [8, 8]
                                    ],
                                    blockbig: [
                                        [9, 14],
                                        [-7, 4]
                                    ],
                                    snagsml: [
                                        [-20, 14, "c1"],
                                        [-14, 20, "c1"]
                                    ],
                                    bump: [
                                        [5, 22],
                                        [-10, 13],
                                        [-11, 19],
                                        [2, 3],
                                        [-15, 5],
                                        [16, 19]
                                    ],
                                    snag: [
                                        [-13, 14, "b4"],
                                        [-10, 16, "b4"],
                                        [-13, 1, "b6"],
                                        [-9, 8, "b6"],
                                        [4, 18, "b6"]
                                    ],
                                    snagtall: [
                                        [-16, 15, "t2"],
                                        [17, 14, "t3"],
                                        [8, 18, "t3"]
                                    ]
                                },
                                boost2: {
                                    boost: [
                                        [-9, 16]
                                    ],
                                    snagsml: [
                                        [-10, 9, "c1"]
                                    ],
                                    bumpbig: [
                                        [-3, 2]
                                    ],
                                    snagtall: [
                                        [-7, 4, "t1"]
                                    ],
                                    bump: [
                                        [-5, 22],
                                        [15, 20],
                                        [17, 12],
                                        [-15, 6],
                                        [15, 4]
                                    ],
                                    wall: [
                                        [5, 22, "se"],
                                        [1, 22, "sw"],
                                        [1, 18, "e"],
                                        [-3, 18, "sw"],
                                        [13, 16, "b"],
                                        [13, 12, "n"],
                                        [9, 8, "sw"],
                                        [-3, 6, "se"],
                                        [-11, 6, "sw"],
                                        [13, 8, "e"]
                                    ],
                                    snag: [
                                        [11, 3, "b1"],
                                        [18, 15, "b2"],
                                        [-6, 8, "b4"],
                                        [-14, 14, "b4"],
                                        [-6, 24, "b2"]
                                    ]
                                },
                                boost3: {
                                    slowbig: [
                                        [-10, 3]
                                    ],
                                    snag: [
                                        [-14, 5, "b2"],
                                        [7, 5, "b6"],
                                        [-6, 12, "b1"],
                                        [4, 2, "b4"],
                                        [-10, 8, "b4"],
                                        [10, 14, "b4"],
                                        [8, 22, "b4"],
                                        [-8, 22, "b4"],
                                        [7, 19, "b4"],
                                        [-17, 7, "b4"]
                                    ],
                                    bump: [
                                        [-12, 22],
                                        [12, 20],
                                        [16, 2],
                                        [8, 2],
                                        [-14, 10],
                                        [-10, 14],
                                        [14, 13],
                                        [12, 3]
                                    ],
                                    slow: [
                                        [16, 8],
                                        [-2, 23],
                                        [-3, 9]
                                    ],
                                    block: [
                                        [10, 8]
                                    ],
                                    boost: [
                                        [4, 14]
                                    ],
                                    bumpbig: [
                                        [-10, 18]
                                    ],
                                    wall: [
                                        [-4, 16, "b"]
                                    ]
                                },
                                boost4: {
                                    bumpbig: [
                                        [7, 19]
                                    ],
                                    snagsml: [
                                        [6, 6, "c1"]
                                    ],
                                    boost: [
                                        [4, 10],
                                        [-4, 10]
                                    ],
                                    snagtall: [
                                        [7, 14, "t3"]
                                    ],
                                    snag: [
                                        [-10, 5, "b4"],
                                        [8, 8, "b4"],
                                        [-6, 16, "b1"],
                                        [-4, 4, "b4"],
                                        [-8, 8, "b4"],
                                        [-8, 13, "b2"],
                                        [4, 4, "b4"],
                                        [9, 12, "b4"],
                                        [-6, 6, "b6"]
                                    ],
                                    bump: [
                                        [12, 8],
                                        [-12, 18],
                                        [-8, 20],
                                        [8, 23]
                                    ],
                                    slow: [
                                        [-15, 15],
                                        [14, 15],
                                        [16, 10],
                                        [-14, 9]
                                    ],
                                    spin: [
                                        [-7, 2],
                                        [10, 3]
                                    ]
                                },
                                boost5: {
                                    boost: [
                                        [-1, 12]
                                    ],
                                    bump: [
                                        [11, 8],
                                        [-8, 22],
                                        [14, 16],
                                        [-6, 16],
                                        [-6, 8],
                                        [-14, 6],
                                        [-2, 4]
                                    ],
                                    wall: [
                                        [13, 12, "f"],
                                        [-4, 20, "se"],
                                        [-8, 20, "f"],
                                        [-16, 20, "sw"],
                                        [-12, 20, "s"],
                                        [-12, 16, "n"],
                                        [-8, 12, "se"],
                                        [-12, 12, "w"],
                                        [-10, 6, "b"],
                                        [-2, 2, "se"],
                                        [9, 12, "sw"],
                                        [-10, 2, "w"]
                                    ],
                                    snag: [
                                        [-16, 10, "b4"],
                                        [-12, 8, "b4"],
                                        [-6, 4, "b2"],
                                        [5, 10, "b4"],
                                        [-1, 23, "b4"]
                                    ],
                                    spin: [
                                        [9, 17],
                                        [7, 7],
                                        [15, 5],
                                        [1, 2]
                                    ],
                                    snagtall: [
                                        [17, 10, "t1"],
                                        [-6, 0, "t1"]
                                    ]
                                },
                                boost6: {
                                    snagtall: [
                                        [-6, 10, "t1"]
                                    ],
                                    spin: [
                                        [6, 0],
                                        [-4, 2],
                                        [6, 16],
                                        [-2, 18]
                                    ],
                                    boost: [
                                        [2, 14]
                                    ],
                                    snag: [
                                        [-18, 11, "b1"],
                                        [-12, 4, "b4"],
                                        [14, 12, "b1"],
                                        [-4, 7, "b4"]
                                    ],
                                    wall: [
                                        [14, 4, "n"],
                                        [-14, 8, "sw"],
                                        [-10, 8, "e"],
                                        [6, 8, "w"],
                                        [14, 8, "se"],
                                        [-10, 12, "sw"],
                                        [-2, 12, "se"],
                                        [6, 12, "b"],
                                        [-14, 18, "b"],
                                        [10, 8, "f"]
                                    ],
                                    bump: [
                                        [-16, 2],
                                        [18, 6],
                                        [10, 14],
                                        [-12, 22],
                                        [-14, 13]
                                    ]
                                },
                                boost7: {
                                    boost: [
                                        [4, 14]
                                    ],
                                    snagtall: [
                                        [-6, 4, "t3"],
                                        [11, 1, "t3"]
                                    ],
                                    snag: [
                                        [10, 7, "b4"],
                                        [-9, 8, "b2"],
                                        [4, 0, "b4"],
                                        [-8, 14, "b4"],
                                        [-4, 12, "b6"],
                                        [6, 4, "b1"]
                                    ],
                                    bump: [
                                        [-3, 9],
                                        [-8, 12],
                                        [5, 7]
                                    ]
                                },
                                boost8: {
                                    spin: [
                                        [0, 3],
                                        [7, 13]
                                    ],
                                    snag: [
                                        [10, 4, "b4"],
                                        [-6, 4, "b4"],
                                        [-10, 6, "b4"],
                                        [4, 14, "b4"],
                                        [-10, 2, "b2"]
                                    ],
                                    bump: [
                                        [-4, 8],
                                        [6, 8],
                                        [-8, 12]
                                    ],
                                    boost: [
                                        [-2, 14]
                                    ]
                                },
                                boost9: {
                                    snagtall: [
                                        [10, 0, "t1"]
                                    ],
                                    boost: [
                                        [0, 10]
                                    ],
                                    bump: [
                                        [-13, 6],
                                        [-4, 14],
                                        [4, 6]
                                    ],
                                    snag: [
                                        [12, 12, "b3"],
                                        [6, 12, "b4"],
                                        [-8, 4, "b4"]
                                    ],
                                    wall: [
                                        [-10, 12, "sw"],
                                        [-6, 12, "se"],
                                        [8, 10, "b"],
                                        [-10, 8, "n"],
                                        [2, 2, "sw"],
                                        [6, 2, "f"]
                                    ],
                                    snagsml: [
                                        [-8, 15, "c1"]
                                    ]
                                },
                                boost10: {
                                    bumpbig: [
                                        [10, 6]
                                    ],
                                    snag: [
                                        [5, 11, "b1"],
                                        [11, 9, "b4"],
                                        [-8, 14, "b4"],
                                        [-4, 12, "b4"],
                                        [-10, 12, "b4"],
                                        [8, 13, "b4"]
                                    ],
                                    bump: [
                                        [8, 10],
                                        [11, 1],
                                        [4, 3]
                                    ],
                                    spiral: [
                                        [-7, 4]
                                    ],
                                    boost: [
                                        [0, 9]
                                    ]
                                },
                                boost11: {
                                    snag: [
                                        [-14, 8, "b6"],
                                        [-12, 6, "b4"]
                                    ],
                                    snagtall: [
                                        [13, 3, "t3"]
                                    ],
                                    boost: [
                                        [2, 8]
                                    ],
                                    wall: [
                                        [-4, 10, "se"],
                                        [-8, 10, "sw"],
                                        [8, 6, "b"],
                                        [-8, 6, "n"],
                                        [8, 2, "e"],
                                        [4, 2, "sw"]
                                    ],
                                    spin: [
                                        [-5, 1]
                                    ],
                                    snagsml: [
                                        [-5, 13, "c1"]
                                    ],
                                    bump: [
                                        [11, 8],
                                        [-4, 6],
                                        [-12, 11]
                                    ]
                                }
                            },
                            endlessRamps: {
                                ramp1: {
                                    boost: [
                                        [-2, 11]
                                    ],
                                    slowbig: [
                                        [-3, 2]
                                    ],
                                    wall: [
                                        [-6, 21, "b"],
                                        [6, 17, "se"],
                                        [-6, 17, "e"],
                                        [-10, 17, "f"],
                                        [-14, 17, "sw"],
                                        [2, 17, "sw"],
                                        [10, 13, "f"],
                                        [6, 13, "w"]
                                    ],
                                    snag: [
                                        [12, 8, "b4"],
                                        [-10, 19, "b4"],
                                        [3, 19, "b1"],
                                        [-16, 13, "b4"],
                                        [-3, 4, "b1"]
                                    ],
                                    snagtall: [
                                        [14, 11, "t1"]
                                    ],
                                    bump: [
                                        [-16, 20],
                                        [16, 5],
                                        [11, 17],
                                        [-17, 7]
                                    ],
                                    spin: [
                                        [-15, 5],
                                        [14, 3]
                                    ],
                                    ramp: [
                                        [8, 9],
                                        [-12, 13],
                                        [-2, 16]
                                    ]
                                },
                                ramp2: {
                                    snagtall: [
                                        [11, 10, "t3"],
                                        [-11, 6, "t3"]
                                    ],
                                    spin: [
                                        [-2, 2],
                                        [2, 10]
                                    ],
                                    slow: [
                                        [3, 2],
                                        [16, 13],
                                        [-4, 13],
                                        [6, 17]
                                    ],
                                    block: [
                                        [-6, 4]
                                    ],
                                    slowbig: [
                                        [-17, 8],
                                        [-11, 18]
                                    ],
                                    blockbig: [
                                        [9, 7]
                                    ],
                                    snag: [
                                        [-6, 9, "b4"],
                                        [8, 13, "b4"],
                                        [-13, 3, "b6"],
                                        [9, 2, "b6"]
                                    ],
                                    bump: [
                                        [-10, 13],
                                        [10, 16]
                                    ],
                                    ramp: [
                                        [0, 17]
                                    ]
                                },
                                ramp3: {
                                    slow: [
                                        [14, 6],
                                        [-18, 8],
                                        [17, 16]
                                    ],
                                    snag: [
                                        [11, 8, "b3"],
                                        [13, 11, "b1"],
                                        [16, 9, "b6"]
                                    ],
                                    snagtall: [
                                        [-15, 9, "t3"],
                                        [0, 21, "t3"],
                                        [-4, 10, "t1"]
                                    ],
                                    bump: [
                                        [0, 12],
                                        [-12, 13],
                                        [-5, 20]
                                    ],
                                    wall: [
                                        [-8, 16, "sw"],
                                        [-4, 16, "s"],
                                        [0, 16, "f"],
                                        [4, 16, "s"],
                                        [8, 16, "f"],
                                        [-8, 12, "w"],
                                        [12, 16, "se"]
                                    ],
                                    slowbig: [
                                        [0, 2],
                                        [-12, 19]
                                    ],
                                    blockbig: [
                                        [-8, 6],
                                        [8, 19]
                                    ],
                                    ramp: [
                                        [6, 12]
                                    ]
                                },
                                ramp4: {
                                    slow: [
                                        [3, 22],
                                        [14, 10],
                                        [-15, 8],
                                        [-12, 4],
                                        [14, 2],
                                        [-7, 20]
                                    ],
                                    snag: [
                                        [-9, 7, "b3"],
                                        [-8, 15, "b4"],
                                        [13, 14, "b4"],
                                        [-10, 12, "b4"],
                                        [4, 12, "b4"],
                                        [-4, 12, "b4"],
                                        [6, 8, "b4"],
                                        [8, 4, "b4"],
                                        [-8, 4, "b4"],
                                        [-6, 8, "b1"],
                                        [11, 11, "b6"],
                                        [8, 14, "b2"]
                                    ],
                                    bump: [
                                        [5, 17],
                                        [-4, 16],
                                        [-12, 14],
                                        [8, 12],
                                        [-10, 10]
                                    ],
                                    snagtall: [
                                        [10, 5, "t3"]
                                    ],
                                    ramp: [
                                        [0, 14]
                                    ]
                                },
                                ramp5: {
                                    snagtall: [
                                        [-4, 11, "t3"]
                                    ],
                                    ramp: [
                                        [-8, 4],
                                        [8, 2]
                                    ],
                                    bump: [
                                        [9, 6],
                                        [-5, 5],
                                        [-11, 6],
                                        [5, 11]
                                    ],
                                    slowbig: [
                                        [-1, 9]
                                    ],
                                    snag: [
                                        [8, 10, "b4"],
                                        [-10, 8, "b4"],
                                        [6, 5, "b4"],
                                        [-1, 4, "b6"]
                                    ]
                                },
                                ramp6: {
                                    bump: [
                                        [-8, 6],
                                        [-13, 14],
                                        [9, 14]
                                    ],
                                    snagtall: [
                                        [-13, 9, "t3"],
                                        [5, 13, "t3"],
                                        [-9, 12, "t2"]
                                    ],
                                    slow: [
                                        [8, 8],
                                        [-8, 3]
                                    ],
                                    blockbig: [
                                        [-2, 9]
                                    ],
                                    snag: [
                                        [1, 13, "b4"],
                                        [6, 11, "b4"],
                                        [3, 5, "b6"],
                                        [-11, 8, "b4"]
                                    ],
                                    ramp: [
                                        [-2, 3]
                                    ],
                                    slowbig: [
                                        [-4, 18]
                                    ]
                                },
                                ramp7: {
                                    snag: [
                                        [10, 8, "b4"],
                                        [-1, 4, "b4"],
                                        [1, 1, "b6"],
                                        [0, 11, "b1"],
                                        [-3, 2, "b4"]
                                    ],
                                    wall: [
                                        [8, 12, "w"],
                                        [-8, 14, "se"],
                                        [8, 16, "b"],
                                        [12, 12, "se"]
                                    ],
                                    snagsml: [
                                        [14, 14, "c1"]
                                    ],
                                    ramp: [
                                        [4, 13],
                                        [-4, 13]
                                    ],
                                    slow: [
                                        [14, 4],
                                        [-10, 4]
                                    ],
                                    bump: [
                                        [-14, 11],
                                        [-9, 17],
                                        [1, 15],
                                        [10, 18]
                                    ],
                                    snagtall: [
                                        [-12, 12, "t1"]
                                    ]
                                },
                                ramp8: {
                                    slowbig: [
                                        [0, 19]
                                    ],
                                    snagsml: [
                                        [8, 12, "c1"]
                                    ],
                                    wall: [
                                        [6, 10, "b"]
                                    ],
                                    slow: [
                                        [-7, 12],
                                        [5, 4]
                                    ],
                                    ramp: [
                                        [-1, 13]
                                    ],
                                    snag: [
                                        [-9, 6, "b4"],
                                        [-8, 3, "b4"],
                                        [-4, 0, "b4"],
                                        [10, 9, "b4"],
                                        [8, 6, "b2"],
                                        [-10, 1, "b2"]
                                    ],
                                    bump: [
                                        [10, 4],
                                        [-4, 4],
                                        [-11, 7]
                                    ]
                                }
                            },
                            endlessLures: {
                                lure1: {
                                    slowbig: [
                                        [10, 13],
                                        [-17, 9],
                                        [0, 7]
                                    ],
                                    snag: [
                                        [-1, 3, "b4"],
                                        [-3, 0, "b4"],
                                        [2, 1, "b5"]
                                    ],
                                    slow: [
                                        [-8, 14],
                                        [16, 2]
                                    ],
                                    spiral: [
                                        [11, 7],
                                        [-13, 3]
                                    ],
                                    lure: [
                                        [-2, 11]
                                    ]
                                },
                                lure2: {
                                    bump: [
                                        [21, 6],
                                        [7, 21],
                                        [-1, 12],
                                        [21, 18],
                                        [8, 13],
                                        [-20, 16]
                                    ],
                                    wall: [
                                        [12, 10, "w"],
                                        [12, 14, "w"],
                                        [12, 18, "b"],
                                        [4, 14, "b"],
                                        [16, 14, "f"],
                                        [4, 10, "n"],
                                        [16, 10, "se"]
                                    ],
                                    snag: [
                                        [-17, 14, "b4"],
                                        [-18, 7, "b4"],
                                        [-14, 16, "b5"],
                                        [-16, 10, "b1"],
                                        [1, 20, "b4"],
                                        [18, 17, "b4"],
                                        [0, 8, "b5"],
                                        [-20, 12, "b6"],
                                        [13, 6, "b4"],
                                        [18, 4, "b4"]
                                    ],
                                    snagtall: [
                                        [-21, 8, "t3"],
                                        [20, 12, "t1"]
                                    ],
                                    slow: [
                                        [-10, 9]
                                    ],
                                    slowbig: [
                                        [4, 5],
                                        [-16, 22]
                                    ],
                                    bumpbig: [
                                        [1, 17]
                                    ],
                                    snagsml: [
                                        [14, 3, "c1"]
                                    ],
                                    lure: [
                                        [-8, 13]
                                    ]
                                },
                                lure3: {
                                    snagtall: [
                                        [-8, 9, "t3"],
                                        [15, 2, "t2"]
                                    ],
                                    slow: [
                                        [0, 7]
                                    ],
                                    bump: [
                                        [21, 7],
                                        [12, 2],
                                        [-16, 13]
                                    ],
                                    snagsml: [
                                        [17, 6, "c1"]
                                    ],
                                    snag: [
                                        [9, 4, "b4"],
                                        [-7, 0, "b4"],
                                        [-5, 3, "b5"],
                                        [-16, 9, "b4"],
                                        [-17, 6, "b4"],
                                        [-11, 8, "b3"],
                                        [-2, 1, "b1"],
                                        [7, 1, "b5"],
                                        [19, 3, "b4"],
                                        [-12, 12, "b4"]
                                    ],
                                    spin: [
                                        [6, 10]
                                    ],
                                    slowbig: [
                                        [-15, 3],
                                        [-4, 17],
                                        [16, 13]
                                    ],
                                    lure: [
                                        [2, 11]
                                    ]
                                },
                                lure4: {
                                    snagtall: [
                                        [-12, 5, "t3"]
                                    ],
                                    slowbig: [
                                        [0, 5]
                                    ],
                                    lure: [
                                        [2, 9]
                                    ],
                                    snag: [
                                        [13, 12, "b2"],
                                        [10, 7, "b4"],
                                        [9, 3, "b5"],
                                        [-7, 7, "b4"],
                                        [-10, 9, "b6"],
                                        [-15, 8, "b1"],
                                        [-7, 2, "b5"],
                                        [12, 5, "b4"]
                                    ],
                                    bump: [
                                        [-14, 12],
                                        [-6, 11],
                                        [14, 9]
                                    ],
                                    slow: [
                                        [8, 12],
                                        [-1, 15]
                                    ]
                                },
                                lure5: {
                                    slowbig: [
                                        [-11, 11],
                                        [-3, 2]
                                    ],
                                    snagtall: [
                                        [8, 5, "t2"]
                                    ],
                                    lure: [
                                        [-2, 7]
                                    ],
                                    snagsml: [
                                        [-13, 7, "c1"]
                                    ],
                                    snag: [
                                        [4, 3, "b5"],
                                        [-11, 2, "b5"],
                                        [-9, 6, "b4"],
                                        [11, 9, "b4"],
                                        [-17, 5, "b2"]
                                    ],
                                    bump: [
                                        [-14, 5],
                                        [8, 11],
                                        [5, 6]
                                    ],
                                    slow: [
                                        [0, 13]
                                    ]
                                }
                            },
                            endlessCheckpoints: {
                                checkpoint1: {
                                    snag: [
                                        [25, 16, "b4"],
                                        [22, 9, "b4"],
                                        [17, 4, "b4"],
                                        [-24, 14, "b4"],
                                        [-25, 18, "b4"],
                                        [-22, 16, "b4"],
                                        [18, 7, "b4"],
                                        [23, 18, "b6"]
                                    ],
                                    slow: [
                                        [20, 2],
                                        [-22, 22]
                                    ],
                                    slowbig: [
                                        [-18, 2],
                                        [16, 25],
                                        [-15, 26]
                                    ],
                                    snagtall: [
                                        [-24, 2, "t3"],
                                        [16, 17, "t1"],
                                        [-18, 10, "t1"],
                                        [-26, 7, "t2"],
                                        [-20, 6, "t3"],
                                        [-29, 4, "t3"],
                                        [22, 3, "t3"]
                                    ],
                                    boost: [
                                        [2, 19],
                                        [-2, 26],
                                        [2, 32]
                                    ],
                                    bump: [
                                        [19, 12],
                                        [11, 19],
                                        [-17, 16],
                                        [27, 19]
                                    ],
                                    wall: [
                                        [14, 16, "f"],
                                        [14, 12, "se"],
                                        [-10, 16, "se"],
                                        [-14, 16, "w"],
                                        [-14, 12, "f"],
                                        [-14, 20, "b"],
                                        [10, 16, "sw"],
                                        [18, 16, "se"]
                                    ],
                                    checkpoint: [
                                        [0, 8]
                                    ],
                                    life: [
                                        [3, 1],
                                        [-3, 1]
                                    ]
                                },
                                checkpoint2: {
                                    blockbig: [
                                        [19, 6]
                                    ],
                                    block: [
                                        [-22, 9]
                                    ],
                                    checkpoint: [
                                        [0, 8]
                                    ],
                                    slowbig: [
                                        [-23, 2],
                                        [21, 25],
                                        [-20, 26]
                                    ],
                                    boost: [
                                        [2, 26],
                                        [-2, 20],
                                        [-2, 33]
                                    ],
                                    snagtall: [
                                        [-14, 10, "t1"],
                                        [18, 18, "t1"],
                                        [-20, 5, "t3"],
                                        [14, 2, "t3"],
                                        [22, 9, "t3"]
                                    ],
                                    wall: [
                                        [10, 20, "sw"],
                                        [-18, 20, "b"],
                                        [-14, 16, "f"],
                                        [10, 16, "n"],
                                        [14, 12, "se"],
                                        [-10, 16, "se"],
                                        [-18, 16, "w"],
                                        [14, 20, "f"]
                                    ],
                                    life: [
                                        [3, 1],
                                        [-3, 1]
                                    ],
                                    snag: [
                                        [-24, 14, "b4"],
                                        [22, 18, "b4"],
                                        [-15, 3, "b4"],
                                        [22, 1, "b6"],
                                        [-26, 5, "b6"],
                                        [-29, 8, "b4"],
                                        [24, 15, "b4"]
                                    ],
                                    bump: [
                                        [-27, 11],
                                        [16, 15],
                                        [-13, 19],
                                        [12, 23],
                                        [26, 19]
                                    ],
                                    slow: [
                                        [28, 9],
                                        [-29, 15]
                                    ],
                                    snagsml: [
                                        [-23, 17, "c1"]
                                    ]
                                },
                                checkpoint3: {
                                    wall: [
                                        [14, 20, "se"],
                                        [-18, 12, "sw"],
                                        [-14, 20, "f"],
                                        [-10, 16, "n"],
                                        [-14, 8, "n"],
                                        [18, 8, "n"],
                                        [18, 12, "se"],
                                        [10, 20, "sw"],
                                        [10, 16, "n"],
                                        [14, 12, "f"],
                                        [-14, 12, "s"],
                                        [-10, 20, "se"],
                                        [-26, 8, "b"]
                                    ],
                                    snagsml: [
                                        [-21, 6, "c1"]
                                    ],
                                    snag: [
                                        [23, 8, "b6"],
                                        [-28, 4, "b4"],
                                        [-31, 7, "b4"],
                                        [-27, 13, "b6"],
                                        [-32, 11, "b6"],
                                        [21, 3, "b4"],
                                        [16, 4, "b2"]
                                    ],
                                    snagtall: [
                                        [21, 14, "t3"],
                                        [-24, 9, "t3"],
                                        [-18, 18, "t1"]
                                    ],
                                    slowbig: [
                                        [-22, 4],
                                        [19, 25]
                                    ],
                                    life: [
                                        [-3, 1],
                                        [3, 1]
                                    ],
                                    checkpoint: [
                                        [0, 8]
                                    ],
                                    boost: [
                                        [0, 19]
                                    ],
                                    ramp: [
                                        [4, 27],
                                        [0, 25],
                                        [-4, 27]
                                    ],
                                    bump: [
                                        [-14, 16],
                                        [17, 16],
                                        [-28, 10]
                                    ],
                                    slow: [
                                        [-22, 17],
                                        [27, 7]
                                    ],
                                    block: [
                                        [26, 11]
                                    ]
                                }
                            },
                            allNormal: {
                                large1: {
                                    slowbig: [
                                        [7, 21]
                                    ],
                                    blockbig: [
                                        [10, 3],
                                        [-16, 12]
                                    ],
                                    wall: [
                                        [-12, 8, "f"],
                                        [13, 8, "n"],
                                        [-8, 8, "se"],
                                        [5, 12, "sw"],
                                        [13, 12, "se"],
                                        [9, 12, "f"],
                                        [-6, 14, "n"],
                                        [-6, 18, "b"]
                                    ],
                                    bumpbig: [
                                        [11, 15]
                                    ],
                                    snagtall: [
                                        [-22, 8, "t3"],
                                        [17, 5, "t3"],
                                        [-16, 6, "t1"]
                                    ],
                                    bump: [
                                        [-19, 7],
                                        [3, 9],
                                        [-5, 11],
                                        [-15, 18],
                                        [-12, 4],
                                        [18, 10]
                                    ],
                                    snag: [
                                        [19, 4, "b6"],
                                        [7, 8, "b1"],
                                        [-11, 17, "b1"],
                                        [-19, 17, "b6"]
                                    ],
                                    slow: [
                                        [-23, 20],
                                        [22, 16],
                                        [-26, 6],
                                        [23, 8]
                                    ],
                                    snagsml: [
                                        [18, 12, "c1"],
                                        [-6, 1, "c2"]
                                    ]
                                },
                                large2: {
                                    blockbig: [
                                        [-6, 8]
                                    ],
                                    bumpbig: [
                                        [-7, 18]
                                    ],
                                    wall: [
                                        [1, 20, "b"],
                                        [1, 16, "e"],
                                        [-3, 16, "f"],
                                        [9, 12, "se"],
                                        [5, 12, "f"],
                                        [1, 12, "w"]
                                    ],
                                    slowbig: [
                                        [20, 10],
                                        [-15, 6]
                                    ],
                                    slow: [
                                        [-12, 23],
                                        [14, 17],
                                        [-22, 16],
                                        [1, 2]
                                    ],
                                    bump: [
                                        [15, 2],
                                        [-4, 22],
                                        [4, 20],
                                        [6, 15],
                                        [-15, 14],
                                        [-3, 12]
                                    ],
                                    snagtall: [
                                        [-7, 14, "t1"],
                                        [2, 6, "t3"]
                                    ],
                                    snag: [
                                        [18, 1, "b4"],
                                        [17, 5, "b4"],
                                        [-3, 2, "b6"],
                                        [8, 18, "b2"],
                                        [-13, 12, "b1"],
                                        [-1, 4, "b4"],
                                        [-9, 3, "b2"],
                                        [14, 3, "b4"]
                                    ]
                                },
                                large3: {
                                    snagtall: [
                                        [21, 5, "t3"],
                                        [-3, 7, "t3"]
                                    ],
                                    snag: [
                                        [8, 12, "b6"],
                                        [-10, 3, "b4"],
                                        [17, 4, "b4"],
                                        [-5, 6, "b4"],
                                        [-10, 8, "b1"],
                                        [11, 8, "b4"],
                                        [-19, 9, "b4"],
                                        [-6, 11, "b4"],
                                        [5, 14, "b4"],
                                        [-5, 14, "b2"],
                                        [-11, 18, "b4"],
                                        [9, 18, "b2"],
                                        [14, 21, "b4"]
                                    ],
                                    snagsml: [
                                        [12, 11, "c1"],
                                        [11, 2, "c2"],
                                        [-15, 10, "c1"]
                                    ],
                                    bumpbig: [
                                        [-6, 3],
                                        [-14, 7]
                                    ],
                                    slow: [
                                        [-22, 3],
                                        [23, 3],
                                        [-2, 22]
                                    ],
                                    bump: [
                                        [16, 8],
                                        [-9, 16],
                                        [5, 19],
                                        [7, 10]
                                    ],
                                    slowbig: [
                                        [-18, 14],
                                        [17, 15]
                                    ]
                                },
                                large4: {
                                    bump: [
                                        [10, 6],
                                        [-11, 11],
                                        [14, 10]
                                    ],
                                    snag: [
                                        [-10, 14, "b6"],
                                        [-10, 17, "b2"],
                                        [10, 15, "b4"],
                                        [12, 12, "b1"],
                                        [11, 8, "b4"],
                                        [-12, 4, "b4"],
                                        [-9, 2, "b4"],
                                        [9, 1, "b4"],
                                        [-4, 6, "b6"]
                                    ],
                                    slow: [
                                        [-4, 3],
                                        [-4, 22],
                                        [10, 21],
                                        [17, 15],
                                        [-17, 8]
                                    ],
                                    slowbig: [
                                        [-15, 17]
                                    ],
                                    blockbig: [
                                        [-4, 10]
                                    ],
                                    snagsml: [
                                        [13, 16, "c1"]
                                    ],
                                    snagtall: [
                                        [-15, 12, "t3"],
                                        [13, 5, "t3"]
                                    ],
                                    bumpbig: [
                                        [-2, 16]
                                    ]
                                },
                                large5: {
                                    bump: [
                                        [14, 12],
                                        [-9, 3],
                                        [-3, 5],
                                        [-10, 15]
                                    ],
                                    slow: [
                                        [19, 5],
                                        [-9, 9],
                                        [-17, 13],
                                        [14, 17]
                                    ],
                                    blockbig: [
                                        [7, 5]
                                    ],
                                    wall: [
                                        [4, 10, "n"],
                                        [-8, 14, "sw"],
                                        [0, 14, "f"],
                                        [8, 14, "se"],
                                        [4, 14, "s"]
                                    ],
                                    slowbig: [
                                        [-6, 21]
                                    ],
                                    snag: [
                                        [-13, 4, "b4"],
                                        [1, 2, "b6"],
                                        [-15, 2, "b4"],
                                        [10, 10, "b1"],
                                        [-2, 17, "b1"]
                                    ],
                                    snagtall: [
                                        [-4, 12, "t1"],
                                        [14, 7, "t3"],
                                        [-1, 8, "t3"]
                                    ],
                                    snagsml: [
                                        [5, 16, "c1"],
                                        [-17, 5, "c1"]
                                    ]
                                },
                                large6: {
                                    snagtall: [
                                        [10, 8, "t3"],
                                        [-10, 7, "t3"]
                                    ],
                                    spin: [
                                        [-3, 1],
                                        [5, 12]
                                    ],
                                    slow: [
                                        [5, 3],
                                        [-24, 6],
                                        [25, 8],
                                        [-2, 15]
                                    ],
                                    bump: [
                                        [-7, 7],
                                        [-12, 4],
                                        [-4, 4],
                                        [20, 6],
                                        [-14, 12],
                                        [16, 13],
                                        [6, 16],
                                        [-3, 23]
                                    ],
                                    bumpbig: [
                                        [10, 8]
                                    ],
                                    slowbig: [
                                        [-15, 19],
                                        [14, 21]
                                    ],
                                    snag: [
                                        [-10, 14, "b1"],
                                        [-10, 2, "b4"],
                                        [-6, 4, "b4"],
                                        [-15, 6, "b3"],
                                        [6, 6, "b4"],
                                        [16, 8, "b1"],
                                        [-19, 9, "b4"],
                                        [19, 11, "b4"],
                                        [9, 13, "b4"],
                                        [-3, 19, "b4"],
                                        [0, 22, "b1"],
                                        [-12, 11, "b6"],
                                        [12, 11, "b6"],
                                        [10, 4, "b2"]
                                    ],
                                    snagsml: [
                                        [-5, 8, "c1"],
                                        [-18, 4, "c1"]
                                    ]
                                },
                                medium1: {
                                    snagsml: [
                                        [8, 1, "c1"]
                                    ],
                                    bump: [
                                        [10, 14],
                                        [-10, 10]
                                    ],
                                    wall: [
                                        [-2, 14, "sw"],
                                        [6, 14, "se"],
                                        [2, 14, "f"],
                                        [-2, 10, "n"]
                                    ],
                                    slowbig: [
                                        [4, 6]
                                    ],
                                    slow: [
                                        [-2, 2]
                                    ],
                                    snagtall: [
                                        [-7, 4, "t3"]
                                    ],
                                    snag: [
                                        [8, 16, "b2"],
                                        [-6, 12, "b1"],
                                        [-9, 8, "b6"],
                                        [4, 10, "b4"],
                                        [5, 1, "b1"]
                                    ]
                                },
                                medium2: {
                                    snag: [
                                        [12, 5, "b6"],
                                        [7, 14, "b1"],
                                        [10, 3, "b2"],
                                        [-5, 3, "b4"],
                                        [-9, 4, "b4"],
                                        [-2, 7, "b4"],
                                        [2, 9, "b1"],
                                        [-8, 11, "b4"],
                                        [-10, 15, "b4"],
                                        [-4, 15, "b4"]
                                    ],
                                    bump: [
                                        [-1, 4],
                                        [-11, 12],
                                        [5, 15]
                                    ],
                                    snagsml: [
                                        [-6, 13, "c1"]
                                    ],
                                    snagtall: [
                                        [-7, 5, "t3"],
                                        [14, 1, "t3"]
                                    ],
                                    slow: [
                                        [12, 10],
                                        [0, 14]
                                    ]
                                },
                                medium3: {
                                    slow: [
                                        [13, 8],
                                        [-3, 16],
                                        [-15, 14]
                                    ],
                                    snag: [
                                        [-11, 18, "b4"],
                                        [3, 17, "b2"],
                                        [0, 10, "b4"],
                                        [-10, 10, "b6"],
                                        [7, 16, "b6"]
                                    ],
                                    snagtall: [
                                        [4, 0, "t3"],
                                        [-13, 7, "t3"],
                                        [-2, 4, "t1"]
                                    ],
                                    spin: [
                                        [11, 3],
                                        [11, 13],
                                        [9, 8]
                                    ],
                                    bump: [
                                        [-9, 4],
                                        [2, 9]
                                    ],
                                    wall: [
                                        [-11, 6, "b"],
                                        [6, 6, "e"],
                                        [2, 6, "f"],
                                        [6, 10, "n"],
                                        [2, 14, "sw"],
                                        [6, 14, "se"]
                                    ],
                                    snagsml: [
                                        [-9, 16, "c1"]
                                    ]
                                },
                                medium4: {
                                    wall: [
                                        [-8, 10, "b"],
                                        [-8, 6, "e"]
                                    ],
                                    snagtall: [
                                        [-12, 4, "t1"],
                                        [1, 6, "t3"]
                                    ],
                                    bump: [
                                        [-16, 7],
                                        [5, 11],
                                        [17, 6]
                                    ],
                                    snag: [
                                        [10, 7, "b1"],
                                        [12, 5, "b4"],
                                        [4, 4, "b4"],
                                        [3, 13, "b4"],
                                        [-14, 9, "b4"],
                                        [-1, 5, "b6"],
                                        [12, 9, "b2"]
                                    ],
                                    slow: [
                                        [9, 3],
                                        [14, 13],
                                        [-12, 14]
                                    ]
                                },
                                medium5: {
                                    snagsml: [
                                        [4, 16, "c1"]
                                    ],
                                    blockbig: [
                                        [-5, 7]
                                    ],
                                    slow: [
                                        [-18, 6],
                                        [14, 10]
                                    ],
                                    bump: [
                                        [8, 7],
                                        [-11, 10],
                                        [9, 14]
                                    ],
                                    wall: [
                                        [-2, 13, "sw"],
                                        [2, 13, "f"]
                                    ],
                                    slowbig: [
                                        [-9, 18]
                                    ],
                                    snagtall: [
                                        [1, 3, "t3"],
                                        [6, 11, "t1"],
                                        [-6, 10, "t3"]
                                    ],
                                    snag: [
                                        [-10, 14, "b4"],
                                        [6, 3, "b4"],
                                        [3, 8, "b6"]
                                    ]
                                },
                                small1: {
                                    spin: [
                                        [2, 1]
                                    ],
                                    slowbig: [
                                        [-4, 4],
                                        [11, 9]
                                    ],
                                    bump: [
                                        [7, 4]
                                    ],
                                    blockbig: [
                                        [-4, 8]
                                    ],
                                    slow: [
                                        [3, 14]
                                    ],
                                    snagtall: [
                                        [-12, 7, "t3"],
                                        [-6, 3, "t3"]
                                    ],
                                    snag: [
                                        [11, 3, "b4"],
                                        [-11, 11, "b6"]
                                    ]
                                },
                                small2: {
                                    spin: [
                                        [-11, 3]
                                    ],
                                    bumpbig: [
                                        [-2, 2]
                                    ],
                                    bump: [
                                        [4, 6]
                                    ],
                                    slow: [
                                        [9, 9]
                                    ],
                                    slowbig: [
                                        [-5, 10]
                                    ],
                                    snag: [
                                        [-1, 6, "b4"],
                                        [8, 3, "b4"],
                                        [1, 4, "b1"],
                                        [-6, 4, "b2"]
                                    ]
                                },
                                small3: {
                                    bumpbig: [
                                        [2, 10]
                                    ],
                                    snagtall: [
                                        [-2, 5, "t3"]
                                    ],
                                    snag: [
                                        [8, 4, "b4"]
                                    ],
                                    wall: [
                                        [-6, 8, "b"]
                                    ],
                                    slow: [
                                        [-11, 10]
                                    ],
                                    bump: [
                                        [5, 3],
                                        [-8, 5]
                                    ]
                                },
                                small4: {
                                    slowbig: [
                                        [7, 9]
                                    ],
                                    bump: [
                                        [-3, 4]
                                    ],
                                    slow: [
                                        [-13, 4]
                                    ],
                                    snag: [
                                        [0, 10, "b1"],
                                        [-10, 7, "b4"],
                                        [3, 6, "b4"],
                                        [1, 4, "b4"],
                                        [-8, 4, "b2"],
                                        [-9, 2, "b4"],
                                        [8, 2, "b4"]
                                    ]
                                },
                                small5: {
                                    snag: [
                                        [-7, 11, "b4"],
                                        [-10, 9, "b4"],
                                        [11, 7, "b4"],
                                        [-4, 6, "b4"]
                                    ],
                                    block: [
                                        [7, 4],
                                        [-7, 2]
                                    ],
                                    bump: [
                                        [-2, 10],
                                        [8, 8],
                                        [-8, 7],
                                        [12, 3]
                                    ],
                                    spin: [
                                        [2, 1]
                                    ]
                                },
                                small6: {
                                    slow: [
                                        [-2, 2],
                                        [2, 8],
                                        [-4, 11]
                                    ],
                                    snag: [
                                        [6, 2, "b4"],
                                        [-7, 3, "b4"],
                                        [-4, 4, "b1"],
                                        [4, 5, "b4"],
                                        [8, 7, "b4"],
                                        [-6, 7, "b4"],
                                        [3, 11, "b2"]
                                    ],
                                    bump: [
                                        [10, 4],
                                        [-10, 6]
                                    ]
                                },
                                small7: {
                                    snag: [
                                        [-6, 9, "b4"],
                                        [6, 8, "b4"],
                                        [0, 5, "b4"],
                                        [5, 2, "b4"],
                                        [-8, 2, "b4"]
                                    ],
                                    slow: [
                                        [2, 10],
                                        [-2, 8],
                                        [-8, 6],
                                        [6, 6],
                                        [-4, 2]
                                    ]
                                },
                                small8: {
                                    wall: [
                                        [-2, 10, "sw"],
                                        [2, 10, "se"],
                                        [2, 6, "n"]
                                    ],
                                    bump: [
                                        [-8, 8],
                                        [6, 4]
                                    ],
                                    snag: [
                                        [7, 8, "b4"],
                                        [-4, 6, "b1"],
                                        [-2, 2, "b4"]
                                    ]
                                },
                                small9: {
                                    snag: [
                                        [5, 9, "b4"],
                                        [-6, 2, "b4"]
                                    ],
                                    slow: [
                                        [-14, 8],
                                        [9, 3]
                                    ],
                                    wall: [
                                        [4, 2, "n"],
                                        [0, 10, "se"],
                                        [-4, 10, "s"],
                                        [-8, 10, "sw"],
                                        [-8, 6, "w"],
                                        [4, 6, "se"],
                                        [0, 6, "f"]
                                    ],
                                    snagtall: [
                                        [-4, 4, "t1"]
                                    ],
                                    bump: [
                                        [-10, 3],
                                        [8, 9]
                                    ],
                                    slowbig: [
                                        [-5, 16]
                                    ]
                                },
                                small10: {
                                    slow: [
                                        [12, 10],
                                        [-9, 9]
                                    ],
                                    bump: [
                                        [6, 8],
                                        [-6, 4]
                                    ],
                                    snag: [
                                        [2, 9, "b4"],
                                        [-3, 8, "b4"],
                                        [-3, 4, "b4"],
                                        [6, 4, "b4"],
                                        [2, 2, "b4"]
                                    ],
                                    snagtall: [
                                        [1, 4, "t3"]
                                    ]
                                },
                                small11: {
                                    snagsml: [
                                        [-6, 2, "c1"]
                                    ],
                                    snag: [
                                        [-7, 8, "b4"],
                                        [2, 1, "b4"]
                                    ],
                                    wall: [
                                        [-4, 6, "sw"],
                                        [0, 6, "f"],
                                        [4, 6, "se"]
                                    ],
                                    bump: [
                                        [0, 8]
                                    ],
                                    snagtall: [
                                        [6, 7, "t3"]
                                    ]
                                },
                                small12: {
                                    slowbig: [
                                        [4, 9]
                                    ],
                                    blockbig: [
                                        [1, 4]
                                    ],
                                    slow: [
                                        [-9, 4],
                                        [6, 2]
                                    ],
                                    snag: [
                                        [-8, 7, "b4"],
                                        [9, 2, "b4"],
                                        [-5, 1, "b4"]
                                    ]
                                },
                                small13: {
                                    wall: [
                                        [-4, 10, "b"],
                                        [4, 6, "se"],
                                        [0, 6, "f"],
                                        [-4, 6, "w"]
                                    ],
                                    snag: [
                                        [6, 9, "b4"],
                                        [0, 8, "b4"],
                                        [3, 2, "b4"]
                                    ],
                                    bump: [
                                        [2, 10],
                                        [-8, 8],
                                        [-2, 2]
                                    ],
                                    spin: [
                                        [7, 1]
                                    ],
                                    snagsml: [
                                        [-9, 3, "c2"]
                                    ]
                                },
                                small14: {
                                    snag: [
                                        [-5, 5, "b3"],
                                        [2, 6, "b4"]
                                    ],
                                    bump: [
                                        [-9, 8],
                                        [6, 6],
                                        [3, 2]
                                    ],
                                    bumpbig: [
                                        [-3, 4],
                                        [-1, 10]
                                    ],
                                    snagsml: [
                                        [-3, 7, "c1"]
                                    ]
                                },
                                small15: {
                                    snag: [
                                        [6, 1, "b4"],
                                        [-5, 2, "b4"],
                                        [10, 3, "b2"],
                                        [-5, 6, "b1"],
                                        [-6, 9, "b4"],
                                        [-8, 4, "b6"]
                                    ],
                                    bump: [
                                        [7, 4],
                                        [-2, 4],
                                        [-10, 8]
                                    ]
                                },
                                small16: {
                                    bump: [
                                        [-4, 6],
                                        [4, 4]
                                    ],
                                    snag: [
                                        [-6, 8, "b2"],
                                        [-1, 5, "b4"],
                                        [-9, 4, "b4"],
                                        [7, 3, "b4"]
                                    ],
                                    snagsml: [
                                        [4, 7, "c1"]
                                    ],
                                    snagtall: [
                                        [-4, 1, "t3"]
                                    ]
                                },
                                tiny1: {
                                    snag: [
                                        [-4, 3, "b4"],
                                        [4, 2, "b1"]
                                    ],
                                    bumpbig: [
                                        [1, 5]
                                    ]
                                },
                                tiny2: {
                                    snag: [
                                        [2, 7, "b4"],
                                        [0, 4, "b2"]
                                    ],
                                    bump: [
                                        [-4, 4],
                                        [4, 2]
                                    ]
                                },
                                tiny3: {
                                    spin: [
                                        [-3, 7]
                                    ],
                                    snag: [
                                        [0, 3, "b2"],
                                        [3, 5, "b4"]
                                    ],
                                    bumpbig: [
                                        [0, 3]
                                    ]
                                },
                                tiny4: {
                                    snag: [
                                        [4, 2, "b4"]
                                    ],
                                    bump: [
                                        [-1, 4],
                                        [4, 5]
                                    ],
                                    snagtall: [
                                        [-3, 3, "t3"]
                                    ]
                                },
                                tiny5: {
                                    spin: [
                                        [-2, 6]
                                    ],
                                    slow: [
                                        [-4, 4]
                                    ],
                                    bump: [
                                        [4, 6],
                                        [2, 2]
                                    ]
                                },
                                tiny6: {
                                    bumpbig: [
                                        [0, 6]
                                    ],
                                    wall: [
                                        [2, 4, "b"]
                                    ],
                                    bump: [
                                        [0, 2]
                                    ]
                                },
                                tiny7: {
                                    snag: [
                                        [4, 5, "b4"],
                                        [-1, 4, "b2"],
                                        [0, 1, "b4"]
                                    ],
                                    snagtall: [
                                        [-4, 1, "t3"]
                                    ]
                                },
                                tiny8: {
                                    snag: [
                                        [1, 4, "b6"],
                                        [-4, 2, "b4"],
                                        [-2, 6, "b1"],
                                        [5, 2, "b1"],
                                        [6, 6, "b4"]
                                    ]
                                },
                                tiny9: {
                                    snag: [
                                        [0, 2, "b4"],
                                        [-3, 3, "b2"],
                                        [5, 3, "b4"],
                                        [1, 5, "b2"]
                                    ],
                                    bump: [
                                        [5, 6],
                                        [-4, 6]
                                    ]
                                },
                                tiny10: {
                                    snagtall: [
                                        [0, 3, "t3"]
                                    ],
                                    snag: [
                                        [4, 2, "b4"],
                                        [2, 6, "b4"],
                                        [-3, 2, "b6"]
                                    ],
                                    bump: [
                                        [-3, 6]
                                    ]
                                },
                                tiny11: {
                                    bump: [
                                        [4, 8]
                                    ],
                                    wall: [
                                        [0, 6, "se"],
                                        [-4, 6, "sw"]
                                    ],
                                    snag: [
                                        [-5, 2, "b4"]
                                    ],
                                    spin: [
                                        [0, 1]
                                    ],
                                    snagsml: [
                                        [5, 3, "c2"]
                                    ]
                                },
                                tiny12: {
                                    snag: [
                                        [-4, 1, "b6"],
                                        [4, 2, "b4"],
                                        [0, 3, "b1"],
                                        [-5, 5, "b4"]
                                    ],
                                    bump: [
                                        [2, 6]
                                    ]
                                },
                                tiny13: {
                                    snag: [
                                        [3, 6, "b4"],
                                        [-4, 4, "b4"],
                                        [0, 3, "b1"],
                                        [4, 1, "b3"]
                                    ],
                                    snagtall: [
                                        [-3, 0, "t3"]
                                    ]
                                },
                                tiny14: {
                                    snag: [
                                        [-4, 1, "b4"],
                                        [4, 3, "b4"],
                                        [-7, 4, "b6"]
                                    ],
                                    slowbig: [
                                        [-2, 4]
                                    ]
                                },
                                tiny15: {
                                    bump: [
                                        [7, 9]
                                    ],
                                    snagsml: [
                                        [3, 9, "c1"]
                                    ],
                                    wall: [
                                        [4, 6, "f"],
                                        [8, 6, "se"],
                                        [-4, 6, "sw"],
                                        [8, 2, "n"]
                                    ],
                                    snagtall: [
                                        [0, 4, "t1"]
                                    ],
                                    snag: [
                                        [-5, 2, "b4"]
                                    ],
                                    slow: [
                                        [-8, 10]
                                    ]
                                },
                                tiny16: {
                                    snag: [
                                        [3, 4, "b4"],
                                        [0, 2, "b1"]
                                    ],
                                    slow: [
                                        [-2, 6],
                                        [4, 2],
                                        [-4, 2]
                                    ]
                                },
                                tiny17: {
                                    snagtall: [
                                        [-1, 3, "t3"]
                                    ],
                                    bump: [
                                        [1, 2]
                                    ],
                                    snag: [
                                        [4, 2, "b4"],
                                        [2, 6, "b1"],
                                        [-3, 1, "b4"]
                                    ]
                                },
                                tiny18: {
                                    bump: [
                                        [2, 6]
                                    ],
                                    snag: [
                                        [4, 1, "b4"],
                                        [0, 3, "b1"],
                                        [-5, 2, "b4"]
                                    ],
                                    snagsml: [
                                        [-2, 5, "c1"]
                                    ],
                                    slow: [
                                        [-3, 0]
                                    ]
                                }
                            },
                            allPassive: {
                                passive1: {
                                    spiral: [
                                        [0, 6]
                                    ],
                                    slow: [
                                        [6, 12],
                                        [-7, 4]
                                    ],
                                    spin: [
                                        [6, 7],
                                        [-1, 10],
                                        [-3, 1],
                                        [-7, 7],
                                        [4, 2]
                                    ]
                                },
                                passive2: {
                                    bumpbig: [
                                        [1, 7]
                                    ],
                                    bump: [
                                        [11, 9],
                                        [-8, 10],
                                        [5, 2],
                                        [-10, 3]
                                    ],
                                    spin: [
                                        [-6, 4],
                                        [10, 5]
                                    ],
                                    slowbig: [
                                        [3, 13]
                                    ],
                                    slow: [
                                        [14, 3],
                                        [-1, 2],
                                        [-13, 7]
                                    ]
                                },
                                passive3: {
                                    slowbig: [
                                        [-1, 14]
                                    ],
                                    bumpbig: [
                                        [1, 6]
                                    ],
                                    slow: [
                                        [9, 4],
                                        [1, 10],
                                        [-11, 10],
                                        [-9, 5]
                                    ],
                                    bump: [
                                        [-4, 4],
                                        [-6, 8],
                                        [7, 9],
                                        [2, 3]
                                    ]
                                },
                                passive4: {
                                    slowbig: [
                                        [1, 13],
                                        [4, 2]
                                    ],
                                    bumpbig: [
                                        [-2, 7]
                                    ],
                                    spin: [
                                        [10, 4],
                                        [-12, 2]
                                    ],
                                    bump: [
                                        [4, 5],
                                        [-3, 4],
                                        [5, 9]
                                    ],
                                    slow: [
                                        [-7, 3],
                                        [-9, 10],
                                        [10, 9]
                                    ]
                                },
                                passive5: {
                                    slow: [
                                        [-3, 7],
                                        [-10, 9]
                                    ],
                                    slowbig: [
                                        [-2, 13],
                                        [6, 10],
                                        [3, 2]
                                    ],
                                    spiral: [
                                        [-8, 4],
                                        [7, 6]
                                    ]
                                }
                            },
                            zigzagGates: {
                                gateFirst: {
                                    guide: [
                                        [-13, -10],
                                        [13, -10],
                                        [5, 8],
                                        [-9, -6],
                                        [-8, -4],
                                        [8, 2],
                                        [8, -4],
                                        [-11, -8],
                                        [7, 5],
                                        [9, -6],
                                        [-9, 2],
                                        [11, -8]
                                    ],
                                    marker: [
                                        [8, -1],
                                        [-8, -1]
                                    ],
                                    gate: [
                                        [0, 1]
                                    ]
                                },
                                gateLeft: {
                                    guide: [
                                        [-7, 5],
                                        [-5, -10],
                                        [-8, -4],
                                        [9, -6],
                                        [9, 2],
                                        [8, -4],
                                        [-7, -7],
                                        [-8, 2],
                                        [-5, 8],
                                        [-2, 12]
                                    ],
                                    marker: [
                                        [8, -1],
                                        [-8, -1]
                                    ],
                                    gate: [
                                        [0, 1]
                                    ]
                                },
                                gateRight: {
                                    guide: [
                                        [7, -7],
                                        [2, 12],
                                        [7, 5],
                                        [-9, 2],
                                        [-8, -4],
                                        [8, -4],
                                        [8, 2],
                                        [5, 8],
                                        [-9, -6],
                                        [5, -10]
                                    ],
                                    marker: [
                                        [8, -1],
                                        [-8, -1]
                                    ],
                                    gate: [
                                        [0, 1]
                                    ]
                                }
                            },
                            zigzagGateScenes: {
                                center1: {
                                    snag: [
                                        [8, 9, "b4"],
                                        [-10, 9, "b4"],
                                        [-4, 7, "b4"],
                                        [16, -1, "b4"],
                                        [-16, -3, "b4"],
                                        [0, -7, "b4"],
                                        [6, -9, "b4"],
                                        [-6, -11, "b4"]
                                    ]
                                },
                                center2: {
                                    snag: [
                                        [4, 10, "b4"],
                                        [-2, 8, "b4"],
                                        [-16, 6, "b4"],
                                        [16, 4, "b4"],
                                        [6, -8, "b4"],
                                        [-2, -10, "b4"]
                                    ]
                                },
                                center3: {
                                    snag: [
                                        [0, -11, "b4"],
                                        [6, -10, "b4"],
                                        [-4, -10, "b4"],
                                        [14, -2, "b4"],
                                        [-16, -2, "b4"],
                                        [16, 2, "b4"],
                                        [-4, 8, "b4"],
                                        [4, 10, "b4"]
                                    ]
                                },
                                center4: {
                                    snag: [
                                        [-2, 9, "b4"],
                                        [14, 5, "b4"],
                                        [-16, 1, "b4"],
                                        [-4, -9, "b4"],
                                        [6, -11, "b4"]
                                    ]
                                },
                                center5: {
                                    snag: [
                                        [-2, 10, "b4"],
                                        [6, 10, "b4"],
                                        [0, 8, "b4"],
                                        [-14, 2, "b4"],
                                        [14, 0, "b4"],
                                        [-16, -2, "b4"],
                                        [16, -4, "b4"],
                                        [2, -10, "b4"],
                                        [-4, -12, "b4"]
                                    ]
                                },
                                center6: {
                                    snag: [
                                        [-14, 2, "b4"],
                                        [-16, -1, "b4"],
                                        [-2, 9, "b4"],
                                        [12, 1, "b4"],
                                        [14, -5, "b4"],
                                        [-6, -9, "b4"],
                                        [2, -11, "b4"]
                                    ]
                                }
                            },
                            timetrialScenes: {
                                start: {
                                    snagtall: [
                                        [-17, 45, "t3"],
                                        [16, 47, "t3"],
                                        [-20, 22, "t1"]
                                    ],
                                    snag: [
                                        [22, 20, "b4"],
                                        [-14, 20, "b4"],
                                        [-28, 22, "b4"],
                                        [18, 26, "b4"],
                                        [-20, 26, "b4"],
                                        [30, 28, "b4"],
                                        [-34, 28, "b4"],
                                        [-16, 30, "b4"],
                                        [20, 32, "b4"],
                                        [30, 34, "b4"],
                                        [-30, 36, "b4"],
                                        [22, 40, "b4"],
                                        [-20, 56, "b2"]
                                    ],
                                    bump: [
                                        [-26, 20],
                                        [28, 24],
                                        [14, 26],
                                        [-16, 26],
                                        [-28, 28],
                                        [20, 30],
                                        [-22, 34],
                                        [26, 42],
                                        [10, 48],
                                        [22, 50],
                                        [-8, 50],
                                        [-26, 52],
                                        [-12, 56],
                                        [-16, 58]
                                    ],
                                    wall: [
                                        [12, 24, "sw"],
                                        [16, 24, "f"],
                                        [20, 24, "se"],
                                        [-12, 24, "se"],
                                        [-16, 24, "f"],
                                        [-24, 24, "w"],
                                        [24, 28, "n"],
                                        [-24, 28, "n"],
                                        [16, 30, "b"],
                                        [24, 32, "sw"],
                                        [28, 32, "f"],
                                        [32, 32, "se"],
                                        [-20, 32, "se"],
                                        [-24, 32, "s"],
                                        [-28, 32, "f"],
                                        [-32, 32, "sw"]
                                    ],
                                    ramp: [
                                        [14, 40],
                                        [-14, 40]
                                    ],
                                    spin: [
                                        [-12, 44],
                                        [12, 52]
                                    ],
                                    blockbig: [
                                        [-16, 50],
                                        [17, 44]
                                    ],
                                    slow: [
                                        [-28, 50],
                                        [28, 52],
                                        [-4, 52],
                                        [6, 54],
                                        [-26, 58],
                                        [-21, 45]
                                    ],
                                    snagsml: [
                                        [-24, 46, "c5"]
                                    ],
                                    coin: [
                                        [0, 60]
                                    ]
                                },
                                intro: {
                                    ramp: [
                                        [0, 54]
                                    ],
                                    coin: [
                                        [22, 44]
                                    ],
                                    boost: [
                                        [-22, 44]
                                    ],
                                    bumpbig: [
                                        [-20, 20],
                                        [18, 18]
                                    ],
                                    slow: [
                                        [8, 46],
                                        [-4, 44],
                                        [-34, 42],
                                        [34, 36],
                                        [8, 36],
                                        [30, 34],
                                        [-18, 24],
                                        [18, 22],
                                        [-32, 22],
                                        [-12, 20],
                                        [-30, 18],
                                        [24, 16]
                                    ],
                                    spin: [
                                        [20, 26],
                                        [-22, 26],
                                        [-10, 20],
                                        [32, 18],
                                        [-32, 18],
                                        [12, 14]
                                    ],
                                    bump: [
                                        [-8, 62],
                                        [8, 60],
                                        [-30, 48],
                                        [12, 46],
                                        [-8, 46],
                                        [-34, 46],
                                        [30, 44],
                                        [-14, 44],
                                        [32, 40],
                                        [26, 34],
                                        [-26, 34],
                                        [-14, 24],
                                        [30, 22],
                                        [12, 22],
                                        [-28, 22],
                                        [28, 18],
                                        [-2, 10],
                                        [6, 8],
                                        [-6, 6],
                                        [2, 4]
                                    ],
                                    block: [
                                        [-9, 38]
                                    ],
                                    snagtall: [
                                        [14, 37, "t3"]
                                    ],
                                    snagsml: [
                                        [30, 36, "c2"],
                                        [-4, 6, "c2"],
                                        [10, 42, "c4"],
                                        [-28, 38, "c1"]
                                    ],
                                    snag: [
                                        [-4, 60, "b2"],
                                        [1, 6, "b2"],
                                        [4, 60, "b4"],
                                        [-2, 58, "b4"],
                                        [16, 42, "b4"],
                                        [-30, 42, "b4"],
                                        [-8, 42, "b4"],
                                        [26, 40, "b4"],
                                        [-16, 40, "b4"],
                                        [12, 36, "b4"],
                                        [-14, 36, "b4"],
                                        [-10, 34, "b4"],
                                        [2, 8, "b4"],
                                        [-2, 4, "b4"],
                                        [24, 36, "b6"],
                                        [-26, 36, "b3"]
                                    ]
                                },
                                act1a: {
                                    snagsml: [
                                        [-18, 11, "c1"],
                                        [5, 46, "c1"]
                                    ],
                                    bump: [
                                        [-17, 32],
                                        [-6, 57],
                                        [-14, 56],
                                        [10, 60],
                                        [16, 56],
                                        [6, 50],
                                        [-34, 48],
                                        [30, 48],
                                        [-4, 46],
                                        [-32, 42],
                                        [-22, 40],
                                        [-12, 40],
                                        [34, 40],
                                        [10, 38],
                                        [-30, 34],
                                        [32, 34],
                                        [18, 30],
                                        [-26, 24],
                                        [30, 24],
                                        [14, 18],
                                        [-20, 16],
                                        [20, 16],
                                        [-10, 14],
                                        [14, 12],
                                        [-14, 10]
                                    ],
                                    snag: [
                                        [7, 55, "b6"],
                                        [12, 58, "b4"],
                                        [14, 56, "b2"],
                                        [-6, 48, "b4"],
                                        [-10, 40, "b4"],
                                        [12, 40, "b4"],
                                        [-18, 34, "b2"],
                                        [18, 28, "b4"],
                                        [16, 16, "b4"],
                                        [-16, 14, "b4"],
                                        [-12, 12, "b4"],
                                        [18, 12, "b4"],
                                        [-7, 54, "b6"],
                                        [-9, 58, "b1"],
                                        [12, 14, "b1"]
                                    ],
                                    wall: [
                                        [-26, 48, "b"],
                                        [-10, 52, "se"],
                                        [-14, 52, "sw"],
                                        [10, 52, "sw"],
                                        [14, 52, "se"],
                                        [-10, 48, "n"],
                                        [10, 48, "n"],
                                        [26, 48, "b"],
                                        [-26, 44, "n"],
                                        [-6, 44, "se"],
                                        [-10, 44, "w"],
                                        [6, 44, "sw"],
                                        [10, 44, "e"],
                                        [26, 44, "n"],
                                        [-26, 40, "n"],
                                        [-6, 40, "n"],
                                        [6, 40, "n"],
                                        [26, 40, "n"],
                                        [-22, 36, "se"],
                                        [-26, 36, "w"],
                                        [-6, 36, "n"],
                                        [6, 36, "n"],
                                        [22, 36, "sw"],
                                        [26, 36, "e"],
                                        [-22, 32, "n"],
                                        [-6, 32, "n"],
                                        [6, 32, "n"],
                                        [22, 32, "n"],
                                        [-18, 28, "se"],
                                        [-22, 28, "w"],
                                        [-6, 28, "n"],
                                        [6, 28, "n"],
                                        [-18, 24, "n"]
                                    ],
                                    life: [
                                        [-20, 48]
                                    ],
                                    bumpbig: [
                                        [32, 52],
                                        [-32, 30],
                                        [32, 30],
                                        [-29, 54]
                                    ],
                                    coin: [
                                        [24, 14]
                                    ],
                                    spiral: [
                                        [6, 8],
                                        [-6, 6]
                                    ]
                                },
                                act1b: {
                                    snag: [
                                        [4, 32, "b4"],
                                        [8, 36, "b2"],
                                        [-8, 46, "b1"],
                                        [-6, 44, "b7"],
                                        [-10, 40, "b4"],
                                        [-22, 38, "b4"],
                                        [-4, 36, "b3"],
                                        [-28, 28, "b2"],
                                        [28, 8, "b4"],
                                        [2, 6, "b4"],
                                        [0, 4, "b4"],
                                        [11, 34, "b6"],
                                        [26, 27, "b2"]
                                    ],
                                    bump: [
                                        [-3, 40],
                                        [0, 60],
                                        [2, 50],
                                        [-24, 48],
                                        [-32, 46],
                                        [34, 46],
                                        [-30, 42],
                                        [6, 40],
                                        [20, 40],
                                        [32, 38],
                                        [-20, 36],
                                        [-8, 34],
                                        [-32, 34],
                                        [30, 34],
                                        [8, 32],
                                        [-30, 30],
                                        [-22, 24],
                                        [24, 24],
                                        [-34, 24],
                                        [30, 10],
                                        [-28, 10],
                                        [0, 8],
                                        [32, 25]
                                    ],
                                    snagtall: [
                                        [-6, 37, "t3"],
                                        [10, 39, "t3"],
                                        [-22, 30, "t1"],
                                        [0, 56, "t1"]
                                    ],
                                    spiral: [
                                        [-2, 26],
                                        [6, 22]
                                    ],
                                    bumpbig: [
                                        [32, 18],
                                        [-32, 16]
                                    ],
                                    ramp: [
                                        [-16, 14],
                                        [16, 14]
                                    ],
                                    wall: [
                                        [-4, 58, "sw"],
                                        [4, 58, "se"],
                                        [4, 54, "n"],
                                        [-26, 44, "sw"],
                                        [-22, 44, "se"],
                                        [26, 44, "se"],
                                        [22, 44, "sw"],
                                        [-26, 40, "n"],
                                        [26, 40, "n"],
                                        [-26, 36, "n"],
                                        [22, 36, "sw"],
                                        [26, 36, "e"],
                                        [-18, 32, "se"],
                                        [-26, 32, "w"],
                                        [22, 32, "n"],
                                        [-18, 28, "n"],
                                        [18, 28, "s"],
                                        [14, 28, "sw"],
                                        [22, 28, "e"],
                                        [-18, 24, "w"],
                                        [-10, 24, "se"],
                                        [-14, 24, "f"],
                                        [18, 24, "n"],
                                        [-22, 20, "sw"],
                                        [-18, 20, "e"],
                                        [22, 20, "se"],
                                        [18, 20, "w"],
                                        [-22, 16, "n"],
                                        [22, 16, "n"],
                                        [-22, 12, "n"],
                                        [22, 12, "n"]
                                    ],
                                    coin: [
                                        [3, 36]
                                    ]
                                },
                                act2a: {
                                    snag: [
                                        [8, 41, "b2"],
                                        [7, 46, "b6"],
                                        [12, 54, "b2"],
                                        [28, 52, "b2"],
                                        [30, 48, "b4"],
                                        [28, 42, "b4"],
                                        [12, 42, "b4"],
                                        [24, 38, "b4"],
                                        [-6, 26, "b4"],
                                        [-13, 18, "b4"],
                                        [5, 12, "b6"],
                                        [10, 44, "b4"],
                                        [-6, 55, "b4"]
                                    ],
                                    snagtall: [
                                        [30, 43, "t2"],
                                        [-16, 22, "t1"],
                                        [16, 10, "t3"],
                                        [9, 47, "t3"]
                                    ],
                                    snagsml: [
                                        [10, 15, "c4"],
                                        [12, 12, "c5"],
                                        [9, 11, "c5"],
                                        [25, 40, "c1"]
                                    ],
                                    blockbig: [
                                        [10, 7]
                                    ],
                                    boost: [
                                        [24, 48]
                                    ],
                                    spin: [
                                        [10, 38],
                                        [20, 34],
                                        [6, 32],
                                        [-6, 30]
                                    ],
                                    wall: [
                                        [4, 40, "b"],
                                        [4, 36, "e"],
                                        [0, 36, "sw"],
                                        [-10, 36, "b"],
                                        [-10, 32, "n"],
                                        [-8, 24, "se"],
                                        [-12, 24, "f"]
                                    ],
                                    bumpbig: [
                                        [-18, 46],
                                        [32, 38],
                                        [-20, 38],
                                        [32, 30],
                                        [-24, 30],
                                        [-26, 22],
                                        [-28, 14]
                                    ],
                                    bump: [
                                        [12, 58],
                                        [8, 56],
                                        [2, 56],
                                        [34, 54],
                                        [-22, 54],
                                        [4, 52],
                                        [-20, 50],
                                        [36, 48],
                                        [34, 42],
                                        [-12, 42],
                                        [-18, 42],
                                        [0, 40],
                                        [-28, 40],
                                        [8, 36],
                                        [32, 34],
                                        [-22, 34],
                                        [-28, 34],
                                        [-14, 32],
                                        [-36, 30],
                                        [-32, 28],
                                        [32, 26],
                                        [-12, 26],
                                        [-26, 26],
                                        [28, 24],
                                        [34, 24],
                                        [34, 20],
                                        [-36, 18],
                                        [-22, 18],
                                        [-30, 18],
                                        [30, 16],
                                        [-36, 12],
                                        [-28, 10],
                                        [-22, 8],
                                        [-26, 6]
                                    ],
                                    coin: [
                                        [14, 19]
                                    ]
                                },
                                act2b: {
                                    snagtall: [
                                        [-20, 26, "t1"],
                                        [4, 6, "t1"],
                                        [6, 48, "t1"],
                                        [-8, 46, "t2"]
                                    ],
                                    wall: [
                                        [-4, 4, "e"],
                                        [-8, 4, "sw"],
                                        [-24, 6, "se"],
                                        [12, 8, "e"],
                                        [8, 8, "f"],
                                        [0, 8, "f"],
                                        [-4, 8, "sw"],
                                        [-32, 10, "w"],
                                        [-28, 10, "se"],
                                        [12, 12, "b"],
                                        [-32, 14, "n"],
                                        [-32, 18, "b"],
                                        [-12, 28, "se"],
                                        [-16, 28, "f"],
                                        [-4, 42, "b"],
                                        [2, 50, "f"],
                                        [-2, 50, "w"],
                                        [-26, 50, "n"],
                                        [-2, 54, "n"],
                                        [-26, 54, "b"],
                                        [-2, 58, "se"],
                                        [-6, 58, "sw"],
                                        [-28, 6, "w"]
                                    ],
                                    bump: [
                                        [16, 6],
                                        [-10, 8],
                                        [-36, 8],
                                        [18, 12],
                                        [6, 16],
                                        [12, 16],
                                        [-28, 18],
                                        [8, 20],
                                        [32, 20],
                                        [4, 22],
                                        [10, 24],
                                        [24, 24],
                                        [36, 28],
                                        [12, 30],
                                        [8, 32],
                                        [-16, 32],
                                        [2, 34],
                                        [0, 42],
                                        [6, 42],
                                        [-6, 52],
                                        [-30, 52],
                                        [30, 54],
                                        [4, 54],
                                        [-22, 54],
                                        [-28, 56],
                                        [32, 60],
                                        [-8, 60],
                                        [-26, 60],
                                        [24, 62]
                                    ],
                                    snag: [
                                        [-6, 10, "b4"],
                                        [32, 12, "b4"],
                                        [-36, 12, "b4"],
                                        [-26, 14, "b4"],
                                        [34, 16, "b4"],
                                        [32, 22, "b4"],
                                        [28, 24, "b4"],
                                        [34, 24, "b4"],
                                        [-12, 24, "b4"],
                                        [-8, 26, "b1"],
                                        [-24, 26, "b1"],
                                        [30, 26, "b4"],
                                        [32, 28, "b4"],
                                        [26, 28, "b4"],
                                        [-14, 34, "b4"],
                                        [30, 36, "b4"],
                                        [-10, 44, "b4"],
                                        [-24, 46, "b4"],
                                        [32, 56, "b4"],
                                        [30, 58, "b4"],
                                        [26, 60, "b4"]
                                    ],
                                    ramp: [
                                        [-16, 12],
                                        [26, 16]
                                    ],
                                    bumpbig: [
                                        [4, 28],
                                        [4, 38],
                                        [0, 46]
                                    ],
                                    coin: [
                                        [-30, 34]
                                    ],
                                    life: [
                                        [24, 34]
                                    ]
                                },
                                act3a: {
                                    blockbig: [
                                        [0, 52]
                                    ],
                                    block: [
                                        [-36, 34],
                                        [-14, 11]
                                    ],
                                    ramp: [
                                        [20, 6],
                                        [8, 6],
                                        [-18, 6],
                                        [-10, 30],
                                        [14, 54],
                                        [-24, 54]
                                    ],
                                    bumpbig: [
                                        [-8, 8],
                                        [24, 24],
                                        [-6, 34],
                                        [36, 42],
                                        [-36, 46],
                                        [36, 58],
                                        [-10, 58]
                                    ],
                                    boost: [
                                        [-10, 22],
                                        [26, 56]
                                    ],
                                    snagsml: [
                                        [25, 27, "c1"]
                                    ],
                                    snagtall: [
                                        [0, 30, "t2"],
                                        [-23, 12, "t3"],
                                        [3, 55, "t3"],
                                        [32, 30, "t3"],
                                        [30, 26, "t3"],
                                        [-31, 37, "t3"]
                                    ],
                                    bump: [
                                        [-26, 4],
                                        [-20, 12],
                                        [-22, 18],
                                        [-4, 26],
                                        [-34, 26],
                                        [22, 28],
                                        [-18, 32],
                                        [-32, 32],
                                        [32, 36],
                                        [-8, 38],
                                        [0, 46],
                                        [36, 54],
                                        [20, 54],
                                        [-36, 54],
                                        [-2, 60],
                                        [-10, 15],
                                        [-35, 39]
                                    ],
                                    snag: [
                                        [28, 30, "b6"],
                                        [-8, 51, "b6"],
                                        [-24, 2, "b4"],
                                        [-8, 6, "b4"],
                                        [-26, 8, "b4"],
                                        [-28, 10, "b4"],
                                        [-8, 12, "b4"],
                                        [-16, 14, "b4"],
                                        [28, 18, "b4"],
                                        [12, 18, "b4"],
                                        [22, 20, "b4"],
                                        [0, 24, "b4"],
                                        [-36, 28, "b4"],
                                        [-2, 28, "b4"],
                                        [2, 28, "b4"],
                                        [-34, 30, "b4"],
                                        [-20, 30, "b4"],
                                        [-6, 30, "b4"],
                                        [36, 32, "b4"],
                                        [26, 34, "b4"],
                                        [28, 36, "b4"],
                                        [-6, 36, "b4"],
                                        [-36, 42, "b4"],
                                        [32, 44, "b4"],
                                        [34, 48, "b4"],
                                        [-34, 48, "b4"],
                                        [2, 48, "b4"],
                                        [32, 50, "b4"],
                                        [18, 56, "b4"],
                                        [-8, 56, "b4"],
                                        [-4, 58, "b4"],
                                        [36, 60, "b4"],
                                        [-6, 49, "b4"],
                                        [10, 16, "b6"]
                                    ]
                                },
                                act3b: {
                                    snag: [
                                        [31, 50, "b6"],
                                        [-8, 34, "b3"],
                                        [-33, 32, "b6"],
                                        [-22, 60, "b4"],
                                        [-26, 58, "b4"],
                                        [32, 58, "b4"],
                                        [-28, 56, "b4"],
                                        [26, 56, "b4"],
                                        [-36, 54, "b4"],
                                        [-24, 54, "b4"],
                                        [-34, 50, "b4"],
                                        [14, 48, "b4"],
                                        [-16, 44, "b4"],
                                        [12, 44, "b4"],
                                        [36, 42, "b4"],
                                        [34, 36, "b4"],
                                        [-36, 34, "b4"],
                                        [0, 32, "b4"],
                                        [-32, 24, "b4"],
                                        [28, 24, "b4"],
                                        [32, 20, "b4"],
                                        [-34, 18, "b4"],
                                        [0, 16, "b4"],
                                        [30, 16, "b4"],
                                        [-16, 14, "b4"],
                                        [34, 14, "b4"],
                                        [26, 12, "b4"],
                                        [-24, 10, "b4"],
                                        [12, 10, "b4"],
                                        [22, 10, "b4"],
                                        [16, 8, "b4"],
                                        [30, 8, "b4"],
                                        [-20, 6, "b4"],
                                        [-26, 4, "b2"]
                                    ],
                                    bump: [
                                        [32, 46],
                                        [-32, 52],
                                        [8, 48],
                                        [16, 46],
                                        [-10, 38],
                                        [24, 38],
                                        [-30, 34],
                                        [-4, 32],
                                        [4, 30],
                                        [-32, 28],
                                        [30, 26],
                                        [-2, 20],
                                        [-6, 18],
                                        [28, 18],
                                        [-36, 16],
                                        [22, 16],
                                        [-18, 12],
                                        [32, 10],
                                        [34, 6]
                                    ],
                                    snagsml: [
                                        [18, 42, "c2"],
                                        [15, 13, "c1"]
                                    ],
                                    snagtall: [
                                        [-36, 27, "t3"],
                                        [10, 45, "t3"],
                                        [20, 11, "t3"],
                                        [34, 46, "t3"]
                                    ],
                                    life: [
                                        [-26, 46]
                                    ],
                                    coin: [
                                        [22, 22]
                                    ],
                                    bumpbig: [
                                        [-32, 62],
                                        [34, 60],
                                        [30, 54],
                                        [-16, 42],
                                        [-38, 22],
                                        [32, 18],
                                        [-20, 8]
                                    ],
                                    ramp: [
                                        [-18, 38],
                                        [14, 38],
                                        [-4, 14],
                                        [28, 4]
                                    ]
                                },
                                act4a: {
                                    snagsml: [
                                        [6, 57, "c1"],
                                        [14, 23, "c1"]
                                    ],
                                    snag: [
                                        [-16, 52, "b6"],
                                        [-26, 5, "b4"],
                                        [42, 52, "b4"],
                                        [38, 46, "b4"],
                                        [31, 42, "b4"],
                                        [-34, 52, "b4"],
                                        [-37, 49, "b4"],
                                        [-12, 62, "b4"],
                                        [14, 58, "b4"],
                                        [-14, 58, "b4"],
                                        [38, 54, "b4"],
                                        [-10, 50, "b4"],
                                        [42, 50, "b4"],
                                        [32, 46, "b4"],
                                        [-34, 46, "b4"],
                                        [30, 44, "b4"],
                                        [-32, 44, "b4"],
                                        [12, 42, "b4"],
                                        [-34, 42, "b4"],
                                        [-42, 42, "b4"],
                                        [34, 40, "b4"],
                                        [-36, 40, "b4"],
                                        [-40, 40, "b4"],
                                        [16, 38, "b4"],
                                        [10, 36, "b4"],
                                        [6, 34, "b4"],
                                        [18, 30, "b4"],
                                        [-8, 30, "b4"],
                                        [-10, 26, "b4"],
                                        [-32, 26, "b4"],
                                        [-14, 24, "b4"],
                                        [10, 22, "b4"],
                                        [-10, 20, "b4"],
                                        [-14, 20, "b4"],
                                        [-32, 16, "b4"],
                                        [-12, 8, "b4"],
                                        [-28, 8, "b4"],
                                        [6, 6, "b4"],
                                        [-10, 6, "b4"],
                                        [34, 4, "b4"],
                                        [30, 2, "b4"],
                                        [-12, 2, "b4"],
                                        [-41, 45, "b4"],
                                        [-39, 47, "b4"],
                                        [-32, 54, "b4"],
                                        [40, 48, "b4"],
                                        [35, 47, "b4"],
                                        [-26, 14, "b6"],
                                        [2, 8, "b6"],
                                        [8, 61, "b3"],
                                        [-13, 54, "b1"]
                                    ],
                                    snagtall: [
                                        [14, 33, "t3"],
                                        [-12, 27, "t3"],
                                        [-30, 5, "t3"],
                                        [7, 23, "t2"],
                                        [32, 10, "t3"]
                                    ],
                                    bump: [
                                        [5, 24],
                                        [-43, 42],
                                        [-34, 49],
                                        [10, 62],
                                        [4, 60],
                                        [-16, 60],
                                        [10, 56],
                                        [-10, 56],
                                        [40, 54],
                                        [-30, 54],
                                        [-12, 48],
                                        [36, 46],
                                        [-42, 46],
                                        [36, 40],
                                        [-38, 40],
                                        [14, 40],
                                        [6, 38],
                                        [18, 34],
                                        [4, 32],
                                        [10, 28],
                                        [16, 26],
                                        [-16, 26],
                                        [-34, 24],
                                        [18, 22],
                                        [-8, 22],
                                        [-30, 18],
                                        [-36, 18],
                                        [30, 10],
                                        [-14, 6],
                                        [6, 4],
                                        [-8, 4],
                                        [-28, 4],
                                        [29, 42],
                                        [-17, 55]
                                    ],
                                    boost: [
                                        [18, 46],
                                        [-28, 40]
                                    ],
                                    bumpbig: [
                                        [-10, 32],
                                        [-30, 12],
                                        [32, 6]
                                    ],
                                    ramp: [
                                        [24, 22],
                                        [-24, 22],
                                        [0, 4]
                                    ]
                                },
                                act4b: {
                                    slowbig: [
                                        [-16, 42],
                                        [-14, 32],
                                        [17, 43],
                                        [30, 39],
                                        [-32, 26],
                                        [-31, 37]
                                    ],
                                    ramp: [
                                        [22, 18],
                                        [0, 8],
                                        [-22, 12]
                                    ],
                                    snag: [
                                        [15, 34, "b4"],
                                        [-9, 58, "b6"],
                                        [-6, 10, "b4"],
                                        [34, 62, "b4"],
                                        [-32, 62, "b4"],
                                        [-30, 60, "b4"],
                                        [32, 58, "b4"],
                                        [8, 58, "b4"],
                                        [12, 56, "b4"],
                                        [-12, 56, "b4"],
                                        [-34, 56, "b4"],
                                        [36, 54, "b4"],
                                        [28, 40, ["special4"]],
                                        [18, 38, ["special3"]],
                                        [-28, 38, ["special1"]],
                                        [-16, 36, ["special2"]],
                                        [-6, 30, "b4"],
                                        [26, 28, "b4"],
                                        [-4, 28, "b4"],
                                        [-8, 28, "b4"],
                                        [-24, 28, "b3"],
                                        [16, 26, "b4"],
                                        [-12, 26, "b4"],
                                        [28, 24, "b4"],
                                        [14, 24, "b4"],
                                        [-18, 22, "b4"],
                                        [26, 20, "b4"],
                                        [12, 20, "b4"],
                                        [-16, 20, "b4"],
                                        [-20, 20, "b4"],
                                        [8, 18, "b4"],
                                        [32, 16, "b4"],
                                        [-24, 16, "b4"],
                                        [2, 14, "b4"],
                                        [-26, 14, "b4"],
                                        [30, 12, "b4"],
                                        [-2, 12, "b4"],
                                        [-28, 12, "b4"],
                                        [-30, 10, "b4"],
                                        [32, 8, "b4"],
                                        [34, 6, "b4"],
                                        [-12, 6, "b4"],
                                        [-34, 6, "b4"],
                                        [30, 4, "b4"],
                                        [-10, 4, "b4"],
                                        [16, 2, "b4"],
                                        [-14, 2, "b4"],
                                        [-30, 2, "b4"],
                                        [-34, 0, "b4"],
                                        [-8, 8, "b6"],
                                        [-1, 30, "b6"],
                                        [0, 33, "b4"]
                                    ],
                                    snagtall: [
                                        [-32, 57, "t3"],
                                        [18, 29, "t3"],
                                        [-14, 22, "t3"],
                                        [-28, 5, "t3"],
                                        [13, 3, "t3"],
                                        [30, 17, "t3"],
                                        [4, 14, "t3"],
                                        [-26, 17, "t3"]
                                    ],
                                    blockbig: [
                                        [26, 34],
                                        [-26, 32]
                                    ],
                                    coin: [
                                        [6, 28]
                                    ],
                                    friend: [
                                        [-8, 18]
                                    ],
                                    bumpbig: [
                                        [-32, 18],
                                        [34, 16],
                                        [32, 10],
                                        [7, 18]
                                    ],
                                    bump: [
                                        [30, 62],
                                        [10, 62],
                                        [-10, 62],
                                        [-36, 62],
                                        [36, 60],
                                        [-14, 58],
                                        [-30, 58],
                                        [32, 56],
                                        [10, 54],
                                        [14, 32],
                                        [-4, 32],
                                        [22, 28],
                                        [-10, 26],
                                        [-18, 26],
                                        [16, 24],
                                        [10, 22],
                                        [-22, 22],
                                        [-32, 22],
                                        [28, 18],
                                        [-20, 18],
                                        [-30, 14],
                                        [-10, 10],
                                        [16, 6],
                                        [-32, 4],
                                        [32, 2],
                                        [12, 2]
                                    ],
                                    snagsml: [
                                        [14, 60, "c1"]
                                    ]
                                },
                                act5a: {
                                    spiral: [
                                        [10, 36],
                                        [0, 32]
                                    ],
                                    coin: [
                                        [6, 30]
                                    ],
                                    slow: [
                                        [0, 36],
                                        [12, 24],
                                        [0, 24]
                                    ],
                                    snag: [
                                        [22, 50, "b4"],
                                        [-14, 44, "b4"],
                                        [-8, 42, "b4"],
                                        [-12, 40, "b4"],
                                        [-22, 20, "b2"]
                                    ],
                                    snagsml: [
                                        [-18, 50, "c5"],
                                        [16, 48, "c5"],
                                        [8, 46, "c5"],
                                        [10, 42, "c5"],
                                        [-12, 20, "c5"],
                                        [26, 16, "c5"],
                                        [16, 14, "c5"],
                                        [-6, 12, "c5"],
                                        [-18, 12, "c5"]
                                    ],
                                    bump: [
                                        [-18, 58],
                                        [-22, 52],
                                        [10, 50],
                                        [-10, 46],
                                        [20, 16],
                                        [-6, 16],
                                        [-28, 16],
                                        [28, 14],
                                        [-10, 14],
                                        [14, 12]
                                    ],
                                    blockbig: [
                                        [-14, 52],
                                        [16, 44],
                                        [-18, 16],
                                        [24, 10]
                                    ],
                                    spin: [
                                        [-2, 48],
                                        [18, 4]
                                    ],
                                    slowbig: [
                                        [32, 36],
                                        [-20, 30],
                                        [12, 28],
                                        [-2, 28],
                                        [-8, 6],
                                        [12, 2]
                                    ]
                                },
                                act5b: {
                                    bumpbig: [
                                        [0, 17]
                                    ],
                                    blockbig: [
                                        [-10, 51],
                                        [-28, 36],
                                        [17, 32]
                                    ],
                                    slowbig: [
                                        [-31, 52],
                                        [-22, 32],
                                        [-24, 14],
                                        [24, 16],
                                        [-10, 24],
                                        [21, 45]
                                    ],
                                    bump: [
                                        [-20, 37],
                                        [10, 38],
                                        [28, 2],
                                        [-30, 10],
                                        [-34, 46],
                                        [33, 41],
                                        [3, 10],
                                        [-5, 49]
                                    ],
                                    wall: [
                                        [20, 40, "f"],
                                        [0, 6, "se"],
                                        [-4, 6, "w"],
                                        [-4, 10, "n"],
                                        [4, 14, "se"],
                                        [-4, 14, "s"],
                                        [-8, 14, "sw"],
                                        [24, 36, "n"],
                                        [28, 40, "se"],
                                        [24, 40, "s"],
                                        [12, 40, "sw"],
                                        [-24, 40, "n"],
                                        [-28, 44, "w"],
                                        [-24, 44, "se"],
                                        [10, 46, "b"],
                                        [-8, 48, "b"],
                                        [-28, 48, "b"]
                                    ],
                                    snagtall: [
                                        [16, 38, "t1"],
                                        [0, 12, "t1"],
                                        [-9, 42, "t3"]
                                    ],
                                    snag: [
                                        [-23, 47, "b1"],
                                        [30, 4, "b4"],
                                        [-26, 4, "b4"],
                                        [-32, 6, "b4"],
                                        [26, 10, "b4"],
                                        [8, 16, "b1"],
                                        [-12, 46, "b1"],
                                        [29, 35, "b1"],
                                        [25, 6, "b6"]
                                    ],
                                    snagsml: [
                                        [21, 2, "c2"],
                                        [32, 38, "c1"],
                                        [10, 34, "c5"],
                                        [-26, 8, "c4"],
                                        [24, 30, "c5"],
                                        [-30, 39, "c5"],
                                        [-20, 40, "c5"],
                                        [-14, 49, "c5"],
                                        [34, 8, "c2"],
                                        [-20, 8, "c2"],
                                        [-34, 10, "c2"]
                                    ],
                                    life: [
                                        [2, 42]
                                    ],
                                    coin: [
                                        [-22, 54]
                                    ]
                                },
                                act6a: {
                                    snagtall: [
                                        [14, 45, "t3"],
                                        [30, 33, "t3"],
                                        [-7, 30, "t3"],
                                        [-30, 35, "t3"],
                                        [-14, 8, "t3"],
                                        [-44, 20, "t3"],
                                        [28, 27, "t2"]
                                    ],
                                    snag: [
                                        [12, 44, "b4"],
                                        [-20, 50, "b6"],
                                        [-25, 4, "b2"],
                                        [16, 58, "b6"],
                                        [34, 41, "b4"],
                                        [-8, 14, "b6"],
                                        [12, 60, "b4"],
                                        [-18, 54, "b4"],
                                        [12, 54, "b4"],
                                        [-12, 52, "b4"],
                                        [-16, 48, "b4"],
                                        [34, 48, "b4"],
                                        [10, 48, "b4"],
                                        [30, 44, "b4"],
                                        [18, 44, "b4"],
                                        [16, 42, "b4"],
                                        [28, 40, "b4"],
                                        [-34, 38, "b4"],
                                        [-4, 38, "b4"],
                                        [-32, 34, "b4"],
                                        [-26, 34, "b4"],
                                        [-10, 34, "b4"],
                                        [32, 32, "b4"],
                                        [8, 30, "b4"],
                                        [4, 28, "b4"],
                                        [0, 26, "b4"],
                                        [32, 26, "b4"],
                                        [14, 14, "b4"],
                                        [18, 12, "b4"],
                                        [24, 10, "b4"],
                                        [-24, 8, "b4"],
                                        [-28, 6, "b4"],
                                        [-22, 6, "b4"],
                                        [-8, 6, "b4"],
                                        [-43, 14, "b6"],
                                        [-10, 11, "b4"],
                                        [-12, 13, "b4"],
                                        [14, 56, "b3"],
                                        [-28, 39, "b6"],
                                        [16, 49, "b4"]
                                    ],
                                    snagsml: [
                                        [26, 22, "c1"],
                                        [6, 34, "c2"],
                                        [-8, 40, "c1"]
                                    ],
                                    bumpbig: [
                                        [-18, 14],
                                        [22, 16]
                                    ],
                                    coin: [
                                        [22, 58]
                                    ],
                                    life: [
                                        [-26, 48]
                                    ],
                                    ramp: [
                                        [4, 20]
                                    ],
                                    bump: [
                                        [8, 58],
                                        [-22, 54],
                                        [10, 52],
                                        [-14, 50],
                                        [30, 48],
                                        [-4, 42],
                                        [16, 40],
                                        [-24, 38],
                                        [-10, 38],
                                        [-36, 34],
                                        [36, 28],
                                        [4, 26],
                                        [30, 24],
                                        [22, 20],
                                        [-12, 18],
                                        [-28, 12],
                                        [-20, 10],
                                        [-16, 6]
                                    ]
                                },
                                act6b: {
                                    slowbig: [
                                        [-12, 49],
                                        [-27, 4],
                                        [31, 49],
                                        [40, 21],
                                        [16, 5],
                                        [2, 42],
                                        [4, 2],
                                        [35, 15],
                                        [-38, 13],
                                        [-18, 39],
                                        [-33, 43]
                                    ],
                                    block: [
                                        [-27, 12],
                                        [28, 38]
                                    ],
                                    slow: [
                                        [-35, 20],
                                        [-14, 24],
                                        [8, 16],
                                        [-8, 18],
                                        [14, 22],
                                        [-2, 30],
                                        [42, 42],
                                        [-24, 27]
                                    ],
                                    snagtall: [
                                        [15, 12, "t3"],
                                        [-14, 5, "t3"],
                                        [-19, 13, "t3"],
                                        [-42, 19, "t3"],
                                        [17, 43, "t3"]
                                    ],
                                    snagsml: [
                                        [-26, 22, "c1"]
                                    ],
                                    snag: [
                                        [-20, 4, "b4"],
                                        [-2, 4, "b4"],
                                        [-22, 6, "b2"],
                                        [-24, 8, "b4"],
                                        [-18, 8, "b4"],
                                        [-20, 10, "b4"],
                                        [-14, 10, "b4"],
                                        [-26, 16, "b4"],
                                        [-32, 16, "b2"],
                                        [-30, 20, "b4"],
                                        [32, 24, "b4"],
                                        [-38, 24, "b4"],
                                        [-40, 26, "b4"],
                                        [24, 28, "b4"],
                                        [-36, 28, "b4"],
                                        [-20, 30, "b4"],
                                        [38, 30, "b2"],
                                        [26, 32, "b4"],
                                        [-22, 32, "b4"],
                                        [30, 34, "b4"],
                                        [36, 36, "b4"],
                                        [16, 40, "b4"],
                                        [20, 42, "b4"],
                                        [12, 42, "b4"],
                                        [24, 44, "b4"],
                                        [4, 50, "b2"],
                                        [14, 52, "b4"],
                                        [28, 29, "b3"],
                                        [1, 8, "b6"],
                                        [22, 38, "b6"]
                                    ],
                                    bump: [
                                        [-16, 4],
                                        [4, 10],
                                        [-22, 12],
                                        [-16, 12],
                                        [-28, 18],
                                        [-24, 20],
                                        [40, 24],
                                        [-30, 24],
                                        [34, 26],
                                        [38, 28],
                                        [-32, 28],
                                        [-26, 30],
                                        [34, 32],
                                        [26, 32],
                                        [-36, 36],
                                        [34, 38],
                                        [16, 38],
                                        [20, 40],
                                        [10, 42],
                                        [20, 46],
                                        [10, 50],
                                        [0, 52],
                                        [-12, 9]
                                    ],
                                    bumpbig: [
                                        [0, 6],
                                        [8, 46]
                                    ],
                                    spiral: [
                                        [-6, 30],
                                        [6, 38],
                                        [2, 23]
                                    ],
                                    ramp: [
                                        [18, 34]
                                    ],
                                    boost: [
                                        [-14, 32]
                                    ],
                                    coin: [
                                        [-28, 50]
                                    ]
                                },
                                act7a: {
                                    snag: [
                                        [33, 39, "b6"],
                                        [-12, 12, "b4"],
                                        [12, 14, "b2"],
                                        [4, 22, "b1"],
                                        [-34, 26, "b2"],
                                        [18, 28, "b2"],
                                        [-18, 30, "b1"],
                                        [2, 56, "b4"],
                                        [-12, 58, "b2"],
                                        [28, 30, "b4"]
                                    ],
                                    snagsml: [
                                        [-10, 22, "c1"]
                                    ],
                                    snagtall: [
                                        [0, 58, "t1"],
                                        [20, 32, "t1"],
                                        [-28, 32, "t1"],
                                        [-30, 37, "t3"],
                                        [0, 18, "t1"]
                                    ],
                                    wall: [
                                        [24, 34, "f"],
                                        [8, 12, "n"],
                                        [8, 16, "se"],
                                        [-8, 16, "n"],
                                        [-4, 20, "f"],
                                        [-8, 20, "sw"],
                                        [8, 24, "b"],
                                        [32, 30, "n"],
                                        [-32, 30, "n"],
                                        [32, 34, "se"],
                                        [28, 34, "f"],
                                        [-20, 34, "se"],
                                        [-24, 34, "f"],
                                        [-32, 34, "sw"],
                                        [18, 38, "b"],
                                        [-12, 52, "b"],
                                        [8, 60, "se"],
                                        [4, 60, "f"],
                                        [-8, 60, "sw"],
                                        [-4, 60, "f"],
                                        [4, 16, "sw"]
                                    ],
                                    ramp: [
                                        [0, 10],
                                        [24, 28],
                                        [-24, 28],
                                        [6, 54],
                                        [-6, 54]
                                    ],
                                    bump: [
                                        [-6, 12],
                                        [-12, 16],
                                        [12, 18],
                                        [6, 20],
                                        [-4, 22],
                                        [20, 30],
                                        [-28, 30],
                                        [-36, 32],
                                        [36, 34],
                                        [16, 34],
                                        [28, 36],
                                        [-18, 36],
                                        [-10, 56],
                                        [10, 58],
                                        [0, 62]
                                    ],
                                    slowbig: [
                                        [-28, 12],
                                        [-2, 32],
                                        [-24, 48],
                                        [24, 56],
                                        [32, 19]
                                    ]
                                },
                                act7b: {
                                    snagtall: [
                                        [14, 46, "t3"],
                                        [24, 16, "t1"],
                                        [-4, 42, "t1"],
                                        [-16, 16, "t1"],
                                        [14, 13, "t3"]
                                    ],
                                    coin: [
                                        [0, 8]
                                    ],
                                    bump: [
                                        [-26, 10],
                                        [12, 16],
                                        [-32, 18],
                                        [-12, 18],
                                        [-24, 20],
                                        [28, 22],
                                        [0, 32],
                                        [2, 34],
                                        [-24, 38],
                                        [2, 42],
                                        [18, 42],
                                        [12, 46],
                                        [-4, 48],
                                        [10, 54]
                                    ],
                                    ramp: [
                                        [-20, 12],
                                        [20, 12],
                                        [0, 28]
                                    ],
                                    wall: [
                                        [-28, 14, "n"],
                                        [28, 14, "n"],
                                        [-28, 18, "sw"],
                                        [-24, 18, "f"],
                                        [28, 18, "se"],
                                        [16, 18, "w"],
                                        [16, 22, "sw"],
                                        [20, 22, "s"],
                                        [24, 22, "se"],
                                        [-30, 24, "b"],
                                        [-12, 44, "sw"],
                                        [-8, 44, "f"],
                                        [8, 44, "w"],
                                        [12, 44, "f"],
                                        [16, 44, "se"],
                                        [4, 48, "sw"],
                                        [8, 48, "se"],
                                        [-20, 18, "s"],
                                        [20, 18, "f"]
                                    ],
                                    snag: [
                                        [-34, 14, "b4"],
                                        [-14, 14, "b4"],
                                        [32, 16, "b4"],
                                        [30, 24, "b4"],
                                        [2, 32, "b3"],
                                        [-26, 40, "b4"],
                                        [4, 44, "b4"],
                                        [-8, 46, "b4"],
                                        [-10, 50, "b2"]
                                    ],
                                    slowbig: [
                                        [-14, 24],
                                        [16, 32],
                                        [-28, 44],
                                        [28, 50],
                                        [-6, 60]
                                    ],
                                    snagsml: [
                                        [12, 20, "c1"]
                                    ]
                                },
                                finish: {
                                    bumpbig: [
                                        [-28, 26],
                                        [15, 40],
                                        [26, 26]
                                    ],
                                    finish: [
                                        [0, 29, ["default"]]
                                    ],
                                    coin: [
                                        [0, 5]
                                    ],
                                    snagtall: [
                                        [-22, 19, "t3"],
                                        [-27, 37, "t3"],
                                        [16, 19, "t3"],
                                        [24, 45, "t3"],
                                        [19, 48, "t3"],
                                        [-31, 40, "t3"],
                                        [-14, 31, "t1"],
                                        [14, 31, "t1"],
                                        [-36, 23, "t3"]
                                    ],
                                    snagsml: [
                                        [41, 24, "c1"],
                                        [20, 5, "c3"],
                                        [15, 10, "c3"],
                                        [11, 19, "c3"],
                                        [-11, 19, "c3"],
                                        [12, 15, "c3"],
                                        [-12, 15, "c3"],
                                        [-15, 10, "c3"],
                                        [-20, 5, "c3"],
                                        [-36, 38, "c1"],
                                        [36, 40, "c1"]
                                    ],
                                    bump: [
                                        [-39, 28],
                                        [-18, 41],
                                        [29, 47],
                                        [-7, 47],
                                        [7, 43],
                                        [37, 34],
                                        [-17, 31],
                                        [33, 30],
                                        [13, 27],
                                        [35, 23],
                                        [-37, 34],
                                        [26, 38]
                                    ],
                                    wall: [
                                        [32, 46, "b"],
                                        [-6, 45, "se"],
                                        [-14, 45, "sw"],
                                        [-10, 45, "f"],
                                        [-10, 41, "se"],
                                        [-14, 41, "w"],
                                        [22, 41, "b"],
                                        [-10, 37, "e"],
                                        [-14, 37, "s"],
                                        [-18, 37, "f"],
                                        [30, 37, "sw"],
                                        [14, 37, "f"],
                                        [22, 37, "e"],
                                        [18, 37, "s"],
                                        [10, 37, "sw"],
                                        [-22, 37, "sw"],
                                        [34, 37, "se"],
                                        [30, 33, "f"],
                                        [-22, 33, "e"],
                                        [-30, 33, "s"],
                                        [26, 33, "s"],
                                        [22, 33, "s"],
                                        [-34, 33, "sw"],
                                        [18, 33, "f"],
                                        [34, 33, "e"],
                                        [-34, 29, "n"],
                                        [26, 29, "n"],
                                        [34, 29, "n"],
                                        [-26, 33, "f"]
                                    ],
                                    block: [
                                        [-23, 42],
                                        [19, 27],
                                        [-30, 20]
                                    ],
                                    blockbig: [
                                        [14, 43],
                                        [26, 21],
                                        [-20, 26]
                                    ],
                                    snag: [
                                        [-43, 22, "b3"],
                                        [-29, 28, "b2"],
                                        [28, 43, "b3"],
                                        [-18, 33, "b1"],
                                        [30, 29, "b1"],
                                        [-26, 46, "b6"],
                                        [-33, 36, "b1"],
                                        [33, 18, "b3"],
                                        [-42, 31, "b2"],
                                        [40, 30, "b2"]
                                    ],
                                    slow: [
                                        [-11, 52],
                                        [-10, 23],
                                        [31, 53],
                                        [-40, 16],
                                        [9, 23],
                                        [-45, 38]
                                    ],
                                    slowbig: [
                                        [-44, 47],
                                        [44, 28],
                                        [31, 14],
                                        [12, 52],
                                        [41, 44],
                                        [-25, 14],
                                        [-47, 28],
                                        [-27, 52]
                                    ]
                                }
                            }
                        }
                    }
                }
                de.sys = null;
                class pe {
                    constructor() {
                        if (this.canvas = void 0, this.ctx = void 0, this.gradient = void 0, this.bg = void 0, this.offset = void 0, pe.sys) return pe.sys;
                        pe.sys = this
                    }
                    createBackground() {
                        this.canvas = ve.sys.createNewCanvas(), this.ctx = this.canvas.getContext("2d"), this.gradient = ve.sys.createNew("div", document.body, "game-gradient"), this.bg = ve.sys.createNew("div", document.body, "game-bg"), this.offset = {
                            x: 0,
                            y: 0
                        }
                    }
                    updateBackground(e = 0, t = 0, s) {
                        this.offset.x = this.offset.x + (s.x - e), this.offset.y = this.offset.y + (s.y - t), this.bg.style.backgroundPosition = -this.offset.x + "px " + -this.offset.y + "px"
                    }
                    defineCanvas() {
                        const e = window.getComputedStyle(this.canvas.parentNode);
                        se.sys.session.w = parseInt(e.getPropertyValue("width"), 10), se.sys.session.h = parseInt(e.getPropertyValue("height"), 10), this.canvas.style.width = se.sys.session.w + "px", this.canvas.style.height = se.sys.session.h + "px", this.canvas.width = se.sys.session.w, this.canvas.height = se.sys.session.h, se.sys.session.x = Math.floor(.5 * se.sys.session.w), se.sys.session.y = Math.floor(.4 * se.sys.session.h), this.ctx.imageSmoothingEnabled = !1
                    }
                    clearCanvas() {
                        this.ctx.clearRect(0, 0, se.sys.session.w, se.sys.session.h)
                    }
                    drawFx(e = 0, t = 0, s = 0) {
                        const i = ge.sys.sheet.fx,
                            a = i.poseData.effect,
                            o = Math.floor(e * i.fps) % a.length;
                        this.draw(be.sys.objectsImg, i, t, s, a[o])
                    }
                    drawPlayerSprite(e, t = 0, s = 0, i = 0, a = 1) {
                        const o = ge.sys.sheet.player,
                            n = se.sys.game.caught ? o.poseData.end : o.poseData[e],
                            r = Math.floor(t * o.fps) % 3;
                        this.drawScaled(ge.sys.playerSprite, o, s, i, {
                            x: n,
                            y: o.mount[r]
                        }, a)
                    }
                    drawPlayerMenu(e, t, s = 0, i = 0, a = 1) {
                        const o = ge.sys.sheet.player,
                            n = o.character[e],
                            r = o.poseData[t];
                        this.drawScaled(be.sys.playerImg, o, s, i, {
                            x: r,
                            y: 0
                        }, a), this.drawScaled(be.sys.playerImg, o, s, i, {
                            x: r,
                            y: n
                        }, a)
                    }
                    drawNpc(e, t, s, i) {
                        const a = ge.sys.sheet.npc,
                            o = {
                                x: a.poseData[e],
                                y: 64 * t
                            };
                        this.draw(be.sys.objectsImg, a, s, i, o)
                    }
                    drawLayer(e, t, s = 0, i = 0, a = 0, o = "looping", n) {
                        if ("hidden" === o) return;
                        const r = ge.sys.sheet[e],
                            l = r.poseData[t] || [],
                            h = Math.floor(a * r.fps) % l.length;
                        if (this.draw(be.sys.objectsImg, r, s, i, l[h]), ("oneshot" === o || "ending" === o) && Math.ceil(a * r.fps) > l.length - 1) switch (o) {
                            case "oneshot":
                                n.anim = "paused";
                                break;
                            case "ending":
                                n.sleep = !0
                        }
                    }
                    drawShadow(e, t, s) {
                        const i = pe.sys.ctx;
                        i.beginPath(), i.arc(e, t + s, 20 - s / 12, 0, 2 * Math.PI), i.fillStyle = "rgba(0,0,0," + (.6 - s / 200) + ")", i.fill()
                    }
                    drawBoost(e) {
                        const t = pe.sys.ctx;
                        t.strokeStyle = "rgba(" + be.sys.accent + ",0.5)", t.lineCap = "round", t.setLineDash([]), e.forEach((e => {
                            const s = .5 - e.time;
                            t.lineWidth = 6 * s, t.beginPath(), t.moveTo(e.start.x, e.start.y), t.lineTo(e.end.x, e.end.y), t.stroke()
                        }))
                    }
                    drawShield(e, t) {
                        const s = se.sys.game.shields.current / se.sys.game.shields.max / 2 + .5,
                            i = Math.cos(4 * se.sys.game.time.elapsed) + 3,
                            a = Math.cos(4 * (se.sys.game.time.elapsed + 2)) + 3,
                            o = (32 + 4 * i) * s,
                            n = (50 + 5 * a) * s,
                            r = pe.sys.ctx;
                        r.beginPath(), r.ellipse(e, t, o, .7 * o, 0, 0, 2 * Math.PI), r.strokeStyle = "rgba(" + be.sys.accent + "," + (6 - i) / 4 + ")", r.lineWidth = 6 - i, r.stroke(), r.beginPath(), r.ellipse(e, t, n / 2, n / 2 * .7, 0, 0, 2 * Math.PI), r.fillStyle = "rgba(" + be.sys.accent + "," + a / 8 + ")", r.fill()
                    }
                    drawPickup(e) {
                        if (e.time >= 1) return e.pickup = !1, void(e.sleep = !0);
                        const t = e.time % 1,
                            s = e.h / 2 * (t / 1.5 + .5),
                            i = e.h * Math.min(t, .5),
                            a = pe.sys.ctx;
                        a.beginPath(), a.arc(e.x, e.y, s, 0, 2 * Math.PI), a.strokeStyle = "rgba(" + be.sys.accent + "," + (1 - t) + ")", a.lineWidth = 6 * (1 - t), a.stroke(), a.beginPath(), a.arc(e.x, e.y, i, 0, 2 * Math.PI), a.strokeStyle = "rgba(" + be.sys.accent + "," + (1 - 2 * t) + ")", a.lineWidth = 6 * (1 - 2 * t), a.stroke()
                    }
                    drawHitbox(e, t) {
                        const s = ge.sys.sheet[e].str;
                        if (void 0 === s) return;
                        const i = "crash" !== s;
                        let a = be.sys.hitbox[s];
                        if (se.sys.session.forcedColors) switch (s) {
                            case "crash":
                                a = "CanvasText";
                                break;
                            case "boost":
                                a = "GrayText";
                                break;
                            case "avoid":
                                a = "LinkText"
                        }
                        const o = pe.sys.ctx;
                        o.beginPath(), o.lineWidth = 4, o.strokeStyle = a + "", i ? o.setLineDash([8]) : o.setLineDash([]), o.strokeRect(Math.floor(t.x) + 1, Math.floor(t.y) + 1, t.w - 2, t.h - 2)
                    }
                    drawBoundaries() {
                        const e = se.sys.session.x - se.sys.game.dist.x,
                            t = ge.sys.boundary[se.sys.session.settings.mode],
                            s = pe.sys.ctx;
                        s.beginPath(), s.rect(0, 0, e - t, se.sys.session.h), s.rect(e + t, 0, se.sys.session.w, se.sys.session.h), s.fillStyle = "rgba(" + be.sys.boundary + ")", s.fill()
                    }
                    drawScaled(e, t, s, i, a, o = 1) {
                        pe.sys.ctx.drawImage(e, a.x, a.y, t.w, t.h, Math.floor(s - t.w / (2 / o)), Math.floor(i - t.h / (2 / o)), t.w * o, t.h * o)
                    }
                    draw(e, t, s, i, a) {
                        pe.sys.ctx.drawImage(e, a.x, a.y, t.w, t.h, Math.floor(s - t.w / 2), Math.floor(i - t.h / 2), t.w, t.h)
                    }
                }
                pe.sys = null;
                class be {
                    constructor() {
                        if (this.objectsImg = null, this.playerImg = null, this.bgImg = null, this.bgSize = void 0, this.objectsTemp = null, this.playerTemp = null, this.bgTemp = null, this.gradient = void 0, this.hitbox = void 0, this.boundary = void 0, this.accent = void 0, be.sys) return be.sys;
                        be.sys = this, this.setupImages()
                    }
                    setupImages() {
                        this.objectsImg = new Image, this.playerImg = new Image, this.bgImg = new Image, this.bgSize = 256
                    }
                    loadNewTheme(e) {
                        const t = be.allThemes[e];
                        this.objectsTemp = new Image, this.objectsTemp.src = t.folder + "/objects.png", this.playerTemp = new Image, this.playerTemp.src = t.folder + "/player.png", this.bgTemp = new Image, this.bgTemp.src = t.folder + "/bg.png"
                    }
                    setNewTheme(e) {
                        const t = be.allThemes[e];
                        this.objectsImg.src = this.objectsTemp.src, this.playerImg.src = this.playerTemp.src, this.bgImg.src = this.bgTemp.src, this.gradient = t.gradient, this.hitbox = t.hitbox, this.boundary = t.boundary, this.accent = t.accent, pe.sys.bg.style.backgroundImage = "url(" + this.bgImg.src + ")", pe.sys.bg.style.backgroundSize = this.bgSize + "px " + this.bgSize + "px";
                        const s = this.gradient.start.join(", "),
                            i = this.gradient.end.join(", ");
                        pe.sys.gradient.style.background = "linear-gradient(180deg, rgb(" + s + ") 0%, rgb(" + i + ") 100%)", se.sys.session.settings.theme = e, ge.sys.createPlayerSprite(), se.sys.saveSessionSettings(), delete this.objectsTemp, delete this.playerTemp, delete this.bgTemp
                    }
                }
                be.sys = null, be.allThemes = {
                    ...U
                };
                class ge {
                    constructor() {
                        if (this.playerSprite = new Image, this.sheet = {
                                player: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "crash",
                                    hitbox: {
                                        x: 20,
                                        y: 32,
                                        w: 24,
                                        h: 24
                                    },
                                    poseData: {
                                        stop: 0,
                                        left: 64,
                                        downleft: 128,
                                        down: 192,
                                        downright: 256,
                                        right: 320,
                                        crash: 384,
                                        end: 448,
                                        air1: 512,
                                        air2: 576,
                                        chase: 192
                                    },
                                    mount: [0, 64, 128],
                                    friend: 192,
                                    character: {
                                        player1: 256,
                                        player2: 320,
                                        player3: 384,
                                        player4: 448,
                                        player5: 512,
                                        player6: 576,
                                        player7: 640,
                                        konami: 704,
                                        linux: 768
                                    }
                                },
                                npc: {
                                    w: 64,
                                    h: 64,
                                    fps: 0,
                                    str: "crash",
                                    group: "npc",
                                    hitbox: {
                                        x: 20,
                                        y: 32,
                                        w: 24,
                                        h: 24
                                    },
                                    poseData: {
                                        left: 1152,
                                        right: 1216,
                                        crash: 1280
                                    }
                                },
                                foe: {
                                    w: 128,
                                    h: 128,
                                    fps: 6,
                                    str: "crash",
                                    group: "foe",
                                    hitbox: {
                                        x: 32,
                                        y: 80,
                                        w: 64,
                                        h: 40
                                    },
                                    poseData: {
                                        chase: [{
                                            x: 1152,
                                            y: 256
                                        }, {
                                            x: 1280,
                                            y: 256
                                        }, {
                                            x: 1408,
                                            y: 256
                                        }, {
                                            x: 1536,
                                            y: 256
                                        }],
                                        crash: [{
                                            x: 1664,
                                            y: 256
                                        }, {
                                            x: 1792,
                                            y: 256
                                        }],
                                        end: [{
                                            x: 1152,
                                            y: 384
                                        }, {
                                            x: 1280,
                                            y: 384
                                        }, {
                                            x: 1408,
                                            y: 384
                                        }, {
                                            x: 1536,
                                            y: 384
                                        }, {
                                            x: 1664,
                                            y: 384
                                        }, {
                                            x: 1792,
                                            y: 384
                                        }]
                                    }
                                },
                                wall: {
                                    w: 64,
                                    h: 64,
                                    fps: 0,
                                    str: "crash",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 6,
                                        y: 16,
                                        w: 52,
                                        h: 32
                                    },
                                    poseData: {
                                        sw: [{
                                            x: 0,
                                            y: 448
                                        }],
                                        s: [{
                                            x: 64,
                                            y: 448
                                        }],
                                        se: [{
                                            x: 128,
                                            y: 448
                                        }],
                                        w: [{
                                            x: 192,
                                            y: 448
                                        }],
                                        e: [{
                                            x: 256,
                                            y: 448
                                        }],
                                        n: [{
                                            x: 320,
                                            y: 448
                                        }],
                                        b: [{
                                            x: 384,
                                            y: 448
                                        }],
                                        f1: [{
                                            x: 448,
                                            y: 448
                                        }],
                                        f2: [{
                                            x: 512,
                                            y: 448
                                        }],
                                        f3: [{
                                            x: 576,
                                            y: 448
                                        }]
                                    }
                                },
                                wallDecor: {
                                    w: 32,
                                    h: 32,
                                    fps: 0,
                                    poseData: {
                                        a: [{
                                            x: 384,
                                            y: 416
                                        }],
                                        b: [{
                                            x: 416,
                                            y: 416
                                        }],
                                        c: [{
                                            x: 448,
                                            y: 416
                                        }],
                                        d: [{
                                            x: 480,
                                            y: 416
                                        }],
                                        e: [{
                                            x: 512,
                                            y: 416
                                        }],
                                        f: [{
                                            x: 544,
                                            y: 416
                                        }],
                                        g: [{
                                            x: 576,
                                            y: 416
                                        }],
                                        h: [{
                                            x: 608,
                                            y: 416
                                        }]
                                    }
                                },
                                snag: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "crash",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 16,
                                        y: 36,
                                        w: 32,
                                        h: 20
                                    },
                                    poseData: {
                                        side1: [{
                                            x: 0,
                                            y: 64
                                        }],
                                        side2: [{
                                            x: 64,
                                            y: 64
                                        }],
                                        hurdle1: [{
                                            x: 128,
                                            y: 64
                                        }],
                                        hurdle2: [{
                                            x: 192,
                                            y: 64
                                        }],
                                        vehicle1: [{
                                            x: 256,
                                            y: 64
                                        }],
                                        vehicle2: [{
                                            x: 320,
                                            y: 64
                                        }],
                                        common1: [{
                                            x: 384,
                                            y: 64
                                        }],
                                        common2: [{
                                            x: 448,
                                            y: 64
                                        }],
                                        common3: [{
                                            x: 512,
                                            y: 64
                                        }],
                                        common4: [{
                                            x: 576,
                                            y: 64
                                        }],
                                        common5: [{
                                            x: 640,
                                            y: 64
                                        }],
                                        warn1: [{
                                            x: 704,
                                            y: 64
                                        }],
                                        isle1: [{
                                            x: 768,
                                            y: 64
                                        }],
                                        isle2: [{
                                            x: 832,
                                            y: 64
                                        }],
                                        isle3: [{
                                            x: 896,
                                            y: 64
                                        }],
                                        special1: [{
                                            x: 1536,
                                            y: 192
                                        }],
                                        special2: [{
                                            x: 1600,
                                            y: 192
                                        }],
                                        special3: [{
                                            x: 1664,
                                            y: 192
                                        }],
                                        special4: [{
                                            x: 1728,
                                            y: 192
                                        }]
                                    }
                                },
                                snagsml: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "crash",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 22,
                                        y: 36,
                                        w: 20,
                                        h: 20
                                    },
                                    poseData: {
                                        debris1: [{
                                            x: 384,
                                            y: 0
                                        }],
                                        debris2: [{
                                            x: 448,
                                            y: 0
                                        }],
                                        beacon1: [{
                                            x: 512,
                                            y: 0
                                        }],
                                        point1: [{
                                            x: 576,
                                            y: 0
                                        }],
                                        rare1: [{
                                            x: 640,
                                            y: 0
                                        }],
                                        decor1: [{
                                            x: 704,
                                            y: 0
                                        }],
                                        decor2: [{
                                            x: 768,
                                            y: 0
                                        }],
                                        decor3: [{
                                            x: 832,
                                            y: 0
                                        }],
                                        decor4: [{
                                            x: 896,
                                            y: 0
                                        }]
                                    }
                                },
                                snagtall: {
                                    w: 64,
                                    h: 128,
                                    fps: 6,
                                    str: "crash",
                                    fx: 36,
                                    group: "top",
                                    hitbox: {
                                        x: 12,
                                        y: 88,
                                        w: 40,
                                        h: 24
                                    },
                                    poseData: {
                                        tall1: [{
                                            x: 640,
                                            y: 384
                                        }],
                                        tall2: [{
                                            x: 704,
                                            y: 384
                                        }],
                                        tall3: [{
                                            x: 768,
                                            y: 384
                                        }],
                                        tall4: [{
                                            x: 832,
                                            y: 384
                                        }],
                                        tall5: [{
                                            x: 896,
                                            y: 384
                                        }],
                                        tall6: [{
                                            x: 768,
                                            y: 256
                                        }],
                                        tall7: [{
                                            x: 832,
                                            y: 256
                                        }],
                                        tall8: [{
                                            x: 896,
                                            y: 256
                                        }]
                                    }
                                },
                                spin: {
                                    w: 32,
                                    h: 32,
                                    fps: 0,
                                    str: "avoid",
                                    fx: 4,
                                    group: "top",
                                    hitbox: {
                                        x: 8,
                                        y: 20,
                                        w: 16,
                                        h: 12
                                    },
                                    poseData: {
                                        spin1: [{
                                            x: 384,
                                            y: 384
                                        }],
                                        spin2: [{
                                            x: 416,
                                            y: 384
                                        }],
                                        spin3: [{
                                            x: 448,
                                            y: 384
                                        }],
                                        spin4: [{
                                            x: 480,
                                            y: 384
                                        }],
                                        spin5: [{
                                            x: 512,
                                            y: 384
                                        }]
                                    }
                                },
                                spiral: {
                                    w: 128,
                                    h: 128,
                                    fps: 6,
                                    str: "avoid",
                                    group: "btm",
                                    hitbox: {
                                        x: 16,
                                        y: 32,
                                        w: 96,
                                        h: 64
                                    },
                                    poseData: {
                                        spiral1: [{
                                            x: 0,
                                            y: 128
                                        }, {
                                            x: 128,
                                            y: 128
                                        }, {
                                            x: 256,
                                            y: 128
                                        }]
                                    }
                                },
                                block: {
                                    w: 128,
                                    h: 128,
                                    fps: 0,
                                    str: "crash",
                                    group: "top",
                                    hitbox: {
                                        x: 24,
                                        y: 64,
                                        w: 80,
                                        h: 40
                                    },
                                    poseData: {
                                        block1: [{
                                            x: 384,
                                            y: 256
                                        }],
                                        block2: [{
                                            x: 512,
                                            y: 256
                                        }],
                                        block3: [{
                                            x: 640,
                                            y: 256
                                        }]
                                    }
                                },
                                blockbig: {
                                    w: 192,
                                    h: 128,
                                    fps: 0,
                                    str: "crash",
                                    group: "top",
                                    hitbox: {
                                        x: 24,
                                        y: 64,
                                        w: 144,
                                        h: 40
                                    },
                                    poseData: {
                                        blockbig1: [{
                                            x: 384,
                                            y: 128
                                        }],
                                        blockbig2: [{
                                            x: 576,
                                            y: 128
                                        }],
                                        blockbig3: [{
                                            x: 768,
                                            y: 128
                                        }]
                                    }
                                },
                                marker: {
                                    w: 64,
                                    h: 64,
                                    fps: 0,
                                    str: "crash",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 20,
                                        y: 36,
                                        w: 24,
                                        h: 20
                                    },
                                    poseData: {
                                        default: [{
                                            x: 1792,
                                            y: 192
                                        }],
                                        pass: [{
                                            x: 1856,
                                            y: 192
                                        }],
                                        fail: [{
                                            x: 1792,
                                            y: 192
                                        }]
                                    }
                                },
                                guide: {
                                    w: 32,
                                    h: 32,
                                    fps: 0,
                                    str: "avoid",
                                    fx: 4,
                                    group: "top",
                                    hitbox: {
                                        x: 4,
                                        y: 20,
                                        w: 24,
                                        h: 12
                                    },
                                    poseData: {
                                        default: [{
                                            x: 544,
                                            y: 384
                                        }],
                                        pass: [{
                                            x: 576,
                                            y: 384
                                        }],
                                        fail: [{
                                            x: 608,
                                            y: 384
                                        }]
                                    }
                                },
                                slow: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "avoid",
                                    group: "btm",
                                    hitbox: {
                                        x: 4,
                                        y: 8,
                                        w: 56,
                                        h: 48
                                    },
                                    poseData: {
                                        slow1: [{
                                            x: 1536,
                                            y: 0
                                        }, {
                                            x: 1536,
                                            y: 64
                                        }, {
                                            x: 1536,
                                            y: 128
                                        }],
                                        slow2: [{
                                            x: 1600,
                                            y: 0
                                        }, {
                                            x: 1600,
                                            y: 64
                                        }, {
                                            x: 1600,
                                            y: 128
                                        }],
                                        slow3: [{
                                            x: 1664,
                                            y: 0
                                        }, {
                                            x: 1664,
                                            y: 64
                                        }, {
                                            x: 1664,
                                            y: 128
                                        }]
                                    }
                                },
                                slowbig: {
                                    w: 192,
                                    h: 64,
                                    fps: 6,
                                    str: "avoid",
                                    group: "btm",
                                    hitbox: {
                                        x: 8,
                                        y: 8,
                                        w: 176,
                                        h: 48
                                    },
                                    poseData: {
                                        slowbig1: [{
                                            x: 1536,
                                            y: 0
                                        }, {
                                            x: 1536,
                                            y: 64
                                        }, {
                                            x: 1536,
                                            y: 128
                                        }]
                                    }
                                },
                                bump: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "avoid",
                                    group: "btm",
                                    hitbox: {
                                        x: 4,
                                        y: 8,
                                        w: 56,
                                        h: 48
                                    },
                                    poseData: {
                                        bump1: [{
                                            x: 1728,
                                            y: 0
                                        }, {
                                            x: 1728,
                                            y: 64
                                        }, {
                                            x: 1728,
                                            y: 128
                                        }],
                                        bump2: [{
                                            x: 1792,
                                            y: 0
                                        }, {
                                            x: 1792,
                                            y: 64
                                        }, {
                                            x: 1792,
                                            y: 128
                                        }],
                                        bump3: [{
                                            x: 1856,
                                            y: 0
                                        }, {
                                            x: 1856,
                                            y: 64
                                        }, {
                                            x: 1856,
                                            y: 128
                                        }]
                                    }
                                },
                                bumpbig: {
                                    w: 192,
                                    h: 64,
                                    fps: 6,
                                    str: "avoid",
                                    group: "btm",
                                    hitbox: {
                                        x: 8,
                                        y: 8,
                                        w: 176,
                                        h: 48
                                    },
                                    poseData: {
                                        bumpbig1: [{
                                            x: 1728,
                                            y: 0
                                        }, {
                                            x: 1728,
                                            y: 64
                                        }, {
                                            x: 1728,
                                            y: 128
                                        }]
                                    }
                                },
                                ramp: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "boost",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 8,
                                        y: 8,
                                        w: 48,
                                        h: 24
                                    },
                                    poseData: {
                                        ramp: [{
                                            x: 960,
                                            y: 0
                                        }, {
                                            x: 960,
                                            y: 64
                                        }, {
                                            x: 960,
                                            y: 128
                                        }, {
                                            x: 960,
                                            y: 192
                                        }]
                                    }
                                },
                                boost: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "boost",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 0,
                                        y: 0,
                                        w: 64,
                                        h: 64
                                    },
                                    poseData: {
                                        boost: [{
                                            x: 1024,
                                            y: 0
                                        }, {
                                            x: 1024,
                                            y: 64
                                        }, {
                                            x: 1024,
                                            y: 128
                                        }, {
                                            x: 1024,
                                            y: 192
                                        }]
                                    }
                                },
                                life: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "boost",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 0,
                                        y: 0,
                                        w: 64,
                                        h: 64
                                    },
                                    poseData: {
                                        life: [{
                                            x: 1088,
                                            y: 0
                                        }, {
                                            x: 1088,
                                            y: 64
                                        }, {
                                            x: 1088,
                                            y: 128
                                        }, {
                                            x: 1088,
                                            y: 192
                                        }]
                                    }
                                },
                                coin: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "boost",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: 0,
                                        y: 0,
                                        w: 64,
                                        h: 64
                                    },
                                    poseData: {
                                        coin: [{
                                            x: 960,
                                            y: 256
                                        }, {
                                            x: 960,
                                            y: 320
                                        }, {
                                            x: 960,
                                            y: 384
                                        }, {
                                            x: 960,
                                            y: 448
                                        }]
                                    }
                                },
                                friend: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "boost",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: -32,
                                        y: -32,
                                        w: 128,
                                        h: 128
                                    },
                                    poseData: {
                                        friend: [{
                                            x: 1024,
                                            y: 256
                                        }, {
                                            x: 1024,
                                            y: 320
                                        }, {
                                            x: 1024,
                                            y: 384
                                        }, {
                                            x: 1024,
                                            y: 448
                                        }],
                                        crash: [{
                                            x: 1024,
                                            y: 256
                                        }]
                                    }
                                },
                                lure: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    str: "avoid",
                                    fx: 12,
                                    group: "top",
                                    hitbox: {
                                        x: -64,
                                        y: -64,
                                        w: 192,
                                        h: 192
                                    },
                                    poseData: {
                                        lure: [{
                                            x: 1088,
                                            y: 256
                                        }, {
                                            x: 1088,
                                            y: 320
                                        }, {
                                            x: 1088,
                                            y: 384
                                        }, {
                                            x: 1088,
                                            y: 448
                                        }]
                                    }
                                },
                                ambient: {
                                    w: 64,
                                    h: 64,
                                    fps: 6,
                                    fx: 12,
                                    group: "btm",
                                    hitbox: {
                                        x: 0,
                                        y: 0,
                                        w: 64,
                                        h: 64
                                    },
                                    poseData: {
                                        ambient1: [{
                                            x: 1344,
                                            y: 0
                                        }, {
                                            x: 1344,
                                            y: 64
                                        }, {
                                            x: 1344,
                                            y: 128
                                        }, {
                                            x: 1344,
                                            y: 192
                                        }],
                                        ambient2: [{
                                            x: 1408,
                                            y: 0
                                        }, {
                                            x: 1408,
                                            y: 64
                                        }, {
                                            x: 1408,
                                            y: 128
                                        }, {
                                            x: 1408,
                                            y: 192
                                        }],
                                        ambient3: [{
                                            x: 1472,
                                            y: 0
                                        }, {
                                            x: 1472,
                                            y: 64
                                        }, {
                                            x: 1472,
                                            y: 128
                                        }, {
                                            x: 1472,
                                            y: 192
                                        }]
                                    }
                                },
                                finish: {
                                    w: 384,
                                    h: 192,
                                    fps: 0,
                                    str: "boost",
                                    group: "top",
                                    hitbox: {
                                        x: 0,
                                        y: 128,
                                        w: 384,
                                        h: 192
                                    },
                                    poseData: {
                                        default: [{
                                            x: 0,
                                            y: 256
                                        }]
                                    }
                                },
                                checkpoint: {
                                    w: 384,
                                    h: 192,
                                    fps: 0,
                                    str: "boost",
                                    group: "top",
                                    hitbox: {
                                        x: 64,
                                        y: 128,
                                        w: 256,
                                        h: 64
                                    },
                                    poseData: {
                                        default: [{
                                            x: 0,
                                            y: 256
                                        }]
                                    }
                                },
                                gate: {
                                    w: 192,
                                    h: 64,
                                    str: "boost",
                                    group: "btm",
                                    hitbox: {
                                        x: 0,
                                        y: 0,
                                        w: 192,
                                        h: 64
                                    }
                                },
                                swap: {
                                    w: 256,
                                    h: 256,
                                    str: "boost",
                                    group: "btm",
                                    hitbox: {
                                        x: 0,
                                        y: 0,
                                        w: 256,
                                        h: 256
                                    }
                                },
                                fx: {
                                    w: 96,
                                    h: 64,
                                    fps: 6,
                                    poseData: {
                                        effect: [{
                                            x: 96,
                                            y: 0
                                        }, {
                                            x: 192,
                                            y: 0
                                        }, {
                                            x: 288,
                                            y: 0
                                        }]
                                    }
                                }
                            }, this.boundary = {
                                [G.ZigZag]: 960,
                                [G.TimeTrial]: 576,
                                [G.Endless]: void 0
                            }, this.characterList = void 0, this.selectionList = void 0, ge.sys) return ge.sys;
                        ge.sys = this, this.characterList = Object.keys(this.sheet.player.character), this.selectionList = ["player1", "player2", "player3", "player4", "player5", "player6", "player7"], !1 === q.p.getBoolean("isLinuxTuxEnabled") && this.characterList.forEach(((e, t) => {
                            "linux" === e && this.characterList.splice(t, 1)
                        })), !0 === q.p.getBoolean("isLinuxTuxEnabled") && (this.selectionList = ["linux", "player1", "player2", "player3", "player4", "player5", "player6", "player7"])
                    }
                    createPlayerSprite() {
                        const e = 640,
                            t = document.createElement("canvas");
                        t.width = e, t.height = 192;
                        const s = t.getContext("2d");
                        s.imageSmoothingEnabled = !1, s.drawImage(be.sys.playerImg, 0, 0, e, 192, 0, 0, e, 192);
                        const i = document.createElement("canvas");
                        i.width = e, i.height = 64;
                        i.getContext("2d").imageSmoothingEnabled = !1;
                        const a = ge.sys.characterList[se.sys.session.settings.character],
                            o = this.sheet.player.character[a];
                        if (this.applyLayers(s, be.sys.playerImg, o, e, 64), se.sys.game.friend) {
                            const t = this.sheet.player.friend;
                            this.applyLayers(s, be.sys.playerImg, t, e, 64)
                        }
                        const n = new Image;
                        n.src = t.toDataURL("image/png"), (async () => {
                            await n.decode(), this.playerSprite.src = n.src
                        })()
                    }
                    applyLayers(e, t, s, i, a) {
                        e.drawImage(t, 0, s, i, a, 0, 0, i, a), e.drawImage(t, 0, s, i, a, 0, a, i, a), e.drawImage(t, 0, s, i, a, 0, 2 * a, i, a)
                    }
                }
                ge.sys = null;
                const ue = e => a.createElement("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        className: e.className,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("path", {
                        d: "M15.75 9.25C16.1297 9.25 16.4435 9.53215 16.4932 9.89823L16.5 10V15.25C16.5 16.7125 15.3583 17.9084 13.9175 17.995L13.75 18H6.25C4.78747 18 3.5916 16.8583 3.50502 15.4175L3.5 15.25V10C3.5 9.58579 3.83579 9.25 4.25 9.25C4.6297 9.25 4.94349 9.53215 4.99315 9.89823L5 10V15.25C5 15.8972 5.49187 16.4295 6.12219 16.4935L6.25 16.5H13.75C14.3972 16.5 14.9295 16.0081 14.9935 15.3778L15 15.25V10C15 9.58579 15.3358 9.25 15.75 9.25ZM5.22703 6.46231L9.46967 2.21967C9.73594 1.9534 10.1526 1.9292 10.4462 2.14705L10.5303 2.21967L14.773 6.46231C15.0659 6.7552 15.0659 7.23008 14.773 7.52297C14.5067 7.78924 14.09 7.81344 13.7964 7.59559L13.7123 7.52297L10.75 4.56V12.25C10.75 12.6297 10.4678 12.9435 10.1018 12.9932L10 13C9.6203 13 9.30651 12.7178 9.25685 12.3518L9.25 12.25V4.56L6.28769 7.52297C6.02142 7.78924 5.60476 7.81344 5.31115 7.59559L5.22703 7.52297C4.96076 7.2567 4.93656 6.84004 5.15441 6.54643L5.22703 6.46231L9.46967 2.21967L5.22703 6.46231Z",
                        fill: "white"
                    })),
                    me = e => a.createElement("svg", {
                        width: "32",
                        height: "14",
                        viewBox: "0 0 32 14",
                        className: e.className,
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("g", {
                        clipPath: "url(#clip0_351_34580)"
                    }, a.createElement("path", {
                        d: "M5.12549 5.75V4.1875H6.68799V5.75H5.12549ZM2.00049 12V1.0625H3.56299V2.625H5.12549V4.1875H3.56299V12H2.00049ZM8.25049 12V7.3125H6.68799V5.75H8.25049V1.0625H9.81299V12H8.25049ZM12.938 12V10.4375H19.188V12H12.938ZM11.3755 10.4375V5.75H12.938V7.3125H17.6255V5.75H19.188V8.875H12.938V10.4375H11.3755ZM12.938 5.75V4.1875H17.6255V5.75H12.938ZM20.7505 10.4375V4.1875H22.313V10.4375H20.7505ZM22.313 12V10.4375H23.8755V7.3125H25.438V10.4375H27.0005V4.1875H28.563V12H22.313Z",
                        fill: "black"
                    }), a.createElement("path", {
                        d: "M5.12549 5.75H3.87549V7H5.12549V5.75ZM5.12549 4.1875V2.9375H3.87549V4.1875H5.12549ZM6.68799 4.1875H7.93799V2.9375H6.68799V4.1875ZM6.68799 5.75V7H7.93799V5.75H6.68799ZM2.00049 12H0.750488V13.25H2.00049V12ZM2.00049 1.0625V-0.1875H0.750488V1.0625H2.00049ZM3.56299 1.0625H4.81299V-0.1875H3.56299V1.0625ZM3.56299 2.625H2.31299V3.875H3.56299V2.625ZM5.12549 2.625H6.37549V1.375H5.12549V2.625ZM5.12549 4.1875V5.4375H6.37549V4.1875H5.12549ZM3.56299 4.1875V2.9375H2.31299V4.1875H3.56299ZM3.56299 12V13.25H4.81299V12H3.56299ZM8.25049 12H7.00049V13.25H8.25049V12ZM8.25049 7.3125H9.50049V6.0625H8.25049V7.3125ZM6.68799 7.3125H5.43799V8.5625H6.68799V7.3125ZM6.68799 5.75V4.5H5.43799V5.75H6.68799ZM8.25049 5.75V7H9.50049V5.75H8.25049ZM8.25049 1.0625V-0.1875H7.00049V1.0625H8.25049ZM9.81299 1.0625H11.063V-0.1875H9.81299V1.0625ZM9.81299 12V13.25H11.063V12H9.81299ZM6.37549 5.75V4.1875H3.87549V5.75H6.37549ZM5.12549 5.4375H6.68799V2.9375H5.12549V5.4375ZM5.43799 4.1875V5.75H7.93799V4.1875H5.43799ZM6.68799 4.5H5.12549V7H6.68799V4.5ZM3.25049 12V1.0625H0.750488V12H3.25049ZM2.00049 2.3125H3.56299V-0.1875H2.00049V2.3125ZM2.31299 1.0625V2.625H4.81299V1.0625H2.31299ZM3.56299 3.875H5.12549V1.375H3.56299V3.875ZM3.87549 2.625V4.1875H6.37549V2.625H3.87549ZM5.12549 2.9375H3.56299V5.4375H5.12549V2.9375ZM2.31299 4.1875V12H4.81299V4.1875H2.31299ZM3.56299 10.75H2.00049V13.25H3.56299V10.75ZM9.50049 12V7.3125H7.00049V12H9.50049ZM8.25049 6.0625H6.68799V8.5625H8.25049V6.0625ZM7.93799 7.3125V5.75H5.43799V7.3125H7.93799ZM6.68799 7H8.25049V4.5H6.68799V7ZM9.50049 5.75V1.0625H7.00049V5.75H9.50049ZM8.25049 2.3125H9.81299V-0.1875H8.25049V2.3125ZM8.56299 1.0625V12H11.063V1.0625H8.56299ZM9.81299 10.75H8.25049V13.25H9.81299V10.75ZM12.938 12H11.688V13.25H12.938V12ZM12.938 10.4375V9.1875H11.688V10.4375H12.938ZM19.188 10.4375H20.438V9.1875H19.188V10.4375ZM19.188 12V13.25H20.438V12H19.188ZM11.3755 10.4375H10.1255V11.6875H11.3755V10.4375ZM11.3755 5.75V4.5H10.1255V5.75H11.3755ZM12.938 5.75H14.188V4.5H12.938V5.75ZM12.938 7.3125H11.688V8.5625H12.938V7.3125ZM17.6255 7.3125V8.5625H18.8755V7.3125H17.6255ZM17.6255 5.75V4.5H16.3755V5.75H17.6255ZM19.188 5.75H20.438V4.5H19.188V5.75ZM19.188 8.875V10.125H20.438V8.875H19.188ZM12.938 8.875V7.625H11.688V8.875H12.938ZM12.938 10.4375V11.6875H14.188V10.4375H12.938ZM12.938 5.75H11.688V7H12.938V5.75ZM12.938 4.1875V2.9375H11.688V4.1875H12.938ZM17.6255 4.1875H18.8755V2.9375H17.6255V4.1875ZM17.6255 5.75V7H18.8755V5.75H17.6255ZM14.188 12V10.4375H11.688V12H14.188ZM12.938 11.6875H19.188V9.1875H12.938V11.6875ZM17.938 10.4375V12H20.438V10.4375H17.938ZM19.188 10.75H12.938V13.25H19.188V10.75ZM12.6255 10.4375V5.75H10.1255V10.4375H12.6255ZM11.3755 7H12.938V4.5H11.3755V7ZM11.688 5.75V7.3125H14.188V5.75H11.688ZM12.938 8.5625H17.6255V6.0625H12.938V8.5625ZM18.8755 7.3125V5.75H16.3755V7.3125H18.8755ZM17.6255 7H19.188V4.5H17.6255V7ZM17.938 5.75V8.875H20.438V5.75H17.938ZM19.188 7.625H12.938V10.125H19.188V7.625ZM11.688 8.875V10.4375H14.188V8.875H11.688ZM12.938 9.1875H11.3755V11.6875H12.938V9.1875ZM14.188 5.75V4.1875H11.688V5.75H14.188ZM12.938 5.4375H17.6255V2.9375H12.938V5.4375ZM16.3755 4.1875V5.75H18.8755V4.1875H16.3755ZM17.6255 4.5H12.938V7H17.6255V4.5ZM20.7505 10.4375H19.5005V11.6875H20.7505V10.4375ZM20.7505 4.1875V2.9375H19.5005V4.1875H20.7505ZM22.313 4.1875H23.563V2.9375H22.313V4.1875ZM22.313 10.4375V11.6875H23.563V10.4375H22.313ZM22.313 12H21.063V13.25H22.313V12ZM22.313 10.4375V9.1875H21.063V10.4375H22.313ZM23.8755 10.4375V11.6875H25.1255V10.4375H23.8755ZM23.8755 7.3125V6.0625H22.6255V7.3125H23.8755ZM25.438 7.3125H26.688V6.0625H25.438V7.3125ZM25.438 10.4375H24.188V11.6875H25.438V10.4375ZM27.0005 10.4375V11.6875H28.2505V10.4375H27.0005ZM27.0005 4.1875V2.9375H25.7505V4.1875H27.0005ZM28.563 4.1875H29.813V2.9375H28.563V4.1875ZM28.563 12V13.25H29.813V12H28.563ZM22.0005 10.4375V4.1875H19.5005V10.4375H22.0005ZM20.7505 5.4375H22.313V2.9375H20.7505V5.4375ZM21.063 4.1875V10.4375H23.563V4.1875H21.063ZM22.313 9.1875H20.7505V11.6875H22.313V9.1875ZM23.563 12V10.4375H21.063V12H23.563ZM22.313 11.6875H23.8755V9.1875H22.313V11.6875ZM25.1255 10.4375V7.3125H22.6255V10.4375H25.1255ZM23.8755 8.5625H25.438V6.0625H23.8755V8.5625ZM24.188 7.3125V10.4375H26.688V7.3125H24.188ZM25.438 11.6875H27.0005V9.1875H25.438V11.6875ZM28.2505 10.4375V4.1875H25.7505V10.4375H28.2505ZM27.0005 5.4375H28.563V2.9375H27.0005V5.4375ZM27.313 4.1875V12H29.813V4.1875H27.313ZM28.563 10.75H22.313V13.25H28.563V10.75Z",
                        fill: "black"
                    }), a.createElement("path", {
                        d: "M5.12549 5.75V4.1875H6.68799V5.75H5.12549ZM2.00049 12V1.0625H3.56299V2.625H5.12549V4.1875H3.56299V12H2.00049ZM8.25049 12V7.3125H6.68799V5.75H8.25049V1.0625H9.81299V12H8.25049ZM12.938 12V10.4375H19.188V12H12.938ZM11.3755 10.4375V5.75H12.938V7.3125H17.6255V5.75H19.188V8.875H12.938V10.4375H11.3755ZM12.938 5.75V4.1875H17.6255V5.75H12.938ZM20.7505 10.4375V4.1875H22.313V10.4375H20.7505ZM22.313 12V10.4375H23.8755V7.3125H25.438V10.4375H27.0005V4.1875H28.563V12H22.313Z",
                        fill: "black"
                    }), a.createElement("path", {
                        d: "M5.12549 5.75H3.87549V7H5.12549V5.75ZM5.12549 4.1875V2.9375H3.87549V4.1875H5.12549ZM6.68799 4.1875H7.93799V2.9375H6.68799V4.1875ZM6.68799 5.75V7H7.93799V5.75H6.68799ZM2.00049 12H0.750488V13.25H2.00049V12ZM2.00049 1.0625V-0.1875H0.750488V1.0625H2.00049ZM3.56299 1.0625H4.81299V-0.1875H3.56299V1.0625ZM3.56299 2.625H2.31299V3.875H3.56299V2.625ZM5.12549 2.625H6.37549V1.375H5.12549V2.625ZM5.12549 4.1875V5.4375H6.37549V4.1875H5.12549ZM3.56299 4.1875V2.9375H2.31299V4.1875H3.56299ZM3.56299 12V13.25H4.81299V12H3.56299ZM8.25049 12H7.00049V13.25H8.25049V12ZM8.25049 7.3125H9.50049V6.0625H8.25049V7.3125ZM6.68799 7.3125H5.43799V8.5625H6.68799V7.3125ZM6.68799 5.75V4.5H5.43799V5.75H6.68799ZM8.25049 5.75V7H9.50049V5.75H8.25049ZM8.25049 1.0625V-0.1875H7.00049V1.0625H8.25049ZM9.81299 1.0625H11.063V-0.1875H9.81299V1.0625ZM9.81299 12V13.25H11.063V12H9.81299ZM6.37549 5.75V4.1875H3.87549V5.75H6.37549ZM5.12549 5.4375H6.68799V2.9375H5.12549V5.4375ZM5.43799 4.1875V5.75H7.93799V4.1875H5.43799ZM6.68799 4.5H5.12549V7H6.68799V4.5ZM3.25049 12V1.0625H0.750488V12H3.25049ZM2.00049 2.3125H3.56299V-0.1875H2.00049V2.3125ZM2.31299 1.0625V2.625H4.81299V1.0625H2.31299ZM3.56299 3.875H5.12549V1.375H3.56299V3.875ZM3.87549 2.625V4.1875H6.37549V2.625H3.87549ZM5.12549 2.9375H3.56299V5.4375H5.12549V2.9375ZM2.31299 4.1875V12H4.81299V4.1875H2.31299ZM3.56299 10.75H2.00049V13.25H3.56299V10.75ZM9.50049 12V7.3125H7.00049V12H9.50049ZM8.25049 6.0625H6.68799V8.5625H8.25049V6.0625ZM7.93799 7.3125V5.75H5.43799V7.3125H7.93799ZM6.68799 7H8.25049V4.5H6.68799V7ZM9.50049 5.75V1.0625H7.00049V5.75H9.50049ZM8.25049 2.3125H9.81299V-0.1875H8.25049V2.3125ZM8.56299 1.0625V12H11.063V1.0625H8.56299ZM9.81299 10.75H8.25049V13.25H9.81299V10.75ZM12.938 12H11.688V13.25H12.938V12ZM12.938 10.4375V9.1875H11.688V10.4375H12.938ZM19.188 10.4375H20.438V9.1875H19.188V10.4375ZM19.188 12V13.25H20.438V12H19.188ZM11.3755 10.4375H10.1255V11.6875H11.3755V10.4375ZM11.3755 5.75V4.5H10.1255V5.75H11.3755ZM12.938 5.75H14.188V4.5H12.938V5.75ZM12.938 7.3125H11.688V8.5625H12.938V7.3125ZM17.6255 7.3125V8.5625H18.8755V7.3125H17.6255ZM17.6255 5.75V4.5H16.3755V5.75H17.6255ZM19.188 5.75H20.438V4.5H19.188V5.75ZM19.188 8.875V10.125H20.438V8.875H19.188ZM12.938 8.875V7.625H11.688V8.875H12.938ZM12.938 10.4375V11.6875H14.188V10.4375H12.938ZM12.938 5.75H11.688V7H12.938V5.75ZM12.938 4.1875V2.9375H11.688V4.1875H12.938ZM17.6255 4.1875H18.8755V2.9375H17.6255V4.1875ZM17.6255 5.75V7H18.8755V5.75H17.6255ZM14.188 12V10.4375H11.688V12H14.188ZM12.938 11.6875H19.188V9.1875H12.938V11.6875ZM17.938 10.4375V12H20.438V10.4375H17.938ZM19.188 10.75H12.938V13.25H19.188V10.75ZM12.6255 10.4375V5.75H10.1255V10.4375H12.6255ZM11.3755 7H12.938V4.5H11.3755V7ZM11.688 5.75V7.3125H14.188V5.75H11.688ZM12.938 8.5625H17.6255V6.0625H12.938V8.5625ZM18.8755 7.3125V5.75H16.3755V7.3125H18.8755ZM17.6255 7H19.188V4.5H17.6255V7ZM17.938 5.75V8.875H20.438V5.75H17.938ZM19.188 7.625H12.938V10.125H19.188V7.625ZM11.688 8.875V10.4375H14.188V8.875H11.688ZM12.938 9.1875H11.3755V11.6875H12.938V9.1875ZM14.188 5.75V4.1875H11.688V5.75H14.188ZM12.938 5.4375H17.6255V2.9375H12.938V5.4375ZM16.3755 4.1875V5.75H18.8755V4.1875H16.3755ZM17.6255 4.5H12.938V7H17.6255V4.5ZM20.7505 10.4375H19.5005V11.6875H20.7505V10.4375ZM20.7505 4.1875V2.9375H19.5005V4.1875H20.7505ZM22.313 4.1875H23.563V2.9375H22.313V4.1875ZM22.313 10.4375V11.6875H23.563V10.4375H22.313ZM22.313 12H21.063V13.25H22.313V12ZM22.313 10.4375V9.1875H21.063V10.4375H22.313ZM23.8755 10.4375V11.6875H25.1255V10.4375H23.8755ZM23.8755 7.3125V6.0625H22.6255V7.3125H23.8755ZM25.438 7.3125H26.688V6.0625H25.438V7.3125ZM25.438 10.4375H24.188V11.6875H25.438V10.4375ZM27.0005 10.4375V11.6875H28.2505V10.4375H27.0005ZM27.0005 4.1875V2.9375H25.7505V4.1875H27.0005ZM28.563 4.1875H29.813V2.9375H28.563V4.1875ZM28.563 12V13.25H29.813V12H28.563ZM22.0005 10.4375V4.1875H19.5005V10.4375H22.0005ZM20.7505 5.4375H22.313V2.9375H20.7505V5.4375ZM21.063 4.1875V10.4375H23.563V4.1875H21.063ZM22.313 9.1875H20.7505V11.6875H22.313V9.1875ZM23.563 12V10.4375H21.063V12H23.563ZM22.313 11.6875H23.8755V9.1875H22.313V11.6875ZM25.1255 10.4375V7.3125H22.6255V10.4375H25.1255ZM23.8755 8.5625H25.438V6.0625H23.8755V8.5625ZM24.188 7.3125V10.4375H26.688V7.3125H24.188ZM25.438 11.6875H27.0005V9.1875H25.438V11.6875ZM28.2505 10.4375V4.1875H25.7505V10.4375H28.2505ZM27.0005 5.4375H28.563V2.9375H27.0005V5.4375ZM27.313 4.1875V12H29.813V4.1875H27.313ZM28.563 10.75H22.313V13.25H28.563V10.75Z",
                        fill: "black"
                    }), a.createElement("path", {
                        d: "M6.37549 5.75V4.1875H7.93799V5.75H6.37549ZM3.25049 12V1.0625H4.81299V2.625H6.37549V4.1875H4.81299V12H3.25049ZM9.50049 12V7.3125H7.93799V5.75H9.50049V1.0625H11.063V12H9.50049ZM14.188 12V10.4375H20.438V12H14.188ZM12.6255 10.4375V5.75H14.188V7.3125H18.8755V5.75H20.438V8.875H14.188V10.4375H12.6255ZM14.188 5.75V4.1875H18.8755V5.75H14.188ZM22.0005 10.4375V4.1875H23.563V10.4375H22.0005ZM23.563 12V10.4375H25.1255V7.3125H26.688V10.4375H28.2505V4.1875H29.813V12H23.563Z",
                        fill: "black"
                    }), a.createElement("path", {
                        d: "M6.37549 5.75H5.12549V7H6.37549V5.75ZM6.37549 4.1875V2.9375H5.12549V4.1875H6.37549ZM7.93799 4.1875H9.18799V2.9375H7.93799V4.1875ZM7.93799 5.75V7H9.18799V5.75H7.93799ZM3.25049 12H2.00049V13.25H3.25049V12ZM3.25049 1.0625V-0.1875H2.00049V1.0625H3.25049ZM4.81299 1.0625H6.06299V-0.1875H4.81299V1.0625ZM4.81299 2.625H3.56299V3.875H4.81299V2.625ZM6.37549 2.625H7.62549V1.375H6.37549V2.625ZM6.37549 4.1875V5.4375H7.62549V4.1875H6.37549ZM4.81299 4.1875V2.9375H3.56299V4.1875H4.81299ZM4.81299 12V13.25H6.06299V12H4.81299ZM9.50049 12H8.25049V13.25H9.50049V12ZM9.50049 7.3125H10.7505V6.0625H9.50049V7.3125ZM7.93799 7.3125H6.68799V8.5625H7.93799V7.3125ZM7.93799 5.75V4.5H6.68799V5.75H7.93799ZM9.50049 5.75V7H10.7505V5.75H9.50049ZM9.50049 1.0625V-0.1875H8.25049V1.0625H9.50049ZM11.063 1.0625H12.313V-0.1875H11.063V1.0625ZM11.063 12V13.25H12.313V12H11.063ZM7.62549 5.75V4.1875H5.12549V5.75H7.62549ZM6.37549 5.4375H7.93799V2.9375H6.37549V5.4375ZM6.68799 4.1875V5.75H9.18799V4.1875H6.68799ZM7.93799 4.5H6.37549V7H7.93799V4.5ZM4.50049 12V1.0625H2.00049V12H4.50049ZM3.25049 2.3125H4.81299V-0.1875H3.25049V2.3125ZM3.56299 1.0625V2.625H6.06299V1.0625H3.56299ZM4.81299 3.875H6.37549V1.375H4.81299V3.875ZM5.12549 2.625V4.1875H7.62549V2.625H5.12549ZM6.37549 2.9375H4.81299V5.4375H6.37549V2.9375ZM3.56299 4.1875V12H6.06299V4.1875H3.56299ZM4.81299 10.75H3.25049V13.25H4.81299V10.75ZM10.7505 12V7.3125H8.25049V12H10.7505ZM9.50049 6.0625H7.93799V8.5625H9.50049V6.0625ZM9.18799 7.3125V5.75H6.68799V7.3125H9.18799ZM7.93799 7H9.50049V4.5H7.93799V7ZM10.7505 5.75V1.0625H8.25049V5.75H10.7505ZM9.50049 2.3125H11.063V-0.1875H9.50049V2.3125ZM9.81299 1.0625V12H12.313V1.0625H9.81299ZM11.063 10.75H9.50049V13.25H11.063V10.75ZM14.188 12H12.938V13.25H14.188V12ZM14.188 10.4375V9.1875H12.938V10.4375H14.188ZM20.438 10.4375H21.688V9.1875H20.438V10.4375ZM20.438 12V13.25H21.688V12H20.438ZM12.6255 10.4375H11.3755V11.6875H12.6255V10.4375ZM12.6255 5.75V4.5H11.3755V5.75H12.6255ZM14.188 5.75H15.438V4.5H14.188V5.75ZM14.188 7.3125H12.938V8.5625H14.188V7.3125ZM18.8755 7.3125V8.5625H20.1255V7.3125H18.8755ZM18.8755 5.75V4.5H17.6255V5.75H18.8755ZM20.438 5.75H21.688V4.5H20.438V5.75ZM20.438 8.875V10.125H21.688V8.875H20.438ZM14.188 8.875V7.625H12.938V8.875H14.188ZM14.188 10.4375V11.6875H15.438V10.4375H14.188ZM14.188 5.75H12.938V7H14.188V5.75ZM14.188 4.1875V2.9375H12.938V4.1875H14.188ZM18.8755 4.1875H20.1255V2.9375H18.8755V4.1875ZM18.8755 5.75V7H20.1255V5.75H18.8755ZM15.438 12V10.4375H12.938V12H15.438ZM14.188 11.6875H20.438V9.1875H14.188V11.6875ZM19.188 10.4375V12H21.688V10.4375H19.188ZM20.438 10.75H14.188V13.25H20.438V10.75ZM13.8755 10.4375V5.75H11.3755V10.4375H13.8755ZM12.6255 7H14.188V4.5H12.6255V7ZM12.938 5.75V7.3125H15.438V5.75H12.938ZM14.188 8.5625H18.8755V6.0625H14.188V8.5625ZM20.1255 7.3125V5.75H17.6255V7.3125H20.1255ZM18.8755 7H20.438V4.5H18.8755V7ZM19.188 5.75V8.875H21.688V5.75H19.188ZM20.438 7.625H14.188V10.125H20.438V7.625ZM12.938 8.875V10.4375H15.438V8.875H12.938ZM14.188 9.1875H12.6255V11.6875H14.188V9.1875ZM15.438 5.75V4.1875H12.938V5.75H15.438ZM14.188 5.4375H18.8755V2.9375H14.188V5.4375ZM17.6255 4.1875V5.75H20.1255V4.1875H17.6255ZM18.8755 4.5H14.188V7H18.8755V4.5ZM22.0005 10.4375H20.7505V11.6875H22.0005V10.4375ZM22.0005 4.1875V2.9375H20.7505V4.1875H22.0005ZM23.563 4.1875H24.813V2.9375H23.563V4.1875ZM23.563 10.4375V11.6875H24.813V10.4375H23.563ZM23.563 12H22.313V13.25H23.563V12ZM23.563 10.4375V9.1875H22.313V10.4375H23.563ZM25.1255 10.4375V11.6875H26.3755V10.4375H25.1255ZM25.1255 7.3125V6.0625H23.8755V7.3125H25.1255ZM26.688 7.3125H27.938V6.0625H26.688V7.3125ZM26.688 10.4375H25.438V11.6875H26.688V10.4375ZM28.2505 10.4375V11.6875H29.5005V10.4375H28.2505ZM28.2505 4.1875V2.9375H27.0005V4.1875H28.2505ZM29.813 4.1875H31.063V2.9375H29.813V4.1875ZM29.813 12V13.25H31.063V12H29.813ZM23.2505 10.4375V4.1875H20.7505V10.4375H23.2505ZM22.0005 5.4375H23.563V2.9375H22.0005V5.4375ZM22.313 4.1875V10.4375H24.813V4.1875H22.313ZM23.563 9.1875H22.0005V11.6875H23.563V9.1875ZM24.813 12V10.4375H22.313V12H24.813ZM23.563 11.6875H25.1255V9.1875H23.563V11.6875ZM26.3755 10.4375V7.3125H23.8755V10.4375H26.3755ZM25.1255 8.5625H26.688V6.0625H25.1255V8.5625ZM25.438 7.3125V10.4375H27.938V7.3125H25.438ZM26.688 11.6875H28.2505V9.1875H26.688V11.6875ZM29.5005 10.4375V4.1875H27.0005V10.4375H29.5005ZM28.2505 5.4375H29.813V2.9375H28.2505V5.4375ZM28.563 4.1875V12H31.063V4.1875H28.563ZM29.813 10.75H23.563V13.25H29.813V10.75Z",
                        fill: "black"
                    }), a.createElement("path", {
                        d: "M5.12549 5.75V4.1875H6.68799V5.75H5.12549ZM2.00049 12V1.0625H3.56299V2.625H5.12549V4.1875H3.56299V12H2.00049ZM8.25049 12V7.3125H6.68799V5.75H8.25049V1.0625H9.81299V12H8.25049ZM12.938 12V10.4375H19.188V12H12.938ZM11.3755 10.4375V5.75H12.938V7.3125H17.6255V5.75H19.188V8.875H12.938V10.4375H11.3755ZM12.938 5.75V4.1875H17.6255V5.75H12.938ZM20.7505 10.4375V4.1875H22.313V10.4375H20.7505ZM22.313 12V10.4375H23.8755V7.3125H25.438V10.4375H27.0005V4.1875H28.563V12H22.313Z",
                        fill: "url(#paint0_linear_351_34580)"
                    }), a.createElement("path", {
                        d: "M6.37549 5.75V4.1875H7.93799V5.75H6.37549ZM3.25049 12V1.0625H4.81299V2.625H6.37549V4.1875H4.81299V12H3.25049ZM9.50049 12V7.3125H7.93799V5.75H9.50049V1.0625H11.063V12H9.50049ZM14.188 12V10.4375H20.438V12H14.188ZM12.6255 10.4375V5.75H14.188V7.3125H18.8755V5.75H20.438V8.875H14.188V10.4375H12.6255ZM14.188 5.75V4.1875H18.8755V5.75H14.188ZM22.0005 10.4375V4.1875H23.563V10.4375H22.0005ZM23.563 12V10.4375H25.1255V7.3125H26.688V10.4375H28.2505V4.1875H29.813V12H23.563Z",
                        fill: "url(#paint1_linear_351_34580)"
                    }), a.createElement("rect", {
                        x: "2.00049",
                        y: "2.25",
                        width: "1.25",
                        height: "1.25",
                        fill: "white"
                    }), a.createElement("rect", {
                        x: "2.00049",
                        y: "3.5",
                        width: "1.25",
                        height: "1.25",
                        fill: "white"
                    }), a.createElement("rect", {
                        x: "2.00049",
                        y: "3.5",
                        width: "1.25",
                        height: "1.25",
                        fill: "white"
                    }), a.createElement("rect", {
                        width: "1.25",
                        height: "1.25",
                        transform: "matrix(-1 0 0 1 7.00049 4.75)",
                        fill: "white"
                    }), a.createElement("rect", {
                        width: "1.25",
                        height: "1.25",
                        transform: "matrix(-1 0 0 1 14.5005 4.75)",
                        fill: "white"
                    }), a.createElement("rect", {
                        width: "1.25",
                        height: "1.25",
                        transform: "matrix(-1 0 0 1 13.2505 6)",
                        fill: "white"
                    }), a.createElement("rect", {
                        width: "1.25",
                        height: "1.25",
                        transform: "matrix(-1 0 0 1 22.0005 4.75)",
                        fill: "white"
                    }), a.createElement("rect", {
                        width: "1.25",
                        height: "1.25",
                        transform: "matrix(-1 0 0 1 22.0005 6)",
                        fill: "white"
                    }), a.createElement("rect", {
                        width: "1.25",
                        height: "1.25",
                        transform: "matrix(-1 0 0 1 13.2505 7.25)",
                        fill: "white"
                    })), a.createElement("defs", null, a.createElement("linearGradient", {
                        id: "paint0_linear_351_34580",
                        x1: "2.00049",
                        y1: "-0.950001",
                        x2: "31.3485",
                        y2: "13.2823",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopColor: "#D573C4"
                    }), a.createElement("stop", {
                        offset: "0.521932",
                        stopColor: "#D573C4"
                    }), a.createElement("stop", {
                        offset: "1",
                        stopColor: "#8B6AD4"
                    })), a.createElement("linearGradient", {
                        id: "paint1_linear_351_34580",
                        x1: "3.25049",
                        y1: "-0.950001",
                        x2: "32.5985",
                        y2: "13.2823",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopColor: "#D573C4"
                    }), a.createElement("stop", {
                        offset: "0.521932",
                        stopColor: "#D573C4"
                    }), a.createElement("stop", {
                        offset: "1",
                        stopColor: "#8B6AD4"
                    })), a.createElement("clipPath", {
                        id: "clip0_351_34580"
                    }, a.createElement("rect", {
                        width: "32",
                        height: "14",
                        fill: "white",
                        transform: "translate(0.000488281)"
                    })))),
                    ye = () => {
                        ce.startShare(q.p.getString("shareString"), "", "", q.p.getString("shareNewLinkMobile")), ce.recordShareClick()
                    },
                    fe = (0, d.ZP)({
                        shareButton: {
                            width: "113px",
                            height: "32px",
                            background: "#000000",
                            boxSizing: "border-box",
                            borderRadius: "4px"
                        },
                        shareButton_content: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        shareButton_icon: {
                            display: "flex",
                            fill: "#FFFFFF"
                        },
                        shareButton_shareText: {
                            display: "flex",
                            fontStyle: "normal",
                            fontSize: "18px",
                            color: "#FFFFFF",
                            marginLeft: "7px",
                            fontWeight: "550",
                            lineHeight: "25px",
                            height: "23px"
                        }
                    })((e => a.createElement("button", {
                        className: e.managedClasses.shareButton,
                        onClick: ye
                    }, a.createElement("div", {
                        className: e.managedClasses.shareButton_content
                    }, a.createElement(ue, {
                        className: e.managedClasses.shareButton_icon
                    }), a.createElement("span", {
                        className: e.managedClasses.shareButton_shareText
                    }, q.p.getString("shareButtonString")))))),
                    we = (0, d.ZP)({
                        shareBestScore: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        shareBestScore_iconHidden: {
                            visibility: "hidden"
                        },
                        shareBestScore_text: {
                            fontSize: "12px",
                            lineHeight: "14px",
                            textAlign: "center",
                            color: "#4E4E4E",
                            marginLeft: "8px",
                            marginRight: "8px"
                        },
                        shareBestScore_iconPlaceHolder: {
                            width: "32px",
                            height: "14px"
                        }
                    })((e => {
                        const t = q.p.getStringF("bestScoreFlyout", e.bestScoreFormatted);
                        return a.createElement("div", {
                            className: e.managedClasses.shareBestScore
                        }, a.createElement(me, {
                            className: e.isNewRecords ? null : e.managedClasses.shareBestScore_iconHidden
                        }), a.createElement("p", {
                            className: e.managedClasses.shareBestScore_text
                        }, t), a.createElement("div", {
                            className: e.managedClasses.shareBestScore_iconPlaceHolder
                        }))
                    })),
                    He = (0, d.ZP)({
                        sharePopup: {
                            backgroundColor: "rgba(255,255,255,0.6)",
                            backdropFilter: "blur(32px)",
                            boxShadow: "0px 16px 24px rgba(0,0,0,0.16)",
                            borderRadius: "4px",
                            padding: "12px 12px"
                        },
                        sharePopup_currentScore: {
                            textAlign: "center",
                            fontWeight: "500",
                            fontSize: "30px",
                            lineHeight: "32px",
                            alignItems: "center",
                            color: "#000000"
                        },
                        sharePopup_congrats: {
                            marginTop: "4px",
                            textAlign: "center",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "16px",
                            color: "#000000"
                        },
                        sharePopup_button: {
                            marginTop: "10px"
                        }
                    })((e => {
                        const t = e.percentage,
                            s = Math.floor(100 * t) / 100,
                            i = q.p.getStringF("congrats", s);
                        return a.createElement("div", {
                            className: e.managedClasses.sharePopup
                        }, a.createElement(we, {
                            bestScoreFormatted: e.bestScoreFormatted,
                            isNewRecords: e.isNewRecords
                        }), a.createElement("p", {
                            className: e.managedClasses.sharePopup_currentScore
                        }, e.currentScoreFormatted), a.createElement("p", {
                            className: e.managedClasses.sharePopup_congrats
                        }, i), a.createElement("div", {
                            className: e.managedClasses.sharePopup_button
                        }, a.createElement(fe, null)))
                    }));
                class ve {
                    constructor() {
                        if (this.ui = void 0, this.tint = void 0, this.topui = void 0, this.livesDisplay = void 0, this.score = void 0, this.scoreIcon = void 0, this.scoreText = void 0, this.boostDisplay = void 0, this.title = void 0, this.subtitle = void 0, this.instruct = void 0, this.instructAction = void 0, this.instructContent = void 0, this.instructText = void 0, this.viewContainer = void 0, this.notify = void 0, this.notifyContent = void 0, this.notifyTimer = void 0, this.icons = void 0, this.share = void 0, this.uiContainer = void 0, this.selector = void 0, ve.sys) return ve.sys;
                        ve.sys = this, this.defineIcons(), this.buildInterface(), this.notifyTimer = void 0, he.subscribe(this.updateScore.bind(this))
                    }
                    buildInterface() {
                        this.ui = this.createNew("div", document.body, "game-ui"), this.tint = this.createNew("div", document.body, "game-tint"), this.topui = this.createNew("div", this.ui);
                        const e = this.createNew("div", this.topui, "dash-stats");
                        this.livesDisplay = this.createNew("div", e, void 0, "stats-icons");
                        const t = this.createNew("div", e, "stats-score");
                        this.score = this.createNew("div", t), this.scoreIcon = this.createNew("span", this.score, "score-icon"), this.scoreText = this.createNew("span", this.score, "score-text"), this.boostDisplay = this.createNew("div", e, void 0, "stats-icons"), this.title = this.createNew("p", this.ui, "ui-title"), this.subtitle = this.createNew("p", this.ui, "ui-subtitle"), this.selector = this.createNew("div", this.ui, "ui-selector");
                        const s = this.createNew("span", this.selector, "selector-left");
                        this.createIconSVG(s, "leftArrow", 44, 44);
                        const i = this.createNew("span", this.selector, "selector-right");
                        this.createIconSVG(i, "rightArrow", 44, 44), s.addEventListener("click", (function() {
                            Ie.sys.changeCharacter(-1)
                        }), !1), i.addEventListener("click", (function() {
                            Ie.sys.changeCharacter(1)
                        }), !1), this.viewContainer = this.createNew("div", this.ui, "view-container"), this.uiContainer = this.createNew("div", this.viewContainer, "ui-container"), this.instruct = this.createNew("div", this.uiContainer, "ui-instruct"), this.instructContent = this.createNew("div", this.instruct, "instruct-content"), this.instructAction = this.createNew("div", this.instructContent, "instruct-action"), this.instructText = this.createNew("p", this.instructContent, "instruct-text"), this.notify = this.createNew("div", this.ui, "ui-notify"), this.notifyContent = this.createNew("div", this.notify, "notify-content"), this.hideNotification(), this.share = this.createNew("div", this.uiContainer, "ui-share"), this.updateShare()
                    }
                    refreshDisplay() {
                        this.updateIcons(), this.updateScore(), this.checkHighScoreIcon()
                    }
                    hideOverlayUI() {
                        this.tintScreen(), this.title.style.visibility = "hidden", this.subtitle.style.visibility = "hidden", this.selector.style.visibility = "hidden", this.instructContent.style.visibility = "hidden", this.hideSharePopup()
                    }
                    updateGameTitleUI() {
                        const e = se.sys.session.settings.theme;
                        this.title.style.removeProperty("visibility"), this.title.textContent = q.p.getString(e + "Theme")
                    }
                    updateGameModeUI() {
                        const e = se.sys.session.settings.mode;
                        this.subtitle.style.removeProperty("visibility"), this.subtitle.textContent = q.p.getString(e + "Title"), this.updateScore()
                    }
                    updateInputTypeUI() {
                        const e = se.sys.session.state;
                        if (e === ee.Play) return;
                        let t = se.sys.session.inputType.valueOf();
                        switch (t === te.Mouse && Q() && (t = te.Touch), t) {
                            case te.Mouse:
                            case te.Touch:
                            case te.Keyboard:
                                this.instructAction.classList.add("outline"), this.instructAction.textContent = q.p.getString(t + "Action");
                                break;
                            case te.Ps:
                            case te.Xbox: {
                                const e = t + "Action";
                                this.instructAction.classList.remove("outline"), this.instructAction.textContent = "", this.createIconSVG(this.instructAction, e, 32, 32);
                                break
                            }
                        }
                        this.instructText.textContent = q.p.getString(e + "Info"), this.instructContent.style.removeProperty("visibility"), e !== ee.Menu ? this.instructContent.classList.add("tinted") : this.instructContent.classList.remove("tinted")
                    }
                    tintScreen() {
                        se.sys.session.state === ee.Pause ? this.tint.classList.add("visible") : this.tint.classList.remove("visible")
                    }
                    showPauseScreen() {
                        this.tintScreen(), this.updateGameTitleUI(), this.updateGameModeUI(), this.updateInputTypeUI(), this.refreshDisplay()
                    }
                    showOverScreen() {
                        this.tintScreen(), this.updateGameTitleUI(), this.updateInputTypeUI(), this.refreshDisplay()
                    }
                    showMenuScreen() {
                        this.showPauseScreen(), this.selector.style.removeProperty("visibility")
                    }
                    async updateAndShowNewShare() {
                        await this.updateShare(), ce.recordSharePopup(), this.showSharePopup()
                    }
                    sendNotification(e, t = 5e3) {
                        const s = se.sys.session.settings.mode,
                            i = se.sys.session.settings.theme,
                            a = q.p.getBoolean("isNewShare");
                        switch (this.notifyContent.textContent = "", e) {
                            case "mode":
                                this.notifyContent.textContent = q.p.getStringF("gameMode", q.p.getString(s + "Title"));
                                break;
                            case "theme":
                                this.notifyContent.textContent = q.p.getStringF("theme", q.p.getString(i + "Theme"));
                                break;
                            case "score": {
                                const e = se.sys.getHighScore(s);
                                this.notifyContent.textContent = q.p.getStringF("newBestScore", q.p.getString(s + "Descriptor"), e, q.p.getString(s + "Unit")), this.createIconSVG(this.notifyContent, "star", 20, 20, "0 4px 0 0");
                                break
                            }
                            case "cheatcode":
                                this.notifyContent.textContent = q.p.getStringF("codeCheat", q.p.getString("codeScoring"));
                                break;
                            case "code":
                                this.notifyContent.textContent = q.p.getString("code");
                                break;
                            case "cheat":
                                this.notifyContent.textContent = q.p.getString("codeScoring");
                                break;
                            case "share":
                                if (a) return void this.updateAndShowNewShare();
                                this.notifyContent.textContent = q.p.getString("share"), this.createShareLink()
                        }
                        clearTimeout(this.notifyTimer), this.notifyTimer = window.setTimeout((function() {
                            ve.sys.hideNotification()
                        }), t), this.showNotification()
                    }
                    createShareLink() {
                        const e = this.createNew("button", this.notifyContent, "notify-shareLink");
                        e.onclick = this.copyShareLink.bind(this);
                        this.createNew("p", e, "notify-shareText").textContent = q.p.getString("shareCopy"), this.createIconSVG(e, "link", 20, 20, "0 4px 0 0")
                    }
                    copyShareLink() {
                        Y(q.p.getString("shareLinkGameOver")), this.notifyContent.textContent = q.p.getString("shareLinkCopied")
                    }
                    showNotification() {
                        this.notify.classList.add("visible")
                    }
                    hideNotification() {
                        this.notify.classList.remove("visible")
                    }
                    async updateShare() {
                        const e = se.sys.session.settings.mode,
                            t = this.getHighScoreString(),
                            s = se.sys.getCurrentScoreFormatted(),
                            o = s + " " + q.p.getString(e + "Unit"),
                            n = await ce.getPercentage(e, parseInt(s));
                        i.render(a.createElement(He, {
                            bestScoreFormatted: t,
                            currentScoreFormatted: o,
                            percentage: n,
                            isNewRecords: se.sys.game.highScore
                        }), this.share)
                    }
                    showSharePopup() {
                        this.share.classList.add("visible")
                    }
                    hideSharePopup() {
                        this.share.classList.remove("visible")
                    }
                    getHighScoreString() {
                        return q.p.getStringF("bestScoreMenuDisplay", se.sys.getHighScore(se.sys.session.settings.mode), q.p.getString(se.sys.session.settings.mode + "Unit"))
                    }
                    checkHighScoreIcon() {
                        const e = se.sys.session.state;
                        this.scoreIcon.textContent = "", (e === ee.Menu || se.sys.game.highScore) && this.createIconSVG(this.scoreIcon, "star", 20, 20)
                    }
                    updateScore() {
                        const e = se.sys.session.settings.mode;
                        if (se.sys.session.state === ee.Menu) {
                            const t = se.sys.getHighScore(e);
                            this.scoreText.textContent = q.p.getStringF("bestScoreMenuDisplay", t, q.p.getString(e + "Unit"))
                        } else {
                            const t = se.sys.getCurrentScoreFormatted();
                            this.scoreText.textContent = t + " " + q.p.getString(e + "Unit")
                        }
                    }
                    updateIcons() {
                        const e = [],
                            t = [],
                            s = se.sys.game.cheat;
                        if (s.lives || s.safety) s.safety && e.push("shield"), e.push("life-full"), e.push("infinite");
                        else
                            for (let t = 1; t <= se.sys.game.lives.max; t++) {
                                let s = "life-empty";
                                t <= se.sys.game.shields.current ? s = "shield" : t <= se.sys.game.lives.current && (s = "life-full"), e.push(s)
                            }
                        if (s.boosts) t.push("boost-full"), t.push("infinite");
                        else
                            for (let e = 1; e <= se.sys.game.boosts.max; e++) {
                                const s = e <= se.sys.game.boosts.current ? "boost-full" : "boost-empty";
                                t.push(s)
                            }
                        this.livesDisplay.textContent = "", this.boostDisplay.textContent = "";
                        const i = "url(" + be.sys.objectsImg.src + ")";
                        e.forEach((e => {
                            this.createNew("div", this.livesDisplay, void 0, e).style.backgroundImage = i
                        })), t.forEach((e => {
                            this.createNew("div", this.boostDisplay, void 0, e).style.backgroundImage = i
                        }))
                    }
                    createIconSVG(e, t, s, i, a = "0 0 0 0") {
                        const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        o.classList.add("icon-" + t), o.style.margin = a, o.style.display = "inline-block", o.setAttribute("width", s + "px"), o.setAttribute("height", i + "px"), o.setAttribute("viewBox", this.icons[t].viewbox);
                        const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        o.insertAdjacentElement("beforeend", n), n.classList.add("icon-fill"), n.setAttribute("d", this.icons[t].path), e.insertAdjacentElement("afterbegin", o), o.insertAdjacentElement("afterbegin", n)
                    }
                    defineIcons() {
                        this.icons = {
                            share: {
                                path: "M15.75 9.25C16.1297 9.25 16.4435 9.53215 16.4932 9.89823L16.5 10V15.25C16.5 16.7125 15.3583 17.9084 13.9175 17.995L13.75 18H6.25C4.78747 18 3.5916 16.8583 3.50502 15.4175L3.5 15.25V10C3.5 9.58579 3.83579 9.25 4.25 9.25C4.6297 9.25 4.94349 9.53215 4.99315 9.89823L5 10V15.25C5 15.8972 5.49187 16.4295 6.12219 16.4935L6.25 16.5H13.75C14.3972 16.5 14.9295 16.0081 14.9935 15.3778L15 15.25V10C15 9.58579 15.3358 9.25 15.75 9.25ZM5.22703 6.46231L9.46967 2.21967C9.73594 1.9534 10.1526 1.9292 10.4462 2.14705L10.5303 2.21967L14.773 6.46231C15.0659 6.7552 15.0659 7.23008 14.773 7.52297C14.5067 7.78924 14.09 7.81344 13.7964 7.59559L13.7123 7.52297L10.75 4.56V12.25C10.75 12.6297 10.4678 12.9435 10.1018 12.9932L10 13C9.6203 13 9.30651 12.7178 9.25685 12.3518L9.25 12.25V4.56L6.28769 7.52297C6.02142 7.78924 5.60476 7.81344 5.31115 7.59559L5.22703 7.52297C4.96076 7.2567 4.93656 6.84004 5.15441 6.54643L5.22703 6.46231L9.46967 2.21967L5.22703 6.46231Z",
                                viewbox: "0 0 20 20"
                            },
                            leftArrow: {
                                path: "M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z",
                                viewbox: "0 0 20 20"
                            },
                            rightArrow: {
                                path: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",
                                viewbox: "0 0 20 20"
                            },
                            star: {
                                path: "M9.10433 2.89874C9.47114 2.15549 10.531 2.1555 10.8978 2.89874L12.8282 6.81024L17.1448 7.43748C17.9651 7.55666 18.2926 8.56464 17.699 9.14317L14.5755 12.1878L15.3129 16.487C15.453 17.3039 14.5956 17.9269 13.8619 17.5412L10.0011 15.5114L6.14018 17.5412C5.40655 17.9269 4.54913 17.3039 4.68924 16.487L5.4266 12.1878L2.30308 9.14317C1.70956 8.56463 2.03708 7.55666 2.8573 7.43748L7.17389 6.81024L9.10433 2.89874Z",
                                viewbox: "0 0 20 20"
                            },
                            link: {
                                path: "M14 6C16.2091 6 18 7.79086 18 10C18 12.1422 16.316 13.8911 14.1996 13.9951L14 14H12C11.5858 14 11.25 13.6642 11.25 13.25C11.25 12.8703 11.5322 12.5565 11.8982 12.5068L12 12.5H14C15.3807 12.5 16.5 11.3807 16.5 10C16.5 8.67452 15.4685 7.58996 14.1644 7.50532L14 7.5H12C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.3703 11.5322 6.05651 11.8982 6.00685L12 6H14ZM8 6C8.41421 6 8.75 6.33579 8.75 6.75C8.75 7.1297 8.46785 7.44349 8.10177 7.49315L8 7.5H6C4.61929 7.5 3.5 8.61929 3.5 10C3.5 11.3255 4.53154 12.41 5.83562 12.4947L6 12.5H8C8.41421 12.5 8.75 12.8358 8.75 13.25C8.75 13.6297 8.46785 13.9435 8.10177 13.9932L8 14H6C3.79086 14 2 12.2091 2 10C2 7.8578 3.68397 6.10892 5.80036 6.0049L6 6H8ZM6.25 9.25H13.75C14.1642 9.25 14.5 9.58579 14.5 10C14.5 10.3797 14.2178 10.6935 13.8518 10.7432L13.75 10.75H6.25C5.83579 10.75 5.5 10.4142 5.5 10C5.5 9.6203 5.78215 9.30651 6.14823 9.25685L6.25 9.25H13.75H6.25Z",
                                viewbox: "0 0 20 20"
                            },
                            xboxAction: {
                                path: "M11.5,11.5H9.7L9.2,9.9H6.7l-0.5,1.6H4.5l2.5-7H9L11.5,11.5z M8.9,8.7L8.1,6.4C8.1,6.2,8,6,8,5.7h0C8,6,7.9,6.2,7.8,6.4 L7.1,8.7H8.9z M8,16c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S12.4,16,8,16z M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z",
                                viewbox: "0 0 16 16"
                            },
                            psAction: {
                                path: "M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M12,5 l-3,3l3,3L11,12l-3-3l-3,3L4,11l3-3L4,5L5,4l3,3l3-3L12,5z",
                                viewbox: "0 0 16 16"
                            }
                        }
                    }
                    createNew(e, t, s, i) {
                        const a = document.createElement(e);
                        return void 0 !== t && t.insertAdjacentElement("beforeend", a), void 0 !== s && (a.id = s), void 0 !== i && a.classList.add(i), a
                    }
                    createNewCanvas() {
                        const e = document.createElement("canvas");
                        return document.body.insertAdjacentElement("beforeend", e), e.id = "game-canvas", e
                    }
                }
                ve.sys = null;
                class Ve {
                    constructor(e, t, s) {
                        this.type = void 0, this.x = void 0, this.y = void 0, this.w = void 0, this.h = void 0, this.hit = void 0, this.fx = void 0, this.hitbox = void 0, this.type = e, this.x = t, this.y = s, this.reset()
                    }
                    reset() {
                        const e = ge.sys.sheet[this.type];
                        this.w = e.w, this.h = e.h, this.fx = e.fx, this.hit = !1, this.hitbox = {
                            x: this.x - this.w / 2 + e.hitbox.x,
                            y: this.y - this.h / 2 + e.hitbox.y,
                            w: e.hitbox.w,
                            h: e.hitbox.h
                        }
                    }
                    move(e) {
                        this.shift(-e.x, -e.y)
                    }
                    shift(e = 0, t = 0) {
                        this.x += e, this.hitbox.x += e, this.y += t, this.hitbox.y += t
                    }
                    update() {}
                    draw() {}
                }
                class xe extends Ve {
                    constructor(e, t, s, i) {
                        super(e, t, s), this.pose = void 0, this.time = void 0, this.sleep = void 0, this.anim = void 0, this.pickup = void 0, this.decor = void 0, this.gateId = void 0, this.pose = i, this.reset()
                    }
                    reset() {
                        super.reset(), this.time = 0, this.sleep = !1, this.anim = "looping", this.pickup = !1, this.decor = void 0, this.gateId = void 0
                    }
                    update() {
                        "paused" !== this.anim && (this.time += se.sys.game.time.loop)
                    }
                    draw() {
                        this.pickup ? pe.sys.drawPickup(this) : (void 0 !== this.fx && "hidden" !== this.anim && pe.sys.drawFx(this.time, this.x, this.y + this.fx), pe.sys.drawLayer(this.type, this.pose, this.x, this.y, this.time, this.anim, this), void 0 !== this.decor && pe.sys.drawLayer("wallDecor", this.decor, this.x, this.y - 24))
                    }
                }
                class Me extends xe {
                    constructor(e, t, s, i) {
                        super(e, t, s, i), this.angle = void 0, this.speed = null, this.objectsHit = void 0, this.timer = null, this.style = void 0, this.state = void 0, this.reset()
                    }
                    reset() {
                        super.reset(), this.objectsHit = [], this.angle = 0, this.speed = {
                            current: 6,
                            raw: 6,
                            max: 13,
                            accel: .025
                        }, this.timer = {
                            crash: 0,
                            dir: 0
                        }, this.style = se.sys.rand(0, 3), this.changeState("crash"), this.resume()
                    }
                    update() {
                        super.update(), this.isCrashed() || (this.updateDirection(), this.updateSpeed(), this.updatePosition())
                    }
                    crash() {
                        this.changeState("crash")
                    }
                    resume() {
                        const e = Math.random() > .5 ? "right" : "left";
                        this.timer.crash = 0, this.timer.dir = 1, this.changeState(e)
                    }
                    slow() {
                        this.speed.raw *= .5
                    }
                    isCrashed() {
                        return !(this.timer.crash <= 0) && (this.timer.crash -= se.sys.game.time.loop * se.sys.game.time.scale, !(this.timer.crash <= 0) || (this.resume(), !1))
                    }
                    changeState(e) {
                        if (this.state === e) return;
                        let t;
                        switch (this.state = e, e) {
                            case "left":
                                t = -65;
                                break;
                            case "right":
                                t = -115;
                                break;
                            case "crash":
                                t = 90
                        }
                        this.pose = e, this.angle = t * Math.PI / 180, "crash" === e && (this.timer.crash += 1.5, this.speed.raw = 0)
                    }
                    updateDirection() {
                        if (this.timer.dir -= se.sys.game.time.loop * se.sys.game.time.scale, this.timer.dir <= 0) {
                            this.timer.dir = se.sys.rand(50, 200) / 100;
                            const e = "left" === this.state ? "right" : "left";
                            this.changeState(e)
                        }
                    }
                    updateSpeed() {
                        const e = this.speed,
                            t = e.accel * se.sys.game.time.scale;
                        this.speed.raw = e.raw <= e.max ? e.raw += t : e.raw -= t, this.speed.current = e.raw * se.sys.game.time.scale
                    }
                    updatePosition() {
                        const e = this.speed.current * -Math.cos(this.angle),
                            t = this.speed.current * -Math.sin(this.angle);
                        this.shift(e, t)
                    }
                    draw() {
                        pe.sys.drawNpc(this.pose, this.style, this.x, this.y)
                    }
                }
                class Se extends xe {
                    constructor(e, t, s, i) {
                        super(e, t, s, i), this.angle = void 0, this.dist = void 0, this.speed = null, this.objectsHit = void 0, this.timer = null, this.state = void 0, this.reset()
                    }
                    reset() {
                        super.reset(), this.objectsHit = [], this.angle = 0, this.dist = 0, this.speed = {
                            current: 3,
                            raw: 3,
                            max: 9,
                            accel: .05
                        }, this.changeState("chase")
                    }
                    update() {
                        super.update(), this.hit ? this.updateEnding() : this.isCrashed() || (this.updateDirection(), this.updateSpeed(), this.updatePosition())
                    }
                    updateEnding() {
                        const e = {
                            x: se.sys.session.x - this.x,
                            y: se.sys.session.y - 64 - this.y
                        };
                        if (Math.hypot(e.x, e.y) < 8) this.shift(e.x, e.y), this.changeState("end"), se.sys.game.caught = !0;
                        else {
                            const t = Math.atan2(e.y, e.x),
                                s = Math.cos(t),
                                i = Math.sin(t);
                            this.shift(s, i)
                        }
                    }
                    crash() {
                        this.changeState("crash")
                    }
                    resume() {
                        this.changeState("chase")
                    }
                    slow() {
                        this.speed.raw *= .5
                    }
                    ending() {
                        this.hit = !0
                    }
                    isCrashed() {
                        return !(this.timer.crash <= 0) && (this.timer.crash -= se.sys.game.time.loop * se.sys.game.time.scale, !(this.timer.crash <= 0) || (this.resume(), !1))
                    }
                    changeState(e) {
                        if (this.state !== e) {
                            switch (this.state = e, this.timer = {
                                    crash: 0,
                                    dir: 0
                                }, e) {
                                case "chase":
                                    break;
                                case "crash":
                                    this.timer.crash += 1.25, this.speed.raw = 0;
                                    break;
                                case "end":
                                    this.anim = "oneshot", this.time = 0, this.speed.current = 0, this.speed.raw = 0, this.speed.max = 0
                            }
                            this.pose = e
                        }
                    }
                    updateDirection() {
                        if (this.dist = Math.hypot(se.sys.session.x - this.x, se.sys.session.y - this.y), this.timer.dir -= se.sys.game.time.loop * se.sys.game.time.scale, this.timer.dir <= 0) {
                            this.timer.dir += se.sys.rand(25, 100) / 100 * (this.dist / se.sys.session.y);
                            const e = se.sys.session.x - this.x,
                                t = se.sys.session.y - this.y,
                                s = 180 * Math.atan2(t, e) / Math.PI;
                            this.angle = s * Math.PI / 180
                        }
                    }
                    updateSpeed() {
                        const e = this.speed,
                            t = e.accel * se.sys.game.time.scale,
                            s = this.y >= se.sys.session.y;
                        e.raw < e.max && !s ? this.speed.raw += t : s ? this.speed.raw -= t : this.speed.raw = e.max, this.speed.current = e.raw * se.sys.game.time.scale
                    }
                    updatePosition() {
                        const e = this.dist / se.sys.session.y * 15,
                            t = Math.cos(16 * this.time) * e * Math.PI / 180,
                            s = this.speed.current * Math.cos(this.angle + t),
                            i = this.speed.current * Math.sin(this.angle + t);
                        this.shift(s, i)
                    }
                    draw() {
                        pe.sys.drawLayer(this.type, this.pose, this.x, this.y, this.time, this.anim, this)
                    }
                }
                class Ce {
                    constructor() {
                        if (this.pressed = void 0, Ce.sys) return Ce.sys;
                        Ce.sys = this, window.addEventListener("keydown", (e => Ce.sys.onKeydown(e)), !1), window.addEventListener("keyup", (e => Ce.sys.onKeyup(e)), !1), this.pressed = {}
                    }
                    onKeydown(e) {
                        const t = e.key.toLowerCase();
                        if (Pe.sys.changeInputMethod(te.Keyboard), !this.pressed[t]) {
                            switch (this.pressed[t] = !0, t) {
                                case "arrowdown":
                                case "s":
                                    Pe.sys.routeInput(Te.Down);
                                    break;
                                case "arrowleft":
                                case "a":
                                    Pe.sys.routeInput(Te.Left);
                                    break;
                                case "arrowright":
                                case "d":
                                    Pe.sys.routeInput(Te.Right);
                                    break;
                                case "arrowup":
                                case "w":
                                    Pe.sys.routeInput(Te.Stop);
                                    break;
                                case "enter":
                                case " ":
                                    Pe.sys.routeInput(Te.Toggle);
                                    break;
                                case "escape":
                                    Pe.sys.routeInput(Te.Settings, !1, !1);
                                    break;
                                case "f":
                                    Pe.sys.routeInput(Te.Boost, !1, !1)
                            }
                            Pe.sys.checkCheatCode(t)
                        }
                    }
                    onKeyup(e) {
                        const t = e.key.toLowerCase();
                        delete this.pressed[t]
                    }
                }
                Ce.sys = null;
                class ke {
                    constructor() {
                        if (this.mousePos = void 0, ke.sys) return ke.sys;
                        ke.sys = this, window.addEventListener("click", (function(e) {
                            ke.sys.onClick(e)
                        }), !1), window.addEventListener("mousemove", (function(e) {
                            ke.sys.onMouseMove(e)
                        }), !1), window.addEventListener("contextmenu", (function(e) {
                            ke.sys.onContextMenu(e)
                        }), !1), this.reset()
                    }
                    reset() {
                        this.mousePos = void 0
                    }
                    onClick(e) {
                        if (se.sys.session.flyoutActive) return;
                        Pe.sys.changeInputMethod(te.Mouse);
                        const t = ve.sys.selector || null;
                        t && t.contains(e.target) || Pe.sys.routeInput(Te.Toggle)
                    }
                    onMouseMove(e) {
                        if (se.sys.session.state === ee.Play) {
                            const t = this.checkAngle(se.sys.session, e);
                            this.mousePos !== t && (this.mousePos = t, Pe.sys.routeInput(t, !0, !1))
                        }
                    }
                    onContextMenu(e) {
                        e.preventDefault(), se.sys.session.state === ee.Play && Pe.sys.routeInput(Te.Boost, !1, !1)
                    }
                    checkAngle(e, t) {
                        const s = 180 * Math.atan2(e.y - t.clientY, e.x - t.clientX) / Math.PI;
                        return s <= 0 && s >= -55 ? Te.Left : s >= -180 && s <= -125 ? Te.Right : s < -55 && s > -75 ? Te.DownLeft : s > -125 && s < -105 ? Te.DownRight : s > 0 && s < 180 ? Te.Stop : Te.Down
                    }
                }
                ke.sys = null;
                class Ze {
                    constructor() {
                        if (this.swipeStart = void 0, this.swipeDelta = void 0, this.touchData = void 0, this.touchPos = void 0, Ze.sys) return Ze.sys;
                        Ze.sys = this, window.addEventListener("touchstart", (e => Ze.sys.onTouchStart(e)), !1), window.addEventListener("touchmove", (e => Ze.sys.onTouchMove(e)), !1), window.addEventListener("touchend", (e => Ze.sys.onTouchEnd(e)), !1), this.reset()
                    }
                    reset() {
                        this.swipeStart = 0, this.swipeDelta = 400, this.touchData = {
                            down: {
                                x: 0,
                                y: 0
                            },
                            move: {
                                x: 0,
                                y: 0
                            }
                        }
                    }
                    onTouchStart(e) {
                        if (!this.interact(e) && (Pe.sys.changeInputMethod(te.Touch), e.targetTouches)) {
                            const t = e.targetTouches[0];
                            this.swipeStart = Date.now(), this.touchPos = void 0, this.touchData = {
                                down: {
                                    x: t.clientX,
                                    y: t.clientY
                                },
                                move: {
                                    x: t.clientX,
                                    y: t.clientY
                                }
                            }
                        }
                    }
                    onTouchMove(e) {
                        if (this.interact(e)) return;
                        const t = e.targetTouches[0];
                        if (this.touchData.move = {
                                x: t.clientX,
                                y: t.clientY
                            }, se.sys.session.state === ee.Play && Date.now() - this.swipeStart > 80) {
                            const e = this.checkAngle(se.sys.session, this.touchData.move);
                            this.touchPos !== e && (this.touchPos = e, Pe.sys.routeInput(e, !0, !1))
                        }
                    }
                    onTouchEnd(e) {
                        if (this.interact(e)) return;
                        const t = this.touchData.move.x - this.touchData.down.x,
                            s = this.touchData.move.y - this.touchData.down.y;
                        if (this.touchPos = void 0, Math.abs(t) < 10 && Math.abs(s) < 10) {
                            const e = {
                                    x: se.sys.session.x,
                                    y: se.sys.session.y
                                },
                                t = this.checkAngle(e, this.touchData.down);
                            se.sys.session.state === ee.Menu ? t === Te.Left || t === Te.Right ? Pe.sys.routeInput(t, !0, !1) : Pe.sys.routeInput(Te.Toggle) : Pe.sys.routeInput(t, !0, !0), Pe.sys.checkCheatCode(t)
                        } else if (Date.now() - this.swipeStart <= this.swipeDelta) {
                            let e = this.checkAngle(this.touchData.down, this.touchData.move);
                            if (se.sys.session.state === ee.Menu) switch (e) {
                                case Te.Right:
                                    e = Te.Left;
                                    break;
                                case Te.Left:
                                    e = Te.Right
                            }
                            const t = e === Te.Down;
                            Pe.sys.routeInput(e, !1, t)
                        }
                    }
                    checkAngle(e, t) {
                        const s = 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI;
                        return s <= 30 && s >= -55 ? Te.Left : s >= 150 || s >= -180 && s <= -125 ? Te.Right : s < -55 && s > -75 ? Te.DownLeft : s > -125 && s < -105 ? Te.DownRight : s > 30 && s < 150 ? Te.Stop : Te.Down
                    }
                    interact(e) {
                        const t = e.target;
                        return !(!se.sys.session.flyoutActive && !t.closest("button")) || (e.cancelable && e.preventDefault(), !1)
                    }
                }
                let Te;
                Ze.sys = null,
                    function(e) {
                        e.Settings = "settings", e.Left = "left", e.Right = "right", e.Down = "down", e.Stop = "stop", e.DownLeft = "downleft", e.DownRight = "downright", e.Boost = "boost", e.Toggle = "toggle", e.Reset = "reset"
                    }(Te || (Te = {}));
                class Pe {
                    constructor() {
                        if (this.codes = void 0, this.lastTime = void 0, this.thisTime = void 0, this.lastInput = void 0, this.lastInputTime = void 0, this.doubleDelta = void 0, this.codesPossible = void 0, Pe.sys) return Pe.sys;
                        Pe.sys = this, new Ee, new Ce, new ke, new Ze, this.defineCodes(), this.reset()
                    }
                    reset() {
                        Ee.sys.reset(), ke.sys.reset(), Ze.sys.reset(), this.lastTime = 0, this.thisTime = 0, this.lastInput = void 0, this.lastInputTime = Date.now(), this.doubleDelta = 300, this.codesPossible = []
                    }
                    update() {
                        Ee.sys.update()
                    }
                    defineCodes() {
                        this.codes = {
                            keyboard: [
                                ["m", "i", "c", "r", "o", "s", "o", "f", "t"],
                                ["e", "d", "g", "e"],
                                ["s", "a", "f", "e"],
                                ["arrowup", "arrowup", "arrowdown", "arrowdown", "arrowleft", "arrowright", "arrowleft", "arrowright", "b", "a"],
                                ["b", "i", "g"]
                            ],
                            directional: [
                                ["left", "down", "right", "stop", "left", "down", "right", "stop"],
                                ["stop", "down", "stop", "down"],
                                ["stop", "right", "down", "left"],
                                ["stop", "stop", "down", "down", "left", "right", "left", "right"],
                                ["stop", "stop", "stop", "stop"]
                            ]
                        }
                    }
                    routeInput(e, t = !1, s = !0) {
                        if (se.sys.session.flyoutActive) return void(e === Te.Settings && this.inputSettings());
                        const i = se.sys.session.inputType;
                        let a = !1;
                        if (s && (a = this.registerDoubleInput(e)), i !== te.Mouse && i !== te.Touch || e !== Te.Toggle || a)
                            if (i !== te.Keyboard && i !== te.Touch || e !== Te.Down || t || !a ? i === te.Touch && a && (e = Te.Toggle) : e = Te.Boost, se.sys.session.state !== ee.Menu || e !== Te.Left && e !== Te.Right) switch (e) {
                                case Te.Toggle:
                                    this.inputToggle();
                                    break;
                                case Te.Settings:
                                    this.inputSettings();
                                    break;
                                case Te.Reset:
                                    _e.sys.changeGameState(ee.Menu);
                                    break;
                                default:
                                    Ie.sys.routeAction(e, t)
                            } else switch (e) {
                                case Te.Left:
                                    Ie.sys.changeCharacter(-1);
                                    break;
                                case Te.Right:
                                    Ie.sys.changeCharacter(1)
                            }
                    }
                    registerDoubleInput(e) {
                        this.thisTime = Date.now();
                        let t = !1;
                        return this.thisTime - this.lastTime <= this.doubleDelta && this.lastInput === e && (t = !0, e = void 0), this.lastTime = this.thisTime, this.lastInput = e, t
                    }
                    changeInputMethod(e) {
                        se.sys.session.inputType === e || this.lastInputTime + 100 > Date.now() || (this.lastInputTime = Date.now(), se.sys.session.inputType = e, ve.sys.updateInputTypeUI())
                    }
                    inputToggle() {
                        const e = se.sys.session.state;
                        e === ee.Play ? _e.sys.changeGameState(ee.Pause) : e === ee.Pause || e === ee.Menu ? _e.sys.changeGameState(ee.Play) : e === ee.Over && _e.sys.changeGameState(ee.Menu)
                    }
                    inputSettings() {
                        se.sys.session.state === ee.Play && _e.sys.changeGameState(ee.Pause), document.dispatchEvent(new CustomEvent(Qe))
                    }
                    checkCheatCode(e) {
                        const t = se.sys.session.inputType;
                        if (se.sys.session.state !== ee.Menu) return;
                        const s = t === te.Keyboard ? this.codes.keyboard : this.codes.directional;
                        this.codesPossible = this.codesPossible.filter((t => e === s[t.idx][t.pos])), s.filter((t => e === t[0])).forEach((e => {
                            this.codesPossible.push({
                                idx: s.indexOf(e),
                                pos: 0
                            })
                        })), this.codesPossible.some((e => {
                            if (e.pos++, e.pos === s[e.idx].length) {
                                let t = "code";
                                switch (e.idx) {
                                    case 0:
                                        this.cheat("lives"), t = "cheatcode";
                                        break;
                                    case 1:
                                        this.cheat("boosts"), t = "cheatcode";
                                        break;
                                    case 2:
                                        this.cheat("safety"), t = "cheatcode";
                                        break;
                                    case 3:
                                        Ie.sys.changeCharacter(7, !0);
                                        break;
                                    case 4:
                                        Ie.sys.scale = 2
                                }
                                ve.sys.sendNotification(t)
                            }
                        }))
                    }
                    cheat(e, t = !0) {
                        const s = se.sys.game.cheat;
                        if (t && se.sys.session.state === ee.Menu) switch (s.used = !0, s[e] = !0, e) {
                            case "lives":
                            case "boosts":
                                se.sys.game[e].current = 3;
                                break;
                            case "safety":
                                Ie.sys.collectFriend()
                        } else switch (s[e] = !1, e) {
                            case "boosts":
                                se.sys.game[e].current = 0;
                                break;
                            case "safety":
                                Ie.sys.removeFriend()
                        }
                        s.lives || s.boosts || s.safety || (s.used = !1), ve.sys.updateIcons()
                    }
                }
                Pe.sys = null;
                class Ee {
                    constructor() {
                        if (this.indexList = void 0, this.buttonMap = void 0, this.last = void 0, this.vib = void 0, this.vibCurrent = void 0, this.timer = void 0, this.linkedPad = void 0, Ee.sys) return Ee.sys;
                        Ee.sys = this, window.addEventListener("gamepadconnected", (e => Ee.sys.onGamepadConnected(e))), window.addEventListener("gamepaddisconnected", (e => Ee.sys.onGamepadDisconnected(e))), this.indexList = [], this.buttonMap = ["a", "b", "x", "y", "lb", "rb", "lt", "rt", "select", "start", "lstick", "rstick", "up", "down", "left", "right", "home", "touchpad"], this.linkedPad = {
                            index: void 0,
                            pad: void 0,
                            pressed: {}
                        }, this.defineVibrations(), this.setVibration(), this.reset()
                    }
                    reset() {
                        this.last = void 0
                    }
                    defineVibrations() {
                        this.vib = {
                            default: {
                                dur: 0,
                                weak: .4,
                                strong: .4
                            },
                            tiny: {
                                dur: 100,
                                weak: .05,
                                strong: 0
                            },
                            small: {
                                dur: 100,
                                weak: .15,
                                strong: 0
                            },
                            big: {
                                dur: 600,
                                weak: .5,
                                strong: 0
                            },
                            boost: {
                                dur: 3e3,
                                weak: 0,
                                strong: .25
                            },
                            pickup: {
                                dur: 200,
                                weak: .2,
                                strong: 0
                            },
                            ramp: {
                                dur: 200,
                                weak: 0,
                                strong: .15
                            },
                            slow: {
                                dur: 400,
                                weak: 0,
                                strong: .15
                            },
                            crash: {
                                dur: 300,
                                weak: .4,
                                strong: .4
                            }
                        }
                    }
                    setVibration(e = "default") {
                        this.vibCurrent = this.vib[e], this.timer = this.vibCurrent.dur
                    }
                    vibrateController() {
                        const e = se.sys.session.inputType;
                        if (e === te.Xbox || e === te.Ps) {
                            const e = this.vibCurrent,
                                t = this.timer / e.dur;
                            this.linkedPad.pad.vibrationActuator.playEffect("dual-rumble", {
                                startDelay: 0,
                                duration: e.dur,
                                weakMagnitude: t * e.weak,
                                strongMagnitude: t * e.strong
                            })
                        }
                    }
                    onGamepadConnected(e) {
                        Ee.sys.indexList.push(e.gamepad.index)
                    }
                    onGamepadDisconnected(e) {
                        const t = Ee.sys.indexList.indexOf(e.gamepad.index);
                        t > -1 && Ee.sys.indexList.splice(t, 1), this.linkedPad = {
                            index: void 0,
                            pad: void 0,
                            pressed: {}
                        };
                        const s = se.sys.session.inputType;
                        s !== te.Xbox && s !== te.Ps || Pe.sys.changeInputMethod(te.Keyboard)
                    }
                    setController(e, t) {
                        this.linkedPad = {
                            index: e,
                            pad: t,
                            pressed: {}
                        }, this.changeControllerType(t)
                    }
                    update() {
                        const e = this.indexList.length;
                        if (!(e <= 0))
                            if (void 0 === this.linkedPad.index)
                                for (let t = 0; t < e; t++) {
                                    const e = navigator.getGamepads()[this.indexList[t]];
                                    if (void 0 !== e) {
                                        const s = this.checkJoysticks(e),
                                            i = this.checkButtons(e);
                                        null === s && null === i || this.setController(this.indexList[t], e)
                                    }
                                } else {
                                    this.timer > 0 && this.checkVibrations();
                                    const e = navigator.getGamepads()[this.linkedPad.index];
                                    void 0 !== e && (this.checkJoysticks(e), this.checkButtons(e))
                                }
                    }
                    checkVibrations() {
                        this.vibrateController(), this.timer -= 1e3 * se.sys.game.time.loop, this.timer <= 0 && this.setVibration()
                    }
                    changeControllerType(e) {
                        const t = e.id.toLowerCase().includes("054c") ? te.Ps : te.Xbox;
                        Pe.sys.changeInputMethod(t)
                    }
                    checkJoysticks(e) {
                        const t = .5,
                            s = e.axes[0] > t || e.axes[2] > t,
                            i = e.axes[0] < -.5 || e.axes[2] < -.5,
                            a = e.axes[1] > t || e.axes[3] > t,
                            o = e.axes[1] < -.5 || e.axes[3] < -.5;
                        let n;
                        if (s || i || o || a ? (this.changeControllerType(e), !o || s || i ? !a || s || i ? !i || o || a ? !s || o || a ? s && o ? n = Te.Right : s && a ? n = Te.DownRight : i && o ? n = Te.Left : i && a && (n = Te.DownLeft) : n = Te.Right : n = Te.Left : n = Te.Down : n = Te.Stop) : this.last = void 0, this.last === n) return null;
                        if (this.last = n, n)
                            if (se.sys.session.flyoutActive) switch (n) {
                                case Te.Stop:
                                    this.focusNextElement(-1);
                                    break;
                                case Te.Down:
                                    this.focusNextElement(1)
                            } else Pe.sys.routeInput(n, !0, !1);
                        return n
                    }
                    checkButtons(e) {
                        function t(e) {
                            return "object" == typeof e ? e.pressed : 1 === e
                        }
                        if (t(e.buttons[4]) && t(e.buttons[5])) return Pe.sys.routeInput(Te.Reset), this.linkedPad.pressed.lb = !0, this.linkedPad.pressed.rb = !0, null;
                        let s;
                        const i = e.buttons.length;
                        for (let a = 0; a < i; a++)
                            if (t(e.buttons[a])) {
                                if (this.linkedPad.pressed[this.buttonMap[a]]) return null;
                                if (this.linkedPad.pressed[this.buttonMap[a]] = !0, this.changeControllerType(e), se.sys.session.flyoutActive && ["a", "b", "up", "down"].includes(this.buttonMap[a])) {
                                    switch (this.buttonMap[a]) {
                                        case "a":
                                            document.activeElement.click();
                                            break;
                                        case "b":
                                            Pe.sys.routeInput(Te.Settings, !1, !1);
                                            break;
                                        case "up":
                                            this.focusNextElement(-1);
                                            break;
                                        case "down":
                                            this.focusNextElement(1)
                                    }
                                    return null
                                }
                                switch (this.buttonMap[a]) {
                                    case "a":
                                        s = Te.Toggle;
                                        break;
                                    case "lb":
                                        s = Te.Left;
                                        break;
                                    case "rb":
                                        s = Te.Right;
                                        break;
                                    case "lt":
                                    case "rt":
                                        s = Te.Boost;
                                        break;
                                    case "up":
                                        s = Te.Stop;
                                        break;
                                    case "down":
                                        s = Te.Down;
                                        break;
                                    case "left":
                                        s = Te.Left;
                                        break;
                                    case "right":
                                        s = Te.Right;
                                        break;
                                    case "select":
                                    case "start":
                                    case "home":
                                    case "touchpad":
                                        s = Te.Settings
                                }
                                Pe.sys.routeInput(s, !1, !1), Pe.sys.checkCheatCode(s)
                            } else this.linkedPad.pressed[this.buttonMap[a]] = !1;
                        return s
                    }
                    focusNextElement(e = 1) {
                        const t = Array.from(document.querySelectorAll('a:not([disabled]), select:not([disabled]), div[role="option"]:not([disabled]), input:not([disabled]), button:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])')).filter((e => e.offsetWidth > 0 || e.offsetHeight > 0 || e === document.activeElement)),
                            s = t.indexOf(document.activeElement) || 0;
                        (t[s + e] || t[0]).focus()
                    }
                }
                Ee.sys = null;
                class Ie extends xe {
                    constructor(e, t, s, i) {
                        if (super(e, t, s, i), this.speed = void 0, this.timer = void 0, this.dist = void 0, this.angle = void 0, this.dir = void 0, this.scale = void 0, this.swapped = void 0, this.trick = void 0, this.shadow = void 0, this.boostFx = void 0, this.previousGate = void 0, this.skins = void 0, Ie.sys) return Ie.sys;
                        Ie.sys = this, this.reset()
                    }
                    reset() {
                        super.reset(), this.speed = {
                            current: 0,
                            x: 0,
                            y: 0,
                            raw: 0,
                            min: 1,
                            max: 7.5,
                            base: 7.5,
                            accel: .02,
                            airAdd: 2.5,
                            boostAdd: 5
                        }, this.timer = {
                            crash: 0
                        }, this.dist = {}, this.angle = 0, this.dir = "stop", this.trick = 0, this.shadow = 0, this.scale = 1, this.boostFx = [], this.swapped = !1, this.previousGate = -1, this.skins = {
                            render: [],
                            zoom: [.2, .5, 1, .5, .2],
                            poses: ["left", "left", "left", "downleft", "down", "downright", "right", "right", "right", "downright", "down", "downleft"]
                        }, this.changeCharacter(se.sys.session.settings.character, !0)
                    }
                    move() {}
                    unlockForNewGame() {
                        this.changeDirection("down"), Ee.sys.setVibration("big")
                    }
                    update() {
                        super.update(), this.speed.x = this.speed.current * -Math.cos(this.angle), this.speed.y = this.speed.current * -Math.sin(this.angle), this.checkBoundaries(), this.updateTrackers(), this.updateBoostFx(), "stop" === this.dir || this.timer.crash || this.updateSpeed()
                    }
                    checkBoundaries() {
                        const e = se.sys.game.dist,
                            t = se.sys.session.settings.mode;
                        switch (t) {
                            case G.TimeTrial:
                            case G.ZigZag:
                                Math.abs(e.x) > ge.sys.boundary[t] && this.bounce();
                                break;
                            case G.Endless:
                                e.y < 8e3 && e.x < -6400 && !Le.sys.swapBuilt && Le.sys.buildSwap(), !se.sys.game.highScore && e.unit > se.sys.session.bestScore.endless && !se.sys.game.cheat.used && (se.sys.game.highScore = !0, ve.sys.refreshDisplay(), e.unit > 100 && ve.sys.sendNotification("score"))
                        }
                    }
                    changeCharacter(e, t = !1) {
                        const s = ge.sys.characterList[se.sys.session.settings.character];
                        let i, a;
                        t && (i = ge.sys.characterList[e], ge.sys.selectionList.includes(i) || ge.sys.selectionList.push(i), a = ge.sys.selectionList.indexOf(i));
                        const o = ge.sys.selectionList;
                        t || (a = (o.length + ge.sys.selectionList.indexOf(s) + e) % o.length, i = ge.sys.selectionList[a]), this.skins.render = [];
                        const n = this.skins.zoom.length;
                        for (let e = 0; e < n; e++) {
                            const t = (o.length + a + (e - Math.floor(n / 2))) % o.length;
                            this.skins.render[e] = ge.sys.selectionList[t]
                        }
                        se.sys.session.settings.character = ge.sys.characterList.indexOf(i), se.sys.saveSessionSettings(), ge.sys.createPlayerSprite(), Ee.sys.setVibration("small")
                    }
                    routeAction(e, t = !1) {
                        if (!(se.sys.session.state !== ee.Play || this.timer.crash || "bounce" in this.dist || "air" in this.dist && e !== Te.Down)) switch (e) {
                            case Te.Stop:
                                this.stop();
                                break;
                            case Te.Down:
                                this.down();
                                break;
                            case Te.Left:
                            case Te.Right:
                            case Te.DownLeft:
                            case Te.DownRight:
                                this.changeDirection(e, t);
                                break;
                            case Te.Boost:
                                this.boost()
                        }
                    }
                    changeDirection(e, t = !1) {
                        if (this.timer.crash || "bounce" in this.dist || "air" in this.dist && "down" !== e) return;
                        let s;
                        switch (t || "left" !== e || "left" === this.dir ? t || "right" !== e || "right" === this.dir || (e = "downright" === this.dir ? "right" : "downright") : e = "downleft" === this.dir ? "left" : "downleft", e) {
                            case "left":
                                s = -42;
                                break;
                            case "right":
                                s = -138;
                                break;
                            case "downleft":
                                s = -60;
                                break;
                            case "downright":
                                s = -120;
                                break;
                            case "down":
                                s = -90;
                                break;
                            case "stop":
                                s = 90
                        }
                        this.dir = e, this.changePose(e), this.angle = s * Math.PI / 180
                    }
                    changePose(e) {
                        this.swapped && (e = "stop" === e ? "crash" : "chase"), this.pose = e
                    }
                    updateTrackers() {
                        this.timer.crash && (this.timer.crash -= se.sys.game.time.loop * se.sys.game.time.scale, this.timer.crash < 0 && (this.timer.crash = void 0, this.stop(), ke.sys.reset()));
                        for (const e in this.dist) this.dist[e] -= this.speed.current, this.dist[e] <= 0 && (delete this.dist[e], this.endDistTracker(e))
                    }
                    updateSpeed() {
                        let e = 1;
                        const t = this.speed;
                        ("air" in this.dist || "boost" in this.dist) && (e = 8), this.setMinPlayerSpeed();
                        const s = t.accel * e * se.sys.game.time.scale;
                        this.speed.raw = t.raw <= t.max ? t.raw += s : t.raw -= s, this.speed.current = t.raw * se.sys.game.time.scale
                    }
                    stop() {
                        this.changeDirection("stop"), this.stopPlayerSpeed(), Ee.sys.setVibration("tiny")
                    }
                    down() {
                        "air" in this.dist ? (this.trick = this.trick % 2 + 1, 1 === this.trick ? this.changePose("air1") : this.changePose("air2"), Ee.sys.setVibration("small")) : this.changeDirection("down")
                    }
                    slow() {
                        this.speed.raw *= .7, Ee.sys.setVibration("slow")
                    }
                    crash() {
                        if ("immune" in this.dist) return;
                        const e = se.sys.game.cheat;
                        se.sys.game.friend && !e.safety && (this.removeFriend(), Le.sys.buildCrashedFriend(this.x + 48 * (Math.random() - .5), this.y + 32)), e.lives || e.safety || (se.sys.game.lives.current -= 1), ve.sys.refreshDisplay(), se.sys.game.lives.current <= 0 ? this.lose() : (this.timer.crash = 1, this.stopPlayerSpeed(), this.dist.immune = 96, this.changePose("crash"), Ee.sys.setVibration("crash"))
                    }
                    air(e) {
                        this.timer.crash || (this.changeDirection("down"), "boost" in this.dist && (this.dist.boost += e), this.dist.air = e, this.trick = se.sys.rand(1, 2), this.speed.max = this.speed.base + this.speed.airAdd, this.shadow = 0, this.down(), Ee.sys.setVibration("ramp"))
                    }
                    boost(e = !1) {
                        !e && (se.sys.game.boosts.current <= 0 || "boost" in this.dist) || (e || se.sys.game.cheat.boosts || (se.sys.game.boosts.current -= 1), this.dist.boost = 2e3, this.speed.max = this.speed.base + this.speed.boostAdd, ve.sys.refreshDisplay(), Ee.sys.setVibration("boost"))
                    }
                    bounce() {
                        this.spin(), this.dist.bounce = 32
                    }
                    endDistTracker(e) {
                        switch (e) {
                            case "air":
                                this.dist.immune = 256, ke.sys.reset(), "boost" in this.dist || (this.speed.max = this.speed.base), this.down(), Ee.sys.setVibration("slow");
                                break;
                            case "boost":
                                this.speed.max = this.speed.base, Ee.sys.setVibration("tiny")
                        }
                    }
                    swap() {
                        this.removeFriend(!0), this.swapped = !0, this.changePose("chase"), this.speed.base += 3, this.speed.max = this.speed.base, this.hitbox.x -= 32, this.hitbox.y -= 32, this.hitbox.w += 64, this.hitbox.h += 64, Le.sys.top.filter((e => "lure" === e.type)).forEach((e => {
                            Le.sys.buildObject("foe", e.x, e.y, "chase"), e.sleep = !0
                        })), se.sys.game.cheat.used = !0, ve.sys.sendNotification("cheat"), Ee.sys.setVibration("big")
                    }
                    spin() {
                        const e = Math.random() > .5;
                        switch (this.dir) {
                            case "downright":
                            case "right":
                                this.changeDirection(e ? "left" : "downleft", !0);
                                break;
                            case "downleft":
                            case "left":
                                this.changeDirection(e ? "right" : "downright", !0);
                                break;
                            default:
                                this.changeDirection(e ? "left" : "right", !0)
                        }
                        this.speed.raw *= .9, Ee.sys.setVibration("slow")
                    }
                    collectBoost() {
                        se.sys.game.boosts.current < se.sys.game.boosts.max && (se.sys.game.boosts.current += 1, ve.sys.refreshDisplay()), Ee.sys.setVibration("pickup")
                    }
                    collectLife() {
                        se.sys.game.lives.current < se.sys.game.lives.max && (se.sys.game.lives.current += 1, ve.sys.refreshDisplay()), Ee.sys.setVibration("pickup")
                    }
                    collectCoin() {
                        se.sys.game.coins += 1, Ee.sys.setVibration("pickup")
                    }
                    collectFriend() {
                        se.sys.game.friend = !0, ge.sys.createPlayerSprite(), se.sys.session.settings.mode === G.Endless && (se.sys.game.shields.current = se.sys.game.shields.max, ve.sys.refreshDisplay()), Ee.sys.setVibration("pickup")
                    }
                    removeFriend(e = !1) {
                        !se.sys.game.friend || se.sys.game.cheat.safety || e || (se.sys.game.friend = !1, ge.sys.createPlayerSprite(), se.sys.game.shields.current = 0, ve.sys.refreshDisplay())
                    }
                    useShield() {
                        se.sys.game.cheat.safety || (se.sys.game.shields.current -= 1, ve.sys.refreshDisplay(), Ee.sys.setVibration("small"))
                    }
                    lose() {
                        se.sys.game.lives.current = 0, se.sys.game.shields.current = 0, this.dist.immune = 0, this.stopPlayerSpeed(), this.changePose("crash"), this.boostFx = [], _e.sys.changeGameState(ee.Over), Ee.sys.setVibration("big")
                    }
                    finishline() {
                        se.sys.game.finish = !0, this.stopPlayerSpeed(), this.changePose("stop"), this.boostFx = [], _e.sys.changeGameState(ee.Over), Ee.sys.setVibration("big")
                    }
                    passGate(e) {
                        e - 1 === this.previousGate && (se.sys.game.gates += 1), this.previousGate = e, se.sys.saveGameStats(), ve.sys.refreshDisplay(), Ee.sys.setVibration("small")
                    }
                    failGate(e) {
                        se.sys.game.highScore && (ve.sys.sendNotification("score"), se.sys.game.highScore = !1), se.sys.game.gates = 0, this.previousGate = e, ve.sys.refreshDisplay(), Ee.sys.setVibration("slow")
                    }
                    stopPlayerSpeed() {
                        this.speed.current = 0, this.speed.raw = 0, this.speed.max = 0, this.speed.x = 0, this.speed.y = 0
                    }
                    setMinPlayerSpeed() {
                        this.speed.raw = Math.max(this.speed.raw, this.speed.min), this.speed.max = Math.max(this.speed.max, this.speed.base)
                    }
                    updateBoostFx() {
                        if (this.boostFx.length > 0 && (this.boostFx.forEach((e => {
                                e.start.x -= .8 * this.speed.x, e.end.x -= this.speed.x, e.start.y -= .8 * this.speed.y, e.end.y -= this.speed.y, e.time += se.sys.game.time.loop
                            })), this.boostFx = this.boostFx.filter((e => e.time < .5))), "boost" in this.dist && this.speed.current > 0) {
                            const e = 16 - 32 * Math.random();
                            this.boostFx.push({
                                start: {
                                    x: this.x + e,
                                    y: this.y + 8
                                },
                                end: {
                                    x: this.x + e - 3 * this.speed.x,
                                    y: this.y + 8 - 3 * this.speed.y
                                },
                                time: .01
                            })
                        }
                    }
                    renderCharacterSelection() {
                        const e = se.sys.game.time.elapsed,
                            t = this.skins.render.length,
                            s = Math.floor(t / 2),
                            i = Math.floor(e * ge.sys.sheet.player.fps) % this.skins.poses.length,
                            a = pe.sys.ctx;
                        a.save();
                        for (let o = 0; o < t; o++) {
                            let t = 80,
                                n = 1;
                            const r = this.skins.zoom[o];
                            let l = this.skins.poses[i];
                            o !== s - 1 && o !== s + 1 || (t = 96), a.globalAlpha = r;
                            const h = this.skins.render[o];
                            if (o !== s) l = "down", pe.sys.drawPlayerMenu(h, l, se.sys.session.x + t * (o - s), se.sys.session.y, n + r);
                            else {
                                n = this.scale;
                                se.sys.game.shields.current / se.sys.game.shields.max > 0 && pe.sys.drawShield(this.x, this.y + 16), pe.sys.drawPlayerSprite(l, e, se.sys.session.x + t * (o - s), se.sys.session.y, n + r)
                            }
                        }
                        a.restore()
                    }
                    draw() {
                        if (this.boostFx.length > 0 && pe.sys.drawBoost(this.boostFx), this.swapped) pe.sys.drawLayer("foe", this.pose, this.x, this.y, this.time, this.anim);
                        else {
                            const e = se.sys.game.time.elapsed;
                            se.sys.game.shields.current / se.sys.game.shields.max > 0 && pe.sys.drawShield(this.x, this.y + 16), "air" in this.dist && (this.dist.air < 256 ? this.shadow = this.dist.air / 4 : this.shadow < 64 ? this.shadow += 3 * se.sys.game.time.scale : this.shadow = 64, pe.sys.drawShadow(this.x, this.y + 16, this.shadow)), "immune" in this.dist && (pe.sys.ctx.save(), pe.sys.ctx.globalAlpha = Math.floor(4 * e) % 2 == 0 ? .4 : .7), pe.sys.drawPlayerSprite(this.pose, e, this.x, this.y, this.scale), "immune" in this.dist && pe.sys.ctx.restore()
                        }
                    }
                }
                Ie.sys = null;
                class Le {
                    constructor() {
                        if (this.all = void 0, this.top = void 0, this.btm = void 0, this.npc = void 0, this.foe = void 0, this.endingFoe = void 0, this.swapBuilt = void 0, this.sleeping = void 0, this.prevClusters = void 0, this.startingObjects = void 0, this.endless = void 0, this.timetrial = void 0, this.zigzag = void 0, this.grid = void 0, Le.sys) return Le.sys;
                        Le.sys = this, new de, new Ie("player", se.sys.session.x, se.sys.session.y, "down"), this.reset(), this.createSleepingObjects()
                    }
                    reset() {
                        void 0 === this.sleeping ? this.sleeping = [] : this.sleeping = this.sleeping.concat(this.top).concat(this.btm).concat(this.npc).concat(this.foe), this.grid = {
                            size: 16,
                            gap: 1024,
                            slots: 3
                        }, this.endless = {
                            row: {
                                next: 0,
                                inc: 800
                            },
                            foe: {
                                next: 1e3,
                                inc: 480
                            },
                            npc: {
                                next: 30,
                                inc: 100
                            },
                            ramp: {
                                next: 500,
                                inc: 500
                            },
                            boost: {
                                next: 650,
                                inc: 500
                            },
                            lure: {
                                next: 700,
                                inc: 500
                            },
                            friend: {
                                next: 3e3,
                                inc: 3e3
                            },
                            life: {
                                next: 2e3,
                                inc: 1e3
                            },
                            checkpoint: {
                                next: 5e3,
                                inc: 5e3
                            }
                        }, this.timetrial = {
                            row: {
                                next: 0,
                                inc: 1088
                            },
                            counter: 0,
                            clusterList: ["start", "intro", "act1a", "act1b", "act2a", "act2b", "act3a", "act3b", "act4a", "act4b", "act5a", "act5b", "act6a", "act6b", "act7a", "act7b", "finish"]
                        }, this.zigzag = {
                            row: {
                                next: 0,
                                inc: 1200
                            },
                            life: {
                                next: 1500,
                                inc: 3e3
                            },
                            boost: {
                                next: 3e3,
                                inc: 3e3
                            },
                            counter: 0,
                            clusterList: ["small1", "small2", "small3", "small4", "small5", "small6", "small7", "small8", "small9", "small10", "small11", "small12", "small13", "small14", "small15", "small16"]
                        }, this.all = [], this.top = [], this.btm = [], this.npc = [], this.foe = [], this.prevClusters = [], this.swapBuilt = !1, this.endingFoe = void 0, this.calcClusterSlots(), Ie.sys.reset(), this.all.push(Ie.sys)
                    }
                    calcClusterSlots() {
                        this.grid.slots = 2 * Math.ceil((se.sys.session.h - se.sys.session.y) / this.grid.gap) + 3
                    }
                    createSleepingObjects() {
                        this.startingObjects = {
                            wall: 40,
                            snag: 40,
                            snagsml: 20,
                            snagtall: 5,
                            spin: 10,
                            ramp: 6,
                            lure: 3,
                            slow: 20,
                            slowbig: 10,
                            bump: 20,
                            bumpbig: 10,
                            coin: 2,
                            boost: 2,
                            life: 1,
                            spiral: 5,
                            ambient: 10,
                            blockbig: 6,
                            block: 4,
                            friend: 1,
                            foe: 2,
                            npc: 10
                        };
                        for (const e in this.startingObjects)
                            if (this.startingObjects.hasOwnProperty(e)) {
                                const t = this.startingObjects[e];
                                for (let s = 0; s < t; s++) {
                                    const t = this.createObject(e, 0, 0, void 0);
                                    this.sleeping.push(t)
                                }
                            }
                    }
                    createNpc() {
                        const e = se.sys.rand(1, 13),
                            t = (Math.random() / 2 + .25) * se.sys.session.w,
                            s = e < Ie.sys.speed.raw ? se.sys.session.h + 24 : -24;
                        this.buildObject("npc", t, s, "left").speed.max = e
                    }
                    createFoe() {
                        const e = (Math.random() / 2 + .25) * se.sys.session.w;
                        this.buildObject("foe", e, -32, "chase").speed.raw = Ie.sys.speed.raw + 1
                    }
                    buildStartScene() {
                        switch (se.sys.session.settings.mode) {
                            case G.Endless:
                                this.createEndlessStart();
                                break;
                            case G.TimeTrial:
                                this.createTimeTrialAct();
                                break;
                            case G.ZigZag:
                                this.createZigZagStart()
                        }
                    }
                    update() {
                        switch (this.putToSleep(), se.sys.session.settings.mode) {
                            case G.Endless:
                                this.updateEndlessMode();
                                break;
                            case G.TimeTrial:
                                this.updateTimeTrialMode();
                                break;
                            case G.ZigZag:
                                this.updateZigZagMode()
                        }
                        this.mergeAll()
                    }
                    nextReady(e, t = !0) {
                        let s;
                        return s = t ? se.sys.game.dist.unit : se.sys.game.dist.y + (se.sys.session.h - se.sys.session.y), e.next < s && (e.next += e.inc, !0)
                    }
                    calcSpawnHeight(e) {
                        return e - se.sys.game.dist.y + se.sys.session.y
                    }
                    updateEndlessMode() {
                        this.nextReady(this.endless.row, !1) && this.createEndlessRow(), this.nextReady(this.endless.foe) && this.createFoe(), this.nextReady(this.endless.npc) && this.createNpc()
                    }
                    updateTimeTrialMode() {
                        this.nextReady(this.timetrial.row, !1) && this.timetrial.counter < this.timetrial.clusterList.length && this.createTimeTrialAct()
                    }
                    updateZigZagMode() {
                        this.nextReady(this.zigzag.row, !1) && this.createZigZagGate()
                    }
                    createEndlessStart() {
                        this.buildCluster("endlessStarts", se.sys.session.x, se.sys.session.y + 128)
                    }
                    createEndlessRow() {
                        const e = Ie.sys,
                            t = this.endless,
                            s = this.calcSpawnHeight(t.row.next),
                            i = Math.floor(this.grid.slots / 2);
                        let a = -i;
                        for (; a <= i; a++) {
                            let i, o, n = "allNormal";
                            if (0 === a)
                                if (i = 0, o = 0, "air" in e.dist) n = "allPassive";
                                else {
                                    if (this.nextReady(t.checkpoint)) return void this.buildCheckpoint(se.sys.session.x, s);
                                    this.nextReady(t.life) ? n = "endlessLives" : this.nextReady(t.friend) ? n = "endlessFriends" : this.nextReady(t.boost) ? n = "endlessBoosts" : this.nextReady(t.ramp) ? n = "endlessRamps" : this.nextReady(t.lure) && (n = "endlessLures")
                                }
                            else i = se.sys.rand(-20, 20) * this.grid.size, o = se.sys.rand(0, 32) * this.grid.size;
                            let r = 0;
                            "left" === e.dir || "downleft" === e.dir ? r = -this.grid.gap / 4 : "right" !== e.dir && "downright" !== e.dir || (r = this.grid.gap / 4);
                            const l = se.sys.session.x + a * this.grid.gap + i + r,
                                h = s + o;
                            this.buildCluster(n, l, h), this.buildEndlessRandomSnags(l, h)
                        }
                    }
                    buildEndlessRandomSnags(e, t) {
                        const s = this.grid.gap,
                            i = this.endless.row.inc / 2,
                            a = [
                                [-s / 2, 0],
                                [-s / 4, i],
                                [s / 4, i]
                            ],
                            o = a.length;
                        for (let s = 0; s < o; s++) {
                            if (Math.random() < .33) continue;
                            const i = a[s][0] + se.sys.rand(-8, 8) * this.grid.size,
                                o = a[s][1] + se.sys.rand(-8, 8) * this.grid.size;
                            let n = "snag";
                            Math.random() < .5 && (n = se.sys.randIndex(Object.keys(de.sys.spawnSingle)));
                            const r = de.sys.spawnSingle[n],
                                l = se.sys.randIndex(r);
                            this.buildObject(n, e + i, t + o, l)
                        }
                    }
                    createTimeTrialAct() {
                        const e = this.timetrial.clusterList[this.timetrial.counter],
                            t = se.sys.session.x - se.sys.game.dist.x,
                            s = this.calcSpawnHeight(this.timetrial.row.next);
                        this.buildCluster("timetrialScenes", t, s, e), this.timetrial.counter += 1
                    }
                    createZigZagStart() {
                        this.buildCluster("zigzagGates", se.sys.session.x, se.sys.session.y + 512, "gateFirst"), this.zigzag.counter += 1
                    }
                    createZigZagGate() {
                        const e = se.sys.session.x - se.sys.game.dist.x,
                            t = this.calcSpawnHeight(this.zigzag.row.next),
                            s = this.zigzag.counter % 2 != 0;
                        s ? this.buildCluster("zigzagGates", e - 320, t, "gateLeft") : this.buildCluster("zigzagGates", e + 320, t, "gateRight"), this.zigzag.counter += 1, this.createGateClusters(e, t, s)
                    }
                    createGateClusters(e, t, s) {
                        const i = s ? e + 64 : e - 64;
                        this.buildCluster("allNormal", i, t - 128, se.sys.randIndex(this.zigzag.clusterList));
                        const a = t + .5 * this.zigzag.row.inc;
                        if (this.buildCluster("zigzagGateScenes", e, a), this.nextReady(this.zigzag.life)) this.buildObject("life", e, a, "life");
                        else if (this.nextReady(this.zigzag.boost)) this.buildObject("boost", e, a, "boost");
                        else if (Math.random() < .1) this.buildObject("spiral", e, a, "spiral1");
                        else if (Math.random() < .4) {
                            const t = Math.random() > .5 ? "slowbig" : "bumpbig";
                            this.buildObject(t, e, a, t + "1")
                        }
                        const o = t + .25 * this.zigzag.row.inc;
                        this.buildCluster("allNormal", e - 560, o + se.sys.rand(0, 32) * this.grid.size, se.sys.randIndex(this.zigzag.clusterList)), this.buildCluster("allNormal", e + 560, o + se.sys.rand(0, 32) * this.grid.size, se.sys.randIndex(this.zigzag.clusterList))
                    }
                    confirmGate(e) {
                        this.all.filter((t => t.gateId === e)).forEach((e => {
                            e.pose = "pass"
                        }))
                    }
                    denyGate(e) {
                        this.all.filter((t => t.gateId === e)).forEach((e => {
                            e.pose = "fail"
                        }))
                    }
                    buildCluster(e, t, s, i) {
                        if (!i) {
                            const t = Object.keys(de.sys.library[e]).filter((e => !this.prevClusters.includes(e)));
                            i = se.sys.randIndex(t)
                        }
                        const a = de.sys.library[e][i];
                        this.prevClusters.unshift(i), this.prevClusters.length > 14 && this.prevClusters.pop();
                        for (const e in a)
                            if (a.hasOwnProperty(e)) {
                                const i = a[e],
                                    o = i.length;
                                for (let a = 0; a < o; a++) {
                                    const o = i[a];
                                    let n;
                                    if (o.length > 2) {
                                        const t = o[2];
                                        n = "string" == typeof t ? se.sys.randIndex(de.sys.legend[e][t]) : t[0]
                                    } else {
                                        const t = this.randKey(de.sys.legend[e], !0);
                                        n = se.sys.randIndex(de.sys.legend[e][t])
                                    }
                                    const r = t + o[0] * this.grid.size,
                                        l = s + o[1] * this.grid.size;
                                    this.buildObject(e, r, l, n)
                                }
                            }
                    }
                    randKey(e, t = !1) {
                        const s = Object.keys(e),
                            i = e[s[s.length * Math.random() << 0]],
                            a = s.find((t => e[t] === i));
                        if (t) return a; {
                            const e = {};
                            return e[a] = i, e
                        }
                    }
                    buildCrashedFriend(e, t) {
                        this.buildObject("friend", e, t, "crash").hit = !0, this.endless.friend.next = se.sys.game.dist.unit + this.endless.friend.inc
                    }
                    buildCheckpoint(e, t) {
                        this.endless.row.next += this.endless.row.inc, this.top = this.sleep(this.top, -64, se.sys.session.h + 64), this.buildCluster("endlessCheckpoints", e, t)
                    }
                    buildSwap() {
                        this.swapBuilt = !0, this.endless.row.next += 1280, this.top = this.sleep(this.top, -64, se.sys.session.h + 64), this.buildCluster("endlessSwap", se.sys.session.x - (se.sys.session.h - se.sys.session.y) - 256, se.sys.session.h + 256)
                    }
                    buildObject(e, t, s, i) {
                        t = Math.floor(t) + (se.sys.game.dist.x - Math.floor(se.sys.game.dist.x)), s = Math.floor(s) + (se.sys.game.dist.y - Math.floor(se.sys.game.dist.y));
                        let a = this.wake(e, t, s, i);
                        switch (a || (a = this.createObject(e, t, s, i)), a.type) {
                            case "wall":
                                !["f1", "f2", "f3"].includes(i) && Math.random() < .5 && (a.decor = se.sys.randIndex(["a", "b", "c", "d", "e", "f", "g", "h"]));
                                break;
                            case "ambient":
                                a.anim = "hidden";
                                break;
                            case "marker":
                            case "guide":
                            case "gate":
                                a.gateId = this.zigzag.counter
                        }
                        a.time = Math.random();
                        switch (ge.sys.sheet[e].group) {
                            case "top":
                                this.top.push(a);
                                break;
                            case "btm":
                                this.btm.push(a);
                                break;
                            case "npc":
                                this.npc.push(a);
                                break;
                            case "foe":
                                this.foe.push(a)
                        }
                        return a
                    }
                    createObject(e, t, s, i) {
                        switch (e) {
                            case "gate":
                            case "swap":
                                return new Ve(e, t, s);
                            case "foe":
                                return new Se(e, t, s, i);
                            case "npc":
                                return new Me(e, t, s, i);
                            default:
                                return new xe(e, t, s, i)
                        }
                    }
                    mergeAll() {
                        const e = this.top.concat(this.npc).concat(this.foe);

                        function t(e, t) {
                            return e.hitbox.y + e.hitbox.h - (t.hitbox.y + t.hitbox.h)
                        }
                        "air" in Ie.sys.dist ? (e.sort(((e, s) => t(e, s))), e.push(Ie.sys)) : (e.push(Ie.sys), e.sort(((e, s) => t(e, s)))), this.all = this.btm.concat(e)
                    }
                    wake(e, t, s, i) {
                        let a;
                        const o = this.wakeFromSleep(e, i);
                        return o ? (a = o, a.shift(t - a.x, s - a.y), a.reset(), a) : null
                    }
                    wakeFromSleep(e, t) {
                        let s = this.sleeping;
                        const i = s.length;
                        for (let a = 0; a < i; a++)
                            if (s[a].type === e) return s[a].pose = t, s = s.splice(a, 1), s[a];
                        return null
                    }
                    putToSleep() {
                        this.top = this.sleep(this.top), this.btm = this.sleep(this.btm), this.npc = this.sleep(this.npc, -64, se.sys.session.h + 64), this.foe = this.sleep(this.foe, -256)
                    }
                    sleep(e, t = -64, s = 1e4) {
                        function i(e) {
                            return e.y > t && e.y < s && !e.sleep
                        }
                        const a = e.filter((e => !i(e)));
                        return this.sleeping = this.sleeping.concat(a), e.filter((e => i(e)))
                    }
                }
                Le.sys = null;
                class De {
                    constructor() {
                        if (De.sys) return De.sys;
                        De.sys = this
                    }
                    update() {
                        this.checkCollisions()
                    }
                    checkCollisions() {
                        const e = Ie.sys,
                            t = "air" in e.dist,
                            s = "boost" in e.dist,
                            i = this.filterVisible(Le.sys.top.concat(Le.sys.btm)),
                            a = i.length;

                        function o(e, t) {
                            if (!(e.y < 16) && De.sys.collision(t, e) && !t.objectsHit.includes(e)) switch (t.objectsHit.push(e), e.type) {
                                case "wall":
                                case "snag":
                                case "snagsml":
                                case "snagtall":
                                case "block":
                                case "blockbig":
                                case "ramp":
                                    return void t.crash();
                                default:
                                    return void t.slow()
                            }
                        }
                        for (let n = 0; n < a; n++) {
                            const a = i[n];
                            if (!this.collision(e, a) || a.hit || t) "gate" === a.type && !a.hit && a.y < e.y ? (e.failGate(a.gateId), Le.sys.denyGate(a.gateId), a.hit = !0) : "ambient" === a.type && "hidden" === a.anim && a.y + 32 < e.y ? (a.anim = "oneshot", a.time = 0) : "lure" === a.type && a.hit && a.y + 192 < e.y && (Le.sys.buildObject("foe", a.x, a.y + 32, "chase"), a.sleep = !0);
                            else {
                                if (a.hit = !0, e.swapped) return "lure" === a.type && Le.sys.buildObject("foe", a.x, a.y, "chase"), void(a.sleep = !0);
                                switch (a.type) {
                                    case "wall":
                                    case "snag":
                                    case "snagsml":
                                    case "snagtall":
                                    case "block":
                                    case "blockbig":
                                    case "marker":
                                        e.crash();
                                        break;
                                    case "slow":
                                    case "slowbig":
                                    case "bump":
                                    case "bumpbig":
                                        e.slow();
                                        break;
                                    case "spin":
                                    case "spiral":
                                    case "guide":
                                        e.spin();
                                        break;
                                    case "boost":
                                        e.collectBoost(), this.collectAnim(a);
                                        break;
                                    case "ramp":
                                        s && se.sys.session.settings.mode !== G.TimeTrial ? e.air(1600) : se.sys.session.settings.mode === G.TimeTrial ? e.air(576) : e.air(1080);
                                        break;
                                    case "life":
                                        e.collectLife(), this.collectAnim(a);
                                        break;
                                    case "coin":
                                        e.collectCoin(), this.collectAnim(a);
                                        break;
                                    case "friend":
                                        e.collectFriend(), this.collectAnim(a);
                                        break;
                                    case "gate": {
                                        e.passGate(a.gateId);
                                        const t = Le.sys.buildObject("ambient", e.x, e.y);
                                        t.hit = !0, this.collectAnim(t), Le.sys.confirmGate(a.gateId);
                                        break
                                    }
                                    case "finish":
                                        e.finishline();
                                        break;
                                    case "checkpoint":
                                        Le.sys.npc.forEach((e => {
                                            e.crash()
                                        })), Le.sys.foe.forEach((e => {
                                            e.crash()
                                        })), se.sys.saveGameStats(), e.boost(!0);
                                        break;
                                    case "swap":
                                        e.swap()
                                }
                            }
                            Le.sys.npc.forEach((e => {
                                o(a, e)
                            })), Le.sys.foe.forEach((e => {
                                o(a, e)
                            }))
                        }
                        const n = Le.sys.foe.length,
                            r = Le.sys.npc.length;
                        for (let t = 0; t < n; t++) {
                            const s = Le.sys.foe[t];
                            this.collision(s, e) && !s.hit && s.timer.crash <= 0 && (se.sys.game.shields.current > 0 ? (s.crash(), e.useShield()) : e.swapped ? s.crash() : (s.ending(), Le.sys.endingFoe = s, e.lose()));
                            for (let e = 0; e < r; e++) {
                                const t = Le.sys.npc[e];
                                this.collision(s, t) && t.timer.crash <= 0 && t.crash()
                            }
                        }
                        if (!t)
                            for (let t = 0; t < r; t++) {
                                const i = Le.sys.npc[t];
                                this.collision(i, e) && i.timer.crash <= 0 && (s || e.swapped ? i.crash() : se.sys.game.shields.current > 0 ? (i.crash(), e.useShield()) : e.crash())
                            }
                    }
                    filterVisible(e) {
                        return e.filter((e => function(e) {
                            return e.y > -64 && e.y < se.sys.session.h + 64 && e.x > -64 && e.x < se.sys.session.w + 64 || "gate" === e.type
                        }(e)))
                    }
                    collectAnim(e) {
                        e.pickup = !0, e.time = 0, e.anim = "ending", e.fx = void 0
                    }
                    collision(e, t) {
                        return !(t.hitbox.x + t.hitbox.w < e.hitbox.x) && (!(e.hitbox.x + e.hitbox.w < t.hitbox.x) && (!(t.hitbox.y + t.hitbox.h < e.hitbox.y) && !(e.hitbox.y + e.hitbox.h < t.hitbox.y)))
                    }
                }
                De.sys = null;
                class _e {
                    constructor() {
                        if (_e.sys) return _e.sys;
                        _e.sys = this, new se, new J, new Pe, new be, new ge, new pe, new Le, new De, new ve, pe.sys.createBackground(), this.updateTheme(se.sys.session.settings.theme, !1), this.reflowCanvas(), this.changeGameState(ee.Menu)
                    }
                    gameLoop(e) {
                        if (Pe.sys.update(), se.sys.session.state !== ee.Pause) switch (se.sys.update(e), se.sys.session.state) {
                            case ee.Play:
                                this.updatePlay();
                                break;
                            case ee.Menu:
                                this.updateMenu();
                                break;
                            case ee.Over:
                                this.updateOver()
                        }
                    }
                    changeGameState(e) {
                        const t = se.sys.session.state;
                        switch (se.sys.session.state = e, e) {
                            case ee.Pause:
                                this.triggerPause();
                                break;
                            case ee.Play:
                                this.triggerPlay(t);
                                break;
                            case ee.Menu:
                                this.triggerMenu();
                                break;
                            case ee.Over:
                                this.triggerOver()
                        }
                        this.checkForcedColors(), he.dispatch(function(e) {
                            return {
                                type: oe.UPDATE_GAME_STATE,
                                gameState: e
                            }
                        }(e))
                    }
                    triggerMenu() {
                        ve.sys.hideNotification(), ve.sys.hideSharePopup(), se.sys.saveGameStats(), se.sys.resetGameData(), pe.sys.defineCanvas(), pe.sys.clearCanvas(), Le.sys.reset(), ve.sys.showMenuScreen(), Pe.sys.reset()
                    }
                    triggerPlay(e) {
                        e === ee.Menu && this.triggerStart(), ve.sys.hideOverlayUI(), ve.sys.refreshDisplay()
                    }
                    triggerStart() {
                        se.sys.game.time.elapsed = 0, Ie.sys.unlockForNewGame(), Le.sys.buildStartScene(), ve.sys.hideNotification()
                    }
                    triggerPause() {
                        ve.sys.showPauseScreen()
                    }
                    triggerOver() {
                        Le.sys.all.forEach((e => {
                            "ending" === e.anim && (e.sleep = !0)
                        })), ve.sys.showOverScreen(), (se.sys.session.settings.mode !== G.TimeTrial || se.sys.game.finish) && se.sys.saveGameStats();
                        const e = q.p.getBoolean("isNewShare") ? "share" : se.sys.game.highScore ? "score" : "share";
                        ve.sys.sendNotification(e, 1e4)
                    }
                    updateMenu() {
                        this.render()
                    }
                    updatePlay() {
                        De.sys.update(), Le.sys.update(), Le.sys.all.forEach((e => {
                            e.update()
                        })), Le.sys.all.forEach((e => {
                            e.move(Ie.sys.speed)
                        })), ve.sys.updateScore(), se.sys.updateDistances(Ie.sys.speed.x, Ie.sys.speed.y), pe.sys.updateBackground(0, 0, Ie.sys.speed), this.render()
                    }
                    updateOver() {
                        const e = Le.sys.endingFoe;
                        e && e.hit && "paused" !== e.anim && (e.update(), this.render())
                    }
                    updateMode() {
                        ve.sys.updateGameModeUI(), ve.sys.sendNotification("mode")
                    }
                    updateTheme(e, t = !1) {
                        be.sys.loadNewTheme(e), (async () => {
                            await be.sys.objectsTemp.decode(), await be.sys.playerTemp.decode(), await be.sys.bgTemp.decode(), be.sys.setNewTheme(e), ve.sys.updateIcons(), ve.sys.updateGameTitleUI(), t && ve.sys.sendNotification("theme")
                        })()
                    }
                    reflowCanvas() {
                        se.sys.session.state === ee.Play && this.changeGameState(ee.Pause);
                        const e = se.sys.session.x,
                            t = se.sys.session.y;
                        pe.sys.defineCanvas();
                        const s = se.sys.session.x - e,
                            i = se.sys.session.y - t;
                        Le.sys.calcClusterSlots(), Le.sys.all.forEach((e => {
                            e.shift(s, i)
                        })), pe.sys.updateBackground(s, i, {
                            x: 0,
                            y: 0
                        }), this.render()
                    }
                    checkForcedColors() {
                        const e = window.matchMedia("(forced-colors:active)");
                        se.sys.session.forcedColors = e.matches
                    }
                    render() {
                        if (pe.sys.clearCanvas(), se.sys.session.state === ee.Menu) return void Ie.sys.renderCharacterSelection();
                        const e = Le.sys.all.filter((function(e) {
                            return e.x > -96 && e.x < se.sys.session.w + 96 && e.y < se.sys.session.h + 96
                        }));
                        e.forEach((e => {
                            e.draw()
                        })), se.sys.session.settings.hitbox && e.forEach((e => {
                            pe.sys.drawHitbox(e.type, e.hitbox)
                        })), se.sys.session.settings.mode !== G.Endless && pe.sys.drawBoundaries()
                    }
                }
                _e.sys = null;
                var ze = s(325),
                    Oe = s(33832);

                function Re(e) {
                    return a.createElement("svg", {
                        className: e,
                        xmlns: "https://www.w3.org/2000/svg",
                        viewBox: "0 0 2048 2048",
                        width: "16",
                        height: "16"
                    }, a.createElement("path", {
                        d: "M1600 896q40 0 75 15t61 41 41 61 15 75v384q0 119-45 224t-124 183-183 123-224 46q-144 0-268-55t-226-156l-472-472q-28-28-43-65t-15-76q0-42 16-78t43-64 63-42 78-16q82 0 141 59l107 106V853q-59-28-106-70t-80-95-52-114-18-126q0-93 35-174t96-143 142-96T832 0q93 0 174 35t143 96 96 142 35 175q0 93-37 178t-105 149q35 9 63 30t49 52q45-25 94-25 50 0 93 23t69 66q45-25 94-25zM512 448q0 75 34 143t94 113V448q0-40 15-75t41-61 61-41 75-15q40 0 75 15t61 41 41 61 15 75v256q60-45 94-113t34-143q0-66-25-124t-69-101-102-69-124-26q-66 0-124 25t-102 69-69 102-25 124zm1152 640q0-26-19-45t-45-19q-34 0-47 19t-16 47-1 62 0 61-16 48-48 19q-37 0-50-23t-16-60 2-77 2-77-15-59-51-24q-34 0-47 19t-16 47-1 62 0 61-16 48-48 19q-37 0-50-23t-16-60 2-77 2-77-15-59-51-24q-34 0-47 19t-16 47-1 62 0 61-16 48-48 19q-26 0-45-19t-19-45V448q0-26-19-45t-45-19q-26 0-45 19t-19 45v787q0 23-8 42t-23 35-35 23-42 9q-22 0-42-8t-37-24l-139-139q-21-21-50-21t-50 21-22 51q0 29 21 50l472 473q84 84 184 128t219 45q93 0 174-35t142-96 96-142 36-175v-384z"
                    }))
                }

                function Ne(e) {
                    return a.createElement("svg", {
                        className: e,
                        xmlns: "https://www.w3.org/2000/svg",
                        viewBox: "0 0 2048 2048",
                        width: "16",
                        height: "16"
                    }, a.createElement("path", {
                        d: "M1783 384q30 0 55 12t43 31 28 46 11 55v864q0 29-10 55t-29 45-43 32-55 12H137q-30 0-55-12t-43-31-28-46-11-55V528q0-28 10-54t29-46 43-32 55-12h1646zm9 144q0-11-9-16H137q-9 5-9 16v864q0 11 9 16h1646q9-5 9-16V528zM384 768H256V640h128v128zM256 896h256v128H256V896zm1152 0h256v128h-256V896zm0 256h256v128h-256v-128zm-1152 0h256v128H256v-128zm384 0h640v128H640v-128zm0-384H512V640h128v128zm0 128h128v128H640V896zm256 0h128v128H896V896zm256 0h128v128h-128V896zM896 768H768V640h128v128zm256 0h-128V640h128v128zm256 0h-128V640h128v128zm128-128h128v128h-128V640z"
                    }))
                }

                function Ae(e) {
                    return a.createElement("svg", {
                        className: e,
                        xmlns: "https://www.w3.org/2000/svg",
                        viewBox: "0 0 2048 2048",
                        width: "16",
                        height: "16"
                    }, a.createElement("path", {
                        d: "M1184 0q100 0 187 37t153 103 102 152 38 188v864q0 97-25 187t-71 168-110 143-142 110-169 71-187 25q-97 0-187-25t-168-71-143-110-110-142-71-169-25-187V480q0-100 37-187t103-153T548 38 736 0h448zm352 480q0-73-27-137t-76-112-112-75-137-28h-160v640H896V128H736q-73 0-137 27t-112 76-75 112-28 137v864q0 119 45 224t124 183 183 123 224 46q119 0 224-45t183-124 123-183 46-224V480z"
                    }))
                }

                function Fe(e) {
                    return a.createElement("svg", {
                        className: e,
                        xmlns: "https://www.w3.org/2000/svg",
                        viewBox: "0 0 2048 2048",
                        width: "16",
                        height: "16"
                    }, a.createElement("path", {
                        d: "M1728 480q17 14 31 31t26 38q35 68 64 139t59 142q37 92 70 186t52 193q8 44 13 88t5 89q0 59-13 115t-45 107q-15 22-37 44t-48 39-56 28-57 11q-31 0-69-27t-77-64-71-76-54-62q-22-25-46-55t-52-49l-24-17q-20-14-42-21t-46-10-48-3-47-1H785q-24 0-47 4t-46 10-43 21l-24 17q-27 20-51 49t-47 55q-21 23-54 62t-71 76-76 64-70 27q-28 0-57-11t-55-28-49-39-37-44q-32-51-45-107T0 1386q0-45 5-89t13-88q8-46 23-100t36-114 43-120 48-119 49-110 46-96q11-20 25-37t32-33v-25q0-12 2-22t9-20 20-18q11-7 35-15t52-17 54-15 40-10q38-8 77-12t77-4q15 0 33 1t33 9h1q23 12 45 25t45 26h362q23-13 40-24t34-19 36-13 47-5q38 0 77 4t77 12q14 3 40 9t53 15 52 17 36 16q25 17 28 37t3 48zm69 1120q36-10 60-32t38-51 19-63 6-67q0-39-4-78t-12-78q-20-106-58-208t-80-202q-23-54-45-108t-50-106q-8-15-20-23t-23-18-20-20-8-32v-20q-57-20-115-32t-119-12h-11q-6 0-11 1-38 22-57 34t-37 18-38 7-61 1H897q-40 0-61-1t-38-7-37-18-57-34q-5-1-11-1t-11 0q-60 0-118 12t-116 32q0 28-5 44t-30 33q-11 6-20 15t-16 21q-28 51-50 105t-45 109q-41 99-79 201t-59 209q-8 38-12 77t-4 79q0 33 5 66t20 63 37 51 60 33q15-9 40-32t52-52 51-56 38-44q10-11 26-30t35-38 35-36 31-25q5-3 9-6t9-6q28-21 59-32t63-17 66-7 68-2h384q34 0 67 1t66 7 64 17 59 33q5 3 9 6t9 6q13 8 30 24t36 36 34 39 27 30q15 17 38 44t49 54 51 51 42 35zm-773-960q26 0 45 19t19 45q0 26-19 45t-45 19q-26 0-45-19t-19-45q0-26 19-45t45-19z"
                    }))
                }

                function Be() {
                    return (Be = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = arguments[t];
                            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function qe(e) {
                    e.stopPropagation()
                }
                class je extends _.Z {
                    constructor(...e) {
                        super(...e), this.handledProps = {
                            managedClasses: void 0
                        }, this.inputRefMap = new Map([
                            ["keyboard", a.createRef()],
                            ["mouse", a.createRef()],
                            ["touch", a.createRef()],
                            ["controller", a.createRef()]
                        ]), this.state = {
                            selectedInput: Q() ? "touch" : "keyboard"
                        }, this.renderHowToPlayContent = () => a.createElement(a.Fragment, null, a.createElement(V.nv, {
                            className: this.props.managedClasses.howToPlayModal_paragraph
                        }, a.createElement("strong", null, q.p.getString("endlessModeTitleInline")), " ", q.p.getString("howToPlayEndless")), a.createElement(V.nv, {
                            className: this.props.managedClasses.howToPlayModal_paragraph
                        }, a.createElement("strong", null, q.p.getString("timetrialModeTitleInline")), " ", q.p.getString("howToPlayTimeTrial")), a.createElement(V.nv, {
                            className: this.props.managedClasses.howToPlayModal_paragraph
                        }, a.createElement("strong", null, q.p.getString("zigzagModeTitleInline")), " ", q.p.getString("howToPlayZigZag")), this.renderInputSection()), this.onInputIconKeydown = e => {
                            let t = this.state.selectedInput;
                            if (e.keyCode === Oe.mW.arrowLeft || e.keyCode === Oe.mW.arrowUp) switch (this.state.selectedInput) {
                                case "keyboard":
                                    return;
                                case "mouse":
                                    t = "keyboard";
                                    break;
                                case "touch":
                                    t = "mouse";
                                    break;
                                case "controller":
                                    t = "touch"
                            } else {
                                if (e.keyCode !== Oe.mW.arrowRight && e.keyCode !== Oe.mW.arrowDown) return;
                                switch (this.state.selectedInput) {
                                    case "keyboard":
                                        t = "mouse";
                                        break;
                                    case "mouse":
                                        t = "touch";
                                        break;
                                    case "touch":
                                        t = "controller";
                                        break;
                                    case "controller":
                                        return
                                }
                            }
                            e.stopPropagation(), this.setState({
                                selectedInput: t
                            })
                        }
                    }
                    render() {
                        return a.createElement(ze.S, Be({}, this.unhandledProps(), {
                            onKeyDown: qe,
                            content: this.renderHowToPlayContent
                        }))
                    }
                    componentDidUpdate(e, t) {
                        if (t.selectedInput !== this.state.selectedInput) {
                            const e = this.inputRefMap.get(this.state.selectedInput);
                            if (e.current) {
                                const t = (0, i.findDOMNode)(e.current);
                                t && "function" == typeof t.focus && t.focus()
                            }
                        }
                    }
                    renderInputSection() {
                        return a.createElement("div", null, this.renderInputIcons(), this.getInputDescription(this.state.selectedInput))
                    }
                    getInputDescription(e) {
                        const t = this.props.managedClasses.howToPlayModal_icon,
                            s = this.props.managedClasses.howToPlayModal_iconContainer,
                            i = this.props.managedClasses.howToPlayModal_listItem;
                        let o, n, r;
                        switch (e) {
                            case "touch":
                                o = "howToPlayTouchMovement", n = "howToPlayTouchBoost", r = "howToPlayTouchRefresh";
                                break;
                            case "mouse":
                                o = "howToPlayMouseMovement", n = "howToPlayMouseBoost", r = "howToPlayMouseRefresh";
                                break;
                            case "controller":
                                o = "howToPlayControllerMovement", n = "howToPlayControllerBoost", r = "howToPlayControllerRefresh";
                                break;
                            default:
                            case "keyboard":
                                o = "howToPlayKeyboardMovement", n = "howToPlayKeyboardBoost", r = "howToPlayKeyboardRefresh"
                        }
                        return a.createElement("ul", {
                            className: this.props.managedClasses.howToPlayModal_bulletedList
                        }, a.createElement("li", {
                            className: i
                        }, a.createElement("div", {
                            "aria-hidden": !0,
                            className: s
                        }, (l = t, a.createElement("svg", {
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            className: l
                        }, a.createElement("path", {
                            d: "M7.15 4.35c.2.2.5.2.7 0L9.5 2.71V6.5a.5.5 0 001 0V2.7l1.65 1.65a.5.5 0 00.7-.7l-2.5-2.5a.5.5 0 00-.7 0l-2.5 2.5a.5.5 0 000 .7z"
                        }), a.createElement("path", {
                            d: "M4.35 7.85a.5.5 0 10-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L2.71 10.5H6.5a.5.5 0 000-1H2.7l1.65-1.65z"
                        }), a.createElement("path", {
                            d: "M15.65 7.85a.5.5 0 01.7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7-.7l1.64-1.65H13.5a.5.5 0 010-1h3.8l-1.65-1.65z"
                        }), a.createElement("path", {
                            d: "M7.85 15.65a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7l-1.65 1.64V13.5a.5.5 0 00-1 0v3.8l-1.65-1.65z"
                        })))), q.p.getString(o)), a.createElement("li", {
                            className: i
                        }, a.createElement("div", {
                            "aria-hidden": !0,
                            className: s
                        }, function(e) {
                            return a.createElement("svg", {
                                width: "28",
                                height: "28",
                                viewBox: "0 0 28 28",
                                className: e,
                                xmlns: "http://www.w3.org/2000/svg"
                            }, a.createElement("path", {
                                d: "M9.28568 2.52142C9.38509 2.21078 9.67385 2 10 2H18.75C18.998 2 19.23 2.12264 19.3697 2.32761C19.5094 2.53258 19.5388 2.79337 19.4481 3.02424L17.1004 8.99999H22.25C22.5476 8.99999 22.8171 9.17598 22.9367 9.44849C23.0564 9.72101 23.0035 10.0385 22.8021 10.2576L8.55213 25.7576C8.32001 26.0101 7.94619 26.0729 7.64426 25.9102C7.34233 25.7476 7.18921 25.4008 7.2724 25.0681L9.53942 16H6C5.76052 16 5.53543 15.8856 5.39423 15.6922C5.25303 15.4987 5.2127 15.2495 5.28569 15.0214L9.28568 2.52142Z"
                            }))
                        }(t)), q.p.getString(n)), a.createElement("li", {
                            className: i
                        }, a.createElement("div", {
                            "aria-hidden": !0,
                            className: s
                        }, function(e) {
                            return a.createElement("svg", {
                                width: 20,
                                height: 20,
                                viewBox: "0 0 20 20",
                                className: e
                            }, a.createElement("path", {
                                d: "M3.07 9.05a7 7 0 0112.55-3.22l.13.17H12.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v2.2a8 8 0 101.99 4.77.5.5 0 00-1 .08 7 7 0 11-13.92-.5z"
                            }))
                        }(t)), q.p.getString(r)));
                        var l
                    }
                    renderInputIcons() {
                        const e = (Q() ? [
                            [Re, "touch"]
                        ] : [
                            [Ne, "keyboard"],
                            [Ae, "mouse"],
                            [Re, "touch"],
                            [Fe, "controller"]
                        ]).map((e => {
                            const t = e[0],
                                s = e[1],
                                i = this.state.selectedInput === s;
                            let o = this.props.managedClasses.howToPlayModal_inputButton;
                            return i && (o += ` ${this.props.managedClasses.howToPlayModal_inputButton__selected}`), a.createElement(S.XC, {
                                role: "radio",
                                key: s,
                                innerRef: this.inputRefMap.get(s),
                                onClick: () => this.setState({
                                    selectedInput: s
                                }),
                                onKeyDown: this.onInputIconKeydown,
                                className: o,
                                "aria-checked": i,
                                tabIndex: i ? 0 : -1
                            }, t(""))
                        }));
                        return a.createElement("div", {
                            className: this.props.managedClasses.howToPlayModal_inputButtonGroup,
                            role: "radiogroup"
                        }, e)
                    }
                }
                var Ge = s(53363),
                    Ke = s(58934);
                const Ue = {
                        howToPlayModal: {},
                        howToPlayModal_bulletedList: {
                            listStyle: "none",
                            color: b.CH
                        },
                        howToPlayModal_listItem: {
                            ...(0, Ge.Sh)("t7"),
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "0.25em"
                        },
                        howToPlayModal_icon: {
                            color: b.CH,
                            fill: "currentColor",
                            padding: "4px",
                            height: "16px",
                            width: "16px"
                        },
                        howToPlayModal_iconContainer: {
                            marginInlineEnd: "12px",
                            display: "inline-block"
                        },
                        howToPlayModal_inputButton: {},
                        howToPlayModal_inputButton__selected: {
                            backgroundColor: Ke.Ob
                        },
                        howToPlayModal_inputButtonGroup: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "12px",
                            marginBottom: "8px"
                        },
                        howToPlayModal_paragraph: {
                            marginBottom: "0.5em"
                        }
                    },
                    We = (0, d.ZP)(Ue)(je);

                function $e() {
                    return ($e = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = arguments[t];
                            for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function Xe(e) {
                    e.stopPropagation()
                }
                const Ye = "#38c2ee",
                    Je = {
                        ...l.fn,
                        neutralPalette: (0, R.D)((0, O.in)(Ye))
                    },
                    Qe = "toggleSettingsMenu";
                class et extends _.Z {
                    constructor(e) {
                        super(e), this.handledProps = {
                            setModal: void 0,
                            dispatch: void 0,
                            currentCharacter: void 0,
                            gameState: void 0,
                            highVisibilityMode: void 0,
                            gameSpeed: void 0,
                            mode: void 0,
                            theme: void 0,
                            endless_bestScore: void 0,
                            timetrial_bestScore: void 0,
                            zigzag_bestScore: void 0
                        }, this.buttonRef = a.createRef(), this.onHighVisiblityModeChange = () => {
                            const e = !this.props.highVisibilityMode;
                            ce.saveHighVisibilityMode(e), this.props.dispatch(ne({
                                ...he.getState(),
                                highVisibilityMode: e
                            })), se.sys.session.settings.hitbox = e, _e.sys.render()
                        }, this.onReducedSpeedModeChange = () => {
                            const e = this.props.gameSpeed === ie ? .5 : ie;
                            ce.saveReducedSpeedMode(e !== ie), this.props.dispatch(ne({
                                ...he.getState(),
                                gameSpeed: e
                            }))
                        }, this.onGameModeChange = e => {
                            this.props.dispatch(ne({
                                ...he.getState(),
                                mode: e
                            })), _e.sys.changeGameState(ee.Menu), _e.sys.updateMode(), ce.saveGameMode(e)
                        }, this.onThemeChange = e => {
                            this.props.dispatch(ne({
                                ...he.getState(),
                                theme: e
                            })), _e.sys.updateTheme(e, t = !0), ce.saveDefaultTheme(e)
                        }, this.onNewGameClick = () => {
                            _e.sys.changeGameState(ee.Menu)
                        }, this.copyShareLinkToClipboard = () => {
                            Y(q.p.getString("shareLinkFlyout")), this.setState({
                                shareLinkCopied: !0
                            })
                        }, this.onHamburgerMenuClick = e => {
                            "function" == typeof this.props.onClick && this.props.onClick(e), this.toggleSettingsMenu()
                        }, this.toggleSettingsMenu = () => {
                            this.state.menuOpen || this.props.gameState !== ee.Play || _e.sys.changeGameState(ee.Pause), this.setState({
                                menuOpen: !this.state.menuOpen,
                                shareLinkCopied: !1
                            }), se.sys.session.flyoutActive = !se.sys.session.flyoutActive
                        }, this.dismissMenu = () => {
                            this.setState({
                                menuOpen: !1,
                                shareLinkCopied: !1
                            }), se.sys.session.flyoutActive = !1
                        }, this.closeModal = () => {
                            this.props.setModal(null)
                        }, this.openHowToPlayModal = () => {
                            this.props.setModal(a.createElement(We, {
                                onClick: Xe,
                                label: q.p.getString("howToPlayDialogTitle"),
                                accept: this.closeModal,
                                acceptMessage: q.p.getString("close"),
                                dismiss: this.closeModal,
                                closeButtonToolTip: q.p.getString("close")
                            }))
                        }, this.startShare = () => {
                            ce.startShare(q.p.getString("highScoreShareTitle"), q.p.getString("highScoreShareSubtitle"), q.p.getString("highScoreNotification"), q.p.getString("shareLinkGameOver"))
                        }, this.openGameCreditsModal = () => {
                            this.props.setModal(a.createElement(ze.S, {
                                onClick: Xe,
                                label: q.p.getString("gameCreditsDialogTitle"),
                                accept: this.closeModal,
                                acceptMessage: q.p.getString("close"),
                                dismiss: this.closeModal,
                                closeButtonToolTip: q.p.getString("close"),
                                content: this.getGameCreditsModalBody
                            }))
                        }, this.getGameCreditsModalBody = () => a.createElement(a.Fragment, null, a.createElement(V.nv, null, "Parker Young, Scott Porterfield, Patrick Evan Little, Connor Smith, William Devereux, Adina Shanholtz, Ray Rivers, 陈嘉钰, 傅远, 胡雨阳, 郑俊豪"), a.createElement(x.X6, {
                            className: this.props.managedClasses.settingsHamburgerMenu_creditsTable_specialThanks,
                            size: M.Gm._7,
                            tag: M.lb.h3
                        }, q.p.getString("specialThanks")), a.createElement(V.nv, null, "Jonathan Merrin, Charles Duval, Addison Kaufmann, Rachel Weil, Joseph Oak, Amanda Velasco Gallardo, Ramya Challa, Chris Pirih")), this.confirmResetStats = () => {
                            this.props.setModal(a.createElement(N.Z, {
                                title: q.p.getString("resetAllStatsDialogTitle"),
                                closeButtonTooltip: q.p.getString("close"),
                                dialogText: q.p.getString("resetAllStatsDialogText"),
                                confirmText: q.p.getString("resetAllStats"),
                                rejectText: q.p.getString("cancel"),
                                handleConfirm: this.resetStats,
                                handleReject: this.closeModal,
                                onClick: Xe
                            }))
                        }, this.resetStats = () => {
                            this.props.dispatch(re()), ce.resetAllStats(), ve.sys.refreshDisplay(), this.closeModal()
                        }, this.state = {
                            menuOpen: !1,
                            shareLinkCopied: !1
                        }
                    }
                    componentDidMount() {
                        document.addEventListener(Qe, this.toggleSettingsMenu)
                    }
                    componentWillUnmount() {
                        document.removeEventListener(Qe, this.toggleSettingsMenu)
                    }
                    render() {
                        return a.createElement(a.Fragment, null, a.createElement(n.h, {
                            designSystem: Je
                        }, a.createElement(v.ZP, {
                            value: Ye,
                            tag: null,
                            drawBackground: !1
                        }, a.createElement(S.XC, $e({}, this.unhandledProps(), {
                            ref: this.buttonRef,
                            onClick: this.onHamburgerMenuClick,
                            className: (0, z.A)(this.props.managedClasses.settingsHamburgerMenu)
                        }), (e = this.props.managedClasses.settingsHamburgerMenu_settingsButton, a.createElement("svg", {
                            width: 24,
                            height: 24,
                            viewBox: "0 0 24 24",
                            className: e,
                            xmlns: "http://www.w3.org/2000/svg"
                        }, a.createElement("path", {
                            d: "M12.0124 2.25C12.7464 2.25846 13.4775 2.34326 14.1939 2.50304C14.5067 2.57279 14.7406 2.83351 14.7761 3.15196L14.9463 4.67881C15.0233 5.37986 15.6152 5.91084 16.3209 5.91158C16.5105 5.91188 16.6982 5.87238 16.8734 5.79483L18.2741 5.17956C18.5654 5.05159 18.9057 5.12136 19.1232 5.35362C20.1354 6.43464 20.8892 7.73115 21.3279 9.14558C21.4225 9.45058 21.3137 9.78203 21.0566 9.9715L19.8151 10.8866C19.461 11.1468 19.2518 11.56 19.2518 11.9995C19.2518 12.4389 19.461 12.8521 19.8159 13.1129L21.0585 14.0283C21.3156 14.2177 21.4246 14.5492 21.3299 14.8543C20.8914 16.2685 20.138 17.5649 19.1264 18.6461C18.9091 18.8783 18.569 18.9483 18.2777 18.8206L16.8714 18.2045C16.4691 18.0284 16.007 18.0542 15.6268 18.274C15.2466 18.4937 14.9935 18.8812 14.9452 19.3177L14.7761 20.8444C14.7413 21.1592 14.5124 21.4182 14.2043 21.4915C12.7558 21.8361 11.2467 21.8361 9.79828 21.4915C9.49015 21.4182 9.26129 21.1592 9.22643 20.8444L9.0576 19.32C9.00802 18.8843 8.75459 18.498 8.37467 18.279C7.99475 18.06 7.53345 18.0343 7.13244 18.2094L5.72582 18.8256C5.43446 18.9533 5.09428 18.8833 4.87703 18.6509C3.86487 17.5685 3.11144 16.2705 2.67344 14.8548C2.57911 14.5499 2.68811 14.2186 2.94509 14.0293L4.18842 13.1133C4.54256 12.8531 4.75172 12.4399 4.75172 12.0005C4.75172 11.561 4.54256 11.1478 4.18796 10.8873L2.94541 9.97285C2.68804 9.78345 2.57894 9.45178 2.67361 9.14658C3.11236 7.73215 3.86619 6.43564 4.87837 5.35462C5.09584 5.12236 5.43618 5.05259 5.72749 5.18056L7.12786 5.79572C7.53081 5.97256 7.99404 5.94585 8.37601 5.72269C8.75633 5.50209 9.00953 5.11422 9.05841 4.67764L9.22849 3.15196C9.26401 2.83335 9.49811 2.57254 9.81105 2.50294C10.5283 2.34342 11.2602 2.25865 12.0124 2.25ZM11.9999 8.99995C10.3431 8.99995 8.99994 10.3431 8.99994 12C8.99994 13.6568 10.3431 15 11.9999 15C13.6568 15 14.9999 13.6568 14.9999 12C14.9999 10.3431 13.6568 8.99995 11.9999 8.99995Z"
                        })))))), this.renderMenu());
                        var e
                    }
                    getHighScoreString() {
                        return q.p.getStringF("bestScoreMenuDisplay", se.sys.getHighScore(se.sys.session.settings.mode), q.p.getString(se.sys.session.settings.mode + "Unit"))
                    }
                    renderMenu() {
                        const e = this.getHighScoreString();
                        return a.createElement(C.zg, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout,
                            width: "280px",
                            height: "fit-content",
                            defaultVerticalPosition: k._k.bottom,
                            defaultHorizontalPosition: k.xN.left,
                            verticalPositioningMode: k.Lc.adjacent,
                            visible: this.state.menuOpen,
                            anchor: this.buttonRef,
                            onDismiss: this.dismissMenu,
                            onClick: Xe
                        }, this.renderCloseButton(), a.createElement(Z.Of, {
                            jssStyleSheet: f,
                            onClick: this.onNewGameClick
                        }, q.p.getString("newGame")), 
                        
                         // (A) Insert new Support button here if you want
                        
                        a.createElement(T.iz, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                        }), this.renderThemePicker(), a.createElement(T.iz, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                        }), this.renderGameModePicker(), a.createElement(V.nv, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_score
                        }, (t = this.props.managedClasses.settingsHamburgerMenu_flyout_scoreStar, a.createElement("svg", {
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            className: t
                        }, a.createElement("path", {
                            d: "M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.13 3.05.74 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
                        }))), q.p.getStringF("bestScoreFlyout", e)), a.createElement(T.iz, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                        }), this.renderShareSection(), this.renderStartShare(), a.createElement(T.iz, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                        }), this.renderToggleSection(), a.createElement(T.iz, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_divider
                        }), this.renderButtonSection());
                        var t
                    }
                    renderCloseButton() {
                        return a.createElement(S.XC, {
                            className: this.props.managedClasses.settingsHamburgerMenu_closeButton,
                            title: q.p.getString("close"),
                            onClick: this.dismissMenu
                        }, (0, A.p)(this.props.managedClasses.settingsHamburgerMenu_closeButton_icon))
                    }
                    renderThemePicker() {
                        const e = q.p.getString("surfTheme"),
                            t = q.p.getString("skiTheme"),
                            i = this.props.theme,
                            o = this.props.gameState === Q.Play;
                        return a.createElement(a.Fragment, null, a.createElement(P.__, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_label
                        }, q.p.getString("themeSelectLabel")), a.createElement(E.Ph, {
                            jssStyleSheet: u.O0,
                            menu: u.gj,
                            onValueChange: this.onThemeChange,
                            selectedItems: [i],
                            disabled: o
                        }, a.createElement(I.$m, {
                            id: "surf",
                            value: "surf",
                            displayString: e
                        }), a.createElement(I.$m, {
                            id: "ski",
                            value: "ski",
                            displayString: t
                        })))
                    }
                    renderGameModePicker() {
                        const e = q.p.getString("zigzagTitle"),
                            t = q.p.getString("endlessTitle"),
                            s = q.p.getString("timetrialTitle"),
                            i = this.props.mode,
                            o = this.props.gameState === ee.Pause || this.props.gameState === ee.Play;
                        return a.createElement(a.Fragment, null, a.createElement(P.__, {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_label
                        }, o ? q.p.getString("gameModeSelectLabelDisabled") : q.p.getString("gameModeSelectLabel")), a.createElement(E.Ph, {
                            jssStyleSheet: u.O0,
                            menu: u.gj,
                            onValueChange: this.onGameModeChange,
                            selectedItems: [i],
                            disabled: o
                        }, a.createElement(I.$m, {
                            id: G.Endless,
                            value: G.Endless,
                            displayString: t
                        }), a.createElement(I.$m, {
                            id: G.TimeTrial,
                            value: G.TimeTrial,
                            displayString: s
                        }), a.createElement(I.$m, {
                            id: G.ZigZag,
                            value: G.ZigZag,
                            displayString: e
                        })))
                    }
                    renderToggleSection() {
                        const e = q.p.getString("on"),
                            t = q.p.getString("off");
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_toggleRow
                        }, a.createElement(P.__, {
                            htmlFor: "highVisibilityMode"
                        }, q.p.getString("highVisiblityModeToggleLabel")), a.createElement(L.ZD, {
                            jssStyleSheet: y,
                            inputId: "highVisibilityMode",
                            selectedMessage: e,
                            unselectedMessage: t,
                            selected: this.props.highVisibilityMode,
                            onChange: this.onHighVisiblityModeChange
                        })), a.createElement("div", {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_toggleRow
                        }, a.createElement(P.__, {
                            htmlFor: "reducedSpeedMode"
                        }, q.p.getString("reducedSpeedModeToggleLabel")), a.createElement(L.ZD, {
                            jssStyleSheet: y,
                            inputId: "reducedSpeedMode",
                            defaultChecked: !0,
                            selectedMessage: e,
                            unselectedMessage: t,
                            selected: this.props.gameSpeed !== ie,
                            onChange: this.onReducedSpeedModeChange
                        })))
                    }
                    renderShareSection() {
                        return a.createElement(a.Fragment, null, a.createElement("div", {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_shareRow
                        }, a.createElement(P.__, {
                            htmlFor: "shareButton"
                        }, q.p.getString("share")), a.createElement(D.ER, {
                            id: "shareButton",
                            jssStyleSheet: w,
                            onClick: this.copyShareLinkToClipboard,
                            beforeContent: this.state.shareLinkCopied ? F : B
                        }, this.state.shareLinkCopied ? q.p.getString("shareLinkCopied") : q.p.getString("shareCopy"))))
                    }
                    renderStartShare() {
                        return q.p.getBoolean("isDebugMode") && Q() ? a.createElement("div", null, a.createElement(Z.Of, {
                            jssStyleSheet: w,
                            onClick: this.startShare
                        }, q.p.getString("startShare"))) : a.createElement(a.Fragment, null)
                    }
                    renderButtonSection() { 
                        return a.createElement("div", {
                            className: this.props.managedClasses.settingsHamburgerMenu_flyout_buttonSection
                        }, 
                            a.createElement(Z.Of, {
                                jssStyleSheet: w,
                                onClick: this.openHowToPlayModal
                            }, q.p.getString("howToPlayButton")), 
                            a.createElement(Z.Of, {
                                jssStyleSheet: w,
                                onClick: this.openGameCreditsModal
                            }, q.p.getString("gameCreditsButton")), 
                            a.createElement(Z.Of, {
                                jssStyleSheet: w,
                                onClick: this.confirmResetStats
                            }, q.p.getString("resetAllStats")),
                            
                            // 1) Here's the new button:
                            a.createElement(Z.Of, {
                                jssStyleSheet: w,
                                onClick: () => {
                                    // Open your donor link in a new tab.
                                    window.open("https://donorbox.org/w8zrd", "_blank");
                                }
                            }, "Support Us")
                        );
                    }
                    
                }
                const tt = (0, o.$j)((function(e) {
                    return e
                }))((0, d.ZP)(H)(et));

                function st() {
                    const [e, t] = a.useState(null);
                    return a.createElement(a.Fragment, null, a.createElement(tt, {
                        setModal: t
                    }), a.createElement(r.f, {
                        modal: e,
                        rootElement: document.getElementById("modal-root")
                    }))
                }
                window.addEventListener("beforeunload", (() => {
                    ce.recordUnload()
                })), window.addEventListener("pagehide", (() => {
                    ce.recordUnload()
                })), window.addEventListener("blur", (() => {
                    ce.recordUnload()
                })), async function() {
                    const e = await ce.getAllStats();
                    he.dispatch(ne({
                                zigzag_bestScore: e.zigzag_bestScore,
                                endless_bestScore: e.endless_bestScore,
                                highVisibilityMode: e.highVisibilityMode,
                                currentCharacter: e.currentCharacter,
                                timetrial_bestScore: e.timetrial_bestScore < 0 ? -1 : e.timetrial_bestScore / 1e3,
                                gameSpeed: e.reducedSpeedMode ? .5 : ie,
                                mode: e.mode,
                                theme: e.theme
                            }))
                }().then((() => {
                    (0, c.s)(Error),
                    function() {
                        const e = new _e;
                        let t = window.performance.now();
                        const s = () => {
                            requestAnimationFrame(s);
                            const i = window.performance.now() - t;
                            e.gameLoop(i), t = window.performance.now()
                        };
                        requestAnimationFrame(s),
                            function(e, t) {
                                let s;
                                window.addEventListener("resize", (function() {
                                    void 0 !== s && (clearTimeout(s), s = void 0), s = window.setTimeout((function() {
                                        s = void 0, e()
                                    }), t)
                                }))
                            }((function() {
                                e.reflowCanvas()
                            }), 10), document.addEventListener("visibilitychange", (function() {
                                e.reflowCanvas()
                            }))
                    }(),
                    function() {
                        const e = document.getElementById("hamburger-container");
                        e.style.zIndex = h._p.CONTEXT_MENU.toString(), i.render(a.createElement(o.zt, {
                            store: he
                        }, a.createElement(n.h, {
                            designSystem: l.fn
                        }, a.createElement(st, null))), e)
                    }()
                }))
            },
            81164: (e, t, s) => {
                s.d(t, {
                    C: () => h
                });
                var i, a = s(11754),
                    o = s(37834),
                    n = s(89526),
                    r = s(12468);
                ! function(e) {
                    e.a = "a", e.button = "button"
                }(i || (i = {}));
                class l extends a.Z {
                    constructor() {
                        super(...arguments), this.handledProps = {
                            disabled: void 0,
                            href: void 0,
                            managedClasses: void 0
                        }
                    }
                    render() {
                        return n.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
                            className: this.generateClassNames(),
                            href: this.props.href || null
                        }, this.renderDisabledAttribute()), this.props.children)
                    }
                    generateClassNames() {
                        const {
                            button: e,
                            button__disabled: t
                        } = this.props.managedClasses;
                        return super.generateClassNames((0, o.A)(e, [t, this.props.disabled]))
                    }
                    renderDisabledAttribute() {
                        if (!0 === this.props.disabled) return this.tag === i.a ? {
                            "aria-disabled": !0
                        } : {
                            disabled: !0
                        }
                    }
                    get tag() {
                        return "string" == typeof this.props.href ? i.a : i.button
                    }
                }
                l.displayName = `${r.k}Button`, l.defaultProps = {
                    managedClasses: {}
                };
                const h = l
            },
            65173: (e, t, s) => {
                s.d(t, {
                    ZP: () => i
                });
                const i = s(81164).C
            },
            81545: (e, t, s) => {
                s.d(t, {
                    Z: () => g
                });
                var i = s(11754),
                    a = s(86577),
                    o = s(33832),
                    n = s(37834),
                    r = s(9453),
                    l = s(64829),
                    h = s(64702),
                    c = s(89526),
                    d = s(29418),
                    p = s(12468);
                class b extends i.Z {
                    constructor() {
                        super(...arguments), this.handledProps = {
                            describedBy: void 0,
                            label: void 0,
                            labelledBy: void 0,
                            contentWidth: void 0,
                            contentHeight: void 0,
                            modal: void 0,
                            managedClasses: void 0,
                            onDismiss: void 0,
                            visible: void 0,
                            focusTargetOnClose: void 0
                        }, this.rootElement = c.createRef(), this.shouldAddKeyListener = e => !(!e.modal && !e.onDismiss), this.handleDocumentKeyDown = e => {
                            if (!e.defaultPrevented && this.props.visible) switch (e.keyCode) {
                                case o.Lp:
                                    this.checkForSoftDismiss(e);
                                    break;
                                case o.RN:
                                    this.handleTabKeyDown(e)
                            }
                        }, this.checkForSoftDismiss = e => {
                            this.props.onDismiss && "function" == typeof this.props.onDismiss && this.props.visible && this.props.onDismiss(e)
                        }, this.handleTabKeyDown = e => {
                            if (!this.props.modal) return;
                            const t = (0, d.ht)(this.rootElement.current),
                                s = t.length;
                            if (0 === s) return this.tryFocusOnRootElement(), void e.preventDefault();
                            e.shiftKey && e.target === t[0] ? (t[s - 1].focus(), e.preventDefault()) : e.shiftKey || e.target !== t[s - 1] || (t[0].focus(), e.preventDefault())
                        }, this.handleDocumentFocus = e => {
                            !e.defaultPrevented && this.shouldForceFocus(e.target) && (this.focusOnFirstElement(), e.preventDefault())
                        }, this.shouldForceFocus = e => this.props.visible && this.rootElement.current instanceof HTMLElement && !this.rootElement.current.contains(e), this.focusOnFirstElement = () => {
                            if ((0, r.N)() && this.rootElement.current instanceof HTMLElement) {
                                const e = (0, d.ht)(this.rootElement.current);
                                0 === e.length ? this.tryFocusOnRootElement() : e[0].focus()
                            }
                        }, this.tryFocusOnRootElement = () => {
                            this.rootElement.current instanceof HTMLElement && this.rootElement.current.focus()
                        }, this.invokeFocusOnCloseTarget = () => {
                            if ((0, l.Z)(this.props.focusTargetOnClose)) return;
                            if ((0, h.Z)(this.props.focusTargetOnClose)) return void this.props.focusTargetOnClose();
                            const e = (0, a.x)(this.props.focusTargetOnClose);
                            e instanceof HTMLElement && e.focus()
                        }
                    }
                    render() {
                        const {
                            dialog_positioningRegion: e,
                            dialog_contentRegion: t
                        } = this.props.managedClasses;
                        return c.createElement("div", Object.assign({
                            ref: this.rootElement
                        }, this.unhandledProps(), {
                            className: this.generateClassNames(),
                            "aria-hidden": !this.props.visible
                        }), c.createElement("div", {
                            className: (0, n.A)(e)
                        }, this.renderModalOverlay(), c.createElement("div", {
                            role: "dialog",
                            "aria-modal": this.props.modal,
                            tabIndex: -1,
                            className: (0, n.A)(t),
                            style: {
                                height: this.props.contentHeight,
                                width: this.props.contentWidth
                            },
                            "aria-describedby": this.props.describedBy,
                            "aria-labelledby": this.props.labelledBy,
                            "aria-label": this.props.label
                        }, this.props.children)))
                    }
                    componentDidMount() {
                        (0, r.N)() && (this.shouldAddKeyListener(this.props) && document.addEventListener("keydown", this.handleDocumentKeyDown), this.props.modal && (document.addEventListener("focusin", this.handleDocumentFocus), this.shouldForceFocus(document.activeElement) && this.focusOnFirstElement()))
                    }
                    componentDidUpdate(e) {
                        (0, r.N)() && (!e.modal && this.props.modal ? (document.addEventListener("focusin", this.handleDocumentFocus), this.focusOnFirstElement()) : e.modal && !this.props.modal && document.removeEventListener("focusin", this.handleDocumentFocus), !this.shouldAddKeyListener(e) && this.shouldAddKeyListener(this.props) ? document.addEventListener("keydown", this.handleDocumentKeyDown) : this.shouldAddKeyListener(e) && !this.shouldAddKeyListener(this.props) && document.removeEventListener("keydown", this.handleDocumentKeyDown))
                    }
                    componentWillUnmount() {
                        (0, r.N)() && (this.shouldAddKeyListener(this.props) && document.removeEventListener("keydown", this.handleDocumentKeyDown), this.props.modal && document.removeEventListener("focusin", this.handleDocumentFocus), this.invokeFocusOnCloseTarget())
                    }
                    generateClassNames() {
                        return super.generateClassNames((0, n.A)(this.props.managedClasses.dialog))
                    }
                    renderModalOverlay() {
                        if (this.props.modal) return c.createElement("div", {
                            className: (0, n.A)(this.props.managedClasses.dialog_modalOverlay),
                            onClick: this.checkForSoftDismiss,
                            onTouchStart: this.checkForSoftDismiss,
                            role: "presentation",
                            tabIndex: -1,
                            style: {
                                touchAction: "none"
                            }
                        })
                    }
                }
                b.defaultProps = {
                    contentHeight: "480px",
                    contentWidth: "640px",
                    visible: !1,
                    managedClasses: {}
                }, b.displayName = `${p.k}Dialog`;
                const g = b
            },
            46076: (e, t, s) => {
                s.d(t, {
                    ZP: () => i
                });
                const i = s(81545).Z
            },
            81047: (e, t, s) => {
                var i;
                s.d(t, {
                        Q: () => i
                    }),
                    function(e) {
                        e.presentation = "presentation", e.separator = "separator"
                    }(i || (i = {}))
            },
            35203: (e, t, s) => {
                s.d(t, {
                    ZP: () => h
                });
                var i = s(11754),
                    a = s(37834),
                    o = s(89526),
                    n = s(12468),
                    r = s(81047);
                class l extends i.Z {
                    constructor() {
                        super(...arguments), this.handledProps = {
                            managedClasses: void 0,
                            role: void 0
                        }
                    }
                    render() {
                        return o.createElement("hr", Object.assign({}, this.unhandledProps(), this.generateAttributes(), {
                            className: this.generateClassNames()
                        }))
                    }
                    generateAttributes() {
                        if (this.props.role && this.props.role !== r.Q.separator) return {
                            role: r.Q[this.props.role]
                        }
                    }
                    generateClassNames() {
                        return super.generateClassNames((0, a.A)(this.props.managedClasses.divider))
                    }
                }
                l.displayName = `${n.k}Divider`, l.defaultProps = {
                    managedClasses: {}
                };
                const h = l
            },
            67483: (e, t, s) => {
                s.d(t, {
                    ZP: () => c
                });
                var i, a = s(11754),
                    o = s(37834),
                    n = s(57872),
                    r = s(89526),
                    l = s(12468);
                ! function(e) {
                    e.label = "label", e.legend = "legend"
                }(i || (i = {}));
                class h extends a.Z {
                    constructor() {
                        super(...arguments), this.handledProps = {
                            hidden: void 0,
                            managedClasses: void 0,
                            tag: void 0
                        }
                    }
                    get tag() {
                        return (0, n.Z)(i[this.props.tag]) ? i.label : i[this.props.tag]
                    }
                    render() {
                        return r.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
                            className: this.generateClassNames()
                        }), this.props.children)
                    }
                    generateClassNames() {
                        const {
                            label: e,
                            label__hidden: t
                        } = this.props.managedClasses;
                        return super.generateClassNames((0, o.A)(e, [t, this.props.hidden]))
                    }
                }
                h.displayName = `${l.k}Label`, h.defaultProps = {
                    tag: i.label,
                    managedClasses: {}
                };
                const c = h
            },
            22545: (e, t, s) => {
                s.d(t, {
                    ZP: () => i
                });
                const i = s(28293).Z
            },
            28293: (e, t, s) => {
                s.d(t, {
                    Z: () => c
                });
                var i = s(11754),
                    a = s(33832),
                    o = s(37834),
                    n = s(89526),
                    r = s(97084),
                    l = s(12468);
                class h extends i.Z {
                    constructor() {
                        super(...arguments), this.handledProps = {
                            disabled: void 0,
                            displayString: void 0,
                            managedClasses: void 0,
                            id: void 0,
                            onInvoke: void 0,
                            value: void 0
                        }, this.isItemSelected = () => {
                            let e = !1;
                            return void 0 !== this.context.listboxSelectedItems && (e = 1 === this.context.listboxSelectedItems.filter((e => e.id === this.props.id)).length), e
                        }, this.handleKeyDown = e => {
                            if (!this.props.disabled && ("function" == typeof this.props.onKeyDown && this.props.onKeyDown(e), !e.defaultPrevented)) switch (e.keyCode) {
                                case a.bq:
                                case a.ei:
                                    this.invokeOption(e)
                            }
                        }, this.handleClick = e => {
                            this.props.disabled || ("function" == typeof this.props.onClick && this.props.onClick(e), e.defaultPrevented || this.invokeOption(e))
                        }, this.handleFocus = e => {
                            this.props.disabled || ("function" == typeof this.context.listboxItemFocused && this.context.listboxItemFocused(this.props, e), "function" == typeof this.props.onFocus && this.props.onFocus(e))
                        }
                    }
                    render() {
                        return n.createElement("div", Object.assign({}, this.unhandledProps(), {
                            className: this.generateClassNames(),
                            role: "option",
                            id: this.props.id,
                            "aria-selected": this.isItemSelected(),
                            "aria-disabled": this.props.disabled,
                            onClick: this.handleClick,
                            onFocus: this.handleFocus,
                            onKeyDown: this.handleKeyDown
                        }), this.props.children)
                    }
                    generateClassNames() {
                        const {
                            listboxItem: e,
                            listboxItem__disabled: t,
                            listboxItem__selected: s
                        } = this.props.managedClasses;
                        return super.generateClassNames((0, o.A)(e, [t, this.props.disabled], [s, this.isItemSelected()]))
                    }
                    invokeOption(e) {
                        this.context.listboxItemInvoked && this.context.listboxItemInvoked(this.props, e), "function" == typeof this.props.onInvoke && this.props.onInvoke(e, this.props)
                    }
                }
                h.displayName = `${l.k}ListboxItem`, h.contextType = r.R, h.defaultProps = {
                    disabled: !1,
                    managedClasses: {}
                }, h.contextType = r.R;
                const c = h
            },
            18078: (e, t, s) => {
                s.d(t, {
                    ZP: () => i
                });
                const i = s(42999).Z
            },
            97084: (e, t, s) => {
                s.d(t, {
                    R: () => i
                });
                const i = s(89526).createContext({
                    listboxItemInvoked: null,
                    listboxItemFocused: null,
                    listboxSelectedItems: [],
                    listboxMultiselectable: !1
                })
            },
            42999: (e, t, s) => {
                s.d(t, {
                    Z: () => u
                });
                var i = s(11754),
                    a = s(33832),
                    o = s(99478),
                    n = s(37834),
                    r = s(9453),
                    l = s(18868),
                    h = s(64829),
                    c = s(67099),
                    d = s(89526),
                    p = s(12468),
                    b = s(97084);
                class g extends i.Z {
                    constructor(e) {
                        super(e), this.handledProps = {
                            children: void 0,
                            defaultSelection: void 0,
                            disabled: void 0,
                            labelledBy: void 0,
                            describedBy: void 0,
                            managedClasses: void 0,
                            multiselectable: void 0,
                            onItemInvoked: void 0,
                            onSelectedItemsChanged: void 0,
                            selectedItems: void 0,
                            typeAheadEnabled: void 0,
                            typeAheadPropertyKey: void 0,
                            focusItemOnMount: void 0,
                            selectOnFocus: void 0,
                            tabbableItems: void 0
                        }, this.rootElement = d.createRef(), this.typeAheadString = "", this.shiftRangeSelectStartIndex = -1, this.renderChild = (e, t) => d.cloneElement(e, {
                            tabIndex: this.props.tabbableItems && t === this.state.focusIndex ? 0 : -1
                        }), this.isFocusableElement = e => e instanceof HTMLElement && "option" === e.getAttribute("role") && !this.isDisabledElement(e) && !this.props.disabled, this.isDisabledElement = e => e instanceof HTMLElement && "true" === e.getAttribute("aria-disabled"), this.setInitialFocus = (e, t) => {
                            let s = -1;
                            for (let t = 0; t < e.length; t++) s = g.getItemIndexById(e[t].id, this.props.children); - 1 === s && (s = this.domChildren().findIndex(this.isFocusableElement)), this.props.focusItemOnMount && t && -1 !== s ? this.setFocus(s, 1) : this.setState({
                                focusIndex: s
                            })
                        }, this.getInitialSelection = () => {
                            let e;
                            return e = void 0 !== this.props.selectedItems ? g.getListboxItemDataFromIds(this.props.selectedItems, this.props.children) : g.getListboxItemDataFromIds(this.props.defaultSelection, this.props.children), !this.props.multiselectable && e.length > 1 && (e = e.slice(0, 1)), e
                        }, this.listboxItemfocused = (e, t) => {
                            if (this.props.disabled) return;
                            const s = t.currentTarget,
                                i = this.domChildren().indexOf(s);
                            this.isDisabledElement(s) ? s.blur() : (this.setState({
                                focusIndex: i,
                                focussedItemId: e.id
                            }), !this.props.multiselectable && this.props.selectOnFocus && this.updateSelection([e]))
                        }, this.handleMenuKeyDown = e => {
                            if ("function" == typeof this.props.onKeyDown && this.props.onKeyDown(e), e.defaultPrevented || this.props.disabled) return;
                            let t;
                            switch (e.keyCode) {
                                case a.Lp:
                                case a.bq:
                                case a.ei:
                                case a.RN:
                                    return;
                                case a.Q6:
                                case a.ho:
                                    if (t = this.setFocus(this.state.focusIndex + 1, 1), this.props.multiselectable && e.shiftKey && "" !== t) {
                                        const e = g.getItemPropsById(t, this.props.children);
                                        null !== e && this.toggleItem(e)
                                    }
                                    e.preventDefault();
                                    break;
                                case a.$Y:
                                case a.BJ:
                                    if (t = this.setFocus(this.state.focusIndex - 1, -1), this.props.multiselectable && e.shiftKey && "" !== t) {
                                        const e = g.getItemPropsById(t, this.props.children);
                                        null !== e && this.toggleItem(e)
                                    }
                                    e.preventDefault();
                                    break;
                                case a.$B:
                                    this.props.multiselectable && e.shiftKey && e.ctrlKey && this.selectRange(this.state.focusIndex, this.domChildren().length - 1), this.setFocus(this.domChildren().length - 1, -1), e.preventDefault();
                                    break;
                                case a.wn:
                                    this.props.multiselectable && e.shiftKey && e.ctrlKey && this.selectRange(0, this.state.focusIndex), this.setFocus(0, 1), e.preventDefault();
                                    break;
                                default:
                                    "A" === e.key ? this.selectRange(0, this.domChildren().length) : !e.ctrlKey && this.props.typeAheadEnabled && this.processTypeAhead(e)
                            }
                        }, this.processTypeAhead = e => {
                            clearTimeout(this.typeAheadTimer), this.typeAheadString = this.typeAheadString + e.key.toLowerCase();
                            let t = -1;
                            d.Children.toArray(this.props.children).some(((e, s) => void 0 !== e.props[this.props.typeAheadPropertyKey] && ((0, o.Ny)(e.props[this.props.typeAheadPropertyKey].toLowerCase(), this.typeAheadString) ? (t = s, !0) : void 0))), -1 !== t ? (this.typeAheadTimer = setTimeout((() => {
                                this.typeAheadTimerExpired()
                            }), 1e3), this.setFocus(t, 1)) : this.typeAheadString = ""
                        }, this.typeAheadTimerExpired = () => {
                            this.typeAheadString = "", clearTimeout(this.typeAheadTimer)
                        }, this.listboxItemInvoked = (e, t) => {
                            if (this.props.disabled) return;
                            "function" == typeof this.props.onItemInvoked && this.props.onItemInvoked(e);
                            const s = t.currentTarget,
                                i = this.domChildren().indexOf(s);
                            this.props.multiselectable && "click" === t.type ? (t.shiftKey && -1 !== this.shiftRangeSelectStartIndex || (this.shiftRangeSelectStartIndex = i), t.ctrlKey ? this.toggleItem(e) : t.shiftKey ? this.selectRange(this.shiftRangeSelectStartIndex, i) : this.updateSelection([e])) : this.props.multiselectable && "keydown" === t.type ? t.shiftKey ? this.selectRange(this.shiftRangeSelectStartIndex, i) : this.toggleItem(e) : this.updateSelection([e])
                        }, this.toggleItem = e => {
                            const t = this.state.selectedItems.filter((t => t.id !== e.id));
                            if (t.length < this.state.selectedItems.length) this.updateSelection(t);
                            else {
                                const t = this.state.selectedItems.concat([e]);
                                this.updateSelection(t)
                            }
                        }, this.selectRange = (e, t) => {
                            const s = d.Children.toArray(this.props.children).slice(e >= t ? t : e, e >= t ? e + 1 : t + 1).map((e => e.props));
                            this.updateSelection(s)
                        }, this.updateSelection = e => {
                            const t = g.validateSelection(e, this.props.children);
                            return (0, l.Z)(t, this.state.selectedItems) || (void 0 === this.props.selectedItems && this.setState({
                                selectedItems: t
                            }), this.props.onSelectedItemsChanged && this.props.onSelectedItemsChanged(t)), t
                        }, this.state = {
                            focusIndex: -1,
                            focussedItemId: "",
                            selectedItems: this.getInitialSelection()
                        }
                    }
                    static getListboxItemDataFromIds(e, t) {
                        return g.validateSelection(e, t)
                    }
                    static getItemIndexById(e, t) {
                        return d.Children.toArray(t).findIndex((t => void 0 !== t.props[g.idPropertyKey] && t.props[g.idPropertyKey] === e))
                    }
                    static isValidSelectedItem(e) {
                        return void 0 !== e && !0 !== e.props[g.disabledPropertyKey] && void 0 !== e.props[g.valuePropertyKey]
                    }
                    static getNodeById(e, t) {
                        return d.Children.toArray(t).find((t => void 0 !== t.props[g.idPropertyKey] && t.props[g.idPropertyKey] === e))
                    }
                    static getItemPropsById(e, t) {
                        const s = this.getNodeById(e, t);
                        return void 0 !== s ? s.props : null
                    }
                    static validateSelection(e, t) {
                        return e.map((e => {
                            let s = "";
                            s = "string" == typeof e ? e : e.id;
                            const i = this.getNodeById(s, t);
                            return g.isValidSelectedItem(i) ? i.props : null
                        })).filter((e => null !== e))
                    }
                    render() {
                        return d.createElement("div", Object.assign({}, this.unhandledProps(), {
                            ref: this.rootElement,
                            role: "listbox",
                            "aria-disabled": this.props.disabled || null,
                            "aria-multiselectable": this.props.multiselectable || null,
                            "aria-activedescendant": this.state.focussedItemId,
                            "aria-labelledby": this.props.labelledBy || null,
                            "aria-describedby": this.props.describedBy || null,
                            className: this.generateClassNames(),
                            onKeyDown: this.handleMenuKeyDown
                        }), d.createElement(b.R.Provider, {
                            value: {
                                listboxSelectedItems: this.state.selectedItems,
                                listboxItemFocused: this.listboxItemfocused,
                                listboxItemInvoked: this.listboxItemInvoked,
                                listboxMultiselectable: this.props.multiselectable
                            }
                        }, this.renderChildren()))
                    }
                    componentDidUpdate(e) {
                        let t = null;
                        if ((0, l.Z)(e.defaultSelection, this.props.defaultSelection) || void 0 !== this.props.selectedItems || (t = this.updateSelection(this.getInitialSelection())), e.children !== this.props.children) {
                            t = null === t ? this.updateSelection(this.state.selectedItems.slice(0)) : t;
                            const e = this.domChildren();
                            if (!(0, h.Z)(this.rootElement.current) && this.rootElement.current.contains(document.activeElement)) return void this.setState({
                                focusIndex: e.indexOf(document.activeElement)
                            });
                            (e.length <= this.state.focusIndex || !this.isFocusableElement(e[this.state.focusIndex])) && this.setInitialFocus(t, !1)
                        }
                    }
                    componentDidMount() {
                        this.setInitialFocus(this.state.selectedItems, !0)
                    }
                    componentWillUnmount() {
                        clearTimeout(this.typeAheadTimer)
                    }
                    generateClassNames() {
                        const {
                            listbox: e,
                            listbox__disabled: t
                        } = this.props.managedClasses;
                        return super.generateClassNames((0, n.A)(e, [t, this.props.disabled]))
                    }
                    renderChildren() {
                        return d.Children.map(this.props.children, this.renderChild)
                    }
                    domChildren() {
                        return (0, r.N)() && this.rootElement.current instanceof HTMLElement ? Array.from(this.rootElement.current.children) : []
                    }
                    setFocus(e, t) {
                        const s = this.domChildren();
                        let i = "";
                        for (;
                            (0, c.Z)(e, s.length);) {
                            const a = s[e];
                            if (i = a.id, this.isFocusableElement(a)) {
                                this.props.disabled || a.focus();
                                break
                            }
                            e += t
                        }
                        return i
                    }
                }
                g.displayName = `${p.k}Listbox`, g.defaultProps = {
                    multiselectable: !1,
                    defaultSelection: [],
                    typeAheadPropertyKey: "displayString",
                    typeAheadEnabled: !0,
                    focusItemOnMount: !1,
                    managedClasses: {},
                    selectOnFocus: !0,
                    tabbableItems: !0
                }, g.getFirstValidOptionInRange = (e, t, s, i) => {
                    for (let a = e; a !== t + i; a += i) {
                        const e = s[a];
                        return g.isValidSelectedItem(e) ? e : null
                    }
                }, g.getValidOptions = e => e.filter((e => g.isValidSelectedItem(e))), g.valuePropertyKey = "value", g.idPropertyKey = "id", g.disabledPropertyKey = "disabled";
                const u = g
            },
            79389: (e, t, s) => {
                s.d(t, {
                    ZP: () => i
                });
                const i = s(63566).Z
            },
            63566: (e, t, s) => {
                s.d(t, {
                    Z: () => y
                });
                var i = s(11754),
                    a = s(33832),
                    o = s(5346),
                    n = s(37834),
                    r = s(9453),
                    l = s(48527),
                    h = s(18868),
                    c = s(64829),
                    d = s(9680),
                    p = s(89526),
                    b = s(18078),
                    g = s(12468),
                    u = s(8641);
                class m extends i.Z {
                    constructor(e) {
                        super(e), this.handledProps = {
                            isMenuOpen: void 0,
                            disabled: void 0,
                            displayStringFormatter: void 0,
                            form: void 0,
                            labelledBy: void 0,
                            describedBy: void 0,
                            multiselectable: void 0,
                            trigger: void 0,
                            menu: void 0,
                            required: void 0,
                            managedClasses: void 0,
                            selectedItems: void 0,
                            defaultSelection: void 0,
                            onValueChange: void 0,
                            placeholder: void 0,
                            autoFocus: void 0,
                            menuFlyoutConfig: void 0,
                            onMenuSelectionChange: void 0
                        }, this.rootElement = p.createRef(), this.triggerId = (0, l.Z)(m.triggerUniqueIdPrefix), this.checkPropsForMenuState = () => {
                            let e = !1;
                            return void 0 !== this.props.isMenuOpen ? e = this.props.isMenuOpen : !0 === this.props.multiselectable && (e = !0), e
                        }, this.onSelectValueChange = e => null, this.menuSelectionChange = e => {
                            "function" == typeof this.props.onMenuSelectionChange && this.props.onMenuSelectionChange(e), this.updateSelection(e)
                        }, this.updateSelection = e => {
                            e = this.trimSelection(e);
                            const t = this.getValueFromSelection(e);
                            if (this.state.value === t) return;
                            const s = this.getFormattedDisplayString(e);
                            if ("function" != typeof this.props.onValueChange || (0, h.Z)(e, this.state.selectedItems) || this.props.onValueChange(t, e, s), void 0 === this.props.selectedItems) {
                                const i = this.getValidOptions();
                                this.setState({
                                    selectedItems: e,
                                    value: t,
                                    displayString: s,
                                    selectedItemIndex: this.getSelectedItemPosInSet(i, e),
                                    selectableItemCount: i.length
                                })
                            }
                        }, this.updateSelectionFromProps = () => {
                            const e = this.trimSelection(b.ZP.getListboxItemDataFromIds(this.props.selectedItems, this.props.children));
                            this.setState({
                                selectedItems: e,
                                value: this.getValueFromSelection(e),
                                displayString: this.getFormattedDisplayString(e)
                            })
                        }, this.trimSelection = e => !1 === this.props.multiselectable && e.length > 1 ? [this.state.selectedItems[0]] : e, this.getValueFromSelection = e => this.props.multiselectable ? e.map((e => e.value)) : 0 === e.length ? "" : e[0].value, this.getSelectedItemPosInSet = (e, t) => {
                            if (!this.props.multiselectable && 1 === t.length) {
                                const s = t[0].id,
                                    i = e.length;
                                for (let t = 0; t < i; t++)
                                    if (e[t].props[m.idPropertyKey] === s) return t + 1
                            }
                            return 0
                        }, this.defaultTriggerRenderFunction = (e, t, s) => {
                            if (e.multiselectable) return null;
                            const i = `${(0,c.Z)(this.props.labelledBy)?"":`${this.props.labelledBy} `}${s}`,
                                a = "" + ((0, c.Z)(this.props.describedBy) ? "" : `${this.props.describedBy}`);
                            return p.createElement("button", {
                                disabled: e.disabled,
                                id: s,
                                "aria-haspopup": "listbox",
                                "aria-labelledby": i,
                                "aria-describedby": a,
                                "aria-expanded": t.isMenuOpen
                            }, t.displayString)
                        }, this.defaultDisplayStringFormatter = (e, t) => {
                            const s = e.map((e => e.displayString || e.value));
                            return e.length > 0 ? s.join(", ") : t
                        }, this.handleClick = e => {
                            "function" == typeof this.props.onClick && this.props.onClick(e), this.props.disabled || e.defaultPrevented || (e.preventDefault(), this.toggleMenu(!this.state.isMenuOpen), !1 === this.validateMenuState(!this.state.isMenuOpen) && this.focusTriggerElement())
                        }, this.handleKeydown = e => {
                            if ("function" == typeof this.props.onKeyDown && this.props.onKeyDown(e), !this.props.disabled && !e.defaultPrevented) switch (e.keyCode) {
                                case a.bq:
                                case a.ei:
                                    e.preventDefault(), this.toggleMenu(!this.state.isMenuOpen), !1 === this.validateMenuState(!this.state.isMenuOpen) && this.focusTriggerElement();
                                    break;
                                case a.Lp:
                                    this.state.isMenuOpen && (e.preventDefault(), this.toggleMenu(!1), this.focusTriggerElement());
                                    break;
                                case a.Q6:
                                case a.ho:
                                    e.preventDefault(), this.props.multiselectable || this.state.isMenuOpen || this.incrementSelectedOption(1);
                                    break;
                                case a.$Y:
                                case a.BJ:
                                    e.preventDefault(), this.props.multiselectable || this.state.isMenuOpen || this.incrementSelectedOption(-1)
                            }
                        }, this.incrementSelectedOption = e => {
                            const t = p.Children.toArray(this.props.children);
                            if (1 === this.state.selectedItems.length) {
                                const s = b.ZP.getItemIndexById(this.state.selectedItems[0].id, this.props.children);
                                if (-1 !== s) {
                                    const i = s + e,
                                        a = e > -1 ? t.length - 1 : 0;
                                    this.selectItemInRange(i, a, t, e)
                                }
                            } else {
                                const s = e > -1,
                                    i = t.length - 1;
                                this.selectItemInRange(s ? 0 : i, s ? i : 0, t, e)
                            }
                        }, this.selectItemInRange = (e, t, s, i) => {
                            const a = b.ZP.getFirstValidOptionInRange(e, t, s, i);
                            (0, c.Z)(a) || this.updateSelection([a.props])
                        }, this.toggleMenu = e => {
                            const t = this.validateMenuState(e);
                            t !== this.state.isMenuOpen && this.setState({
                                isMenuOpen: t
                            })
                        }, this.validateMenuState = e => {
                            let t = e;
                            return void 0 !== this.props.isMenuOpen ? t = this.props.isMenuOpen : !0 === this.props.multiselectable && (t = !0), t
                        }, this.handleMenuBlur = e => {
                            this.state.isMenuOpen && !this.props.multiselectable && null !== this.rootElement.current && (!this.rootElement.current.contains(e.relatedTarget) || (0, o.Re)(e.relatedTarget) && e.relatedTarget.id === this.triggerId) && this.toggleMenu(!1)
                        }, this.getFormattedDisplayString = e => void 0 === this.props.displayStringFormatter ? this.defaultDisplayStringFormatter(e, this.props.placeholder) : this.props.displayStringFormatter(e, this.props.placeholder), this.isFocusableButton = e => e instanceof HTMLButtonElement && "true" !== e.getAttribute("aria-disabled"), this.focusTriggerElement = () => {
                            const e = this.getTriggerButton();
                            null !== e && e.focus()
                        }, this.getValidOptions = () => b.ZP.getValidOptions(p.Children.toArray(this.props.children));
                        let t = this.trimSelection(b.ZP.getListboxItemDataFromIds(void 0 !== this.props.selectedItems ? this.props.selectedItems : this.props.defaultSelection, this.props.children));
                        !this.props.multiselectable && t.length > 1 && (t = t.slice(0, 1));
                        const s = this.getValidOptions();
                        this.state = {
                            selectedItems: t,
                            value: this.getValueFromSelection(t),
                            displayString: this.getFormattedDisplayString(t),
                            isMenuOpen: this.validateMenuState(!1),
                            selectedItemIndex: this.getSelectedItemPosInSet(s, t),
                            selectableItemCount: s.length
                        }
                    }
                    componentDidUpdate(e) {
                        let t = !1,
                            s = this.state.isMenuOpen;
                        e.multiselectable !== this.props.multiselectable && (t = !0, s = this.checkPropsForMenuState()), e.isMenuOpen !== this.props.isMenuOpen && (s = this.checkPropsForMenuState()), s !== this.state.isMenuOpen && this.toggleMenu(s), e.selectedItems === this.props.selectedItems ? t && this.updateSelection(this.state.selectedItems.map((e => e))) : this.updateSelectionFromProps()
                    }
                    componentDidMount() {
                        this.toggleMenu(this.checkPropsForMenuState()), !this.props.autoFocus || this.state.isMenuOpen || this.props.multiselectable || this.focusTriggerElement()
                    }
                    render() {
                        return p.createElement("div", Object.assign({}, this.unhandledProps(), {
                            ref: this.rootElement,
                            className: this.generateClassNames(),
                            onKeyDown: this.handleKeydown,
                            onClick: this.handleClick
                        }), this.renderTrigger(), this.renderHiddenSelectElement(), this.renderMenu())
                    }
                    generateClassNames() {
                        const {
                            select: e,
                            select__scaleToFit: t,
                            select__disabled: s,
                            select_menu__open: i,
                            select__multiSelectable: a
                        } = this.props.managedClasses;
                        return super.generateClassNames((0, n.A)(e, [t, !(0, c.Z)(this.props.menuFlyoutConfig) && this.props.menuFlyoutConfig.scaleToFit], [s, this.props.disabled], [i, this.state.isMenuOpen], [a, this.props.multiselectable]))
                    }
                    renderHiddenSelectElement() {
                        return p.createElement("select", {
                            required: this.props.required || null,
                            name: this.props.name || null,
                            form: this.props.form || null,
                            value: this.state.value,
                            multiple: this.props.multiselectable || null,
                            disabled: this.props.disabled || null,
                            onChange: this.onSelectValueChange,
                            style: {
                                display: "none"
                            }
                        })
                    }
                    renderTrigger() {
                        return void 0 !== this.props.trigger ? this.props.trigger(this.props, this.state, this.triggerId) : this.defaultTriggerRenderFunction(this.props, this.state, this.triggerId)
                    }
                    renderMenu() {
                        if (!this.state.isMenuOpen) return;
                        let e = !this.props.multiselectable;
                        this.props.multiselectable && this.props.autoFocus && (e = this.props.multiselectable);
                        const t = p.createElement(b.ZP, {
                                labelledBy: this.props.labelledBy,
                                describedBy: this.props.describedBy,
                                disabled: this.props.disabled,
                                focusItemOnMount: e,
                                multiselectable: this.props.multiselectable,
                                defaultSelection: this.state.selectedItems,
                                selectedItems: this.props.selectedItems,
                                onSelectedItemsChanged: this.menuSelectionChange,
                                onBlur: this.handleMenuBlur,
                                selectOnFocus: !1,
                                tabIndex: -1,
                                managedClasses: {
                                    listbox: (0, d.Z)(this.props.managedClasses, "select_menu", ""),
                                    listbox__disabled: (0, d.Z)(this.props.managedClasses, "select_menuDisabled", "")
                                }
                            }, this.props.children),
                            s = "function" == typeof this.props.menu ? this.props.menu(this.props, this.state, t) : t;
                        return (0, c.Z)(this.props.menuFlyoutConfig) ? s : p.createElement(u.ZP, Object.assign({
                            anchor: this.rootElement
                        }, this.props.menuFlyoutConfig, {
                            managedClasses: this.generateViewportPositionerClassNames()
                        }), s)
                    }
                    generateViewportPositionerClassNames() {
                        const {
                            select__menuPositioningRegion: e,
                            select__menuPositionLeft: t,
                            select__menuPositionRight: s,
                            select__menuPositionTop: i,
                            select__menuPositionBottom: a,
                            select__menuPositionHorizontalInset: o,
                            select__menuPositionVerticalInset: n
                        } = this.props.managedClasses;
                        return {
                            viewportPositioner: e,
                            viewportPositioner__left: t,
                            viewportPositioner__right: s,
                            viewportPositioner__top: i,
                            viewportPositioner__bottom: a,
                            viewportPositioner__horizontalInset: o,
                            viewportPositioner__verticalInset: n
                        }
                    }
                    getTriggerButton() {
                        const e = (0, r.N)() && this.rootElement.current instanceof HTMLElement ? Array.from(this.rootElement.current.children) : [],
                            t = e.findIndex(this.isFocusableButton);
                        return -1 !== t ? e[t] : null
                    }
                }
                m.displayName = `${g.k}Select`, m.defaultProps = {
                    multiselectable: !1,
                    disabled: !1,
                    defaultSelection: [],
                    placeholder: "",
                    managedClasses: {}
                }, m.idPropertyKey = "id", m.triggerUniqueIdPrefix = "selecttrigger-";
                const y = m
            },
            87472: (e, t, s) => {
                s.d(t, {
                    ZP: () => i
                });
                const i = s(39093).Z
            },
            39093: (e, t, s) => {
                s.d(t, {
                    Z: () => l
                });
                var i = s(11754),
                    a = s(37834),
                    o = s(89526),
                    n = s(12468);
                class r extends i.Z {
                    constructor(e) {
                        super(e), this.handledProps = {
                            managedClasses: void 0,
                            disabled: void 0,
                            inputId: void 0,
                            labelId: void 0,
                            name: void 0,
                            selected: void 0,
                            selectedMessage: void 0,
                            statusMessageId: void 0,
                            unselectedMessage: void 0,
                            onChange: void 0
                        }, this.handleToggleChange = e => {
                            "boolean" != typeof this.props.selected && this.setState({
                                selected: !this.state.selected
                            }), this.props.onChange && this.props.onChange(e)
                        }, this.state = {
                            selected: this.props.selected || !1
                        }
                    }
                    static getDerivedStateFromProps(e, t) {
                        return "boolean" == typeof e.selected && e.selected !== t.selected ? {
                            selected: e.selected
                        } : null
                    }
                    render() {
                        const {
                            toggle_toggleButton: e,
                            toggle_input: t,
                            toggle_stateIndicator: s
                        } = this.props.managedClasses;
                        return o.createElement("div", Object.assign({}, this.unhandledProps(), {
                            className: this.generateClassNames(),
                            "aria-disabled": this.props.disabled || null
                        }), this.generateLabel(), o.createElement("div", {
                            className: (0, a.A)(e)
                        }, o.createElement("input", {
                            className: (0, a.A)(t),
                            type: "checkbox",
                            id: this.props.inputId,
                            "aria-describedby": this.props.statusMessageId,
                            disabled: this.props.disabled,
                            name: this.props.name,
                            value: this.generateToggleStateLabel(),
                            onChange: this.handleToggleChange,
                            checked: this.state.selected
                        }), o.createElement("span", {
                            className: (0, a.A)(s)
                        })), this.renderStatusMessage())
                    }
                    generateClassNames() {
                        const {
                            toggle: e,
                            toggle__disabled: t,
                            toggle__checked: s
                        } = this.props.managedClasses;
                        return super.generateClassNames((0, a.A)(e, [t, this.props.disabled], [s, this.state.selected]))
                    }
                    generateToggleStateLabel() {
                        return this.state.selected ? this.props.selectedMessage : this.props.unselectedMessage
                    }
                    generateLabel() {
                        if (this.props.labelId || this.props.children) return o.createElement("label", {
                            className: (0, a.A)(this.props.managedClasses.toggle_label),
                            id: this.props.labelId,
                            htmlFor: this.props.inputId
                        }, this.props.children)
                    }
                    renderStatusMessage() {
                        if (this.props.selectedMessage || this.props.unselectedMessage) return o.createElement("span", {
                            id: this.props.statusMessageId,
                            className: (0, a.A)(this.props.managedClasses.toggle_statusMessage)
                        }, this.generateToggleStateLabel())
                    }
                }
                r.displayName = `${n.k}Toggle`, r.defaultProps = {
                    managedClasses: {}
                };
                const l = r
            },
            61341: (e, t, s) => {
                s.d(t, {
                    ZP: () => h
                });
                var i = s(11754),
                    a = s(37834),
                    o = s(89526),
                    n = s(12468),
                    r = s(14895);
                class l extends i.Z {
                    constructor() {
                        super(...arguments), this.handledProps = {
                            managedClasses: void 0,
                            tag: void 0,
                            size: void 0
                        }
                    }
                    get tag() {
                        return this.generateHTMLTag()
                    }
                    render() {
                        return o.createElement(this.tag, Object.assign({}, this.unhandledProps(), {
                            className: this.generateClassNames()
                        }), this.props.children)
                    }
                    generateClassNames() {
                        const e = this.props.managedClasses;
                        return super.generateClassNames((0, a.A)(e.typography, e[`typography__${this.props.size}`]))
                    }
                    generateHTMLTag() {
                        return r.l[this.props.tag] || r.l.p
                    }
                }
                l.defaultProps = {
                    tag: r.l.p,
                    size: r.H._1,
                    managedClasses: {}
                }, l.displayName = `${n.k}Typography`;
                const h = l
            },
            14895: (e, t, s) => {
                var i, a;
                s.d(t, {
                        l: () => i,
                        H: () => a
                    }),
                    function(e) {
                        e.caption = "caption", e.h1 = "h1", e.h2 = "h2", e.h3 = "h3", e.h4 = "h4", e.h5 = "h5", e.h6 = "h6", e.p = "p", e.span = "span", e.figcaption = "figcaption"
                    }(i || (i = {})),
                    function(e) {
                        e[e._1 = 1] = "_1", e[e._2 = 2] = "_2", e[e._3 = 3] = "_3", e[e._4 = 4] = "_4", e[e._5 = 5] = "_5", e[e._6 = 6] = "_6", e[e._7 = 7] = "_7", e[e._8 = 8] = "_8", e[e._9 = 9] = "_9"
                    }(a || (a = {}))
            },
            12468: (e, t, s) => {
                s.d(t, {
                    k: () => i
                });
                const i = "Base"
            },
            8641: (e, t, s) => {
                s.d(t, {
                    ZP: () => m
                });
                var i = s(11754),
                    a = s(37834),
                    o = s(86577),
                    n = s(9453),
                    r = s(9680),
                    l = s(64829),
                    h = s(89526),
                    c = s(12468),
                    d = s(10736);
                const p = h.createContext({
                    viewport: null
                });
                var b, g;
                ! function(e) {
                    e.left = "left", e.insetLeft = "insetLeft", e.insetRight = "insetRight", e.right = "right", e[void 0] = "undefined"
                }(b || (b = {})),
                function(e) {
                    e.top = "top", e.insetTop = "insetTop", e.insetBottom = "insetBottom", e.bottom = "bottom", e[void 0] = "undefined"
                }(g || (g = {}));
                class u extends i.Z {
                    constructor(e) {
                        super(e), this.handledProps = {
                            managedClasses: void 0,
                            anchor: void 0,
                            viewport: void 0,
                            horizontalPositioningMode: void 0,
                            defaultHorizontalPosition: void 0,
                            horizontalThreshold: void 0,
                            horizontalAlwaysInView: void 0,
                            horizontalLockToDefault: void 0,
                            verticalPositioningMode: void 0,
                            defaultVerticalPosition: void 0,
                            verticalThreshold: void 0,
                            verticalAlwaysInView: void 0,
                            verticalLockToDefault: void 0,
                            fixedAfterInitialPlacement: void 0,
                            scaleToFit: void 0,
                            delayContentInstanciation: void 0,
                            disabled: void 0
                        }, this.rootElement = h.createRef(), this.openRequestAnimationFrame = null, this.anchorTop = 0, this.anchorRight = 0, this.anchorBottom = 0, this.anchorLeft = 0, this.anchorHeight = 0, this.anchorWidth = 0, this.scrollTop = 0, this.scrollLeft = 0, this.baseHorizontalOffset = 0, this.baseVerticalOffset = 0, this.getPositioningStyles = () => {
                            const e = (0, r.Z)(this.props, "style");
                            return Object.assign(Object.assign(Object.assign({}, this.props.scaleToFit ? {
                                height: `${this.state.verticalSelectedPositionHeight}px`,
                                width: `${this.state.horizontalSelectedPositionWidth}px`
                            } : {}), {
                                opacity: this.props.disabled || this.state.initialLayoutComplete ? void 0 : 0,
                                position: "relative",
                                transformOrigin: `${this.state.xTransformOrigin} ${this.state.yTransformOrigin}`,
                                transform: `translate(\n                ${Math.floor(this.state.xTranslate)}px, \n                ${Math.floor(this.state.yTranslate)}px\n            )`,
                                top: null === this.state.top ? null : `${this.state.top}px`,
                                right: null === this.state.right ? null : `${this.state.right}px`,
                                bottom: null === this.state.bottom ? null : `${this.state.bottom}px`,
                                left: null === this.state.left ? null : `${this.state.left}px`
                            }), e)
                        }, this.updateDisabledState = () => {
                            (0, n.N)() && !0 !== this.props.disabled ? (null === this.getAnchorElement() || null === this.getViewportElement(this.props.viewport)) && this.state.validRefChecksRemaining > 0 ? this.setState({
                                validRefChecksRemaining: this.state.validRefChecksRemaining - 1,
                                initialLayoutComplete: this.state.validRefChecksRemaining <= 1
                            }) : this.enableComponent() : this.disable()
                        }, this.enableComponent = () => {
                            const e = this.getViewportElement(this.props.viewport),
                                t = this.getAnchorElement();
                            !this.state.disabled || this.props.disabled || (0, l.Z)(t) || (0, l.Z)(e) || (0, l.Z)(this.rootElement.current) || (window.IntersectionObserver && window.ResizeObserver && !this.props.shouldUseNoObserverMode ? (this.setState({
                                disabled: !1,
                                noObserverMode: !1,
                                validRefChecksRemaining: 0
                            }), this.collisionDetector = new window.IntersectionObserver(this.handleCollision, {
                                root: e,
                                rootMargin: "0px",
                                threshold: [0, 1]
                            }), this.collisionDetector.observe(this.rootElement.current), this.collisionDetector.observe(t), this.resizeDetector = new window.ResizeObserver(this.handleResize), this.resizeDetector.observe(t), this.resizeDetector.observe(this.rootElement.current), e.addEventListener("scroll", this.handleScroll)) : this.setNoObserverMode())
                        }, this.setNoObserverMode = () => {
                            const e = this.getViewportElement(this.props.viewport),
                                t = this.getAnchorElement();
                            if ((0, l.Z)(e) || (0, l.Z)(t)) return;
                            const s = this.rootElement.current.getBoundingClientRect();
                            this.positionerDimension = {
                                height: s.height,
                                width: s.width
                            }, this.viewportRect = e.getBoundingClientRect();
                            const i = t.getBoundingClientRect();
                            this.anchorTop = i.top, this.anchorRight = i.right, this.anchorBottom = i.bottom, this.anchorLeft = i.left, this.anchorWidth = i.width, this.anchorHeight = i.height, this.updatePositionerOffset(s), this.setState({
                                validRefChecksRemaining: 0,
                                disabled: !1,
                                noObserverMode: !0
                            }), this.requestFrame()
                        }, this.disable = () => {
                            this.state.disabled || (this.detachListeners(this.props.viewport), this.setState({
                                disabled: !0,
                                validRefChecksRemaining: 0
                            }))
                        }, this.detachListeners = e => {
                            const t = this.getViewportElement(e);
                            (0, l.Z)(t) || t.removeEventListener("scroll", this.handleScroll), this.collisionDetector && "function" == typeof this.collisionDetector.disconnect && (this.collisionDetector.disconnect(), this.collisionDetector = null), this.resizeDetector && "function" == typeof this.resizeDetector.disconnect && (this.resizeDetector.disconnect(), this.resizeDetector = null)
                        }, this.getHorizontalPositioningOptions = () => {
                            switch (this.props.horizontalPositioningMode) {
                                case d.tg.inset:
                                    return [b.insetLeft, b.insetRight];
                                case d.tg.adjacent:
                                    return [b.left, b.right]
                            }
                        }, this.getVerticalPositioningOptions = () => {
                            switch (this.props.verticalPositioningMode) {
                                case d.tg.inset:
                                    return [g.insetTop, g.insetBottom];
                                case d.tg.adjacent:
                                    return [g.top, g.bottom]
                            }
                        }, this.getAvailableWidth = e => {
                            const t = this.anchorLeft - this.viewportRect.left,
                                s = this.viewportRect.right - (this.anchorLeft + this.anchorWidth);
                            switch (e) {
                                case b.left:
                                    return t;
                                case b.insetLeft:
                                    return t + this.anchorWidth;
                                case b.insetRight:
                                    return s + this.anchorWidth;
                                case b.right:
                                    return s
                            }
                        }, this.getAvailableHeight = e => {
                            const t = this.anchorTop - this.viewportRect.top,
                                s = this.viewportRect.bottom - (this.anchorTop + this.anchorHeight);
                            switch (e) {
                                case g.top:
                                    return t;
                                case g.insetTop:
                                    return t + this.anchorHeight;
                                case g.insetBottom:
                                    return s + this.anchorHeight;
                                case g.bottom:
                                    return s
                            }
                        }, this.handleScroll = () => {
                            this.requestFrame()
                        }, this.handleResize = e => {
                            e.forEach((e => {
                                e.target === this.rootElement.current ? this.handlePositionerResize(e) : this.handleAnchorResize(e)
                            }))
                        }, this.handlePositionerResize = e => {
                            this.props.scaleToFit || (this.positionerDimension = {
                                height: e.contentRect.height,
                                width: e.contentRect.width
                            }, this.requestFrame())
                        }, this.handleAnchorResize = e => {
                            this.anchorHeight = e.contentRect.height, this.anchorWidth = e.contentRect.width, this.state.currentVerticalPosition === g.top || this.state.currentVerticalPosition === g.insetTop ? this.anchorBottom = this.anchorTop + this.anchorHeight : this.anchorTop = this.anchorBottom - this.anchorHeight, this.state.currentHorizontalPosition === b.left || this.state.currentHorizontalPosition === b.insetLeft ? this.anchorRight = this.anchorLeft + this.anchorWidth : this.anchorLeft = this.anchorRight - this.anchorWidth, this.requestFrame()
                        }, this.handleCollision = (e, t) => {
                            let s = null;
                            e.forEach((t => {
                                t.target === this.rootElement.current ? (this.handlePositionerCollision(t, 1 === e.length), s = t.boundingClientRect) : this.handleAnchorCollision(t)
                            }));
                            const i = this.getViewportElement(this.props.viewport);
                            (0, l.Z)(i) || (this.scrollTop = i.scrollTop, this.scrollLeft = i.scrollLeft), 2 === e.length && null !== s && this.updatePositionerOffset(s), this.requestFrame()
                        }, this.handleAnchorCollision = e => {
                            this.viewportRect = e.rootBounds, this.anchorTop = e.boundingClientRect.top, this.anchorRight = e.boundingClientRect.right, this.anchorBottom = e.boundingClientRect.bottom, this.anchorLeft = e.boundingClientRect.left, this.anchorHeight = e.boundingClientRect.height, this.anchorWidth = e.boundingClientRect.width
                        }, this.handlePositionerCollision = (e, t) => {
                            this.viewportRect = e.rootBounds;
                            const s = e.boundingClientRect;
                            if (this.positionerDimension = {
                                    height: s.height,
                                    width: s.width
                                }, t) {
                                switch (this.state.currentVerticalPosition) {
                                    case g.top:
                                        this.anchorTop = s.bottom - this.state.yTranslate, this.anchorBottom = this.anchorTop + this.anchorHeight;
                                        break;
                                    case g.insetTop:
                                        this.anchorBottom = s.bottom - this.state.yTranslate, this.anchorTop = this.anchorBottom - this.anchorHeight;
                                        break;
                                    case g.insetBottom:
                                        this.anchorTop = s.top - this.state.yTranslate, this.anchorBottom = this.anchorTop + this.anchorHeight;
                                        break;
                                    case g.bottom:
                                        this.anchorBottom = s.top - this.state.yTranslate, this.anchorTop = this.anchorBottom - this.anchorHeight
                                }
                                switch (this.state.currentHorizontalPosition) {
                                    case b.left:
                                        this.anchorLeft = s.right - this.state.xTranslate, this.anchorRight = this.anchorLeft + this.anchorWidth;
                                        break;
                                    case b.insetLeft:
                                        this.anchorRight = s.right - this.state.xTranslate, this.anchorLeft = this.anchorRight - this.anchorWidth;
                                        break;
                                    case b.insetRight:
                                        this.anchorLeft = s.left - this.state.xTranslate, this.anchorRight = this.anchorLeft + this.anchorWidth;
                                        break;
                                    case b.right:
                                        this.anchorRight = s.left - this.state.xTranslate, this.anchorLeft = this.anchorRight - this.anchorWidth
                                }
                            }
                        }, this.updatePositionerOffset = e => {
                            if (this.props.horizontalPositioningMode === d.tg.uncontrolled) this.baseHorizontalOffset = this.anchorLeft - e.left;
                            else switch (this.state.currentHorizontalPosition) {
                                case b.undefined:
                                    this.baseHorizontalOffset = this.anchorLeft + this.state.xTranslate - e.left;
                                    break;
                                case b.left:
                                    this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorLeft + this.state.xTranslate - e.right);
                                    break;
                                case b.insetLeft:
                                    this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorRight + this.state.xTranslate - e.right);
                                    break;
                                case b.insetRight:
                                    this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorLeft + this.state.xTranslate - e.left);
                                    break;
                                case b.right:
                                    this.baseHorizontalOffset = this.baseHorizontalOffset + (this.anchorRight + this.state.xTranslate - e.left)
                            }
                            if (this.props.verticalPositioningMode === d.tg.uncontrolled) this.baseVerticalOffset = this.anchorBottom - e.top;
                            else switch (this.state.currentVerticalPosition) {
                                case g.undefined:
                                    this.baseVerticalOffset = this.anchorBottom + this.state.yTranslate - e.top;
                                    break;
                                case g.top:
                                    this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorTop + this.state.yTranslate - e.bottom);
                                    break;
                                case g.insetTop:
                                    this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorBottom + this.state.yTranslate - e.bottom);
                                    break;
                                case g.insetBottom:
                                    this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorTop + this.state.yTranslate - e.top);
                                    break;
                                case g.bottom:
                                    this.baseVerticalOffset = this.baseVerticalOffset + (this.anchorBottom + this.state.yTranslate - e.top)
                            }
                        }, this.updateForScrolling = () => {
                            const e = this.getViewportElement(this.props.viewport);
                            if ((0, l.Z)(e) || isNaN(e.scrollTop)) return;
                            const t = e.scrollTop,
                                s = e.scrollLeft;
                            if (this.scrollTop !== t) {
                                const e = this.scrollTop - t;
                                this.scrollTop = t, this.anchorTop = this.anchorTop + e, this.anchorBottom = this.anchorBottom + e
                            }
                            if (this.scrollLeft !== s) {
                                const e = this.scrollLeft - s;
                                this.scrollLeft = s, this.anchorLeft = this.anchorLeft + e, this.anchorRight = this.anchorRight + e
                            }
                        }, this.updateLayout = () => {
                            if (this.openRequestAnimationFrame = null, this.state.disabled || (0, l.Z)(this.viewportRect) || (0, l.Z)(this.positionerDimension) || this.props.fixedAfterInitialPlacement && this.state.initialLayoutComplete || this.state.noObserverMode && this.state.initialLayoutComplete) return;
                            this.updateForScrolling();
                            let e = g.undefined,
                                t = b.undefined;
                            if (this.props.horizontalPositioningMode !== d.tg.uncontrolled) {
                                const e = this.getHorizontalPositioningOptions();
                                t = this.state.defaultHorizontalPosition;
                                const s = void 0 !== this.props.horizontalThreshold ? this.props.horizontalThreshold : this.positionerDimension.width;
                                (t === b.undefined || !this.props.horizontalLockToDefault && this.getAvailableWidth(t) < s) && (t = this.getAvailableWidth(e[0]) > this.getAvailableWidth(e[1]) ? e[0] : e[1])
                            }
                            if (this.props.verticalPositioningMode !== d.tg.uncontrolled) {
                                const t = this.getVerticalPositioningOptions();
                                e = this.state.defaultVerticalPosition;
                                const s = void 0 !== this.props.verticalThreshold ? this.props.verticalThreshold : this.positionerDimension.height;
                                (e === g.undefined || !this.props.verticalLockToDefault && this.getAvailableHeight(e) < s) && (e = this.getAvailableHeight(t[0]) > this.getAvailableHeight(t[1]) ? t[0] : t[1])
                            }
                            const s = this.getNextPositionerDimension(t, e);
                            this.setState(Object.assign({
                                xTranslate: this.getHorizontalTranslate(t),
                                yTranslate: this.getVerticalTranslate(e),
                                initialLayoutComplete: !0
                            }, this.getHorizontalPositioningState(t, s), this.getVerticalPositioningState(e, s)))
                        }, this.getNextPositionerDimension = (e, t) => {
                            const s = {
                                height: this.positionerDimension.height,
                                width: this.positionerDimension.width
                            };
                            return this.props.scaleToFit && (s.height = Math.max(Math.min(this.getAvailableHeight(t), this.viewportRect.height), (0, l.Z)(this.props.verticalThreshold) ? 0 : this.props.verticalThreshold), s.width = Math.max(Math.min(this.getAvailableWidth(e), this.viewportRect.width), (0, l.Z)(this.props.horizontalThreshold) ? 0 : this.props.horizontalThreshold)), s
                        }, this.getHorizontalPositioningState = (e, t) => {
                            let s = null,
                                i = null,
                                a = "left";
                            switch (e) {
                                case b.left:
                                    a = "right", s = t.width - this.baseHorizontalOffset;
                                    break;
                                case b.insetLeft:
                                    a = "right", s = t.width - this.anchorWidth - this.baseHorizontalOffset;
                                    break;
                                case b.insetRight:
                                    a = "left", i = this.baseHorizontalOffset;
                                    break;
                                case b.right:
                                    a = "left", i = this.anchorWidth + this.baseHorizontalOffset
                            }
                            return {
                                xTransformOrigin: a,
                                right: s,
                                left: i,
                                currentHorizontalPosition: e,
                                horizontalSelectedPositionWidth: t.width
                            }
                        }, this.getVerticalPositioningState = (e, t) => {
                            let s = null,
                                i = null,
                                a = "top";
                            switch (e) {
                                case g.top:
                                    a = "bottom", i = t.height + this.anchorHeight - this.baseVerticalOffset;
                                    break;
                                case g.insetTop:
                                    a = "bottom", i = t.height - this.baseVerticalOffset;
                                    break;
                                case g.insetBottom:
                                    a = "top", s = this.baseVerticalOffset - this.anchorHeight;
                                    break;
                                case g.bottom:
                                    a = "top", s = this.baseVerticalOffset
                            }
                            return {
                                yTransformOrigin: a,
                                top: s,
                                bottom: i,
                                currentVerticalPosition: e,
                                verticalSelectedPositionHeight: t.height
                            }
                        }, this.getHorizontalTranslate = e => {
                            if (!this.props.horizontalAlwaysInView || this.state.disabled) return 0;
                            let t = 0;
                            switch (e) {
                                case b.left:
                                    t = this.viewportRect.right - this.anchorLeft, t = t < 0 ? t - 1 : 0;
                                    break;
                                case b.insetLeft:
                                    t = this.viewportRect.right - this.anchorRight, t = t < 0 ? t - 1 : 0;
                                    break;
                                case b.insetRight:
                                    t = this.viewportRect.left - this.anchorLeft, t = t > 0 ? t + 1 : 0;
                                    break;
                                case b.right:
                                    t = this.viewportRect.left - this.anchorRight, t = t > 0 ? t + 1 : 0
                            }
                            return t
                        }, this.getVerticalTranslate = e => {
                            if (!this.props.verticalAlwaysInView || this.state.disabled) return 0;
                            let t = 0;
                            switch (e) {
                                case g.top:
                                    t = this.viewportRect.bottom - this.anchorTop, t = t < 0 ? t - 1 : 0;
                                    break;
                                case g.insetTop:
                                    t = this.viewportRect.bottom - this.anchorBottom, t = t < 0 ? t - 1 : 0;
                                    break;
                                case g.insetBottom:
                                    t = this.viewportRect.top - this.anchorTop, t = t < 0 ? 0 : t + 1;
                                    break;
                                case g.bottom:
                                    t = this.viewportRect.top - this.anchorBottom, t = t < 0 ? 0 : t + 1
                            }
                            return t
                        }, this.requestFrame = () => {
                            null === this.openRequestAnimationFrame && (this.openRequestAnimationFrame = window.requestAnimationFrame(this.updateLayout))
                        }, this.getAnchorElement = () => (0, l.Z)(this.props.anchor) ? null : this.extractElement(this.props.anchor), this.getViewportElement = e => {
                            if (!(0, l.Z)(e)) {
                                const t = this.extractElement(e);
                                return null !== t ? t : null
                            }
                            if (!(0, l.Z)(this.context.viewport)) {
                                const e = this.extractElement(this.context.viewport);
                                return null !== e ? e : null
                            }
                            return document.scrollingElement instanceof HTMLElement ? document.scrollingElement : null
                        }, this.extractElement = e => {
                            const t = (0, o.x)(e);
                            return t instanceof HTMLElement ? t : null
                        }, this.getHorizontalPositionToLabel = (e, t) => {
                            switch (e) {
                                case d.tg.inset:
                                    if (t === d.kv.left) return b.insetLeft;
                                    if (t === d.kv.right) return b.insetRight;
                                case d.tg.adjacent:
                                    if (t === d.kv.left) return b.left;
                                    if (t === d.kv.right) return b.right;
                                case d.tg.uncontrolled:
                                    return b.undefined
                            }
                        }, this.getVerticalPositionToLabel = (e, t) => {
                            switch (e) {
                                case d.tg.inset:
                                    if (t === d.Lp.top) return g.insetTop;
                                    if (t === d.Lp.bottom) return g.insetBottom;
                                case d.tg.adjacent:
                                    if (t === d.Lp.top) return g.top;
                                    if (t === d.Lp.bottom) return g.bottom;
                                case d.tg.uncontrolled:
                                    return g.undefined
                            }
                        }, this.generateInitialState = () => ({
                            disabled: !0,
                            noObserverMode: !1,
                            xTransformOrigin: "left",
                            yTransformOrigin: "top",
                            xTranslate: 0,
                            yTranslate: 0,
                            top: null,
                            right: null,
                            bottom: null,
                            left: null,
                            currentHorizontalPosition: b.undefined,
                            currentVerticalPosition: g.undefined,
                            defaultHorizontalPosition: this.getHorizontalPositionToLabel(this.props.horizontalPositioningMode, this.props.defaultHorizontalPosition),
                            defaultVerticalPosition: this.getVerticalPositionToLabel(this.props.verticalPositioningMode, this.props.defaultVerticalPosition),
                            horizontalSelectedPositionWidth: null,
                            verticalSelectedPositionHeight: null,
                            initialLayoutComplete: !1,
                            validRefChecksRemaining: 2
                        }), this.state = this.generateInitialState()
                    }
                    componentDidMount() {
                        this.updateDisabledState(), this.requestFrame()
                    }
                    componentWillUnmount() {
                        this.state.disabled || this.detachListeners(this.props.viewport)
                    }
                    componentDidUpdate(e) {
                        if (e !== this.props) {
                            if (e.anchor !== this.props.anchor || e.viewport !== this.props.viewport) return this.detachListeners(e.viewport), void this.setState(this.generateInitialState());
                            this.requestFrame()
                        }(e.disabled !== this.props.disabled || this.state.validRefChecksRemaining > 0) && this.updateDisabledState()
                    }
                    render() {
                        return h.createElement("div", Object.assign({}, this.unhandledProps(), {
                            ref: this.rootElement,
                            className: this.generateClassNames(),
                            style: this.getPositioningStyles()
                        }), this.props.disabled || this.state.initialLayoutComplete || !this.props.delayContentInstanciation ? this.props.children : null)
                    }
                    generateClassNames() {
                        const {
                            viewportPositioner: e,
                            viewportPositioner__left: t,
                            viewportPositioner__right: s,
                            viewportPositioner__top: i,
                            viewportPositioner__bottom: o,
                            viewportPositioner__horizontalInset: n,
                            viewportPositioner__verticalInset: r
                        } = this.props.managedClasses, l = this.state.currentHorizontalPosition, h = this.state.currentVerticalPosition, c = h === g.insetTop || h === g.insetBottom, d = l === b.insetLeft || l === b.insetRight;
                        return super.generateClassNames((0, a.A)(e, [t, l === b.left || l === b.insetLeft], [s, l === b.right || l === b.insetRight], [n, d], [i, h === g.top || h === g.insetTop], [o, h === g.bottom || h === g.insetBottom], [r, c]))
                    }
                }
                u.displayName = `${c.k}ViewportPositioner`, u.contextType = p, u.defaultProps = {
                    horizontalPositioningMode: d.tg.uncontrolled,
                    defaultHorizontalPosition: d.kv.uncontrolled,
                    verticalPositioningMode: d.tg.adjacent,
                    defaultVerticalPosition: d.Lp.bottom,
                    horizontalAlwaysInView: !1,
                    verticalAlwaysInView: !1,
                    verticalLockToDefault: !1,
                    horizontalLockToDefault: !1,
                    fixedAfterInitialPlacement: !1,
                    scaleToFit: !1,
                    delayContentInstanciation: !1,
                    managedClasses: {}
                }, u.contextType = p;
                const m = u
            },
            10736: (e, t, s) => {
                var i, a, o;
                s.d(t, {
                        kv: () => i,
                        Lp: () => a,
                        tg: () => o
                    }),
                    function(e) {
                        e.left = "left", e.right = "right", e.uncontrolled = "uncontrolled"
                    }(i || (i = {})),
                    function(e) {
                        e.top = "top", e.bottom = "bottom", e.uncontrolled = "uncontrolled"
                    }(a || (a = {})),
                    function(e) {
                        e.uncontrolled = "uncontrolled", e.adjacent = "adjacent", e.inset = "inset"
                    }(o || (o = {}))
            }
        },
        s = {};

    function i(e) {
        var a = s[e];
        if (void 0 !== a) return a.exports;
        var o = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
    }
    i.m = t, e = [], i.O = (t, s, a, o) => {
        if (!s) {
            var n = 1 / 0;
            for (h = 0; h < e.length; h++) {
                for (var [s, a, o] = e[h], r = !0, l = 0; l < s.length; l++)(!1 & o || n >= o) && Object.keys(i.O).every((e => i.O[e](s[l]))) ? s.splice(l--, 1) : (r = !1, o < n && (n = o));
                r && (e.splice(h--, 1), t = a())
            }
            return t
        }
        o = o || 0;
        for (var h = e.length; h > 0 && e[h - 1][2] > o; h--) e[h] = e[h - 1];
        e[h] = [s, a, o]
    }, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, i.e = () => Promise.resolve(), i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), i.j = 4185, (() => {
        var e = {
            4185: 0
        };
        i.O.j = t => 0 === e[t];
        var t = (t, s) => {
                var a, o, [n, r, l] = s,
                    h = 0;
                for (a in r) i.o(r, a) && (i.m[a] = r[a]);
                if (l) var c = l(i);
                for (t && t(s); h < n.length; h++) o = n[h], i.o(e, o) && e[o] && e[o][0](), e[n[h]] = 0;
                return i.O(c)
            },
            s = self.webpackChunkedge_common = self.webpackChunkedge_common || [];
        s.forEach(t.bind(null, 0)), s.push = t.bind(null, s.push.bind(s))
    })();
    var a = i.O(void 0, [7692, 3197], (() => i(82870)));
    a = i.O(a)
})();