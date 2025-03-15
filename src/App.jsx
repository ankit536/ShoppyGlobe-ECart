import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Provider store={store}>
        <header className="w-full fixed top-0">
          <Header />
        </header>
        <main className="w-full pt-20 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20">
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default App;
