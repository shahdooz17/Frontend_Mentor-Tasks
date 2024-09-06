import React from "react";
import ReactDOM from "react-dom";
import FAQ from "./components/FAQ";

const initialItems = [
  {
    title: "Do you prefer Android or iOS?",
    answer: "I like to use iOS products",
  },
  {
    title: "Do you prefer writing CSS or Tailwind?",
    answer: "I like to use Tailwind",
  },
  {
    title: "Firebase or Supabase?",
    answer: "I am using Supabase!",
  },
];

const App = () => (
  <div>
    <FAQ initialItems={initialItems} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
