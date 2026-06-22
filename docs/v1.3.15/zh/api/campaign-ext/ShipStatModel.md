<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShipStatModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ShipStatModel : MBGameModel<ShipStatModel>`
**Base:** `MBGameModel<ShipStatModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipStatModel.cs`

## 概述

`ShipStatModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ShipStatModel>(new MyShipStatModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetShipFlagshipScore
```csharp
public abstract float GetShipFlagshipScore(Ship ship)
```

## 使用示例

```csharp
// ShipStatModel (Model) 的典型用法
Game.Current.ReplaceModel<ShipStatModel>(new MyShipStatModel());
```

## 参见

- [完整类目录](../catalog)