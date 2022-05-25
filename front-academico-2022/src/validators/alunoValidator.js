const alunoValidator = {
    nome: {
        required: "O campo Nome é Obrigatório",
        minLength: {
            value: 3,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 50,
            message: "Qtd máxima de caracteres ultrapassada"
        },
        min: {
            value: 3,
            message: "O valor mínimo é 3"
        },
    },
<<<<<<< HEAD
    cpf:{
        required: "O campo CPF é Obrigatório",
        minLength: {
            value: 11,
            message: "Qtd mínima de caracteres não informado"
        },
        maxLength: {
            value: 20,
            message: "Qtd máxima de caracteres ultrapassada"
        },
    }
=======
>>>>>>> 261426e095c40c3616d5022bea28a2c09e07eca8
}

export default alunoValidator