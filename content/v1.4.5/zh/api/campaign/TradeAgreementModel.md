---
title: "TradeAgreementModel"
description: "TradeAgreementModel 的自动生成类参考。"
---
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**Base:** `MBGameModel<TradeAgreementModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TradeAgreementModel.cs`

## 概述

`TradeAgreementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TradeAgreementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetProfitPerCaravanVisit
`public abstract int GetProfitPerCaravanVisit(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「profit per caravan visit」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementModel 实例
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetProfitPerCaravanVisit(mobileParty);
```

### GetTradeAgreementDurationInYears
`public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「trade agreement duration in years」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementModel 实例
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetTradeAgreementDurationInYears(iniatatingKingdom, otherKingdom);
```

### GetMaximumTradeAgreementCount
`public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「maximum trade agreement count」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementModel 实例
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetMaximumTradeAgreementCount(kingdom);
```

### GetInfluenceCostOfProposingTradeAgreement
`public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)`

**用途 / Purpose:** 读取并返回当前对象中 「influence cost of proposing trade agreement」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementModel 实例
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetInfluenceCostOfProposingTradeAgreement(clan);
```

### GetScoreOfStartingTradeAgreement
`public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)`

**用途 / Purpose:** 读取并返回当前对象中 「score of starting trade agreement」 的结果。

```csharp
// 先通过子系统 API 拿到 TradeAgreementModel 实例
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.GetScoreOfStartingTradeAgreement(kingdom, targetKingdom, clan, explanation, false);
```

### CanMakeTradeAgreement
`public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 检查当前对象是否满足 「make trade agreement」 的前置条件。

```csharp
// 先通过子系统 API 拿到 TradeAgreementModel 实例
TradeAgreementModel tradeAgreementModel = ...;
var result = tradeAgreementModel.CanMakeTradeAgreement(kingdom, other, false, reason, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TradeAgreementModel instance = ...;
```

## 参见

- [本区域目录](../)