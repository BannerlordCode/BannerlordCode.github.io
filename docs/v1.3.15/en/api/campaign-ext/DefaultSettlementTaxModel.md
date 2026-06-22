<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementTaxModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Base:** `SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`

## Overview

`DefaultSettlementTaxModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## Key Methods

### GetTownTaxRatio
```csharp
public override float GetTownTaxRatio(Town town)
```

### GetVillageTaxRatio
```csharp
public override float GetVillageTaxRatio(Village village)
```

### GetTownCommissionChangeBasedOnSecurity
```csharp
public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
```

### CalculateTownTax
```csharp
public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
```

### CalculateVillageTaxFromIncome
```csharp
public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)
```

## Usage Example

```csharp
// Typical usage of DefaultSettlementTaxModel (Model)
Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel());
```

## See Also

- [Complete Class Catalog](../catalog)