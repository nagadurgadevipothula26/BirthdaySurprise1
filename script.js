
function startSurprise() {

    // Hide welcome page
    document.getElementById("welcomePage").style.display = "none";

    // Show memories page
    document.getElementById("memoriesPage").style.display = "block";

    // Start romantic music
    music.play()
        .then(() => {
            musicButton.innerHTML = "⏸️ Pause Music";
        })
        .catch(error => {
            console.log("Music could not play:", error);
            musicButton.innerHTML = "▶️ Play Music";
        });
}

function nextPage() {

    // Hide Memories Page
    document.getElementById("memoriesPage").style.display = "none";

    // Show Quiz Page
    document.getElementById("quizPage").style.display = "block";
}

function checkAnswers() {

    // Get the dates selected by your husband
    let meetingDate =
        document.getElementById("meetingDate").value;

    let marriageDate =
        document.getElementById("marriageDate").value;

    // Replace these with your actual dates
    let correctMeetingDate = "2026-02-03";
    let correctMarriageDate = "2026-06-26";

    if (
        meetingDate === correctMeetingDate &&
        marriageDate === correctMarriageDate
    ) {

        document.getElementById("result").innerHTML =
            "Perfect! andi meku gurthu vundi! ❤️🎉";

    } else {

        document.getElementById("result").innerHTML =
            "enti edi kuda gurthu ledha ayithe mali try cheyandi 😘💕";
    }
}
function celebrate() {

    createHearts();
    createConfetti();

}

// Floating hearts animation
function createHearts() {

    const container = document.getElementById("hearts");

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("span");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7500);
    }
}

// Confetti animation
function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    const colors = [
        "#ff1493",
        "#ff69b4",
        "#ffd700",
        "#ff4500",
        "#da70d6"
    ];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 6500);
    }
}
function testBirthdayPage() {

    document.getElementById("quizPage").style.display = "none";

    document.getElementById("birthdayPage").style.display = "block";

    window.scrollTo(0, 0);
}
// Get the music button
const musicButton = document.getElementById("musicButton");

// Function to play or pause music
function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");

    if (music.paused) {

        music.play()
            .then(() => {
                button.innerHTML = "⏸️ Pause Music";
                console.log("Music is playing!");
            })
            .catch(error => {
                console.error("Audio error:", error);
                alert("Unable to play music. Check the console.");
            });

    } else {

        music.pause();
        button.innerHTML = "▶️ Play Music";
        console.log("Music paused!");
    }
}
const loveLetter = `Yevandoi Srivaru❤️,

Meru Na Life Loki Vachinappati Nunchi,
Na Life inka Andamga Maripoyindi.

Meru Na husband matrame kadu.
Meru Na Best Friend, Na Santhosham,
Na Balam, Na Balhinatha and Merey Naku anii, 
You are evething to me, 
and You are my forever Person andi.

Metho gadipina prathi chinna kshanam
matallo cheppalenantha viluvainadi.

Even Manam velakilometerlu Dooram lo vuna kuda 
Mana Manasulu Eppudu Daggaraganey Vuntay.

On your special day, I wish you
endless happiness, success, good health,
and all the love in the world.

Happy 32nd Birthday, My King!, My Love.. 🎂❤️

I love you more than words can ever say.
I Miss You soo much andi...`;

let letterIndex = 0;
let typingTimer = null;

function openLoveLetter() {

    const letterBox =
        document.getElementById("letterBox");

    const typedLetter =
        document.getElementById("typedLetter");

    // Show the letter
    letterBox.style.display = "block";

    // Scroll to the letter
    letterBox.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    // Stop any previous typing animation
    clearTimeout(typingTimer);

    // Reset the letter
    typedLetter.textContent = "";
    letterIndex = 0;

    // Start typing
    typeLetter();
}

function typeLetter() {

    const typedLetter =
        document.getElementById("typedLetter");

    if (letterIndex < loveLetter.length) {

        typedLetter.textContent +=
            loveLetter.charAt(letterIndex);

        letterIndex++;

        typingTimer = setTimeout(typeLetter, 45);
    }
}