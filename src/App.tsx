import { SetStateAction, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import debounce from 'lodash.debounce'

export function Recipe({ flavor }) {
  return (
    <div>
      <h1>{flavor} Smoothie</h1>
      <ul>
        <li>Ingredient</li>
        <li>Ingredient</li>
      </ul>
      <h3>Instructions</h3>
      <ol>
        <li>Mix it all together</li>
        <li>Drink it</li>
      </ol>
    </div>
      )
}


function App() {
  //const [count, setCount] = useState(0);
  const [flavor, setFlavor] = useState("");

  const handleChange = (event) => {
    setFlavor(event.target.value);
  }

  const debouncedHandleChange = useCallback(debounce(handleChange, 300), []);

  return (
    <>
      <div>          
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgP-gCeQBovk0SNrVgT_nO45GTavOHXBy1S6Wz-Qm3Cj8ciQ&s" alt="Drink" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEYBELmvJk4qPPFmC2j6CePyy6f5FYqymCz-Rj21ptR7Ni7E&s" alt="Pineapple" />
      </div>
      <h1>Smoothiest</h1>
      <div className="card">
        <div>
          <label>Enter a flavor for your smoothie</label>
          <input type="text" onChange={debouncedHandleChange}></input>
        </div>
        <button> 
          Make me a {flavor} smoothie
        </button>
        <Recipe flavor = {flavor}></Recipe>

      </div>

    </>
  )
}
//also have AI name the smoothie?
export default App;
