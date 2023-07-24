var promptSync = require('prompt-sync')();
console.log("\n\n");
console.log(" \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255A\u2550\u2550\u2588\u2588\u2554\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\n\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551    \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551    \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\n \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D   \u255A\u2550\u255D    \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u255D\n                                                                                                          ");
console.log('\t 【﻿Ｂｙ：　Ａｈｍｅｄ】');
console.log('Welcome to the Calculator');
var option = promptSync('Do you want to continue or exit Press(Y/N) ');
if (option == 'Y' || option == 'y') {
    var temp = true;
    while (temp) {
        console.log('You have selected to continue\n\n');
        var numb1 = promptSync('Enter 1st Number? ');
        var numb2 = promptSync('Enter 2nd Number? ');
        console.log("\n");
        numb1 = Number(numb1);
        numb2 = Number(numb2);
        var expression = promptSync("\uD835\uDE0D\uD835\uDE30\uD835\uDE33 \uD835\uDE08\uD835\uDE33\uD835\uDE22\uD835\uDE35\uD835\uDE29\uD835\uDE2E\uD835\uDE22\uD835\uDE35\uD835\uDE2A\uD835\uDE24 \uD835\uDE16\uD835\uDE31\uD835\uDE33\uD835\uDE22\uD835\uDE35\uD835\uDE2A\uD835\uDE30\uD835\uDE2F \uD835\uDE1A\uD835\uDE26\uD835\uDE2D\uD835\uDE26\uD835\uDE24\uD835\uDE35 \uD835\uDE27\uD835\uDE33\uD835\uDE30\uD835\uDE2E 1 \uD835\uDE35\uD835\uDE30 12:\n    01:Addition\n    02:Subtraction\n    03:Multiplication\n    04:Division\n    05:Modulus\n    06:Increment\n    07:Decrement\n    08:Power\n    09:Square Root\n    10:Square\n    11:Cube\n    12:Cube Root\n    \n\uD835\uDE0D\uD835\uDE30\uD835\uDE33 \uD835\uDE0A\uD835\uDE30\uD835\uDE2F\uD835\uDE25\uD835\uDE2A\uD835\uDE2F\uD835\uDE35\uD835\uDE2A\uD835\uDE30\uD835\uDE2F\uD835\uDE22\uD835\uDE2D \uD835\uDE16\uD835\uDE31\uD835\uDE33\uD835\uDE22\uD835\uDE35\uD835\uDE2A\uD835\uDE30\uD835\uDE2F \uD835\uDE1A\uD835\uDE26\uD835\uDE2D\uD835\uDE26\uD835\uDE24\uD835\uDE35 \uD835\uDE27\uD835\uDE33\uD835\uDE30\uD835\uDE2E 13 \uD835\uDE35\uD835\uDE30 17:\n    13:Equal Check\n    14:Equality with Data Type Check\n    15:Enequality Check\n    16:Greater Than Check\n    17:Less Than Check\n    \n\t  OR \n\uFF11\uFF18\uFF1A \uFF25\uFF38\uFF29\uFF34 \n");
        expression = Number(expression);
        switch (expression) {
            case 1:
                console.log("Addition of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 + numb2));
                break;
            case 2:
                console.log("Subtraction of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 - numb2));
                break;
            case 3:
                console.log("Multiplication of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 * numb2));
                break;
            case 4:
                console.log("Division of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 / numb2));
                break;
            case 5:
                console.log("Modulus of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 % numb2));
                break;
            case 6:
                console.log("Increment of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 += 1, " and ").concat(numb2 += 1));
                break;
            case 7:
                console.log("Decrement of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 -= 1, " and ").concat(numb2 -= 1));
                break;
            case 8:
                console.log("Power of ".concat(numb1, " to ").concat(numb2, " is: ").concat(Math.pow(numb1, numb2)));
                break;
            case 9:
                console.log("Square Root of ".concat(numb1, " and ").concat(numb2, " is: ").concat(Math.pow(numb1, 1) / 2, " and ").concat(Math.pow(numb2, 1) / 2));
                break;
            case 10:
                console.log("Square of ".concat(numb1, " and ").concat(numb2, " is: ").concat(Math.pow(numb1, 2), " and ").concat(Math.pow(numb2, 2)));
                break;
            case 11:
                console.log("Cube of ".concat(numb1, " and ").concat(numb2, " is: ").concat(Math.pow(numb1, 3), " and ").concat(Math.pow(numb2, 3)));
                break;
            case 12:
                console.log("Cube Root of ".concat(numb1, " and ").concat(numb2, " is: ").concat(numb1 * numb2));
                break;
            case 13:
                console.log("Equality");
                if (numb1 == numb2) {
                    console.log('Both are Equal');
                }
                else {
                    console.log('Both are Not Equal');
                }
                break;
            case 14:
                console.log("Equality with Data Type Check");
                if (numb1 === numb2) {
                    console.log('Both are Equal with Datatype');
                }
                else {
                    console.log('Both are Not Equal alongwith Datatype');
                }
                break;
            case 15:
                console.log("Enequality Check");
                if (numb1 != numb2) {
                    console.log('Both are Not Equal');
                }
                else {
                    console.log('Both are Equal');
                }
                break;
            case 16:
                console.log("Greater Than Check");
                if (numb1 > numb2) {
                    console.log('First Number is Greater than Second Number');
                }
                else {
                    console.log('First Number is not Greater than Second Number');
                }
                break;
            case 17:
                console.log("Less Than Check");
                if (numb1 < numb2) {
                    console.log('First Number is Less than Second Number');
                }
                else {
                    console.log('First Number is not Less than Second Number');
                }
                break;
            case 18:
                temp = false;
                console.log('You have selected to Exit');
                console.log('Thank you for using our Application');
                console.log('Bye Bye');
                break;
            default:
                console.log('Invalid Input');
                break;
        }
    }
}
else if (option == 'N' || option == 'n') {
    console.log('You have selected to Exit');
    console.log('Thank you for using our Application');
    console.log('Bye Bye');
}
else {
    console.log('Invalid Input');
}
