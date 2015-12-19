'use strict'

const events = require('events')


class MultiEventEmitter extends events.EventEmitter {

  constructor() {
    super()
  }

  addListener(events, listener) {
    splitAndApply(this, super.addListener, arguments)
  }

  on(events, listener) {
    splitAndApply(this, super.on, arguments)
  }

  once(events, listener) {
    splitAndApply(this, super.once, arguments)
  }

  removeAllListeners(events) {
    splitAndApply(this, super.removeAllListeners, arguments)
  }

  removeListener(events, listener) {
    splitAndApply(this, super.removeListener, arguments)
  }

}


exports = module.exports = MultiEventEmitter
exports.EventEmitter = MultiEventEmitter
exports.MultiEventEmitter = MultiEventEmitter


function splitAndApply(ctx, method, args) {
  args = Array.from(args)

  if (args.length > 0) {
    const events = args[0]

    if (typeof(events) === 'string') {
      method.apply(ctx, args)
    }
    else for (const event of Array.from(events)) {
      args[0] = event
      method.apply(ctx, args)
    }
  }
  else {
    method.apply(ctx, args)
  }
}
