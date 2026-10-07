---
title: "Campaign Event System"
description: "Mental model for the Campaign-layer pub/sub event bus: how CampaignEvents, CampaignEventDispatcher, and CampaignEventReceiver work together, and how mods safely subscribe, unsubscribe, and react to world changes via CampaignBehaviorBase."
---

# Campaign Event System

> The event system answers a mod's second core question: **the world changed — how do I know?** Answer: don't poll. Subscribe to `CampaignEvents` static events, and the game notifies you when a hero dies, a settlement changes hands, war is declared, or a save completes.

> Section schema: this page uses 11 sections (in document order): One-Line Positioning | Mental Model | How to Use: A Mod's Real Integration | Save Events: Three Hooks | Dependency Graph (Clickable) | ⚠ Risk & Crash Boundaries | When to Use / When Not to | Full Event Index | ↑ Parent Navigation | ↔ Sibling Navigation | ↓ Related API Pages

## One-Line Positioning

`CampaignEvents` is the Campaign layer's **central publish/subscribe (pub/sub) event bus** — it translates "something important happened in the world" into a single broadcast with a typed payload, so mods can react to changes without scanning the entire world every second.

## Mental Model

### Three Classes: A Horn, A Dispatcher, A Contract

```
Game kernel *Action / Campaign tick
        │
        ▼
CampaignEventDispatcher.Instance.OnXxx(args)   ← Dispatcher: fans out to all receivers
        │
        ├──→ CampaignEvents (central hub)           ← Horn: invokes the underlying MbEvent
        │         │
        │         ▼
        │    IMbEvent<T>.Invoke(args)            ← Fires all registered lambdas
        │         │
        │         ▼
        │    mod handler is called                 ← Your code runs here
        │
        ├──→ IssueManager (native receiver)
        └──→ QuestManager (native receiver)
```

| Class | Role | Held by | How mods use it | Declaration |
|-------|------|---------|------------------|-------------|
| `CampaignEventReceiver` | **Contract**: defines all `OnXxx` virtual methods + `RemoveListeners` | — | Inherit it to write a custom receiver (rare) | `CampaignEventReceiver.cs:32` |
| `CampaignEventDispatcher` | **Dispatcher**: fans out each `OnXxx` call to all registered receivers | `Campaign.Current.CampaignEventDispatcher` | Not used directly; the game kernel calls through it | `CampaignEventDispatcher.cs:33` |
| `CampaignEvents` | **Central hub**: holds ~274 `IMbEvent<T>` static properties + forwarding logic | `Campaign.Current.CampaignEvents` | **Subscribe to its static event properties** | `CampaignEvents.cs:32` |

### Key Facts

1. **You never `new CampaignEvents()`.** It has no public constructor. Mods access static properties like `CampaignEvents.HeroKilledEvent` directly. The instance is held by `Campaign` (`Campaign.cs:611`).
2. **Events are not serialized.** Lambda closures registered via `AddNonSerializedListener` are not written to the save file. But the `CampaignBehaviorBase` that owns them is part of the campaign object — after loading, `CampaignBehaviorManager` rebuilds behaviors and calls `RegisterEvents()` again, re-attaching the lambdas.
3. **Events are synchronous.** Handlers run inside the campaign tick that triggered them; an uncaught exception breaks the entire tick chain.
4. **Events are notifications, not entry points.** To change the world, call the corresponding `*Action.Apply` — don't mutate fields directly in a handler.

### Lifecycle: From Boot to Save

```
Campaign created
  └─ CreateCampaignEvents() (`Campaign.cs:1197`)
       ├─ new CampaignEvents()
       ├─ new CampaignEventDispatcher({ CampaignEvents, IssueManager, QuestManager })
       └─ Campaign.Current.CampaignEvents = instance

Game running
  └─ Kernel calls CampaignEventDispatcher.Instance.OnXxx()
       └─ Fans out to CampaignEvents → Invokes IMbEvent → mod handler executes

Load
  └─ CampaignBehaviorManager rebuilds behaviors → calls RegisterEvents() again → lambdas re-subscribe

Save
  └─ OnBeforeSaveEvent → OnSaveStartedEvent → OnSaveOverEvent
```

## How to Use: A Mod's Real Integration

### 1. Subscribe in CampaignBehaviorBase (standard pattern)

```csharp
using TaleWorlds.CampaignSystem;

namespace MyMod;

public class MyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe to hero death
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
        // Subscribe to daily tick
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
        // Subscribe to save completion
        CampaignEvents.OnSaveOverEvent.AddNonSerializedListener(this, OnSaveOver);
    }

    public override void SyncData(IDataStore dataStore)
    {
        // Event closures are not serialized; only store custom data here
    }

    private void OnHeroKilled(Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // Safe: read state, log, call *Action to change the world
        // Dangerous: directly mutating victim's fields, doing heavy work
    }

    private void OnDailyTick()
    {
        // Lightweight logic: update custom values, check conditions
    }

    private void OnSaveOver(bool isSuccessful, string saveName)
    {
        if (isSuccessful)
        {
            // Post-save cleanup or notification
        }
    }
}
```

### 2. Unsubscribe: RemoveListeners

```csharp
// When the behavior is unloaded, clear all listeners for this owner
public override void RemoveListeners(object obj)
{
    CampaignEvents.HeroKilledEvent.ClearListeners(obj);
    CampaignEvents.DailyTickEvent.ClearListeners(obj);
    CampaignEvents.OnSaveOverEvent.ClearListeners(obj);
}
```

> **Dedup tip**: `RegisterEvents()` may be called multiple times in a session (e.g., runtime `AddBehavior`). Call `CampaignEvents.XEvent.ClearListeners(this)` at the top before adding, to avoid duplicate subscriptions.

### 3. Reference Events (Can-* events)

`ReferenceIMBEvent<T, bool>` lets listeners **vote or override the return value**:

```csharp
CampaignEvents.CanHeroDieEvent.AddNonSerializedListener(this, OnCanHeroDie);

private void OnCanHeroDie(Hero hero, ref bool result)
{
    // result is the engine's default; you can override it
    if (hero == Hero.MainHero && _isInvincible)
    {
        result = false; // Prevent the main hero from dying
    }
}
```

### 4. Tick Events: The Most Frequent Hooks

| Event | Payload | Frequency | Typical Use |
|-------|---------|-----------|-------------|
| `TickEvent` | `float dt` | Every frame | Frame-rate updates (rarely needed) |
| `QuarterHourlyTickEvent` | None | Every 15 game minutes | Light periodic checks |
| `HourlyTickEvent` | None | Every game hour | Medium-frequency logic |
| `DailyTickEvent` | None | Every game day | Daily settlement, condition checks |
| `WeeklyTickEvent` | None | Every game week | Low-frequency aggregation |
| `DailyTickPartyEvent` | `MobileParty` | Per party per day | Party-related daily logic |
| `DailyTickHeroEvent` | `Hero` | Per hero per day | Hero-related daily logic |
| `DailyTickSettlementEvent` | `Settlement` | Per settlement per day | Settlement-related daily logic |

> **Performance rule**: tick handlers must be lightweight. They run in the synchronous tick chain — heavy work stalls the entire campaign loop.

## Save Events: Three Hooks

```csharp
// Before save: prepare data, optionally block the save
CampaignEvents.OnBeforeSaveEvent.AddNonSerializedListener(this, OnBeforeSave);

// Save started: show UI, pause logic
CampaignEvents.OnSaveStartedEvent.AddNonSerializedListener(this, OnSaveStarted);

// Save complete: clean up temporary state, notify player
CampaignEvents.OnSaveOverEvent.AddNonSerializedListener(this, OnSaveOver);
```

`OnSaveOver` carries `(bool isSuccessful, string saveName)` — check `isSuccessful` before deciding whether to clean up.

## Dependency Graph (Clickable)

**Upstream (who triggers / who holds)**

- [Campaign](../../api/campaign/Campaign/) — holds the sole `CampaignEvents` and `CampaignEventDispatcher` instances
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — fan-out dispatcher
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — contract base class
- Various `*Action` classes (e.g., `KillCharacterAction`, `ChangeOwnerOfSettlementAction`, `DeclareWarAction`) — trigger events after mutating state

**Downstream (who consumes)**

- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod behaviors subscribe in `RegisterEvents()`
- [SaveManager](../../api/save-system/SaveManager/) — save point: behaviors are rebuilt on load; event closures are not serialized

**Related Types**

- [MbEvent](../../api/campaign-ext/MbEvent/) / [IMbEvent](../../api/campaign-ext/IMbEvent/) — underlying delegate containers
- [ReferenceMBEvent](../../api/campaign-ext/ReferenceMBEvent/) — reference-type events (Can-* series)
- [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) — entry point for registering behaviors

## ⚠ Risk & Crash Boundaries

| Risk | Consequence | Correct Approach |
|------|-------------|------------------|
| Uncaught exception in handler | Breaks the entire tick chain, potential save corruption | try/catch critical paths inside handlers |
| Heavy work in handler | Stalls the entire campaign loop | Keep it lightweight; defer heavy work |
| Closure captures destroyed MBObject | NullReferenceException after load | Resolve objects inside the handler; null-check first |
| Duplicate subscription | Same logic fires multiple times | `ClearListeners(this)` at the top of `RegisterEvents()` |
| Adding/removing listeners inside a handler | Skips or double-fires | Never subscribe/unsubscribe yourself inside a callback |
| Using events to change the world | Bypasses consistency checks, breaks other systems | Change the world via `*Action.Apply` |
| Accessing unready world in `RegisterEvents()` | Null references or incomplete data | Wait until `OnNewGameCreated` / `OnGameLoaded` |

## When to Use / When Not to

**Use events**: when X happens, do something — show a notification, log, adjust a derived value, unlock a feature, trigger custom logic.

**Don't use events**:
- Don't poll instead of subscribing ("scan all Heroes every hour to see who died")
- Don't manually fire events to trick other systems (no public `Fire` API)
- Don't mutate fields directly in handlers to change the world (use `*Action`)

## Full Event Index

For all ~274 events with payload types, trigger timings, and subscription snippets, see the API reference:
- [CampaignEvents API Reference](../../api/campaign-ext/CampaignEvents/) — full event index by domain
- [CampaignEventDispatcher API Reference](../../api/campaign-ext/CampaignEventDispatcher/) — dispatcher mechanics
- [CampaignEventReceiver API Reference](../../api/campaign-ext/CampaignEventReceiver/) — contract base class

---

## ↑ Parent Navigation

- [Architecture Overview](./) — back to the architecture map
- [Module System](../module-system) — `CampaignBehaviorBase` lifecycle
- [Save System](../save-system) — save mechanics and their relationship to events

## ↔ Sibling Navigation

| Page | Content |
|------|---------|
| [Module System](../module-system) | `MBSubModuleBase` and `CampaignBehaviorBase` lifecycle |
| [Save System](../save-system) | `SaveManager` and save hooks |
| [SDK Overview](../sdk-overview) | 54-module layered map |
| [Crash & Save Boundaries](../crash-boundaries) | 8 categories of guaranteed crashes / save corruption |
| [Campaign Event Bus](../campaign-events) | Event bus mechanics + integration manual (division: this page = three-class collaboration mental model; that page = mechanics & integration) |

## ↓ Related API Pages

- [CampaignEvents](../../api/campaign-ext/CampaignEvents/) — full event index and deep dives
- [CampaignEventDispatcher](../../api/campaign-ext/CampaignEventDispatcher/) — dispatcher
- [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) — contract base class
- [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) — mod behavior base class
