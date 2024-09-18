const Grid = ({ gridConfig }) => {
  return (
    <div>
      <div>
        {gridConfig.flat(1).map((cell, i) => {
          return cell === 1 ? <div key={i}>{cell}</div> : <div key={i} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
