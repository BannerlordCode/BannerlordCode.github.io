---
title: "DefaultAllianceModel"
description: "DefaultAllianceModel 的自动生成类参考。"
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAllianceModel.cs`

## 概述

`DefaultAllianceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultAllianceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** 读取并返回当前对象中 call to war cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetCallToWarCost(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom, Kingdom queriedKingdom, out TextObject explanationText, bool includeDescription = false)`

**用途 / Purpose:** 读取并返回当前对象中 score of starting alliance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfStartingAlliance(querierKingdom, queriedKingdom, explanationText, false);
```

### GetSupportScoreOfStartingAllianceForClan
`public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom, Kingdom queriedKingdom, Clan evaluatingClan, out TextObject explanationText, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 support score of starting alliance for clan 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetSupportScoreOfStartingAllianceForClan(querierKingdom, queriedKingdom, evaluatingClan, explanationText, false);
```

### CanMakeAlliance
`public override bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 检查当前对象是否满足 make alliance 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.CanMakeAlliance(kingdom, targetKingdom, evaluatingFaction, reason, false);
```

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 influence cost of proposing starting alliance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfProposingStartingAlliance(proposingClan);
```

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**用途 / Purpose:** 读取并返回当前对象中 score of calling to war 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfCallingToWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**用途 / Purpose:** 读取并返回当前对象中 score of joining war 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfJoiningWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**用途 / Purpose:** 读取并返回当前对象中 influence cost of calling to war 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfCallingToWar(proposingClan);
```

### GetAllianceFactorForDeclaringWar
`public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)`

**用途 / Purpose:** 读取并返回当前对象中 alliance factor for declaring war 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetAllianceFactorForDeclaringWar(factionDeclaresWar, factionDeclaredWar);
```

### GetAllianceFactorForDeclaringPeace
`public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** 读取并返回当前对象中 alliance factor for declaring peace 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetAllianceFactorForDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### GetProposerClanForAllianceDecision
`public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)`

**用途 / Purpose:** 读取并返回当前对象中 proposer clan for alliance decision 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetProposerClanForAllianceDecision(proposerKingdom, proposedKingdom);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## 参见

- [本区域目录](../)