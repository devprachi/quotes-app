import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Quotes from "./components/pages/Quotes";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuotes = React.lazy(() => import("./components/pages/AddQuotes"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NoQuotesFound = React.lazy(() =>
  import("./components/quotes/NoQuotesFound")
);

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/add-quote">
            <AddQuotes />
          </Route>
          <Route path="*">
            <NoQuotesFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
