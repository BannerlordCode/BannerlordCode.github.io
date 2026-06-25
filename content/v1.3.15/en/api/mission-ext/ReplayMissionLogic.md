---
title: "ReplayMissionLogic"
description: "Auto-generated class reference for ReplayMissionLogic."
---
# ReplayMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/ReplayMissionLogic.cs`

## Overview

`ReplayMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ReplayMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FileName` | `public string FileName { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of ReplayMissionLogic from the subsystem API first
ReplayMissionLogic replayMissionLogic = ...;
replayMissionLogic.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of ReplayMissionLogic from the subsystem API first
ReplayMissionLogic replayMissionLogic = ...;
replayMissionLogic.OnRemoveBehavior();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ReplayMissionLogic>();
```

## See Also

- [Area Index](../)