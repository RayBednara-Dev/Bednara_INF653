<?php

function checkOddness($input) {
    if ($input % 2 == 0) {
        echo $input . " is an even number \n";
    } else {
        echo $input . " is an odd number \n";
    }
}

//example
$input = 8;

checkOddness($input);
?>