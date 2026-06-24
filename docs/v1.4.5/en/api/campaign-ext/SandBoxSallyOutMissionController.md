<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxSallyOutMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSallyOutMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxSallyOutMissionController : SallyOutMissionController`
**Base:** `SallyOutMissionController`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxSallyOutMissionController.cs`

## Overview

`SandBoxSallyOutMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SandBoxSallyOutMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SandBoxSallyOutMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)