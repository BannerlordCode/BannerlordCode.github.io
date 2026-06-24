<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StealthMissionUIHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StealthMissionUIHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class StealthMissionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/StealthMissionUIHandler.cs`

## Overview

`StealthMissionUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `StealthMissionUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new StealthMissionUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)