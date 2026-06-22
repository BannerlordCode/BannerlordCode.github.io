<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultIssueModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel`
**Base:** `IssueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs`

## 概述

`DefaultIssueModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public override int IssueOwnerCoolDownInDays { get; }` |

## 主要方法

### GetIssueDifficultyMultiplier
```csharp
public override float GetIssueDifficultyMultiplier()
```

### GetIssueEffectsOfSettlement
```csharp
public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfHero
```csharp
public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfClan
```csharp
public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)
```

### GetCausalityForHero
```csharp
public override ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetFailureRiskForHero
```csharp
public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetDurationOfResolutionForHero
```csharp
public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetTroopsRequiredForHero
```csharp
public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetIssueAlternativeSolutionSkill
```csharp
public override ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)
```

### CanTroopsReturnFromAlternativeSolution
```csharp
public override bool CanTroopsReturnFromAlternativeSolution()
```

## 使用示例

```csharp
// DefaultIssueModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultIssueModel>(new MyDefaultIssueModel());
```

## 参见

- [完整类目录](../catalog)