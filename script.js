const keys = [
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
  { type: "black" },
  { type: "white" },
];

const keyList = document.querySelector(".keys-list");

function PianoKeys() {
  keys.forEach((key, index) => {
    const keyElement = document.createElement("li");
    keyElement.classList.add("piano-keys");
    keyElement.classList.add(key.type);
    keyElement.dataset.index = index;
    keyElement.addEventListener("click", playSound); // Removed parentheses here
    keyList.appendChild(keyElement);
  });

  function playSound(event) {
    const keyIndex = event.target.dataset.index;
    const audio = new Audio(`./KeySounds/key${parseInt(keyIndex) + 1}.mp3`); // Added parseInt to convert keyIndex to a number
    audio.play();
  }
}

PianoKeys(); // Moved this call outside of the function definition
