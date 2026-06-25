---
title: "SandBoxSiegeMissionSpawnHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxSiegeMissionSpawnHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSiegeMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxSiegeMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `SandBox/Missions/MissionLogics/SandBoxSiegeMissionSpawnHandler.cs`

## Overview

`SandBoxSiegeMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxSiegeMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SandBoxSiegeMissionSpawnHandler());
```

## See Also

- [Complete Class Catalog](../catalog)