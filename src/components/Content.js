import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentItems from './ContentItems';
import ContentItems1 from './ContentItems1';
import ContentItems11 from './ContentItems11';
import ContentItems3 from './ContentItems3';
import ContentItems4 from './ContentItems4';
import ContentItems5 from './ContentItems5';
const Content = () => {
    
        
        
    
    return(
    <section className="py-5">
    <div className="row gx-4 gx-lg-5 my-3">
    
    <ContentItems />
    <ContentItems1 />
    <ContentItems11 />
    <ContentItems3 />
    <ContentItems4 />
    <ContentItems5 />
    
    
    
    
    </div>
    
   
</section>);
}

export default Content;