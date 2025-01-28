const form = document.querySelector('form') 


form.addEventListener('submit',(e)=>{
    e.preventDefault();
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#result')
   const guide = document.querySelector('#guide')


   if(height === ''|| height < 0 || isNaN(height)){
    result.innerHTML = `please give valid height ${height}`;
   }
   else if(weight === ''|| weight < 0 || isNaN(weight)){
    result.innerHTML = `please give valid hweight ${weight}`;
   }
   else{
   const BMI = (weight/((height*height)/10000)).toFixed(2)
   result.innerHTML = `<span>${BMI}</span>`;

   if(BMI <=18.6){
    guide.innerHTML = "Under Weight";
    guide.style.color = "red";
   }
   else if(BMI > 18.6 && BMI < 24.9 ){
    guide.innerHTML ="Normal Range";
    guide.style.color = "Green";
   }
   else{
    guide.innerHTML = "Over Weight";
    guide.style.color = "red";
   }
   }
});