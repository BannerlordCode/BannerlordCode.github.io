<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBuildingScoreCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingScoreCalculationModel : BuildingScoreCalculationModel`
**Base:** `BuildingScoreCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingScoreCalculationModel.cs`

## 概述

`DefaultBuildingScoreCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultBuildingScoreCalculationModel>(new MyDefaultBuildingScoreCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetNextDailyBuilding
```csharp
public override Building GetNextDailyBuilding(Town town)
```

### GetNextBuilding
```csharp
public override Building GetNextBuilding(Town town)
```

## 使用示例

```csharp
// DefaultBuildingScoreCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultBuildingScoreCalculationModel>(new MyDefaultBuildingScoreCalculationModel());
```

## 参见

- [完整类目录](../catalog)