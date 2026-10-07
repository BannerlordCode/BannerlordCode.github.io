---
title: "StoryModeTroopSupplierProbabilityModel"
description: "Auto-generated class reference for StoryModeTroopSupplierProbabilityModel."
---
# StoryModeTroopSupplierProbabilityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`
**File:** `StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs`

## Overview

`StoryModeTroopSupplierProbabilityModel` post-processes the spawn probability list a battle side has just built, and its single override exists to make one named hero almost never spawn inside a tutorial hideout. `EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization` (StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs:17) records the list length before delegating to the sandbox model (`:19`, `:20`), then walks only the entries the sandbox just added (`:26`) and rewrites Radagos's probability to `0.01f` if the player's own priority roster does not already contain him (`:29`, `:31`). After the tutorial it is Radagos's henchman who is suppressed instead, using the same rewrite over the whole list (`:38`, `:41`).

## Mental Model

This is a list mutator, not a calculator, and it works by remembering where the delegation ended. The `count` captured at `:19` is the boundary: only the newly appended entries are candidates for suppression, which is why the later loop over the full list at `:38` is a genuinely different search. `MapEventSide.cs:1040` calls the method once per side and expects the probability tuples it passed in to come back modified in place — the method returns `void`, so there is no other channel for the result, and discarding the list argument instead of mutating it produces a battle with no explanation. Three guards are load-bearing. The suppression only applies inside a hideout settlement (`:22`), because that is where the story hero appears; outside a hideout the model is a pure pass-through. The check is `priorityTroops.All(t => t.Troop != character)`, so a player who has Radagos in their own roster spawns him normally. And both branches `return` immediately after the first rewrite, so only one entry is ever downgraded per call.

## Key Methods

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
`public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)`

**Purpose:** Executes the EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization logic.

```csharp
StoryModeTroopSupplierProbabilityModel storyModeTroopSupplierProbabilityModel = ...;
storyModeTroopSupplierProbabilityModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(battleParty, priorityTroops, false, 0, false, list<ValueTuple<FlattenedTroopRosterElement, mapEventParty, 0);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<TroopSupplierProbabilityModel>(new StoryModeTroopSupplierProbabilityModel());
}
```

`TroopSupplierProbabilityModel` is declared as `MBGameModel<TroopSupplierProbabilityModel>` (`TroopSupplierProbabilityModel.cs:10`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:104`.

## See Also

- [Area Index](../)