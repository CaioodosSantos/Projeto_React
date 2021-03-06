import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import SemestreService from '../../services/academico/SemestreService';
import CursoService from '../../services/academico/CursoService';
import semestreValidator from '../../validators/semestreValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
 
const Semestres = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const cursos = CursoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const semestre = SemestreService.get(params.id)

      for (let campo in semestre) {
        setValue(campo, semestre[campo])
      }
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      SemestreService.update(params.id, dados)
    } else {
      SemestreService.create(dados)
    }

    navigate('/semestres')
  }

  return (
    <div>
      <h1>Semestre</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", semestreValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="datainicio">
          <Form.Label>Data inicio: </Form.Label>
          <Form.Control isInvalid={errors.datainicio} type="date" {...register("datainicio", semestreValidator.datainicio)} />
          {errors.datainicio && <span>{errors.datainicio.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Data fim: </Form.Label>
          <Form.Control isInvalid={errors.datafim} type="date" {...register("datafim", semestreValidator.datafim)} />
          {errors.datafim && <span>{errors.datafim.message}</span>}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Semestres