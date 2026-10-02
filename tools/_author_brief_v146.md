# 作者简报 · v1.4.6 新版本内容站 · lead-1

日期：2026-08-22 · 工作目录：`C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
源码根：`C:\WorkSpace\Bannerlord\bannerlord-1.4.6\`（顶层就是模块目录，目录名 ≈ 命名空间；1.4.6 比 1.4.5 多出 `TaleWorlds.ScreenSystem`、`TaleWorlds.ObjectSystem`、`TaleWorlds.NavigationSystem`、`TaleWorlds.InputSystem` 等）

`content/v1.4.6/` 目前**不存在**，全部从零建。禁止改动任何共享文件（`config.toml`、`templates/**`、`data/**`、`content/_index.md`、`content/versions/**`、其它版本目录）——共享文件只写「补丁规格」。

## 0.1 五道硬闸门（任何生成脚本都要断言，缺一不可）

1. **文件名 ≡ `**Type:**` 行里的类型名** —— 违反就打印清单并非零退出（历史上出过 delegate 抽取把返回类型当类型名、`campaign/bool.md` 这类产物）。
2. **报告 step2（最长前缀路由）数 vs step3（entryPoint 覆写）数** —— 让覆写可证明生效。lead-2 的 worker step 3 从未应用，结果两个桶归零而其他桶全部健康，外部几乎看不出来。
3. **断言「声明存在的桶不得为空」**。
4. **`fs.existsSync` 确认源文件存在才建页**；按命名空间/命名模式推出来但找不到源文件的类型一律跳过记账，**绝不凭空建页**（虚构 API 是最不可接受的失败模式）。
5. **每条发出的链接按 route-relative 解析并断言目标 route 存在**；`fs.existsSync` 不是有效检查（错层级的链接作为文件是真实存在的）。层级规则读 artifact 的 `linkRules`。

**解析 canonical artifact 时必须断言 `schemaVersion === 2`，遇到不认识的形状报错退出，绝不静默忽略。** 「认不出就当没有」会 quietly 不干活。

当前 artifact 规模：`schemaVersion 2` / `rules 36` / `overrides 7` / `excludes 47` / `parityGaps 5` / `linkRules 12`。

- `AGENTS.md` — 站点结构、约定、链接写法（关键：链接相对路径、每个页面路由当目录解析）
- `content/v1.3.15/zh/api/save-system/SaveManager.md` — **深写页风格标杆**
- `content/v1.4.5/zh/api/_index.md` — API 首页的组织方式标杆
- `tools/lib/handwritten-policy.mjs` — `deep_pass` 判定口径（`classifyPage`）
- `tools/_check_deep.mjs` — 单页门禁
- `tools/audit-links.mjs` — 断链审计（`AUDIT_MODE=url`）
- `tools/gen-catalog-stubs.mjs` — 已有 stub 生成器与 `nsToDir` 命名映射，尽量**参数化复用**，不够用再写自己的 `tools/_v146_*.mjs`
- `tools/extract-class.mjs`、`tools/gen-class-ref.mjs`、`tools/generate-class-docs.mjs`、`tools/class-version-diff.mjs` — 类抽取/参考页生成/跨版本 diff，同样先试复用
- `tools/_evidence-cycle-20260822-AF.md` — 证据包模板与深写页风格

## 1. 目录与命名规格（所有 worker 必须一致）

- 内容树：`content/v1.4.6/zh/...` 与 `content/v1.4.6/en/...`，结构完全平行（每个 zh 页都有 en 对应页）。
> **🔴 唯一权威 = `tools/_dir-map-canonical.json`（2026-08-22 Boss 终局裁决，38 条有序前缀规则 + defaultDir + collisionRule + entryPointDirs + unmapped）**
> **不要自己发明 area map。** 实现顺序：`resolutionOrder`（最长前缀优先 → entryPointDirs 覆写 → collisionRule），没命中任何规则的命名空间一律进 `unmapped` 数组并回报点名，不许猜桶。
> 已知要点：`TaleWorlds.ScreenSystem`/`GauntletUI*`/`TwoDimension*`/`Engine.GauntletUI` → `gui`；`Engine*` → `engine`；`ObjectSystem*` → `campaign-ext`；`Library*`/`Core*`/`DotNet` → `core-extra`；`InputSystem` → `system`；`SaveSystem*` → `save-system`；`Localization*` → `localization`；`CampaignSystem` 根本域 → `campaign`，其子域 → `campaign-ext`；`MountAndBlade*`/`Mission*` → `mission-ext`；`ViewModel` 定案 `core-extra`；`MBSubModuleBase`/`Module`/`ModuleManager` → `core`；`Campaign*`/`Mission*`/`Agent`/`Formation`/`ScreenManager`/`ScreenBase`/`ScreenLayer`/`GauntletLayer`/`SaveManager`/`SaveContext`/`LoadContext`/`ISaveDriver`/`SaveableTypeDefiner` → 按 `entryPointDirs`。
> **一个类型 = 一个路径**，绝不写两份；同桶同名 → `<NamespaceLeaf>__<TypeName>.md`。
> 旧站 v1.4.5 树**不能**当目录真值（2199 个类型跨桶重复、171 个命名空间跨桶分裂）。AGENTS.md 关于「sidebar 硬编码 v1.3.15 菜单」也已过时。

- **api 目录名 = 旧站已有域沿用旧名 / 新增域用 module-slug**，1.4.6 映射表如下（以源码命名空间为准，`ns` 列是判定依据）：

| 1.4.6 命名空间 / 模块目录 | api 目录 | 备注 |
| --- | --- | --- |
| `TaleWorlds.Core` | `core-extra` | 以 canonical 表为准 |
| `TaleWorlds.Core.ViewModelCollection` | `viewmodel` | 旧站域 |
| `TaleWorlds.Library` | `library` | 新增 slug |
| `TaleWorlds.ModuleManager`、`TaleWorlds.DotNet`、`TaleWorlds.InputSystem`、`TaleWorlds.LinQuick` | `core` | 模块/基础设施（`MBSubModuleBase`、`Module` 在旧站 `core`） |
| `TaleWorlds.CampaignSystem`（实体类：`Campaign`/`Hero`/`Clan`/`Settlement`/`MobileParty`…） | `campaign` | 旧站域 |
| `TaleWorlds.CampaignSystem.Actions` / `.ComponentInterfaces` / `.CampaignBehaviors` / `.GameComponents` / `SandBox.CampaignBehaviors` | `campaign-ext` | 旧站的「扩展桶」 |
| `TaleWorlds.CampaignSystem.ViewModelCollection*` | `viewmodel` | |
| `TaleWorlds.MountAndBlade`（`Mission`/`Agent`/`MissionBehavior`/`Team`/`Formation`…） | `mission` | 旧站域 |
| `TaleWorlds.MountAndBlade.ComponentInterfaces`、`*.Widgets`、`*.GauntletUI` | `mission-ext` | 旧站扩展桶 |
| `TaleWorlds.ScreenSystem` | `screensystem` | 新增 slug |
| `TaleWorlds.ObjectSystem` | `objectsystem` | 新增 slug |
| `TaleWorlds.NavigationSystem` | `navigationsystem` | 新增 slug |
| `TaleWorlds.GauntletUI*` | `gui` | 旧站域 |
| `TaleWorlds.Engine`、`TaleWorlds.Engine.GauntletUI` | `engine` | 旧站域 |
| `TaleWorlds.SaveSystem` | `save-system` | 旧站域（带连字符） |
| `TaleWorlds.Localization` | `localization` | 旧站域 |
| `TaleWorlds.ActivitySystem` / `TaleWorlds.AchievementSystem` | `activitysystem` / `achievementsystem` | 新增 slug |
| `TaleWorlds.Network` / `TaleWorlds.TwoDimension` | `network` / `twodimension` | 新增 slug |
| `SandBox` / `StoryMode` | `sandbox` / `storymode` | 旧站域 |
| 其余 | 按上表推导，并在 tree-spec 里记下推导依据 | |

- 判定优先级：**一律走 `tools/_dir-map-canonical.json`**（上表只是导读快照，冲突时以 JSON 为准）。`core`/`core-extra`、`campaign`/`campaign-ext`、`mission`/`mission-ext` 这三对「主桶 + 扩展桶」的关系必须在 `tools/_v146_tree-spec.{md,json}` 里写 `slug ← 源命名空间` 双向表，供集成时做跨版本目录对照。
- **不要两套路径并存**：一张类型只允许一个页面路径。
- **噪声排除**（不生成页面，只在清单里计数）：路径含 `AutoGenerated` / `CodeGenerator` / `SaveSystem.CodeGenerator`，模块目录属于 `TaleWorlds.Diamond*`、`TaleWorlds.PlatformService*`、`TaleWorlds.PlayerServices`、`TaleWorlds.ServiceDiscovery*`、`TaleWorlds.PSAI`、`TaleWorlds.Network`、`TaleWorlds.LinQuick`、`TaleWorlds.MountAndBlade.Multiplayer*`、`*Launcher*`、`*DedicatedCustomServer*`、`TaleWorlds.TwoDimension.Standalone`、`GalaxyCSharp`、`Newtonsoft*`、`StbSharp`、`System.*`、`mscorlib`。
- 每个 api 目录一个 `_index.md`（zh/en 各一），内容为该模块的中文/英文导览 + **该模块完整 A–Z 类目录**（每个类一条链接）。`_index.md` 上 `classifyPage` 会判 noise，属正常，不要试图把它写成 deep_pass。
- 叶子页固定路径：`content/v1.4.6/{zh,en}/api/<module-slug>/<TypeName>.md`。同名冲突（不同命名空间同名类型）在文件里加 `__<命名空间后缀>`，并在页内写明完整命名空间。
- 版本根：`content/v1.4.6/{zh,en}/_index.md`；架构页 `architecture/`；`guide/`。

## 2. 链接规格（用户最在意「跳过去回不来 / 404」）

页面路由自带尾斜杠，所以**同级叶子页要写 `../X`，不是 `./X`**：

> 链接深度按 `AUDIT_MODE=url` 口径实测校准（叶子页路由自带尾斜杠）：

- **叶子页**（`content/v1.4.6/{zh,en}/api/<bucket>/<Type>.md`）→ 同桶同级类页：`../Vec3`；同桶 `_index.md`：`../`；跨桶类页：`../../<bucket>/<Type>`；版本根 `content/v1.4.6/{zh,en}/`：要上 **三** 级 `../../../`；架构页 `../../architecture/module-map` 在叶子页上**也必须写 `../../../architecture/module-map`**（brief 早期版本这里写错了，以本行为准）。
- **桶 `_index.md`**（`.../api/<bucket>/_index.md`）→ api 首页 `../`；版本根 `../../`；架构页 `../../architecture/module-map`。
- **版本根 `_index.md`** / `architecture/*.md` → 站内 `../<section>/`、站点根 `../../`。
- **每个链接目标文件必须真实存在**（写之前 `ls` 确认；目标尚未生成就先用必定存在的版本根链接并在回报里列出待校验项）。宁可少写链接，不可写死链。

## 3. 深写页标准（判定为 `deep_pass`）

叶子类参考页必须同时满足（口径见 `tools/lib/handwritten-policy.mjs` 的 `classifyPage`）：

1. 文件名不含 `AutoGenerated`/`Newtonsoft`/`Steamworks`/`Platform.`（这类直接判 noise，别做深写）
2. 有 `**Type:** \`public class X ...\`` 形式的类型行
3. `## 心智模型`：纯文本 > 80 字，写「什么场景用 / 典型调用顺序 / 常见误用与坑」
4. `## 依赖关系`（或 `## 参见`）：**≥2 个**指向同仓真实页面的相对链接
5. `## 概述`：纯文本 > 60 字，且不是「`X` 是 `TaleWorlds.Y` 下的公开类型」这类空话（或不写 `## 概述`，此时正文需 > 2000 字符）
6. 有真实 csharp 示例：≥3 行有效代码、含 `.Method(` 调用、基于真实 API、能编译的形状
7. 全文不含禁用样板句：`SomeValue` / `null; // 替换` / `service = ...` / `从实际子系统 API` / `Get...Implementation` / `阅读时先通过属性了解状态` / `是 TaleWorlds.X 下的公开类型` / `调用 X 对应的操作`
8. 不要用 `**用途 / Purpose:**` 标签（会命中公式化句式判定）；用 `## 关键成员` 表格，列 = `成员 | 签名 | 这个成员是做什么用的`

内容要求：**每个 public/protected 成员都要写清「它是做什么用的」**，签名必须来自 `bannerlord-1.4.6/` 真实源码，禁止虚构/凭记忆。必须有风险/边界段（悬空引用、生命周期、线程亲和、平台差异、存档兼容、状态机顺序等，按类实际风险写）。

### 批量初稿（stub）允许的最低标准

批量生成的初稿可以是 stub，但必须：URL 稳定、`**Namespace:**`/`**Type:**` 行真实准确（不是空话）、有一句真实的 `description`、列出真实 public 成员签名表、末尾有指向该模块 `_index.md` 与真实相关页的链接。禁止 `SomeValue` 之类占位符。

### 推荐骨架

```markdown
---
title: "SaveManager"
description: "存档执行总管：建立 DefinitionContext，收集对象图，交给 ISaveDriver 落盘。"
---
# SaveManager

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public static class SaveManager`
**File:** `TaleWorlds.SaveSystem/SaveManager.cs`

## 概述
## 心智模型
## 关键成员      （表格：成员 | 签名 | 作用）
## 真实示例      （≥3 行真实 csharp）
## 风险与边界
## 跨版本提示    （1.4.6 ↔ 1.4.5/1.3.15/1.3.0，用 node tools/class-version-diff.mjs <Class> 核对；核对不到就省略或如实写）
## 依赖关系      （≥2 条真实链接 + 父级链接）
```

## 4. 验收（每个 worker 自己收尾必跑）

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_check_deep.mjs "content/v1.4.6/zh/api/<module>/<Type>.md"     # 深写页必须 deep_pass
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs # BROKEN_LINKS=0 / RESOLVE_NEITHER=0
```

禁止：`git add` / `git commit`；全量 `zola build`（36k+ 页，本机 I/O 极慢）；改共享文件；改其他 worker 的文件。

## 5. 回报

给出：产出文件数、stub/deep 计数、断链审计数字、`_check_deep` 逐页结果、跳过的内容与原因、阻塞。**不要夸大**，门禁与审计我会独立复跑。