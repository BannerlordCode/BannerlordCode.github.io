import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const fixtures = [];

after(() => {
  for (const dir of fixtures) rmSync(dir, { recursive: true, force: true });
});

function fixture() {
  const dir = mkdtempSync(join(ROOT, 'tools', 'links-fixture-'));
  fixtures.push(dir);
  const pageDir = join(dir, 'v1.3.15', 'zh', 'api', 'core');
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, '_index.md'), '# Core\n\n[Missing](./DoesNotExist)\n', 'utf8');
  return dir;
}

test('link audit exits nonzero when an isolated content root has broken links', () => {
  const result = spawnSync(process.execPath, ['tools/audit-links.mjs'], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 30_000,
    env: { ...process.env, AUDIT_CONTENT_ROOT: fixture() },
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /BROKEN_LINKS=1/);
});

test('repository link audit has no broken links', () => {
  const result = spawnSync(process.execPath, ['tools/audit-links.mjs'], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 120_000,
    env: { ...process.env },
  });
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /BROKEN_LINKS=0/);
});
