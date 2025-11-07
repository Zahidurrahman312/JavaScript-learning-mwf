console.log("Javascript connected!");

// function showMore() {
//     var text = "thank you for more paragrgh and aslo welcome";

//     document.getElementById("para").innerHTML = text
// }

// function showLess() {

//     var para1 = "Lorem";

//     document.getElementById("para").innerHTML = para1 + "<a href'javascript:void:(0) onclick='showMore>showless</a>"
// }


// function showMore(){
//     var text = "This is a new para";

//     document.getElementById("para").innerHTML = text +"<a href'javascrip:void(0) onclick='showMore()'>Click more</a>"
// }

function showMore() {
  
    var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quas nobis officiis dolores, quae architecto repudiandae eligendi, distinctio placeat eius error. Illum nemo facilis obcaecati dolore id aliquid similique eligendi"


    document.getElementById("para").innerHTML = text + "<a href='javascript:void(0)' onclick='showLess()'>showless</a>"



}

function showLess(){
    var a = "lorem" +"<br>";
    document.getElementById("para").innerHTML = a + "<a href='javascript:void(0)' onclick='showMore()'>showmore</a>"
}

















