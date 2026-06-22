<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultClanPoliticsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`

## Overview

`DefaultClanPoliticsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel())` to change how it computes.

## Key Methods

### CalculateInfluenceChange
```csharp
public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)
```

### CalculateSupportForPolicyInClan
```csharp
public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)
```

### CalculateRelationshipChangeWithSponsor
```csharp
public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)
```

### GetInfluenceRequiredToOverrideKingdomDecision
```csharp
public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)
```

### CanHeroBeGovernor
```csharp
public override bool CanHeroBeGovernor(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultClanPoliticsModel (Model)
Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel());
```

## See Also

- [Complete Class Catalog](../catalog)