---
title: "CampaignEvents"
description: "Auto-generated class reference for CampaignEvents."
---
# CampaignEvents

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEvents.cs`

## Overview

`CampaignEvents` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RemoveListeners
`public override void RemoveListeners(object obj)`

**Purpose:** Removes listeners from the current collection or state.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.RemoveListeners(obj);
```

### OnPlayerBodyPropertiesChanged
`public override void OnPlayerBodyPropertiesChanged()`

**Purpose:** Invoked when the player body properties changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerBodyPropertiesChanged();
```

### OnBarterablesRequested
`public override void OnBarterablesRequested(BarterData args)`

**Purpose:** Invoked when the barterables requested event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBarterablesRequested(args);
```

### OnHeroLevelledUp
`public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**Purpose:** Invoked when the hero levelled up event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroLevelledUp(hero, false);
```

### OnHomeHideoutChanged
`public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)`

**Purpose:** Invoked when the home hideout changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHomeHideoutChanged(banditPartyComponent, oldHomeHideout);
```

### OnHeroGainedSkill
`public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** Invoked when the hero gained skill event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroGainedSkill(hero, skill, 0, false);
```

### OnCharacterCreationIsOver
`public override void OnCharacterCreationIsOver()`

**Purpose:** Invoked when the character creation is over event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCharacterCreationIsOver();
```

### OnHeroCreated
`public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**Purpose:** Invoked when the hero created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroCreated(hero, false);
```

### OnHeroActivated
`public override void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)`

**Purpose:** Invoked when the hero activated event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroActivated(hero, previousState);
```

### OnHeroOccupationChanged
`public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**Purpose:** Invoked when the hero occupation changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroOccupationChanged(hero, oldOccupation);
```

### OnHeroWounded
`public override void OnHeroWounded(Hero woundedHero)`

**Purpose:** Invoked when the hero wounded event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroWounded(woundedHero);
```

### OnBarterAccepted
`public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Invoked when the barter accepted event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBarterAccepted(offererHero, otherHero, barters);
```

### OnBarterCanceled
`public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Invoked when the barter canceled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBarterCanceled(offererHero, otherHero, barters);
```

### OnHeroRelationChanged
`public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**Purpose:** Invoked when the hero relation changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroRelationChanged(effectiveHero, effectiveHeroGainedRelationWith, 0, true, detail, originalHero, originalGainedRelationWith);
```

### OnQuestLogAdded
`public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**Purpose:** Invoked when the quest log added event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnQuestLogAdded(quest, false);
```

### OnIssueLogAdded
`public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**Purpose:** Invoked when the issue log added event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnIssueLogAdded(issue, false);
```

### OnClanTierChanged
`public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**Purpose:** Invoked when the clan tier changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanTierChanged(clan, false);
```

### OnClanChangedKingdom
`public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the clan changed kingdom event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanChangedKingdom(clan, oldKingdom, newKingdom, detail, false);
```

### OnClanDefected
`public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**Purpose:** Invoked when the clan defected event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanDefected(clan, oldKingdom, newKingdom);
```

### OnClanCreated
`public override void OnClanCreated(Clan clan, bool isCompanion)`

**Purpose:** Invoked when the clan created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanCreated(clan, false);
```

### OnHeroJoinedParty
`public override void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)`

**Purpose:** Invoked when the hero joined party event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroJoinedParty(hero, mobileParty);
```

### OnHeroOrPartyTradedGold
`public override void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)`

**Purpose:** Invoked when the hero or party traded gold event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroOrPartyTradedGold((Hero, giver, (Hero, recipient, (int, "example", true);
```

### OnHeroOrPartyGaveItem
`public override void OnHeroOrPartyGaveItem((Hero, PartyBase) giver, (Hero, PartyBase) receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**Purpose:** Invoked when the hero or party gave item event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroOrPartyGaveItem((Hero, giver, (Hero, receiver, itemRosterElement, true);
```

### OnBanditPartyRecruited
`public override void OnBanditPartyRecruited(MobileParty banditParty)`

**Purpose:** Invoked when the bandit party recruited event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBanditPartyRecruited(banditParty);
```

### OnKingdomDecisionAdded
`public override void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Invoked when the kingdom decision added event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnKingdomDecisionAdded(decision, false);
```

### OnKingdomDecisionCancelled
`public override void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Invoked when the kingdom decision cancelled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnKingdomDecisionCancelled(decision, false);
```

### OnKingdomDecisionConcluded
`public override void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**Purpose:** Invoked when the kingdom decision concluded event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnKingdomDecisionConcluded(decision, chosenOutcome, false);
```

### OnPartyAttachedAnotherParty
`public override void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**Purpose:** Invoked when the party attached another party event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyAttachedAnotherParty(mobileParty);
```

### OnNearbyPartyAddedToPlayerMapEvent
`public override void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**Purpose:** Invoked when the nearby party added to player map event event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnNearbyPartyAddedToPlayerMapEvent(mobileParty);
```

### OnArmyCreated
`public override void OnArmyCreated(Army army)`

**Purpose:** Invoked when the army created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnArmyCreated(army);
```

### OnArmyDispersed
`public override void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**Purpose:** Invoked when the army dispersed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnArmyDispersed(army, reason, false);
```

### OnArmyGathered
`public override void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**Purpose:** Invoked when the army gathered event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnArmyGathered(army, gatheringPoint);
```

### OnPerkOpened
`public override void OnPerkOpened(Hero hero, PerkObject perk)`

**Purpose:** Invoked when the perk opened event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPerkOpened(hero, perk);
```

### OnPerkReset
`public override void OnPerkReset(Hero hero, PerkObject perk)`

**Purpose:** Invoked when the perk reset event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPerkReset(hero, perk);
```

### OnPlayerTraitChanged
`public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**Purpose:** Invoked when the player trait changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerTraitChanged(trait, 0);
```

### OnVillageStateChanged
`public override void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**Purpose:** Invoked when the village state changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the settlement entered event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSettlementEntered(party, settlement, hero);
```

### OnAfterSettlementEntered
`public override void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the after settlement entered event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAfterSettlementEntered(party, settlement, hero);
```

### OnBeforeSettlementEntered
`public override void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the before settlement entered event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforeSettlementEntered(party, settlement, hero);
```

### OnMercenaryTroopChangedInTown
`public override void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**Purpose:** Invoked when the mercenary troop changed in town event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMercenaryTroopChangedInTown(town, oldTroopType, newTroopType);
```

### OnMercenaryNumberChangedInTown
`public override void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**Purpose:** Invoked when the mercenary number changed in town event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMercenaryNumberChangedInTown(town, 0, 0);
```

### OnAlleyOccupiedByPlayer
`public override void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**Purpose:** Invoked when the alley occupied by player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAlleyOccupiedByPlayer(alley, troops);
```

### OnAlleyOwnerChanged
`public override void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** Invoked when the alley owner changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAlleyOwnerChanged(alley, newOwner, oldOwner);
```

### OnAlleyClearedByPlayer
`public override void OnAlleyClearedByPlayer(Alley alley)`

**Purpose:** Invoked when the alley cleared by player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAlleyClearedByPlayer(alley);
```

### OnRomanticStateChanged
`public override void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**Purpose:** Invoked when the romantic state changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRomanticStateChanged(hero1, hero2, romanceLevel);
```

### OnBeforeHeroesMarried
`public override void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)`

**Purpose:** Invoked when the before heroes married event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforeHeroesMarried(hero1, hero2, false);
```

### OnPlayerEliminatedFromTournament
`public override void OnPlayerEliminatedFromTournament(int round, Town town)`

**Purpose:** Invoked when the player eliminated from tournament event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerEliminatedFromTournament(0, town);
```

### OnPlayerStartedTournamentMatch
`public override void OnPlayerStartedTournamentMatch(Town town)`

**Purpose:** Invoked when the player started tournament match event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerStartedTournamentMatch(town);
```

### OnTournamentStarted
`public override void OnTournamentStarted(Town town)`

**Purpose:** Invoked when the tournament started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTournamentStarted(town);
```

### OnWarDeclared
`public override void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**Purpose:** Invoked when the war declared event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnWarDeclared(faction1, faction2, declareWarDetail);
```

### OnTournamentFinished
`public override void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**Purpose:** Invoked when the tournament finished event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTournamentFinished(winner, participants, town, prize);
```

### OnTournamentCancelled
`public override void OnTournamentCancelled(Town town)`

**Purpose:** Invoked when the tournament cancelled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTournamentCancelled(town);
```

### OnStartBattle
`public override void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**Purpose:** Invoked when the start battle event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnStartBattle(attackerParty, defenderParty, subject, true);
```

### OnRebellionFinished
`public override void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**Purpose:** Invoked when the rebellion finished event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRebellionFinished(settlement, oldOwnerClan);
```

### TownRebelliousStateChanged
`public override void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**Purpose:** Executes the TownRebelliousStateChanged logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.TownRebelliousStateChanged(town, false);
```

### OnRebelliousClanDisbandedAtSettlement
`public override void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**Purpose:** Invoked when the rebellious clan disbanded at settlement event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRebelliousClanDisbandedAtSettlement(settlement, clan);
```

### OnItemsLooted
`public override void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**Purpose:** Invoked when the items looted event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnItemsLooted(mobileParty, items);
```

### OnMobilePartyDestroyed
`public override void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**Purpose:** Invoked when the mobile party destroyed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyDestroyed(mobileParty, destroyerParty);
```

### OnMobilePartyCreated
`public override void OnMobilePartyCreated(MobileParty party)`

**Purpose:** Invoked when the mobile party created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyCreated(party);
```

### OnMapInteractableCreated
`public override void OnMapInteractableCreated(IInteractablePoint interactable)`

**Purpose:** Invoked when the map interactable created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapInteractableCreated(interactable);
```

### OnMapInteractableDestroyed
`public override void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**Purpose:** Invoked when the map interactable destroyed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapInteractableDestroyed(interactable);
```

### OnMobilePartyQuestStatusChanged
`public override void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**Purpose:** Invoked when the mobile party quest status changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyQuestStatusChanged(party, false);
```

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the hero killed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroKilled(victim, killer, detail, false);
```

### OnBeforeHeroKilled
`public override void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the before hero killed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforeHeroKilled(victim, killer, detail, false);
```

### OnChildEducationCompleted
`public override void OnChildEducationCompleted(Hero hero, int age)`

**Purpose:** Invoked when the child education completed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnChildEducationCompleted(hero, 0);
```

### OnHeroComesOfAge
`public override void OnHeroComesOfAge(Hero hero)`

**Purpose:** Invoked when the hero comes of age event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroComesOfAge(hero);
```

### OnHeroGrowsOutOfInfancy
`public override void OnHeroGrowsOutOfInfancy(Hero hero)`

**Purpose:** Invoked when the hero grows out of infancy event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroGrowsOutOfInfancy(hero);
```

### OnHeroReachesTeenAge
`public override void OnHeroReachesTeenAge(Hero hero)`

**Purpose:** Invoked when the hero reaches teen age event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroReachesTeenAge(hero);
```

### OnCharacterDefeated
`public override void OnCharacterDefeated(Hero winner, Hero loser)`

**Purpose:** Invoked when the character defeated event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCharacterDefeated(winner, loser);
```

### OnRulingClanChanged
`public override void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)`

**Purpose:** Invoked when the ruling clan changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRulingClanChanged(kingdom, oldRulingClan);
```

### OnHeroPrisonerTaken
`public override void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**Purpose:** Invoked when the hero prisoner taken event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroPrisonerTaken(capturer, prisoner);
```

### OnHeroPrisonerReleased
`public override void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the hero prisoner released event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroPrisonerReleased(prisoner, party, capturerFaction, detail, false);
```

### OnCharacterBecameFugitive
`public override void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**Purpose:** Invoked when the character became fugitive event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCharacterBecameFugitive(hero, true);
```

### OnPlayerMetHero
`public override void OnPlayerMetHero(Hero hero)`

**Purpose:** Invoked when the player met hero event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerMetHero(hero);
```

### OnPlayerLearnsAboutHero
`public override void OnPlayerLearnsAboutHero(Hero hero)`

**Purpose:** Invoked when the player learns about hero event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerLearnsAboutHero(hero);
```

### OnRenownGained
`public override void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**Purpose:** Invoked when the renown gained event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRenownGained(hero, 0, false);
```

### OnCrimeRatingChanged
`public override void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**Purpose:** Invoked when the crime rating changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCrimeRatingChanged(kingdom, 0);
```

### OnNewCompanionAdded
`public override void OnNewCompanionAdded(Hero newCompanion)`

**Purpose:** Invoked when the new companion added event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnNewCompanionAdded(newCompanion);
```

### OnAfterMissionStarted
`public override void OnAfterMissionStarted(IMission iMission)`

**Purpose:** Invoked when the after mission started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAfterMissionStarted(iMission);
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Invoked when the game menu opened event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGameMenuOpened(args);
```

### AfterGameMenuInitialized
`public override void AfterGameMenuInitialized(MenuCallbackArgs args)`

**Purpose:** Executes the AfterGameMenuInitialized logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.AfterGameMenuInitialized(args);
```

### BeforeGameMenuOpened
`public override void BeforeGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Executes the BeforeGameMenuOpened logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.BeforeGameMenuOpened(args);
```

### OnMakePeace
`public override void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**Purpose:** Invoked when the make peace event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMakePeace(side1Faction, side2Faction, detail);
```

### OnKingdomDestroyed
`public override void OnKingdomDestroyed(Kingdom destroyedKingdom)`

**Purpose:** Invoked when the kingdom destroyed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnKingdomDestroyed(destroyedKingdom);
```

### CanKingdomBeDiscontinued
`public override void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for kingdom be discontinued.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanKingdomBeDiscontinued(kingdom, result);
```

### OnKingdomCreated
`public override void OnKingdomCreated(Kingdom createdKingdom)`

**Purpose:** Invoked when the kingdom created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnKingdomCreated(createdKingdom);
```

### OnVillageBecomeNormal
`public override void OnVillageBecomeNormal(Village village)`

**Purpose:** Invoked when the village become normal event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnVillageBecomeNormal(village);
```

### OnVillageBeingRaided
`public override void OnVillageBeingRaided(Village village)`

**Purpose:** Invoked when the village being raided event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnVillageBeingRaided(village);
```

### OnVillageLooted
`public override void OnVillageLooted(Village village)`

**Purpose:** Invoked when the village looted event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnVillageLooted(village);
```

### OnCompanionRemoved
`public override void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**Purpose:** Invoked when the companion removed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCompanionRemoved(companion, detail);
```

### OnAgentJoinedConversation
`public override void OnAgentJoinedConversation(IAgent agent)`

**Purpose:** Invoked when the agent joined conversation event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAgentJoinedConversation(agent);
```

### OnConversationEnded
`public override void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**Purpose:** Invoked when the conversation ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnConversationEnded(characters);
```

### OnMapEventEnded
`public override void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Invoked when the map event ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapEventEnded(mapEvent);
```

### OnMapEventStarted
`public override void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Invoked when the map event started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapEventStarted(mapEvent, attackerParty, defenderParty);
```

### OnPrisonersChangeInSettlement
`public override void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**Purpose:** Invoked when the prisoners change in settlement event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPrisonersChangeInSettlement(settlement, prisonerRoster, prisonerHero, false);
```

### OnPlayerBoardGameOver
`public override void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**Purpose:** Invoked when the player board game over event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerBoardGameOver(opposingHero, state);
```

### OnRansomOfferedToPlayer
`public override void OnRansomOfferedToPlayer(Hero captiveHero)`

**Purpose:** Invoked when the ransom offered to player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRansomOfferedToPlayer(captiveHero);
```

### OnRansomOfferCancelled
`public override void OnRansomOfferCancelled(Hero captiveHero)`

**Purpose:** Invoked when the ransom offer cancelled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnRansomOfferCancelled(captiveHero);
```

### OnPeaceOfferedToPlayer
`public override void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDurationInDays)`

**Purpose:** Invoked when the peace offered to player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPeaceOfferedToPlayer(opponentFaction, 0, 0);
```

### OnTradeAgreementSigned
`public override void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**Purpose:** Invoked when the trade agreement signed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTradeAgreementSigned(kingdom, other);
```

### OnPeaceOfferResolved
`public override void OnPeaceOfferResolved(IFaction opponentFaction)`

**Purpose:** Invoked when the peace offer resolved event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPeaceOfferResolved(opponentFaction);
```

### OnMarriageOfferedToPlayer
`public override void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** Invoked when the marriage offered to player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferCanceled
`public override void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** Invoked when the marriage offer canceled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMarriageOfferCanceled(suitor, maiden);
```

### OnVassalOrMercenaryServiceOfferedToPlayer
`public override void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**Purpose:** Invoked when the vassal or mercenary service offered to player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnVassalOrMercenaryServiceOfferedToPlayer(offeredKingdom);
```

### OnVassalOrMercenaryServiceOfferCanceled
`public override void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**Purpose:** Invoked when the vassal or mercenary service offer canceled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnVassalOrMercenaryServiceOfferCanceled(offeredKingdom);
```

### OnMercenaryServiceStarted
`public override void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**Purpose:** Invoked when the mercenary service started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMercenaryServiceStarted(mercenaryClan, details);
```

### OnMercenaryServiceEnded
`public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**Purpose:** Invoked when the mercenary service ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMercenaryServiceEnded(mercenaryClan, details);
```

### OnMissionStarted
`public override void OnMissionStarted(IMission mission)`

**Purpose:** Invoked when the mission started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMissionStarted(mission);
```

### BeforeMissionOpened
`public override void BeforeMissionOpened()`

**Purpose:** Executes the BeforeMissionOpened logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.BeforeMissionOpened();
```

### OnPartyRemoved
`public override void OnPartyRemoved(PartyBase party)`

**Purpose:** Invoked when the party removed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyRemoved(party);
```

### OnPartySizeChanged
`public override void OnPartySizeChanged(PartyBase party)`

**Purpose:** Invoked when the party size changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartySizeChanged(party);
```

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Invoked when the settlement owner changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### OnGovernorChanged
`public override void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**Purpose:** Invoked when the governor changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGovernorChanged(fortification, oldGovernor, newGovernor);
```

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the settlement left event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSettlementLeft(party, settlement);
```

### WeeklyTick
`public override void WeeklyTick()`

**Purpose:** Executes the WeeklyTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.WeeklyTick();
```

### DailyTick
`public override void DailyTick()`

**Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.DailyTick();
```

### DailyTickParty
`public override void DailyTickParty(MobileParty mobileParty)`

**Purpose:** Executes the DailyTickParty logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.DailyTickParty(mobileParty);
```

### DailyTickTown
`public override void DailyTickTown(Town town)`

**Purpose:** Executes the DailyTickTown logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.DailyTickTown(town);
```

### DailyTickSettlement
`public override void DailyTickSettlement(Settlement settlement)`

**Purpose:** Executes the DailyTickSettlement logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.DailyTickSettlement(settlement);
```

### DailyTickHero
`public override void DailyTickHero(Hero hero)`

**Purpose:** Executes the DailyTickHero logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.DailyTickHero(hero);
```

### DailyTickClan
`public override void DailyTickClan(Clan clan)`

**Purpose:** Executes the DailyTickClan logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.DailyTickClan(clan);
```

### CollectAvailableTutorials
`public override void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**Purpose:** Executes the CollectAvailableTutorials logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CollectAvailableTutorials(tutorials);
```

### OnTutorialCompleted
`public override void OnTutorialCompleted(string tutorial)`

**Purpose:** Invoked when the tutorial completed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTutorialCompleted("example");
```

### OnBuildingLevelChanged
`public override void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**Purpose:** Invoked when the building level changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBuildingLevelChanged(town, building, 0);
```

### HourlyTick
`public override void HourlyTick()`

**Purpose:** Executes the HourlyTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.HourlyTick();
```

### QuarterHourlyTick
`public override void QuarterHourlyTick()`

**Purpose:** Executes the QuarterHourlyTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.QuarterHourlyTick();
```

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Executes the HourlyTickParty logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.HourlyTickParty(mobileParty);
```

### HourlyTickSettlement
`public override void HourlyTickSettlement(Settlement settlement)`

**Purpose:** Executes the HourlyTickSettlement logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.HourlyTickSettlement(settlement);
```

### HourlyTickClan
`public override void HourlyTickClan(Clan clan)`

**Purpose:** Executes the HourlyTickClan logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.HourlyTickClan(clan);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.Tick(0);
```

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the session start event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSessionStart(campaignGameStarter);
```

### OnAfterSessionStart
`public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the after session start event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAfterSessionStart(campaignGameStarter);
```

### OnNewGameCreated
`public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the new game created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnNewGameCreated(campaignGameStarter);
```

### OnGameEarlyLoaded
`public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the game early loaded event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGameEarlyLoaded(campaignGameStarter);
```

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGameLoaded(campaignGameStarter);
```

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**Purpose:** Invoked when the game load finished event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGameLoadFinished();
```

### AiHourlyTick
`public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**Purpose:** Executes the AiHourlyTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.AiHourlyTick(party, partyThinkParams);
```

### TickPartialHourlyAi
`public override void TickPartialHourlyAi(MobileParty party)`

**Purpose:** Advances the partial hourly ai state each frame or update cycle.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.TickPartialHourlyAi(party);
```

### OnPartyJoinedArmy
`public override void OnPartyJoinedArmy(MobileParty mobileParty)`

**Purpose:** Invoked when the party joined army event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyJoinedArmy(mobileParty);
```

### OnPartyRemovedFromArmy
`public override void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**Purpose:** Invoked when the party removed from army event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyRemovedFromArmy(mobileParty);
```

### OnPlayerArmyLeaderChangedBehavior
`public override void OnPlayerArmyLeaderChangedBehavior()`

**Purpose:** Invoked when the player army leader changed behavior event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerArmyLeaderChangedBehavior();
```

### OnMissionEnded
`public override void OnMissionEnded(IMission mission)`

**Purpose:** Invoked when the mission ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMissionEnded(mission);
```

### QuarterDailyPartyTick
`public override void QuarterDailyPartyTick(MobileParty mobileParty)`

**Purpose:** Executes the QuarterDailyPartyTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.QuarterDailyPartyTick(mobileParty);
```

### OnPlayerBattleEnd
`public override void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** Invoked when the player battle end event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerBattleEnd(mapEvent);
```

### OnUnitRecruited
`public override void OnUnitRecruited(CharacterObject character, int amount)`

**Purpose:** Invoked when the unit recruited event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnUnitRecruited(character, 0);
```

### OnChildConceived
`public override void OnChildConceived(Hero mother)`

**Purpose:** Invoked when the child conceived event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnChildConceived(mother);
```

### OnGivenBirth
`public override void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**Purpose:** Invoked when the given birth event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGivenBirth(mother, aliveChildren, 0);
```

### MissionTick
`public override void MissionTick(float dt)`

**Purpose:** Executes the MissionTick logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.MissionTick(0);
```

### OnArmyOverlaySetDirty
`public override void OnArmyOverlaySetDirty()`

**Purpose:** Invoked when the army overlay set dirty event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnArmyOverlaySetDirty();
```

### OnPlayerDesertedBattle
`public override void OnPlayerDesertedBattle(int sacrificedMenCount)`

**Purpose:** Invoked when the player deserted battle event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerDesertedBattle(0);
```

### OnPartyVisibilityChanged
`public override void OnPartyVisibilityChanged(PartyBase party)`

**Purpose:** Invoked when the party visibility changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyVisibilityChanged(party);
```

### TrackDetected
`public override void TrackDetected(Track track)`

**Purpose:** Executes the TrackDetected logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.TrackDetected(track);
```

### TrackLost
`public override void TrackLost(Track track)`

**Purpose:** Executes the TrackLost logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.TrackLost(track);
```

### LocationCharactersAreReadyToSpawn
`public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**Purpose:** Executes the LocationCharactersAreReadyToSpawn logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.LocationCharactersAreReadyToSpawn(dictionary<string, 0);
```

### OnBeforePlayerAgentSpawn
`public override void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**Purpose:** Invoked when the before player agent spawn event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforePlayerAgentSpawn(spawnFrame);
```

### OnPlayerAgentSpawned
`public override void OnPlayerAgentSpawned()`

**Purpose:** Invoked when the player agent spawned event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerAgentSpawned();
```

### LocationCharactersSimulated
`public override void LocationCharactersSimulated()`

**Purpose:** Executes the LocationCharactersSimulated logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.LocationCharactersSimulated();
```

### OnPlayerUpgradedTroops
`public override void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**Purpose:** Invoked when the player upgraded troops event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerUpgradedTroops(upgradeFromTroop, upgradeToTroop, 0);
```

### OnHeroCombatHit
`public override void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**Purpose:** Invoked when the hero combat hit event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroCombatHit(attackerTroop, attackedTroop, party, usedWeapon, false, 0);
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** Invoked when the character portrait pop up opened event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCharacterPortraitPopUpOpened(character);
```

### OnCharacterPortraitPopUpClosed
`public override void OnCharacterPortraitPopUpClosed()`

**Purpose:** Invoked when the character portrait pop up closed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCharacterPortraitPopUpClosed();
```

### OnPlayerStartTalkFromMenu
`public override void OnPlayerStartTalkFromMenu(Hero hero)`

**Purpose:** Invoked when the player start talk from menu event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerStartTalkFromMenu(hero);
```

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**Purpose:** Invoked when the game menu option selected event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGameMenuOptionSelected(gameMenu, gameMenuOption);
```

### OnPlayerStartRecruitment
`public override void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**Purpose:** Invoked when the player start recruitment event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerStartRecruitment(recruitTroopCharacter);
```

### OnBeforePlayerCharacterChanged
`public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**Purpose:** Invoked when the before player character changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforePlayerCharacterChanged(oldPlayer, newPlayer);
```

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)`

**Purpose:** Invoked when the player character changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerCharacterChanged(oldPlayer, newPlayer, newMainParty, false);
```

### OnClanLeaderChanged
`public override void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**Purpose:** Invoked when the clan leader changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanLeaderChanged(oldLeader, newLeader);
```

### OnSiegeEventStarted
`public override void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the siege event started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSiegeEventStarted(siegeEvent);
```

### OnPlayerSiegeStarted
`public override void OnPlayerSiegeStarted()`

**Purpose:** Invoked when the player siege started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerSiegeStarted();
```

### OnSiegeEventEnded
`public override void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the siege event ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSiegeEventEnded(siegeEvent);
```

### OnSiegeAftermathApplied
`public override void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**Purpose:** Invoked when the siege aftermath applied event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSiegeAftermathApplied(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 0);
```

### OnSiegeBombardmentHit
`public override void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**Purpose:** Invoked when the siege bombardment hit event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSiegeBombardmentHit(besiegerParty, besiegedSettlement, side, weapon, target);
```

### OnSiegeBombardmentWallHit
`public override void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**Purpose:** Invoked when the siege bombardment wall hit event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSiegeBombardmentWallHit(besiegerParty, besiegedSettlement, side, weapon, false);
```

### OnSiegeEngineDestroyed
`public override void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**Purpose:** Invoked when the siege engine destroyed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSiegeEngineDestroyed(besiegerParty, besiegedSettlement, side, destroyedEngine);
```

### OnTradeRumorIsTaken
`public override void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Invoked when the trade rumor is taken event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTradeRumorIsTaken(newRumors, null);
```

### OnCheckForIssue
`public override void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCheckForIssue(hero);
```

### OnIssueUpdated
`public override void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver = null)`

**Purpose:** Invoked when the issue updated event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnIssueUpdated(issue, details, null);
```

### OnTroopsDeserted
`public override void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**Purpose:** Invoked when the troops deserted event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTroopsDeserted(mobileParty, desertedTroops);
```

### OnTroopRecruited
`public override void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**Purpose:** Invoked when the troop recruited event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTroopRecruited(recruiterHero, recruitmentSettlement, recruitmentSource, troop, 0);
```

### OnTroopGivenToSettlement
`public override void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**Purpose:** Invoked when the troop given to settlement event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnTroopGivenToSettlement(giverHero, recipientSettlement, roster);
```

### OnItemSold
`public override void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**Purpose:** Invoked when the item sold event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnItemSold(receiverParty, payerParty, itemRosterElement, 0, currentSettlement);
```

### OnCaravanTransactionCompleted
`public override void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<(EquipmentElement, int)> itemRosterElements)`

**Purpose:** Invoked when the caravan transaction completed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCaravanTransactionCompleted(caravanParty, town, list<(EquipmentElement, 0);
```

### OnPrisonerSold
`public override void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**Purpose:** Invoked when the prisoner sold event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPrisonerSold(sellerParty, buyerParty, prisoners);
```

### OnPartyDisbandStarted
`public override void OnPartyDisbandStarted(MobileParty disbandParty)`

**Purpose:** Invoked when the party disband started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyDisbandStarted(disbandParty);
```

### OnPartyDisbanded
`public override void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**Purpose:** Invoked when the party disbanded event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyDisbanded(disbandParty, relatedSettlement);
```

### OnPartyDisbandCanceled
`public override void OnPartyDisbandCanceled(MobileParty disbandParty)`

**Purpose:** Invoked when the party disband canceled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyDisbandCanceled(disbandParty);
```

### OnHideoutSpotted
`public override void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**Purpose:** Invoked when the hideout spotted event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHideoutSpotted(party, hideoutParty);
```

### OnHideoutDeactivated
`public override void OnHideoutDeactivated(Settlement hideout)`

**Purpose:** Invoked when the hideout deactivated event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHideoutDeactivated(hideout);
```

### OnHeroSharedFoodWithAnother
`public override void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**Purpose:** Invoked when the hero shared food with another event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroSharedFoodWithAnother(supporterHero, supportedHero, 0);
```

### OnPlayerInventoryExchange
`public override void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**Purpose:** Invoked when the player inventory exchange event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerInventoryExchange(list<(ItemRosterElement, 0, list<(ItemRosterElement, 0, false);
```

### OnItemsDiscardedByPlayer
`public override void OnItemsDiscardedByPlayer(ItemRoster discardedItems)`

**Purpose:** Invoked when the items discarded by player event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnItemsDiscardedByPlayer(discardedItems);
```

### OnPersuasionProgressCommitted
`public override void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**Purpose:** Invoked when the persuasion progress committed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPersuasionProgressCommitted(tuple<PersuasionOptionArgs, progress);
```

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** Invoked when the quest completed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnQuestCompleted(quest, detail);
```

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**Purpose:** Invoked when the quest started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnQuestStarted(quest);
```

### OnItemProduced
`public override void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Invoked when the item produced event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnItemProduced(itemObject, settlement, 0);
```

### OnItemConsumed
`public override void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Invoked when the item consumed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnItemConsumed(itemObject, settlement, 0);
```

### OnPartyConsumedFood
`public override void OnPartyConsumedFood(MobileParty party)`

**Purpose:** Invoked when the party consumed food event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyConsumedFood(party);
```

### OnBeforeMainCharacterDied
`public override void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the before main character died event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforeMainCharacterDied(victim, killer, detail, false);
```

### OnNewIssueCreated
`public override void OnNewIssueCreated(IssueBase issue)`

**Purpose:** Invoked when the new issue created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnNewIssueCreated(issue);
```

### OnIssueOwnerChanged
`public override void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**Purpose:** Invoked when the issue owner changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnIssueOwnerChanged(issue, oldOwner);
```

### OnGameOver
`public override void OnGameOver()`

**Purpose:** Invoked when the game over event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnGameOver();
```

### SiegeCompleted
`public override void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Executes the SiegeCompleted logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.SiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### AfterSiegeCompleted
`public override void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Executes the AfterSiegeCompleted logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.AfterSiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### SiegeEngineBuilt
`public override void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngineType)`

**Purpose:** Executes the SiegeEngineBuilt logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.SiegeEngineBuilt(siegeEvent, side, siegeEngineType);
```

### RaidCompleted
`public override void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** Executes the RaidCompleted logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.RaidCompleted(winnerSide, raidEvent);
```

### ForceVolunteersCompleted
`public override void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**Purpose:** Executes the ForceVolunteersCompleted logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.ForceVolunteersCompleted(winnerSide, forceVolunteersEvent);
```

### ForceSuppliesCompleted
`public override void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**Purpose:** Executes the ForceSuppliesCompleted logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.ForceSuppliesCompleted(winnerSide, forceSuppliesEvent);
```

### OnHideoutBattleCompleted
`public override void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)`

**Purpose:** Invoked when the hideout battle completed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHideoutBattleCompleted(winnerSide, hideoutEventComponent, battleEndState);
```

### OnClanDestroyed
`public override void OnClanDestroyed(Clan destroyedClan)`

**Purpose:** Invoked when the clan destroyed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanDestroyed(destroyedClan);
```

### OnNewItemCrafted
`public override void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**Purpose:** Invoked when the new item crafted event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnNewItemCrafted(itemObject, overriddenItemModifier, false);
```

### CraftingPartUnlocked
`public override void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**Purpose:** Executes the CraftingPartUnlocked logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CraftingPartUnlocked(craftingPiece);
```

### OnWorkshopInitialized
`public override void OnWorkshopInitialized(Workshop workshop)`

**Purpose:** Invoked when the workshop initialized event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnWorkshopInitialized(workshop);
```

### OnWorkshopOwnerChanged
`public override void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**Purpose:** Invoked when the workshop owner changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnWorkshopOwnerChanged(workshop, oldOwner);
```

### OnWorkshopTypeChanged
`public override void OnWorkshopTypeChanged(Workshop workshop)`

**Purpose:** Invoked when the workshop type changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnWorkshopTypeChanged(workshop);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** Invoked when the before save event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBeforeSave();
```

### OnSaveStarted
`public override void OnSaveStarted()`

**Purpose:** Invoked when the save started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSaveStarted();
```

### OnSaveOver
`public override void OnSaveOver(bool isSuccessful, string saveName)`

**Purpose:** Invoked when the save over event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnSaveOver(false, "example");
```

### CollectMetadataEntries
`public override void CollectMetadataEntries(List<KeyValuePair<string, string>> pairs)`

**Purpose:** Executes the CollectMetadataEntries logic.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CollectMetadataEntries(list<KeyValuePair<string, "example");
```

### OnPrisonerTaken
`public override void OnPrisonerTaken(FlattenedTroopRoster roster)`

**Purpose:** Invoked when the prisoner taken event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPrisonerTaken(roster);
```

### OnPrisonerReleased
`public override void OnPrisonerReleased(FlattenedTroopRoster roster)`

**Purpose:** Invoked when the prisoner released event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPrisonerReleased(roster);
```

### OnMainPartyPrisonerRecruited
`public override void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**Purpose:** Invoked when the main party prisoner recruited event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMainPartyPrisonerRecruited(roster);
```

### OnPrisonerDonatedToSettlement
`public override void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**Purpose:** Invoked when the prisoner donated to settlement event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPrisonerDonatedToSettlement(donatingParty, donatedPrisoners, donatedSettlement);
```

### OnEquipmentSmeltedByHero
`public override void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement smeltedEquipmentElement)`

**Purpose:** Invoked when the equipment smelted by hero event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnEquipmentSmeltedByHero(hero, smeltedEquipmentElement);
```

### OnPlayerTradeProfit
`public override void OnPlayerTradeProfit(int profit)`

**Purpose:** Invoked when the player trade profit event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerTradeProfit(0);
```

### OnHeroChangedClan
`public override void OnHeroChangedClan(Hero hero, Clan oldClan)`

**Purpose:** Invoked when the hero changed clan event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroChangedClan(hero, oldClan);
```

### OnHeroGetsBusy
`public override void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**Purpose:** Invoked when the hero gets busy event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroGetsBusy(hero, heroGetsBusyReason);
```

### OnCollectLootItems
`public override void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**Purpose:** Invoked when the collect loot items event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCollectLootItems(winnerParty, gainedLoots);
```

### OnLootDistributedToParty
`public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**Purpose:** Invoked when the loot distributed to party event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnLootDistributedToParty(winnerParty, defeatedParty, lootedItems);
```

### OnHeroTeleportationRequested
`public override void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**Purpose:** Invoked when the hero teleportation requested event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroTeleportationRequested(hero, targetSettlement, targetParty, detail);
```

### OnPartyLeaderChangeOfferCanceled
`public override void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**Purpose:** Invoked when the party leader change offer canceled event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyLeaderChangeOfferCanceled(party);
```

### OnPartyLeaderChanged
`public override void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**Purpose:** Invoked when the party leader changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyLeaderChanged(mobileParty, oldLeader);
```

### OnClanInfluenceChanged
`public override void OnClanInfluenceChanged(Clan clan, float change)`

**Purpose:** Invoked when the clan influence changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanInfluenceChanged(clan, 0);
```

### OnPlayerPartyKnockedOrKilledTroop
`public override void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**Purpose:** Invoked when the player party knocked or killed troop event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerPartyKnockedOrKilledTroop(strikedTroop);
```

### OnPlayerEarnedGoldFromAsset
`public override void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**Purpose:** Invoked when the player earned gold from asset event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerEarnedGoldFromAsset(incomeType, 0);
```

### OnClanEarnedGoldFromTribute
`public override void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)`

**Purpose:** Invoked when the clan earned gold from tribute event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnClanEarnedGoldFromTribute(receiverClan, payingFaction);
```

### OnMainPartyStarving
`public override void OnMainPartyStarving()`

**Purpose:** Invoked when the main party starving event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMainPartyStarving();
```

### OnPlayerJoinedTournament
`public override void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**Purpose:** Invoked when the player joined tournament event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPlayerJoinedTournament(town, false);
```

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**Purpose:** Invoked when the hero unregistered event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeroUnregistered(hero);
```

### OnConfigChanged
`public override void OnConfigChanged()`

**Purpose:** Invoked when the config changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnConfigChanged();
```

### OnCraftingOrderCompleted
`public override void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** Invoked when the crafting order completed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCraftingOrderCompleted(town, craftingOrder, craftedItem, completerHero);
```

### OnItemsRefined
`public override void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** Invoked when the items refined event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnItemsRefined(hero, refineFormula);
```

### OnHeirSelectionRequested
`public override void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**Purpose:** Invoked when the heir selection requested event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeirSelectionRequested(dictionary<Hero, 0);
```

### OnHeirSelectionOver
`public override void OnHeirSelectionOver(Hero selectedHero)`

**Purpose:** Invoked when the heir selection over event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnHeirSelectionOver(selectedHero);
```

### OnMobilePartyRaftStateChanged
`public override void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**Purpose:** Invoked when the mobile party raft state changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyRaftStateChanged(mobileParty);
```

### OnCharacterCreationInitialized
`public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**Purpose:** Invoked when the character creation initialized event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCharacterCreationInitialized(characterCreationManager);
```

### OnShipDestroyed
`public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**Purpose:** Invoked when the ship destroyed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnShipDestroyed(owner, ship, detail);
```

### OnShipOwnerChanged
`public override void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)`

**Purpose:** Invoked when the ship owner changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnShipOwnerChanged(ship, oldOwner, changeDetail);
```

### OnShipRepaired
`public override void OnShipRepaired(Ship ship, Settlement repairPort)`

**Purpose:** Invoked when the ship repaired event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnShipRepaired(ship, repairPort);
```

### OnShipCreated
`public override void OnShipCreated(Ship ship, Settlement createdSettlement)`

**Purpose:** Invoked when the ship created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnShipCreated(ship, createdSettlement);
```

### OnFigureheadUnlocked
`public override void OnFigureheadUnlocked(Figurehead figurehead)`

**Purpose:** Invoked when the figurehead unlocked event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnFigureheadUnlocked(figurehead);
```

### OnPartyLeftArmy
`public override void OnPartyLeftArmy(MobileParty party, Army army)`

**Purpose:** Invoked when the party left army event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyLeftArmy(party, army);
```

### OnPartyAddedToMapEvent
`public override void OnPartyAddedToMapEvent(PartyBase partyBase)`

**Purpose:** Invoked when the party added to map event event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnPartyAddedToMapEvent(partyBase);
```

### OnIncidentResolved
`public override void OnIncidentResolved(Incident incident)`

**Purpose:** Invoked when the incident resolved event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnIncidentResolved(incident);
```

### OnMobilePartyNavigationStateChanged
`public override void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**Purpose:** Invoked when the mobile party navigation state changed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyNavigationStateChanged(mobileParty);
```

### OnMobilePartyJoinedToSiegeEvent
`public override void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**Purpose:** Invoked when the mobile party joined to siege event event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyJoinedToSiegeEvent(mobileParty);
```

### OnMobilePartyLeftSiegeEvent
`public override void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**Purpose:** Invoked when the mobile party left siege event event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMobilePartyLeftSiegeEvent(mobileParty);
```

### OnBlockadeActivated
`public override void OnBlockadeActivated(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the blockade activated event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBlockadeActivated(siegeEvent);
```

### OnBlockadeDeactivated
`public override void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the blockade deactivated event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnBlockadeDeactivated(siegeEvent);
```

### OnMapMarkerCreated
`public override void OnMapMarkerCreated(MapMarker mapMarker)`

**Purpose:** Invoked when the map marker created event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapMarkerCreated(mapMarker);
```

### OnMapMarkerRemoved
`public override void OnMapMarkerRemoved(MapMarker mapMarker)`

**Purpose:** Invoked when the map marker removed event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapMarkerRemoved(mapMarker);
```

### OnAllianceStarted
`public override void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Invoked when the alliance started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAllianceStarted(kingdom1, kingdom2);
```

### OnAllianceEnded
`public override void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Invoked when the alliance ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnAllianceEnded(kingdom1, kingdom2);
```

### OnCallToWarAgreementStarted
`public override void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Invoked when the call to war agreement started event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCallToWarAgreementStarted(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### OnCallToWarAgreementEnded
`public override void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Invoked when the call to war agreement ended event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnCallToWarAgreementEnded(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for hero lead party.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanHeroLeadParty(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for hero marry.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanHeroMarry(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for hero equipment be changed.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanHeroEquipmentBeChanged(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for be governor or have party role.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanBeGovernorOrHavePartyRole(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for hero die.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanHeroDie(hero, causeOfDeath, result);
```

### CanPlayerMeetWithHeroAfterConversation
`public override void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for player meet with hero after conversation.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanPlayerMeetWithHeroAfterConversation(hero, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for hero become prisoner.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanHeroBecomePrisoner(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for move to settlement.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanMoveToSettlement(hero, result);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the this instance meets the preconditions for have campaign issues.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.CanHaveCampaignIssues(hero, result);
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.IsSettlementBusy(settlement, asker, priority);
```

### OnMapEventContinuityNeedsUpdate
`public override void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**Purpose:** Invoked when the map event continuity needs update event is raised.

```csharp
// Obtain an instance of CampaignEvents from the subsystem API first
CampaignEvents campaignEvents = ...;
campaignEvents.OnMapEventContinuityNeedsUpdate(faction);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignEvents campaignEvents = ...;
campaignEvents.RemoveListeners(obj);
```

## See Also

- [Area Index](../)