---
title: "MissionBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionBehavior`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/MissionBehavior](/versions/MissionBehavior)
<!-- END BREADCRUMB -->
# MissionBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBehavior : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionBehavior.cs`

## 概述

`MissionBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Mission` | `public Mission Mission { get; set; }` |
| `DebugInput` | `public IInputContext DebugInput { get; }` |
| `BehaviorType` | `public abstract MissionBehaviorType BehaviorType { get; }` |

## 主要方法

### OnAfterMissionCreated
`public virtual void OnAfterMissionCreated()`

**用途 / Purpose:** 当 `after mission created` 事件触发时调用此方法。

### OnBehaviorInitialize
`public virtual void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnCreated
`public virtual void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### EarlyStart
`public virtual void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public virtual void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissileHit
`public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**用途 / Purpose:** 当 `missile hit` 事件触发时调用此方法。

### OnMeleeHit
`public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**用途 / Purpose:** 当 `melee hit` 事件触发时调用此方法。

### OnMissileCollisionReaction
`public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)`

**用途 / Purpose:** 当 `missile collision reaction` 事件触发时调用此方法。

### OnMissionScreenPreLoad
`public virtual void OnMissionScreenPreLoad()`

**用途 / Purpose:** 当 `mission screen pre load` 事件触发时调用此方法。

### OnAgentCreated
`public virtual void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 当 `agent created` 事件触发时调用此方法。

### OnAgentBuild
`public virtual void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentTeamChanged
`public virtual void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 当 `agent team changed` 事件触发时调用此方法。

### OnAgentControllerSetToPlayer
`public virtual void OnAgentControllerSetToPlayer(Agent agent)`

**用途 / Purpose:** 当 `agent controller set to player` 事件触发时调用此方法。

### OnAgentHit
`public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 当 `agent hit` 事件触发时调用此方法。

### OnScoreHit
`public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### OnEarlyAgentRemoved
`public virtual void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `early agent removed` 事件触发时调用此方法。

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentDeleted
`public virtual void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent deleted` 事件触发时调用此方法。

### OnAgentFleeing
`public virtual void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent fleeing` 事件触发时调用此方法。

### OnAgentPanicked
`public virtual void OnAgentPanicked(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent panicked` 事件触发时调用此方法。

### OnFocusGained
`public virtual void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 当 `focus gained` 事件触发时调用此方法。

### OnFocusLost
`public virtual void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 当 `focus lost` 事件触发时调用此方法。

### OnAddTeam
`public virtual void OnAddTeam(Team team)`

**用途 / Purpose:** 当 `add team` 事件触发时调用此方法。

### AfterAddTeam
`public virtual void AfterAddTeam(Team team)`

**用途 / Purpose:** 处理 `after add team` 相关逻辑。

### OnAgentInteraction
`public virtual void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

### OnClearScene
`public virtual void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### OnEndMissionInternal
`public virtual void OnEndMissionInternal()`

**用途 / Purpose:** 当 `end mission internal` 事件触发时调用此方法。

### OnRemoveBehavior
`public virtual void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnFixedMissionTick
`public virtual void OnFixedMissionTick(float fixedDt)`

**用途 / Purpose:** 当 `fixed mission tick` 事件触发时调用此方法。

### OnPreMissionTick
`public virtual void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### OnPreDisplayMissionTick
`public virtual void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 当 `pre display mission tick` 事件触发时调用此方法。

### OnMissionTick
`public virtual void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentMount
`public virtual void OnAgentMount(Agent agent)`

**用途 / Purpose:** 当 `agent mount` 事件触发时调用此方法。

### OnAgentDismount
`public virtual void OnAgentDismount(Agent agent)`

**用途 / Purpose:** 当 `agent dismount` 事件触发时调用此方法。

### IsThereAgentAction
`public virtual bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

### OnEntityRemoved
`public virtual void OnEntityRemoved(GameEntity entity)`

**用途 / Purpose:** 当 `entity removed` 事件触发时调用此方法。

### OnObjectUsed
`public virtual void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### OnObjectStoppedBeingUsed
`public virtual void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object stopped being used` 事件触发时调用此方法。

### OnRenderingStarted
`public virtual void OnRenderingStarted()`

**用途 / Purpose:** 当 `rendering started` 事件触发时调用此方法。

### OnMissionStateActivated
`public virtual void OnMissionStateActivated()`

**用途 / Purpose:** 当 `mission state activated` 事件触发时调用此方法。

### OnMissionStateFinalized
`public virtual void OnMissionStateFinalized()`

**用途 / Purpose:** 当 `mission state finalized` 事件触发时调用此方法。

### OnMissionStateDeactivated
`public virtual void OnMissionStateDeactivated()`

**用途 / Purpose:** 当 `mission state deactivated` 事件触发时调用此方法。

### GetCompassTargets
`public virtual List<CompassItemUpdateParams> GetCompassTargets()`

**用途 / Purpose:** 获取 `compass targets` 的当前值。

### OnAssignPlayerAsSergeantOfFormation
`public virtual void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**用途 / Purpose:** 当 `assign player as sergeant of formation` 事件触发时调用此方法。

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnAfterDeploymentFinished
`public virtual void OnAfterDeploymentFinished()`

**用途 / Purpose:** 当 `after deployment finished` 事件触发时调用此方法。

### OnTeamDeployed
`public virtual void OnTeamDeployed(Team team)`

**用途 / Purpose:** 当 `team deployed` 事件触发时调用此方法。

### OnBattleSideDeployed
`public virtual void OnBattleSideDeployed(BattleSideEnum side)`

**用途 / Purpose:** 当 `battle side deployed` 事件触发时调用此方法。

### OnAgentAlarmedStateChanged
`public virtual void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 当 `agent alarmed state changed` 事件触发时调用此方法。

### OnMissionModeChange
`public virtual void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 当 `mission mode change` 事件触发时调用此方法。

### OnRegisterBlow
`public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)`

**用途 / Purpose:** 当 `register blow` 事件触发时调用此方法。

### OnAgentShootMissile
`public virtual void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**用途 / Purpose:** 当 `agent shoot missile` 事件触发时调用此方法。

### OnMissileRemoved
`public virtual void OnMissileRemoved(int MissileIndex)`

**用途 / Purpose:** 当 `missile removed` 事件触发时调用此方法。

### OnTutorialCompleted
`public virtual void OnTutorialCompleted(string completedTutorialIdentifier)`

**用途 / Purpose:** 当 `tutorial completed` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomMissionBehavior();
```

## 参见

- [完整类目录](../catalog)