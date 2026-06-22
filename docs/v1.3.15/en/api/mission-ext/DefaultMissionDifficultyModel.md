<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMissionDifficultyModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## Overview

`DefaultMissionDifficultyModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel())` to change how it computes.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
```csharp
public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
```

## Usage Example

```csharp
// Typical usage of DefaultMissionDifficultyModel (Model)
Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)