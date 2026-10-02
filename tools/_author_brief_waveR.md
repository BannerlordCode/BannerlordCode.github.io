# Author Brief — Wave #R（手写贸易 / 工坊 / 锻造经济数据对象深页）

你是 BannerlordCode.github.io 文档站的文档 Author agent。本任务把 6 个被自动生成器写成 stub 的 **战役经济数据载体**（贸易 / 工坊 / 锻造）页面，基于真实源码整页重写为达标深页（`deep_pass`）。这是手写重建 loop 的一部分；**禁止**任何生成器脚本灌版（生成器已退役，见 `tools/RETIRED_BODY_GENERATORS.md`）。

## 🚫 绝对禁止的样板（命中任一即 REJECT / 判为项目失败）

对照 `tools/lib/handwritten-policy.mjs` 的 `STUB_PATTERNS`，以下任一出现即拒收：

- 概述写「`X` 是 TaleWorlds.Y 下的公开类型」或「中的公开类型」→ 必须写真实职责（>60 字）。
- 心智模型写「阅读时先通过属性了解状态」「Read properties…」「先从命名空间」「入口或数据节点」「entry point or data node」→ 必须 ≥80 字真实心智模型。
- 示例出现 `null; // 替换`、`SomeValue`、`service = ...`、`service = null`、`Get...Implementation`、`从实际子系统 API…获取…实例`、`Obtain an instance of this type from the relevant subsystem API` → 必须用真实 API 调用。
- 成员用途写「读取并返回当前对象中 X 的结果」「返回当前对象中 X 的值」→ 必须写它**真正表示/计算什么**。
- 参见只有「[本区域目录](../)」→ 必须 ≥3 个指向【已存在】页面的真实链接。
- 元数据用英文标签（`Namespace:`/`Module:`/`Type:`/`File:`）→ 必须中文（`**命名空间：**`/`**模块：**`/`**类型：**`/`**源文件：**`）。
- 兄弟链接用 `./X` → 必须 `../X`。

## ✅ 必读优质范例（写之前完整通读，是质量下限 —— 均为已达标 `deep_pass` 的数据对象 / 经济模型页）

- `content/v1.4.5/zh/api/campaign/SkillObject.md`（MBObjectBase 数据对象，结构镜像首选）
- `content/v1.4.5/zh/api/campaign/ItemObject.md`（经济 / 物品语境）
- `content/v1.4.5/zh/api/campaign/Settlement.md`（经济 / 工坊 / 市场语境，理解这些载体挂在哪里）
- `content/v1.4.5/zh/api/campaign/SettlementAccessModel.md` · `SettlementPatrolModel.md`（已达标经济模型页，参考「风险 / 依赖」写法）
- 对每个 target，先用 Grep 在 `bannerlord-1.4.5/Bannerlord.Source` 找到**真实调用点**（≥3），例如 `WorkshopData` → `Workshop` 持有、`WorkshopsCampaignBehavior` 读写；`TradeActionLog` → `CaravansCampaignBehavior` 记录；`FakeMarketData` → `Town`/`Settlement` 经济模拟；`CraftedItemInitializationData`/`HeroCraftingRecord` → 锻造系统（`CraftingCampaignBehavior`、`Hero.CraftingRecords`）。

## 📌 写之前强制步骤（报告里证明你做了）

1. 读你的 TARGET 源文件（见各 agent 派发说明），搞清它是 `MBObjectBase` 派生数据对象、还是嵌套在 Behavior 里的 `class`/`struct` 数据载体、字段与关键属性。
2. grep 真实调用点（≥3）：用于依赖图与心智模型（见上）。
3. 完整通读上面至少 2 个范例，内化结构与深度。

## 📐 输出结构（严格镜像数据对象页）

- Frontmatter：`title: "<X>"` + 有信息量的 `description`（**绝不可**「自动生成类参考」）。
- 元数据块（中文标签）：**命名空间：** … · **模块：** TaleWorlds.CampaignSystem（或对应子模块）· **类型：** `public class <X> : MBObjectBase`（或 `public struct <X>` / 嵌套数据载体，按源码实情写）· **源文件：** <相对 Bannerlord.Source 的真实 cs 路径>。
- `## 概述`：1–2 句真实职责（它代表游戏的什么经济概念、谁创建/消费），>60 字。
- `## 心智模型`：≥80 字，真实：生命周期（由谁创建——`MBObjectManager` 注册？还是 Behavior 在战役中 new 出来维护？是否参与存档 `[SaveableField]`？）、谁持有/消费、属于 Campaign 层经济数据（非 Model 决策、非 Behavior 逻辑本身）、何时用/何时不要用、正确替代（改世界状态走 *Action / Behavior，而非直接改这些字段）。
- `## 何时使用 / 何时不要使用`：要点。
- `## 依赖图`：上游（创建方 / `MBObjectManager` / `Campaign` / 对应 Behavior）；下游真实消费方（`Workshop` / `Town` / `Settlement` / `Hero` / 商队 / 玩家锻造 UI）；相关对象。每条指向【已存在】页面的真实相对链接（用 Glob 验证存在）。≥3 条链接。
- `## 风险`：注册/创建时机、存档（是否 `[SaveableField]` 序列化、加载顺序）、在 Mission 层访问 Campaign 经济数据、把这些载体当可变状态改（应走 Action/Behavior）、嵌套数据载体被 Behavior 持有导致跨 tick 引用失效等。
- `## 成员说明`：按主题分组；每个关键成员 = 用途（它**真正表示/计算什么**，来自源码）+ 副作用 + 调用时机。**不是签名墙，不是「读取并返回」**。
- `## 示例`：1–2 段**真实** C#：
  - `WorkshopData`：`var workshop = settlement.Town.Workshops[i]; var data = workshop.WorkshopData; ...` 或 `MBObjectManager.Instance` 取 `WorkshopType`。
  - `TradeActionLog`：`CaravansCampaignBehavior` 相关调用 / `Hero.CraftingRecords`。
  - `FakeMarketData`：经济模拟访问 `town.MarketData` 之类（以源码为准，勿编造类型名）。
  - `CraftedItemInitializationData` / `HeroCraftingRecord`：锻造系统取英雄记录。
  - **绝不**出现 `= ...;`、`SomeValue` 占位；类型名必须与源码一致。
- `## 参见`：`↑ 父级：[战役 API 索引](../)` + `↔ 相关：` ≥3 个已存在页面。

## 🔗 链接规则（硬性门禁，断链即失败）

Zola 把每个页面 `X.md` 当作目录 `X/` 来服务，相对链接从【该页面自身目录】解析：

- 同级兄弟页（同一 `api/campaign/` 内）：`[Name](../Name)` — **绝不** `./Name`。
- 父级 section 索引：`[…](../)`。
- **跨顶级 `api` 子目录**（如从 `api/campaign/X.md`→目录 `api/campaign/X/`，链到 `api/core-extra/Y`→目录 `api/core-extra/Y/`）：必须 `../../core-extra/Y`，**绝不** `../core-extra/Y`。口诀：离开 campaign 目录需 `../../子目录/页`。
- 目标名后**无**尾斜杠。绝不链 `_index.md`。
- 写之前用 Glob 验证每个链接目标页存在；只链存在页。无对应页面则省略，不编造。

## ⚠️ 其他

- 中文为主；散文中的泛型用反引号包裹：`List<Hero>`。
- **不**运行任何生成器脚本；**不**设置 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。
- 只编辑你负责的那一个目标文件，不要改动其他文件。
- 写完后重读自查：逐条对照 🚫 禁止清单确认 0 命中；结构镜像范例；并用 Glob 复核所有链接目标存在。
- 跑 `node tools/_verify_waveR_classify.mjs`，确认你的那一行的状态是 `PASS ... -> deep_pass`。

## 报告要求

写完后报告：读过的源文件、找到的 ≥3 调用点、写出的真实成员用途、包含的链接（目标已 Glob 验证）、确认零禁止短语、`classifyPage` 自查（心智>80 / 依赖链接≥2 / 真实 C# 示例 / 概述达标）。
