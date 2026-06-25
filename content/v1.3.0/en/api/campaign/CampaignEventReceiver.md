---
title: "CampaignEventReceiver"
description: "Auto-generated class reference for CampaignEventReceiver."
---
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

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.RemoveListeners(o);
```

### OnCharacterCreationIsOver
`public virtual void OnCharacterCreationIsOver()`

**Purpose:** Invoked when the `character creation is over` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterCreationIsOver();
```

### OnHeroLevelledUp
`public virtual void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**Purpose:** Invoked when the `hero levelled up` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroLevelledUp(hero, false);
```

### OnHeroGainedSkill
`public virtual void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**Purpose:** Invoked when the `hero gained skill` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroGainedSkill(hero, skill, 0, false);
```

### OnHeroCreated
`public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**Purpose:** Invoked when the `hero created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroCreated(hero, false);
```

### OnHeroWounded
`public virtual void OnHeroWounded(Hero woundedHero)`

**Purpose:** Invoked when the `hero wounded` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroWounded(woundedHero);
```

### OnHeroRelationChanged
`public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**Purpose:** Invoked when the `hero relation changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroRelationChanged(effectiveHero, effectiveHeroGainedRelationWith, 0, true, detail, originalHero, originalGainedRelationWith);
```

### OnQuestLogAdded
`public virtual void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**Purpose:** Invoked when the `quest log added` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnQuestLogAdded(quest, false);
```

### OnIssueLogAdded
`public virtual void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**Purpose:** Invoked when the `issue log added` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIssueLogAdded(issue, false);
```

### OnClanTierChanged
`public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**Purpose:** Invoked when the `clan tier changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanTierChanged(clan, false);
```

### OnClanChangedKingdom
`public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)`

**Purpose:** Invoked when the `clan changed kingdom` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanChangedKingdom(clan, oldKingdom, newKingdom, actionDetail, false);
```

### OnClanDefected
`public virtual void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**Purpose:** Invoked when the `clan defected` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanDefected(clan, oldKingdom, newKingdom);
```

### OnClanCreated
`public virtual void OnClanCreated(Clan clan, bool isCompanion)`

**Purpose:** Invoked when the `clan created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanCreated(clan, false);
```

### OnHeroJoinedParty
`public virtual void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)`

**Purpose:** Invoked when the `hero joined party` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroJoinedParty(hero, mobileParty);
```

### OnKingdomDecisionAdded
`public virtual void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Invoked when the `kingdom decision added` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDecisionAdded(decision, false);
```

### OnKingdomDecisionCancelled
`public virtual void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**Purpose:** Invoked when the `kingdom decision cancelled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDecisionCancelled(decision, false);
```

### OnKingdomDecisionConcluded
`public virtual void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**Purpose:** Invoked when the `kingdom decision concluded` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDecisionConcluded(decision, chosenOutcome, false);
```

### OnHeroOrPartyTradedGold
`public virtual void OnHeroOrPartyTradedGold(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> recipient, ValueTuple<int, string> goldAmount, bool showNotification)`

**Purpose:** Invoked when the `hero or party traded gold` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroOrPartyTradedGold(valueTuple<Hero, giver, valueTuple<Hero, recipient, valueTuple<int, "example", true);
```

### OnHeroOrPartyGaveItem
`public virtual void OnHeroOrPartyGaveItem(ValueTuple<Hero, PartyBase> giver, ValueTuple<Hero, PartyBase> receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**Purpose:** Invoked when the `hero or party gave item` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroOrPartyGaveItem(valueTuple<Hero, giver, valueTuple<Hero, receiver, itemRosterElement, true);
```

### OnBanditPartyRecruited
`public virtual void OnBanditPartyRecruited(MobileParty banditParty)`

**Purpose:** Invoked when the `bandit party recruited` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBanditPartyRecruited(banditParty);
```

### OnArmyCreated
`public virtual void OnArmyCreated(Army army)`

**Purpose:** Invoked when the `army created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyCreated(army);
```

### OnPartyAttachedAnotherParty
`public virtual void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**Purpose:** Invoked when the `party attached another party` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyAttachedAnotherParty(mobileParty);
```

### OnNearbyPartyAddedToPlayerMapEvent
`public virtual void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**Purpose:** Invoked when the `nearby party added to player map event` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNearbyPartyAddedToPlayerMapEvent(mobileParty);
```

### OnArmyDispersed
`public virtual void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**Purpose:** Invoked when the `army dispersed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyDispersed(army, reason, false);
```

### OnArmyGathered
`public virtual void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**Purpose:** Invoked when the `army gathered` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyGathered(army, gatheringPoint);
```

### OnPerkOpened
`public virtual void OnPerkOpened(Hero hero, PerkObject perk)`

**Purpose:** Invoked when the `perk opened` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPerkOpened(hero, perk);
```

### OnPerkReset
`public virtual void OnPerkReset(Hero hero, PerkObject perk)`

**Purpose:** Invoked when the `perk reset` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPerkReset(hero, perk);
```

### OnPlayerTraitChanged
`public virtual void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**Purpose:** Invoked when the `player trait changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerTraitChanged(trait, 0);
```

### OnVillageStateChanged
`public virtual void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**Purpose:** Invoked when the `village state changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnSettlementEntered
`public virtual void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `settlement entered` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSettlementEntered(party, settlement, hero);
```

### OnAfterSettlementEntered
`public virtual void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `after settlement entered` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAfterSettlementEntered(party, settlement, hero);
```

### OnBeforeSettlementEntered
`public virtual void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `before settlement entered` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeSettlementEntered(party, settlement, hero);
```

### OnMercenaryTroopChangedInTown
`public virtual void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**Purpose:** Invoked when the `mercenary troop changed in town` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryTroopChangedInTown(town, oldTroopType, newTroopType);
```

### OnMercenaryNumberChangedInTown
`public virtual void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**Purpose:** Invoked when the `mercenary number changed in town` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryNumberChangedInTown(town, 0, 0);
```

### OnAlleyOwnerChanged
`public virtual void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**Purpose:** Invoked when the `alley owner changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAlleyOwnerChanged(alley, newOwner, oldOwner);
```

### OnAlleyClearedByPlayer
`public virtual void OnAlleyClearedByPlayer(Alley alley)`

**Purpose:** Invoked when the `alley cleared by player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAlleyClearedByPlayer(alley);
```

### OnAlleyOccupiedByPlayer
`public virtual void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**Purpose:** Invoked when the `alley occupied by player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAlleyOccupiedByPlayer(alley, troops);
```

### OnRomanticStateChanged
`public virtual void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**Purpose:** Invoked when the `romantic state changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRomanticStateChanged(hero1, hero2, romanceLevel);
```

### OnBeforeHeroesMarried
`public virtual void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)`

**Purpose:** Invoked when the `before heroes married` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeHeroesMarried(hero1, hero2, false);
```

### OnPlayerEliminatedFromTournament
`public virtual void OnPlayerEliminatedFromTournament(int round, Town town)`

**Purpose:** Invoked when the `player eliminated from tournament` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerEliminatedFromTournament(0, town);
```

### OnPlayerStartedTournamentMatch
`public virtual void OnPlayerStartedTournamentMatch(Town town)`

**Purpose:** Invoked when the `player started tournament match` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerStartedTournamentMatch(town);
```

### OnTournamentStarted
`public virtual void OnTournamentStarted(Town town)`

**Purpose:** Invoked when the `tournament started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTournamentStarted(town);
```

### OnTournamentFinished
`public virtual void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**Purpose:** Invoked when the `tournament finished` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTournamentFinished(winner, participants, town, prize);
```

### OnTournamentCancelled
`public virtual void OnTournamentCancelled(Town town)`

**Purpose:** Invoked when the `tournament cancelled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTournamentCancelled(town);
```

### OnWarDeclared
`public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**Purpose:** Invoked when the `war declared` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWarDeclared(faction1, faction2, declareWarDetail);
```

### OnMakePeace
`public virtual void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**Purpose:** Invoked when the `make peace` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMakePeace(side1Faction, side2Faction, detail);
```

### OnKingdomCreated
`public virtual void OnKingdomCreated(Kingdom createdKingdom)`

**Purpose:** Invoked when the `kingdom created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomCreated(createdKingdom);
```

### OnHeroOccupationChanged
`public virtual void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**Purpose:** Invoked when the `hero occupation changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroOccupationChanged(hero, oldOccupation);
```

### OnKingdomDestroyed
`public virtual void OnKingdomDestroyed(Kingdom kingdom)`

**Purpose:** Invoked when the `kingdom destroyed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDestroyed(kingdom);
```

### CanKingdomBeDiscontinued
`public virtual void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `kingdom be discontinued`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanKingdomBeDiscontinued(kingdom, result);
```

### OnBarterAccepted
`public virtual void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Invoked when the `barter accepted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBarterAccepted(offererHero, otherHero, barters);
```

### OnBarterCanceled
`public virtual void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**Purpose:** Invoked when the `barter canceled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBarterCanceled(offererHero, otherHero, barters);
```

### OnStartBattle
`public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**Purpose:** Invoked when the `start battle` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnStartBattle(attackerParty, defenderParty, subject, true);
```

### OnRebellionFinished
`public virtual void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**Purpose:** Invoked when the `rebellion finished` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRebellionFinished(settlement, oldOwnerClan);
```

### TownRebelliousStateChanged
`public virtual void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TownRebelliousStateChanged(town, false);
```

### OnRebelliousClanDisbandedAtSettlement
`public virtual void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**Purpose:** Invoked when the `rebellious clan disbanded at settlement` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRebelliousClanDisbandedAtSettlement(settlement, clan);
```

### OnItemsLooted
`public virtual void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**Purpose:** Invoked when the `items looted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemsLooted(mobileParty, items);
```

### OnMobilePartyDestroyed
`public virtual void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**Purpose:** Invoked when the `mobile party destroyed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyDestroyed(mobileParty, destroyerParty);
```

### OnMobilePartyCreated
`public virtual void OnMobilePartyCreated(MobileParty party)`

**Purpose:** Invoked when the `mobile party created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyCreated(party);
```

### OnMapInteractableCreated
`public virtual void OnMapInteractableCreated(IInteractablePoint interactable)`

**Purpose:** Invoked when the `map interactable created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapInteractableCreated(interactable);
```

### OnMapInteractableDestroyed
`public virtual void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**Purpose:** Invoked when the `map interactable destroyed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapInteractableDestroyed(interactable);
```

### OnMobilePartyQuestStatusChanged
`public virtual void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**Purpose:** Invoked when the `mobile party quest status changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyQuestStatusChanged(party, false);
```

### OnHeroKilled
`public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the `hero killed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroKilled(victim, killer, detail, false);
```

### OnBeforeHeroKilled
`public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the `before hero killed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeHeroKilled(victim, killer, detail, false);
```

### OnChildEducationCompleted
`public virtual void OnChildEducationCompleted(Hero hero, int age)`

**Purpose:** Invoked when the `child education completed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnChildEducationCompleted(hero, 0);
```

### OnHeroComesOfAge
`public virtual void OnHeroComesOfAge(Hero hero)`

**Purpose:** Invoked when the `hero comes of age` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroComesOfAge(hero);
```

### OnHeroReachesTeenAge
`public virtual void OnHeroReachesTeenAge(Hero hero)`

**Purpose:** Invoked when the `hero reaches teen age` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroReachesTeenAge(hero);
```

### OnHeroGrowsOutOfInfancy
`public virtual void OnHeroGrowsOutOfInfancy(Hero hero)`

**Purpose:** Invoked when the `hero grows out of infancy` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroGrowsOutOfInfancy(hero);
```

### OnCharacterDefeated
`public virtual void OnCharacterDefeated(Hero winner, Hero loser)`

**Purpose:** Invoked when the `character defeated` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterDefeated(winner, loser);
```

### OnHeroPrisonerTaken
`public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**Purpose:** Invoked when the `hero prisoner taken` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroPrisonerTaken(capturer, prisoner);
```

### OnHeroPrisonerReleased
`public virtual void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the `hero prisoner released` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroPrisonerReleased(prisoner, party, capturerFaction, detail, false);
```

### OnCharacterBecameFugitive
`public virtual void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**Purpose:** Invoked when the `character became fugitive` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterBecameFugitive(hero, true);
```

### OnPlayerMetHero
`public virtual void OnPlayerMetHero(Hero hero)`

**Purpose:** Invoked when the `player met hero` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerMetHero(hero);
```

### OnPlayerLearnsAboutHero
`public virtual void OnPlayerLearnsAboutHero(Hero hero)`

**Purpose:** Invoked when the `player learns about hero` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerLearnsAboutHero(hero);
```

### OnRenownGained
`public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**Purpose:** Invoked when the `renown gained` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRenownGained(hero, 0, false);
```

### OnCrimeRatingChanged
`public virtual void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**Purpose:** Invoked when the `crime rating changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCrimeRatingChanged(kingdom, 0);
```

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero newCompanion)`

**Purpose:** Invoked when the `new companion added` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewCompanionAdded(newCompanion);
```

### OnAfterMissionStarted
`public virtual void OnAfterMissionStarted(IMission iMission)`

**Purpose:** Invoked when the `after mission started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAfterMissionStarted(iMission);
```

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Invoked when the `game menu opened` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameMenuOpened(args);
```

### OnVillageBecomeNormal
`public virtual void OnVillageBecomeNormal(Village village)`

**Purpose:** Invoked when the `village become normal` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageBecomeNormal(village);
```

### OnVillageBeingRaided
`public virtual void OnVillageBeingRaided(Village village)`

**Purpose:** Invoked when the `village being raided` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageBeingRaided(village);
```

### OnVillageLooted
`public virtual void OnVillageLooted(Village village)`

**Purpose:** Invoked when the `village looted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageLooted(village);
```

### OnAgentJoinedConversation
`public virtual void OnAgentJoinedConversation(IAgent agent)`

**Purpose:** Invoked when the `agent joined conversation` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAgentJoinedConversation(agent);
```

### OnConversationEnded
`public virtual void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**Purpose:** Invoked when the `conversation ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnConversationEnded(characters);
```

### OnMapEventEnded
`public virtual void OnMapEventEnded(MapEvent mapEvent)`

**Purpose:** Invoked when the `map event ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapEventEnded(mapEvent);
```

### OnMapEventStarted
`public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**Purpose:** Invoked when the `map event started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapEventStarted(mapEvent, attackerParty, defenderParty);
```

### OnRansomOfferedToPlayer
`public virtual void OnRansomOfferedToPlayer(Hero captiveHero)`

**Purpose:** Invoked when the `ransom offered to player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRansomOfferedToPlayer(captiveHero);
```

### OnPrisonersChangeInSettlement
`public virtual void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**Purpose:** Invoked when the `prisoners change in settlement` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonersChangeInSettlement(settlement, prisonerRoster, prisonerHero, false);
```

### OnMissionStarted
`public virtual void OnMissionStarted(IMission mission)`

**Purpose:** Invoked when the `mission started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMissionStarted(mission);
```

### OnRansomOfferCancelled
`public virtual void OnRansomOfferCancelled(Hero captiveHero)`

**Purpose:** Invoked when the `ransom offer cancelled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRansomOfferCancelled(captiveHero);
```

### OnPeaceOfferedToPlayer
`public virtual void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount)`

**Purpose:** Invoked when the `peace offered to player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPeaceOfferedToPlayer(opponentFaction, 0);
```

### OnTradeAgreementSigned
`public virtual void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**Purpose:** Invoked when the `trade agreement signed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTradeAgreementSigned(kingdom, other);
```

### OnPeaceOfferResolved
`public virtual void OnPeaceOfferResolved(IFaction opponentFaction)`

**Purpose:** Invoked when the `peace offer resolved` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPeaceOfferResolved(opponentFaction);
```

### OnMarriageOfferedToPlayer
`public virtual void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** Invoked when the `marriage offered to player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferCanceled
`public virtual void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** Invoked when the `marriage offer canceled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMarriageOfferCanceled(suitor, maiden);
```

### OnVassalOrMercenaryServiceOfferedToPlayer
`public virtual void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**Purpose:** Invoked when the `vassal or mercenary service offered to player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVassalOrMercenaryServiceOfferedToPlayer(offeredKingdom);
```

### OnVassalOrMercenaryServiceOfferCanceled
`public virtual void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**Purpose:** Invoked when the `vassal or mercenary service offer canceled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVassalOrMercenaryServiceOfferCanceled(offeredKingdom);
```

### OnPlayerBoardGameOver
`public virtual void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**Purpose:** Invoked when the `player board game over` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerBoardGameOver(opposingHero, state);
```

### OnCommonAreaStateChanged
`public virtual void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)`

**Purpose:** Invoked when the `common area state changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCommonAreaStateChanged(alley, oldState, newState);
```

### BeforeMissionOpened
`public virtual void BeforeMissionOpened()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.BeforeMissionOpened();
```

### OnPartyRemoved
`public virtual void OnPartyRemoved(PartyBase party)`

**Purpose:** Invoked when the `party removed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyRemoved(party);
```

### OnPartySizeChanged
`public virtual void OnPartySizeChanged(PartyBase party)`

**Purpose:** Invoked when the `party size changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartySizeChanged(party);
```

### OnSettlementOwnerChanged
`public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Invoked when the `settlement owner changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### OnGovernorChanged
`public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**Purpose:** Invoked when the `governor changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGovernorChanged(fortification, oldGovernor, newGovernor);
```

### OnSettlementLeft
`public virtual void OnSettlementLeft(MobileParty party, Settlement settlement)`

**Purpose:** Invoked when the `settlement left` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSettlementLeft(party, settlement);
```

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.Tick(0);
```

### OnSessionStart
`public virtual void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `session start` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSessionStart(campaignGameStarter);
```

### OnAfterSessionStart
`public virtual void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `after session start` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAfterSessionStart(campaignGameStarter);
```

### OnNewGameCreated
`public virtual void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `new game created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewGameCreated(campaignGameStarter);
```

### OnGameLoaded
`public virtual void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `game loaded` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameLoaded(campaignGameStarter);
```

### OnGameEarlyLoaded
`public virtual void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `game early loaded` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameEarlyLoaded(campaignGameStarter);
```

### OnPlayerTradeProfit
`public virtual void OnPlayerTradeProfit(int profit)`

**Purpose:** Invoked when the `player trade profit` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerTradeProfit(0);
```

### OnRulingClanChanged
`public virtual void OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)`

**Purpose:** Invoked when the `ruling clan changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRulingClanChanged(kingdom, newRulingClan);
```

### OnPrisonerReleased
`public virtual void OnPrisonerReleased(FlattenedTroopRoster roster)`

**Purpose:** Invoked when the `prisoner released` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerReleased(roster);
```

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**Purpose:** Invoked when the `game load finished` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameLoadFinished();
```

### OnPartyJoinedArmy
`public virtual void OnPartyJoinedArmy(MobileParty mobileParty)`

**Purpose:** Invoked when the `party joined army` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyJoinedArmy(mobileParty);
```

### OnPartyRemovedFromArmy
`public virtual void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**Purpose:** Invoked when the `party removed from army` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyRemovedFromArmy(mobileParty);
```

### OnArmyOverlaySetDirty
`public virtual void OnArmyOverlaySetDirty()`

**Purpose:** Invoked when the `army overlay set dirty` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyOverlaySetDirty();
```

### OnPlayerDesertedBattle
`public virtual void OnPlayerDesertedBattle(int sacrificedMenCount)`

**Purpose:** Invoked when the `player deserted battle` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerDesertedBattle(0);
```

### OnPlayerArmyLeaderChangedBehavior
`public virtual void OnPlayerArmyLeaderChangedBehavior()`

**Purpose:** Invoked when the `player army leader changed behavior` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerArmyLeaderChangedBehavior();
```

### MissionTick
`public virtual void MissionTick(float dt)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.MissionTick(0);
```

### OnChildConceived
`public virtual void OnChildConceived(Hero mother)`

**Purpose:** Invoked when the `child conceived` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnChildConceived(mother);
```

### OnGivenBirth
`public virtual void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**Purpose:** Invoked when the `given birth` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGivenBirth(mother, aliveChildren, 0);
```

### OnUnitRecruited
`public virtual void OnUnitRecruited(CharacterObject character, int amount)`

**Purpose:** Invoked when the `unit recruited` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnUnitRecruited(character, 0);
```

### OnPlayerBattleEnd
`public virtual void OnPlayerBattleEnd(MapEvent mapEvent)`

**Purpose:** Invoked when the `player battle end` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerBattleEnd(mapEvent);
```

### OnMissionEnded
`public virtual void OnMissionEnded(IMission mission)`

**Purpose:** Invoked when the `mission ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMissionEnded(mission);
```

### TickPartialHourlyAi
`public virtual void TickPartialHourlyAi(MobileParty party)`

**Purpose:** Advances the `partial hourly ai` state each frame or update cycle.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TickPartialHourlyAi(party);
```

### QuarterDailyPartyTick
`public virtual void QuarterDailyPartyTick(MobileParty party)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.QuarterDailyPartyTick(party);
```

### AiHourlyTick
`public virtual void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.AiHourlyTick(party, partyThinkParams);
```

### HourlyTick
`public virtual void HourlyTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTick();
```

### HourlyTickParty
`public virtual void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTickParty(mobileParty);
```

### HourlyTickSettlement
`public virtual void HourlyTickSettlement(Settlement settlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTickSettlement(settlement);
```

### HourlyTickClan
`public virtual void HourlyTickClan(Clan clan)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTickClan(clan);
```

### DailyTick
`public virtual void DailyTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTick();
```

### DailyTickParty
`public virtual void DailyTickParty(MobileParty mobileParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickParty(mobileParty);
```

### DailyTickTown
`public virtual void DailyTickTown(Town town)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickTown(town);
```

### DailyTickSettlement
`public virtual void DailyTickSettlement(Settlement settlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickSettlement(settlement);
```

### DailyTickClan
`public virtual void DailyTickClan(Clan clan)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickClan(clan);
```

### OnPlayerBodyPropertiesChanged
`public virtual void OnPlayerBodyPropertiesChanged()`

**Purpose:** Invoked when the `player body properties changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerBodyPropertiesChanged();
```

### WeeklyTick
`public virtual void WeeklyTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.WeeklyTick();
```

### CollectAvailableTutorials
`public virtual void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CollectAvailableTutorials(tutorials);
```

### DailyTickHero
`public virtual void DailyTickHero(Hero hero)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickHero(hero);
```

### OnTutorialCompleted
`public virtual void OnTutorialCompleted(string tutorial)`

**Purpose:** Invoked when the `tutorial completed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTutorialCompleted("example");
```

### OnBuildingLevelChanged
`public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**Purpose:** Invoked when the `building level changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBuildingLevelChanged(town, building, 0);
```

### BeforeGameMenuOpened
`public virtual void BeforeGameMenuOpened(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.BeforeGameMenuOpened(args);
```

### AfterGameMenuInitialized
`public virtual void AfterGameMenuInitialized(MenuCallbackArgs args)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.AfterGameMenuInitialized(args);
```

### OnBarterablesRequested
`public virtual void OnBarterablesRequested(BarterData args)`

**Purpose:** Invoked when the `barterables requested` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBarterablesRequested(args);
```

### OnPartyVisibilityChanged
`public virtual void OnPartyVisibilityChanged(PartyBase party)`

**Purpose:** Invoked when the `party visibility changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyVisibilityChanged(party);
```

### OnCompanionRemoved
`public virtual void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**Purpose:** Invoked when the `companion removed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCompanionRemoved(companion, detail);
```

### TrackDetected
`public virtual void TrackDetected(Track track)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TrackDetected(track);
```

### TrackLost
`public virtual void TrackLost(Track track)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TrackLost(track);
```

### LocationCharactersAreReadyToSpawn
`public virtual void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.LocationCharactersAreReadyToSpawn(dictionary<string, 0);
```

### LocationCharactersSimulated
`public virtual void LocationCharactersSimulated()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.LocationCharactersSimulated();
```

### OnBeforePlayerAgentSpawn
`public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**Purpose:** Invoked when the `before player agent spawn` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforePlayerAgentSpawn(spawnFrame);
```

### OnPlayerAgentSpawned
`public virtual void OnPlayerAgentSpawned()`

**Purpose:** Invoked when the `player agent spawned` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerAgentSpawned();
```

### OnPlayerUpgradedTroops
`public virtual void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**Purpose:** Invoked when the `player upgraded troops` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerUpgradedTroops(upgradeFromTroop, upgradeToTroop, 0);
```

### OnHeroCombatHit
`public virtual void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**Purpose:** Invoked when the `hero combat hit` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroCombatHit(attackerTroop, attackedTroop, party, usedWeapon, false, 0);
```

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**Purpose:** Invoked when the `character portrait pop up opened` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterPortraitPopUpOpened(character);
```

### OnCharacterPortraitPopUpClosed
`public virtual void OnCharacterPortraitPopUpClosed()`

**Purpose:** Invoked when the `character portrait pop up closed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterPortraitPopUpClosed();
```

### OnPlayerStartTalkFromMenu
`public virtual void OnPlayerStartTalkFromMenu(Hero hero)`

**Purpose:** Invoked when the `player start talk from menu` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerStartTalkFromMenu(hero);
```

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**Purpose:** Invoked when the `game menu option selected` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameMenuOptionSelected(gameMenu, gameMenuOption);
```

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**Purpose:** Invoked when the `player start recruitment` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerStartRecruitment(recruitTroopCharacter);
```

### OnBeforePlayerCharacterChanged
`public virtual void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**Purpose:** Invoked when the `before player character changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforePlayerCharacterChanged(oldPlayer, newPlayer);
```

### OnPlayerCharacterChanged
`public virtual void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)`

**Purpose:** Invoked when the `player character changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerCharacterChanged(oldPlayer, newPlayer, newMainParty, false);
```

### OnClanLeaderChanged
`public virtual void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**Purpose:** Invoked when the `clan leader changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanLeaderChanged(oldLeader, newLeader);
```

### OnSiegeEventStarted
`public virtual void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the `siege event started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeEventStarted(siegeEvent);
```

### OnPlayerSiegeStarted
`public virtual void OnPlayerSiegeStarted()`

**Purpose:** Invoked when the `player siege started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerSiegeStarted();
```

### OnSiegeEventEnded
`public virtual void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the `siege event ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeEventEnded(siegeEvent);
```

### OnSiegeAftermathApplied
`public virtual void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**Purpose:** Invoked when the `siege aftermath applied` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeAftermathApplied(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 0);
```

### OnSiegeBombardmentHit
`public virtual void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**Purpose:** Invoked when the `siege bombardment hit` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeBombardmentHit(besiegerParty, besiegedSettlement, side, weapon, target);
```

### OnSiegeBombardmentWallHit
`public virtual void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**Purpose:** Invoked when the `siege bombardment wall hit` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeBombardmentWallHit(besiegerParty, besiegedSettlement, side, weapon, false);
```

### OnSiegeEngineDestroyed
`public virtual void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**Purpose:** Invoked when the `siege engine destroyed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeEngineDestroyed(besiegerParty, besiegedSettlement, side, destroyedEngine);
```

### OnTradeRumorIsTaken
`public virtual void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**Purpose:** Invoked when the `trade rumor is taken` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTradeRumorIsTaken(newRumors, null);
```

### OnCheckForIssue
`public virtual void OnCheckForIssue(Hero hero)`

**Purpose:** Invoked when the `check for issue` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCheckForIssue(hero);
```

### OnIssueUpdated
`public virtual void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)`

**Purpose:** Invoked when the `issue updated` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIssueUpdated(issue, details, issueSolver);
```

### OnTroopsDeserted
`public virtual void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**Purpose:** Invoked when the `troops deserted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTroopsDeserted(mobileParty, desertedTroops);
```

### OnTroopRecruited
`public virtual void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**Purpose:** Invoked when the `troop recruited` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTroopRecruited(recruiterHero, recruitmentSettlement, recruitmentSource, troop, 0);
```

### OnTroopGivenToSettlement
`public virtual void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**Purpose:** Invoked when the `troop given to settlement` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTroopGivenToSettlement(giverHero, recipientSettlement, roster);
```

### OnItemSold
`public virtual void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**Purpose:** Invoked when the `item sold` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemSold(receiverParty, payerParty, itemRosterElement, 0, currentSettlement);
```

### OnCaravanTransactionCompleted
`public virtual void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<ValueTuple<EquipmentElement, int>> itemRosterElements)`

**Purpose:** Invoked when the `caravan transaction completed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCaravanTransactionCompleted(caravanParty, town, list<ValueTuple<EquipmentElement, 0);
```

### OnPrisonerSold
`public virtual void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**Purpose:** Invoked when the `prisoner sold` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerSold(sellerParty, buyerParty, prisoners);
```

### OnPartyDisbanded
`public virtual void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**Purpose:** Invoked when the `party disbanded` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyDisbanded(disbandParty, relatedSettlement);
```

### OnPartyDisbandStarted
`public virtual void OnPartyDisbandStarted(MobileParty disbandParty)`

**Purpose:** Invoked when the `party disband started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyDisbandStarted(disbandParty);
```

### OnPartyDisbandCanceled
`public virtual void OnPartyDisbandCanceled(MobileParty disbandParty)`

**Purpose:** Invoked when the `party disband canceled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyDisbandCanceled(disbandParty);
```

### OnHideoutSpotted
`public virtual void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**Purpose:** Invoked when the `hideout spotted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHideoutSpotted(party, hideoutParty);
```

### OnHideoutDeactivated
`public virtual void OnHideoutDeactivated(Settlement hideout)`

**Purpose:** Invoked when the `hideout deactivated` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHideoutDeactivated(hideout);
```

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<ValueTuple<ItemRosterElement, int>> purchasedItems, List<ValueTuple<ItemRosterElement, int>> soldItems, bool isTrading)`

**Purpose:** Invoked when the `player inventory exchange` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerInventoryExchange(list<ValueTuple<ItemRosterElement, 0, list<ValueTuple<ItemRosterElement, 0, false);
```

### OnItemsDiscardedByPlayer
`public virtual void OnItemsDiscardedByPlayer(ItemRoster roster)`

**Purpose:** Invoked when the `items discarded by player` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemsDiscardedByPlayer(roster);
```

### OnPersuasionProgressCommitted
`public virtual void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**Purpose:** Invoked when the `persuasion progress committed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPersuasionProgressCommitted(tuple<PersuasionOptionArgs, progress);
```

### OnHeroSharedFoodWithAnother
`public virtual void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**Purpose:** Invoked when the `hero shared food with another` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroSharedFoodWithAnother(supporterHero, supportedHero, 0);
```

### OnQuestCompleted
`public virtual void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**Purpose:** Invoked when the `quest completed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnQuestCompleted(quest, detail);
```

### OnQuestStarted
`public virtual void OnQuestStarted(QuestBase quest)`

**Purpose:** Invoked when the `quest started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnQuestStarted(quest);
```

### OnItemProduced
`public virtual void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Invoked when the `item produced` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemProduced(itemObject, settlement, 0);
```

### OnItemConsumed
`public virtual void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**Purpose:** Invoked when the `item consumed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemConsumed(itemObject, settlement, 0);
```

### OnPartyConsumedFood
`public virtual void OnPartyConsumedFood(MobileParty party)`

**Purpose:** Invoked when the `party consumed food` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyConsumedFood(party);
```

### SiegeCompleted
`public virtual void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.SiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### AfterSiegeCompleted
`public virtual void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.AfterSiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### SiegeEngineBuilt
`public virtual void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.SiegeEngineBuilt(siegeEvent, side, siegeEngine);
```

### RaidCompleted
`public virtual void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.RaidCompleted(winnerSide, raidEvent);
```

### ForceSuppliesCompleted
`public virtual void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.ForceSuppliesCompleted(winnerSide, forceSuppliesEvent);
```

### ForceVolunteersCompleted
`public virtual void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.ForceVolunteersCompleted(winnerSide, forceVolunteersEvent);
```

### OnBeforeMainCharacterDied
`public virtual void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the `before main character died` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeMainCharacterDied(victim, killer, detail, false);
```

### OnGameOver
`public virtual void OnGameOver()`

**Purpose:** Invoked when the `game over` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameOver();
```

### OnClanDestroyed
`public virtual void OnClanDestroyed(Clan destroyedClan)`

**Purpose:** Invoked when the `clan destroyed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanDestroyed(destroyedClan);
```

### OnHideoutBattleCompleted
`public virtual void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent)`

**Purpose:** Invoked when the `hideout battle completed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHideoutBattleCompleted(winnerSide, hideoutEventComponent);
```

### OnNewIssueCreated
`public virtual void OnNewIssueCreated(IssueBase issue)`

**Purpose:** Invoked when the `new issue created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewIssueCreated(issue);
```

### OnIssueOwnerChanged
`public virtual void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**Purpose:** Invoked when the `issue owner changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIssueOwnerChanged(issue, oldOwner);
```

### OnNewItemCrafted
`public virtual void OnNewItemCrafted(ItemObject itemObject)`

**Purpose:** Invoked when the `new item crafted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewItemCrafted(itemObject);
```

### OnWorkshopInitialized
`public virtual void OnWorkshopInitialized(Workshop workshop)`

**Purpose:** Invoked when the `workshop initialized` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWorkshopInitialized(workshop);
```

### OnWorkshopOwnerChanged
`public virtual void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**Purpose:** Invoked when the `workshop owner changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWorkshopOwnerChanged(workshop, oldOwner);
```

### OnWorkshopTypeChanged
`public virtual void OnWorkshopTypeChanged(Workshop workshop)`

**Purpose:** Invoked when the `workshop type changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWorkshopTypeChanged(workshop);
```

### CraftingPartUnlocked
`public virtual void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CraftingPartUnlocked(craftingPiece);
```

### OnNewItemCrafted
`public virtual void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**Purpose:** Invoked when the `new item crafted` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewItemCrafted(itemObject, overriddenItemModifier, false);
```

### OnEquipmentSmeltedByHero
`public virtual void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)`

**Purpose:** Invoked when the `equipment smelted by hero` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnEquipmentSmeltedByHero(hero, equipmentElement);
```

### OnBeforeSave
`public virtual void OnBeforeSave()`

**Purpose:** Invoked when the `before save` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeSave();
```

### OnMainPartyPrisonerRecruited
`public virtual void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**Purpose:** Invoked when the `main party prisoner recruited` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMainPartyPrisonerRecruited(roster);
```

### OnPrisonerTaken
`public virtual void OnPrisonerTaken(FlattenedTroopRoster roster)`

**Purpose:** Invoked when the `prisoner taken` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerTaken(roster);
```

### OnPrisonerDonatedToSettlement
`public virtual void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**Purpose:** Invoked when the `prisoner donated to settlement` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerDonatedToSettlement(donatingParty, donatedPrisoners, donatedSettlement);
```

### CanMoveToSettlement
`public virtual void CanMoveToSettlement(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `move to settlement`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanMoveToSettlement(hero, result);
```

### OnHeroChangedClan
`public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)`

**Purpose:** Invoked when the `hero changed clan` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroChangedClan(hero, oldClan);
```

### CanHeroDie
`public virtual void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero die`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroDie(hero, causeOfDeath, result);
```

### CanPlayerMeetWithHeroAfterConversation
`public virtual void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `player meet with hero after conversation`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanPlayerMeetWithHeroAfterConversation(hero, result);
```

### CanHeroBecomePrisoner
`public virtual void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero become prisoner`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroBecomePrisoner(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public virtual void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `be governor or have party role`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanBeGovernorOrHavePartyRole(hero, result);
```

### OnSaveOver
`public virtual void OnSaveOver(bool isSuccessful, string saveName)`

**Purpose:** Invoked when the `save over` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSaveOver(false, "example");
```

### OnSaveStarted
`public virtual void OnSaveStarted()`

**Purpose:** Invoked when the `save started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSaveStarted();
```

### CanHeroMarry
`public virtual void CanHeroMarry(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero marry`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroMarry(hero, result);
```

### OnHeroTeleportationRequested
`public virtual void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**Purpose:** Invoked when the `hero teleportation requested` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroTeleportationRequested(hero, targetSettlement, targetParty, detail);
```

### OnPartyLeaderChangeOfferCanceled
`public virtual void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**Purpose:** Invoked when the `party leader change offer canceled` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyLeaderChangeOfferCanceled(party);
```

### OnPartyLeaderChanged
`public virtual void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**Purpose:** Invoked when the `party leader changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyLeaderChanged(mobileParty, oldLeader);
```

### OnClanInfluenceChanged
`public virtual void OnClanInfluenceChanged(Clan clan, float change)`

**Purpose:** Invoked when the `clan influence changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanInfluenceChanged(clan, 0);
```

### OnPlayerPartyKnockedOrKilledTroop
`public virtual void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**Purpose:** Invoked when the `player party knocked or killed troop` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerPartyKnockedOrKilledTroop(strikedTroop);
```

### OnPlayerEarnedGoldFromAsset
`public virtual void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**Purpose:** Invoked when the `player earned gold from asset` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerEarnedGoldFromAsset(incomeType, 0);
```

### OnCollectLootItems
`public virtual void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**Purpose:** Invoked when the `collect loot items` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCollectLootItems(winnerParty, gainedLoots);
```

### OnLootDistributedToParty
`public virtual void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**Purpose:** Invoked when the `loot distributed to party` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnLootDistributedToParty(winnerParty, defeatedParty, lootedItems);
```

### OnPlayerJoinedTournament
`public virtual void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**Purpose:** Invoked when the `player joined tournament` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerJoinedTournament(town, false);
```

### OnConfigChanged
`public virtual void OnConfigChanged()`

**Purpose:** Invoked when the `config changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnConfigChanged();
```

### OnMobilePartyRaftStateChanged
`public virtual void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**Purpose:** Invoked when the `mobile party raft state changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyRaftStateChanged(mobileParty);
```

### OnCharacterCreationInitialized
`public virtual void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**Purpose:** Invoked when the `character creation initialized` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterCreationInitialized(characterCreationManager);
```

### OnShipDestroyed
`public virtual void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**Purpose:** Invoked when the `ship destroyed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipDestroyed(owner, ship, detail);
```

### OnShipOwnerChanged
`public virtual void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail shipOwnerChangeDetail)`

**Purpose:** Invoked when the `ship owner changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipOwnerChanged(ship, oldOwner, shipOwnerChangeDetail);
```

### OnFigureheadUnlocked
`public virtual void OnFigureheadUnlocked(Figurehead figurehead)`

**Purpose:** Invoked when the `figurehead unlocked` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnFigureheadUnlocked(figurehead);
```

### OnShipRepaired
`public virtual void OnShipRepaired(Ship ship, Settlement repairPort)`

**Purpose:** Invoked when the `ship repaired` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipRepaired(ship, repairPort);
```

### OnPartyLeftArmy
`public virtual void OnPartyLeftArmy(MobileParty party, Army army)`

**Purpose:** Invoked when the `party left army` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyLeftArmy(party, army);
```

### OnIncidentResolved
`public virtual void OnIncidentResolved(Incident incident)`

**Purpose:** Invoked when the `incident resolved` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIncidentResolved(incident);
```

### OnPartyAddedToMapEvent
`public virtual void OnPartyAddedToMapEvent(PartyBase partyBase)`

**Purpose:** Invoked when the `party added to map event` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyAddedToMapEvent(partyBase);
```

### OnMobilePartyNavigationStateChanged
`public virtual void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**Purpose:** Invoked when the `mobile party navigation state changed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyNavigationStateChanged(mobileParty);
```

### OnMobilePartyJoinedToSiegeEvent
`public virtual void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**Purpose:** Invoked when the `mobile party joined to siege event` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyJoinedToSiegeEvent(mobileParty);
```

### OnMobilePartyLeftSiegeEvent
`public virtual void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**Purpose:** Invoked when the `mobile party left siege event` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyLeftSiegeEvent(mobileParty);
```

### OnBlockadeActivated
`public virtual void OnBlockadeActivated(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the `blockade activated` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBlockadeActivated(siegeEvent);
```

### OnBlockadeDeactivated
`public virtual void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**Purpose:** Invoked when the `blockade deactivated` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBlockadeDeactivated(siegeEvent);
```

### OnShipCreated
`public virtual void OnShipCreated(Ship ship, Settlement createdSettlement)`

**Purpose:** Invoked when the `ship created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipCreated(ship, createdSettlement);
```

### OnMercenaryServiceStarted
`public virtual void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**Purpose:** Invoked when the `mercenary service started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryServiceStarted(mercenaryClan, details);
```

### OnMercenaryServiceEnded
`public virtual void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**Purpose:** Invoked when the `mercenary service ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryServiceEnded(mercenaryClan, details);
```

### OnMapMarkerCreated
`public virtual void OnMapMarkerCreated(MapMarker mapMarker)`

**Purpose:** Invoked when the `map marker created` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapMarkerCreated(mapMarker);
```

### OnMapMarkerRemoved
`public virtual void OnMapMarkerRemoved(MapMarker mapMarker)`

**Purpose:** Invoked when the `map marker removed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapMarkerRemoved(mapMarker);
```

### OnAllianceStarted
`public virtual void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Invoked when the `alliance started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAllianceStarted(kingdom1, kingdom2);
```

### OnAllianceEnded
`public virtual void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**Purpose:** Invoked when the `alliance ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAllianceEnded(kingdom1, kingdom2);
```

### OnCallToWarAgreementStarted
`public virtual void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Invoked when the `call to war agreement started` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCallToWarAgreementStarted(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### OnCallToWarAgreementEnded
`public virtual void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Invoked when the `call to war agreement ended` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCallToWarAgreementEnded(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### CanHeroLeadParty
`public virtual void CanHeroLeadParty(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero lead party`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroLeadParty(hero, result);
```

### OnCraftingOrderCompleted
`public virtual void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**Purpose:** Invoked when the `crafting order completed` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCraftingOrderCompleted(town, craftingOrder, craftedItem, completerHero);
```

### OnItemsRefined
`public virtual void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**Purpose:** Invoked when the `items refined` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemsRefined(hero, refineFormula);
```

### OnMapEventContinuityNeedsUpdate
`public virtual void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**Purpose:** Invoked when the `map event continuity needs update` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapEventContinuityNeedsUpdate(faction);
```

### OnHeirSelectionOver
`public virtual void OnHeirSelectionOver(Hero selectedHeir)`

**Purpose:** Invoked when the `heir selection over` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeirSelectionOver(selectedHeir);
```

### OnHeirSelectionRequested
`public virtual void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**Purpose:** Invoked when the `heir selection requested` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeirSelectionRequested(dictionary<Hero, 0);
```

### OnMainPartyStarving
`public virtual void OnMainPartyStarving()`

**Purpose:** Invoked when the `main party starving` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMainPartyStarving();
```

### OnHeroGetsBusy
`public virtual void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**Purpose:** Invoked when the `hero gets busy` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroGetsBusy(hero, heroGetsBusyReason);
```

### CanHeroEquipmentBeChanged
`public virtual void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `hero equipment be changed`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroEquipmentBeChanged(hero, result);
```

### CanHaveCampaignIssues
`public virtual void CanHaveCampaignIssues(Hero hero, ref bool result)`

**Purpose:** Checks whether the current object meets the preconditions for `have campaign issues`.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHaveCampaignIssues(hero, result);
```

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)`

**Purpose:** Determines whether the current object is in the `settlement busy` state or condition.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.IsSettlementBusy(settlement, asker, flags);
```

### OnHeroUnregistered
`public virtual void OnHeroUnregistered(Hero hero)`

**Purpose:** Invoked when the `hero unregistered` event is raised.

```csharp
// Obtain an instance of CampaignEventReceiver from the subsystem API first
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroUnregistered(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CampaignEventReceiver instance = ...;
```

## See Also

- [Area Index](../)