---
title: "SandboxMissionDifficultyModel"
description: "Auto-generated class reference for SandboxMissionDifficultyModel."
---
# SandboxMissionDifficultyModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `SandBox/GameComponents/SandboxMissionDifficultyModel.cs`

## Overview

`SandboxMissionDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxMissionDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Reads and returns the `damage multiplier of combat difficulty` value held by the current object.

```csharp
// Obtain an instance of SandboxMissionDifficultyModel from the subsystem API first
SandboxMissionDifficultyModel sandboxMissionDifficultyModel = ...;
var result = sandboxMissionDifficultyModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, null);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxMissionDifficultyModel>(new MySandboxMissionDifficultyModel());
```

## See Also

- [Area Index](../)