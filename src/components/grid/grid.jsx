import Cell from '../cell/cell';
import './grid.css';

const Grid = ({ gridConfig }) => {
  const activateCell = i => {};

  return (
    <div className="wrapper">
      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridConfig[0].length}, 1fr)` }}>
        {gridConfig.flat(1).map((cell, i) => {
          return cell === 1 ? <Cell key={i} isActivated={false} onClick={() => activateCell(i)} /> : <div key={i} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
