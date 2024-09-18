import { useState } from 'react';

import Cell from '../cell/cell';
import './grid.css';

const Grid = ({ gridConfig }) => {
  const [order, setOrder] = useState([]);

  const activateCells = i => {
    const newOrder = [...order, i];
    setOrder(newOrder);
  };

  return (
    <div className="wrapper">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridConfig[0].length}, 1fr)` }}>
        {gridConfig.flat(1).map((cell, i) => {
          return cell === 1 ? (
            <Cell key={i} isActivated={order.includes(i)} onClick={() => activateCells(i)} />
          ) : (
            <div key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
