---
title: "ShowQuickInformationEventListenerLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShowQuickInformationEventListenerLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShowQuickInformationEventListenerLogic

**Namespace:** SandBox.Missions.MissionEvents
**Module:** SandBox.Missions
**Type:** `public class ShowQuickInformationEventListenerLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionEvents/ShowQuickInformationEventListenerLogic.cs`

## Overview

`ShowQuickInformationEventListenerLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ShowQuickInformationEventListenerLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ShowQuickInformationEventListenerLogic());
```

## See Also

- [Complete Class Catalog](../catalog)