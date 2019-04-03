

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
    this.sleepinesss--
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
 getDead(){
   this.alive = false;
   $('.pet-dog').css({
     'background-color': 'red',
   })
   clearInterval(this.timerHandle)
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
    console.log('this.startTimer has been called')
    
    // jq -- update screem
    $('.age').text(game.currentPet.age)
    console.log(game.currentPet.age)
    
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
      if(timeOneSecond % 3 === 0){
        game.currentPet.age++
      }
      if(game.currentPet.hunger > 10 || game.currentPet.boredom > 10 || game.currentPet.sleepinesss > 10){
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


