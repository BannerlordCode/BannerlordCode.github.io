---
title: "DefaultItemPickupModel"
description: "DefaultItemPickupModel 的自动生成类参考。"
---
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## 概述

`DefaultItemPickupModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultItemPickupModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetItemScoreForAgent
`public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「item score for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultItemPickupModel 实例
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.GetItemScoreForAgent(item, agent);
```

### IsItemAvailableForAgent
`public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**用途 / Purpose:** 判断当前对象是否处于 「item available for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultItemPickupModel 实例
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.IsItemAvailableForAgent(item, agent, slotToPickUp);
```

### IsAgentEquipmentSuitableForPickUpAvailability
`public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent equipment suitable for pick up availability」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultItemPickupModel 实例
DefaultItemPickupModel defaultItemPickupModel = ...;
var result = defaultItemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability(agent);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## 参见

- [本区域目录](../)