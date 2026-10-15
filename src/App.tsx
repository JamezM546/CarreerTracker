import { useState } from 'react'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Select Status");

  const handleDropDown = () => {
    setOpen(!open);
  };

  function handleStatus(value) {
    setStatus(value);
  };

  function handleSubmit(){
    alert("Submited! Awesome!");
  };
 

  //Goals
  //Forms? Saving Values, and adding CSS

  return (
    <>
  
      <section id="navigation">

      </section>




      <section id = "center">
          <div>
             <input placeholder="Type Role Here"></input>
             <input placeholder="Type Company Here"></input>
             <input placeholder='Platform Used'></input>
             <div className ="dropdown">
                <button onClick={handleDropDown}>{status}</button>
                {open ? (
                  <ul className="statusList">
                    <li className="Select">
                      <button onClick={() => handleStatus("Select Status")}>Select Status</button>
                    </li> 
                    <li className="Pending">
                      <button onClick={() => handleStatus("Pending")}>Pending</button>
                    </li>
                    <li className="Denied">
                      <button onClick={() => handleStatus("Denied")}>Denied</button>
                    </li>
                    <li className="Offered">
                      <button onClick={() => handleStatus("Offered")}>Offered</button>
                    </li>
                  </ul>
                ) : null}
             </div>
             <div>
              <button className="SubmitBtn" onClick={handleSubmit}>Submit</button>
             </div>
          </div>
      </section>
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}

      </>
  )
}

export default App
