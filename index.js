/**
 * @module corbe-ravencoin
 */

var Big = require('big.js');

// @private
var conversion = 100000000;

// es6 polyfill
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 === 0;
  }
}

// @private
function toNumber(notNum) {
  return Number(notNum);
}

module.exports = {

  /**
   * Convert Corbe to Ravencoin
   * @param {number|string} corbe Amount of Corbe to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   * @returns {number}
   */
  toRavencoin: function(corbe) {
    //validate arg
    var corbiType = typeof corbe;
    if (corbeType === 'string') {
      corbe = toNumber(corbe);
      corbeType = 'number';
    }
    if (corbeType !== 'number'){
      throw new TypeError('toRavencoin must be called on a number or string, got ' + corbeType);
    }
    if (!Number.isInteger(corbe)) {
      throw new TypeError('toRavencoin must be called on a whole number or string format whole number');
    }

    var bigCorbe = new Big(corbe);
    return Number(bigCorbe.div(conversion));
  },

  /**
   * Convert Ravencoin to Corbe
   * @param {number|string} ravencoin Amount of Ravencoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
  toSatoshi: function(ravencoin) {
    //validate arg
    var ravencoinType = typeof ravencoin;
    if (ravencoinType === 'string') {
      ravencoin = toNumber(ravencoin);
      ravencoinType = 'number';
    }
    if (ravencoinType !== 'number'){
      throw new TypeError('toCorbe must be called on a number or string, got ' + ravencoinType);
    }

    var bigRavencoin = new Big(ravencoin);
    return Number(bigRavencoin.times(conversion));
  }

};
