
import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import { useSelector } from 'react-redux';

const HeartIcon = () => {
  const isSticky = useSelector((state) => state.isSticky);

  return (
    <div
      className="fixed top-4 right-4"
    >
      <AiOutlineHeart/>
    </div>
  );
};

export default HeartIcon;
