<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementTaxModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementTaxModel : SettlementTaxModel`
**Base:** `SettlementTaxModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementTaxModel.cs`

## Overview

`DefaultSettlementTaxModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementTaxModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public override float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public override float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public override int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public override int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## Key Methods

### GetTownTaxRatio
`public override float GetTownTaxRatio(Town town)`

**Purpose:** Gets the current value of `town tax ratio`.

### GetVillageTaxRatio
`public override float GetVillageTaxRatio(Village village)`

**Purpose:** Gets the current value of `village tax ratio`.

### GetTownCommissionChangeBasedOnSecurity
`public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**Purpose:** Gets the current value of `town commission change based on security`.

### CalculateTownTax
`public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate town tax`.

### CalculateVillageTaxFromIncome
`public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**Purpose:** Handles logic related to `calculate village tax from income`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementTaxModel>(new MyDefaultSettlementTaxModel());
```

## See Also

- [Complete Class Catalog](../catalog)