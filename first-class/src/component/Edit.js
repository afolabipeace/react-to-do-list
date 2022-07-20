import React from "react"
import { useState } from 'react'
const Edit = ({alltask,deleted})=>{
    // const [editMode, seteditMode] = useState(false)
    // const [id, setId] = useState(0)
    // const [currentIndex, setcurrentIndex] = useState(0)

    return(
        <>
        <table className="table text-light bg-dark">
            <thead>
                <th>S/N</th>
                <th>Task</th>
                <th>Action</th>
            </thead>

        
        {alltask.map((val,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{val.task}</td>
                    <td>
                    {/* <div className="col-md-2">
                     <i className='fa fa-pencil fa-2x' onClick={() => edit(index)}></i>
                    </div> */}
    
                    <div className="col-md-2">
                       <i className='fa fa-trash fa-2x' onClick={() => deleted(index)}></i>
                    </div>

                    </td>
                </tr>
        ))
        }
        </table>
        </>
    )
}
export default Edit