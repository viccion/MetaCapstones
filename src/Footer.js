import React from 'react';
import logo from './assets/Logo.svg';

function Footer() {
    return (
      <footer style={{ backgroundColor: '#000', color: '#fff', justifyContent: 'center', alignItems: 'center', paddingTop:'50px'}}>
        <div className='container'>
        <div className="row">
        <div className="col-sm" style={{textAlign:'left'}}>
          <img src={logo} alt="Logo" style={{ marginRight: '5rem',marginBottom: '6rem' }} />
          </div>
          <div className="col-sm" style={{textAlign:'left'}}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column',textAlign: 'left' }}>
          <h3>Links</h3>
  <li >
    <p>Home</p>
  </li>
  <li >
    <p>About</p>
  </li>
  <li >
    <p>Menu</p>
  </li>
  <li >
    <p>Reservation</p>
  </li>
  <li >
    <p>Order Online</p>
  </li>
  <li >
    <p>Contact</p>
  </li>
  <li >
    <p>Login</p>
  </li>
</ul>
</div>
        
<div className="col-sm" style={{textAlign:'left'}}>
       
          <h3>Contact</h3>
          <p>Email: info@example.com</p>
        
        </div>

         <div className="col-sm" style={{textAlign:'left'}}>
          <h3>Social Media</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
      </div>
      </footer>
    );
  }
  
  export default Footer;