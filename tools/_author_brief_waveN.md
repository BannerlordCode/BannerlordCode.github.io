# Author Brief — Wave #N（手写「战役地图 / 时间 / 状态基础设施」数据·状态类型深页）

你是 BannerlordCode.github.io 文档站的文档 Author agent。本任务把 6 个被自动生成器写成 stub 的 **战役地图/时间/状态基础设施类型** 页面，基于真实源码整页重写为达标深页（`deep_pass`）。这是手写重建 loop 的一部分；**禁止**任何生成器脚本灌版（生成器已退役）。

本波目标是一组**数据 / 状态 / 基础设施类型**（不是 Model、不是 *Action）。它们的心智模型应围绕「持有什么状态、生命周期、谁拥有/读写、正确的访问与变更时机、改错的后果（尤其是坏档/离奇崩溃）」，而非「Apply 契约」。

## 🚫 绝对禁止的样板（命中任一即 REJECT / 判为项目失败）

对照 `tools/lib/handwritten-policy.mjs` 的 `STUB_PATTERNS`，以下任一出现即拒收：

- 概述写「`X` 是 TaleWorlds.Y 下的公开类型」或「中的公开类型」→ 必须写真实职责（>60 字）。
- 心智模型写「阅读时先通过属性了解状态」「Read properties…」「先从命名空间」「入口或数据节点」「entry point or data node」→ 必须 ≥80 字真实心智模型。
- 示例出现 `null; // 替换`、`SomeValue`、`service = ...`、`service = null`、`Get...Implementation`、`从实际子系统 API…获取…实例`、`Obtain an instance of this type from the relevant subsystem API` → 必须用真实 API 调用。
- 成员用途写「读取并返回当前对象中 X 的结果」「返回当前对象中 X 的值」→ 必须写它**真正计算/持有/序列化什么**。
- 参见只有「[本区域目录](../)」→ 必须 ≥3 个指向【已存在】页面的真实链接。
- 元数据用英文标签（`Namespace:`/`Module:`/`Type:`/`File:`）→ 必须中文（`**命名空间：**`/`**模块：**`/`**类型：**`/`**源文件：**`）。
- 兄弟链接用 `./X` → 必须 `../X`。

## ✅ 必读优质范例（写之前完整通读，是质量下限）

这些是同站已达标（deep_pass）的**实体/数据型**页面，结构最贴近本波类型（而非 Model 页面）：

- `content/v1.4.5/zh/api/campaign/MobileParty.md`（实体 + 状态 + 依赖 + 风险，最佳镜像）
- `content/v1.4.5/zh/api/campaign/Hero.md`（实体生命周期与依赖）
- `content/v1.4.5/zh/api/campaign/Settlement.md`（实体 + 子系统依赖）
- `content/v1.4.5/zh/api/campaign/ItemRoster.md`（容器/状态类型，含序列化与坏档风险）

## 📌 写之前强制步骤（报告里证明你做了）

1. 读你的 TARGET 源文件（见各 agent 派发说明；若为嵌套类型，打开**包含它的 .cs 文件**并定位该 `partial`/嵌套类型定义）。
2. grep ≥3 个真实调用点：谁构造它、谁读写它的字段/方法、它在哪个 Behavior/System 里被使用（用于依赖图与心智模型）。
3. 完整通读上面 4 个范例，内化结构与深度（尤其「风险」段如何写坏档/崩溃面）。

## 📐 输出结构（严格镜像 MobileParty.md / ItemRoster.md 的实体·状态型写法）

- Frontmatter：`title: "<X>"` + 有信息量的 `description`（**绝不可**「自动生成类参考」）。
- 元数据块（中文标签）：**命名空间：** … · **模块：** … · **类型：** `public <class|struct|enum> <X> …` · **源文件：** Bannerlord.Source/bin/…/<X>.cs（嵌套类型注明「定义于 <Container>.cs 内」）。
- `## 概述`：1–2 句真实职责（它持有/计算/序列化什么、被谁使用），>60 字。
- `## 心智模型`：≥80 字，真实：它处在哪一层（Campaign / Map / Save…）、生命周期（何时创建、被谁持有）、它与 `Campaign.Current` / `MobileParty` / `Settlement` / 存档的关系、何时读、何时**不要**直接改、正确变更路径（走哪个 Behavior / 字段赋值 / 还是根本只读）。
- `## 何时使用 / 何时不要使用`：要点（含正确替代）。
- `## 依赖图`：上游（谁持有/构造它）；下游（哪些系统读写它）；相关类型/Behaviors/Models/Save 点。每条指向【已存在】页面的真实相对链接（用 Glob 验证存在）。≥3 条链接。
- `## 风险`：针对本类型**真实**的崩溃/坏档面——例如：存档未注册/版本错配导致反序列化失败、tick 中突变导致状态不一致、缓存过期未刷新、多线程/异步读写、字段直接改而绕过应有的传播、枚举值越界等。每条风险要说明**会导致什么后果**。
- `## 成员说明`：按主题分组；每个关键成员 = 用途（它**真正持有/计算/序列化什么**，来自源码）+ 副作用 + 调用时机。**不是签名墙，不是「读取并返回」**。
- `## 示例`：1–2 段**真实** C#，使用真实 API（如字段读取、构造、`Campaign.Current` 取实例、调用真实方法），参数类型来自源码。**绝不**出现 `= ...;`。
- `## 参见`：`↑ 父级：[战役 API 索引](../)` + `↔ 相关：` ≥3 个已存在页面（优先链 MobileParty / Settlement / Campaign / 相关 Behavior）。

## 🔗 链接规则（硬性门禁，断链即失败）—— 重点防复发

Zola 把每个页面 `X.md` 当作一个**目录** `X/` 来服务，相对链接从【该页面自身目录】解析：

- 同级兄弟页（同一 `api/campaign/` 内）：`[Name](../Name)` — **绝不** `./Name`。
- 父级 section 索引：`[…](../)`。
- **跨顶级 `api` 子目录**（如从 `api/campaign/X.md` 链到 `api/core/Y`）：必须 `../../core/Y`，**绝不** `../core/Y`（后者解析成 `api/campaign/core/...`，坏链）。
  - 记忆口诀：从 `api/campaign/X/` 出发，离开 campaign 必须先 `../` 回 `api/`，再 `子目录/页`。跨顶级 = `../../子目录/页`。
- 目标名后**无**尾斜杠。绝不链 `_index.md`。
- 写之前用 Glob 验证每个链接目标页存在；只链存在页。无对应页面则省略，不编造。
- 注意：`api/campaign-ext/` 与 `api/campaign/` 是**重复树**——优先链 `api/campaign/` 下的规范页（如 `../../campaign/Hero`），不要链 `campaign-ext/` 副本。

## ⚠️ 其他

- 中文为主；散文中的泛型用反引号包裹：`List<Hero>`。
- **不**运行任何生成器脚本；**不**设置 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。
- 只编辑你负责的那一个目标文件，不要改动其他文件。
- 写完后重读自查：逐条对照 🚫 禁止清单确认 0 命中；结构镜像范例；并用 Glob 复核所有链接目标存在。

## 报告要求

写完后报告：读过的源文件（含嵌套容器的定位）、找到的 ≥3 调用点、写出的真实成员用途、包含的链接（目标已 Glob 验证）、确认零禁止短语、`classifyPage` 自查（心智>80 / 依赖链接≥2 / 真实 C# 示例 / 概述达标）。
