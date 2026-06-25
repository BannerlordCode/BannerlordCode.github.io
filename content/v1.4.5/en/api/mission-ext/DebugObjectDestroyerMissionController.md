---
title: "DebugObjectDestroyerMissionController"
description: "Auto-generated class reference for DebugObjectDestroyerMissionController."
---
# DebugObjectDestroyerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugObjectDestroyerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/DebugObjectDestroyerMissionController.cs`

## Overview

`DebugObjectDestroyerMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `DebugObjectDestroyerMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of DebugObjectDestroyerMissionController from the subsystem API first
DebugObjectDestroyerMissionController debugObjectDestroyerMissionController = ...;
debugObjectDestroyerMissionController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<DebugObjectDestroyerMissionController>();
```

## See Also

- [Area Index](../)