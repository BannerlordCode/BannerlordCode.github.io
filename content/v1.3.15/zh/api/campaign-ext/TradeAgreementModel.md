---
title: "TradeAgreementModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeAgreementModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**Base:** `MBGameModel<TradeAgreementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs`

## 概述

`TradeAgreementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TradeAgreementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTradeAgreementDurationInYears
`public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**用途 / Purpose:** 获取 `trade agreement duration in years` 的当前值。

### GetMaximumTradeAgreementCount
`public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**用途 / Purpose:** 获取 `maximum trade agreement count` 的当前值。

### GetInfluenceCostOfProposingTradeAgreement
`public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)`

**用途 / Purpose:** 获取 `influence cost of proposing trade agreement` 的当前值。

### GetScoreOfStartingTradeAgreement
`public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)`

**用途 / Purpose:** 获取 `score of starting trade agreement` 的当前值。

### CanMakeTradeAgreement
`public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `make trade agreement`。

## 使用示例

```csharp
var implementation = new CustomTradeAgreementModel();
```

## 参见

- [完整类目录](../catalog)