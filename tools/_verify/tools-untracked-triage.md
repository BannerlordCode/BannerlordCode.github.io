# tools/ Untracked 三分诊报告

> **测量时点**: 2026-10-07T09:09:58Z (UTC)  
> **测量命令**: `git ls-files --others --exclude-standard -z -- tools/`  
> **总文件数**: **1737**（漂移中，lead-21 测量时为 1734，已增长 3 个）

---

## ⚠️ 数字更正说明

**Boss 转述的「≈256」与 lead-21 更正的「1734」均不是当前值。**

- Boss 的 256 是更早时点的读数，已严重过时。
- lead-21 的 1734 是几分钟前的读数，当前已漂移到 **1737**。
- **原因**: 多条线（lead-13/18/20/22 等）在并发大量产出 untracked 文件，数量持续增长。
- **这是某一时点的快照，会漂移。** 下次测量时数字会不同。

### 0 字节文件更正

lead-21 报告「4 个 0 字节文件」，**实际只有 2 个**。

lead 使用的命令 `git ls-files --others --exclude-standard -- tools/ | while read f; do [ -s "$f" ] || echo "$f"; done` 因 git 对非 ASCII 路径（中文文件名）自动加引号，导致 `while read` 把引号当作文件名的一部分，`[ -s "$f" ]` 判断失败，产生 2 个假阳性。

**正确的 0 字节文件（2 个）**:
1. `tools/_verify/.batches/nb-v1.4.7-en.txt`
2. `tools/_verify/.tg-bulk.txt`

---

## 三分诊总览

| 类别 | 描述 | 文件数 |
|------|------|--------|
| ① | 下一轮会被引用（证据文件、清单、账本、脚本/工具、冻结凭证、评分器/验证器） | **260** |
| ② | 一次性临时文件（临时探针、perf-site、中间 diff、一次性 dump） | **1470** |
| ③ | 不该存在（杂项文件、0 字节文件、重定向事故产物） | **6（仍在）** |
| | **合计** | **1737** |

> **2026-10-07 实测更新**：`tools/**` untracked 现值 **80**（分诊时 1737/1738，持续漂移）。

---

## ③ 不该存在（6 个文件，仍在）

这些文件应该被清理，不应留在仓库中。

| 文件 | 原因 |
|------|------|
| `tools/_NAV-BASELINE.md.bak` | `.bak` 备份文件，不应提交 |
| `tools/_navI-zola-build.log` | 构建日志，写在 tools/ 根目录，属于重定向事故产物 |
| `tools/_verify/_navI-run.log` | 运行日志，同上 |
| `tools/_verify/_navI-zola-build.log` | 构建日志，同上 |
| `tools/_verify/.batches/nb-v1.4.7-en.txt` | **0 字节**，空批次输出 |
| `tools/_verify/.tg-bulk.txt` | **0 字节**，空临时生成文件 |
| `tools/_verify/perf-site/templates/macros/page-navigation.html.orig` | **GONE**（随 perf-site 一起被删，实测已不存在） |

---

## ② 一次性临时文件（1470 个文件）

这些文件是工作过程中的中间产物，不会被下一轮引用，可以清理。

### 按子目录/模式分布

| 子目录/模式 | 文件数 | 说明 |
|-------------|--------|------|
| `tools/_verify/perf-site/**` | 1412（**已作废**） | A/B 构建性能测试 Zola 站点，含 18.8MB page-navigation.json 的加载成本测量。**归属线 = lead-20**（线索：`tools/_verify/lead-20/VERIFICATION-LINE-20261007.md`、`tools/_verify/verify-prevnext-perf.md` 均提到 perf-site）。**该目录现已不存在**（2026-10-07 实测 `ls -d` 报 No such file or directory，被其归属线删除）⇒ ② 的 1412 这个数已作废 |
| `tools/_verify/.batches/**` | 13 | 批次导航构建输出（nb-v1.3.0/1.3.15/1.4.5/1.4.6/1.4.7/1.5.3 的 en/zh） |
| `tools/_verify/_tmp/**` | 20 | BASE/OURS/THEIRS 合并临时文件 + mt.txt + proto-queue.mjs 原型 |
| `tools/_verify/pathtest/**` | 7 | 路径测试 Zola 站点 |
| `tools/_verify/eol-pair/**` | 3 | EOL CRLF/LF 对比测试 |
| `tools/_verify/_navC-fixture/**` | 2 | 导航 C 测试 fixture |
| `tools/_verify/fixtures/**` | 1 | reverse-comment-typo.md fixture |
| `tools/_verify/.tg-*.txt` | 7 | 临时生成文件（.tg-paths/have/have2/expected/data/2b） |
| `tools/_verify/.cg-*.txt` | 2 | 一次性扫描输出（banner-sigs/banner-diff） |
| `tools/_verify/_navI-*` | 3 | 一次性导航扫描输出（orphans-now.json 等） |
| `tools/_verify/_navC-scan-out.tsv` 等 | 3 | 一次性扫描输出 |
| `tools/_verify/_probeA_sents.txt` | 1 | 一次性探针输出 |

### 关键子目录详解

#### `tools/_verify/perf-site/`（1412 文件）
- **性质**: A/B 构建性能测试站点
- **内容**: Zola 站点，包含 v1.3.0 的 campaign API 文档页面、18.8MB 的 page-navigation.json、_ab_test.py 测试脚本
- **用途**: 测量 `load_data(path="data/page-navigation.json")` 的构建成本
- **结论**: 一次性性能测试，不会被下一轮引用

#### `tools/_verify/_tmp/`（20 文件）
- **性质**: 合并冲突解决的临时文件
- **内容**: BASE_*/OURS_*/THEIRS_* 前缀的模板文件副本、mt.txt diff 输出、proto-queue.mjs 原型脚本
- **结论**: 一次性合并临时文件

#### `tools/_verify/.batches/`（13 文件）
- **性质**: 批次导航构建输出
- **内容**: 各版本（1.3.0/1.3.15/1.4.5/1.4.6/1.4.7/1.5.3）的 en/zh 批次文件
- **结论**: 一次性构建输出

---

## ① 下一轮会被引用（260 个文件）

这些文件是证据、清单、账本、脚本/工具、冻结凭证或评分器/验证器，下一轮工作会引用。

### 按子目录分布

| 子目录 | 文件数 | 说明 |
|--------|--------|------|
| `tools/_verify/`（根级） | 185 | 脚本、证据文件、清单、进度文件 |
| `tools/`（根级） | 68 | 脚本、证据文件、审查文件 |
| `tools/_EVIDENCE-selfcheck-20261004/` | 6 | 自检证据 |
| `tools/data/` | 1 | _ledger-bookings.json 账本 |

### 根级 tools/ 文件（68 个）

#### 脚本/工具（.mjs/.cjs）
- `tools/gen-nav-graph.mjs` — 导航图生成脚本
- `tools/coverage-census.mjs` — 覆盖度普查脚本
- `tools/_arbitrate-file-field.mjs` — 文件字段仲裁
- `tools/_check-exact-paths.mjs` — 精确路径检查
- `tools/_check_shell_banner.mjs` — shell banner 检查
- `tools/_cite-audit.mjs` — 引用审计
- `tools/_cite-contract.mjs` — 引用契约
- `tools/_cite-explore.mjs` — 引用探索
- `tools/_contract-dupes.mjs` — 契约去重
- `tools/_contract-merge-inventory.mjs` — 契约合并清单
- `tools/_contract-pairs.mjs` — 契约配对
- `tools/_contract-patch-4v.mjs` — 契约补丁
- `tools/_contract-patch-4w2.mjs` — 契约补丁
- `tools/_contract-patch-4w3.mjs` — 契约补丁
- `tools/_contract-patch-4yz.mjs` — 契约补丁
- `tools/_contract-patch-w4w5.mjs` — 契约补丁
- `tools/_contract_section_gate.mjs` — 契约 section 门控
- `tools/_count-exact-open.mjs` — 精确计数
- `tools/_crlf-audit.mjs` — CRLF 审计
- `tools/_deadmember-negative-checks.mjs` — 死成员负检查
- `tools/_doc-check.mjs` — 文档检查
- `tools/_en-pool.mjs` — 英文池
- `tools/_en-pool2.mjs` — 英文池 2
- `tools/_engine-batch.mjs` — 引擎批次
- `tools/_fffd-scan.mjs` — FFFD 扫描
- `tools/_group_by_field.mjs` — 按字段分组
- `tools/_lead7_gate.mjs` — lead-7 门控
- `tools/_ledger-attribute-36.mjs` — 账本属性
- `tools/_ledger-authoritative.mjs` — 权威账本
- `tools/_ledger-delivered.mjs` — 已交付账本
- `tools/_ledger-reconcile.mjs` — 账本对账
- `tools/_ledger-v2.mjs` — 账本 v2
- `tools/_ledger-v4.mjs` — 账本 v4
- `tools/_orphan_resolver_probe.mjs` — 孤儿解析探针
- `tools/_scan-multi-cs.mjs` — 多 CS 扫描
- `tools/_selfcheck-consistency.mjs` — 自检一致性
- `tools/_spotcheck-64.mjs` — 抽查 64
- `tools/_src-manifest.mjs` — 源码清单
- `tools/_template-classify.mjs` — 模板分类
- `tools/_unit-profile.mjs` — 单元画像
- `tools/_verify-alias-table.mjs` — 别名表验证
- `tools/_verify-review34.mjs` — review-34 验证
- `tools/_verify-w36-claims.mjs` — w36 声明验证
- `tools/_worker83_linkcheck.mjs` — worker-83 链接检查
- `tools/_worker86_check.mjs` — worker-86 检查
- `tools/_worker86_links.mjs` — worker-86 链接

#### 证据/清单/审查文件（.md/.txt/.json/.jsonl）
- `tools/CONTRACT-INDEX.md` — 契约索引
- `tools/_BACKLOG-NOT-MINE.md` — 非我的 backlog
- `tools/_BC-CITATION-AUDIT-20261004/**` — 引用审计证据
- `tools/_DUPLICATE-PAGE-PAIRWISE.md` — 重复页面对
- `tools/_RECONSTRUCTION-LEDGER.md` — 重建账本
- `tools/_contract-merge-plan.md` — 契约合并计划
- `tools/_docs-review-2026-10-04.md` — 文档审查
- `tools/_docs-review-2026-10-04-r2.md` ~ `r8.md` — 文档审查修订
- `tools/_docs-review-TEMPLATE.md` — 文档审查模板
- `tools/_evidence-lead8-bigtrees-census-20261004.md` — lead-8 大树普查
- `tools/_evidence-lead8-small-trees-census-20261004.md` — lead-8 小树普查
- `tools/_lead7_linkfix2.json` — lead-7 链接修复
- `tools/_orphan_resolver_derivation.md` — 孤儿解析推导
- `tools/_review_frozen_A.md` — 冻结审查 A
- `tools/_review_frozen_B.jsonl` — 冻结审查 B
- `tools/_review_frozen_B.md` — 冻结审查 B

### tools/_verify/ 根级文件（185 个）

#### 脚本/工具（.mjs/.cjs）
- `tools/_verify/snapshot.mjs` — 快照脚本
- `tools/_verify/sentence-scorer.mjs` — 句子评分器
- `tools/_verify/v130-tier-scan.mjs` — v1.3.0 分层扫描
- `tools/_verify/v1.3.15-tier-scan.mjs` — v1.3.15 分层扫描
- `tools/_verify/v1.4.5-tier-scan.mjs` — v1.4.5 分层扫描
- `tools/_verify/enum-members.mjs` — 枚举成员
- `tools/_verify/classify-tiers.mjs` — 分层分类
- `tools/_verify/census-criteria.mjs` — 普查标准
- `tools/_verify/contract-fence-walk.mjs` — 契约围栏遍历
- `tools/_verify/apply-howto-batch1.mjs` — howto 批次应用
- `tools/_verify/_coverage-census-20261007.mjs` — 覆盖度普查
- `tools/_verify/_condense.mjs` — 压缩脚本
- `tools/_verify/_census-probe.mjs` — 普查探针
- `tools/_verify/_check-sections.cjs` — section 检查
- `tools/_verify/_navC-scan.mjs` — 导航 C 扫描
- `tools/_verify/_navC-classify.mjs` — 导航 C 分类
- `tools/_verify/_nav-r2-data-check.cjs` — 导航 r2 数据检查
- `tools/_verify/_navQ-compare.mjs` — 导航 Q 对比
- `tools/_verify/lead6-w63-write-assert.mjs` — lead-6 w63 写入断言
- `tools/_verify/lead6-w63-section-audit.mjs` — lead-6 w63 section 审计
- `tools/_verify/lead6-w57-batch04.manifest.mjs` — lead-6 w57 批次清单
- `tools/_verify/lead6-w57-batch04.callsites.mjs` — lead-6 w57 调用点
- `tools/_verify/_verify_zh01.mjs` — 中文 01 验证
- `tools/_verify/_tier-probe-v130.mjs` — 分层探针
- `tools/_verify/_tier-probe2-v130.mjs` — 分层探针 2
- `tools/_verify/_tier-probe3-v130.mjs` — 分层探针 3
- `tools/_verify/_tier-probe4-v130.mjs` — 分层探针 4
- `tools/_verify/.w65fffd.mjs` — w65 fffd
- `tools/_verify/.w65b4tier.mjs` — w65 b4 分层
- `tools/_verify/.w65b4guard2.mjs` — w65 b4 守卫 2
- `tools/_verify/.w65b4calls.mjs` — w65 b4 调用
- `tools/_verify/.w65b4apply.mjs` — w65 b4 应用
- `tools/_verify/.w65apply.mjs` — w65 应用
- `tools/_verify/.w65accept.mjs` — w65 接受
- `tools/_verify/.grep145.mjs` — grep-145
- `tools/_verify/tmp-linktest.cjs` — 链接测试
- `tools/_verify/build-gt10KB-audit.mjs` — 大于 10KB 构建审计

#### 证据/清单/进度文件
- `tools/_verify/pilot-evidence/**` — 13 个试点证据文件
- `tools/_verify/arch-before/**` — 8 个架构基线文件
- `tools/_verify/lead6-w63-stagecheck/**` — 3 个阶段检查文件
- `tools/_verify/lead6-w63-b04-calib/**` — 2 个校准文件
- `tools/_verify/fence-fix/**` — 3 个围栏修复文件
- `tools/_verify/lead6-w63-outofscope/**` — 4 个范围外文件
- `tools/_verify/nav-T-system-citations.md` — T 系统引用
- `tools/_verify/nav-S-index-counts.md` — S 索引计数
- `tools/_verify/nav-S-batch-list.txt` — S 批次清单
- `tools/_verify/nav-R-templates-before.txt` — R 模板
- `tools/_verify/nav-Q-crosslink-archplan.md` — Q 交叉链接架构计划
- `tools/_verify/alias-table-evidence.tsv` — 别名表证据
- `tools/_verify/merge-analysis.md` — 合并分析
- `tools/_verify/fix-mission-refs-evidence.md` — 任务引用修复证据
- `tools/_verify/lead-arch2-PROGRESS.md` — 架构 2 进度
- `tools/_verify/lead-8-worker-log.txt` — lead-8 worker 日志
- `tools/_verify/lead-8-touched.txt` — lead-8 触碰文件
- `tools/_verify/lead-22-save-graph-FACTSPACK.md` — lead-22 保存图事实包
- `tools/_verify/lead-22-PROGRESS.md` — lead-22 进度
- `tools/_verify/lead-22-af.judge.json` — lead-22 评判
- `tools/_verify/N-frozen.md` — 冻结 N
- `tools/_verify/DISPATCH-TEMPLATE.md` — 分发模板
- `tools/_verify/_navC-report.md` — 导航 C 报告
- `tools/_verify/_ctl-b-damage.md` — 控制 B 损害
- `tools/_verify/_ctl-a-good.md` — 控制 A 良好
- `tools/_verify/tiers-v1.3.0.md` — v1.3.0 分层
- `tools/_verify/tiers-v1.3.0-zh.json` — v1.3.0 中文分层
- `tools/_verify/tiers-v1.3.0-en.json` — v1.3.0 英文分层
- `tools/_verify/routed-dead-links.tsv` — 死链接路由
- `tools/_verify/shell-missing-banner.txt` — 缺失 banner
- `tools/_verify/shell-cited-pages.txt` — 引用页面
- `tools/_verify/population-52.txt` — 52 总体
- `tools/_verify/zh-six-section-census.tsv` — 中文六 section 普查
- `tools/_verify/zh-six-section-census.METHOD.txt` — 中文六 section 普查方法
- `tools/_verify/zh-citation-forms.METHOD.txt` — 中文引用形式方法
- `tools/_verify/zh-all-tiers-7sec.tsv` — 中文全分层 7sec
- `tools/_verify/multi-cs-sentences.tsv` — 多 CS 句子
- `tools/_verify/missing-types-*.txt` — 12 个缺失类型文件
- `tools/_verify/queue-130-en-*.txt` — 3 个队列文件
- `tools/_verify/queue-130-zh-*.txt` — 3 个队列文件
- `tools/_verify/queue-1315-zh-*.txt` — 3 个队列文件
- `tools/_verify/census-130-en.json` — 普查 130 英文
- `tools/_verify/census-130-zh.json` — 普查 130 中文
- `tools/_verify/census-1315-zh.json` — 普查 1315 中文
- `tools/_verify/campaign-final-state.txt` — 战役最终状态
- `tools/_verify/bucket-listing-v2.jsonl` — 桶清单 v2
- `tools/_verify/batch1-s4r.jsonl` — 批次 1 s4r
- `tools/_verify/batch-zh-*.pages.txt` — 多个批次页面文件
- `tools/_verify/batch-campaign-en-01.*` — 多个战役批次文件
- `tools/_verify/engine-batch1.pages.txt` — 引擎批次 1
- `tools/_verify/engine-batch2.pages.txt` — 引擎批次 2
- `tools/_verify/lead6-w63-batch04.pages.txt` — lead-6 w63 批次 04
- `tools/_verify/lead6-w63-batch05.pages.txt` — lead-6 w63 批次 05
- `tools/_verify/lead6-w63-batch06.pages.txt` — lead-6 w63 批次 06
- `tools/_verify/lead6-w63-b06-done.pages.txt` — lead-6 w63 b06 完成
- `tools/_verify/lead6-w63-b06-current.txt` — lead-6 w63 b06 当前
- `tools/_verify/lead6-w63-b05.status.txt` — lead-6 w63 b05 状态
- `tools/_verify/lead6-w63-b05-done.pages.txt` — lead-6 w63 b05 完成
- `tools/_verify/lead6-w63-b04.status.txt` — lead-6 w63 b04 状态
- `tools/_verify/lead6-w63-b04-one.pages.txt` — lead-6 w63 b04 单页
- `tools/_verify/lead6-w57-batch04.pages.txt` — lead-6 w57 批次 04
- `tools/_verify/lead6-w57-batch04.pages.frozen` — lead-6 w57 批次 04 冻结
- `tools/_verify/lead6-w57-batch04.callsites.txt` — lead-6 w57 批次 04 调用点
- `tools/_verify/lead6-w57-batch04.probeA.pages.txt` — lead-6 w57 批次 04 探针 A
- `tools/_verify/lead6-w57-batch04.probeA.md` — lead-6 w57 批次 04 探针 A
- `tools/_verify/lead6-w57-batch04.probeB.pages.txt` — lead-6 w57 批次 04 探针 B
- `tools/_verify/lead6-w57-batch04.probeB.md` — lead-6 w57 批次 04 探针 B
- `tools/_verify/lead6-w65-batch04-cites.txt` — lead-6 w65 批次 04 引用
- `tools/_verify/banner-rollout-progress.txt` — banner 上线进度
- `tools/_verify/判据b-同义对-144.tsv` — 判据 b 同义对 144
- `tools/_verify/同名同义文件对.tsv` — 同名同义文件对
- `tools/_verify/lead6-w63-batch05.timing.tsv` — lead-6 w63 批次 05 计时
- `tools/_verify/lead6-w63-batch06.timing.tsv` — lead-6 w63 批次 06 计时
- `tools/_verify/batch-zh-03.HOLD.txt` — 中文批次 03 暂停
- `tools/_verify/batch-zh-03.HANDOFF.txt` — 中文批次 03 交接
- `tools/_verify/batch-zh-01.split.worker57.txt` — 中文批次 01 分割
- `tools/_verify/batch-zh-01.split.helper.txt` — 中文批次 01 分割辅助
- `tools/_verify/batch-zh-01.METHOD.txt` — 中文批次 01 方法
- `tools/_verify/batch-zh-01.FACTS.tsv` — 中文批次 01 事实
- `tools/_verify/batch-zh-01.BATCHES.md` — 中文批次 01 批次
- `tools/_verify/batch-zh-01.worker57.s4r.jsonl` — 中文批次 01 worker-57 s4r
- `tools/_verify/batch-campaign-en-01.s4r.jsonl` — 战役英文批次 01 s4r
- `tools/_verify/batch-campaign-en-01.pages.txt` — 战役英文批次 01 页面
- `tools/_verify/batch-campaign-en-01.m2-10KB.pages.txt` — 战役英文批次 01 m2-10KB
- `tools/_verify/batch-campaign-en-01.gt10KB.selection-audit.json` — 战役英文批次 01 大于 10KB 选择审计
- `tools/_verify/batch-campaign-en-01.gt10KB.pages.txt` — 战役英文批次 01 大于 10KB
- `tools/_verify/batch-campaign-en-01.citation-audit.json` — 战役英文批次 01 引用审计
- `tools/_verify/batch-campaign-en-01.METHOD.txt` — 战役英文批次 01 方法
- `tools/_verify/batch-campaign-en-01.HOLD.txt` — 战役英文批次 01 暂停

### tools/_EVIDENCE-selfcheck-20261004/（6 个文件）
- `tools/_EVIDENCE-selfcheck-20261004/eol-crlf.norm.txt` — EOL CRLF 归一化
- `tools/_EVIDENCE-selfcheck-20261004/eol-crlf.txt` — EOL CRLF
- `tools/_EVIDENCE-selfcheck-20261004/eol-lf.norm.txt` — EOL LF 归一化
- `tools/_EVIDENCE-selfcheck-20261004/eol-lf.txt` — EOL LF
- `tools/_EVIDENCE-selfcheck-20261004/rule2-AFTER.txt` — 规则 2 后
- `tools/_EVIDENCE-selfcheck-20261004/rule2-BEFORE.txt` — 规则 2 前

### tools/data/（1 个文件）
- `tools/data/_ledger-bookings.json` — 账本预订

---

## 备注

- 本报告仅做分类，不执行任何 git 写操作（无 add/commit/push）。
- 数字会漂移，下次测量时需重新统计。
- 0 字节文件实际为 2 个，非 lead-21 报告的 4 个（因 git 对中文路径加引号导致误判）。
