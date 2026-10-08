# brief · b11-typedef（v1.4.6/zh 手写深页写作线）

- 批次：批 11
- 页面：`content/v1.4.6/zh/api/save-system/TypeDefinition.md`
- 源文件：`TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`（330 行）
- 锚表：`tools/_verify/_tmp/anchors/b11-typedef.txt`（19 个锚点，派单前生成）
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
**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Source:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`
```

实测输出：`12:	public class TypeDefinition : TypeDefinitionBase`（`wc -l = 330, anchors = 19`）

## 骨架（H2 名字逐字一致）

```
---
title: "TypeDefinition"
description: "<1–2 句中文：这个类型在游戏里扮演什么角色>"
---
# TypeDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Source:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`

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

1. **行号只能取自锚表**：`tools/_verify/_tmp/anchors/b11-typedef.txt`（19 个锚点，只有这一段）。表外行号一律不写；锚表里没有的成员 ⇒ 那一行不写。19 个不必全用。
2. **不写未经测量的断言**。包括两类：
   - **名字**（类型 / 方法 / 成员）：只能来自锚表或源码实测；
   - **能力 / 行为描述**（「它负责 X」「它会 Y」）：**必须实测才能写**；写不了就改成指令式描述。
3. **若源码与本 brief 冲突，以源码为准**，并在回报里指出冲突点。
4. **「关键成员」表四列**：`| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义（重要）**：**该段内出现的任何表格都会计入 `members`**。所以若在该段加辅助表，**也要给它配引用**，否则 `checked ≥ members` 会失败。

## 内容提示（**指令式**，不断言）

> 读源码后自己确定写哪些成员。这一页是存档系统里「**表里的一行**」——请写清三件事：
> 1. 它在整张类型定义表里代表什么、与**基类**相比多出了什么（题头已给出基类名，请据此说明分工）。
> 2. **一个类型要能被存档系统认识，需要在这张表里具备哪些信息**（成员列表、编号、容器/结构体/枚举的分支差异等）——请按源码实际字段写。
> 3. **坑**：哪些信息是「写错了不会立刻报错、但读档时才炸」的（例如编号冲突、成员缺失）；以及 mod 作者通常**不需要**直接碰它，而应该走哪条**上层路径**（链接白名单里有对应的上层类型页，可互链）。

## 链接白名单（已逐条实测存在）

`../SaveManager` `../ISaveDriver` `../SaveContext` `../SaveableTypeDefiner` `../SaveableFieldAttribute` `../SaveablePropertyAttribute` `../ISavedStruct` `../SaveableBasicTypeDefiner` `../DefinitionContext` `../LoadContext` `../SaveableRootClassAttribute` `../SaveableInterfaceAttribute` `../_index` `../../campaign/CampaignBehaviorBase` `../../campaign/IDataStore` `../../campaign/Campaign` `../../core-extra/Game` `../../campaign-ext/MBObjectBase`

## 硬约束（磁盘可判定的后果）

> **本轮结束时若 `C:/WorkSpace/Bannerlord/BannerlordCode.github.io/content/v1.4.6/zh/api/save-system/TypeDefinition.md` 不存在，则本轮视为未完成 —— 直接回报「未完成」并说明卡点。**

## 边界

- leaf-only：不动任何 `_index.md`；不 `git add`/`git commit`；不改 `tools/**`
- **第一个动作必须是创建文件**
