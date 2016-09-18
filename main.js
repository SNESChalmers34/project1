var questions = [
  {text: 'what is 1+1?',
  choices:[{
      wrong1: 1,
      id:'A'
    },
    {
      right: 2,
      id:'B'
    },
    {
      wrong2: 3,
      id: 'C'
    },
    {
      wrong3: 4,
      id: 'D'
  }
},
  text: 'what is 2+2?',
  choices:[{
      wrong1: 1,
      id:'A'
    },
    {
      wrong2: 2,
      id:'B'
    },
    {
      wrong3: 3,
      id: 'C'
    },
    {
      right: 4,
      id: 'D'
  }],
}]

// var index = 0
$('.qtext').html(questions[0].text)

// $('.answers').click(function({
//   index++
//   if(index > questions.length)
// }))
