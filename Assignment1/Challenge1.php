<?php
//create a function to do all challenge math ops
function doMathOps($number1, $number2) {
    //both numbers displayed
    echo "Number 1: " . $number1 . "\n";
    echo "Number 2: " . $number2 . "\n";
    //addition
    $addition = $number1 + $number2;
    echo "addition: " . $addition . "\n";

    //subtraction
    $subtraction = $number1 - $number2;
    echo "subtraction: " . $subtraction . "\n";

    //multiplication
    $multiplication = $number1 * $number2;
    echo "multiplication: " . $multiplication . "\n";

    //division
    //if statement to not allow zero division
    if ($number2 !=0) {
        $division = $number1 / $number2;
        echo "division: " . $division . "\n";
    } else {
        echo "can't divide by zero"
    };

    //modulus
    //if statement to not allow zero modulo
    if ($number2 !=0) {
        $modulo = $number1 % $number2
        echo "modulus: " . $modulo . "\n";
    } else {
        echo "can't use zero modulo"
    };
}


    //example usage
    $number1 = 10;
    $number2 = 5;

    doMathOps($number1, $number2);
?>