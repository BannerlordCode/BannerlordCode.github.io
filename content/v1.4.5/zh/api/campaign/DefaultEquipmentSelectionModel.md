---
title: "DefaultEquipmentSelectionModel"
description: "DefaultEquipmentSelectionModel 的自动生成类参考。"
---
# DefaultEquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEquipmentSelectionModel : EquipmentSelectionModel`
**Base:** `EquipmentSelectionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEquipmentSelectionModel.cs`

## 概述

`DefaultEquipmentSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEquipmentSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentForHeroComeOfAge
`public override Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for hero come of age」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForHeroComeOfAge(hero, equipmentType);
```

### GetEquipmentForHeroReachesTeenAge
`public override Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for hero reaches teen age」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForHeroReachesTeenAge(hero);
```

### GetEquipmentForDeliveredOffspring
`public override Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for delivered offspring」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForDeliveredOffspring(hero);
```

### GetEquipmentForCompanionWhenTurningToLord
`public override Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for companion when turning to lord」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForCompanionWhenTurningToLord(companionHero, equipmentType);
```

### GetEquipmentForInitialChildrenGeneration
`public override Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for initial children generation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultEquipmentSelectionModel 实例
DefaultEquipmentSelectionModel defaultEquipmentSelectionModel = ...;
var result = defaultEquipmentSelectionModel.GetEquipmentForInitialChildrenGeneration(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEquipmentSelectionModel>(new MyDefaultEquipmentSelectionModel());
```

## 参见

- [本区域目录](../)