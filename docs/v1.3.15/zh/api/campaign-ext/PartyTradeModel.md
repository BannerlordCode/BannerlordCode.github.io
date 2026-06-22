<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTradeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTradeModel : MBGameModel<PartyTradeModel>`
**Base:** `MBGameModel<PartyTradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTradeModel.cs`

## 概述

`PartyTradeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `CaravanTransactionHighestValueItemCount` | `public abstract int CaravanTransactionHighestValueItemCount { get; }` |

## 主要方法

### GetTradePenaltyFactor
```csharp
public abstract float GetTradePenaltyFactor(MobileParty party)
```

## 使用示例

```csharp
// PartyTradeModel (Model) 的典型用法
Game.Current.ReplaceModel<PartyTradeModel>(new MyPartyTradeModel());
```

## 参见

- [完整类目录](../catalog)