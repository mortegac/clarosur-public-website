"use strict";
exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 1635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6548);



const NotFoundPage = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Page Not Found"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    padding: 120
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        style: {
                            fontFamily: "Quicksand,sans-serif"
                        },
                        children: "Page Not Found"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_prismicio_react__WEBPACK_IMPORTED_MODULE_2__/* .PrismicLink */ .wK, {
                            href: "/",
                            children: "Go to the homepage \u2192"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);


/***/ }),

/***/ 5265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@prismicio/react/dist/index.js + 1 modules
var dist = __webpack_require__(6548);
// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/PrismicPreview.js + 2 modules
var PrismicPreview = __webpack_require__(1874);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
// EXTERNAL MODULE: ./prismicio.js + 1 modules
var prismicio = __webpack_require__(1322);
;// CONCATENATED MODULE: ./components/styles/GlobalStyle.js

const GlobalStyle = styled_components_cjs/* createGlobalStyle */.vJ`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-family: ${({ theme  })=>theme.typography.fontFamily};
		letter-spacing: ${({ theme  })=>theme.typography.letterSpacing};
				h1 {
					font-size: ${(props)=>props?.theme?.typography?.h1?.desktop?.fontSize || "55px"};
					font-weight: ${(props)=>props?.theme?.typography?.h1?.desktop?.fontWeight || "800"};
					line-height: ${(props)=>props?.theme?.typography?.h1?.desktop?.lineHeight || "70px"};
					@media(max-width: ${(props)=>props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props)=>props?.theme?.typography?.h1?.mobile?.fontSize || "40px"};
						font-weight: ${(props)=>props?.theme?.typography?.h1?.mobile?.fontWeight || "800"};
						line-height: ${(props)=>props?.theme?.typography?.h1?.mobile?.lineHeight || "52px"};
					}
				}
				h2 {
					width: 100%;
					margin: 0;
					margin-bottom: 16px;
					text-align: left;
					font-size: ${(props)=>props?.theme?.typography?.h2?.desktop?.fontSize || "40px"};
					font-weight: ${(props)=>props?.theme?.typography?.h2?.desktop?.fontWeight || "800"};
					line-height: ${(props)=>props?.theme?.typography?.h2?.desktop?.lineHeight || "52px"};
					@media(max-width: ${(props)=>props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props)=>props?.theme?.typography?.h2?.mobile?.fontSize || "32px"};
						font-weight: ${(props)=>props?.theme?.typography?.h2?.mobile?.fontWeight || "800"};
						line-height: ${(props)=>props?.theme?.typography?.h2?.mobile?.lineHeight || "40px"};
					}
					@media(max-width: ${(props)=>props?.theme?.breakpoints?.sm || "600px"}){
						text-align: left;
					}
				}
				h3 {
					margin: 0;
					margin-bottom: 8px;
					font-size: ${(props)=>props?.theme?.typography?.h3?.desktop?.fontSize || "16px"};
					font-weight: ${(props)=>props?.theme?.typography?.h3?.desktop?.fontWeight || "700"};
					line-height: ${(props)=>props?.theme?.typography?.h3?.desktop?.lineHeight || "24px"};
					@media(max-width: ${(props)=>props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props)=>props?.theme?.typography?.h3?.mobile?.fontSize || "16px"};
						font-weight: ${(props)=>props?.theme?.typography?.h3?.mobile?.fontWeight || "700"};
						line-height: ${(props)=>props?.theme?.typography?.h3?.mobile?.lineHeight || "24px"};
					}
				}
				p {
					margin: 0;
					font-size: ${(props)=>props?.theme?.typography?.p?.desktop?.fontSize || "14px"};
					font-weight: ${(props)=>props?.theme?.typography?.p?.desktop?.fontWeight || "400"};
					line-height: ${(props)=>props?.theme?.typography?.p?.desktop?.lineHeight || "24px"};
					@media(max-width: ${(props)=>props?.theme?.breakpoints?.md || "960px"}){
						font-size: ${(props)=>props?.theme?.typography?.p?.mobile?.fontSize || "14px"};
						font-weight: ${(props)=>props?.theme?.typography?.p?.mobile?.fontWeight || "400"};
						line-height: ${(props)=>props?.theme?.typography?.p?.mobile?.lineHeight || "24px"};
					}
					@media(max-width: ${(props)=>props?.theme?.breakpoints?.sm || "600px"}){
						text-align: left;
					}
				}
				a { 
					font-family: ${(props)=>props?.theme?.typography?.fontFamily || "'Inter', sans-serif"};
					font-weight: 700;
					text-decoration: none;
					color: ${(props)=>props?.theme?.colors?.primary || "#F95C00"};
					position: relative;
				}
				label{
					font-family: ${(props)=>props?.theme?.typography?.fontFamily || "'Inter', sans-serif"};
				}
    }
    * {
        box-sizing: inherit;
        -webkit-tap-highlight-color: transparent;
    }

 
`;

;// CONCATENATED MODULE: ./components/styles/theme.js
const Theme = {
    name: "clarosur.cl",
    optOutHeight: "64px",
    sectionContainer: {
        padding: {
            desktop: "64px 0px",
            mobile: "0px 0px"
        }
    },
    sliceContainer: {
        padding: {
            desktop: "0px 24px",
            mobile: "0px 24px"
        },
        maxWidth: "1136px"
    },
    typography: {
        fontFamily: "Quicksand, sans-serif",
        letterSpacing: "0px",
        h1: {
            desktop: {
                fontSize: "52px",
                fontWeight: "800",
                lineHeight: "60px"
            },
            mobile: {
                fontSize: "40px",
                fontWeight: "800",
                lineHeight: "52px"
            }
        },
        h2: {
            desktop: {
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "64px"
            },
            mobile: {
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "40px"
            }
        },
        h3: {
            desktop: {
                fontSize: "24px",
                fontWeight: "500",
                lineHeight: "32px"
            },
            mobile: {
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px"
            }
        },
        customSpan: {
            desktop: {
                fontSize: "64px",
                fontWeight: "800",
                lineHeight: "62px"
            },
            mobile: {
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "24px"
            }
        },
        subtitleReg: {
            desktop: {
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px"
            },
            mobile: {
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px"
            }
        },
        subtitleBold: {
            desktop: {
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "22px"
            },
            mobile: {
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px"
            }
        },
        p: {
            desktop: {
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px"
            },
            mobile: {
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px"
            }
        },
        btnText: {
            desktop: {
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px"
            },
            mobile: {
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px"
            }
        }
    },
    colors: {
        primary: "#67614B",
        // #1C2146
        secondary: "#ffffff",
        bgHover: "#363636",
        bgColorPrimary: "#078FF1",
        bgColorSecondary: "#FBE3D5",
        bgColorTertiary: "#0066CC",
        bgColorLight: "FAF2ED",
        bgColorQuaternary: "#992430",
        bgColorCoral: "#F5E9EA",
        white: "#fff",
        grey: "#363636",
        textPrimary: "#323130",
        textSecondary: "#605E5C",
        textTertiary: "#A19F9D",
        textQuaternary: "#7C151F",
        textDarkPrimary: "#001133",
        textTertiaryBtn: "rgb(62, 71, 88)",
        textLightPrimary: "#FFFFFF",
        textLightSecondary: "#323130",
        textLightTertiary: "#323130",
        textDarkblue: "#001133",
        lightGray: "#323130",
        lighterGray: "#605E5C"
    },
    button: {
        borderRadius: "22px",
        height: "46px",
        padding: "12px 30px",
        bgPrimary: "#3FBB49",
        bgPrimaryOver: "#49DE55"
    },
    breakpoints: {
        xs: "450px",
        sm: "600px",
        md: "960px",
        xl: "1024px"
    }
};

;// CONCATENATED MODULE: ./components/styles/index.js




;// CONCATENATED MODULE: ./utils/gtag.js
// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
// ANALITYCS
const GA_TRACKING_ID = "";
// export const GA_TRACKING_ID = "G-6KSGYXPMZ7"
// TODO: Chequear si es correcto el  GA_TRACKING_ID
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    if (window.hasOwnProperty("gtag")) window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtag_event = ({ action , category , label , value  })=>{
    if (window) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
};

;// CONCATENATED MODULE: ./pages/_app.js












const internalLinkComponent = ({ href , children , ...props })=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
            ...props,
            children: children
        })
    });
function App({ Component , pageProps  }) {
    const router = (0,next_router.useRouter)();
    (0,react.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "true"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        });
        `
                        }
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(dist/* PrismicProvider */.cp, {
                linkResolver: prismicio/* linkResolver */.kG,
                internalLinkComponent: internalLinkComponent,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(PrismicPreview/* PrismicPreview */.N, {
                    repositoryName: prismicio/* repositoryName */.AF,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((script_default()), {
                            strategy: "afterInteractive",
                            src: `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(styled_components_cjs/* ThemeProvider */.f6, {
                            theme: Theme,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(GlobalStyle, {
                                    theme: Theme
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(Component, {
                                    ...pageProps
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);



//Dont Touch!
class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.googleapis.com"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "preconnect",
                            href: "https://fonts.gstatic.com",
                            crossOrigin: "true"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap",
                            rel: "stylesheet"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
    static async getInitialProps(ctx) {
        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__/* .ServerStyleSheet */ .qH();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(App, {
                                ...props
                            }))
                });
            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                })
            };
        } finally{
            sheet.seal();
        }
    }
};


/***/ }),

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eI": () => (/* binding */ createClient),
  "Ew": () => (/* binding */ hrefResolver),
  "kG": () => (/* binding */ linkResolver),
  "AF": () => (/* binding */ repositoryName)
});

// UNUSED EXPORTS: accessToken, defaultLanguage, endpoint, locales, repository

// EXTERNAL MODULE: ./node_modules/@prismicio/client/dist/index.js
var dist = __webpack_require__(8468);
// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/enableAutoPreviews.js
var enableAutoPreviews = __webpack_require__(5596);
;// CONCATENATED MODULE: ./sm.json
const sm_namespaceObject = JSON.parse('{"_d":"https://clarosur.cdn.prismic.io/api/v2"}');
;// CONCATENATED MODULE: ./prismicio.js



/**
 * The project's Prismic repository name.
 */ const endpoint = sm_namespaceObject._d;
const accessToken = sm_namespaceObject.apiAccessToken;
const defaultLanguage = "en-us";
const repositoryName = dist/* getRepositoryName */._k(sm_namespaceObject._d);
/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */ const linkResolver = (doc)=>{
    const properties = doc?._meta || doc;
    // if (properties.type === "homepage") {
    //   return properties.lang === defaultLanguage
    //     ? "/en-us/"
    //     : `/${properties.lang}`;
    // }
    if (properties.type === "homepage") {
        return `/`;
    }
    if (properties.type === "page") {
        return `/${properties.uid}`;
    }
    return "/";
};
let repository = {};
let locales = (/* unused pure expression or super */ null && ([]));
function createClient(config = {}) {
    const client = dist/* createClient */.eI(endpoint, {
        ...config
    });
    (0,enableAutoPreviews/* enableAutoPreviews */.L)({
        client,
        previewData: config.previewData,
        req: config.req
    });
    return client;
}
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */ // Additional helper function for Next/Link component
const hrefResolver = (doc)=>{
    if (doc.type === "homepage") {
        return `/`;
    }
    if (doc.type === "page") {
        return `/${doc.uid}`;
    }
    return "/";
};


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-0d1b80a048d4787e.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/HWKRAIWoC7ySf_auDiiWh/_buildManifest.js","static/HWKRAIWoC7ySf_auDiiWh/_ssgManifest.js"],"rootMainFiles":[],"pages":{"/":["static/chunks/webpack-6c8afd30f33c9373.js","static/chunks/framework-ae4f43955bfa5ddc.js","static/chunks/main-419124cc5d54ea8d.js","static/chunks/53-388b203a77f601e5.js","static/chunks/334-e82f484d768c1df5.js","static/chunks/535-ec438348271c70cd.js","static/css/051f3b3e26ae0d42.css","static/chunks/pages/index-135cd2ae00f8f3cc.js"],"/404":["static/chunks/webpack-6c8afd30f33c9373.js","static/chunks/framework-ae4f43955bfa5ddc.js","static/chunks/main-419124cc5d54ea8d.js","static/chunks/pages/404-63bc64cfe2332490.js"],"/[uid]":["static/chunks/webpack-6c8afd30f33c9373.js","static/chunks/framework-ae4f43955bfa5ddc.js","static/chunks/main-419124cc5d54ea8d.js","static/chunks/53-388b203a77f601e5.js","static/chunks/334-e82f484d768c1df5.js","static/chunks/535-ec438348271c70cd.js","static/css/051f3b3e26ae0d42.css","static/chunks/pages/[uid]-f00a5f5b30b4f010.js"],"/_app":["static/chunks/webpack-6c8afd30f33c9373.js","static/chunks/framework-ae4f43955bfa5ddc.js","static/chunks/main-419124cc5d54ea8d.js","static/chunks/pages/_app-7bc715ceffb80ec5.js"],"/_error":["static/chunks/webpack-6c8afd30f33c9373.js","static/chunks/framework-ae4f43955bfa5ddc.js","static/chunks/main-419124cc5d54ea8d.js","static/chunks/pages/_error-7397496ca01950b1.js"],"/slice-simulator":["static/chunks/webpack-6c8afd30f33c9373.js","static/chunks/framework-ae4f43955bfa5ddc.js","static/chunks/main-419124cc5d54ea8d.js","static/chunks/53-388b203a77f601e5.js","static/chunks/681-d1b5d72193481587.js","static/chunks/334-e82f484d768c1df5.js","static/css/051f3b3e26ae0d42.css","static/chunks/pages/slice-simulator-e682fdb843c36f4c.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;