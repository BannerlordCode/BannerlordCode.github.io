---
title: "FacingOrder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FacingOrder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FacingOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FacingOrder`
**Area:** mission-ext

## Overview

`FacingOrder` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |

## Key Methods

### FacingOrderLookAtDirection
`public static FacingOrder FacingOrderLookAtDirection(Vec2 direction)`

**Purpose:** Handles logic related to `facing order look at direction`.

### GetDirection
`public Vec2 GetDirection(Formation f, Agent targetAgent = null)`

**Purpose:** Gets the current value of `direction`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
FacingOrder.FacingOrderLookAtDirection(direction);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
