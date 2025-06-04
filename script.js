var startTime=0;
function changeColor()
{
    var colors = ["red", "green", "blue", "yellow", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("box").style.backgroundColor = randomColor;
}
function MoveBox()
{
    
    var left, right, width, height;
    left = right = (Math.random() * 100)+50;
    width = height = Math.random() * 200;
    document.getElementById("box").style.left = left;
    document.getElementById("box").style.top = right;
    document.getElementById("box").style.width = width   
    document.getElementById("box").style.height = height
    document.getElementById("box").style.display = "block";
    changeColor();  
    startTime = new Date().getTime();  
}


function startReactionTest()
{
    document.getElementById("box").style.display = "none";
       
    var endTime = new Date().getTime();
    var reactionTime = (endTime - startTime)/1000 + "Seconds";
    alert("Your reaction time is " + reactionTime + " sec.");
    MoveBox(); 
 } 