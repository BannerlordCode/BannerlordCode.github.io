<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCaravanOrVillagerTacticsHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCaravanOrVillagerTacticsHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionCaravanOrVillagerTacticsHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionCaravanOrVillagerTacticsHandler.cs`

## Overview

`MissionCaravanOrVillagerTacticsHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionCaravanOrVillagerTacticsHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionCaravanOrVillagerTacticsHandler());
```

## See Also

- [Complete Class Catalog](../catalog)