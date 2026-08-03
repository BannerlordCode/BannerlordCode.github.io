import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const ROOT = resolve(import.meta.dirname, '../..');
const tempRoots = [];

after(() => {
  for (const dir of tempRoots) rmSync(dir, { recursive: true, force: true });
});

function tempRoot() {
  const dir = mkdtempSync(join(tmpdir(), 'bannerlord-report-cli-'));
  tempRoots.push(dir);
  return dir;
}

function run(script, args) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 120_000,
  });
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

test('scoped handwritten coverage requires an explicit output path', () => {
  // Break caught: a scoped audit must not silently overwrite canonical evidence.
  const result = run('tools/handwritten-coverage.mjs', [
    '--root',
    'content/v1.3.15/zh/api/core',
  ]);
  assert.notEqual(result.status, 0);
  assert.match(`${result.stdout}\n${result.stderr}`, /--out|explicit/i);
});

test('scoped R1 coverage requires explicit primary and gap outputs', () => {
  // Break caught: a scoped R1 run must not write either fixed canonical report.
  const result = run('tools/r1-coverage-report.mjs', [
    '--api-root',
    'content/v1.3.15/zh/api/core',
  ]);
  assert.notEqual(result.status, 0);
  assert.match(`${result.stdout}\n${result.stderr}`, /--out|explicit/i);
});

test('explicit R1 outputs include reproducibility metadata and preserve canonical files', () => {
  // Break caught: scoped evidence must be isolated and self-describing.
  const dir = tempRoot();
  const out = join(dir, 'r1.json');
  const gapOut = join(dir, 'gaps.json');
  const canonical = [
    'tools/data/r1-coverage-report.json',
    'tools/data/r1-gap-full.json',
  ];
  const before = canonical.map(sha256);
  const result = run('tools/r1-coverage-report.mjs', [
    '--version', '1.3.15', '--lang', 'zh', '--api-root', 'content/v1.3.15/zh/api/core',
    '--out', out, '--gap-out', gapOut,
  ]);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.equal(existsSync(out), true);
  assert.equal(existsSync(gapOut), true);
  const report = JSON.parse(readFileSync(out, 'utf8'));
  for (const field of ['scope', 'version', 'language', 'sourceFingerprint', 'gitSha', 'command']) {
    assert.ok(field in report.meta, `missing report.meta.${field}`);
  }
  assert.deepEqual(canonical.map(sha256), before);
});

test('check mode compares an explicit report without rewriting it', () => {
  // Break caught: reproducibility checks must be read-only and ignore volatile metadata.
  const dir = tempRoot();
  const out = join(dir, 'handwritten.json');
  const args = ['--root', 'content/v1.3.15/zh/api/core', '--out', out];
  const first = run('tools/handwritten-coverage.mjs', args);
  assert.equal(first.status, 0, first.stderr || first.stdout);
  const beforeHash = sha256(out);
  const beforeMtime = statSync(out).mtimeMs;
  const checked = run('tools/handwritten-coverage.mjs', [...args, '--check']);
  assert.equal(checked.status, 0, checked.stderr || checked.stdout);
  assert.equal(sha256(out), beforeHash);
  assert.equal(statSync(out).mtimeMs, beforeMtime);
});

test('require-complete exits nonzero when R1 has gaps', () => {
  // Break caught: an incomplete coverage report must be unusable as a completion gate.
  const dir = tempRoot();
  const result = run('tools/r1-coverage-report.mjs', [
    '--version', '1.3.15', '--lang', 'zh', '--api-root', 'content/v1.3.15/zh/api/core',
    '--out', join(dir, 'r1.json'), '--gap-out', join(dir, 'gaps.json'), '--require-complete',
  ]);
  assert.notEqual(result.status, 0);
  assert.match(`${result.stdout}\n${result.stderr}`, /gap|incomplete/i);
});

test('inventory accepts an explicit output and a read-only check', () => {
  // Break caught: inventory refreshes must not clobber canonical JSON during scoped evidence work.
  const dir = tempRoot();
  const out = join(dir, 'inventory.json');
  const canonical = 'tools/data/type-inventory.json';
  const before = sha256(canonical);
  const first = run('tools/generate-inventory.mjs', ['--out', out]);
  assert.equal(first.status, 0, first.stderr || first.stdout);
  assert.equal(existsSync(out), true);
  const inventory = JSON.parse(readFileSync(out, 'utf8'));
  assert.equal(
    inventory['1.3.15'].zh['TaleWorlds.CampaignSystem.MapEvents'].MapEvent.pagePath,
    'content/v1.3.15/zh/api/campaign-ext/MapEvent.md'
  );
  assert.equal(
    inventory['1.3.15'].zh['TaleWorlds.CampaignSystem.Settlements'].Town.pagePath,
    'content/v1.3.15/zh/api/campaign-ext/Town.md'
  );
  const checked = run('tools/generate-inventory.mjs', ['--out', out, '--check']);
  assert.equal(checked.status, 0, checked.stderr || checked.stdout);
  assert.equal(sha256(canonical), before);
});

test('package scripts expose the four audit entry points', () => {
  // Break caught: CI and local gates need stable package-level commands.
  const packageJson = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
  for (const name of ['audit:coverage', 'audit:quality', 'audit:links', 'test:tools']) {
    assert.equal(typeof packageJson.scripts[name], 'string');
  }
  assert.match(packageJson.scripts['test:tools'], /tools[\\/]tests[\\/][^ ]+\.test\.mjs/);
  assert.match(packageJson.scripts['test:tools'], /retired-generators\.test\.mjs/);
  assert.match(packageJson.scripts['test:tools'], /audit-doc-quality\.test\.mjs/);
  assert.match(packageJson.scripts['test:tools'], /audit-links\.test\.mjs/);
  assert.doesNotMatch(packageJson.scripts['test:tools'], /node --test tools[\\/]tests\s*$/);
});
