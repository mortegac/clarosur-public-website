"use strict";
exports.id = 254;
exports.ids = [254];
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
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6364);

function setPreviewData({ req, res }) {
  const ref = req.query.token || req.cookies[_prismicio_client__WEBPACK_IMPORTED_MODULE_0__/* .cookie.preview */ .pR.preview];
  if (ref) {
    res.setPreviewData({ ref });
  }
}

//# sourceMappingURL=setPreviewData.js.map


/***/ }),

/***/ 7502:
/***/ ((module) => {

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ 6364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pR": () => (/* binding */ cookie),
  "eI": () => (/* binding */ createClient),
  "_k": () => (/* binding */ getRepositoryName)
});

// UNUSED EXPORTS: Client, ForbiddenError, NotFoundError, ParsingError, Predicates, PrismicError, buildQueryURL, getEndpoint, getGraphQLEndpoint, getRepositoryEndpoint, isRepositoryEndpoint, isRepositoryName, predicate, predicates

;// CONCATENATED MODULE: ./node_modules/@prismicio/types/dist/index.js
const dist_RichTextNodeType = {
  heading1: "heading1",
  heading2: "heading2",
  heading3: "heading3",
  heading4: "heading4",
  heading5: "heading5",
  heading6: "heading6",
  paragraph: "paragraph",
  preformatted: "preformatted",
  strong: "strong",
  em: "em",
  listItem: "list-item",
  oListItem: "o-list-item",
  list: "group-list-item",
  oList: "group-o-list-item",
  image: "image",
  embed: "embed",
  hyperlink: "hyperlink",
  label: "label",
  span: "span"
};

const dist_LinkType = {
  Any: "Any",
  Document: "Document",
  Media: "Media",
  Web: "Web"
};

const OEmbedType = {
  Photo: "photo",
  Video: "video",
  Link: "link",
  Rich: "rich"
};

const CustomTypeModelFieldType = {
  Boolean: "Boolean",
  Color: "Color",
  Date: "Date",
  Embed: "Embed",
  GeoPoint: "GeoPoint",
  Group: "Group",
  Image: "Image",
  IntegrationFields: "IntegrationFields",
  Link: "Link",
  Number: "Number",
  Select: "Select",
  Slices: "Slices",
  StructuredText: "StructuredText",
  Text: "Text",
  Timestamp: "Timestamp",
  UID: "UID",
  Range: "Range",
  Separator: "Separator",
  LegacySlices: "Choice"
};

const CustomTypeModelLinkSelectType = {
  Document: "document",
  Media: "media",
  Web: "web"
};

const CustomTypeModelSliceType = {
  Slice: "Slice",
  SharedSlice: "SharedSlice"
};

const CustomTypeModelSliceDisplay = {
  List: "list",
  Grid: "grid"
};

const WebhookType = {
  APIUpdate: "api-update",
  TestTrigger: "test-trigger"
};


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/escape-html/index.js
var escape_html = __webpack_require__(7502);
;// CONCATENATED MODULE: ./node_modules/@prismicio/helpers/dist/index.js






const asDate = (dateOrTimestampField) => {
  if (!dateOrTimestampField) {
    return null;
  }
  if (dateOrTimestampField.length === 24) {
    return new Date(
      dateOrTimestampField.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")
    );
  } else {
    return new Date(dateOrTimestampField);
  }
};

const documentToLinkField = (prismicDocument) => {
  var _a, _b, _c;
  return {
    link_type: dist_LinkType.Document,
    id: prismicDocument.id,
    uid: (_a = prismicDocument.uid) != null ? _a : void 0,
    type: prismicDocument.type,
    tags: prismicDocument.tags,
    lang: prismicDocument.lang,
    url: (_b = prismicDocument.url) != null ? _b : void 0,
    slug: (_c = prismicDocument.slugs) == null ? void 0 : _c[0],
    ...prismicDocument.data && Object.keys(prismicDocument.data).length > 0 ? { data: prismicDocument.data } : {}
  };
};

const asLink = (linkFieldOrDocument, linkResolver) => {
  if (!linkFieldOrDocument) {
    return null;
  }
  const linkField = "link_type" in linkFieldOrDocument ? linkFieldOrDocument : documentToLinkField(linkFieldOrDocument);
  switch (linkField.link_type) {
    case dist_LinkType.Media:
    case dist_LinkType.Web:
      return "url" in linkField ? linkField.url : null;
    case dist_LinkType.Document: {
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
    case dist_LinkType.Any:
    default:
      return null;
  }
};

const asText = (richTextField, separator) => {
  if (richTextField) {
    return asText$1(richTextField, separator);
  } else {
    return null;
  }
};

const getLabel = (node) => {
  return "data" in node && "label" in node.data ? ` class="${node.data.label}"` : "";
};
const serializeStandardTag = (tag, node, children) => {
  return `<${tag}${getLabel(node)}>${children.join("")}</${tag}>`;
};
const serializePreFormatted = (node) => {
  return `<pre${getLabel(node)}>${escapeHtml(node.text)}</pre>`;
};
const serializeImage = (linkResolver, node) => {
  let imageTag = `<img src="${node.url}" alt="${escapeHtml(node.alt)}"${node.copyright ? ` copyright="${escapeHtml(node.copyright)}"` : ""} />`;
  if (node.linkTo) {
    imageTag = serializeHyperlink(
      linkResolver,
      {
        type: RichTextNodeType.hyperlink,
        data: node.linkTo,
        start: 0,
        end: 0
      },
      [imageTag]
    );
  }
  return `<p class="block-img">${imageTag}</p>`;
};
const serializeEmbed = (node) => {
  return `<div data-oembed="${node.oembed.embed_url}" data-oembed-type="${node.oembed.type}" data-oembed-provider="${node.oembed.provider_name}"${getLabel(node)}>${node.oembed.html}</div>`;
};
const serializeHyperlink = (linkResolver, node, children) => {
  switch (node.data.link_type) {
    case LinkType.Web: {
      return `<a href="${escapeHtml(node.data.url)}" ${node.data.target ? `target="${node.data.target}" ` : ""}rel="noopener noreferrer"${getLabel(node)}>${children.join("")}</a>`;
    }
    case LinkType.Document: {
      return `<a href="${asLink(node.data, linkResolver)}"${getLabel(
        node
      )}>${children.join("")}</a>`;
    }
    case LinkType.Media: {
      return `<a href="${node.data.url}"${getLabel(node)}>${children.join(
        ""
      )}</a>`;
    }
  }
};
const serializeSpan = (content) => {
  return content ? escapeHtml(content).replace(/\n/g, "<br />") : "";
};

const createDefaultHTMLSerializer = (linkResolver) => {
  return (_type, node, text, children, _key) => {
    switch (node.type) {
      case Element.heading1:
        return serializeStandardTag("h1", node, children);
      case Element.heading2:
        return serializeStandardTag("h2", node, children);
      case Element.heading3:
        return serializeStandardTag("h3", node, children);
      case Element.heading4:
        return serializeStandardTag("h4", node, children);
      case Element.heading5:
        return serializeStandardTag("h5", node, children);
      case Element.heading6:
        return serializeStandardTag("h6", node, children);
      case Element.paragraph:
        return serializeStandardTag("p", node, children);
      case Element.preformatted:
        return serializePreFormatted(node);
      case Element.strong:
        return serializeStandardTag("strong", node, children);
      case Element.em:
        return serializeStandardTag("em", node, children);
      case Element.listItem:
        return serializeStandardTag("li", node, children);
      case Element.oListItem:
        return serializeStandardTag("li", node, children);
      case Element.list:
        return serializeStandardTag("ul", node, children);
      case Element.oList:
        return serializeStandardTag("ol", node, children);
      case Element.image:
        return serializeImage(linkResolver, node);
      case Element.embed:
        return serializeEmbed(node);
      case Element.hyperlink:
        return serializeHyperlink(linkResolver, node, children);
      case Element.label:
        return serializeStandardTag("span", node, children);
      case Element.span:
      default:
        return serializeSpan(text);
    }
  };
};
const wrapMapSerializerWithStringChildren = (mapSerializer) => {
  const modifiedMapSerializer = {};
  for (const tag in mapSerializer) {
    const tagSerializer = mapSerializer[tag];
    if (tagSerializer) {
      modifiedMapSerializer[tag] = (payload) => {
        return tagSerializer({
          ...payload,
          children: payload.children.join("")
        });
      };
    }
  }
  return wrapMapSerializer(modifiedMapSerializer);
};
const asHTML = (richTextField, linkResolver, htmlSerializer) => {
  if (richTextField) {
    let serializer;
    if (htmlSerializer) {
      serializer = composeSerializers(
        typeof htmlSerializer === "object" ? wrapMapSerializerWithStringChildren(htmlSerializer) : (type, node, text, children, key) => htmlSerializer(type, node, text, children.join(""), key),
        createDefaultHTMLSerializer(linkResolver)
      );
    } else {
      serializer = createDefaultHTMLSerializer(linkResolver);
    }
    return serialize(richTextField, serializer).join(
      ""
    );
  } else {
    return null;
  }
};

const isNonNullish = (input) => {
  return input != null;
};
const isNonEmptyArray = (input) => {
  return !!input.length;
};
const richText = (field) => {
  if (!isNonNullish(field)) {
    return false;
  } else if (field.length === 1 && "text" in field[0]) {
    return !!field[0].text;
  } else {
    return !!field.length;
  }
};
const title = richText;
const imageThumbnail = (thumbnail) => {
  return isNonNullish(thumbnail) && !!thumbnail.url;
};
const dist_image = imageThumbnail;
const dist_link = (field) => {
  return isNonNullish(field) && ("id" in field || "url" in field);
};
const linkToMedia = dist_link;
const contentRelationship = dist_link;
const date = isNonNullish;
const timestamp = isNonNullish;
const color = isNonNullish;
const number = isNonNullish;
const keyText = (field) => {
  return isNonNullish(keyText) && !!field;
};
const dist_select = isNonNullish;
const dist_embed = (field) => {
  return isNonNullish(field) && !!field.embed_url;
};
const geoPoint = (field) => {
  return isNonNullish(field) && "longitude" in field;
};
const integrationFields = isNonNullish;
const group = (group2) => {
  return isNonNullish(group2) && isNonEmptyArray(group2);
};
const sliceZone = (slices) => {
  return isNonNullish(slices) && isNonEmptyArray(slices);
};

var isFilled = /*#__PURE__*/Object.freeze({
	__proto__: null,
	richText: richText,
	title: title,
	imageThumbnail: imageThumbnail,
	image: dist_image,
	link: dist_link,
	linkToMedia: linkToMedia,
	contentRelationship: contentRelationship,
	date: date,
	timestamp: timestamp,
	color: color,
	number: number,
	keyText: keyText,
	select: dist_select,
	embed: dist_embed,
	geoPoint: geoPoint,
	integrationFields: integrationFields,
	group: group,
	sliceZone: sliceZone
});

const asImageSrc = (field, params = {}) => {
  if (field && imageThumbnail(field)) {
    return buildURL(field.url, params);
  } else {
    return null;
  }
};

const DEFAULT_WIDTHS = (/* unused pure expression or super */ null && ([640, 828, 1200, 2048, 3840]));
const asImageWidthSrcSet = (field, params = {}) => {
  if (field && imageThumbnail(field)) {
    let {
      widths = DEFAULT_WIDTHS,
      ...imgixParams
    } = params;
    const {
      url,
      dimensions,
      alt: _alt,
      copyright: _copyright,
      ...responsiveViews
    } = field;
    const responsiveViewObjects = Object.values(responsiveViews);
    if (widths === "thumbnails" && responsiveViewObjects.length < 1) {
      widths = DEFAULT_WIDTHS;
    }
    return {
      src: buildURL(url, imgixParams),
      srcset: widths === "thumbnails" ? [
        buildWidthSrcSet(url, {
          ...imgixParams,
          widths: [dimensions.width]
        }),
        ...responsiveViewObjects.map((thumbnail) => {
          return buildWidthSrcSet(thumbnail.url, {
            ...imgixParams,
            widths: [thumbnail.dimensions.width]
          });
        })
      ].join(", ") : buildWidthSrcSet(field.url, {
        ...imgixParams,
        widths
      })
    };
  } else {
    return null;
  }
};

const DEFAULT_PIXEL_DENSITIES = (/* unused pure expression or super */ null && ([1, 2, 3]));
const asImagePixelDensitySrcSet = (field, params = {}) => {
  if (field && imageThumbnail(field)) {
    const { pixelDensities = DEFAULT_PIXEL_DENSITIES, ...imgixParams } = params;
    return {
      src: buildURL(field.url, imgixParams),
      srcset: buildPixelDensitySrcSet(field.url, {
        ...imgixParams,
        pixelDensities
      })
    };
  } else {
    return null;
  }
};

const Elements = (/* unused pure expression or super */ null && (Element));


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@prismicio/client/dist/index.js


const isRepositoryName = (input) => {
  return /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(input);
};

class PrismicError extends Error {
  constructor(message = "An invalid API response was returned", url, response) {
    super(message);
    this.url = url;
    this.response = response;
  }
}

const getRepositoryEndpoint = (repositoryName) => {
  if (isRepositoryName(repositoryName)) {
    return `https://${repositoryName}.cdn.prismic.io/api/v2`;
  } else {
    throw new PrismicError(
      `An invalid Prismic repository name was given: ${repositoryName}`,
      void 0,
      void 0
    );
  }
};

const getRepositoryName = (repositoryEndpoint) => {
  try {
    return new URL(repositoryEndpoint).hostname.split(".")[0];
  } catch (e) {
    throw new PrismicError(
      `An invalid Prismic Rest API V2 endpoint was provided: ${repositoryEndpoint}`,
      void 0,
      void 0
    );
  }
};

const getGraphQLEndpoint = (repositoryName) => {
  if (isRepositoryName(repositoryName)) {
    return `https://${repositoryName}.cdn.prismic.io/graphql`;
  } else {
    throw new PrismicError(
      `An invalid Prismic repository name was given: ${repositoryName}`,
      void 0,
      void 0
    );
  }
};

const isRepositoryEndpoint = (input) => {
  try {
    new URL(input);
    return true;
  } catch (e) {
    return false;
  }
};

const castArray = (a) => Array.isArray(a) ? a : [a];

const RENAMED_PARAMS = {
  accessToken: "access_token"
};
const castOrderingToString = (ordering) => typeof ordering === "string" ? ordering : [
  ordering.field,
  ordering.direction === "desc" ? ordering.direction : void 0
].filter(Boolean).join(" ");
const buildQueryURL = (endpoint, args) => {
  var _a;
  const { predicates, ...params } = args;
  const url = new URL(`documents/search`, `${endpoint}/`);
  if (predicates) {
    for (const predicate of castArray(predicates)) {
      url.searchParams.append("q", `[${predicate}]`);
    }
  }
  for (const k in params) {
    const name = (_a = RENAMED_PARAMS[k]) != null ? _a : k;
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

const appendPredicates = (objWithPredicates = {}, predicates) => {
  return {
    ...objWithPredicates,
    predicates: [
      ...objWithPredicates.predicates || [],
      ...castArray(predicates)
    ]
  };
};

const castThunk = (a) => typeof a === "function" ? a : () => a;

const findRef = (refs, predicate) => {
  const ref = refs.find((ref2) => predicate(ref2));
  if (!ref) {
    throw new PrismicError("Ref could not be found.", void 0, void 0);
  }
  return ref;
};

const findMasterRef = (refs) => {
  return findRef(refs, (ref) => ref.isMasterRef);
};

const findRefByID = (refs, id) => {
  return findRef(refs, (ref) => ref.id === id);
};

const findRefByLabel = (refs, label) => {
  return findRef(refs, (ref) => ref.label === label);
};

const preview = "io.prismic.preview";

var cookie = /*#__PURE__*/Object.freeze({
	__proto__: null,
	preview: preview
});

const readValue = (value) => {
  return value.replace(/%3B/g, ";");
};
const getPreviewCookie = (cookieJar) => {
  const cookies = cookieJar.split("; ");
  let value;
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const name = readValue(parts[0]).replace(/%3D/g, "=");
    if (name === preview) {
      value = readValue(parts.slice(1).join("="));
      continue;
    }
  }
  return value;
};

const minifyGraphQLQuery = (query) => {
  return query.replace(
    /(\n| )*( |{|})(\n| )*/gm,
    (_chars, _spaces, brackets) => brackets
  );
};

class ForbiddenError extends PrismicError {
}

class NotFoundError extends PrismicError {
}

class ParsingError extends PrismicError {
}

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
  any: pathWithArgsPredicate(
    "any"
  ),
  in: pathWithArgsPredicate("in"),
  fulltext: pathWithArgsPredicate("fulltext"),
  has: pathPredicate("has"),
  missing: pathPredicate("missing"),
  similar: argsPredicate("similar"),
  geopointNear: pathWithArgsPredicate("geopoint.near"),
  numberLessThan: pathWithArgsPredicate("number.lt"),
  numberGreaterThan: pathWithArgsPredicate("number.gt"),
  numberInRange: pathWithArgsPredicate(
    "number.inRange"
  ),
  dateAfter: pathWithArgsPredicate("date.after"),
  dateBefore: pathWithArgsPredicate("date.before"),
  dateBetween: pathWithArgsPredicate("date.between"),
  dateDayOfMonth: pathWithArgsPredicate("date.day-of-month"),
  dateDayOfMonthAfter: pathWithArgsPredicate(
    "date.day-of-month-after"
  ),
  dateDayOfMonthBefore: pathWithArgsPredicate(
    "date.day-of-month-before"
  ),
  dateDayOfWeek: pathWithArgsPredicate("date.day-of-week"),
  dateDayOfWeekAfter: pathWithArgsPredicate(
    "date.day-of-week-after"
  ),
  dateDayOfWeekBefore: pathWithArgsPredicate(
    "date.day-of-week-before"
  ),
  dateMonth: pathWithArgsPredicate("date.month"),
  dateMonthAfter: pathWithArgsPredicate("date.month-after"),
  dateMonthBefore: pathWithArgsPredicate("date.month-before"),
  dateYear: pathWithArgsPredicate("date.year"),
  dateHour: pathWithArgsPredicate("date.hour"),
  dateHourAfter: pathWithArgsPredicate("date.hour-after"),
  dateHourBefore: pathWithArgsPredicate("date.hour-before")
};

const MAX_PAGE_SIZE = 100;
const REPOSITORY_CACHE_TTL = 5e3;
const GET_ALL_QUERY_DELAY = 500;
const typePredicate = (documentType) => predicate.at("document.type", documentType);
const everyTagPredicate = (tags) => predicate.at("document.tags", castArray(tags));
const someTagsPredicate = (tags) => predicate.any("document.tags", castArray(tags));
const createClient = (repositoryNameOrEndpoint, options) => new Client(repositoryNameOrEndpoint, options);
class Client {
  constructor(repositoryNameOrEndpoint, options = {}) {
    this.refState = {
      mode: "Master" /* Master */,
      autoPreviewsEnabled: true
    };
    this.cachedRepositoryExpiration = 0;
    this.graphqlFetch = this.graphQLFetch.bind(this);
    if (isRepositoryEndpoint(repositoryNameOrEndpoint)) {
      if (false) {}
      this.endpoint = repositoryNameOrEndpoint;
    } else {
      this.endpoint = getRepositoryEndpoint(repositoryNameOrEndpoint);
    }
    this.accessToken = options.accessToken;
    this.routes = options.routes;
    this.brokenRoute = options.brokenRoute;
    this.defaultParams = options.defaultParams;
    if (options.ref) {
      this.queryContentFromRef(options.ref);
    }
    if (typeof options.fetch === "function") {
      this.fetchFn = options.fetch;
    } else if (typeof globalThis.fetch === "function") {
      this.fetchFn = globalThis.fetch;
    } else {
      throw new PrismicError(
        "A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.",
        void 0,
        void 0
      );
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
    var _a, _b;
    const actualParams = { ...params };
    if (!(params && params.page) && !(params == null ? void 0 : params.pageSize)) {
      actualParams.pageSize = (_b = (_a = this.defaultParams) == null ? void 0 : _a.pageSize) != null ? _b : 1;
    }
    const url = await this.buildQueryURL(actualParams);
    const result = await this.fetch(url, params);
    const firstResult = result.results[0];
    if (firstResult) {
      return firstResult;
    }
    throw new PrismicError("No documents were returned", url, void 0);
  }
  async dangerouslyGetAll(params = {}) {
    var _a;
    const { limit = Infinity, ...actualParams } = params;
    const resolvedParams = {
      ...actualParams,
      pageSize: Math.min(
        limit,
        actualParams.pageSize || ((_a = this.defaultParams) == null ? void 0 : _a.pageSize) || MAX_PAGE_SIZE
      )
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
    return await this.getFirst(
      appendPredicates(params, predicate.at("document.id", id))
    );
  }
  async getByIDs(ids, params) {
    return await this.get(
      appendPredicates(params, predicate.in("document.id", ids))
    );
  }
  async getAllByIDs(ids, params) {
    return await this.dangerouslyGetAll(
      appendPredicates(params, predicate.in("document.id", ids))
    );
  }
  async getByUID(documentType, uid, params) {
    return await this.getFirst(
      appendPredicates(params, [
        typePredicate(documentType),
        predicate.at(`my.${documentType}.uid`, uid)
      ])
    );
  }
  async getByUIDs(documentType, uids, params) {
    return await this.get(
      appendPredicates(params, [
        typePredicate(documentType),
        predicate.in(`my.${documentType}.uid`, uids)
      ])
    );
  }
  async getAllByUIDs(documentType, uids, params) {
    return await this.dangerouslyGetAll(
      appendPredicates(params, [
        typePredicate(documentType),
        predicate.in(`my.${documentType}.uid`, uids)
      ])
    );
  }
  async getSingle(documentType, params) {
    return await this.getFirst(
      appendPredicates(params, typePredicate(documentType))
    );
  }
  async getByType(documentType, params) {
    return await this.get(
      appendPredicates(params, typePredicate(documentType))
    );
  }
  async getAllByType(documentType, params) {
    return await this.dangerouslyGetAll(appendPredicates(params, typePredicate(documentType)));
  }
  async getByTag(tag, params) {
    return await this.get(
      appendPredicates(params, someTagsPredicate(tag))
    );
  }
  async getAllByTag(tag, params) {
    return await this.dangerouslyGetAll(
      appendPredicates(params, someTagsPredicate(tag))
    );
  }
  async getByEveryTag(tags, params) {
    return await this.get(
      appendPredicates(params, everyTagPredicate(tags))
    );
  }
  async getAllByEveryTag(tags, params) {
    return await this.dangerouslyGetAll(
      appendPredicates(params, everyTagPredicate(tags))
    );
  }
  async getBySomeTags(tags, params) {
    return await this.get(
      appendPredicates(params, someTagsPredicate(tags))
    );
  }
  async getAllBySomeTags(tags, params) {
    return await this.dangerouslyGetAll(
      appendPredicates(params, someTagsPredicate(tags))
    );
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
    } catch (e) {
      const repository = await this.getRepository(params);
      return repository.tags;
    }
  }
  async buildQueryURL({
    signal,
    ...params
  } = {}) {
    const ref = params.ref || await this.getResolvedRefString();
    const integrationFieldsRef = params.integrationFieldsRef || (await this.getCachedRepository({ signal })).integrationFieldsRef || void 0;
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
        signal: args.signal,
        ref: previewToken,
        lang: "*"
      });
      const url = asLink(document, args.linkResolver);
      if (typeof url === "string") {
        return url;
      }
    }
    return args.defaultURL;
  }
  queryLatestContent() {
    this.refState.mode = "Master" /* Master */;
  }
  queryContentFromReleaseByID(releaseID) {
    this.refState = {
      ...this.refState,
      mode: "ReleaseID" /* ReleaseID */,
      releaseID
    };
  }
  queryContentFromReleaseByLabel(releaseLabel) {
    this.refState = {
      ...this.refState,
      mode: "ReleaseLabel" /* ReleaseLabel */,
      releaseLabel
    };
  }
  queryContentFromRef(ref) {
    this.refState = {
      ...this.refState,
      mode: "Manual" /* Manual */,
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
      throw new PrismicError(
        `Form with name "${name}" could not be found`,
        void 0,
        void 0
      );
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
    if (refModeType === "ReleaseID" /* ReleaseID */) {
      return findRefByID(cachedRepository.refs, this.refState.releaseID).ref;
    } else if (refModeType === "ReleaseLabel" /* ReleaseLabel */) {
      return findRefByLabel(cachedRepository.refs, this.refState.releaseLabel).ref;
    } else if (refModeType === "Manual" /* Manual */) {
      const res = await castThunk(this.refState.ref)();
      if (typeof res === "string") {
        return res;
      }
    }
    return findMasterRef(cachedRepository.refs).ref;
  }
  async fetch(url, params = {}) {
    const res = await this.fetchFn(url, {
      signal: params.signal
    });
    let json;
    try {
      json = await res.json();
    } catch (e) {
      if (res.status === 404) {
        throw new NotFoundError(
          `Prismic repository not found. Check that "${this.endpoint}" is pointing to the correct repository.`,
          url,
          void 0
        );
      } else {
        throw new PrismicError(void 0, url, void 0);
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
        throw new ForbiddenError(
          "error" in json ? json.error : json.message,
          url,
          json
        );
      }
    }
    throw new PrismicError(void 0, url, json);
  }
}

const getEndpoint = (/* unused pure expression or super */ null && (getRepositoryEndpoint));
const predicates = (/* unused pure expression or super */ null && (predicate));
const Predicates = (/* unused pure expression or super */ null && (predicate));


//# sourceMappingURL=index.js.map


/***/ })

};
;