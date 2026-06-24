<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrderSet`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class VisualOrderSet`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderSet.cs`

## Overview

`VisualOrderSet` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SoloOrder` | `public VisualOrder SoloOrder { get; }` |
| `IsSoloOrder` | `public abstract bool IsSoloOrder { get; }` |
| `StringId` | `public abstract string StringId { get; }` |
| `IconId` | `public abstract string IconId { get; }` |

## Key Methods

### GetName
`public abstract TextObject GetName(OrderController orderController)`

**Purpose:** Gets the current value of `name`.

### AddOrder
`public void AddOrder(VisualOrder order)`

**Purpose:** Adds `order` to the current collection or state.

### RemoveOrder
`public void RemoveOrder(VisualOrder order)`

**Purpose:** Removes `order` from the current collection or state.

### ClearOrders
`public void ClearOrders()`

**Purpose:** Handles logic related to `clear orders`.

## Usage Example

```csharp
var implementation = new CustomVisualOrderSet();
```

## See Also

- [Complete Class Catalog](../catalog)