

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
    $('.hunger').text(game.currentPet.hunger)
    console.log(game.currentPet.hunger)
   }

  happiness(){
    this.boredom++
    $('.boredom').text(game.currentPet.boredom)
    console.log(game.currentPet.boredom)
  }

  fatigue(){
    this.sleepinesss++
    $('.sleepiness').text(game.currentPet.sleepiness)

  }
}



const game = {
  created: false,
  timerHandle: null,
  currentPet: null,
  timer: 0,
  
 startTimer(){
    const myPet = new Tomagotchi()
    this.currentPet = myPet
    console.log('this.startTimer has been called')
    
    // jq -- update screem
    $('.age').text(game.currentPet.age)
    console.log(game.currentPet.age)
    
    this.timerHandle = setInterval(() =>{
      // this.timeRemaining--
      if(timeInMillisecond % 2000){

      }
      
     
     
      
      
}, 1000)
    

},
petAger(age){
  if(gameTimer % 1000 === 0){
    game.currentPet.age++
  }
  console.log(game.currentPet.age)
},
petAppetite(){
  if(gameTimer % 1000){
    game.currentPet.hunger--
    console.log(game.currentPet.hunger)

  }
}




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


