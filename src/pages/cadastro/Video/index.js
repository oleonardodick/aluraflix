import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=LiUeEK20oxQ',
    categoria: 'Filmes',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <Template>
      <h1>Cadastro de vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === values.categoria,
        );

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            navigate('/cadastro/video');
          });
      }}
      >
        <FormField
          label="Título"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </Template>
  );
}

export default CadastroVideo;
