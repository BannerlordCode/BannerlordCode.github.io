<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleVisualOrderSet`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SingleVisualOrderSet

**Namespace:** TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleVisualOrderSet : VisualOrderSet`
**Base:** `VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/SingleVisualOrderSet.cs`

## Overview

`SingleVisualOrderSet` lives in `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSoloOrder` | `public override bool IsSoloOrder { get; }` |
| `StringId` | `public override string StringId { get; }` |
| `IconId` | `public override string IconId { get; }` |

## Key Methods

### GetName
`public override TextObject GetName(OrderController orderController)`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new SingleVisualOrderSet();
value.GetName(orderController);
```

## See Also

- [Complete Class Catalog](../catalog)