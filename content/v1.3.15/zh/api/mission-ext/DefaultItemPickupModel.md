---
title: "DefaultItemPickupModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultItemPickupModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultItemPickupModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultItemPickupModel : ItemPickupModel`
**Base:** `ItemPickupModel`
**File:** `TaleWorlds.MountAndBlade/DefaultItemPickupModel.cs`

## 概述

`DefaultItemPickupModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultItemPickupModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetItemScoreForAgent
`public override float GetItemScoreForAgent(SpawnedItemEntity item, Agent agent)`

**用途 / Purpose:** 获取 `item score for agent` 的当前值。

### IsItemAvailableForAgent
`public override bool IsItemAvailableForAgent(SpawnedItemEntity item, Agent agent, EquipmentIndex slotToPickUp)`

**用途 / Purpose:** 处理 `is item available for agent` 相关逻辑。

### IsAgentEquipmentSuitableForPickUpAvailability
`public override bool IsAgentEquipmentSuitableForPickUpAvailability(Agent agent)`

**用途 / Purpose:** 处理 `is agent equipment suitable for pick up availability` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultItemPickupModel>(new MyDefaultItemPickupModel());
```

## 参见

- [完整类目录](../catalog)