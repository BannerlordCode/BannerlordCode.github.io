---
title: "DefaultAllianceModel"
description: "DefaultAllianceModel 的自动生成类参考。"
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## 概述

`DefaultAllianceModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultAllianceModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public override CampaignTime DurationForOffers { get; }` |

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
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, bool includeDescription = false)`

**用途 / Purpose:** 读取并返回当前对象中 score of starting alliance 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAllianceModel 实例
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfStartingAlliance(kingdomDeclaresAlliance, kingdomDeclaredAlliance, evaluatingFaction, false);
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

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultAllianceModel>(new MyDefaultAllianceModel());
```

## 参见

- [本区域目录](../)