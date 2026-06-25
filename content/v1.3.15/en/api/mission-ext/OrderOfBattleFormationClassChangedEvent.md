---
title: "OrderOfBattleFormationClassChangedEvent"
description: "Auto-generated class reference for OrderOfBattleFormationClassChangedEvent."
---
# OrderOfBattleFormationClassChangedEvent

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassChangedEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassChangedEvent.cs`

## Overview

`OrderOfBattleFormationClassChangedEvent` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
OrderOfBattleFormationClassChangedEvent instance = ...;
```

## See Also

- [Area Index](../)