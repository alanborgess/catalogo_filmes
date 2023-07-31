import React, { useState } from 'react';
import './contato.css';

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [generoFilmes, setGeneroFilmes] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Informações de contato enviadas:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);
    console.log('Gênero de Filmes:', generoFilmes);
    setNome('');
    setEmail('');
    setTelefone('');
    setGeneroFilmes('');
  };

  return (
    <div>
      <h2 className='contato-titulo'>Entre em Contato</h2>
      <p className='contato-titulo'>Preencha as informações abaixo para receber novidades:</p>
      <form className="formulario-contato" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Gênero de Filmes Favorito:
          <select
            value={generoFilmes}
            onChange={(event) => setGeneroFilmes(event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Ação">Ação</option>
            <option value="Comédia">Comédia</option>
            <option value="Drama">Drama</option>
            <option value="Ficção Científica">Ficção Científica</option>
          </select>
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Contato;
