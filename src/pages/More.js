import React from 'react';
import Navigation from '../components/Navigation';

import Footer from '../components/Footer';


import ContentItems4 from '../components/ContentItems4';
import ContentItems1 from '../components/ContentItems1';
import ContentItems3 from '../components/ContentItems3';

const Kayu = () => {
    return(
        <section className="py-5">
    <div className="row gx-4 gx-lg-5 my-3">
        <>
        <Navigation />
        <ContentItems1 />
        <ContentItems3 />
        <ContentItems4 />
        <Footer />
        </>
        </div>
       </section>
    )
    
}

export default Kayu;