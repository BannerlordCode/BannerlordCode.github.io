<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentControllerLeaveLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentControllerLeaveLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

## Overview

`EquipmentControllerLeaveLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new EquipmentControllerLeaveLogic())`; subclass it to customize.

## Key Methods

### SetIsEquipmentSelectionActive
```csharp
public void SetIsEquipmentSelectionActive(bool isActive)
```

### OnEndMissionRequest
```csharp
public override InquiryData OnEndMissionRequest(out bool canLeave)
```

## Usage Example

```csharp
// Typical usage of EquipmentControllerLeaveLogic (Logic)
Mission.Current.AddMissionBehavior(new EquipmentControllerLeaveLogic());
```

## See Also

- [Complete Class Catalog](../catalog)