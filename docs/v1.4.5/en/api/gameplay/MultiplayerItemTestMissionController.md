<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerItemTestMissionController`
- [← Area / Back to gameplay](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerItemTestMissionController

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class MultiplayerItemTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/SandBox/MultiplayerItemTestMissionController.cs`

## Overview

`MultiplayerItemTestMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `MultiplayerItemTestMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerItemTestMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)