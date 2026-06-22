<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAllianceModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## 概述

`DefaultAllianceModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public override CampaignTime DurationForOffers { get; }` |

## 主要方法

### GetCallToWarCost
```csharp
public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)
```

### GetScoreOfStartingAlliance
```csharp
public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, out TextObject explanationText, bool includeDescription = false)
```

### GetInfluenceCostOfProposingStartingAlliance
```csharp
public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)
```

### GetScoreOfCallingToWar
```csharp
public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)
```

### GetScoreOfJoiningWar
```csharp
public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)
```

### GetInfluenceCostOfCallingToWar
```csharp
public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)
```

## 使用示例

```csharp
// DefaultAllianceModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## 参见

- [完整类目录](../catalog)