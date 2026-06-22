<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeAgreementModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**Base:** `MBGameModel<TradeAgreementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs`

## 概述

`TradeAgreementModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<TradeAgreementModel>(new MyTradeAgreementModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTradeAgreementDurationInYears
```csharp
public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)
```

### GetMaximumTradeAgreementCount
```csharp
public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)
```

### GetInfluenceCostOfProposingTradeAgreement
```csharp
public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)
```

### GetScoreOfStartingTradeAgreement
```csharp
public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false)
```

### CanMakeTradeAgreement
```csharp
public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false)
```

## 使用示例

```csharp
// TradeAgreementModel (Model) 的典型用法
Game.Current.ReplaceModel<TradeAgreementModel>(new MyTradeAgreementModel());
```

## 参见

- [完整类目录](../catalog)