
/**
 * Module dependencies.
 */

var domify = require('domify')
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
}
