---
title: "DefaultDiplomacyModel"
description: "DefaultDiplomacyModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 DiplomacyModel；公开成员 62 个（方法 54、属性 8、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultDiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultDiplomacyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs。它是一个 public 类，实现/继承 DiplomacyModel，继承链为 DefaultDiplomacyModel → DiplomacyModel → MBGameModel → GameModel。public/protected 成员共 62 个：54 方法、8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultDiplomacyModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultDiplomacyModel → DiplomacyModel → MBGameModel → GameModel。成员构成以方法为主（方法 54/62，属性 8/62），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public override int MinimumRelationWithConversationCharacterToJoinKingdom` | 属性 |
| `GiftingTownRelationshipBonus` | `public override int GiftingTownRelationshipBonus` | 属性 |
| `GiftingCastleRelationshipBonus` | `public override int GiftingCastleRelationshipBonus` | 属性 |
| `MaxRelationLimit` | `public override int MaxRelationLimit` | 属性 |
| `MinRelationLimit` | `public override int MinRelationLimit` | 属性 |
| `MaxNeutralRelationLimit` | `public override int MaxNeutralRelationLimit` | 属性 |
| `MinNeutralRelationLimit` | `public override int MinNeutralRelationLimit` | 属性 |
| `WarDeclarationScorePenaltyAgainstTradePartners` | `public override float WarDeclarationScorePenaltyAgainstTradePartners` | 属性 |
| `GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom` | `public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)` | 方法 |
| `GetClanStrength` | `public override float GetClanStrength(Clan clan)` | 方法 |
| `GetHeroCommandingStrengthForClan` | `public override float GetHeroCommandingStrengthForClan(Hero hero)` | 方法 |
| `GetHeroGoverningStrengthForClan` | `public override float GetHeroGoverningStrengthForClan(Hero hero)` | 方法 |
| `GetRelationIncreaseFactor` | `public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)` | 方法 |
| `GetInfluenceAwardForSettlementCapturer` | `public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)` | 方法 |
| `GetHourlyInfluenceAwardForBeingArmyMember` | `public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)` | 方法 |
| `GetHourlyInfluenceAwardForRaidingEnemyVillage` | `public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)` | 方法 |
| `GetHourlyInfluenceAwardForBesiegingEnemyFortification` | `public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)` | 方法 |
| `GetScoreOfClanToJoinKingdom` | `public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)` | 方法 |
| `GetScoreOfClanToLeaveKingdom` | `public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)` | 方法 |
| `GetScoreOfKingdomToGetClan` | `public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)` | 方法 |
| `GetScoreOfKingdomToSackClan` | `public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)` | 方法 |
| `GetScoreOfMercenaryToJoinKingdom` | `public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)` | 方法 |
| `GetScoreOfMercenaryToLeaveKingdom` | `public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)` | 方法 |
| `GetScoreOfKingdomToHireMercenary` | `public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)` | 方法 |
| `GetScoreOfKingdomToSackMercenary` | `public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)` | 方法 |
| `GetScoreOfDeclaringPeaceForClan` | `public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)` | 方法 |
| `GetScoreOfDeclaringPeace` | `public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | 方法 |
| `GetWarProgressScore` | `public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)` | 方法 |
| `GetScoreOfDeclaringWar` | `public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)` | 方法 |
| `GetScoreOfLettingPartyGo` | `public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)` | 方法 |
| `GetValueOfHeroForFaction` | `public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)` | 方法 |
| `GetRelationCostOfExpellingClanFromKingdom` | `public override int GetRelationCostOfExpellingClanFromKingdom()` | 方法 |
| `GetInfluenceCostOfSupportingClan` | `public override int GetInfluenceCostOfSupportingClan()` | 方法 |
| `GetInfluenceCostOfExpellingClan` | `public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)` | 方法 |
| `GetInfluenceCostOfProposingPeace` | `public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)` | 方法 |
| `GetInfluenceCostOfProposingWar` | `public override int GetInfluenceCostOfProposingWar(Clan proposingClan)` | 方法 |
| `GetInfluenceValueOfSupportingClan` | `public override int GetInfluenceValueOfSupportingClan()` | 方法 |
| `GetRelationValueOfSupportingClan` | `public override int GetRelationValueOfSupportingClan()` | 方法 |
| `GetInfluenceCostOfAnnexation` | `public override int GetInfluenceCostOfAnnexation(Clan proposingClan)` | 方法 |
| `GetInfluenceCostOfChangingLeaderOfArmy` | `public override int GetInfluenceCostOfChangingLeaderOfArmy()` | 方法 |
| `GetInfluenceCostOfDisbandingArmy` | `public override int GetInfluenceCostOfDisbandingArmy()` | 方法 |
| `GetRelationCostOfDisbandingArmy` | `public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty)` | 方法 |
| `GetInfluenceCostOfPolicyProposalAndDisavowal` | `public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)` | 方法 |
| `GetInfluenceCostOfAbandoningArmy` | `public override int GetInfluenceCostOfAbandoningArmy()` | 方法 |
| `GetBaseRelation` | `public override int GetBaseRelation(Hero hero1, Hero hero2)` | 方法 |
| `GetEffectiveRelation` | `public override int GetEffectiveRelation(Hero hero1, Hero hero2)` | 方法 |
| `GetHeroesForEffectiveRelation` | `public override void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)` | 方法 |
| `GetRelationChangeAfterClanLeaderIsDead` | `public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)` | 方法 |
| `GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision` | `public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)` | 方法 |
| `GetCharmExperienceFromRelationGain` | `public override int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)` | 方法 |
| `GetNotificationColor` | `public override uint GetNotificationColor(ChatNotificationType notificationType)` | 方法 |
| `DenarsToInfluence` | `public override float DenarsToInfluence()` | 方法 |
| `GetDecisionMakingThreshold` | `public override float GetDecisionMakingThreshold(IFaction consideringFaction)` | 方法 |
| `CanSettlementBeGifted` | `public override bool CanSettlementBeGifted(Settlement settlementToGift)` | 方法 |
| `GetValueOfSettlementsForFaction` | `public override float GetValueOfSettlementsForFaction(IFaction faction)` | 方法 |
| `IEnumerable` | `public override IEnumerable<BarterGroup>GetBarterGroups()` | 方法 |
| `IsPeaceSuitable` | `public override bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | 方法 |
| `GetDailyTributeToPay` | `public override int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)` | 方法 |
| `IsClanEligibleToBecomeRuler` | `public override bool IsClanEligibleToBecomeRuler(Clan clan)` | 方法 |
| `GetShallowDiplomaticStance` | `public override DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)` | 方法 |
| `GetDefaultDiplomaticStance` | `public override DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)` | 方法 |
| `IsAtConstantWar` | `public override bool IsAtConstantWar(IFaction faction1, IFaction faction2)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DiplomacyModel](../DiplomacyModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
