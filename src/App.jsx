import './App.css';
import BlendColors from './components/BlendColors';
import ColorFormats from './components/ColorFormats';
import ColorManipulation from './components/ColorManipulation';
import ContrastChecker from './components/ContrastChecker';
import DynamicTheme from './components/DynamicTheme';
import GradientGenerator from './components/GradientGenerator';
import Heatmap from './components/Heatmap';
import LuminanceCalculator from './components/LuminanceCalculator';

function App() {
  return (
    <div>
      <DynamicTheme />
      <GradientGenerator/>
      <ContrastChecker/>
      <Heatmap/>
      <ColorFormats/>
      <BlendColors/>
      <ColorManipulation/>
      <LuminanceCalculator/>
    </div>
  );
}

export default App;
