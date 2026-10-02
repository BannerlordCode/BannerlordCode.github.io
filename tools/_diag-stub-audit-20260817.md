# 诊断证据 — 2026-08-17（手写手册真实状态复核）

> 自动化 loop：BannerlordCode.github.io 手写手册重建（ulw-loop / R1）
> 周期：2026-08-17 19:34（大局观自动化 hourly）
> 触发：`service = ...;` / `自动生成类参考` 残量审计

## 一句话结论

门禁（links / navigation / quality-as-written）在本周期复测**仍全绿**，但本次复核暴露一个**门禁盲区**：站点实质仍是大量自动生成 stub，而非此前声称的「手写全覆盖 / 最终验收 A–G 全过」。所谓「最终验收」基于只校验结构、不校验内容的门禁，是不完整的。

## 本周期门禁复测（针对未提交改动）

未提交工作树改动（相对 HEAD `9f51bec`）：
- 6 个 `IScene.md`（v1.3.0/1.3.15/1.4.5 × zh/en）—— 真手写修复，明确拒绝 `IIScene service=...` 占位、讲清 `Scene`/`Mission.Current.Scene` 真实 API（H8 合规）。
- `data/{navigation,page-navigation,relkey_map,section-tree}.json` 重新生成。
- `tools/audit-doc-quality.mjs` 被修改（门禁微调，见下）。

复测结果：
- `audit-navigation` → **NAVIGATION_OK**（CONTENT_SECTIONS=464 / NAV_ROUTES=464 / MAX_LANDING_DISTANCE=3）
- `audit-links`（AUDIT_MODE=url）→ **BROKEN_LINKS=0**（FILES=38652 / TOTAL_LINKS=123321 / 0 broken）
- `audit-doc-quality`（engine zh，205 文件）→ **Blockers: 0, Warnings: 0**

→ 未提交改动本身**零回归**。

## 新发现：门禁盲区（关键）

| 缺陷类 | 精确计数 | 说明 |
|--------|----------|------|
| `description: "X 的自动生成类参考。"`（frontmatter 确认） | **19,397** 文件 | 自动生成 stub 类页，非手写 |
| `service = ...;` 占位示例（代码块内） | **2,016** 文件（357 种类型 × 6 版本/语言切片） | H8 违规：假示例 + 双 I 假类型名（如 `IISceneView`、`IIAchievementService`） |

占位示例分桶（按 api 目录）：
`campaign-ext 453 / mission-ext 354 / engine 296 / campaign 290 / core-extra 282 / mission 180 / gui 60 / save-system 44 / system 39 / viewmodel 18`

版本/语言分布（占位示例 2016 文件）：
`v1.4.5/zh 445, v1.4.5/en 343, v1.3.15/zh 326, v1.3.15/en 326, v1.3.0/zh 288, v1.3.0/en 288`

样本（确认 stub 级）：
- `content/v1.3.0/zh/api/campaign/AcceptCallToWarAgreementDecision.md`
  `description: "AcceptCallToWarAgreementDecision 的自动生成类参考。"`
- `content/v1.4.5/zh/api/engine/ISceneView.md`
  `## 使用示例` → `// 通常通过依赖注入或工厂方法获得实现` + `IISceneView service = ...;`（双 I 假类型 + 占位）
- `content/v1.4.5/zh/api/campaign-ext/IAchievementService.md`
  `## 概述` 含禁用样板句「阅读时先看属性代表…」+ `IIAchievementService service = ...;`

## 为什么门禁漏检

`audit-doc-quality.mjs` 确有 placeholder 检测（行 56–88、326–424：placeholder-example / placeholder-method-example / method-missing-example），但其「真实示例」判定仅校验**存在 csharp 代码块**，不校验代码块**内容**是否为真 API；且**不检查 frontmatter `description`** 与「自动生成类参考」字样。因此：
- `service = ...;` 占位示例通过（有代码块即可）。
- `自动生成类参考` 描述通过（门禁不看 description）。
- 覆盖门禁 `r1-coverage-report` 将「存在页 + 结构标记」计为 covered（deep/family），故 19k stub 被计入「达标」。

→ 此前「R1 gap=0 / sTier 62/62 / 质量 blockers=0 / 最终验收 A–G 全过」**不完整**：它度量的是结构合规，不是手写内容合规。

## 影响与建议

1. **H0 门禁升级（driver §7 明确要求）**：在 `audit-doc-quality.mjs` 增加硬判：
   - frontmatter `description` 含 `自动生成类参考` → blocker；
   - 代码块内 `service = ...;` 或 `= \.\.\.;` 占位 → blocker；
   - 双 I 假类型名（`II[A-Z]\w+` 且与真实接口名不符）→ blocker；
   - `## 概述` 含禁用样板句（「阅读时先看属性」「X 是 TaleWorlds…公开类型」）→ blocker。
   ⚠️ 此改动会使门禁瞬时暴露 ~19k+ blocker，**会击断 CI 硬门禁**——需用户确认是否现在开启，或在本地分步走。
2. **重新基线真实手写覆盖率**：区分「真手写 deep 页」与「stub 计入 covered 的页」，给出诚实的 gap。
3. ** remediation 优先级**：先 S 级枢纽 + 高流量 hub（engine/system/save-system 真实 API 示例最缺），再按目录系统化手写；明确这是长周期工作，**单周期无法 19k 页手写**（H2 禁止脚本灌版）。
4. **待用户决策**：是否 (a) 现在升级并击断 CI 门禁以暴露真实缺口；(b) 仅本地升级用于度量、暂不接 CI；(c) 继续仅回归守护、不动 stub 现状。

## 本周期动作

- 复测门禁零回归（见上）。
- 量化并确认 stub 真实规模（19,397 + 2,016），纠正此前「最终验收」的不完整结论。
- 未单方面改写任何 stub 页或修改门禁（#4 及衍生项维持「待用户决策」）。

## 下一 cycle 入口

等用户就上述 (a/b/c) 表态后：若选升级门禁→先本地升级并出真实 gap 报告；若选 remediation→按 S 级/hub 优先开手写波次。
