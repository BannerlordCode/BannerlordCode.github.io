<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionFacialAnimationHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFacialAnimationHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFacialAnimationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/MissionFacialAnimationHandler.cs`

## Overview

`MissionFacialAnimationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFacialAnimationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionFacialAnimationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)