---
title: "MissionBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionBehavior`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/MissionBehavior](/versions/MissionBehavior)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `after mission created` event is raised.

### OnBehaviorInitialize
`public virtual void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnCreated
`public virtual void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### EarlyStart
`public virtual void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### AfterStart
`public virtual void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissileHit
`public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Called when the `missile hit` event is raised.

### OnMeleeHit
`public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Called when the `melee hit` event is raised.

### OnMissileCollisionReaction
`public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)`

**Purpose:** Called when the `missile collision reaction` event is raised.

### OnMissionScreenPreLoad
`public virtual void OnMissionScreenPreLoad()`

**Purpose:** Called when the `mission screen pre load` event is raised.

### OnAgentCreated
`public virtual void OnAgentCreated(Agent agent)`

**Purpose:** Called when the `agent created` event is raised.

### OnAgentBuild
`public virtual void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentTeamChanged
`public virtual void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Called when the `agent team changed` event is raised.

### OnAgentControllerSetToPlayer
`public virtual void OnAgentControllerSetToPlayer(Agent agent)`

**Purpose:** Called when the `agent controller set to player` event is raised.

### OnAgentHit
`public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### OnScoreHit
`public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### OnEarlyAgentRemoved
`public virtual void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `early agent removed` event is raised.

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentDeleted
`public virtual void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Called when the `agent deleted` event is raised.

### OnAgentFleeing
`public virtual void OnAgentFleeing(Agent affectedAgent)`

**Purpose:** Called when the `agent fleeing` event is raised.

### OnAgentPanicked
`public virtual void OnAgentPanicked(Agent affectedAgent)`

**Purpose:** Called when the `agent panicked` event is raised.

### OnFocusGained
`public virtual void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Called when the `focus gained` event is raised.

### OnFocusLost
`public virtual void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Called when the `focus lost` event is raised.

### OnAddTeam
`public virtual void OnAddTeam(Team team)`

**Purpose:** Called when the `add team` event is raised.

### AfterAddTeam
`public virtual void AfterAddTeam(Team team)`

**Purpose:** Handles logic related to `after add team`.

### OnAgentInteraction
`public virtual void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### OnClearScene
`public virtual void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnEndMissionInternal
`public virtual void OnEndMissionInternal()`

**Purpose:** Called when the `end mission internal` event is raised.

### OnRemoveBehavior
`public virtual void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnFixedMissionTick
`public virtual void OnFixedMissionTick(float fixedDt)`

**Purpose:** Called when the `fixed mission tick` event is raised.

### OnPreMissionTick
`public virtual void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OnPreDisplayMissionTick
`public virtual void OnPreDisplayMissionTick(float dt)`

**Purpose:** Called when the `pre display mission tick` event is raised.

### OnMissionTick
`public virtual void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnAgentMount
`public virtual void OnAgentMount(Agent agent)`

**Purpose:** Called when the `agent mount` event is raised.

### OnAgentDismount
`public virtual void OnAgentDismount(Agent agent)`

**Purpose:** Called when the `agent dismount` event is raised.

### IsThereAgentAction
`public virtual bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

### OnEntityRemoved
`public virtual void OnEntityRemoved(GameEntity entity)`

**Purpose:** Called when the `entity removed` event is raised.

### OnObjectUsed
`public virtual void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

### OnObjectStoppedBeingUsed
`public virtual void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object stopped being used` event is raised.

### OnRenderingStarted
`public virtual void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### OnMissionStateActivated
`public virtual void OnMissionStateActivated()`

**Purpose:** Called when the `mission state activated` event is raised.

### OnMissionStateFinalized
`public virtual void OnMissionStateFinalized()`

**Purpose:** Called when the `mission state finalized` event is raised.

### OnMissionStateDeactivated
`public virtual void OnMissionStateDeactivated()`

**Purpose:** Called when the `mission state deactivated` event is raised.

### GetCompassTargets
`public virtual List<CompassItemUpdateParams> GetCompassTargets()`

**Purpose:** Gets the current value of `compass targets`.

### OnAssignPlayerAsSergeantOfFormation
`public virtual void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**Purpose:** Called when the `assign player as sergeant of formation` event is raised.

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### OnAfterDeploymentFinished
`public virtual void OnAfterDeploymentFinished()`

**Purpose:** Called when the `after deployment finished` event is raised.

### OnTeamDeployed
`public virtual void OnTeamDeployed(Team team)`

**Purpose:** Called when the `team deployed` event is raised.

### OnBattleSideDeployed
`public virtual void OnBattleSideDeployed(BattleSideEnum side)`

**Purpose:** Called when the `battle side deployed` event is raised.

### OnAgentAlarmedStateChanged
`public virtual void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**Purpose:** Called when the `agent alarmed state changed` event is raised.

### OnMissionModeChange
`public virtual void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Called when the `mission mode change` event is raised.

### OnRegisterBlow
`public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)`

**Purpose:** Called when the `register blow` event is raised.

### OnAgentShootMissile
`public virtual void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**Purpose:** Called when the `agent shoot missile` event is raised.

### OnMissileRemoved
`public virtual void OnMissileRemoved(int MissileIndex)`

**Purpose:** Called when the `missile removed` event is raised.

## Usage Example

```csharp
var implementation = new CustomMissionBehavior();
```

## See Also

- [Complete Class Catalog](../catalog)