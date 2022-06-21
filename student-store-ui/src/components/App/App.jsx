import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetails from "../ProductDetails/ProductDetails"
import NotFound from "../NotFound/NotFound"
import "./App.css"
import{BrowserRouter, Link, Route, Router,Routes} from "react-router-dom"
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
          
       
        <main>
          {/* YOUR CODE HERE! */
        
          <Routes>
          
           <Route path="/" element={<Home />}/>
           <Route path="/products/:productId" element={<ProductDetails />}/>
           <Route path="*" element={<NotFound />}/>
          </Routes>
          }
            
          <Navbar />
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
