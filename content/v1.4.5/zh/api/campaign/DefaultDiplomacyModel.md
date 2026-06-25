---
title: "DefaultDiplomacyModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDiplomacyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**Base:** `DiplomacyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDiplomacyModel.cs`

## 概述

`DefaultDiplomacyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDiplomacyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**用途 / Purpose:** 获取 `strength threshold for non mutual wars to be ignored to join kingdom` 的当前值。

### GetClanStrength
`public override float GetClanStrength(Clan clan)`

**用途 / Purpose:** 获取 `clan strength` 的当前值。

### GetHeroCommandingStrengthForClan
`public override float GetHeroCommandingStrengthForClan(Hero hero)`

**用途 / Purpose:** 获取 `hero commanding strength for clan` 的当前值。

### GetHeroGoverningStrengthForClan
`public override float GetHeroGoverningStrengthForClan(Hero hero)`

**用途 / Purpose:** 获取 `hero governing strength for clan` 的当前值。

### GetRelationIncreaseFactor
`public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)`

**用途 / Purpose:** 获取 `relation increase factor` 的当前值。

### GetInfluenceAwardForSettlementCapturer
`public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**用途 / Purpose:** 获取 `influence award for settlement capturer` 的当前值。

### GetHourlyInfluenceAwardForBeingArmyMember
`public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `hourly influence award for being army member` 的当前值。

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `hourly influence award for raiding enemy village` 的当前值。

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `hourly influence award for besieging enemy fortification` 的当前值。

### GetScoreOfClanToJoinKingdom
`public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of clan to join kingdom` 的当前值。

### GetScoreOfClanToLeaveKingdom
`public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of clan to leave kingdom` 的当前值。

### GetScoreOfKingdomToGetClan
`public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 获取 `score of kingdom to get clan` 的当前值。

### GetScoreOfKingdomToSackClan
`public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 获取 `score of kingdom to sack clan` 的当前值。

### GetScoreOfMercenaryToJoinKingdom
`public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of mercenary to join kingdom` 的当前值。

### GetScoreOfMercenaryToLeaveKingdom
`public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of mercenary to leave kingdom` 的当前值。

### GetScoreOfKingdomToHireMercenary
`public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 获取 `score of kingdom to hire mercenary` 的当前值。

### GetScoreOfKingdomToSackMercenary
`public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 获取 `score of kingdom to sack mercenary` 的当前值。

### GetScoreOfDeclaringPeaceForClan
`public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 获取 `score of declaring peace for clan` 的当前值。

### GetScoreOfDeclaringPeace
`public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 获取 `score of declaring peace` 的当前值。

### GetWarProgressScore
`public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `war progress score` 的当前值。

### GetScoreOfDeclaringWar
`public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 获取 `score of declaring war` 的当前值。

### GetScoreOfLettingPartyGo
`public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**用途 / Purpose:** 获取 `score of letting party go` 的当前值。

### GetValueOfHeroForFaction
`public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**用途 / Purpose:** 获取 `value of hero for faction` 的当前值。

### GetRelationCostOfExpellingClanFromKingdom
`public override int GetRelationCostOfExpellingClanFromKingdom()`

**用途 / Purpose:** 获取 `relation cost of expelling clan from kingdom` 的当前值。

### GetInfluenceCostOfSupportingClan
`public override int GetInfluenceCostOfSupportingClan()`

**用途 / Purpose:** 获取 `influence cost of supporting clan` 的当前值。

### GetInfluenceCostOfExpellingClan
`public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of expelling clan` 的当前值。

### GetInfluenceCostOfProposingPeace
`public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of proposing peace` 的当前值。

### GetInfluenceCostOfProposingWar
`public override int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of proposing war` 的当前值。

### GetInfluenceValueOfSupportingClan
`public override int GetInfluenceValueOfSupportingClan()`

**用途 / Purpose:** 获取 `influence value of supporting clan` 的当前值。

### GetRelationValueOfSupportingClan
`public override int GetRelationValueOfSupportingClan()`

**用途 / Purpose:** 获取 `relation value of supporting clan` 的当前值。

### GetInfluenceCostOfAnnexation
`public override int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of annexation` 的当前值。

### GetInfluenceCostOfChangingLeaderOfArmy
`public override int GetInfluenceCostOfChangingLeaderOfArmy()`

**用途 / Purpose:** 获取 `influence cost of changing leader of army` 的当前值。

### GetInfluenceCostOfDisbandingArmy
`public override int GetInfluenceCostOfDisbandingArmy()`

**用途 / Purpose:** 获取 `influence cost of disbanding army` 的当前值。

### GetRelationCostOfDisbandingArmy
`public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**用途 / Purpose:** 获取 `relation cost of disbanding army` 的当前值。

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)`

**用途 / Purpose:** 获取 `influence cost of policy proposal and disavowal` 的当前值。

### GetInfluenceCostOfAbandoningArmy
`public override int GetInfluenceCostOfAbandoningArmy()`

**用途 / Purpose:** 获取 `influence cost of abandoning army` 的当前值。

### GetBaseRelation
`public override int GetBaseRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 获取 `base relation` 的当前值。

### GetEffectiveRelation
`public override int GetEffectiveRelation(Hero hero1, Hero hero2)`

**用途 / Purpose:** 获取 `effective relation` 的当前值。

### GetHeroesForEffectiveRelation
`public override void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**用途 / Purpose:** 获取 `heroes for effective relation` 的当前值。

### GetRelationChangeAfterClanLeaderIsDead
`public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**用途 / Purpose:** 获取 `relation change after clan leader is dead` 的当前值。

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**用途 / Purpose:** 获取 `relation change after voting in settlement owner preliminary decision` 的当前值。

### GetCharmExperienceFromRelationGain
`public override int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**用途 / Purpose:** 获取 `charm experience from relation gain` 的当前值。

### GetNotificationColor
`public override uint GetNotificationColor(ChatNotificationType notificationType)`

**用途 / Purpose:** 获取 `notification color` 的当前值。

### DenarsToInfluence
`public override float DenarsToInfluence()`

**用途 / Purpose:** 处理 `denars to influence` 相关逻辑。

### GetDecisionMakingThreshold
`public override float GetDecisionMakingThreshold(IFaction consideringFaction)`

**用途 / Purpose:** 获取 `decision making threshold` 的当前值。

### CanSettlementBeGifted
`public override bool CanSettlementBeGifted(Settlement settlementToGift)`

**用途 / Purpose:** 判断当前对象是否可以执行 `settlement be gifted`。

### GetValueOfSettlementsForFaction
`public override float GetValueOfSettlementsForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `value of settlements for faction` 的当前值。

### GetBarterGroups
`public override IEnumerable<BarterGroup> GetBarterGroups()`

**用途 / Purpose:** 获取 `barter groups` 的当前值。

### IsPeaceSuitable
`public override bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 处理 `is peace suitable` 相关逻辑。

### GetDailyTributeToPay
`public override int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`

**用途 / Purpose:** 获取 `daily tribute to pay` 的当前值。

### IsClanEligibleToBecomeRuler
`public override bool IsClanEligibleToBecomeRuler(Clan clan)`

**用途 / Purpose:** 处理 `is clan eligible to become ruler` 相关逻辑。

### GetShallowDiplomaticStance
`public override DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 获取 `shallow diplomatic stance` 的当前值。

### GetDefaultDiplomaticStance
`public override DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 获取 `default diplomatic stance` 的当前值。

### IsAtConstantWar
`public override bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `is at constant war` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDiplomacyModel>(new MyDefaultDiplomacyModel());
```

## 参见

- [完整类目录](../catalog)