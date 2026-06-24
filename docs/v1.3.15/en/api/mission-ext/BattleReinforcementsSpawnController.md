<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleReinforcementsSpawnController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleReinforcementsSpawnController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleReinforcementsSpawnController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs`

## Overview

`BattleReinforcementsSpawnController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `BattleReinforcementsSpawnController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleReinforcementsSpawnController>();
```

## See Also

- [Complete Class Catalog](../catalog)