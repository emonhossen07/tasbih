

let a = 0;

document.querySelector("#count-btn").addEventListener("click", function(){
    a = a + 1;

    console.log(a);

    document.querySelector("#result").innerHTML = a + " times";
})

document.querySelector("#reset-btn").addEventListener("click", function(){
    a = a * 0;

    document.querySelector("#result").innerHTML = a;
})