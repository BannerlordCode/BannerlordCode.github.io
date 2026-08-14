---
title: "DefaultEquipmentSelectionModel"
description: "DefaultEquipmentSelectionModel 的自动生成类参考。"
---
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEquipmentSelectionModel.cs`

## 概述

`DefaultEquipmentSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEquipmentSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentRostersForHeroComeOfAge
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroComeOfAge(Hero hero, bool isCivilian)`

**用途 / Purpose:** 读取并返回当前对象中 equipment rosters for hero come of age 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForHeroComeOfAge(hero, false);
```

### GetEquipmentRostersForHeroReachesTeenAge
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 equipment rosters for hero reaches teen age 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForHeroReachesTeenAge(hero);
```

### GetEquipmentRostersForInitialChildrenGeneration
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForInitialChildrenGeneration(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 equipment rosters for initial children generation 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForInitialChildrenGeneration(hero);
```

### GetEquipmentRostersForDeliveredOffspring
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForDeliveredOffspring(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 equipment rosters for delivered offspring 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForDeliveredOffspring(hero);
```

### GetEquipmentRostersForCompanion
`public override MBList<MBEquipmentRoster> GetEquipmentRostersForCompanion(Hero hero, bool isCivilian)`

**用途 / Purpose:** 读取并返回当前对象中 equipment rosters for companion 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentRostersForCompanion(hero, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel());
```

## 参见

- [本区域目录](../)