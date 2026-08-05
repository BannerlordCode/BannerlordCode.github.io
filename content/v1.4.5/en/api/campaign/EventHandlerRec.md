---
title: "EventHandlerRec"
description: "The internal owner, delegate, and linked-list record used by MbEvent and ReferenceMBEvent listener containers."
---
# EventHandlerRec

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `internal class EventHandlerRec` and generic nested variants  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MbEvent.cs` and `ReferenceMBEvent.cs`

## One-line responsibility

`EventHandlerRec` is the private linked-list node that lets an event remember which owner registered a callback and which delegate should run next.

## Mental model

This is an implementation record, not a mod-facing event API. `MbEvent` and `ReferenceMBEvent` allocate one nested record per `AddNonSerializedListener` call. The record stores the callback, its owner object, and the next record in the list. The event container owns the list and decides when to invoke or unlink the record.

The source declares generic records inside each event arity, so `EventHandlerRec<T>` is not a globally constructible replacement for `EventHandlerRec<T1, T2>` or the reference-action variants. A mod should work through [CampaignEvents](../CampaignEvents), [MbEvent](../MbEvent), or [ReferenceMBEvent](../ReferenceMBEvent), not through this internal type.

## Dependency graph

```text
AddNonSerializedListener(owner, callback)
                |
                v
       EventHandlerRec(owner, callback, Next)
                |
                +--> MbEvent.Invoke / ClearListeners
                +--> ReferenceMBEvent.Invoke(ref typed result)
```

- [MbEvent](../MbEvent) and [ReferenceMBEvent](../ReferenceMBEvent) own these records; [CampaignEvents](../CampaignEvents) is the public subscription surface that normally creates them.
- `Owner` is compared by object identity during `ClearListeners`.
- `Action` or `ReferenceAction` is the delegate that receives the event arguments.
- `Next` preserves the newest-first linked-list order.
- The node is non-serialized because the containing listener list is runtime-only.

## When to use and when not to

Do use the record as a source-reading concept when diagnosing listener lifetime, duplicate subscriptions, cleanup, or dispatch order. Do not instantiate it, retain it, or expose it from a mod API: it is `internal`, nested, and owned by the event implementation.

For a real subscription, register an owner and callback on a public `CampaignEvents` interface:

```csharp
CampaignEvents.HourlyTickEvent.AddNonSerializedListener(
    this,
    OnHourlyTick);

CampaignEvents.HourlyTickEvent.ClearListeners(this);
```

The public code owns the lifecycle; the record only makes that ownership available to the container's cleanup pass.

## Internal contract

- The constructor captures the owner and callback and leaves `Next` for the containing event to set.
- `MbEvent` records use `Action` with zero through seven typed arguments.
- `ReferenceMBEvent` records use `ReferenceAction` with one through three arguments, where the final event value is passed by `ref`.
- `ClearListeners` removes a matching node from the linked list; the record has no public unsubscribe token and no automatic disposal hook.

## Risks and boundaries

- The owner reference is strong. A record can keep a ViewModel, behavior, or other object alive until its event list is cleaned.
- Duplicate registrations create duplicate records. Removing one matching record does not establish that every duplicate has gone away.
- The callback can throw, mutate campaign state, or assume a lifecycle that has already ended. The record does not validate any of those conditions.
- Because the list is not save data, save/load cannot be used as a listener cleanup mechanism. Register and clear from the owning lifecycle callbacks.

## Navigation

### Parent and related entry points

- [Campaign API](../)
- [MbEvent](../MbEvent)
- [ReferenceMBEvent](../ReferenceMBEvent)
- [CampaignEvents](../CampaignEvents)

### Bilingual and sibling links

- Chinese: `../../../zh/api/campaign/EventHandlerRec`
- Siblings: [MBCampaignEvent](../MBCampaignEvent) · [ReferenceIMBEvent](../ReferenceIMBEvent)
