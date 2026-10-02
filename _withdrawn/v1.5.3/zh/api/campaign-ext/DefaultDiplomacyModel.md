---
title: "DefaultDiplomacyModel"
description: "DefaultDiplomacyModel 的自动生成类参考。"
---
# DefaultDiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel `
**Base:** DiplomacyModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs

## 概述

`DefaultDiplomacyModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin) `

### GetClanStrength
`public override float GetClanStrength(Clan clan) `

### GetHeroCommandingStrengthForClan
`public override float GetHeroCommandingStrengthForClan(Hero hero) `

### GetHeroGoverningStrengthForClan
`public override float GetHeroGoverningStrengthForClan(Hero hero) `

### GetEffectiveRelationChange
`public override int GetEffectiveRelationChange(Hero originalHero,Hero originalGainedRelationWith,int relationChange) `

### GetInfluenceAwardForSettlementCapturer
`public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement) `

### GetHourlyInfluenceAwardForBeingArmyMember
`public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty) `

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty) `

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty) `

### GetScoreOfClanToJoinKingdom
`public override float GetScoreOfClanToJoinKingdom(Clan clan,Kingdom kingdom) `

### GetScoreOfClanToLeaveKingdom
`public override float GetScoreOfClanToLeaveKingdom(Clan clan,Kingdom kingdom) `

### GetScoreOfKingdomToGetClan
`public override float GetScoreOfKingdomToGetClan(Kingdom kingdom,Clan clan) `

### GetScoreOfKingdomToSackClan
`public override float GetScoreOfKingdomToSackClan(Kingdom kingdom,Clan clan) `

### GetScoreOfMercenaryToJoinKingdom
`public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan,Kingdom kingdom) `

### GetScoreOfMercenaryToLeaveKingdom
`public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan,Kingdom kingdom) `

### GetScoreOfKingdomToHireMercenary
`public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom,Clan mercenaryClan) `

### GetScoreOfKingdomToSackMercenary
`public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom,Clan mercenaryClan) `

### GetScoreOfDeclaringPeaceForClan
`public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace,Clan evaluatingClan,out TextObject reason,bool includeReason = false) `

### GetScoreOfDeclaringPeace
`public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace) `

### GetWarProgressScore
`public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar,IFaction factionDeclaredWar,bool includeDescriptions = false) `

### GetScoreOfDeclaringWar
`public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar,IFaction factionDeclaredWar,Clan evaluatingClan,out TextObject reason,bool includeReason = false) `

### GetScoreOfLettingPartyGo
`public override float GetScoreOfLettingPartyGo(MobileParty party,MobileParty partyToLetGo) `

### GetValueOfHeroForFaction
`public override float GetValueOfHeroForFaction(Hero examinedHero,IFaction targetFaction,bool forMarriage = false) `

### GetRelationCostOfExpellingClanFromKingdom
`public override int GetRelationCostOfExpellingClanFromKingdom() `

### GetInfluenceCostOfSupportingClan
`public override int GetInfluenceCostOfSupportingClan() `

### GetInfluenceCostOfExpellingClan
`public override int GetInfluenceCostOfExpellingClan(Clan proposingClan) `

### GetInfluenceCostOfProposingPeace
`public override int GetInfluenceCostOfProposingPeace(Clan proposingClan) `

### GetInfluenceCostOfProposingWar
`public override int GetInfluenceCostOfProposingWar(Clan proposingClan) `

### GetInfluenceValueOfSupportingClan
`public override int GetInfluenceValueOfSupportingClan() `

### GetRelationValueOfSupportingClan
`public override int GetRelationValueOfSupportingClan() `

### GetInfluenceCostOfAnnexation
`public override int GetInfluenceCostOfAnnexation(Clan proposingClan) `

### GetInfluenceCostOfChangingLeaderOfArmy
`public override int GetInfluenceCostOfChangingLeaderOfArmy() `

### GetInfluenceCostOfDisbandingArmy
`public override int GetInfluenceCostOfDisbandingArmy() `

### GetRelationCostOfDisbandingArmy
`public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty) `

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan) `

### GetInfluenceCostOfAbandoningArmy
`public override int GetInfluenceCostOfAbandoningArmy() `

### GetBaseRelation
`public override int GetBaseRelation(Hero hero1,Hero hero2) `

### GetEffectiveRelation
`public override int GetEffectiveRelation(Hero hero1,Hero hero2) `

### GetHeroesForEffectiveRelation
`public override void GetHeroesForEffectiveRelation(Hero hero1,Hero hero2,out Hero effectiveHero1,out Hero effectiveHero2) `

### GetRelationChangeAfterClanLeaderIsDead
`public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader,Hero relationHero) `

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter,bool hasHeroVotedAgainstOwner) `

### GetCharmExperienceFromRelationGain
`public override int GetCharmExperienceFromRelationGain(Hero hero,float relationChange,ChangeRelationAction.ChangeRelationDetail detail) `

### GetNotificationColor
`public override uint GetNotificationColor(ChatNotificationType notificationType) `

### DenarsToInfluence
`public override float DenarsToInfluence() `

### GetDecisionMakingThreshold
`public override float GetDecisionMakingThreshold(IFaction consideringFaction) `

### CanSettlementBeGifted
`public override bool CanSettlementBeGifted(Settlement settlementToGift) `

### GetValueOfSettlementsForFaction
`public override float GetValueOfSettlementsForFaction(IFaction faction) `

### GetBarterGroups
`public override IEnumerable<BarterGroup> GetBarterGroups() `

### IsPeaceSuitable
`public override bool IsPeaceSuitable(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace) `

### GetDailyTributeToPay
`public override int GetDailyTributeToPay(Clan factionToPay,Clan factionToReceive,out int tributeDurationInDays) `

### IsClanEligibleToBecomeRuler
`public override bool IsClanEligibleToBecomeRuler(Clan clan) `

### GetShallowDiplomaticStance
`public override DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1,IFaction faction2) `

### GetDefaultDiplomaticStance
`public override DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1,IFaction faction2) `

### IsAtConstantWar
`public override bool IsAtConstantWar(IFaction faction1,IFaction faction2) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
