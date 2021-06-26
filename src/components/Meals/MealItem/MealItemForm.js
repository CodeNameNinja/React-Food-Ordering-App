import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "components/UI/Input/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        input={{
          id: "amount_" + props.id,
          type: "text",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
