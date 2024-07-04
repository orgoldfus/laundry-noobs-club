import React, { useState, ChangeEvent } from 'react';
// import ImageCapture from './components/ImageCapture';
import InstructionsDisplay from './components/InstructionsDisplay';
// import { getLaundryInstructions } from './api';
import imageCompression from 'browser-image-compression';

import './App.css';

const App: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<string | null>(null);

  async function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const imageFile = event?.target?.files?.[0];

    if (!imageFile) {
      return;
    }

    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(
        'compressedFile instanceof Blob',
        compressedFile instanceof Blob
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB

      const fileUrl = await imageCompression.getDataUrlFromFile(compressedFile);

      setCapturedImage(fileUrl);

      //   const laundryInstructions = await getLaundryInstructions(imageDataUrl);
      //   setInstructions(laundryInstructions);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>Laundry Care Label Analyzer</h1>
      <label className="cameraButton">
        Take a picture
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageUpload}
        />
      </label>
      <InstructionsDisplay instructions={instructions} />
      {capturedImage && (
        <img src={capturedImage} alt="Captured" style={{ maxWidth: '80vw' }} />
      )}
    </div>
  );
};

export default App;

// label.cameraButton {
//   display: inline-block;
//   margin: 1em 0;

//   /* Styles to make it look like a button */
//   padding: 0.5em;
//   border: 2px solid #666;
//   border-color: #EEE #CCC #CCC #EEE;
//   background-color: #DDD;
// }

// /* Look like a clicked/depressed button */
// label.cameraButton:active {
//   border-color: #CCC #EEE #EEE #CCC;
// }

// /* This is the part that actually hides the 'Choose file' text box for camera inputs */
// label.cameraButton input[accept*="camera"] {
//   display: none;
// }
