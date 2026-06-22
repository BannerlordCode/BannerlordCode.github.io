<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementTaxModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**Base:** `MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## Overview

`SettlementTaxModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SettlementTaxModel>(new MySettlementTaxModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## Key Methods

### GetTownTaxRatio
```csharp
public abstract float GetTownTaxRatio(Town town)
```

### GetVillageTaxRatio
```csharp
public abstract float GetVillageTaxRatio(Village village)
```

### GetTownCommissionChangeBasedOnSecurity
```csharp
public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
```

### CalculateTownTax
```csharp
public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
```

### CalculateVillageTaxFromIncome
```csharp
public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome)
```

## Usage Example

```csharp
// Typical usage of SettlementTaxModel (Model)
Game.Current.ReplaceModel<SettlementTaxModel>(new MySettlementTaxModel());
```

## See Also

- [Complete Class Catalog](../catalog)