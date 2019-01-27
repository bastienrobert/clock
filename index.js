;(function(root) {
  /**
   * create a new clock
   * @param {boolean} [autostart=true] - Clock starts automaticly
   */
  var Clock = function(autostart) {
    this._isRunning = false
    this._now = 0
    this._lastTime = 0
    this.currentTime = 0

    /**
     * start the clock
     */
    this.start = function() {
      this._isRunning = true
      this._now = Date.now()
      this._lastTime = this._now
      this.currentTime = 0
    }

    /**
     * resume the clock
     */
    this.resume = function() {
      this._isRunning = true
    }

    /**
     * update the current time
     */
    this.update = function() {
      if (!this._isRunning) return
      this._now = Date.now()
      this.currentTime += this._now - this._lastTime
      this._lastTime = this._now
    }

    /**
     * stop the clock update
     */
    this.stop = function() {
      this._isRunning = false
    }

    if (autostart) this.start()
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Clock
    }
    exports.Clock = Clock
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return Clock
    })
  } else {
    root.Clock = Clock
  }
})(this)
