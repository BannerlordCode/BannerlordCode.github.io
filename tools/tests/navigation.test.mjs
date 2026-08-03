import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const ROOT = resolve(import.meta.dirname, '../..');
const fixtures = [];

after(() => {
  for (const dir of fixtures) rmSync(dir, { recursive: true, force: true });
});

function fixture() {
  const dir = mkdtempSync(join(tmpdir(), 'bannerlord-navigation-'));
  fixtures.push(dir);
  const content = join(dir, 'content');
  mkdirSync(join(content, 'v1.3.15', 'zh', 'api', 'core'), { recursive: true });
  writeFileSync(join(content, '_index.md'), '---\ntitle: Home\n---\n', 'utf8');
  writeFileSync(join(content, 'v1.3.15', '_index.md'), '---\ntitle: Version\n---\n', 'utf8');
  writeFileSync(join(content, 'v1.3.15', 'zh', '_index.md'), '---\ntitle: Chinese\n---\n', 'utf8');
  writeFileSync(join(content, 'v1.3.15', 'zh', 'api', '_index.md'), '---\ntitle: API\n---\n', 'utf8');
  writeFileSync(join(content, 'v1.3.15', 'zh', 'api', 'core', '_index.md'), '---\ntitle: Core\n---\n', 'utf8');
  writeFileSync(join(content, 'v1.3.15', 'zh', 'api', 'core', 'Game.md'), '---\ntitle: Game\n---\n', 'utf8');
  return { dir, content, out: join(dir, 'section-tree.json') };
}

function run(script, args) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 30_000,
  });
}

test('section-tree check is isolated and detects a stale generated file', () => {
  const f = fixture();
  const generated = run('tools/generate-section-tree.mjs', [
    '--content-root', f.content,
    '--out', f.out,
  ]);
  assert.equal(generated.status, 0, generated.stderr || generated.stdout);
  const checked = run('tools/generate-section-tree.mjs', [
    '--content-root', f.content,
    '--out', f.out,
    '--check',
  ]);
  assert.equal(checked.status, 0, checked.stderr || checked.stdout);

  writeFileSync(join(f.content, 'v1.3.15', 'zh', 'api', 'core', 'Hero.md'), '---\ntitle: Hero\n---\n', 'utf8');
  const stale = run('tools/generate-section-tree.mjs', [
    '--content-root', f.content,
    '--out', f.out,
    '--check',
  ]);
  assert.notEqual(stale.status, 0);
  assert.match(`${stale.stdout}\n${stale.stderr}`, /stale|diff|mismatch/i);
  assert.equal(JSON.parse(readFileSync(f.out, 'utf8')).byRoute['/v1.3.15/zh/api/core/'].pages, 1);
});

test('navigation audit accepts reciprocal routes and rejects section count drift', () => {
  const f = fixture();
  const generated = run('tools/generate-section-tree.mjs', [
    '--content-root', f.content,
    '--out', f.out,
  ]);
  assert.equal(generated.status, 0, generated.stderr || generated.stdout);

  const nav = join(f.dir, 'navigation.json');
  writeFileSync(nav, JSON.stringify({
    routes: {
      '/': { parent: null, children: ['/v1.3.15/'] },
      '/v1.3.15/': { parent: '/', children: ['/v1.3.15/zh/'] },
      '/v1.3.15/zh/': { parent: '/v1.3.15/', children: ['/v1.3.15/zh/api/'] },
      '/v1.3.15/zh/api/': { parent: '/v1.3.15/zh/', children: ['/v1.3.15/zh/api/core/'] },
      '/v1.3.15/zh/api/core/': { parent: '/v1.3.15/zh/api/', children: [] },
    },
  }, null, 2), 'utf8');

  const ok = run('tools/audit-navigation.mjs', [
    '--content-root', f.content,
    '--section-tree', f.out,
    '--navigation', nav,
  ]);
  assert.equal(ok.status, 0, ok.stderr || ok.stdout);
  assert.match(ok.stdout, /NAVIGATION_OK/);

  const tree = JSON.parse(readFileSync(f.out, 'utf8'));
  tree.byRoute['/v1.3.15/zh/api/core/'].pages = 99;
  writeFileSync(f.out, JSON.stringify(tree, null, 2), 'utf8');
  const bad = run('tools/audit-navigation.mjs', [
    '--content-root', f.content,
    '--section-tree', f.out,
    '--navigation', nav,
  ]);
  assert.notEqual(bad.status, 0);
  assert.match(`${bad.stdout}\n${bad.stderr}`, /pages|count|mismatch/i);
});
