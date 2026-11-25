// import UserProfile from "./messy-way/components/UserProfile";

import "./App.css";
import UserProfileContainer from "./messy-way/components/UserProfile";
function App() {
  return (
    <div>
      <UserProfileContainer userId={1} />
    </div>
  );
}

export default App;
