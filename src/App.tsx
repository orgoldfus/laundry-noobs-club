import React, { useState } from 'react';
import ImageCapture from './components/ImageCapture';
import InstructionsDisplay from './components/InstructionsDisplay';
import { getLaundryInstructions } from './api';
import './App.css';

const App: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<string | null>(null);

  const handleImageCapture = async (imageDataUrl: string) => {
    setCapturedImage(imageDataUrl);
    const laundryInstructions = await getLaundryInstructions(imageDataUrl);
    setInstructions(laundryInstructions);
  };

  return (
    <div className="App">
      <h1>Laundry Care Label Analyzer</h1>
      <ImageCapture onCapture={handleImageCapture} />
      <InstructionsDisplay
        imageUrl={capturedImage}
        instructions={instructions}
      />
    </div>
  );
};

export default App;
