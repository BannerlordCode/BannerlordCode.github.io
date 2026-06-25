---
title: "Agent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Agent`
- [← 本领域 / 返回 mission](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/Agent](/versions/Agent)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `has on ai input set callback` 的当前值。

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value)`

**用途 / Purpose:** 设置 `has on ai input set callback` 的值或状态。

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ)`

**用途 / Purpose:** 获取 `missile range with height difference aux` 的当前值。

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName()`

**用途 / Purpose:** 获取 `sound and collision info class name` 的当前值。

### UpdateAgentStats
`public void UpdateAgentStats()`

**用途 / Purpose:** 更新 `agent stats` 的状态或数据。

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)`

**用途 / Purpose:** 获取 `weapon inaccuracy` 的当前值。

### DebugGetHealth
`public float DebugGetHealth()`

**用途 / Purpose:** 处理 `debug get health` 相关逻辑。

### SetTargetPosition
`public void SetTargetPosition(Vec2 value)`

**用途 / Purpose:** 设置 `target position` 的值或状态。

### SetTargetZ
`public void SetTargetZ(float targetZ)`

**用途 / Purpose:** 设置 `target z` 的值或状态。

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp)`

**用途 / Purpose:** 设置 `target up` 的值或状态。

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value)`

**用途 / Purpose:** 设置 `can lead formations remotely` 的值或状态。

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)`

**用途 / Purpose:** 设置 `average ping in milliseconds` 的值或状态。

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)`

**用途 / Purpose:** 设置 `target position and direction` 的值或状态。

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration)`

**用途 / Purpose:** 向当前集合/状态中添加 `acceleration`。

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction)`

**用途 / Purpose:** 设置 `weapon guard` 的值或状态。

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState)`

**用途 / Purpose:** 设置 `watch state` 的值或状态。

### IsAlarmStateNormal
`public bool IsAlarmStateNormal()`

**用途 / Purpose:** 处理 `is alarm state normal` 相关逻辑。

### IsCautious
`public bool IsCautious()`

**用途 / Purpose:** 处理 `is cautious` 相关逻辑。

### IsPatrollingCautious
`public bool IsPatrollingCautious()`

**用途 / Purpose:** 处理 `is patrolling cautious` 相关逻辑。

### IsAlarmed
`public bool IsAlarmed()`

**用途 / Purpose:** 处理 `is alarmed` 相关逻辑。

### SetAlarmState
`public bool SetAlarmState(Agent.AIStateFlag alarmStateFlag)`

**用途 / Purpose:** 设置 `alarm state` 的值或状态。

### SetTargetFormationIndex
`public void SetTargetFormationIndex(int targetFormationIndex)`

**用途 / Purpose:** 设置 `target formation index` 的值或状态。

### StartRagdollAsCorpse
`public void StartRagdollAsCorpse()`

**用途 / Purpose:** 处理 `start ragdoll as corpse` 相关逻辑。

### EndRagdollAsCorpse
`public void EndRagdollAsCorpse()`

**用途 / Purpose:** 处理 `end ragdoll as corpse` 相关逻辑。

### IsAddedAsCorpse
`public bool IsAddedAsCorpse()`

**用途 / Purpose:** 处理 `is added as corpse` 相关逻辑。

### AddAsCorpse
`public void AddAsCorpse()`

**用途 / Purpose:** 向当前集合/状态中添加 `as corpse`。

### SetOverridenStrikeAndDeathAction
`public void SetOverridenStrikeAndDeathAction(in ActionIndexCache strikeAction, in ActionIndexCache deathAction)`

**用途 / Purpose:** 设置 `overriden strike and death action` 的值或状态。

### ApplyForceOnRagdoll
`public void ApplyForceOnRagdoll(sbyte boneIndex, in Vec3 force)`

**用途 / Purpose:** 将 `force on ragdoll` 应用到当前对象。

### SetVelocityLimitsOnRagdoll
`public void SetVelocityLimitsOnRagdoll(float linearVelocityLimit, float angularVelocityLimit)`

**用途 / Purpose:** 设置 `velocity limits on ragdoll` 的值或状态。

### GetAILastSuspiciousPosition
`public WorldPosition GetAILastSuspiciousPosition()`

**用途 / Purpose:** 获取 `a i last suspicious position` 的当前值。

### SetAILastSuspiciousPosition
`public void SetAILastSuspiciousPosition(WorldPosition lastSuspiciousPosition, bool checkNavMeshForCorrection)`

**用途 / Purpose:** 设置 `a i last suspicious position` 的值或状态。

### GetAIMoveDestination
`public WorldPosition GetAIMoveDestination()`

**用途 / Purpose:** 获取 `a i move destination` 的当前值。

### FindLongestDirectMoveToPosition
`public Vec2 FindLongestDirectMoveToPosition(Vec2 targetPosition, bool checkBoundaries, bool checkFriendlyAgents, out bool isCollidedWithAgent)`

**用途 / Purpose:** 处理 `find longest direct move to position` 相关逻辑。

### GetAIMoveStartTolerance
`public float GetAIMoveStartTolerance()`

**用途 / Purpose:** 获取 `a i move start tolerance` 的当前值。

### GetAIMoveStopTolerance
`public float GetAIMoveStopTolerance()`

**用途 / Purpose:** 获取 `a i move stop tolerance` 的当前值。

### IsAIAtMoveDestination
`public bool IsAIAtMoveDestination()`

**用途 / Purpose:** 处理 `is a i at move destination` 相关逻辑。

### SetFormationBanner
`public void SetFormationBanner(ItemObject banner)`

**用途 / Purpose:** 设置 `formation banner` 的值或状态。

### SetIsAIPaused
`public void SetIsAIPaused(bool isPaused)`

**用途 / Purpose:** 设置 `is a i paused` 的值或状态。

### ResetEnemyCaches
`public void ResetEnemyCaches()`

**用途 / Purpose:** 将 `enemy caches` 重置为初始状态。

### SetTargetPositionSynched
`public void SetTargetPositionSynched(ref Vec2 targetPosition)`

**用途 / Purpose:** 设置 `target position synched` 的值或状态。

### SetTargetPositionAndDirectionSynched
`public void SetTargetPositionAndDirectionSynched(ref Vec2 targetPosition, ref Vec3 targetDirection)`

**用途 / Purpose:** 设置 `target position and direction synched` 的值或状态。

### SetBodyArmorMaterialType
`public void SetBodyArmorMaterialType(ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType)`

**用途 / Purpose:** 设置 `body armor material type` 的值或状态。

### SetUsedGameObjectForClient
`public void SetUsedGameObjectForClient(UsableMissionObject usedObject)`

**用途 / Purpose:** 设置 `used game object for client` 的值或状态。

### SetTeam
`public void SetTeam(Team team, bool sync)`

**用途 / Purpose:** 设置 `team` 的值或状态。

### SetClothingColor1
`public void SetClothingColor1(uint color)`

**用途 / Purpose:** 设置 `clothing color1` 的值或状态。

### SetClothingColor2
`public void SetClothingColor2(uint color)`

**用途 / Purpose:** 设置 `clothing color2` 的值或状态。

### SetWieldedItemIndexAsClient
`public void SetWieldedItemIndexAsClient(Agent.HandIndex handIndex, EquipmentIndex equipmentIndex, bool isWieldedInstantly, bool isWieldedOnSpawn, int mainHandCurrentUsageIndex)`

**用途 / Purpose:** 设置 `wielded item index as client` 的值或状态。

### SetPreciseRangedAimingEnabled
`public void SetPreciseRangedAimingEnabled(bool set)`

**用途 / Purpose:** 设置 `precise ranged aiming enabled` 的值或状态。

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**用途 / Purpose:** 设置 `as conversation agent` 的值或状态。

### SetCrouchMode
`public void SetCrouchMode(bool set)`

**用途 / Purpose:** 设置 `crouch mode` 的值或状态。

### SetWeaponAmountInSlot
`public void SetWeaponAmountInSlot(EquipmentIndex equipmentSlot, short amount, bool enforcePrimaryItem)`

**用途 / Purpose:** 设置 `weapon amount in slot` 的值或状态。

### SetDraggingMode
`public void SetDraggingMode(bool set)`

**用途 / Purpose:** 设置 `dragging mode` 的值或状态。

### SetWeaponAmmoAsClient
`public void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)`

**用途 / Purpose:** 设置 `weapon ammo as client` 的值或状态。

### SetWeaponReloadPhaseAsClient
`public void SetWeaponReloadPhaseAsClient(EquipmentIndex equipmentIndex, short reloadState)`

**用途 / Purpose:** 设置 `weapon reload phase as client` 的值或状态。

### SetReloadAmmoInSlot
`public void SetReloadAmmoInSlot(EquipmentIndex equipmentIndex, EquipmentIndex ammoSlotIndex, short reloadedAmmo)`

**用途 / Purpose:** 设置 `reload ammo in slot` 的值或状态。

### SetUsageIndexOfWeaponInSlotAsClient
`public void SetUsageIndexOfWeaponInSlotAsClient(EquipmentIndex slotIndex, int usageIndex)`

**用途 / Purpose:** 设置 `usage index of weapon in slot as client` 的值或状态。

### SetRandomizeColors
`public void SetRandomizeColors(bool shouldRandomize)`

**用途 / Purpose:** 设置 `randomize colors` 的值或状态。

### SetFormationFrameDisabled
`public void SetFormationFrameDisabled()`

**用途 / Purpose:** 设置 `formation frame disabled` 的值或状态。

### SetFormationFrameEnabled
`public void SetFormationFrameEnabled(WorldPosition position, Vec2 direction, Vec2 positionVelocity, float formationDirectionEnforcingFactor)`

**用途 / Purpose:** 设置 `formation frame enabled` 的值或状态。

### SetShouldCatchUpWithFormation
`public void SetShouldCatchUpWithFormation(bool value)`

**用途 / Purpose:** 设置 `should catch up with formation` 的值或状态。

### SetFormationIntegrityData
`public void SetFormationIntegrityData(Vec2 position, Vec2 currentFormationDirection, Vec2 averageVelocityOfCloseAgents, float averageMaxUnlimitedSpeedOfCloseAgents, float deviationOfPositions, bool shouldKeepWithFormationInsteadOfMovingToAgent)`

**用途 / Purpose:** 设置 `formation integrity data` 的值或状态。

### IsCrouchingAllowed
`public bool IsCrouchingAllowed()`

**用途 / Purpose:** 处理 `is crouching allowed` 相关逻辑。

### SetCurrentActionProgress
`public void SetCurrentActionProgress(int channelNo, float progress)`

**用途 / Purpose:** 设置 `current action progress` 的值或状态。

### SetCurrentActionSpeed
`public void SetCurrentActionSpeed(int channelNo, float speed)`

**用途 / Purpose:** 设置 `current action speed` 的值或状态。

### SetActionChannel
`public bool SetActionChannel(int channelNo, in ActionIndexCache actionIndexCache, bool ignorePriority = false, AnimFlags additionalFlags = (AnimFlags)0UL, float blendWithNextActionFactor = 0f, float actionSpeed = 1f, float blendInPeriod = -0.2f, float blendOutPeriodToNoAnim = 0.4f, float startProgress = 0f, bool useLinearSmoothing = false, float blendOutPeriod = -0.2f, int actionShift = 0, bool forceFaceMorphRestart = true)`

**用途 / Purpose:** 设置 `action channel` 的值或状态。

### SetAttackState
`public void SetAttackState(int attackState)`

**用途 / Purpose:** 设置 `attack state` 的值或状态。

### SetAIBehaviorParams
`public void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**用途 / Purpose:** 设置 `a i behavior params` 的值或状态。

### SetAllBehaviorParams
`public void SetAllBehaviorParams(HumanAIComponent.BehaviorValues behaviorParams)`

**用途 / Purpose:** 设置 `all behavior params` 的值或状态。

### SetMovementDirection
`public void SetMovementDirection(in Vec2 direction)`

**用途 / Purpose:** 设置 `movement direction` 的值或状态。

### SetScriptedFlags
`public void SetScriptedFlags(Agent.AIScriptedFrameFlags flags)`

**用途 / Purpose:** 设置 `scripted flags` 的值或状态。

### SetScriptedCombatFlags
`public void SetScriptedCombatFlags(Agent.AISpecialCombatModeFlags flags)`

**用途 / Purpose:** 设置 `scripted combat flags` 的值或状态。

### SetScriptedPositionAndDirection
`public void SetScriptedPositionAndDirection(ref WorldPosition scriptedPosition, float scriptedDirection, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**用途 / Purpose:** 设置 `scripted position and direction` 的值或状态。

### SetScriptedPosition
`public void SetScriptedPosition(ref WorldPosition position, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**用途 / Purpose:** 设置 `scripted position` 的值或状态。

### SetScriptedTargetEntityAndPosition
`public void SetScriptedTargetEntityAndPosition(WeakGameEntity target, WorldPosition position, Agent.AISpecialCombatModeFlags additionalFlags = Agent.AISpecialCombatModeFlags.None, bool ignoreIfAlreadyAttacking = false)`

**用途 / Purpose:** 设置 `scripted target entity and position` 的值或状态。

### SetAgentExcludeStateForFaceGroupId
`public void SetAgentExcludeStateForFaceGroupId(int faceGroupId, bool isExcluded)`

**用途 / Purpose:** 设置 `agent exclude state for face group id` 的值或状态。

### SetLookAgent
`public void SetLookAgent(Agent agent)`

**用途 / Purpose:** 设置 `look agent` 的值或状态。

### SetInteractionAgent
`public void SetInteractionAgent(Agent agent)`

**用途 / Purpose:** 设置 `interaction agent` 的值或状态。

### SetLookToPointOfInterest
`public void SetLookToPointOfInterest(Vec3 point)`

**用途 / Purpose:** 设置 `look to point of interest` 的值或状态。

### SetAgentFlags
`public void SetAgentFlags(AgentFlag agentFlags)`

**用途 / Purpose:** 设置 `agent flags` 的值或状态。

### SetSelectedMountIndex
`public void SetSelectedMountIndex(int mountIndex)`

**用途 / Purpose:** 设置 `selected mount index` 的值或状态。

### GetFiringOrder
`public int GetFiringOrder()`

**用途 / Purpose:** 获取 `firing order` 的当前值。

### GetRidingOrder
`public int GetRidingOrder()`

**用途 / Purpose:** 获取 `riding order` 的当前值。

### GetSelectedMountIndex
`public int GetSelectedMountIndex()`

**用途 / Purpose:** 获取 `selected mount index` 的当前值。

### GetTargetFormationIndex
`public int GetTargetFormationIndex()`

**用途 / Purpose:** 获取 `target formation index` 的当前值。

### SetFiringOrder
`public void SetFiringOrder(FiringOrder.RangedWeaponUsageOrderEnum order)`

**用途 / Purpose:** 设置 `firing order` 的值或状态。

### SetRidingOrder
`public void SetRidingOrder(RidingOrder.RidingOrderEnum order)`

**用途 / Purpose:** 设置 `riding order` 的值或状态。

### SetAgentFacialAnimation
`public void SetAgentFacialAnimation(Agent.FacialAnimChannel channel, string animationName, bool loop)`

**用途 / Purpose:** 设置 `agent facial animation` 的值或状态。

### SetHandInverseKinematicsFrame
`public bool SetHandInverseKinematicsFrame(in MatrixFrame leftGlobalFrame, in MatrixFrame rightGlobalFrame)`

**用途 / Purpose:** 设置 `hand inverse kinematics frame` 的值或状态。

### SetNativeFormationNo
`public void SetNativeFormationNo(int formationNo)`

**用途 / Purpose:** 设置 `native formation no` 的值或状态。

### SetDirectionChangeTendency
`public void SetDirectionChangeTendency(float tendency)`

**用途 / Purpose:** 设置 `direction change tendency` 的值或状态。

### GetBattleImportance
`public float GetBattleImportance()`

**用途 / Purpose:** 获取 `battle importance` 的当前值。

### GetTraitsMask
`public TroopTraitsMask GetTraitsMask()`

**用途 / Purpose:** 获取 `traits mask` 的当前值。

### SetSynchedPrefabComponentVisibility
`public void SetSynchedPrefabComponentVisibility(int componentIndex, bool visibility)`

**用途 / Purpose:** 设置 `synched prefab component visibility` 的值或状态。

### SetActionSet
`public void SetActionSet(ref AnimationSystemData animationSystemData)`

**用途 / Purpose:** 设置 `action set` 的值或状态。

### SetColumnwiseFollowAgent
`public void SetColumnwiseFollowAgent(Agent followAgent, ref Vec2 followPosition)`

**用途 / Purpose:** 设置 `columnwise follow agent` 的值或状态。

### SetHandInverseKinematicsFrameForMissionObjectUsage
`public void SetHandInverseKinematicsFrameForMissionObjectUsage(in MatrixFrame localIKFrame, in MatrixFrame boundEntityGlobalFrame, float animationHeightDifference = 0f)`

**用途 / Purpose:** 设置 `hand inverse kinematics frame for mission object usage` 的值或状态。

### SetWantsToYell
`public void SetWantsToYell()`

**用途 / Purpose:** 设置 `wants to yell` 的值或状态。

### SetCapeClothSimulator
`public void SetCapeClothSimulator(GameEntityComponent clothSimulatorComponent)`

**用途 / Purpose:** 设置 `cape cloth simulator` 的值或状态。

### GetTargetPosition
`public Vec2 GetTargetPosition()`

**用途 / Purpose:** 获取 `target position` 的当前值。

### GetTargetDirection
`public Vec3 GetTargetDirection()`

**用途 / Purpose:** 获取 `target direction` 的当前值。

### GetAimingTimer
`public float GetAimingTimer()`

**用途 / Purpose:** 获取 `aiming timer` 的当前值。

### GetInteractionDistanceToUsable
`public float GetInteractionDistanceToUsable(IUsable usable)`

**用途 / Purpose:** 获取 `interaction distance to usable` 的当前值。

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 获取 `info text for being not interactable` 的当前值。

### GetPrimaryWieldedItemIndex
`public EquipmentIndex GetPrimaryWieldedItemIndex()`

**用途 / Purpose:** 获取 `primary wielded item index` 的当前值。

### GetOffhandWieldedItemIndex
`public EquipmentIndex GetOffhandWieldedItemIndex()`

**用途 / Purpose:** 获取 `offhand wielded item index` 的当前值。

### GetMaximumForwardUnlimitedSpeed
`public float GetMaximumForwardUnlimitedSpeed()`

**用途 / Purpose:** 获取 `maximum forward unlimited speed` 的当前值。

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetWeaponEntityFromEquipmentSlot
`public WeakGameEntity GetWeaponEntityFromEquipmentSlot(EquipmentIndex slotIndex)`

**用途 / Purpose:** 获取 `weapon entity from equipment slot` 的当前值。

### GetRetreatPos
`public WorldPosition GetRetreatPos()`

**用途 / Purpose:** 获取 `retreat pos` 的当前值。

### GetScriptedFlags
`public Agent.AIScriptedFrameFlags GetScriptedFlags()`

**用途 / Purpose:** 获取 `scripted flags` 的当前值。

### GetScriptedCombatFlags
`public Agent.AISpecialCombatModeFlags GetScriptedCombatFlags()`

**用途 / Purpose:** 获取 `scripted combat flags` 的当前值。

### GetSteppedEntity
`public WeakGameEntity GetSteppedEntity()`

**用途 / Purpose:** 获取 `stepped entity` 的当前值。

### GetSteppedRootEntity
`public WeakGameEntity GetSteppedRootEntity()`

**用途 / Purpose:** 获取 `stepped root entity` 的当前值。

### GetSteppedBodyFlags
`public BodyFlags GetSteppedBodyFlags()`

**用途 / Purpose:** 获取 `stepped body flags` 的当前值。

### GetCurrentAnimationFlag
`public AnimFlags GetCurrentAnimationFlag(int channelNo)`

**用途 / Purpose:** 获取 `current animation flag` 的当前值。

### GetCurrentAction
`public ActionIndexCache GetCurrentAction(int channelNo)`

**用途 / Purpose:** 获取 `current action` 的当前值。

### GetCurrentActionType
`public Agent.ActionCodeType GetCurrentActionType(int channelNo)`

**用途 / Purpose:** 获取 `current action type` 的当前值。

### GetCurrentActionStage
`public Agent.ActionStage GetCurrentActionStage(int channelNo)`

**用途 / Purpose:** 获取 `current action stage` 的当前值。

### GetCurrentActionDirection
`public Agent.UsageDirection GetCurrentActionDirection(int channelNo)`

**用途 / Purpose:** 获取 `current action direction` 的当前值。

### GetCurrentActionPriority
`public int GetCurrentActionPriority(int channelNo)`

**用途 / Purpose:** 获取 `current action priority` 的当前值。

### GetCurrentActionProgress
`public float GetCurrentActionProgress(int channelNo)`

**用途 / Purpose:** 获取 `current action progress` 的当前值。

### GetActionChannelWeight
`public float GetActionChannelWeight(int channelNo)`

**用途 / Purpose:** 获取 `action channel weight` 的当前值。

### GetActionChannelCurrentActionWeight
`public float GetActionChannelCurrentActionWeight(int channelNo)`

**用途 / Purpose:** 获取 `action channel current action weight` 的当前值。

### GetWorldFrame
`public WorldFrame GetWorldFrame()`

**用途 / Purpose:** 获取 `world frame` 的当前值。

### GetLookDownLimit
`public float GetLookDownLimit()`

**用途 / Purpose:** 获取 `look down limit` 的当前值。

### GetEyeGlobalHeight
`public float GetEyeGlobalHeight()`

**用途 / Purpose:** 获取 `eye global height` 的当前值。

### GetMaximumSpeedLimit
`public float GetMaximumSpeedLimit()`

**用途 / Purpose:** 获取 `maximum speed limit` 的当前值。

### GetCurrentVelocity
`public Vec2 GetCurrentVelocity()`

**用途 / Purpose:** 获取 `current velocity` 的当前值。

### GetTurnSpeed
`public float GetTurnSpeed()`

**用途 / Purpose:** 获取 `turn speed` 的当前值。

### GetCurrentSpeedLimit
`public float GetCurrentSpeedLimit()`

**用途 / Purpose:** 获取 `current speed limit` 的当前值。

### GetRealGlobalVelocity
`public Vec3 GetRealGlobalVelocity()`

**用途 / Purpose:** 获取 `real global velocity` 的当前值。

### GetAverageRealGlobalVelocity
`public Vec3 GetAverageRealGlobalVelocity()`

**用途 / Purpose:** 获取 `average real global velocity` 的当前值。

### GetMovementDirection
`public Vec2 GetMovementDirection()`

**用途 / Purpose:** 获取 `movement direction` 的当前值。

### GetCurWeaponOffset
`public Vec3 GetCurWeaponOffset()`

**用途 / Purpose:** 获取 `cur weapon offset` 的当前值。

### GetIsLeftStance
`public bool GetIsLeftStance()`

**用途 / Purpose:** 获取 `is left stance` 的当前值。

### GetPathDistanceToPoint
`public float GetPathDistanceToPoint(ref Vec3 point)`

**用途 / Purpose:** 获取 `path distance to point` 的当前值。

### GetCurrentNavigationFaceId
`public int GetCurrentNavigationFaceId()`

**用途 / Purpose:** 获取 `current navigation face id` 的当前值。

### GetWorldPosition
`public WorldPosition GetWorldPosition()`

**用途 / Purpose:** 获取 `world position` 的当前值。

### GetLookAgent
`public Agent GetLookAgent()`

**用途 / Purpose:** 获取 `look agent` 的当前值。

### GetTargetAgent
`public Agent GetTargetAgent()`

**用途 / Purpose:** 获取 `target agent` 的当前值。

### SetTargetAgent
`public void SetTargetAgent(Agent agent)`

**用途 / Purpose:** 设置 `target agent` 的值或状态。

### SetAutomaticTargetSelection
`public void SetAutomaticTargetSelection(bool enable)`

**用途 / Purpose:** 设置 `automatic target selection` 的值或状态。

### GetAgentFlags
`public AgentFlag GetAgentFlags()`

**用途 / Purpose:** 获取 `agent flags` 的当前值。

### GetAgentFacialAnimation
`public string GetAgentFacialAnimation()`

**用途 / Purpose:** 获取 `agent facial animation` 的当前值。

### GetAgentVoiceDefinition
`public string GetAgentVoiceDefinition()`

**用途 / Purpose:** 获取 `agent voice definition` 的当前值。

### GetEyeGlobalPosition
`public Vec3 GetEyeGlobalPosition()`

**用途 / Purpose:** 获取 `eye global position` 的当前值。

### GetChestGlobalPosition
`public Vec3 GetChestGlobalPosition()`

**用途 / Purpose:** 获取 `chest global position` 的当前值。

### GetDefendMovementFlag
`public Agent.MovementControlFlag GetDefendMovementFlag()`

**用途 / Purpose:** 获取 `defend movement flag` 的当前值。

### GetAttackDirection
`public Agent.UsageDirection GetAttackDirection()`

**用途 / Purpose:** 获取 `attack direction` 的当前值。

### GetWieldedWeaponInfo
`public WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex)`

**用途 / Purpose:** 获取 `wielded weapon info` 的当前值。

### GetBodyRotationConstraint
`public Vec2 GetBodyRotationConstraint(int channelIndex = 1)`

**用途 / Purpose:** 获取 `body rotation constraint` 的当前值。

### GetTotalEncumbrance
`public float GetTotalEncumbrance()`

**用途 / Purpose:** 获取 `total encumbrance` 的当前值。

### GetAgentDrivenPropertyValue
`public float GetAgentDrivenPropertyValue(DrivenProperty type)`

**用途 / Purpose:** 获取 `agent driven property value` 的当前值。

### GetSteppedMachine
`public UsableMachine GetSteppedMachine()`

**用途 / Purpose:** 获取 `stepped machine` 的当前值。

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**用途 / Purpose:** 获取 `attached weapons count` 的当前值。

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int index)`

**用途 / Purpose:** 获取 `attached weapon` 的当前值。

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int index)`

**用途 / Purpose:** 获取 `attached weapon frame` 的当前值。

### GetAttachedWeaponBoneIndex
`public sbyte GetAttachedWeaponBoneIndex(int index)`

**用途 / Purpose:** 获取 `attached weapon bone index` 的当前值。

### DeleteAttachedWeapon
`public void DeleteAttachedWeapon(int index)`

**用途 / Purpose:** 处理 `delete attached weapon` 相关逻辑。

### HasRangedWeapon
`public bool HasRangedWeapon(bool checkHasAmmo = false)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `ranged weapon`。

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex)`

**用途 / Purpose:** 获取 `formation file and rank info` 的当前值。

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex, out int fileCount, out int rankCount)`

**用途 / Purpose:** 获取 `formation file and rank info` 的当前值。

### SetMortalityState
`public void SetMortalityState(Agent.MortalityState newState)`

**用途 / Purpose:** 设置 `mortality state` 的值或状态。

### ToggleInvulnerable
`public void ToggleInvulnerable()`

**用途 / Purpose:** 处理 `toggle invulnerable` 相关逻辑。

### GetArmLength
`public float GetArmLength()`

**用途 / Purpose:** 获取 `arm length` 的当前值。

### GetArmWeight
`public float GetArmWeight()`

**用途 / Purpose:** 获取 `arm weight` 的当前值。

### GetRunningSimulationDataUntilMaximumSpeedReached
`public void GetRunningSimulationDataUntilMaximumSpeedReached(ref float combatAccelerationTime, ref float maxSpeed, float speedValues)`

**用途 / Purpose:** 获取 `running simulation data until maximum speed reached` 的当前值。

### SetMaximumSpeedLimit
`public void SetMaximumSpeedLimit(float maximumSpeedLimit, bool isMultiplier)`

**用途 / Purpose:** 设置 `maximum speed limit` 的值或状态。

### GetBaseArmorEffectivenessForBodyPart
`public float GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType bodyPart)`

**用途 / Purpose:** 获取 `base armor effectiveness for body part` 的当前值。

### GetLastTargetVisibilityState
`public AITargetVisibilityState GetLastTargetVisibilityState()`

**用途 / Purpose:** 获取 `last target visibility state` 的当前值。

### GetMissileRange
`public float GetMissileRange()`

**用途 / Purpose:** 获取 `missile range` 的当前值。

### SetAgentIdleAnimationStatus
`public void SetAgentIdleAnimationStatus(bool idleEnabled)`

**用途 / Purpose:** 设置 `agent idle animation status` 的值或状态。

### GetWeaponToReplaceOnQuickAction
`public ItemObject GetWeaponToReplaceOnQuickAction(SpawnedItemEntity spawnedItem, out EquipmentIndex possibleSlotIndex)`

**用途 / Purpose:** 获取 `weapon to replace on quick action` 的当前值。

### GetAssistingHitter
`public Agent.Hitter GetAssistingHitter(MissionPeer killerPeer)`

**用途 / Purpose:** 获取 `assisting hitter` 的当前值。

### CanReachAgent
`public bool CanReachAgent(Agent otherAgent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `reach agent`。

### CanInteractWithAgent
`public bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `interact with agent`。

### CanBeAssignedForScriptedMovement
`public bool CanBeAssignedForScriptedMovement()`

**用途 / Purpose:** 判断当前对象是否可以执行 `be assigned for scripted movement`。

### CanReachAndUseObject
`public bool CanReachAndUseObject(UsableMissionObject gameObject, float distanceSq)`

**用途 / Purpose:** 判断当前对象是否可以执行 `reach and use object`。

### CanReachObject
`public bool CanReachObject(UsableMissionObject gameObject, float distanceSq)`

**用途 / Purpose:** 判断当前对象是否可以执行 `reach object`。

### CanReachObjectFromPosition
`public bool CanReachObjectFromPosition(UsableMissionObject gameObject, float distanceSq, Vec3 position)`

**用途 / Purpose:** 判断当前对象是否可以执行 `reach object from position`。

### CanUseObject
`public bool CanUseObject(UsableMissionObject gameObject)`

**用途 / Purpose:** 判断当前对象是否可以执行 `use object`。

### CanMoveDirectlyToPosition
`public bool CanMoveDirectlyToPosition(in Vec2 position)`

**用途 / Purpose:** 判断当前对象是否可以执行 `move directly to position`。

### CanInteractableWeaponBePickedUp
`public bool CanInteractableWeaponBePickedUp(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 判断当前对象是否可以执行 `interactable weapon be picked up`。

### CanQuickPickUp
`public bool CanQuickPickUp(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 判断当前对象是否可以执行 `quick pick up`。

### CanTeleport
`public unsafe bool CanTeleport()`

**用途 / Purpose:** 判断当前对象是否可以执行 `teleport`。

### IsActive
`public bool IsActive()`

**用途 / Purpose:** 处理 `is active` 相关逻辑。

### IsRetreating
`public bool IsRetreating()`

**用途 / Purpose:** 处理 `is retreating` 相关逻辑。

### IsFadingOut
`public bool IsFadingOut()`

**用途 / Purpose:** 处理 `is fading out` 相关逻辑。

### SetAgentDrivenPropertyValueFromConsole
`public void SetAgentDrivenPropertyValueFromConsole(DrivenProperty type, float val)`

**用途 / Purpose:** 设置 `agent driven property value from console` 的值或状态。

### IsOnLand
`public bool IsOnLand()`

**用途 / Purpose:** 处理 `is on land` 相关逻辑。

### IsInWater
`public bool IsInWater()`

**用途 / Purpose:** 处理 `is in water` 相关逻辑。

### IsAbleToUseMachine
`public bool IsAbleToUseMachine()`

**用途 / Purpose:** 处理 `is able to use machine` 相关逻辑。

### IsAgentParentEntitySameAs
`public bool IsAgentParentEntitySameAs(GameEntity toBeChecked)`

**用途 / Purpose:** 处理 `is agent parent entity same as` 相关逻辑。

### SetExcludedFromGravity
`public void SetExcludedFromGravity(bool exclude, bool applyAverageGlobalVelocity)`

**用途 / Purpose:** 设置 `excluded from gravity` 的值或状态。

### SetForceAttachedEntity
`public void SetForceAttachedEntity(WeakGameEntity willBeAttached)`

**用途 / Purpose:** 设置 `force attached entity` 的值或状态。

### IsSliding
`public bool IsSliding()`

**用途 / Purpose:** 处理 `is sliding` 相关逻辑。

### IsSitting
`public bool IsSitting()`

**用途 / Purpose:** 处理 `is sitting` 相关逻辑。

### IsReleasingChainAttackInMultiplayer
`public bool IsReleasingChainAttackInMultiplayer()`

**用途 / Purpose:** 处理 `is releasing chain attack in multiplayer` 相关逻辑。

### IsCameraAttachable
`public bool IsCameraAttachable()`

**用途 / Purpose:** 处理 `is camera attachable` 相关逻辑。

### IsSynchedPrefabComponentVisible
`public bool IsSynchedPrefabComponentVisible(int componentIndex)`

**用途 / Purpose:** 处理 `is synched prefab component visible` 相关逻辑。

### IsEnemyOf
`public bool IsEnemyOf(Agent otherAgent)`

**用途 / Purpose:** 处理 `is enemy of` 相关逻辑。

### IsFriendOf
`public bool IsFriendOf(Agent otherAgent)`

**用途 / Purpose:** 处理 `is friend of` 相关逻辑。

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 当 `focus lose` 事件触发时调用此方法。

### OnItemRemovedFromScene
`public void OnItemRemovedFromScene()`

**用途 / Purpose:** 当 `item removed from scene` 事件触发时调用此方法。

### OnUse
`public void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnUseStopped
`public void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### OnWeaponDrop
`public void OnWeaponDrop(EquipmentIndex equipmentSlot)`

**用途 / Purpose:** 当 `weapon drop` 事件触发时调用此方法。

### OnItemPickup
`public void OnItemPickup(SpawnedItemEntity spawnedItemEntity, EquipmentIndex weaponPickUpSlotIndex, out bool removeWeapon)`

**用途 / Purpose:** 当 `item pickup` 事件触发时调用此方法。

### GetDistanceTo
`public float GetDistanceTo(Agent other)`

**用途 / Purpose:** 获取 `distance to` 的当前值。

### CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection
`public bool CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(int navigationFaceId, in Vec3 direction, float overridenCostForFaceId)`

**用途 / Purpose:** 处理 `check path to a i target agent passes through navigation face id from direction` 相关逻辑。

### IsTargetNavigationFaceIdBetween
`public bool IsTargetNavigationFaceIdBetween(int navigationFaceIdStart, int navigationFaceIdEnd)`

**用途 / Purpose:** 处理 `is target navigation face id between` 相关逻辑。

### CheckEquipmentForCapeClothSimulationStateChange
`public void CheckEquipmentForCapeClothSimulationStateChange()`

**用途 / Purpose:** 处理 `check equipment for cape cloth simulation state change` 相关逻辑。

### CheckToDropFlaggedItem
`public void CheckToDropFlaggedItem()`

**用途 / Purpose:** 处理 `check to drop flagged item` 相关逻辑。

### CheckSkillForMounting
`public bool CheckSkillForMounting(Agent mountAgent)`

**用途 / Purpose:** 处理 `check skill for mounting` 相关逻辑。

### InitializeSpawnEquipment
`public void InitializeSpawnEquipment(Equipment spawnEquipment)`

**用途 / Purpose:** 初始化 `spawn equipment` 的状态、资源或绑定。

### InitializeMissionEquipment
`public void InitializeMissionEquipment(MissionEquipment missionEquipment, Banner banner)`

**用途 / Purpose:** 初始化 `mission equipment` 的状态、资源或绑定。

### InitializeAgentProperties
`public void InitializeAgentProperties(Equipment spawnEquipment, AgentBuildData agentBuildData)`

**用途 / Purpose:** 初始化 `agent properties` 的状态、资源或绑定。

### UpdateFormationOrders
`public void UpdateFormationOrders()`

**用途 / Purpose:** 更新 `formation orders` 的状态或数据。

### UpdateWeapons
`public void UpdateWeapons()`

**用途 / Purpose:** 更新 `weapons` 的状态或数据。

### UpdateAgentProperties
`public void UpdateAgentProperties()`

**用途 / Purpose:** 更新 `agent properties` 的状态或数据。

### UpdateCustomDrivenProperties
`public void UpdateCustomDrivenProperties()`

**用途 / Purpose:** 更新 `custom driven properties` 的状态或数据。

### UpdateBodyProperties
`public void UpdateBodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 更新 `body properties` 的状态或数据。

### UpdateSyncHealthToAllClients
`public void UpdateSyncHealthToAllClients(bool value)`

**用途 / Purpose:** 更新 `sync health to all clients` 的状态或数据。

### UpdateSpawnEquipmentAndRefreshVisuals
`public void UpdateSpawnEquipmentAndRefreshVisuals(Equipment newSpawnEquipment)`

**用途 / Purpose:** 更新 `spawn equipment and refresh visuals` 的状态或数据。

### ForceUpdateCachedAndFormationValues
`public void ForceUpdateCachedAndFormationValues(bool updateOnlyMovement, bool arrangementChangeAllowed)`

**用途 / Purpose:** 处理 `force update cached and formation values` 相关逻辑。

### UpdateLastRangedAttackTimeDueToAnAttack
`public void UpdateLastRangedAttackTimeDueToAnAttack(float newTime)`

**用途 / Purpose:** 更新 `last ranged attack time due to an attack` 的状态或数据。

### InvalidateTargetAgent
`public void InvalidateTargetAgent()`

**用途 / Purpose:** 处理 `invalidate target agent` 相关逻辑。

### InvalidateAIWeaponSelections
`public void InvalidateAIWeaponSelections()`

**用途 / Purpose:** 处理 `invalidate a i weapon selections` 相关逻辑。

### ResetLookAgent
`public void ResetLookAgent()`

**用途 / Purpose:** 将 `look agent` 重置为初始状态。

### ResetGuard
`public void ResetGuard()`

**用途 / Purpose:** 将 `guard` 重置为初始状态。

### ResetAgentProperties
`public void ResetAgentProperties()`

**用途 / Purpose:** 将 `agent properties` 重置为初始状态。

### ResetAiWaitBeforeShootFactor
`public void ResetAiWaitBeforeShootFactor()`

**用途 / Purpose:** 将 `ai wait before shoot factor` 重置为初始状态。

### ClearTargetFrame
`public void ClearTargetFrame()`

**用途 / Purpose:** 处理 `clear target frame` 相关逻辑。

### ClearEquipment
`public void ClearEquipment()`

**用途 / Purpose:** 处理 `clear equipment` 相关逻辑。

### ClearHandInverseKinematics
`public void ClearHandInverseKinematics()`

**用途 / Purpose:** 处理 `clear hand inverse kinematics` 相关逻辑。

### ClearAttachedWeapons
`public void ClearAttachedWeapons()`

**用途 / Purpose:** 处理 `clear attached weapons` 相关逻辑。

### SetDetachableFromFormation
`public void SetDetachableFromFormation(bool value)`

**用途 / Purpose:** 设置 `detachable from formation` 的值或状态。

### UndetachAndAttachToFormation
`public void UndetachAndAttachToFormation(bool removeDetachmentScores = true)`

**用途 / Purpose:** 处理 `undetach and attach to formation` 相关逻辑。

### UndetachAndStopUsingObjects
`public void UndetachAndStopUsingObjects(bool removeDetachmentScores = true)`

**用途 / Purpose:** 处理 `undetach and stop using objects` 相关逻辑。

### EnforceShieldUsage
`public void EnforceShieldUsage(Agent.UsageDirection shieldDirection)`

**用途 / Purpose:** 处理 `enforce shield usage` 相关逻辑。

### ObjectHasVacantPosition
`public bool ObjectHasVacantPosition(UsableMissionObject gameObject)`

**用途 / Purpose:** 处理 `object has vacant position` 相关逻辑。

### InteractingWithAnyGameObject
`public bool InteractingWithAnyGameObject()`

**用途 / Purpose:** 处理 `interacting with any game object` 相关逻辑。

### StopUsingGameObjectMT
`public void StopUsingGameObjectMT(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**用途 / Purpose:** 处理 `stop using game object m t` 相关逻辑。

### StopUsingGameObject
`public void StopUsingGameObject(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**用途 / Purpose:** 处理 `stop using game object` 相关逻辑。

### HandleStopUsingAction
`public void HandleStopUsingAction()`

**用途 / Purpose:** 处理 `stop using action` 事件或回调。

### HandleStartUsingAction
`public void HandleStartUsingAction(UsableMissionObject targetObject, int preferenceIndex)`

**用途 / Purpose:** 处理 `start using action` 事件或回调。

### AddController
`public AgentController AddController(Type type)`

**用途 / Purpose:** 向当前集合/状态中添加 `controller`。

### RemoveController
`public AgentController RemoveController(Type type)`

**用途 / Purpose:** 从当前集合/状态中移除 `controller`。

### CanThrustAttackStickToBone
`public bool CanThrustAttackStickToBone(BoneBodyPartType bodyPart)`

**用途 / Purpose:** 判断当前对象是否可以执行 `thrust attack stick to bone`。

### GetOldWieldedItemInfo
`public void GetOldWieldedItemInfo(out int rightHandSlotIndex, out int rightHandUsageIndex, out int leftHandSlotIndex, out int leftHandUsageIndex)`

**用途 / Purpose:** 获取 `old wielded item info` 的当前值。

### StartSwitchingWeaponUsageIndexAsClient
`public void StartSwitchingWeaponUsageIndexAsClient(EquipmentIndex equipmentIndex, int usageIndex, Agent.UsageDirection currentMovementFlagUsageDirection)`

**用途 / Purpose:** 处理 `start switching weapon usage index as client` 相关逻辑。

### TryToWieldWeaponInSlot
`public void TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)`

**用途 / Purpose:** 尝试获取 `to wield weapon in slot`，通常以 out 参数返回结果。

### PrepareWeaponForDropInEquipmentSlot
`public void PrepareWeaponForDropInEquipmentSlot(EquipmentIndex slotIndex, bool dropWithHolster)`

**用途 / Purpose:** 处理 `prepare weapon for drop in equipment slot` 相关逻辑。

### AddHitter
`public void AddHitter(MissionPeer peer, float damage, bool isFriendlyHit)`

**用途 / Purpose:** 向当前集合/状态中添加 `hitter`。

### TryToSheathWeaponInHand
`public void TryToSheathWeaponInHand(Agent.HandIndex handIndex, Agent.WeaponWieldActionType type)`

**用途 / Purpose:** 尝试获取 `to sheath weapon in hand`，通常以 out 参数返回结果。

### RemoveHitter
`public void RemoveHitter(MissionPeer peer, bool isFriendlyHit)`

**用途 / Purpose:** 从当前集合/状态中移除 `hitter`。

### Retreat
`public void Retreat(WorldPosition retreatPos)`

**用途 / Purpose:** 处理 `retreat` 相关逻辑。

### StopRetreating
`public void StopRetreating()`

**用途 / Purpose:** 处理 `stop retreating` 相关逻辑。

### UseGameObject
`public void UseGameObject(UsableMissionObject usedObject, int preferenceIndex = -1)`

**用途 / Purpose:** 处理 `use game object` 相关逻辑。

### SaveEquipmentsOnHand
`public void SaveEquipmentsOnHand()`

**用途 / Purpose:** 保存 `equipments on hand` 数据。

### StartFadingOut
`public void StartFadingOut()`

**用途 / Purpose:** 处理 `start fading out` 相关逻辑。

### IsWandering
`public bool IsWandering()`

**用途 / Purpose:** 处理 `is wandering` 相关逻辑。

### SetRenderCheckEnabled
`public void SetRenderCheckEnabled(bool value)`

**用途 / Purpose:** 设置 `render check enabled` 的值或状态。

### GetRenderCheckEnabled
`public bool GetRenderCheckEnabled()`

**用途 / Purpose:** 获取 `render check enabled` 的当前值。

### ComputeAnimationDisplacement
`public Vec3 ComputeAnimationDisplacement(float dt)`

**用途 / Purpose:** 处理 `compute animation displacement` 相关逻辑。

### TickActionChannels
`public void TickActionChannels(float dt)`

**用途 / Purpose:** 处理 `tick action channels` 相关逻辑。

### LockAgentReplicationTableDataWithCurrentReliableSequenceNo
`public void LockAgentReplicationTableDataWithCurrentReliableSequenceNo(NetworkCommunicator peer)`

**用途 / Purpose:** 处理 `lock agent replication table data with current reliable sequence no` 相关逻辑。

### TeleportToPosition
`public void TeleportToPosition(Vec3 position)`

**用途 / Purpose:** 处理 `teleport to position` 相关逻辑。

### FadeOut
`public void FadeOut(bool hideInstantly, bool hideMount)`

**用途 / Purpose:** 处理 `fade out` 相关逻辑。

### FadeIn
`public void FadeIn()`

**用途 / Purpose:** 处理 `fade in` 相关逻辑。

### DisableScriptedMovement
`public void DisableScriptedMovement()`

**用途 / Purpose:** 处理 `disable scripted movement` 相关逻辑。

### DisableScriptedCombatMovement
`public void DisableScriptedCombatMovement()`

**用途 / Purpose:** 处理 `disable scripted combat movement` 相关逻辑。

### ForceAiBehaviorSelection
`public void ForceAiBehaviorSelection()`

**用途 / Purpose:** 处理 `force ai behavior selection` 相关逻辑。

### HasPathThroughNavigationFaceIdFromDirectionMT
`public bool HasPathThroughNavigationFaceIdFromDirectionMT(int navigationFaceId, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `path through navigation face id from direction m t`。

### HasPathThroughNavigationFaceIdFromDirection
`public bool HasPathThroughNavigationFaceIdFromDirection(int navigationFaceId, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `path through navigation face id from direction`。

### DisableLookToPointOfInterest
`public void DisableLookToPointOfInterest()`

**用途 / Purpose:** 处理 `disable look to point of interest` 相关逻辑。

### AddPrefabComponentToBone
`public CompositeComponent AddPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `prefab component to bone`。

### MakeVoice
`public void MakeVoice(SkinVoiceManager.SkinVoiceType voiceType, SkinVoiceManager.CombatVoiceNetworkPredictionType predictionType)`

**用途 / Purpose:** 处理 `make voice` 相关逻辑。

### YellAfterDelay
`public void YellAfterDelay(float delayTimeInSecond)`

**用途 / Purpose:** 处理 `yell after delay` 相关逻辑。

### WieldNextWeapon
`public void WieldNextWeapon(Agent.HandIndex weaponIndex, Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.WithAnimation)`

**用途 / Purpose:** 处理 `wield next weapon` 相关逻辑。

### AttackDirectionToMovementFlag
`public Agent.MovementControlFlag AttackDirectionToMovementFlag(Agent.UsageDirection direction)`

**用途 / Purpose:** 处理 `attack direction to movement flag` 相关逻辑。

### DefendDirectionToMovementFlag
`public Agent.MovementControlFlag DefendDirectionToMovementFlag(Agent.UsageDirection direction)`

**用途 / Purpose:** 处理 `defend direction to movement flag` 相关逻辑。

### KickClear
`public bool KickClear()`

**用途 / Purpose:** 处理 `kick clear` 相关逻辑。

### PlayerAttackDirection
`public Agent.UsageDirection PlayerAttackDirection()`

**用途 / Purpose:** 处理 `player attack direction` 相关逻辑。

### GetRandomPairOfRealBloodBurstBoneIndices
`public ValueTuple<sbyte, sbyte> GetRandomPairOfRealBloodBurstBoneIndices()`

**用途 / Purpose:** 获取 `random pair of real blood burst bone indices` 的当前值。

### CreateBloodBurstAtLimb
`public void CreateBloodBurstAtLimb(sbyte realBoneIndex, float scale)`

**用途 / Purpose:** 创建一个 `blood burst at limb` 实例或对象。

### AddComponent
`public void AddComponent(AgentComponent agentComponent)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### RemoveComponent
`public bool RemoveComponent(AgentComponent agentComponent)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### HandleTaunt
`public void HandleTaunt(int tauntIndex, bool isDefaultTaunt)`

**用途 / Purpose:** 处理 `taunt` 事件或回调。

### HandleBark
`public void HandleBark(int indexOfBark)`

**用途 / Purpose:** 处理 `bark` 事件或回调。

### HandleDropWeapon
`public void HandleDropWeapon(bool isDefendPressed, EquipmentIndex forcedSlotIndexToDropWeaponFrom)`

**用途 / Purpose:** 处理 `drop weapon` 事件或回调。

### DropItem
`public void DropItem(EquipmentIndex itemIndex, WeaponClass pickedUpItemType = WeaponClass.Undefined)`

**用途 / Purpose:** 处理 `drop item` 相关逻辑。

### EquipItemsFromSpawnEquipment
`public void EquipItemsFromSpawnEquipment(bool neededBatchedItems)`

**用途 / Purpose:** 处理 `equip items from spawn equipment` 相关逻辑。

### WieldInitialWeapons
`public void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.InstantAfterPickUp, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = TaleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any)`

**用途 / Purpose:** 处理 `wield initial weapons` 相关逻辑。

### ChangeWeaponHitPoints
`public void ChangeWeaponHitPoints(EquipmentIndex slotIndex, short hitPoints)`

**用途 / Purpose:** 处理 `change weapon hit points` 相关逻辑。

### HasWeapon
`public bool HasWeapon()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `weapon`。

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(EquipmentIndex slotIndex, MissionWeapon weapon, GameEntity weaponEntity, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理 `attach weapon to weapon` 相关逻辑。

### AttachWeaponToBone
`public void AttachWeaponToBone(MissionWeapon weapon, GameEntity weaponEntity, sbyte boneIndex, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理 `attach weapon to bone` 相关逻辑。

### RestoreShieldHitPoints
`public void RestoreShieldHitPoints()`

**用途 / Purpose:** 处理 `restore shield hit points` 相关逻辑。

### Die
`public void Die(Blow b, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)`

**用途 / Purpose:** 处理 `die` 相关逻辑。

### MakeDead
`public void MakeDead(bool isKilled, ActionIndexCache actionIndex, int corpsesToFadeIndex = -1)`

**用途 / Purpose:** 处理 `make dead` 相关逻辑。

### RegisterBlow
`public void RegisterBlow(Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 处理 `register blow` 相关逻辑。

### CreateBlowFromBlowAsReflection
`public void CreateBlowFromBlowAsReflection(in Blow blow, in AttackCollisionData collisionData, out Blow outBlow, out AttackCollisionData outCollisionData)`

**用途 / Purpose:** 创建一个 `blow from blow as reflection` 实例或对象。

### TickParallel
`public void TickParallel(float dt)`

**用途 / Purpose:** 处理 `tick parallel` 相关逻辑。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### DebugMore
`public void DebugMore()`

**用途 / Purpose:** 处理 `debug more` 相关逻辑。

### Mount
`public void Mount(Agent mountAgent)`

**用途 / Purpose:** 处理 `mount` 相关逻辑。

### EquipWeaponToExtraSlotAndWield
`public void EquipWeaponToExtraSlotAndWield(ref MissionWeapon weapon)`

**用途 / Purpose:** 处理 `equip weapon to extra slot and wield` 相关逻辑。

### RemoveEquippedWeapon
`public void RemoveEquippedWeapon(EquipmentIndex slotIndex)`

**用途 / Purpose:** 从当前集合/状态中移除 `equipped weapon`。

### EquipWeaponWithNewEntity
`public void EquipWeaponWithNewEntity(EquipmentIndex slotIndex, ref MissionWeapon weapon)`

**用途 / Purpose:** 处理 `equip weapon with new entity` 相关逻辑。

### EquipWeaponFromSpawnedItemEntity
`public void EquipWeaponFromSpawnedItemEntity(EquipmentIndex slotIndex, SpawnedItemEntity spawnedItemEntity, bool removeWeapon)`

**用途 / Purpose:** 处理 `equip weapon from spawned item entity` 相关逻辑。

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 处理 `preload for rendering` 相关逻辑。

### AddSynchedPrefabComponentToBone
`public int AddSynchedPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**用途 / Purpose:** 向当前集合/状态中添加 `synched prefab component to bone`。

### WillDropWieldedShield
`public bool WillDropWieldedShield(SpawnedItemEntity spawnedItem)`

**用途 / Purpose:** 处理 `will drop wielded shield` 相关逻辑。

### HadSameTypeOfConsumableOrShieldOnSpawn
`public bool HadSameTypeOfConsumableOrShieldOnSpawn(WeaponClass weaponClass)`

**用途 / Purpose:** 处理 `had same type of consumable or shield on spawn` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### TryGetImmediateEnemyAgentMovementData
`public bool TryGetImmediateEnemyAgentMovementData(out float maximumForwardUnlimitedSpeed, out Vec3 position)`

**用途 / Purpose:** 尝试获取 `get immediate enemy agent movement data`，通常以 out 参数返回结果。

### HasLostShield
`public bool HasLostShield()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `lost shield`。

### SetLastDetachmentTickAgentTime
`public void SetLastDetachmentTickAgentTime(float lastDetachmentTickAgentTime)`

**用途 / Purpose:** 设置 `last detachment tick agent time` 的值或状态。

### SetDetachmentWeight
`public void SetDetachmentWeight(float newDetachmentWeight)`

**用途 / Purpose:** 设置 `detachment weight` 的值或状态。

### SetDetachmentIndex
`public void SetDetachmentIndex(int newDetachmentIndex)`

**用途 / Purpose:** 设置 `detachment index` 的值或状态。

### SetOwningAgentMissionPeer
`public void SetOwningAgentMissionPeer(MissionPeer owningAgentMissionPeer)`

**用途 / Purpose:** 设置 `owning agent mission peer` 的值或状态。

### SetMissionRepresentative
`public void SetMissionRepresentative(MissionRepresentativeBase missionRepresentative)`

**用途 / Purpose:** 设置 `mission representative` 的值或状态。

### SetIsLadderQueueUsing
`public void SetIsLadderQueueUsing(bool isLadderQueueUsing)`

**用途 / Purpose:** 设置 `is ladder queue using` 的值或状态。

### SetIsInLadderQueue
`public void SetIsInLadderQueue(bool isInLadderQueue)`

**用途 / Purpose:** 设置 `is in ladder queue` 的值或状态。

### UpdateLocalPositionError
`public void UpdateLocalPositionError()`

**用途 / Purpose:** 更新 `local position error` 的状态或数据。

### YellingBehaviour
`public void YellingBehaviour()`

**用途 / Purpose:** 处理 `yelling behaviour` 相关逻辑。

### HasPathThroughNavigationFacesIDFromDirection
`public bool HasPathThroughNavigationFacesIDFromDirection(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `path through navigation faces i d from direction`。

### HasPathThroughNavigationFacesIDFromDirectionMT
`public bool HasPathThroughNavigationFacesIDFromDirectionMT(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `path through navigation faces i d from direction m t`。

### SetInitialFrame
`public void SetInitialFrame(in Vec3 initialPosition, in Vec2 initialDirection, bool canSpawnOutsideOfMissionBoundary = false)`

**用途 / Purpose:** 设置 `initial frame` 的值或状态。

### ClearTargetZ
`public void ClearTargetZ()`

**用途 / Purpose:** 处理 `clear target z` 相关逻辑。

### MovementFlagToDirection
`public static Agent.UsageDirection MovementFlagToDirection(Agent.MovementControlFlag flag)`

**用途 / Purpose:** 处理 `movement flag to direction` 相关逻辑。

### GetActionDirection
`public static Agent.UsageDirection GetActionDirection(int actionIndex)`

**用途 / Purpose:** 获取 `action direction` 的当前值。

### GetMonsterUsageIndex
`public static int GetMonsterUsageIndex(string monsterUsage)`

**用途 / Purpose:** 获取 `monster usage index` 的当前值。

### IncreaseDamage
`public void IncreaseDamage(float amount)`

**用途 / Purpose:** 处理 `increase damage` 相关逻辑。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RegisterLastBlow
`public void RegisterLastBlow(int ownerId, AgentAttackType attackType)`

**用途 / Purpose:** 处理 `register last blow` 相关逻辑。

### OnAgentHealthChangedDelegate
`public delegate void OnAgentHealthChangedDelegate(Agent agent, float oldHealth, float newHealth)`

**用途 / Purpose:** 当 `agent health changed delegate` 事件触发时调用此方法。

### OnMountHealthChangedDelegate
`public delegate void OnMountHealthChangedDelegate(Agent agent, Agent mount, float oldHealth, float newHealth)`

**用途 / Purpose:** 当 `mount health changed delegate` 事件触发时调用此方法。

### OnMainAgentWieldedItemChangeDelegate
`public delegate void OnMainAgentWieldedItemChangeDelegate()`

**用途 / Purpose:** 当 `main agent wielded item change delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new Agent();
value.GetHasOnAiInputSetCallback();
```

## 参见

- [完整类目录](../catalog)