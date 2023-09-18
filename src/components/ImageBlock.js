import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStickyScroll } from '../redux/action';
import {Carousel} from 'react-responsive-carousel'
import {AiOutlineHeart} from 'react-icons/ai'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import imgs1 from '../images/imgs1.png';
import imgs2 from '../images/imgs2.png';
import Header from './Header';

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
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Tab 1')
  const [activeSize, setActiveSize] = useState(localStorage.getItem('selectedSize') || null);


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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const handleSizeClick = (size) => {
    setActiveSize(size);
    localStorage.setItem('selectedSize', size);
  };

  // Content for each tab
  const tabContents = {
    'Tab 1': "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel. See the EDITOR’S NOTE Learn about the DESIGNER",
    'Tab 2': 'Content for Tab 2',
    'Tab 3': 'Content for Tab 3',
    'Tab 4': 'Content for Tab 4',
  };

  return (
    <div className={`relative grid md:grid-cols-4 max-w [1240px] my-20 mx-auto ${isSticky ? 'sticky' : ''}`}>
      <div className="col-span-1">
        <div className='hidden md:block md:fixed left-3'>
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
          <div className='tab max-w-[240px]  mx-auto flex text-sm'>
            {tabContents[activeTab]}
          </div>
        </div>
      </div>

      <div className="relative col-span-2">
        <div className="fixed right-[32.5rem] z-50 hidden md:block">
          <span role="img" aria-label="Heart Icon">
          <AiOutlineHeart/>
          </span>
        </div>

        {/*mobile resonsive*/}

        <div className="fixed right-[1.5rem] z-50 md:hidden">
          <span role="img" aria-label="Heart Icon">
          <AiOutlineHeart/>
          </span>
        </div>

        {/* Images */}
        <div className="hidden md:block">
          <img src={img1} alt="Image 1" />
          <div className='flex'>
          <img src={img2} alt="Image 2" />
          <img src={img3} alt="Image 3" />
          </div>          
          
          <img id="lastImage" src={img4} alt="Last Image" />
        </div>
        
        <div className="md:hidden">
          <Carousel
            showThumbs={false} // Hide the default thumbnail navigation
            dynamicHeight={true}
            showStatus={false} // Show the status (current slide / total slides)
            showIndicators={true} // Show the indicators (dots) for navigation
            className="w-full"
            thumbClass="border-2 border-gray-500"
          >
            <div>
              <img src={img1} alt="Image 1" className="w-full" />
            </div>
            <div>
              <img src={img2} alt="Image 2" className="w-full" />
            </div>
            <div>
              <img src={img3} alt="Image 3" className="w-full" />
            </div>
            <div>
              <img id="lastImage" src={img4} alt="Last Image" className="w-full" />
            </div>
          </Carousel>
        </div>

      </div>

      <div className="right-0 col-span-1 px-5">
        <div className='md:fixed right-3'>
          <h1 className='text-3xl my-1'> JONATHAN SIMKHAI</h1>
          <div className='description my-1'>
            <p className='text-sm my-1'> Lurex Linen Viscose Jacket in Conchiglia </p>
            <strong className='font-bold text-sm my-1'> $225</strong>
          </div>
          <div className='size-image my-2'>
            <p className='text-sm uppercase'> <span className='font-bold'>Color</span> <span className='colorupdate'> Conchiglia </span></p>
            <div className='image flex flex-row w-[280px]  mx-auto my-4'>
              <div className='max-w-[50px]'>
                <img src={imgs1} alt="Image 1" className='max-w-full' />
              </div>

              <div className='max-w-[50px]'>
                <img src={imgs2} alt="Image 3" className='max-w-full' />
              </div>
            </div>

            <div className='sizelabel flex justify-between my-0'>
              <p className='text-sm uppercase'> <span className='font-bold'>Sizes </span> <span className='sizeupdate'> {activeSize || 'Select a size'} </span> </p>
              <p className='left-10 text-sm uppercase'> Size Guide </p>
            </div>
            <div className='flex justify-start flex-wrap available-size '>
              <div
                className={`xs rounded-full py-1 px-4 border-solid border-2 gray w-[70px] text-center mr-1 my-2 ${activeSize === 'XS' ? 'bg-black text-white' : 'text-gray-700'}`}
                onClick={() => handleSizeClick('XS')}
              >
                XS
              </div>
              <div
                className={`s rounded-full py-1 px-4 border-solid border-2 gray w-[70px] text-center mx-2  my-2 ${activeSize === 'S' ? 'bg-black text-white' : 'text-gray-700'}`}
                onClick={() => handleSizeClick('S')}
              >
                S
              </div>
              <div
                className={`m rounded-full py-1 px-4 border-solid border-2 gray w-[70px] text-center mx-2 my-2 ${activeSize === 'M' ? 'bg-black text-white' : 'text-gray-700'}`}
                onClick={() => handleSizeClick('M')}
              >
                M
              </div>
              <div
                className={`l rounded-full py-1 px-4 border-solid border-2 gray w-[70px] text-center mr-1 my-2 ${activeSize === 'L' ? 'bg-black text-white' : 'text-gray-700'}`}
                onClick={() => handleSizeClick('L')}
              >
                L
              </div>
              <div
                className={`xxl rounded-full py-1 px-4 border-solid border-2 gray w-[70px] text-center mx-2 my-2 ${activeSize === 'XXL' ? 'bg-black text-white' : 'text-gray-700'}`}
                onClick={() => handleSizeClick('XXL')}
              >
                XXL
              </div>

            </div>
            <button className='xxl rounded-full py-1 px-4 border-solid border-2 gray w-full bg-black text-white'>Add To Bag</button>
          
          <p className='my-4 text-sm'>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
         <p className='my-4 text-sm'> Speak to a Personal Stylist CHAT NOW </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ImageBlock;
