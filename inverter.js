//Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”

function inverter(str)
{
  let reverseStr = "";
  for (let i = str.length - 1; i>=0; i--)
  {
    reverseStr += str[i];
  }
  console.log(reverseStr);
}
inverter("brenda")
