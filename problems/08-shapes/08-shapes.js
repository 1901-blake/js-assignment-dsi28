/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. 
Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case 'Square':
      for (let j = 0; j < height; j++) {
        let square='';
        for (let i = 0; i < height; i++) {
          square=square+character;
        }
        console.log(square);
      }    
      break;
    case 'Triangle':
      let tri= ''
      for (let i = 0; i < height; i++) {
        tri=tri+character;
        console.log(tri);
      }
    break;
    case 'Diamond':
      let dia= new Array(height);
      dia.fill(' ');
      let center= Math.floor(height/2);
      dia[center]=character;
      for (let i = 0; i < height; i++) {
        if(i<= center){
          dia[center-i]= dia[center+i]=character;
        }else{
          dia[i-center-1]=dia[height-i+center]=' ';
        }
        console.log(dia.join(""));
      }
      break;
    default:
      console.log('Invalid Shape');
      break;
  }
}
printShape('Square', 7, "$")