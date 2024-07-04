async function getLaundryInstructions(imageDataUrl: string): Promise<string> {
  // Replace this URL with your actual LLM API endpoint
  const apiUrl = 'https://your-llm-api-endpoint.com/analyze';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: imageDataUrl })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data: { instructions: string } = await response.json();
    return data.instructions;
  } catch (error) {
    console.error('Error getting laundry instructions:', error);
    return 'Error: Unable to get laundry instructions.';
  }
}

export { getLaundryInstructions };
