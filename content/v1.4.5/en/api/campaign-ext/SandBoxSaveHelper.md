---
title: "SandBoxSaveHelper"
description: "The v1.4.5 SandBox save admission helper for module compatibility, version checks, disabled reasons, and LoadResult startup."
---
# SandBoxSaveHelper

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public static class SandBoxSaveHelper`  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxSaveHelper.cs`

## Responsibility

`SandBoxSaveHelper` is the UI-facing admission layer before a saved campaign becomes a running game. It compares save metadata with installed modules and versions, reports whether the save must be disabled, shows a module-mismatch inquiry when loading may continue, and turns a successful `MBSaveLoad.LoadSaveGameData` result into the callback used by [SandBoxGameManager](../SandBoxGameManager).

It does not deserialize campaign objects itself and it does not repair an incompatible save. The physical read remains in `MBSaveLoad`; this helper controls whether and when the host starts that read.

## Mental model: inspect, ask, load

```text
SavedGameVM
  -> CheckMetaDataCompatibilityErrors
  -> GetIsDisabledWithReason
  -> TryLoadSave
       -> module mismatch inquiry, or direct load
       -> MBSaveLoad.LoadSaveGameData
       -> Action<LoadResult>
       -> SandBoxGameManager(LoadResult)
```

The helper exposes a small state event so the save/load UI can distinguish `Start`, `Inquiry`, and `LoadGame`.

## Dependencies and boundaries

- [SaveGameFileInfo](../../save-system/SaveGameFileInfo) supplies the selected save name, metadata, and corruption flag.
- [LoadResult](../../save-system/LoadResult) is the callback result consumed by [SandBoxGameManager](../SandBoxGameManager).
- [SandBoxSubModule](../SandBoxSubModule) owns the module load boundary, while `SavedGameVM` owns the UI inquiry callbacks.

## Public types and event

```csharp
public enum SaveHelperState
{
    Start,
    Inquiry,
    LoadGame
}

public readonly struct ModuleCheckResult
{
    public readonly string ModuleId;
    public readonly ModuleCheckResultType Type;
}

public static event Action<SaveHelperState> OnStateChange;
```

The source's primary constructor for `ModuleCheckResult` takes a module ID and a `ModuleCheckResultType`. The result type distinguishes `ModuleRemovedFromGame`, `ModuleAddedToGame`, and `VersionMismatch`. The event is notification only; subscribing does not change the admission decision.

## Compatibility methods

### `CheckMetaDataCompatibilityErrors`

```csharp
public static MBReadOnlyList<ModuleCheckResult>
    CheckMetaDataCompatibilityErrors(MetaData fileMetaData)
```

The method reads the modules embedded in `fileMetaData` and compares them with `ModuleHelper.GetModules(null)`. A save module that cannot be found is reported as removed; an installed module missing from the save is reported as added; a matching module with a different version is reported as a version mismatch. For save versions older than `v1.3.0`, the source also compares legacy module names.

This is a report, not the final disabled decision. `SavedGameVM` uses it to mark module discrepancies and display loaded module information.

### `GetIsDisabledWithReason`

```csharp
public static bool GetIsDisabledWithReason(
    SaveGameFileInfo saveGameFileInfo,
    out TextObject reason)
```

The method returns `true` with a localized reason when one of these source checks blocks loading:

1. `saveGameFileInfo.IsCorrupted` is true.
2. A removed module belongs to `ModuleHelper.ModulesDisablingLoadingAfterBeingRemoved`.
3. An added module belongs to `ModuleHelper.ModulesDisablingLoadingAfterBeingAdded`.
4. The save application version is older than the helper's `SaveResetVersion`, which is `e1.7.0`.
5. The save version is newer than `Utilities.GetApplicationVersionWithBuildNumber()`.

Otherwise it returns `false` and leaves an empty `TextObject` reason. A version mismatch in the report is not automatically the same as a disabled save; the configured module policy and the version checks decide that boundary.

### `GetModuleNameFromModuleId`

```csharp
public static string GetModuleNameFromModuleId(string id)
```

The v1.4.5 source maps `NavalDLC` to the display name `War Sails` and returns every other ID unchanged. It is used by `SavedGameVM` when populating the loaded-module list and by disabled-reason text.

## Load flow

### `TryLoadSave`

```csharp
public static void TryLoadSave(
    SaveGameFileInfo saveInfo,
    Action<LoadResult> onStartGame,
    Action onCancel = null)
```

The method emits `Start`, filters official modules out of the compatibility report, and groups remaining results by error type for the inquiry text. If discrepancies exist, it shows a `Module Mismatch` inquiry. Accepting calls the private load action; canceling calls `onCancel`. If no discrepancy remains, it calls the same load action directly.

The load action emits `LoadGame`, calls `MBSaveLoad.LoadSaveGameData(saveInfo.Name)`, and invokes `onStartGame` only when the returned `LoadResult` is non-null. A null result opens an error inquiry and invokes `onCancel` when the user dismisses it.

## Real `SavedGameVM` call site

The save-load view model first evaluates the helper during construction and then uses it for the actual load:

```csharp
_moduleCheckResults = SandBoxSaveHelper.CheckMetaDataCompatibilityErrors(save.MetaData);
IsDisabled = SandBoxSaveHelper.GetIsDisabledWithReason(save, out var reason);

if (!IsCorrupted && !IsDisabled)
{
    SandBoxSaveHelper.TryLoadSave(Save, StartGame, _onCancelLoadSave);
}
```

Its `StartGame(LoadResult)` callback calls `MBSaveLoad.OnStartGame(loadResult)` and starts `new SandBoxGameManager(loadResult)`. This is the complete boundary from a selected save row to the game loader; a mod should not call `MBSaveLoad.LoadSaveGameData` and skip the compatibility inquiry.

## Risks and save boundaries

- Module comparison uses metadata, while object restoration happens later. Passing the inquiry does not prove that every mod-defined save type or behavior key can load.
- Do not ignore `GetIsDisabledWithReason` merely because `CheckMetaDataCompatibilityErrors` returned a list you recognize. The helper's configured added/removed-module policy can make a save non-loadable.
- Saves older than `e1.7.0` are explicitly directed through an intermediate version: load and save them under `e1.7.0` before using a newer version. This helper does not perform that migration for you.
- A newer save version is rejected with a localized explanation; loading it by bypassing the helper risks reading a future schema with an older runtime.
- `LoadResult` is valid only for the startup transition that consumes it. Do not retain it in campaign state or pass it to a second game manager.
- `OnStateChange` can report an inquiry without a successful load. Treat `LoadGame` as the start of a read, not as proof that the campaign was restored.

## Version note

The module policy lists, version thresholds, and `NavalDLC` display mapping are v1.4.5 source facts. Recheck them when a game update changes module IDs, save reset policy, or the save metadata schema.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [SandBoxSaveManager](../SandBoxSaveManager) · [SandBoxGameManager](../SandBoxGameManager) · [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner)
- Related: [Saved game file](../../save-system/SaveGameFileInfo) · [LoadResult](../../save-system/LoadResult) · [SaveManager](../../save-system/SaveManager) · [SandBoxSubModule](../SandBoxSubModule)
- Chinese/English: [中文页面](../../../../zh/api/campaign-ext/SandBoxSaveHelper)
