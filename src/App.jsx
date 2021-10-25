import "./App.css";
import { useState } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import defaultQuote from "./defaultQuote";

function App() {
  const [quote, setQuote] = useState(defaultQuote);

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard quoteSimpson={quote} />
      <button type="button" onClick={getQuote}>
        Get quote
      </button>
    </div>
  );
}

export default App;
