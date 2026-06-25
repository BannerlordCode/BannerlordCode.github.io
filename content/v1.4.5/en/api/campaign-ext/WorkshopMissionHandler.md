---
title: "WorkshopMissionHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopMissionHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/WorkshopMissionHandler.cs`

## Overview

`WorkshopMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `WorkshopMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new WorkshopMissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)