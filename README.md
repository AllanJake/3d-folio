# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Deploying to GitHub Pages Notes
1. run `npm run build`
2. remove gh-pages branch on repository
3. force push a subtree to the gh-pages branch using
- `git add dist -f` (-f used because dist folder is in gitignore)
- `git commit -m "your message"`
- `git subtree push --prefix dist origin gh-pages`