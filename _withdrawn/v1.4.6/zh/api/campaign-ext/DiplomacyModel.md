---
title: "DiplomacyModel"
description: "DiplomacyModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<DiplomacyModel>；公开成员 64 个（方法 54、属性 9、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

DiplomacyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<DiplomacyModel>，继承链为 DiplomacyModel → MBGameModel → GameModel。public/protected 成员共 64 个：54 方法、9 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DiplomacyModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 DiplomacyModel → MBGameModel → GameModel。成员构成以方法为主（方法 54/64，属性 9/64），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxRelationLimit` | `public abstract int MaxRelationLimit` | 属性 |
| `MinRelationLimit` | `public abstract int MinRelationLimit` | 属性 |
| `MaxNeutralRelationLimit` | `public abstract int MaxNeutralRelationLimit` | 属性 |
| `MinNeutralRelationLimit` | `public abstract int MinNeutralRelationLimit` | 属性 |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public abstract int MinimumRelationWithConversationCharacterToJoinKingdom` | 属性 |
| `GiftingTownRelationshipBonus` | `public abstract int GiftingTownRelationshipBonus` | 属性 |
| `GiftingCastleRelationshipBonus` | `public abstract int GiftingCastleRelationshipBonus` | 属性 |
| `WarDeclarationScorePenaltyAgainstTradePartners` | `public abstract float WarDeclarationScorePenaltyAgainstTradePartners` | 属性 |
| `GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom` | `public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin);` | 方法 |
| `GetRelationIncreaseFactor` | `public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue);` | 方法 |
| `GetInfluenceAwardForSettlementCapturer` | `public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement);` | 方法 |
| `GetHourlyInfluenceAwardForRaidingEnemyVillage` | `public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty);` | 方法 |
| `GetHourlyInfluenceAwardForBesiegingEnemyFortification` | `public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty);` | 方法 |
| `GetHourlyInfluenceAwardForBeingArmyMember` | `public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty);` | 方法 |
| `GetScoreOfClanToJoinKingdom` | `public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom);` | 方法 |
| `GetScoreOfClanToLeaveKingdom` | `public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom);` | 方法 |
| `GetScoreOfKingdomToGetClan` | `public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan);` | 方法 |
| `GetScoreOfKingdomToSackClan` | `public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan);` | 方法 |
| `GetScoreOfMercenaryToJoinKingdom` | `public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom);` | 方法 |
| `GetScoreOfMercenaryToLeaveKingdom` | `public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom);` | 方法 |
| `GetScoreOfKingdomToHireMercenary` | `public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan);` | 方法 |
| `GetScoreOfKingdomToSackMercenary` | `public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan);` | 方法 |
| `GetScoreOfDeclaringPeaceForClan` | `public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false);` | 方法 |
| `GetScoreOfDeclaringPeace` | `public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace);` | 方法 |
| `IsPeaceSuitable` | `public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace);` | 方法 |
| `GetScoreOfDeclaringWar` | `public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false);` | 方法 |
| `GetWarProgressScore` | `public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false);` | 方法 |
| `GetScoreOfLettingPartyGo` | `public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo);` | 方法 |
| `GetValueOfHeroForFaction` | `public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false);` | 方法 |
| `GetRelationCostOfExpellingClanFromKingdom` | `public abstract int GetRelationCostOfExpellingClanFromKingdom();` | 方法 |
| `GetInfluenceCostOfSupportingClan` | `public abstract int GetInfluenceCostOfSupportingClan();` | 方法 |
| `GetInfluenceCostOfExpellingClan` | `public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan);` | 方法 |
| `GetInfluenceCostOfProposingPeace` | `public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan);` | 方法 |
| `GetInfluenceCostOfProposingWar` | `public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan);` | 方法 |
| `GetInfluenceValueOfSupportingClan` | `public abstract int GetInfluenceValueOfSupportingClan();` | 方法 |
| `GetRelationValueOfSupportingClan` | `public abstract int GetRelationValueOfSupportingClan();` | 方法 |
| `GetInfluenceCostOfAnnexation` | `public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan);` | 方法 |
| `GetInfluenceCostOfChangingLeaderOfArmy` | `public abstract int GetInfluenceCostOfChangingLeaderOfArmy();` | 方法 |
| `GetInfluenceCostOfDisbandingArmy` | `public abstract int GetInfluenceCostOfDisbandingArmy();` | 方法 |
| `GetRelationCostOfDisbandingArmy` | `public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty);` | 方法 |
| `GetInfluenceCostOfPolicyProposalAndDisavowal` | `public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan);` | 方法 |
| `GetInfluenceCostOfAbandoningArmy` | `public abstract int GetInfluenceCostOfAbandoningArmy();` | 方法 |
| `GetEffectiveRelation` | `public abstract int GetEffectiveRelation(Hero hero, Hero hero1);` | 方法 |
| `GetBaseRelation` | `public abstract int GetBaseRelation(Hero hero, Hero hero1);` | 方法 |
| `GetHeroesForEffectiveRelation` | `public abstract void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2);` | 方法 |
| `GetRelationChangeAfterClanLeaderIsDead` | `public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero);` | 方法 |
| `GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision` | `public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner);` | 方法 |
| `GetClanStrength` | `public abstract float GetClanStrength(Clan clan);` | 方法 |
| `GetHeroCommandingStrengthForClan` | `public abstract float GetHeroCommandingStrengthForClan(Hero hero);` | 方法 |
| `GetHeroGoverningStrengthForClan` | `public abstract float GetHeroGoverningStrengthForClan(Hero hero);` | 方法 |
| `GetNotificationColor` | `public abstract uint GetNotificationColor(ChatNotificationType notificationType);` | 方法 |
| `GetDailyTributeToPay` | `public abstract int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays);` | 方法 |
| `GetDecisionMakingThreshold` | `public abstract float GetDecisionMakingThreshold(IFaction consideringFaction);` | 方法 |
| `GetValueOfSettlementsForFaction` | `public abstract float GetValueOfSettlementsForFaction(IFaction faction);` | 方法 |
| `CanSettlementBeGifted` | `public abstract bool CanSettlementBeGifted(Settlement settlement);` | 方法 |
| `IsClanEligibleToBecomeRuler` | `public abstract bool IsClanEligibleToBecomeRuler(Clan clan);` | 方法 |
| `IEnumerable` | `public abstract IEnumerable<BarterGroup>GetBarterGroups();` | 方法 |
| `GetCharmExperienceFromRelationGain` | `public abstract int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail);` | 方法 |
| `DenarsToInfluence` | `public abstract float DenarsToInfluence();` | 方法 |
| `GetShallowDiplomaticStance` | `public abstract DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2);` | 方法 |
| `GetDefaultDiplomaticStance` | `public abstract DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2);` | 方法 |
| `IsAtConstantWar` | `public abstract bool IsAtConstantWar(IFaction faction1, IFaction faction2);` | 方法 |
| `DiplomacyStance` | `public enum DiplomacyStance` | 属性 |
| `DiplomacyStance` | `public enum DiplomacyStance` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
