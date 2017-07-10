var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;
images[0] = null;
var number = document.getElementById('out');

console.log(images);
function EnteredNumber(event){
  images[i].className = '';
  if( event.key == 1 ){
    i = 0;
  } else if ( event.key == 2 ){
    i = 1;
  } else if ( event.key == 3 ){
    i = 2;
  } else if ( event.key == 4 ){
    i = 3;
  } else if ( event.key == 5 ){
    i = 4;
  } else if ( event.key == 6 ){
    i = 5;
  } else if ( event.key == 7 ){
    i = 6;
  } else if ( event.key == 8 ){
    i = 7;
  } else if ( event.key == 9 ){
    i = 8;
  }
  images[i].className = 'showed';
  number.innerHTML = i + 1 + " out of 9";
}

btn_prev.onclick = function () {
  images[i].className = '';
  i--;

  if (i < 0) {
    i = images.length - 1;
  }
  images[i].className = 'showed';
  number.innerHTML = i + 1 + " out of 9";
}

btn_next.onclick = function() {
  images[i].className = '';
  i++;
  if ( i >= images.length ){
    i = 0;
  }
  images[i].className = 'showed';
  number.innerHTML = i + 1 + " out of 9";
}
