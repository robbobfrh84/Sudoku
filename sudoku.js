// This is just and example of how we can create and place a new button
// ...into a specific location even with a function using javascript.
var newButton = document.createElement("button");
newButton.onclick = function(){
  blockString = mediumPuzzle; key = mKey;
  build(blockString); menuSwap();
  return key, blockString;
}
newButton.appendChild(document.createTextNode("Medium"));
bp.insertBefore(newButton, bp.children[1]);

var easyPuzzle = "5793 1684 4 9782512  4 673  652 3978 3   54   9268 51382 514 96  6 32147 147    5".split('');
//var easyPuzzle = "57 321684643 78251281456739165243978738195462492687513827514396956832147314769825".split('');
var mediumPuzzle = "3948 251775 149 3   83  964    3 87 8256713494  9 8   5   8 4  18749  2 649215   ".split('');
var hardPuzzle = "4562  3 7  14   599 21 5  4  46 7598598  2 716   984 3  39    216 82       73194 ".split('');
var xHardPuzzle = "        13 1      7 5 4  6 13  67    5 3 4      8 5   5 3 8  128             3 8 ".split('');
var eKey = "579321684643978251281456739165243978738195462492687513827514396956832147314769825".split('');
var mKey;
var hKey;
var xKey;
var color1 = "cornflowerblue";
var color2 = "darkseagreen";
var color1Code = "3 4 5 12 13 14 21 22 23 27 28 29 36 37 38 45 46 47 33 34 35 42 43 44 51 52 53 57 58 59 66 67 68 75 76 77".split(' ');

// This function builds the Sudoku grid with empty blocks...
function blankBuild(blockString){
  for (var i = 0; i < 81; i++){
    if (color1Code.includes(i.toString())) {color = color2;} else {color=color1;}
    var blankBlock = document.createElement("div")
    blankBlock.setAttribute("contentEditable", true);
    blankBlock.style.backgroundColor = color;
    blankBlock.id = ("blk"+i); blankBlock.className = 'blocks';
    blkH.appendChild(blankBlock);
  }
}

function build(blockString){ //places puzzle number blocks and editable
  for (var i = 0; i < 81; i++){
    document.getElementById("blk"+i).innerHTML = (blockString[i]);
    var loopBlock = document.getElementById("blk"+i);
    if (document.getElementById("blk"+i).innerHTML !== ' ') {
      loopBlock.setAttribute("contentEditable", false);
    } else {
      loopBlock.setAttribute("contentEditable", true);
      loopBlock.setAttribute("onkeypress", 'checkInput(event,this)');
    }
  }
}

function checkInput(evt, x) {
  var num = parseInt(evt.keyCode);
  event.preventDefault();
  if(num >= 49 && num <= 57){
    document.getElementById(x.id).style.textShadow = "1px 2px 1px rgba(0,0,0,0.5)";
    document.getElementById(x.id).innerHTML = num-48;
    checkCorrect();
  }
}

function checkCorrect(){
  var complete = true;
  for (var i = 0; i < 81; i++){
    if (blockString[i] === ' '){
      if (key[i] === document.getElementById('blk'+i).innerHTML) {
        document.getElementById('blk'+i).style.color = "rgba(0,0,0,0.60)";
        document.getElementById('blk'+i).style.textShadow = "1px 2px 1px rgba(0,0,0,0.5)";
      } else {
        document.getElementById('blk'+i).style.color = "red";
        document.getElementById('blk'+i).style.textShadow = "none";
        complete = false;
      }
    }
  }
  if (complete === true) {
    console.log("YOU WIN");
    for (var i = 0; i < 81; i++){
      if (blockString[i] === ' '){
        document.getElementById('blk'+i).style.color = "gold";
        document.getElementById('blk'+i).setAttribute("contentEditable", false);
      }
    }
    var congrats = document.createElement("div");
    congrats.appendChild(document.createTextNode("Puzzle Conquered!"));
    congrats.className = "announcement";
    bp.appendChild(congrats);
  }
}

function easyButton(){
  blockString = easyPuzzle; key = eKey; var killTime = true;
  build(blockString); menuSwap(); gameTimer(killTime);
  return key, blockString;
}
function mediumButton(){
  blockString = mediumPuzzle; key = mKey;
  build(blockString); menuSwap(); gameTimer();
  return key, blockString;
}
function hardButton(){
  blockString = hardPuzzle;key = hKey;
  build(blockString); menuSwap(); gameTimer();
  return key, blockString;
}
function xHardButton(){
  blockString = xHardPuzzle; key = xKey;
  build(blockString); menuSwap(); gameTimer();
  return key, blockString;
}

function menuSwap(){
  while (bp.hasChildNodes()){
    bp.removeChild(bp.lastChild);
  }
  var newGame = document.createElement("button");
  newGame.appendChild(document.createTextNode("Start a New Game"));
  bp.appendChild(newGame);
  newGame.onclick = function(){
    menuSwapBack();
  }
}

function menuSwapBack() {
  if(confirm("\n!**! WARNING !**!\n\nIf you start a new game you will lose all progress on this Puzzle....\n\n CONINUE?")){
    while (blkH.hasChildNodes()){
      blkH.removeChild(blkH.lastChild);
    }
    blankBuild();
    while (bp.hasChildNodes()){
      bp.removeChild(bp.lastChild);
    }
    var buttNames = ['Easy', 'Medium','Hard','X-Hard']
    for (var i = 0; i < 4; i++){
      var newGame = {}
      newGame[i] = document.createElement("button");
      newGame[i].appendChild(document.createTextNode(buttNames[i]));
      if (i==0){newGame[i].setAttribute("onclick", "easyButton()");}
      if (i==1){newGame[i].setAttribute("onclick", "mediumButton()");}
      if (i==2){newGame[i].setAttribute("onclick", "hardButton()");}
      if (i==3){newGame[i].setAttribute("onclick", "xHardButton()");}
      bp.appendChild(newGame[i]);
    }
  }
}

//create the function that sets the timer.

function gameTimer(killTime){
  var timer = document.createElement("div");
  timer.className = "announcement timer";
  timer.id = "timer_div";
  var time = 0;
  timer.appendChild(document.createTextNode("0 sec"));
  bp.appendChild(timer);
  var interval = setInterval(function(killTime) {
      document.getElementById('timer_div').innerHTML = ++time+" sec";
      if (killTime){
        // document.getElementById('timer_div').innerHTML = ++time+"x";
        // console.log(time, killTime)
        time = 0;
        killTime = false;
      }
  }, 1000);
}


blankBuild();
