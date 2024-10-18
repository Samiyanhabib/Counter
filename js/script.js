// =============== dom part start
let oneInput = document.querySelectorAll('.oneInput')
let spanNumber = document.querySelectorAll('.spanNumber')

let result = document.querySelectorAll('.result')

// ===============function part
let oneButton = (item)=>{
   result[item].innerHTML       = oneInput[item].value
   result[item].dataset.number  = oneInput[item].value
   spanNumber[item].innerHTML   = oneInput[item].value
   oneInput[item].value         = ''

}



let countN = ()=>{
   result.forEach((item)=>{
      let number = 0  
      let functionNumber = ()=>{
          number++
          item.innerHTML = number
          if(number == item.dataset.number){
            clearInterval(stop)
          }
      }
      var stop = setInterval (()=>{
         functionNumber()
      },100);
      if(item.dataset.number == 0){
         clearInterval(stop)
      }
   })
   
}

