/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
  "x-xxxxxxxxxxxxxxxxxxxx",
  "x-x-------x-xx------xx",
  "x-x-x-x-x------xxxx--x",
  "x----xx-x-x-xxxx---x-x",
  "xxx-x--xx-x-x----x-x-x",
  "x---x-x--x--x-x--x---x",
  "x-x---xx-x-xx---x--x-x",
  "x-x-x----x-----xxx--xx",
  "x-x-xx-x-x-x-x-xx-x-xx",
  "xx--x-x--x-x------x--",
  "x--x---------x-x---xxx",
  "xxxxxxxxxxxxxxxxxxxxxx",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c,1,r)
      }
    }
    
  }

})