let emoji = document.getElementById("emoji");
let result = [];
let desc = document.getElementById('desc');

// Fetch emojis and only enable click after data is ready
async function fetchEmoji() {
    try {
        let res = await fetch('https://emoji-api.com/emojis?access_key=33b1b34f10570975cb2580587f62d63530e87155');
        result = await res.json();
        console.log(result[234].character);

        // Now add the event listener, after data is ready
        emoji.addEventListener("click", () => {
            let ranNum = Math.floor(Math.random() * result.length);
            let description = result[ranNum].unicodeName.split('.');
            let des2 = description[1].substring(2,description[1].length);
            emoji.innerHTML = result[ranNum].character;
            desc.innerHTML  =des2;
        });
    } catch (error) {
        console.error("Failed to fetch emojis:", error);
    }
}

fetchEmoji();
