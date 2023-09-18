import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
const Navigation = () =>{
  
const [toggle, setToggle] = useState(false)
  
    const handleItemClick = (label) => {
        // Toggle the isSticky state when an item is clicked
        //dispatch(toggleStickyScroll(!isSticky));
        console.log('Clicked:', label);
      };

    return (
        <>
        {
          toggle ?  <AiOutlineClose onClick={()=> setToggle(!toggle)} className='md:hidden block fixed right-3 top-7 '/>
          : 
          <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='md:hidden block fixed right-3 top-7 '/>
         

        }
        
       
        <div
        className="navbar">
        <ul className="uppercase hidden md:flex flex-row space-x-5">
          <li onClick={() => handleItemClick('The Edit')}>The Edit</li>
          <li onClick={() => handleItemClick('New Arrivals')}>New Arrivals</li>
          <li onClick={() => handleItemClick('Designers')}>Designers</li>
          <li onClick={() => handleItemClick('Clothing')}>Clothing</li>
          <li onClick={() => handleItemClick('Shoes')}>Shoes</li>
          <li onClick={() => handleItemClick('Bags')}>Accessories</li>
          <li onClick={() => handleItemClick('Jwellery')}>Jwellery</li>
          <li onClick={() => handleItemClick('Beauty')}>Beauty</li>
          <li onClick={() => handleItemClick('Home')}>Home</li>
        </ul>
        
      </div>

      {/* responsive menu*/}
      <div
        className="navbar">
        <ul className={`duration-500 uppercase md:hidden w-full fixed left-0 bg-white 
        ${toggle ? 'left-[0] ' : 'left-[-100%] '}
        
        
        `} >
          <li className='p-2' onClick={() => handleItemClick('The Edit')}>The Edit</li>
          <li className='p-2' onClick={() => handleItemClick('New Arrivals')}>New Arrivals</li>
          <li className='p-2' onClick={() => handleItemClick('Designers')}>Designers</li>
          <li className='p-2' onClick={() => handleItemClick('Clothing')}>Clothing</li>
          <li className='p-2' onClick={() => handleItemClick('Shoes')}>Shoes</li>
          <li className='p-2' onClick={() => handleItemClick('Bags')}>Accessories</li>
          <li className='p-2' onClick={() => handleItemClick('Jwellery')}>Jwellery</li>
          <li className='p-2' onClick={() => handleItemClick('Beauty')}>Beauty</li>
          <li className='p-2' onClick={() => handleItemClick('Home')}>Home</li>
        </ul>
        
      </div>
        {/* <div ref={lastImageRef}>
          This is your last image 
          <ImageBlock />
        </div>*/}
        </>
      
      
    );
}
export default Navigation