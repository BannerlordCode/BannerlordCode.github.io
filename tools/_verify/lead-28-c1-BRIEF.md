# lead-28 · v1.5.3/zh 批次 c1 共享派单规范（所有 worker 必读，逐字执行）

> 本文件由 Lead 手写，不是脚本产出。它规定**页面骨架、链接深度、禁令、自检命令**。
> 每页的具体事实（行号表、参见目标）在 `tools/_verify/lead-28-c1-facts-<你的任务名>.md` 里，与本文一起读。

---

## 0. 硬前提（违反即判废，不要试探）

1. **H0 手写**：页面正文必须由你**打开源码读完再写**。任何脚本、生成器、抽取器、模板填充器**不得**产出或写入 `content/**`。
   - 禁止用脚本「批量生成」页面；禁止把签名表直接转成正文。
   - `tools/_verify/sig-c1/*.sig.txt` 只是**行号锚点表**，不是正文来源。用途描述必须来自你读到的代码。
2. **leaf-only**：你**只写**下面明确列给你的 `content/v1.5.3/zh/api/<桶>/<Type>.md`。
   - **不得**创建/修改任何 `_index.md`。
   - **不得** `git add` / `git commit` / `git stash` / `git checkout`（索引与提交由 Lead 单写者执行）。
   - **不得**碰 `templates/**`、`data/**`、`content/v1.3.*`、`content/v1.4.*`、`tools/**`（只读）。
3. **源码只读**：`C:/WorkSpace/Bannerlord/bannerlord-1.5.3` 只读。事实只能来自该树下的 `.cs`。
4. **不改判据**：不得修改任何门禁脚本、阈值、白名单。

---

## 1. 页面骨架（逐字照抄结构，只替换 `<>` 里的内容）

```markdown
---
title: "<TypeName>"
description: "<30–80 字手写摘要：这个类型在游戏里做什么、被谁用。不得含任何模板句>"
---

# <TypeName>

**命名空间：** `<完整命名空间，例如 TaleWorlds.CampaignSystem.ComponentInterfaces>`
**Type:** `<从源码逐字抄的真实 C# 声明行，例如 public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>>`
**Source:** `<相对 bannerlord-1.5.3 的路径，例如 TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs>`

## 概述

<≥200 字。说清：这个类型在游戏里扮演什么角色、谁调用它、它和谁分工。>

## 心智模型

<≥300 字（判分器按去噪后 >80 字符判）。必须回答：什么时候该动它 / 典型调用或覆写顺序 / 常见误用与坑。>

## 怎么用

### 怎么拿到它

<怎么写代码拿到实例或访问到它。>

### 典型用法

<3–6 条，每条一个真实场景。>

### 最容易踩的坑

<3–6 条，每条必须是**你从源码里读到**的真实约束（默认值、边界、null、副作用、调用时机）。>

## 关键成员

- **<成员名>**（`<File>.cs:<N>`）— <这个成员做什么用、什么时候被调用、注意什么>
（…每个成员一行；N 只能取自本页 facts 文件给出的行号表；**只列签名不算**）

## 真实示例

```csharp
// ≥8 行真实可编译 C#；必须出现真实 API 调用 `.Method(`；类型名与签名逐个对过源码
```

## 参见

- ↔ [<目标页名>](<href>) — <为什么相关，一句话>
（≥3 条；href 只能取自本页 facts 文件给出的「已实测存在」清单）

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
```

### ★ 上面那段 `## 导航` 是**已实测**的（不要改动一个字符）

Lead 已用判分器在**同深度**的真实页 + 6 个夹具探针上实测：
`J5R unresolved=0 · J10 stray=0 · J11 trailSlash=0 · J12 inconsistent-text=0`。
（命令：`node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/core-extra/HeroHelper.md`）

### 链接深度规则（只有一个来源，就是上面那段导航 + facts 里的 href）

从 `content/v1.5.3/zh/api/<桶>/<Type>.md` 出发，页面 URL 是 `/v1.5.3/zh/api/<桶>/<Type>/`：

| 想去哪 | 写法 |
|---|---|
| **同桶**兄弟页 | `../<Type>` |
| **跨桶**别的页 | `../../<别的桶>/<Type>` |
| api 层入口 | `../../` |
| 版本首页 | `../../../` |
| 架构页 | `../../../architecture/module-map` |

**绝不要**直接链 `_index.md`；**绝不要**写 `](./`；**绝不要**给叶子目标加尾斜杠（写 `../X` 不写 `../X/`）。

---

## 2. 判分器禁令（机器会抓，命中即 FAIL）

- **J2 七节**：H2 必须**恰好**是 `概述` `心智模型` `怎么用` `关键成员` `真实示例` `参见` `导航`（不能改名、不能少、不能多一个 H2）。
- **J10**：markdown 链接**只允许**出现在 `## 参见` 与 `## 导航` 里。正文叙述里要用反引号 `` `X` ``，不要写 `[X](...)`。
- **J1**：全文 `U+FFFD`（�）必须为 0。
- **J7**：全文（含 frontmatter）不得出现 `的自动生成类参考` / `的自动生成战役动作参考` / `Auto-generated class reference` / `Auto-generated campaign action reference`。
- **J8**：frontmatter 之后的正文 > **2500 字节**。
- **J9**：```csharp 代码块有效行合计 ≥ 3。
- **J13**：`File.cs:N` 的行号**不能指向空行 / 纯注释行 / 纯标点行**。
  ★ 这份源码是反编译产物，声明行**上一行**经常是 `// Token: 0x…` —— **不要引用那种行**，要引用真正的声明行。
- **J6 `deep_pass`** 额外要求：心智模型去噪后 >80 字符、`## 参见` 里 ≥2 条 markdown 链接、概述去噪后 >60 字符、真实 C# 示例、正文无以下模板句。

### 被机器判为「模板」的禁用句式（一条都不要出现）

```
阅读时先通过属性了解状态
先从命名空间
入口或数据节点
…型扩展点来理解
把 X 当作一个 … 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它
X 是 TaleWorlds.Y 下的公开类型 / X 是 TaleWorlds.Y 中的公开类型
null; // 替换
SomeValue
service = ...
service = null
从实际子系统 API … 获取 … 实例
```

### 「关键成员」的用途行也禁用公式句

```
处理 X 相关逻辑。
获取 X 的当前值。
设置 X 的值 / 状态 / 数据。
重新计算并更新 X 的最新表示。
为 X 赋新值，并同步更新对象内部状态。
返回当前对象中 X 的结果 / 值。
```

---

## 3. 完工前你必须自己跑（不跑就报「完成」= 未完成）

### ★★ 判据分两层 —— J5R 是【批次级】判据，不是单页判据（D-10，Lead 实测后被 boss-4 #20575 修正）

**你的单页判据（必须全绿）**：

```
J1 fffd=0 · J2 missing=[] · J3 bad=0 · J6=deep_pass · J8 body>2500B · J9 csharp>=3
J10 stray=0 · J11 trailSlash=0 · J12 inconsistent-text=0 · J13 suspicious-lines=0
tier=handwritten_deep
```

**J5R 的正确用法**：你写完**第 1 页**时，如果它链向的第 2 页还没落盘，单页跑必然报
`✗ J5R unresolved-links=1 [../<兄弟页>]` —— **这是预期的，不要改链接、不要删链接**。
两页都落盘后**一次对两页跑**，此时两页互链目标都已存在 ⇒ `J5R unresolved=0`。

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/<桶>/<页1>.md content/v1.5.3/zh/api/<桶>/<页2>.md
```

**验收线（三条必须同时成立）**：

```
两行都 PASS
J6=deep_pass · deepPass=true · tier=handwritten_deep
J3 bad=0 · J5R unresolved=0（两页同跑时）· J10 stray=0 · J1 fffd=0 · J8 >2500B
```

**顺序（硬性）**：先落盘第 1 页 → 立刻落盘第 2 页 → 一次对两页跑判分器 → 按非-J5R 的 FAIL 打磨 → 回贴原始输出。
**不要**把「继续读源码 / 读判分器源码」当成交付。

**若 FAIL，按判分器逐条改，改完重跑，直到 PASS。** 不要靠猜；判分器会告诉你缺哪一节、哪个链接解析不了、哪一行可疑。
**若你判断某条 FAIL 是判分器/事实本身的问题（而不是你的页面的问题），停下来报 Lead，不要自己改判据或编造行号。**

回报 Lead 时**回贴判分器的原始输出行**（PASS 那一行 + `J3 …` 那一行 + `J6 …` 那一行），不要只说「通过了」。

---

## 4. 诚实纪律

- 行号**只能**用 facts 文件里给出的那些；如果你在源码里发现 facts 表有错，**报给 Lead**，不要自己编。
- 任何你**没能**在源码里确认的事，写进回报的「未确认」一节，不要写进页面。
- 不要为了变绿而删掉真实内容；不要写「未验证」的 API 名。
