---
title: "StoryModeTargetScoreCalculatingModel"
description: "Auto-generated class reference for StoryModeTargetScoreCalculatingModel."
---
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## Overview

`StoryModeTargetScoreCalculatingModel` supplies the AI's target value for a settlement, and the story uses it to make one tutorial village invisible to the army AI. `GetTargetScoreForFaction` (StoryMode/GameComponents/StoryModeTargetScoreCalculatingModel.cs:82) returns `0f` when the mission type is an attack on the settlement whose id is `village_ES3_2` and the tutorial is still running (`:84`, `:86`); every other combination returns the sandbox score (`:88`). The five activity factors — travelling, besieging, assaulting, raiding, defending — and the patrolling score are pure delegations (`:19`, `:29`, `:39`, `:49`, `:59`, `:72`).

## Mental Model

The score is a preference value the AI compares against alternatives, so returning `0f` does not forbid an attack — it makes the settlement the least attractive target available, which is a softer and more fragile suppression than a veto. The consumer is `AiMilitaryBehavior.cs:379`, which takes the score for a candidate settlement and the party's strength; `Army.cs:363` separately reads `CurrentObjectiveValue` for the army's current leader party, and that member is not suppressed at all (`:78`). Two details decide whether the suppression actually holds. The mission type is compared against the literal `1`, which is the attack value in `Army.ArmyTypes`, so an army AI path that classifies the objective differently bypasses the check entirely. And `TutorialPhase.Instance` is null-guarded here (`:84`) unlike the sibling story models, so this override is safe to install before the tutorial phase object exists — a guard the other StoryMode models omit.

## Key Properties

| Name | Signature |
|------|-----------|
| `TravelingToAssignmentFactor` | `public override float TravelingToAssignmentFactor { get; }` |
| `BesiegingFactor` | `public override float BesiegingFactor { get; }` |
| `AssaultingTownFactor` | `public override float AssaultingTownFactor { get; }` |
| `RaidingFactor` | `public override float RaidingFactor { get; }` |
| `DefendingFactor` | `public override float DefendingFactor { get; }` |

## Key Methods

### GetPatrollingFactor
`public override float GetPatrollingFactor(bool isNavalPatrolling)`

**Purpose:** Reads and returns the patrolling factor value held by this instance.

```csharp
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetPatrollingFactor(false);
```

### CalculatePatrollingScoreForSettlement
`public override float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)`

**Purpose:** Calculates the current value or result of patrolling score for settlement.

```csharp
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CalculatePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**Purpose:** Executes the CurrentObjectiveValue logic.

```csharp
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**Purpose:** Reads and returns the target score for faction value held by this instance.

```csharp
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<TargetScoreCalculatingModel>(new StoryModeTargetScoreCalculatingModel());
}
```

`TargetScoreCalculatingModel` is declared as `MBGameModel<TargetScoreCalculatingModel>` (`TargetScoreCalculatingModel.cs:9`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:93`.

## See Also

- [Area Index](../)