import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Rsvp from "./components/rsvp/Rsvp";
import Details from "./components/details/Details";
import Faq from "./components/faq/Faq";
import Photos from "./components/photos/Photos";

const App = () => {
    return (
        <div className="canvas">
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/rsvp" element={<Rsvp/>}/>
                <Route path="/schedule" element={<Details/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/photos" element={<Photos/>}/>
            </Routes>
        </div>
    )
}

export default App;