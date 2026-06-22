<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDifficultyModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs`

## Overview

`MissionDifficultyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MissionDifficultyModel>(new MyMissionDifficultyModel())` to change how it computes.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
```csharp
public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
```

## Usage Example

```csharp
// Typical usage of MissionDifficultyModel (Model)
Game.Current.ReplaceModel<MissionDifficultyModel>(new MyMissionDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)