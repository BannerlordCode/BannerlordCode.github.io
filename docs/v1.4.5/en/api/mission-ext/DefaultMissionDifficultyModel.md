<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMissionDifficultyModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMissionDifficultyModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDifficultyModel : MissionDifficultyModel`
**Base:** `MissionDifficultyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultMissionDifficultyModel.cs`

## Overview

`DefaultMissionDifficultyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMissionDifficultyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDamageMultiplierOfCombatDifficulty
`public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

**Purpose:** Gets the current value of `damage multiplier of combat difficulty`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMissionDifficultyModel>(new MyDefaultMissionDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)