---
title: "Game"
description: "The game instance and global facade: binds the current GameType (campaign, sandbox or editor), the GameManager, the GameStateManager, the object manager and the save entry points. The starting point for cross-mode state, and the only way to create or destroy a game."
---
# Game

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** none; implements `IGameStateManagerOwner`
**Source:** `TaleWorlds.Core/Game.cs` (declaration at line 15)

## Overview

`Game` is the runtime facade for a running game, and it ties four things together.

**The game type.** `GameType GameType` is the concrete mode — in campaign play it *is* the `Campaign` instance. This is the authority on "which mode am I in", and it is what you test before reaching for any world object.

**The game manager.** `GameManagerBase GameManager` is the mode-specific manager. It performs the actual work behind the facade.

**The game state machine.** `GameStateManager GameStateManager` drives transitions between the main menu, the campaign, a mission and the results screen. Custom game modes register their states here.

**Services and data.** `ObjectManager` (the MBObject registry for all XML-backed static data), `GameTextManager` (text and localisation), `EventManager` (engine-level events), `BasicModels`, `DefaultSiegeEngineTypes`, and the four default containers — `DefaultSkills`, `DefaultCharacterAttributes`, `DefaultItemCategories`, `DefaultBannerEffects`. When you need a default value, read it from here rather than hard-coding it.

The class is `sealed`. Instances come from exactly two static factories, `CreateGame(...)` and `LoadSaveGame(...)`, and are torn down by exactly one method, `Destroy()`. Global access is the static `Game.Current`, which exists only while a game exists — it is null at the main menu, during module load, in editor previews, and after destruction.

It is also the save entry point: `Save(metaData, saveName, driver, onSaveCompleted)` writes the game, and `LoadSaveGame(loadResult, gameManager)` rebuilds one from [SaveManager](../../save-system/SaveManager) output.

The extension point worth knowing is `GameHandler`. `AddGameHandler<T>()`, `GetGameHandler<T>()` and `RemoveGameHandler<T>()` install and remove handlers that the engine invokes at its lifecycle points — the supported way to insert into the flow without patching vanilla behaviour.

## Mental Model

Read `Game` as "the set of services that survive a change of mode, plus the mode itself". The first decision in almost any mod code is which of those two you are after.

**Two-stage reachability, in order.** `Game.Current` first, then the mode. A `Game` instance exists without a campaign — the editor and the menu both have one — so `Game.Current?.GameType is Campaign` is the correct guard, not `Game.Current != null`. The inverse also holds: during a mission, `GameType` is still the campaign. A mission is not a separate mode.

**The boundary that matters.** Cross-mode state comes from `Game`; world state comes from `GameType` (that is, from `Campaign`). `ObjectManager`, `GameTextManager`, `EventManager` and the state machine are the former; heroes, settlements and parties are the latter. Mixing the two is how code ends up working in one mode and null-referencing in another.

**`CurrentState` gates everything.** `Game.State` is `Running`, `Destroying` or `Destroyed`. Once the instance enters `Destroying`, reaching into `GameManager`, `GameStateManager` or `ObjectManager` fails. Cleanup belongs before the transition, not after.

**Static and delegate members outlive the instance.** `OnGameCreated` is a static event; `AfterTick` is a static delegate list. Both survive `Destroy()`. Anything you register there has to come off in `OnGameEnd` or `OnSubModuleUnloaded`, or the next game calls back into dead objects.

**`GameHandler` does not clean itself up.** `AddGameHandler<T>()` installs; `RemoveGameHandler<T>()` is yours to call. Handlers live in the game's entity system and leak with the instance if you forget.

**Never cache `Game.Current`.** It is invalidated by `Destroy()` and is absent in several legitimate phases. Read it at the point of use.

## When to Use / When Not To Use

- **Use** `Game.Current?.GameType is Campaign` as the guard before touching campaign data.
- **Use** `Game.Current` for cross-mode services: `ObjectManager`, `GameTextManager`, `EventManager`, `GameStateManager`.
- **Use** `Game.Current.DefaultSkills` and siblings instead of hard-coded defaults.
- **Use** `Game.Save` for saving and `SaveManager.Load` for loading.
- **Use** `AddGameHandler<T>()` / `RemoveGameHandler<T>()` to hook the game lifecycle without patching vanilla behaviour.
- **Do not** touch `Game.Current` at the main menu, during module load or in an editor preview.
- **Do not** cache `Game.Current` in a static field.
- **Do not** call `CreateGame` from a mod; it collides with the engine's own state machine.
- **Do not** read `GameManager` or `ObjectManager` once `CurrentState` is no longer `Running`.

## Members

### Instance state and globals

| Member | What it is for |
| --- | --- |
| `public static event Action OnGameCreated` | Raised when a game instance has been created. **Static** — it survives the instance, so unsubscribe or the next game calls into a dead subscriber. |
| `public event Action<ItemObject> OnItemDeserializedEvent` | Raised as each item definition is deserialised. Data-loading diagnostics. |
| `Game.State CurrentState { get; private set; }` | `Running`, `Destroying` or `Destroyed`. **Access to sub-objects fails once it leaves `Running`.** |
| `public enum State` | `Running`, `Destroying`, `Destroyed`. |
| `GameType GameType { get; private set; }` | The current mode. In campaign play it is the `Campaign` instance. **The authority for mode checks.** |
| `GameManagerBase GameManager { get; private set; }` | The mode-specific manager doing the real work. |
| `GameStateManager GameStateManager { get; private set; }` | The state machine driving transitions between menu, campaign, mission and results. |
| `GameTextManager GameTextManager { get; private set; }` | Text and localisation for the running game. Distinct from `Module.GlobalTextManager`, which exists earlier. |
| `MBObjectManager ObjectManager { get; private set; }` | The registry of MBObjects — every XML-backed static definition. |
| `EventManager EventManager { get; private set; }` | Engine-level events (not campaign events). |
| `BasicGameModels BasicModels { get; private set; }` | The basic model set. |
| `DefaultSiegeEngineTypes DefaultSiegeEngineTypes { get; private set; }` | Default siege engine type definitions. |
| `BasicCharacterObject PlayerTroop { get; set; }` | The troop template the player uses. |
| `Action<float> AfterTick` | Static per-frame callback list. **A static delegate list — anything registered has to be removed or it leaks.** |
| `IMonsterMissionDataCreator MonsterMissionDataCreator { get; set; }` | The generator for beast and monster mission data. Replaceable. |
| `IBannerVisualCreator BannerVisualCreator { get; set; }` | Creates banner visuals. Replaceable. |

### Default data containers

| Member | What it is for |
| --- | --- |
| `DefaultCharacterAttributes DefaultCharacterAttributes` | Default attribute values. |
| `DefaultSkills DefaultSkills` | Default skill definitions; use `GetSkill` rather than hard-coding ids. |
| `DefaultItemCategories DefaultItemCategories` | Default item categories. |
| `DefaultBannerEffects DefaultBannerEffects` | Default banner effects. |
| `Equipment GetDefaultEquipmentWithName(string equipmentName)` | Looks up a default equipment set by definition name — character creation and loadout swaps. |
| `void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)` | Sets the default equipment set wholesale. **Call it early**: later changes affect characters that already exist. |

### Creation and destruction

| Member | What it is for |
| --- | --- |
| `static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)` | Creates a game with a fixed seed. Mods rarely need this; it participates in the engine's state machine. |
| `static Game CreateGame(GameType gameType, GameManagerBase gameManager)` | Same, with a random seed. |
| `static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)` | Rebuilds a game from loaded save data produced by [SaveManager](../../save-system/SaveManager). |
| `void Destroy()` | Tears down the instance and everything under it. **`Game.Current` is invalid afterwards.** |
| `void CreateGameManager()` | Creates the `GameManager`. |
| `void Initialize()` | Initialises internal game state. |
| `void InitializeDefaultGameObjects()` | Creates the default game objects. |
| `void LoadBasicFiles()` | Loads the base data files. Touches native resources; only valid during startup. |
| `static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)` | The master type-registration entry point — the bridge between a `GameType` and the object manager. Factory-driven; mods normally leave it alone. |
| `override void OnDestroy()` | Destruction hook. A subclass override must call `base`. |

### Loading-flow hooks

| Member | What it is for |
| --- | --- |
| `bool DoLoading()` | Runs the actual loading work; returns whether it succeeded. |
| `override void OnStateChanged(GameState oldState)` | Called by the state manager when the game state changes. |
| `void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | A mission is about to begin. |
| `void OnGameStart()` | The game has started. |
| `void OnFinalize()` | Wrap-up. Release long-lived references here. |
| `void OnItemDeserialized(ItemObject itemObject)` → `ItemObjectDeserialized(ItemObject itemObject)` | A single item definition finished deserialising. |
| `void OnGameLoaded(Game game, object initializerObject)` | A load has completed. |
| `void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)` | **The save entry point.** The completion callback may arrive on a later frame — do not assume it is synchronous. |

### Model registration and handler extension points

| Member | What it is for |
| --- | --- |
| `T AddGameModelsManager<T>(IEnumerable<GameModel> inputComponents) where T : GameModelsManager` | Registers a manager assembled from model components. |
| `void SetBasicModels(IEnumerable<GameModel> models)` | Sets the basic model collection. |
| `T AddGameHandler<T>() where T : GameHandler, new()` | **Installs a lifecycle extension point.** Handlers are invoked at the engine's lifecycle points. |
| `T GetGameHandler<T>() where T : GameHandler` | Returns an installed handler, or null if none is installed. |
| `void RemoveGameHandler<T>() where T : GameHandler` | Removes one. **You must call it**, or the handler leaks with the instance. |
| `IBannerVisual CreateBannerVisual(Banner banner)` | Creates the visual for a banner. |

## Examples

### Example 1: The two-stage guard

`Game.Current` alone does not mean there is a campaign.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public static bool TryGetParty(out MobileParty party)
{
    party = null;

    Game game = Game.Current;
    if (game == null)
    {
        return false;
    }

    // Second stage: the instance exists, but is it a campaign?
    Campaign campaign = game.GameType as Campaign;
    if (campaign == null)
    {
        return false;
    }

    // Only now is world state meaningful
    party = campaign.MainParty;
    return party != null;
}
```

### Example 2: Install a handler and remove it again

`GameHandler` is the supported way in; `RemoveGameHandler` is not optional.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModSubModule : MBSubModuleBase
{
    protected override void OnGameInitializationFinished(Game game)
    {
        base.OnGameInitializationFinished(game);

        game.AddGameHandler<MyGameHandler>();
    }

    protected override void OnGameEnd(Game game)
    {
        base.OnGameEnd(game);

        // Without this the handler is retained by the game instance
        if (game != null)
        {
            game.RemoveGameHandler<MyGameHandler>();
        }
    }
}
```

### Example 3: Read defaults instead of hard-coding them

```csharp
using TaleWorlds.Core;

public static bool IsLegitimateSkill(string skillId)
{
    Game game = Game.Current;
    if (game == null)
    {
        return false;
    }

    // Definitions live on the game, not in your mod's string constants
    Skill skill = game.DefaultSkills.GetSkill(skillId);
    return skill != null;
}
```

## Risks and Boundaries

- **`Game.Current` has a null window.** Main menu, module load, editor preview, and the frames after `Destroy()`. Caching it assumes it never changes, which is the most common crash source of this generation.
- **`Destroying` and `Destroyed` are not safe to work in.** `GameManager`, `GameStateManager` and `ObjectManager` all fail once the state leaves `Running`. Finish cleanup before the transition.
- **`OnGameCreated` is static.** It outlives the instance. Unsubscribe or the next game invokes a dead subscriber.
- **`AfterTick` is a static delegate list.** A registration you never remove keeps its captured objects alive forever.
- **`GameHandler` does not remove itself.** `RemoveGameHandler<T>()` is an explicit obligation.
- **Mode assumptions break.** `game.GameType as Campaign` is not guaranteed — the editor and the lobby have game instances with no campaign. Always use a pattern match or a null check.
- **Save completion is asynchronous.** `Save`'s callback can arrive on a later frame; reading world state inside it is racy.
- **Single-threaded.** Every member runs on the main game thread. Work from `Module.JobManager` must be marshalled back before touching `Game.Current`.
- **Native interop.** `LoadBasicFiles` and `RegisterTypes` reach into the resource system and are only meaningful during startup.

## Dependencies

- **Upstream / providers**
  - [Module](../../core/Module) supplies `GlobalGameStateManager`, which works with this class through `IGameStateManagerOwner` to drive transitions.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnGameStart`, `OnGameInitializationFinished` and `OnGameLoaded` hooks are driven by this instance.
- **Peers / downstream**
  - [MBObjectManager](../../campaign-ext/MBObjectManager) is held as `ObjectManager` and populated by `RegisterTypes`.
  - [Campaign](../../campaign/Campaign) *is* `GameType` in campaign mode; `OnMissionIsStarting` pairs with it.
  - [SaveManager](../../save-system/SaveManager) is the static save facade, with [SaveContext](../../save-system/SaveContext) and [LoadContext](../../save-system/LoadContext) doing the work.
  - [ScreenManager](../../gui/ScreenManager) manages the screen stack alongside `GameStateManager`.

## See Also

- ↑ Parent: [core-extra index](../)
- ↔ Related: [Module](../../core/Module) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [SaveManager](../../save-system/SaveManager) · [ScreenManager](../../gui/ScreenManager) · [Chinese twin](../../../../zh/api/core-extra/Game)