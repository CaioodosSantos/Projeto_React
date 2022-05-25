import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa'
import { BsArrowLeft } from 'react-icons/bs'
import ProfessorService from '../../services/academico/ProfessorService';
<<<<<<< HEAD
import CursoService from '../../services/academico/CursoService';
import professorValidator from '../../validators/professorValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
=======
import professorValidator from '../../validators/professorValidator';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { mask } from 'remask';
import Input from '../../components/forms/Input';
>>>>>>> 261426e095c40c3616d5022bea28a2c09e07eca8

const Professores = () => {

  const params = useParams()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

<<<<<<< HEAD
  const cursos = CursoService.getAll()
  
  useEffect(() => {
    
    if (params.id) {
      const professores = ProfessorService.get(params.id)

      for (let campo in professores) {
        setValue(campo, professores[campo])
      }
=======
  const reference = {register, errors, validator: professorValidator, setValue}

  useEffect(() => {
    if (params.id) {
      const professor = ProfessorService.get(params.id)

      for (let campo in professor) {
        setValue(campo, professor[campo])
      }


>>>>>>> 261426e095c40c3616d5022bea28a2c09e07eca8
    }
  }, [])

  function salvar(dados) {

    if (params.id) {
      ProfessorService.update(params.id, dados)
    } else {
      ProfessorService.create(dados)
    }

    navigate('/professores')
  }

<<<<<<< HEAD
  return (
    <div>
      <h1>Professores</h1>

      <Form >
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control isInvalid={errors.nome} type="text" {...register("nome", professorValidator.nome)} />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control isInvalid={errors.cpf} type="text" {...register("cpf", professorValidator.cpf)} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control isInvalid={errors.matricula} type="text" {...register("matricula", professorValidator.matricula)} />
          {errors.matricula && <span>{errors.matricula.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control isInvalid={errors.salario} type="text" {...register("salario", professorValidator.salario)} />
          {errors.salario && <span>{errors.salario.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control isInvalid={errors.email} type="email" {...register("email", professorValidator.email)} />
          {errors.email && <span>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control isInvalid={errors.telefone} type="text" {...register("telefone", professorValidator.telefone)} />
          {errors.telefone && <span>{errors.telefone.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep: </Form.Label>
          <Form.Control isInvalid={errors.cep} type="text" {...register("cep", professorValidator.cep)} />
          {errors.cep && <span>{errors.cep.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control isInvalid={errors.logradouro} type="text" {...register("logradouro", professorValidator.logradouro)} />
          {errors.logradouro && <span>{errors.logradouro.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control isInvalid={errors.complemento} type="text" {...register("complemento", professorValidator.complemento)} />
          {errors.complemento && <span>{errors.complemento.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control isInvalid={errors.numero} type="text" {...register("numero", professorValidator.numero)} />
          {errors.numero && <span>{errors.numero.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control isInvalid={errors.bairro} type="text" {...register("bairro", professorValidator.bairro)} />
          {errors.bairro && <span>{errors.bairro.message}</span>}
        </Form.Group>
=======
  function handleChange(event) {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }

  return (
    <div>
      <h1>Professor</h1>

      <Form >
        <Input name="nome" label="Nome" reference={reference} />
        <Input name="telefone" label="Telefone" mask="(99) 99999-9999" reference={reference} />
        <Input name="dt" label="Dt. Nascimento" type="date" reference={reference} />
        <Input name="cpf" label="CPF" mask="999.999.999-99" reference={reference} />

>>>>>>> 261426e095c40c3616d5022bea28a2c09e07eca8
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck /> Salvar</Button>{' '}
          <Link className='btn btn-danger' to={-1}><BsArrowLeft /> Voltar</Link>
        </div>
      </Form>

    </div>
  )
}

export default Professores