<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxMissionDifficultyModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `damage multiplier of combat difficulty`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxMissionDifficultyModel>(new MySandboxMissionDifficultyModel());
```

## See Also

- [Complete Class Catalog](../catalog)