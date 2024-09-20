const body = document.body;
const colorButton = document.querySelectorAll(".color-button");
const resetButton = document.querySelector("#reset");
const codeButton = document.querySelector("#code");

colorButton.forEach((e) => {
    e.addEventListener("click", (e) => {
        let id = e.target.id;
        id = id.substring(5);
        body.style.backgroundColor = `#${id}`;
    })
})

resetButton.addEventListener("click", () => {
    body.style.backgroundColor = `#fff`;
})