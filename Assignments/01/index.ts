const promptSync = require('prompt-sync')();
console.log(`\n\n`)
console.log(` ██████╗██╗     ██╗     ██████╗ █████╗ ██╗      ██████╗██╗   ██╗██╗      █████╗ ████████╗ ██████╗ ██████╗ 
██╔════╝██║     ██║    ██╔════╝██╔══██╗██║     ██╔════╝██║   ██║██║     ██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
██║     ██║     ██║    ██║     ███████║██║     ██║     ██║   ██║██║     ███████║   ██║   ██║   ██║██████╔╝
██║     ██║     ██║    ██║     ██╔══██║██║     ██║     ██║   ██║██║     ██╔══██║   ██║   ██║   ██║██╔══██╗
╚██████╗███████╗██║    ╚██████╗██║  ██║███████╗╚██████╗╚██████╔╝███████╗██║  ██║   ██║   ╚██████╔╝██║  ██║
 ╚═════╝╚══════╝╚═╝     ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
                                                                                                          `);
                                                                                                          
console.log('\t 【﻿Ｂｙ：　Ａｈｍｅｄ】');
console.log('Welcome to the Calculator');
let option:string= promptSync('Do you want to continue or exit Press(Y/N) ');
if(option == 'Y' || option == 'y'){
    let temp: boolean=true;
    while(temp){
    console.log('You have selected to continue\n\n');
    let numb1:number = promptSync('Enter 1st Number? ');
    let numb2:number = promptSync('Enter 2nd Number? ');
    console.log(`\n`)
    numb1 = Number(numb1)
    numb2 = Number(numb2)
    let expression:number = promptSync(`𝘍𝘰𝘳 𝘈𝘳𝘢𝘵𝘩𝘮𝘢𝘵𝘪𝘤 𝘖𝘱𝘳𝘢𝘵𝘪𝘰𝘯 𝘚𝘦𝘭𝘦𝘤𝘵 𝘧𝘳𝘰𝘮 1 𝘵𝘰 12:
    01:Addition
    02:Subtraction
    03:Multiplication
    04:Division
    05:Modulus
    06:Increment
    07:Decrement
    08:Power
    09:Square Root
    10:Square
    11:Cube
    12:Cube Root
    
𝘍𝘰𝘳 𝘊𝘰𝘯𝘥𝘪𝘯𝘵𝘪𝘰𝘯𝘢𝘭 𝘖𝘱𝘳𝘢𝘵𝘪𝘰𝘯 𝘚𝘦𝘭𝘦𝘤𝘵 𝘧𝘳𝘰𝘮 13 𝘵𝘰 17:
    13:Equal Check
    14:Equality with Data Type Check
    15:Enequality Check
    16:Greater Than Check
    17:Less Than Check
    \n\t  OR \n１８： ＥＸＩＴ \n` );
    expression = Number(expression)
    switch (expression) {
        case 1:
            console.log(`Addition of ${numb1} and ${numb2} is: ${numb1+numb2}`)
          break;
        case 2:
            console.log(`Subtraction of ${numb1} and ${numb2} is: ${numb1-numb2}`)
          break;
        case 3:
            console.log(`Multiplication of ${numb1} and ${numb2} is: ${numb1*numb2}`)
          break;
        case 4:
            console.log(`Division of ${numb1} and ${numb2} is: ${numb1/numb2}`)
          break;
        case 5:
            console.log(`Modulus of ${numb1} and ${numb2} is: ${numb1%numb2}`)
          break;
        case 6:
            console.log(`Increment of ${numb1} and ${numb2} is: ${numb1++} and ${numb2++}`)
          break;
        case 7:
            console.log(`Decrement of ${numb1} and ${numb2} is: ${numb1--} and ${numb2--}`)
          break;
        case 8:
            console.log(`Power of ${numb1} to ${numb2} is: ${numb1**numb2}`)
          break;
        case 9:
            console.log(`Square Root of ${numb1} and ${numb2} is: ${numb1**1/2} and ${numb2**1/2}`)
          break;
        case 10:
            console.log(`Square of ${numb1} and ${numb2} is: ${numb1**2} and ${numb2**2}`)
          break;
        case 11:
            console.log(`Cube of ${numb1} and ${numb2} is: ${numb1**3} and ${numb2**3}`)
          break;
        case 12:
            console.log(`Cube Root of ${numb1} and ${numb2} is: ${numb1*numb2}`)
          break;
        case 13:
            console.log(`Equality`)
            if(numb1 == numb2){
                console.log('Both are Equal');
            }
            else{
                console.log('Both are Not Equal');
            }
          break;
        case 14:
            console.log(`Equality with Data Type Check`)
            if(numb1 === numb2){
                console.log('Both are Equal with Datatype');
            }
            else{
                console.log('Both are Not Equal alongwith Datatype');
            }
          break;
        case 15:
            console.log(`Enequality Check`)
            if(numb1 != numb2){
                console.log('Both are Not Equal');
            }
            else{
                console.log('Both are Equal');
            }
          break;
        case 16:
            console.log(`Greater Than Check`)
            if(numb1 > numb2){
                console.log('First Number is Greater than Second Number');
            }
            else{
                console.log('First Number is not Greater than Second Number');
            }
          break;
        case 17:
            console.log(`Less Than Check`)
            if(numb1 < numb2){
                console.log('First Number is Less than Second Number');
            }
            else{
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
else if(option == 'N' || option == 'n'){
    console.log('You have selected to Exit');
    console.log('Thank you for using our Application');
    console.log('Bye Bye');
}

else{
    console.log('Invalid Input');
}
