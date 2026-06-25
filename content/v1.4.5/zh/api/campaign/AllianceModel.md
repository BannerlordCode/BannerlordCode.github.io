---
title: "AllianceModel"
description: "AllianceModel 的自动生成类参考。"
---
# AllianceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**Base:** `MBGameModel<AllianceModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AllianceModel.cs`

## 概述

`AllianceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AllianceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers { get; }` |

## 主要方法

### GetCallToWarCost
`public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 call to war cost 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetCallToWarCost(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetScoreOfStartingAlliance
`public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, out TextObject explanation, bool includeDescription = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score of starting alliance 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetScoreOfStartingAlliance(kingdomDeclaresAlliance, kingdomDeclaredAlliance, explanation, false);
```

### GetSupportScoreOfStartingAllianceForClan
`public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, Clan evaluatingClan, out TextObject explanation, bool includeDescription = false)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 support score of starting alliance for clan 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetSupportScoreOfStartingAllianceForClan(kingdomDeclaresAlliance, kingdomDeclaredAlliance, evaluatingClan, explanation, false);
```

### GetScoreOfCallingToWar
`public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score of calling to war 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetScoreOfCallingToWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetScoreOfJoiningWar
`public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score of joining war 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetScoreOfJoiningWar(offeringKingdom, kingdomToOfferToJoinWarWith, kingdomToOfferToJoinWarAgainst, evaluatingFaction, reason);
```

### GetInfluenceCostOfProposingStartingAlliance
`public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence cost of proposing starting alliance 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetInfluenceCostOfProposingStartingAlliance(proposingClan);
```

### GetInfluenceCostOfCallingToWar
`public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence cost of calling to war 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetInfluenceCostOfCallingToWar(proposingClan);
```

### CanMakeAlliance
`public abstract bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 make alliance 的前置条件。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.CanMakeAlliance(kingdom, targetKingdom, evaluatingFaction, reason, false);
```

### GetAllianceFactorForDeclaringWar
`public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alliance factor for declaring war 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetAllianceFactorForDeclaringWar(factionDeclaresWar, factionDeclaredWar);
```

### GetAllianceFactorForDeclaringPeace
`public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alliance factor for declaring peace 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetAllianceFactorForDeclaringPeace(factionDeclaresPeace, factionDeclaredPeace);
```

### GetProposerClanForAllianceDecision
`public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 proposer clan for alliance decision 的结果。

```csharp
// 先通过子系统 API 拿到 AllianceModel 实例
AllianceModel allianceModel = ...;
var result = allianceModel.GetProposerClanForAllianceDecision(proposerKingdom, proposedKingdom);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AllianceModel instance = ...;
```

## 参见

- [本区域目录](../)