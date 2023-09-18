import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStickyScroll } from '../redux/action';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import imgs1 from '../images/imgs1.png';
import imgs2 from '../images/imgs2.png';
import Header from './Header';
import { setActiveSize } from '../redux/action/sizeAction';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-2 px-4 text-sm ${isActive ? 'font-bold' : 'text-gray-700'} rounded-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const ImageBlock = () => {


  const isSticky = useSelector((state) => state.isSticky);
  const activeSize = useSelector((state) => state.size.activeSize);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Tab 1')
  


  const handleTabClick = (label) => {
    setActiveTab(label);
    // You can add logic here to change the content based on the selected tab.
  };

  useEffect(() => {
    const handleScroll = () => {
      const lastImage = document.getElementById('lastImage');
      if (lastImage) {
        const rect = lastImage.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
          // When the bottom of the last image is reached, release sticky scroll
          dispatch(toggleStickyScroll(true)); // Change to true to make header sticky
        } else {
          dispatch(toggleStickyScroll(false)); // Change to false to unstick header
        }
      }
    };
    if (activeSize) {
      setActiveSize(activeSize);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, activeSize]);

  const handleSizeClick = (size) => {
    dispatch(setActiveSize(size));
  };

  // Content for each tab
  const tabContents = {
    'Tab 1': "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel. See the EDITOR’S NOTE Learn about the DESIGNER",
    'Tab 2': 'Content for Tab 2',
    'Tab 3': 'Content for Tab 3',
    'Tab 4': 'Content for Tab 4',
  };

  return (
    <div className={`relative grid grid-cols-4 max-w [1240px] my-20 mx-auto ${isSticky ? 'sticky' : ''}`}>
      <div className="col-span-1">
        <div className='fixed left-3'>
          <div className="flex flex-row ">
            <Tab
              label="Details"
              isActive={activeTab === 'Tab 1'}
              onClick={() => handleTabClick('Tab 1')}
            />
            <Tab
              label="Delivery"
              isActive={activeTab === 'Tab 2'}
              onClick={() => handleTabClick('Tab 2')}
            />
            <Tab
              label="Fit"
              isActive={activeTab === 'Tab 3'}
              onClick={() => handleTabClick('Tab 3')}
            />
            <Tab
              label="Share"
              isActive={activeTab === 'Tab 4'}
              onClick={() => handleTabClick('Tab 4')}
            />
          </div>
          <div className='tab max-w-[240px]  mx-auto flex'>
            {tabContents[activeTab]}
          </div>
        </div>
      </div>

      <div className="relative col-span-2">
        <div className="fixed ">
          <span role="img" aria-label="Heart Icon">
            ❤️
          </span>
        </div>
        {/* Images */}
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
        <img id="lastImage" src={img4} alt="Last Image" />


      </div>

      <div className="right-0 col-span-1">
        <div className='fixed right-3 w-[280px]  mx-auto'>
          <h1 className='text-3xl'> JONATHAN SIMKHAI</h1>
          <div className='description'>
            <p> Lurex Linen Viscose Jacket in Conchiglia </p>
            <strong className='font-bold'> $225</strong>
          </div>
          <div className='size-image'>
            <p> <span className='font-bold'>Color</span> <span className='colorupdate'> Conchiglia </span></p>
            <div className='image flex flex-row w-[240px]  mx-auto'>
              <div className='max-w-[50px]'>
                <img src={imgs1} alt="Image 1" className='max-w-full' />
              </div>

              <div className='max-w-[50px]'>
                <img src={imgs2} alt="Image 3" className='max-w-full' />
              </div>
            </div>

            <div className='sizelabel flex justify-between'>
              <p> <span className='font-bold'>Sizes </span> <span className='sizeupdate'> {activeSize || 'Select a size'} </span> </p>
              <p className='left-10'> Size Guide </p>
            </div>
            <div className='flex justify-start flex-wrap available-size '>
              <div
                className={`xs rounded-full py-1 px-4 border-solid border-2 gray w-[70px] mx-auto text-center mx-2 my-2 ${activeSize === 'XS' ? 'active' : ''}`}
                onClick={() => handleSizeClick('XS')}
              >
                XS
              </div>
              <div
                className={`s rounded-full py-1 px-4 border-solid border-2 gray w-[70px] mx-auto text-center mx-2  my-2 ${activeSize === 'S' ? 'active' : ''}`}
                onClick={() => handleSizeClick('S')}
              >
                S
              </div>
              <div
                className={`m rounded-full py-1 px-4 border-solid border-2 gray w-[70px] mx-auto text-center mx-2 my-2 ${activeSize === 'M' ? 'active' : ''}`}
                onClick={() => handleSizeClick('M')}
              >
                M
              </div>
              <div
                className={`l rounded-full py-1 px-4 border-solid border-2 gray w-[70px] mx-auto text-center mx-2 my-2 ${activeSize === 'L' ? 'active' : ''}`}
                onClick={() => handleSizeClick('L')}
              >
                L
              </div>
              <div
                className={`xxl rounded-full py-1 px-4 border-solid border-2 gray w-[70px] mx-auto text-center mx-2 my-2 ${activeSize === 'XXL' ? 'active' : ''}`}
                onClick={() => handleSizeClick('XXL')}
              >
                XXL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ImageBlock;
