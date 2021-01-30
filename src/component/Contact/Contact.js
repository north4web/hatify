import React, {useState} from 'react'



function Contact() {

    const [state, setState] = useState({});
    

    const updateState = (e) => {
        e.preventDefault();
        state[e.target.id] = e.target.value;
        setState({...state});
    }

    const getData = (e) => {
        e.preventDefault();
        console.log(state);
        localStorage.setItem("John_Data", JSON.stringify(state));
        const myData = (localStorage.getItem("John_Data"));
        console.log(myData);
        }

        return(
            <div>
               
                
<form style={{margin:"15px", textAlign: "center"}}>


<h4>Send us a message</h4>


<p>Name: < br/>
    <input type="text" className="form"  onChange = {updateState}/></p>
<p>Email: < br/>
 <input size="100" type="email" className="form"  onChange = {updateState}/>  </p>
Message:< br/>

<textarea rows="3" cols="50"  onChange = {updateState}>
</textarea>


< br />
<button onClick={getData}>Send</button>


{/* <h4 style={{color: 'navy'}}>{state.brand} {state.color} {state.year}</h4> */}
</form>


            </div>
        )
    }

export default Contact