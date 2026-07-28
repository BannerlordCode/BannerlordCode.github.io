---
title: "SandBox"
description: "Sandbox 模块（战役作弊、行为等）。"
---

## 上级导航

- [返回 campaign-ext 目录](../)
- [API 目录](../../)
- [版本首页](../../../)

## 子系统概述

这里是 **campaign-ext 目录** 的 **SandBox** 子系统。同一命名空间下的类负责相近功能，可从中找到需要的类型后再进入类页查看方法。

Sandbox 模块（战役作弊、行为等）。

## 类列表

| 类 | 用途 |
|------|---------|
| [`Add1000GoldCheat`](../Add1000GoldCheat/) | Add1000GoldCheat 是 SandBox 下的公开类型。 |
| [`Add100InfluenceCheat`](../Add100InfluenceCheat/) | Add100InfluenceCheat 是 SandBox 下的公开类型。 |
| [`Add100RenownCheat`](../Add100RenownCheat/) | Add100RenownCheat 是 SandBox 下的公开类型。 |
| [`AddCraftingMaterialsCheat`](../AddCraftingMaterialsCheat/) | AddCraftingMaterialsCheat 是 SandBox 下的公开类型。 |
| [`AgentAlarmStateEnum`](../AgentAlarmStateEnum/) | AgentAlarmStateEnum 是 SandBox.ViewModelCollection.Missions.MainAgentDetection 下的公开类型。 |
| [`AgentBehavior`](../AgentBehavior/) | AgentBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`AgentBehaviorGroup`](../AgentBehaviorGroup/) | AgentBehaviorGroup 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`AgentBehaviorManager`](../AgentBehaviorManager/) | AgentBehaviorManager 是一个管理器，位于 SandBox.AI，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`AgentStealthOffenseType`](../AgentStealthOffenseType/) | AgentStealthOffenseType 是 SandBox.ViewModelCollection.Missions.MainAgentDetection 下的公开类型。 |
| [`AgentTrackTypes`](../AgentTrackTypes/) | AgentTrackTypes 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`AIState`](../AIState/) | AIState 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`AlarmedBehaviorGroup`](../AlarmedBehaviorGroup/) | AlarmedBehaviorGroup 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`AlleyCampaignBehavior`](../AlleyCampaignBehavior/) | AlleyCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`AlleyCampaignBehaviorTypeDefiner`](../AlleyCampaignBehaviorTypeDefiner/) | AlleyCampaignBehaviorTypeDefiner 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`AlleyFightMissionHandler`](../AlleyFightMissionHandler/) | AlleyFightMissionHandler 是一个处理器，位于 SandBox.Missions.MissionLogics.Towns，在特定事件发生时执行约定好的响应逻辑。 |
| [`AnimatedBasicAreaIndicator`](../AnimatedBasicAreaIndicator/) | AnimatedBasicAreaIndicator 是 SandBox.Objects.AreaMarkers 下的公开类型。 |
| [`AnimationPoint`](../AnimationPoint/) | AnimationPoint 是 SandBox.Objects.AnimationPoints 下的公开类型。 |
| [`ArcheryTournamentAgentController`](../ArcheryTournamentAgentController/) | ArcheryTournamentAgentController 是一个控制器，位于 SandBox.Tournaments.AgentControllers，接收输入后把系统推向下一个状态。 |
| [`ArenaAgentStateDeciderLogic`](../ArenaAgentStateDeciderLogic/) | ArenaAgentStateDeciderLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics.Arena，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`ArenaDuelMissionBehavior`](../ArenaDuelMissionBehavior/) | ArenaDuelMissionBehavior 是 SandBox.Missions.MissionLogics.Arena 下的公开类型。 |
| [`ArenaDuelMissionController`](../ArenaDuelMissionController/) | ArenaDuelMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics.Arena，接收输入后把系统推向下一个状态。 |
| [`ArenaDuelQuestTask`](../ArenaDuelQuestTask/) | ArenaDuelQuestTask 是 SandBox.Issues.IssueQuestTasks 下的公开类型。 |
| [`ArenaMasterCampaignBehavior`](../ArenaMasterCampaignBehavior/) | ArenaMasterCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`ArenaPracticeFightMissionController`](../ArenaPracticeFightMissionController/) | ArenaPracticeFightMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics.Arena，接收输入后把系统推向下一个状态。 |
| [`BannerEditorView`](../BannerEditorView/) | BannerEditorView 是一个视图层对象，位于 SandBox.GauntletUI.BannerEditor，负责把游戏状态投影到屏幕或场景。 |
| [`BarberCampaignBehavior`](../BarberCampaignBehavior/) | BarberCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`BarrierInfo`](../BarrierInfo/) | BarrierInfo 是 SandBox.BoardGames 下的公开类型。 |
| [`BasicAreaIndicator`](../BasicAreaIndicator/) | BasicAreaIndicator 是 SandBox.Objects.AreaMarkers 下的公开类型。 |
| [`BattleAgentLogic`](../BattleAgentLogic/) | BattleAgentLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`BattleSimulationMapView`](../BattleSimulationMapView/) | BattleSimulationMapView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`BattleSurgeonLogic`](../BattleSurgeonLogic/) | BattleSurgeonLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`BeginConversationInitiatedByAIQuestTask`](../BeginConversationInitiatedByAIQuestTask/) | BeginConversationInitiatedByAIQuestTask 是 SandBox.Issues.IssueQuestTasks 下的公开类型。 |
| [`BehaviorSets`](../BehaviorSets/) | BehaviorSets 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`BlockadePositionScript`](../BlockadePositionScript/) | BlockadePositionScript 是 SandBox.View.Map 下的公开类型。 |
| [`BoardGameAgentBehavior`](../BoardGameAgentBehavior/) | BoardGameAgentBehavior 是 SandBox.Source.Missions.AgentBehaviors 下的公开类型。 |
| [`BoardGameAIBaghChal`](../BoardGameAIBaghChal/) | BoardGameAIBaghChal 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`BoardGameAIBase`](../BoardGameAIBase/) | BoardGameAIBase 是一个抽象基类，位于 SandBox.BoardGames.AI，为具体子类提供可重写（override/virtual）的定制点。 |
| [`BoardGameAIKonane`](../BoardGameAIKonane/) | BoardGameAIKonane 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`BoardGameAIMuTorere`](../BoardGameAIMuTorere/) | BoardGameAIMuTorere 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`BoardGameAIPuluc`](../BoardGameAIPuluc/) | BoardGameAIPuluc 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`BoardGameAISeega`](../BoardGameAISeega/) | BoardGameAISeega 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`BoardGameAITablut`](../BoardGameAITablut/) | BoardGameAITablut 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`BoardGameBaghChal`](../BoardGameBaghChal/) | BoardGameBaghChal 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGameBase`](../BoardGameBase/) | BoardGameBase 是一个抽象基类，位于 SandBox.BoardGames，为具体子类提供可重写（override/virtual）的定制点。 |
| [`BoardGameCampaignBehavior`](../BoardGameCampaignBehavior/) | BoardGameCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`BoardGameDecal`](../BoardGameDecal/) | BoardGameDecal 是 SandBox.BoardGames.Objects 下的公开类型。 |
| [`BoardGameInstructionsVM`](../BoardGameInstructionsVM/) | BoardGameInstructionsVM 是 SandBox.ViewModelCollection.BoardGame 下的公开类型。 |
| [`BoardGameInstructionVM`](../BoardGameInstructionVM/) | BoardGameInstructionVM 是 SandBox.ViewModelCollection.BoardGame 下的公开类型。 |
| [`BoardGameKonane`](../BoardGameKonane/) | BoardGameKonane 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGameMuTorere`](../BoardGameMuTorere/) | BoardGameMuTorere 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGamePuluc`](../BoardGamePuluc/) | BoardGamePuluc 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGameSeega`](../BoardGameSeega/) | BoardGameSeega 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGameSide`](../BoardGameSide/) | BoardGameSide 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGameTablut`](../BoardGameTablut/) | BoardGameTablut 是 SandBox.BoardGames 下的公开类型。 |
| [`BoardGameVM`](../BoardGameVM/) | BoardGameVM 是 SandBox.ViewModelCollection.BoardGame 下的公开类型。 |
| [`BoardInformation`](../BoardInformation/) | BoardInformation 是 SandBox.BoardGames 下的公开类型。 |
| [`BoostSkillCheatGroup`](../BoostSkillCheatGroup/) | BoostSkillCheatGroup 是 SandBox 下的公开类型。 |
| [`BoostSkillCheeat`](../BoostSkillCheeat/) | BoostSkillCheeat 是 SandBox 下的公开类型。 |
| [`CameraFadeState`](../CameraFadeState/) | CameraFadeState 是 SandBox.View.Map 下的公开类型。 |
| [`CameraFollowMode`](../CameraFollowMode/) | CameraFollowMode 是 SandBox.View.Map 下的公开类型。 |
| [`CameraJumpScript`](../CameraJumpScript/) | CameraJumpScript 是 SandBox.Missions 下的公开类型。 |
| [`CampaignAgentComponent`](../CampaignAgentComponent/) | CampaignAgentComponent 是一个组件型对象，位于 SandBox，通常依附在 Agent 或实体上承载局部行为。 |
| [`CampaignEntityVisualComponent`](../CampaignEntityVisualComponent/) | CampaignEntityVisualComponent 是一个组件型对象，位于 SandBox.View.Map，通常依附在 Agent 或实体上承载局部行为。 |
| [`CampaignMapSiegePrefabEntityCache`](../CampaignMapSiegePrefabEntityCache/) | CampaignMapSiegePrefabEntityCache 是 SandBox 下的公开类型。 |
| [`CampaignMissionComponent`](../CampaignMissionComponent/) | CampaignMissionComponent 是一个组件型对象，位于 SandBox.Missions.MissionLogics，通常依附在 Agent 或实体上承载局部行为。 |
| [`CampaignMissionManager`](../CampaignMissionManager/) | CampaignMissionManager 是一个管理器，位于 SandBox，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`CampaignMusicHandler`](../CampaignMusicHandler/) | CampaignMusicHandler 是一个处理器，位于 SandBox.View，在特定事件发生时执行约定好的响应逻辑。 |
| [`CampaignSiegeStateHandler`](../CampaignSiegeStateHandler/) | CampaignSiegeStateHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`CapturedPawnsPool`](../CapturedPawnsPool/) | CapturedPawnsPool 是 SandBox.BoardGames 下的公开类型。 |
| [`CaravanTransactionNotificationItemVM`](../CaravanTransactionNotificationItemVM/) | CaravanTransactionNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`CautiousBehavior`](../CautiousBehavior/) | CautiousBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`Chair`](../Chair/) | Chair 是 SandBox.Objects.Usables 下的公开类型。 |
| [`ChairUsePoint`](../ChairUsePoint/) | ChairUsePoint 是 SandBox.Objects.AnimationPoints 下的公开类型。 |
| [`ChangeLightIntensityScript`](../ChangeLightIntensityScript/) | ChangeLightIntensityScript 是 SandBox.Missions 下的公开类型。 |
| [`ChangeLocationBehavior`](../ChangeLocationBehavior/) | ChangeLocationBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`CharacterCreationBannerEditorView`](../CharacterCreationBannerEditorView/) | CharacterCreationBannerEditorView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationClanNamingStageView`](../CharacterCreationClanNamingStageView/) | CharacterCreationClanNamingStageView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationCultureStageView`](../CharacterCreationCultureStageView/) | CharacterCreationCultureStageView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationFaceGeneratorView`](../CharacterCreationFaceGeneratorView/) | CharacterCreationFaceGeneratorView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationNarrativeStageView`](../CharacterCreationNarrativeStageView/) | CharacterCreationNarrativeStageView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationOptionsStageView`](../CharacterCreationOptionsStageView/) | CharacterCreationOptionsStageView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationReviewStageView`](../CharacterCreationReviewStageView/) | CharacterCreationReviewStageView 是一个视图层对象，位于 SandBox.GauntletUI.CharacterCreation，负责把游戏状态投影到屏幕或场景。 |
| [`CharacterCreationScreen`](../CharacterCreationScreen/) | CharacterCreationScreen 是 SandBox.View.CharacterCreation 下的公开类型。 |
| [`CharacterCreationStageViewAttribute`](../CharacterCreationStageViewAttribute/) | CharacterCreationStageViewAttribute 是一个 .NET 特性，位于 SandBox.View.CharacterCreation，用于给类型或成员打标签。 |
| [`CharacterCreationStageViewBase`](../CharacterCreationStageViewBase/) | CharacterCreationStageViewBase 是一个抽象基类，位于 SandBox.View.CharacterCreation，为具体子类提供可重写（override/virtual）的定制点。 |
| [`CharacterDeveloperNavigationElement`](../CharacterDeveloperNavigationElement/) | CharacterDeveloperNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`CheatActionItemVM`](../CheatActionItemVM/) | CheatActionItemVM 是 SandBox.ViewModelCollection.Map.Cheat 下的公开类型。 |
| [`CheatGroupItemVM`](../CheatGroupItemVM/) | CheatGroupItemVM 是 SandBox.ViewModelCollection.Map.Cheat 下的公开类型。 |
| [`CheatItemBaseVM`](../CheatItemBaseVM/) | CheatItemBaseVM 是 SandBox.ViewModelCollection.Map.Cheat 下的公开类型。 |
| [`CheckPoint`](../CheckPoint/) | CheckPoint 是 SandBox.Tournaments.MissionLogics 下的公开类型。 |
| [`CheckpointArea`](../CheckpointArea/) | CheckpointArea 是 SandBox.Objects 下的公开类型。 |
| [`CheckpointCampaignBehavior`](../CheckpointCampaignBehavior/) | CheckpointCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`CheckpointLoadedMissionEvent`](../CheckpointLoadedMissionEvent/) | CheckpointLoadedMissionEvent 是 SandBox.Missions 下的公开类型。 |
| [`CheckpointMissionLogic`](../CheckpointMissionLogic/) | CheckpointMissionLogic 是一个行为逻辑类，位于 SandBox.Missions，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`CheckpointUsePoint`](../CheckpointUsePoint/) | CheckpointUsePoint 是 SandBox.Objects.Usables 下的公开类型。 |
| [`CinematicBurningArrow`](../CinematicBurningArrow/) | CinematicBurningArrow 是 SandBox.Objects.Cinematics 下的公开类型。 |
| [`CivilianPortShipSpawnMissionLogic`](../CivilianPortShipSpawnMissionLogic/) | CivilianPortShipSpawnMissionLogic 是一个行为逻辑类，位于 SandBox.Missions，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`ClanMemberRolesCampaignBehavior`](../ClanMemberRolesCampaignBehavior/) | ClanMemberRolesCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`ClanNavigationElement`](../ClanNavigationElement/) | ClanNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`ClanScreenPermissionEvent`](../ClanScreenPermissionEvent/) | ClanScreenPermissionEvent 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`CombatMissionWithDialogueController`](../CombatMissionWithDialogueController/) | CombatMissionWithDialogueController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`CommonAreaMarker`](../CommonAreaMarker/) | CommonAreaMarker 是 SandBox.Objects.AreaMarkers 下的公开类型。 |
| [`CommonTownsfolkCampaignBehavior`](../CommonTownsfolkCampaignBehavior/) | CommonTownsfolkCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`CommonVillagersCampaignBehavior`](../CommonVillagersCampaignBehavior/) | CommonVillagersCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`CompleteBuildingProjectCheat`](../CompleteBuildingProjectCheat/) | CompleteBuildingProjectCheat 是 SandBox 下的公开类型。 |
| [`ConversationAnimationToolCampaignBehavior`](../ConversationAnimationToolCampaignBehavior/) | ConversationAnimationToolCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`ConversationMission`](../ConversationMission/) | ConversationMission 是 SandBox.Conversation 下的公开类型。 |
| [`ConversationMissionLogic`](../ConversationMissionLogic/) | ConversationMissionLogic 是一个行为逻辑类，位于 SandBox.Conversation.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`ConversationPlayArgs`](../ConversationPlayArgs/) | ConversationPlayArgs 是 SandBox.View.Map 下的公开类型。 |
| [`ConversationViewEventHandler`](../ConversationViewEventHandler/) | ConversationViewEventHandler 是一个处理器，位于 SandBox.View.Conversation，在特定事件发生时执行约定好的响应逻辑。 |
| [`ConversationViewManager`](../ConversationViewManager/) | ConversationViewManager 是一个管理器，位于 SandBox.View.Conversation，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`CorpseDraggingMissionLogic`](../CorpseDraggingMissionLogic/) | CorpseDraggingMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`CoverAnimalAgentComponent`](../CoverAnimalAgentComponent/) | CoverAnimalAgentComponent 是一个组件型对象，位于 SandBox.Missions，通常依附在 Agent 或实体上承载局部行为。 |
| [`CrossRoadScoreData`](../CrossRoadScoreData/) | CrossRoadScoreData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`DailyBehaviorGroup`](../DailyBehaviorGroup/) | DailyBehaviorGroup 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`DecalEntity`](../DecalEntity/) | DecalEntity 是 SandBox.View.Map 下的公开类型。 |
| [`DefaultCutscenesCampaignBehavior`](../DefaultCutscenesCampaignBehavior/) | DefaultCutscenesCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`DefaultGameMenuOverlayProvider`](../DefaultGameMenuOverlayProvider/) | DefaultGameMenuOverlayProvider 是 SandBox.View.Overlay 下的公开类型。 |
| [`DefaultMapConversationDataProvider`](../DefaultMapConversationDataProvider/) | DefaultMapConversationDataProvider 是 SandBox.View.Map 下的公开类型。 |
| [`DefaultMissionNameMarkerHandler`](../DefaultMissionNameMarkerHandler/) | DefaultMissionNameMarkerHandler 是一个处理器，位于 SandBox.View.Missions.NameMarkers，在特定事件发生时执行约定好的响应逻辑。 |
| [`DefaultMusicInstrumentData`](../DefaultMusicInstrumentData/) | DefaultMusicInstrumentData 是一个数据载体，位于 SandBox.Objects，封装一组字段供系统之间结构化交换状态。 |
| [`DefaultNotificationsCampaignBehavior`](../DefaultNotificationsCampaignBehavior/) | DefaultNotificationsCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`DisguiseMissionLogic`](../DisguiseMissionLogic/) | DisguiseMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`DisguiseMissionUsePoint`](../DisguiseMissionUsePoint/) | DisguiseMissionUsePoint 是 SandBox.Objects.Usables 下的公开类型。 |
| [`DumpIntegrityCampaignBehavior`](../DumpIntegrityCampaignBehavior/) | DumpIntegrityCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`DynamicObjectAnimationPoint`](../DynamicObjectAnimationPoint/) | DynamicObjectAnimationPoint 是 SandBox.Objects.AnimationPoints 下的公开类型。 |
| [`DynamicPatrolAreaParent`](../DynamicPatrolAreaParent/) | DynamicPatrolAreaParent 是 SandBox.Objects 下的公开类型。 |
| [`EavesdroppingMissionCameraView`](../EavesdroppingMissionCameraView/) | EavesdroppingMissionCameraView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`EavesdroppingMissionLogic`](../EavesdroppingMissionLogic/) | EavesdroppingMissionLogic 是一个行为逻辑类，位于 SandBox.Missions，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`EavesdropSound`](../EavesdropSound/) | EavesdropSound 是 SandBox.Missions 下的公开类型。 |
| [`EditorSceneMissionManager`](../EditorSceneMissionManager/) | EditorSceneMissionManager 是一个管理器，位于 SandBox，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`EncyclopediaData`](../EncyclopediaData/) | EncyclopediaData 是一个数据载体，位于 SandBox.GauntletUI.Encyclopedia，封装一组字段供系统之间结构化交换状态。 |
| [`EncyclopediaListViewDataController`](../EncyclopediaListViewDataController/) | EncyclopediaListViewDataController 是一个控制器，位于 SandBox.GauntletUI.Encyclopedia，接收输入后把系统推向下一个状态。 |
| [`EnemyAgentAIDeactivationMissionLogic`](../EnemyAgentAIDeactivationMissionLogic/) | EnemyAgentAIDeactivationMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`EntityVisualManagerBase`](../EntityVisualManagerBase/) | EntityVisualManagerBase 是一个抽象基类，位于 SandBox.View.Map.Managers，为具体子类提供可重写（override/virtual）的定制点。 |
| [`EscapeMenuNavigationElement`](../EscapeMenuNavigationElement/) | EscapeMenuNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`EscortAgentBehavior`](../EscortAgentBehavior/) | EscortAgentBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`FamilyFeudIssue`](../FamilyFeudIssue/) | FamilyFeudIssue 是 SandBox.Issues 下的公开类型。 |
| [`FamilyFeudIssueBehavior`](../FamilyFeudIssueBehavior/) | FamilyFeudIssueBehavior 是 SandBox.Issues 下的公开类型。 |
| [`FamilyFeudIssueMissionBehavior`](../FamilyFeudIssueMissionBehavior/) | FamilyFeudIssueMissionBehavior 是 SandBox.Issues 下的公开类型。 |
| [`FamilyFeudIssueQuest`](../FamilyFeudIssueQuest/) | FamilyFeudIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`FamilyFeudIssueTypeDefiner`](../FamilyFeudIssueTypeDefiner/) | FamilyFeudIssueTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`FightBehavior`](../FightBehavior/) | FightBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`FillCraftingStaminaCheat`](../FillCraftingStaminaCheat/) | FillCraftingStaminaCheat 是 SandBox 下的公开类型。 |
| [`FleeBehavior`](../FleeBehavior/) | FleeBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`FollowAgentBehavior`](../FollowAgentBehavior/) | FollowAgentBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`FollowAgentQuestTask`](../FollowAgentQuestTask/) | FollowAgentQuestTask 是 SandBox.Issues.IssueQuestTasks 下的公开类型。 |
| [`GameOverEnum`](../GameOverEnum/) | GameOverEnum 是 SandBox.BoardGames 下的公开类型。 |
| [`GameOverStatCategoryVM`](../GameOverStatCategoryVM/) | GameOverStatCategoryVM 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`GameOverStatItemVM`](../GameOverStatItemVM/) | GameOverStatItemVM 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`GameOverStatsProvider`](../GameOverStatsProvider/) | GameOverStatsProvider 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`GameOverVM`](../GameOverVM/) | GameOverVM 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`GameplayCheatBase`](../GameplayCheatBase/) | GameplayCheatBase 是一个抽象基类，位于 SandBox，为具体子类提供可重写（override/virtual）的定制点。 |
| [`GameplayCheatGroup`](../GameplayCheatGroup/) | GameplayCheatGroup 是 SandBox 下的公开类型。 |
| [`GameplayCheatItem`](../GameplayCheatItem/) | GameplayCheatItem 是 SandBox 下的公开类型。 |
| [`GameplayCheatsManager`](../GameplayCheatsManager/) | GameplayCheatsManager 是一个管理器，位于 SandBox，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`GameplayCheatsVM`](../GameplayCheatsVM/) | GameplayCheatsVM 是 SandBox.ViewModelCollection.Map.Cheat 下的公开类型。 |
| [`GauntlerMenuBackground`](../GauntlerMenuBackground/) | GauntlerMenuBackground 是 SandBox.GauntletUI.Menu 下的公开类型。 |
| [`GauntletBannerEditorScreen`](../GauntletBannerEditorScreen/) | GauntletBannerEditorScreen 是 SandBox.GauntletUI.BannerEditor 下的公开类型。 |
| [`GauntletBarberScreen`](../GauntletBarberScreen/) | GauntletBarberScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletCharacterDeveloperScreen`](../GauntletCharacterDeveloperScreen/) | GauntletCharacterDeveloperScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletClanScreen`](../GauntletClanScreen/) | GauntletClanScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletCraftingScreen`](../GauntletCraftingScreen/) | GauntletCraftingScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletEducationScreen`](../GauntletEducationScreen/) | GauntletEducationScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletGameOverScreen`](../GauntletGameOverScreen/) | GauntletGameOverScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletHeirSelectionPopupView`](../GauntletHeirSelectionPopupView/) | GauntletHeirSelectionPopupView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletInventoryScreen`](../GauntletInventoryScreen/) | GauntletInventoryScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletKingdomScreen`](../GauntletKingdomScreen/) | GauntletKingdomScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletMapBarGlobalLayer`](../GauntletMapBarGlobalLayer/) | GauntletMapBarGlobalLayer 是 SandBox.GauntletUI.Map 下的公开类型。 |
| [`GauntletMapBarView`](../GauntletMapBarView/) | GauntletMapBarView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapBasicView`](../GauntletMapBasicView/) | GauntletMapBasicView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapBattleSimulationView`](../GauntletMapBattleSimulationView/) | GauntletMapBattleSimulationView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapCameraFadeView`](../GauntletMapCameraFadeView/) | GauntletMapCameraFadeView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapCampaignOptionsView`](../GauntletMapCampaignOptionsView/) | GauntletMapCampaignOptionsView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapCheatsView`](../GauntletMapCheatsView/) | GauntletMapCheatsView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapConversationView`](../GauntletMapConversationView/) | GauntletMapConversationView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapEncyclopediaView`](../GauntletMapEncyclopediaView/) | GauntletMapEncyclopediaView 是一个视图层对象，位于 SandBox.GauntletUI.Encyclopedia，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapEscapeMenuView`](../GauntletMapEscapeMenuView/) | GauntletMapEscapeMenuView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapEventVisual`](../GauntletMapEventVisual/) | GauntletMapEventVisual 是 SandBox.GauntletUI.Map 下的公开类型。 |
| [`GauntletMapEventVisualCreator`](../GauntletMapEventVisualCreator/) | GauntletMapEventVisualCreator 是 SandBox.GauntletUI.Map 下的公开类型。 |
| [`GauntletMapEventVisualsView`](../GauntletMapEventVisualsView/) | GauntletMapEventVisualsView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapIncidentView`](../GauntletMapIncidentView/) | GauntletMapIncidentView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapNotificationView`](../GauntletMapNotificationView/) | GauntletMapNotificationView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapOverlayView`](../GauntletMapOverlayView/) | GauntletMapOverlayView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapParleyAnimationView`](../GauntletMapParleyAnimationView/) | GauntletMapParleyAnimationView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapPartyNameplateView`](../GauntletMapPartyNameplateView/) | GauntletMapPartyNameplateView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapReadyView`](../GauntletMapReadyView/) | GauntletMapReadyView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapSaveView`](../GauntletMapSaveView/) | GauntletMapSaveView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapSettlementNameplateView`](../GauntletMapSettlementNameplateView/) | GauntletMapSettlementNameplateView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapSiegeOverlayView`](../GauntletMapSiegeOverlayView/) | GauntletMapSiegeOverlayView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMapTrackersView`](../GauntletMapTrackersView/) | GauntletMapTrackersView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMarriageOfferPopupView`](../GauntletMarriageOfferPopupView/) | GauntletMarriageOfferPopupView 是一个视图层对象，位于 SandBox.GauntletUI.Map，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMenuBaseView`](../GauntletMenuBaseView/) | GauntletMenuBaseView 是一个视图层对象，位于 SandBox.GauntletUI.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMenuOverlayBaseView`](../GauntletMenuOverlayBaseView/) | GauntletMenuOverlayBaseView 是一个视图层对象，位于 SandBox.GauntletUI.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMenuRecruitVolunteersView`](../GauntletMenuRecruitVolunteersView/) | GauntletMenuRecruitVolunteersView 是一个视图层对象，位于 SandBox.GauntletUI.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMenuTournamentLeaderboardView`](../GauntletMenuTournamentLeaderboardView/) | GauntletMenuTournamentLeaderboardView 是一个视图层对象，位于 SandBox.GauntletUI.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMenuTownManagementView`](../GauntletMenuTownManagementView/) | GauntletMenuTownManagementView 是一个视图层对象，位于 SandBox.GauntletUI.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletMenuTroopSelectionView`](../GauntletMenuTroopSelectionView/) | GauntletMenuTroopSelectionView 是一个视图层对象，位于 SandBox.GauntletUI.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`GauntletPartyScreen`](../GauntletPartyScreen/) | GauntletPartyScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletQuestsScreen`](../GauntletQuestsScreen/) | GauntletQuestsScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletSaveLoadScreen`](../GauntletSaveLoadScreen/) | GauntletSaveLoadScreen 是 SandBox.GauntletUI 下的公开类型。 |
| [`GauntletTutorialSystem`](../GauntletTutorialSystem/) | GauntletTutorialSystem 是 SandBox.GauntletUI.Tutorial 下的公开类型。 |
| [`GenderEnum`](../GenderEnum/) | GenderEnum 是 SandBox.View.Missions 下的公开类型。 |
| [`GenericMissionEventBox`](../GenericMissionEventBox/) | GenericMissionEventBox 是 SandBox.Objects 下的公开类型。 |
| [`Give10GrainCheat`](../Give10GrainCheat/) | Give10GrainCheat 是 SandBox 下的公开类型。 |
| [`Give10WarhorsesCheat`](../Give10WarhorsesCheat/) | Give10WarhorsesCheat 是 SandBox 下的公开类型。 |
| [`Give5TroopsToPlayerCheat`](../Give5TroopsToPlayerCheat/) | Give5TroopsToPlayerCheat 是 SandBox 下的公开类型。 |
| [`GroupSpawnPoint`](../GroupSpawnPoint/) | GroupSpawnPoint 是 SandBox.Objects 下的公开类型。 |
| [`GuardsCampaignBehavior`](../GuardsCampaignBehavior/) | GuardsCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`HealMainHeroCheat`](../HealMainHeroCheat/) | HealMainHeroCheat 是 SandBox 下的公开类型。 |
| [`HealPlayerPartyCheat`](../HealPlayerPartyCheat/) | HealPlayerPartyCheat 是 SandBox 下的公开类型。 |
| [`HeirSelectionCampaignBehavior`](../HeirSelectionCampaignBehavior/) | HeirSelectionCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`HeirSelectionPopupView`](../HeirSelectionPopupView/) | HeirSelectionPopupView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`HeroSkillHandler`](../HeroSkillHandler/) | HeroSkillHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`HideoutAgentType`](../HideoutAgentType/) | HideoutAgentType 是 SandBox.Missions.MissionLogics.Hideout 下的公开类型。 |
| [`HideoutAmbushBossFightCinematicController`](../HideoutAmbushBossFightCinematicController/) | HideoutAmbushBossFightCinematicController 是一个控制器，位于 SandBox.Missions.MissionLogics.Hideout，接收输入后把系统推向下一个状态。 |
| [`HideoutAmbushMissionController`](../HideoutAmbushMissionController/) | HideoutAmbushMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics.Hideout，接收输入后把系统推向下一个状态。 |
| [`HideoutBossFightBehavior`](../HideoutBossFightBehavior/) | HideoutBossFightBehavior 是 SandBox.Objects.Cinematics 下的公开类型。 |
| [`HideoutCinematicController`](../HideoutCinematicController/) | HideoutCinematicController 是一个控制器，位于 SandBox.Missions.MissionLogics.Hideout，接收输入后把系统推向下一个状态。 |
| [`HideoutCinematicState`](../HideoutCinematicState/) | HideoutCinematicState 是 SandBox.Missions.MissionLogics.Hideout 下的公开类型。 |
| [`HideoutConversationsCampaignBehavior`](../HideoutConversationsCampaignBehavior/) | HideoutConversationsCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`HideoutMissionController`](../HideoutMissionController/) | HideoutMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics.Hideout，接收输入后把系统推向下一个状态。 |
| [`HideoutPostCinematicPhase`](../HideoutPostCinematicPhase/) | HideoutPostCinematicPhase 是 SandBox.Missions.MissionLogics.Hideout 下的公开类型。 |
| [`HideoutPreCinematicPhase`](../HideoutPreCinematicPhase/) | HideoutPreCinematicPhase 是 SandBox.Missions.MissionLogics.Hideout 下的公开类型。 |
| [`HouseMissionController`](../HouseMissionController/) | HouseMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`IChangeableScreen`](../IChangeableScreen/) | IChangeableScreen 是 SandBox.View 下的公开类型。 |
| [`IdleAgentBehavior`](../IdleAgentBehavior/) | IdleAgentBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`IGauntletMapEventVisualHandler`](../IGauntletMapEventVisualHandler/) | IGauntletMapEventVisualHandler 是一个处理器，位于 SandBox.GauntletUI.Map，在特定事件发生时执行约定好的响应逻辑。 |
| [`IMapConversationDataProvider`](../IMapConversationDataProvider/) | IMapConversationDataProvider 是 SandBox.View.Map 下的公开类型。 |
| [`IMissionProgressTracker`](../IMissionProgressTracker/) | IMissionProgressTracker 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`INameMarkerProviderContext`](../INameMarkerProviderContext/) | INameMarkerProviderContext 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`IndoorMissionController`](../IndoorMissionController/) | IndoorMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`InputInformation`](../InputInformation/) | InputInformation 是 SandBox.View.Map 下的公开类型。 |
| [`InputKeyItemVM`](../InputKeyItemVM/) | InputKeyItemVM 是 SandBox.ViewModelCollection.Input 下的公开类型。 |
| [`InstrumentData`](../InstrumentData/) | InstrumentData 是一个数据载体，位于 SandBox.Objects，封装一组字段供系统之间结构化交换状态。 |
| [`InterruptingBehaviorGroup`](../InterruptingBehaviorGroup/) | InterruptingBehaviorGroup 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`InventoryNavigationElement`](../InventoryNavigationElement/) | InventoryNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`IssueSolvedByLordNotificationItemVM`](../IssueSolvedByLordNotificationItemVM/) | IssueSolvedByLordNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`IssueTypes`](../IssueTypes/) | IssueTypes 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`ItemCatalogController`](../ItemCatalogController/) | ItemCatalogController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`ItemForBone`](../ItemForBone/) | ItemForBone 是 SandBox.Objects.AnimationPoints 下的公开类型。 |
| [`ItemPlacements`](../ItemPlacements/) | ItemPlacements 是 SandBox.ViewModelCollection.Tutorial 下的公开类型。 |
| [`ItemSoldNotificationItemVM`](../ItemSoldNotificationItemVM/) | ItemSoldNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`ITournamentGameBehavior`](../ITournamentGameBehavior/) | ITournamentGameBehavior 是 SandBox.Tournaments 下的公开类型。 |
| [`JoustingAgentController`](../JoustingAgentController/) | JoustingAgentController 是一个控制器，位于 SandBox.Tournaments.AgentControllers，接收输入后把系统推向下一个状态。 |
| [`JoustingAgentState`](../JoustingAgentState/) | JoustingAgentState 是 SandBox.Tournaments.AgentControllers 下的公开类型。 |
| [`KingdomNavigationElement`](../KingdomNavigationElement/) | KingdomNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`LeaveMissionLogic`](../LeaveMissionLogic/) | LeaveMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`LocationCharacterAgentSpawnedMissionEvent`](../LocationCharacterAgentSpawnedMissionEvent/) | LocationCharacterAgentSpawnedMissionEvent 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`LocationCharacterMissionExtensions`](../LocationCharacterMissionExtensions/) | LocationCharacterMissionExtensions 是 SandBox 下的公开类型。 |
| [`LocationItemSpawnHandler`](../LocationItemSpawnHandler/) | LocationItemSpawnHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`LookBackPointData`](../LookBackPointData/) | LookBackPointData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`MachineTypes`](../MachineTypes/) | MachineTypes 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`MainAgentDetectionVM`](../MainAgentDetectionVM/) | MainAgentDetectionVM 是 SandBox.ViewModelCollection.Missions.MainAgentDetection 下的公开类型。 |
| [`MainHeroSaveVisualSupplier`](../MainHeroSaveVisualSupplier/) | MainHeroSaveVisualSupplier 是 SandBox.View 下的公开类型。 |
| [`MainMapCameraMoveEvent`](../MainMapCameraMoveEvent/) | MainMapCameraMoveEvent 是 SandBox.View.Map 下的公开类型。 |
| [`MainQuestTypes`](../MainQuestTypes/) | MainQuestTypes 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`MapArmyTrackItemVM`](../MapArmyTrackItemVM/) | MapArmyTrackItemVM 是 SandBox.ViewModelCollection.Map.Tracker 下的公开类型。 |
| [`MapBarView`](../MapBarView/) | MapBarView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapBasicView`](../MapBasicView/) | MapBasicView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapCameraFadeView`](../MapCameraFadeView/) | MapCameraFadeView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapCameraView`](../MapCameraView/) | MapCameraView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapCampaignOptionsView`](../MapCampaignOptionsView/) | MapCampaignOptionsView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapCheatsView`](../MapCheatsView/) | MapCheatsView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapConversationMission`](../MapConversationMission/) | MapConversationMission 是 SandBox.View.Map 下的公开类型。 |
| [`MapConversationTableau`](../MapConversationTableau/) | MapConversationTableau 是 SandBox.View.Map 下的公开类型。 |
| [`MapConversationTableauData`](../MapConversationTableauData/) | MapConversationTableauData 是一个数据载体，位于 SandBox.View.Map，封装一组字段供系统之间结构化交换状态。 |
| [`MapConversationTextureProvider`](../MapConversationTextureProvider/) | MapConversationTextureProvider 是 SandBox.GauntletUI 下的公开类型。 |
| [`MapConversationView`](../MapConversationView/) | MapConversationView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapCursor`](../MapCursor/) | MapCursor 是 SandBox.View.Map 下的公开类型。 |
| [`MapEncyclopediaView`](../MapEncyclopediaView/) | MapEncyclopediaView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapEntityVisual`](../MapEntityVisual/) | MapEntityVisual 是 SandBox.View.Map.Visuals 下的公开类型。 |
| [`MapEscapeMenuView`](../MapEscapeMenuView/) | MapEscapeMenuView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapEventVisualItemVM`](../MapEventVisualItemVM/) | MapEventVisualItemVM 是 SandBox.ViewModelCollection.Map 下的公开类型。 |
| [`MapEventVisualsView`](../MapEventVisualsView/) | MapEventVisualsView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapEventVisualsVM`](../MapEventVisualsVM/) | MapEventVisualsVM 是 SandBox.ViewModelCollection.Map 下的公开类型。 |
| [`MapEventVisualTypes`](../MapEventVisualTypes/) | MapEventVisualTypes 是 SandBox.ViewModelCollection 下的公开类型。 |
| [`MapGamepadEffectsView`](../MapGamepadEffectsView/) | MapGamepadEffectsView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapIncidentOptionVM`](../MapIncidentOptionVM/) | MapIncidentOptionVM 是 SandBox.ViewModelCollection.Map.Incidents 下的公开类型。 |
| [`MapIncidentView`](../MapIncidentView/) | MapIncidentView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapIncidentVM`](../MapIncidentVM/) | MapIncidentVM 是 SandBox.ViewModelCollection.Map.Incidents 下的公开类型。 |
| [`MapMarkerTrackerItemVM`](../MapMarkerTrackerItemVM/) | MapMarkerTrackerItemVM 是 SandBox.ViewModelCollection.Map.Tracker 下的公开类型。 |
| [`MapMobilePartyTrackItemVM`](../MapMobilePartyTrackItemVM/) | MapMobilePartyTrackItemVM 是 SandBox.ViewModelCollection.Map.Tracker 下的公开类型。 |
| [`MapNavigationElementBase`](../MapNavigationElementBase/) | MapNavigationElementBase 是一个抽象基类，位于 SandBox.View.Map.Navigation，为具体子类提供可重写（override/virtual）的定制点。 |
| [`MapNavigationHandler`](../MapNavigationHandler/) | MapNavigationHandler 是一个处理器，位于 SandBox.View.Map.Navigation，在特定事件发生时执行约定好的响应逻辑。 |
| [`MapNavigationHelper`](../MapNavigationHelper/) | MapNavigationHelper 是一个帮助类，位于 SandBox.View.Map.Navigation，提供不依赖实例状态的静态辅助方法。 |
| [`MapNotificationView`](../MapNotificationView/) | MapNotificationView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapOverlayType`](../MapOverlayType/) | MapOverlayType 是 SandBox.View.Map 下的公开类型。 |
| [`MapOverlayView`](../MapOverlayView/) | MapOverlayView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapParleyAnimationView`](../MapParleyAnimationView/) | MapParleyAnimationView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapPartyNameplateView`](../MapPartyNameplateView/) | MapPartyNameplateView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapReadyView`](../MapReadyView/) | MapReadyView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapSaveView`](../MapSaveView/) | MapSaveView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapSaveVM`](../MapSaveVM/) | MapSaveVM 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`MapScene`](../MapScene/) | MapScene 是 SandBox 下的公开类型。 |
| [`MapSceneCreator`](../MapSceneCreator/) | MapSceneCreator 是 SandBox 下的公开类型。 |
| [`MapSceneHelper`](../MapSceneHelper/) | MapSceneHelper 是一个帮助类，位于 SandBox，提供不依赖实例状态的静态辅助方法。 |
| [`MapScreen`](../MapScreen/) | MapScreen 是 SandBox.View.Map 下的公开类型。 |
| [`MapSettlementNameplateView`](../MapSettlementNameplateView/) | MapSettlementNameplateView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapSiegeOverlayView`](../MapSiegeOverlayView/) | MapSiegeOverlayView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapSiegePOIVM`](../MapSiegePOIVM/) | MapSiegePOIVM 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`MapSiegeProductionMachineVM`](../MapSiegeProductionMachineVM/) | MapSiegeProductionMachineVM 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`MapSiegeProductionVM`](../MapSiegeProductionVM/) | MapSiegeProductionVM 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`MapSiegeVM`](../MapSiegeVM/) | MapSiegeVM 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`MapTrackerCollectionVM`](../MapTrackerCollectionVM/) | MapTrackerCollectionVM 是 SandBox.ViewModelCollection.Map.Tracker 下的公开类型。 |
| [`MapTrackerProvider`](../MapTrackerProvider/) | MapTrackerProvider 是 SandBox.ViewModelCollection.Map.Tracker 下的公开类型。 |
| [`MapTrackersView`](../MapTrackersView/) | MapTrackersView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapTracksVisualManager`](../MapTracksVisualManager/) | MapTracksVisualManager 是一个管理器，位于 SandBox.View.Map.Managers，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`MapView`](../MapView/) | MapView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MapViewsContainer`](../MapViewsContainer/) | MapViewsContainer 是 SandBox.View.Map 下的公开类型。 |
| [`MapWeatherVisual`](../MapWeatherVisual/) | MapWeatherVisual 是 SandBox.View.Map.Visuals 下的公开类型。 |
| [`MapWeatherVisualManager`](../MapWeatherVisualManager/) | MapWeatherVisualManager 是一个管理器，位于 SandBox.View.Map.Managers，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`MarriageOfferPopupView`](../MarriageOfferPopupView/) | MarriageOfferPopupView 是一个视图层对象，位于 SandBox.View.Map，负责把游戏状态投影到屏幕或场景。 |
| [`MenuBackgroundView`](../MenuBackgroundView/) | MenuBackgroundView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuBaseView`](../MenuBaseView/) | MenuBaseView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuOverlayBaseView`](../MenuOverlayBaseView/) | MenuOverlayBaseView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuRecruitVolunteersView`](../MenuRecruitVolunteersView/) | MenuRecruitVolunteersView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuTournamentLeaderboardView`](../MenuTournamentLeaderboardView/) | MenuTournamentLeaderboardView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuTownManagementView`](../MenuTownManagementView/) | MenuTownManagementView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuTroopSelectionView`](../MenuTroopSelectionView/) | MenuTroopSelectionView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuView`](../MenuView/) | MenuView 是一个视图层对象，位于 SandBox.View.Menu，负责把游戏状态投影到屏幕或场景。 |
| [`MenuViewContext`](../MenuViewContext/) | MenuViewContext 是 SandBox.View.Menu 下的公开类型。 |
| [`MissionAgentAlarmStateView`](../MissionAgentAlarmStateView/) | MissionAgentAlarmStateView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionAgentAlarmStateVM`](../MissionAgentAlarmStateVM/) | MissionAgentAlarmStateVM 是 SandBox.ViewModelCollection.Missions 下的公开类型。 |
| [`MissionAgentAlarmTargetVM`](../MissionAgentAlarmTargetVM/) | MissionAgentAlarmTargetVM 是 SandBox.ViewModelCollection.Missions 下的公开类型。 |
| [`MissionAgentHandler`](../MissionAgentHandler/) | MissionAgentHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionAgentLookHandler`](../MissionAgentLookHandler/) | MissionAgentLookHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionAgentMarkerTargetVM`](../MissionAgentMarkerTargetVM/) | MissionAgentMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MissionAIActivationDeactivationEventListenerLogic`](../MissionAIActivationDeactivationEventListenerLogic/) | MissionAIActivationDeactivationEventListenerLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionEvents，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionAlleyHandler`](../MissionAlleyHandler/) | MissionAlleyHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionAnimatedBasicAreaIndicatorMarkerTargetVM`](../MissionAnimatedBasicAreaIndicatorMarkerTargetVM/) | MissionAnimatedBasicAreaIndicatorMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MissionArenaPracticeFightView`](../MissionArenaPracticeFightView/) | MissionArenaPracticeFightView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionArenaPracticeFightVM`](../MissionArenaPracticeFightVM/) | MissionArenaPracticeFightVM 是 SandBox.ViewModelCollection.Missions 下的公开类型。 |
| [`MissionAudienceHandler`](../MissionAudienceHandler/) | MissionAudienceHandler 是一个处理器，位于 SandBox.View.Missions，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionBasicAreaIndicatorMarkerTargetVM`](../MissionBasicAreaIndicatorMarkerTargetVM/) | MissionBasicAreaIndicatorMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MissionBasicTeamLogic`](../MissionBasicTeamLogic/) | MissionBasicTeamLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionBoardGameDebugHandler`](../MissionBoardGameDebugHandler/) | MissionBoardGameDebugHandler 是一个处理器，位于 SandBox.BoardGames.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionBoardGameLogic`](../MissionBoardGameLogic/) | MissionBoardGameLogic 是一个行为逻辑类，位于 SandBox.BoardGames.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionCampaignBattleSpectatorView`](../MissionCampaignBattleSpectatorView/) | MissionCampaignBattleSpectatorView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionCampaignView`](../MissionCampaignView/) | MissionCampaignView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionCaravanOrVillagerTacticsHandler`](../MissionCaravanOrVillagerTacticsHandler/) | MissionCaravanOrVillagerTacticsHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionCommonAreaMarkerTargetVM`](../MissionCommonAreaMarkerTargetVM/) | MissionCommonAreaMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MissionConversationCameraView`](../MissionConversationCameraView/) | MissionConversationCameraView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionConversationLogic`](../MissionConversationLogic/) | MissionConversationLogic 是一个行为逻辑类，位于 SandBox.Conversation.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionConversationPrepareView`](../MissionConversationPrepareView/) | MissionConversationPrepareView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionCrimeHandler`](../MissionCrimeHandler/) | MissionCrimeHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionCustomCameraView`](../MissionCustomCameraView/) | MissionCustomCameraView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionDisguiseMarkerItemVM`](../MissionDisguiseMarkerItemVM/) | MissionDisguiseMarkerItemVM 是 SandBox.ViewModelCollection.Missions.MainAgentDetection 下的公开类型。 |
| [`MissionDisguiseMarkersVM`](../MissionDisguiseMarkersVM/) | MissionDisguiseMarkersVM 是 SandBox.ViewModelCollection.Missions.MainAgentDetection 下的公开类型。 |
| [`MissionEquipItemToolView`](../MissionEquipItemToolView/) | MissionEquipItemToolView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionFightHandler`](../MissionFightHandler/) | MissionFightHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionGauntletAgentAlarmStateView`](../MissionGauntletAgentAlarmStateView/) | MissionGauntletAgentAlarmStateView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletArenaPracticeFightView`](../MissionGauntletArenaPracticeFightView/) | MissionGauntletArenaPracticeFightView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletBarterView`](../MissionGauntletBarterView/) | MissionGauntletBarterView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletBoardGameView`](../MissionGauntletBoardGameView/) | MissionGauntletBoardGameView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletCheatView`](../MissionGauntletCheatView/) | MissionGauntletCheatView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletConversationView`](../MissionGauntletConversationView/) | MissionGauntletConversationView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletEavesdroppingCameraView`](../MissionGauntletEavesdroppingCameraView/) | MissionGauntletEavesdroppingCameraView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletHideoutAmbushCinematicView`](../MissionGauntletHideoutAmbushCinematicView/) | MissionGauntletHideoutAmbushCinematicView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletNameMarkerView`](../MissionGauntletNameMarkerView/) | MissionGauntletNameMarkerView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletObjectiveView`](../MissionGauntletObjectiveView/) | MissionGauntletObjectiveView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletQuestBarView`](../MissionGauntletQuestBarView/) | MissionGauntletQuestBarView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletStoryModeCheatView`](../MissionGauntletStoryModeCheatView/) | MissionGauntletStoryModeCheatView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGauntletTournamentView`](../MissionGauntletTournamentView/) | MissionGauntletTournamentView 是一个视图层对象，位于 SandBox.GauntletUI.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionGenericMarkerTargetVM`](../MissionGenericMarkerTargetVM/) | MissionGenericMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MissionHelper`](../MissionHelper/) | MissionHelper 是一个帮助类，位于 SandBox，提供不依赖实例状态的静态辅助方法。 |
| [`MissionHideoutAmbushCinematicView`](../MissionHideoutAmbushCinematicView/) | MissionHideoutAmbushCinematicView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionHideoutCinematicView`](../MissionHideoutCinematicView/) | MissionHideoutCinematicView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionItemCalatogView`](../MissionItemCalatogView/) | MissionItemCalatogView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionLocationLogic`](../MissionLocationLogic/) | MissionLocationLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionLosingTargetVM`](../MissionLosingTargetVM/) | MissionLosingTargetVM 是 SandBox.ViewModelCollection.Missions.MainAgentDetection 下的公开类型。 |
| [`MissionMainAgentDetectionView`](../MissionMainAgentDetectionView/) | MissionMainAgentDetectionView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionNameMarkerFactory`](../MissionNameMarkerFactory/) | MissionNameMarkerFactory 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`MissionNameMarkerHelper`](../MissionNameMarkerHelper/) | MissionNameMarkerHelper 是一个帮助类，位于 SandBox.ViewModelCollection.Missions.NameMarker，提供不依赖实例状态的静态辅助方法。 |
| [`MissionNameMarkerProvider`](../MissionNameMarkerProvider/) | MissionNameMarkerProvider 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`MissionNameMarkerTargetBaseVM`](../MissionNameMarkerTargetBaseVM/) | MissionNameMarkerTargetBaseVM 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`MissionNameMarkerTargetVM`](../MissionNameMarkerTargetVM/) | MissionNameMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`MissionNameMarkerToggleEvent`](../MissionNameMarkerToggleEvent/) | MissionNameMarkerToggleEvent 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`MissionNameMarkerUIHandler`](../MissionNameMarkerUIHandler/) | MissionNameMarkerUIHandler 是一个处理器，位于 SandBox.View.Missions.NameMarkers，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionNameMarkerVM`](../MissionNameMarkerVM/) | MissionNameMarkerVM 是 SandBox.ViewModelCollection.Missions.NameMarker 下的公开类型。 |
| [`MissionPassageUsePointNameMarkerTargetVM`](../MissionPassageUsePointNameMarkerTargetVM/) | MissionPassageUsePointNameMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MissionPathGenerationLogic`](../MissionPathGenerationLogic/) | MissionPathGenerationLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionPreloadView`](../MissionPreloadView/) | MissionPreloadView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionQuestBarView`](../MissionQuestBarView/) | MissionQuestBarView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionQuestBarVM`](../MissionQuestBarVM/) | MissionQuestBarVM 是 SandBox.ViewModelCollection.Missions 下的公开类型。 |
| [`MissionSettlementPrepareLogic`](../MissionSettlementPrepareLogic/) | MissionSettlementPrepareLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`MissionSettlementPrepareView`](../MissionSettlementPrepareView/) | MissionSettlementPrepareView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionSingleplayerViewHandler`](../MissionSingleplayerViewHandler/) | MissionSingleplayerViewHandler 是一个处理器，位于 SandBox.View.Missions，在特定事件发生时执行约定好的响应逻辑。 |
| [`MissionSoundParametersView`](../MissionSoundParametersView/) | MissionSoundParametersView 是一个视图层对象，位于 SandBox.View.Missions，负责把游戏状态投影到屏幕或场景。 |
| [`MissionStealthAreaNameMarkerTargetVM`](../MissionStealthAreaNameMarkerTargetVM/) | MissionStealthAreaNameMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout 下的公开类型。 |
| [`MissionStealthAreaUsePointNameMarkerTargetVM`](../MissionStealthAreaUsePointNameMarkerTargetVM/) | MissionStealthAreaUsePointNameMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout 下的公开类型。 |
| [`MissionStealthSentryNameMarkerTargetVM`](../MissionStealthSentryNameMarkerTargetVM/) | MissionStealthSentryNameMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout 下的公开类型。 |
| [`MissionTournamentJoustingView`](../MissionTournamentJoustingView/) | MissionTournamentJoustingView 是一个视图层对象，位于 SandBox.View.Missions.Tournaments，负责把游戏状态投影到屏幕或场景。 |
| [`MissionTournamentView`](../MissionTournamentView/) | MissionTournamentView 是一个视图层对象，位于 SandBox.View.Missions.Tournaments，负责把游戏状态投影到屏幕或场景。 |
| [`MissionWorkshopNameMarkerTargetVM`](../MissionWorkshopNameMarkerTargetVM/) | MissionWorkshopNameMarkerTargetVM 是 SandBox.ViewModelCollection.Missions.NameMarker.Targets 下的公开类型。 |
| [`MobilePartyVisual`](../MobilePartyVisual/) | MobilePartyVisual 是 SandBox.View.Map.Visuals 下的公开类型。 |
| [`MobilePartyVisualManager`](../MobilePartyVisualManager/) | MobilePartyVisualManager 是一个管理器，位于 SandBox.View.Map.Managers，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`MountAgentLogic`](../MountAgentLogic/) | MountAgentLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`Move`](../Move/) | Move 是 SandBox.BoardGames 下的公开类型。 |
| [`MovementState`](../MovementState/) | MovementState 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`MusicArenaPracticeMissionView`](../MusicArenaPracticeMissionView/) | MusicArenaPracticeMissionView 是一个视图层对象，位于 SandBox.View.Missions.Sound.Components，负责把游戏状态投影到屏幕或场景。 |
| [`MusicianGroup`](../MusicianGroup/) | MusicianGroup 是 SandBox.Objects.Usables 下的公开类型。 |
| [`MusicTournamentMissionView`](../MusicTournamentMissionView/) | MusicTournamentMissionView 是一个视图层对象，位于 SandBox.View.Missions.Sound.Components，负责把游戏状态投影到屏幕或场景。 |
| [`NameplateDistanceComparer`](../NameplateDistanceComparer/) | NameplateDistanceComparer 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`NameplateVM`](../NameplateVM/) | NameplateVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`NavigationPathData`](../NavigationPathData/) | NavigationPathData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`NavigationState`](../NavigationState/) | NavigationState 是 SandBox 下的公开类型。 |
| [`NotableSpawnPointHandler`](../NotableSpawnPointHandler/) | NotableSpawnPointHandler 是一个处理器，位于 SandBox.Missions.AgentBehaviors，在特定事件发生时执行约定好的响应逻辑。 |
| [`NotableWantsDaughterFoundIssue`](../NotableWantsDaughterFoundIssue/) | NotableWantsDaughterFoundIssue 是 SandBox.Issues 下的公开类型。 |
| [`NotableWantsDaughterFoundIssueBehavior`](../NotableWantsDaughterFoundIssueBehavior/) | NotableWantsDaughterFoundIssueBehavior 是 SandBox.Issues 下的公开类型。 |
| [`NotableWantsDaughterFoundIssueQuest`](../NotableWantsDaughterFoundIssueQuest/) | NotableWantsDaughterFoundIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`NotableWantsDaughterFoundIssueTypeDefiner`](../NotableWantsDaughterFoundIssueTypeDefiner/) | NotableWantsDaughterFoundIssueTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`OnStealthMissionCounterFailedEvent`](../OnStealthMissionCounterFailedEvent/) | OnStealthMissionCounterFailedEvent 是 SandBox.Missions 下的公开类型。 |
| [`OpenInventoryWithGivenItemsEventListenerLogic`](../OpenInventoryWithGivenItemsEventListenerLogic/) | OpenInventoryWithGivenItemsEventListenerLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionEvents，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`OtherMissionViews`](../OtherMissionViews/) | OtherMissionViews 是 SandBox.View.Missions 下的公开类型。 |
| [`PartyMarkerItemComparer`](../PartyMarkerItemComparer/) | PartyMarkerItemComparer 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`PartyNameplatesVM`](../PartyNameplatesVM/) | PartyNameplatesVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`PartyNameplateVM`](../PartyNameplateVM/) | PartyNameplateVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`PartyNavigationElement`](../PartyNavigationElement/) | PartyNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`Passage`](../Passage/) | Passage 是 SandBox.Objects.Usables 下的公开类型。 |
| [`PassageAI`](../PassageAI/) | PassageAI 是 SandBox.AI 下的公开类型。 |
| [`PassageUsePoint`](../PassageUsePoint/) | PassageUsePoint 是 SandBox.Objects 下的公开类型。 |
| [`PatrolAgentBehavior`](../PatrolAgentBehavior/) | PatrolAgentBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`PatrolArea`](../PatrolArea/) | PatrolArea 是 SandBox.Objects.Usables 下的公开类型。 |
| [`PatrollingGuardBehavior`](../PatrollingGuardBehavior/) | PatrollingGuardBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`PatrolPoint`](../PatrolPoint/) | PatrolPoint 是 SandBox.Objects 下的公开类型。 |
| [`PawnBaghChal`](../PawnBaghChal/) | PawnBaghChal 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`PawnBase`](../PawnBase/) | PawnBase 是一个抽象基类，位于 SandBox.BoardGames.Pawns，为具体子类提供可重写（override/virtual）的定制点。 |
| [`PawnInformation`](../PawnInformation/) | PawnInformation 是 SandBox.BoardGames 下的公开类型。 |
| [`PawnKonane`](../PawnKonane/) | PawnKonane 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`PawnMuTorere`](../PawnMuTorere/) | PawnMuTorere 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`PawnPuluc`](../PawnPuluc/) | PawnPuluc 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`PawnSeega`](../PawnSeega/) | PawnSeega 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`PawnTablut`](../PawnTablut/) | PawnTablut 是 SandBox.BoardGames.Pawns 下的公开类型。 |
| [`PerkObjectComparer`](../PerkObjectComparer/) | PerkObjectComparer 是 SandBox.ViewModelCollection 下的公开类型。 |
| [`PlayerStartEngineConstructionEvent`](../PlayerStartEngineConstructionEvent/) | PlayerStartEngineConstructionEvent 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`PlayerTurn`](../PlayerTurn/) | PlayerTurn 是 SandBox.BoardGames 下的公开类型。 |
| [`PlayMusicPoint`](../PlayMusicPoint/) | PlayMusicPoint 是 SandBox.Objects.AnimationPoints 下的公开类型。 |
| [`PointOfInterestBaseData`](../PointOfInterestBaseData/) | PointOfInterestBaseData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`PointOfInterests`](../PointOfInterests/) | PointOfInterests 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`PointOfInterestScorePair`](../PointOfInterestScorePair/) | PointOfInterestScorePair 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`POIType`](../POIType/) | POIType 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`PrisonBreakCampaignBehavior`](../PrisonBreakCampaignBehavior/) | PrisonBreakCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`PrisonBreakMissionController`](../PrisonBreakMissionController/) | PrisonBreakMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics.Towns，接收输入后把系统推向下一个状态。 |
| [`PrisonerSoldNotificationItemVM`](../PrisonerSoldNotificationItemVM/) | PrisonerSoldNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`ProdigalSonIssue`](../ProdigalSonIssue/) | ProdigalSonIssue 是 SandBox.Issues 下的公开类型。 |
| [`ProdigalSonIssueBehavior`](../ProdigalSonIssueBehavior/) | ProdigalSonIssueBehavior 是 SandBox.Issues 下的公开类型。 |
| [`ProdigalSonIssueQuest`](../ProdigalSonIssueQuest/) | ProdigalSonIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`ProdigalSonIssueTypeDefiner`](../ProdigalSonIssueTypeDefiner/) | ProdigalSonIssueTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`QuestsNavigationElement`](../QuestsNavigationElement/) | QuestsNavigationElement 是 SandBox.View.Map.Navigation.NavigationElements 下的公开类型。 |
| [`RecruitmentAgentSpawnBehavior`](../RecruitmentAgentSpawnBehavior/) | RecruitmentAgentSpawnBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`RelationType`](../RelationType/) | RelationType 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`RetirementCampaignBehavior`](../RetirementCampaignBehavior/) | RetirementCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`RetirementMissionLogic`](../RetirementMissionLogic/) | RetirementMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`RivalGangMovingInIssue`](../RivalGangMovingInIssue/) | RivalGangMovingInIssue 是 SandBox.Issues 下的公开类型。 |
| [`RivalGangMovingInIssueBehavior`](../RivalGangMovingInIssueBehavior/) | RivalGangMovingInIssueBehavior 是 SandBox.Issues 下的公开类型。 |
| [`RivalGangMovingInIssueQuest`](../RivalGangMovingInIssueQuest/) | RivalGangMovingInIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`RivalGangMovingInIssueTypeDefiner`](../RivalGangMovingInIssueTypeDefiner/) | RivalGangMovingInIssueTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`RotateObjectScript`](../RotateObjectScript/) | RotateObjectScript 是 SandBox.Missions 下的公开类型。 |
| [`RuralNotableInnAndOutIssue`](../RuralNotableInnAndOutIssue/) | RuralNotableInnAndOutIssue 是 SandBox.Issues 下的公开类型。 |
| [`RuralNotableInnAndOutIssueBehavior`](../RuralNotableInnAndOutIssueBehavior/) | RuralNotableInnAndOutIssueBehavior 是 SandBox.Issues 下的公开类型。 |
| [`RuralNotableInnAndOutIssueQuest`](../RuralNotableInnAndOutIssueQuest/) | RuralNotableInnAndOutIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`RuralNotableInnAndOutIssueTypeDefiner`](../RuralNotableInnAndOutIssueTypeDefiner/) | RuralNotableInnAndOutIssueTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`SabotageMissionController`](../SabotageMissionController/) | SabotageMissionController 是一个控制器，位于 SandBox.Missions，接收输入后把系统推向下一个状态。 |
| [`SandboxAgentApplyDamageModel`](../SandboxAgentApplyDamageModel/) | SandboxAgentApplyDamageModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxAgentDecideKilledOrUnconsciousModel`](../SandboxAgentDecideKilledOrUnconsciousModel/) | SandboxAgentDecideKilledOrUnconsciousModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxAgentStatCalculateModel`](../SandboxAgentStatCalculateModel/) | SandboxAgentStatCalculateModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxApplyWeatherEffectsModel`](../SandboxApplyWeatherEffectsModel/) | SandboxApplyWeatherEffectsModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxAutoBlockModel`](../SandboxAutoBlockModel/) | SandboxAutoBlockModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxBattleBannerBearersModel`](../SandboxBattleBannerBearersModel/) | SandboxBattleBannerBearersModel 是一个规则模型，位于 SandBox，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxBattleInitializationModel`](../SandboxBattleInitializationModel/) | SandboxBattleInitializationModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandBoxBattleMissionSpawnHandler`](../SandBoxBattleMissionSpawnHandler/) | SandBoxBattleMissionSpawnHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`SandboxBattleMoraleModel`](../SandboxBattleMoraleModel/) | SandboxBattleMoraleModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandboxBattleSpawnModel`](../SandboxBattleSpawnModel/) | SandboxBattleSpawnModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandBoxGameManager`](../SandBoxGameManager/) | SandBoxGameManager 是一个管理器，位于 SandBox，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`SandBoxGauntletUISubModule`](../SandBoxGauntletUISubModule/) | SandBoxGauntletUISubModule 是 SandBox.GauntletUI 下的公开类型。 |
| [`SandboxGeneralsAndCaptainsAssignmentLogic`](../SandboxGeneralsAndCaptainsAssignmentLogic/) | SandboxGeneralsAndCaptainsAssignmentLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`SandBoxHelpers`](../SandBoxHelpers/) | SandBoxHelpers 是 SandBox 下的公开类型。 |
| [`SandboxHighlightsController`](../SandboxHighlightsController/) | SandboxHighlightsController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`SandboxMissionDifficultyModel`](../SandboxMissionDifficultyModel/) | SandboxMissionDifficultyModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandBoxMissionHandler`](../SandBoxMissionHandler/) | SandBoxMissionHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`SandBoxMissionManager`](../SandBoxMissionManager/) | SandBoxMissionManager 是一个管理器，位于 SandBox，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`SandBoxMissions`](../SandBoxMissions/) | SandBoxMissions 是 SandBox 下的公开类型。 |
| [`SandBoxMissionSpawnHandler`](../SandBoxMissionSpawnHandler/) | SandBoxMissionSpawnHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`SandBoxMissionViews`](../SandBoxMissionViews/) | SandBoxMissionViews 是 SandBox.View.Missions 下的公开类型。 |
| [`SandBoxSallyOutMissionController`](../SandBoxSallyOutMissionController/) | SandBoxSallyOutMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`SandBoxSaveHelper`](../SandBoxSaveHelper/) | SandBoxSaveHelper 是一个帮助类，位于 SandBox，提供不依赖实例状态的静态辅助方法。 |
| [`SandBoxSaveManager`](../SandBoxSaveManager/) | SandBoxSaveManager 是一个管理器，位于 SandBox，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`SandboxSceneNotificationContextProvider`](../SandboxSceneNotificationContextProvider/) | SandboxSceneNotificationContextProvider 是 SandBox.GauntletUI 下的公开类型。 |
| [`SandBoxSiegeMissionSpawnHandler`](../SandBoxSiegeMissionSpawnHandler/) | SandBoxSiegeMissionSpawnHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`SandboxStrikeMagnitudeModel`](../SandboxStrikeMagnitudeModel/) | SandboxStrikeMagnitudeModel 是一个规则模型，位于 SandBox.GameComponents，定义“系统该如何计算”；mod 开发者常用继承或替换来改变规则。 |
| [`SandBoxSubModule`](../SandBoxSubModule/) | SandBoxSubModule 是 SandBox 下的公开类型。 |
| [`SandBoxUIHelper`](../SandBoxUIHelper/) | SandBoxUIHelper 是一个帮助类，位于 SandBox.ViewModelCollection，提供不依赖实例状态的静态辅助方法。 |
| [`SandboxView`](../SandboxView/) | SandboxView 是一个视图层对象，位于 SandBox.View，负责把游戏状态投影到屏幕或场景。 |
| [`SandBoxViewCheats`](../SandBoxViewCheats/) | SandBoxViewCheats 是 SandBox.View 下的公开类型。 |
| [`SandBoxViewCreator`](../SandBoxViewCreator/) | SandBoxViewCreator 是 SandBox.View 下的公开类型。 |
| [`SandBoxViewSubModule`](../SandBoxViewSubModule/) | SandBoxViewSubModule 是 SandBox.View 下的公开类型。 |
| [`SandBoxViewVisualManager`](../SandBoxViewVisualManager/) | SandBoxViewVisualManager 是一个管理器，位于 SandBox.View，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`SaveableSandBoxTypeDefiner`](../SaveableSandBoxTypeDefiner/) | SaveableSandBoxTypeDefiner 是 SandBox 下的公开类型。 |
| [`SavedGameGroupVM`](../SavedGameGroupVM/) | SavedGameGroupVM 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`SavedGameModuleInfoVM`](../SavedGameModuleInfoVM/) | SavedGameModuleInfoVM 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`SavedGameProperty`](../SavedGameProperty/) | SavedGameProperty 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`SavedGamePropertyVM`](../SavedGamePropertyVM/) | SavedGamePropertyVM 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`SavedGameVM`](../SavedGameVM/) | SavedGameVM 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`SaveHelperState`](../SaveHelperState/) | SaveHelperState 是 SandBox 下的公开类型。 |
| [`SaveLoadScreen`](../SaveLoadScreen/) | SaveLoadScreen 是 SandBox.View 下的公开类型。 |
| [`SaveLoadVM`](../SaveLoadVM/) | SaveLoadVM 是 SandBox.ViewModelCollection.SaveLoad 下的公开类型。 |
| [`SceneType`](../SceneType/) | SceneType 是 SandBox.View.Missions.SandBox 下的公开类型。 |
| [`ScriptBehavior`](../ScriptBehavior/) | ScriptBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`SearchBodyMissionHandler`](../SearchBodyMissionHandler/) | SearchBodyMissionHandler 是一个处理器，位于 SandBox.Missions.MissionLogics，在特定事件发生时执行约定好的响应逻辑。 |
| [`SettlementEventType`](../SettlementEventType/) | SettlementEventType 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementMusicData`](../SettlementMusicData/) | SettlementMusicData 是一个数据载体，位于 SandBox.Objects，封装一组字段供系统之间结构化交换状态。 |
| [`SettlementMusiciansCampaignBehavior`](../SettlementMusiciansCampaignBehavior/) | SettlementMusiciansCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`SettlementNameplateEventItemVM`](../SettlementNameplateEventItemVM/) | SettlementNameplateEventItemVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementNameplateEventsVM`](../SettlementNameplateEventsVM/) | SettlementNameplateEventsVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementNameplateNotificationsVM`](../SettlementNameplateNotificationsVM/) | SettlementNameplateNotificationsVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`SettlementNameplatePartyMarkerItemVM`](../SettlementNameplatePartyMarkerItemVM/) | SettlementNameplatePartyMarkerItemVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementNameplatePartyMarkersVM`](../SettlementNameplatePartyMarkersVM/) | SettlementNameplatePartyMarkersVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementNameplatesVM`](../SettlementNameplatesVM/) | SettlementNameplatesVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementNameplateVM`](../SettlementNameplateVM/) | SettlementNameplateVM 是 SandBox.ViewModelCollection.Nameplate 下的公开类型。 |
| [`SettlementNotificationItemBaseVM`](../SettlementNotificationItemBaseVM/) | SettlementNotificationItemBaseVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications 下的公开类型。 |
| [`SettlementPositionScript`](../SettlementPositionScript/) | SettlementPositionScript 是 SandBox.View.Map 下的公开类型。 |
| [`SettlementVisual`](../SettlementVisual/) | SettlementVisual 是 SandBox.View.Map.Visuals 下的公开类型。 |
| [`SettlementVisualManager`](../SettlementVisualManager/) | SettlementVisualManager 是一个管理器，位于 SandBox.View.Map.Managers，拥有子系统的生命周期、查找接口和跨对象协调职责。 |
| [`ShadowingAgentOffenseInfo`](../ShadowingAgentOffenseInfo/) | ShadowingAgentOffenseInfo 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`ShadowingSecureZoneUsePoint`](../ShadowingSecureZoneUsePoint/) | ShadowingSecureZoneUsePoint 是 SandBox.Objects.Usables 下的公开类型。 |
| [`ShipSoldNotificationItemVM`](../ShipSoldNotificationItemVM/) | ShipSoldNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`ShowQuickInformationEventListenerLogic`](../ShowQuickInformationEventListenerLogic/) | ShowQuickInformationEventListenerLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionEvents，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`SiegePOIDistanceComparer`](../SiegePOIDistanceComparer/) | SiegePOIDistanceComparer 是 SandBox.ViewModelCollection.MapSiege 下的公开类型。 |
| [`SittableType`](../SittableType/) | SittableType 是 SandBox.Objects.Usables 下的公开类型。 |
| [`SkeletonAnimatedCamera`](../SkeletonAnimatedCamera/) | SkeletonAnimatedCamera 是 SandBox.Objects.Cinematics 下的公开类型。 |
| [`SmithingMachine`](../SmithingMachine/) | SmithingMachine 是 SandBox.Objects.Usables 下的公开类型。 |
| [`SnareTheWealthyIssue`](../SnareTheWealthyIssue/) | SnareTheWealthyIssue 是 SandBox.Issues 下的公开类型。 |
| [`SnareTheWealthyIssueBehavior`](../SnareTheWealthyIssueBehavior/) | SnareTheWealthyIssueBehavior 是 SandBox.Issues 下的公开类型。 |
| [`SnareTheWealthyIssueQuest`](../SnareTheWealthyIssueQuest/) | SnareTheWealthyIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`SnareTheWealthyIssueTypeDefiner`](../SnareTheWealthyIssueTypeDefiner/) | SnareTheWealthyIssueTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`SnowAndRainTextureDefiner`](../SnowAndRainTextureDefiner/) | SnowAndRainTextureDefiner 是 SandBox.View.Map 下的公开类型。 |
| [`SoundParameterMissionCulture`](../SoundParameterMissionCulture/) | SoundParameterMissionCulture 是 SandBox.View.Missions 下的公开类型。 |
| [`SpawnPointDebugView`](../SpawnPointDebugView/) | SpawnPointDebugView 是一个视图层对象，位于 SandBox.View.Missions.SandBox，负责把游戏状态投影到屏幕或场景。 |
| [`SpawnPointUnits`](../SpawnPointUnits/) | SpawnPointUnits 是 SandBox.View.Missions.SandBox 下的公开类型。 |
| [`SPOrderOfBattleVM`](../SPOrderOfBattleVM/) | SPOrderOfBattleVM 是 SandBox.ViewModelCollection 下的公开类型。 |
| [`SPScoreboardVM`](../SPScoreboardVM/) | SPScoreboardVM 是 SandBox.ViewModelCollection 下的公开类型。 |
| [`StandGuardBehavior`](../StandGuardBehavior/) | StandGuardBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`StandingGuardSpawnData`](../StandingGuardSpawnData/) | StandingGuardSpawnData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`StatCategory`](../StatCategory/) | StatCategory 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`StatisticsCampaignBehavior`](../StatisticsCampaignBehavior/) | StatisticsCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`StatItem`](../StatItem/) | StatItem 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`StatType`](../StatType/) | StatType 是 SandBox.ViewModelCollection.GameOver 下的公开类型。 |
| [`StealthAreaData`](../StealthAreaData/) | StealthAreaData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`StealthAreaMarker`](../StealthAreaMarker/) | StealthAreaMarker 是 SandBox.Objects.AreaMarkers 下的公开类型。 |
| [`StealthAreaMissionLogic`](../StealthAreaMissionLogic/) | StealthAreaMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`StealthAreaUsePoint`](../StealthAreaUsePoint/) | StealthAreaUsePoint 是 SandBox.Objects.Usables 下的公开类型。 |
| [`StealthCharactersCampaignBehavior`](../StealthCharactersCampaignBehavior/) | StealthCharactersCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`StealthFailCounterMissionLogic`](../StealthFailCounterMissionLogic/) | StealthFailCounterMissionLogic 是一个行为逻辑类，位于 SandBox.Missions，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`StealthIndoorLightingArea`](../StealthIndoorLightingArea/) | StealthIndoorLightingArea 是 SandBox.Objects 下的公开类型。 |
| [`StealthMissionController`](../StealthMissionController/) | StealthMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`StealthMissionUIHandler`](../StealthMissionUIHandler/) | StealthMissionUIHandler 是一个处理器，位于 SandBox.View.Missions，在特定事件发生时执行约定好的响应逻辑。 |
| [`StealthNameMarkerProvider`](../StealthNameMarkerProvider/) | StealthNameMarkerProvider 是 SandBox.View.Missions.NameMarkers 下的公开类型。 |
| [`StealthOffenseTypes`](../StealthOffenseTypes/) | StealthOffenseTypes 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`StealthPatrolPointMissionLogic`](../StealthPatrolPointMissionLogic/) | StealthPatrolPointMissionLogic 是一个行为逻辑类，位于 SandBox.Missions.MissionLogics，响应事件、驱动流程并在关键节点更新系统状态。 |
| [`StealthZone`](../StealthZone/) | StealthZone 是 SandBox.Objects 下的公开类型。 |
| [`SuspectNpc`](../SuspectNpc/) | SuspectNpc 是 SandBox.Issues 下的公开类型。 |
| [`TalkBehavior`](../TalkBehavior/) | TalkBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`TavernEmployeesCampaignBehavior`](../TavernEmployeesCampaignBehavior/) | TavernEmployeesCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`TeleportType`](../TeleportType/) | TeleportType 是 SandBox.Objects 下的公开类型。 |
| [`TeleportUsePoint`](../TeleportUsePoint/) | TeleportUsePoint 是 SandBox.Objects 下的公开类型。 |
| [`TheSpyPartyIssue`](../TheSpyPartyIssue/) | TheSpyPartyIssue 是 SandBox.Issues 下的公开类型。 |
| [`TheSpyPartyIssueQuest`](../TheSpyPartyIssueQuest/) | TheSpyPartyIssueQuest 是 SandBox.Issues 下的公开类型。 |
| [`TheSpyPartyIssueQuestBehavior`](../TheSpyPartyIssueQuestBehavior/) | TheSpyPartyIssueQuestBehavior 是 SandBox.Issues 下的公开类型。 |
| [`TheSpyPartyIssueQuestTypeDefiner`](../TheSpyPartyIssueQuestTypeDefiner/) | TheSpyPartyIssueQuestTypeDefiner 是 SandBox.Issues 下的公开类型。 |
| [`Tile`](../Tile/) | Tile 是 SandBox.BoardGames.Objects 下的公开类型。 |
| [`Tile1D`](../Tile1D/) | Tile1D 是 SandBox.BoardGames.Tiles 下的公开类型。 |
| [`Tile2D`](../Tile2D/) | Tile2D 是 SandBox.BoardGames.Tiles 下的公开类型。 |
| [`TileBase`](../TileBase/) | TileBase 是一个抽象基类，位于 SandBox.BoardGames.Tiles，为具体子类提供可重写（override/virtual）的定制点。 |
| [`TileBaseInformation`](../TileBaseInformation/) | TileBaseInformation 是 SandBox.BoardGames 下的公开类型。 |
| [`TileMuTorere`](../TileMuTorere/) | TileMuTorere 是 SandBox.BoardGames.Tiles 下的公开类型。 |
| [`TilePuluc`](../TilePuluc/) | TilePuluc 是 SandBox.BoardGames.Tiles 下的公开类型。 |
| [`TournamentArcheryMissionController`](../TournamentArcheryMissionController/) | TournamentArcheryMissionController 是一个控制器，位于 SandBox.Tournaments.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`TournamentBehavior`](../TournamentBehavior/) | TournamentBehavior 是 SandBox.Tournaments.MissionLogics 下的公开类型。 |
| [`TournamentFightMissionController`](../TournamentFightMissionController/) | TournamentFightMissionController 是一个控制器，位于 SandBox.Tournaments.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`TournamentJoustingMissionController`](../TournamentJoustingMissionController/) | TournamentJoustingMissionController 是一个控制器，位于 SandBox.Tournaments.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`TournamentMatchState`](../TournamentMatchState/) | TournamentMatchState 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TournamentMatchVM`](../TournamentMatchVM/) | TournamentMatchVM 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TournamentMissionStarter`](../TournamentMissionStarter/) | TournamentMissionStarter 是 SandBox.Tournaments 下的公开类型。 |
| [`TournamentMissionViews`](../TournamentMissionViews/) | TournamentMissionViews 是 SandBox.View.Missions.Tournaments 下的公开类型。 |
| [`TournamentParticipantVM`](../TournamentParticipantVM/) | TournamentParticipantVM 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TournamentPlayerState`](../TournamentPlayerState/) | TournamentPlayerState 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TournamentRewardVM`](../TournamentRewardVM/) | TournamentRewardVM 是 SandBox.ViewModelCollection 下的公开类型。 |
| [`TournamentRoundVM`](../TournamentRoundVM/) | TournamentRoundVM 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TournamentTeamVM`](../TournamentTeamVM/) | TournamentTeamVM 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TournamentVM`](../TournamentVM/) | TournamentVM 是 SandBox.ViewModelCollection.Tournament 下的公开类型。 |
| [`TownCenterMissionController`](../TownCenterMissionController/) | TownCenterMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics.Towns，接收输入后把系统推向下一个状态。 |
| [`TownHorseRaceAgentController`](../TownHorseRaceAgentController/) | TownHorseRaceAgentController 是一个控制器，位于 SandBox.Tournaments.AgentControllers，接收输入后把系统推向下一个状态。 |
| [`TownHorseRaceMissionController`](../TownHorseRaceMissionController/) | TownHorseRaceMissionController 是一个控制器，位于 SandBox.Tournaments.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`TownMerchantsCampaignBehavior`](../TownMerchantsCampaignBehavior/) | TownMerchantsCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`TrackVisual`](../TrackVisual/) | TrackVisual 是 SandBox.View.Map.Visuals 下的公开类型。 |
| [`TradersCampaignBehavior`](../TradersCampaignBehavior/) | TradersCampaignBehavior 是 SandBox.CampaignBehaviors 下的公开类型。 |
| [`TreeNodeTablut`](../TreeNodeTablut/) | TreeNodeTablut 是 SandBox.BoardGames.AI 下的公开类型。 |
| [`TroopData`](../TroopData/) | TroopData 是一个数据载体，位于 SandBox.Missions.MissionLogics.Hideout，封装一组字段供系统之间结构化交换状态。 |
| [`TroopGivenToSettlementNotificationItemVM`](../TroopGivenToSettlementNotificationItemVM/) | TroopGivenToSettlementNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`TroopRecruitmentNotificationItemVM`](../TroopRecruitmentNotificationItemVM/) | TroopRecruitmentNotificationItemVM 是 SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes 下的公开类型。 |
| [`TutorialAttribute`](../TutorialAttribute/) | TutorialAttribute 是一个 .NET 特性，位于 SandBox.GauntletUI.Tutorial，用于给类型或成员打标签。 |
| [`TutorialHelper`](../TutorialHelper/) | TutorialHelper 是一个帮助类，位于 SandBox.GauntletUI.Tutorial，提供不依赖实例状态的静态辅助方法。 |
| [`TutorialItemBase`](../TutorialItemBase/) | TutorialItemBase 是一个抽象基类，位于 SandBox.GauntletUI.Tutorial，为具体子类提供可重写（override/virtual）的定制点。 |
| [`TutorialItemVM`](../TutorialItemVM/) | TutorialItemVM 是 SandBox.ViewModelCollection.Tutorial 下的公开类型。 |
| [`TutorialScreen`](../TutorialScreen/) | TutorialScreen 是 SandBox.View.Menu 下的公开类型。 |
| [`TutorialVM`](../TutorialVM/) | TutorialVM 是 SandBox.ViewModelCollection.Tutorial 下的公开类型。 |
| [`UnlockAllCraftingRecipesCheat`](../UnlockAllCraftingRecipesCheat/) | UnlockAllCraftingRecipesCheat 是 SandBox 下的公开类型。 |
| [`UnlockFogOfWarCheat`](../UnlockFogOfWarCheat/) | UnlockFogOfWarCheat 是 SandBox 下的公开类型。 |
| [`UsableMachineData`](../UsableMachineData/) | UsableMachineData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`UsablePlace`](../UsablePlace/) | UsablePlace 是 SandBox.Objects.Usables 下的公开类型。 |
| [`UsablePlaceAI`](../UsablePlaceAI/) | UsablePlaceAI 是 SandBox.AI 下的公开类型。 |
| [`VillageMissionController`](../VillageMissionController/) | VillageMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`VisitPointNodeScoreData`](../VisitPointNodeScoreData/) | VisitPointNodeScoreData 是一个数据载体，位于 SandBox.Missions.MissionLogics，封装一组字段供系统之间结构化交换状态。 |
| [`VisualTrackerMissionBehavior`](../VisualTrackerMissionBehavior/) | VisualTrackerMissionBehavior 是 SandBox.Missions.MissionLogics 下的公开类型。 |
| [`WalkingBehavior`](../WalkingBehavior/) | WalkingBehavior 是 SandBox.Missions.AgentBehaviors 下的公开类型。 |
| [`WhileEnteringSettlementBattleMissionController`](../WhileEnteringSettlementBattleMissionController/) | WhileEnteringSettlementBattleMissionController 是一个控制器，位于 SandBox.Missions.MissionLogics，接收输入后把系统推向下一个状态。 |
| [`WorkshopAreaMarker`](../WorkshopAreaMarker/) | WorkshopAreaMarker 是 SandBox.Objects.AreaMarkers 下的公开类型。 |
| [`WorkshopMissionHandler`](../WorkshopMissionHandler/) | WorkshopMissionHandler 是一个处理器，位于 SandBox.Missions.MissionLogics.Towns，在特定事件发生时执行约定好的响应逻辑。 |
| [`WoundAllEnemiesCheat`](../WoundAllEnemiesCheat/) | WoundAllEnemiesCheat 是 SandBox 下的公开类型。 |

## 本区域其他子系统

- [Root](./../global/)
- [Root](./../root/)
- [Actions](./../actions/)
- [NetworkMessages](./../networkmessages/)
- [StoryMode](./../storymode/)
- [TaleWorlds](./../taleworlds/)
