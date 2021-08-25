var inputTextArea = document.querySelector("#input-text");
var button = document.querySelector("#btn");
var outputTextArea = document.querySelector("#output-text");
const URL = "https://api.funtranslations.com/translate/pirate.json";

console.log(inputTextArea);

function RequestUrl(text) {
  return URL + "?text=" + text;
}

button.addEventListener("click", () => {
  var inputText = inputTextArea.value;
  console.log(inputText);
  fetch(RequestUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var result = json.contents.translated;
      outputTextArea.innerText = result;
    })
    .catch((error) => {
      console.log(error);
      alert("There is some error!");
    });
});
