<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Agent`
- [← Area / Back to mission](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/Agent](/versions/Agent)
<!-- END BREADCRUMB -->
# Agent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`Agent` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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
| `HasAnyRangedWeaponCached` | `public bool HasAnyRangedWeaponCached { get; }` |
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
| `IsFormationFrameEnabled` | `public bool IsFormationFrameEnabled { get; }` |
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

## Key Methods

### GetHasOnAiInputSetCallback
`public bool GetHasOnAiInputSetCallback()`

**Purpose:** Gets the current value of `has on ai input set callback`.

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value)`

**Purpose:** Sets the value or state of `has on ai input set callback`.

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ)`

**Purpose:** Gets the current value of `missile range with height difference aux`.

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName()`

**Purpose:** Gets the current value of `sound and collision info class name`.

### UpdateAgentStats
`public void UpdateAgentStats()`

**Purpose:** Updates the state or data of `agent stats`.

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)`

**Purpose:** Gets the current value of `weapon inaccuracy`.

### DebugGetHealth
`public float DebugGetHealth()`

**Purpose:** Handles logic related to `debug get health`.

### SetTargetPosition
`public void SetTargetPosition(Vec2 value)`

**Purpose:** Sets the value or state of `target position`.

### SetTargetZ
`public void SetTargetZ(float targetZ)`

**Purpose:** Sets the value or state of `target z`.

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp)`

**Purpose:** Sets the value or state of `target up`.

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value)`

**Purpose:** Sets the value or state of `can lead formations remotely`.

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)`

**Purpose:** Sets the value or state of `average ping in milliseconds`.

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)`

**Purpose:** Sets the value or state of `target position and direction`.

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration)`

**Purpose:** Adds `acceleration` to the current collection or state.

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction)`

**Purpose:** Sets the value or state of `weapon guard`.

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState)`

**Purpose:** Sets the value or state of `watch state`.

### IsAlarmStateNormal
`public bool IsAlarmStateNormal()`

**Purpose:** Handles logic related to `is alarm state normal`.

### IsCautious
`public bool IsCautious()`

**Purpose:** Handles logic related to `is cautious`.

### IsPatrollingCautious
`public bool IsPatrollingCautious()`

**Purpose:** Handles logic related to `is patrolling cautious`.

### IsAlarmed
`public bool IsAlarmed()`

**Purpose:** Handles logic related to `is alarmed`.

### SetAlarmState
`public bool SetAlarmState(Agent.AIStateFlag alarmStateFlag)`

**Purpose:** Sets the value or state of `alarm state`.

### SetTargetFormationIndex
`public void SetTargetFormationIndex(int targetFormationIndex)`

**Purpose:** Sets the value or state of `target formation index`.

### StartRagdollAsCorpse
`public void StartRagdollAsCorpse()`

**Purpose:** Handles logic related to `start ragdoll as corpse`.

### EndRagdollAsCorpse
`public void EndRagdollAsCorpse()`

**Purpose:** Handles logic related to `end ragdoll as corpse`.

### IsAddedAsCorpse
`public bool IsAddedAsCorpse()`

**Purpose:** Handles logic related to `is added as corpse`.

### AddAsCorpse
`public void AddAsCorpse()`

**Purpose:** Adds `as corpse` to the current collection or state.

### SetOverridenStrikeAndDeathAction
`public void SetOverridenStrikeAndDeathAction(in ActionIndexCache strikeAction, in ActionIndexCache deathAction)`

**Purpose:** Sets the value or state of `overriden strike and death action`.

### ApplyForceOnRagdoll
`public void ApplyForceOnRagdoll(sbyte boneIndex, in Vec3 force)`

**Purpose:** Applies `force on ragdoll` to the current object.

### SetVelocityLimitsOnRagdoll
`public void SetVelocityLimitsOnRagdoll(float linearVelocityLimit, float angularVelocityLimit)`

**Purpose:** Sets the value or state of `velocity limits on ragdoll`.

### GetAILastSuspiciousPosition
`public WorldPosition GetAILastSuspiciousPosition()`

**Purpose:** Gets the current value of `a i last suspicious position`.

### SetAILastSuspiciousPosition
`public void SetAILastSuspiciousPosition(WorldPosition lastSuspiciousPosition, bool checkNavMeshForCorrection)`

**Purpose:** Sets the value or state of `a i last suspicious position`.

### GetAIMoveDestination
`public WorldPosition GetAIMoveDestination()`

**Purpose:** Gets the current value of `a i move destination`.

### FindLongestDirectMoveToPosition
`public Vec2 FindLongestDirectMoveToPosition(Vec2 targetPosition, bool checkBoundaries, bool checkFriendlyAgents, out bool isCollidedWithAgent)`

**Purpose:** Handles logic related to `find longest direct move to position`.

### GetAIMoveStartTolerance
`public float GetAIMoveStartTolerance()`

**Purpose:** Gets the current value of `a i move start tolerance`.

### GetAIMoveStopTolerance
`public float GetAIMoveStopTolerance()`

**Purpose:** Gets the current value of `a i move stop tolerance`.

### IsAIAtMoveDestination
`public bool IsAIAtMoveDestination()`

**Purpose:** Handles logic related to `is a i at move destination`.

### SetFormationBanner
`public void SetFormationBanner(ItemObject banner)`

**Purpose:** Sets the value or state of `formation banner`.

### SetIsAIPaused
`public void SetIsAIPaused(bool isPaused)`

**Purpose:** Sets the value or state of `is a i paused`.

### ResetEnemyCaches
`public void ResetEnemyCaches()`

**Purpose:** Resets `enemy caches` to its initial state.

### SetTargetPositionSynched
`public void SetTargetPositionSynched(ref Vec2 targetPosition)`

**Purpose:** Sets the value or state of `target position synched`.

### SetTargetPositionAndDirectionSynched
`public void SetTargetPositionAndDirectionSynched(ref Vec2 targetPosition, ref Vec3 targetDirection)`

**Purpose:** Sets the value or state of `target position and direction synched`.

### SetBodyArmorMaterialType
`public void SetBodyArmorMaterialType(ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType)`

**Purpose:** Sets the value or state of `body armor material type`.

### SetUsedGameObjectForClient
`public void SetUsedGameObjectForClient(UsableMissionObject usedObject)`

**Purpose:** Sets the value or state of `used game object for client`.

### SetTeam
`public void SetTeam(Team team, bool sync)`

**Purpose:** Sets the value or state of `team`.

### SetClothingColor1
`public void SetClothingColor1(uint color)`

**Purpose:** Sets the value or state of `clothing color1`.

### SetClothingColor2
`public void SetClothingColor2(uint color)`

**Purpose:** Sets the value or state of `clothing color2`.

### SetWieldedItemIndexAsClient
`public void SetWieldedItemIndexAsClient(Agent.HandIndex handIndex, EquipmentIndex equipmentIndex, bool isWieldedInstantly, bool isWieldedOnSpawn, int mainHandCurrentUsageIndex)`

**Purpose:** Sets the value or state of `wielded item index as client`.

### SetPreciseRangedAimingEnabled
`public void SetPreciseRangedAimingEnabled(bool set)`

**Purpose:** Sets the value or state of `precise ranged aiming enabled`.

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**Purpose:** Sets the value or state of `as conversation agent`.

### SetCrouchMode
`public void SetCrouchMode(bool set)`

**Purpose:** Sets the value or state of `crouch mode`.

### SetWeaponAmountInSlot
`public void SetWeaponAmountInSlot(EquipmentIndex equipmentSlot, short amount, bool enforcePrimaryItem)`

**Purpose:** Sets the value or state of `weapon amount in slot`.

### SetDraggingMode
`public void SetDraggingMode(bool set)`

**Purpose:** Sets the value or state of `dragging mode`.

### SetWeaponAmmoAsClient
`public void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)`

**Purpose:** Sets the value or state of `weapon ammo as client`.

### SetWeaponReloadPhaseAsClient
`public void SetWeaponReloadPhaseAsClient(EquipmentIndex equipmentIndex, short reloadState)`

**Purpose:** Sets the value or state of `weapon reload phase as client`.

### SetReloadAmmoInSlot
`public void SetReloadAmmoInSlot(EquipmentIndex equipmentIndex, EquipmentIndex ammoSlotIndex, short reloadedAmmo)`

**Purpose:** Sets the value or state of `reload ammo in slot`.

### SetUsageIndexOfWeaponInSlotAsClient
`public void SetUsageIndexOfWeaponInSlotAsClient(EquipmentIndex slotIndex, int usageIndex)`

**Purpose:** Sets the value or state of `usage index of weapon in slot as client`.

### SetRandomizeColors
`public void SetRandomizeColors(bool shouldRandomize)`

**Purpose:** Sets the value or state of `randomize colors`.

### SetFormationFrameDisabled
`public void SetFormationFrameDisabled()`

**Purpose:** Sets the value or state of `formation frame disabled`.

### SetFormationFrameEnabled
`public void SetFormationFrameEnabled(WorldPosition position, Vec2 direction, Vec2 positionVelocity, float formationDirectionEnforcingFactor)`

**Purpose:** Sets the value or state of `formation frame enabled`.

### SetShouldCatchUpWithFormation
`public void SetShouldCatchUpWithFormation(bool value)`

**Purpose:** Sets the value or state of `should catch up with formation`.

### SetFormationIntegrityData
`public void SetFormationIntegrityData(Vec2 position, Vec2 currentFormationDirection, Vec2 averageVelocityOfCloseAgents, float averageMaxUnlimitedSpeedOfCloseAgents, float deviationOfPositions, bool shouldKeepWithFormationInsteadOfMovingToAgent)`

**Purpose:** Sets the value or state of `formation integrity data`.

### IsCrouchingAllowed
`public bool IsCrouchingAllowed()`

**Purpose:** Handles logic related to `is crouching allowed`.

### SetCurrentActionProgress
`public void SetCurrentActionProgress(int channelNo, float progress)`

**Purpose:** Sets the value or state of `current action progress`.

### SetCurrentActionSpeed
`public void SetCurrentActionSpeed(int channelNo, float speed)`

**Purpose:** Sets the value or state of `current action speed`.

### SetActionChannel
`public bool SetActionChannel(int channelNo, in ActionIndexCache actionIndexCache, bool ignorePriority = false, AnimFlags additionalFlags = (AnimFlags)0UL, float blendWithNextActionFactor = 0f, float actionSpeed = 1f, float blendInPeriod = -0.2f, float blendOutPeriodToNoAnim = 0.4f, float startProgress = 0f, bool useLinearSmoothing = false, float blendOutPeriod = -0.2f, int actionShift = 0, bool forceFaceMorphRestart = true)`

**Purpose:** Sets the value or state of `action channel`.

### SetAttackState
`public void SetAttackState(int attackState)`

**Purpose:** Sets the value or state of `attack state`.

### SetAIBehaviorParams
`public void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** Sets the value or state of `a i behavior params`.

### SetAllBehaviorParams
`public void SetAllBehaviorParams(HumanAIComponent.BehaviorValues behaviorParams)`

**Purpose:** Sets the value or state of `all behavior params`.

### SetMovementDirection
`public void SetMovementDirection(in Vec2 direction)`

**Purpose:** Sets the value or state of `movement direction`.

### SetScriptedFlags
`public void SetScriptedFlags(Agent.AIScriptedFrameFlags flags)`

**Purpose:** Sets the value or state of `scripted flags`.

### SetScriptedCombatFlags
`public void SetScriptedCombatFlags(Agent.AISpecialCombatModeFlags flags)`

**Purpose:** Sets the value or state of `scripted combat flags`.

### SetScriptedPositionAndDirection
`public void SetScriptedPositionAndDirection(ref WorldPosition scriptedPosition, float scriptedDirection, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Sets the value or state of `scripted position and direction`.

### SetScriptedPosition
`public void SetScriptedPosition(ref WorldPosition position, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Sets the value or state of `scripted position`.

### SetScriptedTargetEntity
`public void SetScriptedTargetEntity(WeakGameEntity target, Agent.AISpecialCombatModeFlags additionalFlags = Agent.AISpecialCombatModeFlags.None, bool ignoreIfAlreadyAttacking = false)`

**Purpose:** Sets the value or state of `scripted target entity`.

### SetAgentExcludeStateForFaceGroupId
`public void SetAgentExcludeStateForFaceGroupId(int faceGroupId, bool isExcluded)`

**Purpose:** Sets the value or state of `agent exclude state for face group id`.

### SetLookAgent
`public void SetLookAgent(Agent agent)`

**Purpose:** Sets the value or state of `look agent`.

### SetInteractionAgent
`public void SetInteractionAgent(Agent agent)`

**Purpose:** Sets the value or state of `interaction agent`.

### SetLookToPointOfInterest
`public void SetLookToPointOfInterest(Vec3 point)`

**Purpose:** Sets the value or state of `look to point of interest`.

### SetAgentFlags
`public void SetAgentFlags(AgentFlag agentFlags)`

**Purpose:** Sets the value or state of `agent flags`.

### SetSelectedMountIndex
`public void SetSelectedMountIndex(int mountIndex)`

**Purpose:** Sets the value or state of `selected mount index`.

### GetFiringOrder
`public int GetFiringOrder()`

**Purpose:** Gets the current value of `firing order`.

### GetRidingOrder
`public int GetRidingOrder()`

**Purpose:** Gets the current value of `riding order`.

### GetSelectedMountIndex
`public int GetSelectedMountIndex()`

**Purpose:** Gets the current value of `selected mount index`.

### GetTargetFormationIndex
`public int GetTargetFormationIndex()`

**Purpose:** Gets the current value of `target formation index`.

### SetFiringOrder
`public void SetFiringOrder(FiringOrder.RangedWeaponUsageOrderEnum order)`

**Purpose:** Sets the value or state of `firing order`.

### SetRidingOrder
`public void SetRidingOrder(RidingOrder.RidingOrderEnum order)`

**Purpose:** Sets the value or state of `riding order`.

### SetAgentFacialAnimation
`public void SetAgentFacialAnimation(Agent.FacialAnimChannel channel, string animationName, bool loop)`

**Purpose:** Sets the value or state of `agent facial animation`.

### SetHandInverseKinematicsFrame
`public bool SetHandInverseKinematicsFrame(in MatrixFrame leftGlobalFrame, in MatrixFrame rightGlobalFrame)`

**Purpose:** Sets the value or state of `hand inverse kinematics frame`.

### SetNativeFormationNo
`public void SetNativeFormationNo(int formationNo)`

**Purpose:** Sets the value or state of `native formation no`.

### SetDirectionChangeTendency
`public void SetDirectionChangeTendency(float tendency)`

**Purpose:** Sets the value or state of `direction change tendency`.

### GetBattleImportance
`public float GetBattleImportance()`

**Purpose:** Gets the current value of `battle importance`.

### GetTraitsMask
`public TroopTraitsMask GetTraitsMask()`

**Purpose:** Gets the current value of `traits mask`.

### SetSynchedPrefabComponentVisibility
`public void SetSynchedPrefabComponentVisibility(int componentIndex, bool visibility)`

**Purpose:** Sets the value or state of `synched prefab component visibility`.

### SetActionSet
`public void SetActionSet(ref AnimationSystemData animationSystemData)`

**Purpose:** Sets the value or state of `action set`.

### SetColumnwiseFollowAgent
`public void SetColumnwiseFollowAgent(Agent followAgent, ref Vec2 followPosition)`

**Purpose:** Sets the value or state of `columnwise follow agent`.

### SetHandInverseKinematicsFrameForMissionObjectUsage
`public void SetHandInverseKinematicsFrameForMissionObjectUsage(in MatrixFrame localIKFrame, in MatrixFrame boundEntityGlobalFrame, float animationHeightDifference = 0f)`

**Purpose:** Sets the value or state of `hand inverse kinematics frame for mission object usage`.

### SetWantsToYell
`public void SetWantsToYell()`

**Purpose:** Sets the value or state of `wants to yell`.

### SetCapeClothSimulator
`public void SetCapeClothSimulator(GameEntityComponent clothSimulatorComponent)`

**Purpose:** Sets the value or state of `cape cloth simulator`.

### GetTargetPosition
`public Vec2 GetTargetPosition()`

**Purpose:** Gets the current value of `target position`.

### GetTargetDirection
`public Vec3 GetTargetDirection()`

**Purpose:** Gets the current value of `target direction`.

### GetAimingTimer
`public float GetAimingTimer()`

**Purpose:** Gets the current value of `aiming timer`.

### GetInteractionDistanceToUsable
`public float GetInteractionDistanceToUsable(IUsable usable)`

**Purpose:** Gets the current value of `interaction distance to usable`.

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Gets the current value of `info text for being not interactable`.

### GetPrimaryWieldedItemIndex
`public EquipmentIndex GetPrimaryWieldedItemIndex()`

**Purpose:** Gets the current value of `primary wielded item index`.

### GetOffhandWieldedItemIndex
`public EquipmentIndex GetOffhandWieldedItemIndex()`

**Purpose:** Gets the current value of `offhand wielded item index`.

### GetMaximumForwardUnlimitedSpeed
`public float GetMaximumForwardUnlimitedSpeed()`

**Purpose:** Gets the current value of `maximum forward unlimited speed`.

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetWeaponEntityFromEquipmentSlot
`public WeakGameEntity GetWeaponEntityFromEquipmentSlot(EquipmentIndex slotIndex)`

**Purpose:** Gets the current value of `weapon entity from equipment slot`.

### GetRetreatPos
`public WorldPosition GetRetreatPos()`

**Purpose:** Gets the current value of `retreat pos`.

### GetScriptedFlags
`public Agent.AIScriptedFrameFlags GetScriptedFlags()`

**Purpose:** Gets the current value of `scripted flags`.

### GetScriptedCombatFlags
`public Agent.AISpecialCombatModeFlags GetScriptedCombatFlags()`

**Purpose:** Gets the current value of `scripted combat flags`.

### GetSteppedEntity
`public WeakGameEntity GetSteppedEntity()`

**Purpose:** Gets the current value of `stepped entity`.

### GetSteppedRootEntity
`public WeakGameEntity GetSteppedRootEntity()`

**Purpose:** Gets the current value of `stepped root entity`.

### GetSteppedBodyFlags
`public BodyFlags GetSteppedBodyFlags()`

**Purpose:** Gets the current value of `stepped body flags`.

### GetCurrentAnimationFlag
`public AnimFlags GetCurrentAnimationFlag(int channelNo)`

**Purpose:** Gets the current value of `current animation flag`.

### GetCurrentAction
`public ActionIndexCache GetCurrentAction(int channelNo)`

**Purpose:** Gets the current value of `current action`.

### GetCurrentActionType
`public Agent.ActionCodeType GetCurrentActionType(int channelNo)`

**Purpose:** Gets the current value of `current action type`.

### GetCurrentActionStage
`public Agent.ActionStage GetCurrentActionStage(int channelNo)`

**Purpose:** Gets the current value of `current action stage`.

### GetCurrentActionDirection
`public Agent.UsageDirection GetCurrentActionDirection(int channelNo)`

**Purpose:** Gets the current value of `current action direction`.

### GetCurrentActionPriority
`public int GetCurrentActionPriority(int channelNo)`

**Purpose:** Gets the current value of `current action priority`.

### GetCurrentActionProgress
`public float GetCurrentActionProgress(int channelNo)`

**Purpose:** Gets the current value of `current action progress`.

### GetActionChannelWeight
`public float GetActionChannelWeight(int channelNo)`

**Purpose:** Gets the current value of `action channel weight`.

### GetActionChannelCurrentActionWeight
`public float GetActionChannelCurrentActionWeight(int channelNo)`

**Purpose:** Gets the current value of `action channel current action weight`.

### GetWorldFrame
`public WorldFrame GetWorldFrame()`

**Purpose:** Gets the current value of `world frame`.

### GetLookDownLimit
`public float GetLookDownLimit()`

**Purpose:** Gets the current value of `look down limit`.

### GetEyeGlobalHeight
`public float GetEyeGlobalHeight()`

**Purpose:** Gets the current value of `eye global height`.

### GetMaximumSpeedLimit
`public float GetMaximumSpeedLimit()`

**Purpose:** Gets the current value of `maximum speed limit`.

### GetCurrentVelocity
`public Vec2 GetCurrentVelocity()`

**Purpose:** Gets the current value of `current velocity`.

### GetTurnSpeed
`public float GetTurnSpeed()`

**Purpose:** Gets the current value of `turn speed`.

### GetCurrentSpeedLimit
`public float GetCurrentSpeedLimit()`

**Purpose:** Gets the current value of `current speed limit`.

### GetRealGlobalVelocity
`public Vec3 GetRealGlobalVelocity()`

**Purpose:** Gets the current value of `real global velocity`.

### GetAverageRealGlobalVelocity
`public Vec3 GetAverageRealGlobalVelocity()`

**Purpose:** Gets the current value of `average real global velocity`.

### GetMovementDirection
`public Vec2 GetMovementDirection()`

**Purpose:** Gets the current value of `movement direction`.

### GetCurWeaponOffset
`public Vec3 GetCurWeaponOffset()`

**Purpose:** Gets the current value of `cur weapon offset`.

### GetIsLeftStance
`public bool GetIsLeftStance()`

**Purpose:** Gets the current value of `is left stance`.

### GetPathDistanceToPoint
`public float GetPathDistanceToPoint(ref Vec3 point)`

**Purpose:** Gets the current value of `path distance to point`.

### GetCurrentNavigationFaceId
`public int GetCurrentNavigationFaceId()`

**Purpose:** Gets the current value of `current navigation face id`.

### GetWorldPosition
`public WorldPosition GetWorldPosition()`

**Purpose:** Gets the current value of `world position`.

### GetGroundMaterialForCollisionEffect
`public int GetGroundMaterialForCollisionEffect()`

**Purpose:** Gets the current value of `ground material for collision effect`.

### GetLookAgent
`public Agent GetLookAgent()`

**Purpose:** Gets the current value of `look agent`.

### GetTargetAgent
`public Agent GetTargetAgent()`

**Purpose:** Gets the current value of `target agent`.

### SetTargetAgent
`public void SetTargetAgent(Agent agent)`

**Purpose:** Sets the value or state of `target agent`.

### SetAutomaticTargetSelection
`public void SetAutomaticTargetSelection(bool enable)`

**Purpose:** Sets the value or state of `automatic target selection`.

### GetAgentFlags
`public AgentFlag GetAgentFlags()`

**Purpose:** Gets the current value of `agent flags`.

### GetAgentFacialAnimation
`public string GetAgentFacialAnimation()`

**Purpose:** Gets the current value of `agent facial animation`.

### GetAgentVoiceDefinition
`public string GetAgentVoiceDefinition()`

**Purpose:** Gets the current value of `agent voice definition`.

### GetEyeGlobalPosition
`public Vec3 GetEyeGlobalPosition()`

**Purpose:** Gets the current value of `eye global position`.

### GetChestGlobalPosition
`public Vec3 GetChestGlobalPosition()`

**Purpose:** Gets the current value of `chest global position`.

### GetDefendMovementFlag
`public Agent.MovementControlFlag GetDefendMovementFlag()`

**Purpose:** Gets the current value of `defend movement flag`.

### GetAttackDirection
`public Agent.UsageDirection GetAttackDirection()`

**Purpose:** Gets the current value of `attack direction`.

### GetWieldedWeaponInfo
`public WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex)`

**Purpose:** Gets the current value of `wielded weapon info`.

### GetBodyRotationConstraint
`public Vec2 GetBodyRotationConstraint(int channelIndex = 1)`

**Purpose:** Gets the current value of `body rotation constraint`.

### GetTotalEncumbrance
`public float GetTotalEncumbrance()`

**Purpose:** Gets the current value of `total encumbrance`.

### GetTotalMass
`public float GetTotalMass()`

**Purpose:** Gets the current value of `total mass`.

### GetAgentDrivenPropertyValue
`public float GetAgentDrivenPropertyValue(DrivenProperty type)`

**Purpose:** Gets the current value of `agent driven property value`.

### GetSteppedMachine
`public UsableMachine GetSteppedMachine()`

**Purpose:** Gets the current value of `stepped machine`.

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**Purpose:** Gets the current value of `attached weapons count`.

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int index)`

**Purpose:** Gets the current value of `attached weapon`.

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int index)`

**Purpose:** Gets the current value of `attached weapon frame`.

### GetAttachedWeaponBoneIndex
`public sbyte GetAttachedWeaponBoneIndex(int index)`

**Purpose:** Gets the current value of `attached weapon bone index`.

### DeleteAttachedWeapon
`public void DeleteAttachedWeapon(int index)`

**Purpose:** Handles logic related to `delete attached weapon`.

### HasRangedWeapon
`public bool HasRangedWeapon(bool checkHasAmmo = false)`

**Purpose:** Checks whether the current object has/contains `ranged weapon`.

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)`

**Purpose:** Gets the current value of `bone entitial frame at animation progress`.

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex)`

**Purpose:** Gets the current value of `formation file and rank info`.

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex, out int fileCount, out int rankCount)`

**Purpose:** Gets the current value of `formation file and rank info`.

### SetMortalityState
`public void SetMortalityState(Agent.MortalityState newState)`

**Purpose:** Sets the value or state of `mortality state`.

### ToggleInvulnerable
`public void ToggleInvulnerable()`

**Purpose:** Handles logic related to `toggle invulnerable`.

### GetArmLength
`public float GetArmLength()`

**Purpose:** Gets the current value of `arm length`.

### GetArmWeight
`public float GetArmWeight()`

**Purpose:** Gets the current value of `arm weight`.

### GetRunningSimulationDataUntilMaximumSpeedReached
`public void GetRunningSimulationDataUntilMaximumSpeedReached(ref float combatAccelerationTime, ref float maxSpeed, float speedValues)`

**Purpose:** Gets the current value of `running simulation data until maximum speed reached`.

### SetMaximumSpeedLimit
`public void SetMaximumSpeedLimit(float maximumSpeedLimit, bool isMultiplier)`

**Purpose:** Sets the value or state of `maximum speed limit`.

### GetBaseArmorEffectivenessForBodyPart
`public float GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType bodyPart)`

**Purpose:** Gets the current value of `base armor effectiveness for body part`.

### GetLastTargetVisibilityState
`public AITargetVisibilityState GetLastTargetVisibilityState()`

**Purpose:** Gets the current value of `last target visibility state`.

### GetMissileRange
`public float GetMissileRange()`

**Purpose:** Gets the current value of `missile range`.

### SetAgentIdleAnimationStatus
`public void SetAgentIdleAnimationStatus(bool idleEnabled)`

**Purpose:** Sets the value or state of `agent idle animation status`.

### GetWeaponToReplaceOnQuickAction
`public ItemObject GetWeaponToReplaceOnQuickAction(SpawnedItemEntity spawnedItem, out EquipmentIndex possibleSlotIndex)`

**Purpose:** Gets the current value of `weapon to replace on quick action`.

### GetAssistingHitter
`public Agent.Hitter GetAssistingHitter(MissionPeer killerPeer)`

**Purpose:** Gets the current value of `assisting hitter`.

### CanReachAgent
`public bool CanReachAgent(Agent otherAgent)`

**Purpose:** Checks whether the current object can `reach agent`.

### CanInteractWithAgent
`public bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)`

**Purpose:** Checks whether the current object can `interact with agent`.

### CanBeAssignedForScriptedMovement
`public bool CanBeAssignedForScriptedMovement()`

**Purpose:** Checks whether the current object can `be assigned for scripted movement`.

### CanReachAndUseObject
`public bool CanReachAndUseObject(UsableMissionObject gameObject, float distanceSq)`

**Purpose:** Checks whether the current object can `reach and use object`.

### CanReachObject
`public bool CanReachObject(UsableMissionObject gameObject, float distanceSq)`

**Purpose:** Checks whether the current object can `reach object`.

### CanReachObjectFromPosition
`public bool CanReachObjectFromPosition(UsableMissionObject gameObject, float distanceSq, Vec3 position)`

**Purpose:** Checks whether the current object can `reach object from position`.

### CanUseObject
`public bool CanUseObject(UsableMissionObject gameObject)`

**Purpose:** Checks whether the current object can `use object`.

### CanMoveDirectlyToPosition
`public bool CanMoveDirectlyToPosition(in Vec2 position)`

**Purpose:** Checks whether the current object can `move directly to position`.

### CanInteractableWeaponBePickedUp
`public bool CanInteractableWeaponBePickedUp(SpawnedItemEntity spawnedItem)`

**Purpose:** Checks whether the current object can `interactable weapon be picked up`.

### CanQuickPickUp
`public bool CanQuickPickUp(SpawnedItemEntity spawnedItem)`

**Purpose:** Checks whether the current object can `quick pick up`.

### CanTeleport
`public unsafe bool CanTeleport()`

**Purpose:** Checks whether the current object can `teleport`.

### IsActive
`public bool IsActive()`

**Purpose:** Handles logic related to `is active`.

### IsRetreating
`public bool IsRetreating()`

**Purpose:** Handles logic related to `is retreating`.

### IsFadingOut
`public bool IsFadingOut()`

**Purpose:** Handles logic related to `is fading out`.

### SetAgentDrivenPropertyValueFromConsole
`public void SetAgentDrivenPropertyValueFromConsole(DrivenProperty type, float val)`

**Purpose:** Sets the value or state of `agent driven property value from console`.

### IsOnLand
`public bool IsOnLand()`

**Purpose:** Handles logic related to `is on land`.

### IsInWater
`public bool IsInWater()`

**Purpose:** Handles logic related to `is in water`.

### IsAbleToUseMachine
`public bool IsAbleToUseMachine()`

**Purpose:** Handles logic related to `is able to use machine`.

### IsAgentParentEntitySameAs
`public bool IsAgentParentEntitySameAs(GameEntity toBeChecked)`

**Purpose:** Handles logic related to `is agent parent entity same as`.

### SetExcludedFromGravity
`public void SetExcludedFromGravity(bool exclude, bool applyAverageGlobalVelocity)`

**Purpose:** Sets the value or state of `excluded from gravity`.

### SetForceAttachedEntity
`public void SetForceAttachedEntity(WeakGameEntity willBeAttached)`

**Purpose:** Sets the value or state of `force attached entity`.

### IsSliding
`public bool IsSliding()`

**Purpose:** Handles logic related to `is sliding`.

### IsSitting
`public bool IsSitting()`

**Purpose:** Handles logic related to `is sitting`.

### IsReleasingChainAttackInMultiplayer
`public bool IsReleasingChainAttackInMultiplayer()`

**Purpose:** Handles logic related to `is releasing chain attack in multiplayer`.

### IsCameraAttachable
`public bool IsCameraAttachable()`

**Purpose:** Handles logic related to `is camera attachable`.

### IsSynchedPrefabComponentVisible
`public bool IsSynchedPrefabComponentVisible(int componentIndex)`

**Purpose:** Handles logic related to `is synched prefab component visible`.

### IsEnemyOf
`public bool IsEnemyOf(Agent otherAgent)`

**Purpose:** Handles logic related to `is enemy of`.

### IsFriendOf
`public bool IsFriendOf(Agent otherAgent)`

**Purpose:** Handles logic related to `is friend of`.

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Called when the `focus lose` event is raised.

### OnItemRemovedFromScene
`public void OnItemRemovedFromScene()`

**Purpose:** Called when the `item removed from scene` event is raised.

### OnUse
`public void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnUseStopped
`public void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### OnWeaponDrop
`public void OnWeaponDrop(EquipmentIndex equipmentSlot)`

**Purpose:** Called when the `weapon drop` event is raised.

### OnItemPickup
`public void OnItemPickup(SpawnedItemEntity spawnedItemEntity, EquipmentIndex weaponPickUpSlotIndex, out bool removeWeapon)`

**Purpose:** Called when the `item pickup` event is raised.

### GetDistanceTo
`public float GetDistanceTo(Agent other)`

**Purpose:** Gets the current value of `distance to`.

### CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection
`public bool CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(int navigationFaceId, in Vec3 direction, float overridenCostForFaceId)`

**Purpose:** Handles logic related to `check path to a i target agent passes through navigation face id from direction`.

### IsTargetNavigationFaceIdBetween
`public bool IsTargetNavigationFaceIdBetween(int navigationFaceIdStart, int navigationFaceIdEnd)`

**Purpose:** Handles logic related to `is target navigation face id between`.

### CheckEquipmentForCapeClothSimulationStateChange
`public void CheckEquipmentForCapeClothSimulationStateChange()`

**Purpose:** Handles logic related to `check equipment for cape cloth simulation state change`.

### CheckToDropFlaggedItem
`public void CheckToDropFlaggedItem()`

**Purpose:** Handles logic related to `check to drop flagged item`.

### CheckSkillForMounting
`public bool CheckSkillForMounting(Agent mountAgent)`

**Purpose:** Handles logic related to `check skill for mounting`.

### InitializeSpawnEquipment
`public void InitializeSpawnEquipment(Equipment spawnEquipment)`

**Purpose:** Initializes the state, resources, or bindings for `spawn equipment`.

### InitializeMissionEquipment
`public void InitializeMissionEquipment(MissionEquipment missionEquipment, Banner banner)`

**Purpose:** Initializes the state, resources, or bindings for `mission equipment`.

### InitializeAgentProperties
`public void InitializeAgentProperties(Equipment spawnEquipment, AgentBuildData agentBuildData)`

**Purpose:** Initializes the state, resources, or bindings for `agent properties`.

### UpdateFormationOrders
`public void UpdateFormationOrders()`

**Purpose:** Updates the state or data of `formation orders`.

### UpdateWeapons
`public void UpdateWeapons()`

**Purpose:** Updates the state or data of `weapons`.

### UpdateAgentProperties
`public void UpdateAgentProperties()`

**Purpose:** Updates the state or data of `agent properties`.

### UpdateCustomDrivenProperties
`public void UpdateCustomDrivenProperties()`

**Purpose:** Updates the state or data of `custom driven properties`.

### UpdateBodyProperties
`public void UpdateBodyProperties(BodyProperties bodyProperties)`

**Purpose:** Updates the state or data of `body properties`.

### UpdateSyncHealthToAllClients
`public void UpdateSyncHealthToAllClients(bool value)`

**Purpose:** Updates the state or data of `sync health to all clients`.

### UpdateSpawnEquipmentAndRefreshVisuals
`public void UpdateSpawnEquipmentAndRefreshVisuals(Equipment newSpawnEquipment)`

**Purpose:** Updates the state or data of `spawn equipment and refresh visuals`.

### ForceUpdateCachedAndFormationValues
`public void ForceUpdateCachedAndFormationValues(bool updateOnlyMovement, bool arrangementChangeAllowed)`

**Purpose:** Handles logic related to `force update cached and formation values`.

### UpdateLastRangedAttackTimeDueToAnAttack
`public void UpdateLastRangedAttackTimeDueToAnAttack(float newTime)`

**Purpose:** Updates the state or data of `last ranged attack time due to an attack`.

### InvalidateTargetAgent
`public void InvalidateTargetAgent()`

**Purpose:** Handles logic related to `invalidate target agent`.

### InvalidateAIWeaponSelections
`public void InvalidateAIWeaponSelections()`

**Purpose:** Handles logic related to `invalidate a i weapon selections`.

### ResetLookAgent
`public void ResetLookAgent()`

**Purpose:** Resets `look agent` to its initial state.

### ResetGuard
`public void ResetGuard()`

**Purpose:** Resets `guard` to its initial state.

### ResetAgentProperties
`public void ResetAgentProperties()`

**Purpose:** Resets `agent properties` to its initial state.

### ResetAiWaitBeforeShootFactor
`public void ResetAiWaitBeforeShootFactor()`

**Purpose:** Resets `ai wait before shoot factor` to its initial state.

### ClearTargetFrame
`public void ClearTargetFrame()`

**Purpose:** Handles logic related to `clear target frame`.

### ClearEquipment
`public void ClearEquipment()`

**Purpose:** Handles logic related to `clear equipment`.

### ClearHandInverseKinematics
`public void ClearHandInverseKinematics()`

**Purpose:** Handles logic related to `clear hand inverse kinematics`.

### ClearAttachedWeapons
`public void ClearAttachedWeapons()`

**Purpose:** Handles logic related to `clear attached weapons`.

### SetDetachableFromFormation
`public void SetDetachableFromFormation(bool value)`

**Purpose:** Sets the value or state of `detachable from formation`.

### TryAttachToFormation
`public bool TryAttachToFormation()`

**Purpose:** Attempts to get `attach to formation`, usually returning the result in an out parameter.

### TryRemoveAllDetachmentScores
`public bool TryRemoveAllDetachmentScores()`

**Purpose:** Attempts to get `remove all detachment scores`, usually returning the result in an out parameter.

### EnforceShieldUsage
`public void EnforceShieldUsage(Agent.UsageDirection shieldDirection)`

**Purpose:** Handles logic related to `enforce shield usage`.

### ObjectHasVacantPosition
`public bool ObjectHasVacantPosition(UsableMissionObject gameObject)`

**Purpose:** Handles logic related to `object has vacant position`.

### InteractingWithAnyGameObject
`public bool InteractingWithAnyGameObject()`

**Purpose:** Handles logic related to `interacting with any game object`.

### StopUsingGameObjectMT
`public void StopUsingGameObjectMT(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**Purpose:** Handles logic related to `stop using game object m t`.

### StopUsingGameObject
`public void StopUsingGameObject(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**Purpose:** Handles logic related to `stop using game object`.

### HandleStopUsingAction
`public void HandleStopUsingAction()`

**Purpose:** Handles the `stop using action` event or callback.

### HandleStartUsingAction
`public void HandleStartUsingAction(UsableMissionObject targetObject, int preferenceIndex)`

**Purpose:** Handles the `start using action` event or callback.

### AddController
`public AgentController AddController(Type type)`

**Purpose:** Adds `controller` to the current collection or state.

### RemoveController
`public AgentController RemoveController(Type type)`

**Purpose:** Removes `controller` from the current collection or state.

### CanThrustAttackStickToBone
`public bool CanThrustAttackStickToBone(BoneBodyPartType bodyPart)`

**Purpose:** Checks whether the current object can `thrust attack stick to bone`.

### GetOldWieldedItemInfo
`public void GetOldWieldedItemInfo(out int rightHandSlotIndex, out int rightHandUsageIndex, out int leftHandSlotIndex, out int leftHandUsageIndex)`

**Purpose:** Gets the current value of `old wielded item info`.

### StartSwitchingWeaponUsageIndexAsClient
`public void StartSwitchingWeaponUsageIndexAsClient(EquipmentIndex equipmentIndex, int usageIndex, Agent.UsageDirection currentMovementFlagUsageDirection)`

**Purpose:** Handles logic related to `start switching weapon usage index as client`.

### TryToWieldWeaponInSlot
`public void TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)`

**Purpose:** Attempts to get `to wield weapon in slot`, usually returning the result in an out parameter.

### PrepareWeaponForDropInEquipmentSlot
`public void PrepareWeaponForDropInEquipmentSlot(EquipmentIndex slotIndex, bool dropWithHolster)`

**Purpose:** Handles logic related to `prepare weapon for drop in equipment slot`.

### AddHitter
`public void AddHitter(MissionPeer peer, float damage, bool isFriendlyHit)`

**Purpose:** Adds `hitter` to the current collection or state.

### TryToSheathWeaponInHand
`public void TryToSheathWeaponInHand(Agent.HandIndex handIndex, Agent.WeaponWieldActionType type)`

**Purpose:** Attempts to get `to sheath weapon in hand`, usually returning the result in an out parameter.

### RemoveHitter
`public void RemoveHitter(MissionPeer peer, bool isFriendlyHit)`

**Purpose:** Removes `hitter` from the current collection or state.

### Retreat
`public void Retreat(WorldPosition retreatPos)`

**Purpose:** Handles logic related to `retreat`.

### StopRetreating
`public void StopRetreating()`

**Purpose:** Handles logic related to `stop retreating`.

### UseGameObject
`public void UseGameObject(UsableMissionObject usedObject, int preferenceIndex = -1)`

**Purpose:** Handles logic related to `use game object`.

### SaveEquipmentsOnHand
`public void SaveEquipmentsOnHand()`

**Purpose:** Saves `equipments on hand` data.

### StartFadingOut
`public void StartFadingOut()`

**Purpose:** Handles logic related to `start fading out`.

### IsWandering
`public bool IsWandering()`

**Purpose:** Handles logic related to `is wandering`.

### SetRenderCheckEnabled
`public void SetRenderCheckEnabled(bool value)`

**Purpose:** Sets the value or state of `render check enabled`.

### GetRenderCheckEnabled
`public bool GetRenderCheckEnabled()`

**Purpose:** Gets the current value of `render check enabled`.

### ComputeAnimationDisplacement
`public Vec3 ComputeAnimationDisplacement(float dt)`

**Purpose:** Handles logic related to `compute animation displacement`.

### TickActionChannels
`public void TickActionChannels(float dt)`

**Purpose:** Handles logic related to `tick action channels`.

### SetIsPhysicsForceClosed
`public void SetIsPhysicsForceClosed(bool isPhysicsForceClosed)`

**Purpose:** Sets the value or state of `is physics force closed`.

### LockAgentReplicationTableDataWithCurrentReliableSequenceNo
`public void LockAgentReplicationTableDataWithCurrentReliableSequenceNo(NetworkCommunicator peer)`

**Purpose:** Handles logic related to `lock agent replication table data with current reliable sequence no`.

### TeleportToPosition
`public void TeleportToPosition(Vec3 position)`

**Purpose:** Handles logic related to `teleport to position`.

### FadeOut
`public void FadeOut(bool hideInstantly, bool hideMount)`

**Purpose:** Handles logic related to `fade out`.

### FadeIn
`public void FadeIn()`

**Purpose:** Handles logic related to `fade in`.

### DisableScriptedMovement
`public void DisableScriptedMovement()`

**Purpose:** Handles logic related to `disable scripted movement`.

### DisableScriptedCombatMovement
`public void DisableScriptedCombatMovement()`

**Purpose:** Handles logic related to `disable scripted combat movement`.

### ForceAiBehaviorSelection
`public void ForceAiBehaviorSelection()`

**Purpose:** Handles logic related to `force ai behavior selection`.

### HasPathThroughNavigationFaceIdFromDirectionMT
`public bool HasPathThroughNavigationFaceIdFromDirectionMT(int navigationFaceId, Vec2 direction)`

**Purpose:** Checks whether the current object has/contains `path through navigation face id from direction m t`.

### HasPathThroughNavigationFaceIdFromDirection
`public bool HasPathThroughNavigationFaceIdFromDirection(int navigationFaceId, Vec2 direction)`

**Purpose:** Checks whether the current object has/contains `path through navigation face id from direction`.

### DisableLookToPointOfInterest
`public void DisableLookToPointOfInterest()`

**Purpose:** Handles logic related to `disable look to point of interest`.

### AddPrefabComponentToBone
`public CompositeComponent AddPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**Purpose:** Adds `prefab component to bone` to the current collection or state.

### MakeVoice
`public void MakeVoice(SkinVoiceManager.SkinVoiceType voiceType, SkinVoiceManager.CombatVoiceNetworkPredictionType predictionType)`

**Purpose:** Handles logic related to `make voice`.

### YellAfterDelay
`public void YellAfterDelay(float delayTimeInSecond)`

**Purpose:** Handles logic related to `yell after delay`.

### WieldNextWeapon
`public void WieldNextWeapon(Agent.HandIndex weaponIndex, Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.WithAnimation)`

**Purpose:** Handles logic related to `wield next weapon`.

### AttackDirectionToMovementFlag
`public Agent.MovementControlFlag AttackDirectionToMovementFlag(Agent.UsageDirection direction)`

**Purpose:** Handles logic related to `attack direction to movement flag`.

### DefendDirectionToMovementFlag
`public Agent.MovementControlFlag DefendDirectionToMovementFlag(Agent.UsageDirection direction)`

**Purpose:** Handles logic related to `defend direction to movement flag`.

### KickClear
`public bool KickClear()`

**Purpose:** Handles logic related to `kick clear`.

### PlayerAttackDirection
`public Agent.UsageDirection PlayerAttackDirection()`

**Purpose:** Handles logic related to `player attack direction`.

### GetRandomPairOfRealBloodBurstBoneIndices
`public ValueTuple<sbyte, sbyte> GetRandomPairOfRealBloodBurstBoneIndices()`

**Purpose:** Gets the current value of `random pair of real blood burst bone indices`.

### CreateBloodBurstAtLimb
`public void CreateBloodBurstAtLimb(sbyte realBoneIndex, float scale)`

**Purpose:** Creates a new `blood burst at limb` instance or object.

### AddComponent
`public void AddComponent(AgentComponent agentComponent)`

**Purpose:** Adds `component` to the current collection or state.

### RemoveComponent
`public bool RemoveComponent(AgentComponent agentComponent)`

**Purpose:** Removes `component` from the current collection or state.

### HandleTaunt
`public void HandleTaunt(int tauntIndex, bool isDefaultTaunt)`

**Purpose:** Handles the `taunt` event or callback.

### HandleBark
`public void HandleBark(int indexOfBark)`

**Purpose:** Handles the `bark` event or callback.

### HandleDropWeapon
`public void HandleDropWeapon(bool isDefendPressed, EquipmentIndex forcedSlotIndexToDropWeaponFrom)`

**Purpose:** Handles the `drop weapon` event or callback.

### DropItem
`public void DropItem(EquipmentIndex itemIndex, WeaponClass pickedUpItemType = WeaponClass.Undefined)`

**Purpose:** Handles logic related to `drop item`.

### EquipItemsFromSpawnEquipment
`public void EquipItemsFromSpawnEquipment(bool neededBatchedItems, bool prepareImmediately, bool useFaceCache, int faceCacheID)`

**Purpose:** Handles logic related to `equip items from spawn equipment`.

### WieldInitialWeapons
`public void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.InstantAfterPickUp, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = TaleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any)`

**Purpose:** Handles logic related to `wield initial weapons`.

### ChangeWeaponHitPoints
`public void ChangeWeaponHitPoints(EquipmentIndex slotIndex, short hitPoints)`

**Purpose:** Handles logic related to `change weapon hit points`.

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Checks whether the current object has/contains `weapon`.

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(EquipmentIndex slotIndex, MissionWeapon weapon, GameEntity weaponEntity, ref MatrixFrame attachLocalFrame)`

**Purpose:** Handles logic related to `attach weapon to weapon`.

### AttachWeaponToBone
`public void AttachWeaponToBone(MissionWeapon weapon, GameEntity weaponEntity, sbyte boneIndex, ref MatrixFrame attachLocalFrame)`

**Purpose:** Handles logic related to `attach weapon to bone`.

### RestoreShieldHitPoints
`public void RestoreShieldHitPoints()`

**Purpose:** Handles logic related to `restore shield hit points`.

### Die
`public void Die(Blow b, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)`

**Purpose:** Handles logic related to `die`.

### MakeDead
`public void MakeDead(bool isKilled, ActionIndexCache actionIndex, int corpsesToFadeIndex = -1)`

**Purpose:** Handles logic related to `make dead`.

### RegisterBlow
`public void RegisterBlow(Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Handles logic related to `register blow`.

### CreateBlowFromBlowAsReflection
`public void CreateBlowFromBlowAsReflection(in Blow blow, in AttackCollisionData collisionData, out Blow outBlow, out AttackCollisionData outCollisionData)`

**Purpose:** Creates a new `blow from blow as reflection` instance or object.

### TickParallel
`public void TickParallel(float dt)`

**Purpose:** Handles logic related to `tick parallel`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### DebugMore
`public void DebugMore()`

**Purpose:** Handles logic related to `debug more`.

### Mount
`public void Mount(Agent mountAgent)`

**Purpose:** Handles logic related to `mount`.

### EquipWeaponToExtraSlotAndWield
`public void EquipWeaponToExtraSlotAndWield(ref MissionWeapon weapon)`

**Purpose:** Handles logic related to `equip weapon to extra slot and wield`.

### RemoveEquippedWeapon
`public void RemoveEquippedWeapon(EquipmentIndex slotIndex)`

**Purpose:** Removes `equipped weapon` from the current collection or state.

### EquipWeaponWithNewEntity
`public void EquipWeaponWithNewEntity(EquipmentIndex slotIndex, ref MissionWeapon weapon)`

**Purpose:** Handles logic related to `equip weapon with new entity`.

### EquipWeaponFromSpawnedItemEntity
`public void EquipWeaponFromSpawnedItemEntity(EquipmentIndex slotIndex, SpawnedItemEntity spawnedItemEntity, bool removeWeapon)`

**Purpose:** Handles logic related to `equip weapon from spawned item entity`.

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Handles logic related to `preload for rendering`.

### AddSynchedPrefabComponentToBone
`public int AddSynchedPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**Purpose:** Adds `synched prefab component to bone` to the current collection or state.

### WillDropWieldedShield
`public bool WillDropWieldedShield(SpawnedItemEntity spawnedItem)`

**Purpose:** Handles logic related to `will drop wielded shield`.

### HadSameTypeOfConsumableOrShieldOnSpawn
`public bool HadSameTypeOfConsumableOrShieldOnSpawn(WeaponClass weaponClass)`

**Purpose:** Handles logic related to `had same type of consumable or shield on spawn`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### TryGetImmediateEnemyAgentMovementData
`public bool TryGetImmediateEnemyAgentMovementData(out float maximumForwardUnlimitedSpeed, out Vec3 position)`

**Purpose:** Attempts to get `get immediate enemy agent movement data`, usually returning the result in an out parameter.

### HasLostShield
`public bool HasLostShield()`

**Purpose:** Checks whether the current object has/contains `lost shield`.

### SetLastDetachmentTickAgentTime
`public void SetLastDetachmentTickAgentTime(float lastDetachmentTickAgentTime)`

**Purpose:** Sets the value or state of `last detachment tick agent time`.

### SetDetachmentWeight
`public void SetDetachmentWeight(float newDetachmentWeight)`

**Purpose:** Sets the value or state of `detachment weight`.

### SetDetachmentIndex
`public void SetDetachmentIndex(int newDetachmentIndex)`

**Purpose:** Sets the value or state of `detachment index`.

### SetOwningAgentMissionPeer
`public void SetOwningAgentMissionPeer(MissionPeer owningAgentMissionPeer)`

**Purpose:** Sets the value or state of `owning agent mission peer`.

### SetMissionRepresentative
`public void SetMissionRepresentative(MissionRepresentativeBase missionRepresentative)`

**Purpose:** Sets the value or state of `mission representative`.

### SetIsLadderQueueUsing
`public void SetIsLadderQueueUsing(bool isLadderQueueUsing)`

**Purpose:** Sets the value or state of `is ladder queue using`.

### SetIsInLadderQueue
`public void SetIsInLadderQueue(bool isInLadderQueue)`

**Purpose:** Sets the value or state of `is in ladder queue`.

### UpdateLocalPositionError
`public void UpdateLocalPositionError()`

**Purpose:** Updates the state or data of `local position error`.

### YellingBehaviour
`public void YellingBehaviour()`

**Purpose:** Handles logic related to `yelling behaviour`.

### HasPathThroughNavigationFacesIDFromDirection
`public bool HasPathThroughNavigationFacesIDFromDirection(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**Purpose:** Checks whether the current object has/contains `path through navigation faces i d from direction`.

### HasPathThroughNavigationFacesIDFromDirectionMT
`public bool HasPathThroughNavigationFacesIDFromDirectionMT(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**Purpose:** Checks whether the current object has/contains `path through navigation faces i d from direction m t`.

### SetInitialFrame
`public void SetInitialFrame(in Vec3 initialPosition, in Vec2 initialDirection, bool canSpawnOutsideOfMissionBoundary = false)`

**Purpose:** Sets the value or state of `initial frame`.

### ClearTargetZ
`public void ClearTargetZ()`

**Purpose:** Handles logic related to `clear target z`.

### MovementFlagToDirection
`public static Agent.UsageDirection MovementFlagToDirection(Agent.MovementControlFlag flag)`

**Purpose:** Handles logic related to `movement flag to direction`.

### GetActionDirection
`public static Agent.UsageDirection GetActionDirection(int actionIndex)`

**Purpose:** Gets the current value of `action direction`.

### GetMonsterUsageIndex
`public static int GetMonsterUsageIndex(string monsterUsage)`

**Purpose:** Gets the current value of `monster usage index`.

### GetSoundParameterForArmorType
`public static float GetSoundParameterForArmorType(ArmorComponent.ArmorMaterialTypes armorMaterialType)`

**Purpose:** Gets the current value of `sound parameter for armor type`.

### IncreaseDamage
`public void IncreaseDamage(float amount)`

**Purpose:** Handles logic related to `increase damage`.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RegisterLastBlow
`public void RegisterLastBlow(int ownerId, AgentAttackType attackType)`

**Purpose:** Handles logic related to `register last blow`.

### OnAgentHealthChangedDelegate
`public delegate void OnAgentHealthChangedDelegate(Agent agent, float oldHealth, float newHealth)`

**Purpose:** Called when the `agent health changed delegate` event is raised.

### OnMountHealthChangedDelegate
`public delegate void OnMountHealthChangedDelegate(Agent agent, Agent mount, float oldHealth, float newHealth)`

**Purpose:** Called when the `mount health changed delegate` event is raised.

### OnMainAgentWieldedItemChangeDelegate
`public delegate void OnMainAgentWieldedItemChangeDelegate()`

**Purpose:** Called when the `main agent wielded item change delegate` event is raised.

## Usage Example

```csharp
var value = new Agent();
value.GetHasOnAiInputSetCallback();
```

## See Also

- [Complete Class Catalog](../catalog)