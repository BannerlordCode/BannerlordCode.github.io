<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SimpleRectangle`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SimpleRectangle

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct SimpleRectangle`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SimpleRectangle.cs`

## Overview

`SimpleRectangle` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsCollide
`public bool IsCollide(SimpleRectangle other)`

**Purpose:** Handles logic related to `is collide`.

### GetCenter
`public Vector2 GetCenter()`

**Purpose:** Gets the current value of `center`.

### IsSubRectOf
`public bool IsSubRectOf(SimpleRectangle other)`

**Purpose:** Handles logic related to `is sub rect of`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### IsPointInside
`public bool IsPointInside(Vector2 point)`

**Purpose:** Handles logic related to `is point inside`.

### ReduceToIntersection
`public void ReduceToIntersection(SimpleRectangle other)`

**Purpose:** Handles logic related to `reduce to intersection`.

### Lerp
`public static SimpleRectangle Lerp(SimpleRectangle from, SimpleRectangle to, float ratio)`

**Purpose:** Handles logic related to `lerp`.

## Usage Example

```csharp
var value = new SimpleRectangle();
value.IsCollide(other);
```

## See Also

- [Complete Class Catalog](../catalog)