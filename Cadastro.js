const primeiro_nome =prompt("Informe o nome do recruta")
const sobrenome = prompt("Informe o sobrenome do recruta")
const C_estudos = prompt("Insira o campo de estudos")
const Ano_nascimento = prompt("Insira o ano de nascimento do recruta")

confirm(
    "Cadastro confirmado!\n" +
    "\n Nome do Recruta: " + primeiro_nome + sobrenome +
    "\n Campo de Estudos: " + C_estudos +
    "\n Ano de nascimento do recuta: " + Ano_nascimento +
    "\n Idade do Recruta: " + (2022 - Ano_nascimento )
  )