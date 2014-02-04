
/**
 * Module dependencies.
 */

var domify = require('domify')
  , event = require('event')
  , html = require('./template')
  , Progress = require('./progress');

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
  this.el = domify(html);
  this.progress = new Progress;
  this.el.appendChild(this.progress.el);
  el.parentNode.insertBefore(this.el, this.audio);
  event.bind(this.el, 'click', this.toggle.bind(this));
  event.bind(el, 'timeupdate', this.ontimeupdate.bind(this));
  event.bind(el, 'ended', this.onended.bind(this));
}

/**
 * Update playback process indicator.
 *
 * @api private
 */

Audio.prototype.ontimeupdate = function(){
  var el = this.audio;
  var n = el.currentTime / el.duration * 100;
  this.progress.update(n);
};

/**
 * Return to initial state when audio ends.
 *
 * @api private
 */
Audio.prototype.onended = function(){
  this.el.className = 'audio stopped';
  this.progress.update(0);
};

/**
 * Toggle play state.
 *
 * @api public
 */

Audio.prototype.toggle = function(e){
  e.preventDefault();
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
  this.el.className = 'audio playing';
};

/**
 * Pause playback of audio.
 *
 * @api public
 */

Audio.prototype.pause = function(){
  this.audio.pause();
  this.el.className = 'audio paused';
};

