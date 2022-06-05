import * as React from "react";
import Main from "./Main";
import AppBar from "./AppBar";
import Settings from "./Settings";
import NotFound from "./NotFound";
import { Routes, Route, Link } from "react-router-dom";
import "./Layout.css";
export default function Layout() {
  return (
    <div className="Layout">
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <div className="AppBar">
          <AppBar />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
