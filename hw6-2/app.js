function reverseText() {
    const inputText = document.getElementById("input").value;
    const reverseText = inputText.split("").reverse().join("");
    document.getElementById("output").textContent = reverseText
}