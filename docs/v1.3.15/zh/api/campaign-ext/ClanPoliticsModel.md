<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanPoliticsModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel>`
**Base:** `MBGameModel<ClanPoliticsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`

## 概述

`ClanPoliticsModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ClanPoliticsModel>(new MyClanPoliticsModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateInfluenceChange
```csharp
public abstract ExplainedNumber CalculateInfluenceChange(Clan clan, bool includeDescriptions = false)
```

### CalculateSupportForPolicyInClan
```csharp
public abstract float CalculateSupportForPolicyInClan(Clan clan, PolicyObject policy)
```

### CalculateRelationshipChangeWithSponsor
```csharp
public abstract float CalculateRelationshipChangeWithSponsor(Clan clan, Clan sponsorClan)
```

### GetInfluenceRequiredToOverrideKingdomDecision
```csharp
public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption, DecisionOutcome overridingOption, KingdomDecision decision)
```

### CanHeroBeGovernor
```csharp
public abstract bool CanHeroBeGovernor(Hero hero)
```

## 使用示例

```csharp
// ClanPoliticsModel (Model) 的典型用法
Game.Current.ReplaceModel<ClanPoliticsModel>(new MyClanPoliticsModel());
```

## 参见

- [完整类目录](../catalog)