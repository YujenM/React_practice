import React, { useRef,useState} from "react"



export default function Ref() {
    const inputRef = useRef(null);
    const [isname,inotname]=useState(false)
    const submit=(e)=>{
        e.preventDefault();
        let uname=inputRef.current.value
        console.log(uname)
        uname===''?alert("Enter your name"):inotname(true)

    }
    return (
        <div>
            <h1>since I am using Ref it doesnot rerender the value in input tag</h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"10%" }}>
            
                <form >
                    <label>Enter text: </label>
                    <input type="text" ref={inputRef} />
                    <button onClick={submit}> submit </button>
                    <h1>{isname?"My name is "+ inputRef.current.value :""}</h1>
                </form>
            </div>
        </div>
        
        
    )
}

