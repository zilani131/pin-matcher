function randomNumber(){
    const pinNumber=Math.round(Math.random()*10000)
    // making the pin number string adding '' .so that we can use length property .by using length property we can correct the number of digit and make sure the number of digit is four
    const pinString=pinNumber+''
    
    
    if (pinString.length==4){
       
       return pinNumber

    }
    else{
         return randomNumber()
    }

}
function generatePin(){
    const getPin=randomNumber()
    document.getElementById('random-input').value=getPin
}
document.getElementById('selecting-number').addEventListener('click',function(e){
    const number=e.target.innerText
    const calc=document.getElementById('typed-number')
    const previousNumber=calc.value
    const currentnumber=previousNumber+number
   
    if(isNaN(number)){
        if(number=='C')
        {
            document.getElementById('typed-number').value=''
        }
    }
    else{
        document.getElementById('typed-number').value=currentnumber
    }
  

})
// submit button
function submitButton(){
    const createPin=document.getElementById('random-input').value 
    const typedPin=document.getElementById('typed-number').value
    const matched=document.getElementById('Matched')
    const notMatched=document.getElementById('not-matched')
    if(createPin==typedPin){
           matched.style.display='block'
            notMatched.style.display="none"
       
    }
    else{
        notMatched.style.display='block'
        matched.style.display='none'
    }}