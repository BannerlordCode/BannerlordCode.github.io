# Author Recovery Brief — Wave #E (手写质量修复)

你是 BannerlordCode.github.io 文档站的文档 Author agent。本任务是**重写**一页被上一个 agent 写成「自动生成垃圾」的页面。这是一次严格的质量修复。

## 🚫 绝对禁止的样板（出现任一即 REJECT，违反 H1–H9 契约）

上一个失败 agent 产出了以下**不可接受**的样板，你**绝不能**产出：

- `description: "X 的自动生成类参考。"` （或任何 "自动生成" 字眼）
- 概述：`X 是一个规则模型，通常定义"系统该如何计算"。mod 开发者最常通过替换或继承它来改规则。`
- 心智模型：`把 X 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它…`
- 成员：`用途 / Purpose: 读取并返回当前对象中 X 的结果。`
- 示例：`X instance = ...;` 或 `// 先通过子系统 API 拿到 X 实例` 或 `// 通常通过子系统 API 或工厂获得派生实例`
- 参见：只有 `[本区域目录](../)`
- 元数据用英文标签 `Namespace:` / `Module:` / `Type:` / `File:`（必须用中文：**命名空间：** / **模块：** / **类型：** / **源文件：**）
- 兄弟链接用 `./X`（必须用 `../X`）

任何包含上述模式的页面都会被 REJECT 并判为项目失败。

## ✅ 必须模仿的优质范例（写之前务必**完整通读**这三页，它们是质量下限）

- `C:\WorkSpace\Bannerlord\BannerlordCode.github.io\content\v1.4.5\zh\api\campaign\MarriageModel.md`
- `C:\WorkSpace\Bannerlord\BannerlordCode.github.io\content\v1.4.5\zh\api\campaign\VolunteerModel.md`
- `C:\WorkSpace\Bannerlord\BannerlordCode.github.io\content\v1.4.5\zh\api\campaign\SettlementMilitiaModel.md`

## 📌 写之前的强制步骤（在报告里证明你做了）

1. 读抽象模型定义：`<SRC>` （见各 agent 的 TARGET 说明）
2. 找并读默认实现：在 `C:\WorkSpace\Bannerlord\bannerlord-1.4.5` 里 grep `class Default<X>`（通常在 `TaleWorlds.Modules.SandBox` 下），读它理解具体行为。
3. grep ≥3 个真实调用点：`Models.<X>` / `<X>.方法名`，搞清楚谁调用它（用于依赖图与心智模型）。
4. 完整通读上面 3 个优质范例，内化结构与深度。

## 📐 输出要求（严格镜像 MarriageModel.md 结构）

- Frontmatter：`title: "<X>"` + 有信息量的 `description`（**不能**是"自动生成类参考"）。
- 元数据块（中文标签）：**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces · **模块：** TaleWorlds.CampaignSystem · **类型：**（源码里的确切写法，如 `abstract class <X> : MBGameModel<<X>>`）· **源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/<X>.cs
- `## 概述` — 1–2 句真实内容：它计算/裁决什么、谁用它。
- `## 心智模型` — ≥80 字，真实：生命周期、`Campaign.Current.Models.<X>` 如何被 `GameModels` 解析、属于 Campaign 层、何时用/何时不要用、正确替代（改世界状态走 Behaviors/*Action 而非模型）。
- `## 何时使用 / 何时不要使用` — 要点。
- `## 依赖图` — 上游 Campaign/GameModels；下游真实调用方（Behavior/Settlement/Town/Hero/Army）；相关 Models。**每条都是指向【已存在】页面的真实相对链接**（用 Glob 验证目标存在）。≥3 条链接。
- `## 风险` — 跨战役缓存实例、战役开始前空引用、无状态/无 `[SaveableField]`、在 Mission 层调用、只替换模型不改写入路径等。
- `## 成员说明` — 按主题分组；每个关键成员 = 用途（**它真正计算什么**，来自源码）+ 副作用 + 调用时机。**不是签名墙，不是"读取并返回"**。
- `## 示例` — 1–2 段**真实** C#，用 `Campaign.Current.Models.<X>.<真实方法>(真实参数类型)`（方法名与参数类型来自源码）。**绝不**出现 `= ...;`。
- `## 参见` — `↑ 父级：[战役 API 索引](../)` + `↔ 相关：` ≥3 个已存在页面。

## 🔗 链接规则（硬性门禁，断链即失败）

- 同级兄弟页：`[Name](../Name)` — **绝不** `./Name`。
- 父级 section 索引：`[…](../)`。
- 跨顶级 `api` 子目录：`[Name](../../<subdir>/<Name>)`。
- 目标名后**无**尾斜杠。绝不链 `_index.md`。
- 写之前用 Glob 验证每个链接目标页面存在；只链存在的页。若某相关类型无页面，宁可省略也不要编造。

## ⚠️ 其他

- 中文为主。散文中的泛型用反引号包裹：`List<Hero>`。
- **不要**运行任何生成器脚本。**不要**设置 `BANNERLORD_ALLOW_RETIRED_BODY_GEN`。
- 只编辑你负责的那一个目标文件，不要改别的。
- 写完后重读自查：对照 🚫 禁止清单逐条确认无命中；结构镜像范例。

## 报告要求

写完后报告：读过的源文件、找到的调用点、你写出的真实方法用途、包含的链接（确认目标存在）、以及确认零禁止短语。
