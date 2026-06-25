---
title: "DefaultDiplomacyModel"
description: "Auto-generated class reference for DefaultDiplomacyModel."
---
# DefaultDiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**Base:** `DiplomacyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDiplomacyModel.cs`

## Overview

`DefaultDiplomacyModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDiplomacyModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**Purpose:** Reads and returns the `strength threshold for non mutual wars to be ignored to join kingdom` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(kingdomToJoin);
```

### GetClanStrength
`public override float GetClanStrength(Clan clan)`

**Purpose:** Reads and returns the `clan strength` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetClanStrength(clan);
```

### GetHeroCommandingStrengthForClan
`public override float GetHeroCommandingStrengthForClan(Hero hero)`

**Purpose:** Reads and returns the `hero commanding strength for clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHeroCommandingStrengthForClan(hero);
```

### GetHeroGoverningStrengthForClan
`public override float GetHeroGoverningStrengthForClan(Hero hero)`

**Purpose:** Reads and returns the `hero governing strength for clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHeroGoverningStrengthForClan(hero);
```

### GetRelationIncreaseFactor
`public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)`

**Purpose:** Reads and returns the `relation increase factor` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationIncreaseFactor(hero1, hero2, 0);
```

### GetInfluenceAwardForSettlementCapturer
`public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**Purpose:** Reads and returns the `influence award for settlement capturer` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceAwardForSettlementCapturer(settlement);
```

### GetHourlyInfluenceAwardForBeingArmyMember
`public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**Purpose:** Reads and returns the `hourly influence award for being army member` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHourlyInfluenceAwardForBeingArmyMember(mobileParty);
```

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**Purpose:** Reads and returns the `hourly influence award for raiding enemy village` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHourlyInfluenceAwardForRaidingEnemyVillage(mobileParty);
```

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**Purpose:** Reads and returns the `hourly influence award for besieging enemy fortification` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetHourlyInfluenceAwardForBesiegingEnemyFortification(mobileParty);
```

### GetScoreOfClanToJoinKingdom
`public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of clan to join kingdom` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfClanToJoinKingdom(clan, kingdom);
```

### GetScoreOfClanToLeaveKingdom
`public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of clan to leave kingdom` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfClanToLeaveKingdom(clan, kingdom);
```

### GetScoreOfKingdomToGetClan
`public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**Purpose:** Reads and returns the `score of kingdom to get clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToGetClan(kingdom, clan);
```

### GetScoreOfKingdomToSackClan
`public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**Purpose:** Reads and returns the `score of kingdom to sack clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToSackClan(kingdom, clan);
```

### GetScoreOfMercenaryToJoinKingdom
`public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of mercenary to join kingdom` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfMercenaryToJoinKingdom(mercenaryClan, kingdom);
```

### GetScoreOfMercenaryToLeaveKingdom
`public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)`

**Purpose:** Reads and returns the `score of mercenary to leave kingdom` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfMercenaryToLeaveKingdom(mercenaryClan, kingdom);
```

### GetScoreOfKingdomToHireMercenary
`public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Reads and returns the `score of kingdom to hire mercenary` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToHireMercenary(kingdom, mercenaryClan);
```

### GetScoreOfKingdomToSackMercenary
`public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**Purpose:** Reads and returns the `score of kingdom to sack mercenary` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfKingdomToSackMercenary(kingdom, mercenaryClan);
```

### GetScoreOfDeclaringPeaceForClan
`public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**Purpose:** Reads and returns the `score of declaring peace for clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfDeclaringPeaceForClan(factionDeclaresPeace, factionDeclaredPeace, evaluatingClan, reason, false);
```

### GetScoreOfDeclaringPeace
`public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Reads and returns the `score of declaring peace` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### GetWarProgressScore
`public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`

**Purpose:** Reads and returns the `war progress score` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, false);
```

### GetScoreOfDeclaringWar
`public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**Purpose:** Reads and returns the `score of declaring war` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfDeclaringWar(factionDeclaresWar, factionDeclaredWar, evaluatingClan, reason, false);
```

### GetScoreOfLettingPartyGo
`public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**Purpose:** Reads and returns the `score of letting party go` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetScoreOfLettingPartyGo(party, partyToLetGo);
```

### GetValueOfHeroForFaction
`public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**Purpose:** Reads and returns the `value of hero for faction` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetValueOfHeroForFaction(examinedHero, targetFaction, false);
```

### GetRelationCostOfExpellingClanFromKingdom
`public override int GetRelationCostOfExpellingClanFromKingdom()`

**Purpose:** Reads and returns the `relation cost of expelling clan from kingdom` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationCostOfExpellingClanFromKingdom();
```

### GetInfluenceCostOfSupportingClan
`public override int GetInfluenceCostOfSupportingClan()`

**Purpose:** Reads and returns the `influence cost of supporting clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfSupportingClan();
```

### GetInfluenceCostOfExpellingClan
`public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of expelling clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfExpellingClan(proposingClan);
```

### GetInfluenceCostOfProposingPeace
`public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of proposing peace` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfProposingPeace(proposingClan);
```

### GetInfluenceCostOfProposingWar
`public override int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of proposing war` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfProposingWar(proposingClan);
```

### GetInfluenceValueOfSupportingClan
`public override int GetInfluenceValueOfSupportingClan()`

**Purpose:** Reads and returns the `influence value of supporting clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceValueOfSupportingClan();
```

### GetRelationValueOfSupportingClan
`public override int GetRelationValueOfSupportingClan()`

**Purpose:** Reads and returns the `relation value of supporting clan` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationValueOfSupportingClan();
```

### GetInfluenceCostOfAnnexation
`public override int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**Purpose:** Reads and returns the `influence cost of annexation` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfAnnexation(proposingClan);
```

### GetInfluenceCostOfChangingLeaderOfArmy
`public override int GetInfluenceCostOfChangingLeaderOfArmy()`

**Purpose:** Reads and returns the `influence cost of changing leader of army` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfChangingLeaderOfArmy();
```

### GetInfluenceCostOfDisbandingArmy
`public override int GetInfluenceCostOfDisbandingArmy()`

**Purpose:** Reads and returns the `influence cost of disbanding army` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfDisbandingArmy();
```

### GetRelationCostOfDisbandingArmy
`public override int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**Purpose:** Reads and returns the `relation cost of disbanding army` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationCostOfDisbandingArmy(false);
```

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public override int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposerClan)`

**Purpose:** Reads and returns the `influence cost of policy proposal and disavowal` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfPolicyProposalAndDisavowal(proposerClan);
```

### GetInfluenceCostOfAbandoningArmy
`public override int GetInfluenceCostOfAbandoningArmy()`

**Purpose:** Reads and returns the `influence cost of abandoning army` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetInfluenceCostOfAbandoningArmy();
```

### GetBaseRelation
`public override int GetBaseRelation(Hero hero1, Hero hero2)`

**Purpose:** Reads and returns the `base relation` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetBaseRelation(hero1, hero2);
```

### GetEffectiveRelation
`public override int GetEffectiveRelation(Hero hero1, Hero hero2)`

**Purpose:** Reads and returns the `effective relation` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetEffectiveRelation(hero1, hero2);
```

### GetHeroesForEffectiveRelation
`public override void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**Purpose:** Reads and returns the `heroes for effective relation` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
defaultDiplomacyModel.GetHeroesForEffectiveRelation(hero1, hero2, effectiveHero1, effectiveHero2);
```

### GetRelationChangeAfterClanLeaderIsDead
`public override int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**Purpose:** Reads and returns the `relation change after clan leader is dead` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationChangeAfterClanLeaderIsDead(deadLeader, relationHero);
```

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public override int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**Purpose:** Reads and returns the `relation change after voting in settlement owner preliminary decision` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(supporter, false);
```

### GetCharmExperienceFromRelationGain
`public override int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**Purpose:** Reads and returns the `charm experience from relation gain` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetCharmExperienceFromRelationGain(hero, 0, detail);
```

### GetNotificationColor
`public override uint GetNotificationColor(ChatNotificationType notificationType)`

**Purpose:** Reads and returns the `notification color` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetNotificationColor(notificationType);
```

### DenarsToInfluence
`public override float DenarsToInfluence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.DenarsToInfluence();
```

### GetDecisionMakingThreshold
`public override float GetDecisionMakingThreshold(IFaction consideringFaction)`

**Purpose:** Reads and returns the `decision making threshold` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetDecisionMakingThreshold(consideringFaction);
```

### CanSettlementBeGifted
`public override bool CanSettlementBeGifted(Settlement settlementToGift)`

**Purpose:** Checks whether the current object meets the preconditions for `settlement be gifted`.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.CanSettlementBeGifted(settlementToGift);
```

### GetValueOfSettlementsForFaction
`public override float GetValueOfSettlementsForFaction(IFaction faction)`

**Purpose:** Reads and returns the `value of settlements for faction` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetValueOfSettlementsForFaction(faction);
```

### GetBarterGroups
`public override IEnumerable<BarterGroup> GetBarterGroups()`

**Purpose:** Reads and returns the `barter groups` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetBarterGroups();
```

### IsPeaceSuitable
`public override bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**Purpose:** Determines whether the current object is in the `peace suitable` state or condition.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.IsPeaceSuitable(factionDeclaresPeace, factionDeclaredPeace);
```

### GetDailyTributeToPay
`public override int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`

**Purpose:** Reads and returns the `daily tribute to pay` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetDailyTributeToPay(factionToPay, factionToReceive, tributeDurationInDays);
```

### IsClanEligibleToBecomeRuler
`public override bool IsClanEligibleToBecomeRuler(Clan clan)`

**Purpose:** Determines whether the current object is in the `clan eligible to become ruler` state or condition.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.IsClanEligibleToBecomeRuler(clan);
```

### GetShallowDiplomaticStance
`public override DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Reads and returns the `shallow diplomatic stance` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetShallowDiplomaticStance(faction1, faction2);
```

### GetDefaultDiplomaticStance
`public override DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**Purpose:** Reads and returns the `default diplomatic stance` value held by the current object.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.GetDefaultDiplomaticStance(faction1, faction2);
```

### IsAtConstantWar
`public override bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**Purpose:** Determines whether the current object is in the `at constant war` state or condition.

```csharp
// Obtain an instance of DefaultDiplomacyModel from the subsystem API first
DefaultDiplomacyModel defaultDiplomacyModel = ...;
var result = defaultDiplomacyModel.IsAtConstantWar(faction1, faction2);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDiplomacyModel>(new MyDefaultDiplomacyModel());
```

## See Also

- [Area Index](../)