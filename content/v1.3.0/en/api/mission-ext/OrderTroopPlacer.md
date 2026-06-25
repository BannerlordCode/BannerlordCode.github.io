---
title: "OrderTroopPlacer"
description: "Auto-generated class reference for OrderTroopPlacer."
---
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

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of OrderTroopPlacer from the subsystem API first
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of OrderTroopPlacer from the subsystem API first
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.OnMissionTick(0);
```

### RestrictOrdersToDeploymentBoundaries
`public void RestrictOrdersToDeploymentBoundaries(bool enabled)`

**Purpose:** **Purpose:** Executes the RestrictOrdersToDeploymentBoundaries logic.

```csharp
// Obtain an instance of OrderTroopPlacer from the subsystem API first
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.RestrictOrdersToDeploymentBoundaries(false);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of OrderTroopPlacer from the subsystem API first
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.AfterStart();
```

## See Also

- [Area Index](../)