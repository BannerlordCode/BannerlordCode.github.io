# 作者简报 · v1.4.6 新版本内容站 · lead-1

日期：2026-08-22 · 工作目录：`C:\WorkSpace\Bannerlord\BannerlordCode.github.io`
源码根：`C:\WorkSpace\Bannerlord\bannerlord-1.4.6\`（顶层即模块目录，目录名 ≈ 命名空间）

**跨版本对照源（已实测存在，路径必须精确到双层嵌套）**
```
C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\<Assembly>\<Assembly>\<Type>.cs
例：...\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\Campaign.cs
1.4.5 共 8,574 个 .cs（1.4.6 顶层为单层目录）。
```
**不要因为只扫了一层就断言「1.4.5 没有 C# 源码」** —— 本会话已因此错判一次并写进 24 页内容。核实不到就写「未核对」，但先确认路径层数。

`content/v1.4.6/` 从零建。禁止改共享文件（`config.toml`、`templates/**`、`data/**`、`content/_index.md`、`content/versions/**`、其它版本目录）——共享文件只交「补丁规格」。
禁止 `git add` / `git commit`；禁止全量 `zola build`（3.6 万页，本机 I/O 极慢）。

## 0. 🔴 唯一权威：`tools/_dir-map-canonical.json`

**目录映射、噪声排除、入口类覆写、链接层级、parity gap 全部只从这个文件读。本 brief 不再手抄任何映射表。**

手抄副本已造成实际事故（`TextObject` 被误搬到 `core-extra/`，1.4.5 磁盘先例与 artifact 都是 `localization/`），根因就是手抄了机器可读表。**规则表会变，凭记忆的副本不会跟着变。**

- **必须断言 `schemaVersion === 3`**，遇到任何不认识的形状**报错退出，绝不静默忽略**（历史上 worker 只认旧 `entryPointDirs` 数组形状，静默丢掉整个覆写层，`mission`/`core` 两桶归零却不报错）。
- 实现 `resolutionOrder` 时**第 2 步不要提前 return**，第 3 步对每个类型都执行一次；对照 artifact 的 `_resolutionPseudocode`。
- 当前规模：`rules 36` / `overrides 7` / `excludes 47` / `parityGaps 5` / `linkRules 16`。artifact **没有** `unmapped` 字段 —— 那是各线 inventory 侧自己产出的概念。
- **一个类型 = 一个路径**，绝不写两份；同桶同名 → `<NamespaceLeaf>__<TypeName>.md`。
- 没命中任何规则的命名空间 → 进你自己 inventory 的 `unmapped` 数组并回报点名，**不要猜桶**。
- `ModuleManager` **在任何版本都不存在**（四版本全树扫 0 命中），永远不要建这个页面。
- 旧站 v1.4.5 树**不能**当目录真值（实测 2199 个类型跨桶重复、171 个命名空间跨桶分裂）；AGENTS.md 关于「sidebar 硬编码 v1.3.15 菜单」也已过时。

## 0.1 六道硬闸门（脚本里都要有断言，缺一不可）

1. **文件名 ≡ `**Type:**` 行里的类型名** —— 违反就打印清单并非零退出（历史事故：delegate 抽取把返回类型当类型名，产出 `campaign/bool.md` 这类页面，还顶掉了真实类型的 URL）。
2. **报告 step2（最长前缀路由）数 vs step3（entryPoint 覆写）数** —— 让覆写可证明生效。
3. **断言「声明存在的桶不得为空」**（每个声明桶必须有 `_index.md`）。
4. **`fs.existsSync` 确认源文件存在才建页**；按命名空间/命名模式推出来但找不到源文件的类型一律跳过记账，**绝不凭空建页**。虚构 API 是本项目最不可接受的失败模式，比漏页严重得多。
5. **每条发出的链接按 route-relative 解析并断言目标 route 存在**。`fs.existsSync` 不是有效检查 —— 错层级的链接作为文件是真实存在的。
6. **`schemaVersion === 3` 断言**（见 §0）。

### 链接检查按 Boss 锚定版（旧的未锚定 grep 已作废）

```bash
grep -nE '\]\(\.\./[a-z-]+/[A-Za-z]'  <你的页>   # 叶子页跨桶少写一层。必须 0
grep -nE '\]\(\./'                     <仅叶子页>  # 叶子页里的点斜杠。必须 0（第 2 条只对叶子页跑）
grep -n   'content/'                    <你的页>   # 仓库根相对泄漏。必须 0
```
另加：**自引用链接（页面链到自己）必须为 0**。

**方法论**：写检查必须先拿已知输入试过，并且**同时**满足两个轴 —— 校准（在已知良好数据上报 0）**加**阳性对照（在已知不良数据上必须报非零）。只校准不够：过宽的检查在 shipped tree 上同样返回 0，它栽在另一个轴上（未锚定 grep、filesystem-relative resolver 把子目录数当文件数、未校准 classifier 报幻影缺陷 —— 本轮已发生四次）。

### 跨版本链接

回到站点根需要的 `../` 数 == 页面自身 route 的段数；语言段必须匹配**目标树**不是源树。

## 0.3 跨版本结论的可追溯性（硬判据）

**一个无法追溯到具体 `.cs` 路径的跨版本结论，等于没核对。**

每个跨版本结论必须附「**我打开的是哪个文件**」——至少写到 `<Assembly>/<Type>.cs`，关键差异要写到行号或成员名。**只写「已核对」或「逐行比对」不接受。**

各版本源码实测（本机，`find -name '*.cs'`，**派单与页面上引用的每个数字都以此为准**）：

| 版本树 | 全树 `.cs` | 备注 |
| --- | --- | --- |
| `bannerlord-1.3.15` | 5,208 | 顶层为单层模块目录 |
| `bannerlord-1.4.5` | 8,583 | **`Bannerlord.Source/bin/` 下 6,222 + bin 外 2,361**；路径是**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs` |
| `bannerlord-1.4.6` | 11,385 | 顶层为单层模块目录 |
| `bannerlord-1.4.7` | 11,387 | |
| `bannerlord-1.5.3` | 11,487 | |

**已知陷阱**：只扫 `bin/` 一层就断言「1.4.5 没有 .cs」—— 本会话因此写错24 页内容。核实前先确认路径层数。

**派单纪律（本会话升级后的正式版）**：派单里出现的**每一个具体数字与事实结论**，必须是派单者**亲自跑出来的**，或明确标注「转述自 worker-X，**未核实**」。**转述必须带出处，不能带结论。**

## 0.4 内容判据（与门禁并列，违反即内容错误）

1. **`internal` 类型不建页。** 面向 mod 作者的文档只写 mod 能引用的东西。若某个 `internal` 类型与某个 `public` 类型同名（不同可见性），把说明写进**那个 `public` 类型的页里**，不要给 `internal` 的单独建页。
2. **占位符式命名与 `SomeValue` 同罪，正文裸名也算。** 禁止 `OnXxx` / `GetActionForXxx` / `I*StateHandler` / `XxxModel` 这类形态出现在正文裸名里；只用源码里真实存在的名字。
3. **签名表只写到参数类型，语义放到「作用」列用中文描述。** 散文反查器不做词边界判断，lowerCamel 形参名里的大写段会被切出来误报（`lastKeysPressed`→`KeysPressed`）。**唯一干净的纠正法是不提那个 token。**
4. **每个数字必须带单位与口径。** `BROKEN_LINKS`（按 occurrence）与表头（按文件内去重目标）是两个数，**不可相减、不可互相校准**。
5. **桶索引必须与类页同批同步。** 新增类页若不进所属桶 `_index.md` 的「已手写类页」清单，它就是**孤儿页** —— 链接层面完全看不出来（断链是 0），只有 `node tools/_v146_orphan_check.mjs` 看得见。**每批收尾必跑 orphan 并要求归零。**
6. **反例句不要提及不存在的名字。** 写「某版本未核对」时若在反引号里写了那个假名，检查器会扫到并再报一条 miss。写「未核对」即可，不提具体名字。

## 0.2 派单纪律

- **不写未经源码核实的调用示例**。派单只描述签名特征，不给具体调用。确需示例时必须逐字引自源码并附 `.cs` 路径，标注「格式示意，API 本身以源码为准」。
- **worker 发现本 brief 的 API 与源码冲突时，以源码为准，并在回报里点名 brief 写错了** —— 这是正确行为，要鼓励。
- zh→en 抄写前查 CJK 残留：`**Base:**` / `**Namespace:**` / `**Module:**` 这类从 zh 照抄的字段最容易带中文过来。

## 1. 目录与命名（读 artifact，不手抄）

- 内容树 `content/v1.4.6/zh/...` 与 `.../en/...` 结构完全平行（每个 zh 页有 en 对应页）。
- 叶子页：`content/v1.4.6/{zh,en}/api/<bucket>/<TypeName>.md`（bucket 由 artifact 现算）。
- 每个 api 目录一个 `_index.md`：导览 + **该桶完整 A–Z 类目录**（每类一条链接）+ 父级链接。`_index.md` 判 `noise` 属正常，不要硬凑 `deep_pass`。
- `mission` / `core` 是**有意的入口类 carve-out 桶**，故意小：桶 `_index.md` 顶部写明「本桶只放 mod 入口类，完整 API 在 `../mission-ext/`」并**双向互链**；nav-spec 注明这是**预期布局，不是重复路由 bug**，防 QA「修」回 404。
- 不建 `gameplay` 桶（1.4.5 那个桶语义混乱，复刻等于搬缺陷）；parity gap 直接引用 artifact 的 `parityGaps` 结构化数据，不要另写散文版。

## 2. 链接层级（叶子页路由带尾斜杠，`..` 只弹一层）

- 叶子 → 同桶兄弟 `../<Name>`；叶子 → 跨桶 `../../<bucket>/<Name>`；叶子 → 区块索引 `../`
- 叶子 → **架构页是 `../../../architecture/<page>`**（三跳，不是两跳）
- 桶 `_index` → 同桶叶子 `./<Name>`；→ 父索引 `../`；→ 语言根 `../../`
- `api/_index` → 语言根 `../`
- `architecture` → api 叶子 `../../api/<bucket>/<Name>`
- 每个链接目标必须真实存在。目标尚未生成就用必定存在的目标（语言根/同桶已存在类页），并在回报里列「待校验链接」。

## 3. 深写页标准（判定为 `deep_pass`）

叶子类参考页必须同时满足（口径见 `tools/lib/handwritten-policy.mjs` 的 `classifyPage`）：

1. 文件名不含 `AutoGenerated`/`Newtonsoft`/`Steamworks`/`Platform.`（这类直接判 noise，别做深写）
2. 有 `**Type:** \`public class X ...\`` 形式的类型行
3. `## 心智模型`：纯文本 > 80 字，写「什么场景用 / 典型调用顺序 / 常见误用与坑」
4. `## 依赖关系`（或 `## 参见`）：**≥2 个**指向同仓真实页面的相对链接
5. `## 概述`：纯文本 > 60 字且不是「`X` 是 `TaleWorlds.Y` 下的公开类型」这类空话（或不写 `## 概述`，此时正文需 > 2000 字符）
6. 有真实 csharp 示例：≥3 行有效代码、含 `.Method(` 形式的真实调用、来自你读过的源码
7. 无禁用样板句：`SomeValue` / `null; // 替换` / `service = ...` / `从实际子系统 API` / `Get...Implementation` / `阅读时先通过属性了解状态` / `是 TaleWorlds.X 下的公开类型` / `调用 X 对应的操作`
8. **不要用 `**用途 / Purpose:**` 标签**（会命中公式化句式判定）；用 `## 关键成员` 表格，列 = `成员 | 签名 | 这个成员是做什么用的`

内容要求：**每个 public/protected 成员都要写清「它是做什么用的、什么时候调、返回值语义」**，签名必须来自 `bannerlord-1.4.6/` 真实源码。必须有风险/边界段（悬空引用、生命周期、线程亲和、平台差异、存档兼容、状态机顺序等，按类实际风险写）。成员极多的类可组织为「核心成员表 + 按语义分组补充」，但不得漏掉任何 public/protected 成员。

跨版本段：对照用 `node tools/class-version-diff.mjs <Class>`；本机 `bannerlord-1.4.5/` 只有 Native 产物、没有 C# 源码，该工具对 1.4.5 返回 not found —— 可改用 `bannerlord-1.3.15/` 源码比对，并如实写「1.4.5 未核实」，不要伪装成一致。

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
**Base:** 无
**File:** `TaleWorlds.SaveSystem/SaveManager.cs`

## 概述
## 心智模型
## 关键成员      （表格：成员 | 签名 | 作用）
## 真实示例      （≥3 行真实 csharp）
## 风险与边界
## 跨版本提示
## 依赖关系      （≥2 条真实链接 + 父级链接）
```

## 4. 验收

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_check_deep.mjs "content/v1.4.6/zh/api/<bucket>/<Type>.md"   # 深写页必须 deep_pass
ls content/v1.4.6 >/dev/null && AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.4.6 node tools/audit-links.mjs
```

⚠️ `AUDIT_MODE=url` 遇 `AUDIT_CONTENT_ROOT` 目录不存在会直接 ENOENT 崩掉而不打印数字 —— **别把崩溃读成「0 断链」**。

## 5. 回报

给出：产出文件数、stub/deep 计数、断链审计数字、逐页 `_check_deep` 结果、六道闸门数字、跳过的内容与原因、待校验链接清单、阻塞，以及**本 brief 与源码冲突之处**。不要夸大，门禁与审计由 lead 独立复跑。

## 6. 先读（复用现成资产，别重写）

- `AGENTS.md`、`content/v1.3.15/zh/api/save-system/SaveManager.md`（深写页风格标杆）
- `content/v1.4.5/zh/api/_index.md`（API 首页组织方式标杆）
- `content/v1.3.15/zh/architecture/sdk-overview.md`（架构页标杆）
- `tools/lib/handwritten-policy.mjs`、`tools/_check_deep.mjs`、`tools/audit-links.mjs`
- `tools/gen-catalog-stubs.mjs`、`tools/extract-class.mjs`、`tools/gen-class-ref.mjs`、`tools/generate-class-docs.mjs`、`tools/class-version-diff.mjs`（尽量参数化复用，不够用再写 `tools/_v146_*.mjs`）
- `tools/_evidence-cycle-20260822-AF.md`（证据包模板）