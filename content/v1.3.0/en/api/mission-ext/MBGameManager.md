---
title: "MBGameManager"
description: "Auto-generated class reference for MBGameManager."
---
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBGameManager : GameManagerBase`
**Base:** `GameManagerBase`
**File:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## Overview

`MBGameManager` is the abstract game-startup orchestrator: it is the object that walks every `MBSubModuleBase` through the load sequence, and it is what a mod's `MBSubModuleBase` is *called back through*. It derives from `GameManagerBase` (`MBGameManager.cs:12`) and adds a lifecycle flag, a `new static Current`, a shutdown routine and a re-entrancy guard.

It is a **per-game instance**, not a singleton you construct. Two concrete subclasses ship with the game: `SandBoxGameManager` (`SandBoxGameManager.cs:19`) for a normal campaign and `EditorSceneMissionManager` (`EditorSceneMissionManager.cs:10`) for editor scenes. Each is handed to `MBGameManager.StartNewGame(MBGameManager)`, which asks the current module for a pre-game callback, creates a `GameLoadingState`, sets the manager on it, and pushes it (`MBGameManager.cs:56` through `MBGameManager.cs:59`). The campaign path is `SandBoxSubModule.cs:136`.

The base class itself exists mostly to *broadcast*. `BeginGameStart`, `OnNewCampaignStart`, `InitializeSubModuleGameObjects`, `RegisterSubModuleObjects`, `RegisterSubModuleTypes`, `AfterRegisterSubModuleObjects`, `InitializeGameStarter`, `OnGameInitializationFinished`, `OnGameLoaded`, `OnNewGameCreated`, `OnGameStart` and `OnGameEnd` each iterate `Module.CurrentModule.CollectSubModules()` and forward to the matching submodule hook (`MBGameManager.cs:65`, `MBGameManager.cs:74`, and so on). So the submodule is the extension point and this class is the dispatcher.

## Mental Model

`Current` is declared `new static`, which means it **shadows** `GameManagerBase.Current` rather than replacing it (`MBGameManager.cs:21`). Its body is a hard cast: `(MBGameManager)GameManagerBase.Current` (`MBGameManager.cs:25`). If anything installs a non-`MBGameManager` as the current game manager — an editor tool, a test harness — this property throws `InvalidCastException` on read rather than returning null. `GameManagerBase.Current` is itself settable (`GameManagerBase.cs:12`), so that situation is reachable.

The protected parameterless constructor is doing real work: it sets `IsEnding = false` and calls `NativeConfig.OnConfigChanged()` (`MBGameManager.cs:37`, `MBGameManager.cs:38`). So constructing a game manager reads native config — a constructor with a side effect into native code that a subclass cannot intercept.

`EndGame()` is `static async void` (`MBGameManager.cs:205`), and that combination has three consequences worth internalising. It spins on `Task.Delay(100)` until `Current` is non-null *and* `IsLoaded` (`MBGameManager.cs:210`, `MBGameManager.cs:214`), with no timeout — a game manager that never reaches `OnLoadFinished` hangs the caller forever. It then re-reads `Current` and calls `CheckAndSetEnding()`, and only proceeds if that returns true (`MBGameManager.cs:217`). It pops game states until it reaches a `MissionState`, calls `CurrentMission.EndMission()`, and then awaits `Task.Delay(1)` in a loop while `Mission.Current != null` (`MBGameManager.cs:221` through `MBGameManager.cs:231`). Because it is `async void`, exceptions inside it cannot be caught by the caller and become unhandled — and because nothing awaits it, two concurrent `EndGame()` calls are serialised only by `CheckAndSetEnding`.

`CheckAndSetEnding` is the actual serialiser: a `lock` on a private `_lockObject` (`MBGameManager.cs:339`, `MBGameManager.cs:252`) that returns `false` if `IsEnding` is already set and `true` after setting it (`MBGameManager.cs:254`, `MBGameManager.cs:260`). It is the only thread-safe thing in the class, and it is the reason a second `EndGame()` is a no-op rather than a double teardown.

`OnGameEnd` calls `MissionGameModels.Clear()` before the base call (`MBGameManager.cs:200`), which nulls the static `MissionGameModels.Current`. Any code touching `MissionGameModels.Current` after `OnGameEnd` has run gets null — that ordering is the contract.

## How to use

**Getting it.** Read it through `MBGameManager.Current`, and null-check: `Current` is only non-null between `StartNewGame` and teardown.

```csharp
using TaleWorlds.MountAndBlade;

MBGameManager manager = MBGameManager.Current;
if (manager != null && manager.IsLoaded)
{
    Debug.Print("campaign loaded, ending=" + manager.IsEnding, false);
}
```

Start a game from a submodule by handing the manager to the static entry point — this is what `SandBoxSubModule` does at `SandBoxSubModule.cs:136`:

```csharp
public class MyGameManager : MBGameManager
{
    public MyGameManager(bool isLoadGame) { }

    public override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        base.OnGameStart(game, gameStarter);   // keep the broadcast
        gameStarter.AddModel<MissionDifficultyModel>(new MyDifficultyModel());
    }
}

MBGameManager.StartNewGame(new MyGameManager(loadResult));
```

Leave the game from a screen — `GauntletGameOverScreen` and `GauntletEducationScreen` both do this:

```csharp
MBGameManager.EndGame();   // static async void; do not await it, and do not call twice
```

**The mistake that makes `EndGame()` hang the game with no error.** Calling it before the game manager has finished loading, from an early screen. `EndGame` loops on `Task.Delay(100)` while `Current` is null or `IsLoaded` is false (`MBGameManager.cs:210`) with no timeout and no cancellation; because the method is `async void` there is no handle to wait on and nothing to interrupt it. The player sits on your screen forever with the loading window dismissed and nothing in the log — the loop is not an error condition, it is the wait.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnding` | `public bool IsEnding { get; }` |
| `Current` | `public new static MBGameManager Current { get; set; }` |
| `IsLoaded` | `public bool IsLoaded { get; set; }` |
| `ApplicationTime` | `public override float ApplicationTime { get; }` |
| `CheatMode` | `public override bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public override bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public override bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public override UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |

## Key Methods

### StartNewGame
`public static void StartNewGame(MBGameManager gameLoader)`

**Purpose:** Starts the new game flow or state machine.

```csharp
// Static call; no instance required
MBGameManager.StartNewGame(gameLoader);
```

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Executes the BeginGameStart logic.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.BeginGameStart(game);
```

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**Purpose:** Invoked when the new campaign start event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnNewCampaignStart(game, starterObject);
```

### InitializeSubModuleGameObjects
`public override void InitializeSubModuleGameObjects(Game game)`

**Purpose:** Prepares the resources, state, or bindings required by sub module game objects.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.InitializeSubModuleGameObjects(game);
```

### RegisterSubModuleObjects
`public override void RegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Registers sub module objects with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.RegisterSubModuleObjects(false);
```

### RegisterSubModuleTypes
`public override void RegisterSubModuleTypes()`

**Purpose:** Registers sub module types with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.RegisterSubModuleTypes();
```

### AfterRegisterSubModuleObjects
`public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)`

**Purpose:** Executes the AfterRegisterSubModuleObjects logic.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.AfterRegisterSubModuleObjects(false);
```

### InitializeGameStarter
`public override void InitializeGameStarter(Game game, IGameStarter starterObject)`

**Purpose:** Prepares the resources, state, or bindings required by game starter.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.InitializeGameStarter(game, starterObject);
```

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Invoked when the game initialization finished event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameInitializationFinished(game);
```

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object initializerObject)`

**Purpose:** Invoked when the after game initialization finished event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnAfterGameInitializationFinished(game, initializerObject);
```

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameLoaded(game, initializerObject);
```

### OnAfterGameLoaded
`public override void OnAfterGameLoaded(Game game)`

**Purpose:** Invoked when the after game loaded event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnAfterGameLoaded(game);
```

### OnNewGameCreated
`public override void OnNewGameCreated(Game game, object initializerObject)`

**Purpose:** Invoked when the new game created event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnNewGameCreated(game, initializerObject);
```

### OnGameStart
`public override void OnGameStart(Game game, IGameStarter gameStarter)`

**Purpose:** Invoked when the game start event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameStart(game, gameStarter);
```

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Invoked when the game end event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnGameEnd(game);
```

### EndGame
`public static async void EndGame()`

**Purpose:** Executes the EndGame logic.

```csharp
// Static call; no instance required
MBGameManager.EndGame();
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Invoked when the load finished event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnLoadFinished();
```

### CheckAndSetEnding
`public bool CheckAndSetEnding()`

**Purpose:** Verifies whether and set ending holds true for the this instance.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
var result = mBGameManager.CheckAndSetEnding();
```

### OnSessionInvitationAccepted
`public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)`

**Purpose:** Invoked when the session invitation accepted event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnSessionInvitationAccepted(targetGameType);
```

### OnPlatformRequestedMultiplayer
`public virtual void OnPlatformRequestedMultiplayer()`

**Purpose:** Invoked when the platform requested multiplayer event is raised.

```csharp
// Obtain an instance of MBGameManager from the subsystem API first
MBGameManager mBGameManager = ...;
mBGameManager.OnPlatformRequestedMultiplayer();
```

## Usage Example

```csharp
The `MBGameManager instance = ...;` placeholder previously on this page was not a runnable line — `MBGameManager` is abstract and is never resolved from a registry by hand. The only two entry points that matter are:

```csharp
MBGameManager.StartNewGame(new SandBoxGameManager(loadResult));
MBGameManager manager = MBGameManager.Current;
```
```

## See Also

- [MissionNetworkComponent — another long-lived multiplayer coordinator in this bucket](../MissionNetworkComponent)
- [MissionGameModels — the static whose Clear() runs inside OnGameEnd](../MissionGameModels)
- [Mission — the mission whose EndMission() EndGame awaits](../../mission/Mission)
- [Area Index](../)