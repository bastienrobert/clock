'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

(function (State) {
    State[State["On"] = 0] = "On";
    State[State["Off"] = 1] = "Off";
})(exports.State || (exports.State = {}));
var Clock = /** @class */ (function () {
    function Clock(autostart) {
        if (autostart === void 0) { autostart = true; }
        this.state = exports.State.Off;
        this.now = 0;
        this.last = 0;
        this.currentTime = 0;
        if (autostart)
            this.start();
    }
    /**
     * start the clock
     */
    Clock.prototype.start = function () {
        this.state = exports.State.On;
        this.now = Date.now();
        this.last = this.now;
        this.currentTime = 0;
        return this.state;
    };
    /**
     * resume the clock
     */
    Clock.prototype.resume = function () {
        this.state = exports.State.On;
        return this.state;
    };
    /**
     * update the current time
     */
    Clock.prototype.update = function () {
        if (this.state === exports.State.Off)
            return;
        this.now = Date.now();
        var delta = this.now - this.last;
        this.currentTime += delta;
        this.last = this.now;
        return delta;
    };
    /**
     * stop the clock update
     */
    Clock.prototype.stop = function () {
        this.state = exports.State.Off;
        return this.state;
    };
    return Clock;
}());

exports.default = Clock;
