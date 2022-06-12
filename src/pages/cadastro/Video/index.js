import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';

function CadastroVideo() {
  return (
    <Template>
      <h1>Cadastro de vídeos</h1>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </Template>
  );
}

export default CadastroVideo;
