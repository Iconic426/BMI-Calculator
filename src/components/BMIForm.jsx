import { useState } from 'react';

function BMIForm({ onCalculate, error }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload on form submit
    onCalculate(Number(height), Number(weight));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full border rounded p-2"
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full border rounded p-2"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
        Calculate
      </button>
    </form>
  );
}

export default BMIForm;