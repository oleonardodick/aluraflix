import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';

function CadastroCategoria() {
  const valoresIniciaisCategoria = {
    id: 0,
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const [categorias, setCategorias] = useState([]);

  const [categoria, setCategoria] = useState(valoresIniciaisCategoria);

  function handleSetCategoria(chave, valor) {
    // chave = nome, descricao, cor
    setCategoria({
      ...categoria,
      [chave]: valor, // nome:'valor'
    });
  }

  const handleChange = (info) => {
    const { name, value } = info.target;
    handleSetCategoria(
      name,
      value,
    );
  };

  return (
    <Template>
      <h1>
        Cadastro de categoria:
        {' '}
        {categoria.nome}
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault();
        categoria.id = categorias.length + 1;
        setCategorias([
          ...categorias,
          categoria,
        ]);
        setCategoria(valoresIniciaisCategoria);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={categoria.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={categoria.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={categoria.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Cor</th>
        </tr>
        {categorias.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.descricao}</td>
            <td>{item.cor}</td>
          </tr>
        ))}
      </table>

      <Link to="/">
        Voltar pra home
      </Link>
    </Template>
  );
}

export default CadastroCategoria;
