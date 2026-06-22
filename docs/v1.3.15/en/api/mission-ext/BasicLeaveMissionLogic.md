<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicLeaveMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicLeaveMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## Overview

`BasicLeaveMissionLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BasicLeaveMissionLogic())`; subclass it to customize.

## Key Methods

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

### OnEndMissionRequest
```csharp
public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)
```

## Usage Example

```csharp
// Typical usage of BasicLeaveMissionLogic (Logic)
Mission.Current.AddMissionBehavior(new BasicLeaveMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)