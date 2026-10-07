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

`StoryModePartyWageModel` computes wages and recruitment costs, and its one substantive edit fixes the price of a single tutorial-only troop. `GetTroopRecruitmentCost` (StoryMode/GameComponents/StoryModePartyWageModel.cs:35) normally delegates to the sandbox model, but when the tutorial is still running and the troop's string id is `tutorial_placeholder_volunteer`, it returns a fixed `50f` instead (`:41`, `:45`). The wage side is untouched: `MaxWagePaymentLimit` and `GetCharacterWage` are pure passthroughs (`:18`, `:25`), as is `GetTotalWage` (`:31`).

## Mental Model

This is a price override rather than a discount system, and the effect is that the tutorial volunteer has a fixed cost instead of one derived from the troop's tier. The consumer inside the tutorial reads the rounded result directly — `TutorialHelper.cs:458` calls `GetTroopRecruitmentCost` and uses `RoundedResult` — so the `50f` is chosen to survive rounding into a round number of denars in the tutorial's own UI. Outside the tutorial the string-id check is never reached, because the completed-tutorial branch returns first (`:38`); a mod that renames the placeholder troop therefore changes what the tutorial charges without touching this model. Note the two delegation paths are written separately rather than as one guarded return (`:39` and `:43`), so an override that replaces the whole method has to reproduce both, or it will change the normal recruitment cost for troops the stock model handles identically. `MaxWagePaymentLimit` is read from a completely different context — `DefeatTheConspiracyQuestBehavior.cs:322` pushes it onto a lord party as its wage payment limit.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit { get; }` |

## Key Methods

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**Purpose:** Reads and returns the character wage value held by this instance.

```csharp
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetCharacterWage(character);
```

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** Reads and returns the total wage value held by this instance.

```csharp
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetTotalWage(mobileParty, troopRoster, false);
```

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** Reads and returns the troop recruitment cost value held by this instance.

```csharp
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetTroopRecruitmentCost(troop, buyerHero, false);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<PartyWageModel>(new StoryModePartyWageModel());
}
```

`PartyWageModel` is declared as `MBGameModel<PartyWageModel>` (`PartyWageModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:94`.

## See Also

- [Area Index](../)