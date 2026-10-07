# v1.3.0 四档分类扫描报告

- 生成时间：2026-10-07T07:53:50.238Z
- 扫描脚本：`tools/_verify/v130-tier-scan.mjs`
- 运行命令：`node tools/_verify/v130-tier-scan.mjs`（仓库根目录下）
- 输入：`content/v1.3.0/zh/**/*.md`、`content/v1.3.0/en/**/*.md`（只读，未写入 content/）

## 1. 判据与决策顺序

决策顺序：**shell → generated → handwritten_deep**（先命中先定档）。

### 1.1 shell（空壳）
- frontmatter `description` 含生成标记，**且**
- 正文（frontmatter 之后）命中空壳签名形状 A（任一）：
  - zh 签名：`它有什么状态` / `它允许你做什么` / `它保存的状态`
  - en 签名：`what state it owns` / `what actions it allows`

### 1.2 generated（生成页）
- 页面含生成标记（下述 4 个精确自述串之一，或 `<!-- v*-skeleton -->` 注释），且不是 shell。
  - 4 个精确串：`的自动生成类参考` / `Auto-generated class reference` / `的自动生成战役动作参考` / `Auto-generated campaign action reference`

### 1.3 handwritten_deep（手写深页）
- 不含任何生成标记，且满足任一：
  - `classifyPage(filePath, text)` 判 `deep_pass`
  - 正文（frontmatter 之后）UTF-8 字节 > 2500 且有 h2/h3 小节（行匹配 `/^#{2,3}\s+/m`）

### 1.4 残留页
- 无标记但两个深页判据都不满足 ⇒ 归 `handwritten_deep`，并在本文档第 5 节单独列完整清单。

## 2. 分母来源

- **页面级分母** = 对应 `tools/_verify/tiers-v1.3.0-<lang>.json` 的条目数（即该语言扫描到的 .md 页面总数）。
- **类型级分母** = `tools/_verify/types-1.3.0.json` 的 `uniqueTypeCount` = **5095**（任务书给定值 5,095）。

## 3. 总览（分子/分母 = 该档页数 / 该语言总页数）

| 语言 | 档位 | 分子（页数） | 分母（该语言总页数） | 占比 |
| --- | --- | ---: | ---: | ---: |
| zh | shell | 3743 | 5300 | 70.6% |
| zh | generated | 1256 | 5300 | 23.7% |
| zh | handwritten_deep | 301 | 5300 | 5.7% |
| zh | **合计** | **5300** | **5300** | 100.0% |
| en | shell | 3866 | 5300 | 72.9% |
| en | generated | 1287 | 5300 | 24.3% |
| en | handwritten_deep | 147 | 5300 | 2.8% |
| en | **合计** | **5300** | **5300** | 100.0% |

手写深页（非残留）成因分解：

| 语言 | 仅 classifyPage=deep_pass | 仅正文>2500B+h2/h3 | 两者都满足 | 残留页 | 深页合计 |
| --- | ---: | ---: | ---: | ---: | ---: |
| zh | 0 | 78 | 181 | 42 | 301 |
| en | 0 | 77 | 27 | 43 | 147 |

## 4. 真零附成因

- 本次扫描**没有任何档位为 0**，无需附成因。

- 已知事实：v1.3.0 尚未撤回生成页（生成页仍在树内），所以 shell/generated 预期**不为 0**（与已重写完成的 v1.4.6/1.4.7/1.5.3 不同）。

## 5. 残留页完整清单

### zh（42 页）

- `zh/_index.md`
- `zh/api/campaign-ext/global/_index.md`
- `zh/api/campaign-ext/root/_index.md`
- `zh/api/campaign/agentorigins/_index.md`
- `zh/api/campaign/characters/_index.md`
- `zh/api/campaign/heroes/_index.md`
- `zh/api/campaign/naval/_index.md`
- `zh/api/campaign/parties/_index.md`
- `zh/api/campaign/quests/_index.md`
- `zh/api/campaign/roster/_index.md`
- `zh/api/core-extra/codegeneration/_index.md`
- `zh/api/core-extra/eventsystem/_index.md`
- `zh/api/core-extra/graph/_index.md`
- `zh/api/core-extra/http/_index.md`
- `zh/api/core-extra/imageidentifiers/_index.md`
- `zh/api/core-extra/newsmanager/_index.md`
- `zh/api/core/_index.md`
- `zh/api/engine/gauntletui/_index.md`
- `zh/api/engine/inputsystem/_index.md`
- `zh/api/gameplay/_index.md`
- `zh/api/gameplay/sandbox/_index.md`
- `zh/api/gameplay/storymode/_index.md`
- `zh/api/gui/gamepadnavigation/_index.md`
- `zh/api/gui/layout/_index.md`
- `zh/api/localization/root/_index.md`
- `zh/api/mission-ext/missionrepresentatives/_index.md`
- `zh/api/mission-ext/missionspawnhandlers/_index.md`
- `zh/api/mission-ext/network/_index.md`
- `zh/api/mission-ext/options/_index.md`
- `zh/api/mission-ext/viewmodelcollection/_index.md`
- `zh/api/mission/_index.md`
- `zh/api/system/_index.md`
- `zh/api/viewmodel/conversation/_index.md`
- `zh/api/viewmodel/education/_index.md`
- `zh/api/viewmodel/quests/_index.md`
- `zh/guide/campaign-basics.md`
- `zh/guide/common-issues.md`
- `zh/guide/mission-basics.md`
- `zh/guide/save-system.md`
- `zh/guide/ui-basics.md`
- `zh/native/_index.md`
- `zh/xml-reference/_index.md`

### en（43 页）

- `en/_index.md`
- `en/api/campaign-ext/global/_index.md`
- `en/api/campaign-ext/root/_index.md`
- `en/api/campaign/agentorigins/_index.md`
- `en/api/campaign/characters/_index.md`
- `en/api/campaign/heroes/_index.md`
- `en/api/campaign/naval/_index.md`
- `en/api/campaign/parties/_index.md`
- `en/api/campaign/quests/_index.md`
- `en/api/campaign/roster/_index.md`
- `en/api/core-extra/codegeneration/_index.md`
- `en/api/core-extra/eventsystem/_index.md`
- `en/api/core-extra/graph/_index.md`
- `en/api/core-extra/http/_index.md`
- `en/api/core-extra/imageidentifiers/_index.md`
- `en/api/core-extra/newsmanager/_index.md`
- `en/api/core/_index.md`
- `en/api/engine/gauntletui/_index.md`
- `en/api/engine/inputsystem/_index.md`
- `en/api/gameplay/_index.md`
- `en/api/gameplay/sandbox/_index.md`
- `en/api/gameplay/storymode/_index.md`
- `en/api/gui/gamepadnavigation/_index.md`
- `en/api/gui/layout/_index.md`
- `en/api/localization/root/_index.md`
- `en/api/mission-ext/missionrepresentatives/_index.md`
- `en/api/mission-ext/missionspawnhandlers/_index.md`
- `en/api/mission-ext/network/_index.md`
- `en/api/mission-ext/options/_index.md`
- `en/api/mission-ext/viewmodelcollection/_index.md`
- `en/api/mission/_index.md`
- `en/api/system/_index.md`
- `en/api/viewmodel/conversation/_index.md`
- `en/api/viewmodel/education/_index.md`
- `en/api/viewmodel/quests/_index.md`
- `en/architecture/save-system.md`
- `en/guide/campaign-basics.md`
- `en/guide/common-issues.md`
- `en/guide/mission-basics.md`
- `en/guide/save-system.md`
- `en/guide/ui-basics.md`
- `en/native/_index.md`
- `en/xml-reference/_index.md`

## 6. 每个数字的复现命令

```bash
# 0) 重新生成全部三个产出文件
node tools/_verify/v130-tier-scan.mjs

# 1) 页面级分母：各语言 .md 页面总数
find content/v1.3.0/zh -name '*.md' | wc -l
find content/v1.3.0/en -name '*.md' | wc -l

# 2) 各档页数（分子）与条目总数（分母）
node -e "const fs=require('fs');for(const l of ['zh','en']){const t=JSON.parse(fs.readFileSync('tools/_verify/tiers-v1.3.0-'+l+'.json','utf8'));const c={};for(const v of Object.values(t))c[v]=(c[v]||0)+1;console.log(l,JSON.stringify(c),'total='+Object.keys(t).length)}"

# 3) 类型级分母
node -e "console.log('uniqueTypeCount =',require('./tools/_verify/types-1.3.0.json').uniqueTypeCount)"

# 4) 残留页完整清单：重跑脚本，stdout 按语言打印（与本文第 5 节一致）
node tools/_verify/v130-tier-scan.mjs
```

## 7. 已知事实（已核实，直接引用）

- v1.3.0 页面数：`content/v1.3.0/zh` 与 `en` 各约 5,300 个 .md（本次扫描实测：zh=5300，en=5300）。
- v1.3.0 源码树**不完整**：缺 `TaleWorlds.ObjectSystem` / `MBObjectManager` 整个模块，全树仅 4,596 个 .cs（1.5.3 是 11,487）。⇒「某类型在 1.3.0 查不到」是**弱信号**，1.3.0 的缺页集合必须标注 `confidence=low`。
- v1.3.0 尚未撤回生成页（生成页仍在树内），所以 shell/generated 预期**不为 0**（与已重写完成的 v1.4.6/1.4.7/1.5.3 不同）。

