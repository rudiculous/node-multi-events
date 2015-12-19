# node-multi-events

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

An extension on the built-in events object, that allows passing multiple events.

##  Installation
`npm install @rdcl/multi-events`

## Usage
```javascript
const EventEmitter = require('@rdcl/multi-events')
```

For the rest the usage is identical to [Node.js Events](https://nodejs.org/api/events.html), except
that everywhere an event is accepted as an argument, you may now also pass an array of events.

## Example
```javascript
'use strict'

const EventEmitter = require('@rdcl/multi-events')
const ev = new EventEmitter()

ev.once(['event1', 'event2'], console.log)
ev.emit('event1', 'This is event1.')
ev.emit('event1', 'This is event1 again.')
ev.emit('event2', 'This is event2.')
// Prints:
// This is event1.
// This is event2.

ev.on(['event1', 'event2', 'event3'], console.log)
ev.removeListener(['event1', 'event2'], console.log)
ev.emit(['event1', 'event2', 'event3'], 'This is an event.')
// Prints:
// This is an event.
```

## Tests
`npm test`


[npm-image]: https://img.shields.io/npm/v/@rdcl/multi-events.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@rdcl/multi-events
[travis-image]: https://img.shields.io/travis/rudiculous/node-multi-events/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/rudiculous/node-multi-events
[coveralls-image]: https://img.shields.io/coveralls/rudiculous/node-multi-events/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/rudiculous/node-multi-events?branch=master
