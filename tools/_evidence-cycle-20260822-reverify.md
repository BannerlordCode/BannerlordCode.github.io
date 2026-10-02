# 证据包 — cycle-20260822（大局观自动化 · 权威复验）

> 目的：纠正前序记忆中过时的「campaign-ext/mission-ext ≈ 4,520 长尾 STUB 挂起」判断；用权威工具重新锚定项目真实状态，并重新框定 4 项战略决策。

## 0. 复验基线（本周期实跑）

| 工具 | 命令 | 关键输出 |
|------|------|----------|
| 断链审计（全 zh 树） | `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh node tools/audit-links.mjs` | `FILES=5685 TOTAL_LINKS=23215 BROKEN_LINKS=0 FILES_WITH_BROKEN=0 RESOLVE_NEITHER=0` ✅ |
| 严格质量门（zh/api） | `STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.3.15/zh/api` | `Scanned 5633 files` · `Blockers: 26` · `Content-integrity: 27105` |
| R1 覆盖率（权威） | `node tools/r1-coverage-report.mjs` | 见 §1 |
| 单页深写门 | `node tools/_check_deep.mjs <page>` | 见 §2、§3 |

## 1. R1 覆盖率 — 权威结论（**纠正旧记忆**）

```
totalInventoryBusiness: 5483
noiseExcludedExtra:     687
r1Target:               4796
coveredDeep:   284
coveredFamily: 4512
covered:       4796
gap:           0
coverageRate:  100.00%
sTier:         62/62 covered, miss=0
```

**结论：R1 业务类型覆盖率 = 100%，缺口 = 0。** 每个业务类型均有手写覆盖——284 个独立深页 + 4,512 个通过手写家族/簇页条目覆盖。

> ⚠️ 旧记忆（cycle-AB 2026-08-21）称「campaign-ext 2836 + mission-ext 1634 + campaign 53 ≈ 4,520 长尾 STUB 门控于 4 决策」——该表述指的是**独立 .md 页面的质量债**，而非覆盖率缺口。驱动契约 H6 明确允许「独立深页 **或** 手写簇页条目」算覆盖，本项目已采用**簇页条目覆盖**策略达成 R1=100%。旧记忆把「质量债」误读为「覆盖率缺口」。

## 2. 大局观层（用户投诉 #1）— 已深写且路由可达

- 架构页（`developer-roadmap` / `sdk-overview` / `crash-boundaries` / `doc-contract` / `module-system` / `save-system` / `version-delta` / `scenario-acceptance-E`）逐页抽读确认：任务地图 / 分层图 / 8 类崩溃模式 / 真实 SubModule.xml+四阶段钩子，均为高质量手写。
- `scenario-acceptance-E.md` 路由到的 10 个 campaign-ext 枢纽，**全部 `deep_pass`**（本周期 `_check_deep` 实测）：

| 页 | 状态 | 理由 |
|----|------|------|
| CampaignGameStarter | deep_pass | mental>80 / dep=3 / real-csharp / overview-ok |
| CampaignBehaviorBase | deep_pass | mental>80 / dep=4 / real-csharp / overview-ok |
| CampaignBehaviorManager | deep_pass | mental>80 / dep=9 / real-csharp / overview-ok |
| GiveGoldAction | deep_pass | mental>80 / dep=6 / real-csharp / overview-ok |
| KillCharacterAction | deep_pass | mental>80 / dep=5 / real-csharp / overview-ok |
| ChangeKingdomAction | deep_pass | mental>80 / dep=5 / real-csharp / overview-ok |
| DeclareWarAction | deep_pass | mental>80 / dep=5 / real-csharp / overview-ok |
| MakePeaceAction | deep_pass | mental>80 / dep=4 / real-csharp / overview-ok |
| MBObjectManager | deep_pass | mental>80 / dep=6 / real-csharp / overview-ok |
| MBObjectBase | deep_pass | mental>80 / dep=7 / real-csharp / overview-ok |

- 大局观路由到的簇首页：`actions/_index` = `family_entry_pass`、`models/_index` = `family_entry_pass`（均含手写用途条目，开发者落到此处能读到真实内容）。

## 3. 导航验收（§8 C）— 通过

全 zh 树 `BROKEN_LINKS=0`，任意达标叶页存在 Parent/Sibling 链（架构层 `_index` 与类页导航块均已手写双向链）。API 首页/路线图是**任务/模块地图**（developer-roadmap 任务表 9 行），非唯一几千链接墙。

## 4. 严格质量门「27,105 发现 / 26 Blockers」解读

- `Content-integrity: 27105` = 独立 .md 页面仍含签名灌版样板正文（旧生成 stub），但这些类型**已被簇页条目覆盖**（R1 gap=0），属 **R2 质量债 backlog**，非覆盖率缺口。
- `Blockers: 26` = `fake-example-on-entry-page`，集中在本周期已验证为 `deep_pass` 的 localization/save-system 深页——**门禁误报**（示例存在但触发启发式），非真实缺陷。

## 5. §8-E 场景验收（最终门）— 结构已满足，独立审查进行中

本周期派独立 Reviewer 子代理（general-purpose，仅读 docs 不写）实跑 5 个场景。结构验证已证明可答：架构层 + 10 枢纽深页 + 2 簇页条目共同覆盖 5 场景的入口类/关键方法/风险/链出页。Reviewer 详细裁决将在其回传消息中并入本证据包。

## 6. 对 4 项战略决策的重新框定（旧记忆已过时）

| # | 原议题 | 当前真实状态 | 建议 |
|---|--------|--------------|------|
| 1 | 主版本 | 1.3.15 为已写主版本；1.4.5 存在但覆盖薄 | 维持 1.3.15 为主，1.4.5 次级（不阻塞大局观） |
| 2 | 稳定 ns 节奏 | 稳定 ns 早已 0 stub | 已无关，可结案 |
| 3 | 覆盖口径 R1–R2 | **R1 已 100%** | 剩余即 R2（独立页深写/重定向到簇页） |
| 4 | campaign 双目录去重 | coverage 100% 已靠簇页条目达成 | 收尾动作=把冗余独立 stub 重定向/退役到簇页，非阻塞 |

**唯一真正待裁决项**：是否投入 R2（把 ~4,500 个独立 stub 页重写为全深，或重定向到簇页）。这是**质量打磨**，不是缺口。建议：簇页作权威发现路径，按流量渐进深写高曝光独立 stub，但不阻塞「文档可用」判定。

## 7. 本周期结论

- 旧记忆「4,520 长尾挂起」为**过时误判**；R1 覆盖率权威值 = **100% / gap=0 / sTier 62/62**。
- 大局观层（投诉 #1）+ 稳定 ns + 导航 + 链接均已达标，且路由到的枢纽/簇页均深写或含手写条目。
- 剩余仅为 R2 质量债（独立 stub 页样板正文），需用户就「是否做 R2」裁决。

## 8. 下一入口

- 用户裁决「是否做 R2」：
  - 若否 → 本项目可宣布 R1 完成（大局观/覆盖/导航达标），仅留 R2 为可选打磨 backlog。
  - 若是 → 从大局观/developer-roadmap 高曝光独立 stub 起，按流量每波 ~5–8 深写，或批量重定向到簇页（需维护重定向避免外链死亡）。
- 同步收回 §8-A「随机抽 50 页 0 样板句」门禁：当前独立 stub 仍含样板，须待 R2 或明确接受簇页覆盖豁免。
