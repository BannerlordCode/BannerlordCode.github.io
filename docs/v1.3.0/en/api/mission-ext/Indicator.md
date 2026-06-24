<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Indicator`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Indicator

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Indicator`
**Area:** mission-ext

## Overview

`Indicator` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**Purpose:** Handles logic related to `determine indicator state`.

## Usage Example

```csharp
// First obtain a Indicator instance from game state, then call one of its public methods
var value = new Indicator();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
