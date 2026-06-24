<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiplomacyModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/DiplomacyModel](/versions/DiplomacyModel)
<!-- END BREADCRUMB -->
# DiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`
**Base:** `MBGameModel<DiplomacyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`

## Overview

`DiplomacyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DiplomacyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxRelationLimit` | `public abstract int MaxRelationLimit { get; }` |
| `MinRelationLimit` | `public abstract int MinRelationLimit { get; }` |
| `MaxNeutralRelationLimit` | `public abstract int MaxNeutralRelationLimit { get; }` |
| `MinNeutralRelationLimit` | `public abstract int MinNeutralRelationLimit { get; }` |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public abstract int MinimumRelationWithConversationCharacterToJoinKingdom { get; }` |
| `GiftingTownRelationshipBonus` | `public abstract int GiftingTownRelationshipBonus { get; }` |
| `GiftingCastleRelationshipBonus` | `public abstract int GiftingCastleRelationshipBonus { get; }` |
| `WarDeclarationScorePenaltyAgainstAllies` | `public abstract float WarDeclarationScorePenaltyAgainstAllies { get; }` |
| `WarDeclarationScoreBonusAgainstEnemiesOfAllies` | `public abstract float WarDeclarationScoreBonusAgainstEnemiesOfAllies { get; }` |

## Key Methods

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**Purpose:** Gets the current value of `strength threshold for non mutual wars to be ignored to join kingdom`.

### GetRelationIncreaseFactor
`public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)`

**Purpose:** Gets the current value of `relation increase factor`.

### GetInfluenceAwardForSettlementCapturer
`public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**Purpose:** Gets the current value of `influence award for settlement capturer`.

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**Purpose:** Gets the current value of `hourly influence award for raiding enemy village`.

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**Purpose:** Gets the current value of `hourly influence award for besieging enemy fortification`.

### GetHourlyInfluenceAwardForBeingArmyMember
`public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**Purpose:** Gets the current value of `hourly influence award for being army member`.

### GetScoreOfClanToJoinKingdom
`public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of clan to join kingdom`.

### GetScoreOfClanToLeaveKingdom
`public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of clan to leave kingdom`.

### GetScoreOfKingdomToGetClan
`public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**Purpose:** Gets the current value of `score of kingdom to get clan`.

### GetScoreOfKingdomToSackClan
`public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**Purpose:** Gets the current value of `score of kingdom to sack clan`.

### GetScoreOfMercenaryToJoinKingdom
`public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of mercenary to join kingdom`.

### GetScoreOfMercenaryToLeaveKingdom
`public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Gets the current value of `score of mercenary to leave kingdom`.

### GetScoreOfKingdomToHireMercenary
`public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Gets the current value of `score of kingdom to hire mercenary`.

### GetScoreOfKingdomToSackMercenary
`public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Gets the current value of `score of kingdom to sack mercenary`.

### GetScoreOfDeclaringPeaceForClan
`public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason)`

**Purpose:** Gets the current value of `score of declaring peace for clan`.

### GetScoreOfDeclaringPeace
`public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Gets the current value of `score of declaring peace`.

### IsPeaceSuitable
`public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Handles logic related to `is peace suitable`.

### GetScoreOfDeclaringWar
`public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason)`

**Purpose:** Gets the current value of `score of declaring war`.

### GetScoreOfLettingPartyGo
`public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**Purpose:** Gets the current value of `score of letting party go`.

### GetValueOfHeroForFaction
`public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**Purpose:** Gets the current value of `value of hero for faction`.

### GetRelationCostOfExpellingClanFromKingdom
`public abstract int GetRelationCostOfExpellingClanFromKingdom()`

**Purpose:** Gets the current value of `relation cost of expelling clan from kingdom`.

### GetInfluenceCostOfSupportingClan
`public abstract int GetInfluenceCostOfSupportingClan()`

**Purpose:** Gets the current value of `influence cost of supporting clan`.

### GetInfluenceCostOfExpellingClan
`public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of expelling clan`.

### GetInfluenceCostOfProposingPeace
`public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of proposing peace`.

### GetInfluenceCostOfProposingWar
`public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of proposing war`.

### GetInfluenceValueOfSupportingClan
`public abstract int GetInfluenceValueOfSupportingClan()`

**Purpose:** Gets the current value of `influence value of supporting clan`.

### GetRelationValueOfSupportingClan
`public abstract int GetRelationValueOfSupportingClan()`

**Purpose:** Gets the current value of `relation value of supporting clan`.

### GetInfluenceCostOfAnnexation
`public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of annexation`.

### GetInfluenceCostOfChangingLeaderOfArmy
`public abstract int GetInfluenceCostOfChangingLeaderOfArmy()`

**Purpose:** Gets the current value of `influence cost of changing leader of army`.

### GetInfluenceCostOfDisbandingArmy
`public abstract int GetInfluenceCostOfDisbandingArmy()`

**Purpose:** Gets the current value of `influence cost of disbanding army`.

### GetRelationCostOfDisbandingArmy
`public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**Purpose:** Gets the current value of `relation cost of disbanding army`.

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan)`

**Purpose:** Gets the current value of `influence cost of policy proposal and disavowal`.

### GetInfluenceCostOfAbandoningArmy
`public abstract int GetInfluenceCostOfAbandoningArmy()`

**Purpose:** Gets the current value of `influence cost of abandoning army`.

### GetEffectiveRelation
`public abstract int GetEffectiveRelation(Hero hero, Hero hero1)`

**Purpose:** Gets the current value of `effective relation`.

### GetBaseRelation
`public abstract int GetBaseRelation(Hero hero, Hero hero1)`

**Purpose:** Gets the current value of `base relation`.

### GetHeroesForEffectiveRelation
`public abstract void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**Purpose:** Gets the current value of `heroes for effective relation`.

### GetRelationChangeAfterClanLeaderIsDead
`public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**Purpose:** Gets the current value of `relation change after clan leader is dead`.

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**Purpose:** Gets the current value of `relation change after voting in settlement owner preliminary decision`.

### GetClanStrength
`public abstract float GetClanStrength(Clan clan)`

**Purpose:** Gets the current value of `clan strength`.

### GetHeroCommandingStrengthForClan
`public abstract float GetHeroCommandingStrengthForClan(Hero hero)`

**Purpose:** Gets the current value of `hero commanding strength for clan`.

### GetHeroGoverningStrengthForClan
`public abstract float GetHeroGoverningStrengthForClan(Hero hero)`

**Purpose:** Gets the current value of `hero governing strength for clan`.

### GetNotificationColor
`public abstract uint GetNotificationColor(ChatNotificationType notificationType)`

**Purpose:** Gets the current value of `notification color`.

### GetDailyTributeToPay
`public abstract int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive)`

**Purpose:** Gets the current value of `daily tribute to pay`.

### GetDecisionMakingThreshold
`public abstract float GetDecisionMakingThreshold(IFaction consideringFaction)`

**Purpose:** Gets the current value of `decision making threshold`.

### GetValueOfSettlementsForFaction
`public abstract float GetValueOfSettlementsForFaction(IFaction faction)`

**Purpose:** Gets the current value of `value of settlements for faction`.

### CanSettlementBeGifted
`public abstract bool CanSettlementBeGifted(Settlement settlement)`

**Purpose:** Checks whether the current object can `settlement be gifted`.

### IsClanEligibleToBecomeRuler
`public abstract bool IsClanEligibleToBecomeRuler(Clan clan)`

**Purpose:** Handles logic related to `is clan eligible to become ruler`.

### GetBarterGroups
`public abstract IEnumerable<BarterGroup> GetBarterGroups()`

**Purpose:** Gets the current value of `barter groups`.

### GetCharmExperienceFromRelationGain
`public abstract int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**Purpose:** Gets the current value of `charm experience from relation gain`.

### DenarsToInfluence
`public abstract float DenarsToInfluence()`

**Purpose:** Handles logic related to `denars to influence`.

### GetShallowDiplomaticStance
`public abstract DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Gets the current value of `shallow diplomatic stance`.

### GetDefaultDiplomaticStance
`public abstract DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Gets the current value of `default diplomatic stance`.

### IsAtConstantWar
`public abstract bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**Purpose:** Handles logic related to `is at constant war`.

## Usage Example

```csharp
var implementation = new CustomDiplomacyModel();
```

## See Also

- [Complete Class Catalog](../catalog)