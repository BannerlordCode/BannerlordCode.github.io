---
title: 玩法模块 SandBox/StoryMode 类目录 / Class Catalog
sidebar: auto
---

# 玩法模块 SandBox/StoryMode 类目录

本页列出 1.4.5 源码中该领域全部公开类型，按命名空间分组。共 **819** 个类型，其中 **11** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## SandBox (42)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | Add1000GoldCheat | — |
| C | Add100InfluenceCheat | — |
| C | Add100RenownCheat | — |
| C | AddCraftingMaterialsCheat | — |
| C | [AgentNavigator](/v1.3.15/zh/api/mission-ext/AgentNavigator.md) | 🔗 |
| C | BoostSkillCheatGroup | — |
| C | BoostSkillCheeat | — |
| C | CampaignAgentComponent | — |
| C | CampaignMapSiegePrefabEntityCache | — |
| C | CampaignMissionManager | — |
| C | CompleteBuildingProjectCheat | — |
| C | EditorSceneMissionManager | — |
| C | FillCraftingStaminaCheat | — |
| C | GameplayCheatBase | — |
| C | GameplayCheatGroup | — |
| C | GameplayCheatItem | — |
| C | GameplayCheatsManager | — |
| C | Give10GrainCheat | — |
| C | Give10WarhorsesCheat | — |
| C | Give5TroopsToPlayerCheat | — |
| C | HealMainHeroCheat | — |
| C | HealPlayerPartyCheat | — |
| C | LocationCharacterMissionExtensions | — |
| C | MapScene | — |
| C | MapSceneCreator | — |
| C | MapSceneHelper | — |
| C | MissionHelper | — |
| C | [MultiplayerItemTestMissionController](/v1.3.15/zh/api/campaign-ext/MultiplayerItemTestMissionController.md) | 🔗 |
| E | NavigationState | — |
| C | SandboxBattleBannerBearersModel | — |
| C | SandBoxGameManager | — |
| C | SandBoxHelpers | — |
| C | SandBoxMissionManager | — |
| C | SandBoxMissions | — |
| C | SandBoxSaveHelper | — |
| C | SandBoxSaveManager | — |
| C | SandBoxSubModule | — |
| C | SaveableSandBoxTypeDefiner | — |
| E | SaveHelperState | — |
| C | UnlockAllCraftingRecipesCheat | — |
| C | UnlockFogOfWarCheat | — |
| C | WoundAllEnemiesCheat | — |

## SandBox.AI (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AgentBehaviorManager | — |
| C | PassageAI | — |
| C | UsablePlaceAI | — |

## SandBox.BoardGames (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | BarrierInfo | — |
| C | BoardGameBaghChal | — |
| C | BoardGameBase | — |
| C | BoardGameKonane | — |
| C | BoardGameMuTorere | — |
| C | BoardGamePuluc | — |
| C | BoardGameSeega | — |
| E | BoardGameSide | — |
| C | BoardGameTablut | — |
| S | BoardInformation | — |
| C | CapturedPawnsPool | — |
| E | GameOverEnum | — |
| S | Move | — |
| S | PawnInformation | — |
| E | PlayerTurn | — |
| E | [State](/v1.3.15/zh/api/mission-ext/State.md) | 🔗 |
| S | TileBaseInformation | — |

## SandBox.BoardGames.AI (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | AIState | — |
| C | BoardGameAIBaghChal | — |
| C | BoardGameAIBase | — |
| C | BoardGameAIKonane | — |
| C | BoardGameAIMuTorere | — |
| C | BoardGameAIPuluc | — |
| C | BoardGameAISeega | — |
| C | BoardGameAITablut | — |
| C | TreeNodeTablut | — |

## SandBox.BoardGames.MissionLogics (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionBoardGameDebugHandler | — |
| C | MissionBoardGameLogic | — |

## SandBox.BoardGames.Objects (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | BoardGameDecal | — |
| C | Tile | — |

## SandBox.BoardGames.Pawns (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | MovementState | — |
| C | PawnBaghChal | — |
| C | PawnBase | — |
| C | PawnKonane | — |
| C | PawnMuTorere | — |
| C | PawnPuluc | — |
| C | PawnSeega | — |
| C | PawnTablut | — |

## SandBox.BoardGames.Tiles (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | Tile1D | — |
| C | Tile2D | — |
| C | TileBase | — |
| C | TileMuTorere | — |
| C | TilePuluc | — |

## SandBox.CampaignBehaviors (25)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AlleyCampaignBehavior | — |
| C | AlleyCampaignBehaviorTypeDefiner | — |
| C | ArenaMasterCampaignBehavior | — |
| C | BarberCampaignBehavior | — |
| C | BoardGameCampaignBehavior | — |
| C | CheckpointCampaignBehavior | — |
| C | ClanMemberRolesCampaignBehavior | — |
| C | CommonTownsfolkCampaignBehavior | — |
| C | CommonVillagersCampaignBehavior | — |
| C | ConversationAnimationToolCampaignBehavior | — |
| C | DefaultCutscenesCampaignBehavior | — |
| C | DefaultNotificationsCampaignBehavior | — |
| C | DumpIntegrityCampaignBehavior | — |
| C | GuardsCampaignBehavior | — |
| C | HeirSelectionCampaignBehavior | — |
| C | HideoutConversationsCampaignBehavior | — |
| C | PrisonBreakCampaignBehavior | — |
| C | RecruitmentAgentSpawnBehavior | — |
| C | RetirementCampaignBehavior | — |
| C | SettlementMusiciansCampaignBehavior | — |
| C | StatisticsCampaignBehavior | — |
| C | StealthCharactersCampaignBehavior | — |
| C | TavernEmployeesCampaignBehavior | — |
| C | TownMerchantsCampaignBehavior | — |
| C | TradersCampaignBehavior | — |

## SandBox.Conversation (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ConversationMission | — |

## SandBox.Conversation.MissionLogics (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ConversationMissionLogic | — |
| C | MissionConversationLogic | — |

## SandBox.GameComponents (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | IMissionPlayerFollowerHandler | — |
| C | SandboxAgentApplyDamageModel | — |
| C | SandboxAgentDecideKilledOrUnconsciousModel | — |
| C | SandboxAgentStatCalculateModel | — |
| C | SandboxApplyWeatherEffectsModel | — |
| C | SandboxAutoBlockModel | — |
| C | SandboxBattleInitializationModel | — |
| C | SandboxBattleMoraleModel | — |
| C | SandboxBattleSpawnModel | — |
| C | SandboxMissionDifficultyModel | — |
| C | SandboxStrikeMagnitudeModel | — |

## SandBox.GauntletUI (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | GauntletBarberScreen | — |
| C | GauntletCharacterDeveloperScreen | — |
| C | GauntletClanScreen | — |
| C | GauntletCraftingScreen | — |
| C | GauntletEducationScreen | — |
| C | GauntletGameOverScreen | — |
| C | GauntletInventoryScreen | — |
| C | GauntletKingdomScreen | — |
| C | GauntletPartyScreen | — |
| C | GauntletQuestsScreen | — |
| C | GauntletSaveLoadScreen | — |
| C | MapConversationTextureProvider | — |
| C | SandBoxGauntletGameNotification | — |
| C | SandBoxGauntletUISubModule | — |
| C | SandboxSceneNotificationContextProvider | — |

## SandBox.GauntletUI.BannerEditor (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | BannerEditorView | — |
| C | GauntletBannerEditorScreen | — |

## SandBox.GauntletUI.CharacterCreation (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CharacterCreationBannerEditorView | — |
| C | CharacterCreationClanNamingStageView | — |
| C | CharacterCreationCultureStageView | — |
| C | CharacterCreationFaceGeneratorView | — |
| C | CharacterCreationNarrativeStageView | — |
| C | CharacterCreationOptionsStageView | — |
| C | CharacterCreationReviewStageView | — |

## SandBox.GauntletUI.Encyclopedia (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | EncyclopediaData | — |
| C | EncyclopediaListViewDataController | — |
| C | GauntletMapEncyclopediaView | — |

## SandBox.GauntletUI.Map (25)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | GauntletHeirSelectionPopupView | — |
| C | GauntletMapBarGlobalLayer | — |
| C | GauntletMapBarView | — |
| C | GauntletMapBasicView | — |
| C | GauntletMapBattleSimulationView | — |
| C | GauntletMapCampaignOptionsView | — |
| C | GauntletMapCheatsView | — |
| C | GauntletMapConversationBarterView | — |
| C | GauntletMapConversationView | — |
| C | GauntletMapEscapeMenuView | — |
| C | GauntletMapEventVisual | — |
| C | GauntletMapEventVisualCreator | — |
| C | GauntletMapEventVisualsView | — |
| C | GauntletMapIncidentView | — |
| C | GauntletMapNotificationView | — |
| C | GauntletMapOverlayView | — |
| C | GauntletMapParleyAnimationView | — |
| C | GauntletMapPartyNameplateView | — |
| C | GauntletMapReadyView | — |
| C | GauntletMapSaveView | — |
| C | GauntletMapSettlementNameplateView | — |
| C | GauntletMapSiegeOverlayView | — |
| C | GauntletMapTrackersView | — |
| C | GauntletMarriageOfferPopupView | — |
| I | IGauntletMapEventVisualHandler | — |

## SandBox.GauntletUI.Menu (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | GauntletMenuBackground | — |
| C | GauntletMenuBaseView | — |
| C | GauntletMenuOverlayBaseView | — |
| C | GauntletMenuRecruitVolunteersView | — |
| C | GauntletMenuTournamentLeaderboardView | — |
| C | GauntletMenuTownManagementView | — |
| C | GauntletMenuTroopSelectionView | — |

## SandBox.GauntletUI.Missions (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionGauntletAgentAlarmStateView | — |
| C | MissionGauntletArenaPracticeFightView | — |
| C | MissionGauntletBarterView | — |
| C | MissionGauntletBoardGameView | — |
| C | MissionGauntletCheatView | — |
| C | MissionGauntletConversationView | — |
| C | MissionGauntletEavesdroppingCameraView | — |
| C | MissionGauntletHideoutAmbushCinematicView | — |
| C | MissionGauntletNameMarkerView | — |
| C | MissionGauntletObjectiveView | — |
| C | MissionGauntletQuestBarView | — |
| C | MissionGauntletStealthFailCounterView | — |
| C | MissionGauntletStoryModeCheatView | — |
| C | MissionGauntletTournamentView | — |

## SandBox.GauntletUI.Tutorial (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | GauntletTutorialSystem | — |
| C | TutorialAttribute | — |
| C | TutorialHelper | — |
| C | TutorialItemBase | — |

## SandBox.Issues (30)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | FamilyFeudIssue | — |
| C | FamilyFeudIssueBehavior | — |
| C | FamilyFeudIssueMissionBehavior | — |
| C | FamilyFeudIssueQuest | — |
| C | FamilyFeudIssueTypeDefiner | — |
| C | NotableWantsDaughterFoundIssue | — |
| C | NotableWantsDaughterFoundIssueBehavior | — |
| C | NotableWantsDaughterFoundIssueQuest | — |
| C | NotableWantsDaughterFoundIssueTypeDefiner | — |
| C | ProdigalSonIssue | — |
| C | ProdigalSonIssueBehavior | — |
| C | ProdigalSonIssueQuest | — |
| C | ProdigalSonIssueTypeDefiner | — |
| C | RivalGangMovingInIssue | — |
| C | RivalGangMovingInIssueBehavior | — |
| C | RivalGangMovingInIssueQuest | — |
| C | RivalGangMovingInIssueTypeDefiner | — |
| C | RuralNotableInnAndOutIssue | — |
| C | RuralNotableInnAndOutIssueBehavior | — |
| C | RuralNotableInnAndOutIssueQuest | — |
| C | RuralNotableInnAndOutIssueTypeDefiner | — |
| C | SnareTheWealthyIssue | — |
| C | SnareTheWealthyIssueBehavior | — |
| C | SnareTheWealthyIssueQuest | — |
| C | SnareTheWealthyIssueTypeDefiner | — |
| S | SuspectNpc | — |
| C | TheSpyPartyIssue | — |
| C | TheSpyPartyIssueQuest | — |
| C | TheSpyPartyIssueQuestBehavior | — |
| C | TheSpyPartyIssueQuestTypeDefiner | — |

## SandBox.Issues.IssueQuestTasks (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ArenaDuelQuestTask | — |
| C | BeginConversationInitiatedByAIQuestTask | — |
| C | FollowAgentQuestTask | — |

## SandBox.Missions (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CameraJumpScript | — |
| C | ChangeLightIntensityScript | — |
| C | CheckpointLoadedMissionEvent | — |
| C | CheckpointMissionLogic | — |
| C | CivilianPortShipSpawnMissionLogic | — |
| C | CoverAnimalAgentComponent | — |
| C | EavesdroppingMissionLogic | — |
| C | EavesdropSound | — |
| C | OnStealthMissionCounterFailedEvent | — |
| C | RotateObjectScript | — |
| C | SabotageMissionController | — |
| C | StealthFailCounterMissionLogic | — |

## SandBox.Missions.AgentBehaviors (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AgentBehavior | — |
| C | AgentBehaviorGroup | — |
| C | AlarmedBehaviorGroup | — |
| C | BehaviorSets | — |
| C | CautiousBehavior | — |
| C | ChangeLocationBehavior | — |
| C | DailyBehaviorGroup | — |
| C | EscortAgentBehavior | — |
| C | FightBehavior | — |
| C | FleeBehavior | — |
| C | FollowAgentBehavior | — |
| C | IdleAgentBehavior | — |
| C | InterruptingBehaviorGroup | — |
| C | NotableSpawnPointHandler | — |
| C | PatrolAgentBehavior | — |
| C | PatrollingGuardBehavior | — |
| C | ScriptBehavior | — |
| C | StandGuardBehavior | — |
| C | TalkBehavior | — |
| C | WalkingBehavior | — |

## SandBox.Missions.BattleScore (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | SandboxMissionBattleScoreContext | — |
| C | SandboxSimulationBattleScoreContext | — |

## SandBox.Missions.MissionEvents (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionAIActivationDeactivationEventListenerLogic | — |
| C | OpenInventoryWithGivenItemsEventListenerLogic | — |
| C | ShowQuickInformationEventListenerLogic | — |

## SandBox.Missions.MissionLogics (55)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | AgentTrackTypes | — |
| C | BattleAgentLogic | — |
| C | BattleSurgeonLogic | — |
| C | CampaignMissionComponent | — |
| C | CampaignSiegeStateHandler | — |
| C | CombatMissionWithDialogueController | — |
| C | CorpseDraggingMissionLogic | — |
| C | CrossRoadScoreData | — |
| C | DisguiseMissionLogic | — |
| C | EnemyAgentAIDeactivationMissionLogic | — |
| C | HeroSkillHandler | — |
| C | HouseMissionController | — |
| I | IMissionProgressTracker | — |
| C | IndoorMissionController | — |
| C | ItemCatalogController | — |
| C | LeaveMissionLogic | — |
| C | LocationCharacterAgentSpawnedMissionEvent | — |
| C | LocationItemSpawnHandler | — |
| C | LookBackPointData | — |
| C | MissionAgentHandler | — |
| C | MissionAgentLookHandler | — |
| C | MissionAlleyHandler | — |
| C | MissionBasicTeamLogic | — |
| C | MissionCaravanOrVillagerTacticsHandler | — |
| C | MissionCrimeHandler | — |
| C | MissionFightHandler | — |
| C | MissionLocationLogic | — |
| C | MissionPathGenerationLogic | — |
| C | MissionSettlementPrepareLogic | — |
| C | MountAgentLogic | — |
| C | NavigationPathData | — |
| C | PointOfInterestBaseData | — |
| E | PointOfInterests | — |
| C | PointOfInterestScorePair | — |
| C | RetirementMissionLogic | — |
| C | SandBoxBattleMissionSpawnHandler | — |
| C | SandboxGeneralsAndCaptainsAssignmentLogic | — |
| C | SandboxHighlightsController | — |
| C | SandBoxMissionHandler | — |
| C | SandBoxMissionSpawnHandler | — |
| C | SandBoxSallyOutMissionController | — |
| C | SandBoxSiegeMissionSpawnHandler | — |
| C | SearchBodyMissionHandler | — |
| C | ShadowingAgentOffenseInfo | — |
| C | StandingGuardSpawnData | — |
| C | StealthAreaData | — |
| C | StealthAreaMissionLogic | — |
| C | StealthMissionController | — |
| E | StealthOffenseTypes | — |
| C | StealthPatrolPointMissionLogic | — |
| C | UsableMachineData | — |
| C | VillageMissionController | — |
| C | VisitPointNodeScoreData | — |
| C | VisualTrackerMissionBehavior | — |
| C | WhileEnteringSettlementBattleMissionController | — |

## SandBox.Missions.MissionLogics.Arena (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ArenaAgentStateDeciderLogic | — |
| C | ArenaDuelMissionBehavior | — |
| C | ArenaDuelMissionController | — |
| C | ArenaPracticeFightMissionController | — |

## SandBox.Missions.MissionLogics.Hideout (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | HideoutAgentType | — |
| C | HideoutAmbushBossFightCinematicController | — |
| C | HideoutAmbushMissionController | — |
| C | HideoutCinematicController | — |
| E | HideoutCinematicState | — |
| C | HideoutMissionController | — |
| E | HideoutPostCinematicPhase | — |
| E | HideoutPreCinematicPhase | — |
| C | TroopData | — |

## SandBox.Missions.MissionLogics.Hideout.Objectives (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ClearTheMainCampObjective | — |
| C | LocateTheMainCampObjective | — |

## SandBox.Missions.MissionLogics.Towns (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AlleyFightMissionHandler | — |
| C | PrisonBreakMissionController | — |
| C | TownCenterMissionController | — |
| C | WorkshopMissionHandler | — |

## SandBox.Objects (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CheckpointArea | — |
| C | DefaultMusicInstrumentData | — |
| C | DynamicPatrolAreaParent | — |
| C | GenericMissionEventBox | — |
| C | GroupSpawnPoint | — |
| C | InstrumentData | — |
| C | PassageUsePoint | — |
| C | PatrolPoint | — |
| C | SettlementMusicData | — |
| C | StealthIndoorLightingArea | — |
| C | StealthZone | — |
| E | TeleportType | — |
| C | TeleportUsePoint | — |

## SandBox.Objects.AnimationPoints (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AnimationPoint | — |
| C | ChairUsePoint | — |
| C | DynamicObjectAnimationPoint | — |
| C | ItemForBone | — |
| C | PlayMusicPoint | — |

## SandBox.Objects.AreaMarkers (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AnimatedBasicAreaIndicator | — |
| C | BasicAreaIndicator | — |
| C | CommonAreaMarker | — |
| C | StealthAreaMarker | — |
| C | WorkshopAreaMarker | — |

## SandBox.Objects.Cinematics (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CinematicBurningArrow | — |
| C | HideoutBossFightBehavior | — |
| C | SkeletonAnimatedCamera | — |

## SandBox.Objects.Usables (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | Chair | — |
| C | CheckpointUsePoint | — |
| C | DisguiseMissionUsePoint | — |
| C | MusicianGroup | — |
| C | Passage | — |
| C | PatrolArea | — |
| C | ShadowingSecureZoneUsePoint | — |
| E | SittableType | — |
| C | SmithingMachine | — |
| C | StealthAreaUsePoint | — |
| C | UsablePlace | — |

## SandBox.Source.Missions.AgentBehaviors (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | BoardGameAgentBehavior | — |

## SandBox.Tournaments (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | ITournamentGameBehavior | — |
| C | TournamentMissionStarter | — |

## SandBox.Tournaments.AgentControllers (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ArcheryTournamentAgentController | — |
| C | JoustingAgentController | — |
| E | JoustingAgentState | — |
| C | TownHorseRaceAgentController | — |

## SandBox.Tournaments.MissionLogics (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CheckPoint | — |
| C | TournamentArcheryMissionController | — |
| C | TournamentBehavior | — |
| C | TournamentFightMissionController | — |
| C | TournamentJoustingMissionController | — |
| C | TownHorseRaceMissionController | — |

## SandBox.View (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CampaignMusicHandler | — |
| I | IChangeableScreen | — |
| C | MainHeroSaveVisualSupplier | — |
| C | PreloadScreen | — |
| C | SandboxView | — |
| C | SandBoxViewCheats | — |
| C | SandBoxViewCreator | — |
| C | SandBoxViewSubModule | — |
| C | SandBoxViewVisualManager | — |
| C | SaveLoadScreen | — |

## SandBox.View.CharacterCreation (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CharacterCreationScreen | — |
| C | CharacterCreationStageViewAttribute | — |
| C | CharacterCreationStageViewBase | — |

## SandBox.View.Conversation (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ConversationViewEventHandler | — |
| C | ConversationViewManager | — |
| E | [EventType](/v1.3.15/zh/api/campaign-ext/EventType.md) | 🔗 |

## SandBox.View.Map (42)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | BattleSimulationMapView | — |
| C | BlockadePositionScript | — |
| E | CameraFollowMode | — |
| C | CampaignEntityVisualComponent | — |
| S | ConversationPlayArgs | — |
| S | DecalEntity | — |
| C | DefaultMapConversationDataProvider | — |
| C | HeirSelectionPopupView | — |
| I | IMapConversationDataProvider | — |
| S | InputInformation | — |
| C | MainMapCameraMoveEvent | — |
| C | MapBarView | — |
| C | MapBasicView | — |
| C | MapCameraView | — |
| C | MapCampaignOptionsView | — |
| C | MapCheatsView | — |
| C | MapConversationMission | — |
| C | MapConversationTableau | — |
| C | MapConversationTableauData | — |
| C | MapConversationView | — |
| C | MapCursor | — |
| C | MapEncyclopediaView | — |
| C | MapEscapeMenuView | — |
| C | MapEventVisualsView | — |
| C | MapGamepadEffectsView | — |
| C | MapIncidentView | — |
| C | MapNotificationView | — |
| E | MapOverlayType | — |
| C | MapOverlayView | — |
| C | MapParleyAnimationView | — |
| C | MapPartyNameplateView | — |
| C | MapReadyView | — |
| C | MapSaveView | — |
| C | MapScreen | — |
| C | MapSettlementNameplateView | — |
| C | MapSiegeOverlayView | — |
| C | MapTrackersView | — |
| C | MapView | — |
| C | MapViewsContainer | — |
| C | MarriageOfferPopupView | — |
| C | SettlementPositionScript | — |
| C | SnowAndRainTextureDefiner | — |

## SandBox.View.Map.Managers (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | EntityVisualManagerBase | — |
| C | MapTracksVisualManager | — |
| C | MapWeatherVisualManager | — |
| C | MobilePartyVisualManager | — |
| C | SettlementVisualManager | — |

## SandBox.View.Map.Navigation (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MapNavigationElementBase | — |
| C | MapNavigationHandler | — |
| C | MapNavigationHelper | — |

## SandBox.View.Map.Navigation.NavigationElements (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CharacterDeveloperNavigationElement | — |
| C | ClanNavigationElement | — |
| C | ClanScreenPermissionEvent | — |
| C | EscapeMenuNavigationElement | — |
| C | InventoryNavigationElement | — |
| C | KingdomNavigationElement | — |
| C | PartyNavigationElement | — |
| C | QuestsNavigationElement | — |

## SandBox.View.Map.Visuals (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MapEntityVisual | — |
| C | MapWeatherVisual | — |
| C | MobilePartyVisual | — |
| C | SettlementVisual | — |
| C | TrackVisual | — |

## SandBox.View.Menu (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MenuBackgroundView | — |
| C | MenuBaseView | — |
| C | MenuOverlayBaseView | — |
| C | MenuRecruitVolunteersView | — |
| C | MenuTournamentLeaderboardView | — |
| C | MenuTownManagementView | — |
| C | MenuTroopSelectionView | — |
| C | MenuView | — |
| C | MenuViewContext | — |
| C | TutorialScreen | — |

## SandBox.View.Missions (25)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | EavesdroppingMissionCameraView | — |
| E | GenderEnum | — |
| C | MissionAgentAlarmStateView | — |
| C | MissionArenaPracticeFightView | — |
| C | MissionAudienceHandler | — |
| C | MissionCampaignBattleSpectatorView | — |
| C | MissionCampaignView | — |
| C | MissionConversationCameraView | — |
| C | MissionConversationPrepareView | — |
| C | MissionCustomCameraView | — |
| C | MissionEquipItemToolView | — |
| C | MissionHideoutAmbushCinematicView | — |
| C | MissionHideoutCinematicView | — |
| C | MissionItemCalatogView | — |
| C | MissionMainAgentDetectionView | — |
| C | MissionPreloadView | — |
| C | MissionQuestBarView | — |
| C | MissionSettlementPrepareView | — |
| C | MissionSingleplayerViewHandler | — |
| C | MissionSoundParametersView | — |
| C | MissionStealthFailCounterView | — |
| C | OtherMissionViews | — |
| C | SandBoxMissionViews | — |
| E | SoundParameterMissionCulture | — |
| C | StealthMissionUIHandler | — |

## SandBox.View.Missions.NameMarkers (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | DefaultMissionNameMarkerHandler | — |
| C | MissionNameMarkerUIHandler | — |
| C | StealthNameMarkerProvider | — |

## SandBox.View.Missions.SandBox (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | SceneType | — |
| C | SpawnPointDebugView | — |
| C | SpawnPointUnits | — |

## SandBox.View.Missions.Sound.Components (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MusicArenaPracticeMissionView | — |
| C | MusicTournamentMissionView | — |

## SandBox.View.Missions.Tournaments (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionTournamentJoustingView | — |
| C | MissionTournamentView | — |
| C | TournamentMissionViews | — |

## SandBox.View.Overlay (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | DefaultGameMenuOverlayProvider | — |

## SandBox.ViewModelCollection (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | MapEventVisualTypes | — |
| C | PerkObjectComparer | — |
| C | SandBoxUIHelper | — |
| E | [SortState](/v1.3.15/zh/api/campaign-ext/SortState.md) | 🔗 |
| C | SPOrderOfBattleVM | — |
| C | SPScoreboardVM | — |
| C | TournamentRewardVM | — |

## SandBox.ViewModelCollection.BoardGame (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | BoardGameInstructionsVM | — |
| C | BoardGameInstructionVM | — |
| C | BoardGameVM | — |

## SandBox.ViewModelCollection.GameOver (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | GameOverStatCategoryVM | — |
| C | GameOverStatItemVM | — |
| C | GameOverStatsProvider | — |
| C | GameOverVM | — |
| C | StatCategory | — |
| C | StatItem | — |
| E | StatType | — |

## SandBox.ViewModelCollection.Input (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [InputKeyItemVM](/v1.3.15/zh/api/mission-ext/InputKeyItemVM.md) | 🔗 |

## SandBox.ViewModelCollection.Map (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MapEventVisualItemVM | — |
| C | MapEventVisualsVM | — |

## SandBox.ViewModelCollection.Map.Cheat (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CheatActionItemVM | — |
| C | CheatGroupItemVM | — |
| C | CheatItemBaseVM | — |
| C | GameplayCheatsVM | — |

## SandBox.ViewModelCollection.Map.Incidents (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MapIncidentOptionVM | — |
| C | MapIncidentVM | — |

## SandBox.ViewModelCollection.Map.Tracker (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MapArmyTrackItemVM | — |
| C | MapMarkerTrackerItemVM | — |
| C | MapMobilePartyTrackItemVM | — |
| C | MapTrackerCollectionVM | — |
| C | MapTrackerProvider | — |

## SandBox.ViewModelCollection.MapSiege (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | MachineTypes | — |
| C | MapSiegePOIVM | — |
| C | MapSiegeProductionMachineVM | — |
| C | MapSiegeProductionVM | — |
| C | MapSiegeVM | — |
| C | PlayerStartEngineConstructionEvent | — |
| E | POIType | — |
| C | SiegePOIDistanceComparer | — |

## SandBox.ViewModelCollection.Missions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionAgentAlarmStateVM | — |
| C | MissionAgentAlarmTargetVM | — |
| C | MissionArenaPracticeFightVM | — |
| C | MissionQuestBarVM | — |

## SandBox.ViewModelCollection.Missions.MainAgentDetection (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | AgentAlarmStateEnum | — |
| E | AgentStealthOffenseType | — |
| C | MainAgentDetectionVM | — |
| C | MissionDisguiseMarkerItemVM | — |
| C | MissionDisguiseMarkersVM | — |
| C | MissionLosingTargetVM | — |

## SandBox.ViewModelCollection.Missions.NameMarker (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | INameMarkerProviderContext | — |
| C | MissionNameMarkerFactory | — |
| C | MissionNameMarkerHelper | — |
| C | MissionNameMarkerProvider | — |
| C | MissionNameMarkerTargetBaseVM | — |
| C | MissionNameMarkerTargetVM | — |
| C | MissionNameMarkerToggleEvent | — |
| C | MissionNameMarkerVM | — |

## SandBox.ViewModelCollection.Missions.NameMarker.Targets (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionAgentMarkerTargetVM | — |
| C | MissionAnimatedBasicAreaIndicatorMarkerTargetVM | — |
| C | MissionBasicAreaIndicatorMarkerTargetVM | — |
| C | MissionCommonAreaMarkerTargetVM | — |
| C | MissionGenericMarkerTargetVM | — |
| C | MissionPassageUsePointNameMarkerTargetVM | — |
| C | MissionWorkshopNameMarkerTargetVM | — |

## SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionStealthAreaNameMarkerTargetVM | — |
| C | MissionStealthAreaUsePointNameMarkerTargetVM | — |
| C | MissionStealthFailCounterVM | — |
| C | MissionStealthSentryNameMarkerTargetVM | — |

## SandBox.ViewModelCollection.Nameplate (16)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | IssueTypes | — |
| E | MainQuestTypes | — |
| C | NameplateVM | — |
| C | PartyMarkerItemComparer | — |
| C | PartyNameplatesVM | — |
| C | PartyNameplateVM | — |
| C | PartyPlayerNameplateVM | — |
| E | RelationType | — |
| E | SettlementEventType | — |
| C | SettlementNameplateEventItemVM | — |
| C | SettlementNameplateEventsVM | — |
| C | SettlementNameplatePartyMarkerItemVM | — |
| C | SettlementNameplatePartyMarkersVM | — |
| C | SettlementNameplatesVM | — |
| C | SettlementNameplateVM | — |
| E | [Type](/v1.3.15/zh/api/mission-ext/Type.md) | 🔗 |

## SandBox.ViewModelCollection.Nameplate.NameplateNotifications (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | SettlementNotificationItemBaseVM | — |

## SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CaravanTransactionNotificationItemVM | — |
| C | IssueSolvedByLordNotificationItemVM | — |
| C | ItemSoldNotificationItemVM | — |
| C | PrisonerSoldNotificationItemVM | — |
| C | SettlementNameplateNotificationsVM | — |
| C | ShipSoldNotificationItemVM | — |
| C | TroopGivenToSettlementNotificationItemVM | — |
| C | TroopRecruitmentNotificationItemVM | — |

## SandBox.ViewModelCollection.SaveLoad (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MapSaveVM | — |
| C | SavedGameGroupVM | — |
| C | SavedGameModuleInfoVM | — |
| E | SavedGameProperty | — |
| C | SavedGamePropertyVM | — |
| C | SavedGameVM | — |
| C | SaveLoadVM | — |

## SandBox.ViewModelCollection.Tournament (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | TournamentMatchState | — |
| C | TournamentMatchVM | — |
| C | TournamentParticipantVM | — |
| E | TournamentPlayerState | — |
| C | TournamentRoundVM | — |
| C | TournamentTeamVM | — |
| C | TournamentVM | — |

## SandBox.ViewModelCollection.Tutorial (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | ItemPlacements | — |
| C | TutorialItemVM | — |
| C | TutorialVM | — |

## StoryMode (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | CampaignStoryMode | — |
| C | ConspiracyQuestMapNotification | — |
| C | IsArzagosTag | — |
| C | IsIstianaTag | — |
| C | IsStoryModeMentorTag | — |
| C | MainStoryLine | — |
| E | MainStoryLineSide | — |
| C | SaveableStoryModeTypeDefiner | — |
| C | StoryModeCheats | — |
| C | StoryModeData | — |
| C | StoryModeEvents | — |
| C | StoryModeHelpers | — |
| C | StoryModeManager | — |
| C | StoryModeQuestBase | — |
| C | StoryModeSubModule | — |
| C | TrainingField | — |
| C | TrainingFieldEncounter | — |

## StoryMode.Extensions (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Extensions](/v1.3.15/zh/api/engine/Extensions.md) | 🔗 |
| C | [MetaDataExtensions](/v1.3.15/zh/api/save-system/MetaDataExtensions.md) | 🔗 |

## StoryMode.GameComponents (18)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | StoryModeAgentDecideKilledOrUnconsciousModel | — |
| C | StoryModeBanditDensityModel | — |
| C | StoryModeBannerItemModel | — |
| C | StoryModeBattleRewardModel | — |
| C | StoryModeCombatXpModel | — |
| C | StoryModeCutsceneSelectionModel | — |
| C | StoryModeEncounterGameMenuModel | — |
| C | StoryModeGenericXpModel | — |
| C | StoryModeHeroDeathProbabilityCalculationModel | — |
| C | StoryModeIncidentModel | — |
| C | StoryModeKingdomDecisionPermissionModel | — |
| C | StoryModeNotableSpawnModel | — |
| C | StoryModePartySizeLimitModel | — |
| C | StoryModePartyWageModel | — |
| C | StoryModePrisonerRecruitmentCalculationModel | — |
| C | StoryModeTargetScoreCalculatingModel | — |
| C | StoryModeTroopSupplierProbabilityModel | — |
| C | StoryModeVoiceOverModel | — |

## StoryMode.GameComponents.CampaignBehaviors (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AchievementsCampaignBehavior | — |
| C | FirstPhaseCampaignBehavior | — |
| C | LordConversationsStoryModeBehavior | — |
| C | MainStorylineCampaignBehavior | — |
| C | SecondPhaseCampaignBehavior | — |
| C | StoryModeBanditSpawnCampaignBehavior | — |
| C | StoryModeCharacterCreationCampaignBehavior | — |
| C | StoryModeTutorialBoxCampaignBehavior | — |
| C | ThirdPhaseCampaignBehavior | — |
| C | TrainingFieldCampaignBehavior | — |
| C | TutorialPhaseCampaignBehavior | — |

## StoryMode.GauntletUI (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | StoryModeGauntletUISubModule | — |

## StoryMode.GauntletUI.Missions (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionGauntletTrainingFieldObjectiveView | — |

## StoryMode.GauntletUI.Tutorial (69)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ArmyCohesionStep1Tutorial | — |
| C | ArmyCohesionStep2Tutorial | — |
| C | AssignRolesTutorial | — |
| C | BombardmentStep1Tutorial | — |
| C | BuyingFoodStep1Tutorial | — |
| C | BuyingFoodStep2Tutorial | — |
| C | BuyingFoodStep3Tutorial | — |
| C | ChoosingPerkUpgradesStep1Tutorial | — |
| C | ChoosingPerkUpgradesStep2Tutorial | — |
| C | ChoosingPerkUpgradesStep3Tutorial | — |
| C | ChoosingSkillFocusStep1Tutorial | — |
| C | ChoosingSkillFocusStep2Tutorial | — |
| C | CraftingOrdersTutorial | — |
| C | CraftingStep1Tutorial | — |
| C | CreateArmyStep1Tutorial | — |
| C | CreateArmyStep2Tutorial | — |
| C | CreateArmyStep3Tutorial | — |
| C | CrimeTutorial | — |
| C | EncyclopediaClansTutorial | — |
| C | EncyclopediaConceptsTutorial | — |
| C | EncyclopediaFiltersTutorial | — |
| C | EncyclopediaFogOfWarTutorial | — |
| C | EncyclopediaHomeTutorial | — |
| C | EncyclopediaKingdomsTutorial | — |
| C | EncyclopediaPageTutorialBase | — |
| C | EncyclopediaSearchTutorial | — |
| C | EncyclopediaSettlementsTutorial | — |
| C | EncyclopediaSortTutorial | — |
| C | EncyclopediaTrackTutorial | — |
| C | EncyclopediaTroopsTutorial | — |
| C | EnterVillageTutorial | — |
| C | EquipmentSetsTutorial | — |
| C | GettingCompanionsStep1Tutorial | — |
| C | GettingCompanionsStep2Tutorial | — |
| C | GettingCompanionsStep3Tutorial | — |
| C | InventoryBannerItemTutorial | — |
| C | KingdomDecisionVotingTutorial | — |
| C | MovementInMissionTutorial | — |
| C | NavigateOnMapTutorialStep1 | — |
| C | NavigateOnMapTutorialStep2 | — |
| C | OrderHideoutTutorial | — |
| C | OrderOfBattleTutorialStep1Tutorial | — |
| C | OrderOfBattleTutorialStep2Tutorial | — |
| C | OrderOfBattleTutorialStep3Tutorial | — |
| C | OrderTutorialStep1 | — |
| C | OrderTutorialStep2 | — |
| C | PartySpeedTutorial | — |
| C | PressLeaveToReturnFromMissionTutorial1 | — |
| C | PressLeaveToReturnFromMissionTutorial2 | — |
| C | QuestScreenTutorial | — |
| C | RaidVillageStep1Tutorial | — |
| C | RansomingPrisonersStep1Tutorial | — |
| C | RansomingPrisonersStep2Tutorial | — |
| C | RecruitmentStep1Tutorial | — |
| C | RecruitmentStep2Tutorial | — |
| C | SeeMarkersInMissionTutorial | — |
| C | StealthCrouchTutorial | — |
| C | StealthDarkZoneTutorial | — |
| C | StealthDistractionTutorial | — |
| C | StealthHideCorpseTutorial | — |
| C | StealthHideInBushesTutorial | — |
| C | StealthStealthKillTutorial | — |
| C | StealthWalkSlowTutorial | — |
| C | TakingPrisonersTutorial | — |
| C | TalkToNotableTutorialStep1 | — |
| C | TalkToNotableTutorialStep2 | — |
| C | UpgradingTroopsStep1Tutorial | — |
| C | UpgradingTroopsStep2Tutorial | — |
| C | UpgradingTroopsStep3Tutorial | — |

## StoryMode.Missions (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | MouseObjectives | — |
| E | ObjectivePerformingType | — |
| C | StoryModeMissions | — |
| C | TrainingFieldMissionController | — |
| C | TutorialObjective | — |

## StoryMode.Quests.FirstPhase (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ArzagosBannerPieceQuest | — |
| C | AssembleTheBannerQuest | — |
| C | BannerInvestigationQuest | — |
| C | CreateKingdomQuest | — |
| E | HideoutBattleEndState | — |
| C | IstianasBannerPieceQuest | — |
| C | MeetWithArzagosQuest | — |
| C | MeetWithIstianaQuest | — |
| C | SupportKingdomQuest | — |

## StoryMode.Quests.PlayerClanQuests (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | RebuildPlayerClanQuest | — |
| C | RebuildPlayerClanQuestBehaviorTypeDefiner | — |
| C | RescueFamilyQuest | — |
| C | RescueFamilyQuestBehavior | — |

## StoryMode.Quests.QuestTasks (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | PurchaseItemTutorialQuestTask | — |
| C | RecruitTroopTutorialQuestTask | — |

## StoryMode.Quests.SecondPhase (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | AssembleEmpireQuest | — |
| C | AssembleEmpireQuestBehavior | — |
| C | AssembleEmpireQuestBehaviorTypeDefiner | — |
| C | ConspiracyProgressQuest | — |
| C | ConspiracyQuestBase | — |
| C | WeakenEmpireQuest | — |
| C | WeakenEmpireQuestBehavior | — |
| C | WeakenEmpireQuestBehaviorTypeDefiner | — |

## StoryMode.Quests.SecondPhase.ConspiracyQuests (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ConspiracyBaseOfOperationsDiscoveredConspiracyQuest | — |
| C | DestroyRaidersConspiracyQuest | — |
| C | DisruptSupplyLinesConspiracyQuest | — |

## StoryMode.Quests.ThirdPhase (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | DefeatTheConspiracyQuest | — |
| C | DefeatTheConspiracyQuestBehavior | — |
| C | DefeatTheConspiracyQuestBehaviorTypeDefiner | — |

## StoryMode.Quests.TutorialPhase (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | FindHideoutTutorialQuest | — |
| E | HideoutBattleEndState | — |
| C | LocateAndRescueTravellerTutorialQuest | — |
| C | PurchaseGrainTutorialQuest | — |
| C | RecruitTroopsTutorialQuest | — |
| C | TalkToTheHeadmanTutorialQuest | — |
| C | TravelToVillageTutorialQuest | — |
| C | VillagersInNeed | — |

## StoryMode.StoryModeObjects (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | StoryModeBannerEffects | — |
| C | StoryModeHeroes | — |

## StoryMode.StoryModePhases (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | FirstPhase | — |
| C | SecondPhase | — |
| C | ThirdPhase | — |
| C | TutorialPhase | — |
| E | TutorialQuestPhase | — |

## StoryMode.View (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | StoryModeViewCreator | — |
| C | StoryModeViewSubModule | — |

## StoryMode.View.MarkerProviders (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | StealthTutorialMarkerProvider | — |

## StoryMode.View.Missions (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | MissionTrainingFieldObjectiveView | — |
| C | StealthTutorialView | — |
| C | StoryModeMissionViews | — |

## StoryMode.View.Permissions (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | StoryModePermissionsSystem | — |

## StoryMode.ViewModelCollection.Map (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ConspiracyQuestMapNotificationItemVM | — |

## StoryMode.ViewModelCollection.Missions (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | ControllerStickInput | — |
| E | [InputTypes](/v1.3.15/zh/api/mission-ext/InputTypes.md) | 🔗 |
| S | KeyInput | — |
| S | MouseAndClickInput | — |
| E | MouseClickTypes | — |
| E | [MovementTypes](/v1.3.15/zh/api/mission-ext/MovementTypes.md) | 🔗 |
| C | TrainingFieldObjectiveItemVM | — |
| C | TrainingFieldObjectivesVM | — |
| C | TrainingObjectiveKeyVM | — |
