import { useState } from "react"
import './App.css';

function App() {
  const [passwordPreferences, setPasswordPreferences] = useState({
    difficulty: "Easy",
    customLen: 1,
    special: false
  })
  const [password, setPassword] = useState("")
  const nums = Array.from(Array(10).keys())
  const lowerChars = "abcdefghijklmnopqrstuvwxyz".split("")
  const upperChars = lowerChars.map(char => {return char.toUpperCase()})
  const specialChars = "~!@#$%^&*()-_+={[]}|';:/?,.<>".split("")
  const baseChars = [...nums, ...lowerChars, ...upperChars]
  const baseSpChars = [...baseChars, ...specialChars]

  const Generate = (e, difficulty, customLen, special) => {
      e.preventDefault()
      let curLen = 0
      let newPass = ""
      if (special === false){
          if (difficulty === "Easy"){
              while (curLen < 8){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          } else if (difficulty === "Medium"){
              while (curLen < 12){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          } else if (difficulty === "Hard"){
              while (curLen < 16){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          } else{
              while (curLen < customLen){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          }
      } else {
          if (difficulty === "Easy"){
              while (curLen < 8){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          } else if (difficulty === "Medium"){
              while (curLen < 12){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          } else if (difficulty === "Hard"){
              while (curLen < 16){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          } else{
              while (curLen < customLen){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
              return password
          }
      }
  }
  return (
    <main className="container-fluid">
        <h1><u>Password Generator</u></h1>
        <form onSubmit={e => {Generate(e, passwordPreferences.difficulty, passwordPreferences.customLen, passwordPreferences.special)}}>
            <div className="form-check">
                <label className="form-check-label" htmlFor="easy">Easy (8)</label>
                <input className="form-check-input" type="radio" name="difficulty" id="easy" value="Easy" onClick={e => {setPasswordPreferences({...passwordPreferences, difficulty: e.target.value})}} defaultChecked/>
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="medium">Medium (12)</label>
                <input className="form-check-input" type="radio" name="difficulty" id="medium" value="Medium" onClick={e => {setPasswordPreferences({...passwordPreferences, difficulty: e.target.value})}}/>
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="hard">Hard (16)</label>
                <input className="form-check-input" type="radio" name="difficulty" id="hard" value="Hard" onClick={e => {setPasswordPreferences({...passwordPreferences, difficulty: e.target.value})}}/>
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="custom">Custom</label>
                <input className="form-check-input" type="radio" name="difficulty" id="custom" value="Custom" onClick={e => {setPasswordPreferences({...passwordPreferences, difficulty: e.target.value})}}/>
                <input className="form-control" type="number" defaultValue="1" min="1" onChange={e => {setPasswordPreferences({...passwordPreferences, customLen: e.target.value})}}/>
            </div>
            <div className="form-check">
                <label className="form-check-label" htmlFor="specialF">Without Special Characters</label>
                <input className="form-check-input" type="radio" name="special" id="specialF" onClick={() => {setPasswordPreferences({...passwordPreferences, special: false})}} defaultChecked/>
                <br/>
                <label className="form-check-label" htmlFor="specialT">With Special Characters</label>
                <input className="form-check-input" type="radio" name="special" id="specialT" onClick={() => {setPasswordPreferences({...passwordPreferences, special: true})}}/>
            </div>
            <button className="btn btn-success" type="submit">Generate!</button>    
        </form>
        { password ? 
        <div className="container-fluid">
            <h2>Your password: {password}</h2>
        </div> :
        null }
    </main>
  );
}

export default App;