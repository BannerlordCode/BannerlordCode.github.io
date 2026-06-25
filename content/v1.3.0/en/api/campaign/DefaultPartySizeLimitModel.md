---
title: "DefaultPartySizeLimitModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartySizeLimitModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`

## Overview

`DefaultPartySizeLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartySizeLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party member size limit`.

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party prisoner size limit`.

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate garrison party size limit`.

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** Gets the current value of `next clan tier party size effect change for hero`.

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** Gets the current value of `assumed party size for lord party`.

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** Gets the current value of `clan tier party size effect for hero`.

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**Purpose:** Gets the current value of `ideal villager party size`.

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Handles logic related to `find appropriate initial roster for mobile party`.

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Handles logic related to `find appropriate initial ships for mobile party`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartySizeLimitModel>(new MyDefaultPartySizeLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)