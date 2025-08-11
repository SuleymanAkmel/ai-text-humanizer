"use strict";
(() => {
var exports = {};
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 80:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    if (req.method === "POST") {
        const { text  } = req.body;
        // Simulate humanization
        const output = text.replace(/AI/gi, "Humanized AI");
        res.status(200).json({
            output
        });
    } else {
        res.status(405).json({
            error: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(80));
module.exports = __webpack_exports__;

})();