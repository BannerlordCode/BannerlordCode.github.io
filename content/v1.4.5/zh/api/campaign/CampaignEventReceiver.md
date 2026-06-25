---
title: "CampaignEventReceiver"
description: "CampaignEventReceiver 的自动生成类参考。"
---
# CampaignEventReceiver

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignEventReceiver`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEventReceiver.cs`

## 概述

`CampaignEventReceiver` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RemoveListeners
`public virtual void RemoveListeners(object o)`

**用途 / Purpose:** 从当前容器或状态中移除 listeners。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.RemoveListeners(o);
```

### OnCharacterCreationIsOver
`public virtual void OnCharacterCreationIsOver()`

**用途 / Purpose:** 在 character creation is over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterCreationIsOver();
```

### OnHeroLevelledUp
`public virtual void OnHeroLevelledUp(Hero hero, bool shouldNotify = true)`

**用途 / Purpose:** 在 hero levelled up 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroLevelledUp(hero, false);
```

### OnHomeHideoutChanged
`public virtual void OnHomeHideoutChanged(BanditPartyComponent banditPartyComponent, Hideout oldHomeHideout)`

**用途 / Purpose:** 在 home hideout changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHomeHideoutChanged(banditPartyComponent, oldHomeHideout);
```

### OnHeroGainedSkill
`public virtual void OnHeroGainedSkill(Hero hero, SkillObject skill, int change = 1, bool shouldNotify = true)`

**用途 / Purpose:** 在 hero gained skill 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroGainedSkill(hero, skill, 0, false);
```

### OnHeroCreated
`public virtual void OnHeroCreated(Hero hero, bool isBornNaturally = false)`

**用途 / Purpose:** 在 hero created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroCreated(hero, false);
```

### OnHeroActivated
`public virtual void OnHeroActivated(Hero hero, Hero.CharacterStates previousState)`

**用途 / Purpose:** 在 hero activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroActivated(hero, previousState);
```

### OnHeroWounded
`public virtual void OnHeroWounded(Hero woundedHero)`

**用途 / Purpose:** 在 hero wounded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroWounded(woundedHero);
```

### OnHeroRelationChanged
`public virtual void OnHeroRelationChanged(Hero effectiveHero, Hero effectiveHeroGainedRelationWith, int relationChange, bool showNotification, ChangeRelationAction.ChangeRelationDetail detail, Hero originalHero, Hero originalGainedRelationWith)`

**用途 / Purpose:** 在 hero relation changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroRelationChanged(effectiveHero, effectiveHeroGainedRelationWith, 0, true, detail, originalHero, originalGainedRelationWith);
```

### OnQuestLogAdded
`public virtual void OnQuestLogAdded(QuestBase quest, bool hideInformation)`

**用途 / Purpose:** 在 quest log added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnQuestLogAdded(quest, false);
```

### OnIssueLogAdded
`public virtual void OnIssueLogAdded(IssueBase issue, bool hideInformation)`

**用途 / Purpose:** 在 issue log added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIssueLogAdded(issue, false);
```

### OnClanTierChanged
`public virtual void OnClanTierChanged(Clan clan, bool shouldNotify = true)`

**用途 / Purpose:** 在 clan tier changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanTierChanged(clan, false);
```

### OnClanChangedKingdom
`public virtual void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail actionDetail, bool showNotification = true)`

**用途 / Purpose:** 在 clan changed kingdom 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanChangedKingdom(clan, oldKingdom, newKingdom, actionDetail, false);
```

### OnClanDefected
`public virtual void OnClanDefected(Clan clan, Kingdom oldKingdom, Kingdom newKingdom)`

**用途 / Purpose:** 在 clan defected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanDefected(clan, oldKingdom, newKingdom);
```

### OnClanCreated
`public virtual void OnClanCreated(Clan clan, bool isCompanion)`

**用途 / Purpose:** 在 clan created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanCreated(clan, false);
```

### OnHeroJoinedParty
`public virtual void OnHeroJoinedParty(Hero hero, MobileParty mobileParty)`

**用途 / Purpose:** 在 hero joined party 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroJoinedParty(hero, mobileParty);
```

### OnKingdomDecisionAdded
`public virtual void OnKingdomDecisionAdded(KingdomDecision decision, bool isPlayerInvolved)`

**用途 / Purpose:** 在 kingdom decision added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDecisionAdded(decision, false);
```

### OnKingdomDecisionCancelled
`public virtual void OnKingdomDecisionCancelled(KingdomDecision decision, bool isPlayerInvolved)`

**用途 / Purpose:** 在 kingdom decision cancelled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDecisionCancelled(decision, false);
```

### OnKingdomDecisionConcluded
`public virtual void OnKingdomDecisionConcluded(KingdomDecision decision, DecisionOutcome chosenOutcome, bool isPlayerInvolved)`

**用途 / Purpose:** 在 kingdom decision concluded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDecisionConcluded(decision, chosenOutcome, false);
```

### OnHeroOrPartyTradedGold
`public virtual void OnHeroOrPartyTradedGold((Hero, PartyBase) giver, (Hero, PartyBase) recipient, (int, string) goldAmount, bool showNotification)`

**用途 / Purpose:** 在 hero or party traded gold 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroOrPartyTradedGold((Hero, giver, (Hero, recipient, (int, "example", true);
```

### OnHeroOrPartyGaveItem
`public virtual void OnHeroOrPartyGaveItem((Hero, PartyBase) giver, (Hero, PartyBase) receiver, ItemRosterElement itemRosterElement, bool showNotification)`

**用途 / Purpose:** 在 hero or party gave item 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroOrPartyGaveItem((Hero, giver, (Hero, receiver, itemRosterElement, true);
```

### OnBanditPartyRecruited
`public virtual void OnBanditPartyRecruited(MobileParty banditParty)`

**用途 / Purpose:** 在 bandit party recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBanditPartyRecruited(banditParty);
```

### OnArmyCreated
`public virtual void OnArmyCreated(Army army)`

**用途 / Purpose:** 在 army created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyCreated(army);
```

### OnPartyAttachedAnotherParty
`public virtual void OnPartyAttachedAnotherParty(MobileParty mobileParty)`

**用途 / Purpose:** 在 party attached another party 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyAttachedAnotherParty(mobileParty);
```

### OnNearbyPartyAddedToPlayerMapEvent
`public virtual void OnNearbyPartyAddedToPlayerMapEvent(MobileParty mobileParty)`

**用途 / Purpose:** 在 nearby party added to player map event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNearbyPartyAddedToPlayerMapEvent(mobileParty);
```

### OnArmyDispersed
`public virtual void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)`

**用途 / Purpose:** 在 army dispersed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyDispersed(army, reason, false);
```

### OnArmyGathered
`public virtual void OnArmyGathered(Army army, IMapPoint gatheringPoint)`

**用途 / Purpose:** 在 army gathered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyGathered(army, gatheringPoint);
```

### OnPerkOpened
`public virtual void OnPerkOpened(Hero hero, PerkObject perk)`

**用途 / Purpose:** 在 perk opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPerkOpened(hero, perk);
```

### OnPerkReset
`public virtual void OnPerkReset(Hero hero, PerkObject perk)`

**用途 / Purpose:** 在 perk reset 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPerkReset(hero, perk);
```

### OnPlayerTraitChanged
`public virtual void OnPlayerTraitChanged(TraitObject trait, int previousLevel)`

**用途 / Purpose:** 在 player trait changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerTraitChanged(trait, 0);
```

### OnVillageStateChanged
`public virtual void OnVillageStateChanged(Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raiderParty)`

**用途 / Purpose:** 在 village state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageStateChanged(village, oldState, newState, raiderParty);
```

### OnSettlementEntered
`public virtual void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 在 settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSettlementEntered(party, settlement, hero);
```

### OnAfterSettlementEntered
`public virtual void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 在 after settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAfterSettlementEntered(party, settlement, hero);
```

### OnBeforeSettlementEntered
`public virtual void OnBeforeSettlementEntered(MobileParty party, Settlement settlement, Hero hero)`

**用途 / Purpose:** 在 before settlement entered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeSettlementEntered(party, settlement, hero);
```

### OnMercenaryTroopChangedInTown
`public virtual void OnMercenaryTroopChangedInTown(Town town, CharacterObject oldTroopType, CharacterObject newTroopType)`

**用途 / Purpose:** 在 mercenary troop changed in town 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryTroopChangedInTown(town, oldTroopType, newTroopType);
```

### OnMercenaryNumberChangedInTown
`public virtual void OnMercenaryNumberChangedInTown(Town town, int oldNumber, int newNumber)`

**用途 / Purpose:** 在 mercenary number changed in town 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryNumberChangedInTown(town, 0, 0);
```

### OnAlleyOwnerChanged
`public virtual void OnAlleyOwnerChanged(Alley alley, Hero newOwner, Hero oldOwner)`

**用途 / Purpose:** 在 alley owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAlleyOwnerChanged(alley, newOwner, oldOwner);
```

### OnAlleyClearedByPlayer
`public virtual void OnAlleyClearedByPlayer(Alley alley)`

**用途 / Purpose:** 在 alley cleared by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAlleyClearedByPlayer(alley);
```

### OnAlleyOccupiedByPlayer
`public virtual void OnAlleyOccupiedByPlayer(Alley alley, TroopRoster troops)`

**用途 / Purpose:** 在 alley occupied by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAlleyOccupiedByPlayer(alley, troops);
```

### OnRomanticStateChanged
`public virtual void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum romanceLevel)`

**用途 / Purpose:** 在 romantic state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRomanticStateChanged(hero1, hero2, romanceLevel);
```

### OnBeforeHeroesMarried
`public virtual void OnBeforeHeroesMarried(Hero hero1, Hero hero2, bool showNotification = true)`

**用途 / Purpose:** 在 before heroes married 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeHeroesMarried(hero1, hero2, false);
```

### OnPlayerEliminatedFromTournament
`public virtual void OnPlayerEliminatedFromTournament(int round, Town town)`

**用途 / Purpose:** 在 player eliminated from tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerEliminatedFromTournament(0, town);
```

### OnPlayerStartedTournamentMatch
`public virtual void OnPlayerStartedTournamentMatch(Town town)`

**用途 / Purpose:** 在 player started tournament match 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerStartedTournamentMatch(town);
```

### OnTournamentStarted
`public virtual void OnTournamentStarted(Town town)`

**用途 / Purpose:** 在 tournament started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTournamentStarted(town);
```

### OnTournamentFinished
`public virtual void OnTournamentFinished(CharacterObject winner, MBReadOnlyList<CharacterObject> participants, Town town, ItemObject prize)`

**用途 / Purpose:** 在 tournament finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTournamentFinished(winner, participants, town, prize);
```

### OnTournamentCancelled
`public virtual void OnTournamentCancelled(Town town)`

**用途 / Purpose:** 在 tournament cancelled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTournamentCancelled(town);
```

### OnWarDeclared
`public virtual void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**用途 / Purpose:** 在 war declared 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWarDeclared(faction1, faction2, declareWarDetail);
```

### OnMakePeace
`public virtual void OnMakePeace(IFaction side1Faction, IFaction side2Faction, MakePeaceAction.MakePeaceDetail detail)`

**用途 / Purpose:** 在 make peace 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMakePeace(side1Faction, side2Faction, detail);
```

### OnKingdomCreated
`public virtual void OnKingdomCreated(Kingdom createdKingdom)`

**用途 / Purpose:** 在 kingdom created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomCreated(createdKingdom);
```

### OnHeroOccupationChanged
`public virtual void OnHeroOccupationChanged(Hero hero, Occupation oldOccupation)`

**用途 / Purpose:** 在 hero occupation changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroOccupationChanged(hero, oldOccupation);
```

### OnKingdomDestroyed
`public virtual void OnKingdomDestroyed(Kingdom kingdom)`

**用途 / Purpose:** 在 kingdom destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnKingdomDestroyed(kingdom);
```

### CanKingdomBeDiscontinued
`public virtual void CanKingdomBeDiscontinued(Kingdom kingdom, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 kingdom be discontinued 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanKingdomBeDiscontinued(kingdom, result);
```

### OnBarterAccepted
`public virtual void OnBarterAccepted(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**用途 / Purpose:** 在 barter accepted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBarterAccepted(offererHero, otherHero, barters);
```

### OnBarterCanceled
`public virtual void OnBarterCanceled(Hero offererHero, Hero otherHero, List<Barterable> barters)`

**用途 / Purpose:** 在 barter canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBarterCanceled(offererHero, otherHero, barters);
```

### OnStartBattle
`public virtual void OnStartBattle(PartyBase attackerParty, PartyBase defenderParty, object subject, bool showNotification)`

**用途 / Purpose:** 在 start battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnStartBattle(attackerParty, defenderParty, subject, true);
```

### OnRebellionFinished
`public virtual void OnRebellionFinished(Settlement settlement, Clan oldOwnerClan)`

**用途 / Purpose:** 在 rebellion finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRebellionFinished(settlement, oldOwnerClan);
```

### TownRebelliousStateChanged
`public virtual void TownRebelliousStateChanged(Town town, bool rebelliousState)`

**用途 / Purpose:** 调用 TownRebelliousStateChanged 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TownRebelliousStateChanged(town, false);
```

### OnRebelliousClanDisbandedAtSettlement
`public virtual void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)`

**用途 / Purpose:** 在 rebellious clan disbanded at settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRebelliousClanDisbandedAtSettlement(settlement, clan);
```

### OnItemsLooted
`public virtual void OnItemsLooted(MobileParty mobileParty, ItemRoster items)`

**用途 / Purpose:** 在 items looted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemsLooted(mobileParty, items);
```

### OnMobilePartyDestroyed
`public virtual void OnMobilePartyDestroyed(MobileParty mobileParty, PartyBase destroyerParty)`

**用途 / Purpose:** 在 mobile party destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyDestroyed(mobileParty, destroyerParty);
```

### OnMobilePartyCreated
`public virtual void OnMobilePartyCreated(MobileParty party)`

**用途 / Purpose:** 在 mobile party created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyCreated(party);
```

### OnMapInteractableCreated
`public virtual void OnMapInteractableCreated(IInteractablePoint interactable)`

**用途 / Purpose:** 在 map interactable created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapInteractableCreated(interactable);
```

### OnMapInteractableDestroyed
`public virtual void OnMapInteractableDestroyed(IInteractablePoint interactable)`

**用途 / Purpose:** 在 map interactable destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapInteractableDestroyed(interactable);
```

### OnMobilePartyQuestStatusChanged
`public virtual void OnMobilePartyQuestStatusChanged(MobileParty party, bool isUsedByQuest)`

**用途 / Purpose:** 在 mobile party quest status changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyQuestStatusChanged(party, false);
```

### OnHeroKilled
`public virtual void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 在 hero killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroKilled(victim, killer, detail, false);
```

### OnBeforeHeroKilled
`public virtual void OnBeforeHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 在 before hero killed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeHeroKilled(victim, killer, detail, false);
```

### OnChildEducationCompleted
`public virtual void OnChildEducationCompleted(Hero hero, int age)`

**用途 / Purpose:** 在 child education completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnChildEducationCompleted(hero, 0);
```

### OnHeroComesOfAge
`public virtual void OnHeroComesOfAge(Hero hero)`

**用途 / Purpose:** 在 hero comes of age 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroComesOfAge(hero);
```

### OnHeroReachesTeenAge
`public virtual void OnHeroReachesTeenAge(Hero hero)`

**用途 / Purpose:** 在 hero reaches teen age 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroReachesTeenAge(hero);
```

### OnHeroGrowsOutOfInfancy
`public virtual void OnHeroGrowsOutOfInfancy(Hero hero)`

**用途 / Purpose:** 在 hero grows out of infancy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroGrowsOutOfInfancy(hero);
```

### OnCharacterDefeated
`public virtual void OnCharacterDefeated(Hero winner, Hero loser)`

**用途 / Purpose:** 在 character defeated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterDefeated(winner, loser);
```

### OnHeroPrisonerTaken
`public virtual void OnHeroPrisonerTaken(PartyBase capturer, Hero prisoner)`

**用途 / Purpose:** 在 hero prisoner taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroPrisonerTaken(capturer, prisoner);
```

### OnHeroPrisonerReleased
`public virtual void OnHeroPrisonerReleased(Hero prisoner, PartyBase party, IFaction capturerFaction, EndCaptivityDetail detail, bool showNotification = true)`

**用途 / Purpose:** 在 hero prisoner released 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroPrisonerReleased(prisoner, party, capturerFaction, detail, false);
```

### OnCharacterBecameFugitive
`public virtual void OnCharacterBecameFugitive(Hero hero, bool showNotification)`

**用途 / Purpose:** 在 character became fugitive 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterBecameFugitive(hero, true);
```

### OnPlayerMetHero
`public virtual void OnPlayerMetHero(Hero hero)`

**用途 / Purpose:** 在 player met hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerMetHero(hero);
```

### OnPlayerLearnsAboutHero
`public virtual void OnPlayerLearnsAboutHero(Hero hero)`

**用途 / Purpose:** 在 player learns about hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerLearnsAboutHero(hero);
```

### OnRenownGained
`public virtual void OnRenownGained(Hero hero, int gainedRenown, bool doNotNotify)`

**用途 / Purpose:** 在 renown gained 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRenownGained(hero, 0, false);
```

### OnCrimeRatingChanged
`public virtual void OnCrimeRatingChanged(IFaction kingdom, float deltaCrimeAmount)`

**用途 / Purpose:** 在 crime rating changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCrimeRatingChanged(kingdom, 0);
```

### OnNewCompanionAdded
`public virtual void OnNewCompanionAdded(Hero newCompanion)`

**用途 / Purpose:** 在 new companion added 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewCompanionAdded(newCompanion);
```

### OnAfterMissionStarted
`public virtual void OnAfterMissionStarted(IMission iMission)`

**用途 / Purpose:** 在 after mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAfterMissionStarted(iMission);
```

### OnGameMenuOpened
`public virtual void OnGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** 在 game menu opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameMenuOpened(args);
```

### OnVillageBecomeNormal
`public virtual void OnVillageBecomeNormal(Village village)`

**用途 / Purpose:** 在 village become normal 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageBecomeNormal(village);
```

### OnVillageBeingRaided
`public virtual void OnVillageBeingRaided(Village village)`

**用途 / Purpose:** 在 village being raided 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageBeingRaided(village);
```

### OnVillageLooted
`public virtual void OnVillageLooted(Village village)`

**用途 / Purpose:** 在 village looted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVillageLooted(village);
```

### OnAgentJoinedConversation
`public virtual void OnAgentJoinedConversation(IAgent agent)`

**用途 / Purpose:** 在 agent joined conversation 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAgentJoinedConversation(agent);
```

### OnConversationEnded
`public virtual void OnConversationEnded(IEnumerable<CharacterObject> characters)`

**用途 / Purpose:** 在 conversation ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnConversationEnded(characters);
```

### OnMapEventEnded
`public virtual void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** 在 map event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapEventEnded(mapEvent);
```

### OnMapEventStarted
`public virtual void OnMapEventStarted(MapEvent mapEvent, PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 在 map event started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapEventStarted(mapEvent, attackerParty, defenderParty);
```

### OnRansomOfferedToPlayer
`public virtual void OnRansomOfferedToPlayer(Hero captiveHero)`

**用途 / Purpose:** 在 ransom offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRansomOfferedToPlayer(captiveHero);
```

### OnPrisonersChangeInSettlement
`public virtual void OnPrisonersChangeInSettlement(Settlement settlement, FlattenedTroopRoster prisonerRoster, Hero prisonerHero, bool takenFromDungeon)`

**用途 / Purpose:** 在 prisoners change in settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonersChangeInSettlement(settlement, prisonerRoster, prisonerHero, false);
```

### OnMissionStarted
`public virtual void OnMissionStarted(IMission mission)`

**用途 / Purpose:** 在 mission started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMissionStarted(mission);
```

### OnRansomOfferCancelled
`public virtual void OnRansomOfferCancelled(Hero captiveHero)`

**用途 / Purpose:** 在 ransom offer cancelled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRansomOfferCancelled(captiveHero);
```

### OnPeaceOfferedToPlayer
`public virtual void OnPeaceOfferedToPlayer(IFaction opponentFaction, int tributeAmount, int tributeDuration)`

**用途 / Purpose:** 在 peace offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPeaceOfferedToPlayer(opponentFaction, 0, 0);
```

### OnTradeAgreementSigned
`public virtual void OnTradeAgreementSigned(Kingdom kingdom, Kingdom other)`

**用途 / Purpose:** 在 trade agreement signed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTradeAgreementSigned(kingdom, other);
```

### OnPeaceOfferResolved
`public virtual void OnPeaceOfferResolved(IFaction opponentFaction)`

**用途 / Purpose:** 在 peace offer resolved 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPeaceOfferResolved(opponentFaction);
```

### OnMarriageOfferedToPlayer
`public virtual void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**用途 / Purpose:** 在 marriage offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferCanceled
`public virtual void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**用途 / Purpose:** 在 marriage offer canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMarriageOfferCanceled(suitor, maiden);
```

### OnVassalOrMercenaryServiceOfferedToPlayer
`public virtual void OnVassalOrMercenaryServiceOfferedToPlayer(Kingdom offeredKingdom)`

**用途 / Purpose:** 在 vassal or mercenary service offered to player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVassalOrMercenaryServiceOfferedToPlayer(offeredKingdom);
```

### OnVassalOrMercenaryServiceOfferCanceled
`public virtual void OnVassalOrMercenaryServiceOfferCanceled(Kingdom offeredKingdom)`

**用途 / Purpose:** 在 vassal or mercenary service offer canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnVassalOrMercenaryServiceOfferCanceled(offeredKingdom);
```

### OnPlayerBoardGameOver
`public virtual void OnPlayerBoardGameOver(Hero opposingHero, BoardGameHelper.BoardGameState state)`

**用途 / Purpose:** 在 player board game over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerBoardGameOver(opposingHero, state);
```

### OnCommonAreaStateChanged
`public virtual void OnCommonAreaStateChanged(Alley alley, Alley.AreaState oldState, Alley.AreaState newState)`

**用途 / Purpose:** 在 common area state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCommonAreaStateChanged(alley, oldState, newState);
```

### BeforeMissionOpened
`public virtual void BeforeMissionOpened()`

**用途 / Purpose:** 调用 BeforeMissionOpened 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.BeforeMissionOpened();
```

### OnPartyRemoved
`public virtual void OnPartyRemoved(PartyBase party)`

**用途 / Purpose:** 在 party removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyRemoved(party);
```

### OnPartySizeChanged
`public virtual void OnPartySizeChanged(PartyBase party)`

**用途 / Purpose:** 在 party size changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartySizeChanged(party);
```

### OnSettlementOwnerChanged
`public virtual void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** 在 settlement owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### OnGovernorChanged
`public virtual void OnGovernorChanged(Town fortification, Hero oldGovernor, Hero newGovernor)`

**用途 / Purpose:** 在 governor changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGovernorChanged(fortification, oldGovernor, newGovernor);
```

### OnSettlementLeft
`public virtual void OnSettlementLeft(MobileParty party, Settlement settlement)`

**用途 / Purpose:** 在 settlement left 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSettlementLeft(party, settlement);
```

### Tick
`public virtual void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.Tick(0);
```

### OnSessionStart
`public virtual void OnSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSessionStart(campaignGameStarter);
```

### OnAfterSessionStart
`public virtual void OnAfterSessionStart(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 after session start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAfterSessionStart(campaignGameStarter);
```

### OnNewGameCreated
`public virtual void OnNewGameCreated(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 new game created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewGameCreated(campaignGameStarter);
```

### OnGameLoaded
`public virtual void OnGameLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 game loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameLoaded(campaignGameStarter);
```

### OnGameEarlyLoaded
`public virtual void OnGameEarlyLoaded(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 game early loaded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameEarlyLoaded(campaignGameStarter);
```

### OnPlayerTradeProfit
`public virtual void OnPlayerTradeProfit(int profit)`

**用途 / Purpose:** 在 player trade profit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerTradeProfit(0);
```

### OnRulingClanChanged
`public virtual void OnRulingClanChanged(Kingdom kingdom, Clan oldRulingClan)`

**用途 / Purpose:** 在 ruling clan changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnRulingClanChanged(kingdom, oldRulingClan);
```

### OnPrisonerReleased
`public virtual void OnPrisonerReleased(FlattenedTroopRoster roster)`

**用途 / Purpose:** 在 prisoner released 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerReleased(roster);
```

### OnGameLoadFinished
`public virtual void OnGameLoadFinished()`

**用途 / Purpose:** 在 game load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameLoadFinished();
```

### OnPartyJoinedArmy
`public virtual void OnPartyJoinedArmy(MobileParty mobileParty)`

**用途 / Purpose:** 在 party joined army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyJoinedArmy(mobileParty);
```

### OnPartyRemovedFromArmy
`public virtual void OnPartyRemovedFromArmy(MobileParty mobileParty)`

**用途 / Purpose:** 在 party removed from army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyRemovedFromArmy(mobileParty);
```

### OnArmyOverlaySetDirty
`public virtual void OnArmyOverlaySetDirty()`

**用途 / Purpose:** 在 army overlay set dirty 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnArmyOverlaySetDirty();
```

### OnPlayerDesertedBattle
`public virtual void OnPlayerDesertedBattle(int sacrificedMenCount)`

**用途 / Purpose:** 在 player deserted battle 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerDesertedBattle(0);
```

### OnPlayerArmyLeaderChangedBehavior
`public virtual void OnPlayerArmyLeaderChangedBehavior()`

**用途 / Purpose:** 在 player army leader changed behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerArmyLeaderChangedBehavior();
```

### MissionTick
`public virtual void MissionTick(float dt)`

**用途 / Purpose:** 调用 MissionTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.MissionTick(0);
```

### OnChildConceived
`public virtual void OnChildConceived(Hero mother)`

**用途 / Purpose:** 在 child conceived 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnChildConceived(mother);
```

### OnGivenBirth
`public virtual void OnGivenBirth(Hero mother, List<Hero> aliveChildren, int stillbornCount)`

**用途 / Purpose:** 在 given birth 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGivenBirth(mother, aliveChildren, 0);
```

### OnUnitRecruited
`public virtual void OnUnitRecruited(CharacterObject character, int amount)`

**用途 / Purpose:** 在 unit recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnUnitRecruited(character, 0);
```

### OnPlayerBattleEnd
`public virtual void OnPlayerBattleEnd(MapEvent mapEvent)`

**用途 / Purpose:** 在 player battle end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerBattleEnd(mapEvent);
```

### OnMissionEnded
`public virtual void OnMissionEnded(IMission mission)`

**用途 / Purpose:** 在 mission ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMissionEnded(mission);
```

### TickPartialHourlyAi
`public virtual void TickPartialHourlyAi(MobileParty party)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进partial hourly ai的状态。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TickPartialHourlyAi(party);
```

### QuarterDailyPartyTick
`public virtual void QuarterDailyPartyTick(MobileParty party)`

**用途 / Purpose:** 调用 QuarterDailyPartyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.QuarterDailyPartyTick(party);
```

### AiHourlyTick
`public virtual void AiHourlyTick(MobileParty party, PartyThinkParams partyThinkParams)`

**用途 / Purpose:** 调用 AiHourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.AiHourlyTick(party, partyThinkParams);
```

### HourlyTick
`public virtual void HourlyTick()`

**用途 / Purpose:** 调用 HourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTick();
```

### QuarterHourlyTick
`public virtual void QuarterHourlyTick()`

**用途 / Purpose:** 调用 QuarterHourlyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.QuarterHourlyTick();
```

### HourlyTickParty
`public virtual void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 调用 HourlyTickParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTickParty(mobileParty);
```

### HourlyTickSettlement
`public virtual void HourlyTickSettlement(Settlement settlement)`

**用途 / Purpose:** 调用 HourlyTickSettlement 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTickSettlement(settlement);
```

### HourlyTickClan
`public virtual void HourlyTickClan(Clan clan)`

**用途 / Purpose:** 调用 HourlyTickClan 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.HourlyTickClan(clan);
```

### DailyTick
`public virtual void DailyTick()`

**用途 / Purpose:** 调用 DailyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTick();
```

### DailyTickParty
`public virtual void DailyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 调用 DailyTickParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickParty(mobileParty);
```

### DailyTickTown
`public virtual void DailyTickTown(Town town)`

**用途 / Purpose:** 调用 DailyTickTown 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickTown(town);
```

### DailyTickSettlement
`public virtual void DailyTickSettlement(Settlement settlement)`

**用途 / Purpose:** 调用 DailyTickSettlement 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickSettlement(settlement);
```

### DailyTickClan
`public virtual void DailyTickClan(Clan clan)`

**用途 / Purpose:** 调用 DailyTickClan 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickClan(clan);
```

### OnPlayerBodyPropertiesChanged
`public virtual void OnPlayerBodyPropertiesChanged()`

**用途 / Purpose:** 在 player body properties changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerBodyPropertiesChanged();
```

### WeeklyTick
`public virtual void WeeklyTick()`

**用途 / Purpose:** 调用 WeeklyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.WeeklyTick();
```

### CollectAvailableTutorials
`public virtual void CollectAvailableTutorials(ref List<CampaignTutorial> tutorials)`

**用途 / Purpose:** 调用 CollectAvailableTutorials 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CollectAvailableTutorials(tutorials);
```

### DailyTickHero
`public virtual void DailyTickHero(Hero hero)`

**用途 / Purpose:** 调用 DailyTickHero 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.DailyTickHero(hero);
```

### OnTutorialCompleted
`public virtual void OnTutorialCompleted(string tutorial)`

**用途 / Purpose:** 在 tutorial completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTutorialCompleted("example");
```

### OnBuildingLevelChanged
`public virtual void OnBuildingLevelChanged(Town town, Building building, int levelChange)`

**用途 / Purpose:** 在 building level changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBuildingLevelChanged(town, building, 0);
```

### BeforeGameMenuOpened
`public virtual void BeforeGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** 调用 BeforeGameMenuOpened 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.BeforeGameMenuOpened(args);
```

### AfterGameMenuInitialized
`public virtual void AfterGameMenuInitialized(MenuCallbackArgs args)`

**用途 / Purpose:** 调用 AfterGameMenuInitialized 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.AfterGameMenuInitialized(args);
```

### OnBarterablesRequested
`public virtual void OnBarterablesRequested(BarterData args)`

**用途 / Purpose:** 在 barterables requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBarterablesRequested(args);
```

### OnPartyVisibilityChanged
`public virtual void OnPartyVisibilityChanged(PartyBase party)`

**用途 / Purpose:** 在 party visibility changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyVisibilityChanged(party);
```

### OnCompanionRemoved
`public virtual void OnCompanionRemoved(Hero companion, RemoveCompanionAction.RemoveCompanionDetail detail)`

**用途 / Purpose:** 在 companion removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCompanionRemoved(companion, detail);
```

### TrackDetected
`public virtual void TrackDetected(Track track)`

**用途 / Purpose:** 调用 TrackDetected 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TrackDetected(track);
```

### TrackLost
`public virtual void TrackLost(Track track)`

**用途 / Purpose:** 调用 TrackLost 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.TrackLost(track);
```

### LocationCharactersAreReadyToSpawn
`public virtual void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)`

**用途 / Purpose:** 调用 LocationCharactersAreReadyToSpawn 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.LocationCharactersAreReadyToSpawn(dictionary<string, 0);
```

### LocationCharactersSimulated
`public virtual void LocationCharactersSimulated()`

**用途 / Purpose:** 调用 LocationCharactersSimulated 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.LocationCharactersSimulated();
```

### OnBeforePlayerAgentSpawn
`public virtual void OnBeforePlayerAgentSpawn(ref MatrixFrame spawnFrame)`

**用途 / Purpose:** 在 before player agent spawn 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforePlayerAgentSpawn(spawnFrame);
```

### OnPlayerAgentSpawned
`public virtual void OnPlayerAgentSpawned()`

**用途 / Purpose:** 在 player agent spawned 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerAgentSpawned();
```

### OnPlayerUpgradedTroops
`public virtual void OnPlayerUpgradedTroops(CharacterObject upgradeFromTroop, CharacterObject upgradeToTroop, int number)`

**用途 / Purpose:** 在 player upgraded troops 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerUpgradedTroops(upgradeFromTroop, upgradeToTroop, 0);
```

### OnHeroCombatHit
`public virtual void OnHeroCombatHit(CharacterObject attackerTroop, CharacterObject attackedTroop, PartyBase party, WeaponComponentData usedWeapon, bool isFatal, int xp)`

**用途 / Purpose:** 在 hero combat hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroCombatHit(attackerTroop, attackedTroop, party, usedWeapon, false, 0);
```

### OnCharacterPortraitPopUpOpened
`public virtual void OnCharacterPortraitPopUpOpened(CharacterObject character)`

**用途 / Purpose:** 在 character portrait pop up opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterPortraitPopUpOpened(character);
```

### OnCharacterPortraitPopUpClosed
`public virtual void OnCharacterPortraitPopUpClosed()`

**用途 / Purpose:** 在 character portrait pop up closed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterPortraitPopUpClosed();
```

### OnPlayerStartTalkFromMenu
`public virtual void OnPlayerStartTalkFromMenu(Hero hero)`

**用途 / Purpose:** 在 player start talk from menu 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerStartTalkFromMenu(hero);
```

### OnGameMenuOptionSelected
`public virtual void OnGameMenuOptionSelected(GameMenu gameMenu, GameMenuOption gameMenuOption)`

**用途 / Purpose:** 在 game menu option selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameMenuOptionSelected(gameMenu, gameMenuOption);
```

### OnPlayerStartRecruitment
`public virtual void OnPlayerStartRecruitment(CharacterObject recruitTroopCharacter)`

**用途 / Purpose:** 在 player start recruitment 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerStartRecruitment(recruitTroopCharacter);
```

### OnBeforePlayerCharacterChanged
`public virtual void OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer)`

**用途 / Purpose:** 在 before player character changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforePlayerCharacterChanged(oldPlayer, newPlayer);
```

### OnPlayerCharacterChanged
`public virtual void OnPlayerCharacterChanged(Hero oldPlayer, Hero newPlayer, MobileParty newMainParty, bool isMainPartyChanged)`

**用途 / Purpose:** 在 player character changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerCharacterChanged(oldPlayer, newPlayer, newMainParty, false);
```

### OnClanLeaderChanged
`public virtual void OnClanLeaderChanged(Hero oldLeader, Hero newLeader)`

**用途 / Purpose:** 在 clan leader changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanLeaderChanged(oldLeader, newLeader);
```

### OnSiegeEventStarted
`public virtual void OnSiegeEventStarted(SiegeEvent siegeEvent)`

**用途 / Purpose:** 在 siege event started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeEventStarted(siegeEvent);
```

### OnPlayerSiegeStarted
`public virtual void OnPlayerSiegeStarted()`

**用途 / Purpose:** 在 player siege started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerSiegeStarted();
```

### OnSiegeEventEnded
`public virtual void OnSiegeEventEnded(SiegeEvent siegeEvent)`

**用途 / Purpose:** 在 siege event ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeEventEnded(siegeEvent);
```

### OnSiegeAftermathApplied
`public virtual void OnSiegeAftermathApplied(MobileParty attackerParty, Settlement settlement, SiegeAftermathAction.SiegeAftermath aftermathType, Clan previousSettlementOwner, Dictionary<MobileParty, float> partyContributions)`

**用途 / Purpose:** 在 siege aftermath applied 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeAftermathApplied(attackerParty, settlement, aftermathType, previousSettlementOwner, dictionary<MobileParty, 0);
```

### OnSiegeBombardmentHit
`public virtual void OnSiegeBombardmentHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, SiegeBombardTargets target)`

**用途 / Purpose:** 在 siege bombardment hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeBombardmentHit(besiegerParty, besiegedSettlement, side, weapon, target);
```

### OnSiegeBombardmentWallHit
`public virtual void OnSiegeBombardmentWallHit(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType weapon, bool isWallCracked)`

**用途 / Purpose:** 在 siege bombardment wall hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeBombardmentWallHit(besiegerParty, besiegedSettlement, side, weapon, false);
```

### OnSiegeEngineDestroyed
`public virtual void OnSiegeEngineDestroyed(MobileParty besiegerParty, Settlement besiegedSettlement, BattleSideEnum side, SiegeEngineType destroyedEngine)`

**用途 / Purpose:** 在 siege engine destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSiegeEngineDestroyed(besiegerParty, besiegedSettlement, side, destroyedEngine);
```

### OnTradeRumorIsTaken
`public virtual void OnTradeRumorIsTaken(List<TradeRumor> newRumors, Settlement sourceSettlement = null)`

**用途 / Purpose:** 在 trade rumor is taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTradeRumorIsTaken(newRumors, null);
```

### OnCheckForIssue
`public virtual void OnCheckForIssue(Hero hero)`

**用途 / Purpose:** 在 check for issue 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCheckForIssue(hero);
```

### OnIssueUpdated
`public virtual void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)`

**用途 / Purpose:** 在 issue updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIssueUpdated(issue, details, issueSolver);
```

### OnTroopsDeserted
`public virtual void OnTroopsDeserted(MobileParty mobileParty, TroopRoster desertedTroops)`

**用途 / Purpose:** 在 troops deserted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTroopsDeserted(mobileParty, desertedTroops);
```

### OnTroopRecruited
`public virtual void OnTroopRecruited(Hero recruiterHero, Settlement recruitmentSettlement, Hero recruitmentSource, CharacterObject troop, int amount)`

**用途 / Purpose:** 在 troop recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTroopRecruited(recruiterHero, recruitmentSettlement, recruitmentSource, troop, 0);
```

### OnTroopGivenToSettlement
`public virtual void OnTroopGivenToSettlement(Hero giverHero, Settlement recipientSettlement, TroopRoster roster)`

**用途 / Purpose:** 在 troop given to settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnTroopGivenToSettlement(giverHero, recipientSettlement, roster);
```

### OnItemSold
`public virtual void OnItemSold(PartyBase receiverParty, PartyBase payerParty, ItemRosterElement itemRosterElement, int number, Settlement currentSettlement)`

**用途 / Purpose:** 在 item sold 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemSold(receiverParty, payerParty, itemRosterElement, 0, currentSettlement);
```

### OnCaravanTransactionCompleted
`public virtual void OnCaravanTransactionCompleted(MobileParty caravanParty, Town town, List<(EquipmentElement, int)> itemRosterElements)`

**用途 / Purpose:** 在 caravan transaction completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCaravanTransactionCompleted(caravanParty, town, list<(EquipmentElement, 0);
```

### OnPrisonerSold
`public virtual void OnPrisonerSold(PartyBase sellerParty, PartyBase buyerParty, TroopRoster prisoners)`

**用途 / Purpose:** 在 prisoner sold 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerSold(sellerParty, buyerParty, prisoners);
```

### OnPartyDisbanded
`public virtual void OnPartyDisbanded(MobileParty disbandParty, Settlement relatedSettlement)`

**用途 / Purpose:** 在 party disbanded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyDisbanded(disbandParty, relatedSettlement);
```

### OnPartyDisbandStarted
`public virtual void OnPartyDisbandStarted(MobileParty disbandParty)`

**用途 / Purpose:** 在 party disband started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyDisbandStarted(disbandParty);
```

### OnPartyDisbandCanceled
`public virtual void OnPartyDisbandCanceled(MobileParty disbandParty)`

**用途 / Purpose:** 在 party disband canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyDisbandCanceled(disbandParty);
```

### OnHideoutSpotted
`public virtual void OnHideoutSpotted(PartyBase party, PartyBase hideoutParty)`

**用途 / Purpose:** 在 hideout spotted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHideoutSpotted(party, hideoutParty);
```

### OnHideoutDeactivated
`public virtual void OnHideoutDeactivated(Settlement hideout)`

**用途 / Purpose:** 在 hideout deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHideoutDeactivated(hideout);
```

### OnHideoutBattleCompleted
`public virtual void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)`

**用途 / Purpose:** 在 hideout battle completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHideoutBattleCompleted(winnerSide, hideoutEventComponent, battleEndState);
```

### OnPlayerInventoryExchange
`public virtual void OnPlayerInventoryExchange(List<(ItemRosterElement, int)> purchasedItems, List<(ItemRosterElement, int)> soldItems, bool isTrading)`

**用途 / Purpose:** 在 player inventory exchange 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerInventoryExchange(list<(ItemRosterElement, 0, list<(ItemRosterElement, 0, false);
```

### OnItemsDiscardedByPlayer
`public virtual void OnItemsDiscardedByPlayer(ItemRoster roster)`

**用途 / Purpose:** 在 items discarded by player 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemsDiscardedByPlayer(roster);
```

### OnPersuasionProgressCommitted
`public virtual void OnPersuasionProgressCommitted(Tuple<PersuasionOptionArgs, PersuasionOptionResult> progress)`

**用途 / Purpose:** 在 persuasion progress committed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPersuasionProgressCommitted(tuple<PersuasionOptionArgs, progress);
```

### OnHeroSharedFoodWithAnother
`public virtual void OnHeroSharedFoodWithAnother(Hero supporterHero, Hero supportedHero, float influence)`

**用途 / Purpose:** 在 hero shared food with another 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroSharedFoodWithAnother(supporterHero, supportedHero, 0);
```

### OnQuestCompleted
`public virtual void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`

**用途 / Purpose:** 在 quest completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnQuestCompleted(quest, detail);
```

### OnQuestStarted
`public virtual void OnQuestStarted(QuestBase quest)`

**用途 / Purpose:** 在 quest started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnQuestStarted(quest);
```

### OnItemProduced
`public virtual void OnItemProduced(ItemObject itemObject, Settlement settlement, int count)`

**用途 / Purpose:** 在 item produced 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemProduced(itemObject, settlement, 0);
```

### OnItemConsumed
`public virtual void OnItemConsumed(ItemObject itemObject, Settlement settlement, int count)`

**用途 / Purpose:** 在 item consumed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemConsumed(itemObject, settlement, 0);
```

### OnPartyConsumedFood
`public virtual void OnPartyConsumedFood(MobileParty party)`

**用途 / Purpose:** 在 party consumed food 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyConsumedFood(party);
```

### SiegeCompleted
`public virtual void SiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 调用 SiegeCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.SiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### AfterSiegeCompleted
`public virtual void AfterSiegeCompleted(Settlement siegeSettlement, MobileParty attackerParty, bool isWin, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 调用 AfterSiegeCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.AfterSiegeCompleted(siegeSettlement, attackerParty, false, battleType);
```

### SiegeEngineBuilt
`public virtual void SiegeEngineBuilt(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**用途 / Purpose:** 调用 SiegeEngineBuilt 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.SiegeEngineBuilt(siegeEvent, side, siegeEngine);
```

### RaidCompleted
`public virtual void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**用途 / Purpose:** 调用 RaidCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.RaidCompleted(winnerSide, raidEvent);
```

### ForceSuppliesCompleted
`public virtual void ForceSuppliesCompleted(BattleSideEnum winnerSide, ForceSuppliesEventComponent forceSuppliesEvent)`

**用途 / Purpose:** 调用 ForceSuppliesCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.ForceSuppliesCompleted(winnerSide, forceSuppliesEvent);
```

### ForceVolunteersCompleted
`public virtual void ForceVolunteersCompleted(BattleSideEnum winnerSide, ForceVolunteersEventComponent forceVolunteersEvent)`

**用途 / Purpose:** 调用 ForceVolunteersCompleted 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.ForceVolunteersCompleted(winnerSide, forceVolunteersEvent);
```

### OnBeforeMainCharacterDied
`public virtual void OnBeforeMainCharacterDied(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**用途 / Purpose:** 在 before main character died 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeMainCharacterDied(victim, killer, detail, false);
```

### OnGameOver
`public virtual void OnGameOver()`

**用途 / Purpose:** 在 game over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnGameOver();
```

### OnClanDestroyed
`public virtual void OnClanDestroyed(Clan destroyedClan)`

**用途 / Purpose:** 在 clan destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanDestroyed(destroyedClan);
```

### OnNewIssueCreated
`public virtual void OnNewIssueCreated(IssueBase issue)`

**用途 / Purpose:** 在 new issue created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewIssueCreated(issue);
```

### OnIssueOwnerChanged
`public virtual void OnIssueOwnerChanged(IssueBase issue, Hero oldOwner)`

**用途 / Purpose:** 在 issue owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIssueOwnerChanged(issue, oldOwner);
```

### OnNewItemCrafted
`public virtual void OnNewItemCrafted(ItemObject itemObject)`

**用途 / Purpose:** 在 new item crafted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewItemCrafted(itemObject);
```

### OnWorkshopInitialized
`public virtual void OnWorkshopInitialized(Workshop workshop)`

**用途 / Purpose:** 在 workshop initialized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWorkshopInitialized(workshop);
```

### OnWorkshopOwnerChanged
`public virtual void OnWorkshopOwnerChanged(Workshop workshop, Hero oldOwner)`

**用途 / Purpose:** 在 workshop owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWorkshopOwnerChanged(workshop, oldOwner);
```

### OnWorkshopTypeChanged
`public virtual void OnWorkshopTypeChanged(Workshop workshop)`

**用途 / Purpose:** 在 workshop type changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnWorkshopTypeChanged(workshop);
```

### CraftingPartUnlocked
`public virtual void CraftingPartUnlocked(CraftingPiece craftingPiece)`

**用途 / Purpose:** 调用 CraftingPartUnlocked 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CraftingPartUnlocked(craftingPiece);
```

### OnNewItemCrafted
`public virtual void OnNewItemCrafted(ItemObject itemObject, ItemModifier overriddenItemModifier, bool isCraftingOrderItem)`

**用途 / Purpose:** 在 new item crafted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnNewItemCrafted(itemObject, overriddenItemModifier, false);
```

### OnEquipmentSmeltedByHero
`public virtual void OnEquipmentSmeltedByHero(Hero hero, EquipmentElement equipmentElement)`

**用途 / Purpose:** 在 equipment smelted by hero 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnEquipmentSmeltedByHero(hero, equipmentElement);
```

### OnBeforeSave
`public virtual void OnBeforeSave()`

**用途 / Purpose:** 在 before save 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBeforeSave();
```

### OnMainPartyPrisonerRecruited
`public virtual void OnMainPartyPrisonerRecruited(FlattenedTroopRoster roster)`

**用途 / Purpose:** 在 main party prisoner recruited 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMainPartyPrisonerRecruited(roster);
```

### OnPrisonerTaken
`public virtual void OnPrisonerTaken(FlattenedTroopRoster roster)`

**用途 / Purpose:** 在 prisoner taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerTaken(roster);
```

### OnPrisonerDonatedToSettlement
`public virtual void OnPrisonerDonatedToSettlement(MobileParty donatingParty, FlattenedTroopRoster donatedPrisoners, Settlement donatedSettlement)`

**用途 / Purpose:** 在 prisoner donated to settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPrisonerDonatedToSettlement(donatingParty, donatedPrisoners, donatedSettlement);
```

### CanMoveToSettlement
`public virtual void CanMoveToSettlement(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 move to settlement 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanMoveToSettlement(hero, result);
```

### OnHeroChangedClan
`public virtual void OnHeroChangedClan(Hero hero, Clan oldClan)`

**用途 / Purpose:** 在 hero changed clan 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroChangedClan(hero, oldClan);
```

### CanHeroDie
`public virtual void CanHeroDie(Hero hero, KillCharacterAction.KillCharacterActionDetail causeOfDeath, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero die 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroDie(hero, causeOfDeath, result);
```

### CanPlayerMeetWithHeroAfterConversation
`public virtual void CanPlayerMeetWithHeroAfterConversation(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 player meet with hero after conversation 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanPlayerMeetWithHeroAfterConversation(hero, result);
```

### CanHeroBecomePrisoner
`public virtual void CanHeroBecomePrisoner(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero become prisoner 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroBecomePrisoner(hero, result);
```

### CanBeGovernorOrHavePartyRole
`public virtual void CanBeGovernorOrHavePartyRole(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 be governor or have party role 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanBeGovernorOrHavePartyRole(hero, result);
```

### OnSaveOver
`public virtual void OnSaveOver(bool isSuccessful, string saveName)`

**用途 / Purpose:** 在 save over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSaveOver(false, "example");
```

### CollectMetadataEntries
`public virtual void CollectMetadataEntries(List<KeyValuePair<string, string>> pairs)`

**用途 / Purpose:** 调用 CollectMetadataEntries 对应的操作。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CollectMetadataEntries(list<KeyValuePair<string, "example");
```

### OnSaveStarted
`public virtual void OnSaveStarted()`

**用途 / Purpose:** 在 save started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnSaveStarted();
```

### CanHeroMarry
`public virtual void CanHeroMarry(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero marry 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroMarry(hero, result);
```

### OnHeroTeleportationRequested
`public virtual void OnHeroTeleportationRequested(Hero hero, Settlement targetSettlement, MobileParty targetParty, TeleportHeroAction.TeleportationDetail detail)`

**用途 / Purpose:** 在 hero teleportation requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroTeleportationRequested(hero, targetSettlement, targetParty, detail);
```

### OnPartyLeaderChangeOfferCanceled
`public virtual void OnPartyLeaderChangeOfferCanceled(MobileParty party)`

**用途 / Purpose:** 在 party leader change offer canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyLeaderChangeOfferCanceled(party);
```

### OnPartyLeaderChanged
`public virtual void OnPartyLeaderChanged(MobileParty mobileParty, Hero oldLeader)`

**用途 / Purpose:** 在 party leader changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyLeaderChanged(mobileParty, oldLeader);
```

### OnClanInfluenceChanged
`public virtual void OnClanInfluenceChanged(Clan clan, float change)`

**用途 / Purpose:** 在 clan influence changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanInfluenceChanged(clan, 0);
```

### OnPlayerPartyKnockedOrKilledTroop
`public virtual void OnPlayerPartyKnockedOrKilledTroop(CharacterObject strikedTroop)`

**用途 / Purpose:** 在 player party knocked or killed troop 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerPartyKnockedOrKilledTroop(strikedTroop);
```

### OnPlayerEarnedGoldFromAsset
`public virtual void OnPlayerEarnedGoldFromAsset(DefaultClanFinanceModel.AssetIncomeType incomeType, int incomeAmount)`

**用途 / Purpose:** 在 player earned gold from asset 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerEarnedGoldFromAsset(incomeType, 0);
```

### OnClanEarnedGoldFromTribute
`public virtual void OnClanEarnedGoldFromTribute(Clan receiverClan, IFaction payingFaction)`

**用途 / Purpose:** 在 clan earned gold from tribute 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnClanEarnedGoldFromTribute(receiverClan, payingFaction);
```

### OnCollectLootItems
`public virtual void OnCollectLootItems(PartyBase winnerParty, ItemRoster gainedLoots)`

**用途 / Purpose:** 在 collect loot items 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCollectLootItems(winnerParty, gainedLoots);
```

### OnLootDistributedToParty
`public virtual void OnLootDistributedToParty(PartyBase winnerParty, PartyBase defeatedParty, ItemRoster lootedItems)`

**用途 / Purpose:** 在 loot distributed to party 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnLootDistributedToParty(winnerParty, defeatedParty, lootedItems);
```

### OnPlayerJoinedTournament
`public virtual void OnPlayerJoinedTournament(Town town, bool isParticipant)`

**用途 / Purpose:** 在 player joined tournament 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPlayerJoinedTournament(town, false);
```

### OnConfigChanged
`public virtual void OnConfigChanged()`

**用途 / Purpose:** 在 config changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnConfigChanged();
```

### OnMobilePartyRaftStateChanged
`public virtual void OnMobilePartyRaftStateChanged(MobileParty mobileParty)`

**用途 / Purpose:** 在 mobile party raft state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyRaftStateChanged(mobileParty);
```

### OnCharacterCreationInitialized
`public virtual void OnCharacterCreationInitialized(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 在 character creation initialized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCharacterCreationInitialized(characterCreationManager);
```

### OnShipDestroyed
`public virtual void OnShipDestroyed(PartyBase owner, Ship ship, DestroyShipAction.ShipDestroyDetail detail)`

**用途 / Purpose:** 在 ship destroyed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipDestroyed(owner, ship, detail);
```

### OnShipOwnerChanged
`public virtual void OnShipOwnerChanged(Ship ship, PartyBase oldOwner, ChangeShipOwnerAction.ShipOwnerChangeDetail shipOwnerChangeDetail)`

**用途 / Purpose:** 在 ship owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipOwnerChanged(ship, oldOwner, shipOwnerChangeDetail);
```

### OnFigureheadUnlocked
`public virtual void OnFigureheadUnlocked(Figurehead figurehead)`

**用途 / Purpose:** 在 figurehead unlocked 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnFigureheadUnlocked(figurehead);
```

### OnShipRepaired
`public virtual void OnShipRepaired(Ship ship, Settlement repairPort)`

**用途 / Purpose:** 在 ship repaired 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipRepaired(ship, repairPort);
```

### OnPartyLeftArmy
`public virtual void OnPartyLeftArmy(MobileParty party, Army army)`

**用途 / Purpose:** 在 party left army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyLeftArmy(party, army);
```

### OnIncidentResolved
`public virtual void OnIncidentResolved(Incident incident)`

**用途 / Purpose:** 在 incident resolved 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnIncidentResolved(incident);
```

### OnPartyAddedToMapEvent
`public virtual void OnPartyAddedToMapEvent(PartyBase partyBase)`

**用途 / Purpose:** 在 party added to map event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnPartyAddedToMapEvent(partyBase);
```

### OnMobilePartyNavigationStateChanged
`public virtual void OnMobilePartyNavigationStateChanged(MobileParty mobileParty)`

**用途 / Purpose:** 在 mobile party navigation state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyNavigationStateChanged(mobileParty);
```

### OnMobilePartyJoinedToSiegeEvent
`public virtual void OnMobilePartyJoinedToSiegeEvent(MobileParty mobileParty)`

**用途 / Purpose:** 在 mobile party joined to siege event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyJoinedToSiegeEvent(mobileParty);
```

### OnMobilePartyLeftSiegeEvent
`public virtual void OnMobilePartyLeftSiegeEvent(MobileParty mobileParty)`

**用途 / Purpose:** 在 mobile party left siege event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMobilePartyLeftSiegeEvent(mobileParty);
```

### OnBlockadeActivated
`public virtual void OnBlockadeActivated(SiegeEvent siegeEvent)`

**用途 / Purpose:** 在 blockade activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBlockadeActivated(siegeEvent);
```

### OnBlockadeDeactivated
`public virtual void OnBlockadeDeactivated(SiegeEvent siegeEvent)`

**用途 / Purpose:** 在 blockade deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnBlockadeDeactivated(siegeEvent);
```

### OnShipCreated
`public virtual void OnShipCreated(Ship ship, Settlement createdSettlement)`

**用途 / Purpose:** 在 ship created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnShipCreated(ship, createdSettlement);
```

### OnMercenaryServiceStarted
`public virtual void OnMercenaryServiceStarted(Clan mercenaryClan, StartMercenaryServiceAction.StartMercenaryServiceActionDetails details)`

**用途 / Purpose:** 在 mercenary service started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryServiceStarted(mercenaryClan, details);
```

### OnMercenaryServiceEnded
`public virtual void OnMercenaryServiceEnded(Clan mercenaryClan, EndMercenaryServiceAction.EndMercenaryServiceActionDetails details)`

**用途 / Purpose:** 在 mercenary service ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMercenaryServiceEnded(mercenaryClan, details);
```

### OnMapMarkerCreated
`public virtual void OnMapMarkerCreated(MapMarker mapMarker)`

**用途 / Purpose:** 在 map marker created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapMarkerCreated(mapMarker);
```

### OnMapMarkerRemoved
`public virtual void OnMapMarkerRemoved(MapMarker mapMarker)`

**用途 / Purpose:** 在 map marker removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapMarkerRemoved(mapMarker);
```

### OnAllianceStarted
`public virtual void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** 在 alliance started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAllianceStarted(kingdom1, kingdom2);
```

### OnAllianceEnded
`public virtual void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)`

**用途 / Purpose:** 在 alliance ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnAllianceEnded(kingdom1, kingdom2);
```

### OnCallToWarAgreementStarted
`public virtual void OnCallToWarAgreementStarted(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** 在 call to war agreement started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCallToWarAgreementStarted(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### OnCallToWarAgreementEnded
`public virtual void OnCallToWarAgreementEnded(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** 在 call to war agreement ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCallToWarAgreementEnded(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### CanHeroLeadParty
`public virtual void CanHeroLeadParty(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero lead party 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroLeadParty(hero, result);
```

### OnCraftingOrderCompleted
`public virtual void OnCraftingOrderCompleted(Town town, CraftingOrder craftingOrder, ItemObject craftedItem, Hero completerHero)`

**用途 / Purpose:** 在 crafting order completed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnCraftingOrderCompleted(town, craftingOrder, craftedItem, completerHero);
```

### OnItemsRefined
`public virtual void OnItemsRefined(Hero hero, Crafting.RefiningFormula refineFormula)`

**用途 / Purpose:** 在 items refined 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnItemsRefined(hero, refineFormula);
```

### OnMapEventContinuityNeedsUpdate
`public virtual void OnMapEventContinuityNeedsUpdate(IFaction faction)`

**用途 / Purpose:** 在 map event continuity needs update 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMapEventContinuityNeedsUpdate(faction);
```

### OnHeirSelectionOver
`public virtual void OnHeirSelectionOver(Hero selectedHeir)`

**用途 / Purpose:** 在 heir selection over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeirSelectionOver(selectedHeir);
```

### OnHeirSelectionRequested
`public virtual void OnHeirSelectionRequested(Dictionary<Hero, int> heirApparents)`

**用途 / Purpose:** 在 heir selection requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeirSelectionRequested(dictionary<Hero, 0);
```

### OnMainPartyStarving
`public virtual void OnMainPartyStarving()`

**用途 / Purpose:** 在 main party starving 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnMainPartyStarving();
```

### OnHeroGetsBusy
`public virtual void OnHeroGetsBusy(Hero hero, HeroGetsBusyReasons heroGetsBusyReason)`

**用途 / Purpose:** 在 hero gets busy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroGetsBusy(hero, heroGetsBusyReason);
```

### CanHeroEquipmentBeChanged
`public virtual void CanHeroEquipmentBeChanged(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 hero equipment be changed 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHeroEquipmentBeChanged(hero, result);
```

### CanHaveCampaignIssues
`public virtual void CanHaveCampaignIssues(Hero hero, ref bool result)`

**用途 / Purpose:** 检查当前对象是否满足 have campaign issues 的前置条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.CanHaveCampaignIssues(hero, result);
```

### IsSettlementBusy
`public virtual void IsSettlementBusy(Settlement settlement, object asker, ref int flags)`

**用途 / Purpose:** 判断当前对象是否处于 settlement busy 状态或条件。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.IsSettlementBusy(settlement, asker, flags);
```

### OnHeroUnregistered
`public virtual void OnHeroUnregistered(Hero hero)`

**用途 / Purpose:** 在 hero unregistered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEventReceiver 实例
CampaignEventReceiver campaignEventReceiver = ...;
campaignEventReceiver.OnHeroUnregistered(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CampaignEventReceiver instance = ...;
```

## 参见

- [本区域目录](../)