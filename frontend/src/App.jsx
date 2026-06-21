import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AgentPanel from "./components/AgentPanel";
import TaskBoard from "./components/TaskBoard";
import ActivityFeed from "./components/ActivityFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Dashboard />
      <AgentPanel />
      <TaskBoard />
      <ActivityFeed />

      <Footer />
    </>
  );
}

export default App;