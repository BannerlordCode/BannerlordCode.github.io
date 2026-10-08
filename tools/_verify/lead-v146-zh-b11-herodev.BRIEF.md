# brief · b11-herodev（v1.4.6/zh 手写深页写作线）

- 批次：批 11
- 页面：`content/v1.4.6/zh/api/campaign/HeroDeveloper.md`
- 源文件：`TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`（574 行）
- 锚表：`tools/_verify/_tmp/anchors/b11-herodev.txt`（54 个锚点，派单前生成）
- dup 检查：→ **1**（规避 `ambiguous` 门禁洞）

## ★ 本 brief 的设计原则（boss #22975 的受控实验结论）

| 类别 | 例 | 九条判据能否检出 | 放哪 |
|---|---|---|---|
| **格式类** | 裸 `:N` · 链接写在正文 · 引用指向空行 · 正文 <2500B · 示例无 `.Method(` | ✅ **可检出** | **已从本 brief 移除，交给 R2** |
| **内容类** | 编造名字 · 未核验 API · 未测量断言 | ❌ **抓不到** | **保留在下面** |

⇒ 本 brief 只写**内容类规则** + 逐字骨架 + 锚表路径 + 磁盘后果。格式类由 R2 统一兜底。

---

## 题头三行（命令实测值，非断言）

```
**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public class HeroDeveloper`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`
```

实测输出：`12:	public class HeroDeveloper`（`wc -l = 574, anchors = 54`）

## 骨架（H2 名字逐字一致）

```
---
title: "HeroDeveloper"
description: "<1–2 句中文：这个类型在游戏里扮演什么角色>"
---
# HeroDeveloper

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public class HeroDeveloper`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述
## 心智模型
## 怎么用
（含 `### 怎么拿到` / `### 典型用法` / `### 坑`）
## 关键成员
## 真实示例
## 参见
## 导航
```

## 内容规则（**只有这些是硬规则**）

1. **行号只能取自锚表**：`tools/_verify/_tmp/anchors/b11-herodev.txt`（54 个锚点，只有这一段）。表外行号一律不写；锚表里没有的成员 ⇒ 那一行不写。54 个不必全用。
2. **不写未经测量的断言**。包括两类：
   - **名字**（类型 / 方法 / 成员）：只能来自锚表或源码实测；
   - **能力 / 行为描述**（「它负责 X」「它会 Y」）：**必须实测才能写**；写不了就改成指令式描述（「写清它定义了哪几类入口」而不是「它有 A/B/C 入口」）。
3. **若源码与本 brief 冲突，以源码为准**，并在回报里指出冲突点。
4. **「关键成员」表四列**：`| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义（重要）**：**该段内出现的任何表格都会计入 `members`**（实测：25 行主表 + 10 行辅助表 ⇒ `members=35`）。所以你若在该段加辅助表，**也要给它配引用**，否则 `checked ≥ members` 会失败。

## 内容提示（**指令式**，不断言）

> 读源码后自己确定写哪些成员。请写清三件事：
> 1. 它挂在**谁**身上、代表角色的哪一类状态（源码里找归属关系，不要推断）。
> 2. **技能与特性的成长路径**分别怎么走、有哪些「未分配点数」类的可写状态，以及**修改它们的正确入口**（哪些是直接写、哪些必须走方法）。
> 3. **坑**：直接写状态而不走入口会漏掉什么（事件派发 / 缓存失效 / 与其他系统的同步）。

## 链接解析基准（**事实类，Lead 已测量 —— 不可推导，必须告知**）

叶子页的 route **就是它自己的目录**（`…/api/<桶>/<页面名>/`）⇒ 相对链接从这个目录出发：

| 目标 | 写法 | 例 |
| --- | --- | --- |
| **同桶**兄弟页 | `../X` | `../Hero` |
| **父索引** | `../_index` | `../_index` |
| **跨桶**（另一个 `api/<桶>/`） | `../../<桶>/<X>` | `../../core-extra/Game` |

**最容易错的是跨桶**：写成一个 `../` 会解析到 `api/<当前桶>/<别的桶>/X` —— **那里不存在**（已发生实例：`](../Campaign)` 解析到不存在的 `campaign-ext/Campaign.md`）。
叶子目标**不带尾斜杠**。

## 链接白名单（已逐条实测存在）

`../Hero` `../Clan` `../Kingdom` `../MobileParty` `../PartyBase` `../Settlement` `../Campaign` `../CharacterObject` `../CampaignEvents` `../CampaignBehaviorBase` `../CampaignObjectManager` `../ExplainedNumber` `../CampaignTime` `../_index` `../../campaign-ext/MBObjectBase` `../../campaign-ext/MBObjectManager` `../../core-extra/Game` `../../core-extra/SkillObject`

## 硬约束（磁盘可判定的后果）

> **本轮结束时若 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.4.6/zh/api/campaign/HeroDeveloper.md` 不存在，则本轮视为未完成 —— 直接回报「未完成」并说明卡点。**

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
