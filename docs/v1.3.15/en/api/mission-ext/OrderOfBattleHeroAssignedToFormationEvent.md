<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleHeroAssignedToFormationEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroAssignedToFormationEvent

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroAssignedToFormationEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleHeroAssignedToFormationEvent.cs`

## Overview

`OrderOfBattleHeroAssignedToFormationEvent` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AssignedHero` | `public Agent AssignedHero { get; }` |
| `AssignedFormation` | `public Formation AssignedFormation { get; }` |

## Usage Example

```csharp
var value = new OrderOfBattleHeroAssignedToFormationEvent();
```

## See Also

- [Complete Class Catalog](../catalog)