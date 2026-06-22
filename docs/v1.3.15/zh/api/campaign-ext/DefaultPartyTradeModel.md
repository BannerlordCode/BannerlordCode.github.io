<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTradeModel : PartyTradeModel`
**Base:** `PartyTradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTradeModel.cs`

## 概述

`DefaultPartyTradeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultPartyTradeModel>(new MyDefaultPartyTradeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public override int CaravanTransactionHighestValueItemCount { get; }` |

## 主要方法

### GetTradePenaltyFactor
```csharp
public override float GetTradePenaltyFactor(MobileParty party)
```

## 使用示例

```csharp
// DefaultPartyTradeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultPartyTradeModel>(new MyDefaultPartyTradeModel());
```

## 参见

- [完整类目录](../catalog)