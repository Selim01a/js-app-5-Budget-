const btnIncome = document.querySelector('.income');
const btnExpense = document.querySelector('.expense');
const actionName = document.querySelector('.action');
const actionPrice = document.querySelector('.price');
const listI = document.querySelector('.listIncome');
const listE = document.querySelector('.listExpense');
const calc = document.querySelector('.calc');
const deger = document.querySelector('#value');


var i=0;
const goIncomes = () => {
    
    let newIncomeI = '+ ' +  actionName.value+ ' '+ actionPrice.value + ' TL';
    const nodeI = document.createElement("li");
    nodeI.innerText = newIncomeI;
    listI.appendChild(nodeI);
    i += new Number(actionPrice.value);
    console.log(i)
    actionName.value="";
    actionPrice.value="";
    return i
}

var e=0;
const goExpense = () => {
    
    let newIncomeE = '- ' +  actionName.value+ ' '+ actionPrice.value + ' TL';
    const nodeE = document.createElement("li");
    nodeE.innerText = newIncomeE;
    listE.appendChild(nodeE);
    e += new Number(actionPrice.value);
    console.log(e)
    actionName.value="";
    actionPrice.value="";
    return e
}

btnIncome.addEventListener("click" , goIncomes)
btnExpense.addEventListener("click" , goExpense)
calc.addEventListener("click" , calculation)

function calculation(){
   a = i - e 
   deger.innerHTML = a 
   console.log(i-e);

}
