const names= [
    "Guadalupe",
    "Ollie",
    "Aki",
]
const thankYou = []
function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        //console.log(`Thank you ${names[i]} for the wonderful suprise gift`)
        //debugger;
        thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    console.log(thankYou)
    return thankYou
}
function countDown() {
    for (let i = 9; i >= 0; i--) {
      console.log(i);
    }
    console.log(countDown)
  }


