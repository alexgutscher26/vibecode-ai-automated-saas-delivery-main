## Root Cause
- Next config hardcodes a Turbopack loader path that does not exist locally.
- Reference found in `next.config.ts:4` and applied in `next.config.ts:20-26`:
  - `const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');`
  - `turbopack.rules["*.{jsx,tsx}"].loaders = [LOADER]`
- `src/visual-edits/` and `component-tagger-loader.js` are missing everywhere in the repo.
- Dockerfile assumes a `visual-edits/` folder exists at repo root and moves it to `src/visual-edits`, but that folder is not present locally.

## Plan
1. Guard the loader configuration in `next.config.ts` so dev builds do not error when the file is absent.
   - Import `fs` and only add the rule when `fs.existsSync(LOADER)` is true.
   - Optional: additionally gate behind an env flag `VISUAL_EDITS=1` to enable the feature explicitly.
2. Provide a minimal no-op loader as a safe fallback (only if the feature is desired now).
   - Create `src/visual-edits/component-tagger-loader.js` that returns the source unchanged.
   - This unblocks builds while preserving the rule for future enhancement.
3. Align Dockerfile with the guarded behavior.
   - Make the copy/move of `visual-edits/` conditional or update comments to reflect optional presence.
4. Verification.
   - Run `npm run dev` and confirm the dev server starts without the "Cannot find module ... component-tagger-loader.js" error.
   - Visit `/dashboard` to ensure `src/app/dashboard/page.tsx` renders.
   - If `VISUAL_EDITS=1` is set and the no-op loader exists, confirm no regressions.

## Changes (Targeted)
- `next.config.ts`: add `fs.existsSync` guard (and optional `process.env.VISUAL_EDITS` flag).
- `src/visual-edits/component-tagger-loader.js` (optional): add minimal no-op implementation.
- `Dockerfile` (optional): clarify or conditionally handle `visual-edits/` copy.

## Risks & Notes
- Disabling the loader when missing may temporarily disable any visual-edit tagging functionality; builds will proceed normally.
- The no-op loader keeps the rule active without behavior, avoiding future config churn.
- If later you add the real `visual-edits` implementation, the guard will automatically enable it with `VISUAL_EDITS=1` or presence-based detection.