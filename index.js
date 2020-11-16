const catResult = document.getElementById("catResult");
const dogResult = document.getElementById("dogResult");
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");

catBtn.addEventListener("click", getRandomCat)
dogBtn.addEventListener("click", getRandomDog)

function getRandomCat() {

    fetch("https://aws.random.cat/meow")
        .then(res => res.json())
        .then(data => {
            catResult.innerHTML = '<img src ="${data.file}"/>'
        })
    console.log(data)
        .catch(error => {
            console.log("error!!!");
            console.log(error);
        });
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(data => {
            dogResult.innerHTML = '<img src ="${data.fileSizeBytes.url}"/>'
        })
    console.log(data)
        .catch(error => {
            console.log("error!!!");
            console.log(error);
        });
}