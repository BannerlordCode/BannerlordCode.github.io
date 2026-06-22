<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultTradeAgreementModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**Base:** `TradeAgreementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs`

## 概述

`DefaultTradeAgreementModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetInfluenceCostOfProposingTradeAgreement
```csharp
public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)
```

### GetMaximumTradeAgreementCount
```csharp
public override int GetMaximumTradeAgreementCount(Kingdom kingdom)
```

### CanMakeTradeAgreement
```csharp
public override bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)
```

### GetScoreOfStartingTradeAgreement
```csharp
public override float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)
```

### GetTradeAgreementDurationInYears
```csharp
public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)
```

## 使用示例

```csharp
// DefaultTradeAgreementModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultTradeAgreementModel>(new MyDefaultTradeAgreementModel());
```

## 参见

- [完整类目录](../catalog)