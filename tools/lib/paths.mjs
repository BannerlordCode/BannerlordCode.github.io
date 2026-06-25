// tools/lib/paths.mjs — Shared path/CLI helpers for repo-root-relative generation tools.
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = join(__dirname, '..', '..');

export function getArg(flag, fallback) {
  const idx = process.argv.indexOf(flag);
  return idx >= 0 && process.argv[idx + 1] ? process.argv[idx + 1] : fallback;
}

export function positionalArgs(exclude = new Set(['--out', '--ver', '--src'])) {
  return process.argv.slice(2).filter((a, i, arr) => !exclude.has(a) && !exclude.has(arr[i - 1]));
}
