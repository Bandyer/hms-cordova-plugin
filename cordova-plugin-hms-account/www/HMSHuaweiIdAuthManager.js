"use strict";
/*
    Copyright 2020-2022. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAuthScopes = exports.containScopes = exports.getAuthResultWithScope = exports.getAuthResult = void 0;
const utils_1 = require("./utils");
function getAuthResult(packageName) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthManager', ['getAuthResult', packageName]);
}
exports.getAuthResult = getAuthResult;
function getAuthResultWithScope(authScopeList, packageName) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthManager', ['getAuthResultWithScope', authScopeList, packageName]);
}
exports.getAuthResultWithScope = getAuthResultWithScope;
function containScopes(authHuaweiId, authScopeList, packageName) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthManager', ['containScopes', authHuaweiId, authScopeList, packageName]);
}
exports.containScopes = containScopes;
function addAuthScopes(requestCode, authScopeList, packageName) {
    return (0, utils_1.asyncExec)('HMSAccount', 'HMSAuthManager', ['addAuthScopes', requestCode, authScopeList, packageName]);
}
exports.addAuthScopes = addAuthScopes;
//# sourceMappingURL=HMSHuaweiIdAuthManager.js.map