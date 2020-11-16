const catResult = document.getElementById("catResult");
const dogResult = document.getElementById("dogResult");
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");

catBtn.addEventListener("click", function() {
    getRandomCat()
})
dogBtn.addEventListener("click", function() {
    getRandomDog()
})

function getRandomCat() {

    fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(data => {
            console.log(data.file)
            document.getElementById("catResult").innerHTML = `<img src ="${data.file}"/>`

        })

    .catch(error => {
        console.log("error!!!");
        console.log(error);
    });
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            console.log(data.url)
            document.getElementById("dogResult").innerHTML = `<img src ="${data.url}"/>`
        })

    .catch(error => {
        console.log("error!!!");
        console.log(error);
    });
}