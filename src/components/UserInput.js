import { useRef } from "react"


export default function  UserInput(props){  
    const inputEle =  useRef("");
    return (
        <div className={`input`}>
            <input onChange={(e)=>{props.change(inputEle)}} ref={inputEle} type="text" placeholder="username" name="" id="" />
        </div>
    )
}   