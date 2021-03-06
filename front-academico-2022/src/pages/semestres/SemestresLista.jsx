import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SemestreService from '../../services/academico/SemestreService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const SemestresLista = () => {

  const [semestres, setSemestres] = useState([]) 

  useEffect(() => {

    setSemestres(SemestreService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      SemestreService.delete(id)
      setSemestres(SemestreService.getAll())
    }
  }

  return (
    <div>
      <h1>Semestres</h1>

      <Link className='btn btn-info mb-3' to={'/semestres/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Data inicio</th>
            <th>Data fim</th>
          </tr>
        </thead>
        <tbody>
          {semestres.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/semestres/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.datainicio}</td>
              <td>{item.datafim}</td>
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default SemestresLista