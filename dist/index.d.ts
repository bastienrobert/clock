export declare enum State {
    On = 0,
    Off = 1
}
export default class Clock {
    state: State;
    last: number;
    now: number;
    currentTime: number;
    constructor(autostart?: boolean);
    /**
     * start the clock
     */
    start(): State;
    /**
     * resume the clock
     */
    resume(): State;
    /**
     * update the current time
     */
    update(): number;
    /**
     * stop the clock update
     */
    stop(): State;
}
