<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryCapacityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**Base:** `MBGameModel<InventoryCapacityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`

## 概述

`InventoryCapacityModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<InventoryCapacityModel>(new MyInventoryCapacityModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateInventoryCapacity
```csharp
public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)
```

### GetItemAverageWeight
```csharp
public abstract int GetItemAverageWeight()
```

### GetItemEffectiveWeight
```csharp
public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)
```

### CalculateTotalWeightCarried
```csharp
public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)
```

## 使用示例

```csharp
// InventoryCapacityModel (Model) 的典型用法
Game.Current.ReplaceModel<InventoryCapacityModel>(new MyInventoryCapacityModel());
```

## 参见

- [完整类目录](../catalog)