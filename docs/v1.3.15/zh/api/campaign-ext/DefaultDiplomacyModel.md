<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDiplomacyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`
**Base:** `DiplomacyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`

## 概述

`DefaultDiplomacyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultDiplomacyModel>(new MyDefaultDiplomacyModel())` 注册，以改变其计算逻辑。

## 主要属性

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

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
```csharp
public override float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)
```

### GetClanStrength
```csharp
public override float GetClanStrength(Clan clan)
```

### GetHeroCommandingStrengthForClan
```csharp
public override float GetHeroCommandingStrengthForClan(Hero hero)
```

### GetHeroGoverningStrengthForClan
```csharp
public override float GetHeroGoverningStrengthForClan(Hero hero)
```

### GetRelationIncreaseFactor
```csharp
public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationChange)
```

### GetInfluenceAwardForSettlementCapturer
```csharp
public override int GetInfluenceAwardForSettlementCapturer(Settlement settlement)
```

### GetHourlyInfluenceAwardForBeingArmyMember
```csharp
public override float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)
```

### GetHourlyInfluenceAwardForRaidingEnemyVillage
```csharp
public override float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)
```

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
```csharp
public override float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)
```

### GetScoreOfClanToJoinKingdom
```csharp
public override float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)
```

### GetScoreOfClanToLeaveKingdom
```csharp
public override float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)
```

### GetScoreOfKingdomToGetClan
```csharp
public override float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)
```

### GetScoreOfKingdomToSackClan
```csharp
public override float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)
```

### GetScoreOfMercenaryToJoinKingdom
```csharp
public override float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)
```

### GetScoreOfMercenaryToLeaveKingdom
```csharp
public override float GetScoreOfMercenaryToLeaveKingdom(Clan mercenaryClan, Kingdom kingdom)
```

### GetScoreOfKingdomToHireMercenary
```csharp
public override float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)
```

### GetScoreOfKingdomToSackMercenary
```csharp
public override float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)
```

### GetScoreOfDeclaringPeaceForClan
```csharp
public override float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)
```

### GetScoreOfDeclaringPeace
```csharp
public override float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)
```

### GetWarProgressScore
```csharp
public override ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)
```

### GetScoreOfDeclaringWar
```csharp
public override float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)
```

### GetScoreOfLettingPartyGo
```csharp
public override float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)
```

### GetValueOfHeroForFaction
```csharp
public override float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)
```

### GetRelationCostOfExpellingClanFromKingdom
```csharp
public override int GetRelationCostOfExpellingClanFromKingdom()
```

### GetInfluenceCostOfSupportingClan
```csharp
public override int GetInfluenceCostOfSupportingClan()
```

### GetInfluenceCostOfExpellingClan
```csharp
public override int GetInfluenceCostOfExpellingClan(Clan proposingClan)
```

### GetInfluenceCostOfProposingPeace
```csharp
public override int GetInfluenceCostOfProposingPeace(Clan proposingClan)
```

### GetInfluenceCostOfProposingWar
```csharp
public override int GetInfluenceCostOfProposingWar(Clan proposingClan)
```

### GetInfluenceValueOfSupportingClan
```csharp
public override int GetInfluenceValueOfSupportingClan()
```

### GetRelationValueOfSupportingClan
```csharp
public override int GetRelationValueOfSupportingClan()
```

## 使用示例

```csharp
// DefaultDiplomacyModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultDiplomacyModel>(new MyDefaultDiplomacyModel());
```

## 参见

- [完整类目录](../catalog)