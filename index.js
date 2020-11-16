// Using getElementById to call all the elements here.
const catResult = document.getElementById("catResult");
const dogResult = document.getElementById("dogResult");
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");

//Adding EventListener for the buttons. When we click the buttons it should change the images.
catBtn.addEventListener("click", function() {
    getRandomCat()
})
dogBtn.addEventListener("click", function() {
    getRandomDog()
})

// These API are coming from the public API's repository from github. 
// fetch takes the url from the public API repository. It is requesting to fetch the data from that particular API. 
// .then response method ---> It is going to convert the collected data from the API into the json format so that javascript will understand the collected data from the API. JSON ---> It is a file format used to convert data into JS.
// .then data method  ---> It is used to display the data in our document. {data.file} ---> It is used to collect the "file" information from that API to the "data" eg 1: {"file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/img_20160924_170252.jpg"} <-- here "file" is the used to express to provide the informations in the link.
// eg 2 : {"fileSizeBytes":903107,"url":"https://random.dog/db7ea879-376a-4e00-b4e0-ee5b413be84d.jpg"} <-- here "url" is used.
// .catch error is used to find the bugs in the program.

function getRandomCat() {

    fetch("https://aws.random.cat/meow")
        .then(response => response.json())
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
        .then(response => response.json())
        .then(data => {
            if (data.url.includes(".mp4")) {
                getRandomDog()
            } else {
                console.log(data.url)
                document.getElementById("dogResult").innerHTML = `<img src ="${data.url}"/>`
            }
        })
        .catch(error => {
            console.log("error!!!");
            console.log(error);
        });
}