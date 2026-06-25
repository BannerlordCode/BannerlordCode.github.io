---
title: "Mission"
description: "The global entry point for a running battle or scene: current mission, state, teams, agents, and mission objects."
---
# Mission

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public class Mission : ISceneStateHolder`  
**Base:** —  
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`Mission` represents a **running battle or scene instance** in Bannerlord: field battles, arena matches, siege battles, tavern scenes, hideout raids, and map encounter fights are all Missions. It is responsible for:

- Maintaining the current scene (`Scene`) and runtime state (`Mission.State`).
- Managing `Agent` instances (soldiers, player character, horses, etc.).
- Managing `Team` and `Formation` instances.
- Tracking `MissionObject` instances (siege engines, doors, flags, triggers, etc.).
- Providing global access through `Mission.Current`.

If `Campaign` is the “world object” of the campaign map, `Mission` is the world object of the combat/scene layer.

## Mental Model

Think of `Mission` as the **current scene sandbox controller**:

- Do not `new Mission()` yourself; the engine creates a Mission when a scene is loaded. Access it through `Mission.Current`.
- If `Mission.Current == null`, you are not currently in any scene or battle.
- It is a **real-time singleton for the active scene**: switching scenes (campaign map → battle → back) creates a new Mission instance.
- Modifying Mission behavior is usually done through `MissionBehavior` subclasses; direct `Mission` manipulation is good for reading state or triggering immediate effects (spawning agents, changing weather, ending the mission, etc.).

## How to Access Mission

```csharp
Mission mission = Mission.Current;
if (mission == null) return;

// Common accesses
Agent mainAgent = mission.MainAgent;
List<Agent> agents = mission.Agents.ToList();
Team playerTeam = mission.PlayerTeam;
MissionObject missionObject = mission.GetMissionBehavior<MyMissionBehavior>();
```

## Core Properties

| Property | Type | Description |
|----------|------|-------------|
| `Mission.Current` | `Mission` | Active scene instance. |
| `MainAgent` | `Agent` | Player-controlled agent (first/third-person character). |
| `PlayerTeam` | `Team` | Team the player belongs to. |
| `Teams` | `MBList<Team>` | All teams in the current Mission. |
| `Agents` | `MBList<Agent>` | All agents. |
| `MissionObjects` | `IEnumerable<MissionObject>` | All MissionObjects. |
| `CurrentState` | `Mission.State` | Current state: `Playing`, `Over`, `Ending`, etc. |
| `Scene` | `Scene` | Underlying scene object; used for effects, terrain queries, etc. |
| `CurrentTime` | `float` | Seconds elapsed since Mission start. |
| `Mode` | `MissionMode` | Mission mode: battle, arena, conversation, stealth, etc. |

## Key Methods

### `public static Mission Current { get; }`
Global access point. Inside a `MissionBehavior`, the first check is usually `Mission.Current != null`.

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.MainAgent != null)
{
    mission.MainAgent.Health += 10f;
}
```

### `public T GetMissionBehavior<T>() where T : MissionBehavior`
Get a `MissionBehavior` attached to the current Mission by type.

```csharp
var myBehavior = Mission.Current.GetMissionBehavior<MyMissionBehavior>();
myBehavior?.TriggerSpecialEvent();
```

### `public Agent SpawnAgent(IAgentOriginBase agentOrigin, ...)`
Spawn an agent in the scene. Common for spawning troops, reinforcements, or special units.

```csharp
Agent agent = Mission.Current.SpawnAgent(
    new PartyAgentOrigin(Clan.PlayerClan.Party, characterObject),
    isPlayerSide: true,
    hasMount: false);
```

### `public void EndMission()` / `public void EndMissionAsVictorious()` / `public void EndMissionAsDefeated()`
End the current Mission early. Useful after custom objectives are met.

```csharp
public void OnBossKilled()
{
    Mission.Current.EndMissionAsVictorious();
}
```

### `public void AddMissionObject(MissionObject missionObject)`
Add a MissionObject to the scene.

```csharp
var flag = new MyCustomFlag();
Mission.Current.AddMissionObject(flag);
```

### `public Team GetTeam(TeamSideEnum teamSide)`
Get a team by side.

```csharp
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);
```

## Typical Usage Examples

### Example 1: Check the player agent each frame

```csharp
public override void OnMissionTick(float dt)
{
    base.OnMissionTick(dt);

    Agent main = Mission.Current?.MainAgent;
    if (main == null || !main.IsActive()) return;

    if (main.Health < main.HealthLimit * 0.25f)
    {
        // player is low health; trigger some effect
    }
}
```

### Example 2: Spawn a squad from a custom MissionBehavior

```csharp
public class MySpawnBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public void SpawnReinforcements()
    {
        CharacterObject troop = MBObjectManager.Instance.GetObject<CharacterObject>("imperial_recruit");
        for (int i = 0; i < 5; i++)
        {
            Agent agent = Mission.Current.SpawnAgent(
                new PartyAgentOrigin(Clan.PlayerClan.Party, troop),
                isPlayerSide: true,
                hasMount: false);
        }
    }
}
```

### Example 3: Get all enemy agents

```csharp
var enemies = Mission.Current.Agents
    .Where(a => a.IsActive() && a.Team.Side != Mission.Current.PlayerTeam.Side)
    .ToList();
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5: `Mission.Current` and the core API remain stable; v1.4.5 split some network-sync logic into `MissionNetworkHelper`.
- Cross-version tip: access through `Mission.Current` and avoid constructing `Mission` directly or relying on internal fields.

## See Also

- [MissionBehavior](../MissionBehavior/) — customize Mission lifecycle and events
- [Agent](../Agent/) — an individual unit on the battlefield
- [Team](../Team/) — teams and sides
- [Formation](../Formation/) — formation system
- [MissionObject](../../mission-ext/MissionObject/) — scene objects and interactables
