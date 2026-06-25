---
title: 战役系统 Campaign System 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 战役系统 Campaign System 类目录

## 心智模型

先把 `战役系统 Campaign System 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.3.15 源码中该领域全部公开类型，按命名空间分组。共 **1829** 个类型，其中 **1796** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.CampaignSystem (125)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [ActionNotes](./campaign-ext/ActionNotes) | 🔗 |
| S | [AIBehaviorData](./campaign-ext/AIBehaviorData) | 🔗 |
| C | [Army](./campaign-ext/Army) | 🔗 |
| E | [ArmyDispersionReason](./campaign-ext/ArmyDispersionReason) | 🔗 |
| E | [ArmyTypes](./campaign-ext/ArmyTypes) | 🔗 |
| C | [AtmosphereGrid](./campaign-ext/AtmosphereGrid) | 🔗 |
| S | [BattleResultPartyData](./campaign-ext/BattleResultPartyData) | 🔗 |
| C | [BattleSimulation](./campaign-ext/BattleSimulation) | 🔗 |
| E | [BoardGameType](./campaign-ext/BoardGameType) | 🔗 |
| C | Campaign | — |
| C | [CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase) | 🔗 |
| C | [CampaignCheats](./campaign-ext/CampaignCheats) | 🔗 |
| C | [CampaignData](./campaign-ext/CampaignData) | 🔗 |
| C | [CampaignEntityComponent](./campaign-ext/CampaignEntityComponent) | 🔗 |
| C | [CampaignEventDispatcher](./campaign-ext/CampaignEventDispatcher) | 🔗 |
| C | [CampaignEventReceiver](./campaign-ext/CampaignEventReceiver) | 🔗 |
| C | [CampaignEvents](./campaign-ext/CampaignEvents) | 🔗 |
| E | [CampaignGameMode](./campaign-ext/CampaignGameMode) | 🔗 |
| C | [CampaignGameStarter](./campaign-ext/CampaignGameStarter) | 🔗 |
| C | [CampaignInformationManager](./campaign-ext/CampaignInformationManager) | 🔗 |
| C | [CampaignMission](./campaign-ext/CampaignMission) | 🔗 |
| C | [CampaignObjectBase](./campaign-ext/CampaignObjectBase) | 🔗 |
| C | [CampaignObjectManager](./campaign-ext/CampaignObjectManager) | 🔗 |
| C | [CampaignOptions](./campaign-ext/CampaignOptions) | 🔗 |
| C | [CampaignPeriodicEventManager](./campaign-ext/CampaignPeriodicEventManager) | 🔗 |
| C | [CampaignTickCacheDataStore](./campaign-ext/CampaignTickCacheDataStore) | 🔗 |
| S | [CampaignTime](./campaign-ext/CampaignTime) | 🔗 |
| E | [CampaignTimeControlMode](./campaign-ext/CampaignTimeControlMode) | 🔗 |
| C | [CampaignTutorial](./campaign-ext/CampaignTutorial) | 🔗 |
| S | [CampaignVec2](./campaign-ext/CampaignVec2) | 🔗 |
| C | [CharacterData](./campaign-ext/CharacterData) | 🔗 |
| C | CharacterObject | — |
| C | [CharacterRelationManager](./campaign-ext/CharacterRelationManager) | 🔗 |
| E | [CharacterRestrictionFlags](./campaign-ext/CharacterRestrictionFlags) | 🔗 |
| E | [CharacterStates](./campaign-ext/CharacterStates) | 🔗 |
| C | Clan | — |
| C | [Concept](./campaign-ext/Concept) | 🔗 |
| E | [ConversationContext](./campaign-ext/ConversationContext) | 🔗 |
| S | [ConversationSceneData](./campaign-ext/ConversationSceneData) | 🔗 |
| C | [CultureObject](./campaign-ext/CultureObject) | 🔗 |
| C | [CultureTrait](./campaign-ext/CultureTrait) | 🔗 |
| C | [DefaultItems](./campaign-ext/DefaultItems) | 🔗 |
| C | [DefaultPolicies](./campaign-ext/DefaultPolicies) | 🔗 |
| C | [DefaultSkillEffects](./campaign-ext/DefaultSkillEffects) | 🔗 |
| C | [DialogFlow](./campaign-ext/DialogFlow) | 🔗 |
| E | [Difficulty](./campaign-ext/Difficulty) | 🔗 |
| C | [EncounterManager](./campaign-ext/EncounterManager) | 🔗 |
| S | [ExplainedNumber](./campaign-ext/ExplainedNumber) | 🔗 |
| C | [FactionManager](./campaign-ext/FactionManager) | 🔗 |
| E | [FinishStates](./campaign-ext/FinishStates) | 🔗 |
| E | [GameAccelerationMode](./campaign-ext/GameAccelerationMode) | 🔗 |
| E | [GameLoadingType](./campaign-ext/GameLoadingType) | 🔗 |
| C | [GameModels](./campaign-ext/GameModels) | 🔗 |
| C | [GameSceneDataManager](./campaign-ext/GameSceneDataManager) | 🔗 |
| C | [Hero](./campaign/Hero) | 🔗 |
| C | [HeroCreator](./campaign-ext/HeroCreator) | 🔗 |
| E | [HeroGetsBusyReasons](./campaign-ext/HeroGetsBusyReasons) | 🔗 |
| I | [IAgentBehaviorManager](./campaign-ext/IAgentBehaviorManager) | 🔗 |
| I | [ICampaignBehavior](./campaign-ext/ICampaignBehavior) | 🔗 |
| I | [ICampaignBehaviorManager](./campaign-ext/ICampaignBehaviorManager) | 🔗 |
| I | [ICampaignMission](./campaign-ext/ICampaignMission) | 🔗 |
| I | [ICampaignMissionManager](./campaign-ext/ICampaignMissionManager) | 🔗 |
| I | [IDataStore](./campaign-ext/IDataStore) | 🔗 |
| I | [IFaction](./campaign-ext/IFaction) | 🔗 |
| I | [IMainHeroVisualSupplier](./campaign-ext/IMainHeroVisualSupplier) | 🔗 |
| I | [IMapEventVisualCreator](./campaign-ext/IMapEventVisualCreator) | 🔗 |
| I | [IMbEvent](./campaign-ext/IMbEvent) | 🔗 |
| I | [IMbEventBase](./campaign-ext/IMbEventBase) | 🔗 |
| I | [INavigationElement](./campaign-ext/INavigationElement) | 🔗 |
| I | [INavigationHandler](./campaign-ext/INavigationHandler) | 🔗 |
| I | [IRandomOwner](./campaign-ext/IRandomOwner) | 🔗 |
| I | [ISandBoxMissionManager](./campaign-ext/ISandBoxMissionManager) | 🔗 |
| I | [ISaveManager](./campaign-ext/ISaveManager) | 🔗 |
| I | [ITrackableCampaignObject](./campaign-ext/ITrackableCampaignObject) | 🔗 |
| I | [IViewDataTracker](./campaign-ext/IViewDataTracker) | 🔗 |
| C | [JournalLog](./campaign-ext/JournalLog) | 🔗 |
| C | Kingdom | — |
| C | [KingdomManager](./campaign-ext/KingdomManager) | 🔗 |
| E | [LogType](./campaign-ext/LogType) | 🔗 |
| C | [ManagedParameters](./core-extra/ManagedParameters) | 🔗 |
| E | [ManagedParametersEnum](./core-extra/ManagedParametersEnum) | 🔗 |
| C | [MapNavigationExtensions](./campaign-ext/MapNavigationExtensions) | 🔗 |
| E | [MapNavigationItemType](./campaign-ext/MapNavigationItemType) | 🔗 |
| C | [MBCampaignEvent](./campaign-ext/MBCampaignEvent) | 🔗 |
| C | [MbEvent](./campaign-ext/MbEvent) | 🔗 |
| S | [MeetingSceneData](./campaign-ext/MeetingSceneData) | 🔗 |
| C | [NameGenerator](./campaign-ext/NameGenerator) | 🔗 |
| S | [NavigationPermissionItem](./campaign-ext/NavigationPermissionItem) | 🔗 |
| E | [NoticeType](./campaign-ext/NoticeType) | 🔗 |
| E | [Occupation](./campaign-ext/Occupation) | 🔗 |
| E | [OperationType](./campaign-ext/OperationType) | 🔗 |
| E | [PartyRestFlags](./campaign-ext/PartyRestFlags) | 🔗 |
| E | [PartyRole](./campaign-ext/PartyRole) | 🔗 |
| C | [PartyThinkParams](./campaign-ext/PartyThinkParams) | 🔗 |
| E | [PartyTypeEnum](./campaign-ext/PartyTypeEnum) | 🔗 |
| C | [PlayerCaptivity](./campaign-ext/PlayerCaptivity) | 🔗 |
| C | [PolicyObject](./campaign-ext/PolicyObject) | 🔗 |
| C | [PropertyObjectData](./campaign-ext/PropertyObjectData) | 🔗 |
| C | [QuestBase](./campaign-ext/QuestBase) | 🔗 |
| E | [QuestCompleteDetails](./campaign-ext/QuestCompleteDetails) | 🔗 |
| C | [QuestManager](./campaign-ext/QuestManager) | 🔗 |
| C | [QuestTaskBase](./campaign-ext/QuestTaskBase) | 🔗 |
| C | [RandomOwnerExtensions](./campaign-ext/RandomOwnerExtensions) | 🔗 |
| I | [ReferenceIMBEvent](./campaign-ext/ReferenceIMBEvent) | 🔗 |
| C | [ReferenceMBEvent](./campaign-ext/ReferenceMBEvent) | 🔗 |
| C | [Romance](./campaign-ext/Romance) | 🔗 |
| E | [RomanceLevelEnum](./campaign-ext/RomanceLevelEnum) | 🔗 |
| C | [RomanticState](./campaign-ext/RomanticState) | 🔗 |
| C | [SandBoxManager](./campaign-ext/SandBoxManager) | 🔗 |
| C | [SandBoxMission](./campaign-ext/SandBoxMission) | 🔗 |
| C | [SaveableCampaignTypeDefiner](./campaign-ext/SaveableCampaignTypeDefiner) | 🔗 |
| C | [SaveHandler](./campaign-ext/SaveHandler) | 🔗 |
| E | [SaveMode](./campaign-ext/SaveMode) | 🔗 |
| E | [Seasons](./campaign-ext/Seasons) | 🔗 |
| E | [SettlementBusynessPriority](./campaign-ext/SettlementBusynessPriority) | 🔗 |
| S | [SingleplayerBattleSceneData](./campaign-ext/SingleplayerBattleSceneData) | 🔗 |
| C | [SkillEffect](./campaign-ext/SkillEffect) | 🔗 |
| C | [SkillObjectData](./campaign-ext/SkillObjectData) | 🔗 |
| C | [StanceLink](./campaign-ext/StanceLink) | 🔗 |
| C | [Track](./campaign-ext/Track) | 🔗 |
| C | [TrackedObject](./campaign-ext/TrackedObject) | 🔗 |
| C | [TradeRumor](./campaign-ext/TradeRumor) | 🔗 |
| C | [TroopUpgradeTracker](./campaign-ext/TroopUpgradeTracker) | 🔗 |
| C | [VisualCreator](./campaign-ext/VisualCreator) | 🔗 |
| C | [VisualTrackerManager](./campaign-ext/VisualTrackerManager) | 🔗 |

## TaleWorlds.CampaignSystem.Actions (75)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AddCompanionAction](./campaign-ext/AddCompanionAction) | 🔗 |
| C | [AddHeroToPartyAction](./campaign-ext/AddHeroToPartyAction) | 🔗 |
| C | [AdoptHeroAction](./campaign-ext/AdoptHeroAction) | 🔗 |
| C | [ApplyHeirSelectionAction](./campaign-ext/ApplyHeirSelectionAction) | 🔗 |
| C | [BeHostileAction](./campaign-ext/BeHostileAction) | 🔗 |
| C | [BreakInOutBesiegedSettlementAction](./campaign-ext/BreakInOutBesiegedSettlementAction) | 🔗 |
| C | [BribeGuardsAction](./campaign-ext/BribeGuardsAction) | 🔗 |
| C | [ChangeClanInfluenceAction](./campaign-ext/ChangeClanInfluenceAction) | 🔗 |
| C | [ChangeClanLeaderAction](./campaign-ext/ChangeClanLeaderAction) | 🔗 |
| C | [ChangeCrimeRatingAction](./campaign-ext/ChangeCrimeRatingAction) | 🔗 |
| C | [ChangeGovernorAction](./campaign-ext/ChangeGovernorAction) | 🔗 |
| C | [ChangeKingdomAction](./campaign-ext/ChangeKingdomAction) | 🔗 |
| E | [ChangeKingdomActionDetail](./campaign-ext/ChangeKingdomActionDetail) | 🔗 |
| C | [ChangeOwnerOfSettlementAction](./campaign-ext/ChangeOwnerOfSettlementAction) | 🔗 |
| E | [ChangeOwnerOfSettlementDetail](./campaign-ext/ChangeOwnerOfSettlementDetail) | 🔗 |
| C | [ChangeOwnerOfWorkshopAction](./campaign-ext/ChangeOwnerOfWorkshopAction) | 🔗 |
| C | [ChangePlayerCharacterAction](./campaign-ext/ChangePlayerCharacterAction) | 🔗 |
| C | [ChangeProductionTypeOfWorkshopAction](./campaign-ext/ChangeProductionTypeOfWorkshopAction) | 🔗 |
| C | [ChangeRelationAction](./campaign-ext/ChangeRelationAction) | 🔗 |
| E | [ChangeRelationDetail](./campaign-ext/ChangeRelationDetail) | 🔗 |
| C | [ChangeRomanticStateAction](./campaign-ext/ChangeRomanticStateAction) | 🔗 |
| C | [ChangeRulingClanAction](./campaign-ext/ChangeRulingClanAction) | 🔗 |
| C | [ChangeShipOwnerAction](./campaign-ext/ChangeShipOwnerAction) | 🔗 |
| C | [ChangeVillageStateAction](./campaign-ext/ChangeVillageStateAction) | 🔗 |
| C | [ClaimSettlementAction](./campaign-ext/ClaimSettlementAction) | 🔗 |
| C | [DeclareWarAction](./campaign-ext/DeclareWarAction) | 🔗 |
| E | [DeclareWarDetail](./campaign-ext/DeclareWarDetail) | 🔗 |
| C | [DestroyClanAction](./campaign-ext/DestroyClanAction) | 🔗 |
| C | [DestroyKingdomAction](./campaign-ext/DestroyKingdomAction) | 🔗 |
| C | [DestroyPartyAction](./campaign-ext/DestroyPartyAction) | 🔗 |
| C | [DestroyShipAction](./campaign-ext/DestroyShipAction) | 🔗 |
| C | [DisableHeroAction](./campaign-ext/DisableHeroAction) | 🔗 |
| C | [DisbandArmyAction](./campaign-ext/DisbandArmyAction) | 🔗 |
| C | [DisbandPartyAction](./campaign-ext/DisbandPartyAction) | 🔗 |
| C | [EndCaptivityAction](./campaign-ext/EndCaptivityAction) | 🔗 |
| E | [EndCaptivityDetail](./campaign-ext/EndCaptivityDetail) | 🔗 |
| C | [EndMercenaryServiceAction](./campaign-ext/EndMercenaryServiceAction) | 🔗 |
| E | [EndMercenaryServiceActionDetails](./campaign-ext/EndMercenaryServiceActionDetails) | 🔗 |
| C | [EnterSettlementAction](./campaign-ext/EnterSettlementAction) | 🔗 |
| C | [GainKingdomInfluenceAction](./campaign-ext/GainKingdomInfluenceAction) | 🔗 |
| C | [GainRenownAction](./campaign-ext/GainRenownAction) | 🔗 |
| C | [GatherArmyAction](./campaign-ext/GatherArmyAction) | 🔗 |
| C | [GiveGoldAction](./campaign-ext/GiveGoldAction) | 🔗 |
| C | [GiveItemAction](./campaign-ext/GiveItemAction) | 🔗 |
| C | [IncreaseSettlementHealthAction](./campaign-ext/IncreaseSettlementHealthAction) | 🔗 |
| C | [InitializeWorkshopAction](./campaign-ext/InitializeWorkshopAction) | 🔗 |
| C | [KillCharacterAction](./campaign-ext/KillCharacterAction) | 🔗 |
| E | [KillCharacterActionDetail](./campaign-ext/KillCharacterActionDetail) | 🔗 |
| C | [LeaveSettlementAction](./campaign-ext/LeaveSettlementAction) | 🔗 |
| C | [LiftSiegeAction](./campaign-ext/LiftSiegeAction) | 🔗 |
| C | [MakeHeroFugitiveAction](./campaign-ext/MakeHeroFugitiveAction) | 🔗 |
| C | [MakePeaceAction](./campaign-ext/MakePeaceAction) | 🔗 |
| E | [MakePeaceDetail](./campaign-ext/MakePeaceDetail) | 🔗 |
| C | [MakePregnantAction](./campaign-ext/MakePregnantAction) | 🔗 |
| C | [MarriageAction](./campaign-ext/MarriageAction) | 🔗 |
| C | [PayForCrimeAction](./campaign-ext/PayForCrimeAction) | 🔗 |
| C | [RaftStateChangeAction](./campaign-ext/RaftStateChangeAction) | 🔗 |
| C | [RemoveCompanionAction](./campaign-ext/RemoveCompanionAction) | 🔗 |
| E | [RemoveCompanionDetail](./campaign-ext/RemoveCompanionDetail) | 🔗 |
| C | [RepairShipAction](./campaign-ext/RepairShipAction) | 🔗 |
| C | [SellGoodsForTradeAction](./campaign-ext/SellGoodsForTradeAction) | 🔗 |
| C | [SellItemsAction](./campaign-ext/SellItemsAction) | 🔗 |
| C | [SellPrisonersAction](./campaign-ext/SellPrisonersAction) | 🔗 |
| C | [SetPartyAiAction](./campaign-ext/SetPartyAiAction) | 🔗 |
| E | [ShipDestroyDetail](./campaign-ext/ShipDestroyDetail) | 🔗 |
| E | [ShipOwnerChangeDetail](./campaign-ext/ShipOwnerChangeDetail) | 🔗 |
| E | [SiegeAftermath](./campaign-ext/SiegeAftermath) | 🔗 |
| C | [SiegeAftermathAction](./campaign-ext/SiegeAftermathAction) | 🔗 |
| C | [StartBattleAction](./campaign-ext/StartBattleAction) | 🔗 |
| C | [StartMercenaryServiceAction](./campaign-ext/StartMercenaryServiceAction) | 🔗 |
| E | [StartMercenaryServiceActionDetails](./campaign-ext/StartMercenaryServiceActionDetails) | 🔗 |
| C | [TakePrisonerAction](./campaign-ext/TakePrisonerAction) | 🔗 |
| E | [TeleportationDetail](./campaign-ext/TeleportationDetail) | 🔗 |
| C | [TeleportHeroAction](./campaign-ext/TeleportHeroAction) | 🔗 |
| C | [TransferPrisonerAction](./campaign-ext/TransferPrisonerAction) | 🔗 |

## TaleWorlds.CampaignSystem.AgentOrigins (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyAgentOrigin](./campaign-ext/PartyAgentOrigin) | 🔗 |
| C | [PartyGroupAgentOrigin](./campaign-ext/PartyGroupAgentOrigin) | 🔗 |
| C | [SimpleAgentOrigin](./campaign-ext/SimpleAgentOrigin) | 🔗 |

## TaleWorlds.CampaignSystem.BarterSystem (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterData](./campaign-ext/BarterData) | 🔗 |
| C | [BarterGroup](./campaign-ext/BarterGroup) | 🔗 |
| C | [BarterManager](./campaign-ext/BarterManager) | 🔗 |
| C | [BarterResult](./campaign-ext/BarterResult) | 🔗 |
| C | [DefaultsBarterGroup](./campaign-ext/DefaultsBarterGroup) | 🔗 |
| C | [FiefBarterGroup](./campaign-ext/FiefBarterGroup) | 🔗 |
| C | [GoldBarterGroup](./campaign-ext/GoldBarterGroup) | 🔗 |
| C | [ItemBarterGroup](./campaign-ext/ItemBarterGroup) | 🔗 |
| C | [OtherBarterGroup](./campaign-ext/OtherBarterGroup) | 🔗 |
| C | [PrisonerBarterGroup](./campaign-ext/PrisonerBarterGroup) | 🔗 |

## TaleWorlds.CampaignSystem.BarterSystem.Barterables (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Barterable](./campaign-ext/Barterable) | 🔗 |
| E | [BarterSide](./campaign-ext/BarterSide) | 🔗 |
| C | [DeclareWarBarterable](./campaign-ext/DeclareWarBarterable) | 🔗 |
| C | [FiefBarterable](./campaign-ext/FiefBarterable) | 🔗 |
| C | [GoldBarterable](./campaign-ext/GoldBarterable) | 🔗 |
| C | [ItemBarterable](./campaign-ext/ItemBarterable) | 🔗 |
| C | [JoinKingdomAsClanBarterable](./campaign-ext/JoinKingdomAsClanBarterable) | 🔗 |
| C | [LeaveKingdomAsClanBarterable](./campaign-ext/LeaveKingdomAsClanBarterable) | 🔗 |
| C | [MarriageBarterable](./campaign-ext/MarriageBarterable) | 🔗 |
| C | [MercenaryJoinKingdomBarterable](./campaign-ext/MercenaryJoinKingdomBarterable) | 🔗 |
| C | [NoAttackBarterable](./campaign-ext/NoAttackBarterable) | 🔗 |
| C | [PeaceBarterable](./campaign-ext/PeaceBarterable) | 🔗 |
| C | [SafePassageBarterable](./campaign-ext/SafePassageBarterable) | 🔗 |
| C | [SetPrisonerFreeBarterable](./campaign-ext/SetPrisonerFreeBarterable) | 🔗 |
| C | [TransferPrisonerBarterable](./campaign-ext/TransferPrisonerBarterable) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors (158)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgingCampaignBehavior](./campaign-ext/AgingCampaignBehavior) | 🔗 |
| C | [AllianceCampaignBehavior](./campaign-ext/AllianceCampaignBehavior) | 🔗 |
| C | [AllianceCampaignBehaviorTypeDefiner](./campaign-ext/AllianceCampaignBehaviorTypeDefiner) | 🔗 |
| C | [BackstoryCampaignBehavior](./campaign-ext/BackstoryCampaignBehavior) | 🔗 |
| C | [BanditInteractionsCampaignBehavior](./campaign-ext/BanditInteractionsCampaignBehavior) | 🔗 |
| C | [BanditInteractionsCampaignBehaviorTypeDefiner](./campaign-ext/BanditInteractionsCampaignBehaviorTypeDefiner) | 🔗 |
| C | [BanditSpawnCampaignBehavior](./campaign-ext/BanditSpawnCampaignBehavior) | 🔗 |
| C | [BannerCampaignBehavior](./campaign-ext/BannerCampaignBehavior) | 🔗 |
| C | [BattleCampaignBehavior](./campaign-ext/BattleCampaignBehavior) | 🔗 |
| C | [BuildingsCampaignBehavior](./campaign-ext/BuildingsCampaignBehavior) | 🔗 |
| C | [CampaignBattleRecoveryBehavior](./campaign-ext/CampaignBattleRecoveryBehavior) | 🔗 |
| C | [CampaignBehaviorManager](./campaign-ext/CampaignBehaviorManager) | 🔗 |
| C | [CampaignFactionManagerBehaviour](./campaign-ext/CampaignFactionManagerBehaviour) | 🔗 |
| C | [CampaignWarManagerBehavior](./campaign-ext/CampaignWarManagerBehavior) | 🔗 |
| C | [CaravanConversationsCampaignBehavior](./campaign-ext/CaravanConversationsCampaignBehavior) | 🔗 |
| C | [CaravansCampaignBehavior](./campaign-ext/CaravansCampaignBehavior) | 🔗 |
| C | [CaravansCampaignBehaviorTypeDefiner](./campaign-ext/CaravansCampaignBehaviorTypeDefiner) | 🔗 |
| C | [CharacterCreationCampaignBehavior](./campaign-ext/CharacterCreationCampaignBehavior) | 🔗 |
| C | [CharacterDevelopmentCampaignBehavior](./campaign-ext/CharacterDevelopmentCampaignBehavior) | 🔗 |
| C | [CharacterRelationCampaignBehavior](./campaign-ext/CharacterRelationCampaignBehavior) | 🔗 |
| C | [ClanVariablesCampaignBehavior](./campaign-ext/ClanVariablesCampaignBehavior) | 🔗 |
| C | [CompanionGrievanceBehavior](./campaign-ext/CompanionGrievanceBehavior) | 🔗 |
| C | [CompanionGrievanceBehaviorTypeDefiner](./campaign-ext/CompanionGrievanceBehaviorTypeDefiner) | 🔗 |
| C | [CompanionRolesCampaignBehavior](./campaign-ext/CompanionRolesCampaignBehavior) | 🔗 |
| C | [CompanionsCampaignBehavior](./campaign-ext/CompanionsCampaignBehavior) | 🔗 |
| C | [CraftingCampaignBehavior](./campaign-ext/CraftingCampaignBehavior) | 🔗 |
| C | [CraftingCampaignBehaviorTypeDefiner](./campaign-ext/CraftingCampaignBehaviorTypeDefiner) | 🔗 |
| C | [CraftingOrderSlots](./campaign-ext/CraftingOrderSlots) | 🔗 |
| C | [CrimeCampaignBehavior](./campaign-ext/CrimeCampaignBehavior) | 🔗 |
| C | [DefaultLogsCampaignBehavior](./campaign-ext/DefaultLogsCampaignBehavior) | 🔗 |
| C | [DesertersCampaignBehavior](./campaign-ext/DesertersCampaignBehavior) | 🔗 |
| C | [DesertionCampaignBehavior](./campaign-ext/DesertionCampaignBehavior) | 🔗 |
| C | [DisbandPartyCampaignBehavior](./campaign-ext/DisbandPartyCampaignBehavior) | 🔗 |
| C | [DiscardItemsCampaignBehavior](./campaign-ext/DiscardItemsCampaignBehavior) | 🔗 |
| C | [DynamicBodyCampaignBehavior](./campaign-ext/DynamicBodyCampaignBehavior) | 🔗 |
| C | [EducationCampaignBehavior](./campaign-ext/EducationCampaignBehavior) | 🔗 |
| S | [EducationCharacterProperties](./campaign-ext/EducationCharacterProperties) | 🔗 |
| C | [EmissarySystemCampaignBehavior](./campaign-ext/EmissarySystemCampaignBehavior) | 🔗 |
| C | [EncounterGameMenuBehavior](./campaign-ext/EncounterGameMenuBehavior) | 🔗 |
| C | [FactionDiscontinuationCampaignBehavior](./campaign-ext/FactionDiscontinuationCampaignBehavior) | 🔗 |
| C | [FindingItemOnMapBehavior](./campaign-ext/FindingItemOnMapBehavior) | 🔗 |
| C | [FoodConsumptionBehavior](./campaign-ext/FoodConsumptionBehavior) | 🔗 |
| C | [GarrisonRecruitmentCampaignBehavior](./campaign-ext/GarrisonRecruitmentCampaignBehavior) | 🔗 |
| C | [GarrisonTroopsCampaignBehavior](./campaign-ext/GarrisonTroopsCampaignBehavior) | 🔗 |
| C | [GovernorCampaignBehavior](./campaign-ext/GovernorCampaignBehavior) | 🔗 |
| C | [HeroAgentSpawnCampaignBehavior](./campaign-ext/HeroAgentSpawnCampaignBehavior) | 🔗 |
| C | [HeroKnownInformationCampaignBehavior](./campaign-ext/HeroKnownInformationCampaignBehavior) | 🔗 |
| C | [HeroSpawnCampaignBehavior](./campaign-ext/HeroSpawnCampaignBehavior) | 🔗 |
| C | [HideoutCampaignBehavior](./campaign-ext/HideoutCampaignBehavior) | 🔗 |
| I | [IAlleyCampaignBehavior](./campaign-ext/IAlleyCampaignBehavior) | 🔗 |
| I | [IAllianceCampaignBehavior](./campaign-ext/IAllianceCampaignBehavior) | 🔗 |
| I | [ICaptivityCampaignBehavior](./campaign-ext/ICaptivityCampaignBehavior) | 🔗 |
| I | [ICraftingCampaignBehavior](./campaign-ext/ICraftingCampaignBehavior) | 🔗 |
| I | [IDisbandPartyCampaignBehavior](./campaign-ext/IDisbandPartyCampaignBehavior) | 🔗 |
| I | [IEducationLogic](./campaign-ext/IEducationLogic) | 🔗 |
| I | [IFacegenCampaignBehavior](./campaign-ext/IFacegenCampaignBehavior) | 🔗 |
| I | [IGarrisonRecruitmentBehavior](./campaign-ext/IGarrisonRecruitmentBehavior) | 🔗 |
| I | [IHideoutCampaignBehavior](./campaign-ext/IHideoutCampaignBehavior) | 🔗 |
| I | [IMapTracksCampaignBehavior](./campaign-ext/IMapTracksCampaignBehavior) | 🔗 |
| I | [IMarriageOfferCampaignBehavior](./campaign-ext/IMarriageOfferCampaignBehavior) | 🔗 |
| C | [IncidentsCampaignBehaviour](./campaign-ext/IncidentsCampaignBehaviour) | 🔗 |
| E | [IncidentTrigger](./campaign-ext/IncidentTrigger) | 🔗 |
| E | [IncidentType](./campaign-ext/IncidentType) | 🔗 |
| C | [InfluenceGainCampaignBehavior](./campaign-ext/InfluenceGainCampaignBehavior) | 🔗 |
| C | [InitialChildGenerationCampaignBehavior](./campaign-ext/InitialChildGenerationCampaignBehavior) | 🔗 |
| I | [INonReadyObjectHandler](./campaign-ext/INonReadyObjectHandler) | 🔗 |
| I | [IParleyCampaignBehavior](./campaign-ext/IParleyCampaignBehavior) | 🔗 |
| I | [IPatrolPartiesCampaignBehavior](./campaign-ext/IPatrolPartiesCampaignBehavior) | 🔗 |
| I | [IRetrainOutlawPartyMembersCampaignBehavior](./campaign-ext/IRetrainOutlawPartyMembersCampaignBehavior) | 🔗 |
| C | [IssuesCampaignBehavior](./campaign-ext/IssuesCampaignBehavior) | 🔗 |
| I | [IStatisticsCampaignBehavior](./campaign-ext/IStatisticsCampaignBehavior) | 🔗 |
| I | [ITeleportationCampaignBehavior](./campaign-ext/ITeleportationCampaignBehavior) | 🔗 |
| C | [ItemConsumptionBehavior](./campaign-ext/ItemConsumptionBehavior) | 🔗 |
| I | [ITradeAgreementsCampaignBehavior](./campaign-ext/ITradeAgreementsCampaignBehavior) | 🔗 |
| I | [ITradeRumorCampaignBehavior](./campaign-ext/ITradeRumorCampaignBehavior) | 🔗 |
| I | [IVassalAndMercenaryOfferCampaignBehavior](./campaign-ext/IVassalAndMercenaryOfferCampaignBehavior) | 🔗 |
| I | [IWorkshopWarehouseCampaignBehavior](./campaign-ext/IWorkshopWarehouseCampaignBehavior) | 🔗 |
| C | [JournalLogsCampaignBehavior](./campaign-ext/JournalLogsCampaignBehavior) | 🔗 |
| C | [KingdomDecisionProposalBehavior](./campaign-ext/KingdomDecisionProposalBehavior) | 🔗 |
| C | [LordConversationsCampaignBehavior](./campaign-ext/LordConversationsCampaignBehavior) | 🔗 |
| C | [LordDefectionCampaignBehavior](./campaign-ext/LordDefectionCampaignBehavior) | 🔗 |
| C | [LordDefectionCampaignBehaviorTypeDefiner](./campaign-ext/LordDefectionCampaignBehaviorTypeDefiner) | 🔗 |
| C | [MapTracksCampaignBehavior](./campaign-ext/MapTracksCampaignBehavior) | 🔗 |
| C | [MapWeatherCampaignBehavior](./campaign-ext/MapWeatherCampaignBehavior) | 🔗 |
| C | [MarriageOfferCampaignBehavior](./campaign-ext/MarriageOfferCampaignBehavior) | 🔗 |
| C | [MilitiasCampaignBehavior](./campaign-ext/MilitiasCampaignBehavior) | 🔗 |
| C | [MobilePartyTrainingBehavior](./campaign-ext/MobilePartyTrainingBehavior) | 🔗 |
| C | [NotableHelperCharacterCampaignBehavior](./campaign-ext/NotableHelperCharacterCampaignBehavior) | 🔗 |
| C | [NotablePowerManagementBehavior](./campaign-ext/NotablePowerManagementBehavior) | 🔗 |
| C | [NotablesCampaignBehavior](./campaign-ext/NotablesCampaignBehavior) | 🔗 |
| C | [NotableSupportersCampaignBehavior](./campaign-ext/NotableSupportersCampaignBehavior) | 🔗 |
| C | [NPCEquipmentsCampaignBehavior](./campaign-ext/NPCEquipmentsCampaignBehavior) | 🔗 |
| C | [Number](./campaign-ext/Number) | 🔗 |
| C | [OrderOfBattleCampaignBehavior](./campaign-ext/OrderOfBattleCampaignBehavior) | 🔗 |
| C | [OrderOfBattleFormationData](./campaign-ext/OrderOfBattleFormationData) | 🔗 |
| C | [ParleyCampaignBehavior](./campaign-ext/ParleyCampaignBehavior) | 🔗 |
| C | [PartiesBuyFoodCampaignBehavior](./campaign-ext/PartiesBuyFoodCampaignBehavior) | 🔗 |
| C | [PartiesBuyHorseCampaignBehavior](./campaign-ext/PartiesBuyHorseCampaignBehavior) | 🔗 |
| C | [PartiesSellLootCampaignBehavior](./campaign-ext/PartiesSellLootCampaignBehavior) | 🔗 |
| C | [PartiesSellPrisonerCampaignBehavior](./campaign-ext/PartiesSellPrisonerCampaignBehavior) | 🔗 |
| C | [PartyDiplomaticHandlerCampaignBehavior](./campaign-ext/PartyDiplomaticHandlerCampaignBehavior) | 🔗 |
| C | [PartyHealCampaignBehavior](./campaign-ext/PartyHealCampaignBehavior) | 🔗 |
| C | [PartyRolesCampaignBehavior](./campaign-ext/PartyRolesCampaignBehavior) | 🔗 |
| C | [PartyUpgraderCampaignBehavior](./campaign-ext/PartyUpgraderCampaignBehavior) | 🔗 |
| C | [PatrolPartiesCampaignBehavior](./campaign-ext/PatrolPartiesCampaignBehavior) | 🔗 |
| C | [PeaceOfferCampaignBehavior](./campaign-ext/PeaceOfferCampaignBehavior) | 🔗 |
| C | [PerkActivationHandlerCampaignBehavior](./campaign-ext/PerkActivationHandlerCampaignBehavior) | 🔗 |
| C | [PerkResetCampaignBehavior](./campaign-ext/PerkResetCampaignBehavior) | 🔗 |
| C | [PlayerArmyWaitBehavior](./campaign-ext/PlayerArmyWaitBehavior) | 🔗 |
| C | [PlayerCaptivityCampaignBehavior](./campaign-ext/PlayerCaptivityCampaignBehavior) | 🔗 |
| C | [PlayerTownVisitCampaignBehavior](./campaign-ext/PlayerTownVisitCampaignBehavior) | 🔗 |
| C | [PlayerTrackCompanionBehavior](./campaign-ext/PlayerTrackCompanionBehavior) | 🔗 |
| C | [PlayerVariablesBehavior](./campaign-ext/PlayerVariablesBehavior) | 🔗 |
| C | [PoliticalStagnationAndBorderIncidentCampaignBehavior](./campaign-ext/PoliticalStagnationAndBorderIncidentCampaignBehavior) | 🔗 |
| C | [PregnancyCampaignBehavior](./campaign-ext/PregnancyCampaignBehavior) | 🔗 |
| C | [PregnancyCampaignBehaviorTypeDefiner](./campaign-ext/PregnancyCampaignBehaviorTypeDefiner) | 🔗 |
| C | [PrisonerCaptureCampaignBehavior](./campaign-ext/PrisonerCaptureCampaignBehavior) | 🔗 |
| C | [PrisonerRecruitCampaignBehavior](./campaign-ext/PrisonerRecruitCampaignBehavior) | 🔗 |
| C | [PrisonerReleaseCampaignBehavior](./campaign-ext/PrisonerReleaseCampaignBehavior) | 🔗 |
| C | [RansomOfferCampaignBehavior](./campaign-ext/RansomOfferCampaignBehavior) | 🔗 |
| C | [RebellionsCampaignBehavior](./campaign-ext/RebellionsCampaignBehavior) | 🔗 |
| E | [RecruitingDetail](./campaign-ext/RecruitingDetail) | 🔗 |
| C | [RecruitmentCampaignBehavior](./campaign-ext/RecruitmentCampaignBehavior) | 🔗 |
| C | [RecruitmentCampaignBehaviorTypeDefiner](./campaign-ext/RecruitmentCampaignBehaviorTypeDefiner) | 🔗 |
| C | [RecruitPrisonersCampaignBehavior](./campaign-ext/RecruitPrisonersCampaignBehavior) | 🔗 |
| C | [RetrainOutlawPartyMembersBehavior](./campaign-ext/RetrainOutlawPartyMembersBehavior) | 🔗 |
| C | [RomanceCampaignBehavior](./campaign-ext/RomanceCampaignBehavior) | 🔗 |
| E | [RomanticPreference](./campaign-ext/RomanticPreference) | 🔗 |
| C | [SallyOutsCampaignBehavior](./campaign-ext/SallyOutsCampaignBehavior) | 🔗 |
| C | [SettlementClaimantCampaignBehavior](./campaign-ext/SettlementClaimantCampaignBehavior) | 🔗 |
| C | [SettlementVariablesBehavior](./campaign-ext/SettlementVariablesBehavior) | 🔗 |
| C | [SiegeAftermathCampaignBehavior](./campaign-ext/SiegeAftermathCampaignBehavior) | 🔗 |
| C | [SiegeAmbushCampaignBehavior](./campaign-ext/SiegeAmbushCampaignBehavior) | 🔗 |
| C | [SiegeEventCampaignBehavior](./campaign-ext/SiegeEventCampaignBehavior) | 🔗 |
| C | [TeleportationCampaignBehavior](./campaign-ext/TeleportationCampaignBehavior) | 🔗 |
| C | [TeleportationCampaignBehaviorTypeDefiner](./campaign-ext/TeleportationCampaignBehaviorTypeDefiner) | 🔗 |
| C | [TownMercenaryData](./campaign-ext/TownMercenaryData) | 🔗 |
| C | [TownSecurityCampaignBehavior](./campaign-ext/TownSecurityCampaignBehavior) | 🔗 |
| C | [TradeAgreementsCampaignBehavior](./campaign-ext/TradeAgreementsCampaignBehavior) | 🔗 |
| C | [TradeAgreementsCampaignBehaviorTypeDefiner](./campaign-ext/TradeAgreementsCampaignBehaviorTypeDefiner) | 🔗 |
| C | [TradeCampaignBehavior](./campaign-ext/TradeCampaignBehavior) | 🔗 |
| E | [TradeGoodType](./campaign-ext/TradeGoodType) | 🔗 |
| C | [TradeRumorsCampaignBehavior](./campaign-ext/TradeRumorsCampaignBehavior) | 🔗 |
| C | [TradeSkillCampaignBehavior](./campaign-ext/TradeSkillCampaignBehavior) | 🔗 |
| C | [TradeSkillCampaignBehaviorTypeDefiner](./campaign-ext/TradeSkillCampaignBehaviorTypeDefiner) | 🔗 |
| C | [TributesCampaignBehaviour](./campaign-ext/TributesCampaignBehaviour) | 🔗 |
| C | [VassalAndMercenaryOfferCampaignBehavior](./campaign-ext/VassalAndMercenaryOfferCampaignBehavior) | 🔗 |
| C | [ViewDataTrackerCampaignBehavior](./campaign-ext/ViewDataTrackerCampaignBehavior) | 🔗 |
| C | [VillageGoodProductionCampaignBehavior](./campaign-ext/VillageGoodProductionCampaignBehavior) | 🔗 |
| C | [VillageHealCampaignBehavior](./campaign-ext/VillageHealCampaignBehavior) | 🔗 |
| C | [VillageHostileActionCampaignBehavior](./campaign-ext/VillageHostileActionCampaignBehavior) | 🔗 |
| C | [VillagerCampaignBehavior](./campaign-ext/VillagerCampaignBehavior) | 🔗 |
| C | [VillagerCampaignBehaviorTypeDefiner](./campaign-ext/VillagerCampaignBehaviorTypeDefiner) | 🔗 |
| C | [VillageTradeBoundCampaignBehavior](./campaign-ext/VillageTradeBoundCampaignBehavior) | 🔗 |
| S | [VolunteerTroop](./campaign-ext/VolunteerTroop) | 🔗 |
| C | [WorkshopsCampaignBehavior](./campaign-ext/WorkshopsCampaignBehavior) | 🔗 |
| C | [WorkshopsCampaignBehaviorTypeDefiner](./campaign-ext/WorkshopsCampaignBehaviorTypeDefiner) | 🔗 |
| C | [WorkshopsCharactersCampaignBehavior](./campaign-ext/WorkshopsCharactersCampaignBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AiArmyMemberBehavior](./campaign-ext/AiArmyMemberBehavior) | 🔗 |
| C | [AiEngagePartyBehavior](./campaign-ext/AiEngagePartyBehavior) | 🔗 |
| C | [AiLandBanditPatrollingBehavior](./campaign-ext/AiLandBanditPatrollingBehavior) | 🔗 |
| C | [AiMilitaryBehavior](./campaign-ext/AiMilitaryBehavior) | 🔗 |
| C | [AiPartyThinkBehavior](./campaign-ext/AiPartyThinkBehavior) | 🔗 |
| C | [AiPatrollingBehavior](./campaign-ext/AiPatrollingBehavior) | 🔗 |
| C | [AiVisitSettlementBehavior](./campaign-ext/AiVisitSettlementBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DiplomaticBartersBehavior](./campaign-ext/DiplomaticBartersBehavior) | 🔗 |
| C | [FiefBarterBehavior](./campaign-ext/FiefBarterBehavior) | 🔗 |
| C | [GoldBarterBehavior](./campaign-ext/GoldBarterBehavior) | 🔗 |
| C | [ItemBarterBehavior](./campaign-ext/ItemBarterBehavior) | 🔗 |
| C | [LiftSiegeBarterBehavior](./campaign-ext/LiftSiegeBarterBehavior) | 🔗 |
| C | [SetPrisonerFreeBarterBehavior](./campaign-ext/SetPrisonerFreeBarterBehavior) | 🔗 |
| C | [TransferPrisonerBarterBehavior](./campaign-ext/TransferPrisonerBarterBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CommentCharacterBornBehavior](./campaign-ext/CommentCharacterBornBehavior) | 🔗 |
| C | [CommentChildbirthBehavior](./campaign-ext/CommentChildbirthBehavior) | 🔗 |
| C | [CommentOnChangeRomanticStateBehavior](./campaign-ext/CommentOnChangeRomanticStateBehavior) | 🔗 |
| C | [CommentOnChangeSettlementOwnerBehavior](./campaign-ext/CommentOnChangeSettlementOwnerBehavior) | 🔗 |
| C | [CommentOnChangeVillageStateBehavior](./campaign-ext/CommentOnChangeVillageStateBehavior) | 🔗 |
| C | [CommentOnCharacterKilledBehavior](./campaign-ext/CommentOnCharacterKilledBehavior) | 🔗 |
| C | [CommentOnClanDestroyedBehavior](./campaign-ext/CommentOnClanDestroyedBehavior) | 🔗 |
| C | [CommentOnClanLeaderChangedBehavior](./campaign-ext/CommentOnClanLeaderChangedBehavior) | 🔗 |
| C | [CommentOnDeclareWarBehavior](./campaign-ext/CommentOnDeclareWarBehavior) | 🔗 |
| C | [CommentOnDefeatCharacterBehavior](./campaign-ext/CommentOnDefeatCharacterBehavior) | 🔗 |
| C | [CommentOnDestroyMobilePartyBehavior](./campaign-ext/CommentOnDestroyMobilePartyBehavior) | 🔗 |
| C | [CommentOnEndPlayerBattleBehavior](./campaign-ext/CommentOnEndPlayerBattleBehavior) | 🔗 |
| C | [CommentOnKingdomDestroyedBehavior](./campaign-ext/CommentOnKingdomDestroyedBehavior) | 🔗 |
| C | [CommentOnLeaveFactionBehavior](./campaign-ext/CommentOnLeaveFactionBehavior) | 🔗 |
| C | [CommentOnMakePeaceBehavior](./campaign-ext/CommentOnMakePeaceBehavior) | 🔗 |
| C | [CommentOnPlayerMeetLordBehavior](./campaign-ext/CommentOnPlayerMeetLordBehavior) | 🔗 |
| C | [CommentPregnancyBehavior](./campaign-ext/CommentPregnancyBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CharacterCreationContent (18)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationBannerEditorStage](./campaign-ext/CharacterCreationBannerEditorStage) | 🔗 |
| C | [CharacterCreationClanNamingStage](./campaign-ext/CharacterCreationClanNamingStage) | 🔗 |
| C | [CharacterCreationContent](./campaign-ext/CharacterCreationContent) | 🔗 |
| C | [CharacterCreationCultureStage](./campaign-ext/CharacterCreationCultureStage) | 🔗 |
| C | [CharacterCreationFaceGeneratorStage](./campaign-ext/CharacterCreationFaceGeneratorStage) | 🔗 |
| C | [CharacterCreationManager](./campaign-ext/CharacterCreationManager) | 🔗 |
| C | [CharacterCreationNarrativeStage](./campaign-ext/CharacterCreationNarrativeStage) | 🔗 |
| C | [CharacterCreationOptionsStage](./campaign-ext/CharacterCreationOptionsStage) | 🔗 |
| C | [CharacterCreationReviewStage](./campaign-ext/CharacterCreationReviewStage) | 🔗 |
| C | [CharacterCreationStageBase](./campaign-ext/CharacterCreationStageBase) | 🔗 |
| C | [CharacterCreationState](./campaign-ext/CharacterCreationState) | 🔗 |
| I | [ICharacterCreationContentHandler](./campaign-ext/ICharacterCreationContentHandler) | 🔗 |
| I | [ICharacterCreationStageListener](./campaign-ext/ICharacterCreationStageListener) | 🔗 |
| I | [ICharacterCreationStateHandler](./campaign-ext/ICharacterCreationStateHandler) | 🔗 |
| C | [NarrativeMenu](./campaign-ext/NarrativeMenu) | 🔗 |
| C | [NarrativeMenuCharacter](./campaign-ext/NarrativeMenuCharacter) | 🔗 |
| C | [NarrativeMenuOption](./campaign-ext/NarrativeMenuOption) | 🔗 |
| C | [NarrativeMenuOptionArgs](./campaign-ext/NarrativeMenuOptionArgs) | 🔗 |

## TaleWorlds.CampaignSystem.CharacterDevelopment (30)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AdditionType](./campaign-ext/AdditionType) | 🔗 |
| C | [Athletics](./campaign-ext/Athletics) | 🔗 |
| C | [Bow](./campaign-ext/Bow) | 🔗 |
| C | [Charm](./campaign-ext/Charm) | 🔗 |
| C | [Crafting](./campaign-ext/Crafting) | 🔗 |
| C | [Crossbow](./campaign-ext/Crossbow) | 🔗 |
| C | [DefaultCulturalFeats](./campaign-ext/DefaultCulturalFeats) | 🔗 |
| C | [DefaultPerks](./campaign-ext/DefaultPerks) | 🔗 |
| C | [DefaultSkillLevelingManager](./campaign-ext/DefaultSkillLevelingManager) | 🔗 |
| C | [DefaultTraits](./campaign-ext/DefaultTraits) | 🔗 |
| C | [Engineering](./campaign-ext/Engineering) | 🔗 |
| C | [FeatObject](./campaign-ext/FeatObject) | 🔗 |
| C | [HeroDeveloper](./campaign-ext/HeroDeveloper) | 🔗 |
| I | [ISkillLevelingManager](./campaign-ext/ISkillLevelingManager) | 🔗 |
| C | [Leadership](./campaign-ext/Leadership) | 🔗 |
| C | [Medicine](./campaign-ext/Medicine) | 🔗 |
| C | [OneHanded](./campaign-ext/OneHanded) | 🔗 |
| C | [PerkObject](./campaign-ext/PerkObject) | 🔗 |
| C | [Polearm](./campaign-ext/Polearm) | 🔗 |
| C | [Riding](./campaign-ext/Riding) | 🔗 |
| C | [Roguery](./campaign-ext/Roguery) | 🔗 |
| C | [Scouting](./campaign-ext/Scouting) | 🔗 |
| C | [SkillLevelingManager](./campaign-ext/SkillLevelingManager) | 🔗 |
| C | [Steward](./campaign-ext/Steward) | 🔗 |
| C | [Tactics](./campaign-ext/Tactics) | 🔗 |
| C | [Throwing](./campaign-ext/Throwing) | 🔗 |
| C | [Trade](./campaign-ext/Trade) | 🔗 |
| C | [TraitLevelingHelper](./campaign-ext/TraitLevelingHelper) | 🔗 |
| C | [TraitObject](./campaign-ext/TraitObject) | 🔗 |
| C | [TwoHanded](./campaign-ext/TwoHanded) | 🔗 |

## TaleWorlds.CampaignSystem.ComponentInterfaces (141)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [AccessDetails](./campaign-ext/AccessDetails) | 🔗 |
| E | [AccessLevel](./campaign-ext/AccessLevel) | 🔗 |
| E | [AccessLimitationReason](./campaign-ext/AccessLimitationReason) | 🔗 |
| E | [AccessMethod](./campaign-ext/AccessMethod) | 🔗 |
| C | [AgeModel](./campaign-ext/AgeModel) | 🔗 |
| C | [AlleyModel](./campaign-ext/AlleyModel) | 🔗 |
| C | [AllianceModel](./campaign-ext/AllianceModel) | 🔗 |
| C | [ArmyManagementCalculationModel](./campaign-ext/ArmyManagementCalculationModel) | 🔗 |
| C | [BanditDensityModel](./campaign-ext/BanditDensityModel) | 🔗 |
| C | [BannerItemModel](./campaign-ext/BannerItemModel) | 🔗 |
| C | [BarterModel](./campaign-ext/BarterModel) | 🔗 |
| C | [BattleCaptainModel](./campaign-ext/BattleCaptainModel) | 🔗 |
| C | [BattleRewardModel](./campaign-ext/BattleRewardModel) | 🔗 |
| C | [BodyPropertiesModel](./campaign-ext/BodyPropertiesModel) | 🔗 |
| C | [BribeCalculationModel](./campaign-ext/BribeCalculationModel) | 🔗 |
| C | [BuildingConstructionModel](./campaign-ext/BuildingConstructionModel) | 🔗 |
| C | [BuildingEffectModel](./campaign-ext/BuildingEffectModel) | 🔗 |
| C | [BuildingModel](./campaign-ext/BuildingModel) | 🔗 |
| C | [BuildingScoreCalculationModel](./campaign-ext/BuildingScoreCalculationModel) | 🔗 |
| C | [CampaignShipDamageModel](./campaign-ext/CampaignShipDamageModel) | 🔗 |
| C | [CampaignShipParametersModel](./campaign-ext/CampaignShipParametersModel) | 🔗 |
| C | [CampaignTimeModel](./campaign-ext/CampaignTimeModel) | 🔗 |
| C | [CaravanModel](./campaign-ext/CaravanModel) | 🔗 |
| C | [CharacterDevelopmentModel](./campaign-ext/CharacterDevelopmentModel) | 🔗 |
| C | [CharacterStatsModel](./campaign-ext/CharacterStatsModel) | 🔗 |
| C | [ClanFinanceModel](./campaign-ext/ClanFinanceModel) | 🔗 |
| C | [ClanPoliticsModel](./campaign-ext/ClanPoliticsModel) | 🔗 |
| C | [ClanTierModel](./campaign-ext/ClanTierModel) | 🔗 |
| C | [CombatSimulationModel](./campaign-ext/CombatSimulationModel) | 🔗 |
| C | [CombatXpModel](./campaign-ext/CombatXpModel) | 🔗 |
| C | [CompanionHiringPriceCalculationModel](./campaign-ext/CompanionHiringPriceCalculationModel) | 🔗 |
| C | [CrimeModel](./campaign-ext/CrimeModel) | 🔗 |
| C | [CutsceneSelectionModel](./campaign-ext/CutsceneSelectionModel) | 🔗 |
| C | [DailyTroopXpBonusModel](./campaign-ext/DailyTroopXpBonusModel) | 🔗 |
| C | [DefectionModel](./campaign-ext/DefectionModel) | 🔗 |
| C | [DelayedTeleportationModel](./campaign-ext/DelayedTeleportationModel) | 🔗 |
| C | [DifficultyModel](./campaign-ext/DifficultyModel) | 🔗 |
| C | [DiplomacyModel](./campaign-ext/DiplomacyModel) | 🔗 |
| E | [DiplomacyStance](./campaign-ext/DiplomacyStance) | 🔗 |
| C | [DisguiseDetectionModel](./campaign-ext/DisguiseDetectionModel) | 🔗 |
| C | [EmissaryModel](./campaign-ext/EmissaryModel) | 🔗 |
| C | [EncounterGameMenuModel](./campaign-ext/EncounterGameMenuModel) | 🔗 |
| C | [EncounterModel](./campaign-ext/EncounterModel) | 🔗 |
| C | [EquipmentSelectionModel](./campaign-ext/EquipmentSelectionModel) | 🔗 |
| C | [ExecutionRelationModel](./campaign-ext/ExecutionRelationModel) | 🔗 |
| C | [FleetManagementModel](./campaign-ext/FleetManagementModel) | 🔗 |
| C | [GenericXpModel](./campaign-ext/GenericXpModel) | 🔗 |
| C | [HeirSelectionCalculationModel](./campaign-ext/HeirSelectionCalculationModel) | 🔗 |
| C | [HeroAgentLocationModel](./campaign-ext/HeroAgentLocationModel) | 🔗 |
| C | [HeroCreationModel](./campaign-ext/HeroCreationModel) | 🔗 |
| C | [HeroDeathProbabilityCalculationModel](./campaign-ext/HeroDeathProbabilityCalculationModel) | 🔗 |
| E | [HeroLocationDetail](./campaign-ext/HeroLocationDetail) | 🔗 |
| C | [HideoutModel](./campaign-ext/HideoutModel) | 🔗 |
| I | [INavigationCache](./campaign-ext/INavigationCache) | 🔗 |
| C | [IncidentModel](./campaign-ext/IncidentModel) | 🔗 |
| C | [InformationRestrictionModel](./campaign-ext/InformationRestrictionModel) | 🔗 |
| C | [InventoryCapacityModel](./campaign-ext/InventoryCapacityModel) | 🔗 |
| C | [IssueModel](./campaign-ext/IssueModel) | 🔗 |
| C | [ItemDiscardModel](./campaign-ext/ItemDiscardModel) | 🔗 |
| C | [KingdomCreationModel](./campaign-ext/KingdomCreationModel) | 🔗 |
| C | [KingdomDecisionPermissionModel](./campaign-ext/KingdomDecisionPermissionModel) | 🔗 |
| E | [LimitedAccessSolution](./campaign-ext/LimitedAccessSolution) | 🔗 |
| C | [LocationModel](./campaign-ext/LocationModel) | 🔗 |
| C | [MapDistanceModel](./campaign-ext/MapDistanceModel) | 🔗 |
| C | [MapTrackModel](./campaign-ext/MapTrackModel) | 🔗 |
| C | [MapVisibilityModel](./campaign-ext/MapVisibilityModel) | 🔗 |
| C | [MapWeatherModel](./campaign-ext/MapWeatherModel) | 🔗 |
| C | [MarriageModel](./campaign-ext/MarriageModel) | 🔗 |
| C | [MilitaryPowerModel](./campaign-ext/MilitaryPowerModel) | 🔗 |
| C | [MinorFactionsModel](./campaign-ext/MinorFactionsModel) | 🔗 |
| E | [MissionTypeEnum](./campaign-ext/MissionTypeEnum) | 🔗 |
| C | [MobilePartyAIModel](./campaign-ext/MobilePartyAIModel) | 🔗 |
| C | [MobilePartyFoodConsumptionModel](./campaign-ext/MobilePartyFoodConsumptionModel) | 🔗 |
| C | [MobilePartyMoraleModel](./campaign-ext/MobilePartyMoraleModel) | 🔗 |
| C | [NotablePowerModel](./campaign-ext/NotablePowerModel) | 🔗 |
| C | [NotableSpawnModel](./campaign-ext/NotableSpawnModel) | 🔗 |
| C | [PartyDesertionModel](./campaign-ext/PartyDesertionModel) | 🔗 |
| C | [PartyFoodBuyingModel](./campaign-ext/PartyFoodBuyingModel) | 🔗 |
| C | [PartyHealingModel](./campaign-ext/PartyHealingModel) | 🔗 |
| C | [PartyImpairmentModel](./campaign-ext/PartyImpairmentModel) | 🔗 |
| C | [PartyMoraleModel](./campaign-ext/PartyMoraleModel) | 🔗 |
| C | [PartyNavigationModel](./campaign-ext/PartyNavigationModel) | 🔗 |
| C | [PartyShipLimitModel](./campaign-ext/PartyShipLimitModel) | 🔗 |
| C | [PartySizeLimitModel](./campaign-ext/PartySizeLimitModel) | 🔗 |
| C | [PartySpeedModel](./campaign-ext/PartySpeedModel) | 🔗 |
| C | [PartyTradeModel](./campaign-ext/PartyTradeModel) | 🔗 |
| C | [PartyTrainingModel](./campaign-ext/PartyTrainingModel) | 🔗 |
| C | [PartyTransitionModel](./campaign-ext/PartyTransitionModel) | 🔗 |
| C | [PartyTroopUpgradeModel](./campaign-ext/PartyTroopUpgradeModel) | 🔗 |
| C | [PartyWageModel](./campaign-ext/PartyWageModel) | 🔗 |
| E | [PaymentMethod](./campaign-ext/PaymentMethod) | 🔗 |
| C | [PersuasionModel](./campaign-ext/PersuasionModel) | 🔗 |
| C | [PlayerProgressionModel](./campaign-ext/PlayerProgressionModel) | 🔗 |
| C | [PregnancyModel](./campaign-ext/PregnancyModel) | 🔗 |
| E | [PreliminaryActionObligation](./campaign-ext/PreliminaryActionObligation) | 🔗 |
| E | [PreliminaryActionType](./campaign-ext/PreliminaryActionType) | 🔗 |
| C | [PrisonBreakModel](./campaign-ext/PrisonBreakModel) | 🔗 |
| C | [PrisonerDonationModel](./campaign-ext/PrisonerDonationModel) | 🔗 |
| C | [PrisonerRecruitmentCalculationModel](./campaign-ext/PrisonerRecruitmentCalculationModel) | 🔗 |
| C | [RaidModel](./campaign-ext/RaidModel) | 🔗 |
| C | [RansomValueCalculationModel](./campaign-ext/RansomValueCalculationModel) | 🔗 |
| C | [RomanceModel](./campaign-ext/RomanceModel) | 🔗 |
| C | [SceneModel](./campaign-ext/SceneModel) | 🔗 |
| C | [SettlementAccessModel](./campaign-ext/SettlementAccessModel) | 🔗 |
| E | [SettlementAction](./campaign-ext/SettlementAction) | 🔗 |
| C | [SettlementEconomyModel](./campaign-ext/SettlementEconomyModel) | 🔗 |
| C | [SettlementFoodModel](./campaign-ext/SettlementFoodModel) | 🔗 |
| C | [SettlementGarrisonModel](./campaign-ext/SettlementGarrisonModel) | 🔗 |
| C | [SettlementLoyaltyModel](./campaign-ext/SettlementLoyaltyModel) | 🔗 |
| C | [SettlementMenuOverlayModel](./campaign-ext/SettlementMenuOverlayModel) | 🔗 |
| C | [SettlementMilitiaModel](./campaign-ext/SettlementMilitiaModel) | 🔗 |
| C | [SettlementPatrolModel](./campaign-ext/SettlementPatrolModel) | 🔗 |
| C | [SettlementProsperityModel](./campaign-ext/SettlementProsperityModel) | 🔗 |
| C | [SettlementSecurityModel](./campaign-ext/SettlementSecurityModel) | 🔗 |
| C | [SettlementTaxModel](./campaign-ext/SettlementTaxModel) | 🔗 |
| C | [SettlementValueModel](./campaign-ext/SettlementValueModel) | 🔗 |
| C | [ShipCostModel](./campaign-ext/ShipCostModel) | 🔗 |
| C | [ShipStatModel](./campaign-ext/ShipStatModel) | 🔗 |
| E | [SiegeAction](./campaign-ext/SiegeAction) | 🔗 |
| C | [SiegeAftermathModel](./campaign-ext/SiegeAftermathModel) | 🔗 |
| C | [SiegeEventModel](./campaign-ext/SiegeEventModel) | 🔗 |
| C | [SiegeLordsHallFightModel](./campaign-ext/SiegeLordsHallFightModel) | 🔗 |
| C | [SiegeStrategyActionModel](./campaign-ext/SiegeStrategyActionModel) | 🔗 |
| C | [SmithingModel](./campaign-ext/SmithingModel) | 🔗 |
| C | [TargetScoreCalculatingModel](./campaign-ext/TargetScoreCalculatingModel) | 🔗 |
| C | [TavernMercenaryTroopsModel](./campaign-ext/TavernMercenaryTroopsModel) | 🔗 |
| C | [TournamentModel](./campaign-ext/TournamentModel) | 🔗 |
| C | [TradeAgreementModel](./campaign-ext/TradeAgreementModel) | 🔗 |
| C | [TradeItemPriceFactorModel](./campaign-ext/TradeItemPriceFactorModel) | 🔗 |
| C | [TroopSacrificeModel](./campaign-ext/TroopSacrificeModel) | 🔗 |
| C | [TroopSupplierProbabilityModel](./campaign-ext/TroopSupplierProbabilityModel) | 🔗 |
| C | [ValuationModel](./campaign-ext/ValuationModel) | 🔗 |
| C | [VassalRewardsModel](./campaign-ext/VassalRewardsModel) | 🔗 |
| C | [VillageProductionCalculatorModel](./campaign-ext/VillageProductionCalculatorModel) | 🔗 |
| C | [VillageTradeModel](./campaign-ext/VillageTradeModel) | 🔗 |
| C | [VoiceOverModel](./campaign-ext/VoiceOverModel) | 🔗 |
| C | [VolunteerModel](./campaign-ext/VolunteerModel) | 🔗 |
| C | [WallHitPointCalculationModel](./campaign-ext/WallHitPointCalculationModel) | 🔗 |
| E | [WeatherEvent](./campaign-ext/WeatherEvent) | 🔗 |
| E | [WeatherEventEffectOnTerrain](./campaign-ext/WeatherEventEffectOnTerrain) | 🔗 |
| C | [WorkshopModel](./campaign-ext/WorkshopModel) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CampaignMapConversation](./campaign-ext/CampaignMapConversation) | 🔗 |
| C | [ConversationAnimationManager](./campaign-ext/ConversationAnimationManager) | 🔗 |
| C | [ConversationAnimData](./campaign-ext/ConversationAnimData) | 🔗 |
| S | [ConversationCharacterData](./campaign-ext/ConversationCharacterData) | 🔗 |
| C | [ConversationHelper](./campaign-ext/ConversationHelper) | 🔗 |
| C | [ConversationManager](./campaign-ext/ConversationManager) | 🔗 |
| C | [ConversationSentence](./campaign-ext/ConversationSentence) | 🔗 |
| S | [ConversationSentenceOption](./campaign-ext/ConversationSentenceOption) | 🔗 |
| E | [ConversationToken](./campaign-ext/ConversationToken) | 🔗 |
| C | [ConversationTokens](./campaign-ext/ConversationTokens) | 🔗 |
| E | [DialogLineFlags](./campaign-ext/DialogLineFlags) | 🔗 |
| I | [IConversationStateHandler](./campaign-ext/IConversationStateHandler) | 🔗 |
| C | [MapConversationAgent](./campaign-ext/MapConversationAgent) | 🔗 |
| C | [TaggedString](./campaign-ext/TaggedString) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation.Persuasion (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Persuasion](./campaign-ext/Persuasion) | 🔗 |
| E | [PersuasionArgumentStrength](./campaign-ext/PersuasionArgumentStrength) | 🔗 |
| C | [PersuasionAttempt](./campaign-ext/PersuasionAttempt) | 🔗 |
| E | [PersuasionDifficulty](./campaign-ext/PersuasionDifficulty) | 🔗 |
| C | [PersuasionOptionArgs](./campaign-ext/PersuasionOptionArgs) | 🔗 |
| E | [PersuasionOptionResult](./campaign-ext/PersuasionOptionResult) | 🔗 |
| C | [PersuasionTask](./campaign-ext/PersuasionTask) | 🔗 |
| E | [TraitEffect](./campaign-ext/TraitEffect) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation.Tags (97)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AlliedLordTag](./campaign-ext/AlliedLordTag) | 🔗 |
| C | [AmoralTag](./campaign-ext/AmoralTag) | 🔗 |
| C | [AnyNotableTypeTag](./campaign-ext/AnyNotableTypeTag) | 🔗 |
| C | [ArtisanNotableTypeTag](./campaign-ext/ArtisanNotableTypeTag) | 🔗 |
| C | [AseraiTag](./campaign-ext/AseraiTag) | 🔗 |
| C | [AttackingTag](./campaign-ext/AttackingTag) | 🔗 |
| C | [AttractedToPlayerTag](./campaign-ext/AttractedToPlayerTag) | 🔗 |
| C | [BattanianTag](./campaign-ext/BattanianTag) | 🔗 |
| C | [CalculatingTag](./campaign-ext/CalculatingTag) | 🔗 |
| C | [CautiousTag](./campaign-ext/CautiousTag) | 🔗 |
| C | [ChivalrousTag](./campaign-ext/ChivalrousTag) | 🔗 |
| C | [CombatantTag](./campaign-ext/CombatantTag) | 🔗 |
| C | [ConversationTag](./campaign-ext/ConversationTag) | 🔗 |
| C | [ConversationTagHelper](./campaign-ext/ConversationTagHelper) | 🔗 |
| C | [CruelTag](./campaign-ext/CruelTag) | 🔗 |
| C | [CurrentConversationIsFirst](./campaign-ext/CurrentConversationIsFirst) | 🔗 |
| C | [DefaultTag](./campaign-ext/DefaultTag) | 🔗 |
| C | [DeviousTag](./campaign-ext/DeviousTag) | 🔗 |
| C | [DrinkingInTavernTag](./campaign-ext/DrinkingInTavernTag) | 🔗 |
| C | [EmpireTag](./campaign-ext/EmpireTag) | 🔗 |
| C | [EngagedToPlayerTag](./campaign-ext/EngagedToPlayerTag) | 🔗 |
| C | [FirstMeetingTag](./campaign-ext/FirstMeetingTag) | 🔗 |
| C | [FriendlyRelationshipTag](./campaign-ext/FriendlyRelationshipTag) | 🔗 |
| C | [GangLeaderNotableTypeTag](./campaign-ext/GangLeaderNotableTypeTag) | 🔗 |
| C | [GenerosityTag](./campaign-ext/GenerosityTag) | 🔗 |
| C | [HeadmanNotableTypeTag](./campaign-ext/HeadmanNotableTypeTag) | 🔗 |
| C | [HighRegisterTag](./campaign-ext/HighRegisterTag) | 🔗 |
| C | [HonorTag](./campaign-ext/HonorTag) | 🔗 |
| C | [HostileRelationshipTag](./campaign-ext/HostileRelationshipTag) | 🔗 |
| C | [ImpoliteTag](./campaign-ext/ImpoliteTag) | 🔗 |
| C | [ImpulsiveTag](./campaign-ext/ImpulsiveTag) | 🔗 |
| C | [InHomeSettlementTag](./campaign-ext/InHomeSettlementTag) | 🔗 |
| C | [KhuzaitTag](./campaign-ext/KhuzaitTag) | 🔗 |
| C | [LowRegisterTag](./campaign-ext/LowRegisterTag) | 🔗 |
| C | [MerchantNotableTypeTag](./campaign-ext/MerchantNotableTypeTag) | 🔗 |
| C | [MercyTag](./campaign-ext/MercyTag) | 🔗 |
| C | [MetBeforeTag](./campaign-ext/MetBeforeTag) | 🔗 |
| C | [NoConflictTag](./campaign-ext/NoConflictTag) | 🔗 |
| C | [NonCombatantTag](./campaign-ext/NonCombatantTag) | 🔗 |
| C | [NonviolentProfessionTag](./campaign-ext/NonviolentProfessionTag) | 🔗 |
| C | [NordTag](./campaign-ext/NordTag) | 🔗 |
| C | [NpcIsFemaleTag](./campaign-ext/NpcIsFemaleTag) | 🔗 |
| C | [NPCIsInSeaTag](./campaign-ext/NPCIsInSeaTag) | 🔗 |
| C | [NpcIsLiegeTag](./campaign-ext/NpcIsLiegeTag) | 🔗 |
| C | [NpcIsMaleTag](./campaign-ext/NpcIsMaleTag) | 🔗 |
| C | [NpcIsNobleTag](./campaign-ext/NpcIsNobleTag) | 🔗 |
| C | [OldTag](./campaign-ext/OldTag) | 🔗 |
| C | [OnTheRoadTag](./campaign-ext/OnTheRoadTag) | 🔗 |
| C | [OutlawSympathyTag](./campaign-ext/OutlawSympathyTag) | 🔗 |
| C | [PersonaCurtTag](./campaign-ext/PersonaCurtTag) | 🔗 |
| C | [PersonaEarnestTag](./campaign-ext/PersonaEarnestTag) | 🔗 |
| C | [PersonaIronicTag](./campaign-ext/PersonaIronicTag) | 🔗 |
| C | [PersonaSoftspokenTag](./campaign-ext/PersonaSoftspokenTag) | 🔗 |
| C | [PlayerBesiegingTag](./campaign-ext/PlayerBesiegingTag) | 🔗 |
| C | [PlayerIsAffiliatedTag](./campaign-ext/PlayerIsAffiliatedTag) | 🔗 |
| C | [PlayerIsAtSeaTag](./campaign-ext/PlayerIsAtSeaTag) | 🔗 |
| C | [PlayerIsBrotherTag](./campaign-ext/PlayerIsBrotherTag) | 🔗 |
| C | [PlayerIsDaughterTag](./campaign-ext/PlayerIsDaughterTag) | 🔗 |
| C | [PlayerIsEnemyTag](./campaign-ext/PlayerIsEnemyTag) | 🔗 |
| C | [PlayerIsFamousTag](./campaign-ext/PlayerIsFamousTag) | 🔗 |
| C | [PlayerIsFatherTag](./campaign-ext/PlayerIsFatherTag) | 🔗 |
| C | [PlayerIsFemaleTag](./campaign-ext/PlayerIsFemaleTag) | 🔗 |
| C | [PlayerIsKinTag](./campaign-ext/PlayerIsKinTag) | 🔗 |
| C | [PlayerIsKnownButNotFamousTag](./campaign-ext/PlayerIsKnownButNotFamousTag) | 🔗 |
| C | [PlayerIsLiegeTag](./campaign-ext/PlayerIsLiegeTag) | 🔗 |
| C | [PlayerIsMaleTag](./campaign-ext/PlayerIsMaleTag) | 🔗 |
| C | [PlayerIsMotherTag](./campaign-ext/PlayerIsMotherTag) | 🔗 |
| C | [PlayerIsNobleTag](./campaign-ext/PlayerIsNobleTag) | 🔗 |
| C | [PlayerIsRulerTag](./campaign-ext/PlayerIsRulerTag) | 🔗 |
| C | [PlayerIsSisterTag](./campaign-ext/PlayerIsSisterTag) | 🔗 |
| C | [PlayerIsSonTag](./campaign-ext/PlayerIsSonTag) | 🔗 |
| C | [PlayerIsSpouseTag](./campaign-ext/PlayerIsSpouseTag) | 🔗 |
| C | [PreacherNotableTypeTag](./campaign-ext/PreacherNotableTypeTag) | 🔗 |
| C | [RogueSkillsTag](./campaign-ext/RogueSkillsTag) | 🔗 |
| C | [RomanticallyInvolvedTag](./campaign-ext/RomanticallyInvolvedTag) | 🔗 |
| C | [SexistTag](./campaign-ext/SexistTag) | 🔗 |
| C | [SturgianTag](./campaign-ext/SturgianTag) | 🔗 |
| C | [TribalRegisterTag](./campaign-ext/TribalRegisterTag) | 🔗 |
| C | [UncharitableTag](./campaign-ext/UncharitableTag) | 🔗 |
| C | [UnderCommandTag](./campaign-ext/UnderCommandTag) | 🔗 |
| C | [UngratefulTag](./campaign-ext/UngratefulTag) | 🔗 |
| C | [ValorTag](./campaign-ext/ValorTag) | 🔗 |
| C | [VlandianTag](./campaign-ext/VlandianTag) | 🔗 |
| C | [VoiceGroupPersonaCurtLowerTag](./campaign-ext/VoiceGroupPersonaCurtLowerTag) | 🔗 |
| C | [VoiceGroupPersonaCurtTribalTag](./campaign-ext/VoiceGroupPersonaCurtTribalTag) | 🔗 |
| C | [VoiceGroupPersonaCurtUpperTag](./campaign-ext/VoiceGroupPersonaCurtUpperTag) | 🔗 |
| C | [VoiceGroupPersonaEarnestLowerTag](./campaign-ext/VoiceGroupPersonaEarnestLowerTag) | 🔗 |
| C | [VoiceGroupPersonaEarnestTribalTag](./campaign-ext/VoiceGroupPersonaEarnestTribalTag) | 🔗 |
| C | [VoiceGroupPersonaEarnestUpperTag](./campaign-ext/VoiceGroupPersonaEarnestUpperTag) | 🔗 |
| C | [VoiceGroupPersonaIronicLowerTag](./campaign-ext/VoiceGroupPersonaIronicLowerTag) | 🔗 |
| C | [VoiceGroupPersonaIronicTribalTag](./campaign-ext/VoiceGroupPersonaIronicTribalTag) | 🔗 |
| C | [VoiceGroupPersonaIronicUpperTag](./campaign-ext/VoiceGroupPersonaIronicUpperTag) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenLowerTag](./campaign-ext/VoiceGroupPersonaSoftspokenLowerTag) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenTribalTag](./campaign-ext/VoiceGroupPersonaSoftspokenTribalTag) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenUpperTag](./campaign-ext/VoiceGroupPersonaSoftspokenUpperTag) | 🔗 |
| C | [WandererTag](./campaign-ext/WandererTag) | 🔗 |
| C | [WaryTag](./campaign-ext/WaryTag) | 🔗 |

## TaleWorlds.CampaignSystem.CraftingSystem (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingOrder](./campaign-ext/CraftingOrder) | 🔗 |

## TaleWorlds.CampaignSystem.Election (28)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarAgreementDecision](./campaign-ext/AcceptCallToWarAgreementDecision) | 🔗 |
| C | [AcceptCallToWarAgreementDecisionOutcome](./campaign-ext/AcceptCallToWarAgreementDecisionOutcome) | 🔗 |
| C | [ClanAsDecisionOutcome](./campaign-ext/ClanAsDecisionOutcome) | 🔗 |
| C | [DecisionOutcome](./campaign-ext/DecisionOutcome) | 🔗 |
| C | [DeclareWarDecision](./campaign-ext/DeclareWarDecision) | 🔗 |
| C | [DeclareWarDecisionOutcome](./campaign-ext/DeclareWarDecisionOutcome) | 🔗 |
| C | [ExpelClanDecisionOutcome](./campaign-ext/ExpelClanDecisionOutcome) | 🔗 |
| C | [ExpelClanFromKingdomDecision](./campaign-ext/ExpelClanFromKingdomDecision) | 🔗 |
| C | [KingdomDecision](./campaign-ext/KingdomDecision) | 🔗 |
| C | [KingdomElection](./campaign-ext/KingdomElection) | 🔗 |
| C | [KingdomPolicyDecision](./campaign-ext/KingdomPolicyDecision) | 🔗 |
| C | [KingSelectionDecisionOutcome](./campaign-ext/KingSelectionDecisionOutcome) | 🔗 |
| C | [KingSelectionKingdomDecision](./campaign-ext/KingSelectionKingdomDecision) | 🔗 |
| C | [MakePeaceDecisionOutcome](./campaign-ext/MakePeaceDecisionOutcome) | 🔗 |
| C | [MakePeaceKingdomDecision](./campaign-ext/MakePeaceKingdomDecision) | 🔗 |
| C | [PolicyDecisionOutcome](./campaign-ext/PolicyDecisionOutcome) | 🔗 |
| C | [ProposeCallToWarAgreementDecision](./campaign-ext/ProposeCallToWarAgreementDecision) | 🔗 |
| C | [ProposeCallToWarAgreementDecisionOutcome](./campaign-ext/ProposeCallToWarAgreementDecisionOutcome) | 🔗 |
| C | [SettlementClaimantDecision](./campaign-ext/SettlementClaimantDecision) | 🔗 |
| C | [SettlementClaimantPreliminaryDecision](./campaign-ext/SettlementClaimantPreliminaryDecision) | 🔗 |
| C | [SettlementClaimantPreliminaryOutcome](./campaign-ext/SettlementClaimantPreliminaryOutcome) | 🔗 |
| C | [StartAllianceDecision](./campaign-ext/StartAllianceDecision) | 🔗 |
| C | [StartAllianceDecisionOutcome](./campaign-ext/StartAllianceDecisionOutcome) | 🔗 |
| C | [Supporter](./campaign-ext/Supporter) | 🔗 |
| E | [SupportStatus](./campaign-ext/SupportStatus) | 🔗 |
| E | [SupportWeights](./campaign-ext/SupportWeights) | 🔗 |
| C | [TradeAgreementDecision](./campaign-ext/TradeAgreementDecision) | 🔗 |
| C | [TradeAgreementDecisionOutcome](./campaign-ext/TradeAgreementDecisionOutcome) | 🔗 |

## TaleWorlds.CampaignSystem.Encounters (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CampaignBattleResult](./campaign-ext/CampaignBattleResult) | 🔗 |
| C | [CastleEncounter](./campaign-ext/CastleEncounter) | 🔗 |
| C | [HideoutEncounter](./campaign-ext/HideoutEncounter) | 🔗 |
| C | [LocationEncounter](./campaign-ext/LocationEncounter) | 🔗 |
| C | [PlayerEncounter](./campaign-ext/PlayerEncounter) | 🔗 |
| E | [PlayerEncounterState](./campaign-ext/PlayerEncounterState) | 🔗 |
| C | [RetirementEncounter](./campaign-ext/RetirementEncounter) | 🔗 |
| C | [TownEncounter](./campaign-ext/TownEncounter) | 🔗 |
| C | [VillageEncounter](./campaign-ext/VillageEncounter) | 🔗 |

## TaleWorlds.CampaignSystem.Encyclopedia (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaFilterGroup](./campaign-ext/EncyclopediaFilterGroup) | 🔗 |
| C | [EncyclopediaFilterItem](./campaign-ext/EncyclopediaFilterItem) | 🔗 |
| S | [EncyclopediaListItem](./campaign-ext/EncyclopediaListItem) | 🔗 |
| C | [EncyclopediaListItemComparerBase](./campaign-ext/EncyclopediaListItemComparerBase) | 🔗 |
| C | [EncyclopediaManager](./campaign-ext/EncyclopediaManager) | 🔗 |
| C | [EncyclopediaModelBase](./campaign-ext/EncyclopediaModelBase) | 🔗 |
| C | [EncyclopediaPage](./campaign-ext/EncyclopediaPage) | 🔗 |
| C | [EncyclopediaSortController](./campaign-ext/EncyclopediaSortController) | 🔗 |
| C | [OverrideEncyclopediaModel](./campaign-ext/OverrideEncyclopediaModel) | 🔗 |

## TaleWorlds.CampaignSystem.Encyclopedia.Pages (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultEncyclopediaClanPage](./campaign-ext/DefaultEncyclopediaClanPage) | 🔗 |
| C | [DefaultEncyclopediaConceptPage](./campaign-ext/DefaultEncyclopediaConceptPage) | 🔗 |
| C | [DefaultEncyclopediaFactionPage](./campaign-ext/DefaultEncyclopediaFactionPage) | 🔗 |
| C | [DefaultEncyclopediaHeroPage](./campaign-ext/DefaultEncyclopediaHeroPage) | 🔗 |
| C | [DefaultEncyclopediaSettlementPage](./campaign-ext/DefaultEncyclopediaSettlementPage) | 🔗 |
| C | [DefaultEncyclopediaShipPage](./campaign-ext/DefaultEncyclopediaShipPage) | 🔗 |
| C | [DefaultEncyclopediaUnitPage](./campaign-ext/DefaultEncyclopediaUnitPage) | 🔗 |
| C | [EncyclopediaListClanComparer](./campaign-ext/EncyclopediaListClanComparer) | 🔗 |
| C | [EncyclopediaListHeroComparer](./campaign-ext/EncyclopediaListHeroComparer) | 🔗 |
| C | [EncyclopediaListKingdomComparer](./campaign-ext/EncyclopediaListKingdomComparer) | 🔗 |
| C | [EncyclopediaListSettlementComparer](./campaign-ext/EncyclopediaListSettlementComparer) | 🔗 |
| C | [EncyclopediaListShipComparer](./campaign-ext/EncyclopediaListShipComparer) | 🔗 |
| C | [EncyclopediaListUnitComparer](./campaign-ext/EncyclopediaListUnitComparer) | 🔗 |

## TaleWorlds.CampaignSystem.Extensions (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Attributes](./campaign-ext/Attributes) | 🔗 |
| C | [ItemCategories](./campaign-ext/ItemCategories) | 🔗 |
| C | [ItemObjectExtensions](./campaign-ext/ItemObjectExtensions) | 🔗 |
| C | [Items](./campaign-ext/Items) | 🔗 |
| C | [MBEquipmentRosterExtensions](./campaign-ext/MBEquipmentRosterExtensions) | 🔗 |
| C | [MetaDataExtensions](./core-extra/MetaDataExtensions) | 🔗 |
| C | [SiegeEngineTypes](./campaign-ext/SiegeEngineTypes) | 🔗 |
| C | [Skills](./campaign-ext/Skills) | 🔗 |
| C | [TextObjectExtensions](./campaign-ext/TextObjectExtensions) | 🔗 |

## TaleWorlds.CampaignSystem.GameComponents (125)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlleyMemberAvailabilityDetail](./campaign-ext/AlleyMemberAvailabilityDetail) | 🔗 |
| E | [AssetIncomeType](./campaign-ext/AssetIncomeType) | 🔗 |
| C | [DefaultAgeModel](./campaign-ext/DefaultAgeModel) | 🔗 |
| C | [DefaultAlleyModel](./campaign-ext/DefaultAlleyModel) | 🔗 |
| C | [DefaultAllianceModel](./campaign-ext/DefaultAllianceModel) | 🔗 |
| C | [DefaultArmyManagementCalculationModel](./campaign-ext/DefaultArmyManagementCalculationModel) | 🔗 |
| C | [DefaultBanditDensityModel](./campaign-ext/DefaultBanditDensityModel) | 🔗 |
| C | [DefaultBannerItemModel](./campaign-ext/DefaultBannerItemModel) | 🔗 |
| C | [DefaultBarterModel](./campaign-ext/DefaultBarterModel) | 🔗 |
| C | [DefaultBattleCaptainModel](./campaign-ext/DefaultBattleCaptainModel) | 🔗 |
| C | [DefaultBattleRewardModel](./campaign-ext/DefaultBattleRewardModel) | 🔗 |
| C | [DefaultBodyPropertiesModel](./campaign-ext/DefaultBodyPropertiesModel) | 🔗 |
| C | [DefaultBribeCalculationModel](./campaign-ext/DefaultBribeCalculationModel) | 🔗 |
| C | [DefaultBuildingConstructionModel](./campaign-ext/DefaultBuildingConstructionModel) | 🔗 |
| C | [DefaultBuildingEffectModel](./campaign-ext/DefaultBuildingEffectModel) | 🔗 |
| C | [DefaultBuildingModel](./campaign-ext/DefaultBuildingModel) | 🔗 |
| C | [DefaultBuildingScoreCalculationModel](./campaign-ext/DefaultBuildingScoreCalculationModel) | 🔗 |
| C | [DefaultCampaignShipDamageModel](./campaign-ext/DefaultCampaignShipDamageModel) | 🔗 |
| C | [DefaultCampaignShipParametersModel](./campaign-ext/DefaultCampaignShipParametersModel) | 🔗 |
| C | [DefaultCampaignTimeModel](./campaign-ext/DefaultCampaignTimeModel) | 🔗 |
| C | [DefaultCaravanModel](./campaign-ext/DefaultCaravanModel) | 🔗 |
| C | [DefaultCharacterDevelopmentModel](./campaign-ext/DefaultCharacterDevelopmentModel) | 🔗 |
| C | [DefaultCharacterStatsModel](./campaign-ext/DefaultCharacterStatsModel) | 🔗 |
| C | [DefaultClanFinanceModel](./campaign-ext/DefaultClanFinanceModel) | 🔗 |
| C | [DefaultClanPoliticsModel](./campaign-ext/DefaultClanPoliticsModel) | 🔗 |
| C | [DefaultClanTierModel](./campaign-ext/DefaultClanTierModel) | 🔗 |
| C | [DefaultCombatSimulationModel](./campaign-ext/DefaultCombatSimulationModel) | 🔗 |
| C | [DefaultCombatXpModel](./campaign-ext/DefaultCombatXpModel) | 🔗 |
| C | [DefaultCompanionHiringPriceCalculationModel](./campaign-ext/DefaultCompanionHiringPriceCalculationModel) | 🔗 |
| C | [DefaultCrimeModel](./campaign-ext/DefaultCrimeModel) | 🔗 |
| C | [DefaultCutsceneSelectionModel](./campaign-ext/DefaultCutsceneSelectionModel) | 🔗 |
| C | [DefaultDailyTroopXpBonusModel](./campaign-ext/DefaultDailyTroopXpBonusModel) | 🔗 |
| C | [DefaultDefectionModel](./campaign-ext/DefaultDefectionModel) | 🔗 |
| C | [DefaultDelayedTeleportationModel](./campaign-ext/DefaultDelayedTeleportationModel) | 🔗 |
| C | [DefaultDifficultyModel](./campaign-ext/DefaultDifficultyModel) | 🔗 |
| C | [DefaultDiplomacyModel](./campaign-ext/DefaultDiplomacyModel) | 🔗 |
| C | [DefaultDisguiseDetectionModel](./campaign-ext/DefaultDisguiseDetectionModel) | 🔗 |
| C | [DefaultEmissaryModel](./campaign-ext/DefaultEmissaryModel) | 🔗 |
| C | [DefaultEncounterGameMenuModel](./campaign-ext/DefaultEncounterGameMenuModel) | 🔗 |
| C | [DefaultEncounterModel](./campaign-ext/DefaultEncounterModel) | 🔗 |
| C | [DefaultEquipmentSelectionModel](./campaign-ext/DefaultEquipmentSelectionModel) | 🔗 |
| C | [DefaultExecutionRelationModel](./campaign-ext/DefaultExecutionRelationModel) | 🔗 |
| C | [DefaultFleetManagementModel](./campaign-ext/DefaultFleetManagementModel) | 🔗 |
| C | [DefaultGenericXpModel](./campaign-ext/DefaultGenericXpModel) | 🔗 |
| C | [DefaultHeirSelectionCalculationModel](./campaign-ext/DefaultHeirSelectionCalculationModel) | 🔗 |
| C | [DefaultHeroAgentLocationModel](./campaign-ext/DefaultHeroAgentLocationModel) | 🔗 |
| C | [DefaultHeroCreationModel](./campaign-ext/DefaultHeroCreationModel) | 🔗 |
| C | [DefaultHeroDeathProbabilityCalculationModel](./campaign-ext/DefaultHeroDeathProbabilityCalculationModel) | 🔗 |
| C | [DefaultHideoutModel](./campaign-ext/DefaultHideoutModel) | 🔗 |
| C | [DefaultIncidentModel](./campaign-ext/DefaultIncidentModel) | 🔗 |
| C | [DefaultInformationRestrictionModel](./campaign-ext/DefaultInformationRestrictionModel) | 🔗 |
| C | [DefaultInventoryCapacityModel](./campaign-ext/DefaultInventoryCapacityModel) | 🔗 |
| C | [DefaultIssueModel](./campaign-ext/DefaultIssueModel) | 🔗 |
| C | [DefaultItemDiscardModel](./campaign-ext/DefaultItemDiscardModel) | 🔗 |
| C | [DefaultKingdomCreationModel](./campaign-ext/DefaultKingdomCreationModel) | 🔗 |
| C | [DefaultKingdomDecisionPermissionModel](./campaign-ext/DefaultKingdomDecisionPermissionModel) | 🔗 |
| C | [DefaultLocationModel](./campaign-ext/DefaultLocationModel) | 🔗 |
| C | [DefaultMapDistanceModel](./campaign-ext/DefaultMapDistanceModel) | 🔗 |
| C | [DefaultMapTrackModel](./campaign-ext/DefaultMapTrackModel) | 🔗 |
| C | [DefaultMapVisibilityModel](./campaign-ext/DefaultMapVisibilityModel) | 🔗 |
| C | [DefaultMapWeatherModel](./campaign-ext/DefaultMapWeatherModel) | 🔗 |
| C | [DefaultMarriageModel](./campaign-ext/DefaultMarriageModel) | 🔗 |
| C | [DefaultMilitaryPowerModel](./campaign-ext/DefaultMilitaryPowerModel) | 🔗 |
| C | [DefaultMinorFactionsModel](./campaign-ext/DefaultMinorFactionsModel) | 🔗 |
| C | [DefaultMobilePartyAIModel](./campaign-ext/DefaultMobilePartyAIModel) | 🔗 |
| C | [DefaultMobilePartyFoodConsumptionModel](./campaign-ext/DefaultMobilePartyFoodConsumptionModel) | 🔗 |
| C | [DefaultNotablePowerModel](./campaign-ext/DefaultNotablePowerModel) | 🔗 |
| C | [DefaultNotableSpawnModel](./campaign-ext/DefaultNotableSpawnModel) | 🔗 |
| C | [DefaultPartyDesertionModel](./campaign-ext/DefaultPartyDesertionModel) | 🔗 |
| C | [DefaultPartyFoodBuyingModel](./campaign-ext/DefaultPartyFoodBuyingModel) | 🔗 |
| C | [DefaultPartyHealingModel](./campaign-ext/DefaultPartyHealingModel) | 🔗 |
| C | [DefaultPartyImpairmentModel](./campaign-ext/DefaultPartyImpairmentModel) | 🔗 |
| C | [DefaultPartyMoraleModel](./campaign-ext/DefaultPartyMoraleModel) | 🔗 |
| C | [DefaultPartyNavigationModel](./campaign-ext/DefaultPartyNavigationModel) | 🔗 |
| C | [DefaultPartyShipLimitModel](./campaign-ext/DefaultPartyShipLimitModel) | 🔗 |
| C | [DefaultPartySizeLimitModel](./campaign-ext/DefaultPartySizeLimitModel) | 🔗 |
| C | [DefaultPartySpeedCalculatingModel](./campaign-ext/DefaultPartySpeedCalculatingModel) | 🔗 |
| C | [DefaultPartyTradeModel](./campaign-ext/DefaultPartyTradeModel) | 🔗 |
| C | [DefaultPartyTrainingModel](./campaign-ext/DefaultPartyTrainingModel) | 🔗 |
| C | [DefaultPartyTransitionModel](./campaign-ext/DefaultPartyTransitionModel) | 🔗 |
| C | [DefaultPartyTroopUpgradeModel](./campaign-ext/DefaultPartyTroopUpgradeModel) | 🔗 |
| C | [DefaultPartyWageModel](./campaign-ext/DefaultPartyWageModel) | 🔗 |
| C | [DefaultPersuasionModel](./campaign-ext/DefaultPersuasionModel) | 🔗 |
| C | [DefaultPlayerProgressionModel](./campaign-ext/DefaultPlayerProgressionModel) | 🔗 |
| C | [DefaultPregnancyModel](./campaign-ext/DefaultPregnancyModel) | 🔗 |
| C | [DefaultPrisonBreakModel](./campaign-ext/DefaultPrisonBreakModel) | 🔗 |
| C | [DefaultPrisonerDonationModel](./campaign-ext/DefaultPrisonerDonationModel) | 🔗 |
| C | [DefaultPrisonerRecruitmentCalculationModel](./campaign-ext/DefaultPrisonerRecruitmentCalculationModel) | 🔗 |
| C | [DefaultRaidModel](./campaign-ext/DefaultRaidModel) | 🔗 |
| C | [DefaultRansomValueCalculationModel](./campaign-ext/DefaultRansomValueCalculationModel) | 🔗 |
| C | [DefaultRomanceModel](./campaign-ext/DefaultRomanceModel) | 🔗 |
| C | [DefaultSceneModel](./campaign-ext/DefaultSceneModel) | 🔗 |
| C | [DefaultSettlementAccessModel](./campaign-ext/DefaultSettlementAccessModel) | 🔗 |
| C | [DefaultSettlementEconomyModel](./campaign-ext/DefaultSettlementEconomyModel) | 🔗 |
| C | [DefaultSettlementFoodModel](./campaign-ext/DefaultSettlementFoodModel) | 🔗 |
| C | [DefaultSettlementGarrisonModel](./campaign-ext/DefaultSettlementGarrisonModel) | 🔗 |
| C | [DefaultSettlementLoyaltyModel](./campaign-ext/DefaultSettlementLoyaltyModel) | 🔗 |
| C | [DefaultSettlementMilitiaModel](./campaign-ext/DefaultSettlementMilitiaModel) | 🔗 |
| C | [DefaultSettlementPatrolModel](./campaign-ext/DefaultSettlementPatrolModel) | 🔗 |
| C | [DefaultSettlementProsperityModel](./campaign-ext/DefaultSettlementProsperityModel) | 🔗 |
| C | [DefaultSettlementSecurityModel](./campaign-ext/DefaultSettlementSecurityModel) | 🔗 |
| C | [DefaultSettlementTaxModel](./campaign-ext/DefaultSettlementTaxModel) | 🔗 |
| C | [DefaultSettlementValueModel](./campaign-ext/DefaultSettlementValueModel) | 🔗 |
| C | [DefaultShipCostModel](./campaign-ext/DefaultShipCostModel) | 🔗 |
| C | [DefaultShipStatModel](./campaign-ext/DefaultShipStatModel) | 🔗 |
| C | [DefaultSiegeAftermathModel](./campaign-ext/DefaultSiegeAftermathModel) | 🔗 |
| C | [DefaultSiegeEventModel](./campaign-ext/DefaultSiegeEventModel) | 🔗 |
| C | [DefaultSiegeLordsHallFightModel](./campaign-ext/DefaultSiegeLordsHallFightModel) | 🔗 |
| C | [DefaultSiegeStrategyActionModel](./campaign-ext/DefaultSiegeStrategyActionModel) | 🔗 |
| C | [DefaultSmithingModel](./campaign-ext/DefaultSmithingModel) | 🔗 |
| C | [DefaultTargetScoreCalculatingModel](./campaign-ext/DefaultTargetScoreCalculatingModel) | 🔗 |
| C | [DefaultTavernMercenaryTroopsModel](./campaign-ext/DefaultTavernMercenaryTroopsModel) | 🔗 |
| C | [DefaultTournamentModel](./campaign-ext/DefaultTournamentModel) | 🔗 |
| C | [DefaultTradeAgreementModel](./campaign-ext/DefaultTradeAgreementModel) | 🔗 |
| C | [DefaultTradeItemPriceFactorModel](./campaign-ext/DefaultTradeItemPriceFactorModel) | 🔗 |
| C | [DefaultTroopSacrificeModel](./campaign-ext/DefaultTroopSacrificeModel) | 🔗 |
| C | [DefaultTroopSupplierProbabilityModel](./campaign-ext/DefaultTroopSupplierProbabilityModel) | 🔗 |
| C | [DefaultValuationModel](./campaign-ext/DefaultValuationModel) | 🔗 |
| C | [DefaultVassalRewardsModel](./campaign-ext/DefaultVassalRewardsModel) | 🔗 |
| C | [DefaultVillageProductionCalculatorModel](./campaign-ext/DefaultVillageProductionCalculatorModel) | 🔗 |
| C | [DefaultVillageTradeModel](./campaign-ext/DefaultVillageTradeModel) | 🔗 |
| C | [DefaultVoiceOverModel](./campaign-ext/DefaultVoiceOverModel) | 🔗 |
| C | [DefaultVolunteerModel](./campaign-ext/DefaultVolunteerModel) | 🔗 |
| C | [DefaultWallHitPointCalculationModel](./campaign-ext/DefaultWallHitPointCalculationModel) | 🔗 |
| C | [DefaultWorkshopModel](./campaign-ext/DefaultWorkshopModel) | 🔗 |

## TaleWorlds.CampaignSystem.GameMenus (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [EventType](./campaign-ext/EventType) | 🔗 |
| C | [GameMenu](./campaign-ext/GameMenu) | 🔗 |
| C | [GameMenuCallbackManager](./campaign-ext/GameMenuCallbackManager) | 🔗 |
| C | [GameMenuEventHandler](./campaign-ext/GameMenuEventHandler) | 🔗 |
| C | [GameMenuInitializationHandler](./campaign-ext/GameMenuInitializationHandler) | 🔗 |
| C | [GameMenuManager](./campaign-ext/GameMenuManager) | 🔗 |
| C | [GameMenuOption](./campaign-ext/GameMenuOption) | 🔗 |
| E | [IssueQuestFlags](./campaign-ext/IssueQuestFlags) | 🔗 |
| E | [LeaveType](./campaign-ext/LeaveType) | 🔗 |
| E | [MenuAndOptionType](./campaign-ext/MenuAndOptionType) | 🔗 |
| C | [MenuCallbackArgs](./campaign-ext/MenuCallbackArgs) | 🔗 |
| E | [MenuFlags](./campaign-ext/MenuFlags) | 🔗 |
| E | [MenuOverlayType](./campaign-ext/MenuOverlayType) | 🔗 |
| C | [WaitMenuOption](./campaign-ext/WaitMenuOption) | 🔗 |

## TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultEncounter](./campaign-ext/DefaultEncounter) | 🔗 |
| C | [PlayerTownVisit](./campaign-ext/PlayerTownVisit) | 🔗 |

## TaleWorlds.CampaignSystem.GameState (32)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerEditorState](./campaign-ext/BannerEditorState) | 🔗 |
| C | [BarberState](./campaign-ext/BarberState) | 🔗 |
| C | [CharacterDeveloperState](./campaign-ext/CharacterDeveloperState) | 🔗 |
| C | [ClanState](./campaign-ext/ClanState) | 🔗 |
| C | [CraftingState](./campaign-ext/CraftingState) | 🔗 |
| C | [EducationState](./campaign-ext/EducationState) | 🔗 |
| E | [GameOverReason](./campaign-ext/GameOverReason) | 🔗 |
| C | [GameOverState](./campaign-ext/GameOverState) | 🔗 |
| I | [IBannerEditorStateHandler](./campaign-ext/IBannerEditorStateHandler) | 🔗 |
| I | [ICharacterDeveloperStateHandler](./campaign-ext/ICharacterDeveloperStateHandler) | 🔗 |
| I | [IClanStateHandler](./campaign-ext/IClanStateHandler) | 🔗 |
| I | [ICraftingStateHandler](./campaign-ext/ICraftingStateHandler) | 🔗 |
| I | [IEducationStateHandler](./campaign-ext/IEducationStateHandler) | 🔗 |
| I | [IGameOverStateHandler](./campaign-ext/IGameOverStateHandler) | 🔗 |
| I | [IInventoryStateHandler](./campaign-ext/IInventoryStateHandler) | 🔗 |
| I | [IKingdomStateHandler](./campaign-ext/IKingdomStateHandler) | 🔗 |
| I | [IMapStateHandler](./campaign-ext/IMapStateHandler) | 🔗 |
| I | [IMenuContextHandler](./campaign-ext/IMenuContextHandler) | 🔗 |
| C | [InventoryState](./campaign-ext/InventoryState) | 🔗 |
| I | [IPartyScreenLogicHandler](./campaign-ext/IPartyScreenLogicHandler) | 🔗 |
| I | [IPartyScreenPrisonHandler](./campaign-ext/IPartyScreenPrisonHandler) | 🔗 |
| I | [IPartyScreenTroopHandler](./campaign-ext/IPartyScreenTroopHandler) | 🔗 |
| I | [IQuestsStateHandler](./campaign-ext/IQuestsStateHandler) | 🔗 |
| C | [KingdomState](./campaign-ext/KingdomState) | 🔗 |
| C | [MapState](./campaign-ext/MapState) | 🔗 |
| C | [MapStateData](./campaign-ext/MapStateData) | 🔗 |
| C | [MenuContext](./campaign-ext/MenuContext) | 🔗 |
| C | [PartyState](./campaign-ext/PartyState) | 🔗 |
| E | [PortScreenModes](./campaign-ext/PortScreenModes) | 🔗 |
| C | [PortState](./campaign-ext/PortState) | 🔗 |
| C | [QuestsState](./campaign-ext/QuestsState) | 🔗 |
| C | [TutorialState](./campaign-ext/TutorialState) | 🔗 |

## TaleWorlds.CampaignSystem.Handlers (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [ICustomSystemManager](./campaign-ext/ICustomSystemManager) | 🔗 |

## TaleWorlds.CampaignSystem.Incidents (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Incident](./campaign-ext/Incident) | 🔗 |
| C | [IncidentEffect](./campaign-ext/IncidentEffect) | 🔗 |

## TaleWorlds.CampaignSystem.Inventory (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CapacityData](./campaign-ext/CapacityData) | 🔗 |
| C | [FakeInventoryListener](./campaign-ext/FakeInventoryListener) | 🔗 |
| C | [InventoryListener](./campaign-ext/InventoryListener) | 🔗 |
| C | [InventoryLogic](./campaign-ext/InventoryLogic) | 🔗 |
| E | [InventorySide](./campaign-ext/InventorySide) | 🔗 |
| C | [InventoryTransferItemEvent](./campaign-ext/InventoryTransferItemEvent) | 🔗 |
| I | [IPlayerTradeBehavior](./campaign-ext/IPlayerTradeBehavior) | 🔗 |
| S | [TransferCommand](./campaign-ext/TransferCommand) | 🔗 |
| C | [TransferCommandResult](./campaign-ext/TransferCommandResult) | 🔗 |
| E | [TransferType](./campaign-ext/TransferType) | 🔗 |

## TaleWorlds.CampaignSystem.Issues (158)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlternativeSolutionScaleFlag](./campaign-ext/AlternativeSolutionScaleFlag) | 🔗 |
| C | [ArmyNeedsSuppliesIssue](./campaign-ext/ArmyNeedsSuppliesIssue) | 🔗 |
| C | [ArmyNeedsSuppliesIssueBehavior](./campaign-ext/ArmyNeedsSuppliesIssueBehavior) | 🔗 |
| C | [ArmyNeedsSuppliesIssueQuest](./campaign-ext/ArmyNeedsSuppliesIssueQuest) | 🔗 |
| C | [ArmyNeedsSuppliesIssueTypeDefiner](./campaign-ext/ArmyNeedsSuppliesIssueTypeDefiner) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssue](./campaign-ext/ArtisanCantSellProductsAtAFairPriceIssue) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueBehavior](./campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueBehavior) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueQuest](./campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueQuest) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner](./campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner) | 🔗 |
| C | [ArtisanOverpricedGoodsIssue](./campaign-ext/ArtisanOverpricedGoodsIssue) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueBehavior](./campaign-ext/ArtisanOverpricedGoodsIssueBehavior) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueQuest](./campaign-ext/ArtisanOverpricedGoodsIssueQuest) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueTypeDefiner](./campaign-ext/ArtisanOverpricedGoodsIssueTypeDefiner) | 🔗 |
| C | [BettingFraudIssue](./campaign-ext/BettingFraudIssue) | 🔗 |
| C | [BettingFraudIssueBehavior](./campaign-ext/BettingFraudIssueBehavior) | 🔗 |
| C | [BettingFraudIssueTypeDefiner](./campaign-ext/BettingFraudIssueTypeDefiner) | 🔗 |
| C | [BettingFraudQuest](./campaign-ext/BettingFraudQuest) | 🔗 |
| C | [CapturedByBountyHuntersIssue](./campaign-ext/CapturedByBountyHuntersIssue) | 🔗 |
| C | [CapturedByBountyHuntersIssueBehavior](./campaign-ext/CapturedByBountyHuntersIssueBehavior) | 🔗 |
| C | [CapturedByBountyHuntersIssueQuest](./campaign-ext/CapturedByBountyHuntersIssueQuest) | 🔗 |
| C | [CapturedByBountyHuntersIssueTypeDefiner](./campaign-ext/CapturedByBountyHuntersIssueTypeDefiner) | 🔗 |
| C | [CaravanAmbushIssue](./campaign-ext/CaravanAmbushIssue) | 🔗 |
| C | [CaravanAmbushIssueBehavior](./campaign-ext/CaravanAmbushIssueBehavior) | 🔗 |
| C | [CaravanAmbushIssueQuest](./campaign-ext/CaravanAmbushIssueQuest) | 🔗 |
| C | [CaravanAmbushIssueTypeDefiner](./campaign-ext/CaravanAmbushIssueTypeDefiner) | 🔗 |
| C | [DefaultIssueEffects](./campaign-ext/DefaultIssueEffects) | 🔗 |
| C | [EscortMerchantCaravanIssue](./campaign-ext/EscortMerchantCaravanIssue) | 🔗 |
| C | [EscortMerchantCaravanIssueBehavior](./campaign-ext/EscortMerchantCaravanIssueBehavior) | 🔗 |
| C | [EscortMerchantCaravanIssueQuest](./campaign-ext/EscortMerchantCaravanIssueQuest) | 🔗 |
| C | [EscortMerchantCaravanIssueTypeDefiner](./campaign-ext/EscortMerchantCaravanIssueTypeDefiner) | 🔗 |
| C | [ExtortionByDesertersIssue](./campaign-ext/ExtortionByDesertersIssue) | 🔗 |
| C | [ExtortionByDesertersIssueBehavior](./campaign-ext/ExtortionByDesertersIssueBehavior) | 🔗 |
| C | [ExtortionByDesertersIssueBehaviorTypeDefiner](./campaign-ext/ExtortionByDesertersIssueBehaviorTypeDefiner) | 🔗 |
| C | [ExtortionByDesertersIssueQuest](./campaign-ext/ExtortionByDesertersIssueQuest) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssue](./campaign-ext/GangLeaderNeedsRecruitsIssue) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueBehavior](./campaign-ext/GangLeaderNeedsRecruitsIssueBehavior) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner](./campaign-ext/GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueQuest](./campaign-ext/GangLeaderNeedsRecruitsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssue](./campaign-ext/GangLeaderNeedsSpecialWeaponsIssue) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueBehavior](./campaign-ext/GangLeaderNeedsSpecialWeaponsIssueBehavior) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueQuest](./campaign-ext/GangLeaderNeedsSpecialWeaponsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueTypeDefiner](./campaign-ext/GangLeaderNeedsSpecialWeaponsIssueTypeDefiner) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssue](./campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssue) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueBehavior](./campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueQuest](./campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner](./campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssue](./campaign-ext/GangLeaderNeedsWeaponsIssue) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueQuest](./campaign-ext/GangLeaderNeedsWeaponsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueQuestBehavior](./campaign-ext/GangLeaderNeedsWeaponsIssueQuestBehavior) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueTypeDefiner](./campaign-ext/GangLeaderNeedsWeaponsIssueTypeDefiner) | 🔗 |
| C | [HeadmanNeedsGrainIssue](./campaign-ext/HeadmanNeedsGrainIssue) | 🔗 |
| C | [HeadmanNeedsGrainIssueBehavior](./campaign-ext/HeadmanNeedsGrainIssueBehavior) | 🔗 |
| C | [HeadmanNeedsGrainIssueQuest](./campaign-ext/HeadmanNeedsGrainIssueQuest) | 🔗 |
| C | [HeadmanNeedsGrainIssueTypeDefiner](./campaign-ext/HeadmanNeedsGrainIssueTypeDefiner) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssue](./campaign-ext/HeadmanNeedsToDeliverAHerdIssue) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueBehavior](./campaign-ext/HeadmanNeedsToDeliverAHerdIssueBehavior) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueQuest](./campaign-ext/HeadmanNeedsToDeliverAHerdIssueQuest) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueTypeDefiner](./campaign-ext/HeadmanNeedsToDeliverAHerdIssueTypeDefiner) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssue](./campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssue) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueBehavior](./campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueBehavior) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueBehaviorTypeDefiner](./campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueBehaviorTypeDefiner) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueQuest](./campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueQuest) | 🔗 |
| C | [HeroRelatedIssueCoolDownData](./campaign-ext/HeroRelatedIssueCoolDownData) | 🔗 |
| C | IssueBase | — |
| C | [IssueCoolDownData](./campaign-ext/IssueCoolDownData) | 🔗 |
| C | [IssueEffect](./campaign-ext/IssueEffect) | 🔗 |
| E | [IssueFrequency](./campaign-ext/IssueFrequency) | 🔗 |
| C | [IssueManager](./campaign-ext/IssueManager) | 🔗 |
| E | [IssueUpdateDetails](./campaign-ext/IssueUpdateDetails) | 🔗 |
| C | [LadysKnightOutIssue](./campaign-ext/LadysKnightOutIssue) | 🔗 |
| C | [LadysKnightOutIssueBehavior](./campaign-ext/LadysKnightOutIssueBehavior) | 🔗 |
| C | [LadysKnightOutIssueQuest](./campaign-ext/LadysKnightOutIssueQuest) | 🔗 |
| C | [LadysKnightOutIssueTypeDefiner](./campaign-ext/LadysKnightOutIssueTypeDefiner) | 🔗 |
| C | [LandLordCompanyOfTroubleIssue](./campaign-ext/LandLordCompanyOfTroubleIssue) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueBehavior](./campaign-ext/LandLordCompanyOfTroubleIssueBehavior) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueQuest](./campaign-ext/LandLordCompanyOfTroubleIssueQuest) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueTypeDefiner](./campaign-ext/LandLordCompanyOfTroubleIssueTypeDefiner) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssue](./campaign-ext/LandlordNeedsAccessToVillageCommonsIssue) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueBehavior](./campaign-ext/LandlordNeedsAccessToVillageCommonsIssueBehavior) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueQuest](./campaign-ext/LandlordNeedsAccessToVillageCommonsIssueQuest) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueTypeDefiner](./campaign-ext/LandlordNeedsAccessToVillageCommonsIssueTypeDefiner) | 🔗 |
| C | [LandLordNeedsManualLaborersIssue](./campaign-ext/LandLordNeedsManualLaborersIssue) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueBehavior](./campaign-ext/LandLordNeedsManualLaborersIssueBehavior) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueBehaviorTypeDefiner](./campaign-ext/LandLordNeedsManualLaborersIssueBehaviorTypeDefiner) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueQuest](./campaign-ext/LandLordNeedsManualLaborersIssueQuest) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssue](./campaign-ext/LandLordTheArtOfTheTradeIssue) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueBehavior](./campaign-ext/LandLordTheArtOfTheTradeIssueBehavior) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueBehaviorTypeDefiner](./campaign-ext/LandLordTheArtOfTheTradeIssueBehaviorTypeDefiner) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueQuest](./campaign-ext/LandLordTheArtOfTheTradeIssueQuest) | 🔗 |
| C | [LandlordTrainingForRetainersIssue](./campaign-ext/LandlordTrainingForRetainersIssue) | 🔗 |
| C | [LandlordTrainingForRetainersIssueBehavior](./campaign-ext/LandlordTrainingForRetainersIssueBehavior) | 🔗 |
| C | [LandlordTrainingForRetainersIssueQuest](./campaign-ext/LandlordTrainingForRetainersIssueQuest) | 🔗 |
| C | [LandlordTrainingForRetainersIssueTypeDefiner](./campaign-ext/LandlordTrainingForRetainersIssueTypeDefiner) | 🔗 |
| C | [LesserNobleRevoltIssue](./campaign-ext/LesserNobleRevoltIssue) | 🔗 |
| C | [LesserNobleRevoltIssueBehavior](./campaign-ext/LesserNobleRevoltIssueBehavior) | 🔗 |
| C | [LesserNobleRevoltIssueBehaviorTypeDefiner](./campaign-ext/LesserNobleRevoltIssueBehaviorTypeDefiner) | 🔗 |
| C | [LesserNobleRevoltIssueQuest](./campaign-ext/LesserNobleRevoltIssueQuest) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssue](./campaign-ext/LordNeedsGarrisonTroopsIssue) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuest](./campaign-ext/LordNeedsGarrisonTroopsIssueQuest) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuestBehavior](./campaign-ext/LordNeedsGarrisonTroopsIssueQuestBehavior) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuestTypeDefiner](./campaign-ext/LordNeedsGarrisonTroopsIssueQuestTypeDefiner) | 🔗 |
| C | [LordNeedsHorsesIssue](./campaign-ext/LordNeedsHorsesIssue) | 🔗 |
| C | [LordNeedsHorsesIssueBehavior](./campaign-ext/LordNeedsHorsesIssueBehavior) | 🔗 |
| C | [LordNeedsHorsesIssueBehaviorTypeDefiner](./campaign-ext/LordNeedsHorsesIssueBehaviorTypeDefiner) | 🔗 |
| C | [LordNeedsHorsesIssueQuest](./campaign-ext/LordNeedsHorsesIssueQuest) | 🔗 |
| C | [LordsNeedsTutorIssue](./campaign-ext/LordsNeedsTutorIssue) | 🔗 |
| C | [LordsNeedsTutorIssueBehavior](./campaign-ext/LordsNeedsTutorIssueBehavior) | 🔗 |
| C | [LordsNeedsTutorIssueQuest](./campaign-ext/LordsNeedsTutorIssueQuest) | 🔗 |
| C | [LordsNeedsTutorIssueTypeDefiner](./campaign-ext/LordsNeedsTutorIssueTypeDefiner) | 🔗 |
| C | [LordWantsRivalCapturedIssue](./campaign-ext/LordWantsRivalCapturedIssue) | 🔗 |
| C | [LordWantsRivalCapturedIssueBehavior](./campaign-ext/LordWantsRivalCapturedIssueBehavior) | 🔗 |
| C | [LordWantsRivalCapturedIssueQuest](./campaign-ext/LordWantsRivalCapturedIssueQuest) | 🔗 |
| C | [LordWantsRivalCapturedIssueTypeDefiner](./campaign-ext/LordWantsRivalCapturedIssueTypeDefiner) | 🔗 |
| C | [MerchantArmyOfPoachersIssue](./campaign-ext/MerchantArmyOfPoachersIssue) | 🔗 |
| C | [MerchantArmyOfPoachersIssueBehavior](./campaign-ext/MerchantArmyOfPoachersIssueBehavior) | 🔗 |
| C | [MerchantArmyOfPoachersIssueBehaviorTypeDefiner](./campaign-ext/MerchantArmyOfPoachersIssueBehaviorTypeDefiner) | 🔗 |
| C | [MerchantArmyOfPoachersIssueQuest](./campaign-ext/MerchantArmyOfPoachersIssueQuest) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssue](./campaign-ext/MerchantNeedsHelpWithOutlawsIssue) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueQuest](./campaign-ext/MerchantNeedsHelpWithOutlawsIssueQuest) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueQuestBehavior](./campaign-ext/MerchantNeedsHelpWithOutlawsIssueQuestBehavior) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueTypeDefiner](./campaign-ext/MerchantNeedsHelpWithOutlawsIssueTypeDefiner) | 🔗 |
| C | [NearbyBanditBaseIssue](./campaign-ext/NearbyBanditBaseIssue) | 🔗 |
| C | [NearbyBanditBaseIssueBehavior](./campaign-ext/NearbyBanditBaseIssueBehavior) | 🔗 |
| C | [NearbyBanditBaseIssueQuest](./campaign-ext/NearbyBanditBaseIssueQuest) | 🔗 |
| C | [NearbyBanditBaseIssueTypeDefiner](./campaign-ext/NearbyBanditBaseIssueTypeDefiner) | 🔗 |
| S | [PotentialIssueData](./campaign-ext/PotentialIssueData) | 🔗 |
| C | [QuestSettlement](./campaign-ext/QuestSettlement) | 🔗 |
| C | [RaidAnEnemyTerritoryIssue](./campaign-ext/RaidAnEnemyTerritoryIssue) | 🔗 |
| C | [RaidAnEnemyTerritoryIssueBehavior](./campaign-ext/RaidAnEnemyTerritoryIssueBehavior) | 🔗 |
| C | [RaidAnEnemyTerritoryIssueTypeDefiner](./campaign-ext/RaidAnEnemyTerritoryIssueTypeDefiner) | 🔗 |
| C | [RaidAnEnemyTerritoryQuest](./campaign-ext/RaidAnEnemyTerritoryQuest) | 🔗 |
| C | [RevenueFarmingIssue](./campaign-ext/RevenueFarmingIssue) | 🔗 |
| C | [RevenueFarmingIssueBehavior](./campaign-ext/RevenueFarmingIssueBehavior) | 🔗 |
| C | [RevenueFarmingIssueBehaviorTypeDefiner](./campaign-ext/RevenueFarmingIssueBehaviorTypeDefiner) | 🔗 |
| C | [RevenueFarmingIssueQuest](./campaign-ext/RevenueFarmingIssueQuest) | 🔗 |
| C | [RevenueVillage](./campaign-ext/RevenueVillage) | 🔗 |
| C | [ScoutEnemyGarrisonsIssue](./campaign-ext/ScoutEnemyGarrisonsIssue) | 🔗 |
| C | [ScoutEnemyGarrisonsIssueBehavior](./campaign-ext/ScoutEnemyGarrisonsIssueBehavior) | 🔗 |
| C | [ScoutEnemyGarrisonsIssueTypeDefiner](./campaign-ext/ScoutEnemyGarrisonsIssueTypeDefiner) | 🔗 |
| C | [ScoutEnemyGarrisonsQuest](./campaign-ext/ScoutEnemyGarrisonsQuest) | 🔗 |
| C | [SmugglersIssue](./campaign-ext/SmugglersIssue) | 🔗 |
| C | [SmugglersIssueBehavior](./campaign-ext/SmugglersIssueBehavior) | 🔗 |
| C | [SmugglersIssueQuest](./campaign-ext/SmugglersIssueQuest) | 🔗 |
| C | [SmugglersIssueTypeDefiner](./campaign-ext/SmugglersIssueTypeDefiner) | 🔗 |
| C | [TheConquestOfSettlementIssue](./campaign-ext/TheConquestOfSettlementIssue) | 🔗 |
| C | [TheConquestOfSettlementIssueBehavior](./campaign-ext/TheConquestOfSettlementIssueBehavior) | 🔗 |
| C | [TheConquestOfSettlementIssueQuest](./campaign-ext/TheConquestOfSettlementIssueQuest) | 🔗 |
| C | [TheConquestOfSettlementIssueTypeDefiner](./campaign-ext/TheConquestOfSettlementIssueTypeDefiner) | 🔗 |
| C | [VillageEvent](./campaign-ext/VillageEvent) | 🔗 |
| S | [VillageEventOptionData](./campaign-ext/VillageEventOptionData) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssue](./campaign-ext/VillageNeedsCraftingMaterialsIssue) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueBehavior](./campaign-ext/VillageNeedsCraftingMaterialsIssueBehavior) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueQuest](./campaign-ext/VillageNeedsCraftingMaterialsIssueQuest) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueTypeDefiner](./campaign-ext/VillageNeedsCraftingMaterialsIssueTypeDefiner) | 🔗 |
| C | [VillageNeedsToolsIssue](./campaign-ext/VillageNeedsToolsIssue) | 🔗 |
| C | [VillageNeedsToolsIssueBehavior](./campaign-ext/VillageNeedsToolsIssueBehavior) | 🔗 |
| C | [VillageNeedsToolsIssueQuest](./campaign-ext/VillageNeedsToolsIssueQuest) | 🔗 |
| C | [VillageNeedsToolsIssueTypeDefiner](./campaign-ext/VillageNeedsToolsIssueTypeDefiner) | 🔗 |

## TaleWorlds.CampaignSystem.Issues.IssueQuestTasks (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CaptureAndBringNpcTask](./campaign-ext/CaptureAndBringNpcTask) | 🔗 |
| C | [ChangeCommonAreaOwnerQuestTask](./campaign-ext/ChangeCommonAreaOwnerQuestTask) | 🔗 |
| C | [ChangeSettlementOwnerTask](./campaign-ext/ChangeSettlementOwnerTask) | 🔗 |
| C | [DefeatPartyQuestTask](./campaign-ext/DefeatPartyQuestTask) | 🔗 |
| C | [RaidVillageQuestTask](./campaign-ext/RaidVillageQuestTask) | 🔗 |
| C | [TalkToNpcQuestTask](./campaign-ext/TalkToNpcQuestTask) | 🔗 |

## TaleWorlds.CampaignSystem.LogEntries (56)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyCreationLogEntry](./campaign-ext/ArmyCreationLogEntry) | 🔗 |
| C | [ArmyDispersionLogEntry](./campaign-ext/ArmyDispersionLogEntry) | 🔗 |
| C | [BattleStartedLogEntry](./campaign-ext/BattleStartedLogEntry) | 🔗 |
| C | [BesiegeSettlementLogEntry](./campaign-ext/BesiegeSettlementLogEntry) | 🔗 |
| C | [ChangeAlleyOwnerLogEntry](./campaign-ext/ChangeAlleyOwnerLogEntry) | 🔗 |
| C | [ChangeRomanticStateLogEntry](./campaign-ext/ChangeRomanticStateLogEntry) | 🔗 |
| C | [ChangeSettlementOwnerLogEntry](./campaign-ext/ChangeSettlementOwnerLogEntry) | 🔗 |
| C | [CharacterBecameFugitiveLogEntry](./campaign-ext/CharacterBecameFugitiveLogEntry) | 🔗 |
| C | [CharacterBornLogEntry](./campaign-ext/CharacterBornLogEntry) | 🔗 |
| C | [CharacterInsultedLogEntry](./campaign-ext/CharacterInsultedLogEntry) | 🔗 |
| C | [CharacterKilledLogEntry](./campaign-ext/CharacterKilledLogEntry) | 🔗 |
| C | [CharacterMarriedLogEntry](./campaign-ext/CharacterMarriedLogEntry) | 🔗 |
| E | [ChatNotificationType](./campaign-ext/ChatNotificationType) | 🔗 |
| C | [ChildbirthLogEntry](./campaign-ext/ChildbirthLogEntry) | 🔗 |
| C | [ClanChangeKingdomLogEntry](./campaign-ext/ClanChangeKingdomLogEntry) | 🔗 |
| C | [ClanDestroyedLogEntry](./campaign-ext/ClanDestroyedLogEntry) | 🔗 |
| C | [ClanLeaderChangedLogEntry](./campaign-ext/ClanLeaderChangedLogEntry) | 🔗 |
| C | [CommonAreaFightLogEntry](./campaign-ext/CommonAreaFightLogEntry) | 🔗 |
| C | [DeclareWarLogEntry](./campaign-ext/DeclareWarLogEntry) | 🔗 |
| C | [DefeatCharacterLogEntry](./campaign-ext/DefeatCharacterLogEntry) | 🔗 |
| C | [DestroyMobilePartyLogEntry](./campaign-ext/DestroyMobilePartyLogEntry) | 🔗 |
| C | [EndAllianceLogEntry](./campaign-ext/EndAllianceLogEntry) | 🔗 |
| C | [EndCallToWarAgreementLogEntry](./campaign-ext/EndCallToWarAgreementLogEntry) | 🔗 |
| C | [EndCaptivityLogEntry](./campaign-ext/EndCaptivityLogEntry) | 🔗 |
| C | [GatherArmyLogEntry](./campaign-ext/GatherArmyLogEntry) | 🔗 |
| I | [IChatNotification](./campaign-ext/IChatNotification) | 🔗 |
| I | [IEncyclopediaLog](./campaign-ext/IEncyclopediaLog) | 🔗 |
| E | [ImportanceEnum](./campaign-ext/ImportanceEnum) | 🔗 |
| C | [IssueQuestLogEntry](./campaign-ext/IssueQuestLogEntry) | 🔗 |
| C | [IssueQuestStartLogEntry](./campaign-ext/IssueQuestStartLogEntry) | 🔗 |
| I | [IWarLog](./campaign-ext/IWarLog) | 🔗 |
| C | [JournalLogEntry](./campaign-ext/JournalLogEntry) | 🔗 |
| C | [KingdomDecisionAddedLogEntry](./campaign-ext/KingdomDecisionAddedLogEntry) | 🔗 |
| C | [KingdomDecisionConcludedLogEntry](./campaign-ext/KingdomDecisionConcludedLogEntry) | 🔗 |
| C | [KingdomDestroyedLogEntry](./campaign-ext/KingdomDestroyedLogEntry) | 🔗 |
| C | [LogEntry](./campaign-ext/LogEntry) | 🔗 |
| C | [LogEntryHistory](./campaign-ext/LogEntryHistory) | 🔗 |
| C | [MakePeaceLogEntry](./campaign-ext/MakePeaceLogEntry) | 🔗 |
| C | [MercenaryClanChangedKingdomLogEntry](./campaign-ext/MercenaryClanChangedKingdomLogEntry) | 🔗 |
| C | [OverruleInfluenceLogEntry](./campaign-ext/OverruleInfluenceLogEntry) | 🔗 |
| C | [PlayerAttackAlleyLogEntry](./campaign-ext/PlayerAttackAlleyLogEntry) | 🔗 |
| C | [PlayerBattleEndedLogEntry](./campaign-ext/PlayerBattleEndedLogEntry) | 🔗 |
| C | [PlayerCharacterChangedLogEntry](./campaign-ext/PlayerCharacterChangedLogEntry) | 🔗 |
| C | [PlayerMeetLordLogEntry](./campaign-ext/PlayerMeetLordLogEntry) | 🔗 |
| C | [PlayerReputationChangesLogEntry](./campaign-ext/PlayerReputationChangesLogEntry) | 🔗 |
| C | [PlayerRetiredLogEntry](./campaign-ext/PlayerRetiredLogEntry) | 🔗 |
| C | [PregnancyLogEntry](./campaign-ext/PregnancyLogEntry) | 🔗 |
| C | [RebellionStartedLogEntry](./campaign-ext/RebellionStartedLogEntry) | 🔗 |
| C | [SettlementClaimedLogEntry](./campaign-ext/SettlementClaimedLogEntry) | 🔗 |
| C | [SiegeAftermathLogEntry](./campaign-ext/SiegeAftermathLogEntry) | 🔗 |
| C | [StartAllianceLogEntry](./campaign-ext/StartAllianceLogEntry) | 🔗 |
| C | [StartCallToWarAgreementLogEntry](./campaign-ext/StartCallToWarAgreementLogEntry) | 🔗 |
| C | [TakePrisonerLogEntry](./campaign-ext/TakePrisonerLogEntry) | 🔗 |
| C | [TournamentWonLogEntry](./campaign-ext/TournamentWonLogEntry) | 🔗 |
| C | [TradeAgreementLogEntry](./campaign-ext/TradeAgreementLogEntry) | 🔗 |
| C | [VillageStateChangedLogEntry](./campaign-ext/VillageStateChangedLogEntry) | 🔗 |

## TaleWorlds.CampaignSystem.Map (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IInteractablePoint](./campaign-ext/IInteractablePoint) | 🔗 |
| I | [IMapPoint](./campaign-ext/IMapPoint) | 🔗 |
| I | [IMapScene](./campaign-ext/IMapScene) | 🔗 |
| I | [IMapSceneCreator](./campaign-ext/IMapSceneCreator) | 🔗 |
| S | [LocatableSearchData](./campaign-ext/LocatableSearchData) | 🔗 |
| C | [MapMarker](./campaign-ext/MapMarker) | 🔗 |
| C | [MapMarkerManager](./campaign-ext/MapMarkerManager) | 🔗 |
| S | [MapPatchData](./campaign-ext/MapPatchData) | 🔗 |
| C | [WeatherNode](./campaign-ext/WeatherNode) | 🔗 |

## TaleWorlds.CampaignSystem.Map.DistanceCache (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [ISettlementDataHolder](./campaign-ext/ISettlementDataHolder) | 🔗 |
| C | [NavigationCache](./campaign-ext/NavigationCache) | 🔗 |
| C | [SandBoxNavigationCache](./campaign-ext/SandBoxNavigationCache) | 🔗 |

## TaleWorlds.CampaignSystem.MapEvents (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [BattleTypes](./campaign-ext/BattleTypes) | 🔗 |
| C | [BlockadeBattleMapEvent](./campaign-ext/BlockadeBattleMapEvent) | 🔗 |
| C | [FieldBattleEventComponent](./campaign-ext/FieldBattleEventComponent) | 🔗 |
| C | [ForceSuppliesEventComponent](./campaign-ext/ForceSuppliesEventComponent) | 🔗 |
| C | [ForceVolunteersEventComponent](./campaign-ext/ForceVolunteersEventComponent) | 🔗 |
| C | [HideoutEventComponent](./campaign-ext/HideoutEventComponent) | 🔗 |
| I | [IMapEventVisual](./campaign-ext/IMapEventVisual) | 🔗 |
| C | [MapEvent](./campaign-ext/MapEvent) | 🔗 |
| C | [MapEventComponent](./campaign-ext/MapEventComponent) | 🔗 |
| C | [MapEventManager](./campaign-ext/MapEventManager) | 🔗 |
| C | [MapEventParty](./campaign-ext/MapEventParty) | 🔗 |
| C | [MapEventResultExplainer](./campaign-ext/MapEventResultExplainer) | 🔗 |
| C | [MapEventSide](./campaign-ext/MapEventSide) | 🔗 |
| E | [MapEventState](./campaign-ext/MapEventState) | 🔗 |
| E | [PowerCalculationContext](./campaign-ext/PowerCalculationContext) | 🔗 |
| C | [RaidEventComponent](./campaign-ext/RaidEventComponent) | 🔗 |
| C | [SiegeAmbushEventComponent](./campaign-ext/SiegeAmbushEventComponent) | 🔗 |

## TaleWorlds.CampaignSystem.MapNotificationTypes (27)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarOfferMapNotification](./campaign-ext/AcceptCallToWarOfferMapNotification) | 🔗 |
| C | [AlleyLeaderDiedMapNotification](./campaign-ext/AlleyLeaderDiedMapNotification) | 🔗 |
| C | [AlleyUnderAttackMapNotification](./campaign-ext/AlleyUnderAttackMapNotification) | 🔗 |
| C | [AllianceOfferMapNotification](./campaign-ext/AllianceOfferMapNotification) | 🔗 |
| C | [ArmyCreationMapNotification](./campaign-ext/ArmyCreationMapNotification) | 🔗 |
| C | [ArmyDispersionMapNotification](./campaign-ext/ArmyDispersionMapNotification) | 🔗 |
| C | [ChildBornMapNotification](./campaign-ext/ChildBornMapNotification) | 🔗 |
| C | [DeathMapNotification](./campaign-ext/DeathMapNotification) | 🔗 |
| C | [EducationMapNotification](./campaign-ext/EducationMapNotification) | 🔗 |
| C | [HeirComeOfAgeMapNotification](./campaign-ext/HeirComeOfAgeMapNotification) | 🔗 |
| C | [KingdomDecisionMapNotification](./campaign-ext/KingdomDecisionMapNotification) | 🔗 |
| C | [KingdomDestroyedMapNotification](./campaign-ext/KingdomDestroyedMapNotification) | 🔗 |
| C | [MarriageMapNotification](./campaign-ext/MarriageMapNotification) | 🔗 |
| C | [MarriageOfferMapNotification](./campaign-ext/MarriageOfferMapNotification) | 🔗 |
| C | [MercenaryOfferMapNotification](./campaign-ext/MercenaryOfferMapNotification) | 🔗 |
| C | [PartyLeaderChangeNotification](./campaign-ext/PartyLeaderChangeNotification) | 🔗 |
| C | [PeaceMapNotification](./campaign-ext/PeaceMapNotification) | 🔗 |
| C | [PeaceOfferMapNotification](./campaign-ext/PeaceOfferMapNotification) | 🔗 |
| C | [ProposeCallToWarOfferMapNotification](./campaign-ext/ProposeCallToWarOfferMapNotification) | 🔗 |
| C | [RansomOfferMapNotification](./campaign-ext/RansomOfferMapNotification) | 🔗 |
| C | [SettlementOwnerChangedMapNotification](./campaign-ext/SettlementOwnerChangedMapNotification) | 🔗 |
| C | [SettlementRebellionMapNotification](./campaign-ext/SettlementRebellionMapNotification) | 🔗 |
| C | [SettlementUnderSiegeMapNotification](./campaign-ext/SettlementUnderSiegeMapNotification) | 🔗 |
| C | [TraitChangedMapNotification](./campaign-ext/TraitChangedMapNotification) | 🔗 |
| C | [TributeFinishedMapNotification](./campaign-ext/TributeFinishedMapNotification) | 🔗 |
| C | [VassalOfferMapNotification](./campaign-ext/VassalOfferMapNotification) | 🔗 |
| C | [WarMapNotification](./campaign-ext/WarMapNotification) | 🔗 |

## TaleWorlds.CampaignSystem.Naval (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AnchorPoint](./campaign-ext/AnchorPoint) | 🔗 |
| C | [DefaultFigureheads](./campaign-ext/DefaultFigureheads) | 🔗 |
| C | [Figurehead](./campaign-ext/Figurehead) | 🔗 |
| C | [Ship](./campaign-ext/Ship) | 🔗 |

## TaleWorlds.CampaignSystem.Party (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AiBehavior](./campaign-ext/AiBehavior) | 🔗 |
| C | [FleeingData](./campaign-ext/FleeingData) | 🔗 |
| C | [MobileParty](./campaign/MobileParty) | 🔗 |
| C | [MobilePartyAi](./campaign-ext/MobilePartyAi) | 🔗 |
| E | [MoveModeType](./campaign-ext/MoveModeType) | 🔗 |
| E | [NavigationType](./campaign-ext/NavigationType) | 🔗 |
| C | [PartyBase](./campaign/PartyBase) | 🔗 |
| C | [PartyCommand](./campaign-ext/PartyCommand) | 🔗 |
| E | [PartyCommandCode](./campaign-ext/PartyCommandCode) | 🔗 |
| E | [PartyObjective](./campaign-ext/PartyObjective) | 🔗 |
| E | [PartyRosterSide](./campaign-ext/PartyRosterSide) | 🔗 |
| C | [PartyScreenData](./campaign-ext/PartyScreenData) | 🔗 |
| C | [PartyScreenLogic](./campaign-ext/PartyScreenLogic) | 🔗 |
| S | [PartyScreenLogicInitializationData](./campaign-ext/PartyScreenLogicInitializationData) | 🔗 |
| C | [PartyTemplateObject](./campaign-ext/PartyTemplateObject) | 🔗 |
| S | [PartyTemplateStack](./campaign-ext/PartyTemplateStack) | 🔗 |
| S | [ShipTemplateStack](./campaign-ext/ShipTemplateStack) | 🔗 |
| E | [TransferState](./campaign-ext/TransferState) | 🔗 |
| C | [TroopComparer](./campaign-ext/TroopComparer) | 🔗 |
| E | [TroopSortType](./campaign-ext/TroopSortType) | 🔗 |
| S | [TroopTradeDifference](./campaign-ext/TroopTradeDifference) | 🔗 |
| E | [TroopType](./campaign-ext/TroopType) | 🔗 |

## TaleWorlds.CampaignSystem.Party.PartyComponents (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BanditPartyComponent](./campaign-ext/BanditPartyComponent) | 🔗 |
| C | [CaravanPartyComponent](./campaign-ext/CaravanPartyComponent) | 🔗 |
| C | [CustomPartyComponent](./campaign-ext/CustomPartyComponent) | 🔗 |
| C | [GarrisonPartyComponent](./campaign-ext/GarrisonPartyComponent) | 🔗 |
| C | [InitializationArgs](./campaign-ext/InitializationArgs) | 🔗 |
| C | [LordPartyComponent](./campaign-ext/LordPartyComponent) | 🔗 |
| C | [MilitiaPartyComponent](./campaign-ext/MilitiaPartyComponent) | 🔗 |
| C | [PartyComponent](./campaign-ext/PartyComponent) | 🔗 |
| C | [PatrolPartyComponent](./campaign-ext/PatrolPartyComponent) | 🔗 |
| C | [VillagerPartyComponent](./campaign-ext/VillagerPartyComponent) | 🔗 |
| C | [WarPartyComponent](./campaign-ext/WarPartyComponent) | 🔗 |

## TaleWorlds.CampaignSystem.Roster (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FlattenedTroopRoster](./campaign-ext/FlattenedTroopRoster) | 🔗 |
| S | [FlattenedTroopRosterElement](./campaign-ext/FlattenedTroopRosterElement) | 🔗 |
| C | [ItemRoster](./campaign-ext/ItemRoster) | 🔗 |
| E | [RosterTroopState](./campaign-ext/RosterTroopState) | 🔗 |
| C | [TroopRoster](./campaign-ext/TroopRoster) | 🔗 |
| S | [TroopRosterElement](./campaign-ext/TroopRosterElement) | 🔗 |

## TaleWorlds.CampaignSystem.SaveCompability (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyDispersionReasonEnumResolver](./campaign-ext/ArmyDispersionReasonEnumResolver) | 🔗 |
| C | [BattleTypeEnumResolver](./campaign-ext/BattleTypeEnumResolver) | 🔗 |
| C | [CharacterAttributesResolver](./campaign-ext/CharacterAttributesResolver) | 🔗 |
| C | [CharacterPerksResolver](./campaign-ext/CharacterPerksResolver) | 🔗 |
| C | [CharacterTraitsResolver](./campaign-ext/CharacterTraitsResolver) | 🔗 |
| C | [EndCaptivityDetailEnumResolver](./campaign-ext/EndCaptivityDetailEnumResolver) | 🔗 |
| C | [HeroDeveloperResolver](./campaign-ext/HeroDeveloperResolver) | 🔗 |
| C | [HeroTraitDeveloperResolver](./campaign-ext/HeroTraitDeveloperResolver) | 🔗 |

## TaleWorlds.CampaignSystem.SceneInformationPopupTypes (28)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AntiEmpireConspiracyBeginsSceneNotificationItem](./campaign-ext/AntiEmpireConspiracyBeginsSceneNotificationItem) | 🔗 |
| C | [BecomeKingSceneNotificationItem](./campaign-ext/BecomeKingSceneNotificationItem) | 🔗 |
| C | [CampaignSceneNotificationHelper](./campaign-ext/CampaignSceneNotificationHelper) | 🔗 |
| C | [ClanMemberPeaceDeathSceneNotificationItem](./campaign-ext/ClanMemberPeaceDeathSceneNotificationItem) | 🔗 |
| C | [ClanMemberWarDeathSceneNotificationItem](./campaign-ext/ClanMemberWarDeathSceneNotificationItem) | 🔗 |
| C | [DeathOldAgeSceneNotificationItem](./campaign-ext/DeathOldAgeSceneNotificationItem) | 🔗 |
| C | [DeclareDragonBannerSceneNotificationItem](./campaign-ext/DeclareDragonBannerSceneNotificationItem) | 🔗 |
| C | [EmpireConspiracyBeginsSceneNotificationItem](./campaign-ext/EmpireConspiracyBeginsSceneNotificationItem) | 🔗 |
| C | [EmpireConspiracySupportsSceneNotificationItemBase](./campaign-ext/EmpireConspiracySupportsSceneNotificationItemBase) | 🔗 |
| C | [FindingFirstBannerPieceSceneNotificationItem](./campaign-ext/FindingFirstBannerPieceSceneNotificationItem) | 🔗 |
| C | [FindingSecondBannerPieceSceneNotificationItem](./campaign-ext/FindingSecondBannerPieceSceneNotificationItem) | 🔗 |
| C | [FindingThirdBannerPieceSceneNotificationItem](./campaign-ext/FindingThirdBannerPieceSceneNotificationItem) | 🔗 |
| C | [HeirComingOfAgeFemaleSceneNotificationItem](./campaign-ext/HeirComingOfAgeFemaleSceneNotificationItem) | 🔗 |
| C | [HeirComingOfAgeSceneNotificationItem](./campaign-ext/HeirComingOfAgeSceneNotificationItem) | 🔗 |
| C | [HeroExecutionSceneNotificationData](./campaign-ext/HeroExecutionSceneNotificationData) | 🔗 |
| C | [JoinKingdomSceneNotificationItem](./campaign-ext/JoinKingdomSceneNotificationItem) | 🔗 |
| C | [KingdomCreatedSceneNotificationItem](./campaign-ext/KingdomCreatedSceneNotificationItem) | 🔗 |
| C | [KingdomDestroyedSceneNotificationItem](./campaign-ext/KingdomDestroyedSceneNotificationItem) | 🔗 |
| C | [MainHeroBattleDeathNotificationItem](./campaign-ext/MainHeroBattleDeathNotificationItem) | 🔗 |
| C | [MainHeroBattleVictoryDeathNotificationItem](./campaign-ext/MainHeroBattleVictoryDeathNotificationItem) | 🔗 |
| C | [MarriageSceneNotificationItem](./campaign-ext/MarriageSceneNotificationItem) | 🔗 |
| C | [NavalDeathSceneNotificationItem](./campaign-ext/NavalDeathSceneNotificationItem) | 🔗 |
| C | [NewBornFemaleHeroSceneAlternateNotificationItem](./campaign-ext/NewBornFemaleHeroSceneAlternateNotificationItem) | 🔗 |
| C | [NewBornFemaleHeroSceneNotificationItem](./campaign-ext/NewBornFemaleHeroSceneNotificationItem) | 🔗 |
| C | [NewBornSceneNotificationItem](./campaign-ext/NewBornSceneNotificationItem) | 🔗 |
| C | [PledgeAllegianceSceneNotificationItem](./campaign-ext/PledgeAllegianceSceneNotificationItem) | 🔗 |
| C | [ProEmpireConspiracyBeginsSceneNotificationItem](./campaign-ext/ProEmpireConspiracyBeginsSceneNotificationItem) | 🔗 |
| C | [SupportedFactionDefeatedSceneNotificationItem](./campaign-ext/SupportedFactionDefeatedSceneNotificationItem) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements (21)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Alley](./campaign-ext/Alley) | 🔗 |
| E | [AreaState](./campaign-ext/AreaState) | 🔗 |
| C | [DefaultVillageTypes](./campaign-ext/DefaultVillageTypes) | 🔗 |
| C | [Fief](./campaign-ext/Fief) | 🔗 |
| C | [Hideout](./campaign-ext/Hideout) | 🔗 |
| I | [IMarketData](./campaign-ext/IMarketData) | 🔗 |
| I | [ISpottable](./campaign-ext/ISpottable) | 🔗 |
| S | [ItemData](./campaign-ext/ItemData) | 🔗 |
| E | [ProsperityLevel](./campaign-ext/ProsperityLevel) | 🔗 |
| C | [RetirementSettlementComponent](./campaign-ext/RetirementSettlementComponent) | 🔗 |
| S | [SellLog](./campaign-ext/SellLog) | 🔗 |
| C | Settlement | — |
| C | [SettlementArea](./campaign-ext/SettlementArea) | 🔗 |
| C | [SettlementComponent](./campaign-ext/SettlementComponent) | 🔗 |
| E | [SiegeState](./campaign-ext/SiegeState) | 🔗 |
| C | [Town](./campaign-ext/Town) | 🔗 |
| C | [TownMarketData](./campaign-ext/TownMarketData) | 🔗 |
| C | Village | — |
| C | [VillageMarketData](./campaign-ext/VillageMarketData) | 🔗 |
| E | [VillageStates](./campaign-ext/VillageStates) | 🔗 |
| C | [VillageType](./campaign-ext/VillageType) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Buildings (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Building](./campaign-ext/Building) | 🔗 |
| E | [BuildingEffectEnum](./campaign-ext/BuildingEffectEnum) | 🔗 |
| E | [BuildingEffectIncrementType](./campaign-ext/BuildingEffectIncrementType) | 🔗 |
| C | [BuildingType](./campaign-ext/BuildingType) | 🔗 |
| C | [DefaultBuildingTypes](./campaign-ext/DefaultBuildingTypes) | 🔗 |
| S | [EffectInfo](./campaign-ext/EffectInfo) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Locations (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AccompanyingCharacter](./campaign-ext/AccompanyingCharacter) | 🔗 |
| E | [CharacterRelations](./campaign-ext/CharacterRelations) | 🔗 |
| C | [Location](./campaign-ext/Location) | 🔗 |
| C | [LocationCharacter](./campaign-ext/LocationCharacter) | 🔗 |
| C | [LocationComplex](./campaign-ext/LocationComplex) | 🔗 |
| C | [LocationComplexTemplate](./campaign-ext/LocationComplexTemplate) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Workshops (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [Production](./campaign-ext/Production) | 🔗 |
| C | Workshop | — |
| C | [WorkshopType](./campaign-ext/WorkshopType) | 🔗 |

## TaleWorlds.CampaignSystem.Siege (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BesiegerCamp](./campaign-ext/BesiegerCamp) | 🔗 |
| C | [DefaultSiegeStrategies](./campaign-ext/DefaultSiegeStrategies) | 🔗 |
| I | [ISiegeEventSide](./campaign-ext/ISiegeEventSide) | 🔗 |
| I | [ISiegeEventVisual](./campaign-ext/ISiegeEventVisual) | 🔗 |
| C | [PlayerSiege](./campaign-ext/PlayerSiege) | 🔗 |
| C | [RangedSiegeEngine](./campaign-ext/RangedSiegeEngine) | 🔗 |
| C | [RemovedSiegeEngine](./campaign-ext/RemovedSiegeEngine) | 🔗 |
| E | [SiegeBombardTargets](./campaign-ext/SiegeBombardTargets) | 🔗 |
| C | [SiegeEngineConstructionProgress](./campaign-ext/SiegeEngineConstructionProgress) | 🔗 |
| C | [SiegeEngineMissile](./campaign-ext/SiegeEngineMissile) | 🔗 |
| C | [SiegeEnginesContainer](./campaign-ext/SiegeEnginesContainer) | 🔗 |
| C | [SiegeEvent](./campaign-ext/SiegeEvent) | 🔗 |
| C | [SiegeEventManager](./campaign-ext/SiegeEventManager) | 🔗 |
| C | [SiegeStrategy](./campaign-ext/SiegeStrategy) | 🔗 |

## TaleWorlds.CampaignSystem.TournamentGames (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FightTournamentGame](./campaign-ext/FightTournamentGame) | 🔗 |
| I | [ITournamentManager](./campaign-ext/ITournamentManager) | 🔗 |
| E | [MatchState](./campaign-ext/MatchState) | 🔗 |
| E | [QualificationMode](./campaign-ext/QualificationMode) | 🔗 |
| C | [TournamentCampaignBehavior](./campaign-ext/TournamentCampaignBehavior) | 🔗 |
| C | [TournamentGame](./campaign-ext/TournamentGame) | 🔗 |
| C | [TournamentManager](./campaign-ext/TournamentManager) | 🔗 |
| C | [TournamentMatch](./campaign-ext/TournamentMatch) | 🔗 |
| C | [TournamentParticipant](./campaign-ext/TournamentParticipant) | 🔗 |
| C | [TournamentRound](./campaign-ext/TournamentRound) | 🔗 |
| C | [TournamentTeam](./campaign-ext/TournamentTeam) | 🔗 |

## TaleWorlds.CampaignSystem.TroopSuppliers (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyGroupTroopSupplier](./campaign-ext/PartyGroupTroopSupplier) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection (34)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ActionCampaignOptionData](./campaign-ext/ActionCampaignOptionData) | 🔗 |
| C | [BannerEditorVM](./campaign-ext/BannerEditorVM) | 🔗 |
| C | [BooleanCampaignOptionData](./campaign-ext/BooleanCampaignOptionData) | 🔗 |
| C | [CampaignOptionData](./campaign-ext/CampaignOptionData) | 🔗 |
| E | [CampaignOptionDataType](./campaign-ext/CampaignOptionDataType) | 🔗 |
| S | [CampaignOptionDisableStatus](./campaign-ext/CampaignOptionDisableStatus) | 🔗 |
| E | [CampaignOptionEnableState](./campaign-ext/CampaignOptionEnableState) | 🔗 |
| C | [CampaignOptionItemVM](./campaign-ext/CampaignOptionItemVM) | 🔗 |
| C | [CampaignOptionsControllerVM](./campaign-ext/CampaignOptionsControllerVM) | 🔗 |
| E | [CampaignOptionsDifficultyPresets](./campaign-ext/CampaignOptionsDifficultyPresets) | 🔗 |
| C | [CampaignOptionSelectorVM](./campaign-ext/CampaignOptionSelectorVM) | 🔗 |
| C | [CampaignOptionsManager](./campaign-ext/CampaignOptionsManager) | 🔗 |
| C | [CampaignOptionsVM](./campaign-ext/CampaignOptionsVM) | 🔗 |
| C | [CampaignUIHelper](./campaign-ext/CampaignUIHelper) | 🔗 |
| C | [CharacterAttributeComparer](./campaign-ext/CharacterAttributeComparer) | 🔗 |
| C | [DefaultCampaignOptionsProvider](./campaign-ext/DefaultCampaignOptionsProvider) | 🔗 |
| C | [HeroViewModel](./campaign-ext/HeroViewModel) | 🔗 |
| C | [HeroVM](./campaign-ext/HeroVM) | 🔗 |
| I | [ICampaignOptionData](./campaign-ext/ICampaignOptionData) | 🔗 |
| I | [ICampaignOptionProvider](./campaign-ext/ICampaignOptionProvider) | 🔗 |
| E | IssueQuestFlags | — |
| C | [MobilePartyPrecedenceComparer](./campaign-ext/MobilePartyPrecedenceComparer) | 🔗 |
| C | [NumericCampaignOptionData](./campaign-ext/NumericCampaignOptionData) | 🔗 |
| C | [PlayerInspectedPartySpeedEvent](./campaign-ext/PlayerInspectedPartySpeedEvent) | 🔗 |
| C | [ProductInputOutputEqualityComparer](./campaign-ext/ProductInputOutputEqualityComparer) | 🔗 |
| C | [ProfitItemPropertyVM](./campaign-ext/ProfitItemPropertyVM) | 🔗 |
| E | [PropertyType](./campaign-ext/PropertyType) | 🔗 |
| C | [SelectableFiefItemPropertyVM](./campaign-ext/SelectableFiefItemPropertyVM) | 🔗 |
| C | [SelectableItemPropertyVM](./campaign-ext/SelectableItemPropertyVM) | 🔗 |
| C | [SelectionCampaignOptionData](./campaign-ext/SelectionCampaignOptionData) | 🔗 |
| C | [SkillObjectComparer](./campaign-ext/SkillObjectComparer) | 🔗 |
| E | [SortState](./campaign-ext/SortState) | 🔗 |
| C | [TooltipRefresherCollection](./campaign-ext/TooltipRefresherCollection) | 🔗 |
| C | [UIColors](./campaign-ext/UIColors) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyCohesionBoostedByPlayerEvent](./campaign-ext/ArmyCohesionBoostedByPlayerEvent) | 🔗 |
| C | [ArmyManagementBoostEventVM](./campaign-ext/ArmyManagementBoostEventVM) | 🔗 |
| C | [ArmyManagementItemVM](./campaign-ext/ArmyManagementItemVM) | 🔗 |
| C | [ArmyManagementSortControllerVM](./campaign-ext/ArmyManagementSortControllerVM) | 🔗 |
| C | [ArmyManagementVM](./campaign-ext/ArmyManagementVM) | 🔗 |
| E | [BoostCurrency](./campaign-ext/BoostCurrency) | 🔗 |
| C | [ItemClanComparer](./campaign-ext/ItemClanComparer) | 🔗 |
| C | [ItemComparerBase](./campaign-ext/ItemComparerBase) | 🔗 |
| C | [ItemCostComparer](./campaign-ext/ItemCostComparer) | 🔗 |
| C | [ItemDistanceComparer](./campaign-ext/ItemDistanceComparer) | 🔗 |
| C | [ItemNameComparer](./campaign-ext/ItemNameComparer) | 🔗 |
| C | [ItemShipCountComparer](./campaign-ext/ItemShipCountComparer) | 🔗 |
| C | [ItemStrengthComparer](./campaign-ext/ItemStrengthComparer) | 🔗 |
| C | [ManagementItemComparer](./campaign-ext/ManagementItemComparer) | 🔗 |
| C | [PartyAddedToArmyByPlayerEvent](./campaign-ext/PartyAddedToArmyByPlayerEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Barter (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterItemVM](./campaign-ext/BarterItemVM) | 🔗 |
| C | [BarterVM](./campaign-ext/BarterVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationClanNamingStageVM](./campaign-ext/CharacterCreationClanNamingStageVM) | 🔗 |
| C | [CharacterCreationCultureFeatVM](./campaign-ext/CharacterCreationCultureFeatVM) | 🔗 |
| C | [CharacterCreationCultureStageVM](./campaign-ext/CharacterCreationCultureStageVM) | 🔗 |
| C | [CharacterCreationCultureVM](./campaign-ext/CharacterCreationCultureVM) | 🔗 |
| C | [CharacterCreationGainedAttributeItemVM](./campaign-ext/CharacterCreationGainedAttributeItemVM) | 🔗 |
| C | [CharacterCreationGainedPropertiesVM](./campaign-ext/CharacterCreationGainedPropertiesVM) | 🔗 |
| C | [CharacterCreationGainedSkillItemVM](./campaign-ext/CharacterCreationGainedSkillItemVM) | 🔗 |
| C | [CharacterCreationGainGroupItemVM](./campaign-ext/CharacterCreationGainGroupItemVM) | 🔗 |
| C | [CharacterCreationNarrativeStageVM](./campaign-ext/CharacterCreationNarrativeStageVM) | 🔗 |
| C | [CharacterCreationOptionVM](./campaign-ext/CharacterCreationOptionVM) | 🔗 |
| C | [CharacterCreationReviewStageItemVM](./campaign-ext/CharacterCreationReviewStageItemVM) | 🔗 |
| C | [CharacterCreationReviewStageVM](./campaign-ext/CharacterCreationReviewStageVM) | 🔗 |
| C | [CharacterCreationStageBaseVM](./campaign-ext/CharacterCreationStageBaseVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationOptionsStageVM](./campaign-ext/CharacterCreationOptionsStageVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AttributeBoundSkillItemVM](./campaign-ext/AttributeBoundSkillItemVM) | 🔗 |
| C | [CharacterAttributeItemVM](./campaign-ext/CharacterAttributeItemVM) | 🔗 |
| C | [CharacterDeveloperHeroItemVM](./campaign-ext/CharacterDeveloperHeroItemVM) | 🔗 |
| C | [CharacterDeveloperVM](./campaign-ext/CharacterDeveloperVM) | 🔗 |
| C | [FocusAddedByPlayerEvent](./campaign-ext/FocusAddedByPlayerEvent) | 🔗 |
| E | [PerkAlternativeType](./campaign-ext/PerkAlternativeType) | 🔗 |
| E | [PerkStates](./campaign-ext/PerkStates) | 🔗 |
| C | [PerkVM](./campaign-ext/PerkVM) | 🔗 |
| C | [SkillVM](./campaign-ext/SkillVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PerkSelectedByPlayerEvent](./campaign-ext/PerkSelectedByPlayerEvent) | 🔗 |
| C | [PerkSelectionItemVM](./campaign-ext/PerkSelectionItemVM) | 🔗 |
| C | [PerkSelectionToggleEvent](./campaign-ext/PerkSelectionToggleEvent) | 🔗 |
| C | [PerkSelectionVM](./campaign-ext/PerkSelectionVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [CardSelectionItemSpriteType](./campaign-ext/CardSelectionItemSpriteType) | 🔗 |
| C | [ClanCardSelectionPopupItemPropertyVM](./campaign-ext/ClanCardSelectionPopupItemPropertyVM) | 🔗 |
| C | [ClanCardSelectionPopupItemVM](./campaign-ext/ClanCardSelectionPopupItemVM) | 🔗 |
| C | [ClanCardSelectionPopupVM](./campaign-ext/ClanCardSelectionPopupVM) | 🔗 |
| C | [ClanFinanceExpenseItemVM](./campaign-ext/ClanFinanceExpenseItemVM) | 🔗 |
| C | [ClanFinanceIncomeItemBaseVM](./campaign-ext/ClanFinanceIncomeItemBaseVM) | 🔗 |
| C | [ClanLordItemVM](./campaign-ext/ClanLordItemVM) | 🔗 |
| C | [ClanLordStatusItemVM](./campaign-ext/ClanLordStatusItemVM) | 🔗 |
| C | [ClanManagementVM](./campaign-ext/ClanManagementVM) | 🔗 |
| C | [ClanPartyBehaviorSelectorVM](./campaign-ext/ClanPartyBehaviorSelectorVM) | 🔗 |
| C | [ClanPartyItemVM](./campaign-ext/ClanPartyItemVM) | 🔗 |
| C | [ClanPartyMemberItemVM](./campaign-ext/ClanPartyMemberItemVM) | 🔗 |
| E | [ClanPartyType](./campaign-ext/ClanPartyType) | 🔗 |
| C | [ClanRoleAssignedThroughClanScreenEvent](./campaign-ext/ClanRoleAssignedThroughClanScreenEvent) | 🔗 |
| C | [ClanRoleItemVM](./campaign-ext/ClanRoleItemVM) | 🔗 |
| C | [ClanRoleMemberItemVM](./campaign-ext/ClanRoleMemberItemVM) | 🔗 |
| C | [ClanSettlementItemVM](./campaign-ext/ClanSettlementItemVM) | 🔗 |
| E | [IncomeTypes](./campaign-ext/IncomeTypes) | 🔗 |
| E | [LordStatus](./campaign-ext/LordStatus) | 🔗 |
| E | [TaxType](./campaign-ext/TaxType) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories (26)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AlleyItemComparerBase](./campaign-ext/AlleyItemComparerBase) | 🔗 |
| C | [AlleyItemIncomeComparer](./campaign-ext/AlleyItemIncomeComparer) | 🔗 |
| C | [AlleyItemLocationComparer](./campaign-ext/AlleyItemLocationComparer) | 🔗 |
| C | [AlleyItemNameComparer](./campaign-ext/AlleyItemNameComparer) | 🔗 |
| C | [ClanFiefsSortControllerVM](./campaign-ext/ClanFiefsSortControllerVM) | 🔗 |
| C | [ClanFiefsVM](./campaign-ext/ClanFiefsVM) | 🔗 |
| C | [ClanIncomeSortControllerVM](./campaign-ext/ClanIncomeSortControllerVM) | 🔗 |
| C | [ClanIncomeVM](./campaign-ext/ClanIncomeVM) | 🔗 |
| C | [ClanMembersSortControllerVM](./campaign-ext/ClanMembersSortControllerVM) | 🔗 |
| C | [ClanMembersVM](./campaign-ext/ClanMembersVM) | 🔗 |
| C | [ClanPartiesSortControllerVM](./campaign-ext/ClanPartiesSortControllerVM) | 🔗 |
| C | [ClanPartiesVM](./campaign-ext/ClanPartiesVM) | 🔗 |
| C | ItemComparerBase | — |
| C | [ItemGovernorComparer](./campaign-ext/ItemGovernorComparer) | 🔗 |
| C | [ItemLocationComparer](./campaign-ext/ItemLocationComparer) | 🔗 |
| C | ItemNameComparer | — |
| C | [ItemProfitComparer](./campaign-ext/ItemProfitComparer) | 🔗 |
| C | ItemShipCountComparer | — |
| C | [ItemSizeComparer](./campaign-ext/ItemSizeComparer) | 🔗 |
| C | [SupporterItemComparerBase](./campaign-ext/SupporterItemComparerBase) | 🔗 |
| C | [SupporterItemIncomeComparer](./campaign-ext/SupporterItemIncomeComparer) | 🔗 |
| C | [SupporterItemNameComparer](./campaign-ext/SupporterItemNameComparer) | 🔗 |
| C | [WorkshopItemComparerBase](./campaign-ext/WorkshopItemComparerBase) | 🔗 |
| C | [WorkshopItemIncomeComparer](./campaign-ext/WorkshopItemIncomeComparer) | 🔗 |
| C | [WorkshopItemLocationComparer](./campaign-ext/WorkshopItemLocationComparer) | 🔗 |
| C | [WorkshopItemNameComparer](./campaign-ext/WorkshopItemNameComparer) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClanFinanceAlleyItemVM](./campaign-ext/ClanFinanceAlleyItemVM) | 🔗 |
| C | [ClanFinanceCommonAreaItemVM](./campaign-ext/ClanFinanceCommonAreaItemVM) | 🔗 |
| C | [ClanFinanceMercenaryItemVM](./campaign-ext/ClanFinanceMercenaryItemVM) | 🔗 |
| C | [ClanFinanceTownItemVM](./campaign-ext/ClanFinanceTownItemVM) | 🔗 |
| C | [ClanFinanceWorkshopItemVM](./campaign-ext/ClanFinanceWorkshopItemVM) | 🔗 |
| C | [WorkshopPercentageSelectorItemVM](./campaign-ext/WorkshopPercentageSelectorItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClanSupporterGroupVM](./campaign-ext/ClanSupporterGroupVM) | 🔗 |
| C | [ClanSupporterItemVM](./campaign-ext/ClanSupporterItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Conversation (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ConversationAggressivePartyItemVM](./campaign-ext/ConversationAggressivePartyItemVM) | 🔗 |
| C | [ConversationItemVM](./campaign-ext/ConversationItemVM) | 🔗 |
| C | [MissionConversationVM](./campaign-ext/MissionConversationVM) | 🔗 |
| C | [PersuasionOptionVM](./campaign-ext/PersuasionOptionVM) | 🔗 |
| C | [PersuasionVM](./campaign-ext/PersuasionVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Education (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EducationGainedAttributeItemVM](./campaign-ext/EducationGainedAttributeItemVM) | 🔗 |
| C | [EducationGainedPropertiesVM](./campaign-ext/EducationGainedPropertiesVM) | 🔗 |
| C | [EducationGainedSkillItemVM](./campaign-ext/EducationGainedSkillItemVM) | 🔗 |
| C | [EducationGainGroupItemVM](./campaign-ext/EducationGainGroupItemVM) | 🔗 |
| C | [EducationOptionVM](./campaign-ext/EducationOptionVM) | 🔗 |
| C | [EducationReviewItemVM](./campaign-ext/EducationReviewItemVM) | 🔗 |
| C | [EducationReviewVM](./campaign-ext/EducationReviewVM) | 🔗 |
| C | [EducationVM](./campaign-ext/EducationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [DescriptionType](./campaign-ext/DescriptionType) | 🔗 |
| C | [EncyclopediaHomeVM](./campaign-ext/EncyclopediaHomeVM) | 🔗 |
| C | [EncyclopediaLinkVM](./campaign-ext/EncyclopediaLinkVM) | 🔗 |
| C | [EncyclopediaNavigatorVM](./campaign-ext/EncyclopediaNavigatorVM) | 🔗 |
| C | [EncyclopediaPageChangedEvent](./campaign-ext/EncyclopediaPageChangedEvent) | 🔗 |
| E | [EncyclopediaPages](./campaign-ext/EncyclopediaPages) | 🔗 |
| C | [EncyclopediaSearchResultVM](./campaign-ext/EncyclopediaSearchResultVM) | 🔗 |
| C | [EncyclopediaSettlementPageStatItemVM](./campaign-ext/EncyclopediaSettlementPageStatItemVM) | 🔗 |
| C | [OnEncyclopediaFilterActivatedEvent](./campaign-ext/OnEncyclopediaFilterActivatedEvent) | 🔗 |
| C | [OnEncyclopediaListSortedEvent](./campaign-ext/OnEncyclopediaListSortedEvent) | 🔗 |
| C | [OnEncyclopediaSearchActivatedEvent](./campaign-ext/OnEncyclopediaSearchActivatedEvent) | 🔗 |
| C | [PlayerToggleTrackSettlementFromEncyclopediaEvent](./campaign-ext/PlayerToggleTrackSettlementFromEncyclopediaEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaDwellingVM](./campaign-ext/EncyclopediaDwellingVM) | 🔗 |
| C | [EncyclopediaFactionVM](./campaign-ext/EncyclopediaFactionVM) | 🔗 |
| C | [EncyclopediaFamilyMemberVM](./campaign-ext/EncyclopediaFamilyMemberVM) | 🔗 |
| C | [EncyclopediaHistoryEventVM](./campaign-ext/EncyclopediaHistoryEventVM) | 🔗 |
| C | [EncyclopediaSettlementVM](./campaign-ext/EncyclopediaSettlementVM) | 🔗 |
| C | [EncyclopediaShipSlotVM](./campaign-ext/EncyclopediaShipSlotVM) | 🔗 |
| C | [EncyclopediaShipStatVM](./campaign-ext/EncyclopediaShipStatVM) | 🔗 |
| C | [EncyclopediaSkillVM](./campaign-ext/EncyclopediaSkillVM) | 🔗 |
| C | [EncyclopediaTraitItemVM](./campaign-ext/EncyclopediaTraitItemVM) | 🔗 |
| C | [EncyclopediaTroopTreeNodeVM](./campaign-ext/EncyclopediaTroopTreeNodeVM) | 🔗 |
| C | [EncyclopediaUnitEquipmentSetSelectorItemVM](./campaign-ext/EncyclopediaUnitEquipmentSetSelectorItemVM) | 🔗 |
| C | [EncyclopediaUnitVM](./campaign-ext/EncyclopediaUnitVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaFilterGroupVM](./campaign-ext/EncyclopediaFilterGroupVM) | 🔗 |
| C | [EncyclopediaListFilterVM](./campaign-ext/EncyclopediaListFilterVM) | 🔗 |
| C | [EncyclopediaListItemComparer](./campaign-ext/EncyclopediaListItemComparer) | 🔗 |
| C | [EncyclopediaListItemVM](./campaign-ext/EncyclopediaListItemVM) | 🔗 |
| C | [EncyclopediaListSelectorItemVM](./campaign-ext/EncyclopediaListSelectorItemVM) | 🔗 |
| C | [EncyclopediaListSelectorVM](./campaign-ext/EncyclopediaListSelectorVM) | 🔗 |
| C | [EncyclopediaListSortControllerVM](./campaign-ext/EncyclopediaListSortControllerVM) | 🔗 |
| C | [EncyclopediaListVM](./campaign-ext/EncyclopediaListVM) | 🔗 |
| C | [ListTypeVM](./campaign-ext/ListTypeVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaClanPageVM](./campaign-ext/EncyclopediaClanPageVM) | 🔗 |
| C | [EncyclopediaConceptPageVM](./campaign-ext/EncyclopediaConceptPageVM) | 🔗 |
| C | [EncyclopediaContentPageVM](./campaign-ext/EncyclopediaContentPageVM) | 🔗 |
| C | [EncyclopediaFactionPageVM](./campaign-ext/EncyclopediaFactionPageVM) | 🔗 |
| C | [EncyclopediaHeroPageVM](./campaign-ext/EncyclopediaHeroPageVM) | 🔗 |
| S | [EncyclopediaPageArgs](./campaign-ext/EncyclopediaPageArgs) | 🔗 |
| C | [EncyclopediaPageVM](./campaign-ext/EncyclopediaPageVM) | 🔗 |
| C | [EncyclopediaSettlementPageVM](./campaign-ext/EncyclopediaSettlementPageVM) | 🔗 |
| C | [EncyclopediaShipPageVM](./campaign-ext/EncyclopediaShipPageVM) | 🔗 |
| C | [EncyclopediaUnitPageVM](./campaign-ext/EncyclopediaUnitPageVM) | 🔗 |
| C | [EncyclopediaViewModel](./campaign-ext/EncyclopediaViewModel) | 🔗 |
| C | [HeroAgeComparer](./campaign-ext/HeroAgeComparer) | 🔗 |
| C | [HeroRelationComparer](./campaign-ext/HeroRelationComparer) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GameMenuItemProgressVM](./campaign-ext/GameMenuItemProgressVM) | 🔗 |
| C | [GameMenuItemVM](./campaign-ext/GameMenuItemVM) | 🔗 |
| C | [GameMenuPlunderItemVM](./campaign-ext/GameMenuPlunderItemVM) | 🔗 |
| C | [GameMenuVM](./campaign-ext/GameMenuVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CrimeValueInspectedInSettlementOverlayEvent](./campaign-ext/CrimeValueInspectedInSettlementOverlayEvent) | 🔗 |
| C | [PartyScreenCharacterTalkPermissionEvent](./campaign-ext/PartyScreenCharacterTalkPermissionEvent) | 🔗 |
| C | [SettlementOverlayLeaveCharacterPermissionEvent](./campaign-ext/SettlementOverlayLeaveCharacterPermissionEvent) | 🔗 |
| C | [SettlementOverlayTalkPermissionEvent](./campaign-ext/SettlementOverlayTalkPermissionEvent) | 🔗 |
| C | [SettlementOverylayQuickTalkPermissionEvent](./campaign-ext/SettlementOverylayQuickTalkPermissionEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyMenuOverlayVM](./campaign-ext/ArmyMenuOverlayVM) | 🔗 |
| C | [EncounterMenuOverlayVM](./campaign-ext/EncounterMenuOverlayVM) | 🔗 |
| C | [GameMenuOverlay](./campaign-ext/GameMenuOverlay) | 🔗 |
| C | [GameMenuOverlayActionVM](./campaign-ext/GameMenuOverlayActionVM) | 🔗 |
| C | [GameMenuOverlayFactory](./campaign-ext/GameMenuOverlayFactory) | 🔗 |
| C | [GameMenuPartyItemVM](./campaign-ext/GameMenuPartyItemVM) | 🔗 |
| I | [IGameMenuOverlayProvider](./campaign-ext/IGameMenuOverlayProvider) | 🔗 |
| C | [MenuOverlay](./campaign-ext/MenuOverlay) | 🔗 |
| E | [OverlayType](./campaign-ext/OverlayType) | 🔗 |
| C | [SettlementMenuOverlayVM](./campaign-ext/SettlementMenuOverlayVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RecruitmentVM](./campaign-ext/RecruitmentVM) | 🔗 |
| C | [RecruitVolunteerOwnerVM](./campaign-ext/RecruitVolunteerOwnerVM) | 🔗 |
| C | [RecruitVolunteerTroopVM](./campaign-ext/RecruitVolunteerTroopVM) | 🔗 |
| C | [RecruitVolunteerVM](./campaign-ext/RecruitVolunteerVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemNameComparer | — |
| C | [ItemPlacementComparer](./campaign-ext/ItemPlacementComparer) | 🔗 |
| C | [ItemPrizeComparer](./campaign-ext/ItemPrizeComparer) | 🔗 |
| C | [ItemVictoriesComparer](./campaign-ext/ItemVictoriesComparer) | 🔗 |
| C | [TournamentLeaderboardEntryItemVM](./campaign-ext/TournamentLeaderboardEntryItemVM) | 🔗 |
| C | [TournamentLeaderboardSortControllerVM](./campaign-ext/TournamentLeaderboardSortControllerVM) | 🔗 |
| C | [TournamentLeaderboardVM](./campaign-ext/TournamentLeaderboardVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | DescriptionType | — |
| C | [SettlementBuildingProjectVM](./campaign-ext/SettlementBuildingProjectVM) | 🔗 |
| C | [SettlementDailyProjectVM](./campaign-ext/SettlementDailyProjectVM) | 🔗 |
| C | [SettlementGovernorSelectionItemVM](./campaign-ext/SettlementGovernorSelectionItemVM) | 🔗 |
| C | [SettlementGovernorSelectionVM](./campaign-ext/SettlementGovernorSelectionVM) | 🔗 |
| C | [SettlementProjectSelectionVM](./campaign-ext/SettlementProjectSelectionVM) | 🔗 |
| C | [SettlementProjectVM](./campaign-ext/SettlementProjectVM) | 🔗 |
| C | [TownManagementDescriptionItemVM](./campaign-ext/TownManagementDescriptionItemVM) | 🔗 |
| C | [TownManagementReserveControlVM](./campaign-ext/TownManagementReserveControlVM) | 🔗 |
| C | [TownManagementShopItemVM](./campaign-ext/TownManagementShopItemVM) | 🔗 |
| C | [TownManagementVillageItemVM](./campaign-ext/TownManagementVillageItemVM) | 🔗 |
| C | [TownManagementVM](./campaign-ext/TownManagementVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GameMenuTroopSelectionVM](./campaign-ext/GameMenuTroopSelectionVM) | 🔗 |
| C | [TroopItemComparer](./campaign-ext/TroopItemComparer) | 🔗 |
| C | [TroopSelectionItemVM](./campaign-ext/TroopSelectionItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Input (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [InputKeyItemVM](./campaign-ext/InputKeyItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Inventory (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [EquipmentModes](./campaign-ext/EquipmentModes) | 🔗 |
| E | [Filters](./campaign-ext/Filters) | 🔗 |
| C | [InventoryCharacterSelectorItemVM](./campaign-ext/InventoryCharacterSelectorItemVM) | 🔗 |
| C | [InventoryEquipmentTypeChangedEvent](./campaign-ext/InventoryEquipmentTypeChangedEvent) | 🔗 |
| C | [InventoryFilterChangedEvent](./campaign-ext/InventoryFilterChangedEvent) | 🔗 |
| C | [InventoryItemInspectedEvent](./campaign-ext/InventoryItemInspectedEvent) | 🔗 |
| E | [InventoryItemSortOption](./campaign-ext/InventoryItemSortOption) | 🔗 |
| E | [InventoryItemSortState](./campaign-ext/InventoryItemSortState) | 🔗 |
| C | [InventoryTradeVM](./campaign-ext/InventoryTradeVM) | 🔗 |
| C | [ItemComparer](./campaign-ext/ItemComparer) | 🔗 |
| C | ItemCostComparer | — |
| C | [ItemFlagVM](./campaign-ext/ItemFlagVM) | 🔗 |
| C | [ItemMenuTooltipPropertyVM](./campaign-ext/ItemMenuTooltipPropertyVM) | 🔗 |
| C | [ItemMenuVM](./campaign-ext/ItemMenuVM) | 🔗 |
| C | ItemNameComparer | — |
| C | [ItemPreviewVM](./campaign-ext/ItemPreviewVM) | 🔗 |
| C | [ItemQuantityComparer](./campaign-ext/ItemQuantityComparer) | 🔗 |
| C | [ItemTypeComparer](./campaign-ext/ItemTypeComparer) | 🔗 |
| E | [ProfitTypes](./campaign-ext/ProfitTypes) | 🔗 |
| C | [SPInventorySortControllerVM](./campaign-ext/SPInventorySortControllerVM) | 🔗 |
| C | [SPInventoryVM](./campaign-ext/SPInventoryVM) | 🔗 |
| C | [SPItemVM](./campaign-ext/SPItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [KingdomCategoryVM](./campaign-ext/KingdomCategoryVM) | 🔗 |
| C | [KingdomGiftFiefPopupVM](./campaign-ext/KingdomGiftFiefPopupVM) | 🔗 |
| C | [KingdomItemVM](./campaign-ext/KingdomItemVM) | 🔗 |
| C | [KingdomManagementVM](./campaign-ext/KingdomManagementVM) | 🔗 |
| C | [LeaveKingdomPermissionEvent](./campaign-ext/LeaveKingdomPermissionEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemDistanceComparer | — |
| C | ItemNameComparer | — |
| C | [ItemOwnerComparer](./campaign-ext/ItemOwnerComparer) | 🔗 |
| C | [ItemPartiesComparer](./campaign-ext/ItemPartiesComparer) | 🔗 |
| C | ItemStrengthComparer | — |
| C | [KingdomArmyItemVM](./campaign-ext/KingdomArmyItemVM) | 🔗 |
| C | [KingdomArmyPartyItemVM](./campaign-ext/KingdomArmyPartyItemVM) | 🔗 |
| C | [KingdomArmySortControllerVM](./campaign-ext/KingdomArmySortControllerVM) | 🔗 |
| C | [KingdomArmyVM](./campaign-ext/KingdomArmyVM) | 🔗 |
| C | [KingdomSettlementVillageItemVM](./campaign-ext/KingdomSettlementVillageItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | [ItemFiefsComparer](./campaign-ext/ItemFiefsComparer) | 🔗 |
| C | [ItemInfluenceComparer](./campaign-ext/ItemInfluenceComparer) | 🔗 |
| C | [ItemMembersComparer](./campaign-ext/ItemMembersComparer) | 🔗 |
| C | ItemNameComparer | — |
| C | ItemTypeComparer | — |
| C | [KingdomClanFiefItemVM](./campaign-ext/KingdomClanFiefItemVM) | 🔗 |
| C | [KingdomClanItemVM](./campaign-ext/KingdomClanItemVM) | 🔗 |
| C | [KingdomClanSortControllerVM](./campaign-ext/KingdomClanSortControllerVM) | 🔗 |
| C | [KingdomClanVM](./campaign-ext/KingdomClanVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DecisionOptionVM](./campaign-ext/DecisionOptionVM) | 🔗 |
| C | [DecisionSupporterVM](./campaign-ext/DecisionSupporterVM) | 🔗 |
| C | [KingdomDecisionsVM](./campaign-ext/KingdomDecisionsVM) | 🔗 |
| C | [PlayerSelectedAKingdomDecisionOptionEvent](./campaign-ext/PlayerSelectedAKingdomDecisionOptionEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptingCallToWarAgreementDecisionItemVM](./campaign-ext/AcceptingCallToWarAgreementDecisionItemVM) | 🔗 |
| C | [DecisionItemBaseVM](./campaign-ext/DecisionItemBaseVM) | 🔗 |
| C | [DeclareWarDecisionItemVM](./campaign-ext/DeclareWarDecisionItemVM) | 🔗 |
| C | [ExpelClanDecisionItemVM](./campaign-ext/ExpelClanDecisionItemVM) | 🔗 |
| C | [KingdomPolicyDecisionItemVM](./campaign-ext/KingdomPolicyDecisionItemVM) | 🔗 |
| C | [KingSelectionDecisionItemVM](./campaign-ext/KingSelectionDecisionItemVM) | 🔗 |
| C | [MakePeaceDecisionItemVM](./campaign-ext/MakePeaceDecisionItemVM) | 🔗 |
| C | [PolicyDecisionItemVM](./campaign-ext/PolicyDecisionItemVM) | 🔗 |
| C | [ProposeCallToWarAgreementDecisionItemVM](./campaign-ext/ProposeCallToWarAgreementDecisionItemVM) | 🔗 |
| C | [SettlementDecisionItemVM](./campaign-ext/SettlementDecisionItemVM) | 🔗 |
| C | [StartAllianceDecisionItemVM](./campaign-ext/StartAllianceDecisionItemVM) | 🔗 |
| C | [TradeAgreementDecisionItemVM](./campaign-ext/TradeAgreementDecisionItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | [ItemScoreComparer](./campaign-ext/ItemScoreComparer) | 🔗 |
| C | [KingdomDiplomacyFactionItemVM](./campaign-ext/KingdomDiplomacyFactionItemVM) | 🔗 |
| C | [KingdomDiplomacyItemVM](./campaign-ext/KingdomDiplomacyItemVM) | 🔗 |
| C | [KingdomDiplomacyProposalActionItemVM](./campaign-ext/KingdomDiplomacyProposalActionItemVM) | 🔗 |
| C | [KingdomDiplomacyVM](./campaign-ext/KingdomDiplomacyVM) | 🔗 |
| C | [KingdomTruceItemVM](./campaign-ext/KingdomTruceItemVM) | 🔗 |
| C | [KingdomWarComparableStatVM](./campaign-ext/KingdomWarComparableStatVM) | 🔗 |
| C | [KingdomWarItemVM](./campaign-ext/KingdomWarItemVM) | 🔗 |
| C | [KingdomWarLogItemVM](./campaign-ext/KingdomWarLogItemVM) | 🔗 |
| C | [KingdomWarSortControllerVM](./campaign-ext/KingdomWarSortControllerVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [KingdomPoliciesVM](./campaign-ext/KingdomPoliciesVM) | 🔗 |
| C | [KingdomPolicyItemVM](./campaign-ext/KingdomPolicyItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemClanComparer | — |
| C | ItemComparerBase | — |
| C | [ItemFoodComparer](./campaign-ext/ItemFoodComparer) | 🔗 |
| C | [ItemGarrisonComparer](./campaign-ext/ItemGarrisonComparer) | 🔗 |
| C | ItemNameComparer | — |
| C | ItemOwnerComparer | — |
| C | [ItemProsperityComparer](./campaign-ext/ItemProsperityComparer) | 🔗 |
| C | ItemTypeComparer | — |
| C | [ItemVillagesComparer](./campaign-ext/ItemVillagesComparer) | 🔗 |
| C | [KingdomSettlementItemVM](./campaign-ext/KingdomSettlementItemVM) | 🔗 |
| C | [KingdomSettlementSortControllerVM](./campaign-ext/KingdomSettlementSortControllerVM) | 🔗 |
| C | [KingdomSettlementVM](./campaign-ext/KingdomSettlementVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapNotificationVM](./campaign-ext/MapNotificationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [HeirSelectionPopupHeroVM](./campaign-ext/HeirSelectionPopupHeroVM) | 🔗 |
| C | [HeirSelectionPopupVM](./campaign-ext/HeirSelectionPopupVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [MapBarShortcuts](./campaign-ext/MapBarShortcuts) | 🔗 |
| C | [MapBarVM](./campaign-ext/MapBarVM) | 🔗 |
| C | [MapInfoItemVM](./campaign-ext/MapInfoItemVM) | 🔗 |
| C | [MapInfoVM](./campaign-ext/MapInfoVM) | 🔗 |
| C | [MapNavigationItemVM](./campaign-ext/MapNavigationItemVM) | 🔗 |
| C | [MapNavigationVM](./campaign-ext/MapNavigationVM) | 🔗 |
| C | [MapTimeControlVM](./campaign-ext/MapTimeControlVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapConversationVM](./campaign-ext/MapConversationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarOfferNotificationItemVM](./campaign-ext/AcceptCallToWarOfferNotificationItemVM) | 🔗 |
| C | [AlleyLeaderDiedMapNotificationItemVM](./campaign-ext/AlleyLeaderDiedMapNotificationItemVM) | 🔗 |
| C | [AlleyUnderAttackMapNotificationItemVM](./campaign-ext/AlleyUnderAttackMapNotificationItemVM) | 🔗 |
| C | [AllianceOfferNotificationItemVM](./campaign-ext/AllianceOfferNotificationItemVM) | 🔗 |
| C | [ArmyCreationNotificationItemVM](./campaign-ext/ArmyCreationNotificationItemVM) | 🔗 |
| C | [ArmyDispersionItemVM](./campaign-ext/ArmyDispersionItemVM) | 🔗 |
| C | [DeathNotificationItemVM](./campaign-ext/DeathNotificationItemVM) | 🔗 |
| C | [EducationNotificationItemVM](./campaign-ext/EducationNotificationItemVM) | 🔗 |
| C | [HeirComeOfAgeNotificationItemVM](./campaign-ext/HeirComeOfAgeNotificationItemVM) | 🔗 |
| C | [KingdomDestroyedNotificationItemVM](./campaign-ext/KingdomDestroyedNotificationItemVM) | 🔗 |
| C | [KingdomVoteNotificationItemVM](./campaign-ext/KingdomVoteNotificationItemVM) | 🔗 |
| C | [MapNotificationItemBaseVM](./campaign-ext/MapNotificationItemBaseVM) | 🔗 |
| C | [MarriageNotificationItemVM](./campaign-ext/MarriageNotificationItemVM) | 🔗 |
| C | [MarriageOfferNotificationItemVM](./campaign-ext/MarriageOfferNotificationItemVM) | 🔗 |
| C | [MercenaryOfferMapNotificationItemVM](./campaign-ext/MercenaryOfferMapNotificationItemVM) | 🔗 |
| C | [NewBornNotificationItemVM](./campaign-ext/NewBornNotificationItemVM) | 🔗 |
| C | [PartyLeaderChangeNotificationVM](./campaign-ext/PartyLeaderChangeNotificationVM) | 🔗 |
| C | [PeaceNotificationItemVM](./campaign-ext/PeaceNotificationItemVM) | 🔗 |
| C | [PeaceOfferNotificationItemVM](./campaign-ext/PeaceOfferNotificationItemVM) | 🔗 |
| C | [ProposeCallToWarOfferNotificationItemVM](./campaign-ext/ProposeCallToWarOfferNotificationItemVM) | 🔗 |
| C | [QuestNotificationItemVM](./campaign-ext/QuestNotificationItemVM) | 🔗 |
| C | [RansomNotificationItemVM](./campaign-ext/RansomNotificationItemVM) | 🔗 |
| C | [RebellionNotificationItemVM](./campaign-ext/RebellionNotificationItemVM) | 🔗 |
| C | [SettlementOwnerChangedNotificationItemVM](./campaign-ext/SettlementOwnerChangedNotificationItemVM) | 🔗 |
| C | [SettlementUnderSiegeMapNotificationItemVM](./campaign-ext/SettlementUnderSiegeMapNotificationItemVM) | 🔗 |
| C | [TraitChangedNotificationItemVM](./campaign-ext/TraitChangedNotificationItemVM) | 🔗 |
| C | [TributeFinishedMapNotificationVM](./campaign-ext/TributeFinishedMapNotificationVM) | 🔗 |
| C | [VassalOfferMapNotificationItemVM](./campaign-ext/VassalOfferMapNotificationItemVM) | 🔗 |
| C | [WarNotificationItemVM](./campaign-ext/WarNotificationItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MarriageOfferPopupHeroAttributeVM](./campaign-ext/MarriageOfferPopupHeroAttributeVM) | 🔗 |
| C | [MarriageOfferPopupHeroVM](./campaign-ext/MarriageOfferPopupHeroVM) | 🔗 |
| C | [MarriageOfferPopupVM](./campaign-ext/MarriageOfferPopupVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapParleyAnimationVM](./campaign-ext/MapParleyAnimationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Party (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyCharacterVM](./campaign-ext/PartyCharacterVM) | 🔗 |
| C | [PartyCompositionVM](./campaign-ext/PartyCompositionVM) | 🔗 |
| C | [PartySortControllerVM](./campaign-ext/PartySortControllerVM) | 🔗 |
| C | [PartyTradeVM](./campaign-ext/PartyTradeVM) | 🔗 |
| C | [PartyVM](./campaign-ext/PartyVM) | 🔗 |
| C | [PlayerMoveTroopEvent](./campaign-ext/PlayerMoveTroopEvent) | 🔗 |
| C | [PlayerRequestUpgradeTroopEvent](./campaign-ext/PlayerRequestUpgradeTroopEvent) | 🔗 |
| C | [PlayerToggledUpgradePopupEvent](./campaign-ext/PlayerToggledUpgradePopupEvent) | 🔗 |
| C | [TroopSortSelectorItemVM](./campaign-ext/TroopSortSelectorItemVM) | 🔗 |
| C | [UpgradeRequirementsVM](./campaign-ext/UpgradeRequirementsVM) | 🔗 |
| C | [UpgradeTargetVM](./campaign-ext/UpgradeTargetVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyRecruitTroopVM](./campaign-ext/PartyRecruitTroopVM) | 🔗 |
| C | [PartyTroopManagerItemVM](./campaign-ext/PartyTroopManagerItemVM) | 🔗 |
| C | [PartyTroopManagerVM](./campaign-ext/PartyTroopManagerVM) | 🔗 |
| C | [PartyUpgradeTroopVM](./campaign-ext/PartyUpgradeTroopVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Quests (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [QuestCompletionType](./campaign-ext/QuestCompletionType) | 🔗 |
| C | [QuestItemSortControllerVM](./campaign-ext/QuestItemSortControllerVM) | 🔗 |
| E | [QuestItemSortOption](./campaign-ext/QuestItemSortOption) | 🔗 |
| C | [QuestItemVM](./campaign-ext/QuestItemVM) | 🔗 |
| C | [QuestMarkerVM](./campaign-ext/QuestMarkerVM) | 🔗 |
| C | [QuestStageTaskVM](./campaign-ext/QuestStageTaskVM) | 🔗 |
| C | [QuestStageVM](./campaign-ext/QuestStageVM) | 🔗 |
| C | [QuestsVM](./campaign-ext/QuestsVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingAvailableHeroItemVM](./campaign-ext/CraftingAvailableHeroItemVM) | 🔗 |
| C | [CraftingHeroPopupVM](./campaign-ext/CraftingHeroPopupVM) | 🔗 |
| C | [CraftingListPropertyItem](./campaign-ext/CraftingListPropertyItem) | 🔗 |
| C | [CraftingPerkVM](./campaign-ext/CraftingPerkVM) | 🔗 |
| C | [CraftingResourceItemVM](./campaign-ext/CraftingResourceItemVM) | 🔗 |
| C | [CraftingSecondaryUsageItemVM](./campaign-ext/CraftingSecondaryUsageItemVM) | 🔗 |
| C | [CraftingVM](./campaign-ext/CraftingVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RefinementActionItemVM](./campaign-ext/RefinementActionItemVM) | 🔗 |
| C | [RefinementVM](./campaign-ext/RefinementVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemNameComparer | — |
| C | ItemTypeComparer | — |
| C | [ItemYieldComparer](./campaign-ext/ItemYieldComparer) | 🔗 |
| C | [SmeltingItemVM](./campaign-ext/SmeltingItemVM) | 🔗 |
| C | [SmeltingSortControllerVM](./campaign-ext/SmeltingSortControllerVM) | 🔗 |
| C | [SmeltingVM](./campaign-ext/SmeltingVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingHistoryVM](./campaign-ext/CraftingHistoryVM) | 🔗 |
| C | [CraftingItemFlagVM](./campaign-ext/CraftingItemFlagVM) | 🔗 |
| C | [CraftingOrderSelectionOpenedEvent](./campaign-ext/CraftingOrderSelectionOpenedEvent) | 🔗 |
| C | [CraftingOrderTabOpenedEvent](./campaign-ext/CraftingOrderTabOpenedEvent) | 🔗 |
| C | [CraftingPieceListVM](./campaign-ext/CraftingPieceListVM) | 🔗 |
| E | [CraftingPieceTierFilter](./campaign-ext/CraftingPieceTierFilter) | 🔗 |
| C | [CraftingPieceVM](./campaign-ext/CraftingPieceVM) | 🔗 |
| C | [CraftingWeaponClassSelectionOpenedEvent](./campaign-ext/CraftingWeaponClassSelectionOpenedEvent) | 🔗 |
| C | [CraftingWeaponResultPopupToggledEvent](./campaign-ext/CraftingWeaponResultPopupToggledEvent) | 🔗 |
| C | [PieceTierComparer](./campaign-ext/PieceTierComparer) | 🔗 |
| C | [TemplateComparer](./campaign-ext/TemplateComparer) | 🔗 |
| C | [TierFilterTypeVM](./campaign-ext/TierFilterTypeVM) | 🔗 |
| C | [WeaponAttributeVM](./campaign-ext/WeaponAttributeVM) | 🔗 |
| C | [WeaponClassSelectionPopupVM](./campaign-ext/WeaponClassSelectionPopupVM) | 🔗 |
| C | [WeaponClassVM](./campaign-ext/WeaponClassVM) | 🔗 |
| C | [WeaponDesignResultPopupVM](./campaign-ext/WeaponDesignResultPopupVM) | 🔗 |
| C | [WeaponDesignResultPropertyItemVM](./campaign-ext/WeaponDesignResultPropertyItemVM) | 🔗 |
| C | [WeaponDesignSelectorVM](./campaign-ext/WeaponDesignSelectorVM) | 🔗 |
| C | [WeaponDesignVM](./campaign-ext/WeaponDesignVM) | 🔗 |
| C | [WeaponPropertyComparer](./campaign-ext/WeaponPropertyComparer) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingOrderItemVM](./campaign-ext/CraftingOrderItemVM) | 🔗 |
| C | [CraftingOrderPopupVM](./campaign-ext/CraftingOrderPopupVM) | 🔗 |
