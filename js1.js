var questions = [
  {text: 'What is 2+2',
    choices:[
      {a:1,
       index:'a'
     },
      {b: 4,
      index:'b'
      }
    ]
  },
  {text: 'what is 1+1',
  choices:[
    {a:1,
     index:'a'
   },
    {b:4,
    index:'b'
    }
  ]
  }
]

var index = 0
$('.qtext').html(questions[index].text)
$('.qtext').on('click', function(){
    index++
    if (index === questions.length){
      index = 0
    }
    $('.qtext').html(questions[index].text)
})


('.answer').on('click', function(){
  if()
})
