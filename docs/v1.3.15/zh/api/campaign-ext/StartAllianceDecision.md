<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StartAllianceDecision`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StartAllianceDecision

**命名空间:** TaleWorlds.CampaignSystem.Election
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class StartAllianceDecision : KingdomDecision`
**Base:** `KingdomDecision`
**领域:** campaign-ext

## 概述

`StartAllianceDecision` 位于 `TaleWorlds.CampaignSystem.Election`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllianceCampaignBehavior` | `public IAllianceCampaignBehavior AllianceCampaignBehavior { get; }` |

## 主要方法

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**用途 / Purpose:** 获取 `proposer clan for player kingdom` 的当前值。

### IsAllowed
`public override bool IsAllowed()`

**用途 / Purpose:** 处理 `is allowed` 相关逻辑。

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**用途 / Purpose:** 获取 `proposal influence cost` 的当前值。

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**用途 / Purpose:** 获取 `general title` 的当前值。

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**用途 / Purpose:** 获取 `support title` 的当前值。

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**用途 / Purpose:** 获取 `choose title` 的当前值。

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**用途 / Purpose:** 获取 `support description` 的当前值。

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**用途 / Purpose:** 获取 `choose description` 的当前值。

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**用途 / Purpose:** 处理 `determine initial candidates` 相关逻辑。

### DetermineChooser
`public override Clan DetermineChooser()`

**用途 / Purpose:** 处理 `determine chooser` 相关逻辑。

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 处理 `determine sponsors` 相关逻辑。

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 `chosen outcome` 应用到当前对象。

### OnShowDecision
`public override bool OnShowDecision()`

**用途 / Purpose:** 当 `show decision` 事件触发时调用此方法。

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 `secondary effects` 应用到当前对象。

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**用途 / Purpose:** 获取 `secondary effects` 的当前值。

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**用途 / Purpose:** 获取 `chosen outcome text` 的当前值。

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 获取 `queried decision outcome` 的当前值。

### CalculateSupport
`public float CalculateSupport(Clan clan, out TextObject hint, bool includeExplanation = false)`

**用途 / Purpose:** 处理 `calculate support` 相关逻辑。

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**用途 / Purpose:** 处理 `determine support` 相关逻辑。

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `make decision`。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
StartAllianceDecision.GetProposerClanForPlayerKingdom(target);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
