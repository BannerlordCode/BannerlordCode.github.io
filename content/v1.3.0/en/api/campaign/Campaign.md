---
title: "Campaign"
description: "The campaign singlet object: root registry of heroes, clans, kingdoms, parties, settlements, managers, models, time control and custom systems."
---

# Campaign

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Campaign : GameType`
**Base:** `GameType`
**File:** `TaleWorlds.CampaignSystem/Campaign.cs`

## Overview

`Campaign` is the single live instance of the whole campaign layer — the map-game world state that every other campaign object hangs off. It is a `GameType`, so the engine creates exactly one per campaign game and hands it to modules through `MBSubModuleBase.OnCampaignStart`.

It plays four roles at once:

1. **Registry.** `AliveHeroes`, `Clans`, `Kingdoms`, `MobileParties`, `Settlements`, `Characters` and `Factions` are cached views over `MBObjectManager`, not separate storage.
2. **Manager hub.** `FactionManager`, `QuestManager`, `IssueManager`, `MapEventManager`, `SiegeEventManager`, `KingdomManager`, `BarterManager`, `CharacterRelationManager`, `Romance`, `PlayerCaptivity` and `TournamentManager` are created here and injected.
3. **Model hub.** `Campaign.Current.Models` is a `GameModels` instance that carries every `GameModel` implementation the modules registered in `CampaignGameStarter.AddModel`.
4. **Clock and control.** `TimeControlMode`, `SetTimeSpeed`, `CampaignDt`, `IsDay` / `IsNight` and the static `CurrentTime`.

## Mental Model

`Campaign` sits at the top of the campaign object graph and is reached through the static `Campaign.Current`:

```
MBSubModuleBase.OnGameStart(game, starter)
    starter.AddCampaignBehavior(new MyBehavior());   // queued, not live yet
MBSubModuleBase.OnCampaignStart(game, starterObject)
    Campaign.Current is non-null here
    CampaignBehaviorBase.RegisterEvents()           // behavior subscribes
    Campaign.Current.GetCampaignBehavior<MyBehavior>()  // first legal lookup
Campaign.Current.Models.<ModelProperty>             // models, resolved once
CampaignEvents.DailyTickEvent / HourlyTickEvent
```

Typical call order inside one hour of campaign time:

`OnHourlyTickEvent` → your handler → read `Campaign.Current` registries → ask a `GameModel` for the number → mutate through the object's own API → let the official `CampaignEventDispatcher` events announce the change.

Traps that bite in practice:

- **`Campaign.Current` is null outside a campaign.** On the main menu, in the encyclopedia and during module load it is `null` (or the previous campaign's instance while a new one loads). Always guard, especially in `OnGameStart` / `OnSubModuleLoad`, which run *before* `OnCampaignStart`.
- **Behaviors are not live during `OnGameStart`.** `AddCampaignBehavior` only queues. Register handlers in `RegisterEvents()` and look other behaviors up from `OnCampaignStart` or later.
- **`Models` has no public `GetModel<T>()`.** That helper is a community extension. Shipped access is the strongly typed property (`Campaign.Current.Models.PartySpeedCalculatingModel`) or a scan of `GetGameModels()`.
- **The collections are live views.** `Campaign.Current.Clans` is not a snapshot; caching it into a mod-level `List<Clan>` and reading it on an old save after loading a different campaign keeps stale objects.
- **Time is not wall clock.** `CampaignDt` and `CurrentTime` follow `TimeControlMode`, which the player changes. Do not derive real-time behaviour from campaign time deltas.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Created by | `GameType` | Engine instantiates one `Campaign` per campaign game |
| Entry point | `MBSubModuleBase.OnCampaignStart` | First callback where `Campaign.Current` is valid |
| Behaviour host | `CampaignBehaviorBase` | `GetCampaignBehavior<T>()`, `AddCampaignBehaviorManager` |
| Object store | `MBObjectManager` | `BeforeRegisterTypes` / `OnRegisterTypes` |
| Models | `GameModels` | `Campaign.Current.Models` |
| Registries | [Clan](../Clan), [Hero](../Hero), [Kingdom](../Kingdom), [MobileParty](../MobileParty), [Settlement](../Settlement) | Cached lists exposed as properties |
| Events | `CampaignEvents` | `DailyTickEvent`, `HourlyTickEvent` and every domain event |
| Storage | Save system | Every `[SaveableProperty]` on the manager properties |

## Key members

### Lifetime and construction

#### `public Campaign(CampaignGameMode gameMode)`

The constructor takes the game mode and is what the engine calls. Mods never construct `Campaign` themselves; they read `Campaign.Current`.

#### `public static Campaign Current { get; private set; }`

The live instance. `private set` means the only writer is the engine, so it is safe to cache per-frame but not across a campaign teardown.

#### `protected override void OnInitialize()`

Engine hook. Called once after the constructor; it wires the managers that depend on object registration. Do not override — `GameType` internals assume the base behaviour.

#### `protected override void OnRegisterTypes(MBObjectManager objectManager)`

Runs inside the module `OnGameStart` phase. This is where a mod registers its own saveable types through the starter, not where it touches `Campaign.Current` data.

### Time and pacing

#### `public float CampaignDt`

Hours of campaign time that elapsed in the last tick. Zero when the game is paused or a menu is open.

#### `public CampaignTimeControlMode TimeControlMode { get; set; }`

The current speed setting (`Unpaused`, `Paused`, `FastForward`, `Evening`, `Night`, `UnstoppablePlay`). Assigning it is how a quest or event forces time forward.

#### `public void SetTimeSpeed(int speed)`

Lower-level speed setter used by map UI and by `TimeControlMode` transitions. Prefer assigning `TimeControlMode`.

#### `public static float CurrentTime`

Total campaign hours elapsed since the campaign started. Useful for scheduling, but it is `float`, so long campaigns lose sub-hour precision.

#### `public bool IsDay` / `public bool IsNight`

Day/night phase flags derived from the campaign clock. Cheap enough to poll per tick.

### Registries

#### `public MBReadOnlyList<Hero> AliveHeroes`

Every living hero, refreshed by the object manager. Use `Hero.AllAliveHeroes` equivalently; both are views, not copies.

#### `public MBReadOnlyList<MobileParty> MobileParties`

All mobile parties, including garrisons, villagers and bandits.

#### `public MBReadOnlyList<Clan> Clans` / `public MBReadOnlyList<Kingdom> Kingdoms` / `public MBReadOnlyList<Settlement> Settlements`

Canned filtered lists. For example `MobileParties` is split into `CaravanParties`, `PatrolParties`, `VillagerParties`, `MilitiaParties`, `GarrisonParties`, `LordParties`, `BanditParties`, `CustomParties` and `PartiesWithoutPartyComponent`.

#### `public IEnumerable<IFaction> Factions`

Mixed `Clan` and `Kingdom` view over the same object set — handy for diplomacy code that must treat both uniformly.

#### `public MobileParty MainParty`

The player's party. `null` in editor / menu contexts even when `Campaign.Current` is not null.

### Managers and models

#### `public GameModels Models`

Holder for every registered `GameModel`. Read a specific one through its strongly typed property, for example `Campaign.Current.Models.PartySpeedCalculatingModel`.

#### `public FactionManager FactionManager`

War / alliance queries and declarations. See [FactionManager](../FactionManager).

#### `public MapEventManager MapEventManager` / `public SiegeEventManager SiegeEventManager`

Map battle and siege lifecycle. `internal set` — created by the engine, never assigned by mods.

#### `public T GetCampaignBehavior<T>()` / `public IEnumerable<T> GetCampaignBehaviors<T>()`

Single-instance and multi-instance behavior lookup. Both throw if `Campaign.Current` is null; both return empty when nothing is registered.

#### `public void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)`

Registers a manager that gets `RegisterEvents()` called by the campaign behavior manager. Used by mods that host many related handlers.

#### `public void AddCustomManager<T>()` / `public T GetCustomManager<T>() where T : ICustomSystemManager`

Slots for mod-owned singletons with campaign lifetime. `GetCustomManager<T>()` returns `null` when the slot was never added, so null-check before use.

### Entity components

#### `public TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityComponent, new()`

Creates and attaches a per-campaign entity component. Returns the new instance; the component list grows monotonically.

#### `public TComponent GetEntityComponent<TComponent>()` / `public List<TComponent> GetComponents<TComponent>()`

Lookup helpers. `GetComponents<T>()` allocates a new `List` on every call — do not call it per tick in a large loop.

#### `public void RemoveEntityComponent<TComponent>()` / `public void RemoveEntityComponent<TComponent>(TComponent component)`

Detach and drop. Removing a component that other code still holds a reference to leaves dangling references; the safe pattern is to clear the component's state in `OnCampaignEnd` instead.

## Real examples

### Example 1: a behaviour that uses `Campaign.Current` in the right order

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public sealed class WageWatchBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // CampaignEvents.DailyTickEvent only fires with a live campaign, so Campaign.Current is safe here.
    private void OnDailyTick()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return;
        }

        foreach (MobileParty party in campaign.MobileParties)
        {
            if (party.IsMainParty)
            {
                InformationManager.DisplayMessage(
                    new InformationMessage($"Main party wages today: {party.TotalWage}"));
                return;
            }
        }
    }
}
```

### Example 2: resolving a model at runtime

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public static class SpeedProbe
{
    public static float LordCruiseSpeed()
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return 0f;
        }

        // Strongly typed accessor — the shipped API has no GetModel<T>().
        PartySpeedModel model = campaign.Models.PartySpeedCalculatingModel;
        ExplainedNumber speed = model.CalculateBaseSpeed(campaign.MainParty, true);
        return speed.ResultNumber;
    }

    // Equivalent generic scan, useful when the model type is only known at runtime.
    public static T FindModel<T>() where T : GameModel
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return null;
        }

        return campaign.Models.GetGameModels().OfType<T>().FirstOrDefault();
    }
}
```

### Example 3: a mod-owned custom system manager

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Handlers;

public sealed class TradeLedger : ICustomSystemManager
{
    public int RecordedTrades { get; private set; }

    public void Record()
    {
        RecordedTrades++;
    }
}

public sealed class LedgerBootstrapper : MBSubModuleBase
{
    protected override void OnCampaignStart(Game game, object starterObject)
    {
        Campaign.Current.AddCustomManager<TradeLedger>();
    }

    public static TradeLedger Ledger => Campaign.Current.GetCustomManager<TradeLedger>();
}
```

### Example 4: reading time without caching a stale `Campaign`

```csharp
using TaleWorlds.CampaignSystem;

public static bool IsNightHour()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return false;
    }

    // Prefer the flag over arithmetic on CurrentTime.
    return campaign.IsNight && campaign.GetSimplifiedTimeControlMode() != CampaignTimeControlMode.Paused;
}
```

## Risks and crash boundaries

1. **Null outside the campaign.** `Campaign.Current` is `null` on the main menu and in the character creation flow. Any static initializer or module-load hook that touches it throws.
2. **Load order.** `OnGameStart` runs before `Campaign.Current` exists; `OnCampaignStart` runs after. Behaviors added in `OnGameStart` only become reachable once `RegisterEvents()` has run.
3. **Save coupling.** `FactionManager`, `QuestManager`, `IssueManager`, `BarterManager`, `MapStateData` and `PlayerEncounter` are `[SaveableProperty]` holders. Renumbering or reordering them corrupts existing saves — see [save-system](../../../architecture/save-system).
4. **Cross-domain dependency.** `Models` is populated by module `AddModel` calls. A model that reads `Campaign.Current` during its own `Initialize` will hit a half-built campaign; defer to the first tick.
5. **ID stability.** `UniqueGameId` and `PlatformID` are saved. Do not treat them as stable identifiers across installs; use `MBObjectManager` indices or object `StringId`s instead.
6. **Manager ownership.** `MapEventManager`, `SiegeEventManager` and `MapMarkerManager` have `internal set`; assigning them from a mod will not compile against the shipped assembly.
7. **Allocation in hot paths.** `GetComponents<T>()` and `GetCampaignBehaviors<T>()` build fresh collections per call. Cache once at `OnCampaignStart` if you poll per tick.

## Cross-version notes

- The member list here is the 1.3.0 decompiled surface. Later 1.3.x/1.4.x builds add navy-oriented properties (`PlayerRegionSwitchCostFromLandToSea`, naval speed estimates) and keep the same top-level shape.
- `AddCustomManager<T>()` / `GetCustomManager<T>()` and `GetGameModels()` are unchanged across 1.3.x. Code written against them loads on 1.4.x saves.

## See Also

- [Clan](../Clan) — the primary faction/identity aggregate
- [Hero](../Hero) — character aggregate on the map
- [MobileParty](../MobileParty) — moving army identity
- [Settlement](../Settlement) — map location aggregate
- [Kingdom](../Kingdom) — realm aggregate
- [FactionManager](../FactionManager) — diplomacy queries over the registries
- [SettlementVisual](../../campaign-ext/SettlementVisual) — the map-scene counterpart of a settlement
- [Save system](../../../architecture/save-system) — saveable property discipline
- [SDK overview](../../../architecture/sdk-overview) — where `MBSubModuleBase` fits
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough