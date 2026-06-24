<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownCenterMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TownCenterMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class TownCenterMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/TownCenterMissionController.cs`

## Overview

`TownCenterMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TownCenterMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TownCenterMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)