---
title: "CampaignPeriodicEventManager"
description: "CampaignPeriodicEventManager drives party, settlement, hero, faction, and AI ticks and registers custom MBCampaignEvent instances for the active campaign runtime."
---
# CampaignPeriodicEventManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignPeriodicEventManager`  
**Base:** no explicit base class  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## One-sentence responsibility

It distributes campaign-time deltas across typed party, settlement, town, hero, and clan tickers and provides the entry point for adding a custom `MBCampaignEvent` to the active campaign's periodic queue.

## Mental Model

**Two kinds of periodic work**

The manager owns multiple `PeriodicTicker<T>` instances. During initialization they bind to `MobileParty.All`, `Settlement.All`, `Town.AllTowns`, `Hero.AllAliveHeroes`, `Clan.All`, and party-category collections, then send work to entity methods or [CampaignEventDispatcher](../CampaignEventDispatcher). Each ticker uses elapsed time and an index to process its collection progressively instead of walking every object on every render frame.

`Campaign.Tick` advances custom periodic signals, party-hourly work, hourly/daily/quarter-daily work, and partial AI ticks in a defined order. The `HourlyTickPartyEvent` and `DailyTickEvent` exposed by [CampaignEvents](../CampaignEvents) therefore have timing semantics; they are not ordinary timers that a mod can reorder.

**Custom periodic events**

`CreatePeriodicEvent(triggerPeriod, initialWait)` creates an `MBCampaignEvent` and appends it to `Campaign.Current.CustomPeriodicCampaignEvents`. The returned event must receive a real handler through `AddHandler`; the manager calls `CheckUpdate` when its signal phase runs, and removes events marked for deletion during that phase.

This entry point is appropriate for low-frequency campaign-time work with a clear owner lifecycle. It does not replace entity-specific `CampaignEvents` ticks, expose the internal tickers for modification, or make per-frame work safe.

Custom events are runtime state, not save objects that `Campaign` restores automatically. `CustomPeriodicCampaignEvents` is recreated by `Campaign.OnInitialize`, the campaign save collector does not collect that list, and an `MBCampaignEvent`'s handlers and next trigger time are not restored with it. If a mod needs the task in both new campaigns and loaded campaigns, register it again from `OnNewGameCreated`, `OnGameLoadFinished`, or an equivalent owner lifecycle callback after the campaign is initialized; persist the behavior's own business state separately through `SyncData`.

## When to use and when not to use

- **Use it:** from a campaign behavior or another explicitly owned system to register a low-frequency `CampaignTime` task, or to understand the timing of built-in entity ticks.
- **Do not use it:** to access or reorder internal `PeriodicTicker<T>` instances, or to create an event from the main menu or without a live `Campaign.Current`.
- **Do not use it:** to replace `CampaignEvents.HourlyTickPartyEvent`, `DailyTickEvent`, or another existing entity notification with a custom timer.
- **Delete it:** retain the returned `MBCampaignEvent` and call `DeletePeriodicEvent()` when the owner ends; dropping the field reference does not remove the event from the current campaign list.

## Dependencies

- **Owner and clock:** [Campaign](../Campaign) constructs the manager, advances it from `Tick`, and owns the custom [MBCampaignEvent](../MBCampaignEvent) list.
- **Entity inputs:** the manager consumes active collections of [MobileParty](../MobileParty), [Settlement](../Settlement), [Hero](../Hero), [Clan](../Clan), and [Town](../Town).
- **Event downstream:** built-in tickers forward notifications through [CampaignEventDispatcher](../CampaignEventDispatcher) to [CampaignEvents](../CampaignEvents). A mod normally subscribes from [CampaignBehaviorBase](../CampaignBehaviorBase) rather than manipulating manager state.

## Built-in ticks and timing

| Phase | Work or notification | Boundary |
| --- | --- | --- |
| `OnTick` / periodic signal | Checks `MBCampaignEvent` due times and removes marked events. | Governed by a minimum interval; it is not a per-frame callback. |
| Party hourly tick | Progressively processes `MobileParty.All`. | Suited to entity hourly logic, not an all-party snapshot barrier. |
| Hourly periodic work | Party, settlement, and clan tickers call the dispatcher. | Observe the corresponding [CampaignEvents](../CampaignEvents) event. |
| Daily periodic work | Party, town, settlement, hero, and clan tickers. | Work can be distributed across time; do not assume every object completes at one instant. |
| Partial AI ticks | Caravan, garrison, militia, villager, custom, patrol, bandit, lord, and component-less party groups. | Driven by category collections, which change when party components change. |

## Real example: register and delete a custom periodic event

This pattern follows the v1.4.5 `MapTracksCampaignBehavior` implementation: `RegisterEvents()` subscribes only to new-campaign and load-finished notifications, and both lifecycle entry points call an idempotent method that creates and binds the event; the owner marks it for deletion when its system ends. This avoids treating a runtime handle as save-restored state.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.SaveSystem;

public sealed class MapReportBehavior : CampaignBehaviorBase
{
    private MBCampaignEvent _quarterHourlyReport;

    public override void RegisterEvents()
    {
        CampaignEvents.OnNewGameCreatedEvent.AddNonSerializedListener(this, OnNewGameCreated);
        CampaignEvents.OnGameLoadFinishedEvent.AddNonSerializedListener(this, OnGameLoadFinished);
    }

    private void OnNewGameCreated(CampaignGameStarter gameStarter)
    {
        EnsureQuarterHourlyReport();
    }

    private void OnGameLoadFinished()
    {
        EnsureQuarterHourlyReport();
    }

    private void EnsureQuarterHourlyReport()
    {
        if (Campaign.Current == null ||
            (_quarterHourlyReport != null && !_quarterHourlyReport.isEventDeleted))
        {
            return;
        }

        _quarterHourlyReport = CampaignPeriodicEventManager.CreatePeriodicEvent(
            CampaignTime.Hours(0.25f),
            CampaignTime.Hours(0.1f));
        _quarterHourlyReport.AddHandler(OnQuarterHourlyReport);
    }

    private void OnQuarterHourlyReport(MBCampaignEvent campaignEvent, object[] delegateParams)
    {
        if (PartyBase.MainParty.IsValid)
        {
            MobileParty mainParty = MobileParty.MainParty;
            CampaignTime now = CampaignTime.Now;
        }
    }

    public void Stop()
    {
        _quarterHourlyReport?.DeletePeriodicEvent();
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

If the task has persistent state, synchronize its own fields in the behavior's `SyncData`; the event handle and its handler lifecycle must also follow behavior registration and removal.

## Risks and save boundaries

- **Campaign context:** `CreatePeriodicEvent` immediately accesses `Campaign.Current.CustomPeriodicCampaignEvents`; calling it without a campaign fails.
- **Deferred deletion:** `DeletePeriodicEvent()` marks an event, and the manager removes it during the next signal phase. A handler must tolerate the interval between marking and removal.
- **Short periods:** a very short `triggerPeriod` can accumulate time debt and run repeatedly, blocking campaign ticks. Keep handlers light and re-entrant.
- **Collection assumptions:** built-in tickers bind to campaign collections and categories during initialization. Mutating internal collections or creating parties at the wrong phase can desynchronize ticks, registration, and event ordering.
- **Built-in versus custom save boundaries:** the built-in `PeriodicTicker<T>` index and tick debt are save-managed manager state; the custom event list, handlers, and an `MBCampaignEvent`'s next trigger time are runtime state and are not automatically restored by the campaign save collector. Re-register events from a post-load campaign lifecycle callback and sync the task's own persistent fields through the behavior's `SyncData`; do not cache old entity collections before load finishes.

## Version note

This page follows v1.4.5 `CampaignPeriodicEventManager.cs`, `Campaign.cs`, and `MBCampaignEvent.cs`. For another version, recheck minimum intervals, AI categories, and custom-event deletion timing instead of treating internal ticker names as stable mod extension points.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignEventDispatcher](../CampaignEventDispatcher) · [CampaignBehaviorBase](../CampaignBehaviorBase)
- Related types: [MBCampaignEvent](../MBCampaignEvent) · [MobileParty](../MobileParty) · [Settlement](../Settlement) · [Hero](../Hero) · [Clan](../Clan)
