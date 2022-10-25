let home = 0
let guest = 0
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

function addscoreswitch(score, side {
   switch (a) {
      case 3:
        alert( 'Too small' );
        break;
      case 4:
        alert( 'Exactly!' );
        break;
      case 5:
        alert( 'Too big' );
        break;
      default:
        alert( "I don't know such values" );
    
})