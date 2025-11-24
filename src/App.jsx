import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    budget: "",
    type: "",
    duration: "",
    moods: [],
  });

  console.log("Current filters:", filters);

  const toggleMood = (mood) => {
  if (filters.moods.includes(mood)) {
    // Remove mood
    const newMoods = filters.moods.filter(m => m !== mood);
    setFilters({ ...filters, moods: newMoods });
  } else {
    // Add mood
    const newMoods = [...filters.moods, mood];
    setFilters({ ...filters, moods: newMoods });
  }
};

  return (
    <div>
      <h1>WanderMatch</h1>
      <p>Find your perfect weekend escape</p>

      <div>
        <label>Budget:</label>
        <select
          value={filters.budget}
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
        >
          <option value="">Any Budget</option>
          <option value="low">Low (£50-150)</option>
          <option value="medium">Medium (£150-350)</option>
          <option value="high">High (£350+)</option>
        </select>
      </div>
      <div>
        <label>Trip type: </label>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="">Any Type</option>
          <option value="nature"> Nature</option>
          <option value="city">City</option>
          <option value="adventure">Adventure</option>
          <option value="beach">Beach</option>
          <option value="relaxation">Relaxation</option>
        </select>
      </div>
       <div>
        <label>Duration: </label>
        <select
          value={filters.duration}
          onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
        >
          <option value="">Any Duration</option>
          <option value="day"> Day Trip</option>
          <option value="weekend">Weekend</option>
          <option value="week">Week</option>
        
        </select>
      </div>

      <div>
  <label>Mood (select multiple):</label>
  <div>
    <button onClick={() => toggleMood('peaceful')}>
      {filters.moods.includes('peaceful') ? '✓ ' : ''}peaceful
    </button>
    <button onClick={() => toggleMood('active')}>
      {filters.moods.includes('active') ? '✓ ' : ''}active
    </button>
    <button onClick={() => toggleMood('cultural')}>
      {filters.moods.includes('cultural') ? '✓ ' : ''}cultural
    </button>
    <button onClick={() => toggleMood('scenic')}>
      {filters.moods.includes('scenic') ? '✓ ' : ''}scenic
    </button>
    <button onClick={() => toggleMood('relaxing')}>
      {filters.moods.includes('relaxing') ? '✓ ' : ''}relaxing
    </button>
  </div>
</div>
    </div>
  );
}

export default App;
