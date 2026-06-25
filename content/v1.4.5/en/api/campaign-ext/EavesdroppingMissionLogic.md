---
title: "EavesdroppingMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EavesdroppingMissionLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EavesdroppingMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class EavesdroppingMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/EavesdroppingMissionLogic.cs`

## Overview

`EavesdroppingMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `EavesdroppingMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new EavesdroppingMissionLogic());
```

## See Also

- [Complete Class Catalog](../catalog)