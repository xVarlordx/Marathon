import React from "react";

import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";


import bg1 from './assets/bg1.jpg'
import bg3 from './assets/bg3.jpg'

const App = (props) => {
    return(
        <>
            <Header
            title='This is title'
            descr='This is Description!'
            />
            <Layout
                title='First Tile'
                descr='First Descr'
                urlBg={bg1}
            />
            <Layout
                title='Second Title'
                descr='Second Decsr'
                colorBg='#e2e2e2'
            />
            <Layout
                title='Third Title'
                descr='Third Descr'
                urlBg={bg3}
            />
            <Footer />
        </>
    );
};

export default App;
