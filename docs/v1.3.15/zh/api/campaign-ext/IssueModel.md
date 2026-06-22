<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IssueModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**Base:** `MBGameModel<IssueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`

## 概述

`IssueModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<IssueModel>(new MyIssueModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays { get; }` |

## 主要方法

### GetIssueDifficultyMultiplier
```csharp
public abstract float GetIssueDifficultyMultiplier()
```

### GetIssueEffectsOfSettlement
```csharp
public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfHero
```csharp
public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)
```

### GetIssueEffectOfClan
```csharp
public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)
```

### GetCausalityForHero
```csharp
public abstract ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetFailureRiskForHero
```csharp
public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetDurationOfResolutionForHero
```csharp
public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### GetTroopsRequiredForHero
```csharp
public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)
```

### CanTroopsReturnFromAlternativeSolution
```csharp
public abstract bool CanTroopsReturnFromAlternativeSolution()
```

### GetIssueAlternativeSolutionSkill
```csharp
public abstract ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)
```

## 使用示例

```csharp
// IssueModel (Model) 的典型用法
Game.Current.ReplaceModel<IssueModel>(new MyIssueModel());
```

## 参见

- [完整类目录](../catalog)