const form = document.getElementById('calculation-form');
const ans_box = document.getElementById('calculation-ans');
const TOTAL_PERCENT = 100;
form.addEventListener('submit',(event)=>{
   event.preventDefault()
   const formData = new FormData(event.target);
   const formProps = Object.fromEntries(formData);

   const {number,percent} = formProps;
   const add_percent = TOTAL_PERCENT + Number(percent);
   const percent_to_decimal = parseFloat(add_percent/TOTAL_PERCENT);

   const x = number / percent_to_decimal; // FOR: pirce = toral price(in percentage) * x
   const original_price = (Math.round(x * 100) / 100).toFixed(2); // or parseFloat(num).toFixed(2);

   ans_box.innerHTML = original_price;

})
