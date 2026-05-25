# Easy install — 7 steps

This is the **complete project** with every change applied. Follow these
steps to install it cleanly.

---

## 1. Back up your current project

Copy your current `mazingira-app` folder and rename the copy to
`mazingira-app-backup`. If anything goes wrong, you have the original.

## 2. Save your images

From your current project, copy these files somewhere safe (your Desktop
is fine):

- `public/images/coat-of-arms.png`
- `public/images/hero1.jpg`, `hero2.jpg`, `hero3.jpg`, `hero4.jpg`

## 3. Delete your current project

Delete the entire `mazingira-app` folder (you have the backup from step 1).

## 4. Unzip this project

Unzip `mazingira-app-complete.zip`. You'll get a folder called
`mazingira-app`. Put it where the old one was.

## 5. Restore your images

Copy your images back into the new project's `public/images/` folder:

- `coat-of-arms.png`
- `hero1.jpg`, `hero2.jpg`, `hero3.jpg`, `hero4.jpg`

## 6. Install and run

Open a terminal in the `mazingira-app` folder. Run these one at a time:

```
npm install
```

(takes a couple of minutes)

```
cp .env.example .env.local
```

```
npm run dev
```

## 7. Open it

Go to **http://localhost:3000** in your browser.

Done.

---

## If something looks wrong

**Site is broken / images missing** → You skipped step 5. Put your images
back in `public/images/`.

**Red errors in terminal** → Delete `node_modules` folder and run
`npm install` again.

**Cards don't animate / tabs don't switch color** → Hard-refresh the
browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows).

**Map first load is slow** → Expected. It's fetching Tanzania boundaries
from geoBoundaries.org on first request. Cached for 24 hours after that.

**Want to use your real logo** → Replace
`public/images/emazingira-logo.svg` with your own. Keep the same filename.

**Want to roll back** → Delete the new project folder and rename
`mazingira-app-backup` back to `mazingira-app`.

---

That's everything.
