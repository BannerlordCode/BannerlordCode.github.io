<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugObjectDestroyerMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DebugObjectDestroyerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugObjectDestroyerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/DebugObjectDestroyerMissionController.cs`

## Overview

`DebugObjectDestroyerMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `DebugObjectDestroyerMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<DebugObjectDestroyerMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)