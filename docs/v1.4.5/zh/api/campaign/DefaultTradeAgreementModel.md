<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTradeAgreementModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTradeAgreementModel.cs`

## 概述

`DefaultTradeAgreementModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTradeAgreementModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetInfluenceCostOfProposingTradeAgreement
`public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)`

**用途 / Purpose:** 获取 `influence cost of proposing trade agreement` 的当前值。

### GetMaximumTradeAgreementCount
`public override int GetMaximumTradeAgreementCount(Kingdom kingdom)`

**用途 / Purpose:** 获取 `maximum trade agreement count` 的当前值。

### CanMakeTradeAgreement
`public override bool CanMakeTradeAgreement(Kingdom querierKingdom, Kingdom queriedKingdom, bool checkOtherSideSupport, out TextObject reason, bool includeReason = false)`

**用途 / Purpose:** 判断当前对象是否可以执行 `make trade agreement`。

### GetScoreOfStartingTradeAgreement
`public override float GetScoreOfStartingTradeAgreement(Kingdom querierKingdom, Kingdom queriedKingdom, Clan clan, out TextObject detailedBreakdownTooltip, bool includeExplanation = false)`

**用途 / Purpose:** 获取 `score of starting trade agreement` 的当前值。

### GetTradeAgreementDurationInYears
`public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)`

**用途 / Purpose:** 获取 `trade agreement duration in years` 的当前值。

### GetProfitPerCaravanVisit
`public override int GetProfitPerCaravanVisit(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `profit per caravan visit` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## 参见

- [完整类目录](../catalog)