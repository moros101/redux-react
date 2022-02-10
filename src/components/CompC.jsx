import React,{useState} from 'react';
import {create,del,remove} from '../actions/index.js'
import { useDispatch,useSelector } from 'react-redux';
import './CompC.css'
import {BsFillCalendarPlusFill} from 'react-icons/bs';
import {MdDelete} from 'react-icons/md'
const CompC = () => {

    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=>state.toDoReducers.list);
    const dispatch = useDispatch();

    return (
        <>
        <div className="main-div">
            <h1 className="child-div">To Do List</h1>
            <div className="showItems">
            <input type="text" placeholder="Add a task" value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
            <button className="fa" onClick={()=>dispatch(create(inputData),setInputData(''))}><BsFillCalendarPlusFill /></button>
            </div>
            
            

            <div className="showItems">
                {
                    list.map((elem)=> {

                        return (

                            <div className="eachItem" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <div className="todo-btn">

                                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(del(elem.id))}><MdDelete /></i>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

            <div className="showItems">
                <button className="btn effect04" onClick={()=>dispatch((remove()))}>Remove</button>
            </div>
        </div>
        </>
    )

}

export default CompC;   