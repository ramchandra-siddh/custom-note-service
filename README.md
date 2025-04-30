# 📝 Custom Note Service

A lightweight, local-first note-taking app built with **React 20**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Features

- React 20 with modern hooks and JSX
- Vite for fast development and builds
- Notes stored in browser `localStorage`
- Tailwind CSS for utility-first styling
- Simple "Add" / "View" toggle navigation
- Form validation and save feedback

---

## 🛠️ Setup & Run

cd custom-note-service
npm install # Install dependencies
npm run dev # Start local dev server

npm install -D tailwindcss@3 postcss autoprefixer #Tailwind was installed
npx tailwindcss init -p #Tailwind configured

npm run build # Build for production
npm run preview #review production build
npm run lint #Run linter

Storage: LocalStorage keeps notes persisted without backend

Components: Separation of Add/View keeps logic modular

State: useState/useEffect provides local control with minimal code

Styling: Tailwind enables fast, scalable UI with no custom CSS

Navigation: View toggling by state avoids React Router complexity

✍️ Author
Created with ❤️ by Ramchandra Siddh

Would you like this saved as a `README.md` file to include directly in your project folder?
