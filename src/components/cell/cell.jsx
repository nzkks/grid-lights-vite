import './cell.css';

const Cell = ({ isActivated, onClick }) => {
  return <button type="button" onClick={onClick} className={isActivated ? 'cell cellActivated' : 'cell'} />;
};

export default Cell;
