---
title: "MissionAgentHandler"
description: "MissionAgentHandler is the SandBox mission logic that indexes usable points, spawns location characters, and maintains campaign-location Agent flow."
---
# MissionAgentHandler

**Namespace:** SandBox.Missions.MissionLogics  
**Module:** SandBox.Missions  
**Type:** public class MissionAgentHandler : MissionLogic  
**Base:** [MissionLogic](../../mission-ext/MissionLogic)  
**Source file:** Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionAgentHandler.cs

## One-sentence responsibility

It turns scene UsableMachine and campaign LocationCharacter data into spawn-point lookup, Agent spawning/simulation, passage use, and location transition behavior.

## Mental Model

This is a SandBox mission behavior, not a generic Agent service. Each applicable SandBox mission factory inserts one MissionAgentHandler into the behavior array passed to MissionState.OpenNew; EarlyStart indexes scene props and may build paired animation-point lists, while OnMissionTick advances passage usage and delayed wandering-agent spawns. The handler dictionaries are keyed by spawn tags and contain UsableMachine objects discovered from the current mission scene. Its public methods are useful only while the same Mission and campaign location are alive.

TownPassageProps is the subset stored under the npc_passage tag. UsablePoints returns a newly assembled list from normal and paired dictionaries, so changing that returned list does not change the handler index. Spawn methods consume point availability and campaign character origins; they are not a replacement for Agent construction in battle missions.

## When to use and when not to use

- Use the behavior already attached to Mission.Current when a town, indoor, village, hideout, conversation, or disguise mission needs location Agents or usable-point lookup.
- Use FindUnusedPointWithTagForAgent, FindUnusedPoints, and FindAllUnusedPoints to respect StandingPoint occupancy and Agent-specific disable rules.
- Use SpawnLocationCharacters only after CampaignMission.Current.Location and the location mission behaviors are ready.
- Do not construct this handler in a campaign behavior or use it as a global spawn manager; its indexes belong to one scene/Mission.
- Do not treat UsablePoints as persistent data, and do not pass Agents or LocationCharacter objects from a finished Mission.

## Dependencies

Mission factory -> MissionState.OpenNew -> MissionAgentHandler in Mission behaviors -> tag indexes and paired points -> LocationCharacter/Agent spawning -> OnEndMission clears indexes.

- Owner: [Mission](../../mission/Mission) stores the behavior and its live Agent/scene context.
- Mission base: [MissionLogic](../../mission-ext/MissionLogic) supplies the mission callback lifecycle.
- Campaign context: [CampaignMission](../../campaign/CampaignMission) supplies the active Location used by location spawning.
- Usable-point model: [UsableMachine](../../mission-ext/UsableMachine) contains StandingPoint candidates and occupancy state.
- Factory composition: [SandBoxMissions](../SandBoxMissions) adds this behavior to applicable mission types.

## Public surface and lifecycle

| Area | Members | Source-backed meaning |
| --- | --- | --- |
| Point collections | TownPassageProps, DisabledPassages, UsablePoints | Read the normal passage, unavailable passage, and combined usable-machine collections for this Mission. |
| Availability | HasPassages, HasUsablePointWithTag, GetAllSpawnTags, GetAllUsablePointsWithTag | Inspect the tag index without creating Agents. |
| Selection | FindUnusedUsablePointCount, FindUnusedPointWithTagForAgent, FindUnusedPoints, FindAllUnusedPoints | Count or select points while checking used spawn points, users, moving Agents, and Agent-specific disable state. |
| Location spawning | SpawnLocationCharacters, SpawnDefaultLocationCharacter, SpawnWanderingAgent, SpawnWanderingAgentWithDelay, SpawnWanderingAgentWithInitialFrame | Spawn campaign location characters at scene points; delay requires a positive timer. |
| Transition | FadeoutExitingLocationCharacter, SpawnEnteringLocationCharacter | Fade or spawn a location character when the campaign location changes. |
| Simulation | SimulateAgent | Runs a short local Agent/navigation simulation for an already spawned human Agent. |
| Positioning | TeleportTargetAgentNearReferenceAgent | Repositions an Agent and optionally followers around a reference Agent. |
| Diagnostics | DetectMissingEntities | DEBUG-only check for character target tags versus available points. |
| Static presentation | GetRandomTournamentTeamColor, GetAgentSettlementColors, GetPointCountOfUsableMachine | Utility calculations used by location/tournament presentation and point accounting. |

EarlyStart calls GetAllProps, initializes passage usage 30 seconds ahead, and only initializes paired usable objects when the current weather is not one of the excluded weather values. OnEndMission clears all point dictionaries, disabled passages, and used spawn points.

## Real example

This follows the acquisition path used by SandBox mission logic: obtain the handler from the current Mission, then query a real scene tag and the current Agent.

```csharp
using System.Collections.Generic;
using SandBox.Missions.MissionLogics;
using SandBox.Objects.Usables;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public static List<UsableMachine> GetFreePassageCandidates(Agent agent)
{
    List<UsableMachine> empty = new List<UsableMachine>();
    Mission mission = Mission.Current;
    MissionAgentHandler handler = mission?.GetMissionBehavior<MissionAgentHandler>();
    if (handler == null || agent == null || CampaignMission.Current == null || CampaignMission.Current.Location == null)
    {
        return empty;
    }

    List<UsableMachine> tagged = handler.GetAllUsablePointsWithTag("npc_passage");
    UsableMachine preferred = handler.FindUnusedPointWithTagForAgent(agent, "npc_passage");
    if (preferred != null && !tagged.Contains(preferred))
    {
        tagged.Add(preferred);
    }

    return tagged;
}
```

The returned list is a query result. The actual spawn path remains SpawnLocationCharacters or one of the spawn methods, and those paths require the location mission to have supplied real LocationCharacter and scene data.

## Risks and boundaries

- EarlyStart assumes campaign settlement/weather context and a scene whose usable machines have been loaded. Calling public methods on a detached handler is not a valid initialization path.
- SpawnLocationCharacters reads CampaignMission.Current.Location, emits campaign receiver callbacks, temporarily deactivates passages, and simulates existing Agents. It can change both scene and campaign-facing state.
- SpawnWanderingAgentWithDelay asserts that delay is greater than zero; use SpawnWanderingAgent or the initial-frame overload when no delay is required.
- FindUnused methods are occupancy-sensitive. A point can be present in the tag index while unavailable because it has a user, a moving Agent, a used spawn marker, or an Agent-specific disable rule.
- TeleportTargetAgentNearReferenceAgent can move Agents and followers. Use it only during an active mission transition, not from a campaign tick after mission teardown.
- OnEndMission clears indexes. Do not cache UsableMachine lists or Agents as persistent campaign state.

## Version note

This page follows the v1.4.5 SandBox implementation and its use from town, indoor, village, hideout, conversation, disguise, and location mission logic. Recheck tag names, weather gates, and spawn behavior when targeting another version.

## Navigation

- Parent: [Campaign extension API](../)
- Siblings: [CampaignMissionComponent](../CampaignMissionComponent) · [UsableMachine](../../mission-ext/UsableMachine)
- Related: [Mission](../../mission/Mission) · [MissionLogic](../../mission-ext/MissionLogic) · [CampaignMission](../../campaign/CampaignMission) · [UsableMachineAIBase](../../mission-ext/UsableMachineAIBase)
