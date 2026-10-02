---
title: "Module"
description: "The engine-side singleton that owns the whole module graph: it builds the submodule instance dictionary, drives every MBSubModuleBase hook, holds the global GameStateManager, GameTextManager and JobManager, and exposes the activate/deactivate and initial-state-option APIs that native calls into."
---
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `DotNetObject` (implements `TaleWorlds.DotNet.DotNetObject`, `IGameStateManagerOwner`)
**Source:** `TaleWorlds.MountAndBlade/Module.cs`

## Overview

`Module` is the process-wide object that turns a folder of DLLs into a running game. Its constructor is `private`; the engine calls the `internal static Module.CreateModule()` (a native `[MBCallback]` entry point), which news it up, and every later touch goes through `Module.CurrentModule`. It is where the dictionary `Dictionary<SubModuleInfo, MBSubModuleBase>` lives, which is why `CollectSubModules()` is the canonical way to enumerate every live module instance, and it is the class that decides which of those instances get `OnApplicationTick` at all. It also owns three singletons other subsystems depend on — `GlobalGameStateManager` (seeded into `GameStateManager.Current` at construction), `GlobalTextManager`, and `JobManager` — plus the initial-state-option list that produces the buttons on the main menu. Despite living in `TaleWorlds.MountAndBlade`, most of its data comes from `TaleWorlds.ModuleManager` types: `ModuleInfo`, `SubModuleInfo`, `ModuleHelper`.

## Mental Model

Think of `Module` as **"the loader that owns every module instance and fires every module hook"**. You read it, you never build it — the constructor is private and `CreateModule()` is `internal`.

**The construction sequence, in source order (`Module.cs`, private ctor):**

1. `MBDebug.Print("Creating module...")`.
2. `StartupInfo = new GameStartupInfo()`, `_testContext = new TestContext()`.
3. `_subModuleBases = new Dictionary<SubModuleInfo, MBSubModuleBase>()` — **empty at this point**.
4. `GlobalGameStateManager = new GameStateManager(this, GameStateManagerType.Global)`.
5. `GameStateManager.Current = GlobalGameStateManager` — note the setter's side effect: it calls `CleanStates(0)` on whatever the previous `Current` was.
6. `GlobalTextManager = new GameTextManager()`, `JobManager = new JobManager()`.

**Three traps:**

- **`Module` implements `IGameStateManagerOwner`, but both methods are empty explicit implementations.** `void IGameStateManagerOwner.OnStateStackEmpty()` and `void IGameStateManagerOwner.OnStateChanged(GameState oldState)` are declared and do nothing. Do not expect the global state stack to notify the module; it does not. Only `Game` (and the campaign's own manager) actually react to state changes.
- **`Module` is `TaleWorlds.MountAndBlade`; `ModuleInfo`, `SubModuleInfo` and `ModuleHelper` are `TaleWorlds.ModuleManager`.** They are separate assemblies with separate `using` directives. A single `using TaleWorlds.ModuleManager;` does not give you `Module.CurrentModule`, and `using TaleWorlds.MountAndBlade;` does not give you `ModuleHelper.GetModules(...)`.
- **`CollectSubModules()` filters to *active* modules only.** It iterates `ModuleHelper.GetActiveModules()`, so after `DeactiveModule(id)` your instance is still in `_subModuleBases` and still receives explicit calls, but it disappears from `CollectSubModules()` — and therefore from the per-frame `OnApplicationTick` loop.

## When to Use / When NOT to Use

**Use `Module` when:**
- You need the global state stack that drives the main menu, the module screen and the editor: `Module.CurrentModule.GlobalGameStateManager`.
- You want to enumerate module instances (`CollectSubModules()`), resolve a `SubModuleInfo` class name to a `Type` (`GetSubModuleType(string)`), or add/override a main-menu option (`AddInitialStateOption`, `OverrideInitialStateOption`).
- You want to veto module loading at the *engine* level — but do that from `MBSubModuleBase.OnBeforeGameStart`, not from here.

**Do NOT use `Module` when:**
- You want per-game or per-campaign state. `Module` outlives games; anything you hang off it is not saved and leaks across a "return to main menu → new game" cycle unless you explicitly tear it down in `MBSubModuleBase.OnGameEnd`.
- You want to react to game events. Use a `GameModel` registered through `IGameStarter`, or a `CampaignBehaviorBase`.
- You want module *metadata*. That is `ModuleInfo` / `ModuleHelper`, a different type in a different namespace.

## Dependencies

- [MBSubModuleBase](../MBSubModuleBase/) — the instance type stored in `Module._subModuleBases` and fired by every loop in this class.
- [IGameStarter](../../core-extra/IGameStarter/) — what submodule hooks receive once a game starts.
- [GameStateManager](../../core-extra/GameStateManager/) — `Module.GlobalGameStateManager` is one, created with `GameStateManagerType.Global`.
- [Game](../../core-extra/Game/) — `Game.Current.GameStateManager` is a *different*, non-global manager that replaces `GameStateManager.Current` while a game runs.
- [ModuleHelper](../../campaign-ext/ModuleHelper/) — `TaleWorlds.ModuleManager`; the actual source of the module list `CollectSubModules()` walks.
- [ModuleInfo](../../campaign-ext/ModuleInfo/) — per-module metadata (`Id`, `SubModules`, `IsActive`, `IsNative`, `IsOfficial`).
- [Module system architecture](../../../architecture/module-system/) — how `SubModule.xml` becomes a `SubModuleInfo`.

## Key Members

### Singleton and lifetime

#### `public static Module CurrentModule { get; private set; }`
The only accessor. The setter is private, and the value is written by `internal static Module.CreateModule()` and cleared by `internal static Module.FinalizeCurrentModule()`. During teardown `CurrentModule` becomes `null`, so cache it locally if you need it across an await.

#### `public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`
Rebuilds and returns a fresh read-only list of live `MBSubModuleBase` instances from `ModuleHelper.GetActiveModules()`. **Not cached** — it allocates a new `MBList` on every call, and `Module.OnApplicationTick` calls it *once per frame*. Do not call it from inside your own `OnApplicationTick`; cache your reference in `OnSubModuleLoad`.

#### `public Type GetSubModuleType(string name)`
Maps a `SubModuleInfo.SubModuleClassTypeName` to the concrete `Type` of its live instance, or `null`. Useful for feature-detecting another mod ("does `SandBoxSubModule` exist and is it loaded?") without taking a hard assembly reference.

### State, text, jobs

#### `public GameStateManager GlobalGameStateManager { get; private set; }`
The manager created in the constructor and immediately installed as `GameStateManager.Current`. It survives across "return to main menu" because it lives on `Module`, not on `Game`. `Game.Current.GameStateManager` is the per-game manager that takes over `GameStateManager.Current` while a game is active.

#### `public GameTextManager GlobalTextManager { get; private set; }`
Holds global (non-campaign) text; `LoadDefaultTexts()` is called from `Module.Initialize()`. Per-campaign text lives on `Game.Current.GameTextManager`.

#### `public JobManager JobManager { get; private set; }`
The engine's own deferred job queue, ticked at the end of `Module.OnApplicationTick`. Most campaign job scheduling goes through `Campaign.Current` / `Game.Current.GameManager` instead.

### Module activation

#### `public void DeactiveModule(string moduleId)`
If the module exists, is active and is not native: logs, calls `ModuleHelper.OnModuleDeactivated(id)`, then fires `OnSubModuleDeactivated()` on each of its submodules. Nothing else is undone — the DLL stays loaded and the instance stays in `_subModuleBases`.

#### `public void ActivateModule(string moduleId)`
The mirror image: `ModuleHelper.OnModuleActivated(id)` then `OnSubModuleActivated()` on each submodule. `Module.OnGameEnd()` calls this for every module that was inactive at game end, so a module you deactivated for one game comes back for the next one.

### Initial state (main menu) options

#### `public void AddInitialStateOption(InitialStateOption initialStateOption)` / `public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)`
`Add` appends; `Override` replaces the entry whose `Id` matches, and does **nothing** if there is no match (no exception, no return value). If you are replacing a vanilla entry you must know its exact id. The constructor is `InitialStateOption(string id, TextObject name, int orderIndex, Action action, Func<ValueTuple<bool, TextObject>> isDisabledAndReason, TextObject enabledHint = null, Func<bool> isHidden = null)` — `isDisabledAndReason` and `isHidden` are **not** optional, so you must supply at least `() => (false, null)` to build a plain always-enabled entry.

#### `public IEnumerable<InitialStateOption> GetInitialStateOptions()`
Returns the list ordered by `OrderIndex`. This is what the initial-state UI renders, so ordering here is your button order.

#### `public InitialStateOption GetInitialStateOptionWithId(string id)` / `public void ExecuteInitialStateOptionWithId(string id)`
Look-up and trigger. `Execute...` no-ops when the id is unknown, because it just null-checks and calls `DoAction()`.

### Multiplayer and platform

#### `public bool MultiplayerRequested { get; }`
True when the startup type is `Multiplayer`, when `PlatformServices.SessionInvitationType == SessionInvitationType.Multiplayer`, or when `PlatformServices.IsPlatformRequestedMultiplayer`. It is computed fresh on every get — it is not cached.

#### `public async void ShutDownWithDelay(string reason, int seconds)`
Counts down once per second (printing each tick), then calls `MBGameManager.EndGame()` if a game is alive and `Utilities.QuitGame()`. Guarded by `_isShuttingDown`, so a second call is a no-op. Declared `async void` — exceptions inside escape to the synchronization context, so do not rely on it for cleanup you care about.

## Examples

### Example 1 — feature-detect another module without a hard reference

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.ModuleManager;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnSubModuleLoad()
        {
            Type sandBox = Module.CurrentModule.GetSubModuleType("SandBox.SandBoxSubModule");
            bool hasSandbox = sandBox != null;
            MBDebug.Print("SandBox present = " + hasSandbox);
        }
    }
}
```

### Example 2 — add and override main-menu options

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // InitialStateOption(string id, TextObject name, int orderIndex, Action action,
    //                     Func<(bool, TextObject)> isDisabledAndReason,
    //                     TextObject enabledHint = null, Func<bool> isHidden = null)
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnSubModuleLoad()
        {
            Module module = Module.CurrentModule;
            module.AddInitialStateOption(new InitialStateOption(
                "MyModOptions",
                new TextObject("{=MyModOptionsTitle}My Mod Options", null),
                10,
                MyOptionsScreen.Open,
                () => (false, null)));
            // Override only replaces an entry that already exists; unknown ids are ignored.
            module.OverrideInitialStateOption("Native", new InitialStateOption(
                "Native", new TextObject("{=MyModResume}Resume", null), 0,
                MyOptionsScreen.Open, () => (false, null)));
        }

        public override void OnInitialState()
        {
            foreach (InitialStateOption option in Module.CurrentModule.GetInitialStateOptions())
            {
                MBDebug.Print("option " + option.Id);
            }
            Module.CurrentModule.ExecuteInitialStateOptionWithId("MyModOptions");
        }
    }
}
```

### Example 3 — inspect and toggle the global state stack

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        public override void OnBeforeInitialModuleScreenSetAsRoot()
        {
            // Fires while GameStateManager.Current is still the Global manager.
            GameStateManager global = Module.CurrentModule.GlobalGameStateManager;
            MBDebug.Print("active global state = " + (global.ActiveState == null ? "none" : global.ActiveState.GetType().Name));
        }
    }
}
```

## Risks and crash boundaries

- **Save serialization.** `Module` is never serialized. It holds `StartupInfo`, the submodule dictionary and the initial-state options across games. Caching gameplay state here leaks it into the next game — always clear it in `MBSubModuleBase.OnGameEnd`.
- **`GameStateManager.Current` is hijacked by the game.** The ctor sets `Current = GlobalGameStateManager`, and the `Current` setter calls `CleanStates(0)` on the *previous* value. When a game starts, `Game`'s manager replaces it; when the game ends, `Module.OnApplicationTick` restores it (`if (GameStateManager.Current == null) GameStateManager.Current = GlobalGameStateManager;`). Any code that captured `GameStateManager.Current` into a field before the switch is now holding a cleaned-out manager. Always re-read `GameStateManager.Current`, never cache it.
- **Cross-domain dependency.** `Module.cs` pulls in `TaleWorlds.AchievementSystem`, `TaleWorlds.ActivitySystem`, `TaleWorlds.Avatar.PlayerServices`, `TaleWorlds.Diamond.ClientApplication`, `TaleWorlds.PlatformService` and `TaleWorlds.ScreenSystem`. Referencing `Module` from a module that must load on a dedicated server or in an early bootstrap context can force those assemblies to load before platform services are set up, and `Module.LoadPlatformServices()` is *skipped* on dedicated servers and in test mode.
- **Load order.** `LoadSubModules` processes `ModuleHelper.GetModules(...)` in enumeration order and calls `AddSubModule` (reflection `new` + `Managed.AddTypes`) as it goes, then a **second pass** runs `OnSubModuleLoad()`. So construction order ≠ hook order relative to another module's construction. Do not assume your `OnSubModuleLoad` runs before or after a dependency's — negotiate explicitly.
- **ID stability.** Every method that takes a `moduleId` is a raw string lookup into `ModuleHelper`'s table, whose keys are the module folder names at launch. Renaming a folder or editing `ModuleInfo.Id` invalidates the string, and a miss returns `null` / silently does nothing rather than throwing.
- **Null `CurrentModule`.** `FinalizeCurrentModule()` nulls the static. Any static constructor, background thread or `async` continuation in your module that touches `Module.CurrentModule` after shutdown gets a `NullReferenceException`.
- **Enum by string.** `CheckIfSubmoduleCanBeLoadable` parses `SubModuleInfo.Tags` values with `Enum.TryParse<Platform>` / `<Runtime>`. A typo in a `SubModule.xml` tag value falls through the switch and is treated as valid, so the submodule loads when you meant to exclude it.

## Cross-Version Notes

- **v1.3.0:** `Module` is `public sealed class Module : DotNetObject, IGameStateManagerOwner` in `TaleWorlds.MountAndBlade`, with a private constructor. `GlobalGameStateManager`, `GlobalTextManager`, `JobManager`, `StartupInfo`, `IsOnlyCoreContentEnabled`, `MultiplayerRequested`, `ReturnToEditorState` and `LoadingFinished` are all present with the semantics described above. `InitialStateOption` itself lives in `TaleWorlds.MountAndBlade` (`InitialStateOption.cs`), not in `TaleWorlds.Core` — a common misattribution, since every other type used during bootstrap seems to come from `Core`.
- **v1.3.15 / v1.4.5:** the shape is stable. Later patches widen the platform-specific branch in `LoadPlatformServices` and add platform module extensions, but `CollectSubModules`, `ActivateModule` / `DeactiveModule`, the initial-state-option API and `GetSubModuleType` keep their signatures and semantics.
- **Also note:** `GameType` and `GameStartupType` are *not* members of `Module` in v1.3.0 — `GameStartupType` is exposed through `Module.StartupInfo.StartupType`, and the multiplayer game-type list is populated through `AddMultiplayerGameMode(MultiplayerGameMode)` / `GetMultiplayerGameTypes()`, not through a `GameType` collection here.

## See Also

- ↑ Parent bucket: [Core API index](../)
- ↔ Sibling: [MBSubModuleBase](../MBSubModuleBase/) — the instances this class stores and fires
- ↪ State stack: [GameStateManager](../../core-extra/GameStateManager/)
- ↪ Per-game world: [Game](../../core-extra/Game/)
- ↪ Module metadata: [ModuleHelper](../../campaign-ext/ModuleHelper/) · [ModuleInfo](../../campaign-ext/ModuleInfo/)
- ↑ Architecture: [Module system](../../../architecture/module-system/) · [SDK overview](../../../architecture/sdk-overview/)