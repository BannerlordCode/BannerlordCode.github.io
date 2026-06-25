---
title: "MissionDifficultyModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDifficultyModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/MissionDifficultyModel.cs`

## Overview

`MissionDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MissionDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Gets the current value of `damage multiplier of combat difficulty`.

## Usage Example

```csharp
var implementation = new CustomMissionDifficultyModel();
```

## See Also

- [Complete Class Catalog](../catalog)