function copyToClipboard() {
    var copyText = document.getElementById("contractAddress");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);
    alert("Contract Address copied to clipboard!");
}
``
