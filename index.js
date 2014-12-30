var moment = require('moment');

module.exports = {

  /**
   * Return whether a date occurs on a weekend i.e. a Saturday or Sunday
   * @param   {Moment} date
   * @returns {Boolean}
   */
  isWeekend: function(date) {
    date = moment(date);
    return date.day() === 0 || date.day() === 6;
  },

  /**
   * Return whether a date occurs on a specific day of the month
   * @param   {Moment} date
   * @param   {Number} dom  The day of the month as a number between 1 and 31
   * @returns {Boolean}
   */
  isDayOfMonth: function(date, dom) {
    date = moment(date);
    return date.date() === dom;
  },

  /**
   * Return whether a date occurred before another date
   * @param   {Moment} date
   * @param   {Moment} before
   * @param   {String} [measurement]
   * @returns {Boolean}
   */
  isBefore: function(date, before, measurement) {
    date = moment(date);
    return before.diff(date, measurement) > 0;
  },

  /**
   * Return whether a date occurred after another date
   * @param   {Moment} date
   * @param   {Moment} after
   * @param   {String} [measurement]
   * @returns {Boolean}
   */
  isAfter: function(date, after, measurement) {
    date = moment(date);
    return after.diff(date, measurement) < 0;
  },

  /**
   * Return whether a date occurred before today
   * @param   {Moment} date
   * @returns {Boolean}
   */
  isBeforeToday: function(date) {
    date = moment(date);
    return this.isBefore(date, moment(), 'days');
  },

  /**
   * Return whether a date occurred after today
   * @param   {Moment} date
   * @returns {Boolean}
   */
  isAfterToday: function(date) {
    date = moment(date);
    return this.isAfter(date, moment(), 'days');
  }

};