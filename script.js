var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;

var number = document.getElementById('out');

btn_prev.onclick = function () {
  images[i].className = '';
  i = i - 3;

  if (i == -1) {
    i = images.length - 1;
  }
  images[i].className = 'showed';
  number.innerHTML = i;
}

btn_next.onclick = function() {
  images[i].className = '';
  i = i + 3;
  if (i == 10) {
    i = 0;
  } else if ( i == 11){
    i = 1;
  } else if ( i == 12) {
    i = 2;
  }
  images[i].className = 'showed';
  number.innerHTML = i;
}
