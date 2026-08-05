---
title: "ReferenceIMBEvent"
description: "The public ref-aware subscription interface used by CampaignEvents for one to three context values and a mutable final result."
---
# ReferenceIMBEvent

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public interface ReferenceIMBEvent<T1>` through `ReferenceIMBEvent<T1, T2, T3>`  
**Base:** `IMbEventBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ReferenceIMBEvent.cs`

## One-line responsibility

`ReferenceIMBEvent<T1>` through `ReferenceIMBEvent<T1, T2, T3>` exposes only the safe subscription and owner-cleanup surface for a Campaign event whose concrete dispatcher passes the final argument by reference.

## Mental model

The interface is intentionally smaller than [ReferenceMBEvent](../ReferenceMBEvent). It declares `AddNonSerializedListener` and `ClearListeners`, but not `Invoke`. [CampaignEvents](../CampaignEvents) returns this interface for ref-aware events so a mod can contribute to a decision without pretending to own the dispatcher or its surrounding state transition.

The generic arity describes context before the mutable result:

| Interface | Callback shape |
|---|---|
| `ReferenceIMBEvent<T1>` | `ref T1` |
| `ReferenceIMBEvent<T1, T2>` | `T1, ref T2` |
| `ReferenceIMBEvent<T1, T2, T3>` | `T1, T2, ref T3` |

The delegate definitions live in `ReferenceAction.cs`; the concrete [ReferenceMBEvent](../ReferenceMBEvent) stores the owner and callback records and performs synchronous invocation.

## Dependencies

The public properties on [CampaignEvents](../CampaignEvents) return this interface, while [CampaignBehaviorBase](../CampaignBehaviorBase) and [CampaignEventReceiver](../CampaignEventReceiver) provide the normal listener owner lifecycle. The concrete [ReferenceMBEvent](../ReferenceMBEvent) implements the interface and performs the `ref` dispatch.

## When to use and when not to

Use the interface returned by a concrete `CampaignEvents` property when the source signature is a `ReferenceAction`. Register from a behavior, quest, or ViewModel with a stable owner and call `ClearListeners` with that same owner during teardown.

Do not instantiate an interface, cast it to a concrete event to invoke it, or use it for an ordinary notification. The event's source decides what the `ref` value means; the interface does not define a general mutation protocol.

## Public contract

### `AddNonSerializedListener(object owner, ReferenceAction action)`

Adds a non-serialized callback associated with the owner. Registration is not persisted and is not automatically deduplicated.

### `ClearListeners(object owner)`

Asks the event implementation to remove a listener record owned by the supplied object. Use the exact same owner reference used during registration; one call should not be treated as a repair for accidental duplicate registrations.

The interface provides no `Invoke` method by design. Invocation remains inside the campaign event owner and dispatcher.

## Real acquisition and subscription

`CampaignEvents.IsSettlementBusyEvent` exposes a concrete three-argument interface. The source `VillagersInNeed` subscription matches its `ReferenceAction<Settlement, object, int>` shape:

```csharp
CampaignEvents.IsSettlementBusyEvent.AddNonSerializedListener(
    this,
    (ReferenceAction<Settlement, object, int>)IsSettlementBusy);
```

The `Settlement` and asker object are context; the `ref int priority` is the value the listener may raise. The normal mod boundary is the event property and the owner lifecycle, not the concrete event's private linked list.

## Risks and lifecycle boundaries

- The final `ref` argument is shared across the synchronous listener chain. Preserve values you do not own and follow the specific event's contract for combining results.
- Non-serialized registration must be repeated after the owning behavior or ViewModel is recreated. Store durable business state separately through the appropriate save contract.
- A stale owner or missing `ClearListeners` can retain callbacks and produce duplicate or out-of-lifecycle execution.
- The interface does not provide thread dispatch, exception isolation, or null validation. Respect the Campaign event's documented timing and object lifetime.

## Navigation

### Parent and related entry points

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [ReferenceMBEvent](../ReferenceMBEvent)
- [CampaignEventReceiver](../CampaignEventReceiver)
- [CampaignBehaviorBase](../CampaignBehaviorBase)

### Bilingual and sibling links

- Chinese: `../../../zh/api/campaign/ReferenceIMBEvent`
- Siblings: [MBCampaignEvent](../MBCampaignEvent) · [MbEvent](../MbEvent) · [EventHandlerRec](../EventHandlerRec)
