<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeAgreementDecisionOutcome`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementDecisionOutcome

**命名空间:** TaleWorlds.CampaignSystem.Election
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class TradeAgreementDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**领域:** campaign-ext

## 概述

`TradeAgreementDecisionOutcome` 位于 `TaleWorlds.CampaignSystem.Election`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnShowDecision
`public override bool OnShowDecision()`

**用途 / Purpose:** 当 `show decision` 事件触发时调用此方法。

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 `chosen outcome` 应用到当前对象。

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 `secondary effects` 应用到当前对象。

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**用途 / Purpose:** 获取 `proposer clan for player kingdom` 的当前值。

### DetermineChooser
`public override Clan DetermineChooser()`

**用途 / Purpose:** 处理 `determine chooser` 相关逻辑。

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**用途 / Purpose:** 处理 `determine initial candidates` 相关逻辑。

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 处理 `determine sponsors` 相关逻辑。

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**用途 / Purpose:** 处理 `determine support` 相关逻辑。

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**用途 / Purpose:** 获取 `choose description` 的当前值。

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**用途 / Purpose:** 获取 `choose title` 的当前值。

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**用途 / Purpose:** 获取 `chosen outcome text` 的当前值。

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**用途 / Purpose:** 获取 `general title` 的当前值。

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**用途 / Purpose:** 获取 `proposal influence cost` 的当前值。

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `make decision`。

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**用途 / Purpose:** 处理 `calculate support` 相关逻辑。

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 获取 `queried decision outcome` 的当前值。

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**用途 / Purpose:** 获取 `secondary effects` 的当前值。

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**用途 / Purpose:** 获取 `support description` 的当前值。

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**用途 / Purpose:** 获取 `support title` 的当前值。

### IsAllowed
`public override bool IsAllowed()`

**用途 / Purpose:** 处理 `is allowed` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 TradeAgreementDecisionOutcome 实例，再调用它的公开方法
var value = new TradeAgreementDecisionOutcome();
value.OnShowDecision();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
