---
title: "Game"
description: "The single root object of a running Bannerlord game session: it holds the GameType (game mode), MBObjectManager (object registry), GameStateManager (state machine), GameModels (rule models) and EventManager (event bus), and exposes a Game.Current static access point plus the save entry. Handwritten from TaleWorlds.Core/Game.cs and its real call sites."
---

# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner` (`[SaveableRootClass(5000)]`)
**Base:** `IGameStateManagerOwner`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Game.cs`

## Responsibility

`Game` is the **root container** of an entire game session (from creation to destruction): it binds "what mode are we playing, which objects are registered in the world, which UI state we are in, which rule models exist, and where the event bus lives" into one object, and exposes it to all runtime code through a process-wide static field, `Game.Current`.

## Mental Model

`Game` is **not** "the Campaign" itself — the campaign is just a subclass of `GameType`, placed into `Game.GameType`. It is also not the Mission; a Mission is a battle instance hanging under some `GameState` in `GameStateManager`, reached via `Game.Current.GameStateManager`.

- **Creator / owner**: created by `MBGameManager` (the concrete SP-derived class) through `Game.CreateGame(GameType, GameManagerBase)` or `Game.LoadSaveGame(LoadResult, GameManagerBase)`. The constructor sets the static `Game.Current` to itself and fires the static event `OnGameCreated`. So there is exactly one `Game` per process at a time.
- **Layer**: the runtime core layer (`TaleWorlds.Core`). It sits below the SubModule lifecycle and above Campaign/Mission — it is the `game` argument passed into every `MBSubModuleBase` hook (e.g. `OnGameStart(Game game)`).
- **Lifecycle**: `CreateGame`/`LoadSaveGame` creates it → `Initialize()` loads game texts and initializes models → `GameType` runs its four-step loading state machine (`DoLoading()`) → running (`OnTick` drives all `GameHandler`s and `AfterTick`) → `Destroy()` nulls `Current`, nulls `EventManager`, and destroys `ObjectManager`.
- **When to use**: read global state inside an **established game session** (`GameType`, `PlayerTroop`, `ObjectManager`, `EventManager`, the `GameModels`), or subscribe/publish events; or implement game-spanning logic as a `GameHandler` (Behavior) attached via `AddGameHandler<T>()`.
- **When NOT to use**: do not touch `Game.Current` in a SubModule constructor, module static initialization, or after `Destroy()` (it is `null` then — a direct call throws `NullReferenceException`). For a battle's context use `Mission.Current`; for campaign state use `Campaign.Current`. Do not treat `Game` as a catch-all bag for local state.

## Dependency

> Only links to pages that exist or are planned this cycle; other dependencies are named as types to avoid dead links.

- **Upstream (who creates / injects it)**
  - `MBSubModuleBase` (lifecycle hooks: `OnGameStart`, `OnGameLoaded`, `InitializeSubModuleGameObjects`, etc., all receive this `Game`) → [MBSubModuleBase.md](./MBSubModuleBase.md)
  - `MBGameManager` (SP session entry; internally calls `Game.CreateGame` / `Game.LoadSaveGame`) → [MBSubModuleBase.md](./MBSubModuleBase.md)
  - `MBObjectManager` (object registry, held by `Game` and responsible for `RegisterTypes` / `LoadXML`) → [MBObjectBase.md](./MBObjectBase.md)
- **Downstream (what it holds / drives)**
  - `Campaign` (`GameType` subclass for SP campaign; `Game.GameType as Campaign`) → [../campaign/Campaign.md](../campaign/Campaign.md)
  - `Mission` (entered via `GameStateManager`; `Game.Current.GameStateManager.ActiveState is MissionState`) → [../mission/Mission.md](../mission/Mission.md)
  - `GameStateManager` (created by `CreateGameManager()`; manages the `GameState` stack)
  - `GameHandler` / Behavior (`AddGameHandler<T>()` attaches game-spanning logic, driven by `OnTick`)
- **Events**
  - Static `OnGameCreated`: fired when this `Game` is set as `Current` (subscribers can safely read `Game.Current` then).
  - Instance `AfterTick`: invoked at the end of `OnTick` with `dt`; good for lightweight per-frame tail logic.
  - Instance `OnItemDeserializedEvent`: fired when an item is deserialized (to patch/complete an `ItemObject`).
  - `EventManager` (`Game.Current.EventManager`, `TaleWorlds.Library.EventSystem`): `RegisterEvent<T>` / `TriggerEvent` / `UnregisterEvent<T>` / `Clear`.
- **Actions / Models**
  - `BasicModels` (`BasicGameModels`, injected by `SetBasicModels`; campaign mode additionally uses `AddGameModelsManager<GameModels>`).
  - `DefaultMonster`, `DefaultSkills`, `DefaultCharacterAttributes`, `DefaultItemCategories`, `DefaultBannerEffects`, `DefaultSiegeEngineTypes`: all obtained through `Game.Current`, backed by `ObjectManager`.
- **Save points**
  - `Save(MetaData, string, ISaveDriver, Action<SaveResult>)`: the save entry; internally calls `OnBeforeSave`/`OnAfterSave` on each `GameHandler`, then hands off to `SaveManager`. Whether saving is allowed depends on `GameType.SupportsSaving`.
  - Crash and save-boundary details: [crash-boundary](../../architecture/crash-boundary).

## Risks

- **Reading `Game.Current` outside a session crashes outright**: `Game.Current`'s getter is `null` when no session exists. Reading `Game.Current.ObjectManager` etc. in a SubModule constructor, module-load phase, or after `Destroy()` yields a `NullReferenceException`. Defend with `Game.Current?.EventManager` rather than bare access.
- **Using it after `Destroy()` means `null`**: `Destroy()` sets `Current = null` and `EventManager = null`, and `ObjectManager.Destroy()`. Any code still holding a `Game` reference and touching its members afterwards will crash or read a destroyed object.
- **Mutating saveable state during `OnBeforeSave`/`OnAfterSave` or `OnTick` corrupts saves**: during `Save()`, each `GameHandler` receives `OnBeforeSave`/`OnAfterSave` callbacks. Writing `[SaveableField]`/`[SaveableProperty]` state in the same frame can desync the save from live state or trigger `Debug.FailedAssert`. Do save-related writes at clear game-logic points, not inside save callbacks.
- **`Save` fails when `GameType.SupportsSaving` is `false`**: the `GameType` base defaults `SupportsSaving => false`. Calling `Save` on a non-saveable mode yields no valid save.
- **`GetDefaultEquipmentWithName` asserts and returns `null` when the name is missing**: callers must null-check, or the later dereference crashes.
- **`SetDefaultEquipments` only applies the first time (`_defaultEquipments == null`)**: a second call is silently ignored, no overwrite. Replace default equipment before `InitializeDefaultGameObjects`.
- **`NextUniqueTroopSeed` auto-increments on every read**: `public int NextUniqueTroopSeed => _nextUniqueTroopSeed++` — even a read consumes a seed. For deterministic RNG, do not read it repeatedly in unrelated places.
- **`DoLoading()` must finish its four-step state machine**: `GameType.DoLoadingForGameType()` is internally a four-step `_stepNo` machine (`InitializeFirstStep → WaitSecondStep → LoadVisualsThirdState → PostInitializeFourthState`); interrupting it leaves objects/visuals uninitialized and used prematurely.

## Member Notes (grouped by purpose, not a signature wall)

### Access and state reads

- **`Current` (static)** — process-wide current `Game`. **Purpose**: any runtime code grabs the session root. **Side effect**: setter is `internal`, auto-assigned in `CreateGame`/`LoadSaveGame`/`BeginLoading` and fires `OnGameCreated`. **When to call**: read inside a confirmed session (hook args, event callbacks, inside `Mission`/`Campaign`); it is `null` outside a session.
- **`GameType`** — current game mode (`Campaign` and other `GameType` subclasses). **Purpose**: tell "are we in a campaign or another mode" and reach mode-level APIs (e.g. `Game.Current.GameType as Campaign`). `[SaveableProperty(3)]`, persisted with the save.
- **`CurrentState`** — `Running` / `Destroying` / `Destroyed`. **When to call**: check the phase during destroy/exit flows to avoid acting after `Destroyed`.
- **`PlayerTroop`** — `[SaveableProperty(8)]` player character (`BasicCharacterObject`). `BasicCharacterObject.IsPlayerCharacter => Game.Current.PlayerTroop == this` depends on it. **When to call**: test "is this character the player".

### Subsystem handles

- **`ObjectManager`** — `MBObjectManager`, the object registry. `RegisterTypes` registers `Monster`/`ItemObject`/`SkillObject` etc. during `CreateGame`; later `LoadBasicFiles`/`LoadXML` loads data. **When to call**: lookup/register game objects (e.g. `Game.Current.ObjectManager.GetObject<ItemModifier>(id)`).
- **`EventManager`** — event bus (see Events). **When to call**: `RegisterEvent<T>`/`TriggerEvent` to subscribe/publish; always `UnregisterEvent<T>` on unload to avoid dangling callbacks.
- **`GameStateManager`** — created by `CreateGameManager()`; manages the `GameState` stack (including `MissionState`). Exit logic like `EndGame` closes via `GameStateManager.PopState()`/`CleanStates()`.
- **`BasicModels`** — base rule-model collection (`SetBasicModels` injects). Campaign mode additionally has `GameModels` (`AddGameModelsManager<GameModels>`).
- **`GameManager`** — the owning `GameManagerBase` (SP = `MBGameManager`); `CheatMode`/`IsDevelopmentMode`/`ApplicationTime` delegate to it.

### Lifecycle and creation

- **`CreateGame(GameType, GameManagerBase)` / `CreateGame(GameType, GameManagerBase, int seed)`** — static factories; create a new session, `MBObjectManager.Init()` + `RegisterTypes`. The seeded overload sets `RandomGenerator = new MBFastRandom((uint)seed)` for reproducible randomness. **When to call**: almost always indirectly via `MBGameManager.StartNewGame`; mods rarely call directly.
- **`LoadSaveGame(LoadResult, GameManagerBase)`** — deserializes a `Game` from `LoadResult.Root`, re-`RegisterTypes`, and `ReInitialize`s the object manager. **When to call**: load path, invoked by the loading flow; `Game.Current` is only valid after this.
- **`Initialize()`** — creates `GameTextManager` and `LoadGameTexts`, initializes `_gameModelManagers`, calls `GameType.OnInitialize()`. **When to call**: after `CreateGame`, before entering the real loading phase.
- **`InitializeDefaultGameObjects()`** — creates `DefaultSkills`/`DefaultCharacterAttributes` etc. and calls back each SubModule's `InitializeSubModuleGameObjects`. **When to call**: after default objects are ready, before SubModules inject custom objects.
- **`LoadBasicFiles()`** — `ObjectManager.LoadXML` for `Monsters`/`CraftingPieces`/`BodyProperties` etc. **When to call**: object-table init phase.
- **`CreateGameManager()`** — `new GameStateManager(this, GameStateManagerType.Game)`. **When to call**: inside the `GameLoadingState` flow, called by `GameType`.
- **`OnGameStart()`** — calls `OnGameStart()` on each `GameHandler`. **When to call**: after loading completes, at real game start.
- **`Destroy()`** — sets `CurrentState = Destroying`, then `GameHandler.OnGameEnd`, `GameManager.OnGameEnd`, `GameType.OnDestroy`, `ObjectManager.Destroy`, `EventManager.Clear`, finally `Current = null`, `CurrentState = Destroyed`. **When to call**: when the state stack empties (`IGameStateManagerOwner.OnStateStackEmpty`) or on game exit; do not keep references afterwards.

### Per-frame and Behaviors

- **`OnTick(float dt)` (internal)** — when `GameStateManager.Current == this`, drives `GameStateManager.OnTick` and every `GameHandler.OnTick(dt)`, then `AfterTick?.Invoke(dt)`, and settles any pending async save. **When to call**: the engine calls it each frame; mod logic should participate via a `GameHandler`'s `OnTick`, not by directly hooking `AfterTick`.
- **`AddGameHandler<T>()` / `GetGameHandler<T>()` / `RemoveGameHandler<T>()`** — add/remove/query `GameHandler` (game-spanning Behavior on `EntitySystem<GameHandler>`). **When to call**: for game-spanning logic that runs with `OnTick`; note `Destroy` calls `OnGameEnd` on each.

### Events

- **`OnGameCreated` (static event)** — fired once when `Game.Current` is set. **When to call**: bootstrap logic that must run "as soon as the session is ready" can subscribe; pair subscribe/unsubscribe to avoid leaks.
- **`AfterTick` (event `Action<float>`)** — each frame's tail; `dt` is the frame delta. **When to call**: lightweight per-frame tail logic; it does not distinguish states, so guard against wrong-state execution.
- **`OnItemDeserializedEvent` (event `Action<ItemObject>`)** — after an item deserializes. **When to call**: subscribe when you need to patch data per item; remember to unsubscribe.

### Save

- **`Save(MetaData, string, ISaveDriver, Action<SaveResult>)`** — save entry with a performance block. Internally `SaveAux` calls `OnBeforeSave` on each `GameHandler`, then `SaveManager.Save`, then `OnAfterSave` and invokes `onSaveCompleted` on finish/restore. **When to call**: when you need to save actively (campaign QuickSave ultimately goes through `Game.Current.Save`); the `onSaveCompleted` callback fires when the save truly ends — do not write further saveable state inside it.

## Real Example

Both snippets below are real acquisition paths; API names are taken from `TaleWorlds.Core/Game.cs` and `MBGameManager`.

### Path A: get `Game` through a SubModule hook

`MBSubModuleBase.OnGameStart(Game game)` hands you the root object directly — the safest acquisition (a session is guaranteed then):

```csharp
// In a custom SubModule
protected override void OnGameStart(Game game)
{
    base.OnGameStart(game);

    // Read the current game mode; in SP campaign GameType is Campaign
    if (game.GameType is Campaign campaign)
    {
        // Access the player character (SaveableProperty(8))
        BasicCharacterObject player = game.PlayerTroop;
        // Look up an item via the object registry
        ItemModifier mod = game.ObjectManager.GetObject<ItemModifier>("hardened");
        // Subscribe to item-deserialized (unsubscribe at a proper teardown point)
        game.OnItemDeserializedEvent += OnItemLoaded;
    }
}

private void OnItemLoaded(ItemObject item)
{
    // item just finished deserializing from save/XML; patch data here
}
```

### Path B: use `Game.Current` anywhere at runtime

Read the mode and subscribe to the event bus during a campaign (note `?.` defends the null-outside-session case):

```csharp
// In a ViewModel / Behavior / utility method
public void PublishCraftingEvent()
{
    // Game.Current is non-null inside a session; ?. avoids NRE outside one
    Game.Current?.EventManager.TriggerEvent(new CraftingWeaponResultPopupToggledEvent(isOpen: true));
}

public void SubscribeOnce()
{
    // Fires only when this Game is set as Current (session just became ready)
    Game.OnGameCreated += () =>
    {
        var game = Game.Current;
        // Distinguish the game mode
        bool isCampaign = game.GameType is Campaign;
        // Read the player character
        bool hasPlayer = game.PlayerTroop != null;
    };
}
```

> Note: `Campaign`, `ItemObject`, `ItemModifier`, `CraftingWeaponResultPopupToggledEvent` are all real types; `EventManager.TriggerEvent`/`RegisterEvent<T>` signatures come from `TaleWorlds.Library.EventSystem`. Do not substitute placeholders.

## See Also

- Upstream entry: [Module index](./) · [MBSubModuleBase (lifecycle hooks)](./MBSubModuleBase.md) · [MBObjectBase (object registry)](./MBObjectBase.md)
- Downstream / related: [Campaign (GameType subclass)](../campaign/Campaign.md) · [Mission (battle instance)](../mission/Mission.md)
- Contract & boundaries: [Doc Contract](../../architecture/doc-contract) · [Crash Boundary](../../architecture/crash-boundary)

## Navigation

- ↑ Parent: [Module index](./) (`content/v1.4.5/en/api/core/_index.md`)
- ↔ Sibling: [MBSubModuleBase.md](./MBSubModuleBase.md) · [MBObjectBase.md](./MBObjectBase.md)
- Related: [Doc Contract](../../architecture/doc-contract) · [Crash Boundary](../../architecture/crash-boundary) · [Campaign](../campaign/Campaign.md) · [Mission](../mission/Mission.md)
