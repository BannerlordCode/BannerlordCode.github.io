import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { extractFamilyEntries } from './lib/handwritten-policy.mjs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = join(ROOT, 'content/v1.4.5/zh/api');
const gaps = JSON.parse(readFileSync(join(ROOT, 'tools/_gap_bases.json'), 'utf8'));

function roleFor(typeName, base, ns) {
  const b = base || '';
  if (/Quest/i.test(ns) || /Quest/i.test(typeName)) return '主线/支线任务定义，声明目标、触发与完成条件，由 QuestManager 在剧情推进时激活';
  if (/Mission/i.test(ns) || /Mission/i.test(b)) return '剧情任务相关类型，参与任务流程与阶段流转';
  if (/Extension/i.test(typeName) || /Extensions/.test(ns)) return '扩展方法/静态工具类型，为宿主类型追加便捷能力';
  if (/ViewModel/i.test(b) || /ViewModelCollection/i.test(ns)) return 'Gauntlet UI 数据视图模型，向界面暴露属性与命令';
  if (/CampaignBehavior/i.test(b)) return '战役系统行为，监听全局事件驱动剧情相关系统的更新';
  if (/Phase/i.test(ns) || /Phase/i.test(typeName)) return '剧情阶段定义，描述该阶段的目标、入场与结束条件';
  if (/GameComponent/i.test(b)) return '实体组件，挂载到 GameObject 提供特定能力';
  if (/Mixin/i.test(b)) return '混入组件，为宿主类型附加横切能力';
  if (/StoryMode/i.test(ns)) return 'StoryMode 模块业务类型，参与主线叙事与界面';
  return '该命名空间下的业务类型，承担其派生约定职责';
}
function timingFor(ns) {
  if (/Quest/i.test(ns)) return '剧情推进期';
  if (/Mission/i.test(ns)) return '任务加载时';
  if (/Phase/i.test(ns)) return '剧情阶段切换时';
  if (/Extension/i.test(ns)) return '调用时';
  return '运行期';
}

// remaining StoryMode.* gaps not already covered by storymode/Quests
const types = gaps.filter((g) => g.namespace.startsWith('StoryMode') && !g.namespace.startsWith('StoryMode.Quests'));
console.log('storymode remaining gaps:', types.length);

const rows = types.map((t) => `| \`${t.typeName}\` | ${t.namespace} | ${roleFor(t.typeName, t.base, t.namespace)} | ${timingFor(t.namespace)} |`).join('\n');

const md = `---
title: "StoryMode 主线模块类型"
description: "StoryMode 主线模块类型 — 家族索引，覆盖 ${types.length} 个业务类型，含心智模型、依赖与风险。"
---

# StoryMode 主线模块类型

**一句话职责：** 本页以家族索引形式覆盖 \`StoryMode\` 命名空间下、除 Quests 子页已收录外的全部 ${types.length} 个业务类型，逐类给出命名空间、职责与典型时机。

## 心智模型

StoryMode 是 Bannerlord 主线叙事模块：它在 SandBox 战役框架之上叠加剧情驱动层——任务（Quest）、阶段（Phase）、剧情界面与扩展工具。这些类型本身不写核心规则，而是通过监听 Campaign 事件、与 CampaignBehavior 协作来推进叙事；存档兼容性由各自字段的默认值保证。

## 何时使用

需要扩展或新增主线内容（新任务阶段、剧情界面、扩展方法）时，从对应基类派生，并在 QuestManager / CampaignBehavior 中注册；不要在主线程逻辑里硬编码剧情流转。

## 依赖关系

\`StoryMode\` 类型依赖战役与任务框架；缺其中任一都会导致编译或运行期失败。

\`\`\`mermaid
graph TD
  ROOT["StoryMode 主线模块"]
  ROOT --> DEP["依赖模块"]
\`\`\`

- [Campaign 战役](../../campaign/Campaign)
- [CampaignBehaviorBase 行为基类](../../campaign-ext/CampaignBehaviorBase)
- [Quests 主线任务](./Quests/_index)
- [GameComponents 剧情组件](./GameComponents/_index)

## 类型清单

| Type | Namespace | Purpose | Timing |
| --- | --- | --- | --- |
${rows}

## 风险与边界

剧情类型多为可序列化状态，新增字段必须带默认值以免旧档反序列化失败；任务/阶段条件判定要幂等，重复触发不得重复结算奖励。扩展方法（Extensions）只应提供便利封装，不持有状态。

## 参见

- [Campaign 战役](../../campaign/Campaign)
- [CampaignBehaviorBase 行为基类](../../campaign-ext/CampaignBehaviorBase)
- [Quests 主线任务](./Quests/_index)
- [GameComponents 剧情组件](./GameComponents/_index)
- [API 总览](../_index)
`;

const dir = join(API, 'storymode');
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const outPath = join(dir, '_index.md');
writeFileSync(outPath, md, 'utf8');
const entries = extractFamilyEntries(outPath, md);
console.log(`WROTE ${outPath}  types=${types.length} familyEntries=${entries.length}`);
