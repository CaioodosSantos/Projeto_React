import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfessorService from '../../services/academico/ProfessorService'
import { FaPlus } from 'react-icons/fa'
import { BsPencilFill, BsTrash } from 'react-icons/bs'

const ProfessoresLista = () => {

  const [professores, setProfessores] = useState([])

  useEffect(() => {

    setProfessores(ProfessorService.getAll())

  }, [])

  function apagar(id) {
    if(window.confirm('Deseja realmente excluir o registro?')){
      ProfessorService.delete(id)
      setProfessores(ProfessorService.getAll())
    }
  }

  return (
    <div>
      <h1>Professores</h1>

      <Link className='btn btn-info mb-3' to={'/professores/create'}><FaPlus /> Novo</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
<<<<<<< HEAD
            <th>CPF</th>
            <th>Matricula</th>
            <th>Salario</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Numero</th>
            <th>Bairro</th>
=======
            <th>Duração</th>
>>>>>>> 261426e095c40c3616d5022bea28a2c09e07eca8
          </tr>
        </thead>
        <tbody>
          {professores.map((item, i) => (
            <tr key={i}>
              <td>
                <Link to={'/professores/' + i}><BsPencilFill /></Link>{' '}
                <BsTrash onClick={() => apagar(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
<<<<<<< HEAD
              <td>{item.cpf}</td>
              <td>{item.matricula}</td>
              <td>{item.salario}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.complemento}</td>
              <td>{item.numero}</td>
              <td>{item.bairro}</td>           
=======
              <td>{item.duracao}</td>
>>>>>>> 261426e095c40c3616d5022bea28a2c09e07eca8
            </tr>
          ))}
        </tbody>
      </Table>



    </div>
  )
}

export default ProfessoresLista