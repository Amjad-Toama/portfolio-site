# 🌐 Personal Portfolio Website

A modern, responsive single-page portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
Deployed using **Firebase Hosting** with GitHub Actions for automated builds and deployments.

---

## 🚀 Features

- ⚡ Blazing fast build and dev experience with Vite
- 🎨 Tailwind CSS for clean and responsive UI
- 📁 Dynamic project showcase using static data
- 📱 Fully responsive on all devices
- 🌙 Light/Dark mode ready structure
- 🔄 Continuous Deployment with GitHub + Firebase

---

## 🛠 Tech Stack

| Tool            | Purpose                            |
|-----------------|-------------------------------------|
| [React](https://reactjs.org/)       | UI Library                         |
| [Vite](https://vitejs.dev/)         | Build Tool + Dev Server            |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS Framework        |
| [Firebase Hosting](https://firebase.google.com/products/hosting) | Fast & secure static hosting       |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automation                   |

---

## 📦 Getting Started

Clone and run the project locally:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🔧 Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with the static output for deployment.

---

## 🌐 Deployment

This project uses **Firebase Hosting** with GitHub integration.

### 🚀 Deploy Manually

```bash
firebase deploy
```

> ⚠️ Be sure to run `npm run build` before deploying manually.

### 🔄 Auto-Deploy via GitHub

Firebase and GitHub Actions are configured for continuous deployment.  
Every push to the `main` branch triggers:

1. `npm install`
2. `npm run build`
3. `firebase deploy`

Workflow file: `.github/workflows/firebase-hosting.yml`

---

## 🔗 Live Demo

👉 [https://your-project-id.web.app](https://your-project-id.web.app)  
*(Replace with your actual Firebase Hosting URL)*

---

## 🖼 Screenshots

<!-- Add screenshots or GIFs of your site here -->
*Coming soon*

---

## 📁 Project Structure

```
src/
├── assets/        # Images and media
├── components/    # Reusable UI components
├── pages/         # Page components (Home, About, Projects, Contact)
├── data/          # Static project/socials/skills info
├── hooks/         # Custom reusable React hooks
├── context/       # Global app context (e.g., theme)
├── App.jsx        # App entry point with routing
└── main.jsx       # React DOM root setup
```

---

## 🙏 Credits

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Amjad Toama**  
[GitHub](https://github.com/Amjad-Toama) • [LinkedIn](https://www.linkedin.com/in/amjadto/)
