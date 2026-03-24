# Mission Class

**Namespace**: TaleWorlds.MountAndBlade  
**File**: `TaleWorlds.MountAndBlade/Mission.cs` (~323,000 lines)  
**Purpose**: Core class for the battle/gameplay loop. Manages all entities, logic, and behaviors during a mission (battle).

## Overview

`Mission` is one of the most essential classes in Bannerlord modding. It represents a single battle instance and contains:
- Agent spawning and management (all units)
- Team creation and queries
- Formation control
- Physics simulation and collision
- MissionLogic and MissionBehavior execution

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Current` | `Mission` | The currently active mission instance |
| `MissionBehaviors` | `List` | List of all mission behaviors |
| `MissionLogics` | `List` | List of all mission logics |
| `Teams` | `TeamCollection` | Collection of all teams |
| `CurrentState` | `Mission.State` | Current mission state |
| `MissionResult` | `MissionResult` | Mission outcome (battle victory/defeat) |
| `MissionTimeTracker` | `MissionTimeTracker` | Mission time tracker |

## Key Methods

### Agent Management

| Method | Description |
|--------|-------------|
| `SpawnAgent(AgentBuildData)` | Spawn an Agent using AgentBuildData |
| `SpawnTroop(...)` | Spawn a troop with position, direction, formation |
| `SpawnMonster(...)` | Spawn a monster |
| `FindAgentWithIndex(int)` | Find an Agent by index |
| `GetAgentFromIndex(int)` | Static method to get Agent by index |
| `GetClosestEnemyAgent(Team, Vec3, float)` | Get nearest enemy Agent |
| `GetClosestAllyAgent(Team, Vec3, float)` | Get nearest ally Agent |
| `GetNearbyAllyAgents(Vec2, float, Team)` | Get ally Agents within range |
| `GetNearbyEnemyAgents(Vec2, float, Team)` | Get enemy Agents within range |
| `GetNearbyAgents(Vec2, float)` | Get all Agents within range |
| `RayCastForClosestAgent(...)` | Raycast to find closest Agent |
| `KillAgentCheat(Agent)` | Kill an Agent (dev command) |
| `ReplaceBotWithPlayer(Agent, MissionPeer)` | Replace a Bot with player control |

### Team Management

| Method | Description |
|--------|-------------|
| `GetTeam(TeamSideEnum)` | Get team by side |
| `GetTeamsOfSide(BattleSideEnum)` | Get all teams on a side |
| `GetAgentTeam(IAgentOriginBase, bool)` | Static method to get Agent's team |
| `GetMBTeamFromTeamIndex(int)` | Get MBTeam by index |

### Mission State Control

| Method | Description |
|--------|-------------|
| `EndMission()` | End the current mission |
| `PauseMission()` | Pause the mission |
| `ResumeMission()` | Resume the mission |

### Event Triggers

| Method | Description |
|--------|-------------|
| `OnAgentMount(Agent)` | Called when Agent mounts |
| `OnAgentDismount(Agent)` | Called when Agent dismounts |
| `OnAgentFleeing(Agent)` | Called when Agent starts fleeing |
| `OnAgentPanicked(Agent)` | Called when Agent panics |
| `OnAgentInteraction(Agent, Agent, sbyte)` | Called on Agent interaction |
| `ClearAgentActions()` | Clear all Agent's current actions |

## Important Events/Callbacks (override in MissionBehavior)

### Mission Lifecycle

| Callback | Description |
|----------|-------------|
| `OnAfterMissionCreated()` | Called after mission is created |
| `OnBehaviorInitialize()` | Called when behavior initializes |
| `EarlyStart()` | Called during early startup |
| `AfterStart()` | Called after startup completes |
| `OnMissionTick(float dt)` | Called every frame for game logic |
| `OnPreMissionTick(float dt)` | Called every frame before physics update |
| `OnFixedMissionTick(float dt)` | Called at fixed time intervals |
| `OnEndMission()` | Called when mission ends |

### Agent Events

| Callback | Description |
|----------|-------------|
| `OnAgentCreated(Agent)` | When an Agent is created |
| `OnAgentBuild(Agent, Banner)` | When Agent build completes |
| `OnAgentTeamChanged(Team, Team, Agent)` | When Agent changes team |
| `OnAgentHit(Agent, Agent, ...)` | When Agent takes damage |
| `OnMeleeHit(Agent, Agent, ...)` | On melee hit |
| `OnMissileHit(Agent, Agent, ...)` | On missile hit |
| `OnAgentRemoved(Agent, Agent, ...)` | When Agent is removed |
| `OnAgentFleeing(Agent)` | When Agent flees |
| `OnAgentPanicked(Agent)` | When Agent panics |

### Combat Related

| Callback | Description |
|----------|-------------|
| `OnScoreHit(Agent, ...)` | After damage calculation (score hit) |
| `OnAgentMount(Agent)` | On mount |
| `OnAgentDismount(Agent)` | On dismount |
| `OnMissileCollisionReaction(...)` | On missile collision |

## Common Usage

### 1. Adding Custom MissionBehavior in Mod

```csharp
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MyMissionBehavior : MissionLogic
    {
        public override void OnMissionTick(float dt)
        {
            // Logic executed every frame
        }
        
        public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, 
            in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
        {
            // Handle Agent damage events
        }
    }
}
```

### 2. Adding Custom Behavior to Mission

```csharp
// In MBSubModule
public override void OnMissionStart(string missionName, MissionInitializerRecord missionInitializerRecord)
{
    // Add custom behavior through Mission
}

// Or add after mission starts via reflection
var mission = Mission.Current;
var myBehavior = new MyMissionBehavior();
mission.AddBehavior(myBehavior);
```

### 3. Finding and Operating on Agents

```csharp
// Get player Agent
Agent mainAgent = Mission.Current.MainAgent;

// Find specific Agent
Agent agent = Mission.Current.FindAgentWithIndex(agentIndex);

// Iterate all Agents in all teams
foreach (Team team in Mission.Current.Teams)
{
    foreach (Agent agent in team.TeamAgents)
    {
        // Process each Agent
    }
}

// Get enemies in range
List<Agent> enemies = Mission.Current.GetNearbyEnemyAgents(
    agent.Position.AsVec2, 
    50f, 
    agent.Team
);
```

### 4. Creating Custom Agents

```csharp
// Use AgentBuildData to construct Agent
AgentBuildData agentBuildData = new AgentBuildData(characterObject);
agentBuildData.InitFrame(initialPosition, initialDirection);
agentBuildData.Team(team);
agentBuildData.Controller(Agent.ControllerType.Create);

Agent spawnedAgent = Mission.Current.SpawnAgent(agentBuildData);
```

### 5. Teams and Sides

```csharp
// Get attacker and defender
Team attackerTeam = Mission.Current.GetTeam(TeamSideEnum.Attacker);
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);

// Iterate all Agents in a team
foreach (Agent agent in myTeam.TeamAgents)
{
    // Process
}

// Set team relations
team.SetIsEnemyOf(otherTeam, true); // Set as enemy
```

## MissionState Class

**File**: `TaleWorlds.MountAndBlade/MissionState.cs`

`MissionState` is the GameState that manages `Mission`. It handles:
- Mission loading and initialization
- Mission tick loop
- Mission state transitions

### Key Properties

| Property | Description |
|----------|-------------|
| `Current` | Current active MissionState |
| `CurrentMission` | Current Mission instance |
| `MissionName` | Current mission name |

### Key Methods

| Method | Description |
|--------|-------------|
| `OpenNew(string, MissionInitializerRecord, InitializeMissionBehaviorsDelegate, bool, bool)` | Create and open a new mission |

## MissionLogic Class

**File**: `TaleWorlds.MountAndBlade/MissionLogic.cs`

`MissionLogic` inherits from `MissionBehavior` and is the base class for mission logic.

### Key Virtual Methods

| Method | Description |
|--------|-------------|
| `MissionEnded(ref MissionResult)` | Return true to end the battle |
| `OnBattleEnded()` | Called after battle ends |
| `OnRetreatMission()` | Called on retreat |
| `OnSurrenderMission()` | Called on surrender |
| `OnMissionResultReady(MissionResult)` | When mission result is ready |

## Important Enums

### Mission.State

| Value | Description |
|-------|-------------|
| `NewlyCreated` | Newly created |
| `Initializing` | Initializing |
| `Continuing` | Continuing/Running |
| `MissionEnded` | Mission ended |
| `Over` | Fully over |

### BattleSideEnum

| Value | Description |
|-------|-------------|
| `Defender` | Defending side |
| `Attacker` | Attacking side |

### TeamSideEnum

| Value | Description |
|-------|-------------|
| `Defender` | Defending side |
| `Attacker` | Attacking side |
| `None` | None |

## Notes

1. **Do not modify Mission.cs directly** - This file is massive; changes easily introduce bugs
2. **Use MissionBehavior/MissionLogic** - Extend mission functionality by adding custom behaviors
3. **Keep per-frame operations efficient** - `OnMissionTick` runs every frame; avoid heavy calculations
4. **Use caching** - Frequent queries should use cached collections like `TeamAgents`, `MissionLogics`
5. **Agent indices are unstable** - Agent indices can change during mission; do not store long-term
