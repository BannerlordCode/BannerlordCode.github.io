---
title: 战斗与引擎绑定 Mount & Blade 类目录 / Class Catalog
extra:
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
| E | [ActionCodeType](/v1.3.15/zh/api/mission-ext/ActionCodeType) | 🔗 |
| E | [ActionStage](/v1.3.15/zh/api/mission-ext/ActionStage) | 🔗 |
| S | [AddPlayersResult](/v1.3.15/zh/api/mission-ext/AddPlayersResult) | 🔗 |
| C | [Agent](./mission/Agent) | 🔗 |
| C | [AgentBuildData](/v1.3.15/zh/api/mission-ext/AgentBuildData) | 🔗 |
| S | [AgentCapsuleData](/v1.3.15/zh/api/mission-ext/AgentCapsuleData) | 🔗 |
| C | [AgentCommonAILogic](/v1.3.15/zh/api/mission-ext/AgentCommonAILogic) | 🔗 |
| C | AgentComponent | — |
| C | [AgentComponentExtensions](/v1.3.15/zh/api/mission-ext/AgentComponentExtensions) | 🔗 |
| C | [AgentController](/v1.3.15/zh/api/mission-ext/AgentController) | 🔗 |
| C | [AgentDrivenProperties](/v1.3.15/zh/api/mission-ext/AgentDrivenProperties) | 🔗 |
| C | [AgentHumanAILogic](/v1.3.15/zh/api/mission-ext/AgentHumanAILogic) | 🔗 |
| S | [AgentLastHitInfo](/v1.3.15/zh/api/mission-ext/AgentLastHitInfo) | 🔗 |
| E | [AgentMovementLockedState](/v1.3.15/zh/api/mission-ext/AgentMovementLockedState) | 🔗 |
| S | [AgentPropertiesModifiers](/v1.3.15/zh/api/mission-ext/AgentPropertiesModifiers) | 🔗 |
| C | [AgentProximityMap](/v1.3.15/zh/api/mission-ext/AgentProximityMap) | 🔗 |
| S | [AgentSpawnData](/v1.3.15/zh/api/mission-ext/AgentSpawnData) | 🔗 |
| C | [AgentStatCalculateModel](/v1.3.15/zh/api/mission-ext/AgentStatCalculateModel) | 🔗 |
| C | [AgentVictoryLogic](/v1.3.15/zh/api/mission-ext/AgentVictoryLogic) | 🔗 |
| C | [AgentVisualHolder](/v1.3.15/zh/api/mission-ext/AgentVisualHolder) | 🔗 |
| C | [AgentVisualsData](/v1.3.15/zh/api/mission-ext/AgentVisualsData) | 🔗 |
| E | [AIScriptedFrameFlags](/v1.3.15/zh/api/mission-ext/AIScriptedFrameFlags) | 🔗 |
| E | [AISimpleBehaviorKind](/v1.3.15/zh/api/mission-ext/AISimpleBehaviorKind) | 🔗 |
| E | [AISpecialCombatModeFlags](/v1.3.15/zh/api/mission-ext/AISpecialCombatModeFlags) | 🔗 |
| E | [AIStateFlag](/v1.3.15/zh/api/mission-ext/AIStateFlag) | 🔗 |
| E | [AITargetVisibilityState](/v1.3.15/zh/api/mission-ext/AITargetVisibilityState) | 🔗 |
| C | [AnimatedFlag](/v1.3.15/zh/api/mission-ext/AnimatedFlag) | 🔗 |
| S | [AnimationSystemBoneData](/v1.3.15/zh/api/mission-ext/AnimationSystemBoneData) | 🔗 |
| S | [AnimationSystemBoneDataBiped](/v1.3.15/zh/api/mission-ext/AnimationSystemBoneDataBiped) | 🔗 |
| S | [AnimationSystemBoneDataQuadruped](/v1.3.15/zh/api/mission-ext/AnimationSystemBoneDataQuadruped) | 🔗 |
| S | [AnimationSystemData](/v1.3.15/zh/api/mission-ext/AnimationSystemData) | 🔗 |
| S | [AnimationSystemDataQuadruped](/v1.3.15/zh/api/mission-ext/AnimationSystemDataQuadruped) | 🔗 |
| E | [AnimFlags](/v1.3.15/zh/api/mission-ext/AnimFlags) | 🔗 |
| C | [ArcherPosition](/v1.3.15/zh/api/mission-ext/ArcherPosition) | 🔗 |
| C | [ArmyManagementHotkeyCategory](/v1.3.15/zh/api/mission-ext/ArmyManagementHotkeyCategory) | 🔗 |
| S | [ArrangementOrder](/v1.3.15/zh/api/mission-ext/ArrangementOrder) | 🔗 |
| E | [ArrangementOrderEnum](/v1.3.15/zh/api/mission-ext/ArrangementOrderEnum) | 🔗 |
| C | [AssignPlayerRoleInTeamMissionController](/v1.3.15/zh/api/mission-ext/AssignPlayerRoleInTeamMissionController) | 🔗 |
| S | [AttackCollisionData](/v1.3.15/zh/api/mission-ext/AttackCollisionData) | 🔗 |
| C | [AttackEntityOrderDetachment](./mission-ext/AttackEntityOrderDetachment) | 🔗 |
| S | [AttackInformation](/v1.3.15/zh/api/mission-ext/AttackInformation) | 🔗 |
| E | [Axis](/v1.3.15/zh/api/mission-ext/Axis) | 🔗 |
| C | [Ballista](/v1.3.15/zh/api/mission-ext/Ballista) | 🔗 |
| C | [BallistaAI](/v1.3.15/zh/api/mission-ext/BallistaAI) | 🔗 |
| C | [BannerBearerLogic](/v1.3.15/zh/api/mission-ext/BannerBearerLogic) | 🔗 |
| C | [BannerBuilderState](/v1.3.15/zh/api/mission-ext/BannerBuilderState) | 🔗 |
| S | [BannerInstance](/v1.3.15/zh/api/mission-ext/BannerInstance) | 🔗 |
| C | [BannerlordConfig](/v1.3.15/zh/api/mission-ext/BannerlordConfig) | 🔗 |
| C | [BannerlordFriendListService](/v1.3.15/zh/api/mission-ext/BannerlordFriendListService) | 🔗 |
| C | [BannerlordMissions](/v1.3.15/zh/api/mission-ext/BannerlordMissions) | 🔗 |
| C | [BannerlordNetwork](/v1.3.15/zh/api/mission-ext/BannerlordNetwork) | 🔗 |
| C | [BannerlordTableauManager](/v1.3.15/zh/api/mission-ext/BannerlordTableauManager) | 🔗 |
| E | [BannerState](/v1.3.15/zh/api/mission-ext/BannerState) | 🔗 |
| C | [BaseNetworkComponentData](/v1.3.15/zh/api/mission-ext/BaseNetworkComponentData) | 🔗 |
| S | [BaseSynchedMissionObjectReadableRecord](/v1.3.15/zh/api/mission-ext/BaseSynchedMissionObjectReadableRecord) | 🔗 |
| C | [BasicBattleAgentOrigin](/v1.3.15/zh/api/mission-ext/BasicBattleAgentOrigin) | 🔗 |
| C | [BasicGameStarter](/v1.3.15/zh/api/mission-ext/BasicGameStarter) | 🔗 |
| C | [BasicLeaveMissionLogic](/v1.3.15/zh/api/mission-ext/BasicLeaveMissionLogic) | 🔗 |
| C | [BasicMissionTimer](/v1.3.15/zh/api/mission-ext/BasicMissionTimer) | 🔗 |
| C | [BatteringRam](/v1.3.15/zh/api/mission-ext/BatteringRam) | 🔗 |
| C | [BatteringRamAI](/v1.3.15/zh/api/mission-ext/BatteringRamAI) | 🔗 |
| S | [BatteringRamRecord](/v1.3.15/zh/api/mission-ext/BatteringRamRecord) | 🔗 |
| C | [BattleDeploymentMissionController](/v1.3.15/zh/api/mission-ext/BattleDeploymentMissionController) | 🔗 |
| C | [BattleEndLogic](/v1.3.15/zh/api/mission-ext/BattleEndLogic) | 🔗 |
| C | [BattleHighlightsController](/v1.3.15/zh/api/mission-ext/BattleHighlightsController) | 🔗 |
| C | [BattleMissionStarterLogic](/v1.3.15/zh/api/mission-ext/BattleMissionStarterLogic) | 🔗 |
| C | [BattleObserverMissionLogic](/v1.3.15/zh/api/mission-ext/BattleObserverMissionLogic) | 🔗 |
| C | [BattlePowerCalculationLogic](/v1.3.15/zh/api/mission-ext/BattlePowerCalculationLogic) | 🔗 |
| C | [BattleReinforcementsSpawnController](/v1.3.15/zh/api/mission-ext/BattleReinforcementsSpawnController) | 🔗 |
| C | [BattleSideSpawnPathSelector](/v1.3.15/zh/api/mission-ext/BattleSideSpawnPathSelector) | 🔗 |
| E | [BattleSizeQualifier](/v1.3.15/zh/api/mission-ext/BattleSizeQualifier) | 🔗 |
| E | [BattleSizeType](/v1.3.15/zh/api/mission-ext/BattleSizeType) | 🔗 |
| C | [BattleSpawnPathSelector](/v1.3.15/zh/api/mission-ext/BattleSpawnPathSelector) | 🔗 |
| C | [BattleViewModel](/v1.3.15/zh/api/mission-ext/BattleViewModel) | 🔗 |
| C | [BehaviorAdvance](/v1.3.15/zh/api/mission-ext/BehaviorAdvance) | 🔗 |
| C | [BehaviorAssaultWalls](/v1.3.15/zh/api/mission-ext/BehaviorAssaultWalls) | 🔗 |
| C | [BehaviorCautiousAdvance](/v1.3.15/zh/api/mission-ext/BehaviorCautiousAdvance) | 🔗 |
| C | [BehaviorCavalryScreen](/v1.3.15/zh/api/mission-ext/BehaviorCavalryScreen) | 🔗 |
| C | [BehaviorCharge](/v1.3.15/zh/api/mission-ext/BehaviorCharge) | 🔗 |
| C | [BehaviorComponent](/v1.3.15/zh/api/mission-ext/BehaviorComponent) | 🔗 |
| C | [BehaviorData](/v1.3.15/zh/api/mission-ext/BehaviorData) | 🔗 |
| C | [BehaviorDefend](/v1.3.15/zh/api/mission-ext/BehaviorDefend) | 🔗 |
| C | [BehaviorDefendCastleKeyPosition](/v1.3.15/zh/api/mission-ext/BehaviorDefendCastleKeyPosition) | 🔗 |
| C | [BehaviorDefendKeyPosition](/v1.3.15/zh/api/mission-ext/BehaviorDefendKeyPosition) | 🔗 |
| C | [BehaviorDefendSiegeWeapon](/v1.3.15/zh/api/mission-ext/BehaviorDefendSiegeWeapon) | 🔗 |
| C | [BehaviorDefensiveRing](/v1.3.15/zh/api/mission-ext/BehaviorDefensiveRing) | 🔗 |
| C | [BehaviorDestroySiegeWeapons](/v1.3.15/zh/api/mission-ext/BehaviorDestroySiegeWeapons) | 🔗 |
| C | [BehaviorEliminateEnemyInsideCastle](/v1.3.15/zh/api/mission-ext/BehaviorEliminateEnemyInsideCastle) | 🔗 |
| C | [BehaviorFireFromInfantryCover](/v1.3.15/zh/api/mission-ext/BehaviorFireFromInfantryCover) | 🔗 |
| C | [BehaviorFlank](/v1.3.15/zh/api/mission-ext/BehaviorFlank) | 🔗 |
| C | [BehaviorGeneral](/v1.3.15/zh/api/mission-ext/BehaviorGeneral) | 🔗 |
| C | [BehaviorHoldHighGround](/v1.3.15/zh/api/mission-ext/BehaviorHoldHighGround) | 🔗 |
| C | [BehaviorHorseArcherSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorHorseArcherSkirmish) | 🔗 |
| C | [BehaviorMountedSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorMountedSkirmish) | 🔗 |
| C | [BehaviorProtectFlank](/v1.3.15/zh/api/mission-ext/BehaviorProtectFlank) | 🔗 |
| C | [BehaviorProtectGeneral](/v1.3.15/zh/api/mission-ext/BehaviorProtectGeneral) | 🔗 |
| C | [BehaviorPullBack](/v1.3.15/zh/api/mission-ext/BehaviorPullBack) | 🔗 |
| C | [BehaviorRegroup](/v1.3.15/zh/api/mission-ext/BehaviorRegroup) | 🔗 |
| C | [BehaviorReserve](/v1.3.15/zh/api/mission-ext/BehaviorReserve) | 🔗 |
| C | [BehaviorRetakeCastleKeyPosition](/v1.3.15/zh/api/mission-ext/BehaviorRetakeCastleKeyPosition) | 🔗 |
| C | [BehaviorRetreat](/v1.3.15/zh/api/mission-ext/BehaviorRetreat) | 🔗 |
| C | [BehaviorRetreatToCastle](/v1.3.15/zh/api/mission-ext/BehaviorRetreatToCastle) | 🔗 |
| C | [BehaviorRetreatToKeep](/v1.3.15/zh/api/mission-ext/BehaviorRetreatToKeep) | 🔗 |
| C | [BehaviorSallyOut](/v1.3.15/zh/api/mission-ext/BehaviorSallyOut) | 🔗 |
| C | [BehaviorScreenedSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorScreenedSkirmish) | 🔗 |
| C | [BehaviorSergeantMPInfantry](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPInfantry) | 🔗 |
| C | [BehaviorSergeantMPLastFlagLastStand](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPLastFlagLastStand) | 🔗 |
| C | [BehaviorSergeantMPMounted](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPMounted) | 🔗 |
| C | [BehaviorSergeantMPMountedRanged](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPMountedRanged) | 🔗 |
| C | [BehaviorSergeantMPRanged](/v1.3.15/zh/api/mission-ext/BehaviorSergeantMPRanged) | 🔗 |
| C | [BehaviorShootFromCastleWalls](/v1.3.15/zh/api/mission-ext/BehaviorShootFromCastleWalls) | 🔗 |
| C | [BehaviorShootFromCliff](/v1.3.15/zh/api/mission-ext/BehaviorShootFromCliff) | 🔗 |
| C | [BehaviorShootFromSiegeTower](/v1.3.15/zh/api/mission-ext/BehaviorShootFromSiegeTower) | 🔗 |
| E | [BehaviorSide](/v1.3.15/zh/api/mission-ext/BehaviorSide) | 🔗 |
| C | [BehaviorSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorSkirmish) | 🔗 |
| C | [BehaviorSkirmishBehindFormation](/v1.3.15/zh/api/mission-ext/BehaviorSkirmishBehindFormation) | 🔗 |
| C | [BehaviorSkirmishLine](/v1.3.15/zh/api/mission-ext/BehaviorSkirmishLine) | 🔗 |
| C | [BehaviorSparseSkirmish](/v1.3.15/zh/api/mission-ext/BehaviorSparseSkirmish) | 🔗 |
| C | [BehaviorStop](/v1.3.15/zh/api/mission-ext/BehaviorStop) | 🔗 |
| C | [BehaviorTacticalCharge](/v1.3.15/zh/api/mission-ext/BehaviorTacticalCharge) | 🔗 |
| C | [BehaviorUseMurderHole](/v1.3.15/zh/api/mission-ext/BehaviorUseMurderHole) | 🔗 |
| C | [BehaviorUseSiegeMachines](/v1.3.15/zh/api/mission-ext/BehaviorUseSiegeMachines) | 🔗 |
| S | [BehaviorValues](/v1.3.15/zh/api/mission-ext/BehaviorValues) | 🔗 |
| E | [BehaviorValueSet](/v1.3.15/zh/api/mission-ext/BehaviorValueSet) | 🔗 |
| C | [BehaviorVanguard](/v1.3.15/zh/api/mission-ext/BehaviorVanguard) | 🔗 |
| C | [BehaviorWaitForLadders](/v1.3.15/zh/api/mission-ext/BehaviorWaitForLadders) | 🔗 |
| C | [Bird](/v1.3.15/zh/api/mission-ext/Bird) | 🔗 |
| S | [Blow](/v1.3.15/zh/api/mission-ext/Blow) | 🔗 |
| E | [BlowFlags](/v1.3.15/zh/api/mission-ext/BlowFlags) | 🔗 |
| S | [BlowWeaponRecord](/v1.3.15/zh/api/mission-ext/BlowWeaponRecord) | 🔗 |
| C | [BoardGameHotkeyCategory](/v1.3.15/zh/api/mission-ext/BoardGameHotkeyCategory) | 🔗 |
| C | [BodyGenerator](/v1.3.15/zh/api/mission-ext/BodyGenerator) | 🔗 |
| E | [BodyMeshTypes](/v1.3.15/zh/api/mission-ext/BodyMeshTypes) | 🔗 |
| E | [BoneBodyPartType](/v1.3.15/zh/api/mission-ext/BoneBodyPartType) | 🔗 |
| S | [BoneBodyTypeData](/v1.3.15/zh/api/mission-ext/BoneBodyTypeData) | 🔗 |
| C | [BotData](/v1.3.15/zh/api/mission-ext/BotData) | 🔗 |
| C | [BoundaryWallView](/v1.3.15/zh/api/mission-ext/BoundaryWallView) | 🔗 |
| E | [CachedBool](/v1.3.15/zh/api/mission-ext/CachedBool) | 🔗 |
| E | [CachedFloat](/v1.3.15/zh/api/mission-ext/CachedFloat) | 🔗 |
| C | [CameraDisplay](/v1.3.15/zh/api/mission-ext/CameraDisplay) | 🔗 |
| E | [CameraState](/v1.3.15/zh/api/mission-ext/CameraState) | 🔗 |
| C | [CaptureTheFlagCapturePoint](/v1.3.15/zh/api/mission-ext/CaptureTheFlagCapturePoint) | 🔗 |
| E | [CaptureTheFlagCaptureResultEnum](/v1.3.15/zh/api/mission-ext/CaptureTheFlagCaptureResultEnum) | 🔗 |
| E | [CaptureTheFlagFlagDirection](/v1.3.15/zh/api/mission-ext/CaptureTheFlagFlagDirection) | 🔗 |
| C | [CastleGate](/v1.3.15/zh/api/mission-ext/CastleGate) | 🔗 |
| C | [CastleGateAI](/v1.3.15/zh/api/mission-ext/CastleGateAI) | 🔗 |
| C | [CasualtyHandler](/v1.3.15/zh/api/mission-ext/CasualtyHandler) | 🔗 |
| C | [ChatBox](/v1.3.15/zh/api/mission-ext/ChatBox) | 🔗 |
| C | [ChatLogHotKeyCategory](/v1.3.15/zh/api/mission-ext/ChatLogHotKeyCategory) | 🔗 |
| E | [ChatType](/v1.3.15/zh/api/mission-ext/ChatType) | 🔗 |
| E | [CheerActionGroupEnum](/v1.3.15/zh/api/mission-ext/CheerActionGroupEnum) | 🔗 |
| S | [CheerReactionTimeSettings](/v1.3.15/zh/api/mission-ext/CheerReactionTimeSettings) | 🔗 |
| C | [CircularFormation](/v1.3.15/zh/api/mission-ext/CircularFormation) | 🔗 |
| C | [CircularSchiltronFormation](/v1.3.15/zh/api/mission-ext/CircularSchiltronFormation) | 🔗 |
| C | [ClanFriendListService](/v1.3.15/zh/api/mission-ext/ClanFriendListService) | 🔗 |
| C | [ClearHandInverseKinematicsOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/ClearHandInverseKinematicsOnStopUsageComponent) | 🔗 |
| C | [ClimbingMachineDetachment](/v1.3.15/zh/api/mission-ext/ClimbingMachineDetachment) | 🔗 |
| C | [ColumnFormation](/v1.3.15/zh/api/mission-ext/ColumnFormation) | 🔗 |
| E | [CombatCollisionResult](/v1.3.15/zh/api/mission-ext/CombatCollisionResult) | 🔗 |
| E | [CombatHitResultFlags](/v1.3.15/zh/api/mission-ext/CombatHitResultFlags) | 🔗 |
| C | [CombatHotKeyCategory](/v1.3.15/zh/api/mission-ext/CombatHotKeyCategory) | 🔗 |
| E | [CombatLogColor](/v1.3.15/zh/api/mission-ext/CombatLogColor) | 🔗 |
| S | [CombatLogData](/v1.3.15/zh/api/mission-ext/CombatLogData) | 🔗 |
| C | [CombatLogManager](/v1.3.15/zh/api/mission-ext/CombatLogManager) | 🔗 |
| C | [CombatSoundContainer](/v1.3.15/zh/api/mission-ext/CombatSoundContainer) | 🔗 |
| E | [CombatVoiceNetworkPredictionType](/v1.3.15/zh/api/mission-ext/CombatVoiceNetworkPredictionType) | 🔗 |
| C | [CommonAIComponent](/v1.3.15/zh/api/mission-ext/CommonAIComponent) | 🔗 |
| C | [CommunityClient](/v1.3.15/zh/api/mission-ext/CommunityClient) | 🔗 |
| C | [CommunityGameJoinData](/v1.3.15/zh/api/mission-ext/CommunityGameJoinData) | 🔗 |
| S | [CompassItemUpdateParams](/v1.3.15/zh/api/mission-ext/CompassItemUpdateParams) | 🔗 |
| C | [CompassMarker](/v1.3.15/zh/api/mission-ext/CompassMarker) | 🔗 |
| C | [CompressionBasic](/v1.3.15/zh/api/mission-ext/CompressionBasic) | 🔗 |
| C | [CompressionInfo](/v1.3.15/zh/api/mission-ext/CompressionInfo) | 🔗 |
| C | [CompressionMatchmaker](/v1.3.15/zh/api/mission-ext/CompressionMatchmaker) | 🔗 |
| C | [CompressionMission](/v1.3.15/zh/api/mission-ext/CompressionMission) | 🔗 |
| C | [ConditionalEffectContainer](/v1.3.15/zh/api/mission-ext/ConditionalEffectContainer) | 🔗 |
| C | [ConsoleCommandMethod](/v1.3.15/zh/api/mission-ext/ConsoleCommandMethod) | 🔗 |
| C | [ConsolesModuleExtension](/v1.3.15/zh/api/mission-ext/ConsolesModuleExtension) | 🔗 |
| C | [ConversationHotKeyCategory](/v1.3.15/zh/api/mission-ext/ConversationHotKeyCategory) | 🔗 |
| C | [CoreManaged](/v1.3.15/zh/api/mission-ext/CoreManaged) | 🔗 |
| S | [CorpseAgentInfo](./mission-ext/CorpseAgentInfo) | 🔗 |
| C | [CosmeticsManagerHelper](/v1.3.15/zh/api/mission-ext/CosmeticsManagerHelper) | 🔗 |
| C | [CraftingHotkeyCategory](/v1.3.15/zh/api/mission-ext/CraftingHotkeyCategory) | 🔗 |
| E | [CreationType](/v1.3.15/zh/api/mission-ext/CreationType) | 🔗 |
| E | [CrushThroughState](/v1.3.15/zh/api/mission-ext/CrushThroughState) | 🔗 |
| E | [CultureVoteTypes](/v1.3.15/zh/api/mission-ext/CultureVoteTypes) | 🔗 |
| C | [CustomAgentApplyDamageModel](/v1.3.15/zh/api/mission-ext/CustomAgentApplyDamageModel) | 🔗 |
| C | [CustomBattleAgentLogic](/v1.3.15/zh/api/mission-ext/CustomBattleAgentLogic) | 🔗 |
| C | [CustomBattleAgentOrigin](/v1.3.15/zh/api/mission-ext/CustomBattleAgentOrigin) | 🔗 |
| C | [CustomBattleAgentStatCalculateModel](/v1.3.15/zh/api/mission-ext/CustomBattleAgentStatCalculateModel) | 🔗 |
| C | [CustomBattleApplyWeatherEffectsModel](/v1.3.15/zh/api/mission-ext/CustomBattleApplyWeatherEffectsModel) | 🔗 |
| C | [CustomBattleAutoBlockModel](/v1.3.15/zh/api/mission-ext/CustomBattleAutoBlockModel) | 🔗 |
| C | [CustomBattleBannerBearersModel](/v1.3.15/zh/api/mission-ext/CustomBattleBannerBearersModel) | 🔗 |
| C | [CustomBattleCombatant](/v1.3.15/zh/api/mission-ext/CustomBattleCombatant) | 🔗 |
| C | [CustomBattleInitializationModel](/v1.3.15/zh/api/mission-ext/CustomBattleInitializationModel) | 🔗 |
| C | [CustomBattleMoraleModel](/v1.3.15/zh/api/mission-ext/CustomBattleMoraleModel) | 🔗 |
| C | [CustomBattleSpawnModel](/v1.3.15/zh/api/mission-ext/CustomBattleSpawnModel) | 🔗 |
| C | [CustomBattleTroopSupplier](/v1.3.15/zh/api/mission-ext/CustomBattleTroopSupplier) | 🔗 |
| C | [CustomGameBannedPlayerManager](/v1.3.15/zh/api/mission-ext/CustomGameBannedPlayerManager) | 🔗 |
| C | [CustomGameUsableMap](/v1.3.15/zh/api/mission-ext/CustomGameUsableMap) | 🔗 |
| C | [DamageParticleModel](/v1.3.15/zh/api/mission-ext/DamageParticleModel) | 🔗 |
| C | [DebugExtensions](/v1.3.15/zh/api/mission-ext/DebugExtensions) | 🔗 |
| S | [DebugNetworkPacketStatisticsStruct](/v1.3.15/zh/api/mission-ext/DebugNetworkPacketStatisticsStruct) | 🔗 |
| S | [DebugNetworkPositionCompressionStatisticsStruct](/v1.3.15/zh/api/mission-ext/DebugNetworkPositionCompressionStatisticsStruct) | 🔗 |
| C | [DebugSiegeBehavior](/v1.3.15/zh/api/mission-ext/DebugSiegeBehavior) | 🔗 |
| E | [DebugStateAttacker](/v1.3.15/zh/api/mission-ext/DebugStateAttacker) | 🔗 |
| E | [DebugStateDefender](/v1.3.15/zh/api/mission-ext/DebugStateDefender) | 🔗 |
| E | [DedicatedServerType](/v1.3.15/zh/api/mission-ext/DedicatedServerType) | 🔗 |
| C | [DefaultAgentDecideKilledOrUnconsciousModel](/v1.3.15/zh/api/mission-ext/DefaultAgentDecideKilledOrUnconsciousModel) | 🔗 |
| C | [DefaultDamageParticleModel](/v1.3.15/zh/api/mission-ext/DefaultDamageParticleModel) | 🔗 |
| C | [DefaultDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultDeploymentPlan) | 🔗 |
| C | [DefaultFormationArrangementModel](/v1.3.15/zh/api/mission-ext/DefaultFormationArrangementModel) | 🔗 |
| C | [DefaultFormationDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultFormationDeploymentPlan) | 🔗 |
| C | [DefaultItemPickupModel](/v1.3.15/zh/api/mission-ext/DefaultItemPickupModel) | 🔗 |
| C | [DefaultMissionDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultMissionDeploymentPlan) | 🔗 |
| C | [DefaultMissionDifficultyModel](/v1.3.15/zh/api/mission-ext/DefaultMissionDifficultyModel) | 🔗 |
| C | [DefaultStrikeMagnitudeModel](/v1.3.15/zh/api/mission-ext/DefaultStrikeMagnitudeModel) | 🔗 |
| C | [DefaultTacticalDecisionCodes](/v1.3.15/zh/api/mission-ext/DefaultTacticalDecisionCodes) | 🔗 |
| C | [DefaultTeamDeploymentPlan](/v1.3.15/zh/api/mission-ext/DefaultTeamDeploymentPlan) | 🔗 |
| C | [DefencePoint](/v1.3.15/zh/api/mission-ext/DefencePoint) | 🔗 |
| C | [DefineGameNetworkMessageTypeForMod](/v1.3.15/zh/api/mission-ext/DefineGameNetworkMessageTypeForMod) | 🔗 |
| C | [DefineSynchedMissionObjectTypeForMod](/v1.3.15/zh/api/mission-ext/DefineSynchedMissionObjectTypeForMod) | 🔗 |
| S | [DeformKeyData](/v1.3.15/zh/api/mission-ext/DeformKeyData) | 🔗 |
| C | [DeploymentHandler](/v1.3.15/zh/api/mission-ext/DeploymentHandler) | 🔗 |
| C | [DeploymentMissionController](/v1.3.15/zh/api/mission-ext/DeploymentMissionController) | 🔗 |
| C | [DeploymentOrderComparer](/v1.3.15/zh/api/mission-ext/DeploymentOrderComparer) | 🔗 |
| C | [DeploymentPoint](/v1.3.15/zh/api/mission-ext/DeploymentPoint) | 🔗 |
| E | [DeploymentPointState](/v1.3.15/zh/api/mission-ext/DeploymentPointState) | 🔗 |
| E | [DeploymentPointType](/v1.3.15/zh/api/mission-ext/DeploymentPointType) | 🔗 |
| C | [DestructableComponent](/v1.3.15/zh/api/mission-ext/DestructableComponent) | 🔗 |
| S | [DestructableComponentRecord](/v1.3.15/zh/api/mission-ext/DestructableComponentRecord) | 🔗 |
| C | [DestructableMissionObject](/v1.3.15/zh/api/mission-ext/DestructableMissionObject) | 🔗 |
| C | [DestructedPrefabInfoMissionObject](/v1.3.15/zh/api/mission-ext/DestructedPrefabInfoMissionObject) | 🔗 |
| C | [DetachmentData](/v1.3.15/zh/api/mission-ext/DetachmentData) | 🔗 |
| C | [DetachmentManager](/v1.3.15/zh/api/mission-ext/DetachmentManager) | 🔗 |
| C | [DividableTask](/v1.3.15/zh/api/mission-ext/DividableTask) | 🔗 |
| E | [DoorOwnership](/v1.3.15/zh/api/mission-ext/DoorOwnership) | 🔗 |
| C | [DuelZoneLandmark](/v1.3.15/zh/api/mission-ext/DuelZoneLandmark) | 🔗 |
| C | [DynamicallyCreatedEntity](/v1.3.15/zh/api/mission-ext/DynamicallyCreatedEntity) | 🔗 |
| C | [EditorGame](/v1.3.15/zh/api/mission-ext/EditorGame) | 🔗 |
| C | [EditorGameManager](/v1.3.15/zh/api/mission-ext/EditorGameManager) | 🔗 |
| C | [EditorState](/v1.3.15/zh/api/mission-ext/EditorState) | 🔗 |
| C | [EquipmentControllerLeaveLogic](/v1.3.15/zh/api/mission-ext/EquipmentControllerLeaveLogic) | 🔗 |
| E | [EventBroadcastFlags](/v1.3.15/zh/api/mission-ext/EventBroadcastFlags) | 🔗 |
| E | [EventControlFlag](/v1.3.15/zh/api/mission-ext/EventControlFlag) | 🔗 |
| C | [ExitDoor](/v1.3.15/zh/api/mission-ext/ExitDoor) | 🔗 |
| E | [ExitResult](/v1.3.15/zh/api/mission-ext/ExitResult) | 🔗 |
| C | FaceGen | — |
| S | [FaceGenerationParams](/v1.3.15/zh/api/mission-ext/FaceGenerationParams) | 🔗 |
| C | [FaceGenHotkeyCategory](/v1.3.15/zh/api/mission-ext/FaceGenHotkeyCategory) | 🔗 |
| E | [FacialAnimChannel](/v1.3.15/zh/api/mission-ext/FacialAnimChannel) | 🔗 |
| S | [FacingOrder](/v1.3.15/zh/api/mission-ext/FacingOrder) | 🔗 |
| E | [FacingOrderEnum](/v1.3.15/zh/api/mission-ext/FacingOrderEnum) | 🔗 |
| S | [FactoredNumber](/v1.3.15/zh/api/mission-ext/FactoredNumber) | 🔗 |
| C | [FFASpawnFrameBehavior](/v1.3.15/zh/api/mission-ext/FFASpawnFrameBehavior) | 🔗 |
| C | [FireBallista](/v1.3.15/zh/api/mission-ext/FireBallista) | 🔗 |
| C | [FireMangonel](/v1.3.15/zh/api/mission-ext/FireMangonel) | 🔗 |
| E | [FiringFocus](/v1.3.15/zh/api/mission-ext/FiringFocus) | 🔗 |
| S | [FiringOrder](/v1.3.15/zh/api/mission-ext/FiringOrder) | 🔗 |
| C | [FlagDominationSpawnFrameBehavior](/v1.3.15/zh/api/mission-ext/FlagDominationSpawnFrameBehavior) | 🔗 |
| C | [FlagDominationSpawningBehavior](/v1.3.15/zh/api/mission-ext/FlagDominationSpawningBehavior) | 🔗 |
| C | [FleePosition](/v1.3.15/zh/api/mission-ext/FleePosition) | 🔗 |
| S | [Float](/v1.3.15/zh/api/mission-ext/Float) | 🔗 |
| S | [FocusableObjectInformation](/v1.3.15/zh/api/mission-ext/FocusableObjectInformation) | 🔗 |
| E | [FocusableObjectType](/v1.3.15/zh/api/mission-ext/FocusableObjectType) | 🔗 |
| E | [ForceUseState](/v1.3.15/zh/api/mission-ext/ForceUseState) | 🔗 |
| C | Formation | — |
| C | [FormationAI](/v1.3.15/zh/api/mission-ext/FormationAI) | 🔗 |
| E | [FormationDeploymentFlank](/v1.3.15/zh/api/mission-ext/FormationDeploymentFlank) | 🔗 |
| S | [FormationDeploymentOrder](/v1.3.15/zh/api/mission-ext/FormationDeploymentOrder) | 🔗 |
| C | [FormationExtensions](/v1.3.15/zh/api/mission-ext/FormationExtensions) | 🔗 |
| S | [FormationIntegrityDataGroup](/v1.3.15/zh/api/mission-ext/FormationIntegrityDataGroup) | 🔗 |
| C | [FormationPocket](/v1.3.15/zh/api/mission-ext/FormationPocket) | 🔗 |
| C | [FormationQuerySystem](/v1.3.15/zh/api/mission-ext/FormationQuerySystem) | 🔗 |
| S | [FormationSceneSpawnEntry](/v1.3.15/zh/api/mission-ext/FormationSceneSpawnEntry) | 🔗 |
| S | [FormOrder](/v1.3.15/zh/api/mission-ext/FormOrder) | 🔗 |
| E | [FormOrderEnum](/v1.3.15/zh/api/mission-ext/FormOrderEnum) | 🔗 |
| C | [GameEntityExtensions](/v1.3.15/zh/api/mission-ext/GameEntityExtensions) | 🔗 |
| E | [GameKeyDefinition](/v1.3.15/zh/api/mission-ext/GameKeyDefinition) | 🔗 |
| C | [GameKeyMainCategories](/v1.3.15/zh/api/mission-ext/GameKeyMainCategories) | 🔗 |
| C | [GameKeyTextExtensions](/v1.3.15/zh/api/mission-ext/GameKeyTextExtensions) | 🔗 |
| C | [GameLoadingState](/v1.3.15/zh/api/mission-ext/GameLoadingState) | 🔗 |
| C | [GameNetwork](/v1.3.15/zh/api/mission-ext/GameNetwork) | 🔗 |
| E | [GameNetworkMessageSendType](/v1.3.15/zh/api/mission-ext/GameNetworkMessageSendType) | 🔗 |
| C | [GameStartupInfo](/v1.3.15/zh/api/mission-ext/GameStartupInfo) | 🔗 |
| E | [GameStartupType](/v1.3.15/zh/api/mission-ext/GameStartupType) | 🔗 |
| E | GameType | — |
| E | [GateState](/v1.3.15/zh/api/mission-ext/GateState) | 🔗 |
| C | [GeneralsAndCaptainsAssignmentLogic](/v1.3.15/zh/api/mission-ext/GeneralsAndCaptainsAssignmentLogic) | 🔗 |
| E | [GenerationType](/v1.3.15/zh/api/mission-ext/GenerationType) | 🔗 |
| C | [GenericCampaignPanelsGameKeyCategory](/v1.3.15/zh/api/mission-ext/GenericCampaignPanelsGameKeyCategory) | 🔗 |
| C | [GenericGameKeyContext](/v1.3.15/zh/api/mission-ext/GenericGameKeyContext) | 🔗 |
| C | [GenericPanelGameKeyCategory](/v1.3.15/zh/api/mission-ext/GenericPanelGameKeyCategory) | 🔗 |
| E | [GoldGainFlags](/v1.3.15/zh/api/mission-ext/GoldGainFlags) | 🔗 |
| E | [GuardMode](/v1.3.15/zh/api/mission-ext/GuardMode) | 🔗 |
| E | [HandIndex](/v1.3.15/zh/api/mission-ext/HandIndex) | 🔗 |
| C | [HideoutSpawnPointGroup](/v1.3.15/zh/api/mission-ext/HideoutSpawnPointGroup) | 🔗 |
| S | [Highlight](/v1.3.15/zh/api/mission-ext/Highlight) | 🔗 |
| C | [HighlightsController](/v1.3.15/zh/api/mission-ext/HighlightsController) | 🔗 |
| S | [HighlightType](/v1.3.15/zh/api/mission-ext/HighlightType) | 🔗 |
| S | [HitParticleResultData](/v1.3.15/zh/api/mission-ext/HitParticleResultData) | 🔗 |
| C | [Hitter](/v1.3.15/zh/api/mission-ext/Hitter) | 🔗 |
| C | [HumanAIComponent](/v1.3.15/zh/api/mission-ext/HumanAIComponent) | 🔗 |
| E | [HumanWalkingMovementMode](/v1.3.15/zh/api/mission-ext/HumanWalkingMovementMode) | 🔗 |
| I | [IAgentStateDecider](/v1.3.15/zh/api/mission-ext/IAgentStateDecider) | 🔗 |
| I | [IAgentVisual](/v1.3.15/zh/api/mission-ext/IAgentVisual) | 🔗 |
| I | [IAgentVisualCreator](/v1.3.15/zh/api/mission-ext/IAgentVisualCreator) | 🔗 |
| I | [IAnalyticsFlagInfo](/v1.3.15/zh/api/mission-ext/IAnalyticsFlagInfo) | 🔗 |
| I | [IBattleEndLogic](/v1.3.15/zh/api/mission-ext/IBattleEndLogic) | 🔗 |
| I | [IBattlePowerCalculationLogic](/v1.3.15/zh/api/mission-ext/IBattlePowerCalculationLogic) | 🔗 |
| I | [ICastleKeyPosition](/v1.3.15/zh/api/mission-ext/ICastleKeyPosition) | 🔗 |
| I | [ICommanderInfo](/v1.3.15/zh/api/mission-ext/ICommanderInfo) | 🔗 |
| I | [ICommunityClientHandler](/v1.3.15/zh/api/mission-ext/ICommunityClientHandler) | 🔗 |
| I | [ICustomReinforcementSpawnTimer](/v1.3.15/zh/api/mission-ext/ICustomReinforcementSpawnTimer) | 🔗 |
| I | [IDetachment](/v1.3.15/zh/api/mission-ext/IDetachment) | 🔗 |
| I | [IEditorMissionTester](/v1.3.15/zh/api/mission-ext/IEditorMissionTester) | 🔗 |
| I | [IEntityFactory](./mission-ext/IEntityFactory) | 🔗 |
| I | [IFaceGeneratorHandler](/v1.3.15/zh/api/mission-ext/IFaceGeneratorHandler) | 🔗 |
| I | [IFlagRemoved](/v1.3.15/zh/api/mission-ext/IFlagRemoved) | 🔗 |
| I | [IFocusable](/v1.3.15/zh/api/mission-ext/IFocusable) | 🔗 |
| I | [IFormation](/v1.3.15/zh/api/mission-ext/IFormation) | 🔗 |
| I | [IFormationArrangement](/v1.3.15/zh/api/mission-ext/IFormationArrangement) | 🔗 |
| I | [IFormationDeploymentPlan](/v1.3.15/zh/api/mission-ext/IFormationDeploymentPlan) | 🔗 |
| I | [IFormationUnit](/v1.3.15/zh/api/mission-ext/IFormationUnit) | 🔗 |
| I | [IGameNetworkHandler](/v1.3.15/zh/api/mission-ext/IGameNetworkHandler) | 🔗 |
| I | [IMissionAgentSpawnLogic](/v1.3.15/zh/api/mission-ext/IMissionAgentSpawnLogic) | 🔗 |
| I | [IMissionBehavior](/v1.3.15/zh/api/mission-ext/IMissionBehavior) | 🔗 |
| I | [IMissionDeploymentPlan](/v1.3.15/zh/api/mission-ext/IMissionDeploymentPlan) | 🔗 |
| I | [IMissionListener](/v1.3.15/zh/api/mission-ext/IMissionListener) | 🔗 |
| I | [IMissionSystemHandler](/v1.3.15/zh/api/mission-ext/IMissionSystemHandler) | 🔗 |
| I | [IMoveableSiegeWeapon](/v1.3.15/zh/api/mission-ext/IMoveableSiegeWeapon) | 🔗 |
| S | [ImpactSoundModifier](/v1.3.15/zh/api/mission-ext/ImpactSoundModifier) | 🔗 |
| I | [IMusicHandler](/v1.3.15/zh/api/mission-ext/IMusicHandler) | 🔗 |
| C | [IncrementalTimer](/v1.3.15/zh/api/mission-ext/IncrementalTimer) | 🔗 |
| E | [InitialSpawnMethod](/v1.3.15/zh/api/mission-ext/InitialSpawnMethod) | 🔗 |
| C | [InitialState](/v1.3.15/zh/api/mission-ext/InitialState) | 🔗 |
| C | [InitialStateOption](/v1.3.15/zh/api/mission-ext/InitialStateOption) | 🔗 |
| S | [Integer](/v1.3.15/zh/api/mission-ext/Integer) | 🔗 |
| C | [IntermissionVoteItem](/v1.3.15/zh/api/mission-ext/IntermissionVoteItem) | 🔗 |
| C | [IntermissionVoteItemListExtensions](/v1.3.15/zh/api/mission-ext/IntermissionVoteItemListExtensions) | 🔗 |
| C | [InventoryHotKeyCategory](/v1.3.15/zh/api/mission-ext/InventoryHotKeyCategory) | 🔗 |
| I | [IOnSpawnPerkEffect](/v1.3.15/zh/api/mission-ext/IOnSpawnPerkEffect) | 🔗 |
| I | [IOrderable](/v1.3.15/zh/api/mission-ext/IOrderable) | 🔗 |
| I | [IOrderableWithInteractionArea](/v1.3.15/zh/api/mission-ext/IOrderableWithInteractionArea) | 🔗 |
| I | [IPathHolder](/v1.3.15/zh/api/mission-ext/IPathHolder) | 🔗 |
| I | [IPlayerInputEffector](/v1.3.15/zh/api/mission-ext/IPlayerInputEffector) | 🔗 |
| I | [IPointDefendable](/v1.3.15/zh/api/mission-ext/IPointDefendable) | 🔗 |
| I | [IPrimarySiegeWeapon](/v1.3.15/zh/api/mission-ext/IPrimarySiegeWeapon) | 🔗 |
| I | [IQueryData](/v1.3.15/zh/api/mission-ext/IQueryData) | 🔗 |
| I | [IReadOnlyPerkObject](/v1.3.15/zh/api/mission-ext/IReadOnlyPerkObject) | 🔗 |
| I | [IRoundComponent](/v1.3.15/zh/api/mission-ext/IRoundComponent) | 🔗 |
| I | [IScoreboardData](/v1.3.15/zh/api/mission-ext/IScoreboardData) | 🔗 |
| I | [ISynchedMissionObjectReadableRecord](/v1.3.15/zh/api/mission-ext/ISynchedMissionObjectReadableRecord) | 🔗 |
| I | [ITargetable](/v1.3.15/zh/api/mission-ext/ITargetable) | 🔗 |
| C | [ItemCollectionElementMissionExtensions](/v1.3.15/zh/api/mission-ext/ItemCollectionElementMissionExtensions) | 🔗 |
| C | [ItemPhysicsSoundContainer](/v1.3.15/zh/api/mission-ext/ItemPhysicsSoundContainer) | 🔗 |
| I | [IUdpNetworkHandler](/v1.3.15/zh/api/mission-ext/IUdpNetworkHandler) | 🔗 |
| I | [IUsable](/v1.3.15/zh/api/mission-ext/IUsable) | 🔗 |
| I | [IVehicleHandler](/v1.3.15/zh/api/mission-ext/IVehicleHandler) | 🔗 |
| I | [IVisible](/v1.3.15/zh/api/mission-ext/IVisible) | 🔗 |
| E | [KillInfo](/v1.3.15/zh/api/mission-ext/KillInfo) | 🔗 |
| S | [KillingBlow](/v1.3.15/zh/api/mission-ext/KillingBlow) | 🔗 |
| E | [LadderAnimationState](/v1.3.15/zh/api/mission-ext/LadderAnimationState) | 🔗 |
| C | [LadderQueueManager](/v1.3.15/zh/api/mission-ext/LadderQueueManager) | 🔗 |
| E | [LadderState](/v1.3.15/zh/api/mission-ext/LadderState) | 🔗 |
| E | [LaneDefenseStates](/v1.3.15/zh/api/mission-ext/LaneDefenseStates) | 🔗 |
| E | [LaneStateEnum](/v1.3.15/zh/api/mission-ext/LaneStateEnum) | 🔗 |
| C | [LightCycle](/v1.3.15/zh/api/mission-ext/LightCycle) | 🔗 |
| C | [Lightning](/v1.3.15/zh/api/mission-ext/Lightning) | 🔗 |
| C | [LineFormation](/v1.3.15/zh/api/mission-ext/LineFormation) | 🔗 |
| E | [LobbyMissionType](/v1.3.15/zh/api/mission-ext/LobbyMissionType) | 🔗 |
| C | [LobbyNetworkComponent](/v1.3.15/zh/api/mission-ext/LobbyNetworkComponent) | 🔗 |
| S | [LongInteger](/v1.3.15/zh/api/mission-ext/LongInteger) | 🔗 |
| C | [ManagedOptions](/v1.3.15/zh/api/mission-ext/ManagedOptions) | 🔗 |
| E | [ManagedOptionsType](/v1.3.15/zh/api/mission-ext/ManagedOptionsType) | 🔗 |
| C | [Mangonel](/v1.3.15/zh/api/mission-ext/Mangonel) | 🔗 |
| C | [MangonelAI](/v1.3.15/zh/api/mission-ext/MangonelAI) | 🔗 |
| C | [MapAtmosphereProbe](/v1.3.15/zh/api/mission-ext/MapAtmosphereProbe) | 🔗 |
| C | [MapHotKeyCategory](/v1.3.15/zh/api/mission-ext/MapHotKeyCategory) | 🔗 |
| C | [MapNotificationHotKeyCategory](/v1.3.15/zh/api/mission-ext/MapNotificationHotKeyCategory) | 🔗 |
| C | [Markable](/v1.3.15/zh/api/mission-ext/Markable) | 🔗 |
| S | [MBActionSet](/v1.3.15/zh/api/mission-ext/MBActionSet) | 🔗 |
| C | [MBAgentRendererSceneController](/v1.3.15/zh/api/mission-ext/MBAgentRendererSceneController) | 🔗 |
| C | [MBAgentVisuals](/v1.3.15/zh/api/mission-ext/MBAgentVisuals) | 🔗 |
| S | [MBAnimation](/v1.3.15/zh/api/mission-ext/MBAnimation) | 🔗 |
| C | [MBAPI](/v1.3.15/zh/api/mission-ext/MBAPI) | 🔗 |
| C | [MBBodyProperties](/v1.3.15/zh/api/mission-ext/MBBodyProperties) | 🔗 |
| C | [MBBoundaryCollection](/v1.3.15/zh/api/mission-ext/MBBoundaryCollection) | 🔗 |
| C | [MBCallback](/v1.3.15/zh/api/mission-ext/MBCallback) | 🔗 |
| C | MBCommon | — |
| C | [MBDebugManager](/v1.3.15/zh/api/mission-ext/MBDebugManager) | 🔗 |
| C | [MBEditor](/v1.3.15/zh/api/mission-ext/MBEditor) | 🔗 |
| C | [MBEquipmentMissionExtensions](/v1.3.15/zh/api/mission-ext/MBEquipmentMissionExtensions) | 🔗 |
| C | [MBExtensions](/v1.3.15/zh/api/mission-ext/MBExtensions) | 🔗 |
| C | [MBGameManager](/v1.3.15/zh/api/mission-ext/MBGameManager) | 🔗 |
| C | [MBGlobals](/v1.3.15/zh/api/mission-ext/MBGlobals) | 🔗 |
| C | [MBInitialScreenBase](/v1.3.15/zh/api/mission-ext/MBInitialScreenBase) | 🔗 |
| C | [MBItem](/v1.3.15/zh/api/mission-ext/MBItem) | 🔗 |
| C | [MBMapScene](/v1.3.15/zh/api/mission-ext/MBMapScene) | 🔗 |
| C | [MBMissile](/v1.3.15/zh/api/mission-ext/MBMissile) | 🔗 |
| C | [MBMultiplayerData](/v1.3.15/zh/api/mission-ext/MBMultiplayerData) | 🔗 |
| C | [MBMusicManager](/v1.3.15/zh/api/mission-ext/MBMusicManager) | 🔗 |
| S | [MBMusicTrack](/v1.3.15/zh/api/mission-ext/MBMusicTrack) | 🔗 |
| S | [MBParticleSystem](/v1.3.15/zh/api/mission-ext/MBParticleSystem) | 🔗 |
| C | [MBProfileSelectionScreenBase](/v1.3.15/zh/api/mission-ext/MBProfileSelectionScreenBase) | 🔗 |
| C | [MBSceneUtilities](/v1.3.15/zh/api/mission-ext/MBSceneUtilities) | 🔗 |
| C | [MBSkeletonExtensions](/v1.3.15/zh/api/mission-ext/MBSkeletonExtensions) | 🔗 |
| C | [MBSoundEvent](/v1.3.15/zh/api/mission-ext/MBSoundEvent) | 🔗 |
| S | [MBSoundTrack](/v1.3.15/zh/api/mission-ext/MBSoundTrack) | 🔗 |
| C | [MBSubModuleBase](./core/MBSubModuleBase) | 🔗 |
| S | [MBTeam](/v1.3.15/zh/api/mission-ext/MBTeam) | 🔗 |
| C | [MBTestRun](/v1.3.15/zh/api/mission-ext/MBTestRun) | 🔗 |
| C | [MBUnusedResourceManager](/v1.3.15/zh/api/mission-ext/MBUnusedResourceManager) | 🔗 |
| C | [MBWindowManager](/v1.3.15/zh/api/mission-ext/MBWindowManager) | 🔗 |
| E | [MeleeCollisionReaction](/v1.3.15/zh/api/mission-ext/MeleeCollisionReaction) | 🔗 |
| C | [MessageManager](/v1.3.15/zh/api/mission-ext/MessageManager) | 🔗 |
| C | [MiscSoundContainer](/v1.3.15/zh/api/mission-ext/MiscSoundContainer) | 🔗 |
| C | [Missile](/v1.3.15/zh/api/mission-ext/Missile) | 🔗 |
| E | [MissileCollisionReaction](/v1.3.15/zh/api/mission-ext/MissileCollisionReaction) | 🔗 |
| C | [Mission](./mission/Mission) | 🔗 |
| C | [MissionAgentPanicHandler](/v1.3.15/zh/api/mission-ext/MissionAgentPanicHandler) | 🔗 |
| C | [MissionAgentSpawnLogic](/v1.3.15/zh/api/mission-ext/MissionAgentSpawnLogic) | 🔗 |
| C | [MissionBattleSchedulerClientComponent](/v1.3.15/zh/api/mission-ext/MissionBattleSchedulerClientComponent) | 🔗 |
| C | MissionBehavior | — |
| E | [MissionBehaviorType](/v1.3.15/zh/api/mission-ext/MissionBehaviorType) | 🔗 |
| C | [MissionBoundaryCrossingHandler](/v1.3.15/zh/api/mission-ext/MissionBoundaryCrossingHandler) | 🔗 |
| C | [MissionBoundaryPlacer](/v1.3.15/zh/api/mission-ext/MissionBoundaryPlacer) | 🔗 |
| C | [MissionCombatantsLogic](/v1.3.15/zh/api/mission-ext/MissionCombatantsLogic) | 🔗 |
| C | [MissionCombatMechanicsHelper](/v1.3.15/zh/api/mission-ext/MissionCombatMechanicsHelper) | 🔗 |
| E | [MissionCombatType](/v1.3.15/zh/api/mission-ext/MissionCombatType) | 🔗 |
| C | [MissionCommunityClientComponent](/v1.3.15/zh/api/mission-ext/MissionCommunityClientComponent) | 🔗 |
| C | [MissionCustomGameClientComponent](/v1.3.15/zh/api/mission-ext/MissionCustomGameClientComponent) | 🔗 |
| C | [MissionDeploymentPlanningLogic](/v1.3.15/zh/api/mission-ext/MissionDeploymentPlanningLogic) | 🔗 |
| C | [MissionEquipment](/v1.3.15/zh/api/mission-ext/MissionEquipment) | 🔗 |
| C | [MissionFocusableObjectInformationProvider](/v1.3.15/zh/api/mission-ext/MissionFocusableObjectInformationProvider) | 🔗 |
| C | [MissionGameModels](/v1.3.15/zh/api/mission-ext/MissionGameModels) | 🔗 |
| C | [MissionHardBorderPlacer](/v1.3.15/zh/api/mission-ext/MissionHardBorderPlacer) | 🔗 |
| C | [MissionInfo](/v1.3.15/zh/api/mission-ext/MissionInfo) | 🔗 |
| C | [MissionLobbyComponent](/v1.3.15/zh/api/mission-ext/MissionLobbyComponent) | 🔗 |
| C | [MissionLobbyEquipmentNetworkComponent](/v1.3.15/zh/api/mission-ext/MissionLobbyEquipmentNetworkComponent) | 🔗 |
| C | MissionLogic | — |
| C | [MissionManager](/v1.3.15/zh/api/mission-ext/MissionManager) | 🔗 |
| C | [MissionMethod](/v1.3.15/zh/api/mission-ext/MissionMethod) | 🔗 |
| C | [MissionMultiplayerDuel](/v1.3.15/zh/api/mission-ext/MissionMultiplayerDuel) | 🔗 |
| C | [MissionMultiplayerFlagDomination](/v1.3.15/zh/api/mission-ext/MissionMultiplayerFlagDomination) | 🔗 |
| C | [MissionMultiplayerGameModeBase](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeBase) | 🔗 |
| C | [MissionMultiplayerGameModeBaseClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeBaseClient) | 🔗 |
| C | [MissionMultiplayerGameModeDuelClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeDuelClient) | 🔗 |
| C | [MissionMultiplayerGameModeFlagDominationClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerGameModeFlagDominationClient) | 🔗 |
| C | [MissionMultiplayerSiege](/v1.3.15/zh/api/mission-ext/MissionMultiplayerSiege) | 🔗 |
| C | [MissionMultiplayerSiegeClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerSiegeClient) | 🔗 |
| C | [MissionMultiplayerTeamDeathmatch](/v1.3.15/zh/api/mission-ext/MissionMultiplayerTeamDeathmatch) | 🔗 |
| C | [MissionMultiplayerTeamDeathmatchClient](/v1.3.15/zh/api/mission-ext/MissionMultiplayerTeamDeathmatchClient) | 🔗 |
| C | [MissionNetwork](/v1.3.15/zh/api/mission-ext/MissionNetwork) | 🔗 |
| C | [MissionNetworkComponent](/v1.3.15/zh/api/mission-ext/MissionNetworkComponent) | 🔗 |
| C | [MissionNetworkHelper](/v1.3.15/zh/api/mission-ext/MissionNetworkHelper) | 🔗 |
| C | [MissionObject](/v1.3.15/zh/api/mission-ext/MissionObject) | 🔗 |
| S | [MissionObjectId](/v1.3.15/zh/api/mission-ext/MissionObjectId) | 🔗 |
| C | [MissionOrderHotkeyCategory](/v1.3.15/zh/api/mission-ext/MissionOrderHotkeyCategory) | 🔗 |
| C | [MissionPeer](/v1.3.15/zh/api/mission-ext/MissionPeer) | 🔗 |
| C | [MissionQuestConversationHandler](/v1.3.15/zh/api/mission-ext/MissionQuestConversationHandler) | 🔗 |
| C | [MissionRecorder](/v1.3.15/zh/api/mission-ext/MissionRecorder) | 🔗 |
| C | [MissionReinforcementsHelper](/v1.3.15/zh/api/mission-ext/MissionReinforcementsHelper) | 🔗 |
| C | [MissionRepresentativeBase](/v1.3.15/zh/api/mission-ext/MissionRepresentativeBase) | 🔗 |
| C | [MissionScoreboardComponent](/v1.3.15/zh/api/mission-ext/MissionScoreboardComponent) | 🔗 |
| C | [MissionScoreboardSide](/v1.3.15/zh/api/mission-ext/MissionScoreboardSide) | 🔗 |
| C | [MissionSiegeEnginesLogic](/v1.3.15/zh/api/mission-ext/MissionSiegeEnginesLogic) | 🔗 |
| S | [MissionSpawnSettings](/v1.3.15/zh/api/mission-ext/MissionSpawnSettings) | 🔗 |
| C | [MissionState](/v1.3.15/zh/api/mission-ext/MissionState) | 🔗 |
| E | [MissionTeamAITypeEnum](/v1.3.15/zh/api/mission-ext/MissionTeamAITypeEnum) | 🔗 |
| E | [MissionTickAction](/v1.3.15/zh/api/mission-ext/MissionTickAction) | 🔗 |
| S | [MissionTime](/v1.3.15/zh/api/mission-ext/MissionTime) | 🔗 |
| C | [MissionTimer](/v1.3.15/zh/api/mission-ext/MissionTimer) | 🔗 |
| C | [MissionTimeTracker](/v1.3.15/zh/api/mission-ext/MissionTimeTracker) | 🔗 |
| S | [MissionWeapon](/v1.3.15/zh/api/mission-ext/MissionWeapon) | 🔗 |
| C | [Module](./core/Module) | 🔗 |
| C | [ModuleExtensions](/v1.3.15/zh/api/mission-ext/ModuleExtensions) | 🔗 |
| C | [ModuleNetworkData](/v1.3.15/zh/api/mission-ext/ModuleNetworkData) | 🔗 |
| C | [MonsterExtensions](/v1.3.15/zh/api/mission-ext/MonsterExtensions) | 🔗 |
| C | [MonsterMissionData](/v1.3.15/zh/api/mission-ext/MonsterMissionData) | 🔗 |
| C | [MonsterMissionDataCreator](/v1.3.15/zh/api/mission-ext/MonsterMissionDataCreator) | 🔗 |
| E | [MortalityState](/v1.3.15/zh/api/mission-ext/MortalityState) | 🔗 |
| E | [MovementBehaviorType](/v1.3.15/zh/api/mission-ext/MovementBehaviorType) | 🔗 |
| E | [MovementControlFlag](/v1.3.15/zh/api/mission-ext/MovementControlFlag) | 🔗 |
| S | [MovementOrder](/v1.3.15/zh/api/mission-ext/MovementOrder) | 🔗 |
| E | [MovementOrderEnum](/v1.3.15/zh/api/mission-ext/MovementOrderEnum) | 🔗 |
| C | [MovementPath](/v1.3.15/zh/api/mission-ext/MovementPath) | 🔗 |
| E | [MovementStateEnum](/v1.3.15/zh/api/mission-ext/MovementStateEnum) | 🔗 |
| C | [Mover](/v1.3.15/zh/api/mission-ext/Mover) | 🔗 |
| C | [MPCombatPerkHandler](/v1.3.15/zh/api/mission-ext/MPCombatPerkHandler) | 🔗 |
| C | [MPConditionalEffect](/v1.3.15/zh/api/mission-ext/MPConditionalEffect) | 🔗 |
| C | [MPHeroClass](/v1.3.15/zh/api/mission-ext/MPHeroClass) | 🔗 |
| C | [MPHeroClassGroup](/v1.3.15/zh/api/mission-ext/MPHeroClassGroup) | 🔗 |
| C | [MPOnSpawnPerkEffect](/v1.3.15/zh/api/mission-ext/MPOnSpawnPerkEffect) | 🔗 |
| C | [MPOnSpawnPerkEffectBase](/v1.3.15/zh/api/mission-ext/MPOnSpawnPerkEffectBase) | 🔗 |
| C | [MPOnSpawnPerkHandler](/v1.3.15/zh/api/mission-ext/MPOnSpawnPerkHandler) | 🔗 |
| C | [MPPerkCondition](/v1.3.15/zh/api/mission-ext/MPPerkCondition) | 🔗 |
| C | [MPPerkEffect](/v1.3.15/zh/api/mission-ext/MPPerkEffect) | 🔗 |
| C | [MPPerkEffectBase](/v1.3.15/zh/api/mission-ext/MPPerkEffectBase) | 🔗 |
| C | [MPPerkHandler](/v1.3.15/zh/api/mission-ext/MPPerkHandler) | 🔗 |
| C | [MPPerkObject](/v1.3.15/zh/api/mission-ext/MPPerkObject) | 🔗 |
| C | [MPPerksAgentComponent](/v1.3.15/zh/api/mission-ext/MPPerksAgentComponent) | 🔗 |
| S | [MPPerkSelection](/v1.3.15/zh/api/mission-ext/MPPerkSelection) | 🔗 |
| C | [MPPerkSelectionManager](/v1.3.15/zh/api/mission-ext/MPPerkSelectionManager) | 🔗 |
| C | [MPRandomOnSpawnPerkEffect](/v1.3.15/zh/api/mission-ext/MPRandomOnSpawnPerkEffect) | 🔗 |
| C | [MultiplayerAgentApplyDamageModel](/v1.3.15/zh/api/mission-ext/MultiplayerAgentApplyDamageModel) | 🔗 |
| C | [MultiplayerAgentStatCalculateModel](/v1.3.15/zh/api/mission-ext/MultiplayerAgentStatCalculateModel) | 🔗 |
| C | [MultiplayerBattleBannerBearersModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleBannerBearersModel) | 🔗 |
| C | [MultiplayerBattleInitializationModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleInitializationModel) | 🔗 |
| C | [MultiplayerBattleMoraleModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleMoraleModel) | 🔗 |
| C | [MultiplayerBattleSpawnModel](/v1.3.15/zh/api/mission-ext/MultiplayerBattleSpawnModel) | 🔗 |
| C | [MultiplayerClassDivisions](/v1.3.15/zh/api/mission-ext/MultiplayerClassDivisions) | 🔗 |
| C | [MultiplayerGameMode](/v1.3.15/zh/api/mission-ext/MultiplayerGameMode) | 🔗 |
| C | [MultiplayerGameNotificationsComponent](/v1.3.15/zh/api/mission-ext/MultiplayerGameNotificationsComponent) | 🔗 |
| E | [MultiplayerGameState](/v1.3.15/zh/api/mission-ext/MultiplayerGameState) | 🔗 |
| E | [MultiplayerGameType](/v1.3.15/zh/api/mission-ext/MultiplayerGameType) | 🔗 |
| C | [MultiplayerGameTypeInfo](/v1.3.15/zh/api/mission-ext/MultiplayerGameTypeInfo) | 🔗 |
| C | [MultiplayerGameTypes](/v1.3.15/zh/api/mission-ext/MultiplayerGameTypes) | 🔗 |
| C | [MultiplayerGlobalMutedPlayersManager](/v1.3.15/zh/api/mission-ext/MultiplayerGlobalMutedPlayersManager) | 🔗 |
| C | [MultiplayerHotkeyCategory](/v1.3.15/zh/api/mission-ext/MultiplayerHotkeyCategory) | 🔗 |
| E | [MultiplayerIntermissionState](/v1.3.15/zh/api/mission-ext/MultiplayerIntermissionState) | 🔗 |
| C | [MultiplayerIntermissionVotingManager](/v1.3.15/zh/api/mission-ext/MultiplayerIntermissionVotingManager) | 🔗 |
| E | [MultiplayerMessageFilter](/v1.3.15/zh/api/mission-ext/MultiplayerMessageFilter) | 🔗 |
| C | [MultiplayerMissionAgentVisualSpawnComponent](/v1.3.15/zh/api/mission-ext/MultiplayerMissionAgentVisualSpawnComponent) | 🔗 |
| C | [MultiplayerOption](/v1.3.15/zh/api/mission-ext/MultiplayerOption) | 🔗 |
| C | [MultiplayerOptions](/v1.3.15/zh/api/mission-ext/MultiplayerOptions) | 🔗 |
| E | [MultiplayerOptionsAccessMode](/v1.3.15/zh/api/mission-ext/MultiplayerOptionsAccessMode) | 🔗 |
| C | [MultiplayerOptionsExtensions](/v1.3.15/zh/api/mission-ext/MultiplayerOptionsExtensions) | 🔗 |
| C | [MultiplayerOptionsProperty](/v1.3.15/zh/api/mission-ext/MultiplayerOptionsProperty) | 🔗 |
| C | [MultiplayerPollComponent](/v1.3.15/zh/api/mission-ext/MultiplayerPollComponent) | 🔗 |
| E | [MultiplayerPollRejectReason](/v1.3.15/zh/api/mission-ext/MultiplayerPollRejectReason) | 🔗 |
| C | [MultiplayerRoundComponent](/v1.3.15/zh/api/mission-ext/MultiplayerRoundComponent) | 🔗 |
| C | [MultiplayerRoundController](/v1.3.15/zh/api/mission-ext/MultiplayerRoundController) | 🔗 |
| E | [MultiplayerRoundState](/v1.3.15/zh/api/mission-ext/MultiplayerRoundState) | 🔗 |
| C | [MultiplayerSceneValidator](/v1.3.15/zh/api/mission-ext/MultiplayerSceneValidator) | 🔗 |
| C | [MultiplayerTeamSelectComponent](/v1.3.15/zh/api/mission-ext/MultiplayerTeamSelectComponent) | 🔗 |
| C | [MultiplayerTimerComponent](/v1.3.15/zh/api/mission-ext/MultiplayerTimerComponent) | 🔗 |
| C | [MultiplayerWarmupComponent](/v1.3.15/zh/api/mission-ext/MultiplayerWarmupComponent) | 🔗 |
| E | [MusicMode](/v1.3.15/zh/api/mission-ext/MusicMode) | 🔗 |
| C | [MusicParameters](/v1.3.15/zh/api/mission-ext/MusicParameters) | 🔗 |
| E | [MusicTheme](/v1.3.15/zh/api/mission-ext/MusicTheme) | 🔗 |
| S | [NavigationData](/v1.3.15/zh/api/mission-ext/NavigationData) | 🔗 |
| C | [NetworkCommunication](/v1.3.15/zh/api/mission-ext/NetworkCommunication) | 🔗 |
| C | [NetworkCommunicator](/v1.3.15/zh/api/mission-ext/NetworkCommunicator) | 🔗 |
| C | [NetworkMain](/v1.3.15/zh/api/mission-ext/NetworkMain) | 🔗 |
| C | [NetworkMessageHandlerRegisterer](/v1.3.15/zh/api/mission-ext/NetworkMessageHandlerRegisterer) | 🔗 |
| C | [NetworkMessageHandlerRegistererContainer](/v1.3.15/zh/api/mission-ext/NetworkMessageHandlerRegistererContainer) | 🔗 |
| C | [NotificationProperty](/v1.3.15/zh/api/mission-ext/NotificationProperty) | 🔗 |
| E | [OptionsCategory](/v1.3.15/zh/api/mission-ext/OptionsCategory) | 🔗 |
| E | [OptionType](/v1.3.15/zh/api/mission-ext/OptionType) | 🔗 |
| E | [OptionValueType](/v1.3.15/zh/api/mission-ext/OptionValueType) | 🔗 |
| C | [OrderComponent](/v1.3.15/zh/api/mission-ext/OrderComponent) | 🔗 |
| C | [OrderController](/v1.3.15/zh/api/mission-ext/OrderController) | 🔗 |
| C | [OrderOfBattleFormationExtensions](/v1.3.15/zh/api/mission-ext/OrderOfBattleFormationExtensions) | 🔗 |
| E | [OrderType](/v1.3.15/zh/api/mission-ext/OrderType) | 🔗 |
| C | [OverrideStrikeAndDeathActionDuringUsageComponent](/v1.3.15/zh/api/mission-ext/OverrideStrikeAndDeathActionDuringUsageComponent) | 🔗 |
| C | [PartyHotKeyCategory](/v1.3.15/zh/api/mission-ext/PartyHotKeyCategory) | 🔗 |
| C | [PathLastNodeFixer](/v1.3.15/zh/api/mission-ext/PathLastNodeFixer) | 🔗 |
| C | [PathTracker](/v1.3.15/zh/api/mission-ext/PathTracker) | 🔗 |
| C | [PeerExtensions](/v1.3.15/zh/api/mission-ext/PeerExtensions) | 🔗 |
| C | [PeerVisualsHolder](/v1.3.15/zh/api/mission-ext/PeerVisualsHolder) | 🔗 |
| E | [PerkEventFlags](/v1.3.15/zh/api/mission-ext/PerkEventFlags) | 🔗 |
| S | [Permission](/v1.3.15/zh/api/mission-ext/Permission) | 🔗 |
| E | [PermissionType](/v1.3.15/zh/api/mission-ext/PermissionType) | 🔗 |
| C | [PlayerConnectionInfo](/v1.3.15/zh/api/mission-ext/PlayerConnectionInfo) | 🔗 |
| C | [PollHotkeyCategory](/v1.3.15/zh/api/mission-ext/PollHotkeyCategory) | 🔗 |
| C | [ProfileSelectionState](/v1.3.15/zh/api/mission-ext/ProfileSelectionState) | 🔗 |
| S | [ProximityMapSearchStruct](/v1.3.15/zh/api/mission-ext/ProximityMapSearchStruct) | 🔗 |
| C | [QueryData](/v1.3.15/zh/api/mission-ext/QueryData) | 🔗 |
| C | [QueryLibrary](/v1.3.15/zh/api/mission-ext/QueryLibrary) | 🔗 |
| E | [RamState](/v1.3.15/zh/api/mission-ext/RamState) | 🔗 |
| C | [RandomParticleSpawner](/v1.3.15/zh/api/mission-ext/RandomParticleSpawner) | 🔗 |
| C | [RandomTimer](/v1.3.15/zh/api/mission-ext/RandomTimer) | 🔗 |
| C | [RangedSiegeWeapon](/v1.3.15/zh/api/mission-ext/RangedSiegeWeapon) | 🔗 |
| C | [RangedSiegeWeaponAi](/v1.3.15/zh/api/mission-ext/RangedSiegeWeaponAi) | 🔗 |
| S | [RangedSiegeWeaponRecord](/v1.3.15/zh/api/mission-ext/RangedSiegeWeaponRecord) | 🔗 |
| E | [RangedWeaponUsageOrderEnum](/v1.3.15/zh/api/mission-ext/RangedWeaponUsageOrderEnum) | 🔗 |
| C | [RecentPlayersFriendListService](/v1.3.15/zh/api/mission-ext/RecentPlayersFriendListService) | 🔗 |
| C | [RecordMissionLogic](/v1.3.15/zh/api/mission-ext/RecordMissionLogic) | 🔗 |
| C | [RectilinearSchiltronFormation](/v1.3.15/zh/api/mission-ext/RectilinearSchiltronFormation) | 🔗 |
| E | [RegisterMode](/v1.3.15/zh/api/mission-ext/RegisterMode) | 🔗 |
| C | [ReinforcementFormationData](/v1.3.15/zh/api/mission-ext/ReinforcementFormationData) | 🔗 |
| C | [ReinforcementFormationPreferenceComparer](/v1.3.15/zh/api/mission-ext/ReinforcementFormationPreferenceComparer) | 🔗 |
| E | [ReinforcementFormationPriority](/v1.3.15/zh/api/mission-ext/ReinforcementFormationPriority) | 🔗 |
| E | [ReinforcementSpawnMethod](/v1.3.15/zh/api/mission-ext/ReinforcementSpawnMethod) | 🔗 |
| E | [ReinforcementTimingMethod](/v1.3.15/zh/api/mission-ext/ReinforcementTimingMethod) | 🔗 |
| C | [ReplayMissionLogic](/v1.3.15/zh/api/mission-ext/ReplayMissionLogic) | 🔗 |
| E | [ReplicationOccurrence](/v1.3.15/zh/api/mission-ext/ReplicationOccurrence) | 🔗 |
| C | [ResetAnimationOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/ResetAnimationOnStopUsageComponent) | 🔗 |
| C | [ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/ResetGravityExclusionAndEntityAttachmentOnStopUsageComponent) | 🔗 |
| C | [RestrictedAccess](/v1.3.15/zh/api/mission-ext/RestrictedAccess) | 🔗 |
| C | [RetreatPositionCacheSystem](/v1.3.15/zh/api/mission-ext/RetreatPositionCacheSystem) | 🔗 |
| S | [RidingOrder](/v1.3.15/zh/api/mission-ext/RidingOrder) | 🔗 |
| E | [RidingOrderEnum](/v1.3.15/zh/api/mission-ext/RidingOrderEnum) | 🔗 |
| C | [RoadPoint](/v1.3.15/zh/api/mission-ext/RoadPoint) | 🔗 |
| C | [RoadStart](/v1.3.15/zh/api/mission-ext/RoadStart) | 🔗 |
| E | [RoundEndReason](/v1.3.15/zh/api/mission-ext/RoundEndReason) | 🔗 |
| C | [RoundStateExtensions](/v1.3.15/zh/api/mission-ext/RoundStateExtensions) | 🔗 |
| C | [SallyOutEndLogic](/v1.3.15/zh/api/mission-ext/SallyOutEndLogic) | 🔗 |
| C | [SallyOutMissionController](/v1.3.15/zh/api/mission-ext/SallyOutMissionController) | 🔗 |
| C | [SallyOutMissionNotificationsHandler](/v1.3.15/zh/api/mission-ext/SallyOutMissionNotificationsHandler) | 🔗 |
| C | [SallyOutReinforcementSpawnTimer](/v1.3.15/zh/api/mission-ext/SallyOutReinforcementSpawnTimer) | 🔗 |
| C | [ScenePropDecal](/v1.3.15/zh/api/mission-ext/ScenePropDecal) | 🔗 |
| C | [ScenePropNegativeLight](/v1.3.15/zh/api/mission-ext/ScenePropNegativeLight) | 🔗 |
| C | [ScenePropPositiveLight](/v1.3.15/zh/api/mission-ext/ScenePropPositiveLight) | 🔗 |
| S | [ScoreboardHeader](/v1.3.15/zh/api/mission-ext/ScoreboardHeader) | 🔗 |
| C | [ScoreboardHotKeyCategory](/v1.3.15/zh/api/mission-ext/ScoreboardHotKeyCategory) | 🔗 |
| E | [Side](/v1.3.15/zh/api/mission-ext/Side) | 🔗 |
| C | [SiegeDeploymentMissionController](/v1.3.15/zh/api/mission-ext/SiegeDeploymentMissionController) | 🔗 |
| C | [SiegeLadder](/v1.3.15/zh/api/mission-ext/SiegeLadder) | 🔗 |
| C | [SiegeLadderAI](/v1.3.15/zh/api/mission-ext/SiegeLadderAI) | 🔗 |
| S | [SiegeLadderRecord](/v1.3.15/zh/api/mission-ext/SiegeLadderRecord) | 🔗 |
| C | [SiegeLane](/v1.3.15/zh/api/mission-ext/SiegeLane) | 🔗 |
| C | [SiegeMissionPreparationHandler](/v1.3.15/zh/api/mission-ext/SiegeMissionPreparationHandler) | 🔗 |
| C | [SiegeQuerySystem](/v1.3.15/zh/api/mission-ext/SiegeQuerySystem) | 🔗 |
| C | [SiegeSpawnFrameBehavior](/v1.3.15/zh/api/mission-ext/SiegeSpawnFrameBehavior) | 🔗 |
| C | [SiegeSpawningBehavior](/v1.3.15/zh/api/mission-ext/SiegeSpawningBehavior) | 🔗 |
| C | [SiegeTower](/v1.3.15/zh/api/mission-ext/SiegeTower) | 🔗 |
| C | [SiegeTowerAI](/v1.3.15/zh/api/mission-ext/SiegeTowerAI) | 🔗 |
| S | [SiegeTowerRecord](/v1.3.15/zh/api/mission-ext/SiegeTowerRecord) | 🔗 |
| C | [SiegeWeapon](/v1.3.15/zh/api/mission-ext/SiegeWeapon) | 🔗 |
| C | [SiegeWeaponController](/v1.3.15/zh/api/mission-ext/SiegeWeaponController) | 🔗 |
| C | [SiegeWeaponMovementComponent](/v1.3.15/zh/api/mission-ext/SiegeWeaponMovementComponent) | 🔗 |
| E | [SiegeWeaponOrderType](/v1.3.15/zh/api/mission-ext/SiegeWeaponOrderType) | 🔗 |
| C | [SkeinFormation](/v1.3.15/zh/api/mission-ext/SkeinFormation) | 🔗 |
| E | [SkeletonModelBoundsRecFlags](/v1.3.15/zh/api/mission-ext/SkeletonModelBoundsRecFlags) | 🔗 |
| E | [SkeletonType](/v1.3.15/zh/api/mission-ext/SkeletonType) | 🔗 |
| S | [SkinGenerationParams](/v1.3.15/zh/api/mission-ext/SkinGenerationParams) | 🔗 |
| C | [SkinVoiceManager](/v1.3.15/zh/api/mission-ext/SkinVoiceManager) | 🔗 |
| S | [SkinVoiceType](/v1.3.15/zh/api/mission-ext/SkinVoiceType) | 🔗 |
| E | [SnapMethod](/v1.3.15/zh/api/mission-ext/SnapMethod) | 🔗 |
| C | [SoundPlayer](/v1.3.15/zh/api/mission-ext/SoundPlayer) | 🔗 |
| C | [SpawnComponent](/v1.3.15/zh/api/mission-ext/SpawnComponent) | 🔗 |
| C | [SpawnedItemEntity](/v1.3.15/zh/api/mission-ext/SpawnedItemEntity) | 🔗 |
| C | [SpawnerEntityEditorHelper](/v1.3.15/zh/api/mission-ext/SpawnerEntityEditorHelper) | 🔗 |
| C | [SpawnerEntityMissionHelper](/v1.3.15/zh/api/mission-ext/SpawnerEntityMissionHelper) | 🔗 |
| C | [SpawnFrameBehaviorBase](/v1.3.15/zh/api/mission-ext/SpawnFrameBehaviorBase) | 🔗 |
| C | [SpawningBehaviorBase](/v1.3.15/zh/api/mission-ext/SpawningBehaviorBase) | 🔗 |
| S | [SpawnPathData](/v1.3.15/zh/api/mission-ext/SpawnPathData) | 🔗 |
| S | [SpectatorData](/v1.3.15/zh/api/mission-ext/SpectatorData) | 🔗 |
| C | [SquareFormation](/v1.3.15/zh/api/mission-ext/SquareFormation) | 🔗 |
| S | [StackArray8Agent](/v1.3.15/zh/api/mission-ext/StackArray8Agent) | 🔗 |
| S | [StackArray8StandingPoint](/v1.3.15/zh/api/mission-ext/StackArray8StandingPoint) | 🔗 |
| S | [StackArray8ThrowingPoint](/v1.3.15/zh/api/mission-ext/StackArray8ThrowingPoint) | 🔗 |
| C | [StandingPoint](/v1.3.15/zh/api/mission-ext/StandingPoint) | 🔗 |
| C | [StandingPointForRangedArea](/v1.3.15/zh/api/mission-ext/StandingPointForRangedArea) | 🔗 |
| C | [StandingPointWithAgentLimit](/v1.3.15/zh/api/mission-ext/StandingPointWithAgentLimit) | 🔗 |
| C | [StandingPointWithTeamLimit](/v1.3.15/zh/api/mission-ext/StandingPointWithTeamLimit) | 🔗 |
| C | [StandingPointWithVolumeBox](/v1.3.15/zh/api/mission-ext/StandingPointWithVolumeBox) | 🔗 |
| C | [StandingPointWithWeaponRequirement](/v1.3.15/zh/api/mission-ext/StandingPointWithWeaponRequirement) | 🔗 |
| E | State | — |
| C | [StonePile](/v1.3.15/zh/api/mission-ext/StonePile) | 🔗 |
| C | [StonePileAI](/v1.3.15/zh/api/mission-ext/StonePileAI) | 🔗 |
| S | [StonePileRecord](/v1.3.15/zh/api/mission-ext/StonePileRecord) | 🔗 |
| E | [StopUsingGameObjectFlags](/v1.3.15/zh/api/mission-ext/StopUsingGameObjectFlags) | 🔗 |
| C | [StrategicArea](/v1.3.15/zh/api/mission-ext/StrategicArea) | 🔗 |
| C | [SynchedMissionObject](/v1.3.15/zh/api/mission-ext/SynchedMissionObject) | 🔗 |
| E | [SynchFlags](/v1.3.15/zh/api/mission-ext/SynchFlags) | 🔗 |
| S | [TacticalDecision](/v1.3.15/zh/api/mission-ext/TacticalDecision) | 🔗 |
| C | [TacticalPosition](/v1.3.15/zh/api/mission-ext/TacticalPosition) | 🔗 |
| E | [TacticalPositionTypeEnum](/v1.3.15/zh/api/mission-ext/TacticalPositionTypeEnum) | 🔗 |
| C | [TacticalRegion](/v1.3.15/zh/api/mission-ext/TacticalRegion) | 🔗 |
| E | [TacticalRegionTypeEnum](/v1.3.15/zh/api/mission-ext/TacticalRegionTypeEnum) | 🔗 |
| C | [TacticBreachWalls](/v1.3.15/zh/api/mission-ext/TacticBreachWalls) | 🔗 |
| C | [TacticCharge](/v1.3.15/zh/api/mission-ext/TacticCharge) | 🔗 |
| C | [TacticComponent](/v1.3.15/zh/api/mission-ext/TacticComponent) | 🔗 |
| C | [TacticCoordinatedRetreat](/v1.3.15/zh/api/mission-ext/TacticCoordinatedRetreat) | 🔗 |
| C | [TacticDefendCastle](/v1.3.15/zh/api/mission-ext/TacticDefendCastle) | 🔗 |
| C | [TacticDefensiveEngagement](/v1.3.15/zh/api/mission-ext/TacticDefensiveEngagement) | 🔗 |
| C | [TacticDefensiveLine](/v1.3.15/zh/api/mission-ext/TacticDefensiveLine) | 🔗 |
| C | [TacticDefensiveRing](/v1.3.15/zh/api/mission-ext/TacticDefensiveRing) | 🔗 |
| C | [TacticFrontalCavalryCharge](/v1.3.15/zh/api/mission-ext/TacticFrontalCavalryCharge) | 🔗 |
| C | [TacticFullScaleAttack](/v1.3.15/zh/api/mission-ext/TacticFullScaleAttack) | 🔗 |
| C | [TacticHoldChokePoint](/v1.3.15/zh/api/mission-ext/TacticHoldChokePoint) | 🔗 |
| C | [TacticPerimeterDefense](/v1.3.15/zh/api/mission-ext/TacticPerimeterDefense) | 🔗 |
| C | [TacticRangedHarrassmentOffensive](/v1.3.15/zh/api/mission-ext/TacticRangedHarrassmentOffensive) | 🔗 |
| C | [TacticSallyOutDefense](/v1.3.15/zh/api/mission-ext/TacticSallyOutDefense) | 🔗 |
| C | [TacticSallyOutHitAndRun](/v1.3.15/zh/api/mission-ext/TacticSallyOutHitAndRun) | 🔗 |
| C | [TacticSergeantMPBotTactic](/v1.3.15/zh/api/mission-ext/TacticSergeantMPBotTactic) | 🔗 |
| E | [TacticState](/v1.3.15/zh/api/mission-ext/TacticState) | 🔗 |
| C | [TacticStop](/v1.3.15/zh/api/mission-ext/TacticStop) | 🔗 |
| E | [TargetFlags](/v1.3.15/zh/api/mission-ext/TargetFlags) | 🔗 |
| E | [TargetIconType](/v1.3.15/zh/api/mission-ext/TargetIconType) | 🔗 |
| C | Team | — |
| C | [TeamAIComponent](/v1.3.15/zh/api/mission-ext/TeamAIComponent) | 🔗 |
| C | [TeamAIGeneral](/v1.3.15/zh/api/mission-ext/TeamAIGeneral) | 🔗 |
| C | [TeamAiMultiplayerSiegeAttacker](/v1.3.15/zh/api/mission-ext/TeamAiMultiplayerSiegeAttacker) | 🔗 |
| C | [TeamAiMultiplayerSiegeDefender](/v1.3.15/zh/api/mission-ext/TeamAiMultiplayerSiegeDefender) | 🔗 |
| C | [TeamAISallyOutAttacker](/v1.3.15/zh/api/mission-ext/TeamAISallyOutAttacker) | 🔗 |
| C | [TeamAISallyOutDefender](/v1.3.15/zh/api/mission-ext/TeamAISallyOutDefender) | 🔗 |
| C | [TeamAISiegeAttacker](/v1.3.15/zh/api/mission-ext/TeamAISiegeAttacker) | 🔗 |
| C | [TeamAISiegeComponent](/v1.3.15/zh/api/mission-ext/TeamAISiegeComponent) | 🔗 |
| C | [TeamAISiegeDefender](/v1.3.15/zh/api/mission-ext/TeamAISiegeDefender) | 🔗 |
| C | [TeamCollection](/v1.3.15/zh/api/mission-ext/TeamCollection) | 🔗 |
| C | [TeammateColorsExtensions](/v1.3.15/zh/api/mission-ext/TeammateColorsExtensions) | 🔗 |
| C | [TeamQuerySystem](/v1.3.15/zh/api/mission-ext/TeamQuerySystem) | 🔗 |
| E | [TerrainTypeSoundSlot](/v1.3.15/zh/api/mission-ext/TerrainTypeSoundSlot) | 🔗 |
| C | [TestScript](/v1.3.15/zh/api/mission-ext/TestScript) | 🔗 |
| C | [Threat](/v1.3.15/zh/api/mission-ext/Threat) | 🔗 |
| C | [ThreatSeeker](/v1.3.15/zh/api/mission-ext/ThreatSeeker) | 🔗 |
| S | [TimeSpeedRequest](/v1.3.15/zh/api/mission-ext/TimeSpeedRequest) | 🔗 |
| E | [TimeType](/v1.3.15/zh/api/mission-ext/TimeType) | 🔗 |
| C | [TrainingIcon](/v1.3.15/zh/api/mission-ext/TrainingIcon) | 🔗 |
| E | [TrainingType](/v1.3.15/zh/api/mission-ext/TrainingType) | 🔗 |
| C | [TrajectoryVisualizer](/v1.3.15/zh/api/mission-ext/TrajectoryVisualizer) | 🔗 |
| C | [TransposedLineFormation](/v1.3.15/zh/api/mission-ext/TransposedLineFormation) | 🔗 |
| C | [Trebuchet](/v1.3.15/zh/api/mission-ext/Trebuchet) | 🔗 |
| C | [TrebuchetAI](/v1.3.15/zh/api/mission-ext/TrebuchetAI) | 🔗 |
| C | [TrebuchetSpawner](/v1.3.15/zh/api/mission-ext/TrebuchetSpawner) | 🔗 |
| C | [TroopFilteringUtilities](/v1.3.15/zh/api/mission-ext/TroopFilteringUtilities) | 🔗 |
| C | [TroopMissionInfo](/v1.3.15/zh/api/mission-ext/TroopMissionInfo) | 🔗 |
| C | [TutorialArea](/v1.3.15/zh/api/mission-ext/TutorialArea) | 🔗 |
| E | Type | — |
| C | [UdpNetworkComponent](/v1.3.15/zh/api/mission-ext/UdpNetworkComponent) | 🔗 |
| E | [UnderAttackType](/v1.3.15/zh/api/mission-ext/UnderAttackType) | 🔗 |
| S | [UnsignedInteger](/v1.3.15/zh/api/mission-ext/UnsignedInteger) | 🔗 |
| S | [UnsignedLongInteger](/v1.3.15/zh/api/mission-ext/UnsignedLongInteger) | 🔗 |
| C | [UnspecifiedDedicatedServerState](/v1.3.15/zh/api/mission-ext/UnspecifiedDedicatedServerState) | 🔗 |
| C | [UsableGameObjectGroup](/v1.3.15/zh/api/mission-ext/UsableGameObjectGroup) | 🔗 |
| C | [UsableMachine](/v1.3.15/zh/api/mission-ext/UsableMachine) | 🔗 |
| C | [UsableMachineAIBase](/v1.3.15/zh/api/mission-ext/UsableMachineAIBase) | 🔗 |
| C | [UsableMissionObject](/v1.3.15/zh/api/mission-ext/UsableMissionObject) | 🔗 |
| C | [UsableMissionObjectComponent](/v1.3.15/zh/api/mission-ext/UsableMissionObjectComponent) | 🔗 |
| S | [UsableMissionObjectRecord](/v1.3.15/zh/api/mission-ext/UsableMissionObjectRecord) | 🔗 |
| E | [UsableObjectInterestKind](/v1.3.15/zh/api/mission-ext/UsableObjectInterestKind) | 🔗 |
| E | [UsageDirection](/v1.3.15/zh/api/mission-ext/UsageDirection) | 🔗 |
| C | [VertexAnimator](/v1.3.15/zh/api/mission-ext/VertexAnimator) | 🔗 |
| S | [VertexAnimatorRecord](/v1.3.15/zh/api/mission-ext/VertexAnimatorRecord) | 🔗 |
| C | [VictoryComponent](/v1.3.15/zh/api/mission-ext/VictoryComponent) | 🔗 |
| C | [VideoPlaybackState](/v1.3.15/zh/api/mission-ext/VideoPlaybackState) | 🔗 |
| C | [ViewCreatorModule](/v1.3.15/zh/api/mission-ext/ViewCreatorModule) | 🔗 |
| C | [ViewMethod](/v1.3.15/zh/api/mission-ext/ViewMethod) | 🔗 |
| C | [VisualShipFactory](/v1.3.15/zh/api/mission-ext/VisualShipFactory) | 🔗 |
| C | [VoiceChatHandler](/v1.3.15/zh/api/mission-ext/VoiceChatHandler) | 🔗 |
| C | [VoiceType](/v1.3.15/zh/api/mission-ext/VoiceType) | 🔗 |
| C | [VolumeBox](/v1.3.15/zh/api/mission-ext/VolumeBox) | 🔗 |
| C | [WallSegment](/v1.3.15/zh/api/mission-ext/WallSegment) | 🔗 |
| C | [WarmupSpawningBehavior](/v1.3.15/zh/api/mission-ext/WarmupSpawningBehavior) | 🔗 |
| E | [WarmupStates](/v1.3.15/zh/api/mission-ext/WarmupStates) | 🔗 |
| E | [WatchState](/v1.3.15/zh/api/mission-ext/WatchState) | 🔗 |
| C | [WaterPathPoint](/v1.3.15/zh/api/mission-ext/WaterPathPoint) | 🔗 |
| C | [WaveFloater](/v1.3.15/zh/api/mission-ext/WaveFloater) | 🔗 |
| C | [WeaponComponentMissionExtensions](/v1.3.15/zh/api/mission-ext/WeaponComponentMissionExtensions) | 🔗 |
| S | [WeaponData](/v1.3.15/zh/api/mission-ext/WeaponData) | 🔗 |
| S | [WeaponInfo](/v1.3.15/zh/api/mission-ext/WeaponInfo) | 🔗 |
| C | [WeaponSpawner](/v1.3.15/zh/api/mission-ext/WeaponSpawner) | 🔗 |
| E | [WeaponSpawnFlags](/v1.3.15/zh/api/mission-ext/WeaponSpawnFlags) | 🔗 |
| E | [WeaponState](/v1.3.15/zh/api/mission-ext/WeaponState) | 🔗 |
| S | [WeaponStatsData](/v1.3.15/zh/api/mission-ext/WeaponStatsData) | 🔗 |
| E | [WeaponWieldActionType](/v1.3.15/zh/api/mission-ext/WeaponWieldActionType) | 🔗 |
| C | [WedgeFormation](/v1.3.15/zh/api/mission-ext/WedgeFormation) | 🔗 |
| C | [WindMill](/v1.3.15/zh/api/mission-ext/WindMill) | 🔗 |
| E | [XmlInformationType](/v1.3.15/zh/api/mission-ext/XmlInformationType) | 🔗 |

## TaleWorlds.MountAndBlade.AI (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SiegeWeaponAutoDeployer](/v1.3.15/zh/api/mission-ext/SiegeWeaponAutoDeployer) | 🔗 |

## TaleWorlds.MountAndBlade.AI.AgentComponents (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ScriptedMovementComponent](/v1.3.15/zh/api/mission-ext/ScriptedMovementComponent) | 🔗 |

## TaleWorlds.MountAndBlade.ComponentInterfaces (16)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentApplyDamageModel](/v1.3.15/zh/api/mission-ext/AgentApplyDamageModel) | 🔗 |
| C | [AgentDecideKilledOrUnconsciousModel](/v1.3.15/zh/api/mission-ext/AgentDecideKilledOrUnconsciousModel) | 🔗 |
| C | [ApplyWeatherEffectsModel](/v1.3.15/zh/api/mission-ext/ApplyWeatherEffectsModel) | 🔗 |
| S | [ArrangementPosition](/v1.3.15/zh/api/mission-ext/ArrangementPosition) | 🔗 |
| C | [AutoBlockModel](/v1.3.15/zh/api/mission-ext/AutoBlockModel) | 🔗 |
| C | [BattleBannerBearersModel](/v1.3.15/zh/api/mission-ext/BattleBannerBearersModel) | 🔗 |
| C | [BattleInitializationModel](/v1.3.15/zh/api/mission-ext/BattleInitializationModel) | 🔗 |
| C | [BattleMoraleModel](/v1.3.15/zh/api/mission-ext/BattleMoraleModel) | 🔗 |
| C | [BattleSpawnModel](/v1.3.15/zh/api/mission-ext/BattleSpawnModel) | 🔗 |
| C | [DefaultSiegeEngineCalculationModel](/v1.3.15/zh/api/mission-ext/DefaultSiegeEngineCalculationModel) | 🔗 |
| C | [FormationArrangementModel](/v1.3.15/zh/api/mission-ext/FormationArrangementModel) | 🔗 |
| C | [ItemPickupModel](/v1.3.15/zh/api/mission-ext/ItemPickupModel) | 🔗 |
| C | [MissionDifficultyModel](/v1.3.15/zh/api/mission-ext/MissionDifficultyModel) | 🔗 |
| C | [MissionShipParametersModel](/v1.3.15/zh/api/mission-ext/MissionShipParametersModel) | 🔗 |
| C | [MissionSiegeEngineCalculationModel](/v1.3.15/zh/api/mission-ext/MissionSiegeEngineCalculationModel) | 🔗 |
| C | [StrikeMagnitudeCalculationModel](/v1.3.15/zh/api/mission-ext/StrikeMagnitudeCalculationModel) | 🔗 |

## TaleWorlds.MountAndBlade.DividableTasks (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FindMostDangerousThreat](/v1.3.15/zh/api/mission-ext/FindMostDangerousThreat) | 🔗 |
| C | [FormationSearchThreatTask](/v1.3.15/zh/api/mission-ext/FormationSearchThreatTask) | 🔗 |

## TaleWorlds.MountAndBlade.GameKeyCategory (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [OrderOfBattleHotKeyCategory](/v1.3.15/zh/api/mission-ext/OrderOfBattleHotKeyCategory) | 🔗 |
| C | [PhotoModeHotKeyCategory](/v1.3.15/zh/api/mission-ext/PhotoModeHotKeyCategory) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [ChatLineData](./mission-ext/ChatLineData) | 🔗 |
| C | [ChatLogMessageManager](./mission-ext/ChatLogMessageManager) | 🔗 |
| C | [GamepadCursorViewModel](./mission-ext/GamepadCursorViewModel) | 🔗 |
| C | [GauntletBannerBuilderScreen](./mission-ext/GauntletBannerBuilderScreen) | 🔗 |
| C | [GauntletChatLogView](./mission-ext/GauntletChatLogView) | 🔗 |
| C | [GauntletCreditsScreen](./mission-ext/GauntletCreditsScreen) | 🔗 |
| C | [GauntletDebugStats](./mission-ext/GauntletDebugStats) | 🔗 |
| C | [GauntletDefaultLoadingWindowManager](./mission-ext/GauntletDefaultLoadingWindowManager) | 🔗 |
| C | [GauntletGameNotification](./mission-ext/GauntletGameNotification) | 🔗 |
| C | [GauntletGamepadCursor](./mission-ext/GauntletGamepadCursor) | 🔗 |
| C | [GauntletGameVersionView](./mission-ext/GauntletGameVersionView) | 🔗 |
| C | [GauntletInformationView](./mission-ext/GauntletInformationView) | 🔗 |
| C | [GauntletInitialScreen](./mission-ext/GauntletInitialScreen) | 🔗 |
| C | [GauntletOptionsScreen](./mission-ext/GauntletOptionsScreen) | 🔗 |
| C | [GauntletOrderUIHandler](./mission-ext/GauntletOrderUIHandler) | 🔗 |
| C | [GauntletProfileSelectionScreen](./mission-ext/GauntletProfileSelectionScreen) | 🔗 |
| C | [GauntletQueryManager](./mission-ext/GauntletQueryManager) | 🔗 |
| C | [GauntletUISubModule](./mission-ext/GauntletUISubModule) | 🔗 |
| C | [GauntletVideoPlaybackScreen](./mission-ext/GauntletVideoPlaybackScreen) | 🔗 |
| C | [KeybindingPopup](./mission-ext/KeybindingPopup) | 🔗 |
| C | [KeybindingPopupVM](./mission-ext/KeybindingPopupVM) | 🔗 |
| C | [LoadingWindowViewModel](./mission-ext/LoadingWindowViewModel) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BodyGeneratorView](./mission-ext/BodyGeneratorView) | 🔗 |
| C | [GauntletBodyGeneratorScreen](./mission-ext/GauntletBodyGeneratorScreen) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.Mission (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionGauntletAgentStatus](./mission-ext/MissionGauntletAgentStatus) | 🔗 |
| C | [MissionGauntletBoundaryCrossingView](./mission-ext/MissionGauntletBoundaryCrossingView) | 🔗 |
| C | [MissionGauntletCameraFadeView](./mission-ext/MissionGauntletCameraFadeView) | 🔗 |
| C | [MissionGauntletCategoryLoadManager](./mission-ext/MissionGauntletCategoryLoadManager) | 🔗 |
| C | [MissionGauntletCrosshair](./mission-ext/MissionGauntletCrosshair) | 🔗 |
| C | [MissionGauntletEscapeMenuBase](./mission-ext/MissionGauntletEscapeMenuBase) | 🔗 |
| C | [MissionGauntletHintView](./mission-ext/MissionGauntletHintView) | 🔗 |
| C | [MissionGauntletMainAgentCheerControllerView](./mission-ext/MissionGauntletMainAgentCheerControllerView) | 🔗 |
| C | [MissionGauntletMainAgentControlModeView](./mission-ext/MissionGauntletMainAgentControlModeView) | 🔗 |
| C | [MissionGauntletMainAgentEquipDropView](./mission-ext/MissionGauntletMainAgentEquipDropView) | 🔗 |
| C | [MissionGauntletMainAgentEquipmentControllerView](./mission-ext/MissionGauntletMainAgentEquipmentControllerView) | 🔗 |
| C | [MissionGauntletOptionsUIHandler](./mission-ext/MissionGauntletOptionsUIHandler) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionGauntletAgentLockVisualizerView](./mission-ext/MissionGauntletAgentLockVisualizerView) | 🔗 |
| C | [MissionGauntletBattleScore](./mission-ext/MissionGauntletBattleScore) | 🔗 |
| C | [MissionGauntletFormationMarker](./mission-ext/MissionGauntletFormationMarker) | 🔗 |
| C | [MissionGauntletKillNotificationSingleplayerUIHandler](./mission-ext/MissionGauntletKillNotificationSingleplayerUIHandler) | 🔗 |
| C | [MissionGauntletLeaveView](./mission-ext/MissionGauntletLeaveView) | 🔗 |
| C | [MissionGauntletOrderOfBattleUIHandler](./mission-ext/MissionGauntletOrderOfBattleUIHandler) | 🔗 |
| C | [MissionGauntletPhotoMode](./mission-ext/MissionGauntletPhotoMode) | 🔗 |
| C | [MissionGauntletSiegeEngineMarker](./mission-ext/MissionGauntletSiegeEngineMarker) | 🔗 |
| C | [MissionGauntletSingleplayerEscapeMenu](./mission-ext/MissionGauntletSingleplayerEscapeMenu) | 🔗 |
| C | [MissionGauntletSingleplayerOrderUIHandler](./mission-ext/MissionGauntletSingleplayerOrderUIHandler) | 🔗 |
| C | [MissionGauntletSpectatorControl](./mission-ext/MissionGauntletSpectatorControl) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.SceneNotification (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GauntletSceneNotification](./mission-ext/GauntletSceneNotification) | 🔗 |
| C | [NativeSceneNotificationContextProvider](./mission-ext/NativeSceneNotificationContextProvider) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.TextureProviders (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerTableauTextureProvider](./mission-ext/BannerTableauTextureProvider) | 🔗 |
| C | [BrightnessDemoTextureProvider](./mission-ext/BrightnessDemoTextureProvider) | 🔗 |
| C | [CharacterTableauTextureProvider](./mission-ext/CharacterTableauTextureProvider) | 🔗 |
| C | [ItemTableauTextureProvider](./mission-ext/ItemTableauTextureProvider) | 🔗 |
| C | [OnlineImageTextureProvider](./mission-ext/OnlineImageTextureProvider) | 🔗 |
| C | [SaveLoadHeroTableauTextureProvider](./mission-ext/SaveLoadHeroTableauTextureProvider) | 🔗 |
| C | [SceneTextureProvider](./mission-ext/SceneTextureProvider) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.TextureProviders.ImageIdentifiers (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerImageTextureProvider](./mission-ext/BannerImageTextureProvider) | 🔗 |
| C | [CharacterImageTextureProvider](./mission-ext/CharacterImageTextureProvider) | 🔗 |
| C | [CraftingPieceImageTextureProvider](./mission-ext/CraftingPieceImageTextureProvider) | 🔗 |
| C | [ImageIdentifierTextureProvider](./mission-ext/ImageIdentifierTextureProvider) | 🔗 |
| C | [ItemImageTextureProvider](./mission-ext/ItemImageTextureProvider) | 🔗 |
| C | [PlayerAvatarImageTextureProvider](./mission-ext/PlayerAvatarImageTextureProvider) | 🔗 |

## TaleWorlds.MountAndBlade.GauntletUI.Widgets (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [Dimensions](/v1.3.15/zh/api/mission-ext/Dimensions) | 🔗 |
| C | [DimensionSyncWidget](/v1.3.15/zh/api/mission-ext/DimensionSyncWidget) | 🔗 |

## TaleWorlds.MountAndBlade.MissionRepresentatives (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DuelMissionRepresentative](/v1.3.15/zh/api/mission-ext/DuelMissionRepresentative) | 🔗 |
| C | [FFAMissionRepresentative](/v1.3.15/zh/api/mission-ext/FFAMissionRepresentative) | 🔗 |
| C | [FlagDominationMissionRepresentative](/v1.3.15/zh/api/mission-ext/FlagDominationMissionRepresentative) | 🔗 |
| C | [SiegeMissionRepresentative](/v1.3.15/zh/api/mission-ext/SiegeMissionRepresentative) | 🔗 |
| C | [TeamDeathmatchMissionRepresentative](/v1.3.15/zh/api/mission-ext/TeamDeathmatchMissionRepresentative) | 🔗 |

## TaleWorlds.MountAndBlade.MissionSpawnHandlers (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CustomBattleMissionSpawnHandler](/v1.3.15/zh/api/mission-ext/CustomBattleMissionSpawnHandler) | 🔗 |
| C | [CustomMissionSpawnHandler](/v1.3.15/zh/api/mission-ext/CustomMissionSpawnHandler) | 🔗 |
| C | [CustomSallyOutMissionController](/v1.3.15/zh/api/mission-ext/CustomSallyOutMissionController) | 🔗 |
| C | [CustomSiegeMissionSpawnHandler](/v1.3.15/zh/api/mission-ext/CustomSiegeMissionSpawnHandler) | 🔗 |

## TaleWorlds.MountAndBlade.Missions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentList](/v1.3.15/zh/api/mission-ext/AgentList) | 🔗 |
| C | [AgentReadOnlyList](/v1.3.15/zh/api/mission-ext/AgentReadOnlyList) | 🔗 |
| I | [IMissionSiegeWeaponsController](/v1.3.15/zh/api/mission-ext/IMissionSiegeWeaponsController) | 🔗 |
| C | [MissionSiegeWeaponsController](/v1.3.15/zh/api/mission-ext/MissionSiegeWeaponsController) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.Handlers (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BattleDeploymentHandler](/v1.3.15/zh/api/mission-ext/BattleDeploymentHandler) | 🔗 |
| C | [SiegeDeploymentHandler](/v1.3.15/zh/api/mission-ext/SiegeDeploymentHandler) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.Hints (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionHint](/v1.3.15/zh/api/mission-ext/MissionHint) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.MissionLogics (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MissionHintLogic](/v1.3.15/zh/api/mission-ext/MissionHintLogic) | 🔗 |
| C | [MissionObjectiveLogic](/v1.3.15/zh/api/mission-ext/MissionObjectiveLogic) | 🔗 |

## TaleWorlds.MountAndBlade.Missions.Objectives (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IMissionObjectiveTarget](./mission-ext/IMissionObjectiveTarget) | 🔗 |
| C | [MissionObjective](/v1.3.15/zh/api/mission-ext/MissionObjective) | 🔗 |
| S | [MissionObjectiveProgressInfo](/v1.3.15/zh/api/mission-ext/MissionObjectiveProgressInfo) | 🔗 |

## TaleWorlds.MountAndBlade.Network (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DebugNetworkEventStatistics](/v1.3.15/zh/api/mission-ext/DebugNetworkEventStatistics) | 🔗 |
| C | [PerSecondEventData](/v1.3.15/zh/api/mission-ext/PerSecondEventData) | 🔗 |
| C | [TotalEventData](/v1.3.15/zh/api/mission-ext/TotalEventData) | 🔗 |

## TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerBearerCondition](/v1.3.15/zh/api/mission-ext/BannerBearerCondition) | 🔗 |

## TaleWorlds.MountAndBlade.Network.Messages (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CreatePlayer](/v1.3.15/zh/api/mission-ext/CreatePlayer) | 🔗 |
| C | [DeletePlayer](/v1.3.15/zh/api/mission-ext/DeletePlayer) | 🔗 |
| C | [GameNetworkMessage](/v1.3.15/zh/api/mission-ext/GameNetworkMessage) | 🔗 |

## TaleWorlds.MountAndBlade.Objects (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AnimalSpawnSettings](/v1.3.15/zh/api/mission-ext/AnimalSpawnSettings) | 🔗 |
| C | [AreaMarker](/v1.3.15/zh/api/mission-ext/AreaMarker) | 🔗 |
| C | [FightAreaMarker](/v1.3.15/zh/api/mission-ext/FightAreaMarker) | 🔗 |
| C | [FlagCapturePoint](/v1.3.15/zh/api/mission-ext/FlagCapturePoint) | 🔗 |
| C | [GenericMissionEvent](/v1.3.15/zh/api/mission-ext/GenericMissionEvent) | 🔗 |
| C | [GenericMissionEventScript](/v1.3.15/zh/api/mission-ext/GenericMissionEventScript) | 🔗 |
| C | [ShipVisual](/v1.3.15/zh/api/mission-ext/ShipVisual) | 🔗 |

## TaleWorlds.MountAndBlade.Objects.Siege (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BallistaSpawner](/v1.3.15/zh/api/mission-ext/BallistaSpawner) | 🔗 |
| C | [BatteringRamSpawner](/v1.3.15/zh/api/mission-ext/BatteringRamSpawner) | 🔗 |
| C | [FireTrebuchet](/v1.3.15/zh/api/mission-ext/FireTrebuchet) | 🔗 |
| I | [ISpawnable](/v1.3.15/zh/api/mission-ext/ISpawnable) | 🔗 |
| C | [MangonelSpawner](/v1.3.15/zh/api/mission-ext/MangonelSpawner) | 🔗 |
| C | [MultiplayerBallistaSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerBallistaSpawner) | 🔗 |
| C | [MultiplayerBatteringRamSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerBatteringRamSpawner) | 🔗 |
| C | [MultiplayerFireBallistaSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerFireBallistaSpawner) | 🔗 |
| C | [MultiplayerFireMangonelSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerFireMangonelSpawner) | 🔗 |
| C | [MultiplayerFireTrebuchetSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerFireTrebuchetSpawner) | 🔗 |
| C | [MultiplayerMangonelSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerMangonelSpawner) | 🔗 |
| C | [MultiplayerSiegeTowerSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerSiegeTowerSpawner) | 🔗 |
| C | [MultiplayerTrebuchetSpawner](/v1.3.15/zh/api/mission-ext/MultiplayerTrebuchetSpawner) | 🔗 |
| C | [SiegeLadderSpawner](/v1.3.15/zh/api/mission-ext/SiegeLadderSpawner) | 🔗 |
| C | [SiegeTowerSpawner](/v1.3.15/zh/api/mission-ext/SiegeTowerSpawner) | 🔗 |
| C | [SpawnerBase](/v1.3.15/zh/api/mission-ext/SpawnerBase) | 🔗 |
| C | [SpawnerPermissionField](/v1.3.15/zh/api/mission-ext/SpawnerPermissionField) | 🔗 |

## TaleWorlds.MountAndBlade.Objects.Usables (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AmmoBarrelBase](/v1.3.15/zh/api/mission-ext/AmmoBarrelBase) | 🔗 |
| C | [ArrowBarrel](/v1.3.15/zh/api/mission-ext/ArrowBarrel) | 🔗 |
| C | [ClimbingMachine](/v1.3.15/zh/api/mission-ext/ClimbingMachine) | 🔗 |
| C | [EventTriggeringUsableMachine](/v1.3.15/zh/api/mission-ext/EventTriggeringUsableMachine) | 🔗 |
| C | [JavelinBarrel](/v1.3.15/zh/api/mission-ext/JavelinBarrel) | 🔗 |
| C | [RemoveExtraWeaponOnStopUsageComponent](/v1.3.15/zh/api/mission-ext/RemoveExtraWeaponOnStopUsageComponent) | 🔗 |
| C | [SiegeMachineStonePile](/v1.3.15/zh/api/mission-ext/SiegeMachineStonePile) | 🔗 |

## TaleWorlds.MountAndBlade.Options (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ActionOptionData](/v1.3.15/zh/api/mission-ext/ActionOptionData) | 🔗 |
| C | [OptionCategory](/v1.3.15/zh/api/mission-ext/OptionCategory) | 🔗 |
| C | [OptionGroup](/v1.3.15/zh/api/mission-ext/OptionGroup) | 🔗 |
| C | [OptionsProvider](/v1.3.15/zh/api/mission-ext/OptionsProvider) | 🔗 |

## TaleWorlds.MountAndBlade.Options.ManagedOptions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ManagedBooleanOptionData](/v1.3.15/zh/api/mission-ext/ManagedBooleanOptionData) | 🔗 |
| C | [ManagedNumericOptionData](/v1.3.15/zh/api/mission-ext/ManagedNumericOptionData) | 🔗 |
| C | [ManagedOptionData](/v1.3.15/zh/api/mission-ext/ManagedOptionData) | 🔗 |
| C | [ManagedSelectionOptionData](/v1.3.15/zh/api/mission-ext/ManagedSelectionOptionData) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Missions (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BaseBattleMissionController](/v1.3.15/zh/api/mission-ext/BaseBattleMissionController) | 🔗 |
| C | [BattleSpawnLogic](/v1.3.15/zh/api/mission-ext/BattleSpawnLogic) | 🔗 |
| C | [CaravanBattleMissionHandler](/v1.3.15/zh/api/mission-ext/CaravanBattleMissionHandler) | 🔗 |
| C | [DebugAgentTeleporterMissionController](/v1.3.15/zh/api/mission-ext/DebugAgentTeleporterMissionController) | 🔗 |
| C | [DebugObjectDestroyerMissionController](/v1.3.15/zh/api/mission-ext/DebugObjectDestroyerMissionController) | 🔗 |
| C | [EquipmentTestMissionController](/v1.3.15/zh/api/mission-ext/EquipmentTestMissionController) | 🔗 |
| C | [HideoutPhasedMissionController](/v1.3.15/zh/api/mission-ext/HideoutPhasedMissionController) | 🔗 |
| C | [MissionOptionsComponent](/v1.3.15/zh/api/mission-ext/MissionOptionsComponent) | 🔗 |
| C | [SimpleMountedPlayerMissionController](/v1.3.15/zh/api/mission-ext/SimpleMountedPlayerMissionController) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Missions.Handlers (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BasicMissionHandler](/v1.3.15/zh/api/mission-ext/BasicMissionHandler) | 🔗 |
| I | [IBoardGameHandler](/v1.3.15/zh/api/mission-ext/IBoardGameHandler) | 🔗 |
| C | [LordsHallFightMissionController](/v1.3.15/zh/api/mission-ext/LordsHallFightMissionController) | 🔗 |
| C | [MissionFacialAnimationHandler](/v1.3.15/zh/api/mission-ext/MissionFacialAnimationHandler) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentMoraleInteractionLogic](/v1.3.15/zh/api/mission-ext/AgentMoraleInteractionLogic) | 🔗 |
| C | [AmmoSupplyLogic](/v1.3.15/zh/api/mission-ext/AmmoSupplyLogic) | 🔗 |
| C | [BattleMissionAgentInteractionLogic](/v1.3.15/zh/api/mission-ext/BattleMissionAgentInteractionLogic) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Objects (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [NavigationMeshDeactivator](/v1.3.15/zh/api/mission-ext/NavigationMeshDeactivator) | 🔗 |
| C | [SceneLeveler](/v1.3.15/zh/api/mission-ext/SceneLeveler) | 🔗 |

## TaleWorlds.MountAndBlade.Source.Objects.Siege (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentPathNavMeshChecker](/v1.3.15/zh/api/mission-ext/AgentPathNavMeshChecker) | 🔗 |
| E | [Direction](/v1.3.15/zh/api/mission-ext/Direction) | 🔗 |

## TaleWorlds.MountAndBlade.View (44)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgentVisuals](./mission-ext/AgentVisuals) | 🔗 |
| C | [AgentVisualsCreator](./mission-ext/AgentVisualsCreator) | 🔗 |
| C | [BannerVisual](./mission-ext/BannerVisual) | 🔗 |
| C | [BannerVisualCreator](./mission-ext/BannerVisualCreator) | 🔗 |
| C | [BannerVisualExtensions](./mission-ext/BannerVisualExtensions) | 🔗 |
| C | [BorderFlagEntityFactory](./mission-ext/BorderFlagEntityFactory) | 🔗 |
| C | [CampaignSounds](./mission-ext/CampaignSounds) | 🔗 |
| C | [ConversationTagView](./mission-ext/ConversationTagView) | 🔗 |
| C | [CraftedDataView](./mission-ext/CraftedDataView) | 🔗 |
| C | [CraftedDataViewManager](./mission-ext/CraftedDataViewManager) | 🔗 |
| C | [CraftingPieceCollectionElementViewExtensions](./mission-ext/CraftingPieceCollectionElementViewExtensions) | 🔗 |
| C | [CraftingSounds](./mission-ext/CraftingSounds) | 🔗 |
| C | [DefaultSounds](./mission-ext/DefaultSounds) | 🔗 |
| C | [DefaultView](./mission-ext/DefaultView) | 🔗 |
| C | [DLCInstallationQueryView](./mission-ext/DLCInstallationQueryView) | 🔗 |
| C | [EndgameSounds](./mission-ext/EndgameSounds) | 🔗 |
| I | [IChatLogHandlerScreen](./mission-ext/IChatLogHandlerScreen) | 🔗 |
| C | [InventorySounds](./mission-ext/InventorySounds) | 🔗 |
| I | [ISiegeDeploymentView](./mission-ext/ISiegeDeploymentView) | 🔗 |
| C | [ItemCollectionElementViewExtensions](./mission-ext/ItemCollectionElementViewExtensions) | 🔗 |
| C | [ItemObjectViewExtensions](./mission-ext/ItemObjectViewExtensions) | 🔗 |
| C | [ItemVisualizer](./mission-ext/ItemVisualizer) | 🔗 |
| C | [KingdomSounds](./mission-ext/KingdomSounds) | 🔗 |
| C | [MissionPlayerToggledOrderViewEvent](./mission-ext/MissionPlayerToggledOrderViewEvent) | 🔗 |
| C | [MissionSounds](./mission-ext/MissionSounds) | 🔗 |
| C | [MountVisualCreator](./mission-ext/MountVisualCreator) | 🔗 |
| C | [MultiplayerSounds](./mission-ext/MultiplayerSounds) | 🔗 |
| C | [NotificationSounds](./mission-ext/NotificationSounds) | 🔗 |
| C | [OrderOfBattleSounds](./mission-ext/OrderOfBattleSounds) | 🔗 |
| C | [OverrideView](./mission-ext/OverrideView) | 🔗 |
| C | [PanelSounds](./mission-ext/PanelSounds) | 🔗 |
| C | [PartySounds](./mission-ext/PartySounds) | 🔗 |
| C | [PopupSceneEmissionHandler](./mission-ext/PopupSceneEmissionHandler) | 🔗 |
| C | [PopupSceneSkeletonAnimationScript](./mission-ext/PopupSceneSkeletonAnimationScript) | 🔗 |
| C | [PopupSceneSpawnPoint](./mission-ext/PopupSceneSpawnPoint) | 🔗 |
| C | [PortSounds](./mission-ext/PortSounds) | 🔗 |
| C | [PreloadHelper](./mission-ext/PreloadHelper) | 🔗 |
| C | [SiegeSounds](./mission-ext/SiegeSounds) | 🔗 |
| C | [SimpleSceneTestWithMission](./mission-ext/SimpleSceneTestWithMission) | 🔗 |
| C | [UISoundsHelper](./mission-ext/UISoundsHelper) | 🔗 |
| C | [ViewCreator](./mission-ext/ViewCreator) | 🔗 |
| C | [ViewCreatorManager](./mission-ext/ViewCreatorManager) | 🔗 |
| C | [ViewSubModule](./mission-ext/ViewSubModule) | 🔗 |
| C | [WeaponComponentViewExtensions](./mission-ext/WeaponComponentViewExtensions) | 🔗 |

## TaleWorlds.MountAndBlade.View.CustomBattle (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CustomBattleFactory](./mission-ext/CustomBattleFactory) | 🔗 |
| I | [ICustomBattleProvider](./mission-ext/ICustomBattleProvider) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews (30)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | CameraFadeState | — |
| C | [MissionAgentContourControllerView](./mission-ext/MissionAgentContourControllerView) | 🔗 |
| C | [MissionAgentLabelView](./mission-ext/MissionAgentLabelView) | 🔗 |
| C | [MissionAgentStatusUIHandler](./mission-ext/MissionAgentStatusUIHandler) | 🔗 |
| C | [MissionBattleUIBaseView](./mission-ext/MissionBattleUIBaseView) | 🔗 |
| C | [MissionBoundaryCrossingView](./mission-ext/MissionBoundaryCrossingView) | 🔗 |
| C | [MissionBoundaryWallView](./mission-ext/MissionBoundaryWallView) | 🔗 |
| C | [MissionCameraFadeView](./mission-ext/MissionCameraFadeView) | 🔗 |
| C | [MissionCheatView](./mission-ext/MissionCheatView) | 🔗 |
| C | [MissionCrosshair](./mission-ext/MissionCrosshair) | 🔗 |
| C | [MissionEscapeMenuView](./mission-ext/MissionEscapeMenuView) | 🔗 |
| C | [MissionFormationTargetSelectionHandler](./mission-ext/MissionFormationTargetSelectionHandler) | 🔗 |
| C | [MissionGamepadEffectsView](./mission-ext/MissionGamepadEffectsView) | 🔗 |
| C | [MissionHintView](./mission-ext/MissionHintView) | 🔗 |
| C | [MissionItemContourControllerView](./mission-ext/MissionItemContourControllerView) | 🔗 |
| C | [MissionMainAgentCheerBarkControllerView](./mission-ext/MissionMainAgentCheerBarkControllerView) | 🔗 |
| C | [MissionMainAgentController](./mission-ext/MissionMainAgentController) | 🔗 |
| C | [MissionMainAgentControlModeView](./mission-ext/MissionMainAgentControlModeView) | 🔗 |
| C | [MissionMainAgentEquipDropView](./mission-ext/MissionMainAgentEquipDropView) | 🔗 |
| C | [MissionMainAgentEquipmentControllerView](./mission-ext/MissionMainAgentEquipmentControllerView) | 🔗 |
| C | [MissionMainAgentInteractionComponent](./mission-ext/MissionMainAgentInteractionComponent) | 🔗 |
| C | [MissionObjectiveView](./mission-ext/MissionObjectiveView) | 🔗 |
| C | [MissionOptionsUIHandler](./mission-ext/MissionOptionsUIHandler) | 🔗 |
| C | [MissionPlayerMovementFlagsChangeEvent](./mission-ext/MissionPlayerMovementFlagsChangeEvent) | 🔗 |
| C | [MissionView](./mission-ext/MissionView) | 🔗 |
| C | [MissionViewsContainer](./mission-ext/MissionViewsContainer) | 🔗 |
| E | [OverrideMainAgentControlFlag](./mission-ext/OverrideMainAgentControlFlag) | 🔗 |
| C | [ReplayCaptureLogic](./mission-ext/ReplayCaptureLogic) | 🔗 |
| C | [ReplayMissionView](./mission-ext/ReplayMissionView) | 🔗 |
| C | [SpectatorCameraView](./mission-ext/SpectatorCameraView) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.Order (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [CursorState](./mission-ext/CursorState) | 🔗 |
| C | [OrderFlag](./mission-ext/OrderFlag) | 🔗 |
| C | [OrderTroopPlacer](./mission-ext/OrderTroopPlacer) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.SiegeWeapon (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BallistaView](./mission-ext/BallistaView) | 🔗 |
| C | [BricoleView](./mission-ext/BricoleView) | 🔗 |
| C | [MangonelView](./mission-ext/MangonelView) | 🔗 |
| C | [RangedSiegeWeaponView](./mission-ext/RangedSiegeWeaponView) | 🔗 |
| C | [RangedSiegeWeaponViewController](./mission-ext/RangedSiegeWeaponViewController) | 🔗 |
| C | [TrebuchetView](./mission-ext/TrebuchetView) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer (27)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterView](./mission-ext/BarterView) | 🔗 |
| C | [BoardGameView](./mission-ext/BoardGameView) | 🔗 |
| C | [DeploymentMissionView](./mission-ext/DeploymentMissionView) | 🔗 |
| C | [DeploymentView](./mission-ext/DeploymentView) | 🔗 |
| E | [DeploymentVisualizationPreference](./mission-ext/DeploymentVisualizationPreference) | 🔗 |
| C | [FaceGeneratorMissionView](./mission-ext/FaceGeneratorMissionView) | 🔗 |
| C | [FormationIndicatorMissionView](./mission-ext/FormationIndicatorMissionView) | 🔗 |
| C | [Indicator](./mission-ext/Indicator) | 🔗 |
| C | [MissionAgentLockVisualizerView](./mission-ext/MissionAgentLockVisualizerView) | 🔗 |
| C | [MissionBattleScoreUIHandler](./mission-ext/MissionBattleScoreUIHandler) | 🔗 |
| C | [MissionConversationView](./mission-ext/MissionConversationView) | 🔗 |
| C | [MissionCustomBattlePreloadView](./mission-ext/MissionCustomBattlePreloadView) | 🔗 |
| C | [MissionDeploymentBoundaryMarker](./mission-ext/MissionDeploymentBoundaryMarker) | 🔗 |
| C | [MissionEntitySelectionUIHandler](./mission-ext/MissionEntitySelectionUIHandler) | 🔗 |
| C | [MissionFormationMarkerUIHandler](./mission-ext/MissionFormationMarkerUIHandler) | 🔗 |
| C | [MissionLeaveView](./mission-ext/MissionLeaveView) | 🔗 |
| C | [MissionMessageUIHandler](./mission-ext/MissionMessageUIHandler) | 🔗 |
| C | [MissionOrderOfBattleUIHandler](./mission-ext/MissionOrderOfBattleUIHandler) | 🔗 |
| C | [MissionOrderUIHandler](./mission-ext/MissionOrderUIHandler) | 🔗 |
| C | [MissionScoreUIHandler](./mission-ext/MissionScoreUIHandler) | 🔗 |
| C | [MissionSiegeEngineMarkerView](./mission-ext/MissionSiegeEngineMarkerView) | 🔗 |
| C | [MissionSingleplayerEscapeMenu](./mission-ext/MissionSingleplayerEscapeMenu) | 🔗 |
| C | [MissionSingleplayerKillNotificationUIHandler](./mission-ext/MissionSingleplayerKillNotificationUIHandler) | 🔗 |
| C | [MissionSpectatorControlView](./mission-ext/MissionSpectatorControlView) | 🔗 |
| C | [PhotoModeView](./mission-ext/PhotoModeView) | 🔗 |
| C | [SiegeDeploymentVisualizationMissionView](./mission-ext/SiegeDeploymentVisualizationMissionView) | 🔗 |
| C | [TutorialMissionViews](./mission-ext/TutorialMissionViews) | 🔗 |

## TaleWorlds.MountAndBlade.View.MissionViews.Sound (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MusicBattleMissionView](./mission-ext/MusicBattleMissionView) | 🔗 |
| C | [MusicSilencedMissionView](./mission-ext/MusicSilencedMissionView) | 🔗 |
| C | [MusicStealthMissionView](./mission-ext/MusicStealthMissionView) | 🔗 |

## TaleWorlds.MountAndBlade.View.SceneNotification (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PopupSceneBanner](./mission-ext/PopupSceneBanner) | 🔗 |
| C | [PopupSceneShipSpawnPoint](./mission-ext/PopupSceneShipSpawnPoint) | 🔗 |

## TaleWorlds.MountAndBlade.View.Screens (16)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerBuilderScreen](./mission-ext/BannerBuilderScreen) | 🔗 |
| C | [BenchmarkScreen](./mission-ext/BenchmarkScreen) | 🔗 |
| C | [CameraPoint](./mission-ext/CameraPoint) | 🔗 |
| E | [CameraPointTestType](./mission-ext/CameraPointTestType) | 🔗 |
| C | [CreditsScreen](./mission-ext/CreditsScreen) | 🔗 |
| C | [FaceGeneratorScreen](./mission-ext/FaceGeneratorScreen) | 🔗 |
| C | [GameLoadingScreen](./mission-ext/GameLoadingScreen) | 🔗 |
| C | [GameStateScreen](./mission-ext/GameStateScreen) | 🔗 |
| C | [GameStateScreenManager](./mission-ext/GameStateScreenManager) | 🔗 |
| I | [IFaceGeneratorScreen](./mission-ext/IFaceGeneratorScreen) | 🔗 |
| C | [MissionScreen](./mission-ext/MissionScreen) | 🔗 |
| C | [OptionsScreen](./mission-ext/OptionsScreen) | 🔗 |
| C | [SceneEditorLayer](./mission-ext/SceneEditorLayer) | 🔗 |
| C | [SceneEditorScreen](./mission-ext/SceneEditorScreen) | 🔗 |
| C | [VideoPlaybackScreen](./mission-ext/VideoPlaybackScreen) | 🔗 |
| C | [VisualTestsScreen](./mission-ext/VisualTestsScreen) | 🔗 |

## TaleWorlds.MountAndBlade.View.Screens.Scripts (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MultiThreadedStressTestsScreen](./mission-ext/MultiThreadedStressTestsScreen) | 🔗 |
| C | [MultiThreadedTestFunctions](./mission-ext/MultiThreadedTestFunctions) | 🔗 |

## TaleWorlds.MountAndBlade.View.Scripts (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [BodyPartIndex](./mission-ext/BodyPartIndex) | 🔗 |
| C | [CharacterDebugSpawner](./mission-ext/CharacterDebugSpawner) | 🔗 |
| C | [CharacterSpawner](./mission-ext/CharacterSpawner) | 🔗 |
| C | [HandMorphTest](./mission-ext/HandMorphTest) | 🔗 |
| C | [HandPose](./mission-ext/HandPose) | 🔗 |
| E | [InterpolationType](./mission-ext/InterpolationType) | 🔗 |
| C | [MapColorGradeManager](./mission-ext/MapColorGradeManager) | 🔗 |
| S | [PathAnimationState](./mission-ext/PathAnimationState) | 🔗 |
| C | [PopupSceneCameraPath](./mission-ext/PopupSceneCameraPath) | 🔗 |
| C | [PopupSceneSequence](./mission-ext/PopupSceneSequence) | 🔗 |
| C | [PopupSceneSwitchCameraSequence](./mission-ext/PopupSceneSwitchCameraSequence) | 🔗 |
| C | [PopupSceneSwitchItemSequence](./mission-ext/PopupSceneSwitchItemSequence) | 🔗 |

## TaleWorlds.MountAndBlade.View.Tableaus (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerTableau](./mission-ext/BannerTableau) | 🔗 |
| C | [BasicCharacterTableau](./mission-ext/BasicCharacterTableau) | 🔗 |
| C | [BrightnessDemoTableau](./mission-ext/BrightnessDemoTableau) | 🔗 |
| C | [CharacterTableau](./mission-ext/CharacterTableau) | 🔗 |
| C | [ItemTableau](./mission-ext/ItemTableau) | 🔗 |
| S | [RenderDetails](./mission-ext/RenderDetails) | 🔗 |
| C | [SceneTableau](./mission-ext/SceneTableau) | 🔗 |
| C | [ThumbnailCacheManager](./mission-ext/ThumbnailCacheManager) | 🔗 |

## TaleWorlds.MountAndBlade.View.Tableaus.Thumbnails (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [Alignment](./mission-ext/Alignment) | 🔗 |
| C | [AvatarThumbnailCache](./mission-ext/AvatarThumbnailCache) | 🔗 |
| C | [AvatarThumbnailCreationData](./mission-ext/AvatarThumbnailCreationData) | 🔗 |
| C | [BannerLargeThumbnailCache](./mission-ext/BannerLargeThumbnailCache) | 🔗 |
| C | [BannerLargeThumbnailCreationData](./mission-ext/BannerLargeThumbnailCreationData) | 🔗 |
| C | [BannerSmallThumbnailCache](./mission-ext/BannerSmallThumbnailCache) | 🔗 |
| C | [BannerSmallThumbnailCreationData](./mission-ext/BannerSmallThumbnailCreationData) | 🔗 |
| C | [BannerThumbnailCache](./mission-ext/BannerThumbnailCache) | 🔗 |
| C | [BannerThumbnailCreationData](./mission-ext/BannerThumbnailCreationData) | 🔗 |
| C | [CharacterThumbnailCache](./mission-ext/CharacterThumbnailCache) | 🔗 |
| C | [CharacterThumbnailCreationData](./mission-ext/CharacterThumbnailCreationData) | 🔗 |
| C | [CraftingPieceCreationData](./mission-ext/CraftingPieceCreationData) | 🔗 |
| C | [CraftingPieceThumbnailCache](./mission-ext/CraftingPieceThumbnailCache) | 🔗 |
| C | [ItemThumbnailCache](./mission-ext/ItemThumbnailCache) | 🔗 |
| C | [ItemThumbnailCreationData](./mission-ext/ItemThumbnailCreationData) | 🔗 |
| I | [IThumbnailCache](./mission-ext/IThumbnailCache) | 🔗 |
| C | [NodeComparer](./mission-ext/NodeComparer) | 🔗 |
| C | [ThumbnailCache](./mission-ext/ThumbnailCache) | 🔗 |
| C | [ThumbnailCacheNode](./mission-ext/ThumbnailCacheNode) | 🔗 |
| C | [ThumbnailCreationData](./mission-ext/ThumbnailCreationData) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultVisualOrderProvider](./mission-ext/DefaultVisualOrderProvider) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GenericVisualOrderSet](./mission-ext/GenericVisualOrderSet) | 🔗 |
| C | [SingleVisualOrderSet](./mission-ext/SingleVisualOrderSet) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders.Orders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [SingleVisualOrder](./mission-ext/SingleVisualOrder) | 🔗 |

## TaleWorlds.MountAndBlade.View.VisualOrders.Orders.ToggleOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ToggleFacingVisualOrder](./mission-ext/ToggleFacingVisualOrder) | 🔗 |

## TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArrangementVisualOrder](./mission-ext/ArrangementVisualOrder) | 🔗 |

## TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.MovementOrders (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AdvanceVisualOrder](./mission-ext/AdvanceVisualOrder) | 🔗 |
| C | [ChargeVisualOrder](./mission-ext/ChargeVisualOrder) | 🔗 |
| C | [FallbackVisualOrder](./mission-ext/FallbackVisualOrder) | 🔗 |
| C | [FollowMeVisualOrder](./mission-ext/FollowMeVisualOrder) | 🔗 |
| C | [MoveVisualOrder](./mission-ext/MoveVisualOrder) | 🔗 |
| C | [RetreatVisualOrder](./mission-ext/RetreatVisualOrder) | 🔗 |
| C | [StopVisualOrder](./mission-ext/StopVisualOrder) | 🔗 |

## TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.ToggleOrders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GenericToggleVisualOrder](./mission-ext/GenericToggleVisualOrder) | 🔗 |
