---
title: "Agent"
description: "Agent 的自动生成类参考。"
---
# Agent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## 概述

`Agent` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Main` | `public static Agent Main { get; }` |
| `IsPlayerControlled` | `public bool IsPlayerControlled { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsMainAgent` | `public bool IsMainAgent { get; }` |
| `IsHuman` | `public bool IsHuman { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `IsPlayerTroop` | `public bool IsPlayerTroop { get; }` |
| `IsUsingGameObject` | `public bool IsUsingGameObject { get; }` |
| `CanLeadFormationsRemotely` | `public bool CanLeadFormationsRemotely { get; }` |
| `IsDetachableFromFormation` | `public bool IsDetachableFromFormation { get; }` |
| `AgentScale` | `public float AgentScale { get; }` |
| `CrouchMode` | `public bool CrouchMode { get; }` |
| `WalkMode` | `public bool WalkMode { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `MovementMode` | `public AgentMovementMode MovementMode { get; }` |
| `VisualPosition` | `public Vec3 VisualPosition { get; }` |
| `MovementVelocity` | `public Vec2 MovementVelocity { get; }` |
| `AverageVelocity` | `public Vec3 AverageVelocity { get; }` |
| `MovementDirectionAsAngle` | `public float MovementDirectionAsAngle { get; }` |
| `IsLookRotationInSlowMotion` | `public bool IsLookRotationInSlowMotion { get; }` |
| `PropertyModifiers` | `public Agent.AgentPropertiesModifiers PropertyModifiers { get; }` |
| `ActionSet` | `public MBActionSet ActionSet { get; }` |
| `Components` | `public MBReadOnlyList<AgentComponent> Components { get; }` |
| `HitterList` | `public MBReadOnlyList<Agent.Hitter> HitterList { get; }` |
| `CurrentGuardMode` | `public Agent.GuardMode CurrentGuardMode { get; }` |
| `ImmediateEnemy` | `public Agent ImmediateEnemy { get; }` |
| `IsDoingPassiveAttack` | `public bool IsDoingPassiveAttack { get; }` |
| `IsPassiveUsageConditionsAreMet` | `public bool IsPassiveUsageConditionsAreMet { get; }` |
| `CurrentAimingError` | `public float CurrentAimingError { get; }` |
| `CurrentAimingTurbulance` | `public float CurrentAimingTurbulance { get; }` |
| `AttackDirection` | `public Agent.UsageDirection AttackDirection { get; }` |
| `WalkingSpeedLimitOfMountable` | `public float WalkingSpeedLimitOfMountable { get; }` |
| `RiderAgent` | `public Agent RiderAgent { get; }` |
| `HasMount` | `public bool HasMount { get; }` |
| `CanLogCombatFor` | `public bool CanLogCombatFor { get; }` |
| `MissileRangeAdjusted` | `public float MissileRangeAdjusted { get; }` |
| `MaximumMissileRange` | `public float MaximumMissileRange { get; }` |
| `Name` | `public string Name { get; }` |
| `NameTextObject` | `public TextObject NameTextObject { get; }` |
| `MovementLockedState` | `public AgentMovementLockedState MovementLockedState { get; }` |
| `Monster` | `public Monster Monster { get; }` |
| `IsRunningAway` | `public bool IsRunningAway { get; }` |
| `BodyPropertiesValue` | `public BodyProperties BodyPropertiesValue { get; }` |
| `CommonAIComponent` | `public CommonAIComponent CommonAIComponent { get; }` |
| `HumanAIComponent` | `public HumanAIComponent HumanAIComponent { get; }` |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; }` |
| `LastRangedHitTime` | `public float LastRangedHitTime { get; }` |
| `LastMeleeHitTime` | `public float LastMeleeHitTime { get; }` |
| `LastRangedAttackTime` | `public float LastRangedAttackTime { get; }` |
| `LastMeleeAttackTime` | `public float LastMeleeAttackTime { get; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `Banner` | `public ItemObject Banner { get; }` |
| `FormationBanner` | `public ItemObject FormationBanner { get; }` |
| `WieldedWeapon` | `public MissionWeapon WieldedWeapon { get; }` |
| `IsItemUseDisabled` | `public bool IsItemUseDisabled { get; }` |
| `SyncHealthToAllClients` | `public bool SyncHealthToAllClients { get; }` |
| `CurrentlyUsedGameObject` | `public UsableMissionObject CurrentlyUsedGameObject { get; }` |
| `CombatActionsEnabled` | `public bool CombatActionsEnabled { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `IsHero` | `public bool IsHero { get; }` |
| `Index` | `public int Index { get; }` |
| `Equipment` | `public MissionEquipment Equipment { get; }` |
| `AgentRole` | `public TextObject AgentRole { get; }` |
| `HasBeenBuilt` | `public bool HasBeenBuilt { get; }` |
| `CurrentMortalityState` | `public Agent.MortalityState CurrentMortalityState { get; }` |
| `SpawnEquipment` | `public Equipment SpawnEquipment { get; }` |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; }` |
| `RandomizeColors` | `public bool RandomizeColors { get; }` |
| `CharacterPowerCached` | `public float CharacterPowerCached { get; }` |
| `WalkSpeedCached` | `public float WalkSpeedCached { get; }` |
| `Origin` | `public IAgentOriginBase Origin { get; }` |
| `Team` | `public Team Team { get; }` |
| `KillCount` | `public int KillCount { get; }` |
| `AgentDrivenProperties` | `public AgentDrivenProperties AgentDrivenProperties { get; }` |
| `BaseHealthLimit` | `public float BaseHealthLimit { get; }` |
| `HorseCreationKey` | `public string HorseCreationKey { get; }` |
| `HealthLimit` | `public float HealthLimit { get; set; }` |
| `IsRangedCached` | `public bool IsRangedCached { get; }` |
| `HasMeleeWeaponCached` | `public bool HasMeleeWeaponCached { get; }` |
| `HasShieldCached` | `public bool HasShieldCached { get; }` |
| `HasSpearCached` | `public bool HasSpearCached { get; }` |
| `HasThrownCached` | `public bool HasThrownCached { get; set; }` |
| `AIStateFlags` | `public Agent.AIStateFlag AIStateFlags { get; set; }` |
| `Frame` | `public MatrixFrame Frame { get; }` |
| `MovementFlags` | `public Agent.MovementControlFlag MovementFlags { get; set; }` |
| `MovementInputVector` | `public Vec2 MovementInputVector { get; set; }` |
| `CollisionCapsule` | `public CapsuleData CollisionCapsule { get; }` |
| `CollisionCapsuleCenter` | `public Vec3 CollisionCapsuleCenter { get; }` |
| `AgentVisuals` | `public MBAgentVisuals AgentVisuals { get; }` |
| `HeadCameraMode` | `public bool HeadCameraMode { get; set; }` |
| `MountAgent` | `public Agent MountAgent { get; }` |
| `Detachment` | `public IDetachment Detachment { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |
| `IsDetachedFromFormation` | `public bool IsDetachedFromFormation { get; }` |
| `CurrentWatchState` | `public Agent.WatchState CurrentWatchState { get; }` |
| `Defensiveness` | `public float Defensiveness { get; set; }` |
| `Formation` | `public Formation Formation { get; set; }` |
| `IsShieldUsageEncouraged` | `public bool IsShieldUsageEncouraged { get; }` |
| `IsPlayerUnit` | `public bool IsPlayerUnit { get; }` |
| `Controller` | `public AgentControllerType Controller { get; set; }` |
| `ClothingColor1` | `public uint ClothingColor1 { get; }` |
| `ClothingColor2` | `public uint ClothingColor2 { get; }` |
| `LookFrame` | `public MatrixFrame LookFrame { get; }` |
| `LookDirectionAsAngle` | `public float LookDirectionAsAngle { get; set; }` |
| `LookRotation` | `public Mat3 LookRotation { get; }` |
| `IsLookDirectionLocked` | `public bool IsLookDirectionLocked { get; set; }` |
| `IsCheering` | `public bool IsCheering { get; }` |
| `IsInBeingStruckAction` | `public bool IsInBeingStruckAction { get; }` |
| `MissionPeer` | `public MissionPeer MissionPeer { get; set; }` |
| `Character` | `public BasicCharacterObject Character { get; set; }` |
| `LastDetachmentTickAgentTime` | `public float LastDetachmentTickAgentTime { get; }` |
| `OwningAgentMissionPeer` | `public MissionPeer OwningAgentMissionPeer { get; }` |
| `MissionRepresentative` | `public MissionRepresentativeBase MissionRepresentative { get; }` |
| `IsInLadderQueue` | `public bool IsInLadderQueue { get; }` |
| `LocalPositionError` | `public Vec2 LocalPositionError { get; }` |
| `DetachmentWeight` | `public float DetachmentWeight { get; }` |
| `DetachmentIndex` | `public int DetachmentIndex { get; }` |
| `LookDirection` | `public Vec3 LookDirection { get; set; }` |
| `IsLookDirectionLow` | `public bool IsLookDirectionLow { get; set; }` |
| `Health` | `public float Health { get; set; }` |
| `Age` | `public float Age { get; set; }` |
| `Velocity` | `public Vec3 Velocity { get; }` |
| `EventControlFlags` | `public Agent.EventControlFlag EventControlFlags { get; set; }` |
| `State` | `public AgentState State { get; set; }` |
| `WieldedOffhandWeapon` | `public MissionWeapon WieldedOffhandWeapon { get; }` |
| `Damage` | `public float Damage { get; }` |
| `LastBlowOwnerId` | `public int LastBlowOwnerId { get; }` |
| `LastBlowAttackType` | `public AgentAttackType LastBlowAttackType { get; }` |
| `CanOverrideBlow` | `public bool CanOverrideBlow { get; }` |
| `this` | `public Agent this { get; }` |

## 主要方法

### GetHasOnAiInputSetCallback
`public bool GetHasOnAiInputSetCallback()`

**用途 / Purpose:** 读取并返回当前对象中 「has on ai input set callback」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetHasOnAiInputSetCallback();
```

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value)`

**用途 / Purpose:** 为 「has on ai input set callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetHasOnAiInputSetCallback(false);
```

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ)`

**用途 / Purpose:** 读取并返回当前对象中 「missile range with height difference aux」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetMissileRangeWithHeightDifferenceAux(0);
```

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName()`

**用途 / Purpose:** 读取并返回当前对象中 「sound and collision info class name」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetSoundAndCollisionInfoClassName();
```

### UpdateAgentStats
`public void UpdateAgentStats()`

**用途 / Purpose:** 重新计算并更新 「agent stats」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateAgentStats();
```

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon inaccuracy」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetWeaponInaccuracy(weaponSlotIndex, 0);
```

### DebugGetHealth
`public float DebugGetHealth()`

**用途 / Purpose:** 处理与 「debug get health」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.DebugGetHealth();
```

### SetTargetPosition
`public void SetTargetPosition(Vec2 value)`

**用途 / Purpose:** 为 「target position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetPosition(value);
```

### SetTargetZ
`public void SetTargetZ(float targetZ)`

**用途 / Purpose:** 为 「target z」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetZ(0);
```

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp)`

**用途 / Purpose:** 为 「target up」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetUp(targetUp);
```

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value)`

**用途 / Purpose:** 为 「can lead formations remotely」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetCanLeadFormationsRemotely(false);
```

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)`

**用途 / Purpose:** 为 「average ping in milliseconds」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAveragePingInMilliseconds(0);
```

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)`

**用途 / Purpose:** 为 「target position and direction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetPositionAndDirection(targetPosition, targetDirection);
```

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration)`

**用途 / Purpose:** 将 「acceleration」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.AddAcceleration(acceleration);
```

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction)`

**用途 / Purpose:** 为 「weapon guard」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWeaponGuard(direction);
```

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState)`

**用途 / Purpose:** 为 「watch state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWatchState(watchState);
```

### IsAlarmStateNormal
`public bool IsAlarmStateNormal()`

**用途 / Purpose:** 判断当前对象是否处于 「alarm state normal」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsAlarmStateNormal();
```

### IsCautious
`public bool IsCautious()`

**用途 / Purpose:** 判断当前对象是否处于 「cautious」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsCautious();
```

### IsPatrollingCautious
`public bool IsPatrollingCautious()`

**用途 / Purpose:** 判断当前对象是否处于 「patrolling cautious」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsPatrollingCautious();
```

### IsAlarmed
`public bool IsAlarmed()`

**用途 / Purpose:** 判断当前对象是否处于 「alarmed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsAlarmed();
```

### SetAlarmState
`public bool SetAlarmState(Agent.AIStateFlag alarmStateFlag)`

**用途 / Purpose:** 为 「alarm state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.SetAlarmState(alarmStateFlag);
```

### SetTargetFormationIndex
`public void SetTargetFormationIndex(int targetFormationIndex)`

**用途 / Purpose:** 为 「target formation index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetFormationIndex(0);
```

### StartRagdollAsCorpse
`public void StartRagdollAsCorpse()`

**用途 / Purpose:** 启动「ragdoll as corpse」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.StartRagdollAsCorpse();
```

### EndRagdollAsCorpse
`public void EndRagdollAsCorpse()`

**用途 / Purpose:** 处理与 「end ragdoll as corpse」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.EndRagdollAsCorpse();
```

### IsAddedAsCorpse
`public bool IsAddedAsCorpse()`

**用途 / Purpose:** 判断当前对象是否处于 「added as corpse」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsAddedAsCorpse();
```

### AddAsCorpse
`public void AddAsCorpse()`

**用途 / Purpose:** 将 「as corpse」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.AddAsCorpse();
```

### SetOverridenStrikeAndDeathAction
`public void SetOverridenStrikeAndDeathAction(in ActionIndexCache strikeAction, in ActionIndexCache deathAction)`

**用途 / Purpose:** 为 「overriden strike and death action」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetOverridenStrikeAndDeathAction(strikeAction, deathAction);
```

### ApplyForceOnRagdoll
`public void ApplyForceOnRagdoll(sbyte boneIndex, in Vec3 force)`

**用途 / Purpose:** 将 「force on ragdoll」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ApplyForceOnRagdoll(0, force);
```

### SetVelocityLimitsOnRagdoll
`public void SetVelocityLimitsOnRagdoll(float linearVelocityLimit, float angularVelocityLimit)`

**用途 / Purpose:** 为 「velocity limits on ragdoll」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetVelocityLimitsOnRagdoll(0, 0);
```

### GetAILastSuspiciousPosition
`public WorldPosition GetAILastSuspiciousPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「a i last suspicious position」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAILastSuspiciousPosition();
```

### SetAILastSuspiciousPosition
`public void SetAILastSuspiciousPosition(WorldPosition lastSuspiciousPosition, bool checkNavMeshForCorrection)`

**用途 / Purpose:** 为 「a i last suspicious position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAILastSuspiciousPosition(lastSuspiciousPosition, false);
```

### GetAIMoveDestination
`public WorldPosition GetAIMoveDestination()`

**用途 / Purpose:** 读取并返回当前对象中 「a i move destination」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAIMoveDestination();
```

### FindLongestDirectMoveToPosition
`public Vec2 FindLongestDirectMoveToPosition(Vec2 targetPosition, bool checkBoundaries, bool checkFriendlyAgents, out bool isCollidedWithAgent)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「longest direct move to position」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.FindLongestDirectMoveToPosition(targetPosition, false, false, isCollidedWithAgent);
```

### GetAIMoveStartTolerance
`public float GetAIMoveStartTolerance()`

**用途 / Purpose:** 读取并返回当前对象中 「a i move start tolerance」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAIMoveStartTolerance();
```

### GetAIMoveStopTolerance
`public float GetAIMoveStopTolerance()`

**用途 / Purpose:** 读取并返回当前对象中 「a i move stop tolerance」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAIMoveStopTolerance();
```

### IsAIAtMoveDestination
`public bool IsAIAtMoveDestination()`

**用途 / Purpose:** 判断当前对象是否处于 「a i at move destination」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsAIAtMoveDestination();
```

### SetFormationBanner
`public void SetFormationBanner(ItemObject banner)`

**用途 / Purpose:** 为 「formation banner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetFormationBanner(banner);
```

### SetIsAIPaused
`public void SetIsAIPaused(bool isPaused)`

**用途 / Purpose:** 为 「is a i paused」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetIsAIPaused(false);
```

### ResetEnemyCaches
`public void ResetEnemyCaches()`

**用途 / Purpose:** 将 「enemy caches」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ResetEnemyCaches();
```

### SetTargetPositionSynched
`public void SetTargetPositionSynched(ref Vec2 targetPosition)`

**用途 / Purpose:** 为 「target position synched」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetPositionSynched(targetPosition);
```

### SetTargetPositionAndDirectionSynched
`public void SetTargetPositionAndDirectionSynched(ref Vec2 targetPosition, ref Vec3 targetDirection)`

**用途 / Purpose:** 为 「target position and direction synched」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetPositionAndDirectionSynched(targetPosition, targetDirection);
```

### SetBodyArmorMaterialType
`public void SetBodyArmorMaterialType(ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType)`

**用途 / Purpose:** 为 「body armor material type」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetBodyArmorMaterialType(bodyArmorMaterialType);
```

### SetUsedGameObjectForClient
`public void SetUsedGameObjectForClient(UsableMissionObject usedObject)`

**用途 / Purpose:** 为 「used game object for client」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetUsedGameObjectForClient(usedObject);
```

### SetTeam
`public void SetTeam(Team team, bool sync)`

**用途 / Purpose:** 为 「team」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTeam(team, false);
```

### SetClothingColor1
`public void SetClothingColor1(uint color)`

**用途 / Purpose:** 为 「clothing color1」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetClothingColor1(0);
```

### SetClothingColor2
`public void SetClothingColor2(uint color)`

**用途 / Purpose:** 为 「clothing color2」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetClothingColor2(0);
```

### SetWieldedItemIndexAsClient
`public void SetWieldedItemIndexAsClient(Agent.HandIndex handIndex, EquipmentIndex equipmentIndex, bool isWieldedInstantly, bool isWieldedOnSpawn, int mainHandCurrentUsageIndex)`

**用途 / Purpose:** 为 「wielded item index as client」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWieldedItemIndexAsClient(handIndex, equipmentIndex, false, false, 0);
```

### SetPreciseRangedAimingEnabled
`public void SetPreciseRangedAimingEnabled(bool set)`

**用途 / Purpose:** 为 「precise ranged aiming enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetPreciseRangedAimingEnabled(false);
```

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**用途 / Purpose:** 为 「as conversation agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAsConversationAgent(false);
```

### SetCrouchMode
`public void SetCrouchMode(bool set)`

**用途 / Purpose:** 为 「crouch mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetCrouchMode(false);
```

### SetWeaponAmountInSlot
`public void SetWeaponAmountInSlot(EquipmentIndex equipmentSlot, short amount, bool enforcePrimaryItem)`

**用途 / Purpose:** 为 「weapon amount in slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWeaponAmountInSlot(equipmentSlot, 0, false);
```

### SetDraggingMode
`public void SetDraggingMode(bool set)`

**用途 / Purpose:** 为 「dragging mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetDraggingMode(false);
```

### SetWeaponAmmoAsClient
`public void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)`

**用途 / Purpose:** 为 「weapon ammo as client」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWeaponAmmoAsClient(equipmentIndex, ammoEquipmentIndex, 0);
```

### SetWeaponReloadPhaseAsClient
`public void SetWeaponReloadPhaseAsClient(EquipmentIndex equipmentIndex, short reloadState)`

**用途 / Purpose:** 为 「weapon reload phase as client」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWeaponReloadPhaseAsClient(equipmentIndex, 0);
```

### SetReloadAmmoInSlot
`public void SetReloadAmmoInSlot(EquipmentIndex equipmentIndex, EquipmentIndex ammoSlotIndex, short reloadedAmmo)`

**用途 / Purpose:** 为 「reload ammo in slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetReloadAmmoInSlot(equipmentIndex, ammoSlotIndex, 0);
```

### SetUsageIndexOfWeaponInSlotAsClient
`public void SetUsageIndexOfWeaponInSlotAsClient(EquipmentIndex slotIndex, int usageIndex)`

**用途 / Purpose:** 为 「usage index of weapon in slot as client」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetUsageIndexOfWeaponInSlotAsClient(slotIndex, 0);
```

### SetRandomizeColors
`public void SetRandomizeColors(bool shouldRandomize)`

**用途 / Purpose:** 为 「randomize colors」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetRandomizeColors(false);
```

### SetFormationFrameDisabled
`public void SetFormationFrameDisabled()`

**用途 / Purpose:** 为 「formation frame disabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetFormationFrameDisabled();
```

### SetFormationFrameEnabled
`public void SetFormationFrameEnabled(WorldPosition position, Vec2 direction, Vec2 positionVelocity, float formationDirectionEnforcingFactor)`

**用途 / Purpose:** 为 「formation frame enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetFormationFrameEnabled(position, direction, positionVelocity, 0);
```

### SetShouldCatchUpWithFormation
`public void SetShouldCatchUpWithFormation(bool value)`

**用途 / Purpose:** 为 「should catch up with formation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetShouldCatchUpWithFormation(false);
```

### SetFormationIntegrityData
`public void SetFormationIntegrityData(Vec2 position, Vec2 currentFormationDirection, Vec2 averageVelocityOfCloseAgents, float averageMaxUnlimitedSpeedOfCloseAgents, float deviationOfPositions, bool shouldKeepWithFormationInsteadOfMovingToAgent)`

**用途 / Purpose:** 为 「formation integrity data」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetFormationIntegrityData(position, currentFormationDirection, averageVelocityOfCloseAgents, 0, 0, false);
```

### IsCrouchingAllowed
`public bool IsCrouchingAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 「crouching allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsCrouchingAllowed();
```

### SetCurrentActionProgress
`public void SetCurrentActionProgress(int channelNo, float progress)`

**用途 / Purpose:** 为 「current action progress」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetCurrentActionProgress(0, 0);
```

### SetCurrentActionSpeed
`public void SetCurrentActionSpeed(int channelNo, float speed)`

**用途 / Purpose:** 为 「current action speed」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetCurrentActionSpeed(0, 0);
```

### SetActionChannel
`public bool SetActionChannel(int channelNo, in ActionIndexCache actionIndexCache, bool ignorePriority = false, AnimFlags additionalFlags = (AnimFlags)0UL, float blendWithNextActionFactor = 0f, float actionSpeed = 1f, float blendInPeriod = -0.2f, float blendOutPeriodToNoAnim = 0.4f, float startProgress = 0f, bool useLinearSmoothing = false, float blendOutPeriod = -0.2f, int actionShift = 0, bool forceFaceMorphRestart = true)`

**用途 / Purpose:** 为 「action channel」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.SetActionChannel(0, actionIndexCache, false, (AnimFlags)0UL, 0, 0, 0, 0, 0, false, 0, 0, false);
```

### SetAttackState
`public void SetAttackState(int attackState)`

**用途 / Purpose:** 为 「attack state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAttackState(0);
```

### SetAIBehaviorParams
`public void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**用途 / Purpose:** 为 「a i behavior params」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAIBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

### SetAllBehaviorParams
`public void SetAllBehaviorParams(HumanAIComponent.BehaviorValues behaviorParams)`

**用途 / Purpose:** 为 「all behavior params」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAllBehaviorParams(behaviorParams);
```

### SetMovementDirection
`public void SetMovementDirection(in Vec2 direction)`

**用途 / Purpose:** 为 「movement direction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetMovementDirection(direction);
```

### SetScriptedFlags
`public void SetScriptedFlags(Agent.AIScriptedFrameFlags flags)`

**用途 / Purpose:** 为 「scripted flags」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetScriptedFlags(flags);
```

### SetScriptedCombatFlags
`public void SetScriptedCombatFlags(Agent.AISpecialCombatModeFlags flags)`

**用途 / Purpose:** 为 「scripted combat flags」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetScriptedCombatFlags(flags);
```

### SetScriptedPositionAndDirection
`public void SetScriptedPositionAndDirection(ref WorldPosition scriptedPosition, float scriptedDirection, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**用途 / Purpose:** 为 「scripted position and direction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetScriptedPositionAndDirection(scriptedPosition, 0, false, agent.AIScriptedFrameFlags.None);
```

### SetScriptedPosition
`public void SetScriptedPosition(ref WorldPosition position, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**用途 / Purpose:** 为 「scripted position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetScriptedPosition(position, false, agent.AIScriptedFrameFlags.None);
```

### SetScriptedTargetEntityAndPosition
`public void SetScriptedTargetEntityAndPosition(WeakGameEntity target, WorldPosition position, Agent.AISpecialCombatModeFlags additionalFlags = Agent.AISpecialCombatModeFlags.None, bool ignoreIfAlreadyAttacking = false)`

**用途 / Purpose:** 为 「scripted target entity and position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetScriptedTargetEntityAndPosition(target, position, agent.AISpecialCombatModeFlags.None, false);
```

### SetAgentExcludeStateForFaceGroupId
`public void SetAgentExcludeStateForFaceGroupId(int faceGroupId, bool isExcluded)`

**用途 / Purpose:** 为 「agent exclude state for face group id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAgentExcludeStateForFaceGroupId(0, false);
```

### SetLookAgent
`public void SetLookAgent(Agent agent)`

**用途 / Purpose:** 为 「look agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetLookAgent(agent);
```

### SetInteractionAgent
`public void SetInteractionAgent(Agent agent)`

**用途 / Purpose:** 为 「interaction agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetInteractionAgent(agent);
```

### SetLookToPointOfInterest
`public void SetLookToPointOfInterest(Vec3 point)`

**用途 / Purpose:** 为 「look to point of interest」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetLookToPointOfInterest(point);
```

### SetAgentFlags
`public void SetAgentFlags(AgentFlag agentFlags)`

**用途 / Purpose:** 为 「agent flags」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAgentFlags(agentFlags);
```

### SetSelectedMountIndex
`public void SetSelectedMountIndex(int mountIndex)`

**用途 / Purpose:** 为 「selected mount index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetSelectedMountIndex(0);
```

### GetFiringOrder
`public int GetFiringOrder()`

**用途 / Purpose:** 读取并返回当前对象中 「firing order」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetFiringOrder();
```

### GetRidingOrder
`public int GetRidingOrder()`

**用途 / Purpose:** 读取并返回当前对象中 「riding order」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetRidingOrder();
```

### GetSelectedMountIndex
`public int GetSelectedMountIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「selected mount index」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetSelectedMountIndex();
```

### GetTargetFormationIndex
`public int GetTargetFormationIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「target formation index」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTargetFormationIndex();
```

### SetFiringOrder
`public void SetFiringOrder(FiringOrder.RangedWeaponUsageOrderEnum order)`

**用途 / Purpose:** 为 「firing order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetFiringOrder(order);
```

### SetRidingOrder
`public void SetRidingOrder(RidingOrder.RidingOrderEnum order)`

**用途 / Purpose:** 为 「riding order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetRidingOrder(order);
```

### SetAgentFacialAnimation
`public void SetAgentFacialAnimation(Agent.FacialAnimChannel channel, string animationName, bool loop)`

**用途 / Purpose:** 为 「agent facial animation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAgentFacialAnimation(channel, "example", false);
```

### SetHandInverseKinematicsFrame
`public bool SetHandInverseKinematicsFrame(in MatrixFrame leftGlobalFrame, in MatrixFrame rightGlobalFrame)`

**用途 / Purpose:** 为 「hand inverse kinematics frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.SetHandInverseKinematicsFrame(leftGlobalFrame, rightGlobalFrame);
```

### SetNativeFormationNo
`public void SetNativeFormationNo(int formationNo)`

**用途 / Purpose:** 为 「native formation no」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetNativeFormationNo(0);
```

### SetDirectionChangeTendency
`public void SetDirectionChangeTendency(float tendency)`

**用途 / Purpose:** 为 「direction change tendency」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetDirectionChangeTendency(0);
```

### GetBattleImportance
`public float GetBattleImportance()`

**用途 / Purpose:** 读取并返回当前对象中 「battle importance」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetBattleImportance();
```

### GetTraitsMask
`public TroopTraitsMask GetTraitsMask()`

**用途 / Purpose:** 读取并返回当前对象中 「traits mask」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTraitsMask();
```

### SetSynchedPrefabComponentVisibility
`public void SetSynchedPrefabComponentVisibility(int componentIndex, bool visibility)`

**用途 / Purpose:** 为 「synched prefab component visibility」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetSynchedPrefabComponentVisibility(0, false);
```

### SetActionSet
`public void SetActionSet(ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 为 「action set」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetActionSet(animationSystemData);
```

### SetColumnwiseFollowAgent
`public void SetColumnwiseFollowAgent(Agent followAgent, ref Vec2 followPosition)`

**用途 / Purpose:** 为 「columnwise follow agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetColumnwiseFollowAgent(followAgent, followPosition);
```

### SetHandInverseKinematicsFrameForMissionObjectUsage
`public void SetHandInverseKinematicsFrameForMissionObjectUsage(in MatrixFrame localIKFrame, in MatrixFrame boundEntityGlobalFrame, float animationHeightDifference = 0f)`

**用途 / Purpose:** 为 「hand inverse kinematics frame for mission object usage」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetHandInverseKinematicsFrameForMissionObjectUsage(localIKFrame, boundEntityGlobalFrame, 0);
```

### SetWantsToYell
`public void SetWantsToYell()`

**用途 / Purpose:** 为 「wants to yell」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetWantsToYell();
```

### SetCapeClothSimulator
`public void SetCapeClothSimulator(GameEntityComponent clothSimulatorComponent)`

**用途 / Purpose:** 为 「cape cloth simulator」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetCapeClothSimulator(clothSimulatorComponent);
```

### GetTargetPosition
`public Vec2 GetTargetPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「target position」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTargetPosition();
```

### GetTargetDirection
`public Vec3 GetTargetDirection()`

**用途 / Purpose:** 读取并返回当前对象中 「target direction」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTargetDirection();
```

### GetAimingTimer
`public float GetAimingTimer()`

**用途 / Purpose:** 读取并返回当前对象中 「aiming timer」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAimingTimer();
```

### GetInteractionDistanceToUsable
`public float GetInteractionDistanceToUsable(IUsable usable)`

**用途 / Purpose:** 读取并返回当前对象中 「interaction distance to usable」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetInteractionDistanceToUsable(usable);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 读取并返回当前对象中 「info text for being not interactable」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetInfoTextForBeingNotInteractable(userAgent);
```

### GetPrimaryWieldedItemIndex
`public EquipmentIndex GetPrimaryWieldedItemIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「primary wielded item index」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetPrimaryWieldedItemIndex();
```

### GetOffhandWieldedItemIndex
`public EquipmentIndex GetOffhandWieldedItemIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「offhand wielded item index」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetOffhandWieldedItemIndex();
```

### GetMaximumForwardUnlimitedSpeed
`public float GetMaximumForwardUnlimitedSpeed()`

**用途 / Purpose:** 读取并返回当前对象中 「maximum forward unlimited speed」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetMaximumForwardUnlimitedSpeed();
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetDescriptionText(gameEntity);
```

### GetWeaponEntityFromEquipmentSlot
`public WeakGameEntity GetWeaponEntityFromEquipmentSlot(EquipmentIndex slotIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon entity from equipment slot」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetWeaponEntityFromEquipmentSlot(slotIndex);
```

### GetRetreatPos
`public WorldPosition GetRetreatPos()`

**用途 / Purpose:** 读取并返回当前对象中 「retreat pos」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetRetreatPos();
```

### GetScriptedFlags
`public Agent.AIScriptedFrameFlags GetScriptedFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「scripted flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetScriptedFlags();
```

### GetScriptedCombatFlags
`public Agent.AISpecialCombatModeFlags GetScriptedCombatFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「scripted combat flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetScriptedCombatFlags();
```

### GetSteppedEntity
`public WeakGameEntity GetSteppedEntity()`

**用途 / Purpose:** 读取并返回当前对象中 「stepped entity」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetSteppedEntity();
```

### GetSteppedRootEntity
`public WeakGameEntity GetSteppedRootEntity()`

**用途 / Purpose:** 读取并返回当前对象中 「stepped root entity」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetSteppedRootEntity();
```

### GetSteppedBodyFlags
`public BodyFlags GetSteppedBodyFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「stepped body flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetSteppedBodyFlags();
```

### GetCurrentAnimationFlag
`public AnimFlags GetCurrentAnimationFlag(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current animation flag」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentAnimationFlag(0);
```

### GetCurrentAction
`public ActionIndexCache GetCurrentAction(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current action」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentAction(0);
```

### GetCurrentActionType
`public Agent.ActionCodeType GetCurrentActionType(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current action type」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentActionType(0);
```

### GetCurrentActionStage
`public Agent.ActionStage GetCurrentActionStage(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current action stage」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentActionStage(0);
```

### GetCurrentActionDirection
`public Agent.UsageDirection GetCurrentActionDirection(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current action direction」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentActionDirection(0);
```

### GetCurrentActionPriority
`public int GetCurrentActionPriority(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current action priority」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentActionPriority(0);
```

### GetCurrentActionProgress
`public float GetCurrentActionProgress(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「current action progress」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentActionProgress(0);
```

### GetActionChannelWeight
`public float GetActionChannelWeight(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「action channel weight」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetActionChannelWeight(0);
```

### GetActionChannelCurrentActionWeight
`public float GetActionChannelCurrentActionWeight(int channelNo)`

**用途 / Purpose:** 读取并返回当前对象中 「action channel current action weight」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetActionChannelCurrentActionWeight(0);
```

### GetWorldFrame
`public WorldFrame GetWorldFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「world frame」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetWorldFrame();
```

### GetLookDownLimit
`public float GetLookDownLimit()`

**用途 / Purpose:** 读取并返回当前对象中 「look down limit」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetLookDownLimit();
```

### GetEyeGlobalHeight
`public float GetEyeGlobalHeight()`

**用途 / Purpose:** 读取并返回当前对象中 「eye global height」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetEyeGlobalHeight();
```

### GetMaximumSpeedLimit
`public float GetMaximumSpeedLimit()`

**用途 / Purpose:** 读取并返回当前对象中 「maximum speed limit」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetMaximumSpeedLimit();
```

### GetCurrentVelocity
`public Vec2 GetCurrentVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 「current velocity」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentVelocity();
```

### GetTurnSpeed
`public float GetTurnSpeed()`

**用途 / Purpose:** 读取并返回当前对象中 「turn speed」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTurnSpeed();
```

### GetCurrentSpeedLimit
`public float GetCurrentSpeedLimit()`

**用途 / Purpose:** 读取并返回当前对象中 「current speed limit」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentSpeedLimit();
```

### GetRealGlobalVelocity
`public Vec3 GetRealGlobalVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 「real global velocity」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetRealGlobalVelocity();
```

### GetAverageRealGlobalVelocity
`public Vec3 GetAverageRealGlobalVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 「average real global velocity」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAverageRealGlobalVelocity();
```

### GetMovementDirection
`public Vec2 GetMovementDirection()`

**用途 / Purpose:** 读取并返回当前对象中 「movement direction」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetMovementDirection();
```

### GetCurWeaponOffset
`public Vec3 GetCurWeaponOffset()`

**用途 / Purpose:** 读取并返回当前对象中 「cur weapon offset」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurWeaponOffset();
```

### GetIsLeftStance
`public bool GetIsLeftStance()`

**用途 / Purpose:** 读取并返回当前对象中 「is left stance」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetIsLeftStance();
```

### GetPathDistanceToPoint
`public float GetPathDistanceToPoint(ref Vec3 point)`

**用途 / Purpose:** 读取并返回当前对象中 「path distance to point」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetPathDistanceToPoint(point);
```

### GetCurrentNavigationFaceId
`public int GetCurrentNavigationFaceId()`

**用途 / Purpose:** 读取并返回当前对象中 「current navigation face id」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetCurrentNavigationFaceId();
```

### GetWorldPosition
`public WorldPosition GetWorldPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「world position」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetWorldPosition();
```

### GetLookAgent
`public Agent GetLookAgent()`

**用途 / Purpose:** 读取并返回当前对象中 「look agent」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetLookAgent();
```

### GetTargetAgent
`public Agent GetTargetAgent()`

**用途 / Purpose:** 读取并返回当前对象中 「target agent」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTargetAgent();
```

### SetTargetAgent
`public void SetTargetAgent(Agent agent)`

**用途 / Purpose:** 为 「target agent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetTargetAgent(agent);
```

### SetAutomaticTargetSelection
`public void SetAutomaticTargetSelection(bool enable)`

**用途 / Purpose:** 为 「automatic target selection」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAutomaticTargetSelection(false);
```

### GetAgentFlags
`public AgentFlag GetAgentFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「agent flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAgentFlags();
```

### GetAgentFacialAnimation
`public string GetAgentFacialAnimation()`

**用途 / Purpose:** 读取并返回当前对象中 「agent facial animation」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAgentFacialAnimation();
```

### GetAgentVoiceDefinition
`public string GetAgentVoiceDefinition()`

**用途 / Purpose:** 读取并返回当前对象中 「agent voice definition」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAgentVoiceDefinition();
```

### GetEyeGlobalPosition
`public Vec3 GetEyeGlobalPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「eye global position」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetEyeGlobalPosition();
```

### GetChestGlobalPosition
`public Vec3 GetChestGlobalPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「chest global position」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetChestGlobalPosition();
```

### GetDefendMovementFlag
`public Agent.MovementControlFlag GetDefendMovementFlag()`

**用途 / Purpose:** 读取并返回当前对象中 「defend movement flag」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetDefendMovementFlag();
```

### GetAttackDirection
`public Agent.UsageDirection GetAttackDirection()`

**用途 / Purpose:** 读取并返回当前对象中 「attack direction」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAttackDirection();
```

### GetWieldedWeaponInfo
`public WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「wielded weapon info」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetWieldedWeaponInfo(handIndex);
```

### GetBodyRotationConstraint
`public Vec2 GetBodyRotationConstraint(int channelIndex = 1)`

**用途 / Purpose:** 读取并返回当前对象中 「body rotation constraint」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetBodyRotationConstraint(0);
```

### GetTotalEncumbrance
`public float GetTotalEncumbrance()`

**用途 / Purpose:** 读取并返回当前对象中 「total encumbrance」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetTotalEncumbrance();
```

### GetAgentDrivenPropertyValue
`public float GetAgentDrivenPropertyValue(DrivenProperty type)`

**用途 / Purpose:** 读取并返回当前对象中 「agent driven property value」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAgentDrivenPropertyValue(type);
```

### GetSteppedMachine
`public UsableMachine GetSteppedMachine()`

**用途 / Purpose:** 读取并返回当前对象中 「stepped machine」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetSteppedMachine();
```

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapons count」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAttachedWeaponsCount();
```

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapon」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAttachedWeapon(0);
```

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapon frame」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAttachedWeaponFrame(0);
```

### GetAttachedWeaponBoneIndex
`public sbyte GetAttachedWeaponBoneIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapon bone index」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAttachedWeaponBoneIndex(0);
```

### DeleteAttachedWeapon
`public void DeleteAttachedWeapon(int index)`

**用途 / Purpose:** 处理与 「delete attached weapon」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.DeleteAttachedWeapon(0);
```

### HasRangedWeapon
`public bool HasRangedWeapon(bool checkHasAmmo = false)`

**用途 / Purpose:** 判断当前对象是否已经持有 「ranged weapon」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasRangedWeapon(false);
```

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「formation file and rank info」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.GetFormationFileAndRankInfo(fileIndex, rankIndex);
```

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex, out int fileCount, out int rankCount)`

**用途 / Purpose:** 读取并返回当前对象中 「formation file and rank info」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.GetFormationFileAndRankInfo(fileIndex, rankIndex, fileCount, rankCount);
```

### SetMortalityState
`public void SetMortalityState(Agent.MortalityState newState)`

**用途 / Purpose:** 为 「mortality state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetMortalityState(newState);
```

### ToggleInvulnerable
`public void ToggleInvulnerable()`

**用途 / Purpose:** 处理与 「toggle invulnerable」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ToggleInvulnerable();
```

### GetArmLength
`public float GetArmLength()`

**用途 / Purpose:** 读取并返回当前对象中 「arm length」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetArmLength();
```

### GetArmWeight
`public float GetArmWeight()`

**用途 / Purpose:** 读取并返回当前对象中 「arm weight」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetArmWeight();
```

### GetRunningSimulationDataUntilMaximumSpeedReached
`public void GetRunningSimulationDataUntilMaximumSpeedReached(ref float combatAccelerationTime, ref float maxSpeed, float speedValues)`

**用途 / Purpose:** 读取并返回当前对象中 「running simulation data until maximum speed reached」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.GetRunningSimulationDataUntilMaximumSpeedReached(combatAccelerationTime, maxSpeed, 0);
```

### SetMaximumSpeedLimit
`public void SetMaximumSpeedLimit(float maximumSpeedLimit, bool isMultiplier)`

**用途 / Purpose:** 为 「maximum speed limit」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetMaximumSpeedLimit(0, false);
```

### GetBaseArmorEffectivenessForBodyPart
`public float GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType bodyPart)`

**用途 / Purpose:** 读取并返回当前对象中 「base armor effectiveness for body part」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetBaseArmorEffectivenessForBodyPart(bodyPart);
```

### GetLastTargetVisibilityState
`public AITargetVisibilityState GetLastTargetVisibilityState()`

**用途 / Purpose:** 读取并返回当前对象中 「last target visibility state」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetLastTargetVisibilityState();
```

### GetMissileRange
`public float GetMissileRange()`

**用途 / Purpose:** 读取并返回当前对象中 「missile range」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetMissileRange();
```

### SetAgentIdleAnimationStatus
`public void SetAgentIdleAnimationStatus(bool idleEnabled)`

**用途 / Purpose:** 为 「agent idle animation status」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAgentIdleAnimationStatus(false);
```

### GetWeaponToReplaceOnQuickAction
`public ItemObject GetWeaponToReplaceOnQuickAction(SpawnedItemEntity spawnedItem, out EquipmentIndex possibleSlotIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon to replace on quick action」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetWeaponToReplaceOnQuickAction(spawnedItem, possibleSlotIndex);
```

### GetAssistingHitter
`public Agent.Hitter GetAssistingHitter(MissionPeer killerPeer)`

**用途 / Purpose:** 读取并返回当前对象中 「assisting hitter」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetAssistingHitter(killerPeer);
```

### CanReachAgent
`public bool CanReachAgent(Agent otherAgent)`

**用途 / Purpose:** 检查当前对象是否满足 「reach agent」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanReachAgent(otherAgent);
```

### CanInteractWithAgent
`public bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)`

**用途 / Purpose:** 检查当前对象是否满足 「interact with agent」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanInteractWithAgent(otherAgent, 0);
```

### CanBeAssignedForScriptedMovement
`public bool CanBeAssignedForScriptedMovement()`

**用途 / Purpose:** 检查当前对象是否满足 「be assigned for scripted movement」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanBeAssignedForScriptedMovement();
```

### CanReachAndUseObject
`public bool CanReachAndUseObject(UsableMissionObject gameObject, float distanceSq)`

**用途 / Purpose:** 检查当前对象是否满足 「reach and use object」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanReachAndUseObject(gameObject, 0);
```

### CanReachObject
`public bool CanReachObject(UsableMissionObject gameObject, float distanceSq)`

**用途 / Purpose:** 检查当前对象是否满足 「reach object」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanReachObject(gameObject, 0);
```

### CanReachObjectFromPosition
`public bool CanReachObjectFromPosition(UsableMissionObject gameObject, float distanceSq, Vec3 position)`

**用途 / Purpose:** 检查当前对象是否满足 「reach object from position」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanReachObjectFromPosition(gameObject, 0, position);
```

### CanUseObject
`public bool CanUseObject(UsableMissionObject gameObject)`

**用途 / Purpose:** 检查当前对象是否满足 「use object」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanUseObject(gameObject);
```

### CanMoveDirectlyToPosition
`public bool CanMoveDirectlyToPosition(in Vec2 position)`

**用途 / Purpose:** 检查当前对象是否满足 「move directly to position」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanMoveDirectlyToPosition(position);
```

### CanInteractableWeaponBePickedUp
`public bool CanInteractableWeaponBePickedUp(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 检查当前对象是否满足 「interactable weapon be picked up」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanInteractableWeaponBePickedUp(spawnedItem);
```

### CanQuickPickUp
`public bool CanQuickPickUp(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 检查当前对象是否满足 「quick pick up」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanQuickPickUp(spawnedItem);
```

### CanTeleport
`public unsafe bool CanTeleport()`

**用途 / Purpose:** 检查当前对象是否满足 「teleport」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanTeleport();
```

### IsActive
`public bool IsActive()`

**用途 / Purpose:** 判断当前对象是否处于 「active」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsActive();
```

### IsRetreating
`public bool IsRetreating()`

**用途 / Purpose:** 判断当前对象是否处于 「retreating」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsRetreating();
```

### IsFadingOut
`public bool IsFadingOut()`

**用途 / Purpose:** 判断当前对象是否处于 「fading out」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsFadingOut();
```

### SetAgentDrivenPropertyValueFromConsole
`public void SetAgentDrivenPropertyValueFromConsole(DrivenProperty type, float val)`

**用途 / Purpose:** 为 「agent driven property value from console」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetAgentDrivenPropertyValueFromConsole(type, 0);
```

### IsOnLand
`public bool IsOnLand()`

**用途 / Purpose:** 判断当前对象是否处于 「on land」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsOnLand();
```

### IsInWater
`public bool IsInWater()`

**用途 / Purpose:** 判断当前对象是否处于 「in water」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsInWater();
```

### IsAbleToUseMachine
`public bool IsAbleToUseMachine()`

**用途 / Purpose:** 判断当前对象是否处于 「able to use machine」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsAbleToUseMachine();
```

### IsAgentParentEntitySameAs
`public bool IsAgentParentEntitySameAs(GameEntity toBeChecked)`

**用途 / Purpose:** 判断当前对象是否处于 「agent parent entity same as」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsAgentParentEntitySameAs(toBeChecked);
```

### SetExcludedFromGravity
`public void SetExcludedFromGravity(bool exclude, bool applyAverageGlobalVelocity)`

**用途 / Purpose:** 为 「excluded from gravity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetExcludedFromGravity(false, false);
```

### SetForceAttachedEntity
`public void SetForceAttachedEntity(WeakGameEntity willBeAttached)`

**用途 / Purpose:** 为 「force attached entity」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetForceAttachedEntity(willBeAttached);
```

### IsSliding
`public bool IsSliding()`

**用途 / Purpose:** 判断当前对象是否处于 「sliding」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsSliding();
```

### IsSitting
`public bool IsSitting()`

**用途 / Purpose:** 判断当前对象是否处于 「sitting」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsSitting();
```

### IsReleasingChainAttackInMultiplayer
`public bool IsReleasingChainAttackInMultiplayer()`

**用途 / Purpose:** 判断当前对象是否处于 「releasing chain attack in multiplayer」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsReleasingChainAttackInMultiplayer();
```

### IsCameraAttachable
`public bool IsCameraAttachable()`

**用途 / Purpose:** 判断当前对象是否处于 「camera attachable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsCameraAttachable();
```

### IsSynchedPrefabComponentVisible
`public bool IsSynchedPrefabComponentVisible(int componentIndex)`

**用途 / Purpose:** 判断当前对象是否处于 「synched prefab component visible」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsSynchedPrefabComponentVisible(0);
```

### IsEnemyOf
`public bool IsEnemyOf(Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「enemy of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsEnemyOf(otherAgent);
```

### IsFriendOf
`public bool IsFriendOf(Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「friend of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsFriendOf(otherAgent);
```

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 在 「focus gain」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 在 「focus lose」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnFocusLose(userAgent);
```

### OnItemRemovedFromScene
`public void OnItemRemovedFromScene()`

**用途 / Purpose:** 在 「item removed from scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnItemRemovedFromScene();
```

### OnUse
`public void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnUse(userAgent, 0);
```

### OnUseStopped
`public void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnUseStopped(userAgent, false, 0);
```

### OnWeaponDrop
`public void OnWeaponDrop(EquipmentIndex equipmentSlot)`

**用途 / Purpose:** 在 「weapon drop」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnWeaponDrop(equipmentSlot);
```

### OnItemPickup
`public void OnItemPickup(SpawnedItemEntity spawnedItemEntity, EquipmentIndex weaponPickUpSlotIndex, out bool removeWeapon)`

**用途 / Purpose:** 在 「item pickup」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnItemPickup(spawnedItemEntity, weaponPickUpSlotIndex, removeWeapon);
```

### GetDistanceTo
`public float GetDistanceTo(Agent other)`

**用途 / Purpose:** 读取并返回当前对象中 「distance to」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetDistanceTo(other);
```

### CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection
`public bool CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(int navigationFaceId, in Vec3 direction, float overridenCostForFaceId)`

**用途 / Purpose:** 检查「path to a i target agent passes through navigation face id from direction」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(0, direction, 0);
```

### IsTargetNavigationFaceIdBetween
`public bool IsTargetNavigationFaceIdBetween(int navigationFaceIdStart, int navigationFaceIdEnd)`

**用途 / Purpose:** 判断当前对象是否处于 「target navigation face id between」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsTargetNavigationFaceIdBetween(0, 0);
```

### CheckEquipmentForCapeClothSimulationStateChange
`public void CheckEquipmentForCapeClothSimulationStateChange()`

**用途 / Purpose:** 检查「equipment for cape cloth simulation state change」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.CheckEquipmentForCapeClothSimulationStateChange();
```

### CheckToDropFlaggedItem
`public void CheckToDropFlaggedItem()`

**用途 / Purpose:** 检查「to drop flagged item」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.CheckToDropFlaggedItem();
```

### CheckSkillForMounting
`public bool CheckSkillForMounting(Agent mountAgent)`

**用途 / Purpose:** 检查「skill for mounting」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CheckSkillForMounting(mountAgent);
```

### InitializeSpawnEquipment
`public void InitializeSpawnEquipment(Equipment spawnEquipment)`

**用途 / Purpose:** 为 「spawn equipment」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.InitializeSpawnEquipment(spawnEquipment);
```

### InitializeMissionEquipment
`public void InitializeMissionEquipment(MissionEquipment missionEquipment, Banner banner)`

**用途 / Purpose:** 为 「mission equipment」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.InitializeMissionEquipment(missionEquipment, banner);
```

### InitializeAgentProperties
`public void InitializeAgentProperties(Equipment spawnEquipment, AgentBuildData agentBuildData)`

**用途 / Purpose:** 为 「agent properties」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.InitializeAgentProperties(spawnEquipment, agentBuildData);
```

### UpdateFormationOrders
`public void UpdateFormationOrders()`

**用途 / Purpose:** 重新计算并更新 「formation orders」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateFormationOrders();
```

### UpdateWeapons
`public void UpdateWeapons()`

**用途 / Purpose:** 重新计算并更新 「weapons」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateWeapons();
```

### UpdateAgentProperties
`public void UpdateAgentProperties()`

**用途 / Purpose:** 重新计算并更新 「agent properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateAgentProperties();
```

### UpdateCustomDrivenProperties
`public void UpdateCustomDrivenProperties()`

**用途 / Purpose:** 重新计算并更新 「custom driven properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateCustomDrivenProperties();
```

### UpdateBodyProperties
`public void UpdateBodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 重新计算并更新 「body properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateBodyProperties(bodyProperties);
```

### UpdateSyncHealthToAllClients
`public void UpdateSyncHealthToAllClients(bool value)`

**用途 / Purpose:** 重新计算并更新 「sync health to all clients」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateSyncHealthToAllClients(false);
```

### UpdateSpawnEquipmentAndRefreshVisuals
`public void UpdateSpawnEquipmentAndRefreshVisuals(Equipment newSpawnEquipment)`

**用途 / Purpose:** 重新计算并更新 「spawn equipment and refresh visuals」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateSpawnEquipmentAndRefreshVisuals(newSpawnEquipment);
```

### ForceUpdateCachedAndFormationValues
`public void ForceUpdateCachedAndFormationValues(bool updateOnlyMovement, bool arrangementChangeAllowed)`

**用途 / Purpose:** 处理与 「force update cached and formation values」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ForceUpdateCachedAndFormationValues(false, false);
```

### UpdateLastRangedAttackTimeDueToAnAttack
`public void UpdateLastRangedAttackTimeDueToAnAttack(float newTime)`

**用途 / Purpose:** 重新计算并更新 「last ranged attack time due to an attack」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateLastRangedAttackTimeDueToAnAttack(0);
```

### InvalidateTargetAgent
`public void InvalidateTargetAgent()`

**用途 / Purpose:** 处理与 「invalidate target agent」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.InvalidateTargetAgent();
```

### InvalidateAIWeaponSelections
`public void InvalidateAIWeaponSelections()`

**用途 / Purpose:** 处理与 「invalidate ai weapon selections」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.InvalidateAIWeaponSelections();
```

### ResetLookAgent
`public void ResetLookAgent()`

**用途 / Purpose:** 将 「look agent」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ResetLookAgent();
```

### ResetGuard
`public void ResetGuard()`

**用途 / Purpose:** 将 「guard」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ResetGuard();
```

### ResetAgentProperties
`public void ResetAgentProperties()`

**用途 / Purpose:** 将 「agent properties」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ResetAgentProperties();
```

### ResetAiWaitBeforeShootFactor
`public void ResetAiWaitBeforeShootFactor()`

**用途 / Purpose:** 将 「ai wait before shoot factor」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ResetAiWaitBeforeShootFactor();
```

### ClearTargetFrame
`public void ClearTargetFrame()`

**用途 / Purpose:** 清空当前对象中的「target frame」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ClearTargetFrame();
```

### ClearEquipment
`public void ClearEquipment()`

**用途 / Purpose:** 清空当前对象中的「equipment」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ClearEquipment();
```

### ClearHandInverseKinematics
`public void ClearHandInverseKinematics()`

**用途 / Purpose:** 清空当前对象中的「hand inverse kinematics」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ClearHandInverseKinematics();
```

### ClearAttachedWeapons
`public void ClearAttachedWeapons()`

**用途 / Purpose:** 清空当前对象中的「attached weapons」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ClearAttachedWeapons();
```

### SetDetachableFromFormation
`public void SetDetachableFromFormation(bool value)`

**用途 / Purpose:** 为 「detachable from formation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetDetachableFromFormation(false);
```

### UndetachAndAttachToFormation
`public void UndetachAndAttachToFormation(bool removeDetachmentScores = true)`

**用途 / Purpose:** 处理与 「undetach and attach to formation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UndetachAndAttachToFormation(false);
```

### UndetachAndStopUsingObjects
`public void UndetachAndStopUsingObjects(bool removeDetachmentScores = true)`

**用途 / Purpose:** 处理与 「undetach and stop using objects」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UndetachAndStopUsingObjects(false);
```

### EnforceShieldUsage
`public void EnforceShieldUsage(Agent.UsageDirection shieldDirection)`

**用途 / Purpose:** 处理与 「enforce shield usage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.EnforceShieldUsage(shieldDirection);
```

### ObjectHasVacantPosition
`public bool ObjectHasVacantPosition(UsableMissionObject gameObject)`

**用途 / Purpose:** 处理与 「object has vacant position」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.ObjectHasVacantPosition(gameObject);
```

### InteractingWithAnyGameObject
`public bool InteractingWithAnyGameObject()`

**用途 / Purpose:** 处理与 「interacting with any game object」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.InteractingWithAnyGameObject();
```

### StopUsingGameObjectMT
`public void StopUsingGameObjectMT(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**用途 / Purpose:** 停止「using game object m t」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.StopUsingGameObjectMT(false, agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject);
```

### StopUsingGameObject
`public void StopUsingGameObject(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**用途 / Purpose:** 停止「using game object」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.StopUsingGameObject(false, agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject);
```

### HandleStopUsingAction
`public void HandleStopUsingAction()`

**用途 / Purpose:** 执行与 「stop using action」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.HandleStopUsingAction();
```

### HandleStartUsingAction
`public void HandleStartUsingAction(UsableMissionObject targetObject, int preferenceIndex)`

**用途 / Purpose:** 执行与 「start using action」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.HandleStartUsingAction(targetObject, 0);
```

### AddController
`public AgentController AddController(Type type)`

**用途 / Purpose:** 将 「controller」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.AddController(type);
```

### RemoveController
`public AgentController RemoveController(Type type)`

**用途 / Purpose:** 从当前容器或状态中移除 「controller」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.RemoveController(type);
```

### CanThrustAttackStickToBone
`public bool CanThrustAttackStickToBone(BoneBodyPartType bodyPart)`

**用途 / Purpose:** 检查当前对象是否满足 「thrust attack stick to bone」 的前置条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.CanThrustAttackStickToBone(bodyPart);
```

### GetOldWieldedItemInfo
`public void GetOldWieldedItemInfo(out int rightHandSlotIndex, out int rightHandUsageIndex, out int leftHandSlotIndex, out int leftHandUsageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「old wielded item info」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.GetOldWieldedItemInfo(rightHandSlotIndex, rightHandUsageIndex, leftHandSlotIndex, leftHandUsageIndex);
```

### StartSwitchingWeaponUsageIndexAsClient
`public void StartSwitchingWeaponUsageIndexAsClient(EquipmentIndex equipmentIndex, int usageIndex, Agent.UsageDirection currentMovementFlagUsageDirection)`

**用途 / Purpose:** 启动「switching weapon usage index as client」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.StartSwitchingWeaponUsageIndexAsClient(equipmentIndex, 0, currentMovementFlagUsageDirection);
```

### TryToWieldWeaponInSlot
`public void TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)`

**用途 / Purpose:** 尝试获取 「to wield weapon in slot」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.TryToWieldWeaponInSlot(slotIndex, type, false);
```

### PrepareWeaponForDropInEquipmentSlot
`public void PrepareWeaponForDropInEquipmentSlot(EquipmentIndex slotIndex, bool dropWithHolster)`

**用途 / Purpose:** 为即将执行的「weapon for drop in equipment slot」操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.PrepareWeaponForDropInEquipmentSlot(slotIndex, false);
```

### AddHitter
`public void AddHitter(MissionPeer peer, float damage, bool isFriendlyHit)`

**用途 / Purpose:** 将 「hitter」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.AddHitter(peer, 0, false);
```

### TryToSheathWeaponInHand
`public void TryToSheathWeaponInHand(Agent.HandIndex handIndex, Agent.WeaponWieldActionType type)`

**用途 / Purpose:** 尝试获取 「to sheath weapon in hand」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.TryToSheathWeaponInHand(handIndex, type);
```

### RemoveHitter
`public void RemoveHitter(MissionPeer peer, bool isFriendlyHit)`

**用途 / Purpose:** 从当前容器或状态中移除 「hitter」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.RemoveHitter(peer, false);
```

### Retreat
`public void Retreat(WorldPosition retreatPos)`

**用途 / Purpose:** 处理与 「retreat」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.Retreat(retreatPos);
```

### StopRetreating
`public void StopRetreating()`

**用途 / Purpose:** 停止「retreating」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.StopRetreating();
```

### UseGameObject
`public void UseGameObject(UsableMissionObject usedObject, int preferenceIndex = -1)`

**用途 / Purpose:** 处理与 「use game object」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UseGameObject(usedObject, 0);
```

### SaveEquipmentsOnHand
`public void SaveEquipmentsOnHand()`

**用途 / Purpose:** 将 「equipments on hand」 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SaveEquipmentsOnHand();
```

### StartFadingOut
`public void StartFadingOut()`

**用途 / Purpose:** 启动「fading out」流程或状态机。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.StartFadingOut();
```

### IsWandering
`public bool IsWandering()`

**用途 / Purpose:** 判断当前对象是否处于 「wandering」 状态或条件。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.IsWandering();
```

### SetRenderCheckEnabled
`public void SetRenderCheckEnabled(bool value)`

**用途 / Purpose:** 为 「render check enabled」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetRenderCheckEnabled(false);
```

### GetRenderCheckEnabled
`public bool GetRenderCheckEnabled()`

**用途 / Purpose:** 读取并返回当前对象中 「render check enabled」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetRenderCheckEnabled();
```

### ComputeAnimationDisplacement
`public Vec3 ComputeAnimationDisplacement(float dt)`

**用途 / Purpose:** 处理与 「compute animation displacement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.ComputeAnimationDisplacement(0);
```

### TickActionChannels
`public void TickActionChannels(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「action channels」的状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.TickActionChannels(0);
```

### LockAgentReplicationTableDataWithCurrentReliableSequenceNo
`public void LockAgentReplicationTableDataWithCurrentReliableSequenceNo(NetworkCommunicator peer)`

**用途 / Purpose:** 处理与 「lock agent replication table data with current reliable sequence no」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.LockAgentReplicationTableDataWithCurrentReliableSequenceNo(peer);
```

### TeleportToPosition
`public void TeleportToPosition(Vec3 position)`

**用途 / Purpose:** 处理与 「teleport to position」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.TeleportToPosition(position);
```

### FadeOut
`public void FadeOut(bool hideInstantly, bool hideMount)`

**用途 / Purpose:** 处理与 「fade out」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.FadeOut(false, false);
```

### FadeIn
`public void FadeIn()`

**用途 / Purpose:** 处理与 「fade in」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.FadeIn();
```

### DisableScriptedMovement
`public void DisableScriptedMovement()`

**用途 / Purpose:** 处理与 「disable scripted movement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.DisableScriptedMovement();
```

### DisableScriptedCombatMovement
`public void DisableScriptedCombatMovement()`

**用途 / Purpose:** 处理与 「disable scripted combat movement」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.DisableScriptedCombatMovement();
```

### ForceAiBehaviorSelection
`public void ForceAiBehaviorSelection()`

**用途 / Purpose:** 处理与 「force ai behavior selection」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ForceAiBehaviorSelection();
```

### HasPathThroughNavigationFaceIdFromDirectionMT
`public bool HasPathThroughNavigationFaceIdFromDirectionMT(int navigationFaceId, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否已经持有 「path through navigation face id from direction m t」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasPathThroughNavigationFaceIdFromDirectionMT(0, direction);
```

### HasPathThroughNavigationFaceIdFromDirection
`public bool HasPathThroughNavigationFaceIdFromDirection(int navigationFaceId, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否已经持有 「path through navigation face id from direction」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasPathThroughNavigationFaceIdFromDirection(0, direction);
```

### DisableLookToPointOfInterest
`public void DisableLookToPointOfInterest()`

**用途 / Purpose:** 处理与 「disable look to point of interest」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.DisableLookToPointOfInterest();
```

### AddPrefabComponentToBone
`public CompositeComponent AddPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**用途 / Purpose:** 将 「prefab component to bone」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.AddPrefabComponentToBone("example", 0);
```

### MakeVoice
`public void MakeVoice(SkinVoiceManager.SkinVoiceType voiceType, SkinVoiceManager.CombatVoiceNetworkPredictionType predictionType)`

**用途 / Purpose:** 处理与 「make voice」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.MakeVoice(voiceType, predictionType);
```

### YellAfterDelay
`public void YellAfterDelay(float delayTimeInSecond)`

**用途 / Purpose:** 处理与 「yell after delay」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.YellAfterDelay(0);
```

### WieldNextWeapon
`public void WieldNextWeapon(Agent.HandIndex weaponIndex, Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.WithAnimation)`

**用途 / Purpose:** 处理与 「wield next weapon」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.WieldNextWeapon(weaponIndex, agent.WeaponWieldActionType.WithAnimation);
```

### AttackDirectionToMovementFlag
`public Agent.MovementControlFlag AttackDirectionToMovementFlag(Agent.UsageDirection direction)`

**用途 / Purpose:** 处理与 「attack direction to movement flag」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.AttackDirectionToMovementFlag(direction);
```

### DefendDirectionToMovementFlag
`public Agent.MovementControlFlag DefendDirectionToMovementFlag(Agent.UsageDirection direction)`

**用途 / Purpose:** 处理与 「defend direction to movement flag」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.DefendDirectionToMovementFlag(direction);
```

### KickClear
`public bool KickClear()`

**用途 / Purpose:** 处理与 「kick clear」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.KickClear();
```

### PlayerAttackDirection
`public Agent.UsageDirection PlayerAttackDirection()`

**用途 / Purpose:** 处理与 「player attack direction」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.PlayerAttackDirection();
```

### GetRandomPairOfRealBloodBurstBoneIndices
`public ValueTuple<sbyte, sbyte> GetRandomPairOfRealBloodBurstBoneIndices()`

**用途 / Purpose:** 读取并返回当前对象中 「random pair of real blood burst bone indices」 的结果。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetRandomPairOfRealBloodBurstBoneIndices();
```

### CreateBloodBurstAtLimb
`public void CreateBloodBurstAtLimb(sbyte realBoneIndex, float scale)`

**用途 / Purpose:** 构建一个新的 「blood burst at limb」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.CreateBloodBurstAtLimb(0, 0);
```

### AddComponent
`public void AddComponent(AgentComponent agentComponent)`

**用途 / Purpose:** 将 「component」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.AddComponent(agentComponent);
```

### RemoveComponent
`public bool RemoveComponent(AgentComponent agentComponent)`

**用途 / Purpose:** 从当前容器或状态中移除 「component」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.RemoveComponent(agentComponent);
```

### HandleTaunt
`public void HandleTaunt(int tauntIndex, bool isDefaultTaunt)`

**用途 / Purpose:** 执行与 「taunt」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.HandleTaunt(0, false);
```

### HandleBark
`public void HandleBark(int indexOfBark)`

**用途 / Purpose:** 执行与 「bark」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.HandleBark(0);
```

### HandleDropWeapon
`public void HandleDropWeapon(bool isDefendPressed, EquipmentIndex forcedSlotIndexToDropWeaponFrom)`

**用途 / Purpose:** 执行与 「drop weapon」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.HandleDropWeapon(false, forcedSlotIndexToDropWeaponFrom);
```

### DropItem
`public void DropItem(EquipmentIndex itemIndex, WeaponClass pickedUpItemType = WeaponClass.Undefined)`

**用途 / Purpose:** 处理与 「drop item」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.DropItem(itemIndex, weaponClass.Undefined);
```

### EquipItemsFromSpawnEquipment
`public void EquipItemsFromSpawnEquipment(bool neededBatchedItems)`

**用途 / Purpose:** 处理与 「equip items from spawn equipment」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.EquipItemsFromSpawnEquipment(false);
```

### WieldInitialWeapons
`public void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.InstantAfterPickUp, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = TaleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any)`

**用途 / Purpose:** 处理与 「wield initial weapons」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.WieldInitialWeapons(agent.WeaponWieldActionType.InstantAfterPickUp, taleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any);
```

### ChangeWeaponHitPoints
`public void ChangeWeaponHitPoints(EquipmentIndex slotIndex, short hitPoints)`

**用途 / Purpose:** 处理与 「change weapon hit points」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ChangeWeaponHitPoints(slotIndex, 0);
```

### HasWeapon
`public bool HasWeapon()`

**用途 / Purpose:** 判断当前对象是否已经持有 「weapon」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasWeapon();
```

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(EquipmentIndex slotIndex, MissionWeapon weapon, GameEntity weaponEntity, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理与 「attach weapon to weapon」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.AttachWeaponToWeapon(slotIndex, weapon, weaponEntity, attachLocalFrame);
```

### AttachWeaponToBone
`public void AttachWeaponToBone(MissionWeapon weapon, GameEntity weaponEntity, sbyte boneIndex, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理与 「attach weapon to bone」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.AttachWeaponToBone(weapon, weaponEntity, 0, attachLocalFrame);
```

### RestoreShieldHitPoints
`public void RestoreShieldHitPoints()`

**用途 / Purpose:** 处理与 「restore shield hit points」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.RestoreShieldHitPoints();
```

### Die
`public void Die(Blow b, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)`

**用途 / Purpose:** 处理与 「die」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.Die(b, agent.KillInfo.Invalid);
```

### MakeDead
`public void MakeDead(bool isKilled, ActionIndexCache actionIndex, int corpsesToFadeIndex = -1)`

**用途 / Purpose:** 处理与 「make dead」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.MakeDead(false, actionIndex, 0);
```

### RegisterBlow
`public void RegisterBlow(Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 将「blow」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.RegisterBlow(blow, collisionData);
```

### CreateBlowFromBlowAsReflection
`public void CreateBlowFromBlowAsReflection(in Blow blow, in AttackCollisionData collisionData, out Blow outBlow, out AttackCollisionData outCollisionData)`

**用途 / Purpose:** 构建一个新的 「blow from blow as reflection」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.CreateBlowFromBlowAsReflection(blow, collisionData, outBlow, outCollisionData);
```

### TickParallel
`public void TickParallel(float dt)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「parallel」的状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.TickParallel(0);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.Tick(0);
```

### DebugMore
`public void DebugMore()`

**用途 / Purpose:** 处理与 「debug more」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.DebugMore();
```

### Mount
`public void Mount(Agent mountAgent)`

**用途 / Purpose:** 处理与 「mount」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.Mount(mountAgent);
```

### EquipWeaponToExtraSlotAndWield
`public void EquipWeaponToExtraSlotAndWield(ref MissionWeapon weapon)`

**用途 / Purpose:** 处理与 「equip weapon to extra slot and wield」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.EquipWeaponToExtraSlotAndWield(weapon);
```

### RemoveEquippedWeapon
`public void RemoveEquippedWeapon(EquipmentIndex slotIndex)`

**用途 / Purpose:** 从当前容器或状态中移除 「equipped weapon」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.RemoveEquippedWeapon(slotIndex);
```

### EquipWeaponWithNewEntity
`public void EquipWeaponWithNewEntity(EquipmentIndex slotIndex, ref MissionWeapon weapon)`

**用途 / Purpose:** 处理与 「equip weapon with new entity」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.EquipWeaponWithNewEntity(slotIndex, weapon);
```

### EquipWeaponFromSpawnedItemEntity
`public void EquipWeaponFromSpawnedItemEntity(EquipmentIndex slotIndex, SpawnedItemEntity spawnedItemEntity, bool removeWeapon)`

**用途 / Purpose:** 处理与 「equip weapon from spawned item entity」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.EquipWeaponFromSpawnedItemEntity(slotIndex, spawnedItemEntity, false);
```

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 处理与 「preload for rendering」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.PreloadForRendering();
```

### AddSynchedPrefabComponentToBone
`public int AddSynchedPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**用途 / Purpose:** 将 「synched prefab component to bone」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.AddSynchedPrefabComponentToBone("example", 0);
```

### WillDropWieldedShield
`public bool WillDropWieldedShield(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 处理与 「will drop wielded shield」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.WillDropWieldedShield(spawnedItem);
```

### HadSameTypeOfConsumableOrShieldOnSpawn
`public bool HadSameTypeOfConsumableOrShieldOnSpawn(WeaponClass weaponClass)`

**用途 / Purpose:** 处理与 「had same type of consumable or shield on spawn」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HadSameTypeOfConsumableOrShieldOnSpawn(weaponClass);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.GetHashCode();
```

### TryGetImmediateEnemyAgentMovementData
`public bool TryGetImmediateEnemyAgentMovementData(out float maximumForwardUnlimitedSpeed, out Vec3 position)`

**用途 / Purpose:** 尝试获取 「get immediate enemy agent movement data」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.TryGetImmediateEnemyAgentMovementData(maximumForwardUnlimitedSpeed, position);
```

### HasLostShield
`public bool HasLostShield()`

**用途 / Purpose:** 判断当前对象是否已经持有 「lost shield」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasLostShield();
```

### SetLastDetachmentTickAgentTime
`public void SetLastDetachmentTickAgentTime(float lastDetachmentTickAgentTime)`

**用途 / Purpose:** 为 「last detachment tick agent time」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetLastDetachmentTickAgentTime(0);
```

### SetDetachmentWeight
`public void SetDetachmentWeight(float newDetachmentWeight)`

**用途 / Purpose:** 为 「detachment weight」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetDetachmentWeight(0);
```

### SetDetachmentIndex
`public void SetDetachmentIndex(int newDetachmentIndex)`

**用途 / Purpose:** 为 「detachment index」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetDetachmentIndex(0);
```

### SetOwningAgentMissionPeer
`public void SetOwningAgentMissionPeer(MissionPeer owningAgentMissionPeer)`

**用途 / Purpose:** 为 「owning agent mission peer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetOwningAgentMissionPeer(owningAgentMissionPeer);
```

### SetMissionRepresentative
`public void SetMissionRepresentative(MissionRepresentativeBase missionRepresentative)`

**用途 / Purpose:** 为 「mission representative」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetMissionRepresentative(missionRepresentative);
```

### SetIsLadderQueueUsing
`public void SetIsLadderQueueUsing(bool isLadderQueueUsing)`

**用途 / Purpose:** 为 「is ladder queue using」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetIsLadderQueueUsing(false);
```

### SetIsInLadderQueue
`public void SetIsInLadderQueue(bool isInLadderQueue)`

**用途 / Purpose:** 为 「is in ladder queue」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetIsInLadderQueue(false);
```

### UpdateLocalPositionError
`public void UpdateLocalPositionError()`

**用途 / Purpose:** 重新计算并更新 「local position error」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.UpdateLocalPositionError();
```

### YellingBehaviour
`public void YellingBehaviour()`

**用途 / Purpose:** 处理与 「yelling behaviour」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.YellingBehaviour();
```

### HasPathThroughNavigationFacesIDFromDirection
`public bool HasPathThroughNavigationFacesIDFromDirection(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否已经持有 「path through navigation faces i d from direction」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasPathThroughNavigationFacesIDFromDirection(0, 0, 0, direction);
```

### HasPathThroughNavigationFacesIDFromDirectionMT
`public bool HasPathThroughNavigationFacesIDFromDirectionMT(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否已经持有 「path through navigation faces i d from direction m t」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
var result = agent.HasPathThroughNavigationFacesIDFromDirectionMT(0, 0, 0, direction);
```

### SetInitialFrame
`public void SetInitialFrame(in Vec3 initialPosition, in Vec2 initialDirection, bool canSpawnOutsideOfMissionBoundary = false)`

**用途 / Purpose:** 为 「initial frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.SetInitialFrame(initialPosition, initialDirection, false);
```

### ClearTargetZ
`public void ClearTargetZ()`

**用途 / Purpose:** 清空当前对象中的「target z」。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.ClearTargetZ();
```

### MovementFlagToDirection
`public static Agent.UsageDirection MovementFlagToDirection(Agent.MovementControlFlag flag)`

**用途 / Purpose:** 移动「ment flag to direction」到新的位置或状态。

```csharp
// 静态调用，不需要实例
Agent.MovementFlagToDirection(flag);
```

### GetActionDirection
`public static Agent.UsageDirection GetActionDirection(int actionIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「action direction」 的结果。

```csharp
// 静态调用，不需要实例
Agent.GetActionDirection(0);
```

### GetMonsterUsageIndex
`public static int GetMonsterUsageIndex(string monsterUsage)`

**用途 / Purpose:** 读取并返回当前对象中 「monster usage index」 的结果。

```csharp
// 静态调用，不需要实例
Agent.GetMonsterUsageIndex("example");
```

### IncreaseDamage
`public void IncreaseDamage(float amount)`

**用途 / Purpose:** 处理与 「increase damage」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.IncreaseDamage(0);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.Initialize();
```

### RegisterLastBlow
`public void RegisterLastBlow(int ownerId, AgentAttackType attackType)`

**用途 / Purpose:** 将「last blow」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.RegisterLastBlow(0, attackType);
```

### OnAgentHealthChangedDelegate
`public delegate void OnAgentHealthChangedDelegate(Agent agent, float oldHealth, float newHealth)`

**用途 / Purpose:** 在 「agent health changed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnAgentHealthChangedDelegate(agent, 0, 0);
```

### OnMountHealthChangedDelegate
`public delegate void OnMountHealthChangedDelegate(Agent agent, Agent mount, float oldHealth, float newHealth)`

**用途 / Purpose:** 在 「mount health changed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnMountHealthChangedDelegate(agent, mount, 0, 0);
```

### OnMainAgentWieldedItemChangeDelegate
`public delegate void OnMainAgentWieldedItemChangeDelegate()`

**用途 / Purpose:** 在 「main agent wielded item change delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Agent 实例
Agent agent = ...;
agent.OnMainAgentWieldedItemChangeDelegate();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Agent agent = ...;
agent.GetHasOnAiInputSetCallback();
```

## 参见

- [本区域目录](../)