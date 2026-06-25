---
title: "OrderOfBattleFormationWeightChangedEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleFormationWeightChangedEvent`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationWeightChangedEvent

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationWeightChangedEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationWeightChangedEvent.cs`

## Overview

`OrderOfBattleFormationWeightChangedEvent` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |

## Usage Example

```csharp
var example = new OrderOfBattleFormationWeightChangedEvent();
```

## See Also

- [Complete Class Catalog](../catalog)