<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingScoreCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>`
**Base:** `MBGameModel<BuildingScoreCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs`

## 概述

`BuildingScoreCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BuildingScoreCalculationModel>(new MyBuildingScoreCalculationModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetNextBuilding
```csharp
public abstract Building GetNextBuilding(Town town)
```

### GetNextDailyBuilding
```csharp
public abstract Building GetNextDailyBuilding(Town town)
```

## 使用示例

```csharp
// BuildingScoreCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<BuildingScoreCalculationModel>(new MyBuildingScoreCalculationModel());
```

## 参见

- [完整类目录](../catalog)