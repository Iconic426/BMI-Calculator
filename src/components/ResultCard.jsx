function ResultCard({ bmi, category }) {
  const colors = {
    Underweight: 'bg-yellow-100 text-yellow-700',
    Normal: 'bg-green-100 text-green-700',
    Overweight: 'bg-orange-100 text-orange-700',
    Obese: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`mt-4 p-4 rounded-lg text-center ${colors[category]}`}>
      <p className="text-3xl font-bold">{bmi.toFixed(1)}</p>
      <p className="font-medium">{category}</p>
    </div>
  );
}

export default ResultCard;