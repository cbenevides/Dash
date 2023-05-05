import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css';

function ComponentSkeleton() {
  return (
   
    <div className="skeleton-container">
      <ul>
        {Array(1)
          .fill()
          .map((item, index) => (
            <li key={index}>
              <div className="item-group">
                <div className="skeleton-item">
                  <Skeleton height={20} width={`100%`} />
                </div>

                <div className="skeleton-item">
                  <Skeleton height={20} width={`100%`} />
                </div>
              </div>

              <div className="item-group">
                <div className="skeleton-item">
                  <Skeleton height={20} width={`100%`} />
                </div>

              </div>

            </li>
        ))}
      </ul>
    </div>
      );
}

export default ComponentSkeleton;
