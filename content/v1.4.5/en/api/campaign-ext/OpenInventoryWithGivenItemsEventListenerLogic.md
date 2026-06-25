---
title: "OpenInventoryWithGivenItemsEventListenerLogic"
description: "Auto-generated class reference for OpenInventoryWithGivenItemsEventListenerLogic."
---
# OpenInventoryWithGivenItemsEventListenerLogic

**Namespace:** SandBox.Missions.MissionEvents
**Module:** SandBox.Missions
**Type:** `public class OpenInventoryWithGivenItemsEventListenerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionEvents/OpenInventoryWithGivenItemsEventListenerLogic.cs`

## Overview

`OpenInventoryWithGivenItemsEventListenerLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `OpenInventoryWithGivenItemsEventListenerLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<OpenInventoryWithGivenItemsEventListenerLogic>();
```

## See Also

- [Area Index](../)