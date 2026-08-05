---
title: "MissionLocationLogic"
description: "MissionLocationLogic is the SandBox location-Mission behavior for transitions, companion spawning, player spawn frames, and teardown."
---
# MissionLocationLogic

**Namespace:** `SandBox.Missions.MissionLogics`  
**Module:** `SandBox.Missions`  
**Type:** `public class MissionLocationLogic : MissionLogic`  
**Base:** [MissionLogic](../../mission-ext/MissionLogic)  
**Source file:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionLocationLogic.cs`

## One-sentence responsibility

It is the SandBox location-Mission behavior that turns a Campaign `Location` and its companion state into player spawning, Agent creation, following, transitions, and teardown.

## Mental model

Treat it as a **controller attached to one Mission**, not as a global location service. `SandBoxMissions` creates it in the behavior lists for town centers, indoor locations, villages, prison breaks, alleys, and other location Missions, together with [MissionAgentHandler](../MissionAgentHandler). The engine then drives it through the `MissionLogic` lifecycle.

The constructor stores the target location and possible previous location, then registers three nonserialized `CampaignEvents`. `EarlyStart` obtains the current Mission’s `MissionAgentHandler`; `OnCreated` writes the target into [CampaignMissionComponent](../CampaignMissionComponent) as `CampaignMission.Current.Location`; only after the player Agent spawns does the logic add and spawn accompanying characters. `OnRemoveBehavior` removes temporary location characters and unregisters the listeners. Mods should normally retrieve the attached instance and observe it rather than call lifecycle callbacks manually.

## Lifecycle

```text
SandBoxMissions
  -> new MissionLocationLogic(location, specialPlayerTag)
  -> register LocationCharactersAreReadyToSpawn / BeforePlayerAgentSpawn / PlayerAgentSpawned
  -> Mission.EarlyStart -> obtain MissionAgentHandler
  -> Mission.OnCreated -> CampaignMission.Current.Location = location
  -> player Agent spawned -> SpawnCharactersAccompanyingPlayer
  -> Agent removed -> clean location character and companion wrappers
  -> OnRemoveBehavior -> remove temporary characters and unregister listeners
```

- `_currentLocation` is the target location for this Mission. In Campaign mode, `_previousLocation` comes from `GameMenuManager.PreviousLocation` and must be connected to the target by a passage.
- `specialPlayerTag` selects special player spawn entities such as the prison-break entry. Without it, the logic handles arena, passage, and town/castle outside spawn cases.
- The listeners are nonserialized runtime bindings; they are not save fields.

## When to use and when not to

Use it when:

- A live location Mission needs to inspect the attached behavior or resolve a passage spawn frame.
- A Mission extension needs to understand the standard ordering for location Agent spawning, companion following, location transitions, and Agent removal.
- You need to verify that a custom Mission has the required `CampaignMissionComponent`, `MissionAgentHandler`, and location behavior together.

Do not use it this way:

- Do not create it from a CampaignBehavior constructor or map tick. Construction registers listeners, but the object is not attached to a Mission and will not be cleaned up.
- Do not call `EarlyStart`, `OnCreated`, `OnAgentRemoved`, or `OnRemoveBehavior` manually to repair initialization; the Mission lifecycle owns those callbacks.
- Do not call spawn methods without an active `Mission.Current`, `CampaignMission.Current`, `LocationComplex.Current`, and loaded scene points.
- Do not save `Agent`, `UsableMachine`, `LocationCharacter`, or this Mission behavior in Campaign state; they belong to the current scene and Mission.

## Dependencies

```text
SandBoxMissions
  -> MissionState.OpenNew / Mission behavior list
  -> CampaignMissionComponent + MissionAgentHandler + MissionLocationLogic
  -> CampaignMission.Current.Location
  -> LocationComplex / LocationCharacter / AccompanyingCharacter
  -> Agent / CampaignAgentComponent / FollowAgentBehavior
```

- Mission host: [Mission](../../mission/Mission) and [MissionLogic](../../mission-ext/MissionLogic).
- Campaign bridge: [CampaignMissionComponent](../CampaignMissionComponent) and [CampaignMission](../../campaign/CampaignMission).
- Location inputs: [Location](../../campaign/Location), [LocationEncounter](../../campaign/LocationEncounter), [LocationCharacter](../../campaign/LocationCharacter), and [AccompanyingCharacter](../../campaign/AccompanyingCharacter).
- Agent spawning: [MissionAgentHandler](../MissionAgentHandler), [Agent](../../mission/Agent), and [CampaignAgentComponent](../CampaignAgentComponent).
- Factory call sites: [SandBoxMissions](../SandBoxMissions) inserts this behavior into several location-Mission behavior arrays.

## Public members and timing

| Member | Source behavior and side effects | Correct timing |
|---|---|---|
| `MissionLocationLogic(Location, string)` | Stores current/previous location and the special spawn tag, then registers three nonserialized Campaign listeners; it is not a side-effect-free data constructor. | Called by a Mission factory while assembling its behavior list. |
| `EarlyStart()` | Obtains `MissionAgentHandler` from `Mission.Current` for later spawn work. | Engine-driven Mission startup. |
| `OnCreated()` | If the target location is non-null, writes it to `CampaignMission.Current.Location`. | After the Campaign Mission bridge exists. |
| `SpawnCharactersAccompanyingPlayer(bool)` | Adds `LocationEncounter.CharactersAccompanyingPlayer` to the current location and uses `MissionAgentHandler` to spawn wandering Agents, teams, and follow behavior. | After the player Agent has spawned and the scene/location state is ready. |
| `GetSpawnFrameOfPassage(Location)` | Searches `TownPassageProps` and disabled passages for a destination and returns its normalized frame; returns `MatrixFrame.Identity` if none is found. | During entry through a previous location, after `EarlyStart`. |
| `OnAgentRemoved(...)` | For qualifying human killed/incapacitated Agents, removes the corresponding `LocationCharacter`; a killed companion is also removed from `LocationEncounter`. | Called by the Mission engine, never replayed manually. |
| `OnRemoveBehavior()` | Removes non-Hero temporary characters from standard locations, unregisters this object’s Campaign listeners, and invokes base cleanup. | Once when the Mission behavior is removed. |

## Event-driven flow

The three listeners registered by the constructor cover separate phases:

- `LocationCharactersAreReadyToSpawnEvent` provides the point at which location characters are ready for the scene; the town-center flow also includes alley characters in the prepared set.
- `BeforePlayerAgentSpawnEvent` chooses a player frame from a special tag, the arena, the previous-location passage, or the town/castle outside spawn point, and decides whether companions should use horses.
- `PlayerAgentSpawned` calls `SpawnCharactersAccompanyingPlayer`. Companions marked to follow are spawned near the player and receive `FollowAgentBehavior`; other companions use the normal wandering spawn path.

During a location transition, `CampaignMissionComponent.OnCharacterLocationChanged` and `MissionAgentHandler` fade exiting characters or spawn entering characters. This behavior is not a replacement for the Campaign location graph.

## Real acquisition example

Retrieving the behavior from the current Mission is the mod-facing observation path. `null` means the current Mission is not a SandBox location Mission or the behavior has not been attached:

```csharp
using SandBox.Missions.MissionLogics;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public static MissionLocationLogic GetActiveLocationLogic()
{
    Mission mission = Mission.Current;
    if (mission == null || CampaignMission.Current == null)
    {
        return null;
    }

    return mission.GetMissionBehavior<MissionLocationLogic>();
}
```

If a custom Mission genuinely needs the location-character flow, its `MissionState.OpenNew` behavior list must follow the SandBox composition and provide `CampaignMissionComponent`, `MissionAgentHandler`, and `MissionLocationLogic`; the engine must drive their order. Do not patch `CampaignMission.Current.Location` after the Mission has opened.

## Risks and save boundaries

- **Initialization order:** `EarlyStart` assumes `Mission.Current` exists and that the Mission has a `MissionAgentHandler`. Without it, later spawning and spawn-frame work can dereference a missing handler.
- **Campaign bridge:** `OnCreated` writes directly to `CampaignMission.Current.Location`. A custom Mission without `CampaignMissionComponent` cannot be repaired by manually assigning the field in a later callback.
- **Listener leaks:** the constructor registers nonserialized listeners. If a mod creates an instance without allowing Mission removal to clean it up, the stale object can keep receiving events and retain scene state.
- **Location context:** `OnRemoveBehavior` enumerates `LocationComplex.Current` and removes non-Hero temporary characters from standard locations. Do not call it after the settlement location context has already been destroyed.
- **Stale Agents:** `OnAgentRemoved` removes location characters and companion wrappers. Cached Agents, `CampaignAgentComponent`, navigation behavior, and `UsableMachine` objects are invalid after the Mission ends.
- **Spawn fallback:** `GetSpawnFrameOfPassage` returns identity when no passage point is found. Identity does not prove that the scene contains a valid standing point; let the standard Mission spawn flow handle the result.
- **Transient state:** `_previousLocation`, the special spawn tag, the no-horse flag, and listeners are Mission runtime state. They must not be placed in `SyncData` or Saveable objects.

## Version note

This page follows v1.4.5 `MissionLocationLogic.cs`, `SandBoxMissions.cs`, `CampaignMissionComponent.cs`, and `MissionAgentHandler.cs`. On upgrade, recheck event names, Mission behavior composition, location IDs, special spawn tags, Agent removal states, and the scope of `OnRemoveBehavior` cleanup.

## Navigation

- ↑ Parent: [Campaign extension API](../)
- ↔ Siblings: [CampaignMissionComponent](../CampaignMissionComponent) · [MissionAgentHandler](../MissionAgentHandler) · [SandBoxMissions](../SandBoxMissions)
- Related: [Mission](../../mission/Mission) · [MissionLogic](../../mission-ext/MissionLogic) · [LocationEncounter](../../campaign/LocationEncounter) · [CampaignMission](../../campaign/CampaignMission)
- 中文：[MissionLocationLogic](../../../../zh/api/campaign-ext/MissionLocationLogic)
