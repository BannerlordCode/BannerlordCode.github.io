<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanPoliticsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanPoliticsModel : ClanPoliticsModel`
**Base:** `ClanPoliticsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultClanPoliticsModel.cs`

## 概述

`DefaultClanPoliticsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateInfluenceChange
```csharp
public override ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)
```

### CalculateSupportForPolicyInClan
```csharp
public override float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)
```

### CalculateRelationshipChangeWithSponsor
```csharp
public override float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)
```

### GetInfluenceRequiredToOverrideKingdomDecision
```csharp
public override int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)
```

### CanHeroBeGovernor
```csharp
public override bool CanHeroBeGovernor(Hero hero)
```

## 使用示例

```csharp
// DefaultClanPoliticsModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultClanPoliticsModel>(new MyDefaultClanPoliticsModel());
```

## 参见

- [完整类目录](../catalog)