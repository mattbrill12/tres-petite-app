# Très Petite LLC Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment to GitHub Pages

### How It Works

GitHub Pages is configured to serve from the `gh-pages` branch (`/ (root)`). The site is live at [trespetitellc.com](http://trespetitellc.com).

### Deploying

From the `main` branch with no uncommitted changes, run:

```bash
npm run deploy
```

This runs `scripts/deploy-gh-pages.sh`, which will:
1. Build the production bundle (`npm run build`)
2. Switch to the `gh-pages` branch
3. Replace all files with the new build output
4. Add the `CNAME` file for the custom domain
5. Commit and force-push to `gh-pages`
6. Switch back to `main`

The site will be updated at [trespetitellc.com](http://trespetitellc.com) within 1–2 minutes.

**Note:**
- You must be on the `main` branch with a clean working tree to deploy
- GitHub Pages is configured to: Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` → Folder: `/ (root)`
- The custom domain `trespetitellc.com` is set in GitHub Pages settings and written to `CNAME` by the deploy script

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).