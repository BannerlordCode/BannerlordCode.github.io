---
title: "StoryModePartyWageModel"
description: "Auto-generated class reference for StoryModePartyWageModel."
---
# StoryModePartyWageModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `StoryMode/GameComponents/StoryModePartyWageModel.cs`

## Overview

`StoryModePartyWageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModePartyWageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit { get; }` |

## Key Methods

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**Purpose:** **Purpose:** Reads and returns the character wage value held by the this instance.

```csharp
// Obtain an instance of StoryModePartyWageModel from the subsystem API first
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetCharacterWage(character);
```

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** **Purpose:** Reads and returns the total wage value held by the this instance.

```csharp
// Obtain an instance of StoryModePartyWageModel from the subsystem API first
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetTotalWage(mobileParty, troopRoster, false);
```

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** **Purpose:** Reads and returns the troop recruitment cost value held by the this instance.

```csharp
// Obtain an instance of StoryModePartyWageModel from the subsystem API first
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetTroopRecruitmentCost(troop, buyerHero, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModePartyWageModel>(new MyStoryModePartyWageModel());
```

## See Also

- [Area Index](../)