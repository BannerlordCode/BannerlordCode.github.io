---
title: "SandBoxSaveManager"
description: "The v1.4.5 SandBox implementation of the campaign auto-save policy and successful-save configuration callback."
---
# SandBoxSaveManager

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class SandBoxSaveManager : ISaveManager`  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxSaveManager.cs`

## Responsibility

`SandBoxSaveManager` is a three-method bridge between campaign save scheduling and `BannerlordConfig`. It reports the configured auto-save interval, defines `-1` as disabled, and updates `BannerlordConfig.LatestSaveGameName` only after a successful save. It does not serialize campaign objects and it does not initiate the physical save operation.

## Mental model: policy and callback, not storage

```text
Campaign.SaveHandler
  -> SandBoxManager.SandBoxSaveManager.GetAutoSaveInterval()
  -> decides whether an auto-save should be queued
  -> MBSaveLoad performs SaveAs/QuickSave/AutoSave
  -> SaveHandler.OnSaveEnded
  -> SandBoxSaveManager.OnSaveOver(success, name)
```

The installed property is interface-typed. `SaveHandler.AutoSaveInterval` reads it and falls back to `15` when no manager is installed. `SaveHandler` also checks `IsAutoSaveDisabled` before `ForceAutoSave`. The concrete class is therefore part of campaign runtime wiring, not a public replacement for [SaveManager](../../save-system/SaveManager).

## Members

### `GetAutoSaveInterval`

```csharp
public int GetAutoSaveInterval()
{
    return BannerlordConfig.AutoSaveInterval;
}
```

The unit is the campaign's configured auto-save interval used by `SaveHandler`. The source returns the configuration value without clamping it.

### `IsAutoSaveDisabled`

```csharp
public bool IsAutoSaveDisabled()
{
    return BannerlordConfig.AutoSaveInterval == -1;
}
```

Only `-1` is treated as disabled by this implementation. A value of `0` is not converted to `-1` here; do not invent additional policy in a caller.

### `OnSaveOver`

```csharp
public void OnSaveOver(bool isSuccessful, string newSaveGameName)
```

When `isSuccessful` is `true`, the method assigns `newSaveGameName` to `BannerlordConfig.LatestSaveGameName` and calls `BannerlordConfig.Save()`. On failure it performs no configuration update. `SaveHandler` calls this before dispatching the campaign `OnSaveOver` event.

## Real acquisition and use

The host installs the concrete object in `SandBoxSubModule.OnCampaignStart` and `OnGameLoaded`. A read-only consumer can observe the interface through the campaign owner:

```csharp
Campaign campaign = Campaign.Current;
ISaveManager saveManager = campaign?.SandBoxManager?.SandBoxSaveManager;

if (saveManager != null)
{
    int interval = saveManager.GetAutoSaveInterval();
    bool disabled = saveManager.IsAutoSaveDisabled();
}
```

The normal save request remains `Campaign.Current.SaveHandler.SaveAs(name)`, `QuickSaveCurrentGame()`, or the host's auto-save tick. Do not call `OnSaveOver` yourself to make a save appear successful; it is the completion callback after `MBSaveLoad` has returned a result.

## Dependencies and non-responsibilities

- [ISaveManager](../../campaign/ISaveManager) defines this exact three-member contract.
- [SandBoxSubModule](../SandBoxSubModule) installs the instance for a new campaign and replaces it after load.
- `SaveHandler` consumes the interval and completion callback; it also prevents forced auto-save when the implementation reports disabled.
- [SaveManager](../../save-system/SaveManager) and campaign behavior `SyncData` handle object persistence. This class has no saveable fields and no `SyncData` method.

## Risks and save boundaries

- A missing manager makes `SaveHandler.AutoSaveInterval` use its fallback interval, but it does not make the rest of the SandBox save pipeline initialized. Treat missing installation as a lifecycle problem, not as a reason to construct a second manager.
- The latest-save configuration name changes only on success. Never use the presence of a requested name as proof that bytes were written.
- Auto-save scheduling is separate from map-state safety: `SaveHandler` queues automatic saves only while the active state is a `MapState` with no active map conversation.
- The class does not migrate incompatible saves, define saveable types, or load `LoadResult` objects. Use [SandBoxSaveHelper](../SandBoxSaveHelper) for load admission and [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner) for module-owned type definitions.

## Version note

This page follows the v1.4.5 `ISaveManager`, `SaveHandler`, and `SandBoxSaveManager` sources. Configuration semantics and the default interval should be rechecked when targeting another game version.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [SandBoxSubModule](../SandBoxSubModule) · [SandBoxGameManager](../SandBoxGameManager) · [SandBoxSaveHelper](../SandBoxSaveHelper)
- Related: [ISaveManager](../../campaign/ISaveManager) · [SaveManager](../../save-system/SaveManager) · [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner) · [Campaign](../../campaign/Campaign)
- Chinese/English: [中文页面](../../../../zh/api/campaign-ext/SandBoxSaveManager)
