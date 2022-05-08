const data = document.getElementById('input');
const word = document.getElementById('word');
const char = document.getElementById('char');

data.addEventListener('input', () => {
  char.textContent = data.ariaValue.length;

  let text = data.Value.trim();

  word.textContent = text.split(/\s+/).filter((val) => val) => val.lemgth;
});
