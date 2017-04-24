var pos = 160;
function frame() {
  var elem = document.getElementsByClassName("arm");
    if (pos >= 200) {
        stop();
        elem[0].style.top ='';
        // elem[0].style.left='';
        pos = 160;
        myMove();
    } else {
         pos++;
        elem[0].style.top =pos +'px';
      }
    };

function myMove() {
    var id = setInterval(frame, 10);
};
// mettre l'interval à 0
function stop(){
  clearInterval();
}
