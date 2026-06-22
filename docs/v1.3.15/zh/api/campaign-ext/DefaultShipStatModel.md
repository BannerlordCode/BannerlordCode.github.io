<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultShipStatModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultShipStatModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultShipStatModel : ShipStatModel`
**Base:** `ShipStatModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipStatModel.cs`

## 概述

`DefaultShipStatModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetShipFlagshipScore
```csharp
public override float GetShipFlagshipScore(Ship ship)
```

## 使用示例

```csharp
// DefaultShipStatModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultShipStatModel>(new MyDefaultShipStatModel());
```

## 参见

- [完整类目录](../catalog)