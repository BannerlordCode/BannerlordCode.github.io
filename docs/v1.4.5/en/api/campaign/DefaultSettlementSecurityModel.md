<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSettlementSecurityModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementSecurityModel : SettlementSecurityModel`
**Base:** `SettlementSecurityModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementSecurityModel.cs`

## Overview

`DefaultSettlementSecurityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSettlementSecurityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateSecurityChange
`public override ExplainedNumber CalculateSecurityChange(Town town, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate security change`.

### GetLootedNearbyPartySecurityEffect
`public override float GetLootedNearbyPartySecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Gets the current value of `looted nearby party security effect`.

### GetNearbyBanditPartyDefeatedSecurityEffect
`public override float GetNearbyBanditPartyDefeatedSecurityEffect(Town town, float sumOfAttackedPartyStrengths)`

**Purpose:** Gets the current value of `nearby bandit party defeated security effect`.

### CalculateGoldGainDueToHighSecurity
`public override void CalculateGoldGainDueToHighSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold gain due to high security`.

### CalculateGoldCutDueToLowSecurity
`public override void CalculateGoldCutDueToLowSecurity(Town town, ref ExplainedNumber explainedNumber)`

**Purpose:** Handles logic related to `calculate gold cut due to low security`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSettlementSecurityModel>(new MyDefaultSettlementSecurityModel());
```

## See Also

- [Complete Class Catalog](../catalog)