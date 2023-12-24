import axios from "axios";
import React, { useEffect, useState } from "react";

function Practice2() {
  const [name, pickName] = useState("");
  const [age, pickAge] = useState("");
  const [id, pickId] = useState(null);
  const [user, setUser] = useState([]);

  const getData = () => {
    fetch("http://localhost:1234/user")
      .then((res) => res.json())
      .then((resArray) => {
        console.log(resArray);
        setUser(resArray);
      });
  };
  useEffect(() => {
    getData();
  }, [1]);

  const saveData = () => {
    const newData = {
      name: name,
      age: age,
    };
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:1234/user", requestOptions).then((res) => {
      console.log(res);
    });
  };
  const deleteData = (itemid) => {
    const requestOptions = {
      method: "DELETE",
    };
    fetch("http://localhost:1234/user/" + itemid, requestOptions).then(
      (res) => {
        getData();
      }
    );
  };

  const editData=(itemid)=>{
    const requestOptions = {
        method:"GET",
    }
    fetch("http://localhost:1234/user/" + itemid, requestOptions)
    .then(res=>res.json())
    .then(res=>{
        console.log("editadt",res)
        pickName(res.name);
        pickAge(res.age);
        pickId(itemid);
    })
  }
  const updateData=()=>{
    const updatedData={
        name:name,age:age
    }
    const requestOptions={
        method:"PUT",
        body:JSON.stringify(updatedData),
        headers:{"Content-Type":"application/json"}
        
    }
    fetch("http://localhost:1234/user/" + id, requestOptions)
    .then(res=>{
        getData()
    })
  }
  return (
    <div>
      <p>
        <input
          placeholder="Name"
          value={name}
          onChange={(obj) => pickName(obj.target.value)}
        />
        <input
          placeholder="Age"
          value={age}
          onChange={(obj) => pickAge(obj.target.value)}
        />
        <button onClick={saveData}>Save</button>
        <button onClick={updateData}>Update</button>
      </p>
      {user &&
        user.map((item, index) => {
          return (
            <p key={index}>
              {item.name}-{item.age}
              <button onClick={deleteData.bind(this, item.id)}>Delete</button>
              <button onClick={editData.bind(this, item.id)}>Edit</button>
            </p>
          );
        })}
    </div>
  );
}

export default Practice2;
