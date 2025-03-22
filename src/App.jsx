import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import VideoCard from "./components/VideoCard"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-start gap-2">
        <Sidebar></Sidebar>
        <Feed></Feed>
      </div>
    </>
  );
}

export default App