var x = +prompt('Enter your first number')
var y = +prompt('Enter your second number')
var z = +prompt('Enter your third number')

if(x>y && x<z || x<y && x>z){
    alert('Your entered average number is: ' + x);
}else if(y>x && y<z || y<x && y>z){
    alert('Your entered average number is: ' + y);
}else if(z>x && z<y || z<x && z>y){
    alert('Your entered average number is: ' + z);
}else if(x == y == z || x == y && y == z && z == x){
    alert('Please enter numbers that are different from one another');
}else{
    alert('Something went wrong');
}