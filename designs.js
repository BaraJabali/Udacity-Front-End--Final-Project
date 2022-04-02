// Select color input
// Select size input
var H;
var V ;

document.getElementById("sizePicker").addEventListener("submit",  function click(e){
e.preventDefault();
  document.getElementById("pixelCanvas").innerHTML="";

H =document.getElementById("inputHeight").value;
V =document.getElementById("inputWidth").value;

H=parseInt(H,10);
V=parseInt(V,10);

console.log("entering the make grid");
makeGrid();
console.log("exiting the make grid");
addEvents();

});
function addEvents(){
  
    var setOfElements=document.getElementsByTagName("td")  ;
    console.log(setOfElements);
    for (let i =0;i<setOfElements.length;i++){
      console.log(i);
      setOfElements[i].addEventListener("click", function setColor(){
        var takencolor=document.getElementById("colorPicker").value;
        setOfElements[i].style.backgroundColor=takencolor;});
    }
}

// When size is submitted by the user, call makeGrid()


function makeGrid() {
  var table=document.getElementById("pixelCanvas");
  for(var i =0;i<H;i++){
    var row=document.createElement("tr");

    for(var j =0;j<V;j++){
    var member=document.createElement("td");
    row.appendChild(member);  
    }

    table.appendChild(row);
  }

}


