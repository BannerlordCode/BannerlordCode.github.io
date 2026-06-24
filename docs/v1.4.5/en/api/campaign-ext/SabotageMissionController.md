<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SabotageMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SabotageMissionController

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class SabotageMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions/SabotageMissionController.cs`

## Overview

`SabotageMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SabotageMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SabotageMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)