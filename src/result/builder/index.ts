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

import { State } from "../../State";
import { EventContext, Timeout } from "../../types";
import KeepStateBuilder from "./KeepStateBuilder"
import NextStateBuilder from "./NextStateBuilder";
import ResultBuilder from "./ResultBuilder"


export default ResultBuilder
export { KeepStateBuilder, NextStateBuilder }

export function nextState(state: State): NextStateBuilder {
    return new NextStateBuilder(state)
}

export function keepState(): KeepStateBuilder {
    return new KeepStateBuilder()
}

export function reply(from: string, msg: any): KeepStateBuilder {
    return new KeepStateBuilder().reply(from, msg)
}

export function internalEvent(context?: EventContext): KeepStateBuilder {
    return new KeepStateBuilder().internalEvent(context)
}

export function stateTimeout(time: Timeout): KeepStateBuilder {
    return new KeepStateBuilder().stateTimeout(time)
}

