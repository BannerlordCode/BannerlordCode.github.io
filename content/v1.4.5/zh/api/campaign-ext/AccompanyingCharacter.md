---
title: "AccompanyingCharacter"
description: "任务中跟随玩家的伴随角色：封装 LocationCharacter 并管理其可进入的位置列表。提供 CanEnterLocation、AllowEntranceToLocations、DisallowEntranceToLocations 等方法控制角色在任务场景中的移动范围。"
---
# AccompanyingCharacter

**命名空间：** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class AccompanyingCharacter`  
**源文件：** `TaleWorlds.CampaignSystem/Settlements/Locations/AccompanyingCharacter.cs`

## 概述

`AccompanyingCharacter` 是任务（Mission）子系统中用于管理**跟随玩家的伴随角色**的类。它封装了一个 `LocationCharacter`（位置角色），并维护一个「禁止进入的位置列表」（`_disallowedLocations`），用于控制该角色在任务场景中可以进入哪些位置。

该类在任务初始化时创建，通常由 `Mission` 或 `LocationComplex` 内部逻辑自动构造，mod 开发者一般**不需要手动创建**实例。它的核心作用是：当任务场景中有多个位置（如城堡的大厅、地牢、庭院等）时，通过 `AllowEntranceToLocations` / `DisallowEntranceToLocations` 方法动态控制伴随角色可以访问的位置范围，从而实现「这个角色只能待在庭院，不能进入大厅」这样的设计。

`IsFollowingPlayerAtMissionStart` 属性（`AccompanyingCharacter.cs:15`）记录该角色在任务开始时是否跟随玩家，这个值会影响任务结束后的行为（如角色是否返回原位置）。

## 心智模型

把这个类想成**任务场景中一个 NPC 的「门禁卡」**：

1. **它代表谁**——`LocationCharacter` 字段（`AccompanyingCharacter.cs:9`）指向一个具体的位置角色（如城堡守卫、领主、商人），这是它在任务场景中的「身份」。
2. **它不能去哪**——`_disallowedLocations` 列表（`AccompanyingCharacter.cs:12`）记录了该角色被禁止进入的位置。这个列表在构造时为空（所有位置都允许），mod 可以通过 `DisallowEntranceToLocations` 方法逐步添加禁止项。
3. **它怎么被控制**——`AllowEntranceToLocations` 和 `DisallowEntranceToLocations` 方法接受一个 `Func<Location, bool>` 谓词，对当前 `LocationComplex` 中的所有位置进行筛选，批量添加或移除禁止项。这是一种**声明式**的控制方式：mod 不需要逐个位置操作，而是提供一个条件，让引擎自动匹配。
4. **它怎么被查询**——`CanEnterLocation` 方法检查某个位置是否在禁止列表中，返回 `true` 表示可以进入。任务系统会在角色尝试移动时调用此方法。

`AllowEntranceToAllLocations` 和 `DisallowEntranceToAllLocations` 是两个便捷方法，分别清空禁止列表和将当前所有位置加入禁止列表，用于「全部允许」或「全部禁止」的极端情况。

## 怎么用

### 怎么拿到

- **源树路径：** `TaleWorlds.CampaignSystem/Settlements/Locations/AccompanyingCharacter.cs`（共 81 行）
- **声明处：** `AccompanyingCharacter.cs:7`（类声明）、`:37`（构造函数）
- **运行时入口：** 不要自己 `new`。实例由任务系统在任务初始化时创建，mod 通过 `LocationComplex.Current.GetListOfLocations()` 遍历位置，或通过任务对象获取伴随角色列表：

```csharp
foreach (Location location in LocationComplex.Current.GetListOfLocations())
{
    foreach (LocationCharacter character in location.GetLocationCharacters())
    {
        // 通过任务上下文获取 AccompanyingCharacter 包装
    }
}
```

### 典型用法

- **限制角色活动范围：** 调用 `DisallowEntranceToLocations(loc => loc.LocationType == LocationType.Dungeon)` 禁止角色进入地牢。
- **允许角色进入特定区域：** 调用 `AllowEntranceToLocations(loc => loc.LocationType == LocationType.Courtyard)` 允许角色进入庭院。
- **检查角色能否进入某位置：** 调用 `CanEnterLocation(targetLocation)` 返回 `true` 表示可以进入。
- **重置角色权限：** 调用 `AllowEntranceToAllLocations()` 清空所有禁止项，或 `DisallowEntranceToAllLocations()` 禁止所有位置。

### 坑

- **构造函数需要 `LocationCharacter` 和 `bool` 两个参数。** 不要手动构造，实例由任务系统创建。
- **`_disallowedLocations` 是 `private` 字段，无法直接访问。** 必须通过 `CanEnterLocation` 方法查询，或通过 `AllowEntranceToLocations` / `DisallowEntranceToLocations` 方法间接修改。
- **`AllowEntranceToLocations` 和 `DisallowEntranceToLocations` 只影响 `LocationComplex.Current` 中的位置。** 如果任务场景切换，需要重新调用这些方法。
- **`DisallowEntranceToAllLocations` 会先调用 `AllowEntranceToAllLocations` 清空列表，再将所有位置加入禁止列表。** 这意味着它会覆盖之前的任何允许设置。

## 关键成员

### LocationCharacter

`public LocationCharacter LocationCharacter`（`AccompanyingCharacter.cs:9`）

此伴随角色封装的位置角色。它代表了任务场景中的一个具体 NPC（如守卫、领主、商人），包含了该角色的外观、对话、任务逻辑等信息。mod 可以通过此字段访问角色的属性和行为。

### IsFollowingPlayerAtMissionStart

`public bool IsFollowingPlayerAtMissionStart { get; private set; }`（`AccompanyingCharacter.cs:15`）

记录该角色在任务开始时是否跟随玩家。这个值在构造函数（`:41`）中设置，之后不可修改。它影响任务结束后的行为：如果为 `true`，角色会在任务结束后返回玩家身边；如果为 `false`，角色会留在任务场景中。

### 构造函数

`public AccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowingPlayerAtMissionStart)`（`AccompanyingCharacter.cs:37`）

创建伴随角色实例，初始化禁止位置列表为空（所有位置都允许），并存储 `LocationCharacter` 引用和跟随状态。**mod 不应手动调用**——由任务系统在任务初始化时创建。

### CanEnterLocation

`public bool CanEnterLocation(Location location)`（`AccompanyingCharacter.cs:44`）

检查指定位置是否在禁止列表中。返回 `true` 表示角色可以进入该位置，`false` 表示禁止进入。任务系统会在角色尝试移动时调用此方法。

### AllowEntranceToLocations

`public void AllowEntranceToLocations(Func<Location, bool> predicate)`（`AccompanyingCharacter.cs:49`）

允许角色进入满足谓词条件的所有位置。遍历 `LocationComplex.Current.GetListOfLocations()`，对每个位置调用 `predicate`，如果返回 `true` 且该位置在禁止列表中，则将其从禁止列表中移除。这是一种**批量允许**的操作。

### DisallowEntranceToLocations

`public void DisallowEntranceToLocations(Func<Location, bool> predicate)`（`AccompanyingCharacter.cs:60`）

禁止角色进入满足谓词条件的所有位置。遍历 `LocationComplex.Current.GetListOfLocations()`，对每个位置调用 `predicate`，如果返回 `true` 且该位置不在禁止列表中，则将其添加到禁止列表中。这是一种**批量禁止**的操作。

### AllowEntranceToAllLocations

`public void AllowEntranceToAllLocations()`（`AccompanyingCharacter.cs:71`）

清空禁止列表，允许角色进入所有位置。这是一个便捷方法，相当于 `DisallowEntranceToLocations(loc => false)`。

### DisallowEntranceToAllLocations

`public void DisallowEntranceToAllLocations()`（`AccompanyingCharacter.cs:76`）

禁止角色进入所有位置。先调用 `AllowEntranceToAllLocations()` 清空列表，然后将 `LocationComplex.Current.GetListOfLocations()` 中的所有位置添加到禁止列表。这是一个便捷方法，相当于 `AllowEntranceToLocations(loc => true)` 后跟 `DisallowEntranceToLocations(loc => true)`。

## 真实示例

以下示例展示 mod 如何在任务中控制伴随角色的活动范围，限制角色只能进入庭院和大厅，禁止进入地牢：

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Locations;

public static class AccompanyingCharacterHelper
{
    public static void RestrictToCourtyardAndHall(AccompanyingCharacter character)
    {
        // 先禁止所有位置
        character.DisallowEntranceToAllLocations();

        // 只允许庭院和大厅
        character.AllowEntranceToLocations(loc =>
            loc.LocationType == LocationType.Courtyard ||
            loc.LocationType == LocationType.Hall);
    }

    public static bool CanEnterDungeon(AccompanyingCharacter character)
    {
        foreach (Location loc in LocationComplex.Current.GetListOfLocations())
        {
            if (loc.LocationType == LocationType.Dungeon)
            {
                return character.CanEnterLocation(loc);
            }
        }
        return false;
    }
}
```

mod 也可以在任务开始时检查角色的跟随状态，并根据状态决定后续逻辑：

```csharp
public void OnMissionStart(AccompanyingCharacter character)
{
    if (character.IsFollowingPlayerAtMissionStart)
    {
        // 角色跟随玩家，限制其活动范围
        character.DisallowEntranceToLocations(loc => loc.LocationType == LocationType.Dungeon);
    }
    else
    {
        // 角色不跟随玩家，允许其自由活动
        character.AllowEntranceToAllLocations();
    }
}
```

## 参见

- [LocationCharacter](../LocationCharacter) — 此伴随角色封装的位置角色类型
- [Location](../Location) — 位置类型，代表任务场景中的一个可进入区域
- [LocationComplex](../LocationComplex) — 位置复合体，管理当前位置场景中的所有位置

## 导航

- [本区域目录](../)
- **父级：** [campaign-ext API](../)
- **同级：** [LocationCharacter](../LocationCharacter) · [Location](../Location) · [LocationComplex](../LocationComplex)
- **相关：** [SettlementAccessModel](../SettlementAccessModel)
