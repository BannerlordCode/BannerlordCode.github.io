---
title: "MBGameManager"
description: "MountAndBlade session bootstrap abstract class: StartNewGame / EndGame, and broadcast of load stages to every MBSubModuleBase."
---

# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MBGameManager : GameManagerBase`  
**Base:** `GameManagerBase`  
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`  
**Authority source:** 1.4.5 (same semantics as 1.3.15)

## Overview

`MBGameManager` is the MountAndBlade-layer **session bootstrapper** for one campaign run, custom battle, or load flow. It extends `GameManagerBase`. Concrete mode subclasses (campaign loader, editor, multiplayer, and so on) implement it. When the engine starts a new game or load, it creates one subclass instance and drives:

1. Push `GameLoadingState`
2. Create / bind [Game](../../core-extra/Game)
3. Call every [MBSubModuleBase](../../core/MBSubModuleBase) hook in a fixed order
4. On session end, clear Mission state and run `OnGameEnd`

For **most mods**, you do **not** subclass `MBGameManager`. You respond in your own `MBSubModuleBase` to the callbacks this class forwards (`OnGameStart`, `RegisterSubModuleTypes`, and so on). Only custom game modes or tool loaders subclass `MBGameManager` and call `StartNewGame(loader)`.

## Mental Model

```
Main menu / load UI
    │  MBGameManager.StartNewGame(concreteLoader)
    ▼
Module.OnBeforeGameStart(loader)     ← each SubModule.OnBeforeGameStart
GameLoadingState pushed
    │  loader drives load steps
    ▼
Game created and initialized
    │  BeginGameStart → Register* → Initialize* → OnGameStart → …
    ▼  (each step foreach Module.CollectSubModules())
Running: Game.Current + MBGameManager.Current
    │  EndGame() / return to menu
    ▼
End Mission → CleanStates → OnGameEnd → clear session
```

**Three roles. Do not mix them:**

| Type | Role |
|------|------|
| `MBSubModuleBase` | **Your mod entry**; register Behavior / Model / types |
| `MBGameManager` | **Session bootstrap**; broadcasts stages to all SubModules |
| `Game` | **Session singleton container**; ObjectManager, GameType, state machine |

`MBGameManager.Current` is `(MBGameManager)GameManagerBase.Current`, the active loader. With no session bootstrap it may be null.

**When to use**

- Understanding why your `OnGameStart` runs at a given time
- Custom game mode: implement a subclass + `StartNewGame(thisLoader)`
- Diagnosing load order / registration timing vs other mods

**When not to use**

- Ordinary content mods that `new` or replace `Current`
- Calling `EndGame()` from a Behavior as if it were "close a menu" (too heavy; tears down the whole session)
- Putting business logic in a custom `MBGameManager` subclass (keep it in SubModule / Behavior)

## Dependencies

| Direction | Type / system | Relationship |
|-----------|---------------|--------------|
| Base | [GameManagerBase](../../core-extra/GameManagerBase) | Abstract session manager API |
| Broadcast targets | [MBSubModuleBase](../../core/MBSubModuleBase) | Each load stage `foreach CollectSubModules()` |
| Session | [Game](../../core-extra/Game) | Session passed into `BeginGameStart` / `OnGameStart` / … |
| Module host | `Module.CurrentModule` | Collects SubModules; `OnBeforeGameStart` / `OnGameEnd` |
| State machine | `GameStateManager` / `GameLoadingState` | `StartNewGame` pushes load state |
| Mission | [Mission](../../mission/Mission) | `EndGame` ends the current Mission and pops state |
| Objects | [MBObjectBase](../../campaign-ext/MBObjectBase) / ObjectManager | Registered during `RegisterSubModuleTypes/Objects` |
| Platform | `SessionInvitationType` and related | Invitation / platform multiplayer can call `EndGame` |

## Load stages and SubModule hooks (required reading for mods)

These methods are **overridden** on `MBGameManager`. The body walks SubModules and calls matching hooks (names match the SubModule side):

| GameManager stage | Typical SubModule hook | What mods do here |
|-------------------|------------------------|-------------------|
| Before `StartNewGame` | `OnBeforeGameStart` | Check disabled modules, compatibility |
| `BeginGameStart` | `BeginGameStart` | Session just starting |
| `RegisterSubModuleTypes` | `RegisterSubModuleTypes` | `MBObjectManager.RegisterType` |
| `RegisterSubModuleObjects` | `RegisterSubModuleObjects` | Register object instances (load vs new) |
| `AfterRegisterSubModuleObjects` | `AfterRegisterSubModuleObjects` | Patches after full registration |
| `InitializeGameStarter` | `InitializeGameStarter` | Early starter config |
| `OnGameStart` | `OnGameStart` | **AddBehavior / AddModel** (most common) |
| `OnNewGameCreated` | `OnNewGameCreated` | New save only |
| `OnGameLoaded` / `OnAfterGameLoaded` | same names | Fixups after load |
| `OnNewCampaignStart` | `OnCampaignStart` | Campaign fully starting |
| `InitializeSubModuleGameObjects` | same name | Game-object level init |
| `OnGameInitializationFinished` / `OnAfter…` | same names | Init tail; engine post-work (skeleton scale, etc.) also here |
| `OnLoadFinished` | — | This class sets `IsLoaded = true` |
| `OnGameEnd` | `OnGameEnd` + `Module.OnGameEnd` | Cleanup; also `MissionGameModels.Clear()` |

**Key point:** you override methods on `MBSubModuleBase`, not on `MBGameManager` (unless you are writing a loader).

## Risks and crash boundaries

| Risk | Outcome | Mitigation |
|------|---------|------------|
| Touch `Campaign.Current` / unregistered objects at the wrong stage | NRE, missing objects | Stick to the stage table; look up objects only after Register |
| Ordinary mod calls `EndGame()` | Whole session exits; Mission forced down | Only for leave-session / platform switch; daily logic uses menu / state pop |
| Concurrent `EndGame` | Second `CheckAndSetEnding` returns false | Rely on the lock; do not assume every call runs full cleanup |
| Treat session as ready while `!IsLoaded` | Half-initialized state | Wait until after `OnLoadFinished` / `OnGameStart` |
| Custom loader skips `base` / stages | Other mods' hooks never fire | Keep engine-expected stage order |
| Cache `Game.Current` after `OnGameEnd` | Dangling refs | Clear static / singleton caches on end |
| Mix with `MBSubModuleBase` lifetime | Assume campaign exists in SubModuleLoad | `OnSubModuleLoad` ≠ having a `Game`; campaign logic goes in `OnGameStart` |

## Key members

### Static entry points

| Member | Purpose and timing |
|--------|--------------------|
| `static void StartNewGame(MBGameManager gameLoader)` | Main entry: `OnBeforeGameStart` → create `GameLoadingState` → `CleanAndPushState`. |
| `static async void EndGame()` | Wait for `IsLoaded`, `CheckAndSetEnding`, end Mission or `CleanStates`. |
| `static MBGameManager Current` | Current loader (cast from `GameManagerBase.Current`). |

### State

| Member | Purpose |
|--------|---------|
| `bool IsEnding` | Whether end flow has started. |
| `bool IsLoaded` | True after `OnLoadFinished`. |
| `bool CheckAndSetEnding()` | Thread-safe first mark of ending; returns false if already ending. |
| `ApplicationTime` / `CheatMode` / `IsDevelopmentMode` / `IsEditModeOn` | Bridge native config and editor state. |
| `UnitSpawnPrioritization` | From `BannerlordConfig`. |

### Stage broadcasts (see table above)

`BeginGameStart`, `RegisterSubModuleTypes`, `RegisterSubModuleObjects`, `AfterRegisterSubModuleObjects`, `InitializeGameStarter`, `InitializeSubModuleGameObjects`, `OnGameStart`, `OnNewGameCreated`, `OnGameLoaded`, `OnAfterGameLoaded`, `OnNewCampaignStart`, `OnGameInitializationFinished`, `OnAfterGameInitializationFinished`, `OnGameEnd`, `OnLoadFinished`.

`OnGameStart` also sets `MonsterMissionDataCreator`, `AddGameModelsManager<MissionGameModels>`, and binds `Monster` skeleton queries.

### Platform

| Member | Purpose |
|--------|---------|
| `OnSessionInvitationAccepted` | Calls `EndGame()` when type is not None. |
| `OnPlatformRequestedMultiplayer` | Calls `EndGame()`. |

## Real examples

### Example 1: Ordinary mod, SubModule only (recommended path)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModSubModule : MBSubModuleBase
{
    // Called via MBGameManager.OnGameStart → walk SubModules
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        if (game.GameType is Campaign)
        {
            gameStarterObject.AddBehavior(new MyCampaignBehavior());
            gameStarterObject.AddModel(new MyCombatModel());
        }
    }

    // Broadcast from MBGameManager.RegisterSubModuleTypes
    protected override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
        // MBObjectManager.Instance.RegisterType<...>(...);
    }
}
```

### Example 2: Understanding the StartNewGame call chain (engine-side pattern)

```csharp
using TaleWorlds.MountAndBlade;

// Engine / custom mode entry (mods almost never write this directly)
// Pass the loader for "this session", not your SubModule
void LaunchCampaign(MBGameManager campaignLoader)
{
    MBGameManager.StartNewGame(campaignLoader);
    // Internally:
    // Module.CurrentModule.OnBeforeGameStart(campaignLoader);
    // var state = GameStateManager.Current.CreateState<GameLoadingState>();
    // state.SetLoadingParameters(campaignLoader);
    // GameStateManager.Current.CleanAndPushState(state);
}
```

### Example 3: Safe query of current load state

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static bool IsCampaignSessionReady()
{
    if (Game.Current == null)
        return false;

    MBGameManager mgr = MBGameManager.Current;
    if (mgr == null || mgr.IsEnding || !mgr.IsLoaded)
        return false;

    return Game.Current.GameType is Campaign;
}
```

### Example 4: Do not do this (anti-patterns)

```csharp
// BAD: end the whole session from everyday Behavior code
// MBGameManager.EndGame();

// BAD: assume Campaign.Current exists in OnSubModuleLoad
// var c = Campaign.Current.MainParty; // usually no session yet
```

## Cross-version notes

- **1.3.x / 1.4.5:** `StartNewGame(MBGameManager)` + stage broadcast model is stable.
- `EndGame` is `async void` and polls Mission end with `Task.Delay`; platform invite paths call it directly.
- Concrete campaign loader type names live in SandBox / boot modules. Content mods bind **SubModule hooks** and need not depend on specific Loader type names.

## ↑ Parent Navigation

- [mission-ext index](./) — module for this page
- [SDK overview](../../../architecture/sdk-overview)
- [Module system](../../../architecture/module-system) — full SubModule lifecycle map

## ↔ Sibling Navigation

| Page | Relationship |
|------|--------------|
| [MBSubModuleBase](../../core/MBSubModuleBase) | Mod entry that this class broadcasts to |
| [Game](../../core-extra/Game) | Session singleton |
| [GameManagerBase](../../core-extra/GameManagerBase) | Abstract base |
| [Mission](../../mission/Mission) | `EndGame` ends the current mission |
| [MBObjectBase](../../campaign-ext/MBObjectBase) | Root of type/object registration stages |
| [Campaign](../../campaign/Campaign) | Campaign `GameType` |
| [SaveManager](../../save-system/SaveManager) | Load session and save |

## See also

- [Doc contract](../../../architecture/doc-contract)
- [Save system](../../../architecture/save-system)
