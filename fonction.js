var pos = 160;
function frame() {

  var elem = document.getElementsByClassName("arm");
    if (pos >= 200) {
        stop();
        elem[0].style.top ='';
        pos = 160;
        myMove();
    } else {
         pos++;
        elem[0].style.top =pos +'px';
        console.log('boucle');
      }
    };

function myMove() {

    var id = setInterval(frame, 10);


};
function stop(){
  clearInterval();
}
// function close(){
//   var mydiv = document.getElementByClassName('paupiere');
//
// }
// // autre fonction
// document.getElementById("myBtn").addEventListener("click", myFunction);
//
// function myFunction() {
//     alert ("Hello World!");
// }
