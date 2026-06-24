<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEventReceiver`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignEventReceiver

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignEventReceiver`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`

## Overview

`CampaignEventReceiver` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RemoveListeners
`public virtual void RemoveListeners(object o)`

**Purpose:** Removes `listeners` from the current collection or state.

### OnCharacterCreationIsOver
`public virtual void OnCharacterCreationIsOver()`

**Purpose:** Called when the `character creation is over` event is raised.

### OnHeroLevelledUp
`public virtual void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**Purpose:** Called when the `hero levelled up` event is raised.

### OnHeroGainedSkill
`public virtual void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** Called when the `hero gained skill` event is raised.

### OnHeroCreated
`public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**Purpose:** Called when the `hero created` event is raised.

### OnHeroWounded
`public virtual void OnHeroWounded(Hero woundedHero)`

**Purpose:** Called when the `hero wounded` event is raised.

### OnHeroRelationChanged
`public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**Purpose:** Called when the `hero relation changed` event is raised.

### OnQuestLogAdded
`public virtual void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**Purpose:** Called when the `quest log added` event is raised.

### OnIssueLogAdded
`public virtual void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**Purpose:** Called when the `issue log added` event is raised.

### OnClanTierChanged
`public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**Purpose:** Called when the `clan tier changed` event is raised.

### OnClanChangedKingdom
`public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)`

**Purpose:** Called when the `clan changed kingdom` event is raised.

### OnClanDefected
`public virtual void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**Purpose:** Called when the `clan defected` event is raised.

### OnClanCreated
`public virtual void OnClanCreated(Clan clan, bool isCompanion)`

**Purpose:** Called when the `clan created` event is raised.

### OnHeroJoinedParty
`public virtual void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)`

**Purpose:** Called when the `hero joined party` event is raised.

### OnKingdomDecisionAdded
`public virtual void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Called when the `kingdom decision added` event is raised.

### OnKingdomDecisionCancelled
`public virtual void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Called when the `kingdom decision cancelled` event is raised.

### OnKingdomDecisionConcluded
`public virtual void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**Purpose:** Called when the `kingdom decision concluded` event is raised.

### OnHeroOrPartyTradedGold
`public virtual void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> recipient, ValueTuple<int, string> goldAmount, bool showNotification)`

**Purpose:** Called when the `hero or party traded gold` event is raised.

### OnHeroOrPartyGaveItem
`public virtual void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**Purpose:** Called when the `hero or party gave item` event is raised.

### OnBanditPartyRecruited
`public virtual void OnBanditPartyRecruited(MobileParty banditParty)`

**Purpose:** Called when the `bandit party recruited` event is raised.

### OnArmyCreated
`public virtual void OnArmyCreated(Army army)`

**Purpose:** Called when the `army created` event is raised.

### OnPartyAttachedAnotherParty
`public virtual void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**Purpose:** Called when the `party attached another party` event is raised.

### OnNearbyPartyAddedToPlayerMapEvent
`public virtual void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**Purpose:** Called when the `nearby party added to player map event` event is raised.

### OnArmyDispersed
`public virtual void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**Purpose:** Called when the `army dispersed` event is raised.

### OnArmyGathered
`public virtual void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**Purpose:** Called when the `army gathered` event is raised.

### OnPerkOpened
`public virtual void OnPerkOpened(Hero hero, PerkObject perk)`

**Purpose:** Called when the `perk opened` event is raised.

### OnPerkReset
`public virtual void OnPerkReset(Hero hero, PerkObject perk)`

**Purpose:** Called when the `perk reset` event is raised.

### OnPlayerTraitChanged
`public virtual void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**Purpose:** Called when the `player trait changed` event is raised.

### OnVillageStateChanged
`public virtual void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**Purpose:** Called when the `village state changed` event is raised.

### OnSettlementEntered
`public virtual void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### OnAfterSettlementEntered
`public virtual void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `after settlement entered` event is raised.

### OnBeforeSettlementEntered
`public virtual void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `before settlement entered` event is raised.

### OnMercenaryTroopChangedInTown
`public virtual void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**Purpose:** Called when the `mercenary troop changed in town` event is raised.

### OnMercenaryNumberChangedInTown
`public virtual void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**Purpose:** Called when the `mercenary number changed in town` event is raised.

### OnAlleyOwnerChanged
`public virtual void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** Called when the `alley owner changed` event is raised.

### OnAlleyClearedByPlayer
`public virtual void OnAlleyClearedByPlayer(Alley alley)`

**Purpose:** Called when the `alley cleared by player` event is raised.

### OnAlleyOccupiedByPlayer
`public virtual void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**Purpose:** Called when the `alley occupied by player` event is raised.

### OnRomanticStateChanged
`public virtual void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**Purpose:** Called when the `romantic state changed` event is raised.

### OnBeforeHeroesMarried
`public virtual void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)`

**Purpose:** Called when the `before heroes married` event is raised.

### OnPlayerEliminatedFromTournament
`public virtual void OnPlayerEliminatedFromTournament(int round, Town town)`

**Purpose:** Called when the `player eliminated from tournament` event is raised.

### OnPlayerStartedTournamentMatch
`public virtual void OnPlayerStartedTournamentMatch(Town town)`

**Purpose:** Called when the `player started tournament match` event is raised.

### OnTournamentStarted
`public virtual void OnTournamentStarted(Town town)`

**Purpose:** Called when the `tournament started` event is raised.

### OnTournamentFinished
`public virtual void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**Purpose:** Called when the `tournament finished` event is raised.

### OnTournamentCancelled
`public virtual void OnTournamentCancelled(Town town)`

**Purpose:** Called when the `tournament cancelled` event is raised.

### OnWarDeclared
`public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**Purpose:** Called when the `war declared` event is raised.

### OnMakePeace
`public virtual void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**Purpose:** Called when the `make peace` event is raised.

### OnKingdomCreated
`public virtual void OnKingdomCreated(Kingdom createdKingdom)`

**Purpose:** Called when the `kingdom created` event is raised.

### OnHeroOccupationChanged
`public virtual void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**Purpose:** Called when the `hero occupation changed` event is raised.

### OnKingdomDestroyed
`public virtual void OnKingdomDestroyed(Kingdom kingdom)`

**Purpose:** Called when the `kingdom destroyed` event is raised.

### CanKingdomBeDiscontinued
`public virtual void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**Purpose:** Checks whether the current object can `kingdom be discontinued`.

### OnBarterAccepted
`public virtual void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Called when the `barter accepted` event is raised.

### OnBarterCanceled
`public virtual void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Called when the `barter canceled` event is raised.

### OnStartBattle
`public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**Purpose:** Called when the `start battle` event is raised.

### OnRebellionFinished
`public virtual void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**Purpose:** Called when the `rebellion finished` event is raised.

### TownRebelliousStateChanged
`public virtual void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**Purpose:** Handles logic related to `town rebellious state changed`.

### OnRebelliousClanDisbandedAtSettlement
`public virtual void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**Purpose:** Called when the `rebellious clan disbanded at settlement` event is raised.

### OnItemsLooted
`public virtual void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**Purpose:** Called when the `items looted` event is raised.

### OnMobilePartyDestroyed
`public virtual void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**Purpose:** Called when the `mobile party destroyed` event is raised.

### OnMobilePartyCreated
`public virtual void OnMobilePartyCreated(MobileParty party)`

**Purpose:** Called when the `mobile party created` event is raised.

### OnMapInteractableCreated
`public virtual void OnMapInteractableCreated(IInteractablePoint interactable)`

**Purpose:** Called when the `map interactable created` event is raised.

### OnMapInteractableDestroyed
`public virtual void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**Purpose:** Called when the `map interactable destroyed` event is raised.

### OnMobilePartyQuestStatusChanged
`public virtual void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**Purpose:** Called when the `mobile party quest status changed` event is raised.

### OnHeroKilled
`public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `hero killed` event is raised.

### OnBeforeHeroKilled
`public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `before hero killed` event is raised.

### OnChildEducationCompleted
`public virtual void OnChildEducationCompleted(Hero hero, int age)`

**Purpose:** Called when the `child education completed` event is raised.

### OnHeroComesOfAge
`public virtual void OnHeroComesOfAge(Hero hero)`

**Purpose:** Called when the `hero comes of age` event is raised.

### OnHeroReachesTeenAge
`public virtual void OnHeroReachesTeenAge(Hero hero)`

**Purpose:** Called when the `hero reaches teen age` event is raised.

### OnHeroGrowsOutOfInfancy
`public virtual void OnHeroGrowsOutOfInfancy(Hero hero)`

**Purpose:** Called when the `hero grows out of infancy` event is raised.

### OnCharacterDefeated
`public virtual void OnCharacterDefeated(Hero winner, Hero loser)`

**Purpose:** Called when the `character defeated` event is raised.

### OnHeroPrisonerTaken
`public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**Purpose:** Called when the `hero prisoner taken` event is raised.

### OnHeroPrisonerReleased
`public virtual void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**Purpose:** Called when the `hero prisoner released` event is raised.

### OnCharacterBecameFugitive
`public virtual void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**Purpose:** Called when the `character became fugitive` event is raised.

### OnPlayerMetHero
`public virtual void OnPlayerMetHero(Hero hero)`

**Purpose:** Called when the `player met hero` event is raised.

### OnPlayerLearnsAboutHero
`public virtual void OnPlayerLearnsAboutHero(Hero hero)`

**Purpose:** Called when the `player learns about hero` event is raised.

### OnRenownGained
`public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**Purpose:** Called when the `renown gained` event is raised.

### OnCrimeRatingChanged
`public virtual void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**Purpose:** Called when the `crime rating changed` event is raised.

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero newCompanion)`

**Purpose:** Called when the `new companion added` event is raised.

### OnAfterMissionStarted
`public virtual void OnAfterMissionStarted(IMission iMission)`

**Purpose:** Called when the `after mission started` event is raised.

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Called when the `game menu opened` event is raised.

### OnVillageBecomeNormal
`public virtual void OnVillageBecomeNormal(Village village)`

**Purpose:** Called when the `village become normal` event is raised.

### OnVillageBeingRaided
`public virtual void OnVillageBeingRaided(Village village)`

**Purpose:** Called when the `village being raided` event is raised.

### OnVillageLooted
`public virtual void OnVillageLooted(Village village)`

**Purpose:** Called when the `village looted` event is raised.

### OnAgentJoinedConversation
`public virtual void OnAgentJoinedConversation(IAgent agent)`

**Purpose:** Called when the `agent joined conversation` event is raised.

### OnConversationEnded
`public virtual void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**Purpose:** Called when the `conversation ended` event is raised.

### OnMapEventEnded
`public virtual void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Called when the `map event ended` event is raised.

### OnMapEventStarted
`public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Called when the `map event started` event is raised.

### OnRansomOfferedToPlayer
`public virtual void OnRansomOfferedToPlayer(Hero captiveHero)`

**Purpose:** Called when the `ransom offered to player` event is raised.

### OnPrisonersChangeInSettlement
`public virtual void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**Purpose:** Called when the `prisoners change in settlement` event is raised.

### OnMissionStarted
`public virtual void OnMissionStarted(IMission mission)`

**Purpose:** Called when the `mission started` event is raised.

### OnRansomOfferCancelled
`public virtual void OnRansomOfferCancelled(Hero captiveHero)`

**Purpose:** Called when the `ransom offer cancelled` event is raised.

### OnPeaceOfferedToPlayer
`public virtual void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount)`

**Purpose:** Called when the `peace offered to player` event is raised.

### OnTradeAgreementSigned
`public virtual void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**Purpose:** Called when the `trade agreement signed` event is raised.

### OnPeaceOfferResolved
`public virtual void OnPeaceOfferResolved(IFaction opponentFaction)`

**Purpose:** Called when the `peace offer resolved` event is raised.

### OnMarriageOfferedToPlayer
`public virtual void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** Called when the `marriage offered to player` event is raised.

### OnMarriageOfferCanceled
`public virtual void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** Called when the `marriage offer canceled` event is raised.

### OnVassalOrMercenaryServiceOfferedToPlayer
`public virtual void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**Purpose:** Called when the `vassal or mercenary service offered to player` event is raised.

### OnVassalOrMercenaryServiceOfferCanceled
`public virtual void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**Purpose:** Called when the `vassal or mercenary service offer canceled` event is raised.

### OnPlayerBoardGameOver
`public virtual void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**Purpose:** Called when the `player board game over` event is raised.

### OnCommonAreaStateChanged
`public virtual void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)`

**Purpose:** Called when the `common area state changed` event is raised.

### BeforeMissionOpened
`public virtual void BeforeMissionOpened()`

**Purpose:** Handles logic related to `before mission opened`.

### OnPartyRemoved
`public virtual void OnPartyRemoved(PartyBase party)`

**Purpose:** Called when the `party removed` event is raised.

### OnPartySizeChanged
`public virtual void OnPartySizeChanged(PartyBase party)`

**Purpose:** Called when the `party size changed` event is raised.

### OnSettlementOwnerChanged
`public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Called when the `settlement owner changed` event is raised.

### OnGovernorChanged
`public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**Purpose:** Called when the `governor changed` event is raised.

### OnSettlementLeft
`public virtual void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Called when the `settlement left` event is raised.

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnSessionStart
`public virtual void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session start` event is raised.

### OnAfterSessionStart
`public virtual void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `after session start` event is raised.

### OnNewGameCreated
`public virtual void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `new game created` event is raised.

### OnGameLoaded
`public virtual void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `game loaded` event is raised.

### OnGameEarlyLoaded
`public virtual void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `game early loaded` event is raised.

### OnPlayerTradeProfit
`public virtual void OnPlayerTradeProfit(int profit)`

**Purpose:** Called when the `player trade profit` event is raised.

### OnRulingClanChanged
`public virtual void OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)`

**Purpose:** Called when the `ruling clan changed` event is raised.

### OnPrisonerReleased
`public virtual void OnPrisonerReleased(FlattenedTroopRoster roster)`

**Purpose:** Called when the `prisoner released` event is raised.

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**Purpose:** Called when the `game load finished` event is raised.

### OnPartyJoinedArmy
`public virtual void OnPartyJoinedArmy(MobileParty mobileParty)`

**Purpose:** Called when the `party joined army` event is raised.

### OnPartyRemovedFromArmy
`public virtual void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**Purpose:** Called when the `party removed from army` event is raised.

### OnArmyOverlaySetDirty
`public virtual void OnArmyOverlaySetDirty()`

**Purpose:** Called when the `army overlay set dirty` event is raised.

### OnPlayerDesertedBattle
`public virtual void OnPlayerDesertedBattle(int sacrificedMenCount)`

**Purpose:** Called when the `player deserted battle` event is raised.

### OnPlayerArmyLeaderChangedBehavior
`public virtual void OnPlayerArmyLeaderChangedBehavior()`

**Purpose:** Called when the `player army leader changed behavior` event is raised.

### MissionTick
`public virtual void MissionTick(float dt)`

**Purpose:** Handles logic related to `mission tick`.

### OnChildConceived
`public virtual void OnChildConceived(Hero mother)`

**Purpose:** Called when the `child conceived` event is raised.

### OnGivenBirth
`public virtual void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**Purpose:** Called when the `given birth` event is raised.

### OnUnitRecruited
`public virtual void OnUnitRecruited(CharacterObject character, int amount)`

**Purpose:** Called when the `unit recruited` event is raised.

### OnPlayerBattleEnd
`public virtual void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** Called when the `player battle end` event is raised.

### OnMissionEnded
`public virtual void OnMissionEnded(IMission mission)`

**Purpose:** Called when the `mission ended` event is raised.

### TickPartialHourlyAi
`public virtual void TickPartialHourlyAi(MobileParty party)`

**Purpose:** Handles logic related to `tick partial hourly ai`.

### QuarterDailyPartyTick
`public virtual void QuarterDailyPartyTick(MobileParty party)`

**Purpose:** Handles logic related to `quarter daily party tick`.

### AiHourlyTick
`public virtual void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**Purpose:** Handles logic related to `ai hourly tick`.

### HourlyTick
`public virtual void HourlyTick()`

**Purpose:** Handles logic related to `hourly tick`.

### HourlyTickParty
`public virtual void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### HourlyTickSettlement
`public virtual void HourlyTickSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `hourly tick settlement`.

### HourlyTickClan
`public virtual void HourlyTickClan(Clan clan)`

**Purpose:** Handles logic related to `hourly tick clan`.

### DailyTick
`public virtual void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### DailyTickParty
`public virtual void DailyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `daily tick party`.

### DailyTickTown
`public virtual void DailyTickTown(Town town)`

**Purpose:** Handles logic related to `daily tick town`.

### DailyTickSettlement
`public virtual void DailyTickSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `daily tick settlement`.

### DailyTickClan
`public virtual void DailyTickClan(Clan clan)`

**Purpose:** Handles logic related to `daily tick clan`.

### OnPlayerBodyPropertiesChanged
`public virtual void OnPlayerBodyPropertiesChanged()`

**Purpose:** Called when the `player body properties changed` event is raised.

### WeeklyTick
`public virtual void WeeklyTick()`

**Purpose:** Handles logic related to `weekly tick`.

### CollectAvailableTutorials
`public virtual void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**Purpose:** Handles logic related to `collect available tutorials`.

### DailyTickHero
`public virtual void DailyTickHero(Hero hero)`

**Purpose:** Handles logic related to `daily tick hero`.

### OnTutorialCompleted
`public virtual void OnTutorialCompleted(string tutorial)`

**Purpose:** Called when the `tutorial completed` event is raised.

### OnBuildingLevelChanged
`public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**Purpose:** Called when the `building level changed` event is raised.

### BeforeGameMenuOpened
`public virtual void BeforeGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `before game menu opened`.

### AfterGameMenuInitialized
`public virtual void AfterGameMenuInitialized(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `after game menu initialized`.

### OnBarterablesRequested
`public virtual void OnBarterablesRequested(BarterData args)`

**Purpose:** Called when the `barterables requested` event is raised.

### OnPartyVisibilityChanged
`public virtual void OnPartyVisibilityChanged(PartyBase party)`

**Purpose:** Called when the `party visibility changed` event is raised.

### OnCompanionRemoved
`public virtual void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**Purpose:** Called when the `companion removed` event is raised.

### TrackDetected
`public virtual void TrackDetected(Track track)`

**Purpose:** Handles logic related to `track detected`.

### TrackLost
`public virtual void TrackLost(Track track)`

**Purpose:** Handles logic related to `track lost`.

### LocationCharactersAreReadyToSpawn
`public virtual void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**Purpose:** Handles logic related to `location characters are ready to spawn`.

### LocationCharactersSimulated
`public virtual void LocationCharactersSimulated()`

**Purpose:** Handles logic related to `location characters simulated`.

### OnBeforePlayerAgentSpawn
`public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**Purpose:** Called when the `before player agent spawn` event is raised.

### OnPlayerAgentSpawned
`public virtual void OnPlayerAgentSpawned()`

**Purpose:** Called when the `player agent spawned` event is raised.

### OnPlayerUpgradedTroops
`public virtual void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**Purpose:** Called when the `player upgraded troops` event is raised.

### OnHeroCombatHit
`public virtual void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**Purpose:** Called when the `hero combat hit` event is raised.

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** Called when the `character portrait pop up opened` event is raised.

### OnCharacterPortraitPopUpClosed
`public virtual void OnCharacterPortraitPopUpClosed()`

**Purpose:** Called when the `character portrait pop up closed` event is raised.

### OnPlayerStartTalkFromMenu
`public virtual void OnPlayerStartTalkFromMenu(Hero hero)`

**Purpose:** Called when the `player start talk from menu` event is raised.

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**Purpose:** Called when the `game menu option selected` event is raised.

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**Purpose:** Called when the `player start recruitment` event is raised.

### OnBeforePlayerCharacterChanged
`public virtual void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**Purpose:** Called when the `before player character changed` event is raised.

### OnPlayerCharacterChanged
`public virtual void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)`

**Purpose:** Called when the `player character changed` event is raised.

### OnClanLeaderChanged
`public virtual void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**Purpose:** Called when the `clan leader changed` event is raised.

### OnSiegeEventStarted
`public virtual void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**Purpose:** Called when the `siege event started` event is raised.

### OnPlayerSiegeStarted
`public virtual void OnPlayerSiegeStarted()`

**Purpose:** Called when the `player siege started` event is raised.

### OnSiegeEventEnded
`public virtual void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**Purpose:** Called when the `siege event ended` event is raised.

### OnSiegeAftermathApplied
`public virtual void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**Purpose:** Called when the `siege aftermath applied` event is raised.

### OnSiegeBombardmentHit
`public virtual void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**Purpose:** Called when the `siege bombardment hit` event is raised.

### OnSiegeBombardmentWallHit
`public virtual void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**Purpose:** Called when the `siege bombardment wall hit` event is raised.

### OnSiegeEngineDestroyed
`public virtual void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**Purpose:** Called when the `siege engine destroyed` event is raised.

### OnTradeRumorIsTaken
`public virtual void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Called when the `trade rumor is taken` event is raised.

### OnCheckForIssue
`public virtual void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### OnIssueUpdated
`public virtual void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)`

**Purpose:** Called when the `issue updated` event is raised.

### OnTroopsDeserted
`public virtual void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**Purpose:** Called when the `troops deserted` event is raised.

### OnTroopRecruited
`public virtual void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**Purpose:** Called when the `troop recruited` event is raised.

### OnTroopGivenToSettlement
`public virtual void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**Purpose:** Called when the `troop given to settlement` event is raised.

### OnItemSold
`public virtual void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**Purpose:** Called when the `item sold` event is raised.

### OnCaravanTransactionCompleted
`public virtual void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>> itemRosterElements)`

**Purpose:** Called when the `caravan transaction completed` event is raised.

### OnPrisonerSold
`public virtual void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**Purpose:** Called when the `prisoner sold` event is raised.

### OnPartyDisbanded
`public virtual void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**Purpose:** Called when the `party disbanded` event is raised.

### OnPartyDisbandStarted
`public virtual void OnPartyDisbandStarted(MobileParty disbandParty)`

**Purpose:** Called when the `party disband started` event is raised.

### OnPartyDisbandCanceled
`public virtual void OnPartyDisbandCanceled(MobileParty disbandParty)`

**Purpose:** Called when the `party disband canceled` event is raised.

### OnHideoutSpotted
`public virtual void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**Purpose:** Called when the `hideout spotted` event is raised.

### OnHideoutDeactivated
`public virtual void OnHideoutDeactivated(Settlement hideout)`

**Purpose:** Called when the `hideout deactivated` event is raised.

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>> purchasedItems, List<ValueTuple<ItemRosterElement, int>> soldItems, bool isTrading)`

**Purpose:** Called when the `player inventory exchange` event is raised.

### OnItemsDiscardedByPlayer
`public virtual void OnItemsDiscardedByPlayer(ItemRoster roster)`

**Purpose:** Called when the `items discarded by player` event is raised.

### OnPersuasionProgressCommitted
`public virtual void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**Purpose:** Called when the `persuasion progress committed` event is raised.

### OnHeroSharedFoodWithAnother
`public virtual void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**Purpose:** Called when the `hero shared food with another` event is raised.

### OnQuestCompleted
`public virtual void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** Called when the `quest completed` event is raised.

### OnQuestStarted
`public virtual void OnQuestStarted(QuestBase quest)`

**Purpose:** Called when the `quest started` event is raised.

### OnItemProduced
`public virtual void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Called when the `item produced` event is raised.

### OnItemConsumed
`public virtual void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Called when the `item consumed` event is raised.

### OnPartyConsumedFood
`public virtual void OnPartyConsumedFood(MobileParty party)`

**Purpose:** Called when the `party consumed food` event is raised.

### SiegeCompleted
`public virtual void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Handles logic related to `siege completed`.

### AfterSiegeCompleted
`public virtual void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Handles logic related to `after siege completed`.

### SiegeEngineBuilt
`public virtual void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Handles logic related to `siege engine built`.

### RaidCompleted
`public virtual void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** Handles logic related to `raid completed`.

### ForceSuppliesCompleted
`public virtual void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**Purpose:** Handles logic related to `force supplies completed`.

### ForceVolunteersCompleted
`public virtual void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**Purpose:** Handles logic related to `force volunteers completed`.

### OnBeforeMainCharacterDied
`public virtual void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `before main character died` event is raised.

### OnGameOver
`public virtual void OnGameOver()`

**Purpose:** Called when the `game over` event is raised.

### OnClanDestroyed
`public virtual void OnClanDestroyed(Clan destroyedClan)`

**Purpose:** Called when the `clan destroyed` event is raised.

### OnHideoutBattleCompleted
`public virtual void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent)`

**Purpose:** Called when the `hideout battle completed` event is raised.

### OnNewIssueCreated
`public virtual void OnNewIssueCreated(IssueBase issue)`

**Purpose:** Called when the `new issue created` event is raised.

### OnIssueOwnerChanged
`public virtual void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**Purpose:** Called when the `issue owner changed` event is raised.

### OnNewItemCrafted
`public virtual void OnNewItemCrafted(ItemObject itemObject)`

**Purpose:** Called when the `new item crafted` event is raised.

### OnWorkshopInitialized
`public virtual void OnWorkshopInitialized(Workshop workshop)`

**Purpose:** Called when the `workshop initialized` event is raised.

### OnWorkshopOwnerChanged
`public virtual void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**Purpose:** Called when the `workshop owner changed` event is raised.

### OnWorkshopTypeChanged
`public virtual void OnWorkshopTypeChanged(Workshop workshop)`

**Purpose:** Called when the `workshop type changed` event is raised.

### CraftingPartUnlocked
`public virtual void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**Purpose:** Handles logic related to `crafting part unlocked`.

### OnNewItemCrafted
`public virtual void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**Purpose:** Called when the `new item crafted` event is raised.

### OnEquipmentSmeltedByHero
`public virtual void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)`

**Purpose:** Called when the `equipment smelted by hero` event is raised.

### OnBeforeSave
`public virtual void OnBeforeSave()`

**Purpose:** Called when the `before save` event is raised.

### OnMainPartyPrisonerRecruited
`public virtual void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**Purpose:** Called when the `main party prisoner recruited` event is raised.

### OnPrisonerTaken
`public virtual void OnPrisonerTaken(FlattenedTroopRoster roster)`

**Purpose:** Called when the `prisoner taken` event is raised.

### OnPrisonerDonatedToSettlement
`public virtual void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**Purpose:** Called when the `prisoner donated to settlement` event is raised.

### CanMoveToSettlement
`public virtual void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `move to settlement`.

### OnHeroChangedClan
`public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)`

**Purpose:** Called when the `hero changed clan` event is raised.

### CanHeroDie
`public virtual void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the current object can `hero die`.

### CanPlayerMeetWithHeroAfterConversation
`public virtual void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `player meet with hero after conversation`.

### CanHeroBecomePrisoner
`public virtual void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero become prisoner`.

### CanBeGovernorOrHavePartyRole
`public virtual void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `be governor or have party role`.

### OnSaveOver
`public virtual void OnSaveOver(bool isSuccessful, string saveName)`

**Purpose:** Called when the `save over` event is raised.

### OnSaveStarted
`public virtual void OnSaveStarted()`

**Purpose:** Called when the `save started` event is raised.

### CanHeroMarry
`public virtual void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero marry`.

### OnHeroTeleportationRequested
`public virtual void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**Purpose:** Called when the `hero teleportation requested` event is raised.

### OnPartyLeaderChangeOfferCanceled
`public virtual void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**Purpose:** Called when the `party leader change offer canceled` event is raised.

### OnPartyLeaderChanged
`public virtual void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**Purpose:** Called when the `party leader changed` event is raised.

### OnClanInfluenceChanged
`public virtual void OnClanInfluenceChanged(Clan clan, float change)`

**Purpose:** Called when the `clan influence changed` event is raised.

### OnPlayerPartyKnockedOrKilledTroop
`public virtual void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**Purpose:** Called when the `player party knocked or killed troop` event is raised.

### OnPlayerEarnedGoldFromAsset
`public virtual void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**Purpose:** Called when the `player earned gold from asset` event is raised.

### OnCollectLootItems
`public virtual void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**Purpose:** Called when the `collect loot items` event is raised.

### OnLootDistributedToParty
`public virtual void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**Purpose:** Called when the `loot distributed to party` event is raised.

### OnPlayerJoinedTournament
`public virtual void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**Purpose:** Called when the `player joined tournament` event is raised.

### OnConfigChanged
`public virtual void OnConfigChanged()`

**Purpose:** Called when the `config changed` event is raised.

### OnMobilePartyRaftStateChanged
`public virtual void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party raft state changed` event is raised.

### OnCharacterCreationInitialized
`public virtual void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**Purpose:** Called when the `character creation initialized` event is raised.

### OnShipDestroyed
`public virtual void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**Purpose:** Called when the `ship destroyed` event is raised.

### OnShipOwnerChanged
`public virtual void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail shipOwnerChangeDetail)`

**Purpose:** Called when the `ship owner changed` event is raised.

### OnFigureheadUnlocked
`public virtual void OnFigureheadUnlocked(Figurehead figurehead)`

**Purpose:** Called when the `figurehead unlocked` event is raised.

### OnShipRepaired
`public virtual void OnShipRepaired(Ship ship, Settlement repairPort)`

**Purpose:** Called when the `ship repaired` event is raised.

### OnPartyLeftArmy
`public virtual void OnPartyLeftArmy(MobileParty party, Army army)`

**Purpose:** Called when the `party left army` event is raised.

### OnIncidentResolved
`public virtual void OnIncidentResolved(Incident incident)`

**Purpose:** Called when the `incident resolved` event is raised.

### OnPartyAddedToMapEvent
`public virtual void OnPartyAddedToMapEvent(PartyBase partyBase)`

**Purpose:** Called when the `party added to map event` event is raised.

### OnMobilePartyNavigationStateChanged
`public virtual void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party navigation state changed` event is raised.

### OnMobilePartyJoinedToSiegeEvent
`public virtual void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party joined to siege event` event is raised.

### OnMobilePartyLeftSiegeEvent
`public virtual void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party left siege event` event is raised.

### OnBlockadeActivated
`public virtual void OnBlockadeActivated(SiegeEvent siegeEvent)`

**Purpose:** Called when the `blockade activated` event is raised.

### OnBlockadeDeactivated
`public virtual void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**Purpose:** Called when the `blockade deactivated` event is raised.

### OnShipCreated
`public virtual void OnShipCreated(Ship ship, Settlement createdSettlement)`

**Purpose:** Called when the `ship created` event is raised.

### OnMercenaryServiceStarted
`public virtual void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**Purpose:** Called when the `mercenary service started` event is raised.

### OnMercenaryServiceEnded
`public virtual void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**Purpose:** Called when the `mercenary service ended` event is raised.

### OnMapMarkerCreated
`public virtual void OnMapMarkerCreated(MapMarker mapMarker)`

**Purpose:** Called when the `map marker created` event is raised.

### OnMapMarkerRemoved
`public virtual void OnMapMarkerRemoved(MapMarker mapMarker)`

**Purpose:** Called when the `map marker removed` event is raised.

### OnAllianceStarted
`public virtual void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Called when the `alliance started` event is raised.

### OnAllianceEnded
`public virtual void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Called when the `alliance ended` event is raised.

### OnCallToWarAgreementStarted
`public virtual void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Called when the `call to war agreement started` event is raised.

### OnCallToWarAgreementEnded
`public virtual void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Called when the `call to war agreement ended` event is raised.

### CanHeroLeadParty
`public virtual void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero lead party`.

### OnCraftingOrderCompleted
`public virtual void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** Called when the `crafting order completed` event is raised.

### OnItemsRefined
`public virtual void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** Called when the `items refined` event is raised.

### OnMapEventContinuityNeedsUpdate
`public virtual void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**Purpose:** Called when the `map event continuity needs update` event is raised.

### OnHeirSelectionOver
`public virtual void OnHeirSelectionOver(Hero selectedHeir)`

**Purpose:** Called when the `heir selection over` event is raised.

### OnHeirSelectionRequested
`public virtual void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**Purpose:** Called when the `heir selection requested` event is raised.

### OnMainPartyStarving
`public virtual void OnMainPartyStarving()`

**Purpose:** Called when the `main party starving` event is raised.

### OnHeroGetsBusy
`public virtual void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**Purpose:** Called when the `hero gets busy` event is raised.

### CanHeroEquipmentBeChanged
`public virtual void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero equipment be changed`.

### CanHaveCampaignIssues
`public virtual void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `have campaign issues`.

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)`

**Purpose:** Handles logic related to `is settlement busy`.

### OnHeroUnregistered
`public virtual void OnHeroUnregistered(Hero hero)`

**Purpose:** Called when the `hero unregistered` event is raised.

## Usage Example

```csharp
var implementation = new CustomCampaignEventReceiver();
```

## See Also

- [Complete Class Catalog](../catalog)