import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
// import Table from '../../../components/Table';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    id: 0,
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

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
        {values.nome}
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault();
        postCategory(values);
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((item) => (
            <tr key={`item${item.id}`}>
              <td>{item.id}</td>
              <td>{item.titulo}</td>
              <td>{item.cor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Table
        cabecalho={['ID', 'Nome', 'Descrição', 'Cor']}
        elementos={categorias}
        hasEdit
        hasDelete
      /> */}

      <Link to="/">
        Voltar pra home
      </Link>
    </Template>
  );
}

export default CadastroCategoria;
