/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/blogs/route";
exports.ids = ["app/api/blogs/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_al_amin90_Desktop_projects_nexa_blog_src_app_api_blogs_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/blogs/route.js */ \"(rsc)/./src/app/api/blogs/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blogs/route\",\n        pathname: \"/api/blogs\",\n        filename: \"route\",\n        bundlePath: \"app/api/blogs/route\"\n    },\n    resolvedPagePath: \"/home/al-amin90/Desktop/projects/nexa-blog/src/app/api/blogs/route.js\",\n    nextConfigOutput,\n    userland: _home_al_amin90_Desktop_projects_nexa_blog_src_app_api_blogs_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZibG9ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYmxvZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZibG9ncyUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYWwtYW1pbjkwJTJGRGVza3RvcCUyRnByb2plY3RzJTJGbmV4YS1ibG9nJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGYWwtYW1pbjkwJTJGRGVza3RvcCUyRnByb2plY3RzJTJGbmV4YS1ibG9nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNxQjtBQUNsRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvYWwtYW1pbjkwL0Rlc2t0b3AvcHJvamVjdHMvbmV4YS1ibG9nL3NyYy9hcHAvYXBpL2Jsb2dzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ibG9ncy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Jsb2dzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ibG9ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2FsLWFtaW45MC9EZXNrdG9wL3Byb2plY3RzL25leGEtYmxvZy9zcmMvYXBwL2FwaS9ibG9ncy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/blogs/route.js":
/*!************************************!*\
  !*** ./src/app/api/blogs/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   blogs: () => (/* binding */ blogs)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst blogs = [\n    {\n        id: \"1\",\n        title: \"The Rise of Quantum Computing\",\n        description: \"Dive into the fascinating world of quantum computing, where traditional binary bits make way for qubits, unlocking unprecedented computational power. Explore the potential applications, challenges, and the race among tech giants to achieve quantum supremacy.\",\n        publish_date: \"2025-03-01\",\n        author_name: \"Mezbaul Abedin Persian\",\n        blog_image: \"https://www.insights.onegiantleap.com/content/images/2023/10/Content-Hub-Blog---The-rise-of-quantum-computing.png\",\n        total_likes: \"1200\"\n    },\n    {\n        id: \"2\",\n        title: \"Augmented Reality: Bridging the Digital and Physical Worlds\",\n        description: \"Discover the transformative impact of augmented reality (AR) on various industries, from gaming and education to healthcare and manufacturing. Uncover the latest AR technologies, groundbreaking applications, and the future possibilities of this immersive tech.\",\n        publish_date: \"2025-03-02\",\n        author_name: \"Mir Hussain\",\n        blog_image: \"https://media.licdn.com/dms/image/D4D12AQHvTniQX6OVlQ/article-cover_image-shrink_720_1280/0/1670407089131?e=2147483647&v=beta&t=p_20uM0MxufGmxjzczZz4HxCp9BbhLADoQmsWR4KD1I\",\n        total_likes: \"950\"\n    }\n];\nconst GET = async ()=>{\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(blogs);\n};\nconst POST = async (request)=>{\n    const blog = await request.json();\n    const newBlog = {\n        ...blog,\n        id: blogs.length + 1\n    };\n    blogs.push(newBlog);\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(newBlog), {\n        status: 201,\n        headers: {\n            'Content-type': 'application-json'\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ibG9ncy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBRXBDLE1BQU1DLFFBQVE7SUFDbkI7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsY0FBYztRQUNkQyxhQUFhO1FBQ2JDLFlBQ0U7UUFDRkMsYUFBYTtJQUNmO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsY0FBYztRQUNkQyxhQUFhO1FBQ2JDLFlBQ0U7UUFDRkMsYUFBYTtJQUNmO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLE1BQU07SUFDakIsT0FBT1QscURBQVlBLENBQUNVLElBQUksQ0FBQ1Q7QUFDM0IsRUFBRTtBQUVLLE1BQU1VLE9BQU8sT0FBTUM7SUFDdEIsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRixJQUFJO0lBRS9CLE1BQU1JLFVBQVU7UUFDWixHQUFHRCxJQUFJO1FBQ1BYLElBQUlELE1BQU1jLE1BQU0sR0FBRztJQUN2QjtJQUNBZCxNQUFNZSxJQUFJLENBQUNGO0lBRVgsT0FBTyxJQUFJZCxxREFBWUEsQ0FBQ2lCLEtBQUtDLFNBQVMsQ0FBQ0osVUFBVTtRQUM3Q0ssUUFBUTtRQUNSQyxTQUFRO1lBQ0osZ0JBQWdCO1FBQ3BCO0lBQ0o7QUFDSixFQUFDIiwic291cmNlcyI6WyIvaG9tZS9hbC1hbWluOTAvRGVza3RvcC9wcm9qZWN0cy9uZXhhLWJsb2cvc3JjL2FwcC9hcGkvYmxvZ3Mvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGJsb2dzID0gW1xuICB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIlRoZSBSaXNlIG9mIFF1YW50dW0gQ29tcHV0aW5nXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRpdmUgaW50byB0aGUgZmFzY2luYXRpbmcgd29ybGQgb2YgcXVhbnR1bSBjb21wdXRpbmcsIHdoZXJlIHRyYWRpdGlvbmFsIGJpbmFyeSBiaXRzIG1ha2Ugd2F5IGZvciBxdWJpdHMsIHVubG9ja2luZyB1bnByZWNlZGVudGVkIGNvbXB1dGF0aW9uYWwgcG93ZXIuIEV4cGxvcmUgdGhlIHBvdGVudGlhbCBhcHBsaWNhdGlvbnMsIGNoYWxsZW5nZXMsIGFuZCB0aGUgcmFjZSBhbW9uZyB0ZWNoIGdpYW50cyB0byBhY2hpZXZlIHF1YW50dW0gc3VwcmVtYWN5LlwiLFxuICAgIHB1Ymxpc2hfZGF0ZTogXCIyMDI1LTAzLTAxXCIsXG4gICAgYXV0aG9yX25hbWU6IFwiTWV6YmF1bCBBYmVkaW4gUGVyc2lhblwiLFxuICAgIGJsb2dfaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vd3d3Lmluc2lnaHRzLm9uZWdpYW50bGVhcC5jb20vY29udGVudC9pbWFnZXMvMjAyMy8xMC9Db250ZW50LUh1Yi1CbG9nLS0tVGhlLXJpc2Utb2YtcXVhbnR1bS1jb21wdXRpbmcucG5nXCIsXG4gICAgdG90YWxfbGlrZXM6IFwiMTIwMFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIHRpdGxlOiBcIkF1Z21lbnRlZCBSZWFsaXR5OiBCcmlkZ2luZyB0aGUgRGlnaXRhbCBhbmQgUGh5c2ljYWwgV29ybGRzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkRpc2NvdmVyIHRoZSB0cmFuc2Zvcm1hdGl2ZSBpbXBhY3Qgb2YgYXVnbWVudGVkIHJlYWxpdHkgKEFSKSBvbiB2YXJpb3VzIGluZHVzdHJpZXMsIGZyb20gZ2FtaW5nIGFuZCBlZHVjYXRpb24gdG8gaGVhbHRoY2FyZSBhbmQgbWFudWZhY3R1cmluZy4gVW5jb3ZlciB0aGUgbGF0ZXN0IEFSIHRlY2hub2xvZ2llcywgZ3JvdW5kYnJlYWtpbmcgYXBwbGljYXRpb25zLCBhbmQgdGhlIGZ1dHVyZSBwb3NzaWJpbGl0aWVzIG9mIHRoaXMgaW1tZXJzaXZlIHRlY2guXCIsXG4gICAgcHVibGlzaF9kYXRlOiBcIjIwMjUtMDMtMDJcIixcbiAgICBhdXRob3JfbmFtZTogXCJNaXIgSHVzc2FpblwiLFxuICAgIGJsb2dfaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vbWVkaWEubGljZG4uY29tL2Rtcy9pbWFnZS9ENEQxMkFRSHZUbmlRWDZPVmxRL2FydGljbGUtY292ZXJfaW1hZ2Utc2hyaW5rXzcyMF8xMjgwLzAvMTY3MDQwNzA4OTEzMT9lPTIxNDc0ODM2NDcmdj1iZXRhJnQ9cF8yMHVNME14dWZHbXhqemN6Wno0SHhDcDlCYmhMQURvUW1zV1I0S0QxSVwiLFxuICAgIHRvdGFsX2xpa2VzOiBcIjk1MFwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEdFVCA9IGFzeW5jKCkgPT4ge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oYmxvZ3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyhyZXF1ZXN0KSA9PiB7XG4gICAgY29uc3QgYmxvZyA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICBjb25zdCBuZXdCbG9nID0ge1xuICAgICAgICAuLi5ibG9nLFxuICAgICAgICBpZDogYmxvZ3MubGVuZ3RoICsgMVxuICAgIH1cbiAgICBibG9ncy5wdXNoKG5ld0Jsb2cpXG5cbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeShuZXdCbG9nKSwge1xuICAgICAgICBzdGF0dXM6IDIwMSxcbiAgICAgICAgaGVhZGVyczp7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uLWpzb24nXG4gICAgICAgIH0sXG4gICAgfSlcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYmxvZ3MiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwdWJsaXNoX2RhdGUiLCJhdXRob3JfbmFtZSIsImJsb2dfaW1hZ2UiLCJ0b3RhbF9saWtlcyIsIkdFVCIsImpzb24iLCJQT1NUIiwicmVxdWVzdCIsImJsb2ciLCJuZXdCbG9nIiwibGVuZ3RoIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJoZWFkZXJzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/blogs/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2Froute&page=%2Fapi%2Fblogs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2Froute.js&appDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fal-amin90%2FDesktop%2Fprojects%2Fnexa-blog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();