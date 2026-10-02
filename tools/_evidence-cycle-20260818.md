# 周期证据包 · 2026-08-18 00:12（H9 基础/工具类型手写波次 #A）

## 范围与策略
增量手写 BannerlordCode.github.io 的「基础/工具类型」高 ROI 批次（每个代码示例都依赖它们），遵循 ULW 驱动 §1 待决策项未单边改动 CI / 覆盖口径。

## 本周期交付（12 页，全部 `deep_pass`）
新整页重写（覆盖原 stub，源自真实 1.4.5 源码，无生成器）：

| 页 | 路径 |
|----|------|
| Vec2 | `content/v1.4.5/zh/api/core-extra/Vec2.md` |
| Vec3 | `content/v1.4.5/zh/api/core-extra/Vec3.md` |
| MatrixFrame | `content/v1.4.5/zh/api/core-extra/MatrixFrame.md` |
| MathF | `content/v1.4.5/zh/api/core-extra/MathF.md` |
| MBList | `content/v1.4.5/zh/api/core-extra/MBList.md` |
| MBReadOnlyList | `content/v1.4.5/zh/api/core-extra/MBReadOnlyList.md` |
| BinaryReader | `content/v1.4.5/zh/api/core-extra/BinaryReader.md` |
| BinaryWriter | `content/v1.4.5/zh/api/core-extra/BinaryWriter.md` |
| GameState | `content/v1.4.5/zh/api/core-extra/GameState.md` |
| GameStateManager | `content/v1.4.5/zh/api/core-extra/GameStateManager.md` |

规范化（原名即真实类型名，且被 14 个既有页链接，本周期确认为已 `deep_pass`，非新增）：
- `content/v1.4.5/zh/api/save-system/SaveableFieldAttribute.md`
- `content/v1.4.5/zh/api/save-system/SaveablePropertyAttribute.md`

## 验收证据
### A. 手写分类器（§3 门禁，逐页 classifyPage）
10 篇新页 + 2 篇规范化页全部 `deep_pass`（心智模型 >80 字 / 依赖 ≥5 真实可解析链接 / 真实 csharp 示例 / 非样板概述）。
注：S 级名单里的 `SaveableField`/`SaveableProperty` 实为 `…Attribute` 类型——早期「MISSING」是命名匹配偏差，内容早已存在且达标。

### B. 链接审计（`AUDIT_MODE=url node tools/audit-links.mjs`）
- `BROKEN_LINKS=0`
- `FILES_WITH_BROKEN=0`
- `RESOLVE_NEITHER=0`
- `TOTAL_LINKS=123520`
- `exit=0`

### C. S 级覆盖（`tools/data/s-tier.json` 已校正为真实 Attribute 名）
`deep_pass=62/62`（v1.4.5/zh/api）。

## 本周期修复的关键问题
1. **命名重复**：A1 agent 误建 `SaveableField.md`/`SaveableProperty.md`（短名）副本；规范化页 `…Attribute.md` 已由 14 个既有页链接且已 `deep_pass`。已删除短名副本，保留规范化页，避免 H6 单类型多页导航歧义。
2. **链接格式缺陷**（agent 引入，导致初始 `BROKEN_LINKS=74 / 7 文件`）：
   - 同目录兄弟页用 `./X/`（会嵌套进 `Foo/`）→ 改为 `../X/`；
   - `core-extra` → `save-system` 跨目录少一级 `../` → 改为 `../../save-system/`；
   - 修正后复测 `BROKEN_LINKS=0`。
3. **s-tier.json** 两个条目校正为 `SaveableFieldAttribute`/`SaveablePropertyAttribute`，使覆盖率度量口径诚实。

## 诚实基线（未变）
- v1.4.5/zh/api 共 9,421 文件，长尾 stub 仍 ~8,960（92.6%）；本周期为增量手写 10 篇 + 确认 2 篇规范化。
- 待用户决策仍挂起：① 严格门禁接 CI；② 每周期并行手写 N 篇节奏；③ 覆盖口径改判「达标=真手写」。

## 证据命令（可复现）
```
node tools/audit-links.mjs            # AUDIT_MODE=url → BROKEN_LINKS=0
node tools/_tmp_classify_stier.mjs   # 62/62 deep_pass（已校正 s-tier 命名）
# 单页复测：node -e "import('./tools/lib/handwritten-policy.mjs').then(m=>{...classifyPage...})"
```
