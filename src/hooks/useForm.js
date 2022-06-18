import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function handleSetValues(chave, valor) {
    // chave = nome, descricao, cor
    setValues({
      ...values,
      [chave]: valor, // nome:'valor'
    });
  }

  const handleChange = (info) => {
    const { name, value } = info.target;
    handleSetValues(
      name,
      value,
    );
  };

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
