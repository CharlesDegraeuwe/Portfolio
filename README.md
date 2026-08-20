# Portfolio

My personal site. Live at [charlesdegraeuwe.com](https://charlesdegraeuwe.com).

Built with Astro. React handles the interactive bits, Tailwind v4 handles styling. 
Project write-ups live as markdown files loaded through Astro content collections.
Super simple, very tasty!
## Stack

- Astro (static output)
- React (only where hydration is needed)
- Tailwind CSS v4
- Content collections for the `/work` articles

## Structure

```
src/
  pages/        routes
  layouts/      page shell (head, header, footer)
  components/   header, work list, table of contents
  content/work/ one markdown file per project
  styles/       global.css
```

Adding a project is just dropping a new `.md` file in `src/content/work/`. It shows up in the list and gets its own page.

## Commands

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # build to ./dist
pnpm preview  # preview the build
```
