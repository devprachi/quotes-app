import { useHistory } from "react-router-dom";
import QuoteForm from "./../quotes/QuoteForm";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";

const AddQuotes = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default AddQuotes;
