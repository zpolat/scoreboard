let home = 0
let guest = 0
let side = ""
let sumHomeEl = document.getElementById("sumHome")
let sumGuestEl = document.getElementById("sumGuest")

function reset() {
   sumHomeEl.textContent = "-"
   sumGuestEl.textContent = "-"
   home = 0
   guest = 0
}

function addscore(score, side) {
   if (side == "home") {
      console.log(side)
      console.log(home)
      home += score
      sumHomeEl.textContent = home
   } else if (side == "guest") {
      console.log(side)
      console.log(home)
      guest += score
      sumGuestEl.textContent = guest
   } else {
      console.log("kaput")
   }
}
