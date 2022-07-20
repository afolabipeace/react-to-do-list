import React from 'react';
import { useState } from "react"
const Add = ({addHere})=> {
    const [task, settask] = useState("");
   

    return (
        <>
            <div className='col-sm-12 col-md-12 col-lg-4 shadow-lg p-1'>
                <div className="card bg-dark border border-warning p-3">
                    <h1 className='text-center bg-dark text-light'>TO-DO LIST</h1>
                    <div className="bg-dark">
                        <input type="text" placeholder='Add Task' className='mb-3 form-control bg-dark text-light' onChange={(e) => settask(e.target.value)} value={task} />
                        {/* {editMode == false ? */}
                            <button onClick={() => addHere({task},settask)} className='btn btn-outline-success btn-warning w-25 text-light mb-3'>ADD</button>
                        {/* //     <button onClick={(e) => update(e)} className='btn btn-outline-primary btn-warning w-50 text-light mb-3' style={{ display: 'grid', placeItems: 'center', margin: 'auto'}}>UPDATE</button>
                        // }  */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Add