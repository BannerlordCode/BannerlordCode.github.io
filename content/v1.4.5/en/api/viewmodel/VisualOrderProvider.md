---
title: "VisualOrderProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrderProvider`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualOrderProvider

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrderProvider`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderProvider.cs`

## Overview

`VisualOrderProvider` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsAvailable
`public abstract bool IsAvailable()`

**Purpose:** Handles logic related to `is available`.

### GetOrders
`public abstract MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** Gets the current value of `orders`.

## Usage Example

```csharp
var implementation = new CustomVisualOrderProvider();
```

## See Also

- [Complete Class Catalog](../catalog)