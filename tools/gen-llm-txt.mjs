import { promises as fs, existsSync } from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = 'content';
const OUTPUT_DIR = 'public';
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'llm.txt');
const CONFIG_FILE = 'config.toml';
const FRONTMATTER_HEAD_BYTES = 32768;
const CONCURRENCY = 50;

async function readConfigBaseUrl() {
  const text = await fs.readFile(CONFIG_FILE, 'utf8');
  const match = text.match(/^base_url\s*=\s*["']([^"']+)["']/m);
  return match ? match[1].replace(/\/+$/, '') : 'https://bannerlordcode.github.io';
}

async function readFileHead(absPath, byteLimit) {
  const handle = await fs.open(absPath, 'r');
  try {
    const buf = Buffer.alloc(byteLimit);
    const { bytesRead } = await handle.read(buf, 0, byteLimit, 0);
    return buf.toString('utf8', 0, bytesRead);
  } finally {
    await handle.close();
  }
}

function parseFrontmatter(text) {
  const match = text.match(/^(---|\+\+\+)(?:\r?\n)([\s\S]*?)(?:\r?\n)\1(?:\r?\n)?/);
  if (!match) return { title: '', description: '' };
  const fm = match[2];
  return {
    title: extractStringValue(fm, 'title'),
    description: extractStringValue(fm, 'description'),
  };
}

function extractStringValue(frontmatter, key) {
  const regex = new RegExp(`^${key}\\s*[:=]\\s*("([^"]*)"|'([^']*)'|(.+?))$`, 'm');
  const m = frontmatter.match(regex);
  if (!m) return '';
  return (m[2] ?? m[3] ?? m[4] ?? '').trim();
}

function toPosixRel(filePath) {
  return path.posix.normalize(filePath.replace(/\\/g, '/'));
}

function contentRelToUrl(rel) {
  const dir = path.posix.dirname(rel) === '.' ? '' : path.posix.dirname(rel);
  const baseName = path.posix.basename(rel, '.md');
  const prefix = dir ? `/${dir}` : '';
  if (baseName === '_index') return `${prefix}/`;
  return `${prefix}/${baseName}/`;
}

function mdEscapeLinkText(text) {
  return String(text).replace(/\\/g, '\\\\').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

function mdEscapePlain(text) {
  return String(text).replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

function sortByTitle(a, b) {
  const ta = String(a.title || a.slug || a.name || '').toLowerCase();
  const tb = String(b.title || b.slug || b.name || '').toLowerCase();
  if (ta < tb) return -1;
  if (ta > tb) return 1;
  return 0;
}

function dirNameSegment(dirPath) {
  if (!dirPath) return '';
  const parts = dirPath.split('/').filter(Boolean);
  return parts[parts.length - 1] || '';
}

async function mapConcurrent(items, fn, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    results.push(...(await Promise.all(batch.map(fn))));
  }
  return results;
}

async function main() {
  if (!existsSync(CONTENT_DIR)) {
    console.error(`Content directory "${CONTENT_DIR}" not found`);
    process.exit(1);
  }

  const baseUrl = await readConfigBaseUrl();
  const rawFiles = await fs.readdir(CONTENT_DIR, { recursive: true });
  const mdFiles = rawFiles
    .filter((f) => typeof f === 'string' && f.endsWith('.md'))
    .map(toPosixRel)
    .sort();

  const nodes = new Map();
  function ensureNode(dirPath) {
    if (!nodes.has(dirPath)) {
      nodes.set(dirPath, {
        dirPath,
        indexMeta: null,
        pages: [],
        children: [],
      });
    }
    return nodes.get(dirPath);
  }

  const entries = await mapConcurrent(mdFiles, async (rel) => {
    const absPath = path.join(CONTENT_DIR, rel);
    const headText = await readFileHead(absPath, FRONTMATTER_HEAD_BYTES);
    const { title, description } = parseFrontmatter(headText);
    const dirPath = path.posix.dirname(rel) === '.' ? '' : path.posix.dirname(rel);
    const slug = path.posix.basename(rel, '.md');
    return {
      rel,
      title: title.trim() || slug,
      description: description.trim(),
      slug,
      isIndex: slug === '_index',
      url: `${baseUrl}${contentRelToUrl(rel)}`,
      dirPath,
    };
  }, CONCURRENCY);

  for (const meta of entries) {
    const node = ensureNode(meta.dirPath);
    if (meta.isIndex) {
      node.indexMeta = meta;
    } else {
      node.pages.push(meta);
    }
  }

  for (const dirPath of [...nodes.keys()]) {
    if (dirPath === '') continue;
    const parentPath = path.posix.dirname(dirPath);
    ensureNode(parentPath === '.' ? '' : parentPath);
  }

  for (const [dirPath, node] of nodes) {
    if (dirPath === '') continue;
    const parentPath = path.posix.dirname(dirPath);
    const parent = nodes.get(parentPath === '.' ? '' : parentPath);
    if (parent && !parent.children.includes(node)) {
      parent.children.push(node);
    }
  }

  function renderNode(node, depth) {
    const lines = [];
    const baseIndent = '  '.repeat(depth);

    if (node.dirPath !== '') {
      const meta = node.indexMeta;
      const title = (meta && meta.title) || dirNameSegment(node.dirPath);
      const desc = meta ? meta.description : '';
      const url = meta ? meta.url : `${baseUrl}/${node.dirPath}/`;
      const link = `[${mdEscapeLinkText(title)}](${url})`;
      const descPart = desc ? ` — ${mdEscapePlain(desc)}` : '';
      lines.push(`${baseIndent}- **${mdEscapeLinkText(title)}** ${link}${descPart}`);
    } else if (node.indexMeta) {
      const meta = node.indexMeta;
      const link = `[${mdEscapeLinkText(meta.title)}](${meta.url})`;
      const descPart = meta.description ? ` — ${mdEscapePlain(meta.description)}` : '';
      lines.push(`${baseIndent}- ${link}${descPart}`);
    }

    const childDepth = node.dirPath === '' ? 0 : depth + 1;
    const childIndent = '  '.repeat(childDepth);

    for (const page of [...node.pages].sort(sortByTitle)) {
      const link = `[${mdEscapeLinkText(page.title)}](${page.url})`;
      const descPart = page.description ? ` — ${mdEscapePlain(page.description)}` : '';
      lines.push(`${childIndent}- ${link}${descPart}`);
    }

    for (const child of [...node.children].sort(sortByTitle)) {
      lines.push(...renderNode(child, childDepth));
    }

    return lines;
  }

  const root = nodes.get('');
  const bodyLines = root ? renderNode(root, 0) : [];

  const lines = [
    '# Bannerlord Modding Wiki — LLM Directory',
    '# 骑砍2模组编辑器文档索引（供大模型使用）',
    '',
    'This file lists every page of the documentation in a hierarchical directory tree so LLMs and tools can discover content.',
    'Each page also has a "Copy Markdown" button to grab the raw Markdown source directly.',
    '',
    `- Site home: ${baseUrl}/`,
    `- Total pages: ${entries.length}`,
    '',
    '## Directory tree',
    '',
    ...bodyLines,
    '',
  ];

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, lines.join('\n'), 'utf8');
  console.log(`Wrote ${OUTPUT_FILE} with ${entries.length} pages`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
