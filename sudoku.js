// This is just and example of how we can create and place a new button
// ...into a specific location even with a function using javascript.
var newButton = document.createElement("button");
newButton.onclick = function(){
  blockString = mediumPuzzle; key = mKey;
  build(blockString); menuSwap(); gameTimerPlace();
  return key, blockString;
}
newButton.appendChild(document.createTextNode("Medium"));
bp.insertBefore(newButton, bp.children[1]);

//var easyPuzzle = "5793 1684 4 9782512  4 673  652 3978 3   54   9268 51382 514 96  6 32147 147    5".split('');
var easyPuzzle = "57932 684643978251281456739165243978738195462492687513827514396956832147314769825".split('');
var mediumPuzzle = "3948 251775 149 3   83  964    3 87 8256713494  9 8   5   8 4  18749  2 649215   ".split('');
var hardPuzzle = "4562  3 7  14   599 21 5  4  46 7598598  2 716   984 3  39    216 82       73194 ".split('');
var xHardPuzzle = "        13 1      7 5 4  6 13  67    5 3 4      8 5   5 3 8  128             3 8 ".split('');
var eKey = "579321684643978251281456739165243978738195462492687513827514396956832147314769825".split('');
var mKey = "394862517756149238218357964961534872825671349473928156532786491187493625649215783".split('');
var hKey = "456289317871463259932175864324617598598342671617598423743956182169824735285731946".split('');
var xKey = "986732541341659278725148369134967825258314697697825134573486912869271453412593786".split('');
var color1 = "cornflowerblue";
var color2 = "darkseagreen";
var color1Code = "3 4 5 12 13 14 21 22 23 27 28 29 36 37 38 45 46 47 33 34 35 42 43 44 51 52 53 57 58 59 66 67 68 75 76 77".split(' ');

// This function builds the Sudoku grid with empty blocks...
function blankBuild(){
  for (var i = 0; i < 81; i++){
    if (color1Code.includes(i.toString()))
     {color = color2;} else {color=color1;}
    var blankBlock = document.createElement("div")
    blankBlock.setAttribute("contentEditable", true);
    blankBlock.style.backgroundColor = color;
    blankBlock.id = ("blk"+i);
    blankBlock.className = 'blocks';
    blkH.appendChild(blankBlock);
  }
}
blankBuild();

function build(blockString){ //places puzzle number blocks and editable
  for (var i = 0; i < 81; i++){
    document.getElementById("blk"+i).innerHTML = (blockString[i]);
    if (document.getElementById("blk"+i).innerHTML !== ' ') {
      document.getElementById("blk"+i).setAttribute("contentEditable", false);
    } else {
      document.getElementById("blk"+i).setAttribute("contentEditable", true);
      document.getElementById("blk"+i).setAttribute("onkeypress", 'checkInput(event,this)');
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
    for (var i = 0; i < 81; i++){
      if (blockString[i] === ' '){
        document.getElementById('blk'+i).style.color = "gold";
        document.getElementById('blk'+i).setAttribute("contentEditable", false);
      }
    }
    var minutes = parseInt(seconds/60); seconds -= (minutes*60);
    if (seconds < 10) {
      seconds = "0"+seconds.toString()
    }
    var timeSave = document.createElement("p");
    timeSave.innerHTML = +minutes+" min   "+seconds+" sec";
    timeSave.className = "announcement timer timerz";
    mainTitle.innerHTML = "Puzzle Conquered!";
    topDiv.removeChild(topDiv.children[1]);
    topDiv.insertBefore(timeSave, topDiv.children[1]);
    stillPlaying = false;
  }
}

function easyButton(){
  blockString = easyPuzzle; key = eKey;
  build(blockString); menuSwap(); gameTimerPlace();
  return key, blockString;
}
function mediumButton(){
  blockString = mediumPuzzle; key = mKey;
  build(blockString); menuSwap(); gameTimerPlace();
  return key, blockString;
}
function hardButton(){
  blockString = hardPuzzle;key = hKey;
  build(blockString); menuSwap(); gameTimerPlace();
  return key, blockString;
}
function xHardButton(){
  blockString = xHardPuzzle; key = xKey;
  build(blockString); menuSwap(); gameTimerPlace();
  return key, blockString;
}

function menuSwap(){
  topDiv.style.display = "block";
  bp.style.display = "none";
}

function newGameWarning(){
  if(confirm("\n!**! WARNING !**!\n\nIf you start a new game you will lose all progress on this Puzzle....\n\n CONINUE?")){
    stillPlaying = false;
    menuSwapBack()
  }
}

stillPlaying = true; // this disables the user alert if it is FALSE. for when user wins.
function menuSwapBack() {
  if (stillPlaying){ newGameWarning();  return; }
  mainTitle.innerHTML = "Sudoku";
  while (blkH.hasChildNodes()){
    blkH.removeChild(blkH.lastChild);
  }
  blankBuild();
  topDiv.style.display = "none";
  bp.style.display = "block";
  stillPlaying = true;
}

//create the function that sets the timer.
var interval; // this var interval needs to be created before function and not in funtion. matters, don't know why.
function resetInterval(){
  var seconds = 0;
  clearInterval(interval);
  interval = setInterval(function() { gameTimer(); }, 1000);
}

function gameTimer(){
  document.getElementById('timer_div').innerHTML = ++seconds+" sec";
}

function gameTimerPlace(){
  topDiv.removeChild(topDiv.lastChild)
  resetInterval();
  seconds = 0;
  var timer = document.createElement("div");
  timer.className = "announcement timer";
  timer.id = "timer_div";
  timer.appendChild(document.createTextNode("0 sec"));
  topDiv.appendChild(timer);
}
