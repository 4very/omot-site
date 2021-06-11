import React from 'react';
import { Link } from 'react-router-dom';

const items = ['a', 'b', 'c'];

const TopNavbar = () => {
  return (
    <div className="w-full h-20 bg-background flex flex-row-reverse">
      {items.map((item) => {
        {
          console.log(item);
        }
        return (
          <a href="/" key={item}>
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default TopNavbar;
