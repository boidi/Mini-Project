// var element = document.getElementById('rouge');
 function deplace(){
  var stop = true;
  var elem = document.getElementsByClassName("train");
  var pos = 0;
  var id = setInterval(frame, 5);

   function frame() {
    if (!stop) {
      clearInterval(id);
    } else {
      pos++;
      // elem.style.top = pos + 'px';
      elem[0].style.left = pos + 'px';
    }
  }
}
var element = document.getElementById('jaune');
element.addEventListener('click', deplace);
//
//    element.onclick = function() {
//
//        alert("Vous m'avez cliqué !");
//
//    };
 // element.addEventListener('click', function()
