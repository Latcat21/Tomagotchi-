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

class tomagotchi {
  constructor(name){
    this.hunger = 10;
    this.name = name;
    this.sleepiness = 10,
    this.boredom = 10,
    this.alive = true,
    this.age = 0
  }
  feeder(){
    if($clicked.hasClass('feed')){
      console.log('you clicked feed')
    }
     
    

  }

  happiness(){

  }

  fatigue(){

  }
}


const myPet = new tomagotchi()

const game = {
  created: false,
  timerHandle: null,
  timeRemaining: 3,
  currentPet: null,
  timer: 0,

  startTimer(){
    console.log('this.startTimer has been called')
    this.timerHandle = setInterval(() =>{
    this.timeRemaining--
    myPet.age++
    console.log(myPet.age)
    
    }, 1000)
    
    
  },
  created(){
    if(this.timeRemaining <= 0){
      console.log('you loose')
    }

  }
  
}

 


$('.btn').on('click', (e) => {
  

  
  if($clicked.hasClass('feed')) {

    myPet.feeder();
    // this.hunger--
    // console.log("you clicked feed")
    // console.log(this.hunger)
  } else if($clicked.hasClass('lights')) {
    this.sleepiness--
    // console.log(this.sleepiness)
    console.log("you clicked lights")
  } else if($clicked.hasClass('play')) {
    this.boredom--
    // console.log(this.boredom)
    console.log('you clicked play')
  }
  

})


$('.button').on('click', (e) => {
  game.startTimer()
  const name = $('#tom-name').val();

  $('.tom-name').replaceWith(name + "'s")
  $('.tom-name').css({
    "font-size": "20px",
    "font-weight": "900"
  })
  console.log(name)
  //$('body').text(name)

})