---
title: "DefaultTradeAgreementModel"
description: "DefaultTradeAgreementModel 的自动生成类参考。"
---
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs`

## 概述

`DefaultTradeAgreementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTradeAgreementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetInfluenceCostOfProposingTradeAgreement
`public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 influence cost of proposing trade agreement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeAgreementModel 实例
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetInfluenceCostOfProposingTradeAgreement(proposerClan);
```

### GetMaximumTradeAgreementCount
`public override int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maximum trade agreement count 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeAgreementModel 实例
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetMaximumTradeAgreementCount(kingdom);
```

### CanMakeTradeAgreement
`public override bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 make trade agreement 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultTradeAgreementModel 实例
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.CanMakeTradeAgreement(kingdom, other, false, reason);
```

### GetScoreOfStartingTradeAgreement
`public override float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 score of starting trade agreement 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeAgreementModel 实例
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetScoreOfStartingTradeAgreement(kingdom, targetKingdom, clan);
```

### GetTradeAgreementDurationInYears
`public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trade agreement duration in years 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTradeAgreementModel 实例
DefaultTradeAgreementModel defaultTradeAgreementModel = ...;
var result = defaultTradeAgreementModel.GetTradeAgreementDurationInYears(iniatatingKingdom, otherKingdom);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## 参见

- [本区域目录](../)