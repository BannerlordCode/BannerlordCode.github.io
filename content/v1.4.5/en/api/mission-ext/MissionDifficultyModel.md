---
title: "MissionDifficultyModel"
description: "Auto-generated class reference for MissionDifficultyModel."
---
# MissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionDifficultyModel.cs`

## Overview

`MissionDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MissionDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Reads and returns the `damage multiplier of combat difficulty` value held by the current object.

```csharp
// Obtain an instance of MissionDifficultyModel from the subsystem API first
MissionDifficultyModel missionDifficultyModel = ...;
var result = missionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionDifficultyModel instance = ...;
```

## See Also

- [Area Index](../)