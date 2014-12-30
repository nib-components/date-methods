var assert = require('assert');
var moment = require('moment');
var MockDate = require('mockdate');
var methods = require('date-methods');

describe('dates', function() {

  describe('.isWeekend()', function() {

    it('should be the weekend on a Saturday', function() {
      assert(methods.isWeekend('2015-01-03'));
    });

    it('should be the weekend on a Sunday', function() {
      assert(methods.isWeekend('2015-01-04'));
    });

    it('should not be the weekend on a Monday', function() {
      assert(!methods.isWeekend('2015-01-05'));
    });

    it('should not be the weekend on a Wednesday', function() {
      assert(!methods.isWeekend('2015-01-07'));
    });

    it('should not be the weekend on a Friday', function() {
      assert(!methods.isWeekend('2015-01-09'));
    });

  });

  describe('.isDayOfMonth()', function() {

    it('1st should be the 1st day of the month', function() {
      assert(methods.isDayOfMonth('2015-01-01', 1));
    });

    it('29th should be the 29th day of the month', function() {
      assert(methods.isDayOfMonth('2015-12-29', 29));
    });

    it('21st should not be the 11th day of the month', function() {
      assert(!methods.isDayOfMonth('2015-10-21', 11));
    });

    it('9th should not be the 31th day of the month', function() {
      assert(!methods.isDayOfMonth('2015-10-09', 31));
    });

  });

  describe('.isBeforeToday()', function() {

    it('last year should be before today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(methods.isBeforeToday('2014-01-01'));
      MockDate.reset();
    });

    it('yesterday should be before today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(methods.isBeforeToday('2015-01-02'));
      MockDate.reset();
    });

    it('today should not be before today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(!methods.isBeforeToday('2015-01-03'));
      MockDate.reset();
    });

    it('tomorrow should not be before today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(!methods.isBeforeToday('2015-01-04'));
      MockDate.reset();
    });

  });

  describe('.isAfterToday()', function() {

    it('next year should be after today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(methods.isAfterToday('2016-01-01'));
      MockDate.reset();
    });

    it('yesterday should not be after today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(!methods.isAfterToday('2015-01-02'));
      MockDate.reset();
    });

    it('today should not be after today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(!methods.isAfterToday('2015-01-03'));
      MockDate.reset();
    });

    it('tomorrow should be after today', function() {
      MockDate.set(moment('2015-01-03').toDate());
      assert(methods.isAfterToday('2015-01-04'));
      MockDate.reset();
    });

  });

});
