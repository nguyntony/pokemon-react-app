import { useState } from "react"

export default function Form({pokeName, answer, setAnswer}) {

    // initiate state
    const [guess, setGuess] = useState('')
    const [btnValue, setBtnValue] = useState('guess')
    const [phase, setPhase] = useState('guessing')
    const [counter, setCounter] = useState(0)

    // initiate handler
    const guessHandler = e => {
        // this handler fn will take the user input and set it to guess, I need this so that I can check to see if the userinput (which is guess), is it equal to pokename or not?
        setGuess(e.target.value.trim().toLowerCase())
    }

    const submitHandler = e => {
        e.preventDefault()
        // when the user submit the form, this is the checking phase, it will check if their guess is equal to pokename, if it is, it will update the counter + 1 and it will also change the btn value to next
        // I am setting the phase here to idle, bc this means that the user guessed correctly and the game is waiting for the user to hit enter to fetch the next pokemon

        if (guess === pokeName) {
            setBtnValue('Next')
            setCounter(counter + 1)
            setPhase('idle')
        } 
        
        // I reset guess here, bc the userinput and guess is connected, this is here so that when the user submits their attempt, it will clear out the input field
        setGuess('')
    }

    const nextHandler = e => {
        // if the user guesses correctly then the set answer will work with the use effect in the card file and it will fetch another pokemon
        // I am also setting the btn value back to guess so that when the next pokemon loads, the btn value will now say guess instead of next
        // I am then setting a phase to guessing bc this is the guessing phase of the game
        setAnswer(!answer)
        setBtnValue('guess')
        setPhase('guessing')
    }

    const wrongHandler = e => {
        // if the user guesses incorrectly, then what I'm doing here is that it will set the btn value to guess again and there will be no new fetch until the user correctly guesses the name of the pokemon
        setBtnValue('guess again')
    }

    const nextBind = {
        // I could have conditional rendered a different btn for different phases of the game but I wanted to use the same btn, so what I did was create an object that I will then spread onto the button tag.
        // the button will have three faces:
        // 1. is the default which the guess
        // 2. if the user is correct then it will update to next and use the function that I want for it which is determnined by this ternary operator
        // 3. the if the userr is wrong then it will update the button to say guess again 
        onClick: btnValue === 'Next' ? nextHandler : wrongHandler
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                {/* different input tags will appear for different phases of the game, if the phase is currently guessing then it will autofocus input if it is not then it will show the input with the placeholder */}
                {
                    phase === 'guessing' ? 
                    (<input type="text" autoFocus value={guess} onChange={guessHandler}/>) : 
                    (<input type="text" placeholder='Press Enter for Next' value={guess} onChange={guessHandler}/>)
                }

                <input type="submit" value={btnValue} {...nextBind}/>
            </form>
            <h2>Score: {counter}</h2>
        </>
    )
}

// I have a phase bc if I have a phase, the default phase is guessing, the only time I get out of that phase is when I guess correctly and I am awaiting to press enter to go to the next pokemon. you see in the code the phase only ever gets changed if they are correct which is why you see me set it to phase to idle