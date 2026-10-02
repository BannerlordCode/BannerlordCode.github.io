---
title: "MissionBehavior"
description: "Auto-generated class reference for MissionBehavior."
---
# MissionBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBehavior : IMissionBehavior `
**Base:** IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/MissionBehavior.cs

## Overview

Auto-generated stub for `MissionBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnAfterMissionCreated
`public virtual void OnAfterMissionCreated()`

### OnBehaviorInitialize
`public virtual void OnBehaviorInitialize()`

### OnCreated
`public virtual void OnCreated()`

### EarlyStart
`public virtual void EarlyStart()`

### AfterStart
`public virtual void AfterStart()`

### OnAfterMissionLoadingFinished
`public virtual void OnAfterMissionLoadingFinished()`

### OnMissileHit
`public virtual void OnMissileHit(Agent attacker,Agent victim,bool isCanceled,AttackCollisionData collisionData)`

### OnMeleeHit
`public virtual void OnMeleeHit(Agent attacker,Agent victim,bool isCanceled,AttackCollisionData collisionData)`

### OnMissileCollisionReaction
`public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction,Agent attackerAgent,Agent attachedAgent,sbyte attachedBoneIndex)`

### OnMissionScreenPreLoad
`public virtual void OnMissionScreenPreLoad()`

### OnAgentCreated
`public virtual void OnAgentCreated(Agent agent)`

### OnAgentBuild
`public virtual void OnAgentBuild(Agent agent,Banner banner)`

### OnAgentTeamChanged
`public virtual void OnAgentTeamChanged(Team prevTeam,Team newTeam,Agent agent)`

### OnAgentControllerSetToPlayer
`public virtual void OnAgentControllerSetToPlayer(Agent agent)`

### OnAgentHit
`public virtual void OnAgentHit(Agent affectedAgent,Agent affectorAgent,in MissionWeapon affectorWeapon,in Blow blow,in AttackCollisionData attackCollisionData)`

### OnScoreHit
`public virtual void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty)`

### OnEarlyAgentRemoved
`public virtual void OnEarlyAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

### OnAgentDeleted
`public virtual void OnAgentDeleted(Agent affectedAgent)`

### OnAgentFleeing
`public virtual void OnAgentFleeing(Agent affectedAgent)`

### OnAgentPanicked
`public virtual void OnAgentPanicked(Agent affectedAgent)`

### OnFocusGained
`public virtual void OnFocusGained(Agent agent,IFocusable focusableObject,bool isInteractable)`

### OnFocusLost
`public virtual void OnFocusLost(Agent agent,IFocusable focusableObject)`

### OnAddTeam
`public virtual void OnAddTeam(Team team)`

### AfterAddTeam
`public virtual void AfterAddTeam(Team team)`

### OnAgentInteraction
`public virtual void OnAgentInteraction(Agent userAgent,Agent agent,sbyte agentBoneIndex)`

### OnClearScene
`public virtual void OnClearScene()`

### OnEndMissionInternal
`public virtual void OnEndMissionInternal()`

### OnEndMission
`protected virtual void OnEndMission()`

### OnRemoveBehavior
`public virtual void OnRemoveBehavior()`

### OnFixedMissionTick
`public virtual void OnFixedMissionTick(float fixedDt)`

### OnPreMissionTick
`public virtual void OnPreMissionTick(float dt)`

### OnPreDisplayMissionTick
`public virtual void OnPreDisplayMissionTick(float dt)`

### OnMissionTick
`public virtual void OnMissionTick(float dt)`

### OnAgentMount
`public virtual void OnAgentMount(Agent agent)`

### OnAgentDismount
`public virtual void OnAgentDismount(Agent agent)`

### IsThereAgentAction
`public virtual bool IsThereAgentAction(Agent userAgent,Agent otherAgent)`

### OnEntityRemoved
`public virtual void OnEntityRemoved(GameEntity entity)`

### OnObjectUsed
`public virtual void OnObjectUsed(Agent userAgent,UsableMissionObject usedObject)`

### OnObjectStoppedBeingUsed
`public virtual void OnObjectStoppedBeingUsed(Agent userAgent,UsableMissionObject usedObject)`

### OnRenderingStarted
`public virtual void OnRenderingStarted()`

### OnMissionStateActivated
`public virtual void OnMissionStateActivated()`

### OnMissionStateFinalized
`public virtual void OnMissionStateFinalized()`

### OnMissionStateDeactivated
`public virtual void OnMissionStateDeactivated()`

### GetCompassTargets
`public virtual List<CompassItemUpdateParams> GetCompassTargets()`

### OnAssignPlayerAsSergeantOfFormation
`public virtual void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

### OnAfterDeploymentFinished
`public virtual void OnAfterDeploymentFinished()`

### OnBattleSideSpawned
`public virtual void OnBattleSideSpawned(BattleSideEnum side)`

### OnGetAgentState
`protected internal virtual void OnGetAgentState(Agent agent,bool usedSurgery)`

### OnAgentAlarmedStateChanged
`public virtual void OnAgentAlarmedStateChanged(Agent agent,Agent.AIStateFlag flag)`

### OnObjectDisabled
`protected internal virtual void OnObjectDisabled(DestructableComponent destructionComponent)`

### OnMissionModeChange
`public virtual void OnMissionModeChange(MissionMode oldMissionMode,bool atStart)`

### OnAgentControllerChanged
`protected internal virtual void OnAgentControllerChanged(Agent agent,AgentControllerType oldController)`

### OnRegisterBlow
`public virtual void OnRegisterBlow(Agent attacker,Agent victim,WeakGameEntity realHitEntity,Blow b,ref AttackCollisionData collisionData,in MissionWeapon attackerWeapon)`

### OnAgentShootMissile
`public virtual void OnAgentShootMissile(Agent shooterAgent,EquipmentIndex weaponIndex,Vec3 position,Vec3 velocity,Mat3 orientation,bool hasRigidBody,int forcedMissileIndex)`

### OnMissileRemoved
`public virtual void OnMissileRemoved(int MissileIndex)`

### OnTutorialCompleted
`public virtual void OnTutorialCompleted(string completedTutorialIdentifier)`

## See Also

- [Section index](../)
