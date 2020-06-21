import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-main-blue">
      <Header />
        <div className="flex">
          <div className="w-auto">side left</div>
          <div className="w-11/12">
            <main className="flex flex-col flex-1 px-8 py-8 md:p-8 w-full">
              {children}
            </main>
          </div>
          <div className="w-auto">side right</div>
        </div>
      <Footer/>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
