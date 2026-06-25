---
title: "StealthMissionUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthMissionUIHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthMissionUIHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class StealthMissionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/StealthMissionUIHandler.cs`

## Overview

`StealthMissionUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `StealthMissionUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new StealthMissionUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)