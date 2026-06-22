<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiplomacyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/DiplomacyModel](/versions/DiplomacyModel)
<!-- END BREADCRUMB -->
# DiplomacyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>`
**Base:** `MBGameModel<DiplomacyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs`

## 概述

`DiplomacyModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DiplomacyModel>(new MyDiplomacyModel())` 注册，以改变其计算逻辑。

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
| `WarDeclarationScorePenaltyAgainstAllies` | `public abstract float WarDeclarationScorePenaltyAgainstAllies { get; }` |
| `WarDeclarationScoreBonusAgainstEnemiesOfAllies` | `public abstract float WarDeclarationScoreBonusAgainstEnemiesOfAllies { get; }` |

## 主要方法

### GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom
```csharp
public abstract float GetStrengthThresholdForNonMutualWarsToBeIgnoredToJoinKingdom(Kingdom kingdomToJoin)
```

### GetRelationIncreaseFactor
```csharp
public abstract float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)
```

### GetInfluenceAwardForSettlementCapturer
```csharp
public abstract int GetInfluenceAwardForSettlementCapturer(Settlement settlement)
```

### GetHourlyInfluenceAwardForRaidingEnemyVillage
```csharp
public abstract float GetHourlyInfluenceAwardForRaidingEnemyVillage(MobileParty mobileParty)
```

### GetHourlyInfluenceAwardForBesiegingEnemyFortification
```csharp
public abstract float GetHourlyInfluenceAwardForBesiegingEnemyFortification(MobileParty mobileParty)
```

### GetHourlyInfluenceAwardForBeingArmyMember
```csharp
public abstract float GetHourlyInfluenceAwardForBeingArmyMember(MobileParty mobileParty)
```

### GetScoreOfClanToJoinKingdom
```csharp
public abstract float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)
```

### GetScoreOfClanToLeaveKingdom
```csharp
public abstract float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)
```

### GetScoreOfKingdomToGetClan
```csharp
public abstract float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)
```

### GetScoreOfKingdomToSackClan
```csharp
public abstract float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)
```

### GetScoreOfMercenaryToJoinKingdom
```csharp
public abstract float GetScoreOfMercenaryToJoinKingdom(Clan clan, Kingdom kingdom)
```

### GetScoreOfMercenaryToLeaveKingdom
```csharp
public abstract float GetScoreOfMercenaryToLeaveKingdom(Clan clan, Kingdom kingdom)
```

### GetScoreOfKingdomToHireMercenary
```csharp
public abstract float GetScoreOfKingdomToHireMercenary(Kingdom kingdom, Clan mercenaryClan)
```

### GetScoreOfKingdomToSackMercenary
```csharp
public abstract float GetScoreOfKingdomToSackMercenary(Kingdom kingdom, Clan mercenaryClan)
```

### GetScoreOfDeclaringPeaceForClan
```csharp
public abstract float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)
```

### GetScoreOfDeclaringPeace
```csharp
public abstract float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)
```

### IsPeaceSuitable
```csharp
public abstract bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)
```

### GetScoreOfDeclaringWar
```csharp
public abstract float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)
```

### GetWarProgressScore
```csharp
public abstract ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)
```

### GetScoreOfLettingPartyGo
```csharp
public abstract float GetScoreOfLettingPartyGo(MobileParty party, MobileParty partyToLetGo)
```

### GetValueOfHeroForFaction
```csharp
public abstract float GetValueOfHeroForFaction(Hero examinedHero, IFaction targetFaction, bool forMarriage = false)
```

### GetRelationCostOfExpellingClanFromKingdom
```csharp
public abstract int GetRelationCostOfExpellingClanFromKingdom()
```

### GetInfluenceCostOfSupportingClan
```csharp
public abstract int GetInfluenceCostOfSupportingClan()
```

### GetInfluenceCostOfExpellingClan
```csharp
public abstract int GetInfluenceCostOfExpellingClan(Clan proposingClan)
```

### GetInfluenceCostOfProposingPeace
```csharp
public abstract int GetInfluenceCostOfProposingPeace(Clan proposingClan)
```

### GetInfluenceCostOfProposingWar
```csharp
public abstract int GetInfluenceCostOfProposingWar(Clan proposingClan)
```

### GetInfluenceValueOfSupportingClan
```csharp
public abstract int GetInfluenceValueOfSupportingClan()
```

### GetRelationValueOfSupportingClan
```csharp
public abstract int GetRelationValueOfSupportingClan()
```

### GetInfluenceCostOfAnnexation
```csharp
public abstract int GetInfluenceCostOfAnnexation(Clan proposingClan)
```

### GetInfluenceCostOfChangingLeaderOfArmy
```csharp
public abstract int GetInfluenceCostOfChangingLeaderOfArmy()
```

## 使用示例

```csharp
// DiplomacyModel (Model) 的典型用法
Game.Current.ReplaceModel<DiplomacyModel>(new MyDiplomacyModel());
```

## 参见

- [完整类目录](../catalog)