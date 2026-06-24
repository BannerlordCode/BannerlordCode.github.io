<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IssueModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**Base:** `MBGameModel<IssueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`

## 概述

`IssueModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `IssueModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays { get; }` |

## 主要方法

### GetIssueDifficultyMultiplier
`public abstract float GetIssueDifficultyMultiplier()`

**用途 / Purpose:** 获取 `issue difficulty multiplier` 的当前值。

### GetIssueEffectsOfSettlement
`public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `issue effects of settlement` 的当前值。

### GetIssueEffectOfHero
`public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `issue effect of hero` 的当前值。

### GetIssueEffectOfClan
`public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)`

**用途 / Purpose:** 获取 `issue effect of clan` 的当前值。

### GetCausalityForHero
`public abstract ValueTuple<int, int> GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `causality for hero` 的当前值。

### GetFailureRiskForHero
`public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `failure risk for hero` 的当前值。

### GetDurationOfResolutionForHero
`public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `duration of resolution for hero` 的当前值。

### GetTroopsRequiredForHero
`public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)`

**用途 / Purpose:** 获取 `troops required for hero` 的当前值。

### CanTroopsReturnFromAlternativeSolution
`public abstract bool CanTroopsReturnFromAlternativeSolution()`

**用途 / Purpose:** 判断当前对象是否可以执行 `troops return from alternative solution`。

### GetIssueAlternativeSolutionSkill
`public abstract ValueTuple<SkillObject, int> GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)`

**用途 / Purpose:** 获取 `issue alternative solution skill` 的当前值。

## 使用示例

```csharp
var implementation = new CustomIssueModel();
```

## 参见

- [完整类目录](../catalog)