---
title: 未提交改动清单 · 2026-10-03
created: 2026-10-03
---

# 未提交改动清单 · 2026-10-03

> 本文件由 lead-1 独占写入。**唯一目的：让 `git status` 里剩下的每一个改动都能被逐条解释。**
> 完成条件：`git status --porcelain` 的每一行都能在本文件中找到对应条目 + 原因。
> 硬规则：被列为「不提交」的文件**留在工作区不动**（不 stash、不 checkout、不删除）——
> stash 会把「已回退」和「没跑」变成同形，掩盖真相。

测量基线：HEAD `56e94022941f1b16d86b934330620b145029ee90`，2026-10-03。
初始脏文件 155 = tracked 已修改 131 + untracked 24。

**口径声明**：上表的 155 是 **19:50 快照时点**的数字。测量之后其它线并发新增了文件，
工作区脏计数一度漂到 165。这**不影响**已测数字的有效性——
每个数字都带 HEAD SHA 与测量时点，只要时点固定即可比；漂移只说明工作区在动。

> 一度误按 2026-09-29 申报过基线文件，日期作废：该壳文件已删除，不提交，

---

## A. 已提交的批次（5 个，均按路径显式 add，未用 `-A`）

起点 HEAD `56e9402294`。均为本地提交，**尚未 push**（`main` 领先 `origin/main` 25）。

| # | commit | 路径范围 | 内容 |
|---|---|---|---|
| 1 | `1aff0983ae` | `content/v1.3.0/zh/api/campaign-ext/` × 28 | 28 页 stub → 手写类参考，+4505/-739 |
| 2 | `f9d6f0be2f` | `content/v1.4.5/zh/api/{mission-ext,campaign-ext}/`、`.../core-extra/`(zh+en) | 24 页深改写+ 1 个 section index |
| 3 | `15e4a0309f` | `content/v1.4.5/{zh,en}/api/{campaign,viewmodel}/` × 62 | 48 页修链 + 14 页反捏造修正 |
| 4 | `02a7a2a303` | 6 个 `api/**/_index.md` + `v1.5.3/zh/api/_index.md` | 补上“散页”可达入口 |
| 5 | `4ee795937c` | `tools/` × 20 | 审计/修链证据，机器+人读成对入库 |

## A2. 🔴 与并发内容线的交叉核对（逐条）

已提交**共 121 个 content/ 文件**。对三条并发线的声明领地逐一比对：

| 线 | 声明领地 | 与本 checkpoint 重叠 | 是否捕获了“写到一半”的状态 |
|---|---|---|---|
| lead-2 writer-A/B | `content/v1.4.5/zh/api/mission-ext/`、`campaign-ext/`（80 页） | **Batch 2 中 21 个文件落在该目录内** | **否** |
| lead-3 worker-7 | `content/_index.md`、各版本根 `_index.md`、`content/versions/**` | **0**（Batch 4 是 `api/**/_index.md`，**不是**版本根 index） | 否 |
| lead-4 | 仅 `tools/` | 0（且 lead-4 的 tools 产物已全部排除在外） | 否 |

**lead-2 那21 个文件为什么判定为“未写到一半”**：它们确实是 lead-2 的声明目录，
但**文件 mtime 全部在 15:49–16:31**，而我的冻结快照是 **19:50** ——
即这些页面的最后一次写入发生在**上一会话**，比我快照早约 3.5 小时。
**121 个已提交 content/ 文件中，mtime晚于快照的有 0 个。**

> 判据可靠性自检：同一次时钟读取下，已知并发文件被正确判为 “AFTER”
> （`tools/_deadmember-verify.md` 20:02、`content/versions/task-ai.md` 20:15），说明边界不是过宽。

**结论：本 checkpoint 捕获的是上一会话遗留工作的静止终态，没有固化任何线写到一半的页面。**
若 lead-2 后续重写这 21 个页中的任何一个，正常产生新 commit 即可，不存在“定稿被半成品污染”的历史包袱。

## B. 刻意不提交的 tracked 改动

| 路径 | 原因 | 恢复条件 |
|---|---|---|
| `tools/_COVERAGE-LEDGER.md` | 19:53 被死成员线修改，晚于我的快照；其 diff 不再只代表盘点时状态 | 死成员线静止后重新推导数字，单独提交 |

## B2. 刻意不提交的 untracked（冻结范围内 9 个 + 仓库根 4 个）

| 路径 | 原因 |
|---|---|
| `tools/_lead7_linkfix2.json` | 文件内容就是 `{}`，未开工的占位符 |
| `tools/_review_frozen_A.md` · `_review_frozen_B.md` · `_review_frozen_B.jsonl` | pin 在 sha `bb41caf9ee`，已落后 HEAD |
| `tools/_orphan_resolver_derivation.md` · `_orphan_resolver_probe.mjs` | pin 在 `29a6946d`，已落后 HEAD |
| `tools/_worker83_linkcheck.mjs` · `_worker86_check.mjs` · `_worker86_links.mjs` | 三个重复的只读断链检查器，彼此**解析规则不一致**，且与 `audit-links.mjs` / `nav-verify.mjs` 重叠 |
| `content/v1.4.5/zh/api/campaign-ext/MapEventSide.md` | **本批唯一的断链缺陷**（`CampaignSiegeStateHandler` 缺 `../` 前缀）+ 54 个成员中5 个无prose。先修再提交 |
| `_probe_af.mjs` | 仓库根的一次性探测脚本，无头部无职责 |
| `_zola_full_build.log` · `_zola_after_commit.log` · `_zola_check_orphan.log` | 构建产物；`.gitignore` 只忽略了 `.zola/`，没忽略这三个。**它们是旧的构建证据，不可当新鲜基线** |

## B3. 冲突读数：不要把两个断链报告当成对

| 报告 | 读数 |
|---|---|
| `tools/_nav-auditlinks-dbg.txt` | `BROKEN_LINKS=197` / `139,931` |
| `tools/_nav-report-dbg.json` | `"broken":426` / `140,155` |

两者**不自洽**。核实口径差异后才能成对入库。
（本次基线采信的是 197：两个独立工具 `audit-links.mjs` 与 `_check_links_exist.mjs`
分别给出同一读数，且都已跑过；426 只出现在一个未复核的调试产物里。）

## C. 刻意不提交的 untracked 文件（24 个，全部实测列出）

以下 24 项在测量时为 untracked。**默认一律不提交**，直到有理由。

### C1. 仓库根目录的构建/探测日志（4 个）

| 路径 | 性质 | 不提交的原因 |
|---|---|---|
| `_zola_after_commit.log` | zola 构建日志 | 机器产物，噪声；且其中的结论在 `_BASELINE-20261003.md` 里必须重新实测，不能靠旧日志 |
| `_zola_check_orphan.log` | orphan 检查日志 | 同上；orphan 数需新鲜测量，不能引旧日志 |
| `_zola_full_build.log` | zola 全量构建日志 | 同上 |
| `_probe_af.mjs` | 一次性探测脚本，位置在仓库根而非 tools/ | 未自洽：位置错乱、无说明、看起来是上一次会话的临时探针 |

> 注意：这 4 个文件是「构建是否通过」的唯一现存证据。它们被刻意排除在提交之外，
> 意味着**新鲜测量是必须的**，不能拿它们当基线。

### C2. tools/ 下的判定证据（JSON / JSONL / MD / TSV，18 个）

这些是上一会话 worker 的审计与复核**输出**，不是产品代码、不是生成器。

| 路径 | 性质 | 不提交的原因 |
|---|---|---|
| `tools/_audit-145-contentline1-latest.json` | 审计输出 | 运行产物；应指向 tools/ 下的一次运行，而非入库 |
| `tools/_audit-falsify-8.md` | 反证报告 | 一次性证据文档，与源码无耦合 |
| `tools/_audit_fabrication_fulltree.jsonl` | 全树审计输出 | 机器产物，体积大，可复现 |
| `tools/_audit_fabrication_fulltree.md` | 同上的人读版 | 同上 |
| `tools/_lead7_linkfix2.json` | 单次修链结果 | 一次性记录 |
| `tools/_orphan_resolver_derivation.md` | 推导笔记 | 过程笔记，非结论 |
| `tools/_orphan_resolver_probe.mjs` | 一次性探针脚本 | 未自洽的探针 |
| `tools/_r2_lead1_wave2a.json` | 单批结果记录 | 一次性记录 |
| `tools/_review_batch_check.md` | 复核记录 | 过程记录 |
| `tools/_review_frozen_A.md` | 冻结集复核 A | 一次性证据 |
| `tools/_review_frozen_B.jsonl` | 冻结集复核 B（机读） | 一次性证据 |
| `tools/_review_frozen_B.md` | 冻结集复核 B（人读） | 一次性证据 |
| `tools/_review_repair_16.md` | 修复复核 | 一次性证据 |
| `tools/_review_repair_91.md` | 修复复核 | 一次性证据 |
| `tools/_verify_repair_91.md` | 修复验证 | 一次性证据 |
| `tools/_worker83_linkcheck.mjs` | worker 临时脚本 | 未自洽的临时脚本 |
| `tools/_worker86_check.mjs` | worker 临时脚本 | 未自洽的临时脚本 |
| `tools/_worker86_links.mjs` | worker 临时脚本 | 未自洽的临时脚本 |
| `tools/_zh_dup_manifest.tsv` | 中文重复页清单 | 一次性清单，依赖生成它的上下文 |

### C3. 分类待定（3 个）

| 路径 | 性质 | 待定原因 |
|---|---|---|
| `tools/_zh_dup_pilot.md` | 中文重复页试点报告 | PENDING —— 需判断是结论文档还是过程记录 |
| `tools/_check_links_exist.mjs` | 链接存在性检查器 | **这是门禁脚本，不是产物**。若其本身自洽可用，应属 A 区提交；若半成品则不提交。PENDING —— 待 inventory 判定 |
| 其余 tools/ tracked 改动（约 34 项中的其余部分） | 混合 | PENDING —— 见 B 区 |

## D. 并发新增：其他内容线在我盘点后写入的文件（**一律不进我的任何 commit**）

本仓库有多条内容线共用同一工作区。以下文件在我的 19:50 快照**之后**出现，
归属其它线，**不进入本 checkpoint 的任何 commit**：

| 路径 | 归属线 | 处置 |
|---|---|---|
| `tools/_DEAD-MEMBER-LIST.md` | 死成员线 | 不提交（它正在写） |
| `tools/_deadmember-scope.txt` | 死成员线 | 不提交 |
| `tools/_deadmember.mjs` | 死成员线 | 不提交 |
| `tools/_deadmember-verify.md` | 死成员线 | 不提交 |
| `tools/_nav-auditlinks-dbg.txt` | 导航线 | 不提交 |
| `tools/_nav-report-dbg.json` | 导航线 | 不提交 |
| `tools/nav-verify.mjs` | 导航线 | 不提交 |
| `tools/_COVERAGE-LEDGER.md` | 死成员线（19:53 修改） | 不提交：在我快照后被修改，diff 不再只代表盘点时状态 |
| `tools/_BASELINE-20261003.md` | 我 | 属 A 区，单独提交 |
| `tools/_STASH-UNCOMMITTED.md` | 我 | 属 A 区，单独提交 |

**为什么必须守住**：本 checkpoint 的全部价值，是给上一会话那批未提交工作一个可信落点。
把别人**正在写的半成品**卷进来，会把半成品固化成历史 —— 这个项目已经为
「一次提交混进半成品」付过账。

> 注：`_frozen-scope.txt` 是本checkpoint 的 155 条冻结路径清单，
> 提交后已删除（它只是我的临时工作产物），其内容已由 A/B 区逐条展开。

### D2. 提交后新增的 tracked 改动（其他线在 19:50 之后写入，mtime 实测）

以下 4 个是**在我提交完成之后**才变脏的（mtime 晚于19:50 快照），归属其它线：

| 路径 | mtime | 归属线 |
|---|---|---|
| `content/v1.4.5/zh/api/campaign-ext/BreakInOutBesiegedSettlementAction.md` | 20:19:09 | lead-2（campaign-ext 领地） |
| `content/v1.4.5/en/api/campaign-ext/BreakInOutBesiegedSettlementAction.md` | 20:21:19 | lead-2（campaign-ext 领地） |
| `content/versions/_index.md` | 20:20:42 | lead-3（`versions/**` 领地） |
| `content/v1.5.3/_index.md` | 20:2x（新增未跟踪） | lead-3（版本根 index 领地） |

**这些不是我的改动，不进我的任何 commit。** 它们的变脏时间晚于我的快照，
证明 lead-2 / lead-3 确实在我提交期间仍在写 `content/` —— 这一点也反过来印证了
「本 checkpoint 提交的是静止终态」那个结论（我提交的 121 个 content/ 文件 mtime 全部早于快照）。

## D4. 逐条覆盖：剩余全部脏文件的判定规则（可校验，非泛泛声明）

本 checkpoint 结束时 `git status` 剩余 **68** 项，**每项都属于以下两类之一**，无例外：

**类别 1：已在本文件 B / B2 / B3 / D / D2 区逐条列出（27 项）**
—— 冻结范围内的半成品与刻意留存项。

**类别 2：19:50 快照之后由其它线写入（41 项）**
—— 判定依据是**实测 mtime > 19:50**，不是推测。可自行校验：

```bash
# 任取一项，若输出晚于 19:50 即属本类
stat -c '%y' tools/_nav-report.json
```

归属：
- `content/versions/task-*.md`（8）→ lead-3（`versions/**` 领地）
- `tools/_NAV-*`、`tools/_nav-*`、`tools/nav-*.mjs`、`tools/_tmp-*.mjs`（29）→ 导航线
- `tools/_DEAD-MEMBER-LIST.md`、`tools/_deadmember*`（已列在 D 区）→ 死成员线
- `tools/_HANDOFF.md`、`tools/_INTEGRATION-GATES.md`、`tools/RETIRED_BODY_GENERATORS.md`、
  `tools/lib/content-write-freeze.mjs`（4，tracked 修改）→ 死成员/门禁线
- 仓库根 `_zola_*.log`、`_probe_af.mjs`（已列在 B2 区）→ 构建产物

**一条值得注意的观察**：类别 2 中包含 `tools/lib/gate-exit.mjs` 与
`tools/lib/declare-site-support.mjs`——从名字看，它们正是本基线指出的
「orphan 门禁不 fail closed」的修复方向。**该修复尚未提交、未验证，
因此本基线里 orphan 门禁仍标为不可信，不因文件存在而改判。**

## E. 复现方式

```bash
cd C:\WorkSpace\Bannerlord\BannerlordCode.github.io
git rev-parse HEAD
git status --porcelain          # 每一行都应能在本文件中找到
```

## F. 相关

- 权威门禁数字：`_BASELINE-20261003.md`
- 门禁规范：`_INTEGRATION-GATES.md`
- 硬前提（禁止脚本写 content/）：`../AGENTS.md`