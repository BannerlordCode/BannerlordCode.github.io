---
title: "KingdomElection"
description: "KingdomElection 的自动生成类参考。"
---
# KingdomElection

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomElection`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Election/KingdomElection.cs`

## 概述

`KingdomElection` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PossibleOutcomes` | `public MBReadOnlyList<DecisionOutcome> PossibleOutcomes { get; }` |
| `IsCancelled` | `public bool IsCancelled { get; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; }` |
| `IsPlayerChooser` | `public bool IsPlayerChooser { get; }` |

## 主要方法

### StartElection
`public void StartElection()`

**用途 / Purpose:** 启动「election」流程或状态机。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
kingdomElection.StartElection();
```

### StartElectionWithoutPlayer
`public void StartElectionWithoutPlayer()`

**用途 / Purpose:** 启动「election without player」流程或状态机。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
kingdomElection.StartElectionWithoutPlayer();
```

### GetLikelihoodForSponsor
`public float GetLikelihoodForSponsor(Clan sponsor)`

**用途 / Purpose:** 读取并返回当前对象中 「likelihood for sponsor」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetLikelihoodForSponsor(sponsor);
```

### GetRelationChangeWithSponsor
`public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)`

**用途 / Purpose:** 读取并返回当前对象中 「relation change with sponsor」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetRelationChangeWithSponsor(opposerOrSupporter, supportWeight, false);
```

### GetChosenOutcomeText
`public TextObject GetChosenOutcomeText()`

**用途 / Purpose:** 读取并返回当前对象中 「chosen outcome text」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetChosenOutcomeText();
```

### DetermineOfficialSupport
`public void DetermineOfficialSupport()`

**用途 / Purpose:** 根据当前状态判定「official support」的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
kingdomElection.DetermineOfficialSupport();
```

### GetInfluenceCostOfOutcome
`public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of outcome」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetInfluenceCostOfOutcome(outcome, supporter, weight);
```

### GetSecondaryEffects
`public TextObject GetSecondaryEffects()`

**用途 / Purpose:** 读取并返回当前对象中 「secondary effects」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetSecondaryEffects();
```

### OnPlayerSupport
`public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** 在 「player support」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
kingdomElection.OnPlayerSupport(decisionOutcome, supportWeight);
```

### ApplySelection
`public void ApplySelection()`

**用途 / Purpose:** 将 「selection」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
kingdomElection.ApplySelection();
```

### GetSortedDecisionOutcomes
`public MBList<DecisionOutcome> GetSortedDecisionOutcomes()`

**用途 / Purpose:** 读取并返回当前对象中 「sorted decision outcomes」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetSortedDecisionOutcomes();
```

### GetGeneralTitle
`public TextObject GetGeneralTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「general title」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetGeneralTitle();
```

### GetTitle
`public TextObject GetTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「title」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetTitle();
```

### GetDescription
`public TextObject GetDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「description」 的结果。

```csharp
// 先通过子系统 API 拿到 KingdomElection 实例
KingdomElection kingdomElection = ...;
var result = kingdomElection.GetDescription();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomElection kingdomElection = ...;
kingdomElection.StartElection();
```

## 参见

- [本区域目录](../)