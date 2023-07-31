import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './pesquisa.css';

const BuscarFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  const [queryBusca, setQueryBusca] = useState('');

  const handleMudancaBusca = (event) => {
    setQueryBusca(event.target.value);
  };

  useEffect(() => {
    if (queryBusca.trim() !== '') {
      axios.get(`http://www.omdbapi.com/?apikey=b66fa6d4&s=${queryBusca}`)
        .then((response) => {
          setFilmes(response.data.Search || []);
        })
        .catch((error) => {
          console.error('Erro ao buscar filmes:', error);
        });
    }
  }, [queryBusca]);

  const defaultImage = 'https://via.placeholder.com/150';

  return (
    <div>
      <h2 className="campo-pesquisa">Buscar Filmes
      <input
        type="text"
        value={queryBusca}
        onChange={handleMudancaBusca}
        placeholder="Digite o título do filme"
      />
      </h2>
      <ul className="filme-grid">
        {filmes.map((filme) => (
          <li key={filme.imdbID}>
            <Link to={`/filmes/${filme.imdbID}`}>
              <img
                src={filme.Poster === 'N/A' ? defaultImage : filme.Poster}
                alt={filme.Title}
                width="150"
                height="225"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscarFilmes;
