---
title: 战斗与引擎绑定 Mount & Blade 类目录 / Class Catalog
sidebar: auto
---

# 战斗与引擎绑定 Mount & Blade 类目录

## 心智模型

先把 `战斗与引擎绑定 Mount & Blade 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.0 源码中该领域全部公开类型，按命名空间分组。共 **1115** 个类型，其中 **1104** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.MountAndBlade (753)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [ActionCodeType](/v1.3.15/zh/api/mission-ext/ActionCodeType.md) | 🔗 |
| E | [ActionStage](/v1.3.15/zh/api/mission-ext/ActionStage.md) | 🔗 |
| S | [AddPlayersResult](/v1.3.15/zh/api/mission-ext/AddPlayersResult.md) | 🔗 |
| C | [Agent](./mission/Agent.md) | 🔗 |
| C | [AgentBuildData](/v1.3.15/zh/api/mission-ext/AgentBuildData.md) | 🔗 |
| S | [AgentCapsuleData](/v1.3.15/zh/api/mission-ext/AgentCapsuleData.md) | 🔗 |
| C | [AgentCommonAILogic](/v1.3.15/zh/api/mission-ext/AgentCommonAILogic.md) | 🔗 |
| C | AgentComponent | — |
| C | [AgentComponentExtensions](/v1.3.15/zh/api/mission-ext/AgentComponentExtensions.md) | 🔗 |
| C | [AgentController](/v1.3.15/zh/api/mission-ext/AgentController.md) | 🔗 |
| C | [AgentDrivenProperties](/v1.3.15/zh/api/mission-ext/AgentDrivenProperties.md) | 🔗 |
| C | [AgentHumanAILogic](/v1.3.15/zh/api/mission-ext/AgentHumanAILogic.md) | 🔗 |
| S | [AgentLastHitInfo](/v1.3.15/zh/api/mission-ext/AgentLastHitInfo.md) | 🔗 |
| E | [AgentMovementLockedState](/v1.3.15/zh/api/mission-ext/AgentMovementLockedState.md) | 🔗 |
| S | [AgentPropertiesModifiers](/v1.3.15/zh/api/mission-ext/AgentPropertiesModifiers.md) | 🔗 |
| C | [AgentProximityMap](/v1.3.15/zh/api/mission-ext/AgentProximityMap.md) | 🔗 |
| S | [AgentSpawnData](/v1.3.15/zh/api/mission-ext/AgentSpawnData.md) | 🔗 |
| C | [AgentStatCalculateModel](/v1.3.15/zh/api/mission-ext/AgentStatCalculateModel.md) | 🔗 |
| C | [AgentVictoryLogic](/v1.3.15/zh/api/mission-ext/AgentVictoryLogic.md) | 🔗 |
| C | [AgentVisualHolder](/v1.3.15/zh/api/mission-ext/AgentVisualHolder.md) | 🔗 |
| C | [AgentVisualsData](/v1.3.15/zh/api/mission-ext/AgentVisualsData.md) | 🔗 |
| E | [AIScriptedFrameFlags](/v1.3.15/zh/api/mission-ext/AIScriptedFrameFlags.md) | 🔗 |
| E | [AISimpleBehaviorKind](/v1.3.15/zh/api/mission-ext/AISimpleBehaviorKind.md) | 🔗 |
| E | [AISpecialCombatModeFlags](/v1.3.15/zh/api/mission-ext/AISpecialCombatModeFlags.md) | 🔗 |
| E | [AIStateFlag](/v1.3.15/zh/api/mission-ext/AIStateFlag.md) | 🔗 |
| E | [AITargetVisibilityState](/v1.3.15/zh/api/mission-ext/AITargetVisibilityState.md) | 🔗 |
| C | [AnimatedFlag](/v1.3.15/zh/api/mission-ext/AnimatedFlag.md) | 🔗 |
| S | [AnimationSystemBoneData](/v1.3.15/zh/api/mission-ext/AnimationSystemBoneData.md) | 🔗 |
| S | [AnimationSystemBoneDataBiped](/v1.3.15/zh/api/mission-ext/AnimationSystemBoneDataBiped.md) | 🔗 |
| S | [AnimationSystemBoneDataQuadruped](/v1.3.15/zh/api/mission-ext/AnimationSystemBoneDataQuadruped.md) | 🔗 |
| S | [AnimationSystemData](/v1.3.15/zh/api/mission-ext/AnimationSystemData.md) | 🔗 |
| S | [AnimationSystemDataQuadruped](/v1.3.15/zh/api/mission-ext/AnimationSystemDataQuadruped.md) | 🔗 |
| E | [AnimFlags](/v1.3.15/zh/api/mission-ext/AnimFlags.md) | 🔗 |
| C | [ArcherPosition](/v1.3.15/zh/api/mission-ext/ArcherPosition.md) | 🔗 |
| C | [ArmyManagementHotkeyCategory](/v1.3.15/zh/api/mission-ext/ArmyManagementHotkeyCategory.md) | 🔗 |
| S | [ArrangementOrder](/v1.3.15/zh/api/mission-ext/ArrangementOrder.md) | 🔗 |
| E | [ArrangementOrderEnum](/v1.3.15/zh/api/mission-ext/ArrangementOrderEnum.md) | 🔗 |
| C | [AssignPlayerRoleInTeamMissionController](/v1.3.15/zh/api/mission-ext/AssignPlayerRoleInTeamMissionController.md) | 🔗 |
| S | [AttackCollisionData](/v1.3.15/zh/api/mission-ext/AttackCollisionData.md) | 🔗 |
| C | [AttackEntityOrderDetachment](./mission-ext/AttackEntityOrderDetachment.md) | 🔗 |
| S | [AttackInformation](/v1.3.15/zh/api/mission-ext/AttackInformation.md) | 🔗 |
| E | [Axis](/v1.3.15/zh/api/mission-ext/Axis.md) | 🔗 |
| C | [Ballista](/v1.3.15/zh/api/mission-ext/Ballista.md) | 🔗 |
| C | [BallistaAI](/v1.3.15/zh/api/mission-ext/BallistaAI.md) | 🔗 |
| C | [BannerBearerLogic](/v1.3.15/zh/api/mission-ext/BannerBearerLogic.md) | 🔗 |
| C | [BannerBuilderState](/v1.3.15/zh/api/mission-ext/BannerBuilderState.md) | 🔗 |
| S | [BannerInstance](/v1.3.15/zh/api/mission-ext/BannerInstance.md) | 🔗 |
| C | [BannerlordConfig](/v1.3.15/zh/api/mission-ext/BannerlordConfig.md) | 🔗 |
| C | [BannerlordFriendListService](/v1.3.15/zh/api/mission-ext/BannerlordFriendListService.md) | 🔗 |
| C | [BannerlordMissions](/v1.3.15/zh/api/mission-ext/BannerlordMissions.md) | 🔗 |
| C | [BannerlordNetwork](/v1.3.15/zh/api/mission-ext/BannerlordNetwork.md) | 🔗 |
| C | [BannerlordTableauManager](/v1.3.15/zh/api/mission-ext/BannerlordTableauManager.md) | 🔗 |
| E | [BannerState](/v1.3.15/zh/api/mission-ext/BannerState.md) | 🔗 |
| C | [BaseNetworkComponentData](/v1.3.15/zh/api/mission-ext/BaseNetworkComponentData.md) | 🔗 |
| S | [BaseSynchedMissionObjectReadableRecord](/v1.3.15/zh/api/mission-ext/BaseSynchedMissionObjectReadableRecord.md) | 🔗 |
| C | [BasicBattleAgentOrigin](/v1.3.15/zh/api/mission-ext/BasicBattleAgentOrigin.md) | 🔗 |
| C | [BasicGameStarter](/v1.3.15/zh/api/mission-ext/BasicGameStarter.md) | 🔗 |
| C | [BasicLeaveMissionLogic](/v1.3.15/zh/api/mission-ext/BasicLeaveMissionLogic.md) | 🔗 |
| C | [BasicMissionTimer](/v1.3.15/zh/api/mission-ext/BasicMissionTimer.md) | 🔗 |
| C | [BatteringRam](/v1.3.15/zh/api/mission-ext/BatteringRam.md) | 🔗 |
| C | [BatteringRamAI](/v1.3.15/zh/api/mission-ext/BatteringRamAI.md) | 🔗 |
| S | [BatteringRamRecord](/v1.3.15/zh/api/mission-ext/BatteringRamRecord.md) | 🔗 |
| C | [BattleDeploymentMissionController](/v1.3.15/zh/api/mission-ext/BattleDeploymentMissionController.md) | 🔗 |
| C | [BattleEndLogic](/v1.3.15/zh/api/mission-ext/BattleEndLogic.md) | 🔗 |
| C | [BattleHighlightsController](/v1.3.15/zh/api/mission-ext/BattleHighlightsController.md) | 🔗 |
| C | [BattleMissionStarterLogic](/v1.3.15/zh/api/mission-ext/BattleMissionStarterLogic.md) | 🔗 |
| C | [BattleObserverMissionLogic](/v1.3.15/zh/api/mission-ext/BattleObserverMissionLogic.md) | 🔗 |
| C | [BattlePowerCalculationLogic](/v1.3.15/zh/api/mission-ext/BattlePowerCalculationLogic.md) | 🔗 |
| C | [BattleReinforcementsSpawnController](/v1.3.15/zh/api/mission-ext/BattleReinforcementsSpawnController.md) | 🔗 |
| C | [BattleSideSpawnPathSelector](/v1.3.15/zh/api/mission-ext/BattleSideSpawnPathSelector.md) | 🔗 |
| E | [BattleSizeQualifier](/v1.3.15/zh/api/mission-ext/BattleSizeQualifier.md) | 🔗 |
| E | [BattleSizeType](/v1.3.15/zh/api/mission-ext/BattleSizeType.md) | 🔗 |
| C | [BattleSpawnPathSelector](/v1.3.15/zh/api/mission-ext/BattleSpawnPathSelector.md) | 🔗 |
| C | [BattleViewModel](/v1.3.15/zh/api/mission-ext/BattleViewModel.md) | 🔗 |
| C | [BehaviorAdvance](/v1.3.15/zh/api/mission-ext/BehaviorAdvance.md) | 🔗 |
| C | [BehaviorAssaultWalls](/v1.3.15/zh/api/mission-ext/BehaviorAssaultWalls.md) | 🔗 |
| C | [BehaviorCautiousAdvance](/v1.3.15/zh/api/mission-ext/BehaviorCautiousAdvance.md) | 🔗 |
| C | [BehaviorCavalryScreen](/v1.3.15/zh/api/mission-ext/BehaviorCavalryScreen.md) | 🔗 |
| C | [BehaviorCharge](/v1.3.15/zh/api/mission-ext/BehaviorCharge.md) | 🔗 |
| C | [BehaviorComponent](/v1.3.15/zh/api/mission-ext/BehaviorComponent.md) | 🔗 |
| C | [BehaviorData](/v1.3.15/zh/api/mission-ext/BehaviorData.md) | 🔗 |
| C | [BehaviorDefend](/v1.3.15/zh/api/mission-ext/BehaviorDefend.md) | 🔗 |
| C | [BehaviorDefendCastleKeyPosition](/v1.3.15/zh/api/mission-ext/BehaviorDefendCastleKeyPosition.md) | 🔗 |
| C | [BehaviorDefendKeyPosition](/v1.3.15/zh/api/mission-ext/BehaviorDefendKeyPosition.md) | 🔗 |
| C | [BehaviorDefendSiegeWeapon](/v1.3.15/zh/api/mission-ext/BehaviorDefendSiegeWeapon.md) | 🔗 |
| C | [BehaviorDefensiveRing](/v1.3.15/zh/api/mission-ext/BehaviorDefensiveRing.md) | 🔗 |
| C | [BehaviorDestroySiegeWeapons](/v1.3.15/zh/api/mission-ext/BehaviorDestroySiegeWeapons.md) | 🔗 |
| C | [BehaviorEliminateEnemyInsideCastle](/v1.3.15/zh/api/mission-ext/BehaviorEliminateEnemyInsideCastle.md) | 🔗 |
| C | [BehaviorFireFromInfantryCover](/v1.3.15/zh/api/mission-ext/BehaviorFireFromInfantryCover.md) | 🔗 |
| C | [BehaviorFlank](/v1.3.15/zh/api/mission-ext/BehaviorFlank.md) | 🔗 |
| C | [BehaviorGeneral](/v1.3.15/zh/api/mission-ext/BehaviorGeneral.md) | 🔗 |
| C | [BehaviorHoldHighGround](/v1.3.15/zh/api/mission-ext/BehaviorHoldHighGround.md) | 🔗 |
| C | [BehaviorHorseArcherSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorHorseArcherSkirmish.md) | 🔗 |
| C | [BehaviorMountedSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorMountedSkirmish.md) | 🔗 |
| C | [BehaviorProtectFlank](/v1.3.15/zh/api/mission-ext/BehaviorProtectFlank.md) | 🔗 |
| C | [BehaviorProtectGeneral](/v1.3.15/zh/api/mission-ext/BehaviorProtectGeneral.md) | 🔗 |
| C | [BehaviorPullBack](/v1.3.15/zh/api/mission-ext/BehaviorPullBack.md) | 🔗 |
| C | [BehaviorRegroup](/v1.3.15/zh/api/mission-ext/BehaviorRegroup.md) | 🔗 |
| C | [BehaviorReserve](/v1.3.15/zh/api/mission-ext/BehaviorReserve.md) | 🔗 |
| C | [BehaviorRetakeCastleKeyPosition](/v1.3.15/zh/api/mission-ext/BehaviorRetakeCastleKeyPosition.md) | 🔗 |
| C | [BehaviorRetreat](/v1.3.15/zh/api/mission-ext/BehaviorRetreat.md) | 🔗 |
| C | [BehaviorRetreatToCastle](/v1.3.15/zh/api/mission-ext/BehaviorRetreatToCastle.md) | 🔗 |
| C | [BehaviorRetreatToKeep](/v1.3.15/zh/api/mission-ext/BehaviorRetreatToKeep.md) | 🔗 |
| C | [BehaviorSallyOut](/v1.3.15/zh/api/mission-ext/BehaviorSallyOut.md) | 🔗 |
| C | [BehaviorScreenedSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorScreenedSkirmish.md) | 🔗 |
| C | [BehaviorSergeantMPInfantry](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPInfantry.md) | 🔗 |
| C | [BehaviorSergeantMPLastFlagLastStand](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPLastFlagLastStand.md) | 🔗 |
| C | [BehaviorSergeantMPMounted](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPMounted.md) | 🔗 |
| C | [BehaviorSergeantMPMountedRanged](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPMountedRanged.md) | 🔗 |
| C | [BehaviorSergeantMPRanged](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPRanged.md) | 🔗 |
| C | [BehaviorShootFromCastleWalls](/v1.3.15/zh/api/mission-ext/BehaviorShootFromCastleWalls.md) | 🔗 |
| C | [BehaviorShootFromCliff](/v1.3.15/zh/api/mission-ext/BehaviorShootFromCliff.md) | 🔗 |
| C | [BehaviorShootFromSiegeTower](/v1.3.15/zh/api/mission-ext/BehaviorShootFromSiegeTower.md) | 🔗 |
| E | [BehaviorSide](/v1.3.15/zh/api/mission-ext/BehaviorSide.md) | 🔗 |
| C | [BehaviorSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorSkirmish.md) | 🔗 |
| C | [BehaviorSkirmishBehindFormation](/v1.3.15/zh/api/mission-ext/BehaviorSkirmishBehindFormation.md) | 🔗 |
| C | [BehaviorSkirmishLine](/v1.3.15/zh/api/mission-ext/BehaviorSkirmishLine.md) | 🔗 |
| C | [BehaviorSparseSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorSparseSkirmish.md) | 🔗 |
| C | [BehaviorStop](/v1.3.15/zh/api/mission-ext/BehaviorStop.md) | 🔗 |
| C | [BehaviorTacticalCharge](/v1.3.15/zh/api/mission-ext/BehaviorTacticalCharge.md) | 🔗 |
| C | [BehaviorUseMurderHole](/v1.3.15/zh/api/mission-ext/BehaviorUseMurderHole.md) | 🔗 |
| C | [BehaviorUseSiegeMachines](/v1.3.15/zh/api/mission-ext/BehaviorUseSiegeMachines.md) | 🔗 |
| S | [BehaviorValues](/v1.3.15/zh/api/mission-ext/BehaviorValues.md) | 🔗 |
| E | [BehaviorValueSet](/v1.3.15/zh/api/mission-ext/BehaviorValueSet.md) | 🔗 |
| C | [BehaviorVanguard](/v1.3.15/zh/api/mission-ext/BehaviorVanguard.md) | 🔗 |
| C | [BehaviorWaitForLadders](/v1.3.15/zh/api/mission-ext/BehaviorWaitForLadders.md) | 🔗 |
| C | [Bird](/v1.3.15/zh/api/mission-ext/Bird.md) | 🔗 |
| S | [Blow](/v1.3.15/zh/api/mission-ext/Blow.md) | 🔗 |
| E | [BlowFlags](/v1.3.15/zh/api/mission-ext/BlowFlags.md) | 🔗 |
| S | [BlowWeaponRecord](/v1.3.15/zh/api/mission-ext/BlowWeaponRecord.md) | 🔗 |
| C | [BoardGameHotkeyCategory](/v1.3.15/zh/api/mission-ext/BoardGameHotkeyCategory.md) | 🔗 |
| C | [BodyGenerator](/v1.3.15/zh/api/mission-ext/BodyGenerator.md) | 🔗 |
| E | [BodyMeshTypes](/v1.3.15/zh/api/mission-ext/BodyMeshTypes.md) | 🔗 |
| E | [BoneBodyPartType](/v1.3.15/zh/api/mission-ext/BoneBodyPartType.md) | 🔗 |
| S | [BoneBodyTypeData](/v1.3.15/zh/api/mission-ext/BoneBodyTypeData.md) | 🔗 |
| C | [BotData](/v1.3.15/zh/api/mission-ext/BotData.md) | 🔗 |
| C | [BoundaryWallView](/v1.3.15/zh/api/mission-ext/BoundaryWallView.md) | 🔗 |
| E | [CachedBool](/v1.3.15/zh/api/mission-ext/CachedBool.md) | 🔗 |
| E | [CachedFloat](/v1.3.15/zh/api/mission-ext/CachedFloat.md) | 🔗 |
| C | [CameraDisplay](/v1.3.15/zh/api/mission-ext/CameraDisplay.md) | 🔗 |
| E | [CameraState](/v1.3.15/zh/api/mission-ext/CameraState.md) | 🔗 |
| C | [CaptureTheFlagCapturePoint](/v1.3.15/zh/api/mission-ext/CaptureTheFlagCapturePoint.md) | 🔗 |
| E | [CaptureTheFlagCaptureResultEnum](/v1.3.15/zh/api/mission-ext/CaptureTheFlagCaptureResultEnum.md) | 🔗 |
| E | [CaptureTheFlagFlagDirection](/v1.3.15/zh/api/mission-ext/CaptureTheFlagFlagDirection.md) | 🔗 |
| C | [CastleGate](/v1.3.15/zh/api/mission-ext/CastleGate.md) | 🔗 |
| C | [CastleGateAI](/v1.3.15/zh/api/mission-ext/CastleGateAI.md) | 🔗 |
| C | [CasualtyHandler](/v1.3.15/zh/api/mission-ext/CasualtyHandler.md) | 🔗 |
| C | [ChatBox](/v1.3.15/zh/api/mission-ext/ChatBox.md) | 🔗 |
| C | [ChatLogHotKeyCategory](/v1.3.15/zh/api/mission-ext/ChatLogHotKeyCategory.md) | 🔗 |
| E | [ChatType](/v1.3.15/zh/api/mission-ext/ChatType.md) | 🔗 |
| E | [CheerActionGroupEnum](/v1.3.15/zh/api/mission-ext/CheerActionGroupEnum.md) | 🔗 |
| S | [CheerReactionTimeSettings](/v1.3.15/zh/api/mission-ext/CheerReactionTimeSettings.md) | 🔗 |
| C | [CircularFormation](/v1.3.15/zh/api/mission-ext/CircularFormation.md) | 🔗 |
| C | [CircularSchiltronFormation](/v1.3.15/zh/api/mission-ext/CircularSchiltronFormation.md) | 🔗 |
| C | [ClanFriendListService](/v1.3.15/zh/api/mission-ext/ClanFriendListService.md) | 🔗 |
| C | [ClearHandInverseKinematicsOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/ClearHandInverseKinematicsOnStopUsageComponent.md) | 🔗 |
| C | [ClimbingMachineDetachment](/v1.3.15/zh/api/mission-ext/ClimbingMachineDetachment.md) | 🔗 |
| C | [ColumnFormation](/v1.3.15/zh/api/mission-ext/ColumnFormation.md) | 🔗 |
| E | [CombatCollisionResult](/v1.3.15/zh/api/mission-ext/CombatCollisionResult.md) | 🔗 |
| E | [CombatHitResultFlags](/v1.3.15/zh/api/mission-ext/CombatHitResultFlags.md) | 🔗 |
| C | [CombatHotKeyCategory](/v1.3.15/zh/api/mission-ext/CombatHotKeyCategory.md) | 🔗 |
| E | [CombatLogColor](/v1.3.15/zh/api/mission-ext/CombatLogColor.md) | 🔗 |
| S | [CombatLogData](/v1.3.15/zh/api/mission-ext/CombatLogData.md) | 🔗 |
| C | [CombatLogManager](/v1.3.15/zh/api/mission-ext/CombatLogManager.md) | 🔗 |
| C | [CombatSoundContainer](/v1.3.15/zh/api/mission-ext/CombatSoundContainer.md) | 🔗 |
| E | [CombatVoiceNetworkPredictionType](/v1.3.15/zh/api/mission-ext/CombatVoiceNetworkPredictionType.md) | 🔗 |
| C | [CommonAIComponent](/v1.3.15/zh/api/mission-ext/CommonAIComponent.md) | 🔗 |
| C | [CommunityClient](/v1.3.15/zh/api/mission-ext/CommunityClient.md) | 🔗 |
| C | [CommunityGameJoinData](/v1.3.15/zh/api/mission-ext/CommunityGameJoinData.md) | 🔗 |
| S | [CompassItemUpdateParams](/v1.3.15/zh/api/mission-ext/CompassItemUpdateParams.md) | 🔗 |
| C | [CompassMarker](/v1.3.15/zh/api/mission-ext/CompassMarker.md) | 🔗 |
| C | [CompressionBasic](/v1.3.15/zh/api/mission-ext/CompressionBasic.md) | 🔗 |
| C | [CompressionInfo](/v1.3.15/zh/api/mission-ext/CompressionInfo.md) | 🔗 |
| C | [CompressionMatchmaker](/v1.3.15/zh/api/mission-ext/CompressionMatchmaker.md) | 🔗 |
| C | [CompressionMission](/v1.3.15/zh/api/mission-ext/CompressionMission.md) | 🔗 |
| C | [ConditionalEffectContainer](/v1.3.15/zh/api/mission-ext/ConditionalEffectContainer.md) | 🔗 |
| C | [ConsoleCommandMethod](/v1.3.15/zh/api/mission-ext/ConsoleCommandMethod.md) | 🔗 |
| C | [ConsolesModuleExtension](/v1.3.15/zh/api/mission-ext/ConsolesModuleExtension.md) | 🔗 |
| C | [ConversationHotKeyCategory](/v1.3.15/zh/api/mission-ext/ConversationHotKeyCategory.md) | 🔗 |
| C | [CoreManaged](/v1.3.15/zh/api/mission-ext/CoreManaged.md) | 🔗 |
| S | [CorpseAgentInfo](./mission-ext/CorpseAgentInfo.md) | 🔗 |
| C | [CosmeticsManagerHelper](/v1.3.15/zh/api/mission-ext/CosmeticsManagerHelper.md) | 🔗 |
| C | [CraftingHotkeyCategory](/v1.3.15/zh/api/mission-ext/CraftingHotkeyCategory.md) | 🔗 |
| E | [CreationType](/v1.3.15/zh/api/mission-ext/CreationType.md) | 🔗 |
| E | [CrushThroughState](/v1.3.15/zh/api/mission-ext/CrushThroughState.md) | 🔗 |
| E | [CultureVoteTypes](/v1.3.15/zh/api/mission-ext/CultureVoteTypes.md) | 🔗 |
| C | [CustomAgentApplyDamageModel](/v1.3.15/zh/api/mission-ext/CustomAgentApplyDamageModel.md) | 🔗 |
| C | [CustomBattleAgentLogic](/v1.3.15/zh/api/mission-ext/CustomBattleAgentLogic.md) | 🔗 |
| C | [CustomBattleAgentOrigin](/v1.3.15/zh/api/mission-ext/CustomBattleAgentOrigin.md) | 🔗 |
| C | [CustomBattleAgentStatCalculateModel](/v1.3.15/zh/api/mission-ext/CustomBattleAgentStatCalculateModel.md) | 🔗 |
| C | [CustomBattleApplyWeatherEffectsModel](/v1.3.15/zh/api/mission-ext/CustomBattleApplyWeatherEffectsModel.md) | 🔗 |
| C | [CustomBattleAutoBlockModel](/v1.3.15/zh/api/mission-ext/CustomBattleAutoBlockModel.md) | 🔗 |
| C | [CustomBattleBannerBearersModel](/v1.3.15/zh/api/mission-ext/CustomBattleBannerBearersModel.md) | 🔗 |
| C | [CustomBattleCombatant](/v1.3.15/zh/api/mission-ext/CustomBattleCombatant.md) | 🔗 |
| C | [CustomBattleInitializationModel](/v1.3.15/zh/api/mission-ext/CustomBattleInitializationModel.md) | 🔗 |
| C | [CustomBattleMoraleModel](/v1.3.15/zh/api/mission-ext/CustomBattleMoraleModel.md) | 🔗 |
| C | [CustomBattleSpawnModel](/v1.3.15/zh/api/mission-ext/CustomBattleSpawnModel.md) | 🔗 |
| C | [CustomBattleTroopSupplier](/v1.3.15/zh/api/mission-ext/CustomBattleTroopSupplier.md) | 🔗 |
| C | [CustomGameBannedPlayerManager](/v1.3.15/zh/api/mission-ext/CustomGameBannedPlayerManager.md) | 🔗 |
| C | [CustomGameUsableMap](/v1.3.15/zh/api/mission-ext/CustomGameUsableMap.md) | 🔗 |
| C | [DamageParticleModel](/v1.3.15/zh/api/mission-ext/DamageParticleModel.md) | 🔗 |
| C | [DebugExtensions](/v1.3.15/zh/api/mission-ext/DebugExtensions.md) | 🔗 |
| S | [DebugNetworkPacketStatisticsStruct](/v1.3.15/zh/api/mission-ext/DebugNetworkPacketStatisticsStruct.md) | 🔗 |
| S | [DebugNetworkPositionCompressionStatisticsStruct](/v1.3.15/zh/api/mission-ext/DebugNetworkPositionCompressionStatisticsStruct.md) | 🔗 |
| C | [DebugSiegeBehavior](/v1.3.15/zh/api/mission-ext/DebugSiegeBehavior.md) | 🔗 |
| E | [DebugStateAttacker](/v1.3.15/zh/api/mission-ext/DebugStateAttacker.md) | 🔗 |
| E | [DebugStateDefender](/v1.3.15/zh/api/mission-ext/DebugStateDefender.md) | 🔗 |
| E | [DedicatedServerType](/v1.3.15/zh/api/mission-ext/DedicatedServerType.md) | 🔗 |
| C | [DefaultAgentDecideKilledOrUnconsciousModel](/v1.3.15/zh/api/mission-ext/DefaultAgentDecideKilledOrUnconsciousModel.md) | 🔗 |
| C | [DefaultDamageParticleModel](/v1.3.15/zh/api/mission-ext/DefaultDamageParticleModel.md) | 🔗 |
| C | [DefaultDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultDeploymentPlan.md) | 🔗 |
| C | [DefaultFormationArrangementModel](/v1.3.15/zh/api/mission-ext/DefaultFormationArrangementModel.md) | 🔗 |
| C | [DefaultFormationDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultFormationDeploymentPlan.md) | 🔗 |
| C | [DefaultItemPickupModel](/v1.3.15/zh/api/mission-ext/DefaultItemPickupModel.md) | 🔗 |
| C | [DefaultMissionDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultMissionDeploymentPlan.md) | 🔗 |
| C | [DefaultMissionDifficultyModel](/v1.3.15/zh/api/mission-ext/DefaultMissionDifficultyModel.md) | 🔗 |
| C | [DefaultStrikeMagnitudeModel](/v1.3.15/zh/api/mission-ext/DefaultStrikeMagnitudeModel.md) | 🔗 |
| C | [DefaultTacticalDecisionCodes](/v1.3.15/zh/api/mission-ext/DefaultTacticalDecisionCodes.md) | 🔗 |
| C | [DefaultTeamDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultTeamDeploymentPlan.md) | 🔗 |
| C | [DefencePoint](/v1.3.15/zh/api/mission-ext/DefencePoint.md) | 🔗 |
| C | [DefineGameNetworkMessageTypeForMod](/v1.3.15/zh/api/mission-ext/DefineGameNetworkMessageTypeForMod.md) | 🔗 |
| C | [DefineSynchedMissionObjectTypeForMod](/v1.3.15/zh/api/mission-ext/DefineSynchedMissionObjectTypeForMod.md) | 🔗 |
| S | [DeformKeyData](/v1.3.15/zh/api/mission-ext/DeformKeyData.md) | 🔗 |
| C | [DeploymentHandler](/v1.3.15/zh/api/mission-ext/DeploymentHandler.md) | 🔗 |
| C | [DeploymentMissionController](/v1.3.15/zh/api/mission-ext/DeploymentMissionController.md) | 🔗 |
| C | [DeploymentOrderComparer](/v1.3.15/zh/api/mission-ext/DeploymentOrderComparer.md) | 🔗 |
| C | [DeploymentPoint](/v1.3.15/zh/api/mission-ext/DeploymentPoint.md) | 🔗 |
| E | [DeploymentPointState](/v1.3.15/zh/api/mission-ext/DeploymentPointState.md) | 🔗 |
| E | [DeploymentPointType](/v1.3.15/zh/api/mission-ext/DeploymentPointType.md) | 🔗 |
| C | [DestructableComponent](/v1.3.15/zh/api/mission-ext/DestructableComponent.md) | 🔗 |
| S | [DestructableComponentRecord](/v1.3.15/zh/api/mission-ext/DestructableComponentRecord.md) | 🔗 |
| C | [DestructableMissionObject](/v1.3.15/zh/api/mission-ext/DestructableMissionObject.md) | 🔗 |
| C | [DestructedPrefabInfoMissionObject](/v1.3.15/zh/api/mission-ext/DestructedPrefabInfoMissionObject.md) | 🔗 |
| C | [DetachmentData](/v1.3.15/zh/api/mission-ext/DetachmentData.md) | 🔗 |
| C | [DetachmentManager](/v1.3.15/zh/api/mission-ext/DetachmentManager.md) | 🔗 |
| C | [DividableTask](/v1.3.15/zh/api/mission-ext/DividableTask.md) | 🔗 |
| E | [DoorOwnership](/v1.3.15/zh/api/mission-ext/DoorOwnership.md) | 🔗 |
| C | [DuelZoneLandmark](/v1.3.15/zh/api/mission-ext/DuelZoneLandmark.md) | 🔗 |
| C | [DynamicallyCreatedEntity](/v1.3.15/zh/api/mission-ext/DynamicallyCreatedEntity.md) | 🔗 |
| C | [EditorGame](/v1.3.15/zh/api/mission-ext/EditorGame.md) | 🔗 |
| C | [EditorGameManager](/v1.3.15/zh/api/mission-ext/EditorGameManager.md) | 🔗 |
| C | [EditorState](/v1.3.15/zh/api/mission-ext/EditorState.md) | 🔗 |
| C | [EquipmentControllerLeaveLogic](/v1.3.15/zh/api/mission-ext/EquipmentControllerLeaveLogic.md) | 🔗 |
| E | [EventBroadcastFlags](/v1.3.15/zh/api/mission-ext/EventBroadcastFlags.md) | 🔗 |
| E | [EventControlFlag](/v1.3.15/zh/api/mission-ext/EventControlFlag.md) | 🔗 |
| C | [ExitDoor](/v1.3.15/zh/api/mission-ext/ExitDoor.md) | 🔗 |
| E | [ExitResult](/v1.3.15/zh/api/mission-ext/ExitResult.md) | 🔗 |
| C | FaceGen | — |
| S | [FaceGenerationParams](/v1.3.15/zh/api/mission-ext/FaceGenerationParams.md) | 🔗 |
| C | [FaceGenHotkeyCategory](/v1.3.15/zh/api/mission-ext/FaceGenHotkeyCategory.md) | 🔗 |
| E | [FacialAnimChannel](/v1.3.15/zh/api/mission-ext/FacialAnimChannel.md) | 🔗 |
| S | [FacingOrder](/v1.3.15/zh/api/mission-ext/FacingOrder.md) | 🔗 |
| E | [FacingOrderEnum](/v1.3.15/zh/api/mission-ext/FacingOrderEnum.md) | 🔗 |
| S | [FactoredNumber](/v1.3.15/zh/api/mission-ext/FactoredNumber.md) | 🔗 |
| C | [FFASpawnFrameBehavior](/v1.3.15/zh/api/mission-ext/FFASpawnFrameBehavior.md) | 🔗 |
| C | [FireBallista](/v1.3.15/zh/api/mission-ext/FireBallista.md) | 🔗 |
| C | [FireMangonel](/v1.3.15/zh/api/mission-ext/FireMangonel.md) | 🔗 |
| E | [FiringFocus](/v1.3.15/zh/api/mission-ext/FiringFocus.md) | 🔗 |
| S | [FiringOrder](/v1.3.15/zh/api/mission-ext/FiringOrder.md) | 🔗 |
| C | [FlagDominationSpawnFrameBehavior](/v1.3.15/zh/api/mission-ext/FlagDominationSpawnFrameBehavior.md) | 🔗 |
| C | [FlagDominationSpawningBehavior](/v1.3.15/zh/api/mission-ext/FlagDominationSpawningBehavior.md) | 🔗 |
| C | [FleePosition](/v1.3.15/zh/api/mission-ext/FleePosition.md) | 🔗 |
| S | [Float](/v1.3.15/zh/api/mission-ext/Float.md) | 🔗 |
| S | [FocusableObjectInformation](/v1.3.15/zh/api/mission-ext/FocusableObjectInformation.md) | 🔗 |
| E | [FocusableObjectType](/v1.3.15/zh/api/mission-ext/FocusableObjectType.md) | 🔗 |
| E | [ForceUseState](/v1.3.15/zh/api/mission-ext/ForceUseState.md) | 🔗 |
| C | Formation | — |
| C | [FormationAI](/v1.3.15/zh/api/mission-ext/FormationAI.md) | 🔗 |
| E | [FormationDeploymentFlank](/v1.3.15/zh/api/mission-ext/FormationDeploymentFlank.md) | 🔗 |
| S | [FormationDeploymentOrder](/v1.3.15/zh/api/mission-ext/FormationDeploymentOrder.md) | 🔗 |
| C | [FormationExtensions](/v1.3.15/zh/api/mission-ext/FormationExtensions.md) | 🔗 |
| S | [FormationIntegrityDataGroup](/v1.3.15/zh/api/mission-ext/FormationIntegrityDataGroup.md) | 🔗 |
| C | [FormationPocket](/v1.3.15/zh/api/mission-ext/FormationPocket.md) | 🔗 |
| C | [FormationQuerySystem](/v1.3.15/zh/api/mission-ext/FormationQuerySystem.md) | 🔗 |
| S | [FormationSceneSpawnEntry](/v1.3.15/zh/api/mission-ext/FormationSceneSpawnEntry.md) | 🔗 |
| S | [FormOrder](/v1.3.15/zh/api/mission-ext/FormOrder.md) | 🔗 |
| E | [FormOrderEnum](/v1.3.15/zh/api/mission-ext/FormOrderEnum.md) | 🔗 |
| C | [GameEntityExtensions](/v1.3.15/zh/api/mission-ext/GameEntityExtensions.md) | 🔗 |
| E | [GameKeyDefinition](/v1.3.15/zh/api/mission-ext/GameKeyDefinition.md) | 🔗 |
| C | [GameKeyMainCategories](/v1.3.15/zh/api/mission-ext/GameKeyMainCategories.md) | 🔗 |
| C | [GameKeyTextExtensions](/v1.3.15/zh/api/mission-ext/GameKeyTextExtensions.md) | 🔗 |
| C | [GameLoadingState](/v1.3.15/zh/api/mission-ext/GameLoadingState.md) | 🔗 |
| C | [GameNetwork](/v1.3.15/zh/api/mission-ext/GameNetwork.md) | 🔗 |
| E | [GameNetworkMessageSendType](/v1.3.15/zh/api/mission-ext/GameNetworkMessageSendType.md) | 🔗 |
| C | [GameStartupInfo](/v1.3.15/zh/api/mission-ext/GameStartupInfo.md) | 🔗 |
| E | [GameStartupType](/v1.3.15/zh/api/mission-ext/GameStartupType.md) | 🔗 |
| E | GameType | — |
| E | [GateState](/v1.3.15/zh/api/mission-ext/GateState.md) | 🔗 |
| C | [GeneralsAndCaptainsAssignmentLogic](/v1.3.15/zh/api/mission-ext/GeneralsAndCaptainsAssignmentLogic.md) | 🔗 |
| E | [GenerationType](/v1.3.15/zh/api/mission-ext/GenerationType.md) | 🔗 |
| C | [GenericCampaignPanelsGameKeyCategory](/v1.3.15/zh/api/mission-ext/GenericCampaignPanelsGameKeyCategory.md) | 🔗 |
| C | [GenericGameKeyContext](/v1.3.15/zh/api/mission-ext/GenericGameKeyContext.md) | 🔗 |
| C | [GenericPanelGameKeyCategory](/v1.3.15/zh/api/mission-ext/GenericPanelGameKeyCategory.md) | 🔗 |
| E | [GoldGainFlags](/v1.3.15/zh/api/mission-ext/GoldGainFlags.md) | 🔗 |
| E | [GuardMode](/v1.3.15/zh/api/mission-ext/GuardMode.md) | 🔗 |
| E | [HandIndex](/v1.3.15/zh/api/mission-ext/HandIndex.md) | 🔗 |
| C | [HideoutSpawnPointGroup](/v1.3.15/zh/api/mission-ext/HideoutSpawnPointGroup.md) | 🔗 |
| S | [Highlight](/v1.3.15/zh/api/mission-ext/Highlight.md) | 🔗 |
| C | [HighlightsController](/v1.3.15/zh/api/mission-ext/HighlightsController.md) | 🔗 |
| S | [HighlightType](/v1.3.15/zh/api/mission-ext/HighlightType.md) | 🔗 |
| S | [HitParticleResultData](/v1.3.15/zh/api/mission-ext/HitParticleResultData.md) | 🔗 |
| C | [Hitter](/v1.3.15/zh/api/mission-ext/Hitter.md) | 🔗 |
| C | [HumanAIComponent](/v1.3.15/zh/api/mission-ext/HumanAIComponent.md) | 🔗 |
| E | [HumanWalkingMovementMode](/v1.3.15/zh/api/mission-ext/HumanWalkingMovementMode.md) | 🔗 |
| I | [IAgentStateDecider](/v1.3.15/zh/api/mission-ext/IAgentStateDecider.md) | 🔗 |
| I | [IAgentVisual](/v1.3.15/zh/api/mission-ext/IAgentVisual.md) | 🔗 |
| I | [IAgentVisualCreator](/v1.3.15/zh/api/mission-ext/IAgentVisualCreator.md) | 🔗 |
| I | [IAnalyticsFlagInfo](/v1.3.15/zh/api/mission-ext/IAnalyticsFlagInfo.md) | 🔗 |
| I | [IBattleEndLogic](/v1.3.15/zh/api/mission-ext/IBattleEndLogic.md) | 🔗 |
| I | [IBattlePowerCalculationLogic](/v1.3.15/zh/api/mission-ext/IBattlePowerCalculationLogic.md) | 🔗 |
| I | [ICastleKeyPosition](/v1.3.15/zh/api/mission-ext/ICastleKeyPosition.md) | 🔗 |
| I | [ICommanderInfo](/v1.3.15/zh/api/mission-ext/ICommanderInfo.md) | 🔗 |
| I | [ICommunityClientHandler](/v1.3.15/zh/api/mission-ext/ICommunityClientHandler.md) | 🔗 |
| I | [ICustomReinforcementSpawnTimer](/v1.3.15/zh/api/mission-ext/ICustomReinforcementSpawnTimer.md) | 🔗 |
| I | [IDetachment](/v1.3.15/zh/api/mission-ext/IDetachment.md) | 🔗 |
| I | [IEditorMissionTester](/v1.3.15/zh/api/mission-ext/IEditorMissionTester.md) | 🔗 |
| I | [IEntityFactory](./mission-ext/IEntityFactory.md) | 🔗 |
| I | [IFaceGeneratorHandler](/v1.3.15/zh/api/mission-ext/IFaceGeneratorHandler.md) | 🔗 |
| I | [IFlagRemoved](/v1.3.15/zh/api/mission-ext/IFlagRemoved.md) | 🔗 |
| I | [IFocusable](/v1.3.15/zh/api/mission-ext/IFocusable.md) | 🔗 |
| I | [IFormation](/v1.3.15/zh/api/mission-ext/IFormation.md) | 🔗 |
| I | [IFormationArrangement](/v1.3.15/zh/api/mission-ext/IFormationArrangement.md) | 🔗 |
| I | [IFormationDeploymentPlan](/v1.3.15/zh/api/mission-ext/IFormationDeploymentPlan.md) | 🔗 |
| I | [IFormationUnit](/v1.3.15/zh/api/mission-ext/IFormationUnit.md) | 🔗 |
| I | [IGameNetworkHandler](/v1.3.15/zh/api/mission-ext/IGameNetworkHandler.md) | 🔗 |
| I | [IMissionAgentSpawnLogic](/v1.3.15/zh/api/mission-ext/IMissionAgentSpawnLogic.md) | 🔗 |
| I | [IMissionBehavior](/v1.3.15/zh/api/mission-ext/IMissionBehavior.md) | 🔗 |
| I | [IMissionDeploymentPlan](/v1.3.15/zh/api/mission-ext/IMissionDeploymentPlan.md) | 🔗 |
| I | [IMissionListener](/v1.3.15/zh/api/mission-ext/IMissionListener.md) | 🔗 |
| I | [IMissionSystemHandler](/v1.3.15/zh/api/mission-ext/IMissionSystemHandler.md) | 🔗 |
| I | [IMoveableSiegeWeapon](/v1.3.15/zh/api/mission-ext/IMoveableSiegeWeapon.md) | 🔗 |
| S | [ImpactSoundModifier](/v1.3.15/zh/api/mission-ext/ImpactSoundModifier.md) | 🔗 |
| I | [IMusicHandler](/v1.3.15/zh/api/mission-ext/IMusicHandler.md) | 🔗 |
| C | [IncrementalTimer](/v1.3.15/zh/api/mission-ext/IncrementalTimer.md) | 🔗 |
| E | [InitialSpawnMethod](/v1.3.15/zh/api/mission-ext/InitialSpawnMethod.md) | 🔗 |
| C | [InitialState](/v1.3.15/zh/api/mission-ext/InitialState.md) | 🔗 |
| C | [InitialStateOption](/v1.3.15/zh/api/mission-ext/InitialStateOption.md) | 🔗 |
| S | [Integer](/v1.3.15/zh/api/mission-ext/Integer.md) | 🔗 |
| C | [IntermissionVoteItem](/v1.3.15/zh/api/mission-ext/IntermissionVoteItem.md) | 🔗 |
| C | [IntermissionVoteItemListExtensions](/v1.3.15/zh/api/mission-ext/IntermissionVoteItemListExtensions.md) | 🔗 |
| C | [InventoryHotKeyCategory](/v1.3.15/zh/api/mission-ext/InventoryHotKeyCategory.md) | 🔗 |
| I | [IOnSpawnPerkEffect](/v1.3.15/zh/api/mission-ext/IOnSpawnPerkEffect.md) | 🔗 |
| I | [IOrderable](/v1.3.15/zh/api/mission-ext/IOrderable.md) | 🔗 |
| I | [IOrderableWithInteractionArea](/v1.3.15/zh/api/mission-ext/IOrderableWithInteractionArea.md) | 🔗 |
| I | [IPathHolder](/v1.3.15/zh/api/mission-ext/IPathHolder.md) | 🔗 |
| I | [IPlayerInputEffector](/v1.3.15/zh/api/mission-ext/IPlayerInputEffector.md) | 🔗 |
| I | [IPointDefendable](/v1.3.15/zh/api/mission-ext/IPointDefendable.md) | 🔗 |
| I | [IPrimarySiegeWeapon](/v1.3.15/zh/api/mission-ext/IPrimarySiegeWeapon.md) | 🔗 |
| I | [IQueryData](/v1.3.15/zh/api/mission-ext/IQueryData.md) | 🔗 |
| I | [IReadOnlyPerkObject](/v1.3.15/zh/api/mission-ext/IReadOnlyPerkObject.md) | 🔗 |
| I | [IRoundComponent](/v1.3.15/zh/api/mission-ext/IRoundComponent.md) | 🔗 |
| I | [IScoreboardData](/v1.3.15/zh/api/mission-ext/IScoreboardData.md) | 🔗 |
| I | [ISynchedMissionObjectReadableRecord](/v1.3.15/zh/api/mission-ext/ISynchedMissionObjectReadableRecord.md) | 🔗 |
| I | [ITargetable](/v1.3.15/zh/api/mission-ext/ITargetable.md) | 🔗 |
| C | [ItemCollectionElementMissionExtensions](/v1.3.15/zh/api/mission-ext/ItemCollectionElementMissionExtensions.md) | 🔗 |
| C | [ItemPhysicsSoundContainer](/v1.3.15/zh/api/mission-ext/ItemPhysicsSoundContainer.md) | 🔗 |
| I | [IUdpNetworkHandler](/v1.3.15/zh/api/mission-ext/IUdpNetworkHandler.md) | 🔗 |
| I | [IUsable](/v1.3.15/zh/api/mission-ext/IUsable.md) | 🔗 |
| I | [IVehicleHandler](/v1.3.15/zh/api/mission-ext/IVehicleHandler.md) | 🔗 |
| I | [IVisible](/v1.3.15/zh/api/mission-ext/IVisible.md) | 🔗 |
| E | [KillInfo](/v1.3.15/zh/api/mission-ext/KillInfo.md) | 🔗 |
| S | [KillingBlow](/v1.3.15/zh/api/mission-ext/KillingBlow.md) | 🔗 |
| E | [LadderAnimationState](/v1.3.15/zh/api/mission-ext/LadderAnimationState.md) | 🔗 |
| C | [LadderQueueManager](/v1.3.15/zh/api/mission-ext/LadderQueueManager.md) | 🔗 |
| E | [LadderState](/v1.3.15/zh/api/mission-ext/LadderState.md) | 🔗 |
| E | [LaneDefenseStates](/v1.3.15/zh/api/mission-ext/LaneDefenseStates.md) | 🔗 |
| E | [LaneStateEnum](/v1.3.15/zh/api/mission-ext/LaneStateEnum.md) | 🔗 |
| C | [LightCycle](/v1.3.15/zh/api/mission-ext/LightCycle.md) | 🔗 |
| C | [Lightning](/v1.3.15/zh/api/mission-ext/Lightning.md) | 🔗 |
| C | [LineFormation](/v1.3.15/zh/api/mission-ext/LineFormation.md) | 🔗 |
| E | [LobbyMissionType](/v1.3.15/zh/api/mission-ext/LobbyMissionType.md) | 🔗 |
| C | [LobbyNetworkComponent](/v1.3.15/zh/api/mission-ext/LobbyNetworkComponent.md) | 🔗 |
| S | [LongInteger](/v1.3.15/zh/api/mission-ext/LongInteger.md) | 🔗 |
| C | [ManagedOptions](/v1.3.15/zh/api/mission-ext/ManagedOptions.md) | 🔗 |
| E | [ManagedOptionsType](/v1.3.15/zh/api/mission-ext/ManagedOptionsType.md) | 🔗 |
| C | [Mangonel](/v1.3.15/zh/api/mission-ext/Mangonel.md) | 🔗 |
| C | [MangonelAI](/v1.3.15/zh/api/mission-ext/MangonelAI.md) | 🔗 |
| C | [MapAtmosphereProbe](/v1.3.15/zh/api/mission-ext/MapAtmosphereProbe.md) | 🔗 |
| C | [MapHotKeyCategory](/v1.3.15/zh/api/mission-ext/MapHotKeyCategory.md) | 🔗 |
| C | [MapNotificationHotKeyCategory](/v1.3.15/zh/api/mission-ext/MapNotificationHotKeyCategory.md) | 🔗 |
| C | [Markable](/v1.3.15/zh/api/mission-ext/Markable.md) | 🔗 |
| S | [MBActionSet](/v1.3.15/zh/api/mission-ext/MBActionSet.md) | 🔗 |
| C | [MBAgentRendererSceneController](/v1.3.15/zh/api/mission-ext/MBAgentRendererSceneController.md) | 🔗 |
| C | [MBAgentVisuals](/v1.3.15/zh/api/mission-ext/MBAgentVisuals.md) | 🔗 |
| S | [MBAnimation](/v1.3.15/zh/api/mission-ext/MBAnimation.md) | 🔗 |
| C | [MBAPI](/v1.3.15/zh/api/mission-ext/MBAPI.md) | 🔗 |
| C | [MBBodyProperties](/v1.3.15/zh/api/mission-ext/MBBodyProperties.md) | 🔗 |
| C | [MBBoundaryCollection](/v1.3.15/zh/api/mission-ext/MBBoundaryCollection.md) | 🔗 |
| C | [MBCallback](/v1.3.15/zh/api/mission-ext/MBCallback.md) | 🔗 |
| C | MBCommon | — |
| C | [MBDebugManager](/v1.3.15/zh/api/mission-ext/MBDebugManager.md) | 🔗 |
| C | [MBEditor](/v1.3.15/zh/api/mission-ext/MBEditor.md) | 🔗 |
| C | [MBEquipmentMissionExtensions](/v1.3.15/zh/api/mission-ext/MBEquipmentMissionExtensions.md) | 🔗 |
| C | [MBExtensions](/v1.3.15/zh/api/mission-ext/MBExtensions.md) | 🔗 |
| C | [MBGameManager](/v1.3.15/zh/api/mission-ext/MBGameManager.md) | 🔗 |
| C | [MBGlobals](/v1.3.15/zh/api/mission-ext/MBGlobals.md) | 🔗 |
| C | [MBInitialScreenBase](/v1.3.15/zh/api/mission-ext/MBInitialScreenBase.md) | 🔗 |
| C | [MBItem](/v1.3.15/zh/api/mission-ext/MBItem.md) | 🔗 |
| C | [MBMapScene](/v1.3.15/zh/api/mission-ext/MBMapScene.md) | 🔗 |
| C | [MBMissile](/v1.3.15/zh/api/mission-ext/MBMissile.md) | 🔗 |
| C | [MBMultiplayerData](/v1.3.15/zh/api/mission-ext/MBMultiplayerData.md) | 🔗 |
| C | [MBMusicManager](/v1.3.15/zh/api/mission-ext/MBMusicManager.md) | 🔗 |
| S | [MBMusicTrack](/v1.3.15/zh/api/mission-ext/MBMusicTrack.md) | 🔗 |
| S | [MBParticleSystem](/v1.3.15/zh/api/mission-ext/MBParticleSystem.md) | 🔗 |
| C | [MBProfileSelectionScreenBase](/v1.3.15/zh/api/mission-ext/MBProfileSelectionScreenBase.md) | 🔗 |
| C | [MBSceneUtilities](/v1.3.15/zh/api/mission-ext/MBSceneUtilities.md) | 🔗 |
| C | [MBSkeletonExtensions](/v1.3.15/zh/api/mission-ext/MBSkeletonExtensions.md) | 🔗 |
| C | [MBSoundEvent](/v1.3.15/zh/api/mission-ext/MBSoundEvent.md) | 🔗 |
| S | [MBSoundTrack](/v1.3.15/zh/api/mission-ext/MBSoundTrack.md) | 🔗 |
| C | [MBSubModuleBase](./core/MBSubModuleBase.md) | 🔗 |
| S | [MBTeam](/v1.3.15/zh/api/mission-ext/MBTeam.md) | 🔗 |
| C | [MBTestRun](/v1.3.15/zh/api/mission-ext/MBTestRun.md) | 🔗 |
| C | [MBUnusedResourceManager](/v1.3.15/zh/api/mission-ext/MBUnusedResourceManager.md) | 🔗 |
| C | [MBWindowManager](/v1.3.15/zh/api/mission-ext/MBWindowManager.md) | 🔗 |
| E | [MeleeCollisionReaction](/v1.3.15/zh/api/mission-ext/MeleeCollisionReaction.md) | 🔗 |
| C | [MessageManager](/v1.3.15/zh/api/mission-ext/MessageManager.md) | 🔗 |
| C | [MiscSoundContainer](/v1.3.15/zh/api/mission-ext/MiscSoundContainer.md) | 🔗 |
| C | [Missile](/v1.3.15/zh/api/mission-ext/Missile.md) | 🔗 |
| E | [MissileCollisionReaction](/v1.3.15/zh/api/mission-ext/MissileCollisionReaction.md) | 🔗 |
| C | [Mission](./mission/Mission.md) | 🔗 |
| C | [MissionAgentPanicHandler](/v1.3.15/zh/api/mission-ext/MissionAgentPanicHandler.md) | 🔗 |
| C | [MissionAgentSpawnLogic](/v1.3.15/zh/api/mission-ext/MissionAgentSpawnLogic.md) | 🔗 |
| C | [MissionBattleSchedulerClientComponent](/v1.3.15/zh/api/mission-ext/MissionBattleSchedulerClientComponent.md) | 🔗 |
| C | MissionBehavior | — |
| E | [MissionBehaviorType](/v1.3.15/zh/api/mission-ext/MissionBehaviorType.md) | 🔗 |
| C | [MissionBoundaryCrossingHandler](/v1.3.15/zh/api/mission-ext/MissionBoundaryCrossingHandler.md) | 🔗 |
| C | [MissionBoundaryPlacer](/v1.3.15/zh/api/mission-ext/MissionBoundaryPlacer.md) | 🔗 |
| C | [MissionCombatantsLogic](/v1.3.15/zh/api/mission-ext/MissionCombatantsLogic.md) | 🔗 |
| C | [MissionCombatMechanicsHelper](/v1.3.15/zh/api/mission-ext/MissionCombatMechanicsHelper.md) | 🔗 |
| E | [MissionCombatType](/v1.3.15/zh/api/mission-ext/MissionCombatType.md) | 🔗 |
| C | [MissionCommunityClientComponent](/v1.3.15/zh/api/mission-ext/MissionCommunityClientComponent.md) | 🔗 |
| C | [MissionCustomGameClientComponent](/v1.3.15/zh/api/mission-ext/MissionCustomGameClientComponent.md) | 🔗 |
| C | [MissionDeploymentPlanningLogic](/v1.3.15/zh/api/mission-ext/MissionDeploymentPlanningLogic.md) | 🔗 |
| C | [MissionEquipment](/v1.3.15/zh/api/mission-ext/MissionEquipment.md) | 🔗 |
| C | [MissionFocusableObjectInformationProvider](/v1.3.15/zh/api/mission-ext/MissionFocusableObjectInformationProvider.md) | 🔗 |
| C | [MissionGameModels](/v1.3.15/zh/api/mission-ext/MissionGameModels.md) | 🔗 |
| C | [MissionHardBorderPlacer](/v1.3.15/zh/api/mission-ext/MissionHardBorderPlacer.md) | 🔗 |
| C | [MissionInfo](/v1.3.15/zh/api/mission-ext/MissionInfo.md) | 🔗 |
| C | [MissionLobbyComponent](/v1.3.15/zh/api/mission-ext/MissionLobbyComponent.md) | 🔗 |
| C | [MissionLobbyEquipmentNetworkComponent](/v1.3.15/zh/api/mission-ext/MissionLobbyEquipmentNetworkComponent.md) | 🔗 |
| C | MissionLogic | — |
| C | [MissionManager](/v1.3.15/zh/api/mission-ext/MissionManager.md) | 🔗 |
| C | [MissionMethod](/v1.3.15/zh/api/mission-ext/MissionMethod.md) | 🔗 |
| C | [MissionMultiplayerDuel](/v1.3.15/zh/api/mission-ext/MissionMultiplayerDuel.md) | 🔗 |
| C | [MissionMultiplayerFlagDomination](/v1.3.15/zh/api/mission-ext/MissionMultiplayerFlagDomination.md) | 🔗 |
| C | [MissionMultiplayerGameModeBase](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeBase.md) | 🔗 |
| C | [MissionMultiplayerGameModeBaseClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeBaseClient.md) | 🔗 |
| C | [MissionMultiplayerGameModeDuelClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeDuelClient.md) | 🔗 |
| C | [MissionMultiplayerGameModeFlagDominationClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeFlagDominationClient.md) | 🔗 |
| C | [MissionMultiplayerSiege](/v1.3.15/zh/api/mission-ext/MissionMultiplayerSiege.md) | 🔗 |
| C | [MissionMultiplayerSiegeClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerSiegeClient.md) | 🔗 |
| C | [MissionMultiplayerTeamDeathmatch](/v1.3.15/zh/api/mission-ext/MissionMultiplayerTeamDeathmatch.md) | 🔗 |
| C | [MissionMultiplayerTeamDeathmatchClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerTeamDeathmatchClient.md) | 🔗 |
| C | [MissionNetwork](/v1.3.15/zh/api/mission-ext/MissionNetwork.md) | 🔗 |
| C | [MissionNetworkComponent](/v1.3.15/zh/api/mission-ext/MissionNetworkComponent.md) | 🔗 |
| C | [MissionNetworkHelper](/v1.3.15/zh/api/mission-ext/MissionNetworkHelper.md) | 🔗 |
| C | [MissionObject](/v1.3.15/zh/api/mission-ext/MissionObject.md) | 🔗 |
| S | [MissionObjectId](/v1.3.15/zh/api/mission-ext/MissionObjectId.md) | 🔗 |
| C | [MissionOrderHotkeyCategory](/v1.3.15/zh/api/mission-ext/MissionOrderHotkeyCategory.md) | 🔗 |
| C | [MissionPeer](/v1.3.15/zh/api/mission-ext/MissionPeer.md) | 🔗 |
| C | [MissionQuestConversationHandler](/v1.3.15/zh/api/mission-ext/MissionQuestConversationHandler.md) | 🔗 |
| C | [MissionRecorder](/v1.3.15/zh/api/mission-ext/MissionRecorder.md) | 🔗 |
| C | [MissionReinforcementsHelper](/v1.3.15/zh/api/mission-ext/MissionReinforcementsHelper.md) | 🔗 |
| C | [MissionRepresentativeBase](/v1.3.15/zh/api/mission-ext/MissionRepresentativeBase.md) | 🔗 |
| C | [MissionScoreboardComponent](/v1.3.15/zh/api/mission-ext/MissionScoreboardComponent.md) | 🔗 |
| C | [MissionScoreboardSide](/v1.3.15/zh/api/mission-ext/MissionScoreboardSide.md) | 🔗 |
| C | [MissionSiegeEnginesLogic](/v1.3.15/zh/api/mission-ext/MissionSiegeEnginesLogic.md) | 🔗 |
| S | [MissionSpawnSettings](/v1.3.15/zh/api/mission-ext/MissionSpawnSettings.md) | 🔗 |
| C | [MissionState](/v1.3.15/zh/api/mission-ext/MissionState.md) | 🔗 |
| E | [MissionTeamAITypeEnum](/v1.3.15/zh/api/mission-ext/MissionTeamAITypeEnum.md) | 🔗 |
| E | [MissionTickAction](/v1.3.15/zh/api/mission-ext/MissionTickAction.md) | 🔗 |
| S | [MissionTime](/v1.3.15/zh/api/mission-ext/MissionTime.md) | 🔗 |
| C | [MissionTimer](/v1.3.15/zh/api/mission-ext/MissionTimer.md) | 🔗 |
| C | [MissionTimeTracker](/v1.3.15/zh/api/mission-ext/MissionTimeTracker.md) | 🔗 |
| S | [MissionWeapon](/v1.3.15/zh/api/mission-ext/MissionWeapon.md) | 🔗 |
| C | [Module](./core/Module.md) | 🔗 |
| C | [ModuleExtensions](/v1.3.15/zh/api/mission-ext/ModuleExtensions.md) | 🔗 |
| C | [ModuleNetworkData](/v1.3.15/zh/api/mission-ext/ModuleNetworkData.md) | 🔗 |
| C | [MonsterExtensions](/v1.3.15/zh/api/mission-ext/MonsterExtensions.md) | 🔗 |
| C | [MonsterMissionData](/v1.3.15/zh/api/mission-ext/MonsterMissionData.md) | 🔗 |
| C | [MonsterMissionDataCreator](/v1.3.15/zh/api/mission-ext/MonsterMissionDataCreator.md) | 🔗 |
| E | [MortalityState](/v1.3.15/zh/api/mission-ext/MortalityState.md) | 🔗 |
| E | [MovementBehaviorType](/v1.3.15/zh/api/mission-ext/MovementBehaviorType.md) | 🔗 |
| E | [MovementControlFlag](/v1.3.15/zh/api/mission-ext/MovementControlFlag.md) | 🔗 |
| S | [MovementOrder](/v1.3.15/zh/api/mission-ext/MovementOrder.md) | 🔗 |
| E | [MovementOrderEnum](/v1.3.15/zh/api/mission-ext/MovementOrderEnum.md) | 🔗 |
| C | [MovementPath](/v1.3.15/zh/api/mission-ext/MovementPath.md) | 🔗 |
| E | [MovementStateEnum](/v1.3.15/zh/api/mission-ext/MovementStateEnum.md) | 🔗 |
| C | [Mover](/v1.3.15/zh/api/mission-ext/Mover.md) | 🔗 |
| C | [MPCombatPerkHandler](/v1.3.15/zh/api/mission-ext/MPCombatPerkHandler.md) | 🔗 |
| C | [MPConditionalEffect](/v1.3.15/zh/api/mission-ext/MPConditionalEffect.md) | 🔗 |
| C | [MPHeroClass](/v1.3.15/zh/api/mission-ext/MPHeroClass.md) | 🔗 |
| C | [MPHeroClassGroup](/v1.3.15/zh/api/mission-ext/MPHeroClassGroup.md) | 🔗 |
| C | [MPOnSpawnPerkEffect](/v1.3.15/zh/api/mission-ext/MPOnSpawnPerkEffect.md) | 🔗 |
| C | [MPOnSpawnPerkEffectBase](/v1.3.15/zh/api/mission-ext/MPOnSpawnPerkEffectBase.md) | 🔗 |
| C | [MPOnSpawnPerkHandler](/v1.3.15/zh/api/mission-ext/MPOnSpawnPerkHandler.md) | 🔗 |
| C | [MPPerkCondition](/v1.3.15/zh/api/mission-ext/MPPerkCondition.md) | 🔗 |
| C | [MPPerkEffect](/v1.3.15/zh/api/mission-ext/MPPerkEffect.md) | 🔗 |
| C | [MPPerkEffectBase](/v1.3.15/zh/api/mission-ext/MPPerkEffectBase.md) | 🔗 |
| C | [MPPerkHandler](/v1.3.15/zh/api/mission-ext/MPPerkHandler.md) | 🔗 |
| C | [MPPerkObject](/v1.3.15/zh/api/mission-ext/MPPerkObject.md) | 🔗 |
| C | [MPPerksAgentComponent](/v1.3.15/zh/api/mission-ext/MPPerksAgentComponent.md) | 🔗 |
| S | [MPPerkSelection](/v1.3.15/zh/api/mission-ext/MPPerkSelection.md) | 🔗 |
| C | [MPPerkSelectionManager](/v1.3.15/zh/api/mission-ext/MPPerkSelectionManager.md) | 🔗 |
| C | [MPRandomOnSpawnPerkEffect](/v1.3.15/zh/api/mission-ext/MPRandomOnSpawnPerkEffect.md) | 🔗 |
| C | [MultiplayerAgentApplyDamageModel](/v1.3.15/zh/api/mission-ext/MultiplayerAgentApplyDamageModel.md) | 🔗 |
| C | [MultiplayerAgentStatCalculateModel](/v1.3.15/zh/api/mission-ext/MultiplayerAgentStatCalculateModel.md) | 🔗 |
| C | [MultiplayerBattleBannerBearersModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleBannerBearersModel.md) | 🔗 |
| C | [MultiplayerBattleInitializationModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleInitializationModel.md) | 🔗 |
| C | [MultiplayerBattleMoraleModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleMoraleModel.md) | 🔗 |
| C | [MultiplayerBattleSpawnModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleSpawnModel.md) | 🔗 |
| C | [MultiplayerClassDivisions](/v1.3.15/zh/api/mission-ext/MultiplayerClassDivisions.md) | 🔗 |
| C | [MultiplayerGameMode](/v1.3.15/zh/api/mission-ext/MultiplayerGameMode.md) | 🔗 |
| C | [MultiplayerGameNotificationsComponent](/v1.3.15/zh/api/mission-ext/MultiplayerGameNotificationsComponent.md) | 🔗 |
| E | [MultiplayerGameState](/v1.3.15/zh/api/mission-ext/MultiplayerGameState.md) | 🔗 |
| E | [MultiplayerGameType](/v1.3.15/zh/api/mission-ext/MultiplayerGameType.md) | 🔗 |
| C | [MultiplayerGameTypeInfo](/v1.3.15/zh/api/mission-ext/MultiplayerGameTypeInfo.md) | 🔗 |
| C | [MultiplayerGameTypes](/v1.3.15/zh/api/mission-ext/MultiplayerGameTypes.md) | 🔗 |
| C | [MultiplayerGlobalMutedPlayersManager](/v1.3.15/zh/api/mission-ext/MultiplayerGlobalMutedPlayersManager.md) | 🔗 |
| C | [MultiplayerHotkeyCategory](/v1.3.15/zh/api/mission-ext/MultiplayerHotkeyCategory.md) | 🔗 |
| E | [MultiplayerIntermissionState](/v1.3.15/zh/api/mission-ext/MultiplayerIntermissionState.md) | 🔗 |
| C | [MultiplayerIntermissionVotingManager](/v1.3.15/zh/api/mission-ext/MultiplayerIntermissionVotingManager.md) | 🔗 |
| E | [MultiplayerMessageFilter](/v1.3.15/zh/api/mission-ext/MultiplayerMessageFilter.md) | 🔗 |
| C | [MultiplayerMissionAgentVisualSpawnComponent](/v1.3.15/zh/api/mission-ext/MultiplayerMissionAgentVisualSpawnComponent.md) | 🔗 |
| C | [MultiplayerOption](/v1.3.15/zh/api/mission-ext/MultiplayerOption.md) | 🔗 |
| C | [MultiplayerOptions](/v1.3.15/zh/api/mission-ext/MultiplayerOptions.md) | 🔗 |
| E | [MultiplayerOptionsAccessMode](/v1.3.15/zh/api/mission-ext/MultiplayerOptionsAccessMode.md) | 🔗 |
| C | [MultiplayerOptionsExtensions](/v1.3.15/zh/api/mission-ext/MultiplayerOptionsExtensions.md) | 🔗 |
| C | [MultiplayerOptionsProperty](/v1.3.15/zh/api/mission-ext/MultiplayerOptionsProperty.md) | 🔗 |
| C | [MultiplayerPollComponent](/v1.3.15/zh/api/mission-ext/MultiplayerPollComponent.md) | 🔗 |
| E | [MultiplayerPollRejectReason](/v1.3.15/zh/api/mission-ext/MultiplayerPollRejectReason.md) | 🔗 |
| C | [MultiplayerRoundComponent](/v1.3.15/zh/api/mission-ext/MultiplayerRoundComponent.md) | 🔗 |
| C | [MultiplayerRoundController](/v1.3.15/zh/api/mission-ext/MultiplayerRoundController.md) | 🔗 |
| E | [MultiplayerRoundState](/v1.3.15/zh/api/mission-ext/MultiplayerRoundState.md) | 🔗 |
| C | [MultiplayerSceneValidator](/v1.3.15/zh/api/mission-ext/MultiplayerSceneValidator.md) | 🔗 |
| C | [MultiplayerTeamSelectComponent](/v1.3.15/zh/api/mission-ext/MultiplayerTeamSelectComponent.md) | 🔗 |
| C | [MultiplayerTimerComponent](/v1.3.15/zh/api/mission-ext/MultiplayerTimerComponent.md) | 🔗 |
| C | [MultiplayerWarmupComponent](/v1.3.15/zh/api/mission-ext/MultiplayerWarmupComponent.md) | 🔗 |
| E | [MusicMode](/v1.3.15/zh/api/mission-ext/MusicMode.md) | 🔗 |
| C | [MusicParameters](/v1.3.15/zh/api/mission-ext/MusicParameters.md) | 🔗 |
| E | [MusicTheme](/v1.3.15/zh/api/mission-ext/MusicTheme.md) | 🔗 |
| S | [NavigationData](/v1.3.15/zh/api/mission-ext/NavigationData.md) | 🔗 |
| C | [NetworkCommunication](/v1.3.15/zh/api/mission-ext/NetworkCommunication.md) | 🔗 |
| C | [NetworkCommunicator](/v1.3.15/zh/api/mission-ext/NetworkCommunicator.md) | 🔗 |
| C | [NetworkMain](/v1.3.15/zh/api/mission-ext/NetworkMain.md) | 🔗 |
| C | [NetworkMessageHandlerRegisterer](/v1.3.15/zh/api/mission-ext/NetworkMessageHandlerRegisterer.md) | 🔗 |
| C | [NetworkMessageHandlerRegistererContainer](/v1.3.15/zh/api/mission-ext/NetworkMessageHandlerRegistererContainer.md) | 🔗 |
| C | [NotificationProperty](/v1.3.15/zh/api/mission-ext/NotificationProperty.md) | 🔗 |
| E | [OptionsCategory](/v1.3.15/zh/api/mission-ext/OptionsCategory.md) | 🔗 |
| E | [OptionType](/v1.3.15/zh/api/mission-ext/OptionType.md) | 🔗 |
| E | [OptionValueType](/v1.3.15/zh/api/mission-ext/OptionValueType.md) | 🔗 |
| C | [OrderComponent](/v1.3.15/zh/api/mission-ext/OrderComponent.md) | 🔗 |
| C | [OrderController](/v1.3.15/zh/api/mission-ext/OrderController.md) | 🔗 |
| C | [OrderOfBattleFormationExtensions](/v1.3.15/zh/api/mission-ext/OrderOfBattleFormationExtensions.md) | 🔗 |
| E | [OrderType](/v1.3.15/zh/api/mission-ext/OrderType.md) | 🔗 |
| C | [OverrideStrikeAndDeathActionDuringUsageComponent](/v1.3.15/zh/api/mission-ext/OverrideStrikeAndDeathActionDuringUsageComponent.md) | 🔗 |
| C | [PartyHotKeyCategory](/v1.3.15/zh/api/mission-ext/PartyHotKeyCategory.md) | 🔗 |
| C | [PathLastNodeFixer](/v1.3.15/zh/api/mission-ext/PathLastNodeFixer.md) | 🔗 |
| C | [PathTracker](/v1.3.15/zh/api/mission-ext/PathTracker.md) | 🔗 |
| C | [PeerExtensions](/v1.3.15/zh/api/mission-ext/PeerExtensions.md) | 🔗 |
| C | [PeerVisualsHolder](/v1.3.15/zh/api/mission-ext/PeerVisualsHolder.md) | 🔗 |
| E | [PerkEventFlags](/v1.3.15/zh/api/mission-ext/PerkEventFlags.md) | 🔗 |
| S | [Permission](/v1.3.15/zh/api/mission-ext/Permission.md) | 🔗 |
| E | [PermissionType](/v1.3.15/zh/api/mission-ext/PermissionType.md) | 🔗 |
| C | [PlayerConnectionInfo](/v1.3.15/zh/api/mission-ext/PlayerConnectionInfo.md) | 🔗 |
| C | [PollHotkeyCategory](/v1.3.15/zh/api/mission-ext/PollHotkeyCategory.md) | 🔗 |
| C | [ProfileSelectionState](/v1.3.15/zh/api/mission-ext/ProfileSelectionState.md) | 🔗 |
| S | [ProximityMapSearchStruct](/v1.3.15/zh/api/mission-ext/ProximityMapSearchStruct.md) | 🔗 |
| C | [QueryData](/v1.3.15/zh/api/mission-ext/QueryData.md) | 🔗 |
| C | [QueryLibrary](/v1.3.15/zh/api/mission-ext/QueryLibrary.md) | 🔗 |
| E | [RamState](/v1.3.15/zh/api/mission-ext/RamState.md) | 🔗 |
| C | [RandomParticleSpawner](/v1.3.15/zh/api/mission-ext/RandomParticleSpawner.md) | 🔗 |
| C | [RandomTimer](/v1.3.15/zh/api/mission-ext/RandomTimer.md) | 🔗 |
| C | [RangedSiegeWeapon](/v1.3.15/zh/api/mission-ext/RangedSiegeWeapon.md) | 🔗 |
| C | [RangedSiegeWeaponAi](/v1.3.15/zh/api/mission-ext/RangedSiegeWeaponAi.md) | 🔗 |
| S | [RangedSiegeWeaponRecord](/v1.3.15/zh/api/mission-ext/RangedSiegeWeaponRecord.md) | 🔗 |
| E | [RangedWeaponUsageOrderEnum](/v1.3.15/zh/api/mission-ext/RangedWeaponUsageOrderEnum.md) | 🔗 |
| C | [RecentPlayersFriendListService](/v1.3.15/zh/api/mission-ext/RecentPlayersFriendListService.md) | 🔗 |
| C | [RecordMissionLogic](/v1.3.15/zh/api/mission-ext/RecordMissionLogic.md) | 🔗 |
| C | [RectilinearSchiltronFormation](/v1.3.15/zh/api/mission-ext/RectilinearSchiltronFormation.md) | 🔗 |
| E | [RegisterMode](/v1.3.15/zh/api/mission-ext/RegisterMode.md) | 🔗 |
| C | [ReinforcementFormationData](/v1.3.15/zh/api/mission-ext/ReinforcementFormationData.md) | 🔗 |
| C | [ReinforcementFormationPreferenceComparer](/v1.3.15/zh/api/mission-ext/ReinforcementFormationPreferenceComparer.md) | 🔗 |
| E | [ReinforcementFormationPriority](/v1.3.15/zh/api/mission-ext/ReinforcementFormationPriority.md) | 🔗 |
| E | [ReinforcementSpawnMethod](/v1.3.15/zh/api/mission-ext/ReinforcementSpawnMethod.md) | 🔗 |
| E | [ReinforcementTimingMethod](/v1.3.15/zh/api/mission-ext/ReinforcementTimingMethod.md) | 🔗 |
| C | [ReplayMissionLogic](/v1.3.15/zh/api/mission-ext/ReplayMissionLogic.md) | 🔗 |
| E | [ReplicationOccurrence](/v1.3.15/zh/api/mission-ext/ReplicationOccurrence.md) | 🔗 |
| C | [ResetAnimationOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/ResetAnimationOnStopUsageComponent.md) | 🔗 |
| C | [ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent.md) | 🔗 |
| C | [RestrictedAccess](/v1.3.15/zh/api/mission-ext/RestrictedAccess.md) | 🔗 |
| C | [RetreatPositionCacheSystem](/v1.3.15/zh/api/mission-ext/RetreatPositionCacheSystem.md) | 🔗 |
| S | [RidingOrder](/v1.3.15/zh/api/mission-ext/RidingOrder.md) | 🔗 |
| E | [RidingOrderEnum](/v1.3.15/zh/api/mission-ext/RidingOrderEnum.md) | 🔗 |
| C | [RoadPoint](/v1.3.15/zh/api/mission-ext/RoadPoint.md) | 🔗 |
| C | [RoadStart](/v1.3.15/zh/api/mission-ext/RoadStart.md) | 🔗 |
| E | [RoundEndReason](/v1.3.15/zh/api/mission-ext/RoundEndReason.md) | 🔗 |
| C | [RoundStateExtensions](/v1.3.15/zh/api/mission-ext/RoundStateExtensions.md) | 🔗 |
| C | [SallyOutEndLogic](/v1.3.15/zh/api/mission-ext/SallyOutEndLogic.md) | 🔗 |
| C | [SallyOutMissionController](/v1.3.15/zh/api/mission-ext/SallyOutMissionController.md) | 🔗 |
| C | [SallyOutMissionNotificationsHandler](/v1.3.15/zh/api/mission-ext/SallyOutMissionNotificationsHandler.md) | 🔗 |
| C | [SallyOutReinforcementSpawnTimer](/v1.3.15/zh/api/mission-ext/SallyOutReinforcementSpawnTimer.md) | 🔗 |
| C | [ScenePropDecal](/v1.3.15/zh/api/mission-ext/ScenePropDecal.md) | 🔗 |
| C | [ScenePropNegativeLight](/v1.3.15/zh/api/mission-ext/ScenePropNegativeLight.md) | 🔗 |
| C | [ScenePropPositiveLight](/v1.3.15/zh/api/mission-ext/ScenePropPositiveLight.md) | 🔗 |
| S | [ScoreboardHeader](/v1.3.15/zh/api/mission-ext/ScoreboardHeader.md) | 🔗 |
| C | [ScoreboardHotKeyCategory](/v1.3.15/zh/api/mission-ext/ScoreboardHotKeyCategory.md) | 🔗 |
| E | [Side](/v1.3.15/zh/api/mission-ext/Side.md) | 🔗 |
| C | [SiegeDeploymentMissionController](/v1.3.15/zh/api/mission-ext/SiegeDeploymentMissionController.md) | 🔗 |
| C | [SiegeLadder](/v1.3.15/zh/api/mission-ext/SiegeLadder.md) | 🔗 |
| C | [SiegeLadderAI](/v1.3.15/zh/api/mission-ext/SiegeLadderAI.md) | 🔗 |
| S | [SiegeLadderRecord](/v1.3.15/zh/api/mission-ext/SiegeLadderRecord.md) | 🔗 |
| C | [SiegeLane](/v1.3.15/zh/api/mission-ext/SiegeLane.md) | 🔗 |
| C | [SiegeMissionPreparationHandler](/v1.3.15/zh/api/mission-ext/SiegeMissionPreparationHandler.md) | 🔗 |
| C | [SiegeQuerySystem](/v1.3.15/zh/api/mission-ext/SiegeQuerySystem.md) | 🔗 |
| C | [SiegeSpawnFrameBehavior](/v1.3.15/zh/api/mission-ext/SiegeSpawnFrameBehavior.md) | 🔗 |
| C | [SiegeSpawningBehavior](/v1.3.15/zh/api/mission-ext/SiegeSpawningBehavior.md) | 🔗 |
| C | [SiegeTower](/v1.3.15/zh/api/mission-ext/SiegeTower.md) | 🔗 |
| C | [SiegeTowerAI](/v1.3.15/zh/api/mission-ext/SiegeTowerAI.md) | 🔗 |
| S | [SiegeTowerRecord](/v1.3.15/zh/api/mission-ext/SiegeTowerRecord.md) | 🔗 |
| C | [SiegeWeapon](/v1.3.15/zh/api/mission-ext/SiegeWeapon.md) | 🔗 |
| C | [SiegeWeaponController](/v1.3.15/zh/api/mission-ext/SiegeWeaponController.md) | 🔗 |
| C | [SiegeWeaponMovementComponent](/v1.3.15/zh/api/mission-ext/SiegeWeaponMovementComponent.md) | 🔗 |
| E | [SiegeWeaponOrderType](/v1.3.15/zh/api/mission-ext/SiegeWeaponOrderType.md) | 🔗 |
| C | [SkeinFormation](/v1.3.15/zh/api/mission-ext/SkeinFormation.md) | 🔗 |
| E | [SkeletonModelBoundsRecFlags](/v1.3.15/zh/api/mission-ext/SkeletonModelBoundsRecFlags.md) | 🔗 |
| E | [SkeletonType](/v1.3.15/zh/api/mission-ext/SkeletonType.md) | 🔗 |
| S | [SkinGenerationParams](/v1.3.15/zh/api/mission-ext/SkinGenerationParams.md) | 🔗 |
| C | [SkinVoiceManager](/v1.3.15/zh/api/mission-ext/SkinVoiceManager.md) | 🔗 |
| S | [SkinVoiceType](/v1.3.15/zh/api/mission-ext/SkinVoiceType.md) | 🔗 |
| E | [SnapMethod](/v1.3.15/zh/api/mission-ext/SnapMethod.md) | 🔗 |
| C | [SoundPlayer](/v1.3.15/zh/api/mission-ext/SoundPlayer.md) | 🔗 |
| C | [SpawnComponent](/v1.3.15/zh/api/mission-ext/SpawnComponent.md) | 🔗 |
| C | [SpawnedItemEntity](/v1.3.15/zh/api/mission-ext/SpawnedItemEntity.md) | 🔗 |
| C | [SpawnerEntityEditorHelper](/v1.3.15/zh/api/mission-ext/SpawnerEntityEditorHelper.md) | 🔗 |
| C | [SpawnerEntityMissionHelper](/v1.3.15/zh/api/mission-ext/SpawnerEntityMissionHelper.md) | 🔗 |
| C | [SpawnFrameBehaviorBase](/v1.3.15/zh/api/mission-ext/SpawnFrameBehaviorBase.md) | 🔗 |
| C | [SpawningBehaviorBase](/v1.3.15/zh/api/mission-ext/SpawningBehaviorBase.md) | 🔗 |
| S | [SpawnPathData](/v1.3.15/zh/api/mission-ext/SpawnPathData.md) | 🔗 |
| S | [SpectatorData](/v1.3.15/zh/api/mission-ext/SpectatorData.md) | 🔗 |
| C | [SquareFormation](/v1.3.15/zh/api/mission-ext/SquareFormation.md) | 🔗 |
| S | [StackArray8Agent](/v1.3.15/zh/api/mission-ext/StackArray8Agent.md) | 🔗 |
| S | [StackArray8StandingPoint](/v1.3.15/zh/api/mission-ext/StackArray8StandingPoint.md) | 🔗 |
| S | [StackArray8ThrowingPoint](/v1.3.15/zh/api/mission-ext/StackArray8ThrowingPoint.md) | 🔗 |
| C | [StandingPoint](/v1.3.15/zh/api/mission-ext/StandingPoint.md) | 🔗 |
| C | [StandingPointForRangedArea](/v1.3.15/zh/api/mission-ext/StandingPointForRangedArea.md) | 🔗 |
| C | [StandingPointWithAgentLimit](/v1.3.15/zh/api/mission-ext/StandingPointWithAgentLimit.md) | 🔗 |
| C | [StandingPointWithTeamLimit](/v1.3.15/zh/api/mission-ext/StandingPointWithTeamLimit.md) | 🔗 |
| C | [StandingPointWithVolumeBox](/v1.3.15/zh/api/mission-ext/StandingPointWithVolumeBox.md) | 🔗 |
| C | [StandingPointWithWeaponRequirement](/v1.3.15/zh/api/mission-ext/StandingPointWithWeaponRequirement.md) | 🔗 |
| E | State | — |
| C | [StonePile](/v1.3.15/zh/api/mission-ext/StonePile.md) | 🔗 |
| C | [StonePileAI](/v1.3.15/zh/api/mission-ext/StonePileAI.md) | 🔗 |
| S | [StonePileRecord](/v1.3.15/zh/api/mission-ext/StonePileRecord.md) | 🔗 |
| E | [StopUsingGameObjectFlags](/v1.3.15/zh/api/mission-ext/StopUsingGameObjectFlags.md) | 🔗 |
| C | [StrategicArea](/v1.3.15/zh/api/mission-ext/StrategicArea.md) | 🔗 |
| C | [SynchedMissionObject](/v1.3.15/zh/api/mission-ext/SynchedMissionObject.md) | 🔗 |
| E | [SynchFlags](/v1.3.15/zh/api/mission-ext/SynchFlags.md) | 🔗 |
| S | [TacticalDecision](/v1.3.15/zh/api/mission-ext/TacticalDecision.md) | 🔗 |
| C | [TacticalPosition](/v1.3.15/zh/api/mission-ext/TacticalPosition.md) | 🔗 |
| E | [TacticalPositionTypeEnum](/v1.3.15/zh/api/mission-ext/TacticalPositionTypeEnum.md) | 🔗 |
| C | [TacticalRegion](/v1.3.15/zh/api/mission-ext/TacticalRegion.md) | 🔗 |
| E | [TacticalRegionTypeEnum](/v1.3.15/zh/api/mission-ext/TacticalRegionTypeEnum.md) | 🔗 |
| C | [TacticBreachWalls](/v1.3.15/zh/api/mission-ext/TacticBreachWalls.md) | 🔗 |
| C | [TacticCharge](/v1.3.15/zh/api/mission-ext/TacticCharge.md) | 🔗 |
| C | [TacticComponent](/v1.3.15/zh/api/mission-ext/TacticComponent.md) | 🔗 |
| C | [TacticCoordinatedRetreat](/v1.3.15/zh/api/mission-ext/TacticCoordinatedRetreat.md) | 🔗 |
| C | [TacticDefendCastle](/v1.3.15/zh/api/mission-ext/TacticDefendCastle.md) | 🔗 |
| C | [TacticDefensiveEngagement](/v1.3.15/zh/api/mission-ext/TacticDefensiveEngagement.md) | 🔗 |
| C | [TacticDefensiveLine](/v1.3.15/zh/api/mission-ext/TacticDefensiveLine.md) | 🔗 |
| C | [TacticDefensiveRing](/v1.3.15/zh/api/mission-ext/TacticDefensiveRing.md) | 🔗 |
| C | [TacticFrontalCavalryCharge](/v1.3.15/zh/api/mission-ext/TacticFrontalCavalryCharge.md) | 🔗 |
| C | [TacticFullScaleAttack](/v1.3.15/zh/api/mission-ext/TacticFullScaleAttack.md) | 🔗 |
| C | [TacticHoldChokePoint](/v1.3.15/zh/api/mission-ext/TacticHoldChokePoint.md) | 🔗 |
| C | [TacticPerimeterDefense](/v1.3.15/zh/api/mission-ext/TacticPerimeterDefense.md) | 🔗 |
| C | [TacticRangedHarrassmentOffensive](/v1.3.15/zh/api/mission-ext/TacticRangedHarrassmentOffensive.md) | 🔗 |
| C | [TacticSallyOutDefense](/v1.3.15/zh/api/mission-ext/TacticSallyOutDefense.md) | 🔗 |
| C | [TacticSallyOutHitAndRun](/v1.3.15/zh/api/mission-ext/TacticSallyOutHitAndRun.md) | 🔗 |
| C | [TacticSergeantMPBotTactic](/v1.3.15/zh/api/mission-ext/TacticSergeantMPBotTactic.md) | 🔗 |
| E | [TacticState](/v1.3.15/zh/api/mission-ext/TacticState.md) | 🔗 |
| C | [TacticStop](/v1.3.15/zh/api/mission-ext/TacticStop.md) | 🔗 |
| E | [TargetFlags](/v1.3.15/zh/api/mission-ext/TargetFlags.md) | 🔗 |
| E | [TargetIconType](/v1.3.15/zh/api/mission-ext/TargetIconType.md) | 🔗 |
| C | Team | — |
| C | [TeamAIComponent](/v1.3.15/zh/api/mission-ext/TeamAIComponent.md) | 🔗 |
| C | [TeamAIGeneral](/v1.3.15/zh/api/mission-ext/TeamAIGeneral.md) | 🔗 |
| C | [TeamAiMultiplayerSiegeAttacker](/v1.3.15/zh/api/mission-ext/TeamAiMultiplayerSiegeAttacker.md) | 🔗 |
| C | [TeamAiMultiplayerSiegeDefender](/v1.3.15/zh/api/mission-ext/TeamAiMultiplayerSiegeDefender.md) | 🔗 |
| C | [TeamAISallyOutAttacker](/v1.3.15/zh/api/mission-ext/TeamAISallyOutAttacker.md) | 🔗 |
| C | [TeamAISallyOutDefender](/v1.3.15/zh/api/mission-ext/TeamAISallyOutDefender.md) | 🔗 |
| C | [TeamAISiegeAttacker](/v1.3.15/zh/api/mission-ext/TeamAISiegeAttacker.md) | 🔗 |
| C | [TeamAISiegeComponent](/v1.3.15/zh/api/mission-ext/TeamAISiegeComponent.md) | 🔗 |
| C | [TeamAISiegeDefender](/v1.3.15/zh/api/mission-ext/TeamAISiegeDefender.md) | 🔗 |
| C | [TeamCollection](/v1.3.15/zh/api/mission-ext/TeamCollection.md) | 🔗 |
| C | [TeammateColorsExtensions](/v1.3.15/zh/api/mission-ext/TeammateColorsExtensions.md) | 🔗 |
| C | [TeamQuerySystem](/v1.3.15/zh/api/mission-ext/TeamQuerySystem.md) | 🔗 |
| E | [TerrainTypeSoundSlot](/v1.3.15/zh/api/mission-ext/TerrainTypeSoundSlot.md) | 🔗 |
| C | [TestScript](/v1.3.15/zh/api/mission-ext/TestScript.md) | 🔗 |
| C | [Threat](/v1.3.15/zh/api/mission-ext/Threat.md) | 🔗 |
| C | [ThreatSeeker](/v1.3.15/zh/api/mission-ext/ThreatSeeker.md) | 🔗 |
| S | [TimeSpeedRequest](/v1.3.15/zh/api/mission-ext/TimeSpeedRequest.md) | 🔗 |
| E | [TimeType](/v1.3.15/zh/api/mission-ext/TimeType.md) | 🔗 |
| C | [TrainingIcon](/v1.3.15/zh/api/mission-ext/TrainingIcon.md) | 🔗 |
| E | [TrainingType](/v1.3.15/zh/api/mission-ext/TrainingType.md) | 🔗 |
| C | [TrajectoryVisualizer](/v1.3.15/zh/api/mission-ext/TrajectoryVisualizer.md) | 🔗 |
| C | [TransposedLineFormation](/v1.3.15/zh/api/mission-ext/TransposedLineFormation.md) | 🔗 |
| C | [Trebuchet](/v1.3.15/zh/api/mission-ext/Trebuchet.md) | 🔗 |
| C | [TrebuchetAI](/v1.3.15/zh/api/mission-ext/TrebuchetAI.md) | 🔗 |
| C | [TrebuchetSpawner](/v1.3.15/zh/api/mission-ext/TrebuchetSpawner.md) | 🔗 |
| C | [TroopFilteringUtilities](/v1.3.15/zh/api/mission-ext/TroopFilteringUtilities.md) | 🔗 |
| C | [TroopMissionInfo](/v1.3.15/zh/api/mission-ext/TroopMissionInfo.md) | 🔗 |
| C | [TutorialArea](/v1.3.15/zh/api/mission-ext/TutorialArea.md) | 🔗 |
| E | Type | — |
| C | [UdpNetworkComponent](/v1.3.15/zh/api/mission-ext/UdpNetworkComponent.md) | 🔗 |
| E | [UnderAttackType](/v1.3.15/zh/api/mission-ext/UnderAttackType.md) | 🔗 |
| S | [UnsignedInteger](/v1.3.15/zh/api/mission-ext/UnsignedInteger.md) | 🔗 |
| S | [UnsignedLongInteger](/v1.3.15/zh/api/mission-ext/UnsignedLongInteger.md) | 🔗 |
| C | [UnspecifiedDedicatedServerState](/v1.3.15/zh/api/mission-ext/UnspecifiedDedicatedServerState.md) | 🔗 |
| C | [UsableGameObjectGroup](/v1.3.15/zh/api/mission-ext/UsableGameObjectGroup.md) | 🔗 |
| C | [UsableMachine](/v1.3.15/zh/api/mission-ext/UsableMachine.md) | 🔗 |
| C | [UsableMachineAIBase](/v1.3.15/zh/api/mission-ext/UsableMachineAIBase.md) | 🔗 |
| C | [UsableMissionObject](/v1.3.15/zh/api/mission-ext/UsableMissionObject.md) | 🔗 |
| C | [UsableMissionObjectComponent](/v1.3.15/zh/api/mission-ext/UsableMissionObjectComponent.md) | 🔗 |
| S | [UsableMissionObjectRecord](/v1.3.15/zh/api/mission-ext/UsableMissionObjectRecord.md) | 🔗 |
| E | [UsableObjectInterestKind](/v1.3.15/zh/api/mission-ext/UsableObjectInterestKind.md) | 🔗 |
| E | [UsageDirection](/v1.3.15/zh/api/mission-ext/UsageDirection.md) | 🔗 |
| C | [VertexAnimator](/v1.3.15/zh/api/mission-ext/VertexAnimator.md) | 🔗 |
| S | [VertexAnimatorRecord](/v1.3.15/zh/api/mission-ext/VertexAnimatorRecord.md) | 🔗 |
| C | [VictoryComponent](/v1.3.15/zh/api/mission-ext/VictoryComponent.md) | 🔗 |
| C | [VideoPlaybackState](/v1.3.15/zh/api/mission-ext/VideoPlaybackState.md) | 🔗 |
| C | [ViewCreatorModule](/v1.3.15/zh/api/mission-ext/ViewCreatorModule.md) | 🔗 |
| C | [ViewMethod](/v1.3.15/zh/api/mission-ext/ViewMethod.md) | 🔗 |
| C | [VisualShipFactory](/v1.3.15/zh/api/mission-ext/VisualShipFactory.md) | 🔗 |
| C | [VoiceChatHandler](/v1.3.15/zh/api/mission-ext/VoiceChatHandler.md) | 🔗 |
| C | [VoiceType](/v1.3.15/zh/api/mission-ext/VoiceType.md) | 🔗 |
| C | [VolumeBox](/v1.3.15/zh/api/mission-ext/VolumeBox.md) | 🔗 |
| C | [WallSegment](/v1.3.15/zh/api/mission-ext/WallSegment.md) | 🔗 |
| C | [WarmupSpawningBehavior](/v1.3.15/zh/api/mission-ext/WarmupSpawningBehavior.md) | 🔗 |
| E | [WarmupStates](/v1.3.15/zh/api/mission-ext/WarmupStates.md) | 🔗 |
| E | [WatchState](/v1.3.15/zh/api/mission-ext/WatchState.md) | 🔗 |
| C | [WaterPathPoint](/v1.3.15/zh/api/mission-ext/WaterPathPoint.md) | 🔗 |
| C | [WaveFloater](/v1.3.15/zh/api/mission-ext/WaveFloater.md) | 🔗 |
| C | [WeaponComponentMissionExtensions](/v1.3.15/zh/api/mission-ext/WeaponComponentMissionExtensions.md) | 🔗 |
| S | [WeaponData](/v1.3.15/zh/api/mission-ext/WeaponData.md) | 🔗 |
| S | [WeaponInfo](/v1.3.15/zh/api/mission-ext/WeaponInfo.md) | 🔗 |
| C | [WeaponSpawner](/v1.3.15/zh/api/mission-ext/WeaponSpawner.md) | 🔗 |
| E | [WeaponSpawnFlags](/v1.3.15/zh/api/mission-ext/WeaponSpawnFlags.md) | 🔗 |
| E | [WeaponState](/v1.3.15/zh/api/mission-ext/WeaponState.md) | 🔗 |
| S | [WeaponStatsData](/v1.3.15/zh/api/mission-ext/WeaponStatsData.md) | 🔗 |
| E | [WeaponWieldActionType](/v1.3.15/zh/api/mission-ext/WeaponWieldActionType.md) | 🔗 |
| C | [WedgeFormation](/v1.3.15/zh/api/mission-ext/WedgeFormation.md) | 🔗 |
| C | [WindMill](/v1.3.15/zh/api/mission-ext/WindMill.md) | 🔗 |
| E | [XmlInformationType](/v1.3.15/zh/api/mission-ext/XmlInformationType.md) | 🔗 |

## TaleWorlds.MountAndBlade.AI (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SiegeWeaponAutoDeployer](/v1.3.15/zh/api/mission-ext/SiegeWeaponAutoDeployer.md) | 🔗 |

## TaleWorlds.MountAndBlade.AI.AgentComponents (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ScriptedMovementComponent](/v1.3.15/zh/api/mission-ext/ScriptedMovementComponent.md) | 🔗 |

## TaleWorlds.MountAndBlade.ComponentInterfaces (16)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentApplyDamageModel](/v1.3.15/zh/api/mission-ext/AgentApplyDamageModel.md) | 🔗 |
| C | [AgentDecideKilledOrUnconsciousModel](/v1.3.15/zh/api/mission-ext/AgentDecideKilledOrUnconsciousModel.md) | 🔗 |
| C | [ApplyWeatherEffectsModel](/v1.3.15/zh/api/mission-ext/ApplyWeatherEffectsModel.md) | 🔗 |
| S | [ArrangementPosition](/v1.3.15/zh/api/mission-ext/ArrangementPosition.md) | 🔗 |
| C | [AutoBlockModel](/v1.3.15/zh/api/mission-ext/AutoBlockModel.md) | 🔗 |
| C | [BattleBannerBearersModel](/v1.3.15/zh/api/mission-ext/BattleBannerBearersModel.md) | 🔗 |
| C | [BattleInitializationModel](/v1.3.15/zh/api/mission-ext/BattleInitializationModel.md) | 🔗 |
| C | [BattleMoraleModel](/v1.3.15/zh/api/mission-ext/BattleMoraleModel.md) | 🔗 |
| C | [BattleSpawnModel](/v1.3.15/zh/api/mission-ext/BattleSpawnModel.md) | 🔗 |
| C | [DefaultSiegeEngineCalculationModel](/v1.3.15/zh/api/mission-ext/DefaultSiegeEngineCalculationModel.md) | 🔗 |
| C | [FormationArrangementModel](/v1.3.15/zh/api/mission-ext/FormationArrangementModel.md) | 🔗 |
| C | [ItemPickupModel](/v1.3.15/zh/api/mission-ext/ItemPickupModel.md) | 🔗 |
| C | [MissionDifficultyModel](/v1.3.15/zh/api/mission-ext/MissionDifficultyModel.md) | 🔗 |
| C | [MissionShipParametersModel](/v1.3.15/zh/api/mission-ext/MissionShipParametersModel.md) | 🔗 |
| C | [MissionSiegeEngineCalculationModel](/v1.3.15/zh/api/mission-ext/MissionSiegeEngineCalculationModel.md) | 🔗 |
| C | [StrikeMagnitudeCalculationModel](/v1.3.15/zh/api/mission-ext/StrikeMagnitudeCalculationModel.md) | 🔗 |

## TaleWorlds.MountAndBlade.DividableTasks (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FindMostDangerousThreat](/v1.3.15/zh/api/mission-ext/FindMostDangerousThreat.md) | 🔗 |
| C | [FormationSearchThreatTask](/v1.3.15/zh/api/mission-ext/FormationSearchThreatTask.md) | 🔗 |

## TaleWorlds.MountAndBlade.GameKeyCategory (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [OrderOfBattleHotKeyCategory](/v1.3.15/zh/api/mission-ext/OrderOfBattleHotKeyCategory.md) | 🔗 |
| C | [PhotoModeHotKeyCategory](/v1.3.15/zh/api/mission-ext/PhotoModeHotKeyCategory.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [ChatLineData](./mission-ext/ChatLineData.md) | 🔗 |
| C | [ChatLogMessageManager](./mission-ext/ChatLogMessageManager.md) | 🔗 |
| C | [GamepadCursorViewModel](./mission-ext/GamepadCursorViewModel.md) | 🔗 |
| C | [GauntletBannerBuilderScreen](./mission-ext/GauntletBannerBuilderScreen.md) | 🔗 |
| C | [GauntletChatLogView](./mission-ext/GauntletChatLogView.md) | 🔗 |
| C | [GauntletCreditsScreen](./mission-ext/GauntletCreditsScreen.md) | 🔗 |
| C | [GauntletDebugStats](./mission-ext/GauntletDebugStats.md) | 🔗 |
| C | [GauntletDefaultLoadingWindowManager](./mission-ext/GauntletDefaultLoadingWindowManager.md) | 🔗 |
| C | [GauntletGameNotification](./mission-ext/GauntletGameNotification.md) | 🔗 |
| C | [GauntletGamepadCursor](./mission-ext/GauntletGamepadCursor.md) | 🔗 |
| C | [GauntletGameVersionView](./mission-ext/GauntletGameVersionView.md) | 🔗 |
| C | [GauntletInformationView](./mission-ext/GauntletInformationView.md) | 🔗 |
| C | [GauntletInitialScreen](./mission-ext/GauntletInitialScreen.md) | 🔗 |
| C | [GauntletOptionsScreen](./mission-ext/GauntletOptionsScreen.md) | 🔗 |
| C | [GauntletOrderUIHandler](./mission-ext/GauntletOrderUIHandler.md) | 🔗 |
| C | [GauntletProfileSelectionScreen](./mission-ext/GauntletProfileSelectionScreen.md) | 🔗 |
| C | [GauntletQueryManager](./mission-ext/GauntletQueryManager.md) | 🔗 |
| C | [GauntletUISubModule](./mission-ext/GauntletUISubModule.md) | 🔗 |
| C | [GauntletVideoPlaybackScreen](./mission-ext/GauntletVideoPlaybackScreen.md) | 🔗 |
| C | [KeybindingPopup](./mission-ext/KeybindingPopup.md) | 🔗 |
| C | [KeybindingPopupVM](./mission-ext/KeybindingPopupVM.md) | 🔗 |
| C | [LoadingWindowViewModel](./mission-ext/LoadingWindowViewModel.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BodyGeneratorView](./mission-ext/BodyGeneratorView.md) | 🔗 |
| C | [GauntletBodyGeneratorScreen](./mission-ext/GauntletBodyGeneratorScreen.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.Mission (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionGauntletAgentStatus](./mission-ext/MissionGauntletAgentStatus.md) | 🔗 |
| C | [MissionGauntletBoundaryCrossingView](./mission-ext/MissionGauntletBoundaryCrossingView.md) | 🔗 |
| C | [MissionGauntletCameraFadeView](./mission-ext/MissionGauntletCameraFadeView.md) | 🔗 |
| C | [MissionGauntletCategoryLoadManager](./mission-ext/MissionGauntletCategoryLoadManager.md) | 🔗 |
| C | [MissionGauntletCrosshair](./mission-ext/MissionGauntletCrosshair.md) | 🔗 |
| C | [MissionGauntletEscapeMenuBase](./mission-ext/MissionGauntletEscapeMenuBase.md) | 🔗 |
| C | [MissionGauntletHintView](./mission-ext/MissionGauntletHintView.md) | 🔗 |
| C | [MissionGauntletMainAgentCheerControllerView](./mission-ext/MissionGauntletMainAgentCheerControllerView.md) | 🔗 |
| C | [MissionGauntletMainAgentControlModeView](./mission-ext/MissionGauntletMainAgentControlModeView.md) | 🔗 |
| C | [MissionGauntletMainAgentEquipDropView](./mission-ext/MissionGauntletMainAgentEquipDropView.md) | 🔗 |
| C | [MissionGauntletMainAgentEquipmentControllerView](./mission-ext/MissionGauntletMainAgentEquipmentControllerView.md) | 🔗 |
| C | [MissionGauntletOptionsUIHandler](./mission-ext/MissionGauntletOptionsUIHandler.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionGauntletAgentLockVisualizerView](./mission-ext/MissionGauntletAgentLockVisualizerView.md) | 🔗 |
| C | [MissionGauntletBattleScore](./mission-ext/MissionGauntletBattleScore.md) | 🔗 |
| C | [MissionGauntletFormationMarker](./mission-ext/MissionGauntletFormationMarker.md) | 🔗 |
| C | [MissionGauntletKillNotificationSingleplayerUIHandler](./mission-ext/MissionGauntletKillNotificationSingleplayerUIHandler.md) | 🔗 |
| C | [MissionGauntletLeaveView](./mission-ext/MissionGauntletLeaveView.md) | 🔗 |
| C | [MissionGauntletOrderOfBattleUIHandler](./mission-ext/MissionGauntletOrderOfBattleUIHandler.md) | 🔗 |
| C | [MissionGauntletPhotoMode](./mission-ext/MissionGauntletPhotoMode.md) | 🔗 |
| C | [MissionGauntletSiegeEngineMarker](./mission-ext/MissionGauntletSiegeEngineMarker.md) | 🔗 |
| C | [MissionGauntletSingleplayerEscapeMenu](./mission-ext/MissionGauntletSingleplayerEscapeMenu.md) | 🔗 |
| C | [MissionGauntletSingleplayerOrderUIHandler](./mission-ext/MissionGauntletSingleplayerOrderUIHandler.md) | 🔗 |
| C | [MissionGauntletSpectatorControl](./mission-ext/MissionGauntletSpectatorControl.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.SceneNotification (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GauntletSceneNotification](./mission-ext/GauntletSceneNotification.md) | 🔗 |
| C | [NativeSceneNotificationContextProvider](./mission-ext/NativeSceneNotificationContextProvider.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.TextureProviders (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerTableauTextureProvider](./mission-ext/BannerTableauTextureProvider.md) | 🔗 |
| C | [BrightnessDemoTextureProvider](./mission-ext/BrightnessDemoTextureProvider.md) | 🔗 |
| C | [CharacterTableauTextureProvider](./mission-ext/CharacterTableauTextureProvider.md) | 🔗 |
| C | [ItemTableauTextureProvider](./mission-ext/ItemTableauTextureProvider.md) | 🔗 |
| C | [OnlineImageTextureProvider](./mission-ext/OnlineImageTextureProvider.md) | 🔗 |
| C | [SaveLoadHeroTableauTextureProvider](./mission-ext/SaveLoadHeroTableauTextureProvider.md) | 🔗 |
| C | [SceneTextureProvider](./mission-ext/SceneTextureProvider.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerImageTextureProvider](./mission-ext/BannerImageTextureProvider.md) | 🔗 |
| C | [CharacterImageTextureProvider](./mission-ext/CharacterImageTextureProvider.md) | 🔗 |
| C | [CraftingPieceImageTextureProvider](./mission-ext/CraftingPieceImageTextureProvider.md) | 🔗 |
| C | [ImageIdentifierTextureProvider](./mission-ext/ImageIdentifierTextureProvider.md) | 🔗 |
| C | [ItemImageTextureProvider](./mission-ext/ItemImageTextureProvider.md) | 🔗 |
| C | [PlayerAvatarImageTextureProvider](./mission-ext/PlayerAvatarImageTextureProvider.md) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.Widgets (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [Dimensions](/v1.3.15/zh/api/mission-ext/Dimensions.md) | 🔗 |
| C | [DimensionSyncWidget](/v1.3.15/zh/api/mission-ext/DimensionSyncWidget.md) | 🔗 |

## TaleWorlds.MountAndBlade.MissionRepresentatives (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DuelMissionRepresentative](/v1.3.15/zh/api/mission-ext/DuelMissionRepresentative.md) | 🔗 |
| C | [FFAMissionRepresentative](/v1.3.15/zh/api/mission-ext/FFAMissionRepresentative.md) | 🔗 |
| C | [FlagDominationMissionRepresentative](/v1.3.15/zh/api/mission-ext/FlagDominationMissionRepresentative.md) | 🔗 |
| C | [SiegeMissionRepresentative](/v1.3.15/zh/api/mission-ext/SiegeMissionRepresentative.md) | 🔗 |
| C | [TeamDeathmatchMissionRepresentative](/v1.3.15/zh/api/mission-ext/TeamDeathmatchMissionRepresentative.md) | 🔗 |

## TaleWorlds.MountAndBlade.MissionSpawnHandlers (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CustomBattleMissionSpawnHandler](/v1.3.15/zh/api/mission-ext/CustomBattleMissionSpawnHandler.md) | 🔗 |
| C | [CustomMissionSpawnHandler](/v1.3.15/zh/api/mission-ext/CustomMissionSpawnHandler.md) | 🔗 |
| C | [CustomSallyOutMissionController](/v1.3.15/zh/api/mission-ext/CustomSallyOutMissionController.md) | 🔗 |
| C | [CustomSiegeMissionSpawnHandler](/v1.3.15/zh/api/mission-ext/CustomSiegeMissionSpawnHandler.md) | 🔗 |

## TaleWorlds.MountAndBlade.Missions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentList](/v1.3.15/zh/api/mission-ext/AgentList.md) | 🔗 |
| C | [AgentReadOnlyList](/v1.3.15/zh/api/mission-ext/AgentReadOnlyList.md) | 🔗 |
| I | [IMissionSiegeWeaponsController](/v1.3.15/zh/api/mission-ext/IMissionSiegeWeaponsController.md) | 🔗 |
| C | [MissionSiegeWeaponsController](/v1.3.15/zh/api/mission-ext/MissionSiegeWeaponsController.md) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.Handlers (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BattleDeploymentHandler](/v1.3.15/zh/api/mission-ext/BattleDeploymentHandler.md) | 🔗 |
| C | [SiegeDeploymentHandler](/v1.3.15/zh/api/mission-ext/SiegeDeploymentHandler.md) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.Hints (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionHint](/v1.3.15/zh/api/mission-ext/MissionHint.md) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.MissionLogics (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionHintLogic](/v1.3.15/zh/api/mission-ext/MissionHintLogic.md) | 🔗 |
| C | [MissionObjectiveLogic](/v1.3.15/zh/api/mission-ext/MissionObjectiveLogic.md) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.Objectives (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IMissionObjectiveTarget](./mission-ext/IMissionObjectiveTarget.md) | 🔗 |
| C | [MissionObjective](/v1.3.15/zh/api/mission-ext/MissionObjective.md) | 🔗 |
| S | [MissionObjectiveProgressInfo](/v1.3.15/zh/api/mission-ext/MissionObjectiveProgressInfo.md) | 🔗 |

## TaleWorlds.MountAndBlade.Network (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DebugNetworkEventStatistics](/v1.3.15/zh/api/mission-ext/DebugNetworkEventStatistics.md) | 🔗 |
| C | [PerSecondEventData](/v1.3.15/zh/api/mission-ext/PerSecondEventData.md) | 🔗 |
| C | [TotalEventData](/v1.3.15/zh/api/mission-ext/TotalEventData.md) | 🔗 |

## TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerBearerCondition](/v1.3.15/zh/api/mission-ext/BannerBearerCondition.md) | 🔗 |

## TaleWorlds.MountAndBlade.Network.Messages (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CreatePlayer](/v1.3.15/zh/api/mission-ext/CreatePlayer.md) | 🔗 |
| C | [DeletePlayer](/v1.3.15/zh/api/mission-ext/DeletePlayer.md) | 🔗 |
| C | [GameNetworkMessage](/v1.3.15/zh/api/mission-ext/GameNetworkMessage.md) | 🔗 |

## TaleWorlds.MountAndBlade.Objects (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AnimalSpawnSettings](/v1.3.15/zh/api/mission-ext/AnimalSpawnSettings.md) | 🔗 |
| C | [AreaMarker](/v1.3.15/zh/api/mission-ext/AreaMarker.md) | 🔗 |
| C | [FightAreaMarker](/v1.3.15/zh/api/mission-ext/FightAreaMarker.md) | 🔗 |
| C | [FlagCapturePoint](/v1.3.15/zh/api/mission-ext/FlagCapturePoint.md) | 🔗 |
| C | [GenericMissionEvent](/v1.3.15/zh/api/mission-ext/GenericMissionEvent.md) | 🔗 |
| C | [GenericMissionEventScript](/v1.3.15/zh/api/mission-ext/GenericMissionEventScript.md) | 🔗 |
| C | [ShipVisual](/v1.3.15/zh/api/mission-ext/ShipVisual.md) | 🔗 |

## TaleWorlds.MountAndBlade.Objects.Siege (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BallistaSpawner](/v1.3.15/zh/api/mission-ext/BallistaSpawner.md) | 🔗 |
| C | [BatteringRamSpawner](/v1.3.15/zh/api/mission-ext/BatteringRamSpawner.md) | 🔗 |
| C | [FireTrebuchet](/v1.3.15/zh/api/mission-ext/FireTrebuchet.md) | 🔗 |
| I | [ISpawnable](/v1.3.15/zh/api/mission-ext/ISpawnable.md) | 🔗 |
| C | [MangonelSpawner](/v1.3.15/zh/api/mission-ext/MangonelSpawner.md) | 🔗 |
| C | [MultiplayerBallistaSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerBallistaSpawner.md) | 🔗 |
| C | [MultiplayerBatteringRamSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerBatteringRamSpawner.md) | 🔗 |
| C | [MultiplayerFireBallistaSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerFireBallistaSpawner.md) | 🔗 |
| C | [MultiplayerFireMangonelSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerFireMangonelSpawner.md) | 🔗 |
| C | [MultiplayerFireTrebuchetSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerFireTrebuchetSpawner.md) | 🔗 |
| C | [MultiplayerMangonelSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerMangonelSpawner.md) | 🔗 |
| C | [MultiplayerSiegeTowerSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerSiegeTowerSpawner.md) | 🔗 |
| C | [MultiplayerTrebuchetSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerTrebuchetSpawner.md) | 🔗 |
| C | [SiegeLadderSpawner](/v1.3.15/zh/api/mission-ext/SiegeLadderSpawner.md) | 🔗 |
| C | [SiegeTowerSpawner](/v1.3.15/zh/api/mission-ext/SiegeTowerSpawner.md) | 🔗 |
| C | [SpawnerBase](/v1.3.15/zh/api/mission-ext/SpawnerBase.md) | 🔗 |
| C | [SpawnerPermissionField](/v1.3.15/zh/api/mission-ext/SpawnerPermissionField.md) | 🔗 |

## TaleWorlds.MountAndBlade.Objects.Usables (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AmmoBarrelBase](/v1.3.15/zh/api/mission-ext/AmmoBarrelBase.md) | 🔗 |
| C | [ArrowBarrel](/v1.3.15/zh/api/mission-ext/ArrowBarrel.md) | 🔗 |
| C | [ClimbingMachine](/v1.3.15/zh/api/mission-ext/ClimbingMachine.md) | 🔗 |
| C | [EventTriggeringUsableMachine](/v1.3.15/zh/api/mission-ext/EventTriggeringUsableMachine.md) | 🔗 |
| C | [JavelinBarrel](/v1.3.15/zh/api/mission-ext/JavelinBarrel.md) | 🔗 |
| C | [RemoveExtraWeaponOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/RemoveExtraWeaponOnStopUsageComponent.md) | 🔗 |
| C | [SiegeMachineStonePile](/v1.3.15/zh/api/mission-ext/SiegeMachineStonePile.md) | 🔗 |

## TaleWorlds.MountAndBlade.Options (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ActionOptionData](/v1.3.15/zh/api/mission-ext/ActionOptionData.md) | 🔗 |
| C | [OptionCategory](/v1.3.15/zh/api/mission-ext/OptionCategory.md) | 🔗 |
| C | [OptionGroup](/v1.3.15/zh/api/mission-ext/OptionGroup.md) | 🔗 |
| C | [OptionsProvider](/v1.3.15/zh/api/mission-ext/OptionsProvider.md) | 🔗 |

## TaleWorlds.MountAndBlade.Options.ManagedOptions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ManagedBooleanOptionData](/v1.3.15/zh/api/mission-ext/ManagedBooleanOptionData.md) | 🔗 |
| C | [ManagedNumericOptionData](/v1.3.15/zh/api/mission-ext/ManagedNumericOptionData.md) | 🔗 |
| C | [ManagedOptionData](/v1.3.15/zh/api/mission-ext/ManagedOptionData.md) | 🔗 |
| C | [ManagedSelectionOptionData](/v1.3.15/zh/api/mission-ext/ManagedSelectionOptionData.md) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Missions (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BaseBattleMissionController](/v1.3.15/zh/api/mission-ext/BaseBattleMissionController.md) | 🔗 |
| C | [BattleSpawnLogic](/v1.3.15/zh/api/mission-ext/BattleSpawnLogic.md) | 🔗 |
| C | [CaravanBattleMissionHandler](/v1.3.15/zh/api/mission-ext/CaravanBattleMissionHandler.md) | 🔗 |
| C | [DebugAgentTeleporterMissionController](/v1.3.15/zh/api/mission-ext/DebugAgentTeleporterMissionController.md) | 🔗 |
| C | [DebugObjectDestroyerMissionController](/v1.3.15/zh/api/mission-ext/DebugObjectDestroyerMissionController.md) | 🔗 |
| C | [EquipmentTestMissionController](/v1.3.15/zh/api/mission-ext/EquipmentTestMissionController.md) | 🔗 |
| C | [HideoutPhasedMissionController](/v1.3.15/zh/api/mission-ext/HideoutPhasedMissionController.md) | 🔗 |
| C | [MissionOptionsComponent](/v1.3.15/zh/api/mission-ext/MissionOptionsComponent.md) | 🔗 |
| C | [SimpleMountedPlayerMissionController](/v1.3.15/zh/api/mission-ext/SimpleMountedPlayerMissionController.md) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Missions.Handlers (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BasicMissionHandler](/v1.3.15/zh/api/mission-ext/BasicMissionHandler.md) | 🔗 |
| I | [IBoardGameHandler](/v1.3.15/zh/api/mission-ext/IBoardGameHandler.md) | 🔗 |
| C | [LordsHallFightMissionController](/v1.3.15/zh/api/mission-ext/LordsHallFightMissionController.md) | 🔗 |
| C | [MissionFacialAnimationHandler](/v1.3.15/zh/api/mission-ext/MissionFacialAnimationHandler.md) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentMoraleInteractionLogic](/v1.3.15/zh/api/mission-ext/AgentMoraleInteractionLogic.md) | 🔗 |
| C | [AmmoSupplyLogic](/v1.3.15/zh/api/mission-ext/AmmoSupplyLogic.md) | 🔗 |
| C | [BattleMissionAgentInteractionLogic](/v1.3.15/zh/api/mission-ext/BattleMissionAgentInteractionLogic.md) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Objects (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [NavigationMeshDeactivator](/v1.3.15/zh/api/mission-ext/NavigationMeshDeactivator.md) | 🔗 |
| C | [SceneLeveler](/v1.3.15/zh/api/mission-ext/SceneLeveler.md) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Objects.Siege (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentPathNavMeshChecker](/v1.3.15/zh/api/mission-ext/AgentPathNavMeshChecker.md) | 🔗 |
| E | [Direction](/v1.3.15/zh/api/mission-ext/Direction.md) | 🔗 |

## TaleWorlds.MountAndBlade.View (44)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentVisuals](./mission-ext/AgentVisuals.md) | 🔗 |
| C | [AgentVisualsCreator](./mission-ext/AgentVisualsCreator.md) | 🔗 |
| C | [BannerVisual](./mission-ext/BannerVisual.md) | 🔗 |
| C | [BannerVisualCreator](./mission-ext/BannerVisualCreator.md) | 🔗 |
| C | [BannerVisualExtensions](./mission-ext/BannerVisualExtensions.md) | 🔗 |
| C | [BorderFlagEntityFactory](./mission-ext/BorderFlagEntityFactory.md) | 🔗 |
| C | [CampaignSounds](./mission-ext/CampaignSounds.md) | 🔗 |
| C | [ConversationTagView](./mission-ext/ConversationTagView.md) | 🔗 |
| C | [CraftedDataView](./mission-ext/CraftedDataView.md) | 🔗 |
| C | [CraftedDataViewManager](./mission-ext/CraftedDataViewManager.md) | 🔗 |
| C | [CraftingPieceCollectionElementViewExtensions](./mission-ext/CraftingPieceCollectionElementViewExtensions.md) | 🔗 |
| C | [CraftingSounds](./mission-ext/CraftingSounds.md) | 🔗 |
| C | [DefaultSounds](./mission-ext/DefaultSounds.md) | 🔗 |
| C | [DefaultView](./mission-ext/DefaultView.md) | 🔗 |
| C | [DLCInstallationQueryView](./mission-ext/DLCInstallationQueryView.md) | 🔗 |
| C | [EndgameSounds](./mission-ext/EndgameSounds.md) | 🔗 |
| I | [IChatLogHandlerScreen](./mission-ext/IChatLogHandlerScreen.md) | 🔗 |
| C | [InventorySounds](./mission-ext/InventorySounds.md) | 🔗 |
| I | [ISiegeDeploymentView](./mission-ext/ISiegeDeploymentView.md) | 🔗 |
| C | [ItemCollectionElementViewExtensions](./mission-ext/ItemCollectionElementViewExtensions.md) | 🔗 |
| C | [ItemObjectViewExtensions](./mission-ext/ItemObjectViewExtensions.md) | 🔗 |
| C | [ItemVisualizer](./mission-ext/ItemVisualizer.md) | 🔗 |
| C | [KingdomSounds](./mission-ext/KingdomSounds.md) | 🔗 |
| C | [MissionPlayerToggledOrderViewEvent](./mission-ext/MissionPlayerToggledOrderViewEvent.md) | 🔗 |
| C | [MissionSounds](./mission-ext/MissionSounds.md) | 🔗 |
| C | [MountVisualCreator](./mission-ext/MountVisualCreator.md) | 🔗 |
| C | [MultiplayerSounds](./mission-ext/MultiplayerSounds.md) | 🔗 |
| C | [NotificationSounds](./mission-ext/NotificationSounds.md) | 🔗 |
| C | [OrderOfBattleSounds](./mission-ext/OrderOfBattleSounds.md) | 🔗 |
| C | [OverrideView](./mission-ext/OverrideView.md) | 🔗 |
| C | [PanelSounds](./mission-ext/PanelSounds.md) | 🔗 |
| C | [PartySounds](./mission-ext/PartySounds.md) | 🔗 |
| C | [PopupSceneEmissionHandler](./mission-ext/PopupSceneEmissionHandler.md) | 🔗 |
| C | [PopupSceneSkeletonAnimationScript](./mission-ext/PopupSceneSkeletonAnimationScript.md) | 🔗 |
| C | [PopupSceneSpawnPoint](./mission-ext/PopupSceneSpawnPoint.md) | 🔗 |
| C | [PortSounds](./mission-ext/PortSounds.md) | 🔗 |
| C | [PreloadHelper](./mission-ext/PreloadHelper.md) | 🔗 |
| C | [SiegeSounds](./mission-ext/SiegeSounds.md) | 🔗 |
| C | [SimpleSceneTestWithMission](./mission-ext/SimpleSceneTestWithMission.md) | 🔗 |
| C | [UISoundsHelper](./mission-ext/UISoundsHelper.md) | 🔗 |
| C | [ViewCreator](./mission-ext/ViewCreator.md) | 🔗 |
| C | [ViewCreatorManager](./mission-ext/ViewCreatorManager.md) | 🔗 |
| C | [ViewSubModule](./mission-ext/ViewSubModule.md) | 🔗 |
| C | [WeaponComponentViewExtensions](./mission-ext/WeaponComponentViewExtensions.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.CustomBattle (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CustomBattleFactory](./mission-ext/CustomBattleFactory.md) | 🔗 |
| I | [ICustomBattleProvider](./mission-ext/ICustomBattleProvider.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews (30)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | CameraFadeState | — |
| C | [MissionAgentContourControllerView](./mission-ext/MissionAgentContourControllerView.md) | 🔗 |
| C | [MissionAgentLabelView](./mission-ext/MissionAgentLabelView.md) | 🔗 |
| C | [MissionAgentStatusUIHandler](./mission-ext/MissionAgentStatusUIHandler.md) | 🔗 |
| C | [MissionBattleUIBaseView](./mission-ext/MissionBattleUIBaseView.md) | 🔗 |
| C | [MissionBoundaryCrossingView](./mission-ext/MissionBoundaryCrossingView.md) | 🔗 |
| C | [MissionBoundaryWallView](./mission-ext/MissionBoundaryWallView.md) | 🔗 |
| C | [MissionCameraFadeView](./mission-ext/MissionCameraFadeView.md) | 🔗 |
| C | [MissionCheatView](./mission-ext/MissionCheatView.md) | 🔗 |
| C | [MissionCrosshair](./mission-ext/MissionCrosshair.md) | 🔗 |
| C | [MissionEscapeMenuView](./mission-ext/MissionEscapeMenuView.md) | 🔗 |
| C | [MissionFormationTargetSelectionHandler](./mission-ext/MissionFormationTargetSelectionHandler.md) | 🔗 |
| C | [MissionGamepadEffectsView](./mission-ext/MissionGamepadEffectsView.md) | 🔗 |
| C | [MissionHintView](./mission-ext/MissionHintView.md) | 🔗 |
| C | [MissionItemContourControllerView](./mission-ext/MissionItemContourControllerView.md) | 🔗 |
| C | [MissionMainAgentCheerBarkControllerView](./mission-ext/MissionMainAgentCheerBarkControllerView.md) | 🔗 |
| C | [MissionMainAgentController](./mission-ext/MissionMainAgentController.md) | 🔗 |
| C | [MissionMainAgentControlModeView](./mission-ext/MissionMainAgentControlModeView.md) | 🔗 |
| C | [MissionMainAgentEquipDropView](./mission-ext/MissionMainAgentEquipDropView.md) | 🔗 |
| C | [MissionMainAgentEquipmentControllerView](./mission-ext/MissionMainAgentEquipmentControllerView.md) | 🔗 |
| C | [MissionMainAgentInteractionComponent](./mission-ext/MissionMainAgentInteractionComponent.md) | 🔗 |
| C | [MissionObjectiveView](./mission-ext/MissionObjectiveView.md) | 🔗 |
| C | [MissionOptionsUIHandler](./mission-ext/MissionOptionsUIHandler.md) | 🔗 |
| C | [MissionPlayerMovementFlagsChangeEvent](./mission-ext/MissionPlayerMovementFlagsChangeEvent.md) | 🔗 |
| C | [MissionView](./mission-ext/MissionView.md) | 🔗 |
| C | [MissionViewsContainer](./mission-ext/MissionViewsContainer.md) | 🔗 |
| E | [OverrideMainAgentControlFlag](./mission-ext/OverrideMainAgentControlFlag.md) | 🔗 |
| C | [ReplayCaptureLogic](./mission-ext/ReplayCaptureLogic.md) | 🔗 |
| C | [ReplayMissionView](./mission-ext/ReplayMissionView.md) | 🔗 |
| C | [SpectatorCameraView](./mission-ext/SpectatorCameraView.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.Order (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [CursorState](./mission-ext/CursorState.md) | 🔗 |
| C | [OrderFlag](./mission-ext/OrderFlag.md) | 🔗 |
| C | [OrderTroopPlacer](./mission-ext/OrderTroopPlacer.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BallistaView](./mission-ext/BallistaView.md) | 🔗 |
| C | [BricoleView](./mission-ext/BricoleView.md) | 🔗 |
| C | [MangonelView](./mission-ext/MangonelView.md) | 🔗 |
| C | [RangedSiegeWeaponView](./mission-ext/RangedSiegeWeaponView.md) | 🔗 |
| C | [RangedSiegeWeaponViewController](./mission-ext/RangedSiegeWeaponViewController.md) | 🔗 |
| C | [TrebuchetView](./mission-ext/TrebuchetView.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer (27)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterView](./mission-ext/BarterView.md) | 🔗 |
| C | [BoardGameView](./mission-ext/BoardGameView.md) | 🔗 |
| C | [DeploymentMissionView](./mission-ext/DeploymentMissionView.md) | 🔗 |
| C | [DeploymentView](./mission-ext/DeploymentView.md) | 🔗 |
| E | [DeploymentVisualizationPreference](./mission-ext/DeploymentVisualizationPreference.md) | 🔗 |
| C | [FaceGeneratorMissionView](./mission-ext/FaceGeneratorMissionView.md) | 🔗 |
| C | [FormationIndicatorMissionView](./mission-ext/FormationIndicatorMissionView.md) | 🔗 |
| C | [Indicator](./mission-ext/Indicator.md) | 🔗 |
| C | [MissionAgentLockVisualizerView](./mission-ext/MissionAgentLockVisualizerView.md) | 🔗 |
| C | [MissionBattleScoreUIHandler](./mission-ext/MissionBattleScoreUIHandler.md) | 🔗 |
| C | [MissionConversationView](./mission-ext/MissionConversationView.md) | 🔗 |
| C | [MissionCustomBattlePreloadView](./mission-ext/MissionCustomBattlePreloadView.md) | 🔗 |
| C | [MissionDeploymentBoundaryMarker](./mission-ext/MissionDeploymentBoundaryMarker.md) | 🔗 |
| C | [MissionEntitySelectionUIHandler](./mission-ext/MissionEntitySelectionUIHandler.md) | 🔗 |
| C | [MissionFormationMarkerUIHandler](./mission-ext/MissionFormationMarkerUIHandler.md) | 🔗 |
| C | [MissionLeaveView](./mission-ext/MissionLeaveView.md) | 🔗 |
| C | [MissionMessageUIHandler](./mission-ext/MissionMessageUIHandler.md) | 🔗 |
| C | [MissionOrderOfBattleUIHandler](./mission-ext/MissionOrderOfBattleUIHandler.md) | 🔗 |
| C | [MissionOrderUIHandler](./mission-ext/MissionOrderUIHandler.md) | 🔗 |
| C | [MissionScoreUIHandler](./mission-ext/MissionScoreUIHandler.md) | 🔗 |
| C | [MissionSiegeEngineMarkerView](./mission-ext/MissionSiegeEngineMarkerView.md) | 🔗 |
| C | [MissionSingleplayerEscapeMenu](./mission-ext/MissionSingleplayerEscapeMenu.md) | 🔗 |
| C | [MissionSingleplayerKillNotificationUIHandler](./mission-ext/MissionSingleplayerKillNotificationUIHandler.md) | 🔗 |
| C | [MissionSpectatorControlView](./mission-ext/MissionSpectatorControlView.md) | 🔗 |
| C | [PhotoModeView](./mission-ext/PhotoModeView.md) | 🔗 |
| C | [SiegeDeploymentVisualizationMissionView](./mission-ext/SiegeDeploymentVisualizationMissionView.md) | 🔗 |
| C | [TutorialMissionViews](./mission-ext/TutorialMissionViews.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.Sound (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MusicBattleMissionView](./mission-ext/MusicBattleMissionView.md) | 🔗 |
| C | [MusicSilencedMissionView](./mission-ext/MusicSilencedMissionView.md) | 🔗 |
| C | [MusicStealthMissionView](./mission-ext/MusicStealthMissionView.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.SceneNotification (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PopupSceneBanner](./mission-ext/PopupSceneBanner.md) | 🔗 |
| C | [PopupSceneShipSpawnPoint](./mission-ext/PopupSceneShipSpawnPoint.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.Screens (16)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerBuilderScreen](./mission-ext/BannerBuilderScreen.md) | 🔗 |
| C | [BenchmarkScreen](./mission-ext/BenchmarkScreen.md) | 🔗 |
| C | [CameraPoint](./mission-ext/CameraPoint.md) | 🔗 |
| E | [CameraPointTestType](./mission-ext/CameraPointTestType.md) | 🔗 |
| C | [CreditsScreen](./mission-ext/CreditsScreen.md) | 🔗 |
| C | [FaceGeneratorScreen](./mission-ext/FaceGeneratorScreen.md) | 🔗 |
| C | [GameLoadingScreen](./mission-ext/GameLoadingScreen.md) | 🔗 |
| C | [GameStateScreen](./mission-ext/GameStateScreen.md) | 🔗 |
| C | [GameStateScreenManager](./mission-ext/GameStateScreenManager.md) | 🔗 |
| I | [IFaceGeneratorScreen](./mission-ext/IFaceGeneratorScreen.md) | 🔗 |
| C | [MissionScreen](./mission-ext/MissionScreen.md) | 🔗 |
| C | [OptionsScreen](./mission-ext/OptionsScreen.md) | 🔗 |
| C | [SceneEditorLayer](./mission-ext/SceneEditorLayer.md) | 🔗 |
| C | [SceneEditorScreen](./mission-ext/SceneEditorScreen.md) | 🔗 |
| C | [VideoPlaybackScreen](./mission-ext/VideoPlaybackScreen.md) | 🔗 |
| C | [VisualTestsScreen](./mission-ext/VisualTestsScreen.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.Screens.Scripts (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MultiThreadedStressTestsScreen](./mission-ext/MultiThreadedStressTestsScreen.md) | 🔗 |
| C | [MultiThreadedTestFunctions](./mission-ext/MultiThreadedTestFunctions.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.Scripts (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [BodyPartIndex](./mission-ext/BodyPartIndex.md) | 🔗 |
| C | [CharacterDebugSpawner](./mission-ext/CharacterDebugSpawner.md) | 🔗 |
| C | [CharacterSpawner](./mission-ext/CharacterSpawner.md) | 🔗 |
| C | [HandMorphTest](./mission-ext/HandMorphTest.md) | 🔗 |
| C | [HandPose](./mission-ext/HandPose.md) | 🔗 |
| E | [InterpolationType](./mission-ext/InterpolationType.md) | 🔗 |
| C | [MapColorGradeManager](./mission-ext/MapColorGradeManager.md) | 🔗 |
| S | [PathAnimationState](./mission-ext/PathAnimationState.md) | 🔗 |
| C | [PopupSceneCameraPath](./mission-ext/PopupSceneCameraPath.md) | 🔗 |
| C | [PopupSceneSequence](./mission-ext/PopupSceneSequence.md) | 🔗 |
| C | [PopupSceneSwitchCameraSequence](./mission-ext/PopupSceneSwitchCameraSequence.md) | 🔗 |
| C | [PopupSceneSwitchItemSequence](./mission-ext/PopupSceneSwitchItemSequence.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.Tableaus (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerTableau](./mission-ext/BannerTableau.md) | 🔗 |
| C | [BasicCharacterTableau](./mission-ext/BasicCharacterTableau.md) | 🔗 |
| C | [BrightnessDemoTableau](./mission-ext/BrightnessDemoTableau.md) | 🔗 |
| C | [CharacterTableau](./mission-ext/CharacterTableau.md) | 🔗 |
| C | [ItemTableau](./mission-ext/ItemTableau.md) | 🔗 |
| S | [RenderDetails](./mission-ext/RenderDetails.md) | 🔗 |
| C | [SceneTableau](./mission-ext/SceneTableau.md) | 🔗 |
| C | [ThumbnailCacheManager](./mission-ext/ThumbnailCacheManager.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [Alignment](./mission-ext/Alignment.md) | 🔗 |
| C | [AvatarThumbnailCache](./mission-ext/AvatarThumbnailCache.md) | 🔗 |
| C | [AvatarThumbnailCreationData](./mission-ext/AvatarThumbnailCreationData.md) | 🔗 |
| C | [BannerLargeThumbnailCache](./mission-ext/BannerLargeThumbnailCache.md) | 🔗 |
| C | [BannerLargeThumbnailCreationData](./mission-ext/BannerLargeThumbnailCreationData.md) | 🔗 |
| C | [BannerSmallThumbnailCache](./mission-ext/BannerSmallThumbnailCache.md) | 🔗 |
| C | [BannerSmallThumbnailCreationData](./mission-ext/BannerSmallThumbnailCreationData.md) | 🔗 |
| C | [BannerThumbnailCache](./mission-ext/BannerThumbnailCache.md) | 🔗 |
| C | [BannerThumbnailCreationData](./mission-ext/BannerThumbnailCreationData.md) | 🔗 |
| C | [CharacterThumbnailCache](./mission-ext/CharacterThumbnailCache.md) | 🔗 |
| C | [CharacterThumbnailCreationData](./mission-ext/CharacterThumbnailCreationData.md) | 🔗 |
| C | [CraftingPieceCreationData](./mission-ext/CraftingPieceCreationData.md) | 🔗 |
| C | [CraftingPieceThumbnailCache](./mission-ext/CraftingPieceThumbnailCache.md) | 🔗 |
| C | [ItemThumbnailCache](./mission-ext/ItemThumbnailCache.md) | 🔗 |
| C | [ItemThumbnailCreationData](./mission-ext/ItemThumbnailCreationData.md) | 🔗 |
| I | [IThumbnailCache](./mission-ext/IThumbnailCache.md) | 🔗 |
| C | [NodeComparer](./mission-ext/NodeComparer.md) | 🔗 |
| C | [ThumbnailCache](./mission-ext/ThumbnailCache.md) | 🔗 |
| C | [ThumbnailCacheNode](./mission-ext/ThumbnailCacheNode.md) | 🔗 |
| C | [ThumbnailCreationData](./mission-ext/ThumbnailCreationData.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultVisualOrderProvider](./mission-ext/DefaultVisualOrderProvider.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GenericVisualOrderSet](./mission-ext/GenericVisualOrderSet.md) | 🔗 |
| C | [SingleVisualOrderSet](./mission-ext/SingleVisualOrderSet.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders.Orders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SingleVisualOrder](./mission-ext/SingleVisualOrder.md) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ToggleFacingVisualOrder](./mission-ext/ToggleFacingVisualOrder.md) | 🔗 |

## TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArrangementVisualOrder](./mission-ext/ArrangementVisualOrder.md) | 🔗 |

## TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AdvanceVisualOrder](./mission-ext/AdvanceVisualOrder.md) | 🔗 |
| C | [ChargeVisualOrder](./mission-ext/ChargeVisualOrder.md) | 🔗 |
| C | [FallbackVisualOrder](./mission-ext/FallbackVisualOrder.md) | 🔗 |
| C | [FollowMeVisualOrder](./mission-ext/FollowMeVisualOrder.md) | 🔗 |
| C | [MoveVisualOrder](./mission-ext/MoveVisualOrder.md) | 🔗 |
| C | [RetreatVisualOrder](./mission-ext/RetreatVisualOrder.md) | 🔗 |
| C | [StopVisualOrder](./mission-ext/StopVisualOrder.md) | 🔗 |

## TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GenericToggleVisualOrder](./mission-ext/GenericToggleVisualOrder.md) | 🔗 |
