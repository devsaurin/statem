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

import inspect = require("object-inspect")

/**
 * @hidden
 * @param c
 * @return {string}
 */
export function dataToString(c: any) {
    return inspect(c)
}

/**
 * @hidden
 * Convert data to route
 * @param c
 * @return {string}
 */
export function dataToRoute(c: any) {
    if (c === undefined || c === null) {
        return ''
    }

    if (typeof c === 'object') {
        return Object.entries(c).map(x => x.join('/')).join('/')
    }

    return String(c)
}


/**
 * @hidden
 * @param s
 * @return {string}
 */
export function upperFirst(s: string): string {
    return s[0].toUpperCase() + s.substr(1)
}
