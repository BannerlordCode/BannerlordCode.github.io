---
title: "BattleMissionStarterLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleMissionStarterLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleMissionStarterLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionStarterLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleMissionStarterLogic.cs`

## Overview

`BattleMissionStarterLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleMissionStarterLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BattleMissionStarterLogic());
```

## See Also

- [Complete Class Catalog](../catalog)