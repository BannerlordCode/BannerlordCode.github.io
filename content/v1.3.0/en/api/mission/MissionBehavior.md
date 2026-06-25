---
title: "MissionBehavior"
description: "Auto-generated class reference for MissionBehavior."
---
# MissionBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBehavior : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`

## Overview

`MissionBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Mission` | `public Mission Mission { get; set; }` |
| `DebugInput` | `public IInputContext DebugInput { get; }` |
| `BehaviorType` | `public abstract MissionBehaviorType BehaviorType { get; }` |

## Key Methods

### OnAfterMissionCreated
`public virtual void OnAfterMissionCreated()`

**Purpose:** Invoked when the after mission created event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAfterMissionCreated();
```

### OnBehaviorInitialize
`public virtual void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnBehaviorInitialize();
```

### OnCreated
`public virtual void OnCreated()`

**Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnCreated();
```

### EarlyStart
`public virtual void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.EarlyStart();
```

### AfterStart
`public virtual void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.AfterStart();
```

### OnMissileHit
`public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Invoked when the missile hit event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissileHit(attacker, victim, false, collisionData);
```

### OnMeleeHit
`public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Invoked when the melee hit event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMeleeHit(attacker, victim, false, collisionData);
```

### OnMissileCollisionReaction
`public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)`

**Purpose:** Invoked when the missile collision reaction event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissileCollisionReaction(collisionReaction, attackerAgent, attachedAgent, 0);
```

### OnMissionScreenPreLoad
`public virtual void OnMissionScreenPreLoad()`

**Purpose:** Invoked when the mission screen pre load event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionScreenPreLoad();
```

### OnAgentCreated
`public virtual void OnAgentCreated(Agent agent)`

**Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentCreated(agent);
```

### OnAgentBuild
`public virtual void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public virtual void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnAgentControllerSetToPlayer
`public virtual void OnAgentControllerSetToPlayer(Agent agent)`

**Purpose:** Invoked when the agent controller set to player event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentControllerSetToPlayer(agent);
```

### OnAgentHit
`public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the agent hit event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnScoreHit
`public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnEarlyAgentRemoved
`public virtual void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the early agent removed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnEarlyAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentDeleted
`public virtual void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Invoked when the agent deleted event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentDeleted(affectedAgent);
```

### OnAgentFleeing
`public virtual void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Invoked when the agent fleeing event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentFleeing(affectedAgent);
```

### OnAgentPanicked
`public virtual void OnAgentPanicked(Agent affectedAgent)`

**Purpose:** Invoked when the agent panicked event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentPanicked(affectedAgent);
```

### OnFocusGained
`public virtual void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Invoked when the focus gained event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public virtual void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Invoked when the focus lost event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnFocusLost(agent, focusableObject);
```

### OnAddTeam
`public virtual void OnAddTeam(Team team)`

**Purpose:** Invoked when the add team event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAddTeam(team);
```

### AfterAddTeam
`public virtual void AfterAddTeam(Team team)`

**Purpose:** Executes the AfterAddTeam logic.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.AfterAddTeam(team);
```

### OnAgentInteraction
`public virtual void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentInteraction(userAgent, agent, 0);
```

### OnClearScene
`public virtual void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnClearScene();
```

### OnEndMissionInternal
`public virtual void OnEndMissionInternal()`

**Purpose:** Invoked when the end mission internal event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnEndMissionInternal();
```

### OnRemoveBehavior
`public virtual void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnRemoveBehavior();
```

### OnFixedMissionTick
`public virtual void OnFixedMissionTick(float fixedDt)`

**Purpose:** Invoked when the fixed mission tick event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnFixedMissionTick(0);
```

### OnPreMissionTick
`public virtual void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnPreMissionTick(0);
```

### OnPreDisplayMissionTick
`public virtual void OnPreDisplayMissionTick(float dt)`

**Purpose:** Invoked when the pre display mission tick event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnPreDisplayMissionTick(0);
```

### OnMissionTick
`public virtual void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionTick(0);
```

### OnAgentMount
`public virtual void OnAgentMount(Agent agent)`

**Purpose:** Invoked when the agent mount event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentMount(agent);
```

### OnAgentDismount
`public virtual void OnAgentDismount(Agent agent)`

**Purpose:** Invoked when the agent dismount event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentDismount(agent);
```

### IsThereAgentAction
`public virtual bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
var result = missionBehavior.IsThereAgentAction(userAgent, otherAgent);
```

### OnEntityRemoved
`public virtual void OnEntityRemoved(GameEntity entity)`

**Purpose:** Invoked when the entity removed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnEntityRemoved(entity);
```

### OnObjectUsed
`public virtual void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnObjectUsed(userAgent, usedObject);
```

### OnObjectStoppedBeingUsed
`public virtual void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the object stopped being used event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnObjectStoppedBeingUsed(userAgent, usedObject);
```

### OnRenderingStarted
`public virtual void OnRenderingStarted()`

**Purpose:** Invoked when the rendering started event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnRenderingStarted();
```

### OnMissionStateActivated
`public virtual void OnMissionStateActivated()`

**Purpose:** Invoked when the mission state activated event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionStateActivated();
```

### OnMissionStateFinalized
`public virtual void OnMissionStateFinalized()`

**Purpose:** Invoked when the mission state finalized event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionStateFinalized();
```

### OnMissionStateDeactivated
`public virtual void OnMissionStateDeactivated()`

**Purpose:** Invoked when the mission state deactivated event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionStateDeactivated();
```

### GetCompassTargets
`public virtual List<CompassItemUpdateParams> GetCompassTargets()`

**Purpose:** Reads and returns the compass targets value held by the this instance.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
var result = missionBehavior.GetCompassTargets();
```

### OnAssignPlayerAsSergeantOfFormation
`public virtual void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**Purpose:** Invoked when the assign player as sergeant of formation event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAssignPlayerAsSergeantOfFormation(agent);
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public virtual void OnAfterDeploymentFinished()`

**Purpose:** Invoked when the after deployment finished event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAfterDeploymentFinished();
```

### OnTeamDeployed
`public virtual void OnTeamDeployed(Team team)`

**Purpose:** Invoked when the team deployed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnTeamDeployed(team);
```

### OnBattleSideDeployed
`public virtual void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** Invoked when the battle side deployed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnBattleSideDeployed(side);
```

### OnAgentAlarmedStateChanged
`public virtual void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**Purpose:** Invoked when the agent alarmed state changed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentAlarmedStateChanged(agent, flag);
```

### OnMissionModeChange
`public virtual void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Invoked when the mission mode change event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionModeChange(oldMissionMode, false);
```

### OnRegisterBlow
`public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)`

**Purpose:** Invoked when the register blow event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnRegisterBlow(attacker, victim, realHitEntity, b, collisionData, attackerWeapon);
```

### OnAgentShootMissile
`public virtual void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**Purpose:** Invoked when the agent shoot missile event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentShootMissile(shooterAgent, weaponIndex, position, velocity, orientation, false, 0);
```

### OnMissileRemoved
`public virtual void OnMissileRemoved(int MissileIndex)`

**Purpose:** Invoked when the missile removed event is raised.

```csharp
// Obtain an instance of MissionBehavior from the subsystem API first
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissileRemoved(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionBehavior instance = ...;
```

## See Also

- [Area Index](../)