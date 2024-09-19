import './App.css';
import Grid from './components/grid/grid';

function App() {
  const gridConfig = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Grid Lights Sequence</h3>

      <Grid gridConfig={gridConfig} />
    </>
  );
}

export default App;
