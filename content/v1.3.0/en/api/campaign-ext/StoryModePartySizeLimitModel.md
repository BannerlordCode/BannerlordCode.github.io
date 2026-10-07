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

`StoryModePartySizeLimitModel` answers "how many living troops may this party have", and it overrides exactly one member to give two story parties a fixed cap. `GetPartyMemberSizeLimit` (StoryMode/GameComponents/StoryModePartySizeLimitModel.cs:86) searches the live quest list for an unfinished `DisruptSupplyLinesConspiracyQuest` and, if the party is that quest's conspiracy caravan, returns the quest's own `CaravanPartySize` (`:90`, `:96`); failing that, if the party was created for the defeat-the-conspiracy quest, it returns a hard-coded `600f` (`:100`, `:102`). Every other member — villager party sizes, garrison limits, clan-tier party-size effects, initial rosters and ships, the prisoner limit — is a plain delegation to the sandbox model (`:24`, `:46`, `:52`, `:58`, `:64`, `:70`, `:76`, `:82`, `:110`).

## Mental Model

The return value is a limit, and the campaign enforces it as a cap on recruitment rather than as a target — a party already over the limit is simply refused more troops. The consumers cache: `PartyBase.cs:838` stores the result in `_cachedPartyMemberSizeLimit` and `PartyBase.cs:866` returns the explained form, so an override that changes the answer does not take effect until the party invalidates its own cached value. The quest search at `:90` runs on every call and filters by exact quest type, meaning it only matches the concrete class and not a subclass, and it uses `Campaign.Current.QuestManager.Quests` rather than a registered behaviour — so the two branches are two different ways of identifying the same quest party, one by quest data and one by the behaviour's own `IsMobilePartyCreatedForQuest` check. `600f` is the fallback for parties that the quest created without a size of its own, and it is a ceiling, not a target.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumNumberOfVillagersAtVillagerParty` | `public override int MinimumNumberOfVillagersAtVillagerParty { get; }` |

## Key Methods

### CalculateGarrisonPartySizeLimit
`public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of garrison party size limit.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.CalculateGarrisonPartySizeLimit(settlement, false);
```

### FindAppropriateInitialRosterForMobileParty
`public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Looks up the matching appropriate initial roster for mobile party in the current collection or scope.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.FindAppropriateInitialRosterForMobileParty(party, partyTemplate);
```

### FindAppropriateInitialShipsForMobileParty
`public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`

**Purpose:** Looks up the matching appropriate initial ships for mobile party in the current collection or scope.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.FindAppropriateInitialShipsForMobileParty(party, partyTemplate);
```

### GetAssumedPartySizeForLordParty
`public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)`

**Purpose:** Reads and returns the assumed party size for lord party value held by this instance.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetAssumedPartySizeForLordParty(leaderHero, partyMapFaction, actualClan);
```

### GetClanTierPartySizeEffectForHero
`public override int GetClanTierPartySizeEffectForHero(Hero hero)`

**Purpose:** Reads and returns the clan tier party size effect for hero value held by this instance.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetClanTierPartySizeEffectForHero(hero);
```

### GetIdealVillagerPartySize
`public override int GetIdealVillagerPartySize(Village village)`

**Purpose:** Reads and returns the ideal villager party size value held by this instance.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetIdealVillagerPartySize(village);
```

### GetNextClanTierPartySizeEffectChangeForHero
`public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

**Purpose:** Reads and returns the next clan tier party size effect change for hero value held by this instance.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(hero);
```

### GetPartyMemberSizeLimit
`public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the party member size limit value held by this instance.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetPartyMemberSizeLimit(party, false);
```

### GetPartyPrisonerSizeLimit
`public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`

**Purpose:** Reads and returns the party prisoner size limit value held by this instance.

```csharp
StoryModePartySizeLimitModel storyModePartySizeLimitModel = ...;
var result = storyModePartySizeLimitModel.GetPartyPrisonerSizeLimit(party, false);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<PartySizeLimitModel>(new StoryModePartySizeLimitModel());
}
```

`PartySizeLimitModel` is declared as `MBGameModel<PartySizeLimitModel>` (`PartySizeLimitModel.cs:12`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:101`.

## See Also

- [Area Index](../)