# nav-S 批次报告：类1（计数行）/ 类2（少列）修复

- 执行：worker-S（Pi Team）
- 日期：2026-10-07
- 仓库：`C:\WorkSpace\Bannerlord\BannerlordCode.github.io`（Zola 站）
- 实际 HEAD：`8b246f46d4`（任务书写的 `06214dc20a` 已过时；以实际仓库状态为准）
- 工具：`tools/nav-section-index.mjs`（护栏 `tools/lib/content-write-freeze.mjs` 的 `assertStructuralScope` 已落盘，`GUARD_STATUS=PRESENT`）
- 判据：`tools/_verify/nav-D-check.mjs`（只读，未改）

## 基线（批前）

| 指标 | 值 | 来源 |
|---|---|---|
| 索引页总数（含 marker） | 111 | nav-D-check |
| 类1（有链接无数量） | **103** | nav-D-check |
| 类2（少列） | **33** | nav-D-check |
| BROKEN_LINKS | **0** | `node tools/audit-links.mjs`（FILES=39033, TOTAL_LINKS=149146） |
| scope checked / out_of_scope | **8 / 8** | `node tools/_verify/check-section-index-scope.mjs` |

批前 scope 的 8 个 out_of_scope 全部是**历史遗留**（其他 worker 的块外改动，含 2 个 NEW 页），与本批 105 页无交集——本批目标是 out_of_scope 不增。

## Pass 1：类2（少列 33 桶）—— 已完成 ✅

命令：

```bash
node tools/nav-section-index.mjs --dry-run --batch 1/2 --batch-list tools/_verify/nav-S-batch-list.txt <33 桶>
node tools/nav-section-index.mjs --apply  --batch 1/2 --batch-list tools/_verify/nav-S-batch-list.txt <33 桶>
```

- 干跑：`DELETED_OR_REWRITTEN_LINES=0`，`TOTAL_ADD=229`，`GUARD_STATUS=PRESENT`
- 实跑：`OK=32  FAILED=0  SKIPPED=1`，exit=0；R2 授权层 `R2_OK: 33 个桶全部在本批次清单内`
- 每桶写入后独立断言（deletedOrRewritten=0、outsideChanged=false）全部通过

### Pass 1 逐桶明细（33 桶）

| 桶 | children | ALREADY_IN_BLOCK | ADD | 结果 |
|---|---|---|---|---|
| content/v1.3.0/en/api/campaign | 1388 | 1355 | 33 | OK |
| content/v1.3.0/en/api/campaign-ext | 1223 | 1216 | 7 | OK |
| content/v1.3.0/en/api/core-extra | 528 | 520 | 8 | OK |
| content/v1.3.0/en/api/engine | 208 | 204 | 4 | OK |
| content/v1.3.0/en/api/gameplay | 17 | 15 | 2 | OK |
| content/v1.3.0/en/api/gui | 188 | 181 | 7 | OK |
| content/v1.3.0/en/api/localization | 57 | 54 | 3 | OK |
| content/v1.3.0/en/api/mission-ext | 1115 | 1103 | 12 | OK |
| content/v1.3.0/en/api/viewmodel | 448 | 433 | 15 | OK |
| content/v1.3.0/zh/api/campaign | 1388 | 1355 | 33 | OK |
| content/v1.3.0/zh/api/campaign-ext | 1223 | 1216 | 7 | OK |
| content/v1.3.0/zh/api/core-extra | 528 | 520 | 8 | OK |
| content/v1.3.0/zh/api/engine | 208 | 204 | 4 | OK |
| content/v1.3.0/zh/api/gameplay | 17 | 15 | 2 | OK |
| content/v1.3.0/zh/api/gui | 188 | 181 | 7 | OK |
| content/v1.3.0/zh/api/localization | 57 | 54 | 3 | OK |
| content/v1.3.0/zh/api/mission-ext | 1115 | 1103 | 12 | OK |
| content/v1.3.0/zh/api/viewmodel | 448 | 433 | 15 | OK |
| content/v1.3.15/en/api/campaign | 52 | 50 | 2 | OK |
| content/v1.3.15/en/api/core | 3 | 2 | 1 | OK |
| content/v1.3.15/en/api/gui | 58 | 56 | 2 | OK |
| content/v1.3.15/en/architecture | 16 | 9 | 7 | OK |
| content/v1.3.15/en/guide | 11 | 9 | 2 | OK |
| content/v1.3.15/zh/api/campaign | 52 | 50 | 2 | OK |
| content/v1.3.15/zh/api/core | 3 | 2 | 1 | OK |
| content/v1.3.15/zh/api/gui | 58 | 56 | 2 | OK |
| content/v1.3.15/zh/api/save-system | 109 | 108 | 1 | OK |
| content/v1.3.15/zh/architecture | 17 | 14 | 3 | OK |
| content/v1.4.5/en/api/campaign-ext | 1641 | 1631 | 10 | OK |
| content/v1.4.5/en | 5 | 3 | 2 | OK |
| content/v1.4.5/zh/api/core | 5 | 2 | 3 | OK |
| content/versions | 27 | 18 | 9 | OK |
| content（根） | 7 | 7 | 0 | SKIPPED（ADD=0） |

注：`content/v1.3.15/en|zh/architecture` 的加项含 `./campaign-events`（Boss 已撤回删除令的合法页面），路由语义 SIBLING，接进索引正确。

### Pass 1 后复核

- nav-D-check：**类2 33 → 1**，类1 103 → 103（pass1 只加链接不加计数，类1 不变是预期）
- 剩余类2 = `content/_index.md`（列出=0 磁盘=7）——**判据边际误报**：nav-D-check 的 siblingLinks 过滤在 `dirRel=''`（根桶）时 `target.startsWith('/')` 恒假，导致根桶链接数恒算 0；该页块内 7 条链接实际已齐全，工具干跑确认 ADD=0。判据不可改（任务约束），如实报告。

## Pass 2：类1（计数行 105 桶）—— 状态：进行中

（待补：工具修改 + 干跑/实跑 + 类1 改前/改后 + 幂等 + audit-links/scope 批后数）

## 两套数汇总

| 指标 | 批前 | Pass 1 后 | Pass 2 后 |
|---|---|---|---|
| 类1 | 103 | 103 | 待补 |
| 类2 | 33 | 1（根桶误报） | 待补 |
| BROKEN_LINKS | 0 | 0（pass1 后未复跑，待终跑） | 待补 |
| scope out_of_scope | 8 | 8（未复跑，待终跑） | 待补 |
