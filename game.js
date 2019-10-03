// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)

  }
}

function makeGreen (evt) {
  evt.preventDefault()

  
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.target.classList.toggle('blue')

  updateCounts()
}
// CREATE FUNCTION hide HERE
function hide(evt) {
  evt.target.classList.toggle('invisible')

updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  totals.invisible = document.getElementsByClassName("invisible").length
  totals.green = document.getElementsByClassName("green").length
  totals.blue = document.getElementsByClassName("blue").length

displayTotals(totals)

}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').textContent = totals[key]
  }
}
