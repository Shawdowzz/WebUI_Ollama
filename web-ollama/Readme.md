# 🐬 Dolphin-Phi-3B WebUI

This is a simple WebUI built using **HTML**, **CSS**, and **JavaScript** to interact with the **Dolphin Phi 3B** language model running locally using [Ollama](https://ollama.com/).

---

## 🚀 Features

- Lightweight, fast web interface for chatting with the Dolphin-Phi-3B model.
- No backend server required — communicates directly with the Ollama local instance.
- Clean and responsive UI using plain HTML, CSS, and JavaScript.

---

## 📥 Prerequisites

Before using this WebUI, you need to install **Ollama** and download the Dolphin-Phi-3B model.

### 1. Install Ollama

Visit the official Ollama site and download the installer for your OS:

👉 [https://ollama.com/download](https://ollama.com/download)

Alternatively:

- **macOS**:

  ```bash
  brew install ollama

  ```

- **Linux (Debian/Ubuntu):**

```bash

curl -fsSL https://ollama.com/install.sh | sh

```

- **Windows :**

Use the installer from the site linked above.

### 2. Download the Dolphin-Phi 3B Model

Once Ollama is installed, open a terminal and run:

```bash
ollama pull dolphin-phi:3b

```

This will download and install the Dolphin-Phi 3B model locally.

### 3. Run the Model

To start the model server:

```bash

ollama run dolphin-phi:3b

```

This will launch the model and expose a local API (usually at <i>http://localhost:11434<i>) that the WebUI will interact with.

### 4. Run It Locally

Open the web-ollama folder.

Double-click index.html.

It will open in your browser.

Make sure Ollama is running (<i>ollama run dolphin-phi<i>).

Type your message and chat!
