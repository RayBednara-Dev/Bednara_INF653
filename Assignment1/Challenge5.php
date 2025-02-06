<?php
//check if the year is a leap year
function isLeapYear($year) {
    //math to check if leapyear
    if (($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

// Example
$year = 2024; 

if (isLeapYear($year)) {
    echo $year . " is a leap year.\n";
} else {
    echo $year . " is not a leap year.\n";
}

?>