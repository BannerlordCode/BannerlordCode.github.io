---
title: "StoryModeTroopSupplierProbabilityModel"
description: "Auto-generated class reference for StoryModeTroopSupplierProbabilityModel."
---
# StoryModeTroopSupplierProbabilityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeTroopSupplierProbabilityModel.cs`

## Overview

`StoryModeTroopSupplierProbabilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeTroopSupplierProbabilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
`public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<(FlattenedTroopRosterElement, MapEventParty, float)> priorityList)`

**Purpose:** Executes the EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization logic.

```csharp
// Obtain an instance of StoryModeTroopSupplierProbabilityModel from the subsystem API first
StoryModeTroopSupplierProbabilityModel storyModeTroopSupplierProbabilityModel = ...;
storyModeTroopSupplierProbabilityModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(battleParty, priorityTroops, false, 0, false, list<(FlattenedTroopRosterElement, mapEventParty, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeTroopSupplierProbabilityModel>(new MyStoryModeTroopSupplierProbabilityModel());
```

## See Also

- [Area Index](../)