---
title: "EquipmentCategories"
description: "标记装备名册（MBEquipmentRoster）所属模板类别的 [Flags] 位枚举：女性、领主、儿童、青少年、王国统治者模板；由 DefaultEquipmentSelectionModel 在英雄成长与换装时按位组合，并拿去匹配名册的 EquipmentCategories 以筛选合适的装备集合。"
---

# EquipmentCategories

**命名空间：** TaleWorlds.Core
**模块：** TaleWorlds.Core
**类型：** [Flags] public enum EquipmentCategories : uint
**源文件：** Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/EquipmentCategories.cs

## 概述

`EquipmentCategories` 是一组以 `uint` 为底、带 `[Flags]` 特性的位枚举，用来给**装备名册（模板）**打上“适用于哪一类英雄”的标签。它只定义了六个取值：`None`(0)、`IsFemaleTemplate`(1)、`IsLordTemplate`(2)、`IsChildEquipmentTemplate`(4)、`IsTeenagerEquipmentTemplate`(8)、`IsKingdomRulerTemplate`(0x10)——每一位对应一种身份/年龄/性别维度的模板类别，多位可以按位或组合成复合类别（例如“女性领主 + 青少年”）。

这些标记并不存在于某个独立对象里，而是作为属性挂在 [MBEquipmentRoster](../MBEquipmentRoster) 上（`MBEquipmentRoster.EquipmentCategories`），在 XML 反序列化 `<Flags>` 节点时通过 `Enum.Parse` 写入。真正的消费者是 [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel) 及其默认实现 [DefaultEquipmentSelectionModel](../../campaign/DefaultEquipmentSelectionModel)：当英雄成年、进入青春期、出生、由伙伴转为领主或更换王国统治者时，模型按英雄的身份/年龄/性别组合出目标 `EquipmentCategories`，再遍历所有名册挑出 `EquipmentCategories` 完全匹配的那一份作为该英雄的装备模板。

## 心智模型

把 `EquipmentCategories` 当成一张**轻量的位掩码标签**，而不是一个数据对象或规则模型。它本身不持有状态、不参与存档序列化、也不是 `MBObjectBase` 派生类——它只是 `uint` 上的一组命名位。分类信息的真实载体是 [MBEquipmentRoster](../MBEquipmentRoster)：每个名册在加载时从 XML 的 `<Flags>` 节点解析出属于自己的 `EquipmentCategories`，之后这个值就固定了。调用方（[DefaultEquipmentSelectionModel](../../campaign/DefaultEquipmentSelectionModel)）要做的是“根据当前英雄算出想要的类别位组合”，再拿去和名册的类别做**精确相等**比较（`equipmentRoster.EquipmentCategories == customFlags`）。因此位组合必须严丝合缝：少一位、多一位都会匹配失败。和按位测试（`HasFlag` / `&`）不同，这里的语义是“整套模板标签必须一致”，而不是“包含某个标签即可”。需要按年龄/性别筛选模板时组合它；需要判断“某件物品属于哪类”时，应回到 [ItemObject](../../core/ItemObject) / [EquipmentElement](../EquipmentElement) 的层级，而不是把本枚举当成物品分类表来用。

## 何时使用 / 何时不要使用

- **使用**：在为英雄挑选或筛选装备模板时，用这些命名常量按位或组合出目标类别，再与 [MBEquipmentRoster](../MBEquipmentRoster) 的 `EquipmentCategories` 做匹配；或读取某个名册已标记的类别以判断它适用于哪类英雄（如调试、自定义选装逻辑）。
- **不要使用**：不要把 `EquipmentCategories` 当作可持久化的数据实体或物品分类体系——它不存任何世界状态、不含 `[SaveableField]`，真正的模板数据在 [MBEquipmentRoster](../MBEquipmentRoster) 上。不要手写未定义的数值（如 `0x20`）去扩展位，应只用枚举提供的五个命名常量，否则比较时难以察觉越界位。也不要用它去标注单个 [ItemObject](../../core/ItemObject) 的用途，物品分类另有自己的类别体系（见 `ItemCategory` / `ItemObject.ItemCategory`）。

## 依赖图

上游类型与系统：

- [ItemObject](../../core/ItemObject) —— 装备名册中每件物品都源自它；`EquipmentCategories` 是对“整组装备模板”的分类，而非对单件物品的标注。
- [EquipmentElement](../EquipmentElement) —— 装备槽位元素，被装配进 [Equipment](../Equipment) 模板；模板整体再归入某个 `EquipmentCategories`。
- [Equipment](../Equipment) —— 由多个 `EquipmentElement` 组成的具体装备集合，`GetSuitableEquipmentSet` 在匹配到正确类别后返回的就是它。
- [MBEquipmentRoster](../MBEquipmentRoster) —— 本枚举标记的实际载体，暴露 `EquipmentCategories` 属性，并在 `Deserialize` 中从 XML `<Flags>` 解析赋值。
- [BasicCultureObject](../BasicCultureObject) —— 名册按 `EquipmentCulture` 与文化匹配；`EquipmentCategories` 与 `EquipmentCulture` 联合决定一份模板归属于哪类英雄的哪支文化。

下游与协同系统：

- [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel) —— 抽象模型，定义如何为不同人生阶段的英雄选装；本枚举是它筛选维度的核心。
- [DefaultEquipmentSelectionModel](../../campaign/DefaultEquipmentSelectionModel) —— 用 `EquipmentCategories` 按位组合并匹配 `MBEquipmentRoster.EquipmentCategories`，为成年/青少年/儿童/伴侣转领主/更换统治者等场景选出装备（见 `IsRosterAppropriateForHeroAsTemplate`）。
- [NPCEquipmentsCampaignBehavior](../../campaign/NPCEquipmentsCampaignBehavior) —— 在 NPC 成长与换装时驱动选装模型，间接依赖本枚举做模板匹配。
- [MBEquipmentRosterExtensions](../../campaign/MBEquipmentRosterExtensions) —— 提供遍历所有名册的 `All` 集合，供选装逻辑逐一比对 `EquipmentCategories`。

## 风险

- **精确相等匹配的脆弱性**：`DefaultEquipmentSelectionModel` 用 `roster.EquipmentCategories == customFlags` 做全位匹配。若名册在 XML 里多写或少写了一个 `<Flags>` 位（例如同时带 `IsChildEquipmentTemplate` 与 `IsTeenagerEquipmentTemplate`），匹配会悄然失败，英雄可能拿不到任何装备模板而返回 `null`。自定义名册时要保证位组合与选装逻辑完全一致。
- **XML 属性名决定反序列化成败**：`MBEquipmentRoster.Deserialize` 通过 `Enum.Parse(typeof(EquipmentCategories), attribute.Name)` 读取 `<Flags>` 下的属性名；一旦属性名拼写或大小写不符（例如 `IsLordTemplate` 漏字母），`Enum.Parse` 会抛异常，或该位根本没被置上，导致模板分类静默缺失。
- **误当作持久化实体**：它只是 `uint` 上的 `[Flags]` 枚举，不是 `MBObjectBase`、没有 `StringId`、不含 `[SaveableField]`。不要把分类逻辑建立在它的“实例身份”或引用相等上，它应视作纯值/标记；真正的模板数据在 [MBEquipmentRoster](../MBEquipmentRoster) 上。
- **越界位不易察觉**：命名常量都是 2 的幂（1/2/4/8/0x10）。若手写未定义数值（如 `0x20`）参与组合，比较时不会报错但会引入无法识别的位，使匹配结果偏离预期；始终引用命名常量。
- **与英雄年龄段错配**：类别表达的是“模板适合的英雄阶段”（领主 / 儿童 / 青少年 / 统治者 / 女性）。若把青少年模板套给已成年领主、或反之，选出的装备会与英雄当前状态不符。组合位时必须与英雄当前年龄（参考 [AgeModel](../../campaign/AgeModel) 的成年/青少年阈值）同步。

## 成员说明

本类型是 `[Flags]` 枚举，下方按“标记维度”分组列出各取值及其在选装匹配中的真实作用。组合方式均为按位或（`|`）；读取方均为 [DefaultEquipmentSelectionModel](../../campaign/DefaultEquipmentSelectionModel) 的 `IsRosterAppropriateForHeroAsTemplate`。

### 基础与性别模板

- **`None`**（值 `0u`）
  - 含义：空标记，表示未携带任何类别位（默认名册在未解析到 `<Flags>` 时的状态）。
  - 设置/读取时机：仅在既无 `<Flags>` 节点也无任何位被置上时出现；选装模型几乎不会以 `None` 为目标去匹配（那样只会匹配到完全没有类别标签的名册）。

- **`IsFemaleTemplate`**（值 `1u`）
  - 含义：标记该名册是**女性英雄**专用装备模板。
  - 设置/读取时机：`GetSuitableEquipmentSet` 在确定英雄为女性（`hero.IsFemale`）时，把该位并入 `customFlags`（`customFlags |= EquipmentCategories.IsFemaleTemplate`），再与名册匹配；即同一领主/儿童模板会区分男女两份。
  - 组合方式：与 `IsLordTemplate` / `IsChildEquipmentTemplate` / `IsTeenagerEquipmentTemplate` 任意或运算叠加，代表“某身份的女性版本”。

### 身份与年龄阶段模板

- **`IsLordTemplate`**（值 `2u`）
  - 含义：标记该名册是**领主 / 贵族**英雄的装备模板，是最常作为基础位的类别。
  - 设置/读取时机：几乎所有英雄选装场景都先以 `IsLordTemplate` 起步——`GetEquipmentForHeroComeOfAge`、`GetEquipmentForCompanionWhenTurningToLord`、`GetEquipmentsForChangingRuler`（旧统治者）以及 `GetEquipmentForInitialChildrenGeneration` 都把它作为基线，再叠加年龄/女性位；更换王国统治者时新统治者则改用 `IsKingdomRulerTemplate`。
  - 组合方式：作为基座位，与 `IsTeenagerEquipmentTemplate` / `IsChildEquipmentTemplate` / `IsFemaleTemplate` 组合表示“某年龄段的领主”；与 `IsKingdomRulerTemplate` 互斥（统治者场景不并用它）。

- **`IsChildEquipmentTemplate`**（值 `4u`）
  - 含义：标记该名册适用于**儿童英雄**的装备模板。
  - 设置/读取时机：`GetEquipmentForDeliveredOffspring`（新生儿）与 `GetEquipmentForInitialChildrenGeneration`（年龄低于 `BecomeTeenagerAge` 时）会把该位并入 `customFlags`；与 `IsLordTemplate` 组合代表“儿童领主模板”。
  - 组合方式：与 `IsLordTemplate` / `IsFemaleTemplate` 按位或；与 `IsTeenagerEquipmentTemplate` 互斥（同一英雄在同一时刻只处于儿童或青少年阶段之一）。

- **`IsTeenagerEquipmentTemplate`**（值 `8u`）
  - 含义：标记该名册适用于**青少年英雄**的装备模板。
  - 设置/读取时机：`GetEquipmentForHeroReachesTeenAge` 与 `GetEquipmentForInitialChildrenGeneration`（年龄达到青少年阈值时）并入该位；匹配逻辑同儿童位，只是对应更年长的阶段。
  - 组合方式：与 `IsLordTemplate` / `IsFemaleTemplate` 按位或；与 `IsChildEquipmentTemplate` 互斥。

- **`IsKingdomRulerTemplate`**（值 `0x10`）
  - 含义：标记该名册是**王国统治者**专属的装备模板（区别于普通领主）。
  - 设置/读取时机：仅 `GetEquipmentsForChangingRuler` 在为新任统治者（`newRuler != Hero.MainHero`）选装时使用；旧统治者在卸任时回落到 `IsLordTemplate`。
  - 组合方式：通常单独作为 `customFlags` 传入（不再叠加 `IsLordTemplate`），代表最高身份档位的模板；性别位仍可能额外叠加。

## 示例

在自定义选装逻辑里，按英雄的身份与性别组合目标类别，再遍历所有名册挑出精确匹配的一份：

```csharp
// 为“女性领主且处于青少年阶段”的英雄组合目标模板类别
EquipmentCategories wanted = EquipmentCategories.IsLordTemplate
    | EquipmentCategories.IsTeenagerEquipmentTemplate;
if (hero.IsFemale)
{
    wanted |= EquipmentCategories.IsFemaleTemplate;
}
foreach (MBEquipmentRoster roster in MBEquipmentRosterExtensions.All)
{
    if (roster.EquipmentCulture == hero.Culture
        && roster.EquipmentCategories == wanted)
    {
        // roster 中的装备模板完全符合该英雄的身份/性别组合
    }
}
```

检查某个已加载名册是否携带特定类别位（例如确认它是领主模板但排除儿童模板）：

```csharp
foreach (MBEquipmentRoster roster in MBEquipmentRosterExtensions.All)
{
    if (roster.EquipmentCategories.HasFlag(EquipmentCategories.IsLordTemplate)
        && !roster.EquipmentCategories.HasFlag(EquipmentCategories.IsChildEquipmentTemplate))
    {
        // 这是一份“领主（非儿童）”装备模板
    }
}
```

## 参见

- ↑ 父级：[Core-extra API 索引](../)
- ↔ 相关：[MBEquipmentRoster](../MBEquipmentRoster) · [Equipment](../Equipment) · [EquipmentElement](../EquipmentElement) · [BasicCultureObject](../BasicCultureObject) · [ItemObject](../../core/ItemObject) · [EquipmentSelectionModel](../../campaign/EquipmentSelectionModel) · [DefaultEquipmentSelectionModel](../../campaign/DefaultEquipmentSelectionModel) · [NPCEquipmentsCampaignBehavior](../../campaign/NPCEquipmentsCampaignBehavior) · [MBEquipmentRosterExtensions](../../campaign/MBEquipmentRosterExtensions)
