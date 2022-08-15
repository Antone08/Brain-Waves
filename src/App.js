import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
// import comments from './Comments';
import { useUserContext } from "./context/userContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Signin,
  Footer,
  Home,
  Beta,
  Alpha,
  Theta,
  Delta,
  Summary,
  // Posts,
  // Post,
  Signup,
} from "./components";
// import Signup from "./components/Signup";






function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={ loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </> } /> 
      <Route path="/" element={<Signin />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/beta" element={<Beta />} />
      <Route path="/alpha" element={<Alpha />} />
      <Route path="/theta" element={<Theta />} />
      <Route path="/delta" element={<Delta />} />
      <Route path="/summary" element={<Summary/>}>
        {/* <Route path="" element={<Posts />} /> */}
        {/* <Route path=":postSlug" element={<Post />} /> */}
      </Route>
    </Routes>
    <Footer />
  </Router>
  

      {error && <p className="error">{error}</p>}
      {/* {loading ? <h2>Loading...</h2> : <> {user ? <></> : <Auth />} </>} */}
    </div>
  );
}

export default App;