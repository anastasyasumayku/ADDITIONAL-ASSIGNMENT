import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () =>{
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div className="container px-4">
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    All TYPES
  </button>
  <ul class="dropdown-menu ms-auto" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" to="/bantal">Type of Pillow</Link></li>
    <li><Link class="dropdown-item" to="/kayu">Type of Wood</Link></li>
    
  </ul>
</div>
<ul class="nav justify-content-center">
<button type="button" class="btn btn-danger">
  <li class="nav-item">
    <Link class="nav-link active " aria-current="page" to="/">Home</Link>
  </li>
  </button>
</ul>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Price
  </button>
  <ul class="dropdown-menu ms-auto" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" to="/less">Less 50.000</Link></li>
    <li><Link class="dropdown-item" to="/more">More 50.000</Link></li>
    
  </ul>
        </div>
        </div>
        </nav>);
 
}

export default Navigation;