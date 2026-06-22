<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementEconomyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementEconomyModel : SettlementEconomyModel`
**Base:** `SettlementEconomyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementEconomyModel.cs`

## Overview

`DefaultSettlementEconomyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DefaultSettlementEconomyModel (Model)
Game.Current.ReplaceModel<DefaultSettlementEconomyModel>(new MyDefaultSettlementEconomyModel());
```

## See Also

- [Complete Class Catalog](../catalog)