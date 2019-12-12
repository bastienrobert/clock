export enum State {
  On = 0,
  Off = 1
}

export default class Clock {
  state: State
  last: number
  now: number
  currentTime: number

  constructor(autostart: boolean = true) {
    this.state = State.Off
    this.now = 0
    this.last = 0
    this.currentTime = 0

    if (autostart) this.start()
  }

  /**
   * start the clock
   */
  public start(): State {
    this.state = State.On
    this.now = Date.now()
    this.last = this.now
    this.currentTime = 0
    return this.state
  }

  /**
   * resume the clock
   */
  public resume(): State {
    this.state = State.On
    return this.state
  }

  /**
   * update the current time
   */
  update(): number {
    if (this.state === State.Off) return
    this.now = Date.now()
    const delta: number = this.now - this.last
    this.currentTime += delta
    this.last = this.now
    return delta
  }

  /**
   * stop the clock update
   */
  stop(): State {
    this.state = State.Off
    return this.state
  }
}
