import { classifyPage } from 'file:///C:/WorkSpace/Bannerlord/BannerlordCode.github.io/tools/lib/handwritten-policy.mjs';
import { readFileSync } from 'node:fs';
const files = [
  'campaign-ext/ConversationManager',
  'campaign-ext/GameMenuManager',
  'campaign-ext/GameMenuOption',
  'campaign-ext/KingdomDecision',
];
for (const f of files) {
  const p = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.3.15/zh/api/' + f + '.md';
  try {
    const text = readFileSync(p, 'utf8');
    const r = classifyPage(p, text);
    console.log(f, '=>', JSON.stringify(r));
  } catch (e) {
    console.log(f, 'ERR', e.message);
  }
}
