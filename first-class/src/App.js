import React from 'react'
import { useState } from 'react'
// import { myStyle } from './styles/myStyle';
import Edit from './component/Edit'
import Add from './component/Add'


function App() {
  const [alltask, setalltask] = useState([]);
  const addHere = (newTask,settask) => {
   let newAllTask= ([...alltask, newTask])
   setalltask(newAllTask)
   settask('')
  }
  const deleted = (index) => {
    let updateTask =alltask.filter((val, ind) => (ind != index));
    setalltask(updateTask);
  }
  // const edit = (index) => {
  //   seteditMode(true);
  //   setId(index)
  //   settask("")
  // }

  // const update = () =>{
  //   let newObj = { task}
  //   setalltask(alltask.map((task,i) => i ===id ? newObj : task));
  //   seteditMode(false);
  //   settask("")
  // }
  return (
    <>
      <div className="row my-5" >
          <Add addHere={addHere}/>
          <Edit alltask={alltask} deleted ={deleted}/>
      </div>

    </>
  )
}

export default App