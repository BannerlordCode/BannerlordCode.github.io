---
title: "SallyOutEndLogic"
description: "Auto-generated class reference for SallyOutEndLogic."
---
# SallyOutEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutEndLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## Overview

`SallyOutEndLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `SallyOutEndLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSallyOutOver` | `public bool IsSallyOutOver { get; }` |

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of SallyOutEndLogic from the subsystem API first
SallyOutEndLogic sallyOutEndLogic = ...;
sallyOutEndLogic.OnMissionTick(0);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** **Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of SallyOutEndLogic from the subsystem API first
SallyOutEndLogic sallyOutEndLogic = ...;
var result = sallyOutEndLogic.MissionEnded(missionResult);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SallyOutEndLogic>();
```

## See Also

- [Area Index](../)