---
title: "SandBoxGameManager"
description: "The v1.4.5 SandBox game loader that separates new campaign creation from saved-game restoration."
---
# SandBoxGameManager

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class SandBoxGameManager : MBGameManager`  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxGameManager.cs`

## Responsibility

`SandBoxGameManager` is the `MBGameManager` implementation that drives SandBox startup. Its two constructors represent two different roots: a `CampaignCreatorDelegate` creates a new campaign, while a `LoadResult` restores a saved campaign. The manager then advances module loading, creates or loads the `Game`, waits for submodules, and selects character creation or the restored map state.

## Mental model: one loader, two roots

```text
new campaign: CampaignCreatorDelegate -> new Campaign -> Game.CreateGame
loaded save:  LoadResult -> Game.LoadSaveGame -> existing Campaign
                         \
                          -> common Game.DoLoading and submodule hooks
```

`LoadingSavedGame` tells downstream hooks which root is active. `MetaData` is available only when the manager owns a pending `LoadResult`; the new-game constructor leaves it `null`. This class coordinates the game state machine. It is not the place to construct a campaign save, install a mission, or hold a mod's persistent state.

## Public surface

### `CampaignCreatorDelegate`

```csharp
public delegate Campaign CampaignCreatorDelegate();
```

The delegate is used only by the new-campaign constructor. It must return the campaign game type the host is starting; the manager invokes it during loading step 3.

### Constructors

```csharp
public SandBoxGameManager(CampaignCreatorDelegate campaignCreator);
public SandBoxGameManager(LoadResult loadedGameResult);
```

The first sets `LoadingSavedGame` to `false` and stores the creator. The second sets it to `true` and stores the load result. Do not pass a `LoadResult` to the new-game route or call the load constructor with metadata that did not come from `MBSaveLoad.LoadSaveGameData`.

### `LoadingSavedGame` and `MetaData`

`LoadingSavedGame` is a read-only public property after construction. `MetaData` returns `_loadedGameResult.MetaData` while a load result is pending and returns `null` otherwise. The load result is cleared after `Game.LoadSaveGame` creates the campaign, so metadata is not a permanent save descriptor.

## Loading sequence

`DoLoadingForGameManager` advances these source-defined phases:

1. Move from the initial phase to module-data loading.
2. Call `MBGameManager.LoadModuleData(LoadingSavedGame)`.
3. For a new game call `MBGameManager.StartNewGame`; for a load, defer to the restored game path.
4. Initialize native references. For a new game, call the campaign creator and `Game.CreateGame`; for a load, call `Game.LoadSaveGame`. Then call `Game.Current.DoLoading()`.
5. Call `DoLoading(Game.Current)` on every collected submodule until all return `true`.
6. Continue `Game.Current.DoLoading()` until the game reports that loading is complete.

`OnLoadFinished` then diverges again. A new game opens the campaign intro video unless development mode is enabled, then launches `CharacterCreationState`. A loaded game calls `OnSavedGameLoadFinished`, pushes `MapState`, restores the saved game menu or finishes the encounter when that menu no longer exists, refreshes party visuals and settlement masks, calls campaign information and event load callbacks, and marks the manager loaded.

## Real creation paths

StoryMode creates a new SandBox manager with a real campaign creator:

```csharp
MBGameManager.StartNewGame(
    new SandBoxGameManager(
        () => new CampaignStoryMode((CampaignGameMode)1)));
```

The decompiled StoryMode source uses the equivalent cached `CampaignCreatorDelegate`. A loaded save comes from `SavedGameVM.StartGame` after `SandBoxSaveHelper` has produced a `LoadResult`:

```csharp
MBSaveLoad.OnStartGame(loadResult);
MBGameManager.StartNewGame(new SandBoxGameManager(loadResult));
```

`SandBoxSubModule.StartGame(LoadResult)` follows the same load constructor path. These are host-owned startup paths; ordinary campaign code should not start another game while a live `Game` or `Mission` exists.

## Dependencies and boundaries

- [MBGameManager](../../mission-ext/MBGameManager) supplies the engine loading contract and `Current` manager surface.
- [SandBoxSubModule](../SandBoxSubModule) installs the manager for save loading and owns the surrounding module hooks.
- [SandBoxSaveHelper](../SandBoxSaveHelper) validates metadata and delivers the `LoadResult` used by the load constructor.
- [SandBoxManager](../../campaign/SandBoxManager) and campaign hooks are installed after the `Game` has been created; they are not available during the earliest loader phases.

## Risks and save boundaries

- `LoadingSavedGame` is a branch selector, not a guarantee that campaign objects are fully restored. Wait for the host's load-finished callbacks before reading world state.
- `MetaData == null` is normal for a new campaign and after a load result has been consumed. Do not dereference it unconditionally.
- The manager pushes or cleans game states during completion. Starting a second manager from a campaign behavior can pop screens, duplicate module hooks, or leave `GameManagerBase.Current` in an inconsistent state.
- `OnAfterCampaignStart` is an empty override in this source. Do not infer that it is a hidden campaign initialization point.
- This loader does not persist mod fields. Use campaign behavior `SyncData` and the save system's stable type definitions for persistent state.

## Version note

The sequence and `CampaignGameMode.StoryMode` call shape are from v1.4.5 source. Recheck loading-step enum values and post-load menu handling on another version.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [SandBoxSubModule](../SandBoxSubModule) · [SandBoxSaveManager](../SandBoxSaveManager) · [SandBoxSaveHelper](../SandBoxSaveHelper)
- Related: [MBGameManager](../../mission-ext/MBGameManager) · [Campaign](../../campaign/Campaign) · [SandBoxManager](../../campaign/SandBoxManager) · [LoadResult](../../save-system/LoadResult)
- Chinese/English: [中文页面](../../../../zh/api/campaign-ext/SandBoxGameManager)
