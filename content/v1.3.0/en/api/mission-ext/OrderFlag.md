---
title: "OrderFlag"
description: "Auto-generated class reference for OrderFlag."
---
# OrderFlag

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderFlag`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs`

## Overview

`OrderFlag` lives in `TaleWorlds.MountAndBlade.View.MissionViews.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FocusedOrderableObject` | `public IOrderable FocusedOrderableObject { get; }` |
| `LatestUpdateFrameNo` | `public int LatestUpdateFrameNo { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of OrderFlag from the subsystem API first
OrderFlag orderFlag = ...;
orderFlag.Tick(0);
```

### SetArrowVisibility
`public void SetArrowVisibility(bool isVisible, Vec2 arrowDirection)`

**Purpose:** Assigns a new value to arrow visibility and updates the object's internal state.

```csharp
// Obtain an instance of OrderFlag from the subsystem API first
OrderFlag orderFlag = ...;
orderFlag.SetArrowVisibility(false, arrowDirection);
```

### IsPositionOnValidGround
`public virtual bool IsPositionOnValidGround(WorldPosition worldPosition)`

**Purpose:** Determines whether the this instance is in the position on valid ground state or condition.

```csharp
// Obtain an instance of OrderFlag from the subsystem API first
OrderFlag orderFlag = ...;
var result = orderFlag.IsPositionOnValidGround(worldPosition);
```

### IsOrderPositionValid
`public static bool IsOrderPositionValid(WorldPosition orderPosition)`

**Purpose:** Determines whether the this instance is in the order position valid state or condition.

```csharp
// Static call; no instance required
OrderFlag.IsOrderPositionValid(orderPosition);
```

### SetWidthVisibility
`public void SetWidthVisibility(bool isVisible, float width)`

**Purpose:** Assigns a new value to width visibility and updates the object's internal state.

```csharp
// Obtain an instance of OrderFlag from the subsystem API first
OrderFlag orderFlag = ...;
orderFlag.SetWidthVisibility(false, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
OrderFlag orderFlag = ...;
orderFlag.Tick(0);
```

## See Also

- [Area Index](../)