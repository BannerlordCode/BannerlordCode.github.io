<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiplomacyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/DiplomacyModel](/versions/DiplomacyModel)
<!-- END BREADCRUMB -->
# DiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`
**Base:** `MBGameModel<DiplomacyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DiplomacyModel.cs`

## 概述

`DiplomacyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DiplomacyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxRelationLimit` | `public abstract int MaxRelationLimit { get; }` |
| `MinRelationLimit` | `public abstract int MinRelationLimit { get; }` |
| `MaxNeutralRelationLimit` | `public abstract int MaxNeutralRelationLimit { get; }` |
| `MinNeutralRelationLimit` | `public abstract int MinNeutralRelationLimit { get; }` |
| `MinimumRelationWithConversationCharacterToJoinKingdom` | `public abstract int MinimumRelationWithConversationCharacterToJoinKingdom { get; }` |
| `GiftingTownRelationshipBonus` | `public abstract int GiftingTownRelationshipBonus { get; }` |
| `GiftingCastleRelationshipBonus` | `public abstract int GiftingCastleRelationshipBonus { get; }` |
| `WarDeclarationScorePenaltyAgainstTradePartners` | `public abstract float WarDeclarationScorePenaltyAgainstTradePartners { get; }` |

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
`public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)`

**用途 / Purpose:** 获取 `strength threshold for non mutual wars to be ignored to join kingdom` 的当前值。

### GetRelationIncreaseFactor
`public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)`

**用途 / Purpose:** 获取 `relation increase factor` 的当前值。

### GetInfluenceAwardForSettlementCapturer
`public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement)`

**用途 / Purpose:** 获取 `influence award for settlement capturer` 的当前值。

### GetHourlyInfluenceAwardForRaidingEnemyVillage
`public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `hourly influence award for raiding enemy village` 的当前值。

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
`public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `hourly influence award for besieging enemy fortification` 的当前值。

### GetHourlyInfluenceAwardForBeingArmyMember
`public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `hourly influence award for being army member` 的当前值。

### GetScoreOfClanToJoinKingdom
`public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of clan to join kingdom` 的当前值。

### GetScoreOfClanToLeaveKingdom
`public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of clan to leave kingdom` 的当前值。

### GetScoreOfKingdomToGetClan
`public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 获取 `score of kingdom to get clan` 的当前值。

### GetScoreOfKingdomToSackClan
`public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`

**用途 / Purpose:** 获取 `score of kingdom to sack clan` 的当前值。

### GetScoreOfMercenaryToJoinKingdom
`public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of mercenary to join kingdom` 的当前值。

### GetScoreOfMercenaryToLeaveKingdom
`public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom)`

**用途 / Purpose:** 获取 `score of mercenary to leave kingdom` 的当前值。

### GetScoreOfKingdomToHireMercenary
`public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 获取 `score of kingdom to hire mercenary` 的当前值。

### GetScoreOfKingdomToSackMercenary
`public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)`

**用途 / Purpose:** 获取 `score of kingdom to sack mercenary` 的当前值。

### GetScoreOfDeclaringPeaceForClan
`public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 获取 `score of declaring peace for clan` 的当前值。

### GetScoreOfDeclaringPeace
`public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 获取 `score of declaring peace` 的当前值。

### IsPeaceSuitable
`public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 处理 `is peace suitable` 相关逻辑。

### GetScoreOfDeclaringWar
`public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 获取 `score of declaring war` 的当前值。

### GetWarProgressScore
`public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `war progress score` 的当前值。

### GetScoreOfLettingPartyGo
`public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)`

**用途 / Purpose:** 获取 `score of letting party go` 的当前值。

### GetValueOfHeroForFaction
`public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)`

**用途 / Purpose:** 获取 `value of hero for faction` 的当前值。

### GetRelationCostOfExpellingClanFromKingdom
`public abstract int GetRelationCostOfExpellingClanFromKingdom()`

**用途 / Purpose:** 获取 `relation cost of expelling clan from kingdom` 的当前值。

### GetInfluenceCostOfSupportingClan
`public abstract int GetInfluenceCostOfSupportingClan()`

**用途 / Purpose:** 获取 `influence cost of supporting clan` 的当前值。

### GetInfluenceCostOfExpellingClan
`public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of expelling clan` 的当前值。

### GetInfluenceCostOfProposingPeace
`public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of proposing peace` 的当前值。

### GetInfluenceCostOfProposingWar
`public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of proposing war` 的当前值。

### GetInfluenceValueOfSupportingClan
`public abstract int GetInfluenceValueOfSupportingClan()`

**用途 / Purpose:** 获取 `influence value of supporting clan` 的当前值。

### GetRelationValueOfSupportingClan
`public abstract int GetRelationValueOfSupportingClan()`

**用途 / Purpose:** 获取 `relation value of supporting clan` 的当前值。

### GetInfluenceCostOfAnnexation
`public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of annexation` 的当前值。

### GetInfluenceCostOfChangingLeaderOfArmy
`public abstract int GetInfluenceCostOfChangingLeaderOfArmy()`

**用途 / Purpose:** 获取 `influence cost of changing leader of army` 的当前值。

### GetInfluenceCostOfDisbandingArmy
`public abstract int GetInfluenceCostOfDisbandingArmy()`

**用途 / Purpose:** 获取 `influence cost of disbanding army` 的当前值。

### GetRelationCostOfDisbandingArmy
`public abstract int GetRelationCostOfDisbandingArmy(bool isLeaderParty)`

**用途 / Purpose:** 获取 `relation cost of disbanding army` 的当前值。

### GetInfluenceCostOfPolicyProposalAndDisavowal
`public abstract int GetInfluenceCostOfPolicyProposalAndDisavowal(Clan proposingClan)`

**用途 / Purpose:** 获取 `influence cost of policy proposal and disavowal` 的当前值。

### GetInfluenceCostOfAbandoningArmy
`public abstract int GetInfluenceCostOfAbandoningArmy()`

**用途 / Purpose:** 获取 `influence cost of abandoning army` 的当前值。

### GetEffectiveRelation
`public abstract int GetEffectiveRelation(Hero hero, Hero hero1)`

**用途 / Purpose:** 获取 `effective relation` 的当前值。

### GetBaseRelation
`public abstract int GetBaseRelation(Hero hero, Hero hero1)`

**用途 / Purpose:** 获取 `base relation` 的当前值。

### GetHeroesForEffectiveRelation
`public abstract void GetHeroesForEffectiveRelation(Hero hero1, Hero hero2, out Hero effectiveHero1, out Hero effectiveHero2)`

**用途 / Purpose:** 获取 `heroes for effective relation` 的当前值。

### GetRelationChangeAfterClanLeaderIsDead
`public abstract int GetRelationChangeAfterClanLeaderIsDead(Hero deadLeader, Hero relationHero)`

**用途 / Purpose:** 获取 `relation change after clan leader is dead` 的当前值。

### GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision
`public abstract int GetRelationChangeAfterVotingInSettlementOwnerPreliminaryDecision(Hero supporter, bool hasHeroVotedAgainstOwner)`

**用途 / Purpose:** 获取 `relation change after voting in settlement owner preliminary decision` 的当前值。

### GetClanStrength
`public abstract float GetClanStrength(Clan clan)`

**用途 / Purpose:** 获取 `clan strength` 的当前值。

### GetHeroCommandingStrengthForClan
`public abstract float GetHeroCommandingStrengthForClan(Hero hero)`

**用途 / Purpose:** 获取 `hero commanding strength for clan` 的当前值。

### GetHeroGoverningStrengthForClan
`public abstract float GetHeroGoverningStrengthForClan(Hero hero)`

**用途 / Purpose:** 获取 `hero governing strength for clan` 的当前值。

### GetNotificationColor
`public abstract uint GetNotificationColor(ChatNotificationType notificationType)`

**用途 / Purpose:** 获取 `notification color` 的当前值。

### GetDailyTributeToPay
`public abstract int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`

**用途 / Purpose:** 获取 `daily tribute to pay` 的当前值。

### GetDecisionMakingThreshold
`public abstract float GetDecisionMakingThreshold(IFaction consideringFaction)`

**用途 / Purpose:** 获取 `decision making threshold` 的当前值。

### GetValueOfSettlementsForFaction
`public abstract float GetValueOfSettlementsForFaction(IFaction faction)`

**用途 / Purpose:** 获取 `value of settlements for faction` 的当前值。

### CanSettlementBeGifted
`public abstract bool CanSettlementBeGifted(Settlement settlement)`

**用途 / Purpose:** 判断当前对象是否可以执行 `settlement be gifted`。

### IsClanEligibleToBecomeRuler
`public abstract bool IsClanEligibleToBecomeRuler(Clan clan)`

**用途 / Purpose:** 处理 `is clan eligible to become ruler` 相关逻辑。

### GetBarterGroups
`public abstract IEnumerable<BarterGroup> GetBarterGroups()`

**用途 / Purpose:** 获取 `barter groups` 的当前值。

### GetCharmExperienceFromRelationGain
`public abstract int GetCharmExperienceFromRelationGain(Hero hero, float relationChange, ChangeRelationAction.ChangeRelationDetail detail)`

**用途 / Purpose:** 获取 `charm experience from relation gain` 的当前值。

### DenarsToInfluence
`public abstract float DenarsToInfluence()`

**用途 / Purpose:** 处理 `denars to influence` 相关逻辑。

### GetShallowDiplomaticStance
`public abstract DiplomacyStance? GetShallowDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 获取 `shallow diplomatic stance` 的当前值。

### GetDefaultDiplomaticStance
`public abstract DiplomacyStance GetDefaultDiplomaticStance(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 获取 `default diplomatic stance` 的当前值。

### IsAtConstantWar
`public abstract bool IsAtConstantWar(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 处理 `is at constant war` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomDiplomacyModel();
```

## 参见

- [完整类目录](../catalog)