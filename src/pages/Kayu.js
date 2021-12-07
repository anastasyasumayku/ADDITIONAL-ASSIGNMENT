import React from 'react';
import Navigation from '../components/Navigation';

import Footer from '../components/Footer';


import ContentItems from '../components/ContentItems';
import ContentItems11 from '../components/ContentItems11';
import ContentItems3 from '../components/ContentItems3';

const Kayu = () => {
    return(
        <section className="py-5">
    <div className="row gx-4 gx-lg-5 my-3">
        <>
        <Navigation />
        <ContentItems />
        <ContentItems11 />
        <ContentItems3 />
        <Footer />
        </>
        </div>
       </section>
    )
    
}

export default Kayu;