import { useState } from 'react'
import './App.css'

function App() {
  const[height, setHeight] = useState ("");
  const[weight, setWeight] = useState ("");
  const[bmi, setBmi] = useState (null);
  const[bmiStatus, setBmiStatus] = useState ("");
  const [errorMessage, setErrorMessage] = useState ("");

  const calculateBmi = () =>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if(isValidHeight && isValidWeight){
      const heightInMetters = height / 100;
      const bmiValue = weight / ( heightInMetters * heightInMetters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue <19.5){
        setBmiStatus("UnderWeight");
      }else if(bmiValue >= 19.5 && bmiValue <25.9){
        setBmiStatus("Normal Weight");
      }else if(bmiValue >= 25 && bmiValue <29.9){
        setBmiStatus("OverWeight");
      }else{
        setBmiStatus("Obese");
      }
      setErrorMessage ("");
    }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMessage ("Please enter valid numeric values for height and weight.");
    }
  }

  return (
    <>
     <div className='bmi-calculator'>
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
       {errorMessage && <p className='error'>{errorMessage}</p>}
        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" value={height} id="height" onChange={(e)=>setHeight (e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" value={weight} id="weight" onChange={(e)=>setWeight (e.target.value)} />
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        {bmi!== null && (
          <div className="result">
          <p>Your BMI is: {bmi}</p>
          <p>Status:{bmiStatus}</p>
        </div>
        )}
      </div>
     </div>
    </>
  )
}

export default App
