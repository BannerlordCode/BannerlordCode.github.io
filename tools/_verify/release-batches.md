# Release Batches — content/ 未提交改动分类计划

> 生成时间：2026-10-07  
> 仓库 HEAD：b961519499  
> 分类 worker：worker-194（lead-21 发布线）

---

## 批次 1：v1.3.15 架构页（en + zh 双语）

**主题：** v1.3.15 版本树 architecture 目录下 4 个架构主题页的修订——Campaign Action 家族与 UI 三层架构，中英双语各一对。

**路径清单：**

```
content/v1.3.15/en/architecture/action-family.md
content/v1.3.15/en/architecture/ui-three-layers.md
content/v1.3.15/zh/architecture/action-family.md
content/v1.3.15/zh/architecture/ui-three-layers.md
```

**依据：**

- 四页均为完整页：frontmatter 含 `title` + `description`，正文含概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航七节，内容实质且可逐页解释。
- `action-family.md`（en）：讲 `TaleWorlds.CampaignSystem.Actions` 命名空间下 62 个 `*Action` 静态类如何作为战役层状态改变的统一入口，以及 Action → 事件 → Behavior 的级联链。
- `ui-three-layers.md`（en）：讲 `ScreenManager` / `ScreenBase` / `ScreenLayer` / `GauntletLayer` / `ViewModel` 三层 UI 架构的包含关系、Tick 链与接入步骤。
- `action-family.md`（zh）：上述 action-family 的中文孪生页，内容对等。
- `ui-three-layers.md`（zh）：上述 ui-three-layers 的中文孪生页，内容对等。
- 四页同属 v1.3.15 版本树 architecture 主题，改动性质一致（架构文档修订），适合作为一批提交。

---

## 批次 2：v1.4.5 zh campaign-ext API 页

**主题：** v1.4.5 版本树 zh/api/campaign-ext/ 目录下 3 个 SettlementAccessModel 准入判定相关 API 页的新增。

**路径清单：**

```
content/v1.4.5/zh/api/campaign-ext/AccessDetails.md
content/v1.4.5/zh/api/campaign-ext/AccessLevel.md
content/v1.4.5/zh/api/campaign-ext/AccessLimitationReason.md
```

**依据：**

- 三页均为完整页：frontmatter 含 `title` + `description`，正文含概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例等节，内容实质且可逐页解释。
- `AccessDetails.md`：讲 `SettlementAccessModel` 的判定结果容器 struct——六个字段（AccessLevel / AccessMethod / AccessLimitationReason / LimitedAccessSolution / PreliminaryActionObligation / PreliminaryActionType）如何打包一次准入判定的完整答案。
- `AccessLevel.md`：讲三值结论枚举 `NoAccess` / `LimitedAccess` / `FullAccess`，作为 `AccessDetails` 的第一个字段被返回。
- `AccessLimitationReason.md`：讲八值原因枚举 `None` / `HostileFaction` / `RelationshipWithOwner` / `CrimeRating` / `VillageIsLooted` / `Disguised` / `ClanTier` / `LocationEmpty`，作为 `AccessDetails` 的第三个字段被返回。
- 三页同属 v1.4.5 zh campaign-ext 主题，围绕同一个 `SettlementAccessModel` 准入判定体系，适合作为一批提交。

---

## 不提交清单

以下 8 个 `_index.md` 文件的改动**不纳入任何提交批次**，原因：diff 落在 `<!-- BEGIN SECTION INDEX -->` 与 `<!-- END SECTION INDEX -->` 标记块之外（OUT-OF-SCOPE），或为不在 HEAD 中的新文件（NEW）。

| # | 路径 | 判定 | 原因 |
|---|------|------|------|
| 1 | `content/v1.4.5/en/api/campaign/_index.md` | OUT-OF-SCOPE | 首个块外差异在 line 103（CRLF 归一化后）；raw compare 也不同 |
| 2 | `content/v1.4.5/en/api/final/_index.md` | OUT-OF-SCOPE | 首个块外差异在 line 10（CRLF 归一化后）；raw compare 也不同 |
| 3 | `content/v1.4.5/en/api/mission/_index.md` | OUT-OF-SCOPE | 首个块外差异在 line 58（CRLF 归一化后）；raw compare 也不同 |
| 4 | `content/v1.4.5/zh/_index.md` | OUT-OF-SCOPE | 首个块外差异在 line 2（CRLF 归一化后）；raw compare 也不同 |
| 5 | `content/v1.4.6/en/architecture/_index.md` | OUT-OF-SCOPE | 首个块外差异在 line 2（CRLF 归一化后）；raw compare 也不同 |
| 6 | `content/v1.4.7/en/api/engine/_index.md` | OUT-OF-SCOPE | 首个块外差异在 line 3（CRLF 归一化后）；raw compare 也不同 |
| 7 | `content/v1.5.3/zh/api/localization/_index.md` | NEW | 不在 HEAD 中（新文件 = 写正文，超出 SECTION INDEX 例外范围） |
| 8 | `content/v1.5.3/zh/api/storymode/_index.md` | NEW | 不在 HEAD 中（新文件 = 写正文，超出 SECTION INDEX 例外范围） |

---

## 汇总

| 指标 | 数值 | 量法 |
|------|------|------|
| 总未提交项 | 15 | `git status --porcelain -- content/` 输出行数 |
| 可提交批次 | 2 | 本文件批次数 |
| 批次 1 文件数 | 4 | 批次 1 路径清单行数 |
| 批次 2 文件数 | 3 | 批次 2 路径清单行数 |
| 不提交项数 | 8 | 不提交清单行数 |
| `_index.md` OUT-OF-SCOPE | 6 | `node tools/_verify/check-section-index-scope.mjs` 输出 OUT-OF-SCOPE 行数 |
| `_index.md` NEW | 2 | `node tools/_verify/check-section-index-scope.mjs` 输出 NEW 行数 |

---

## 执行结果

| 批次 | SHA | 文件数 | 非 content 泄漏 | 提交者 | 备注 |
|------|-----|--------|----------------|--------|------|
| 批 1 | `9ab98aa8dd5e42651c45ff047aabaedbb53b3def` | 4 | 0 | worker-195（lead-21 发布线） | 干净落地，message 为 `content(v1.3.15): 修订 architecture 双语架构页（action-family / ui-three-layers）` |
| 批 2 | `da1dfa7461285f57facfe64aa6c4b25c52630581` | 3 | 2 | lead-145zh 线（并发碰撞） | 批 2 的 3 个 content 文件被 lead-145zh 线连同其 2 个 tools 文件（`tools/_verify/lead-145zh-PROGRESS.md`、`tools/_verify/lead-145zh-judge.mjs`）一起提交，message 不描述内容；内容正确；未改写历史 |
| 批 3 | `749f45f8de34f91adf6ac837a82476daa884edd6` | 3 | 0 | worker-195（lead-21 发布线） | 干净落地，message 为 `content(v1.3.0/v1.3.15): 批 3——角色成长模型 zh 页与存档对象图架构双语页` |
| 批 4 | `9556f3662d70140681bac971246956961bf59448` | 2 | 0 | worker-195（lead-21 发布线） | 干净落地，message 为 `content(v1.3.15): correct the save-object-graph pages' false ISaveable.Write/Read claims` |

**push 记录：**

- lead-21 push：origin/main `62a2d25b0478a615b428aa54855e6377641eabe8` → `5dee108247479cfc6be3ae6c15891990519ddd4b`（6 个提交，含批 1 的 `9ab98aa8dd` 与批 2 的 `da1dfa7461`）。
- worker-195 push：origin/main `5dee108247479cfc6be3ae6c15891990519ddd4b` → 本提交（fast-forward，携带本地 3 个未推提交：`87cd609fb`（lead-145zh）、`749f45f8de`（批 3）、本提交）。
- 更正（2026-10-07）：worker-195 的 push 实际携带 4 个提交——`87cd609fb`、`749f45f8de`（批 3）、`7a95c2cd8b`（lead-145zh，push 前并发产生）、`954a828514`（收尾）。上文写的「3 个」是写入时的状态，实测为 4。

---

## 不提交清单复核（Boss #14709 裁定：手写 vs 脚本写）

**裁定要旨**：作用域门禁（`tools/_verify/check-section-index-scope.mjs`）量的是「这一处改动是不是【脚本】写进 marker 块的」——它是【脚本写】的代理，**不是**「`_index.md` 不许被手改」的规则。⇒ 手写的 `_index.md` 改动（无论落在块内还是块外）是合法内容，应当作为 content 提交。⇒ 脚本写且落在块外 = 越界，必须改回块内。

**复核方法**：对每个文件跑 `node tools/_verify/check-section-index-scope.mjs <path>` 记录块外首个差异行号；用 `git diff -- <path>` 读块外差异实际内容；对 7/8 先 `git cat-file -e HEAD:<path>` 确认不在 HEAD，再 read 读全文。

---

### 1. `content/v1.4.5/en/api/campaign/_index.md`

- **块外首个差异行号**：line 103（CRLF-normalised）；raw compare also differed。
- **块外差异实际内容**：HEAD 版 101 行、**无 marker 块**（`git show HEAD:... | grep -n "SECTION INDEX"` → 无）；工作版 1535 行，marker 在 103/1535。块外 diff（`git show HEAD:... > /tmp/camp_head.md && head -102 work > /tmp/camp_work_outside.md && diff`）仅 `101a102 > `——**只多一个空行**。块内（103–1535）为纯机械子页清单：`> 共 N 个子页` + 按 `### A`…`### K` 分组的 `- [Title](./slug)` 列，无任何散文。
- **判定**：**脚本写**（机械子页清单），但落在 marker 块【内】= 设计允许的窄例外；块外仅多一个空行。
- **依据**：HEAD 无块可剥 → gate 误报（把「新建块」当成「块外改动」）；块外 diff 仅一空行；块内为纯机械清单，符合 `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` §1 的窄例外。

### 2. `content/v1.4.5/en/api/final/_index.md`

- **块外首个差异行号**：line 10（CRLF-normalised）；raw compare also differed。
- **块外差异实际内容**：无 marker 块（`grep -n "SECTION INDEX"` → 无）。改动全在块外：`## 模块心智模型 / Mental model` → `## What this module is`（line 10）；`## 上级导航 / Up` → `## Parent Navigation`（line 61）；导航链接文案 `- [v1.4.5 API 参考](../) — 本层的父目录` → `- [API Reference](../)`、`- [v1.4.5 首页](../../) — 版本首页` → `- [Version Home](../../)`。
- **判定**：**手写**（小节标题文案 + 导航链接文案）。
- **依据**：标题与链接文案是作者判断，非机械清单；无 marker 块，改动全在块外，属合法手写内容。

### 3. `content/v1.4.5/en/api/mission/_index.md`

- **块外首个差异行号**：line 58（CRLF-normalised）；raw compare also differed。
- **块外差异实际内容**：HEAD 版**无 marker 块**；工作版 marker 在 58/178。块外 diff（`head -57` vs HEAD）仅 `56a57 > `——**只多一个空行**。块内（58–178）为纯机械子页清单：`> 共 75 个子页` + 按字母分组的 `- [Title](./slug)` 列，无散文。
- **判定**：**脚本写**（机械子页清单），但落在 marker 块【内】= 设计允许的窄例外；块外仅多一个空行。
- **依据**：同 #1——HEAD 无块可剥 → gate 误报；块外仅一空行；块内为纯机械清单。

### 4. `content/v1.4.5/zh/_index.md`

- **块外首个差异行号**：line 2（CRLF-normalised）；raw compare also differed。
- **块外差异实际内容**：frontmatter `title: Bannerlord v1.3.15 文档 / …` → `title: Bannerlord v1.4.5 中文文档 / …`、`description` 整行重写；H1 `# Bannerlord v1.3.15 / 骑砍2 v1.3.15` → `# Bannerlord v1.4.5 / 骑砍2 v1.4.5（中文）`；新增散文段（`**这一版的源码是反编译产物。**…`、`## 心智模型` 下两段、`## 从哪里开始读` 有序列表、`## 版本信息` 列表、`## 常见入口` 表、`## 按「我要做的事」进入` 表、`## 上级导航` 列表）。marker 块内子页清单亦更新（`> 共 6 个子页` + 列表项改写）。
- **判定**：**手写**（frontmatter title/description + 实质散文 + 手写表格）。
- **依据**：大量作者散文与表格，非机械清单；块外改动属合法手写内容。

### 5. `content/v1.4.6/en/architecture/_index.md`

- **块外首个差异行号**：line 2（CRLF-normalised）；raw compare also differed。
- **块外差异实际内容**：仅 frontmatter 一行——`title: "Architecture / 架构总览"` → `title: "Architecture"`。其余全等。
- **判定**：**手写**（frontmatter title 文案）。
- **依据**：单行 frontmatter 标题文案修改，属合法手写内容。

### 6. `content/v1.4.7/en/api/engine/_index.md`

- **块外首个差异行号**：line 3（CRLF-normalised）；raw compare also differed。
- **块外差异实际内容**：frontmatter `description: "…0 pages in this tree…"` → `description: "…1 page in this tree…"`（line 3）；散文 `## Pages in this area (0 in English)` → `## Pages in this area (1 in English)`（line 13）、`No pages in this bucket…` → `One page in this bucket…`；新增手写表项 `| [MBDebug](./MBDebug) | the engine-side debug and cheats surface |`（line 19）。
- **判定**：**手写**（frontmatter description + 散文 + 手写表项）。
- **依据**：散文与手写表项是作者判断，非机械清单。

### 7. `content/v1.5.3/zh/api/localization/_index.md`（新页）

- **是否在 HEAD**：`git cat-file -e HEAD:content/v1.5.3/zh/api/localization/_index.md` → **NOT IN HEAD（新页）**。
- **块外差异实际内容**：全文有 frontmatter `title: "Localization API — v1.5.3"` + `description: "Localization 桶：多语言文本处理器与语言本地化数据访问。…"`；实质散文 `# Localization API` 下两段（`**语言与文本本地化**相关类型…`、`## 怎么用` 三条要点）；marker 块内为机械清单（`> 共 19 个子页` + 字母分组列表）。
- **判定**：**手写**（frontmatter title/description + 实质散文）。
- **依据**：新页，有 frontmatter title + description + 实质散文，属合法手写内容。

### 8. `content/v1.5.3/zh/api/storymode/_index.md`（新页）

- **是否在 HEAD**：`git cat-file -e HEAD:content/v1.5.3/zh/api/storymode/_index.md` → **NOT IN HEAD（新页）**。
- **块外差异实际内容**：全文有 frontmatter `title: "StoryMode API — v1.5.3"` + `description: "StoryMode 桶：主线剧本、章节推进与剧本专属对话/任务类型。…"`；实质散文 `# StoryMode API` 下两段（`**StoryMode（主线）** 相关的类型…`、`## 怎么用` 三条要点）；marker 块内为机械清单（`> 共 92 个子页` + 字母分组列表）。
- **判定**：**手写**（frontmatter title/description + 实质散文）。
- **依据**：新页，有 frontmatter title + description + 实质散文，属合法手写内容。

---

### 汇总表

| 清单 | 路径 | 项数 |
|------|------|------|
| **建议作为 content 提交**（手写） | `content/v1.4.5/en/api/final/_index.md`、`content/v1.4.5/zh/_index.md`、`content/v1.4.6/en/architecture/_index.md`、`content/v1.4.7/en/api/engine/_index.md`、`content/v1.5.3/zh/api/localization/_index.md`（新页）、`content/v1.5.3/zh/api/storymode/_index.md`（新页） | 6 |
| **建议作为 content 提交**（脚本写·块内·允许例外，gate 误报） | `content/v1.4.5/en/api/campaign/_index.md`、`content/v1.4.5/en/api/mission/_index.md` | 2 |
| **不提交（交持有线）** | —（无） | 0 |
| **不可判定** | —（无） | 0 |

**说明**：8 个文件全部可提交。其中 6 个为手写内容（frontmatter / 散文 / 表格 / 标题文案）；2 个（campaign、mission）为脚本写的机械子页清单，但**落在 marker 块内**——属 `tools/_NAV-SECTION-INDEX-WRITE-DESIGN.md` §1 的窄例外，**非越界**，gate 因 HEAD 无块可剥而误报。无「脚本写且落在块外」的越界项，故「不提交」清单为空。

**实际执行的命令**：

```bash
# 门禁（8 个文件逐个）
for f in <8 paths>; do node tools/_verify/check-section-index-scope.mjs "$f"; done

# 块外差异实际内容
git diff -- <6 个已跟踪路径>

# 块外精确比对（campaign / mission）
git show HEAD:<path> > /tmp/head.md && head -N work > /tmp/outside.md && diff /tmp/head.md /tmp/outside.md

# marker 块位置
grep -n "SECTION INDEX" <path>            # 工作版
git show HEAD:<path> | grep -n "SECTION INDEX"   # HEAD 版

# 新页确认
git cat-file -e HEAD:<path> && echo "IN HEAD" || echo "NOT IN HEAD"

# 新页全文
read content/v1.5.3/zh/api/localization/_index.md
read content/v1.5.3/zh/api/storymode/_index.md
```
