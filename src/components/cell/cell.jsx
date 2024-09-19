import './cell.css';

const Cell = ({ isActivated, isDisabled, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={isActivated ? 'cell cellActivated' : 'cell'}
    />
  );
};

export default Cell;
