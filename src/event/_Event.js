// @flow
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

import type {From} from '../types';

export type CallEvent = { type: 'call', from: From }
export type CastEvent = { type: 'cast' }
export type InfoEvent = { type: 'info' }

export type InternalEvent = { type: 'internal' }

export type StateTimeoutEvent = { type: 'stateTimeout' }

export type TimeoutEvent =
  { type: 'timeout', name: Object }
  | StateTimeoutEvent

export type ExternalEvent =
  CallEvent
  | CastEvent
  | InfoEvent

function makeRoute( e, state ) {
  let x = e.args ?
    Object.entries( e.args ).map( ( [k, v] ) => `${k}/${v}` ) :
    undefined
  const eventArgs = x ? `/${x}` : ''

  const route = typeof(e.context) === 'object' ?
    Object.entries( e.context ).map( ( [k, v] ) => `${k}/${v}` ) :
    e.context
  return `${e.type}${eventArgs}#${route}#${state}`
}

type EventHelpers = {
  makeRoute: makeRoute
}

export type Event =
  ExternalEvent
  | TimeoutEvent
  | InternalEvent