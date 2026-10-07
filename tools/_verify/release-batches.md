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

**push 记录：**

- lead-21 push：origin/main `62a2d25b0478a615b428aa54855e6377641eabe8` → `5dee108247479cfc6be3ae6c15891990519ddd4b`（6 个提交，含批 1 的 `9ab98aa8dd` 与批 2 的 `da1dfa7461`）。
- worker-195 push：origin/main `5dee108247479cfc6be3ae6c15891990519ddd4b` → 本提交（fast-forward，携带本地 3 个未推提交：`87cd609fb`（lead-145zh）、`749f45f8de`（批 3）、本提交）。
