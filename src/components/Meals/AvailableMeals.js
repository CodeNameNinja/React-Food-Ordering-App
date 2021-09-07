import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card/Card";
import MealItem from "../Meals/MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 10,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      let response = await fetch(
        "https://dummymovie-96eb2-default-rtdb.firebaseio.com/meals.json"
      );
      let responseData = await response.json();
      let meals = [];
      for (let key in responseData) {
        meals.push({
          ...responseData[key],
          id: key,
        });
      }
      setMeals(meals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.Loading}>
        <h1>Loading...</h1>
      </section>
    );
  }
  const mealsList = meals.map((meal) => {
    return (
      <MealItem id={meal.id} key={meal.id} meal={meal}>
        {meal.name}
      </MealItem>
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
