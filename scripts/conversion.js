/* ----- Branch Decisions ----- */

/* -- Length Decisions -- */
function convertMeter(num, otherUnit) {
    switch (otherUnit) {
        case "kilometer":
            return meterToKilometer(num);
            break;
        case "centimeter":
            return meterToCentimeter(num);
            break;
        case "millimeter":
            return meterToMillimeter(num);
            break;
        default:   
            return num;
            break;
    }
}

function convertKilometer(num, otherUnit) {
    switch (otherUnit) {
        case "meter":
            return kilometerToMeter(num);
            break;
        case "centimeter":
            return kilometerToCentimeter(num);
            break;
        case "millimeter":
            return kilometerToMillimeter(num);
            break;
        default:
            return num;
            break;
    }
}

function convertCentimeter(num, otherUnit) {
    switch (otherUnit) {
        case "meter":
            return centimeterToMeter(num);
            break;
        case "kilometer":
            return centimeterToKilometer(num);
            break;
        case "millimeter":
            return centimeterToMillimeter(num);
            break;
        default:
            return num;
            break;
    }
}

function convertMillimeter(num, otherUnit) {
    switch (otherUnit) {
        case "meter":
            return millimeterToMeter(num);
            break;
        case "kilometer":
            return millimeterToKilometer(num);
            break;
        case "centimeter":
            return millimeterToCentimeter(num);
            break;
        default:
            return num;
            break;
    }
}


/* -- Time Decsisions -- */
function convertYear(num, otherUnit) {
    switch (otherUnit) {
        case "month":
            return yearToMonth(num);
            break;
        case "week":
            return yearToWeek(num);
            break;
        case "day":
            return yearToDay(num);
            break;
        case "hour":
            return yearToHour(num);
            break;
        case "minute":
            return yearToMinute(num);
            break;
        case "second":
            return yearToSecond(num);
            break;
        case "millisecond":
            return yearToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertMonth(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return monthToYear(num);
            break;
        case "week":
            return monthToWeek(num);
            break;
        case "day":
            return monthToDay(num);
            break;
        case "hour":
            return monthToHour(num);
            break;
        case "minute":
            return monthToMinute(num);
            break;
        case "second":
            return monthToSecond(num);
            break;
        case "millisecond":
            return monthToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertWeek(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return weekToYear(num);
            break;
        case "month":
            return weekToMonth(num);
            break;
        case "day":
            return weekToDay(num);
            break;
        case "hour":
            return weekToHour(num);
            break;
        case "minute":
            return weekToMinute(num);
            break;
        case "second":
            return weekToSecond(num);
            break;
        case "millisecond":
            return weekToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertDay(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return dayToYear(num);
            break;
        case "month":
            return dayToMonth(num);
            break;
        case "week":
            return dayToWeek(num);
            break;
        case "hour":
            return dayToHour(num);
            break;
        case "minute":
            return dayToMinute(num);
            break;
        case "second":
            return dayToSecond(num);
            break;
        case "millisecond":
            return dayToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertHour(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return hourToYear(num);
            break;
        case "month":
            return hourToMonth(num);
            break;
        case "week":
            return hourToWeek(num);
            break;
        case "day":
            return hourToDay(num);
            break;
        case "minute":
            return hourToMinute(num);
            break;
        case "second":
            return hourToSecond(num);
            break;
        case "millisecond":
            return hourToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertMinute(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return minuteToYear(num);
            break;
        case "month":
            return minuteToMonth(num);
            break;
        case "day":
            return minuteToDay(num);
            break;
        case "week":
            return minuteToWeek(num);
            break;
        case "day":
            return minuteToDay(num);
            break;
        case "second":
            return minuteToSecond(num);
            break;
        case "millisecond":
            return minuteToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertSecond(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return secondToYear(num);
            break;
        case "month":
            return secondToMonth(num);
            break;
        case "day":
            return secondToDay(num);
            break;
        case "week":
            return secondToWeek(num);
            break;
        case "day":
            return secondToDay(num);
            break;
        case "hour":
            return secondToHour(num);
            break;
        case "millisecond":
            return secondToMillisecond(num);
            break;
        default:
            return num;
            break;
    }
}

function convertMillisecond(num, otherUnit) {
    switch (otherUnit) {
        case "year":
            return millisecondToYear(num);
            break;
        case "month":
            return millisecondToMonth(num);
            break;
        case "day":
            return millisecondToDay(num);
            break;
        case "week":
            return millisecondToWeek(num);
            break;
        case "day":
            return millisecondToDay(num);
            break;
        case "hour":
            return millisecondToHour(num);
            break;
        case "second":
            return millisecondToSecond(num);
            break;
        default:
            return num;
            break;
    }
}


/* -- Weight Decisions -- */
function convertKilogram(num, otherUnit) {
    switch (otherUnit) {
        case "gram":
            return kilogramToGram(num);
            break;
        case "milligram":
            return kilogramToMilligram(num);
            break;
        default:   
            return num;
            break;
    }
}

function convertGram(num, otherUnit) {
    switch (otherUnit) {
        case "kilogram":
            return gramToKilogram(num);
            break;
        case "milligram":
            return gramToMilligram(num);
            break;
        default:   
            return num;
            break;
    }
}

function convertMilligram(num, otherUnit) {
    switch (otherUnit) {
        case "kilogram":
            return milligramToKilogram(num);
            break;
        case "gram":
            return milligramToGram(num);
            break;
        default:   
            return num;
            break;
    }
}



/* ----- Unit Conversions ----- */

/* -- Length Conversions -- */
/* Meter Conversions */
function meterToKilometer(num) {
    return num / 1000;
}

function meterToCentimeter(num) {
    return num * 100;
}

function meterToMillimeter(num) {
    return num * 1000;
}

/* Kilometer Conversions */
function kilometerToMeter(num) {
    return num * 1000;
}

function kilometerToCentimeter(num) {
    return num * 100000;
}

function kilometerToMillimeter(num) {
    return num * 1e6;
}

/* Centimeter Conversions */
function centimeterToMeter(num) {
    return num / 100;
}

function centimeterToKilometer(num) {
    return num / 100000;
}

function centimeterToMillimeter(num) {
    return num * 10;
}

/* Millimeter Conversions */
function millimeterToMeter(num) {
    return num / 1000;
}

function millimeterToKilometer(num) {
    return num / 1e16;
}

function millimeterToCentimeter(num) {
    return num / 10;
}


/* -- Time Conversions -- */
/* Year Conversions */
function yearToMonth(num) {
    return num * 12;
}

function yearToWeek(num) {
    return num * 52.143;
}

function yearToDay(num) {
    return num * 365;
}

function yearToHour(num) {
    return num * 8760;
}

function yearToMinute(num) {
    return num * 525600;
}

function yearToSecond(num) {
    return num * 3.154e7;
}

function yearToMillisecond(num) {
    return num * 3.154e10;
}

/* Month Conversions */
function monthToYear(num) {
    return num / 12;
}

function monthToWeek(num) {
    return num * 4.345;
}

function monthToDay(num) {
    return num * 30.417;
}

function monthToHour(num) {
    return num * 730.001;
}

function monthToMinute(num) {
    return num * 43800.048;
}

function monthToSecond(num) {
    return num * 2.628e6;
}

function monthToMillisecond(num) {
    return num * 2.628e9;
}

/* Week Conversions */
function weekToYear(num) {
    return num / 52.143;
}

function weekToMonth(num) {
    return num / 4.345;
}

function weekToDay(num) {
    return num * 7;
}

function weekToHour(num) {
    return num * 168;
}

function weekToMinute(num) {
    return num * 10080;
}

function weekToSecond(num) {
    return num * 604800;
}

function weekToMillisecond(num) {
    return num * 6.048e8;
}

/* Day Conversions */
function dayToYear(num) {
    return num / 365;
}

function dayToMonth(num) {
    return num / 12;
}

function dayToWeek(num) {
    return num / 7;
}

function dayToHour(num) {
    return num * 24;
}

function dayToMinute(num) {
    return num * 24 * 60;
}

function dayToSecond(num) {
    return num * 24 * 60 * 60;
}

function dayToMillisecond(num) { 
    return num * 24 * 60 * 60 * 1000;
}

/* Hour Conversions */
function hourToYear(num) {
    return num / 8760;
}

function hourToMonth(num) {
    return num / 730.001;
}

function hourToWeek(num) {
    return num / 168;
}

function hourToDay(num) {
    return num / 24;
}

function hourToMinute(num) {
    return num / 60;
}

function hourToSecond(num) {
    return num / (60 * 60);
}

function hourToMillisecond(num) {
    return num / (60 * 60 * 1000);
}

/* Minute Conversions */
function minuteToYear(num) {
    return num / 525600;
}

function minuteToMonth(num) {
    return num / 43800.048;
}

function minuteToWeek(num) {
    return num / 10080;
}

function minuteToDay(num) {
    return num / 1440;
}

function minuteToHour(num) {
    return num / 60;
}

function minuteToSecond(num) {
    return num * 60;
}

function minuteToMillisecond(num) {
    return num * 60 * 1000;
}

/*  Second Conversions */
function secondToYear(num) {
    return num / 3.154e7;
}

function secondToMonth(num) {
    return num / 2.628e6;
}

function secondToWeek(num) {
    return num / 604800;
}

function secondToDay(num) {
    return num / 86400;
}

function secondToHour(num) {
    return num / 3600;
}

function secondToMinute(num) {
    return num / 60;
}

function secondToMillisecond(num) {
    return num * 1000;
}

/* Millisecond Conversions */
function millisecondToYear(num) {
    return num / 3.154e10;
}

function millisecondToMonth(num) {
    return num / 2.628e9;
}

function millisecondToWeek(num) {
    return num / 6.048e8;
}

function millisecondToDay(num) {
    return num / 8.64e7;
}

function millisecondToHour(num) {
    return num / 3.6e6;
}

function millisecondToMinute(num) {
    return num / 60000;
}

function millisecondToSecond(num) {
    return num / 1000;
}



/* -- Mass Conversions -- */
/* Kilogram Conversions */
function kilogramToGram(num) {
    return num * 1000;
}

function kilogramToMilligram(num) {
    return num * 1e6;
}

/* Gram Conversions */
function gramToKilogram(num) {
    return num / 1000;
}

function gramToMilligram(num) {
    return num * 1000;
}

/* Milligram Conversions */
function milligramToKilogram(num) {
    return num / 1e6;
}

function milligramToGram(num) {
    return num / 1000;
}