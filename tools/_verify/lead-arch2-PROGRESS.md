# lead-arch2-PROGRESS.md — 开发者大局观手册线 · 进度落盘

> **负责人**: lead-19（接替已清除的旧线）
> **分支**: main
> **门禁基线（2026-10-07 实测）**: `node tools/audit-links.mjs` → `BROKEN_LINKS=0 / FILES_WITH_BROKEN=0`；`node tools/nav-orphans.mjs --by-parent` → `orphans=0`。**这两条必须保持。**

---

## 0. 已交付资产（v1.3.15，zh+en 双语，实测 0 断链）

| 页 | zh | en | 主题 | 状态 |
|----|----|----|------|------|
| `gamemodel-decorator.md` | ✅ 10291 B | ✅ 10932 B | GameModel 装饰模式 | 已交付，已入索引 |
| `campaign-event-system.md` | ✅ 11055 B | ✅ 11671 B | 三类协作心智模型 | 已交付，已入索引 |
| `campaign-events.md` | ✅ 17983 B | ✅ 19205 B | 事件总线机械原理+接入手册 | 已交付，**待入索引**（当前靠 campaign-event-system 互链兜底，orphan=0） |
| `mission-lifecycle.md` | ✅ 13439 B | ✅ 14108 B | Mission 生命周期 | 已交付，已入索引 |
| `ui-three-layers.md` | ✅ 4401 B | ✅ 4561 B | UI 三层架构 | 已交付，**待入索引** |
| `save-object-graph.md` | ✅ 4421 B | ✅ 4695 B | 存档对象图 | 已交付，**待入索引** |

⚠️ `campaign-events.md` 与 `campaign-event-system.md` 是**两个不同主题**（前者=机械原理/接入，后者=三类协作心智模型），**两页都保留并互链**。

---

## 1. 剩余未交付页清单（逐页一句话职责 + 目标树 + 语言）

### 1.1 P0 核心页（§4.1，v1.3.15 起，后续版本复用）

| # | 页名 | 一句话职责 | 目标树 | 语言 |
|---|------|-----------|--------|------|
| P0-4 | `ui-three-layers.md` | UI 三层架构：`ScreenManager`/`GauntletLayer`/`ViewModel` 职责边界，Screen 生命周期与 VM 绑定 | v1.3.15 → v1.4.5/v1.4.6/v1.4.7/v1.5.3 | zh+en |
| P0-5 | `save-object-graph.md` | 存档对象图：`SaveableTypeDefiner`/`SaveContext`/`LoadContext`/`DefinitionContext` 协作，自定义类如何进入存档图 | 同上 | zh+en |
| P0-6 | `action-family.md` | Action 家族：`*Action.Apply` 统一入口，为什么不能直接改字段，Action 与事件级联 | 同上 | zh+en |

### 1.2 P1 增强页（§4.2，在已有页上增强）

| # | 页名 | 一句话职责 | 目标树 | 语言 |
|---|------|-----------|--------|------|
| P1-1 | `sdk-overview.md` | 增强：加入 GameModel 装饰/Campaign 事件/Mission 生命周期的分层说明 | 所有版本 | zh+en |
| P1-2 | `module-system.md` | 增强：`Module`/`ModuleInfo`/`SubModule` 加载顺序与依赖解析 | 所有版本 | zh+en |
| P1-3 | `save-system.md` | 增强：`SaveableTypeDefiner`/`SaveContext`/`LoadContext` 协作图 | 所有版本 | zh+en |
| P1-4 | `version-delta.md` | 增强：1.4.5 的 `Modules.*` 文件夹变化说明 | v1.4.5/v1.4.6/v1.4.7/v1.5.3 | zh+en |

### 1.3 版本特定页（§4.3，**移植不是复制**——每页在目标版本树重新核源）

| # | 页名 | 一句话职责 | 目标树 | 语言 |
|---|------|-----------|--------|------|
| V-1 | `crash-boundaries.md` | 崩溃边界页移植（源=v1.3.15） | v1.3.0, v1.4.6, v1.4.7, v1.5.3 | zh+en |
| V-2 | `developer-roadmap.md` | 开发者路线图移植（源=v1.3.15） | v1.3.0, v1.4.6, v1.4.7, v1.5.3 | zh+en |
| V-3 | `module-system.md` | 模块系统详解移植（源=v1.3.15） | v1.4.6, v1.5.3 | zh+en |
| V-4 | `save-system.md` | 存档系统移植（源=v1.3.15） | v1.4.6, v1.5.3 | zh+en |
| V-5 | `native-interop.md` | 托管/原生互操作移植（源=v1.3.15） | v1.4.6, v1.4.7, v1.5.3 | zh+en |

---

## 2. 第一批 3 页：选择与理由

**选择**: `ui-three-layers.md` + `save-object-graph.md` + `action-family.md`（P0-4/5/6）

**理由**:
1. 这三页是 ARCH-PLAN §4.1 里**仅剩的 3 个 P0 核心页**，是用户「缺乏大局观」抱怨的直接对应物——它们讲的是**机制与协作**，不是单个类。
2. 三页**互相独立**（UI 层 / 存档层 / 战役逻辑层），无写序依赖，可并行。
3. 三页的源码在 v1.3.15 树里**全部就位**（已实测）：
   - UI: `TaleWorlds.ScreenSystem/ScreenManager.cs`、`TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`、`TaleWorlds.Library/ViewModel.cs`
   - 存档: `TaleWorlds.SaveSystem/SaveableTypeDefiner.cs`、`Save/SaveContext.cs`、`Load/LoadContext.cs`、`Definition/DefinitionContext.cs`
   - Action: `TaleWorlds.CampaignSystem/Actions/*Action.cs`（20+ 个具体 Action）
4. 三页交付后，v1.3.15 的 P0 核心页**全部齐备**，可先跑一次门禁+orphan 复测，再开 P1/版本特定页。

---

## 3. Worker 单元划分（第一批）

| Worker | 页 | 目标树 | 产出文件 | 源码锚点 |
|--------|-----|--------|----------|----------|
| worker-D | `ui-three-layers.md` | v1.3.15 | `content/v1.3.15/{zh,en}/architecture/ui-three-layers.md` | ScreenManager.cs / GauntletLayer.cs / ViewModel.cs |
| worker-E | `save-object-graph.md` | v1.3.15 | `content/v1.3.15/{zh,en}/architecture/save-object-graph.md` | SaveableTypeDefiner.cs / SaveContext.cs / LoadContext.cs / DefinitionContext.cs |
| worker-F | `action-family.md` | v1.3.15 | `content/v1.3.15/{zh,en}/architecture/action-family.md` | TaleWorlds.CampaignSystem/Actions/*Action.cs |

**并发**: 3（≤ 软上限 4；本会话实测并发≥2 会 RPC 超时，故**并发=1 串行派发**，但 3 个 worker 单元独立）。

---

## 4. 验收判据（每页，缺一不可）

1. **节 schema 显式声明**：架构 hub 页可自有形态，但要在页内/报告里写明与规范六节的映射。
2. **引用边界检查**：每条 `X.cs:N` 必须 `N <= (wc -l X.cs)`；越界 = 未核实引用 ⇒ 该页未通过。
3. **引用指向声明处**，不是使用点。
4. **链接形态**：同行 leaf `../X`；父节索引 `../`；跨 api 桶 `../../api/<桶>/<Page>`；**绝不 `./X`**；**绝不直接链 `_index.md`**；**源码文件用反引号代码片段，不是链接**。
5. **真实最小示例**：≥3 行可编译 csharp，逐条核源（带 `file:行号`）。
6. **U+FFFD = 0**。
7. **补链**：新页必须在**同一批**里接进 `content/v1.3.15/{zh,en}/architecture/_index.md` 的 SECTION INDEX 块。
8. **批前/批后 `node tools/audit-links.mjs` 两套数，本批不得让 BROKEN_LINKS 上升**；批后 `nav-orphans.mjs --by-parent` 的 orphans 不得上升。
9. **description 已改写**（boss-3 #12566 机制①）：frontmatter 的 `description` 不能是「…的自动生成类参考」等壳页描述，必须改写成有信息量的描述。否则 census 仍把该页记为 generated（等于白写）。
   - 自检：`grep -c '自动生成' <file>` 必须为 0。
10. **参见/依赖小节 ≥2 条 markdown 链接**（boss-3 #12566 机制②）：参见/依赖小节必须包含 ≥2 条 markdown 链接。否则 classifyPage 判 stub，不算深页。
    - 自检：导航节里 `](` 出现次数 ≥2。
11. **无跨页链接政策**（boss-3 #12290）：本轮写作不写跨页 markdown 链接，对其它类型/页面的引用一律用反引号代码片段。导航节的 Parent/Sibling 链接保留。
    - 自检：页内无 `](../../api/` 或 `](../` 形式的跨页引用链接（导航节除外）。

---

## 5. 进度日志

| 时间 | 事件 |
|------|------|
| 2026-10-07 | lead-19 接手；实测门禁基线 BROKEN_LINKS=0 / orphans=0；确认 4 页已交付、3 页 P0 待写；登记本文件 |
| 2026-10-07 | worker-158 交付 `ui-three-layers.md`（zh+en，4401+4561 B）；worker-159 交付 `save-object-graph.md`（zh+en，4421+4695 B）；两页引用已核源、U+FFFD=0 |
| 2026-10-07 | **硬停机**（boss-3 #12322）：全站 BROKEN_LINKS 升至 73（全部来自 v1.3.0/zh/api/campaign/ 5 个预先存在的文件，非本线引入）；本线新页已改代码片段、零断链 |
| 2026-10-07 | **门禁恢复绿**：全站 BROKEN_LINKS=0 / FILES_WITH_BROKEN=0（v1.3.0 断链由其他线修复）；解禁条件 1✅ 2✅，条件 3（批报告含两套数）待补 |
| 2026-10-07 | **新政策**（boss-3 #12290）：本轮写作不写跨页 markdown 链接，一律反引号代码片段；后续由独立补链 pass 统一处理 |
| 2026-10-07 | **新机制**（boss-3 #12566）：① description 必须改写（否则 census 仍记 generated）；② 参见/依赖小节需 ≥2 条 markdown 链接（否则判 stub）——已写进 brief 模板 |
| 2026-10-07 | **写冲突**（boss-3 #12656）：worker-149 写的 ui-three-layers.md zh（12946 B）被 worker-158 覆盖（4401 B）。**流程缺陷**（同一路径两个 worker）。已建立「一页一 owner」规则：同一路径同时只能有一个 worker；派新 worker 前必须确认旧 worker 已停且不再持有该路径 |
