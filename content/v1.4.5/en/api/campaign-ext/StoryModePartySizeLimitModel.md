---
title: "StoryModePartySizeLimitModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModePartySizeLimitModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePartySizeLimitModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePartySizeLimitModel.cs`

## Overview

`StoryModePartySizeLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModePartySizeLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate garrison party size limit`.

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Handles logic related to `find appropriate initial roster for mobile party`.

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Handles logic related to `find appropriate initial ships for mobile party`.

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** Gets the current value of `assumed party size for lord party`.

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** Gets the current value of `clan tier party size effect for hero`.

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**Purpose:** Gets the current value of `ideal villager party size`.

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** Gets the current value of `next clan tier party size effect change for hero`.

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party member size limit`.

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `party prisoner size limit`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModePartySizeLimitModel>(new MyStoryModePartySizeLimitModel());
```

## See Also

- [Complete Class Catalog](../catalog)