---
title: "Corners"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Corners`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Corners

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Corners`
**Area:** core-extra

## Overview

`Corners` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GlobalCenter` | `public Vec2 GlobalCenter { get; }` |
| `GlobalForward` | `public Vec2 GlobalForward { get; }` |
| `LocalDimensions` | `public Vec2 LocalDimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |

## Key Methods

### SetGlobalCenter
`public void SetGlobalCenter(in Vec2 globalCenter)`

**Purpose:** Sets the value or state of `global center`.

### SetLocalDimensions
`public void SetLocalDimensions(in Vec2 localDimensions)`

**Purpose:** Sets the value or state of `local dimensions`.

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
// First obtain a Corners instance from game state, then call one of its public methods
var value = new Corners();
value.SetGlobalCenter(globalCenter);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
