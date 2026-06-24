<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReplayCaptureLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ReplayCaptureLogic

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayCaptureLogic : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayCaptureLogic.cs`

## Overview

`ReplayCaptureLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `ReplayCaptureLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ReplayCaptureLogic());
```

## See Also

- [Complete Class Catalog](../catalog)