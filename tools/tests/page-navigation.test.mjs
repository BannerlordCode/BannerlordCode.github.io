import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

const ROOT = resolve(import.meta.dirname, '../..');
const fixtures = [];

after(() => {
  for (const dir of fixtures) rmSync(dir, { recursive: true, force: true });
});

function fixture() {
  const dir = mkdtempSync(join(tmpdir(), 'bannerlord-page-navigation-'));
  fixtures.push(dir);
  const content = join(dir, 'content', 'v1.3.15', 'zh', 'api', 'core');
  mkdirSync(content, { recursive: true });
  writeFileSync(join(dir, 'content', '_index.md'), '---\ntitle: Home\n---\n', 'utf8');
  writeFileSync(join(dir, 'content', 'v1.3.15', '_index.md'), '---\ntitle: Version\n---\n', 'utf8');
  writeFileSync(join(dir, 'content', 'v1.3.15', 'zh', '_index.md'), '---\ntitle: Chinese\n---\n', 'utf8');
  writeFileSync(join(dir, 'content', 'v1.3.15', 'zh', 'api', '_index.md'), '---\ntitle: API\n---\n', 'utf8');
  writeFileSync(join(content, '_index.md'), '---\ntitle: Core\n---\n', 'utf8');
  for (const name of ['A', 'B', 'C']) writeFileSync(join(content, `${name}.md`), `---\ntitle: ${name} title\n---\n`, 'utf8');
  const navigation = join(dir, 'navigation.json');
  writeFileSync(navigation, JSON.stringify({ routes: {} }, null, 2), 'utf8');
  return { dir, content: join(dir, 'content'), out: join(dir, 'page-navigation.json'), navigation };
}

function run(args) {
  return spawnSync(process.execPath, ['tools/generate-page-navigation.mjs', ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 30_000,
  });
}

test('page navigation records parent, previous, next, and boundary state', () => {
  const f = fixture();
  const generated = run(['--content-root', f.content, '--out', f.out, '--navigation', f.navigation]);
  assert.equal(generated.status, 0, generated.stderr || generated.stdout);
  const data = JSON.parse(readFileSync(f.out, 'utf8'));
  assert.deepEqual(data.routes['/v1.3.15/zh/api/core/A/'].previous, null);
  assert.equal(data.routes['/v1.3.15/zh/api/core/A/'].next.route, '/v1.3.15/zh/api/core/B/');
  assert.equal(data.routes['/v1.3.15/zh/api/core/B/'].previous.title, 'A title');
  assert.equal(data.routes['/v1.3.15/zh/api/core/B/'].next.title, 'C title');
  assert.deepEqual(data.routes['/v1.3.15/zh/api/core/C/'].next, null);
  assert.equal(data.routes['/v1.3.15/zh/api/core/B/'].parent.route, '/v1.3.15/zh/api/core/');
});

test('page navigation check detects a stale output without rewriting it', () => {
  const f = fixture();
  const args = ['--content-root', f.content, '--out', f.out, '--navigation', f.navigation];
  assert.equal(run(args).status, 0);
  writeFileSync(join(f.content, 'v1.3.15', 'zh', 'api', 'core', 'D.md'), '---\ntitle: D\n---\n', 'utf8');
  const stale = run([...args, '--check']);
  assert.notEqual(stale.status, 0);
  assert.match(`${stale.stdout}\n${stale.stderr}`, /stale|mismatch|diff/i);
});
