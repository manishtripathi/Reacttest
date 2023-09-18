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

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div className={`fixed top-0 w-full px-5 py-5 bg-white ${isSticky ? 'block' : 'hidden'}`} style={{ zIndex: 999 }}>
      <div className="max-w-[1250px] md:flex flex-row justify-between items-center space-x-12">
        <Logo />
        <Navigation />
      </div>
     
    </div>
  );
};

export default Header;
