var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

  var displayElement = document.querySelector("#display")
  var turns = document.querySelector("#turnsLeft span")
  var input = document.querySelector("#guess")
  var button = document.querySelector("#check")
  var graveyard = document.querySelector("#graveyard")
  var form = document.querySelector("#form")
  var root = document.querySelector("#root")

  form.addEventListener('submit', function(e){
    e.preventDefault()
    var guess = input.value

    Game.guess(guess)

    input.value = ''
    input.focus()

  })

  I.subscribe('guess', function(obj) {
      displayElement.innerHTML = obj.display.join(' ')
      graveyard.innerHTML = obj.wrong.join(' ')
      turns.innerHTML = obj.turns

    I.subscribe('win', function() {
        root.innerHTML = '<h1>YOU WON!</h1>'
    })

    I.subscribe('loose', function(){
        root.innerHTML = '<h1>Game Over</h1>'
    })

  })

  Game.chooseWord(commonWords)