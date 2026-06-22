<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`
**Base:** `MBGameModel<BuildingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingModel.cs`

## 概述

`BuildingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BuildingModel>(new MyBuildingModel())` 注册，以改变其计算逻辑。

## 主要方法

### CanAddBuildingTypeToTown
```csharp
public abstract bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)
```

## 使用示例

```csharp
// BuildingModel (Model) 的典型用法
Game.Current.ReplaceModel<BuildingModel>(new MyBuildingModel());
```

## 参见

- [完整类目录](../catalog)