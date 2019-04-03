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
  feeder(){
    this.hunger--
    //jq
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
 
 getBigger(){
   $('.pet-dog').css({
     'height': '125px',
     'width': '125px',
     'maring-top': '60%'
   })
   
 }
 
 getOlder(){
   this.age++
  $('.age').text(game.currentPet.age)
  console.log(game.currentPet.age)

 }

 getDead(){
   this.alive = false;
   $('.pet-dog').css({
     'background-color': 'red',
   })
   clearInterval(game.timerHandle)
 }

}



const game = {
  created: false,
  timerHandle: null,
  currentPet: null,
  time: 0,
  
 startTimer(){
    const myPet = new Tomagotchi()
    this.currentPet = myPet
    
    
    // jq -- update screem
    
    
    this.timerHandle = setInterval(() =>{
      // this.timeRemaining--
      this.time++
      const timeOneSecond = this.time * 1000
      if(timeOneSecond % 2000 === 0){
        game.currentPet.getHungry();
      }
      if(timeOneSecond % 3000 === 0){
        game.currentPet.getSleepy();
      }
      if(timeOneSecond % 4000 === 0){
        game.currentPet.getBored();
      }
      
      if(timeOneSecond % 3000 === 0){
        game.currentPet.getOlder()
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

 $('.btn').on('click', (e) => {
     const $clicked = $(event.target)
  
    if($clicked.hasClass('feed')) {
    game.currentPet.feeder();
    } if($clicked.hasClass('lights')) {
     game.currentPet.fatigue()
     console.log('you clicked lights')
    } if($clicked.hasClass('play')) {
     game.currentPet.happiness()
    
  }
})
$('.button').on('click', (e) => {
  const name = $('#tom-name').val();
  game.currentPet = true;
  game.startTimer()
  $('.tom-name').replaceWith(name + "'s")
})


