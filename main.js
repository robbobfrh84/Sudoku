var blockz = 0;
var rowNumsSet = " 71 9 8     3 6   49    7 5 1 9     9 2   6 3     8 2 8 5    76   6 7     7 4 35 ";
var rowNumsAns = "371594862528376194496281735614923587982715643753468921845139276239657418167842359";
var cell; var cell2; var bcell; var bcell2;
var block = "<td><div class='blocks'/>";
var block2 = "<td><div class='blocks2'/>";
var blank = "<td><div contenteditable='true' class='blocks' onkeypress='validate(event)'/>";
var blank2 = "<td><div contenteditable='true' class='blocks2' onkeypress='validate(event)'/>";

document.write("<h2>Easy - Medium - Hard (Buttons go here) </h2>");

function startPuzzel(){
  for (var row = 1; row <= 9; row++ ){
    if (row > 3 && row < 7) {cell=block2;cell2=block;}else{cell=block;cell2=block2;}
    if (row > 3 && row < 7) {bcell=blank2;bcell2=blank;}else{bcell=blank;bcell2=blank2;}
    document.write("<table>");
    for (var column = 1; column <= 9; column++) {

      if (column > 3 && column < 7) {
        if (rowNumsSet[blockz] === " ") {
          document.write(bcell2);
        } else {
          document.write(cell2+rowNumsSet[blockz]);
        }
      } else {
        if (rowNumsSet[blockz] === " ") {
          document.write(bcell);
        } else {
          document.write(cell+rowNumsSet[blockz]);
        }
      }
    blockz += 1;
    }
    document.write("</table>");
  }
}
startPuzzel();

function validate(evt) {
  var theEvent = evt || window.event;
  var key1 = theEvent.keyCode || theEvent.which;
  key1 = String.fromCharCode( key1 );
  var regex = /[1-9]|\./;
  if( !regex.test(key1) || theEvent.target.textContent.length > 0 ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
