import './App.css';

function App() {
  const gridConfig = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Grid Lights</h3>

      <div>
        {gridConfig.flat(1).map((cell, i) => {
          return cell === 1 ? <div key={i}>{cell}</div> : <div key={i} />;
        })}
      </div>
    </>
  );
}

export default App;
