<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartySizeLimitModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Base:** `MBGameModel<PartySizeLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`

## Overview

`PartySizeLimitModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartySizeLimitModel>(new MyPartySizeLimitModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### GetPartyMemberSizeLimit
```csharp
public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### GetPartyPrisonerSizeLimit
```csharp
public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)
```

### CalculateGarrisonPartySizeLimit
```csharp
public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)
```

### GetClanTierPartySizeEffectForHero
```csharp
public abstract int GetClanTierPartySizeEffectForHero(Hero hero)
```

### GetNextClanTierPartySizeEffectChangeForHero
```csharp
public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)
```

### GetAssumedPartySizeForLordParty
```csharp
public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)
```

### GetIdealVillagerPartySize
```csharp
public abstract int GetIdealVillagerPartySize(Village village)
```

### FindAppropriateInitialRosterForMobileParty
```csharp
public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

### FindAppropriateInitialShipsForMobileParty
```csharp
public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
```

## Usage Example

```csharp
// Typical usage of PartySizeLimitModel (Model)
Game.Current.ReplaceModel<PartySizeLimitModel>(new MyPartySizeLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)