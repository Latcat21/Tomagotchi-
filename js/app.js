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

/*
Questions...
can't find mistake..




*/

class Tomagotchi {
  constructor(name){
    this.hunger = 10;
    this.name = name;
    this.sleepiness = 10,
    this.boredom = 10,
    this.alive = true,
    this.age = 0
  }
  feeder(){
    this.hunger++
    //jq
  }

  happiness(){
    this.happiness++
  }

  fatigue(){
    this.fatigue++
  }
}



const game = {
  created: false,
  timerHandle: null,
  //timeRemaining: 3,
  currentPet: null,
  timer: 0,
  
 startTimer(){
    const myPet = new Tomagotchi()
    this.currentPet = myPet
    console.log('this.startTimer has been called')
    
    // jq -- update screem
    $('.age').val(game.currentPet.age)
    console.log(game.currentPet.age)
    $('.hunger').text(game.currentPet.hunger)
    console.log(game.currentPet.hunger)
    $('.boredom').text(game.currentPet.boredom)
    console.log(game.currentPet.boredom)
    $('.sleepiness').text(game.currentPet.sleepiness)
    
    
    const gameTimer =  this.timerHandle = setInterval(() =>{
      // this.timeRemaining--
      this.timer++
      //console.log(this.timer)
      game.currentPet.age++
      //console.log(game.currentPet.age)
    
    }, 1000)
    
},
}

 $('.btn').on('click', (e) => {
  const $clicked = $(event.target)
  
    if($clicked.hasClass('feed')) {
    game.currentPet.feeder();
    console.log("you clicked feed")
    console.log(game.currentPet.hunger)
  
  } if($clicked.hasClass('lights')) {
     game.currentPet.fatigue()
    console.log(game.currentPet.sleepiness)
    console.log("you clicked lights")
  } if($clicked.hasClass('play')) {
    game.currentPet.happiness()
    console.log(game.currentPet.boredom)
    console.log('you clicked play')
  }
  
})


$('.button').on('click', (e) => {
  const name = $('#tom-name').val();
  game.startTimer()
  $('.tom-name').replaceWith(name + "'s")
  console.log(name)
  
})


