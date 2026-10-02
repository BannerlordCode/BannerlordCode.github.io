# 证据包 — 诚实基线复核（2026-08-17 ~20:39 · 大局观 hourly）

> 自动化 loop：BannerlordCode.github.io 手写手册重建（ulw-loop / R1）
> 周期目标：关闭「门禁盲区」——旧质量门禁只校验结构不校验内容，导致此前
> 「R1 gap=0 / 质量 0 blocker / 最终验收 A–G 全过」不完整。

## 本周期完成

1. **H0 门禁升级（driver §7 明确要求）**：`tools/audit-doc-quality.mjs` 新增四类
   **内容完整性（content-integrity）** 检测，关闭此前漏洞：
   - `autogen-description`：`description: "X 的自动生成类参考。"`（frontmatter）
   - `placeholder-assignment-example`：代码块内 `x = ...;`（C# 中 `...` 永非法，空壳示例）
   - `double-i-fake-type`：双 I 假接口名 `IISceneView` / `IIAchievementService`（真接口单 I）
   - `formulaic-overview-stub`：「阅读时先看属性…」/「X 是 TaleWorlds…公开类型」
   - 这些默认**不计入 CI 失败**（保留旧 CI 绿），仅当 `STRICT_GATE=1` 才作为 blocker 计入退出码。
2. **新增 npm 脚本** `audit:quality:strict`（`STRICT_GATE=1 node tools/audit-doc-quality.mjs`），
   供用户在本地/CI 一键开启硬门禁，无需我单方面击断 CI。
3. **真实基线实测**：全量扫描 38,650 个 md 文件，产出诚实数字（见下）。
4. **真实手写一页（proof-of-path）**：重写 `content/v1.4.5/zh/api/engine/ISceneView.md`
   为 §3 达标「引擎桥」页（真实心智模型、何时用/不要用、依赖可点击、真实 `SceneView` 示例、
   双向导航），原页含 `IISceneView service = ...;` 双违规。已验证该页在严格门禁下 0 命中。

## 诚实基线数字（全量，STRICT_GATE=1）

| 指标 | 数值 |
|------|------|
| 扫描 md 文件 | 38,650 |
| 结构 blocker（旧门禁） | **0**（当前 CI 仍绿） |
| 结构 warning | 914 |
| 内容完整性 finding 总数 | **172,147** |
| ├ autogen-description（唯一文件） | 19,397 |
| ├ formulaic-overview-stub（唯一文件） | 14,928 |
| ├ placeholder-assignment（唯一文件） | 34,544 |
| └ double-i-fake-type（唯一文件） | 1,970 |
| **UNION 任一 stub 标记的唯一文件** | **35,782 / 38,650 = 92.6%** |

→ 结论：站点实质 **92.6% 的内容文件**仍带至少一个自动生成 stub 标记。
此前「R1 gap=0 / 覆盖率 100%」度量的是**结构合规**，不是**手写内容合规**——
覆盖门禁把「存在页 + 家族条目」计为 covered，而单页正文仍是 stub。

## 证据落盘

- `tools/audit-doc-quality.mjs`（门禁升级，含 STRICT_GATE 开关 + 模块头说明）
- `tools/package.json`（`audit:quality:strict` 脚本）
- `tools/_strict-audit-full-20260817.txt`（全量严格门禁原始输出，含 By category 明细）
- `tools/_count_ci_files.mjs`（唯一文件计数脚本，复算 UNION=35,782）
- `tools/_audit_engine_check.txt`（engine 目录严格门禁，验证 ISceneView.md 已清零）
- `content/v1.4.5/zh/api/engine/ISceneView.md`（手写达标页，整页替换 stub）

## 门禁盲区修复验证

- 升级后重跑 engine 目录：ISceneView.md 在严格门禁下 **0 命中**（grep 确认无该文件名）。
- engine 目录内容完整性总数 1830 → 1827（该页原 3 项已清除）。
- 该页 scoped `audit-links`：FILES_WITH_BROKEN=0（新增 7 个链接全部有效）。

## 覆盖率（诚实口径，待重基线）

- 结构口径（旧）：R1 gap=0 / sTier 62/62 / 质量 blockers=0。
- **内容口径（新，本周期）**：~35,782 个手写不达标文件（占 92.6%）。
  旧 `r1-coverage-report` 的「covered」需改为「真手写 deep 页或达标簇条目」，否则
  19k+ stub 被计入「达标」——这是下个周期必须修的口径问题。

## 未完成 / 风险 / 已知限制

- **未单方面击断 CI**：STRICT_GATE 默认关闭，避免 172k finding 瞬间阻塞用户所有提交。
  需用户确认是否将 `audit:quality:strict` 接进 `docs.yml` 硬门禁。
- **仅手写 1 页**：19k+ 页的逐页手写无法单周期完成（H2 禁止脚本灌版），本周期以
  「修门禁 + 诚实基线 + 1 页 proof-of-path」为界，是 M0 收尾动作，不是 M2+ 内容产出。
- **覆盖门禁口径仍会美化**：`r1-coverage-report` 计数逻辑未改，下次跑仍会显示 gap=0；
  需另开周期对齐「达标=真手写」定义（建议复用本周期 content-integrity 检测作为达标判据之一）。

## 下一 cycle 入口（建议，待用户决策）

- 选项 A（推荐开启硬门禁）：将 `docs.yml` 的 `audit:quality` 改为 `audit:quality:strict`，
  使 172k 内容缺陷成为 CI 阻塞项，倒逼系统性手写；代价：所有待合并改动先红。
- 选项 B（本地度量，不接 CI）：保留现状，定期跑 `npm run audit:quality:strict` 跟踪趋势。
- 选项 C（先修覆盖口径）：改 `r1-coverage-report` 让「达标」= 通过 content-integrity + 结构，
  重基线后给出诚实 gap，再规划手写波次优先级（S 级枢纽 / engine / system / save-system 先行）。
- 不论选哪个，手写波次应按 driver H2→H9：先 S 级枢纽 + 高流量 hub，长尾系统化，禁止脚本灌版。
