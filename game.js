var Game = (function()  {
    var word
    var display
    var wrong = []
    var turns = 5
    
    function chooseWord(arr) {
        const guessable = arr.filter(word => word.length >= 3)

        console.log(guessable)

        const randomIndex = Math.floor(Math.random() * guessable.length)

        word = guessable[randomIndex]

        console.log(word)
        display = word.split('').map(l => '_')
        
        I.publish('guess', {
            display: display,
            wrong: wrong,
            turns: turns
        })

    } 

    function guess(l) {
        var index = word.indexOf(l)
        if (index !== -1) {
               for (let i=0; i < word.length; i++) {
                   if (word.charAt(i) === l) {
                       display[i] = l
                   }
               }
            console.log("display:",display)
        } else {
            wrong.push(l)
            turns--

            console.log("wrong:",wrong)
        }

        if (display.indexOf('_') === -1) {
            I.publish('win')
        } else if(turns === 0) {
            I.publish('loose')
        } else {
            I.publish('guess', {
                display: display,
                wrong: wrong,
                turns: turns
            })
        }
        
    }


    return {
        chooseWord: chooseWord,
        guess: guess
    }
}())