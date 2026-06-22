<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultShipCostModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**Base:** `ShipCostModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs`

## 概述

`DefaultShipCostModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetShipTradeValue
```csharp
public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)
```

### GetShipRepairCost
```csharp
public override float GetShipRepairCost(Ship ship, PartyBase owner)
```

### GetShipUpgradePieceCost
```csharp
public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)
```

### GetShipSellingPenalty
```csharp
public override float GetShipSellingPenalty()
```

## 使用示例

```csharp
// DefaultShipCostModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultShipCostModel>(new MyDefaultShipCostModel());
```

## 参见

- [完整类目录](../catalog)