---
title: "CampaignEventReceiver"
description: "CampaignEventReceiver：TaleWorlds.CampaignSystem 的 public 类；公开成员 277 个（方法 277、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignEventReceiver.cs。"
---
# CampaignEventReceiver

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`

## 概述

CampaignEventReceiver 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignEventReceiver.cs。它是一个 public 类（abstract），继承链为 CampaignEventReceiver。public/protected 成员共 277 个：277 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignEventReceiver 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 CampaignEventReceiver。成员构成以方法为主（方法 277/277，属性 0/277），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignEventReceiver.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RemoveListeners` | `public virtual void RemoveListeners(object o)` | 方法 |
| `OnCharacterCreationIsOver` | `public virtual void OnCharacterCreationIsOver()` | 方法 |
| `OnHeroLevelledUp` | `public virtual void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)` | 方法 |
| `OnHomeHideoutChanged` | `public virtual void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)` | 方法 |
| `OnHeroGainedSkill` | `public virtual void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)` | 方法 |
| `OnHeroCreated` | `public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)` | 方法 |
| `OnHeroActivated` | `public virtual void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)` | 方法 |
| `OnHeroWounded` | `public virtual void OnHeroWounded(Hero woundedHero)` | 方法 |
| `OnHeroRelationChanged` | `public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)` | 方法 |
| `OnQuestLogAdded` | `public virtual void OnQuestLogAdded(QuestBase quest, bool hideInformation)` | 方法 |
| `OnIssueLogAdded` | `public virtual void OnIssueLogAdded(IssueBase issue, bool hideInformation)` | 方法 |
| `OnClanTierChanged` | `public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)` | 方法 |
| `OnClanChangedKingdom` | `public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)` | 方法 |
| `OnClanDefected` | `public virtual void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)` | 方法 |
| `OnClanCreated` | `public virtual void OnClanCreated(Clan clan, bool isCompanion)` | 方法 |
| `OnHeroJoinedParty` | `public virtual void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)` | 方法 |
| `OnKingdomDecisionAdded` | `public virtual void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)` | 方法 |
| `OnKingdomDecisionCancelled` | `public virtual void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)` | 方法 |
| `OnKingdomDecisionConcluded` | `public virtual void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)` | 方法 |
| `OnHeroOrPartyTradedGold` | `public virtual void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase>giver, ValueTuple<Hero, PartyBase>recipient, ValueTuple<int, string>goldAmount, bool showNotification)` | 方法 |
| `OnHeroOrPartyGaveItem` | `public virtual void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase>giver, ValueTuple<Hero, PartyBase>receiver, ItemRosterElement itemRosterElement, bool showNotification)` | 方法 |
| `OnBanditPartyRecruited` | `public virtual void OnBanditPartyRecruited(MobileParty banditParty)` | 方法 |
| `OnArmyCreated` | `public virtual void OnArmyCreated(Army army)` | 方法 |
| `OnPartyAttachedAnotherParty` | `public virtual void OnPartyAttachedAnotherParty(MobileParty mobileParty)` | 方法 |
| `OnNearbyPartyAddedToPlayerMapEvent` | `public virtual void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)` | 方法 |
| `OnArmyDispersed` | `public virtual void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)` | 方法 |
| `OnArmyGathered` | `public virtual void OnArmyGathered(Army army, IMapPoint gatheringPoint)` | 方法 |
| `OnPerkOpened` | `public virtual void OnPerkOpened(Hero hero, PerkObject perk)` | 方法 |
| `OnPerkReset` | `public virtual void OnPerkReset(Hero hero, PerkObject perk)` | 方法 |
| `OnPlayerTraitChanged` | `public virtual void OnPlayerTraitChanged(TraitObject trait, int previousLevel)` | 方法 |
| `OnVillageStateChanged` | `public virtual void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)` | 方法 |
| `OnSettlementEntered` | `public virtual void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | 方法 |
| `OnAfterSettlementEntered` | `public virtual void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | 方法 |
| `OnBeforeSettlementEntered` | `public virtual void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | 方法 |
| `OnMercenaryTroopChangedInTown` | `public virtual void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)` | 方法 |
| `OnMercenaryNumberChangedInTown` | `public virtual void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)` | 方法 |
| `OnAlleyOwnerChanged` | `public virtual void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)` | 方法 |
| `OnAlleyClearedByPlayer` | `public virtual void OnAlleyClearedByPlayer(Alley alley)` | 方法 |
| `OnAlleyOccupiedByPlayer` | `public virtual void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)` | 方法 |
| `OnRomanticStateChanged` | `public virtual void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)` | 方法 |
| `OnBeforeHeroesMarried` | `public virtual void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)` | 方法 |
| `OnPlayerEliminatedFromTournament` | `public virtual void OnPlayerEliminatedFromTournament(int round, Town town)` | 方法 |
| `OnPlayerStartedTournamentMatch` | `public virtual void OnPlayerStartedTournamentMatch(Town town)` | 方法 |
| `OnTournamentStarted` | `public virtual void OnTournamentStarted(Town town)` | 方法 |
| `OnTournamentFinished` | `public virtual void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject>participants, Town town, ItemObject prize)` | 方法 |
| `OnTournamentCancelled` | `public virtual void OnTournamentCancelled(Town town)` | 方法 |
| `OnWarDeclared` | `public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` | 方法 |
| `OnMakePeace` | `public virtual void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)` | 方法 |
| `OnKingdomCreated` | `public virtual void OnKingdomCreated(Kingdom createdKingdom)` | 方法 |
| `OnHeroOccupationChanged` | `public virtual void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)` | 方法 |
| `OnKingdomDestroyed` | `public virtual void OnKingdomDestroyed(Kingdom kingdom)` | 方法 |
| `CanKingdomBeDiscontinued` | `public virtual void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)` | 方法 |
| `OnBarterAccepted` | `public virtual void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable>barters)` | 方法 |
| `OnBarterCanceled` | `public virtual void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable>barters)` | 方法 |
| `OnStartBattle` | `public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)` | 方法 |
| `OnRebellionFinished` | `public virtual void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)` | 方法 |
| `TownRebelliousStateChanged` | `public virtual void TownRebelliousStateChanged(Town town, bool rebelliousState)` | 方法 |
| `OnRebelliousClanDisbandedAtSettlement` | `public virtual void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)` | 方法 |
| `OnItemsLooted` | `public virtual void OnItemsLooted(MobileParty mobileParty, ItemRoster items)` | 方法 |
| `OnMobilePartyDestroyed` | `public virtual void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | 方法 |
| `OnMobilePartyCreated` | `public virtual void OnMobilePartyCreated(MobileParty party)` | 方法 |
| `OnMapInteractableCreated` | `public virtual void OnMapInteractableCreated(IInteractablePoint interactable)` | 方法 |
| `OnMapInteractableDestroyed` | `public virtual void OnMapInteractableDestroyed(IInteractablePoint interactable)` | 方法 |
| `OnMobilePartyQuestStatusChanged` | `public virtual void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)` | 方法 |
| `OnHeroKilled` | `public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | 方法 |
| `OnBeforeHeroKilled` | `public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | 方法 |
| `OnChildEducationCompleted` | `public virtual void OnChildEducationCompleted(Hero hero, int age)` | 方法 |
| `OnHeroComesOfAge` | `public virtual void OnHeroComesOfAge(Hero hero)` | 方法 |
| `OnHeroReachesTeenAge` | `public virtual void OnHeroReachesTeenAge(Hero hero)` | 方法 |
| `OnHeroGrowsOutOfInfancy` | `public virtual void OnHeroGrowsOutOfInfancy(Hero hero)` | 方法 |
| `OnCharacterDefeated` | `public virtual void OnCharacterDefeated(Hero winner, Hero loser)` | 方法 |
| `OnHeroPrisonerTaken` | `public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)` | 方法 |
| `OnHeroPrisonerReleased` | `public virtual void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)` | 方法 |
| `OnCharacterBecameFugitive` | `public virtual void OnCharacterBecameFugitive(Hero hero, bool showNotification)` | 方法 |
| `OnPlayerMetHero` | `public virtual void OnPlayerMetHero(Hero hero)` | 方法 |
| `OnPlayerLearnsAboutHero` | `public virtual void OnPlayerLearnsAboutHero(Hero hero)` | 方法 |
| `OnRenownGained` | `public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)` | 方法 |
| `OnCrimeRatingChanged` | `public virtual void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)` | 方法 |
| `OnNewCompanionAdded` | `public virtual void OnNewCompanionAdded(Hero newCompanion)` | 方法 |
| `OnAfterMissionStarted` | `public virtual void OnAfterMissionStarted(IMission iMission)` | 方法 |
| `OnGameMenuOpened` | `public virtual void OnGameMenuOpened(MenuCallbackArgs args)` | 方法 |
| `OnVillageBecomeNormal` | `public virtual void OnVillageBecomeNormal(Village village)` | 方法 |
| `OnVillageBeingRaided` | `public virtual void OnVillageBeingRaided(Village village)` | 方法 |
| `OnVillageLooted` | `public virtual void OnVillageLooted(Village village)` | 方法 |
| `OnAgentJoinedConversation` | `public virtual void OnAgentJoinedConversation(IAgent agent)` | 方法 |
| `OnConversationEnded` | `public virtual void OnConversationEnded(IEnumerable<CharacterObject>characters)` | 方法 |
| `OnMapEventEnded` | `public virtual void OnMapEventEnded(MapEvent mapEvent)` | 方法 |
| `OnMapEventStarted` | `public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)` | 方法 |
| `OnRansomOfferedToPlayer` | `public virtual void OnRansomOfferedToPlayer(Hero captiveHero)` | 方法 |
| `OnPrisonersChangeInSettlement` | `public virtual void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)` | 方法 |
| `OnMissionStarted` | `public virtual void OnMissionStarted(IMission mission)` | 方法 |
| `OnRansomOfferCancelled` | `public virtual void OnRansomOfferCancelled(Hero captiveHero)` | 方法 |
| `OnPeaceOfferedToPlayer` | `public virtual void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDuration)` | 方法 |
| `OnTradeAgreementSigned` | `public virtual void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)` | 方法 |
| `OnPeaceOfferResolved` | `public virtual void OnPeaceOfferResolved(IFaction opponentFaction)` | 方法 |
| `OnMarriageOfferedToPlayer` | `public virtual void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)` | 方法 |
| `OnMarriageOfferCanceled` | `public virtual void OnMarriageOfferCanceled(Hero suitor, Hero maiden)` | 方法 |
| `OnVassalOrMercenaryServiceOfferedToPlayer` | `public virtual void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)` | 方法 |
| `OnVassalOrMercenaryServiceOfferCanceled` | `public virtual void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)` | 方法 |
| `OnPlayerBoardGameOver` | `public virtual void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)` | 方法 |
| `OnCommonAreaStateChanged` | `public virtual void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)` | 方法 |
| `BeforeMissionOpened` | `public virtual void BeforeMissionOpened()` | 方法 |
| `OnPartyRemoved` | `public virtual void OnPartyRemoved(PartyBase party)` | 方法 |
| `OnPartySizeChanged` | `public virtual void OnPartySizeChanged(PartyBase party)` | 方法 |
| `OnSettlementOwnerChanged` | `public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` | 方法 |
| `OnGovernorChanged` | `public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)` | 方法 |
| `OnSettlementLeft` | `public virtual void OnSettlementLeft(MobileParty party, Settlement settlement)` | 方法 |
| `Tick` | `public virtual void Tick(float dt)` | 方法 |
| `OnSessionStart` | `public virtual void OnSessionStart(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnAfterSessionStart` | `public virtual void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnNewGameCreated` | `public virtual void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnGameLoaded` | `public virtual void OnGameLoaded(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnGameEarlyLoaded` | `public virtual void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)` | 方法 |
| `OnPlayerTradeProfit` | `public virtual void OnPlayerTradeProfit(int profit)` | 方法 |
| `OnRulingClanChanged` | `public virtual void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)` | 方法 |
| `OnPrisonerReleased` | `public virtual void OnPrisonerReleased(FlattenedTroopRoster roster)` | 方法 |
| `OnGameLoadFinished` | `public virtual void OnGameLoadFinished()` | 方法 |
| `OnPartyJoinedArmy` | `public virtual void OnPartyJoinedArmy(MobileParty mobileParty)` | 方法 |
| `OnPartyRemovedFromArmy` | `public virtual void OnPartyRemovedFromArmy(MobileParty mobileParty)` | 方法 |
| `OnArmyOverlaySetDirty` | `public virtual void OnArmyOverlaySetDirty()` | 方法 |
| `OnPlayerDesertedBattle` | `public virtual void OnPlayerDesertedBattle(int sacrificedMenCount)` | 方法 |
| `OnPlayerArmyLeaderChangedBehavior` | `public virtual void OnPlayerArmyLeaderChangedBehavior()` | 方法 |
| `MissionTick` | `public virtual void MissionTick(float dt)` | 方法 |
| `OnChildConceived` | `public virtual void OnChildConceived(Hero mother)` | 方法 |
| `OnGivenBirth` | `public virtual void OnGivenBirth(Hero mother, List<Hero>aliveChildren, int stillbornCount)` | 方法 |
| `OnUnitRecruited` | `public virtual void OnUnitRecruited(CharacterObject character, int amount)` | 方法 |
| `OnPlayerBattleEnd` | `public virtual void OnPlayerBattleEnd(MapEvent mapEvent)` | 方法 |
| `OnMissionEnded` | `public virtual void OnMissionEnded(IMission mission)` | 方法 |
| `TickPartialHourlyAi` | `public virtual void TickPartialHourlyAi(MobileParty party)` | 方法 |
| `QuarterDailyPartyTick` | `public virtual void QuarterDailyPartyTick(MobileParty party)` | 方法 |
| `AiHourlyTick` | `public virtual void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)` | 方法 |
| `HourlyTick` | `public virtual void HourlyTick()` | 方法 |
| `QuarterHourlyTick` | `public virtual void QuarterHourlyTick()` | 方法 |
| `HourlyTickParty` | `public virtual void HourlyTickParty(MobileParty mobileParty)` | 方法 |
| `HourlyTickSettlement` | `public virtual void HourlyTickSettlement(Settlement settlement)` | 方法 |
| `HourlyTickClan` | `public virtual void HourlyTickClan(Clan clan)` | 方法 |
| `DailyTick` | `public virtual void DailyTick()` | 方法 |
| `DailyTickParty` | `public virtual void DailyTickParty(MobileParty mobileParty)` | 方法 |
| `DailyTickTown` | `public virtual void DailyTickTown(Town town)` | 方法 |
| `DailyTickSettlement` | `public virtual void DailyTickSettlement(Settlement settlement)` | 方法 |
| `DailyTickClan` | `public virtual void DailyTickClan(Clan clan)` | 方法 |
| `OnPlayerBodyPropertiesChanged` | `public virtual void OnPlayerBodyPropertiesChanged()` | 方法 |
| `WeeklyTick` | `public virtual void WeeklyTick()` | 方法 |
| `CollectAvailableTutorials` | `public virtual void CollectAvailableTutorials(ref List<CampaignTutorial>tutorials)` | 方法 |
| `DailyTickHero` | `public virtual void DailyTickHero(Hero hero)` | 方法 |
| `OnTutorialCompleted` | `public virtual void OnTutorialCompleted(string tutorial)` | 方法 |
| `OnBuildingLevelChanged` | `public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)` | 方法 |
| `BeforeGameMenuOpened` | `public virtual void BeforeGameMenuOpened(MenuCallbackArgs args)` | 方法 |
| `AfterGameMenuInitialized` | `public virtual void AfterGameMenuInitialized(MenuCallbackArgs args)` | 方法 |
| `OnBarterablesRequested` | `public virtual void OnBarterablesRequested(BarterData args)` | 方法 |
| `OnPartyVisibilityChanged` | `public virtual void OnPartyVisibilityChanged(PartyBase party)` | 方法 |
| `OnCompanionRemoved` | `public virtual void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)` | 方法 |
| `TrackDetected` | `public virtual void TrackDetected(Track track)` | 方法 |
| `TrackLost` | `public virtual void TrackLost(Track track)` | 方法 |
| `LocationCharactersAreReadyToSpawn` | `public virtual void LocationCharactersAreReadyToSpawn(Dictionary<string, int>unusedUsablePointCount)` | 方法 |
| `LocationCharactersSimulated` | `public virtual void LocationCharactersSimulated()` | 方法 |
| `OnBeforePlayerAgentSpawn` | `public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)` | 方法 |
| `OnPlayerAgentSpawned` | `public virtual void OnPlayerAgentSpawned()` | 方法 |
| `OnPlayerUpgradedTroops` | `public virtual void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)` | 方法 |
| `OnHeroCombatHit` | `public virtual void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)` | 方法 |
| `OnCharacterPortraitPopUpOpened` | `public virtual void OnCharacterPortraitPopUpOpened(CharacterObject character)` | 方法 |
| `OnCharacterPortraitPopUpClosed` | `public virtual void OnCharacterPortraitPopUpClosed()` | 方法 |
| `OnPlayerStartTalkFromMenu` | `public virtual void OnPlayerStartTalkFromMenu(Hero hero)` | 方法 |
| `OnGameMenuOptionSelected` | `public virtual void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)` | 方法 |
| `OnPlayerStartRecruitment` | `public virtual void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)` | 方法 |
| `OnBeforePlayerCharacterChanged` | `public virtual void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)` | 方法 |
| `OnPlayerCharacterChanged` | `public virtual void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)` | 方法 |
| `OnClanLeaderChanged` | `public virtual void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)` | 方法 |
| `OnSiegeEventStarted` | `public virtual void OnSiegeEventStarted(SiegeEvent siegeEvent)` | 方法 |
| `OnPlayerSiegeStarted` | `public virtual void OnPlayerSiegeStarted()` | 方法 |
| `OnSiegeEventEnded` | `public virtual void OnSiegeEventEnded(SiegeEvent siegeEvent)` | 方法 |
| `OnSiegeAftermathApplied` | `public virtual void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float>partyContributions)` | 方法 |
| `OnSiegeBombardmentHit` | `public virtual void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)` | 方法 |
| `OnSiegeBombardmentWallHit` | `public virtual void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)` | 方法 |
| `OnSiegeEngineDestroyed` | `public virtual void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)` | 方法 |
| `OnTradeRumorIsTaken` | `public virtual void OnTradeRumorIsTaken(List<TradeRumor>newRumors, Settlement sourceSettlement = null)` | 方法 |
| `OnCheckForIssue` | `public virtual void OnCheckForIssue(Hero hero)` | 方法 |
| `OnIssueUpdated` | `public virtual void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)` | 方法 |
| `OnTroopsDeserted` | `public virtual void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)` | 方法 |
| `OnTroopRecruited` | `public virtual void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)` | 方法 |
| `OnTroopGivenToSettlement` | `public virtual void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)` | 方法 |
| `OnItemSold` | `public virtual void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)` | 方法 |
| `OnCaravanTransactionCompleted` | `public virtual void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>>itemRosterElements)` | 方法 |
| `OnPrisonerSold` | `public virtual void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)` | 方法 |
| `OnPartyDisbanded` | `public virtual void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)` | 方法 |
| `OnPartyDisbandStarted` | `public virtual void OnPartyDisbandStarted(MobileParty disbandParty)` | 方法 |
| `OnPartyDisbandCanceled` | `public virtual void OnPartyDisbandCanceled(MobileParty disbandParty)` | 方法 |
| `OnHideoutSpotted` | `public virtual void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)` | 方法 |
| `OnHideoutDeactivated` | `public virtual void OnHideoutDeactivated(Settlement hideout)` | 方法 |
| `OnHideoutBattleCompleted` | `public virtual void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)` | 方法 |
| `OnPlayerInventoryExchange` | `public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>purchasedItems, List<ValueTuple<ItemRosterElement, int>>soldItems, bool isTrading)` | 方法 |
| `OnItemsDiscardedByPlayer` | `public virtual void OnItemsDiscardedByPlayer(ItemRoster roster)` | 方法 |
| `OnPersuasionProgressCommitted` | `public virtual void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult>progress)` | 方法 |
| `OnHeroSharedFoodWithAnother` | `public virtual void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)` | 方法 |
| `OnQuestCompleted` | `public virtual void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)` | 方法 |
| `OnQuestStarted` | `public virtual void OnQuestStarted(QuestBase quest)` | 方法 |
| `OnItemProduced` | `public virtual void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)` | 方法 |
| `OnItemConsumed` | `public virtual void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)` | 方法 |
| `OnPartyConsumedFood` | `public virtual void OnPartyConsumedFood(MobileParty party)` | 方法 |
| `SiegeCompleted` | `public virtual void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)` | 方法 |
| `AfterSiegeCompleted` | `public virtual void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)` | 方法 |
| `SiegeEngineBuilt` | `public virtual void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)` | 方法 |
| `RaidCompleted` | `public virtual void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)` | 方法 |
| `ForceSuppliesCompleted` | `public virtual void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)` | 方法 |
| `ForceVolunteersCompleted` | `public virtual void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)` | 方法 |
| `OnBeforeMainCharacterDied` | `public virtual void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | 方法 |
| `OnGameOver` | `public virtual void OnGameOver()` | 方法 |
| `OnClanDestroyed` | `public virtual void OnClanDestroyed(Clan destroyedClan)` | 方法 |
| `OnNewIssueCreated` | `public virtual void OnNewIssueCreated(IssueBase issue)` | 方法 |
| `OnIssueOwnerChanged` | `public virtual void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)` | 方法 |
| `OnNewItemCrafted` | `public virtual void OnNewItemCrafted(ItemObject itemObject)` | 方法 |
| `OnWorkshopInitialized` | `public virtual void OnWorkshopInitialized(Workshop workshop)` | 方法 |
| `OnWorkshopOwnerChanged` | `public virtual void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)` | 方法 |
| `OnWorkshopTypeChanged` | `public virtual void OnWorkshopTypeChanged(Workshop workshop)` | 方法 |
| `CraftingPartUnlocked` | `public virtual void CraftingPartUnlocked(CraftingPiece craftingPiece)` | 方法 |
| `OnNewItemCrafted` | `public virtual void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)` | 方法 |
| `OnEquipmentSmeltedByHero` | `public virtual void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)` | 方法 |
| `OnBeforeSave` | `public virtual void OnBeforeSave()` | 方法 |
| `OnMainPartyPrisonerRecruited` | `public virtual void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)` | 方法 |
| `OnPrisonerTaken` | `public virtual void OnPrisonerTaken(FlattenedTroopRoster roster)` | 方法 |
| `OnPrisonerDonatedToSettlement` | `public virtual void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)` | 方法 |
| `CanMoveToSettlement` | `public virtual void CanMoveToSettlement(Hero hero, ref bool result)` | 方法 |
| `OnHeroChangedClan` | `public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)` | 方法 |
| `CanHeroDie` | `public virtual void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)` | 方法 |
| `CanPlayerMeetWithHeroAfterConversation` | `public virtual void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)` | 方法 |
| `CanHeroBecomePrisoner` | `public virtual void CanHeroBecomePrisoner(Hero hero, ref bool result)` | 方法 |
| `CanBeGovernorOrHavePartyRole` | `public virtual void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)` | 方法 |
| `OnSaveOver` | `public virtual void OnSaveOver(bool isSuccessful, string saveName)` | 方法 |
| `CollectMetadataEntries` | `public virtual void CollectMetadataEntries(List<KeyValuePair<string, string>>pairs)` | 方法 |
| `OnSaveStarted` | `public virtual void OnSaveStarted()` | 方法 |
| `CanHeroMarry` | `public virtual void CanHeroMarry(Hero hero, ref bool result)` | 方法 |
| `OnHeroTeleportationRequested` | `public virtual void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)` | 方法 |
| `OnPartyLeaderChangeOfferCanceled` | `public virtual void OnPartyLeaderChangeOfferCanceled(MobileParty party)` | 方法 |
| `OnPartyLeaderChanged` | `public virtual void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)` | 方法 |
| `OnClanInfluenceChanged` | `public virtual void OnClanInfluenceChanged(Clan clan, float change)` | 方法 |
| `OnPlayerPartyKnockedOrKilledTroop` | `public virtual void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)` | 方法 |
| `OnPlayerEarnedGoldFromAsset` | `public virtual void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)` | 方法 |
| `OnClanEarnedGoldFromTribute` | `public virtual void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)` | 方法 |
| `OnCollectLootItems` | `public virtual void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | 方法 |
| `OnLootDistributedToParty` | `public virtual void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)` | 方法 |
| `OnPlayerJoinedTournament` | `public virtual void OnPlayerJoinedTournament(Town town, bool isParticipant)` | 方法 |
| `OnConfigChanged` | `public virtual void OnConfigChanged()` | 方法 |
| `OnMobilePartyRaftStateChanged` | `public virtual void OnMobilePartyRaftStateChanged(MobileParty mobileParty)` | 方法 |
| `OnCharacterCreationInitialized` | `public virtual void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)` | 方法 |
| `OnShipDestroyed` | `public virtual void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)` | 方法 |
| `OnShipOwnerChanged` | `public virtual void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail shipOwnerChangeDetail)` | 方法 |
| `OnFigureheadUnlocked` | `public virtual void OnFigureheadUnlocked(Figurehead figurehead)` | 方法 |
| `OnShipRepaired` | `public virtual void OnShipRepaired(Ship ship, Settlement repairPort)` | 方法 |
| `OnPartyLeftArmy` | `public virtual void OnPartyLeftArmy(MobileParty party, Army army)` | 方法 |
| `OnIncidentResolved` | `public virtual void OnIncidentResolved(Incident incident)` | 方法 |
| `OnPartyAddedToMapEvent` | `public virtual void OnPartyAddedToMapEvent(PartyBase partyBase)` | 方法 |
| `OnMobilePartyNavigationStateChanged` | `public virtual void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)` | 方法 |
| `OnMobilePartyJoinedToSiegeEvent` | `public virtual void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)` | 方法 |
| `OnMobilePartyLeftSiegeEvent` | `public virtual void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)` | 方法 |
| `OnBlockadeActivated` | `public virtual void OnBlockadeActivated(SiegeEvent siegeEvent)` | 方法 |
| `OnBlockadeDeactivated` | `public virtual void OnBlockadeDeactivated(SiegeEvent siegeEvent)` | 方法 |
| `OnShipCreated` | `public virtual void OnShipCreated(Ship ship, Settlement createdSettlement)` | 方法 |
| `OnMercenaryServiceStarted` | `public virtual void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)` | 方法 |
| `OnMercenaryServiceEnded` | `public virtual void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)` | 方法 |
| `OnMapMarkerCreated` | `public virtual void OnMapMarkerCreated(MapMarker mapMarker)` | 方法 |
| `OnMapMarkerRemoved` | `public virtual void OnMapMarkerRemoved(MapMarker mapMarker)` | 方法 |
| `OnAllianceStarted` | `public virtual void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `OnAllianceEnded` | `public virtual void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `OnCallToWarAgreementStarted` | `public virtual void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `OnCallToWarAgreementEnded` | `public virtual void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | 方法 |
| `CanHeroLeadParty` | `public virtual void CanHeroLeadParty(Hero hero, ref bool result)` | 方法 |
| `OnCraftingOrderCompleted` | `public virtual void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)` | 方法 |
| `OnItemsRefined` | `public virtual void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)` | 方法 |
| `OnMapEventContinuityNeedsUpdate` | `public virtual void OnMapEventContinuityNeedsUpdate(IFaction faction)` | 方法 |
| `OnHeirSelectionOver` | `public virtual void OnHeirSelectionOver(Hero selectedHeir)` | 方法 |
| `OnHeirSelectionRequested` | `public virtual void OnHeirSelectionRequested(Dictionary<Hero, int>heirApparents)` | 方法 |
| `OnMainPartyStarving` | `public virtual void OnMainPartyStarving()` | 方法 |
| `OnHeroGetsBusy` | `public virtual void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)` | 方法 |
| `CanHeroEquipmentBeChanged` | `public virtual void CanHeroEquipmentBeChanged(Hero hero, ref bool result)` | 方法 |
| `CanHaveCampaignIssues` | `public virtual void CanHaveCampaignIssues(Hero hero, ref bool result)` | 方法 |
| `IsSettlementBusy` | `public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)` | 方法 |
| `OnHeroUnregistered` | `public virtual void OnHeroUnregistered(Hero hero)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
