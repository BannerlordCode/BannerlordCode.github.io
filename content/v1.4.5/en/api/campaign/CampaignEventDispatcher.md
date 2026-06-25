---
title: "CampaignEventDispatcher"
description: "Auto-generated class reference for CampaignEventDispatcher."
---
# CampaignEventDispatcher

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## Overview

`CampaignEventDispatcher` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RemoveListeners
`public override void RemoveListeners(object o)`

**Purpose:** **Purpose:** Removes listeners from the current collection or state.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.RemoveListeners(o);
```

### OnPlayerBodyPropertiesChanged
`public override void OnPlayerBodyPropertiesChanged()`

**Purpose:** **Purpose:** Invoked when the player body properties changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerBodyPropertiesChanged();
```

### OnHeroLevelledUp
`public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**Purpose:** **Purpose:** Invoked when the hero levelled up event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroLevelledUp(hero, false);
```

### OnHomeHideoutChanged
`public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)`

**Purpose:** **Purpose:** Invoked when the home hideout changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHomeHideoutChanged(banditPartyComponent, oldHomeHideout);
```

### OnCharacterCreationIsOver
`public override void OnCharacterCreationIsOver()`

**Purpose:** **Purpose:** Invoked when the character creation is over event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterCreationIsOver();
```

### OnHeroGainedSkill
`public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** **Purpose:** Invoked when the hero gained skill event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroGainedSkill(hero, skill, 0, false);
```

### OnHeroWounded
`public override void OnHeroWounded(Hero woundedHero)`

**Purpose:** **Purpose:** Invoked when the hero wounded event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroWounded(woundedHero);
```

### OnHeroRelationChanged
`public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**Purpose:** **Purpose:** Invoked when the hero relation changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroRelationChanged(effectiveHero, effectiveHeroGainedRelationWith, 0, true, detail, originalHero, originalGainedRelationWith);
```

### OnLootDistributedToParty
`public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**Purpose:** **Purpose:** Invoked when the loot distributed to party event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnLootDistributedToParty(winnerParty, defeatedParty, lootedItems);
```

### OnHeroOccupationChanged
`public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**Purpose:** **Purpose:** Invoked when the hero occupation changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroOccupationChanged(hero, oldOccupation);
```

### OnBarterAccepted
`public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** **Purpose:** Invoked when the barter accepted event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBarterAccepted(offererHero, otherHero, barters);
```

### OnBarterCanceled
`public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** **Purpose:** Invoked when the barter canceled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBarterCanceled(offererHero, otherHero, barters);
```

### OnHeroCreated
`public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**Purpose:** **Purpose:** Invoked when the hero created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroCreated(hero, false);
```

### OnHeroActivated
`public override void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)`

**Purpose:** **Purpose:** Invoked when the hero activated event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroActivated(hero, previousState);
```

### OnQuestLogAdded
`public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**Purpose:** **Purpose:** Invoked when the quest log added event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnQuestLogAdded(quest, false);
```

### OnIssueLogAdded
`public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**Purpose:** **Purpose:** Invoked when the issue log added event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIssueLogAdded(issue, false);
```

### OnClanTierChanged
`public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**Purpose:** **Purpose:** Invoked when the clan tier changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanTierChanged(clan, false);
```

### OnClanChangedKingdom
`public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)`

**Purpose:** **Purpose:** Invoked when the clan changed kingdom event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanChangedKingdom(clan, oldKingdom, newKingdom, actionDetail, false);
```

### OnClanDefected
`public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**Purpose:** **Purpose:** Invoked when the clan defected event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanDefected(clan, oldKingdom, newKingdom);
```

### OnClanCreated
`public override void OnClanCreated(Clan clan, bool isCompanion)`

**Purpose:** **Purpose:** Invoked when the clan created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanCreated(clan, false);
```

### OnHeroJoinedParty
`public override void OnHeroJoinedParty(Hero hero, MobileParty party)`

**Purpose:** **Purpose:** Invoked when the hero joined party event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroJoinedParty(hero, party);
```

### OnKingdomDecisionAdded
`public override void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** **Purpose:** Invoked when the kingdom decision added event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDecisionAdded(decision, false);
```

### OnKingdomDecisionCancelled
`public override void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** **Purpose:** Invoked when the kingdom decision cancelled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDecisionCancelled(decision, false);
```

### OnKingdomDecisionConcluded
`public override void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**Purpose:** **Purpose:** Invoked when the kingdom decision concluded event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDecisionConcluded(decision, chosenOutcome, false);
```

### OnHeroOrPartyTradedGold
`public override void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)`

**Purpose:** **Purpose:** Invoked when the hero or party traded gold event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroOrPartyTradedGold((Hero, giver, (Hero, recipient, (int, "example", true);
```

### OnHeroOrPartyGaveItem
`public override void OnHeroOrPartyGaveItem((Hero, PartyBase) giver, (Hero, PartyBase) receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**Purpose:** **Purpose:** Invoked when the hero or party gave item event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroOrPartyGaveItem((Hero, giver, (Hero, receiver, itemRosterElement, true);
```

### OnBanditPartyRecruited
`public override void OnBanditPartyRecruited(MobileParty banditParty)`

**Purpose:** **Purpose:** Invoked when the bandit party recruited event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBanditPartyRecruited(banditParty);
```

### OnArmyCreated
`public override void OnArmyCreated(Army army)`

**Purpose:** **Purpose:** Invoked when the army created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyCreated(army);
```

### OnPartyAttachedAnotherParty
`public override void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the party attached another party event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyAttachedAnotherParty(mobileParty);
```

### OnNearbyPartyAddedToPlayerMapEvent
`public override void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the nearby party added to player map event event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNearbyPartyAddedToPlayerMapEvent(mobileParty);
```

### OnArmyDispersed
`public override void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**Purpose:** **Purpose:** Invoked when the army dispersed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyDispersed(army, reason, false);
```

### OnArmyGathered
`public override void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**Purpose:** **Purpose:** Invoked when the army gathered event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyGathered(army, gatheringPoint);
```

### OnPerkOpened
`public override void OnPerkOpened(Hero hero, PerkObject perk)`

**Purpose:** **Purpose:** Invoked when the perk opened event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPerkOpened(hero, perk);
```

### OnPerkReset
`public override void OnPerkReset(Hero hero, PerkObject perk)`

**Purpose:** **Purpose:** Invoked when the perk reset event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPerkReset(hero, perk);
```

### OnPlayerTraitChanged
`public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**Purpose:** **Purpose:** Invoked when the player trait changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerTraitChanged(trait, 0);
```

### OnVillageStateChanged
`public override void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**Purpose:** **Purpose:** Invoked when the village state changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** **Purpose:** Invoked when the settlement entered event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSettlementEntered(party, settlement, hero);
```

### OnAfterSettlementEntered
`public override void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** **Purpose:** Invoked when the after settlement entered event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAfterSettlementEntered(party, settlement, hero);
```

### OnBeforeSettlementEntered
`public override void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** **Purpose:** Invoked when the before settlement entered event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeSettlementEntered(party, settlement, hero);
```

### OnMercenaryTroopChangedInTown
`public override void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**Purpose:** **Purpose:** Invoked when the mercenary troop changed in town event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryTroopChangedInTown(town, oldTroopType, newTroopType);
```

### OnMercenaryNumberChangedInTown
`public override void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**Purpose:** **Purpose:** Invoked when the mercenary number changed in town event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryNumberChangedInTown(town, 0, 0);
```

### OnAlleyOccupiedByPlayer
`public override void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**Purpose:** **Purpose:** Invoked when the alley occupied by player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAlleyOccupiedByPlayer(alley, troops);
```

### OnAlleyOwnerChanged
`public override void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** **Purpose:** Invoked when the alley owner changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAlleyOwnerChanged(alley, newOwner, oldOwner);
```

### OnAlleyClearedByPlayer
`public override void OnAlleyClearedByPlayer(Alley alley)`

**Purpose:** **Purpose:** Invoked when the alley cleared by player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAlleyClearedByPlayer(alley);
```

### OnRomanticStateChanged
`public override void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**Purpose:** **Purpose:** Invoked when the romantic state changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRomanticStateChanged(hero1, hero2, romanceLevel);
```

### OnBeforeHeroesMarried
`public override void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification)`

**Purpose:** **Purpose:** Invoked when the before heroes married event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeHeroesMarried(hero1, hero2, true);
```

### OnPlayerEliminatedFromTournament
`public override void OnPlayerEliminatedFromTournament(int round, Town town)`

**Purpose:** **Purpose:** Invoked when the player eliminated from tournament event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerEliminatedFromTournament(0, town);
```

### OnPlayerStartedTournamentMatch
`public override void OnPlayerStartedTournamentMatch(Town town)`

**Purpose:** **Purpose:** Invoked when the player started tournament match event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerStartedTournamentMatch(town);
```

### OnTournamentStarted
`public override void OnTournamentStarted(Town town)`

**Purpose:** **Purpose:** Invoked when the tournament started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTournamentStarted(town);
```

### OnTournamentFinished
`public override void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**Purpose:** **Purpose:** Invoked when the tournament finished event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTournamentFinished(winner, participants, town, prize);
```

### OnTournamentCancelled
`public override void OnTournamentCancelled(Town town)`

**Purpose:** **Purpose:** Invoked when the tournament cancelled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTournamentCancelled(town);
```

### OnWarDeclared
`public override void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**Purpose:** **Purpose:** Invoked when the war declared event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWarDeclared(faction1, faction2, declareWarDetail);
```

### OnRulingClanChanged
`public override void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)`

**Purpose:** **Purpose:** Invoked when the ruling clan changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRulingClanChanged(kingdom, oldRulingClan);
```

### OnStartBattle
`public override void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**Purpose:** **Purpose:** Invoked when the start battle event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnStartBattle(attackerParty, defenderParty, subject, true);
```

### OnRebellionFinished
`public override void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**Purpose:** **Purpose:** Invoked when the rebellion finished event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRebellionFinished(settlement, oldOwnerClan);
```

### TownRebelliousStateChanged
`public override void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**Purpose:** **Purpose:** Executes the TownRebelliousStateChanged logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TownRebelliousStateChanged(town, false);
```

### OnRebelliousClanDisbandedAtSettlement
`public override void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan rebelliousClan)`

**Purpose:** **Purpose:** Invoked when the rebellious clan disbanded at settlement event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRebelliousClanDisbandedAtSettlement(settlement, rebelliousClan);
```

### OnItemsLooted
`public override void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**Purpose:** **Purpose:** Invoked when the items looted event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemsLooted(mobileParty, items);
```

### OnMobilePartyDestroyed
`public override void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**Purpose:** **Purpose:** Invoked when the mobile party destroyed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyDestroyed(mobileParty, destroyerParty);
```

### OnMobilePartyCreated
`public override void OnMobilePartyCreated(MobileParty party)`

**Purpose:** **Purpose:** Invoked when the mobile party created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyCreated(party);
```

### OnMapInteractableCreated
`public override void OnMapInteractableCreated(IInteractablePoint interactable)`

**Purpose:** **Purpose:** Invoked when the map interactable created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapInteractableCreated(interactable);
```

### OnMapInteractableDestroyed
`public override void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**Purpose:** **Purpose:** Invoked when the map interactable destroyed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapInteractableDestroyed(interactable);
```

### OnMobilePartyQuestStatusChanged
`public override void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**Purpose:** **Purpose:** Invoked when the mobile party quest status changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyQuestStatusChanged(party, false);
```

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** **Purpose:** Invoked when the hero killed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroKilled(victim, killer, detail, false);
```

### OnBeforeHeroKilled
`public override void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** **Purpose:** Invoked when the before hero killed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeHeroKilled(victim, killer, detail, false);
```

### OnChildEducationCompleted
`public override void OnChildEducationCompleted(Hero hero, int age)`

**Purpose:** **Purpose:** Invoked when the child education completed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnChildEducationCompleted(hero, 0);
```

### OnHeroComesOfAge
`public override void OnHeroComesOfAge(Hero hero)`

**Purpose:** **Purpose:** Invoked when the hero comes of age event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroComesOfAge(hero);
```

### OnHeroReachesTeenAge
`public override void OnHeroReachesTeenAge(Hero hero)`

**Purpose:** **Purpose:** Invoked when the hero reaches teen age event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroReachesTeenAge(hero);
```

### OnHeroGrowsOutOfInfancy
`public override void OnHeroGrowsOutOfInfancy(Hero hero)`

**Purpose:** **Purpose:** Invoked when the hero grows out of infancy event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroGrowsOutOfInfancy(hero);
```

### OnCharacterDefeated
`public override void OnCharacterDefeated(Hero winner, Hero loser)`

**Purpose:** **Purpose:** Invoked when the character defeated event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterDefeated(winner, loser);
```

### OnHeroPrisonerTaken
`public override void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**Purpose:** **Purpose:** Invoked when the hero prisoner taken event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroPrisonerTaken(capturer, prisoner);
```

### OnHeroPrisonerReleased
`public override void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**Purpose:** **Purpose:** Invoked when the hero prisoner released event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroPrisonerReleased(prisoner, party, capturerFaction, detail, false);
```

### OnCharacterBecameFugitive
`public override void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**Purpose:** **Purpose:** Invoked when the character became fugitive event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterBecameFugitive(hero, true);
```

### OnPlayerLearnsAboutHero
`public override void OnPlayerLearnsAboutHero(Hero hero)`

**Purpose:** **Purpose:** Invoked when the player learns about hero event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerLearnsAboutHero(hero);
```

### OnPlayerMetHero
`public override void OnPlayerMetHero(Hero hero)`

**Purpose:** **Purpose:** Invoked when the player met hero event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerMetHero(hero);
```

### OnRenownGained
`public override void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**Purpose:** **Purpose:** Invoked when the renown gained event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRenownGained(hero, 0, false);
```

### OnCrimeRatingChanged
`public override void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**Purpose:** **Purpose:** Invoked when the crime rating changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCrimeRatingChanged(kingdom, 0);
```

### OnNewCompanionAdded
`public override void OnNewCompanionAdded(Hero newCompanion)`

**Purpose:** **Purpose:** Invoked when the new companion added event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewCompanionAdded(newCompanion);
```

### OnAfterMissionStarted
`public override void OnAfterMissionStarted(IMission iMission)`

**Purpose:** **Purpose:** Invoked when the after mission started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAfterMissionStarted(iMission);
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Invoked when the game menu opened event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameMenuOpened(args);
```

### OnMakePeace
`public override void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**Purpose:** **Purpose:** Invoked when the make peace event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMakePeace(side1Faction, side2Faction, detail);
```

### OnKingdomDestroyed
`public override void OnKingdomDestroyed(Kingdom destroyedKingdom)`

**Purpose:** **Purpose:** Invoked when the kingdom destroyed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDestroyed(destroyedKingdom);
```

### CanKingdomBeDiscontinued
`public override void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for kingdom be discontinued.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanKingdomBeDiscontinued(kingdom, result);
```

### OnKingdomCreated
`public override void OnKingdomCreated(Kingdom createdKingdom)`

**Purpose:** **Purpose:** Invoked when the kingdom created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomCreated(createdKingdom);
```

### OnVillageBecomeNormal
`public override void OnVillageBecomeNormal(Village village)`

**Purpose:** **Purpose:** Invoked when the village become normal event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageBecomeNormal(village);
```

### OnVillageBeingRaided
`public override void OnVillageBeingRaided(Village village)`

**Purpose:** **Purpose:** Invoked when the village being raided event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageBeingRaided(village);
```

### OnVillageLooted
`public override void OnVillageLooted(Village village)`

**Purpose:** **Purpose:** Invoked when the village looted event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageLooted(village);
```

### OnConversationEnded
`public override void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**Purpose:** **Purpose:** Invoked when the conversation ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnConversationEnded(characters);
```

### OnAgentJoinedConversation
`public override void OnAgentJoinedConversation(IAgent agent)`

**Purpose:** **Purpose:** Invoked when the agent joined conversation event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAgentJoinedConversation(agent);
```

### OnMapEventEnded
`public override void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** **Purpose:** Invoked when the map event ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapEventEnded(mapEvent);
```

### OnMapEventStarted
`public override void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** **Purpose:** Invoked when the map event started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapEventStarted(mapEvent, attackerParty, defenderParty);
```

### OnPrisonersChangeInSettlement
`public override void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**Purpose:** **Purpose:** Invoked when the prisoners change in settlement event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonersChangeInSettlement(settlement, prisonerRoster, prisonerHero, false);
```

### OnMissionStarted
`public override void OnMissionStarted(IMission mission)`

**Purpose:** **Purpose:** Invoked when the mission started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMissionStarted(mission);
```

### OnPlayerBoardGameOver
`public override void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**Purpose:** **Purpose:** Invoked when the player board game over event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerBoardGameOver(opposingHero, state);
```

### OnRansomOfferedToPlayer
`public override void OnRansomOfferedToPlayer(Hero captiveHero)`

**Purpose:** **Purpose:** Invoked when the ransom offered to player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRansomOfferedToPlayer(captiveHero);
```

### OnRansomOfferCancelled
`public override void OnRansomOfferCancelled(Hero captiveHero)`

**Purpose:** **Purpose:** Invoked when the ransom offer cancelled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRansomOfferCancelled(captiveHero);
```

### OnPeaceOfferedToPlayer
`public override void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDurationInDays)`

**Purpose:** **Purpose:** Invoked when the peace offered to player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPeaceOfferedToPlayer(opponentFaction, 0, 0);
```

### OnTradeAgreementSigned
`public override void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**Purpose:** **Purpose:** Invoked when the trade agreement signed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTradeAgreementSigned(kingdom, other);
```

### OnPeaceOfferResolved
`public override void OnPeaceOfferResolved(IFaction opponentFaction)`

**Purpose:** **Purpose:** Invoked when the peace offer resolved event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPeaceOfferResolved(opponentFaction);
```

### OnMarriageOfferedToPlayer
`public override void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** **Purpose:** Invoked when the marriage offered to player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferCanceled
`public override void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** **Purpose:** Invoked when the marriage offer canceled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMarriageOfferCanceled(suitor, maiden);
```

### OnVassalOrMercenaryServiceOfferedToPlayer
`public override void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**Purpose:** **Purpose:** Invoked when the vassal or mercenary service offered to player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVassalOrMercenaryServiceOfferedToPlayer(offeredKingdom);
```

### OnCommonAreaStateChanged
`public override void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)`

**Purpose:** **Purpose:** Invoked when the common area state changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCommonAreaStateChanged(alley, oldState, newState);
```

### OnVassalOrMercenaryServiceOfferCanceled
`public override void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**Purpose:** **Purpose:** Invoked when the vassal or mercenary service offer canceled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVassalOrMercenaryServiceOfferCanceled(offeredKingdom);
```

### BeforeMissionOpened
`public override void BeforeMissionOpened()`

**Purpose:** **Purpose:** Executes the BeforeMissionOpened logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.BeforeMissionOpened();
```

### OnPartyRemoved
`public override void OnPartyRemoved(PartyBase party)`

**Purpose:** **Purpose:** Invoked when the party removed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyRemoved(party);
```

### OnPartySizeChanged
`public override void OnPartySizeChanged(PartyBase party)`

**Purpose:** **Purpose:** Invoked when the party size changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartySizeChanged(party);
```

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** **Purpose:** Invoked when the settlement owner changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### OnGovernorChanged
`public override void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**Purpose:** **Purpose:** Invoked when the governor changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGovernorChanged(fortification, oldGovernor, newGovernor);
```

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** **Purpose:** Invoked when the settlement left event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSettlementLeft(party, settlement);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.Tick(0);
```

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the session start event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSessionStart(campaignGameStarter);
```

### OnAfterSessionStart
`public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the after session start event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAfterSessionStart(campaignGameStarter);
```

### OnNewGameCreated
`public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the new game created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewGameCreated(campaignGameStarter);
```

### OnGameEarlyLoaded
`public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the game early loaded event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameEarlyLoaded(campaignGameStarter);
```

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** **Purpose:** Invoked when the game loaded event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameLoaded(campaignGameStarter);
```

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**Purpose:** **Purpose:** Invoked when the game load finished event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameLoadFinished();
```

### OnPartyJoinedArmy
`public override void OnPartyJoinedArmy(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the party joined army event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyJoinedArmy(mobileParty);
```

### OnPartyRemovedFromArmy
`public override void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the party removed from army event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyRemovedFromArmy(mobileParty);
```

### OnPlayerArmyLeaderChangedBehavior
`public override void OnPlayerArmyLeaderChangedBehavior()`

**Purpose:** **Purpose:** Invoked when the player army leader changed behavior event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerArmyLeaderChangedBehavior();
```

### OnArmyOverlaySetDirty
`public override void OnArmyOverlaySetDirty()`

**Purpose:** **Purpose:** Invoked when the army overlay set dirty event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyOverlaySetDirty();
```

### OnPlayerDesertedBattle
`public override void OnPlayerDesertedBattle(int sacrificedMenCount)`

**Purpose:** **Purpose:** Invoked when the player deserted battle event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerDesertedBattle(0);
```

### MissionTick
`public override void MissionTick(float dt)`

**Purpose:** **Purpose:** Executes the MissionTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.MissionTick(0);
```

### OnChildConceived
`public override void OnChildConceived(Hero mother)`

**Purpose:** **Purpose:** Invoked when the child conceived event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnChildConceived(mother);
```

### OnGivenBirth
`public override void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**Purpose:** **Purpose:** Invoked when the given birth event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGivenBirth(mother, aliveChildren, 0);
```

### OnUnitRecruited
`public override void OnUnitRecruited(CharacterObject character, int amount)`

**Purpose:** **Purpose:** Invoked when the unit recruited event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnUnitRecruited(character, 0);
```

### OnPlayerBattleEnd
`public override void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** **Purpose:** Invoked when the player battle end event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerBattleEnd(mapEvent);
```

### OnMissionEnded
`public override void OnMissionEnded(IMission mission)`

**Purpose:** **Purpose:** Invoked when the mission ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMissionEnded(mission);
```

### TickPartialHourlyAi
`public override void TickPartialHourlyAi(MobileParty party)`

**Purpose:** **Purpose:** Advances the partial hourly ai state each frame or update cycle.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TickPartialHourlyAi(party);
```

### QuarterDailyPartyTick
`public override void QuarterDailyPartyTick(MobileParty party)`

**Purpose:** **Purpose:** Executes the QuarterDailyPartyTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.QuarterDailyPartyTick(party);
```

### AiHourlyTick
`public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**Purpose:** **Purpose:** Executes the AiHourlyTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.AiHourlyTick(party, partyThinkParams);
```

### HourlyTick
`public override void HourlyTick()`

**Purpose:** **Purpose:** Executes the HourlyTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTick();
```

### QuarterHourlyTick
`public override void QuarterHourlyTick()`

**Purpose:** **Purpose:** Executes the QuarterHourlyTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.QuarterHourlyTick();
```

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the HourlyTickParty logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTickParty(mobileParty);
```

### HourlyTickSettlement
`public override void HourlyTickSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Executes the HourlyTickSettlement logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTickSettlement(settlement);
```

### HourlyTickClan
`public override void HourlyTickClan(Clan clan)`

**Purpose:** **Purpose:** Executes the HourlyTickClan logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTickClan(clan);
```

### DailyTick
`public override void DailyTick()`

**Purpose:** **Purpose:** Executes the DailyTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTick();
```

### DailyTickParty
`public override void DailyTickParty(MobileParty mobileParty)`

**Purpose:** **Purpose:** Executes the DailyTickParty logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickParty(mobileParty);
```

### DailyTickTown
`public override void DailyTickTown(Town town)`

**Purpose:** **Purpose:** Executes the DailyTickTown logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickTown(town);
```

### DailyTickSettlement
`public override void DailyTickSettlement(Settlement settlement)`

**Purpose:** **Purpose:** Executes the DailyTickSettlement logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickSettlement(settlement);
```

### DailyTickHero
`public override void DailyTickHero(Hero hero)`

**Purpose:** **Purpose:** Executes the DailyTickHero logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickHero(hero);
```

### DailyTickClan
`public override void DailyTickClan(Clan clan)`

**Purpose:** **Purpose:** Executes the DailyTickClan logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickClan(clan);
```

### WeeklyTick
`public override void WeeklyTick()`

**Purpose:** **Purpose:** Executes the WeeklyTick logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.WeeklyTick();
```

### CollectAvailableTutorials
`public override void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**Purpose:** **Purpose:** Executes the CollectAvailableTutorials logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CollectAvailableTutorials(tutorials);
```

### OnTutorialCompleted
`public override void OnTutorialCompleted(string tutorial)`

**Purpose:** **Purpose:** Invoked when the tutorial completed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTutorialCompleted("example");
```

### BeforeGameMenuOpened
`public override void BeforeGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Executes the BeforeGameMenuOpened logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.BeforeGameMenuOpened(args);
```

### AfterGameMenuInitialized
`public override void AfterGameMenuInitialized(MenuCallbackArgs args)`

**Purpose:** **Purpose:** Executes the AfterGameMenuInitialized logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.AfterGameMenuInitialized(args);
```

### OnBarterablesRequested
`public override void OnBarterablesRequested(BarterData args)`

**Purpose:** **Purpose:** Invoked when the barterables requested event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBarterablesRequested(args);
```

### OnPartyVisibilityChanged
`public override void OnPartyVisibilityChanged(PartyBase party)`

**Purpose:** **Purpose:** Invoked when the party visibility changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyVisibilityChanged(party);
```

### OnCompanionRemoved
`public override void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**Purpose:** **Purpose:** Invoked when the companion removed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCompanionRemoved(companion, detail);
```

### TrackDetected
`public override void TrackDetected(Track track)`

**Purpose:** **Purpose:** Executes the TrackDetected logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TrackDetected(track);
```

### TrackLost
`public override void TrackLost(Track track)`

**Purpose:** **Purpose:** Executes the TrackLost logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TrackLost(track);
```

### LocationCharactersAreReadyToSpawn
`public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**Purpose:** **Purpose:** Executes the LocationCharactersAreReadyToSpawn logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.LocationCharactersAreReadyToSpawn(dictionary<string, 0);
```

### LocationCharactersSimulated
`public override void LocationCharactersSimulated()`

**Purpose:** **Purpose:** Executes the LocationCharactersSimulated logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.LocationCharactersSimulated();
```

### OnBeforePlayerAgentSpawn
`public override void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**Purpose:** **Purpose:** Invoked when the before player agent spawn event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforePlayerAgentSpawn(spawnFrame);
```

### OnPlayerAgentSpawned
`public override void OnPlayerAgentSpawned()`

**Purpose:** **Purpose:** Invoked when the player agent spawned event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerAgentSpawned();
```

### OnPlayerUpgradedTroops
`public override void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**Purpose:** **Purpose:** Invoked when the player upgraded troops event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerUpgradedTroops(upgradeFromTroop, upgradeToTroop, 0);
```

### OnHeroCombatHit
`public override void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**Purpose:** **Purpose:** Invoked when the hero combat hit event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroCombatHit(attackerTroop, attackedTroop, party, usedWeapon, false, 0);
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** **Purpose:** Invoked when the character portrait pop up opened event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterPortraitPopUpOpened(character);
```

### OnCharacterPortraitPopUpClosed
`public override void OnCharacterPortraitPopUpClosed()`

**Purpose:** **Purpose:** Invoked when the character portrait pop up closed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterPortraitPopUpClosed();
```

### OnPlayerStartTalkFromMenu
`public override void OnPlayerStartTalkFromMenu(Hero hero)`

**Purpose:** **Purpose:** Invoked when the player start talk from menu event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerStartTalkFromMenu(hero);
```

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**Purpose:** **Purpose:** Invoked when the game menu option selected event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameMenuOptionSelected(gameMenu, gameMenuOption);
```

### OnPlayerStartRecruitment
`public override void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**Purpose:** **Purpose:** Invoked when the player start recruitment event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerStartRecruitment(recruitTroopCharacter);
```

### OnBeforePlayerCharacterChanged
`public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**Purpose:** **Purpose:** Invoked when the before player character changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforePlayerCharacterChanged(oldPlayer, newPlayer);
```

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**Purpose:** **Purpose:** Invoked when the player character changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerCharacterChanged(oldPlayer, newPlayer, newPlayerParty, false);
```

### OnClanLeaderChanged
`public override void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**Purpose:** **Purpose:** Invoked when the clan leader changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanLeaderChanged(oldLeader, newLeader);
```

### OnSiegeEventStarted
`public override void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**Purpose:** **Purpose:** Invoked when the siege event started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeEventStarted(siegeEvent);
```

### OnPlayerSiegeStarted
`public override void OnPlayerSiegeStarted()`

**Purpose:** **Purpose:** Invoked when the player siege started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerSiegeStarted();
```

### OnSiegeEventEnded
`public override void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**Purpose:** **Purpose:** Invoked when the siege event ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeEventEnded(siegeEvent);
```

### OnSiegeAftermathApplied
`public override void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**Purpose:** **Purpose:** Invoked when the siege aftermath applied event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeAftermathApplied(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 0);
```

### OnSiegeBombardmentHit
`public override void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**Purpose:** **Purpose:** Invoked when the siege bombardment hit event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeBombardmentHit(besiegerParty, besiegedSettlement, side, weapon, target);
```

### OnSiegeBombardmentWallHit
`public override void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**Purpose:** **Purpose:** Invoked when the siege bombardment wall hit event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeBombardmentWallHit(besiegerParty, besiegedSettlement, side, weapon, false);
```

### OnSiegeEngineDestroyed
`public override void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**Purpose:** **Purpose:** Invoked when the siege engine destroyed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeEngineDestroyed(besiegerParty, besiegedSettlement, side, destroyedEngine);
```

### OnTradeRumorIsTaken
`public override void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** **Purpose:** Invoked when the trade rumor is taken event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTradeRumorIsTaken(newRumors, null);
```

### OnCheckForIssue
`public override void OnCheckForIssue(Hero hero)`

**Purpose:** **Purpose:** Invoked when the check for issue event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCheckForIssue(hero);
```

### OnIssueUpdated
`public override void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)`

**Purpose:** **Purpose:** Invoked when the issue updated event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIssueUpdated(issue, details, issueSolver);
```

### OnTroopsDeserted
`public override void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**Purpose:** **Purpose:** Invoked when the troops deserted event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTroopsDeserted(mobileParty, desertedTroops);
```

### OnTroopRecruited
`public override void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**Purpose:** **Purpose:** Invoked when the troop recruited event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTroopRecruited(recruiterHero, recruitmentSettlement, recruitmentSource, troop, 0);
```

### OnTroopGivenToSettlement
`public override void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**Purpose:** **Purpose:** Invoked when the troop given to settlement event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTroopGivenToSettlement(giverHero, recipientSettlement, roster);
```

### OnItemSold
`public override void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**Purpose:** **Purpose:** Invoked when the item sold event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemSold(receiverParty, payerParty, itemRosterElement, 0, currentSettlement);
```

### OnCaravanTransactionCompleted
`public override void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<(EquipmentElement, int)> itemRosterElements)`

**Purpose:** **Purpose:** Invoked when the caravan transaction completed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCaravanTransactionCompleted(caravanParty, town, list<(EquipmentElement, 0);
```

### OnPrisonerSold
`public override void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**Purpose:** **Purpose:** Invoked when the prisoner sold event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerSold(sellerParty, buyerParty, prisoners);
```

### OnPartyDisbanded
`public override void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**Purpose:** **Purpose:** Invoked when the party disbanded event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyDisbanded(disbandParty, relatedSettlement);
```

### OnPartyDisbandStarted
`public override void OnPartyDisbandStarted(MobileParty disbandParty)`

**Purpose:** **Purpose:** Invoked when the party disband started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyDisbandStarted(disbandParty);
```

### OnPartyDisbandCanceled
`public override void OnPartyDisbandCanceled(MobileParty disbandParty)`

**Purpose:** **Purpose:** Invoked when the party disband canceled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyDisbandCanceled(disbandParty);
```

### OnBuildingLevelChanged
`public override void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**Purpose:** **Purpose:** Invoked when the building level changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBuildingLevelChanged(town, building, 0);
```

### OnHideoutSpotted
`public override void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**Purpose:** **Purpose:** Invoked when the hideout spotted event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHideoutSpotted(party, hideoutParty);
```

### OnHideoutDeactivated
`public override void OnHideoutDeactivated(Settlement hideout)`

**Purpose:** **Purpose:** Invoked when the hideout deactivated event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHideoutDeactivated(hideout);
```

### OnHeroSharedFoodWithAnother
`public override void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**Purpose:** **Purpose:** Invoked when the hero shared food with another event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroSharedFoodWithAnother(supporterHero, supportedHero, 0);
```

### OnItemsDiscardedByPlayer
`public override void OnItemsDiscardedByPlayer(ItemRoster roster)`

**Purpose:** **Purpose:** Invoked when the items discarded by player event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemsDiscardedByPlayer(roster);
```

### OnPlayerInventoryExchange
`public override void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**Purpose:** **Purpose:** Invoked when the player inventory exchange event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerInventoryExchange(list<(ItemRosterElement, 0, list<(ItemRosterElement, 0, false);
```

### OnPersuasionProgressCommitted
`public override void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**Purpose:** **Purpose:** Invoked when the persuasion progress committed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPersuasionProgressCommitted(tuple<PersuasionOptionArgs, progress);
```

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** **Purpose:** Invoked when the quest completed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnQuestCompleted(quest, detail);
```

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**Purpose:** **Purpose:** Invoked when the quest started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnQuestStarted(quest);
```

### OnItemProduced
`public override void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** **Purpose:** Invoked when the item produced event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemProduced(itemObject, settlement, 0);
```

### OnItemConsumed
`public override void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** **Purpose:** Invoked when the item consumed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemConsumed(itemObject, settlement, 0);
```

### OnPartyConsumedFood
`public override void OnPartyConsumedFood(MobileParty party)`

**Purpose:** **Purpose:** Invoked when the party consumed food event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyConsumedFood(party);
```

### OnNewIssueCreated
`public override void OnNewIssueCreated(IssueBase issue)`

**Purpose:** **Purpose:** Invoked when the new issue created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewIssueCreated(issue);
```

### OnIssueOwnerChanged
`public override void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**Purpose:** **Purpose:** Invoked when the issue owner changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIssueOwnerChanged(issue, oldOwner);
```

### OnBeforeMainCharacterDied
`public override void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** **Purpose:** Invoked when the before main character died event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeMainCharacterDied(victim, killer, detail, false);
```

### OnGameOver
`public override void OnGameOver()`

**Purpose:** **Purpose:** Invoked when the game over event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameOver();
```

### SiegeCompleted
`public override void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** **Purpose:** Executes the SiegeCompleted logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.SiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### AfterSiegeCompleted
`public override void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** **Purpose:** Executes the AfterSiegeCompleted logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.AfterSiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### SiegeEngineBuilt
`public override void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** **Purpose:** Executes the SiegeEngineBuilt logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.SiegeEngineBuilt(siegeEvent, side, siegeEngine);
```

### RaidCompleted
`public override void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** **Purpose:** Executes the RaidCompleted logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.RaidCompleted(winnerSide, raidEvent);
```

### ForceSuppliesCompleted
`public override void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**Purpose:** **Purpose:** Executes the ForceSuppliesCompleted logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.ForceSuppliesCompleted(winnerSide, forceSuppliesEvent);
```

### ForceVolunteersCompleted
`public override void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**Purpose:** **Purpose:** Executes the ForceVolunteersCompleted logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.ForceVolunteersCompleted(winnerSide, forceVolunteersEvent);
```

### OnHideoutBattleCompleted
`public override void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)`

**Purpose:** **Purpose:** Invoked when the hideout battle completed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHideoutBattleCompleted(winnerSide, hideoutEventComponent, battleEndState);
```

### OnClanDestroyed
`public override void OnClanDestroyed(Clan destroyedClan)`

**Purpose:** **Purpose:** Invoked when the clan destroyed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanDestroyed(destroyedClan);
```

### OnNewItemCrafted
`public override void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**Purpose:** **Purpose:** Invoked when the new item crafted event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewItemCrafted(itemObject, overriddenItemModifier, false);
```

### OnWorkshopOwnerChanged
`public override void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**Purpose:** **Purpose:** Invoked when the workshop owner changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWorkshopOwnerChanged(workshop, oldOwner);
```

### OnWorkshopInitialized
`public override void OnWorkshopInitialized(Workshop workshop)`

**Purpose:** **Purpose:** Invoked when the workshop initialized event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWorkshopInitialized(workshop);
```

### OnWorkshopTypeChanged
`public override void OnWorkshopTypeChanged(Workshop workshop)`

**Purpose:** **Purpose:** Invoked when the workshop type changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWorkshopTypeChanged(workshop);
```

### OnMainPartyPrisonerRecruited
`public override void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**Purpose:** **Purpose:** Invoked when the main party prisoner recruited event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMainPartyPrisonerRecruited(roster);
```

### OnPrisonerDonatedToSettlement
`public override void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**Purpose:** **Purpose:** Invoked when the prisoner donated to settlement event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerDonatedToSettlement(donatingParty, donatedPrisoners, donatedSettlement);
```

### OnEquipmentSmeltedByHero
`public override void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)`

**Purpose:** **Purpose:** Invoked when the equipment smelted by hero event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnEquipmentSmeltedByHero(hero, equipmentElement);
```

### OnPrisonerTaken
`public override void OnPrisonerTaken(FlattenedTroopRoster roster)`

**Purpose:** **Purpose:** Invoked when the prisoner taken event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerTaken(roster);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** **Purpose:** Invoked when the before save event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeSave();
```

### OnSaveStarted
`public override void OnSaveStarted()`

**Purpose:** **Purpose:** Invoked when the save started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSaveStarted();
```

### OnSaveOver
`public override void OnSaveOver(bool isSuccessful, string saveName)`

**Purpose:** **Purpose:** Invoked when the save over event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSaveOver(false, "example");
```

### CollectMetadataEntries
`public override void CollectMetadataEntries(List<KeyValuePair<string, string>> pairs)`

**Purpose:** **Purpose:** Executes the CollectMetadataEntries logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CollectMetadataEntries(list<KeyValuePair<string, "example");
```

### OnPrisonerReleased
`public override void OnPrisonerReleased(FlattenedTroopRoster roster)`

**Purpose:** **Purpose:** Invoked when the prisoner released event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerReleased(roster);
```

### OnHeroChangedClan
`public override void OnHeroChangedClan(Hero hero, Clan oldClan)`

**Purpose:** **Purpose:** Invoked when the hero changed clan event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroChangedClan(hero, oldClan);
```

### OnHeroGetsBusy
`public override void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**Purpose:** **Purpose:** Invoked when the hero gets busy event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroGetsBusy(hero, heroGetsBusyReason);
```

### OnPlayerTradeProfit
`public override void OnPlayerTradeProfit(int profit)`

**Purpose:** **Purpose:** Invoked when the player trade profit event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerTradeProfit(0);
```

### CraftingPartUnlocked
`public override void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**Purpose:** **Purpose:** Executes the CraftingPartUnlocked logic.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CraftingPartUnlocked(craftingPiece);
```

### OnClanEarnedGoldFromTribute
`public override void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)`

**Purpose:** **Purpose:** Invoked when the clan earned gold from tribute event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanEarnedGoldFromTribute(receiverClan, payingFaction);
```

### OnCollectLootItems
`public override void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**Purpose:** **Purpose:** Invoked when the collect loot items event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCollectLootItems(winnerParty, gainedLoots);
```

### OnHeroTeleportationRequested
`public override void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**Purpose:** **Purpose:** Invoked when the hero teleportation requested event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroTeleportationRequested(hero, targetSettlement, targetParty, detail);
```

### OnClanInfluenceChanged
`public override void OnClanInfluenceChanged(Clan clan, float change)`

**Purpose:** **Purpose:** Invoked when the clan influence changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanInfluenceChanged(clan, 0);
```

### OnPlayerPartyKnockedOrKilledTroop
`public override void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**Purpose:** **Purpose:** Invoked when the player party knocked or killed troop event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerPartyKnockedOrKilledTroop(strikedTroop);
```

### OnPlayerEarnedGoldFromAsset
`public override void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**Purpose:** **Purpose:** Invoked when the player earned gold from asset event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerEarnedGoldFromAsset(incomeType, 0);
```

### OnPartyLeaderChangeOfferCanceled
`public override void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**Purpose:** **Purpose:** Invoked when the party leader change offer canceled event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyLeaderChangeOfferCanceled(party);
```

### OnPartyLeaderChanged
`public override void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**Purpose:** **Purpose:** Invoked when the party leader changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyLeaderChanged(mobileParty, oldLeader);
```

### OnMainPartyStarving
`public override void OnMainPartyStarving()`

**Purpose:** **Purpose:** Invoked when the main party starving event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMainPartyStarving();
```

### OnPlayerJoinedTournament
`public override void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**Purpose:** **Purpose:** Invoked when the player joined tournament event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerJoinedTournament(town, false);
```

### OnCraftingOrderCompleted
`public override void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** **Purpose:** Invoked when the crafting order completed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCraftingOrderCompleted(town, craftingOrder, craftedItem, completerHero);
```

### OnItemsRefined
`public override void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** **Purpose:** Invoked when the items refined event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemsRefined(hero, refineFormula);
```

### OnMapEventContinuityNeedsUpdate
`public override void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**Purpose:** **Purpose:** Invoked when the map event continuity needs update event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapEventContinuityNeedsUpdate(faction);
```

### OnHeirSelectionRequested
`public override void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**Purpose:** **Purpose:** Invoked when the heir selection requested event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeirSelectionRequested(dictionary<Hero, 0);
```

### OnHeirSelectionOver
`public override void OnHeirSelectionOver(Hero selectedHeir)`

**Purpose:** **Purpose:** Invoked when the heir selection over event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeirSelectionOver(selectedHeir);
```

### OnCharacterCreationInitialized
`public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Invoked when the character creation initialized event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterCreationInitialized(characterCreationManager);
```

### OnShipDestroyed
`public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**Purpose:** **Purpose:** Invoked when the ship destroyed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipDestroyed(owner, ship, detail);
```

### OnPartyLeftArmy
`public override void OnPartyLeftArmy(MobileParty party, Army army)`

**Purpose:** **Purpose:** Invoked when the party left army event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyLeftArmy(party, army);
```

### OnShipOwnerChanged
`public override void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)`

**Purpose:** **Purpose:** Invoked when the ship owner changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipOwnerChanged(ship, oldOwner, changeDetail);
```

### OnShipRepaired
`public override void OnShipRepaired(Ship ship, Settlement repairPort)`

**Purpose:** **Purpose:** Invoked when the ship repaired event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipRepaired(ship, repairPort);
```

### OnFigureheadUnlocked
`public override void OnFigureheadUnlocked(Figurehead figurehead)`

**Purpose:** **Purpose:** Invoked when the figurehead unlocked event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnFigureheadUnlocked(figurehead);
```

### OnPartyAddedToMapEvent
`public override void OnPartyAddedToMapEvent(PartyBase party)`

**Purpose:** **Purpose:** Invoked when the party added to map event event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyAddedToMapEvent(party);
```

### OnIncidentResolved
`public override void OnIncidentResolved(Incident incident)`

**Purpose:** **Purpose:** Invoked when the incident resolved event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIncidentResolved(incident);
```

### OnMobilePartyNavigationStateChanged
`public override void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the mobile party navigation state changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyNavigationStateChanged(mobileParty);
```

### OnMobilePartyJoinedToSiegeEvent
`public override void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the mobile party joined to siege event event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyJoinedToSiegeEvent(mobileParty);
```

### OnMobilePartyLeftSiegeEvent
`public override void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the mobile party left siege event event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyLeftSiegeEvent(mobileParty);
```

### OnBlockadeActivated
`public override void OnBlockadeActivated(SiegeEvent siegeEvent)`

**Purpose:** **Purpose:** Invoked when the blockade activated event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBlockadeActivated(siegeEvent);
```

### OnBlockadeDeactivated
`public override void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**Purpose:** **Purpose:** Invoked when the blockade deactivated event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBlockadeDeactivated(siegeEvent);
```

### OnMapMarkerCreated
`public override void OnMapMarkerCreated(MapMarker mapMarker)`

**Purpose:** **Purpose:** Invoked when the map marker created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapMarkerCreated(mapMarker);
```

### OnMapMarkerRemoved
`public override void OnMapMarkerRemoved(MapMarker mapMarker)`

**Purpose:** **Purpose:** Invoked when the map marker removed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapMarkerRemoved(mapMarker);
```

### OnMercenaryServiceStarted
`public override void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**Purpose:** **Purpose:** Invoked when the mercenary service started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryServiceStarted(mercenaryClan, details);
```

### OnMercenaryServiceEnded
`public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**Purpose:** **Purpose:** Invoked when the mercenary service ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryServiceEnded(mercenaryClan, details);
```

### OnAllianceStarted
`public override void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** **Purpose:** Invoked when the alliance started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAllianceStarted(kingdom1, kingdom2);
```

### OnAllianceEnded
`public override void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** **Purpose:** Invoked when the alliance ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAllianceEnded(kingdom1, kingdom2);
```

### OnCallToWarAgreementStarted
`public override void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** **Purpose:** Invoked when the call to war agreement started event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCallToWarAgreementStarted(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### OnCallToWarAgreementEnded
`public override void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** **Purpose:** Invoked when the call to war agreement ended event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCallToWarAgreementEnded(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero lead party.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroLeadParty(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero marry.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroMarry(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero equipment be changed.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroEquipmentBeChanged(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for be governor or have party role.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanBeGovernorOrHavePartyRole(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero die.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroDie(hero, causeOfDeath, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for hero become prisoner.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroBecomePrisoner(hero, result);
```

### CanPlayerMeetWithHeroAfterConversation
`public override void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for player meet with hero after conversation.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanPlayerMeetWithHeroAfterConversation(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for move to settlement.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanMoveToSettlement(hero, result);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for have campaign issues.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHaveCampaignIssues(hero, result);
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**Purpose:** **Purpose:** Determines whether the this instance is in the settlement busy state or condition.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.IsSettlementBusy(settlement, asker, priority);
```

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**Purpose:** **Purpose:** Invoked when the hero unregistered event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroUnregistered(hero);
```

### OnShipCreated
`public override void OnShipCreated(Ship ship, Settlement createdSettlement)`

**Purpose:** **Purpose:** Invoked when the ship created event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipCreated(ship, createdSettlement);
```

### OnConfigChanged
`public override void OnConfigChanged()`

**Purpose:** **Purpose:** Invoked when the config changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnConfigChanged();
```

### OnMobilePartyRaftStateChanged
`public override void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**Purpose:** **Purpose:** Invoked when the mobile party raft state changed event is raised.

```csharp
// Obtain an instance of CampaignEventDispatcher from the subsystem API first
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyRaftStateChanged(mobileParty);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.RemoveListeners(o);
```

## See Also

- [Area Index](../)