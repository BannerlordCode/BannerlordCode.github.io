---
title: "ReferenceMBEvent"
description: "A ref-aware listener container for CampaignEvents whose final callback argument can be changed by each subscriber."
---
# ReferenceMBEvent

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ReferenceMBEvent<T1>` through `ReferenceMBEvent<T1, T2, T3>`  
**Base:** `ReferenceIMBEvent<T1>` through `ReferenceIMBEvent<T1, T2, T3>`, plus `IMbEventBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ReferenceMBEvent.cs`

## One-line responsibility

`ReferenceMBEvent` dispatches owner-scoped listeners whose final argument is passed by reference, allowing the event chain to accumulate or change a decision value in place.

## Mental model

This is the `ref` counterpart to [MbEvent](../MbEvent). It is used when the campaign dispatcher asks several listeners to contribute to a mutable result, such as a priority or permission value. Its generic forms support one, two, or three parameters; the final parameter is the `ref` value and the earlier parameters are context.

The public [CampaignEvents](../CampaignEvents) property normally exposes one of the `ReferenceIMBEvent<T1>` through `ReferenceIMBEvent<T1, T2, T3>` interfaces, not the concrete class. A mod can register and clear a listener but should not invoke a global event directly. The dispatcher owns the invocation order and the state transition around it.

## Dependency graph

```text
Campaign action / dispatcher
          |
          v
CampaignEvents.IsSettlementBusyEvent
          |
ReferenceIMBEvent<Settlement, object, int>
          |
ReferenceMBEvent<T1, T2, T3>.Invoke(t1, t2, ref t3)
          |
  listeners update the shared ref result
```

- `ReferenceAction<T1>` is `ref T1`.
- `ReferenceAction<T1, T2>` is `(T1, ref T2)`.
- `ReferenceAction<T1, T2, T3>` is `(T1, T2, ref T3)`.
- Each registration stores its owner and callback in a nested `EventHandlerRec`; registrations are non-serialized and newest-first.
- [ReferenceIMBEvent](../ReferenceIMBEvent) is the subscription contract. [CampaignEventReceiver](../CampaignEventReceiver) and [CampaignEventDispatcher](../CampaignEventDispatcher) describe the surrounding campaign lifecycle.

## When to use and when not to

Use a `ReferenceIMBEvent` exposed by `CampaignEvents` when the source event explicitly expects a `ReferenceAction` callback. Treat the final value as shared decision state: read the incoming value, update it according to the documented contract, and leave unrelated event state alone.

Do not use a reference event as a general notification, cast a normal `Action` to `ReferenceAction`, or call the concrete `Invoke` method on a global event to force a result. Use a normal `MbEvent` for notifications and the relevant Action or Model for world mutations.

## Public contract

### `AddNonSerializedListener(object owner, ReferenceAction callback)`

Adds a `ReferenceAction` with an explicit owner. The implementation inserts the record at the list head and does not deduplicate by owner or delegate.

### `Invoke`

The concrete class invokes listeners synchronously. For one-parameter events the parameter is `ref`; for two- and three-parameter events the final parameter is `ref`. Each callback observes the value left by the preceding callback, so order can affect the resulting decision.

### `ClearListeners`

Removes the first record whose owner is the supplied object from this event's list. Use the same owner used during registration and do not assume one call repairs duplicate registrations.

## Real `ref` subscription

`VillagersInNeed` uses the source-confirmed three-parameter event to contribute a settlement-busy priority:

```csharp
CampaignEvents.IsSettlementBusyEvent.AddNonSerializedListener(
    this,
    (ReferenceAction<Settlement, object, int>)IsSettlementBusy);

private void IsSettlementBusy(
    Settlement settlement,
    object asker,
    ref int priority)
{
    if (settlement == _village && asker != this)
    {
        priority = Math.Max(priority, SettlementBusyPriority);
    }
}
```

The callback changes the `ref int` supplied by the event chain. It does not create a settlement, open a menu, or persist the priority. Clear the owner when the quest or behavior no longer participates.

## Risks and lifecycle boundaries

- A `ref` callback can overwrite a value that another listener or the dispatcher supplied. Follow the source event's accumulation rule and preserve existing values when the condition does not apply.
- Listener exceptions propagate synchronously; there is no isolation boundary around one callback.
- The event stores a strong owner/delegate reference and the list is not serialized. Clear listeners during teardown and re-register after load as required by the owner lifecycle.
- This mechanism does not make a callback thread-safe. Campaign objects, native objects, and UI objects must be accessed from their supported lifecycle/thread.

## Navigation

### Parent and related entry points

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [ReferenceIMBEvent](../ReferenceIMBEvent)
- [MbEvent](../MbEvent)
- [CampaignEventDispatcher](../CampaignEventDispatcher)

### Bilingual and sibling links

- Chinese: `../../../zh/api/campaign/ReferenceMBEvent`
- Siblings: [MBCampaignEvent](../MBCampaignEvent) · [EventHandlerRec](../EventHandlerRec)
