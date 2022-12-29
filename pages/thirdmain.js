var a = +prompt('Enter your age in numbers');
if( 0 < a && a <= 18 ){
    alert('You are still young, you need to study at your age.');
    console.log('You are still young, you need to study at your age');
} else if (18 < a && a <= 50) {
    alert('You have to work at your age.')
    console.log('You have to work at your age.');
} else if (50 < a && a<= 59) {
    alert('You are at the retirement age.')
    console.log('You are at the retirement age.');
} else if (59 < a && a <= 100) {
    alert('You must be retired.')
    console.log('You must be retired.');
}else {
    alert('Something went wrong');
    console.log('Something went wrong');
}



