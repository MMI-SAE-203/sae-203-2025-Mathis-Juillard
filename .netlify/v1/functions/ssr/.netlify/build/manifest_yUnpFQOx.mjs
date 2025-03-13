import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DDD3AwPw.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/","cacheDir":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/node_modules/.astro/","outDir":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/dist/","srcDir":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/","publicDir":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/public/","buildClientDir":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/dist/","buildServerDir":"file:///Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/activite/[id]","isIndex":false,"type":"page","pattern":"^\\/activite\\/([^/]+?)\\/?$","segments":[[{"content":"activite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/activite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/activite","isIndex":true,"type":"page","pattern":"^\\/activite\\/?$","segments":[[{"content":"activite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activite/index.astro","pathname":"/activite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/apropos","isIndex":false,"type":"page","pattern":"^\\/apropos\\/?$","segments":[[{"content":"apropos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apropos.astro","pathname":"/apropos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/films/[id]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/films","isIndex":true,"type":"page","pattern":"^\\/films\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/films/index.astro","pathname":"/films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/infopratique","isIndex":false,"type":"page","pattern":"^\\/infopratique\\/?$","segments":[[{"content":"infopratique","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infopratique.astro","pathname":"/infopratique","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BvKxy2Uc.js"}],"styles":[{"type":"external","src":"/_astro/_id_.76b5yPOD.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/activite/[id].astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/activite/index.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/apropos.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/films/[id].astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/films/index.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/infopratique.astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/activite/[id]@_@astro":"pages/activite/_id_.astro.mjs","\u0000@astro-page:src/pages/activite/index@_@astro":"pages/activite.astro.mjs","\u0000@astro-page:src/pages/apropos@_@astro":"pages/apropos.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/films/[id]@_@astro":"pages/films/_id_.astro.mjs","\u0000@astro-page:src/pages/films/index@_@astro":"pages/films.astro.mjs","\u0000@astro-page:src/pages/infopratique@_@astro":"pages/infopratique.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_yUnpFQOx.mjs","/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_zFM6Vrlv.mjs","/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.Bcy7883F.js","astro:scripts/page.js":"_astro/page.BvKxy2Uc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/admin/Documents/GitHub/sae-203-2025-Mathis-Juillard/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"#menu-btn\"),i=document.querySelector(\"#menu\"),n=document.body;t&&i&&t.addEventListener(\"click\",()=>{const e=t.getAttribute(\"aria-expanded\")===\"true\";t.setAttribute(\"aria-expanded\",String(!e)),i.setAttribute(\"aria-hidden\",String(e)),e?i.classList.add(\"opacity-0\",\"invisible\"):i.classList.remove(\"opacity-0\",\"invisible\"),n.classList.toggle(\"noscroll\",!e)});"]],"assets":["/_astro/chienhomme.DphKfiOT.avif","/_astro/camera.6mp5MRTq.avif","/_astro/pleineaire.quGDI5I_.avif","/_astro/chatcine.Di7oZLrG.avif","/_astro/chat.BTDCxBya.avif","/_astro/patechat.CequafsH.svg","/_astro/partenaire1.VmBXM4nL.avif","/_astro/dehors.AV6PODP3.avif","/_astro/partenaire3.CxllYQRP.avif","/_astro/partenaire2.DxlLVM68.avif","/_astro/enfantsvr.w78KqOl7.avif","/_astro/cinemacarou.B3PlBiI8.avif","/_astro/cinemadehors.DDGIelMs.avif","/_astro/ultra-latin-ext-400-normal.BgMY2QgE.woff2","/_astro/ultra-latin-400-normal.DV69c3Il.woff2","/_astro/lato-latin-ext-400-normal.C8eBZ-j2.woff2","/_astro/lato-latin-400-normal.BEhtfm5r.woff2","/_astro/facebook.BrsiaxEM.svg","/_astro/chatfooter2.B6k5jaNf.svg","/_astro/twitter.BG_9kG7c.svg","/_astro/youtube.BBgajs0B.svg","/_astro/instagram.D6woyrtq.svg","/_astro/logo3.BY7Q0QvH.svg","/_astro/ultra-latin-ext-400-normal.0nH9ncBy.woff","/_astro/ultra-latin-400-normal.Ch4286Fk.woff","/_astro/lato-latin-400-normal.B11PyLys.woff","/_astro/_id_.76b5yPOD.css","/favicon.svg","/_astro/page.BvKxy2Uc.js","/_astro/page.BvKxy2Uc.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2BkbR0w3yQ24er6uCUluApvONm6zGlQBxN0ZIIXzinM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
