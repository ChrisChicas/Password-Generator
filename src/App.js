import { useState } from "react"
import './App.css';

function App() {
  const [passwordPreferences, setPasswordPreferences] = useState({
    difficulty: "Easy",
    customLen: 6,
    special: false
  }) // React useState variable that holds information which is plugged into the Generate function below
  const [password, setPassword] = useState("") // React useState variable that holds generated password, used in the Generate function
  const nums = Array.from(Array(10).keys()) // Creates an array of numbers from 0-9
  const lowerChars = "abcdefghijklmnopqrstuvwxyz".split("") // Splits string into array of lowercase letters a-z
  const upperChars = lowerChars.map(char => {return char.toUpperCase()}) // Takes array of lowercase letters and returns array of uppercase letters
  const specialChars = "~!@#$%^&*()-_+={[]}|';:/?,.<>".split("") // Splits string into array of special characters
  const baseChars = [...nums, ...lowerChars, ...upperChars] // Main array of base characters for passwords (Does not include special characters)
  const baseSpChars = [...baseChars, ...specialChars] // Array of base characters + special characters

  const Generate = (e, difficulty, customLen, special) => { // Password generator function. Returns passwords based on if they include special characters + length of password selected
      e.preventDefault() // Prevents form submit
      let curLen = 0 // Current generated password length
      let newPass = "" // Empty string which will contain the new password being generated
      if (special === false){
          if (difficulty === "Easy"){
              while (curLen < 8){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
          } else if (difficulty === "Medium"){
              while (curLen < 12){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
          } else if (difficulty === "Hard"){
              while (curLen < 16){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
          } else{
              while (curLen < customLen){
                  newPass = newPass + baseChars[Math.floor(Math.random() * baseChars.length)]
                  curLen++
              }
              setPassword(newPass)
          }
      } else {
          if (difficulty === "Easy"){
              while (curLen < 8){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
          } else if (difficulty === "Medium"){
              while (curLen < 12){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
          } else if (difficulty === "Hard"){
              while (curLen < 16){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
          } else{
              while (curLen < customLen){
                  newPass = newPass + baseSpChars[Math.floor(Math.random() * baseSpChars.length)]
                  curLen++
              }
              setPassword(newPass)
          }
      }
      let copy = document.getElementById("copy")
      if (copy){
        copy.innerText = "Copy Password"    
      }
  }

  const Copy = async () => {
    await navigator.clipboard.writeText(password)
    let copy = document.getElementById("copy")
    copy.innerText = "Copied!"
  }

  return (
    <main className="container-fluid main">
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
                <label className="form-check-label" htmlFor="custom">Custom Length:</label>
                <input className="form-check-input" type="radio" name="difficulty" id="custom" value="Custom" onClick={e => {setPasswordPreferences({...passwordPreferences, difficulty: e.target.value})}}/>
                <input className="form-control" type="number" defaultValue="6" min="6" onChange={e => {setPasswordPreferences({...passwordPreferences, customLen: e.target.value})}}/>
            </div>
            <div className="form-check special">
                <label className="form-check-label" htmlFor="specialF">Without Special Characters</label>
                <input className="form-check-input" type="radio" name="special" id="specialF" onClick={() => {setPasswordPreferences({...passwordPreferences, special: false})}} defaultChecked/>
            </div>
            <div className="form-check special">
                <label className="form-check-label" htmlFor="specialT">With Special Characters</label>
                <input className="form-check-input" type="radio" name="special" id="specialT" onClick={() => {setPasswordPreferences({...passwordPreferences, special: true})}}/>
            </div>
            <br/>
            <button className="btn btn-light" type="submit">Generate!</button>    
        </form>
        { password ? 
        <div className="container-fluid password">
            <h2><u>Your password:</u></h2>
            <h2>{password}</h2>
            <button onClick={Copy} className="btn btn-light" id="copy" type="submit">Copy Password</button>
        </div> :
        null } 
        {/* Above div will only appear after a password has been generated */}
    </main>
  );
}

export default App;