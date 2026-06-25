---
title: "VisualOrderFactory"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrderFactory`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualOrderFactory

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderFactory`
**Area:** mission-ext

## Overview

`VisualOrderFactory` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterProvider
`public static void RegisterProvider(VisualOrderProvider provider)`

**Purpose:** Handles logic related to `register provider`.

### UnregisterProvider
`public static void UnregisterProvider(VisualOrderProvider provider)`

**Purpose:** Handles logic related to `unregister provider`.

### GetOrders
`public static MBReadOnlyList<VisualOrderSet> GetOrders()`

**Purpose:** Gets the current value of `orders`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
VisualOrderFactory.RegisterProvider(provider);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
