---
title: "CampaignEventDispatcher"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignEventDispatcher`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignEventDispatcher

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## Overview

`CampaignEventDispatcher` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static CampaignEventDispatcher Instance { get; }` |

## Key Methods

### RemoveListeners
`public override void RemoveListeners(object o)`

**Purpose:** Removes `listeners` from the current collection or state.

### OnPlayerBodyPropertiesChanged
`public override void OnPlayerBodyPropertiesChanged()`

**Purpose:** Called when the `player body properties changed` event is raised.

### OnHeroLevelledUp
`public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**Purpose:** Called when the `hero levelled up` event is raised.

### OnHomeHideoutChanged
`public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)`

**Purpose:** Called when the `home hideout changed` event is raised.

### OnCharacterCreationIsOver
`public override void OnCharacterCreationIsOver()`

**Purpose:** Called when the `character creation is over` event is raised.

### OnHeroGainedSkill
`public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** Called when the `hero gained skill` event is raised.

### OnHeroWounded
`public override void OnHeroWounded(Hero woundedHero)`

**Purpose:** Called when the `hero wounded` event is raised.

### OnHeroRelationChanged
`public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**Purpose:** Called when the `hero relation changed` event is raised.

### OnLootDistributedToParty
`public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**Purpose:** Called when the `loot distributed to party` event is raised.

### OnHeroOccupationChanged
`public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**Purpose:** Called when the `hero occupation changed` event is raised.

### OnBarterAccepted
`public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Called when the `barter accepted` event is raised.

### OnBarterCanceled
`public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Called when the `barter canceled` event is raised.

### OnHeroCreated
`public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**Purpose:** Called when the `hero created` event is raised.

### OnQuestLogAdded
`public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**Purpose:** Called when the `quest log added` event is raised.

### OnIssueLogAdded
`public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**Purpose:** Called when the `issue log added` event is raised.

### OnClanTierChanged
`public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**Purpose:** Called when the `clan tier changed` event is raised.

### OnClanChangedKingdom
`public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)`

**Purpose:** Called when the `clan changed kingdom` event is raised.

### OnClanDefected
`public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**Purpose:** Called when the `clan defected` event is raised.

### OnClanCreated
`public override void OnClanCreated(Clan clan, bool isCompanion)`

**Purpose:** Called when the `clan created` event is raised.

### OnHeroJoinedParty
`public override void OnHeroJoinedParty(Hero hero, MobileParty party)`

**Purpose:** Called when the `hero joined party` event is raised.

### OnKingdomDecisionAdded
`public override void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Called when the `kingdom decision added` event is raised.

### OnKingdomDecisionCancelled
`public override void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Called when the `kingdom decision cancelled` event is raised.

### OnKingdomDecisionConcluded
`public override void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**Purpose:** Called when the `kingdom decision concluded` event is raised.

### OnHeroOrPartyTradedGold
`public override void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> recipient, ValueTuple<int, string> goldAmount, bool showNotification)`

**Purpose:** Called when the `hero or party traded gold` event is raised.

### OnHeroOrPartyGaveItem
`public override void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**Purpose:** Called when the `hero or party gave item` event is raised.

### OnBanditPartyRecruited
`public override void OnBanditPartyRecruited(MobileParty banditParty)`

**Purpose:** Called when the `bandit party recruited` event is raised.

### OnArmyCreated
`public override void OnArmyCreated(Army army)`

**Purpose:** Called when the `army created` event is raised.

### OnPartyAttachedAnotherParty
`public override void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**Purpose:** Called when the `party attached another party` event is raised.

### OnNearbyPartyAddedToPlayerMapEvent
`public override void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**Purpose:** Called when the `nearby party added to player map event` event is raised.

### OnArmyDispersed
`public override void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**Purpose:** Called when the `army dispersed` event is raised.

### OnArmyGathered
`public override void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**Purpose:** Called when the `army gathered` event is raised.

### OnPerkOpened
`public override void OnPerkOpened(Hero hero, PerkObject perk)`

**Purpose:** Called when the `perk opened` event is raised.

### OnPerkReset
`public override void OnPerkReset(Hero hero, PerkObject perk)`

**Purpose:** Called when the `perk reset` event is raised.

### OnPlayerTraitChanged
`public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**Purpose:** Called when the `player trait changed` event is raised.

### OnVillageStateChanged
`public override void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**Purpose:** Called when the `village state changed` event is raised.

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `settlement entered` event is raised.

### OnAfterSettlementEntered
`public override void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `after settlement entered` event is raised.

### OnBeforeSettlementEntered
`public override void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Called when the `before settlement entered` event is raised.

### OnMercenaryTroopChangedInTown
`public override void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**Purpose:** Called when the `mercenary troop changed in town` event is raised.

### OnMercenaryNumberChangedInTown
`public override void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**Purpose:** Called when the `mercenary number changed in town` event is raised.

### OnAlleyOccupiedByPlayer
`public override void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**Purpose:** Called when the `alley occupied by player` event is raised.

### OnAlleyOwnerChanged
`public override void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** Called when the `alley owner changed` event is raised.

### OnAlleyClearedByPlayer
`public override void OnAlleyClearedByPlayer(Alley alley)`

**Purpose:** Called when the `alley cleared by player` event is raised.

### OnRomanticStateChanged
`public override void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**Purpose:** Called when the `romantic state changed` event is raised.

### OnBeforeHeroesMarried
`public override void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification)`

**Purpose:** Called when the `before heroes married` event is raised.

### OnPlayerEliminatedFromTournament
`public override void OnPlayerEliminatedFromTournament(int round, Town town)`

**Purpose:** Called when the `player eliminated from tournament` event is raised.

### OnPlayerStartedTournamentMatch
`public override void OnPlayerStartedTournamentMatch(Town town)`

**Purpose:** Called when the `player started tournament match` event is raised.

### OnTournamentStarted
`public override void OnTournamentStarted(Town town)`

**Purpose:** Called when the `tournament started` event is raised.

### OnTournamentFinished
`public override void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**Purpose:** Called when the `tournament finished` event is raised.

### OnTournamentCancelled
`public override void OnTournamentCancelled(Town town)`

**Purpose:** Called when the `tournament cancelled` event is raised.

### OnWarDeclared
`public override void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**Purpose:** Called when the `war declared` event is raised.

### OnRulingClanChanged
`public override void OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)`

**Purpose:** Called when the `ruling clan changed` event is raised.

### OnStartBattle
`public override void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**Purpose:** Called when the `start battle` event is raised.

### OnRebellionFinished
`public override void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**Purpose:** Called when the `rebellion finished` event is raised.

### TownRebelliousStateChanged
`public override void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**Purpose:** Handles logic related to `town rebellious state changed`.

### OnRebelliousClanDisbandedAtSettlement
`public override void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan rebelliousClan)`

**Purpose:** Called when the `rebellious clan disbanded at settlement` event is raised.

### OnItemsLooted
`public override void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**Purpose:** Called when the `items looted` event is raised.

### OnMobilePartyDestroyed
`public override void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**Purpose:** Called when the `mobile party destroyed` event is raised.

### OnMobilePartyCreated
`public override void OnMobilePartyCreated(MobileParty party)`

**Purpose:** Called when the `mobile party created` event is raised.

### OnMapInteractableCreated
`public override void OnMapInteractableCreated(IInteractablePoint interactable)`

**Purpose:** Called when the `map interactable created` event is raised.

### OnMapInteractableDestroyed
`public override void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**Purpose:** Called when the `map interactable destroyed` event is raised.

### OnMobilePartyQuestStatusChanged
`public override void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**Purpose:** Called when the `mobile party quest status changed` event is raised.

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `hero killed` event is raised.

### OnBeforeHeroKilled
`public override void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `before hero killed` event is raised.

### OnChildEducationCompleted
`public override void OnChildEducationCompleted(Hero hero, int age)`

**Purpose:** Called when the `child education completed` event is raised.

### OnHeroComesOfAge
`public override void OnHeroComesOfAge(Hero hero)`

**Purpose:** Called when the `hero comes of age` event is raised.

### OnHeroReachesTeenAge
`public override void OnHeroReachesTeenAge(Hero hero)`

**Purpose:** Called when the `hero reaches teen age` event is raised.

### OnHeroGrowsOutOfInfancy
`public override void OnHeroGrowsOutOfInfancy(Hero hero)`

**Purpose:** Called when the `hero grows out of infancy` event is raised.

### OnCharacterDefeated
`public override void OnCharacterDefeated(Hero winner, Hero loser)`

**Purpose:** Called when the `character defeated` event is raised.

### OnHeroPrisonerTaken
`public override void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**Purpose:** Called when the `hero prisoner taken` event is raised.

### OnHeroPrisonerReleased
`public override void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**Purpose:** Called when the `hero prisoner released` event is raised.

### OnCharacterBecameFugitive
`public override void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**Purpose:** Called when the `character became fugitive` event is raised.

### OnPlayerLearnsAboutHero
`public override void OnPlayerLearnsAboutHero(Hero hero)`

**Purpose:** Called when the `player learns about hero` event is raised.

### OnPlayerMetHero
`public override void OnPlayerMetHero(Hero hero)`

**Purpose:** Called when the `player met hero` event is raised.

### OnRenownGained
`public override void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**Purpose:** Called when the `renown gained` event is raised.

### OnCrimeRatingChanged
`public override void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**Purpose:** Called when the `crime rating changed` event is raised.

### OnNewCompanionAdded
`public override void OnNewCompanionAdded(Hero newCompanion)`

**Purpose:** Called when the `new companion added` event is raised.

### OnAfterMissionStarted
`public override void OnAfterMissionStarted(IMission iMission)`

**Purpose:** Called when the `after mission started` event is raised.

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Called when the `game menu opened` event is raised.

### OnMakePeace
`public override void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**Purpose:** Called when the `make peace` event is raised.

### OnKingdomDestroyed
`public override void OnKingdomDestroyed(Kingdom destroyedKingdom)`

**Purpose:** Called when the `kingdom destroyed` event is raised.

### CanKingdomBeDiscontinued
`public override void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**Purpose:** Checks whether the current object can `kingdom be discontinued`.

### OnKingdomCreated
`public override void OnKingdomCreated(Kingdom createdKingdom)`

**Purpose:** Called when the `kingdom created` event is raised.

### OnVillageBecomeNormal
`public override void OnVillageBecomeNormal(Village village)`

**Purpose:** Called when the `village become normal` event is raised.

### OnVillageBeingRaided
`public override void OnVillageBeingRaided(Village village)`

**Purpose:** Called when the `village being raided` event is raised.

### OnVillageLooted
`public override void OnVillageLooted(Village village)`

**Purpose:** Called when the `village looted` event is raised.

### OnConversationEnded
`public override void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**Purpose:** Called when the `conversation ended` event is raised.

### OnAgentJoinedConversation
`public override void OnAgentJoinedConversation(IAgent agent)`

**Purpose:** Called when the `agent joined conversation` event is raised.

### OnMapEventEnded
`public override void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Called when the `map event ended` event is raised.

### OnMapEventStarted
`public override void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Called when the `map event started` event is raised.

### OnPrisonersChangeInSettlement
`public override void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**Purpose:** Called when the `prisoners change in settlement` event is raised.

### OnMissionStarted
`public override void OnMissionStarted(IMission mission)`

**Purpose:** Called when the `mission started` event is raised.

### OnPlayerBoardGameOver
`public override void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**Purpose:** Called when the `player board game over` event is raised.

### OnRansomOfferedToPlayer
`public override void OnRansomOfferedToPlayer(Hero captiveHero)`

**Purpose:** Called when the `ransom offered to player` event is raised.

### OnRansomOfferCancelled
`public override void OnRansomOfferCancelled(Hero captiveHero)`

**Purpose:** Called when the `ransom offer cancelled` event is raised.

### OnPeaceOfferedToPlayer
`public override void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDurationInDays)`

**Purpose:** Called when the `peace offered to player` event is raised.

### OnTradeAgreementSigned
`public override void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**Purpose:** Called when the `trade agreement signed` event is raised.

### OnPeaceOfferResolved
`public override void OnPeaceOfferResolved(IFaction opponentFaction)`

**Purpose:** Called when the `peace offer resolved` event is raised.

### OnMarriageOfferedToPlayer
`public override void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** Called when the `marriage offered to player` event is raised.

### OnMarriageOfferCanceled
`public override void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** Called when the `marriage offer canceled` event is raised.

### OnVassalOrMercenaryServiceOfferedToPlayer
`public override void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**Purpose:** Called when the `vassal or mercenary service offered to player` event is raised.

### OnCommonAreaStateChanged
`public override void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)`

**Purpose:** Called when the `common area state changed` event is raised.

### OnVassalOrMercenaryServiceOfferCanceled
`public override void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**Purpose:** Called when the `vassal or mercenary service offer canceled` event is raised.

### BeforeMissionOpened
`public override void BeforeMissionOpened()`

**Purpose:** Handles logic related to `before mission opened`.

### OnPartyRemoved
`public override void OnPartyRemoved(PartyBase party)`

**Purpose:** Called when the `party removed` event is raised.

### OnPartySizeChanged
`public override void OnPartySizeChanged(PartyBase party)`

**Purpose:** Called when the `party size changed` event is raised.

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Called when the `settlement owner changed` event is raised.

### OnGovernorChanged
`public override void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**Purpose:** Called when the `governor changed` event is raised.

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Called when the `settlement left` event is raised.

### Tick
`public override void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session start` event is raised.

### OnAfterSessionStart
`public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `after session start` event is raised.

### OnNewGameCreated
`public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `new game created` event is raised.

### OnGameEarlyLoaded
`public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `game early loaded` event is raised.

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `game loaded` event is raised.

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**Purpose:** Called when the `game load finished` event is raised.

### OnPartyJoinedArmy
`public override void OnPartyJoinedArmy(MobileParty mobileParty)`

**Purpose:** Called when the `party joined army` event is raised.

### OnPartyRemovedFromArmy
`public override void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**Purpose:** Called when the `party removed from army` event is raised.

### OnPlayerArmyLeaderChangedBehavior
`public override void OnPlayerArmyLeaderChangedBehavior()`

**Purpose:** Called when the `player army leader changed behavior` event is raised.

### OnArmyOverlaySetDirty
`public override void OnArmyOverlaySetDirty()`

**Purpose:** Called when the `army overlay set dirty` event is raised.

### OnPlayerDesertedBattle
`public override void OnPlayerDesertedBattle(int sacrificedMenCount)`

**Purpose:** Called when the `player deserted battle` event is raised.

### MissionTick
`public override void MissionTick(float dt)`

**Purpose:** Handles logic related to `mission tick`.

### OnChildConceived
`public override void OnChildConceived(Hero mother)`

**Purpose:** Called when the `child conceived` event is raised.

### OnGivenBirth
`public override void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**Purpose:** Called when the `given birth` event is raised.

### OnUnitRecruited
`public override void OnUnitRecruited(CharacterObject character, int amount)`

**Purpose:** Called when the `unit recruited` event is raised.

### OnPlayerBattleEnd
`public override void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** Called when the `player battle end` event is raised.

### OnMissionEnded
`public override void OnMissionEnded(IMission mission)`

**Purpose:** Called when the `mission ended` event is raised.

### TickPartialHourlyAi
`public override void TickPartialHourlyAi(MobileParty party)`

**Purpose:** Handles logic related to `tick partial hourly ai`.

### QuarterDailyPartyTick
`public override void QuarterDailyPartyTick(MobileParty party)`

**Purpose:** Handles logic related to `quarter daily party tick`.

### AiHourlyTick
`public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**Purpose:** Handles logic related to `ai hourly tick`.

### HourlyTick
`public override void HourlyTick()`

**Purpose:** Handles logic related to `hourly tick`.

### QuarterHourlyTick
`public override void QuarterHourlyTick()`

**Purpose:** Handles logic related to `quarter hourly tick`.

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `hourly tick party`.

### HourlyTickSettlement
`public override void HourlyTickSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `hourly tick settlement`.

### HourlyTickClan
`public override void HourlyTickClan(Clan clan)`

**Purpose:** Handles logic related to `hourly tick clan`.

### DailyTick
`public override void DailyTick()`

**Purpose:** Handles logic related to `daily tick`.

### DailyTickParty
`public override void DailyTickParty(MobileParty mobileParty)`

**Purpose:** Handles logic related to `daily tick party`.

### DailyTickTown
`public override void DailyTickTown(Town town)`

**Purpose:** Handles logic related to `daily tick town`.

### DailyTickSettlement
`public override void DailyTickSettlement(Settlement settlement)`

**Purpose:** Handles logic related to `daily tick settlement`.

### DailyTickHero
`public override void DailyTickHero(Hero hero)`

**Purpose:** Handles logic related to `daily tick hero`.

### DailyTickClan
`public override void DailyTickClan(Clan clan)`

**Purpose:** Handles logic related to `daily tick clan`.

### WeeklyTick
`public override void WeeklyTick()`

**Purpose:** Handles logic related to `weekly tick`.

### CollectAvailableTutorials
`public override void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**Purpose:** Handles logic related to `collect available tutorials`.

### OnTutorialCompleted
`public override void OnTutorialCompleted(string tutorial)`

**Purpose:** Called when the `tutorial completed` event is raised.

### BeforeGameMenuOpened
`public override void BeforeGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `before game menu opened`.

### AfterGameMenuInitialized
`public override void AfterGameMenuInitialized(MenuCallbackArgs args)`

**Purpose:** Handles logic related to `after game menu initialized`.

### OnBarterablesRequested
`public override void OnBarterablesRequested(BarterData args)`

**Purpose:** Called when the `barterables requested` event is raised.

### OnPartyVisibilityChanged
`public override void OnPartyVisibilityChanged(PartyBase party)`

**Purpose:** Called when the `party visibility changed` event is raised.

### OnCompanionRemoved
`public override void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**Purpose:** Called when the `companion removed` event is raised.

### TrackDetected
`public override void TrackDetected(Track track)`

**Purpose:** Handles logic related to `track detected`.

### TrackLost
`public override void TrackLost(Track track)`

**Purpose:** Handles logic related to `track lost`.

### LocationCharactersAreReadyToSpawn
`public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**Purpose:** Handles logic related to `location characters are ready to spawn`.

### LocationCharactersSimulated
`public override void LocationCharactersSimulated()`

**Purpose:** Handles logic related to `location characters simulated`.

### OnBeforePlayerAgentSpawn
`public override void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**Purpose:** Called when the `before player agent spawn` event is raised.

### OnPlayerAgentSpawned
`public override void OnPlayerAgentSpawned()`

**Purpose:** Called when the `player agent spawned` event is raised.

### OnPlayerUpgradedTroops
`public override void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**Purpose:** Called when the `player upgraded troops` event is raised.

### OnHeroCombatHit
`public override void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**Purpose:** Called when the `hero combat hit` event is raised.

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** Called when the `character portrait pop up opened` event is raised.

### OnCharacterPortraitPopUpClosed
`public override void OnCharacterPortraitPopUpClosed()`

**Purpose:** Called when the `character portrait pop up closed` event is raised.

### OnPlayerStartTalkFromMenu
`public override void OnPlayerStartTalkFromMenu(Hero hero)`

**Purpose:** Called when the `player start talk from menu` event is raised.

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**Purpose:** Called when the `game menu option selected` event is raised.

### OnPlayerStartRecruitment
`public override void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**Purpose:** Called when the `player start recruitment` event is raised.

### OnBeforePlayerCharacterChanged
`public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**Purpose:** Called when the `before player character changed` event is raised.

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**Purpose:** Called when the `player character changed` event is raised.

### OnClanLeaderChanged
`public override void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**Purpose:** Called when the `clan leader changed` event is raised.

### OnSiegeEventStarted
`public override void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**Purpose:** Called when the `siege event started` event is raised.

### OnPlayerSiegeStarted
`public override void OnPlayerSiegeStarted()`

**Purpose:** Called when the `player siege started` event is raised.

### OnSiegeEventEnded
`public override void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**Purpose:** Called when the `siege event ended` event is raised.

### OnSiegeAftermathApplied
`public override void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**Purpose:** Called when the `siege aftermath applied` event is raised.

### OnSiegeBombardmentHit
`public override void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**Purpose:** Called when the `siege bombardment hit` event is raised.

### OnSiegeBombardmentWallHit
`public override void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**Purpose:** Called when the `siege bombardment wall hit` event is raised.

### OnSiegeEngineDestroyed
`public override void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**Purpose:** Called when the `siege engine destroyed` event is raised.

### OnTradeRumorIsTaken
`public override void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Called when the `trade rumor is taken` event is raised.

### OnCheckForIssue
`public override void OnCheckForIssue(Hero hero)`

**Purpose:** Called when the `check for issue` event is raised.

### OnIssueUpdated
`public override void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)`

**Purpose:** Called when the `issue updated` event is raised.

### OnTroopsDeserted
`public override void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**Purpose:** Called when the `troops deserted` event is raised.

### OnTroopRecruited
`public override void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**Purpose:** Called when the `troop recruited` event is raised.

### OnTroopGivenToSettlement
`public override void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**Purpose:** Called when the `troop given to settlement` event is raised.

### OnItemSold
`public override void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**Purpose:** Called when the `item sold` event is raised.

### OnCaravanTransactionCompleted
`public override void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>> itemRosterElements)`

**Purpose:** Called when the `caravan transaction completed` event is raised.

### OnPrisonerSold
`public override void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**Purpose:** Called when the `prisoner sold` event is raised.

### OnPartyDisbanded
`public override void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**Purpose:** Called when the `party disbanded` event is raised.

### OnPartyDisbandStarted
`public override void OnPartyDisbandStarted(MobileParty disbandParty)`

**Purpose:** Called when the `party disband started` event is raised.

### OnPartyDisbandCanceled
`public override void OnPartyDisbandCanceled(MobileParty disbandParty)`

**Purpose:** Called when the `party disband canceled` event is raised.

### OnBuildingLevelChanged
`public override void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**Purpose:** Called when the `building level changed` event is raised.

### OnHideoutSpotted
`public override void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**Purpose:** Called when the `hideout spotted` event is raised.

### OnHideoutDeactivated
`public override void OnHideoutDeactivated(Settlement hideout)`

**Purpose:** Called when the `hideout deactivated` event is raised.

### OnHeroSharedFoodWithAnother
`public override void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**Purpose:** Called when the `hero shared food with another` event is raised.

### OnItemsDiscardedByPlayer
`public override void OnItemsDiscardedByPlayer(ItemRoster roster)`

**Purpose:** Called when the `items discarded by player` event is raised.

### OnPlayerInventoryExchange
`public override void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>> purchasedItems, List<ValueTuple<ItemRosterElement, int>> soldItems, bool isTrading)`

**Purpose:** Called when the `player inventory exchange` event is raised.

### OnPersuasionProgressCommitted
`public override void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**Purpose:** Called when the `persuasion progress committed` event is raised.

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** Called when the `quest completed` event is raised.

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**Purpose:** Called when the `quest started` event is raised.

### OnItemProduced
`public override void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Called when the `item produced` event is raised.

### OnItemConsumed
`public override void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Called when the `item consumed` event is raised.

### OnPartyConsumedFood
`public override void OnPartyConsumedFood(MobileParty party)`

**Purpose:** Called when the `party consumed food` event is raised.

### OnNewIssueCreated
`public override void OnNewIssueCreated(IssueBase issue)`

**Purpose:** Called when the `new issue created` event is raised.

### OnIssueOwnerChanged
`public override void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**Purpose:** Called when the `issue owner changed` event is raised.

### OnBeforeMainCharacterDied
`public override void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `before main character died` event is raised.

### OnGameOver
`public override void OnGameOver()`

**Purpose:** Called when the `game over` event is raised.

### SiegeCompleted
`public override void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Handles logic related to `siege completed`.

### AfterSiegeCompleted
`public override void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Handles logic related to `after siege completed`.

### SiegeEngineBuilt
`public override void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Handles logic related to `siege engine built`.

### RaidCompleted
`public override void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** Handles logic related to `raid completed`.

### ForceSuppliesCompleted
`public override void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**Purpose:** Handles logic related to `force supplies completed`.

### ForceVolunteersCompleted
`public override void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**Purpose:** Handles logic related to `force volunteers completed`.

### OnHideoutBattleCompleted
`public override void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent)`

**Purpose:** Called when the `hideout battle completed` event is raised.

### OnClanDestroyed
`public override void OnClanDestroyed(Clan destroyedClan)`

**Purpose:** Called when the `clan destroyed` event is raised.

### OnNewItemCrafted
`public override void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**Purpose:** Called when the `new item crafted` event is raised.

### OnWorkshopOwnerChanged
`public override void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**Purpose:** Called when the `workshop owner changed` event is raised.

### OnWorkshopInitialized
`public override void OnWorkshopInitialized(Workshop workshop)`

**Purpose:** Called when the `workshop initialized` event is raised.

### OnWorkshopTypeChanged
`public override void OnWorkshopTypeChanged(Workshop workshop)`

**Purpose:** Called when the `workshop type changed` event is raised.

### OnMainPartyPrisonerRecruited
`public override void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**Purpose:** Called when the `main party prisoner recruited` event is raised.

### OnPrisonerDonatedToSettlement
`public override void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**Purpose:** Called when the `prisoner donated to settlement` event is raised.

### OnEquipmentSmeltedByHero
`public override void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)`

**Purpose:** Called when the `equipment smelted by hero` event is raised.

### OnPrisonerTaken
`public override void OnPrisonerTaken(FlattenedTroopRoster roster)`

**Purpose:** Called when the `prisoner taken` event is raised.

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** Called when the `before save` event is raised.

### OnSaveStarted
`public override void OnSaveStarted()`

**Purpose:** Called when the `save started` event is raised.

### OnSaveOver
`public override void OnSaveOver(bool isSuccessful, string saveName)`

**Purpose:** Called when the `save over` event is raised.

### OnPrisonerReleased
`public override void OnPrisonerReleased(FlattenedTroopRoster roster)`

**Purpose:** Called when the `prisoner released` event is raised.

### OnHeroChangedClan
`public override void OnHeroChangedClan(Hero hero, Clan oldClan)`

**Purpose:** Called when the `hero changed clan` event is raised.

### OnHeroGetsBusy
`public override void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**Purpose:** Called when the `hero gets busy` event is raised.

### OnPlayerTradeProfit
`public override void OnPlayerTradeProfit(int profit)`

**Purpose:** Called when the `player trade profit` event is raised.

### CraftingPartUnlocked
`public override void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**Purpose:** Handles logic related to `crafting part unlocked`.

### OnClanEarnedGoldFromTribute
`public override void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)`

**Purpose:** Called when the `clan earned gold from tribute` event is raised.

### OnCollectLootItems
`public override void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**Purpose:** Called when the `collect loot items` event is raised.

### OnHeroTeleportationRequested
`public override void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**Purpose:** Called when the `hero teleportation requested` event is raised.

### OnClanInfluenceChanged
`public override void OnClanInfluenceChanged(Clan clan, float change)`

**Purpose:** Called when the `clan influence changed` event is raised.

### OnPlayerPartyKnockedOrKilledTroop
`public override void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**Purpose:** Called when the `player party knocked or killed troop` event is raised.

### OnPlayerEarnedGoldFromAsset
`public override void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**Purpose:** Called when the `player earned gold from asset` event is raised.

### OnPartyLeaderChangeOfferCanceled
`public override void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**Purpose:** Called when the `party leader change offer canceled` event is raised.

### OnPartyLeaderChanged
`public override void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**Purpose:** Called when the `party leader changed` event is raised.

### OnMainPartyStarving
`public override void OnMainPartyStarving()`

**Purpose:** Called when the `main party starving` event is raised.

### OnPlayerJoinedTournament
`public override void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**Purpose:** Called when the `player joined tournament` event is raised.

### OnCraftingOrderCompleted
`public override void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** Called when the `crafting order completed` event is raised.

### OnItemsRefined
`public override void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** Called when the `items refined` event is raised.

### OnMapEventContinuityNeedsUpdate
`public override void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**Purpose:** Called when the `map event continuity needs update` event is raised.

### OnHeirSelectionRequested
`public override void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**Purpose:** Called when the `heir selection requested` event is raised.

### OnHeirSelectionOver
`public override void OnHeirSelectionOver(Hero selectedHeir)`

**Purpose:** Called when the `heir selection over` event is raised.

### OnCharacterCreationInitialized
`public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**Purpose:** Called when the `character creation initialized` event is raised.

### OnShipDestroyed
`public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**Purpose:** Called when the `ship destroyed` event is raised.

### OnPartyLeftArmy
`public override void OnPartyLeftArmy(MobileParty party, Army army)`

**Purpose:** Called when the `party left army` event is raised.

### OnShipOwnerChanged
`public override void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)`

**Purpose:** Called when the `ship owner changed` event is raised.

### OnShipRepaired
`public override void OnShipRepaired(Ship ship, Settlement repairPort)`

**Purpose:** Called when the `ship repaired` event is raised.

### OnFigureheadUnlocked
`public override void OnFigureheadUnlocked(Figurehead figurehead)`

**Purpose:** Called when the `figurehead unlocked` event is raised.

### OnPartyAddedToMapEvent
`public override void OnPartyAddedToMapEvent(PartyBase party)`

**Purpose:** Called when the `party added to map event` event is raised.

### OnIncidentResolved
`public override void OnIncidentResolved(Incident incident)`

**Purpose:** Called when the `incident resolved` event is raised.

### OnMobilePartyNavigationStateChanged
`public override void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party navigation state changed` event is raised.

### OnMobilePartyJoinedToSiegeEvent
`public override void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party joined to siege event` event is raised.

### OnMobilePartyLeftSiegeEvent
`public override void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party left siege event` event is raised.

### OnBlockadeActivated
`public override void OnBlockadeActivated(SiegeEvent siegeEvent)`

**Purpose:** Called when the `blockade activated` event is raised.

### OnBlockadeDeactivated
`public override void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**Purpose:** Called when the `blockade deactivated` event is raised.

### OnMapMarkerCreated
`public override void OnMapMarkerCreated(MapMarker mapMarker)`

**Purpose:** Called when the `map marker created` event is raised.

### OnMapMarkerRemoved
`public override void OnMapMarkerRemoved(MapMarker mapMarker)`

**Purpose:** Called when the `map marker removed` event is raised.

### OnMercenaryServiceStarted
`public override void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**Purpose:** Called when the `mercenary service started` event is raised.

### OnMercenaryServiceEnded
`public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**Purpose:** Called when the `mercenary service ended` event is raised.

### OnAllianceStarted
`public override void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Called when the `alliance started` event is raised.

### OnAllianceEnded
`public override void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Called when the `alliance ended` event is raised.

### OnCallToWarAgreementStarted
`public override void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Called when the `call to war agreement started` event is raised.

### OnCallToWarAgreementEnded
`public override void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Called when the `call to war agreement ended` event is raised.

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero lead party`.

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero marry`.

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero equipment be changed`.

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `be governor or have party role`.

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the current object can `hero die`.

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `hero become prisoner`.

### CanPlayerMeetWithHeroAfterConversation
`public override void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `player meet with hero after conversation`.

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `move to settlement`.

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object can `have campaign issues`.

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Handles logic related to `is settlement busy`.

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**Purpose:** Called when the `hero unregistered` event is raised.

### OnShipCreated
`public override void OnShipCreated(Ship ship, Settlement createdSettlement)`

**Purpose:** Called when the `ship created` event is raised.

### OnConfigChanged
`public override void OnConfigChanged()`

**Purpose:** Called when the `config changed` event is raised.

### OnMobilePartyRaftStateChanged
`public override void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**Purpose:** Called when the `mobile party raft state changed` event is raised.

## Usage Example

```csharp
var value = new CampaignEventDispatcher();
value.RemoveListeners(o);
```

## See Also

- [Complete Class Catalog](../catalog)