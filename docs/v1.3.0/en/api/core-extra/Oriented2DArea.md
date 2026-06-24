<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Oriented2DArea`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Oriented2DArea

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Oriented2DArea`
**Base:** none
**File:** `TaleWorlds.Library/Oriented2DArea.cs`

## Overview

`Oriented2DArea` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Center` | `public Vec2 Center { get; }` |
| `Forward` | `public Vec2 Forward { get; }` |
| `Right` | `public Vec2 Right { get; }` |
| `Dimensions` | `public Vec2 Dimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |

## Key Methods

### SetCenter
`public void SetCenter(in Vec2 center)`

**Purpose:** Sets the value or state of `center`.

### SetForward
`public void SetForward(in Vec2 forward)`

**Purpose:** Sets the value or state of `forward`.

### SetDimensions
`public void SetDimensions(in Vec2 dimensions)`

**Purpose:** Sets the value or state of `dimensions`.

### Overlaps
`public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)`

**Purpose:** Handles logic related to `overlaps`.

### Intersects
`public bool Intersects(in LineSegment2D line, float clearanceMargin)`

**Purpose:** Handles logic related to `intersects`.

### GetCorners
`public Oriented2DArea.Corners GetCorners()`

**Purpose:** Gets the current value of `corners`.

## Usage Example

```csharp
var value = new Oriented2DArea();
value.SetCenter(center);
```

## See Also

- [Complete Class Catalog](../catalog)