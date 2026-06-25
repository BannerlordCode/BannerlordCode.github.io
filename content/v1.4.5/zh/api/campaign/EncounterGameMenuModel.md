---
title: "EncounterGameMenuModel"
description: "EncounterGameMenuModel 的自动生成类参考。"
---
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`
**Base:** `MBGameModel<EncounterGameMenuModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EncounterGameMenuModel.cs`

## 概述

`EncounterGameMenuModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EncounterGameMenuModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEncounterMenu
`public abstract string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 encounter menu 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuModel 实例
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetEncounterMenu(attackerParty, defenderParty, startBattle, joinBattle);
```

### GetRaidCompleteMenu
`public abstract string GetRaidCompleteMenu()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 raid complete menu 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuModel 实例
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetRaidCompleteMenu();
```

### GetNewPartyJoinMenu
`public abstract string GetNewPartyJoinMenu(MobileParty newParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 new party join menu 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuModel 实例
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetNewPartyJoinMenu(newParty);
```

### GetGenericStateMenu
`public abstract string GetGenericStateMenu()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 generic state menu 的结果。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuModel 实例
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.GetGenericStateMenu();
```

### IsPlunderMenu
`public abstract bool IsPlunderMenu(string menuId)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 plunder menu 状态或条件。

```csharp
// 先通过子系统 API 拿到 EncounterGameMenuModel 实例
EncounterGameMenuModel encounterGameMenuModel = ...;
var result = encounterGameMenuModel.IsPlunderMenu("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EncounterGameMenuModel instance = ...;
```

## 参见

- [本区域目录](../)