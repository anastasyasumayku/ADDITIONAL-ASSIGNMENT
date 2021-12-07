import React from 'react';

const Header = () => {
    return(<header className="bg-primary bg-gradient text-white">
    <div className="container px-4 text-center">
        <h1 className="fw-bolder">Welcome to Yasbi Meubel</h1>
        <p className="lead">Find Your Dream Furniture! </p>
        <a className="btn btn-lg btn-light" href="#about">About</a>
    </div>
</header>);
}

export default Header