/*



Instatiate your Tomagotchi

Display a character of your choice on the screen to represent your pet

Display the following metrics for your pet:

--Hunger (1-10 scale)
--Sleepiness (1-10 scale)
---Boredom (1-10 scale)
---Age

--Add buttons to the screen to feed your pet, turn off the lights, and play with ---your pet.

Add the ability to name your pet.

Style the page.

Increase your pet's age every x minutes

Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

You pet should die if Hunger, Boredom, or Sleepiness hits 10.

Morph your pet at certain ages.
Animate your pet across the screen while it's alive.


*/

class Tomagotchi {
  constructor(name){
    this.hunger = 0;
    this.name = name;
    this.sleepiness = 0,
    this.borddom = 0,
    this.alive = true,
    this.time = 20
  }
}




const game = {
  timeRemaining: 30,
  created: false,
  timerHandle: null,

  start($clicked){
    console.log('started')
   }
}
startTimer(){
  console.log('this.startTimer has been called')

}




$('.btn').on('click', (e) => {
  const $clicked = $(event.target)
  
  if($clicked.hasClass('feed')) {
   
    console.log(this.hunger)
  } else if($clicked.hasClass('lights')) {
    console.log("you clicked lights")
  } else if($clicked.hasClass('play')) {
    console.log('you clicked play')
  }

})


$('.button').on('click', (e) => {
  const $clicked = $(event.target)
  const name = $('#tom-name').val();
  // console.log(this.name)
  //$('body').text(name)
})