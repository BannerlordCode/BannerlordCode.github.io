import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');
const fixtures = [];

after(() => {
  for (const dir of fixtures) rmSync(dir, { recursive: true, force: true });
});

function fixture(markdown) {
  const dir = mkdtempSync(join(ROOT, 'tools', 'quality-fixture-'));
  fixtures.push(dir);
  const pageDir = join(dir, 'v1.3.15', 'zh', 'api', 'engine');
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, 'GauntletLayer.md'), markdown, 'utf8');
  return dir;
}

function run(dir) {
  return spawnSync(process.execPath, ['tools/audit-doc-quality.mjs', dir], {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: 30_000,
  });
}

const header = `---\ntitle: "GauntletLayer"\ndescription: "A layer."\n---\n# GauntletLayer\n\n**Type:** public class GauntletLayer : ScreenLayer\n\n## Overview\nA layer that hosts a movie.\n\n`;

test('quality audit accepts a constructor used in a real lifecycle example', () => {
  const dir = fixture(`${header}### OnInitialize\n\n\`\`\`csharp\n_layer = new GauntletLayer("MyModPanel", 100, false);\n_layer.LoadMovie("MyModPanel", _vm);\nScreenManager.TopScreen.AddLayer(_layer);\n\`\`\`\n`);
  const result = run(dir);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Scanned 1 files/);
  assert.match(result.stdout, /Blockers: 0/);
});

test('quality audit still blocks a constructor-only placeholder example', () => {
  const dir = fixture(`${header}### OnInitialize\n\n\`\`\`csharp\nvar layer = new GauntletLayer("Example", 1);\n\`\`\`\n`);
  const result = run(dir);
  assert.notEqual(result.status, 0);
  assert.match(`${result.stdout}\n${result.stderr}`, /placeholder-(?:example|method-example)/);
});
