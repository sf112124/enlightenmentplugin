let clickCount = 0;

window.addEventListener("mousedown", showMessage);

function showMessage() {
  clickCount++;

  let message = document.createElement("div");
  message.style.position = "absolute";
  message.style.top = event.clientY + 10 + "px";
  message.style.left = event.clientX + 10 + "px";
  message.style.background = "#fff"; // changed from #222 to #fff
  message.style.padding = "15px 20px";
  message.style.border = "1px solid #ccc"; // changed from 3px to 1px
  message.style.borderRadius = "10px";
  message.style.zIndex = "9999";
  message.style.boxShadow = "1px 1px 5px #ccc"; // changed from 0 0 10px #ccc to 1px 1px 5px #ccc

  // Increase urgency by making message appear more frequently
  let frequency = Math.floor(Math.random() * 5) + 1; // set random frequency between 1 and 5
  if (clickCount % frequency === 0) { // show message only on certain clicks
    // Generate a random color for each font
    let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#800000", "#008000", "#000080", "#808000", "#008080", "#800080"];
    let randomColorIndex = Math.floor(Math.random() * colors.length); // changed
    message.style.color = colors[randomColorIndex]; // changed

    // Add a countdown timer
    let timeLeft = 10; // set countdown timer to 10 seconds
    let countdown = document.createElement("div");
    countdown.innerHTML = timeLeft + " seconds left to wake up";
    countdown.style.fontSize = "14px";
    countdown.style.marginTop = "5px";
    message.appendChild(countdown);
    let interval = setInterval(function() {
      timeLeft--;
      countdown.innerHTML = timeLeft + " seconds left to wake up";
      if (timeLeft === 0) {
        clearInterval(interval);
        message.remove();
      }
    }, 1000);

    // Create an array of messages
    let messages = [
      "This isn't real", 
      "Life is an illusion", 
      "Wake up.",
      "Reality is an illusion.",
      "Its time to wake up.",
      "Everything is nothing.",
      "You are not who you think you are",
      "Question everything.",
      "Nothing is as it seems.",
      "No one is real.",
      "Everything is just a dream.",
      "This is not real!",
      "WAKE UP NOW!",
      "Break the illusion!",
      "Nothing is as it seems!",
      "Nothing is real!",
      "The world is an illusion!",
      "It's all just a dream!",
    ];

    // Generate a random index between 0 and the length of the array
    let randomIndex = Math.floor(Math.random() * messages.length);

    // Set the innerHTML of the message element to the random message
    message.innerHTML = messages[randomIndex];
    document.body.appendChild(message);

    // Add a voice
    let voice = "UK English Female"; // set default voice
    let voices = window.speechSynthesis.getVoices(); // get available voices
    if (voices.length > 0) {
      let randomVoiceIndex = Math.floor(Math.random() * voices.length); // set random voice
      voice = voices[random
