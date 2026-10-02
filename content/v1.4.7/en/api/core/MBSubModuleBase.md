---
title: "MBSubModuleBase"
description: "The base class of every mod SubModule: 31 lifecycle hooks covering module load, type registration, game start, campaign start, per-frame ticks, mission initialisation and unload. Most mods override between three and five of them."
---
# MBSubModuleBase

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBSubModuleBase`
**Base:** none
**Source:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs` (declared at line 8)

## Overview

`MBSubModuleBase` is the base class of the class your mod names in `SubModule.xml`. It has no state and no fields — only **31 virtual methods**, one per moment in the game lifecycle. A mod's entry point is overriding a handful of them: type registration (`RegisterSubModuleTypes`), game object creation (`InitializeSubModuleGameObjects`), game start (`OnGameStart`, where you receive the `IGameStarter` used to register campaign extensions), campaign start (`OnCampaignStart`) and the per-frame tick (`OnApplicationTick`).

It sits at the outermost layer of the stack. `Module` collects the SubModule instances of every loaded module and calls their hooks in a fixed order. There is no second way into the game: every mod goes through here. Understanding **when** each hook fires matters far more than memorising its signature, because most mod bugs are "read `Campaign.Current` at the wrong moment".

Note the access-modifier split: some hooks are `public virtual` (callable from outside, such as `OnGameLoaded`, `DoLoading`, `OnMissionBehaviorInitialize`), others are `protected internal virtual` (overridable only from derived classes or within the same assembly). `protected override` works for both, but the signature must match exactly.

## Mental Model

Reordering the 31 hooks by "what the game is doing at that moment" gives you a timeline. That timeline — not a list of method names — is the mental model a modder needs:

1. **Module load phase**: `OnSubModuleLoad` → `RegisterSubModuleTypes` → `InitializeSubModuleGameObjects`. No `Game`, no `Campaign`. Right place for type registration and static singletons.
2. **Startup assembly**: `OnBeforeGameStart` → `OnGameStart(game, gameStarterObject)`. **The only window for registering Behaviors, models and menus**, because `gameStarterObject` is only useful here.
3. **Game object creation**: `OnNewGameCreated` / `OnGameLoaded` / `OnAfterGameLoaded` / `DoLoading`. This is where new games and loads diverge.
4. **Initialisation finished**: `OnGameInitializationFinished` / `OnAfterGameInitializationFinished` / `OnCampaignStart` / `BeginGameStart`. **Choose this or later when you need `Campaign.Current`.**
5. **Runtime**: `OnApplicationTick(dt)` (every frame), `AfterAsyncTickTick(dt)`, `OnNetworkTick(dt)` (multiplayer). The three ticks are not interchangeable — `OnApplicationTick` still runs in multiplayer, but it must not mutate the world directly.
6. **Mission entry and exit**: `OnBeforeMissionBehaviorInitialize` → `OnMissionBehaviorInitialize` → (battle ends) → `OnSubModuleUnloaded`.
7. **Config and activation**: `OnConfigChanged`, `OnSubModuleActivated` / `OnSubModuleDeactivated` (editor module switching).

Four concrete mistakes dominate: **reading `Game.Current` before `OnGameStart`** (still null); **doing real work in `OnApplicationTick`** (it runs every frame); **overriding a hook without calling `base`** (which breaks engine state and surfaces far from the cause); and **touching mission-layer objects from `OnCampaignStart`** (no mission exists yet).

## When to Use / When Not To

- **Use**: to register custom MBObject types (`RegisterSubModuleTypes`).
- **Use**: to inject campaign extensions — Behaviors, models, menus, dialogue (`OnGameStart`).
- **Use**: to initialise once the campaign exists (`OnCampaignStart` / `OnAfterGameLoaded`).
- **Use**: to inject UI-layer ViewModels and screens (after `InitializeSubModuleGameObjects`).
- **Don't**: do non-trivial computation or file I/O in `OnApplicationTick`; it runs every frame.
- **Don't**: override `DoLoading(Game game)` returning `true` unless you really take over loading — returning true makes the engine skip the default load.
- **Don't**: read `Game.Current` or `Campaign.Current` in `OnSubModuleLoad`, `RegisterSubModuleTypes` or `OnBeforeGameStart`.

## Member Guide

### 1. Module load and type registration

| Member | What it is for, side effects, timing |
| --- | --- |
| `protected internal virtual void OnSubModuleLoad()` | The module DLL has just been loaded. Only the type system is available — **there is no `Game` instance yet**. Good for building static singletons. |
| `protected internal virtual void OnSubModuleUnloaded()` | The module is unloading. Pairs with the above; clean up static state. |
| `protected internal virtual void OnNewModuleLoad()` | A fresh module-load cycle begins (hot reload / editor scenarios). |
| `protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot()` | Fires **before** the initial screen is set as root. The hook for changing the start screen. |
| `protected internal virtual void RegisterSubModuleTypes()` | **The moment to register custom MBObject types.** Obtain the manager from `MBObjectManager.Instance` (or `Game.Current.ObjectManager` once `Game` exists). |
| `public virtual void InitializeSubModuleGameObjects(Game game)` | Create this module's game objects (UI dependencies, ViewModel factories, …). |
| `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` | Register game objects. `isSavedCampaign` distinguishes a load from a new campaign — **many mods get duplicate registration wrong here**. |
| `public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | After registration completes. |

### 2. Startup and assembly

| Member | What it is for, side effects, timing |
| --- | --- |
| `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)` | Before assembly. `disabledModules` tells you which modules are off, so you can skip expensive initialisation. |
| `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)` | **The most important hook.** In campaign mode `gameStarterObject` is a `CampaignGameStarter`; register Behaviors, models, menus and dialogue here. `Campaign.Current` is not yet reliable. |
| `public virtual bool DoLoading(Game game)` | Return `true` to take over the load flow. **Unless you really take over, return `false` or do not override.** |
| `public virtual void BeginGameStart(Game game)` | The game start flow begins. |
| `public virtual void OnGameInitializationFinished(Game game)` | Initialisation finished; `Game` and most of its children are ready. |
| `public virtual void OnAfterGameInitializationFinished(Game game, object starterObject)` | After initialisation finishes — the place for "one last registration". |
| `public virtual void OnInitialState()` | The initial state machine (editor / main menu phase). |

### 3. New game and load

| Member | What it is for, side effects, timing |
| --- | --- |
| `public virtual void OnNewGameCreated(Game game, object initializerObject)` | A new campaign was just created; world data is not yet assembled. |
| `public virtual void OnGameLoaded(Game game, object initializerObject)` | A save was loaded; world data is ready. **The hook mods that swap the player protagonist use.** |
| `public virtual void OnAfterGameLoaded(Game game)` | After loading completes — the right place for "patch up state after load". |
| `public virtual void OnGameEnd(Game game)` | The game is ending. Clean up non-persistent state. |

### 4. Campaign and mission

| Member | What it is for, side effects, timing |
| --- | --- |
| `public virtual void OnCampaignStart(Game game, object starterObject)` | The campaign has started. **One of the earliest hooks where `Campaign.Current` is safe.** |
| `public virtual void OnMissionBehaviorInitialize(Mission mission)` | In-mission Behaviors are initialised. The moment to add mission-layer extension points. |
| `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)` | Before in-mission Behavior initialisation. Register mission behaviors in the later hook. |
| `public virtual void OnMultiplayerGameStart(Game game, object starterObject)` | Multiplayer start. |

### 5. Ticks

| Member | What it is for, side effects, timing |
| --- | --- |
| `protected internal virtual void OnApplicationTick(float dt)` | Every frame. **Performance-sensitive**: O(n) traversals will drop frames. |
| `protected internal virtual void AfterAsyncTickTick(float dt)` | After the async tick; slightly heavier work is acceptable here. |
| `protected internal virtual void OnNetworkTick(float dt)` | Only called in multiplayer. |

### 6. Config, activation and lifecycle

| Member | What it is for, side effects, timing |
| --- | --- |
| `public virtual void OnConfigChanged()` | Configuration changed (resolution, language, quality). Rebuild UI-dependent resources here. |
| `public virtual void OnSubModuleActivated()` / `OnSubModuleDeactivated()` | A module was activated or deactivated in the editor. |
| `public virtual void OnGameEnd(Game game)` | Game shutdown. |

## Examples

### Example 1: The standard SubModule skeleton

Only four hooks are really used — and their moments are, respectively, "type registration", "inject campaign extensions", "initialise once the campaign exists" and "module unload".

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.ObjectSystem;

// VisitCounterBehavior and MyItemDef below are the reader's own types, not game API
public class VisitCounterBehavior : CampaignBehaviorBase
{
    public VisitCounterBehavior() : base("MyMod.VisitCounter") { }
    public override void RegisterEvents() { }
    public override void SyncData(IDataStore dataStore) { }
}

public class MyModSubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        // Neither Game nor Campaign exists here
    }

    protected override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
        // MyItemDef is also a reader-owned type
        MBObjectManager.Instance.RegisterType<MyItemDef>("MyItemDef", "MyItemDefs", 9101u, true);
    }

    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        // The one correct window for registering campaign extensions
        if (gameStarterObject is CampaignGameStarter starter)
        {
            starter.AddBehavior(new VisitCounterBehavior());
        }
    }

    protected override void OnCampaignStart(Game game, object starterObject)
    {
        base.OnCampaignStart(game, starterObject);

        // Campaign.Current is safe now
        if (Campaign.Current != null)
        {
            Campaign.Current.GetCampaignBehavior<VisitCounterBehavior>();
        }
    }

    protected override void OnSubModuleUnloaded()
    {
        base.OnSubModuleUnloaded();
    }
}
```

### Example 2: Restoring state after a load

The load path differs from the new-game path; only `OnGameLoaded` / `OnAfterGameLoaded` have a fully assembled world.

```csharp
using TaleWorlds.Core;

protected override void OnGameLoaded(Game game, object initializerObject)
{
    base.OnGameLoaded(game, initializerObject);
    RestoreModState();
}

protected override void OnAfterGameLoaded(Game game)
{
    base.OnAfterGameLoaded(game);
    // Do the "last pass after load" here: world data is fully ready by now
}

private void RestoreModState()
{
    if (game == null) return;
}
```

### Example 3: Using the per-frame tick correctly

`OnApplicationTick` fires every frame. Accumulate instead of working, and push real work to every half second.

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

private float _accumulator;

protected override void OnApplicationTick(float dt)
{
    base.OnApplicationTick(dt);

    // Accumulate rather than work: spread the real work to once every 0.5 s
    _accumulator += dt;
    if (_accumulator < 0.5f) return;

    _accumulator = 0f;
    if (Campaign.Current == null) return;
    if (Campaign.Current.MainParty == null) return;

    // actual work, twice a second
}
```

## Risks and Boundaries

- **`OnApplicationTick` performance.** It runs every frame, so an O(n) traversal visibly drops frames. Accumulating a timer and acting at intervals is the standard fix.
- **Reading `Game.Current` / `Campaign.Current` too early.** In `OnSubModuleLoad`, `RegisterSubModuleTypes` and `OnBeforeGameStart` the `Game` either does not exist or is not fully assembled. Move world access to `OnCampaignStart` or later.
- **Overriding without calling `base`.** The engine's own SubModules rely on these default implementations (notably the `DoLoading` return-value chain). Skipping `base` shows up somewhere unrelated.
- **The cost of `DoLoading` returning true.** It means the engine hands the load flow to your module. Not taking over means returning false.
- **The `isSavedCampaign` branch.** Ignoring it in `RegisterSubModuleObjects` produces duplicate objects on the second game — visible as doubled menus or UI.
- **Tick differences under multiplayer.** `OnNetworkTick` only exists online; logic placed there never runs in singleplayer. The timing of the ticks also differs, so logic in `OnNetworkTick` must assume a different cadence.
- **Module ordering.** The engine calls hooks in a fixed order regardless of load order. Reaching into another mod's `Game.Current` children is a dependency on its implementation, not a contract.
- **Leftover static state.** A singleton built in `OnSubModuleLoad` is never cleaned up automatically; after unload it still references a destroyed `Game`. Clear it in the unload hook.
- **Threading.** Every hook runs on the main thread. Calling into them from an async load callback breaks the ordering assumptions of the load pipeline.

## Dependencies

- Upstream / providers:
  - [Module](../Module) collects the SubModule instances of every loaded module and drives their hooks; `Module.CurrentModule` is the global access point.
  - [Game](../../core-extra/Game) drives `OnGameStart`, `OnGameLoaded`, `OnAfterGameLoaded`, `OnGameEnd` and the rest.
- Peers / downstream:
  - [MBObjectManager](../../campaign-ext/MBObjectManager) is where `RegisterSubModuleTypes` lands its type registrations; [MBObjectBase](../../campaign-ext/MBObjectBase) is the base of those types.
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) arrives through `OnGameStart`'s `IGameStarter` parameter and is the campaign registration console.
  - [MissionState](../../mission/MissionState) and [Mission](../../mission/Mission) are reached through `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize`.
  - [ViewModel](../../core-extra/ViewModel) is the UI data-binding base class, usually used after `InitializeSubModuleGameObjects`.
  - [ScreenManager](../../gui/ScreenManager) and [ScreenBase](../../gui/ScreenBase) are the objects UI hooks cooperate with.

## See Also

- ↑ Parent: [core index](../)
- ↔ Related: [Module](../Module) · [Game](../../core-extra/Game) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [CampaignGameStarter](../../campaign/CampaignGameStarter) · [MissionState](../../mission/MissionState) · [ScreenManager](../../gui/ScreenManager)