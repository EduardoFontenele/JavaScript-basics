/* Variavéis podem ser tanto criadas num escopo global, ou seja, visível na aplicação inteira, quanto num escopo
de função, que fica válida apenas do bloco daquela função */

{
    {
        {
            {
                var sera = 123
                console.log(sera)
            }
        }
    }
}

function teste() {
    var local = 123
    console.log(local)
}

console.log(local) // = ReferenceError: local is not defined 
