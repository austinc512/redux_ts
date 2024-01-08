import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/';

const PKGsList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(actionCreators.searchPKGs(term) as any);
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
    </div>
  );
};

export default PKGsList;
