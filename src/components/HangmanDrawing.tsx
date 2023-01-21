import styled from "styled-components"

const Base = styled.div`
    height: 10px;
    width: 250px;
    background-color: white;
`

const Vertical = styled.div`
    height: 250px;
    width: 10px;
    background-color: white;
`

const Horizontal = styled.div`
    height: 10px;
    width: 250px;
    background-color: white;
    position: absolute;
    right: 430px;
    top: 0;
`

const VerticalSmall = styled.div`
    height: 60px;
    width: 10px;
    background-color: white;
    position: absolute;
    top: 0;
    right: 420px;
`

const Head = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid white;
    position: absolute;
    top: 59px;
    right: 398px;
`

const Body = styled.div`
    height: 80px;
    width: 5px;
    background-color: white;
    position: absolute;
    top: 112px;
    right: 422px;
`

const RightArm = styled.div`
    height: 5px;
    width: 50px;
    background-color: white;
    position: absolute;
    top: 112px;
    right: 377px;
    rotate: -30deg;
`

const LeftArm = styled.div`
    height: 5px;
    width: 50px;
    background-color: white;
    position: absolute;
    top: 112px;
    right: 422px;
    rotate: 30deg;
`

const LeftLeg = styled.div`
    height: 5px;
    width: 50px;
    background-color: white;
    position: absolute;
    top: 200px;
    right: 422px;
    rotate: -30deg;
`

const RightLeg = styled.div`
    height: 5px;
    width: 50px;
    background-color: white;
    position: absolute;
    top: 200px;
    right: 377px;
    rotate: 30deg;
`

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

interface HangmanDrawingProps {
    numberOfGuesses: number
}

export default function HangmanDrawing({
    numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {bodyParts.slice(0, numberOfGuesses).map((BodyPart, index) => {
            return <BodyPart key={index}/>
        })}
        
        <VerticalSmall />
        <Horizontal />
        <Vertical />
        <Base />    
    </div>
  )
}
