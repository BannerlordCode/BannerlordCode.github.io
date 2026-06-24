<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxBattleSpawnModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxBattleSpawnModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `SandBox/GameComponents/SandboxBattleSpawnModel.cs`

## Overview

`SandboxBattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxBattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionStart
`public override void OnMissionStart()`

**Purpose:** Called when the `mission start` event is raised.

### OnMissionEnd
`public override void OnMissionEnd()`

**Purpose:** Called when the `mission end` event is raised.

### GetInitialSpawnAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Gets the current value of `initial spawn assignments`.

### GetReinforcementAssignments
`public override List<ValueTuple<IAgentOriginBase, int>> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)`

**Purpose:** Gets the current value of `reinforcement assignments`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxBattleSpawnModel>(new MySandboxBattleSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)