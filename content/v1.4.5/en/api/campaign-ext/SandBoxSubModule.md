---
title: "SandBoxSubModule"
description: "The v1.4.5 SandBox module lifecycle that installs campaign mission, save, model, and object-system services."
---
# SandBoxSubModule

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public class SandBoxSubModule : MBSubModuleBase`  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxSubModule.cs`

## Responsibility

`SandBoxSubModule` is the module bootstrapper for the single-player SandBox layer. The engine calls its lifecycle hooks; the hooks install the SandBox mission and save managers, register campaign models and behaviors, initialize XML-backed objects, and start the correct [SandBoxGameManager](../SandBoxGameManager) for a new game or a loaded save. It is not a service locator and its callbacks are not ordinary application methods to invoke on demand.

## Mental model: an ordered bootstrap

The important distinction is between the hook that installs a dependency and the code that consumes it:

```text
OnCampaignStart
  -> SandBoxManager.SandBoxMissionManager
  -> SandBoxManager.AgentBehaviorManager
  -> SandBoxManager.SandBoxSaveManager

OnGameInitializationFinished
  -> Campaign.CampaignMissionManager
  -> Campaign.MapSceneCreator
  -> encyclopedia and SandBox object registration

RegisterSubModuleObjects / AfterRegisterSubModuleObjects
  -> XML data, then character post-load work
```

`OnGameLoaded` repeats the SandBox manager installation for the loaded campaign. This is why a cached manager reference can become stale across a load boundary.

## Lifecycle hooks that matter

### `OnSubModuleLoad`

The hook installs the editor mission tester and initializes `TauntUsageManager`. It runs before a campaign exists, so it is not a valid place to read `Campaign.Current` or open a mission.

### `InitializeGameStarter`

When `game.GameType is Campaign`, the module adds SandBox implementations of mission and combat models and registers SandBox campaign behaviors such as hideout conversations, alley behavior, prison breaks, arena behavior, and retirement behavior. The `CampaignGameStarter` is supplied by the engine; this hook is where the module composes the campaign rather than where a mod should manually replay the whole list.

### `OnCampaignStart`

For a campaign, the source assigns fresh instances to:

```csharp
campaign.SandBoxManager.SandBoxMissionManager = new SandBoxMissionManager();
campaign.SandBoxManager.AgentBehaviorManager = new AgentBehaviorManager();
campaign.SandBoxManager.SandBoxSaveManager = new SandBoxSaveManager();
```

The first and third properties are interface-typed. Read them through the owning campaign when a feature needs to inspect the installed route; do not substitute an unregistered instance just because the property is temporarily `null` during startup.

### `OnGameInitializationFinished`

After game initialization, the module assigns a new `CampaignMissionManager`, a `MapSceneCreator`, creates encyclopedia pages, and registers SandBox music object types and XML data. Campaign code that calls a `CampaignMission` entry before this point has no guaranteed forwarding manager.

### `RegisterSubModuleObjects` and `AfterRegisterSubModuleObjects`

The first hook calls `Campaign.Current.SandBoxManager.InitializeSandboxXMLs(isSavedCampaign)`. The second calls `InitializeCharactersAfterLoad(isSavedCampaign)`. The boolean is a load boundary, not a permission to rebuild objects from a mod callback.

### `OnGameLoaded`

After a save has produced a campaign, the hook installs fresh `SandBoxMissionManager`, `AgentBehaviorManager`, and `SandBoxSaveManager` instances again. This refresh is part of the runtime contract; consumers should reacquire the interface from `Campaign.Current.SandBoxManager` after loading.

### Other hooks

- `StartGame(LoadResult)` starts `new SandBoxGameManager(loadResult)` and hides the cursor.
- `OnBeforeInitialModuleScreenSetAsRoot` initializes `MBSaveLoad` once through the module's global text manager.
- `OnConfigChanged` forwards configuration changes to the campaign event receiver when a campaign exists.
- `OnNewModuleLoad` calls `SaveManager.InitializeGlobalDefinitionContext()` so saveable definitions are rebuilt from loaded assemblies.

## Dependencies and boundaries

- [MBSubModuleBase](../../core/MBSubModuleBase) supplies the engine lifecycle callbacks that invoke this module.
- [SandBoxManager](../../campaign/SandBoxManager) owns the installed mission, agent-behavior, and save interfaces.
- [SandBoxGameManager](../SandBoxGameManager) consumes the load result started by this module.
- [SaveManager](../../save-system/SaveManager) consumes the global definitions initialized by `OnNewModuleLoad`.

## Real acquisition path

Code that consumes the installed services should read the owner and keep the interface boundary:

```csharp
using TaleWorlds.CampaignSystem;

Campaign campaign = Campaign.Current;
if (campaign != null && campaign.SandBoxManager != null)
{
    ISandBoxMissionManager missionManager =
        campaign.SandBoxManager.SandBoxMissionManager;
    ISaveManager saveManager = campaign.SandBoxManager.SandBoxSaveManager;

    bool ready = missionManager != null && saveManager != null;
}
```

Use [SandBoxMission](../../campaign/SandBoxMission) for normal tournament entry and [CampaignMission](../../campaign/CampaignMission) for campaign mission entry. The submodule's job is to make those routes available, not to become their public facade.

## Risks and save boundaries

- Do not call lifecycle hooks manually to force initialization. The engine controls their order, and replaying them can register duplicate behaviors or replace live manager state.
- `OnCampaignStart` and `OnGameLoaded` install different lifetime instances. Re-read `Campaign.Current.SandBoxManager` after a new game or load.
- `RegisterSubModuleObjects` and `AfterRegisterSubModuleObjects` assume the campaign and SandBox manager already exist. Moving their work to an early module hook can cause null references.
- `OnNewModuleLoad` initializes type definitions globally. A custom saveable type must be registered before save traversal; do not assume a later `SaveableSandBoxTypeDefiner` edit can repair an already-written save protocol.
- The module coordinates setup, but it does not make mission-scoped objects saveable. Never store an `Agent`, `Mission`, or manager instance in campaign save data.

## Version note

This page follows the v1.4.5 `SandBoxSubModule` source. Hook order and the installed manager set are version-sensitive; verify them before porting a submodule integration.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [SandBoxGameManager](../SandBoxGameManager) · [SandBoxSaveManager](../SandBoxSaveManager) · [SaveableSandBoxTypeDefiner](../SaveableSandBoxTypeDefiner)
- Mission route: [SandBoxMissionManager](../SandBoxMissionManager) · [SandBoxMissions](../SandBoxMissions) · [CampaignMission](../../campaign/CampaignMission)
- Save route: [SandBoxSaveHelper](../SandBoxSaveHelper) · [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner) · [SaveManager](../../save-system/SaveManager)
- Chinese/English: [中文页面](../../../../zh/api/campaign-ext/SandBoxSubModule)
