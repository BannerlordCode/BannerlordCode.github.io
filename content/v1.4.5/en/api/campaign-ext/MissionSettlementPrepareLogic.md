---
title: "MissionSettlementPrepareLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSettlementPrepareLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSettlementPrepareLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionSettlementPrepareLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionSettlementPrepareLogic.cs`

## Overview

`MissionSettlementPrepareLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionSettlementPrepareLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionSettlementPrepareLogic());
```

## See Also

- [Complete Class Catalog](../catalog)