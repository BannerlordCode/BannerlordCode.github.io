---
title: "KingdomElection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KingdomElection`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomElection

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomElection`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Election/KingdomElection.cs`

## 概述

`KingdomElection` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCancelled` | `public bool IsCancelled { get; }` |

## 主要方法

### StartElection
`public void StartElection()`

**用途 / Purpose:** 处理 `start election` 相关逻辑。

### GetElectionOutcomeSupport
`public static ElectionOutcomeSupport GetElectionOutcomeSupport(KingdomDecision decision, Clan sponsor)`

**用途 / Purpose:** 获取 `election outcome support` 的当前值。

### SetupResultWithoutPlayerSupport
`public void SetupResultWithoutPlayerSupport()`

**用途 / Purpose:** 设置 `up result without player support` 的值或状态。

### StartElectionWithoutPlayer
`public void StartElectionWithoutPlayer()`

**用途 / Purpose:** 处理 `start election without player` 相关逻辑。

### GetLikelihoodForSponsor
`public float GetLikelihoodForSponsor(Clan sponsor)`

**用途 / Purpose:** 获取 `likelihood for sponsor` 的当前值。

### GetWinChanceForSponsor
`public float GetWinChanceForSponsor(Clan sponsor)`

**用途 / Purpose:** 获取 `win chance for sponsor` 的当前值。

### GetDecisionOutcomeSupportForSponsor
`public ElectionOutcomeSupport GetDecisionOutcomeSupportForSponsor(Clan sponsor)`

**用途 / Purpose:** 获取 `decision outcome support for sponsor` 的当前值。

### GetRelationChangeWithSponsor
`public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)`

**用途 / Purpose:** 获取 `relation change with sponsor` 的当前值。

### GetChosenOutcomeText
`public TextObject GetChosenOutcomeText()`

**用途 / Purpose:** 获取 `chosen outcome text` 的当前值。

### DetermineOfficialSupport
`public void DetermineOfficialSupport()`

**用途 / Purpose:** 处理 `determine official support` 相关逻辑。

### GetWinChanceWithPlayerSupport
`public float GetWinChanceWithPlayerSupport(DecisionOutcome supportedOutcome, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** 获取 `win chance with player support` 的当前值。

### GetInfluenceCostOfOutcome
`public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)`

**用途 / Purpose:** 获取 `influence cost of outcome` 的当前值。

### GetSecondaryEffects
`public TextObject GetSecondaryEffects()`

**用途 / Purpose:** 获取 `secondary effects` 的当前值。

### OnPlayerSupport
`public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)`

**用途 / Purpose:** 当 `player support` 事件触发时调用此方法。

### OnPlayerAbstainedAsRuler
`public void OnPlayerAbstainedAsRuler()`

**用途 / Purpose:** 当 `player abstained as ruler` 事件触发时调用此方法。

### ApplySelection
`public void ApplySelection()`

**用途 / Purpose:** 将 `selection` 应用到当前对象。

### GetSortedDecisionOutcomes
`public MBList<DecisionOutcome> GetSortedDecisionOutcomes()`

**用途 / Purpose:** 获取 `sorted decision outcomes` 的当前值。

### GetGeneralTitle
`public TextObject GetGeneralTitle()`

**用途 / Purpose:** 获取 `general title` 的当前值。

### GetTitle
`public TextObject GetTitle()`

**用途 / Purpose:** 获取 `title` 的当前值。

### GetDescription
`public TextObject GetDescription()`

**用途 / Purpose:** 获取 `description` 的当前值。

## 使用示例

```csharp
var value = new KingdomElection();
value.StartElection();
```

## 参见

- [完整类目录](../catalog)