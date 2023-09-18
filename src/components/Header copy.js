import Logo from "./Logo";
import { useSelector, useDispatch } from 'react-redux';
import Navigation from "./Topnavigation";
import { useEffect, useRef } from "react";

import { toggleStickyScroll } from "../redux/action";



const Header = () => {
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
    return (
        <>
        <div className={
            `fixed top-0 w-full bg-white ${
            isSticky ? 'block' : 'hidden'}`
        }
      style={{ zIndex: 999 }}>
        <div className="max-w-[1240px]  mx-auto flex flex-row justify-items-start space-x-12">
            <Logo/>
            <Navigation/>

        </div>
            
        </div>
        
        </>
    )
}
export default Header