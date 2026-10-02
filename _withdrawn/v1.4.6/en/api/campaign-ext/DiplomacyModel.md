---
title: "DiplomacyModel"
description: "DiplomacyModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<DiplomacyModel>; 64 exposed members (54 methods, 9 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

DiplomacyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<DiplomacyModel>; the inheritance chain is DiplomacyModel → MBGameModel → GameModel. It exposes 64 public/protected members: 54 methods, 9 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DiplomacyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain DiplomacyModel → MBGameModel → GameModel. The surface is method-led (methods 54/64, properties 9/64), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxRelationLimit` | `public abstract int MaxRelationLimit` | property |
| `MinRelationLimit` | `public abstract int MinRelationLimit` | property |
| `MaxNeutralRelationLimit` | `public abstract int MaxNeutralRelationLimit` | property |
| `MinNeutralRelationLimit` | `public abstract int MinNeutralRelationLimit` | property |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public abstract int MinimumRelationWithConversationCharacterToJoinKingdom` | property |
| `GiftingTownRelationshipBonus` | `public abstract int GiftingTownRelationshipBonus` | property |
| `GiftingCastleRelationshipBonus` | `public abstract int GiftingCastleRelationshipBonus` | property |
| `WarDeclarationScorePenaltyAgainstTradePartners` | `public abstract float WarDeclarationScorePenaltyAgainstTradePartners` | property |
| `GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom` | `public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin);` | method |
| `GetRelationIncreaseFactor` | `public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue);` | method |
| `GetInfluenceAwardForSettlementCapturer` | `public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement);` | method |
| `GetHourlyInfluenceAwardForRaidingEnemyVillage` | `public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty);` | method |
| `GetHourlyInfluenceAwardForBesiegingEnemyFortification` | `public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty);` | method |
| `GetHourlyInfluenceAwardForBeingArmyMember` | `public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty);` | method |
| `GetScoreOfClanToJoinKingdom` | `public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom);` | method |
| `GetScoreOfClanToLeaveKingdom` | `public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom);` | method |
| `GetScoreOfKingdomToGetClan` | `public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan);` | method |
| `GetScoreOfKingdomToSackClan` | `public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan);` | method |
| `GetScoreOfMercenaryToJoinKingdom` | `public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom);` | method |
| `GetScoreOfMercenaryToLeaveKingdom` | `public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom);` | method |
| `GetScoreOfKingdomToHireMercenary` | `public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan);` | method |
| `GetScoreOfKingdomToSackMercenary` | `public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan);` | method |
| `GetScoreOfDeclaringPeaceForClan` | `public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false);` | method |
| `GetScoreOfDeclaringPeace` | `public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace);` | method |
| `IsPeaceSuitable` | `public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace);` | method |
| `GetScoreOfDeclaringWar` | `public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false);` | method |
| `GetWarProgressScore` | `public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false);` | method |
| `GetScoreOfLettingPartyGo` | `public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo);` | method |
| `GetValueOfHeroForFaction` | `public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false);` | method |
| `GetRelationCostOfExpellingClanFromKingdom` | `public abstract int GetRelationCostOfExpellingClanFromKingdom();` | method |
| `GetInfluenceCostOfSupportingClan` | `public abstract int GetInfluenceCostOfSupportingClan();` | method |
| `GetInfluenceCostOfExpellingClan` | `public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan);` | method |
| `GetInfluenceCostOfProposingPeace` | `public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan);` | method |
| `GetInfluenceCostOfProposingWar` | `public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan);` | method |
| `GetInfluenceValueOfSupportingClan` | `public abstract int GetInfluenceValueOfSupportingClan();` | method |
| `GetRelationValueOfSupportingClan` | `public abstract int GetRelationValueOfSupportingClan();` | method |
| `GetInfluenceCostOfAnnexation` | `public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan);` | method |
| `GetInfluenceCostOfChangingLeaderOfArmy` | `public abstract int GetInfluenceCostOfChangingLeaderOfArmy();` | method |
| `GetInfluenceCostOfDisbandingArmy` | `public abstract int GetInfluenceCostOfDisbandingArmy();` | method |
| `GetRelationCostOfDisbandingArmy` | `public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty);` | method |
| `GetInfluenceCostOfPolicyProposalAndDisavowal` | `public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan);` | method |
| `GetInfluenceCostOfAbandoningArmy` | `public abstract int GetInfluenceCostOfAbandoningArmy();` | method |
| `GetEffectiveRelation` | `public abstract int GetEffectiveRelation(Hero hero, Hero hero1);` | method |
| `GetBaseRelation` | `public abstract int GetBaseRelation(Hero hero, Hero hero1);` | method |
| `GetHeroesForEffectiveRelation` | `public abstract void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2);` | method |
| `GetRelationChangeAfterClanLeaderIsDead` | `public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero);` | method |
| `GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision` | `public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner);` | method |
| `GetClanStrength` | `public abstract float GetClanStrength(Clan clan);` | method |
| `GetHeroCommandingStrengthForClan` | `public abstract float GetHeroCommandingStrengthForClan(Hero hero);` | method |
| `GetHeroGoverningStrengthForClan` | `public abstract float GetHeroGoverningStrengthForClan(Hero hero);` | method |
| `GetNotificationColor` | `public abstract uint GetNotificationColor(ChatNotificationType notificationType);` | method |
| `GetDailyTributeToPay` | `public abstract int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays);` | method |
| `GetDecisionMakingThreshold` | `public abstract float GetDecisionMakingThreshold(IFaction consideringFaction);` | method |
| `GetValueOfSettlementsForFaction` | `public abstract float GetValueOfSettlementsForFaction(IFaction faction);` | method |
| `CanSettlementBeGifted` | `public abstract bool CanSettlementBeGifted(Settlement settlement);` | method |
| `IsClanEligibleToBecomeRuler` | `public abstract bool IsClanEligibleToBecomeRuler(Clan clan);` | method |
| `IEnumerable` | `public abstract IEnumerable<BarterGroup>GetBarterGroups();` | method |
| `GetCharmExperienceFromRelationGain` | `public abstract int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail);` | method |
| `DenarsToInfluence` | `public abstract float DenarsToInfluence();` | method |
| `GetShallowDiplomaticStance` | `public abstract DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2);` | method |
| `GetDefaultDiplomaticStance` | `public abstract DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2);` | method |
| `IsAtConstantWar` | `public abstract bool IsAtConstantWar(IFaction faction1, IFaction faction2);` | method |
| `DiplomacyStance` | `public enum DiplomacyStance` | property |
| `DiplomacyStance` | `public enum DiplomacyStance` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
