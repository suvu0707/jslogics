// inside src/App.js
// Replace previous code with this.

import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Login from "./Login";
import { Button, Combobox } from "reactofy-component-library";
import { faker } from "@faker-js/faker";
import AllQuestions from "./AllQuestions";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    localStorage.setItem("name", data.name);
  };

  const comboAOptions = []; 
  for (let i = 1; i <= 1000000; i++) { comboAOptions.push({ value: i, label: faker.person.firstName() + i }); } const onSelectedItem = (item) => { console.log("itemsds", item); };

  return (
    <>
      {/* <p className="title">Registration Form</p>

			<form className="App" onSubmit={handleSubmit(onSubmit)}>
				<input type="text" {...register("name")} />
				<input type="email" {...register("email", { required: true })} />
				{errors.email && <span style={{ color: "red" }}>
					*Email* is mandatory </span>}
				<input type="password" {...register("password")} />
				<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
			</form>
      <Login/> */}
      {/* <Button text={"Click hsere"} color="red" /> */}
      {/* <Combobox valueKey={"value"} labelKey={"label"} containerWidth={150}  options={comboAOptions} getSelectedOptions={onSelectedItem} /> */}
      <AllQuestions/>
    </>
  );
}
export default App;
