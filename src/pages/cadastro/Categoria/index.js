import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';

function CadastroCategoria() {
    return (
        <Template>
            <h1>Cadastro de categoria</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to='/'>
                Voltar pra home
            </Link>
        </Template>
    );
}

export default CadastroCategoria;