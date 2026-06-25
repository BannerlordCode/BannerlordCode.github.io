---
title: "StoryModePartySizeLimitModel"
description: "Auto-generated class reference for StoryModePartySizeLimitModel."
---
# StoryModePartySizeLimitModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`
**File:** `StoryMode/GameComponents/StoryModePartySizeLimitModel.cs`

## Overview

`StoryModePartySizeLimitModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModePartySizeLimitModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `garrison party size limit`.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.CalculateGarrisonPartySizeLimit(settlement, false);
```

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Looks up the matching `appropriate initial roster for mobile party` in the current collection or scope.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.FindAppropriateInitialRosterForMobileParty(party, partyTemplate);
```

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Looks up the matching `appropriate initial ships for mobile party` in the current collection or scope.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.FindAppropriateInitialShipsForMobileParty(party, partyTemplate);
```

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** Reads and returns the `assumed party size for lord party` value held by the current object.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetAssumedPartySizeForLordParty(leaderHero, partyMapFaction, actualClan);
```

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** Reads and returns the `clan tier party size effect for hero` value held by the current object.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetClanTierPartySizeEffectForHero(hero);
```

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**Purpose:** Reads and returns the `ideal villager party size` value held by the current object.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetIdealVillagerPartySize(village);
```

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** Reads and returns the `next clan tier party size effect change for hero` value held by the current object.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(hero);
```

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the `party member size limit` value held by the current object.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetPartyMemberSizeLimit(party, false);
```

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the `party prisoner size limit` value held by the current object.

```csharp
// Obtain an instance of StoryModePartySizeLimitModel from the subsystem API first
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetPartyPrisonerSizeLimit(party, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModePartySizeLimitModel>(new MyStoryModePartySizeLimitModel());
```

## See Also

- [Area Index](../)