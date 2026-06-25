---
title: "TradeAgreementDecision"
description: "TradeAgreementDecision 的自动生成类参考。"
---
# TradeAgreementDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/TradeAgreementDecision.cs`

## 概述

`TradeAgreementDecision` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnShowDecision
`public override bool OnShowDecision()`

**用途 / Purpose:** 在 「show decision」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.OnShowDecision();
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 「chosen outcome」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.ApplyChosenOutcome(chosenOutcome);
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 「secondary effects」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetProposerClanForPlayerKingdom
`public static Clan GetProposerClanForPlayerKingdom(Kingdom target)`

**用途 / Purpose:** 读取并返回当前对象中 「proposer clan for player kingdom」 的结果。

```csharp
// 静态调用，不需要实例
TradeAgreementDecision.GetProposerClanForPlayerKingdom(target);
```

### DetermineChooser
`public override Clan DetermineChooser()`

**用途 / Purpose:** 根据当前状态判定「chooser」的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineChooser();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**用途 / Purpose:** 根据当前状态判定「initial candidates」的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineInitialCandidates();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 根据当前状态判定「sponsors」的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.DetermineSponsors(possibleOutcomes);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**用途 / Purpose:** 根据当前状态判定「support」的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.DetermineSupport(clan, possibleOutcome);
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「choose description」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChooseDescription();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「choose title」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChooseTitle();
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**用途 / Purpose:** 读取并返回当前对象中 「chosen outcome text」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「general title」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetGeneralTitle();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**用途 / Purpose:** 读取并返回当前对象中 「proposal influence cost」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetProposalInfluenceCost();
```

### CanMakeDecision
`public override bool CanMakeDecision(out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 检查当前对象是否满足 「make decision」 的前置条件。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.CanMakeDecision(reason, false);
```

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**用途 / Purpose:** 计算「support」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.CalculateSupport(clan);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 读取并返回当前对象中 「queried decision outcome」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**用途 / Purpose:** 读取并返回当前对象中 「secondary effects」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSecondaryEffects();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「support description」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSupportDescription();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「support title」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetSupportTitle();
```

### IsAllowed
`public override bool IsAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 「allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.IsAllowed();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「decision description」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionDescription();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 「decision image identifier」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionImageIdentifier();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**用途 / Purpose:** 读取并返回当前对象中 「decision link」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionLink();
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「decision title」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementDecision 实例
TradeAgreementDecision tradeAgreementDecision = ...;
var result = tradeAgreementDecision.GetDecisionTitle();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TradeAgreementDecision tradeAgreementDecision = ...;
tradeAgreementDecision.OnShowDecision();
```

## 参见

- [本区域目录](../)