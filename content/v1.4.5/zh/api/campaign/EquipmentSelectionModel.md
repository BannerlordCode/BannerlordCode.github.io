---
title: "EquipmentSelectionModel"
description: "EquipmentSelectionModel 的自动生成类参考。"
---
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EquipmentSelectionModel.cs`

## 概述

`EquipmentSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EquipmentSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentForHeroComeOfAge
`public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for hero come of age」 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForHeroComeOfAge(hero, equipmentType);
```

### GetEquipmentForHeroReachesTeenAge
`public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for hero reaches teen age」 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForHeroReachesTeenAge(hero);
```

### GetEquipmentForInitialChildrenGeneration
`public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for initial children generation」 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForInitialChildrenGeneration(hero);
```

### GetEquipmentForDeliveredOffspring
`public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for delivered offspring」 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForDeliveredOffspring(hero);
```

### GetEquipmentForCompanionWhenTurningToLord
`public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** 读取并返回当前对象中 「equipment for companion when turning to lord」 的结果。

```csharp
// 先通过子系统 API 拿到 EquipmentSelectionModel 实例
EquipmentSelectionModel equipmentSelectionModel = ...;
var result = equipmentSelectionModel.GetEquipmentForCompanionWhenTurningToLord(companionHero, equipmentType);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
EquipmentSelectionModel instance = ...;
```

## 参见

- [本区域目录](../)