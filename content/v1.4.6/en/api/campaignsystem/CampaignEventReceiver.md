---
title: "CampaignEventReceiver"
description: "CampaignEventReceiver: a public class in TaleWorlds.CampaignSystem; 277 exposed members (277 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignEventReceiver.cs."
---
# CampaignEventReceiver

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`

## Overview

CampaignEventReceiver lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignEventReceiver.cs. It is a public class (abstract); the inheritance chain is CampaignEventReceiver. It exposes 277 public/protected members: 277 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignEventReceiver is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain CampaignEventReceiver. The surface is method-led (methods 277/277, properties 0/277), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignEventReceiver.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RemoveListeners` | `public virtual void RemoveListeners(object o)` | method |
| `OnCharacterCreationIsOver` | `public virtual void OnCharacterCreationIsOver()` | method |
| `OnHeroLevelledUp` | `public virtual void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)` | method |
| `OnHomeHideoutChanged` | `public virtual void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)` | method |
| `OnHeroGainedSkill` | `public virtual void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)` | method |
| `OnHeroCreated` | `public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)` | method |
| `OnHeroActivated` | `public virtual void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)` | method |
| `OnHeroWounded` | `public virtual void OnHeroWounded(Hero woundedHero)` | method |
| `OnHeroRelationChanged` | `public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)` | method |
| `OnQuestLogAdded` | `public virtual void OnQuestLogAdded(QuestBase quest, bool hideInformation)` | method |
| `OnIssueLogAdded` | `public virtual void OnIssueLogAdded(IssueBase issue, bool hideInformation)` | method |
| `OnClanTierChanged` | `public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)` | method |
| `OnClanChangedKingdom` | `public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)` | method |
| `OnClanDefected` | `public virtual void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)` | method |
| `OnClanCreated` | `public virtual void OnClanCreated(Clan clan, bool isCompanion)` | method |
| `OnHeroJoinedParty` | `public virtual void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)` | method |
| `OnKingdomDecisionAdded` | `public virtual void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)` | method |
| `OnKingdomDecisionCancelled` | `public virtual void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)` | method |
| `OnKingdomDecisionConcluded` | `public virtual void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)` | method |
| `OnHeroOrPartyTradedGold` | `public virtual void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase>giver, ValueTuple<Hero, PartyBase>recipient, ValueTuple<int, string>goldAmount, bool showNotification)` | method |
| `OnHeroOrPartyGaveItem` | `public virtual void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase>giver, ValueTuple<Hero, PartyBase>receiver, ItemRosterElement itemRosterElement, bool showNotification)` | method |
| `OnBanditPartyRecruited` | `public virtual void OnBanditPartyRecruited(MobileParty banditParty)` | method |
| `OnArmyCreated` | `public virtual void OnArmyCreated(Army army)` | method |
| `OnPartyAttachedAnotherParty` | `public virtual void OnPartyAttachedAnotherParty(MobileParty mobileParty)` | method |
| `OnNearbyPartyAddedToPlayerMapEvent` | `public virtual void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)` | method |
| `OnArmyDispersed` | `public virtual void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)` | method |
| `OnArmyGathered` | `public virtual void OnArmyGathered(Army army, IMapPoint gatheringPoint)` | method |
| `OnPerkOpened` | `public virtual void OnPerkOpened(Hero hero, PerkObject perk)` | method |
| `OnPerkReset` | `public virtual void OnPerkReset(Hero hero, PerkObject perk)` | method |
| `OnPlayerTraitChanged` | `public virtual void OnPlayerTraitChanged(TraitObject trait, int previousLevel)` | method |
| `OnVillageStateChanged` | `public virtual void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)` | method |
| `OnSettlementEntered` | `public virtual void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | method |
| `OnAfterSettlementEntered` | `public virtual void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | method |
| `OnBeforeSettlementEntered` | `public virtual void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | method |
| `OnMercenaryTroopChangedInTown` | `public virtual void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)` | method |
| `OnMercenaryNumberChangedInTown` | `public virtual void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)` | method |
| `OnAlleyOwnerChanged` | `public virtual void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)` | method |
| `OnAlleyClearedByPlayer` | `public virtual void OnAlleyClearedByPlayer(Alley alley)` | method |
| `OnAlleyOccupiedByPlayer` | `public virtual void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)` | method |
| `OnRomanticStateChanged` | `public virtual void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)` | method |
| `OnBeforeHeroesMarried` | `public virtual void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)` | method |
| `OnPlayerEliminatedFromTournament` | `public virtual void OnPlayerEliminatedFromTournament(int round, Town town)` | method |
| `OnPlayerStartedTournamentMatch` | `public virtual void OnPlayerStartedTournamentMatch(Town town)` | method |
| `OnTournamentStarted` | `public virtual void OnTournamentStarted(Town town)` | method |
| `OnTournamentFinished` | `public virtual void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject>participants, Town town, ItemObject prize)` | method |
| `OnTournamentCancelled` | `public virtual void OnTournamentCancelled(Town town)` | method |
| `OnWarDeclared` | `public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` | method |
| `OnMakePeace` | `public virtual void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)` | method |
| `OnKingdomCreated` | `public virtual void OnKingdomCreated(Kingdom createdKingdom)` | method |
| `OnHeroOccupationChanged` | `public virtual void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)` | method |
| `OnKingdomDestroyed` | `public virtual void OnKingdomDestroyed(Kingdom kingdom)` | method |
| `CanKingdomBeDiscontinued` | `public virtual void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)` | method |
| `OnBarterAccepted` | `public virtual void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable>barters)` | method |
| `OnBarterCanceled` | `public virtual void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable>barters)` | method |
| `OnStartBattle` | `public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)` | method |
| `OnRebellionFinished` | `public virtual void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)` | method |
| `TownRebelliousStateChanged` | `public virtual void TownRebelliousStateChanged(Town town, bool rebelliousState)` | method |
| `OnRebelliousClanDisbandedAtSettlement` | `public virtual void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)` | method |
| `OnItemsLooted` | `public virtual void OnItemsLooted(MobileParty mobileParty, ItemRoster items)` | method |
| `OnMobilePartyDestroyed` | `public virtual void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | method |
| `OnMobilePartyCreated` | `public virtual void OnMobilePartyCreated(MobileParty party)` | method |
| `OnMapInteractableCreated` | `public virtual void OnMapInteractableCreated(IInteractablePoint interactable)` | method |
| `OnMapInteractableDestroyed` | `public virtual void OnMapInteractableDestroyed(IInteractablePoint interactable)` | method |
| `OnMobilePartyQuestStatusChanged` | `public virtual void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)` | method |
| `OnHeroKilled` | `public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `OnBeforeHeroKilled` | `public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `OnChildEducationCompleted` | `public virtual void OnChildEducationCompleted(Hero hero, int age)` | method |
| `OnHeroComesOfAge` | `public virtual void OnHeroComesOfAge(Hero hero)` | method |
| `OnHeroReachesTeenAge` | `public virtual void OnHeroReachesTeenAge(Hero hero)` | method |
| `OnHeroGrowsOutOfInfancy` | `public virtual void OnHeroGrowsOutOfInfancy(Hero hero)` | method |
| `OnCharacterDefeated` | `public virtual void OnCharacterDefeated(Hero winner, Hero loser)` | method |
| `OnHeroPrisonerTaken` | `public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)` | method |
| `OnHeroPrisonerReleased` | `public virtual void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)` | method |
| `OnCharacterBecameFugitive` | `public virtual void OnCharacterBecameFugitive(Hero hero, bool showNotification)` | method |
| `OnPlayerMetHero` | `public virtual void OnPlayerMetHero(Hero hero)` | method |
| `OnPlayerLearnsAboutHero` | `public virtual void OnPlayerLearnsAboutHero(Hero hero)` | method |
| `OnRenownGained` | `public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)` | method |
| `OnCrimeRatingChanged` | `public virtual void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)` | method |
| `OnNewCompanionAdded` | `public virtual void OnNewCompanionAdded(Hero newCompanion)` | method |
| `OnAfterMissionStarted` | `public virtual void OnAfterMissionStarted(IMission iMission)` | method |
| `OnGameMenuOpened` | `public virtual void OnGameMenuOpened(MenuCallbackArgs args)` | method |
| `OnVillageBecomeNormal` | `public virtual void OnVillageBecomeNormal(Village village)` | method |
| `OnVillageBeingRaided` | `public virtual void OnVillageBeingRaided(Village village)` | method |
| `OnVillageLooted` | `public virtual void OnVillageLooted(Village village)` | method |
| `OnAgentJoinedConversation` | `public virtual void OnAgentJoinedConversation(IAgent agent)` | method |
| `OnConversationEnded` | `public virtual void OnConversationEnded(IEnumerable<CharacterObject>characters)` | method |
| `OnMapEventEnded` | `public virtual void OnMapEventEnded(MapEvent mapEvent)` | method |
| `OnMapEventStarted` | `public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)` | method |
| `OnRansomOfferedToPlayer` | `public virtual void OnRansomOfferedToPlayer(Hero captiveHero)` | method |
| `OnPrisonersChangeInSettlement` | `public virtual void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)` | method |
| `OnMissionStarted` | `public virtual void OnMissionStarted(IMission mission)` | method |
| `OnRansomOfferCancelled` | `public virtual void OnRansomOfferCancelled(Hero captiveHero)` | method |
| `OnPeaceOfferedToPlayer` | `public virtual void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDuration)` | method |
| `OnTradeAgreementSigned` | `public virtual void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)` | method |
| `OnPeaceOfferResolved` | `public virtual void OnPeaceOfferResolved(IFaction opponentFaction)` | method |
| `OnMarriageOfferedToPlayer` | `public virtual void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)` | method |
| `OnMarriageOfferCanceled` | `public virtual void OnMarriageOfferCanceled(Hero suitor, Hero maiden)` | method |
| `OnVassalOrMercenaryServiceOfferedToPlayer` | `public virtual void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)` | method |
| `OnVassalOrMercenaryServiceOfferCanceled` | `public virtual void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)` | method |
| `OnPlayerBoardGameOver` | `public virtual void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)` | method |
| `OnCommonAreaStateChanged` | `public virtual void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)` | method |
| `BeforeMissionOpened` | `public virtual void BeforeMissionOpened()` | method |
| `OnPartyRemoved` | `public virtual void OnPartyRemoved(PartyBase party)` | method |
| `OnPartySizeChanged` | `public virtual void OnPartySizeChanged(PartyBase party)` | method |
| `OnSettlementOwnerChanged` | `public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` | method |
| `OnGovernorChanged` | `public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)` | method |
| `OnSettlementLeft` | `public virtual void OnSettlementLeft(MobileParty party, Settlement settlement)` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `OnSessionStart` | `public virtual void OnSessionStart(CampaignGameStarter campaignGameStarter)` | method |
| `OnAfterSessionStart` | `public virtual void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)` | method |
| `OnNewGameCreated` | `public virtual void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | method |
| `OnGameLoaded` | `public virtual void OnGameLoaded(CampaignGameStarter campaignGameStarter)` | method |
| `OnGameEarlyLoaded` | `public virtual void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)` | method |
| `OnPlayerTradeProfit` | `public virtual void OnPlayerTradeProfit(int profit)` | method |
| `OnRulingClanChanged` | `public virtual void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)` | method |
| `OnPrisonerReleased` | `public virtual void OnPrisonerReleased(FlattenedTroopRoster roster)` | method |
| `OnGameLoadFinished` | `public virtual void OnGameLoadFinished()` | method |
| `OnPartyJoinedArmy` | `public virtual void OnPartyJoinedArmy(MobileParty mobileParty)` | method |
| `OnPartyRemovedFromArmy` | `public virtual void OnPartyRemovedFromArmy(MobileParty mobileParty)` | method |
| `OnArmyOverlaySetDirty` | `public virtual void OnArmyOverlaySetDirty()` | method |
| `OnPlayerDesertedBattle` | `public virtual void OnPlayerDesertedBattle(int sacrificedMenCount)` | method |
| `OnPlayerArmyLeaderChangedBehavior` | `public virtual void OnPlayerArmyLeaderChangedBehavior()` | method |
| `MissionTick` | `public virtual void MissionTick(float dt)` | method |
| `OnChildConceived` | `public virtual void OnChildConceived(Hero mother)` | method |
| `OnGivenBirth` | `public virtual void OnGivenBirth(Hero mother, List<Hero>aliveChildren, int stillbornCount)` | method |
| `OnUnitRecruited` | `public virtual void OnUnitRecruited(CharacterObject character, int amount)` | method |
| `OnPlayerBattleEnd` | `public virtual void OnPlayerBattleEnd(MapEvent mapEvent)` | method |
| `OnMissionEnded` | `public virtual void OnMissionEnded(IMission mission)` | method |
| `TickPartialHourlyAi` | `public virtual void TickPartialHourlyAi(MobileParty party)` | method |
| `QuarterDailyPartyTick` | `public virtual void QuarterDailyPartyTick(MobileParty party)` | method |
| `AiHourlyTick` | `public virtual void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)` | method |
| `HourlyTick` | `public virtual void HourlyTick()` | method |
| `QuarterHourlyTick` | `public virtual void QuarterHourlyTick()` | method |
| `HourlyTickParty` | `public virtual void HourlyTickParty(MobileParty mobileParty)` | method |
| `HourlyTickSettlement` | `public virtual void HourlyTickSettlement(Settlement settlement)` | method |
| `HourlyTickClan` | `public virtual void HourlyTickClan(Clan clan)` | method |
| `DailyTick` | `public virtual void DailyTick()` | method |
| `DailyTickParty` | `public virtual void DailyTickParty(MobileParty mobileParty)` | method |
| `DailyTickTown` | `public virtual void DailyTickTown(Town town)` | method |
| `DailyTickSettlement` | `public virtual void DailyTickSettlement(Settlement settlement)` | method |
| `DailyTickClan` | `public virtual void DailyTickClan(Clan clan)` | method |
| `OnPlayerBodyPropertiesChanged` | `public virtual void OnPlayerBodyPropertiesChanged()` | method |
| `WeeklyTick` | `public virtual void WeeklyTick()` | method |
| `CollectAvailableTutorials` | `public virtual void CollectAvailableTutorials(ref List<CampaignTutorial>tutorials)` | method |
| `DailyTickHero` | `public virtual void DailyTickHero(Hero hero)` | method |
| `OnTutorialCompleted` | `public virtual void OnTutorialCompleted(string tutorial)` | method |
| `OnBuildingLevelChanged` | `public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)` | method |
| `BeforeGameMenuOpened` | `public virtual void BeforeGameMenuOpened(MenuCallbackArgs args)` | method |
| `AfterGameMenuInitialized` | `public virtual void AfterGameMenuInitialized(MenuCallbackArgs args)` | method |
| `OnBarterablesRequested` | `public virtual void OnBarterablesRequested(BarterData args)` | method |
| `OnPartyVisibilityChanged` | `public virtual void OnPartyVisibilityChanged(PartyBase party)` | method |
| `OnCompanionRemoved` | `public virtual void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)` | method |
| `TrackDetected` | `public virtual void TrackDetected(Track track)` | method |
| `TrackLost` | `public virtual void TrackLost(Track track)` | method |
| `LocationCharactersAreReadyToSpawn` | `public virtual void LocationCharactersAreReadyToSpawn(Dictionary<string, int>unusedUsablePointCount)` | method |
| `LocationCharactersSimulated` | `public virtual void LocationCharactersSimulated()` | method |
| `OnBeforePlayerAgentSpawn` | `public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)` | method |
| `OnPlayerAgentSpawned` | `public virtual void OnPlayerAgentSpawned()` | method |
| `OnPlayerUpgradedTroops` | `public virtual void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)` | method |
| `OnHeroCombatHit` | `public virtual void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)` | method |
| `OnCharacterPortraitPopUpOpened` | `public virtual void OnCharacterPortraitPopUpOpened(CharacterObject character)` | method |
| `OnCharacterPortraitPopUpClosed` | `public virtual void OnCharacterPortraitPopUpClosed()` | method |
| `OnPlayerStartTalkFromMenu` | `public virtual void OnPlayerStartTalkFromMenu(Hero hero)` | method |
| `OnGameMenuOptionSelected` | `public virtual void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)` | method |
| `OnPlayerStartRecruitment` | `public virtual void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)` | method |
| `OnBeforePlayerCharacterChanged` | `public virtual void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)` | method |
| `OnPlayerCharacterChanged` | `public virtual void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)` | method |
| `OnClanLeaderChanged` | `public virtual void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)` | method |
| `OnSiegeEventStarted` | `public virtual void OnSiegeEventStarted(SiegeEvent siegeEvent)` | method |
| `OnPlayerSiegeStarted` | `public virtual void OnPlayerSiegeStarted()` | method |
| `OnSiegeEventEnded` | `public virtual void OnSiegeEventEnded(SiegeEvent siegeEvent)` | method |
| `OnSiegeAftermathApplied` | `public virtual void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float>partyContributions)` | method |
| `OnSiegeBombardmentHit` | `public virtual void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)` | method |
| `OnSiegeBombardmentWallHit` | `public virtual void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)` | method |
| `OnSiegeEngineDestroyed` | `public virtual void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)` | method |
| `OnTradeRumorIsTaken` | `public virtual void OnTradeRumorIsTaken(List<TradeRumor>newRumors, Settlement sourceSettlement = null)` | method |
| `OnCheckForIssue` | `public virtual void OnCheckForIssue(Hero hero)` | method |
| `OnIssueUpdated` | `public virtual void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)` | method |
| `OnTroopsDeserted` | `public virtual void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)` | method |
| `OnTroopRecruited` | `public virtual void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)` | method |
| `OnTroopGivenToSettlement` | `public virtual void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)` | method |
| `OnItemSold` | `public virtual void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)` | method |
| `OnCaravanTransactionCompleted` | `public virtual void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>>itemRosterElements)` | method |
| `OnPrisonerSold` | `public virtual void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)` | method |
| `OnPartyDisbanded` | `public virtual void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)` | method |
| `OnPartyDisbandStarted` | `public virtual void OnPartyDisbandStarted(MobileParty disbandParty)` | method |
| `OnPartyDisbandCanceled` | `public virtual void OnPartyDisbandCanceled(MobileParty disbandParty)` | method |
| `OnHideoutSpotted` | `public virtual void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)` | method |
| `OnHideoutDeactivated` | `public virtual void OnHideoutDeactivated(Settlement hideout)` | method |
| `OnHideoutBattleCompleted` | `public virtual void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)` | method |
| `OnPlayerInventoryExchange` | `public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>purchasedItems, List<ValueTuple<ItemRosterElement, int>>soldItems, bool isTrading)` | method |
| `OnItemsDiscardedByPlayer` | `public virtual void OnItemsDiscardedByPlayer(ItemRoster roster)` | method |
| `OnPersuasionProgressCommitted` | `public virtual void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult>progress)` | method |
| `OnHeroSharedFoodWithAnother` | `public virtual void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)` | method |
| `OnQuestCompleted` | `public virtual void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)` | method |
| `OnQuestStarted` | `public virtual void OnQuestStarted(QuestBase quest)` | method |
| `OnItemProduced` | `public virtual void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)` | method |
| `OnItemConsumed` | `public virtual void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)` | method |
| `OnPartyConsumedFood` | `public virtual void OnPartyConsumedFood(MobileParty party)` | method |
| `SiegeCompleted` | `public virtual void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)` | method |
| `AfterSiegeCompleted` | `public virtual void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)` | method |
| `SiegeEngineBuilt` | `public virtual void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)` | method |
| `RaidCompleted` | `public virtual void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)` | method |
| `ForceSuppliesCompleted` | `public virtual void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)` | method |
| `ForceVolunteersCompleted` | `public virtual void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)` | method |
| `OnBeforeMainCharacterDied` | `public virtual void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `OnGameOver` | `public virtual void OnGameOver()` | method |
| `OnClanDestroyed` | `public virtual void OnClanDestroyed(Clan destroyedClan)` | method |
| `OnNewIssueCreated` | `public virtual void OnNewIssueCreated(IssueBase issue)` | method |
| `OnIssueOwnerChanged` | `public virtual void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)` | method |
| `OnNewItemCrafted` | `public virtual void OnNewItemCrafted(ItemObject itemObject)` | method |
| `OnWorkshopInitialized` | `public virtual void OnWorkshopInitialized(Workshop workshop)` | method |
| `OnWorkshopOwnerChanged` | `public virtual void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)` | method |
| `OnWorkshopTypeChanged` | `public virtual void OnWorkshopTypeChanged(Workshop workshop)` | method |
| `CraftingPartUnlocked` | `public virtual void CraftingPartUnlocked(CraftingPiece craftingPiece)` | method |
| `OnNewItemCrafted` | `public virtual void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)` | method |
| `OnEquipmentSmeltedByHero` | `public virtual void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)` | method |
| `OnBeforeSave` | `public virtual void OnBeforeSave()` | method |
| `OnMainPartyPrisonerRecruited` | `public virtual void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)` | method |
| `OnPrisonerTaken` | `public virtual void OnPrisonerTaken(FlattenedTroopRoster roster)` | method |
| `OnPrisonerDonatedToSettlement` | `public virtual void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)` | method |
| `CanMoveToSettlement` | `public virtual void CanMoveToSettlement(Hero hero, ref bool result)` | method |
| `OnHeroChangedClan` | `public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)` | method |
| `CanHeroDie` | `public virtual void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)` | method |
| `CanPlayerMeetWithHeroAfterConversation` | `public virtual void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)` | method |
| `CanHeroBecomePrisoner` | `public virtual void CanHeroBecomePrisoner(Hero hero, ref bool result)` | method |
| `CanBeGovernorOrHavePartyRole` | `public virtual void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)` | method |
| `OnSaveOver` | `public virtual void OnSaveOver(bool isSuccessful, string saveName)` | method |
| `CollectMetadataEntries` | `public virtual void CollectMetadataEntries(List<KeyValuePair<string, string>>pairs)` | method |
| `OnSaveStarted` | `public virtual void OnSaveStarted()` | method |
| `CanHeroMarry` | `public virtual void CanHeroMarry(Hero hero, ref bool result)` | method |
| `OnHeroTeleportationRequested` | `public virtual void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)` | method |
| `OnPartyLeaderChangeOfferCanceled` | `public virtual void OnPartyLeaderChangeOfferCanceled(MobileParty party)` | method |
| `OnPartyLeaderChanged` | `public virtual void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)` | method |
| `OnClanInfluenceChanged` | `public virtual void OnClanInfluenceChanged(Clan clan, float change)` | method |
| `OnPlayerPartyKnockedOrKilledTroop` | `public virtual void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)` | method |
| `OnPlayerEarnedGoldFromAsset` | `public virtual void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)` | method |
| `OnClanEarnedGoldFromTribute` | `public virtual void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)` | method |
| `OnCollectLootItems` | `public virtual void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | method |
| `OnLootDistributedToParty` | `public virtual void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)` | method |
| `OnPlayerJoinedTournament` | `public virtual void OnPlayerJoinedTournament(Town town, bool isParticipant)` | method |
| `OnConfigChanged` | `public virtual void OnConfigChanged()` | method |
| `OnMobilePartyRaftStateChanged` | `public virtual void OnMobilePartyRaftStateChanged(MobileParty mobileParty)` | method |
| `OnCharacterCreationInitialized` | `public virtual void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)` | method |
| `OnShipDestroyed` | `public virtual void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)` | method |
| `OnShipOwnerChanged` | `public virtual void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail shipOwnerChangeDetail)` | method |
| `OnFigureheadUnlocked` | `public virtual void OnFigureheadUnlocked(Figurehead figurehead)` | method |
| `OnShipRepaired` | `public virtual void OnShipRepaired(Ship ship, Settlement repairPort)` | method |
| `OnPartyLeftArmy` | `public virtual void OnPartyLeftArmy(MobileParty party, Army army)` | method |
| `OnIncidentResolved` | `public virtual void OnIncidentResolved(Incident incident)` | method |
| `OnPartyAddedToMapEvent` | `public virtual void OnPartyAddedToMapEvent(PartyBase partyBase)` | method |
| `OnMobilePartyNavigationStateChanged` | `public virtual void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)` | method |
| `OnMobilePartyJoinedToSiegeEvent` | `public virtual void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)` | method |
| `OnMobilePartyLeftSiegeEvent` | `public virtual void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)` | method |
| `OnBlockadeActivated` | `public virtual void OnBlockadeActivated(SiegeEvent siegeEvent)` | method |
| `OnBlockadeDeactivated` | `public virtual void OnBlockadeDeactivated(SiegeEvent siegeEvent)` | method |
| `OnShipCreated` | `public virtual void OnShipCreated(Ship ship, Settlement createdSettlement)` | method |
| `OnMercenaryServiceStarted` | `public virtual void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)` | method |
| `OnMercenaryServiceEnded` | `public virtual void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)` | method |
| `OnMapMarkerCreated` | `public virtual void OnMapMarkerCreated(MapMarker mapMarker)` | method |
| `OnMapMarkerRemoved` | `public virtual void OnMapMarkerRemoved(MapMarker mapMarker)` | method |
| `OnAllianceStarted` | `public virtual void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `OnAllianceEnded` | `public virtual void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `OnCallToWarAgreementStarted` | `public virtual void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `OnCallToWarAgreementEnded` | `public virtual void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `CanHeroLeadParty` | `public virtual void CanHeroLeadParty(Hero hero, ref bool result)` | method |
| `OnCraftingOrderCompleted` | `public virtual void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)` | method |
| `OnItemsRefined` | `public virtual void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)` | method |
| `OnMapEventContinuityNeedsUpdate` | `public virtual void OnMapEventContinuityNeedsUpdate(IFaction faction)` | method |
| `OnHeirSelectionOver` | `public virtual void OnHeirSelectionOver(Hero selectedHeir)` | method |
| `OnHeirSelectionRequested` | `public virtual void OnHeirSelectionRequested(Dictionary<Hero, int>heirApparents)` | method |
| `OnMainPartyStarving` | `public virtual void OnMainPartyStarving()` | method |
| `OnHeroGetsBusy` | `public virtual void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)` | method |
| `CanHeroEquipmentBeChanged` | `public virtual void CanHeroEquipmentBeChanged(Hero hero, ref bool result)` | method |
| `CanHaveCampaignIssues` | `public virtual void CanHaveCampaignIssues(Hero hero, ref bool result)` | method |
| `IsSettlementBusy` | `public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)` | method |
| `OnHeroUnregistered` | `public virtual void OnHeroUnregistered(Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
