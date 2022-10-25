let home = 0
let guest = 0

let sumHomeEl = document.getElementById("sumHome")
let sumGuestEl = document.getElementById("sumGuest")

function addOneHome() {
   home += 1
   sumHomeEl.textContent = home
}

function addTwoHome() {
   home += 2
   sumHomeEl.textContent = home
}

function addThreeHome() {
   home += 3
   sumHomeEl.textContent = home
}

function addOneGuest() {
   guest += 1
   sumGuestEl.textContent = guest
}

function addTwoGuest() {
   guest += 2
   sumGuestEl.textContent = guest
}

function addThreeGuest() {
   guest += 3
   sumGuestEl.textContent = guest
}

function reset() {
   sumHomeEl.textContent = "-"
   sumGuestEl.textContent = "-"
   home = 0
   guest = 0
}

function addscore(score, side) {
   if (side == home) {
      home += score
      sumHomeEl.textContent = home
   } else {
      guest += score
      sumGuestEl.textContent = guest
   }
}
