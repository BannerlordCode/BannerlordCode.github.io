# brief · b11-typedef

页面：`content/v1.4.6/zh/api/save-system/TypeDefinition.md`（新建）
源文件：`TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`（330 行）
锚表：`tools/_verify/_tmp/anchors/b11-typedef.txt`（19 锚点，只有这一段）

```
**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Type:** `public class TypeDefinition : TypeDefinitionBase`
**Source:** `TaleWorlds.SaveSystem/Definition/TypeDefinition.cs`
```

骨架（H2 逐字）：
```
---
title: "TypeDefinition"
description: "<1–2 句中文>"
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

**内容规则（硬）**
1. 行号**只能**取自锚表；表外不写；锚表没有的成员 ⇒ 不写那一行。19 个不必全用。
2. **不写未经测量的断言** —— 名字（类型/方法/成员）只能来自锚表或源码实测；能力描述（「它负责 X」）必须实测才能写，否则改成指令式。
3. 源码与 brief 冲突 ⇒ **以源码为准**并在回报里指出。
4. 「关键成员」表四列 `| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义**：`## 关键成员` 段内**任何表格**都计入 `members`；加辅助表也要配引用。

**链接解析基准（不可推导，必须照此写）**
叶子页 route = 它自己的目录 `…/api/<桶>/<页名>/`：
| 目标 | 写法 |
| --- | --- |
| 同桶兄弟页 | `../X` |
| 父索引 | `../_index` |
| **跨桶** | `../../<桶>/<X>` |
叶子目标不带尾斜杠。**跨桶写一个 `../` 会解析到不存在的路径**（已发生实例）。

**链接白名单（已逐条实测存在，只用这些）**
`../SaveManager` `../ISaveDriver` `../SaveContext` `../SaveableTypeDefiner` `../SaveableFieldAttribute` `../SaveablePropertyAttribute` `../ISavedStruct` `../SaveableBasicTypeDefiner` `../DefinitionContext` `../LoadContext` `../SaveableRootClassAttribute` `../SaveableInterfaceAttribute` `../_index` `../../campaign/CampaignBehaviorBase` `../../campaign/IDataStore` `../../campaign/Campaign` `../../core-extra/Game` `../../campaign-ext/MBObjectBase`

**内容提示（指令式）**：读源码后自己定成员。这页是存档系统里「**表里的一行**」，写清 ① 它在整张类型定义表里代表什么、与**基类**相比多出什么（题头已给基类名）；② 一个类型要能被存档系统认识需要在这张表里具备哪些信息（成员列表 / 编号 / 容器·结构体·枚举的分支差异），按源码实际字段写；③ 坑：哪些信息写错了不会立刻报错、但读档时才炸；以及 mod 作者通常不需要直接碰它，该走哪条上层路径（白名单里有对应上层类型页可互链）。

**硬约束**：本轮结束时若 `content/v1.4.6/zh/api/save-system/TypeDefinition.md` 不存在 ⇒ 本轮视为未完成，直接回报「未完成 + 卡点」。
**边界**：第一个动作必须是创建文件；不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。
