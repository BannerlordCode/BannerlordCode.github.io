# Author Brief — Wave #T（手写王国决策框架深页）

你是 BannerlordCode.github.io 文档站的文档 Author agent。本任务把 6 个被自动生成器写成 stub 的 **王国决策（Kingdom Decision）框架**页面（提案行为、决议结果基类、权限模型与默认实现、地图通知、决议落定日志），基于真实源码整页重写为达标深页（`deep_pass`）。这是手写重建 loop 的一部分；**禁止**任何生成器脚本灌版（生成器已退役，见 `tools/RETIRED_BODY_GENERATORS.md`）。

## 🚫 绝对禁止的样板（命中任一即 REJECT / 判为项目失败）

对照 `tools/lib/handwritten-policy.mjs` 的 `STUB_PATTERNS`，以下任一出现即拒收：

- 概述写「`X` 是 TaleWorlds.Y 下的公开类型」或「中的公开类型」→ 必须写真实职责（>60 字，说明它在王国决策系统里管理/承载什么）。
- 心智模型写「阅读时先通过属性了解状态」「Read properties…」「先从命名空间」「入口或数据节点」「entry point or data node」→ 必须 ≥80 字真实心智模型（它处于 Campaign 哪一层、由谁驱动、提案→投票→结论生命周期如何流转、是否随存档序列化）。
- 示例出现 `null; // 替换`、`SomeValue`、`service = ...`、`service = null`、`Get...Implementation`、`从实际子系统 API…获取…实例`、`Obtain an instance of this type from the relevant subsystem API` → 必须用真实 API（见下「示例」）。
- 成员用途写「读取并返回当前对象中 X 的结果」「返回当前对象中 X 的值」→ 必须写它**真正管理/计算什么**，以及副作用与调用时机。
- 参见只有「[本区域目录](../)」→ 必须 ≥7 个指向【已存在】页面的真实相对链接（依赖图 + 参见合计）。
- 元数据用英文标签（`Namespace:`/`Module:`/`Type:`/`File:`）→ 必须中文（`**命名空间：**`/`**模块：**`/`**类型：**`/`**源文件：**`）。
- 兄弟链接用 `./X` → 必须 `../X`。

## ✅ 必读优质范例（写之前完整通读，是质量下限）

- `content/v1.4.5/zh/api/campaign/SkillObject.md` · `ItemObject.md` · `Settlement.md`（结构镜像、链接与风险写法）
- `content/v1.4.5/zh/api/campaign/SettlementAccessModel.md` · `SettlementPatrolModel.md`（已达标模型页，参考「风险 / 依赖」写法）
- `content/v1.4.5/zh/architecture/doc-contract.md`（版本化契约，写之前必读，遵守 H0 手写-only 策略）
- `content/v1.4.5/zh/api/campaign/KingdomDecision.md`（**已达标**基类枢纽，本波页都围绕它；先读它理解整体提案/投票/结论流程）
- 对每个 target，先用 Grep 在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/` 找到**真实调用点 / 事件订阅 / 派生类**（≥3），例如：
  - `KingdomDecisionProposalBehavior` → 维护待决议队列、`AddDecision`/`ResolveDecision`、与 `CampaignEventReceiver` 配合、`Campaign.Current.GetCampaignBehavior<KingdomDecisionProposalBehavior>()`。
  - `DecisionOutcome` → 所有 `*DecisionOutcome`（MakePeace/DeclareWar/ExpelClan/Policy/StartAlliance/KingSelection/TradeAgreement…）的基类；`Apply` / 触发 `KingdomDecisionConcludedLogEntry`。
  - `KingdomDecisionPermissionModel` → `GetHeroPermittedDecision` / `IsAllowed` 系列，决定哪些领主可发起提案；`DefaultKingdomDecisionPermissionModel` 是默认实现。
  - `KingdomDecisionMapNotification` → 决议在战役地图上弹出通知；由 `ShowKingdomDecisionNotification` 等触发。
  - `KingdomDecisionConcludedLogEntry` → 决议落定后写入日志；由 `DecisionOutcome.Apply` 级联。
  - 其余以源码为准，勿编造类型名/事件名。

## 📌 写之前强制步骤（报告里证明你做了）

1. 读你的 TARGET 源文件，搞清：它继承谁 / 实现哪个接口、由谁在战役中创建或驱动、处于提案→投票→结论生命周期的哪一环、持有/承载哪些状态、暴露哪些 `public` 成员供 modder 使用、是否 `[SaveableField]` 序列化。
2. grep 真实调用点（≥3）：用于依赖图与心智模型（链接到已存在页如 `KingdomDecision`、`DeclareWarDecision`、`CampaignEvents`）。
3. 完整通读上面至少 2 个范例，内化结构与深度。
   **关键：这些页不是方法签名墙。** 只写 modder 真正需要知道的：它在决策系统里的角色、怎么被驱动、你能订阅/调用/继承什么、误用会怎样（例如直接改王国状态绕过提案流程导致不一致/坏档）。

## 📐 输出结构（严格镜像，按各页语义适配）

- Frontmatter：`title: "<X>"` + 有信息量的 `description`（**绝不可**「自动生成类参考」）。
- 元数据块（中文标签）：**命名空间：** … · **模块：** TaleWorlds.CampaignSystem（或对应子模块）· **类型：** `public class <X> : <Base>` 或 `public interface <X>` · **源文件：** <相对 Bannerlord.Source 的真实 cs 路径>。
- `## 概述`：1–2 句真实职责（它在王国决策系统里管理/承载什么、谁创建/消费），>60 字。
- `## 心智模型`：≥80 字，真实：它在 Campaign 层的位置；由谁驱动（Behavior 自动运行 / Model 被查询 / Notification 被触发 / LogEntry 被写入）；提案→投票→结论如何流转；持有/写入哪些战役状态；是否随存档序列化、加载顺序；与 `KingdomDecision`、具体 `*Decision`/`*DecisionOutcome` 的关系。
- `## 何时使用 / 何时不要使用`：要点（如：想发起自定义王国决议 → 继承 `KingdomDecision` 并实现 `ConsiderDecision`、`DetermineChoice` 等；想限制谁可提案 → 替换 `KingdomDecisionPermissionModel`；不要绕过 `KingdomDecisionProposalBehavior` 直接改王国关系字段）。
- `## 依赖图`：上游（`KingdomDecisionProposalBehavior` / `Campaign` / `KingdomDecision` / `CampaignEvents`）；下游真实消费方（具体 `*Decision`/`*DecisionOutcome` / `KingdomDecisionConcludedLogEntry` / `KingdomDecisionMapNotification` / `Clan` / `Kingdom`）；每条指向【已存在】页面的真实相对链接（用 `ls`/`Glob` 验证存在）。**依赖图 + 参见合计 ≥7 条链接。**
- `## 风险`：提案/结论时序（`Apply` 在错误阶段调用会状态不一致或坏档）、直接改 `Kingdom`/`Clan` 字段绕过决策流程、Model 替换不完整导致权限判定失效、Notification/LogEntry 在战役未启动或地图未加载时构造失败、多线程/事件重入等。
- `## 成员说明`：按主题分组（如「生命周期/查询方法」「公开字段」「事件」）；每个关键成员 = 用途（它**真正管理/计算什么**，来自源码）+ 副作用 + 调用时机。**不是签名墙，不是「读取并返回」。**
- `## 示例`：1–2 段**真实** C#：
  - 取 Behavior：`var proposal = Campaign.Current.GetCampaignBehavior<KingdomDecisionProposalBehavior>();`
  - 发起/订阅（以源码中真实方法/事件名为准，勿编造）：例如 `proposal.AddDecision(new MyDecision(kingdom, proposer));` 或订阅 `CampaignEvents.KingdomDecisionConcluded` 等（以源码实际事件名为准）。
  - 自定义权限模型：继承 `KingdomDecisionPermissionModel` 并在 `GameModels` 替换（参考 `DefaultKingdomDecisionPermissionModel`）。
  - **绝不**出现 `= ...;`、`SomeValue` 占位；类型名/方法名必须与源码一致。
- `## 参见`：`↑ 父级：[战役 API 索引](../)` + `↔ 相关：` ≥3 个已存在页面（含上游枢纽 `KingdomDecision` + 下游/相关具体 Decision 或 Outcome）。

## 🔗 链接规则（硬性门禁，断链即失败）

Zola 把每个页面 `X.md` 当作目录 `X/` 来服务，相对链接从【该页面自身目录】解析：

- 同级兄弟页（同一 `api/campaign/` 内）：`[Name](../Name)` — **绝不** `./Name`。
- 父级 section 索引：`[…](../)`。
- **跨顶级 `api` 子目录**（如链到 `api/core-extra/Y`）：必须 `../../core-extra/Y`。口诀：离开 campaign 目录需 `../../子目录/页`。
- 目标名后**无**尾斜杠。绝不链 `_index.md`。
- 写之前用 `ls`/`Glob` 验证每个链接目标页存在；只链存在页。无对应页面则省略，不编造。

## ⚠️ 其他

- 中文为主；散文中的泛型用反引号包裹：`List<KingdomDecision>`。
- **不**运行任何生成器脚本；**不**设置 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。
- 只编辑你负责的那一个目标文件，不要改动其他文件。
- 写完后重读自查：逐条对照 🚫 禁止清单确认 0 命中；结构镜像范例；并用 `ls`/`Glob` 复核所有链接目标存在。
- 跑 `node tools/_verify_waveT_classify.mjs`，确认你的那一行的状态是 `PASS ... -> deep_pass`。

## 报告要求

写完后报告：读过的源文件、找到的 ≥3 调用点/事件、写出的真实成员用途（非签名墙）、包含的链接（目标已验证存在）、确认零禁止短语、`classifyPage` 自查（心智>80 / 依赖链接≥7 / 真实 C# 示例 / 概述达标）。
