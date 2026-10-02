---
title: "DiplomacyModel"
description: "DiplomacyModel 的自动生成类参考。"
---
# DiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel> `
**Base:** MBGameModel<DiplomacyModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs

## 概述

`DiplomacyModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

### GetEffectiveRelationChange
`public abstract int GetEffectiveRelationChange(Hero originalHero,Hero originalGainedRelationWith,int relationChange)`

### GetInfluenceAwardForSettlementCapturer
`public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

### GetHourlyInfluenceAwardForBeingArmyMember
`public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

### GetScoreOfClanToJoinKingdom
`public abstract float GetScoreOfClanToJoinKingdom(Clan clan,Kingdom kingdom)`

### GetScoreOfClanToLeaveKingdom
`public abstract float GetScoreOfClanToLeaveKingdom(Clan clan,Kingdom kingdom)`

### GetScoreOfKingdomToGetClan
`public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom,Clan clan)`

### GetScoreOfKingdomToSackClan
`public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom,Clan clan)`

### GetScoreOfMercenaryToJoinKingdom
`public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan,Kingdom kingdom)`

### GetScoreOfMercenaryToLeaveKingdom
`public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan,Kingdom kingdom)`

### GetScoreOfKingdomToHireMercenary
`public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom,Clan mercenaryClan)`

### GetScoreOfKingdomToSackMercenary
`public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom,Clan mercenaryClan)`

### GetScoreOfDeclaringPeaceForClan
`public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace,Clan evaluatingClan,out TextObject reason,bool includeReason = false)`

### GetScoreOfDeclaringPeace
`public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace)`

### IsPeaceSuitable
`public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace,IFaction factionDeclaredPeace)`

### GetScoreOfDeclaringWar
`public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar,IFaction factionDeclaredWar,Clan evaluatingClan,out TextObject reason,bool includeReason = false)`

### GetWarProgressScore
`public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar,IFaction factionDeclaredWar,bool includeDescriptions = false)`

### GetScoreOfLettingPartyGo
`public abstract float GetScoreOfLettingPartyGo(MobileParty party,MobileParty partyToLetGo)`

### GetValueOfHeroForFaction
`public abstract float GetValueOfHeroForFaction(Hero examinedHero,IFaction targetFaction,bool forMarriage = false)`

### GetRelationCostOfExpellingClanFromKingdom
`public abstract int GetRelationCostOfExpellingClanFromKingdom()`

### GetInfluenceCostOfSupportingClan
`public abstract int GetInfluenceCostOfSupportingClan()`

### GetInfluenceCostOfExpellingClan
`public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

### GetInfluenceCostOfProposingPeace
`public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

### GetInfluenceCostOfProposingWar
`public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan)`

### GetInfluenceValueOfSupportingClan
`public abstract int GetInfluenceValueOfSupportingClan()`

### GetRelationValueOfSupportingClan
`public abstract int GetRelationValueOfSupportingClan()`

### GetInfluenceCostOfAnnexation
`public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan)`

### GetInfluenceCostOfChangingLeaderOfArmy
`public abstract int GetInfluenceCostOfChangingLeaderOfArmy()`

### GetInfluenceCostOfDisbandingArmy
`public abstract int GetInfluenceCostOfDisbandingArmy()`

### GetRelationCostOfDisbandingArmy
`public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan)`

### GetInfluenceCostOfAbandoningArmy
`public abstract int GetInfluenceCostOfAbandoningArmy()`

### GetEffectiveRelation
`public abstract int GetEffectiveRelation(Hero hero,Hero hero1)`

### GetBaseRelation
`public abstract int GetBaseRelation(Hero hero,Hero hero1)`

### GetHeroesForEffectiveRelation
`public abstract void GetHeroesForEffectiveRelation(Hero hero1,Hero hero2,out Hero effectiveHero1,out Hero effectiveHero2)`

### GetRelationChangeAfterClanLeaderIsDead
`public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader,Hero relationHero)`

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter,bool hasHeroVotedAgainstOwner)`

### GetClanStrength
`public abstract float GetClanStrength(Clan clan)`

### GetHeroCommandingStrengthForClan
`public abstract float GetHeroCommandingStrengthForClan(Hero hero)`

### GetHeroGoverningStrengthForClan
`public abstract float GetHeroGoverningStrengthForClan(Hero hero)`

### GetNotificationColor
`public abstract uint GetNotificationColor(ChatNotificationType notificationType)`

### GetDailyTributeToPay
`public abstract int GetDailyTributeToPay(Clan factionToPay,Clan factionToReceive,out int tributeDurationInDays)`

### GetDecisionMakingThreshold
`public abstract float GetDecisionMakingThreshold(IFaction consideringFaction)`

### GetValueOfSettlementsForFaction
`public abstract float GetValueOfSettlementsForFaction(IFaction faction)`

### CanSettlementBeGifted
`public abstract bool CanSettlementBeGifted(Settlement settlement)`

### IsClanEligibleToBecomeRuler
`public abstract bool IsClanEligibleToBecomeRuler(Clan clan)`

### GetBarterGroups
`public abstract IEnumerable<BarterGroup> GetBarterGroups()`

### GetCharmExperienceFromRelationGain
`public abstract int GetCharmExperienceFromRelationGain(Hero hero,float relationChange,ChangeRelationAction.ChangeRelationDetail detail)`

### DenarsToInfluence
`public abstract float DenarsToInfluence()`

### GetShallowDiplomaticStance
`public abstract DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1,IFaction faction2)`

### GetDefaultDiplomaticStance
`public abstract DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1,IFaction faction2)`

### IsAtConstantWar
`public abstract bool IsAtConstantWar(IFaction faction1,IFaction faction2)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
