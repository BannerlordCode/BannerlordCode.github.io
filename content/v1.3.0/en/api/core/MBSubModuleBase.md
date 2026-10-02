---
title: "MBSubModuleBase"
description: "The abstract base every Bannerlord module entry point derives from. Thirty-one virtual hooks cover the whole game lifetime, from OnSubModuleLoad through OnBeforeGameStart, OnGameStart, InitializeGameStarter, OnCampaignStart and OnGameLoaded, to OnApplicationTick, mission callbacks and OnGameEnd. This page fixes the real access modifiers, the real call order, and the traps that silently break a mod."
---
# MBSubModuleBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBSubModuleBase`
**Base:** none (plain `System.Object` — no base class, no interface)
**Source:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## Overview

`MBSubModuleBase` is the single class every Bannerlord module must derive from, and the only place the engine looks when it wants to tell a module "something happened". It has no state of its own and no constructor logic: the whole type is thirty-one empty `virtual` methods whose only job is to be a named checkpoint on the game's lifecycle. The engine builds one instance of your subclass by reflection, keeps it in a `Dictionary<SubModuleInfo, MBSubModuleBase>`, and then walks that dictionary at a dozen different moments — module load, config change, game start, campaign start, save load, every application tick, mission setup, and game end. A mod that overrides nothing still runs; a mod that overrides the wrong hook at the wrong time usually does nothing visible and fails silently, which is why the exact modifiers and ordering below matter more than the method list.

## Mental Model

Read it as **"a set of named callbacks on the game's timeline"**, not as a service you call. Nothing in this class is ever invoked by you directly — the driver is `Module` (`TaleWorlds.MountAndBlade/Module.cs`), which holds the instance dictionary and fires the hooks.

**The real call order, in the order the engine actually fires them:**

1. `Module.Initialize()` → `ModuleHelper.InitializeModules(...)` → `LoadSubModules(...)` → `AddSubModule(...)` (reflection `new`, then `Managed.AddTypes`) → `InitializeSubModuleBases()` → **`OnSubModuleLoad()`** for every already-known submodule.
2. Hot-loaded modules take the `loadNewModules` branch instead: **`OnSubModuleLoad()`**, then `OnNewModuleLoaded()` → **`OnNewModuleLoad()`**.
3. `Module.SetInitialModuleScreenAsRootScreen()` → **`OnBeforeInitialModuleScreenSetAsRoot()`** before the root screen is pushed.
4. `Module.OnInitialModuleScreenActivated(...)` → after `InitialState` is pushed, **`OnInitialState()`** for every submodule.
5. Config edit → `EngineController.ConfigChange` → `Module.OnConfigChanged()` → **`OnConfigChanged()`**.
6. Module (un)load toggling → `Module.ActivateModule(id)` / `Module.DeactiveModule(id)` → **`OnSubModuleActivated()`** / **`OnSubModuleDeactivated()`**.
7. `MBGameManager.StartNewGame(gameLoader)` → `Module.OnBeforeGameStart(mbGameManager)` → **`OnBeforeGameStart(mbGameManager, disabledModules)`** for every submodule.
8. `Module.OnApplicationTick(dt)` → **`OnApplicationTick(dt)`**; if multiplayer is enabled, `Module.OnNetworkTick(dt)` → **`OnNetworkTick(dt)`**.

**Three traps that cost hours:**

- **The modifiers are not uniform.** `OnGameLoaded`, `OnCampaignStart`, `OnNewGameCreated`, `RegisterSubModuleObjects`, `AfterRegisterSubModuleObjects`, `OnInitialState`, `OnGameEnd`, `DoLoading`, and the mission hooks are declared `public virtual`. A `protected internal override void OnGameLoaded(...)` will **not compile**. `OnGameStart`, `InitializeGameStarter`, `OnApplicationTick`, `AfterAsyncTickTick`, `OnNetworkTick`, `OnSubModuleLoad`, `OnSubModuleUnloaded`, `OnBeforeInitialModuleScreenSetAsRoot`, `RegisterSubModuleTypes`, `OnNewModuleLoad`, and `OnBeforeGameStart` are `protected internal virtual`, so those accept `public override`, `protected internal override`, or `protected override`. The shipped `SandBox`/`StoryMode` modules use both spellings for the latter group; both are legal.
- **`OnApplicationTick` only fires for *active* modules.** `Module.OnApplicationTick` iterates `Module.CollectSubModules()`, which is built from `ModuleHelper.GetActiveModules()`. If your module has been deactivated (e.g. by another mod's `OnBeforeGameStart`, or by a DLC/content filter), your tick hook stops being called entirely.
- **`DoLoading` is ANDed across all submodules.** `SandBoxGameManager` runs `flag = flag && mbsubModuleBase.DoLoading(Game.Current)` and then steps back to the loading screen when the aggregate result is false. Returning `false` is a *retry signal*, not a "veto" — a module that always returns `false` will pin the loading screen forever. The base implementation returns `true`.

## When to Use / When NOT to Use

**Use `MBSubModuleBase` when:**
- You are writing a module that must be discovered by `ModuleHelper` — the class named in your `SubModule.xml` `SubModuleClassTypeName` must derive from it, with a public or non-public **parameterless constructor** (the engine invokes `GetConstructor(Instance|Public|NonPublic|CreateInstance, null, new Type[0], null)`).
- You need to register `GameModel`s once per game: `OnGameStart` and `InitializeGameStarter` are the only two hooks that receive an `IGameStarter`.
- You need to veto a module by appending its id to the `disabledModules` list in `OnBeforeGameStart` — that is the *only* supported way; there is no return value to set.

**Do NOT use `MBSubModuleBase` when:**
- You want per-campaign reactive logic — that belongs in a `CampaignBehaviorBase` registered through `IGameStarter`, which gives you `RegisterEvents`, `SyncData` and automatic save survival. A behavior is re-registered by the engine; a submodule instance is not.
- You want per-mission reactive logic — that is a `MissionBehavior` / `MissionBehaviorBase`, driven by `OnMissionBehaviorInitialize`.
- You want to poll the world every frame with meaningful state. `OnApplicationTick` fires on **every** application frame, including frames where `Game.Current` is null and the campaign is not loaded. Anything you read there must be null-guarded.

## Dependencies

- [Module](../Module/) — the engine-side driver that owns the instance dictionary and fires every hook on this page.
- [IGameStarter](../../core-extra/IGameStarter/) — the model-registration interface handed to `OnGameStart` and `InitializeGameStarter`.
- [GameStateManager](../../core-extra/GameStateManager/) — the state stack that `OnBeforeInitialModuleScreenSetAsRoot` and the campaign hooks bracket.
- [Game](../../core-extra/Game/) — the `Game` object passed to most hooks; null outside a running game.
- [CampaignGameStarter](../../campaign/CampaignGameStarter/) — what `starterObject` actually is when `OnCampaignStart` fires.
- [Module system architecture](../../../architecture/module-system/) — how `SubModule.xml` binds a class to this base.

## Key Members

### Module lifetime

#### `protected internal virtual void OnSubModuleLoad()`
First hook after your instance is constructed, and the only one that reliably runs at DLL-load time before any game exists. Register `[SaveableType]`-adjacent metadata, harmony patches, or your static caches here. **Contract:** must not throw — a throw here happens before any error UI exists.

#### `protected internal virtual void OnNewModuleLoad()`
Only fires for modules hot-loaded at runtime (the `loadNewModules` branch of `Module.LoadSubModules`), not for modules present at startup. Overriding both `OnSubModuleLoad` and `OnNewModuleLoad` duplicates work for hot-loaded modules; pick one and guard.

#### `protected internal virtual void OnSubModuleUnloaded()`
Teardown counterpart of `OnSubModuleLoad`. The process is usually already unwinding here, so avoid touching game objects.

### Game start / veto

#### `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)`
Called by `Module.OnBeforeGameStart(mbGameManager)` before any game starts. **This is the module-veto hook:** append module ids to `disabledModules` and `Module` calls `DeactiveModule(id)` for each one that is currently active, which fires `OnSubModuleDeactivated()` on that module's submodules. It is also where `InformationManager.ClearAllMessages()` is called afterwards, so messages you queue here are discarded.

#### `public virtual bool DoLoading(Game game)`
Returns whether the loading screen step completed. Callers aggregate it with logical AND and re-run the loading step while the aggregate is false. **Contract:** return `true`; only return `false` if you have genuinely not finished an asynchronous step and want the engine to come back.

### Model registration

#### `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)`
Fires for **every** game start — new game, save load, editor, and multiplayer. `gameStarterObject` is the `IGameStarter` you feed `AddModel(...)` into. This is the correct hook for a model that must exist in every mode.

#### `protected internal virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`
Fires for every mode too, and fires *before* `OnGameStart` in the campaign flow. Because it also runs in all loading modes, it is the safest place to register `CampaignBehaviorBase` behaviors that must be present on both new games and loaded saves.

### Campaign / save lifecycle

#### `public virtual void OnCampaignStart(Game game, object starterObject)`
New-campaign only (does **not** fire on a plain save load). `starterObject` is the `CampaignGameStarter`; cast it and call `AddBehavior(...)`.

#### `public virtual void OnGameLoaded(Game game, object initializerObject)`
Save-load only. `initializerObject` is **not** the campaign starter — it is whatever the save path passes (typically a loading-progress/`InitializationArgs`-shaped object), so do not cast it to `CampaignGameStarter`.

#### `public virtual void OnNewGameCreated(Game game, object initializerObject)`
Fires after a brand-new campaign object exists, before load finishes.

#### `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` / `AfterRegisterSubModuleObjects(bool isSavedCampaign)`
Called around the creation of custom `MBObjectManager` types. `isSavedCampaign` tells you whether a save is being restored, so you can register a type only for new campaigns — or register it always and populate it from `SyncData` on load.

### Per-frame

#### `protected internal virtual void OnApplicationTick(float dt)`
Fires every application frame for **active** modules only. Runs before and after the campaign exists, so guard every read of `Game.Current` and `Campaign.Current`.

#### `protected internal virtual void AfterAsyncTickTick(float dt)`
Same cadence, after the async/synchronization-context tick has drained.

#### `protected internal virtual void OnNetworkTick(float dt)`
Only when `GameNetwork.MultiplayerDisabled` is false.

### Mission / end

#### `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)` / `OnMissionBehaviorInitialize(Mission mission)`
Bracket the point at which mission behaviors are attached. Use them to inject `MissionBehaviorBase` instances or push `MissionBehavior` callbacks, not to touch agents (agents do not exist yet during `Before`).

#### `public virtual void OnGameEnd(Game game)`
Fires as the game tears down. `Module.OnGameEnd()` also re-activates every inactive module here, so ordering matters if you cache module state.

#### `public virtual void InitializeSubModuleGameObjects(Game game)`
Extension point for creating your own `ManagedObject` subclasses for `Game.Current.ObjectManager`; must be callable again on every load.

## Examples

### Example 1 — a complete module entry point

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // SubModule.xml must name "MyMod.MySubModule" as SubModuleClassTypeName.
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnSubModuleLoad()
        {
            // Runs before any Game exists. Only register, never query the world.
            MBDebug.Print("MyMod loaded");
        }

        public override void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)
        {
            // The only supported way to veto a module is to append its id here.
            if (mbGameManager != null && !MyConfig.Enabled)
            {
                disabledModules.Add("SomeOtherModuleId");
            }
        }

        protected internal override void OnApplicationTick(float dt)
        {
            // Fires only while this module is ACTIVE. Guard every world read.
            if (Game.Current == null || Campaign.Current == null)
            {
                return;
            }
            MyTickSystem.Update(dt);
        }

        public override bool DoLoading(Game game)
        {
            // Aggregate AND across all submodules; false means "run loading again".
            return true;
        }
    }
}
```

### Example 2 — registering a model and a behavior from `InitializeGameStarter`

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
        {
            // Runs in EVERY loading mode: new game, save load, editor, multiplayer.
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new MyCampaignBehavior());
            starterObject.AddModel(new MyGameModel());
        }

        public override void OnGameLoaded(Game game, object initializerObject)
        {
            // Save load only. initializerObject is NOT a CampaignGameStarter.
            MBDebug.Print("save loaded, campaign = " + (Campaign.Current != null));
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** Nothing on this base class serializes. Fields you set in `OnSubModuleLoad` or `OnCampaignStart` on the submodule instance live in a plain singleton that survives no save/load. Anything that must survive a reload belongs in a `CampaignBehaviorBase.SyncData(IDataStore)` body, keyed by a `DataStore.GetStruct<int>()` slot you own.
- **Custom `MBObjectManager` types.** `InitializeSubModuleGameObjects` and `RegisterSubModuleObjects` create objects owned by `Game.Current.ObjectManager`. When a save created without those objects is loaded with your module enabled, those objects do not exist; the engine's `SaveableTypeDefiner` scheme means you also need a save type definer. Adding a new `SaveableTypeDefiner` in a later patch changes the global definition id space and invalidates older saves.
- **Cross-domain dependency.** `MBSubModuleBase` lives in `TaleWorlds.MountAndBlade`, but `OnCampaignStart` hands you a `TaleWorlds.CampaignSystem.CampaignGameStarter` and `Game` itself references `TaleWorlds.CampaignSystem` types. If you reference `Campaign.Current` from a submodule that also loads in the **editor** or on a **dedicated server**, you will null-ref: those modes have no `Campaign`.
- **Load order.** `OnSubModuleLoad` order is `Dictionary<SubModuleInfo, MBSubModuleBase>` enumeration order, i.e. the order `ModuleHelper.GetModules` returned them — *not* your declared dependency order. Never assume another module's `OnSubModuleLoad` already ran. Use `RegisterSubModuleTypes` or an explicit hook of your own for cross-module handshakes.
- **ID stability.** Module ids referenced in `disabledModules`, in `ModuleHelper` calls and in `SubModule.xml` `DependantModules` are plain strings from your module's folder name. Renaming the module folder or changing `ModuleInfo.Id` breaks every save that stored the id and every DLC/dependency declaration.
- **Reflection construction.** `Module.AddSubModule` invokes the **parameterless** constructor via `BindingFlags.Instance | Public | NonPublic | CreateInstance`. A constructor with required parameters means your module is silently never created — no exception, no log line, your hooks simply never fire.
- **Per-frame cost.** `OnApplicationTick` runs every frame for every active module. `MBDebug.Print` there is a common cause of severe frame-time regressions; gate it behind a config flag.

## Cross-Version Notes

- **v1.3.0:** the type is `public abstract class MBSubModuleBase` with no base and no interface, exactly as described. All thirty-one hooks listed above exist with these exact modifiers.
- **v1.3.15 / v1.4.5:** the hook set is stable and the `protected internal` vs `public` split is unchanged, so override signatures written for v1.3.0 still compile. Later versions add hooks at the end of the timeline (`OnSubModuleActivated` / `OnSubModuleDeactivated` / `ShutDownWithDelay` era members appear in the `Module` driver rather than on this base), but nothing existing was re-modifiered.
- **Not on this class:** there is no `OnNewGameDataEnded`, no `InitializeCampaign`, and no `OnMissionEnd`. If a tutorial shows those on `MBSubModuleBase`, it is describing a different type or a mod-local shim.

## See Also

- ↑ Parent bucket: [Core API index](../)
- ↔ Sibling: [Module](../Module/) — the driver that owns the instance dictionary and fires these hooks
- ↪ Starter contract: [IGameStarter](../../core-extra/IGameStarter/)
- ↪ State stack: [GameStateManager](../../core-extra/GameStateManager/)
- ↪ Campaign world: [Campaign](../../campaign/Campaign/)
- ↪ Campaign registration: [CampaignGameStarter](../../campaign/CampaignGameStarter/)
- ↑ Architecture: [Module system](../../../architecture/module-system/)