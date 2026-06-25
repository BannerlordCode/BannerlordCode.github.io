---
title: "BattleMissionStarterLogic"
description: "Auto-generated class reference for BattleMissionStarterLogic."
---
# BattleMissionStarterLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## Overview

`BattleMissionStarterLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleMissionStarterLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleMissionStarterLogic from the subsystem API first
BattleMissionStarterLogic battleMissionStarterLogic = ...;
battleMissionStarterLogic.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleMissionStarterLogic>();
```

## See Also

- [Area Index](../)