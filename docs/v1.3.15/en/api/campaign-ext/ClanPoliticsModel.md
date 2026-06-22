<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanPoliticsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel>`
**Base:** `MBGameModel<ClanPoliticsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`

## Overview

`ClanPoliticsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ClanPoliticsModel>(new MyClanPoliticsModel())` to change how it computes.

## Key Methods

### CalculateInfluenceChange
```csharp
public abstract ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)
```

### CalculateSupportForPolicyInClan
```csharp
public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)
```

### CalculateRelationshipChangeWithSponsor
```csharp
public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)
```

### GetInfluenceRequiredToOverrideKingdomDecision
```csharp
public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)
```

### CanHeroBeGovernor
```csharp
public abstract bool CanHeroBeGovernor(Hero hero)
```

## Usage Example

```csharp
// Typical usage of ClanPoliticsModel (Model)
Game.Current.ReplaceModel<ClanPoliticsModel>(new MyClanPoliticsModel());
```

## See Also

- [Complete Class Catalog](../catalog)