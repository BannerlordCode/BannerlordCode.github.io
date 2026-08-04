---
title: "CampaignPeriodicEventManager"
description: "The Campaign-owned scheduler: it advances MobileParty, Settlement, Town, Hero, and Clan ticks with saveable round-robin tickers and manages custom MBCampaignEvent instances through CreatePeriodicEvent."
---

# CampaignPeriodicEventManager

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `public class CampaignPeriodicEventManager`<br>
**Base:** none<br>
**1.3.15 source:** `R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CampaignPeriodicEventManager.cs`<br>
**1.4.5 comparison:** `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignPeriodicEventManager.cs`

## Responsibility in one sentence

It is the `Campaign`-owned time scheduler: it turns game time into sliced entity ticks and advances custom periodic events; it is not a constructible public service or the `CampaignEvents` event bus.

## Mental model: two clocks, one owner

Treat it as a **scheduler owned by the campaign**:

1. `Campaign` constructs one `CampaignPeriodicEventManager` and stores it in `[SaveableField(210)] private _campaignPeriodicEventManager`. The constructor is `internal`; the source has no `Current` property and no public instance lookup.
2. `Campaign.OnDataLoadFinished` calls `InitializeTickers()`, binding global object collections to internal `PeriodicTicker<T>` callbacks.
3. At the correct map-tick stages, `Campaign.Tick()` calls `OnTick`, `MobilePartyHourlyTick`, `TickPeriodicEvents`, and `TickPartialHourlyAi`. Mods should not call these `internal` methods directly.
4. The only public extension entry is static `CreatePeriodicEvent(triggerPeriod, initialWait)`. It creates an [MBCampaignEvent](../MBCampaignEvent/) and immediately appends it to `Campaign.Current.CustomPeriodicCampaignEvents`; the manager later checks and runs its handlers.

This creates two distinct choices:

- For a built-in daily, hourly, or per-object cadence, subscribe to the corresponding `DailyTick*` or `HourlyTick*` event on [CampaignEvents](../CampaignEvents/).
- For a custom interval such as “every six in-game hours,” create an `MBCampaignEvent`. Do not treat `CampaignPeriodicEventManager` as `CampaignEventDispatcher` and call `OnXxx` methods on it.

## Lifecycle and actual scheduling order

### Initialization and built-in tickers

`InitializeTickers()` binds these collections to dispatcher receiver callbacks:

| Ticker | Collection | Forwarded callback | Meaning |
|---|---|---|---|
| MobileParty hourly | `MobileParty.All` | `MobileParty.HourlyTick()` | Native hourly party logic |
| MobileParty daily | `MobileParty.All` | `MobileParty.DailyTick()` | Native daily party logic |
| hourly party | `MobileParty.All` | `CampaignEventDispatcher.HourlyTickParty` | Per-party hourly event for behaviors/native systems |
| hourly settlement | shuffled `Settlement.All` | `HourlyTickSettlement` | Per-settlement hourly event |
| daily settlement | the same shuffled order | `DailyTickSettlement` | Settlement daily event |
| hourly clan | `Clan.All` | `HourlyTickClan` | Clan hourly event |
| daily party | `MobileParty.All` | `DailyTickParty` | Party daily event |
| daily town | `Town.AllTowns` | `DailyTickTown` | Town daily event |
| daily hero | `Hero.AllAliveHeroes` | `DailyTickHero` | Daily event for living heroes |
| daily clan | `Clan.All` | `DailyTickClan` | Clan daily event |
| partial AI | caravan/garrison/militia/villager/custom/patrol/bandit/lord/no-party-component collections | `TickPartialHourlyAi` | Sliced AI-hour progression; 1.3.15 uses `DeltaHours * 0.99` |
| quarter-daily party | `MobileParty.All` | `QuarterDailyPartyTick` | Four party passes per game day |

`PeriodicTicker<T>` does not walk every object on every render frame. It accumulates `TickDebt` and selects objects round-robin with `Index`; an empty collection clears its debt. Settlement order interleaves villages, castles, towns, and other settlements so one category is not processed as a single burst. In 1.3.15 every ticker is initialized with `doParallel: false`, so these callbacks run synchronously inside the campaign tick.

### Order inside `Campaign.Tick()`

1. When `dt > 0` (or during the first few frames), `CampaignEventDispatcher.Tick(_dt)` and `CampaignPeriodicEventManager.OnTick(_dt)` run first.
2. `OnTick` uses `MinimumPeriodicEventInterval = CampaignTime.Hours(0.05f)` (about three in-game minutes) as the polling floor, checks custom `MBCampaignEvent` instances, removes events marked for deletion, and signals the active `MapState`.
3. The same tick continues through map events and then the native mobile-party hourly ticker.
4. When `dt > 0`, `TickPeriodicEvents()` runs hourly, daily, and quarter-daily scheduling in that order; partial-hourly AI scheduling follows afterward.

`CreatePeriodicEvent` is therefore not a real-time timer. Once its game time is due, it still waits for the next manager signal; while the game is paused or there is no valid map tick, its handler does not run in a background thread.

## When to use it, and when not to

### Good reasons to use `CreatePeriodicEvent`

- A behavior needs a custom game-time interval that does not fit the existing daily/hourly public events.
- The schedule should live within campaign/session lifecycle and be reconstructible after load.
- The logic can run synchronously, tolerate catch-up calls, and execute inside a campaign tick.

### Inappropriate or dangerous uses

- Do not use it instead of `CampaignEvents.DailyTickEvent`, `DailyTickPartyEvent`, or another existing event. Use the built-in event when the cadence already matches.
- Do not pass `CampaignTime.Zero` or a negative `triggerPeriod`. `MBCampaignEvent.CheckUpdate()` uses `while (NextTriggerTime.IsPast)` and keeps adding `TriggerPeriod`; a zero or negative period can become an infinite loop.
- Do not treat `initialWait` as wall-clock delay or a thread sleep. It is an in-game `CampaignTime` offset from `CampaignTime.Now`.
- Do not create the event during module loading, when `Campaign.Current` is null, or before campaign session initialization. The factory directly accesses `Campaign.Current.CustomPeriodicCampaignEvents`.
- Do not wait, touch UI-thread state, or scan the whole map from a handler. Several overdue periods may run consecutively in one `CheckUpdate` call.

## Dependency graph

**Upstream / owner:**

- [Campaign](../../campaign/Campaign/) constructs and saves the manager and calls its internal advancement methods from `Campaign.Tick`.
- [CampaignTime](../CampaignTime/) supplies `Now`, `DeltaTime`, `Hours`, `Days`, and `IsPast` semantics.
- `MobileParty.All`, `Settlement.All`, `Town.AllTowns`, `Hero.AllAliveHeroes`, and `Clan.All` are the built-in ticker collections.

**Downstream:**

- [CampaignEventDispatcher](../CampaignEventDispatcher/) receives the built-in `HourlyTick*`, `DailyTick*`, `TickPartialHourlyAi`, and `QuarterDailyPartyTick` forwarding calls.
- [CampaignEvents](../CampaignEvents/) exposes those forwarded ticks as subscribable events; [CampaignBehaviorBase](../CampaignBehaviorBase/) is the normal mod owner.
- [MBCampaignEvent](../MBCampaignEvent/) receives custom event handlers; [SaveManager](../../save-system/SaveManager/) persists the manager's ticker state.

**Real native consumers:**

- `Campaign.cs` creates daily, hourly, and quarter-hourly `MBCampaignEvent` instances.
- `Army.cs` creates one-hour and 0.1-hour events and deletes them when an army is disbanded.
- `MapWeatherCampaignBehavior.cs` creates a weather event from `Campaign.Current.Models.MapWeatherModel.WeatherUpdateFrequency` inside `OnSessionLaunchedEvent`.
- `MapTracksCampaignBehavior.cs` creates a 0.25-hour track event; [CampaignBehaviorManager](../CampaignBehaviorManager/) handles behavior registration and reassembly after load.

## The only public entry: `CreatePeriodicEvent`

### `public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

The method:

1. Runs `new MBCampaignEvent(triggerPeriod, initialWait)`, whose constructor sets `NextTriggerTime` to `CampaignTime.Now + initialWait`.
2. Adds the new object to the current campaign's `CustomPeriodicCampaignEvents` list.
3. Returns the event so the caller can immediately attach a handler with `AddHandler`.

It does not validate `Campaign.Current`, period positivity, handler count, or duplicate creation, and it does not return a manager instance. The actual control surface is `MBCampaignEvent.AddHandler`, `Unregister`, and `DeletePeriodicEvent`.

### `MBCampaignEvent` timing and side effects

- On each manager signal, custom events are traversed backward and `CheckUpdate()` is called.
- `CheckUpdate()` may call `RunHandlers` several times in one signal until `NextTriggerTime` is no longer past; handlers receive an `object[]` containing the current `CampaignTime.Now` value.
- `DeletePeriodicEvent()` only sets `isEventDeleted = true`; the manager removes the object from the list after the current check loop. To avoid retaining an old delegate, call `Unregister(owner)` before marking it deleted.
- `Unregister(instance)` matches the delegate `Target` to the owner. Instance methods can be cleaned by owner; an anonymous closure's target should not be mistaken for the behavior owner.

## Real usage: create a cleanable six-hour event after session startup

This follows the actual 1.3.15 `MapWeatherCampaignBehavior` path: subscribe to `OnSessionLaunchedEvent`, then create the event through `CampaignPeriodicEventManager.CreatePeriodicEvent`. Behavior state is saved with `SyncData`; the event object is rebuilt within the session lifecycle.

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public sealed class SixHourClockBehavior : CampaignBehaviorBase
{
    private MBCampaignEvent _clockEvent;
    private int _runCount;

    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(
            this,
            new Action<CampaignGameStarter>(OnSessionLaunched));
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        if (_clockEvent != null)
        {
            return;
        }

        _clockEvent = CampaignPeriodicEventManager.CreatePeriodicEvent(
            CampaignTime.Hours(6f),
            CampaignTime.Hours(1f));
        _clockEvent.AddHandler(
            new MBCampaignEvent.CampaignEventDelegate(OnClockTick));
    }

    private void OnClockTick(MBCampaignEvent campaignEvent, params object[] delegateParams)
    {
        if (MobileParty.MainParty != null && MobileParty.MainParty.IsActive)
        {
            _runCount++;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("SixHourClockRunCount", ref _runCount);
    }

    public void StopClock()
    {
        if (_clockEvent == null)
        {
            return;
        }

        _clockEvent.Unregister(this);
        _clockEvent.DeletePeriodicEvent();
        _clockEvent = null;
    }
}
```

This example never calls `OnTick`, `CheckUpdate`, or dispatcher methods directly. `Campaign` advances the event during the correct map tick; `StopClock` causes the manager to remove it on the next scheduler signal.

## Event and save risks

- `Campaign._campaignPeriodicEventManager` and each `PeriodicTicker<T>` carry `[SaveableField]`, and `OnLoad` reconstructs ticker fields added for older saves. Do not reflectively rewrite those private fields.
- `CustomPeriodicCampaignEvents` is an internal `Campaign` list. The 1.3.15 source and `SaveableCampaignTypeDefiner` do not expose it as an ordinary mod persistence contract, and `MBCampaignEvent.handlers` is not behavior `SyncData`. Do not assume delegates, anonymous closures, or a `_clockEvent` reference survive a load.
- Save behavior state through [CampaignBehaviorBase](../CampaignBehaviorBase/) `SyncData(IDataStore)`, then recreate the event in `OnSessionLaunchedEvent` or the appropriate load phase. Native `MapWeatherCampaignBehavior` follows this “persist state, reattach event” pattern.
- Handlers execute synchronously; an uncaught exception returns into the campaign tick. Recheck validity before touching a `MobileParty`, `Settlement`, or `MapState` that may have ended.
- The list can catch up several periods in one signal. Do not assume one handler call equals exactly one hour/day, and do not unconditionally create another event of the same period from its handler.
- Event owner and behavior lifetime must match. When a behavior ends, clear its `CampaignEvents` listeners; for a custom event call `Unregister` and `DeletePeriodicEvent`, otherwise an old handler may run on later ticks.
- Use the event only with an active campaign and after the relevant object collections exist. Creating it too early or retaining it across campaigns can produce null references, duplicate scheduling, or stale object references.

## Version risks

The scheduler structure and call order are the same in 1.3.15 and 1.4.5: `Campaign` owns it, the same roughly twenty object tickers are saveable, the custom-event signal floor is `0.05` game hours, and the only public manager entry remains static `CreatePeriodicEvent`.

1.4.5 modernizes the source formatting but does not turn the manager into an instantiable service; `CampaignPeriodicEventManager.Current` still does not exist. Do not copy the stub's `var manager = CampaignPeriodicEventManager.Current`, and do not mistake the nested `PeriodicTicker<T>.ToString()` for a public manager method.

## Navigation

### ↑ Parent

- [Campaign extension API index](../)
- [Campaign](../../campaign/Campaign/)

### ↔ Sibling

- [CampaignEventDispatcher](../CampaignEventDispatcher/) - receives and fans out tick/event callbacks
- [CampaignEvents](../CampaignEvents/) - the tick event surface mods subscribe to
- [MBCampaignEvent](../MBCampaignEvent/) - the entity returned by `CreatePeriodicEvent`

### Related

- [CampaignBehaviorBase](../CampaignBehaviorBase/) · [CampaignBehaviorManager](../CampaignBehaviorManager/) · [CampaignGameStarter](../CampaignGameStarter/)
- [CampaignEventReceiver](../CampaignEventReceiver/) · [CampaignTime](../CampaignTime/)
- [MapWeatherCampaignBehavior](../MapWeatherCampaignBehavior/) · [MapTracksCampaignBehavior](../MapTracksCampaignBehavior/)
- [SaveManager](../../save-system/SaveManager/)
