'use strict'

const events = require('events')


class MultiEventEmitter extends events.EventEmitter {

  constructor() {
    super()
  }

  addListener(events, listener) {
    splitAndApply(this, super.addListener, arguments)
  }

  emit(events, listener) {
    splitAndApply(this, super.emit, arguments)
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
  if (args.length === 0 || typeof(args[0]) === 'string') {
    method.apply(ctx, args)
  }
  else {
    const events = args[0]
    for (const event of events) {
      args[0] = event
      method.apply(ctx, args)
    }
  }
}
