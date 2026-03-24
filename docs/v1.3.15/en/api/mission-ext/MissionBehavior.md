# MissionBehavior

## Class Overview

| Item | Description |
|------|-------------|
| **Namespace** | TaleWorlds.MountAndBlade |
| **File Path** | TaleWorlds.MountAndBlade/MissionBehavior.cs |
| **Interface** | IMissionBehavior |
| **Type** | Abstract class |

## Description

`MissionBehavior` is the base class for the mission extension system. All mission-related behaviors should inherit from this class. The system calls corresponding virtual methods, allowing you to intercept at different stages of the mission.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Mission | Mission | Parent mission instance |
| DebugInput | IInputContext | Debug input context |
| BehaviorType | MissionBehaviorType | Behavior type (abstract property) |

## Key Methods

### Lifecycle Methods

| Method | Description |
|--------|-------------|
| OnAfterMissionCreated() | After mission is created |
| OnBehaviorInitialize() | Behavior initialization |
| OnCreated() | On creation |
| EarlyStart() | Early start |
| AfterStart() | After start |

### Agent Methods

| Method | Description |
|--------|-------------|
| OnAgentCreated(Agent agent) | When Agent is created |
| OnAgentBuild(Agent agent, Banner banner) | When Agent is built |
| OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent) | When Agent team changes |
| OnAgentControllerSetToPlayer(Agent agent) | When Agent controller is set to player |
| OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData) | When Agent is hit |
| OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow) | When Agent is removed |
| OnAgentFleeing(Agent affectedAgent) | When Agent is fleeing |
| OnAgentPanicked(Agent affectedAgent) | When Agent is panicked |
| OnAgentMount(Agent agent) | When Agent mounts |
| OnAgentDismount(Agent agent) | When Agent dismounts |

### Mission Phase Methods

| Method | Description |
|--------|-------------|
| OnMissionTick(float dt) | Per frame update |
| OnPreMissionTick(float dt) | Before frame update |
| OnFixedMissionTick(float fixedDt) | Fixed time update |
| OnClearScene() | When scene is cleared |
| OnEndMission() | When mission ends |

### Combat Methods

| Method | Description |
|--------|-------------|
| OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData) | On melee hit |
| OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData) | On missile hit |
| OnMissileCollisionReaction(...) | Missile collision reaction |
| OnScoreHit(...) | On scoring |

### Team Methods

| Method | Description |
|--------|-------------|
| OnAddTeam(Team team) | When team is added |
| AfterAddTeam(Team team) | After team is added |
| OnTeamDeployed(Team team) | When team is deployed |
| OnBattleSideDeployed(BattleSideEnum side) | When battle side is deployed |

## Usage Example

```csharp
// Create custom mission behavior
public class MyMissionBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentCreated(Agent agent)
    {
        // Custom logic when Agent is created
    }

    public override void OnMissionTick(float dt)
    {
        // Per frame update logic
    }

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, 
        AgentState agentState, KillingBlow blow)
    {
        // Logic when Agent is removed
    }
}

// Register behavior
mission.AddBehavior(new MyMissionBehavior());
```
