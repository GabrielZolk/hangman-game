import styled from "styled-components"

const Wrapper = styled.div`
    justify-content: center;
    display: flex;
    gap: 2rem;
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    font-family: monospace;
`

interface HangmanWordProps {
    reveal: boolean
    word: string
    guessedLetters: string[]
}

export default function HangmanWord({reveal, word, guessedLetters}: HangmanWordProps) {
   
    return (
        <Wrapper>{word.split("").map((letter, index) => (
            <span
                style={{
                    borderBottom: '0.1em solid white',
                    height: '40px'
                }} key={index}
            >
              <span style={{visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'}}>{letter}</span>  
             
            </span>
        ))}</Wrapper>
    )
}
