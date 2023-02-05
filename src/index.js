import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MetaTags from 'react-meta-tags';
class Meta extends React.Component {
  render() {
    return (
      <>
      <MetaTags>
        <meta name="viewport" content="width=428,height=926,shrink-to-fit=no"></meta>            
      </MetaTags>
      </>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Meta />   
      <App />    
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();