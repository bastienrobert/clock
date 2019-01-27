# Clock

[![npm version](https://badge.fury.io/js/%40bastienrobert%2Fclock.svg)](https://badge.fury.io/js/%40bastienrobert%2Fclock)

[Demo](https://bastienrobert.github.io/clock) - [Demo with imports in Codesandbox](https://codesandbox.io/s/5q31xvmn4)

Simple clock to get current time using delta-time.

Developped to be used with really old browsers and with or without module bundler.

⚠ It hasn't been test in production for the moment.

## Install

You can install this package using NPM: `npm i @bastienrobert/clock`, or download the `index.js` file.

## How to use?

Import the Clock in a `<script>` tag or using AMD or `import` if you're using a module bundle.

Then, create a new clock instance:

```js
// Without autostart
const clock = new Clock()
clock.start()

// With autostart
const clock = new Clock(true)
```

And update the clock in your loop:

```js
function update() {
  requestAnimationFrame(update)
  clock.update()
}
```

There it is!

## Methods

| Method | Description                                                                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start  | Set the current time to 0 and start the clock                                                                                                        |
| Resume | Resume the current time after STOP (⚠️ Because the current time is computed with a delta-time, the elapsed time between stop and resume is included) |
| Stop   | Stop the current time (without reset of the current time)                                                                                            |
| Update | Update the current time, need to be in your loop                                                                                                     |

... and of course, there's JSDoc.

## API

- `clock.currentTime`: elapsed time since the clock has been start
- `clock._isRunning`: current state of the clock
- `clock._now`: latest `Date.now()` recorded by the clock
- `clock._lastTime`: latest `Date.now()` recorded before `clock._now`
