<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultInventoryCapacityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultInventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**Base:** `InventoryCapacityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`

## 概述

`DefaultInventoryCapacityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetItemAverageWeight
```csharp
public override int GetItemAverageWeight()
```

### GetItemEffectiveWeight
```csharp
public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)
```

### CalculateInventoryCapacity
```csharp
public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)
```

### CalculateTotalWeightCarried
```csharp
public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)
```

## 使用示例

```csharp
// DefaultInventoryCapacityModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel());
```

## 参见

- [完整类目录](../catalog)