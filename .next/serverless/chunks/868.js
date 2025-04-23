"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 3139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ enableAutoPreviews)
/* harmony export */ });
const isPrismicNextPreviewData = (previewData) => {
  return typeof previewData === "object" && "ref" in previewData;
};
const enableAutoPreviews = (config) => {
  if ("previewData" in config && config.previewData) {
    const { previewData } = config;
    if (isPrismicNextPreviewData(previewData) && previewData.ref) {
      config.client.queryContentFromRef(previewData.ref);
    }
  } else if ("req" in config && config.req) {
    config.client.enableAutoPreviewsFromReq(config.req);
  }
};

//# sourceMappingURL=enableAutoPreviews.js.map


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ redirectToPreviewURL)
/* harmony export */ });
const isPrismicNextQuery = (query) => {
  return typeof query.documentId === "string" && typeof query.token === "string";
};
async function redirectToPreviewURL(config) {
  const defaultURL = config.defaultURL || "/";
  const basePath = config.basePath || "";
  if (isPrismicNextQuery(config.req.query)) {
    const previewUrl = await config.client.resolvePreviewURL({
      linkResolver: config.linkResolver,
      defaultURL,
      documentID: config.req.query.documentId,
      previewToken: config.req.query.token
    });
    config.res.redirect(basePath + previewUrl);
    return;
  }
  config.res.redirect(basePath + defaultURL);
}

//# sourceMappingURL=redirectToPreviewURL.js.map


/***/ }),

/***/ 2965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ setPreviewData)
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4456);

function setPreviewData({ req, res }) {
  const ref = req.query.token || req.cookies[_prismicio_client__WEBPACK_IMPORTED_MODULE_0__/* .preview */ .R];
  if (ref) {
    res.setPreviewData({ ref });
  }
}

//# sourceMappingURL=setPreviewData.js.map


/***/ }),

/***/ 4028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ PrismicError)
/* harmony export */ });
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class PrismicError extends Error {
  constructor(message = "An invalid API response was returned", url, response) {
    super(message);
    __publicField(this, "url");
    __publicField(this, "response");
    this.url = url;
    this.response = response;
  }
}

//# sourceMappingURL=PrismicError.js.map


/***/ }),

/***/ 3854:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "eI": () => (/* binding */ createClient)
});

// UNUSED EXPORTS: Client, GET_ALL_QUERY_DELAY, REPOSITORY_CACHE_TTL

;// CONCATENATED MODULE: ./node_modules/@prismicio/types/dist/value/link.js
const LinkType = {
  Any: "Any",
  Document: "Document",
  Media: "Media",
  Web: "Web"
};

//# sourceMappingURL=link.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/helpers/dist/documentToLinkField.js

const documentToLinkField = (prismicDocument) => {
  var _a;
  return {
    link_type: LinkType.Document,
    id: prismicDocument.id,
    uid: prismicDocument.uid ?? void 0,
    type: prismicDocument.type,
    tags: prismicDocument.tags,
    lang: prismicDocument.lang,
    url: prismicDocument.url ?? void 0,
    slug: (_a = prismicDocument.slugs) == null ? void 0 : _a[0],
    // The REST API does not include a `data` property if the data
    // object is empty.
    //
    // A presence check for `prismicDocument.data` is done to
    // support partial documents. While `documentToLinkField` is
    // not typed to accept partial documents, passing a partial
    // document can happen in untyped projects.
    ...prismicDocument.data && Object.keys(prismicDocument.data).length > 0 ? { data: prismicDocument.data } : {}
  };
};

//# sourceMappingURL=documentToLinkField.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/helpers/dist/asLink.js


const asLink = (linkFieldOrDocument, linkResolver) => {
  if (!linkFieldOrDocument) {
    return null;
  }
  const linkField = (
    // prettier-ignore
    // @ts-expect-error - Bug in TypeScript 4.9: https://github.com/microsoft/TypeScript/issues/51501
    // TODO: Remove the `prettier-ignore` comment when this bug is fixed.
    "link_type" in linkFieldOrDocument ? linkFieldOrDocument : documentToLinkField(linkFieldOrDocument)
  );
  switch (linkField.link_type) {
    case LinkType.Media:
    case LinkType.Web:
      return "url" in linkField ? linkField.url : null;
    case LinkType.Document: {
      if ("id" in linkField && linkResolver) {
        const resolvedURL = linkResolver(linkField);
        if (resolvedURL != null) {
          return resolvedURL;
        }
      }
      if ("url" in linkField && linkField.url) {
        return linkField.url;
      }
      return null;
    }
    case LinkType.Any:
    default:
      return null;
  }
};

//# sourceMappingURL=asLink.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/castArray.js
const castArray = (a) => Array.isArray(a) ? a : [a];

//# sourceMappingURL=castArray.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/appendPredicates.js

const appendPredicates = (objWithPredicates = {}, predicates) => {
  return {
    ...objWithPredicates,
    predicates: [
      ...objWithPredicates.predicates || [],
      ...castArray(predicates)
    ]
  };
};

//# sourceMappingURL=appendPredicates.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/castThunk.js
const castThunk = (a) => typeof a === "function" ? a : () => a;

//# sourceMappingURL=castThunk.js.map

// EXTERNAL MODULE: ./node_modules/@prismicio/client/dist/PrismicError.js
var PrismicError = __webpack_require__(4028);
;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findRef.js

const findRef = (refs, predicate) => {
  const ref = refs.find((ref2) => predicate(ref2));
  if (!ref) {
    throw new PrismicError/* PrismicError */.b("Ref could not be found.", void 0, void 0);
  }
  return ref;
};

//# sourceMappingURL=findRef.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findMasterRef.js

const findMasterRef = (refs) => {
  return findRef(refs, (ref) => ref.isMasterRef);
};

//# sourceMappingURL=findMasterRef.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findRefByID.js

const findRefByID = (refs, id) => {
  return findRef(refs, (ref) => ref.id === id);
};

//# sourceMappingURL=findRefByID.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/findRefByLabel.js

const findRefByLabel = (refs, label) => {
  return findRef(refs, (ref) => ref.label === label);
};

//# sourceMappingURL=findRefByLabel.js.map

// EXTERNAL MODULE: ./node_modules/@prismicio/client/dist/cookie.js
var dist_cookie = __webpack_require__(4456);
;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/getPreviewCookie.js

const readValue = (value) => {
  return value.replace(/%3B/g, ";");
};
const getPreviewCookie = (cookieJar) => {
  const cookies = cookieJar.split("; ");
  let value;
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const name = readValue(parts[0]).replace(/%3D/g, "=");
    if (name === dist_cookie/* preview */.R) {
      value = readValue(parts.slice(1).join("="));
      continue;
    }
  }
  return value;
};

//# sourceMappingURL=getPreviewCookie.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/lib/minifyGraphQLQuery.js
const minifyGraphQLQuery = (query) => {
  return query.replace(/(\n| )*( |{|})(\n| )*/gm, (_chars, _spaces, brackets) => brackets);
};

//# sourceMappingURL=minifyGraphQLQuery.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/ForbiddenError.js

class ForbiddenError extends PrismicError/* PrismicError */.b {
}

//# sourceMappingURL=ForbiddenError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/NotFoundError.js

class NotFoundError extends PrismicError/* PrismicError */.b {
}

//# sourceMappingURL=NotFoundError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/ParsingError.js

class ParsingError extends PrismicError/* PrismicError */.b {
}

//# sourceMappingURL=ParsingError.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/buildQueryURL.js

const RENAMED_PARAMS = {
  accessToken: "access_token"
};
const castOrderingToString = (ordering) => typeof ordering === "string" ? ordering : [
  ordering.field,
  ordering.direction === "desc" ? ordering.direction : void 0
].filter(Boolean).join(" ");
const buildQueryURL = (endpoint, args) => {
  const { predicates, ...params } = args;
  const url = new URL(`documents/search`, `${endpoint}/`);
  if (predicates) {
    for (const predicate of castArray(predicates)) {
      url.searchParams.append("q", `[${predicate}]`);
    }
  }
  for (const k in params) {
    const name = RENAMED_PARAMS[k] ?? k;
    let value = params[k];
    if (name === "orderings") {
      const scopedValue = params[name];
      if (scopedValue != null) {
        const v = castArray(scopedValue).map((ordering) => castOrderingToString(ordering)).join(",");
        value = `[${v}]`;
      }
    } else if (name === "routes") {
      if (typeof params[name] === "object") {
        value = JSON.stringify(castArray(params[name]));
      }
    }
    if (value != null) {
      url.searchParams.set(name, castArray(value).join(","));
    }
  }
  return url.toString();
};

//# sourceMappingURL=buildQueryURL.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/isRepositoryName.js
const isRepositoryName = (input) => {
  return /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(input);
};

//# sourceMappingURL=isRepositoryName.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/getRepositoryEndpoint.js


const getRepositoryEndpoint = (repositoryName) => {
  if (isRepositoryName(repositoryName)) {
    return `https://${repositoryName}.cdn.prismic.io/api/v2`;
  } else {
    throw new PrismicError/* PrismicError */.b(`An invalid Prismic repository name was given: ${repositoryName}`, void 0, void 0);
  }
};

//# sourceMappingURL=getRepositoryEndpoint.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/isRepositoryEndpoint.js
const isRepositoryEndpoint = (input) => {
  try {
    new URL(input);
    return true;
  } catch {
    return false;
  }
};

//# sourceMappingURL=isRepositoryEndpoint.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/predicate.js
const formatValue = (value) => {
  if (Array.isArray(value)) {
    return `[${value.map(formatValue).join(", ")}]`;
  }
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (value instanceof Date) {
    return `${value.getTime()}`;
  }
  return `${value}`;
};
const pathWithArgsPredicate = (name) => {
  const fn = (path, ...args) => {
    const formattedArgs = args.map(formatValue).join(", ");
    const joiner = path && args.length ? ", " : "";
    return `[${name}(${path}${joiner}${formattedArgs})]`;
  };
  return fn;
};
const pathPredicate = (name) => {
  const predicateFn = pathWithArgsPredicate(name);
  const fn = (path) => {
    return predicateFn(path);
  };
  return fn;
};
const argsPredicate = (name) => {
  const predicateFn = pathWithArgsPredicate(name);
  const fn = (...args) => {
    return predicateFn("", ...args);
  };
  return fn;
};
const predicate = {
  at: pathWithArgsPredicate("at"),
  not: pathWithArgsPredicate("not"),
  any: pathWithArgsPredicate("any"),
  in: pathWithArgsPredicate("in"),
  fulltext: pathWithArgsPredicate("fulltext"),
  has: pathPredicate("has"),
  missing: pathPredicate("missing"),
  similar: argsPredicate("similar"),
  geopointNear: pathWithArgsPredicate("geopoint.near"),
  numberLessThan: pathWithArgsPredicate("number.lt"),
  numberGreaterThan: pathWithArgsPredicate("number.gt"),
  numberInRange: pathWithArgsPredicate("number.inRange"),
  dateAfter: pathWithArgsPredicate("date.after"),
  dateBefore: pathWithArgsPredicate("date.before"),
  dateBetween: pathWithArgsPredicate("date.between"),
  dateDayOfMonth: pathWithArgsPredicate("date.day-of-month"),
  dateDayOfMonthAfter: pathWithArgsPredicate("date.day-of-month-after"),
  dateDayOfMonthBefore: pathWithArgsPredicate("date.day-of-month-before"),
  dateDayOfWeek: pathWithArgsPredicate("date.day-of-week"),
  dateDayOfWeekAfter: pathWithArgsPredicate("date.day-of-week-after"),
  dateDayOfWeekBefore: pathWithArgsPredicate("date.day-of-week-before"),
  dateMonth: pathWithArgsPredicate("date.month"),
  dateMonthAfter: pathWithArgsPredicate("date.month-after"),
  dateMonthBefore: pathWithArgsPredicate("date.month-before"),
  dateYear: pathWithArgsPredicate("date.year"),
  dateHour: pathWithArgsPredicate("date.hour"),
  dateHourAfter: pathWithArgsPredicate("date.hour-after"),
  dateHourBefore: pathWithArgsPredicate("date.hour-before")
};

//# sourceMappingURL=predicate.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/client.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

















const MAX_PAGE_SIZE = 100;
const REPOSITORY_CACHE_TTL = 5e3;
const GET_ALL_QUERY_DELAY = 500;
const DEFUALT_RETRY_AFTER_MS = 1e3;
var RefStateMode;
(function(RefStateMode2) {
  RefStateMode2["Master"] = "Master";
  RefStateMode2["ReleaseID"] = "ReleaseID";
  RefStateMode2["ReleaseLabel"] = "ReleaseLabel";
  RefStateMode2["Manual"] = "Manual";
})(RefStateMode || (RefStateMode = {}));
const typePredicate = (documentType) => predicate.at("document.type", documentType);
const everyTagPredicate = (tags) => predicate.at("document.tags", castArray(tags));
const someTagsPredicate = (tags) => predicate.any("document.tags", castArray(tags));
const createClient = (repositoryNameOrEndpoint, options) => new Client(repositoryNameOrEndpoint, options);
class Client {
  constructor(repositoryNameOrEndpoint, options = {}) {
    __publicField(this, "endpoint");
    __publicField(this, "accessToken");
    __publicField(this, "routes");
    __publicField(this, "brokenRoute");
    __publicField(this, "fetchFn");
    __publicField(this, "fetchOptions");
    __publicField(this, "defaultParams");
    __publicField(this, "refState", {
      mode: RefStateMode.Master,
      autoPreviewsEnabled: true
    });
    __publicField(this, "cachedRepository");
    __publicField(this, "cachedRepositoryExpiration", 0);
    __publicField(this, "graphqlFetch", this.graphQLFetch.bind(this));
    if (isRepositoryEndpoint(repositoryNameOrEndpoint)) {
      if (false) {}
      this.endpoint = repositoryNameOrEndpoint;
    } else {
      this.endpoint = getRepositoryEndpoint(repositoryNameOrEndpoint);
    }
    this.accessToken = options.accessToken;
    this.routes = options.routes;
    this.brokenRoute = options.brokenRoute;
    this.fetchOptions = options.fetchOptions;
    this.defaultParams = options.defaultParams;
    if (options.ref) {
      this.queryContentFromRef(options.ref);
    }
    if (typeof options.fetch === "function") {
      this.fetchFn = options.fetch;
    } else if (typeof globalThis.fetch === "function") {
      this.fetchFn = globalThis.fetch;
    } else {
      throw new PrismicError/* PrismicError */.b("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
    }
    if (this.fetchFn === globalThis.fetch) {
      this.fetchFn = this.fetchFn.bind(globalThis);
    }
    this.graphQLFetch = this.graphQLFetch.bind(this);
  }
  enableAutoPreviews() {
    this.refState.autoPreviewsEnabled = true;
  }
  enableAutoPreviewsFromReq(req) {
    this.refState.httpRequest = req;
    this.refState.autoPreviewsEnabled = true;
  }
  disableAutoPreviews() {
    this.refState.autoPreviewsEnabled = false;
  }
  async query(predicates, params) {
    const url = await this.buildQueryURL({ ...params, predicates });
    return await this.fetch(url, params);
  }
  async get(params) {
    const url = await this.buildQueryURL(params);
    return await this.fetch(url, params);
  }
  async getFirst(params) {
    var _a;
    const actualParams = { ...params };
    if (!(params && params.page) && !(params == null ? void 0 : params.pageSize)) {
      actualParams.pageSize = ((_a = this.defaultParams) == null ? void 0 : _a.pageSize) ?? 1;
    }
    const url = await this.buildQueryURL(actualParams);
    const result = await this.fetch(url, params);
    const firstResult = result.results[0];
    if (firstResult) {
      return firstResult;
    }
    throw new PrismicError/* PrismicError */.b("No documents were returned", url, void 0);
  }
  async dangerouslyGetAll(params = {}) {
    var _a;
    const { limit = Infinity, ...actualParams } = params;
    const resolvedParams = {
      ...actualParams,
      pageSize: Math.min(limit, actualParams.pageSize || ((_a = this.defaultParams) == null ? void 0 : _a.pageSize) || MAX_PAGE_SIZE)
    };
    const documents = [];
    let latestResult;
    while ((!latestResult || latestResult.next_page) && documents.length < limit) {
      const page = latestResult ? latestResult.page + 1 : void 0;
      latestResult = await this.get({ ...resolvedParams, page });
      documents.push(...latestResult.results);
      if (latestResult.next_page) {
        await new Promise((res) => setTimeout(res, GET_ALL_QUERY_DELAY));
      }
    }
    return documents.slice(0, limit);
  }
  async getByID(id, params) {
    return await this.getFirst(appendPredicates(params, predicate.at("document.id", id)));
  }
  async getByIDs(ids, params) {
    return await this.get(appendPredicates(params, predicate["in"]("document.id", ids)));
  }
  async getAllByIDs(ids, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, predicate["in"]("document.id", ids)));
  }
  async getByUID(documentType, uid, params) {
    return await this.getFirst(appendPredicates(params, [
      typePredicate(documentType),
      predicate.at(`my.${documentType}.uid`, uid)
    ]));
  }
  async getByUIDs(documentType, uids, params) {
    return await this.get(appendPredicates(params, [
      typePredicate(documentType),
      predicate["in"](`my.${documentType}.uid`, uids)
    ]));
  }
  async getAllByUIDs(documentType, uids, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, [
      typePredicate(documentType),
      predicate["in"](`my.${documentType}.uid`, uids)
    ]));
  }
  async getSingle(documentType, params) {
    return await this.getFirst(appendPredicates(params, typePredicate(documentType)));
  }
  async getByType(documentType, params) {
    return await this.get(appendPredicates(params, typePredicate(documentType)));
  }
  async getAllByType(documentType, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, typePredicate(documentType)));
  }
  async getByTag(tag, params) {
    return await this.get(appendPredicates(params, someTagsPredicate(tag)));
  }
  async getAllByTag(tag, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, someTagsPredicate(tag)));
  }
  async getByEveryTag(tags, params) {
    return await this.get(appendPredicates(params, everyTagPredicate(tags)));
  }
  async getAllByEveryTag(tags, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, everyTagPredicate(tags)));
  }
  async getBySomeTags(tags, params) {
    return await this.get(appendPredicates(params, someTagsPredicate(tags)));
  }
  async getAllBySomeTags(tags, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, someTagsPredicate(tags)));
  }
  async getRepository(params) {
    const url = new URL(this.endpoint);
    if (this.accessToken) {
      url.searchParams.set("access_token", this.accessToken);
    }
    return await this.fetch(url.toString(), params);
  }
  async getRefs(params) {
    const repository = await this.getRepository(params);
    return repository.refs;
  }
  async getRefByID(id, params) {
    const refs = await this.getRefs(params);
    return findRefByID(refs, id);
  }
  async getRefByLabel(label, params) {
    const refs = await this.getRefs(params);
    return findRefByLabel(refs, label);
  }
  async getMasterRef(params) {
    const refs = await this.getRefs(params);
    return findMasterRef(refs);
  }
  async getReleases(params) {
    const refs = await this.getRefs(params);
    return refs.filter((ref) => !ref.isMasterRef);
  }
  async getReleaseByID(id, params) {
    const releases = await this.getReleases(params);
    return findRefByID(releases, id);
  }
  async getReleaseByLabel(label, params) {
    const releases = await this.getReleases(params);
    return findRefByLabel(releases, label);
  }
  async getTags(params) {
    try {
      const tagsForm = await this.getCachedRepositoryForm("tags", params);
      const url = new URL(tagsForm.action);
      if (this.accessToken) {
        url.searchParams.set("access_token", this.accessToken);
      }
      return await this.fetch(url.toString(), params);
    } catch {
      const repository = await this.getRepository(params);
      return repository.tags;
    }
  }
  async buildQueryURL({ signal, fetchOptions, ...params } = {}) {
    const ref = params.ref || await this.getResolvedRefString({ signal, fetchOptions });
    const integrationFieldsRef = params.integrationFieldsRef || (await this.getCachedRepository({ signal, fetchOptions })).integrationFieldsRef || void 0;
    return buildQueryURL(this.endpoint, {
      ...this.defaultParams,
      ...params,
      ref,
      integrationFieldsRef,
      routes: params.routes || this.routes,
      brokenRoute: params.brokenRoute || this.brokenRoute,
      accessToken: params.accessToken || this.accessToken
    });
  }
  async resolvePreviewURL(args) {
    var _a, _b;
    let documentID = args.documentID;
    let previewToken = args.previewToken;
    if (typeof globalThis.location !== "undefined") {
      const searchParams = new URLSearchParams(globalThis.location.search);
      documentID = documentID || searchParams.get("documentId");
      previewToken = previewToken || searchParams.get("token");
    } else if (this.refState.httpRequest) {
      if ("query" in this.refState.httpRequest) {
        documentID = documentID || ((_a = this.refState.httpRequest.query) == null ? void 0 : _a.documentId);
        previewToken = previewToken || ((_b = this.refState.httpRequest.query) == null ? void 0 : _b.token);
      } else if ("url" in this.refState.httpRequest && this.refState.httpRequest.url) {
        const searchParams = new URL(this.refState.httpRequest.url).searchParams;
        documentID = documentID || searchParams.get("documentId");
        previewToken = previewToken || searchParams.get("token");
      }
    }
    if (documentID != null && previewToken != null) {
      const document = await this.getByID(documentID, {
        ref: previewToken,
        lang: "*",
        signal: args.signal,
        fetchOptions: args.fetchOptions
      });
      const url = asLink(document, args.linkResolver);
      if (typeof url === "string") {
        return url;
      }
    }
    return args.defaultURL;
  }
  queryLatestContent() {
    this.refState.mode = RefStateMode.Master;
  }
  queryContentFromReleaseByID(releaseID) {
    this.refState = {
      ...this.refState,
      mode: RefStateMode.ReleaseID,
      releaseID
    };
  }
  queryContentFromReleaseByLabel(releaseLabel) {
    this.refState = {
      ...this.refState,
      mode: RefStateMode.ReleaseLabel,
      releaseLabel
    };
  }
  queryContentFromRef(ref) {
    this.refState = {
      ...this.refState,
      mode: RefStateMode.Manual,
      ref
    };
  }
  async graphQLFetch(input, init) {
    const cachedRepository = await this.getCachedRepository();
    const ref = await this.getResolvedRefString();
    const unsanitizedHeaders = {
      "Prismic-ref": ref,
      Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
      ...init ? init.headers : {}
    };
    if (cachedRepository.integrationFieldsRef) {
      unsanitizedHeaders["Prismic-integration-field-ref"] = cachedRepository.integrationFieldsRef;
    }
    const headers = {};
    for (const key in unsanitizedHeaders) {
      if (unsanitizedHeaders[key]) {
        headers[key.toLowerCase()] = unsanitizedHeaders[key];
      }
    }
    const url = new URL(
      input
    );
    url.searchParams.set("ref", ref);
    const query = url.searchParams.get("query");
    if (query) {
      url.searchParams.set(
        "query",
        minifyGraphQLQuery(query)
      );
    }
    return await this.fetchFn(url.toString(), {
      ...init,
      headers
    });
  }
  async getCachedRepository(params) {
    if (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) {
      this.cachedRepositoryExpiration = Date.now() + REPOSITORY_CACHE_TTL;
      this.cachedRepository = await this.getRepository(params);
    }
    return this.cachedRepository;
  }
  async getCachedRepositoryForm(name, params) {
    const cachedRepository = await this.getCachedRepository(params);
    const form = cachedRepository.forms[name];
    if (!form) {
      throw new PrismicError/* PrismicError */.b(`Form with name "${name}" could not be found`, void 0, void 0);
    }
    return form;
  }
  async getResolvedRefString(params) {
    var _a, _b;
    if (this.refState.autoPreviewsEnabled) {
      let previewRef;
      let cookieJar;
      if ((_a = this.refState.httpRequest) == null ? void 0 : _a.headers) {
        if ("get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get === "function") {
          cookieJar = this.refState.httpRequest.headers.get("cookie");
        } else if ("cookie" in this.refState.httpRequest.headers) {
          cookieJar = this.refState.httpRequest.headers.cookie;
        }
      } else if ((_b = globalThis.document) == null ? void 0 : _b.cookie) {
        cookieJar = globalThis.document.cookie;
      }
      if (cookieJar) {
        previewRef = getPreviewCookie(cookieJar);
      }
      if (previewRef) {
        return previewRef;
      }
    }
    const cachedRepository = await this.getCachedRepository(params);
    const refModeType = this.refState.mode;
    if (refModeType === RefStateMode.ReleaseID) {
      return findRefByID(cachedRepository.refs, this.refState.releaseID).ref;
    } else if (refModeType === RefStateMode.ReleaseLabel) {
      return findRefByLabel(cachedRepository.refs, this.refState.releaseLabel).ref;
    } else if (refModeType === RefStateMode.Manual) {
      const res = await castThunk(this.refState.ref)();
      if (typeof res === "string") {
        return res;
      }
    }
    return findMasterRef(cachedRepository.refs).ref;
  }
  async fetch(url, params = {}) {
    var _a, _b, _c, _d;
    const res = await this.fetchFn(url, {
      ...this.fetchOptions,
      ...params.fetchOptions,
      headers: {
        ...(_a = this.fetchOptions) == null ? void 0 : _a.headers,
        ...(_b = params.fetchOptions) == null ? void 0 : _b.headers
      },
      signal: ((_c = params.fetchOptions) == null ? void 0 : _c.signal) || params.signal || ((_d = this.fetchOptions) == null ? void 0 : _d.signal)
    });
    let json;
    try {
      json = await res.json();
    } catch {
      if (res.status === 404) {
        throw new NotFoundError(`Prismic repository not found. Check that "${this.endpoint}" is pointing to the correct repository.`, url, void 0);
      } else {
        throw new PrismicError/* PrismicError */.b(void 0, url, void 0);
      }
    }
    switch (res.status) {
      case 200: {
        return json;
      }
      case 400: {
        throw new ParsingError(json.message, url, json);
      }
      case 401:
      case 403: {
        throw new ForbiddenError("error" in json ? json.error : json.message, url, json);
      }
      case 429: {
        const parsedRetryAfter = Number(res.headers.get("retry-after"));
        const delay = Number.isNaN(parsedRetryAfter) ? DEFUALT_RETRY_AFTER_MS : parsedRetryAfter;
        return await new Promise((resolve, reject) => {
          setTimeout(async () => {
            try {
              resolve(await this.fetch(url, params));
            } catch (error) {
              reject(error);
            }
          }, delay);
        });
      }
    }
    throw new PrismicError/* PrismicError */.b(void 0, url, json);
  }
}

//# sourceMappingURL=client.js.map


/***/ }),

/***/ 4456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ preview)
/* harmony export */ });
const preview = "io.prismic.preview";

//# sourceMappingURL=cookie.js.map


/***/ }),

/***/ 7215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ getRepositoryName)
/* harmony export */ });
/* harmony import */ var _PrismicError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4028);

const getRepositoryName = (repositoryEndpoint) => {
  try {
    return new URL(repositoryEndpoint).hostname.split(".")[0];
  } catch {
    throw new _PrismicError_js__WEBPACK_IMPORTED_MODULE_0__/* .PrismicError */ .b(`An invalid Prismic Rest API V2 endpoint was provided: ${repositoryEndpoint}`, void 0, void 0);
  }
};

//# sourceMappingURL=getRepositoryName.js.map


/***/ })

};
;