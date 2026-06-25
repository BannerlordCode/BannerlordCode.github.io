---
title: "CaravanBattleMissionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanBattleMissionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CaravanBattleMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaravanBattleMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/CaravanBattleMissionHandler.cs`

## Overview

`CaravanBattleMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CaravanBattleMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CaravanBattleMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)