---
title: "EquipmentControllerLeaveLogic"
description: "Auto-generated class reference for EquipmentControllerLeaveLogic."
---
# EquipmentControllerLeaveLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

## Overview

`EquipmentControllerLeaveLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `EquipmentControllerLeaveLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEquipmentSelectionActive` | `public bool IsEquipmentSelectionActive { get; }` |

## Key Methods

### SetIsEquipmentSelectionActive
`public void SetIsEquipmentSelectionActive(bool isActive)`

**Purpose:** Assigns a new value to is equipment selection active and updates the object's internal state.

```csharp
// Obtain an instance of EquipmentControllerLeaveLogic from the subsystem API first
EquipmentControllerLeaveLogic equipmentControllerLeaveLogic = ...;
equipmentControllerLeaveLogic.SetIsEquipmentSelectionActive(false);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Invoked when the end mission request event is raised.

```csharp
// Obtain an instance of EquipmentControllerLeaveLogic from the subsystem API first
EquipmentControllerLeaveLogic equipmentControllerLeaveLogic = ...;
var result = equipmentControllerLeaveLogic.OnEndMissionRequest(canLeave);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<EquipmentControllerLeaveLogic>();
```

## See Also

- [Area Index](../)