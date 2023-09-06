
import { range } from './utils';
import './index.css';

function Grid({ numRows, numCols }) {
  const rows = range(1, numRows + 1).map((row) => (
    <div key={row} className="row">
      {range(1, numCols + 1).map((col) => (
        <div key={col} className="cell"></div>
      ))}
    </div>
  ));

  return (
    <div className="grid">
      {rows}
    </div>
  );
}

export default Grid;
