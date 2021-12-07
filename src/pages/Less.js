import React from 'react';
import Navigation from '../components/Navigation';

import Footer from '../components/Footer';


import ContentItems from '../components/ContentItems';
import ContentItems1 from '../components/ContentItems1';
import ContentItems5 from '../components/ContentItems5';

const Kayu = () => {
    return(
        <section className="py-5">
    <div className="row gx-4 gx-lg-5 my-3">
        <>
        <Navigation />
        <ContentItems />
        <ContentItems1 />
        <ContentItems5 />
        <Footer />
        </>
        </div>
       </section>
    )
    
}

export default Kayu;