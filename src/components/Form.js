import React , {useState} from 'react'

export default function Form(props) {
    const upclick = () =>{
        console.log("upparcase button was clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("updated to uppercase" , "success")
    }

    const textchange = (event) =>{
        console.log("text was changed")
        setText(event.target.value)
    }

    const lowclick =() =>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("updated to lowercase" , "success") 
    }

    const [text , setText] = useState("enter text");
  return (
    <>
    <div className={`mb-3 container text-${props.mode === "light" ?"grey" : "white"}`}>
        <h1>{props.heading}</h1>
        <textarea className={`form-control bg-${props.mode ==="light" ? "white" :"dark"} text-${props.mode==="light" ? "grey" :"white"}`} placeholder={text} onChange={textchange} id="mybox" rows="8"></textarea>
        <button className="btn btn-primary my-2 mx-3" onClick={upclick}>CONVERT TO UPPERCASE</button>
        <button className="btn btn-primary mx-3 my-2" onClick={lowclick}>convert to lowercase</button>
    </div>
    <div className={`container text-${props.mode === "light" ?"grey" : "white"}`}>
      <h1> Text Summary </h1>
      <p>{text.split(" ").length -1 } words and {text.length} characters</p>
      <p> text can be read in {0.008 * (text.split(" ").length -1) } minutes</p>
      <h2> Preview</h2>
      <p>{text.length>0?text :"enter something in the space above"}</p>
    </div>
    </>
  )
}
