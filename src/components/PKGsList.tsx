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
  // { name, description, npm, homepage, repository }
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
        return <div key={element.name} className='box'>
          <h2>{element.name}</h2>
          <h3>{element.description}</h3>
          <p>

           <a href={element.npm}>Link to NPM</a>
          <br />
            <a href={element.npm}>Homepage</a>
          <br />
            <a href={element.repository}>Repository</a>
          </p>
          <p></p>
          <p></p>
          <p></p>
          </div>
      })
      
      }
    </div>
  );
};

export default PKGsList;
