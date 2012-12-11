
/**
 * Module dependencies.
 */

var domify = require('domify')
  , event = require('event')
  , html = require('./template');

/**
 * Expose `Audio`.
 */

module.exports = Audio;

/**
 * Initialize a new `Audio` instance with the given `el`.
 *
 * @param {Element} el
 * @api public
 */

function Audio(el) {
  if (!(this instanceof Audio)) return new Audio(el);
  this.audio = el;
  this.el = domify(html)[0];
  el.parentNode.insertBefore(this.el, this.audio);
  event.bind(this.el, 'click', this.toggle.bind(this));
  event.bind(el, 'timeupdate', this.ontimeupdate.bind(this));
}

/**
 * Update playback process indicator.
 *
 * @api private
 */

Audio.prototype.ontimeupdate = function(){
  var el = this.audio;
  var p = el.currentTime / el.duration * 100;
};

/**
 * Toggle play state.
 *
 * @api public
 */

Audio.prototype.toggle = function(){
  if (this.audio.paused) {
    this.play();
  } else {
    this.pause();
  }
};

/**
 * Start playing the audio.
 *
 * @api public
 */

Audio.prototype.play = function(){
  this.audio.play();
};

/**
 * Start playing the audio.
 *
 * @api public
 */

Audio.prototype.pause = function(){
  this.audio.pause();
};

