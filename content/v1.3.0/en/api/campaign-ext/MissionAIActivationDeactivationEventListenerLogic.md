---
title: "MissionAIActivationDeactivationEventListenerLogic"
description: "Auto-generated class reference for MissionAIActivationDeactivationEventListenerLogic."
---
# MissionAIActivationDeactivationEventListenerLogic

**Namespace:** SandBox.Missions.MissionEvents
**Module:** SandBox.Missions
**Type:** `public class MissionAIActivationDeactivationEventListenerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs`

## Overview

`MissionAIActivationDeactivationEventListenerLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionAIActivationDeactivationEventListenerLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAIActivationDeactivationEventListenerLogic>();
```

## See Also

- [Area Index](../)