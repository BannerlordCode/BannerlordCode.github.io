---
title: "BasicLeaveMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicLeaveMissionLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicLeaveMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## Overview

`BasicLeaveMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BasicLeaveMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** Handles logic related to `mission ended`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Called when the `end mission request` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BasicLeaveMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)