var blockz = 0;
var rowNumsSet = " 71 9 8     3 6   49    7 5 1 9     9 2   6 3     8 2 8 5    76   6 7     7 4 35 ";
var rowNumsAns = "371594862528376194496281735614923587982715643753468921845139276239657418167842359";
var cell; var cell2; var bcell; var bcell2;
var block = "<td class='blocks'>"; var block2 = "<td class='blocks2'>";
var blank = "<td contenteditable='true' class='blocks'>"; var blank2 = "<td contenteditable='true' class='blocks2'>";
var closetd = "</td>"

document.write("<h2>Easy - Medium - Hard (Buttons go here) </h2>");

function startPuzzel(){
  for (var row = 1; row <= 9; row++ ){
    if (row > 3 && row < 7) {cell=block2;cell2=block;}else{cell=block;cell2=block2;}
    if (row > 3 && row < 7) {bcell=blank2;bcell2=blank;}else{bcell=blank;bcell2=blank2;}
    document.write("<table>");
    for (var column = 1; column <= 9; column++) {

      if (column > 3 && column < 7) {
        if (rowNumsSet[blockz] === " ") {
          document.write(bcell2+closetd);
        } else {
          document.write(cell2+rowNumsSet[blockz]+closetd);
        }
      } else {
        if (rowNumsSet[blockz] === " ") {
          document.write(bcell+closetd);
        } else {
          document.write(cell+rowNumsSet[blockz]+closetd);
        }
      }
    blockz += 1;
    }
    document.write("</table>");
  }

/*
blockz = 0;
document.write("<h1>Answer</h1>");
for (var row = 1; row <= 9; row++ ){
  if (row > 3 && row < 7) {cell=block2;cell2=block;}else{cell=block;cell2=block2;}
  document.write("<table>");
  for (var column = 1; column <= 9; column++) {
    if (column > 3 && column < 7) {document.write(cell2+rowNumsAns[blockz]+closetd);
    } else {document.write(cell+rowNumsAns[blockz]+closetd);}
    blockz += 1;
  }
  document.write("</table>");
}
/* Notes and cuts
var x = Math.floor(Math.random() * 100) ;
if (x < 10){ var y = "0" + x; } else { var y = x; }
*/
}
startPuzzel();
