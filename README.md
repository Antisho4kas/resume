# resume

Personal résumé website in German, English and Russian. Stage 0 provides the application scaffold and a placeholder page in each language.

The idea is a "résumé with proofs": the page reads like a classic one-page CV, and every skill can be expanded into live evidence, such as the site's own API, its test and build reports, or the protected contact form.

## Run locally

Use Node.js 22 (22.13.0 or newer within that major) and the pnpm version pinned in `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000/de`, `/en` or `/ru`. The scaffold needs no environment variables. Language detection and the root redirect are planned for stage 3.

See [AGENTS.md](AGENTS.md#команды) for the lint, build and test commands.

## Documentation

The planning documents are written in Russian.

- [docs/PLAN.md](docs/PLAN.md): concept, site structure and stages
- [docs/CONTACT_FORM.md](docs/CONTACT_FORM.md): contact form requirements and protection
- [docs/DESIGN.md](docs/DESIGN.md): design direction and references
- [docs/CONTENT.md](docs/CONTENT.md): content model and content rules
- [docs/DECISIONS.md](docs/DECISIONS.md): decisions and verified technical facts
- [AGENTS.md](AGENTS.md): working rules for contributors and coding agents

## Status

Stage 0 (project scaffold) is next. The stage list is in the plan.
