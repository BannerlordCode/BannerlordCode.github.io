# cycle-AE 证据包 (2026-08-22)

## 本周期目标
1. 重新复验 R1 三大基础门禁，取最新证据。
2. 纠正历史记忆里「稳定命名空间 0 stub」的过度乐观判断（直接读文件证伪）。
3. 在枢纽已达标前提下恢复真实手写批次（core-extra 高价值类型）。
4. 闭合 §8-F `zola build` exit 0（后台运行，待完成通知）。

## 1. 基础门禁复验（当前态，实跑）
- **R1 覆盖率** `node tools/r1-coverage-report.mjs`：
  `totalInventoryBusiness=5483 / r1Target=4796 / coveredDeep=284 / coveredFamily=4512 / gap=0 / coverageRate=100.00% / sTier=62/62`。
  ⚠️ 注意：`gap=0` 来自 `coveredFamily`（簇页条目计数），它把「类型被某簇页列出」算覆盖，**不验证该类型独立页是否手写**。
- **断链（全 zh 树）** `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh node tools/audit-links.mjs`：
  `FILES=5685 TOTAL_LINKS=23299 BROKEN_LINKS=0 FILES_WITH_BROKEN=0 RESOLVE_NEITHER=0` ✅（§8-C PASS）。
- **退休生成器门禁** `node --test tools/tests/retired-generators.test.mjs`：`# pass 1 # fail 0` ✅（§8-A：正文生成路径已 fail-closed）。
- **严格质量门** `STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.3.15/zh/api`：
  `Scanned 5633 / Blockers=26 / Content-integrity=27105`。Blockers=26 为已知误报（落于已验证 deep 页的 `fake-example-on-entry-page`）；`Content-integrity=27105` = R2 长尾独立 stub 质量债（非 R1 覆盖率缺口）。

## 2. 关键纠正：历史「稳定命名空间 0 stub」被证伪
直接读 `core-extra/ActionSetCode.md`：含 `description: "…自动生成类参考。"`、`概述` 含「阅读时先看属性」、无 `## 依赖图`、示例为 `//` 占位 → **确系真 stub**。
扫描全 zh/api 禁止样板句分布（grep -l）：
```
campaign-ext 2647 | mission-ext 1629 | core-extra 516 | engine 202 | mission 53 |
gui 50 | localization 41 | viewmodel 40 | campaign 38 | system 25 | save-system 1 | core 1
TOTAL residue files = 5243
```
→ 此前 cycle-AA/AB 记忆称「core-extra 527/527、engine 204/204、gui 58/58、localization 52/52、mission 58/58、viewmodel 42/42 全 0 stub」**不实**（基于不完整/过宽扫描）。真实情况：每个命名空间仅**部分**页手写（架构 + save-system + campaign 核心实体 + 若干枢纽如 Game/InformationManager 已完成），绝大多数独立类型页仍是 stub。
结论：**R1 手写质量远未完成**；`gap=0` 是结构产物（簇页条目计覆盖），非「每类型独立页手写」的证明。

## 3. 本周期手写批次（core-extra，6 页）
派 2 Author 子代理（前台并行）整页重写，源读 `bannerlord-1.3.15/TaleWorlds.Core/**.cs`：
- Agent A：MatrixFrame / MathF / GameState
- Agent B：GameStateManager / Common / Color

### 子代理踩中的两个链接坑（已机械修正，教训固化）
- **`## 依赖图（可点击）` 标题后缀**破坏 `DEP_OR_SEE_HEADING_RE`（`依赖图\s*$`）→ 判 `missing-dependency-or-see-section`。修正：标题改 `## 依赖图`。
- **同命名空间兄弟写成裸名**（`](Colors)`、`](MathF)`、`](_index)`）→ URL 模式解析成子页 404；正确为 `](../Name)` / `](../)`。
- **跨 architecture 只用 2 层 `../../architecture/`** → 应 3 层 `../../../architecture/`（自 api 叶页）；`../campaign/Hero` → `../../campaign/Hero`。

### 验收（独立复验，不采信自报）
`node tools/_check_deep.mjs` 6/6 → `deep_pass`（mental>80 / 依赖链接 5–8 / 真实 csharp 示例 / 概述达标）。
禁止样板句 grep 6/6 → 0 命中。
断链审计：修复前 `BROKEN_LINKS=50 / FILES_WITH_BROKEN=3` → 修复后 `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`（TOTAL_LINKS=23299 全解析）。
零连带：仅 6 目标 .md 本周期改动（`git status` 可见），`data/*.json`/`tools/*` 未动。

## 4. §8-F 构建门禁
后台启动 `zola build > tools/_zola_build_cycleAE.log 2>&1`（task_id bnzUyX）。
中途复检：日志 `Building site... -> Creating 38190 pages (0 orphan) and 460 sections`，进程仍在跑（环境 I/O 极慢，~15min）。
待完成通知后补登 `zola build` exit 0。历史曾有 `Done in 894.6s / Exit Code: 0`（.build-fix-zola-current.log），全量构建本身可行；cycle-AD 已修 4 个 YAML 双引号 front-matter 崩溃点。

## 5. 真相状态（面向最终验收 §8）
- §8-A：退休生成器 fail-closed ✅；但「已标记完成类页 0 样板句」仅对 deep/簇条目成立，5,243 独立 stub 仍含样板句（属 R2 长尾）。
- §8-B（覆盖率）：gap=0 ✅（结构口径）；但「每业务类型独立手写说明」未达（H6 严格口径缺口≈5,200）。
- §8-C：BROKEN_LINKS=0 ✅。
- §8-D：S 级枢纽（Game/InformationManager/Hero/Clan/Settlement/Mission…）达标；但 Actions/Models 之外的大量独立类型页仍 stub。
- §8-F：构建待完成通知。

## 6. 下一入口
- 收 `zola build` 完成通知 → 补登 gate F exit 0。
- 用户必须就 **R2 范围**裁决：否 → 宣布 R1（结构口径）完成，明确声明手写质量债 5,243 页为已知限制；是 → 按流量/命名空间每波 ~5–8 深页清零长尾（优先 core-extra 剩余 510、engine 200、gui 50、localization 40、viewmodel 40、mission 53、campaign 38、system 25，再 campaign-ext/mission-ext 巨型桶需先判 noise vs 真业务）。
- 禁止再信任「X/X 0 stub」式记忆；每波结束以 `_check_deep` + 断链审计 + 禁止句 grep 独立取证。
