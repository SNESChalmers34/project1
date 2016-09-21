// questions
var questions = [
 {text: 'What is Homer J Simpson\'s middle name?',
   choices:[
     'Jay',
     'James',
     'John',
     'Jacob',
   ],
   answer:0
 },
 {text: 'What is the name of Lisa\'s future husband?',
 choices:[
   'Grant',
   'Hugh',
   'Alex',
   'Milhouse',
 ],
 answer:1
},
 {text: 'Which President spanked Grandpa on two non-consecutive occasions?',
   choices:[
     'Richard Nixon',
     'John F. Kennedy',
     'Grover Cleveland',
     'George Bush',
   ],
   answer:2
 },
 {text: 'What state costume does Homer make for Lisa?',
   choices:[
     'Florida',
     'Idaho',
     'Wyoming',
     'Maryland',
   ],
   answer:0
 },
 {text: 'Which Bettle never appeared on The Simpsons?',
   choices:[
     'Paul',
     'George',
     'John',
     'Ringo',
   ],
   answer:2
 },
 {text: 'Who baby sat Bart and Lisa?',
   choices:[
     'Troy McClure',
     'Bleeding Gums Murphy',
     'Moe',
     'Lionel Hutz',
   ],
   answer:3
 },
 {text: 'What instrument does Lisa play?',
   choices:[
     'Clarinet',
     'Flute',
     'Violin',
     'Saxophone',
   ],
   answer:3
 },
 {text: 'What is the name of Bart\'s favorite superhero?',
   choices:[
     'Fallout Boy',
     'Radioactive Man',
     'Radiation Dude',
     'Atomic Man',
   ],
   answer:1
 },
 {text: 'What dessert did Bart eat while playing hookey?',
   choices:[
     'Rice Crispy Treats',
     'Chocolate Cake',
     'Apple Pie',
     'Ice Cream',
   ],
   answer:0
 },
 {text: 'What did Lyle Lanley convince Springfield to build?',
   choices:[
     'Itchy and Scratchy Land',
     'A Subway System',
     'A Monorail',
     'A Casino',
   ],
   answer:2
 },
 {text: 'What animal is painted to look like a cow on camera?',
   choices:[
     'Cow',
     'Horse',
     'Bull',
     'Tape a bunch of Cats together',
   ],
   answer:2
 },
 {text: 'What does Radioactive Man put on to protect himself from acid?',
   choices:[
     'A Hazmat suit',
     'Gloves',
     'Nothing',
     'Goggles',
   ],
   answer:3
 },
]

// start of the game logic
function start(){
  var index = 0
  var score = 0
  var woohoo = new Audio('woohoo.mp3')
  var doh = new Audio('doh.mp3')

// start of question cycle
  $('.qtext').html(questions[index].text)
  $('#a').html(questions[0].choices[0])
  $('#b').html(questions[0].choices[1])
  $('#c').html(questions[0].choices[2])
  $('#d').html(questions[0].choices[3])
  $('#score').html('Score: ' + 0)

  $('.answer').off('click')
  $('.answer').on('click', function(){
     var choice = $(this).html() //getting html from answer div
     var i = questions[index].choices.indexOf(choice) //indexOfChoice turns html of choice into index from array
     if(questions[index].answer === i ){
       woohoo.play()
       score++
       $('#score').html('Score: ' + score )
     }
     else{
       doh.play()
     }
     index++
     if (index === questions.length){
       $('.content').siblings().hide()
       $('.content').children().hide()
       var finalscore = $('.content').append('<p class="fs">' + 'Your final score is: ' + score + '</p>')
        $('.leaderboard').append('<input type="text" placeholder="name"> <button>Submit</button>')

       return
     }

     $('.qtext').html(questions[index].text)
     $('#a').html(questions[index].choices[0])
     $('#b').html(questions[index].choices[1])
     $('#c').html(questions[index].choices[2])
     $('#d').html(questions[index].choices[3])
  })
}

start() //starting game
$('#trivia').on('click', function(){
  $('.content').children().show()
  $('.answers').show()
  $('.fs').hide()
  $('.leaderboard').hide()
  start()
})
