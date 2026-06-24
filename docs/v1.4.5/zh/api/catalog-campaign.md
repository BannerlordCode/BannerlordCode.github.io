---
title: 战役系统 Campaign System 类目录 / Class Catalog
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
| E | [ActionNotes](/v1.3.15/zh/api/campaign-ext/ActionNotes.md) | 🔗 |
| S | [AIBehaviorData](/v1.3.15/zh/api/campaign-ext/AIBehaviorData.md) | 🔗 |
| C | [Army](/v1.3.15/zh/api/campaign-ext/Army.md) | 🔗 |
| E | [ArmyDispersionReason](/v1.3.15/zh/api/campaign-ext/ArmyDispersionReason.md) | 🔗 |
| E | [ArmyTypes](/v1.3.15/zh/api/campaign-ext/ArmyTypes.md) | 🔗 |
| C | [AtmosphereGrid](/v1.3.15/zh/api/campaign-ext/AtmosphereGrid.md) | 🔗 |
| S | [BattleResultPartyData](/v1.3.15/zh/api/campaign-ext/BattleResultPartyData.md) | 🔗 |
| C | [BattleSimulation](/v1.3.15/zh/api/campaign-ext/BattleSimulation.md) | 🔗 |
| E | [BoardGameType](/v1.3.15/zh/api/campaign-ext/BoardGameType.md) | 🔗 |
| C | Campaign | — |
| C | [CampaignBehaviorBase](/v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase.md) | 🔗 |
| C | [CampaignCheats](/v1.3.15/zh/api/campaign-ext/CampaignCheats.md) | 🔗 |
| C | [CampaignData](/v1.3.15/zh/api/campaign-ext/CampaignData.md) | 🔗 |
| C | [CampaignEntityComponent](/v1.3.15/zh/api/campaign-ext/CampaignEntityComponent.md) | 🔗 |
| C | [CampaignEventDispatcher](/v1.3.15/zh/api/campaign-ext/CampaignEventDispatcher.md) | 🔗 |
| C | [CampaignEventReceiver](/v1.3.15/zh/api/campaign-ext/CampaignEventReceiver.md) | 🔗 |
| C | [CampaignEvents](/v1.3.15/zh/api/campaign-ext/CampaignEvents.md) | 🔗 |
| E | [CampaignGameMode](/v1.3.15/zh/api/campaign-ext/CampaignGameMode.md) | 🔗 |
| C | [CampaignGameStarter](/v1.3.15/zh/api/campaign-ext/CampaignGameStarter.md) | 🔗 |
| C | [CampaignInformationManager](/v1.3.15/zh/api/campaign-ext/CampaignInformationManager.md) | 🔗 |
| C | [CampaignMission](/v1.3.15/zh/api/campaign-ext/CampaignMission.md) | 🔗 |
| C | [CampaignObjectBase](/v1.3.15/zh/api/campaign-ext/CampaignObjectBase.md) | 🔗 |
| C | [CampaignObjectManager](/v1.3.15/zh/api/campaign-ext/CampaignObjectManager.md) | 🔗 |
| C | [CampaignOptions](/v1.3.15/zh/api/campaign-ext/CampaignOptions.md) | 🔗 |
| C | [CampaignPeriodicEventManager](/v1.3.15/zh/api/campaign-ext/CampaignPeriodicEventManager.md) | 🔗 |
| C | [CampaignTickCacheDataStore](/v1.3.15/zh/api/campaign-ext/CampaignTickCacheDataStore.md) | 🔗 |
| S | [CampaignTime](/v1.3.15/zh/api/campaign-ext/CampaignTime.md) | 🔗 |
| E | [CampaignTimeControlMode](/v1.3.15/zh/api/campaign-ext/CampaignTimeControlMode.md) | 🔗 |
| C | [CampaignTutorial](/v1.3.15/zh/api/campaign-ext/CampaignTutorial.md) | 🔗 |
| S | [CampaignVec2](/v1.3.15/zh/api/campaign-ext/CampaignVec2.md) | 🔗 |
| C | [CharacterData](/v1.3.15/zh/api/campaign-ext/CharacterData.md) | 🔗 |
| C | CharacterObject | — |
| C | [CharacterRelationManager](/v1.3.15/zh/api/campaign-ext/CharacterRelationManager.md) | 🔗 |
| E | [CharacterRestrictionFlags](/v1.3.15/zh/api/campaign-ext/CharacterRestrictionFlags.md) | 🔗 |
| E | [CharacterStates](/v1.3.15/zh/api/campaign-ext/CharacterStates.md) | 🔗 |
| C | Clan | — |
| C | [Concept](/v1.3.15/zh/api/campaign-ext/Concept.md) | 🔗 |
| E | [ConversationContext](/v1.3.15/zh/api/campaign-ext/ConversationContext.md) | 🔗 |
| S | [ConversationSceneData](/v1.3.15/zh/api/campaign-ext/ConversationSceneData.md) | 🔗 |
| C | [CultureObject](/v1.3.15/zh/api/campaign-ext/CultureObject.md) | 🔗 |
| C | [CultureTrait](/v1.3.15/zh/api/campaign-ext/CultureTrait.md) | 🔗 |
| C | [DefaultItems](/v1.3.15/zh/api/campaign-ext/DefaultItems.md) | 🔗 |
| C | [DefaultPolicies](/v1.3.15/zh/api/campaign-ext/DefaultPolicies.md) | 🔗 |
| C | [DefaultSkillEffects](/v1.3.15/zh/api/campaign-ext/DefaultSkillEffects.md) | 🔗 |
| C | [DialogFlow](/v1.3.15/zh/api/campaign-ext/DialogFlow.md) | 🔗 |
| E | [Difficulty](/v1.3.15/zh/api/campaign-ext/Difficulty.md) | 🔗 |
| C | [EncounterManager](/v1.3.15/zh/api/campaign-ext/EncounterManager.md) | 🔗 |
| S | [ExplainedNumber](/v1.3.15/zh/api/campaign-ext/ExplainedNumber.md) | 🔗 |
| C | [FactionManager](/v1.3.15/zh/api/campaign-ext/FactionManager.md) | 🔗 |
| E | [FinishStates](/v1.3.15/zh/api/campaign-ext/FinishStates.md) | 🔗 |
| E | [GameAccelerationMode](/v1.3.15/zh/api/campaign-ext/GameAccelerationMode.md) | 🔗 |
| E | [GameLoadingType](/v1.3.15/zh/api/campaign-ext/GameLoadingType.md) | 🔗 |
| C | [GameModels](/v1.3.15/zh/api/campaign-ext/GameModels.md) | 🔗 |
| C | [GameSceneDataManager](/v1.3.15/zh/api/campaign-ext/GameSceneDataManager.md) | 🔗 |
| C | [Hero](/v1.3.15/zh/api/campaign/Hero.md) | 🔗 |
| C | [HeroCreator](/v1.3.15/zh/api/campaign-ext/HeroCreator.md) | 🔗 |
| E | [HeroGetsBusyReasons](/v1.3.15/zh/api/campaign-ext/HeroGetsBusyReasons.md) | 🔗 |
| I | [IAgentBehaviorManager](/v1.3.15/zh/api/campaign-ext/IAgentBehaviorManager.md) | 🔗 |
| I | [ICampaignBehavior](/v1.3.15/zh/api/campaign-ext/ICampaignBehavior.md) | 🔗 |
| I | [ICampaignBehaviorManager](/v1.3.15/zh/api/campaign-ext/ICampaignBehaviorManager.md) | 🔗 |
| I | [ICampaignMission](/v1.3.15/zh/api/campaign-ext/ICampaignMission.md) | 🔗 |
| I | [ICampaignMissionManager](/v1.3.15/zh/api/campaign-ext/ICampaignMissionManager.md) | 🔗 |
| I | [IDataStore](/v1.3.15/zh/api/campaign-ext/IDataStore.md) | 🔗 |
| I | [IFaction](/v1.3.15/zh/api/campaign-ext/IFaction.md) | 🔗 |
| I | [IMainHeroVisualSupplier](/v1.3.15/zh/api/campaign-ext/IMainHeroVisualSupplier.md) | 🔗 |
| I | [IMapEventVisualCreator](/v1.3.15/zh/api/campaign-ext/IMapEventVisualCreator.md) | 🔗 |
| I | [IMbEvent](/v1.3.15/zh/api/campaign-ext/IMbEvent.md) | 🔗 |
| I | [IMbEventBase](/v1.3.15/zh/api/campaign-ext/IMbEventBase.md) | 🔗 |
| I | [INavigationElement](/v1.3.15/zh/api/campaign-ext/INavigationElement.md) | 🔗 |
| I | [INavigationHandler](/v1.3.15/zh/api/campaign-ext/INavigationHandler.md) | 🔗 |
| I | [IRandomOwner](/v1.3.15/zh/api/campaign-ext/IRandomOwner.md) | 🔗 |
| I | [ISandBoxMissionManager](/v1.3.15/zh/api/campaign-ext/ISandBoxMissionManager.md) | 🔗 |
| I | [ISaveManager](/v1.3.15/zh/api/campaign-ext/ISaveManager.md) | 🔗 |
| I | [ITrackableCampaignObject](/v1.3.15/zh/api/campaign-ext/ITrackableCampaignObject.md) | 🔗 |
| I | [IViewDataTracker](/v1.3.15/zh/api/campaign-ext/IViewDataTracker.md) | 🔗 |
| C | [JournalLog](/v1.3.15/zh/api/campaign-ext/JournalLog.md) | 🔗 |
| C | Kingdom | — |
| C | [KingdomManager](/v1.3.15/zh/api/campaign-ext/KingdomManager.md) | 🔗 |
| E | [LogType](/v1.3.15/zh/api/campaign-ext/LogType.md) | 🔗 |
| C | [ManagedParameters](/v1.3.15/zh/api/core-extra/ManagedParameters.md) | 🔗 |
| E | [ManagedParametersEnum](/v1.3.15/zh/api/core-extra/ManagedParametersEnum.md) | 🔗 |
| C | [MapNavigationExtensions](/v1.3.15/zh/api/campaign-ext/MapNavigationExtensions.md) | 🔗 |
| E | [MapNavigationItemType](/v1.3.15/zh/api/campaign-ext/MapNavigationItemType.md) | 🔗 |
| C | [MBCampaignEvent](/v1.3.15/zh/api/campaign-ext/MBCampaignEvent.md) | 🔗 |
| C | [MbEvent](/v1.3.15/zh/api/campaign-ext/MbEvent.md) | 🔗 |
| S | [MeetingSceneData](/v1.3.15/zh/api/campaign-ext/MeetingSceneData.md) | 🔗 |
| C | [NameGenerator](/v1.3.15/zh/api/campaign-ext/NameGenerator.md) | 🔗 |
| S | [NavigationPermissionItem](/v1.3.15/zh/api/campaign-ext/NavigationPermissionItem.md) | 🔗 |
| E | [NoticeType](/v1.3.15/zh/api/campaign-ext/NoticeType.md) | 🔗 |
| E | [Occupation](/v1.3.15/zh/api/campaign-ext/Occupation.md) | 🔗 |
| E | [OperationType](/v1.3.15/zh/api/campaign-ext/OperationType.md) | 🔗 |
| E | [PartyRestFlags](/v1.3.15/zh/api/campaign-ext/PartyRestFlags.md) | 🔗 |
| E | [PartyRole](/v1.3.15/zh/api/campaign-ext/PartyRole.md) | 🔗 |
| C | [PartyThinkParams](/v1.3.15/zh/api/campaign-ext/PartyThinkParams.md) | 🔗 |
| E | [PartyTypeEnum](/v1.3.15/zh/api/campaign-ext/PartyTypeEnum.md) | 🔗 |
| C | [PlayerCaptivity](/v1.3.15/zh/api/campaign-ext/PlayerCaptivity.md) | 🔗 |
| C | [PolicyObject](/v1.3.15/zh/api/campaign-ext/PolicyObject.md) | 🔗 |
| C | [PropertyObjectData](/v1.3.15/zh/api/campaign-ext/PropertyObjectData.md) | 🔗 |
| C | [QuestBase](/v1.3.15/zh/api/campaign-ext/QuestBase.md) | 🔗 |
| E | [QuestCompleteDetails](/v1.3.15/zh/api/campaign-ext/QuestCompleteDetails.md) | 🔗 |
| C | [QuestManager](/v1.3.15/zh/api/campaign-ext/QuestManager.md) | 🔗 |
| C | [QuestTaskBase](/v1.3.15/zh/api/campaign-ext/QuestTaskBase.md) | 🔗 |
| C | [RandomOwnerExtensions](/v1.3.15/zh/api/campaign-ext/RandomOwnerExtensions.md) | 🔗 |
| I | [ReferenceIMBEvent](/v1.3.15/zh/api/campaign-ext/ReferenceIMBEvent.md) | 🔗 |
| C | [ReferenceMBEvent](/v1.3.15/zh/api/campaign-ext/ReferenceMBEvent.md) | 🔗 |
| C | [Romance](/v1.3.15/zh/api/campaign-ext/Romance.md) | 🔗 |
| E | [RomanceLevelEnum](/v1.3.15/zh/api/campaign-ext/RomanceLevelEnum.md) | 🔗 |
| C | [RomanticState](/v1.3.15/zh/api/campaign-ext/RomanticState.md) | 🔗 |
| C | [SandBoxManager](/v1.3.15/zh/api/campaign-ext/SandBoxManager.md) | 🔗 |
| C | [SandBoxMission](/v1.3.15/zh/api/campaign-ext/SandBoxMission.md) | 🔗 |
| C | [SaveableCampaignTypeDefiner](/v1.3.15/zh/api/campaign-ext/SaveableCampaignTypeDefiner.md) | 🔗 |
| C | [SaveHandler](/v1.3.15/zh/api/campaign-ext/SaveHandler.md) | 🔗 |
| E | [SaveMode](/v1.3.15/zh/api/campaign-ext/SaveMode.md) | 🔗 |
| E | [Seasons](/v1.3.15/zh/api/campaign-ext/Seasons.md) | 🔗 |
| E | [SettlementBusynessPriority](/v1.3.15/zh/api/campaign-ext/SettlementBusynessPriority.md) | 🔗 |
| S | [SingleplayerBattleSceneData](/v1.3.15/zh/api/campaign-ext/SingleplayerBattleSceneData.md) | 🔗 |
| C | [SkillEffect](/v1.3.15/zh/api/campaign-ext/SkillEffect.md) | 🔗 |
| C | [SkillObjectData](/v1.3.15/zh/api/campaign-ext/SkillObjectData.md) | 🔗 |
| C | [StanceLink](/v1.3.15/zh/api/campaign-ext/StanceLink.md) | 🔗 |
| C | [Track](/v1.3.15/zh/api/campaign-ext/Track.md) | 🔗 |
| C | [TrackedObject](/v1.3.15/zh/api/campaign-ext/TrackedObject.md) | 🔗 |
| C | [TradeRumor](/v1.3.15/zh/api/campaign-ext/TradeRumor.md) | 🔗 |
| C | [TroopUpgradeTracker](/v1.3.15/zh/api/campaign-ext/TroopUpgradeTracker.md) | 🔗 |
| C | [VisualCreator](/v1.3.15/zh/api/campaign-ext/VisualCreator.md) | 🔗 |
| C | [VisualTrackerManager](/v1.3.15/zh/api/campaign-ext/VisualTrackerManager.md) | 🔗 |

## TaleWorlds.CampaignSystem.Actions (75)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AddCompanionAction](/v1.3.15/zh/api/campaign-ext/AddCompanionAction.md) | 🔗 |
| C | [AddHeroToPartyAction](/v1.3.15/zh/api/campaign-ext/AddHeroToPartyAction.md) | 🔗 |
| C | [AdoptHeroAction](/v1.3.15/zh/api/campaign-ext/AdoptHeroAction.md) | 🔗 |
| C | [ApplyHeirSelectionAction](/v1.3.15/zh/api/campaign-ext/ApplyHeirSelectionAction.md) | 🔗 |
| C | [BeHostileAction](/v1.3.15/zh/api/campaign-ext/BeHostileAction.md) | 🔗 |
| C | [BreakInOutBesiegedSettlementAction](/v1.3.15/zh/api/campaign-ext/BreakInOutBesiegedSettlementAction.md) | 🔗 |
| C | [BribeGuardsAction](/v1.3.15/zh/api/campaign-ext/BribeGuardsAction.md) | 🔗 |
| C | [ChangeClanInfluenceAction](/v1.3.15/zh/api/campaign-ext/ChangeClanInfluenceAction.md) | 🔗 |
| C | [ChangeClanLeaderAction](/v1.3.15/zh/api/campaign-ext/ChangeClanLeaderAction.md) | 🔗 |
| C | [ChangeCrimeRatingAction](/v1.3.15/zh/api/campaign-ext/ChangeCrimeRatingAction.md) | 🔗 |
| C | [ChangeGovernorAction](/v1.3.15/zh/api/campaign-ext/ChangeGovernorAction.md) | 🔗 |
| C | [ChangeKingdomAction](/v1.3.15/zh/api/campaign-ext/ChangeKingdomAction.md) | 🔗 |
| E | [ChangeKingdomActionDetail](/v1.3.15/zh/api/campaign-ext/ChangeKingdomActionDetail.md) | 🔗 |
| C | [ChangeOwnerOfSettlementAction](/v1.3.15/zh/api/campaign-ext/ChangeOwnerOfSettlementAction.md) | 🔗 |
| E | [ChangeOwnerOfSettlementDetail](/v1.3.15/zh/api/campaign-ext/ChangeOwnerOfSettlementDetail.md) | 🔗 |
| C | [ChangeOwnerOfWorkshopAction](/v1.3.15/zh/api/campaign-ext/ChangeOwnerOfWorkshopAction.md) | 🔗 |
| C | [ChangePlayerCharacterAction](/v1.3.15/zh/api/campaign-ext/ChangePlayerCharacterAction.md) | 🔗 |
| C | [ChangeProductionTypeOfWorkshopAction](/v1.3.15/zh/api/campaign-ext/ChangeProductionTypeOfWorkshopAction.md) | 🔗 |
| C | [ChangeRelationAction](/v1.3.15/zh/api/campaign-ext/ChangeRelationAction.md) | 🔗 |
| E | [ChangeRelationDetail](/v1.3.15/zh/api/campaign-ext/ChangeRelationDetail.md) | 🔗 |
| C | [ChangeRomanticStateAction](/v1.3.15/zh/api/campaign-ext/ChangeRomanticStateAction.md) | 🔗 |
| C | [ChangeRulingClanAction](/v1.3.15/zh/api/campaign-ext/ChangeRulingClanAction.md) | 🔗 |
| C | [ChangeShipOwnerAction](/v1.3.15/zh/api/campaign-ext/ChangeShipOwnerAction.md) | 🔗 |
| C | [ChangeVillageStateAction](/v1.3.15/zh/api/campaign-ext/ChangeVillageStateAction.md) | 🔗 |
| C | [ClaimSettlementAction](/v1.3.15/zh/api/campaign-ext/ClaimSettlementAction.md) | 🔗 |
| C | [DeclareWarAction](/v1.3.15/zh/api/campaign-ext/DeclareWarAction.md) | 🔗 |
| E | [DeclareWarDetail](/v1.3.15/zh/api/campaign-ext/DeclareWarDetail.md) | 🔗 |
| C | [DestroyClanAction](/v1.3.15/zh/api/campaign-ext/DestroyClanAction.md) | 🔗 |
| C | [DestroyKingdomAction](/v1.3.15/zh/api/campaign-ext/DestroyKingdomAction.md) | 🔗 |
| C | [DestroyPartyAction](/v1.3.15/zh/api/campaign-ext/DestroyPartyAction.md) | 🔗 |
| C | [DestroyShipAction](/v1.3.15/zh/api/campaign-ext/DestroyShipAction.md) | 🔗 |
| C | [DisableHeroAction](/v1.3.15/zh/api/campaign-ext/DisableHeroAction.md) | 🔗 |
| C | [DisbandArmyAction](/v1.3.15/zh/api/campaign-ext/DisbandArmyAction.md) | 🔗 |
| C | [DisbandPartyAction](/v1.3.15/zh/api/campaign-ext/DisbandPartyAction.md) | 🔗 |
| C | [EndCaptivityAction](/v1.3.15/zh/api/campaign-ext/EndCaptivityAction.md) | 🔗 |
| E | [EndCaptivityDetail](/v1.3.15/zh/api/campaign-ext/EndCaptivityDetail.md) | 🔗 |
| C | [EndMercenaryServiceAction](/v1.3.15/zh/api/campaign-ext/EndMercenaryServiceAction.md) | 🔗 |
| E | [EndMercenaryServiceActionDetails](/v1.3.15/zh/api/campaign-ext/EndMercenaryServiceActionDetails.md) | 🔗 |
| C | [EnterSettlementAction](/v1.3.15/zh/api/campaign-ext/EnterSettlementAction.md) | 🔗 |
| C | [GainKingdomInfluenceAction](/v1.3.15/zh/api/campaign-ext/GainKingdomInfluenceAction.md) | 🔗 |
| C | [GainRenownAction](/v1.3.15/zh/api/campaign-ext/GainRenownAction.md) | 🔗 |
| C | [GatherArmyAction](/v1.3.15/zh/api/campaign-ext/GatherArmyAction.md) | 🔗 |
| C | [GiveGoldAction](/v1.3.15/zh/api/campaign-ext/GiveGoldAction.md) | 🔗 |
| C | [GiveItemAction](/v1.3.15/zh/api/campaign-ext/GiveItemAction.md) | 🔗 |
| C | [IncreaseSettlementHealthAction](/v1.3.15/zh/api/campaign-ext/IncreaseSettlementHealthAction.md) | 🔗 |
| C | [InitializeWorkshopAction](/v1.3.15/zh/api/campaign-ext/InitializeWorkshopAction.md) | 🔗 |
| C | [KillCharacterAction](/v1.3.15/zh/api/campaign-ext/KillCharacterAction.md) | 🔗 |
| E | [KillCharacterActionDetail](/v1.3.15/zh/api/campaign-ext/KillCharacterActionDetail.md) | 🔗 |
| C | [LeaveSettlementAction](/v1.3.15/zh/api/campaign-ext/LeaveSettlementAction.md) | 🔗 |
| C | [LiftSiegeAction](/v1.3.15/zh/api/campaign-ext/LiftSiegeAction.md) | 🔗 |
| C | [MakeHeroFugitiveAction](/v1.3.15/zh/api/campaign-ext/MakeHeroFugitiveAction.md) | 🔗 |
| C | [MakePeaceAction](/v1.3.15/zh/api/campaign-ext/MakePeaceAction.md) | 🔗 |
| E | [MakePeaceDetail](/v1.3.15/zh/api/campaign-ext/MakePeaceDetail.md) | 🔗 |
| C | [MakePregnantAction](/v1.3.15/zh/api/campaign-ext/MakePregnantAction.md) | 🔗 |
| C | [MarriageAction](/v1.3.15/zh/api/campaign-ext/MarriageAction.md) | 🔗 |
| C | [PayForCrimeAction](/v1.3.15/zh/api/campaign-ext/PayForCrimeAction.md) | 🔗 |
| C | [RaftStateChangeAction](/v1.3.15/zh/api/campaign-ext/RaftStateChangeAction.md) | 🔗 |
| C | [RemoveCompanionAction](/v1.3.15/zh/api/campaign-ext/RemoveCompanionAction.md) | 🔗 |
| E | [RemoveCompanionDetail](/v1.3.15/zh/api/campaign-ext/RemoveCompanionDetail.md) | 🔗 |
| C | [RepairShipAction](/v1.3.15/zh/api/campaign-ext/RepairShipAction.md) | 🔗 |
| C | [SellGoodsForTradeAction](/v1.3.15/zh/api/campaign-ext/SellGoodsForTradeAction.md) | 🔗 |
| C | [SellItemsAction](/v1.3.15/zh/api/campaign-ext/SellItemsAction.md) | 🔗 |
| C | [SellPrisonersAction](/v1.3.15/zh/api/campaign-ext/SellPrisonersAction.md) | 🔗 |
| C | [SetPartyAiAction](/v1.3.15/zh/api/campaign-ext/SetPartyAiAction.md) | 🔗 |
| E | [ShipDestroyDetail](/v1.3.15/zh/api/campaign-ext/ShipDestroyDetail.md) | 🔗 |
| E | [ShipOwnerChangeDetail](/v1.3.15/zh/api/campaign-ext/ShipOwnerChangeDetail.md) | 🔗 |
| E | [SiegeAftermath](/v1.3.15/zh/api/campaign-ext/SiegeAftermath.md) | 🔗 |
| C | [SiegeAftermathAction](/v1.3.15/zh/api/campaign-ext/SiegeAftermathAction.md) | 🔗 |
| C | [StartBattleAction](/v1.3.15/zh/api/campaign-ext/StartBattleAction.md) | 🔗 |
| C | [StartMercenaryServiceAction](/v1.3.15/zh/api/campaign-ext/StartMercenaryServiceAction.md) | 🔗 |
| E | [StartMercenaryServiceActionDetails](/v1.3.15/zh/api/campaign-ext/StartMercenaryServiceActionDetails.md) | 🔗 |
| C | [TakePrisonerAction](/v1.3.15/zh/api/campaign-ext/TakePrisonerAction.md) | 🔗 |
| E | [TeleportationDetail](/v1.3.15/zh/api/campaign-ext/TeleportationDetail.md) | 🔗 |
| C | [TeleportHeroAction](/v1.3.15/zh/api/campaign-ext/TeleportHeroAction.md) | 🔗 |
| C | [TransferPrisonerAction](/v1.3.15/zh/api/campaign-ext/TransferPrisonerAction.md) | 🔗 |

## TaleWorlds.CampaignSystem.AgentOrigins (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyAgentOrigin](/v1.3.15/zh/api/campaign-ext/PartyAgentOrigin.md) | 🔗 |
| C | [PartyGroupAgentOrigin](/v1.3.15/zh/api/campaign-ext/PartyGroupAgentOrigin.md) | 🔗 |
| C | [SimpleAgentOrigin](/v1.3.15/zh/api/campaign-ext/SimpleAgentOrigin.md) | 🔗 |

## TaleWorlds.CampaignSystem.BarterSystem (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterData](/v1.3.15/zh/api/campaign-ext/BarterData.md) | 🔗 |
| C | [BarterGroup](/v1.3.15/zh/api/campaign-ext/BarterGroup.md) | 🔗 |
| C | [BarterManager](/v1.3.15/zh/api/campaign-ext/BarterManager.md) | 🔗 |
| C | [BarterResult](/v1.3.15/zh/api/campaign-ext/BarterResult.md) | 🔗 |
| C | [DefaultsBarterGroup](/v1.3.15/zh/api/campaign-ext/DefaultsBarterGroup.md) | 🔗 |
| C | [FiefBarterGroup](/v1.3.15/zh/api/campaign-ext/FiefBarterGroup.md) | 🔗 |
| C | [GoldBarterGroup](/v1.3.15/zh/api/campaign-ext/GoldBarterGroup.md) | 🔗 |
| C | [ItemBarterGroup](/v1.3.15/zh/api/campaign-ext/ItemBarterGroup.md) | 🔗 |
| C | [OtherBarterGroup](/v1.3.15/zh/api/campaign-ext/OtherBarterGroup.md) | 🔗 |
| C | [PrisonerBarterGroup](/v1.3.15/zh/api/campaign-ext/PrisonerBarterGroup.md) | 🔗 |

## TaleWorlds.CampaignSystem.BarterSystem.Barterables (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Barterable](/v1.3.15/zh/api/campaign-ext/Barterable.md) | 🔗 |
| E | [BarterSide](/v1.3.15/zh/api/campaign-ext/BarterSide.md) | 🔗 |
| C | [DeclareWarBarterable](/v1.3.15/zh/api/campaign-ext/DeclareWarBarterable.md) | 🔗 |
| C | [FiefBarterable](/v1.3.15/zh/api/campaign-ext/FiefBarterable.md) | 🔗 |
| C | [GoldBarterable](/v1.3.15/zh/api/campaign-ext/GoldBarterable.md) | 🔗 |
| C | [ItemBarterable](/v1.3.15/zh/api/campaign-ext/ItemBarterable.md) | 🔗 |
| C | [JoinKingdomAsClanBarterable](/v1.3.15/zh/api/campaign-ext/JoinKingdomAsClanBarterable.md) | 🔗 |
| C | [LeaveKingdomAsClanBarterable](/v1.3.15/zh/api/campaign-ext/LeaveKingdomAsClanBarterable.md) | 🔗 |
| C | [MarriageBarterable](/v1.3.15/zh/api/campaign-ext/MarriageBarterable.md) | 🔗 |
| C | [MercenaryJoinKingdomBarterable](/v1.3.15/zh/api/campaign-ext/MercenaryJoinKingdomBarterable.md) | 🔗 |
| C | [NoAttackBarterable](/v1.3.15/zh/api/campaign-ext/NoAttackBarterable.md) | 🔗 |
| C | [PeaceBarterable](/v1.3.15/zh/api/campaign-ext/PeaceBarterable.md) | 🔗 |
| C | [SafePassageBarterable](/v1.3.15/zh/api/campaign-ext/SafePassageBarterable.md) | 🔗 |
| C | [SetPrisonerFreeBarterable](/v1.3.15/zh/api/campaign-ext/SetPrisonerFreeBarterable.md) | 🔗 |
| C | [TransferPrisonerBarterable](/v1.3.15/zh/api/campaign-ext/TransferPrisonerBarterable.md) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors (159)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AgingCampaignBehavior](/v1.3.15/zh/api/campaign-ext/AgingCampaignBehavior.md) | 🔗 |
| C | [AllianceCampaignBehavior](/v1.3.15/zh/api/campaign-ext/AllianceCampaignBehavior.md) | 🔗 |
| C | [AllianceCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/AllianceCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [BackstoryCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BackstoryCampaignBehavior.md) | 🔗 |
| C | [BanditInteractionsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BanditInteractionsCampaignBehavior.md) | 🔗 |
| C | [BanditInteractionsCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/BanditInteractionsCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [BanditSpawnCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BanditSpawnCampaignBehavior.md) | 🔗 |
| C | [BannerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BannerCampaignBehavior.md) | 🔗 |
| C | [BattleCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BattleCampaignBehavior.md) | 🔗 |
| C | [BuildingsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/BuildingsCampaignBehavior.md) | 🔗 |
| C | [CampaignBattleRecoveryBehavior](/v1.3.15/zh/api/campaign-ext/CampaignBattleRecoveryBehavior.md) | 🔗 |
| C | [CampaignBehaviorManager](/v1.3.15/zh/api/campaign-ext/CampaignBehaviorManager.md) | 🔗 |
| C | [CampaignFactionManagerBehaviour](/v1.3.15/zh/api/campaign-ext/CampaignFactionManagerBehaviour.md) | 🔗 |
| C | [CampaignWarManagerBehavior](/v1.3.15/zh/api/campaign-ext/CampaignWarManagerBehavior.md) | 🔗 |
| C | [CaravanConversationsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CaravanConversationsCampaignBehavior.md) | 🔗 |
| C | [CaravansCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CaravansCampaignBehavior.md) | 🔗 |
| C | [CaravansCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/CaravansCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [CharacterCreationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CharacterCreationCampaignBehavior.md) | 🔗 |
| C | [CharacterDevelopmentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CharacterDevelopmentCampaignBehavior.md) | 🔗 |
| C | [CharacterRelationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CharacterRelationCampaignBehavior.md) | 🔗 |
| C | [ClanVariablesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ClanVariablesCampaignBehavior.md) | 🔗 |
| C | [CompanionGrievanceBehavior](/v1.3.15/zh/api/campaign-ext/CompanionGrievanceBehavior.md) | 🔗 |
| C | [CompanionGrievanceBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/CompanionGrievanceBehaviorTypeDefiner.md) | 🔗 |
| C | [CompanionRolesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CompanionRolesCampaignBehavior.md) | 🔗 |
| C | [CompanionsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CompanionsCampaignBehavior.md) | 🔗 |
| C | [CraftingCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CraftingCampaignBehavior.md) | 🔗 |
| C | [CraftingCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/CraftingCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [CraftingOrderSlots](/v1.3.15/zh/api/campaign-ext/CraftingOrderSlots.md) | 🔗 |
| C | [CrimeCampaignBehavior](/v1.3.15/zh/api/campaign-ext/CrimeCampaignBehavior.md) | 🔗 |
| C | [DefaultLogsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DefaultLogsCampaignBehavior.md) | 🔗 |
| C | [DesertersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DesertersCampaignBehavior.md) | 🔗 |
| C | [DesertionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DesertionCampaignBehavior.md) | 🔗 |
| C | [DisbandPartyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DisbandPartyCampaignBehavior.md) | 🔗 |
| C | [DiscardItemsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DiscardItemsCampaignBehavior.md) | 🔗 |
| C | [DynamicBodyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/DynamicBodyCampaignBehavior.md) | 🔗 |
| C | [EducationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/EducationCampaignBehavior.md) | 🔗 |
| S | [EducationCharacterProperties](/v1.3.15/zh/api/campaign-ext/EducationCharacterProperties.md) | 🔗 |
| C | [EmissarySystemCampaignBehavior](/v1.3.15/zh/api/campaign-ext/EmissarySystemCampaignBehavior.md) | 🔗 |
| C | [EncounterGameMenuBehavior](/v1.3.15/zh/api/campaign-ext/EncounterGameMenuBehavior.md) | 🔗 |
| C | [FactionDiscontinuationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/FactionDiscontinuationCampaignBehavior.md) | 🔗 |
| C | [FindingItemOnMapBehavior](/v1.3.15/zh/api/campaign-ext/FindingItemOnMapBehavior.md) | 🔗 |
| C | [FoodConsumptionBehavior](/v1.3.15/zh/api/campaign-ext/FoodConsumptionBehavior.md) | 🔗 |
| C | [GarrisonRecruitmentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/GarrisonRecruitmentCampaignBehavior.md) | 🔗 |
| C | [GarrisonTroopsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/GarrisonTroopsCampaignBehavior.md) | 🔗 |
| C | [GovernorCampaignBehavior](/v1.3.15/zh/api/campaign-ext/GovernorCampaignBehavior.md) | 🔗 |
| C | [HeroAgentSpawnCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HeroAgentSpawnCampaignBehavior.md) | 🔗 |
| C | [HeroKnownInformationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HeroKnownInformationCampaignBehavior.md) | 🔗 |
| C | [HeroSpawnCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HeroSpawnCampaignBehavior.md) | 🔗 |
| C | [HideoutCampaignBehavior](/v1.3.15/zh/api/campaign-ext/HideoutCampaignBehavior.md) | 🔗 |
| I | [IAlleyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IAlleyCampaignBehavior.md) | 🔗 |
| I | [IAllianceCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IAllianceCampaignBehavior.md) | 🔗 |
| I | [ICaptivityCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ICaptivityCampaignBehavior.md) | 🔗 |
| I | [ICraftingCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ICraftingCampaignBehavior.md) | 🔗 |
| I | [IDisbandPartyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IDisbandPartyCampaignBehavior.md) | 🔗 |
| I | [IEducationLogic](/v1.3.15/zh/api/campaign-ext/IEducationLogic.md) | 🔗 |
| I | [IFacegenCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IFacegenCampaignBehavior.md) | 🔗 |
| I | [IGarrisonRecruitmentBehavior](/v1.3.15/zh/api/campaign-ext/IGarrisonRecruitmentBehavior.md) | 🔗 |
| I | [IHideoutCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IHideoutCampaignBehavior.md) | 🔗 |
| I | [IMapTracksCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IMapTracksCampaignBehavior.md) | 🔗 |
| I | [IMarriageOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IMarriageOfferCampaignBehavior.md) | 🔗 |
| C | [IncidentsCampaignBehaviour](/v1.3.15/zh/api/campaign-ext/IncidentsCampaignBehaviour.md) | 🔗 |
| E | [IncidentTrigger](/v1.3.15/zh/api/campaign-ext/IncidentTrigger.md) | 🔗 |
| E | [IncidentType](/v1.3.15/zh/api/campaign-ext/IncidentType.md) | 🔗 |
| C | [InfluenceGainCampaignBehavior](/v1.3.15/zh/api/campaign-ext/InfluenceGainCampaignBehavior.md) | 🔗 |
| C | [InitialChildGenerationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/InitialChildGenerationCampaignBehavior.md) | 🔗 |
| I | [INonReadyObjectHandler](/v1.3.15/zh/api/campaign-ext/INonReadyObjectHandler.md) | 🔗 |
| I | [IParleyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IParleyCampaignBehavior.md) | 🔗 |
| I | [IPatrolPartiesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IPatrolPartiesCampaignBehavior.md) | 🔗 |
| I | [IRetrainOutlawPartyMembersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IRetrainOutlawPartyMembersCampaignBehavior.md) | 🔗 |
| C | [IssuesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IssuesCampaignBehavior.md) | 🔗 |
| I | [IStatisticsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IStatisticsCampaignBehavior.md) | 🔗 |
| I | [ITeleportationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ITeleportationCampaignBehavior.md) | 🔗 |
| C | [ItemConsumptionBehavior](/v1.3.15/zh/api/campaign-ext/ItemConsumptionBehavior.md) | 🔗 |
| I | [ITradeAgreementsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ITradeAgreementsCampaignBehavior.md) | 🔗 |
| I | [ITradeRumorCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ITradeRumorCampaignBehavior.md) | 🔗 |
| I | [IVassalAndMercenaryOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IVassalAndMercenaryOfferCampaignBehavior.md) | 🔗 |
| I | [IWorkshopWarehouseCampaignBehavior](/v1.3.15/zh/api/campaign-ext/IWorkshopWarehouseCampaignBehavior.md) | 🔗 |
| C | [JournalLogsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/JournalLogsCampaignBehavior.md) | 🔗 |
| C | [KingdomDecisionProposalBehavior](/v1.3.15/zh/api/campaign-ext/KingdomDecisionProposalBehavior.md) | 🔗 |
| C | [LordConversationsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/LordConversationsCampaignBehavior.md) | 🔗 |
| C | [LordDefectionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/LordDefectionCampaignBehavior.md) | 🔗 |
| C | [LordDefectionCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordDefectionCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [MapTracksCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MapTracksCampaignBehavior.md) | 🔗 |
| C | [MapWeatherCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MapWeatherCampaignBehavior.md) | 🔗 |
| C | [MarriageOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MarriageOfferCampaignBehavior.md) | 🔗 |
| C | [MilitiasCampaignBehavior](/v1.3.15/zh/api/campaign-ext/MilitiasCampaignBehavior.md) | 🔗 |
| C | [MobilePartyTrainingBehavior](/v1.3.15/zh/api/campaign-ext/MobilePartyTrainingBehavior.md) | 🔗 |
| C | [NotableHelperCharacterCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NotableHelperCharacterCampaignBehavior.md) | 🔗 |
| C | [NotablePowerManagementBehavior](/v1.3.15/zh/api/campaign-ext/NotablePowerManagementBehavior.md) | 🔗 |
| C | [NotablesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NotablesCampaignBehavior.md) | 🔗 |
| C | [NotableSupportersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NotableSupportersCampaignBehavior.md) | 🔗 |
| C | [NPCEquipmentsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/NPCEquipmentsCampaignBehavior.md) | 🔗 |
| C | [Number](/v1.3.15/zh/api/campaign-ext/Number.md) | 🔗 |
| C | [OrderOfBattleCampaignBehavior](/v1.3.15/zh/api/campaign-ext/OrderOfBattleCampaignBehavior.md) | 🔗 |
| C | [OrderOfBattleFormationData](/v1.3.15/zh/api/campaign-ext/OrderOfBattleFormationData.md) | 🔗 |
| C | [ParleyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ParleyCampaignBehavior.md) | 🔗 |
| C | [PartiesBuyFoodCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesBuyFoodCampaignBehavior.md) | 🔗 |
| C | [PartiesBuyHorseCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesBuyHorseCampaignBehavior.md) | 🔗 |
| C | [PartiesSellLootCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesSellLootCampaignBehavior.md) | 🔗 |
| C | [PartiesSellPrisonerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartiesSellPrisonerCampaignBehavior.md) | 🔗 |
| C | [PartyDiplomaticHandlerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyDiplomaticHandlerCampaignBehavior.md) | 🔗 |
| C | [PartyHealCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyHealCampaignBehavior.md) | 🔗 |
| C | [PartyRolesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyRolesCampaignBehavior.md) | 🔗 |
| C | [PartyUpgraderCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PartyUpgraderCampaignBehavior.md) | 🔗 |
| C | [PatrolPartiesCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PatrolPartiesCampaignBehavior.md) | 🔗 |
| C | [PeaceOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PeaceOfferCampaignBehavior.md) | 🔗 |
| C | [PerkActivationHandlerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PerkActivationHandlerCampaignBehavior.md) | 🔗 |
| C | [PerkResetCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PerkResetCampaignBehavior.md) | 🔗 |
| C | [PlayerArmyWaitBehavior](/v1.3.15/zh/api/campaign-ext/PlayerArmyWaitBehavior.md) | 🔗 |
| C | [PlayerCaptivityCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PlayerCaptivityCampaignBehavior.md) | 🔗 |
| C | [PlayerTownVisitCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PlayerTownVisitCampaignBehavior.md) | 🔗 |
| C | [PlayerTrackCompanionBehavior](/v1.3.15/zh/api/campaign-ext/PlayerTrackCompanionBehavior.md) | 🔗 |
| C | [PlayerVariablesBehavior](/v1.3.15/zh/api/campaign-ext/PlayerVariablesBehavior.md) | 🔗 |
| C | [PoliticalStagnationAndBorderIncidentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PoliticalStagnationAndBorderIncidentCampaignBehavior.md) | 🔗 |
| C | [PregnancyCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PregnancyCampaignBehavior.md) | 🔗 |
| C | [PregnancyCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/PregnancyCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [PrisonerCaptureCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PrisonerCaptureCampaignBehavior.md) | 🔗 |
| C | [PrisonerRecruitCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PrisonerRecruitCampaignBehavior.md) | 🔗 |
| C | [PrisonerReleaseCampaignBehavior](/v1.3.15/zh/api/campaign-ext/PrisonerReleaseCampaignBehavior.md) | 🔗 |
| C | [RansomOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RansomOfferCampaignBehavior.md) | 🔗 |
| C | [RebellionsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RebellionsCampaignBehavior.md) | 🔗 |
| E | [RecruitingDetail](/v1.3.15/zh/api/campaign-ext/RecruitingDetail.md) | 🔗 |
| C | [RecruitmentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RecruitmentCampaignBehavior.md) | 🔗 |
| C | [RecruitmentCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/RecruitmentCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [RecruitPrisonersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RecruitPrisonersCampaignBehavior.md) | 🔗 |
| C | [RetrainOutlawPartyMembersBehavior](/v1.3.15/zh/api/campaign-ext/RetrainOutlawPartyMembersBehavior.md) | 🔗 |
| C | [RomanceCampaignBehavior](/v1.3.15/zh/api/campaign-ext/RomanceCampaignBehavior.md) | 🔗 |
| E | [RomanticPreference](/v1.3.15/zh/api/campaign-ext/RomanticPreference.md) | 🔗 |
| C | [SallyOutsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SallyOutsCampaignBehavior.md) | 🔗 |
| C | [SettlementClaimantCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SettlementClaimantCampaignBehavior.md) | 🔗 |
| C | [SettlementVariablesBehavior](/v1.3.15/zh/api/campaign-ext/SettlementVariablesBehavior.md) | 🔗 |
| C | [SiegeAftermathCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SiegeAftermathCampaignBehavior.md) | 🔗 |
| C | [SiegeAmbushCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SiegeAmbushCampaignBehavior.md) | 🔗 |
| C | [SiegeEventCampaignBehavior](/v1.3.15/zh/api/campaign-ext/SiegeEventCampaignBehavior.md) | 🔗 |
| C | [TeleportationCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TeleportationCampaignBehavior.md) | 🔗 |
| C | [TeleportationCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/TeleportationCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [TownMercenaryData](/v1.3.15/zh/api/campaign-ext/TownMercenaryData.md) | 🔗 |
| C | [TownSecurityCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TownSecurityCampaignBehavior.md) | 🔗 |
| S | [TradeAgreement](./campaign-ext/TradeAgreement.md) | 🔗 |
| C | [TradeAgreementsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeAgreementsCampaignBehavior.md) | 🔗 |
| C | [TradeAgreementsCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/TradeAgreementsCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [TradeCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeCampaignBehavior.md) | 🔗 |
| E | [TradeGoodType](/v1.3.15/zh/api/campaign-ext/TradeGoodType.md) | 🔗 |
| C | [TradeRumorsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeRumorsCampaignBehavior.md) | 🔗 |
| C | [TradeSkillCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TradeSkillCampaignBehavior.md) | 🔗 |
| C | [TradeSkillCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/TradeSkillCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [TributesCampaignBehaviour](/v1.3.15/zh/api/campaign-ext/TributesCampaignBehaviour.md) | 🔗 |
| C | [VassalAndMercenaryOfferCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VassalAndMercenaryOfferCampaignBehavior.md) | 🔗 |
| C | [ViewDataTrackerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/ViewDataTrackerCampaignBehavior.md) | 🔗 |
| C | [VillageGoodProductionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageGoodProductionCampaignBehavior.md) | 🔗 |
| C | [VillageHealCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageHealCampaignBehavior.md) | 🔗 |
| C | [VillageHostileActionCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageHostileActionCampaignBehavior.md) | 🔗 |
| C | [VillagerCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillagerCampaignBehavior.md) | 🔗 |
| C | [VillagerCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/VillagerCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [VillageTradeBoundCampaignBehavior](/v1.3.15/zh/api/campaign-ext/VillageTradeBoundCampaignBehavior.md) | 🔗 |
| S | [VolunteerTroop](/v1.3.15/zh/api/campaign-ext/VolunteerTroop.md) | 🔗 |
| C | [WorkshopsCampaignBehavior](/v1.3.15/zh/api/campaign-ext/WorkshopsCampaignBehavior.md) | 🔗 |
| C | [WorkshopsCampaignBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/WorkshopsCampaignBehaviorTypeDefiner.md) | 🔗 |
| C | [WorkshopsCharactersCampaignBehavior](/v1.3.15/zh/api/campaign-ext/WorkshopsCharactersCampaignBehavior.md) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AiArmyMemberBehavior](/v1.3.15/zh/api/campaign-ext/AiArmyMemberBehavior.md) | 🔗 |
| C | [AiEngagePartyBehavior](/v1.3.15/zh/api/campaign-ext/AiEngagePartyBehavior.md) | 🔗 |
| C | [AiLandBanditPatrollingBehavior](/v1.3.15/zh/api/campaign-ext/AiLandBanditPatrollingBehavior.md) | 🔗 |
| C | [AiMilitaryBehavior](/v1.3.15/zh/api/campaign-ext/AiMilitaryBehavior.md) | 🔗 |
| C | [AiPartyThinkBehavior](/v1.3.15/zh/api/campaign-ext/AiPartyThinkBehavior.md) | 🔗 |
| C | [AiPatrollingBehavior](/v1.3.15/zh/api/campaign-ext/AiPatrollingBehavior.md) | 🔗 |
| C | [AiVisitSettlementBehavior](/v1.3.15/zh/api/campaign-ext/AiVisitSettlementBehavior.md) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DiplomaticBartersBehavior](/v1.3.15/zh/api/campaign-ext/DiplomaticBartersBehavior.md) | 🔗 |
| C | [FiefBarterBehavior](/v1.3.15/zh/api/campaign-ext/FiefBarterBehavior.md) | 🔗 |
| C | [GoldBarterBehavior](/v1.3.15/zh/api/campaign-ext/GoldBarterBehavior.md) | 🔗 |
| C | [ItemBarterBehavior](/v1.3.15/zh/api/campaign-ext/ItemBarterBehavior.md) | 🔗 |
| C | [LiftSiegeBarterBehavior](/v1.3.15/zh/api/campaign-ext/LiftSiegeBarterBehavior.md) | 🔗 |
| C | [SetPrisonerFreeBarterBehavior](/v1.3.15/zh/api/campaign-ext/SetPrisonerFreeBarterBehavior.md) | 🔗 |
| C | [TransferPrisonerBarterBehavior](/v1.3.15/zh/api/campaign-ext/TransferPrisonerBarterBehavior.md) | 🔗 |

## TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CommentCharacterBornBehavior](/v1.3.15/zh/api/campaign-ext/CommentCharacterBornBehavior.md) | 🔗 |
| C | [CommentChildbirthBehavior](/v1.3.15/zh/api/campaign-ext/CommentChildbirthBehavior.md) | 🔗 |
| C | [CommentOnChangeRomanticStateBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnChangeRomanticStateBehavior.md) | 🔗 |
| C | [CommentOnChangeSettlementOwnerBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnChangeSettlementOwnerBehavior.md) | 🔗 |
| C | [CommentOnChangeVillageStateBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnChangeVillageStateBehavior.md) | 🔗 |
| C | [CommentOnCharacterKilledBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnCharacterKilledBehavior.md) | 🔗 |
| C | [CommentOnClanDestroyedBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnClanDestroyedBehavior.md) | 🔗 |
| C | [CommentOnClanLeaderChangedBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnClanLeaderChangedBehavior.md) | 🔗 |
| C | [CommentOnDeclareWarBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnDeclareWarBehavior.md) | 🔗 |
| C | [CommentOnDefeatCharacterBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnDefeatCharacterBehavior.md) | 🔗 |
| C | [CommentOnDestroyMobilePartyBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnDestroyMobilePartyBehavior.md) | 🔗 |
| C | [CommentOnEndPlayerBattleBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnEndPlayerBattleBehavior.md) | 🔗 |
| C | [CommentOnKingdomDestroyedBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnKingdomDestroyedBehavior.md) | 🔗 |
| C | [CommentOnLeaveFactionBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnLeaveFactionBehavior.md) | 🔗 |
| C | [CommentOnMakePeaceBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnMakePeaceBehavior.md) | 🔗 |
| C | [CommentOnPlayerMeetLordBehavior](/v1.3.15/zh/api/campaign-ext/CommentOnPlayerMeetLordBehavior.md) | 🔗 |
| C | [CommentPregnancyBehavior](/v1.3.15/zh/api/campaign-ext/CommentPregnancyBehavior.md) | 🔗 |

## TaleWorlds.CampaignSystem.CharacterCreationContent (18)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationBannerEditorStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationBannerEditorStage.md) | 🔗 |
| C | [CharacterCreationClanNamingStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationClanNamingStage.md) | 🔗 |
| C | [CharacterCreationContent](/v1.3.15/zh/api/campaign-ext/CharacterCreationContent.md) | 🔗 |
| C | [CharacterCreationCultureStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureStage.md) | 🔗 |
| C | [CharacterCreationFaceGeneratorStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationFaceGeneratorStage.md) | 🔗 |
| C | [CharacterCreationManager](/v1.3.15/zh/api/campaign-ext/CharacterCreationManager.md) | 🔗 |
| C | [CharacterCreationNarrativeStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationNarrativeStage.md) | 🔗 |
| C | [CharacterCreationOptionsStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationOptionsStage.md) | 🔗 |
| C | [CharacterCreationReviewStage](/v1.3.15/zh/api/campaign-ext/CharacterCreationReviewStage.md) | 🔗 |
| C | [CharacterCreationStageBase](/v1.3.15/zh/api/campaign-ext/CharacterCreationStageBase.md) | 🔗 |
| C | [CharacterCreationState](/v1.3.15/zh/api/campaign-ext/CharacterCreationState.md) | 🔗 |
| I | [ICharacterCreationContentHandler](/v1.3.15/zh/api/campaign-ext/ICharacterCreationContentHandler.md) | 🔗 |
| I | [ICharacterCreationStageListener](/v1.3.15/zh/api/campaign-ext/ICharacterCreationStageListener.md) | 🔗 |
| I | [ICharacterCreationStateHandler](/v1.3.15/zh/api/campaign-ext/ICharacterCreationStateHandler.md) | 🔗 |
| C | [NarrativeMenu](/v1.3.15/zh/api/campaign-ext/NarrativeMenu.md) | 🔗 |
| C | [NarrativeMenuCharacter](/v1.3.15/zh/api/campaign-ext/NarrativeMenuCharacter.md) | 🔗 |
| C | [NarrativeMenuOption](/v1.3.15/zh/api/campaign-ext/NarrativeMenuOption.md) | 🔗 |
| C | [NarrativeMenuOptionArgs](/v1.3.15/zh/api/campaign-ext/NarrativeMenuOptionArgs.md) | 🔗 |

## TaleWorlds.CampaignSystem.CharacterDevelopment (30)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AdditionType](/v1.3.15/zh/api/campaign-ext/AdditionType.md) | 🔗 |
| C | [Athletics](/v1.3.15/zh/api/campaign-ext/Athletics.md) | 🔗 |
| C | [Bow](/v1.3.15/zh/api/campaign-ext/Bow.md) | 🔗 |
| C | [Charm](/v1.3.15/zh/api/campaign-ext/Charm.md) | 🔗 |
| C | [Crafting](/v1.3.15/zh/api/campaign-ext/Crafting.md) | 🔗 |
| C | [Crossbow](/v1.3.15/zh/api/campaign-ext/Crossbow.md) | 🔗 |
| C | [DefaultCulturalFeats](/v1.3.15/zh/api/campaign-ext/DefaultCulturalFeats.md) | 🔗 |
| C | [DefaultPerks](/v1.3.15/zh/api/campaign-ext/DefaultPerks.md) | 🔗 |
| C | [DefaultSkillLevelingManager](/v1.3.15/zh/api/campaign-ext/DefaultSkillLevelingManager.md) | 🔗 |
| C | [DefaultTraits](/v1.3.15/zh/api/campaign-ext/DefaultTraits.md) | 🔗 |
| C | [Engineering](/v1.3.15/zh/api/campaign-ext/Engineering.md) | 🔗 |
| C | [FeatObject](/v1.3.15/zh/api/campaign-ext/FeatObject.md) | 🔗 |
| C | [HeroDeveloper](/v1.3.15/zh/api/campaign-ext/HeroDeveloper.md) | 🔗 |
| I | [ISkillLevelingManager](/v1.3.15/zh/api/campaign-ext/ISkillLevelingManager.md) | 🔗 |
| C | [Leadership](/v1.3.15/zh/api/campaign-ext/Leadership.md) | 🔗 |
| C | [Medicine](/v1.3.15/zh/api/campaign-ext/Medicine.md) | 🔗 |
| C | [OneHanded](/v1.3.15/zh/api/campaign-ext/OneHanded.md) | 🔗 |
| C | [PerkObject](/v1.3.15/zh/api/campaign-ext/PerkObject.md) | 🔗 |
| C | [Polearm](/v1.3.15/zh/api/campaign-ext/Polearm.md) | 🔗 |
| C | [Riding](/v1.3.15/zh/api/campaign-ext/Riding.md) | 🔗 |
| C | [Roguery](/v1.3.15/zh/api/campaign-ext/Roguery.md) | 🔗 |
| C | [Scouting](/v1.3.15/zh/api/campaign-ext/Scouting.md) | 🔗 |
| C | [SkillLevelingManager](/v1.3.15/zh/api/campaign-ext/SkillLevelingManager.md) | 🔗 |
| C | [Steward](/v1.3.15/zh/api/campaign-ext/Steward.md) | 🔗 |
| C | [Tactics](/v1.3.15/zh/api/campaign-ext/Tactics.md) | 🔗 |
| C | [Throwing](/v1.3.15/zh/api/campaign-ext/Throwing.md) | 🔗 |
| C | [Trade](/v1.3.15/zh/api/campaign-ext/Trade.md) | 🔗 |
| C | [TraitLevelingHelper](/v1.3.15/zh/api/campaign-ext/TraitLevelingHelper.md) | 🔗 |
| C | [TraitObject](/v1.3.15/zh/api/campaign-ext/TraitObject.md) | 🔗 |
| C | [TwoHanded](/v1.3.15/zh/api/campaign-ext/TwoHanded.md) | 🔗 |

## TaleWorlds.CampaignSystem.ComponentInterfaces (142)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [AccessDetails](/v1.3.15/zh/api/campaign-ext/AccessDetails.md) | 🔗 |
| E | [AccessLevel](/v1.3.15/zh/api/campaign-ext/AccessLevel.md) | 🔗 |
| E | [AccessLimitationReason](/v1.3.15/zh/api/campaign-ext/AccessLimitationReason.md) | 🔗 |
| E | [AccessMethod](/v1.3.15/zh/api/campaign-ext/AccessMethod.md) | 🔗 |
| C | [AgeModel](/v1.3.15/zh/api/campaign-ext/AgeModel.md) | 🔗 |
| C | [AlleyModel](/v1.3.15/zh/api/campaign-ext/AlleyModel.md) | 🔗 |
| C | [AllianceModel](/v1.3.15/zh/api/campaign-ext/AllianceModel.md) | 🔗 |
| C | [ArmyManagementCalculationModel](/v1.3.15/zh/api/campaign-ext/ArmyManagementCalculationModel.md) | 🔗 |
| C | [BanditDensityModel](/v1.3.15/zh/api/campaign-ext/BanditDensityModel.md) | 🔗 |
| C | [BannerItemModel](/v1.3.15/zh/api/campaign-ext/BannerItemModel.md) | 🔗 |
| C | [BarterModel](/v1.3.15/zh/api/campaign-ext/BarterModel.md) | 🔗 |
| C | [BattleCaptainModel](/v1.3.15/zh/api/campaign-ext/BattleCaptainModel.md) | 🔗 |
| C | [BattleRewardModel](/v1.3.15/zh/api/campaign-ext/BattleRewardModel.md) | 🔗 |
| C | [BodyPropertiesModel](/v1.3.15/zh/api/campaign-ext/BodyPropertiesModel.md) | 🔗 |
| C | [BribeCalculationModel](/v1.3.15/zh/api/campaign-ext/BribeCalculationModel.md) | 🔗 |
| C | [BuildingConstructionModel](/v1.3.15/zh/api/campaign-ext/BuildingConstructionModel.md) | 🔗 |
| C | [BuildingEffectModel](/v1.3.15/zh/api/campaign-ext/BuildingEffectModel.md) | 🔗 |
| C | [BuildingModel](/v1.3.15/zh/api/campaign-ext/BuildingModel.md) | 🔗 |
| C | [BuildingScoreCalculationModel](/v1.3.15/zh/api/campaign-ext/BuildingScoreCalculationModel.md) | 🔗 |
| C | [CampaignShipDamageModel](/v1.3.15/zh/api/campaign-ext/CampaignShipDamageModel.md) | 🔗 |
| C | [CampaignShipParametersModel](/v1.3.15/zh/api/campaign-ext/CampaignShipParametersModel.md) | 🔗 |
| C | [CampaignTimeModel](/v1.3.15/zh/api/campaign-ext/CampaignTimeModel.md) | 🔗 |
| C | [CaravanModel](/v1.3.15/zh/api/campaign-ext/CaravanModel.md) | 🔗 |
| C | [CharacterDevelopmentModel](/v1.3.15/zh/api/campaign-ext/CharacterDevelopmentModel.md) | 🔗 |
| C | [CharacterStatsModel](/v1.3.15/zh/api/campaign-ext/CharacterStatsModel.md) | 🔗 |
| C | [ClanFinanceModel](/v1.3.15/zh/api/campaign-ext/ClanFinanceModel.md) | 🔗 |
| C | [ClanMemberPartyRoleModel](./campaign-ext/ClanMemberPartyRoleModel.md) | 🔗 |
| C | [ClanPoliticsModel](/v1.3.15/zh/api/campaign-ext/ClanPoliticsModel.md) | 🔗 |
| C | [ClanTierModel](/v1.3.15/zh/api/campaign-ext/ClanTierModel.md) | 🔗 |
| C | [CombatSimulationModel](/v1.3.15/zh/api/campaign-ext/CombatSimulationModel.md) | 🔗 |
| C | [CombatXpModel](/v1.3.15/zh/api/campaign-ext/CombatXpModel.md) | 🔗 |
| C | [CompanionHiringPriceCalculationModel](/v1.3.15/zh/api/campaign-ext/CompanionHiringPriceCalculationModel.md) | 🔗 |
| C | [CrimeModel](/v1.3.15/zh/api/campaign-ext/CrimeModel.md) | 🔗 |
| C | [CutsceneSelectionModel](/v1.3.15/zh/api/campaign-ext/CutsceneSelectionModel.md) | 🔗 |
| C | [DailyTroopXpBonusModel](/v1.3.15/zh/api/campaign-ext/DailyTroopXpBonusModel.md) | 🔗 |
| C | [DefectionModel](/v1.3.15/zh/api/campaign-ext/DefectionModel.md) | 🔗 |
| C | [DelayedTeleportationModel](/v1.3.15/zh/api/campaign-ext/DelayedTeleportationModel.md) | 🔗 |
| C | [DifficultyModel](/v1.3.15/zh/api/campaign-ext/DifficultyModel.md) | 🔗 |
| C | [DiplomacyModel](/v1.3.15/zh/api/campaign-ext/DiplomacyModel.md) | 🔗 |
| E | [DiplomacyStance](/v1.3.15/zh/api/campaign-ext/DiplomacyStance.md) | 🔗 |
| C | [DisguiseDetectionModel](/v1.3.15/zh/api/campaign-ext/DisguiseDetectionModel.md) | 🔗 |
| C | [EmissaryModel](/v1.3.15/zh/api/campaign-ext/EmissaryModel.md) | 🔗 |
| C | [EncounterGameMenuModel](/v1.3.15/zh/api/campaign-ext/EncounterGameMenuModel.md) | 🔗 |
| C | [EncounterModel](/v1.3.15/zh/api/campaign-ext/EncounterModel.md) | 🔗 |
| C | [EquipmentSelectionModel](/v1.3.15/zh/api/campaign-ext/EquipmentSelectionModel.md) | 🔗 |
| C | [ExecutionRelationModel](/v1.3.15/zh/api/campaign-ext/ExecutionRelationModel.md) | 🔗 |
| C | [FleetManagementModel](/v1.3.15/zh/api/campaign-ext/FleetManagementModel.md) | 🔗 |
| C | [GenericXpModel](/v1.3.15/zh/api/campaign-ext/GenericXpModel.md) | 🔗 |
| C | [HeirSelectionCalculationModel](/v1.3.15/zh/api/campaign-ext/HeirSelectionCalculationModel.md) | 🔗 |
| C | [HeroAgentLocationModel](/v1.3.15/zh/api/campaign-ext/HeroAgentLocationModel.md) | 🔗 |
| C | [HeroCreationModel](/v1.3.15/zh/api/campaign-ext/HeroCreationModel.md) | 🔗 |
| C | [HeroDeathProbabilityCalculationModel](/v1.3.15/zh/api/campaign-ext/HeroDeathProbabilityCalculationModel.md) | 🔗 |
| E | [HeroLocationDetail](/v1.3.15/zh/api/campaign-ext/HeroLocationDetail.md) | 🔗 |
| C | [HideoutModel](/v1.3.15/zh/api/campaign-ext/HideoutModel.md) | 🔗 |
| I | [INavigationCache](/v1.3.15/zh/api/campaign-ext/INavigationCache.md) | 🔗 |
| C | [IncidentModel](/v1.3.15/zh/api/campaign-ext/IncidentModel.md) | 🔗 |
| C | [InformationRestrictionModel](/v1.3.15/zh/api/campaign-ext/InformationRestrictionModel.md) | 🔗 |
| C | [InventoryCapacityModel](/v1.3.15/zh/api/campaign-ext/InventoryCapacityModel.md) | 🔗 |
| C | [IssueModel](/v1.3.15/zh/api/campaign-ext/IssueModel.md) | 🔗 |
| C | [ItemDiscardModel](/v1.3.15/zh/api/campaign-ext/ItemDiscardModel.md) | 🔗 |
| C | [KingdomCreationModel](/v1.3.15/zh/api/campaign-ext/KingdomCreationModel.md) | 🔗 |
| C | [KingdomDecisionPermissionModel](/v1.3.15/zh/api/campaign-ext/KingdomDecisionPermissionModel.md) | 🔗 |
| E | [LimitedAccessSolution](/v1.3.15/zh/api/campaign-ext/LimitedAccessSolution.md) | 🔗 |
| C | [LocationModel](/v1.3.15/zh/api/campaign-ext/LocationModel.md) | 🔗 |
| C | [MapDistanceModel](/v1.3.15/zh/api/campaign-ext/MapDistanceModel.md) | 🔗 |
| C | [MapTrackModel](/v1.3.15/zh/api/campaign-ext/MapTrackModel.md) | 🔗 |
| C | [MapVisibilityModel](/v1.3.15/zh/api/campaign-ext/MapVisibilityModel.md) | 🔗 |
| C | [MapWeatherModel](/v1.3.15/zh/api/campaign-ext/MapWeatherModel.md) | 🔗 |
| C | [MarriageModel](/v1.3.15/zh/api/campaign-ext/MarriageModel.md) | 🔗 |
| C | [MilitaryPowerModel](/v1.3.15/zh/api/campaign-ext/MilitaryPowerModel.md) | 🔗 |
| C | [MinorFactionsModel](/v1.3.15/zh/api/campaign-ext/MinorFactionsModel.md) | 🔗 |
| E | [MissionTypeEnum](/v1.3.15/zh/api/campaign-ext/MissionTypeEnum.md) | 🔗 |
| C | [MobilePartyAIModel](/v1.3.15/zh/api/campaign-ext/MobilePartyAIModel.md) | 🔗 |
| C | [MobilePartyFoodConsumptionModel](/v1.3.15/zh/api/campaign-ext/MobilePartyFoodConsumptionModel.md) | 🔗 |
| C | [MobilePartyMoraleModel](/v1.3.15/zh/api/campaign-ext/MobilePartyMoraleModel.md) | 🔗 |
| C | [NotablePowerModel](/v1.3.15/zh/api/campaign-ext/NotablePowerModel.md) | 🔗 |
| C | [NotableSpawnModel](/v1.3.15/zh/api/campaign-ext/NotableSpawnModel.md) | 🔗 |
| C | [PartyDesertionModel](/v1.3.15/zh/api/campaign-ext/PartyDesertionModel.md) | 🔗 |
| C | [PartyFoodBuyingModel](/v1.3.15/zh/api/campaign-ext/PartyFoodBuyingModel.md) | 🔗 |
| C | [PartyHealingModel](/v1.3.15/zh/api/campaign-ext/PartyHealingModel.md) | 🔗 |
| C | [PartyImpairmentModel](/v1.3.15/zh/api/campaign-ext/PartyImpairmentModel.md) | 🔗 |
| C | [PartyMoraleModel](/v1.3.15/zh/api/campaign-ext/PartyMoraleModel.md) | 🔗 |
| C | [PartyNavigationModel](/v1.3.15/zh/api/campaign-ext/PartyNavigationModel.md) | 🔗 |
| C | [PartyShipLimitModel](/v1.3.15/zh/api/campaign-ext/PartyShipLimitModel.md) | 🔗 |
| C | [PartySizeLimitModel](/v1.3.15/zh/api/campaign-ext/PartySizeLimitModel.md) | 🔗 |
| C | [PartySpeedModel](/v1.3.15/zh/api/campaign-ext/PartySpeedModel.md) | 🔗 |
| C | [PartyTradeModel](/v1.3.15/zh/api/campaign-ext/PartyTradeModel.md) | 🔗 |
| C | [PartyTrainingModel](/v1.3.15/zh/api/campaign-ext/PartyTrainingModel.md) | 🔗 |
| C | [PartyTransitionModel](/v1.3.15/zh/api/campaign-ext/PartyTransitionModel.md) | 🔗 |
| C | [PartyTroopUpgradeModel](/v1.3.15/zh/api/campaign-ext/PartyTroopUpgradeModel.md) | 🔗 |
| C | [PartyWageModel](/v1.3.15/zh/api/campaign-ext/PartyWageModel.md) | 🔗 |
| E | [PaymentMethod](/v1.3.15/zh/api/campaign-ext/PaymentMethod.md) | 🔗 |
| C | [PersuasionModel](/v1.3.15/zh/api/campaign-ext/PersuasionModel.md) | 🔗 |
| C | [PlayerProgressionModel](/v1.3.15/zh/api/campaign-ext/PlayerProgressionModel.md) | 🔗 |
| C | [PregnancyModel](/v1.3.15/zh/api/campaign-ext/PregnancyModel.md) | 🔗 |
| E | [PreliminaryActionObligation](/v1.3.15/zh/api/campaign-ext/PreliminaryActionObligation.md) | 🔗 |
| E | [PreliminaryActionType](/v1.3.15/zh/api/campaign-ext/PreliminaryActionType.md) | 🔗 |
| C | [PrisonBreakModel](/v1.3.15/zh/api/campaign-ext/PrisonBreakModel.md) | 🔗 |
| C | [PrisonerDonationModel](/v1.3.15/zh/api/campaign-ext/PrisonerDonationModel.md) | 🔗 |
| C | [PrisonerRecruitmentCalculationModel](/v1.3.15/zh/api/campaign-ext/PrisonerRecruitmentCalculationModel.md) | 🔗 |
| C | [RaidModel](/v1.3.15/zh/api/campaign-ext/RaidModel.md) | 🔗 |
| C | [RansomValueCalculationModel](/v1.3.15/zh/api/campaign-ext/RansomValueCalculationModel.md) | 🔗 |
| C | [RomanceModel](/v1.3.15/zh/api/campaign-ext/RomanceModel.md) | 🔗 |
| C | [SceneModel](/v1.3.15/zh/api/campaign-ext/SceneModel.md) | 🔗 |
| C | [SettlementAccessModel](/v1.3.15/zh/api/campaign-ext/SettlementAccessModel.md) | 🔗 |
| E | [SettlementAction](/v1.3.15/zh/api/campaign-ext/SettlementAction.md) | 🔗 |
| C | [SettlementEconomyModel](/v1.3.15/zh/api/campaign-ext/SettlementEconomyModel.md) | 🔗 |
| C | [SettlementFoodModel](/v1.3.15/zh/api/campaign-ext/SettlementFoodModel.md) | 🔗 |
| C | [SettlementGarrisonModel](/v1.3.15/zh/api/campaign-ext/SettlementGarrisonModel.md) | 🔗 |
| C | [SettlementLoyaltyModel](/v1.3.15/zh/api/campaign-ext/SettlementLoyaltyModel.md) | 🔗 |
| C | [SettlementMenuOverlayModel](/v1.3.15/zh/api/campaign-ext/SettlementMenuOverlayModel.md) | 🔗 |
| C | [SettlementMilitiaModel](/v1.3.15/zh/api/campaign-ext/SettlementMilitiaModel.md) | 🔗 |
| C | [SettlementPatrolModel](/v1.3.15/zh/api/campaign-ext/SettlementPatrolModel.md) | 🔗 |
| C | [SettlementProsperityModel](/v1.3.15/zh/api/campaign-ext/SettlementProsperityModel.md) | 🔗 |
| C | [SettlementSecurityModel](/v1.3.15/zh/api/campaign-ext/SettlementSecurityModel.md) | 🔗 |
| C | [SettlementTaxModel](/v1.3.15/zh/api/campaign-ext/SettlementTaxModel.md) | 🔗 |
| C | [SettlementValueModel](/v1.3.15/zh/api/campaign-ext/SettlementValueModel.md) | 🔗 |
| C | [ShipCostModel](/v1.3.15/zh/api/campaign-ext/ShipCostModel.md) | 🔗 |
| C | [ShipStatModel](/v1.3.15/zh/api/campaign-ext/ShipStatModel.md) | 🔗 |
| E | [SiegeAction](/v1.3.15/zh/api/campaign-ext/SiegeAction.md) | 🔗 |
| C | [SiegeAftermathModel](/v1.3.15/zh/api/campaign-ext/SiegeAftermathModel.md) | 🔗 |
| C | [SiegeEventModel](/v1.3.15/zh/api/campaign-ext/SiegeEventModel.md) | 🔗 |
| C | [SiegeLordsHallFightModel](/v1.3.15/zh/api/campaign-ext/SiegeLordsHallFightModel.md) | 🔗 |
| C | [SiegeStrategyActionModel](/v1.3.15/zh/api/campaign-ext/SiegeStrategyActionModel.md) | 🔗 |
| C | [SmithingModel](/v1.3.15/zh/api/campaign-ext/SmithingModel.md) | 🔗 |
| C | [TargetScoreCalculatingModel](/v1.3.15/zh/api/campaign-ext/TargetScoreCalculatingModel.md) | 🔗 |
| C | [TavernMercenaryTroopsModel](/v1.3.15/zh/api/campaign-ext/TavernMercenaryTroopsModel.md) | 🔗 |
| C | [TournamentModel](/v1.3.15/zh/api/campaign-ext/TournamentModel.md) | 🔗 |
| C | [TradeAgreementModel](/v1.3.15/zh/api/campaign-ext/TradeAgreementModel.md) | 🔗 |
| C | [TradeItemPriceFactorModel](/v1.3.15/zh/api/campaign-ext/TradeItemPriceFactorModel.md) | 🔗 |
| C | [TroopSacrificeModel](/v1.3.15/zh/api/campaign-ext/TroopSacrificeModel.md) | 🔗 |
| C | [TroopSupplierProbabilityModel](/v1.3.15/zh/api/campaign-ext/TroopSupplierProbabilityModel.md) | 🔗 |
| C | [ValuationModel](/v1.3.15/zh/api/campaign-ext/ValuationModel.md) | 🔗 |
| C | [VassalRewardsModel](/v1.3.15/zh/api/campaign-ext/VassalRewardsModel.md) | 🔗 |
| C | [VillageProductionCalculatorModel](/v1.3.15/zh/api/campaign-ext/VillageProductionCalculatorModel.md) | 🔗 |
| C | [VillageTradeModel](/v1.3.15/zh/api/campaign-ext/VillageTradeModel.md) | 🔗 |
| C | [VoiceOverModel](/v1.3.15/zh/api/campaign-ext/VoiceOverModel.md) | 🔗 |
| C | [VolunteerModel](/v1.3.15/zh/api/campaign-ext/VolunteerModel.md) | 🔗 |
| C | [WallHitPointCalculationModel](/v1.3.15/zh/api/campaign-ext/WallHitPointCalculationModel.md) | 🔗 |
| E | [WeatherEvent](/v1.3.15/zh/api/campaign-ext/WeatherEvent.md) | 🔗 |
| E | [WeatherEventEffectOnTerrain](/v1.3.15/zh/api/campaign-ext/WeatherEventEffectOnTerrain.md) | 🔗 |
| C | [WorkshopModel](/v1.3.15/zh/api/campaign-ext/WorkshopModel.md) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CampaignMapConversation](/v1.3.15/zh/api/campaign-ext/CampaignMapConversation.md) | 🔗 |
| C | [ConversationAnimationManager](/v1.3.15/zh/api/campaign-ext/ConversationAnimationManager.md) | 🔗 |
| C | [ConversationAnimData](/v1.3.15/zh/api/campaign-ext/ConversationAnimData.md) | 🔗 |
| S | [ConversationCharacterData](/v1.3.15/zh/api/campaign-ext/ConversationCharacterData.md) | 🔗 |
| C | [ConversationHelper](/v1.3.15/zh/api/campaign-ext/ConversationHelper.md) | 🔗 |
| C | [ConversationManager](/v1.3.15/zh/api/campaign-ext/ConversationManager.md) | 🔗 |
| C | [ConversationSentence](/v1.3.15/zh/api/campaign-ext/ConversationSentence.md) | 🔗 |
| S | [ConversationSentenceOption](/v1.3.15/zh/api/campaign-ext/ConversationSentenceOption.md) | 🔗 |
| E | [ConversationToken](/v1.3.15/zh/api/campaign-ext/ConversationToken.md) | 🔗 |
| C | [ConversationTokens](/v1.3.15/zh/api/campaign-ext/ConversationTokens.md) | 🔗 |
| E | [DialogLineFlags](/v1.3.15/zh/api/campaign-ext/DialogLineFlags.md) | 🔗 |
| I | [IConversationStateHandler](/v1.3.15/zh/api/campaign-ext/IConversationStateHandler.md) | 🔗 |
| C | [MapConversationAgent](/v1.3.15/zh/api/campaign-ext/MapConversationAgent.md) | 🔗 |
| C | [TaggedString](/v1.3.15/zh/api/campaign-ext/TaggedString.md) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation.Persuasion (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Persuasion](/v1.3.15/zh/api/campaign-ext/Persuasion.md) | 🔗 |
| E | [PersuasionArgumentStrength](/v1.3.15/zh/api/campaign-ext/PersuasionArgumentStrength.md) | 🔗 |
| C | [PersuasionAttempt](/v1.3.15/zh/api/campaign-ext/PersuasionAttempt.md) | 🔗 |
| E | [PersuasionDifficulty](/v1.3.15/zh/api/campaign-ext/PersuasionDifficulty.md) | 🔗 |
| C | [PersuasionOptionArgs](/v1.3.15/zh/api/campaign-ext/PersuasionOptionArgs.md) | 🔗 |
| E | [PersuasionOptionResult](/v1.3.15/zh/api/campaign-ext/PersuasionOptionResult.md) | 🔗 |
| C | [PersuasionTask](/v1.3.15/zh/api/campaign-ext/PersuasionTask.md) | 🔗 |
| E | [TraitEffect](/v1.3.15/zh/api/campaign-ext/TraitEffect.md) | 🔗 |

## TaleWorlds.CampaignSystem.Conversation.Tags (97)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AlliedLordTag](/v1.3.15/zh/api/campaign-ext/AlliedLordTag.md) | 🔗 |
| C | [AmoralTag](/v1.3.15/zh/api/campaign-ext/AmoralTag.md) | 🔗 |
| C | [AnyNotableTypeTag](/v1.3.15/zh/api/campaign-ext/AnyNotableTypeTag.md) | 🔗 |
| C | [ArtisanNotableTypeTag](/v1.3.15/zh/api/campaign-ext/ArtisanNotableTypeTag.md) | 🔗 |
| C | [AseraiTag](/v1.3.15/zh/api/campaign-ext/AseraiTag.md) | 🔗 |
| C | [AttackingTag](/v1.3.15/zh/api/campaign-ext/AttackingTag.md) | 🔗 |
| C | [AttractedToPlayerTag](/v1.3.15/zh/api/campaign-ext/AttractedToPlayerTag.md) | 🔗 |
| C | [BattanianTag](/v1.3.15/zh/api/campaign-ext/BattanianTag.md) | 🔗 |
| C | [CalculatingTag](/v1.3.15/zh/api/campaign-ext/CalculatingTag.md) | 🔗 |
| C | [CautiousTag](/v1.3.15/zh/api/campaign-ext/CautiousTag.md) | 🔗 |
| C | [ChivalrousTag](/v1.3.15/zh/api/campaign-ext/ChivalrousTag.md) | 🔗 |
| C | [CombatantTag](/v1.3.15/zh/api/campaign-ext/CombatantTag.md) | 🔗 |
| C | [ConversationTag](/v1.3.15/zh/api/campaign-ext/ConversationTag.md) | 🔗 |
| C | [ConversationTagHelper](/v1.3.15/zh/api/campaign-ext/ConversationTagHelper.md) | 🔗 |
| C | [CruelTag](/v1.3.15/zh/api/campaign-ext/CruelTag.md) | 🔗 |
| C | [CurrentConversationIsFirst](/v1.3.15/zh/api/campaign-ext/CurrentConversationIsFirst.md) | 🔗 |
| C | [DefaultTag](/v1.3.15/zh/api/campaign-ext/DefaultTag.md) | 🔗 |
| C | [DeviousTag](/v1.3.15/zh/api/campaign-ext/DeviousTag.md) | 🔗 |
| C | [DrinkingInTavernTag](/v1.3.15/zh/api/campaign-ext/DrinkingInTavernTag.md) | 🔗 |
| C | [EmpireTag](/v1.3.15/zh/api/campaign-ext/EmpireTag.md) | 🔗 |
| C | [EngagedToPlayerTag](/v1.3.15/zh/api/campaign-ext/EngagedToPlayerTag.md) | 🔗 |
| C | [FirstMeetingTag](/v1.3.15/zh/api/campaign-ext/FirstMeetingTag.md) | 🔗 |
| C | [FriendlyRelationshipTag](/v1.3.15/zh/api/campaign-ext/FriendlyRelationshipTag.md) | 🔗 |
| C | [GangLeaderNotableTypeTag](/v1.3.15/zh/api/campaign-ext/GangLeaderNotableTypeTag.md) | 🔗 |
| C | [GenerosityTag](/v1.3.15/zh/api/campaign-ext/GenerosityTag.md) | 🔗 |
| C | [HeadmanNotableTypeTag](/v1.3.15/zh/api/campaign-ext/HeadmanNotableTypeTag.md) | 🔗 |
| C | [HighRegisterTag](/v1.3.15/zh/api/campaign-ext/HighRegisterTag.md) | 🔗 |
| C | [HonorTag](/v1.3.15/zh/api/campaign-ext/HonorTag.md) | 🔗 |
| C | [HostileRelationshipTag](/v1.3.15/zh/api/campaign-ext/HostileRelationshipTag.md) | 🔗 |
| C | [ImpoliteTag](/v1.3.15/zh/api/campaign-ext/ImpoliteTag.md) | 🔗 |
| C | [ImpulsiveTag](/v1.3.15/zh/api/campaign-ext/ImpulsiveTag.md) | 🔗 |
| C | [InHomeSettlementTag](/v1.3.15/zh/api/campaign-ext/InHomeSettlementTag.md) | 🔗 |
| C | [KhuzaitTag](/v1.3.15/zh/api/campaign-ext/KhuzaitTag.md) | 🔗 |
| C | [LowRegisterTag](/v1.3.15/zh/api/campaign-ext/LowRegisterTag.md) | 🔗 |
| C | [MerchantNotableTypeTag](/v1.3.15/zh/api/campaign-ext/MerchantNotableTypeTag.md) | 🔗 |
| C | [MercyTag](/v1.3.15/zh/api/campaign-ext/MercyTag.md) | 🔗 |
| C | [MetBeforeTag](/v1.3.15/zh/api/campaign-ext/MetBeforeTag.md) | 🔗 |
| C | [NoConflictTag](/v1.3.15/zh/api/campaign-ext/NoConflictTag.md) | 🔗 |
| C | [NonCombatantTag](/v1.3.15/zh/api/campaign-ext/NonCombatantTag.md) | 🔗 |
| C | [NonviolentProfessionTag](/v1.3.15/zh/api/campaign-ext/NonviolentProfessionTag.md) | 🔗 |
| C | [NordTag](/v1.3.15/zh/api/campaign-ext/NordTag.md) | 🔗 |
| C | [NpcIsFemaleTag](/v1.3.15/zh/api/campaign-ext/NpcIsFemaleTag.md) | 🔗 |
| C | [NPCIsInSeaTag](/v1.3.15/zh/api/campaign-ext/NPCIsInSeaTag.md) | 🔗 |
| C | [NpcIsLiegeTag](/v1.3.15/zh/api/campaign-ext/NpcIsLiegeTag.md) | 🔗 |
| C | [NpcIsMaleTag](/v1.3.15/zh/api/campaign-ext/NpcIsMaleTag.md) | 🔗 |
| C | [NpcIsNobleTag](/v1.3.15/zh/api/campaign-ext/NpcIsNobleTag.md) | 🔗 |
| C | [OldTag](/v1.3.15/zh/api/campaign-ext/OldTag.md) | 🔗 |
| C | [OnTheRoadTag](/v1.3.15/zh/api/campaign-ext/OnTheRoadTag.md) | 🔗 |
| C | [OutlawSympathyTag](/v1.3.15/zh/api/campaign-ext/OutlawSympathyTag.md) | 🔗 |
| C | [PersonaCurtTag](/v1.3.15/zh/api/campaign-ext/PersonaCurtTag.md) | 🔗 |
| C | [PersonaEarnestTag](/v1.3.15/zh/api/campaign-ext/PersonaEarnestTag.md) | 🔗 |
| C | [PersonaIronicTag](/v1.3.15/zh/api/campaign-ext/PersonaIronicTag.md) | 🔗 |
| C | [PersonaSoftspokenTag](/v1.3.15/zh/api/campaign-ext/PersonaSoftspokenTag.md) | 🔗 |
| C | [PlayerBesiegingTag](/v1.3.15/zh/api/campaign-ext/PlayerBesiegingTag.md) | 🔗 |
| C | [PlayerIsAffiliatedTag](/v1.3.15/zh/api/campaign-ext/PlayerIsAffiliatedTag.md) | 🔗 |
| C | [PlayerIsAtSeaTag](/v1.3.15/zh/api/campaign-ext/PlayerIsAtSeaTag.md) | 🔗 |
| C | [PlayerIsBrotherTag](/v1.3.15/zh/api/campaign-ext/PlayerIsBrotherTag.md) | 🔗 |
| C | [PlayerIsDaughterTag](/v1.3.15/zh/api/campaign-ext/PlayerIsDaughterTag.md) | 🔗 |
| C | [PlayerIsEnemyTag](/v1.3.15/zh/api/campaign-ext/PlayerIsEnemyTag.md) | 🔗 |
| C | [PlayerIsFamousTag](/v1.3.15/zh/api/campaign-ext/PlayerIsFamousTag.md) | 🔗 |
| C | [PlayerIsFatherTag](/v1.3.15/zh/api/campaign-ext/PlayerIsFatherTag.md) | 🔗 |
| C | [PlayerIsFemaleTag](/v1.3.15/zh/api/campaign-ext/PlayerIsFemaleTag.md) | 🔗 |
| C | [PlayerIsKinTag](/v1.3.15/zh/api/campaign-ext/PlayerIsKinTag.md) | 🔗 |
| C | [PlayerIsKnownButNotFamousTag](/v1.3.15/zh/api/campaign-ext/PlayerIsKnownButNotFamousTag.md) | 🔗 |
| C | [PlayerIsLiegeTag](/v1.3.15/zh/api/campaign-ext/PlayerIsLiegeTag.md) | 🔗 |
| C | [PlayerIsMaleTag](/v1.3.15/zh/api/campaign-ext/PlayerIsMaleTag.md) | 🔗 |
| C | [PlayerIsMotherTag](/v1.3.15/zh/api/campaign-ext/PlayerIsMotherTag.md) | 🔗 |
| C | [PlayerIsNobleTag](/v1.3.15/zh/api/campaign-ext/PlayerIsNobleTag.md) | 🔗 |
| C | [PlayerIsRulerTag](/v1.3.15/zh/api/campaign-ext/PlayerIsRulerTag.md) | 🔗 |
| C | [PlayerIsSisterTag](/v1.3.15/zh/api/campaign-ext/PlayerIsSisterTag.md) | 🔗 |
| C | [PlayerIsSonTag](/v1.3.15/zh/api/campaign-ext/PlayerIsSonTag.md) | 🔗 |
| C | [PlayerIsSpouseTag](/v1.3.15/zh/api/campaign-ext/PlayerIsSpouseTag.md) | 🔗 |
| C | [PreacherNotableTypeTag](/v1.3.15/zh/api/campaign-ext/PreacherNotableTypeTag.md) | 🔗 |
| C | [RogueSkillsTag](/v1.3.15/zh/api/campaign-ext/RogueSkillsTag.md) | 🔗 |
| C | [RomanticallyInvolvedTag](/v1.3.15/zh/api/campaign-ext/RomanticallyInvolvedTag.md) | 🔗 |
| C | [SexistTag](/v1.3.15/zh/api/campaign-ext/SexistTag.md) | 🔗 |
| C | [SturgianTag](/v1.3.15/zh/api/campaign-ext/SturgianTag.md) | 🔗 |
| C | [TribalRegisterTag](/v1.3.15/zh/api/campaign-ext/TribalRegisterTag.md) | 🔗 |
| C | [UncharitableTag](/v1.3.15/zh/api/campaign-ext/UncharitableTag.md) | 🔗 |
| C | [UnderCommandTag](/v1.3.15/zh/api/campaign-ext/UnderCommandTag.md) | 🔗 |
| C | [UngratefulTag](/v1.3.15/zh/api/campaign-ext/UngratefulTag.md) | 🔗 |
| C | [ValorTag](/v1.3.15/zh/api/campaign-ext/ValorTag.md) | 🔗 |
| C | [VlandianTag](/v1.3.15/zh/api/campaign-ext/VlandianTag.md) | 🔗 |
| C | [VoiceGroupPersonaCurtLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaCurtLowerTag.md) | 🔗 |
| C | [VoiceGroupPersonaCurtTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaCurtTribalTag.md) | 🔗 |
| C | [VoiceGroupPersonaCurtUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaCurtUpperTag.md) | 🔗 |
| C | [VoiceGroupPersonaEarnestLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaEarnestLowerTag.md) | 🔗 |
| C | [VoiceGroupPersonaEarnestTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaEarnestTribalTag.md) | 🔗 |
| C | [VoiceGroupPersonaEarnestUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaEarnestUpperTag.md) | 🔗 |
| C | [VoiceGroupPersonaIronicLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaIronicLowerTag.md) | 🔗 |
| C | [VoiceGroupPersonaIronicTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaIronicTribalTag.md) | 🔗 |
| C | [VoiceGroupPersonaIronicUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaIronicUpperTag.md) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenLowerTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaSoftspokenLowerTag.md) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenTribalTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaSoftspokenTribalTag.md) | 🔗 |
| C | [VoiceGroupPersonaSoftspokenUpperTag](/v1.3.15/zh/api/campaign-ext/VoiceGroupPersonaSoftspokenUpperTag.md) | 🔗 |
| C | [WandererTag](/v1.3.15/zh/api/campaign-ext/WandererTag.md) | 🔗 |
| C | [WaryTag](/v1.3.15/zh/api/campaign-ext/WaryTag.md) | 🔗 |

## TaleWorlds.CampaignSystem.CraftingSystem (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingOrder](/v1.3.15/zh/api/campaign-ext/CraftingOrder.md) | 🔗 |

## TaleWorlds.CampaignSystem.Election (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarAgreementDecision](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarAgreementDecision.md) | 🔗 |
| C | [AcceptCallToWarAgreementDecisionOutcome](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarAgreementDecisionOutcome.md) | 🔗 |
| C | [ClanAsDecisionOutcome](/v1.3.15/zh/api/campaign-ext/ClanAsDecisionOutcome.md) | 🔗 |
| C | [DecisionOutcome](/v1.3.15/zh/api/campaign-ext/DecisionOutcome.md) | 🔗 |
| C | [DeclareWarDecision](/v1.3.15/zh/api/campaign-ext/DeclareWarDecision.md) | 🔗 |
| C | [DeclareWarDecisionOutcome](/v1.3.15/zh/api/campaign-ext/DeclareWarDecisionOutcome.md) | 🔗 |
| E | [ElectionOutcomeSupport](./campaign-ext/ElectionOutcomeSupport.md) | 🔗 |
| C | [ExpelClanDecisionOutcome](/v1.3.15/zh/api/campaign-ext/ExpelClanDecisionOutcome.md) | 🔗 |
| C | [ExpelClanFromKingdomDecision](/v1.3.15/zh/api/campaign-ext/ExpelClanFromKingdomDecision.md) | 🔗 |
| C | [KingdomDecision](/v1.3.15/zh/api/campaign-ext/KingdomDecision.md) | 🔗 |
| C | [KingdomElection](/v1.3.15/zh/api/campaign-ext/KingdomElection.md) | 🔗 |
| C | [KingdomPolicyDecision](/v1.3.15/zh/api/campaign-ext/KingdomPolicyDecision.md) | 🔗 |
| C | [KingSelectionDecisionOutcome](/v1.3.15/zh/api/campaign-ext/KingSelectionDecisionOutcome.md) | 🔗 |
| C | [KingSelectionKingdomDecision](/v1.3.15/zh/api/campaign-ext/KingSelectionKingdomDecision.md) | 🔗 |
| C | [MakePeaceDecisionOutcome](/v1.3.15/zh/api/campaign-ext/MakePeaceDecisionOutcome.md) | 🔗 |
| C | [MakePeaceKingdomDecision](/v1.3.15/zh/api/campaign-ext/MakePeaceKingdomDecision.md) | 🔗 |
| C | [PolicyDecisionOutcome](/v1.3.15/zh/api/campaign-ext/PolicyDecisionOutcome.md) | 🔗 |
| C | [ProposeCallToWarAgreementDecision](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarAgreementDecision.md) | 🔗 |
| C | [ProposeCallToWarAgreementDecisionOutcome](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarAgreementDecisionOutcome.md) | 🔗 |
| C | [SettlementClaimantDecision](/v1.3.15/zh/api/campaign-ext/SettlementClaimantDecision.md) | 🔗 |
| C | [SettlementClaimantPreliminaryDecision](/v1.3.15/zh/api/campaign-ext/SettlementClaimantPreliminaryDecision.md) | 🔗 |
| C | [SettlementClaimantPreliminaryOutcome](/v1.3.15/zh/api/campaign-ext/SettlementClaimantPreliminaryOutcome.md) | 🔗 |
| C | [StartAllianceDecision](/v1.3.15/zh/api/campaign-ext/StartAllianceDecision.md) | 🔗 |
| C | [StartAllianceDecisionOutcome](/v1.3.15/zh/api/campaign-ext/StartAllianceDecisionOutcome.md) | 🔗 |
| C | [Supporter](/v1.3.15/zh/api/campaign-ext/Supporter.md) | 🔗 |
| E | [SupportStatus](/v1.3.15/zh/api/campaign-ext/SupportStatus.md) | 🔗 |
| E | [SupportWeights](/v1.3.15/zh/api/campaign-ext/SupportWeights.md) | 🔗 |
| C | [TradeAgreementDecision](/v1.3.15/zh/api/campaign-ext/TradeAgreementDecision.md) | 🔗 |
| C | [TradeAgreementDecisionOutcome](/v1.3.15/zh/api/campaign-ext/TradeAgreementDecisionOutcome.md) | 🔗 |

## TaleWorlds.CampaignSystem.Encounters (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CampaignBattleResult](/v1.3.15/zh/api/campaign-ext/CampaignBattleResult.md) | 🔗 |
| C | [CastleEncounter](/v1.3.15/zh/api/campaign-ext/CastleEncounter.md) | 🔗 |
| C | [HideoutEncounter](/v1.3.15/zh/api/campaign-ext/HideoutEncounter.md) | 🔗 |
| C | [LocationEncounter](/v1.3.15/zh/api/campaign-ext/LocationEncounter.md) | 🔗 |
| C | [PlayerEncounter](/v1.3.15/zh/api/campaign-ext/PlayerEncounter.md) | 🔗 |
| E | [PlayerEncounterState](/v1.3.15/zh/api/campaign-ext/PlayerEncounterState.md) | 🔗 |
| C | [RetirementEncounter](/v1.3.15/zh/api/campaign-ext/RetirementEncounter.md) | 🔗 |
| C | [TownEncounter](/v1.3.15/zh/api/campaign-ext/TownEncounter.md) | 🔗 |
| C | [VillageEncounter](/v1.3.15/zh/api/campaign-ext/VillageEncounter.md) | 🔗 |

## TaleWorlds.CampaignSystem.Encyclopedia (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaFilterGroup](/v1.3.15/zh/api/campaign-ext/EncyclopediaFilterGroup.md) | 🔗 |
| C | [EncyclopediaFilterItem](/v1.3.15/zh/api/campaign-ext/EncyclopediaFilterItem.md) | 🔗 |
| S | [EncyclopediaListItem](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItem.md) | 🔗 |
| C | [EncyclopediaListItemComparerBase](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItemComparerBase.md) | 🔗 |
| C | [EncyclopediaManager](/v1.3.15/zh/api/campaign-ext/EncyclopediaManager.md) | 🔗 |
| C | [EncyclopediaModelBase](/v1.3.15/zh/api/campaign-ext/EncyclopediaModelBase.md) | 🔗 |
| C | [EncyclopediaPage](/v1.3.15/zh/api/campaign-ext/EncyclopediaPage.md) | 🔗 |
| C | [EncyclopediaSortController](/v1.3.15/zh/api/campaign-ext/EncyclopediaSortController.md) | 🔗 |
| C | [OverrideEncyclopediaModel](/v1.3.15/zh/api/campaign-ext/OverrideEncyclopediaModel.md) | 🔗 |

## TaleWorlds.CampaignSystem.Encyclopedia.Pages (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultEncyclopediaClanPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaClanPage.md) | 🔗 |
| C | [DefaultEncyclopediaConceptPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaConceptPage.md) | 🔗 |
| C | [DefaultEncyclopediaFactionPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaFactionPage.md) | 🔗 |
| C | [DefaultEncyclopediaHeroPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaHeroPage.md) | 🔗 |
| C | [DefaultEncyclopediaSettlementPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaSettlementPage.md) | 🔗 |
| C | [DefaultEncyclopediaShipPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaShipPage.md) | 🔗 |
| C | [DefaultEncyclopediaUnitPage](/v1.3.15/zh/api/campaign-ext/DefaultEncyclopediaUnitPage.md) | 🔗 |
| C | [EncyclopediaListClanComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListClanComparer.md) | 🔗 |
| C | [EncyclopediaListHeroComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListHeroComparer.md) | 🔗 |
| C | [EncyclopediaListKingdomComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListKingdomComparer.md) | 🔗 |
| C | [EncyclopediaListSettlementComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSettlementComparer.md) | 🔗 |
| C | [EncyclopediaListShipComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListShipComparer.md) | 🔗 |
| C | [EncyclopediaListUnitComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListUnitComparer.md) | 🔗 |

## TaleWorlds.CampaignSystem.Extensions (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Attributes](/v1.3.15/zh/api/campaign-ext/Attributes.md) | 🔗 |
| C | [ItemCategories](/v1.3.15/zh/api/campaign-ext/ItemCategories.md) | 🔗 |
| C | [ItemObjectExtensions](/v1.3.15/zh/api/campaign-ext/ItemObjectExtensions.md) | 🔗 |
| C | [Items](/v1.3.15/zh/api/campaign-ext/Items.md) | 🔗 |
| C | [MBEquipmentRosterExtensions](/v1.3.15/zh/api/campaign-ext/MBEquipmentRosterExtensions.md) | 🔗 |
| C | [MetaDataExtensions](/v1.3.15/zh/api/core-extra/MetaDataExtensions.md) | 🔗 |
| C | [SiegeEngineTypes](/v1.3.15/zh/api/campaign-ext/SiegeEngineTypes.md) | 🔗 |
| C | [Skills](/v1.3.15/zh/api/campaign-ext/Skills.md) | 🔗 |
| C | [TextObjectExtensions](/v1.3.15/zh/api/campaign-ext/TextObjectExtensions.md) | 🔗 |

## TaleWorlds.CampaignSystem.FastMode (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FastModeOptionsProvider](./campaign-ext/FastModeOptionsProvider.md) | 🔗 |
| C | [FastModeSubModule](./campaign-ext/FastModeSubModule.md) | 🔗 |

## TaleWorlds.CampaignSystem.GameComponents (126)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlleyMemberAvailabilityDetail](/v1.3.15/zh/api/campaign-ext/AlleyMemberAvailabilityDetail.md) | 🔗 |
| E | [AssetIncomeType](/v1.3.15/zh/api/campaign-ext/AssetIncomeType.md) | 🔗 |
| C | [DefaultAgeModel](/v1.3.15/zh/api/campaign-ext/DefaultAgeModel.md) | 🔗 |
| C | [DefaultAlleyModel](/v1.3.15/zh/api/campaign-ext/DefaultAlleyModel.md) | 🔗 |
| C | [DefaultAllianceModel](/v1.3.15/zh/api/campaign-ext/DefaultAllianceModel.md) | 🔗 |
| C | [DefaultArmyManagementCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultArmyManagementCalculationModel.md) | 🔗 |
| C | [DefaultBanditDensityModel](/v1.3.15/zh/api/campaign-ext/DefaultBanditDensityModel.md) | 🔗 |
| C | [DefaultBannerItemModel](/v1.3.15/zh/api/campaign-ext/DefaultBannerItemModel.md) | 🔗 |
| C | [DefaultBarterModel](/v1.3.15/zh/api/campaign-ext/DefaultBarterModel.md) | 🔗 |
| C | [DefaultBattleCaptainModel](/v1.3.15/zh/api/campaign-ext/DefaultBattleCaptainModel.md) | 🔗 |
| C | [DefaultBattleRewardModel](/v1.3.15/zh/api/campaign-ext/DefaultBattleRewardModel.md) | 🔗 |
| C | [DefaultBodyPropertiesModel](/v1.3.15/zh/api/campaign-ext/DefaultBodyPropertiesModel.md) | 🔗 |
| C | [DefaultBribeCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultBribeCalculationModel.md) | 🔗 |
| C | [DefaultBuildingConstructionModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingConstructionModel.md) | 🔗 |
| C | [DefaultBuildingEffectModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingEffectModel.md) | 🔗 |
| C | [DefaultBuildingModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingModel.md) | 🔗 |
| C | [DefaultBuildingScoreCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultBuildingScoreCalculationModel.md) | 🔗 |
| C | [DefaultCampaignShipDamageModel](/v1.3.15/zh/api/campaign-ext/DefaultCampaignShipDamageModel.md) | 🔗 |
| C | [DefaultCampaignShipParametersModel](/v1.3.15/zh/api/campaign-ext/DefaultCampaignShipParametersModel.md) | 🔗 |
| C | [DefaultCampaignTimeModel](/v1.3.15/zh/api/campaign-ext/DefaultCampaignTimeModel.md) | 🔗 |
| C | [DefaultCaravanModel](/v1.3.15/zh/api/campaign-ext/DefaultCaravanModel.md) | 🔗 |
| C | [DefaultCharacterDevelopmentModel](/v1.3.15/zh/api/campaign-ext/DefaultCharacterDevelopmentModel.md) | 🔗 |
| C | [DefaultCharacterStatsModel](/v1.3.15/zh/api/campaign-ext/DefaultCharacterStatsModel.md) | 🔗 |
| C | [DefaultClanFinanceModel](/v1.3.15/zh/api/campaign-ext/DefaultClanFinanceModel.md) | 🔗 |
| C | [DefaultClanMemberPartyRoleModel](./campaign-ext/DefaultClanMemberPartyRoleModel.md) | 🔗 |
| C | [DefaultClanPoliticsModel](/v1.3.15/zh/api/campaign-ext/DefaultClanPoliticsModel.md) | 🔗 |
| C | [DefaultClanTierModel](/v1.3.15/zh/api/campaign-ext/DefaultClanTierModel.md) | 🔗 |
| C | [DefaultCombatSimulationModel](/v1.3.15/zh/api/campaign-ext/DefaultCombatSimulationModel.md) | 🔗 |
| C | [DefaultCombatXpModel](/v1.3.15/zh/api/campaign-ext/DefaultCombatXpModel.md) | 🔗 |
| C | [DefaultCompanionHiringPriceCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultCompanionHiringPriceCalculationModel.md) | 🔗 |
| C | [DefaultCrimeModel](/v1.3.15/zh/api/campaign-ext/DefaultCrimeModel.md) | 🔗 |
| C | [DefaultCutsceneSelectionModel](/v1.3.15/zh/api/campaign-ext/DefaultCutsceneSelectionModel.md) | 🔗 |
| C | [DefaultDailyTroopXpBonusModel](/v1.3.15/zh/api/campaign-ext/DefaultDailyTroopXpBonusModel.md) | 🔗 |
| C | [DefaultDefectionModel](/v1.3.15/zh/api/campaign-ext/DefaultDefectionModel.md) | 🔗 |
| C | [DefaultDelayedTeleportationModel](/v1.3.15/zh/api/campaign-ext/DefaultDelayedTeleportationModel.md) | 🔗 |
| C | [DefaultDifficultyModel](/v1.3.15/zh/api/campaign-ext/DefaultDifficultyModel.md) | 🔗 |
| C | [DefaultDiplomacyModel](/v1.3.15/zh/api/campaign-ext/DefaultDiplomacyModel.md) | 🔗 |
| C | [DefaultDisguiseDetectionModel](/v1.3.15/zh/api/campaign-ext/DefaultDisguiseDetectionModel.md) | 🔗 |
| C | [DefaultEmissaryModel](/v1.3.15/zh/api/campaign-ext/DefaultEmissaryModel.md) | 🔗 |
| C | [DefaultEncounterGameMenuModel](/v1.3.15/zh/api/campaign-ext/DefaultEncounterGameMenuModel.md) | 🔗 |
| C | [DefaultEncounterModel](/v1.3.15/zh/api/campaign-ext/DefaultEncounterModel.md) | 🔗 |
| C | [DefaultEquipmentSelectionModel](/v1.3.15/zh/api/campaign-ext/DefaultEquipmentSelectionModel.md) | 🔗 |
| C | [DefaultExecutionRelationModel](/v1.3.15/zh/api/campaign-ext/DefaultExecutionRelationModel.md) | 🔗 |
| C | [DefaultFleetManagementModel](/v1.3.15/zh/api/campaign-ext/DefaultFleetManagementModel.md) | 🔗 |
| C | [DefaultGenericXpModel](/v1.3.15/zh/api/campaign-ext/DefaultGenericXpModel.md) | 🔗 |
| C | [DefaultHeirSelectionCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeirSelectionCalculationModel.md) | 🔗 |
| C | [DefaultHeroAgentLocationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeroAgentLocationModel.md) | 🔗 |
| C | [DefaultHeroCreationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeroCreationModel.md) | 🔗 |
| C | [DefaultHeroDeathProbabilityCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultHeroDeathProbabilityCalculationModel.md) | 🔗 |
| C | [DefaultHideoutModel](/v1.3.15/zh/api/campaign-ext/DefaultHideoutModel.md) | 🔗 |
| C | [DefaultIncidentModel](/v1.3.15/zh/api/campaign-ext/DefaultIncidentModel.md) | 🔗 |
| C | [DefaultInformationRestrictionModel](/v1.3.15/zh/api/campaign-ext/DefaultInformationRestrictionModel.md) | 🔗 |
| C | [DefaultInventoryCapacityModel](/v1.3.15/zh/api/campaign-ext/DefaultInventoryCapacityModel.md) | 🔗 |
| C | [DefaultIssueModel](/v1.3.15/zh/api/campaign-ext/DefaultIssueModel.md) | 🔗 |
| C | [DefaultItemDiscardModel](/v1.3.15/zh/api/campaign-ext/DefaultItemDiscardModel.md) | 🔗 |
| C | [DefaultKingdomCreationModel](/v1.3.15/zh/api/campaign-ext/DefaultKingdomCreationModel.md) | 🔗 |
| C | [DefaultKingdomDecisionPermissionModel](/v1.3.15/zh/api/campaign-ext/DefaultKingdomDecisionPermissionModel.md) | 🔗 |
| C | [DefaultLocationModel](/v1.3.15/zh/api/campaign-ext/DefaultLocationModel.md) | 🔗 |
| C | [DefaultMapDistanceModel](/v1.3.15/zh/api/campaign-ext/DefaultMapDistanceModel.md) | 🔗 |
| C | [DefaultMapTrackModel](/v1.3.15/zh/api/campaign-ext/DefaultMapTrackModel.md) | 🔗 |
| C | [DefaultMapVisibilityModel](/v1.3.15/zh/api/campaign-ext/DefaultMapVisibilityModel.md) | 🔗 |
| C | [DefaultMapWeatherModel](/v1.3.15/zh/api/campaign-ext/DefaultMapWeatherModel.md) | 🔗 |
| C | [DefaultMarriageModel](/v1.3.15/zh/api/campaign-ext/DefaultMarriageModel.md) | 🔗 |
| C | [DefaultMilitaryPowerModel](/v1.3.15/zh/api/campaign-ext/DefaultMilitaryPowerModel.md) | 🔗 |
| C | [DefaultMinorFactionsModel](/v1.3.15/zh/api/campaign-ext/DefaultMinorFactionsModel.md) | 🔗 |
| C | [DefaultMobilePartyAIModel](/v1.3.15/zh/api/campaign-ext/DefaultMobilePartyAIModel.md) | 🔗 |
| C | [DefaultMobilePartyFoodConsumptionModel](/v1.3.15/zh/api/campaign-ext/DefaultMobilePartyFoodConsumptionModel.md) | 🔗 |
| C | [DefaultNotablePowerModel](/v1.3.15/zh/api/campaign-ext/DefaultNotablePowerModel.md) | 🔗 |
| C | [DefaultNotableSpawnModel](/v1.3.15/zh/api/campaign-ext/DefaultNotableSpawnModel.md) | 🔗 |
| C | [DefaultPartyDesertionModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyDesertionModel.md) | 🔗 |
| C | [DefaultPartyFoodBuyingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyFoodBuyingModel.md) | 🔗 |
| C | [DefaultPartyHealingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyHealingModel.md) | 🔗 |
| C | [DefaultPartyImpairmentModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyImpairmentModel.md) | 🔗 |
| C | [DefaultPartyMoraleModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyMoraleModel.md) | 🔗 |
| C | [DefaultPartyNavigationModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyNavigationModel.md) | 🔗 |
| C | [DefaultPartyShipLimitModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyShipLimitModel.md) | 🔗 |
| C | [DefaultPartySizeLimitModel](/v1.3.15/zh/api/campaign-ext/DefaultPartySizeLimitModel.md) | 🔗 |
| C | [DefaultPartySpeedCalculatingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartySpeedCalculatingModel.md) | 🔗 |
| C | [DefaultPartyTradeModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTradeModel.md) | 🔗 |
| C | [DefaultPartyTrainingModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTrainingModel.md) | 🔗 |
| C | [DefaultPartyTransitionModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTransitionModel.md) | 🔗 |
| C | [DefaultPartyTroopUpgradeModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyTroopUpgradeModel.md) | 🔗 |
| C | [DefaultPartyWageModel](/v1.3.15/zh/api/campaign-ext/DefaultPartyWageModel.md) | 🔗 |
| C | [DefaultPersuasionModel](/v1.3.15/zh/api/campaign-ext/DefaultPersuasionModel.md) | 🔗 |
| C | [DefaultPlayerProgressionModel](/v1.3.15/zh/api/campaign-ext/DefaultPlayerProgressionModel.md) | 🔗 |
| C | [DefaultPregnancyModel](/v1.3.15/zh/api/campaign-ext/DefaultPregnancyModel.md) | 🔗 |
| C | [DefaultPrisonBreakModel](/v1.3.15/zh/api/campaign-ext/DefaultPrisonBreakModel.md) | 🔗 |
| C | [DefaultPrisonerDonationModel](/v1.3.15/zh/api/campaign-ext/DefaultPrisonerDonationModel.md) | 🔗 |
| C | [DefaultPrisonerRecruitmentCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultPrisonerRecruitmentCalculationModel.md) | 🔗 |
| C | [DefaultRaidModel](/v1.3.15/zh/api/campaign-ext/DefaultRaidModel.md) | 🔗 |
| C | [DefaultRansomValueCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultRansomValueCalculationModel.md) | 🔗 |
| C | [DefaultRomanceModel](/v1.3.15/zh/api/campaign-ext/DefaultRomanceModel.md) | 🔗 |
| C | [DefaultSceneModel](/v1.3.15/zh/api/campaign-ext/DefaultSceneModel.md) | 🔗 |
| C | [DefaultSettlementAccessModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementAccessModel.md) | 🔗 |
| C | [DefaultSettlementEconomyModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementEconomyModel.md) | 🔗 |
| C | [DefaultSettlementFoodModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementFoodModel.md) | 🔗 |
| C | [DefaultSettlementGarrisonModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementGarrisonModel.md) | 🔗 |
| C | [DefaultSettlementLoyaltyModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementLoyaltyModel.md) | 🔗 |
| C | [DefaultSettlementMilitiaModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementMilitiaModel.md) | 🔗 |
| C | [DefaultSettlementPatrolModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementPatrolModel.md) | 🔗 |
| C | [DefaultSettlementProsperityModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementProsperityModel.md) | 🔗 |
| C | [DefaultSettlementSecurityModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementSecurityModel.md) | 🔗 |
| C | [DefaultSettlementTaxModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementTaxModel.md) | 🔗 |
| C | [DefaultSettlementValueModel](/v1.3.15/zh/api/campaign-ext/DefaultSettlementValueModel.md) | 🔗 |
| C | [DefaultShipCostModel](/v1.3.15/zh/api/campaign-ext/DefaultShipCostModel.md) | 🔗 |
| C | [DefaultShipStatModel](/v1.3.15/zh/api/campaign-ext/DefaultShipStatModel.md) | 🔗 |
| C | [DefaultSiegeAftermathModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeAftermathModel.md) | 🔗 |
| C | [DefaultSiegeEventModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeEventModel.md) | 🔗 |
| C | [DefaultSiegeLordsHallFightModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeLordsHallFightModel.md) | 🔗 |
| C | [DefaultSiegeStrategyActionModel](/v1.3.15/zh/api/campaign-ext/DefaultSiegeStrategyActionModel.md) | 🔗 |
| C | [DefaultSmithingModel](/v1.3.15/zh/api/campaign-ext/DefaultSmithingModel.md) | 🔗 |
| C | [DefaultTargetScoreCalculatingModel](/v1.3.15/zh/api/campaign-ext/DefaultTargetScoreCalculatingModel.md) | 🔗 |
| C | [DefaultTavernMercenaryTroopsModel](/v1.3.15/zh/api/campaign-ext/DefaultTavernMercenaryTroopsModel.md) | 🔗 |
| C | [DefaultTournamentModel](/v1.3.15/zh/api/campaign-ext/DefaultTournamentModel.md) | 🔗 |
| C | [DefaultTradeAgreementModel](/v1.3.15/zh/api/campaign-ext/DefaultTradeAgreementModel.md) | 🔗 |
| C | [DefaultTradeItemPriceFactorModel](/v1.3.15/zh/api/campaign-ext/DefaultTradeItemPriceFactorModel.md) | 🔗 |
| C | [DefaultTroopSacrificeModel](/v1.3.15/zh/api/campaign-ext/DefaultTroopSacrificeModel.md) | 🔗 |
| C | [DefaultTroopSupplierProbabilityModel](/v1.3.15/zh/api/campaign-ext/DefaultTroopSupplierProbabilityModel.md) | 🔗 |
| C | [DefaultValuationModel](/v1.3.15/zh/api/campaign-ext/DefaultValuationModel.md) | 🔗 |
| C | [DefaultVassalRewardsModel](/v1.3.15/zh/api/campaign-ext/DefaultVassalRewardsModel.md) | 🔗 |
| C | [DefaultVillageProductionCalculatorModel](/v1.3.15/zh/api/campaign-ext/DefaultVillageProductionCalculatorModel.md) | 🔗 |
| C | [DefaultVillageTradeModel](/v1.3.15/zh/api/campaign-ext/DefaultVillageTradeModel.md) | 🔗 |
| C | [DefaultVoiceOverModel](/v1.3.15/zh/api/campaign-ext/DefaultVoiceOverModel.md) | 🔗 |
| C | [DefaultVolunteerModel](/v1.3.15/zh/api/campaign-ext/DefaultVolunteerModel.md) | 🔗 |
| C | [DefaultWallHitPointCalculationModel](/v1.3.15/zh/api/campaign-ext/DefaultWallHitPointCalculationModel.md) | 🔗 |
| C | [DefaultWorkshopModel](/v1.3.15/zh/api/campaign-ext/DefaultWorkshopModel.md) | 🔗 |

## TaleWorlds.CampaignSystem.GameMenus (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [EventType](/v1.3.15/zh/api/campaign-ext/EventType.md) | 🔗 |
| C | [GameMenu](/v1.3.15/zh/api/campaign-ext/GameMenu.md) | 🔗 |
| C | [GameMenuCallbackManager](/v1.3.15/zh/api/campaign-ext/GameMenuCallbackManager.md) | 🔗 |
| C | [GameMenuEventHandler](/v1.3.15/zh/api/campaign-ext/GameMenuEventHandler.md) | 🔗 |
| C | [GameMenuInitializationHandler](/v1.3.15/zh/api/campaign-ext/GameMenuInitializationHandler.md) | 🔗 |
| C | [GameMenuManager](/v1.3.15/zh/api/campaign-ext/GameMenuManager.md) | 🔗 |
| C | [GameMenuOption](/v1.3.15/zh/api/campaign-ext/GameMenuOption.md) | 🔗 |
| E | [IssueQuestFlags](/v1.3.15/zh/api/campaign-ext/IssueQuestFlags.md) | 🔗 |
| E | [LeaveType](/v1.3.15/zh/api/campaign-ext/LeaveType.md) | 🔗 |
| E | [MenuAndOptionType](/v1.3.15/zh/api/campaign-ext/MenuAndOptionType.md) | 🔗 |
| C | [MenuCallbackArgs](/v1.3.15/zh/api/campaign-ext/MenuCallbackArgs.md) | 🔗 |
| E | [MenuFlags](/v1.3.15/zh/api/campaign-ext/MenuFlags.md) | 🔗 |
| E | [MenuOverlayType](/v1.3.15/zh/api/campaign-ext/MenuOverlayType.md) | 🔗 |
| C | [WaitMenuOption](/v1.3.15/zh/api/campaign-ext/WaitMenuOption.md) | 🔗 |

## TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DefaultEncounter](/v1.3.15/zh/api/campaign-ext/DefaultEncounter.md) | 🔗 |
| C | [PlayerTownVisit](/v1.3.15/zh/api/campaign-ext/PlayerTownVisit.md) | 🔗 |

## TaleWorlds.CampaignSystem.GameState (32)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BannerEditorState](/v1.3.15/zh/api/campaign-ext/BannerEditorState.md) | 🔗 |
| C | [BarberState](/v1.3.15/zh/api/campaign-ext/BarberState.md) | 🔗 |
| C | [CharacterDeveloperState](/v1.3.15/zh/api/campaign-ext/CharacterDeveloperState.md) | 🔗 |
| C | [ClanState](/v1.3.15/zh/api/campaign-ext/ClanState.md) | 🔗 |
| C | [CraftingState](/v1.3.15/zh/api/campaign-ext/CraftingState.md) | 🔗 |
| C | [EducationState](/v1.3.15/zh/api/campaign-ext/EducationState.md) | 🔗 |
| E | [GameOverReason](/v1.3.15/zh/api/campaign-ext/GameOverReason.md) | 🔗 |
| C | [GameOverState](/v1.3.15/zh/api/campaign-ext/GameOverState.md) | 🔗 |
| I | [IBannerEditorStateHandler](/v1.3.15/zh/api/campaign-ext/IBannerEditorStateHandler.md) | 🔗 |
| I | [ICharacterDeveloperStateHandler](/v1.3.15/zh/api/campaign-ext/ICharacterDeveloperStateHandler.md) | 🔗 |
| I | [IClanStateHandler](/v1.3.15/zh/api/campaign-ext/IClanStateHandler.md) | 🔗 |
| I | [ICraftingStateHandler](/v1.3.15/zh/api/campaign-ext/ICraftingStateHandler.md) | 🔗 |
| I | [IEducationStateHandler](/v1.3.15/zh/api/campaign-ext/IEducationStateHandler.md) | 🔗 |
| I | [IGameOverStateHandler](/v1.3.15/zh/api/campaign-ext/IGameOverStateHandler.md) | 🔗 |
| I | [IInventoryStateHandler](/v1.3.15/zh/api/campaign-ext/IInventoryStateHandler.md) | 🔗 |
| I | [IKingdomStateHandler](/v1.3.15/zh/api/campaign-ext/IKingdomStateHandler.md) | 🔗 |
| I | [IMapStateHandler](/v1.3.15/zh/api/campaign-ext/IMapStateHandler.md) | 🔗 |
| I | [IMenuContextHandler](/v1.3.15/zh/api/campaign-ext/IMenuContextHandler.md) | 🔗 |
| C | [InventoryState](/v1.3.15/zh/api/campaign-ext/InventoryState.md) | 🔗 |
| I | [IPartyScreenLogicHandler](/v1.3.15/zh/api/campaign-ext/IPartyScreenLogicHandler.md) | 🔗 |
| I | [IPartyScreenPrisonHandler](/v1.3.15/zh/api/campaign-ext/IPartyScreenPrisonHandler.md) | 🔗 |
| I | [IPartyScreenTroopHandler](/v1.3.15/zh/api/campaign-ext/IPartyScreenTroopHandler.md) | 🔗 |
| I | [IQuestsStateHandler](/v1.3.15/zh/api/campaign-ext/IQuestsStateHandler.md) | 🔗 |
| C | [KingdomState](/v1.3.15/zh/api/campaign-ext/KingdomState.md) | 🔗 |
| C | [MapState](/v1.3.15/zh/api/campaign-ext/MapState.md) | 🔗 |
| C | [MapStateData](/v1.3.15/zh/api/campaign-ext/MapStateData.md) | 🔗 |
| C | [MenuContext](/v1.3.15/zh/api/campaign-ext/MenuContext.md) | 🔗 |
| C | [PartyState](/v1.3.15/zh/api/campaign-ext/PartyState.md) | 🔗 |
| E | [PortScreenModes](/v1.3.15/zh/api/campaign-ext/PortScreenModes.md) | 🔗 |
| C | [PortState](/v1.3.15/zh/api/campaign-ext/PortState.md) | 🔗 |
| C | [QuestsState](/v1.3.15/zh/api/campaign-ext/QuestsState.md) | 🔗 |
| C | [TutorialState](/v1.3.15/zh/api/campaign-ext/TutorialState.md) | 🔗 |

## TaleWorlds.CampaignSystem.Handlers (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [ICustomSystemManager](/v1.3.15/zh/api/campaign-ext/ICustomSystemManager.md) | 🔗 |

## TaleWorlds.CampaignSystem.Incidents (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Incident](/v1.3.15/zh/api/campaign-ext/Incident.md) | 🔗 |
| C | [IncidentEffect](/v1.3.15/zh/api/campaign-ext/IncidentEffect.md) | 🔗 |

## TaleWorlds.CampaignSystem.Inventory (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CapacityData](/v1.3.15/zh/api/campaign-ext/CapacityData.md) | 🔗 |
| C | [FakeInventoryListener](/v1.3.15/zh/api/campaign-ext/FakeInventoryListener.md) | 🔗 |
| C | [InventoryListener](/v1.3.15/zh/api/campaign-ext/InventoryListener.md) | 🔗 |
| C | [InventoryLogic](/v1.3.15/zh/api/campaign-ext/InventoryLogic.md) | 🔗 |
| E | [InventorySide](/v1.3.15/zh/api/campaign-ext/InventorySide.md) | 🔗 |
| C | [InventoryTransferItemEvent](/v1.3.15/zh/api/campaign-ext/InventoryTransferItemEvent.md) | 🔗 |
| I | [IPlayerTradeBehavior](/v1.3.15/zh/api/campaign-ext/IPlayerTradeBehavior.md) | 🔗 |
| S | [TransferCommand](/v1.3.15/zh/api/campaign-ext/TransferCommand.md) | 🔗 |
| C | [TransferCommandResult](/v1.3.15/zh/api/campaign-ext/TransferCommandResult.md) | 🔗 |
| E | [TransferType](/v1.3.15/zh/api/campaign-ext/TransferType.md) | 🔗 |

## TaleWorlds.CampaignSystem.Issues (158)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AlternativeSolutionScaleFlag](/v1.3.15/zh/api/campaign-ext/AlternativeSolutionScaleFlag.md) | 🔗 |
| C | [ArmyNeedsSuppliesIssue](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssue.md) | 🔗 |
| C | [ArmyNeedsSuppliesIssueBehavior](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssueBehavior.md) | 🔗 |
| C | [ArmyNeedsSuppliesIssueQuest](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssueQuest.md) | 🔗 |
| C | [ArmyNeedsSuppliesIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ArmyNeedsSuppliesIssueTypeDefiner.md) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssue](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssue.md) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueBehavior](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueBehavior.md) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueQuest](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueQuest.md) | 🔗 |
| C | [ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner.md) | 🔗 |
| C | [ArtisanOverpricedGoodsIssue](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssue.md) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueBehavior](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssueBehavior.md) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueQuest](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssueQuest.md) | 🔗 |
| C | [ArtisanOverpricedGoodsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ArtisanOverpricedGoodsIssueTypeDefiner.md) | 🔗 |
| C | [BettingFraudIssue](/v1.3.15/zh/api/campaign-ext/BettingFraudIssue.md) | 🔗 |
| C | [BettingFraudIssueBehavior](/v1.3.15/zh/api/campaign-ext/BettingFraudIssueBehavior.md) | 🔗 |
| C | [BettingFraudIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/BettingFraudIssueTypeDefiner.md) | 🔗 |
| C | [BettingFraudQuest](/v1.3.15/zh/api/campaign-ext/BettingFraudQuest.md) | 🔗 |
| C | [CapturedByBountyHuntersIssue](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssue.md) | 🔗 |
| C | [CapturedByBountyHuntersIssueBehavior](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssueBehavior.md) | 🔗 |
| C | [CapturedByBountyHuntersIssueQuest](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssueQuest.md) | 🔗 |
| C | [CapturedByBountyHuntersIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/CapturedByBountyHuntersIssueTypeDefiner.md) | 🔗 |
| C | [CaravanAmbushIssue](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssue.md) | 🔗 |
| C | [CaravanAmbushIssueBehavior](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssueBehavior.md) | 🔗 |
| C | [CaravanAmbushIssueQuest](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssueQuest.md) | 🔗 |
| C | [CaravanAmbushIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/CaravanAmbushIssueTypeDefiner.md) | 🔗 |
| C | [DefaultIssueEffects](/v1.3.15/zh/api/campaign-ext/DefaultIssueEffects.md) | 🔗 |
| C | [EscortMerchantCaravanIssue](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssue.md) | 🔗 |
| C | [EscortMerchantCaravanIssueBehavior](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssueBehavior.md) | 🔗 |
| C | [EscortMerchantCaravanIssueQuest](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssueQuest.md) | 🔗 |
| C | [EscortMerchantCaravanIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/EscortMerchantCaravanIssueTypeDefiner.md) | 🔗 |
| C | [ExtortionByDesertersIssue](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssue.md) | 🔗 |
| C | [ExtortionByDesertersIssueBehavior](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssueBehavior.md) | 🔗 |
| C | [ExtortionByDesertersIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [ExtortionByDesertersIssueQuest](/v1.3.15/zh/api/campaign-ext/ExtortionByDesertersIssueQuest.md) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssue.md) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssueBehavior.md) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [GangLeaderNeedsRecruitsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsRecruitsIssueQuest.md) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssue.md) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssueBehavior.md) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssueQuest.md) | 🔗 |
| C | [GangLeaderNeedsSpecialWeaponsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsSpecialWeaponsIssueTypeDefiner.md) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssue.md) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueBehavior.md) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueQuest.md) | 🔗 |
| C | [GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsToOffloadStolenGoodsIssueTypeDefiner.md) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssue](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssue.md) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueQuest](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssueQuest.md) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueQuestBehavior](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssueQuestBehavior.md) | 🔗 |
| C | [GangLeaderNeedsWeaponsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/GangLeaderNeedsWeaponsIssueTypeDefiner.md) | 🔗 |
| C | [HeadmanNeedsGrainIssue](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssue.md) | 🔗 |
| C | [HeadmanNeedsGrainIssueBehavior](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssueBehavior.md) | 🔗 |
| C | [HeadmanNeedsGrainIssueQuest](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssueQuest.md) | 🔗 |
| C | [HeadmanNeedsGrainIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsGrainIssueTypeDefiner.md) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssue](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssue.md) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueBehavior](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssueBehavior.md) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueQuest](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssueQuest.md) | 🔗 |
| C | [HeadmanNeedsToDeliverAHerdIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/HeadmanNeedsToDeliverAHerdIssueTypeDefiner.md) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssue](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssue.md) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueBehavior](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueBehavior.md) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [HeadmanVillageNeedsDraughtAnimalsIssueQuest](/v1.3.15/zh/api/campaign-ext/HeadmanVillageNeedsDraughtAnimalsIssueQuest.md) | 🔗 |
| C | [HeroRelatedIssueCoolDownData](/v1.3.15/zh/api/campaign-ext/HeroRelatedIssueCoolDownData.md) | 🔗 |
| C | IssueBase | — |
| C | [IssueCoolDownData](/v1.3.15/zh/api/campaign-ext/IssueCoolDownData.md) | 🔗 |
| C | [IssueEffect](/v1.3.15/zh/api/campaign-ext/IssueEffect.md) | 🔗 |
| E | [IssueFrequency](/v1.3.15/zh/api/campaign-ext/IssueFrequency.md) | 🔗 |
| C | [IssueManager](/v1.3.15/zh/api/campaign-ext/IssueManager.md) | 🔗 |
| E | [IssueUpdateDetails](/v1.3.15/zh/api/campaign-ext/IssueUpdateDetails.md) | 🔗 |
| C | [LadysKnightOutIssue](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssue.md) | 🔗 |
| C | [LadysKnightOutIssueBehavior](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssueBehavior.md) | 🔗 |
| C | [LadysKnightOutIssueQuest](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssueQuest.md) | 🔗 |
| C | [LadysKnightOutIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LadysKnightOutIssueTypeDefiner.md) | 🔗 |
| C | [LandLordCompanyOfTroubleIssue](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssue.md) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssueBehavior.md) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueQuest](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssueQuest.md) | 🔗 |
| C | [LandLordCompanyOfTroubleIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandLordCompanyOfTroubleIssueTypeDefiner.md) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssue](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssue.md) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssueBehavior.md) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueQuest](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssueQuest.md) | 🔗 |
| C | [LandlordNeedsAccessToVillageCommonsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandlordNeedsAccessToVillageCommonsIssueTypeDefiner.md) | 🔗 |
| C | [LandLordNeedsManualLaborersIssue](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssue.md) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssueBehavior.md) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [LandLordNeedsManualLaborersIssueQuest](/v1.3.15/zh/api/campaign-ext/LandLordNeedsManualLaborersIssueQuest.md) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssue](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssue.md) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssueBehavior.md) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [LandLordTheArtOfTheTradeIssueQuest](/v1.3.15/zh/api/campaign-ext/LandLordTheArtOfTheTradeIssueQuest.md) | 🔗 |
| C | [LandlordTrainingForRetainersIssue](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssue.md) | 🔗 |
| C | [LandlordTrainingForRetainersIssueBehavior](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssueBehavior.md) | 🔗 |
| C | [LandlordTrainingForRetainersIssueQuest](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssueQuest.md) | 🔗 |
| C | [LandlordTrainingForRetainersIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LandlordTrainingForRetainersIssueTypeDefiner.md) | 🔗 |
| C | [LesserNobleRevoltIssue](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssue.md) | 🔗 |
| C | [LesserNobleRevoltIssueBehavior](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssueBehavior.md) | 🔗 |
| C | [LesserNobleRevoltIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [LesserNobleRevoltIssueQuest](/v1.3.15/zh/api/campaign-ext/LesserNobleRevoltIssueQuest.md) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssue](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssue.md) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuest](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssueQuest.md) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuestBehavior](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssueQuestBehavior.md) | 🔗 |
| C | [LordNeedsGarrisonTroopsIssueQuestTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordNeedsGarrisonTroopsIssueQuestTypeDefiner.md) | 🔗 |
| C | [LordNeedsHorsesIssue](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssue.md) | 🔗 |
| C | [LordNeedsHorsesIssueBehavior](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssueBehavior.md) | 🔗 |
| C | [LordNeedsHorsesIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [LordNeedsHorsesIssueQuest](/v1.3.15/zh/api/campaign-ext/LordNeedsHorsesIssueQuest.md) | 🔗 |
| C | [LordsNeedsTutorIssue](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssue.md) | 🔗 |
| C | [LordsNeedsTutorIssueBehavior](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssueBehavior.md) | 🔗 |
| C | [LordsNeedsTutorIssueQuest](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssueQuest.md) | 🔗 |
| C | [LordsNeedsTutorIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordsNeedsTutorIssueTypeDefiner.md) | 🔗 |
| C | [LordWantsRivalCapturedIssue](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssue.md) | 🔗 |
| C | [LordWantsRivalCapturedIssueBehavior](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssueBehavior.md) | 🔗 |
| C | [LordWantsRivalCapturedIssueQuest](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssueQuest.md) | 🔗 |
| C | [LordWantsRivalCapturedIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/LordWantsRivalCapturedIssueTypeDefiner.md) | 🔗 |
| C | [MerchantArmyOfPoachersIssue](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssue.md) | 🔗 |
| C | [MerchantArmyOfPoachersIssueBehavior](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssueBehavior.md) | 🔗 |
| C | [MerchantArmyOfPoachersIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [MerchantArmyOfPoachersIssueQuest](/v1.3.15/zh/api/campaign-ext/MerchantArmyOfPoachersIssueQuest.md) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssue](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssue.md) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueQuest](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssueQuest.md) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueQuestBehavior](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssueQuestBehavior.md) | 🔗 |
| C | [MerchantNeedsHelpWithOutlawsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/MerchantNeedsHelpWithOutlawsIssueTypeDefiner.md) | 🔗 |
| C | [NearbyBanditBaseIssue](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssue.md) | 🔗 |
| C | [NearbyBanditBaseIssueBehavior](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssueBehavior.md) | 🔗 |
| C | [NearbyBanditBaseIssueQuest](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssueQuest.md) | 🔗 |
| C | [NearbyBanditBaseIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/NearbyBanditBaseIssueTypeDefiner.md) | 🔗 |
| S | [PotentialIssueData](/v1.3.15/zh/api/campaign-ext/PotentialIssueData.md) | 🔗 |
| C | [QuestSettlement](/v1.3.15/zh/api/campaign-ext/QuestSettlement.md) | 🔗 |
| C | [RaidAnEnemyTerritoryIssue](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryIssue.md) | 🔗 |
| C | [RaidAnEnemyTerritoryIssueBehavior](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryIssueBehavior.md) | 🔗 |
| C | [RaidAnEnemyTerritoryIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryIssueTypeDefiner.md) | 🔗 |
| C | [RaidAnEnemyTerritoryQuest](/v1.3.15/zh/api/campaign-ext/RaidAnEnemyTerritoryQuest.md) | 🔗 |
| C | [RevenueFarmingIssue](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssue.md) | 🔗 |
| C | [RevenueFarmingIssueBehavior](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssueBehavior.md) | 🔗 |
| C | [RevenueFarmingIssueBehaviorTypeDefiner](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssueBehaviorTypeDefiner.md) | 🔗 |
| C | [RevenueFarmingIssueQuest](/v1.3.15/zh/api/campaign-ext/RevenueFarmingIssueQuest.md) | 🔗 |
| C | [RevenueVillage](/v1.3.15/zh/api/campaign-ext/RevenueVillage.md) | 🔗 |
| C | [ScoutEnemyGarrisonsIssue](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsIssue.md) | 🔗 |
| C | [ScoutEnemyGarrisonsIssueBehavior](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsIssueBehavior.md) | 🔗 |
| C | [ScoutEnemyGarrisonsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsIssueTypeDefiner.md) | 🔗 |
| C | [ScoutEnemyGarrisonsQuest](/v1.3.15/zh/api/campaign-ext/ScoutEnemyGarrisonsQuest.md) | 🔗 |
| C | [SmugglersIssue](/v1.3.15/zh/api/campaign-ext/SmugglersIssue.md) | 🔗 |
| C | [SmugglersIssueBehavior](/v1.3.15/zh/api/campaign-ext/SmugglersIssueBehavior.md) | 🔗 |
| C | [SmugglersIssueQuest](/v1.3.15/zh/api/campaign-ext/SmugglersIssueQuest.md) | 🔗 |
| C | [SmugglersIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/SmugglersIssueTypeDefiner.md) | 🔗 |
| C | [TheConquestOfSettlementIssue](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssue.md) | 🔗 |
| C | [TheConquestOfSettlementIssueBehavior](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssueBehavior.md) | 🔗 |
| C | [TheConquestOfSettlementIssueQuest](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssueQuest.md) | 🔗 |
| C | [TheConquestOfSettlementIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/TheConquestOfSettlementIssueTypeDefiner.md) | 🔗 |
| C | [VillageEvent](/v1.3.15/zh/api/campaign-ext/VillageEvent.md) | 🔗 |
| S | [VillageEventOptionData](/v1.3.15/zh/api/campaign-ext/VillageEventOptionData.md) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssue](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssue.md) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueBehavior](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssueBehavior.md) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueQuest](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssueQuest.md) | 🔗 |
| C | [VillageNeedsCraftingMaterialsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/VillageNeedsCraftingMaterialsIssueTypeDefiner.md) | 🔗 |
| C | [VillageNeedsToolsIssue](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssue.md) | 🔗 |
| C | [VillageNeedsToolsIssueBehavior](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssueBehavior.md) | 🔗 |
| C | [VillageNeedsToolsIssueQuest](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssueQuest.md) | 🔗 |
| C | [VillageNeedsToolsIssueTypeDefiner](/v1.3.15/zh/api/campaign-ext/VillageNeedsToolsIssueTypeDefiner.md) | 🔗 |

## TaleWorlds.CampaignSystem.Issues.IssueQuestTasks (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CaptureAndBringNpcTask](/v1.3.15/zh/api/campaign-ext/CaptureAndBringNpcTask.md) | 🔗 |
| C | [ChangeCommonAreaOwnerQuestTask](/v1.3.15/zh/api/campaign-ext/ChangeCommonAreaOwnerQuestTask.md) | 🔗 |
| C | [ChangeSettlementOwnerTask](/v1.3.15/zh/api/campaign-ext/ChangeSettlementOwnerTask.md) | 🔗 |
| C | [DefeatPartyQuestTask](/v1.3.15/zh/api/campaign-ext/DefeatPartyQuestTask.md) | 🔗 |
| C | [RaidVillageQuestTask](/v1.3.15/zh/api/campaign-ext/RaidVillageQuestTask.md) | 🔗 |
| C | [TalkToNpcQuestTask](/v1.3.15/zh/api/campaign-ext/TalkToNpcQuestTask.md) | 🔗 |

## TaleWorlds.CampaignSystem.LogEntries (56)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyCreationLogEntry](/v1.3.15/zh/api/campaign-ext/ArmyCreationLogEntry.md) | 🔗 |
| C | [ArmyDispersionLogEntry](/v1.3.15/zh/api/campaign-ext/ArmyDispersionLogEntry.md) | 🔗 |
| C | [BattleStartedLogEntry](/v1.3.15/zh/api/campaign-ext/BattleStartedLogEntry.md) | 🔗 |
| C | [BesiegeSettlementLogEntry](/v1.3.15/zh/api/campaign-ext/BesiegeSettlementLogEntry.md) | 🔗 |
| C | [ChangeAlleyOwnerLogEntry](/v1.3.15/zh/api/campaign-ext/ChangeAlleyOwnerLogEntry.md) | 🔗 |
| C | [ChangeRomanticStateLogEntry](/v1.3.15/zh/api/campaign-ext/ChangeRomanticStateLogEntry.md) | 🔗 |
| C | [ChangeSettlementOwnerLogEntry](/v1.3.15/zh/api/campaign-ext/ChangeSettlementOwnerLogEntry.md) | 🔗 |
| C | [CharacterBecameFugitiveLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterBecameFugitiveLogEntry.md) | 🔗 |
| C | [CharacterBornLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterBornLogEntry.md) | 🔗 |
| C | [CharacterInsultedLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterInsultedLogEntry.md) | 🔗 |
| C | [CharacterKilledLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterKilledLogEntry.md) | 🔗 |
| C | [CharacterMarriedLogEntry](/v1.3.15/zh/api/campaign-ext/CharacterMarriedLogEntry.md) | 🔗 |
| E | [ChatNotificationType](/v1.3.15/zh/api/campaign-ext/ChatNotificationType.md) | 🔗 |
| C | [ChildbirthLogEntry](/v1.3.15/zh/api/campaign-ext/ChildbirthLogEntry.md) | 🔗 |
| C | [ClanChangeKingdomLogEntry](/v1.3.15/zh/api/campaign-ext/ClanChangeKingdomLogEntry.md) | 🔗 |
| C | [ClanDestroyedLogEntry](/v1.3.15/zh/api/campaign-ext/ClanDestroyedLogEntry.md) | 🔗 |
| C | [ClanLeaderChangedLogEntry](/v1.3.15/zh/api/campaign-ext/ClanLeaderChangedLogEntry.md) | 🔗 |
| C | [CommonAreaFightLogEntry](/v1.3.15/zh/api/campaign-ext/CommonAreaFightLogEntry.md) | 🔗 |
| C | [DeclareWarLogEntry](/v1.3.15/zh/api/campaign-ext/DeclareWarLogEntry.md) | 🔗 |
| C | [DefeatCharacterLogEntry](/v1.3.15/zh/api/campaign-ext/DefeatCharacterLogEntry.md) | 🔗 |
| C | [DestroyMobilePartyLogEntry](/v1.3.15/zh/api/campaign-ext/DestroyMobilePartyLogEntry.md) | 🔗 |
| C | [EndAllianceLogEntry](/v1.3.15/zh/api/campaign-ext/EndAllianceLogEntry.md) | 🔗 |
| C | [EndCallToWarAgreementLogEntry](/v1.3.15/zh/api/campaign-ext/EndCallToWarAgreementLogEntry.md) | 🔗 |
| C | [EndCaptivityLogEntry](/v1.3.15/zh/api/campaign-ext/EndCaptivityLogEntry.md) | 🔗 |
| C | [GatherArmyLogEntry](/v1.3.15/zh/api/campaign-ext/GatherArmyLogEntry.md) | 🔗 |
| I | [IChatNotification](/v1.3.15/zh/api/campaign-ext/IChatNotification.md) | 🔗 |
| I | [IEncyclopediaLog](/v1.3.15/zh/api/campaign-ext/IEncyclopediaLog.md) | 🔗 |
| E | [ImportanceEnum](/v1.3.15/zh/api/campaign-ext/ImportanceEnum.md) | 🔗 |
| C | [IssueQuestLogEntry](/v1.3.15/zh/api/campaign-ext/IssueQuestLogEntry.md) | 🔗 |
| C | [IssueQuestStartLogEntry](/v1.3.15/zh/api/campaign-ext/IssueQuestStartLogEntry.md) | 🔗 |
| I | [IWarLog](/v1.3.15/zh/api/campaign-ext/IWarLog.md) | 🔗 |
| C | [JournalLogEntry](/v1.3.15/zh/api/campaign-ext/JournalLogEntry.md) | 🔗 |
| C | [KingdomDecisionAddedLogEntry](/v1.3.15/zh/api/campaign-ext/KingdomDecisionAddedLogEntry.md) | 🔗 |
| C | [KingdomDecisionConcludedLogEntry](/v1.3.15/zh/api/campaign-ext/KingdomDecisionConcludedLogEntry.md) | 🔗 |
| C | [KingdomDestroyedLogEntry](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedLogEntry.md) | 🔗 |
| C | [LogEntry](/v1.3.15/zh/api/campaign-ext/LogEntry.md) | 🔗 |
| C | [LogEntryHistory](/v1.3.15/zh/api/campaign-ext/LogEntryHistory.md) | 🔗 |
| C | [MakePeaceLogEntry](/v1.3.15/zh/api/campaign-ext/MakePeaceLogEntry.md) | 🔗 |
| C | [MercenaryClanChangedKingdomLogEntry](/v1.3.15/zh/api/campaign-ext/MercenaryClanChangedKingdomLogEntry.md) | 🔗 |
| C | [OverruleInfluenceLogEntry](/v1.3.15/zh/api/campaign-ext/OverruleInfluenceLogEntry.md) | 🔗 |
| C | [PlayerAttackAlleyLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerAttackAlleyLogEntry.md) | 🔗 |
| C | [PlayerBattleEndedLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerBattleEndedLogEntry.md) | 🔗 |
| C | [PlayerCharacterChangedLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerCharacterChangedLogEntry.md) | 🔗 |
| C | [PlayerMeetLordLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerMeetLordLogEntry.md) | 🔗 |
| C | [PlayerReputationChangesLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerReputationChangesLogEntry.md) | 🔗 |
| C | [PlayerRetiredLogEntry](/v1.3.15/zh/api/campaign-ext/PlayerRetiredLogEntry.md) | 🔗 |
| C | [PregnancyLogEntry](/v1.3.15/zh/api/campaign-ext/PregnancyLogEntry.md) | 🔗 |
| C | [RebellionStartedLogEntry](/v1.3.15/zh/api/campaign-ext/RebellionStartedLogEntry.md) | 🔗 |
| C | [SettlementClaimedLogEntry](/v1.3.15/zh/api/campaign-ext/SettlementClaimedLogEntry.md) | 🔗 |
| C | [SiegeAftermathLogEntry](/v1.3.15/zh/api/campaign-ext/SiegeAftermathLogEntry.md) | 🔗 |
| C | [StartAllianceLogEntry](/v1.3.15/zh/api/campaign-ext/StartAllianceLogEntry.md) | 🔗 |
| C | [StartCallToWarAgreementLogEntry](/v1.3.15/zh/api/campaign-ext/StartCallToWarAgreementLogEntry.md) | 🔗 |
| C | [TakePrisonerLogEntry](/v1.3.15/zh/api/campaign-ext/TakePrisonerLogEntry.md) | 🔗 |
| C | [TournamentWonLogEntry](/v1.3.15/zh/api/campaign-ext/TournamentWonLogEntry.md) | 🔗 |
| C | [TradeAgreementLogEntry](/v1.3.15/zh/api/campaign-ext/TradeAgreementLogEntry.md) | 🔗 |
| C | [VillageStateChangedLogEntry](/v1.3.15/zh/api/campaign-ext/VillageStateChangedLogEntry.md) | 🔗 |

## TaleWorlds.CampaignSystem.Map (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [IInteractablePoint](/v1.3.15/zh/api/campaign-ext/IInteractablePoint.md) | 🔗 |
| I | [IMapPoint](/v1.3.15/zh/api/campaign-ext/IMapPoint.md) | 🔗 |
| I | [IMapScene](/v1.3.15/zh/api/campaign-ext/IMapScene.md) | 🔗 |
| I | [IMapSceneCreator](/v1.3.15/zh/api/campaign-ext/IMapSceneCreator.md) | 🔗 |
| S | [LocatableSearchData](/v1.3.15/zh/api/campaign-ext/LocatableSearchData.md) | 🔗 |
| C | [MapMarker](/v1.3.15/zh/api/campaign-ext/MapMarker.md) | 🔗 |
| C | [MapMarkerManager](/v1.3.15/zh/api/campaign-ext/MapMarkerManager.md) | 🔗 |
| S | [MapPatchData](/v1.3.15/zh/api/campaign-ext/MapPatchData.md) | 🔗 |
| C | [WeatherNode](/v1.3.15/zh/api/campaign-ext/WeatherNode.md) | 🔗 |

## TaleWorlds.CampaignSystem.Map.DistanceCache (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| I | [ISettlementDataHolder](/v1.3.15/zh/api/campaign-ext/ISettlementDataHolder.md) | 🔗 |
| C | [NavigationCache](/v1.3.15/zh/api/campaign-ext/NavigationCache.md) | 🔗 |
| C | [SandBoxNavigationCache](/v1.3.15/zh/api/campaign-ext/SandBoxNavigationCache.md) | 🔗 |

## TaleWorlds.CampaignSystem.MapEvents (17)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [BattleTypes](/v1.3.15/zh/api/campaign-ext/BattleTypes.md) | 🔗 |
| C | [BlockadeBattleMapEvent](/v1.3.15/zh/api/campaign-ext/BlockadeBattleMapEvent.md) | 🔗 |
| C | [FieldBattleEventComponent](/v1.3.15/zh/api/campaign-ext/FieldBattleEventComponent.md) | 🔗 |
| C | [ForceSuppliesEventComponent](/v1.3.15/zh/api/campaign-ext/ForceSuppliesEventComponent.md) | 🔗 |
| C | [ForceVolunteersEventComponent](/v1.3.15/zh/api/campaign-ext/ForceVolunteersEventComponent.md) | 🔗 |
| E | [HideoutBattleEndState](./campaign-ext/HideoutBattleEndState.md) | 🔗 |
| C | [HideoutEventComponent](/v1.3.15/zh/api/campaign-ext/HideoutEventComponent.md) | 🔗 |
| I | [IMapEventVisual](/v1.3.15/zh/api/campaign-ext/IMapEventVisual.md) | 🔗 |
| C | [MapEvent](/v1.3.15/zh/api/campaign-ext/MapEvent.md) | 🔗 |
| C | [MapEventComponent](/v1.3.15/zh/api/campaign-ext/MapEventComponent.md) | 🔗 |
| C | [MapEventManager](/v1.3.15/zh/api/campaign-ext/MapEventManager.md) | 🔗 |
| C | [MapEventParty](/v1.3.15/zh/api/campaign-ext/MapEventParty.md) | 🔗 |
| C | [MapEventSide](/v1.3.15/zh/api/campaign-ext/MapEventSide.md) | 🔗 |
| E | [MapEventState](/v1.3.15/zh/api/campaign-ext/MapEventState.md) | 🔗 |
| E | [PowerCalculationContext](/v1.3.15/zh/api/campaign-ext/PowerCalculationContext.md) | 🔗 |
| C | [RaidEventComponent](/v1.3.15/zh/api/campaign-ext/RaidEventComponent.md) | 🔗 |
| C | [SiegeAmbushEventComponent](/v1.3.15/zh/api/campaign-ext/SiegeAmbushEventComponent.md) | 🔗 |

## TaleWorlds.CampaignSystem.MapNotificationTypes (27)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarOfferMapNotification](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarOfferMapNotification.md) | 🔗 |
| C | [AlleyLeaderDiedMapNotification](/v1.3.15/zh/api/campaign-ext/AlleyLeaderDiedMapNotification.md) | 🔗 |
| C | [AlleyUnderAttackMapNotification](/v1.3.15/zh/api/campaign-ext/AlleyUnderAttackMapNotification.md) | 🔗 |
| C | [AllianceOfferMapNotification](/v1.3.15/zh/api/campaign-ext/AllianceOfferMapNotification.md) | 🔗 |
| C | [ArmyCreationMapNotification](/v1.3.15/zh/api/campaign-ext/ArmyCreationMapNotification.md) | 🔗 |
| C | [ArmyDispersionMapNotification](/v1.3.15/zh/api/campaign-ext/ArmyDispersionMapNotification.md) | 🔗 |
| C | [ChildBornMapNotification](/v1.3.15/zh/api/campaign-ext/ChildBornMapNotification.md) | 🔗 |
| C | [DeathMapNotification](/v1.3.15/zh/api/campaign-ext/DeathMapNotification.md) | 🔗 |
| C | [EducationMapNotification](/v1.3.15/zh/api/campaign-ext/EducationMapNotification.md) | 🔗 |
| C | [HeirComeOfAgeMapNotification](/v1.3.15/zh/api/campaign-ext/HeirComeOfAgeMapNotification.md) | 🔗 |
| C | [KingdomDecisionMapNotification](/v1.3.15/zh/api/campaign-ext/KingdomDecisionMapNotification.md) | 🔗 |
| C | [KingdomDestroyedMapNotification](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedMapNotification.md) | 🔗 |
| C | [MarriageMapNotification](/v1.3.15/zh/api/campaign-ext/MarriageMapNotification.md) | 🔗 |
| C | [MarriageOfferMapNotification](/v1.3.15/zh/api/campaign-ext/MarriageOfferMapNotification.md) | 🔗 |
| C | [MercenaryOfferMapNotification](/v1.3.15/zh/api/campaign-ext/MercenaryOfferMapNotification.md) | 🔗 |
| C | [PartyLeaderChangeNotification](/v1.3.15/zh/api/campaign-ext/PartyLeaderChangeNotification.md) | 🔗 |
| C | [PeaceMapNotification](/v1.3.15/zh/api/campaign-ext/PeaceMapNotification.md) | 🔗 |
| C | [PeaceOfferMapNotification](/v1.3.15/zh/api/campaign-ext/PeaceOfferMapNotification.md) | 🔗 |
| C | [ProposeCallToWarOfferMapNotification](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarOfferMapNotification.md) | 🔗 |
| C | [RansomOfferMapNotification](/v1.3.15/zh/api/campaign-ext/RansomOfferMapNotification.md) | 🔗 |
| C | [SettlementOwnerChangedMapNotification](/v1.3.15/zh/api/campaign-ext/SettlementOwnerChangedMapNotification.md) | 🔗 |
| C | [SettlementRebellionMapNotification](/v1.3.15/zh/api/campaign-ext/SettlementRebellionMapNotification.md) | 🔗 |
| C | [SettlementUnderSiegeMapNotification](/v1.3.15/zh/api/campaign-ext/SettlementUnderSiegeMapNotification.md) | 🔗 |
| C | [TraitChangedMapNotification](/v1.3.15/zh/api/campaign-ext/TraitChangedMapNotification.md) | 🔗 |
| C | [TributeFinishedMapNotification](/v1.3.15/zh/api/campaign-ext/TributeFinishedMapNotification.md) | 🔗 |
| C | [VassalOfferMapNotification](/v1.3.15/zh/api/campaign-ext/VassalOfferMapNotification.md) | 🔗 |
| C | [WarMapNotification](/v1.3.15/zh/api/campaign-ext/WarMapNotification.md) | 🔗 |

## TaleWorlds.CampaignSystem.Naval (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AnchorPoint](/v1.3.15/zh/api/campaign-ext/AnchorPoint.md) | 🔗 |
| C | [DefaultFigureheads](/v1.3.15/zh/api/campaign-ext/DefaultFigureheads.md) | 🔗 |
| C | [Figurehead](/v1.3.15/zh/api/campaign-ext/Figurehead.md) | 🔗 |
| C | [Ship](/v1.3.15/zh/api/campaign-ext/Ship.md) | 🔗 |

## TaleWorlds.CampaignSystem.Party (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [AiBehavior](/v1.3.15/zh/api/campaign-ext/AiBehavior.md) | 🔗 |
| C | [FleeingData](/v1.3.15/zh/api/campaign-ext/FleeingData.md) | 🔗 |
| C | [MobileParty](/v1.3.15/zh/api/campaign/MobileParty.md) | 🔗 |
| C | [MobilePartyAi](/v1.3.15/zh/api/campaign-ext/MobilePartyAi.md) | 🔗 |
| E | [MoveModeType](/v1.3.15/zh/api/campaign-ext/MoveModeType.md) | 🔗 |
| E | [NavigationType](/v1.3.15/zh/api/campaign-ext/NavigationType.md) | 🔗 |
| C | [PartyBase](/v1.3.15/zh/api/campaign/PartyBase.md) | 🔗 |
| C | [PartyCommand](/v1.3.15/zh/api/campaign-ext/PartyCommand.md) | 🔗 |
| E | [PartyCommandCode](/v1.3.15/zh/api/campaign-ext/PartyCommandCode.md) | 🔗 |
| E | [PartyObjective](/v1.3.15/zh/api/campaign-ext/PartyObjective.md) | 🔗 |
| E | [PartyRosterSide](/v1.3.15/zh/api/campaign-ext/PartyRosterSide.md) | 🔗 |
| C | [PartyScreenData](/v1.3.15/zh/api/campaign-ext/PartyScreenData.md) | 🔗 |
| C | [PartyScreenLogic](/v1.3.15/zh/api/campaign-ext/PartyScreenLogic.md) | 🔗 |
| S | [PartyScreenLogicInitializationData](/v1.3.15/zh/api/campaign-ext/PartyScreenLogicInitializationData.md) | 🔗 |
| C | [PartyTemplateObject](/v1.3.15/zh/api/campaign-ext/PartyTemplateObject.md) | 🔗 |
| S | [PartyTemplateStack](/v1.3.15/zh/api/campaign-ext/PartyTemplateStack.md) | 🔗 |
| S | [ShipTemplateStack](/v1.3.15/zh/api/campaign-ext/ShipTemplateStack.md) | 🔗 |
| E | [TransferState](/v1.3.15/zh/api/campaign-ext/TransferState.md) | 🔗 |
| C | [TroopComparer](/v1.3.15/zh/api/campaign-ext/TroopComparer.md) | 🔗 |
| E | [TroopSortType](/v1.3.15/zh/api/campaign-ext/TroopSortType.md) | 🔗 |
| S | [TroopTradeDifference](/v1.3.15/zh/api/campaign-ext/TroopTradeDifference.md) | 🔗 |
| E | [TroopType](/v1.3.15/zh/api/campaign-ext/TroopType.md) | 🔗 |

## TaleWorlds.CampaignSystem.Party.PartyComponents (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BanditPartyComponent](/v1.3.15/zh/api/campaign-ext/BanditPartyComponent.md) | 🔗 |
| C | [CaravanPartyComponent](/v1.3.15/zh/api/campaign-ext/CaravanPartyComponent.md) | 🔗 |
| C | [CustomPartyComponent](/v1.3.15/zh/api/campaign-ext/CustomPartyComponent.md) | 🔗 |
| C | [GarrisonPartyComponent](/v1.3.15/zh/api/campaign-ext/GarrisonPartyComponent.md) | 🔗 |
| C | [InitializationArgs](/v1.3.15/zh/api/campaign-ext/InitializationArgs.md) | 🔗 |
| C | [LordPartyComponent](/v1.3.15/zh/api/campaign-ext/LordPartyComponent.md) | 🔗 |
| C | [MilitiaPartyComponent](/v1.3.15/zh/api/campaign-ext/MilitiaPartyComponent.md) | 🔗 |
| C | [PartyComponent](/v1.3.15/zh/api/campaign-ext/PartyComponent.md) | 🔗 |
| C | [PatrolPartyComponent](/v1.3.15/zh/api/campaign-ext/PatrolPartyComponent.md) | 🔗 |
| C | [VillagerPartyComponent](/v1.3.15/zh/api/campaign-ext/VillagerPartyComponent.md) | 🔗 |
| C | [WarPartyComponent](/v1.3.15/zh/api/campaign-ext/WarPartyComponent.md) | 🔗 |

## TaleWorlds.CampaignSystem.Roster (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FlattenedTroopRoster](/v1.3.15/zh/api/campaign-ext/FlattenedTroopRoster.md) | 🔗 |
| S | [FlattenedTroopRosterElement](/v1.3.15/zh/api/campaign-ext/FlattenedTroopRosterElement.md) | 🔗 |
| C | [ItemRoster](/v1.3.15/zh/api/campaign-ext/ItemRoster.md) | 🔗 |
| E | [RosterTroopState](/v1.3.15/zh/api/campaign-ext/RosterTroopState.md) | 🔗 |
| C | [TroopRoster](/v1.3.15/zh/api/campaign-ext/TroopRoster.md) | 🔗 |
| S | [TroopRosterElement](/v1.3.15/zh/api/campaign-ext/TroopRosterElement.md) | 🔗 |

## TaleWorlds.CampaignSystem.SaveCompability (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyDispersionReasonEnumResolver](/v1.3.15/zh/api/campaign-ext/ArmyDispersionReasonEnumResolver.md) | 🔗 |
| C | [BattleTypeEnumResolver](/v1.3.15/zh/api/campaign-ext/BattleTypeEnumResolver.md) | 🔗 |
| C | [CharacterAttributesResolver](/v1.3.15/zh/api/campaign-ext/CharacterAttributesResolver.md) | 🔗 |
| C | [CharacterPerksResolver](/v1.3.15/zh/api/campaign-ext/CharacterPerksResolver.md) | 🔗 |
| C | [CharacterTraitsResolver](/v1.3.15/zh/api/campaign-ext/CharacterTraitsResolver.md) | 🔗 |
| C | [EndCaptivityDetailEnumResolver](/v1.3.15/zh/api/campaign-ext/EndCaptivityDetailEnumResolver.md) | 🔗 |
| C | [HeroDeveloperResolver](/v1.3.15/zh/api/campaign-ext/HeroDeveloperResolver.md) | 🔗 |
| C | [HeroTraitDeveloperResolver](/v1.3.15/zh/api/campaign-ext/HeroTraitDeveloperResolver.md) | 🔗 |

## TaleWorlds.CampaignSystem.SceneInformationPopupTypes (28)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AntiEmpireConspiracyBeginsSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/AntiEmpireConspiracyBeginsSceneNotificationItem.md) | 🔗 |
| C | [BecomeKingSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/BecomeKingSceneNotificationItem.md) | 🔗 |
| C | [CampaignSceneNotificationHelper](/v1.3.15/zh/api/campaign-ext/CampaignSceneNotificationHelper.md) | 🔗 |
| C | [ClanMemberPeaceDeathSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/ClanMemberPeaceDeathSceneNotificationItem.md) | 🔗 |
| C | [ClanMemberWarDeathSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/ClanMemberWarDeathSceneNotificationItem.md) | 🔗 |
| C | [DeathOldAgeSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/DeathOldAgeSceneNotificationItem.md) | 🔗 |
| C | [DeclareDragonBannerSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/DeclareDragonBannerSceneNotificationItem.md) | 🔗 |
| C | [EmpireConspiracyBeginsSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/EmpireConspiracyBeginsSceneNotificationItem.md) | 🔗 |
| C | [EmpireConspiracySupportsSceneNotificationItemBase](/v1.3.15/zh/api/campaign-ext/EmpireConspiracySupportsSceneNotificationItemBase.md) | 🔗 |
| C | [FindingFirstBannerPieceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/FindingFirstBannerPieceSceneNotificationItem.md) | 🔗 |
| C | [FindingSecondBannerPieceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/FindingSecondBannerPieceSceneNotificationItem.md) | 🔗 |
| C | [FindingThirdBannerPieceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/FindingThirdBannerPieceSceneNotificationItem.md) | 🔗 |
| C | [HeirComingOfAgeFemaleSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/HeirComingOfAgeFemaleSceneNotificationItem.md) | 🔗 |
| C | [HeirComingOfAgeSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/HeirComingOfAgeSceneNotificationItem.md) | 🔗 |
| C | [HeroExecutionSceneNotificationData](/v1.3.15/zh/api/campaign-ext/HeroExecutionSceneNotificationData.md) | 🔗 |
| C | [JoinKingdomSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/JoinKingdomSceneNotificationItem.md) | 🔗 |
| C | [KingdomCreatedSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/KingdomCreatedSceneNotificationItem.md) | 🔗 |
| C | [KingdomDestroyedSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedSceneNotificationItem.md) | 🔗 |
| C | [MainHeroBattleDeathNotificationItem](/v1.3.15/zh/api/campaign-ext/MainHeroBattleDeathNotificationItem.md) | 🔗 |
| C | [MainHeroBattleVictoryDeathNotificationItem](/v1.3.15/zh/api/campaign-ext/MainHeroBattleVictoryDeathNotificationItem.md) | 🔗 |
| C | [MarriageSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/MarriageSceneNotificationItem.md) | 🔗 |
| C | [NavalDeathSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/NavalDeathSceneNotificationItem.md) | 🔗 |
| C | [NewBornFemaleHeroSceneAlternateNotificationItem](/v1.3.15/zh/api/campaign-ext/NewBornFemaleHeroSceneAlternateNotificationItem.md) | 🔗 |
| C | [NewBornFemaleHeroSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/NewBornFemaleHeroSceneNotificationItem.md) | 🔗 |
| C | [NewBornSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/NewBornSceneNotificationItem.md) | 🔗 |
| C | [PledgeAllegianceSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/PledgeAllegianceSceneNotificationItem.md) | 🔗 |
| C | [ProEmpireConspiracyBeginsSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/ProEmpireConspiracyBeginsSceneNotificationItem.md) | 🔗 |
| C | [SupportedFactionDefeatedSceneNotificationItem](/v1.3.15/zh/api/campaign-ext/SupportedFactionDefeatedSceneNotificationItem.md) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements (21)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Alley](/v1.3.15/zh/api/campaign-ext/Alley.md) | 🔗 |
| E | [AreaState](/v1.3.15/zh/api/campaign-ext/AreaState.md) | 🔗 |
| C | [DefaultVillageTypes](/v1.3.15/zh/api/campaign-ext/DefaultVillageTypes.md) | 🔗 |
| C | [Fief](/v1.3.15/zh/api/campaign-ext/Fief.md) | 🔗 |
| C | [Hideout](/v1.3.15/zh/api/campaign-ext/Hideout.md) | 🔗 |
| I | [IMarketData](/v1.3.15/zh/api/campaign-ext/IMarketData.md) | 🔗 |
| I | [ISpottable](/v1.3.15/zh/api/campaign-ext/ISpottable.md) | 🔗 |
| S | [ItemData](/v1.3.15/zh/api/campaign-ext/ItemData.md) | 🔗 |
| E | [ProsperityLevel](/v1.3.15/zh/api/campaign-ext/ProsperityLevel.md) | 🔗 |
| C | [RetirementSettlementComponent](/v1.3.15/zh/api/campaign-ext/RetirementSettlementComponent.md) | 🔗 |
| S | [SellLog](/v1.3.15/zh/api/campaign-ext/SellLog.md) | 🔗 |
| C | Settlement | — |
| C | [SettlementArea](/v1.3.15/zh/api/campaign-ext/SettlementArea.md) | 🔗 |
| C | [SettlementComponent](/v1.3.15/zh/api/campaign-ext/SettlementComponent.md) | 🔗 |
| E | [SiegeState](/v1.3.15/zh/api/campaign-ext/SiegeState.md) | 🔗 |
| C | [Town](/v1.3.15/zh/api/campaign-ext/Town.md) | 🔗 |
| C | [TownMarketData](/v1.3.15/zh/api/campaign-ext/TownMarketData.md) | 🔗 |
| C | Village | — |
| C | [VillageMarketData](/v1.3.15/zh/api/campaign-ext/VillageMarketData.md) | 🔗 |
| E | [VillageStates](/v1.3.15/zh/api/campaign-ext/VillageStates.md) | 🔗 |
| C | [VillageType](/v1.3.15/zh/api/campaign-ext/VillageType.md) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Buildings (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [Building](/v1.3.15/zh/api/campaign-ext/Building.md) | 🔗 |
| E | [BuildingEffectEnum](/v1.3.15/zh/api/campaign-ext/BuildingEffectEnum.md) | 🔗 |
| E | [BuildingEffectIncrementType](/v1.3.15/zh/api/campaign-ext/BuildingEffectIncrementType.md) | 🔗 |
| C | [BuildingType](/v1.3.15/zh/api/campaign-ext/BuildingType.md) | 🔗 |
| C | [DefaultBuildingTypes](/v1.3.15/zh/api/campaign-ext/DefaultBuildingTypes.md) | 🔗 |
| S | [EffectInfo](/v1.3.15/zh/api/campaign-ext/EffectInfo.md) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Locations (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AccompanyingCharacter](/v1.3.15/zh/api/campaign-ext/AccompanyingCharacter.md) | 🔗 |
| E | [CharacterRelations](/v1.3.15/zh/api/campaign-ext/CharacterRelations.md) | 🔗 |
| C | [Location](/v1.3.15/zh/api/campaign-ext/Location.md) | 🔗 |
| C | [LocationCharacter](/v1.3.15/zh/api/campaign-ext/LocationCharacter.md) | 🔗 |
| C | [LocationComplex](/v1.3.15/zh/api/campaign-ext/LocationComplex.md) | 🔗 |
| C | [LocationComplexTemplate](/v1.3.15/zh/api/campaign-ext/LocationComplexTemplate.md) | 🔗 |

## TaleWorlds.CampaignSystem.Settlements.Workshops (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [Production](/v1.3.15/zh/api/campaign-ext/Production.md) | 🔗 |
| C | Workshop | — |
| C | [WorkshopType](/v1.3.15/zh/api/campaign-ext/WorkshopType.md) | 🔗 |

## TaleWorlds.CampaignSystem.Siege (14)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BesiegerCamp](/v1.3.15/zh/api/campaign-ext/BesiegerCamp.md) | 🔗 |
| C | [DefaultSiegeStrategies](/v1.3.15/zh/api/campaign-ext/DefaultSiegeStrategies.md) | 🔗 |
| I | [ISiegeEventSide](/v1.3.15/zh/api/campaign-ext/ISiegeEventSide.md) | 🔗 |
| I | [ISiegeEventVisual](/v1.3.15/zh/api/campaign-ext/ISiegeEventVisual.md) | 🔗 |
| C | [PlayerSiege](/v1.3.15/zh/api/campaign-ext/PlayerSiege.md) | 🔗 |
| C | [RangedSiegeEngine](/v1.3.15/zh/api/campaign-ext/RangedSiegeEngine.md) | 🔗 |
| C | [RemovedSiegeEngine](/v1.3.15/zh/api/campaign-ext/RemovedSiegeEngine.md) | 🔗 |
| E | [SiegeBombardTargets](/v1.3.15/zh/api/campaign-ext/SiegeBombardTargets.md) | 🔗 |
| C | [SiegeEngineConstructionProgress](/v1.3.15/zh/api/campaign-ext/SiegeEngineConstructionProgress.md) | 🔗 |
| C | [SiegeEngineMissile](/v1.3.15/zh/api/campaign-ext/SiegeEngineMissile.md) | 🔗 |
| C | [SiegeEnginesContainer](/v1.3.15/zh/api/campaign-ext/SiegeEnginesContainer.md) | 🔗 |
| C | [SiegeEvent](/v1.3.15/zh/api/campaign-ext/SiegeEvent.md) | 🔗 |
| C | [SiegeEventManager](/v1.3.15/zh/api/campaign-ext/SiegeEventManager.md) | 🔗 |
| C | [SiegeStrategy](/v1.3.15/zh/api/campaign-ext/SiegeStrategy.md) | 🔗 |

## TaleWorlds.CampaignSystem.TournamentGames (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [FightTournamentGame](/v1.3.15/zh/api/campaign-ext/FightTournamentGame.md) | 🔗 |
| I | [ITournamentManager](/v1.3.15/zh/api/campaign-ext/ITournamentManager.md) | 🔗 |
| E | [MatchState](/v1.3.15/zh/api/campaign-ext/MatchState.md) | 🔗 |
| E | [QualificationMode](/v1.3.15/zh/api/campaign-ext/QualificationMode.md) | 🔗 |
| C | [TournamentCampaignBehavior](/v1.3.15/zh/api/campaign-ext/TournamentCampaignBehavior.md) | 🔗 |
| C | [TournamentGame](/v1.3.15/zh/api/campaign-ext/TournamentGame.md) | 🔗 |
| C | [TournamentManager](/v1.3.15/zh/api/campaign-ext/TournamentManager.md) | 🔗 |
| C | [TournamentMatch](/v1.3.15/zh/api/campaign-ext/TournamentMatch.md) | 🔗 |
| C | [TournamentParticipant](/v1.3.15/zh/api/campaign-ext/TournamentParticipant.md) | 🔗 |
| C | [TournamentRound](/v1.3.15/zh/api/campaign-ext/TournamentRound.md) | 🔗 |
| C | [TournamentTeam](/v1.3.15/zh/api/campaign-ext/TournamentTeam.md) | 🔗 |

## TaleWorlds.CampaignSystem.TroopSuppliers (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyGroupTroopSupplier](/v1.3.15/zh/api/campaign-ext/PartyGroupTroopSupplier.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection (34)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ActionCampaignOptionData](/v1.3.15/zh/api/campaign-ext/ActionCampaignOptionData.md) | 🔗 |
| C | [BannerEditorVM](/v1.3.15/zh/api/campaign-ext/BannerEditorVM.md) | 🔗 |
| C | [BooleanCampaignOptionData](/v1.3.15/zh/api/campaign-ext/BooleanCampaignOptionData.md) | 🔗 |
| C | [CampaignOptionData](/v1.3.15/zh/api/campaign-ext/CampaignOptionData.md) | 🔗 |
| E | [CampaignOptionDataType](/v1.3.15/zh/api/campaign-ext/CampaignOptionDataType.md) | 🔗 |
| S | [CampaignOptionDisableStatus](/v1.3.15/zh/api/campaign-ext/CampaignOptionDisableStatus.md) | 🔗 |
| E | [CampaignOptionEnableState](/v1.3.15/zh/api/campaign-ext/CampaignOptionEnableState.md) | 🔗 |
| C | [CampaignOptionItemVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionItemVM.md) | 🔗 |
| C | [CampaignOptionsControllerVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionsControllerVM.md) | 🔗 |
| E | [CampaignOptionsDifficultyPresets](/v1.3.15/zh/api/campaign-ext/CampaignOptionsDifficultyPresets.md) | 🔗 |
| C | [CampaignOptionSelectorVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionSelectorVM.md) | 🔗 |
| C | [CampaignOptionsManager](/v1.3.15/zh/api/campaign-ext/CampaignOptionsManager.md) | 🔗 |
| C | [CampaignOptionsVM](/v1.3.15/zh/api/campaign-ext/CampaignOptionsVM.md) | 🔗 |
| C | [CampaignUIHelper](/v1.3.15/zh/api/campaign-ext/CampaignUIHelper.md) | 🔗 |
| C | [CharacterAttributeComparer](/v1.3.15/zh/api/campaign-ext/CharacterAttributeComparer.md) | 🔗 |
| C | [DefaultCampaignOptionsProvider](/v1.3.15/zh/api/campaign-ext/DefaultCampaignOptionsProvider.md) | 🔗 |
| C | [HeroViewModel](/v1.3.15/zh/api/campaign-ext/HeroViewModel.md) | 🔗 |
| C | [HeroVM](/v1.3.15/zh/api/campaign-ext/HeroVM.md) | 🔗 |
| I | [ICampaignOptionData](/v1.3.15/zh/api/campaign-ext/ICampaignOptionData.md) | 🔗 |
| I | [ICampaignOptionProvider](/v1.3.15/zh/api/campaign-ext/ICampaignOptionProvider.md) | 🔗 |
| E | IssueQuestFlags | — |
| C | [MobilePartyPrecedenceComparer](/v1.3.15/zh/api/campaign-ext/MobilePartyPrecedenceComparer.md) | 🔗 |
| C | [NumericCampaignOptionData](/v1.3.15/zh/api/campaign-ext/NumericCampaignOptionData.md) | 🔗 |
| C | [PlayerInspectedPartySpeedEvent](/v1.3.15/zh/api/campaign-ext/PlayerInspectedPartySpeedEvent.md) | 🔗 |
| C | [ProductInputOutputEqualityComparer](/v1.3.15/zh/api/campaign-ext/ProductInputOutputEqualityComparer.md) | 🔗 |
| C | [ProfitItemPropertyVM](/v1.3.15/zh/api/campaign-ext/ProfitItemPropertyVM.md) | 🔗 |
| E | [PropertyType](/v1.3.15/zh/api/campaign-ext/PropertyType.md) | 🔗 |
| C | [SelectableFiefItemPropertyVM](/v1.3.15/zh/api/campaign-ext/SelectableFiefItemPropertyVM.md) | 🔗 |
| C | [SelectableItemPropertyVM](/v1.3.15/zh/api/campaign-ext/SelectableItemPropertyVM.md) | 🔗 |
| C | [SelectionCampaignOptionData](/v1.3.15/zh/api/campaign-ext/SelectionCampaignOptionData.md) | 🔗 |
| C | [SkillObjectComparer](/v1.3.15/zh/api/campaign-ext/SkillObjectComparer.md) | 🔗 |
| E | [SortState](/v1.3.15/zh/api/campaign-ext/SortState.md) | 🔗 |
| C | [TooltipRefresherCollection](/v1.3.15/zh/api/campaign-ext/TooltipRefresherCollection.md) | 🔗 |
| C | [UIColors](/v1.3.15/zh/api/campaign-ext/UIColors.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement (15)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyCohesionBoostedByPlayerEvent](/v1.3.15/zh/api/campaign-ext/ArmyCohesionBoostedByPlayerEvent.md) | 🔗 |
| C | [ArmyManagementBoostEventVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementBoostEventVM.md) | 🔗 |
| C | [ArmyManagementItemVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementItemVM.md) | 🔗 |
| C | [ArmyManagementSortControllerVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementSortControllerVM.md) | 🔗 |
| C | [ArmyManagementVM](/v1.3.15/zh/api/campaign-ext/ArmyManagementVM.md) | 🔗 |
| E | [BoostCurrency](/v1.3.15/zh/api/campaign-ext/BoostCurrency.md) | 🔗 |
| C | [ItemClanComparer](/v1.3.15/zh/api/campaign-ext/ItemClanComparer.md) | 🔗 |
| C | [ItemComparerBase](/v1.3.15/zh/api/campaign-ext/ItemComparerBase.md) | 🔗 |
| C | [ItemCostComparer](/v1.3.15/zh/api/campaign-ext/ItemCostComparer.md) | 🔗 |
| C | [ItemDistanceComparer](/v1.3.15/zh/api/campaign-ext/ItemDistanceComparer.md) | 🔗 |
| C | [ItemNameComparer](/v1.3.15/zh/api/campaign-ext/ItemNameComparer.md) | 🔗 |
| C | [ItemShipCountComparer](/v1.3.15/zh/api/campaign-ext/ItemShipCountComparer.md) | 🔗 |
| C | [ItemStrengthComparer](/v1.3.15/zh/api/campaign-ext/ItemStrengthComparer.md) | 🔗 |
| C | [ManagementItemComparer](/v1.3.15/zh/api/campaign-ext/ManagementItemComparer.md) | 🔗 |
| C | [PartyAddedToArmyByPlayerEvent](/v1.3.15/zh/api/campaign-ext/PartyAddedToArmyByPlayerEvent.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Barter (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BarterItemVM](/v1.3.15/zh/api/campaign-ext/BarterItemVM.md) | 🔗 |
| C | [BarterVM](/v1.3.15/zh/api/campaign-ext/BarterVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.BirthAndDeath (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [BirthAndDeathOptionsProvider](./campaign-ext/BirthAndDeathOptionsProvider.md) | 🔗 |
| C | [BirthAndDeathSubModule](./campaign-ext/BirthAndDeathSubModule.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationClanNamingStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationClanNamingStageVM.md) | 🔗 |
| C | [CharacterCreationCultureFeatVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureFeatVM.md) | 🔗 |
| C | [CharacterCreationCultureStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureStageVM.md) | 🔗 |
| C | [CharacterCreationCultureVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationCultureVM.md) | 🔗 |
| C | [CharacterCreationGainedAttributeItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainedAttributeItemVM.md) | 🔗 |
| C | [CharacterCreationGainedPropertiesVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainedPropertiesVM.md) | 🔗 |
| C | [CharacterCreationGainedSkillItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainedSkillItemVM.md) | 🔗 |
| C | [CharacterCreationGainGroupItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationGainGroupItemVM.md) | 🔗 |
| C | [CharacterCreationNarrativeStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationNarrativeStageVM.md) | 🔗 |
| C | [CharacterCreationOptionVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationOptionVM.md) | 🔗 |
| C | [CharacterCreationReviewStageItemVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationReviewStageItemVM.md) | 🔗 |
| C | [CharacterCreationReviewStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationReviewStageVM.md) | 🔗 |
| C | [CharacterCreationStageBaseVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationStageBaseVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CharacterCreationOptionsStageVM](/v1.3.15/zh/api/campaign-ext/CharacterCreationOptionsStageVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AttributeBoundSkillItemVM](/v1.3.15/zh/api/campaign-ext/AttributeBoundSkillItemVM.md) | 🔗 |
| C | [CharacterAttributeItemVM](/v1.3.15/zh/api/campaign-ext/CharacterAttributeItemVM.md) | 🔗 |
| C | [CharacterDeveloperHeroItemVM](/v1.3.15/zh/api/campaign-ext/CharacterDeveloperHeroItemVM.md) | 🔗 |
| C | [CharacterDeveloperVM](/v1.3.15/zh/api/campaign-ext/CharacterDeveloperVM.md) | 🔗 |
| C | [FocusAddedByPlayerEvent](/v1.3.15/zh/api/campaign-ext/FocusAddedByPlayerEvent.md) | 🔗 |
| E | [PerkAlternativeType](/v1.3.15/zh/api/campaign-ext/PerkAlternativeType.md) | 🔗 |
| E | [PerkStates](/v1.3.15/zh/api/campaign-ext/PerkStates.md) | 🔗 |
| C | [PerkVM](/v1.3.15/zh/api/campaign-ext/PerkVM.md) | 🔗 |
| C | [SkillVM](/v1.3.15/zh/api/campaign-ext/SkillVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PerkSelectedByPlayerEvent](/v1.3.15/zh/api/campaign-ext/PerkSelectedByPlayerEvent.md) | 🔗 |
| C | [PerkSelectionItemVM](/v1.3.15/zh/api/campaign-ext/PerkSelectionItemVM.md) | 🔗 |
| C | [PerkSelectionToggleEvent](/v1.3.15/zh/api/campaign-ext/PerkSelectionToggleEvent.md) | 🔗 |
| C | [PerkSelectionVM](/v1.3.15/zh/api/campaign-ext/PerkSelectionVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [CardSelectionItemSpriteType](/v1.3.15/zh/api/campaign-ext/CardSelectionItemSpriteType.md) | 🔗 |
| C | [ClanCardSelectionPopupItemPropertyVM](/v1.3.15/zh/api/campaign-ext/ClanCardSelectionPopupItemPropertyVM.md) | 🔗 |
| C | [ClanCardSelectionPopupItemVM](/v1.3.15/zh/api/campaign-ext/ClanCardSelectionPopupItemVM.md) | 🔗 |
| C | [ClanCardSelectionPopupVM](/v1.3.15/zh/api/campaign-ext/ClanCardSelectionPopupVM.md) | 🔗 |
| C | [ClanFinanceExpenseItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceExpenseItemVM.md) | 🔗 |
| C | [ClanFinanceIncomeItemBaseVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceIncomeItemBaseVM.md) | 🔗 |
| C | [ClanLordItemVM](/v1.3.15/zh/api/campaign-ext/ClanLordItemVM.md) | 🔗 |
| C | [ClanLordStatusItemVM](/v1.3.15/zh/api/campaign-ext/ClanLordStatusItemVM.md) | 🔗 |
| C | [ClanManagementVM](/v1.3.15/zh/api/campaign-ext/ClanManagementVM.md) | 🔗 |
| C | [ClanPartyBehaviorSelectorVM](/v1.3.15/zh/api/campaign-ext/ClanPartyBehaviorSelectorVM.md) | 🔗 |
| C | [ClanPartyItemVM](/v1.3.15/zh/api/campaign-ext/ClanPartyItemVM.md) | 🔗 |
| C | [ClanPartyMemberItemVM](/v1.3.15/zh/api/campaign-ext/ClanPartyMemberItemVM.md) | 🔗 |
| E | [ClanPartyType](/v1.3.15/zh/api/campaign-ext/ClanPartyType.md) | 🔗 |
| C | [ClanRoleAssignedThroughClanScreenEvent](/v1.3.15/zh/api/campaign-ext/ClanRoleAssignedThroughClanScreenEvent.md) | 🔗 |
| C | [ClanRoleItemVM](/v1.3.15/zh/api/campaign-ext/ClanRoleItemVM.md) | 🔗 |
| C | [ClanRoleMemberItemVM](/v1.3.15/zh/api/campaign-ext/ClanRoleMemberItemVM.md) | 🔗 |
| C | [ClanSettlementItemVM](/v1.3.15/zh/api/campaign-ext/ClanSettlementItemVM.md) | 🔗 |
| E | [IncomeTypes](/v1.3.15/zh/api/campaign-ext/IncomeTypes.md) | 🔗 |
| E | [LordStatus](/v1.3.15/zh/api/campaign-ext/LordStatus.md) | 🔗 |
| E | [TaxType](/v1.3.15/zh/api/campaign-ext/TaxType.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories (26)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AlleyItemComparerBase](/v1.3.15/zh/api/campaign-ext/AlleyItemComparerBase.md) | 🔗 |
| C | [AlleyItemIncomeComparer](/v1.3.15/zh/api/campaign-ext/AlleyItemIncomeComparer.md) | 🔗 |
| C | [AlleyItemLocationComparer](/v1.3.15/zh/api/campaign-ext/AlleyItemLocationComparer.md) | 🔗 |
| C | [AlleyItemNameComparer](/v1.3.15/zh/api/campaign-ext/AlleyItemNameComparer.md) | 🔗 |
| C | [ClanFiefsSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanFiefsSortControllerVM.md) | 🔗 |
| C | [ClanFiefsVM](/v1.3.15/zh/api/campaign-ext/ClanFiefsVM.md) | 🔗 |
| C | [ClanIncomeSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanIncomeSortControllerVM.md) | 🔗 |
| C | [ClanIncomeVM](/v1.3.15/zh/api/campaign-ext/ClanIncomeVM.md) | 🔗 |
| C | [ClanMembersSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanMembersSortControllerVM.md) | 🔗 |
| C | [ClanMembersVM](/v1.3.15/zh/api/campaign-ext/ClanMembersVM.md) | 🔗 |
| C | [ClanPartiesSortControllerVM](/v1.3.15/zh/api/campaign-ext/ClanPartiesSortControllerVM.md) | 🔗 |
| C | [ClanPartiesVM](/v1.3.15/zh/api/campaign-ext/ClanPartiesVM.md) | 🔗 |
| C | ItemComparerBase | — |
| C | [ItemGovernorComparer](/v1.3.15/zh/api/campaign-ext/ItemGovernorComparer.md) | 🔗 |
| C | [ItemLocationComparer](/v1.3.15/zh/api/campaign-ext/ItemLocationComparer.md) | 🔗 |
| C | ItemNameComparer | — |
| C | [ItemProfitComparer](/v1.3.15/zh/api/campaign-ext/ItemProfitComparer.md) | 🔗 |
| C | ItemShipCountComparer | — |
| C | [ItemSizeComparer](/v1.3.15/zh/api/campaign-ext/ItemSizeComparer.md) | 🔗 |
| C | [SupporterItemComparerBase](/v1.3.15/zh/api/campaign-ext/SupporterItemComparerBase.md) | 🔗 |
| C | [SupporterItemIncomeComparer](/v1.3.15/zh/api/campaign-ext/SupporterItemIncomeComparer.md) | 🔗 |
| C | [SupporterItemNameComparer](/v1.3.15/zh/api/campaign-ext/SupporterItemNameComparer.md) | 🔗 |
| C | [WorkshopItemComparerBase](/v1.3.15/zh/api/campaign-ext/WorkshopItemComparerBase.md) | 🔗 |
| C | [WorkshopItemIncomeComparer](/v1.3.15/zh/api/campaign-ext/WorkshopItemIncomeComparer.md) | 🔗 |
| C | [WorkshopItemLocationComparer](/v1.3.15/zh/api/campaign-ext/WorkshopItemLocationComparer.md) | 🔗 |
| C | [WorkshopItemNameComparer](/v1.3.15/zh/api/campaign-ext/WorkshopItemNameComparer.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance (6)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClanFinanceAlleyItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceAlleyItemVM.md) | 🔗 |
| C | [ClanFinanceCommonAreaItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceCommonAreaItemVM.md) | 🔗 |
| C | [ClanFinanceMercenaryItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceMercenaryItemVM.md) | 🔗 |
| C | [ClanFinanceTownItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceTownItemVM.md) | 🔗 |
| C | [ClanFinanceWorkshopItemVM](/v1.3.15/zh/api/campaign-ext/ClanFinanceWorkshopItemVM.md) | 🔗 |
| C | [WorkshopPercentageSelectorItemVM](/v1.3.15/zh/api/campaign-ext/WorkshopPercentageSelectorItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ClanSupporterGroupVM](/v1.3.15/zh/api/campaign-ext/ClanSupporterGroupVM.md) | 🔗 |
| C | [ClanSupporterItemVM](/v1.3.15/zh/api/campaign-ext/ClanSupporterItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Conversation (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ConversationAggressivePartyItemVM](/v1.3.15/zh/api/campaign-ext/ConversationAggressivePartyItemVM.md) | 🔗 |
| C | [ConversationItemVM](/v1.3.15/zh/api/campaign-ext/ConversationItemVM.md) | 🔗 |
| C | [MissionConversationVM](/v1.3.15/zh/api/campaign-ext/MissionConversationVM.md) | 🔗 |
| C | [PersuasionOptionVM](/v1.3.15/zh/api/campaign-ext/PersuasionOptionVM.md) | 🔗 |
| C | [PersuasionVM](/v1.3.15/zh/api/campaign-ext/PersuasionVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Education (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EducationGainedAttributeItemVM](/v1.3.15/zh/api/campaign-ext/EducationGainedAttributeItemVM.md) | 🔗 |
| C | [EducationGainedPropertiesVM](/v1.3.15/zh/api/campaign-ext/EducationGainedPropertiesVM.md) | 🔗 |
| C | [EducationGainedSkillItemVM](/v1.3.15/zh/api/campaign-ext/EducationGainedSkillItemVM.md) | 🔗 |
| C | [EducationGainGroupItemVM](/v1.3.15/zh/api/campaign-ext/EducationGainGroupItemVM.md) | 🔗 |
| C | [EducationOptionVM](/v1.3.15/zh/api/campaign-ext/EducationOptionVM.md) | 🔗 |
| C | [EducationReviewItemVM](/v1.3.15/zh/api/campaign-ext/EducationReviewItemVM.md) | 🔗 |
| C | [EducationReviewVM](/v1.3.15/zh/api/campaign-ext/EducationReviewVM.md) | 🔗 |
| C | [EducationVM](/v1.3.15/zh/api/campaign-ext/EducationVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [DescriptionType](/v1.3.15/zh/api/campaign-ext/DescriptionType.md) | 🔗 |
| C | [EncyclopediaHomeVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaHomeVM.md) | 🔗 |
| C | [EncyclopediaLinkVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaLinkVM.md) | 🔗 |
| C | [EncyclopediaNavigatorVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaNavigatorVM.md) | 🔗 |
| C | [EncyclopediaPageChangedEvent](/v1.3.15/zh/api/campaign-ext/EncyclopediaPageChangedEvent.md) | 🔗 |
| E | [EncyclopediaPages](/v1.3.15/zh/api/campaign-ext/EncyclopediaPages.md) | 🔗 |
| C | [EncyclopediaSearchResultVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSearchResultVM.md) | 🔗 |
| C | [EncyclopediaSettlementPageStatItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSettlementPageStatItemVM.md) | 🔗 |
| C | [OnEncyclopediaFilterActivatedEvent](/v1.3.15/zh/api/campaign-ext/OnEncyclopediaFilterActivatedEvent.md) | 🔗 |
| C | [OnEncyclopediaListSortedEvent](/v1.3.15/zh/api/campaign-ext/OnEncyclopediaListSortedEvent.md) | 🔗 |
| C | [OnEncyclopediaSearchActivatedEvent](/v1.3.15/zh/api/campaign-ext/OnEncyclopediaSearchActivatedEvent.md) | 🔗 |
| C | [PlayerToggleTrackSettlementFromEncyclopediaEvent](/v1.3.15/zh/api/campaign-ext/PlayerToggleTrackSettlementFromEncyclopediaEvent.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaDwellingVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaDwellingVM.md) | 🔗 |
| C | [EncyclopediaFactionVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFactionVM.md) | 🔗 |
| C | [EncyclopediaFamilyMemberVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFamilyMemberVM.md) | 🔗 |
| C | [EncyclopediaHistoryEventVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaHistoryEventVM.md) | 🔗 |
| C | [EncyclopediaSettlementVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSettlementVM.md) | 🔗 |
| C | [EncyclopediaShipSlotVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaShipSlotVM.md) | 🔗 |
| C | [EncyclopediaShipStatVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaShipStatVM.md) | 🔗 |
| C | [EncyclopediaSkillVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSkillVM.md) | 🔗 |
| C | [EncyclopediaTraitItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaTraitItemVM.md) | 🔗 |
| C | [EncyclopediaTroopTreeNodeVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaTroopTreeNodeVM.md) | 🔗 |
| C | [EncyclopediaUnitEquipmentSetSelectorItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaUnitEquipmentSetSelectorItemVM.md) | 🔗 |
| C | [EncyclopediaUnitVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaUnitVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List (9)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaFilterGroupVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFilterGroupVM.md) | 🔗 |
| C | [EncyclopediaListFilterVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListFilterVM.md) | 🔗 |
| C | [EncyclopediaListItemComparer](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItemComparer.md) | 🔗 |
| C | [EncyclopediaListItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListItemVM.md) | 🔗 |
| C | [EncyclopediaListSelectorItemVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSelectorItemVM.md) | 🔗 |
| C | [EncyclopediaListSelectorVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSelectorVM.md) | 🔗 |
| C | [EncyclopediaListSortControllerVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListSortControllerVM.md) | 🔗 |
| C | [EncyclopediaListVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaListVM.md) | 🔗 |
| C | [ListTypeVM](/v1.3.15/zh/api/campaign-ext/ListTypeVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages (13)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [EncyclopediaClanPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaClanPageVM.md) | 🔗 |
| C | [EncyclopediaConceptPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaConceptPageVM.md) | 🔗 |
| C | [EncyclopediaContentPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaContentPageVM.md) | 🔗 |
| C | [EncyclopediaFactionPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaFactionPageVM.md) | 🔗 |
| C | [EncyclopediaHeroPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaHeroPageVM.md) | 🔗 |
| S | [EncyclopediaPageArgs](/v1.3.15/zh/api/campaign-ext/EncyclopediaPageArgs.md) | 🔗 |
| C | [EncyclopediaPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaPageVM.md) | 🔗 |
| C | [EncyclopediaSettlementPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaSettlementPageVM.md) | 🔗 |
| C | [EncyclopediaShipPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaShipPageVM.md) | 🔗 |
| C | [EncyclopediaUnitPageVM](/v1.3.15/zh/api/campaign-ext/EncyclopediaUnitPageVM.md) | 🔗 |
| C | [EncyclopediaViewModel](/v1.3.15/zh/api/campaign-ext/EncyclopediaViewModel.md) | 🔗 |
| C | [HeroAgeComparer](/v1.3.15/zh/api/campaign-ext/HeroAgeComparer.md) | 🔗 |
| C | [HeroRelationComparer](/v1.3.15/zh/api/campaign-ext/HeroRelationComparer.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GameMenuItemProgressVM](/v1.3.15/zh/api/campaign-ext/GameMenuItemProgressVM.md) | 🔗 |
| C | [GameMenuItemVM](/v1.3.15/zh/api/campaign-ext/GameMenuItemVM.md) | 🔗 |
| C | [GameMenuPlunderItemVM](/v1.3.15/zh/api/campaign-ext/GameMenuPlunderItemVM.md) | 🔗 |
| C | [GameMenuVM](/v1.3.15/zh/api/campaign-ext/GameMenuVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Events (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CrimeValueInspectedInSettlementOverlayEvent](/v1.3.15/zh/api/campaign-ext/CrimeValueInspectedInSettlementOverlayEvent.md) | 🔗 |
| C | [PartyScreenCharacterTalkPermissionEvent](/v1.3.15/zh/api/campaign-ext/PartyScreenCharacterTalkPermissionEvent.md) | 🔗 |
| C | [SettlementOverlayLeaveCharacterPermissionEvent](/v1.3.15/zh/api/campaign-ext/SettlementOverlayLeaveCharacterPermissionEvent.md) | 🔗 |
| C | [SettlementOverlayTalkPermissionEvent](/v1.3.15/zh/api/campaign-ext/SettlementOverlayTalkPermissionEvent.md) | 🔗 |
| C | [SettlementOverylayQuickTalkPermissionEvent](/v1.3.15/zh/api/campaign-ext/SettlementOverylayQuickTalkPermissionEvent.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [ArmyMenuOverlayVM](/v1.3.15/zh/api/campaign-ext/ArmyMenuOverlayVM.md) | 🔗 |
| C | [EncounterMenuOverlayVM](/v1.3.15/zh/api/campaign-ext/EncounterMenuOverlayVM.md) | 🔗 |
| C | [GameMenuOverlay](/v1.3.15/zh/api/campaign-ext/GameMenuOverlay.md) | 🔗 |
| C | [GameMenuOverlayActionVM](/v1.3.15/zh/api/campaign-ext/GameMenuOverlayActionVM.md) | 🔗 |
| C | [GameMenuOverlayFactory](/v1.3.15/zh/api/campaign-ext/GameMenuOverlayFactory.md) | 🔗 |
| C | [GameMenuPartyItemVM](/v1.3.15/zh/api/campaign-ext/GameMenuPartyItemVM.md) | 🔗 |
| I | [IGameMenuOverlayProvider](/v1.3.15/zh/api/campaign-ext/IGameMenuOverlayProvider.md) | 🔗 |
| C | [MenuOverlay](/v1.3.15/zh/api/campaign-ext/MenuOverlay.md) | 🔗 |
| E | [OverlayType](/v1.3.15/zh/api/campaign-ext/OverlayType.md) | 🔗 |
| C | [SettlementMenuOverlayVM](/v1.3.15/zh/api/campaign-ext/SettlementMenuOverlayVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RecruitmentVM](/v1.3.15/zh/api/campaign-ext/RecruitmentVM.md) | 🔗 |
| C | [RecruitVolunteerOwnerVM](/v1.3.15/zh/api/campaign-ext/RecruitVolunteerOwnerVM.md) | 🔗 |
| C | [RecruitVolunteerTroopVM](/v1.3.15/zh/api/campaign-ext/RecruitVolunteerTroopVM.md) | 🔗 |
| C | [RecruitVolunteerVM](/v1.3.15/zh/api/campaign-ext/RecruitVolunteerVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemNameComparer | — |
| C | [ItemPlacementComparer](/v1.3.15/zh/api/campaign-ext/ItemPlacementComparer.md) | 🔗 |
| C | [ItemPrizeComparer](/v1.3.15/zh/api/campaign-ext/ItemPrizeComparer.md) | 🔗 |
| C | [ItemVictoriesComparer](/v1.3.15/zh/api/campaign-ext/ItemVictoriesComparer.md) | 🔗 |
| C | [TournamentLeaderboardEntryItemVM](/v1.3.15/zh/api/campaign-ext/TournamentLeaderboardEntryItemVM.md) | 🔗 |
| C | [TournamentLeaderboardSortControllerVM](/v1.3.15/zh/api/campaign-ext/TournamentLeaderboardSortControllerVM.md) | 🔗 |
| C | [TournamentLeaderboardVM](/v1.3.15/zh/api/campaign-ext/TournamentLeaderboardVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | DescriptionType | — |
| C | [SettlementBuildingProjectVM](/v1.3.15/zh/api/campaign-ext/SettlementBuildingProjectVM.md) | 🔗 |
| C | [SettlementDailyProjectVM](/v1.3.15/zh/api/campaign-ext/SettlementDailyProjectVM.md) | 🔗 |
| C | [SettlementGovernorSelectionItemVM](/v1.3.15/zh/api/campaign-ext/SettlementGovernorSelectionItemVM.md) | 🔗 |
| C | [SettlementGovernorSelectionVM](/v1.3.15/zh/api/campaign-ext/SettlementGovernorSelectionVM.md) | 🔗 |
| C | [SettlementProjectSelectionVM](/v1.3.15/zh/api/campaign-ext/SettlementProjectSelectionVM.md) | 🔗 |
| C | [SettlementProjectVM](/v1.3.15/zh/api/campaign-ext/SettlementProjectVM.md) | 🔗 |
| C | [TownManagementDescriptionItemVM](/v1.3.15/zh/api/campaign-ext/TownManagementDescriptionItemVM.md) | 🔗 |
| C | [TownManagementReserveControlVM](/v1.3.15/zh/api/campaign-ext/TownManagementReserveControlVM.md) | 🔗 |
| C | [TownManagementShopItemVM](/v1.3.15/zh/api/campaign-ext/TownManagementShopItemVM.md) | 🔗 |
| C | [TownManagementVillageItemVM](/v1.3.15/zh/api/campaign-ext/TownManagementVillageItemVM.md) | 🔗 |
| C | [TownManagementVM](/v1.3.15/zh/api/campaign-ext/TownManagementVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [GameMenuTroopSelectionVM](/v1.3.15/zh/api/campaign-ext/GameMenuTroopSelectionVM.md) | 🔗 |
| C | [TroopItemComparer](/v1.3.15/zh/api/campaign-ext/TroopItemComparer.md) | 🔗 |
| C | [TroopSelectionItemVM](/v1.3.15/zh/api/campaign-ext/TroopSelectionItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Input (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [InputKeyItemVM](/v1.3.15/zh/api/campaign-ext/InputKeyItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Inventory (22)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [EquipmentModes](/v1.3.15/zh/api/campaign-ext/EquipmentModes.md) | 🔗 |
| E | [Filters](/v1.3.15/zh/api/campaign-ext/Filters.md) | 🔗 |
| C | [InventoryCharacterSelectorItemVM](/v1.3.15/zh/api/campaign-ext/InventoryCharacterSelectorItemVM.md) | 🔗 |
| C | [InventoryEquipmentTypeChangedEvent](/v1.3.15/zh/api/campaign-ext/InventoryEquipmentTypeChangedEvent.md) | 🔗 |
| C | [InventoryFilterChangedEvent](/v1.3.15/zh/api/campaign-ext/InventoryFilterChangedEvent.md) | 🔗 |
| C | [InventoryItemInspectedEvent](/v1.3.15/zh/api/campaign-ext/InventoryItemInspectedEvent.md) | 🔗 |
| E | [InventoryItemSortOption](/v1.3.15/zh/api/campaign-ext/InventoryItemSortOption.md) | 🔗 |
| E | [InventoryItemSortState](/v1.3.15/zh/api/campaign-ext/InventoryItemSortState.md) | 🔗 |
| C | [InventoryTradeVM](/v1.3.15/zh/api/campaign-ext/InventoryTradeVM.md) | 🔗 |
| C | [ItemComparer](/v1.3.15/zh/api/campaign-ext/ItemComparer.md) | 🔗 |
| C | ItemCostComparer | — |
| C | [ItemFlagVM](/v1.3.15/zh/api/campaign-ext/ItemFlagVM.md) | 🔗 |
| C | [ItemMenuTooltipPropertyVM](/v1.3.15/zh/api/campaign-ext/ItemMenuTooltipPropertyVM.md) | 🔗 |
| C | [ItemMenuVM](/v1.3.15/zh/api/campaign-ext/ItemMenuVM.md) | 🔗 |
| C | ItemNameComparer | — |
| C | [ItemPreviewVM](/v1.3.15/zh/api/campaign-ext/ItemPreviewVM.md) | 🔗 |
| C | [ItemQuantityComparer](/v1.3.15/zh/api/campaign-ext/ItemQuantityComparer.md) | 🔗 |
| C | [ItemTypeComparer](/v1.3.15/zh/api/campaign-ext/ItemTypeComparer.md) | 🔗 |
| E | [ProfitTypes](/v1.3.15/zh/api/campaign-ext/ProfitTypes.md) | 🔗 |
| C | [SPInventorySortControllerVM](/v1.3.15/zh/api/campaign-ext/SPInventorySortControllerVM.md) | 🔗 |
| C | [SPInventoryVM](/v1.3.15/zh/api/campaign-ext/SPInventoryVM.md) | 🔗 |
| C | [SPItemVM](/v1.3.15/zh/api/campaign-ext/SPItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement (5)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [KingdomCategoryVM](/v1.3.15/zh/api/campaign-ext/KingdomCategoryVM.md) | 🔗 |
| C | [KingdomGiftFiefPopupVM](/v1.3.15/zh/api/campaign-ext/KingdomGiftFiefPopupVM.md) | 🔗 |
| C | [KingdomItemVM](/v1.3.15/zh/api/campaign-ext/KingdomItemVM.md) | 🔗 |
| C | [KingdomManagementVM](/v1.3.15/zh/api/campaign-ext/KingdomManagementVM.md) | 🔗 |
| C | [LeaveKingdomPermissionEvent](/v1.3.15/zh/api/campaign-ext/LeaveKingdomPermissionEvent.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemDistanceComparer | — |
| C | ItemNameComparer | — |
| C | [ItemOwnerComparer](/v1.3.15/zh/api/campaign-ext/ItemOwnerComparer.md) | 🔗 |
| C | [ItemPartiesComparer](/v1.3.15/zh/api/campaign-ext/ItemPartiesComparer.md) | 🔗 |
| C | ItemStrengthComparer | — |
| C | [KingdomArmyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomArmyItemVM.md) | 🔗 |
| C | [KingdomArmyPartyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomArmyPartyItemVM.md) | 🔗 |
| C | [KingdomArmySortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomArmySortControllerVM.md) | 🔗 |
| C | [KingdomArmyVM](/v1.3.15/zh/api/campaign-ext/KingdomArmyVM.md) | 🔗 |
| C | [KingdomSettlementVillageItemVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementVillageItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans (10)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | [ItemFiefsComparer](/v1.3.15/zh/api/campaign-ext/ItemFiefsComparer.md) | 🔗 |
| C | [ItemInfluenceComparer](/v1.3.15/zh/api/campaign-ext/ItemInfluenceComparer.md) | 🔗 |
| C | [ItemMembersComparer](/v1.3.15/zh/api/campaign-ext/ItemMembersComparer.md) | 🔗 |
| C | ItemNameComparer | — |
| C | ItemTypeComparer | — |
| C | [KingdomClanFiefItemVM](/v1.3.15/zh/api/campaign-ext/KingdomClanFiefItemVM.md) | 🔗 |
| C | [KingdomClanItemVM](/v1.3.15/zh/api/campaign-ext/KingdomClanItemVM.md) | 🔗 |
| C | [KingdomClanSortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomClanSortControllerVM.md) | 🔗 |
| C | [KingdomClanVM](/v1.3.15/zh/api/campaign-ext/KingdomClanVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [DecisionOptionVM](/v1.3.15/zh/api/campaign-ext/DecisionOptionVM.md) | 🔗 |
| C | [DecisionSupporterVM](/v1.3.15/zh/api/campaign-ext/DecisionSupporterVM.md) | 🔗 |
| C | [KingdomDecisionsVM](/v1.3.15/zh/api/campaign-ext/KingdomDecisionsVM.md) | 🔗 |
| C | [PlayerSelectedAKingdomDecisionOptionEvent](/v1.3.15/zh/api/campaign-ext/PlayerSelectedAKingdomDecisionOptionEvent.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptingCallToWarAgreementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/AcceptingCallToWarAgreementDecisionItemVM.md) | 🔗 |
| C | [DecisionItemBaseVM](/v1.3.15/zh/api/campaign-ext/DecisionItemBaseVM.md) | 🔗 |
| C | [DeclareWarDecisionItemVM](/v1.3.15/zh/api/campaign-ext/DeclareWarDecisionItemVM.md) | 🔗 |
| C | [ExpelClanDecisionItemVM](/v1.3.15/zh/api/campaign-ext/ExpelClanDecisionItemVM.md) | 🔗 |
| C | [KingdomPolicyDecisionItemVM](/v1.3.15/zh/api/campaign-ext/KingdomPolicyDecisionItemVM.md) | 🔗 |
| C | [KingSelectionDecisionItemVM](/v1.3.15/zh/api/campaign-ext/KingSelectionDecisionItemVM.md) | 🔗 |
| C | [MakePeaceDecisionItemVM](/v1.3.15/zh/api/campaign-ext/MakePeaceDecisionItemVM.md) | 🔗 |
| C | [PolicyDecisionItemVM](/v1.3.15/zh/api/campaign-ext/PolicyDecisionItemVM.md) | 🔗 |
| C | [ProposeCallToWarAgreementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarAgreementDecisionItemVM.md) | 🔗 |
| C | [SettlementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/SettlementDecisionItemVM.md) | 🔗 |
| C | [StartAllianceDecisionItemVM](/v1.3.15/zh/api/campaign-ext/StartAllianceDecisionItemVM.md) | 🔗 |
| C | [TradeAgreementDecisionItemVM](/v1.3.15/zh/api/campaign-ext/TradeAgreementDecisionItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | [ItemScoreComparer](/v1.3.15/zh/api/campaign-ext/ItemScoreComparer.md) | 🔗 |
| C | [KingdomDiplomacyFactionItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyFactionItemVM.md) | 🔗 |
| C | [KingdomDiplomacyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyItemVM.md) | 🔗 |
| C | [KingdomDiplomacyProposalActionItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyProposalActionItemVM.md) | 🔗 |
| C | [KingdomDiplomacyVM](/v1.3.15/zh/api/campaign-ext/KingdomDiplomacyVM.md) | 🔗 |
| C | [KingdomTruceItemVM](/v1.3.15/zh/api/campaign-ext/KingdomTruceItemVM.md) | 🔗 |
| C | [KingdomWarComparableStatVM](/v1.3.15/zh/api/campaign-ext/KingdomWarComparableStatVM.md) | 🔗 |
| C | [KingdomWarItemVM](/v1.3.15/zh/api/campaign-ext/KingdomWarItemVM.md) | 🔗 |
| C | [KingdomWarLogItemVM](/v1.3.15/zh/api/campaign-ext/KingdomWarLogItemVM.md) | 🔗 |
| C | [KingdomWarSortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomWarSortControllerVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Policies (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [KingdomPoliciesVM](/v1.3.15/zh/api/campaign-ext/KingdomPoliciesVM.md) | 🔗 |
| C | [KingdomPolicyItemVM](/v1.3.15/zh/api/campaign-ext/KingdomPolicyItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements (12)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemClanComparer | — |
| C | ItemComparerBase | — |
| C | [ItemFoodComparer](/v1.3.15/zh/api/campaign-ext/ItemFoodComparer.md) | 🔗 |
| C | [ItemGarrisonComparer](/v1.3.15/zh/api/campaign-ext/ItemGarrisonComparer.md) | 🔗 |
| C | ItemNameComparer | — |
| C | ItemOwnerComparer | — |
| C | [ItemProsperityComparer](/v1.3.15/zh/api/campaign-ext/ItemProsperityComparer.md) | 🔗 |
| C | ItemTypeComparer | — |
| C | [ItemVillagesComparer](/v1.3.15/zh/api/campaign-ext/ItemVillagesComparer.md) | 🔗 |
| C | [KingdomSettlementItemVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementItemVM.md) | 🔗 |
| C | [KingdomSettlementSortControllerVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementSortControllerVM.md) | 🔗 |
| C | [KingdomSettlementVM](/v1.3.15/zh/api/campaign-ext/KingdomSettlementVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapNotificationVM](/v1.3.15/zh/api/campaign-ext/MapNotificationVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [HeirSelectionPopupHeroVM](/v1.3.15/zh/api/campaign-ext/HeirSelectionPopupHeroVM.md) | 🔗 |
| C | [HeirSelectionPopupVM](/v1.3.15/zh/api/campaign-ext/HeirSelectionPopupVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| S | [MapBarShortcuts](/v1.3.15/zh/api/campaign-ext/MapBarShortcuts.md) | 🔗 |
| C | [MapBarVM](/v1.3.15/zh/api/campaign-ext/MapBarVM.md) | 🔗 |
| C | [MapInfoItemVM](/v1.3.15/zh/api/campaign-ext/MapInfoItemVM.md) | 🔗 |
| C | [MapInfoVM](/v1.3.15/zh/api/campaign-ext/MapInfoVM.md) | 🔗 |
| C | [MapNavigationItemVM](/v1.3.15/zh/api/campaign-ext/MapNavigationItemVM.md) | 🔗 |
| C | [MapNavigationVM](/v1.3.15/zh/api/campaign-ext/MapNavigationVM.md) | 🔗 |
| C | [MapTimeControlVM](/v1.3.15/zh/api/campaign-ext/MapTimeControlVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapConversation (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapConversationVM](/v1.3.15/zh/api/campaign-ext/MapConversationVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes (29)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [AcceptCallToWarOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AcceptCallToWarOfferNotificationItemVM.md) | 🔗 |
| C | [AlleyLeaderDiedMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AlleyLeaderDiedMapNotificationItemVM.md) | 🔗 |
| C | [AlleyUnderAttackMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AlleyUnderAttackMapNotificationItemVM.md) | 🔗 |
| C | [AllianceOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/AllianceOfferNotificationItemVM.md) | 🔗 |
| C | [ArmyCreationNotificationItemVM](/v1.3.15/zh/api/campaign-ext/ArmyCreationNotificationItemVM.md) | 🔗 |
| C | [ArmyDispersionItemVM](/v1.3.15/zh/api/campaign-ext/ArmyDispersionItemVM.md) | 🔗 |
| C | [DeathNotificationItemVM](/v1.3.15/zh/api/campaign-ext/DeathNotificationItemVM.md) | 🔗 |
| C | [EducationNotificationItemVM](/v1.3.15/zh/api/campaign-ext/EducationNotificationItemVM.md) | 🔗 |
| C | [HeirComeOfAgeNotificationItemVM](/v1.3.15/zh/api/campaign-ext/HeirComeOfAgeNotificationItemVM.md) | 🔗 |
| C | [KingdomDestroyedNotificationItemVM](/v1.3.15/zh/api/campaign-ext/KingdomDestroyedNotificationItemVM.md) | 🔗 |
| C | [KingdomVoteNotificationItemVM](/v1.3.15/zh/api/campaign-ext/KingdomVoteNotificationItemVM.md) | 🔗 |
| C | [MapNotificationItemBaseVM](/v1.3.15/zh/api/campaign-ext/MapNotificationItemBaseVM.md) | 🔗 |
| C | [MarriageNotificationItemVM](/v1.3.15/zh/api/campaign-ext/MarriageNotificationItemVM.md) | 🔗 |
| C | [MarriageOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferNotificationItemVM.md) | 🔗 |
| C | [MercenaryOfferMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/MercenaryOfferMapNotificationItemVM.md) | 🔗 |
| C | [NewBornNotificationItemVM](/v1.3.15/zh/api/campaign-ext/NewBornNotificationItemVM.md) | 🔗 |
| C | [PartyLeaderChangeNotificationVM](/v1.3.15/zh/api/campaign-ext/PartyLeaderChangeNotificationVM.md) | 🔗 |
| C | [PeaceNotificationItemVM](/v1.3.15/zh/api/campaign-ext/PeaceNotificationItemVM.md) | 🔗 |
| C | [PeaceOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/PeaceOfferNotificationItemVM.md) | 🔗 |
| C | [ProposeCallToWarOfferNotificationItemVM](/v1.3.15/zh/api/campaign-ext/ProposeCallToWarOfferNotificationItemVM.md) | 🔗 |
| C | [QuestNotificationItemVM](/v1.3.15/zh/api/campaign-ext/QuestNotificationItemVM.md) | 🔗 |
| C | [RansomNotificationItemVM](/v1.3.15/zh/api/campaign-ext/RansomNotificationItemVM.md) | 🔗 |
| C | [RebellionNotificationItemVM](/v1.3.15/zh/api/campaign-ext/RebellionNotificationItemVM.md) | 🔗 |
| C | [SettlementOwnerChangedNotificationItemVM](/v1.3.15/zh/api/campaign-ext/SettlementOwnerChangedNotificationItemVM.md) | 🔗 |
| C | [SettlementUnderSiegeMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/SettlementUnderSiegeMapNotificationItemVM.md) | 🔗 |
| C | [TraitChangedNotificationItemVM](/v1.3.15/zh/api/campaign-ext/TraitChangedNotificationItemVM.md) | 🔗 |
| C | [TributeFinishedMapNotificationVM](/v1.3.15/zh/api/campaign-ext/TributeFinishedMapNotificationVM.md) | 🔗 |
| C | [VassalOfferMapNotificationItemVM](/v1.3.15/zh/api/campaign-ext/VassalOfferMapNotificationItemVM.md) | 🔗 |
| C | [WarNotificationItemVM](/v1.3.15/zh/api/campaign-ext/WarNotificationItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup (3)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MarriageOfferPopupHeroAttributeVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferPopupHeroAttributeVM.md) | 🔗 |
| C | [MarriageOfferPopupHeroVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferPopupHeroVM.md) | 🔗 |
| C | [MarriageOfferPopupVM](/v1.3.15/zh/api/campaign-ext/MarriageOfferPopupVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapParleyAnimationVM](/v1.3.15/zh/api/campaign-ext/MapParleyAnimationVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker (1)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [MapTrackerItemVM](./campaign-ext/MapTrackerItemVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Party (11)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyCharacterVM](/v1.3.15/zh/api/campaign-ext/PartyCharacterVM.md) | 🔗 |
| C | [PartyCompositionVM](/v1.3.15/zh/api/campaign-ext/PartyCompositionVM.md) | 🔗 |
| C | [PartySortControllerVM](/v1.3.15/zh/api/campaign-ext/PartySortControllerVM.md) | 🔗 |
| C | [PartyTradeVM](/v1.3.15/zh/api/campaign-ext/PartyTradeVM.md) | 🔗 |
| C | [PartyVM](/v1.3.15/zh/api/campaign-ext/PartyVM.md) | 🔗 |
| C | [PlayerMoveTroopEvent](/v1.3.15/zh/api/campaign-ext/PlayerMoveTroopEvent.md) | 🔗 |
| C | [PlayerRequestUpgradeTroopEvent](/v1.3.15/zh/api/campaign-ext/PlayerRequestUpgradeTroopEvent.md) | 🔗 |
| C | [PlayerToggledUpgradePopupEvent](/v1.3.15/zh/api/campaign-ext/PlayerToggledUpgradePopupEvent.md) | 🔗 |
| C | [TroopSortSelectorItemVM](/v1.3.15/zh/api/campaign-ext/TroopSortSelectorItemVM.md) | 🔗 |
| C | [UpgradeRequirementsVM](/v1.3.15/zh/api/campaign-ext/UpgradeRequirementsVM.md) | 🔗 |
| C | [UpgradeTargetVM](/v1.3.15/zh/api/campaign-ext/UpgradeTargetVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp (4)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [PartyRecruitTroopVM](/v1.3.15/zh/api/campaign-ext/PartyRecruitTroopVM.md) | 🔗 |
| C | [PartyTroopManagerItemVM](/v1.3.15/zh/api/campaign-ext/PartyTroopManagerItemVM.md) | 🔗 |
| C | [PartyTroopManagerVM](/v1.3.15/zh/api/campaign-ext/PartyTroopManagerVM.md) | 🔗 |
| C | [PartyUpgradeTroopVM](/v1.3.15/zh/api/campaign-ext/PartyUpgradeTroopVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.Quests (8)

| | 名称 Name | 文档 Doc |
|---|---|---|
| E | [QuestCompletionType](/v1.3.15/zh/api/campaign-ext/QuestCompletionType.md) | 🔗 |
| C | [QuestItemSortControllerVM](/v1.3.15/zh/api/campaign-ext/QuestItemSortControllerVM.md) | 🔗 |
| E | [QuestItemSortOption](/v1.3.15/zh/api/campaign-ext/QuestItemSortOption.md) | 🔗 |
| C | [QuestItemVM](/v1.3.15/zh/api/campaign-ext/QuestItemVM.md) | 🔗 |
| C | [QuestMarkerVM](/v1.3.15/zh/api/campaign-ext/QuestMarkerVM.md) | 🔗 |
| C | [QuestStageTaskVM](/v1.3.15/zh/api/campaign-ext/QuestStageTaskVM.md) | 🔗 |
| C | [QuestStageVM](/v1.3.15/zh/api/campaign-ext/QuestStageVM.md) | 🔗 |
| C | [QuestsVM](/v1.3.15/zh/api/campaign-ext/QuestsVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingAvailableHeroItemVM](/v1.3.15/zh/api/campaign-ext/CraftingAvailableHeroItemVM.md) | 🔗 |
| C | [CraftingHeroPopupVM](/v1.3.15/zh/api/campaign-ext/CraftingHeroPopupVM.md) | 🔗 |
| C | [CraftingListPropertyItem](/v1.3.15/zh/api/campaign-ext/CraftingListPropertyItem.md) | 🔗 |
| C | [CraftingPerkVM](/v1.3.15/zh/api/campaign-ext/CraftingPerkVM.md) | 🔗 |
| C | [CraftingResourceItemVM](/v1.3.15/zh/api/campaign-ext/CraftingResourceItemVM.md) | 🔗 |
| C | [CraftingSecondaryUsageItemVM](/v1.3.15/zh/api/campaign-ext/CraftingSecondaryUsageItemVM.md) | 🔗 |
| C | [CraftingVM](/v1.3.15/zh/api/campaign-ext/CraftingVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Refinement (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [RefinementActionItemVM](/v1.3.15/zh/api/campaign-ext/RefinementActionItemVM.md) | 🔗 |
| C | [RefinementVM](/v1.3.15/zh/api/campaign-ext/RefinementVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting (7)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | ItemComparerBase | — |
| C | ItemNameComparer | — |
| C | ItemTypeComparer | — |
| C | [ItemYieldComparer](/v1.3.15/zh/api/campaign-ext/ItemYieldComparer.md) | 🔗 |
| C | [SmeltingItemVM](/v1.3.15/zh/api/campaign-ext/SmeltingItemVM.md) | 🔗 |
| C | [SmeltingSortControllerVM](/v1.3.15/zh/api/campaign-ext/SmeltingSortControllerVM.md) | 🔗 |
| C | [SmeltingVM](/v1.3.15/zh/api/campaign-ext/SmeltingVM.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign (20)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingHistoryVM](/v1.3.15/zh/api/campaign-ext/CraftingHistoryVM.md) | 🔗 |
| C | [CraftingItemFlagVM](/v1.3.15/zh/api/campaign-ext/CraftingItemFlagVM.md) | 🔗 |
| C | [CraftingOrderSelectionOpenedEvent](/v1.3.15/zh/api/campaign-ext/CraftingOrderSelectionOpenedEvent.md) | 🔗 |
| C | [CraftingOrderTabOpenedEvent](/v1.3.15/zh/api/campaign-ext/CraftingOrderTabOpenedEvent.md) | 🔗 |
| C | [CraftingPieceListVM](/v1.3.15/zh/api/campaign-ext/CraftingPieceListVM.md) | 🔗 |
| E | [CraftingPieceTierFilter](/v1.3.15/zh/api/campaign-ext/CraftingPieceTierFilter.md) | 🔗 |
| C | [CraftingPieceVM](/v1.3.15/zh/api/campaign-ext/CraftingPieceVM.md) | 🔗 |
| C | [CraftingWeaponClassSelectionOpenedEvent](/v1.3.15/zh/api/campaign-ext/CraftingWeaponClassSelectionOpenedEvent.md) | 🔗 |
| C | [CraftingWeaponResultPopupToggledEvent](/v1.3.15/zh/api/campaign-ext/CraftingWeaponResultPopupToggledEvent.md) | 🔗 |
| C | [PieceTierComparer](/v1.3.15/zh/api/campaign-ext/PieceTierComparer.md) | 🔗 |
| C | [TemplateComparer](/v1.3.15/zh/api/campaign-ext/TemplateComparer.md) | 🔗 |
| C | [TierFilterTypeVM](/v1.3.15/zh/api/campaign-ext/TierFilterTypeVM.md) | 🔗 |
| C | [WeaponAttributeVM](/v1.3.15/zh/api/campaign-ext/WeaponAttributeVM.md) | 🔗 |
| C | [WeaponClassSelectionPopupVM](/v1.3.15/zh/api/campaign-ext/WeaponClassSelectionPopupVM.md) | 🔗 |
| C | [WeaponClassVM](/v1.3.15/zh/api/campaign-ext/WeaponClassVM.md) | 🔗 |
| C | [WeaponDesignResultPopupVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignResultPopupVM.md) | 🔗 |
| C | [WeaponDesignResultPropertyItemVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignResultPropertyItemVM.md) | 🔗 |
| C | [WeaponDesignSelectorVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignSelectorVM.md) | 🔗 |
| C | [WeaponDesignVM](/v1.3.15/zh/api/campaign-ext/WeaponDesignVM.md) | 🔗 |
| C | [WeaponPropertyComparer](/v1.3.15/zh/api/campaign-ext/WeaponPropertyComparer.md) | 🔗 |

## TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order (2)

| | 名称 Name | 文档 Doc |
|---|---|---|
| C | [CraftingOrderItemVM](/v1.3.15/zh/api/campaign-ext/CraftingOrderItemVM.md) | 🔗 |
| C | [CraftingOrderPopupVM](/v1.3.15/zh/api/campaign-ext/CraftingOrderPopupVM.md) | 🔗 |
