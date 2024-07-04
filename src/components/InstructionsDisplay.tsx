import React from 'react';

interface InstructionsDisplayProps {
  imageUrl: string | null;
  instructions: string | null;
}

const InstructionsDisplay: React.FC<InstructionsDisplayProps> = ({
  imageUrl,
  instructions
}) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Captured laundry care label" />}
      {instructions && (
        <div>
          <h2>Laundry Instructions:</h2>
          <p>{instructions}</p>
        </div>
      )}
    </div>
  );
};

export default InstructionsDisplay;
