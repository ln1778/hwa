"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHex = exports.isFlagEnabled = exports.onlyHasFields = void 0;
const HEX_REGEX = /^[0-9A-Fa-f]+$/u;
function onlyHasFields(obj, fields) {
    return Object.keys(obj).every((key) => fields.includes(key));
}
exports.onlyHasFields = onlyHasFields;
function isFlagEnabled(Flags, checkFlag) {
    return (checkFlag & Flags) === checkFlag;
}
exports.isFlagEnabled = isFlagEnabled;
function isHex(str) {
    return HEX_REGEX.test(str);
}
exports.isHex = isHex;
//# sourceMappingURL=index.js.map