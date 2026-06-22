// tools/gen-actions-index.mjs — generate a curated Actions reference index (zh+en).
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';
const SRC = 'bannerlord-1.3.15/TaleWorlds.CampaignSystem/Actions';
const OUT = 'BannerlordCode.github.io/docs/v1.3.15';

const actions = readdirSync(SRC).filter(f => f.endsWith('Action.cs')).map(f => f.replace(/\.cs$/, '')).sort();

// derive a short purpose from the class name (strip "Action", split camelCase)
function purpose(name) {
  return name.replace(/Action$/, '').replace(/([A-Z])/g, ' $1').trim();
}

// category heuristic by keyword
function category(name) {
  const n = name.toLowerCase();
  if (/(war|peace|battle|siege|army|mercenary|hostile|kingdom)/.test(n)) return 'war';
  if (/(kill|relation|romantic|marriage|pregnant|companion|hero|prisoner|captivity|heir|character|disable|fugitive|teleport|player|clanleader|rulingclan)/.test(n)) return 'character';
  if (/(gold|item|trade|sell|bribe|crime|renown|influence|workshop|ship|raft|goods)/.test(n)) return 'economy';
  if (/(settlement|governor|village|health)/.test(n)) return 'settlement';
  if (/(destroy|disband|parta|partyai)/.test(n)) return 'party';
  return 'other';
}
const CAT = {
  war: { zh: '战争与外交 War & Diplomacy', en: 'War & Diplomacy' },
  character: { zh: '角色与关系 Character & Relations', en: 'Character & Relations' },
  economy: { zh: '经济与声望 Economy & Renown', en: 'Economy & Renown' },
  settlement: { zh: '领地与定居点 Settlements', en: 'Settlements' },
  party: { zh: '派系与队伍 Factions & Parties', en: 'Factions & Parties' },
  other: { zh: '其它 Other', en: 'Other' },
};
const ORDER = ['war', 'character', 'economy', 'settlement', 'party', 'other'];

function render(lang) {
  const L = lang === 'zh';
  const out = [];
  out.push('---');
  out.push('title: ' + (L ? '战役动作速查 / Campaign Actions Reference' : 'Campaign Actions Reference'));
  out.push('sidebar: auto');
  out.push('---');
  out.push('');
  out.push('# ' + (L ? '战役动作速查' : 'Campaign Actions Reference'));
  out.push('');
  out.push(L
    ? '战役中所有改变游戏状态的静态动作类（共 ' + actions.length + ' 个）。每个类的 `Apply*` 方法对应一种触发原因。modder通过调用这些方法安全地修改游戏状态，而非直接改字段。'
    : 'Every static action class that mutates campaign game state (' + actions.length + ' total). Each class\'s `Apply*` methods correspond to a trigger reason. Mods call these to mutate state safely instead of touching fields directly.');
  out.push('');
  for (const cat of ORDER) {
    const items = actions.filter(a => category(a) === cat);
    if (!items.length) continue;
    out.push('## ' + (L ? CAT[cat].zh : CAT[cat].en) + ' (' + items.length + ')');
    out.push('');
    out.push('| 类 Class | 用途 Purpose |');
    out.push('|------|------|');
    for (const a of items) out.push('| [`' + a + '`](./' + a + ') | ' + purpose(a) + ' |');
    out.push('');
  }
  out.push('## ' + (L ? '参见' : 'See Also'));
  out.push('');
  out.push('- [' + (L ? '完整类目录' : 'Complete Class Catalog') + '](../catalog)');
  out.push('- [' + (L ? '战役系统目录' : 'Campaign System catalog') + '](../catalog-campaign)');
  return out.join('\n');
}

for (const lang of ['en', 'zh']) {
  writeFileSync(join(OUT, lang, 'api/campaign-ext/actions-index.md'), render(lang));
}
console.log('actions-index.md written (zh+en). ' + actions.length + ' actions across ' + ORDER.filter(c => actions.some(a => category(a) === c)).length + ' categories.');
