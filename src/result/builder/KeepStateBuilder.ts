//  Copyright 2018, Venkat Peri.
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the
//  "Software"), to deal in the Software without restriction, including
//  without limitation the rights to use, copy, modify, merge, publish,
//  distribute, sublicense, and/or sell copies of the Software, and to permit
//  persons to whom the Software is furnished to do so, subject to the
//  following conditions:
//
//  The above copyright notice and this permission notice shall be included
//  in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
//  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
//  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
//  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
//  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
//  USE OR OTHER DEALINGS IN THE SOFTWARE.

import { KeepStateAndData } from "../";
import KeepState from "../KeepState"
import Result from "../Result";
import ResultWithData from "../ResultWithData"
import ResultBuilder from "./ResultBuilder";


/**
 * A {ResultBuilder} with a {KeepState|KeepStateAndData} result
 */
export default class KeepStateBuilder extends ResultBuilder {

    /**
     * @hidden
     * @param data
     * @return {KeepStateAndData}
     */
    getResult<TData>(data?: TData): Result | ResultWithData<TData> {
        return this._updates.length === 0 ?
               new KeepStateAndData(...this._actions) :
               new KeepState(this.applyUpdates(data), ...this._actions)
    }
}

