# Node.js Core Module Handlers - Toolkit

A hands-on exploration of **Node.js built-in (core) modules** through custom handler classes and practical examples.

The goal of this project is to understand how Node.js core modules work by using them directly and encapsulating their functionality into reusable classes.

The project is structured as a reusable **npm package**, with `index.js` serving as the public entry point for importing the available handlers.

## 📚 Modules Covered

| Handler          | Node.js Core Module  | Purpose                                 |
| ---------------- | -------------------- | --------------------------------------- |
| `FileHandler`    | `fs` / `fs/promises` | File and directory operations           |
| `BufferHandler`  | `Buffer`             | Binary data and memory handling         |
| `CryptoHandler`  | `crypto`             | Hashing, HMAC and encryption/decryption |
| `OsHandler`      | `os`                 | Operating system information            |
| `PathHandler`    | `path`               | File and directory path manipulation    |
| `ProcessHandler` | `process`            | Process information and control         |
| `StreamHandler`  | `stream`             | Efficient processing of data in chunks  |

More modules and functionality will be added as the project develops.

## 🎯 Goals

* Understand Node.js core modules through practical implementation
* Practice object-oriented programming with JavaScript classes
* Learn how Node.js handles files, buffers, streams, processes and system information
* Understand asynchronous and synchronous APIs
* Practice working with ES modules
* Build reusable abstractions around Node.js functionality
* Develop a stronger foundation for backend development with Node.js

## 🗂️ Project Structure

```text
nodejs-core-module-handlers/
│
├── modules/
│   ├── FileHandler.js
│   ├── BufferHandler.js
│   ├── CryptoHandler.js
│   ├── OsHandler.js
│   ├── PathHandler.js
│   ├── ProcessHandler.js
│   └── StreamHandler.js
│
├── test/
│   └── server.js
│
├── index.js
├── package.json
├── LICENSE
└── README.md
```

## 🛠️ Technologies

* JavaScript
* Node.js
* Node.js Core Modules
* ES Modules
* npm
* Git & GitHub

## 📦 Package Structure

The project uses `index.js` as its public API entry point, allowing consumers to import the available handlers from a single module.

Example:

```js
import {
    FileHandler,
    BufferHandler,
    CryptoHandler,
    StreamHandler
} from "./index.js";
```

The package was also tested locally by creating an npm tarball with `npm pack` and installing it into a separate Node.js project.

## 🚀 Running the Project

Clone the repository:

```bash
git clone https://github.com/MIhajloS07/nodejs-modules-working.git
```

Navigate into the project:

```bash
cd nodejs-modules-working
```

Install dependencies:

```bash
npm install
```

Run the demonstration:

```bash
npm start
```

## 📖 Learning Approach

Each handler class is built around a specific Node.js core module.

For example:

```text
CryptoHandler
      ↓
    crypto
      ↓
hashing
HMAC
encryption
decryption
```

The project focuses on understanding the underlying APIs rather than simply calling functions without understanding how they work.

## 🔄 Project Status

This is an ongoing learning project.

New Node.js core modules, APIs and practical examples will be added as I continue exploring the Node.js runtime.

## 👨‍💻 Author

**Mihajlo Stoiljković**
