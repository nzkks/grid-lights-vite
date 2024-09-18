import Cell from '../cell/cell';

const Grid = ({ gridConfig }) => {
  return (
    <div>
      <div>
        {gridConfig.flat(1).map((cell, i) => {
          return cell === 1 ? <Cell key={i} /> : <div key={i} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
