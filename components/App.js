import React from 'react';
// import './App.css';
import DummySearchBar from './DummySearchBar';
import TopDestinations from './TopDestinations';
import Suggestions from './Suggestions';
import Categories from './Categories';
import IntakeForm from './IntakeForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our App Page</h1>
      </header>
      <main>
        <div className="container">
          <TopDestinations />
          <Suggestions />
          <Categories />
          <DummySearchBar />
          <IntakeForm />
        </div>
      </main>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Link,Redirect } from 'react-router-dom';
// import TopDestinations from './TopDestinations';
// import Suggestions from './Suggestions';
// import Categories from './Categories';
// import SearchBar from './DummySearchBar';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Top Destinations</Link>
//             </li>
//             <li>
//               <Link to="/suggestions">Suggestions</Link>
//             </li>
//             <li>
//               <Link to="/categories">Categories</Link>
//             </li>
//           </ul>
//         </nav>

//         <hr />

//         <Route path="/" exact component={TopDestinations} />
//         <Route path="/suggestions" component={Suggestions} />
//         <Route path="/categories" component={Categories} />
//       </div>
//     </Router>
//   );
// }

// export default App;