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

import { asyncExec } from './utils'
import { Account, AuthScopeList } from './HMSCommonTypes';

export function deleteAuthInfo(accessToken: string): Promise<void> {
  return asyncExec('HMSAccount', 'HMSHuaweiIdAuthTool', ['deleteAuthInfo',accessToken]);
}

export function requestUnionId(huaweiAccountName: string): Promise<string> {
  return asyncExec('HMSAccount', 'HMSHuaweiIdAuthTool', ['requestUnionId',huaweiAccountName]);
}

export function requestAccessToken(account: Account, authScopeList: AuthScopeList[]): Promise<string> {
  return asyncExec('HMSAccount', 'HMSHuaweiIdAuthTool', ['requestAccessToken',account, authScopeList]);
}

