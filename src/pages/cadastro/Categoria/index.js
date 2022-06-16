import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

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

  async function postCategory(category) {
    const URL = 'http://localhost:8080/categorias';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    };
    const response = await fetch(URL, requestOptions);
    const data = await response.json();
    setCategorias([
      ...categorias,
      data,
    ]);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <Template>
      <h1>
        Cadastro de categoria:
        {' '}
        {categoria.nome}
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault();
        postCategory(categoria);
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

      {/* <table>
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
      </table> */}

      <Table
        cabecalho={['ID', 'Nome', 'Descrição', 'Cor']}
        elementos={categorias}
        hasEdit
        hasDelete
      />

      <Link to="/">
        Voltar pra home
      </Link>
    </Template>
  );
}

export default CadastroCategoria;
