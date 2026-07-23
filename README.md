# SMILE Research Lab website

English-first research lab website for the **Smart Movement for Innovative Learning Environment** at Ewha Womans University.

## Edit the content

For a step-by-step Korean guide to editing through the GitHub website, see [`EDITING_GUIDE_KO.md`](EDITING_GUIDE_KO.md).

Most recurring content is kept in one file:

- `content/site-content.ts` — lab details, research tracks, publications, awards, people, and news
- `content/award-details.ts` — expandable descriptions for each award
- `app/page.tsx` — home page sections and previews
- `app/components.tsx` — shared navigation, footer, page headers, and calls to action
- `app/research`, `app/people`, `app/publications`, `app/awards`, `app/news`, `app/contact` — menu pages
- `app/globals.css` — visual system and responsive layout

To add a publication, team member, or news item, add one object to the corresponding array in `content/site-content.ts`. The relevant page and home-page preview will update automatically.

## Site structure

- Home
- Research
- People
- Publications
- Awards
- News
- Join & Contact

## Run locally

```bash
npm install
npm run dev
```

## Publish with GitHub Pages

The included workflow at `.github/workflows/deploy-pages.yml` creates a static export and publishes it to GitHub Pages.

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push a change to `main`, or run the workflow manually from the **Actions** tab.

The workflow automatically handles a project repository path such as `username.github.io/smile-research-lab/`.

## Before making the site public

Review the team list, confirm English romanization preferences, add optional profile links, and verify the final selection of publications.
