# Author Brief — Wave #L（手写 Settlement*Model 深页）

你是 BannerlordCode.github.io 文档站的文档 Author agent。本任务把 6 个被自动生成器写成 stub 的 **模型类** 页面，基于真实源码整页重写为达标深页（`deep_pass`）。这是手写重建 loop 的一部分；**禁止**任何生成器脚本灌版（生成器已退役）。

## 🚫 绝对禁止的样板（命中任一即 REJECT / 判为项目失败）

对照 `tools/lib/handwritten-policy.mjs` 的 `STUB_PATTERNS`，以下任一出现即拒收：

- 概述写「`X` 是 TaleWorlds.Y 下的公开类型」或「中的公开类型」→ 必须写真实职责（>60 字）。
- 心智模型写「阅读时先通过属性了解状态」「Read properties…」「先从命名空间」「入口或数据节点」「entry point or data node」→ 必须 ≥80 字真实心智模型。
- 示例出现 `null; // 替换`、`SomeValue`、`service = ...`、`service = null`、`Get...Implementation`、`从实际子系统 API…获取…实例`、`Obtain an instance of this type from the relevant subsystem API` → 必须用真实 API 调用。
- 成员用途写「读取并返回当前对象中 X 的结果」「返回当前对象中 X 的值」→ 必须写它**真正计算什么**。
- 参见只有「[本区域目录](../)」→ 必须 ≥3 个指向【已存在】页面的真实链接。
- 元数据用英文标签（`Namespace:`/`Module:`/`Type:`/`File:`）→ 必须中文（`**命名空间：**`/`**模块：**`/`**类型：**`/`**源文件：**`）。
- 兄弟链接用 `./X` → 必须 `../X`。

## ✅ 必读优质范例（写之前完整通读，是质量下限）

- `content/v1.4.5/zh/api/campaign/SettlementMilitiaModel.md`（同族模型，已达标，优先镜像）
- `content/v1.4.5/zh/api/campaign/MarriageModel.md`
- `content/v1.4.5/zh/api/campaign/VolunteerModel.md`

## 📌 写之前强制步骤（报告里证明你做了）

1. 读抽象模型定义：你的 TARGET 源文件（见各 agent 派发说明）。
2. grep 默认实现：`class Default<X>`（通常在 `Modules.SandBox` 下），读它理解具体行为。
3. grep ≥3 个真实调用点：`Models.<X>` 或 `<X>.<方法>`，搞清楚谁调用（用于依赖图与心智模型）。
4. 完整通读上面 3 个范例，内化结构与深度。

## 📐 输出结构（严格镜像 SettlementMilitiaModel.md）

- Frontmatter：`title: "<X>"` + 有信息量的 `description`（**绝不可**「自动生成类参考」）。
- 元数据块（中文标签）：**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces · **模块：** TaleWorlds.CampaignSystem · **类型：** `public abstract class <X> : MBGameModel<<X>>` · **源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/<X>.cs
- `## 概述`：1–2 句真实职责（它计算/裁决什么、谁用它），>60 字。
- `## 心智模型`：≥80 字，真实：生命周期、如何被 `Campaign.Current.Models.<X>` 经 `GameModels` 解析、属于 Campaign 层、何时用/何时不要用、正确替代（改世界状态走 Behaviors / *Action 而非模型）。
- `## 何时使用 / 何时不要使用`：要点。
- `## 依赖图`：上游 Campaign/GameModels；下游真实调用方（Behavior/Settlement/Town/Hero/Army）；相关 Models。每条指向【已存在】页面的真实相对链接（用 Glob 验证存在）。≥3 条链接。
- `## 风险`：跨战役缓存实例、战役开始前空引用、无状态/无 `[SaveableField]`、在 Mission 层调用、只替换模型不改写入路径等。
- `## 成员说明`：按主题分组；每个关键成员 = 用途（它**真正计算什么**，来自源码）+ 副作用 + 调用时机。**不是签名墙，不是「读取并返回」**。
- `## 示例`：1–2 段**真实** C#，用 `Campaign.Current.Models.<X>.<真实方法>(真实参数类型)`（方法名与参数类型来自源码）。**绝不**出现 `= ...;`。
- `## 参见`：`↑ 父级：[战役 API 索引](../)` + `↔ 相关：` ≥3 个已存在页面。

## 🔗 链接规则（硬性门禁，断链即失败）—— 重点防复发

Zola 把每个页面 `X.md` 当作一个**目录** `X/` 来服务，相对链接从【该页面自身目录】解析：

- 同级兄弟页（同一 `api/campaign/` 内）：`[Name](../Name)` — **绝不** `./Name`。
- 父级 section 索引：`[…](../)`。
- **跨顶级 `api` 子目录**（如从 `api/campaign/CampaignData.md`，即目录 `api/campaign/CampaignData/`，链到 `api/campaign-ext/CharacterHelper`，即目录 `api/campaign-ext/CharacterHelper/`）：必须 `../../campaign-ext/CharacterHelper`，**绝不** `../campaign-ext/CharacterHelper`（后者会解析成 `api/campaign/campaign-ext/...`，坏链）。
  - 记忆口诀：从 `api/campaign/X/` 出发，要离开 campaign 目录必须先 `../` 回到 `api/campaign/`，再 `../` 回到 `api/`，然后 `子目录/页`。所以跨顶级 = `../../子目录/页`。
- 目标名后**无**尾斜杠。绝不链 `_index.md`。
- 写之前用 Glob 验证每个链接目标页存在；只链存在页。无对应页面则省略，不编造。

## ⚠️ 其他

- 中文为主；散文中的泛型用反引号包裹：`List<Hero>`。
- **不**运行任何生成器脚本；**不**设置 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。
- 只编辑你负责的那一个目标文件，不要改动其他文件。
- 写完后重读自查：逐条对照 🚫 禁止清单确认 0 命中；结构镜像范例；并用 Glob 复核所有链接目标存在。

## 报告要求

写完后报告：读过的源文件、默认实现路径、找到的 ≥3 调用点、写出的真实成员用途、包含的链接（目标已 Glob 验证）、确认零禁止短语、`classifyPage` 自查（心智>80 / 依赖链接≥2 / 真实 C# 示例 / 概述达标）。
