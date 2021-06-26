import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "components/UI/Input/Input";
const MealItemForm = (props) => {
  return <form className={classes.form}>
      <Input id="abx"/>
      <button>+ Add</button>
  </form>;
};

export default MealItemForm;
