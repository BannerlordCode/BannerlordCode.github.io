<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotableSpawnPointHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NotableSpawnPointHandler

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class NotableSpawnPointHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/NotableSpawnPointHandler.cs`

## Overview

`NotableSpawnPointHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `NotableSpawnPointHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new NotableSpawnPointHandler());
```

## See Also

- [Complete Class Catalog](../catalog)