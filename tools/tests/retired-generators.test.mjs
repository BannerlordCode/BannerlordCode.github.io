import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../..');

// These tools can mutate product Markdown and must fail closed before doing
// any work. Missing legacy names are intentionally not runnable entry points.
const RETIRED = [
  'generate-class-docs.mjs',
  'gen-class-ref.mjs',
  'batch-gen-stubs.mjs',
  'enhance-stubs.mjs',
  'regenerate-method-purposes.mjs',
  'normalize-method-purposes.mjs',
  'improve-stub-quality.mjs',
  'normalize-generated-examples.mjs',
  'gen-catalog-stubs.mjs',
  'fix-entry-examples.mjs',
  'fix-placeholder-examples.mjs',
  'fix-zh-execute-placeholder.mjs',
  'gen-actions-index.mjs',
];

test('every existing retired body writer fails closed at runtime', () => {
  const present = RETIRED.filter((name) => existsSync(join(ROOT, 'tools', name)));
  assert.ok(present.length >= 10, 'retirement smoke set unexpectedly shrank');

  for (const name of present) {
    const result = spawnSync(process.execPath, [join('tools', name)], {
      cwd: ROOT,
      encoding: 'utf8',
      timeout: 30_000,
      env: { ...process.env, BANNERLORD_ALLOW_RETIRED_BODY_GEN: undefined },
    });
    const output = `${result.stdout}\n${result.stderr}`;
    assert.notEqual(result.status, 0, `${name} unexpectedly ran successfully`);
    assert.match(output, /RETIRED:/, `${name} did not identify its retirement`);
    assert.match(output, /Handwritten docs only/i, `${name} did not name the policy`);
  }
});
