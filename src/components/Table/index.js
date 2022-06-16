import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TableWraper = styled.table`
    width: 100%;
    padding: 5px;
    margin: 15px 5px;
    text-align: center;
    color: black;
    th{
      background: #53585D;
      height: 35px;
      color: white;
    }
`;

const TableLine = styled.tr`
  border: solid 1px white;
  background: #E0E0E0;
  height: 25px;

  ${({ striped }) => striped && css`
          background: #A0A0A0;
      `
}
`;

function Table({
  cabecalho, elementos, hasEdit, hasDelete,
}) {
  return (
    <TableWraper>
      <thead>
        <tr>
          {cabecalho.map((elemento) => (
            <th>{elemento}</th>
          ))}
          {hasEdit
        && <th>Editar</th>}
          {hasDelete
        && <th>Deletar</th>}
        </tr>
      </thead>
      <tbody>
        {elementos.map((item, index) => (
          <TableLine
            key={`item${item.id}`}
            striped={index % 2 !== 0}
          >
            {Object.values(item).map((dado) => (
              <td>
                {dado}
              </td>
            ))}
            {hasEdit
        && <td>Editar</td>}
            {hasDelete
        && <td>Deletar</td>}
          </TableLine>
        ))}
      </tbody>
    </TableWraper>
  );
}

Table.defaultProps = {
  cabecalho: [],
  elementos: [],
  hasEdit: false,
  hasDelete: false,
};

Table.propTypes = {
  cabecalho: PropTypes.arrayOf(PropTypes.string),
  elementos: PropTypes.arrayOf(PropTypes.shape),
  hasEdit: PropTypes.bool,
  hasDelete: PropTypes.bool,
};

export default Table;
