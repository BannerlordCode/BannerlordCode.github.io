---
title: "MBCampaignEvent"
description: "A campaign-time periodic event object that schedules its own handler callbacks through CampaignPeriodicEventManager."
---
# MBCampaignEvent

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MBCampaignEvent`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## One-line responsibility

`MBCampaignEvent` stores handlers for a campaign-time periodic signal and advances the next trigger time when its manager calls `CheckUpdate`; it is not the ordinary `CampaignEvents` subscription surface.

## Mental model

There are two different event families in Campaign:

- [CampaignEvents](../CampaignEvents) exposes long-lived gameplay notifications as `IMbEvent` values. A mod normally subscribes to those from `CampaignBehaviorBase.RegisterEvents()`.
- `MBCampaignEvent` is an instance-backed periodic event. `CampaignPeriodicEventManager.CreatePeriodicEvent` adds it to `Campaign.Current.CustomPeriodicCampaignEvents`, and the manager later calls `CheckUpdate` from its campaign tick path.

The periodic event owns its handler list and trigger bookkeeping. `Campaign` and `CampaignPeriodicEventManager` own whether the event is reached and removed. Do not create one just to observe an existing `CampaignEvents` notification, and do not call `RunHandlers` to fabricate a state transition that should have come from an Action or the campaign dispatcher.

## Lifecycle and dependency graph

```text
CampaignPeriodicEventManager.CreatePeriodicEvent
              |
              v
Campaign.Current.CustomPeriodicCampaignEvents
              |
              v
        MBCampaignEvent
              |
              v
  AddHandler -> CheckUpdate -> handler callbacks
              |
              v
       DeletePeriodicEvent -> deferred manager removal
```

- The lifecycle owner is [Campaign](../Campaign) and its [CampaignPeriodicEventManager](../CampaignPeriodicEventManager); ordinary observation belongs on [CampaignEvents](../CampaignEvents).
- The periodic constructor stores `TriggerPeriod`, sets `InitialWait`, and initializes the next trigger to `CampaignTime.Now + InitialWait`.
- `CampaignPeriodicEventManager` checks custom events during its periodic signal. While the next trigger is past and `isEventDeleted` is false, `CheckUpdate` runs handlers with the current `CampaignTime` and advances by `TriggerPeriod`.
- `DeletePeriodicEvent` only marks the object. The manager removes marked entries during its cleanup pass; deleting a reference does not immediately remove it from the manager's list.
- `CreatePeriodicUIEvent` is a separate `MapScreen`-owned list for UI periodic work. The event object itself does not choose a thread or map state.

## When to use and when not to

Use `CampaignPeriodicEventManager.CreatePeriodicEvent` when a feature genuinely needs a campaign-time periodic callback and can own the returned event until deletion. Use `CampaignEvents.HourlyTickEvent`, `DailyTickEvent`, or another existing event when the feature only needs to observe a built-in lifecycle signal.

Do not use `MBCampaignEvent` as a timer that runs outside campaign ticks, as a replacement for `CampaignBehaviorBase.SyncData`, or as a way to mutate Heroes, parties, settlements, or diplomacy directly. The callback still needs the correct Action, Model, or behavior boundary for any world change.

## Public contract

### `MBCampaignEvent(string eventName)`

The string constructor records the diagnostic `description`. It does not configure a periodic schedule.

### `MBCampaignEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

The periodic constructor stores the interval and first wait, then schedules the first eligible trigger relative to `CampaignTime.Now`. A non-positive interval can make catch-up behavior surprising; use a meaningful campaign interval.

### `AddHandler` and `RunHandlers`

`AddHandler` appends a `CampaignEventDelegate` to the instance list. `RunHandlers(params object[] delegateParams)` invokes each registered delegate with this event and the supplied arguments. The implementation does not catch handler exceptions, so an exception escapes the campaign tick path.

### `Unregister(object instance)`

Removes every handler whose delegate `Target` is the supplied instance. This is different from `MbEvent.ClearListeners`, which removes a matching owner record from one listener list. The `MBCampaignEvent` callback delegate should therefore be an instance method when instance-based unregistration is required.

### `CheckUpdate` and `DeletePeriodicEvent`

`CheckUpdate` may run more than once in one call when the campaign is already past multiple trigger times. `DeletePeriodicEvent` sets `isEventDeleted`; it does not invoke handlers or remove the object from `Campaign.Current.CustomPeriodicCampaignEvents` synchronously.

## Real registration example

`CampaignPeriodicEventManager.CreatePeriodicEvent` is the source-backed custom-event entry point used by Campaign code. A handler receives the event and the argument array; the periodic manager supplies the current time from `CheckUpdate`:

```csharp
private static void OnPeriodicCampaignTick(
    MBCampaignEvent campaignEvent,
    params object[] parameters)
{
    CampaignTime now = (CampaignTime)parameters[0];
    // Read or dispatch through the owning campaign system at this time.
}

MBCampaignEvent campaignEvent =
    CampaignPeriodicEventManager.CreatePeriodicEvent(
        CampaignTime.Hours(1f),
        CampaignTime.Hours(1f));
campaignEvent.AddHandler(OnPeriodicCampaignTick);
```

The callback is not a save contract. If the feature needs durable state, keep that state in its campaign behavior and implement the behavior's `SyncData(IDataStore)` contract separately. Delete the event from the same lifecycle owner that created it.

## Risks and boundaries

- `MBCampaignEvent` holds delegates and does not provide owner-based automatic cleanup. A long-lived campaign event can retain a behavior or UI object until `Unregister` or deletion is performed.
- `RunHandlers` and `CheckUpdate` execute synchronously on the caller's campaign tick path. They do not marshal work to a background thread and do not protect against re-entrant world mutation.
- Catch-up uses repeated `NextTriggerTime += TriggerPeriod`; a handler must tolerate more than one invocation when the campaign clock has advanced past several intervals.
- `isEventDeleted` is a manager cleanup flag, not proof that no callback is currently executing. Do not use it as a substitute for an owner lifecycle guard.
- Do not retain `CampaignTime` arguments as if they were a save snapshot, and do not assume a periodic event recreates itself after loading.

## Navigation

### Parent and related entry points

- [Campaign API](../)
- [CampaignEvents](../CampaignEvents)
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignEventDispatcher](../CampaignEventDispatcher)

### Bilingual and sibling links

- Chinese: `../../../zh/api/campaign/MBCampaignEvent`
- Siblings: [MbEvent](../MbEvent) · [ReferenceMBEvent](../ReferenceMBEvent) · [ReferenceIMBEvent](../ReferenceIMBEvent)
