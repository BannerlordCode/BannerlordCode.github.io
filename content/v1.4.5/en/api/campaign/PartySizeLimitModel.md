---
title: "PartySizeLimitModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartySizeLimitModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Base:** `MBGameModel<PartySizeLimitModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartySizeLimitModel.cs`

## Overview

`PartySizeLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartySizeLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### GetPartyMemberSizeLimit
`public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party member size limit`.

### GetPartyPrisonerSizeLimit
`public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party prisoner size limit`.

### CalculateGarrisonPartySizeLimit
`public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate garrison party size limit`.

### GetClanTierPartySizeEffectForHero
`public abstract int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** Gets the current value of `clan tier party size effect for hero`.

### GetNextClanTierPartySizeEffectChangeForHero
`public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** Gets the current value of `next clan tier party size effect change for hero`.

### GetAssumedPartySizeForLordParty
`public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** Gets the current value of `assumed party size for lord party`.

### GetIdealVillagerPartySize
`public abstract int GetIdealVillagerPartySize(Village village)`

**Purpose:** Gets the current value of `ideal villager party size`.

### FindAppropriateInitialRosterForMobileParty
`public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Handles logic related to `find appropriate initial roster for mobile party`.

### FindAppropriateInitialShipsForMobileParty
`public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Handles logic related to `find appropriate initial ships for mobile party`.

## Usage Example

```csharp
var implementation = new CustomPartySizeLimitModel();
```

## See Also

- [Complete Class Catalog](../catalog)