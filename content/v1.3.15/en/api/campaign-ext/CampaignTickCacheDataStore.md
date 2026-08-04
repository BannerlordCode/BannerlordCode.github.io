---
title: "CampaignTickCacheDataStore"
description: "The Campaign-private per-frame MobileParty movement cache: initialized, consumed, invalidated, and rebuilt by the campaign runtime; mods must not create, query, or write it directly."
---
# CampaignTickCacheDataStore

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignTickCacheDataStore`
**Base:** `System.Object`
**File:** `TaleWorlds.CampaignSystem/CampaignTickCacheDataStore.cs`

## One-line responsibility

It stages `MobileParty` data in per-frame categories such as moving, stationary, transitioning, and army leader so the campaign map can advance parties in parallel and finish locator/navigation work at frame end. It is an internal execution cache, not a mod-facing state store.

## Mental model

Treat it as `Campaign`'s **single-frame work area**, not as a queryable service:

- **Owner:** `Campaign` has a private `_tickData`. The game creates it through `internal CampaignTickCacheDataStore()` while constructing `Campaign`; a mod cannot `new` it and there is no public `Campaign.TickData` property.
- **Cached data:** each slot contains a `MobileParty` and one `MobileParty.CachedPartyVariables` value. These values support current-frame movement, target capture, and category selection; they are not a `CampaignTime` history or a public previous-frame world snapshot.
- **Layer:** it belongs to the internal Campaign map movement pipeline, below mod extension points such as [CampaignEvents](../CampaignEvents), [CampaignBehaviorBase](../CampaignBehaviorBase), and campaign Models. It calls internal `MobileParty` tick methods and the [Campaign](../../campaign/) `MobilePartyLocator`, and uses `LeaveSettlementAction` for the resulting settlement-leave world change.
- **Consumption:** `RealTick(dt, realDt)` validates capacity, initializes party data, captures frame-start targets, classifies parties, advances the categories in parallel, and finishes locator/navigation work at frame end. `Tick()` consumes the exiting-settlement list, sorts it, and applies the action.
- **Invalidation:** there is no public `Invalidate()` call. Every `ValidateMobilePartyTickDataCache` resets per-frame counters to `-1`; when the party count reaches capacity it rebuilds all work arrays. The next `RealTick` initializes slots from the current `MobileParty` list and classifies them again, so a mod must not clear or rewrite slots itself.

Some API listings show `Compare(MobileParty, MobileParty)` next to this type. In the source, `MobilePartyComparer` is a private nested class; its `Compare` method is not a mod-visible `CampaignTickCacheDataStore` API.

## Lifecycle and call order

### New campaign and first frame

The `Campaign` constructor creates both `CampaignPeriodicEventManager` and private `_tickData`. On the first real-time loop, `Campaign.RealTick` changes `GameStarted` from false to true, calls `InitializeDataCache()`, and then calls `RealTick(_dt, realDt)` in the same frame.

This means the store has no usable party slots immediately after construction, while the campaign world and party list are still being assembled. Do not reflect into it while `CampaignGameStarter` is building the world or object lists are incomplete.

### Each real-time frame

`Campaign.RealTick` first advances map time and campaign entity `OnTick`, then passes `_dt` and `realDt` to the store. `CampaignTickCacheDataStore.RealTick` proceeds as follows:

1. `ValidateMobilePartyTickDataCache(Campaign.Current.MobileParties.Count)` reallocates arrays, when needed, to twice the current capacity and resets frame, grid-change, transition, and exiting-settlement counters to `-1`.
2. Every current `MobileParty` runs `InitializeCachedPartyVariables`, writing the party and its `CachedPartyVariables` into the same slot.
3. `CacheTargetPartyVariablesAtFrameStart` captures target data at the start of the frame, so parallel movement does not observe inconsistent target state.
4. Active parties are classified using `IsMoving`, `IsArmyLeader`, `IsTransitionInProgress`, and `IsAttachedArmyMember` into moving, stationary, transitioning, and army-leader index queues.
5. `TWParallel.For` processes those queues. Moving parties call `FillCurrentTickMoveDataForMovingMobileParty` and `TryToMoveThePartyWithCurrentTickMoveData`; stationary parties call `TickForStationaryMobileParty`; transitioning parties call `CommonTransitioningPartyTick`.
6. The store updates visibility around the main party, sorts grid-change entries by party ID and calls `Campaign.MobilePartyLocator.UpdateLocator`, then finishes navigation transitions.

`Campaign.Tick()` is a different phase from the real-time frame. It increments `CurrentTickCount`, lets [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) dispatch time-based events and periodic tickers from `CampaignTime.DeltaTime`, and then calls `_tickData.Tick()`. The store turns its exiting-settlement list into formal party changes. Do not interpret an `HourlyTickEvent` or `DailyTickEvent` callback as access to a public cache snapshot.

### Save loading and rebuild

During `Campaign.OnGameLoaded`, the game creates a new `CampaignTickCacheDataStore`, runs object-manager `PreAfterLoad`/`AfterLoad`, dispatches `OnGameLoaded`, runs `InitializeForSavedGame`, and finally calls `_tickData.InitializeDataCache()`. The store therefore rebuilds its arrays against the restored `MobileParty` collection; references to the old instance, arrays, slots, or parties must not be retained.

This is a hard phase boundary: the cache is reliable only after `Campaign.Current`, object registration, and the party list are ready. During `OnGameEarlyLoaded`, while behavior save data has just been restored, or before `AfterLoad` has completed, do not assume that movement-cache initialization has finished.

## Query, invalidation, and why direct access is wrong

### There is no mod-facing cache query

The public class has an `internal` constructor. `InitializeDataCache`, `ValidateMobilePartyTickDataCache`, `Tick`, and `RealTick` are also `internal`; arrays, counters, and `PartyTickCachePerParty` are `private`. There is no supported `CampaignTickCacheDataStore.Get(party)`, `Clear()`, or `Set(...)` call. Reflection, Harmony edits to private fields, or treating internal methods as public extension points bypass the runtime's phase and parallelism guarantees.

For current time, read `CampaignTime.Now` or `CampaignTime.DeltaTime` from [CampaignTime](../CampaignTime). For a party, use [MobileParty](../../campaign/MobileParty) or a `CampaignEvents` callback parameter. For periodic logic, subscribe to events instead of reading `_cacheData`.

### When it refreshes

- **Every `RealTick`:** party cache variables are initialized, frame-start targets are captured, and categories are rebuilt; this is a per-real-frame refresh, not an hourly/daily-only refresh.
- **When party count reaches capacity:** `ValidateMobilePartyTickDataCache` allocates a new set of work arrays, abandoning the old arrays. Do not keep references to internal slots.
- **After save loading:** `Campaign.OnGameLoaded` discards the old `_tickData`, creates a new instance, and initializes it.
- **At the end of the current processing round:** grid-change, navigation-transition, and category counters serve the current pass; there is no persistent “resume next frame” contract.

### Supported alternatives

- For campaign-time logic, use [CampaignEvents](../CampaignEvents)' `HourlyTickEvent`, `DailyTickEvent`, `QuarterHourlyTickEvent`, or party-parameter events.
- For public party state, use [MobileParty](../../campaign/MobileParty)'s public properties/methods, and confirm in the callback that `Campaign.Current` exists, the party is active, and it has not been destroyed.
- For world changes, call the relevant `Action.Apply`; do not insert a party into cache arrays, fake movement categories, or call internal movement functions.
- For mod persistence, store your own fields through [CampaignBehaviorBase](../CampaignBehaviorBase)'s `SyncData(IDataStore)`; do not copy the engine's per-frame work arrays into a save.

## Boundary with time, periodic events, and saves

### `CampaignTime` is not the tick cache

`CampaignTime.Now` and `CampaignTime.DeltaTime` read integer ticks from `Campaign.Current.MapTimeTracker`. `CampaignPeriodicEventManager` converts `DeltaTime.ToHours`/`ToDays` into `TickDebt` for its `PeriodicTicker<T>` instances, then invokes party, settlement, clan, town, hero, and related events. The cache's `dt`/`realDt` values serve the map movement and visibility pipeline.

Therefore:

- Use `CampaignTime.Now` to record a next-run time; do not use it to guess which phase `_cacheData` is in.
- When `CampaignTime.DeltaTime` or `dt` is zero, event and movement behavior is still governed by the game's own branches. Do not “make up” a tick by calling `_tickData.RealTick`.
- `PeriodicTicker` `TickDebt`/`Index` belong to `CampaignPeriodicEventManager` saveable state. They are not the party arrays, index lists, or per-frame counters of this class.

### The cache is not save data

`Campaign`'s `_tickData` field has no `[SaveableField]`. The arrays, counters, `dt`, delegates, and parallel helpers in this class likewise have no save contract. They should not be part of the save object graph. In contrast, `CampaignPeriodicEventManager` fields for its `PeriodicTicker<T>` instances have `[SaveableField]`, and the ticker's `TickDebt` and `Index` have `[SaveableProperty]`. Loading restores periodic-event consumption progress, not movement-cache arrays.

A mod should persist its own stable business state through [IDataStore](../IDataStore) / [CampaignBehaviorBase](../CampaignBehaviorBase): a business time point, ID, or version, then rebuild derived data after loading. Do not save cache array indexes, `MobileParty` references, or per-frame counters; party-list changes, load rebuilds, and version migration make them invalid.

## Real acquisition path: observe campaign ticks

This is a supported mod entry point. It acquires `CampaignEvents` and public campaign time, not `CampaignTickCacheDataStore`:

```csharp
using TaleWorlds.CampaignSystem;

public sealed class PartyTickObserver : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, OnHourlyTick);
        CampaignEvents.DailyTickPartyEvent.AddNonSerializedListener(this, OnDailyPartyTick);
    }

    private void OnHourlyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null || !campaign.GameStarted)
            return;

        CampaignTime now = CampaignTime.Now;
        MobileParty mainParty = MobileParty.MainParty;
        if (mainParty != null && mainParty.IsActive)
        {
            // Read public party state or update the mod's own derived data here.
            _lastObservedTime = now;
        }
    }

    private void OnDailyPartyTick(MobileParty party)
    {
        if (party != null && party.IsActive)
        {
            // The event supplies a real party; do not send it into the internal cache.
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("last_observed_time", ref _lastObservedTime);
    }

    private CampaignTime _lastObservedTime;
}
```

`RegisterEvents` is the real `CampaignBehaviorBase` registration path, and `SyncData` is the real Behavior save path. The example only observes public state. For logic that must run on every map real-time frame, use an existing supported Campaign/entity callback and handle `dt` yourself; do not turn the internal cache into an extension point.

## Dependencies

### Upstream

- [Campaign](../../campaign/Campaign): creates and privately owns `_tickData`, and controls the `RealTick`/`Tick` call order.
- [MobileParty](../../campaign/MobileParty): supplies `CachedPartyVariables`, movement/stationary/transition processing, and active state; the cache cannot be used independently of the current party list.
- [CampaignTime](../CampaignTime): supplies `Now` and `DeltaTime` to the periodic manager; it is not this class's persistence or query interface.
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager): advances periodic tickers from campaign time and dispatches them before `_tickData.Tick()` in the campaign tick.

### Downstream

- `MobilePartyLocator`: receives grid-position changes at the end of the frame.
- `LeaveSettlementAction`: `Tick()` turns detected settlement exits into formal world changes.
- `MapVisibilityModel`: supplies `MaximumSeeingRange()` when the cache updates visibility around the main party.
- [CampaignEvents](../CampaignEvents) and [CampaignBehaviorBase](../CampaignBehaviorBase): the supported observation layer for mods.
- [IDataStore](../IDataStore): persists a mod's own business state, not this class's derived arrays.

## Risks and wrong-phase failures

- **Reading too early:** Reflection during a null `Campaign.Current`, before `MobileParties` exists, or before `OnGameLoaded` calls `InitializeDataCache` sees empty/stale data or can dereference missing dependencies.
- **Wrong-phase mutation:** Changing parties, calling an Action, or changing `MobileParties` from another thread during parallel `RealTick` can desynchronize cache indexes, locator lists, and active state, causing races, out-of-range access, or corrupt map state. Schedule changes through an official safe phase/event.
- **Faking movement:** Calling internal movement functions, modifying `CachedPartyVariables`, or fabricating grid changes bypasses speed validation, navigation transitions, `LeaveSettlementAction`, and locator updates. The result can be incorrect party visibility/position and later AI or map-query failures.
- **Saving internal state:** Persisting indexes, party references, or per-frame counters makes them point at the wrong objects after the store is rebuilt on load; this can process the wrong party or corrupt a save. Persist stable business IDs, times, and versions, then resolve them after loading.
- **Cross-frame or cross-thread references:** `RealTick` uses parallel arrays and may replace the complete array set when capacity grows. Never pass internal references to UI, asynchronous work, or the next tick.
- **Confusing periodic progress with cache progress:** Modifying `PeriodicTicker` saveable data or manually replaying events changes event order after load. Use `CampaignPeriodicEventManager.CreatePeriodicEvent` or the event system and follow its save contract for custom scheduling.

## 1.3.15 versus 1.4.5

- Both versions keep the same boundary: an `internal` constructor, a private `_tickData` created by `Campaign`, a new instance during `OnGameLoaded`, and `InitializeDataCache` after loading; each real-time frame validates capacity and rebuilds/refreshes work arrays from the current `MobileParty` list.
- Both versions save the `CampaignPeriodicEventManager` `PeriodicTicker<T>` fields with `[SaveableField]` and the ticker's `TickDebt`/`Index` with `[SaveableProperty]`. This does not make this class's per-party cache persistent.
- In 1.4.5, `UpdateVisibilitiesAroundMainParty` adds a branch for a port raid whose map-event settlement has a port, using that settlement position and `SeeingRange * 1.35f`; 1.3.15 has only the port-siege branch and otherwise uses the main-party position. Mods should not depend on this internal visibility detail for business logic.
- 1.4.5 also exposes `CampaignTime.Seasons` as a public enum and uses newer file-scoped/parallel-call source form. Those are source/time API evolution points, not new permission to access the cache.

## Navigation

### ↑ Parent

- [Campaign-ext API](../)
- [SDK overview](../../../architecture/sdk-overview)

### ↔ Siblings

- [Campaign](../../campaign/Campaign)
- [CampaignTime](../CampaignTime)
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- [CampaignEvents](../CampaignEvents)
- [CampaignBehaviorBase](../CampaignBehaviorBase)

### Related / bidirectional return

- [MobileParty](../../campaign/MobileParty): the real data source for the cache; return here to understand the movement-pipeline boundary.
- [IDataStore](../IDataStore): the mod save entry point; return here to distinguish persistent tickers from the transient cache.
- [SaveManager](../../save-system/SaveManager): save coordinator; it should not be used to save this class's internal arrays.

## Source basis

- 1.3.15: `R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CampaignTickCacheDataStore.cs` (constructor, capacity validation, initialization, `Tick`, `RealTick`); `Campaign.cs` (constructor, `OnGameLoaded`, `RealTick`, `Tick`); `CampaignTime.cs`; `CampaignPeriodicEventManager.cs`.
- 1.4.5 comparison: `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignTickCacheDataStore.cs`, `Campaign.cs`, `CampaignTime.cs`, and `CampaignPeriodicEventManager.cs`.
- Save and acquisition boundaries were also checked against both versions' `CampaignEvents.cs`, `CampaignBehaviorBase.cs`, and the `TaleWorlds.SaveSystem` `[SaveableField]`/`[SaveableProperty]` contracts.

## See Also

- ↑ [Campaign-ext API](../)
- ↔ [Campaign](../../campaign/Campaign) · [CampaignTime](../CampaignTime) · [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- ↓ [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [IDataStore](../IDataStore)
