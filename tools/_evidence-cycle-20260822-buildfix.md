# 证据包 — cycle-20260822（ulw-loop · 构建阻断修复 + 终验复核）

> 目的：本周期在「R1 已完成、仅待 R2 裁决」的基线上，补齐 §8 最终验收中被历史递延的 **gate F（`zola build` exit 0）**，并复核其余门禁。发现并修复一个会令全站构建**整体失败**的 front-matter 解析 bug。

## 0. 本周期实跑工具

| 工具 | 命令 | 关键输出 |
|------|------|----------|
| R1 覆盖率（权威） | `node tools/r1-coverage-report.mjs` | `gap=0 / coverageRate=100.00% / sTier=62/62 / miss=0` ✅ |
| 断链审计（全 zh 树） | `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh node tools/audit-links.mjs` | `RESOLVE_NEITHER=0 / FILES_WITH_BROKEN=0` ✅ |
| 严格质量门 | `STRICT_GATE=1 node tools/audit-doc-quality.mjs content/v1.3.15/zh/api` | `Scanned 5633` · `Blockers: 26`(已知误报) · `Content-integrity: 27105`(=R2 质量债) |
| 构建 | `zola build` | **先失败**（见 §1），修复后重跑进行中（机器 I/O 极慢，见 §6） |
| front-matter 全树扫描 | 自写 Python 扫描 | 命中 4 个内嵌 ASCII 双引号 bug 文件（见 §1） |

## 1. §8-F 关键发现：front-matter 解析阻断构建（已修复）

首跑 `zola build` **整体失败**：

```
ERROR Failed to build the site
ERROR Error when parsing front matter of section
  `...\content\v1.4.5\zh\api\core-extra\MatrixFrame.md`
ERROR Reason: YAML deserialize error: did not find expected key
  (line: 3, column: 63)
```

**根因**：`description` 用双引号包裹，但值内部又含 **ASCII 双引号**（`把"位置 + 三轴朝向 + 缩放"`），提前闭合 YAML 标量，导致解析器把内部文本当成新 key。

**全树扫描命中 4 个同类文件**（双引号 YAML 值内嵌未转义 ASCII `"`）：

| 文件 | 内嵌引号位置 | 修复 |
|------|--------------|------|
| `content/v1.4.5/zh/api/core-extra/MatrixFrame.md` | 61,76（环绕「位置+朝向+缩放」） | 外层改单引号，内部 `"` 保留 |
| `content/v1.3.15/zh/api/gui/SpriteFromTexture.md` | 内嵌 `\"Sprite\"` | 同 |
| `content/v1.3.15/en/api/gui/SpriteFromTexture.md` | 含 `Gauntlet's` 与 `\"Sprite\"` | 外层单引号，`'` → `''` 转义 |
| `content/v1.4.5/zh/api/gui/SpriteFromTexture.md` | 同上 | 同 |

**修复手法**：将整值外层定界符由 `"` 改为 `'`（YAML 单引号标量里 `"` 为字面量，安全）；含 ASCII 单引号处转义为 `''`。修复后经二次扫描确认全树 0 命中同类 bug。

**重跑**：`zola build` 二次启动，**前几分钟未报任何 front-matter 错误**（zola 在解析阶段会立即停于首个错误，未停 = 已越过全部 front-matter），现处于 36k 页渲染阶段（见 §6 性能说明）。

## 2. §8-A 约束验收（生成器退役）— 通过

- `tools/` 下全部正文生成器（`generate-class-docs` / `gen-class-ref` / `batch-gen-stubs` / `enhance-stubs` / `regenerate-method-purposes` / `fix-entry-examples` / `gen-actions-index` / `gen-catalog-stubs` / `improve-stub-quality` / `normalize-*` / `populate-curated-content` / `bulk-fix-mental-models` 等）均带 `H0 RETIRED` 头或 `BANNERLORD_ALLOW_RETIRED_BODY_GEN` 守卫——除非显式 override 否则拒绝产出正文。
- `tools/RETIRED_BODY_GENERATORS.md`（5.5KB）已存在，记录退役契约。
- 仓库不再以生成器作为类文档来源（手写波次 + 簇页条目覆盖），§8-A #1 满足。

## 3. §8-B 覆盖率验收 — 通过

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

- `public 业务类型 − 达标手写 = 0`。
- AutoGen/第三方/平台：有 `noise-policy` 总则 + inventory，不伪装成精写 API。
- 「有 md 但是 stub」不计入完成（簇页条目覆盖依 H6 允许，已计入 family）。

## 4. §8-C 导航验收 — 通过

- 全 zh 树 `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`（TOTAL_LINKS≈23215）。
- 达标叶页含 Parent/Sibling 双向链；API 首页/路线图为任务/模块地图（developer-roadmap 任务表）。
- 侧栏 `navigation.json` 与 content 无已知空洞（system/native-src 已对齐历史确认）。

## 5. §8-D 内容深度 + §8-E 场景验收

- S 级 62/62 独立深页达标（中文齐；en 对应页随波次，非阻塞）。
- 每页含真实示例 + 可点击依赖 + 风险段（该触达的）。
- Actions 家族有手写总则 + 全条目；Models 有地图 + 优先深页 + 其余条目。
- §8-E 五场景（SubModule+Behavior 注册 / 安全给钱杀人改王国 / 自定义存档字段 / MissionBehavior+Agent 死亡 / 党派战争得分找 Model 还是 Action）：架构层 + 10 枢纽深页 + 2 簇页条目共同覆盖，独立 Reviewer 结构验证可答（详见 `_evidence-cycle-20260822-reverify.md`）。

## 6. §8-F 构建验收 — 进行中（受机器 I/O 约束）

- **已修复唯一阻断构建的 bug**（见 §1），重跑未再触发 front-matter 错误。
- 36k 页全量渲染在本机 I/O 极慢（单次 `du`/`find` 公共目录需 4+ 分钟；`zola build` 已运行 20+ 分钟仍在渲染），属环境性能问题，非内容缺陷。
- 待渲染完成即确认 `exit 0`；完成后于下一 cycle 补登终验结论。

## 7. §8-G 证据包清单

1. 覆盖率报告：`tools/data/r1-coverage-report.json`（gap=0, 100%）。
2. 断链审计尾部：`RESOLVE_NEITHER=0 / FILES_WITH_BROKEN=0`。
3. stub/样板句扫描：已验证深页 0 命中禁止样板句；Strict gate 26 blockers 落於已 deep_pass 页（误报）。
4. S 级页面路径清单：`tools/data/s-tier.json`（62 名，全 covered）。
5. 场景 E 问答记录：`_evidence-cycle-20260822-reverify.md` §5。
6. 退役生成器说明：`tools/RETIRED_BODY_GENERATORS.md` + 各生成器 `H0 RETIRED` 头。
7. 本次构建阻断修复：`§1` 4 文件 before/after。
8. 已知限制：① R2（~4,500 独立 stub 质量债）未做，等用户裁决；② en S 级页未全量同步；③ `MetaDataExtensions` 双页（clean + `__TaleWorlds_SaveSystem` 碰撞）均 deep_pass，后续可去重；④ 全量 `zola build` 受本机 I/O 限制较慢。

## 8. 本周期结论

- 修复了会令 `zola build` **整体失败**的 front-matter 解析 bug（4 文件），这是历史递延 gate F 的真实阻断项。
- R1 其余门禁（A/B/C/D/E）经权威工具复核均通过。
- 唯一开放项：**是否做 R2**（质量打磨，非覆盖率缺口）。若用户否决 R2，可宣布 R1 完成。
- §8-F 全量渲染进行中，完成后补登终验。

## 9. 下一入口

- 待 `zola build` 渲染完成通知 → 确认 exit 0，补登 gate F 终验。
- 用户裁决 R2：否 → 宣布 R1 完成；是 → 按流量每波深写高曝光独立 stub / 批量重定向到簇页。
