---
title: "MissionBasicTeamLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBasicTeamLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBasicTeamLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionBasicTeamLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionBasicTeamLogic.cs`

## Overview

`MissionBasicTeamLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionBasicTeamLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionBasicTeamLogic());
```

## See Also

- [Complete Class Catalog](../catalog)