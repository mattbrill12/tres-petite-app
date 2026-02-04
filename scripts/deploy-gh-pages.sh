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

# Copy build folder to temp location
echo "✓ Copying build to temp location..."
cp -r build /tmp/gh-pages-build

echo "✓ Switching to gh-pages branch..."
git checkout gh-pages

echo "✓ Removing old files (preserving node_modules)..."
# Remove all files except node_modules and .git
find . -maxdepth 1 ! -name 'node_modules' ! -name '.git' ! -name '.gitignore' ! -name '.' ! -name '..' -exec rm -rf {} + 2>/dev/null || true

echo "✓ Copying build files from temp..."
cp -r /tmp/gh-pages-build/* .
rm -rf /tmp/gh-pages-build

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
