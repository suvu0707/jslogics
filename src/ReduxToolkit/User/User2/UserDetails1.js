import React, { useState } from "react";
import { Chance } from "chance";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./UserSlice1";
import { removeAllUserType } from "./CreateActions";

function UserDetails1() {
  const fakeUserData = Chance().name({ middle: true });
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.users);
  console.log("wdw", UserData);
  const saveUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  const deleteSingleUser = (id) => {
    dispatch(removeUser(id))
  };
  const deleteAllUser=()=>{
    dispatch(removeAllUserType())
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={() => saveUser(fakeUserData)}>Add User</button>
      <div>
        {UserData.map((info, id) => {
          return (
            <p key={id}>
              {id} : {info}{" "}
              <button onClick={() => deleteSingleUser(id)}>
                <b style={{ color: "red" }}>X</b>
              </button>
            </p>
          );
        })}
        {UserData.length>1 && <button onClick={()=>deleteAllUser()}>Delete All User</button>}
      </div>
      
    </div>
  );
}

export default UserDetails1;
