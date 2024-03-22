import React from 'react';
import MainComponent from './components/MainComponent.mdx';
// import Header from "./components/Header"
// import { MDXProvider } from '@mdx-js/react';
import Footer from './components/Footer';

const MyReactComponent = () => {
  return (
    <>
      {/* <div style={{ backgroundColor: "#484747" }}> */}
      <div style={{ backgroundColor: "#0d1117" }}>
        <div className='container' style={{}}>
          {/* <center> */}
          {/* <MDXProvider> */}
          <MainComponent />
          {/* </MDXProvider> */}
          {/* </center> */}
        </div>
        <div style={{
          fontSize: "20px",
          color: "#fff",
          textAlign: "center",
          padding: "10px",
          bottom: "10px",
          backgroundColor: "#333",
          zIndex: "9999",
          margin: "auto",
          left: "0",
          right: "0"
        }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MyReactComponent;
