---
title: "DefaultMissionDifficultyModel"
description: "Auto-generated class reference for DefaultMissionDifficultyModel."
---
# DefaultMissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## Overview

`DefaultMissionDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMissionDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** **Purpose:** Reads and returns the damage multiplier of combat difficulty value held by the this instance.

```csharp
// Obtain an instance of DefaultMissionDifficultyModel from the subsystem API first
DefaultMissionDifficultyModel defaultMissionDifficultyModel = ...;
var result = defaultMissionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel());
```

## See Also

- [Area Index](../)