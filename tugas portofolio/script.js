
const audio = new Audio('gear-whine.mp3'); 
audio.volume = 0.3;
window.addEventListener('load', () => {
  audio.play().catch(() => {});
});