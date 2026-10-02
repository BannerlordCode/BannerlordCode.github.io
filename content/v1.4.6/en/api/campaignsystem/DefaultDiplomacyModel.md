---
title: "DefaultDiplomacyModel"
description: "DefaultDiplomacyModel: a public class in TaleWorlds.CampaignSystem, inheriting DiplomacyModel; 62 exposed members (54 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs."
---
# DefaultDiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`

## Overview

DefaultDiplomacyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs. It is a public class, implementing/inheriting DiplomacyModel; the inheritance chain is DefaultDiplomacyModel → DiplomacyModel → MBGameModel. It exposes 62 public/protected members: 54 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultDiplomacyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultDiplomacyModel → DiplomacyModel → MBGameModel. The surface is method-led (methods 54/62, properties 8/62), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public override int MinimumRelationWithConversationCharacterToJoinKingdom` | property |
| `GiftingTownRelationshipBonus` | `public override int GiftingTownRelationshipBonus` | property |
| `GiftingCastleRelationshipBonus` | `public override int GiftingCastleRelationshipBonus` | property |
| `MaxRelationLimit` | `public override int MaxRelationLimit` | property |
| `MinRelationLimit` | `public override int MinRelationLimit` | property |
| `MaxNeutralRelationLimit` | `public override int MaxNeutralRelationLimit` | property |
| `MinNeutralRelationLimit` | `public override int MinNeutralRelationLimit` | property |
| `WarDeclarationScorePenaltyAgainstTradePartners` | `public override float WarDeclarationScorePenaltyAgainstTradePartners` | property |
| `GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom` | `public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)` | method |
| `GetClanStrength` | `public override float GetClanStrength(Clan clan)` | method |
| `GetHeroCommandingStrengthForClan` | `public override float GetHeroCommandingStrengthForClan(Hero hero)` | method |
| `GetHeroGoverningStrengthForClan` | `public override float GetHeroGoverningStrengthForClan(Hero hero)` | method |
| `GetRelationIncreaseFactor` | `public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)` | method |
| `GetInfluenceAwardForSettlementCapturer` | `public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)` | method |
| `GetHourlyInfluenceAwardForBeingArmyMember` | `public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)` | method |
| `GetHourlyInfluenceAwardForRaidingEnemyVillage` | `public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)` | method |
| `GetHourlyInfluenceAwardForBesiegingEnemyFortification` | `public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)` | method |
| `GetScoreOfClanToJoinKingdom` | `public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)` | method |
| `GetScoreOfClanToLeaveKingdom` | `public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)` | method |
| `GetScoreOfKingdomToGetClan` | `public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)` | method |
| `GetScoreOfKingdomToSackClan` | `public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)` | method |
| `GetScoreOfMercenaryToJoinKingdom` | `public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)` | method |
| `GetScoreOfMercenaryToLeaveKingdom` | `public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)` | method |
| `GetScoreOfKingdomToHireMercenary` | `public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)` | method |
| `GetScoreOfKingdomToSackMercenary` | `public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)` | method |
| `GetScoreOfDeclaringPeaceForClan` | `public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)` | method |
| `GetScoreOfDeclaringPeace` | `public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | method |
| `GetWarProgressScore` | `public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)` | method |
| `GetScoreOfDeclaringWar` | `public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)` | method |
| `GetScoreOfLettingPartyGo` | `public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)` | method |
| `GetValueOfHeroForFaction` | `public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)` | method |
| `GetRelationCostOfExpellingClanFromKingdom` | `public override int GetRelationCostOfExpellingClanFromKingdom()` | method |
| `GetInfluenceCostOfSupportingClan` | `public override int GetInfluenceCostOfSupportingClan()` | method |
| `GetInfluenceCostOfExpellingClan` | `public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)` | method |
| `GetInfluenceCostOfProposingPeace` | `public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)` | method |
| `GetInfluenceCostOfProposingWar` | `public override int GetInfluenceCostOfProposingWar(Clan proposingClan)` | method |
| `GetInfluenceValueOfSupportingClan` | `public override int GetInfluenceValueOfSupportingClan()` | method |
| `GetRelationValueOfSupportingClan` | `public override int GetRelationValueOfSupportingClan()` | method |
| `GetInfluenceCostOfAnnexation` | `public override int GetInfluenceCostOfAnnexation(Clan proposingClan)` | method |
| `GetInfluenceCostOfChangingLeaderOfArmy` | `public override int GetInfluenceCostOfChangingLeaderOfArmy()` | method |
| `GetInfluenceCostOfDisbandingArmy` | `public override int GetInfluenceCostOfDisbandingArmy()` | method |
| `GetRelationCostOfDisbandingArmy` | `public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty)` | method |
| `GetInfluenceCostOfPolicyProposalAndDisavowal` | `public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)` | method |
| `GetInfluenceCostOfAbandoningArmy` | `public override int GetInfluenceCostOfAbandoningArmy()` | method |
| `GetBaseRelation` | `public override int GetBaseRelation(Hero hero1, Hero hero2)` | method |
| `GetEffectiveRelation` | `public override int GetEffectiveRelation(Hero hero1, Hero hero2)` | method |
| `GetHeroesForEffectiveRelation` | `public override void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)` | method |
| `GetRelationChangeAfterClanLeaderIsDead` | `public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)` | method |
| `GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision` | `public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)` | method |
| `GetCharmExperienceFromRelationGain` | `public override int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)` | method |
| `GetNotificationColor` | `public override uint GetNotificationColor(ChatNotificationType notificationType)` | method |
| `DenarsToInfluence` | `public override float DenarsToInfluence()` | method |
| `GetDecisionMakingThreshold` | `public override float GetDecisionMakingThreshold(IFaction consideringFaction)` | method |
| `CanSettlementBeGifted` | `public override bool CanSettlementBeGifted(Settlement settlementToGift)` | method |
| `GetValueOfSettlementsForFaction` | `public override float GetValueOfSettlementsForFaction(IFaction faction)` | method |
| `IEnumerable` | `public override IEnumerable<BarterGroup>GetBarterGroups()` | method |
| `IsPeaceSuitable` | `public override bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | method |
| `GetDailyTributeToPay` | `public override int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)` | method |
| `IsClanEligibleToBecomeRuler` | `public override bool IsClanEligibleToBecomeRuler(Clan clan)` | method |
| `GetShallowDiplomaticStance` | `public override DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)` | method |
| `GetDefaultDiplomaticStance` | `public override DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)` | method |
| `IsAtConstantWar` | `public override bool IsAtConstantWar(IFaction faction1, IFaction faction2)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DiplomacyModel](../DiplomacyModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
