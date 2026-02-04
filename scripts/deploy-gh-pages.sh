#!/bin/bash

# Deployment script for GitHub Pages
# This script builds the project and deploys to gh-pages branch

set -e  # Exit on error

echo "🚀 Starting deployment to gh-pages..."

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)

# Ensure we're on main and everything is committed
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "❌ Error: You must be on the main branch to deploy"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "❌ Error: You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

echo "✓ Building production bundle..."
npm run build

echo "✓ Switching to gh-pages branch..."
git checkout gh-pages

echo "✓ Removing old files..."
git rm -rf . 2>/dev/null || true
git clean -fdx

echo "✓ Copying build files from main..."
git checkout origin/main -- static index.html asset-manifest.json manifest.json robots.txt site.webmanifest favicon.ico favicon.html logo.png logo192.png logo512.png beverage-bar-1.png beverage-bar-2.png beverage-bar-3.png hot-chocolate-bar-1.png hot-chocolate-bar-2.png hot-chocolate-bar-3.png mobile-charcuterie-cart-1.png mobile-charcuterie-cart-2.png mobile-charcuterie-cart-3.png _redirects landing.png main.png send-email.php

echo "✓ Adding CNAME..."
echo "test.trespetitellc.com" > CNAME

echo "✓ Committing changes..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "✓ Pushing to GitHub..."
git push origin gh-pages --force

echo "✓ Returning to main branch..."
git checkout main

echo "🎉 Deployment complete!"
echo "Your site will be live at https://test.trespetitellc.com in 1-2 minutes"
