<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementEconomyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**Base:** `MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`

## 概述

`SettlementEconomyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SettlementEconomyModel>(new MySettlementEconomyModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetEstimatedDemandForCategory
```csharp
public abstract float GetEstimatedDemandForCategory(Town town, ItemData itemData, ItemCategory category)
```

### GetDailyDemandForCategory
```csharp
public abstract float GetDailyDemandForCategory(Town town, ItemCategory category, int extraProsperity = 0)
```

### GetDemandChangeFromValue
```csharp
public abstract float GetDemandChangeFromValue(float purchaseValue)
```

### GetSupplyDemandForCategory
```csharp
public abstract ValueTuple<float, float> GetSupplyDemandForCategory(Town town, ItemCategory category, float dailySupply, float dailyDemand, float oldSupply, float oldDemand)
```

### GetTownGoldChange
```csharp
public abstract int GetTownGoldChange(Town town)
```

### CalculateDailySettlementBudgetForItemCategory
```csharp
public abstract float CalculateDailySettlementBudgetForItemCategory(Town town, float demand, ItemCategory category)
```

## 使用示例

```csharp
// SettlementEconomyModel (Model) 的典型用法
Game.Current.ReplaceModel<SettlementEconomyModel>(new MySettlementEconomyModel());
```

## 参见

- [完整类目录](../catalog)