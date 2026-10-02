---
title: "SDK Layering Overview (v1.4.6)"
description: "The five-layer dependency model of v1.4.6 — Foundation / Campaign / Mission / UI / Save: what each layer owns, its entry classes, the reading order, and the lifecycle and save boundaries."
---
# SDK Layering Overview (v1.4.6)

> This page is the cure for "I have no big picture": a top-down dependency map first, then the **entry class** and **reading order** for each layer. After it you no longer have to face an A–Z wall of class names.
>
> Every type location was verified against `bannerlord-1.4.6/`. Several differ from older pages; those are called out at the end.

## In one sentence

Bannerlord's managed code is not a flat pile of classes but a set of **layered assemblies that only depend downwards**. Mod code sits on top and may touch any layer, but you can only pick the right layer — and know why an object from one layer must never be stored in another — once you understand who depends on whom.

```
        UI layer      ScreenSystem / GauntletUI / ViewModel
             │  depends on
             ▼
      Mission layer   TaleWorlds.MountAndBlade (Mission / Agent / Behavior)
             │  depends on
             ▼
      Campaign layer  TaleWorlds.CampaignSystem
             │  depends on
             ▼
    Foundation layer Core / Library / Localization / ObjectSystem / ModuleManager
             │
             ▼
        Native engine (TaleWorlds.Native.dll)
```

The Save layer cuts across all of them: `TaleWorlds.SaveSystem` belongs to none of the layers above, it provides persistence to Foundation and Campaign.

## What each layer owns, its entry classes and its risks

| Layer | Module directory | What it owns | Entry classes (verified in 1.4.6) | Typical risk |
| --- | --- | --- | --- | --- |
| Foundation | `TaleWorlds.Core` | The root of one game session and core data types | `Game`, `GameState`, `GameType`, `IGameStarter` | `Game` is `Destroy()`ed after `OnGameEnd`; a static cache holding a reference points at a destroyed object |
| Foundation | `TaleWorlds.Library` | Maths, collections, logging, the `ViewModel` base | `ViewModel`, `InformationManager` | `InformationManager` is main-thread UI; messaging from a worker thread misbehaves |
| Foundation | `TaleWorlds.ObjectSystem` | Object registry and cross-save references | `MBObjectManager`, `MBGUID` | Calling `CreateObjectTypeList` / `GetObject` for an unregistered type throws `MBTypeNotRegisteredException` |
| Foundation | `TaleWorlds.ModuleManager` | Module list and load order | `ModuleInfo`, `SubModuleInfo`, `ModuleHelper` | A wrong dependency declaration loads your module in the wrong phase |
| Campaign | `TaleWorlds.CampaignSystem` | Long-lived world state: heroes, clans, settlements, parties | `Campaign`, `CampaignBehaviorBase`, `CampaignEvents`, `GameModels` | Behaviours are called from the daily tick; heavy work here stutters the map |
| Mission | `TaleWorlds.MountAndBlade` | Short-lived state of a single battle | `Mission`, `Agent`, `MissionBehavior`, `MissionLogic` | Caching an `Agent` into the campaign layer leaves a dangling reference after the battle |
| UI | `TaleWorlds.ScreenSystem` / `TaleWorlds.GauntletUI` | The screen stack and the projection of state | `ScreenManager`, `ScreenBase`, `ScreenLayer`, `GauntletMovie`, `GauntletLayer` | The screen stack is ordered: after `PopScreen` the popped screen instance is gone |
| Save | `TaleWorlds.SaveSystem` | The mapping between the object graph and a `.sav` | `SaveManager`, `ISaveDriver`, `SaveContext` | Saved field types that were never registered are silently dropped or throw on load |

## Why the layers must stay separate

- **Persistence versus runtime**: `Campaign` owns state that survives in a save; `Mission` is a container for one battle. Saving an `Agent` as campaign state, or caching a `Hero` as a scene object, crashes on load or on scene change. Data belongs to the owner of the layer it belongs to.
- **UI versus rules**: a `ViewModel` only projects data onto the screen and holds no rules; the rules live in `CampaignBehaviorBase` / `MissionBehavior` and the state in `Campaign` / `Mission`. UI must not decide when a battle ends.
- **Platform versus engine**: `Localization`, `Core` and `ObjectSystem` provide types unrelated to any particular scene, so everyone depends on them and they depend on nobody. A campaign mod and a battle mod can therefore share one object system without coupling to each other.

> One line to remember: most mods only touch the top three layers — **Campaign (world rules), Mission (a single battle), UI (the interface)**. Drop to **SaveSystem** when you need persistence, and to **Foundation** only for base types and localisation.

## Reading order

1. **Module entry** — understand "when is my code called": `MBSubModuleBase` (in `TaleWorlds.MountAndBlade`). Its 30 lifecycle callbacks are not equally important; start with these:
   | Callback | What belongs in it |
   | --- | --- |
   | `InitializeGameStarter(Game game, IGameStarter starterObject)` | The official slot for campaign behaviours and models: `((CampaignGameStarter)starterObject).AddBehavior(...)` |
   | `OnGameStart(Game game, IGameStarter gameStarterObject)` | The main campaign entry: take `Campaign.Current`, read config, prepare runtime state |
   | `OnGameLoaded(Game game, object initializerObject)` / `OnNewGameCreated(Game game, object initializerObject)` | Rebuild runtime state after load / after new-game creation (saved fields are available here) |
   | `OnMissionBehaviorInitialize(Mission mission)` | The injection point for battle behaviours — the equivalent of pushing a `MissionBehavior` into this battle |
   | `OnSubModuleLoad()` | Pure static initialisation only; do not touch `Game` or `Campaign` here |
2. **Session root**: `Game`. Understand the boundary from `CreateGame` / `LoadSaveGame` to `Destroy`.
3. **World rules**: `Campaign` plus `CampaignBehaviorBase`. `RegisterEvents()` and `SyncData(IDataStore)` are the two mandatory overrides.
4. **One battle**: `Mission` → `Agent` → `MissionBehavior`.
5. **Interface**: `ViewModel` (`TaleWorlds.Library`) + `ScreenManager` (`TaleWorlds.ScreenSystem`) + `GauntletMovie` / `GauntletLayer`.
6. **Persistence**: `SaveManager` with `[SaveableField]` / `[SaveableProperty]`.
7. **Localisation**: `TextObject` and `MBTextManager`.

## Three minimal skeletons

```csharp
// 1) Module entry: attach your campaign behaviour the way the official modules do.
//    OnGameStart is `protected internal virtual` upstream, so an override in another
//    assembly must be declared `protected override`.
public sealed class MyModSubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter starterObject)
    {
        CampaignGameStarter starter = starterObject as CampaignGameStarter;
        if (starter == null) return;                  // no campaign starter on menu/editor
        starter.AddBehavior(new MyCampaignBehavior());
    }

    protected override void OnGameStart(Game game, IGameStarter starterObject)
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null) return;                 // null outside a campaign
        _campaign = campaign;
    }

    private Campaign _campaign;
}

// 2) Campaign behaviour: register events + declare saved fields (key must match the field)
public sealed class MyCampaignBehavior : CampaignBehaviorBase
{
    public MyCampaignBehavior() : base("MyModBehavior") { }

    public override void RegisterEvents()
    {
        // In 1.4.6 the IMbEvent subscription point is AddNonSerializedListener(owner, action)
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, DailyTick);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<bool>("_myFlag", ref _myFlag);
    }

    private bool _myFlag;
    private void DailyTick() { /* daily tick; keep it cheap */ }
}

// 3) Mission behaviour: lives inside one battle; never leak its state into Campaign
public sealed class MyMissionBehavior : MissionBehavior
{
    public override void OnBehaviorInitialize() { }

    public override void OnAgentCreated(Agent agent)
    {
        if (agent.IsMainAgent)
        {
            MainAgentReady = true;
        }
    }

    public bool MainAgentReady { get; private set; }
}
```

## Cross-version notes (v1.4.6 against 1.4.5 / 1.3.15)

- The **visible member sets of these entry types are essentially unchanged between 1.4.6 and 1.3.15**; 1.4.6 versus 1.4.5 differs mainly in how the decompiled dump distributes partial classes, which changes member counts without changing the API. Per-type numbers and the counting caveats are in [version delta](../version-delta).
- Real 1.4.6 locations: `MBSubModuleBase` and `Module` are in `TaleWorlds.MountAndBlade`; `ScreenManager` / `ScreenBase` / `ScreenLayer` are in `TaleWorlds.ScreenSystem`; `MBObjectManager` is in `TaleWorlds.ObjectSystem`; `ViewModel` is in `TaleWorlds.Library`. **These were verified in the 1.4.6 source and contradict the assembly attribution in parts of the older docs.**

## Risks and boundaries

- **Lifecycle order**: `OnSubModuleLoad` runs before a `Game` exists; `Campaign.Current` is null in menu, editor and pure-battle scenarios.
- **Thread affinity**: `InformationManager`, the screen stack and input queries are main-thread. Interfaces that return `Task<int>`, such as `AchievementManager.GetStat`, must be awaited in your own async flow rather than assumed synchronous.
- **Save compatibility**: custom fields must go through `SyncData`. Mutating an entity field directly is not persisted, and the old value comes back on load.
- **Decompile caveats**: the 1.4.6 tree is an export product. `.2`-style duplicate files and `EmbeddedAttribute` / `IsReadOnlyAttribute` are generator noise, not new API.

## Navigation

- [↑ Up](../) — architecture hub
- ↔ Siblings: [module map](../module-map) · [version delta](../version-delta) · [中文](../../../zh/architecture/sdk-overview/)
- ↑↑ Version landing: [en](../../) · [zh](../../../zh/)
- ↔ Cross-version: [per-class API comparison](../../../../versions/)