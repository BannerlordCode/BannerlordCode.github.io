---
title: "CampaignEventDispatcher"
description: "CampaignEventDispatcher 的自动生成类参考。"
---
# CampaignEventDispatcher

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEventDispatcher.cs`

## 概述

`CampaignEventDispatcher` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RemoveListeners
`public override void RemoveListeners(object o)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 listeners。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.RemoveListeners(o);
```

### OnPlayerBodyPropertiesChanged
`public override void OnPlayerBodyPropertiesChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 player body properties changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerBodyPropertiesChanged();
```

### OnHeroLevelledUp
`public override void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero levelled up 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroLevelledUp(hero, false);
```

### OnHomeHideoutChanged
`public override void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)`

**用途 / Purpose:** **用途 / Purpose:** 在 home hideout changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHomeHideoutChanged(banditPartyComponent, oldHomeHideout);
```

### OnCharacterCreationIsOver
`public override void OnCharacterCreationIsOver()`

**用途 / Purpose:** **用途 / Purpose:** 在 character creation is over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterCreationIsOver();
```

### OnHeroGainedSkill
`public override void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero gained skill 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroGainedSkill(hero, skill, 0, false);
```

### OnHeroWounded
`public override void OnHeroWounded(Hero woundedHero)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero wounded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroWounded(woundedHero);
```

### OnHeroRelationChanged
`public override void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero relation changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroRelationChanged(effectiveHero, effectiveHeroGainedRelationWith, 0, true, detail, originalHero, originalGainedRelationWith);
```

### OnLootDistributedToParty
`public override void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**用途 / Purpose:** **用途 / Purpose:** 在 loot distributed to party 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnLootDistributedToParty(winnerParty, defeatedParty, lootedItems);
```

### OnHeroOccupationChanged
`public override void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero occupation changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroOccupationChanged(hero, oldOccupation);
```

### OnBarterAccepted
`public override void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**用途 / Purpose:** **用途 / Purpose:** 在 barter accepted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBarterAccepted(offererHero, otherHero, barters);
```

### OnBarterCanceled
`public override void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**用途 / Purpose:** **用途 / Purpose:** 在 barter canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBarterCanceled(offererHero, otherHero, barters);
```

### OnHeroCreated
`public override void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroCreated(hero, false);
```

### OnHeroActivated
`public override void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroActivated(hero, previousState);
```

### OnQuestLogAdded
`public override void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**用途 / Purpose:** **用途 / Purpose:** 在 quest log added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnQuestLogAdded(quest, false);
```

### OnIssueLogAdded
`public override void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**用途 / Purpose:** **用途 / Purpose:** 在 issue log added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIssueLogAdded(issue, false);
```

### OnClanTierChanged
`public override void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan tier changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanTierChanged(clan, false);
```

### OnClanChangedKingdom
`public override void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan changed kingdom 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanChangedKingdom(clan, oldKingdom, newKingdom, actionDetail, false);
```

### OnClanDefected
`public override void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan defected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanDefected(clan, oldKingdom, newKingdom);
```

### OnClanCreated
`public override void OnClanCreated(Clan clan, bool isCompanion)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanCreated(clan, false);
```

### OnHeroJoinedParty
`public override void OnHeroJoinedParty(Hero hero, MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero joined party 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroJoinedParty(hero, party);
```

### OnKingdomDecisionAdded
`public override void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**用途 / Purpose:** **用途 / Purpose:** 在 kingdom decision added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDecisionAdded(decision, false);
```

### OnKingdomDecisionCancelled
`public override void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**用途 / Purpose:** **用途 / Purpose:** 在 kingdom decision cancelled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDecisionCancelled(decision, false);
```

### OnKingdomDecisionConcluded
`public override void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**用途 / Purpose:** **用途 / Purpose:** 在 kingdom decision concluded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDecisionConcluded(decision, chosenOutcome, false);
```

### OnHeroOrPartyTradedGold
`public override void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero or party traded gold 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroOrPartyTradedGold((Hero, giver, (Hero, recipient, (int, "example", true);
```

### OnHeroOrPartyGaveItem
`public override void OnHeroOrPartyGaveItem((Hero, PartyBase) giver, (Hero, PartyBase) receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero or party gave item 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroOrPartyGaveItem((Hero, giver, (Hero, receiver, itemRosterElement, true);
```

### OnBanditPartyRecruited
`public override void OnBanditPartyRecruited(MobileParty banditParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 bandit party recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBanditPartyRecruited(banditParty);
```

### OnArmyCreated
`public override void OnArmyCreated(Army army)`

**用途 / Purpose:** **用途 / Purpose:** 在 army created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyCreated(army);
```

### OnPartyAttachedAnotherParty
`public override void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party attached another party 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyAttachedAnotherParty(mobileParty);
```

### OnNearbyPartyAddedToPlayerMapEvent
`public override void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 nearby party added to player map event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNearbyPartyAddedToPlayerMapEvent(mobileParty);
```

### OnArmyDispersed
`public override void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**用途 / Purpose:** **用途 / Purpose:** 在 army dispersed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyDispersed(army, reason, false);
```

### OnArmyGathered
`public override void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**用途 / Purpose:** **用途 / Purpose:** 在 army gathered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyGathered(army, gatheringPoint);
```

### OnPerkOpened
`public override void OnPerkOpened(Hero hero, PerkObject perk)`

**用途 / Purpose:** **用途 / Purpose:** 在 perk opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPerkOpened(hero, perk);
```

### OnPerkReset
`public override void OnPerkReset(Hero hero, PerkObject perk)`

**用途 / Purpose:** **用途 / Purpose:** 在 perk reset 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPerkReset(hero, perk);
```

### OnPlayerTraitChanged
`public override void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**用途 / Purpose:** **用途 / Purpose:** 在 player trait changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerTraitChanged(trait, 0);
```

### OnVillageStateChanged
`public override void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 village state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnSettlementEntered
`public override void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSettlementEntered(party, settlement, hero);
```

### OnAfterSettlementEntered
`public override void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 after settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAfterSettlementEntered(party, settlement, hero);
```

### OnBeforeSettlementEntered
`public override void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 before settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeSettlementEntered(party, settlement, hero);
```

### OnMercenaryTroopChangedInTown
`public override void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**用途 / Purpose:** **用途 / Purpose:** 在 mercenary troop changed in town 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryTroopChangedInTown(town, oldTroopType, newTroopType);
```

### OnMercenaryNumberChangedInTown
`public override void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**用途 / Purpose:** **用途 / Purpose:** 在 mercenary number changed in town 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryNumberChangedInTown(town, 0, 0);
```

### OnAlleyOccupiedByPlayer
`public override void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**用途 / Purpose:** **用途 / Purpose:** 在 alley occupied by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAlleyOccupiedByPlayer(alley, troops);
```

### OnAlleyOwnerChanged
`public override void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**用途 / Purpose:** **用途 / Purpose:** 在 alley owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAlleyOwnerChanged(alley, newOwner, oldOwner);
```

### OnAlleyClearedByPlayer
`public override void OnAlleyClearedByPlayer(Alley alley)`

**用途 / Purpose:** **用途 / Purpose:** 在 alley cleared by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAlleyClearedByPlayer(alley);
```

### OnRomanticStateChanged
`public override void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**用途 / Purpose:** **用途 / Purpose:** 在 romantic state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRomanticStateChanged(hero1, hero2, romanceLevel);
```

### OnBeforeHeroesMarried
`public override void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification)`

**用途 / Purpose:** **用途 / Purpose:** 在 before heroes married 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeHeroesMarried(hero1, hero2, true);
```

### OnPlayerEliminatedFromTournament
`public override void OnPlayerEliminatedFromTournament(int round, Town town)`

**用途 / Purpose:** **用途 / Purpose:** 在 player eliminated from tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerEliminatedFromTournament(0, town);
```

### OnPlayerStartedTournamentMatch
`public override void OnPlayerStartedTournamentMatch(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 在 player started tournament match 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerStartedTournamentMatch(town);
```

### OnTournamentStarted
`public override void OnTournamentStarted(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 在 tournament started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTournamentStarted(town);
```

### OnTournamentFinished
`public override void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**用途 / Purpose:** **用途 / Purpose:** 在 tournament finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTournamentFinished(winner, participants, town, prize);
```

### OnTournamentCancelled
`public override void OnTournamentCancelled(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 在 tournament cancelled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTournamentCancelled(town);
```

### OnWarDeclared
`public override void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**用途 / Purpose:** **用途 / Purpose:** 在 war declared 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWarDeclared(faction1, faction2, declareWarDetail);
```

### OnRulingClanChanged
`public override void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)`

**用途 / Purpose:** **用途 / Purpose:** 在 ruling clan changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRulingClanChanged(kingdom, oldRulingClan);
```

### OnStartBattle
`public override void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**用途 / Purpose:** **用途 / Purpose:** 在 start battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnStartBattle(attackerParty, defenderParty, subject, true);
```

### OnRebellionFinished
`public override void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**用途 / Purpose:** **用途 / Purpose:** 在 rebellion finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRebellionFinished(settlement, oldOwnerClan);
```

### TownRebelliousStateChanged
`public override void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TownRebelliousStateChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TownRebelliousStateChanged(town, false);
```

### OnRebelliousClanDisbandedAtSettlement
`public override void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan rebelliousClan)`

**用途 / Purpose:** **用途 / Purpose:** 在 rebellious clan disbanded at settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRebelliousClanDisbandedAtSettlement(settlement, rebelliousClan);
```

### OnItemsLooted
`public override void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**用途 / Purpose:** **用途 / Purpose:** 在 items looted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemsLooted(mobileParty, items);
```

### OnMobilePartyDestroyed
`public override void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyDestroyed(mobileParty, destroyerParty);
```

### OnMobilePartyCreated
`public override void OnMobilePartyCreated(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyCreated(party);
```

### OnMapInteractableCreated
`public override void OnMapInteractableCreated(IInteractablePoint interactable)`

**用途 / Purpose:** **用途 / Purpose:** 在 map interactable created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapInteractableCreated(interactable);
```

### OnMapInteractableDestroyed
`public override void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**用途 / Purpose:** **用途 / Purpose:** 在 map interactable destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapInteractableDestroyed(interactable);
```

### OnMobilePartyQuestStatusChanged
`public override void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party quest status changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyQuestStatusChanged(party, false);
```

### OnHeroKilled
`public override void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroKilled(victim, killer, detail, false);
```

### OnBeforeHeroKilled
`public override void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 before hero killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeHeroKilled(victim, killer, detail, false);
```

### OnChildEducationCompleted
`public override void OnChildEducationCompleted(Hero hero, int age)`

**用途 / Purpose:** **用途 / Purpose:** 在 child education completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnChildEducationCompleted(hero, 0);
```

### OnHeroComesOfAge
`public override void OnHeroComesOfAge(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero comes of age 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroComesOfAge(hero);
```

### OnHeroReachesTeenAge
`public override void OnHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero reaches teen age 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroReachesTeenAge(hero);
```

### OnHeroGrowsOutOfInfancy
`public override void OnHeroGrowsOutOfInfancy(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero grows out of infancy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroGrowsOutOfInfancy(hero);
```

### OnCharacterDefeated
`public override void OnCharacterDefeated(Hero winner, Hero loser)`

**用途 / Purpose:** **用途 / Purpose:** 在 character defeated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterDefeated(winner, loser);
```

### OnHeroPrisonerTaken
`public override void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero prisoner taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroPrisonerTaken(capturer, prisoner);
```

### OnHeroPrisonerReleased
`public override void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero prisoner released 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroPrisonerReleased(prisoner, party, capturerFaction, detail, false);
```

### OnCharacterBecameFugitive
`public override void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**用途 / Purpose:** **用途 / Purpose:** 在 character became fugitive 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterBecameFugitive(hero, true);
```

### OnPlayerLearnsAboutHero
`public override void OnPlayerLearnsAboutHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 player learns about hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerLearnsAboutHero(hero);
```

### OnPlayerMetHero
`public override void OnPlayerMetHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 player met hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerMetHero(hero);
```

### OnRenownGained
`public override void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**用途 / Purpose:** **用途 / Purpose:** 在 renown gained 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRenownGained(hero, 0, false);
```

### OnCrimeRatingChanged
`public override void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**用途 / Purpose:** **用途 / Purpose:** 在 crime rating changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCrimeRatingChanged(kingdom, 0);
```

### OnNewCompanionAdded
`public override void OnNewCompanionAdded(Hero newCompanion)`

**用途 / Purpose:** **用途 / Purpose:** 在 new companion added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewCompanionAdded(newCompanion);
```

### OnAfterMissionStarted
`public override void OnAfterMissionStarted(IMission iMission)`

**用途 / Purpose:** **用途 / Purpose:** 在 after mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAfterMissionStarted(iMission);
```

### OnGameMenuOpened
`public override void OnGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 在 game menu opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameMenuOpened(args);
```

### OnMakePeace
`public override void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 make peace 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMakePeace(side1Faction, side2Faction, detail);
```

### OnKingdomDestroyed
`public override void OnKingdomDestroyed(Kingdom destroyedKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 在 kingdom destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomDestroyed(destroyedKingdom);
```

### CanKingdomBeDiscontinued
`public override void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 kingdom be discontinued 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanKingdomBeDiscontinued(kingdom, result);
```

### OnKingdomCreated
`public override void OnKingdomCreated(Kingdom createdKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 在 kingdom created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnKingdomCreated(createdKingdom);
```

### OnVillageBecomeNormal
`public override void OnVillageBecomeNormal(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 在 village become normal 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageBecomeNormal(village);
```

### OnVillageBeingRaided
`public override void OnVillageBeingRaided(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 在 village being raided 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageBeingRaided(village);
```

### OnVillageLooted
`public override void OnVillageLooted(Village village)`

**用途 / Purpose:** **用途 / Purpose:** 在 village looted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVillageLooted(village);
```

### OnConversationEnded
`public override void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**用途 / Purpose:** **用途 / Purpose:** 在 conversation ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnConversationEnded(characters);
```

### OnAgentJoinedConversation
`public override void OnAgentJoinedConversation(IAgent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent joined conversation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAgentJoinedConversation(agent);
```

### OnMapEventEnded
`public override void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapEventEnded(mapEvent);
```

### OnMapEventStarted
`public override void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapEventStarted(mapEvent, attackerParty, defenderParty);
```

### OnPrisonersChangeInSettlement
`public override void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**用途 / Purpose:** **用途 / Purpose:** 在 prisoners change in settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonersChangeInSettlement(settlement, prisonerRoster, prisonerHero, false);
```

### OnMissionStarted
`public override void OnMissionStarted(IMission mission)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMissionStarted(mission);
```

### OnPlayerBoardGameOver
`public override void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**用途 / Purpose:** **用途 / Purpose:** 在 player board game over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerBoardGameOver(opposingHero, state);
```

### OnRansomOfferedToPlayer
`public override void OnRansomOfferedToPlayer(Hero captiveHero)`

**用途 / Purpose:** **用途 / Purpose:** 在 ransom offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRansomOfferedToPlayer(captiveHero);
```

### OnRansomOfferCancelled
`public override void OnRansomOfferCancelled(Hero captiveHero)`

**用途 / Purpose:** **用途 / Purpose:** 在 ransom offer cancelled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnRansomOfferCancelled(captiveHero);
```

### OnPeaceOfferedToPlayer
`public override void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDurationInDays)`

**用途 / Purpose:** **用途 / Purpose:** 在 peace offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPeaceOfferedToPlayer(opponentFaction, 0, 0);
```

### OnTradeAgreementSigned
`public override void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**用途 / Purpose:** **用途 / Purpose:** 在 trade agreement signed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTradeAgreementSigned(kingdom, other);
```

### OnPeaceOfferResolved
`public override void OnPeaceOfferResolved(IFaction opponentFaction)`

**用途 / Purpose:** **用途 / Purpose:** 在 peace offer resolved 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPeaceOfferResolved(opponentFaction);
```

### OnMarriageOfferedToPlayer
`public override void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**用途 / Purpose:** **用途 / Purpose:** 在 marriage offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferCanceled
`public override void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**用途 / Purpose:** **用途 / Purpose:** 在 marriage offer canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMarriageOfferCanceled(suitor, maiden);
```

### OnVassalOrMercenaryServiceOfferedToPlayer
`public override void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 在 vassal or mercenary service offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVassalOrMercenaryServiceOfferedToPlayer(offeredKingdom);
```

### OnCommonAreaStateChanged
`public override void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)`

**用途 / Purpose:** **用途 / Purpose:** 在 common area state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCommonAreaStateChanged(alley, oldState, newState);
```

### OnVassalOrMercenaryServiceOfferCanceled
`public override void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 在 vassal or mercenary service offer canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnVassalOrMercenaryServiceOfferCanceled(offeredKingdom);
```

### BeforeMissionOpened
`public override void BeforeMissionOpened()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeforeMissionOpened 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.BeforeMissionOpened();
```

### OnPartyRemoved
`public override void OnPartyRemoved(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 在 party removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyRemoved(party);
```

### OnPartySizeChanged
`public override void OnPartySizeChanged(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 在 party size changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartySizeChanged(party);
```

### OnSettlementOwnerChanged
`public override void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### OnGovernorChanged
`public override void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**用途 / Purpose:** **用途 / Purpose:** 在 governor changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGovernorChanged(fortification, oldGovernor, newGovernor);
```

### OnSettlementLeft
`public override void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSettlementLeft(party, settlement);
```

### Tick
`public override void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.Tick(0);
```

### OnSessionStart
`public override void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSessionStart(campaignGameStarter);
```

### OnAfterSessionStart
`public override void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 after session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAfterSessionStart(campaignGameStarter);
```

### OnNewGameCreated
`public override void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 new game created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewGameCreated(campaignGameStarter);
```

### OnGameEarlyLoaded
`public override void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 game early loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameEarlyLoaded(campaignGameStarter);
```

### OnGameLoaded
`public override void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 game loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameLoaded(campaignGameStarter);
```

### OnGameLoadFinished
`public override void OnGameLoadFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 game load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameLoadFinished();
```

### OnPartyJoinedArmy
`public override void OnPartyJoinedArmy(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party joined army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyJoinedArmy(mobileParty);
```

### OnPartyRemovedFromArmy
`public override void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party removed from army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyRemovedFromArmy(mobileParty);
```

### OnPlayerArmyLeaderChangedBehavior
`public override void OnPlayerArmyLeaderChangedBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 player army leader changed behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerArmyLeaderChangedBehavior();
```

### OnArmyOverlaySetDirty
`public override void OnArmyOverlaySetDirty()`

**用途 / Purpose:** **用途 / Purpose:** 在 army overlay set dirty 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnArmyOverlaySetDirty();
```

### OnPlayerDesertedBattle
`public override void OnPlayerDesertedBattle(int sacrificedMenCount)`

**用途 / Purpose:** **用途 / Purpose:** 在 player deserted battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerDesertedBattle(0);
```

### MissionTick
`public override void MissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MissionTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.MissionTick(0);
```

### OnChildConceived
`public override void OnChildConceived(Hero mother)`

**用途 / Purpose:** **用途 / Purpose:** 在 child conceived 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnChildConceived(mother);
```

### OnGivenBirth
`public override void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**用途 / Purpose:** **用途 / Purpose:** 在 given birth 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGivenBirth(mother, aliveChildren, 0);
```

### OnUnitRecruited
`public override void OnUnitRecruited(CharacterObject character, int amount)`

**用途 / Purpose:** **用途 / Purpose:** 在 unit recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnUnitRecruited(character, 0);
```

### OnPlayerBattleEnd
`public override void OnPlayerBattleEnd(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 player battle end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerBattleEnd(mapEvent);
```

### OnMissionEnded
`public override void OnMissionEnded(IMission mission)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMissionEnded(mission);
```

### TickPartialHourlyAi
`public override void TickPartialHourlyAi(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进partial hourly ai的状态。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TickPartialHourlyAi(party);
```

### QuarterDailyPartyTick
`public override void QuarterDailyPartyTick(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 调用 QuarterDailyPartyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.QuarterDailyPartyTick(party);
```

### AiHourlyTick
`public override void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AiHourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.AiHourlyTick(party, partyThinkParams);
```

### HourlyTick
`public override void HourlyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 HourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTick();
```

### QuarterHourlyTick
`public override void QuarterHourlyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 QuarterHourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.QuarterHourlyTick();
```

### HourlyTickParty
`public override void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 调用 HourlyTickParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTickParty(mobileParty);
```

### HourlyTickSettlement
`public override void HourlyTickSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 HourlyTickSettlement 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTickSettlement(settlement);
```

### HourlyTickClan
`public override void HourlyTickClan(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 调用 HourlyTickClan 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.HourlyTickClan(clan);
```

### DailyTick
`public override void DailyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTick();
```

### DailyTickParty
`public override void DailyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTickParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickParty(mobileParty);
```

### DailyTickTown
`public override void DailyTickTown(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTickTown 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickTown(town);
```

### DailyTickSettlement
`public override void DailyTickSettlement(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTickSettlement 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickSettlement(settlement);
```

### DailyTickHero
`public override void DailyTickHero(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTickHero 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickHero(hero);
```

### DailyTickClan
`public override void DailyTickClan(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTickClan 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.DailyTickClan(clan);
```

### WeeklyTick
`public override void WeeklyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 WeeklyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.WeeklyTick();
```

### CollectAvailableTutorials
`public override void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectAvailableTutorials 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CollectAvailableTutorials(tutorials);
```

### OnTutorialCompleted
`public override void OnTutorialCompleted(string tutorial)`

**用途 / Purpose:** **用途 / Purpose:** 在 tutorial completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTutorialCompleted("example");
```

### BeforeGameMenuOpened
`public override void BeforeGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeforeGameMenuOpened 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.BeforeGameMenuOpened(args);
```

### AfterGameMenuInitialized
`public override void AfterGameMenuInitialized(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterGameMenuInitialized 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.AfterGameMenuInitialized(args);
```

### OnBarterablesRequested
`public override void OnBarterablesRequested(BarterData args)`

**用途 / Purpose:** **用途 / Purpose:** 在 barterables requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBarterablesRequested(args);
```

### OnPartyVisibilityChanged
`public override void OnPartyVisibilityChanged(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 在 party visibility changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyVisibilityChanged(party);
```

### OnCompanionRemoved
`public override void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 companion removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCompanionRemoved(companion, detail);
```

### TrackDetected
`public override void TrackDetected(Track track)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TrackDetected 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TrackDetected(track);
```

### TrackLost
`public override void TrackLost(Track track)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TrackLost 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.TrackLost(track);
```

### LocationCharactersAreReadyToSpawn
`public override void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LocationCharactersAreReadyToSpawn 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.LocationCharactersAreReadyToSpawn(dictionary<string, 0);
```

### LocationCharactersSimulated
`public override void LocationCharactersSimulated()`

**用途 / Purpose:** **用途 / Purpose:** 调用 LocationCharactersSimulated 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.LocationCharactersSimulated();
```

### OnBeforePlayerAgentSpawn
`public override void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**用途 / Purpose:** **用途 / Purpose:** 在 before player agent spawn 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforePlayerAgentSpawn(spawnFrame);
```

### OnPlayerAgentSpawned
`public override void OnPlayerAgentSpawned()`

**用途 / Purpose:** **用途 / Purpose:** 在 player agent spawned 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerAgentSpawned();
```

### OnPlayerUpgradedTroops
`public override void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**用途 / Purpose:** **用途 / Purpose:** 在 player upgraded troops 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerUpgradedTroops(upgradeFromTroop, upgradeToTroop, 0);
```

### OnHeroCombatHit
`public override void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero combat hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroCombatHit(attackerTroop, attackedTroop, party, usedWeapon, false, 0);
```

### OnCharacterPortraitPopUpOpened
`public override void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 在 character portrait pop up opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterPortraitPopUpOpened(character);
```

### OnCharacterPortraitPopUpClosed
`public override void OnCharacterPortraitPopUpClosed()`

**用途 / Purpose:** **用途 / Purpose:** 在 character portrait pop up closed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterPortraitPopUpClosed();
```

### OnPlayerStartTalkFromMenu
`public override void OnPlayerStartTalkFromMenu(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 player start talk from menu 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerStartTalkFromMenu(hero);
```

### OnGameMenuOptionSelected
`public override void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**用途 / Purpose:** **用途 / Purpose:** 在 game menu option selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameMenuOptionSelected(gameMenu, gameMenuOption);
```

### OnPlayerStartRecruitment
`public override void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 在 player start recruitment 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerStartRecruitment(recruitTroopCharacter);
```

### OnBeforePlayerCharacterChanged
`public override void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**用途 / Purpose:** **用途 / Purpose:** 在 before player character changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforePlayerCharacterChanged(oldPlayer, newPlayer);
```

### OnPlayerCharacterChanged
`public override void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newPlayerParty, bool isMainPartyChanged)`

**用途 / Purpose:** **用途 / Purpose:** 在 player character changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerCharacterChanged(oldPlayer, newPlayer, newPlayerParty, false);
```

### OnClanLeaderChanged
`public override void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan leader changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanLeaderChanged(oldLeader, newLeader);
```

### OnSiegeEventStarted
`public override void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege event started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeEventStarted(siegeEvent);
```

### OnPlayerSiegeStarted
`public override void OnPlayerSiegeStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 player siege started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerSiegeStarted();
```

### OnSiegeEventEnded
`public override void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeEventEnded(siegeEvent);
```

### OnSiegeAftermathApplied
`public override void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege aftermath applied 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeAftermathApplied(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 0);
```

### OnSiegeBombardmentHit
`public override void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege bombardment hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeBombardmentHit(besiegerParty, besiegedSettlement, side, weapon, target);
```

### OnSiegeBombardmentWallHit
`public override void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege bombardment wall hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeBombardmentWallHit(besiegerParty, besiegedSettlement, side, weapon, false);
```

### OnSiegeEngineDestroyed
`public override void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege engine destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSiegeEngineDestroyed(besiegerParty, besiegedSettlement, side, destroyedEngine);
```

### OnTradeRumorIsTaken
`public override void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**用途 / Purpose:** **用途 / Purpose:** 在 trade rumor is taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTradeRumorIsTaken(newRumors, null);
```

### OnCheckForIssue
`public override void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 check for issue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCheckForIssue(hero);
```

### OnIssueUpdated
`public override void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)`

**用途 / Purpose:** **用途 / Purpose:** 在 issue updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIssueUpdated(issue, details, issueSolver);
```

### OnTroopsDeserted
`public override void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**用途 / Purpose:** **用途 / Purpose:** 在 troops deserted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTroopsDeserted(mobileParty, desertedTroops);
```

### OnTroopRecruited
`public override void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**用途 / Purpose:** **用途 / Purpose:** 在 troop recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTroopRecruited(recruiterHero, recruitmentSettlement, recruitmentSource, troop, 0);
```

### OnTroopGivenToSettlement
`public override void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 在 troop given to settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnTroopGivenToSettlement(giverHero, recipientSettlement, roster);
```

### OnItemSold
`public override void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 item sold 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemSold(receiverParty, payerParty, itemRosterElement, 0, currentSettlement);
```

### OnCaravanTransactionCompleted
`public override void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<(EquipmentElement, int)> itemRosterElements)`

**用途 / Purpose:** **用途 / Purpose:** 在 caravan transaction completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCaravanTransactionCompleted(caravanParty, town, list<(EquipmentElement, 0);
```

### OnPrisonerSold
`public override void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**用途 / Purpose:** **用途 / Purpose:** 在 prisoner sold 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerSold(sellerParty, buyerParty, prisoners);
```

### OnPartyDisbanded
`public override void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 party disbanded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyDisbanded(disbandParty, relatedSettlement);
```

### OnPartyDisbandStarted
`public override void OnPartyDisbandStarted(MobileParty disbandParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party disband started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyDisbandStarted(disbandParty);
```

### OnPartyDisbandCanceled
`public override void OnPartyDisbandCanceled(MobileParty disbandParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 party disband canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyDisbandCanceled(disbandParty);
```

### OnBuildingLevelChanged
`public override void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**用途 / Purpose:** **用途 / Purpose:** 在 building level changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBuildingLevelChanged(town, building, 0);
```

### OnHideoutSpotted
`public override void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 hideout spotted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHideoutSpotted(party, hideoutParty);
```

### OnHideoutDeactivated
`public override void OnHideoutDeactivated(Settlement hideout)`

**用途 / Purpose:** **用途 / Purpose:** 在 hideout deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHideoutDeactivated(hideout);
```

### OnHeroSharedFoodWithAnother
`public override void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero shared food with another 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroSharedFoodWithAnother(supporterHero, supportedHero, 0);
```

### OnItemsDiscardedByPlayer
`public override void OnItemsDiscardedByPlayer(ItemRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 在 items discarded by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemsDiscardedByPlayer(roster);
```

### OnPlayerInventoryExchange
`public override void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**用途 / Purpose:** **用途 / Purpose:** 在 player inventory exchange 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerInventoryExchange(list<(ItemRosterElement, 0, list<(ItemRosterElement, 0, false);
```

### OnPersuasionProgressCommitted
`public override void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**用途 / Purpose:** **用途 / Purpose:** 在 persuasion progress committed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPersuasionProgressCommitted(tuple<PersuasionOptionArgs, progress);
```

### OnQuestCompleted
`public override void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 quest completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnQuestCompleted(quest, detail);
```

### OnQuestStarted
`public override void OnQuestStarted(QuestBase quest)`

**用途 / Purpose:** **用途 / Purpose:** 在 quest started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnQuestStarted(quest);
```

### OnItemProduced
`public override void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**用途 / Purpose:** **用途 / Purpose:** 在 item produced 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemProduced(itemObject, settlement, 0);
```

### OnItemConsumed
`public override void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**用途 / Purpose:** **用途 / Purpose:** 在 item consumed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemConsumed(itemObject, settlement, 0);
```

### OnPartyConsumedFood
`public override void OnPartyConsumedFood(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 在 party consumed food 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyConsumedFood(party);
```

### OnNewIssueCreated
`public override void OnNewIssueCreated(IssueBase issue)`

**用途 / Purpose:** **用途 / Purpose:** 在 new issue created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewIssueCreated(issue);
```

### OnIssueOwnerChanged
`public override void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**用途 / Purpose:** **用途 / Purpose:** 在 issue owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIssueOwnerChanged(issue, oldOwner);
```

### OnBeforeMainCharacterDied
`public override void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** **用途 / Purpose:** 在 before main character died 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeMainCharacterDied(victim, killer, detail, false);
```

### OnGameOver
`public override void OnGameOver()`

**用途 / Purpose:** **用途 / Purpose:** 在 game over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnGameOver();
```

### SiegeCompleted
`public override void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SiegeCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.SiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### AfterSiegeCompleted
`public override void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterSiegeCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.AfterSiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### SiegeEngineBuilt
`public override void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SiegeEngineBuilt 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.SiegeEngineBuilt(siegeEvent, side, siegeEngine);
```

### RaidCompleted
`public override void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RaidCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.RaidCompleted(winnerSide, raidEvent);
```

### ForceSuppliesCompleted
`public override void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ForceSuppliesCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.ForceSuppliesCompleted(winnerSide, forceSuppliesEvent);
```

### ForceVolunteersCompleted
`public override void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ForceVolunteersCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.ForceVolunteersCompleted(winnerSide, forceVolunteersEvent);
```

### OnHideoutBattleCompleted
`public override void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)`

**用途 / Purpose:** **用途 / Purpose:** 在 hideout battle completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHideoutBattleCompleted(winnerSide, hideoutEventComponent, battleEndState);
```

### OnClanDestroyed
`public override void OnClanDestroyed(Clan destroyedClan)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanDestroyed(destroyedClan);
```

### OnNewItemCrafted
`public override void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**用途 / Purpose:** **用途 / Purpose:** 在 new item crafted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnNewItemCrafted(itemObject, overriddenItemModifier, false);
```

### OnWorkshopOwnerChanged
`public override void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**用途 / Purpose:** **用途 / Purpose:** 在 workshop owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWorkshopOwnerChanged(workshop, oldOwner);
```

### OnWorkshopInitialized
`public override void OnWorkshopInitialized(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 在 workshop initialized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWorkshopInitialized(workshop);
```

### OnWorkshopTypeChanged
`public override void OnWorkshopTypeChanged(Workshop workshop)`

**用途 / Purpose:** **用途 / Purpose:** 在 workshop type changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnWorkshopTypeChanged(workshop);
```

### OnMainPartyPrisonerRecruited
`public override void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 在 main party prisoner recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMainPartyPrisonerRecruited(roster);
```

### OnPrisonerDonatedToSettlement
`public override void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 prisoner donated to settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerDonatedToSettlement(donatingParty, donatedPrisoners, donatedSettlement);
```

### OnEquipmentSmeltedByHero
`public override void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)`

**用途 / Purpose:** **用途 / Purpose:** 在 equipment smelted by hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnEquipmentSmeltedByHero(hero, equipmentElement);
```

### OnPrisonerTaken
`public override void OnPrisonerTaken(FlattenedTroopRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 在 prisoner taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerTaken(roster);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** **用途 / Purpose:** 在 before save 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBeforeSave();
```

### OnSaveStarted
`public override void OnSaveStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 save started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSaveStarted();
```

### OnSaveOver
`public override void OnSaveOver(bool isSuccessful, string saveName)`

**用途 / Purpose:** **用途 / Purpose:** 在 save over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnSaveOver(false, "example");
```

### CollectMetadataEntries
`public override void CollectMetadataEntries(List<KeyValuePair<string, string>> pairs)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CollectMetadataEntries 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CollectMetadataEntries(list<KeyValuePair<string, "example");
```

### OnPrisonerReleased
`public override void OnPrisonerReleased(FlattenedTroopRoster roster)`

**用途 / Purpose:** **用途 / Purpose:** 在 prisoner released 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPrisonerReleased(roster);
```

### OnHeroChangedClan
`public override void OnHeroChangedClan(Hero hero, Clan oldClan)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero changed clan 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroChangedClan(hero, oldClan);
```

### OnHeroGetsBusy
`public override void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero gets busy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroGetsBusy(hero, heroGetsBusyReason);
```

### OnPlayerTradeProfit
`public override void OnPlayerTradeProfit(int profit)`

**用途 / Purpose:** **用途 / Purpose:** 在 player trade profit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerTradeProfit(0);
```

### CraftingPartUnlocked
`public override void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CraftingPartUnlocked 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CraftingPartUnlocked(craftingPiece);
```

### OnClanEarnedGoldFromTribute
`public override void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan earned gold from tribute 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanEarnedGoldFromTribute(receiverClan, payingFaction);
```

### OnCollectLootItems
`public override void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**用途 / Purpose:** **用途 / Purpose:** 在 collect loot items 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCollectLootItems(winnerParty, gainedLoots);
```

### OnHeroTeleportationRequested
`public override void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero teleportation requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroTeleportationRequested(hero, targetSettlement, targetParty, detail);
```

### OnClanInfluenceChanged
`public override void OnClanInfluenceChanged(Clan clan, float change)`

**用途 / Purpose:** **用途 / Purpose:** 在 clan influence changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnClanInfluenceChanged(clan, 0);
```

### OnPlayerPartyKnockedOrKilledTroop
`public override void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**用途 / Purpose:** **用途 / Purpose:** 在 player party knocked or killed troop 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerPartyKnockedOrKilledTroop(strikedTroop);
```

### OnPlayerEarnedGoldFromAsset
`public override void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**用途 / Purpose:** **用途 / Purpose:** 在 player earned gold from asset 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerEarnedGoldFromAsset(incomeType, 0);
```

### OnPartyLeaderChangeOfferCanceled
`public override void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 在 party leader change offer canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyLeaderChangeOfferCanceled(party);
```

### OnPartyLeaderChanged
`public override void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**用途 / Purpose:** **用途 / Purpose:** 在 party leader changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyLeaderChanged(mobileParty, oldLeader);
```

### OnMainPartyStarving
`public override void OnMainPartyStarving()`

**用途 / Purpose:** **用途 / Purpose:** 在 main party starving 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMainPartyStarving();
```

### OnPlayerJoinedTournament
`public override void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**用途 / Purpose:** **用途 / Purpose:** 在 player joined tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPlayerJoinedTournament(town, false);
```

### OnCraftingOrderCompleted
`public override void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**用途 / Purpose:** **用途 / Purpose:** 在 crafting order completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCraftingOrderCompleted(town, craftingOrder, craftedItem, completerHero);
```

### OnItemsRefined
`public override void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** **用途 / Purpose:** 在 items refined 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnItemsRefined(hero, refineFormula);
```

### OnMapEventContinuityNeedsUpdate
`public override void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event continuity needs update 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapEventContinuityNeedsUpdate(faction);
```

### OnHeirSelectionRequested
`public override void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**用途 / Purpose:** **用途 / Purpose:** 在 heir selection requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeirSelectionRequested(dictionary<Hero, 0);
```

### OnHeirSelectionOver
`public override void OnHeirSelectionOver(Hero selectedHeir)`

**用途 / Purpose:** **用途 / Purpose:** 在 heir selection over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeirSelectionOver(selectedHeir);
```

### OnCharacterCreationInitialized
`public override void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 在 character creation initialized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCharacterCreationInitialized(characterCreationManager);
```

### OnShipDestroyed
`public override void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 在 ship destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipDestroyed(owner, ship, detail);
```

### OnPartyLeftArmy
`public override void OnPartyLeftArmy(MobileParty party, Army army)`

**用途 / Purpose:** **用途 / Purpose:** 在 party left army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyLeftArmy(party, army);
```

### OnShipOwnerChanged
`public override void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail changeDetail)`

**用途 / Purpose:** **用途 / Purpose:** 在 ship owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipOwnerChanged(ship, oldOwner, changeDetail);
```

### OnShipRepaired
`public override void OnShipRepaired(Ship ship, Settlement repairPort)`

**用途 / Purpose:** **用途 / Purpose:** 在 ship repaired 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipRepaired(ship, repairPort);
```

### OnFigureheadUnlocked
`public override void OnFigureheadUnlocked(Figurehead figurehead)`

**用途 / Purpose:** **用途 / Purpose:** 在 figurehead unlocked 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnFigureheadUnlocked(figurehead);
```

### OnPartyAddedToMapEvent
`public override void OnPartyAddedToMapEvent(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 在 party added to map event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnPartyAddedToMapEvent(party);
```

### OnIncidentResolved
`public override void OnIncidentResolved(Incident incident)`

**用途 / Purpose:** **用途 / Purpose:** 在 incident resolved 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnIncidentResolved(incident);
```

### OnMobilePartyNavigationStateChanged
`public override void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party navigation state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyNavigationStateChanged(mobileParty);
```

### OnMobilePartyJoinedToSiegeEvent
`public override void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party joined to siege event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyJoinedToSiegeEvent(mobileParty);
```

### OnMobilePartyLeftSiegeEvent
`public override void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party left siege event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyLeftSiegeEvent(mobileParty);
```

### OnBlockadeActivated
`public override void OnBlockadeActivated(SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 blockade activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBlockadeActivated(siegeEvent);
```

### OnBlockadeDeactivated
`public override void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 blockade deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnBlockadeDeactivated(siegeEvent);
```

### OnMapMarkerCreated
`public override void OnMapMarkerCreated(MapMarker mapMarker)`

**用途 / Purpose:** **用途 / Purpose:** 在 map marker created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapMarkerCreated(mapMarker);
```

### OnMapMarkerRemoved
`public override void OnMapMarkerRemoved(MapMarker mapMarker)`

**用途 / Purpose:** **用途 / Purpose:** 在 map marker removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMapMarkerRemoved(mapMarker);
```

### OnMercenaryServiceStarted
`public override void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**用途 / Purpose:** **用途 / Purpose:** 在 mercenary service started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryServiceStarted(mercenaryClan, details);
```

### OnMercenaryServiceEnded
`public override void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**用途 / Purpose:** **用途 / Purpose:** 在 mercenary service ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMercenaryServiceEnded(mercenaryClan, details);
```

### OnAllianceStarted
`public override void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** **用途 / Purpose:** 在 alliance started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAllianceStarted(kingdom1, kingdom2);
```

### OnAllianceEnded
`public override void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** **用途 / Purpose:** 在 alliance ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnAllianceEnded(kingdom1, kingdom2);
```

### OnCallToWarAgreementStarted
`public override void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** **用途 / Purpose:** 在 call to war agreement started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCallToWarAgreementStarted(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### OnCallToWarAgreementEnded
`public override void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** **用途 / Purpose:** 在 call to war agreement ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnCallToWarAgreementEnded(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### CanHeroLeadParty
`public override void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero lead party 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroLeadParty(hero, result);
```

### CanHeroMarry
`public override void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero marry 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroMarry(hero, result);
```

### CanHeroEquipmentBeChanged
`public override void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero equipment be changed 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroEquipmentBeChanged(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public override void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 be governor or have party role 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanBeGovernorOrHavePartyRole(hero, result);
```

### CanHeroDie
`public override void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero die 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroDie(hero, causeOfDeath, result);
```

### CanHeroBecomePrisoner
`public override void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 hero become prisoner 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHeroBecomePrisoner(hero, result);
```

### CanPlayerMeetWithHeroAfterConversation
`public override void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player meet with hero after conversation 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanPlayerMeetWithHeroAfterConversation(hero, result);
```

### CanMoveToSettlement
`public override void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 move to settlement 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanMoveToSettlement(hero, result);
```

### CanHaveCampaignIssues
`public override void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 have campaign issues 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.CanHaveCampaignIssues(hero, result);
```

### IsSettlementBusy
`public override void IsSettlementBusy(Settlement settlement, object asker, ref int priority)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 settlement busy 状态或条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.IsSettlementBusy(settlement, asker, priority);
```

### OnHeroUnregistered
`public override void OnHeroUnregistered(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 在 hero unregistered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnHeroUnregistered(hero);
```

### OnShipCreated
`public override void OnShipCreated(Ship ship, Settlement createdSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 在 ship created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnShipCreated(ship, createdSettlement);
```

### OnConfigChanged
`public override void OnConfigChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 config changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnConfigChanged();
```

### OnMobilePartyRaftStateChanged
`public override void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 在 mobile party raft state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventDispatcher 实例
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.OnMobilePartyRaftStateChanged(mobileParty);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CampaignEventDispatcher campaignEventDispatcher = ...;
campaignEventDispatcher.RemoveListeners(o);
```

## 参见

- [本区域目录](../)