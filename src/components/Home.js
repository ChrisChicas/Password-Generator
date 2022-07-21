import { useState } from "react"

export default function Home(){
    const [difficulty, setDifficulty] = useState("")
    const [customLen, setCustomLen] = useState(1)
    const [special, setSpecial] = useState(false)
    
    const Generate = (e, difficulty, customLen, special) => {
        e.preventDefault()
        if (special === true){
            console.log(difficulty)
            console.log(customLen)
        } else {
            console.log(difficulty)
        }
    }
    return(
        <main>
            <h1>HELLO!</h1>
            <form onSubmit={e => {Generate(e, difficulty, customLen, special)}}>
                <label htmlFor="easy">Easy</label>
                <input type="radio" name="difficulty" id="easy" value="Easy" onClick={e => {setDifficulty(e.target.value)}}/>
                <br/>
                <label htmlFor="medium">Medium</label>
                <input type="radio" name="difficulty" id="medium" value="Medium" onClick={e => {setDifficulty(e.target.value)}}/>
                <br/>
                <label htmlFor="hard">Hard</label>
                <input type="radio" name="difficulty" id="hard" value="Hard" onClick={e => {setDifficulty(e.target.value)}}/>
                <br/>
                <label htmlFor="custom">Custom</label>
                <input type="radio" name="difficulty" id="custom" value="Custom" onClick={e => {setDifficulty(e.target.value)}}/>
                <input type="number" defaultValue="1" min="1" onChange={e => {setCustomLen(e.target.value)}}/>
                <br/>
                <label htmlFor="specialT">With Special Characters</label>
                <input type="radio" name="special" id="specialT" onClick={() => {setSpecial(true)}}/>
                <label htmlFor="specialF">Without Special Characters</label>
                <input type="radio" name="special" id="specialF" onClick={() => {setSpecial(false)}}/>
                <br/>
                <button type="submit">Generate!</button>    
            </form>
        </main>
    )
}