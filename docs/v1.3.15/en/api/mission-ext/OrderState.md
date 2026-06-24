<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderState

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/OrderState.cs`

## Overview

`OrderState` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new OrderState();
```

## See Also

- [Complete Class Catalog](../catalog)