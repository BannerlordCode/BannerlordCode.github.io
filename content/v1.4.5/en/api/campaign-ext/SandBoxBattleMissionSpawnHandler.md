---
title: "SandBoxBattleMissionSpawnHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxBattleMissionSpawnHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxBattleMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxBattleMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxBattleMissionSpawnHandler.cs`

## Overview

`SandBoxBattleMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxBattleMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SandBoxBattleMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)