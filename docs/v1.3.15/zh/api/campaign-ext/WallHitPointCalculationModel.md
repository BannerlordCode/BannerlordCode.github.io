<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WallHitPointCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WallHitPointCalculationModel : MBGameModel<WallHitPointCalculationModel>`
**Base:** `MBGameModel<WallHitPointCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/WallHitPointCalculationModel.cs`

## 概述

`WallHitPointCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<WallHitPointCalculationModel>(new MyWallHitPointCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateMaximumWallHitPoint
```csharp
public abstract float CalculateMaximumWallHitPoint(Town town)
```

## 使用示例

```csharp
// WallHitPointCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<WallHitPointCalculationModel>(new MyWallHitPointCalculationModel());
```

## 参见

- [完整类目录](../catalog)