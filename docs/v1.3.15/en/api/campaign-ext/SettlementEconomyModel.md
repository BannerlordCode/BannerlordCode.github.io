<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementEconomyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementEconomyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementEconomyModel : MBGameModel<SettlementEconomyModel>`
**Base:** `MBGameModel<SettlementEconomyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementEconomyModel.cs`

## Overview

`SettlementEconomyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementEconomyModel>(new MySettlementEconomyModel())` to change how it computes.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of SettlementEconomyModel (Model)
Game.Current.ReplaceModel<SettlementEconomyModel>(new MySettlementEconomyModel());
```

## See Also

- [Complete Class Catalog](../catalog)