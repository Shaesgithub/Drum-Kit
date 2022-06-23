function makeSound(e) {
  let code;
  if (e.keyCode) {
  
    code = e.keyCode;
  } else {
    
    code = this.dataset.key;
  }

  let audio = document.querySelector(`audio[data-key="${code}"]`);
    let key = document.querySelector(`.key[data-key="${code}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }


function endTransition(e) {

    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')
for (i=0; key = keys[i]; i++) {
  key.addEventListener('transitionend', endTransition);
  key.addEventListener('click', makeSound);
}


function playSound(e) {


  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}


function removeTransition(e) {

    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
