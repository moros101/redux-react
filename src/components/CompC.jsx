import React,{useState} from 'react';
import {create,del,remove} from '../actions/index.js'
import { useDispatch,useSelector } from 'react-redux';

const CompC = () => {

    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=>state.toDoReducers.list);
    const dispatch = useDispatch();

    return (
        <>
            <form action="">
                <h1>To Do List</h1>
                <input type="text" placeholder="Add a task" value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                <button onClick={()=>dispatch(create(inputData),setInputData(''))}>Add</button>
            </form>

            <div className="showItems">
                {
                    list.map((elem)=> {

                        return (

                            <div className="eachItem" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <div className="todo-btn">

                                    <i title="Delete Item" onClick={()=>dispatch(del(elem.id))}>de</i>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

            <div>
                <button onClick={()=>dispatch((remove()))}>remove</button>
            </div>
        </>
    )

}

export default CompC;   