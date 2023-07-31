import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Importe o hook useParams
import './detalheFilme.css'; // Importe o arquivo CSS criado

const DetalhesFilme = () => {
  const [filme, setFilme] = useState(null);
  const { id } = useParams(); // Use o hook useParams para obter o ID do filme

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=b66fa6d4&i=${id}`)
      .then((response) => {
        setFilme(response.data);
      })
      .catch((error) => {
        console.error('Erro ao obter detalhes do filme:', error);
      });
  }, [id]);

  if (!filme) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <div className="filme-card">
        {filme.Poster !== 'N/A' ? (
          <img src={filme.Poster} alt={filme.Title} />
        ) : (
          <div className="imagem-nao-disponivel">Imagem não disponível</div>
        )}
      </div>
      <div className="filme-detalhes">
        <h2>{filme.Title}</h2>
        <p><strong>Ano:</strong> {filme.Year}</p>
        <p><strong>Classificação:</strong> {filme.Rated}</p>
        <p><strong>Data de Lançamento:</strong> {filme.Released}</p>
        <p><strong>Duração:</strong> {filme.Runtime}</p>
        <p><strong>Gênero:</strong> {filme.Genre}</p>
        <p><strong>Diretor:</strong> {filme.Director}</p>
        <p><strong>Escritor:</strong> {filme.Writer}</p>
        <p><strong>Atores:</strong> {filme.Actors}</p>
        <p><strong>Enredo:</strong> {filme.Plot}</p>
        <p><strong>Idioma:</strong> {filme.Language}</p>
        <p><strong>País:</strong> {filme.Country}</p>
        <p><strong>Prêmios:</strong> {filme.Awards}</p>
        <p><strong>Nota do IMDb:</strong> {filme.imdbRating}</p>
      </div>
    </div>
  );
};

export default DetalhesFilme;
