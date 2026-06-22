<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultWallHitPointCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultWallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWallHitPointCalculationModel : WallHitPointCalculationModel`
**Base:** `WallHitPointCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWallHitPointCalculationModel.cs`

## 概述

`DefaultWallHitPointCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### CalculateMaximumWallHitPoint
```csharp
public override float CalculateMaximumWallHitPoint(Town town)
```

## 使用示例

```csharp
// DefaultWallHitPointCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel());
```

## 参见

- [完整类目录](../catalog)