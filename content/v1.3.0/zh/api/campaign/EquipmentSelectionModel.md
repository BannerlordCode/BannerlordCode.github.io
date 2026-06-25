---
title: "EquipmentSelectionModel"
description: "EquipmentSelectionModel 的自动生成类参考。"
---
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EquipmentSelectionModel.cs`

## 概述

`EquipmentSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EquipmentSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentRostersForHeroComeOfAge
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment rosters for hero come of age 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForHeroComeOfAge(hero, false);
```

### GetEquipmentRostersForHeroReachesTeenAge
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment rosters for hero reaches teen age 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForHeroReachesTeenAge(hero);
```

### GetEquipmentRostersForInitialChildrenGeneration
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment rosters for initial children generation 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForInitialChildrenGeneration(hero);
```

### GetEquipmentRostersForDeliveredOffspring
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment rosters for delivered offspring 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForDeliveredOffspring(hero);
```

### GetEquipmentRostersForCompanion
`public abstract MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero companionHero, bool isCivilian)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 equipment rosters for companion 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentRostersForCompanion(companionHero, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EquipmentSelectionModel instance = ...;
```

## 参见

- [本区域目录](../)