import UserProfileContainer from "./with-pattern/container/profile/UserProfileContainer";
import './App.css';

function App() {
  return (
    <div>
      <UserProfileContainer userId={1} />
    </div>
  );
}

export default App;
