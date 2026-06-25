---
title: "ItemPickupModel"
description: "ItemPickupModel 的自动生成类参考。"
---
# ItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemPickupModel : MBGameModel<ItemPickupModel>`
**Base:** `MBGameModel<ItemPickupModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/ItemPickupModel.cs`

## 概述

`ItemPickupModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ItemPickupModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetItemScoreForAgent
`public abstract float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「item score for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 ItemPickupModel 实例
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.GetItemScoreForAgent(item, agent);
```

### IsItemAvailableForAgent
`public abstract bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**用途 / Purpose:** 判断当前对象是否处于 「item available for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ItemPickupModel 实例
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.IsItemAvailableForAgent(item, agent, slotToPickUp);
```

### IsAgentEquipmentSuitableForPickUpAvailability
`public abstract bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent equipment suitable for pick up availability」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ItemPickupModel 实例
ItemPickupModel itemPickupModel = ...;
var result = itemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability(agent);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ItemPickupModel instance = ...;
```

## 参见

- [本区域目录](../)