import React from 'react';

interface InstructionsDisplayProps {
  instructions: string | null;
}

const InstructionsDisplay: React.FC<InstructionsDisplayProps> = ({
  instructions
}) => {
  return (
    <div>
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
