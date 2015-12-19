'use strict'

const expect = require('chai').expect
const EventEmitter = require('..')

describe('#multi-events', function () {

  it('can listen for a single event using on', function (done) {
    const ev = new EventEmitter()
    ev.on('event', done)
    setTimeout(() => ev.emit('event'), 10)
  })

  it('can listen for multiple events using on', function (done) {
    const ev = new EventEmitter()
    ev.on(['event1', 'event2'], done)
    setTimeout(() => ev.emit('event2'), 10)
  })

  it('can emit multiple events', function (done) {
    const ev = new EventEmitter()
    ev.on('event2', done)
    setTimeout(() => ev.emit(['event1', 'event2']), 10)
  })

  it('can listen for a single event using addListener', function (done) {
    const ev = new EventEmitter()
    ev.addListener('event', done)
    setTimeout(() => ev.emit('event'), 10)
  })

  it('can listen for multiple events using addListener', function (done) {
    const ev = new EventEmitter()
    ev.addListener(['event1', 'event2'], done)
    setTimeout(() => ev.emit('event2'), 10)
  })

  it('can listen for a single event using once', function (done) {
    const ev = new EventEmitter()
    ev.once('event', done)
    setTimeout(() => ev.emit('event'), 10)
  })

  it('can listen for multiple events using once', function (done) {
    const ev = new EventEmitter()
    ev.once(['event1', 'event2'], done)
    setTimeout(() => ev.emit('event2'), 10)
  })

  it('can remove a specific listener for a specific event', function (done) {
    const ev = new EventEmitter()

    ev.on(['event1', 'event2'], done)
    setTimeout(() => ev.emit('event1', new Error('event listener not removed')), 10)
    setTimeout(() => ev.emit('event2'), 30)
    ev.removeListener('event1', done)
  })

  it('can remove a specific listener for multiple events', function (done) {
    const ev = new EventEmitter()

    ev.on(['event1', 'event2', 'event3'], done)
    setTimeout(() => ev.emit('event1', new Error('event listener not removed')), 10)
    setTimeout(() => ev.emit('event2', new Error('event listener not removed')), 10)
    setTimeout(() => ev.emit('event3'), 30)
    ev.removeListener(['event1', 'event2'], done)
  })

  it('can remove all listeners', function (done) {
    const ev = new EventEmitter()

    ev.on('event', done)
    setTimeout(() => ev.emit('event', new Error('event listener not removed')), 10)
    ev.removeAllListeners()
    setTimeout(done, 30)
  })

  it('can remove all listeners for specific events', function (done) {
    const ev = new EventEmitter()

    ev.on(['event1', 'event2'], done)
    setTimeout(() => ev.emit('event1', new Error('event listener not removed')), 10)
    setTimeout(() => ev.emit('event2'), 30)
    ev.removeAllListeners('event1')
  })

  it('can remove all listeners for multiple events', function (done) {
    const ev = new EventEmitter()

    ev.on(['event1', 'event2', 'event3'], done)
    setTimeout(() => ev.emit('event1', new Error('event listener not removed')), 10)
    setTimeout(() => ev.emit('event2', new Error('event listener not removed')), 10)
    setTimeout(() => ev.emit('event3'), 30)
    ev.removeAllListeners(['event1', 'event2'])
  })

})
