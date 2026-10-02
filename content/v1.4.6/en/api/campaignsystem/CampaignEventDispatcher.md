---
title: "CampaignEventDispatcher"
description: "CampaignEventDispatcher: a public class in TaleWorlds.CampaignSystem, inheriting CampaignEventReceiver; 277 exposed members (276 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs."
---
# CampaignEventDispatcher

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## Overview

CampaignEventDispatcher lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs. It is a public class, implementing/inheriting CampaignEventReceiver; the inheritance chain is CampaignEventDispatcher → CampaignEventReceiver. It exposes 277 public/protected members: 276 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignEventDispatcher is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain CampaignEventDispatcher → CampaignEventReceiver. The surface is method-led (methods 276/277, properties 1/277), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static CampaignEventDispatcher Instance` | property |
| `RemoveListeners` | `public override void RemoveListeners(object o)` | method |
| `OnPlayerBodyPropertiesChanged` | `public override void OnPlayerBodyPropertiesChanged()` | method |
| `OnHeroLevelledUp` | `public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)` | method |
| `OnHomeHideoutChanged` | `public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)` | method |
| `OnCharacterCreationIsOver` | `public override void OnCharacterCreationIsOver()` | method |
| `OnHeroGainedSkill` | `public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)` | method |
| `OnHeroWounded` | `public override void OnHeroWounded(Hero woundedHero)` | method |
| `OnHeroRelationChanged` | `public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)` | method |
| `OnLootDistributedToParty` | `public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)` | method |
| `OnHeroOccupationChanged` | `public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)` | method |
| `OnBarterAccepted` | `public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable>barters)` | method |
| `OnBarterCanceled` | `public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable>barters)` | method |
| `OnHeroCreated` | `public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)` | method |
| `OnHeroActivated` | `public override void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)` | method |
| `OnQuestLogAdded` | `public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)` | method |
| `OnIssueLogAdded` | `public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)` | method |
| `OnClanTierChanged` | `public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)` | method |
| `OnClanChangedKingdom` | `public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)` | method |
| `OnClanDefected` | `public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)` | method |
| `OnClanCreated` | `public override void OnClanCreated(Clan clan, bool isCompanion)` | method |
| `OnHeroJoinedParty` | `public override void OnHeroJoinedParty(Hero hero, MobileParty party)` | method |
| `OnKingdomDecisionAdded` | `public override void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)` | method |
| `OnKingdomDecisionCancelled` | `public override void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)` | method |
| `OnKingdomDecisionConcluded` | `public override void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)` | method |
| `OnHeroOrPartyTradedGold` | `public override void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase>giver, ValueTuple<Hero, PartyBase>recipient, ValueTuple<int, string>goldAmount, bool showNotification)` | method |
| `OnHeroOrPartyGaveItem` | `public override void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase>giver, ValueTuple<Hero, PartyBase>receiver, ItemRosterElement itemRosterElement, bool showNotification)` | method |
| `OnBanditPartyRecruited` | `public override void OnBanditPartyRecruited(MobileParty banditParty)` | method |
| `OnArmyCreated` | `public override void OnArmyCreated(Army army)` | method |
| `OnPartyAttachedAnotherParty` | `public override void OnPartyAttachedAnotherParty(MobileParty mobileParty)` | method |
| `OnNearbyPartyAddedToPlayerMapEvent` | `public override void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)` | method |
| `OnArmyDispersed` | `public override void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)` | method |
| `OnArmyGathered` | `public override void OnArmyGathered(Army army, IMapPoint gatheringPoint)` | method |
| `OnPerkOpened` | `public override void OnPerkOpened(Hero hero, PerkObject perk)` | method |
| `OnPerkReset` | `public override void OnPerkReset(Hero hero, PerkObject perk)` | method |
| `OnPlayerTraitChanged` | `public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)` | method |
| `OnVillageStateChanged` | `public override void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)` | method |
| `OnSettlementEntered` | `public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | method |
| `OnAfterSettlementEntered` | `public override void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | method |
| `OnBeforeSettlementEntered` | `public override void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)` | method |
| `OnMercenaryTroopChangedInTown` | `public override void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)` | method |
| `OnMercenaryNumberChangedInTown` | `public override void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)` | method |
| `OnAlleyOccupiedByPlayer` | `public override void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)` | method |
| `OnAlleyOwnerChanged` | `public override void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)` | method |
| `OnAlleyClearedByPlayer` | `public override void OnAlleyClearedByPlayer(Alley alley)` | method |
| `OnRomanticStateChanged` | `public override void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)` | method |
| `OnBeforeHeroesMarried` | `public override void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification)` | method |
| `OnPlayerEliminatedFromTournament` | `public override void OnPlayerEliminatedFromTournament(int round, Town town)` | method |
| `OnPlayerStartedTournamentMatch` | `public override void OnPlayerStartedTournamentMatch(Town town)` | method |
| `OnTournamentStarted` | `public override void OnTournamentStarted(Town town)` | method |
| `OnTournamentFinished` | `public override void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject>participants, Town town, ItemObject prize)` | method |
| `OnTournamentCancelled` | `public override void OnTournamentCancelled(Town town)` | method |
| `OnWarDeclared` | `public override void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)` | method |
| `OnRulingClanChanged` | `public override void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)` | method |
| `OnStartBattle` | `public override void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)` | method |
| `OnRebellionFinished` | `public override void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)` | method |
| `TownRebelliousStateChanged` | `public override void TownRebelliousStateChanged(Town town, bool rebelliousState)` | method |
| `OnRebelliousClanDisbandedAtSettlement` | `public override void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan rebelliousClan)` | method |
| `OnItemsLooted` | `public override void OnItemsLooted(MobileParty mobileParty, ItemRoster items)` | method |
| `OnMobilePartyDestroyed` | `public override void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)` | method |
| `OnMobilePartyCreated` | `public override void OnMobilePartyCreated(MobileParty party)` | method |
| `OnMapInteractableCreated` | `public override void OnMapInteractableCreated(IInteractablePoint interactable)` | method |
| `OnMapInteractableDestroyed` | `public override void OnMapInteractableDestroyed(IInteractablePoint interactable)` | method |
| `OnMobilePartyQuestStatusChanged` | `public override void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)` | method |
| `OnHeroKilled` | `public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `OnBeforeHeroKilled` | `public override void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `OnChildEducationCompleted` | `public override void OnChildEducationCompleted(Hero hero, int age)` | method |
| `OnHeroComesOfAge` | `public override void OnHeroComesOfAge(Hero hero)` | method |
| `OnHeroReachesTeenAge` | `public override void OnHeroReachesTeenAge(Hero hero)` | method |
| `OnHeroGrowsOutOfInfancy` | `public override void OnHeroGrowsOutOfInfancy(Hero hero)` | method |
| `OnCharacterDefeated` | `public override void OnCharacterDefeated(Hero winner, Hero loser)` | method |
| `OnHeroPrisonerTaken` | `public override void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)` | method |
| `OnHeroPrisonerReleased` | `public override void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)` | method |
| `OnCharacterBecameFugitive` | `public override void OnCharacterBecameFugitive(Hero hero, bool showNotification)` | method |
| `OnPlayerLearnsAboutHero` | `public override void OnPlayerLearnsAboutHero(Hero hero)` | method |
| `OnPlayerMetHero` | `public override void OnPlayerMetHero(Hero hero)` | method |
| `OnRenownGained` | `public override void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)` | method |
| `OnCrimeRatingChanged` | `public override void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)` | method |
| `OnNewCompanionAdded` | `public override void OnNewCompanionAdded(Hero newCompanion)` | method |
| `OnAfterMissionStarted` | `public override void OnAfterMissionStarted(IMission iMission)` | method |
| `OnGameMenuOpened` | `public override void OnGameMenuOpened(MenuCallbackArgs args)` | method |
| `OnMakePeace` | `public override void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)` | method |
| `OnKingdomDestroyed` | `public override void OnKingdomDestroyed(Kingdom destroyedKingdom)` | method |
| `CanKingdomBeDiscontinued` | `public override void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)` | method |
| `OnKingdomCreated` | `public override void OnKingdomCreated(Kingdom createdKingdom)` | method |
| `OnVillageBecomeNormal` | `public override void OnVillageBecomeNormal(Village village)` | method |
| `OnVillageBeingRaided` | `public override void OnVillageBeingRaided(Village village)` | method |
| `OnVillageLooted` | `public override void OnVillageLooted(Village village)` | method |
| `OnConversationEnded` | `public override void OnConversationEnded(IEnumerable<CharacterObject>characters)` | method |
| `OnAgentJoinedConversation` | `public override void OnAgentJoinedConversation(IAgent agent)` | method |
| `OnMapEventEnded` | `public override void OnMapEventEnded(MapEvent mapEvent)` | method |
| `OnMapEventStarted` | `public override void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)` | method |
| `OnPrisonersChangeInSettlement` | `public override void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)` | method |
| `OnMissionStarted` | `public override void OnMissionStarted(IMission mission)` | method |
| `OnPlayerBoardGameOver` | `public override void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)` | method |
| `OnRansomOfferedToPlayer` | `public override void OnRansomOfferedToPlayer(Hero captiveHero)` | method |
| `OnRansomOfferCancelled` | `public override void OnRansomOfferCancelled(Hero captiveHero)` | method |
| `OnPeaceOfferedToPlayer` | `public override void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDurationInDays)` | method |
| `OnTradeAgreementSigned` | `public override void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)` | method |
| `OnPeaceOfferResolved` | `public override void OnPeaceOfferResolved(IFaction opponentFaction)` | method |
| `OnMarriageOfferedToPlayer` | `public override void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)` | method |
| `OnMarriageOfferCanceled` | `public override void OnMarriageOfferCanceled(Hero suitor, Hero maiden)` | method |
| `OnVassalOrMercenaryServiceOfferedToPlayer` | `public override void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)` | method |
| `OnCommonAreaStateChanged` | `public override void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)` | method |
| `OnVassalOrMercenaryServiceOfferCanceled` | `public override void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)` | method |
| `BeforeMissionOpened` | `public override void BeforeMissionOpened()` | method |
| `OnPartyRemoved` | `public override void OnPartyRemoved(PartyBase party)` | method |
| `OnPartySizeChanged` | `public override void OnPartySizeChanged(PartyBase party)` | method |
| `OnSettlementOwnerChanged` | `public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)` | method |
| `OnGovernorChanged` | `public override void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)` | method |
| `OnSettlementLeft` | `public override void OnSettlementLeft(MobileParty party, Settlement settlement)` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `OnSessionStart` | `public override void OnSessionStart(CampaignGameStarter campaignGameStarter)` | method |
| `OnAfterSessionStart` | `public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)` | method |
| `OnNewGameCreated` | `public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | method |
| `OnGameEarlyLoaded` | `public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)` | method |
| `OnGameLoaded` | `public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)` | method |
| `OnGameLoadFinished` | `public override void OnGameLoadFinished()` | method |
| `OnPartyJoinedArmy` | `public override void OnPartyJoinedArmy(MobileParty mobileParty)` | method |
| `OnPartyRemovedFromArmy` | `public override void OnPartyRemovedFromArmy(MobileParty mobileParty)` | method |
| `OnPlayerArmyLeaderChangedBehavior` | `public override void OnPlayerArmyLeaderChangedBehavior()` | method |
| `OnArmyOverlaySetDirty` | `public override void OnArmyOverlaySetDirty()` | method |
| `OnPlayerDesertedBattle` | `public override void OnPlayerDesertedBattle(int sacrificedMenCount)` | method |
| `MissionTick` | `public override void MissionTick(float dt)` | method |
| `OnChildConceived` | `public override void OnChildConceived(Hero mother)` | method |
| `OnGivenBirth` | `public override void OnGivenBirth(Hero mother, List<Hero>aliveChildren, int stillbornCount)` | method |
| `OnUnitRecruited` | `public override void OnUnitRecruited(CharacterObject character, int amount)` | method |
| `OnPlayerBattleEnd` | `public override void OnPlayerBattleEnd(MapEvent mapEvent)` | method |
| `OnMissionEnded` | `public override void OnMissionEnded(IMission mission)` | method |
| `TickPartialHourlyAi` | `public override void TickPartialHourlyAi(MobileParty party)` | method |
| `QuarterDailyPartyTick` | `public override void QuarterDailyPartyTick(MobileParty party)` | method |
| `AiHourlyTick` | `public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)` | method |
| `HourlyTick` | `public override void HourlyTick()` | method |
| `QuarterHourlyTick` | `public override void QuarterHourlyTick()` | method |
| `HourlyTickParty` | `public override void HourlyTickParty(MobileParty mobileParty)` | method |
| `HourlyTickSettlement` | `public override void HourlyTickSettlement(Settlement settlement)` | method |
| `HourlyTickClan` | `public override void HourlyTickClan(Clan clan)` | method |
| `DailyTick` | `public override void DailyTick()` | method |
| `DailyTickParty` | `public override void DailyTickParty(MobileParty mobileParty)` | method |
| `DailyTickTown` | `public override void DailyTickTown(Town town)` | method |
| `DailyTickSettlement` | `public override void DailyTickSettlement(Settlement settlement)` | method |
| `DailyTickHero` | `public override void DailyTickHero(Hero hero)` | method |
| `DailyTickClan` | `public override void DailyTickClan(Clan clan)` | method |
| `WeeklyTick` | `public override void WeeklyTick()` | method |
| `CollectAvailableTutorials` | `public override void CollectAvailableTutorials(ref List<CampaignTutorial>tutorials)` | method |
| `OnTutorialCompleted` | `public override void OnTutorialCompleted(string tutorial)` | method |
| `BeforeGameMenuOpened` | `public override void BeforeGameMenuOpened(MenuCallbackArgs args)` | method |
| `AfterGameMenuInitialized` | `public override void AfterGameMenuInitialized(MenuCallbackArgs args)` | method |
| `OnBarterablesRequested` | `public override void OnBarterablesRequested(BarterData args)` | method |
| `OnPartyVisibilityChanged` | `public override void OnPartyVisibilityChanged(PartyBase party)` | method |
| `OnCompanionRemoved` | `public override void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)` | method |
| `TrackDetected` | `public override void TrackDetected(Track track)` | method |
| `TrackLost` | `public override void TrackLost(Track track)` | method |
| `LocationCharactersAreReadyToSpawn` | `public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int>unusedUsablePointCount)` | method |
| `LocationCharactersSimulated` | `public override void LocationCharactersSimulated()` | method |
| `OnBeforePlayerAgentSpawn` | `public override void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)` | method |
| `OnPlayerAgentSpawned` | `public override void OnPlayerAgentSpawned()` | method |
| `OnPlayerUpgradedTroops` | `public override void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)` | method |
| `OnHeroCombatHit` | `public override void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)` | method |
| `OnCharacterPortraitPopUpOpened` | `public override void OnCharacterPortraitPopUpOpened(CharacterObject character)` | method |
| `OnCharacterPortraitPopUpClosed` | `public override void OnCharacterPortraitPopUpClosed()` | method |
| `OnPlayerStartTalkFromMenu` | `public override void OnPlayerStartTalkFromMenu(Hero hero)` | method |
| `OnGameMenuOptionSelected` | `public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)` | method |
| `OnPlayerStartRecruitment` | `public override void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)` | method |
| `OnBeforePlayerCharacterChanged` | `public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)` | method |
| `OnPlayerCharacterChanged` | `public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)` | method |
| `OnClanLeaderChanged` | `public override void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)` | method |
| `OnSiegeEventStarted` | `public override void OnSiegeEventStarted(SiegeEvent siegeEvent)` | method |
| `OnPlayerSiegeStarted` | `public override void OnPlayerSiegeStarted()` | method |
| `OnSiegeEventEnded` | `public override void OnSiegeEventEnded(SiegeEvent siegeEvent)` | method |
| `OnSiegeAftermathApplied` | `public override void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float>partyContributions)` | method |
| `OnSiegeBombardmentHit` | `public override void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)` | method |
| `OnSiegeBombardmentWallHit` | `public override void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)` | method |
| `OnSiegeEngineDestroyed` | `public override void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)` | method |
| `OnTradeRumorIsTaken` | `public override void OnTradeRumorIsTaken(List<TradeRumor>newRumors, Settlement sourceSettlement = null)` | method |
| `OnCheckForIssue` | `public override void OnCheckForIssue(Hero hero)` | method |
| `OnIssueUpdated` | `public override void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)` | method |
| `OnTroopsDeserted` | `public override void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)` | method |
| `OnTroopRecruited` | `public override void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)` | method |
| `OnTroopGivenToSettlement` | `public override void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)` | method |
| `OnItemSold` | `public override void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)` | method |
| `OnCaravanTransactionCompleted` | `public override void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>>itemRosterElements)` | method |
| `OnPrisonerSold` | `public override void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)` | method |
| `OnPartyDisbanded` | `public override void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)` | method |
| `OnPartyDisbandStarted` | `public override void OnPartyDisbandStarted(MobileParty disbandParty)` | method |
| `OnPartyDisbandCanceled` | `public override void OnPartyDisbandCanceled(MobileParty disbandParty)` | method |
| `OnBuildingLevelChanged` | `public override void OnBuildingLevelChanged(Town town, Building building, int levelChange)` | method |
| `OnHideoutSpotted` | `public override void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)` | method |
| `OnHideoutDeactivated` | `public override void OnHideoutDeactivated(Settlement hideout)` | method |
| `OnHeroSharedFoodWithAnother` | `public override void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)` | method |
| `OnItemsDiscardedByPlayer` | `public override void OnItemsDiscardedByPlayer(ItemRoster roster)` | method |
| `OnPlayerInventoryExchange` | `public override void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>>purchasedItems, List<ValueTuple<ItemRosterElement, int>>soldItems, bool isTrading)` | method |
| `OnPersuasionProgressCommitted` | `public override void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult>progress)` | method |
| `OnQuestCompleted` | `public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)` | method |
| `OnQuestStarted` | `public override void OnQuestStarted(QuestBase quest)` | method |
| `OnItemProduced` | `public override void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)` | method |
| `OnItemConsumed` | `public override void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)` | method |
| `OnPartyConsumedFood` | `public override void OnPartyConsumedFood(MobileParty party)` | method |
| `OnNewIssueCreated` | `public override void OnNewIssueCreated(IssueBase issue)` | method |
| `OnIssueOwnerChanged` | `public override void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)` | method |
| `OnBeforeMainCharacterDied` | `public override void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `OnGameOver` | `public override void OnGameOver()` | method |
| `SiegeCompleted` | `public override void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)` | method |
| `AfterSiegeCompleted` | `public override void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)` | method |
| `SiegeEngineBuilt` | `public override void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)` | method |
| `RaidCompleted` | `public override void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)` | method |
| `ForceSuppliesCompleted` | `public override void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)` | method |
| `ForceVolunteersCompleted` | `public override void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)` | method |
| `OnHideoutBattleCompleted` | `public override void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)` | method |
| `OnClanDestroyed` | `public override void OnClanDestroyed(Clan destroyedClan)` | method |
| `OnNewItemCrafted` | `public override void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)` | method |
| `OnWorkshopOwnerChanged` | `public override void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)` | method |
| `OnWorkshopInitialized` | `public override void OnWorkshopInitialized(Workshop workshop)` | method |
| `OnWorkshopTypeChanged` | `public override void OnWorkshopTypeChanged(Workshop workshop)` | method |
| `OnMainPartyPrisonerRecruited` | `public override void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)` | method |
| `OnPrisonerDonatedToSettlement` | `public override void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)` | method |
| `OnEquipmentSmeltedByHero` | `public override void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)` | method |
| `OnPrisonerTaken` | `public override void OnPrisonerTaken(FlattenedTroopRoster roster)` | method |
| `OnBeforeSave` | `public override void OnBeforeSave()` | method |
| `OnSaveStarted` | `public override void OnSaveStarted()` | method |
| `OnSaveOver` | `public override void OnSaveOver(bool isSuccessful, string saveName)` | method |
| `CollectMetadataEntries` | `public override void CollectMetadataEntries(List<KeyValuePair<string, string>>pairs)` | method |
| `OnPrisonerReleased` | `public override void OnPrisonerReleased(FlattenedTroopRoster roster)` | method |
| `OnHeroChangedClan` | `public override void OnHeroChangedClan(Hero hero, Clan oldClan)` | method |
| `OnHeroGetsBusy` | `public override void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)` | method |
| `OnPlayerTradeProfit` | `public override void OnPlayerTradeProfit(int profit)` | method |
| `CraftingPartUnlocked` | `public override void CraftingPartUnlocked(CraftingPiece craftingPiece)` | method |
| `OnClanEarnedGoldFromTribute` | `public override void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)` | method |
| `OnCollectLootItems` | `public override void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)` | method |
| `OnHeroTeleportationRequested` | `public override void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)` | method |
| `OnClanInfluenceChanged` | `public override void OnClanInfluenceChanged(Clan clan, float change)` | method |
| `OnPlayerPartyKnockedOrKilledTroop` | `public override void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)` | method |
| `OnPlayerEarnedGoldFromAsset` | `public override void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)` | method |
| `OnPartyLeaderChangeOfferCanceled` | `public override void OnPartyLeaderChangeOfferCanceled(MobileParty party)` | method |
| `OnPartyLeaderChanged` | `public override void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)` | method |
| `OnMainPartyStarving` | `public override void OnMainPartyStarving()` | method |
| `OnPlayerJoinedTournament` | `public override void OnPlayerJoinedTournament(Town town, bool isParticipant)` | method |
| `OnCraftingOrderCompleted` | `public override void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)` | method |
| `OnItemsRefined` | `public override void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)` | method |
| `OnMapEventContinuityNeedsUpdate` | `public override void OnMapEventContinuityNeedsUpdate(IFaction faction)` | method |
| `OnHeirSelectionRequested` | `public override void OnHeirSelectionRequested(Dictionary<Hero, int>heirApparents)` | method |
| `OnHeirSelectionOver` | `public override void OnHeirSelectionOver(Hero selectedHeir)` | method |
| `OnCharacterCreationInitialized` | `public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)` | method |
| `OnShipDestroyed` | `public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)` | method |
| `OnPartyLeftArmy` | `public override void OnPartyLeftArmy(MobileParty party, Army army)` | method |
| `OnShipOwnerChanged` | `public override void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)` | method |
| `OnShipRepaired` | `public override void OnShipRepaired(Ship ship, Settlement repairPort)` | method |
| `OnFigureheadUnlocked` | `public override void OnFigureheadUnlocked(Figurehead figurehead)` | method |
| `OnPartyAddedToMapEvent` | `public override void OnPartyAddedToMapEvent(PartyBase party)` | method |
| `OnIncidentResolved` | `public override void OnIncidentResolved(Incident incident)` | method |
| `OnMobilePartyNavigationStateChanged` | `public override void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)` | method |
| `OnMobilePartyJoinedToSiegeEvent` | `public override void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)` | method |
| `OnMobilePartyLeftSiegeEvent` | `public override void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)` | method |
| `OnBlockadeActivated` | `public override void OnBlockadeActivated(SiegeEvent siegeEvent)` | method |
| `OnBlockadeDeactivated` | `public override void OnBlockadeDeactivated(SiegeEvent siegeEvent)` | method |
| `OnMapMarkerCreated` | `public override void OnMapMarkerCreated(MapMarker mapMarker)` | method |
| `OnMapMarkerRemoved` | `public override void OnMapMarkerRemoved(MapMarker mapMarker)` | method |
| `OnMercenaryServiceStarted` | `public override void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)` | method |
| `OnMercenaryServiceEnded` | `public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)` | method |
| `OnAllianceStarted` | `public override void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `OnAllianceEnded` | `public override void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)` | method |
| `OnCallToWarAgreementStarted` | `public override void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `OnCallToWarAgreementEnded` | `public override void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `CanHeroLeadParty` | `public override void CanHeroLeadParty(Hero hero, ref bool result)` | method |
| `CanHeroMarry` | `public override void CanHeroMarry(Hero hero, ref bool result)` | method |
| `CanHeroEquipmentBeChanged` | `public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)` | method |
| `CanBeGovernorOrHavePartyRole` | `public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)` | method |
| `CanHeroDie` | `public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)` | method |
| `CanHeroBecomePrisoner` | `public override void CanHeroBecomePrisoner(Hero hero, ref bool result)` | method |
| `CanPlayerMeetWithHeroAfterConversation` | `public override void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)` | method |
| `CanMoveToSettlement` | `public override void CanMoveToSettlement(Hero hero, ref bool result)` | method |
| `CanHaveCampaignIssues` | `public override void CanHaveCampaignIssues(Hero hero, ref bool result)` | method |
| `IsSettlementBusy` | `public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)` | method |
| `OnHeroUnregistered` | `public override void OnHeroUnregistered(Hero hero)` | method |
| `OnShipCreated` | `public override void OnShipCreated(Ship ship, Settlement createdSettlement)` | method |
| `OnConfigChanged` | `public override void OnConfigChanged()` | method |
| `OnMobilePartyRaftStateChanged` | `public override void OnMobilePartyRaftStateChanged(MobileParty mobileParty)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignEventReceiver](../CampaignEventReceiver)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
