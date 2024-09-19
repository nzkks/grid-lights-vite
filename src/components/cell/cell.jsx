import './cell.css';

const Cell = ({ isActivated, isDisabled, onClick, ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={isActivated ? 'cell cellActivated' : 'cell'}
      aria-label={ariaLabel}
    />
  );
};

export default Cell;
