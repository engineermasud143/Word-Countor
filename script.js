
function wordCount() {
   
    let text = document.getElementById("text").value;

    let trimmedText = text.trim();

    if (trimmedText === "") {
        document.getElementById("countWord").innerText = "শব্দের সংখ্যা: 0";
        return;
    }

    let words = trimmedText.split(" ");

    document.getElementById("countWord").innerText = "শব্দের সংখ্যা: " + words.length;
}

document.querySelector("button").addEventListener("click", wordCount);
