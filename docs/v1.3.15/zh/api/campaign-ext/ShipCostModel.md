<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipCostModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipCostModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipCostModel : MBGameModel<ShipCostModel>`
**Base:** `MBGameModel<ShipCostModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs`

## 概述

`ShipCostModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ShipCostModel>(new MyShipCostModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetShipTradeValue
```csharp
public abstract float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)
```

### GetShipRepairCost
```csharp
public abstract float GetShipRepairCost(Ship ship, PartyBase owner)
```

### GetShipUpgradePieceCost
```csharp
public abstract int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)
```

### GetShipSellingPenalty
```csharp
public abstract float GetShipSellingPenalty()
```

## 使用示例

```csharp
// ShipCostModel (Model) 的典型用法
Game.Current.ReplaceModel<ShipCostModel>(new MyShipCostModel());
```

## 参见

- [完整类目录](../catalog)