<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartySizeLimitModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`

## Overview

`DefaultPartySizeLimitModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### GetPartyMemberSizeLimit
```csharp
public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### GetPartyPrisonerSizeLimit
```csharp
public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### CalculateGarrisonPartySizeLimit
```csharp
public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)
```

### GetNextClanTierPartySizeEffectChangeForHero
```csharp
public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)
```

### GetAssumedPartySizeForLordParty
```csharp
public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)
```

### GetClanTierPartySizeEffectForHero
```csharp
public override int GetClanTierPartySizeEffectForHero(Hero hero)
```

### GetIdealVillagerPartySize
```csharp
public override int GetIdealVillagerPartySize(Village village)
```

### FindAppropriateInitialRosterForMobileParty
```csharp
public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

### FindAppropriateInitialShipsForMobileParty
```csharp
public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

## Usage Example

```csharp
// Typical usage of DefaultPartySizeLimitModel (Model)
Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)