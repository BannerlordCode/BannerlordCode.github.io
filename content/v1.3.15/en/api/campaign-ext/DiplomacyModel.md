---
title: "DiplomacyModel"
description: "Auto-generated class reference for DiplomacyModel."
---
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

**Purpose:** Reads and returns the `strength threshold for non mutual wars to be ignored to join kingdom` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(kingdomToJoin);
```

### GetRelationIncreaseFactor
`public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)`

**Purpose:** Reads and returns the `relation increase factor` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationIncreaseFactor(hero1, hero2, 0);
```

### GetInfluenceAwardForSettlementCapturer
`public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**Purpose:** Reads and returns the `influence award for settlement capturer` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceAwardForSettlementCapturer(settlement);
```

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**Purpose:** Reads and returns the `hourly influence award for raiding enemy village` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHourlyInfluenceAwardForRaidingEnemyVillage(mobileParty);
```

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**Purpose:** Reads and returns the `hourly influence award for besieging enemy fortification` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHourlyInfluenceAwardForBesiegingEnemyFortification(mobileParty);
```

### GetHourlyInfluenceAwardForBeingArmyMember
`public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**Purpose:** Reads and returns the `hourly influence award for being army member` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHourlyInfluenceAwardForBeingArmyMember(mobileParty);
```

### GetScoreOfClanToJoinKingdom
`public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of clan to join kingdom` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfClanToJoinKingdom(clan, kingdom);
```

### GetScoreOfClanToLeaveKingdom
`public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of clan to leave kingdom` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfClanToLeaveKingdom(clan, kingdom);
```

### GetScoreOfKingdomToGetClan
`public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**Purpose:** Reads and returns the `score of kingdom to get clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToGetClan(kingdom, clan);
```

### GetScoreOfKingdomToSackClan
`public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**Purpose:** Reads and returns the `score of kingdom to sack clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToSackClan(kingdom, clan);
```

### GetScoreOfMercenaryToJoinKingdom
`public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of mercenary to join kingdom` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfMercenaryToJoinKingdom(clan, kingdom);
```

### GetScoreOfMercenaryToLeaveKingdom
`public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of mercenary to leave kingdom` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfMercenaryToLeaveKingdom(clan, kingdom);
```

### GetScoreOfKingdomToHireMercenary
`public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Reads and returns the `score of kingdom to hire mercenary` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToHireMercenary(kingdom, mercenaryClan);
```

### GetScoreOfKingdomToSackMercenary
`public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Reads and returns the `score of kingdom to sack mercenary` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfKingdomToSackMercenary(kingdom, mercenaryClan);
```

### GetScoreOfDeclaringPeaceForClan
`public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**Purpose:** Reads and returns the `score of declaring peace for clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfDeclaringPeaceForClan(factionDeclaresPeace, factionDeclaredPeace, evaluatingClan, reason, false);
```

### GetScoreOfDeclaringPeace
`public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Reads and returns the `score of declaring peace` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### IsPeaceSuitable
`public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Determines whether the current object is in the `peace suitable` state or condition.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.IsPeaceSuitable(factionDeclaresPeace, factionDeclaredPeace);
```

### GetScoreOfDeclaringWar
`public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**Purpose:** Reads and returns the `score of declaring war` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfDeclaringWar(factionDeclaresWar, factionDeclaredWar, evaluatingClan, reason, false);
```

### GetWarProgressScore
`public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`

**Purpose:** Reads and returns the `war progress score` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, false);
```

### GetScoreOfLettingPartyGo
`public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**Purpose:** Reads and returns the `score of letting party go` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetScoreOfLettingPartyGo(party, partyToLetGo);
```

### GetValueOfHeroForFaction
`public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**Purpose:** Reads and returns the `value of hero for faction` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetValueOfHeroForFaction(examinedHero, targetFaction, false);
```

### GetRelationCostOfExpellingClanFromKingdom
`public abstract int GetRelationCostOfExpellingClanFromKingdom()`

**Purpose:** Reads and returns the `relation cost of expelling clan from kingdom` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationCostOfExpellingClanFromKingdom();
```

### GetInfluenceCostOfSupportingClan
`public abstract int GetInfluenceCostOfSupportingClan()`

**Purpose:** Reads and returns the `influence cost of supporting clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfSupportingClan();
```

### GetInfluenceCostOfExpellingClan
`public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of expelling clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfExpellingClan(proposingClan);
```

### GetInfluenceCostOfProposingPeace
`public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of proposing peace` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfProposingPeace(proposingClan);
```

### GetInfluenceCostOfProposingWar
`public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of proposing war` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfProposingWar(proposingClan);
```

### GetInfluenceValueOfSupportingClan
`public abstract int GetInfluenceValueOfSupportingClan()`

**Purpose:** Reads and returns the `influence value of supporting clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceValueOfSupportingClan();
```

### GetRelationValueOfSupportingClan
`public abstract int GetRelationValueOfSupportingClan()`

**Purpose:** Reads and returns the `relation value of supporting clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationValueOfSupportingClan();
```

### GetInfluenceCostOfAnnexation
`public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of annexation` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfAnnexation(proposingClan);
```

### GetInfluenceCostOfChangingLeaderOfArmy
`public abstract int GetInfluenceCostOfChangingLeaderOfArmy()`

**Purpose:** Reads and returns the `influence cost of changing leader of army` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfChangingLeaderOfArmy();
```

### GetInfluenceCostOfDisbandingArmy
`public abstract int GetInfluenceCostOfDisbandingArmy()`

**Purpose:** Reads and returns the `influence cost of disbanding army` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfDisbandingArmy();
```

### GetRelationCostOfDisbandingArmy
`public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**Purpose:** Reads and returns the `relation cost of disbanding army` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationCostOfDisbandingArmy(false);
```

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of policy proposal and disavowal` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfPolicyProposalAndDisavowal(proposingClan);
```

### GetInfluenceCostOfAbandoningArmy
`public abstract int GetInfluenceCostOfAbandoningArmy()`

**Purpose:** Reads and returns the `influence cost of abandoning army` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetInfluenceCostOfAbandoningArmy();
```

### GetEffectiveRelation
`public abstract int GetEffectiveRelation(Hero hero, Hero hero1)`

**Purpose:** Reads and returns the `effective relation` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetEffectiveRelation(hero, hero1);
```

### GetBaseRelation
`public abstract int GetBaseRelation(Hero hero, Hero hero1)`

**Purpose:** Reads and returns the `base relation` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetBaseRelation(hero, hero1);
```

### GetHeroesForEffectiveRelation
`public abstract void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**Purpose:** Reads and returns the `heroes for effective relation` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
diplomacyModel.GetHeroesForEffectiveRelation(hero1, hero2, effectiveHero1, effectiveHero2);
```

### GetRelationChangeAfterClanLeaderIsDead
`public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**Purpose:** Reads and returns the `relation change after clan leader is dead` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationChangeAfterClanLeaderIsDead(deadLeader, relationHero);
```

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**Purpose:** Reads and returns the `relation change after voting in settlement owner preliminary decision` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(supporter, false);
```

### GetClanStrength
`public abstract float GetClanStrength(Clan clan)`

**Purpose:** Reads and returns the `clan strength` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetClanStrength(clan);
```

### GetHeroCommandingStrengthForClan
`public abstract float GetHeroCommandingStrengthForClan(Hero hero)`

**Purpose:** Reads and returns the `hero commanding strength for clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHeroCommandingStrengthForClan(hero);
```

### GetHeroGoverningStrengthForClan
`public abstract float GetHeroGoverningStrengthForClan(Hero hero)`

**Purpose:** Reads and returns the `hero governing strength for clan` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetHeroGoverningStrengthForClan(hero);
```

### GetNotificationColor
`public abstract uint GetNotificationColor(ChatNotificationType notificationType)`

**Purpose:** Reads and returns the `notification color` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetNotificationColor(notificationType);
```

### GetDailyTributeToPay
`public abstract int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`

**Purpose:** Reads and returns the `daily tribute to pay` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetDailyTributeToPay(factionToPay, factionToReceive, tributeDurationInDays);
```

### GetDecisionMakingThreshold
`public abstract float GetDecisionMakingThreshold(IFaction consideringFaction)`

**Purpose:** Reads and returns the `decision making threshold` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetDecisionMakingThreshold(consideringFaction);
```

### GetValueOfSettlementsForFaction
`public abstract float GetValueOfSettlementsForFaction(IFaction faction)`

**Purpose:** Reads and returns the `value of settlements for faction` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetValueOfSettlementsForFaction(faction);
```

### CanSettlementBeGifted
`public abstract bool CanSettlementBeGifted(Settlement settlement)`

**Purpose:** Checks whether the current object meets the preconditions for `settlement be gifted`.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.CanSettlementBeGifted(settlement);
```

### IsClanEligibleToBecomeRuler
`public abstract bool IsClanEligibleToBecomeRuler(Clan clan)`

**Purpose:** Determines whether the current object is in the `clan eligible to become ruler` state or condition.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.IsClanEligibleToBecomeRuler(clan);
```

### GetBarterGroups
`public abstract IEnumerable<BarterGroup> GetBarterGroups()`

**Purpose:** Reads and returns the `barter groups` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetBarterGroups();
```

### GetCharmExperienceFromRelationGain
`public abstract int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**Purpose:** Reads and returns the `charm experience from relation gain` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetCharmExperienceFromRelationGain(hero, 0, detail);
```

### DenarsToInfluence
`public abstract float DenarsToInfluence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.DenarsToInfluence();
```

### GetShallowDiplomaticStance
`public abstract DiplomacyModel.DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Reads and returns the `shallow diplomatic stance` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetShallowDiplomaticStance(faction1, faction2);
```

### GetDefaultDiplomaticStance
`public abstract DiplomacyModel.DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Reads and returns the `default diplomatic stance` value held by the current object.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.GetDefaultDiplomaticStance(faction1, faction2);
```

### IsAtConstantWar
`public abstract bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**Purpose:** Determines whether the current object is in the `at constant war` state or condition.

```csharp
// Obtain an instance of DiplomacyModel from the subsystem API first
DiplomacyModel diplomacyModel = ...;
var result = diplomacyModel.IsAtConstantWar(faction1, faction2);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DiplomacyModel instance = ...;
```

## See Also

- [Area Index](../)