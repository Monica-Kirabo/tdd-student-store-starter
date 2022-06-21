import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import{BrowserRouter, Route} from "react-router-dom"
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<App/>}/>
      </Routes>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
