(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SearchForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SearchForm = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "816b85f4857d482834069b23705362641874a375084d13222f7664de7dc566ce") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "816b85f4857d482834069b23705362641874a375084d13222f7664de7dc566ce";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [locations, setLocations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [fromSuggestions, setFromSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [toSuggestions, setToSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [showFromSuggestions, setShowFromSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showToSuggestions, setShowToSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fromRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            const fetchLocations = async ()=>{
                ;
                try {
                    const res = await fetch("/api/locations");
                    if (res.ok) {
                        const data = await res.json();
                        setLocations(data);
                    }
                } catch (t5) {
                    const error = t5;
                    console.error("Failed to fetch locations", error);
                }
            };
            fetchLocations();
        };
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== from || $[7] !== locations) {
        t5 = ()=>{
            if (from) {
                setFromSuggestions(locations.filter((city)=>city.toLowerCase().includes(from.toLowerCase())));
            } else {
                setFromSuggestions([]);
            }
        };
        t6 = [
            from,
            locations
        ];
        $[6] = from;
        $[7] = locations;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[10] !== locations || $[11] !== to) {
        t7 = ()=>{
            if (to) {
                setToSuggestions(locations.filter((city_0)=>city_0.toLowerCase().includes(to.toLowerCase())));
            } else {
                setToSuggestions([]);
            }
        };
        t8 = [
            to,
            locations
        ];
        $[10] = locations;
        $[11] = to;
        $[12] = t7;
        $[13] = t8;
    } else {
        t7 = $[12];
        t8 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    let t10;
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ()=>{
            const handleClickOutside = (event)=>{
                if (fromRef.current && !fromRef.current.contains(event.target)) {
                    setShowFromSuggestions(false);
                }
                if (toRef.current && !toRef.current.contains(event.target)) {
                    setShowToSuggestions(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return ()=>document.removeEventListener("mousedown", handleClickOutside);
        };
        t10 = [];
        $[14] = t10;
        $[15] = t9;
    } else {
        t10 = $[14];
        t9 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    let t11;
    if ($[16] !== date || $[17] !== from || $[18] !== router || $[19] !== to) {
        t11 = ()=>{
            if (from && to && date) {
                router.push(`/booking?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`);
            } else {
                const missing = [];
                if (!from) {
                    missing.push("From City");
                }
                if (!to) {
                    missing.push("To City");
                }
                if (!date) {
                    missing.push("Journey Date");
                }
                alert(`Please fill in the following fields: ${missing.join(", ")}`);
            }
        };
        $[16] = date;
        $[17] = from;
        $[18] = router;
        $[19] = to;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const handleSearch = t11;
    let t12;
    let t13;
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0,
            y: 20
        };
        t13 = {
            opacity: 1,
            y: 0
        };
        t14 = {
            delay: 0.2
        };
        $[21] = t12;
        $[22] = t13;
        $[23] = t14;
    } else {
        t12 = $[21];
        t13 = $[22];
        t14 = $[23];
    }
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 border-b border-white/10 pb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-white font-semibold border-b-2 border-indigo-500 pb-4 -mb-4.5 px-2",
                    children: "Bus Tickets"
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 192,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-gray-400 font-medium hover:text-white transition-colors pb-4 -mb-4 px-2",
                    children: "Charter"
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 192,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "text-gray-400 font-medium hover:text-white transition-colors pb-4 -mb-4 px-2",
                    children: "Hotels"
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 192,
                    columnNumber: 294
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 192,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-gray-300 mb-1.5 ml-1",
            children: "From"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "ml-3 text-indigo-400 w-5 h-5 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    let t19;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = (e)=>{
            setFrom(e.target.value);
            setShowFromSuggestions(true);
        };
        t19 = ()=>setShowFromSuggestions(true);
        $[27] = t18;
        $[28] = t19;
    } else {
        t18 = $[27];
        t19 = $[28];
    }
    let t20;
    if ($[29] !== from) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all hover:bg-white/10",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: from,
                    onChange: t18,
                    onFocus: t19,
                    placeholder: "Departure City",
                    className: "w-full bg-transparent border-none text-white placeholder-gray-500 py-3 px-3 focus:outline-none text-sm font-medium"
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 227,
                    columnNumber: 197
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = from;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== fromSuggestions || $[32] !== showFromSuggestions) {
        t21 = showFromSuggestions && fromSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            className: "absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl mt-2 max-h-48 overflow-y-auto z-50 shadow-xl",
            children: fromSuggestions.map((city_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    onClick: ()=>{
                        setFrom(city_1);
                        setShowFromSuggestions(false);
                    },
                    className: "px-4 py-2 hover:bg-indigo-500/20 text-gray-300 hover:text-white cursor-pointer transition-colors text-sm",
                    children: city_1
                }, city_1, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 244,
                    columnNumber: 195
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 235,
            columnNumber: 64
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = fromSuggestions;
        $[32] = showFromSuggestions;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] !== t20 || $[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group md:col-span-1",
            ref: fromRef,
            children: [
                t16,
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t20;
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-gray-300 mb-1.5 ml-1",
            children: "To"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "ml-3 text-pink-400 w-5 h-5 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = (e_0)=>{
            setTo(e_0.target.value);
            setShowToSuggestions(true);
        };
        t27 = ()=>setShowToSuggestions(true);
        $[41] = t26;
        $[42] = t27;
    } else {
        t26 = $[41];
        t27 = $[42];
    }
    let t28;
    if ($[43] !== to) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all hover:bg-white/10",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: to,
                    onChange: t26,
                    onFocus: t27,
                    placeholder: "Destination City",
                    className: "w-full bg-transparent border-none text-white placeholder-gray-500 py-3 px-3 focus:outline-none text-sm font-medium"
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 301,
                    columnNumber: 197
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = to;
        $[44] = t28;
    } else {
        t28 = $[44];
    }
    let t29;
    if ($[45] !== showToSuggestions || $[46] !== toSuggestions) {
        t29 = showToSuggestions && toSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].ul, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            className: "absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl mt-2 max-h-48 overflow-y-auto z-50 shadow-xl",
            children: toSuggestions.map((city_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    onClick: ()=>{
                        setTo(city_2);
                        setShowToSuggestions(false);
                    },
                    className: "px-4 py-2 hover:bg-indigo-500/20 text-gray-300 hover:text-white cursor-pointer transition-colors text-sm",
                    children: city_2
                }, city_2, false, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 318,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 309,
            columnNumber: 60
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = showToSuggestions;
        $[46] = toSuggestions;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t29;
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] !== t28 || $[51] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group md:col-span-1",
            ref: toRef,
            children: [
                t24,
                t28,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t28;
        $[51] = t30;
        $[52] = t31;
    } else {
        t31 = $[52];
    }
    let t32;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-xs font-medium text-gray-300 mb-1.5 ml-1",
            children: "Journey Date"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 347,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t32;
    } else {
        t32 = $[53];
    }
    let t33;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "ml-3 text-cyan-400 w-5 h-5 flex-shrink-0"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 354,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t33;
    } else {
        t33 = $[54];
    }
    let t34;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = (e_1)=>setDate(e_1.target.value);
        $[55] = t34;
    } else {
        t34 = $[55];
    }
    let t35;
    if ($[56] !== date) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group md:col-span-1",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center bg-white/5 border border-white/10 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-white/10 transition-all hover:bg-white/10",
                    children: [
                        t33,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: date,
                            onChange: t34,
                            className: "w-full bg-transparent border-none text-white placeholder-gray-500 py-3 px-3 focus:outline-none text-sm font-medium min-h-[46px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchForm.tsx",
                            lineNumber: 368,
                            columnNumber: 248
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchForm.tsx",
                    lineNumber: 368,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = date;
        $[57] = t35;
    } else {
        t35 = $[57];
    }
    let t36;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "mr-2 w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 376,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t36;
    } else {
        t36 = $[58];
    }
    let t37;
    if ($[59] !== handleSearch) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "premium",
                onClick: handleSearch,
                className: "w-full h-[46px] rounded-xl text-md font-semibold shadow-indigo-500/20",
                children: [
                    t36,
                    " Search Buses"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 383,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 383,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = handleSearch;
        $[60] = t37;
    } else {
        t37 = $[60];
    }
    let t38;
    if ($[61] !== t23 || $[62] !== t31 || $[63] !== t35 || $[64] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t12,
            animate: t13,
            transition: t14,
            className: "w-full max-w-4xl mx-auto p-6 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative z-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6",
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-4 items-end",
                        children: [
                            t23,
                            t31,
                            t35,
                            t37
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SearchForm.tsx",
                        lineNumber: 391,
                        columnNumber: 248
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchForm.tsx",
                lineNumber: 391,
                columnNumber: 206
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/SearchForm.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t23;
        $[62] = t31;
        $[63] = t35;
        $[64] = t37;
        $[65] = t38;
    } else {
        t38 = $[65];
    }
    return t38;
};
_s(SearchForm, "kolwa1BsYIJ/bzraBIB0zQ6YquU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SearchForm;
const __TURBOPACK__default__export__ = SearchForm;
var _c;
__turbopack_context__.k.register(_c, "SearchForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MapPin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }
    ]
];
const MapPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map-pin", __iconNode);
;
 //# sourceMappingURL=map-pin.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapPin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_387a2fd9._.js.map