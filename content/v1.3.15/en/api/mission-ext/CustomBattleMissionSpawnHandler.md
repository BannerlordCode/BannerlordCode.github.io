---
title: "CustomBattleMissionSpawnHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleMissionSpawnHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs`

## Overview

`CustomBattleMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `CustomBattleMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new CustomBattleMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)