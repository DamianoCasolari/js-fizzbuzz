const rowEl = document.querySelector(".row")
let colorCLass;
for (let i = 1; i < 101; i++) {
    let fizz_number = i;
    if (fizz_number % 15 == 0) {
        fizz_number = "FizzBuzz";
        colorCLass = "my_baground_fizzBuzz"
    } else if (fizz_number % 5 == 0) {
        fizz_number = "Buzz";
        colorCLass = "my_baground_buzz"
    } else if (fizz_number % 3 == 0) {
        fizz_number = "Fizz";
        colorCLass = "my_baground_fizz"
    } else {
        colorCLass = "my_baground_standard"
    }
    console.log(fizz_number)
    rowEl.innerHTML += `<div class="box_fizz col-6 col-sm-3 col-md-2 p-2">
    <div class="card d-flex align-items-center justify-content-center fs-3 fw-bold px-1 ${colorCLass} ">
    ${fizz_number}
       </div>
    </div>`

    // This doesn't work and i don't know why 

    // let myBox = document.querySelector(".box_fizz > .card")


    // if (fizz_number % 15 == 0) {
    //     myBox.classList.add("my_baground_fizzBuzz")
    // } else if (fizz_number % 3 == 0) {
    //     myBox.classList.add("my_baground_fizz");
    // } else if (fizz_number % 5 == 0) {
    //     myBox.classList.add("my_baground_buzz");
    // } else {
    //     myBox.classList.add("my_baground_standard")
    }




