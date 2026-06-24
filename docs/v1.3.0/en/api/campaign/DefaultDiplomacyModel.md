<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDiplomacyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**Base:** `DiplomacyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`

## Overview

`DefaultDiplomacyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDiplomacyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**Purpose:** Gets the current value of `strength threshold for non mutual wars to be ignored to join kingdom`.

### GetClanStrength
`public override float GetClanStrength(Clan clan)`

**Purpose:** Gets the current value of `clan strength`.

### GetHeroCommandingStrengthForClan
`public override float GetHeroCommandingStrengthForClan(Hero hero)`

**Purpose:** Gets the current value of `hero commanding strength for clan`.

### GetHeroGoverningStrengthForClan
`public override float GetHeroGoverningStrengthForClan(Hero hero)`

**Purpose:** Gets the current value of `hero governing strength for clan`.

### GetRelationIncreaseFactor
`public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)`

**Purpose:** Gets the current value of `relation increase factor`.

### GetInfluenceAwardForSettlementCapturer
`public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**Purpose:** Gets the current value of `influence award for settlement capturer`.

### GetHourlyInfluenceAwardForBeingArmyMember
`public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**Purpose:** Gets the current value of `hourly influence award for being army member`.

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**Purpose:** Gets the current value of `hourly influence award for raiding enemy village`.

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**Purpose:** Gets the current value of `hourly influence award for besieging enemy fortification`.

### GetScoreOfClanToJoinKingdom
`public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of clan to join kingdom`.

### GetScoreOfClanToLeaveKingdom
`public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of clan to leave kingdom`.

### GetScoreOfKingdomToGetClan
`public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**Purpose:** Gets the current value of `score of kingdom to get clan`.

### GetScoreOfKingdomToSackClan
`public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**Purpose:** Gets the current value of `score of kingdom to sack clan`.

### GetScoreOfMercenaryToJoinKingdom
`public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of mercenary to join kingdom`.

### GetScoreOfMercenaryToLeaveKingdom
`public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of mercenary to leave kingdom`.

### GetScoreOfKingdomToHireMercenary
`public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Gets the current value of `score of kingdom to hire mercenary`.

### GetScoreOfKingdomToSackMercenary
`public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Gets the current value of `score of kingdom to sack mercenary`.

### GetScoreOfDeclaringPeaceForClan
`public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject peaceReason)`

**Purpose:** Gets the current value of `score of declaring peace for clan`.

### GetScoreOfDeclaringPeace
`public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Gets the current value of `score of declaring peace`.

### GetScoreOfDeclaringWar
`public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject warReason)`

**Purpose:** Gets the current value of `score of declaring war`.

### GetScoreOfLettingPartyGo
`public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**Purpose:** Gets the current value of `score of letting party go`.

### GetValueOfHeroForFaction
`public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**Purpose:** Gets the current value of `value of hero for faction`.

### GetRelationCostOfExpellingClanFromKingdom
`public override int GetRelationCostOfExpellingClanFromKingdom()`

**Purpose:** Gets the current value of `relation cost of expelling clan from kingdom`.

### GetInfluenceCostOfSupportingClan
`public override int GetInfluenceCostOfSupportingClan()`

**Purpose:** Gets the current value of `influence cost of supporting clan`.

### GetInfluenceCostOfExpellingClan
`public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of expelling clan`.

### GetInfluenceCostOfProposingPeace
`public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of proposing peace`.

### GetInfluenceCostOfProposingWar
`public override int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of proposing war`.

### GetInfluenceValueOfSupportingClan
`public override int GetInfluenceValueOfSupportingClan()`

**Purpose:** Gets the current value of `influence value of supporting clan`.

### GetRelationValueOfSupportingClan
`public override int GetRelationValueOfSupportingClan()`

**Purpose:** Gets the current value of `relation value of supporting clan`.

### GetInfluenceCostOfAnnexation
`public override int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of annexation`.

### GetInfluenceCostOfChangingLeaderOfArmy
`public override int GetInfluenceCostOfChangingLeaderOfArmy()`

**Purpose:** Gets the current value of `influence cost of changing leader of army`.

### GetInfluenceCostOfDisbandingArmy
`public override int GetInfluenceCostOfDisbandingArmy()`

**Purpose:** Gets the current value of `influence cost of disbanding army`.

### GetRelationCostOfDisbandingArmy
`public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**Purpose:** Gets the current value of `relation cost of disbanding army`.

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)`

**Purpose:** Gets the current value of `influence cost of policy proposal and disavowal`.

### GetInfluenceCostOfAbandoningArmy
`public override int GetInfluenceCostOfAbandoningArmy()`

**Purpose:** Gets the current value of `influence cost of abandoning army`.

### GetBaseRelation
`public override int GetBaseRelation(Hero hero1, Hero hero2)`

**Purpose:** Gets the current value of `base relation`.

### GetEffectiveRelation
`public override int GetEffectiveRelation(Hero hero1, Hero hero2)`

**Purpose:** Gets the current value of `effective relation`.

### GetHeroesForEffectiveRelation
`public override void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**Purpose:** Gets the current value of `heroes for effective relation`.

### GetRelationChangeAfterClanLeaderIsDead
`public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**Purpose:** Gets the current value of `relation change after clan leader is dead`.

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**Purpose:** Gets the current value of `relation change after voting in settlement owner preliminary decision`.

### GetCharmExperienceFromRelationGain
`public override int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**Purpose:** Gets the current value of `charm experience from relation gain`.

### GetNotificationColor
`public override uint GetNotificationColor(ChatNotificationType notificationType)`

**Purpose:** Gets the current value of `notification color`.

### DenarsToInfluence
`public override float DenarsToInfluence()`

**Purpose:** Handles logic related to `denars to influence`.

### GetDecisionMakingThreshold
`public override float GetDecisionMakingThreshold(IFaction consideringFaction)`

**Purpose:** Gets the current value of `decision making threshold`.

### CanSettlementBeGifted
`public override bool CanSettlementBeGifted(Settlement settlementToGift)`

**Purpose:** Checks whether the current object can `settlement be gifted`.

### GetValueOfSettlementsForFaction
`public override float GetValueOfSettlementsForFaction(IFaction faction)`

**Purpose:** Gets the current value of `value of settlements for faction`.

### GetBarterGroups
`public override IEnumerable<BarterGroup> GetBarterGroups()`

**Purpose:** Gets the current value of `barter groups`.

### IsPeaceSuitable
`public override bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Handles logic related to `is peace suitable`.

### GetDailyTributeToPay
`public override int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive)`

**Purpose:** Gets the current value of `daily tribute to pay`.

### IsClanEligibleToBecomeRuler
`public override bool IsClanEligibleToBecomeRuler(Clan clan)`

**Purpose:** Handles logic related to `is clan eligible to become ruler`.

### GetShallowDiplomaticStance
`public override DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Gets the current value of `shallow diplomatic stance`.

### GetDefaultDiplomaticStance
`public override DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Gets the current value of `default diplomatic stance`.

### IsAtConstantWar
`public override bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `is at constant war`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDiplomacyModel>(new MyDefaultDiplomacyModel());
```

## See Also

- [Complete Class Catalog](../catalog)