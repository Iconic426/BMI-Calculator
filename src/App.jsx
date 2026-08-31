import { useState } from 'react';
import BMIForm from './components/BMIForm';
import ResultCard from './components/ResultCard';
import HistoryList from './components/HistoryList';

function App() {
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [history, setHistory] = useState([]);
  const [error, setError] = useState('');

  const calculateBMI = (height, weight) => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      setError('Please enter valid positive numbers');
      setBmi(null);
      return;
    }
    setError('');
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);
    setBmi(result);

    let cat = '';
    if (result < 18.5) cat = 'Underweight';
    else if (result < 25) cat = 'Normal';
    else if (result < 30) cat = 'Overweight';
    else cat = 'Obese';
    setCategory(cat);

    setHistory([...history, { bmi: result.toFixed(1), category: cat, id: Date.now() }]);
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
        <BMIForm onCalculate={calculateBMI} error={error} />
        {bmi && <ResultCard bmi={bmi} category={category} />}
        <HistoryList history={history} onClear={clearHistory} />
      </div>
    </div>
  );
}

export default App;