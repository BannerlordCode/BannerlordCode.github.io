---
title: "SandBoxHelpers: the Sandbox helper container"
description: "SandBoxHelpers groups the live-Mission and map-scene helper contracts used by SandBox in Bannerlord v1.4.5."
---
# SandBoxHelpers

**Namespace:** `SandBox`  
**Module:** `SandBox`  
**Type:** `public static class SandBoxHelpers`  
**Base:** none  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## One-sentence responsibility

`SandBoxHelpers` is a static container for two different Sandbox concerns: `MissionHelper` mutates agents and tagged mission entities, while `MapSceneHelper` converts campaign navigation rules into the region map consumed by a native map scene. The container owns neither a `Mission` nor the campaign navigation model.

## Mental model

There are no useful top-level operations on `SandBoxHelpers` itself. The source declares two nested static classes, and callers address them as `SandBoxHelpers.MissionHelper` or `SandBoxHelpers.MapSceneHelper`.

Use the [MissionHelper](../MissionHelper) child for work inside an already-created [Mission](../../mission/Mission): following or fading active agents, disabling a loaded mission event script, spawning the player, or spawning scene animals. Those methods change live mission state and expect the mission scene, tags, object registrations, and mission behaviors to be ready.

Use [MapSceneHelper](../MapSceneHelper) only for the map-loading conversion from [PartyNavigationModel](../../campaign/PartyNavigationModel) terrain rules to a `bool[]` region map. It does not decide campaign movement and does not own the resulting native scene. A mod that needs a campaign mission should enter through [CampaignMission](../../campaign/CampaignMission); it should not construct this helper container or call a child helper before its owner has created the relevant runtime objects.

## Dependency graph

```text
CampaignMission / MissionBehavior
             |
             v
       SandBoxHelpers
        /           \
       v             v
 MissionHelper   MapSceneHelper
       |             |
       v             v
 Mission.Current   PartyNavigationModel
 agents/scenes     -> native Scene region map
```

- Mission lifecycle: [CampaignMission](../../campaign/CampaignMission), [Mission](../../mission/Mission), and [MissionBehavior](../../mission/MissionBehavior) determine when `MissionHelper` is safe to call.
- Mission inputs: [Agent](../../mission/Agent), `CampaignAgentComponent`, `GameEntity`, `GenericMissionEvent`, `CharacterObject`, `PartyAgentOrigin`, and `MBObjectManager` supply the live objects used by the nested helper.
- Map inputs and consumer: [PartyNavigationModel](../../campaign/PartyNavigationModel) supplies terrain validity; [MapScene](../MapScene) passes the returned array to the native `Scene` navigation mesh.
- The two child helpers are separate contracts. A map-region conversion is not a substitute for agent spawning, and agent spawning is not campaign save data.

## Public surface by child helper

| Child | Source-confirmed responsibility | Timing and side effects |
|---|---|---|
| `MissionHelper` | Follows or unfollows agents, fades agents, disables matching `GenericMissionEventScript` instances, spawns the player, and spawns animals from scene tags. | Call from mission logic after `Mission.Current` and the relevant scene objects exist. It changes runtime agents, scripts, and visuals; it does not persist campaign state. |
| `MapSceneHelper` | `GetRegionMapping(PartyNavigationModel model)` enumerates `TerrainType` and asks the model whether each terrain is valid for default party navigation. | Pure with respect to the model; it returns a newly allocated array for the caller to pass to the map scene. Recompute it when the active model or scene changes. |

The detailed member contracts live on [MissionHelper](../MissionHelper) and [MapSceneHelper](../MapSceneHelper). Keeping those pages separate matters because the first group can spawn or mutate native agents, while the second only translates a model result.

## Real call chains

### Mission entry point

The Sandbox town-center mission controller uses the nested helper after the mission has entered `AfterStart`:

```csharp
public override void AfterStart()
{
    Mission mission = ((MissionBehavior)this).Mission;
    SandBoxHelpers.MissionHelper.SpawnPlayer(
        mission.DoesMissionRequireCivilianEquipment,
        noHorses: true);
    SandBoxHelpers.MissionHelper.SpawnHorses();
}
```

The source controller continues with `SpawnSheeps`, `SpawnCows`, `SpawnHogs`, `SpawnGeese`, and `SpawnChicken` when the campaign is not at night. This is a mission-start path, not a general campaign initialization recipe. The helper calls read the active scene's spawn tags and use the mission's player team and object registrations.

### Map loading path

`MapScene` obtains the live model from the campaign and gives the converted array to the scene:

```csharp
bool[] regionMapping = SandBoxHelpers.MapSceneHelper.GetRegionMapping(
    Campaign.Current.Models.PartyNavigationModel);
scene.SetNavMeshRegionMap(regionMapping);
```

The returned array is indexed by the integer value of `TerrainType`. It is a snapshot for the scene being loaded; it is not a saved movement policy and should not be cached across a model or map-scene replacement.

## Lifecycle and mutation boundaries

- `MissionHelper.FollowAgent` requires both agents to be non-null and active. It obtains the follower's active `CampaignAgentComponent` behavior group, creates or reuses `FollowAgentBehavior`, switches to scripted behavior, and assigns the target.
- `MissionHelper.UnfollowAgent` removes the follow behavior when present; it does not restore an arbitrary previous behavior. The caller owns the next behavior decision.
- `MissionHelper.DisableGenericMissionEventScript` searches `Mission.Current.Scene` by entity tag, matches `EventId` and `Parameter`, and sets `IsDisabled`. This changes a loaded scene script, not the `CampaignEvents` bus.
- The two `SpawnPlayer` overloads resolve a spawn entity or use a supplied `GameEntity`, build the player agent from `CharacterObject.PlayerCharacter`, dispatch player-spawn callbacks, and call `Mission.SpawnAgent`. They may apply civilian or disguised equipment and copy spawn tags.
- Animal methods read tags such as `sp_horse` and registered item ids such as `sheep` or `cow`. Repeating them after the scene has already been populated can create duplicate animals.
- `GetRegionMapping` iterates every `TerrainType` and calls `PartyNavigationModel.IsTerrainTypeValidForNavigationType` with `MobileParty.NavigationType.Default`; it does not mutate the model.

## Crash, save, and threading risks

- Do not call `MissionHelper` from campaign startup, `SyncData`, a background thread, or after `EndMission`. Its native scene and agent references belong to the active mission lifecycle.
- `FollowAgent` assumes the follower has a `CampaignAgentComponent` and an active behavior group. It is not a generic fallback for every `Agent` implementation.
- Player and animal spawning depend on registered objects, the current player team, scene tags, and valid `AgentBuildData` inputs. Missing scene entities or registrations can become null/native failures.
- Agent references do not become campaign entities merely because they were returned or spawned. Stop using them when they die, despawn, or their mission ends.
- `GetRegionMapping(null)` fails when it asks the model about terrain. A mapping generated from a model that does not match the loaded scene can make native navigation disagree with campaign movement.
- Neither child helper defines save schema. Persist campaign data through its owning behavior; never serialize live `Agent`, `Scene`, `GameEntity`, or native map objects.

## Version note

This page follows v1.4.5 `SandBoxHelpers.cs`, where `MissionHelper` and `MapSceneHelper` are nested static classes. Recheck scene tags, object ids, and mission callback timing when targeting another Bannerlord build.

## Navigation

### Parent

- [Campaign extension index](../)
- [SandBox architecture policy](../../../architecture/sandbox-native-policy)

### Children and siblings

- [MissionHelper](../MissionHelper)
- [MapSceneHelper](../MapSceneHelper)
- [MapScene](../MapScene)
- [CampaignMission](../../campaign/CampaignMission)
- [Mission](../../mission/Mission)
- [PartyNavigationModel](../../campaign/PartyNavigationModel)
- [English/Chinese counterpart](../../../../zh/api/campaign-ext/SandBoxHelpers)
