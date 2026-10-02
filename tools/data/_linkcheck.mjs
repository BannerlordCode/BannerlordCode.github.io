import fs from 'fs';
import path from 'path';

const root = 'content/v1.3.15/zh/api/campaign-ext';
const files = ['CampaignPeriodicEventManager.md', 'BribeGuardsAction.md', 'ChangeRomanticStateAction.md', 'ChangeClanLeaderAction.md'];
const forb = /阅读时先通过属性了解状态|是 TaleWorlds( |\.\.\.)公开类型|SomeValue|service =|IIScene/;

function resolveExists(base, l) {
  const joined = path.posix.join(base, l);
  const target = joined.replace(/[\\/]$/, '');
  return fs.existsSync(target + '.md') || fs.existsSync(target + '/index.md') || fs.existsSync(target + '/_index.md');
}

for (const f of files) {
  const base = path.posix.join(root, f.replace(/\.md$/, ''));
  const txt = fs.readFileSync(path.posix.join(root, f), 'utf8');
  const ff = forb.test(txt);
  const links = [...txt.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(m => m[1]).filter(l => !l.startsWith('http') && !l.startsWith('#'));
  const bad = links.filter(l => !resolveExists(base, l));
  console.log(f, '| forbidden:', ff ? 'HIT!!' : 'clean', '| links:', links.length, '| broken:', bad.length, bad.length ? JSON.stringify(bad) : 'ALL OK');
}
