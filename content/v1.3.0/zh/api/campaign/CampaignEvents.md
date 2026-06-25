---
title: "CampaignEvents"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignEvents`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEvents.cs`

## 概述

`CampaignEvents` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnPlayerBodyPropertiesChangedEvent` | `public static IMbEvent OnPlayerBodyPropertiesChangedEvent { get; }` |
| `BarterablesRequested` | `public static IMbEvent<BarterData> BarterablesRequested { get; }` |
| `HeroLevelledUp` | `public static IMbEvent<Hero, bool> HeroLevelledUp { get; }` |
| `HeroGainedSkill` | `public static IMbEvent<Hero, SkillObject, int, bool> HeroGainedSkill { get; }` |
| `OnCharacterCreationIsOverEvent` | `public static IMbEvent OnCharacterCreationIsOverEvent { get; }` |
| `HeroCreated` | `public static IMbEvent<Hero, bool> HeroCreated { get; }` |
| `HeroOccupationChangedEvent` | `public static IMbEvent<Hero, Occupation> HeroOccupationChangedEvent { get; }` |
| `HeroWounded` | `public static IMbEvent<Hero> HeroWounded { get; }` |
| `OnBarterAcceptedEvent` | `public static IMbEvent<Hero, Hero, List<Barterable>> OnBarterAcceptedEvent { get; }` |
| `OnBarterCanceledEvent` | `public static IMbEvent<Hero, Hero, List<Barterable>> OnBarterCanceledEvent { get; }` |
| `HeroRelationChanged` | `public static IMbEvent<Hero, Hero, int, bool, ChangeRelationAction.ChangeRelationDetail, Hero, Hero> HeroRelationChanged { get; }` |
| `QuestLogAddedEvent` | `public static IMbEvent<QuestBase, bool> QuestLogAddedEvent { get; }` |
| `IssueLogAddedEvent` | `public static IMbEvent<IssueBase, bool> IssueLogAddedEvent { get; }` |
| `ClanTierIncrease` | `public static IMbEvent<Clan, bool> ClanTierIncrease { get; }` |
| `OnClanChangedKingdom` | `public static IMbEvent<Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool> OnClanChangedKingdom { get; }` |
| `OnClanDefectedEvent` | `public static IMbEvent<Clan, Kingdom, Kingdom> OnClanDefectedEvent { get; }` |
| `OnClanCreatedEvent` | `public static IMbEvent<Clan, bool> OnClanCreatedEvent { get; }` |
| `OnHeroJoinedPartyEvent` | `public static IMbEvent<Hero, MobileParty> OnHeroJoinedPartyEvent { get; }` |
| `HeroOrPa` | `public static IMbEvent<ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ValueTuple<int, string>, bool> HeroOrPa { get; }` |
| `HeroOrPartyGav` | `public static IMbEvent<ValueTuple<Hero, PartyBase>, ValueTuple<Hero, PartyBase>, ItemRosterElement, bool> HeroOrPartyGav { get; }` |
| `BanditPartyRecruited` | `public static IMbEvent<MobileParty> BanditPartyRecruited { get; }` |
| `KingdomDecisionAdded` | `public static IMbEvent<KingdomDecision, bool> KingdomDecisionAdded { get; }` |
| `KingdomDecisionCancelled` | `public static IMbEvent<KingdomDecision, bool> KingdomDecisionCancelled { get; }` |
| `KingdomDecisionConcluded` | `public static IMbEvent<KingdomDecision, DecisionOutcome, bool> KingdomDecisionConcluded { get; }` |
| `PartyAttachedAnotherParty` | `public static IMbEvent<MobileParty> PartyAttachedAnotherParty { get; }` |
| `NearbyPartyAddedToPlayerMapEvent` | `public static IMbEvent<MobileParty> NearbyPartyAddedToPlayerMapEvent { get; }` |
| `ArmyCreated` | `public static IMbEvent<Army> ArmyCreated { get; }` |
| `ArmyDispersed` | `public static IMbEvent<Army, Army.ArmyDispersionReason, bool> ArmyDispersed { get; }` |
| `ArmyGathered` | `public static IMbEvent<Army, IMapPoint> ArmyGathered { get; }` |
| `PerkOpenedEvent` | `public static IMbEvent<Hero, PerkObject> PerkOpenedEvent { get; }` |
| `PerkResetEvent` | `public static IMbEvent<Hero, PerkObject> PerkResetEvent { get; }` |
| `PlayerTraitChangedEvent` | `public static IMbEvent<TraitObject, int> PlayerTraitChangedEvent { get; }` |
| `VillageStateChanged` | `public static IMbEvent<Village, Village.VillageStates, Village.VillageStates, MobileParty> VillageStateChanged { get; }` |
| `SettlementEntered` | `public static IMbEvent<MobileParty, Settlement, Hero> SettlementEntered { get; }` |
| `AfterSettlementEntered` | `public static IMbEvent<MobileParty, Settlement, Hero> AfterSettlementEntered { get; }` |
| `BeforeSettlementEnteredEvent` | `public static IMbEvent<MobileParty, Settlement, Hero> BeforeSettlementEnteredEvent { get; }` |
| `MercenaryTroopChangedInTown` | `public static IMbEvent<Town, CharacterObject, CharacterObject> MercenaryTroopChangedInTown { get; }` |
| `MercenaryNumberChangedInTown` | `public static IMbEvent<Town, int, int> MercenaryNumberChangedInTown { get; }` |
| `AlleyOwnerChanged` | `public static IMbEvent<Alley, Hero, Hero> AlleyOwnerChanged { get; }` |
| `AlleyOccupiedByPlayer` | `public static IMbEvent<Alley, TroopRoster> AlleyOccupiedByPlayer { get; }` |
| `AlleyClearedByPlayer` | `public static IMbEvent<Alley> AlleyClearedByPlayer { get; }` |
| `RomanticStateChanged` | `public static IMbEvent<Hero, Hero, Romance.RomanceLevelEnum> RomanticStateChanged { get; }` |
| `BeforeHeroesMarried` | `public static IMbEvent<Hero, Hero, bool> BeforeHeroesMarried { get; }` |
| `PlayerEliminatedFromTournament` | `public static IMbEvent<int, Town> PlayerEliminatedFromTournament { get; }` |
| `PlayerStartedTournamentMatch` | `public static IMbEvent<Town> PlayerStartedTournamentMatch { get; }` |
| `TournamentStarted` | `public static IMbEvent<Town> TournamentStarted { get; }` |
| `WarDeclared` | `public static IMbEvent<IFaction, IFaction, DeclareWarAction.DeclareWarDetail> WarDeclared { get; }` |
| `TournamentFinished` | `public static IMbEvent<CharacterObject, MBReadOnlyList<CharacterObject>, Town, ItemObject> TournamentFinished { get; }` |
| `TournamentCancelled` | `public static IMbEvent<Town> TournamentCancelled { get; }` |
| `BattleStarted` | `public static IMbEvent<PartyBase, PartyBase, object, bool> BattleStarted { get; }` |
| `RebellionFinished` | `public static IMbEvent<Settlement, Clan> RebellionFinished { get; }` |
| `TownRebelliosStateChanged` | `public static IMbEvent<Town, bool> TownRebelliosStateChanged { get; }` |
| `RebelliousClanDisbandedAtSettlement` | `public static IMbEvent<Settlement, Clan> RebelliousClanDisbandedAtSettlement { get; }` |
| `ItemsLooted` | `public static IMbEvent<MobileParty, ItemRoster> ItemsLooted { get; }` |
| `MobilePartyDestroyed` | `public static IMbEvent<MobileParty, PartyBase> MobilePartyDestroyed { get; }` |
| `MobilePartyCreated` | `public static IMbEvent<MobileParty> MobilePartyCreated { get; }` |
| `MapInteractableCreated` | `public static IMbEvent<IInteractablePoint> MapInteractableCreated { get; }` |
| `MapInteractableDestroyed` | `public static IMbEvent<IInteractablePoint> MapInteractableDestroyed { get; }` |
| `MobilePartyQuestStatusChanged` | `public static IMbEvent<MobileParty, bool> MobilePartyQuestStatusChanged { get; }` |
| `HeroKilledEvent` | `public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> HeroKilledEvent { get; }` |
| `BeforeHeroKilledEvent` | `public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> BeforeHeroKilledEvent { get; }` |
| `ChildEducationCompletedEvent` | `public static IMbEvent<Hero, int> ChildEducationCompletedEvent { get; }` |
| `HeroComesOfAgeEvent` | `public static IMbEvent<Hero> HeroComesOfAgeEvent { get; }` |
| `HeroGrowsOutOfInfancyEvent` | `public static IMbEvent<Hero> HeroGrowsOutOfInfancyEvent { get; }` |
| `HeroReachesTeenAgeEvent` | `public static IMbEvent<Hero> HeroReachesTeenAgeEvent { get; }` |
| `CharacterDefeated` | `public static IMbEvent<Hero, Hero> CharacterDefeated { get; }` |
| `RulingClanChanged` | `public static IMbEvent<Kingdom, Clan> RulingClanChanged { get; }` |
| `HeroPrisonerTaken` | `public static IMbEvent<PartyBase, Hero> HeroPrisonerTaken { get; }` |
| `HeroPrisonerReleased` | `public static IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool> HeroPrisonerReleased { get; }` |
| `CharacterBecameFugitiveEvent` | `public static IMbEvent<Hero, bool> CharacterBecameFugitiveEvent { get; }` |
| `OnPlayerMetHeroEvent` | `public static IMbEvent<Hero> OnPlayerMetHeroEvent { get; }` |
| `OnPlayerLearnsAboutHeroEvent` | `public static IMbEvent<Hero> OnPlayerLearnsAboutHeroEvent { get; }` |
| `RenownGained` | `public static IMbEvent<Hero, int, bool> RenownGained { get; }` |
| `CrimeRatingChanged` | `public static IMbEvent<IFaction, float> CrimeRatingChanged { get; }` |
| `NewCompanionAdded` | `public static IMbEvent<Hero> NewCompanionAdded { get; }` |
| `AfterMissionStarted` | `public static IMbEvent<IMission> AfterMissionStarted { get; }` |
| `GameMenuOpened` | `public static IMbEvent<MenuCallbackArgs> GameMenuOpened { get; }` |
| `AfterGameMenuInitializedEvent` | `public static IMbEvent<MenuCallbackArgs> AfterGameMenuInitializedEvent { get; }` |
| `BeforeGameMenuOpenedEvent` | `public static IMbEvent<MenuCallbackArgs> BeforeGameMenuOpenedEvent { get; }` |
| `MakePeace` | `public static IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail> MakePeace { get; }` |
| `KingdomDestroyedEvent` | `public static IMbEvent<Kingdom> KingdomDestroyedEvent { get; }` |
| `CanKingdomBeDiscontinuedEvent` | `public static ReferenceIMBEvent<Kingdom, bool> CanKingdomBeDiscontinuedEvent { get; }` |
| `KingdomCreatedEvent` | `public static IMbEvent<Kingdom> KingdomCreatedEvent { get; }` |
| `VillageBecomeNormal` | `public static IMbEvent<Village> VillageBecomeNormal { get; }` |
| `VillageBeingRaided` | `public static IMbEvent<Village> VillageBeingRaided { get; }` |
| `VillageLooted` | `public static IMbEvent<Village> VillageLooted { get; }` |
| `CompanionRemoved` | `public static IMbEvent<Hero, RemoveCompanionAction.RemoveCompanionDetail> CompanionRemoved { get; }` |
| `OnAgentJoinedConversationEvent` | `public static IMbEvent<IAgent> OnAgentJoinedConversationEvent { get; }` |
| `ConversationEnded` | `public static IMbEvent<IEnumerable<CharacterObject>> ConversationEnded { get; }` |
| `MapEventEnded` | `public static IMbEvent<MapEvent> MapEventEnded { get; }` |
| `MapEventStarted` | `public static IMbEvent<MapEvent, PartyBase, PartyBase> MapEventStarted { get; }` |
| `PrisonersChangeInSettlement` | `public static IMbEvent<Settlement, FlattenedTroopRoster, Hero, bool> PrisonersChangeInSettlement { get; }` |
| `OnPlayerBoardGameOverEvent` | `public static IMbEvent<Hero, BoardGameHelper.BoardGameState> OnPlayerBoardGameOverEvent { get; }` |
| `OnRansomOfferedToPlayerEvent` | `public static IMbEvent<Hero> OnRansomOfferedToPlayerEvent { get; }` |
| `OnRansomOfferCancelledEvent` | `public static IMbEvent<Hero> OnRansomOfferCancelledEvent { get; }` |
| `OnPeaceOfferedToPlayerEvent` | `public static IMbEvent<IFaction, int> OnPeaceOfferedToPlayerEvent { get; }` |
| `OnTradeAgreementSignedEvent` | `public static IMbEvent<Kingdom, Kingdom> OnTradeAgreementSignedEvent { get; }` |
| `OnPeaceOfferResolvedEvent` | `public static IMbEvent<IFaction> OnPeaceOfferResolvedEvent { get; }` |
| `OnMarriageOfferedToPlayerEvent` | `public static IMbEvent<Hero, Hero> OnMarriageOfferedToPlayerEvent { get; }` |
| `OnMarriageOfferCanceledEvent` | `public static IMbEvent<Hero, Hero> OnMarriageOfferCanceledEvent { get; }` |
| `OnVassalOrMercenaryServiceOfferedToPlayerEvent` | `public static IMbEvent<Kingdom> OnVassalOrMercenaryServiceOfferedToPlayerEvent { get; }` |
| `OnVassalOrMercenaryServiceOfferCanceledEvent` | `public static IMbEvent<Kingdom> OnVassalOrMercenaryServiceOfferCanceledEvent { get; }` |
| `OnMercenaryServiceStartedEv` | `public static IMbEvent<Clan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails> OnMercenaryServiceStartedEv { get; }` |
| `OnMercenaryServiceEndedEvent` | `public static IMbEvent<Clan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails> OnMercenaryServiceEndedEvent { get; }` |
| `OnMissionStartedEvent` | `public static IMbEvent<IMission> OnMissionStartedEvent { get; }` |
| `BeforeMissionOpenedEvent` | `public static IMbEvent BeforeMissionOpenedEvent { get; }` |
| `OnPartyRemovedEvent` | `public static IMbEvent<PartyBase> OnPartyRemovedEvent { get; }` |
| `OnPartySizeChangedEvent` | `public static IMbEvent<PartyBase> OnPartySizeChangedEvent { get; }` |
| `?` | `public static IMbEvent<Settlement, bool, Hero, Hero, Hero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail> { get; }` |
| `OnGovernorChangedEvent` | `public static IMbEvent<Town, Hero, Hero> OnGovernorChangedEvent { get; }` |
| `OnSettlementLeftEvent` | `public static IMbEvent<MobileParty, Settlement> OnSettlementLeftEvent { get; }` |
| `WeeklyTickEvent` | `public static IMbEvent WeeklyTickEvent { get; }` |
| `DailyTickEvent` | `public static IMbEvent DailyTickEvent { get; }` |
| `DailyTickPartyEvent` | `public static IMbEvent<MobileParty> DailyTickPartyEvent { get; }` |
| `DailyTickTownEvent` | `public static IMbEvent<Town> DailyTickTownEvent { get; }` |
| `DailyTickSettlementEvent` | `public static IMbEvent<Settlement> DailyTickSettlementEvent { get; }` |
| `DailyTickHeroEvent` | `public static IMbEvent<Hero> DailyTickHeroEvent { get; }` |
| `DailyTickClanEvent` | `public static IMbEvent<Clan> DailyTickClanEvent { get; }` |
| `CollectAvailableTutorialsEvent` | `public static IMbEvent<List<CampaignTutorial>> CollectAvailableTutorialsEvent { get; }` |
| `OnTutorialCompletedEvent` | `public static IMbEvent<string> OnTutorialCompletedEvent { get; }` |
| `OnBuildingLevelChangedEvent` | `public static IMbEvent<Town, Building, int> OnBuildingLevelChangedEvent { get; }` |
| `HourlyTickEvent` | `public static IMbEvent HourlyTickEvent { get; }` |
| `HourlyTickPartyEvent` | `public static IMbEvent<MobileParty> HourlyTickPartyEvent { get; }` |
| `HourlyTickSettlementEvent` | `public static IMbEvent<Settlement> HourlyTickSettlementEvent { get; }` |
| `HourlyTickClanEvent` | `public static IMbEvent<Clan> HourlyTickClanEvent { get; }` |
| `TickEvent` | `public static IMbEvent<float> TickEvent { get; }` |
| `OnSessionLaunchedEvent` | `public static IMbEvent<CampaignGameStarter> OnSessionLaunchedEvent { get; }` |
| `OnAfterSessionLaunchedEvent` | `public static IMbEvent<CampaignGameStarter> OnAfterSessionLaunchedEvent { get; }` |
| `OnNewGameCreatedEvent` | `public static IMbEvent<CampaignGameStarter> OnNewGameCreatedEvent { get; }` |
| `OnNewGameCreatedPartialFollowUpEvent` | `public static IMbEvent<CampaignGameStarter, int> OnNewGameCreatedPartialFollowUpEvent { get; }` |
| `OnNewGameCreatedPartialFollowUpEndEvent` | `public static IMbEvent<CampaignGameStarter> OnNewGameCreatedPartialFollowUpEndEvent { get; }` |
| `OnGameEarlyLoadedEvent` | `public static IMbEvent<CampaignGameStarter> OnGameEarlyLoadedEvent { get; }` |
| `OnGameLoadedEvent` | `public static IMbEvent<CampaignGameStarter> OnGameLoadedEvent { get; }` |
| `OnGameLoadFinishedEvent` | `public static IMbEvent OnGameLoadFinishedEvent { get; }` |
| `AiHourlyTickEvent` | `public static IMbEvent<MobileParty, PartyThinkParams> AiHourlyTickEvent { get; }` |
| `TickPartialHourlyAiEvent` | `public static IMbEvent<MobileParty> TickPartialHourlyAiEvent { get; }` |
| `OnPartyJoinedArmyEvent` | `public static IMbEvent<MobileParty> OnPartyJoinedArmyEvent { get; }` |
| `PartyRemovedFromArmyEvent` | `public static IMbEvent<MobileParty> PartyRemovedFromArmyEvent { get; }` |
| `OnPlayerArmyLeaderChangedBehaviorEvent` | `public static IMbEvent OnPlayerArmyLeaderChangedBehaviorEvent { get; }` |
| `OnMissionEndedEvent` | `public static IMbEvent<IMission> OnMissionEndedEvent { get; }` |
| `OnQuarterDailyPartyTick` | `public static IMbEvent<MobileParty> OnQuarterDailyPartyTick { get; }` |
| `OnPlayerBattleEndEvent` | `public static IMbEvent<MapEvent> OnPlayerBattleEndEvent { get; }` |
| `OnUnitRecruitedEvent` | `public static IMbEvent<CharacterObject, int> OnUnitRecruitedEvent { get; }` |
| `OnChildConceivedEvent` | `public static IMbEvent<Hero> OnChildConceivedEvent { get; }` |
| `OnGivenBirthEvent` | `public static IMbEvent<Hero, List<Hero>, int> OnGivenBirthEvent { get; }` |
| `MissionTickEvent` | `public static IMbEvent<float> MissionTickEvent { get; }` |
| `ArmyOverlaySetDirtyEvent` | `public static IMbEvent ArmyOverlaySetDirtyEvent { get; }` |
| `PlayerDesertedBattleEvent` | `public static IMbEvent<int> PlayerDesertedBattleEvent { get; }` |
| `PartyVisibilityChangedEvent` | `public static IMbEvent<PartyBase> PartyVisibilityChangedEvent { get; }` |
| `TrackDetectedEvent` | `public static IMbEvent<Track> TrackDetectedEvent { get; }` |
| `TrackLostEvent` | `public static IMbEvent<Track> TrackLostEvent { get; }` |
| `LocationCharactersAreReadyToSpawnEvent` | `public static IMbEvent<Dictionary<string, int>> LocationCharactersAreReadyToSpawnEvent { get; }` |
| `BeforePlayerAgentSpawnEvent` | `public static ReferenceIMBEvent<MatrixFrame> BeforePlayerAgentSpawnEvent { get; }` |
| `PlayerAgentSpawned` | `public static IMbEvent PlayerAgentSpawned { get; }` |
| `LocationCharactersSimulatedEvent` | `public static IMbEvent LocationCharactersSimulatedEvent { get; }` |
| `PlayerUpgradedTroopsEvent` | `public static IMbEvent<CharacterObject, CharacterObject, int> PlayerUpgradedTroopsEvent { get; }` |
| `OnHeroCombatHitEvent` | `public static IMbEvent<CharacterObject, CharacterObject, PartyBase, WeaponComponentData, bool, int> OnHeroCombatHitEvent { get; }` |
| `CharacterPortraitPopUpOpenedEvent` | `public static IMbEvent<CharacterObject> CharacterPortraitPopUpOpenedEvent { get; }` |
| `CharacterPortraitPopUpClosedEvent` | `public static IMbEvent CharacterPortraitPopUpClosedEvent { get; }` |
| `PlayerStartTalkFromMenu` | `public static IMbEvent<Hero> PlayerStartTalkFromMenu { get; }` |
| `GameMenuOptionSelectedEvent` | `public static IMbEvent<GameMenu, GameMenuOption> GameMenuOptionSelectedEvent { get; }` |
| `PlayerStartRecruitmentEvent` | `public static IMbEvent<CharacterObject> PlayerStartRecruitmentEvent { get; }` |
| `OnBeforePlayerCharacterChangedEvent` | `public static IMbEvent<Hero, Hero> OnBeforePlayerCharacterChangedEvent { get; }` |
| `OnPlayerCharacterChangedEvent` | `public static IMbEvent<Hero, Hero, MobileParty, bool> OnPlayerCharacterChangedEvent { get; }` |
| `OnClanLeaderChangedEvent` | `public static IMbEvent<Hero, Hero> OnClanLeaderChangedEvent { get; }` |
| `OnSiegeEventStartedEvent` | `public static IMbEvent<SiegeEvent> OnSiegeEventStartedEvent { get; }` |
| `OnPlayerSiegeStartedEvent` | `public static IMbEvent OnPlayerSiegeStartedEvent { get; }` |
| `OnSiegeEventEndedEvent` | `public static IMbEvent<SiegeEvent> OnSiegeEventEndedEvent { get; }` |
| `float` | `public static IMbEvent<MobileParty, Settlement, SiegeAftermathAction.SiegeAftermath, Clan, Dictionary<MobileParty, float { get; }` |
| `OnSiegeBombardment` | `public static IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType, SiegeBombardTargets> OnSiegeBombardment { get; }` |
| `OnSiegeBombardmentWallHitEvent` | `public static IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType, bool> OnSiegeBombardmentWallHitEvent { get; }` |
| `OnSiegeEngineDestroyedEvent` | `public static IMbEvent<MobileParty, Settlement, BattleSideEnum, SiegeEngineType> OnSiegeEngineDestroyedEvent { get; }` |
| `OnTradeRumorIsTakenEvent` | `public static IMbEvent<List<TradeRumor>, Settlement> OnTradeRumorIsTakenEvent { get; }` |
| `OnCheckForIssueEvent` | `public static IMbEvent<Hero> OnCheckForIssueEvent { get; }` |
| `OnIssueUpdatedEvent` | `public static IMbEvent<IssueBase, IssueBase.IssueUpdateDetails, Hero> OnIssueUpdatedEvent { get; }` |
| `OnTroopsDesertedEvent` | `public static IMbEvent<MobileParty, TroopRoster> OnTroopsDesertedEvent { get; }` |
| `OnTroopRecruitedEvent` | `public static IMbEvent<Hero, Settlement, Hero, CharacterObject, int> OnTroopRecruitedEvent { get; }` |
| `OnTroopGivenToSettlementEvent` | `public static IMbEvent<Hero, Settlement, TroopRoster> OnTroopGivenToSettlementEvent { get; }` |
| `OnItemSoldEvent` | `public static IMbEvent<PartyBase, PartyBase, ItemRosterElement, int, Settlement> OnItemSoldEvent { get; }` |
| `OnCaravanTransactionCompletedEvent` | `public static IMbEvent<MobileParty, Town, List<ValueTuple<EquipmentElement, int>>> OnCaravanTransactionCompletedEvent { get; }` |
| `OnPrisonerSoldEvent` | `public static IMbEvent<PartyBase, PartyBase, TroopRoster> OnPrisonerSoldEvent { get; }` |
| `OnPartyDisbandStartedEvent` | `public static IMbEvent<MobileParty> OnPartyDisbandStartedEvent { get; }` |
| `OnPartyDisbandedEvent` | `public static IMbEvent<MobileParty, Settlement> OnPartyDisbandedEvent { get; }` |
| `OnPartyDisbandCanceledEvent` | `public static IMbEvent<MobileParty> OnPartyDisbandCanceledEvent { get; }` |
| `OnHideoutSpottedEvent` | `public static IMbEvent<PartyBase, PartyBase> OnHideoutSpottedEvent { get; }` |
| `OnHideoutDeactivatedEvent` | `public static IMbEvent<Settlement> OnHideoutDeactivatedEvent { get; }` |
| `OnHeroSharedFoodWithAnotherHeroEvent` | `public static IMbEvent<Hero, Hero, float> OnHeroSharedFoodWithAnotherHeroEvent { get; }` |
| `PlayerI` | `public static IMbEvent<List<ValueTuple<ItemRosterElement, int>>, List<ValueTuple<ItemRosterElement, int>>, bool> PlayerI { get; }` |
| `OnItemsDiscardedByPlayerEvent` | `public static IMbEvent<ItemRoster> OnItemsDiscardedByPlayerEvent { get; }` |
| `PersuasionProgressCommittedEvent` | `public static IMbEvent<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> PersuasionProgressCommittedEvent { get; }` |
| `OnQuestCompletedEvent` | `public static IMbEvent<QuestBase, QuestBase.QuestCompleteDetails> OnQuestCompletedEvent { get; }` |
| `OnQuestStartedEvent` | `public static IMbEvent<QuestBase> OnQuestStartedEvent { get; }` |
| `OnItemProducedEvent` | `public static IMbEvent<ItemObject, Settlement, int> OnItemProducedEvent { get; }` |
| `OnItemConsumedEvent` | `public static IMbEvent<ItemObject, Settlement, int> OnItemConsumedEvent { get; }` |
| `OnPartyConsumedFoodEvent` | `public static IMbEvent<MobileParty> OnPartyConsumedFoodEvent { get; }` |
| `OnBeforeMainCharacterDiedEvent` | `public static IMbEvent<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool> OnBeforeMainCharacterDiedEvent { get; }` |
| `OnNewIssueCreatedEvent` | `public static IMbEvent<IssueBase> OnNewIssueCreatedEvent { get; }` |
| `OnIssueOwnerChangedEvent` | `public static IMbEvent<IssueBase, Hero> OnIssueOwnerChangedEvent { get; }` |
| `OnGameOverEvent` | `public static IMbEvent OnGameOverEvent { get; }` |
| `SiegeCompletedEvent` | `public static IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes> SiegeCompletedEvent { get; }` |
| `AfterSiegeCompletedEvent` | `public static IMbEvent<Settlement, MobileParty, bool, MapEvent.BattleTypes> AfterSiegeCompletedEvent { get; }` |
| `SiegeEngineBuiltEvent` | `public static IMbEvent<SiegeEvent, BattleSideEnum, SiegeEngineType> SiegeEngineBuiltEvent { get; }` |
| `RaidCompletedEvent` | `public static IMbEvent<BattleSideEnum, RaidEventComponent> RaidCompletedEvent { get; }` |
| `ForceVolunteersCompletedEvent` | `public static IMbEvent<BattleSideEnum, ForceVolunteersEventComponent> ForceVolunteersCompletedEvent { get; }` |
| `ForceSuppliesCompletedEvent` | `public static IMbEvent<BattleSideEnum, ForceSuppliesEventComponent> ForceSuppliesCompletedEvent { get; }` |
| `OnHideoutBattleCompletedEvent` | `public static MbEvent<BattleSideEnum, HideoutEventComponent> OnHideoutBattleCompletedEvent { get; }` |
| `OnClanDestroyedEvent` | `public static IMbEvent<Clan> OnClanDestroyedEvent { get; }` |
| `OnNewItemCraftedEvent` | `public static IMbEvent<ItemObject, ItemModifier, bool> OnNewItemCraftedEvent { get; }` |
| `CraftingPartUnlockedEvent` | `public static IMbEvent<CraftingPiece> CraftingPartUnlockedEvent { get; }` |
| `WorkshopInitializedEvent` | `public static IMbEvent<Workshop> WorkshopInitializedEvent { get; }` |
| `WorkshopOwnerChangedEvent` | `public static IMbEvent<Workshop, Hero> WorkshopOwnerChangedEvent { get; }` |
| `WorkshopTypeChangedEvent` | `public static IMbEvent<Workshop> WorkshopTypeChangedEvent { get; }` |
| `OnBeforeSaveEvent` | `public static IMbEvent OnBeforeSaveEvent { get; }` |
| `OnSaveStartedEvent` | `public static IMbEvent OnSaveStartedEvent { get; }` |
| `OnSaveOverEvent` | `public static IMbEvent<bool, string> OnSaveOverEvent { get; }` |
| `OnPrisonerTakenEvent` | `public static IMbEvent<FlattenedTroopRoster> OnPrisonerTakenEvent { get; }` |
| `OnPrisonerReleasedEvent` | `public static IMbEvent<FlattenedTroopRoster> OnPrisonerReleasedEvent { get; }` |
| `OnMainPartyPrisonerRecruitedEvent` | `public static IMbEvent<FlattenedTroopRoster> OnMainPartyPrisonerRecruitedEvent { get; }` |
| `OnPrisonerDonatedToSettlementEvent` | `public static IMbEvent<MobileParty, FlattenedTroopRoster, Settlement> OnPrisonerDonatedToSettlementEvent { get; }` |
| `OnEquipmentSmeltedByHeroEvent` | `public static IMbEvent<Hero, EquipmentElement> OnEquipmentSmeltedByHeroEvent { get; }` |
| `OnPlayerTradeProfitEvent` | `public static IMbEvent<int> OnPlayerTradeProfitEvent { get; }` |
| `OnHeroChangedClanEvent` | `public static IMbEvent<Hero, Clan> OnHeroChangedClanEvent { get; }` |
| `OnHeroGetsBusyEvent` | `public static IMbEvent<Hero, HeroGetsBusyReasons> OnHeroGetsBusyEvent { get; }` |
| `OnCollectLootsItemsEvent` | `public static IMbEvent<PartyBase, ItemRoster> OnCollectLootsItemsEvent { get; }` |
| `OnLootDistributedToPartyEvent` | `public static IMbEvent<PartyBase, PartyBase, ItemRoster> OnLootDistributedToPartyEvent { get; }` |
| `OnHeroTeleportationRequest` | `public static IMbEvent<Hero, Settlement, MobileParty, TeleportHeroAction.TeleportationDetail> OnHeroTeleportationRequest { get; }` |
| `OnPartyLeaderChangeOfferCanceledEvent` | `public static IMbEvent<MobileParty> OnPartyLeaderChangeOfferCanceledEvent { get; }` |
| `OnPartyLeaderChangedEvent` | `public static IMbEvent<MobileParty, Hero> OnPartyLeaderChangedEvent { get; }` |
| `OnClanInfluenceChangedEvent` | `public static IMbEvent<Clan, float> OnClanInfluenceChangedEvent { get; }` |
| `OnPlayerPartyKnockedOrKilledTroopEvent` | `public static IMbEvent<CharacterObject> OnPlayerPartyKnockedOrKilledTroopEvent { get; }` |
| `OnPlayerEarnedGoldFromAssetEvent` | `public static IMbEvent<DefaultClanFinanceModel.AssetIncomeType, int> OnPlayerEarnedGoldFromAssetEvent { get; }` |
| `OnMainPartyStarvingEvent` | `public static IMbEvent OnMainPartyStarvingEvent { get; }` |
| `OnPlayerJoinedTournamentEvent` | `public static IMbEvent<Town, bool> OnPlayerJoinedTournamentEvent { get; }` |
| `OnHeroUnregisteredEvent` | `public static IMbEvent<Hero> OnHeroUnregisteredEvent { get; }` |
| `OnConfigChangedEvent` | `public static IMbEvent OnConfigChangedEvent { get; }` |
| `OnCraftingOrderCompletedEvent` | `public static IMbEvent<Town, CraftingOrder, ItemObject, Hero> OnCraftingOrderCompletedEvent { get; }` |
| `OnItemsRefinedEvent` | `public static IMbEvent<Hero, Crafting.RefiningFormula> OnItemsRefinedEvent { get; }` |
| `OnHeirSelectionRequestedEvent` | `public static IMbEvent<Dictionary<Hero, int>> OnHeirSelectionRequestedEvent { get; }` |
| `OnHeirSelectionOverEvent` | `public static IMbEvent<Hero> OnHeirSelectionOverEvent { get; }` |
| `OnCharacterCreationInitializedEvent` | `public static IMbEvent<CharacterCreationManager> OnCharacterCreationInitializedEvent { get; }` |
| `OnMobilePartyRaftStateChangedEvent` | `public static IMbEvent<MobileParty> OnMobilePartyRaftStateChangedEvent { get; }` |
| `OnShipDestroyedEvent` | `public static IMbEvent<PartyBase, Ship, DestroyShipAction.ShipDestroyDetail> OnShipDestroyedEvent { get; }` |
| `OnShipOwnerChangedEvent` | `public static IMbEvent<Ship, PartyBase, ChangeShipOwnerAction.ShipOwnerChangeDetail> OnShipOwnerChangedEvent { get; }` |
| `OnShipRepairedEvent` | `public static IMbEvent<Ship, Settlement> OnShipRepairedEvent { get; }` |
| `OnShipCreatedEvent` | `public static IMbEvent<Ship, Settlement> OnShipCreatedEvent { get; }` |
| `OnFigureheadUnlockedEvent` | `public static IMbEvent<Figurehead> OnFigureheadUnlockedEvent { get; }` |
| `OnPartyLeftArmyEvent` | `public static IMbEvent<MobileParty, Army> OnPartyLeftArmyEvent { get; }` |
| `OnPartyAddedToMapEventEvent` | `public static IMbEvent<PartyBase> OnPartyAddedToMapEventEvent { get; }` |
| `OnIncidentResolvedEvent` | `public static IMbEvent<Incident> OnIncidentResolvedEvent { get; }` |
| `OnMobilePartyNavigationStateChangedEvent` | `public static IMbEvent<MobileParty> OnMobilePartyNavigationStateChangedEvent { get; }` |
| `OnMobilePartyJoinedToSiegeEventEvent` | `public static IMbEvent<MobileParty> OnMobilePartyJoinedToSiegeEventEvent { get; }` |
| `OnMobilePartyLeftSiegeEventEvent` | `public static IMbEvent<MobileParty> OnMobilePartyLeftSiegeEventEvent { get; }` |
| `OnBlockadeActivatedEvent` | `public static IMbEvent<SiegeEvent> OnBlockadeActivatedEvent { get; }` |
| `OnBlockadeDeactivatedEvent` | `public static IMbEvent<SiegeEvent> OnBlockadeDeactivatedEvent { get; }` |
| `OnMapMarkerCreatedEvent` | `public static IMbEvent<MapMarker> OnMapMarkerCreatedEvent { get; }` |
| `OnMapMarkerRemovedEvent` | `public static IMbEvent<MapMarker> OnMapMarkerRemovedEvent { get; }` |
| `OnAllianceStartedEvent` | `public static IMbEvent<Kingdom, Kingdom> OnAllianceStartedEvent { get; }` |
| `OnAllianceEndedEvent` | `public static IMbEvent<Kingdom, Kingdom> OnAllianceEndedEvent { get; }` |
| `OnCallToWarAgreementStartedEvent` | `public static IMbEvent<Kingdom, Kingdom, Kingdom> OnCallToWarAgreementStartedEvent { get; }` |
| `OnCallToWarAgreementEndedEvent` | `public static IMbEvent<Kingdom, Kingdom, Kingdom> OnCallToWarAgreementEndedEvent { get; }` |
| `CanHeroLeadPartyEvent` | `public static ReferenceIMBEvent<Hero, bool> CanHeroLeadPartyEvent { get; }` |
| `CanHeroMarryEvent` | `public static ReferenceIMBEvent<Hero, bool> CanHeroMarryEvent { get; }` |
| `CanHeroEquipmentBeChangedEvent` | `public static ReferenceIMBEvent<Hero, bool> CanHeroEquipmentBeChangedEvent { get; }` |
| `CanBeGovernorOrHavePartyRoleEvent` | `public static ReferenceIMBEvent<Hero, bool> CanBeGovernorOrHavePartyRoleEvent { get; }` |
| `CanHeroDieEvent` | `public static ReferenceIMBEvent<Hero, KillCharacterAction.KillCharacterActionDetail, bool> CanHeroDieEvent { get; }` |
| `CanPlayerMeetWithHeroAfterConversationEvent` | `public static ReferenceIMBEvent<Hero, bool> CanPlayerMeetWithHeroAfterConversationEvent { get; }` |
| `CanHeroBecomePrisonerEvent` | `public static ReferenceIMBEvent<Hero, bool> CanHeroBecomePrisonerEvent { get; }` |
| `CanMoveToSettlementEvent` | `public static ReferenceIMBEvent<Hero, bool> CanMoveToSettlementEvent { get; }` |
| `CanHaveCampaignIssuesEvent` | `public static ReferenceIMBEvent<Hero, bool> CanHaveCampaignIssuesEvent { get; }` |
| `IsSettlementBusyEvent` | `public static ReferenceIMBEvent<Settlement, object, int> IsSettlementBusyEvent { get; }` |
| `OnMapEventContinuityNeedsUpdateEvent` | `public static IMbEvent<IFaction> OnMapEventContinuityNeedsUpdateEvent { get; }` |

## 主要方法

### RemoveListeners
`public override void RemoveListeners(object obj)`

**用途 / Purpose:** 从当前集合/状态中移除 `listeners`。

### OnPlayerBodyPropertiesChanged
`public override void OnPlayerBodyPropertiesChanged()`

**用途 / Purpose:** 当 `player body properties changed` 事件触发时调用此方法。

### OnBarterablesRequested
`public override void OnBarterablesRequested(BarterData args)`

**用途 / Purpose:** 当 `barterables requested` 事件触发时调用此方法。

### OnHeroLevelledUp
`public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**用途 / Purpose:** 当 `hero levelled up` 事件触发时调用此方法。

### OnHeroGainedSkill
`public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**用途 / Purpose:** 当 `hero gained skill` 事件触发时调用此方法。

### OnCharacterCreationIsOver
`public override void OnCharacterCreationIsOver()`

**用途 / Purpose:** 当 `character creation is over` 事件触发时调用此方法。

### OnHeroCreated
`public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**用途 / Purpose:** 当 `hero created` 事件触发时调用此方法。

### OnHeroOccupationChanged
`public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**用途 / Purpose:** 当 `hero occupation changed` 事件触发时调用此方法。

### OnHeroWounded
`public override void OnHeroWounded(Hero woundedHero)`

**用途 / Purpose:** 当 `hero wounded` 事件触发时调用此方法。

### OnBarterAccepted
`public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**用途 / Purpose:** 当 `barter accepted` 事件触发时调用此方法。

### OnBarterCanceled
`public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**用途 / Purpose:** 当 `barter canceled` 事件触发时调用此方法。

### OnHeroRelationChanged
`public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**用途 / Purpose:** 当 `hero relation changed` 事件触发时调用此方法。

### OnQuestLogAdded
`public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**用途 / Purpose:** 当 `quest log added` 事件触发时调用此方法。

### OnIssueLogAdded
`public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**用途 / Purpose:** 当 `issue log added` 事件触发时调用此方法。

### OnClanTierChanged
`public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**用途 / Purpose:** 当 `clan tier changed` 事件触发时调用此方法。

### OnClanChangedKingdom
`public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 当 `clan changed kingdom` 事件触发时调用此方法。

### OnClanDefected
`public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**用途 / Purpose:** 当 `clan defected` 事件触发时调用此方法。

### OnClanCreated
`public override void OnClanCreated(Clan clan, bool isCompanion)`

**用途 / Purpose:** 当 `clan created` 事件触发时调用此方法。

### OnHeroJoinedParty
`public override void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)`

**用途 / Purpose:** 当 `hero joined party` 事件触发时调用此方法。

### OnHeroOrPartyTradedGold
`public override void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> recipient, ValueTuple<int, string> goldAmount, bool showNotification)`

**用途 / Purpose:** 当 `hero or party traded gold` 事件触发时调用此方法。

### OnHeroOrPartyGaveItem
`public override void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**用途 / Purpose:** 当 `hero or party gave item` 事件触发时调用此方法。

### OnBanditPartyRecruited
`public override void OnBanditPartyRecruited(MobileParty banditParty)`

**用途 / Purpose:** 当 `bandit party recruited` 事件触发时调用此方法。

### OnKingdomDecisionAdded
`public override void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**用途 / Purpose:** 当 `kingdom decision added` 事件触发时调用此方法。

### OnKingdomDecisionCancelled
`public override void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**用途 / Purpose:** 当 `kingdom decision cancelled` 事件触发时调用此方法。

### OnKingdomDecisionConcluded
`public override void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**用途 / Purpose:** 当 `kingdom decision concluded` 事件触发时调用此方法。

### OnPartyAttachedAnotherParty
`public override void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party attached another party` 事件触发时调用此方法。

### OnNearbyPartyAddedToPlayerMapEvent
`public override void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**用途 / Purpose:** 当 `nearby party added to player map event` 事件触发时调用此方法。

### OnArmyCreated
`public override void OnArmyCreated(Army army)`

**用途 / Purpose:** 当 `army created` 事件触发时调用此方法。

### OnArmyDispersed
`public override void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**用途 / Purpose:** 当 `army dispersed` 事件触发时调用此方法。

### OnArmyGathered
`public override void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**用途 / Purpose:** 当 `army gathered` 事件触发时调用此方法。

### OnPerkOpened
`public override void OnPerkOpened(Hero hero, PerkObject perk)`

**用途 / Purpose:** 当 `perk opened` 事件触发时调用此方法。

### OnPerkReset
`public override void OnPerkReset(Hero hero, PerkObject perk)`

**用途 / Purpose:** 当 `perk reset` 事件触发时调用此方法。

### OnPlayerTraitChanged
`public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**用途 / Purpose:** 当 `player trait changed` 事件触发时调用此方法。

### OnVillageStateChanged
`public override void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**用途 / Purpose:** 当 `village state changed` 事件触发时调用此方法。

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `settlement entered` 事件触发时调用此方法。

### OnAfterSettlementEntered
`public override void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `after settlement entered` 事件触发时调用此方法。

### OnBeforeSettlementEntered
`public override void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 当 `before settlement entered` 事件触发时调用此方法。

### OnMercenaryTroopChangedInTown
`public override void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**用途 / Purpose:** 当 `mercenary troop changed in town` 事件触发时调用此方法。

### OnMercenaryNumberChangedInTown
`public override void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**用途 / Purpose:** 当 `mercenary number changed in town` 事件触发时调用此方法。

### OnAlleyOccupiedByPlayer
`public override void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**用途 / Purpose:** 当 `alley occupied by player` 事件触发时调用此方法。

### OnAlleyOwnerChanged
`public override void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**用途 / Purpose:** 当 `alley owner changed` 事件触发时调用此方法。

### OnAlleyClearedByPlayer
`public override void OnAlleyClearedByPlayer(Alley alley)`

**用途 / Purpose:** 当 `alley cleared by player` 事件触发时调用此方法。

### OnRomanticStateChanged
`public override void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**用途 / Purpose:** 当 `romantic state changed` 事件触发时调用此方法。

### OnBeforeHeroesMarried
`public override void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)`

**用途 / Purpose:** 当 `before heroes married` 事件触发时调用此方法。

### OnPlayerEliminatedFromTournament
`public override void OnPlayerEliminatedFromTournament(int round, Town town)`

**用途 / Purpose:** 当 `player eliminated from tournament` 事件触发时调用此方法。

### OnPlayerStartedTournamentMatch
`public override void OnPlayerStartedTournamentMatch(Town town)`

**用途 / Purpose:** 当 `player started tournament match` 事件触发时调用此方法。

### OnTournamentStarted
`public override void OnTournamentStarted(Town town)`

**用途 / Purpose:** 当 `tournament started` 事件触发时调用此方法。

### OnWarDeclared
`public override void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**用途 / Purpose:** 当 `war declared` 事件触发时调用此方法。

### OnTournamentFinished
`public override void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**用途 / Purpose:** 当 `tournament finished` 事件触发时调用此方法。

### OnTournamentCancelled
`public override void OnTournamentCancelled(Town town)`

**用途 / Purpose:** 当 `tournament cancelled` 事件触发时调用此方法。

### OnStartBattle
`public override void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**用途 / Purpose:** 当 `start battle` 事件触发时调用此方法。

### OnRebellionFinished
`public override void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**用途 / Purpose:** 当 `rebellion finished` 事件触发时调用此方法。

### TownRebelliousStateChanged
`public override void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**用途 / Purpose:** 处理 `town rebellious state changed` 相关逻辑。

### OnRebelliousClanDisbandedAtSettlement
`public override void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**用途 / Purpose:** 当 `rebellious clan disbanded at settlement` 事件触发时调用此方法。

### OnItemsLooted
`public override void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**用途 / Purpose:** 当 `items looted` 事件触发时调用此方法。

### OnMobilePartyDestroyed
`public override void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**用途 / Purpose:** 当 `mobile party destroyed` 事件触发时调用此方法。

### OnMobilePartyCreated
`public override void OnMobilePartyCreated(MobileParty party)`

**用途 / Purpose:** 当 `mobile party created` 事件触发时调用此方法。

### OnMapInteractableCreated
`public override void OnMapInteractableCreated(IInteractablePoint interactable)`

**用途 / Purpose:** 当 `map interactable created` 事件触发时调用此方法。

### OnMapInteractableDestroyed
`public override void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**用途 / Purpose:** 当 `map interactable destroyed` 事件触发时调用此方法。

### OnMobilePartyQuestStatusChanged
`public override void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**用途 / Purpose:** 当 `mobile party quest status changed` 事件触发时调用此方法。

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 当 `hero killed` 事件触发时调用此方法。

### OnBeforeHeroKilled
`public override void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 当 `before hero killed` 事件触发时调用此方法。

### OnChildEducationCompleted
`public override void OnChildEducationCompleted(Hero hero, int age)`

**用途 / Purpose:** 当 `child education completed` 事件触发时调用此方法。

### OnHeroComesOfAge
`public override void OnHeroComesOfAge(Hero hero)`

**用途 / Purpose:** 当 `hero comes of age` 事件触发时调用此方法。

### OnHeroGrowsOutOfInfancy
`public override void OnHeroGrowsOutOfInfancy(Hero hero)`

**用途 / Purpose:** 当 `hero grows out of infancy` 事件触发时调用此方法。

### OnHeroReachesTeenAge
`public override void OnHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** 当 `hero reaches teen age` 事件触发时调用此方法。

### OnCharacterDefeated
`public override void OnCharacterDefeated(Hero winner, Hero loser)`

**用途 / Purpose:** 当 `character defeated` 事件触发时调用此方法。

### OnRulingClanChanged
`public override void OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)`

**用途 / Purpose:** 当 `ruling clan changed` 事件触发时调用此方法。

### OnHeroPrisonerTaken
`public override void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**用途 / Purpose:** 当 `hero prisoner taken` 事件触发时调用此方法。

### OnHeroPrisonerReleased
`public override void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**用途 / Purpose:** 当 `hero prisoner released` 事件触发时调用此方法。

### OnCharacterBecameFugitive
`public override void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**用途 / Purpose:** 当 `character became fugitive` 事件触发时调用此方法。

### OnPlayerMetHero
`public override void OnPlayerMetHero(Hero hero)`

**用途 / Purpose:** 当 `player met hero` 事件触发时调用此方法。

### OnPlayerLearnsAboutHero
`public override void OnPlayerLearnsAboutHero(Hero hero)`

**用途 / Purpose:** 当 `player learns about hero` 事件触发时调用此方法。

### OnRenownGained
`public override void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**用途 / Purpose:** 当 `renown gained` 事件触发时调用此方法。

### OnCrimeRatingChanged
`public override void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**用途 / Purpose:** 当 `crime rating changed` 事件触发时调用此方法。

### OnNewCompanionAdded
`public override void OnNewCompanionAdded(Hero newCompanion)`

**用途 / Purpose:** 当 `new companion added` 事件触发时调用此方法。

### OnAfterMissionStarted
`public override void OnAfterMissionStarted(IMission iMission)`

**用途 / Purpose:** 当 `after mission started` 事件触发时调用此方法。

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** 当 `game menu opened` 事件触发时调用此方法。

### AfterGameMenuInitialized
`public override void AfterGameMenuInitialized(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `after game menu initialized` 相关逻辑。

### BeforeGameMenuOpened
`public override void BeforeGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `before game menu opened` 相关逻辑。

### OnMakePeace
`public override void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**用途 / Purpose:** 当 `make peace` 事件触发时调用此方法。

### OnKingdomDestroyed
`public override void OnKingdomDestroyed(Kingdom destroyedKingdom)`

**用途 / Purpose:** 当 `kingdom destroyed` 事件触发时调用此方法。

### CanKingdomBeDiscontinued
`public override void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `kingdom be discontinued`。

### OnKingdomCreated
`public override void OnKingdomCreated(Kingdom createdKingdom)`

**用途 / Purpose:** 当 `kingdom created` 事件触发时调用此方法。

### OnVillageBecomeNormal
`public override void OnVillageBecomeNormal(Village village)`

**用途 / Purpose:** 当 `village become normal` 事件触发时调用此方法。

### OnVillageBeingRaided
`public override void OnVillageBeingRaided(Village village)`

**用途 / Purpose:** 当 `village being raided` 事件触发时调用此方法。

### OnVillageLooted
`public override void OnVillageLooted(Village village)`

**用途 / Purpose:** 当 `village looted` 事件触发时调用此方法。

### OnCompanionRemoved
`public override void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**用途 / Purpose:** 当 `companion removed` 事件触发时调用此方法。

### OnAgentJoinedConversation
`public override void OnAgentJoinedConversation(IAgent agent)`

**用途 / Purpose:** 当 `agent joined conversation` 事件触发时调用此方法。

### OnConversationEnded
`public override void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**用途 / Purpose:** 当 `conversation ended` 事件触发时调用此方法。

### OnMapEventEnded
`public override void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** 当 `map event ended` 事件触发时调用此方法。

### OnMapEventStarted
`public override void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 当 `map event started` 事件触发时调用此方法。

### OnPrisonersChangeInSettlement
`public override void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**用途 / Purpose:** 当 `prisoners change in settlement` 事件触发时调用此方法。

### OnPlayerBoardGameOver
`public override void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**用途 / Purpose:** 当 `player board game over` 事件触发时调用此方法。

### OnRansomOfferedToPlayer
`public override void OnRansomOfferedToPlayer(Hero captiveHero)`

**用途 / Purpose:** 当 `ransom offered to player` 事件触发时调用此方法。

### OnRansomOfferCancelled
`public override void OnRansomOfferCancelled(Hero captiveHero)`

**用途 / Purpose:** 当 `ransom offer cancelled` 事件触发时调用此方法。

### OnPeaceOfferedToPlayer
`public override void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount)`

**用途 / Purpose:** 当 `peace offered to player` 事件触发时调用此方法。

### OnTradeAgreementSigned
`public override void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**用途 / Purpose:** 当 `trade agreement signed` 事件触发时调用此方法。

### OnPeaceOfferResolved
`public override void OnPeaceOfferResolved(IFaction opponentFaction)`

**用途 / Purpose:** 当 `peace offer resolved` 事件触发时调用此方法。

### OnMarriageOfferedToPlayer
`public override void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**用途 / Purpose:** 当 `marriage offered to player` 事件触发时调用此方法。

### OnMarriageOfferCanceled
`public override void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**用途 / Purpose:** 当 `marriage offer canceled` 事件触发时调用此方法。

### OnVassalOrMercenaryServiceOfferedToPlayer
`public override void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**用途 / Purpose:** 当 `vassal or mercenary service offered to player` 事件触发时调用此方法。

### OnVassalOrMercenaryServiceOfferCanceled
`public override void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**用途 / Purpose:** 当 `vassal or mercenary service offer canceled` 事件触发时调用此方法。

### OnMercenaryServiceStarted
`public override void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**用途 / Purpose:** 当 `mercenary service started` 事件触发时调用此方法。

### OnMercenaryServiceEnded
`public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**用途 / Purpose:** 当 `mercenary service ended` 事件触发时调用此方法。

### OnMissionStarted
`public override void OnMissionStarted(IMission mission)`

**用途 / Purpose:** 当 `mission started` 事件触发时调用此方法。

### BeforeMissionOpened
`public override void BeforeMissionOpened()`

**用途 / Purpose:** 处理 `before mission opened` 相关逻辑。

### OnPartyRemoved
`public override void OnPartyRemoved(PartyBase party)`

**用途 / Purpose:** 当 `party removed` 事件触发时调用此方法。

### OnPartySizeChanged
`public override void OnPartySizeChanged(PartyBase party)`

**用途 / Purpose:** 当 `party size changed` 事件触发时调用此方法。

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** 当 `settlement owner changed` 事件触发时调用此方法。

### OnGovernorChanged
`public override void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**用途 / Purpose:** 当 `governor changed` 事件触发时调用此方法。

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 当 `settlement left` 事件触发时调用此方法。

### WeeklyTick
`public override void WeeklyTick()`

**用途 / Purpose:** 处理 `weekly tick` 相关逻辑。

### DailyTick
`public override void DailyTick()`

**用途 / Purpose:** 处理 `daily tick` 相关逻辑。

### DailyTickParty
`public override void DailyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `daily tick party` 相关逻辑。

### DailyTickTown
`public override void DailyTickTown(Town town)`

**用途 / Purpose:** 处理 `daily tick town` 相关逻辑。

### DailyTickSettlement
`public override void DailyTickSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `daily tick settlement` 相关逻辑。

### DailyTickHero
`public override void DailyTickHero(Hero hero)`

**用途 / Purpose:** 处理 `daily tick hero` 相关逻辑。

### DailyTickClan
`public override void DailyTickClan(Clan clan)`

**用途 / Purpose:** 处理 `daily tick clan` 相关逻辑。

### CollectAvailableTutorials
`public override void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**用途 / Purpose:** 处理 `collect available tutorials` 相关逻辑。

### OnTutorialCompleted
`public override void OnTutorialCompleted(string tutorial)`

**用途 / Purpose:** 当 `tutorial completed` 事件触发时调用此方法。

### OnBuildingLevelChanged
`public override void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**用途 / Purpose:** 当 `building level changed` 事件触发时调用此方法。

### HourlyTick
`public override void HourlyTick()`

**用途 / Purpose:** 处理 `hourly tick` 相关逻辑。

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `hourly tick party` 相关逻辑。

### HourlyTickSettlement
`public override void HourlyTickSettlement(Settlement settlement)`

**用途 / Purpose:** 处理 `hourly tick settlement` 相关逻辑。

### HourlyTickClan
`public override void HourlyTickClan(Clan clan)`

**用途 / Purpose:** 处理 `hourly tick clan` 相关逻辑。

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `session start` 事件触发时调用此方法。

### OnAfterSessionStart
`public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `after session start` 事件触发时调用此方法。

### OnNewGameCreated
`public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `new game created` 事件触发时调用此方法。

### OnGameEarlyLoaded
`public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `game early loaded` 事件触发时调用此方法。

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 当 `game loaded` 事件触发时调用此方法。

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**用途 / Purpose:** 当 `game load finished` 事件触发时调用此方法。

### AiHourlyTick
`public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**用途 / Purpose:** 处理 `ai hourly tick` 相关逻辑。

### TickPartialHourlyAi
`public override void TickPartialHourlyAi(MobileParty party)`

**用途 / Purpose:** 处理 `tick partial hourly ai` 相关逻辑。

### OnPartyJoinedArmy
`public override void OnPartyJoinedArmy(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party joined army` 事件触发时调用此方法。

### OnPartyRemovedFromArmy
`public override void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**用途 / Purpose:** 当 `party removed from army` 事件触发时调用此方法。

### OnPlayerArmyLeaderChangedBehavior
`public override void OnPlayerArmyLeaderChangedBehavior()`

**用途 / Purpose:** 当 `player army leader changed behavior` 事件触发时调用此方法。

### OnMissionEnded
`public override void OnMissionEnded(IMission mission)`

**用途 / Purpose:** 当 `mission ended` 事件触发时调用此方法。

### QuarterDailyPartyTick
`public override void QuarterDailyPartyTick(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `quarter daily party tick` 相关逻辑。

### OnPlayerBattleEnd
`public override void OnPlayerBattleEnd(MapEvent mapEvent)`

**用途 / Purpose:** 当 `player battle end` 事件触发时调用此方法。

### OnUnitRecruited
`public override void OnUnitRecruited(CharacterObject character, int amount)`

**用途 / Purpose:** 当 `unit recruited` 事件触发时调用此方法。

### OnChildConceived
`public override void OnChildConceived(Hero mother)`

**用途 / Purpose:** 当 `child conceived` 事件触发时调用此方法。

### OnGivenBirth
`public override void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**用途 / Purpose:** 当 `given birth` 事件触发时调用此方法。

### MissionTick
`public override void MissionTick(float dt)`

**用途 / Purpose:** 处理 `mission tick` 相关逻辑。

### OnArmyOverlaySetDirty
`public override void OnArmyOverlaySetDirty()`

**用途 / Purpose:** 当 `army overlay set dirty` 事件触发时调用此方法。

### OnPlayerDesertedBattle
`public override void OnPlayerDesertedBattle(int sacrificedMenCount)`

**用途 / Purpose:** 当 `player deserted battle` 事件触发时调用此方法。

### OnPartyVisibilityChanged
`public override void OnPartyVisibilityChanged(PartyBase party)`

**用途 / Purpose:** 当 `party visibility changed` 事件触发时调用此方法。

### TrackDetected
`public override void TrackDetected(Track track)`

**用途 / Purpose:** 处理 `track detected` 相关逻辑。

### TrackLost
`public override void TrackLost(Track track)`

**用途 / Purpose:** 处理 `track lost` 相关逻辑。

### LocationCharactersAreReadyToSpawn
`public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**用途 / Purpose:** 处理 `location characters are ready to spawn` 相关逻辑。

### OnBeforePlayerAgentSpawn
`public override void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**用途 / Purpose:** 当 `before player agent spawn` 事件触发时调用此方法。

### OnPlayerAgentSpawned
`public override void OnPlayerAgentSpawned()`

**用途 / Purpose:** 当 `player agent spawned` 事件触发时调用此方法。

### LocationCharactersSimulated
`public override void LocationCharactersSimulated()`

**用途 / Purpose:** 处理 `location characters simulated` 相关逻辑。

### OnPlayerUpgradedTroops
`public override void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**用途 / Purpose:** 当 `player upgraded troops` 事件触发时调用此方法。

### OnHeroCombatHit
`public override void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**用途 / Purpose:** 当 `hero combat hit` 事件触发时调用此方法。

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**用途 / Purpose:** 当 `character portrait pop up opened` 事件触发时调用此方法。

### OnCharacterPortraitPopUpClosed
`public override void OnCharacterPortraitPopUpClosed()`

**用途 / Purpose:** 当 `character portrait pop up closed` 事件触发时调用此方法。

### OnPlayerStartTalkFromMenu
`public override void OnPlayerStartTalkFromMenu(Hero hero)`

**用途 / Purpose:** 当 `player start talk from menu` 事件触发时调用此方法。

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**用途 / Purpose:** 当 `game menu option selected` 事件触发时调用此方法。

### OnPlayerStartRecruitment
`public override void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**用途 / Purpose:** 当 `player start recruitment` 事件触发时调用此方法。

### OnBeforePlayerCharacterChanged
`public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**用途 / Purpose:** 当 `before player character changed` 事件触发时调用此方法。

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)`

**用途 / Purpose:** 当 `player character changed` 事件触发时调用此方法。

### OnClanLeaderChanged
`public override void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**用途 / Purpose:** 当 `clan leader changed` 事件触发时调用此方法。

### OnSiegeEventStarted
`public override void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**用途 / Purpose:** 当 `siege event started` 事件触发时调用此方法。

### OnPlayerSiegeStarted
`public override void OnPlayerSiegeStarted()`

**用途 / Purpose:** 当 `player siege started` 事件触发时调用此方法。

### OnSiegeEventEnded
`public override void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**用途 / Purpose:** 当 `siege event ended` 事件触发时调用此方法。

### OnSiegeAftermathApplied
`public override void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**用途 / Purpose:** 当 `siege aftermath applied` 事件触发时调用此方法。

### OnSiegeBombardmentHit
`public override void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**用途 / Purpose:** 当 `siege bombardment hit` 事件触发时调用此方法。

### OnSiegeBombardmentWallHit
`public override void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**用途 / Purpose:** 当 `siege bombardment wall hit` 事件触发时调用此方法。

### OnSiegeEngineDestroyed
`public override void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**用途 / Purpose:** 当 `siege engine destroyed` 事件触发时调用此方法。

### OnTradeRumorIsTaken
`public override void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**用途 / Purpose:** 当 `trade rumor is taken` 事件触发时调用此方法。

### OnCheckForIssue
`public override void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 当 `check for issue` 事件触发时调用此方法。

### OnIssueUpdated
`public override void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver = null)`

**用途 / Purpose:** 当 `issue updated` 事件触发时调用此方法。

### OnTroopsDeserted
`public override void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**用途 / Purpose:** 当 `troops deserted` 事件触发时调用此方法。

### OnTroopRecruited
`public override void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**用途 / Purpose:** 当 `troop recruited` 事件触发时调用此方法。

### OnTroopGivenToSettlement
`public override void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**用途 / Purpose:** 当 `troop given to settlement` 事件触发时调用此方法。

### OnItemSold
`public override void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**用途 / Purpose:** 当 `item sold` 事件触发时调用此方法。

### OnCaravanTransactionCompleted
`public override void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>> itemRosterElements)`

**用途 / Purpose:** 当 `caravan transaction completed` 事件触发时调用此方法。

### OnPrisonerSold
`public override void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**用途 / Purpose:** 当 `prisoner sold` 事件触发时调用此方法。

### OnPartyDisbandStarted
`public override void OnPartyDisbandStarted(MobileParty disbandParty)`

**用途 / Purpose:** 当 `party disband started` 事件触发时调用此方法。

### OnPartyDisbanded
`public override void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**用途 / Purpose:** 当 `party disbanded` 事件触发时调用此方法。

### OnPartyDisbandCanceled
`public override void OnPartyDisbandCanceled(MobileParty disbandParty)`

**用途 / Purpose:** 当 `party disband canceled` 事件触发时调用此方法。

### OnHideoutSpotted
`public override void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**用途 / Purpose:** 当 `hideout spotted` 事件触发时调用此方法。

### OnHideoutDeactivated
`public override void OnHideoutDeactivated(Settlement hideout)`

**用途 / Purpose:** 当 `hideout deactivated` 事件触发时调用此方法。

### OnHeroSharedFoodWithAnother
`public override void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**用途 / Purpose:** 当 `hero shared food with another` 事件触发时调用此方法。

### OnPlayerInventoryExchange
`public override void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>> purchasedItems, List<ValueTuple<ItemRosterElement, int>> soldItems, bool isTrading)`

**用途 / Purpose:** 当 `player inventory exchange` 事件触发时调用此方法。

### OnItemsDiscardedByPlayer
`public override void OnItemsDiscardedByPlayer(ItemRoster discardedItems)`

**用途 / Purpose:** 当 `items discarded by player` 事件触发时调用此方法。

### OnPersuasionProgressCommitted
`public override void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**用途 / Purpose:** 当 `persuasion progress committed` 事件触发时调用此方法。

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**用途 / Purpose:** 当 `quest completed` 事件触发时调用此方法。

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**用途 / Purpose:** 当 `quest started` 事件触发时调用此方法。

### OnItemProduced
`public override void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**用途 / Purpose:** 当 `item produced` 事件触发时调用此方法。

### OnItemConsumed
`public override void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**用途 / Purpose:** 当 `item consumed` 事件触发时调用此方法。

### OnPartyConsumedFood
`public override void OnPartyConsumedFood(MobileParty party)`

**用途 / Purpose:** 当 `party consumed food` 事件触发时调用此方法。

### OnBeforeMainCharacterDied
`public override void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 当 `before main character died` 事件触发时调用此方法。

### OnNewIssueCreated
`public override void OnNewIssueCreated(IssueBase issue)`

**用途 / Purpose:** 当 `new issue created` 事件触发时调用此方法。

### OnIssueOwnerChanged
`public override void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**用途 / Purpose:** 当 `issue owner changed` 事件触发时调用此方法。

### OnGameOver
`public override void OnGameOver()`

**用途 / Purpose:** 当 `game over` 事件触发时调用此方法。

### SiegeCompleted
`public override void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 处理 `siege completed` 相关逻辑。

### AfterSiegeCompleted
`public override void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 处理 `after siege completed` 相关逻辑。

### SiegeEngineBuilt
`public override void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 处理 `siege engine built` 相关逻辑。

### RaidCompleted
`public override void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**用途 / Purpose:** 处理 `raid completed` 相关逻辑。

### ForceVolunteersCompleted
`public override void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**用途 / Purpose:** 处理 `force volunteers completed` 相关逻辑。

### ForceSuppliesCompleted
`public override void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**用途 / Purpose:** 处理 `force supplies completed` 相关逻辑。

### OnHideoutBattleCompleted
`public override void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent)`

**用途 / Purpose:** 当 `hideout battle completed` 事件触发时调用此方法。

### OnClanDestroyed
`public override void OnClanDestroyed(Clan destroyedClan)`

**用途 / Purpose:** 当 `clan destroyed` 事件触发时调用此方法。

### OnNewItemCrafted
`public override void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**用途 / Purpose:** 当 `new item crafted` 事件触发时调用此方法。

### CraftingPartUnlocked
`public override void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**用途 / Purpose:** 处理 `crafting part unlocked` 相关逻辑。

### OnWorkshopInitialized
`public override void OnWorkshopInitialized(Workshop workshop)`

**用途 / Purpose:** 当 `workshop initialized` 事件触发时调用此方法。

### OnWorkshopOwnerChanged
`public override void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**用途 / Purpose:** 当 `workshop owner changed` 事件触发时调用此方法。

### OnWorkshopTypeChanged
`public override void OnWorkshopTypeChanged(Workshop workshop)`

**用途 / Purpose:** 当 `workshop type changed` 事件触发时调用此方法。

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** 当 `before save` 事件触发时调用此方法。

### OnSaveStarted
`public override void OnSaveStarted()`

**用途 / Purpose:** 当 `save started` 事件触发时调用此方法。

### OnSaveOver
`public override void OnSaveOver(bool isSuccessful, string saveName)`

**用途 / Purpose:** 当 `save over` 事件触发时调用此方法。

### OnPrisonerTaken
`public override void OnPrisonerTaken(FlattenedTroopRoster roster)`

**用途 / Purpose:** 当 `prisoner taken` 事件触发时调用此方法。

### OnPrisonerReleased
`public override void OnPrisonerReleased(FlattenedTroopRoster roster)`

**用途 / Purpose:** 当 `prisoner released` 事件触发时调用此方法。

### OnMainPartyPrisonerRecruited
`public override void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**用途 / Purpose:** 当 `main party prisoner recruited` 事件触发时调用此方法。

### OnPrisonerDonatedToSettlement
`public override void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**用途 / Purpose:** 当 `prisoner donated to settlement` 事件触发时调用此方法。

### OnEquipmentSmeltedByHero
`public override void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement smeltedEquipmentElement)`

**用途 / Purpose:** 当 `equipment smelted by hero` 事件触发时调用此方法。

### OnPlayerTradeProfit
`public override void OnPlayerTradeProfit(int profit)`

**用途 / Purpose:** 当 `player trade profit` 事件触发时调用此方法。

### OnHeroChangedClan
`public override void OnHeroChangedClan(Hero hero, Clan oldClan)`

**用途 / Purpose:** 当 `hero changed clan` 事件触发时调用此方法。

### OnHeroGetsBusy
`public override void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**用途 / Purpose:** 当 `hero gets busy` 事件触发时调用此方法。

### OnCollectLootItems
`public override void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**用途 / Purpose:** 当 `collect loot items` 事件触发时调用此方法。

### OnLootDistributedToParty
`public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**用途 / Purpose:** 当 `loot distributed to party` 事件触发时调用此方法。

### OnHeroTeleportationRequested
`public override void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**用途 / Purpose:** 当 `hero teleportation requested` 事件触发时调用此方法。

### OnPartyLeaderChangeOfferCanceled
`public override void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**用途 / Purpose:** 当 `party leader change offer canceled` 事件触发时调用此方法。

### OnPartyLeaderChanged
`public override void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**用途 / Purpose:** 当 `party leader changed` 事件触发时调用此方法。

### OnClanInfluenceChanged
`public override void OnClanInfluenceChanged(Clan clan, float change)`

**用途 / Purpose:** 当 `clan influence changed` 事件触发时调用此方法。

### OnPlayerPartyKnockedOrKilledTroop
`public override void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**用途 / Purpose:** 当 `player party knocked or killed troop` 事件触发时调用此方法。

### OnPlayerEarnedGoldFromAsset
`public override void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**用途 / Purpose:** 当 `player earned gold from asset` 事件触发时调用此方法。

### OnMainPartyStarving
`public override void OnMainPartyStarving()`

**用途 / Purpose:** 当 `main party starving` 事件触发时调用此方法。

### OnPlayerJoinedTournament
`public override void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**用途 / Purpose:** 当 `player joined tournament` 事件触发时调用此方法。

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**用途 / Purpose:** 当 `hero unregistered` 事件触发时调用此方法。

### OnConfigChanged
`public override void OnConfigChanged()`

**用途 / Purpose:** 当 `config changed` 事件触发时调用此方法。

### OnCraftingOrderCompleted
`public override void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**用途 / Purpose:** 当 `crafting order completed` 事件触发时调用此方法。

### OnItemsRefined
`public override void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** 当 `items refined` 事件触发时调用此方法。

### OnHeirSelectionRequested
`public override void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**用途 / Purpose:** 当 `heir selection requested` 事件触发时调用此方法。

### OnHeirSelectionOver
`public override void OnHeirSelectionOver(Hero selectedHero)`

**用途 / Purpose:** 当 `heir selection over` 事件触发时调用此方法。

### OnMobilePartyRaftStateChanged
`public override void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**用途 / Purpose:** 当 `mobile party raft state changed` 事件触发时调用此方法。

### OnCharacterCreationInitialized
`public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 当 `character creation initialized` 事件触发时调用此方法。

### OnShipDestroyed
`public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**用途 / Purpose:** 当 `ship destroyed` 事件触发时调用此方法。

### OnShipOwnerChanged
`public override void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)`

**用途 / Purpose:** 当 `ship owner changed` 事件触发时调用此方法。

### OnShipRepaired
`public override void OnShipRepaired(Ship ship, Settlement repairPort)`

**用途 / Purpose:** 当 `ship repaired` 事件触发时调用此方法。

### OnShipCreated
`public override void OnShipCreated(Ship ship, Settlement createdSettlement)`

**用途 / Purpose:** 当 `ship created` 事件触发时调用此方法。

### OnFigureheadUnlocked
`public override void OnFigureheadUnlocked(Figurehead figurehead)`

**用途 / Purpose:** 当 `figurehead unlocked` 事件触发时调用此方法。

### OnPartyLeftArmy
`public override void OnPartyLeftArmy(MobileParty party, Army army)`

**用途 / Purpose:** 当 `party left army` 事件触发时调用此方法。

### OnPartyAddedToMapEvent
`public override void OnPartyAddedToMapEvent(PartyBase partyBase)`

**用途 / Purpose:** 当 `party added to map event` 事件触发时调用此方法。

### OnIncidentResolved
`public override void OnIncidentResolved(Incident incident)`

**用途 / Purpose:** 当 `incident resolved` 事件触发时调用此方法。

### OnMobilePartyNavigationStateChanged
`public override void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**用途 / Purpose:** 当 `mobile party navigation state changed` 事件触发时调用此方法。

### OnMobilePartyJoinedToSiegeEvent
`public override void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**用途 / Purpose:** 当 `mobile party joined to siege event` 事件触发时调用此方法。

### OnMobilePartyLeftSiegeEvent
`public override void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**用途 / Purpose:** 当 `mobile party left siege event` 事件触发时调用此方法。

### OnBlockadeActivated
`public override void OnBlockadeActivated(SiegeEvent siegeEvent)`

**用途 / Purpose:** 当 `blockade activated` 事件触发时调用此方法。

### OnBlockadeDeactivated
`public override void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**用途 / Purpose:** 当 `blockade deactivated` 事件触发时调用此方法。

### OnMapMarkerCreated
`public override void OnMapMarkerCreated(MapMarker mapMarker)`

**用途 / Purpose:** 当 `map marker created` 事件触发时调用此方法。

### OnMapMarkerRemoved
`public override void OnMapMarkerRemoved(MapMarker mapMarker)`

**用途 / Purpose:** 当 `map marker removed` 事件触发时调用此方法。

### OnAllianceStarted
`public override void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** 当 `alliance started` 事件触发时调用此方法。

### OnAllianceEnded
`public override void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** 当 `alliance ended` 事件触发时调用此方法。

### OnCallToWarAgreementStarted
`public override void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** 当 `call to war agreement started` 事件触发时调用此方法。

### OnCallToWarAgreementEnded
`public override void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** 当 `call to war agreement ended` 事件触发时调用此方法。

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero lead party`。

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero marry`。

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero equipment be changed`。

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `be governor or have party role`。

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero die`。

### CanPlayerMeetWithHeroAfterConversation
`public override void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player meet with hero after conversation`。

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `hero become prisoner`。

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `move to settlement`。

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** 判断当前对象是否可以执行 `have campaign issues`。

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**用途 / Purpose:** 处理 `is settlement busy` 相关逻辑。

### OnMapEventContinuityNeedsUpdate
`public override void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**用途 / Purpose:** 当 `map event continuity needs update` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new CampaignEvents();
value.RemoveListeners(obj);
```

## 参见

- [完整类目录](../catalog)