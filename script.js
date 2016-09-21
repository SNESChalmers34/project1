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
     'Clarinet ',
     'James',
     'John',
     'Jacob',
   ],
   answer:0
 },
]


var index = 0
var score = 0
var woohoo = new Audio('woohoo.mp3')
var doh = new Audio('doh.mp3')
var leaders = []

$('.qtext').html(questions[index].text)
$('#a').html(questions[0].choices[0])
$('#b').html(questions[0].choices[1])
$('#c').html(questions[0].choices[2])
$('#d').html(questions[0].choices[3])
$('#score').html('Score: ' + 0)


$('.answer').on('click', function(){
   var choice = $(this).html()
   var i = questions[index].choices.indexOf(choice)
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
     $('.content').siblings().fadeOut('slow')
     $('.content').children().fadeOut('slow')
     var finalscore = $('.content').append('<p></p>').html('Your final score is: ' + score)
     $('.leaderboard').append('<input type="text" placeholder="name"> <button>Submit</button>')
     $('button').on('click', function(){
       $('.leaderboard').show()
       var name = $('input').val()
       var nameScore = name + " " + score
       localStorage.setItem('nameScore', nameScore)

       // $('.leaderboard').append('<div>' + localStorage.getItem('nameScore') + '</div>')
     })
     return
   }

   $('.qtext').html(questions[index].text)
   $('#a').html(questions[index].choices[0])
   $('#b').html(questions[index].choices[1])
   $('#c').html(questions[index].choices[2])
   $('#d').html(questions[index].choices[3])

})
