import { useState } from 'react'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Select Status");
  const [role, setRole] = useState("");
  const [company, setComp] = useState("");
  const [platform, setPlat] = useState("");

 

  const handleDropDown = () => {
    setOpen(!open);
  };

  function handleStatus(value : string) {
    setStatus(value);
  };

  function handleSubmit(){
    alert("Submited! Awesome!");
  };

  function handleRoleData(e : React.ChangeEvent<HTMLInputElement>){
    setRole(e.target.value);
  };

  function handleCompData(e : React.ChangeEvent<HTMLInputElement>){
    setComp(e.target.value);
  };

  function handlePlatData(e : React.ChangeEvent<HTMLInputElement>){
    setPlat(e.target.value);
  };
 

  //Goals
  //Forms? Saving to a DB, and adding CSS, and Routing, Input Validation (no empty fields, etc)

  return (
    <>
  
      <section id="navigation">

      </section>




      <section id = "center">
          <div>
             <input type="text" placeholder="Type Role Here" value={role} onChange={handleRoleData}></input>
             <input type="text" placeholder="Type Company Here" value={company} onChange={handleCompData}></input>
             <input type={"text"} placeholder='Platform Used' value={platform} onChange={handlePlatData}></input>
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
