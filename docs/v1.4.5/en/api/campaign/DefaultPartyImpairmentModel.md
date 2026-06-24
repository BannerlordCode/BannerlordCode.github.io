<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyImpairmentModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyImpairmentModel.cs`

## Overview

`DefaultPartyImpairmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyImpairmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeExpectedVulnerabilityTime
`public override float GetSiegeExpectedVulnerabilityTime()`

**Purpose:** Gets the current value of `siege expected vulnerability time`.

### GetDisorganizedStateDuration
`public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**Purpose:** Gets the current value of `disorganized state duration`.

### CanGetDisorganized
`public override bool CanGetDisorganized(PartyBase party)`

**Purpose:** Checks whether the current object can `get disorganized`.

### GetVulnerabilityStateDuration
`public override float GetVulnerabilityStateDuration(PartyBase party)`

**Purpose:** Gets the current value of `vulnerability state duration`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel());
```

## See Also

- [Complete Class Catalog](../catalog)