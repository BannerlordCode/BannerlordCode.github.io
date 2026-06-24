<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementLoyaltyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementLoyaltyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Base:** `SettlementLoyaltyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## Overview

`DefaultSettlementLoyaltyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementLoyaltyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateLoyaltyChange
`public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate loyalty change`.

### CalculateGoldGainDueToHighLoyalty
`public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold gain due to high loyalty`.

### CalculateGoldCutDueToLowLoyalty
`public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold cut due to low loyalty`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementLoyaltyModel>(new MyDefaultSettlementLoyaltyModel());
```

## See Also

- [Complete Class Catalog](../catalog)