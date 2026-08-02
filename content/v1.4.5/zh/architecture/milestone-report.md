---
title: "里程碑报告 M0–M2（手写文档重建 · 周期 1）"
description: "BannerlordCode 手写开发者手册重建项目的第 1 个周期交付物与验收证据包：M0 契约与生成器退役、M1 架构导航与崩溃边界、M2 种子深度页。覆盖 H0–H4 波次。"
---

# 里程碑报告 M0–M2（周期 1）

> 范围：BannerlordCode.github.io（Zola 静态站）v1.4.5 手写开发者手册重建。
> 本轮交付目标：建立不可绕过的契约与质量门禁、打通导航骨架、产出 5 篇可被覆盖率门禁判为 `deep_pass` 的种子深度页，作为后续所有波次的范本。
> 这是**多周期循环**的第 1 个周期。剩余波次 H5–H10（M3–M5）留给后续周期。

## 1. 里程碑状态总览

| 里程碑 | 目标 | 本轮状态 | 关键交付 |
|--------|------|----------|----------|
| **M0** | 契约 + 退役生成器 + 盘点和覆盖工具 | ✅ 完成 | `doc-contract.md`(zh/en)、`RETIRED_BODY_GENERATORS.md`、覆盖率门禁、类型清单 |
| **M1** | 导航树 + 模块心智地图 + 路线图 + 崩溃边界 | ✅ 完成 | `architecture/_index`、`roadmap`、`crash-boundary`(zh/en)、core/campaign/mission 模块 `_index` |
| **M2** | 种子深度页（L0–L1 真实手写范本） | ✅ 完成 | 5 篇 `deep_pass` 种子页（zh+en，共 10 篇） |
| **M3** | 高频类型批量手写（按模块波次） | ⏳ 后续周期 | — |
| **M4** | 家族/模块枢纽页补全 | ⏳ 后续周期 | — |
| **M5** | 全量验收 + 发布 | ⏳ 后续周期 | — |

## 2. 波次进度（H0–H10）

| 波次 | 内容 | 状态 |
|------|------|------|
| H0 | 退役签名→散文生成器，断产品路径 | ✅ 完成（硬失败守卫已接入 10 个 CLI） |
| H1 | 移植并冻结文档契约（H1–H9）到 v1.4.5 | ✅ 完成 |
| H2 | 发现/盘点：类型清单 + 覆盖基线与缺口 | ✅ 完成（7,144 类型，0 缺失页） |
| H3 | 覆盖率门禁 `handwritten-coverage.mjs` | ✅ 完成（deep_pass 强判据） |
| H4 | 种子 L0–L1 深度页（5/5 达 `deep_pass`） | ✅ 完成 |
| H5 | 高频 API 类型批量手写 | ⏳ 后续 |
| H6 | 行为/模型家族页 | ⏳ 后续 |
| H7 | 模块枢纽与跨模块依赖图 | 🟡 部分（3 个模块 `_index` 已建，待补齐其余） |
| H8 | 真实用例与采集路径补全 | ⏳ 后续 |
| H9 | 双向导航树贯通 + 链接审计 | 🟡 部分（24 篇手写页 0 断链；全站审计待后续） |
| H10 | 发布前全量验收 | ⏳ 后续 |

## 3. 验收证据包

### 3.1 覆盖率门禁结果（`tools/data/handwritten-coverage.json`）
扫描根：`content/v1.4.5/zh/api`（7,123 个 md 文件）

| 状态 | 数量 |
|------|------|
| `deep_pass` | **5** |
| `family_entry_pass` | 13 |
| `stub` | 7,091 |
| `noise` | 14 |
| `missing` | 0 |

`deep_pass` 强判据（全部满足才算通过）：真实心智模型（>80 字符、非模板）、`依赖/参见` 段含 ≥2 个链接、含一个真实 `csharp` 示例、非模板化概述。

### 3.2 种子深度页（5/5 `deep_pass`，zh+en）

| 页面 | 路径（zh） | 层级 |
|------|------------|------|
| `MBSubModuleBase` | `content/v1.4.5/zh/api/core/MBSubModuleBase.md` | 生命周期根 |
| `Game` | `content/v1.4.5/zh/api/core/Game.md` | 运行期根容器 |
| `MBObjectBase` | `content/v1.4.5/zh/api/core/MBObjectBase.md` | 对象根基类 |
| `Campaign` | `content/v1.4.5/zh/api/campaign/Campaign.md` | 战役层 |
| `Mission` | `content/v1.4.5/zh/api/mission/Mission.md` | 战斗层 |

每篇均含：真实心智模型、依赖/风险清单、按用途分组的成员笔记（非签名墙）、真实 `csharp` 示例、双向导航（父/兄弟/子/相关）。en 版同路径 `en/` 下。

### 3.3 类型清单（`tools/data/type-inventory.json`）
- v1.4.5 公开类型总数：**7,144**（zh 与 en 各 7,144）
- 已有对应页面的类型：**7,144**（hasDoc=true）
- **缺失页面：0**

结论：缺口不是"缺页"，而是 **7,091 个 stub 需要被手写深度化**（stub→handwritten 转换）。

### 3.4 生成器退役（`tools/RETIRED_BODY_GENERATORS.md`）
- 政策：产品文档 `content/**` 仅手写；自动化工具不得编造或批量重写页面散文。
- 紧急覆盖环境变量 `BANNERLORD_ALLOW_RETIRED_BODY_GEN=1` **禁止用于产品构建 / CI / 任何触碰 `content/**` 的提交**。
- 硬失败守卫（每个退役 CLI 顶部）：非常量 `1` 时直接 `process.exit(1)`。已接入 10 个 CLI；其余 12 个被点名的脚本在磁盘上不存在（产品路径已实际断开）。
- 已列入退役清单的脚本：`generate-class-docs.mjs`、`gen-class-ref.mjs`、`batch-gen-stubs.mjs`、`enhance-stubs.mjs`、`regenerate-method-purposes.mjs`、`normalize-method-purposes.mjs`、`doc-fragments.mjs`（body 路径）、`populate-curated-content.mjs`、`bulk-fix-mental-models.mjs` 等。

### 3.5 链接审计（T7）
- 检查范围：本轮撰写的 24 个手写文件（架构页 + 模块 `_index` + 5 篇种子页，zh+en）。
- 内部链接检查：**335** 条
- **断链：0**

修复记录：Campaign.md（zh/en）原链接 `../../save-system/SaveManager` 深度错误，已改为 `../save-system/SaveManager`（SaveManager 实际位于 `api/save-system/`）。

### 3.6 崩溃边界（`content/v1.4.5/{zh,en}/architecture/crash-boundary.md`）
已文档化 8 类崩溃/存档失败模式与正确模式，覆盖：世界状态变更必须走 `*Action.Apply`、SubModule 加载阶段约束、Agent 生命周期、MBObjectManager 注册、SaveId/SaveableField 一致性等。此页是 H4/H8 波次所有类型页"风险"段落的事实来源。

### 3.7 双向导航骨架
- 架构层序：Foundation（`api/core`、`api/engine`）→ Campaign（`api/campaign`）→ Mission（`api/mission`）→ UI（`api/viewmodel`、`api/gui`）→ Save（`api/save-system`）。
- 模块 `_index`：core / campaign / mission 已建立心智地图（枢纽条目表 + 依赖图 + 阅读顺序）。
- 种子页均含 `## 导航` 段：父级 / 兄弟 / 子类型 / 相关页，满足 H5 双向树要求。

## 4. 已知风险与后续周期

1. **规模**：7,091 个 stub 待手写深度化；单周期无法完成，须按模块波次（H5–H8）推进。
2. **全站链接审计**：本轮仅审计了 24 篇手写页。整站 36k+ 页的历史断链需在 H9 做全量 `audit-links.mjs`（默认扫全 `content` 树，成本较高，建议按模块分批）。
3. **en 种子页一致性**：en 版与 zh 版同步撰写，但覆盖率门禁当前仅在 `zh/api` 上运行；需在 H3 扩展为双语双跑。
4. **模块枢纽补齐**：除 core/campaign/mission 外，engine/viewmodel/gui/save-system 等模块的 `_index` 尚未建，属 H7。

## 5. 如何复跑验收

```bash
# 覆盖率门禁（zh/api）
node tools/handwritten-coverage.mjs --root content/v1.4.5/zh/api

# 类型清单构建
node tools/generate-inventory.mjs

# 全站链接审计（默认扫 content/ 全树）
node tools/audit-links.mjs
```

证据文件位置：
- 覆盖率：`tools/data/handwritten-coverage.json`
- 类型清单：`tools/data/type-inventory.json`
- 生成器退役政策：`tools/RETIRED_BODY_GENERATORS.md`
- 契约与路线图：`content/v1.4.5/{zh,en}/architecture/`
