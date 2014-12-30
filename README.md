# date-methods

Common date methods.

## Installation

    component install component/event

## Usage

    var methods = require('date-methods');

    methods.isWeekend('2015-01-04'); //true => We gonna party!

## API

### .isWeekend(date : Moment) : Boolean

### .isDayOfMonth(date : Moment, dom : Number) : Boolean

### .isBefore(date : Moment, before : Moment) : Boolean

### .isAfter(date : Moment, after : Moment) : Boolean

### .isBeforeToday(date : Moment, before : Moment) : Boolean

### .isAfterToday(date : Moment, after : Moment) : Boolean
