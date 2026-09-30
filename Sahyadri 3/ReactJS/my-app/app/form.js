"use client"
import { useState } from "react"

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e){
        alert(`Hello ${name}`);
        setName('')
        setEmail('')
    }

    return(
        <>
        <h2>Registration Form</h2>
        <div>
            <input type="text" placeholder="name" value={name} onChange={(e) => {
                setName(e.target.value)
            }}></input>
            <input type="text" placeholder="email" onChange={(e) => {
                setEmail(e.target.value)
            }}></input>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}