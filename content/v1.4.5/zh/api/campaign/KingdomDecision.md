---
title: "KingdomDecision"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomDecision`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecision`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/KingdomDecision.cs`

## 概述

`KingdomDecision` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ProposerClan` | `public Clan ProposerClan { get; }` |
| `IsEnforced` | `public bool IsEnforced { get; set; }` |
| `PlayerExamined` | `public bool PlayerExamined { get; set; }` |
| `NotifyPlayer` | `public bool NotifyPlayer { get; set; }` |
| `IsPlayerParticipant` | `public bool IsPlayerParticipant { get; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; set; }` |
| `NeedsPlayerResolution` | `public bool NeedsPlayerResolution { get; }` |

## 主要方法

### IsAllowed
`public abstract bool IsAllowed()`

**用途 / Purpose:** 处理 `is allowed` 相关逻辑。

### GetInfluenceCost
`public int GetInfluenceCost(Clan sponsorClan)`

**用途 / Purpose:** 获取 `influence cost` 的当前值。

### GetProposalInfluenceCost
`public abstract int GetProposalInfluenceCost()`

**用途 / Purpose:** 获取 `proposal influence cost` 的当前值。

### GetGeneralTitle
`public abstract TextObject GetGeneralTitle()`

**用途 / Purpose:** 获取 `general title` 的当前值。

### GetSupportTitle
`public abstract TextObject GetSupportTitle()`

**用途 / Purpose:** 获取 `support title` 的当前值。

### GetChooseTitle
`public abstract TextObject GetChooseTitle()`

**用途 / Purpose:** 获取 `choose title` 的当前值。

### GetSupportDescription
`public abstract TextObject GetSupportDescription()`

**用途 / Purpose:** 获取 `support description` 的当前值。

### GetChooseDescription
`public abstract TextObject GetChooseDescription()`

**用途 / Purpose:** 获取 `choose description` 的当前值。

### CalculateMeritOfOutcome
`public virtual float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**用途 / Purpose:** 处理 `calculate merit of outcome` 相关逻辑。

### DetermineInitialCandidates
`public abstract IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**用途 / Purpose:** 处理 `determine initial candidates` 相关逻辑。

### NarrowDownCandidates
`public MBList<DecisionOutcome> NarrowDownCandidates(MBList<DecisionOutcome> initialCandidates, int maxCandidateCount)`

**用途 / Purpose:** 处理 `narrow down candidates` 相关逻辑。

### DetermineChooser
`public abstract Clan DetermineChooser()`

**用途 / Purpose:** 处理 `determine chooser` 相关逻辑。

### DetermineSupporters
`public IEnumerable<Supporter> DetermineSupporters()`

**用途 / Purpose:** 处理 `determine supporters` 相关逻辑。

### CanMakeDecision
`public virtual bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `make decision`。

### ShouldBeCancelled
`public bool ShouldBeCancelled()`

**用途 / Purpose:** 处理 `should be cancelled` 相关逻辑。

### DetermineSupportOption
`public DecisionOutcome DetermineSupportOption(Supporter supporter, MBReadOnlyList<DecisionOutcome> possibleOutcomes, out Supporter.SupportWeights supportWeightOfSelectedOutcome, bool calculateRelationshipEffect)`

**用途 / Purpose:** 处理 `determine support option` 相关逻辑。

### DetermineSupport
`public abstract float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**用途 / Purpose:** 处理 `determine support` 相关逻辑。

### DetermineSponsors
`public abstract void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 处理 `determine sponsors` 相关逻辑。

### ApplyChosenOutcome
`public abstract void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 `chosen outcome` 应用到当前对象。

### GetInfluenceCost
`public int GetInfluenceCost(DecisionOutcome decisionOutcome, Clan clan, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** 获取 `influence cost` 的当前值。

### GetSecondaryEffects
`public abstract TextObject GetSecondaryEffects()`

**用途 / Purpose:** 获取 `secondary effects` 的当前值。

### ApplySecondaryEffects
`public abstract void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 `secondary effects` 应用到当前对象。

### GetChosenOutcomeText
`public abstract TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, SupportStatus supportStatus, bool isShortVersion = false)`

**用途 / Purpose:** 获取 `chosen outcome text` 的当前值。

### SortDecisionOutcomes
`public MBList<DecisionOutcome> SortDecisionOutcomes(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 处理 `sort decision outcomes` 相关逻辑。

### GetQueriedDecisionOutcome
`public abstract DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 获取 `queried decision outcome` 的当前值。

### IsSingleClanDecision
`public bool IsSingleClanDecision()`

**用途 / Purpose:** 处理 `is single clan decision` 相关逻辑。

### CalculateRelationshipEffectWithSponsor
`public virtual float CalculateRelationshipEffectWithSponsor(Clan clan)`

**用途 / Purpose:** 处理 `calculate relationship effect with sponsor` 相关逻辑。

### GetInfluenceCostOfSupport
`public int GetInfluenceCostOfSupport(Clan clan, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** 获取 `influence cost of support` 的当前值。

### OnShowDecision
`public virtual bool OnShowDecision()`

**用途 / Purpose:** 当 `show decision` 事件触发时调用此方法。

### GetFollowUpDecision
`public virtual KingdomDecision GetFollowUpDecision()`

**用途 / Purpose:** 获取 `follow up decision` 的当前值。

## 使用示例

```csharp
var implementation = new CustomKingdomDecision();
```

## 参见

- [完整类目录](../catalog)