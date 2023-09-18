import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleStickyScroll } from "../redux/action";
import ImageBlock from "./ImageBlock";

const Navigation = () => {
  const isSticky = useSelector((state) => state.isSticky);
  const dispatch = useDispatch();
  const lastImageRef = useRef(null);

  const handleScroll = () => {
    if (lastImageRef.current) {
      const lastImageRect = lastImageRef.current.getBoundingClientRect();
      const isAtBottom = window.innerHeight >= lastImageRect.bottom;
      console.log('isAtBottom:', isAtBottom);

      if (isAtBottom) {
        // Toggle the isSticky state when reaching the bottom of the last image
        if (!isSticky) {
          dispatch(toggleStickyScroll(true));
        }
      } else {
        // Toggle off sticky when not at the bottom
        if (isSticky) {
          dispatch(toggleStickyScroll(false));
        }
      }
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  const handleItemClick = (label) => {
    // Toggle the isSticky state when an item is clicked
    dispatch(toggleStickyScroll(!isSticky));
    console.log('Clicked:', label);
  };

  return (
    <>
      <div className={`fixed top-4 right-4 ${isSticky ? 'hidden' : 'block'}`}
      style={{ zIndex: 999 }}>
        <ul className="uppercase flex flex-row space-x-5">
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
      <div ref={lastImageRef}>
          {/* This is your last image */}
          <ImageBlock />
        </div>
    </>
  );
};

export default Navigation;



