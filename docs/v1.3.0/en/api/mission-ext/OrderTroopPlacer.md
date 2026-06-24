<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTroopPlacer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderTroopPlacer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopPlacer : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs`

## Overview

`OrderTroopPlacer` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SuspendTroopPlacer` | `public bool SuspendTroopPlacer { get; set; }` |
| `OrderFlag` | `public OrderFlag OrderFlag { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### RestrictOrdersToDeploymentBoundaries
`public void RestrictOrdersToDeploymentBoundaries(bool enabled)`

**Purpose:** Handles logic related to `restrict orders to deployment boundaries`.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
var value = new OrderTroopPlacer();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)