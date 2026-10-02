---
title: "Module"
description: "The runtime host for the module system: holds the current module instance, the global game-state manager, the global text manager, the job manager and startup info, and it owns submodule collection, activation, initial-state options and multiplayer modes."
---
# Module

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `TaleWorlds.DotNet.DotNetObject`; implements `IGameStateManagerOwner`
**Source:** `TaleWorlds.MountAndBlade/Module.cs` (declaration at line 31)

## Overview

`Module` is the top of the module system at runtime, one level above [MBSubModuleBase](../MBSubModuleBase). The engine creates it early in boot and exposes it through the static `CurrentModule`. It holds the cross-cutting services that exist before any game instance does — `GlobalGameStateManager` (the global game-state stack), `GlobalTextManager`, `JobManager` (the asynchronous job queue) and `StartupInfo` (why this process started in this mode).

Its central job is **collecting and managing submodules**. `CollectSubModules()` returns every loaded `MBSubModuleBase` instance, and the engine then drives all of their lifecycle hooks in its own order. `GetSubModuleType(string name)` resolves a name to the runtime `Type`, which is the standard route to an instance. `ActivateModule` / `DeactiveModule` switch a module on and off in editor scenarios, and `CheckIfSubmoduleCanBeLoadable` answers whether a module description can be loaded at all.

There is also the **initial-state option** system — the entries on the startup and main-menu screen. `AddInitialStateOption` registers one, `OverrideInitialStateOption` replaces a vanilla one, `GetInitialStateOptions` enumerates them and `ExecuteInitialStateOptionWithId` runs one. These act before the game itself is created, which makes them the correct place for a mod's own launcher entry.

The remaining surface is multiplayer and editor tooling: `GetMultiplayerGameMode`, `AddMultiplayerGameMode`, `GetMultiplayerGameTypes`, `StartMultiplayerGame`, plus `SetEditorMissionTester` and `StartMissionForEditorAux` for editor-driven mission debugging.

## Mental Model

`Module` is the indirection layer between the engine and your mod. You do not talk to the engine; you find your own submodule through `Module` and let the engine find you through `CollectSubModules()`.

**`Module.CurrentModule` has a null window and a short life.** It does not exist before module assemblies load, and it is not a permanent object. Caching it in a static field bakes in both problems. The correct pattern for a mod is the one [MBSubModuleBase](../MBSubModuleBase) already encourages: publish `this` from `OnSubModuleLoad` into your own static, and clear it in `OnSubModuleUnloaded`.

**Resolve the instance through the type, then cast — never `new`.** `GetSubModuleType(name)` gives you a `Type`; the instance comes from the collected list. Constructing a submodule by hand gives you an object the engine never registered, whose lifecycle hooks will never fire.

**`CollectSubModules()` is a live view.** Enumerating it while calling `ActivateModule` or `DeactiveModule` mutates the collection mid-iteration. Snapshot it with `ToList()` first whenever the loop might change the module set.

**Initial-state options run before the game exists.** They are the right home for a mod launcher or an editor entry, and the wrong home for anything that needs `Game.Current`.

**`DeactiveModule` is spelled without the second `t`.** That is the API's spelling. Writing `DeactivateModule` does not compile, and a search for the "correct" spelling leads to a method that does not exist.

**The booleans are engine phase flags, not configuration.** `MultiplayerRequested` reflects a request; `ReturnToEditorState`, `LoadingFinished` and `IsOnlyCoreContentEnabled` report where the boot sequence currently is. Read them to ask "what phase am I in". Several have no public setter, and none of them are knobs to turn.

**`JobManager` runs work off the main thread.** A job body that touches `Game.Current` or `Campaign.Current` is a cross-thread access to main-thread state. Marshal the result back before reading either.

## When to Use / When Not To Use

- **Use** `Module.CurrentModule != null` as the check for "module loading has finished".
- **Use** `GetSubModuleType` plus a cast to reach an existing submodule instance.
- **Use** `CollectSubModules()` to enumerate loaded submodules; snapshot it first.
- **Use** `AddInitialStateOption` / `OverrideInitialStateOption` to add or replace a startup entry.
- **Use** `ActivateModule` / `DeactiveModule` in editor and debugging scenarios only.
- **Use** `JobManager` for off-thread work, marshalling results back to the main thread.
- **Do not** cache `Module.CurrentModule` in a static field.
- **Do not** activate or deactivate a module while enumerating `CollectSubModules()`.
- **Do not** write the phase flags.
- **Do not** spell it `DeactivateModule`.

## Members

### Global entry points and services

| Member | What it is for |
| --- | --- |
| `static Module CurrentModule { get; private set; }` | The current module instance. **Null before module assemblies load.** The single entry point; do not cache it. |
| `GameStateManager GlobalGameStateManager { get; private set; }` | The global game-state stack that drives transitions between menu, campaign, mission and the rest. Register custom modes here. |
| `GameTextManager GlobalTextManager { get; private set; }` | The module-level text manager. Unlike `Game.GameTextManager`, it exists during module load, before a game instance. |
| `JobManager JobManager { get; private set; }` | The asynchronous job queue. Job bodies run off the main thread; marshal anything touching game state back onto it. |
| `GameStartupInfo StartupInfo { get; private set; }` | Why this process started the way it did: command line, initial state option, module configuration. The authoritative answer to "what mode was requested". |
| `bool MultiplayerRequested` | Whether a multiplayer session was requested. |
| `bool ReturnToEditorState { get; private set; }` | Whether the process will return to the editor. A phase flag. |
| `bool LoadingFinished { get; private set; }` | Whether loading has completed. A phase flag. |
| `bool IsOnlyCoreContentEnabled { get; private set; }` | Whether only core content is enabled. A phase flag. |
| `public event Action SkinsXMLHasChanged` | Raised when skin XML changes. Relevant to appearance mods. |
| `public event Action ImguiProfilerTick` | Raised on the ImGui profiler tick. |

### Submodule management

| Member | What it is for |
| --- | --- |
| `MBReadOnlyList<MBSubModuleBase> CollectSubModules()` | Every loaded submodule instance. **A live view** — snapshot before iterating if the loop might change the set. |
| `Type GetSubModuleType(string name)` | Resolves a name to the runtime `Type`. The standard route to an instance; you still cast. |
| `bool CheckIfSubmoduleCanBeLoadable(SubModuleInfo subModuleInfo)` | Whether a module description passes the loadability checks. A startup diagnostic. |
| `void ActivateModule(string moduleId)` | Activates a module. Editor and runtime switching; triggers re-registration and `OnSubModuleActivated`. |
| `void DeactiveModule(string moduleId)` | Deactivates a module. **The engine's spelling has no second `t`** — `DeactivateModule` does not exist. |
| `void SetCanLoadModules(bool canLoadModules)` | Locks or unlocks further module loading. Lock it while loading is in progress. |

### Initial-state options

| Member | What it is for |
| --- | --- |
| `void AddInitialStateOption(InitialStateOption initialStateOption)` | Registers a startup/menu entry. Acts before the game instance exists. |
| `void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)` | Replaces an existing entry by id. |
| `IEnumerable<InitialStateOption> GetInitialStateOptions()` | Enumerates the registered entries. |
| `InitialStateOption GetInitialStateOptionWithId(string id)` | Looks up one entry by id. |
| `void ExecuteInitialStateOptionWithId(string id)` | Runs the entry's action. |
| `void ClearStateOptions()` | Empties the option list. |
| `void SetInitialModuleScreenAsRootScreen()` | Makes the module's initial screen the root screen, overriding the vanilla startup screen. |

### Multiplayer and editor

| Member | What it is for |
| --- | --- |
| `MultiplayerGameMode GetMultiplayerGameMode(string gameType)` | Looks up a multiplayer mode by game type. |
| `void AddMultiplayerGameMode(MultiplayerGameMode multiplayerGameMode)` | Registers a multiplayer mode. |
| `MBReadOnlyList<MultiplayerGameTypeInfo> GetMultiplayerGameTypes()` | Enumerates the available multiplayer types. |
| `bool StartMultiplayerGame(string multiplayerGameType, string scene)` | Starts a multiplayer session. |
| `async void ShutDownWithDelay(string reason, int seconds)` | Delayed shutdown. **`async void` does not propagate exceptions** — a throw inside it is swallowed. |
| `void SetEditorMissionTester(IEditorMissionTester editorMissionTester)` | Installs an editor mission tester. |
| `void StartMissionForEditorAux(string missionName, string sceneName, string levels, bool forReplay, string replayFileName, bool isRecord)` | Starts a mission straight from the editor, for fast mission-logic iteration. |

### XML and mesh helpers

| Member | What it is for |
| --- | --- |
| `static void GetMetaMeshPackageMapping(Dictionary<string, string> metaMeshPackageMappings)` | Fills in the MetaMesh-to-package mapping. An asset mod uses it so the engine resolves the right package. |
| `static void GetItemMeshNames(HashSet<string> itemMeshNames)` | Collects every item mesh name. |
| `static string GetCraftedItemMeshNames(List<string> arguments)` | Resolves crafted-item mesh names from an argument list. |
| `public enum XmlInformationType` | The XML information categories this class uses internally. |

## Examples

### Example 1: Find an existing submodule instance instead of constructing one

Publishing `this` from the lifecycle hooks gives the reliable global reference.

```csharp
using System.Linq;
using TaleWorlds.MountAndBlade;

public class MyModSubModule : MBSubModuleBase
{
    public static MyModSubModule Instance { get; private set; }

    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        Instance = this;
    }

    protected override void OnSubModuleUnloaded()
    {
        base.OnSubModuleUnloaded();

        // Clearing matters: a stale reference outlives the module
        Instance = null;
    }
}

public static class MyModAccess
{
    public static bool IsLoaded()
    {
        return Module.CurrentModule != null;
    }

    public static MyModSubModule Resolve()
    {
        Module module = Module.CurrentModule;
        if (module == null)
        {
            return null;
        }

        // OfType filters the live collection without modifying it
        return module.CollectSubModules().OfType<MyModSubModule>().FirstOrDefault();
    }
}
```

### Example 2: Register a mod launcher on the startup screen

Initial-state options act before a game instance exists, which is exactly what a launcher needs.

```csharp
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public class MyLauncherSubModule : MBSubModuleBase
{
    protected override void OnBeforeInitialModuleScreenSetAsRoot()
    {
        base.OnBeforeInitialModuleScreenSetAsRoot();

        Module module = Module.CurrentModule;
        if (module == null)
        {
            return;
        }

        module.AddInitialStateOption(new InitialStateOption(
            id: "my_mod_launcher",
            name: new TextObject("{=myModLauncher}My Mod"),
            orderIndex: 100,
            action: () => { /* run the mod's own entry point */ },
            isDisabledAndReason: () => (false, (TextObject)null)));
    }
}
```

### Example 3: Snapshot the module set before doing anything that can change it

`ActivateModule` mutates the collection `CollectSubModules()` returns.

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.MountAndBlade;

public static void ReportLoadedModules()
{
    Module module = Module.CurrentModule;
    if (module == null)
    {
        return;
    }

    // ToList() first: enumerating a live view while changing it throws
    List<MBSubModuleBase> snapshot = module.CollectSubModules().ToList();

    foreach (MBSubModuleBase submodule in snapshot)
    {
        System.Type resolved = module.GetSubModuleType(submodule.GetType().Name);
        Debug.Print(resolved == null ? "unresolved" : resolved.FullName);
    }
}
```

## Risks and Boundaries

- **The null window on `CurrentModule`.** Reading it during `SubModule.xml` parsing or early in editor startup null-references. It is also not a long-lived object.
- **Caching `CurrentModule` in a static field is wrong.** It goes stale across unload and reload. Use your own submodule's publish/clear pattern.
- **`CollectSubModules()` is a live view.** Activating or deactivating a module while enumerating it throws. Snapshot first.
- **`DeactiveModule` is spelled that way.** The method with the conventional spelling does not exist, and search results will point you at it.
- **`ShutDownWithDelay` is `async void`.** Exceptions inside are not propagated; failures are silent. Do not build error handling on top of it.
- **`JobManager` bodies are off-thread.** Touching `Game.Current` or `Campaign.Current` from a job is a cross-thread access to main-thread state. Marshal back.
- **Activating and deactivating is heavy.** Both re-register objects and fire `OnSubModuleActivated`, which can invalidate a live UI or campaign state. Editor and tooling scenarios only.
- **The phase flags are read-only in practice.** They report engine state; they are not configuration.
- **Hook order is the engine's.** Which submodule's `OnSubModuleLoad` runs first is not something `new` order influences.
- **Native interop.** `Module` derives from `DotNetObject`, so much of it reaches into native code. Main thread only.

## Dependencies

- **Upstream / providers**
  - The engine constructs this class during module load and drives every collected [MBSubModuleBase](../MBSubModuleBase) through its lifecycle.
  - `MBSubModuleBase`'s `OnSubModuleLoad` / `OnSubModuleUnloaded` map directly onto this class's module lifetime.
- **Peers / downstream**
  - [Game](../../core-extra/Game) works with `GlobalGameStateManager` through `IGameStateManagerOwner` to perform state transitions.
  - [ScreenManager](../../gui/ScreenManager) and [ScreenBase](../../gui/ScreenBase) are the objects `SetInitialModuleScreenAsRootScreen` acts on.
  - [MBObjectManager](../../campaign-ext/MBObjectManager)'s singleton is populated during `RegisterSubModuleTypes`.

## See Also

- ↑ Parent: [core index](../)
- ↔ Related: [MBSubModuleBase](../MBSubModuleBase) · [Game](../../core-extra/Game) · [ScreenManager](../../gui/ScreenManager) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [Chinese twin](../../../../zh/api/core/Module)