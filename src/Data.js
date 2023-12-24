import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Data() {
  const [commentList, setCommentList] = useState([]);
  const [name, pickName] = useState("");
  const [price, pickPrice] = useState("");
  const [qty, pickQty] = useState("");
  const [details, pickDetails] = useState("");
  const [photo, pickPhoto] = useState("");
  const [id, pickId] = useState();

  const getData = () => {
    axios.get("http://localhost:1234/itemlist").then((res) => {
      setCommentList(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, [true]);
  const Save = () => {
    const newData = {
      price: price,
      name: name,
      photo: photo,
      details: details,
      qty: qty,
    };
    axios.post("http://localhost:1234/itemlist", newData).then((res) => {
      getData();
    });
  };

  const deleteData = (id) => {
    axios.delete("http://localhost:1234/itemlist/" + id).then((res) => {
      getData();
    });
  };
  const editData=(id)=>{
    axios.get("http://localhost:1234/itemlist/" + id)
    .then(res=>{
      pickDetails(res.data.details)
      pickName(res.data.name)
      pickPhoto(res.data.photo)
      pickPrice(res.data.price)
      pickQty(res.data.qty);
      pickId(id);
    })
  }
  const Update=()=>{
    const newData = {
      price: price,
      name: name,
      photo: photo,
      details: details,
      qty: qty,
    };
    axios.put("http://localhost:1234/itemlist/" + id,newData)
    .then(res=>{
      getData()
    })
  }
  return (
    <div>
      <p>
        {" "}
        <input
          value={name}
          onChange={(obj) => pickName(obj.target.value)}
          placeholder="Enter Name"
        />
        <input
          value={price}
          onChange={(obj) => pickPrice(obj.target.value)}
          placeholder="Enter Price"
        />
        <input
          value={qty}
          onChange={(obj) => pickQty(obj.target.value)}
          placeholder="Enter Quantity"
        />
        <input
          value={details}
          onChange={(obj) => pickDetails(obj.target.value)}
          placeholder="Enter Details"
        />
        <input
          value={photo}
          onChange={(obj) => pickPhoto(obj.target.value)}
          placeholder="Enter Photo"
        />
        <button onClick={Save}>Save</button>
        <button onClick={Update}>Update</button>
      </p>
      {commentList.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.name}-{item.price}-{item.qty}-{item.details}
              <button onClick={deleteData.bind(this, item.id)}>Delete</button>
              <button onClick={editData.bind(this, item.id)}>Edit</button>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
