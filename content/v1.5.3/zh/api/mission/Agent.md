---
title: "Agent"
description: "Agent 的自动生成类参考。"
---
# Agent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Agent : DotNetObject,IAgent,IFocusable,IUsable,IFormationUnit,ITrackableBase `
**Base:** DotNetObject,IAgent,IFocusable,IUsable,IFormationUnit,ITrackableBase
**Source:** TaleWorlds.MountAndBlade/Agent.cs

## 概述

`Agent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Agent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetHasOnAiInputSetCallback
`public bool GetHasOnAiInputSetCallback() `

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value) `

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ) `

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName() `

### UpdateAgentStats
`public void UpdateAgentStats() `

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex,int weaponUsageIndex) `

### DebugGetHealth
`public float DebugGetHealth() `

### SetTargetPosition
`public void SetTargetPosition(Vec2 value) `

### SetTargetZ
`public void SetTargetZ(float targetZ) `

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp) `

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value) `

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds) `

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition,in Vec3 targetDirection) `

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration) `

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction) `

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState) `

### IsAlarmStateNormal
`public bool IsAlarmStateNormal() `

### IsCautious
`public bool IsCautious() `

### IsPatrollingCautious
`public bool IsPatrollingCautious() `

### IsAlarmed
`public bool IsAlarmed() `

### SetAlarmState
`public bool SetAlarmState(Agent.AIStateFlag alarmStateFlag) `

### SetTargetFormationIndex
`public void SetTargetFormationIndex(int targetFormationIndex) `

### StartRagdollAsCorpse
`public void StartRagdollAsCorpse() `

### EndRagdollAsCorpse
`public void EndRagdollAsCorpse() `

### IsAddedAsCorpse
`public bool IsAddedAsCorpse() `

### AddAsCorpse
`public void AddAsCorpse() `

### SetOverridenStrikeAndDeathAction
`public void SetOverridenStrikeAndDeathAction(in ActionIndexCache strikeAction,in ActionIndexCache deathAction) `

### ApplyForceOnRagdoll
`public void ApplyForceOnRagdoll(sbyte boneIndex,in Vec3 force) `

### SetVelocityLimitsOnRagdoll
`public void SetVelocityLimitsOnRagdoll(float linearVelocityLimit,float angularVelocityLimit) `

### GetAILastSuspiciousPosition
`public WorldPosition GetAILastSuspiciousPosition() `

### SetAILastSuspiciousPosition
`public void SetAILastSuspiciousPosition(WorldPosition lastSuspiciousPosition,bool checkNavMeshForCorrection) `

### GetAIMoveDestination
`public WorldPosition GetAIMoveDestination() `

### FindLongestDirectMoveToPosition
`public Vec2 FindLongestDirectMoveToPosition(Vec2 targetPosition,bool checkBoundaries,bool checkFriendlyAgents,out bool isCollidedWithAgent) `

### GetAIMoveStartTolerance
`public float GetAIMoveStartTolerance() `

### GetAIMoveStopTolerance
`public float GetAIMoveStopTolerance() `

### GetBaseFormationFrame
`public unsafe bool GetBaseFormationFrame(out WorldPosition formationPosition,out Vec2 formationDirection) `

### IsAIAtMoveDestination
`public bool IsAIAtMoveDestination() `

### SetFormationBanner
`public void SetFormationBanner(ItemObject banner) `

### SetIsAIPaused
`public void SetIsAIPaused(bool isPaused) `

### ResetEnemyCaches
`public void ResetEnemyCaches() `

### SetTargetPositionSynched
`public void SetTargetPositionSynched(ref Vec2 targetPosition) `

### SetTargetPositionAndDirectionSynched
`public void SetTargetPositionAndDirectionSynched(ref Vec2 targetPosition,ref Vec3 targetDirection) `

### SetBodyArmorMaterialType
`public void SetBodyArmorMaterialType(ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType) `

### SetUsedGameObjectForClient
`public void SetUsedGameObjectForClient(UsableMissionObject usedObject) `

### SetTeam
`public void SetTeam(Team team,bool sync) `

### SetClothingColor1
`public void SetClothingColor1(uint color) `

### SetClothingColor2
`public void SetClothingColor2(uint color) `

### SetWieldedItemIndexAsClient
`public void SetWieldedItemIndexAsClient(Agent.HandIndex handIndex,EquipmentIndex equipmentIndex,bool isWieldedInstantly,bool isWieldedOnSpawn,int mainHandCurrentUsageIndex) `

### SetPreciseRangedAimingEnabled
`public void SetPreciseRangedAimingEnabled(bool set) `

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set) `

### OnConversationStarted
`public void OnConversationStarted() `

### SetCrouchMode
`public void SetCrouchMode(bool set) `

### SetWeaponAmountInSlot
`public void SetWeaponAmountInSlot(EquipmentIndex equipmentSlot,short amount,bool enforcePrimaryItem) `

### SetDraggingMode
`public void SetDraggingMode(bool set) `

### SetWeaponAmmoAsClient
`public void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex,EquipmentIndex ammoEquipmentIndex,short ammo) `

### SetWeaponReloadPhaseAsClient
`public void SetWeaponReloadPhaseAsClient(EquipmentIndex equipmentIndex,short reloadState) `

### SetReloadAmmoInSlot
`public void SetReloadAmmoInSlot(EquipmentIndex equipmentIndex,EquipmentIndex ammoSlotIndex,short reloadedAmmo) `

### SetUsageIndexOfWeaponInSlotAsClient
`public void SetUsageIndexOfWeaponInSlotAsClient(EquipmentIndex slotIndex,int usageIndex) `

### SetRandomizeColors
`public void SetRandomizeColors(bool shouldRandomize) `

### SetFormationFrameDisabled
`public void SetFormationFrameDisabled() `

### SetFormationFrameEnabled
`public void SetFormationFrameEnabled(WorldPosition position,Vec2 direction,Vec2 positionVelocity,float formationDirectionEnforcingFactor) `

### SetShouldCatchUpWithFormation
`public void SetShouldCatchUpWithFormation(bool value) `

### SetFormationIntegrityData
`public void SetFormationIntegrityData(Vec2 position,Vec2 currentFormationDirection,Vec2 averageVelocityOfCloseAgents,float averageMaxUnlimitedSpeedOfCloseAgents,float deviationOfPositions,bool shouldKeepWithFormationInsteadOfMovingToAgent) `

### IsCrouchingAllowed
`public bool IsCrouchingAllowed() `

### SetCurrentActionProgress
`public void SetCurrentActionProgress(int channelNo,float progress) `

### SetCurrentActionSpeed
`public void SetCurrentActionSpeed(int channelNo,float speed) `

### SetActionChannel
`public bool SetActionChannel(int channelNo,in ActionIndexCache actionIndexCache,bool ignorePriority = false,AnimFlags additionalFlags =(AnimFlags)0UL,float blendWithNextActionFactor = 0f,float actionSpeed = 1f,float blendInPeriod = -0.2f,float blendOutPeriodToNoAnim = 0.4f,float startProgress = 0f,bool useLinearSmoothing = false,float blendOutPeriod = -0.2f,int actionShift = 0,bool forceFaceMorphRestart = true)`

### SetAttackState
`public void SetAttackState(int attackState) `

### SetAIBehaviorParams
`public void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior,float y1,float x2,float y2,float x3,float y3) `

### SetAllBehaviorParams
`public void SetAllBehaviorParams(HumanAIComponent.BehaviorValues[] behaviorParams) `

### SetMovementDirection
`public void SetMovementDirection(in Vec2 direction) `

### SetScriptedFlags
`public void SetScriptedFlags(Agent.AIScriptedFrameFlags flags) `

### SetScriptedCombatFlags
`public void SetScriptedCombatFlags(Agent.AISpecialCombatModeFlags flags) `

### SetScriptedPositionAndDirection
`public void SetScriptedPositionAndDirection(ref WorldPosition scriptedPosition,float scriptedDirection,bool addHumanLikeDelay,Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None) `

### SetScriptedPosition
`public void SetScriptedPosition(ref WorldPosition position,bool addHumanLikeDelay,Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None) `

### SetScriptedTargetEntity
`public void SetScriptedTargetEntity(WeakGameEntity target,Agent.AISpecialCombatModeFlags additionalFlags = Agent.AISpecialCombatModeFlags.None,bool ignoreIfAlreadyAttacking = false) `

### SetAgentExcludeStateForFaceGroupId
`public void SetAgentExcludeStateForFaceGroupId(int faceGroupId,bool isExcluded) `

### SetLookAgent
`public void SetLookAgent(Agent agent) `

### SetInteractionAgent
`public void SetInteractionAgent(Agent agent) `

### SetLookToPointOfInterest
`public void SetLookToPointOfInterest(Vec3 point) `

### SetAgentFlags
`public void SetAgentFlags(AgentFlag agentFlags) `

### SetSelectedMountIndex
`public void SetSelectedMountIndex(int mountIndex) `

### GetFiringOrder
`public int GetFiringOrder() `

### GetRidingOrder
`public int GetRidingOrder() `

### GetSelectedMountIndex
`public int GetSelectedMountIndex() `

### GetTargetFormationIndex
`public int GetTargetFormationIndex() `

### SetFiringOrder
`public void SetFiringOrder(FiringOrder.RangedWeaponUsageOrderEnum order) `

### SetRidingOrder
`public void SetRidingOrder(RidingOrder.RidingOrderEnum order) `

### SetAgentFacialAnimation
`public void SetAgentFacialAnimation(Agent.FacialAnimChannel channel,string animationName,bool loop) `

### SetHandInverseKinematicsFrame
`public bool SetHandInverseKinematicsFrame(in MatrixFrame leftGlobalFrame,in MatrixFrame rightGlobalFrame) `

### SetNativeFormationNo
`public void SetNativeFormationNo(int formationNo) `

### SetDirectionChangeTendency
`public void SetDirectionChangeTendency(float tendency) `

### GetBattleImportance
`public float GetBattleImportance() `

### GetTraitsMask
`public TroopTraitsMask GetTraitsMask() `

### SetSynchedPrefabComponentVisibility
`public void SetSynchedPrefabComponentVisibility(int componentIndex,bool visibility) `

### SetActionSet
`public void SetActionSet(ref AnimationSystemData animationSystemData) `

### SetColumnwiseFollowAgent
`public void SetColumnwiseFollowAgent(Agent followAgent,ref Vec2 followPosition) `

### SetHandInverseKinematicsFrameForMissionObjectUsage
`public void SetHandInverseKinematicsFrameForMissionObjectUsage(in MatrixFrame localIKFrame,in MatrixFrame boundEntityGlobalFrame,float animationHeightDifference = 0f) `

### SetWantsToYell
`public void SetWantsToYell() `

### SetCapeClothSimulator
`public void SetCapeClothSimulator(GameEntityComponent clothSimulatorComponent) `

### GetTargetPosition
`public Vec2 GetTargetPosition() `

### GetTargetDirection
`public Vec3 GetTargetDirection() `

### GetAimingTimer
`public float GetAimingTimer() `

### GetInteractionDistanceToUsable
`public float GetInteractionDistanceToUsable(IUsable usable) `

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent) `

### GetPrimaryWieldedItemIndex
`public EquipmentIndex GetPrimaryWieldedItemIndex() `

### GetOffhandWieldedItemIndex
`public EquipmentIndex GetOffhandWieldedItemIndex() `

### GetMaximumForwardUnlimitedSpeed
`public float GetMaximumForwardUnlimitedSpeed() `

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity) `

### GetWeaponEntityFromEquipmentSlot
`public WeakGameEntity GetWeaponEntityFromEquipmentSlot(EquipmentIndex slotIndex) `

### GetRetreatPos
`public WorldPosition GetRetreatPos() `

### GetScriptedFlags
`public Agent.AIScriptedFrameFlags GetScriptedFlags() `

### GetScriptedCombatFlags
`public Agent.AISpecialCombatModeFlags GetScriptedCombatFlags() `

### GetSteppedEntity
`public WeakGameEntity GetSteppedEntity() `

### GetSteppedRootEntity
`public WeakGameEntity GetSteppedRootEntity() `

### GetSteppedBodyFlags
`public BodyFlags GetSteppedBodyFlags() `

### GetCurrentAnimationFlag
`public AnimFlags GetCurrentAnimationFlag(int channelNo) `

### GetCurrentAction
`public ActionIndexCache GetCurrentAction(int channelNo) `

### GetCurrentActionType
`public Agent.ActionCodeType GetCurrentActionType(int channelNo) `

### GetCurrentActionStage
`public Agent.ActionStage GetCurrentActionStage(int channelNo) `

### GetCurrentActionDirection
`public Agent.UsageDirection GetCurrentActionDirection(int channelNo) `

### GetCurrentActionPriority
`public int GetCurrentActionPriority(int channelNo) `

### GetCurrentActionProgress
`public float GetCurrentActionProgress(int channelNo) `

### GetActionChannelWeight
`public float GetActionChannelWeight(int channelNo) `

### GetActionChannelCurrentActionWeight
`public float GetActionChannelCurrentActionWeight(int channelNo) `

### GetWorldFrame
`public WorldFrame GetWorldFrame() `

### GetLookDownLimit
`public float GetLookDownLimit() `

### GetEyeGlobalHeight
`public float GetEyeGlobalHeight() `

### GetMaximumSpeedLimit
`public float GetMaximumSpeedLimit() `

### GetCurrentVelocity
`public Vec2 GetCurrentVelocity() `

### GetTurnSpeed
`public float GetTurnSpeed() `

### GetCurrentSpeedLimit
`public float GetCurrentSpeedLimit() `

### GetRealGlobalVelocity
`public Vec3 GetRealGlobalVelocity() `

### GetAverageRealGlobalVelocity
`public Vec3 GetAverageRealGlobalVelocity() `

### GetMovementDirection
`public Vec2 GetMovementDirection() `

### GetCurWeaponOffset
`public Vec3 GetCurWeaponOffset() `

### GetIsLeftStance
`public bool GetIsLeftStance() `

### GetPathDistanceToPoint
`public float GetPathDistanceToPoint(ref Vec3 point) `

### GetCurrentNavigationFaceId
`public int GetCurrentNavigationFaceId() `

### GetWorldPosition
`public WorldPosition GetWorldPosition() `

### GetGroundMaterialForCollisionEffect
`public int GetGroundMaterialForCollisionEffect() `

### GetLookAgent
`public Agent GetLookAgent() `

### GetTargetAgent
`public Agent GetTargetAgent() `

### SetTargetAgent
`public void SetTargetAgent(Agent agent) `

### SetAutomaticTargetSelection
`public void SetAutomaticTargetSelection(bool enable) `

### GetAgentFlags
`public AgentFlag GetAgentFlags() `

### GetAgentFacialAnimation
`public string GetAgentFacialAnimation() `

### GetAgentVoiceDefinition
`public string GetAgentVoiceDefinition() `

### GetEyeGlobalPosition
`public Vec3 GetEyeGlobalPosition() `

### GetChestGlobalPosition
`public Vec3 GetChestGlobalPosition() `

### GetDefendMovementFlag
`public Agent.MovementControlFlag GetDefendMovementFlag() `

### GetAttackDirection
`public Agent.UsageDirection GetAttackDirection() `

### GetWieldedWeaponInfo
`public WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex) `

### GetBodyRotationConstraint
`public Vec2 GetBodyRotationConstraint(int channelIndex = 1) `

### GetTotalEncumbrance
`public float GetTotalEncumbrance() `

### GetTotalMass
`public float GetTotalMass() `

### GetAgentDrivenPropertyValue
`public float GetAgentDrivenPropertyValue(DrivenProperty type) `

### GetSteppedMachine
`public UsableMachine GetSteppedMachine() `

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount() `

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int index) `

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int index) `

### GetAttachedWeaponBoneIndex
`public sbyte GetAttachedWeaponBoneIndex(int index) `

### DeleteAttachedWeapon
`public void DeleteAttachedWeapon(int index) `

### HasRangedWeapon
`public bool HasRangedWeapon(bool checkHasAmmo = false) `

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex,int animationIndex,float progress) `

### GetBoneEntitialFrame
`public MatrixFrame GetBoneEntitialFrame(sbyte boneIndex,bool useBoneMapping) `

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex,out int rankIndex) `
`public void GetFormationFileAndRankInfo(out int fileIndex,out int rankIndex,out int fileCount,out int rankCount) `

### SetMortalityState
`public void SetMortalityState(Agent.MortalityState newState) `

### ToggleInvulnerable
`public void ToggleInvulnerable() `

### GetArmLength
`public float GetArmLength() `

### GetArmWeight
`public float GetArmWeight() `

### GetRunningSimulationDataUntilMaximumSpeedReached
`public void GetRunningSimulationDataUntilMaximumSpeedReached(ref float combatAccelerationTime,ref float maxSpeed,float[] speedValues) `

### SetMaximumSpeedLimit
`public void SetMaximumSpeedLimit(float maximumSpeedLimit,bool isMultiplier) `

### GetBaseArmorEffectivenessForBodyPart
`public float GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType bodyPart) `

### GetLastTargetVisibilityState
`public AITargetVisibilityState GetLastTargetVisibilityState() `

### GetMissileRange
`public float GetMissileRange() `

### SetAgentIdleAnimationStatus
`public void SetAgentIdleAnimationStatus(bool idleEnabled) `

### GetWeaponToReplaceOnQuickAction
`public ItemObject GetWeaponToReplaceOnQuickAction(SpawnedItemEntity spawnedItem,out EquipmentIndex possibleSlotIndex) `

### GetAssistingHitter
`public Agent.Hitter GetAssistingHitter(MissionPeer killerPeer) `

### CanReachAgent
`public bool CanReachAgent(Agent otherAgent) `

### CanInteractWithAgent
`public bool CanInteractWithAgent(Agent otherAgent,float userAgentCameraElevation) `

### CanBeAssignedForScriptedMovement
`public bool CanBeAssignedForScriptedMovement() `

### CanReachAndUseObject
`public bool CanReachAndUseObject(UsableMissionObject gameObject,float distanceSq) `

### CanReachObject
`public bool CanReachObject(UsableMissionObject gameObject,float distanceSq) `

### CanReachObjectFromPosition
`public bool CanReachObjectFromPosition(UsableMissionObject gameObject,float distanceSq,Vec3 position) `

### CanUseObject
`public bool CanUseObject(UsableMissionObject gameObject) `

### CanMoveDirectlyToPosition
`public bool CanMoveDirectlyToPosition(in Vec2 position) `

### CanInteractableWeaponBePickedUp
`public bool CanInteractableWeaponBePickedUp(SpawnedItemEntity spawnedItem) `

### CanQuickPickUp
`public bool CanQuickPickUp(SpawnedItemEntity spawnedItem) `

### CanTeleport
`public unsafe bool CanTeleport() `

### IsActive
`public bool IsActive() `

### IsRetreating
`public bool IsRetreating() `

### IsFadingOut
`public bool IsFadingOut() `

### SetAgentDrivenPropertyValueFromConsole
`public void SetAgentDrivenPropertyValueFromConsole(DrivenProperty type,float val) `

### IsOnLand
`public bool IsOnLand() `

### IsInWater
`public bool IsInWater() `

### IsAbleToUseMachine
`public bool IsAbleToUseMachine() `

### IsAgentParentEntitySameAs
`public bool IsAgentParentEntitySameAs(GameEntity toBeChecked) `

### SetExcludedFromGravity
`public void SetExcludedFromGravity(bool exclude,bool applyAverageGlobalVelocity) `

### SetForceAttachedEntity
`public void SetForceAttachedEntity(WeakGameEntity willBeAttached) `

### IsSliding
`public bool IsSliding() `

### IsSitting
`public bool IsSitting() `

### IsReleasingChainAttackInMultiplayer
`public bool IsReleasingChainAttackInMultiplayer() `

### IsCameraAttachable
`public bool IsCameraAttachable() `

### IsSynchedPrefabComponentVisible
`public bool IsSynchedPrefabComponentVisible(int componentIndex) `

### IsEnemyOf
`public bool IsEnemyOf(Agent otherAgent) `

### IsFriendOf
`public bool IsFriendOf(Agent otherAgent) `

### OnFocusGain
`public void OnFocusGain(Agent userAgent) `

### OnFocusLose
`public void OnFocusLose(Agent userAgent) `

### OnItemRemovedFromScene
`public void OnItemRemovedFromScene() `

### OnUse
`public void OnUse(Agent userAgent,sbyte agentBoneIndex) `

### OnUseStopped
`public void OnUseStopped(Agent userAgent,bool isSuccessful,int preferenceIndex) `

### OnWeaponDrop
`public void OnWeaponDrop(EquipmentIndex equipmentSlot) `

### OnItemPickup
`public void OnItemPickup(SpawnedItemEntity spawnedItemEntity,EquipmentIndex weaponPickUpSlotIndex,out bool removeWeapon) `

### GetDistanceTo
`public float GetDistanceTo(Agent other) `

### CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection
`public bool CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(int navigationFaceId,in Vec3 direction,float overridenCostForFaceId) `

### IsTargetNavigationFaceIdBetween
`public bool IsTargetNavigationFaceIdBetween(int navigationFaceIdStart,int navigationFaceIdEnd) `

### CheckEquipmentForCapeClothSimulationStateChange
`public void CheckEquipmentForCapeClothSimulationStateChange() `

### CheckToDropFlaggedItem
`public void CheckToDropFlaggedItem() `

### CheckSkillForMounting
`public bool CheckSkillForMounting(Agent mountAgent) `

### InitializeSpawnEquipment
`public void InitializeSpawnEquipment(Equipment spawnEquipment) `

### InitializeMissionEquipment
`public void InitializeMissionEquipment(MissionEquipment missionEquipment,Banner banner) `

### InitializeAgentProperties
`public void InitializeAgentProperties(Equipment spawnEquipment,AgentBuildData agentBuildData) `

### UpdateFormationOrders
`public void UpdateFormationOrders() `

### UpdateWeapons
`public void UpdateWeapons() `

### UpdateAgentProperties
`public void UpdateAgentProperties() `

### UpdateCustomDrivenProperties
`public void UpdateCustomDrivenProperties() `

### UpdateBodyProperties
`public void UpdateBodyProperties(BodyProperties bodyProperties) `

### UpdateSyncHealthToAllClients
`public void UpdateSyncHealthToAllClients(bool value) `

### UpdateSpawnEquipmentAndRefreshVisuals
`public void UpdateSpawnEquipmentAndRefreshVisuals(Equipment newSpawnEquipment) `

### ForceUpdateCachedAndFormationValues
`public void ForceUpdateCachedAndFormationValues(bool updateOnlyMovement,bool arrangementChangeAllowed) `

### UpdateDirectionChangeTendency
`public void UpdateDirectionChangeTendency() `

### UpdateLastRangedAttackTimeDueToAnAttack
`public void UpdateLastRangedAttackTimeDueToAnAttack(float newTime) `

### InvalidateTargetAgent
`public void InvalidateTargetAgent() `

### InvalidateAIWeaponSelections
`public void InvalidateAIWeaponSelections() `

### ResetLookAgent
`public void ResetLookAgent() `

### ResetGuard
`public void ResetGuard() `

### ResetAgentProperties
`public void ResetAgentProperties() `

### ResetAiWaitBeforeShootFactor
`public void ResetAiWaitBeforeShootFactor() `

### ClearTargetFrame
`public void ClearTargetFrame() `

### ClearEquipment
`public void ClearEquipment() `

### ClearHandInverseKinematics
`public void ClearHandInverseKinematics() `

### ClearAttachedWeapons
`public void ClearAttachedWeapons() `

### SetDetachableFromFormation
`public void SetDetachableFromFormation(bool value) `

### TryAttachToFormation
`public bool TryAttachToFormation() `

### TryRemoveAllDetachmentScores
`public bool TryRemoveAllDetachmentScores() `

### TrySetFormationFrame
`public unsafe bool TrySetFormationFrame(in WorldPosition formationPosition,in Vec2 formationDirection) `

### EnforceShieldUsage
`public void EnforceShieldUsage(Agent.UsageDirection shieldDirection) `

### ObjectHasVacantPosition
`public bool ObjectHasVacantPosition(UsableMissionObject gameObject) `

### InteractingWithAnyGameObject
`public bool InteractingWithAnyGameObject() `

### StopUsingGameObjectMT
`public void StopUsingGameObjectMT(bool isSuccessful = true,Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject) `

### StopUsingGameObject
`public void StopUsingGameObject(bool isSuccessful = true,Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject) `

### HandleStopUsingAction
`public void HandleStopUsingAction() `

### HandleStartUsingAction
`public void HandleStartUsingAction(UsableMissionObject targetObject,int preferenceIndex) `

### AddController
`public AgentController AddController(Type type) `

### RemoveController
`public AgentController RemoveController(Type type) `

### CanThrustAttackStickToBone
`public bool CanThrustAttackStickToBone(BoneBodyPartType bodyPart) `

### GetOldWieldedItemInfo
`public void GetOldWieldedItemInfo(out int rightHandSlotIndex,out int rightHandUsageIndex,out int leftHandSlotIndex,out int leftHandUsageIndex) `

### StartSwitchingWeaponUsageIndexAsClient
`public void StartSwitchingWeaponUsageIndexAsClient(EquipmentIndex equipmentIndex,int usageIndex,Agent.UsageDirection currentMovementFlagUsageDirection) `

### TryToWieldWeaponInSlot
`public void TryToWieldWeaponInSlot(EquipmentIndex slotIndex,Agent.WeaponWieldActionType type,bool isWieldedOnSpawn) `

### PrepareWeaponForDropInEquipmentSlot
`public void PrepareWeaponForDropInEquipmentSlot(EquipmentIndex slotIndex,bool dropWithHolster) `

### AddHitter
`public void AddHitter(MissionPeer peer,float damage,bool isFriendlyHit) `

### TryToSheathWeaponInHand
`public void TryToSheathWeaponInHand(Agent.HandIndex handIndex,Agent.WeaponWieldActionType type) `

### RemoveHitter
`public void RemoveHitter(MissionPeer peer,bool isFriendlyHit) `

### Retreat
`public void Retreat(WorldPosition retreatPos) `

### StopRetreating
`public void StopRetreating() `

### UseGameObject
`public void UseGameObject(UsableMissionObject usedObject,int preferenceIndex = -1) `

### SaveEquipmentsOnHand
`public void SaveEquipmentsOnHand() `

### StartFadingOut
`public void StartFadingOut() `

### IsWandering
`public bool IsWandering() `

### SetRenderCheckEnabled
`public void SetRenderCheckEnabled(bool value) `

### GetRenderCheckEnabled
`public bool GetRenderCheckEnabled() `

### ComputeAnimationDisplacement
`public Vec3 ComputeAnimationDisplacement(float dt) `

### TickActionChannels
`public void TickActionChannels(float dt) `

### SetIsPhysicsForceClosed
`public void SetIsPhysicsForceClosed(bool isPhysicsForceClosed) `

### LockAgentReplicationTableDataWithCurrentReliableSequenceNo
`public void LockAgentReplicationTableDataWithCurrentReliableSequenceNo(NetworkCommunicator peer) `

### TeleportToPosition
`public void TeleportToPosition(Vec3 position) `

### FadeOut
`public void FadeOut(bool hideInstantly,bool hideMount) `

### FadeIn
`public void FadeIn() `

### DisableScriptedMovement
`public void DisableScriptedMovement() `

### DisableScriptedCombatMovement
`public void DisableScriptedCombatMovement() `

### ForceAiBehaviorSelection
`public void ForceAiBehaviorSelection() `

### HasPathThroughNavigationFaceIdFromDirectionMT
`public bool HasPathThroughNavigationFaceIdFromDirectionMT(int navigationFaceId,Vec2 direction) `

### HasPathThroughNavigationFaceIdFromDirection
`public bool HasPathThroughNavigationFaceIdFromDirection(int navigationFaceId,Vec2 direction) `

### DisableLookToPointOfInterest
`public void DisableLookToPointOfInterest() `

### AddPrefabComponentToBone
`public CompositeComponent AddPrefabComponentToBone(string prefabName,sbyte boneIndex) `

### MakeVoice
`public void MakeVoice(SkinVoiceManager.SkinVoiceType voiceType,SkinVoiceManager.CombatVoiceNetworkPredictionType predictionType) `

### YellAfterDelay
`public void YellAfterDelay(float delayTimeInSecond) `

### WieldNextWeapon
`public void WieldNextWeapon(Agent.HandIndex weaponIndex,Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.WithAnimation) `

### AttackDirectionToMovementFlag
`public Agent.MovementControlFlag AttackDirectionToMovementFlag(Agent.UsageDirection direction) `

### DefendDirectionToMovementFlag
`public Agent.MovementControlFlag DefendDirectionToMovementFlag(Agent.UsageDirection direction) `

### KickClear
`public bool KickClear() `

### PlayerAttackDirection
`public Agent.UsageDirection PlayerAttackDirection() `

### GetRandomPairOfRealBloodBurstBoneIndices
`public ValueTuple<sbyte,sbyte> GetRandomPairOfRealBloodBurstBoneIndices() `

### CreateBloodBurstAtLimb
`public void CreateBloodBurstAtLimb(sbyte realBoneIndex,float scale) `

### AddComponent
`public void AddComponent(AgentComponent agentComponent) `

### RemoveComponent
`public bool RemoveComponent(AgentComponent agentComponent) `

### HandleTaunt
`public void HandleTaunt(int tauntIndex,bool isDefaultTaunt) `

### HandleBark
`public void HandleBark(int indexOfBark) `

### HandleDropWeapon
`public void HandleDropWeapon(bool isDefendPressed,EquipmentIndex forcedSlotIndexToDropWeaponFrom) `

### DropItem
`public void DropItem(EquipmentIndex itemIndex,WeaponClass pickedUpItemType = WeaponClass.Undefined) `

### EquipItemsFromSpawnEquipment
`public void EquipItemsFromSpawnEquipment(bool neededBatchedItems,bool prepareImmediately,bool useFaceCache,int faceCacheID) `

### WieldInitialWeapons
`public void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.InstantAfterPickUp,Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = TaleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any) `

### ChangeWeaponHitPoints
`public void ChangeWeaponHitPoints(EquipmentIndex slotIndex,short hitPoints) `

### HasWeapon
`public bool HasWeapon() `

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(EquipmentIndex slotIndex,MissionWeapon weapon,GameEntity weaponEntity,ref MatrixFrame attachLocalFrame) `

### AttachWeaponToBone
`public void AttachWeaponToBone(MissionWeapon weapon,GameEntity weaponEntity,sbyte boneIndex,ref MatrixFrame attachLocalFrame) `

### RestoreShieldHitPoints
`public void RestoreShieldHitPoints() `

### Die
`public void Die(Blow b,Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid) `

### MakeDead
`public void MakeDead(bool isKilled,ActionIndexCache actionIndex,int corpsesToFadeIndex = -1) `

### RegisterBlow
`public void RegisterBlow(Blow blow,in AttackCollisionData collisionData) `

### CreateBlowFromBlowAsReflection
`public void CreateBlowFromBlowAsReflection(in Blow blow,in AttackCollisionData collisionData,out Blow outBlow,out AttackCollisionData outCollisionData) `

### TickParallel
`public void TickParallel(float dt) `

### Tick
`public void Tick(float dt) `

### DebugMore
`public void DebugMore() `

### Mount
`public void Mount(Agent mountAgent) `

### EquipWeaponToExtraSlotAndWield
`public void EquipWeaponToExtraSlotAndWield(ref MissionWeapon weapon) `

### RemoveEquippedWeapon
`public void RemoveEquippedWeapon(EquipmentIndex slotIndex) `

### EquipWeaponWithNewEntity
`public void EquipWeaponWithNewEntity(EquipmentIndex slotIndex,ref MissionWeapon weapon) `

### EquipWeaponFromSpawnedItemEntity
`public void EquipWeaponFromSpawnedItemEntity(EquipmentIndex slotIndex,SpawnedItemEntity spawnedItemEntity,bool removeWeapon) `

### PreloadForRendering
`public void PreloadForRendering() `

### AddSynchedPrefabComponentToBone
`public int AddSynchedPrefabComponentToBone(string prefabName,sbyte boneIndex) `

### WillDropWieldedShield
`public bool WillDropWieldedShield(SpawnedItemEntity spawnedItem) `

### HadSameTypeOfConsumableOrShieldOnSpawn
`public bool HadSameTypeOfConsumableOrShieldOnSpawn(WeaponClass weaponClass) `

### GetHashCode
`public override int GetHashCode() `

### TryGetImmediateEnemyAgentMovementData
`public bool TryGetImmediateEnemyAgentMovementData(out float maximumForwardUnlimitedSpeed,out Vec3 position) `

### HasLostShield
`public bool HasLostShield() `

### CanPerformBrace
`public bool CanPerformBrace() `

### SetLastDetachmentTickAgentTime
`public void SetLastDetachmentTickAgentTime(float lastDetachmentTickAgentTime) `

### SetDetachmentWeight
`public void SetDetachmentWeight(float newDetachmentWeight) `

### SetDetachmentIndex
`public void SetDetachmentIndex(int newDetachmentIndex) `

### SetOwningAgentMissionPeer
`public void SetOwningAgentMissionPeer(MissionPeer owningAgentMissionPeer) `

### SetMissionRepresentative
`public void SetMissionRepresentative(MissionRepresentativeBase missionRepresentative) `

### SetIsLadderQueueUsing
`public void SetIsLadderQueueUsing(bool isLadderQueueUsing) `

### SetIsInLadderQueue
`public void SetIsInLadderQueue(bool isInLadderQueue) `

### UpdateLocalPositionError
`public void UpdateLocalPositionError() `

### YellingBehaviour
`public void YellingBehaviour() `

### HasPathThroughNavigationFacesIDFromDirection
`public bool HasPathThroughNavigationFacesIDFromDirection(int navigationFaceID_1,int navigationFaceID_2,int navigationFaceID_3,Vec2 direction) `

### HasPathThroughNavigationFacesIDFromDirectionMT
`public bool HasPathThroughNavigationFacesIDFromDirectionMT(int navigationFaceID_1,int navigationFaceID_2,int navigationFaceID_3,Vec2 direction) `

### SetInitialFrame
`public void SetInitialFrame(in Vec3 initialPosition,in Vec2 initialDirection,bool canSpawnOutsideOfMissionBoundary = false) `

### UpdateLastRecievedContactTimes
`public void UpdateLastRecievedContactTimes(bool isMissile) `

### ClearTargetZ
`public void ClearTargetZ() `

### MovementFlagToDirection
`public static Agent.UsageDirection MovementFlagToDirection(Agent.MovementControlFlag flag) `

### GetActionDirection
`public static Agent.UsageDirection GetActionDirection(int actionIndex) `

### GetMonsterUsageIndex
`public static int GetMonsterUsageIndex(string monsterUsage) `

### GetSoundParameterForArmorType
`public static float GetSoundParameterForArmorType(ArmorComponent.ArmorMaterialTypes armorMaterialType) `

### OnAgentHealthChangedDelegate
`public delegate void OnAgentHealthChangedDelegate(Agent agent,float oldHealth,float newHealth)`

### OnMountHealthChangedDelegate
`public delegate void OnMountHealthChangedDelegate(Agent agent,Agent mount,float oldHealth,float newHealth)`

### OnMainAgentWieldedItemChangeDelegate
`public delegate void OnMainAgentWieldedItemChangeDelegate()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
