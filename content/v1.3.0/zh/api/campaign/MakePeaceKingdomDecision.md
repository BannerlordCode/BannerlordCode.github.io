---
title: "MakePeaceKingdomDecision"
description: "MakePeaceKingdomDecision 的自动生成类参考。"
---
# MakePeaceKingdomDecision

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MakePeaceKingdomDecision : KingdomDecision`
**Base:** `KingdomDecision`
**File:** `TaleWorlds.CampaignSystem/Election/MakePeaceKingdomDecision.cs`

## 概述

`MakePeaceKingdomDecision` 位于 `TaleWorlds.CampaignSystem.Election`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Election` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsAllowed
`public override bool IsAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 「allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.IsAllowed();
```

### GetProposalInfluenceCost
`public override int GetProposalInfluenceCost()`

**用途 / Purpose:** 读取并返回当前对象中 「proposal influence cost」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetProposalInfluenceCost();
```

### GetGeneralTitle
`public override TextObject GetGeneralTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「general title」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetGeneralTitle();
```

### GetSupportTitle
`public override TextObject GetSupportTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「support title」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetSupportTitle();
```

### GetChooseTitle
`public override TextObject GetChooseTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「choose title」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetChooseTitle();
```

### GetSupportDescription
`public override TextObject GetSupportDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「support description」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetSupportDescription();
```

### GetChooseDescription
`public override TextObject GetChooseDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「choose description」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetChooseDescription();
```

### DetermineInitialCandidates
`public override IEnumerable<DecisionOutcome> DetermineInitialCandidates()`

**用途 / Purpose:** 根据当前状态判定「initial candidates」的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.DetermineInitialCandidates();
```

### DetermineChooser
`public override Clan DetermineChooser()`

**用途 / Purpose:** 根据当前状态判定「chooser」的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.DetermineChooser();
```

### DetermineSponsors
`public override void DetermineSponsors(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 根据当前状态判定「sponsors」的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.DetermineSponsors(possibleOutcomes);
```

### ApplyChosenOutcome
`public override void ApplyChosenOutcome(DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 「chosen outcome」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.ApplyChosenOutcome(chosenOutcome);
```

### OnShowDecision
`public override bool OnShowDecision()`

**用途 / Purpose:** 在 「show decision」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.OnShowDecision();
```

### GetSecondaryEffects
`public override TextObject GetSecondaryEffects()`

**用途 / Purpose:** 读取并返回当前对象中 「secondary effects」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetSecondaryEffects();
```

### ApplySecondaryEffects
`public override void ApplySecondaryEffects(MBReadOnlyList<DecisionOutcome> possibleOutcomes, DecisionOutcome chosenOutcome)`

**用途 / Purpose:** 将 「secondary effects」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.ApplySecondaryEffects(possibleOutcomes, chosenOutcome);
```

### GetChosenOutcomeText
`public override TextObject GetChosenOutcomeText(DecisionOutcome chosenOutcome, KingdomDecision.SupportStatus supportStatus, bool isShortVersion = false)`

**用途 / Purpose:** 读取并返回当前对象中 「chosen outcome text」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetChosenOutcomeText(chosenOutcome, supportStatus, false);
```

### GetQueriedDecisionOutcome
`public override DecisionOutcome GetQueriedDecisionOutcome(MBReadOnlyList<DecisionOutcome> possibleOutcomes)`

**用途 / Purpose:** 读取并返回当前对象中 「queried decision outcome」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetQueriedDecisionOutcome(possibleOutcomes);
```

### CalculateSupport
`public float CalculateSupport(Clan clan)`

**用途 / Purpose:** 计算「support」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.CalculateSupport(clan);
```

### DetermineSupport
`public override float DetermineSupport(Clan clan, DecisionOutcome possibleOutcome)`

**用途 / Purpose:** 根据当前状态判定「support」的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.DetermineSupport(clan, possibleOutcome);
```

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**用途 / Purpose:** 读取并返回当前对象中 「decision title」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**用途 / Purpose:** 读取并返回当前对象中 「decision description」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**用途 / Purpose:** 读取并返回当前对象中 「decision link」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**用途 / Purpose:** 读取并返回当前对象中 「decision image identifier」 的结果。

```csharp
// 先通过子系统 API 拿到 MakePeaceKingdomDecision 实例
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
var result = makePeaceKingdomDecision.GetDecisionImageIdentifier();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MakePeaceKingdomDecision makePeaceKingdomDecision = ...;
makePeaceKingdomDecision.IsAllowed();
```

## 参见

- [本区域目录](../)