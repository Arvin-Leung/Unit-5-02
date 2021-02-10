// this function changes the Image to a dog
function imagechange() {
  document.getElementById('myimage').src = './images/dog.jpg'
}

// this function changes the Image to a cat
function changeimage() {
  document.getElementById('myimage').src = './images/cat.jpg'
}

// this function changes the text to Hello World
function textchange() {
  document.getElementById('mytext').innerHTML = 'Hello World'
}

// this function makes the text disappear
function disappear() {
  document.getElementById('disappear').style.display = 'none'
}

// this function makes the text reappear
function appear() {
  document.getElementById('disappear').style.display = 'block'
}

// this this changes the background color
function background() {
  document.getElementById('background').style.backgroundColor = 'aqua'
}

// this function changes the font, size, and color
function font() {
  document.getElementById('paragraph').style.fontFamily = 'Arial'
  document.getElementById('paragraph').style.fontSize = '110%'
  document.getElementById('paragraph').style.color = 'red'
}
