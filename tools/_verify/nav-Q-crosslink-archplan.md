# nav-Q 交叉链接 + ARCH-PLAN 登记报告

**日期**: 2026-10-07
**执行**: worker-143（nav-Q）
**依据**: Boss #11678 / #11687 / #11749
**约束遵守**: 只改 2 个 `campaign-event-system.md` + `ARCH-PLAN.md`；未删任何文件；未改 `campaign-events.md`；未碰 `templates/**`；未改判据。

---

## A. 反向交叉链接（campaign-event-system → campaign-events）

**背景**: `campaign-events.md` 已 3 处链向 `campaign-event-system`（zh:8/315/321；en 同），但 `campaign-event-system.md` 无反向链。本次补上。

**形态**: 同目录兄弟页 = `../campaign-events`（叶子页 → 同桶兄弟是 `../X`，不是 `./X`）。

### A-1 zh 版

文件: `content/v1.3.15/zh/architecture/campaign-event-system.md:242`

新增行（「↔ 同级导航」表末行）:
```
| [战役事件总线](../campaign-events) | 事件总线机械原理 + 接入手册（分工：本页 = 三类协作心智模型；该页 = 机械原理与接入） |
```

### A-2 en 版

文件: `content/v1.3.15/en/architecture/campaign-event-system.md:242`

新增行（「↔ Sibling Navigation」表末行）:
```
| [Campaign Event Bus](../campaign-events) | Event bus mechanics + integration manual (division: this page = three-class collaboration mental model; that page = mechanics & integration) |
```

**分工说明**:
- `campaign-event-system.md` = 三类协作心智模型（`CampaignEvents` / `CampaignEventDispatcher` / `CampaignEventReceiver` 如何协作）
- `campaign-events.md` = 事件总线机械原理 + 接入手册（Behavior 订阅/退订、事件时机与生命周期）

---

## B. ARCH-PLAN 登记（两页均登记为实际产出）

文件: `tools/_verify/ARCH-PLAN.md:135-140`

新增段落原文:
```markdown
| worker-B（补充） | `campaign-event-system.md` | v1.3.15 | `content/v1.3.15/zh/architecture/campaign-event-system.md` + `content/v1.3.15/en/architecture/campaign-event-system.md` | 双语；实际产出，与 `campaign-events.md` 分工互补 |

**worker-B 实际产出登记（2026-10-07）**: 计划名 `campaign-events.md`，实际产出两页（均双语、互链）：
- `campaign-event-system.md` = 三类协作心智模型（`CampaignEvents` / `CampaignEventDispatcher` / `CampaignEventReceiver` 如何协作）
- `campaign-events.md` = 事件总线机械原理 + 接入手册（Behavior 订阅/退订、事件时机与生命周期）
两页均已存在且 0 断链；避免下一批按计划名判「缺页」再重派（今日已发生 3 次）。
```

**目的**: 避免下一批按计划名 `campaign-events.md` 判「缺页」再重派（今日已发生 3 次）。

---

## audit-links 批前/批后读数

命令: `node tools/audit-links.mjs`

| 指标 | 批前 | 批后 | 变化 |
|------|------|------|------|
| FILES | 39033 | 39033 | 0 |
| TOTAL_LINKS | 149144 | 149146 | +2（两条新反向链） |
| BROKEN_LINKS | 0 | 0 | 0 |
| FILES_WITH_BROKEN | 0 | 0 | 0 |

**结论**: 新增 2 条链接均可解析，BROKEN_LINKS 保持 0，未引入断链。

---

## C. crash-boundaries.md 归属

`content/v1.3.15/{zh,en}/architecture/crash-boundaries.md` 的 mtime = 2026-10-03/04（zh 2026-10-03 23:26:06 +0800；en 2026-10-04 23:25:00 +0800），**早于本会话开工（约 2026-10-07 04:33Z）**，属开工前既有修改（git 状态 `M`），**非本线所改**，未动它。

---

## 变更清单

| 文件 | 改动 |
|------|------|
| `content/v1.3.15/zh/architecture/campaign-event-system.md` | +1 行（同级导航表新增 campaign-events 反向链） |
| `content/v1.3.15/en/architecture/campaign-event-system.md` | +1 行（Sibling Navigation 表新增 campaign-events 反向链） |
| `tools/_verify/ARCH-PLAN.md` | +6 行（worker-B 补充行 + 实际产出登记段落） |

未删任何文件；未改 `campaign-events.md`；未碰 `templates/**`；未改判据/阈值。
