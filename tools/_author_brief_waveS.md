# Author Brief — Wave #S（手写战役核心 CampaignBehavior 深页）

你是 BannerlordCode.github.io 文档站的文档 Author agent。本任务把 6 个被自动生成器写成 stub 的 **战役核心 Behavior**（继承 `CampaignBehaviorBase`、由 *TypeDefiner 注册、驱动经济/外交/家族/教育/恋爱/犯罪系统）页面，基于真实源码整页重写为达标深页（`deep_pass`）。这是手写重建 loop 的一部分；**禁止**任何生成器脚本灌版（生成器已退役，见 `tools/RETIRED_BODY_GENERATORS.md`）。

## 🚫 绝对禁止的样板（命中任一即 REJECT / 判为项目失败）

对照 `tools/lib/handwritten-policy.mjs` 的 `STUB_PATTERNS`，以下任一出现即拒收：

- 概述写「`X` 是 TaleWorlds.Y 下的公开类型」或「中的公开类型」→ 必须写真实职责（>60 字，说明它管理战役的哪部分状态/流程）。
- 心智模型写「阅读时先通过属性了解状态」「Read properties…」「先从命名空间」「入口或数据节点」「entry point or data node」→ 必须 ≥80 字真实心智模型（它处于 Campaign 哪一层、谁在战役启动时注册它、每 tick / 事件如何驱动它、是否随存档序列化）。
- 示例出现 `null; // 替换`、`SomeValue`、`service = ...`、`service = null`、`Get...Implementation`、`从实际子系统 API…获取…实例`、`Obtain an instance of this type from the relevant subsystem API` → 必须用真实 API（见下「示例」）。
- 成员用途写「读取并返回当前对象中 X 的结果」「返回当前对象中 X 的值」→ 必须写它**真正管理/计算什么**，以及副作用与调用时机。
- 参见只有「[本区域目录](../)」→ 必须 ≥7 个指向【已存在】页面的真实相对链接（依赖图 + 参见合计）。
- 元数据用英文标签（`Namespace:`/`Module:`/`Type:`/`File:`）→ 必须中文（`**命名空间：**`/`**模块：**`/`**类型：**`/`**源文件：**`）。
- 兄弟链接用 `./X` → 必须 `../X`。

## ✅ 必读优质范例（写之前完整通读，是质量下限）

- `content/v1.4.5/zh/api/campaign/SkillObject.md` · `ItemObject.md` · `Settlement.md`（结构镜像、链接与风险写法）
- `content/v1.4.5/zh/api/campaign/SettlementAccessModel.md` · `SettlementPatrolModel.md`（已达标经济模型页，参考「风险 / 依赖」写法）
- `content/v1.4.5/zh/architecture/doc-contract.md`（版本化契约，写之前必读，遵守 H0 手写-only 策略）
- 对每个 target，先用 Grep 在 `Bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/` 找到**真实调用点 / 事件订阅**（≥3），例如：
  - `CaravansCampaignBehavior` → 商队 `MobileParty` 创建/维护、`CaravansCampaignBehaviorTypeDefiner` 注册、`Campaign.Current.GetCampaignBehavior<CaravansCampaignBehavior>()`。
  - `CraftingCampaignBehavior` → 锻造、`Hero.CraftingRecords` 体力、`CraftedItemInitializationData`/`HeroCraftingRecord`（上波已写）。
  - `CampaignFactionManagerBehaviour` → 战争/和平声明、`DeclareWarAction`/`MakePeaceAction`/`ChangeKingdomAction` 级联。
  - 其余按源码为准，勿编造类型名。

## 📌 写之前强制步骤（报告里证明你做了）

1. 读你的 TARGET 源文件，搞清：它继承谁、由哪个 `*TypeDefiner` 注册、实现了哪些生命周期钩子（`RegisterEvents` / `OnSessionStart` / `OnBeforeSave` / `OnGameLoad` / `OnAfterGameInitializationFinished` / `SyncData` 等）、持有/管理哪些战役状态、暴露哪些 `public` 方法或事件供 modder 使用。
2. grep 真实调用点（≥3）：用于依赖图与心智模型。
3. 完整通读上面至少 2 个范例，内化结构与深度。
   **关键：Behavior 页不是方法签名墙。** 只写 modder 真正需要知道的：它管什么、怎么被注册、你能订阅/调用什么、误用会怎样崩/坏档。

## 📐 输出结构（严格镜像，按 Behavior 语义适配）

- Frontmatter：`title: "<X>"` + 有信息量的 `description`（**绝不可**「自动生成类参考」）。
- 元数据块（中文标签）：**命名空间：** … · **模块：** TaleWorlds.CampaignSystem（或对应子模块）· **类型：** `public class <X> : CampaignBehaviorBase` · **源文件：** <相对 Bannerlord.Source 的真实 cs 路径>。
- `## 概述`：1–2 句真实职责（它管理战役的哪部分系统、谁创建/消费），>60 字。
- `## 心智模型`：≥80 字，真实：它在 Campaign 层的位置（不是 Mission、不是 UI）；由谁在战役启动时注册（*TypeDefiner / `CampaignGameStarter.AddBehavior`）；每 tick 或事件如何驱动；持有/写入哪些战役状态；是否 `[SaveableField]` 序列化、加载顺序；与对应 Model 的关系（Behavior 管状态，Model 管决策数值）。
- `## 何时使用 / 何时不要使用`：要点（如：想读商队数据 → `GetCampaignBehavior<CaravansCampaignBehavior>()`；想改世界状态 → 走 `*Action` / 该 Behavior 提供的方法，而非直接改 `MobileParty` 字段；不要从 Mission 层访问 Campaign Behavior）。
- `## 依赖图`：上游（注册方 *TypeDefiner / `Campaign` / `CampaignGameStarter` / `GameModels`）；下游真实消费方（`MobileParty` / `Settlement` / `Town` / `Clan` / `Hero` / 对应 `*Action` / `CampaignEvents`）；相关对象。每条指向【已存在】页面的真实相对链接（用 `ls`/`Glob` 验证存在）。**依赖图 + 参见合计 ≥7 条链接。**
- `## 风险`：注册/生命周期时机（`OnBeforeSave` 写入但 `SyncData` 未配对会坏档）、在 Mission 层访问 Campaign Behavior 导致 null/竞态、直接改字段绕过 Behavior 造成状态不一致或坏档、Behavior 在战役未启动时 `GetCampaignBehavior` 返回 null、事件订阅需 `RegisterEvents` 内登记否则不触发等。
- `## 成员说明`：按主题分组（如「生命周期钩子」「公开查询/方法」「事件」）；每个关键成员 = 用途（它**真正管理/计算什么**，来自源码）+ 副作用 + 调用时机。**不是签名墙，不是「读取并返回」。**
- `## 示例`：1–2 段**真实** C#：
  - 取 Behavior：`var caravans = Campaign.Current.GetCampaignBehavior<CaravansCampaignBehavior>();`
  - 订阅事件（以源码中真实事件名为准，勿编造）：在 `RegisterEvents` 内 `CampaignEvents.X.Event.AddNonSerializedListener(this, OnX);`
  - SubModule 注册：说明 Behavior 由模块 `*TypeDefiner` 自动注册，modder 自定义 Behavior 在 `CampaignGameStarter` 添加。
  - **绝不**出现 `= ...;`、`SomeValue` 占位；类型名/事件名必须与源码一致。
- `## 参见`：`↑ 父级：[战役 API 索引](../)` + `↔ 相关：` ≥3 个已存在页面（含上游枢纽 + 下游/相关类型）。

## 🔗 链接规则（硬性门禁，断链即失败）

Zola 把每个页面 `X.md` 当作目录 `X/` 来服务，相对链接从【该页面自身目录】解析：

- 同级兄弟页（同一 `api/campaign/` 内）：`[Name](../Name)` — **绝不** `./Name`。
- 父级 section 索引：`[…](../)`。
- **跨顶级 `api` 子目录**（如链到 `api/core-extra/Y`）：必须 `../../core-extra/Y`。口诀：离开 campaign 目录需 `../../子目录/页`。
- 目标名后**无**尾斜杠。绝不链 `_index.md`。
- 写之前用 `ls`/`Glob` 验证每个链接目标页存在；只链存在页。无对应页面则省略，不编造。

## ⚠️ 其他

- 中文为主；散文中的泛型用反引号包裹：`List<Hero>`。
- **不**运行任何生成器脚本；**不**设置 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。
- 只编辑你负责的那一个目标文件，不要改动其他文件。
- 写完后重读自查：逐条对照 🚫 禁止清单确认 0 命中；结构镜像范例；并用 `ls`/`Glob` 复核所有链接目标存在。
- 跑 `node tools/_verify_waveS_classify.mjs`，确认你的那一行的状态是 `PASS ... -> deep_pass`。

## 报告要求

写完后报告：读过的源文件、找到的 ≥3 调用点/事件、写出的真实成员用途（非签名墙）、包含的链接（目标已验证存在）、确认零禁止短语、`classifyPage` 自查（心智>80 / 依赖链接≥7 / 真实 C# 示例 / 概述达标）。
