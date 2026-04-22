# 🧱 CS Lego Sections Library

A scalable, reusable **React + TypeScript section library** built for high-performance landing pages.

Designed using a **Lego-style system** — mix, match, and deploy sections fast.

---

## 🚀 Overview

This project is a modular UI system where each page section (Hero, About, Services, etc.) contains **multiple design variants**.

Instead of designing pages from scratch, you can:

* Pick a section category
* Choose a variant (1–5)
* Combine sections into a full page

---

## 🧠 Philosophy

> Build once. Reuse infinitely.

* **Sections = Building Blocks**
* **Variants = Design Options**
* **Pages = Combinations of Sections**

---

## 📁 Folder Structure

```text
/src
  /sections
    /hero
      HeroSection1.tsx
      HeroSection2.tsx
      ...
    /about
      AboutSection1.tsx
      ...
    /services
      ServicesSection1.tsx
      ...
  
  /assets
    /images
    /icons
    /logos

  /styles
  /preview
```

---

## 🧩 Section System

Each section category includes:

* 5 reusable variants
* Clean component structure
* Independent styling
* Ready-to-use layout patterns

Example:

```tsx
import { HeroSection1 } from "@/sections/hero";

export default function Page() {
  return <HeroSection1 />;
}
```

---

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KielGraphics1798/cs-lego-sections-library.git
cd cs-lego-sections-library
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run development server

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

## 👀 Preview System

The project includes a local preview system where you can:

* Switch between section categories
* View all 5 variants
* Test responsiveness
* Quickly iterate designs

---

## 🎨 Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS

---

## ⚡ Use Cases

* Landing page builders
* Marketing funnels
* Agency client projects
* Rapid prototyping
* Design systems

---

## 🔧 Customization

Each section is built to be:

* Easily editable
* Component-based
* Tailwind-powered
* Production-ready

You can:

* Replace text/images
* Adjust spacing
* Add props for dynamic content

---

## 🧱 Future Improvements

* Global theme system
* Dark mode support
* CMS integration
* Drag-and-drop builder UI
* Component documentation

---

## 👤 Author

**Kiel Ragay**
Frontend System Builder / Designer

---

## ⭐ Support

If this project helps you:

👉 Star the repo
👉 Fork and customize
👉 Build faster 🚀


https://docs.google.com/document/d/1xS6U-dvJpyJaOOKOlZjhOndLZ__4WF6qiMjS-FYCdZM/edit?usp=sharing
