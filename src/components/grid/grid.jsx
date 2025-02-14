import { useState } from 'react';

import Cell from '../cell/cell';
import './grid.css';

const Grid = ({ gridConfig }) => {
  const [order, setOrder] = useState([]);
  const [isDeactivated, setIsDeactivated] = useState(false);

  const deactivateCells = () => {
    setIsDeactivated(true);

    const timer = setInterval(() => {
      setOrder(origOrder => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivated(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = i => {
    const newOrder = [...order, i];
    setOrder(newOrder);

    // filter out empty cells and when all the cells have been activated, deactivate them in reverse order
    if (newOrder.length === gridConfig.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <div className="wrapper">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridConfig[0].length}, 1fr)` }}>
        {gridConfig.flat(1).map((cell, i) => {
          return cell === 1 ? (
            <Cell
              key={i}
              isActivated={order.includes(i)}
              isDisabled={order.includes(i) || isDeactivated}
              onClick={() => activateCells(i)}
              ariaLabel={`cell ${i + 1}`}
            />
          ) : (
            <div key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
