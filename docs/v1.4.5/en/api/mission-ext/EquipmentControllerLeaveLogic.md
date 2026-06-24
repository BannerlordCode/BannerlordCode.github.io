<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentControllerLeaveLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentControllerLeaveLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

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

**Purpose:** Sets the value or state of `is equipment selection active`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**Purpose:** Called when the `end mission request` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new EquipmentControllerLeaveLogic());
```

## See Also

- [Complete Class Catalog](../catalog)