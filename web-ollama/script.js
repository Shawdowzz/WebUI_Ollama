async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value.trim();
  if (!userText) return;

  // Show user message
  chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div><br>`;
  input.value = "";

  // Call Ollama API
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "dolphin-phi",
      prompt: userText,
      stream: false
    })
  });

  const data = await response.json();

  // Show AI response
  chatBox.innerHTML += `<div><strong>Dolphin:</strong> ${data.response}</div><br>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
