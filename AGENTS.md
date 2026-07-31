# AGENTS.md

## Cursor Cloud specific instructions

Static marketing site (Gatsby 2 / React 16). No secrets required to run; Google Analytics /
Facebook Pixel IDs are optional. See `package.json` scripts for canonical commands.

### Node / tooling

- Use Node `v18.20.8` (Gatsby 2 does not support current Node). There is no `.nvmrc` here;
  reuse Node 18. `/exec-daemon/node` (Node 22) shadows nvm on `PATH`, so prepend the nvm bin
  dir (`export PATH="$NVM_DIR/versions/node/v18.20.8/bin:$PATH"`).
- Package manager is `yarn` (v1).
- `NODE_OPTIONS=--openssl-legacy-provider` is required for Gatsby's old webpack. `yarn dev` /
  `yarn start` set it, but plain `yarn develop` does not — export it yourself for `develop`.

### Running

- `NODE_OPTIONS=--openssl-legacy-provider yarn develop` serves the site on :8000.

### Lint gotcha

- `yarn analyze:lint` runs `eslint --ext .jsx --ext .js .` and there is no `.eslintignore`,
  so after `yarn develop`/`yarn build` it also lints Gatsby's generated `.cache/` and
  `public/` output — producing hundreds of spurious errors in bundled files. Lint on a clean
  checkout (before building), or scope it to source, e.g. `npx eslint --ext .jsx --ext .js src`.
