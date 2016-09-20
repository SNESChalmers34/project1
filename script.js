 var questions = [
  {text: 'What is 2+2',
    choices:[
      '1',
      '4',
      '2',
      '5',
    ],
    answer:1
  },
  {text: 'what is 1+1',
  choices:[
    '13',
    '2',
    '44',
    '51',
  ],
  answer:1
  }
]


var index = 0
var score = 0
var woohoo = new Audio('woohoo.mp3')
var doh = new Audio('doh.mp3')

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
    }

    $('.qtext').html(questions[index].text)
    $('#a').html(questions[index].choices[0])
    $('#b').html(questions[index].choices[1])
    $('#c').html(questions[index].choices[2])
    $('#d').html(questions[index].choices[3])
})
