import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';

function relativePath(root, filePath) {
  return relative(root, filePath).replace(/\\/g, '/');
}

export function resolveOutputPath(root, outputPath, fallback) {
  return outputPath ? resolve(root, outputPath) : fallback;
}

export function fingerprintFiles(root, files) {
  const hash = createHash('sha256');
  for (const filePath of [...files].sort((a, b) => relativePath(root, a).localeCompare(relativePath(root, b)))) {
    hash.update(relativePath(root, filePath));
    hash.update('\0');
    hash.update(readFileSync(filePath));
    hash.update('\0');
  }
  return hash.digest('hex');
}

export function gitSha(root) {
  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

export function reportMetadata({ root, scope, version, language, files, command = process.argv.slice(1).join(' ') }) {
  return {
    scope,
    version,
    language,
    sourceFingerprint: fingerprintFiles(root, files),
    gitSha: gitSha(root),
    command,
  };
}

function comparable(value) {
  if (Array.isArray(value)) return value.map(comparable);
  if (!value || typeof value !== 'object') return value;
  const result = {};
  for (const key of Object.keys(value).sort()) {
    if (key === 'generatedAt' || key === 'command') continue;
    result[key] = comparable(value[key]);
  }
  return result;
}

export function reportsEqual(actual, expected) {
  return JSON.stringify(comparable(actual)) === JSON.stringify(comparable(expected));
}

export function checkReport(path, value) {
  if (!existsSync(path)) {
    console.error(`Check target not found: ${path}`);
    return false;
  }
  let expected;
  try {
    expected = JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    console.error(`Check target is not valid JSON: ${path}: ${error.message}`);
    return false;
  }
  if (!reportsEqual(value, expected)) {
    console.error(`Report check failed: ${path}`);
    return false;
  }
  console.log(`Report check passed: ${path}`);
  return true;
}
