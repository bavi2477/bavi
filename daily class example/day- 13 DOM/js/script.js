const elem = document.createElement("h1"); //<h1></h1>
elem.innerText = "DOM";// <h1>DOM</h1>
console.log(elem);
document.body.append(elem);


const divELem = document.createElement("div");
document.body.append(divELem);

divELem.innerHTML = `
<input type="number" name="width" id="id-1" onInput="updateWidth()">
<input type="number" name="length" id="id-2" onInput="updateHeight()">
`


const imgElement = document.createElement("img");
imgElement.setAttribute("src", "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg");
imgElement.alt = "image";
document.body.append(imgElement);



function updateWidth() {
    const inputElem = document.getElementById("id-1");
    console.log(inputElem.value); // input given in the input box.
    imgElement.width = inputElem.value;
}

function updateHeight() {
    const inputElem = document.getElementById("id-2");
    console.log(inputElem.value); // input given in the input box.
    imgElement.width = inputElem.value;
}
