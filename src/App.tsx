import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const words = ["banana", "dog", "book", "computer", "desk", "car", "tree", "flower", "ocean", "mountain", "sky", "sun", "moon", "star", "cloud", "rain", "snow", "wind", "storm", "lightning"];

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectGuesses = guessedLetters.filter((letter) => !wordToGuess.includes(letter))
  const correctGuesses = guessedLetters.filter((letter) => wordToGuess.includes(letter))

  const isLoser = incorrectGuesses.length >= 6
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters((guessedLetters) => [...guessedLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetters(key)
    }) as unknown as EventListener

    document.addEventListener('keypress', handler)

    return (() => {
      document.removeEventListener('keypress', handler)
    })
  }, [guessedLetters])

  return (
    <HangmanPart>
      {isLoser && "Atualize a página e tente novamente"}
      {isWinner && "Parabens, você venceu! Atualize a página para jogar novamente"}
      Zolk
      <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} word={wordToGuess} />
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </HangmanPart>
  )
}

export default App
