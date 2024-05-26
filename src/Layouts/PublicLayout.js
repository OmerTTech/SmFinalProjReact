import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const PublicLayout = (props) => {
    console.log(props);
    return (
        <div>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default PublicLayout;