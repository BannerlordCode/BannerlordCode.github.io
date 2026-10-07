---
title: "Campaign Event Bus: Subscription, Timing & Lifecycle"
description: "Mechanical internals and mod integration handbook for the CampaignEvents event bus: how the MbEvent<T> listener linked-list works, how Behaviors subscribe/unsubscribe in RegisterEvents/RemoveListeners, the four trigger chains (tick/Action/save/load) and their timings, plus verified signatures and trigger points for common events like HeroKilled and OnClanDestroyed."
---

# Campaign Event Bus: Subscription, Timing & Lifecycle

> The previous page, [Campaign Event System](../campaign-event-system), explained "how the three classes collaborate". This page answers the more engineering-focused questions: **how listeners are stored at the bottom, how to write subscription code, when events fire, and which events you can subscribe to**. After reading this page you should be able to write a Behavior that never double-subscribes, never leaks listeners, and knows exactly when each event fires.

## One-Line Positioning

`CampaignEvents` is the Campaign layer's **static event facade**: mods subscribe via `CampaignEvents.XxxEvent.AddNonSerializedListener(this, handler)`, and the game kernel fires events via `CampaignEventDispatcher.Instance.OnXxx()`. Under the hood, each event is a linked list of listeners organized by owner.

## Mental Model

### Internals: A Listener Linked-List Organized by Owner

Each "event" is a `MbEvent<T>` instance at the bottom — it holds no business data, only a **singly-linked list** whose nodes are `EventHandlerRec<T> { object Owner; Action<T> Action; EventHandlerRec<T> Next }`:

```
CampaignEvents.HeroKilledEvent  (static property)
        │  get { return CampaignEvents.Instance._heroKilled; }
        ▼
MbEvent<T> _heroKilled  (instance field, created with the Campaign)
        │
        ▼  _nonSerializedListenerList (head node)
   ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
   │ Owner = yourBehavior │ → │ Owner = yourBehavior │ → │ Owner = nativeBehavior │ → null
   │ Action = OnHeroKilled │    │ Action = OnDailyTick  │    │ Action = kernel handler │
   └─────────────────┘    └─────────────────┘    └─────────────────┘
```

Three key operations (`MbEvent<T>` source semantics):

| Operation | Bottom-layer behavior | When mods use it |
|-----------|----------------------|------------------|
| `AddNonSerializedListener(owner, action)` | **Prepends** a new node: `newRec.Next = _head; _head = newRec` | Subscribe in `RegisterEvents()` |
| `Invoke(args)` | Walks the list **sequentially from the head**, calling `Action(args)` on each | Fired by the game kernel (you never call it directly) |
| `ClearListeners(owner)` | Walks the list and **removes all nodes where `Owner == owner`** | Unsubscribe, dedup, behavior removal |

> **Corollary 1**: Multiple `AddNonSerializedListener` calls from the same owner on the same event insert multiple nodes — the handler fires multiple times. So `RegisterEvents()` should `ClearListeners(this)` first, then subscribe.
>
> **Corollary 2**: `Invoke` is synchronous sequential execution with no exception isolation — one handler throwing aborts the rest of the list, and the exception propagates up the tick chain.
>
> **Corollary 3**: Listeners live in `CampaignEvents` instance fields and are **not serialized**. After loading, `CampaignBehaviorManager` rebuilds behaviors and calls `RegisterEvents()` again, re-attaching the list.

### Subscribe / Unsubscribe: The Only Correct Mod Posture

```
MBSubModuleBase.OnSubModuleLoad
  └─ CampaignBehaviorManager.AddBehavior(new MyBehavior())   ← auto-calls RegisterEvents()
       └─ MyBehavior.RegisterEvents()
            ├─ CampaignEvents.HeroKilledEvent.ClearListeners(this)   ← dedup (recommended)
            └─ CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled)

Runtime removal
  └─ CampaignBehaviorManager.RemoveBehavior<MyBehavior>()
       └─ CampaignEventDispatcher.Instance.RemoveListeners(t)   ← auto-unsubscribes ALL listeners of that behavior

Save load
  └─ CampaignBehaviorManager.RegisterEvents()   ← re-calls RegisterEvents() on all behaviors, list rebuilt
```

**Key fact**: `RemoveBehavior<T>()` automatically calls `CampaignEventDispatcher.Instance.RemoveListeners(t)` — it fans out to all receivers including `CampaignEvents`, removing **every** listener attached to that behavior in one shot. So behaviors managed through `AddBehavior`/`RemoveBehavior` don't need hand-written `RemoveListeners`; only long-lived behaviors that manage subscriptions manually do.

### Event Timing: Four Trigger Chains

Events don't fire from nowhere — every event traces to a concrete call chain:

**1. Tick chain (periodic events)**

```
CampaignPeriodicEventManager (fires by game time)
  └─ Campaign.DailyTick()                        [Campaign.cs:951]
       ├─ CampaignEventDispatcher.Instance.DailyTick()   → CampaignEvents.DailyTickEvent
       └─ every 7 days: CampaignEventDispatcher.Instance.WeeklyTick()  → WeeklyTickEvent
  └─ Campaign.HourlyTick()  [Campaign.cs:933]  → HourlyTickEvent
  └─ Campaign.QuarterHourlyTick() [Campaign.cs:945] → QuarterHourlyTickEvent
  └─ every frame: Campaign.TickEvent
```

**2. Action chain (world-change events)** — changing the world goes through `*Action.Apply`, and the Action fires the event internally:

```
KillCharacterAction.Apply(...)                         [KillCharacterAction.cs:149]
  └─ CampaignEventDispatcher.Instance.OnHeroKilled(victim, killer, detail, showNotification)
       └─ CampaignEvents.HeroKilledEvent.Invoke(...)

DestroyClanAction.Apply(...)                           [DestroyClanAction.cs:66]
  └─ CampaignEventDispatcher.Instance.OnClanDestroyed(destroyedClan)

ChangeOwnerOfSettlementAction.Apply(...)               [ChangeOwnerOfSettlementAction.cs:84]
  └─ CampaignEventDispatcher.Instance.OnSettlementOwnerChanged(settlement, openToClaim, newOwner, oldOwner, capturerHero, detail)
```

**3. Save chain** — `SaveHandler` broadcasts at three points in the save flow:

```
SaveHandler.Save(...)
  ├─ OnSaveStarted()                    [SaveHandler.cs:174]
  │    ├─ Campaign.Current.WaitAsyncTasks()      ← waits for async tasks first
  │    └─ CampaignEventDispatcher.Instance.OnSaveStarted()
  ├─ CampaignEventDispatcher.Instance.OnBeforeSave()   [SaveHandler.cs:126]
  └─ OnSaveEnded(isSaveSuccessful, name)  [SaveHandler.cs:183]
       └─ CampaignEventDispatcher.Instance.OnSaveOver(isSaveSuccessful, name)
```

**4. New-game / load chain**:

```
Campaign created / load completed
  ├─ Campaign.cs:2120  CampaignEventDispatcher.Instance.OnNewGameCreated(gameStarter)
  └─ Campaign.cs:848   CampaignEventDispatcher.Instance.OnGameLoaded(starter)
       └─ afterwards: OnGameLoadFinishedEvent
```

> **Timing iron rule**: `OnNewGameCreated` / `OnGameLoaded` are the **earliest safe points** to access world data — at that point `Campaign.Current` is ready and behaviors are registered. Accessing world state like `Hero.MainHero` directly inside `RegisterEvents()` is dangerous (it may not exist yet).

## Common Event Catalog (Signatures Verified in 1.3.15)

All signatures below are verified against `bannerlord-1.3.15` source `CampaignEvents.cs`.

### Hero Life & Death

| Event | Signature | Trigger point | Typical use |
|-------|-----------|---------------|-------------|
| `HeroKilledEvent` | `IMbEvent<Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification>` | `KillCharacterAction.cs:149` | Death settlement, inheritance, notifications |
| `BeforeHeroKilledEvent` | Same as above | `KillCharacterAction` (before death) | Pre-death intervention, logging |
| `CanHeroDieEvent` | `ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool>` | Death adjudication | **Vote/override**: `ref bool result` can block death |
| `HeroWounded` | `IMbEvent<Hero>` | On wounding | Post-wound handling |

### Clan

| Event | Signature | Trigger point | Typical use |
|-------|-----------|---------------|-------------|
| `OnClanCreatedEvent` | `IMbEvent<Clan, bool isCompanion>` | `RebellionsCampaignBehavior.cs:296` etc. | New clan initialization |
| `OnClanDestroyedEvent` | `IMbEvent<Clan>` | `DestroyClanAction.cs:66` | Clan destruction cleanup |
| `OnClanLeaderChangedEvent` | `IMbEvent<Hero, Clan>` | Leader change | Power transition logic |
| `OnClanChangedKingdomEvent` | `IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool>` | Kingdom change | Diplomatic recalculation |

### Settlement

| Event | Signature | Trigger point | Typical use |
|-------|-----------|---------------|-------------|
| `OnSettlementOwnerChangedEvent` | `IMbEvent<Settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail>` | `ChangeOwnerOfSettlementAction.cs:84` | **Settlement ownership change** (conquest/grant/rebellion) |
| `SettlementEntered` | `IMbEvent<MobileParty, Settlement, Hero>` | Party enters settlement | Post-entry handling |
| `BeforeSettlementEnteredEvent` | `IMbEvent<MobileParty, Settlement, Hero>` | Before entry | Intercept entry |
| `SiegeCompletedEvent` | `IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes>` | Siege ends | Siege settlement |

> ⚠️ **1.3.15 has no `SettlementCaptured` event.** If you saw it in old tutorials or 1.4.x docs, use `OnSettlementOwnerChangedEvent` in 1.3.15 instead — it covers all ownership-change paths (conquest, grant, rebellion), and the `ChangeOwnerOfSettlementDetail` payload distinguishes the specific cause.

### Tick Events (Highest Frequency)

| Event | Signature | Frequency | Typical use |
|-------|-----------|-----------|-------------|
| `TickEvent` | `IMbEvent<float>` | Every frame | Frame-level updates (rarely used) |
| `QuarterHourlyTickEvent` | `IMbEvent` | Every 15 game minutes | Light periodic checks |
| `HourlyTickEvent` | `IMbEvent` | Every game hour | Medium-frequency logic |
| `DailyTickEvent` | `IMbEvent` | Every game day | Daily settlement, condition checks |
| `WeeklyTickEvent` | `IMbEvent` | Every 7 game days | Low-frequency aggregation |
| `DailyTickPartyEvent` | `IMbEvent<MobileParty>` | Every game day (per party) | Per-party daily logic |
| `DailyTickHeroEvent` | `IMbEvent<Hero>` | Every game day (per hero) | Per-hero daily logic |
| `DailyTickSettlementEvent` | `IMbEvent<Settlement>` | Every game day (per settlement) | Per-settlement daily logic |
| `DailyTickClanEvent` | `IMbEvent<Clan>` | Every game day (per clan) | Per-clan daily logic |

### Save & New Game

| Event | Signature | Trigger point | Typical use |
|-------|-----------|---------------|-------------|
| `OnBeforeSaveEvent` | `IMbEvent` | `SaveHandler.cs:126` | Pre-save preparation |
| `OnSaveStartedEvent` | `IMbEvent` | `SaveHandler.cs:177` | Save started (UI hints) |
| `OnSaveOverEvent` | `IMbEvent<bool isSuccessful, string saveName>` | `SaveHandler.cs:189` | Post-save cleanup |
| `OnNewGameCreatedEvent` | `IMbEvent<CampaignGameStarter>` | `Campaign.cs:2120` | New game initialization |
| `OnGameLoadedEvent` | `IMbEvent<CampaignGameStarter>` | `Campaign.cs:848` | Post-load restoration |
| `OnGameLoadFinishedEvent` | `IMbEvent` | End of load flow | Load fully complete |

> The full index of all 273 events is in the [CampaignEvents API Reference](../../api/campaign-ext/CampaignEvents/).

## How To Use: Complete Behavior Example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

namespace MyMod;

public class MyBehavior : CampaignBehaviorBase
{
    private int _deathCount;

    public override void RegisterEvents()
    {
        // 1) Clear first, then add: prevents double-subscription from runtime AddBehavior
        CampaignEvents.HeroKilledEvent.ClearListeners(this);
        CampaignEvents.OnClanDestroyedEvent.ClearListeners(this);
        CampaignEvents.DailyTickEvent.ClearListeners(this);

        // 2) Subscribe (owner = this; removal is by owner)
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
        CampaignEvents.OnClanDestroyedEvent.AddNonSerializedListener(this, OnClanDestroyed);
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Event closures are not serialized; only store custom data
        dataStore.SyncData(ref _deathCount, "myMod_deathCount");
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // Safe: read state, log, accumulate values
        _deathCount++;
        // Dangerous: mutating victim fields directly, slow operations, throwing
    }

    private void OnClanDestroyed(Clan destroyedClan)
    {
        // Cleanup after clan destruction
    }

    private void OnDailyTick()
    {
        // Light logic: check conditions, update custom values
    }
}
```

Registration entry point (in an `MBSubModuleBase` subclass):

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        // AddBehavior internally calls RegisterEvents() automatically
        CampaignBehaviorManager.AddBehavior(new MyBehavior());
    }
}
```

### Reference-Type Events (Can-* series): Voting & Overriding

`ReferenceIMBEvent<T, bool>` handlers take a `ref bool result` — after the engine computes the default value, every listener can override it:

```csharp
CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, OnCanHeroDie);

private void OnCanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)
{
    if (hero == Hero.MainHero && _isInvincible)
    {
        result = false; // Block the main hero's death
    }
}
```

## Dependency Graph (Clickable)

**Upstream (who fires / who holds)**

- [Campaign](../../api/campaign/Campaign/) — creates and holds the `CampaignEvents` and `CampaignEventDispatcher` instances
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — fan-out dispatcher; the kernel calls through it
- [CampaignBehaviorManager](../../api/campaign-ext/CampaignBehaviorManager/) — manages the behavior collection; `AddBehavior`/`RemoveBehavior` auto-subscribe/unsubscribe
- The various `*Action` classes (`KillCharacterAction`, `DestroyClanAction`, `ChangeOwnerOfSettlementAction`) — fire events after changing state
- `SaveHandler` — trigger of the three save hooks
- `CampaignPeriodicEventManager` — timer for tick events

**Downstream (who consumes)**

- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod behaviors subscribe in `RegisterEvents()`
- [SaveManager](../../api/save-system/SaveManager/) — save point: behaviors are rebuilt with the save; event closures are not serialized

**Related Types**

- [MbEvent](../../api/campaign-ext/MbEvent/) / [IMbEvent](../../api/campaign-ext/IMbEvent/) — underlying delegate container and list node
- [ReferenceIMBEvent](../../api/campaign-ext/ReferenceIMBEvent/) — reference-type events (Can-* series)
- [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — payload of new-game/load events

## ⚠ Risk & Crash Boundaries

| Risk | Consequence | Correct approach |
|------|-------------|------------------|
| Uncaught exception in handler | Propagates up the tick chain, aborts the whole chain, may corrupt the save | try/catch critical paths inside handlers |
| Same owner subscribes twice | Handler fires multiple times | `ClearListeners(this)` at the top of `RegisterEvents()` |
| Accessing world state in `RegisterEvents()` | World not ready, null references | Wait for `OnNewGameCreated` / `OnGameLoaded` before accessing |
| Closure capturing a destroyed MBObject | NullReferenceException after load | Fetch fresh inside handlers, null-check first |
| Slow operations inside a handler | Freezes the entire campaign loop (synchronous chain) | Keep it light; defer slow logic to ticks |
| Adding/removing listeners of the same event inside its handler | List modified during traversal — skipped or repeated execution | Never subscribe/unsubscribe yourself inside a callback |
| Using events as entry points to change the world | Bypasses consistency checks, corrupts other systems | Change the world via `*Action.Apply` |
| Manually firing events | No public `Fire` API exists — impossible | Events are notifications, not entry points |

## When to Use / When Not to

**Use events**: when X happens, do something — show notifications, log, adjust related values, unlock features, trigger custom logic.

**Don't use events**:
- Don't poll instead of subscribing ("scan all Heroes every hour to see who died")
- Don't mutate fields directly inside handlers to change the world (use `*Action`)
- Don't rely on event firing order — list order is insertion order and must not be a business dependency

## Full Event Index

For all 273 events with payload types, trigger timings, and subscription snippets, see the API reference:
- [CampaignEvents API Reference](../../api/campaign-ext/CampaignEvents/) — full event index by domain
- [CampaignEventDispatcher API Reference](../../api/campaign-ext/CampaignEventDispatcher/) — dispatcher mechanics
- [CampaignEventReceiver API Reference](../../api/campaign-ext/CampaignEventReceiver/) — contract base class

---

## ↑ Parent Navigation

- [Architecture Overview](./) — back to the architecture map
- [Campaign Event System](../campaign-event-system) — the three-class collaboration mental model (read that page first)

## ↔ Sibling Navigation

| Page | Content |
|------|---------|
| [Campaign Event System](../campaign-event-system) | CampaignEvents / Dispatcher / Receiver three-class collaboration |
| [Module System](../module-system) | `MBSubModuleBase` and `CampaignBehaviorBase` lifecycle |
| [Save System](../save-system) | `SaveManager` and save hooks |
| [Crash & Save Boundaries](../crash-boundaries) | 8 categories of guaranteed crashes / save corruption |
| [SDK Overview](../sdk-overview) | 54-module layered map |

## ↓ Related API Pages

- [CampaignEvents](../../api/campaign-ext/CampaignEvents/) — full event index and deep dives
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — dispatcher
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — contract base class
- [MbEvent](../../api/campaign-ext/MbEvent/) — listener linked-list internals
- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod behavior base class
- [CampaignBehaviorManager](../../api/campaign-ext/CampaignBehaviorManager/) — behavior registration and auto-unsubscribe
