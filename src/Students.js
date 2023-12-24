import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Students() {
    const dispatch=useDispatch();
    const sdata=useSelector(state=>state.SList)
    const[name,pickName]=useState("");
    const[age,pickAge]=useState("");
    const[sid,setSid]=useState(null);
    // const[data,setData]=useState([]);

    const saveData=()=>{
        let info={type:"save",payload:{age:age,name:name}}
        console.log(info)
        return info;
    }
    const deleteData=(id)=>{
        let info={type:"delete",payload:{id:id}}
        return info;
    }

   
  
  return (
    <div>
        <p>
            <input placeholder='Name' value={name} onChange={(e)=>pickName(e.target.value)}/>
            <input placeholder='Name' value={age} onChange={(e)=>pickAge(e.target.value)}/>
            <button onClick={()=>dispatch(saveData())}>Save</button>
            {/* <button onClick={()=>dispatch(updateData())}>Update</button> */}
        </p>
        {
            sdata.map((info,index)=>{
                return(
                    <p key={index}>
                        {info.name}-{info.age}
                        <button onClick={()=>dispatch(deleteData(info.id))}>Delete</button>
                        {/* <button onClick={(editData.bind(this,info.id))}>Edit</button> */}
                    </p>
                )
            })
        }
    </div>
  )
}

export default Students