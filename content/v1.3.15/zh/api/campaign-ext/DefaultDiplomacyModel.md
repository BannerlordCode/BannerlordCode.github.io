---
title: "DefaultDiplomacyModel"
description: "DefaultDiplomacyModel 的自动生成类参考。"
---
# DefaultDiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**Base:** `DiplomacyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`

## 概述

`DefaultDiplomacyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDiplomacyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public override int MinimumRelationWithConversationCharacterToJoinKingdom { get; }` |
| `GiftingTownRelationshipBonus` | `public override int GiftingTownRelationshipBonus { get; }` |
| `GiftingCastleRelationshipBonus` | `public override int GiftingCastleRelationshipBonus { get; }` |
| `MaxRelationLimit` | `public override int MaxRelationLimit { get; }` |
| `MinRelationLimit` | `public override int MinRelationLimit { get; }` |
| `MaxNeutralRelationLimit` | `public override int MaxNeutralRelationLimit { get; }` |
| `MinNeutralRelationLimit` | `public override int MinNeutralRelationLimit { get; }` |
| `WarDeclarationScorePenaltyAgainstAllies` | `public override float WarDeclarationScorePenaltyAgainstAllies { get; }` |
| `WarDeclarationScoreBonusAgainstEnemiesOfAllies` | `public override float WarDeclarationScoreBonusAgainstEnemiesOfAllies { get; }` |

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**用途 / Purpose:** 读取并返回当前对象中 「strength threshold for non mutual wars to be ignored to join kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(kingdomToJoin);
```

### GetClanStrength
`public override float GetClanStrength(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「clan strength」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetClanStrength(clan);
```

### GetHeroCommandingStrengthForClan
`public override float GetHeroCommandingStrengthForClan(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「hero commanding strength for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHeroCommandingStrengthForClan(hero);
```

### GetHeroGoverningStrengthForClan
`public override float GetHeroGoverningStrengthForClan(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「hero governing strength for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHeroGoverningStrengthForClan(hero);
```

### GetRelationIncreaseFactor
`public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)`

**用途 / Purpose:** 读取并返回当前对象中 「relation increase factor」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationIncreaseFactor(hero1, hero2, 0);
```

### GetInfluenceAwardForSettlementCapturer
`public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「influence award for settlement capturer」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceAwardForSettlementCapturer(settlement);
```

### GetHourlyInfluenceAwardForBeingArmyMember
`public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly influence award for being army member」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHourlyInfluenceAwardForBeingArmyMember(mobileParty);
```

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly influence award for raiding enemy village」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHourlyInfluenceAwardForRaidingEnemyVillage(mobileParty);
```

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「hourly influence award for besieging enemy fortification」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHourlyInfluenceAwardForBesiegingEnemyFortification(mobileParty);
```

### GetScoreOfClanToJoinKingdom
`public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of clan to join kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfClanToJoinKingdom(clan, kingdom);
```

### GetScoreOfClanToLeaveKingdom
`public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of clan to leave kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfClanToLeaveKingdom(clan, kingdom);
```

### GetScoreOfKingdomToGetClan
`public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to get clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToGetClan(kingdom, clan);
```

### GetScoreOfKingdomToSackClan
`public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to sack clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToSackClan(kingdom, clan);
```

### GetScoreOfMercenaryToJoinKingdom
`public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of mercenary to join kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfMercenaryToJoinKingdom(mercenaryClan, kingdom);
```

### GetScoreOfMercenaryToLeaveKingdom
`public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「score of mercenary to leave kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfMercenaryToLeaveKingdom(mercenaryClan, kingdom);
```

### GetScoreOfKingdomToHireMercenary
`public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to hire mercenary」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToHireMercenary(kingdom, mercenaryClan);
```

### GetScoreOfKingdomToSackMercenary
`public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 读取并返回当前对象中 「score of kingdom to sack mercenary」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToSackMercenary(kingdom, mercenaryClan);
```

### GetScoreOfDeclaringPeaceForClan
`public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 读取并返回当前对象中 「score of declaring peace for clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfDeclaringPeaceForClan(factionDeclaresPeace, factionDeclaredPeace, evaluatingClan, reason, false);
```

### GetScoreOfDeclaringPeace
`public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 读取并返回当前对象中 「score of declaring peace」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### GetWarProgressScore
`public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 「war progress score」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, false);
```

### GetScoreOfDeclaringWar
`public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 读取并返回当前对象中 「score of declaring war」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfDeclaringWar(factionDeclaresWar, factionDeclaredWar, evaluatingClan, reason, false);
```

### GetScoreOfLettingPartyGo
`public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**用途 / Purpose:** 读取并返回当前对象中 「score of letting party go」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfLettingPartyGo(party, partyToLetGo);
```

### GetValueOfHeroForFaction
`public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**用途 / Purpose:** 读取并返回当前对象中 「value of hero for faction」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetValueOfHeroForFaction(examinedHero, targetFaction, false);
```

### GetRelationCostOfExpellingClanFromKingdom
`public override int GetRelationCostOfExpellingClanFromKingdom()`

**用途 / Purpose:** 读取并返回当前对象中 「relation cost of expelling clan from kingdom」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationCostOfExpellingClanFromKingdom();
```

### GetInfluenceCostOfSupportingClan
`public override int GetInfluenceCostOfSupportingClan()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of supporting clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfSupportingClan();
```

### GetInfluenceCostOfExpellingClan
`public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of expelling clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfExpellingClan(proposingClan);
```

### GetInfluenceCostOfProposingPeace
`public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of proposing peace」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfProposingPeace(proposingClan);
```

### GetInfluenceCostOfProposingWar
`public override int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of proposing war」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfProposingWar(proposingClan);
```

### GetInfluenceValueOfSupportingClan
`public override int GetInfluenceValueOfSupportingClan()`

**用途 / Purpose:** 读取并返回当前对象中 「influence value of supporting clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceValueOfSupportingClan();
```

### GetRelationValueOfSupportingClan
`public override int GetRelationValueOfSupportingClan()`

**用途 / Purpose:** 读取并返回当前对象中 「relation value of supporting clan」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationValueOfSupportingClan();
```

### GetInfluenceCostOfAnnexation
`public override int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of annexation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfAnnexation(proposingClan);
```

### GetInfluenceCostOfChangingLeaderOfArmy
`public override int GetInfluenceCostOfChangingLeaderOfArmy()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of changing leader of army」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfChangingLeaderOfArmy();
```

### GetInfluenceCostOfDisbandingArmy
`public override int GetInfluenceCostOfDisbandingArmy()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of disbanding army」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfDisbandingArmy();
```

### GetRelationCostOfDisbandingArmy
`public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**用途 / Purpose:** 读取并返回当前对象中 「relation cost of disbanding army」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationCostOfDisbandingArmy(false);
```

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of policy proposal and disavowal」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfPolicyProposalAndDisavowal(proposerClan);
```

### GetInfluenceCostOfAbandoningArmy
`public override int GetInfluenceCostOfAbandoningArmy()`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of abandoning army」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfAbandoningArmy();
```

### GetBaseRelation
`public override int GetBaseRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 读取并返回当前对象中 「base relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetBaseRelation(hero1, hero2);
```

### GetEffectiveRelation
`public override int GetEffectiveRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 读取并返回当前对象中 「effective relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetEffectiveRelation(hero1, hero2);
```

### GetHeroesForEffectiveRelation
`public override void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**用途 / Purpose:** 读取并返回当前对象中 「heroes for effective relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
defaultDiplomacyModel.GetHeroesForEffectiveRelation(hero1, hero2, effectiveHero1, effectiveHero2);
```

### GetRelationChangeAfterClanLeaderIsDead
`public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**用途 / Purpose:** 读取并返回当前对象中 「relation change after clan leader is dead」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationChangeAfterClanLeaderIsDead(deadLeader, relationHero);
```

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**用途 / Purpose:** 读取并返回当前对象中 「relation change after voting in settlement owner preliminary decision」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(supporter, false);
```

### GetCharmExperienceFromRelationGain
`public override int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**用途 / Purpose:** 读取并返回当前对象中 「charm experience from relation gain」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetCharmExperienceFromRelationGain(hero, 0, detail);
```

### GetNotificationColor
`public override uint GetNotificationColor(ChatNotificationType notificationType)`

**用途 / Purpose:** 读取并返回当前对象中 「notification color」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetNotificationColor(notificationType);
```

### DenarsToInfluence
`public override float DenarsToInfluence()`

**用途 / Purpose:** 处理与 「denars to influence」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.DenarsToInfluence();
```

### GetDecisionMakingThreshold
`public override float GetDecisionMakingThreshold(IFaction consideringFaction)`

**用途 / Purpose:** 读取并返回当前对象中 「decision making threshold」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetDecisionMakingThreshold(consideringFaction);
```

### CanSettlementBeGifted
`public override bool CanSettlementBeGifted(Settlement settlementToGift)`

**用途 / Purpose:** 检查当前对象是否满足 「settlement be gifted」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.CanSettlementBeGifted(settlementToGift);
```

### GetValueOfSettlementsForFaction
`public override float GetValueOfSettlementsForFaction(IFaction faction)`

**用途 / Purpose:** 读取并返回当前对象中 「value of settlements for faction」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetValueOfSettlementsForFaction(faction);
```

### GetBarterGroups
`public override IEnumerable<BarterGroup> GetBarterGroups()`

**用途 / Purpose:** 读取并返回当前对象中 「barter groups」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetBarterGroups();
```

### IsPeaceSuitable
`public override bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 判断当前对象是否处于 「peace suitable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.IsPeaceSuitable(factionDeclaresPeace, factionDeclaredPeace);
```

### GetDailyTributeToPay
`public override int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`

**用途 / Purpose:** 读取并返回当前对象中 「daily tribute to pay」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetDailyTributeToPay(factionToPay, factionToReceive, tributeDurationInDays);
```

### IsClanEligibleToBecomeRuler
`public override bool IsClanEligibleToBecomeRuler(Clan clan)`

**用途 / Purpose:** 判断当前对象是否处于 「clan eligible to become ruler」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.IsClanEligibleToBecomeRuler(clan);
```

### GetShallowDiplomaticStance
`public override DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 读取并返回当前对象中 「shallow diplomatic stance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetShallowDiplomaticStance(faction1, faction2);
```

### GetDefaultDiplomaticStance
`public override DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 读取并返回当前对象中 「default diplomatic stance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetDefaultDiplomaticStance(faction1, faction2);
```

### IsAtConstantWar
`public override bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 判断当前对象是否处于 「at constant war」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultDiplomacyModel 实例
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.IsAtConstantWar(faction1, faction2);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDiplomacyModel>(new MyDefaultDiplomacyModel());
```

## 参见

- [本区域目录](../)