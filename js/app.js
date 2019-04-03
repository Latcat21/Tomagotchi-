/*
age is not displaying

creat fucnion

pet dying / ending game





*/

class Tomagotchi {
  constructor(name){
    this.hunger = 0;
    this.name = name;
    this.sleepiness = 0,
    this.boredom = 0,
    this.alive = true,
    this.age = 0
  }
/* Button functions */
  feeder(){
    this.hunger--
    $('.hunger').text(game.currentPet.hunger)
    console.log(game.currentPet.hunger)
   }

  happiness(){
    this.boredom--
    $('.boredom').text(game.currentPet.boredom)
    console.log(game.currentPet.boredom)
  }


fatigue(){
    this.sleepiness--
    $('.sleepiness').text(game.currentPet.sleepiness)

  }
  /* timer functions */

  getHungry(){
    this.hunger++
    $('.hunger').text(game.currentPet.hunger)
  }
  getSleepy(){
    this.sleepiness++
    $('.sleepiness').text(game.currentPet.sleepiness)
  }
 getBored(){
   this.boredom++
   $('.boredom').text(game.currentPet.boredom)
 }
 

 getOlder(){
   this.age++
  $('.age').text(game.currentPet.age)
  console.log(game.currentPet.age)

 }
 /* movement Functions */
 getBigger(){
  $('.pet-dog').css({
    'height': '125px',
    'width': '125px',
    'margin-bottom': '100px'
  })
  
}
moveRight(){
  $('.pet-dog').css({
    'margin-left': "10%",
  })
}
moveLeft(){
  $('.pet-dog').css({
    'margin-right': "10%",
  })
}
/* death functions */

 getDead(){
   this.alive = false;
   $('.pet-dog').css({
     'background-color': 'red',
   })
   clearInterval(game.timerHandle)
 }

}
/* Gam object */

const game = {
  created: false,
  timerHandle: null,
  currentPet: null,
  time: 0,
  /* Timer for the pet */
 
  startTimer(){
    /* This is were I instiate it */
    const myPet = new Tomagotchi()
    this.currentPet = myPet
    
    this.timerHandle = setInterval(() =>{
     
      this.time++
      /* store 1000 miliseconds / 1 second */
      const timeOneSecond = this.time * 1000
      /* call fuctions at certains times */
      if(timeOneSecond % 2000 === 0){
        game.currentPet.getHungry();
      }
      if(timeOneSecond % 3000 === 0){
        game.currentPet.getSleepy();
      }
      if(timeOneSecond % 3000 === 0){
        game.currentPet.moveRight();
      }
      if(timeOneSecond % 4000 === 0){
        game.currentPet.getBored();
      }
      if(timeOneSecond % 3000 === 0){
        game.currentPet.getOlder()
      }
      if(timeOneSecond  % 5000 === 0){
        game.currentPet.moveRight()
       }
      if(timeOneSecond  % 5000 === 0){
       game.currentPet.getBigger()
      }
      if(game.currentPet.hunger >= 10 || game.currentPet.boredom >= 10 || game.currentPet.sleepinesss >= 10){
       game.currentPet.getDead()
      }
      
}, 1000)
  }
}
/* Event Listeners */


/* Event listereners for interacting with the pet */
 $('.btn').on('click', (e) => {
     /* store the the clicked value */
    
     const $clicked = $(event.target)
  
    if($clicked.hasClass('feed')) {
    game.currentPet.feeder();
    } if($clicked.hasClass('lights')) {
     game.currentPet.fatigue()
     } if($clicked.hasClass('play')) {
     game.currentPet.happiness()
   }
})
/* Eent listener to start the game */

$('.button').on('click', (e) => {
  const name = $('#tom-name').val();
  game.currentPet = true;
  game.startTimer()
  $('.tom-name').replaceWith(name + "'s")
})


