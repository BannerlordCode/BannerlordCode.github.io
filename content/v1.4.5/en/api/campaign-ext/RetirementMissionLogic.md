---
title: "RetirementMissionLogic"
description: "Auto-generated class reference for RetirementMissionLogic."
---
# RetirementMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class RetirementMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/RetirementMissionLogic.cs`

## Overview

`RetirementMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `RetirementMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of RetirementMissionLogic from the subsystem API first
RetirementMissionLogic retirementMissionLogic = ...;
retirementMissionLogic.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<RetirementMissionLogic>();
```

## See Also

- [Area Index](../)