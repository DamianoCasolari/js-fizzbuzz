const rowEl = document.querySelector(".row")

for (let i = 0; i < 100; i++) {
let fizz_number = i + 1;
if (fizz_number % 15 == 0) {
    fizz_number = "FizzBuzz";
}  else if (fizz_number % 5 == 0){
    fizz_number = "Buzz";
 }  else if (fizz_number % 3 == 0) {
    fizz_number = "Fizz"; 
 }
 console.log(fizz_number)
rowEl.innerHTML += `<div class="box_fizz col-2 p-1">
<div class="card d-flex align-items-center justify-content-center fs-4">
    ${fizz_number}
</div>
</div>`
}