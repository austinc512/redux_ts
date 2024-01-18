import React, { useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PKGsList: React.FC = () => {
  const [term, setTerm] = useState('');
  const [colorMap, setColorMap] = useState<{ [key: string]: string }>({});
  const { searchPKGs } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.PKGs);
  // console.log({ data, error, loading }); // keeping this for rendering testing

  const colors = ['#ff0066', '#0066ff', '#00b36b', '#e60000', '#e6e600', '#ff99ff', '#ff8c1a'];

  useEffect(() => {
    const newColorMap: { [key: string]: string } = {};
    data.forEach(element => {
      console.log(element.name)
      console.log(colorMap)
      if (!colorMap[element.name]) {
        newColorMap[element.name] = colors[Math.floor(Math.random() * colors.length)];
      } else {
        newColorMap[element.name] = colorMap[element.name];
      }
    });
    setColorMap(newColorMap);
  }, [data]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPKGs(term);
  };
  // { name, description, npm, homepage, repository }
  /*
    green: #00b36b
    blue: #0066ff
    pink: #ff0066
    red: #e60000
    yellow: #e6e600
    another pink: #ff99ff
  */

  const openLinkInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          placeholder='Search for a Package'
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button className='search-button'>Search</button>
      </form>
      {error && <h3 className='messages'>{error}</h3>}
      {loading && <h3 className='messages'>Loading...</h3>}
      {!error 
      && !loading 
      && data.map(element => {
        return <div key={element.name} className='box'
        style={{ 
          boxShadow: `0px 0px 20px ${colorMap[element.name] || 'defaultColor'}`
        }}>

          <h2>{element.name}</h2>
          <h3>{element.description}</h3>
          
          <p>
           <button className='link-button' onClick={() => {
            openLinkInNewTab(element.npm)
           }}>
              NPM
            </button>
            <button className='link-button' onClick={() => {
            openLinkInNewTab(element.homepage)
           }}>
              Homepage
            </button>
            <button className='link-button' onClick={() => {
            openLinkInNewTab(element.repository)
           }}>
              Repository
            </button>
          </p>
          </div>
      })
      
      }
    </div>
  );
};

export default PKGsList;
