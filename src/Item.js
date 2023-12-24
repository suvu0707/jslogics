import React, { useEffect, useState } from "react";

function Item() {
  const [name, pickName] = useState("");
  const [age, pickAge] = useState("");
  const [item, setItem] = useState([]);
  const[id,pickId]=useState("");

  const getItem = () => {
    fetch("http://localhost:1234/user")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  };
  useEffect(() => {
    getItem();
  }, [1]);

  const saveData = () => {
    const newData = {
      name: name,
      age: age,
    };

    const response = {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:1234/user", response).then((itemArray) => {
      console.log(itemArray);
      getItem();
    });
  };

  const deleteItem = (id) => {
    const response = {
      method: "DELETE",
    };
    fetch("http://localhost:1234/user/" + id, response).then((res) => {
      getItem();
    });
  };

  const editItem=(id)=>{
    const response={
        method:"GET"
    }
    fetch("http://localhost:1234/user/"+id,response)
    .then(res=>res.json())
    .then(data=>{
        pickId(id);
        pickName(data.name);
        pickAge(data.age);
        
    })
  }
  const updateData=()=>{
    const newData = {
        name: name,
        age: age,
      };
    const response={
        method:"PUT",
        body:JSON.stringify(newData),
        headers:{
            "Content-Type":"application/json"
        }
    }
    fetch("http://localhost:1234/user/"+id,response)
    .then(res=>{
        getItem()
    })
  }
  return (
    <div>
      <p>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(obj) => pickName(obj.target.value)}
        />
        <input
          placeholder="Enter Age"
          value={age}
          onChange={(obj) => pickAge(obj.target.value)}
        />
        <button onClick={saveData}>Save</button>
        <button onClick={updateData}>Update</button>
      </p>
      {item.map((info) => {
        return (
          <p key={info.id}>
            {info.name}-{info.age}
            <button onClick={deleteItem.bind(this, info.id)}>Delete</button>
            <button onClick={editItem.bind(this, info.id)}>Edit</button>
          </p>
        );
      })}
    </div>
  );
}

export default Item;
