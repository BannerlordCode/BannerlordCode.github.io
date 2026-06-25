---
title: "EquipmentTestMissionController"
description: "Auto-generated class reference for EquipmentTestMissionController."
---
# EquipmentTestMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/EquipmentTestMissionController.cs`

## Overview

`EquipmentTestMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `EquipmentTestMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of EquipmentTestMissionController from the subsystem API first
EquipmentTestMissionController equipmentTestMissionController = ...;
equipmentTestMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<EquipmentTestMissionController>();
```

## See Also

- [Area Index](../)