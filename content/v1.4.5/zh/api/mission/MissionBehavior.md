---
title: "MissionBehavior"
description: "MissionBehavior 的自动生成类参考。"
---
# MissionBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBehavior : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs`

## 概述

`MissionBehavior` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Mission` | `public Mission Mission { get; set; }` |
| `BehaviorType` | `public abstract MissionBehaviorType BehaviorType { get; }` |

## 主要方法

### OnAfterMissionCreated
`public virtual void OnAfterMissionCreated()`

**用途 / Purpose:** 在 「after mission created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAfterMissionCreated();
```

### OnBehaviorInitialize
`public virtual void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnBehaviorInitialize();
```

### OnCreated
`public virtual void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnCreated();
```

### EarlyStart
`public virtual void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.EarlyStart();
```

### AfterStart
`public virtual void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.AfterStart();
```

### OnMissileHit
`public virtual void OnMissileHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**用途 / Purpose:** 在 「missile hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissileHit(attacker, victim, false, collisionData);
```

### OnMeleeHit
`public virtual void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**用途 / Purpose:** 在 「melee hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMeleeHit(attacker, victim, false, collisionData);
```

### OnMissileCollisionReaction
`public virtual void OnMissileCollisionReaction(Mission.MissileCollisionReaction collisionReaction, Agent attackerAgent, Agent attachedAgent, sbyte attachedBoneIndex)`

**用途 / Purpose:** 在 「missile collision reaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissileCollisionReaction(collisionReaction, attackerAgent, attachedAgent, 0);
```

### OnMissionScreenPreLoad
`public virtual void OnMissionScreenPreLoad()`

**用途 / Purpose:** 在 「mission screen pre load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionScreenPreLoad();
```

### OnAgentCreated
`public virtual void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 在 「agent created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentCreated(agent);
```

### OnAgentBuild
`public virtual void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public virtual void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**用途 / Purpose:** 在 「agent team changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnAgentControllerSetToPlayer
`public virtual void OnAgentControllerSetToPlayer(Agent agent)`

**用途 / Purpose:** 在 「agent controller set to player」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentControllerSetToPlayer(agent);
```

### OnAgentHit
`public virtual void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 「agent hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnScoreHit
`public virtual void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 「score hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnEarlyAgentRemoved
`public virtual void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「early agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnEarlyAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentDeleted
`public virtual void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 在 「agent deleted」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentDeleted(affectedAgent);
```

### OnAgentFleeing
`public virtual void OnAgentFleeing(Agent affectedAgent)`

**用途 / Purpose:** 在 「agent fleeing」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentFleeing(affectedAgent);
```

### OnAgentPanicked
`public virtual void OnAgentPanicked(Agent affectedAgent)`

**用途 / Purpose:** 在 「agent panicked」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentPanicked(affectedAgent);
```

### OnFocusGained
`public virtual void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 在 「focus gained」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnFocusGained(agent, focusableObject, false);
```

### OnFocusLost
`public virtual void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 在 「focus lost」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnFocusLost(agent, focusableObject);
```

### OnAddTeam
`public virtual void OnAddTeam(Team team)`

**用途 / Purpose:** 在 「add team」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAddTeam(team);
```

### AfterAddTeam
`public virtual void AfterAddTeam(Team team)`

**用途 / Purpose:** 在 「add team」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.AfterAddTeam(team);
```

### OnAgentInteraction
`public virtual void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「agent interaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentInteraction(userAgent, agent, 0);
```

### OnClearScene
`public virtual void OnClearScene()`

**用途 / Purpose:** 在 「clear scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnClearScene();
```

### OnEndMissionInternal
`public virtual void OnEndMissionInternal()`

**用途 / Purpose:** 在 「end mission internal」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnEndMissionInternal();
```

### OnRemoveBehavior
`public virtual void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnRemoveBehavior();
```

### OnFixedMissionTick
`public virtual void OnFixedMissionTick(float fixedDt)`

**用途 / Purpose:** 在 「fixed mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnFixedMissionTick(0);
```

### OnPreMissionTick
`public virtual void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 「pre mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnPreMissionTick(0);
```

### OnPreDisplayMissionTick
`public virtual void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 在 「pre display mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnPreDisplayMissionTick(0);
```

### OnMissionTick
`public virtual void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionTick(0);
```

### OnAgentMount
`public virtual void OnAgentMount(Agent agent)`

**用途 / Purpose:** 在 「agent mount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentMount(agent);
```

### OnAgentDismount
`public virtual void OnAgentDismount(Agent agent)`

**用途 / Purpose:** 在 「agent dismount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentDismount(agent);
```

### IsThereAgentAction
`public virtual bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「there agent action」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
var result = missionBehavior.IsThereAgentAction(userAgent, otherAgent);
```

### OnEntityRemoved
`public virtual void OnEntityRemoved(GameEntity entity)`

**用途 / Purpose:** 在 「entity removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnEntityRemoved(entity);
```

### OnObjectUsed
`public virtual void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnObjectUsed(userAgent, usedObject);
```

### OnObjectStoppedBeingUsed
`public virtual void OnObjectStoppedBeingUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 在 「object stopped being used」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnObjectStoppedBeingUsed(userAgent, usedObject);
```

### OnRenderingStarted
`public virtual void OnRenderingStarted()`

**用途 / Purpose:** 在 「rendering started」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnRenderingStarted();
```

### OnMissionStateActivated
`public virtual void OnMissionStateActivated()`

**用途 / Purpose:** 在 「mission state activated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionStateActivated();
```

### OnMissionStateFinalized
`public virtual void OnMissionStateFinalized()`

**用途 / Purpose:** 在 「mission state finalized」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionStateFinalized();
```

### OnMissionStateDeactivated
`public virtual void OnMissionStateDeactivated()`

**用途 / Purpose:** 在 「mission state deactivated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionStateDeactivated();
```

### GetCompassTargets
`public virtual List<CompassItemUpdateParams> GetCompassTargets()`

**用途 / Purpose:** 读取并返回当前对象中 「compass targets」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
var result = missionBehavior.GetCompassTargets();
```

### OnAssignPlayerAsSergeantOfFormation
`public virtual void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**用途 / Purpose:** 在 「assign player as sergeant of formation」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAssignPlayerAsSergeantOfFormation(agent);
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnDeploymentFinished();
```

### OnAfterDeploymentFinished
`public virtual void OnAfterDeploymentFinished()`

**用途 / Purpose:** 在 「after deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAfterDeploymentFinished();
```

### OnTeamDeployed
`public virtual void OnTeamDeployed(Team team)`

**用途 / Purpose:** 在 「team deployed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnTeamDeployed(team);
```

### OnBattleSideDeployed
`public virtual void OnBattleSideDeployed(BattleSideEnum side)`

**用途 / Purpose:** 在 「battle side deployed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnBattleSideDeployed(side);
```

### OnAgentAlarmedStateChanged
`public virtual void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)`

**用途 / Purpose:** 在 「agent alarmed state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentAlarmedStateChanged(agent, flag);
```

### OnMissionModeChange
`public virtual void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 在 「mission mode change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissionModeChange(oldMissionMode, false);
```

### OnRegisterBlow
`public virtual void OnRegisterBlow(Agent attacker, Agent victim, WeakGameEntity realHitEntity, Blow b, ref AttackCollisionData collisionData, in MissionWeapon attackerWeapon)`

**用途 / Purpose:** 在 「register blow」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnRegisterBlow(attacker, victim, realHitEntity, b, collisionData, attackerWeapon);
```

### OnAgentShootMissile
`public virtual void OnAgentShootMissile(Agent shooterAgent, EquipmentIndex weaponIndex, Vec3 position, Vec3 velocity, Mat3 orientation, bool hasRigidBody, int forcedMissileIndex)`

**用途 / Purpose:** 在 「agent shoot missile」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnAgentShootMissile(shooterAgent, weaponIndex, position, velocity, orientation, false, 0);
```

### OnMissileRemoved
`public virtual void OnMissileRemoved(int MissileIndex)`

**用途 / Purpose:** 在 「missile removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnMissileRemoved(0);
```

### OnTutorialCompleted
`public virtual void OnTutorialCompleted(string completedTutorialIdentifier)`

**用途 / Purpose:** 在 「tutorial completed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionBehavior 实例
MissionBehavior missionBehavior = ...;
missionBehavior.OnTutorialCompleted("example");
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionBehavior instance = ...;
```

## 参见

- [本区域目录](../)