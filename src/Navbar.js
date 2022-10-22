
import './Navbar.css';

function Navbar(props) {
    return (
      <div className="navbar">
         <div>
            <img className="ecartImage" src="https://as1.ftcdn.net/v2/jpg/03/03/05/78/1000_F_303057896_UOqpWEaLAEwRVFlh5OUq0RIB3EfHNnAi.jpg" alt="cartSymbol"></img>

         </div>
         <div>
            <span className='cartCount'>{props.count}</span>
         </div>
      </div>
    );
  }
  
  export default Navbar;