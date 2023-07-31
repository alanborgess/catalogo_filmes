import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importe o componente Link
import './home.css';

const Home = () => {
  const [outrosFilmes, setOutrosFilmes] = useState([]);

  useEffect(() => {
    const apiKey = 'b66fa6d4'; 

    // Defina as URLs para buscar os filmes em diferentes páginas
    const urlOutrosPage1 = `http://www.omdbapi.com/?apikey=${apiKey}&s=ice&page=1`;
    const urlOutrosPage2 = `http://www.omdbapi.com/?apikey=${apiKey}&s=marvel&page=2`;
    const urlOutrosPage3 = `http://www.omdbapi.com/?apikey=${apiKey}&s=money&page=3`;
    const urlOutrosPage4 = `http://www.omdbapi.com/?apikey=${apiKey}&s=real&page=4`;

    const requestPage1 = axios.get(urlOutrosPage1);
    const requestPage2 = axios.get(urlOutrosPage2);
    const requestPage3 = axios.get(urlOutrosPage3);
    const requestPage4 = axios.get(urlOutrosPage4);

    axios.all([requestPage1, requestPage2, requestPage3, requestPage4])
      .then(axios.spread((responsePage1, responsePage2, responsePage3, responsePage4) => {
        const outrosFilmesDataPage1 = responsePage1.data.Search || [];
        const outrosFilmesDataPage2 = responsePage2.data.Search || [];
        const outrosFilmesDataPage3 = responsePage3.data.Search || [];
        const outrosFilmesDataPage4 = responsePage4.data.Search || [];
        const todosOsFilmes = outrosFilmesDataPage1.concat(
          outrosFilmesDataPage2,
          outrosFilmesDataPage3,
          outrosFilmesDataPage4
        );
        setOutrosFilmes(todosOsFilmes);
      }))
      .catch((error) => {
        console.error('Erro ao buscar outros filmes:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='titulo-pagina'>Bem-vindo ao Catálogo de Filmes</h2>

      <h4>Filmes</h4>
      <div className="filme-grid">
        {outrosFilmes.length > 0 ? (
          outrosFilmes.map((filme) => (
            <div key={filme.imdbID} className="filme-item">
              {/* Utilize o componente Link para redirecionar para a página de detalhes */}
              <Link to={`/filmes/${filme.imdbID}`}>
                {filme.Poster !== 'N/A' ? (
                  <img src={filme.Poster} alt={filme.Title} />
                ) : (
                  <div className="imagem-nao-disponivel">Imagem não disponível</div>
                )}
              </Link>
              <p>{filme.Title}</p>
            </div>
          ))
        ) : (
          <p>Carregando outros filmes...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
