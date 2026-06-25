---
title: "DiplomacyModel"
description: "DiplomacyModel 的自动生成类参考。"
---
# DiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`
**Base:** `MBGameModel<DiplomacyModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DiplomacyModel.cs`

## 概述

`DiplomacyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DiplomacyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxRelationLimit` | `public abstract int MaxRelationLimit { get; }` |
| `MinRelationLimit` | `public abstract int MinRelationLimit { get; }` |
| `MaxNeutralRelationLimit` | `public abstract int MaxNeutralRelationLimit { get; }` |
| `MinNeutralRelationLimit` | `public abstract int MinNeutralRelationLimit { get; }` |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public abstract int MinimumRelationWithConversationCharacterToJoinKingdom { get; }` |
| `GiftingTownRelationshipBonus` | `public abstract int GiftingTownRelationshipBonus { get; }` |
| `GiftingCastleRelationshipBonus` | `public abstract int GiftingCastleRelationshipBonus { get; }` |
| `WarDeclarationScorePenaltyAgainstTradePartners` | `public abstract float WarDeclarationScorePenaltyAgainstTradePartners { get; }` |

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**用途 / Purpose:** 读取并返回当前对象中 「strength threshold for non mutual wars to be ignored to join kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(kingdomToJoin);
```

### GetRelationIncreaseFactor
`public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)`

**用途 / Purpose:** 读取并返回当前对象中 「relation increase factor」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationIncreaseFactor(hero1, hero2, 0);
```

### GetInfluenceAwardForSettlementCapturer
`public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「influence award for settlement capturer」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceAwardForSettlementCapturer(settlement);
```

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly influence award for raiding enemy village」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHourlyInfluenceAwardForRaidingEnemyVillage(mobileParty);
```

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly influence award for besieging enemy fortification」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHourlyInfluenceAwardForBesiegingEnemyFortification(mobileParty);
```

### GetHourlyInfluenceAwardForBeingArmyMember
`public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly influence award for being army member」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHourlyInfluenceAwardForBeingArmyMember(mobileParty);
```

### GetScoreOfClanToJoinKingdom
`public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of clan to join kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfClanToJoinKingdom(clan, kingdom);
```

### GetScoreOfClanToLeaveKingdom
`public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of clan to leave kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfClanToLeaveKingdom(clan, kingdom);
```

### GetScoreOfKingdomToGetClan
`public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to get clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToGetClan(kingdom, clan);
```

### GetScoreOfKingdomToSackClan
`public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to sack clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToSackClan(kingdom, clan);
```

### GetScoreOfMercenaryToJoinKingdom
`public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of mercenary to join kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfMercenaryToJoinKingdom(clan, kingdom);
```

### GetScoreOfMercenaryToLeaveKingdom
`public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of mercenary to leave kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfMercenaryToLeaveKingdom(clan, kingdom);
```

### GetScoreOfKingdomToHireMercenary
`public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to hire mercenary」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToHireMercenary(kingdom, mercenaryClan);
```

### GetScoreOfKingdomToSackMercenary
`public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to sack mercenary」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToSackMercenary(kingdom, mercenaryClan);
```

### GetScoreOfDeclaringPeaceForClan
`public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 读取并返回当前对象中 「score of declaring peace for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfDeclaringPeaceForClan(factionDeclaresPeace, factionDeclaredPeace, evaluatingClan, reason, false);
```

### GetScoreOfDeclaringPeace
`public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 读取并返回当前对象中 「score of declaring peace」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### IsPeaceSuitable
`public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 判断当前对象是否处于 「peace suitable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.IsPeaceSuitable(factionDeclaresPeace, factionDeclaredPeace);
```

### GetScoreOfDeclaringWar
`public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 读取并返回当前对象中 「score of declaring war」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfDeclaringWar(factionDeclaresWar, factionDeclaredWar, evaluatingClan, reason, false);
```

### GetWarProgressScore
`public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 「war progress score」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, false);
```

### GetScoreOfLettingPartyGo
`public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**用途 / Purpose:** 读取并返回当前对象中 「score of letting party go」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfLettingPartyGo(party, partyToLetGo);
```

### GetValueOfHeroForFaction
`public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**用途 / Purpose:** 读取并返回当前对象中 「value of hero for faction」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetValueOfHeroForFaction(examinedHero, targetFaction, false);
```

### GetRelationCostOfExpellingClanFromKingdom
`public abstract int GetRelationCostOfExpellingClanFromKingdom()`

**用途 / Purpose:** 读取并返回当前对象中 「relation cost of expelling clan from kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationCostOfExpellingClanFromKingdom();
```

### GetInfluenceCostOfSupportingClan
`public abstract int GetInfluenceCostOfSupportingClan()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of supporting clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfSupportingClan();
```

### GetInfluenceCostOfExpellingClan
`public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of expelling clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfExpellingClan(proposingClan);
```

### GetInfluenceCostOfProposingPeace
`public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of proposing peace」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfProposingPeace(proposingClan);
```

### GetInfluenceCostOfProposingWar
`public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of proposing war」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfProposingWar(proposingClan);
```

### GetInfluenceValueOfSupportingClan
`public abstract int GetInfluenceValueOfSupportingClan()`

**用途 / Purpose:** 读取并返回当前对象中 「influence value of supporting clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceValueOfSupportingClan();
```

### GetRelationValueOfSupportingClan
`public abstract int GetRelationValueOfSupportingClan()`

**用途 / Purpose:** 读取并返回当前对象中 「relation value of supporting clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationValueOfSupportingClan();
```

### GetInfluenceCostOfAnnexation
`public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of annexation」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfAnnexation(proposingClan);
```

### GetInfluenceCostOfChangingLeaderOfArmy
`public abstract int GetInfluenceCostOfChangingLeaderOfArmy()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of changing leader of army」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfChangingLeaderOfArmy();
```

### GetInfluenceCostOfDisbandingArmy
`public abstract int GetInfluenceCostOfDisbandingArmy()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of disbanding army」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfDisbandingArmy();
```

### GetRelationCostOfDisbandingArmy
`public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**用途 / Purpose:** 读取并返回当前对象中 「relation cost of disbanding army」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationCostOfDisbandingArmy(false);
```

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of policy proposal and disavowal」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfPolicyProposalAndDisavowal(proposingClan);
```

### GetInfluenceCostOfAbandoningArmy
`public abstract int GetInfluenceCostOfAbandoningArmy()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of abandoning army」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfAbandoningArmy();
```

### GetEffectiveRelation
`public abstract int GetEffectiveRelation(Hero hero, Hero hero1)`

**用途 / Purpose:** 读取并返回当前对象中 「effective relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetEffectiveRelation(hero, hero1);
```

### GetBaseRelation
`public abstract int GetBaseRelation(Hero hero, Hero hero1)`

**用途 / Purpose:** 读取并返回当前对象中 「base relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetBaseRelation(hero, hero1);
```

### GetHeroesForEffectiveRelation
`public abstract void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**用途 / Purpose:** 读取并返回当前对象中 「heroes for effective relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
diplomacyModel.GetHeroesForEffectiveRelation(hero1, hero2, effectiveHero1, effectiveHero2);
```

### GetRelationChangeAfterClanLeaderIsDead
`public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**用途 / Purpose:** 读取并返回当前对象中 「relation change after clan leader is dead」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationChangeAfterClanLeaderIsDead(deadLeader, relationHero);
```

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**用途 / Purpose:** 读取并返回当前对象中 「relation change after voting in settlement owner preliminary decision」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(supporter, false);
```

### GetClanStrength
`public abstract float GetClanStrength(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「clan strength」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetClanStrength(clan);
```

### GetHeroCommandingStrengthForClan
`public abstract float GetHeroCommandingStrengthForClan(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「hero commanding strength for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHeroCommandingStrengthForClan(hero);
```

### GetHeroGoverningStrengthForClan
`public abstract float GetHeroGoverningStrengthForClan(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「hero governing strength for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHeroGoverningStrengthForClan(hero);
```

### GetNotificationColor
`public abstract uint GetNotificationColor(ChatNotificationType notificationType)`

**用途 / Purpose:** 读取并返回当前对象中 「notification color」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetNotificationColor(notificationType);
```

### GetDailyTributeToPay
`public abstract int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`

**用途 / Purpose:** 读取并返回当前对象中 「daily tribute to pay」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetDailyTributeToPay(factionToPay, factionToReceive, tributeDurationInDays);
```

### GetDecisionMakingThreshold
`public abstract float GetDecisionMakingThreshold(IFaction consideringFaction)`

**用途 / Purpose:** 读取并返回当前对象中 「decision making threshold」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetDecisionMakingThreshold(consideringFaction);
```

### GetValueOfSettlementsForFaction
`public abstract float GetValueOfSettlementsForFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「value of settlements for faction」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetValueOfSettlementsForFaction(faction);
```

### CanSettlementBeGifted
`public abstract bool CanSettlementBeGifted(Settlement settlement)`

**用途 / Purpose:** 检查当前对象是否满足 「settlement be gifted」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.CanSettlementBeGifted(settlement);
```

### IsClanEligibleToBecomeRuler
`public abstract bool IsClanEligibleToBecomeRuler(Clan clan)`

**用途 / Purpose:** 判断当前对象是否处于 「clan eligible to become ruler」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.IsClanEligibleToBecomeRuler(clan);
```

### GetBarterGroups
`public abstract IEnumerable<BarterGroup> GetBarterGroups()`

**用途 / Purpose:** 读取并返回当前对象中 「barter groups」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetBarterGroups();
```

### GetCharmExperienceFromRelationGain
`public abstract int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**用途 / Purpose:** 读取并返回当前对象中 「charm experience from relation gain」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetCharmExperienceFromRelationGain(hero, 0, detail);
```

### DenarsToInfluence
`public abstract float DenarsToInfluence()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.DenarsToInfluence();
```

### GetShallowDiplomaticStance
`public abstract DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 读取并返回当前对象中 「shallow diplomatic stance」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetShallowDiplomaticStance(faction1, faction2);
```

### GetDefaultDiplomaticStance
`public abstract DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 读取并返回当前对象中 「default diplomatic stance」 的结果。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetDefaultDiplomaticStance(faction1, faction2);
```

### IsAtConstantWar
`public abstract bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 判断当前对象是否处于 「at constant war」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DiplomacyModel 实例
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.IsAtConstantWar(faction1, faction2);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DiplomacyModel instance = ...;
```

## 参见

- [本区域目录](../)