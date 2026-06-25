---
title: "DefaultVisualOrderProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVisualOrderProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultVisualOrderProvider

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultVisualOrderProvider : VisualOrderProvider`
**Base:** `VisualOrderProvider`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/DefaultVisualOrderProvider.cs`

## Overview

`DefaultVisualOrderProvider` lives in `TaleWorlds.MountAndBlade.View.VisualOrders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAvailable
`public override bool IsAvailable()`

**Purpose:** Handles logic related to `is available`.

### GetOrders
`public override MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** Gets the current value of `orders`.

## Usage Example

```csharp
var value = new DefaultVisualOrderProvider();
value.IsAvailable();
```

## See Also

- [Complete Class Catalog](../catalog)