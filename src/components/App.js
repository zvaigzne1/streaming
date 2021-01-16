import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import createBrowserHistory from "../history";

// <Switch> will show only first matching route. not all
// /streams/new matches also streams/:id so bouth was showing

const App = () => {
  return (
    <div className="ui container">
      <Router history={createBrowserHistory}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// const PageOne = () => {
//     return (
//         <div>
//             PageOne
//             <Link to="/pagetwo">Navigate to Page Two</Link>
//         </div>
//     );
// }
// const PageTwo = () => {
//     return (
//         <div>
//             PageTwo
//             <Link to="/">Navigate to Page One</Link>
//         </div>
//     );
// }

// const App = () => {
//     return (
//         <div>
//             <BrowserRouter>
//                 <div>
//                     <Route path="/" exact component={PageOne} />
//                     <Route path="/pagetwo" component={PageTwo} />
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// };

// export default App;
