---
title: "OrderFlag"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderFlag`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `tick`.

### SetArrowVisibility
`public void SetArrowVisibility(bool isVisible, Vec2 arrowDirection)`

**Purpose:** Sets the value or state of `arrow visibility`.

### IsPositionOnValidGround
`public virtual bool IsPositionOnValidGround(WorldPosition worldPosition)`

**Purpose:** Handles logic related to `is position on valid ground`.

### IsOrderPositionValid
`public static bool IsOrderPositionValid(WorldPosition orderPosition)`

**Purpose:** Handles logic related to `is order position valid`.

### SetWidthVisibility
`public void SetWidthVisibility(bool isVisible, float width)`

**Purpose:** Sets the value or state of `width visibility`.

## Usage Example

```csharp
var value = new OrderFlag();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)