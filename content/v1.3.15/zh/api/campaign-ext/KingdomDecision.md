---
title: "KingdomDecision"
description: "KingdomDecision 的自动生成类参考。"
---
# KingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecision`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Election/KingdomDecision.cs`

## 概述

`KingdomDecision` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Kingdom` | `public Kingdom Kingdom { get; }` |
| `ProposerClan` | `public Clan ProposerClan { get; }` |
| `IsEnforced` | `public bool IsEnforced { get; set; }` |
| `PlayerExamined` | `public bool PlayerExamined { get; set; }` |
| `NotifyPlayer` | `public bool NotifyPlayer { get; set; }` |
| `IsPlayerParticipant` | `public bool IsPlayerParticipant { get; set; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; set; }` |
| `IsKingsVoteAllowed` | `public virtual bool IsKingsVoteAllowed { get; }` |
| `NeedsPlayerResolution` | `public bool NeedsPlayerResolution { get; }` |

## 主要方法

### IsAllowed
`public abstract bool IsAllowed()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.IsAllowed();
```

### GetInfluenceCost
`public int GetInfluenceCost(Clan sponsorClan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence cost 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetInfluenceCost(sponsorClan);
```

### GetProposalInfluenceCost
`public abstract int GetProposalInfluenceCost()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 proposal influence cost 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public abstract TextObject GetGeneralTitle()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 general title 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetGeneralTitle();
```

### GetSupportTitle
`public abstract TextObject GetSupportTitle()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 support title 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetSupportTitle();
```

### GetChooseTitle
`public abstract TextObject GetChooseTitle()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 choose title 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetChooseTitle();
```

### GetSupportDescription
`public abstract TextObject GetSupportDescription()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 support description 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetSupportDescription();
```

### GetChooseDescription
`public abstract TextObject GetChooseDescription()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 choose description 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetChooseDescription();
```

### CalculateMeritOfOutcome
`public virtual float CalculateMeritOfOutcome(DecisionOutcome candidateOutcome)`

**用途 / Purpose:** **用途 / Purpose:** 计算merit of outcome的当前值或结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.CalculateMeritOfOutcome(candidateOutcome);
```

### DetermineInitialCandidates
`public abstract IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**用途 / Purpose:** **用途 / Purpose:** 根据当前状态判定initial candidates的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineInitialCandidates();
```

### NarrowDownCandidates
`public MBList<DecisionOutcome> NarrowDownCandidates(MBList<DecisionOutcome> initialCandidates, int maxCandidateCount)`

**用途 / Purpose:** **用途 / Purpose:** 调用 NarrowDownCandidates 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.NarrowDownCandidates(initialCandidates, 0);
```

### DetermineChooser
`public abstract Clan DetermineChooser()`

**用途 / Purpose:** **用途 / Purpose:** 根据当前状态判定chooser的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineChooser();
```

### DetermineSupporters
`public IEnumerable<Supporter> DetermineSupporters()`

**用途 / Purpose:** **用途 / Purpose:** 根据当前状态判定supporters的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineSupporters();
```

### CanMakeDecision
`public virtual bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 make decision 的前置条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.CanMakeDecision(reason, false);
```

### ShouldBeCancelled
`public bool ShouldBeCancelled()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldBeCancelled 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.ShouldBeCancelled();
```

### DetermineSupportOption
`public DecisionOutcome DetermineSupportOption(Supporter supporter, MBReadOnlyList<DecisionOutcome> possibleOutcomes, out Supporter.SupportWeights supportWeightOfSelectedOutcome, bool calculateRelationshipEffect)`

**用途 / Purpose:** **用途 / Purpose:** 根据当前状态判定support option的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineSupportOption(supporter, possibleOutcomes, supportWeightOfSelectedOutcome, false);
```

### DetermineSupport
`public abstract float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**用途 / Purpose:** **用途 / Purpose:** 根据当前状态判定support的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.DetermineSupport(clan, possibleOutcome);
```

### DetermineSponsors
`public abstract void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** **用途 / Purpose:** 根据当前状态判定sponsors的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
kingdomDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public abstract void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**用途 / Purpose:** **用途 / Purpose:** 将 chosen outcome 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
kingdomDecision.ApplyChosenOutcome(chosenOutcome);
```

### GetInfluenceCost
`public int GetInfluenceCost(DecisionOutcome decisionOutcome, Clan clan, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence cost 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetInfluenceCost(decisionOutcome, clan, supportWeight);
```

### GetSecondaryEffects
`public abstract TextObject GetSecondaryEffects()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 secondary effects 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetSecondaryEffects();
```

### ApplySecondaryEffects
`public abstract void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**用途 / Purpose:** **用途 / Purpose:** 将 secondary effects 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
kingdomDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetChosenOutcomeText
`public abstract TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 chosen outcome text 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### SortDecisionOutcomes
`public MBList<DecisionOutcome> SortDecisionOutcomes(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SortDecisionOutcomes 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.SortDecisionOutcomes(possibleOutcomes);
```

### GetQueriedDecisionOutcome
`public abstract DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 queried decision outcome 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### IsSingleClanDecision
`public bool IsSingleClanDecision()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 single clan decision 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.IsSingleClanDecision();
```

### CalculateRelationshipEffectWithSponsor
`public virtual float CalculateRelationshipEffectWithSponsor(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 计算relationship effect with sponsor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.CalculateRelationshipEffectWithSponsor(clan);
```

### GetInfluenceCostOfSupport
`public int GetInfluenceCostOfSupport(Clan clan, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence cost of support 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetInfluenceCostOfSupport(clan, supportWeight);
```

### OnShowDecision
`public virtual bool OnShowDecision()`

**用途 / Purpose:** **用途 / Purpose:** 在 show decision 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.OnShowDecision();
```

### GetFollowUpDecision
`public virtual KingdomDecision GetFollowUpDecision()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 follow up decision 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomDecision 实例
KingdomDecision kingdomDecision = ...;
var result = kingdomDecision.GetFollowUpDecision();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
KingdomDecision instance = ...;
```

## 参见

- [本区域目录](../)