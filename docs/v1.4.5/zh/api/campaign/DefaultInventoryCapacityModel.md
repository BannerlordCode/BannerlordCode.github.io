<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultInventoryCapacityModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultInventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**Base:** `InventoryCapacityModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultInventoryCapacityModel.cs`

## 概述

`DefaultInventoryCapacityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultInventoryCapacityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetItemAverageWeight
`public override int GetItemAverageWeight()`

**用途 / Purpose:** 获取 `item average weight` 的当前值。

### GetItemEffectiveWeight
`public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)`

**用途 / Purpose:** 获取 `item effective weight` 的当前值。

### CalculateInventoryCapacity
`public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**用途 / Purpose:** 处理 `calculate inventory capacity` 相关逻辑。

### CalculateTotalWeightCarried
`public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate total weight carried` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel());
```

## 参见

- [完整类目录](../catalog)