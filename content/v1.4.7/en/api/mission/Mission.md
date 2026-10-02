---
title: "Mission"
description: "The runtime root of a combat scene: it holds the Scene, the teams, the agent lists, the mission mode and the logic containers, and exposes spawning, navigation, hit handling, camera and end-of-mission APIs. Mission.Current is the combat layer's only global entry point."
---
# Mission

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `TaleWorlds.DotNet.DotNetObject`; implements `IMission`
**Source:** `TaleWorlds.MountAndBlade/Mission.cs` (declaration at line 42)

## Overview

`Mission` is the runtime root object for one battle, encounter or scripted scene. It binds together the 3D scene (`Scene Scene`), the two sides (`Mission.TeamCollection Teams`, `BattleSideEnum RetreatSide`), every character (`AgentReadOnlyList Agents` and `AllAgents`), missiles, boundaries, the navigation mesh and the mission's play mode (`MissionMode Mode`). It is `sealed`, and the static `Mission.Current` is the combat layer's only global entry point.

The public surface is very large — well over four hundred members — but what a mod actually reaches for falls into a handful of groups: getting at agents (`MainAgent`, `GetClosestEnemyAgent`, `GetNearbyEnemyAgents`), adding logic (`AddMissionBehavior`), spawning (`SpawnAgent`, `SpawnMonster`, `SpawnTroop`), terrain and navigation queries (`IsPositionInsideBoundaries`, `GetPathBetweenPositions`, `IsFormationUnitPositionAvailable`), and ending the fight (`EndMission`, `RetreatMission`, `SurrenderMission`).

It is `DotNetObject`-derived, which means a large part of the API passes straight through to native code. Coordinates are `Vec2`/`Vec3` in mission space, frames are `MatrixFrame`, and the navigation and physics calls are thin wrappers over the engine.

Its lifecycle is separate from [Campaign](../../campaign/Campaign). [MissionState](../MissionState) opens the mission; when it ends, `Mission.Current` becomes null while `Campaign.Current` normally stays valid. That boundary decides how every cross-layer piece of mod logic has to be written.

## Mental Model

**A mission is a volatile object graph.** When it ends it is destroyed wholesale: `Mission.Current` becomes null and everything inside it — agents, missiles, entities, teams — becomes invalid in the same instant. Two rules follow, and they are the two most valuable things to internalise about this class.

First: **never hold a `Mission` or `Agent` reference across the mission boundary.** Not in a static field, not in a campaign behaviour, not in a cached UI value. What persists is *data* — hero ids, settlement ids, numbers — not runtime objects. Reading `Agent.Character` and storing that is fine; storing the `Agent` is not.

Second: **do not write to the world once `MissionIsEnding` is true.** The teardown has begun; writes are ineffective at best and throwing at worst.

**Logic belongs on a behaviour, not in a polling loop.** `AddMissionBehavior(MissionBehavior)` is the supported extension point, and `MissionBehavior`'s callbacks cover almost every need — per-tick logic, hits, agent death, deployment, mission state. Scanning `Mission.Agents` looking for a target is both slower and fragile, because agents can be removed while you iterate.

**Use the query methods rather than the collection.** `GetClosestEnemyAgent(Team team, Vec3 position, float radius)`, `GetClosestAllyAgent(Team, Vec3, float)` and `GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` are purpose-built. Note the shapes: the closest-agent calls take a `Team`, a position and a **radius** — there is no `GetClosestEnemyAgent(Agent)` overload — and the nearby calls take a `Vec2` centre plus a caller-supplied `MBList<Agent>` to fill, so they do not allocate when you reuse the list.

**Three different "times" that must not be confused.** `FixedDeltaTime` is the constant physics step, a `float`. `CurrentState` is the `Mission.State` enum (`NewlyCreated`, `Initializing`, `Continuing`, `EndingNextFrame`, `Over`) — note `FixedDeltaTimeMode` is a separate `bool` flag, not an enum. `MissionMode Mode` is the play mode: dialogue, gambling, siege and so on, changed with `SetMissionMode`.

**Position arguments are `Vec2`, not `Vec3`,** for the boundary, blocker and water queries. `IsPositionInsideBoundaries(Vec2 position)`, `IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)` and `GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)` all take the 2D projection of the world position.

**Path results do not outlive the frame.** `GetPathBetweenPositions(ref NavigationData navData)` asks the engine for navigation points against a `NavigationData` structure you supply; the answer is valid for the navigation state of that moment, not for later frames.

**Time-speed requests are counted.** `AddTimeSpeedRequest(Mission.TimeSpeedRequest request)` and `RemoveTimeSpeedRequest(int timeSpeedRequestID)` pair up. Add without removing and the battle stays in slow motion for the rest of its life.

**Ending is a policy decision.** `EndMission()`, `RetreatMission()` and `SurrenderMission()` are three different outcomes, and which one you call determines what the campaign sees afterwards.

## When to Use / When Not To Use

- **Use** `Mission.Current` as the entry point to combat logic, null-checked.
- **Use** `AddMissionBehavior` to install logic rather than polling from elsewhere.
- **Use** `SpawnAgent`, `SpawnMonster` and `SpawnTroop` to add units, and `CreateMissionObjectFromPrefab` for scene objects.
- **Use** the boundary, blocker, water and formation-position queries before spawning or moving anything.
- **Use** `EndMission` / `RetreatMission` / `SurrenderMission` to finish a fight — pick the one that matches the intent.
- **Do not** reach into `Campaign.Current` from mission code to write map state; cross-layer writes either do nothing or desynchronise the map.
- **Do not** use anything taken from this mission after it ends.
- **Do not** walk `Agents` to find a target; use `GetClosestEnemyAgent` and the nearby queries.
- **Do not** mutate the agent collection while enumerating it.

## Members

Public members run past four hundred, so they are grouped by role. The groups below cover the entry points a mod calls; they are not an enumeration of the whole surface.

### Global entry and lifecycle

| Member | What it is for |
| --- | --- |
| `public static Mission Current` | The active mission. **Null once the mission ends.** The combat layer's only global entry point. |
| `Scene Scene { get; private set; }` | The 3D scene every entity and coordinate belongs to. |
| `public string SceneName` | The scene's name. |
| `public string SceneLevels` | The scene level string. |
| `public Mission.State CurrentState { get; private set; }` | `NewlyCreated`, `Initializing`, `Continuing`, `EndingNextFrame`, `Over`. **Stop writing to the world once it leaves `Continuing`.** |
| `public enum State` | The five states above. |
| `void Initialize()` / `void ResetMission()` | Initialise, or reset for reuse. Engine-driven. |
| `void EndMission()` | End the mission normally. |
| `void RetreatMission()` | End it as a retreat. |
| `void SurrenderMission()` | End it as a surrender. |
| `bool MissionIsEnding { get; private set; }` | Whether the end sequence has started. **All world writes should stop.** |
| `bool IsDeploymentFinished { get; private set; }` | Whether deployment is over and the fight has begun. |
| `bool NeedsMemoryCleanup { get; private set; }` | Whether the mission asked for a cleanup pass at the end. |
| `float FixedDeltaTime { get; set; }` | The constant physics step. The time base for combat logic. |
| `bool FixedDeltaTimeMode { get; set; }` | Whether fixed-step timing is in use. **A flag, not an enum.** |
| `float CurrentTime` | Elapsed mission time. |
| `float GetAverageFps()` | Average frame rate. Diagnostics. |
| `public bool IsFinalized` | Whether teardown has completed. |
| `public bool IsFriendlyMission` | Whether this is a non-combat mission. |

### Teams and sides

| Member | What it is for |
| --- | --- |
| `Mission.TeamCollection Teams { get; private set; }` | The team collection, a `TeamCollection` deriving from `List<Team>`. |
| `public BattleSideEnum RetreatSide { get; private set; } = BattleSideEnum.None` | Which side is retreating. |
| `Team SpectatorTeam { get; set; }` | The spectator team. |
| `int GetMemberCountOfSide(BattleSideEnum side)` | Head count for one side. |
| `bool CanAgentRout(Agent agent)` | Whether that agent is able to rout. |
| `void JoinEnemyTeam()` | Join the enemy team. Changes team relationships — use it from event-driven code only. |
| `public sealed class TeamCollection : List<Team>` | The nested collection type behind `Teams`. |

### Agents

| Member | What it is for |
| --- | --- |
| `AgentReadOnlyList Agents` | The agents in play. **A live view**: copy before iterating if the loop can change it. |
| `AgentReadOnlyList AllAgents` | The wider agent set. |
| `Agent MainAgent` | The player-controlled agent. On a multiplayer client this can be a proxy. |
| `Agent MainAgentServer { get; set; }` | The authoritative player agent. Use it for decisions and damage. |
| `Agent GetClosestEnemyAgent(Team team, Vec3 position, float radius)` | The nearest enemy to a position within a radius, from a team's point of view. **There is no single-argument overload.** |
| `Agent GetClosestAllyAgent(Team team, Vec3 position, float radius)` | The same for allies. |
| `MBList<Agent> GetNearbyEnemyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` | Fills a caller-supplied list with nearby enemies. **Pass a reused `MBList<Agent>` to avoid per-frame allocation.** |
| `MBList<Agent> GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` | The same for allies. |
| `int GetNearbyAllyAgentsCount(Vec2 center, float radius, Team team)` | Count without filling a list. |
| `bool HasAnyAgentsOfSideInRange(Vec3 origin, float radius, BattleSideEnum side)` | Existence check, no allocation. |

### Spawning and cleanup

| Member | What it is for |
| --- | --- |
| `Agent SpawnAgent(AgentBuildData agentBuildData, bool spawnFromAgentVisuals = false)` | Spawn one agent from build data. |
| `Agent SpawnMonster(ItemRosterElement rosterElement, ItemRosterElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)` | Spawn a beast from roster elements. |
| `Agent SpawnMonster(EquipmentElement equipmentElement, EquipmentElement harnessRosterElement, in Vec3 initialPosition, in Vec2 initialDirection, int forcedAgentIndex = -1)` | Spawn a beast from equipment elements. |
| `Agent SpawnTroop(IAgentOriginBase troopOrigin, bool isPlayerSide, bool hasFormation, bool spawnWithHorse, bool isReinforcement, int formationTroopCount, int formationTroopIndex, bool isAlarmed, bool wieldInitialWeapons, Vec3? initialPosition, Vec2? initialDirection, string specialActionSetSuffix = null, ItemObject bannerItem = null, FormationClass formationIndex = FormationClass.NumberOfAllFormations, bool useTroopClassForSpawn = false)` | Spawn a formation's worth of troops. |
| `void SetInitialAgentCountForSide(BattleSideEnum side, int agentCount)` | Sets how many agents a side starts with. Call it from the `OpenNew` handler. |
| `MissionObject CreateMissionObjectFromPrefab(string prefab, MatrixFrame frame, bool hasCustomRestOffset, float restOffset, Action<GameEntity> actionAppliedBeforeScriptInitialization)` | Creates a scene object from a prefab. **Returns `MissionObject`**, the descriptor, not the `GameEntity`. |
| `int GetFreeRuntimeMissionObjectId()` / `int GetFreeSceneMissionObjectId()` | Free ids for dynamically created and scene-sourced objects. |
| `void RemoveSpawnedItemsAndMissiles()` | Clears spawned objects. **Use it when tearing down**, or objects survive into a reused scene. |
| `void KillAgentsOnEntity(GameEntity entity, Agent destroyerAgent, bool burnAgents)` | Kill everyone standing on an entity. |
| `void KillAgentCheat(Agent agent)` | Force-kill an agent, cheat path. |
| `void ClearMissiles()` / `void ClearAgentActions()` | Clear projectiles, or every agent action. |
| `void ClearCorpses(bool isMissionReset)` | Clear corpses; the flag distinguishes a reset. |
| `void ClearUnreferencedResources(bool forceClearGPUResources)` | Release resources nothing references. Teardown helper. |

### Terrain, boundaries and navigation

| Member | What it is for |
| --- | --- |
| `Mission.MBBoundaryCollection Boundaries { get; private set; }` | The combat boundary collection. |
| `bool IsPositionInsideBoundaries(Vec2 position)` | Whether a point is inside the playable area. **Takes `Vec2`.** |
| `bool IsPositionInsideHardBoundaries(Vec2 position)` | The stricter boundary test. |
| `bool IsPositionInsideAnyBlockerNavMeshFace2D(Vec2 position)` | Whether the point lands on a blocking navigation face — a wall or obstacle. |
| `float GetWaterLevelAtPosition(Vec2 position, bool useWaterRenderer)` | Water height at a point, for shallow/deep checks. |
| `float GetWaterLevelAtPositionMT(Vec2 position, bool useWaterRenderer)` | The multithreaded variant. |
| `bool GetPathBetweenPositions(ref NavigationData navData)` | Navigation query against a caller-supplied `NavigationData`. **The result reflects this frame's navigation state.** |
| `bool IsFormationUnitPositionAvailable(ref WorldPosition unitPosition, Team team)` | Whether a formation slot is free. Check before spawning. |
| `bool IsFormationUnitPositionAvailableMT(ref WorldPosition formationPosition, ref WorldPosition unitPosition, ref WorldPosition nearestAvailableUnitPosition, float manhattanDistance, Team team)` | The multithreaded variant, returning a nearest fallback. |
| `bool IsOrderPositionAvailable(in WorldPosition orderPosition, Team team)` | Whether an order can be issued from that position. |
| `void SetNavigationFaceCostWithIdAroundPosition(int navigationFaceId, Vec3 position, float cost)` | Raises the pathing cost near a point. **This is not local** — it changes pathing for the AI and the player alike. |

### Behaviour, logic and containers

| Member | What it is for |
| --- | --- |
| `void AddMissionBehavior(MissionBehavior missionBehavior)` | **The combat extension point.** The engine then drives your callbacks and keeps the instance in `MissionBehaviors`. |
| `void RemoveMissionBehavior(MissionBehavior missionBehavior)` | Remove one. Returns nothing. |
| `List<MissionBehavior> MissionBehaviors { get; }` | The registered behaviours. |
| `List<MissionLogic> MissionLogics { get; }` | The mission logic objects. |
| `public void SetMissionMode(MissionMode newMode, bool atStart)` | Switches the play mode. `atStart` marks it as the initial mode. |
| `public MissionMode Mode` | The current play mode. |

### Camera and presentation

| Member | What it is for |
| --- | --- |
| `void ResetFirstThirdPersonView()` | Restores the first/third person view. **Call it when tearing down**, or the next mission inherits your camera. |
| `void SetCustomCameraLocalOffset(Vec3 newCameraOffset)` / `SetCustomCameraLocalOffset2(Vec3 newCameraOffset)` | Camera and target offsets, two variants. |
| `void SetCustomCameraTargetLocalOffset(Vec3 newTargetLocalOffset)` | Target offset. |
| `void SetCustomCameraGlobalOffset(Vec3 newCameraOffset)` | Global offset. |
| `void SetCustomCameraLocalRotationalOffset(Vec3 newCameraRotationalOffset)` | Rotational offset. |
| `void SetCustomCameraFovMultiplier(float newFovMultiplier)` / `SetCustomCameraFixedDistance(float distance)` / `SetCustomCameraIgnoreCollision(bool ignoreCollision)` | Field of view, fixed distance, wall clipping. |
| `public bool CustomCameraIgnoreCollision { get; private set; }` | The current wall-clipping state. |
| `void ForceDisableOcclusion(bool value)` | Turn occlusion off. Debugging visibility. |
| `void SetListenerAndAttenuationPosBlendFactor(float factor)` | Audio listener blending. |
| `void MakeSound(int soundIndex, Vec3 position, bool soundCanBePredicted, bool isReliable, int relatedAgent1, int relatedAgent2)` | Play a sound. |
| `void MakeSoundOnlyOnRelatedPeer(int soundIndex, Vec3 position, int relatedAgent)` | Play a sound for one peer only. |

### Time control and replay

| Member | What it is for |
| --- | --- |
| `void AddTimeSpeedRequest(Mission.TimeSpeedRequest request)` | Request a time-speed change. **Counted** — pair it with a removal. |
| `void RemoveTimeSpeedRequest(int timeSpeedRequestID)` | Give the request back. |
| `public struct TimeSpeedRequest` | The nested request type. |
| `void SkipForwardMissionReplay(float startTime, float endTime)` | Skip ahead during replay playback. |

## Examples

### Example 1: Register a behaviour instead of polling

Combat logic belongs on a behaviour; the target query goes through the mission's own lookup.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyThreatBehavior : MissionBehavior
{
    private float _elapsed;

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        // Mission is injected by the engine at registration
        Mission mission = Mission;
        if (mission == null)
        {
            return;
        }

        if (!mission.IsDeploymentFinished)
        {
            return;
        }

        _elapsed += dt;
        if (_elapsed < 0.5f)
        {
            return;
        }

        _elapsed = 0f;

        Agent player = Agent.MainAgent;
        if (player == null || player.Team == null)
        {
            return;
        }

        // Team, position and radius — this is the shape of the query
        Agent nearestEnemy = mission.GetClosestEnemyAgent(player.Team, player.Position, 30f);
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
    {
        // The agent collections are mid-change here — do not enumerate them
    }
}
```

### Example 2: Terrain and placement queries

All of these take a `Vec2` projection of the world position.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static bool IsStandingRoom(Mission mission, Agent agent, out Vec3 position)
{
    position = default(Vec3);

    if (mission == null || agent == null)
    {
        return false;
    }

    Vec3 world = agent.Position;
    Vec2 flat = new Vec2(world.x, world.y);

    bool inBounds = mission.IsPositionInsideBoundaries(flat);
    bool againstWall = mission.IsPositionInsideAnyBlockerNavMeshFace2D(flat);
    float waterLevel = mission.GetWaterLevelAtPosition(flat, false);

    if (!inBounds || againstWall || world.z < waterLevel)
    {
        return false;
    }

    position = world;
    return true;
}
```

### Example 3: Tear down camera and spawned objects

Both of these leak into the next mission if you skip them, because scenes get reused.

```csharp
using TaleWorlds.MountAndBlade;

public class MyCleanupBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    protected override void OnEndMission()
    {
        base.OnEndMission();

        Mission mission = Mission;
        if (mission == null)
        {
            return;
        }

        // Otherwise the next mission inherits this camera
        mission.ResetFirstThirdPersonView();

        // Otherwise spawned objects survive into a reused scene
        mission.RemoveSpawnedItemsAndMissiles();
    }
}
```

## Risks and Boundaries

- **Everything dies with the mission.** After `EndMission`, `Mission.Current` is null and every agent, missile, entity and team taken from this mission is unusable. Any cross-mission cache becomes a dangling reference.
- **`MissionIsEnding` stops writes.** Once the end sequence starts, `SpawnAgent`, kills and camera changes are ineffective or throwing.
- **Iterating `Agents` while agents die throws.** Removal happens mid-`foreach`, producing `InvalidOperationException`. Copy the list first.
- **Path results do not cross frames.** `GetPathBetweenPositions` reflects the navigation state at the moment of the call.
- **Time speed is counted.** An `AddTimeSpeedRequest` without its matching removal leaves the battle permanently slowed.
- **The camera is a shared resource.** Two systems setting it at once shows up as jitter. Restore it when you tear down.
- **`SetNavigationFaceCostWithIdAroundPosition` is global.** It changes pathing for the AI and the player together; it is not a local obstacle.
- **`CreateMissionObjectFromPrefab` returns `MissionObject`,** the descriptor. `Mission.MissionNetworkHelper.GetMissionObjectFromMissionObjectId(MissionObjectId)` is the static lookup that hands an object back — and it throws if `Mission.Current` is null.
- **Multiplayer differs.** `MainAgent` can be a proxy on a client; `MainAgentServer` is authoritative. Decision and damage logic belongs server-side.
- **Single-threaded with native interop.** `Mission` derives from `DotNetObject`, so coordinates, frames and navigation pass into native code. Main thread, scene loaded.

## Dependencies

- **Upstream / providers**
  - [MissionState](../MissionState) creates this class through `OpenNew` and destroys it at the end.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` fire while the mission is being set up.
- **Peers / downstream**
  - [Agent](../Agent) is the operable unit the mission spawns and manages.
  - [MissionBehavior](../MissionBehavior) is the extension point registered with `AddMissionBehavior`.
  - [Campaign](../../campaign/Campaign) reaches missions through `CampaignMissionManager`.
  - [ScreenManager](../../gui/ScreenManager) and [ScreenBase](../../gui/ScreenBase) manage screens that can appear during a mission.

## See Also

- ↑ Parent: [mission index](../)
- ↔ Related: [MissionState](../MissionState) · [MissionBehavior](../MissionBehavior) · [Agent](../Agent) · [Campaign](../../campaign/Campaign) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Chinese twin](../../../../zh/api/mission/Mission)