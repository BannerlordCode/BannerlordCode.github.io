<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementEconomyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`
**Base:** `SettlementEconomyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`

## 概述

`DefaultSettlementEconomyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetSupplyDemandForCategory
```csharp
public override ValueTuple<float, float> GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)
```

### GetDailyDemandForCategory
```csharp
public override float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity)
```

### GetTownGoldChange
```csharp
public override int GetTownGoldChange(Town town)
```

### CalculateDailySettlementBudgetForItemCategory
```csharp
public override float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)
```

### GetDemandChangeFromValue
```csharp
public override float GetDemandChangeFromValue(float purchaseValue)
```

### GetEstimatedDemandForCategory
```csharp
public override float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)
```

### GetValueOfCategory
```csharp
public int GetValueOfCategory(ItemCategory category)
```

## 使用示例

```csharp
// DefaultSettlementEconomyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel());
```

## 参见

- [完整类目录](../catalog)