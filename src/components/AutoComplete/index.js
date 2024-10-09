import { useEffect, useState } from "react";
import { getAnimals } from "../../services/getAnimals";

const AutoComplete = () => {
  const [results, setResults] = useState([]);
  const [inputVal, setInputVal] = useState('');
  useEffect(
    () => {
      const animalsData = async () => {
        const response = await getAnimals(inputVal);
        setResults(response);
      }
      animalsData();
    },
    [inputVal]
  );
  const updateValue = (e) => {
    setInputVal(e.target.value);
  };
  const debounceFunction = (func, delay) => {
    let apiCall;
    return (...args) => {
      clearTimeout(apiCall);
      apiCall = setTimeout(
        () => { func.apply(this, args) }, delay);
    };
  };
  return (
    <div>
      <input type="text" value={inputVal} onChange={(e) => debounceFunction(updateValue(e))} />
      <div>
        {results.map((animal) => (
          <div key={animal}>
            {animal}
          </div>
        ))}
      </div>
    </div>
  )
};

export default AutoComplete;