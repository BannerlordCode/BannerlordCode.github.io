---
title: "MBGameManager"
description: "The engine-owned game bootstrap: it creates and holds the Game, then broadcasts the loading/start/load-save/end phases in a fixed order to every loaded module's SubModule."
---

# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MBGameManager : GameManagerBase`  
**Base:** `GameManagerBase`  
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## Overview

`MBGameManager` is the **top-level bootstrap** that the engine creates when the process starts and holds for the whole session. It does almost nothing itself; its core job is to create the `Game` object and then, in a fixed sequence, **broadcast lifecycle events** — "start game / register module / initialize / create new game / load save / end" — to every loaded module's `MBSubModuleBase`. The real single-player instance is `SandBoxGameManager` (a subclass of `MBGameManager`), produced after a SandBox / StoryMode SubModule pushes the loading state machine via the static method `MBGameManager.StartNewGame`. Every mod extension ultimately enters the game through these broadcast hooks, not by talking to `MBGameManager` directly.

## Mental Model

Think of `MBGameManager` as the **conductor of the loading flow**: it is an event broadcaster, not a business object you inherit or call.

- **Who creates / holds it:** the engine (more precisely, concrete subclasses such as SandBox's `SandBoxGameManager`), set up via `MBGameManager.StartNewGame(new SandBoxGameManager(...))`. Its reference is also stored in `GameManagerBase.Current` and exposed through the static property `MBGameManager.Current` to any code that already has a game context.
- **What layer it sits in:** the Foundation / bootstrap layer. It sits below `Game`, `Campaign`, and each `MBSubModuleBase`, and is the entry point of the entire process lifecycle.
- **What it actually does:** nearly every `On*` / `Register*` / `Begin*` override body is the same line — `foreach (MBSubModuleBase item in Module.CurrentModule.CollectSubModules()) item.XXX(...)`. In other words, MBGameManager's main task is to **fan the phase events out to all SubModules**; a few methods (`OnGameStart`, `OnGameInitializationFinished`) also do a bit of engine-level initialization (set up `MonsterMissionDataCreator`, register `MissionGameModels`, `SkeletonScale` bone indices, and so on).
- **Your relationship to it:** a mod almost never inherits, instantiates, or `new`s it. You only "touch" it in two situations: `MBGameManager.Current` (read global state like `IsEnding` / `IsLoaded`) and `MBGameManager.EndGame()` (request to quit the game). The real extension entry points are the load-phase hooks of `MBSubModuleBase`, plus registering `CampaignBehaviorBase` through `CampaignGameStarter.AddBehavior`.

## When to Use / When Not to Use

**Do NOT use `MBGameManager` (this covers the vast majority of mod needs):**

- Want to add campaign logic in a new game → don't touch `MBGameManager`; in `MBSubModuleBase.InitializeGameStarter`, `AddBehavior` your behavior to `CampaignGameStarter` (see example below).
- Want to listen for "game start / save loaded / game end" → write it in `MBSubModuleBase`'s `OnGameStart` / `OnGameLoaded` / `OnGameEnd` phase hooks, not by overriding `MBGameManager` methods.
- Want to end the game proactively (e.g. a UI button or a story trigger) → call the static method `MBGameManager.EndGame()`, not `new` up a manager or manually clear state.

**Correct alternatives summarized:** the only "entry" a mod has into the start/load flow is the load-phase methods of `MBSubModuleBase`; the "entry" to world data is `Game.Current` / `Campaign.Current`; the "entry" to behaviors is `CampaignGameStarter.AddBehavior`. `MBGameManager` itself is engine-internal scheduling and is not part of the mod extension surface.

## Dependencies

**Upstream (MBGameManager depends on / is driven by its broadcasts):**

- [MBSubModuleBase](../../core/MBSubModuleBase/) — the actual receiver of all load-phase events; the only entry point for mod extensions.
- [GameManagerBase](../../core-extra/) (Core base class, bucket index) — the base class of `MBGameManager`, holding `Current`, the component system, and the load-step state machine.
- `Module.CurrentModule` (`TaleWorlds.MountAndBlade.Module`, see the [mission-ext directory](../)) — provides `CollectSubModules()`; the phase broadcast simply iterates over it.

**Downstream (MBGameManager creates / drives / passes in the objects):**

- [Game](../../core-extra/Game/) — created inside `DoLoadingForGameManager` via `Game.CreateGame(...)` and present throughout.
- [Campaign](../../campaign/Campaign/) — the `GameType` of the single-player campaign, produced by `SandBoxGameManager`'s `CampaignCreatorDelegate`.
- [CampaignGameStarter](../../campaign-ext/CampaignGameStarter/) and [IGameStarter](../../core-extra/IGameStarter/) — passed to each SubModule during the `InitializeGameStarter` phase; the vehicle for registering `CampaignBehaviorBase`.
- `MissionGameModels` — injected at `OnGameStart` via `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)`.

**Save / load hooks:**

- `OnGameLoaded` / `OnAfterGameLoaded` / `OnLoadFinished` form the load path (fired only when loading a save), ultimately driven by [SaveManager](../../save-system/SaveManager/)'s load flow; `OnLoadFinished` sets `IsLoaded = true`.

## Risks

- **Engine-exclusive lifecycle:** `MBGameManager`'s instance is created by the engine and written into `GameManagerBase.Current`. Any `new SandBoxGameManager(...)` / `new MBGameManager(...)` will not connect to the loading state machine — it only yields a detached object whose phase callbacks will never be invoked.
- **Load-order sensitivity:** phases are broadcast strictly in order (`RegisterSubModuleObjects` → `RegisterSubModuleTypes` → `AfterRegisterSubModuleObjects` → `InitializeGameStarter` → `OnGameInitializationFinished` → `OnNewCampaignStart` → `OnNewGameCreated` → `OnGameStart`; the load path is `OnGameLoaded` → `OnAfterGameLoaded` → `OnLoadFinished`). Before `InitializeGameStarter`, `Campaign.Current` may not yet be ready; accessing world objects too early yields `null` or throws. Register behaviors through `AddBehavior` inside `InitializeGameStarter`, not in the earlier `Register*` phases.
- **Don't write world state in the wrong phase:** before `OnGameInitializationFinished`, `Game.Current.ObjectManager` and the like may not be fully populated; during a load, `OnNewGameCreated` will not fire (it is new-game-only), so load logic must live in `OnGameLoaded` / `OnAfterGameLoaded`.
- **Save consistency:** modifying `Campaign` data inside `OnGameLoaded` / `OnAfterGameLoaded` is risky — the save has already been deserialized, and an improper assignment can break load consistency or conflict with [SaveManager](../../save-system/SaveManager/)'s version validation.
- **`EndGame()` is asynchronous:** `MBGameManager.EndGame()` is `async void`; it waits for the current task to finish, pops the Mission state, then cleans up. Repeat calls are guarded by the atomic flag in `CheckAndSetEnding()` (returns `false` if already ending), but you should not initiate re-entrant loads inside `OnGameEnd` either.
- **Don't hold `Game` / `MBGameManager` references after `OnGameEnd`:** the base `OnGameEnd` nulls out `Current` and `Game`; accessing `MBGameManager.Current` / `Game.Current` afterwards yields `null`.

## Members

Grouped by theme below. Every method is an override point **called by the engine** during the load/run flow; almost all of them just fan the same event out to all SubModules.

### Creation and startup (engine-called, mods don't touch)

**`StartNewGame(MBGameManager gameLoader)`** (static) — the entry to start a new game. First calls `Module.CurrentModule.OnBeforeGameStart(gameLoader)`, then creates a `GameLoadingState` and `CleanAndPushState` pushes it into the state machine. Called by SandBox / StoryMode / CustomBattle SubModules (e.g. `new SandBoxGameManager(loadResult)`); mods should not call it directly.

**`EndGame()`** (static, `async void`) — request to end and quit the current game. Polls until the manager finishes loading, pops `MissionState` layer by layer (calling `EndMission()` first if needed), then cleans up all game state. Called by the engine, native UI (e.g. the map-screen quit button, the game-over screen), and platform invitation callbacks.

**`CheckAndSetEnding()`** — thread-safely tries to set the "ending" flag and returns whether the set succeeded (returns `false` if already ending). `EndGame()` uses it for idempotent protection; you can read-only judge state via `MBGameManager.Current.IsEnding`, but don't use the return value as a business lock.

### Module load-phase broadcasts (core mechanism)

**`BeginGameStart(Game game)`** — called by the loading state machine just before the game formally starts (before the main menu / character creation); for each SubModule from `CollectSubModules()` it calls `BeginGameStart(game)`. Broadcast only, creates nothing; at this point `Game.Current` exists but the campaign world is not yet fully initialized.

**`RegisterSubModuleObjects(bool isSavedCampaign)`** — broadcasts `RegisterSubModuleObjects` to each SubModule, for registering objects that need to be registered with the game object system. `isSavedCampaign` marks whether the current run is a load or a new game.

**`RegisterSubModuleTypes()`** — broadcasts `RegisterSubModuleTypes`, for registering types (usually not where you extend day-to-day).

**`AfterRegisterSubModuleObjects(bool isSavedCampaign)`** — broadcast after `RegisterSubModuleObjects`, giving SubModules a second hook saying "objects are all registered".

**`InitializeGameStarter(Game game, IGameStarter starterObject)`** — **this is the most critical place for a mod to register campaign behaviors.** The engine broadcasts `IGameStarter` (concretely `CampaignGameStarter` under single-player) to each SubModule; you should cast it to `CampaignGameStarter` inside `MBSubModuleBase.InitializeGameStarter` and `AddBehavior(...)`. Both the new-game and load paths go through here.

**`OnGameInitializationFinished(Game game)`** — broadcast when game initialization completes; meanwhile MBGameManager iterates `Game.Current.ObjectManager`'s `SkeletonScale` and precomputes and sets bone indices (`SetBoneIndices`). Engine-level finishing; mods usually just do light cleanup.

**`OnAfterGameInitializationFinished(Game game, object initializerObject)`** — a second broadcast after `OnGameInitializationFinished`, giving SubModules a hook saying "initialization is completely done".

### Campaign / new-game phases

**`OnNewCampaignStart(Game game, object starterObject)`** — broadcast to each SubModule's `OnCampaignStart(game, starterObject)` when a new campaign starts (after character creation). `starterObject` is the campaign's start parameters (e.g. `CampaignGameStarter`).

**`OnNewGameCreated(Game game, object initializerObject)`** — broadcast when the new game object is created; **fires only for new games, not for loads.** Good for one-time initialization that should happen only in a fresh campaign.

**`OnGameStart(Game game, IGameStarter gameStarter)`** — broadcast to each SubModule's `OnGameStart` when the game truly starts (after menu / character creation). MBGameManager itself does here: set `Game.Current.MonsterMissionDataCreator`, register `MissionGameModels` with `gameStarter.Models`, and wire callbacks like `Monster.GetBoneIndexWithId` into `MBActionSet`. At this point `Campaign.Current` is usable — the most common "game is ready" hook.

### Load phases (only when loading a save)

**`OnGameLoaded(Game game, object initializerObject)`** — broadcast to each SubModule's `OnGameLoaded` after the save is deserialized. Load-only; the new-game path does not go here.

**`OnAfterGameLoaded(Game game)`** — a second broadcast after `OnGameLoaded`, giving SubModules a hook saying "load is completely done".

**`OnLoadFinished()`** — final cleanup at the end of the whole loading flow, sets `IsLoaded = true`. `SandBoxGameManager`'s override also switches to the menu window or character creation (new game) here, or advances to the map state (load).

### End phase

**`OnGameEnd(Game game)`** — broadcast to each SubModule's `OnGameEnd` when the game ends, then calls `Module.CurrentModule.OnGameEnd()`, clears `MissionGameModels`, and finally the base class nulls `Current` and `Game`. Do not hold a `Game` reference after this call.

### Platform callbacks

**`OnSessionInvitationAccepted(SessionInvitationType targetGameType)`** — called by `OnSessionInvitationAcceptedJob` (via `MBGameManager.Current`) when the platform accepts a multiplayer invitation; if `targetGameType != None` it calls `EndGame()` directly. Usually no need to override.

**`OnPlatformRequestedMultiplayer()`** — called when the platform requests entering multiplayer mode; by default calls `EndGame()` directly. Usually no need to override.

### State access (mods may read)

**`Current`** (static property, `MBGameManager`) — returns the active manager (i.e. `GameManagerBase.Current` cast). Read global state in any code that already has a game context, e.g. `MBGameManager.Current.IsEnding`.

**`IsEnding`** (`bool`, read-only) — whether the game is ending. Set by `CheckAndSetEnding()` during the `EndGame()` flow; read-only use is fine.

**`IsLoaded`** (`bool`, protected set) — whether the loading flow has finished (set to `true` at `OnLoadFinished`). Can be used to judge "is the game world truly ready".

## Minimal Real Examples

### Example 1: Register a campaign behavior via SubModule in `InitializeGameStarter` (standard extension entry)

This is the standard way for a mod to inject its own logic into the campaign world. The engine calls `MBSubModuleBase.InitializeGameStarter` during the loading flow, and `MBGameManager` is exactly the source of that broadcast; here you cast `IGameStarter` to `CampaignGameStarter` and `AddBehavior`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // Earliest hook of module load; Game doesn't exist yet, only do light registration
        protected internal override void OnSubModuleLoad()
        {
        }

        // The engine calls this method via MBGameManager during the loading flow:
        // this is the correct place to register CampaignBehaviorBase
        protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
        {
            // gameStarterObject is passed in on both the new-game and load paths
            CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
            starter.AddBehavior(new MyCampaignBehavior());
        }

        // Called when the game truly starts (after menu/character creation); Campaign.Current is usable here
        protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            Campaign campaign = game.GameType as Campaign;
            if (campaign != null)
            {
                Hero mainHero = campaign.MainHero;
                // e.g. do one-time initialization here based on the main hero
            }
        }
    }
}
```

### Example 2: Read manager state / request quit in an existing context

Inside a behavior, UI callback, or other code that already has a `Game`, read the global state via `MBGameManager.Current`, or request a quit with `MBGameManager.EndGame()`:

```csharp
// Inside an existing Game context (e.g. some CampaignBehaviorBase or UI callback) read the current manager
MBGameManager manager = MBGameManager.Current;
if (manager != null && !manager.IsEnding)
{
    Game game = Game.Current;
    bool fullyLoaded = manager.IsLoaded;
}

// Triggered by UI/platform to quit the current game; the engine and many native screens call it this way
MBGameManager.EndGame();
```

## Cross-Version Notes

- v1.3.15 and v1.4.5 have identical `MBGameManager` public members: `StartNewGame`, `EndGame`, `Current`, `IsEnding`, `IsLoaded`, and the signatures and semantics of all `On*` / `Register*` / `Begin*` phase-broadcast methods are unchanged.
- Real subclasses: v1.3.15 already had `SandBoxGameManager`, `MultiplayerGameManager`, `CustomGameManager`, `EditorGameManager`; v1.4.5 additionally includes editor-purpose subclasses like `EditorSceneMissionManager`, which do not affect the mod extension surface.
- The mod side always uses only the `MBSubModuleBase` phases + `CampaignGameStarter.AddBehavior` to hook in, and this pattern is stable across both versions.

## See Also

**↑ Parent**

- [API Reference](../../) — the root API index for this version
- [mission-ext directory](../) — the combat-extension class directory (the bucket MBGameManager lives in)

**↔ Sibling (key types in the same start/world layer)**

- [MBSubModuleBase](../../core/MBSubModuleBase/) — the only entry for mod load-phase extension, the receiver of all phases
- [Game](../../core-extra/Game/) — the game object created and held by MBGameManager
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — the game-object registration system (referenced during load phases)

**Related types**

- [Campaign](../../campaign/Campaign/) — the single-player campaign world (`GameType`)
- [CampaignGameStarter](../../campaign-ext/CampaignGameStarter/) — the vehicle where `AddBehavior` registers campaign behaviors
- [IGameStarter](../../core-extra/IGameStarter/) — the starter interface passed in during the `InitializeGameStarter` phase
- [SaveManager](../../save-system/SaveManager/) — how the load flow drives `OnGameLoaded` / `OnLoadFinished`
