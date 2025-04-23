"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 5477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 1576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7157);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2800);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6249);

        
      const { processEnv } = __webpack_require__(9936)
      processEnv([])
    
        
        const runtimeConfig = {}
        ;
        

        

        const rewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
          ? {
            afterFiles: private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
          }
          : private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg

        const apiHandler = (0,next_dist_build_webpack_loaders_next_serverless_loader_api_handler__WEBPACK_IMPORTED_MODULE_2__/* .getApiHandler */ .Y)({
          pageModule: __webpack_require__(3449),
          rewrites: rewrites,
          i18n: undefined,
          page: "/api/preview",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"0fe30d617c35be05e1f10ad6df7fc78b",previewModeSigningKey:"ac2af35f38182ececb1bc44fd9572f3b12058a8097e365acf736b02164ffad1a",previewModeEncryptionKey:"1cd6fff1849ebb5bce5b2356c83f34fd2d856909442d76164b76a28cf797958b"}
        })
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);
      

/***/ }),

/***/ 3449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/setPreviewData.js
var setPreviewData = __webpack_require__(2965);
// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/redirectToPreviewURL.js
var redirectToPreviewURL = __webpack_require__(815);
// EXTERNAL MODULE: ./node_modules/@prismicio/client/dist/getRepositoryName.js
var getRepositoryName = __webpack_require__(7215);
// EXTERNAL MODULE: ./node_modules/@prismicio/client/dist/client.js + 20 modules
var dist_client = __webpack_require__(3854);
// EXTERNAL MODULE: ./node_modules/@prismicio/next/dist/enableAutoPreviews.js
var enableAutoPreviews = __webpack_require__(3139);
;// CONCATENATED MODULE: ./sm.json
const sm_namespaceObject = JSON.parse('{"_d":"https://clarosur.cdn.prismic.io/api/v2"}');
;// CONCATENATED MODULE: ./prismicio.js



/**
 * The project's Prismic repository name.
 */ const endpoint = sm_namespaceObject._d;
const accessToken = sm_namespaceObject.apiAccessToken;
const defaultLanguage = "en-us";
const repositoryName = getRepositoryName/* getRepositoryName */._(sm_namespaceObject._d);
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
    const client = dist_client/* createClient */.eI(endpoint, {
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

;// CONCATENATED MODULE: ./pages/api/preview.js


/* harmony default export */ const preview = (async (req, res)=>{
    const client = createClient({
        req
    });
    await (0,setPreviewData/* setPreviewData */.m)({
        req,
        res
    });
    await (0,redirectToPreviewURL/* redirectToPreviewURL */.u)({
        req,
        res,
        client,
        linkResolver: linkResolver
    });
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [458,868,800], () => (__webpack_exec__(752)));
module.exports = __webpack_exports__;

})();