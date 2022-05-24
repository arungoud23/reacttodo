import React,{useState} from 'react'

const Answer = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItem] = useState([]);


    const addItem = () => {
        if(!inputData){

        }else{
        setItem([...items,inputData])
        setInputData('')
        }
}

// delete the Item

const deleteItem = (id) =>{
    const updateditems = items.filter((elem,ind) => {
       return ind !== id;
    })
    setItem(updateditems);
}
  return <>
    
    <input placeholder="...Add Items" type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
    
    <button onClick={addItem}>Add items</button>
   <div className="showItems">
       {
       items.map((elem,ind) => {
           return (
            <div className="eachItem" key={ind}>
            <h3>{elem}  <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(ind)}></i></h3>
            
 
        </div>
           )
})

}
      

   </div>
  </>
}

export default Answer