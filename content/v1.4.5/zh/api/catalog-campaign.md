---
title: 战役系统 Campaign System 类目录 / Class Catalog
extra:
  sidebar: auto
---
# 战役系统 Campaign System 类目录

## 心智模型

先把 `战役系统 Campaign System 类目录` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

本页列出 1.4.5 源码中该领域全部公开类型，按命名空间分组。共 **1838** 个类型，其中 **1805** 个已有深度文档页（带链接）。由 `tools/gen-class-catalog.mjs` 从源码自动生成。

> 图例：C=class S=struct I=interface E=enum。带 🔗 的已有深度文档页。

## TaleWorlds.CampaignSystem (125)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [ActionNotes](/v1.3.15/zh/api/campaign-ext/ActionNotes) | 🔗 |
| S | [AIBehaviorData](/v1.3.15/zh/api/campaign-ext/AIBehaviorData) | 🔗 |
| C | [Army](/v1.3.15/zh/api/campaign-ext/Army) | 🔗 |
| E | [ArmyDispersionReason](/v1.3.15/zh/api/campaign-ext/ArmyDispersionReason) | 🔗 |
| E | [ArmyTypes](/v1.3.15/zh/api/campaign-ext/ArmyTypes) | 🔗 |
| C | [AtmosphereGrid](/v1.3.15/zh/api/campaign-ext/AtmosphereGrid) | 🔗 |
| S | [BattleResultPartyData](/v1.3.15/zh/api/campaign-ext/BattleResultPartyData) | 🔗 |
| C | [BattleSimulation](/v1.3.15/zh/api/campaign-ext/BattleSimulation) | 🔗 |
| E | [BoardGameType](/v1.3.15/zh/api/campaign-ext/BoardGameType) | 🔗 |
| C | Campaign | — |
| C | [CampaignBehaviorBase](/v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase) | 🔗 |
| C | [CampaignCheats](/v1.3.15/zh/api/campaign-ext/CampaignCheats) | 🔗 |
| C | [CampaignData](/v1.3.15/zh/api/campaign-ext/CampaignData) | 🔗 |
| C | [CampaignEntityComponent](/v1.3.15/zh/api/campaign-ext/CampaignEntityComponent) | 🔗 |
| C | [CampaignEventDispatcher](/v1.3.15/zh/api/campaign-ext/CampaignEventDispatcher) | 🔗 |
| C | [CampaignEventReceiver](/v1.3.15/zh/api/campaign-ext/CampaignEventReceiver) | 🔗 |
| C | [CampaignEvents](/v1.3.15/zh/api/campaign-ext/CampaignEvents) | 🔗 |
| E | [CampaignGameMode](/v1.3.15/zh/api/campaign-ext/CampaignGameMode) | 🔗 |
| C | [CampaignGameStarter](/v1.3.15/zh/api/campaign-ext/CampaignGameStarter) | 🔗 |
| C | [CampaignInformationManager](/v1.3.15/zh/api/campaign-ext/CampaignInformationManager) | 🔗 |
| C | [CampaignMission](/v1.3.15/zh/api/campaign-ext/CampaignMission) | 🔗 |
| C | [CampaignObjectBase](/v1.3.15/zh/api/campaign-ext/CampaignObjectBase) | 🔗 |
| C | [CampaignObjectManager](/v1.3.15/zh/api/campaign-ext/CampaignObjectManager) | 🔗 |
| C | [CampaignOptions](/v1.3.15/zh/api/campaign-ext/CampaignOptions) | 🔗 |
| C | [CampaignPeriodicEventManager](/v1.3.15/zh/api/campaign-ext/CampaignPeriodicEventManager) | 🔗 |
| C | [CampaignTickCacheDataStore](/v1.3.15/zh/api/campaign-ext/CampaignTickCacheDataStore) | 🔗 |
| S | [CampaignTime](/v1.3.15/zh/api/campaign-ext/CampaignTime) | 🔗 |
| E | [CampaignTimeControlMode](/v1.3.15/zh/api/campaign-ext/CampaignTimeControlMode) | 🔗 |
| C | [CampaignTutorial](/v1.3.15/zh/api/campaign-ext/CampaignTutorial) | 🔗 |
| S | [CampaignVec2](/v1.3.15/zh/api/campaign-ext/CampaignVec2) | 🔗 |
| C | [CharacterData](/v1.3.15/zh/api/campaign-ext/CharacterData) | 🔗 |
| C | CharacterObject | — |
| C | [CharacterRelationManager](/v1.3.15/zh/api/campaign-ext/CharacterRelationManager) | 🔗 |
| E | [CharacterRestrictionFlags](/v1.3.15/zh/api/campaign-ext/CharacterRestrictionFlags) | 🔗 |
| E | [CharacterStates](/v1.3.15/zh/api/campaign-ext/CharacterStates) | 🔗 |
| C | Clan | — |
| C | [Concept](/v1.3.15/zh/api/campaign-ext/Concept) | 🔗 |
| E | [ConversationContext](/v1.3.15/zh/api/campaign-ext/ConversationContext) | 🔗 |
| S | [ConversationSceneData](/v1.3.15/zh/api/campaign-ext/ConversationSceneData) | 🔗 |
| C | [CultureObject](/v1.3.15/zh/api/campaign-ext/CultureObject) | 🔗 |
| C | [CultureTrait](/v1.3.15/zh/api/campaign-ext/CultureTrait) | 🔗 |
| C | [DefaultItems](/v1.3.15/zh/api/campaign-ext/DefaultItems) | 🔗 |
| C | [DefaultPolicies](/v1.3.15/zh/api/campaign-ext/DefaultPolicies) | 🔗 |
| C | [DefaultSkillEffects](/v1.3.15/zh/api/campaign-ext/DefaultSkillEffects) | 🔗 |
| C | [DialogFlow](/v1.3.15/zh/api/campaign-ext/DialogFlow) | 🔗 |
| E | [Difficulty](/v1.3.15/zh/api/campaign-ext/Difficulty) | 🔗 |
| C | [EncounterManager](/v1.3.15/zh/api/campaign-ext/EncounterManager) | 🔗 |
| S | [ExplainedNumber](/v1.3.15/zh/api/campaign-ext/ExplainedNumber) | 🔗 |
| C | [FactionManager](/v1.3.15/zh/api/campaign-ext/FactionManager) | 🔗 |
| E | [FinishStates](/v1.3.15/zh/api/campaign-ext/FinishStates) | 🔗 |
| E | [GameAccelerationMode](/v1.3.15/zh/api/campaign-ext/GameAccelerationMode) | 🔗 |
| E | [GameLoadingType](/v1.3.15/zh/api/campaign-ext/GameLoadingType) | 🔗 |
| C | [GameModels](/v1.3.15/zh/api/campaign-ext/GameModels) | 🔗 |
| C | [GameSceneDataManager](/v1.3.15/zh/api/campaign-ext/GameSceneDataManager) | 🔗 |
| C | [Hero](/v1.3.15/zh/api/campaign/Hero) | 🔗 |
| C | [HeroCreator](/v1.3.15/zh/api/campaign-ext/HeroCreator) | 🔗 |
| E | [HeroGetsBusyReasons](/v1.3.15/zh/api/campaign-ext/HeroGetsBusyReasons) | 🔗 |
| I | [IAgentBehaviorManager](/v1.3.15/zh/api/campaign-ext/IAgentBehaviorManager) | 🔗 |
| I | [ICampaignBehavior](/v1.3.15/zh/api/campaign-ext/ICampaignBehavior) | 🔗 |
| I | [ICampaignBehaviorManager](/v1.3.15/zh/api/campaign-ext/ICampaignBehaviorManager) | 🔗 |
| I | [ICampaignMission](/v1.3.15/zh/api/campaign-ext/ICampaignMission) | 🔗 |
| I | [ICampaignMissionManager](/v1.3.15/zh/api/campaign-ext/ICampaignMissionManager) | 🔗 |
| I | [IDataStore](/v1.3.15/zh/api/campaign-ext/IDataStore) | 🔗 |
| I | [IFaction](/v1.3.15/zh/api/campaign-ext/IFaction) | 🔗 |
| I | [IMainHeroVisualSupplier](/v1.3.15/zh/api/campaign-ext/IMainHeroVisualSupplier) | 🔗 |
| I | [IMapEventVisualCreator](/v1.3.15/zh/api/campaign-ext/IMapEventVisualCreator) | 🔗 |
| I | [IMbEvent](/v1.3.15/zh/api/campaign-ext/IMbEvent) | 🔗 |
| I | [IMbEventBase](/v1.3.15/zh/api/campaign-ext/IMbEventBase) | 🔗 |
| I | [INavigationElement](/v1.3.15/zh/api/campaign-ext/INavigationElement) | 🔗 |
| I | [INavigationHandler](/v1.3.15/zh/api/campaign-ext/INavigationHandler) | 🔗 |
| I | [IRandomOwner](/v1.3.15/zh/api/campaign-ext/IRandomOwner) | 🔗 |
| I | [ISandBoxMissionManager](/v1.3.15/zh/api/campaign-ext/ISandBoxMissionManager) | 🔗 |
| I | [ISaveManager](/v1.3.15/zh/api/campaign-ext/ISaveManager) | 🔗 |
| I | [ITrackableCampaignObject](/v1.3.15/zh/api/campaign-ext/ITrackableCampaignObject) | 🔗 |
| I | [IViewDataTracker](/v1.3.15/zh/api/campaign-ext/IViewDataTracker) | 🔗 |
| C | [JournalLog](/v1.3.15/zh/api/campaign-ext/JournalLog) | 🔗 |
| C | Kingdom | — |
| C | [KingdomManager](/v1.3.15/zh/api/campaign-ext/KingdomManager) | 🔗 |
| E | [LogType](/v1.3.15/zh/api/campaign-ext/LogType) | 🔗 |
| C | [ManagedParameters](/v1.3.15/zh/api/core-extra/ManagedParameters) | 🔗 |
| E | [ManagedParametersEnum](/v1.3.15/zh/api/core-extra/ManagedParametersEnum) | 🔗 |
| C | [MapNavigationExtensions](/v1.3.15/zh/api/campaign-ext/MapNavigationExtensions) | 🔗 |
| E | [MapNavigationItemType](/v1.3.15/zh/api/campaign-ext/MapNavigationItemType) | 🔗 |
| C | [MBCampaignEvent](/v1.3.15/zh/api/campaign-ext/MBCampaignEvent) | 🔗 |
| C | [MbEvent](/v1.3.15/zh/api/campaign-ext/MbEvent) | 🔗 |
| S | [MeetingSceneData](/v1.3.15/zh/api/campaign-ext/MeetingSceneData) | 🔗 |
| C | [NameGenerator](/v1.3.15/zh/api/campaign-ext/NameGenerator) | 🔗 |
| S | [NavigationPermissionItem](/v1.3.15/zh/api/campaign-ext/NavigationPermissionItem) | 🔗 |
| E | [NoticeType](/v1.3.15/zh/api/campaign-ext/NoticeType) | 🔗 |
| E | [Occupation](/v1.3.15/zh/api/campaign-ext/Occupation) | 🔗 |
| E | [OperationType](/v1.3.15/zh/api/campaign-ext/OperationType) | 🔗 |
| E | [PartyRestFlags](/v1.3.15/zh/api/campaign-ext/PartyRestFlags) | 🔗 |
| E | [PartyRole](/v1.3.15/zh/api/campaign-ext/PartyRole) | 🔗 |
| C | [PartyThinkParams](/v1.3.15/zh/api/campaign-ext/PartyThinkParams) | 🔗 |
| E | [PartyTypeEnum](/v1.3.15/zh/api/campaign-ext/PartyTypeEnum) | 🔗 |
| C | [PlayerCaptivity](/v1.3.15/zh/api/campaign-ext/PlayerCaptivity) | 🔗 |
| C | [PolicyObject](/v1.3.15/zh/api/campaign-ext/PolicyObject) | 🔗 |
| C | [PropertyObjectData](/v1.3.15/zh/api/campaign-ext/PropertyObjectData) | 🔗 |
| C | [QuestBase](/v1.3.15/zh/api/campaign-ext/QuestBase) | 🔗 |
| E | [QuestCompleteDetails](/v1.3.15/zh/api/campaign-ext/QuestCompleteDetails) | 🔗 |
| C | [QuestManager](/v1.3.15/zh/api/campaign-ext/QuestManager) | 🔗 |
| C | [QuestTaskBase](/v1.3.15/zh/api/campaign-ext/QuestTaskBase) | 🔗 |
| C | [RandomOwnerExtensions](/v1.3.15/zh/api/campaign-ext/RandomOwnerExtensions) | 🔗 |
| I | [ReferenceIMBEvent](/v1.3.15/zh/api/campaign-ext/ReferenceIMBEvent) | 🔗 |
| C | [ReferenceMBEvent](/v1.3.15/zh/api/campaign-ext/ReferenceMBEvent) | 🔗 |
| C | [Romance](/v1.3.15/zh/api/campaign-ext/Romance) | 🔗 |
| E | [RomanceLevelEnum](/v1.3.15/zh/api/campaign-ext/RomanceLevelEnum) | 🔗 |
| C | [RomanticState](/v1.3.15/zh/api/campaign-ext/RomanticState) | 🔗 |
| C | [SandBoxManager](/v1.3.15/zh/api/campaign-ext/SandBoxManager) | 🔗 |
| C | [SandBoxMission](/v1.3.15/zh/api/campaign-ext/SandBoxMission) | 🔗 |
| C | [SaveableCampaignTypeDefiner](/v1.3.15/zh/api/campaign-ext/SaveableCampaignTypeDefiner) | 🔗 |
| C | [SaveHandler](/v1.3.15/zh/api/campaign-ext/SaveHandler) | 🔗 |
| E | [SaveMode](/v1.3.15/zh/api/campaign-ext/SaveMode) | 🔗 |
| E | [Seasons](/v1.3.15/zh/api/campaign-ext/Seasons) | 🔗 |
| E | [SettlementBusynessPriority](/v1.3.15/zh/api/campaign-ext/SettlementBusynessPriority) | 🔗 |
| S | [SingleplayerBattleSceneData](/v1.3.15/zh/api/campaign-ext/SingleplayerBattleSceneData) | 🔗 |
| C | [SkillEffect](/v1.3.15/zh/api/campaign-ext/SkillEffect) | 🔗 |
| C | [SkillObjectData](/v1.3.15/zh/api/campaign-ext/SkillObjectData) | 🔗 |
| C | [StanceLink](/v1.3.15/zh/api/campaign-ext/StanceLink) | 🔗 |
| C | [Track](/v1.3.15/zh/api/campaign-ext/Track) | 🔗 |
| C | [TrackedObject](/v1.3.15/zh/api/campaign-ext/TrackedObject) | 🔗 |
| C | [TradeRumor](/v1.3.15/zh/api/campaign-ext/TradeRumor) | 🔗 |
| C | [TroopUpgradeTracker](/v1.3.15/zh/api/campaign-ext/TroopUpgradeTracker) | 🔗 |
| C | [VisualCreator](/v1.3.15/zh/api/campaign-ext/VisualCreator) | 🔗 |
| C | [VisualTrackerManager](/v1.3.15/zh/api/campaign-ext/VisualTrackerManager) | 🔗 |

## TaleWorlds.CampaignSystem.Actions (75)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AddCompanionAction](/v1.3.15/zh/api/campaign-ext/AddCompanionAction) | 🔗 |
| C | [AddHeroToPartyAction](/v1.3.15/zh/api/campaign-ext/AddHeroToPartyAction) | 🔗 |
| C | [AdoptHeroAction](/v1.3.15/zh/api/campaign-ext/AdoptHeroAction) | 🔗 |
| C | [ApplyHeirSelectionAction](/v1.3.15/zh/api/campaign-ext/ApplyHeirSelectionAction) | 🔗 |
| C | [BeHostileAction](/v1.3.15/zh/api/campaign-ext/BeHostileAction) | 🔗 |
| C | [BreakInOutBesiegedSettlementAction](/v1.3.15/zh/api/campaign-ext/BreakInOutBesiegedSettlementAction) | 🔗 |
| C | [BribeGuardsAction](/v1.3.15/zh/api/campaign-ext/BribeGuardsAction) | 🔗 |
| C | [ChangeClanInfluenceAction](/v1.3.15/zh/api/campaign-ext/ChangeClanInfluenceAction) | 🔗 |
| C | [ChangeClanLeaderAction](/v1.3.15/zh/api/campaign-ext/ChangeClanLeaderAction) | 🔗 |
| C | [ChangeCrimeRatingAction](/v1.3.15/zh/api/campaign-ext/ChangeCrimeRatingAction) | 🔗 |
| C | [ChangeGovernorAction](/v1.3.15/zh/api/campaign-ext/ChangeGovernorAction) | 🔗 |
| C | [ChangeKingdomAction](/v1.3.15/zh/api/campaign-ext/ChangeKingdomAction) | 🔗 |
| E | [ChangeKingdomActionDetail](/v1.3.15/zh/api/campaign-ext/ChangeKingdomActionDetail) | 🔗 |
| C | [ChangeOwnerOfSettlementAction](/v1.3.15/zh/api/campaign-ext/ChangeOwnerOfSettlementAction) | 🔗 |
| E | [ChangeOwnerOfSettlementDetail](/v1.3.15/zh/api/campaign-ext/ChangeOwnerOfSettlementDetail) | 🔗 |
| C | [ChangeOwnerOfWorkshopAction](/v1.3.15/zh/api/campaign-ext/ChangeOwnerOfWorkshopAction) | 🔗 |
| C | [ChangePlayerCharacterAction](/v1.3.15/zh/api/campaign-ext/ChangePlayerCharacterAction) | 🔗 |
| C | [ChangeProductionTypeOfWorkshopAction](/v1.3.15/zh/api/campaign-ext/ChangeProductionTypeOfWorkshopAction) | 🔗 |
| C | [ChangeRelationAction](/v1.3.15/zh/api/campaign-ext/ChangeRelationAction) | 🔗 |
| E | [ChangeRelationDetail](/v1.3.15/zh/api/campaign-ext/ChangeRelationDetail) | 🔗 |
| C | [ChangeRomanticStateAction](/v1.3.15/zh/api/campaign-ext/ChangeRomanticStateAction) | 🔗 |
| C | [ChangeRulingClanAction](/v1.3.15/zh/api/campaign-ext/ChangeRulingClanAction) | 🔗 |
| C | [ChangeShipOwnerAction](/v1.3.15/zh/api/campaign-ext/ChangeShipOwnerAction) | 🔗 |
| C | [ChangeVillageStateAction](/v1.3.15/zh/api/campaign-ext/ChangeVillageStateAction) | 🔗 |
| C | [ClaimSettlementAction](/v1.3.15/zh/api/campaign-ext/ClaimSettlementAction) | 🔗 |
| C | [DeclareWarAction](/v1.3.15/zh/api/campaign-ext/DeclareWarAction) | 🔗 |
| E | [DeclareWarDetail](/v1.3.15/zh/api/campaign-ext/DeclareWarDetail) | 🔗 |
| C | [DestroyClanAction](/v1.3.15/zh/api/campaign-ext/DestroyClanAction) | 🔗 |
| C | [DestroyKingdomAction](/v1.3.15/zh/api/campaign-ext/DestroyKingdomAction) | 🔗 |
| C | [DestroyPartyAction](/v1.3.15/zh/api/campaign-ext/DestroyPartyAction) | 🔗 |
| C | [DestroyShipAction](/v1.3.15/zh/api/campaign-ext/DestroyShipAction) | 🔗 |
| C | [DisableHeroAction](/v1.3.15/zh/api/campaign-ext/DisableHeroAction) | 🔗 |
| C | [DisbandArmyAction](/v1.3.15/zh/api/campaign-ext/DisbandArmyAction) | 🔗 |
| C | [DisbandPartyAction](/v1.3.15/zh/api/campaign-ext/DisbandPartyAction) | 🔗 |
| C | [EndCaptivityAction](/v1.3.15/zh/api/campaign-ext/EndCaptivityAction) | 🔗 |
| E | [EndCaptivityDetail](/v1.3.15/zh/api/campaign-ext/EndCaptivityDetail) | 🔗 |
| C | [EndMercenaryServiceAction](/v1.3.15/zh/api/campaign-ext/EndMercenaryServiceAction) | 🔗 |
| E | [EndMercenaryServiceActionDetails](/v1.3.15/zh/api/campaign-ext/EndMercenaryServiceActionDetails) | 🔗 |
| C | [EnterSettlementAction](/v1.3.15/zh/api/campaign-ext/EnterSettlementAction) | 🔗 |
| C | [GainKingdomInfluenceAction](/v1.3.15/zh/api/campaign-ext/GainKingdomInfluenceAction) | 🔗 |
| C | [GainRenownAction](/v1.3.15/zh/api/campaign-ext/GainRenownAction) | 🔗 |
| C | [GatherArmyAction](/v1.3.15/zh/api/campaign-ext/GatherArmyAction) | 🔗 |
| C | [GiveGoldAction](/v1.3.15/zh/api/campaign-ext/GiveGoldAction) | 🔗 |
| C | [GiveItemAction](/v1.3.15/zh/api/campaign-ext/GiveItemAction) | 🔗 |
| C | [IncreaseSettlementHealthAction](/v1.3.15/zh/api/campaign-ext/IncreaseSettlementHealthAction) | 🔗 |
| C | [InitializeWorkshopAction](/v1.3.15/zh/api/campaign-ext/InitializeWorkshopAction) | 🔗 |
| C | [KillCharacterAction](/v1.3.15/zh/api/campaign-ext/KillCharacterAction) | 🔗 |
| E | [KillCharacterActionDetail](/v1.3.15/zh/api/campaign-ext/KillCharacterActionDetail) | 🔗 |
| C | [LeaveSettlementAction](/v1.3.15/zh/api/campaign-ext/LeaveSettlementAction) | 🔗 |
| C | [LiftSiegeAction](/v1.3.15/zh/api/campaign-ext/LiftSiegeAction) | 🔗 |
| C | [MakeHeroFugitiveAction](/v1.3.15/zh/api/campaign-ext/MakeHeroFugitiveAction) | 🔗 |
| C | [MakePeaceAction](/v1.3.15/zh/api/campaign-ext/MakePeaceAction) | 🔗 |
| E | [MakePeaceDetail](/v1.3.15/zh/api/campaign-ext/MakePeaceDetail) | 🔗 |
| C | [MakePregnantAction](/v1.3.15/zh/api/campaign-ext/MakePregnantAction) | 🔗 |
| C | [MarriageAction](/v1.3.15/zh/api/campaign-ext/MarriageAction) | 🔗 |
| C | [PayForCrimeAction](/v1.3.15/zh/api/campaign-ext/PayForCrimeAction) | 🔗 |
| C | [RaftStateChangeAction](/v1.3.15/zh/api/campaign-ext/RaftStateChangeAction) | 🔗 |
| C | [RemoveCompanionAction](/v1.3.15/zh/api/campaign-ext/RemoveCompanionAction) | 🔗 |
| E | [RemoveCompanionDetail](/v1.3.15/zh/api/campaign-ext/RemoveCompanionDetail) | 🔗 |
| C | [RepairShipAction](/v1.3.15/zh/api/campaign-ext/RepairShipAction) | 🔗 |
| C | [SellGoodsForTradeAction](/v1.3.15/zh/api/campaign-ext/SellGoodsForTradeAction) | 🔗 |
| C | [SellItemsAction](/v1.3.15/zh/api/campaign-ext/SellItemsAction) | 🔗 |
| C | [SellPrisonersAction](/v1.3.15/zh/api/campaign-ext/SellPrisonersAction) | 🔗 |
| C | [SetPartyAiAction](/v1.3.15/zh/api/campaign-ext/SetPartyAiAction) | 🔗 |
| E | [ShipDestroyDetail](/v1.3.15/zh/api/campaign-ext/ShipDestroyDetail) | 🔗 |
| E | [ShipOwnerChangeDetail](/v1.3.15/zh/api/campaign-ext/ShipOwnerChangeDetail) | 🔗 |
| E | [SiegeAftermath](/v1.3.15/zh/api/campaign-ext/SiegeAftermath) | 🔗 |
| C | [SiegeAftermathAction](/v1.3.15/zh/api/campaign-ext/SiegeAftermathAction) | 🔗 |
| C | [StartBattleAction](/v1.3.15/zh/api/campaign-ext/StartBattleAction) | 🔗 |
| C | [StartMercenaryServiceAction](/v1.3.15/zh/api/campaign-ext/StartMercenaryServiceAction) | 🔗 |
| E | [StartMercenaryServiceActionDetails](/v1.3.15/zh/api/campaign-ext/StartMercenaryServiceActionDetails) | 🔗 |
| C | [TakePrisonerAction](/v1.3.15/zh/api/campaign-ext/TakePrisonerAction) | 🔗 |
| E | [TeleportationDetail](/v1.3.15/zh/api/campaign-ext/TeleportationDetail) | 🔗 |
| C | [TeleportHeroAction](/v1.3.15/zh/api/campaign-ext/TeleportHeroAction) | 🔗 |
| C | [TransferPrisonerAction](/v1.3.15/zh/api/campaign-ext/TransferPrisonerAction) | 🔗 |

## TaleWorlds.CampaignSystem.AgentOrigins (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyAgentOrigin](/v1.3.15/zh/api/campaign-ext/PartyAgentOrigin) | 🔗 |
| C | [PartyGroupAgentOrigin](/v1.3.15/zh/api/campaign-ext/PartyGroupAgentOrigin) | 🔗 |
| C | [SimpleAgentOrigin](/v1.3.15/zh/api/campaign-ext/SimpleAgentOrigin) | 🔗 |

## TaleWorlds.CampaignSystem.BarterSystem (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterData](/v1.3.15/zh/api/campaign-ext/BarterData) | 🔗 |
| C | [BarterGroup](/v1.3.15/zh/api/campaign-ext/BarterGroup) | 🔗 |
| C | [BarterManager](/v1.3.15/zh/api/campaign-ext/BarterManager) | 🔗 |
| C | [BarterResult](/v1.3.15/zh/api/campaign-ext/BarterResult) | 🔗 |
| C | [DefaultsBarterGroup](/v1.3.15/zh/api/campaign-ext/DefaultsBarterGroup) | 🔗 |
| C | [FiefBarterGroup](/v1.3.15/zh/api/campaign-ext/FiefBarterGroup) | 🔗 |
| C | [GoldBarterGroup](/v1.3.15/zh/api/campaign-ext/GoldBarterGroup) | 🔗 |
| C | [ItemBarterGroup](/v1.3.15/zh/api/campaign-ext/ItemBarterGroup) | 🔗 |
| C | [OtherBarterGroup](/v1.3.15/zh/api/campaign-ext/OtherBarterGroup) | 🔗 |
| C | [PrisonerBarterGroup](/v1.3.15/zh/api/campaign-ext/PrisonerBarterGroup) | 🔗 |

## TaleWorlds.CampaignSystem.BarterSystem.Barterables (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Barterable](/v1.3.15/zh/api/campaign-ext/Barterable) | 🔗 |
| E | [BarterSide](/v1.3.15/zh/api/campaign-ext/BarterSide) | 🔗 |
| C | [DeclareWarBarterable](/v1.3.15/zh/api/campaign-ext/DeclareWarBarterable) | 🔗 |
| C | [FiefBarterable](/v1.3.15/zh/api/campaign-ext/FiefBarterable) | 🔗 |
| C | [GoldBarterable](/v1.3.15/zh/api/campaign-ext/GoldBarterable) | 🔗 |
| C | [ItemBarterable](/v1.3.15/zh/api/campaign-ext/ItemBarterable) | 🔗 |
| C | [JoinKingdomAsClanBarterable](/v1.3.15/zh/api/campaign-ext/JoinKingdomAsClanBarterable) | 🔗 |
| C | [LeaveKingdomAsClanBarterable](/v1.3.15/zh/api/campaign-ext/LeaveKingdomAsClanBarterable) | 🔗 |
| C | [MarriageBarterable](/v1.3.15/zh/api/campaign-ext/MarriageBarterable) | 🔗 |
| C | [MercenaryJoinKingdomBarterable](/v1.3.15/zh/api/campaign-ext/MercenaryJoinKingdomBarterable) | 🔗 |
| C | [NoAttackBarterable](/v1.3.15/zh/api/campaign-ext/NoAttackBarterable) | 🔗 |
| C | [PeaceBarterable](/v1.3.15/zh/api/campaign-ext/PeaceBarterable) | 🔗 |
| C | [SafePassageBarterable](/v1.3.15/zh/api/campaign-ext/SafePassageBarterable) | 🔗 |
| C | [SetPrisonerFreeBarterable](/v1.3.15/zh/api/campaign-ext/SetPrisonerFreeBarterable) | 🔗 |
| C | [TransferPrisonerBarterable](/v1.3.15/zh/api/campaign-ext/TransferPrisonerBarterable) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors (159)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgingCampaignBehavior](/v1.3.15/zh/api/campaign-ext/AgingCampaignBehavior) | 🔗 |
| C | [AllianceCampaignBehavior](/v1.3.15/zh/api/campaign-ext/AllianceCampaignBehavior) | 🔗 |
| C | [AllianceCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/AllianceCampaignBehaviorTypeDefiner) | 🔗 |
| C | [BackstoryCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BackstoryCampaignBehavior) | 🔗 |
| C | [BanditInteractionsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BanditInteractionsCampaignBehavior) | 🔗 |
| C | [BanditInteractionsCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/BanditInteractionsCampaignBehaviorTypeDefiner) | 🔗 |
| C | [BanditSpawnCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BanditSpawnCampaignBehavior) | 🔗 |
| C | [BannerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BannerCampaignBehavior) | 🔗 |
| C | [BattleCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BattleCampaignBehavior) | 🔗 |
| C | [BuildingsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BuildingsCampaignBehavior) | 🔗 |
| C | [CampaignBattleRecoveryBehavior](/v1.3.15/zh/api/campaign-ext/CampaignBattleRecoveryBehavior) | 🔗 |
| C | [CampaignBehaviorManager](/v1.3.15/zh/api/campaign-ext/CampaignBehaviorManager) | 🔗 |
| C | [CampaignFactionManagerBehaviour](/v1.3.15/zh/api/campaign-ext/CampaignFactionManagerBehaviour) | 🔗 |
| C | [CampaignWarManagerBehavior](/v1.3.15/zh/api/campaign-ext/CampaignWarManagerBehavior) | 🔗 |
| C | [CaravanConversationsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CaravanConversationsCampaignBehavior) | 🔗 |
| C | [CaravansCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CaravansCampaignBehavior) | 🔗 |
| C | [CaravansCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/CaravansCampaignBehaviorTypeDefiner) | 🔗 |
| C | [CharacterCreationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CharacterCreationCampaignBehavior) | 🔗 |
| C | [CharacterDevelopmentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CharacterDevelopmentCampaignBehavior) | 🔗 |
| C | [CharacterRelationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CharacterRelationCampaignBehavior) | 🔗 |
| C | [ClanVariablesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ClanVariablesCampaignBehavior) | 🔗 |
| C | [CompanionGrievanceBehavior](/v1.3.15/zh/api/campaign-ext/CompanionGrievanceBehavior) | 🔗 |
| C | [CompanionGrievanceBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/CompanionGrievanceBehaviorTypeDefiner) | 🔗 |
| C | [CompanionRolesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CompanionRolesCampaignBehavior) | 🔗 |
| C | [CompanionsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CompanionsCampaignBehavior) | 🔗 |
| C | [CraftingCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CraftingCampaignBehavior) | 🔗 |
| C | [CraftingCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/CraftingCampaignBehaviorTypeDefiner) | 🔗 |
| C | [CraftingOrderSlots](/v1.3.15/zh/api/campaign-ext/CraftingOrderSlots) | 🔗 |
| C | [CrimeCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CrimeCampaignBehavior) | 🔗 |
| C | [DefaultLogsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DefaultLogsCampaignBehavior) | 🔗 |
| C | [DesertersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DesertersCampaignBehavior) | 🔗 |
| C | [DesertionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DesertionCampaignBehavior) | 🔗 |
| C | [DisbandPartyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DisbandPartyCampaignBehavior) | 🔗 |
| C | [DiscardItemsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DiscardItemsCampaignBehavior) | 🔗 |
| C | [DynamicBodyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DynamicBodyCampaignBehavior) | 🔗 |
| C | [EducationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/EducationCampaignBehavior) | 🔗 |
| S | [EducationCharacterProperties](/v1.3.15/zh/api/campaign-ext/EducationCharacterProperties) | 🔗 |
| C | [EmissarySystemCampaignBehavior](/v1.3.15/zh/api/campaign-ext/EmissarySystemCampaignBehavior) | 🔗 |
| C | [EncounterGameMenuBehavior](/v1.3.15/zh/api/campaign-ext/EncounterGameMenuBehavior) | 🔗 |
| C | [FactionDiscontinuationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/FactionDiscontinuationCampaignBehavior) | 🔗 |
| C | [FindingItemOnMapBehavior](/v1.3.15/zh/api/campaign-ext/FindingItemOnMapBehavior) | 🔗 |
| C | [FoodConsumptionBehavior](/v1.3.15/zh/api/campaign-ext/FoodConsumptionBehavior) | 🔗 |
| C | [GarrisonRecruitmentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/GarrisonRecruitmentCampaignBehavior) | 🔗 |
| C | [GarrisonTroopsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/GarrisonTroopsCampaignBehavior) | 🔗 |
| C | [GovernorCampaignBehavior](/v1.3.15/zh/api/campaign-ext/GovernorCampaignBehavior) | 🔗 |
| C | [HeroAgentSpawnCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HeroAgentSpawnCampaignBehavior) | 🔗 |
| C | [HeroKnownInformationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HeroKnownInformationCampaignBehavior) | 🔗 |
| C | [HeroSpawnCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HeroSpawnCampaignBehavior) | 🔗 |
| C | [HideoutCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HideoutCampaignBehavior) | 🔗 |
| I | [IAlleyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IAlleyCampaignBehavior) | 🔗 |
| I | [IAllianceCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IAllianceCampaignBehavior) | 🔗 |
| I | [ICaptivityCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ICaptivityCampaignBehavior) | 🔗 |
| I | [ICraftingCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ICraftingCampaignBehavior) | 🔗 |
| I | [IDisbandPartyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IDisbandPartyCampaignBehavior) | 🔗 |
| I | [IEducationLogic](/v1.3.15/zh/api/campaign-ext/IEducationLogic) | 🔗 |
| I | [IFacegenCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IFacegenCampaignBehavior) | 🔗 |
| I | [IGarrisonRecruitmentBehavior](/v1.3.15/zh/api/campaign-ext/IGarrisonRecruitmentBehavior) | 🔗 |
| I | [IHideoutCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IHideoutCampaignBehavior) | 🔗 |
| I | [IMapTracksCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IMapTracksCampaignBehavior) | 🔗 |
| I | [IMarriageOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IMarriageOfferCampaignBehavior) | 🔗 |
| C | [IncidentsCampaignBehaviour](/v1.3.15/zh/api/campaign-ext/IncidentsCampaignBehaviour) | 🔗 |
| E | [IncidentTrigger](/v1.3.15/zh/api/campaign-ext/IncidentTrigger) | 🔗 |
| E | [IncidentType](/v1.3.15/zh/api/campaign-ext/IncidentType) | 🔗 |
| C | [InfluenceGainCampaignBehavior](/v1.3.15/zh/api/campaign-ext/InfluenceGainCampaignBehavior) | 🔗 |
| C | [InitialChildGenerationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/InitialChildGenerationCampaignBehavior) | 🔗 |
| I | [INonReadyObjectHandler](/v1.3.15/zh/api/campaign-ext/INonReadyObjectHandler) | 🔗 |
| I | [IParleyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IParleyCampaignBehavior) | 🔗 |
| I | [IPatrolPartiesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IPatrolPartiesCampaignBehavior) | 🔗 |
| I | [IRetrainOutlawPartyMembersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IRetrainOutlawPartyMembersCampaignBehavior) | 🔗 |
| C | [IssuesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IssuesCampaignBehavior) | 🔗 |
| I | [IStatisticsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IStatisticsCampaignBehavior) | 🔗 |
| I | [ITeleportationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ITeleportationCampaignBehavior) | 🔗 |
| C | [ItemConsumptionBehavior](/v1.3.15/zh/api/campaign-ext/ItemConsumptionBehavior) | 🔗 |
| I | [ITradeAgreementsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ITradeAgreementsCampaignBehavior) | 🔗 |
| I | [ITradeRumorCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ITradeRumorCampaignBehavior) | 🔗 |
| I | [IVassalAndMercenaryOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IVassalAndMercenaryOfferCampaignBehavior) | 🔗 |
| I | [IWorkshopWarehouseCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IWorkshopWarehouseCampaignBehavior) | 🔗 |
| C | [JournalLogsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/JournalLogsCampaignBehavior) | 🔗 |
| C | [KingdomDecisionProposalBehavior](/v1.3.15/zh/api/campaign-ext/KingdomDecisionProposalBehavior) | 🔗 |
| C | [LordConversationsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/LordConversationsCampaignBehavior) | 🔗 |
| C | [LordDefectionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/LordDefectionCampaignBehavior) | 🔗 |
| C | [LordDefectionCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordDefectionCampaignBehaviorTypeDefiner) | 🔗 |
| C | [MapTracksCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MapTracksCampaignBehavior) | 🔗 |
| C | [MapWeatherCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MapWeatherCampaignBehavior) | 🔗 |
| C | [MarriageOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MarriageOfferCampaignBehavior) | 🔗 |
| C | [MilitiasCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MilitiasCampaignBehavior) | 🔗 |
| C | [MobilePartyTrainingBehavior](/v1.3.15/zh/api/campaign-ext/MobilePartyTrainingBehavior) | 🔗 |
| C | [NotableHelperCharacterCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NotableHelperCharacterCampaignBehavior) | 🔗 |
| C | [NotablePowerManagementBehavior](/v1.3.15/zh/api/campaign-ext/NotablePowerManagementBehavior) | 🔗 |
| C | [NotablesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NotablesCampaignBehavior) | 🔗 |
| C | [NotableSupportersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NotableSupportersCampaignBehavior) | 🔗 |
| C | [NPCEquipmentsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NPCEquipmentsCampaignBehavior) | 🔗 |
| C | [Number](/v1.3.15/zh/api/campaign-ext/Number) | 🔗 |
| C | [OrderOfBattleCampaignBehavior](/v1.3.15/zh/api/campaign-ext/OrderOfBattleCampaignBehavior) | 🔗 |
| C | [OrderOfBattleFormationData](/v1.3.15/zh/api/campaign-ext/OrderOfBattleFormationData) | 🔗 |
| C | [ParleyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ParleyCampaignBehavior) | 🔗 |
| C | [PartiesBuyFoodCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesBuyFoodCampaignBehavior) | 🔗 |
| C | [PartiesBuyHorseCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesBuyHorseCampaignBehavior) | 🔗 |
| C | [PartiesSellLootCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesSellLootCampaignBehavior) | 🔗 |
| C | [PartiesSellPrisonerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesSellPrisonerCampaignBehavior) | 🔗 |
| C | [PartyDiplomaticHandlerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyDiplomaticHandlerCampaignBehavior) | 🔗 |
| C | [PartyHealCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyHealCampaignBehavior) | 🔗 |
| C | [PartyRolesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyRolesCampaignBehavior) | 🔗 |
| C | [PartyUpgraderCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyUpgraderCampaignBehavior) | 🔗 |
| C | [PatrolPartiesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PatrolPartiesCampaignBehavior) | 🔗 |
| C | [PeaceOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PeaceOfferCampaignBehavior) | 🔗 |
| C | [PerkActivationHandlerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PerkActivationHandlerCampaignBehavior) | 🔗 |
| C | [PerkResetCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PerkResetCampaignBehavior) | 🔗 |
| C | [PlayerArmyWaitBehavior](/v1.3.15/zh/api/campaign-ext/PlayerArmyWaitBehavior) | 🔗 |
| C | [PlayerCaptivityCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PlayerCaptivityCampaignBehavior) | 🔗 |
| C | [PlayerTownVisitCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PlayerTownVisitCampaignBehavior) | 🔗 |
| C | [PlayerTrackCompanionBehavior](/v1.3.15/zh/api/campaign-ext/PlayerTrackCompanionBehavior) | 🔗 |
| C | [PlayerVariablesBehavior](/v1.3.15/zh/api/campaign-ext/PlayerVariablesBehavior) | 🔗 |
| C | [PoliticalStagnationAndBorderIncidentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PoliticalStagnationAndBorderIncidentCampaignBehavior) | 🔗 |
| C | [PregnancyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PregnancyCampaignBehavior) | 🔗 |
| C | [PregnancyCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/PregnancyCampaignBehaviorTypeDefiner) | 🔗 |
| C | [PrisonerCaptureCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PrisonerCaptureCampaignBehavior) | 🔗 |
| C | [PrisonerRecruitCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PrisonerRecruitCampaignBehavior) | 🔗 |
| C | [PrisonerReleaseCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PrisonerReleaseCampaignBehavior) | 🔗 |
| C | [RansomOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RansomOfferCampaignBehavior) | 🔗 |
| C | [RebellionsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RebellionsCampaignBehavior) | 🔗 |
| E | [RecruitingDetail](/v1.3.15/zh/api/campaign-ext/RecruitingDetail) | 🔗 |
| C | [RecruitmentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RecruitmentCampaignBehavior) | 🔗 |
| C | [RecruitmentCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/RecruitmentCampaignBehaviorTypeDefiner) | 🔗 |
| C | [RecruitPrisonersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RecruitPrisonersCampaignBehavior) | 🔗 |
| C | [RetrainOutlawPartyMembersBehavior](/v1.3.15/zh/api/campaign-ext/RetrainOutlawPartyMembersBehavior) | 🔗 |
| C | [RomanceCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RomanceCampaignBehavior) | 🔗 |
| E | [RomanticPreference](/v1.3.15/zh/api/campaign-ext/RomanticPreference) | 🔗 |
| C | [SallyOutsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SallyOutsCampaignBehavior) | 🔗 |
| C | [SettlementClaimantCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SettlementClaimantCampaignBehavior) | 🔗 |
| C | [SettlementVariablesBehavior](/v1.3.15/zh/api/campaign-ext/SettlementVariablesBehavior) | 🔗 |
| C | [SiegeAftermathCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SiegeAftermathCampaignBehavior) | 🔗 |
| C | [SiegeAmbushCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SiegeAmbushCampaignBehavior) | 🔗 |
| C | [SiegeEventCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SiegeEventCampaignBehavior) | 🔗 |
| C | [TeleportationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TeleportationCampaignBehavior) | 🔗 |
| C | [TeleportationCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/TeleportationCampaignBehaviorTypeDefiner) | 🔗 |
| C | [TownMercenaryData](/v1.3.15/zh/api/campaign-ext/TownMercenaryData) | 🔗 |
| C | [TownSecurityCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TownSecurityCampaignBehavior) | 🔗 |
| S | [TradeAgreement](./campaign-ext/TradeAgreement) | 🔗 |
| C | [TradeAgreementsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeAgreementsCampaignBehavior) | 🔗 |
| C | [TradeAgreementsCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/TradeAgreementsCampaignBehaviorTypeDefiner) | 🔗 |
| C | [TradeCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeCampaignBehavior) | 🔗 |
| E | [TradeGoodType](/v1.3.15/zh/api/campaign-ext/TradeGoodType) | 🔗 |
| C | [TradeRumorsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeRumorsCampaignBehavior) | 🔗 |
| C | [TradeSkillCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeSkillCampaignBehavior) | 🔗 |
| C | [TradeSkillCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/TradeSkillCampaignBehaviorTypeDefiner) | 🔗 |
| C | [TributesCampaignBehaviour](/v1.3.15/zh/api/campaign-ext/TributesCampaignBehaviour) | 🔗 |
| C | [VassalAndMercenaryOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VassalAndMercenaryOfferCampaignBehavior) | 🔗 |
| C | [ViewDataTrackerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ViewDataTrackerCampaignBehavior) | 🔗 |
| C | [VillageGoodProductionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageGoodProductionCampaignBehavior) | 🔗 |
| C | [VillageHealCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageHealCampaignBehavior) | 🔗 |
| C | [VillageHostileActionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageHostileActionCampaignBehavior) | 🔗 |
| C | [VillagerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillagerCampaignBehavior) | 🔗 |
| C | [VillagerCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/VillagerCampaignBehaviorTypeDefiner) | 🔗 |
| C | [VillageTradeBoundCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageTradeBoundCampaignBehavior) | 🔗 |
| S | [VolunteerTroop](/v1.3.15/zh/api/campaign-ext/VolunteerTroop) | 🔗 |
| C | [WorkshopsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/WorkshopsCampaignBehavior) | 🔗 |
| C | [WorkshopsCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/WorkshopsCampaignBehaviorTypeDefiner) | 🔗 |
| C | [WorkshopsCharactersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/WorkshopsCharactersCampaignBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AiArmyMemberBehavior](/v1.3.15/zh/api/campaign-ext/AiArmyMemberBehavior) | 🔗 |
| C | [AiEngagePartyBehavior](/v1.3.15/zh/api/campaign-ext/AiEngagePartyBehavior) | 🔗 |
| C | [AiLandBanditPatrollingBehavior](/v1.3.15/zh/api/campaign-ext/AiLandBanditPatrollingBehavior) | 🔗 |
| C | [AiMilitaryBehavior](/v1.3.15/zh/api/campaign-ext/AiMilitaryBehavior) | 🔗 |
| C | [AiPartyThinkBehavior](/v1.3.15/zh/api/campaign-ext/AiPartyThinkBehavior) | 🔗 |
| C | [AiPatrollingBehavior](/v1.3.15/zh/api/campaign-ext/AiPatrollingBehavior) | 🔗 |
| C | [AiVisitSettlementBehavior](/v1.3.15/zh/api/campaign-ext/AiVisitSettlementBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DiplomaticBartersBehavior](/v1.3.15/zh/api/campaign-ext/DiplomaticBartersBehavior) | 🔗 |
| C | [FiefBarterBehavior](/v1.3.15/zh/api/campaign-ext/FiefBarterBehavior) | 🔗 |
| C | [GoldBarterBehavior](/v1.3.15/zh/api/campaign-ext/GoldBarterBehavior) | 🔗 |
| C | [ItemBarterBehavior](/v1.3.15/zh/api/campaign-ext/ItemBarterBehavior) | 🔗 |
| C | [LiftSiegeBarterBehavior](/v1.3.15/zh/api/campaign-ext/LiftSiegeBarterBehavior) | 🔗 |
| C | [SetPrisonerFreeBarterBehavior](/v1.3.15/zh/api/campaign-ext/SetPrisonerFreeBarterBehavior) | 🔗 |
| C | [TransferPrisonerBarterBehavior](/v1.3.15/zh/api/campaign-ext/TransferPrisonerBarterBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CommentCharacterBornBehavior](/v1.3.15/zh/api/campaign-ext/CommentCharacterBornBehavior) | 🔗 |
| C | [CommentChildbirthBehavior](/v1.3.15/zh/api/campaign-ext/CommentChildbirthBehavior) | 🔗 |
| C | [CommentOnChangeRomanticStateBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnChangeRomanticStateBehavior) | 🔗 |
| C | [CommentOnChangeSettlementOwnerBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnChangeSettlementOwnerBehavior) | 🔗 |
| C | [CommentOnChangeVillageStateBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnChangeVillageStateBehavior) | 🔗 |
| C | [CommentOnCharacterKilledBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnCharacterKilledBehavior) | 🔗 |
| C | [CommentOnClanDestroyedBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnClanDestroyedBehavior) | 🔗 |
| C | [CommentOnClanLeaderChangedBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnClanLeaderChangedBehavior) | 🔗 |
| C | [CommentOnDeclareWarBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnDeclareWarBehavior) | 🔗 |
| C | [CommentOnDefeatCharacterBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnDefeatCharacterBehavior) | 🔗 |
| C | [CommentOnDestroyMobilePartyBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnDestroyMobilePartyBehavior) | 🔗 |
| C | [CommentOnEndPlayerBattleBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnEndPlayerBattleBehavior) | 🔗 |
| C | [CommentOnKingdomDestroyedBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnKingdomDestroyedBehavior) | 🔗 |
| C | [CommentOnLeaveFactionBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnLeaveFactionBehavior) | 🔗 |
| C | [CommentOnMakePeaceBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnMakePeaceBehavior) | 🔗 |
| C | [CommentOnPlayerMeetLordBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnPlayerMeetLordBehavior) | 🔗 |
| C | [CommentPregnancyBehavior](/v1.3.15/zh/api/campaign-ext/CommentPregnancyBehavior) | 🔗 |

## TaleWorlds.CampaignSystem.CharacterCreationContent (18)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationBannerEditorStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationBannerEditorStage) | 🔗 |
| C | [CharacterCreationClanNamingStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationClanNamingStage) | 🔗 |
| C | [CharacterCreationContent](/v1.3.15/zh/api/campaign-ext/CharacterCreationContent) | 🔗 |
| C | [CharacterCreationCultureStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureStage) | 🔗 |
| C | [CharacterCreationFaceGeneratorStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationFaceGeneratorStage) | 🔗 |
| C | [CharacterCreationManager](/v1.3.15/zh/api/campaign-ext/CharacterCreationManager) | 🔗 |
| C | [CharacterCreationNarrativeStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationNarrativeStage) | 🔗 |
| C | [CharacterCreationOptionsStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationOptionsStage) | 🔗 |
| C | [CharacterCreationReviewStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationReviewStage) | 🔗 |
| C | [CharacterCreationStageBase](/v1.3.15/zh/api/campaign-ext/CharacterCreationStageBase) | 🔗 |
| C | [CharacterCreationState](/v1.3.15/zh/api/campaign-ext/CharacterCreationState) | 🔗 |
| I | [ICharacterCreationContentHandler](/v1.3.15/zh/api/campaign-ext/ICharacterCreationContentHandler) | 🔗 |
| I | [ICharacterCreationStageListener](/v1.3.15/zh/api/campaign-ext/ICharacterCreationStageListener) | 🔗 |
| I | [ICharacterCreationStateHandler](/v1.3.15/zh/api/campaign-ext/ICharacterCreationStateHandler) | 🔗 |
| C | [NarrativeMenu](/v1.3.15/zh/api/campaign-ext/NarrativeMenu) | 🔗 |
| C | [NarrativeMenuCharacter](/v1.3.15/zh/api/campaign-ext/NarrativeMenuCharacter) | 🔗 |
| C | [NarrativeMenuOption](/v1.3.15/zh/api/campaign-ext/NarrativeMenuOption) | 🔗 |
| C | [NarrativeMenuOptionArgs](/v1.3.15/zh/api/campaign-ext/NarrativeMenuOptionArgs) | 🔗 |

## TaleWorlds.CampaignSystem.CharacterDevelopment (30)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AdditionType](/v1.3.15/zh/api/campaign-ext/AdditionType) | 🔗 |
| C | [Athletics](/v1.3.15/zh/api/campaign-ext/Athletics) | 🔗 |
| C | [Bow](/v1.3.15/zh/api/campaign-ext/Bow) | 🔗 |
| C | [Charm](/v1.3.15/zh/api/campaign-ext/Charm) | 🔗 |
| C | [Crafting](/v1.3.15/zh/api/campaign-ext/Crafting) | 🔗 |
| C | [Crossbow](/v1.3.15/zh/api/campaign-ext/Crossbow) | 🔗 |
| C | [DefaultCulturalFeats](/v1.3.15/zh/api/campaign-ext/DefaultCulturalFeats) | 🔗 |
| C | [DefaultPerks](/v1.3.15/zh/api/campaign-ext/DefaultPerks) | 🔗 |
| C | [DefaultSkillLevelingManager](/v1.3.15/zh/api/campaign-ext/DefaultSkillLevelingManager) | 🔗 |
| C | [DefaultTraits](/v1.3.15/zh/api/campaign-ext/DefaultTraits) | 🔗 |
| C | [Engineering](/v1.3.15/zh/api/campaign-ext/Engineering) | 🔗 |
| C | [FeatObject](/v1.3.15/zh/api/campaign-ext/FeatObject) | 🔗 |
| C | [HeroDeveloper](/v1.3.15/zh/api/campaign-ext/HeroDeveloper) | 🔗 |
| I | [ISkillLevelingManager](/v1.3.15/zh/api/campaign-ext/ISkillLevelingManager) | 🔗 |
| C | [Leadership](/v1.3.15/zh/api/campaign-ext/Leadership) | 🔗 |
| C | [Medicine](/v1.3.15/zh/api/campaign-ext/Medicine) | 🔗 |
| C | [OneHanded](/v1.3.15/zh/api/campaign-ext/OneHanded) | 🔗 |
| C | [PerkObject](/v1.3.15/zh/api/campaign-ext/PerkObject) | 🔗 |
| C | [Polearm](/v1.3.15/zh/api/campaign-ext/Polearm) | 🔗 |
| C | [Riding](/v1.3.15/zh/api/campaign-ext/Riding) | 🔗 |
| C | [Roguery](/v1.3.15/zh/api/campaign-ext/Roguery) | 🔗 |
| C | [Scouting](/v1.3.15/zh/api/campaign-ext/Scouting) | 🔗 |
| C | [SkillLevelingManager](/v1.3.15/zh/api/campaign-ext/SkillLevelingManager) | 🔗 |
| C | [Steward](/v1.3.15/zh/api/campaign-ext/Steward) | 🔗 |
| C | [Tactics](/v1.3.15/zh/api/campaign-ext/Tactics) | 🔗 |
| C | [Throwing](/v1.3.15/zh/api/campaign-ext/Throwing) | 🔗 |
| C | [Trade](/v1.3.15/zh/api/campaign-ext/Trade) | 🔗 |
| C | [TraitLevelingHelper](/v1.3.15/zh/api/campaign-ext/TraitLevelingHelper) | 🔗 |
| C | [TraitObject](/v1.3.15/zh/api/campaign-ext/TraitObject) | 🔗 |
| C | [TwoHanded](/v1.3.15/zh/api/campaign-ext/TwoHanded) | 🔗 |

## TaleWorlds.CampaignSystem.ComponentInterfaces (142)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [AccessDetails](/v1.3.15/zh/api/campaign-ext/AccessDetails) | 🔗 |
| E | [AccessLevel](/v1.3.15/zh/api/campaign-ext/AccessLevel) | 🔗 |
| E | [AccessLimitationReason](/v1.3.15/zh/api/campaign-ext/AccessLimitationReason) | 🔗 |
| E | [AccessMethod](/v1.3.15/zh/api/campaign-ext/AccessMethod) | 🔗 |
| C | [AgeModel](/v1.3.15/zh/api/campaign-ext/AgeModel) | 🔗 |
| C | [AlleyModel](/v1.3.15/zh/api/campaign-ext/AlleyModel) | 🔗 |
| C | [AllianceModel](/v1.3.15/zh/api/campaign-ext/AllianceModel) | 🔗 |
| C | [ArmyManagementCalculationModel](/v1.3.15/zh/api/campaign-ext/ArmyManagementCalculationModel) | 🔗 |
| C | [BanditDensityModel](/v1.3.15/zh/api/campaign-ext/BanditDensityModel) | 🔗 |
| C | [BannerItemModel](/v1.3.15/zh/api/campaign-ext/BannerItemModel) | 🔗 |
| C | [BarterModel](/v1.3.15/zh/api/campaign-ext/BarterModel) | 🔗 |
| C | [BattleCaptainModel](/v1.3.15/zh/api/campaign-ext/BattleCaptainModel) | 🔗 |
| C | [BattleRewardModel](/v1.3.15/zh/api/campaign-ext/BattleRewardModel) | 🔗 |
| C | [BodyPropertiesModel](/v1.3.15/zh/api/campaign-ext/BodyPropertiesModel) | 🔗 |
| C | [BribeCalculationModel](/v1.3.15/zh/api/campaign-ext/BribeCalculationModel) | 🔗 |
| C | [BuildingConstructionModel](/v1.3.15/zh/api/campaign-ext/BuildingConstructionModel) | 🔗 |
| C | [BuildingEffectModel](/v1.3.15/zh/api/campaign-ext/BuildingEffectModel) | 🔗 |
| C | [BuildingModel](/v1.3.15/zh/api/campaign-ext/BuildingModel) | 🔗 |
| C | [BuildingScoreCalculationModel](/v1.3.15/zh/api/campaign-ext/BuildingScoreCalculationModel) | 🔗 |
| C | [CampaignShipDamageModel](/v1.3.15/zh/api/campaign-ext/CampaignShipDamageModel) | 🔗 |
| C | [CampaignShipParametersModel](/v1.3.15/zh/api/campaign-ext/CampaignShipParametersModel) | 🔗 |
| C | [CampaignTimeModel](/v1.3.15/zh/api/campaign-ext/CampaignTimeModel) | 🔗 |
| C | [CaravanModel](/v1.3.15/zh/api/campaign-ext/CaravanModel) | 🔗 |
| C | [CharacterDevelopmentModel](/v1.3.15/zh/api/campaign-ext/CharacterDevelopmentModel) | 🔗 |
| C | [CharacterStatsModel](/v1.3.15/zh/api/campaign-ext/CharacterStatsModel) | 🔗 |
| C | [ClanFinanceModel](/v1.3.15/zh/api/campaign-ext/ClanFinanceModel) | 🔗 |
| C | [ClanMemberPartyRoleModel](./campaign-ext/ClanMemberPartyRoleModel) | 🔗 |
| C | [ClanPoliticsModel](/v1.3.15/zh/api/campaign-ext/ClanPoliticsModel) | 🔗 |
| C | [ClanTierModel](/v1.3.15/zh/api/campaign-ext/ClanTierModel) | 🔗 |
| C | [CombatSimulationModel](/v1.3.15/zh/api/campaign-ext/CombatSimulationModel) | 🔗 |
| C | [CombatXpModel](/v1.3.15/zh/api/campaign-ext/CombatXpModel) | 🔗 |
| C | [CompanionHiringPriceCalculationModel](/v1.3.15/zh/api/campaign-ext/CompanionHiringPriceCalculationModel) | 🔗 |
| C | [CrimeModel](/v1.3.15/zh/api/campaign-ext/CrimeModel) | 🔗 |
| C | [CutsceneSelectionModel](/v1.3.15/zh/api/campaign-ext/CutsceneSelectionModel) | 🔗 |
| C | [DailyTroopXpBonusModel](/v1.3.15/zh/api/campaign-ext/DailyTroopXpBonusModel) | 🔗 |
| C | [DefectionModel](/v1.3.15/zh/api/campaign-ext/DefectionModel) | 🔗 |
| C | [DelayedTeleportationModel](/v1.3.15/zh/api/campaign-ext/DelayedTeleportationModel) | 🔗 |
| C | [DifficultyModel](/v1.3.15/zh/api/campaign-ext/DifficultyModel) | 🔗 |
| C | [DiplomacyModel](/v1.3.15/zh/api/campaign-ext/DiplomacyModel) | 🔗 |
| E | [DiplomacyStance](/v1.3.15/zh/api/campaign-ext/DiplomacyStance) | 🔗 |
| C | [DisguiseDetectionModel](/v1.3.15/zh/api/campaign-ext/DisguiseDetectionModel) | 🔗 |
| C | [EmissaryModel](/v1.3.15/zh/api/campaign-ext/EmissaryModel) | 🔗 |
| C | [EncounterGameMenuModel](/v1.3.15/zh/api/campaign-ext/EncounterGameMenuModel) | 🔗 |
| C | [EncounterModel](/v1.3.15/zh/api/campaign-ext/EncounterModel) | 🔗 |
| C | [EquipmentSelectionModel](/v1.3.15/zh/api/campaign-ext/EquipmentSelectionModel) | 🔗 |
| C | [ExecutionRelationModel](/v1.3.15/zh/api/campaign-ext/ExecutionRelationModel) | 🔗 |
| C | [FleetManagementModel](/v1.3.15/zh/api/campaign-ext/FleetManagementModel) | 🔗 |
| C | [GenericXpModel](/v1.3.15/zh/api/campaign-ext/GenericXpModel) | 🔗 |
| C | [HeirSelectionCalculationModel](/v1.3.15/zh/api/campaign-ext/HeirSelectionCalculationModel) | 🔗 |
| C | [HeroAgentLocationModel](/v1.3.15/zh/api/campaign-ext/HeroAgentLocationModel) | 🔗 |
| C | [HeroCreationModel](/v1.3.15/zh/api/campaign-ext/HeroCreationModel) | 🔗 |
| C | [HeroDeathProbabilityCalculationModel](/v1.3.15/zh/api/campaign-ext/HeroDeathProbabilityCalculationModel) | 🔗 |
| E | [HeroLocationDetail](/v1.3.15/zh/api/campaign-ext/HeroLocationDetail) | 🔗 |
| C | [HideoutModel](/v1.3.15/zh/api/campaign-ext/HideoutModel) | 🔗 |
| I | [INavigationCache](/v1.3.15/zh/api/campaign-ext/INavigationCache) | 🔗 |
| C | [IncidentModel](/v1.3.15/zh/api/campaign-ext/IncidentModel) | 🔗 |
| C | [InformationRestrictionModel](/v1.3.15/zh/api/campaign-ext/InformationRestrictionModel) | 🔗 |
| C | [InventoryCapacityModel](/v1.3.15/zh/api/campaign-ext/InventoryCapacityModel) | 🔗 |
| C | [IssueModel](/v1.3.15/zh/api/campaign-ext/IssueModel) | 🔗 |
| C | [ItemDiscardModel](/v1.3.15/zh/api/campaign-ext/ItemDiscardModel) | 🔗 |
| C | [KingdomCreationModel](/v1.3.15/zh/api/campaign-ext/KingdomCreationModel) | 🔗 |
| C | [KingdomDecisionPermissionModel](/v1.3.15/zh/api/campaign-ext/KingdomDecisionPermissionModel) | 🔗 |
| E | [LimitedAccessSolution](/v1.3.15/zh/api/campaign-ext/LimitedAccessSolution) | 🔗 |
| C | [LocationModel](/v1.3.15/zh/api/campaign-ext/LocationModel) | 🔗 |
| C | [MapDistanceModel](/v1.3.15/zh/api/campaign-ext/MapDistanceModel) | 🔗 |
| C | [MapTrackModel](/v1.3.15/zh/api/campaign-ext/MapTrackModel) | 🔗 |
| C | [MapVisibilityModel](/v1.3.15/zh/api/campaign-ext/MapVisibilityModel) | 🔗 |
| C | [MapWeatherModel](/v1.3.15/zh/api/campaign-ext/MapWeatherModel) | 🔗 |
| C | [MarriageModel](/v1.3.15/zh/api/campaign-ext/MarriageModel) | 🔗 |
| C | [MilitaryPowerModel](/v1.3.15/zh/api/campaign-ext/MilitaryPowerModel) | 🔗 |
| C | [MinorFactionsModel](/v1.3.15/zh/api/campaign-ext/MinorFactionsModel) | 🔗 |
| E | [MissionTypeEnum](/v1.3.15/zh/api/campaign-ext/MissionTypeEnum) | 🔗 |
| C | [MobilePartyAIModel](/v1.3.15/zh/api/campaign-ext/MobilePartyAIModel) | 🔗 |
| C | [MobilePartyFoodConsumptionModel](/v1.3.15/zh/api/campaign-ext/MobilePartyFoodConsumptionModel) | 🔗 |
| C | [MobilePartyMoraleModel](/v1.3.15/zh/api/campaign-ext/MobilePartyMoraleModel) | 🔗 |
| C | [NotablePowerModel](/v1.3.15/zh/api/campaign-ext/NotablePowerModel) | 🔗 |
| C | [NotableSpawnModel](/v1.3.15/zh/api/campaign-ext/NotableSpawnModel) | 🔗 |
| C | [PartyDesertionModel](/v1.3.15/zh/api/campaign-ext/PartyDesertionModel) | 🔗 |
| C | [PartyFoodBuyingModel](/v1.3.15/zh/api/campaign-ext/PartyFoodBuyingModel) | 🔗 |
| C | [PartyHealingModel](/v1.3.15/zh/api/campaign-ext/PartyHealingModel) | 🔗 |
| C | [PartyImpairmentModel](/v1.3.15/zh/api/campaign-ext/PartyImpairmentModel) | 🔗 |
| C | [PartyMoraleModel](/v1.3.15/zh/api/campaign-ext/PartyMoraleModel) | 🔗 |
| C | [PartyNavigationModel](/v1.3.15/zh/api/campaign-ext/PartyNavigationModel) | 🔗 |
| C | [PartyShipLimitModel](/v1.3.15/zh/api/campaign-ext/PartyShipLimitModel) | 🔗 |
| C | [PartySizeLimitModel](/v1.3.15/zh/api/campaign-ext/PartySizeLimitModel) | 🔗 |
| C | [PartySpeedModel](/v1.3.15/zh/api/campaign-ext/PartySpeedModel) | 🔗 |
| C | [PartyTradeModel](/v1.3.15/zh/api/campaign-ext/PartyTradeModel) | 🔗 |
| C | [PartyTrainingModel](/v1.3.15/zh/api/campaign-ext/PartyTrainingModel) | 🔗 |
| C | [PartyTransitionModel](/v1.3.15/zh/api/campaign-ext/PartyTransitionModel) | 🔗 |
| C | [PartyTroopUpgradeModel](/v1.3.15/zh/api/campaign-ext/PartyTroopUpgradeModel) | 🔗 |
| C | [PartyWageModel](/v1.3.15/zh/api/campaign-ext/PartyWageModel) | 🔗 |
| E | [PaymentMethod](/v1.3.15/zh/api/campaign-ext/PaymentMethod) | 🔗 |
| C | [PersuasionModel](/v1.3.15/zh/api/campaign-ext/PersuasionModel) | 🔗 |
| C | [PlayerProgressionModel](/v1.3.15/zh/api/campaign-ext/PlayerProgressionModel) | 🔗 |
| C | [PregnancyModel](/v1.3.15/zh/api/campaign-ext/PregnancyModel) | 🔗 |
| E | [PreliminaryActionObligation](/v1.3.15/zh/api/campaign-ext/PreliminaryActionObligation) | 🔗 |
| E | [PreliminaryActionType](/v1.3.15/zh/api/campaign-ext/PreliminaryActionType) | 🔗 |
| C | [PrisonBreakModel](/v1.3.15/zh/api/campaign-ext/PrisonBreakModel) | 🔗 |
| C | [PrisonerDonationModel](/v1.3.15/zh/api/campaign-ext/PrisonerDonationModel) | 🔗 |
| C | [PrisonerRecruitmentCalculationModel](/v1.3.15/zh/api/campaign-ext/PrisonerRecruitmentCalculationModel) | 🔗 |
| C | [RaidModel](/v1.3.15/zh/api/campaign-ext/RaidModel) | 🔗 |
| C | [RansomValueCalculationModel](/v1.3.15/zh/api/campaign-ext/RansomValueCalculationModel) | 🔗 |
| C | [RomanceModel](/v1.3.15/zh/api/campaign-ext/RomanceModel) | 🔗 |
| C | [SceneModel](/v1.3.15/zh/api/campaign-ext/SceneModel) | 🔗 |
| C | [SettlementAccessModel](/v1.3.15/zh/api/campaign-ext/SettlementAccessModel) | 🔗 |
| E | [SettlementAction](/v1.3.15/zh/api/campaign-ext/SettlementAction) | 🔗 |
| C | [SettlementEconomyModel](/v1.3.15/zh/api/campaign-ext/SettlementEconomyModel) | 🔗 |
| C | [SettlementFoodModel](/v1.3.15/zh/api/campaign-ext/SettlementFoodModel) | 🔗 |
| C | [SettlementGarrisonModel](/v1.3.15/zh/api/campaign-ext/SettlementGarrisonModel) | 🔗 |
| C | [SettlementLoyaltyModel](/v1.3.15/zh/api/campaign-ext/SettlementLoyaltyModel) | 🔗 |
| C | [SettlementMenuOverlayModel](/v1.3.15/zh/api/campaign-ext/SettlementMenuOverlayModel) | 🔗 |
| C | [SettlementMilitiaModel](/v1.3.15/zh/api/campaign-ext/SettlementMilitiaModel) | 🔗 |
| C | [SettlementPatrolModel](/v1.3.15/zh/api/campaign-ext/SettlementPatrolModel) | 🔗 |
| C | [SettlementProsperityModel](/v1.3.15/zh/api/campaign-ext/SettlementProsperityModel) | 🔗 |
| C | [SettlementSecurityModel](/v1.3.15/zh/api/campaign-ext/SettlementSecurityModel) | 🔗 |
| C | [SettlementTaxModel](/v1.3.15/zh/api/campaign-ext/SettlementTaxModel) | 🔗 |
| C | [SettlementValueModel](/v1.3.15/zh/api/campaign-ext/SettlementValueModel) | 🔗 |
| C | [ShipCostModel](/v1.3.15/zh/api/campaign-ext/ShipCostModel) | 🔗 |
| C | [ShipStatModel](/v1.3.15/zh/api/campaign-ext/ShipStatModel) | 🔗 |
| E | [SiegeAction](/v1.3.15/zh/api/campaign-ext/SiegeAction) | 🔗 |
| C | [SiegeAftermathModel](/v1.3.15/zh/api/campaign-ext/SiegeAftermathModel) | 🔗 |
| C | [SiegeEventModel](/v1.3.15/zh/api/campaign-ext/SiegeEventModel) | 🔗 |
| C | [SiegeLordsHallFightModel](/v1.3.15/zh/api/campaign-ext/SiegeLordsHallFightModel) | 🔗 |
| C | [SiegeStrategyActionModel](/v1.3.15/zh/api/campaign-ext/SiegeStrategyActionModel) | 🔗 |
| C | [SmithingModel](/v1.3.15/zh/api/campaign-ext/SmithingModel) | 🔗 |
| C | [TargetScoreCalculatingModel](/v1.3.15/zh/api/campaign-ext/TargetScoreCalculatingModel) | 🔗 |
| C | [TavernMercenaryTroopsModel](/v1.3.15/zh/api/campaign-ext/TavernMercenaryTroopsModel) | 🔗 |
| C | [TournamentModel](/v1.3.15/zh/api/campaign-ext/TournamentModel) | 🔗 |
| C | [TradeAgreementModel](/v1.3.15/zh/api/campaign-ext/TradeAgreementModel) | 🔗 |
| C | [TradeItemPriceFactorModel](/v1.3.15/zh/api/campaign-ext/TradeItemPriceFactorModel) | 🔗 |
| C | [TroopSacrificeModel](/v1.3.15/zh/api/campaign-ext/TroopSacrificeModel) | 🔗 |
| C | [TroopSupplierProbabilityModel](/v1.3.15/zh/api/campaign-ext/TroopSupplierProbabilityModel) | 🔗 |
| C | [ValuationModel](/v1.3.15/zh/api/campaign-ext/ValuationModel) | 🔗 |
| C | [VassalRewardsModel](/v1.3.15/zh/api/campaign-ext/VassalRewardsModel) | 🔗 |
| C | [VillageProductionCalculatorModel](/v1.3.15/zh/api/campaign-ext/VillageProductionCalculatorModel) | 🔗 |
| C | [VillageTradeModel](/v1.3.15/zh/api/campaign-ext/VillageTradeModel) | 🔗 |
| C | [VoiceOverModel](/v1.3.15/zh/api/campaign-ext/VoiceOverModel) | 🔗 |
| C | [VolunteerModel](/v1.3.15/zh/api/campaign-ext/VolunteerModel) | 🔗 |
| C | [WallHitPointCalculationModel](/v1.3.15/zh/api/campaign-ext/WallHitPointCalculationModel) | 🔗 |
| E | [WeatherEvent](/v1.3.15/zh/api/campaign-ext/WeatherEvent) | 🔗 |
| E | [WeatherEventEffectOnTerrain](/v1.3.15/zh/api/campaign-ext/WeatherEventEffectOnTerrain) | 🔗 |
| C | [WorkshopModel](/v1.3.15/zh/api/campaign-ext/WorkshopModel) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CampaignMapConversation](/v1.3.15/zh/api/campaign-ext/CampaignMapConversation) | 🔗 |
| C | [ConversationAnimationManager](/v1.3.15/zh/api/campaign-ext/ConversationAnimationManager) | 🔗 |
| C | [ConversationAnimData](/v1.3.15/zh/api/campaign-ext/ConversationAnimData) | 🔗 |
| S | [ConversationCharacterData](/v1.3.15/zh/api/campaign-ext/ConversationCharacterData) | 🔗 |
| C | [ConversationHelper](/v1.3.15/zh/api/campaign-ext/ConversationHelper) | 🔗 |
| C | [ConversationManager](/v1.3.15/zh/api/campaign-ext/ConversationManager) | 🔗 |
| C | [ConversationSentence](/v1.3.15/zh/api/campaign-ext/ConversationSentence) | 🔗 |
| S | [ConversationSentenceOption](/v1.3.15/zh/api/campaign-ext/ConversationSentenceOption) | 🔗 |
| E | [ConversationToken](/v1.3.15/zh/api/campaign-ext/ConversationToken) | 🔗 |
| C | [ConversationTokens](/v1.3.15/zh/api/campaign-ext/ConversationTokens) | 🔗 |
| E | [DialogLineFlags](/v1.3.15/zh/api/campaign-ext/DialogLineFlags) | 🔗 |
| I | [IConversationStateHandler](/v1.3.15/zh/api/campaign-ext/IConversationStateHandler) | 🔗 |
| C | [MapConversationAgent](/v1.3.15/zh/api/campaign-ext/MapConversationAgent) | 🔗 |
| C | [TaggedString](/v1.3.15/zh/api/campaign-ext/TaggedString) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation.Persuasion (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Persuasion](/v1.3.15/zh/api/campaign-ext/Persuasion) | 🔗 |
| E | [PersuasionArgumentStrength](/v1.3.15/zh/api/campaign-ext/PersuasionArgumentStrength) | 🔗 |
| C | [PersuasionAttempt](/v1.3.15/zh/api/campaign-ext/PersuasionAttempt) | 🔗 |
| E | [PersuasionDifficulty](/v1.3.15/zh/api/campaign-ext/PersuasionDifficulty) | 🔗 |
| C | [PersuasionOptionArgs](/v1.3.15/zh/api/campaign-ext/PersuasionOptionArgs) | 🔗 |
| E | [PersuasionOptionResult](/v1.3.15/zh/api/campaign-ext/PersuasionOptionResult) | 🔗 |
| C | [PersuasionTask](/v1.3.15/zh/api/campaign-ext/PersuasionTask) | 🔗 |
| E | [TraitEffect](/v1.3.15/zh/api/campaign-ext/TraitEffect) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation.Tags (97)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AlliedLordTag](/v1.3.15/zh/api/campaign-ext/AlliedLordTag) | 🔗 |
| C | [AmoralTag](/v1.3.15/zh/api/campaign-ext/AmoralTag) | 🔗 |
| C | [AnyNotableTypeTag](/v1.3.15/zh/api/campaign-ext/AnyNotableTypeTag) | 🔗 |
| C | [ArtisanNotableTypeTag](/v1.3.15/zh/api/campaign-ext/ArtisanNotableTypeTag) | 🔗 |
| C | [AseraiTag](/v1.3.15/zh/api/campaign-ext/AseraiTag) | 🔗 |
| C | [AttackingTag](/v1.3.15/zh/api/campaign-ext/AttackingTag) | 🔗 |
| C | [AttractedToPlayerTag](/v1.3.15/zh/api/campaign-ext/AttractedToPlayerTag) | 🔗 |
| C | [BattanianTag](/v1.3.15/zh/api/campaign-ext/BattanianTag) | 🔗 |
| C | [CalculatingTag](/v1.3.15/zh/api/campaign-ext/CalculatingTag) | 🔗 |
| C | [CautiousTag](/v1.3.15/zh/api/campaign-ext/CautiousTag) | 🔗 |
| C | [ChivalrousTag](/v1.3.15/zh/api/campaign-ext/ChivalrousTag) | 🔗 |
| C | [CombatantTag](/v1.3.15/zh/api/campaign-ext/CombatantTag) | 🔗 |
| C | [ConversationTag](/v1.3.15/zh/api/campaign-ext/ConversationTag) | 🔗 |
| C | [ConversationTagHelper](/v1.3.15/zh/api/campaign-ext/ConversationTagHelper) | 🔗 |
| C | [CruelTag](/v1.3.15/zh/api/campaign-ext/CruelTag) | 🔗 |
| C | [CurrentConversationIsFirst](/v1.3.15/zh/api/campaign-ext/CurrentConversationIsFirst) | 🔗 |
| C | [DefaultTag](/v1.3.15/zh/api/campaign-ext/DefaultTag) | 🔗 |
| C | [DeviousTag](/v1.3.15/zh/api/campaign-ext/DeviousTag) | 🔗 |
| C | [DrinkingInTavernTag](/v1.3.15/zh/api/campaign-ext/DrinkingInTavernTag) | 🔗 |
| C | [EmpireTag](/v1.3.15/zh/api/campaign-ext/EmpireTag) | 🔗 |
| C | [EngagedToPlayerTag](/v1.3.15/zh/api/campaign-ext/EngagedToPlayerTag) | 🔗 |
| C | [FirstMeetingTag](/v1.3.15/zh/api/campaign-ext/FirstMeetingTag) | 🔗 |
| C | [FriendlyRelationshipTag](/v1.3.15/zh/api/campaign-ext/FriendlyRelationshipTag) | 🔗 |
| C | [GangLeaderNotableTypeTag](/v1.3.15/zh/api/campaign-ext/GangLeaderNotableTypeTag) | 🔗 |
| C | [GenerosityTag](/v1.3.15/zh/api/campaign-ext/GenerosityTag) | 🔗 |
| C | [HeadmanNotableTypeTag](/v1.3.15/zh/api/campaign-ext/HeadmanNotableTypeTag) | 🔗 |
| C | [HighRegisterTag](/v1.3.15/zh/api/campaign-ext/HighRegisterTag) | 🔗 |
| C | [HonorTag](/v1.3.15/zh/api/campaign-ext/HonorTag) | 🔗 |
| C | [HostileRelationshipTag](/v1.3.15/zh/api/campaign-ext/HostileRelationshipTag) | 🔗 |
| C | [ImpoliteTag](/v1.3.15/zh/api/campaign-ext/ImpoliteTag) | 🔗 |
| C | [ImpulsiveTag](/v1.3.15/zh/api/campaign-ext/ImpulsiveTag) | 🔗 |
| C | [InHomeSettlementTag](/v1.3.15/zh/api/campaign-ext/InHomeSettlementTag) | 🔗 |
| C | [KhuzaitTag](/v1.3.15/zh/api/campaign-ext/KhuzaitTag) | 🔗 |
| C | [LowRegisterTag](/v1.3.15/zh/api/campaign-ext/LowRegisterTag) | 🔗 |
| C | [MerchantNotableTypeTag](/v1.3.15/zh/api/campaign-ext/MerchantNotableTypeTag) | 🔗 |
| C | [MercyTag](/v1.3.15/zh/api/campaign-ext/MercyTag) | 🔗 |
| C | [MetBeforeTag](/v1.3.15/zh/api/campaign-ext/MetBeforeTag) | 🔗 |
| C | [NoConflictTag](/v1.3.15/zh/api/campaign-ext/NoConflictTag) | 🔗 |
| C | [NonCombatantTag](/v1.3.15/zh/api/campaign-ext/NonCombatantTag) | 🔗 |
| C | [NonviolentProfessionTag](/v1.3.15/zh/api/campaign-ext/NonviolentProfessionTag) | 🔗 |
| C | [NordTag](/v1.3.15/zh/api/campaign-ext/NordTag) | 🔗 |
| C | [NpcIsFemaleTag](/v1.3.15/zh/api/campaign-ext/NpcIsFemaleTag) | 🔗 |
| C | [NPCIsInSeaTag](/v1.3.15/zh/api/campaign-ext/NPCIsInSeaTag) | 🔗 |
| C | [NpcIsLiegeTag](/v1.3.15/zh/api/campaign-ext/NpcIsLiegeTag) | 🔗 |
| C | [NpcIsMaleTag](/v1.3.15/zh/api/campaign-ext/NpcIsMaleTag) | 🔗 |
| C | [NpcIsNobleTag](/v1.3.15/zh/api/campaign-ext/NpcIsNobleTag) | 🔗 |
| C | [OldTag](/v1.3.15/zh/api/campaign-ext/OldTag) | 🔗 |
| C | [OnTheRoadTag](/v1.3.15/zh/api/campaign-ext/OnTheRoadTag) | 🔗 |
| C | [OutlawSympathyTag](/v1.3.15/zh/api/campaign-ext/OutlawSympathyTag) | 🔗 |
| C | [PersonaCurtTag](/v1.3.15/zh/api/campaign-ext/PersonaCurtTag) | 🔗 |
| C | [PersonaEarnestTag](/v1.3.15/zh/api/campaign-ext/PersonaEarnestTag) | 🔗 |
| C | [PersonaIronicTag](/v1.3.15/zh/api/campaign-ext/PersonaIronicTag) | 🔗 |
| C | [PersonaSoftspokenTag](/v1.3.15/zh/api/campaign-ext/PersonaSoftspokenTag) | 🔗 |
| C | [PlayerBesiegingTag](/v1.3.15/zh/api/campaign-ext/PlayerBesiegingTag) | 🔗 |
| C | [PlayerIsAffiliatedTag](/v1.3.15/zh/api/campaign-ext/PlayerIsAffiliatedTag) | 🔗 |
| C | [PlayerIsAtSeaTag](/v1.3.15/zh/api/campaign-ext/PlayerIsAtSeaTag) | 🔗 |
| C | [PlayerIsBrotherTag](/v1.3.15/zh/api/campaign-ext/PlayerIsBrotherTag) | 🔗 |
| C | [PlayerIsDaughterTag](/v1.3.15/zh/api/campaign-ext/PlayerIsDaughterTag) | 🔗 |
| C | [PlayerIsEnemyTag](/v1.3.15/zh/api/campaign-ext/PlayerIsEnemyTag) | 🔗 |
| C | [PlayerIsFamousTag](/v1.3.15/zh/api/campaign-ext/PlayerIsFamousTag) | 🔗 |
| C | [PlayerIsFatherTag](/v1.3.15/zh/api/campaign-ext/PlayerIsFatherTag) | 🔗 |
| C | [PlayerIsFemaleTag](/v1.3.15/zh/api/campaign-ext/PlayerIsFemaleTag) | 🔗 |
| C | [PlayerIsKinTag](/v1.3.15/zh/api/campaign-ext/PlayerIsKinTag) | 🔗 |
| C | [PlayerIsKnownButNotFamousTag](/v1.3.15/zh/api/campaign-ext/PlayerIsKnownButNotFamousTag) | 🔗 |
| C | [PlayerIsLiegeTag](/v1.3.15/zh/api/campaign-ext/PlayerIsLiegeTag) | 🔗 |
| C | [PlayerIsMaleTag](/v1.3.15/zh/api/campaign-ext/PlayerIsMaleTag) | 🔗 |
| C | [PlayerIsMotherTag](/v1.3.15/zh/api/campaign-ext/PlayerIsMotherTag) | 🔗 |
| C | [PlayerIsNobleTag](/v1.3.15/zh/api/campaign-ext/PlayerIsNobleTag) | 🔗 |
| C | [PlayerIsRulerTag](/v1.3.15/zh/api/campaign-ext/PlayerIsRulerTag) | 🔗 |
| C | [PlayerIsSisterTag](/v1.3.15/zh/api/campaign-ext/PlayerIsSisterTag) | 🔗 |
| C | [PlayerIsSonTag](/v1.3.15/zh/api/campaign-ext/PlayerIsSonTag) | 🔗 |
| C | [PlayerIsSpouseTag](/v1.3.15/zh/api/campaign-ext/PlayerIsSpouseTag) | 🔗 |
| C | [PreacherNotableTypeTag](/v1.3.15/zh/api/campaign-ext/PreacherNotableTypeTag) | 🔗 |
| C | [RogueSkillsTag](/v1.3.15/zh/api/campaign-ext/RogueSkillsTag) | 🔗 |
| C | [RomanticallyInvolvedTag](/v1.3.15/zh/api/campaign-ext/RomanticallyInvolvedTag) | 🔗 |
| C | [SexistTag](/v1.3.15/zh/api/campaign-ext/SexistTag) | 🔗 |
| C | [SturgianTag](/v1.3.15/zh/api/campaign-ext/SturgianTag) | 🔗 |
| C | [TribalRegisterTag](/v1.3.15/zh/api/campaign-ext/TribalRegisterTag) | 🔗 |
| C | [UncharitableTag](/v1.3.15/zh/api/campaign-ext/UncharitableTag) | 🔗 |
| C | [UnderCommandTag](/v1.3.15/zh/api/campaign-ext/UnderCommandTag) | 🔗 |
| C | [UngratefulTag](/v1.3.15/zh/api/campaign-ext/UngratefulTag) | 🔗 |
| C | [ValorTag](/v1.3.15/zh/api/campaign-ext/ValorTag) | 🔗 |
| C | [VlandianTag](/v1.3.15/zh/api/campaign-ext/VlandianTag) | 🔗 |
| C | [VoiceGroupPersonaCurtLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaCurtLowerTag) | 🔗 |
| C | [VoiceGroupPersonaCurtTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaCurtTribalTag) | 🔗 |
| C | [VoiceGroupPersonaCurtUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaCurtUpperTag) | 🔗 |
| C | [VoiceGroupPersonaEarnestLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaEarnestLowerTag) | 🔗 |
| C | [VoiceGroupPersonaEarnestTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaEarnestTribalTag) | 🔗 |
| C | [VoiceGroupPersonaEarnestUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaEarnestUpperTag) | 🔗 |
| C | [VoiceGroupPersonaIronicLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaIronicLowerTag) | 🔗 |
| C | [VoiceGroupPersonaIronicTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaIronicTribalTag) | 🔗 |
| C | [VoiceGroupPersonaIronicUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaIronicUpperTag) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaSoftspokenLowerTag) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaSoftspokenTribalTag) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaSoftspokenUpperTag) | 🔗 |
| C | [WandererTag](/v1.3.15/zh/api/campaign-ext/WandererTag) | 🔗 |
| C | [WaryTag](/v1.3.15/zh/api/campaign-ext/WaryTag) | 🔗 |

## TaleWorlds.CampaignSystem.CraftingSystem (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingOrder](/v1.3.15/zh/api/campaign-ext/CraftingOrder) | 🔗 |

## TaleWorlds.CampaignSystem.Election (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarAgreementDecision](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarAgreementDecision) | 🔗 |
| C | [AcceptCallToWarAgreementDecisionOutcome](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarAgreementDecisionOutcome) | 🔗 |
| C | [ClanAsDecisionOutcome](/v1.3.15/zh/api/campaign-ext/ClanAsDecisionOutcome) | 🔗 |
| C | [DecisionOutcome](/v1.3.15/zh/api/campaign-ext/DecisionOutcome) | 🔗 |
| C | [DeclareWarDecision](/v1.3.15/zh/api/campaign-ext/DeclareWarDecision) | 🔗 |
| C | [DeclareWarDecisionOutcome](/v1.3.15/zh/api/campaign-ext/DeclareWarDecisionOutcome) | 🔗 |
| E | [ElectionOutcomeSupport](./campaign-ext/ElectionOutcomeSupport) | 🔗 |
| C | [ExpelClanDecisionOutcome](/v1.3.15/zh/api/campaign-ext/ExpelClanDecisionOutcome) | 🔗 |
| C | [ExpelClanFromKingdomDecision](/v1.3.15/zh/api/campaign-ext/ExpelClanFromKingdomDecision) | 🔗 |
| C | [KingdomDecision](/v1.3.15/zh/api/campaign-ext/KingdomDecision) | 🔗 |
| C | [KingdomElection](/v1.3.15/zh/api/campaign-ext/KingdomElection) | 🔗 |
| C | [KingdomPolicyDecision](/v1.3.15/zh/api/campaign-ext/KingdomPolicyDecision) | 🔗 |
| C | [KingSelectionDecisionOutcome](/v1.3.15/zh/api/campaign-ext/KingSelectionDecisionOutcome) | 🔗 |
| C | [KingSelectionKingdomDecision](/v1.3.15/zh/api/campaign-ext/KingSelectionKingdomDecision) | 🔗 |
| C | [MakePeaceDecisionOutcome](/v1.3.15/zh/api/campaign-ext/MakePeaceDecisionOutcome) | 🔗 |
| C | [MakePeaceKingdomDecision](/v1.3.15/zh/api/campaign-ext/MakePeaceKingdomDecision) | 🔗 |
| C | [PolicyDecisionOutcome](/v1.3.15/zh/api/campaign-ext/PolicyDecisionOutcome) | 🔗 |
| C | [ProposeCallToWarAgreementDecision](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarAgreementDecision) | 🔗 |
| C | [ProposeCallToWarAgreementDecisionOutcome](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarAgreementDecisionOutcome) | 🔗 |
| C | [SettlementClaimantDecision](/v1.3.15/zh/api/campaign-ext/SettlementClaimantDecision) | 🔗 |
| C | [SettlementClaimantPreliminaryDecision](/v1.3.15/zh/api/campaign-ext/SettlementClaimantPreliminaryDecision) | 🔗 |
| C | [SettlementClaimantPreliminaryOutcome](/v1.3.15/zh/api/campaign-ext/SettlementClaimantPreliminaryOutcome) | 🔗 |
| C | [StartAllianceDecision](/v1.3.15/zh/api/campaign-ext/StartAllianceDecision) | 🔗 |
| C | [StartAllianceDecisionOutcome](/v1.3.15/zh/api/campaign-ext/StartAllianceDecisionOutcome) | 🔗 |
| C | [Supporter](/v1.3.15/zh/api/campaign-ext/Supporter) | 🔗 |
| E | [SupportStatus](/v1.3.15/zh/api/campaign-ext/SupportStatus) | 🔗 |
| E | [SupportWeights](/v1.3.15/zh/api/campaign-ext/SupportWeights) | 🔗 |
| C | [TradeAgreementDecision](/v1.3.15/zh/api/campaign-ext/TradeAgreementDecision) | 🔗 |
| C | [TradeAgreementDecisionOutcome](/v1.3.15/zh/api/campaign-ext/TradeAgreementDecisionOutcome) | 🔗 |

## TaleWorlds.CampaignSystem.Encounters (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CampaignBattleResult](/v1.3.15/zh/api/campaign-ext/CampaignBattleResult) | 🔗 |
| C | [CastleEncounter](/v1.3.15/zh/api/campaign-ext/CastleEncounter) | 🔗 |
| C | [HideoutEncounter](/v1.3.15/zh/api/campaign-ext/HideoutEncounter) | 🔗 |
| C | [LocationEncounter](/v1.3.15/zh/api/campaign-ext/LocationEncounter) | 🔗 |
| C | [PlayerEncounter](/v1.3.15/zh/api/campaign-ext/PlayerEncounter) | 🔗 |
| E | [PlayerEncounterState](/v1.3.15/zh/api/campaign-ext/PlayerEncounterState) | 🔗 |
| C | [RetirementEncounter](/v1.3.15/zh/api/campaign-ext/RetirementEncounter) | 🔗 |
| C | [TownEncounter](/v1.3.15/zh/api/campaign-ext/TownEncounter) | 🔗 |
| C | [VillageEncounter](/v1.3.15/zh/api/campaign-ext/VillageEncounter) | 🔗 |

## TaleWorlds.CampaignSystem.Encyclopedia (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaFilterGroup](/v1.3.15/zh/api/campaign-ext/EncyclopediaFilterGroup) | 🔗 |
| C | [EncyclopediaFilterItem](/v1.3.15/zh/api/campaign-ext/EncyclopediaFilterItem) | 🔗 |
| S | [EncyclopediaListItem](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItem) | 🔗 |
| C | [EncyclopediaListItemComparerBase](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItemComparerBase) | 🔗 |
| C | [EncyclopediaManager](/v1.3.15/zh/api/campaign-ext/EncyclopediaManager) | 🔗 |
| C | [EncyclopediaModelBase](/v1.3.15/zh/api/campaign-ext/EncyclopediaModelBase) | 🔗 |
| C | [EncyclopediaPage](/v1.3.15/zh/api/campaign-ext/EncyclopediaPage) | 🔗 |
| C | [EncyclopediaSortController](/v1.3.15/zh/api/campaign-ext/EncyclopediaSortController) | 🔗 |
| C | [OverrideEncyclopediaModel](/v1.3.15/zh/api/campaign-ext/OverrideEncyclopediaModel) | 🔗 |

## TaleWorlds.CampaignSystem.Encyclopedia.Pages (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultEncyclopediaClanPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaClanPage) | 🔗 |
| C | [DefaultEncyclopediaConceptPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaConceptPage) | 🔗 |
| C | [DefaultEncyclopediaFactionPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaFactionPage) | 🔗 |
| C | [DefaultEncyclopediaHeroPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaHeroPage) | 🔗 |
| C | [DefaultEncyclopediaSettlementPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaSettlementPage) | 🔗 |
| C | [DefaultEncyclopediaShipPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaShipPage) | 🔗 |
| C | [DefaultEncyclopediaUnitPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaUnitPage) | 🔗 |
| C | [EncyclopediaListClanComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListClanComparer) | 🔗 |
| C | [EncyclopediaListHeroComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListHeroComparer) | 🔗 |
| C | [EncyclopediaListKingdomComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListKingdomComparer) | 🔗 |
| C | [EncyclopediaListSettlementComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSettlementComparer) | 🔗 |
| C | [EncyclopediaListShipComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListShipComparer) | 🔗 |
| C | [EncyclopediaListUnitComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListUnitComparer) | 🔗 |

## TaleWorlds.CampaignSystem.Extensions (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Attributes](/v1.3.15/zh/api/campaign-ext/Attributes) | 🔗 |
| C | [ItemCategories](/v1.3.15/zh/api/campaign-ext/ItemCategories) | 🔗 |
| C | [ItemObjectExtensions](/v1.3.15/zh/api/campaign-ext/ItemObjectExtensions) | 🔗 |
| C | [Items](/v1.3.15/zh/api/campaign-ext/Items) | 🔗 |
| C | [MBEquipmentRosterExtensions](/v1.3.15/zh/api/campaign-ext/MBEquipmentRosterExtensions) | 🔗 |
| C | [MetaDataExtensions](/v1.3.15/zh/api/core-extra/MetaDataExtensions) | 🔗 |
| C | [SiegeEngineTypes](/v1.3.15/zh/api/campaign-ext/SiegeEngineTypes) | 🔗 |
| C | [Skills](/v1.3.15/zh/api/campaign-ext/Skills) | 🔗 |
| C | [TextObjectExtensions](/v1.3.15/zh/api/campaign-ext/TextObjectExtensions) | 🔗 |

## TaleWorlds.CampaignSystem.FastMode (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FastModeOptionsProvider](./campaign-ext/FastModeOptionsProvider) | 🔗 |
| C | [FastModeSubModule](./campaign-ext/FastModeSubModule) | 🔗 |

## TaleWorlds.CampaignSystem.GameComponents (126)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlleyMemberAvailabilityDetail](/v1.3.15/zh/api/campaign-ext/AlleyMemberAvailabilityDetail) | 🔗 |
| E | [AssetIncomeType](/v1.3.15/zh/api/campaign-ext/AssetIncomeType) | 🔗 |
| C | [DefaultAgeModel](/v1.3.15/zh/api/campaign-ext/DefaultAgeModel) | 🔗 |
| C | [DefaultAlleyModel](/v1.3.15/zh/api/campaign-ext/DefaultAlleyModel) | 🔗 |
| C | [DefaultAllianceModel](/v1.3.15/zh/api/campaign-ext/DefaultAllianceModel) | 🔗 |
| C | [DefaultArmyManagementCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultArmyManagementCalculationModel) | 🔗 |
| C | [DefaultBanditDensityModel](/v1.3.15/zh/api/campaign-ext/DefaultBanditDensityModel) | 🔗 |
| C | [DefaultBannerItemModel](/v1.3.15/zh/api/campaign-ext/DefaultBannerItemModel) | 🔗 |
| C | [DefaultBarterModel](/v1.3.15/zh/api/campaign-ext/DefaultBarterModel) | 🔗 |
| C | [DefaultBattleCaptainModel](/v1.3.15/zh/api/campaign-ext/DefaultBattleCaptainModel) | 🔗 |
| C | [DefaultBattleRewardModel](/v1.3.15/zh/api/campaign-ext/DefaultBattleRewardModel) | 🔗 |
| C | [DefaultBodyPropertiesModel](/v1.3.15/zh/api/campaign-ext/DefaultBodyPropertiesModel) | 🔗 |
| C | [DefaultBribeCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultBribeCalculationModel) | 🔗 |
| C | [DefaultBuildingConstructionModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingConstructionModel) | 🔗 |
| C | [DefaultBuildingEffectModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingEffectModel) | 🔗 |
| C | [DefaultBuildingModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingModel) | 🔗 |
| C | [DefaultBuildingScoreCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingScoreCalculationModel) | 🔗 |
| C | [DefaultCampaignShipDamageModel](/v1.3.15/zh/api/campaign-ext/DefaultCampaignShipDamageModel) | 🔗 |
| C | [DefaultCampaignShipParametersModel](/v1.3.15/zh/api/campaign-ext/DefaultCampaignShipParametersModel) | 🔗 |
| C | [DefaultCampaignTimeModel](/v1.3.15/zh/api/campaign-ext/DefaultCampaignTimeModel) | 🔗 |
| C | [DefaultCaravanModel](/v1.3.15/zh/api/campaign-ext/DefaultCaravanModel) | 🔗 |
| C | [DefaultCharacterDevelopmentModel](/v1.3.15/zh/api/campaign-ext/DefaultCharacterDevelopmentModel) | 🔗 |
| C | [DefaultCharacterStatsModel](/v1.3.15/zh/api/campaign-ext/DefaultCharacterStatsModel) | 🔗 |
| C | [DefaultClanFinanceModel](/v1.3.15/zh/api/campaign-ext/DefaultClanFinanceModel) | 🔗 |
| C | [DefaultClanMemberPartyRoleModel](./campaign-ext/DefaultClanMemberPartyRoleModel) | 🔗 |
| C | [DefaultClanPoliticsModel](/v1.3.15/zh/api/campaign-ext/DefaultClanPoliticsModel) | 🔗 |
| C | [DefaultClanTierModel](/v1.3.15/zh/api/campaign-ext/DefaultClanTierModel) | 🔗 |
| C | [DefaultCombatSimulationModel](/v1.3.15/zh/api/campaign-ext/DefaultCombatSimulationModel) | 🔗 |
| C | [DefaultCombatXpModel](/v1.3.15/zh/api/campaign-ext/DefaultCombatXpModel) | 🔗 |
| C | [DefaultCompanionHiringPriceCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultCompanionHiringPriceCalculationModel) | 🔗 |
| C | [DefaultCrimeModel](/v1.3.15/zh/api/campaign-ext/DefaultCrimeModel) | 🔗 |
| C | [DefaultCutsceneSelectionModel](/v1.3.15/zh/api/campaign-ext/DefaultCutsceneSelectionModel) | 🔗 |
| C | [DefaultDailyTroopXpBonusModel](/v1.3.15/zh/api/campaign-ext/DefaultDailyTroopXpBonusModel) | 🔗 |
| C | [DefaultDefectionModel](/v1.3.15/zh/api/campaign-ext/DefaultDefectionModel) | 🔗 |
| C | [DefaultDelayedTeleportationModel](/v1.3.15/zh/api/campaign-ext/DefaultDelayedTeleportationModel) | 🔗 |
| C | [DefaultDifficultyModel](/v1.3.15/zh/api/campaign-ext/DefaultDifficultyModel) | 🔗 |
| C | [DefaultDiplomacyModel](/v1.3.15/zh/api/campaign-ext/DefaultDiplomacyModel) | 🔗 |
| C | [DefaultDisguiseDetectionModel](/v1.3.15/zh/api/campaign-ext/DefaultDisguiseDetectionModel) | 🔗 |
| C | [DefaultEmissaryModel](/v1.3.15/zh/api/campaign-ext/DefaultEmissaryModel) | 🔗 |
| C | [DefaultEncounterGameMenuModel](/v1.3.15/zh/api/campaign-ext/DefaultEncounterGameMenuModel) | 🔗 |
| C | [DefaultEncounterModel](/v1.3.15/zh/api/campaign-ext/DefaultEncounterModel) | 🔗 |
| C | [DefaultEquipmentSelectionModel](/v1.3.15/zh/api/campaign-ext/DefaultEquipmentSelectionModel) | 🔗 |
| C | [DefaultExecutionRelationModel](/v1.3.15/zh/api/campaign-ext/DefaultExecutionRelationModel) | 🔗 |
| C | [DefaultFleetManagementModel](/v1.3.15/zh/api/campaign-ext/DefaultFleetManagementModel) | 🔗 |
| C | [DefaultGenericXpModel](/v1.3.15/zh/api/campaign-ext/DefaultGenericXpModel) | 🔗 |
| C | [DefaultHeirSelectionCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeirSelectionCalculationModel) | 🔗 |
| C | [DefaultHeroAgentLocationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeroAgentLocationModel) | 🔗 |
| C | [DefaultHeroCreationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeroCreationModel) | 🔗 |
| C | [DefaultHeroDeathProbabilityCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeroDeathProbabilityCalculationModel) | 🔗 |
| C | [DefaultHideoutModel](/v1.3.15/zh/api/campaign-ext/DefaultHideoutModel) | 🔗 |
| C | [DefaultIncidentModel](/v1.3.15/zh/api/campaign-ext/DefaultIncidentModel) | 🔗 |
| C | [DefaultInformationRestrictionModel](/v1.3.15/zh/api/campaign-ext/DefaultInformationRestrictionModel) | 🔗 |
| C | [DefaultInventoryCapacityModel](/v1.3.15/zh/api/campaign-ext/DefaultInventoryCapacityModel) | 🔗 |
| C | [DefaultIssueModel](/v1.3.15/zh/api/campaign-ext/DefaultIssueModel) | 🔗 |
| C | [DefaultItemDiscardModel](/v1.3.15/zh/api/campaign-ext/DefaultItemDiscardModel) | 🔗 |
| C | [DefaultKingdomCreationModel](/v1.3.15/zh/api/campaign-ext/DefaultKingdomCreationModel) | 🔗 |
| C | [DefaultKingdomDecisionPermissionModel](/v1.3.15/zh/api/campaign-ext/DefaultKingdomDecisionPermissionModel) | 🔗 |
| C | [DefaultLocationModel](/v1.3.15/zh/api/campaign-ext/DefaultLocationModel) | 🔗 |
| C | [DefaultMapDistanceModel](/v1.3.15/zh/api/campaign-ext/DefaultMapDistanceModel) | 🔗 |
| C | [DefaultMapTrackModel](/v1.3.15/zh/api/campaign-ext/DefaultMapTrackModel) | 🔗 |
| C | [DefaultMapVisibilityModel](/v1.3.15/zh/api/campaign-ext/DefaultMapVisibilityModel) | 🔗 |
| C | [DefaultMapWeatherModel](/v1.3.15/zh/api/campaign-ext/DefaultMapWeatherModel) | 🔗 |
| C | [DefaultMarriageModel](/v1.3.15/zh/api/campaign-ext/DefaultMarriageModel) | 🔗 |
| C | [DefaultMilitaryPowerModel](/v1.3.15/zh/api/campaign-ext/DefaultMilitaryPowerModel) | 🔗 |
| C | [DefaultMinorFactionsModel](/v1.3.15/zh/api/campaign-ext/DefaultMinorFactionsModel) | 🔗 |
| C | [DefaultMobilePartyAIModel](/v1.3.15/zh/api/campaign-ext/DefaultMobilePartyAIModel) | 🔗 |
| C | [DefaultMobilePartyFoodConsumptionModel](/v1.3.15/zh/api/campaign-ext/DefaultMobilePartyFoodConsumptionModel) | 🔗 |
| C | [DefaultNotablePowerModel](/v1.3.15/zh/api/campaign-ext/DefaultNotablePowerModel) | 🔗 |
| C | [DefaultNotableSpawnModel](/v1.3.15/zh/api/campaign-ext/DefaultNotableSpawnModel) | 🔗 |
| C | [DefaultPartyDesertionModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyDesertionModel) | 🔗 |
| C | [DefaultPartyFoodBuyingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyFoodBuyingModel) | 🔗 |
| C | [DefaultPartyHealingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyHealingModel) | 🔗 |
| C | [DefaultPartyImpairmentModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyImpairmentModel) | 🔗 |
| C | [DefaultPartyMoraleModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyMoraleModel) | 🔗 |
| C | [DefaultPartyNavigationModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyNavigationModel) | 🔗 |
| C | [DefaultPartyShipLimitModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyShipLimitModel) | 🔗 |
| C | [DefaultPartySizeLimitModel](/v1.3.15/zh/api/campaign-ext/DefaultPartySizeLimitModel) | 🔗 |
| C | [DefaultPartySpeedCalculatingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartySpeedCalculatingModel) | 🔗 |
| C | [DefaultPartyTradeModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTradeModel) | 🔗 |
| C | [DefaultPartyTrainingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTrainingModel) | 🔗 |
| C | [DefaultPartyTransitionModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTransitionModel) | 🔗 |
| C | [DefaultPartyTroopUpgradeModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTroopUpgradeModel) | 🔗 |
| C | [DefaultPartyWageModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyWageModel) | 🔗 |
| C | [DefaultPersuasionModel](/v1.3.15/zh/api/campaign-ext/DefaultPersuasionModel) | 🔗 |
| C | [DefaultPlayerProgressionModel](/v1.3.15/zh/api/campaign-ext/DefaultPlayerProgressionModel) | 🔗 |
| C | [DefaultPregnancyModel](/v1.3.15/zh/api/campaign-ext/DefaultPregnancyModel) | 🔗 |
| C | [DefaultPrisonBreakModel](/v1.3.15/zh/api/campaign-ext/DefaultPrisonBreakModel) | 🔗 |
| C | [DefaultPrisonerDonationModel](/v1.3.15/zh/api/campaign-ext/DefaultPrisonerDonationModel) | 🔗 |
| C | [DefaultPrisonerRecruitmentCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultPrisonerRecruitmentCalculationModel) | 🔗 |
| C | [DefaultRaidModel](/v1.3.15/zh/api/campaign-ext/DefaultRaidModel) | 🔗 |
| C | [DefaultRansomValueCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultRansomValueCalculationModel) | 🔗 |
| C | [DefaultRomanceModel](/v1.3.15/zh/api/campaign-ext/DefaultRomanceModel) | 🔗 |
| C | [DefaultSceneModel](/v1.3.15/zh/api/campaign-ext/DefaultSceneModel) | 🔗 |
| C | [DefaultSettlementAccessModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementAccessModel) | 🔗 |
| C | [DefaultSettlementEconomyModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementEconomyModel) | 🔗 |
| C | [DefaultSettlementFoodModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementFoodModel) | 🔗 |
| C | [DefaultSettlementGarrisonModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementGarrisonModel) | 🔗 |
| C | [DefaultSettlementLoyaltyModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementLoyaltyModel) | 🔗 |
| C | [DefaultSettlementMilitiaModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementMilitiaModel) | 🔗 |
| C | [DefaultSettlementPatrolModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementPatrolModel) | 🔗 |
| C | [DefaultSettlementProsperityModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementProsperityModel) | 🔗 |
| C | [DefaultSettlementSecurityModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementSecurityModel) | 🔗 |
| C | [DefaultSettlementTaxModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementTaxModel) | 🔗 |
| C | [DefaultSettlementValueModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementValueModel) | 🔗 |
| C | [DefaultShipCostModel](/v1.3.15/zh/api/campaign-ext/DefaultShipCostModel) | 🔗 |
| C | [DefaultShipStatModel](/v1.3.15/zh/api/campaign-ext/DefaultShipStatModel) | 🔗 |
| C | [DefaultSiegeAftermathModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeAftermathModel) | 🔗 |
| C | [DefaultSiegeEventModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeEventModel) | 🔗 |
| C | [DefaultSiegeLordsHallFightModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeLordsHallFightModel) | 🔗 |
| C | [DefaultSiegeStrategyActionModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeStrategyActionModel) | 🔗 |
| C | [DefaultSmithingModel](/v1.3.15/zh/api/campaign-ext/DefaultSmithingModel) | 🔗 |
| C | [DefaultTargetScoreCalculatingModel](/v1.3.15/zh/api/campaign-ext/DefaultTargetScoreCalculatingModel) | 🔗 |
| C | [DefaultTavernMercenaryTroopsModel](/v1.3.15/zh/api/campaign-ext/DefaultTavernMercenaryTroopsModel) | 🔗 |
| C | [DefaultTournamentModel](/v1.3.15/zh/api/campaign-ext/DefaultTournamentModel) | 🔗 |
| C | [DefaultTradeAgreementModel](/v1.3.15/zh/api/campaign-ext/DefaultTradeAgreementModel) | 🔗 |
| C | [DefaultTradeItemPriceFactorModel](/v1.3.15/zh/api/campaign-ext/DefaultTradeItemPriceFactorModel) | 🔗 |
| C | [DefaultTroopSacrificeModel](/v1.3.15/zh/api/campaign-ext/DefaultTroopSacrificeModel) | 🔗 |
| C | [DefaultTroopSupplierProbabilityModel](/v1.3.15/zh/api/campaign-ext/DefaultTroopSupplierProbabilityModel) | 🔗 |
| C | [DefaultValuationModel](/v1.3.15/zh/api/campaign-ext/DefaultValuationModel) | 🔗 |
| C | [DefaultVassalRewardsModel](/v1.3.15/zh/api/campaign-ext/DefaultVassalRewardsModel) | 🔗 |
| C | [DefaultVillageProductionCalculatorModel](/v1.3.15/zh/api/campaign-ext/DefaultVillageProductionCalculatorModel) | 🔗 |
| C | [DefaultVillageTradeModel](/v1.3.15/zh/api/campaign-ext/DefaultVillageTradeModel) | 🔗 |
| C | [DefaultVoiceOverModel](/v1.3.15/zh/api/campaign-ext/DefaultVoiceOverModel) | 🔗 |
| C | [DefaultVolunteerModel](/v1.3.15/zh/api/campaign-ext/DefaultVolunteerModel) | 🔗 |
| C | [DefaultWallHitPointCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultWallHitPointCalculationModel) | 🔗 |
| C | [DefaultWorkshopModel](/v1.3.15/zh/api/campaign-ext/DefaultWorkshopModel) | 🔗 |

## TaleWorlds.CampaignSystem.GameMenus (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [EventType](/v1.3.15/zh/api/campaign-ext/EventType) | 🔗 |
| C | [GameMenu](/v1.3.15/zh/api/campaign-ext/GameMenu) | 🔗 |
| C | [GameMenuCallbackManager](/v1.3.15/zh/api/campaign-ext/GameMenuCallbackManager) | 🔗 |
| C | [GameMenuEventHandler](/v1.3.15/zh/api/campaign-ext/GameMenuEventHandler) | 🔗 |
| C | [GameMenuInitializationHandler](/v1.3.15/zh/api/campaign-ext/GameMenuInitializationHandler) | 🔗 |
| C | [GameMenuManager](/v1.3.15/zh/api/campaign-ext/GameMenuManager) | 🔗 |
| C | [GameMenuOption](/v1.3.15/zh/api/campaign-ext/GameMenuOption) | 🔗 |
| E | [IssueQuestFlags](/v1.3.15/zh/api/campaign-ext/IssueQuestFlags) | 🔗 |
| E | [LeaveType](/v1.3.15/zh/api/campaign-ext/LeaveType) | 🔗 |
| E | [MenuAndOptionType](/v1.3.15/zh/api/campaign-ext/MenuAndOptionType) | 🔗 |
| C | [MenuCallbackArgs](/v1.3.15/zh/api/campaign-ext/MenuCallbackArgs) | 🔗 |
| E | [MenuFlags](/v1.3.15/zh/api/campaign-ext/MenuFlags) | 🔗 |
| E | [MenuOverlayType](/v1.3.15/zh/api/campaign-ext/MenuOverlayType) | 🔗 |
| C | [WaitMenuOption](/v1.3.15/zh/api/campaign-ext/WaitMenuOption) | 🔗 |

## TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultEncounter](/v1.3.15/zh/api/campaign-ext/DefaultEncounter) | 🔗 |
| C | [PlayerTownVisit](/v1.3.15/zh/api/campaign-ext/PlayerTownVisit) | 🔗 |

## TaleWorlds.CampaignSystem.GameState (32)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerEditorState](/v1.3.15/zh/api/campaign-ext/BannerEditorState) | 🔗 |
| C | [BarberState](/v1.3.15/zh/api/campaign-ext/BarberState) | 🔗 |
| C | [CharacterDeveloperState](/v1.3.15/zh/api/campaign-ext/CharacterDeveloperState) | 🔗 |
| C | [ClanState](/v1.3.15/zh/api/campaign-ext/ClanState) | 🔗 |
| C | [CraftingState](/v1.3.15/zh/api/campaign-ext/CraftingState) | 🔗 |
| C | [EducationState](/v1.3.15/zh/api/campaign-ext/EducationState) | 🔗 |
| E | [GameOverReason](/v1.3.15/zh/api/campaign-ext/GameOverReason) | 🔗 |
| C | [GameOverState](/v1.3.15/zh/api/campaign-ext/GameOverState) | 🔗 |
| I | [IBannerEditorStateHandler](/v1.3.15/zh/api/campaign-ext/IBannerEditorStateHandler) | 🔗 |
| I | [ICharacterDeveloperStateHandler](/v1.3.15/zh/api/campaign-ext/ICharacterDeveloperStateHandler) | 🔗 |
| I | [IClanStateHandler](/v1.3.15/zh/api/campaign-ext/IClanStateHandler) | 🔗 |
| I | [ICraftingStateHandler](/v1.3.15/zh/api/campaign-ext/ICraftingStateHandler) | 🔗 |
| I | [IEducationStateHandler](/v1.3.15/zh/api/campaign-ext/IEducationStateHandler) | 🔗 |
| I | [IGameOverStateHandler](/v1.3.15/zh/api/campaign-ext/IGameOverStateHandler) | 🔗 |
| I | [IInventoryStateHandler](/v1.3.15/zh/api/campaign-ext/IInventoryStateHandler) | 🔗 |
| I | [IKingdomStateHandler](/v1.3.15/zh/api/campaign-ext/IKingdomStateHandler) | 🔗 |
| I | [IMapStateHandler](/v1.3.15/zh/api/campaign-ext/IMapStateHandler) | 🔗 |
| I | [IMenuContextHandler](/v1.3.15/zh/api/campaign-ext/IMenuContextHandler) | 🔗 |
| C | [InventoryState](/v1.3.15/zh/api/campaign-ext/InventoryState) | 🔗 |
| I | [IPartyScreenLogicHandler](/v1.3.15/zh/api/campaign-ext/IPartyScreenLogicHandler) | 🔗 |
| I | [IPartyScreenPrisonHandler](/v1.3.15/zh/api/campaign-ext/IPartyScreenPrisonHandler) | 🔗 |
| I | [IPartyScreenTroopHandler](/v1.3.15/zh/api/campaign-ext/IPartyScreenTroopHandler) | 🔗 |
| I | [IQuestsStateHandler](/v1.3.15/zh/api/campaign-ext/IQuestsStateHandler) | 🔗 |
| C | [KingdomState](/v1.3.15/zh/api/campaign-ext/KingdomState) | 🔗 |
| C | [MapState](/v1.3.15/zh/api/campaign-ext/MapState) | 🔗 |
| C | [MapStateData](/v1.3.15/zh/api/campaign-ext/MapStateData) | 🔗 |
| C | [MenuContext](/v1.3.15/zh/api/campaign-ext/MenuContext) | 🔗 |
| C | [PartyState](/v1.3.15/zh/api/campaign-ext/PartyState) | 🔗 |
| E | [PortScreenModes](/v1.3.15/zh/api/campaign-ext/PortScreenModes) | 🔗 |
| C | [PortState](/v1.3.15/zh/api/campaign-ext/PortState) | 🔗 |
| C | [QuestsState](/v1.3.15/zh/api/campaign-ext/QuestsState) | 🔗 |
| C | [TutorialState](/v1.3.15/zh/api/campaign-ext/TutorialState) | 🔗 |

## TaleWorlds.CampaignSystem.Handlers (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [ICustomSystemManager](/v1.3.15/zh/api/campaign-ext/ICustomSystemManager) | 🔗 |

## TaleWorlds.CampaignSystem.Incidents (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Incident](/v1.3.15/zh/api/campaign-ext/Incident) | 🔗 |
| C | [IncidentEffect](/v1.3.15/zh/api/campaign-ext/IncidentEffect) | 🔗 |

## TaleWorlds.CampaignSystem.Inventory (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CapacityData](/v1.3.15/zh/api/campaign-ext/CapacityData) | 🔗 |
| C | [FakeInventoryListener](/v1.3.15/zh/api/campaign-ext/FakeInventoryListener) | 🔗 |
| C | [InventoryListener](/v1.3.15/zh/api/campaign-ext/InventoryListener) | 🔗 |
| C | [InventoryLogic](/v1.3.15/zh/api/campaign-ext/InventoryLogic) | 🔗 |
| E | [InventorySide](/v1.3.15/zh/api/campaign-ext/InventorySide) | 🔗 |
| C | [InventoryTransferItemEvent](/v1.3.15/zh/api/campaign-ext/InventoryTransferItemEvent) | 🔗 |
| I | [IPlayerTradeBehavior](/v1.3.15/zh/api/campaign-ext/IPlayerTradeBehavior) | 🔗 |
| S | [TransferCommand](/v1.3.15/zh/api/campaign-ext/TransferCommand) | 🔗 |
| C | [TransferCommandResult](/v1.3.15/zh/api/campaign-ext/TransferCommandResult) | 🔗 |
| E | [TransferType](/v1.3.15/zh/api/campaign-ext/TransferType) | 🔗 |

## TaleWorlds.CampaignSystem.Issues (158)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlternativeSolutionScaleFlag](/v1.3.15/zh/api/campaign-ext/AlternativeSolutionScaleFlag) | 🔗 |
| C | [ArmyNeedsSuppliesIssue](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssue) | 🔗 |
| C | [ArmyNeedsSuppliesIssueBehavior](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssueBehavior) | 🔗 |
| C | [ArmyNeedsSuppliesIssueQuest](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssueQuest) | 🔗 |
| C | [ArmyNeedsSuppliesIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssueTypeDefiner) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssue](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssue) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueBehavior](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueBehavior) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueQuest](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueQuest) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner) | 🔗 |
| C | [ArtisanOverpricedGoodsIssue](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssue) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueBehavior](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssueBehavior) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueQuest](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssueQuest) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssueTypeDefiner) | 🔗 |
| C | [BettingFraudIssue](/v1.3.15/zh/api/campaign-ext/BettingFraudIssue) | 🔗 |
| C | [BettingFraudIssueBehavior](/v1.3.15/zh/api/campaign-ext/BettingFraudIssueBehavior) | 🔗 |
| C | [BettingFraudIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/BettingFraudIssueTypeDefiner) | 🔗 |
| C | [BettingFraudQuest](/v1.3.15/zh/api/campaign-ext/BettingFraudQuest) | 🔗 |
| C | [CapturedByBountyHuntersIssue](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssue) | 🔗 |
| C | [CapturedByBountyHuntersIssueBehavior](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssueBehavior) | 🔗 |
| C | [CapturedByBountyHuntersIssueQuest](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssueQuest) | 🔗 |
| C | [CapturedByBountyHuntersIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssueTypeDefiner) | 🔗 |
| C | [CaravanAmbushIssue](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssue) | 🔗 |
| C | [CaravanAmbushIssueBehavior](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssueBehavior) | 🔗 |
| C | [CaravanAmbushIssueQuest](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssueQuest) | 🔗 |
| C | [CaravanAmbushIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssueTypeDefiner) | 🔗 |
| C | [DefaultIssueEffects](/v1.3.15/zh/api/campaign-ext/DefaultIssueEffects) | 🔗 |
| C | [EscortMerchantCaravanIssue](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssue) | 🔗 |
| C | [EscortMerchantCaravanIssueBehavior](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssueBehavior) | 🔗 |
| C | [EscortMerchantCaravanIssueQuest](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssueQuest) | 🔗 |
| C | [EscortMerchantCaravanIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssueTypeDefiner) | 🔗 |
| C | [ExtortionByDesertersIssue](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssue) | 🔗 |
| C | [ExtortionByDesertersIssueBehavior](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssueBehavior) | 🔗 |
| C | [ExtortionByDesertersIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssueBehaviorTypeDefiner) | 🔗 |
| C | [ExtortionByDesertersIssueQuest](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssueQuest) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssue) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssueBehavior) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssue) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssueBehavior) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssueTypeDefiner) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssue) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssue) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssueQuest) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueQuestBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssueQuestBehavior) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssueTypeDefiner) | 🔗 |
| C | [HeadmanNeedsGrainIssue](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssue) | 🔗 |
| C | [HeadmanNeedsGrainIssueBehavior](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssueBehavior) | 🔗 |
| C | [HeadmanNeedsGrainIssueQuest](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssueQuest) | 🔗 |
| C | [HeadmanNeedsGrainIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssueTypeDefiner) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssue](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssue) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueBehavior](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssueBehavior) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueQuest](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssueQuest) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssueTypeDefiner) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssue](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssue) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueBehavior](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueBehavior) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueBehaviorTypeDefiner) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueQuest](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueQuest) | 🔗 |
| C | [HeroRelatedIssueCoolDownData](/v1.3.15/zh/api/campaign-ext/HeroRelatedIssueCoolDownData) | 🔗 |
| C | IssueBase | — |
| C | [IssueCoolDownData](/v1.3.15/zh/api/campaign-ext/IssueCoolDownData) | 🔗 |
| C | [IssueEffect](/v1.3.15/zh/api/campaign-ext/IssueEffect) | 🔗 |
| E | [IssueFrequency](/v1.3.15/zh/api/campaign-ext/IssueFrequency) | 🔗 |
| C | [IssueManager](/v1.3.15/zh/api/campaign-ext/IssueManager) | 🔗 |
| E | [IssueUpdateDetails](/v1.3.15/zh/api/campaign-ext/IssueUpdateDetails) | 🔗 |
| C | [LadysKnightOutIssue](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssue) | 🔗 |
| C | [LadysKnightOutIssueBehavior](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssueBehavior) | 🔗 |
| C | [LadysKnightOutIssueQuest](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssueQuest) | 🔗 |
| C | [LadysKnightOutIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssueTypeDefiner) | 🔗 |
| C | [LandLordCompanyOfTroubleIssue](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssue) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssueBehavior) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueQuest](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssueQuest) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssueTypeDefiner) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssue](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssue) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssueBehavior) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueQuest](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssueQuest) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssueTypeDefiner) | 🔗 |
| C | [LandLordNeedsManualLaborersIssue](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssue) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssueBehavior) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssueBehaviorTypeDefiner) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueQuest](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssueQuest) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssue](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssue) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssueBehavior) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssueBehaviorTypeDefiner) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueQuest](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssueQuest) | 🔗 |
| C | [LandlordTrainingForRetainersIssue](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssue) | 🔗 |
| C | [LandlordTrainingForRetainersIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssueBehavior) | 🔗 |
| C | [LandlordTrainingForRetainersIssueQuest](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssueQuest) | 🔗 |
| C | [LandlordTrainingForRetainersIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssueTypeDefiner) | 🔗 |
| C | [LesserNobleRevoltIssue](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssue) | 🔗 |
| C | [LesserNobleRevoltIssueBehavior](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssueBehavior) | 🔗 |
| C | [LesserNobleRevoltIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssueBehaviorTypeDefiner) | 🔗 |
| C | [LesserNobleRevoltIssueQuest](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssueQuest) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssue](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssue) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuest](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssueQuest) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuestBehavior](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssueQuestBehavior) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuestTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssueQuestTypeDefiner) | 🔗 |
| C | [LordNeedsHorsesIssue](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssue) | 🔗 |
| C | [LordNeedsHorsesIssueBehavior](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssueBehavior) | 🔗 |
| C | [LordNeedsHorsesIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssueBehaviorTypeDefiner) | 🔗 |
| C | [LordNeedsHorsesIssueQuest](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssueQuest) | 🔗 |
| C | [LordsNeedsTutorIssue](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssue) | 🔗 |
| C | [LordsNeedsTutorIssueBehavior](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssueBehavior) | 🔗 |
| C | [LordsNeedsTutorIssueQuest](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssueQuest) | 🔗 |
| C | [LordsNeedsTutorIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssueTypeDefiner) | 🔗 |
| C | [LordWantsRivalCapturedIssue](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssue) | 🔗 |
| C | [LordWantsRivalCapturedIssueBehavior](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssueBehavior) | 🔗 |
| C | [LordWantsRivalCapturedIssueQuest](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssueQuest) | 🔗 |
| C | [LordWantsRivalCapturedIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssueTypeDefiner) | 🔗 |
| C | [MerchantArmyOfPoachersIssue](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssue) | 🔗 |
| C | [MerchantArmyOfPoachersIssueBehavior](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssueBehavior) | 🔗 |
| C | [MerchantArmyOfPoachersIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssueBehaviorTypeDefiner) | 🔗 |
| C | [MerchantArmyOfPoachersIssueQuest](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssueQuest) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssue](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssue) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueQuest](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssueQuest) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueQuestBehavior](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssueQuestBehavior) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssueTypeDefiner) | 🔗 |
| C | [NearbyBanditBaseIssue](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssue) | 🔗 |
| C | [NearbyBanditBaseIssueBehavior](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssueBehavior) | 🔗 |
| C | [NearbyBanditBaseIssueQuest](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssueQuest) | 🔗 |
| C | [NearbyBanditBaseIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssueTypeDefiner) | 🔗 |
| S | [PotentialIssueData](/v1.3.15/zh/api/campaign-ext/PotentialIssueData) | 🔗 |
| C | [QuestSettlement](/v1.3.15/zh/api/campaign-ext/QuestSettlement) | 🔗 |
| C | [RaidAnEnemyTerritoryIssue](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryIssue) | 🔗 |
| C | [RaidAnEnemyTerritoryIssueBehavior](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryIssueBehavior) | 🔗 |
| C | [RaidAnEnemyTerritoryIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryIssueTypeDefiner) | 🔗 |
| C | [RaidAnEnemyTerritoryQuest](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryQuest) | 🔗 |
| C | [RevenueFarmingIssue](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssue) | 🔗 |
| C | [RevenueFarmingIssueBehavior](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssueBehavior) | 🔗 |
| C | [RevenueFarmingIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssueBehaviorTypeDefiner) | 🔗 |
| C | [RevenueFarmingIssueQuest](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssueQuest) | 🔗 |
| C | [RevenueVillage](/v1.3.15/zh/api/campaign-ext/RevenueVillage) | 🔗 |
| C | [ScoutEnemyGarrisonsIssue](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsIssue) | 🔗 |
| C | [ScoutEnemyGarrisonsIssueBehavior](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsIssueBehavior) | 🔗 |
| C | [ScoutEnemyGarrisonsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsIssueTypeDefiner) | 🔗 |
| C | [ScoutEnemyGarrisonsQuest](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsQuest) | 🔗 |
| C | [SmugglersIssue](/v1.3.15/zh/api/campaign-ext/SmugglersIssue) | 🔗 |
| C | [SmugglersIssueBehavior](/v1.3.15/zh/api/campaign-ext/SmugglersIssueBehavior) | 🔗 |
| C | [SmugglersIssueQuest](/v1.3.15/zh/api/campaign-ext/SmugglersIssueQuest) | 🔗 |
| C | [SmugglersIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/SmugglersIssueTypeDefiner) | 🔗 |
| C | [TheConquestOfSettlementIssue](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssue) | 🔗 |
| C | [TheConquestOfSettlementIssueBehavior](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssueBehavior) | 🔗 |
| C | [TheConquestOfSettlementIssueQuest](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssueQuest) | 🔗 |
| C | [TheConquestOfSettlementIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssueTypeDefiner) | 🔗 |
| C | [VillageEvent](/v1.3.15/zh/api/campaign-ext/VillageEvent) | 🔗 |
| S | [VillageEventOptionData](/v1.3.15/zh/api/campaign-ext/VillageEventOptionData) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssue](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssue) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueBehavior](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssueBehavior) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueQuest](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssueQuest) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssueTypeDefiner) | 🔗 |
| C | [VillageNeedsToolsIssue](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssue) | 🔗 |
| C | [VillageNeedsToolsIssueBehavior](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssueBehavior) | 🔗 |
| C | [VillageNeedsToolsIssueQuest](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssueQuest) | 🔗 |
| C | [VillageNeedsToolsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssueTypeDefiner) | 🔗 |

## TaleWorlds.CampaignSystem.Issues.IssueQuestTasks (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CaptureAndBringNpcTask](/v1.3.15/zh/api/campaign-ext/CaptureAndBringNpcTask) | 🔗 |
| C | [ChangeCommonAreaOwnerQuestTask](/v1.3.15/zh/api/campaign-ext/ChangeCommonAreaOwnerQuestTask) | 🔗 |
| C | [ChangeSettlementOwnerTask](/v1.3.15/zh/api/campaign-ext/ChangeSettlementOwnerTask) | 🔗 |
| C | [DefeatPartyQuestTask](/v1.3.15/zh/api/campaign-ext/DefeatPartyQuestTask) | 🔗 |
| C | [RaidVillageQuestTask](/v1.3.15/zh/api/campaign-ext/RaidVillageQuestTask) | 🔗 |
| C | [TalkToNpcQuestTask](/v1.3.15/zh/api/campaign-ext/TalkToNpcQuestTask) | 🔗 |

## TaleWorlds.CampaignSystem.LogEntries (56)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyCreationLogEntry](/v1.3.15/zh/api/campaign-ext/ArmyCreationLogEntry) | 🔗 |
| C | [ArmyDispersionLogEntry](/v1.3.15/zh/api/campaign-ext/ArmyDispersionLogEntry) | 🔗 |
| C | [BattleStartedLogEntry](/v1.3.15/zh/api/campaign-ext/BattleStartedLogEntry) | 🔗 |
| C | [BesiegeSettlementLogEntry](/v1.3.15/zh/api/campaign-ext/BesiegeSettlementLogEntry) | 🔗 |
| C | [ChangeAlleyOwnerLogEntry](/v1.3.15/zh/api/campaign-ext/ChangeAlleyOwnerLogEntry) | 🔗 |
| C | [ChangeRomanticStateLogEntry](/v1.3.15/zh/api/campaign-ext/ChangeRomanticStateLogEntry) | 🔗 |
| C | [ChangeSettlementOwnerLogEntry](/v1.3.15/zh/api/campaign-ext/ChangeSettlementOwnerLogEntry) | 🔗 |
| C | [CharacterBecameFugitiveLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterBecameFugitiveLogEntry) | 🔗 |
| C | [CharacterBornLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterBornLogEntry) | 🔗 |
| C | [CharacterInsultedLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterInsultedLogEntry) | 🔗 |
| C | [CharacterKilledLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterKilledLogEntry) | 🔗 |
| C | [CharacterMarriedLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterMarriedLogEntry) | 🔗 |
| E | [ChatNotificationType](/v1.3.15/zh/api/campaign-ext/ChatNotificationType) | 🔗 |
| C | [ChildbirthLogEntry](/v1.3.15/zh/api/campaign-ext/ChildbirthLogEntry) | 🔗 |
| C | [ClanChangeKingdomLogEntry](/v1.3.15/zh/api/campaign-ext/ClanChangeKingdomLogEntry) | 🔗 |
| C | [ClanDestroyedLogEntry](/v1.3.15/zh/api/campaign-ext/ClanDestroyedLogEntry) | 🔗 |
| C | [ClanLeaderChangedLogEntry](/v1.3.15/zh/api/campaign-ext/ClanLeaderChangedLogEntry) | 🔗 |
| C | [CommonAreaFightLogEntry](/v1.3.15/zh/api/campaign-ext/CommonAreaFightLogEntry) | 🔗 |
| C | [DeclareWarLogEntry](/v1.3.15/zh/api/campaign-ext/DeclareWarLogEntry) | 🔗 |
| C | [DefeatCharacterLogEntry](/v1.3.15/zh/api/campaign-ext/DefeatCharacterLogEntry) | 🔗 |
| C | [DestroyMobilePartyLogEntry](/v1.3.15/zh/api/campaign-ext/DestroyMobilePartyLogEntry) | 🔗 |
| C | [EndAllianceLogEntry](/v1.3.15/zh/api/campaign-ext/EndAllianceLogEntry) | 🔗 |
| C | [EndCallToWarAgreementLogEntry](/v1.3.15/zh/api/campaign-ext/EndCallToWarAgreementLogEntry) | 🔗 |
| C | [EndCaptivityLogEntry](/v1.3.15/zh/api/campaign-ext/EndCaptivityLogEntry) | 🔗 |
| C | [GatherArmyLogEntry](/v1.3.15/zh/api/campaign-ext/GatherArmyLogEntry) | 🔗 |
| I | [IChatNotification](/v1.3.15/zh/api/campaign-ext/IChatNotification) | 🔗 |
| I | [IEncyclopediaLog](/v1.3.15/zh/api/campaign-ext/IEncyclopediaLog) | 🔗 |
| E | [ImportanceEnum](/v1.3.15/zh/api/campaign-ext/ImportanceEnum) | 🔗 |
| C | [IssueQuestLogEntry](/v1.3.15/zh/api/campaign-ext/IssueQuestLogEntry) | 🔗 |
| C | [IssueQuestStartLogEntry](/v1.3.15/zh/api/campaign-ext/IssueQuestStartLogEntry) | 🔗 |
| I | [IWarLog](/v1.3.15/zh/api/campaign-ext/IWarLog) | 🔗 |
| C | [JournalLogEntry](/v1.3.15/zh/api/campaign-ext/JournalLogEntry) | 🔗 |
| C | [KingdomDecisionAddedLogEntry](/v1.3.15/zh/api/campaign-ext/KingdomDecisionAddedLogEntry) | 🔗 |
| C | [KingdomDecisionConcludedLogEntry](/v1.3.15/zh/api/campaign-ext/KingdomDecisionConcludedLogEntry) | 🔗 |
| C | [KingdomDestroyedLogEntry](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedLogEntry) | 🔗 |
| C | [LogEntry](/v1.3.15/zh/api/campaign-ext/LogEntry) | 🔗 |
| C | [LogEntryHistory](/v1.3.15/zh/api/campaign-ext/LogEntryHistory) | 🔗 |
| C | [MakePeaceLogEntry](/v1.3.15/zh/api/campaign-ext/MakePeaceLogEntry) | 🔗 |
| C | [MercenaryClanChangedKingdomLogEntry](/v1.3.15/zh/api/campaign-ext/MercenaryClanChangedKingdomLogEntry) | 🔗 |
| C | [OverruleInfluenceLogEntry](/v1.3.15/zh/api/campaign-ext/OverruleInfluenceLogEntry) | 🔗 |
| C | [PlayerAttackAlleyLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerAttackAlleyLogEntry) | 🔗 |
| C | [PlayerBattleEndedLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerBattleEndedLogEntry) | 🔗 |
| C | [PlayerCharacterChangedLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerCharacterChangedLogEntry) | 🔗 |
| C | [PlayerMeetLordLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerMeetLordLogEntry) | 🔗 |
| C | [PlayerReputationChangesLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerReputationChangesLogEntry) | 🔗 |
| C | [PlayerRetiredLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerRetiredLogEntry) | 🔗 |
| C | [PregnancyLogEntry](/v1.3.15/zh/api/campaign-ext/PregnancyLogEntry) | 🔗 |
| C | [RebellionStartedLogEntry](/v1.3.15/zh/api/campaign-ext/RebellionStartedLogEntry) | 🔗 |
| C | [SettlementClaimedLogEntry](/v1.3.15/zh/api/campaign-ext/SettlementClaimedLogEntry) | 🔗 |
| C | [SiegeAftermathLogEntry](/v1.3.15/zh/api/campaign-ext/SiegeAftermathLogEntry) | 🔗 |
| C | [StartAllianceLogEntry](/v1.3.15/zh/api/campaign-ext/StartAllianceLogEntry) | 🔗 |
| C | [StartCallToWarAgreementLogEntry](/v1.3.15/zh/api/campaign-ext/StartCallToWarAgreementLogEntry) | 🔗 |
| C | [TakePrisonerLogEntry](/v1.3.15/zh/api/campaign-ext/TakePrisonerLogEntry) | 🔗 |
| C | [TournamentWonLogEntry](/v1.3.15/zh/api/campaign-ext/TournamentWonLogEntry) | 🔗 |
| C | [TradeAgreementLogEntry](/v1.3.15/zh/api/campaign-ext/TradeAgreementLogEntry) | 🔗 |
| C | [VillageStateChangedLogEntry](/v1.3.15/zh/api/campaign-ext/VillageStateChangedLogEntry) | 🔗 |

## TaleWorlds.CampaignSystem.Map (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IInteractablePoint](/v1.3.15/zh/api/campaign-ext/IInteractablePoint) | 🔗 |
| I | [IMapPoint](/v1.3.15/zh/api/campaign-ext/IMapPoint) | 🔗 |
| I | [IMapScene](/v1.3.15/zh/api/campaign-ext/IMapScene) | 🔗 |
| I | [IMapSceneCreator](/v1.3.15/zh/api/campaign-ext/IMapSceneCreator) | 🔗 |
| S | [LocatableSearchData](/v1.3.15/zh/api/campaign-ext/LocatableSearchData) | 🔗 |
| C | [MapMarker](/v1.3.15/zh/api/campaign-ext/MapMarker) | 🔗 |
| C | [MapMarkerManager](/v1.3.15/zh/api/campaign-ext/MapMarkerManager) | 🔗 |
| S | [MapPatchData](/v1.3.15/zh/api/campaign-ext/MapPatchData) | 🔗 |
| C | [WeatherNode](/v1.3.15/zh/api/campaign-ext/WeatherNode) | 🔗 |

## TaleWorlds.CampaignSystem.Map.DistanceCache (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [ISettlementDataHolder](/v1.3.15/zh/api/campaign-ext/ISettlementDataHolder) | 🔗 |
| C | [NavigationCache](/v1.3.15/zh/api/campaign-ext/NavigationCache) | 🔗 |
| C | [SandBoxNavigationCache](/v1.3.15/zh/api/campaign-ext/SandBoxNavigationCache) | 🔗 |

## TaleWorlds.CampaignSystem.MapEvents (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [BattleTypes](/v1.3.15/zh/api/campaign-ext/BattleTypes) | 🔗 |
| C | [BlockadeBattleMapEvent](/v1.3.15/zh/api/campaign-ext/BlockadeBattleMapEvent) | 🔗 |
| C | [FieldBattleEventComponent](/v1.3.15/zh/api/campaign-ext/FieldBattleEventComponent) | 🔗 |
| C | [ForceSuppliesEventComponent](/v1.3.15/zh/api/campaign-ext/ForceSuppliesEventComponent) | 🔗 |
| C | [ForceVolunteersEventComponent](/v1.3.15/zh/api/campaign-ext/ForceVolunteersEventComponent) | 🔗 |
| E | [HideoutBattleEndState](./campaign-ext/HideoutBattleEndState) | 🔗 |
| C | [HideoutEventComponent](/v1.3.15/zh/api/campaign-ext/HideoutEventComponent) | 🔗 |
| I | [IMapEventVisual](/v1.3.15/zh/api/campaign-ext/IMapEventVisual) | 🔗 |
| C | [MapEvent](/v1.3.15/zh/api/campaign-ext/MapEvent) | 🔗 |
| C | [MapEventComponent](/v1.3.15/zh/api/campaign-ext/MapEventComponent) | 🔗 |
| C | [MapEventManager](/v1.3.15/zh/api/campaign-ext/MapEventManager) | 🔗 |
| C | [MapEventParty](/v1.3.15/zh/api/campaign-ext/MapEventParty) | 🔗 |
| C | [MapEventSide](/v1.3.15/zh/api/campaign-ext/MapEventSide) | 🔗 |
| E | [MapEventState](/v1.3.15/zh/api/campaign-ext/MapEventState) | 🔗 |
| E | [PowerCalculationContext](/v1.3.15/zh/api/campaign-ext/PowerCalculationContext) | 🔗 |
| C | [RaidEventComponent](/v1.3.15/zh/api/campaign-ext/RaidEventComponent) | 🔗 |
| C | [SiegeAmbushEventComponent](/v1.3.15/zh/api/campaign-ext/SiegeAmbushEventComponent) | 🔗 |

## TaleWorlds.CampaignSystem.MapNotificationTypes (27)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarOfferMapNotification](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarOfferMapNotification) | 🔗 |
| C | [AlleyLeaderDiedMapNotification](/v1.3.15/zh/api/campaign-ext/AlleyLeaderDiedMapNotification) | 🔗 |
| C | [AlleyUnderAttackMapNotification](/v1.3.15/zh/api/campaign-ext/AlleyUnderAttackMapNotification) | 🔗 |
| C | [AllianceOfferMapNotification](/v1.3.15/zh/api/campaign-ext/AllianceOfferMapNotification) | 🔗 |
| C | [ArmyCreationMapNotification](/v1.3.15/zh/api/campaign-ext/ArmyCreationMapNotification) | 🔗 |
| C | [ArmyDispersionMapNotification](/v1.3.15/zh/api/campaign-ext/ArmyDispersionMapNotification) | 🔗 |
| C | [ChildBornMapNotification](/v1.3.15/zh/api/campaign-ext/ChildBornMapNotification) | 🔗 |
| C | [DeathMapNotification](/v1.3.15/zh/api/campaign-ext/DeathMapNotification) | 🔗 |
| C | [EducationMapNotification](/v1.3.15/zh/api/campaign-ext/EducationMapNotification) | 🔗 |
| C | [HeirComeOfAgeMapNotification](/v1.3.15/zh/api/campaign-ext/HeirComeOfAgeMapNotification) | 🔗 |
| C | [KingdomDecisionMapNotification](/v1.3.15/zh/api/campaign-ext/KingdomDecisionMapNotification) | 🔗 |
| C | [KingdomDestroyedMapNotification](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedMapNotification) | 🔗 |
| C | [MarriageMapNotification](/v1.3.15/zh/api/campaign-ext/MarriageMapNotification) | 🔗 |
| C | [MarriageOfferMapNotification](/v1.3.15/zh/api/campaign-ext/MarriageOfferMapNotification) | 🔗 |
| C | [MercenaryOfferMapNotification](/v1.3.15/zh/api/campaign-ext/MercenaryOfferMapNotification) | 🔗 |
| C | [PartyLeaderChangeNotification](/v1.3.15/zh/api/campaign-ext/PartyLeaderChangeNotification) | 🔗 |
| C | [PeaceMapNotification](/v1.3.15/zh/api/campaign-ext/PeaceMapNotification) | 🔗 |
| C | [PeaceOfferMapNotification](/v1.3.15/zh/api/campaign-ext/PeaceOfferMapNotification) | 🔗 |
| C | [ProposeCallToWarOfferMapNotification](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarOfferMapNotification) | 🔗 |
| C | [RansomOfferMapNotification](/v1.3.15/zh/api/campaign-ext/RansomOfferMapNotification) | 🔗 |
| C | [SettlementOwnerChangedMapNotification](/v1.3.15/zh/api/campaign-ext/SettlementOwnerChangedMapNotification) | 🔗 |
| C | [SettlementRebellionMapNotification](/v1.3.15/zh/api/campaign-ext/SettlementRebellionMapNotification) | 🔗 |
| C | [SettlementUnderSiegeMapNotification](/v1.3.15/zh/api/campaign-ext/SettlementUnderSiegeMapNotification) | 🔗 |
| C | [TraitChangedMapNotification](/v1.3.15/zh/api/campaign-ext/TraitChangedMapNotification) | 🔗 |
| C | [TributeFinishedMapNotification](/v1.3.15/zh/api/campaign-ext/TributeFinishedMapNotification) | 🔗 |
| C | [VassalOfferMapNotification](/v1.3.15/zh/api/campaign-ext/VassalOfferMapNotification) | 🔗 |
| C | [WarMapNotification](/v1.3.15/zh/api/campaign-ext/WarMapNotification) | 🔗 |

## TaleWorlds.CampaignSystem.Naval (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AnchorPoint](/v1.3.15/zh/api/campaign-ext/AnchorPoint) | 🔗 |
| C | [DefaultFigureheads](/v1.3.15/zh/api/campaign-ext/DefaultFigureheads) | 🔗 |
| C | [Figurehead](/v1.3.15/zh/api/campaign-ext/Figurehead) | 🔗 |
| C | [Ship](/v1.3.15/zh/api/campaign-ext/Ship) | 🔗 |

## TaleWorlds.CampaignSystem.Party (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AiBehavior](/v1.3.15/zh/api/campaign-ext/AiBehavior) | 🔗 |
| C | [FleeingData](/v1.3.15/zh/api/campaign-ext/FleeingData) | 🔗 |
| C | [MobileParty](/v1.3.15/zh/api/campaign/MobileParty) | 🔗 |
| C | [MobilePartyAi](/v1.3.15/zh/api/campaign-ext/MobilePartyAi) | 🔗 |
| E | [MoveModeType](/v1.3.15/zh/api/campaign-ext/MoveModeType) | 🔗 |
| E | [NavigationType](/v1.3.15/zh/api/campaign-ext/NavigationType) | 🔗 |
| C | [PartyBase](/v1.3.15/zh/api/campaign/PartyBase) | 🔗 |
| C | [PartyCommand](/v1.3.15/zh/api/campaign-ext/PartyCommand) | 🔗 |
| E | [PartyCommandCode](/v1.3.15/zh/api/campaign-ext/PartyCommandCode) | 🔗 |
| E | [PartyObjective](/v1.3.15/zh/api/campaign-ext/PartyObjective) | 🔗 |
| E | [PartyRosterSide](/v1.3.15/zh/api/campaign-ext/PartyRosterSide) | 🔗 |
| C | [PartyScreenData](/v1.3.15/zh/api/campaign-ext/PartyScreenData) | 🔗 |
| C | [PartyScreenLogic](/v1.3.15/zh/api/campaign-ext/PartyScreenLogic) | 🔗 |
| S | [PartyScreenLogicInitializationData](/v1.3.15/zh/api/campaign-ext/PartyScreenLogicInitializationData) | 🔗 |
| C | [PartyTemplateObject](/v1.3.15/zh/api/campaign-ext/PartyTemplateObject) | 🔗 |
| S | [PartyTemplateStack](/v1.3.15/zh/api/campaign-ext/PartyTemplateStack) | 🔗 |
| S | [ShipTemplateStack](/v1.3.15/zh/api/campaign-ext/ShipTemplateStack) | 🔗 |
| E | [TransferState](/v1.3.15/zh/api/campaign-ext/TransferState) | 🔗 |
| C | [TroopComparer](/v1.3.15/zh/api/campaign-ext/TroopComparer) | 🔗 |
| E | [TroopSortType](/v1.3.15/zh/api/campaign-ext/TroopSortType) | 🔗 |
| S | [TroopTradeDifference](/v1.3.15/zh/api/campaign-ext/TroopTradeDifference) | 🔗 |
| E | [TroopType](/v1.3.15/zh/api/campaign-ext/TroopType) | 🔗 |

## TaleWorlds.CampaignSystem.Party.PartyComponents (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BanditPartyComponent](/v1.3.15/zh/api/campaign-ext/BanditPartyComponent) | 🔗 |
| C | [CaravanPartyComponent](/v1.3.15/zh/api/campaign-ext/CaravanPartyComponent) | 🔗 |
| C | [CustomPartyComponent](/v1.3.15/zh/api/campaign-ext/CustomPartyComponent) | 🔗 |
| C | [GarrisonPartyComponent](/v1.3.15/zh/api/campaign-ext/GarrisonPartyComponent) | 🔗 |
| C | [InitializationArgs](/v1.3.15/zh/api/campaign-ext/InitializationArgs) | 🔗 |
| C | [LordPartyComponent](/v1.3.15/zh/api/campaign-ext/LordPartyComponent) | 🔗 |
| C | [MilitiaPartyComponent](/v1.3.15/zh/api/campaign-ext/MilitiaPartyComponent) | 🔗 |
| C | [PartyComponent](/v1.3.15/zh/api/campaign-ext/PartyComponent) | 🔗 |
| C | [PatrolPartyComponent](/v1.3.15/zh/api/campaign-ext/PatrolPartyComponent) | 🔗 |
| C | [VillagerPartyComponent](/v1.3.15/zh/api/campaign-ext/VillagerPartyComponent) | 🔗 |
| C | [WarPartyComponent](/v1.3.15/zh/api/campaign-ext/WarPartyComponent) | 🔗 |

## TaleWorlds.CampaignSystem.Roster (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FlattenedTroopRoster](/v1.3.15/zh/api/campaign-ext/FlattenedTroopRoster) | 🔗 |
| S | [FlattenedTroopRosterElement](/v1.3.15/zh/api/campaign-ext/FlattenedTroopRosterElement) | 🔗 |
| C | [ItemRoster](/v1.3.15/zh/api/campaign-ext/ItemRoster) | 🔗 |
| E | [RosterTroopState](/v1.3.15/zh/api/campaign-ext/RosterTroopState) | 🔗 |
| C | [TroopRoster](/v1.3.15/zh/api/campaign-ext/TroopRoster) | 🔗 |
| S | [TroopRosterElement](/v1.3.15/zh/api/campaign-ext/TroopRosterElement) | 🔗 |

## TaleWorlds.CampaignSystem.SaveCompability (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyDispersionReasonEnumResolver](/v1.3.15/zh/api/campaign-ext/ArmyDispersionReasonEnumResolver) | 🔗 |
| C | [BattleTypeEnumResolver](/v1.3.15/zh/api/campaign-ext/BattleTypeEnumResolver) | 🔗 |
| C | [CharacterAttributesResolver](/v1.3.15/zh/api/campaign-ext/CharacterAttributesResolver) | 🔗 |
| C | [CharacterPerksResolver](/v1.3.15/zh/api/campaign-ext/CharacterPerksResolver) | 🔗 |
| C | [CharacterTraitsResolver](/v1.3.15/zh/api/campaign-ext/CharacterTraitsResolver) | 🔗 |
| C | [EndCaptivityDetailEnumResolver](/v1.3.15/zh/api/campaign-ext/EndCaptivityDetailEnumResolver) | 🔗 |
| C | [HeroDeveloperResolver](/v1.3.15/zh/api/campaign-ext/HeroDeveloperResolver) | 🔗 |
| C | [HeroTraitDeveloperResolver](/v1.3.15/zh/api/campaign-ext/HeroTraitDeveloperResolver) | 🔗 |

## TaleWorlds.CampaignSystem.SceneInformationPopupTypes (28)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AntiEmpireConspiracyBeginsSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/AntiEmpireConspiracyBeginsSceneNotificationItem) | 🔗 |
| C | [BecomeKingSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/BecomeKingSceneNotificationItem) | 🔗 |
| C | [CampaignSceneNotificationHelper](/v1.3.15/zh/api/campaign-ext/CampaignSceneNotificationHelper) | 🔗 |
| C | [ClanMemberPeaceDeathSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/ClanMemberPeaceDeathSceneNotificationItem) | 🔗 |
| C | [ClanMemberWarDeathSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/ClanMemberWarDeathSceneNotificationItem) | 🔗 |
| C | [DeathOldAgeSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/DeathOldAgeSceneNotificationItem) | 🔗 |
| C | [DeclareDragonBannerSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/DeclareDragonBannerSceneNotificationItem) | 🔗 |
| C | [EmpireConspiracyBeginsSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/EmpireConspiracyBeginsSceneNotificationItem) | 🔗 |
| C | [EmpireConspiracySupportsSceneNotificationItemBase](/v1.3.15/zh/api/campaign-ext/EmpireConspiracySupportsSceneNotificationItemBase) | 🔗 |
| C | [FindingFirstBannerPieceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/FindingFirstBannerPieceSceneNotificationItem) | 🔗 |
| C | [FindingSecondBannerPieceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/FindingSecondBannerPieceSceneNotificationItem) | 🔗 |
| C | [FindingThirdBannerPieceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/FindingThirdBannerPieceSceneNotificationItem) | 🔗 |
| C | [HeirComingOfAgeFemaleSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/HeirComingOfAgeFemaleSceneNotificationItem) | 🔗 |
| C | [HeirComingOfAgeSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/HeirComingOfAgeSceneNotificationItem) | 🔗 |
| C | [HeroExecutionSceneNotificationData](/v1.3.15/zh/api/campaign-ext/HeroExecutionSceneNotificationData) | 🔗 |
| C | [JoinKingdomSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/JoinKingdomSceneNotificationItem) | 🔗 |
| C | [KingdomCreatedSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/KingdomCreatedSceneNotificationItem) | 🔗 |
| C | [KingdomDestroyedSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedSceneNotificationItem) | 🔗 |
| C | [MainHeroBattleDeathNotificationItem](/v1.3.15/zh/api/campaign-ext/MainHeroBattleDeathNotificationItem) | 🔗 |
| C | [MainHeroBattleVictoryDeathNotificationItem](/v1.3.15/zh/api/campaign-ext/MainHeroBattleVictoryDeathNotificationItem) | 🔗 |
| C | [MarriageSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/MarriageSceneNotificationItem) | 🔗 |
| C | [NavalDeathSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/NavalDeathSceneNotificationItem) | 🔗 |
| C | [NewBornFemaleHeroSceneAlternateNotificationItem](/v1.3.15/zh/api/campaign-ext/NewBornFemaleHeroSceneAlternateNotificationItem) | 🔗 |
| C | [NewBornFemaleHeroSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/NewBornFemaleHeroSceneNotificationItem) | 🔗 |
| C | [NewBornSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/NewBornSceneNotificationItem) | 🔗 |
| C | [PledgeAllegianceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/PledgeAllegianceSceneNotificationItem) | 🔗 |
| C | [ProEmpireConspiracyBeginsSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/ProEmpireConspiracyBeginsSceneNotificationItem) | 🔗 |
| C | [SupportedFactionDefeatedSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/SupportedFactionDefeatedSceneNotificationItem) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements (21)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Alley](/v1.3.15/zh/api/campaign-ext/Alley) | 🔗 |
| E | [AreaState](/v1.3.15/zh/api/campaign-ext/AreaState) | 🔗 |
| C | [DefaultVillageTypes](/v1.3.15/zh/api/campaign-ext/DefaultVillageTypes) | 🔗 |
| C | [Fief](/v1.3.15/zh/api/campaign-ext/Fief) | 🔗 |
| C | [Hideout](/v1.3.15/zh/api/campaign-ext/Hideout) | 🔗 |
| I | [IMarketData](/v1.3.15/zh/api/campaign-ext/IMarketData) | 🔗 |
| I | [ISpottable](/v1.3.15/zh/api/campaign-ext/ISpottable) | 🔗 |
| S | [ItemData](/v1.3.15/zh/api/campaign-ext/ItemData) | 🔗 |
| E | [ProsperityLevel](/v1.3.15/zh/api/campaign-ext/ProsperityLevel) | 🔗 |
| C | [RetirementSettlementComponent](/v1.3.15/zh/api/campaign-ext/RetirementSettlementComponent) | 🔗 |
| S | [SellLog](/v1.3.15/zh/api/campaign-ext/SellLog) | 🔗 |
| C | Settlement | — |
| C | [SettlementArea](/v1.3.15/zh/api/campaign-ext/SettlementArea) | 🔗 |
| C | [SettlementComponent](/v1.3.15/zh/api/campaign-ext/SettlementComponent) | 🔗 |
| E | [SiegeState](/v1.3.15/zh/api/campaign-ext/SiegeState) | 🔗 |
| C | [Town](/v1.3.15/zh/api/campaign-ext/Town) | 🔗 |
| C | [TownMarketData](/v1.3.15/zh/api/campaign-ext/TownMarketData) | 🔗 |
| C | Village | — |
| C | [VillageMarketData](/v1.3.15/zh/api/campaign-ext/VillageMarketData) | 🔗 |
| E | [VillageStates](/v1.3.15/zh/api/campaign-ext/VillageStates) | 🔗 |
| C | [VillageType](/v1.3.15/zh/api/campaign-ext/VillageType) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Buildings (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Building](/v1.3.15/zh/api/campaign-ext/Building) | 🔗 |
| E | [BuildingEffectEnum](/v1.3.15/zh/api/campaign-ext/BuildingEffectEnum) | 🔗 |
| E | [BuildingEffectIncrementType](/v1.3.15/zh/api/campaign-ext/BuildingEffectIncrementType) | 🔗 |
| C | [BuildingType](/v1.3.15/zh/api/campaign-ext/BuildingType) | 🔗 |
| C | [DefaultBuildingTypes](/v1.3.15/zh/api/campaign-ext/DefaultBuildingTypes) | 🔗 |
| S | [EffectInfo](/v1.3.15/zh/api/campaign-ext/EffectInfo) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Locations (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AccompanyingCharacter](/v1.3.15/zh/api/campaign-ext/AccompanyingCharacter) | 🔗 |
| E | [CharacterRelations](/v1.3.15/zh/api/campaign-ext/CharacterRelations) | 🔗 |
| C | [Location](/v1.3.15/zh/api/campaign-ext/Location) | 🔗 |
| C | [LocationCharacter](/v1.3.15/zh/api/campaign-ext/LocationCharacter) | 🔗 |
| C | [LocationComplex](/v1.3.15/zh/api/campaign-ext/LocationComplex) | 🔗 |
| C | [LocationComplexTemplate](/v1.3.15/zh/api/campaign-ext/LocationComplexTemplate) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Workshops (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [Production](/v1.3.15/zh/api/campaign-ext/Production) | 🔗 |
| C | Workshop | — |
| C | [WorkshopType](/v1.3.15/zh/api/campaign-ext/WorkshopType) | 🔗 |

## TaleWorlds.CampaignSystem.Siege (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BesiegerCamp](/v1.3.15/zh/api/campaign-ext/BesiegerCamp) | 🔗 |
| C | [DefaultSiegeStrategies](/v1.3.15/zh/api/campaign-ext/DefaultSiegeStrategies) | 🔗 |
| I | [ISiegeEventSide](/v1.3.15/zh/api/campaign-ext/ISiegeEventSide) | 🔗 |
| I | [ISiegeEventVisual](/v1.3.15/zh/api/campaign-ext/ISiegeEventVisual) | 🔗 |
| C | [PlayerSiege](/v1.3.15/zh/api/campaign-ext/PlayerSiege) | 🔗 |
| C | [RangedSiegeEngine](/v1.3.15/zh/api/campaign-ext/RangedSiegeEngine) | 🔗 |
| C | [RemovedSiegeEngine](/v1.3.15/zh/api/campaign-ext/RemovedSiegeEngine) | 🔗 |
| E | [SiegeBombardTargets](/v1.3.15/zh/api/campaign-ext/SiegeBombardTargets) | 🔗 |
| C | [SiegeEngineConstructionProgress](/v1.3.15/zh/api/campaign-ext/SiegeEngineConstructionProgress) | 🔗 |
| C | [SiegeEngineMissile](/v1.3.15/zh/api/campaign-ext/SiegeEngineMissile) | 🔗 |
| C | [SiegeEnginesContainer](/v1.3.15/zh/api/campaign-ext/SiegeEnginesContainer) | 🔗 |
| C | [SiegeEvent](/v1.3.15/zh/api/campaign-ext/SiegeEvent) | 🔗 |
| C | [SiegeEventManager](/v1.3.15/zh/api/campaign-ext/SiegeEventManager) | 🔗 |
| C | [SiegeStrategy](/v1.3.15/zh/api/campaign-ext/SiegeStrategy) | 🔗 |

## TaleWorlds.CampaignSystem.TournamentGames (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FightTournamentGame](/v1.3.15/zh/api/campaign-ext/FightTournamentGame) | 🔗 |
| I | [ITournamentManager](/v1.3.15/zh/api/campaign-ext/ITournamentManager) | 🔗 |
| E | [MatchState](/v1.3.15/zh/api/campaign-ext/MatchState) | 🔗 |
| E | [QualificationMode](/v1.3.15/zh/api/campaign-ext/QualificationMode) | 🔗 |
| C | [TournamentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TournamentCampaignBehavior) | 🔗 |
| C | [TournamentGame](/v1.3.15/zh/api/campaign-ext/TournamentGame) | 🔗 |
| C | [TournamentManager](/v1.3.15/zh/api/campaign-ext/TournamentManager) | 🔗 |
| C | [TournamentMatch](/v1.3.15/zh/api/campaign-ext/TournamentMatch) | 🔗 |
| C | [TournamentParticipant](/v1.3.15/zh/api/campaign-ext/TournamentParticipant) | 🔗 |
| C | [TournamentRound](/v1.3.15/zh/api/campaign-ext/TournamentRound) | 🔗 |
| C | [TournamentTeam](/v1.3.15/zh/api/campaign-ext/TournamentTeam) | 🔗 |

## TaleWorlds.CampaignSystem.TroopSuppliers (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyGroupTroopSupplier](/v1.3.15/zh/api/campaign-ext/PartyGroupTroopSupplier) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection (34)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ActionCampaignOptionData](/v1.3.15/zh/api/campaign-ext/ActionCampaignOptionData) | 🔗 |
| C | [BannerEditorVM](/v1.3.15/zh/api/campaign-ext/BannerEditorVM) | 🔗 |
| C | [BooleanCampaignOptionData](/v1.3.15/zh/api/campaign-ext/BooleanCampaignOptionData) | 🔗 |
| C | [CampaignOptionData](/v1.3.15/zh/api/campaign-ext/CampaignOptionData) | 🔗 |
| E | [CampaignOptionDataType](/v1.3.15/zh/api/campaign-ext/CampaignOptionDataType) | 🔗 |
| S | [CampaignOptionDisableStatus](/v1.3.15/zh/api/campaign-ext/CampaignOptionDisableStatus) | 🔗 |
| E | [CampaignOptionEnableState](/v1.3.15/zh/api/campaign-ext/CampaignOptionEnableState) | 🔗 |
| C | [CampaignOptionItemVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionItemVM) | 🔗 |
| C | [CampaignOptionsControllerVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionsControllerVM) | 🔗 |
| E | [CampaignOptionsDifficultyPresets](/v1.3.15/zh/api/campaign-ext/CampaignOptionsDifficultyPresets) | 🔗 |
| C | [CampaignOptionSelectorVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionSelectorVM) | 🔗 |
| C | [CampaignOptionsManager](/v1.3.15/zh/api/campaign-ext/CampaignOptionsManager) | 🔗 |
| C | [CampaignOptionsVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionsVM) | 🔗 |
| C | [CampaignUIHelper](/v1.3.15/zh/api/campaign-ext/CampaignUIHelper) | 🔗 |
| C | [CharacterAttributeComparer](/v1.3.15/zh/api/campaign-ext/CharacterAttributeComparer) | 🔗 |
| C | [DefaultCampaignOptionsProvider](/v1.3.15/zh/api/campaign-ext/DefaultCampaignOptionsProvider) | 🔗 |
| C | [HeroViewModel](/v1.3.15/zh/api/campaign-ext/HeroViewModel) | 🔗 |
| C | [HeroVM](/v1.3.15/zh/api/campaign-ext/HeroVM) | 🔗 |
| I | [ICampaignOptionData](/v1.3.15/zh/api/campaign-ext/ICampaignOptionData) | 🔗 |
| I | [ICampaignOptionProvider](/v1.3.15/zh/api/campaign-ext/ICampaignOptionProvider) | 🔗 |
| E | IssueQuestFlags | — |
| C | [MobilePartyPrecedenceComparer](/v1.3.15/zh/api/campaign-ext/MobilePartyPrecedenceComparer) | 🔗 |
| C | [NumericCampaignOptionData](/v1.3.15/zh/api/campaign-ext/NumericCampaignOptionData) | 🔗 |
| C | [PlayerInspectedPartySpeedEvent](/v1.3.15/zh/api/campaign-ext/PlayerInspectedPartySpeedEvent) | 🔗 |
| C | [ProductInputOutputEqualityComparer](/v1.3.15/zh/api/campaign-ext/ProductInputOutputEqualityComparer) | 🔗 |
| C | [ProfitItemPropertyVM](/v1.3.15/zh/api/campaign-ext/ProfitItemPropertyVM) | 🔗 |
| E | [PropertyType](/v1.3.15/zh/api/campaign-ext/PropertyType) | 🔗 |
| C | [SelectableFiefItemPropertyVM](/v1.3.15/zh/api/campaign-ext/SelectableFiefItemPropertyVM) | 🔗 |
| C | [SelectableItemPropertyVM](/v1.3.15/zh/api/campaign-ext/SelectableItemPropertyVM) | 🔗 |
| C | [SelectionCampaignOptionData](/v1.3.15/zh/api/campaign-ext/SelectionCampaignOptionData) | 🔗 |
| C | [SkillObjectComparer](/v1.3.15/zh/api/campaign-ext/SkillObjectComparer) | 🔗 |
| E | [SortState](/v1.3.15/zh/api/campaign-ext/SortState) | 🔗 |
| C | [TooltipRefresherCollection](/v1.3.15/zh/api/campaign-ext/TooltipRefresherCollection) | 🔗 |
| C | [UIColors](/v1.3.15/zh/api/campaign-ext/UIColors) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyCohesionBoostedByPlayerEvent](/v1.3.15/zh/api/campaign-ext/ArmyCohesionBoostedByPlayerEvent) | 🔗 |
| C | [ArmyManagementBoostEventVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementBoostEventVM) | 🔗 |
| C | [ArmyManagementItemVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementItemVM) | 🔗 |
| C | [ArmyManagementSortControllerVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementSortControllerVM) | 🔗 |
| C | [ArmyManagementVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementVM) | 🔗 |
| E | [BoostCurrency](/v1.3.15/zh/api/campaign-ext/BoostCurrency) | 🔗 |
| C | [ItemClanComparer](/v1.3.15/zh/api/campaign-ext/ItemClanComparer) | 🔗 |
| C | [ItemComparerBase](/v1.3.15/zh/api/campaign-ext/ItemComparerBase) | 🔗 |
| C | [ItemCostComparer](/v1.3.15/zh/api/campaign-ext/ItemCostComparer) | 🔗 |
| C | [ItemDistanceComparer](/v1.3.15/zh/api/campaign-ext/ItemDistanceComparer) | 🔗 |
| C | [ItemNameComparer](/v1.3.15/zh/api/campaign-ext/ItemNameComparer) | 🔗 |
| C | [ItemShipCountComparer](/v1.3.15/zh/api/campaign-ext/ItemShipCountComparer) | 🔗 |
| C | [ItemStrengthComparer](/v1.3.15/zh/api/campaign-ext/ItemStrengthComparer) | 🔗 |
| C | [ManagementItemComparer](/v1.3.15/zh/api/campaign-ext/ManagementItemComparer) | 🔗 |
| C | [PartyAddedToArmyByPlayerEvent](/v1.3.15/zh/api/campaign-ext/PartyAddedToArmyByPlayerEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Barter (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterItemVM](/v1.3.15/zh/api/campaign-ext/BarterItemVM) | 🔗 |
| C | [BarterVM](/v1.3.15/zh/api/campaign-ext/BarterVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BirthAndDeathOptionsProvider](./campaign-ext/BirthAndDeathOptionsProvider) | 🔗 |
| C | [BirthAndDeathSubModule](./campaign-ext/BirthAndDeathSubModule) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationClanNamingStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationClanNamingStageVM) | 🔗 |
| C | [CharacterCreationCultureFeatVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureFeatVM) | 🔗 |
| C | [CharacterCreationCultureStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureStageVM) | 🔗 |
| C | [CharacterCreationCultureVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureVM) | 🔗 |
| C | [CharacterCreationGainedAttributeItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainedAttributeItemVM) | 🔗 |
| C | [CharacterCreationGainedPropertiesVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainedPropertiesVM) | 🔗 |
| C | [CharacterCreationGainedSkillItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainedSkillItemVM) | 🔗 |
| C | [CharacterCreationGainGroupItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainGroupItemVM) | 🔗 |
| C | [CharacterCreationNarrativeStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationNarrativeStageVM) | 🔗 |
| C | [CharacterCreationOptionVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationOptionVM) | 🔗 |
| C | [CharacterCreationReviewStageItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationReviewStageItemVM) | 🔗 |
| C | [CharacterCreationReviewStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationReviewStageVM) | 🔗 |
| C | [CharacterCreationStageBaseVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationStageBaseVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationOptionsStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationOptionsStageVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AttributeBoundSkillItemVM](/v1.3.15/zh/api/campaign-ext/AttributeBoundSkillItemVM) | 🔗 |
| C | [CharacterAttributeItemVM](/v1.3.15/zh/api/campaign-ext/CharacterAttributeItemVM) | 🔗 |
| C | [CharacterDeveloperHeroItemVM](/v1.3.15/zh/api/campaign-ext/CharacterDeveloperHeroItemVM) | 🔗 |
| C | [CharacterDeveloperVM](/v1.3.15/zh/api/campaign-ext/CharacterDeveloperVM) | 🔗 |
| C | [FocusAddedByPlayerEvent](/v1.3.15/zh/api/campaign-ext/FocusAddedByPlayerEvent) | 🔗 |
| E | [PerkAlternativeType](/v1.3.15/zh/api/campaign-ext/PerkAlternativeType) | 🔗 |
| E | [PerkStates](/v1.3.15/zh/api/campaign-ext/PerkStates) | 🔗 |
| C | [PerkVM](/v1.3.15/zh/api/campaign-ext/PerkVM) | 🔗 |
| C | [SkillVM](/v1.3.15/zh/api/campaign-ext/SkillVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PerkSelectedByPlayerEvent](/v1.3.15/zh/api/campaign-ext/PerkSelectedByPlayerEvent) | 🔗 |
| C | [PerkSelectionItemVM](/v1.3.15/zh/api/campaign-ext/PerkSelectionItemVM) | 🔗 |
| C | [PerkSelectionToggleEvent](/v1.3.15/zh/api/campaign-ext/PerkSelectionToggleEvent) | 🔗 |
| C | [PerkSelectionVM](/v1.3.15/zh/api/campaign-ext/PerkSelectionVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [CardSelectionItemSpriteType](/v1.3.15/zh/api/campaign-ext/CardSelectionItemSpriteType) | 🔗 |
| C | [ClanCardSelectionPopupItemPropertyVM](/v1.3.15/zh/api/campaign-ext/ClanCardSelectionPopupItemPropertyVM) | 🔗 |
| C | [ClanCardSelectionPopupItemVM](/v1.3.15/zh/api/campaign-ext/ClanCardSelectionPopupItemVM) | 🔗 |
| C | [ClanCardSelectionPopupVM](/v1.3.15/zh/api/campaign-ext/ClanCardSelectionPopupVM) | 🔗 |
| C | [ClanFinanceExpenseItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceExpenseItemVM) | 🔗 |
| C | [ClanFinanceIncomeItemBaseVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceIncomeItemBaseVM) | 🔗 |
| C | [ClanLordItemVM](/v1.3.15/zh/api/campaign-ext/ClanLordItemVM) | 🔗 |
| C | [ClanLordStatusItemVM](/v1.3.15/zh/api/campaign-ext/ClanLordStatusItemVM) | 🔗 |
| C | [ClanManagementVM](/v1.3.15/zh/api/campaign-ext/ClanManagementVM) | 🔗 |
| C | [ClanPartyBehaviorSelectorVM](/v1.3.15/zh/api/campaign-ext/ClanPartyBehaviorSelectorVM) | 🔗 |
| C | [ClanPartyItemVM](/v1.3.15/zh/api/campaign-ext/ClanPartyItemVM) | 🔗 |
| C | [ClanPartyMemberItemVM](/v1.3.15/zh/api/campaign-ext/ClanPartyMemberItemVM) | 🔗 |
| E | [ClanPartyType](/v1.3.15/zh/api/campaign-ext/ClanPartyType) | 🔗 |
| C | [ClanRoleAssignedThroughClanScreenEvent](/v1.3.15/zh/api/campaign-ext/ClanRoleAssignedThroughClanScreenEvent) | 🔗 |
| C | [ClanRoleItemVM](/v1.3.15/zh/api/campaign-ext/ClanRoleItemVM) | 🔗 |
| C | [ClanRoleMemberItemVM](/v1.3.15/zh/api/campaign-ext/ClanRoleMemberItemVM) | 🔗 |
| C | [ClanSettlementItemVM](/v1.3.15/zh/api/campaign-ext/ClanSettlementItemVM) | 🔗 |
| E | [IncomeTypes](/v1.3.15/zh/api/campaign-ext/IncomeTypes) | 🔗 |
| E | [LordStatus](/v1.3.15/zh/api/campaign-ext/LordStatus) | 🔗 |
| E | [TaxType](/v1.3.15/zh/api/campaign-ext/TaxType) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories (26)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AlleyItemComparerBase](/v1.3.15/zh/api/campaign-ext/AlleyItemComparerBase) | 🔗 |
| C | [AlleyItemIncomeComparer](/v1.3.15/zh/api/campaign-ext/AlleyItemIncomeComparer) | 🔗 |
| C | [AlleyItemLocationComparer](/v1.3.15/zh/api/campaign-ext/AlleyItemLocationComparer) | 🔗 |
| C | [AlleyItemNameComparer](/v1.3.15/zh/api/campaign-ext/AlleyItemNameComparer) | 🔗 |
| C | [ClanFiefsSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanFiefsSortControllerVM) | 🔗 |
| C | [ClanFiefsVM](/v1.3.15/zh/api/campaign-ext/ClanFiefsVM) | 🔗 |
| C | [ClanIncomeSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanIncomeSortControllerVM) | 🔗 |
| C | [ClanIncomeVM](/v1.3.15/zh/api/campaign-ext/ClanIncomeVM) | 🔗 |
| C | [ClanMembersSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanMembersSortControllerVM) | 🔗 |
| C | [ClanMembersVM](/v1.3.15/zh/api/campaign-ext/ClanMembersVM) | 🔗 |
| C | [ClanPartiesSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanPartiesSortControllerVM) | 🔗 |
| C | [ClanPartiesVM](/v1.3.15/zh/api/campaign-ext/ClanPartiesVM) | 🔗 |
| C | ItemComparerBase | — |
| C | [ItemGovernorComparer](/v1.3.15/zh/api/campaign-ext/ItemGovernorComparer) | 🔗 |
| C | [ItemLocationComparer](/v1.3.15/zh/api/campaign-ext/ItemLocationComparer) | 🔗 |
| C | ItemNameComparer | — |
| C | [ItemProfitComparer](/v1.3.15/zh/api/campaign-ext/ItemProfitComparer) | 🔗 |
| C | ItemShipCountComparer | — |
| C | [ItemSizeComparer](/v1.3.15/zh/api/campaign-ext/ItemSizeComparer) | 🔗 |
| C | [SupporterItemComparerBase](/v1.3.15/zh/api/campaign-ext/SupporterItemComparerBase) | 🔗 |
| C | [SupporterItemIncomeComparer](/v1.3.15/zh/api/campaign-ext/SupporterItemIncomeComparer) | 🔗 |
| C | [SupporterItemNameComparer](/v1.3.15/zh/api/campaign-ext/SupporterItemNameComparer) | 🔗 |
| C | [WorkshopItemComparerBase](/v1.3.15/zh/api/campaign-ext/WorkshopItemComparerBase) | 🔗 |
| C | [WorkshopItemIncomeComparer](/v1.3.15/zh/api/campaign-ext/WorkshopItemIncomeComparer) | 🔗 |
| C | [WorkshopItemLocationComparer](/v1.3.15/zh/api/campaign-ext/WorkshopItemLocationComparer) | 🔗 |
| C | [WorkshopItemNameComparer](/v1.3.15/zh/api/campaign-ext/WorkshopItemNameComparer) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClanFinanceAlleyItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceAlleyItemVM) | 🔗 |
| C | [ClanFinanceCommonAreaItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceCommonAreaItemVM) | 🔗 |
| C | [ClanFinanceMercenaryItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceMercenaryItemVM) | 🔗 |
| C | [ClanFinanceTownItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceTownItemVM) | 🔗 |
| C | [ClanFinanceWorkshopItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceWorkshopItemVM) | 🔗 |
| C | [WorkshopPercentageSelectorItemVM](/v1.3.15/zh/api/campaign-ext/WorkshopPercentageSelectorItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClanSupporterGroupVM](/v1.3.15/zh/api/campaign-ext/ClanSupporterGroupVM) | 🔗 |
| C | [ClanSupporterItemVM](/v1.3.15/zh/api/campaign-ext/ClanSupporterItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Conversation (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ConversationAggressivePartyItemVM](/v1.3.15/zh/api/campaign-ext/ConversationAggressivePartyItemVM) | 🔗 |
| C | [ConversationItemVM](/v1.3.15/zh/api/campaign-ext/ConversationItemVM) | 🔗 |
| C | [MissionConversationVM](/v1.3.15/zh/api/campaign-ext/MissionConversationVM) | 🔗 |
| C | [PersuasionOptionVM](/v1.3.15/zh/api/campaign-ext/PersuasionOptionVM) | 🔗 |
| C | [PersuasionVM](/v1.3.15/zh/api/campaign-ext/PersuasionVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Education (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EducationGainedAttributeItemVM](/v1.3.15/zh/api/campaign-ext/EducationGainedAttributeItemVM) | 🔗 |
| C | [EducationGainedPropertiesVM](/v1.3.15/zh/api/campaign-ext/EducationGainedPropertiesVM) | 🔗 |
| C | [EducationGainedSkillItemVM](/v1.3.15/zh/api/campaign-ext/EducationGainedSkillItemVM) | 🔗 |
| C | [EducationGainGroupItemVM](/v1.3.15/zh/api/campaign-ext/EducationGainGroupItemVM) | 🔗 |
| C | [EducationOptionVM](/v1.3.15/zh/api/campaign-ext/EducationOptionVM) | 🔗 |
| C | [EducationReviewItemVM](/v1.3.15/zh/api/campaign-ext/EducationReviewItemVM) | 🔗 |
| C | [EducationReviewVM](/v1.3.15/zh/api/campaign-ext/EducationReviewVM) | 🔗 |
| C | [EducationVM](/v1.3.15/zh/api/campaign-ext/EducationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [DescriptionType](/v1.3.15/zh/api/campaign-ext/DescriptionType) | 🔗 |
| C | [EncyclopediaHomeVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaHomeVM) | 🔗 |
| C | [EncyclopediaLinkVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaLinkVM) | 🔗 |
| C | [EncyclopediaNavigatorVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaNavigatorVM) | 🔗 |
| C | [EncyclopediaPageChangedEvent](/v1.3.15/zh/api/campaign-ext/EncyclopediaPageChangedEvent) | 🔗 |
| E | [EncyclopediaPages](/v1.3.15/zh/api/campaign-ext/EncyclopediaPages) | 🔗 |
| C | [EncyclopediaSearchResultVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSearchResultVM) | 🔗 |
| C | [EncyclopediaSettlementPageStatItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSettlementPageStatItemVM) | 🔗 |
| C | [OnEncyclopediaFilterActivatedEvent](/v1.3.15/zh/api/campaign-ext/OnEncyclopediaFilterActivatedEvent) | 🔗 |
| C | [OnEncyclopediaListSortedEvent](/v1.3.15/zh/api/campaign-ext/OnEncyclopediaListSortedEvent) | 🔗 |
| C | [OnEncyclopediaSearchActivatedEvent](/v1.3.15/zh/api/campaign-ext/OnEncyclopediaSearchActivatedEvent) | 🔗 |
| C | [PlayerToggleTrackSettlementFromEncyclopediaEvent](/v1.3.15/zh/api/campaign-ext/PlayerToggleTrackSettlementFromEncyclopediaEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaDwellingVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaDwellingVM) | 🔗 |
| C | [EncyclopediaFactionVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFactionVM) | 🔗 |
| C | [EncyclopediaFamilyMemberVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFamilyMemberVM) | 🔗 |
| C | [EncyclopediaHistoryEventVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaHistoryEventVM) | 🔗 |
| C | [EncyclopediaSettlementVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSettlementVM) | 🔗 |
| C | [EncyclopediaShipSlotVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaShipSlotVM) | 🔗 |
| C | [EncyclopediaShipStatVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaShipStatVM) | 🔗 |
| C | [EncyclopediaSkillVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSkillVM) | 🔗 |
| C | [EncyclopediaTraitItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaTraitItemVM) | 🔗 |
| C | [EncyclopediaTroopTreeNodeVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaTroopTreeNodeVM) | 🔗 |
| C | [EncyclopediaUnitEquipmentSetSelectorItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaUnitEquipmentSetSelectorItemVM) | 🔗 |
| C | [EncyclopediaUnitVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaUnitVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaFilterGroupVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFilterGroupVM) | 🔗 |
| C | [EncyclopediaListFilterVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListFilterVM) | 🔗 |
| C | [EncyclopediaListItemComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItemComparer) | 🔗 |
| C | [EncyclopediaListItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItemVM) | 🔗 |
| C | [EncyclopediaListSelectorItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSelectorItemVM) | 🔗 |
| C | [EncyclopediaListSelectorVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSelectorVM) | 🔗 |
| C | [EncyclopediaListSortControllerVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSortControllerVM) | 🔗 |
| C | [EncyclopediaListVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListVM) | 🔗 |
| C | [ListTypeVM](/v1.3.15/zh/api/campaign-ext/ListTypeVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaClanPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaClanPageVM) | 🔗 |
| C | [EncyclopediaConceptPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaConceptPageVM) | 🔗 |
| C | [EncyclopediaContentPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaContentPageVM) | 🔗 |
| C | [EncyclopediaFactionPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFactionPageVM) | 🔗 |
| C | [EncyclopediaHeroPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaHeroPageVM) | 🔗 |
| S | [EncyclopediaPageArgs](/v1.3.15/zh/api/campaign-ext/EncyclopediaPageArgs) | 🔗 |
| C | [EncyclopediaPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaPageVM) | 🔗 |
| C | [EncyclopediaSettlementPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSettlementPageVM) | 🔗 |
| C | [EncyclopediaShipPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaShipPageVM) | 🔗 |
| C | [EncyclopediaUnitPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaUnitPageVM) | 🔗 |
| C | [EncyclopediaViewModel](/v1.3.15/zh/api/campaign-ext/EncyclopediaViewModel) | 🔗 |
| C | [HeroAgeComparer](/v1.3.15/zh/api/campaign-ext/HeroAgeComparer) | 🔗 |
| C | [HeroRelationComparer](/v1.3.15/zh/api/campaign-ext/HeroRelationComparer) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GameMenuItemProgressVM](/v1.3.15/zh/api/campaign-ext/GameMenuItemProgressVM) | 🔗 |
| C | [GameMenuItemVM](/v1.3.15/zh/api/campaign-ext/GameMenuItemVM) | 🔗 |
| C | [GameMenuPlunderItemVM](/v1.3.15/zh/api/campaign-ext/GameMenuPlunderItemVM) | 🔗 |
| C | [GameMenuVM](/v1.3.15/zh/api/campaign-ext/GameMenuVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CrimeValueInspectedInSettlementOverlayEvent](/v1.3.15/zh/api/campaign-ext/CrimeValueInspectedInSettlementOverlayEvent) | 🔗 |
| C | [PartyScreenCharacterTalkPermissionEvent](/v1.3.15/zh/api/campaign-ext/PartyScreenCharacterTalkPermissionEvent) | 🔗 |
| C | [SettlementOverlayLeaveCharacterPermissionEvent](/v1.3.15/zh/api/campaign-ext/SettlementOverlayLeaveCharacterPermissionEvent) | 🔗 |
| C | [SettlementOverlayTalkPermissionEvent](/v1.3.15/zh/api/campaign-ext/SettlementOverlayTalkPermissionEvent) | 🔗 |
| C | [SettlementOverylayQuickTalkPermissionEvent](/v1.3.15/zh/api/campaign-ext/SettlementOverylayQuickTalkPermissionEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyMenuOverlayVM](/v1.3.15/zh/api/campaign-ext/ArmyMenuOverlayVM) | 🔗 |
| C | [EncounterMenuOverlayVM](/v1.3.15/zh/api/campaign-ext/EncounterMenuOverlayVM) | 🔗 |
| C | [GameMenuOverlay](/v1.3.15/zh/api/campaign-ext/GameMenuOverlay) | 🔗 |
| C | [GameMenuOverlayActionVM](/v1.3.15/zh/api/campaign-ext/GameMenuOverlayActionVM) | 🔗 |
| C | [GameMenuOverlayFactory](/v1.3.15/zh/api/campaign-ext/GameMenuOverlayFactory) | 🔗 |
| C | [GameMenuPartyItemVM](/v1.3.15/zh/api/campaign-ext/GameMenuPartyItemVM) | 🔗 |
| I | [IGameMenuOverlayProvider](/v1.3.15/zh/api/campaign-ext/IGameMenuOverlayProvider) | 🔗 |
| C | [MenuOverlay](/v1.3.15/zh/api/campaign-ext/MenuOverlay) | 🔗 |
| E | [OverlayType](/v1.3.15/zh/api/campaign-ext/OverlayType) | 🔗 |
| C | [SettlementMenuOverlayVM](/v1.3.15/zh/api/campaign-ext/SettlementMenuOverlayVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RecruitmentVM](/v1.3.15/zh/api/campaign-ext/RecruitmentVM) | 🔗 |
| C | [RecruitVolunteerOwnerVM](/v1.3.15/zh/api/campaign-ext/RecruitVolunteerOwnerVM) | 🔗 |
| C | [RecruitVolunteerTroopVM](/v1.3.15/zh/api/campaign-ext/RecruitVolunteerTroopVM) | 🔗 |
| C | [RecruitVolunteerVM](/v1.3.15/zh/api/campaign-ext/RecruitVolunteerVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemNameComparer | — |
| C | [ItemPlacementComparer](/v1.3.15/zh/api/campaign-ext/ItemPlacementComparer) | 🔗 |
| C | [ItemPrizeComparer](/v1.3.15/zh/api/campaign-ext/ItemPrizeComparer) | 🔗 |
| C | [ItemVictoriesComparer](/v1.3.15/zh/api/campaign-ext/ItemVictoriesComparer) | 🔗 |
| C | [TournamentLeaderboardEntryItemVM](/v1.3.15/zh/api/campaign-ext/TournamentLeaderboardEntryItemVM) | 🔗 |
| C | [TournamentLeaderboardSortControllerVM](/v1.3.15/zh/api/campaign-ext/TournamentLeaderboardSortControllerVM) | 🔗 |
| C | [TournamentLeaderboardVM](/v1.3.15/zh/api/campaign-ext/TournamentLeaderboardVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | DescriptionType | — |
| C | [SettlementBuildingProjectVM](/v1.3.15/zh/api/campaign-ext/SettlementBuildingProjectVM) | 🔗 |
| C | [SettlementDailyProjectVM](/v1.3.15/zh/api/campaign-ext/SettlementDailyProjectVM) | 🔗 |
| C | [SettlementGovernorSelectionItemVM](/v1.3.15/zh/api/campaign-ext/SettlementGovernorSelectionItemVM) | 🔗 |
| C | [SettlementGovernorSelectionVM](/v1.3.15/zh/api/campaign-ext/SettlementGovernorSelectionVM) | 🔗 |
| C | [SettlementProjectSelectionVM](/v1.3.15/zh/api/campaign-ext/SettlementProjectSelectionVM) | 🔗 |
| C | [SettlementProjectVM](/v1.3.15/zh/api/campaign-ext/SettlementProjectVM) | 🔗 |
| C | [TownManagementDescriptionItemVM](/v1.3.15/zh/api/campaign-ext/TownManagementDescriptionItemVM) | 🔗 |
| C | [TownManagementReserveControlVM](/v1.3.15/zh/api/campaign-ext/TownManagementReserveControlVM) | 🔗 |
| C | [TownManagementShopItemVM](/v1.3.15/zh/api/campaign-ext/TownManagementShopItemVM) | 🔗 |
| C | [TownManagementVillageItemVM](/v1.3.15/zh/api/campaign-ext/TownManagementVillageItemVM) | 🔗 |
| C | [TownManagementVM](/v1.3.15/zh/api/campaign-ext/TownManagementVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GameMenuTroopSelectionVM](/v1.3.15/zh/api/campaign-ext/GameMenuTroopSelectionVM) | 🔗 |
| C | [TroopItemComparer](/v1.3.15/zh/api/campaign-ext/TroopItemComparer) | 🔗 |
| C | [TroopSelectionItemVM](/v1.3.15/zh/api/campaign-ext/TroopSelectionItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Input (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [InputKeyItemVM](/v1.3.15/zh/api/campaign-ext/InputKeyItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Inventory (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [EquipmentModes](/v1.3.15/zh/api/campaign-ext/EquipmentModes) | 🔗 |
| E | [Filters](/v1.3.15/zh/api/campaign-ext/Filters) | 🔗 |
| C | [InventoryCharacterSelectorItemVM](/v1.3.15/zh/api/campaign-ext/InventoryCharacterSelectorItemVM) | 🔗 |
| C | [InventoryEquipmentTypeChangedEvent](/v1.3.15/zh/api/campaign-ext/InventoryEquipmentTypeChangedEvent) | 🔗 |
| C | [InventoryFilterChangedEvent](/v1.3.15/zh/api/campaign-ext/InventoryFilterChangedEvent) | 🔗 |
| C | [InventoryItemInspectedEvent](/v1.3.15/zh/api/campaign-ext/InventoryItemInspectedEvent) | 🔗 |
| E | [InventoryItemSortOption](/v1.3.15/zh/api/campaign-ext/InventoryItemSortOption) | 🔗 |
| E | [InventoryItemSortState](/v1.3.15/zh/api/campaign-ext/InventoryItemSortState) | 🔗 |
| C | [InventoryTradeVM](/v1.3.15/zh/api/campaign-ext/InventoryTradeVM) | 🔗 |
| C | [ItemComparer](/v1.3.15/zh/api/campaign-ext/ItemComparer) | 🔗 |
| C | ItemCostComparer | — |
| C | [ItemFlagVM](/v1.3.15/zh/api/campaign-ext/ItemFlagVM) | 🔗 |
| C | [ItemMenuTooltipPropertyVM](/v1.3.15/zh/api/campaign-ext/ItemMenuTooltipPropertyVM) | 🔗 |
| C | [ItemMenuVM](/v1.3.15/zh/api/campaign-ext/ItemMenuVM) | 🔗 |
| C | ItemNameComparer | — |
| C | [ItemPreviewVM](/v1.3.15/zh/api/campaign-ext/ItemPreviewVM) | 🔗 |
| C | [ItemQuantityComparer](/v1.3.15/zh/api/campaign-ext/ItemQuantityComparer) | 🔗 |
| C | [ItemTypeComparer](/v1.3.15/zh/api/campaign-ext/ItemTypeComparer) | 🔗 |
| E | [ProfitTypes](/v1.3.15/zh/api/campaign-ext/ProfitTypes) | 🔗 |
| C | [SPInventorySortControllerVM](/v1.3.15/zh/api/campaign-ext/SPInventorySortControllerVM) | 🔗 |
| C | [SPInventoryVM](/v1.3.15/zh/api/campaign-ext/SPInventoryVM) | 🔗 |
| C | [SPItemVM](/v1.3.15/zh/api/campaign-ext/SPItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [KingdomCategoryVM](/v1.3.15/zh/api/campaign-ext/KingdomCategoryVM) | 🔗 |
| C | [KingdomGiftFiefPopupVM](/v1.3.15/zh/api/campaign-ext/KingdomGiftFiefPopupVM) | 🔗 |
| C | [KingdomItemVM](/v1.3.15/zh/api/campaign-ext/KingdomItemVM) | 🔗 |
| C | [KingdomManagementVM](/v1.3.15/zh/api/campaign-ext/KingdomManagementVM) | 🔗 |
| C | [LeaveKingdomPermissionEvent](/v1.3.15/zh/api/campaign-ext/LeaveKingdomPermissionEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemDistanceComparer | — |
| C | ItemNameComparer | — |
| C | [ItemOwnerComparer](/v1.3.15/zh/api/campaign-ext/ItemOwnerComparer) | 🔗 |
| C | [ItemPartiesComparer](/v1.3.15/zh/api/campaign-ext/ItemPartiesComparer) | 🔗 |
| C | ItemStrengthComparer | — |
| C | [KingdomArmyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomArmyItemVM) | 🔗 |
| C | [KingdomArmyPartyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomArmyPartyItemVM) | 🔗 |
| C | [KingdomArmySortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomArmySortControllerVM) | 🔗 |
| C | [KingdomArmyVM](/v1.3.15/zh/api/campaign-ext/KingdomArmyVM) | 🔗 |
| C | [KingdomSettlementVillageItemVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementVillageItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | [ItemFiefsComparer](/v1.3.15/zh/api/campaign-ext/ItemFiefsComparer) | 🔗 |
| C | [ItemInfluenceComparer](/v1.3.15/zh/api/campaign-ext/ItemInfluenceComparer) | 🔗 |
| C | [ItemMembersComparer](/v1.3.15/zh/api/campaign-ext/ItemMembersComparer) | 🔗 |
| C | ItemNameComparer | — |
| C | ItemTypeComparer | — |
| C | [KingdomClanFiefItemVM](/v1.3.15/zh/api/campaign-ext/KingdomClanFiefItemVM) | 🔗 |
| C | [KingdomClanItemVM](/v1.3.15/zh/api/campaign-ext/KingdomClanItemVM) | 🔗 |
| C | [KingdomClanSortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomClanSortControllerVM) | 🔗 |
| C | [KingdomClanVM](/v1.3.15/zh/api/campaign-ext/KingdomClanVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DecisionOptionVM](/v1.3.15/zh/api/campaign-ext/DecisionOptionVM) | 🔗 |
| C | [DecisionSupporterVM](/v1.3.15/zh/api/campaign-ext/DecisionSupporterVM) | 🔗 |
| C | [KingdomDecisionsVM](/v1.3.15/zh/api/campaign-ext/KingdomDecisionsVM) | 🔗 |
| C | [PlayerSelectedAKingdomDecisionOptionEvent](/v1.3.15/zh/api/campaign-ext/PlayerSelectedAKingdomDecisionOptionEvent) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptingCallToWarAgreementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/AcceptingCallToWarAgreementDecisionItemVM) | 🔗 |
| C | [DecisionItemBaseVM](/v1.3.15/zh/api/campaign-ext/DecisionItemBaseVM) | 🔗 |
| C | [DeclareWarDecisionItemVM](/v1.3.15/zh/api/campaign-ext/DeclareWarDecisionItemVM) | 🔗 |
| C | [ExpelClanDecisionItemVM](/v1.3.15/zh/api/campaign-ext/ExpelClanDecisionItemVM) | 🔗 |
| C | [KingdomPolicyDecisionItemVM](/v1.3.15/zh/api/campaign-ext/KingdomPolicyDecisionItemVM) | 🔗 |
| C | [KingSelectionDecisionItemVM](/v1.3.15/zh/api/campaign-ext/KingSelectionDecisionItemVM) | 🔗 |
| C | [MakePeaceDecisionItemVM](/v1.3.15/zh/api/campaign-ext/MakePeaceDecisionItemVM) | 🔗 |
| C | [PolicyDecisionItemVM](/v1.3.15/zh/api/campaign-ext/PolicyDecisionItemVM) | 🔗 |
| C | [ProposeCallToWarAgreementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarAgreementDecisionItemVM) | 🔗 |
| C | [SettlementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/SettlementDecisionItemVM) | 🔗 |
| C | [StartAllianceDecisionItemVM](/v1.3.15/zh/api/campaign-ext/StartAllianceDecisionItemVM) | 🔗 |
| C | [TradeAgreementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/TradeAgreementDecisionItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | [ItemScoreComparer](/v1.3.15/zh/api/campaign-ext/ItemScoreComparer) | 🔗 |
| C | [KingdomDiplomacyFactionItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyFactionItemVM) | 🔗 |
| C | [KingdomDiplomacyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyItemVM) | 🔗 |
| C | [KingdomDiplomacyProposalActionItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyProposalActionItemVM) | 🔗 |
| C | [KingdomDiplomacyVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyVM) | 🔗 |
| C | [KingdomTruceItemVM](/v1.3.15/zh/api/campaign-ext/KingdomTruceItemVM) | 🔗 |
| C | [KingdomWarComparableStatVM](/v1.3.15/zh/api/campaign-ext/KingdomWarComparableStatVM) | 🔗 |
| C | [KingdomWarItemVM](/v1.3.15/zh/api/campaign-ext/KingdomWarItemVM) | 🔗 |
| C | [KingdomWarLogItemVM](/v1.3.15/zh/api/campaign-ext/KingdomWarLogItemVM) | 🔗 |
| C | [KingdomWarSortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomWarSortControllerVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [KingdomPoliciesVM](/v1.3.15/zh/api/campaign-ext/KingdomPoliciesVM) | 🔗 |
| C | [KingdomPolicyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomPolicyItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemClanComparer | — |
| C | ItemComparerBase | — |
| C | [ItemFoodComparer](/v1.3.15/zh/api/campaign-ext/ItemFoodComparer) | 🔗 |
| C | [ItemGarrisonComparer](/v1.3.15/zh/api/campaign-ext/ItemGarrisonComparer) | 🔗 |
| C | ItemNameComparer | — |
| C | ItemOwnerComparer | — |
| C | [ItemProsperityComparer](/v1.3.15/zh/api/campaign-ext/ItemProsperityComparer) | 🔗 |
| C | ItemTypeComparer | — |
| C | [ItemVillagesComparer](/v1.3.15/zh/api/campaign-ext/ItemVillagesComparer) | 🔗 |
| C | [KingdomSettlementItemVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementItemVM) | 🔗 |
| C | [KingdomSettlementSortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementSortControllerVM) | 🔗 |
| C | [KingdomSettlementVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapNotificationVM](/v1.3.15/zh/api/campaign-ext/MapNotificationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [HeirSelectionPopupHeroVM](/v1.3.15/zh/api/campaign-ext/HeirSelectionPopupHeroVM) | 🔗 |
| C | [HeirSelectionPopupVM](/v1.3.15/zh/api/campaign-ext/HeirSelectionPopupVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [MapBarShortcuts](/v1.3.15/zh/api/campaign-ext/MapBarShortcuts) | 🔗 |
| C | [MapBarVM](/v1.3.15/zh/api/campaign-ext/MapBarVM) | 🔗 |
| C | [MapInfoItemVM](/v1.3.15/zh/api/campaign-ext/MapInfoItemVM) | 🔗 |
| C | [MapInfoVM](/v1.3.15/zh/api/campaign-ext/MapInfoVM) | 🔗 |
| C | [MapNavigationItemVM](/v1.3.15/zh/api/campaign-ext/MapNavigationItemVM) | 🔗 |
| C | [MapNavigationVM](/v1.3.15/zh/api/campaign-ext/MapNavigationVM) | 🔗 |
| C | [MapTimeControlVM](/v1.3.15/zh/api/campaign-ext/MapTimeControlVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapConversationVM](/v1.3.15/zh/api/campaign-ext/MapConversationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarOfferNotificationItemVM) | 🔗 |
| C | [AlleyLeaderDiedMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AlleyLeaderDiedMapNotificationItemVM) | 🔗 |
| C | [AlleyUnderAttackMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AlleyUnderAttackMapNotificationItemVM) | 🔗 |
| C | [AllianceOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AllianceOfferNotificationItemVM) | 🔗 |
| C | [ArmyCreationNotificationItemVM](/v1.3.15/zh/api/campaign-ext/ArmyCreationNotificationItemVM) | 🔗 |
| C | [ArmyDispersionItemVM](/v1.3.15/zh/api/campaign-ext/ArmyDispersionItemVM) | 🔗 |
| C | [DeathNotificationItemVM](/v1.3.15/zh/api/campaign-ext/DeathNotificationItemVM) | 🔗 |
| C | [EducationNotificationItemVM](/v1.3.15/zh/api/campaign-ext/EducationNotificationItemVM) | 🔗 |
| C | [HeirComeOfAgeNotificationItemVM](/v1.3.15/zh/api/campaign-ext/HeirComeOfAgeNotificationItemVM) | 🔗 |
| C | [KingdomDestroyedNotificationItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedNotificationItemVM) | 🔗 |
| C | [KingdomVoteNotificationItemVM](/v1.3.15/zh/api/campaign-ext/KingdomVoteNotificationItemVM) | 🔗 |
| C | [MapNotificationItemBaseVM](/v1.3.15/zh/api/campaign-ext/MapNotificationItemBaseVM) | 🔗 |
| C | [MarriageNotificationItemVM](/v1.3.15/zh/api/campaign-ext/MarriageNotificationItemVM) | 🔗 |
| C | [MarriageOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferNotificationItemVM) | 🔗 |
| C | [MercenaryOfferMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/MercenaryOfferMapNotificationItemVM) | 🔗 |
| C | [NewBornNotificationItemVM](/v1.3.15/zh/api/campaign-ext/NewBornNotificationItemVM) | 🔗 |
| C | [PartyLeaderChangeNotificationVM](/v1.3.15/zh/api/campaign-ext/PartyLeaderChangeNotificationVM) | 🔗 |
| C | [PeaceNotificationItemVM](/v1.3.15/zh/api/campaign-ext/PeaceNotificationItemVM) | 🔗 |
| C | [PeaceOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/PeaceOfferNotificationItemVM) | 🔗 |
| C | [ProposeCallToWarOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarOfferNotificationItemVM) | 🔗 |
| C | [QuestNotificationItemVM](/v1.3.15/zh/api/campaign-ext/QuestNotificationItemVM) | 🔗 |
| C | [RansomNotificationItemVM](/v1.3.15/zh/api/campaign-ext/RansomNotificationItemVM) | 🔗 |
| C | [RebellionNotificationItemVM](/v1.3.15/zh/api/campaign-ext/RebellionNotificationItemVM) | 🔗 |
| C | [SettlementOwnerChangedNotificationItemVM](/v1.3.15/zh/api/campaign-ext/SettlementOwnerChangedNotificationItemVM) | 🔗 |
| C | [SettlementUnderSiegeMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/SettlementUnderSiegeMapNotificationItemVM) | 🔗 |
| C | [TraitChangedNotificationItemVM](/v1.3.15/zh/api/campaign-ext/TraitChangedNotificationItemVM) | 🔗 |
| C | [TributeFinishedMapNotificationVM](/v1.3.15/zh/api/campaign-ext/TributeFinishedMapNotificationVM) | 🔗 |
| C | [VassalOfferMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/VassalOfferMapNotificationItemVM) | 🔗 |
| C | [WarNotificationItemVM](/v1.3.15/zh/api/campaign-ext/WarNotificationItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MarriageOfferPopupHeroAttributeVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferPopupHeroAttributeVM) | 🔗 |
| C | [MarriageOfferPopupHeroVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferPopupHeroVM) | 🔗 |
| C | [MarriageOfferPopupVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferPopupVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapParleyAnimationVM](/v1.3.15/zh/api/campaign-ext/MapParleyAnimationVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapTrackerItemVM](./campaign-ext/MapTrackerItemVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Party (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyCharacterVM](/v1.3.15/zh/api/campaign-ext/PartyCharacterVM) | 🔗 |
| C | [PartyCompositionVM](/v1.3.15/zh/api/campaign-ext/PartyCompositionVM) | 🔗 |
| C | [PartySortControllerVM](/v1.3.15/zh/api/campaign-ext/PartySortControllerVM) | 🔗 |
| C | [PartyTradeVM](/v1.3.15/zh/api/campaign-ext/PartyTradeVM) | 🔗 |
| C | [PartyVM](/v1.3.15/zh/api/campaign-ext/PartyVM) | 🔗 |
| C | [PlayerMoveTroopEvent](/v1.3.15/zh/api/campaign-ext/PlayerMoveTroopEvent) | 🔗 |
| C | [PlayerRequestUpgradeTroopEvent](/v1.3.15/zh/api/campaign-ext/PlayerRequestUpgradeTroopEvent) | 🔗 |
| C | [PlayerToggledUpgradePopupEvent](/v1.3.15/zh/api/campaign-ext/PlayerToggledUpgradePopupEvent) | 🔗 |
| C | [TroopSortSelectorItemVM](/v1.3.15/zh/api/campaign-ext/TroopSortSelectorItemVM) | 🔗 |
| C | [UpgradeRequirementsVM](/v1.3.15/zh/api/campaign-ext/UpgradeRequirementsVM) | 🔗 |
| C | [UpgradeTargetVM](/v1.3.15/zh/api/campaign-ext/UpgradeTargetVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyRecruitTroopVM](/v1.3.15/zh/api/campaign-ext/PartyRecruitTroopVM) | 🔗 |
| C | [PartyTroopManagerItemVM](/v1.3.15/zh/api/campaign-ext/PartyTroopManagerItemVM) | 🔗 |
| C | [PartyTroopManagerVM](/v1.3.15/zh/api/campaign-ext/PartyTroopManagerVM) | 🔗 |
| C | [PartyUpgradeTroopVM](/v1.3.15/zh/api/campaign-ext/PartyUpgradeTroopVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Quests (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [QuestCompletionType](/v1.3.15/zh/api/campaign-ext/QuestCompletionType) | 🔗 |
| C | [QuestItemSortControllerVM](/v1.3.15/zh/api/campaign-ext/QuestItemSortControllerVM) | 🔗 |
| E | [QuestItemSortOption](/v1.3.15/zh/api/campaign-ext/QuestItemSortOption) | 🔗 |
| C | [QuestItemVM](/v1.3.15/zh/api/campaign-ext/QuestItemVM) | 🔗 |
| C | [QuestMarkerVM](/v1.3.15/zh/api/campaign-ext/QuestMarkerVM) | 🔗 |
| C | [QuestStageTaskVM](/v1.3.15/zh/api/campaign-ext/QuestStageTaskVM) | 🔗 |
| C | [QuestStageVM](/v1.3.15/zh/api/campaign-ext/QuestStageVM) | 🔗 |
| C | [QuestsVM](/v1.3.15/zh/api/campaign-ext/QuestsVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingAvailableHeroItemVM](/v1.3.15/zh/api/campaign-ext/CraftingAvailableHeroItemVM) | 🔗 |
| C | [CraftingHeroPopupVM](/v1.3.15/zh/api/campaign-ext/CraftingHeroPopupVM) | 🔗 |
| C | [CraftingListPropertyItem](/v1.3.15/zh/api/campaign-ext/CraftingListPropertyItem) | 🔗 |
| C | [CraftingPerkVM](/v1.3.15/zh/api/campaign-ext/CraftingPerkVM) | 🔗 |
| C | [CraftingResourceItemVM](/v1.3.15/zh/api/campaign-ext/CraftingResourceItemVM) | 🔗 |
| C | [CraftingSecondaryUsageItemVM](/v1.3.15/zh/api/campaign-ext/CraftingSecondaryUsageItemVM) | 🔗 |
| C | [CraftingVM](/v1.3.15/zh/api/campaign-ext/CraftingVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RefinementActionItemVM](/v1.3.15/zh/api/campaign-ext/RefinementActionItemVM) | 🔗 |
| C | [RefinementVM](/v1.3.15/zh/api/campaign-ext/RefinementVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemNameComparer | — |
| C | ItemTypeComparer | — |
| C | [ItemYieldComparer](/v1.3.15/zh/api/campaign-ext/ItemYieldComparer) | 🔗 |
| C | [SmeltingItemVM](/v1.3.15/zh/api/campaign-ext/SmeltingItemVM) | 🔗 |
| C | [SmeltingSortControllerVM](/v1.3.15/zh/api/campaign-ext/SmeltingSortControllerVM) | 🔗 |
| C | [SmeltingVM](/v1.3.15/zh/api/campaign-ext/SmeltingVM) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingHistoryVM](/v1.3.15/zh/api/campaign-ext/CraftingHistoryVM) | 🔗 |
| C | [CraftingItemFlagVM](/v1.3.15/zh/api/campaign-ext/CraftingItemFlagVM) | 🔗 |
| C | [CraftingOrderSelectionOpenedEvent](/v1.3.15/zh/api/campaign-ext/CraftingOrderSelectionOpenedEvent) | 🔗 |
| C | [CraftingOrderTabOpenedEvent](/v1.3.15/zh/api/campaign-ext/CraftingOrderTabOpenedEvent) | 🔗 |
| C | [CraftingPieceListVM](/v1.3.15/zh/api/campaign-ext/CraftingPieceListVM) | 🔗 |
| E | [CraftingPieceTierFilter](/v1.3.15/zh/api/campaign-ext/CraftingPieceTierFilter) | 🔗 |
| C | [CraftingPieceVM](/v1.3.15/zh/api/campaign-ext/CraftingPieceVM) | 🔗 |
| C | [CraftingWeaponClassSelectionOpenedEvent](/v1.3.15/zh/api/campaign-ext/CraftingWeaponClassSelectionOpenedEvent) | 🔗 |
| C | [CraftingWeaponResultPopupToggledEvent](/v1.3.15/zh/api/campaign-ext/CraftingWeaponResultPopupToggledEvent) | 🔗 |
| C | [PieceTierComparer](/v1.3.15/zh/api/campaign-ext/PieceTierComparer) | 🔗 |
| C | [TemplateComparer](/v1.3.15/zh/api/campaign-ext/TemplateComparer) | 🔗 |
| C | [TierFilterTypeVM](/v1.3.15/zh/api/campaign-ext/TierFilterTypeVM) | 🔗 |
| C | [WeaponAttributeVM](/v1.3.15/zh/api/campaign-ext/WeaponAttributeVM) | 🔗 |
| C | [WeaponClassSelectionPopupVM](/v1.3.15/zh/api/campaign-ext/WeaponClassSelectionPopupVM) | 🔗 |
| C | [WeaponClassVM](/v1.3.15/zh/api/campaign-ext/WeaponClassVM) | 🔗 |
| C | [WeaponDesignResultPopupVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignResultPopupVM) | 🔗 |
| C | [WeaponDesignResultPropertyItemVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignResultPropertyItemVM) | 🔗 |
| C | [WeaponDesignSelectorVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignSelectorVM) | 🔗 |
| C | [WeaponDesignVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignVM) | 🔗 |
| C | [WeaponPropertyComparer](/v1.3.15/zh/api/campaign-ext/WeaponPropertyComparer) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingOrderItemVM](/v1.3.15/zh/api/campaign-ext/CraftingOrderItemVM) | 🔗 |
| C | [CraftingOrderPopupVM](/v1.3.15/zh/api/campaign-ext/CraftingOrderPopupVM) | 🔗 |
