// Usage: node _audit_l1/verify-deep.mjs <relpath-without-ext>  e.g. campaign-ext/ConversationManager
// Prints classifyPage(status, reasons) for a content page.
import { classifyPage } from 'file:///C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/lib/handwritten-policy.mjs';
import { readFileSync } from 'node:fs';
const rel = process.argv[2];
if (!rel) { console.error('usage: node _audit_l1/verify-deep.mjs <relpath-without-ext>'); process.exit(2); }
const p = `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.3.15/zh/api/${rel}.md`;
const text = readFileSync(p, 'utf8');
console.log(rel, '=>', JSON.stringify(classifyPage(p, text)));
