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

import { expect } from 'chai'
import 'mocha'
import StateMachine, { nextState } from "..";

let sm

describe('SM data', () => {
    beforeEach(() => {
        sm = new StateMachine<string>({
            handlers: [
                ['cast#next#ONE', () =>
                    nextState('TWO').data({$set: 'ONE'})],

                ['cast#next#TWO', () => nextState('ONE')],
            ],
            initialData: 'DATA',
            initialState: "ONE",
        })
        sm.startSM()
    })

    it("sets initial data", async () => {
        expect(await sm.getData()).to.eq('DATA')
    })

    it("Updates data via action", async () => {
        sm.cast('next')
        expect(await sm.getData()).to.eq('ONE')
    })

})


