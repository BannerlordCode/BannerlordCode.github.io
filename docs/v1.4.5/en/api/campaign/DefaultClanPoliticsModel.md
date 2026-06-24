<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanPoliticsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanPoliticsModel.cs`

## Overview

`DefaultClanPoliticsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanPoliticsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateInfluenceChange
`public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate influence change`.

### CalculateSupportForPolicyInClan
`public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)`

**Purpose:** Handles logic related to `calculate support for policy in clan`.

### CalculateRelationshipChangeWithSponsor
`public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)`

**Purpose:** Handles logic related to `calculate relationship change with sponsor`.

### GetInfluenceRequiredToOverrideKingdomDecision
`public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)`

**Purpose:** Gets the current value of `influence required to override kingdom decision`.

### CanHeroBeGovernor
`public override bool CanHeroBeGovernor(Hero hero)`

**Purpose:** Checks whether the current object can `hero be governor`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel());
```

## See Also

- [Complete Class Catalog](../catalog)