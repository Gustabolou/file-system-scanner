# 🚀 Node.js File System Scanner

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)  
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)

A **recursive**, **async** file scanner built with Node.js. Lists files by extension while ignoring directories like `.git` and `node_modules`.

---

## 🌟 Features  
✅ **Recursive directory traversal**  
✅ **Extension filtering** (e.g., `.html`, `.js`)  
✅ **Ignores** `.git`, `node_modules`, and other configurable folders  
✅ **100% async/await** (uses `node:fs/promises`)  
✅ **Cross-platform path handling** (`node:path`)  
✅ **Error handling** with `.catch()`  

---

## 🛠 Installation  

```bash
git clone https://github.com/Gustabolou/file-system-scanner.git
cd file-system-scanner
npm install
```

---

## 🚀 Usage  
### Basic Usage
```bash
node index.js --dir="./projects" --ext=".html"
```

### Arguments  
| Flag  | Description               | Default         |
|-------|---------------------------|-----------------|
| `--dir` | Root directory to scan   | Current dir (`.`) |
| `--ext` | File extension to match  | `.html`         |

---

## 📂 Project Structure  
```
file-system-scanner/
├── index.js          # Main script
├── package.json      # Project config
└── README.md         # You're here!
```

---

## 💡 Key Concepts  
- **Recursion**: Traverses nested directories  
- **Async I/O**: Uses `fs/promises` for non-blocking ops  
- **ES Modules**: Modern `import/export` syntax  
- **CLI**: Accepts dynamic arguments  

---

## 🤝 Contributing  
PRs welcome! Open an issue first to discuss changes.

---

## 📜 License  
MIT © Gustavo Sales

---

## 🎯 GitHub Publishing Tips  
### 1️⃣ Initialize your repo (if new):  
```bash
git init
git remote add origin https://github.com/Gustabolou/file-system-scanner.git
```

### 2️⃣ Add a `.gitignore` file:
```bash
echo "node_modules/" > .gitignore
```

### 3️⃣ Commit & push:
```bash
git add .
git commit -m "feat: initial commit - recursive file scanner"
git branch -M main
git push -u origin main
```

