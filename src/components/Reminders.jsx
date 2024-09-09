import React,{useState} from "react";
import { SiPluscodes } from "react-icons/si";
import "./RemindersStyle.css";
import { CiTrash } from "react-icons/ci";



function Reminders({ isOpenPencil, setIsOpenPencil }) {

const [inputValue,setInputValue] = useState('');
const [nweInp,setNewInp] = useState(()=>{
    const saverdItem = JSON.parse(localStorage.getItem('nweInp'));
    return saverdItem || [];
});


const handlaInput = (e)=>{
   setInputValue(e.target.value)
}

const addNewInput = ()=>{
    if(inputValue.trim()){
        const updateInput = [...nweInp,inputValue];
        setNewInp(updateInput);
        setInputValue("");
        setIsOpenPencil(false);
        localStorage.setItem('nweInp',JSON.stringify(updateInput))
    }
  
}
const delInput = (id) =>{
const filterElem = nweInp.filter((_,ind) =>ind !== id);
setNewInp(filterElem);
localStorage.setItem('nweInp',JSON.stringify(filterElem));

}

  return (
    <div className="notes_content">
      {isOpenPencil && (
        <input
          type="text"
          className="inputText"
          placeholder="add your notates" value={inputValue} onChange={handlaInput}
        />
      )}
      <button className="add_notes" onClick={addNewInput}>
        <SiPluscodes style={{color:'green'}} />
        Add notes
      </button>
      <ul>
        {
           nweInp.map((elem,key)=>(
            <li key={key} className="new_notes">{elem}
            <CiTrash className="trash" onClick={()=>delInput(key)}/>
            </li>
           )) 
        }
      </ul>
    </div>
  );
}

export default Reminders;
