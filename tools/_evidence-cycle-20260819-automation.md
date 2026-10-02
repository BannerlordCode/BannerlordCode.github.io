# 自动化周期证据 — 2026-08-19 (大局观 / ulw-loop)

> 本周期为 `automation-1785652108735`（每小时）的首次有效执行。
> 目标：复验上一次手写波次（Wave #T, 2026-08-19 ~00:28）声称的「绿」是否仍成立，并量化真实内容债，供 4 项挂起战略决策使用。

## 1. 复验结论（对当前工作树，不轻信旧证据）

| 检查项 | 范围 | 命令 | 结果 |
|--------|------|------|------|
| 断链审计 | v1.3.15 zh/api | `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs` | `FILES=5632 TOTAL_LINKS=20568 BROKEN_LINKS=0 FILES_WITH_BROKEN=0` ✅ |
| R1 覆盖率 | v1.3.15 zh | `node tools/r1-coverage-report.mjs --version 1.3.15 --lang zh` | `r1Target=4796 covered=4796 gap=0 sTier=62/62` ✅ |
| 严格质量审计 | v1.3.15 zh/api | `STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.3.15/zh/api` | `Scanned 5632 files, Blockers=0 (非严格), Warnings=24, Content-integrity=27719 (STRICT_GATE=1 → 计为 blocker)` ⚠️ |

- 结论：**结构口径仍绿**（断链 0、覆盖率 0 缺口、S 级 62/62）。
- **内容口径红**：严格门禁下 27,719 条样板/占位发现，即 ~5,414 个自动生成 stub 尚未升级为真实手写内容。当前 CI 绿是因为严格门禁默认关闭（仅 Warnings:24、Blockers:0）。

## 2. 工作树状态（风险点）

`git status` 显示大量**未提交**改动（来自上一波次 nav/索引生成，未 commit——符合 driver「除非用户明确要求否则不 commit」）：
- 已改未提交：`AGENTS.md`, `data/navigation.json`, `data/page-navigation.json`, `data/relkey_map.json`, `data/section-tree.json`, `package.json`, `tools/audit-doc-quality.mjs`, 多个 `tools/data/*.json`。
- 未跟踪目录：`_audit_l1/`, `_audit_mine/`, `_audit_mirror/`, `_auditiso/`, `_build-final-20260803-2/` 等（产物/暂存，非内容）。
- 影响：nav/section-tree 改动只影响侧栏渲染，不影响 md 内链；断链复验已确认 md 层仍 0 断链。但全站 `zola build` 未经本次复验（约 3.6 万页，耗时长），视作待办风险。

## 3. v1.4.5 zh/api 口径（引自 Wave #T，本次未重跑）

- `deep_pass=486`, `family_entry_pass=73`, `stub=8834`（stub 占 93.8%）。
- Wave #T 声称 v1.4.5 断链 0、S 级 62/62（当日 00:28 证据）。

## 4. 4 项挂起战略决策（阻塞内容山，须用户裁决）

| # | 决策 | 现状 | 建议 / 待决 |
|---|------|------|-------------|
| 1 | `audit:quality:strict` 接 CI | 严格门禁会产生 27,719 blocker，直接令 CI 红 | **建议暂不开启**；把 27,719 作为 backlog KPI，内容清零前保持非严格门禁绿 |
| 2 | 并行手写节奏固化 | 已有 dispatch→读源码→手写深页→classify+link+stub-grep 管线 | **建议固化**：每周期 ~5–8 深页，优先稳定命名空间（core/engine/save-system/gui/items/mission/viewmodel/localization），避开 campaign/campaign-ext |
| 3 | 覆盖口径改判「达标=真手写」 | 当前口径靠 family 条目 + 宽松 classify 把 4,796 身份算达标，掩盖 5,414 stub | **须用户裁决**：(a) 维持宽松口径（声明结构完成，质量另算）或 (b) 改严格口径（重开缺口 ~5,414，诚实） |
| 4 | campaign/ vs campaign-ext/ 去重（~1,313 孤儿 stub） | 同类型在两目录双页并存 | **须用户裁决**：指定 canonical 目录，另一套孤儿页重定向/删除（删除属用户批准动作） |

## 5. 本周期动作与下一周期入口

- 本周期：**复验绿态 + 量化内容债（27,719）+ 固化上述 4 决策建议**。未擅自动手转换 stub（避免与 #3/#4 冲突、避免仓促产出低质页）。
- 下一周期入口：待用户就 **#3 覆盖口径** 与 **#4 去重** 裁决后，从稳定命名空间（避开 campaign 双目录）继续每波 ~5–8 深页，沿用 classify+link+stub-grep 三重复验。
- 若用户授权「维持宽松口径 + 直接开 grinding」：立即从 `core`/`engine`/`save-system` 起步，不等待 #3/#4。
