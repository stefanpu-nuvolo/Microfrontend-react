import React from "react";
import ReactDOM from "react-dom";

// import ResultDisplay from "./components/ResultDisplay";

import App from "./apps/App";

// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>Hello Microfrontend</h1>
//       {/* <ResultDisplay></ResultDisplay> */}
//     </React.Fragment>
//   );
// };

(function() {
  ReactDOM.render(<App />, document.getElementById("react-root"));
})();
