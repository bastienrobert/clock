var State;
(function (State) {
    State[State["On"] = 0] = "On";
    State[State["Off"] = 1] = "Off";
})(State || (State = {}));
var Clock = /** @class */ (function () {
    function Clock(autostart) {
        if (autostart === void 0) { autostart = true; }
        this.state = State.Off;
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
        this.state = State.On;
        this.now = Date.now();
        this.last = this.now;
        this.currentTime = 0;
        return this.state;
    };
    /**
     * resume the clock
     */
    Clock.prototype.resume = function () {
        this.state = State.On;
        return this.state;
    };
    /**
     * update the current time
     */
    Clock.prototype.update = function () {
        if (this.state === State.Off)
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
        this.state = State.Off;
        return this.state;
    };
    return Clock;
}());

export default Clock;
export { State };
