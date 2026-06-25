---
title: "EquipmentSelectionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EquipmentSelectionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EquipmentSelectionModel : MBGameModel<EquipmentSelectionModel>`
**Base:** `MBGameModel<EquipmentSelectionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EquipmentSelectionModel.cs`

## 概述

`EquipmentSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `EquipmentSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEquipmentForHeroComeOfAge
`public abstract Equipment GetEquipmentForHeroComeOfAge(Hero hero, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** 获取 `equipment for hero come of age` 的当前值。

### GetEquipmentForHeroReachesTeenAge
`public abstract Equipment GetEquipmentForHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** 获取 `equipment for hero reaches teen age` 的当前值。

### GetEquipmentForInitialChildrenGeneration
`public abstract Equipment GetEquipmentForInitialChildrenGeneration(Hero hero)`

**用途 / Purpose:** 获取 `equipment for initial children generation` 的当前值。

### GetEquipmentForDeliveredOffspring
`public abstract Equipment GetEquipmentForDeliveredOffspring(Hero hero)`

**用途 / Purpose:** 获取 `equipment for delivered offspring` 的当前值。

### GetEquipmentForCompanionWhenTurningToLord
`public abstract Equipment GetEquipmentForCompanionWhenTurningToLord(Hero companionHero, Equipment.EquipmentType equipmentType)`

**用途 / Purpose:** 获取 `equipment for companion when turning to lord` 的当前值。

## 使用示例

```csharp
var implementation = new CustomEquipmentSelectionModel();
```

## 参见

- [完整类目录](../catalog)