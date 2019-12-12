<h1 align="center">Clock</h1>

<h4 align="center">Simple clock to get current time using delta-time</h4>

<blockquote align="center">
  <em>Developped to be used with really old browsers and with or without module bundler.</em><br>
  <em>Fast & <b>~550B</b> gzipped</em>
</blockquote>

<p align="center">
  <a aria-label="current github tag" href="https://github.com/bastienrobert/clock/tags">
    <img alt="" src="https://img.shields.io/github/tag/bastienrobert/clock.svg">
  </a>
  <a aria-label="install size" href="https://bundlephobia.com/result?p=@bastienrobert/clock">
    <img alt="" src="https://badgen.net/bundlephobia/minzip/@bastienrobert/clock">
  </a>
  <a aria-label="maintainability" href="https://codeclimate.com/github/bastienrobert/clock/maintainability">
    <img alt="" src="https://api.codeclimate.com/v1/badges/fef7c4b4abd93e6fa943/maintainability" />
  </a>
  <a aria-label="license" href="https://github.com/bastienrobert/clock/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/github/license/bastienrobert/clock.svg">
  </a>
</p>

## Install

```
npm install @bastienrobert/clock
```

## Usage

```
import Clock from '@bastienrobert/clock'

const clock = new Clock()

requestAnimationFrame(() => {
  const delta = clock.update()
  console.log(delta, clock.currentTime)
})
```

## API

- `clock.currentTime`: elapsed time since the clock has been start
- `clock.state`: current state of the clock (enum State is exported too for Typescript)
- `clock.now`: latest `Date.now()` recorded by the clock
- `clock.last`: latest `Date.now()` recorded before `clock.now`

### Methods

| Method | Description                                                                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Start  | Set the current time to 0 and start the clock, **returns state**                                                                                             |
| Resume | Resume the current time after STOP (the current time is computed with a delta-time, the elapsed time between stop and resume is included), **returns state** |
| Stop   | Stop the current time (without reset of the current time), **returns state**                                                                                 |
| Update | Update the current time, need to be in your loop, **returns elapsed (delta) time between last call**                                                         |
