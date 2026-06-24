<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementTaxModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**Base:** `MBGameModel<SettlementTaxModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## Overview

`SettlementTaxModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementTaxModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SettlementCommissionRateTown` | `public abstract float SettlementCommissionRateTown { get; }` |
| `SettlementCommissionRateVillage` | `public abstract float SettlementCommissionRateVillage { get; }` |
| `SettlementCommissionDecreaseSecurityThreshold` | `public abstract int SettlementCommissionDecreaseSecurityThreshold { get; }` |
| `MaximumDecreaseBasedOnSecuritySecurity` | `public abstract int MaximumDecreaseBasedOnSecuritySecurity { get; }` |

## Key Methods

### GetTownTaxRatio
`public abstract float GetTownTaxRatio(Town town)`

**Purpose:** Gets the current value of `town tax ratio`.

### GetVillageTaxRatio
`public abstract float GetVillageTaxRatio(Village village)`

**Purpose:** Gets the current value of `village tax ratio`.

### GetTownCommissionChangeBasedOnSecurity
`public abstract float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)`

**Purpose:** Gets the current value of `town commission change based on security`.

### CalculateTownTax
`public abstract ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate town tax`.

### CalculateVillageTaxFromIncome
`public abstract int CalculateVillageTaxFromIncome(Village village, int marketIncome)`

**Purpose:** Handles logic related to `calculate village tax from income`.

## Usage Example

```csharp
var implementation = new CustomSettlementTaxModel();
```

## See Also

- [Complete Class Catalog](../catalog)