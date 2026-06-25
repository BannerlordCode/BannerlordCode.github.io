---
title: "ScissorTestInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScissorTestInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScissorTestInfo

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ScissorTestInfo`
**Base:** none
**File:** `TaleWorlds.TwoDimension/ScissorTestInfo.cs`

## Overview

`ScissorTestInfo` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public float X { get; }` |
| `X2` | `public float X2 { get; }` |
| `Y` | `public float Y { get; }` |
| `Y2` | `public float Y2 { get; }` |

## Key Methods

### ReduceToIntersection
`public void ReduceToIntersection(ScissorTestInfo other)`

**Purpose:** Handles logic related to `reduce to intersection`.

### GetSimpleRectangle
`public SimpleRectangle GetSimpleRectangle()`

**Purpose:** Gets the current value of `simple rectangle`.

### IsCollide
`public bool IsCollide(in Rectangle2D other)`

**Purpose:** Handles logic related to `is collide`.

## Usage Example

```csharp
var value = new ScissorTestInfo();
value.ReduceToIntersection(other);
```

## See Also

- [Complete Class Catalog](../catalog)