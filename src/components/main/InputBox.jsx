import { useState } from "react"

const InputBox = () => {

  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const pushTXT = (e) => {
    e.preventDefault()
    setArr(text)
  }

  return (
    <>
      <form>
        <label>PWA 테스트</label>
        <input 
          onChange={(e)=>{
            setText(e.target.value)
          }}
        />
        <button onClick={pushTXT}>입력</button>
      </form>
      {arr}
    </>
  )
}
export default InputBox