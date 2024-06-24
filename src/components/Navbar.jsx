import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className='header'>
        <div className='section1'>
          <h3 id='findDesigner'>Find designers <span>&#9660;</span></h3>
          <h3>Inspiration</h3>
          <h3 id='Courses'>Courses <span>&#9660;</span></h3>
          <h3>Jobs</h3>
          <h3>Go pro</h3>

        </div>
        <div className='section2'>
          <h3>Dribbble</h3>

        </div>
        <div className='section3'> 
        {/* <i class="fa fa-search"></i> */}
        <input type="text" placeholder="Search..."/>
          <div>A</div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
