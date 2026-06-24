<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryCapacityModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**Base:** `MBGameModel<InventoryCapacityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`

## 概述

`InventoryCapacityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `InventoryCapacityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateInventoryCapacity
`public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**用途 / Purpose:** 处理 `calculate inventory capacity` 相关逻辑。

### GetItemAverageWeight
`public abstract int GetItemAverageWeight()`

**用途 / Purpose:** 获取 `item average weight` 的当前值。

### GetItemEffectiveWeight
`public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, out TextObject description)`

**用途 / Purpose:** 获取 `item effective weight` 的当前值。

### CalculateTotalWeightCarried
`public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate total weight carried` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomInventoryCapacityModel();
```

## 参见

- [完整类目录](../catalog)