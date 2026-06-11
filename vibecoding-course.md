# Vibe Coding — A Full Beginner's Course
### Written by Davexinoh ▹ For the friend who's just getting started

---

## Before You Touch Any Code

You are about to learn how to build software without knowing how to code the traditional way.

That sounds like a trick. It's not.

The skill you're actually learning is: how to communicate precisely with AI tools so they build what you have in your head.

But to do that well, you need to understand the environment you're working in.

Start here.

---

## Part 1 — Core Concepts You Need to Know

### What Is an LLM?

LLM stands for Large Language Model.

It's an AI that has been trained on massive amounts of text — code, books, articles, conversations — and learned to predict what comes next in a sequence of words.

When you type a prompt to ChatGPT, Claude, or Gemini, you're talking to an LLM.

These models don't "think." They generate responses based on patterns learned during training.

What matters to you: they're extremely good at writing code. Your job is to describe what you want clearly enough that the AI produces usable output.

Popular LLMs you'll use:
- Claude (Anthropic) — strong at reasoning and long tasks
- ChatGPT / GPT-4o (OpenAI) — widely used, good all-rounder
- Gemini (Google) — useful for research and multimodal tasks
- Mistral, LLaMA — open source options

---

### What Is an IDE?

IDE stands for Integrated Development Environment.

It's the app where you write and manage your code. Think of it like Microsoft Word, but for building software.

A good IDE gives you:
- A file explorer (see all your project files)
- A code editor (where you write)
- Syntax highlighting (your code gets colored so it's readable)
- Error detection (underlines problems before you run anything)
- A built-in terminal (more on this shortly)

**The most popular IDE right now: VS Code**
- Free
- Works on Windows, Mac, Linux
- Has thousands of extensions
- Download at: https://code.visualstudio.com

**Other IDEs worth knowing:**
- Cursor — VS Code with AI built in. Built for vibe coding. Highly recommended.
- Replit — browser-based IDE. No installation needed. Great for quick projects.
- Windsurf — another AI-first IDE, similar to Cursor.

If you're just starting, use Cursor or Replit.

---

### What Is a Terminal?

The terminal is a text-based interface where you give your computer direct commands.

Instead of clicking buttons, you type instructions.

Example:
- Click-based: You open a folder by double-clicking it.
- Terminal-based: You type `cd my-project` and press Enter.

Both do the same thing. The terminal just gives you more control.

You will use the terminal constantly. Every developer does.

**On Mac:** Search for "Terminal" in Spotlight.
**On Windows:** Use "Command Prompt" or better, install "Windows Terminal" from the Microsoft Store.
**In VS Code / Cursor:** There's a built-in terminal. Press `Ctrl + `` ` ` (backtick) to open it.

---

### What Is a File Path?

A file path tells your computer where a file lives.

Example: `/Users/yourname/projects/my-app/index.html`

That reads left to right:
- Start at the root of your computer
- Go into Users
- Then into yourname
- Then into projects
- Then into my-app
- Open index.html

On Windows it looks like: `C:\Users\yourname\projects\my-app\index.html`

---

### What Is a Framework?

A framework is a set of pre-written code that gives you a starting structure for building apps.

Instead of building everything from scratch, you use the framework's tools.

Think of it like a construction kit. The pieces are already made. You assemble them.

Popular frameworks you'll hear about:
- **React** — for building web app UIs (made by Meta)
- **Next.js** — React but with extra features like server-side rendering
- **Vue** — similar to React, slightly easier learning curve
- **Express** — for building backend servers with JavaScript

You don't need to memorize all of these now. Just know what the word means.

---

### What Is a Library?

A library is a collection of pre-written functions you can import and use.

The difference from a framework: with a framework, the framework controls your app's structure. With a library, you control the structure and you call the library when you need it.

Example: Tailwind CSS is a library for styling. You import it and use its classes to style your app.

---

### What Is npm?

npm stands for Node Package Manager.

It's a tool that lets you download and manage libraries and frameworks for JavaScript projects.

When you see a command like `npm install react`, it means: go download the React library and add it to my project.

You run npm commands in the terminal.

---

### What Is Node.js?

Node.js is a runtime environment that lets you run JavaScript outside the browser.

Normally, JavaScript only runs in a browser (Chrome, Firefox, etc.).

Node.js lets you run JavaScript on your computer or a server.

Most web development tools (including npm) require Node.js to be installed.

Download at: https://nodejs.org — get the LTS version.

---

### What Is Git?

Git is a version control system.

It tracks every change you make to your code over time.

Think of it like Google Docs' version history, but for your entire project.

With Git you can:
- Save checkpoints of your project
- Go back to a previous version if something breaks
- Work on new features without touching the main working version
- Collaborate with others without overwriting each other's work

---

### What Is GitHub?

GitHub is a website where you store your Git projects online.

Your code lives on your computer locally. GitHub is the cloud backup and collaboration hub.

Every serious developer has a GitHub profile. Yours will become your portfolio.

Sign up at: https://github.com

Key terms:
- **Repository (repo)** — a project folder tracked by Git
- **Commit** — a saved checkpoint with a message describing what changed
- **Push** — sending your local commits up to GitHub
- **Pull** — downloading changes from GitHub to your computer
- **Branch** — a separate version of your project you can work on safely
- **Clone** — copying a repo from GitHub down to your computer

---

### What Is a Frontend?

The frontend is everything the user sees and touches.

The UI. The buttons. The pages. The forms.

Technologies used for frontend:
- HTML — structure of the page
- CSS — how it looks (colors, spacing, fonts)
- JavaScript — how it behaves (clicks, animations, logic)

---

### What Is a Backend?

The backend is everything the user doesn't see.

The server. The database. The business logic.

When you submit a login form, the frontend sends your email and password to the backend. The backend checks if they match an account. It sends a response back. The frontend shows you what happened.

Technologies used for backend:
- Node.js with Express
- Python with Django or FastAPI
- Databases: PostgreSQL, MongoDB, Supabase

---

### What Is an API?

API stands for Application Programming Interface.

It's how two pieces of software talk to each other.

Example: A weather app doesn't generate weather data itself. It sends a request to a weather API. The API returns the data. The app displays it.

When you're building apps, you'll either:
- Use existing APIs (payment, weather, maps, AI)
- Build your own API so your frontend can talk to your backend

---

### What Is a Database?

A database stores your app's data.

User accounts. Posts. Orders. Messages.

Types:
- **SQL (relational)** — data in tables with rows and columns. Example: PostgreSQL, MySQL.
- **NoSQL** — flexible structure. Example: MongoDB, Firebase.
- **Supabase** — a tool that gives you a PostgreSQL database with a built-in API. Popular for vibe coding.

---

### What Is Deployment?

Deployment means putting your app on the internet so other people can use it.

On your computer, only you can see your app. When you deploy, it runs on a server somewhere in the world, accessible via a URL.

Platforms for deployment:
- **Vercel** — great for frontend / Next.js apps
- **Render** — good for backend servers
- **Railway** — easy full-stack deployments
- **Netlify** — another solid frontend option

---

### What Is an Environment Variable?

An environment variable is a secret value your app needs that you don't hard-code into your code.

Example: Your app needs an API key to talk to OpenAI. You don't write the key directly in your code (anyone who sees your code would have it). You put it in a `.env` file and reference it as a variable.

In code it looks like: `process.env.OPENAI_API_KEY`

In your `.env` file: `OPENAI_API_KEY=sk-abc123...`

Never commit your `.env` file to GitHub. Add it to `.gitignore`.

---

### What Is a .gitignore File?

A `.gitignore` file tells Git which files and folders to ignore — meaning they won't be uploaded to GitHub.

Common things you ignore:
- `.env` (your secrets)
- `node_modules/` (a folder full of downloaded packages — too large to upload, others can recreate it with `npm install`)

---

## Part 2 — The Vibe Coding Workflow

Now you know the vocabulary. Here's how vibe coding actually works.

### Step 1: Have a clear idea

Before you open any tool, write one sentence describing your app.

Bad: "I want to build a cool app."
Good: "I want to build a to-do list app where users can add tasks, mark them done, and delete them."

The clearer your idea, the better your AI output.

---

### Step 2: Choose your tools

For a beginner project, use:
- **IDE:** Cursor or Replit
- **Frontend:** React + Vite (fast, modern setup)
- **Styling:** Tailwind CSS
- **Database (if needed):** Supabase
- **Deployment:** Vercel (frontend) + Render (backend)

---

### Step 3: Prompt the AI

Open Cursor or paste into Claude/ChatGPT.

Be specific. Include:
- What the app does
- What pages/screens it needs
- What tech stack to use
- Any specific design style

Example prompt:

> "Build me a React + Vite to-do list app using Tailwind CSS for styling. The app should let users: add a task, mark a task as done (strikethrough), and delete a task. All tasks should be stored in localStorage so they persist after refresh. The design should be minimal, dark background, white text."

---

### Step 4: Read the output

Don't just copy-paste blindly.

Read what the AI gives you. Try to understand what each piece does.

You don't need to understand everything. But you need to know enough to give good follow-up prompts when something breaks.

---

### Step 5: Run the code

If you're on Replit: click Run.

If you're on Cursor / VS Code:
1. Open the terminal
2. Navigate to your project folder with `cd project-name`
3. Install dependencies: `npm install`
4. Start the app: `npm run dev`
5. Open the URL it gives you in your browser

---

### Step 6: Debug with AI

Something will break. That's normal.

When it does:
1. Copy the error message exactly
2. Paste it back to the AI
3. Describe what you expected vs what happened

Example:

> "I'm getting this error: 'Cannot read properties of undefined (reading map)'. I'm trying to render a list of tasks but the page is blank. Here's my code: [paste code]"

---

### Step 7: Deploy

When your app works locally, put it online.

For Vercel:
1. Create an account at vercel.com
2. Connect your GitHub account
3. Push your project to a GitHub repo
4. Import it on Vercel
5. Click Deploy

Done. You have a live URL.

---

## Part 3 — Key Commands to Know

These go in your terminal.

| Command | What it does |
|---|---|
| `cd folder-name` | Enter a folder |
| `cd ..` | Go up one folder |
| `ls` | List files in current folder (Mac/Linux) |
| `dir` | List files in current folder (Windows) |
| `npm install` | Install all project dependencies |
| `npm run dev` | Start your app in development mode |
| `npm run build` | Build your app for production |
| `git init` | Start tracking a project with Git |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a checkpoint |
| `git push` | Upload to GitHub |
| `git clone URL` | Download a repo to your computer |

---

## Part 4 — Things That Will Trip You Up

**1. node_modules missing**
If you clone a project and it doesn't run, you probably need to run `npm install` first.

**2. Wrong directory in terminal**
Always check you're in the right folder. Type `ls` (Mac) or `dir` (Windows) to see what's around you.

**3. Port already in use**
If you see "port 3000 is already in use," another instance of the app is running. Close it or use a different port.

**4. Environment variables not loading**
Make sure your `.env` file is in the root of your project. Make sure you restart the server after editing it.

**5. AI hallucinating packages**
Sometimes the AI will tell you to install a library that doesn't exist or use a function that doesn't work. Google the library name and verify it's real before trusting the output.

---

## Part 5 — How to Get Unstuck

In order:

1. Read the error message carefully. It often tells you exactly what's wrong.
2. Paste the error into Claude or ChatGPT with your code.
3. Search the error on Google.
4. Check the official docs of whatever tool you're using.

Don't spend more than 20 minutes stuck on something before asking for help.

---

## Glossary — Quick Reference

| Term | What it means |
|---|---|
| LLM | AI language model (Claude, GPT, etc.) |
| IDE | Software for writing code (Cursor, VS Code) |
| Terminal | Text-based command interface |
| npm | Package manager for JavaScript |
| Node.js | Runs JavaScript outside the browser |
| Framework | Pre-built structure for building apps |
| Library | Pre-written code you import and use |
| API | How two software systems communicate |
| Database | Stores your app's persistent data |
| Frontend | What the user sees |
| Backend | The server, logic, and database |
| Deployment | Putting your app live on the internet |
| Git | Tracks code changes over time |
| GitHub | Cloud storage for Git projects |
| Repository | A project tracked by Git |
| Commit | A saved snapshot of your code |
| Branch | A separate version of your code |
| Environment variable | A secret value stored outside your code |
| .gitignore | File telling Git what not to upload |
| Localhost | Your own computer acting as a server |
| Port | A channel your app runs on (e.g. :3000) |

---

## Your First Task

Build this:

---

### ▹ Task: Personal Link Hub App

**What it is:**
A single-page app where a user can display their name, a short bio, and a list of clickable links (like a Linktree clone).

**What it needs to do:**
- Show a profile section with a name and bio at the top
- Display at least 4 links with labels (e.g. Twitter, GitHub, Portfolio, Email)
- Each link opens in a new tab when clicked
- The page looks clean on mobile

**Tech stack to use:**
- React + Vite
- Tailwind CSS for styling
- No database needed — hardcode your own info directly in the code

**Stretch goals (optional, do these if the base is easy):**
- Add a dark/light mode toggle
- Add a simple animation when the page loads
- Deploy it to Vercel with a live URL

**How to start:**
Open Cursor or Replit. Paste this prompt to the AI:

> "Build me a personal link hub app using React + Vite and Tailwind CSS. It should have a profile section at the top with a name and short bio, then a list of 4 clickable links that open in a new tab. The design should be minimal and mobile-friendly. Use a dark background with light text."

Read what it gives you. Run it. Fix what breaks. Make it yours.

---

When you finish, push it to GitHub and send the link.

That's your first shipped project.

⇨ Go build.
