import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shurpa with lamb",
    description:
      "Soup with lamb, which includes onions, sweet peppers, tomatoes, salt and spices.",
    price: 200,
  },
  {
    id: "m2",
    name: "Shurpa with beef",
    description:
      "Soup with beef, which includes onions, sweet peppers, tomatoes, salt and spices.",
    price: 220,
  },
  {
    id: "m3",
    name: "Uighur lagman",
    description:
      "Noodles with beef, Chinese cabbage, celery, green beans, radishes, tomatoes, garlic and spices.",
    price: 240,
  },
  {
    id: "m4",
    name: "Mastova",
    description:
      "Rice soup with beef, potatoes, carrots, celery, radishes and beans.",
    price: 200,
  },
  {
    id: "m5",
    name: "Chuchvara",
    description: "Dumplings with beef and broth.",
    price: 220,
  },
  {
    id: "m6",
    name: "Plov",
    description: "Fried rice with beef, carrot, onion and raisin quiche-mish.",
    price: 250,
  },
  {
    id: "m7",
    name: "Manti",
    description: "Steamed dumplings with meat, onion and spices.",
    price: 250,
  },
  {
    id: "m8",
    name: "Lagman fried",
    description: "Fried noodles with beef and sauce.",
    price: 300,
  },
  {
    id: "m9",
    name: "Kazan kebab",
    description: "Grilled lamb with potatoes.",
    price: 380,
  },
  {
    id: "m10",
    name: "Dimlama",
    description: "Braised lamb with potatoes and vegetables.",
    price: 330,
  },
  {
    id: "m11",
    name: "Kovurma",
    description: "Roast beef and rams with potatoes, onions and spices.",
    price: 330,
  },
  {
    id: "m12",
    name: "Beef kebab",
    description:
      "Fried minced beef on the grill, served with salad and sauces.",
    price: 200,
  },
  {
    id: "m13",
    name: "Veal shish kebab",
    description:
      "Grilled veal meat on the grill, served with salad and sauces.",
    price: 200,
  },
  {
    id: "m14",
    name: "Chicken skewers",
    description: "Fried chicken on the grill, served with salad and sauces.",
    price: 180,
  },
  {
    id: "m15",
    name: "Chicken wings",
    description: "Grilled chicken wings with salad and sauces.",
    price: 230,
  },
  {
    id: "m16",
    name: "Lamb liver (with fat tail)",
    description: "Grilled lamb liver with fat tail, salad and sauces.",
    price: 200,
  },
  {
    id: "m17",
    name: "chicken hearts",
    description: "Fried chicken hearts, salad and sauces.",
    price: 200,
  },
  {
    id: "m18",
    name: "Grilled potatoes",
    description: "Grilled fried potatoes with salad and sauces.",
    price: 70,
  },
  {
    id: "m19",
    name: "Mushrooms on the coals",
    description: "Grilled champignons with salad and sauces.",
    price: 130,
  },
  {
    id: "m20",
    name: "Eggplants on the coals",
    description: "Charcoal fried eggplants with salad and sauces.",
    price: 120,
  },
  {
    id: "m21",
    name: "tomato sauce",
    description: "Tomatoes, herbs, garlic, onions.",
    price: 70,
  },
  {
    id: "m22",
    name: "garlic sauce",
    description: "Mayonnaise, garlic, onion.",
    price: 70,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
