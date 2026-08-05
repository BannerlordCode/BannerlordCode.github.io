---
title: "MbEvent"
description: "The owner-scoped non-serialized listener container behind CampaignEvents, including its one- through seven-argument generic forms."
---
# MbEvent

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MbEvent` and `MbEvent<T1>` through `MbEvent<T1, T2, T3, T4, T5, T6, T7>`  
**Base:** `IMbEvent` and `IMbEvent<T1>` through `IMbEvent<T1, T2, T3, T4, T5, T6, T7>`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MbEvent.cs`

## One-line responsibility

`MbEvent` keeps an in-memory linked list of non-serialized callbacks, invokes them with the event's typed arguments, and removes listener records by owner identity.

## Mental model

`MbEvent` is the implementation family behind many static [CampaignEvents](../CampaignEvents) properties. The public Campaign surface normally exposes an `IMbEvent` interface, so a mod registers a callback but does not invoke the global event itself. The campaign dispatcher or owning system raises the event after the relevant state change or tick.

Each registration stores an `owner`, a delegate, and a next pointer. `AddNonSerializedListener` inserts the new record at the head of the list, so callbacks run newest-first. The list is runtime-only; it is not a `SyncData` field or a saveable object graph. The owner is an explicit cleanup key, not a weak reference.

## Generic forms and dependency graph

```text
Campaign behavior / ViewModel
          |
          | AddNonSerializedListener(owner, typed Action callback)
          v
CampaignEvents -> typed IMbEvent -> typed MbEvent
          |
          | Campaign dispatcher invokes the concrete event
          v
     listener callbacks
```

- The non-generic `MbEvent` carries `Action` callbacks with no arguments.
- `MbEvent<T1>` through `MbEvent<T1, T2, T3, T4, T5, T6, T7>` carry the corresponding `Action` arity. The event source chooses the argument order and meaning; the container does not validate a domain invariant.
- `IMbEventBase.ClearListeners(object)` is the common cleanup boundary for typed events. `IMbEvent` additionally declares the zero-argument registration method.
- [CampaignEventReceiver](../CampaignEventReceiver) and [CampaignBehaviorBase](../CampaignBehaviorBase) explain the campaign-side lifecycle; [CampaignEventDispatcher](../CampaignEventDispatcher) explains how gameplay changes reach the public event objects.

## When to use and when not to

Use the `CampaignEvents` property that exposes the needed event and register from a behavior or other object with a clear lifetime. Pass that same owner to `ClearListeners` during teardown. Use the `ReferenceIMBEvent` family when the event intentionally allows a `ref` result parameter.

Do not instantiate a replacement for `CampaignEvents`, call `Invoke` on a global event to simulate gameplay, or treat a listener as a persisted subscription. Use the relevant Action or campaign entry point to change world state; use the event only to observe the resulting lifecycle.

## Public contract

### `AddNonSerializedListener(object owner, Action callback)`

Creates a record containing the owner and delegate, then links it at the front of the list. Repeated registration of the same method is repeated registration; the API does not deduplicate by owner or delegate.

### `Invoke(typed arguments)`

The concrete `MbEvent` classes expose `Invoke` for their owning campaign code. It walks the linked list synchronously and calls every action. The `IMbEvent` interfaces intentionally expose registration and cleanup, not invocation, to ordinary subscribers.

### `ClearListeners(object owner)`

Searches the list by reference identity (`Owner != owner`) and removes the first matching record. One call is not a general “remove every duplicate registration” guarantee; pair registration discipline with one owner record per event, or repeat cleanup when a code path intentionally registered more than once.

Listener actions are not wrapped in exception handling. An exception can abort the current event dispatch and propagate to the caller's campaign or UI path.

## Real subscription and cleanup

The source `MapSaveVM` subscribes to save notifications with itself as the owner and later clears the same owner:

```csharp
CampaignEvents.OnSaveStartedEvent.AddNonSerializedListener(
    this,
    OnSaveStarted);

// During the ViewModel's teardown:
CampaignEvents.OnSaveStartedEvent.ClearListeners(this);
```

Campaign behaviors use the same contract for tick callbacks:

```csharp
CampaignEvents.DailyTickEvent.AddNonSerializedListener(
    this,
    OnDailyTick);
```

The callback is an observation hook. `OnDailyTick` still belongs to the behavior's campaign lifecycle and must not assume that every map object or UI object is alive merely because the campaign event exists.

## Risks and lifecycle boundaries

- The listener list is non-serialized. Recreate subscriptions during the behavior or ViewModel lifecycle after a load; do not put the delegate in `SyncData`.
- The event stores a strong owner/delegate reference. Forgetting `ClearListeners` can keep a dead behavior, ViewModel, or scene object reachable and can cause duplicate callbacks after reinitialization.
- New registrations run before older registrations. Do not rely on registration order for a mutation protocol unless the owning event explicitly guarantees that order.
- Event callbacks run synchronously on the thread that invokes the event. Campaign state, native Mission state, and UI state each have their own lifecycle/thread constraints.
- A callback can receive state that is already being changed by the dispatcher. If it must mutate campaign state, use the source-confirmed Action and respect its event cascade rather than writing fields in the callback.

## Navigation

### Parent and related entry points

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [CampaignEventReceiver](../CampaignEventReceiver)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignEventDispatcher](../CampaignEventDispatcher)

### Bilingual and sibling links

- Chinese: `../../../zh/api/campaign/MbEvent`
- Siblings: [MBCampaignEvent](../MBCampaignEvent) · [EventHandlerRec](../EventHandlerRec) · [ReferenceMBEvent](../ReferenceMBEvent) · [ReferenceIMBEvent](../ReferenceIMBEvent)
