import './App.css';
import ColorFormats from './components/ColorFormats';
import ContrastChecker from './components/ContrastChecker';
import DynamicTheme from './components/DynamicTheme';
import GradientGenerator from './components/GradientGenerator';
import Heatmap from './components/Heatmap';

function App() {
  return (
    <div>
      <DynamicTheme />
      <GradientGenerator/>
      <ContrastChecker/>
      <Heatmap/>
      <ColorFormats/>
    </div>
  );
}

export default App;
