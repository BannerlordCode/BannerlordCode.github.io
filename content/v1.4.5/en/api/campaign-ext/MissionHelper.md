---
title: "MissionHelper"
description: "Sandbox mission utilities for agent follow behavior, safe fading, event-script disabling, player spawning, and scene animal spawning."
---
# MissionHelper

**Namespace:** `SandBox.SandBoxHelpers`  
**Module:** `SandBox`  
**Type:** `public static class MissionHelper`  
**Base:** none  
**Source:** `Modules.SandBox/SandBox/Sandbox/SandBoxHelpers.cs`

## One-line responsibility

Groups the Sandbox operations that manipulate agents and tagged mission entities during an active [Mission](../../mission/Mission).

## Mental model

`MissionHelper` is a static facade over live Mission state. It does not create a Mission and it does not own agents: the active Mission owns the scene, `Agent` instances, player team, and spawn lifecycle. Its methods are intended for mission controllers and mission behaviors after `Mission.Current` and the relevant scene entities exist. Use [Mission](../../mission/Mission) and [MissionBehavior](../../mission/MissionBehavior) for lifecycle ownership; use the helper only for the specific Sandbox operation.

Do not call these methods from Campaign startup, a background thread, or after a Mission ends. Do not retain returned agents as if they were campaign entities. For general agent logic, use the `Agent`/`AgentComponent` contract; these helpers assume Sandbox components and scene tags.

## Dependency graph

- Owner/lifecycle: [Mission](../../mission/Mission), [MissionBehavior](../../mission/MissionBehavior), and [Agent](../../mission/Agent).
- Follow path: `CampaignAgentComponent` and its navigator/behavior group.
- Scene path: `Mission.Current.Scene`, `GameEntity`, and [GenericMissionEvent](../../mission-ext/GenericMissionEvent).
- Campaign path: [Campaign](../../campaign/Campaign), [CharacterObject](../../campaign/CharacterObject), [PartyBase](../../campaign/PartyBase), and `CampaignEventDispatcher` when spawning the player.
- Related lifecycle guide: [CampaignMission](../../campaign/CampaignMission) describes the campaign mission context around a Mission.

## Agent behavior operations

| Member | Purpose, side effect, and timing |
|---|---|
| `FollowAgent(Agent agent, Agent target)` | Requires two non-null active agents. Gets the follower's active `CampaignAgentComponent` behavior group, creates or reuses `FollowAgentBehavior`, switches to scripted behavior, and assigns the target. Call while both agents are active. |
| `UnfollowAgent(Agent agent)` | Removes the follower's `FollowAgentBehavior` when present. It does not restore an arbitrary prior behavior; the caller must decide what behavior should run next. |
| `FadeOutAgents(IEnumerable<Agent> agents, bool hideInstantly, bool hideMount)` | Materializes the enumerable, fades non-mount agents first, then fades remaining agents whose state is not dead. This avoids leaving a mount or active visual behind during scene transitions. |

## Tagged mission-script operation

`DisableGenericMissionEventScript(string triggeringObjectTag, GenericMissionEvent missionEvent)` searches the entity with the supplied tag in `Mission.Current.Scene`, compares each `GenericMissionEventScript`'s `EventId` and `Parameter`, and sets `IsDisabled`. It changes the live scene script; it is not a Campaign event subscription and is not save data. Call after the tagged entity and event script have been loaded.

## Player spawning

Two overloads provide the same operation:

- `SpawnPlayer(bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false, string spawnTag = "")` resolves either the supplied tag or the conventional `spawnpoint_player` entity, then delegates to the entity overload.
- `SpawnPlayer(GameEntity spawnPosition, bool civilianEquipment = false, bool noHorses = false, bool noWeapon = false, bool wieldInitialWeapons = false)` builds an `AgentBuildData` from `CharacterObject.PlayerCharacter`, `Mission.Current.PlayerTeam`, and a `PartyAgentOrigin`, dispatches the player-spawn campaign callbacks, spawns through `Mission.SpawnAgent`, and optionally wields initial weapons.

In campaign mode, `civilianEquipment` is honored only when the current game mode allows it. A disguised main hero can receive the registered `npc_disguised_hero_equipment` roster. The helper also copies spawn-position tags to the new agent and ticks its skeleton briefly so the visual is ready for the current frame.

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.Scene != null)
{
    MissionHelper.SpawnPlayer(civilianEquipment: mission.DoesMissionRequireCivilianEquipment,
        noHorses: true,
        noWeapon: false,
        wieldInitialWeapons: true,
        spawnTag: "spawnpoint_player");
}
```

## Scene animal spawning

`SpawnHorses()` scans entities tagged `sp_horse`, resolves each entity's item id through `MBObjectManager`, spawns valid horse items with `Mission.SpawnMonster`, applies animal flags, simulates initial animation, and returns the created agents. `SpawnSheeps`, `SpawnCows`, `SpawnGeese`, `SpawnChicken`, and `SpawnHogs` perform the same scene-tag workflow for their registered item ids (`sheep`, `cow`, `goose`, `chicken`, and `hog`) but return no list. They also honor a `navigation_mesh_deactivator` when present.

Call these once after the mission scene has loaded and its spawn tags and object registrations exist. Repeated calls create duplicate animals.

## Crash and lifecycle risks

- Every method except the null-tolerant `FadeOutAgents` assumes a live `Mission.Current`, loaded `Scene`, and valid mission phase. Calling after `EndMission` can hit released native objects.
- `FollowAgent` assumes the agent has a `CampaignAgentComponent` and an active behavior group. It is not a generic helper for every Agent implementation.
- Agent references become invalid after death/despawn; stop following or fading them from the correct mission callback.
- Player and animal spawning depend on registered `CharacterObject`, `ItemObject`, team, spawn tags, and `AgentBuildData` inputs. Missing objects or tags can cause null/native failures.
- These operations mutate runtime visuals and agent state, not campaign save state. Do not invoke them in `SyncData` or expect a save/load cycle to recreate mission agents.
- Use the mission's main thread and lifecycle callbacks. Native scene and agent APIs are not safe to call from arbitrary background work.

## Navigation

### ↑ Parent

- [Campaign extension index](../)
- [Mission API](../../mission/)

### ↔ Siblings and related types

- [Mission](../../mission/Mission)
- [MissionBehavior](../../mission/MissionBehavior)
- [Agent](../../mission/Agent)
- [CampaignMission](../../campaign/CampaignMission)
- [GenericMissionEvent](../../mission-ext/GenericMissionEvent)
