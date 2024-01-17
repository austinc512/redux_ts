import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PKGsList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchPKGs } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.PKGs);
  console.log({ data, error, loading });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPKGs(term);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error 
      && !loading 
      && data.map(element => {
        return <div key={element}>{element}</div>
      })
      
      }
    </div>
  );
};

export default PKGsList;
