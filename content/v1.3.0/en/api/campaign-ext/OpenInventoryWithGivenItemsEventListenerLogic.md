---
title: "OpenInventoryWithGivenItemsEventListenerLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OpenInventoryWithGivenItemsEventListenerLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OpenInventoryWithGivenItemsEventListenerLogic

**Namespace:** SandBox.Missions.MissionEvents
**Module:** SandBox.Missions
**Type:** `public class OpenInventoryWithGivenItemsEventListenerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionEvents/OpenInventoryWithGivenItemsEventListenerLogic.cs`

## Overview

`OpenInventoryWithGivenItemsEventListenerLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `OpenInventoryWithGivenItemsEventListenerLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new OpenInventoryWithGivenItemsEventListenerLogic());
```

## See Also

- [Complete Class Catalog](../catalog)